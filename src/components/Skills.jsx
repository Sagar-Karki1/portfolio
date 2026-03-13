import {
  Cloud,
  Server,
  Code,
  Database,
  Settings,
  Shield,
  Zap,
  Container,
  Monitor,
} from "lucide-react";
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

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: <Cloud size={22} />,
    skills: [
      { name: "AWS", level: 85 },
      { name: "Azure", level: 75 },
      { name: "Google Cloud", level: 70 },
      { name: "DigitalOcean", level: 80 },
    ],
  },
  {
    title: "DevOps Tools",
    icon: <Settings size={22} />,
    skills: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "Jenkins", level: 80 },
      { name: "GitLab CI/CD", level: 85 },
    ],
  },
  {
    title: "Infrastructure as Code",
    icon: <Server size={22} />,
    skills: [
      { name: "Terraform", level: 88 },
      { name: "Ansible", level: 82 },
      { name: "CloudFormation", level: 75 },
      { name: "Pulumi", level: 65 },
    ],
  },
  {
    title: "Programming Languages",
    icon: <Code size={22} />,
    skills: [
      { name: "Python", level: 90 },
      { name: "Bash", level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "Go", level: 75 },
    ],
  },
  {
    title: "Databases",
    icon: <Database size={22} />,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Redis", level: 82 },
    ],
  },
  {
    title: "Monitoring & Security",
    icon: <Shield size={22} />,
    skills: [
      { name: "Prometheus", level: 85 },
      { name: "Grafana", level: 80 },
      { name: "ELK Stack", level: 78 },
      { name: "Vault", level: 70 },
    ],
  },
];

const Skills = () => {
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
        <div style={{ marginBottom: "64px" }}>
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
            Skills
          </p>
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(36px, 5vw, 52px)",
              fontWeight: 800,
              color: C.text,
              letterSpacing: "-1.5px",
              marginBottom: "16px",
            }}
          >
            The toolkit.
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "16px",
              color: C.muted,
              maxWidth: "520px",
              lineHeight: 1.7,
            }}
          >
            Actively building across cloud, containers, IaC, and observability.
            Honestly leveling up every single day.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            marginBottom: "60px",
          }}
        >
          {skillCategories.map((cat, ci) => (
            <div
              key={ci}
              style={{
                padding: "28px",
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: "14px",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(245,158,11,0.25)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = C.border)
              }
            >
              {/* Category header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    padding: "8px",
                    background: C.accentGlow,
                    border: "1px solid rgba(245,158,11,0.2)",
                    borderRadius: "8px",
                    color: C.accent,
                    display: "flex",
                  }}
                >
                  {cat.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                    color: C.text,
                    margin: 0,
                  }}
                >
                  {cat.title}
                </h3>
              </div>

              {/* Skills */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                {cat.skills.map((skill, si) => (
                  <div key={si}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "8px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "#c8ccd8",
                        }}
                      >
                        {skill.name}
                      </span>
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "12px",
                          color: C.accent,
                        }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      style={{
                        height: "3px",
                        background: C.border,
                        borderRadius: "999px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${C.accent}, #fbbf24)`,
                          borderRadius: "999px",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {[
            {
              icon: <Zap size={20} />,
              title: "Fast Deployment",
              desc: "Automated CI/CD pipelines for rapid, reliable deployments",
            },
            {
              icon: <Container size={20} />,
              title: "Containerization",
              desc: "Expert in Docker and Kubernetes orchestration",
            },
            {
              icon: <Monitor size={20} />,
              title: "Monitoring",
              desc: "Comprehensive observability and performance tracking",
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              style={{
                padding: "24px",
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: "12px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "12px",
                  color: C.accent,
                }}
              >
                {icon}
              </div>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  color: C.text,
                  marginBottom: "8px",
                }}
              >
                {title}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  color: C.muted,
                  lineHeight: 1.6,
                }}
              >
                {desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
