import { NextRequest, NextResponse } from "next/server";
import {
  getAllProjectsFromDb,
  saveProjectToDb,
  updateProjectInDb,
  deleteProjectFromDb,
  getAdminAuth,
  CmsProjectPayload,
} from "../../../lib/firebaseAdmin";
import { workData, ProjectItem } from "../../../data/work";

// Helper to verify admin authorization header (Firebase ID Token)
async function verifyAdminUser(req: NextRequest): Promise<{ authorized: boolean; email?: string }> {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return { authorized: false };
    }
    const token = authHeader.split("Bearer ")[1];
    const auth = await getAdminAuth();
    const decodedToken = await auth.verifyIdToken(token);
    return { authorized: true, email: decodedToken.email };
  } catch (error) {
    console.error("Project API Auth Error:", error);
    return { authorized: false };
  }
}

// GET: Public & Admin retrieval of work portfolio projects
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");
    const sourceOnly = searchParams.get("sourceOnly"); // "db" or "all"

    let dbProjects: any[] = [];
    try {
      dbProjects = await getAllProjectsFromDb();
    } catch (dbErr) {
      console.warn("Firestore unavailable, falling back to static data:", dbErr);
      dbProjects = [];
    }

    if (sourceOnly === "db") {
      return NextResponse.json({
        success: true,
        projects: dbProjects,
      });
    }

    // Merge dynamic projects with static starter projects
    const dbProjectMap = new Map(dbProjects.map((p) => [p.slug, p]));
    const dynamicOnly = dbProjects.filter((p) => !workData.some((w) => w.slug === p.slug));

    const mergedList: (ProjectItem | (typeof dbProjects)[0])[] = [
      ...dynamicOnly,
      ...workData.map((staticItem) => dbProjectMap.get(staticItem.slug) || staticItem),
    ];

    if (slug) {
      const found = mergedList.find((p) => p.slug === slug);
      if (!found) {
        return NextResponse.json({ success: false, error: "Project not found." }, { status: 404 });
      }
      return NextResponse.json({ success: true, project: found });
    }

    return NextResponse.json({
      success: true,
      projects: mergedList,
      totalCount: mergedList.length,
      customCount: dbProjects.length,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal Server Error";
    console.error("Error fetching projects:", errorMsg);
    return NextResponse.json({ success: false, error: errorMsg }, { status: 500 });
  }
}

// POST: Authenticated admin creation of a new work portfolio project
export async function POST(req: NextRequest) {
  const { authorized, email } = await verifyAdminUser(req);
  if (!authorized) {
    return NextResponse.json({ success: false, error: "Unauthorized access." }, { status: 401 });
  }

  try {
    const body = (await req.json()) as CmsProjectPayload;

    if (!body.title || !body.brandName) {
      return NextResponse.json(
        { success: false, error: "Project Title and Brand Name are required." },
        { status: 400 }
      );
    }

    const docId = await saveProjectToDb(body);

    return NextResponse.json({
      success: true,
      id: docId,
      message: "Project successfully published to portfolio.",
      createdByUser: email,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal Server Error";
    console.error("Error creating project:", errorMsg);
    return NextResponse.json({ success: false, error: errorMsg }, { status: 500 });
  }
}

// PATCH: Authenticated admin update of an existing project
export async function PATCH(req: NextRequest) {
  const { authorized } = await verifyAdminUser(req);
  if (!authorized) {
    return NextResponse.json({ success: false, error: "Unauthorized access." }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ success: false, error: "Project ID is required." }, { status: 400 });
    }

    await updateProjectInDb(id, updates);

    return NextResponse.json({
      success: true,
      message: "Project updated successfully.",
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal Server Error";
    console.error("Error updating project:", errorMsg);
    return NextResponse.json({ success: false, error: errorMsg }, { status: 500 });
  }
}

// DELETE: Authenticated admin deletion of a project
export async function DELETE(req: NextRequest) {
  const { authorized } = await verifyAdminUser(req);
  if (!authorized) {
    return NextResponse.json({ success: false, error: "Unauthorized access." }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, error: "Project ID is required." }, { status: 400 });
    }

    await deleteProjectFromDb(id);

    return NextResponse.json({
      success: true,
      message: "Project deleted from portfolio database.",
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal Server Error";
    console.error("Error deleting project:", errorMsg);
    return NextResponse.json({ success: false, error: errorMsg }, { status: 500 });
  }
}
