import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Filter, Search, Grid, List, Star, Calendar } from "lucide-react";
import Navbar from "./Navbar";

const C = {
  bg: "#0a0b0f",
  surface: "#0d0f14",
  border: "#1a1d27",
  accent: "#f59e0b",
  accentGlow: "rgba(245,158,11,0.1)",
  text: "#e8eaf0",
  muted: "#6b7590",
};

const projects = [
  {
    id: 1,
    title: "100 Days of DevOps",
    description:
      "A daily challenge series solving real-world DevOps tasks on live servers — documenting every command, concept, and lesson learned along the way.",
    techStack: ["Linux", "Docker", "Kubernetes", "AWS", "CI/CD"],
    githubLink: "https://github.com/Sagar-Karki1",
    liveLink: null,
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400&h=200&fit=crop",
    category: "DevOps",
    status: "In Progress",
    featured: true,
    date: "2025",
  },
  {
    id: 2,
    title: "AI-Powered Task Manager",
    description:
      "A smart task management application with AI-driven prioritization and natural language processing. Built with modern React and OpenAI integration.",
    techStack: ["React", "Node.js", "OpenAI", "MongoDB", "Tailwind"],
    githubLink: "https://github.com/yourproject",
    liveLink: "https://yourproject.com",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop",
    category: "Full Stack",
    status: "Completed",
    featured: true,
    date: "2024",
  },
  {
    id: 3,
    title: "E-commerce Dashboard",
    description:
      "Modern admin dashboard for e-commerce management with real-time analytics, inventory tracking, and comprehensive sales reporting.",
    techStack: ["Vue.js", "Express", "PostgreSQL", "Chart.js", "Stripe API"],
    githubLink: "https://github.com/yourproject2",
    liveLink: "https://yourproject2.com",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
    category: "Web App",
    status: "In Progress",
    featured: false,
    date: "2024",
  },
  {
    id: 4,
    title: "Real-time Chat Application",
    description:
      "Secure messaging platform with end-to-end encryption, file sharing, and group chat. Supports thousands of concurrent users.",
    techStack: ["React", "Socket.io", "Express", "MongoDB", "Redis"],
    githubLink: "https://github.com/yourproject4",
    liveLink: "https://yourchat.com",
    image:
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=200&fit=crop",
    category: "Web App",
    status: "Completed",
    featured: false,
    date: "2023",
  },
  {
    id: 5,
    title: "Data Visualization Tool",
    description:
      "Interactive data visualization platform supporting CSV, JSON, and API data imports with real-time updates and custom dashboards.",
    techStack: ["D3.js", "Python", "Flask", "PostgreSQL", "Docker", "AWS"],
    githubLink: "https://github.com/yourproject5",
    liveLink: null,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
    category: "Data Science",
    status: "In Progress",
    featured: false,
    date: "2024",
  },
  {
    id: 6,
    title: "Blockchain Voting System",
    description:
      "Secure voting system built on blockchain with smart contracts and decentralized architecture — ensuring voter privacy with full transparency.",
    techStack: ["Solidity", "Web3.js", "React", "Truffle", "IPFS"],
    githubLink: "https://github.com/yourproject6",
    liveLink: "https://yourvoting.com",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop",
    category: "Blockchain",
    status: "Completed",
    featured: true,
    date: "2024",
  },
];

const inputStyle = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "14px",
  background: C.surface,
  border: `1px solid ${C.border}`,
  color: C.text,
  borderRadius: "8px",
  outline: "none",
  transition: "border-color 0.2s",
};

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filtered = projects.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.techStack.some((t) =>
        t.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchCat =
      selectedCategory === "All" || p.category === selectedCategory;
    return matchSearch && matchCat;
  });

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <Navbar />
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "120px 40px 100px",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "48px" }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              color: C.accent,
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "16px",
            }}
          >
            Projects
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <h1
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(36px, 5vw, 52px)",
                fontWeight: 800,
                color: C.text,
                letterSpacing: "-1.5px",
              }}
            >
              What I'm building.
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Star size={15} style={{ color: C.accent }} />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  color: C.muted,
                }}
              >
                {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "14px",
            marginBottom: "32px",
          }}
        >
          {[
            { val: projects.length, label: "Total", color: C.accent },
            {
              val: projects.filter((p) => p.status === "Completed").length,
              label: "Completed",
              color: "#22c55e",
            },
            {
              val: projects.filter((p) => p.status === "In Progress").length,
              label: "In Progress",
              color: "#f97316",
            },
            {
              val: new Set(projects.flatMap((p) => p.techStack)).size,
              label: "Technologies",
              color: "#818cf8",
            },
          ].map(({ val, label, color }) => (
            <div
              key={label}
              style={{
                padding: "18px",
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "28px",
                  fontWeight: 800,
                  color,
                  marginBottom: "4px",
                }}
              >
                {val}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  color: C.muted,
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div
          style={{
            padding: "20px 24px",
            background: C.surface,
            border: `1px solid ${C.border}`,
            borderRadius: "12px",
            marginBottom: "36px",
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {/* Search */}
          <div style={{ position: "relative", flex: "1", minWidth: "200px" }}>
            <Search
              size={16}
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: C.muted,
              }}
            />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                ...inputStyle,
                width: "100%",
                padding: "10px 12px 10px 36px",
              }}
              onFocus={(e) => (e.target.style.borderColor = C.accent)}
              onBlur={(e) => (e.target.style.borderColor = C.border)}
            />
          </div>

          {/* Category */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Filter size={15} style={{ color: C.muted }} />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{ ...inputStyle, padding: "10px 14px", cursor: "pointer" }}
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* View toggle */}
          <div
            style={{
              display: "flex",
              background: C.bg,
              border: `1px solid ${C.border}`,
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            {[
              { mode: "grid", Icon: Grid },
              { mode: "list", Icon: List },
            ].map(({ mode, Icon }) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                style={{
                  padding: "8px 12px",
                  background: viewMode === mode ? C.accentGlow : "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: viewMode === mode ? C.accent : C.muted,
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Icon size={16} />
              </button>
            ))}
          </div>
        </div>

        {/* Featured */}
        {projects.filter((p) => p.featured).length > 0 && (
          <div style={{ marginBottom: "48px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "24px",
              }}
            >
              <Star size={18} style={{ color: C.accent }} />
              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: C.text,
                  margin: 0,
                }}
              >
                Featured
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
              }}
            >
              {projects
                .filter((p) => p.featured)
                .map((p) => (
                  <ProjectCard key={`f-${p.id}`} project={p} />
                ))}
            </div>
          </div>
        )}

        {/* All projects */}
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "20px",
            fontWeight: 700,
            color: C.text,
            marginBottom: "24px",
          }}
        >
          All Projects
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              viewMode === "grid"
                ? "repeat(auto-fit, minmax(280px, 1fr))"
                : "1fr",
            gap: "20px",
          }}
        >
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 32px" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🔍</div>
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "22px",
                color: C.text,
                marginBottom: "10px",
              }}
            >
              No projects found
            </h3>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: C.muted,
                marginBottom: "24px",
              }}
            >
              Try adjusting your search or filter
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                padding: "10px 24px",
                background: C.accent,
                color: "#0a0b0f",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
