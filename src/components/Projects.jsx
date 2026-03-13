import { useState } from "react";
import { Filter, Search, Grid, List, Star } from "lucide-react";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "100 Days of DevOps",
    description:
      "A daily challenge series solving real-world DevOps tasks on live servers — every command, concept, and lesson documented.",
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
      "Smart task management with AI-driven prioritization, NLP, and intelligent scheduling. Built with React and OpenAI integration.",
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
      "Modern admin dashboard for e-commerce with real-time analytics, inventory tracking, and comprehensive sales reporting.",
    techStack: ["Vue.js", "Express", "PostgreSQL", "Chart.js", "Stripe"],
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
      "Interactive platform for charts, graphs, and dashboards from CSV, JSON, and API data sources with real-time updates.",
    techStack: ["D3.js", "Python", "Flask", "PostgreSQL", "Docker"],
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
      "Decentralized voting system using smart contracts. Ensures voter privacy while maintaining full transparency.",
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

export default function Projects() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [view, setView] = useState("grid");

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filtered = projects.filter((p) => {
    const q = search.toLowerCase();
    const matchSearch =
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.techStack.some((t) => t.toLowerCase().includes(q));
    const matchCat = category === "All" || p.category === category;
    return matchSearch && matchCat;
  });

  return (
    <div className="bg-[#0a0b0f] min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-8 md:px-12 pt-28 pb-24">
        {/* Header */}
        <div className="mb-12">
          <span className="font-sans text-[11px] font-bold text-amber-500 uppercase tracking-[3px] mb-4 block">
            Projects
          </span>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h1
              className="font-sans font-extrabold text-gray-100 tracking-tight"
              style={{ fontSize: "clamp(36px, 5vw, 52px)" }}
            >
              What I'm building.
            </h1>
            <div className="flex items-center gap-2 text-slate-500">
              <Calendar size={14} />
              <span className="font-sans text-sm">
                {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { val: projects.length, label: "Total", color: "text-amber-500" },
            {
              val: projects.filter((p) => p.status === "Completed").length,
              label: "Completed",
              color: "text-green-400",
            },
            {
              val: projects.filter((p) => p.status === "In Progress").length,
              label: "In Progress",
              color: "text-orange-400",
            },
            {
              val: new Set(projects.flatMap((p) => p.techStack)).size,
              label: "Technologies",
              color: "text-indigo-400",
            },
          ].map(({ val, label, color }) => (
            <div
              key={label}
              className="p-5 bg-[#0d0f14] border border-[#1a1d27] rounded-xl text-center"
            >
              <div
                className={`font-sans font-extrabold text-3xl tracking-tight mb-1 ${color}`}
              >
                {val}
              </div>
              <div className="font-sans text-slate-500 text-xs">{label}</div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-4 p-5 bg-[#0d0f14] border border-[#1a1d27] rounded-2xl mb-10">
          {/* Search */}
          <div className="relative flex-1 min-w-48">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
            />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-[#0a0b0f] border border-[#1a1d27] text-gray-200 font-sans text-sm rounded-lg outline-none focus:border-amber-500 transition-colors placeholder-slate-600"
            />
          </div>

          {/* Category */}
          <div className="flex items-center gap-2">
            <Filter size={14} className="text-slate-500" />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-2.5 bg-[#0a0b0f] border border-[#1a1d27] text-gray-200 font-sans text-sm rounded-lg outline-none focus:border-amber-500 transition-colors cursor-pointer"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* View toggle */}
          <div className="flex bg-[#0a0b0f] border border-[#1a1d27] rounded-lg overflow-hidden">
            {[
              { mode: "grid", Icon: Grid },
              { mode: "list", Icon: List },
            ].map(({ mode, Icon }) => (
              <button
                key={mode}
                onClick={() => setView(mode)}
                className={`p-2.5 border-none cursor-pointer transition-all duration-200 flex items-center
                  ${view === mode ? "bg-amber-500/10 text-amber-500" : "bg-transparent text-slate-500 hover:text-gray-300"}`}
              >
                <Icon size={15} />
              </button>
            ))}
          </div>
        </div>

        {/* Featured */}
        {projects.filter((p) => p.featured).length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Star size={16} className="text-amber-500" />
              <h2 className="font-sans font-bold text-gray-100 text-lg">
                Featured
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects
                .filter((p) => p.featured)
                .map((p) => (
                  <ProjectCard key={`f-${p.id}`} project={p} />
                ))}
            </div>
          </div>
        )}

        {/* All Projects */}
        <h2 className="font-sans font-bold text-gray-100 text-lg mb-6">
          All Projects
        </h2>
        <div
          className={`grid gap-5 ${view === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 max-w-2xl"}`}
        >
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-5">🔍</div>
            <h3 className="font-sans font-bold text-gray-100 text-xl mb-3">
              No projects found
            </h3>
            <p className="font-sans text-slate-500 text-sm mb-6">
              Try adjusting your search or filter
            </p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="px-6 py-2.5 bg-amber-500 text-[#0a0b0f] font-sans font-bold text-sm rounded-lg hover:bg-amber-400 transition-colors border-none cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
