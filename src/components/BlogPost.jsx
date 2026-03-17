import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";
import { blogPosts } from "../data/blogData";
import { ArrowLeft } from "lucide-react";

const C = {
  bg: "#080a0d",
  surface: "#0d1117",
  border: "#151a22",
  accent: "#06b6d4",
  accentGlow: "rgba(6,182,212,0.08)",
  text: "#e2e8f0",
  muted: "#64748b",
  code: "#0a0f1a",
};

// Simple markdown renderer
function renderMarkdown(md) {
  const lines = md.trim().split("\n");
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "22px",
            fontWeight: 700,
            color: C.accent,
            margin: "40px 0 14px",
            letterSpacing: "-0.3px",
          }}
        >
          {line.slice(3)}
        </h2>,
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p
          key={i}
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 700,
            color: C.text,
            fontSize: "15px",
            margin: "24px 0 6px",
          }}
        >
          {line.slice(2, -2)}
        </p>,
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <div
          key={i}
          style={{
            display: "flex",
            gap: "10px",
            margin: "6px 0",
            fontFamily: "'Roboto', sans-serif",
            fontSize: "15px",
            color: "#94a3b8",
            lineHeight: 1.7,
          }}
        >
          <span style={{ color: C.accent, flexShrink: 0 }}>•</span>
          <span>{line.slice(2)}</span>
        </div>,
      );
    } else if (line.startsWith("```")) {
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <div
          key={i}
          style={{
            background: C.code,
            border: `1px solid ${C.border}`,
            borderRadius: "10px",
            overflow: "hidden",
            margin: "20px 0",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "6px",
              padding: "10px 16px",
              background: "#0d1520",
              borderBottom: `1px solid ${C.border}`,
            }}
          >
            {["#ff5f57", "#febc2e", "#28c840"].map((c, ci) => (
              <span
                key={ci}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: c,
                  display: "inline-block",
                }}
              />
            ))}
          </div>
          <pre
            style={{
              padding: "18px 22px",
              margin: 0,
              overflowX: "auto",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "13px",
              lineHeight: 1.85,
            }}
          >
            {codeLines.map((cl, ci) => (
              <div
                key={ci}
                style={{
                  color: cl.trim().startsWith("#")
                    ? "#475569"
                    : cl.startsWith("sudo") ||
                        cl.startsWith("ssh") ||
                        cl.startsWith("grep") ||
                        cl.startsWith("systemctl")
                      ? "#67e8f9"
                      : cl.includes("no") && cl.includes("PermitRoot")
                        ? "#86efac"
                        : cl.includes("yes") && cl.includes("PermitRoot")
                          ? "#fca5a5"
                          : "#94a3b8",
                }}
              >
                {cl || " "}
              </div>
            ))}
          </pre>
        </div>,
      );
    } else if (line.trim() === "") {
      // skip blank
    } else {
      // inline formatting
      const parts = line.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g);
      elements.push(
        <p
          key={i}
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: "16px",
            lineHeight: 1.85,
            color: "#94a3b8",
            margin: "12px 0",
          }}
        >
          {parts.map((part, pi) => {
            if (part.startsWith("`") && part.endsWith("`"))
              return (
                <code
                  key={pi}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "13.5px",
                    background: "#111827",
                    color: "#06b6d4",
                    padding: "2px 7px",
                    borderRadius: "4px",
                  }}
                >
                  {part.slice(1, -1)}
                </code>
              );
            if (part.startsWith("**") && part.endsWith("**"))
              return (
                <strong key={pi} style={{ color: C.text, fontWeight: 600 }}>
                  {part.slice(2, -2)}
                </strong>
              );
            if (part.startsWith("*") && part.endsWith("*"))
              return (
                <em key={pi} style={{ color: "#7dd3fc" }}>
                  {part.slice(1, -1)}
                </em>
              );
            return part;
          })}
        </p>,
      );
    }
    i++;
  }
  return elements;
}

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div style={{ background: C.bg, minHeight: "100vh" }}>
        <Navbar />
        <div style={{ textAlign: "center", padding: "200px 32px" }}>
          <h2
            style={{
              fontFamily: "'Raleway', sans-serif",
              color: C.text,
              fontSize: "32px",
            }}
          >
            Post not found.
          </h2>
          <Link to="/blog" style={{ color: C.accent }}>
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <Navbar />
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "120px 32px 100px",
        }}
      >
        {/* Back */}
        <Link
          to="/blog"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontFamily: "'Roboto', sans-serif",
            fontSize: "13px",
            color: C.muted,
            textDecoration: "none",
            marginBottom: "40px",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = C.accent)}
          onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
        >
          <ArrowLeft size={15} /> Back to Blog
        </Link>

        {/* Day badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: C.accentGlow,
            border: "1px solid rgba(6,182,212,0.22)",
            borderRadius: "999px",
            padding: "5px 14px",
            marginBottom: "22px",
          }}
        >
          <span
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: "11px",
              color: C.accent,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            {post.day}
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "clamp(28px, 4.5vw, 44px)",
            fontWeight: 800,
            color: C.text,
            letterSpacing: "-1px",
            lineHeight: 1.15,
            marginBottom: "22px",
          }}
        >
          {post.title}
        </h1>

        {/* Meta */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            paddingBottom: "28px",
            borderBottom: `1px solid ${C.border}`,
            marginBottom: "44px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${C.accent}, #0891b2)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 800,
                fontSize: "15px",
                color: "#080a0d",
              }}
            >
              S
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  color: C.text,
                }}
              >
                Sagar Karki
              </div>
              <div
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "12px",
                  color: C.muted,
                }}
              >
                {post.date} · {post.readTime}
              </div>
            </div>
          </div>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            {post.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "11px",
                  color: C.accent,
                  background: C.accentGlow,
                  border: "1px solid rgba(6,182,212,0.2)",
                  padding: "3px 10px",
                  borderRadius: "999px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div>{renderMarkdown(post.content)}</div>

        {/* Navigation between posts */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginTop: "72px",
            paddingTop: "40px",
            borderTop: `1px solid ${C.border}`,
          }}
        >
          {post.id > 1 && (
            <Link
              to={`/blog/${post.id - 1}`}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  padding: "18px 22px",
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: "10px",
                  transition: "border-color 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(6,182,212,0.3)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = C.border)
                }
              >
                <div
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "11px",
                    color: C.muted,
                    marginBottom: "6px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  ← Previous
                </div>
                <div
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "14px",
                    color: C.text,
                    fontWeight: 600,
                  }}
                >
                  {blogPosts[post.id - 2]?.title}
                </div>
              </div>
            </Link>
          )}
          {post.id < blogPosts.length && (
            <Link
              to={`/blog/${post.id + 1}`}
              style={{
                textDecoration: "none",
                gridColumn: post.id === 1 ? "2" : "auto",
              }}
            >
              <div
                style={{
                  padding: "18px 22px",
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: "10px",
                  transition: "border-color 0.2s",
                  cursor: "pointer",
                  textAlign: "right",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(6,182,212,0.3)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = C.border)
                }
              >
                <div
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "11px",
                    color: C.muted,
                    marginBottom: "6px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Next →
                </div>
                <div
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "14px",
                    color: C.text,
                    fontWeight: 600,
                  }}
                >
                  {blogPosts[post.id]?.title}
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
