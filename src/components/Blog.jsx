import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { blogPosts } from "../data/blogData";

const C = {
  bg: "#0a0b0f",
  surface: "#0d0f14",
  border: "#1a1d27",
  accent: "#f59e0b",
  accentGlow: "rgba(245,158,11,0.1)",
  text: "#e8eaf0",
  muted: "#6b7590",
};

const Blog = () => {
  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <Navbar />

      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "120px 32px 80px",
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
            Blog
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
                lineHeight: 1.1,
              }}
            >
              100 Days of
              <br />
              <span style={{ color: C.accent }}>DevOps.</span>
            </h1>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                color: C.muted,
                background: C.surface,
                border: `1px solid ${C.border}`,
                padding: "6px 14px",
                borderRadius: "999px",
              }}
            >
              {blogPosts.length} articles published
            </span>
          </div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "16px",
              color: C.muted,
              marginTop: "20px",
              lineHeight: 1.7,
              maxWidth: "560px",
            }}
          >
            A daily log of real DevOps challenges — solved on live servers,
            documented with every command, concept, and lesson learned.
          </p>
        </div>

        {/* Posts */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {blogPosts.map((post, idx) => (
            <Link
              to={`/blog/${post.id}`}
              key={post.id}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  padding: "28px 32px",
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: "14px",
                  display: "grid",
                  gridTemplateColumns: "72px 1fr",
                  gap: "24px",
                  alignItems: "start",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(245,158,11,0.3)";
                  e.currentTarget.style.transform = "translateX(6px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = C.border;
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                {/* Day number */}
                <div style={{ textAlign: "center", paddingTop: "4px" }}>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "30px",
                      fontWeight: 800,
                      color: C.accent,
                      lineHeight: 1,
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "10px",
                      color: C.muted,
                      marginTop: "4px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Day
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h2
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "19px",
                      fontWeight: 700,
                      color: C.text,
                      marginBottom: "8px",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    {post.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "14px",
                      color: C.muted,
                      lineHeight: 1.7,
                      marginBottom: "16px",
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "11px",
                          fontWeight: 500,
                          color: C.accent,
                          background: C.accentGlow,
                          border: "1px solid rgba(245,158,11,0.2)",
                          padding: "3px 10px",
                          borderRadius: "999px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                    <span
                      style={{
                        marginLeft: "auto",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "12px",
                        color: "rgba(107,117,144,0.6)",
                      }}
                    >
                      {post.date} · {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* Coming soon */}
          <div
            style={{
              padding: "24px 32px",
              border: `1px dashed ${C.border}`,
              borderRadius: "14px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                color: "rgba(107,117,144,0.5)",
                margin: 0,
              }}
            >
              Day {blogPosts.length + 1}+ coming soon —{" "}
              <span style={{ color: C.accent }}>the journey continues</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
