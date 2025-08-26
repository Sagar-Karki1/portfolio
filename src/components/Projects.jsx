// src/components/Projects.jsx
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Filter, Search, Grid, List, Star, Calendar } from "lucide-react";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  // Your project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "AI-Powered Task Manager",
      description:
        "A smart task management application with AI-driven prioritization, natural language processing, and intelligent scheduling features. Built with modern React architecture and integrated with OpenAI's GPT for intelligent task suggestions.",
      techStack: [
        "React",
        "Node.js",
        "OpenAI",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
      ],
      link: "https://github.com/yourproject",
      githubLink: "https://github.com/yourproject",
      liveLink: "https://yourproject.com",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop",
      category: "Full Stack",
      status: "Completed",
      featured: true,
      date: "2024",
      duration: "3 months",
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      description:
        "Modern admin dashboard for e-commerce management with real-time analytics, inventory tracking, and comprehensive sales reporting. Features include drag-and-drop interface and advanced filtering.",
      techStack: ["Vue.js", "Express", "PostgreSQL", "Chart.js", "Stripe API"],
      link: "https://github.com/yourproject2",
      githubLink: "https://github.com/yourproject2",
      liveLink: "https://yourproject2.com",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
      category: "Web App",
      status: "In Progress",
      featured: false,
      date: "2024",
      duration: "2 months",
    },
    {
      id: 3,
      title: "Mobile Fitness Tracker",
      description:
        "Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features. Includes offline mode and wearable device integration.",
      techStack: ["React Native", "Firebase", "Redux", "Expo", "TypeScript"],
      link: "https://github.com/yourproject3",
      githubLink: "https://github.com/yourproject3",
      liveLink: null,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop",
      category: "Mobile App",
      status: "Completed",
      featured: true,
      date: "2023",
      duration: "4 months",
    },
    {
      id: 4,
      title: "Real-time Chat Application",
      description:
        "Secure messaging platform with end-to-end encryption, file sharing, and group chat capabilities. Built with scalable architecture supporting thousands of concurrent users.",
      techStack: ["React", "Socket.io", "Express", "MongoDB", "JWT", "Redis"],
      link: "https://github.com/yourproject4",
      githubLink: "https://github.com/yourproject4",
      liveLink: "https://yourchat.com",
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=200&fit=crop",
      category: "Web App",
      status: "Completed",
      featured: false,
      date: "2023",
      duration: "6 weeks",
    },
    {
      id: 5,
      title: "Data Visualization Tool",
      description:
        "Interactive data visualization platform for creating charts, graphs, and dashboards from various data sources. Supports CSV, JSON, and API data imports with real-time updates.",
      techStack: ["D3.js", "Python", "Flask", "PostgreSQL", "Docker", "AWS"],
      link: "https://github.com/yourproject5",
      githubLink: "https://github.com/yourproject5",
      liveLink: null,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
      category: "Data Science",
      status: "In Progress",
      featured: false,
      date: "2024",
      duration: "2 months",
    },
    {
      id: 6,
      title: "Blockchain Voting System",
      description:
        "Secure and transparent voting system built on blockchain technology with smart contracts and decentralized architecture. Ensures voter privacy while maintaining transparency.",
      techStack: ["Solidity", "Web3.js", "React", "Truffle", "Ganache", "IPFS"],
      link: "https://github.com/yourproject6",
      githubLink: "https://github.com/yourproject6",
      liveLink: "https://yourvoting.com",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop",
      category: "Blockchain",
      status: "Completed",
      featured: true,
      date: "2024",
      duration: "5 months",
    },
    {
      id: 7,
      title: "Weather Forecast App",
      description:
        "Beautiful weather application with 7-day forecasts, interactive maps, and severe weather alerts. Features location-based suggestions and historical weather data.",
      techStack: ["React", "OpenWeatherMap API", "Mapbox", "Chart.js", "PWA"],
      link: "https://github.com/yourproject7",
      githubLink: "https://github.com/yourproject7",
      liveLink: "https://yourweather.com",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=200&fit=crop",
      category: "Web App",
      status: "Completed",
      featured: false,
      date: "2023",
      duration: "1 month",
    },
    {
      id: 8,
      title: "Recipe Sharing Platform",
      description:
        "Social platform for sharing and discovering recipes with advanced search, meal planning, and shopping list generation. Includes user ratings and cooking timers.",
      techStack: ["Next.js", "MongoDB", "Cloudinary", "Stripe", "NextAuth"],
      link: "https://github.com/yourproject8",
      githubLink: "https://github.com/yourproject8",
      liveLink: "https://yourrecipes.com",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=200&fit=crop",
      category: "Full Stack",
      status: "In Progress",
      featured: false,
      date: "2024",
      duration: "3 months",
    },
  ];

  // Get unique categories
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  // Filter projects based on search and category
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.techStack.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my latest work, creative solutions, and technical
            challenges I've tackled.
          </p>
          <div className="flex justify-center items-center gap-4 mt-6">
            <div className="flex items-center gap-2 text-yellow-600">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm font-medium">Featured Projects</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span className="text-sm">{new Date().getFullYear()}</span>
            </div>
          </div>
        </div>

        {/* Controls Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="text-gray-500 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-xl">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "grid"
                    ? "bg-white shadow-sm text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "list"
                    ? "bg-white shadow-sm text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Projects Section */}
        {projects.filter((p) => p.featured).length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-6 h-6 text-yellow-600 fill-current" />
              <h2 className="text-2xl font-bold text-gray-900">
                Featured Projects
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((p) => p.featured)
                .map((project) => (
                  <ProjectCard
                    key={`featured-${project.id}`}
                    project={project}
                  />
                ))}
            </div>
          </div>
        )}

        {/* All Projects Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            All Projects
          </h2>
        </div>
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
              {projects.length}
            </div>
            <div className="text-gray-600 text-sm">Total Projects</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">
              {projects.filter((p) => p.status === "Completed").length}
            </div>
            <div className="text-gray-600 text-sm">Completed</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-1">
              {projects.filter((p) => p.status === "In Progress").length}
            </div>
            <div className="text-gray-600 text-sm">In Progress</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">
              {new Set(projects.flatMap((p) => p.techStack)).size}
            </div>
            <div className="text-gray-600 text-sm">Technologies</div>
          </div>
        </div>

        {/* Projects Grid/List */}
        <div
          className={`grid gap-6 ${
            viewMode === "grid"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 max-w-4xl mx-auto"
          }`}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-8xl mb-6">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              No projects found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Load More Button (if you want to implement pagination) */}
        {filteredProjects.length > 0 && filteredProjects.length >= 6 && (
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-medium">
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
