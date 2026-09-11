"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { clientAuth } from "@/lib/firebaseClient";
import Link from "next/link";

interface FormSubmission {
  id: string;
  type: "contact_us" | "project_brief";
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message?: string;
  sourceUrl?: string;
  status: "new" | "contacted" | "in_progress" | "converted" | "archived";
  notes?: string;
  createdAt: string;
  updatedAt?: string;
}

interface CmsProject {
  id: string;
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
  clientLogo?: string;
  category: string;
  categorySlug?: string;
  galleryImages?: string[];
  overview?: string;
  challenge?: string;
  solution?: string;
  deliverables?: string[];
  createdAt?: string;
  updatedAt?: string;
  isCustom?: boolean;
}

const CATEGORY_OPTIONS = [
  "Website Development",
  "Mobile App Development",
  "AI & Machine Learning Solutions",
  "UI/UX Design Systems",
  "SaaS & Enterprise Platforms",
  "E-Commerce & Shopify",
  "Custom Software Engineering",
];

const ACCENT_PRESETS = [
  { label: "Solvexa Gold", color: "#F2CA50" },
  { label: "Ocean Sky", color: "#0284c7" },
  { label: "Emerald Mint", color: "#10b981" },
  { label: "Electric Violet", color: "#8b5cf6" },
  { label: "Amber Flame", color: "#f59e0b" },
  { label: "Rose Magenta", color: "#ec4899" },
];

export default function AdminPortalPage() {
  const [user, setUser] = useState<User | null>(null);
  const [authChecking, setAuthChecking] = useState(true);

  // Active Tab: "crm" (Inquiries) | "cms" (Work CMS)
  const [activeTab, setActiveTab] = useState<"crm" | "cms">("crm");

  // Login Form States
  const [loginEmail, setLoginEmail] = useState("solvexa.admin001@gmail.com");
  const [loginPassword, setLoginPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  // CRM Data States
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [crmLoading, setCrmLoading] = useState(false);
  const [crmError, setCrmError] = useState("");
  const [lastRefreshed, setLastRefreshed] = useState<Date | null>(null);
  const [justRefreshed, setJustRefreshed] = useState(false);

  // CRM Filters & Controls
  const [crmSearch, setCrmSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterType, setFilterType] = useState<string>("all");
  const [crmViewMode, setCrmViewMode] = useState<"table" | "cards">("table");

  // CRM Detail Modal State
  const [selectedSub, setSelectedSub] = useState<FormSubmission | null>(null);
  const [detailNotes, setDetailNotes] = useState("");
  const [detailStatus, setDetailStatus] = useState<string>("new");
  const [updatingDetails, setUpdatingDetails] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  // CMS Projects Data States
  const [projects, setProjects] = useState<CmsProject[]>([]);
  const [cmsLoading, setCmsLoading] = useState(false);
  const [cmsError, setCmsError] = useState("");
  const [cmsSearch, setCmsSearch] = useState("");
  const [cmsCategoryFilter, setCmsCategoryFilter] = useState<string>("all");
  const [cmsViewMode, setCmsViewMode] = useState<"cards" | "table">("cards");

  // CMS Project Editor Modal State
  const [projectEditorOpen, setProjectEditorOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<CmsProject | null>(null);
  const [projectFormSaving, setProjectFormSaving] = useState(false);
  const [projectFormError, setProjectFormError] = useState("");
  const [deleteProjectConfirmId, setDeleteProjectConfirmId] = useState<string | null>(null);

  // CMS Form Fields
  const [pTitle, setPTitle] = useState("");
  const [pBrandName, setPBrandName] = useState("");
  const [pSlug, setPSlug] = useState("");
  const [pCategory, setPCategory] = useState("Website Development");
  const [pDeviceType, setPDeviceType] = useState<"web" | "mobile" | "both">("web");
  const [pAccentColor, setPAccentColor] = useState("#F2CA50");
  const [pHeroImage, setPHeroImage] = useState("");
  const [pShortDesc, setPShortDesc] = useState("");
  const [pDescription, setPDescription] = useState("");
  const [pClient, setPClient] = useState("");
  const [pTimeline, setPTimeline] = useState("");
  const [pLiveUrl, setPLiveUrl] = useState("");
  const [pMetrics, setPMetrics] = useState("");
  const [pMetricsLabel, setPMetricsLabel] = useState("");
  const [pClientLogo, setPClientLogo] = useState("");
  const [pTechInput, setPTechInput] = useState("");
  const [pOverview, setPOverview] = useState("");
  const [pChallenge, setPChallenge] = useState("");
  const [pSolution, setPSolution] = useState("");
  const [pDeliverablesInput, setPDeliverablesInput] = useState("");

  // Lock body scroll when any modal is open
  useEffect(() => {
    if (selectedSub || projectEditorOpen || deleteConfirmId || deleteProjectConfirmId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedSub, projectEditorOpen, deleteConfirmId, deleteProjectConfirmId]);

  // Monitor Auth State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(clientAuth, (currentUser) => {
      setUser(currentUser);
      setAuthChecking(false);
    });
    return () => unsubscribe();
  }, []);

  // Fetch Submissions (CRM)
  const fetchSubmissions = useCallback(async () => {
    if (!user) return;
    setCrmLoading(true);
    setCrmError("");
    try {
      const idToken = await user.getIdToken();
      const res = await fetch("/api/submissions", {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch inquiries");
      }

      setSubmissions(data.submissions || []);
      setLastRefreshed(new Date());
      setJustRefreshed(true);
      setTimeout(() => setJustRefreshed(false), 2500);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error loading CRM records.";
      setCrmError(msg);
    } finally {
      setCrmLoading(false);
    }
  }, [user]);

  // Fetch Projects (CMS)
  const fetchProjects = useCallback(async () => {
    setCmsLoading(true);
    setCmsError("");
    try {
      const res = await fetch("/api/projects");
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch portfolio projects");
      }

      setProjects(data.projects || []);
      setLastRefreshed(new Date());
      setJustRefreshed(true);
      setTimeout(() => setJustRefreshed(false), 2500);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error loading projects.";
      setCmsError(msg);
    } finally {
      setCmsLoading(false);
    }
  }, []);

  // Refresh active tab
  const handleRefresh = () => {
    if (activeTab === "crm") {
      fetchSubmissions();
    } else {
      fetchProjects();
    }
  };

  useEffect(() => {
    if (user) {
      // Fetch both datasets in parallel for faster initial load
      Promise.all([fetchSubmissions(), fetchProjects()]);
    }
  }, [user, fetchSubmissions, fetchProjects]);

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");

    try {
      await signInWithEmailAndPassword(clientAuth, loginEmail.trim(), loginPassword);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Invalid credentials. Please try again.";
      if (msg.includes("invalid-credential") || msg.includes("wrong-password")) {
        setLoginError("Invalid email or password. Please verify your admin credentials.");
      } else if (msg.includes("user-not-found")) {
        setLoginError("No user registered with this email.");
      } else {
        setLoginError(msg);
      }
    } finally {
      setLoginLoading(false);
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    await signOut(clientAuth);
    setSubmissions([]);
    setProjects([]);
    setSelectedSub(null);
    setProjectEditorOpen(false);
  };

  // Open Project Form for Create
  const openNewProjectModal = () => {
    setEditingProject(null);
    setPTitle("");
    setPBrandName("");
    setPSlug("");
    setPCategory("Website Development");
    setPDeviceType("web");
    setPAccentColor("#F2CA50");
    setPHeroImage("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80");
    setPClientLogo("");
    setPShortDesc("");
    setPDescription("");
    setPClient("");
    setPTimeline("6 Weeks");
    setPLiveUrl("");
    setPMetrics("99.99%");
    setPMetricsLabel("Uptime & Scalability");
    setPTechInput("Next.js, TypeScript, Tailwind CSS, Node.js");
    setPOverview("");
    setPChallenge("");
    setPSolution("");
    setPDeliverablesInput("Architecture Blueprint, Clean Source Code, CI/CD Pipeline");
    setProjectFormError("");
    setProjectEditorOpen(true);
  };

  // Open Project Form for Edit
  const openEditProjectModal = (proj: CmsProject) => {
    setEditingProject(proj);
    setPTitle(proj.title || "");
    setPBrandName(proj.brandName || "");
    setPSlug(proj.slug || "");
    setPCategory(proj.category || "Website Development");
    setPDeviceType(proj.deviceType || "web");
    setPAccentColor(proj.accentColor || "#F2CA50");
    setPHeroImage(proj.heroImage || "");
    setPClientLogo(proj.clientLogo || "");
    setPShortDesc(proj.shortDesc || "");
    setPDescription(proj.description || "");
    setPClient(proj.client || "");
    setPTimeline(proj.timeline || "");
    setPLiveUrl(proj.liveUrl || "");
    setPMetrics(proj.metrics || "");
    setPMetricsLabel(proj.metricsLabel || "");
    setPTechInput(Array.isArray(proj.technologies) ? proj.technologies.join(", ") : "");
    setPOverview(proj.overview || "");
    setPChallenge(proj.challenge || "");
    setPSolution(proj.solution || "");
    setPDeliverablesInput(Array.isArray(proj.deliverables) ? proj.deliverables.join(", ") : "");
    setProjectFormError("");
    setProjectEditorOpen(true);
  };

  // Save Project (Create / Update)
  const handleSaveProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    if (!pTitle.trim() || !pBrandName.trim()) {
      setProjectFormError("Project Title and Brand Name are required.");
      return;
    }

    setProjectFormSaving(true);
    setProjectFormError("");

    const techs = pTechInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const deliverables = pDeliverablesInput
      .split(",")
      .map((d) => d.trim())
      .filter(Boolean);

    const baseSlug = pSlug.trim() || pBrandName.trim().toLowerCase().replace(/[^a-z0-9]/g, "-");
    const cleanSlug = baseSlug.replace(/-+/g, "-").replace(/^-|-$/g, "");

    const payload = {
      id: editingProject?.id,
      slug: cleanSlug,
      brandName: pBrandName.trim(),
      brandSeparator: "–",
      title: pTitle.trim(),
      brandLogoType: "custom-name-domain",
      deviceType: pDeviceType,
      accentColor: pAccentColor,
      themeGlow: `${pAccentColor}40`,
      buttonGradient: "from-primary-fixed via-primary to-primary-container",
      shortDesc: pShortDesc.trim(),
      description: pDescription.trim() || pShortDesc.trim(),
      heroImage: pHeroImage.trim() || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      clientLogo: pClientLogo.trim(),
      technologies: techs.length > 0 ? techs : ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: pLiveUrl.trim(),
      client: pClient.trim(),
      timeline: pTimeline.trim() || "4–6 Weeks",
      metrics: pMetrics.trim() || "100%",
      metricsLabel: pMetricsLabel.trim() || "Custom Architecture",
      category: pCategory,
      categorySlug: pCategory.toLowerCase().replace(/\s+/g, "-"),
      overview: pOverview.trim() || pShortDesc.trim(),
      challenge: pChallenge.trim(),
      solution: pSolution.trim(),
      deliverables: deliverables.length > 0 ? deliverables : ["Full Source Code", "Production Deployment"],
    };

    try {
      const idToken = await user.getIdToken();
      const method = editingProject ? "PATCH" : "POST";
      const res = await fetch("/api/projects", {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to save project.");
      }

      await fetchProjects();
      setProjectEditorOpen(false);
      setEditingProject(null);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error saving project.";
      setProjectFormError(msg);
    } finally {
      setProjectFormSaving(false);
    }
  };

  // Delete Project
  const handleDeleteProject = async (id: string) => {
    if (!user) return;
    try {
      const idToken = await user.getIdToken();
      const res = await fetch(`/api/projects?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });

      if (res.ok) {
        setProjects((prev) => prev.filter((p) => p.id !== id));
        setDeleteProjectConfirmId(null);
      }
    } catch (err) {
      console.error("Delete project failed:", err);
    }
  };

  // Handle CRM Status Update
  const handleStatusChange = async (id: string, newStatus: string) => {
    if (!user) return;
    try {
      const idToken = await user.getIdToken();
      const res = await fetch("/api/submissions", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({ id, status: newStatus }),
      });

      if (res.ok) {
        setSubmissions((prev) =>
          prev.map((s) => (s.id === id ? { ...s, status: newStatus as FormSubmission["status"] } : s))
        );
        if (selectedSub && selectedSub.id === id) {
          setSelectedSub((prev) => (prev ? { ...prev, status: newStatus as FormSubmission["status"] } : null));
          setDetailStatus(newStatus);
        }
      }
    } catch (err) {
      console.error("Status update failed:", err);
    }
  };

  // Save CRM Modal Notes & Status
  const handleSaveDetails = async () => {
    if (!user || !selectedSub) return;
    setUpdatingDetails(true);
    try {
      const idToken = await user.getIdToken();
      const res = await fetch("/api/submissions", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({
          id: selectedSub.id,
          status: detailStatus,
          notes: detailNotes,
        }),
      });

      if (res.ok) {
        setSubmissions((prev) =>
          prev.map((s) =>
            s.id === selectedSub.id
              ? { ...s, status: detailStatus as FormSubmission["status"], notes: detailNotes }
              : s
          )
        );
        setSelectedSub((prev) =>
          prev ? { ...prev, status: detailStatus as FormSubmission["status"], notes: detailNotes } : null
        );
      }
    } catch (err) {
      console.error("Save details failed:", err);
    } finally {
      setUpdatingDetails(false);
    }
  };

  // Handle Delete Submission
  const handleDeleteSubmission = async (id: string) => {
    if (!user) return;
    try {
      const idToken = await user.getIdToken();
      const res = await fetch(`/api/submissions?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });

      if (res.ok) {
        setSubmissions((prev) => prev.filter((s) => s.id !== id));
        if (selectedSub && selectedSub.id === id) {
          setSelectedSub(null);
        }
        setDeleteConfirmId(null);
      }
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  // Copy to clipboard helper
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopySuccess(label);
    setTimeout(() => setCopySuccess(null), 2500);
  };

  // Structured summary copy for CRM lead
  const copyLeadSummary = (sub: FormSubmission) => {
    const formatted = formatDate(sub.createdAt);
    const summary = [
      `═══════════════════════════════════════════`,
      `SOLVEXA CRM — CLIENT INQUIRY DOSSIER`,
      `═══════════════════════════════════════════`,
      `Lead Type:         ${sub.type === "project_brief" ? "Project Brief / Scope Estimate" : "Direct Contact Desk Inquiry"}`,
      `Client Name:       ${sub.fullName}`,
      `Email:             ${sub.email}`,
      `Phone:             ${sub.phone || "Not provided"}`,
      `Company / Brand:   ${sub.company || "Not provided (Private/Direct Client)"}`,
      `Requested Service: ${sub.service || "General Consultation"}`,
      `Estimated Budget:  ${sub.budget || "Flexible / Not specified"}`,
      `Source Page:       ${formatRoutePageName(sub.sourceUrl, sub.type)}`,
      `Date Submitted:    ${formatted.date} at ${formatted.time}`,
      `Current Status:    ${sub.status.toUpperCase()}`,
      sub.notes ? `Team Internal Notes: ${sub.notes}` : "",
      `───────────────────────────────────────────`,
      `CLIENT MESSAGE / PROJECT SCOPE:`,
      sub.message || "(No message body provided)",
      `═══════════════════════════════════════════`,
    ]
      .filter(Boolean)
      .join("\n");

    copyToClipboard(summary, "Full Lead Dossier");
  };

  // WhatsApp link generator
  const getWhatsAppUrl = (phone?: string, name?: string) => {
    if (!phone) return null;
    const digits = phone.replace(/[^\d]/g, "");
    if (!digits || digits.length < 7) return null;
    const text = encodeURIComponent(
      `Hello ${name || "there"}, thank you for reaching out to Solvexa! We received your project inquiry and would love to connect.`
    );
    return `https://wa.me/${digits}?text=${text}`;
  };

  // Clean page name formatter for submission source route (shows only clean page name)
  const formatRoutePageName = (sourceUrl?: string, type?: string) => {
    if (!sourceUrl || sourceUrl === "/" || sourceUrl === "#") {
      return type === "project_brief" ? "Home Page Project CTA" : "Home Page";
    }
    const clean = sourceUrl.toLowerCase().trim();
    if (clean.includes("/contact")) return "Contact Us Page";
    if (clean.includes("/services")) return "Services Page";
    if (clean.includes("/work")) return "Work Showcase Page";
    if (clean.includes("/about")) return "About Us Page";
    if (clean.includes("/team")) return "Team Page";
    if (clean.includes("brief") || type === "project_brief") return "Project Brief Form";

    try {
      const path = clean.startsWith("http") ? new URL(clean).pathname : clean;
      const segment = path.split("/").filter(Boolean).pop();
      if (segment) {
        return (
          segment
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ") + " Page"
        );
      }
    } catch {
      // fallback
    }
    return type === "project_brief" ? "Project Brief" : "Contact Page";
  };

  // Export CSV
  const exportToCSV = () => {
    if (submissions.length === 0) return;
    const headers = [
      "ID",
      "Type",
      "Full Name",
      "Email",
      "Phone",
      "Company",
      "Service",
      "Budget",
      "Message",
      "Status",
      "Notes",
      "Created At",
    ];

    const rows = filteredSubmissions.map((s) => [
      s.id,
      s.type,
      `"${s.fullName?.replace(/"/g, '""') || ""}"`,
      s.email,
      `"${s.phone || ""}"`,
      `"${s.company?.replace(/"/g, '""') || ""}"`,
      `"${s.service?.replace(/"/g, '""') || ""}"`,
      `"${s.budget || ""}"`,
      `"${(s.message || "").replace(/"/g, '""').replace(/\n/g, " ")}"`,
      s.status,
      `"${(s.notes || "").replace(/"/g, '""').replace(/\n/g, " ")}"`,
      s.createdAt,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `solvexa_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered Submissions Calculation
  const filteredSubmissions = useMemo(() => {
    return submissions.filter((item) => {
      if (filterType !== "all" && item.type !== filterType) return false;
      if (filterStatus !== "all" && item.status !== filterStatus) return false;
      if (crmSearch.trim()) {
        const query = crmSearch.toLowerCase();
        const matchName = item.fullName?.toLowerCase().includes(query);
        const matchEmail = item.email?.toLowerCase().includes(query);
        const matchPhone = item.phone?.toLowerCase().includes(query);
        const matchCompany = item.company?.toLowerCase().includes(query);
        const matchMessage = item.message?.toLowerCase().includes(query);
        const matchService = item.service?.toLowerCase().includes(query);
        return matchName || matchEmail || matchPhone || matchCompany || matchMessage || matchService;
      }
      return true;
    });
  }, [submissions, filterType, filterStatus, crmSearch]);

  // Filtered Projects Calculation
  const filteredProjects = useMemo(() => {
    return projects.filter((item) => {
      if (cmsCategoryFilter !== "all" && item.category !== cmsCategoryFilter) return false;
      if (cmsSearch.trim()) {
        const q = cmsSearch.toLowerCase();
        const matchTitle = item.title?.toLowerCase().includes(q);
        const matchBrand = item.brandName?.toLowerCase().includes(q);
        const matchDesc = item.shortDesc?.toLowerCase().includes(q);
        const matchTech = item.technologies?.some((t) => t.toLowerCase().includes(q));
        return matchTitle || matchBrand || matchDesc || matchTech;
      }
      return true;
    });
  }, [projects, cmsCategoryFilter, cmsSearch]);

  // Key KPI Metrics for CRM
  const crmMetrics = useMemo(() => {
    const total = submissions.length;
    const newCount = submissions.filter((s) => s.status === "new").length;
    const inProgressCount = submissions.filter((s) => s.status === "in_progress" || s.status === "contacted").length;
    const convertedCount = submissions.filter((s) => s.status === "converted").length;
    return { total, newCount, inProgressCount, convertedCount };
  }, [submissions]);

  // Key Metrics for CMS
  const cmsMetrics = useMemo(() => {
    const total = projects.length;
    const webCount = projects.filter((p) => p.category?.toLowerCase().includes("web") || p.deviceType === "web").length;
    const mobileCount = projects.filter((p) => p.category?.toLowerCase().includes("mobile") || p.deviceType === "mobile").length;
    const aiCount = projects.filter((p) => p.category?.toLowerCase().includes("ai")).length;
    return { total, webCount, mobileCount, aiCount };
  }, [projects]);

  const openDetailModal = (sub: FormSubmission) => {
    setSelectedSub(sub);
    setDetailNotes(sub.notes || "");
    setDetailStatus(sub.status || "new");
  };

  // Formatter for dates
  const formatDate = (isoStr: string) => {
    try {
      const d = new Date(isoStr);
      return {
        date: d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        time: d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      };
    } catch {
      return { date: isoStr, time: "" };
    }
  };

  // Loading Screen while auth state is resolving
  if (authChecking) {
    return (
      <div className="min-h-screen w-full bg-transparent text-on-surface flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-surface-container-low/70 backdrop-blur-2xl border border-primary/25 shadow-2xl">
          <div className="h-10 w-10 rounded-2xl border-2 border-primary border-t-transparent animate-spin" />
          <span className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">
            Verifying Admin Session...
          </span>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // VIEW 1: LOGIN VIEW (When not authenticated)
  // Transparent background showing website effects, proper top navbar, perfectly centered card
  // -------------------------------------------------------------------------
  if (!user) {
    return (
      <div className="min-h-screen w-full bg-transparent text-on-surface flex flex-col relative select-none">
        {/* FIXED PROPER TOP NAVBAR ON SIGNIN PAGE */}
        <header className="sticky top-0 z-30 w-full border-b border-outline-variant/25 bg-surface-container-lowest/60 backdrop-blur-2xl px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center group">
              <img
                src="/assets/logo.png"
                alt="Solvexa"
                className="h-8 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </Link>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-surface-container-high/60 border border-outline-variant/30 hover:border-primary/40 text-xs font-medium text-on-surface hover:text-primary transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">west</span>
            <span>Return to Website</span>
          </Link>
        </header>

        {/* PERFECTLY CENTERED LOGIN FORM (NO GAPS) */}
        <div className="flex-1 w-full flex items-center justify-center p-4 sm:p-6 relative z-10">
          <div className="w-full max-w-md my-auto flex flex-col items-center">
            {/* Logo & Headline Centered */}
            <div className="text-center mb-6 flex flex-col items-center">
              <Link href="/" className="inline-block mb-3 group">
                <img
                  src="/assets/logo.png"
                  alt="Solvexa"
                  className="h-14 sm:h-16 w-auto object-contain drop-shadow-[0_4px_25px_rgba(242,202,80,0.3)] group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Executive Portal
              </h1>
              <p className="text-xs text-on-surface-variant mt-1.5 max-w-xs leading-relaxed">
                Sign in to access customer inquiries, CRM leads, and portfolio CMS.
              </p>
            </div>

            {/* Login Glassmorphic Card */}
            <div className="w-full p-7 sm:p-9 rounded-3xl bg-surface-container-low/90 backdrop-blur-2xl border border-primary/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),0_0_35px_rgba(242,202,80,0.12)]">
              {loginError && (
                <div className="mb-5 p-3.5 rounded-xl bg-error/15 border border-error/40 text-error text-xs font-medium flex items-start gap-2.5 animate-in fade-in">
                  <span className="material-symbols-outlined text-base shrink-0 mt-0.5">warning</span>
                  <span className="leading-relaxed">{loginError}</span>
                </div>
              )}

              <form onSubmit={handleLogin} className="flex flex-col gap-4 sm:gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">
                    Admin Email
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-lg">
                      mail
                    </span>
                    <input
                      type="email"
                      required
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="solvexa.admin001@gmail.com"
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none text-sm text-white placeholder:text-on-surface-variant/40 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-lg">
                      lock
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="Enter admin password"
                      className="w-full pl-11 pr-11 py-3 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none text-sm text-white placeholder:text-on-surface-variant/40 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/60 hover:text-white transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-lg">
                        {showPassword ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loginLoading}
                  className="w-full mt-2 py-3.5 rounded-full font-bold text-sm text-on-primary bg-gradient-to-r from-primary-fixed via-primary to-primary-container hover:shadow-[0_0_28px_rgba(242,202,80,0.55)] active:scale-[0.98] transition-all duration-300 shadow-lg border border-primary-fixed/40 cursor-pointer flex items-center justify-center gap-2"
                >
                  {loginLoading ? (
                    <>
                      <span className="h-4 w-4 rounded-full border-2 border-on-primary border-t-transparent animate-spin" />
                      <span>Signing in...</span>
                    </>
                  ) : (
                    <>
                      <span>Sign In to Executive Portal</span>
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // VIEW 2: EXECUTIVE DASHBOARD (Authenticated)
  // Transparent background showing website effects, proper top navbar, enhanced refresh button
  // -------------------------------------------------------------------------
  return (
    <div className="min-h-screen w-full bg-transparent text-on-surface select-none relative flex flex-col">
      {/* UNIFIED EXECUTIVE TOP NAVBAR */}
      <header className="sticky top-0 z-40 w-full border-b border-outline-variant/30 bg-surface-container-lowest/80 backdrop-blur-2xl px-3 sm:px-8 py-2.5 sm:py-3 flex flex-wrap items-center justify-between gap-2 shadow-2xl">
        {/* Left: Brand Mark */}
        <Link href="/" className="flex items-center group shrink-0">
          <img src="/assets/logo.png" alt="Solvexa" className="h-7 sm:h-8 w-auto object-contain group-hover:scale-105 transition-transform" loading="lazy" decoding="async" />
        </Link>

        {/* Right: Quick Actions, Refresh & Profile */}
        <div className="flex items-center gap-2 sm:gap-3 order-2 sm:order-3">
          {/* Primary Action Button (Changes per tab) */}
          {activeTab === "cms" ? (
            <button
              onClick={openNewProjectModal}
              className="p-2 sm:px-3.5 sm:py-2 rounded-xl bg-primary text-on-primary font-bold text-xs hover:bg-primary-fixed transition-all flex items-center gap-1.5 shadow-md shadow-primary/25 hover:shadow-primary/40 active:scale-95 cursor-pointer"
              title="Add Project"
            >
              <span className="material-symbols-outlined text-base font-bold">add</span>
              <span className="hidden sm:inline">Add Project</span>
            </button>
          ) : (
            <button
              onClick={exportToCSV}
              title="Export leads to CSV"
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-surface-container-high/80 border border-outline-variant/40 hover:border-primary/50 text-xs text-on-surface font-semibold flex items-center gap-1.5 hover:bg-surface-container-highest transition-all cursor-pointer shadow-sm"
            >
              <span className="material-symbols-outlined text-base text-primary">download</span>
              <span className="hidden sm:inline">Export CSV</span>
            </button>
          )}

          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            disabled={crmLoading || cmsLoading}
            title={lastRefreshed ? `Last updated: ${lastRefreshed.toLocaleTimeString()}` : "Refresh data"}
            className="p-2 sm:px-3 sm:py-2 rounded-xl bg-surface-container-high/80 border border-outline-variant/40 hover:border-primary/50 text-xs text-white font-medium hover:bg-surface-container-highest transition-all flex items-center gap-2 cursor-pointer shadow-sm group"
          >
            <span
              className={`material-symbols-outlined text-base leading-none transition-transform ${
                crmLoading || cmsLoading
                  ? "animate-spin text-primary"
                  : justRefreshed
                  ? "text-emerald-400"
                  : "text-primary group-hover:rotate-180 duration-500"
              }`}
            >
              {justRefreshed ? "check_circle" : "refresh"}
            </span>
            <span className="hidden sm:inline">
              {crmLoading || cmsLoading ? "Refreshing..." : justRefreshed ? "Synced" : "Refresh"}
            </span>
          </button>

          {/* Admin User Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-container-high/60 border border-outline-variant/30 text-xs text-on-surface-variant">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="truncate max-w-[170px] font-medium">{user.email}</span>
          </div>

          {/* Sign Out */}
          <button
            onClick={handleLogout}
            title="Sign out of portal"
            className="p-2 sm:px-3 sm:py-2 rounded-xl bg-error/15 border border-error/30 text-error hover:bg-error/25 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-base leading-none">logout</span>
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>

        {/* Tab Switcher Pills — wraps to row 2 on mobile, inline on desktop */}
        <div className="flex items-center p-0.5 sm:p-1 rounded-xl bg-surface-container-highest/70 border border-outline-variant/35 w-full sm:w-auto order-3 sm:order-2 sm:ml-1 lg:ml-4 shadow-inner justify-center sm:justify-start">
          <button
            onClick={() => setActiveTab("crm")}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3.5 py-1.5 rounded-lg text-[10px] sm:text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "crm"
                ? "bg-primary text-on-primary shadow-md shadow-primary/20"
                : "text-on-surface-variant hover:text-white"
            }`}
          >
            <span className="material-symbols-outlined text-sm sm:text-base leading-none">inbox</span>
            <span>CRM</span>
            <span
              className={`text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-full font-bold ${
                activeTab === "crm" ? "bg-on-primary/20 text-on-primary" : "bg-primary/20 text-primary"
              }`}
            >
              {submissions.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("cms")}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3.5 py-1.5 rounded-lg text-[10px] sm:text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "cms"
                ? "bg-primary text-on-primary shadow-md shadow-primary/20"
                : "text-on-surface-variant hover:text-white"
            }`}
          >
            <span className="material-symbols-outlined text-sm sm:text-base leading-none">grid_view</span>
            <span>Work CMS</span>
            <span
              className={`text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-full font-bold ${
                activeTab === "cms" ? "bg-on-primary/20 text-on-primary" : "bg-primary/20 text-primary"
              }`}
            >
              {projects.length}
            </span>
          </button>
        </div>
      </header>

      {/* MAIN DASHBOARD CONTENT */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 flex flex-col gap-4 sm:gap-6">
        {/* =========================================================
            TAB 1: CRM INQUIRIES
        ========================================================= */}
        {activeTab === "crm" && (
          <div className="flex flex-col gap-6">
            {/* KPI STATS CARDS (GLASSMORPHIC) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
              <div className="p-3 sm:p-5 rounded-2xl sm:rounded-3xl bg-surface-container-low/80 backdrop-blur-xl border border-outline-variant/30 shadow-xl flex flex-col justify-between">
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant block mb-1">
                  Total Leads
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{crmMetrics.total}</span>
              </div>

              <div className="p-3 sm:p-5 rounded-2xl sm:rounded-3xl bg-surface-container-low/80 backdrop-blur-xl border border-amber-500/30 shadow-xl flex flex-col justify-between">
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-amber-400 block mb-1">
                  New Unread
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-mono">
                  {crmMetrics.newCount}
                </span>
              </div>

              <div className="p-3 sm:p-5 rounded-2xl sm:rounded-3xl bg-surface-container-low/80 backdrop-blur-xl border border-sky-500/30 shadow-xl flex flex-col justify-between">
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-sky-400 block mb-1">
                  In Discussion
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-sky-300 font-mono">
                  {crmMetrics.inProgressCount}
                </span>
              </div>

              <div className="p-3 sm:p-5 rounded-2xl sm:rounded-3xl bg-surface-container-low/80 backdrop-blur-xl border border-emerald-500/30 shadow-xl flex flex-col justify-between">
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-emerald-400 block mb-1">
                  Converted
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-300 font-mono">
                  {crmMetrics.convertedCount}
                </span>
              </div>
            </div>

            {/* ERROR NOTICE */}
            {crmError && (
              <div className="p-4 rounded-2xl bg-error/15 border border-error/40 text-error text-xs font-semibold flex items-center justify-between backdrop-blur-md">
                <span>{crmError}</span>
                <button onClick={fetchSubmissions} className="underline uppercase text-[10px] tracking-wider">
                  Retry
                </button>
              </div>
            )}

            {/* SEARCH & FILTERS TOOLBAR */}
            <div className="p-4 rounded-3xl bg-surface-container-low/85 backdrop-blur-2xl border border-outline-variant/30 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4 shadow-xl">
              <div className="relative flex-1">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-lg">
                  search
                </span>
                <input
                  type="text"
                  value={crmSearch}
                  onChange={(e) => setCrmSearch(e.target.value)}
                  placeholder="Search inquiries by client name, email, company, service..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-xs sm:text-sm text-white placeholder:text-on-surface-variant/50 transition-all"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-surface-container-highest/80 border border-outline-variant/40 text-xs text-white focus:border-primary focus:outline-none cursor-pointer"
                >
                  <option value="all">All Statuses ({submissions.length})</option>
                  <option value="new">New ({crmMetrics.newCount})</option>
                  <option value="contacted">Contacted</option>
                  <option value="in_progress">In Progress</option>
                  <option value="converted">Converted</option>
                  <option value="archived">Archived</option>
                </select>

                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-surface-container-highest/80 border border-outline-variant/40 text-xs text-white focus:border-primary focus:outline-none cursor-pointer"
                >
                  <option value="all">All Channels</option>
                  <option value="contact_us">Contact Form</option>
                  <option value="project_brief">Project Brief CTA</option>
                </select>

                <div className="flex items-center p-1 rounded-xl bg-surface-container-highest/70 border border-outline-variant/40">
                  <button
                    onClick={() => setCrmViewMode("table")}
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                      crmViewMode === "table" ? "bg-primary text-on-primary" : "text-on-surface-variant hover:text-white"
                    }`}
                  >
                    <span className="material-symbols-outlined text-base leading-none">table_rows</span>
                  </button>
                  <button
                    onClick={() => setCrmViewMode("cards")}
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                      crmViewMode === "cards" ? "bg-primary text-on-primary" : "text-on-surface-variant hover:text-white"
                    }`}
                  >
                    <span className="material-symbols-outlined text-base leading-none">grid_view</span>
                  </button>
                </div>
              </div>
            </div>

            {/* SUBMISSIONS LIST */}
            {filteredSubmissions.length === 0 ? (
              <div className="p-10 sm:p-16 rounded-2xl sm:rounded-3xl bg-surface-container-low/60 backdrop-blur-xl border border-outline-variant/30 text-center flex flex-col items-center justify-center shadow-xl">
                <span className="material-symbols-outlined text-3xl text-on-surface-variant mb-3">inbox</span>
                <h3 className="text-base font-bold text-white">No inquiries found</h3>
                <p className="text-xs text-on-surface-variant mt-1 max-w-sm">
                  {crmSearch || filterStatus !== "all" || filterType !== "all"
                    ? "No records matched your search filters."
                    : "No client submissions recorded in database yet."}
                </p>
              </div>
            ) : crmViewMode === "table" ? (
              <div className="rounded-3xl bg-surface-container-low/85 backdrop-blur-2xl border border-outline-variant/30 overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-outline-variant/30 bg-surface-container-high/50 text-[11px] uppercase tracking-wider text-on-surface-variant font-bold">
                        <th className="py-4 px-5">Channel & Status</th>
                        <th className="py-4 px-5">Contact</th>
                        <th className="py-4 px-5">Service & Budget</th>
                        <th className="py-4 px-5 max-w-xs">Message Excerpt</th>
                        <th className="py-4 px-5">Date</th>
                        <th className="py-4 px-5 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/20 text-xs">
                      {filteredSubmissions.map((sub) => {
                        const timeInfo = formatDate(sub.createdAt);
                        return (
                          <tr
                            key={sub.id}
                            onClick={() => openDetailModal(sub)}
                            className="hover:bg-surface-container-highest/40 transition-colors group cursor-pointer"
                          >
                            <td className="py-4 px-5">
                              <div className="flex flex-col gap-1">
                                <span className="font-mono text-[10px] text-primary/90 font-bold uppercase">
                                  {sub.type === "project_brief" ? "Project Brief" : "Contact Desk"}
                                </span>
                                <span
                                  className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold w-max capitalize ${
                                    sub.status === "new"
                                      ? "bg-amber-400/20 text-amber-300 border border-amber-400/30"
                                      : sub.status === "converted"
                                      ? "bg-emerald-400/20 text-emerald-300 border border-emerald-400/30"
                                      : "bg-surface-container-highest text-on-surface-variant border border-outline-variant/30"
                                  }`}
                                >
                                  {sub.status.replace("_", " ")}
                                </span>
                              </div>
                            </td>

                            <td className="py-4 px-5">
                              <div className="font-bold text-white text-sm">{sub.fullName}</div>
                              <div className="text-on-surface-variant text-[11px] truncate max-w-[200px]">
                                {sub.email}
                              </div>
                              {sub.company && (
                                <div className="text-[10px] text-primary/80 truncate max-w-[200px]">{sub.company}</div>
                              )}
                            </td>

                            <td className="py-4 px-5">
                              <div className="text-white font-medium">{sub.service || "General"}</div>
                              {sub.budget && (
                                <div className="text-primary font-mono text-[11px]">{sub.budget}</div>
                              )}
                            </td>

                            <td className="py-4 px-5 max-w-xs truncate text-on-surface-variant">
                              {sub.message || "—"}
                            </td>

                            <td className="py-4 px-5 text-on-surface-variant whitespace-nowrap">
                              <div>{timeInfo.date}</div>
                              <div className="text-[10px]">{timeInfo.time}</div>
                            </td>

                            <td className="py-4 px-5 text-right">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openDetailModal(sub);
                                }}
                                className="px-3.5 py-1.5 rounded-xl bg-surface-container-high/80 border border-outline-variant/40 hover:border-primary/50 text-primary text-xs font-semibold hover:bg-surface-container-highest transition-colors cursor-pointer shadow-sm"
                              >
                                View Details
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredSubmissions.map((sub) => (
                  <div
                    key={sub.id}
                    onClick={() => openDetailModal(sub)}
                    className="p-5 rounded-3xl bg-surface-container-low/85 backdrop-blur-xl border border-outline-variant/30 hover:border-primary/50 transition-all cursor-pointer flex flex-col justify-between gap-4 group shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[10px] text-primary/90 font-bold uppercase">
                          {sub.type === "project_brief" ? "Project Brief" : "Contact Inquiry"}
                        </span>
                        <span className="text-[10px] text-on-surface-variant">{formatDate(sub.createdAt).date}</span>
                      </div>
                      <h4 className="text-base font-bold text-white group-hover:text-primary transition-colors">
                        {sub.fullName}
                      </h4>
                      <p className="text-xs text-on-surface-variant mt-0.5">{sub.email}</p>
                      {sub.company && <p className="text-xs text-primary/80 mt-0.5">{sub.company}</p>}

                      <p className="text-xs text-slate-300 mt-3 line-clamp-3 leading-relaxed">
                        {sub.message || "No message body."}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-between text-xs">
                      <span className="text-primary font-mono font-medium">{sub.service || "General"}</span>
                      <span className="capitalize text-[11px] text-on-surface-variant">{sub.status.replace("_", " ")}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* =========================================================
            TAB 2: WORK PORTFOLIO CMS
        ========================================================= */}
        {activeTab === "cms" && (
          <div className="flex flex-col gap-6">
            {/* KPI STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
              <div className="p-3 sm:p-5 rounded-2xl sm:rounded-3xl bg-surface-container-low/80 backdrop-blur-xl border border-outline-variant/30 shadow-xl">
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant block mb-1">
                  Total Case Studies
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{cmsMetrics.total}</span>
              </div>

              <div className="p-3 sm:p-5 rounded-2xl sm:rounded-3xl bg-surface-container-low/80 backdrop-blur-xl border border-sky-500/30 shadow-xl">
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-sky-400 block mb-1">
                  Web Applications
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-sky-300 font-mono">
                  {cmsMetrics.webCount}
                </span>
              </div>

              <div className="p-3 sm:p-5 rounded-2xl sm:rounded-3xl bg-surface-container-low/80 backdrop-blur-xl border border-emerald-500/30 shadow-xl">
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-emerald-400 block mb-1">
                  Mobile Ecosystems
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-300 font-mono">
                  {cmsMetrics.mobileCount}
                </span>
              </div>

              <div className="p-3 sm:p-5 rounded-2xl sm:rounded-3xl bg-surface-container-low/80 backdrop-blur-xl border border-purple-500/30 shadow-xl">
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-purple-400 block mb-1">
                  AI & Autonomous Swarms
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-purple-300 font-mono">
                  {cmsMetrics.aiCount}
                </span>
              </div>
            </div>

            {/* CMS ERROR NOTICE */}
            {cmsError && (
              <div className="p-4 rounded-2xl bg-error/15 border border-error/40 text-error text-xs font-semibold flex items-center justify-between backdrop-blur-md">
                <span>{cmsError}</span>
                <button onClick={fetchProjects} className="underline uppercase text-[10px] tracking-wider">
                  Retry
                </button>
              </div>
            )}

            {/* CMS TOOLBAR */}
            <div className="p-4 rounded-3xl bg-surface-container-low/85 backdrop-blur-2xl border border-outline-variant/30 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4 shadow-xl">
              <div className="relative flex-1">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-lg">
                  search
                </span>
                <input
                  type="text"
                  value={cmsSearch}
                  onChange={(e) => setCmsSearch(e.target.value)}
                  placeholder="Search projects by title, brand, category, or technology..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-xs sm:text-sm text-white placeholder:text-on-surface-variant/50 transition-all"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <select
                  value={cmsCategoryFilter}
                  onChange={(e) => setCmsCategoryFilter(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-surface-container-highest/80 border border-outline-variant/40 text-xs text-white focus:border-primary focus:outline-none cursor-pointer"
                >
                  <option value="all">All Categories</option>
                  {CATEGORY_OPTIONS.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>

                <div className="flex items-center p-1 rounded-xl bg-surface-container-highest/70 border border-outline-variant/40">
                  <button
                    onClick={() => setCmsViewMode("cards")}
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                      cmsViewMode === "cards" ? "bg-primary text-on-primary" : "text-on-surface-variant hover:text-white"
                    }`}
                  >
                    <span className="material-symbols-outlined text-base leading-none">grid_view</span>
                  </button>
                  <button
                    onClick={() => setCmsViewMode("table")}
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                      cmsViewMode === "table" ? "bg-primary text-on-primary" : "text-on-surface-variant hover:text-white"
                    }`}
                  >
                    <span className="material-symbols-outlined text-base leading-none">table_rows</span>
                  </button>
                </div>

                <button
                  onClick={openNewProjectModal}
                  className="px-4 py-2 rounded-xl bg-primary text-on-primary font-bold text-xs hover:bg-primary-fixed transition-all flex items-center gap-1.5 shadow-md shadow-primary/25 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base font-bold">add</span>
                  <span>Add Project</span>
                </button>
              </div>
            </div>

            {/* PROJECTS GRID / TABLE */}
            {filteredProjects.length === 0 ? (
              <div className="p-10 sm:p-16 rounded-2xl sm:rounded-3xl bg-surface-container-low/60 backdrop-blur-xl border border-outline-variant/30 text-center flex flex-col items-center justify-center shadow-xl">
                <span className="material-symbols-outlined text-3xl text-on-surface-variant mb-3">folder_open</span>
                <h3 className="text-base font-bold text-white">No projects found</h3>
                <p className="text-xs text-on-surface-variant mt-1 max-w-sm">
                  {cmsSearch || cmsCategoryFilter !== "all"
                    ? "Try adjusting your search query or category filter."
                    : "No projects in the portfolio yet."}
                </p>
              </div>
            ) : cmsViewMode === "cards" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredProjects.map((proj) => (
                  <div
                    key={proj.id || proj.slug}
                    className="rounded-3xl bg-surface-container-low/85 backdrop-blur-xl border border-outline-variant/30 overflow-hidden flex flex-col justify-between shadow-xl hover:border-primary/50 transition-all group"
                  >
                    <div>
                      {/* Image Thumbnail */}
                      <div className="relative w-full h-44 bg-surface-container-highest overflow-hidden">
                        <img
                          src={proj.heroImage}
                          alt={proj.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent opacity-80" />

                        {/* Top Category Badge */}
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md bg-black/60 text-white border border-white/15">
                          {proj.category}
                        </div>

                        {/* Accent swatch indicator */}
                        <div
                          className="absolute top-3 right-3 w-4 h-4 rounded-full border-2 border-white shadow-md"
                          style={{ backgroundColor: proj.accentColor || "#F2CA50" }}
                        />
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col gap-2.5">
                        <div className="flex items-center gap-1.5 text-xs font-bold" style={{ color: proj.accentColor || "#F2CA50" }}>
                          <span>{proj.brandName}</span>
                          <span>•</span>
                          <span className="text-on-surface-variant capitalize">{proj.deviceType || "Web"}</span>
                        </div>

                        <h3 className="text-base font-bold text-white leading-snug line-clamp-2">
                          {proj.title}
                        </h3>

                        <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed">
                          {proj.shortDesc || proj.description}
                        </p>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {(proj.technologies || []).slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded-lg bg-surface-container-highest/70 text-[10px] text-on-surface-variant font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {(proj.technologies || []).length > 4 && (
                            <span className="text-[10px] text-on-surface-variant self-center font-mono">
                              +{proj.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="p-4 border-t border-outline-variant/20 bg-surface-container-high/30 flex items-center justify-between gap-2">
                      <Link
                        href={`/work#${proj.id || proj.slug}`}
                        target="_blank"
                        className="text-xs text-on-surface-variant hover:text-primary flex items-center gap-1 transition-colors"
                      >
                        <span className="material-symbols-outlined text-sm">visibility</span>
                        <span>Preview Live</span>
                      </Link>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => openEditProjectModal(proj)}
                          className="p-1.5 rounded-lg bg-surface-container-highest hover:bg-primary/20 text-on-surface hover:text-primary transition-colors cursor-pointer"
                          title="Edit Project"
                        >
                          <span className="material-symbols-outlined text-base">edit</span>
                        </button>
                        <button
                          onClick={() => setDeleteProjectConfirmId(proj.id)}
                          className="p-1.5 rounded-lg bg-surface-container-highest hover:bg-error/20 text-on-surface hover:text-error transition-colors cursor-pointer"
                          title="Delete Project"
                        >
                          <span className="material-symbols-outlined text-base">delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* CMS TABLE VIEW */
              <div className="rounded-3xl bg-surface-container-low/85 backdrop-blur-2xl border border-outline-variant/30 overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-outline-variant/30 bg-surface-container-high/50 text-[11px] uppercase tracking-wider text-on-surface-variant font-bold">
                        <th className="py-4 px-5">Project / Brand</th>
                        <th className="py-4 px-5">Category & Device</th>
                        <th className="py-4 px-5">Client & Metrics</th>
                        <th className="py-4 px-5 max-w-xs">Technologies</th>
                        <th className="py-4 px-5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/20 text-xs">
                      {filteredProjects.map((proj) => (
                        <tr key={proj.id || proj.slug} className="hover:bg-surface-container-highest/40 transition-colors">
                          <td className="py-4 px-5">
                            <div className="flex items-center gap-3">
                              <img
                                src={proj.heroImage}
                                alt={proj.title}
                                className="w-10 h-10 rounded-xl object-cover shrink-0 border border-outline-variant/30"
                              />
                              <div>
                                <div className="font-bold text-white text-sm">{proj.brandName}</div>
                                <div className="text-[11px] text-on-surface-variant truncate max-w-[200px]">{proj.title}</div>
                              </div>
                            </div>
                          </td>

                          <td className="py-4 px-5">
                            <div className="text-white font-medium">{proj.category}</div>
                            <div className="text-on-surface-variant text-[11px] capitalize">{proj.deviceType || "Web"}</div>
                          </td>

                          <td className="py-4 px-5">
                            <div className="text-white">{proj.client || "Solvexa Case Study"}</div>
                            <div className="text-primary font-mono text-[11px]">
                              {proj.metrics} {proj.metricsLabel}
                            </div>
                          </td>

                          <td className="py-4 px-5 max-w-xs">
                            <div className="flex flex-wrap gap-1">
                              {(proj.technologies || []).slice(0, 3).map((t) => (
                                <span key={t} className="px-1.5 py-0.5 rounded bg-surface-container-highest text-[10px] text-on-surface-variant">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </td>

                          <td className="py-4 px-5 text-right whitespace-nowrap">
                            <div className="flex items-center justify-end gap-1.5">
                              <Link
                                href={`/work/${proj.slug}`}
                                target="_blank"
                                className="p-1.5 rounded-lg bg-surface-container-high hover:text-primary text-on-surface-variant transition-colors"
                                title="View Live"
                              >
                                <span className="material-symbols-outlined text-base">visibility</span>
                              </Link>
                              <button
                                onClick={() => openEditProjectModal(proj)}
                                className="p-1.5 rounded-lg bg-surface-container-high hover:text-primary text-on-surface-variant transition-colors cursor-pointer"
                                title="Edit"
                              >
                                <span className="material-symbols-outlined text-base">edit</span>
                              </button>
                              <button
                                onClick={() => setDeleteProjectConfirmId(proj.id)}
                                className="p-1.5 rounded-lg bg-surface-container-high hover:text-error text-on-surface-variant transition-colors cursor-pointer"
                                title="Delete"
                              >
                                <span className="material-symbols-outlined text-base">delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* =========================================================
          MODAL 1: CRM LEAD DETAILS (THEME-ALIGNED, LIGHTWEIGHT & LAG-FREE)
      ========================================================= */}
      {selectedSub && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-[#0c0618]/75 animate-in fade-in duration-150">
          <div className="w-full max-w-3xl max-h-[88vh] my-auto rounded-2xl sm:rounded-3xl bg-[#180e2f] border border-primary/30 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-outline-variant/25 bg-[#21133f] flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md shrink-0 ${
                    selectedSub.type === "project_brief"
                      ? "bg-primary/20 text-primary border border-primary/35"
                      : "bg-purple-500/20 text-purple-300 border border-purple-500/35"
                  }`}
                >
                  <span className="material-symbols-outlined text-xl">
                    {selectedSub.type === "project_brief" ? "rocket_launch" : "mail"}
                  </span>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                        selectedSub.type === "project_brief"
                          ? "bg-primary/15 text-primary border-primary/30"
                          : "bg-purple-500/15 text-purple-300 border-purple-500/30"
                      }`}
                    >
                      {selectedSub.type === "project_brief" ? "Project Brief" : "Contact Inquiry"}
                    </span>
                    <span className="text-[10px] text-on-surface-variant font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded-md">
                      ID: {selectedSub.id.slice(0, 8)}...
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {selectedSub.fullName}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => copyLeadSummary(selectedSub)}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-container-highest hover:bg-surface-container-high border border-outline-variant/30 text-xs font-semibold text-slate-200 hover:text-primary transition-all cursor-pointer"
                  title="Copy formatted summary"
                >
                  <span className="material-symbols-outlined text-sm">assignment</span>
                  <span>Copy Summary</span>
                </button>
                <button
                  onClick={() => setSelectedSub(null)}
                  className="p-1.5 rounded-xl text-on-surface-variant hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title="Close (Esc)"
                >
                  <span className="material-symbols-outlined text-2xl">close</span>
                </button>
              </div>
            </div>

            {/* Modal Body - Smooth fast native scrolling */}
            <div className="p-5 sm:p-6 overflow-y-auto flex-1 flex flex-col gap-5 text-xs sm:text-sm bg-[#150b29]">
              {/* Quick Communication Banner */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 p-3 sm:p-3.5 rounded-xl bg-[#1f123b] border border-outline-variant/25">
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-slate-200 font-semibold">Direct Client Outreach:</span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={`mailto:${selectedSub.email}?subject=${encodeURIComponent(
                      "Solvexa Follow-up — " + selectedSub.fullName
                    )}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/15 hover:bg-sky-500/25 border border-sky-500/30 text-sky-300 text-xs font-semibold transition-all"
                  >
                    <span className="material-symbols-outlined text-sm">send</span>
                    <span>Send Email</span>
                  </a>

                  {selectedSub.phone && (
                    <a
                      href={`tel:${selectedSub.phone}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 text-xs font-semibold transition-all"
                    >
                      <span className="material-symbols-outlined text-sm">call</span>
                      <span>Call Client</span>
                    </a>
                  )}

                  {selectedSub.phone && getWhatsAppUrl(selectedSub.phone, selectedSub.fullName) && (
                    <a
                      href={getWhatsAppUrl(selectedSub.phone, selectedSub.fullName)!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-600/20 hover:bg-green-600/30 border border-green-500/35 text-green-300 text-xs font-semibold transition-all"
                    >
                      <span className="material-symbols-outlined text-sm">chat</span>
                      <span>WhatsApp</span>
                    </a>
                  )}

                  <button
                    onClick={() => copyLeadSummary(selectedSub)}
                    className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-highest border border-outline-variant/30 text-slate-200 text-xs font-medium"
                  >
                    <span className="material-symbols-outlined text-sm">content_copy</span>
                    <span>Copy</span>
                  </button>
                </div>
              </div>

              {/* Client & Submission Details Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {/* Full Name */}
                <div className="p-3.5 rounded-xl bg-[#1f123b] border border-outline-variant/25 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-on-surface-variant mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Client Name</span>
                    <span className="material-symbols-outlined text-sm text-primary/70">person</span>
                  </div>
                  <div className="text-sm font-bold text-white truncate">
                    {selectedSub.fullName}
                  </div>
                </div>

                {/* Email Address */}
                <div className="p-3.5 rounded-xl bg-[#1f123b] border border-outline-variant/25 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-on-surface-variant mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Email Address</span>
                    <span className="material-symbols-outlined text-sm text-primary/70">alternate_email</span>
                  </div>
                  <div className="flex items-center justify-between gap-1.5">
                    <a
                      href={`mailto:${selectedSub.email}`}
                      className="text-xs font-mono font-medium text-sky-300 hover:underline truncate"
                      title={selectedSub.email}
                    >
                      {selectedSub.email}
                    </a>
                    <button
                      onClick={() => copyToClipboard(selectedSub.email, "Email")}
                      className="p-1 rounded text-on-surface-variant hover:text-primary transition-colors cursor-pointer shrink-0"
                      title="Copy email"
                    >
                      <span className="material-symbols-outlined text-xs">content_copy</span>
                    </button>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="p-3.5 rounded-xl bg-[#1f123b] border border-outline-variant/25 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-on-surface-variant mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Phone Number</span>
                    <span className="material-symbols-outlined text-sm text-primary/70">call</span>
                  </div>
                  <div className="flex items-center justify-between gap-1.5">
                    <span
                      className={`text-xs font-mono ${
                        selectedSub.phone ? "text-emerald-300 font-semibold" : "text-on-surface-variant italic"
                      }`}
                    >
                      {selectedSub.phone || "Not provided"}
                    </span>
                    {selectedSub.phone && (
                      <button
                        onClick={() => copyToClipboard(selectedSub.phone || "", "Phone")}
                        className="p-1 rounded text-on-surface-variant hover:text-primary transition-colors cursor-pointer shrink-0"
                        title="Copy phone"
                      >
                        <span className="material-symbols-outlined text-xs">content_copy</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Company / Brand */}
                <div className="p-3.5 rounded-xl bg-[#1f123b] border border-outline-variant/25 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-on-surface-variant mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Company / Brand</span>
                    <span className="material-symbols-outlined text-sm text-primary/70">apartment</span>
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-white truncate">
                    {selectedSub.company || "Direct Client / Private"}
                  </div>
                </div>

                {/* Requested Service */}
                <div className="p-3.5 rounded-xl bg-[#1f123b] border border-outline-variant/25 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-on-surface-variant mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Service</span>
                    <span className="material-symbols-outlined text-sm text-primary/70">design_services</span>
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-primary/15 border border-primary/30 text-primary text-xs font-bold">
                      {selectedSub.service || "General Inquiry"}
                    </span>
                  </div>
                </div>

                {/* Estimated Budget */}
                <div className="p-3.5 rounded-xl bg-[#1f123b] border border-outline-variant/25 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-on-surface-variant mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Budget</span>
                    <span className="material-symbols-outlined text-sm text-primary/70">payments</span>
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold">
                      {selectedSub.budget || "Unspecified"}
                    </span>
                  </div>
                </div>

                {/* Source Route - SHOW ONLY CLEAN PAGE NAME */}
                <div className="p-3.5 rounded-xl bg-[#1f123b] border border-outline-variant/25 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-on-surface-variant mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Origin Page</span>
                    <span className="material-symbols-outlined text-sm text-primary/70">web</span>
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-semibold">
                      <span className="material-symbols-outlined text-xs">auto_awesome</span>
                      <span>{formatRoutePageName(selectedSub.sourceUrl, selectedSub.type)}</span>
                    </span>
                  </div>
                </div>

                {/* Submission Date & Time */}
                <div className="p-3.5 rounded-xl bg-[#1f123b] border border-outline-variant/25 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-on-surface-variant mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Date Received</span>
                    <span className="material-symbols-outlined text-sm text-primary/70">calendar_month</span>
                  </div>
                  <div className="text-xs font-medium text-slate-200">
                    {formatDate(selectedSub.createdAt).date} • {formatDate(selectedSub.createdAt).time}
                  </div>
                </div>

                {/* Firestore Record ID */}
                <div className="p-3.5 rounded-xl bg-[#1f123b] border border-outline-variant/25 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-on-surface-variant mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Document ID</span>
                    <span className="material-symbols-outlined text-sm text-primary/70">fingerprint</span>
                  </div>
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[11px] font-mono text-slate-300 truncate">
                      {selectedSub.id}
                    </span>
                    <button
                      onClick={() => copyToClipboard(selectedSub.id, "Document ID")}
                      className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer shrink-0"
                      title="Copy Document ID"
                    >
                      <span className="material-symbols-outlined text-xs">content_copy</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Full Customer Message / Scope Box */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-primary text-base">description</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      Customer Message & Scope of Work
                    </span>
                  </div>
                  {selectedSub.message && (
                    <button
                      onClick={() => copyToClipboard(selectedSub.message || "", "Customer Message")}
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-semibold cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-xs">content_copy</span>
                      <span>Copy Text</span>
                    </button>
                  )}
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-[#1e1039] border border-primary/20 text-slate-100 leading-relaxed font-sans select-text whitespace-pre-wrap text-sm">
                  {selectedSub.message ? (
                    selectedSub.message
                  ) : (
                    <span className="text-on-surface-variant/70 italic">No message body was included with this submission.</span>
                  )}
                </div>
                {selectedSub.message && (
                  <div className="text-[11px] text-on-surface-variant flex items-center justify-end gap-2 px-1">
                    <span>{selectedSub.message.trim().split(/\s+/).filter(Boolean).length} words</span>
                    <span>•</span>
                    <span>{selectedSub.message.length} characters</span>
                  </div>
                )}
              </div>

              {/* CRM Pipeline Status & Internal Notes Card */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#1f123b] border border-outline-variant/25 flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-primary text-base">edit_note</span>
                    <label className="text-xs font-bold uppercase tracking-wider text-white">
                      CRM Pipeline Status & Team Notes
                    </label>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">Status:</span>
                    <select
                      value={detailStatus}
                      onChange={(e) => setDetailStatus(e.target.value)}
                      className="px-3 py-1.5 rounded-lg bg-[#150b29] border border-outline-variant/40 text-xs font-semibold text-white focus:border-primary focus:outline-none cursor-pointer"
                    >
                      <option value="new">🟡 New Lead</option>
                      <option value="contacted">🔵 Contacted</option>
                      <option value="in_progress">🟠 In Progress</option>
                      <option value="converted">🟢 Converted (Won)</option>
                      <option value="archived">⚪ Archived</option>
                    </select>
                  </div>
                </div>

                <textarea
                  rows={3}
                  value={detailNotes}
                  onChange={(e) => setDetailNotes(e.target.value)}
                  placeholder="Record internal notes, quotation numbers, meeting takeaways, or follow-up milestones..."
                  className="w-full p-3.5 rounded-lg bg-[#150b29] border border-outline-variant/40 focus:border-primary focus:outline-none text-xs sm:text-sm text-white placeholder:text-on-surface-variant/60 transition-all resize-none font-sans"
                />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-0.5">
                  <span className="text-[11px] text-on-surface-variant">
                    Saves directly to Cloud Firestore collection <code className="text-primary font-mono">submissions</code>
                  </span>
                  <button
                    onClick={handleSaveDetails}
                    disabled={updatingDetails}
                    className="px-4 py-2 rounded-lg bg-primary text-on-primary font-bold text-xs hover:bg-[#ffe27d] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-primary/20 disabled:opacity-50"
                  >
                    {updatingDetails ? (
                      <>
                        <span className="h-3 w-3 rounded-full border-2 border-on-primary border-t-transparent animate-spin" />
                        <span>Saving Notes...</span>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-sm">check_circle</span>
                        <span>Save CRM Status & Notes</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-outline-variant/25 bg-[#21133f] flex items-center justify-between shrink-0">
              <button
                onClick={() => setDeleteConfirmId(selectedSub.id)}
                className="px-3.5 py-2 rounded-lg bg-error/15 hover:bg-error/25 text-error border border-error/30 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">delete</span>
                <span>Delete Lead</span>
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${selectedSub.email}?subject=${encodeURIComponent("Solvexa Follow-up — " + selectedSub.fullName)}`}
                  className="px-3.5 py-2 rounded-lg bg-surface-container-highest hover:bg-surface-container-high text-white text-xs font-semibold transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-sm">email</span>
                  <span>Email Client</span>
                </a>
                <button
                  onClick={() => setSelectedSub(null)}
                  className="px-4 py-2 rounded-lg bg-primary text-on-primary text-xs font-bold hover:bg-[#ffe27d] transition-colors cursor-pointer shadow-md shadow-primary/20"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          MODAL 2: CMS PROJECT EDITOR (FULLY STYLED & PERFECT)
      ========================================================= */}
      {projectEditorOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-[#070212]/92 animate-in fade-in duration-150">
          <div className="w-full max-w-3xl max-h-[90vh] my-auto rounded-3xl bg-[#130728] border-2 border-primary/40 shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_40px_rgba(242,202,80,0.18)] flex flex-col overflow-hidden transform-gpu will-change-transform animate-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-outline-variant/30 flex items-center justify-between bg-[#190a33] sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(242,202,80,0.2)]">
                  <span className="material-symbols-outlined text-xl">
                    {editingProject ? "edit_document" : "post_add"}
                  </span>
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    {editingProject ? `Edit: ${editingProject.brandName}` : "Create New Portfolio Project"}
                  </h2>
                  <p className="text-xs text-on-surface-variant">
                    Save to publish directly to the live Solvexa /work showcase
                  </p>
                </div>
              </div>

              <button
                onClick={() => setProjectEditorOpen(false)}
                className="p-2 rounded-xl text-on-surface-variant hover:text-white hover:bg-surface-container-highest transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            {/* Modal Form Body */}
            <form onSubmit={handleSaveProject} className="flex-1 overflow-y-auto p-5 sm:p-7 flex flex-col gap-5 text-xs sm:text-sm">
              {projectFormError && (
                <div className="p-3.5 rounded-xl bg-error/15 border border-error/40 text-error text-xs font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">error</span>
                  <span>{projectFormError}</span>
                </div>
              )}

              {/* Title & Brand Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">
                    Brand / Product Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={pBrandName}
                    onChange={(e) => {
                      setPBrandName(e.target.value);
                      if (!editingProject) {
                        setPSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-"));
                      }
                    }}
                    placeholder="e.g. Apex Health, Lumina AI"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-white text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">
                    Project Headline Title <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={pTitle}
                    onChange={(e) => setPTitle(e.target.value)}
                    placeholder="e.g. AI-Powered Autonomous Clinical Diagnostics Platform"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-white text-xs sm:text-sm"
                  />
                </div>
              </div>

              {/* Category, Device Type & Slug */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">
                    Category <span className="text-primary">*</span>
                  </label>
                  <select
                    value={pCategory}
                    onChange={(e) => setPCategory(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-surface-container-highest/70 border border-outline-variant/40 focus:border-primary focus:outline-none text-white text-xs cursor-pointer"
                  >
                    {CATEGORY_OPTIONS.map((cat) => (
                      <option key={cat} value={cat} className="bg-surface text-white">
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">
                    Target Device
                  </label>
                  <select
                    value={pDeviceType}
                    onChange={(e) => setPDeviceType(e.target.value as "web" | "mobile" | "both")}
                    className="w-full px-3 py-2.5 rounded-xl bg-surface-container-highest/70 border border-outline-variant/40 focus:border-primary focus:outline-none text-white text-xs cursor-pointer"
                  >
                    <option value="web" className="bg-surface text-white">Web Application</option>
                    <option value="mobile" className="bg-surface text-white">Mobile Application</option>
                    <option value="both" className="bg-surface text-white">Omnichannel (Web + Mobile)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">
                    URL Slug
                  </label>
                  <input
                    type="text"
                    value={pSlug}
                    onChange={(e) => setPSlug(e.target.value)}
                    placeholder="e.g. apex-health-platform"
                    className="w-full px-3 py-2.5 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-white text-xs font-mono"
                  />
                </div>
              </div>

              {/* Accent Color Preset Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">
                  Brand Accent Theme Color
                </label>
                <div className="flex items-center gap-2 flex-wrap">
                  {ACCENT_PRESETS.map((preset) => (
                    <button
                      key={preset.color}
                      type="button"
                      onClick={() => setPAccentColor(preset.color)}
                      className={`px-3 py-1.5 rounded-xl border flex items-center gap-2 text-xs font-medium transition-all cursor-pointer ${
                        pAccentColor === preset.color
                          ? "border-primary bg-primary/20 text-white shadow-[0_0_12px_rgba(242,202,80,0.3)]"
                          : "border-outline-variant/30 text-on-surface-variant hover:text-white"
                      }`}
                    >
                      <span className="w-3 h-3 rounded-full shadow-inner" style={{ backgroundColor: preset.color }} />
                      <span>{preset.label}</span>
                    </button>
                  ))}
                  <input
                    type="color"
                    value={pAccentColor}
                    onChange={(e) => setPAccentColor(e.target.value)}
                    className="w-8 h-8 rounded-lg border border-outline-variant/40 bg-transparent cursor-pointer ml-1"
                    title="Custom Color"
                  />
                </div>
              </div>

              {/* Hero Image URL & Live Preview */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">
                  Hero Image URL <span className="text-primary">*</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    required
                    value={pHeroImage}
                    onChange={(e) => setPHeroImage(e.target.value)}
                    placeholder="https://images.unsplash.com/photo-..."
                    className="flex-1 px-4 py-2.5 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-white text-xs sm:text-sm"
                  />
                </div>
                {pHeroImage && (
                  <div className="mt-2.5 relative w-full h-36 rounded-2xl bg-surface-container-highest overflow-hidden border border-outline-variant/30 shadow-inner">
                    <img
                      src={pHeroImage}
                      alt="Preview"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80";
                      }}
                    />
                    <span className="absolute bottom-2 right-2 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[10px] text-white font-mono border border-white/10">
                      Live Preview
                    </span>
                  </div>
                )}
              </div>

              {/* Client Logo URL & Preview */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">
                  Client Logo URL <span className="text-on-surface-variant/50 font-normal normal-case">(shown in Brands marquee & grid)</span>
                </label>
                <input
                  type="url"
                  value={pClientLogo}
                  onChange={(e) => setPClientLogo(e.target.value)}
                  placeholder="/assets/Client Logo/brand-logo.png"
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-white text-xs sm:text-sm"
                />
                {pClientLogo && (
                  <div className="mt-2.5 relative w-20 h-20 rounded-2xl bg-surface-container-highest overflow-hidden border border-outline-variant/30 shadow-inner flex items-center justify-center">
                    <img
                      src={pClientLogo}
                      alt="Client Logo Preview"
                      className="w-14 h-14 object-contain"
                      onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0.2"; }}
                    />
                    <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[8px] text-white font-mono border border-white/10">
                      Preview
                    </span>
                  </div>
                )}
              </div>

              {/* Short Summary & Full Narrative */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">
                  Short Description (For Cards & Showcase) <span className="text-primary">*</span>
                </label>
                <textarea
                  rows={2}
                  required
                  value={pShortDesc}
                  onChange={(e) => setPShortDesc(e.target.value)}
                  placeholder="High-level 1-2 sentence executive overview..."
                  className="w-full p-3 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-white text-xs sm:text-sm resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">
                  Full Case Study Narrative
                </label>
                <textarea
                  rows={3}
                  value={pDescription}
                  onChange={(e) => setPDescription(e.target.value)}
                  placeholder="Comprehensive project breakdown, technical achievements, architecture..."
                  className="w-full p-3 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-white text-xs sm:text-sm resize-none"
                />
              </div>

              {/* Technologies & Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">
                    Technologies (Comma-separated)
                  </label>
                  <input
                    type="text"
                    value={pTechInput}
                    onChange={(e) => setPTechInput(e.target.value)}
                    placeholder="e.g. Next.js, React Native, PyTorch, Supabase"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-white text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">
                    Key Metric & Label
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={pMetrics}
                      onChange={(e) => setPMetrics(e.target.value)}
                      placeholder="e.g. 99.99%"
                      className="w-28 px-3 py-2.5 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-white text-xs font-mono"
                    />
                    <input
                      type="text"
                      value={pMetricsLabel}
                      onChange={(e) => setPMetricsLabel(e.target.value)}
                      placeholder="e.g. SLA Uptime"
                      className="flex-1 px-3 py-2.5 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-white text-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Client, Timeline & Live URL */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">
                    Client Name
                  </label>
                  <input
                    type="text"
                    value={pClient}
                    onChange={(e) => setPClient(e.target.value)}
                    placeholder="e.g. HealthPulse Inc."
                    className="w-full px-3 py-2 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">
                    Timeline
                  </label>
                  <input
                    type="text"
                    value={pTimeline}
                    onChange={(e) => setPTimeline(e.target.value)}
                    placeholder="e.g. 8 Weeks"
                    className="w-full px-3 py-2 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">
                    Live Demo / Website URL
                  </label>
                  <input
                    type="url"
                    value={pLiveUrl}
                    onChange={(e) => setPLiveUrl(e.target.value)}
                    placeholder="https://..."
                    className="w-full px-3 py-2 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-white text-xs font-mono"
                  />
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-outline-variant/30 bg-[#190a33] flex items-center justify-end gap-3 sticky bottom-0 z-20 py-3 -mx-5 sm:-mx-7 px-5 sm:px-7">
                <button
                  type="button"
                  onClick={() => setProjectEditorOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-surface-container-highest hover:bg-surface-container-high text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={projectFormSaving}
                  className="px-6 py-2.5 rounded-xl bg-primary text-on-primary font-bold text-xs hover:bg-primary-fixed shadow-md shadow-primary/25 hover:shadow-primary/40 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {projectFormSaving ? (
                    <>
                      <span className="h-3 w-3 rounded-full border-2 border-on-primary border-t-transparent animate-spin" />
                      <span>Publishing...</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-base">cloud_upload</span>
                      <span>{editingProject ? "Update Case Study" : "Publish to Work Page"}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CONFIRM DELETE MODALS */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-[#070212]/92 animate-in fade-in duration-150">
          <div className="p-6 rounded-3xl bg-[#130728] border-2 border-error/40 max-w-sm w-full text-center shadow-2xl flex flex-col items-center transform-gpu">
            <div className="w-12 h-12 rounded-full bg-error/20 text-error flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-2xl">warning</span>
            </div>
            <h4 className="text-base font-bold text-white">Delete Lead Record?</h4>
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
              This action permanently removes this customer submission from Cloud Firestore.
            </p>
            <div className="flex gap-2.5 mt-5 w-full">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="flex-1 py-2.5 rounded-xl bg-surface-container-highest text-xs font-semibold text-white hover:bg-surface-container-high transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteSubmission(deleteConfirmId)}
                className="flex-1 py-2.5 rounded-xl bg-error text-white text-xs font-bold hover:bg-error/90 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteProjectConfirmId && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-[#070212]/92 animate-in fade-in duration-150">
          <div className="p-6 rounded-3xl bg-[#130728] border-2 border-error/40 max-w-sm w-full text-center shadow-2xl flex flex-col items-center transform-gpu">
            <div className="w-12 h-12 rounded-full bg-error/20 text-error flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-2xl">delete_forever</span>
            </div>
            <h4 className="text-base font-bold text-white">Delete Case Study?</h4>
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
              Are you sure you want to remove this project from your portfolio database?
            </p>
            <div className="flex gap-2.5 mt-5 w-full">
              <button
                onClick={() => setDeleteProjectConfirmId(null)}
                className="flex-1 py-2.5 rounded-xl bg-surface-container-highest text-xs font-semibold text-white hover:bg-surface-container-high transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteProject(deleteProjectConfirmId)}
                className="flex-1 py-2.5 rounded-xl bg-error text-white text-xs font-bold hover:bg-error/90 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
