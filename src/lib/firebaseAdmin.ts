import { initializeApp, getApps, cert, App } from "firebase-admin/app";
import { getFirestore, Firestore, FieldValue } from "firebase-admin/firestore";
import { getAuth, Auth } from "firebase-admin/auth";
import fs from "fs";
import path from "path";

let adminApp: App;

function getFirebaseAdminApp(): App {
  if (getApps().length > 0) {
    return getApps()[0];
  }

  // 1. Try environment variables
  const projectId = process.env.FIREBASE_PROJECT_ID || "solvexa-bbff1";
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  let privateKey = process.env.FIREBASE_PRIVATE_KEY;

  if (privateKey) {
    // Unescape newlines if stored as escaped string
    privateKey = privateKey.replace(/\\n/g, "\n");
  }

  if (projectId && clientEmail && privateKey) {
    adminApp = initializeApp({
      credential: cert({
        projectId,
        clientEmail,
        privateKey,
      }),
      projectId,
    });
    return adminApp;
  }

  // 2. Fallback to local service account file if available
  const serviceAccountPath = path.join(
    process.cwd(),
    "solvexa-bbff1-firebase-adminsdk-fbsvc-bd6c1d9a15.json"
  );

  if (fs.existsSync(serviceAccountPath)) {
    const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));
    adminApp = initializeApp({
      credential: cert(serviceAccount),
      projectId: serviceAccount.project_id,
    });
    return adminApp;
  }

  throw new Error("Firebase Admin credentials not found in env or local service account file.");
}

export function getAdminFirestore(): Firestore {
  const app = getFirebaseAdminApp();
  return getFirestore(app);
}

export function getAdminAuth(): Auth {
  const app = getFirebaseAdminApp();
  return getAuth(app);
}

export interface SubmissionPayload {
  type: "contact_us" | "project_brief";
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message?: string;
  sourceUrl?: string;
}

export interface SubmissionRecord extends SubmissionPayload {
  id: string;
  status: "new" | "in_review" | "contacted" | "converted" | "archived";
  notes?: string;
  createdAt: string;
  updatedAt?: string;
}

export async function saveSubmissionToDb(payload: SubmissionPayload): Promise<string> {
  const db = getAdminFirestore();
  const now = new Date().toISOString();

  const docRef = await db.collection("submissions").add({
    ...payload,
    status: "new",
    notes: "",
    createdAt: now,
    serverTimestamp: FieldValue.serverTimestamp(),
  });

  return docRef.id;
}

export async function getAllSubmissions(): Promise<SubmissionRecord[]> {
  const db = getAdminFirestore();
  const snapshot = await db.collection("submissions").orderBy("createdAt", "desc").get();

  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      type: data.type || "contact_us",
      fullName: data.fullName || "Anonymous",
      email: data.email || "",
      phone: data.phone || "",
      company: data.company || "",
      service: data.service || "General Inquiry",
      budget: data.budget || "",
      message: data.message || "",
      sourceUrl: data.sourceUrl || "",
      status: data.status || "new",
      notes: data.notes || "",
      createdAt: data.createdAt || new Date().toISOString(),
      updatedAt: data.updatedAt || "",
    };
  });
}

export async function updateSubmissionInDb(
  id: string,
  updates: { status?: SubmissionRecord["status"]; notes?: string }
): Promise<void> {
  const db = getAdminFirestore();
  await db.collection("submissions").doc(id).update({
    ...updates,
    updatedAt: new Date().toISOString(),
  });
}

export async function deleteSubmissionFromDb(id: string): Promise<void> {
  const db = getAdminFirestore();
  await db.collection("submissions").doc(id).delete();
}

// ---------------------------------------------------------------------------
// Work Portfolio CMS Firestore Management
// ---------------------------------------------------------------------------
export interface CmsProjectPayload {
  id?: string;
  slug: string;
  brandName: string;
  brandSeparator?: string;
  title: string;
  brandLogoType?: string;
  deviceType?: "web" | "mobile" | "both";
  accentColor?: string;
  themeGlow?: string;
  buttonGradient?: string;
  shortDesc: string;
  description: string;
  heroImage: string;
  mobileImage?: string;
  technologies: string[];
  liveUrl?: string;
  client?: string;
  timeline?: string;
  metrics?: string;
  metricsLabel?: string;
  category: string;
  categorySlug?: string;
  galleryImages?: string[];
  overview?: string;
  challenge?: string;
  solution?: string;
  deliverables?: string[];
}

export interface CmsProjectRecord extends CmsProjectPayload {
  id: string;
  createdAt: string;
  updatedAt?: string;
}

export async function getAllProjectsFromDb(): Promise<CmsProjectRecord[]> {
  const db = getAdminFirestore();
  const snapshot = await db.collection("projects").get();

  const projects: CmsProjectRecord[] = snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      slug: data.slug || doc.id,
      brandName: data.brandName || "",
      brandSeparator: data.brandSeparator || "–",
      title: data.title || "",
      brandLogoType: data.brandLogoType || "custom-name-domain",
      deviceType: data.deviceType || "web",
      accentColor: data.accentColor || "#f2ca50",
      themeGlow: data.themeGlow || "rgba(242, 202, 80, 0.25)",
      buttonGradient: data.buttonGradient || "from-amber-400 to-yellow-600",
      shortDesc: data.shortDesc || "",
      description: data.description || "",
      heroImage: data.heroImage || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      mobileImage: data.mobileImage || "",
      technologies: Array.isArray(data.technologies) ? data.technologies : [],
      liveUrl: data.liveUrl || "",
      client: data.client || "",
      timeline: data.timeline || "",
      metrics: data.metrics || "",
      metricsLabel: data.metricsLabel || "",
      category: data.category || "Website Development",
      categorySlug: data.categorySlug || (data.category ? String(data.category).toLowerCase().replace(/\s+/g, "-") : "web-development"),
      galleryImages: Array.isArray(data.galleryImages) ? data.galleryImages : [],
      overview: data.overview || "",
      challenge: data.challenge || "",
      solution: data.solution || "",
      deliverables: Array.isArray(data.deliverables) ? data.deliverables : [],
      createdAt: data.createdAt || new Date().toISOString(),
      updatedAt: data.updatedAt || "",
    };
  });

  // Sort latest first
  return projects.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function saveProjectToDb(payload: CmsProjectPayload): Promise<string> {
  const db = getAdminFirestore();
  const now = new Date().toISOString();

  // Create clean slug
  const baseSlug = payload.slug
    ? payload.slug.trim().toLowerCase().replace(/[^a-z0-9-]/g, "-")
    : payload.title.toLowerCase().replace(/[^a-z0-9-]/g, "-");
  const finalSlug = baseSlug.replace(/-+/g, "-").replace(/^-|-$/g, "");

  const projectDoc = {
    ...payload,
    slug: finalSlug,
    brandSeparator: payload.brandSeparator || "–",
    accentColor: payload.accentColor || "#f2ca50",
    themeGlow: payload.themeGlow || "rgba(242, 202, 80, 0.25)",
    buttonGradient: payload.buttonGradient || "from-amber-400 to-yellow-600",
    categorySlug: payload.categorySlug || (payload.category ? payload.category.toLowerCase().replace(/\s+/g, "-") : "web-development"),
    createdAt: now,
    updatedAt: now,
    serverTimestamp: FieldValue.serverTimestamp(),
  };

  if (payload.id) {
    await db.collection("projects").doc(payload.id).set(projectDoc, { merge: true });
    return payload.id;
  } else {
    const docRef = await db.collection("projects").add(projectDoc);
    return docRef.id;
  }
}

export async function updateProjectInDb(id: string, updates: Partial<CmsProjectPayload>): Promise<void> {
  const db = getAdminFirestore();
  const now = new Date().toISOString();
  await db.collection("projects").doc(id).update({
    ...updates,
    updatedAt: now,
  });
}

export async function deleteProjectFromDb(id: string): Promise<void> {
  const db = getAdminFirestore();
  await db.collection("projects").doc(id).delete();
}

export async function getMergedWorkProjects() {
  const { workData } = await import("../data/work");
  try {
    const dbProjects = await getAllProjectsFromDb();
    if (!dbProjects || dbProjects.length === 0) {
      return workData;
    }
    const dbProjectMap = new Map(dbProjects.map((p) => [p.slug, p]));
    const dynamicOnly = dbProjects.filter((p) => !workData.some((w) => w.slug === p.slug));

    return [
      ...dynamicOnly,
      ...workData.map((staticItem) => (dbProjectMap.get(staticItem.slug) as typeof staticItem) || staticItem),
    ];
  } catch (err) {
    console.warn("Using static workData fallback:", err);
    return workData;
  }
}


