import Hero from "./Hero";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "../data/blogData";

const C = {
  bg: "#080a0d",
  surface: "#0d1117",
  border: "#151a22",
  accent: "#06b6d4",
  accentGlow: "rgba(6,182,212,0.08)",
  text: "#e2e8f0",
  muted: "#64748b",
};

const Home = () => {
  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <Navbar />
      <Hero />

      {/* ── ABOUT ── */}
      <section
        id="about"
        style={{ padding: "100px 48px", borderTop: `1px solid ${C.border}` }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="about-grid"
        >
          <div>
            <p
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                color: C.accent,
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: "16px",
              }}
            >
              About Me
            </p>
            <h2
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "clamp(30px, 3.5vw, 44px)",
                fontWeight: 800,
                color: C.text,
                letterSpacing: "-1px",
                marginBottom: "24px",
                lineHeight: 1.15,
              }}
            >
              From curiosity
              <br />
              to commitment.
            </h2>
            <p
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "16px",
                color: C.muted,
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              I'm Sagar Karki — a Cloud & DevOps Engineer in the making. My
              journey started with a simple question: "how does the internet
              actually work?" That curiosity turned into a deep passion for
              Linux, containers, cloud infrastructure, and automation.
            </p>
            <p
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "16px",
                color: C.muted,
                lineHeight: 1.8,
              }}
            >
              I'm currently taking on the{" "}
              <span style={{ color: C.accent, fontWeight: 600 }}>
                100 Days of DevOps
              </span>{" "}
              challenge — solving real infrastructure problems daily on live
              servers. Every command I run, every mistake I make, every concept
              I learn gets documented here. The best engineers are built through
              relentless, deliberate practice.
            </p>
          </div>
          <div>
            {[
              ["Challenge", "100 Days of DevOps"],
              ["Current Focus", "Linux Security & Hardening"],
              ["Platform", "KodeKloud / Stratos Datacenter"],
              ["Goal", "Cloud-Native DevOps Engineer"],
              ["LinkedIn", "linkedin.com/in/sagar-karki"],
              ["GitHub", "github.com/Sagar-Karki1"],
            ].map(([label, value]) => (
              <div
                key={label}
                style={{
                  padding: "16px 22px",
                  border: `1px solid ${C.border}`,
                  borderRadius: "10px",
                  marginBottom: "10px",
                  background: C.surface,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(6,182,212,0.3)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = C.border)
                }
              >
                <span
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "13px",
                    color: C.muted,
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: C.text,
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <section
        style={{
          padding: "100px 48px",
          borderTop: `1px solid ${C.border}`,
          background: C.surface,
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "48px",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: C.accent,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: "12px",
                }}
              >
                Latest Articles
              </p>
              <h2
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "clamp(28px, 3vw, 40px)",
                  fontWeight: 800,
                  color: C.text,
                  letterSpacing: "-1px",
                }}
              >
                From the Blog.
              </h2>
            </div>
            <Link
              to="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "'Roboto', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: C.accent,
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.gap = "10px")}
              onMouseLeave={(e) => (e.currentTarget.style.gap = "6px")}
            >
              View all posts <ArrowRight size={16} />
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {blogPosts.slice(0, 3).map((post, idx) => (
              <Link
                to={`/blog/${post.id}`}
                key={post.id}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    padding: "28px",
                    background: C.bg,
                    border: `1px solid ${C.border}`,
                    borderRadius: "12px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(6,182,212,0.3)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = C.border;
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      fontSize: "36px",
                      fontWeight: 900,
                      color: "rgba(6,182,212,0.15)",
                      marginBottom: "16px",
                    }}
                  >
                    0{idx + 1}
                  </div>
                  <div
                    style={{
                      display: "inline-block",
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "11px",
                      fontWeight: 600,
                      color: C.accent,
                      background: C.accentGlow,
                      border: "1px solid rgba(6,182,212,0.2)",
                      padding: "3px 10px",
                      borderRadius: "999px",
                      marginBottom: "14px",
                    }}
                  >
                    {post.day}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      fontSize: "17px",
                      fontWeight: 700,
                      color: C.text,
                      marginBottom: "10px",
                      lineHeight: 1.3,
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "13px",
                      color: C.muted,
                      lineHeight: 1.7,
                    }}
                  >
                    {post.excerpt.slice(0, 100)}...
                  </p>
                  <div
                    style={{
                      marginTop: "16px",
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "12px",
                      color: "rgba(6,182,212,0.6)",
                    }}
                  >
                    {post.readTime}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          padding: "40px 48px",
          borderTop: `1px solid ${C.border}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <span
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: "14px",
            color: C.muted,
          }}
        >
          © 2025 Sagar Karki. Built with React.
        </span>
        <div style={{ display: "flex", gap: "24px" }}>
          <a
            href="https://www.linkedin.com/in/sagar-karki"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: "13px",
              color: C.muted,
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.target.style.color = C.accent)}
            onMouseLeave={(e) => (e.target.style.color = C.muted)}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Sagar-Karki1"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: "13px",
              color: C.muted,
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.target.style.color = C.accent)}
            onMouseLeave={(e) => (e.target.style.color = C.muted)}
          >
            GitHub
          </a>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  );
};

export default Home;
