// src/components/ProjectCard.jsx
import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Eye,
  Heart,
  Calendar,
  Award,
} from "lucide-react";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  if (!project) return null;

  return (
    <div
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            project.status === "Completed"
              ? "bg-green-100 text-green-800"
              : project.status === "In Progress"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {project.status}
        </span>
      </div>

      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={
            project.image ||
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop"
          }
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Floating Action Buttons */}
        <div
          className={`absolute top-4 left-4 flex gap-2 transition-all duration-300 ${
            isHovered
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${
              isLiked
                ? "bg-red-500 text-white"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category & Title */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
              {project.category}
            </span>
            {project.featured && (
              <div className="flex items-center gap-1 text-yellow-600">
                <Award className="w-4 h-4" />
                <span className="text-xs font-medium">Featured</span>
              </div>
            )}
          </div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-4 text-sm">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-5">
          <div className="flex flex-wrap gap-2">
            {project.techStack &&
              project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100 hover:from-blue-100 hover:to-indigo-100 transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
          </div>
        </div>

        {/* Project Meta Info */}
        {(project.date || project.duration) && (
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
            {project.date && (
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{project.date}</span>
              </div>
            )}
            {project.duration && (
              <div className="flex items-center gap-1">
                <span>⏱️</span>
                <span>{project.duration}</span>
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 items-center">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-medium group/btn text-sm"
            >
              <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
              Live Demo
            </a>
          )}

          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-200 font-medium group/btn text-sm"
            >
              <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
              Code
            </a>
          )}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium group/btn ml-auto text-sm"
            >
              <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              Details
            </a>
          )}
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300 pointer-events-none" />

      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-indigo-50/0 group-hover:from-blue-50/10 group-hover:to-indigo-50/10 transition-all duration-500 pointer-events-none rounded-2xl" />
    </div>
  );
};

export default ProjectCard;
