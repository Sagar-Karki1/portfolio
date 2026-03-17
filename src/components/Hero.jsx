import { Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile.png";

const C = {
  bg: "#080a0d",
  surface: "#0d1117",
  border: "#151a22",
  accent: "#06b6d4",
  text: "#e2e8f0",
  muted: "#64748b",
};

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: C.bg,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Grid bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(${C.border} 1px, transparent 1px), linear-gradient(90deg, ${C.border} 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      {/* Cyan glow */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "8%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(14,165,233,0.05) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "120px 48px 80px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
          position: "relative",
        }}
        className="hero-grid"
      >
        {/* Left */}
        <div>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(6,182,212,0.08)",
              border: "1px solid rgba(6,182,212,0.22)",
              borderRadius: "999px",
              padding: "6px 16px",
              marginBottom: "32px",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: C.accent,
                display: "inline-block",
                animation: "pulse 2s infinite",
              }}
            />
            <span
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "12px",
                color: C.accent,
                fontWeight: 600,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Available for opportunities
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "clamp(42px, 5.5vw, 70px)",
              fontWeight: 900,
              color: C.text,
              lineHeight: 1.08,
              letterSpacing: "-2px",
              marginBottom: "24px",
            }}
          >
            Cloud Engineer
            <br />
            <span style={{ color: C.accent }}>&</span> DevOps
            <br />
            <span style={{ color: C.muted, fontWeight: 700 }}>Associate.</span>
          </h1>

          <p
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: "17px",
              color: C.muted,
              lineHeight: 1.75,
              marginBottom: "40px",
              maxWidth: "460px",
            }}
          >
            Building resilient cloud infrastructure and automating everything
            worth automating. Currently on a{" "}
            <span style={{ color: C.accent, fontWeight: 600 }}>
              100 Days of DevOps
            </span>{" "}
            challenge — one day, one skill, one step closer.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a
              href="/resume"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                padding: "13px 26px",
                background: C.accent,
                color: "#080a0d",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#22d3ee")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = C.accent)
              }
            >
              <Download size={17} /> Download CV
            </a>
            <Link
              to="/projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                padding: "13px 26px",
                background: "transparent",
                color: C.text,
                border: `1px solid ${C.border}`,
                borderRadius: "8px",
                cursor: "pointer",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = C.accent;
                e.currentTarget.style.color = C.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = C.border;
                e.currentTarget.style.color = C.text;
              }}
            >
              View Projects <ArrowRight size={17} />
            </Link>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "32px",
              marginTop: "56px",
              paddingTop: "40px",
              borderTop: `1px solid ${C.border}`,
            }}
          >
            {[
              ["100", "Days Challenge"],
              ["3+", "Servers Hardened"],
              ["6+", "Tools Learned"],
            ].map(([num, label]) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: "28px",
                    fontWeight: 800,
                    color: C.accent,
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "12px",
                    color: C.muted,
                    marginTop: "2px",
                    textTransform: "uppercase",
                    letterSpacing: "0.8px",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Profile Image */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              inset: "-2px",
              borderRadius: "20px",
              background: `linear-gradient(135deg, rgba(6,182,212,0.25), transparent 60%)`,
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "relative",
              borderRadius: "18px",
              overflow: "hidden",
              border: `1px solid ${C.border}`,
              zIndex: 1,
            }}
          >
            <img
              src={profileImage}
              alt="Sagar Karki"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                display: "block",
                filter: "brightness(0.92)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                background: "rgba(8,10,13,0.9)",
                backdropFilter: "blur(12px)",
                border: `1px solid ${C.border}`,
                padding: "10px 18px",
                borderRadius: "999px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#22c55e",
                    animation: "pulse 2s infinite",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: C.text,
                  }}
                >
                  Available for hire
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; padding: 100px 24px 60px !important; }
        }
      `}</style>
    </section>
  );
}
