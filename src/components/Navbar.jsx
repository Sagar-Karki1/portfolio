import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Resume", href: "/resume" },
  ];

  const isActive = (href) =>
    location.pathname === href ||
    (href === "/#about" && location.pathname === "/");

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "0 40px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(10,11,15,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #1a1d27" : "none",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ textDecoration: "none" }}>
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "20px",
            color: "#e8eaf0",
            letterSpacing: "-0.5px",
          }}
        >
          SK<span style={{ color: "#f59e0b" }}>.</span>
        </span>
      </Link>

      {/* Desktop Links */}
      <div
        style={{ display: "flex", alignItems: "center", gap: "32px" }}
        className="hidden-mobile"
      >
        {links.map(({ label, href }) => (
          <Link
            key={label}
            to={href}
            style={{
              textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              color: isActive(href) ? "#f59e0b" : "#6b7590",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              borderBottom: isActive(href)
                ? "1px solid #f59e0b"
                : "1px solid transparent",
              paddingBottom: "2px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#e8eaf0")}
            onMouseLeave={(e) =>
              (e.target.style.color = isActive(href) ? "#f59e0b" : "#6b7590")
            }
          >
            {label}
          </Link>
        ))}
        <a
          href="mailto:sagarkarki@email.com"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: "13px",
            padding: "8px 20px",
            background: "#f59e0b",
            color: "#0a0b0f",
            borderRadius: "6px",
            textDecoration: "none",
            letterSpacing: "0.3px",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#fbbf24")}
          onMouseLeave={(e) => (e.target.style.background = "#f59e0b")}
        >
          Contact
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#e8eaf0",
          display: "none",
        }}
        className="show-mobile"
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "64px",
            left: 0,
            right: 0,
            background: "#0d0f14",
            borderBottom: "1px solid #1a1d27",
            padding: "20px 40px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {links.map(({ label, href }) => (
            <Link
              key={label}
              to={href}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                color: "#e8eaf0",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; background: #0a0b0f; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
