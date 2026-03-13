import { Download, Briefcase, GraduationCap, Award } from "lucide-react";
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

const experience = [
  {
    role: "DevOps Engineer (Learning)",
    company: "100 Days of DevOps Challenge",
    period: "Feb 2025 — Present",
    desc: "Solving real-world infrastructure tasks daily on live servers in the KodeKloud Stratos Datacenter. Documenting every challenge, command, and lesson.",
    tags: ["Linux", "SSH", "User Management", "Security"],
  },
  {
    role: "Cloud & Infrastructure Intern",
    company: "Your Company Here",
    period: "2024",
    desc: "Update this with your real experience. Add your internship, freelance work, or any relevant role you have held.",
    tags: ["AWS", "Docker", "Terraform"],
  },
];

const education = [
  {
    degree: "Your Degree",
    school: "Your University",
    period: "20XX — 20XX",
    desc: "Update with your actual education details.",
  },
];

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
  },
  { name: "Docker Certified Associate", issuer: "Docker Inc.", year: "2024" },
  {
    name: "Add your certifications",
    issuer: "Certification Body",
    year: "20XX",
  },
];

const Resume = () => {
  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <Navbar />
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "120px 40px 100px",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "64px",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
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
              Resume
            </p>
            <h1
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(36px, 5vw, 50px)",
                fontWeight: 800,
                color: C.text,
                letterSpacing: "-1.5px",
                lineHeight: 1.1,
                marginBottom: "12px",
              }}
            >
              Sagar Karki
            </h1>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "16px",
                color: C.muted,
              }}
            >
              Cloud Engineer & DevOps Associate
            </p>
          </div>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              padding: "13px 24px",
              background: C.accent,
              color: "#0a0b0f",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "background 0.2s",
              alignSelf: "flex-start",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#fbbf24")}
            onMouseLeave={(e) => (e.currentTarget.style.background = C.accent)}
          >
            <Download size={16} /> Download PDF
          </a>
        </div>

        {/* Experience */}
        <Section icon={<Briefcase size={18} />} title="Experience">
          {experience.map((e, i) => (
            <TimelineItem
              key={i}
              title={e.role}
              subtitle={e.company}
              period={e.period}
              desc={e.desc}
              tags={e.tags}
            />
          ))}
        </Section>

        {/* Education */}
        <Section icon={<GraduationCap size={18} />} title="Education">
          {education.map((e, i) => (
            <TimelineItem
              key={i}
              title={e.degree}
              subtitle={e.school}
              period={e.period}
              desc={e.desc}
            />
          ))}
        </Section>

        {/* Certifications */}
        <Section icon={<Award size={18} />} title="Certifications">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "14px",
            }}
          >
            {certifications.map((cert, i) => (
              <div
                key={i}
                style={{
                  padding: "18px 20px",
                  background: C.bg,
                  border: `1px solid ${C.border}`,
                  borderRadius: "10px",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(245,158,11,0.3)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = C.border)
                }
              >
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: C.text,
                    marginBottom: "6px",
                  }}
                >
                  {cert.name}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "12px",
                    color: C.muted,
                  }}
                >
                  {cert.issuer}
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "11px",
                    color: C.accent,
                    marginTop: "8px",
                  }}
                >
                  {cert.year}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
};

const Section = ({ icon, title, children }) => (
  <div style={{ marginBottom: "56px" }}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "28px",
        paddingBottom: "16px",
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      <span style={{ color: C.accent }}>{icon}</span>
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "20px",
          fontWeight: 700,
          color: C.text,
          margin: 0,
        }}
      >
        {title}
      </h2>
    </div>
    {children}
  </div>
);

const TimelineItem = ({ title, subtitle, period, desc, tags }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "20px 1fr",
      gap: "16px",
      marginBottom: "28px",
      paddingBottom: "28px",
      borderBottom: `1px solid ${C.border}`,
    }}
  >
    <div style={{ paddingTop: "6px" }}>
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: C.accent,
        }}
      />
    </div>
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "4px",
        }}
      >
        <h3
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "17px",
            fontWeight: 700,
            color: C.text,
            margin: 0,
          }}
        >
          {title}
        </h3>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "12px",
            color: C.accent,
          }}
        >
          {period}
        </span>
      </div>
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "13px",
          color: C.muted,
          marginBottom: "10px",
        }}
      >
        {subtitle}
      </div>
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "14px",
          color: "#8892a8",
          lineHeight: 1.7,
          marginBottom: tags ? "14px" : 0,
        }}
      >
        {desc}
      </p>
      {tags && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                color: C.accent,
                background: C.accentGlow,
                border: "1px solid rgba(245,158,11,0.18)",
                padding: "3px 9px",
                borderRadius: "999px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default Resume;
