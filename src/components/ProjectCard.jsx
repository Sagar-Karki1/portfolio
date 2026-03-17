import { ExternalLink, Github, Star } from "lucide-react";

const C = {
  bg: "#080a0d",
  surface: "#0d1117",
  border: "#151a22",
  accent: "#06b6d4",
  accentGlow: "rgba(6,182,212,0.08)",
  text: "#e2e8f0",
  muted: "#64748b",
};

const statusColors = {
  Completed: {
    color: "#22c55e",
    bg: "rgba(34,197,94,0.1)",
    border: "rgba(34,197,94,0.2)",
  },
  "In Progress": {
    color: "#f97316",
    bg: "rgba(249,115,22,0.1)",
    border: "rgba(249,115,22,0.2)",
  },
};

const ProjectCard = ({ project }) => {
  const status = statusColors[project.status] || statusColors["Completed"];

  return (
    <div
      style={{
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: "14px",
        overflow: "hidden",
        transition: "all 0.2s",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(6,182,212,0.25)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = C.border;
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Image */}
      {project.image && (
        <div
          style={{ height: "160px", overflow: "hidden", position: "relative" }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.7) saturate(0.8)",
            }}
          />
          {project.featured && (
            <div
              style={{
                position: "absolute",
                top: "12px",
                left: "12px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                background: "rgba(8,10,13,0.85)",
                border: `1px solid rgba(6,182,212,0.3)`,
                padding: "4px 10px",
                borderRadius: "999px",
              }}
            >
              <Star size={11} style={{ color: C.accent }} />
              <span
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "11px",
                  color: C.accent,
                  fontWeight: 600,
                }}
              >
                Featured
              </span>
            </div>
          )}
          <div
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              background: status.bg,
              border: `1px solid ${status.border}`,
              padding: "4px 10px",
              borderRadius: "999px",
            }}
          >
            <span
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "11px",
                color: status.color,
                fontWeight: 600,
              }}
            >
              {project.status}
            </span>
          </div>
        </div>
      )}

      {/* Body */}
      <div
        style={{
          padding: "22px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "17px",
            fontWeight: 700,
            color: C.text,
            marginBottom: "10px",
            letterSpacing: "-0.3px",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: "13px",
            color: C.muted,
            lineHeight: 1.7,
            marginBottom: "18px",
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "7px",
            marginBottom: "18px",
          }}
        >
          {project.techStack.map((tech) => (
            <span
              key={tech}
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                color: C.accent,
                background: C.accentGlow,
                border: "1px solid rgba(6,182,212,0.18)",
                padding: "3px 9px",
                borderRadius: "999px",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "10px" }}>
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "'Roboto', sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                color: C.muted,
                textDecoration: "none",
                padding: "7px 14px",
                border: `1px solid ${C.border}`,
                borderRadius: "6px",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = C.accent;
                e.currentTarget.style.color = C.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = C.border;
                e.currentTarget.style.color = C.muted;
              }}
            >
              <Github size={13} /> GitHub
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "'Roboto', sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                color: "#080a0d",
                textDecoration: "none",
                padding: "7px 14px",
                background: C.accent,
                borderRadius: "6px",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#22d3ee")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = C.accent)
              }
            >
              <ExternalLink size={13} /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
