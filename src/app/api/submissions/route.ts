import { NextRequest, NextResponse } from "next/server";
import {
  saveSubmissionToDb,
  getAllSubmissions,
  updateSubmissionInDb,
  deleteSubmissionFromDb,
  getAdminAuth,
} from "../../../lib/firebaseAdmin";

// Helper to verify admin authorization header (Firebase ID Token)
async function verifyAdminUser(req: NextRequest): Promise<{ authorized: boolean; email?: string }> {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return { authorized: false };
    }
    const token = authHeader.split("Bearer ")[1];
    const auth = getAdminAuth();
    const decodedToken = await auth.verifyIdToken(token);
    return { authorized: true, email: decodedToken.email };
  } catch (error) {
    console.error("Token verification failed:", error);
    return { authorized: false };
  }
}

// POST: Public submission endpoint (Contact Us & Project Brief forms)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { fullName, email, phone, company, service, budget, message, type, sourceUrl } = body;

    if (!fullName || !email) {
      return NextResponse.json(
        { success: false, error: "Full name and email are required." },
        { status: 400 }
      );
    }

    const docId = await saveSubmissionToDb({
      type: type === "project_brief" ? "project_brief" : "contact_us",
      fullName: String(fullName).trim(),
      email: String(email).trim().toLowerCase(),
      phone: phone ? String(phone).trim() : "",
      company: company ? String(company).trim() : "",
      service: service ? String(service).trim() : "General Inquiry",
      budget: budget ? String(budget).trim() : "",
      message: message ? String(message).trim() : "",
      sourceUrl: sourceUrl || req.headers.get("referer") || "",
    });

    return NextResponse.json({
      success: true,
      id: docId,
      message: "Submission received successfully!",
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Internal Server Error";
    console.error("Error saving submission:", errorMessage);
    return NextResponse.json(
      { success: false, error: "Failed to store submission in database." },
      { status: 500 }
    );
  }
}

// GET: Authenticated endpoint to retrieve all submissions for the Admin CRM
export async function GET(req: NextRequest) {
  const { authorized, email } = await verifyAdminUser(req);
  if (!authorized) {
    return NextResponse.json(
      { success: false, error: "Unauthorized access to CRM data." },
      { status: 401 }
    );
  }

  try {
    const submissions = await getAllSubmissions();
    return NextResponse.json({
      success: true,
      submissions,
      adminUser: email,
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Internal Server Error";
    console.error("Error fetching submissions:", errorMessage);
    return NextResponse.json(
      { success: false, error: "Failed to retrieve CRM submissions." },
      { status: 500 }
    );
  }
}

// PATCH: Update submission status or notes in CRM
export async function PATCH(req: NextRequest) {
  const { authorized } = await verifyAdminUser(req);
  if (!authorized) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const { id, status, notes } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Submission ID is required." },
        { status: 400 }
      );
    }

    await updateSubmissionInDb(id, { status, notes });
    return NextResponse.json({ success: true, message: "Submission updated successfully." });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

// DELETE: Delete submission from CRM
export async function DELETE(req: NextRequest) {
  const { authorized } = await verifyAdminUser(req);
  if (!authorized) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Submission ID is required." },
        { status: 400 }
      );
    }

    await deleteSubmissionFromDb(id);
    return NextResponse.json({ success: true, message: "Submission deleted." });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
