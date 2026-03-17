import { Download, Briefcase, GraduationCap, Award } from "lucide-react";
import Navbar from "./Navbar";

const experience = [
  {
    role: "DevOps Engineer (Learning)",
    company: "100 Days of DevOps Challenge · KodeKloud",
    period: "Feb 2025 — Present",
    desc: "Solving real-world infrastructure tasks daily on live servers in the Stratos Datacenter. Documenting every challenge, command, and lesson learned.",
    tags: ["Linux", "SSH", "User Management", "Security", "sed"],
  },
  {
    role: "Cloud & Infrastructure Intern",
    company: "Your Company Here",
    period: "2024",
    desc: "Update this with your real experience — internship, freelance work, or any relevant role you have held.",
    tags: ["AWS", "Docker", "Terraform"],
  },
];

const education = [
  {
    degree: "Your Degree / Course",
    school: "Your University or Platform",
    period: "20XX — 20XX",
    desc: "Update with your actual education or certification program details.",
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
    name: "Add your certifications here",
    issuer: "Certification Body",
    year: "20XX",
  },
];

function Section({ icon, title, children }) {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-3 mb-7 pb-4 border-b border-[#151a22]">
        <span className="text-cyan-400">{icon}</span>
        <h2
          className="font-bold text-gray-100 text-lg m-0"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}

function TimelineItem({ title, subtitle, period, desc, tags }) {
  return (
    <div className="grid grid-cols-[16px_1fr] gap-5 mb-7 pb-7 border-b border-[#151a22] last:border-0 last:mb-0 last:pb-0">
      <div className="pt-1.5">
        <div className="w-2 h-2 rounded-full bg-cyan-400" />
      </div>
      <div>
        <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
          <h3
            className="font-bold text-gray-100 text-base m-0"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            {title}
          </h3>
          <span
            className="text-cyan-400 text-xs"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {period}
          </span>
        </div>
        <p
          className="text-slate-500 text-sm mb-3"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          {subtitle}
        </p>
        <p
          className="text-slate-400 text-sm leading-relaxed mb-4"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          {desc}
        </p>
        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-full uppercase tracking-wide"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <div className="bg-[#080a0d] min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto px-8 md:px-12 pt-28 pb-24">
        {/* Header */}
        <div className="flex items-start justify-between flex-wrap gap-6 mb-16">
          <div>
            <span
              className="text-[11px] font-bold text-cyan-400 uppercase tracking-[3px] mb-4 block"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Resume
            </span>
            <h1
              className="font-extrabold text-gray-100 tracking-tight leading-none mb-3"
              style={{
                fontSize: "clamp(36px, 5vw, 52px)",
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              Sagar Karki
            </h1>
            <p
              className="text-slate-400 text-base"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Cloud Engineer &amp; DevOps Associate
            </p>
          </div>
          <button
            onClick={() => alert("CV coming soon!")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-[#080a0d] font-bold text-sm rounded-lg hover:bg-cyan-400 transition-colors duration-200 self-start border-none cursor-pointer"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            <Download size={16} /> Download PDF
          </button>
        </div>

        <Section icon={<Briefcase size={18} />} title="Experience">
          {experience.map((e, i) => (
            <TimelineItem key={i} {...e} />
          ))}
        </Section>

        <Section icon={<GraduationCap size={18} />} title="Education">
          {education.map((e, i) => (
            <TimelineItem key={i} {...e} />
          ))}
        </Section>

        <Section icon={<Award size={18} />} title="Certifications">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="p-5 bg-[#0d1117] border border-[#151a22] rounded-xl hover:border-cyan-500/30 transition-colors"
              >
                <div
                  className="font-bold text-gray-100 text-sm mb-1.5"
                  style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                  {cert.name}
                </div>
                <div
                  className="text-slate-500 text-xs mb-3"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  {cert.issuer}
                </div>
                <div
                  className="text-cyan-400 text-xs"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
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
}
