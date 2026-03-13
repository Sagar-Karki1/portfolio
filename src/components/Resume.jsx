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
      <div className="flex items-center gap-3 mb-7 pb-4 border-b border-[#1a1d27]">
        <span className="text-amber-500">{icon}</span>
        <h2 className="font-sans font-bold text-gray-100 text-lg m-0">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}

function TimelineItem({ title, subtitle, period, desc, tags }) {
  return (
    <div className="grid grid-cols-[16px_1fr] gap-5 mb-7 pb-7 border-b border-[#1a1d27] last:border-0 last:mb-0 last:pb-0">
      <div className="pt-1.5">
        <div className="w-2 h-2 rounded-full bg-amber-500" />
      </div>
      <div>
        <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
          <h3 className="font-sans font-bold text-gray-100 text-base m-0">
            {title}
          </h3>
          <span className="font-mono text-amber-500 text-xs">{period}</span>
        </div>
        <p className="font-sans text-slate-500 text-sm mb-3">{subtitle}</p>
        <p className="font-sans text-slate-400 text-sm leading-relaxed mb-4">
          {desc}
        </p>
        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-sans text-[10px] font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full uppercase tracking-wide"
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
    <div className="bg-[#0a0b0f] min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto px-8 md:px-12 pt-28 pb-24">
        {/* Header */}
        <div className="flex items-start justify-between flex-wrap gap-6 mb-16">
          <div>
            <span className="font-sans text-[11px] font-bold text-amber-500 uppercase tracking-[3px] mb-4 block">
              Resume
            </span>
            <h1
              className="font-sans font-extrabold text-gray-100 tracking-tight leading-none mb-3"
              style={{ fontSize: "clamp(36px, 5vw, 52px)" }}
            >
              Sagar Karki
            </h1>
            <p className="font-sans text-slate-400 text-base">
              Cloud Engineer &amp; DevOps Associate
            </p>
          </div>
          <button
            onClick={() => alert("CV coming soon!")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-[#0a0b0f] font-sans font-bold text-sm rounded-lg hover:bg-amber-400 transition-colors duration-200 self-start border-none cursor-pointer"
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
                className="p-5 bg-[#0d0f14] border border-[#1a1d27] rounded-xl hover:border-amber-500/30 transition-colors"
              >
                <div className="font-sans font-bold text-gray-100 text-sm mb-1.5">
                  {cert.name}
                </div>
                <div className="font-sans text-slate-500 text-xs mb-3">
                  {cert.issuer}
                </div>
                <div className="font-mono text-amber-500 text-xs">
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
