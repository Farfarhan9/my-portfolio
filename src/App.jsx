import { useState, useEffect } from "react";
import {
  Github, Linkedin, Mail, MapPin, Menu, X, ExternalLink, GraduationCap,
  Code2, Target, Brain, Download, Send, CheckCircle2, Users, Briefcase, Trophy, Play, BookOpen, FileText
} from "lucide-react";

/* ------------------------------ DATA ------------------------------ */
const PROFILE = {
  name: "Muhammad Farhan bin Mad.Zin",
  initials: "MF",
  email: "mfkzin2442@gmail.com",
  location: "Rawang ,Selangor, Malaysia",
  github: "https://github.com/Farfarhan9",
  linkedin: "www.linkedin.com/in/muhdfarhanzin",
  resume: "./resume.pdf", 
};

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const HIGHLIGHTS = [
  { icon: GraduationCap, title: "Degree", text: "Bachelor of Computer Science (Software Engineering), University of Tun Hussein Onn Malaysia" },
  { icon: Trophy, title: "Academic Standing", text: "CGPA 3.82 / 4.00, Dean's List" },
  { icon: Brain, title: "Primary Focus", text: "Full-stack web, applied AI, distributed systems" },
  { icon: Target, title: "Problem Solving", text: "Software Engineering student focused on building strong programmatic problem-solving skills." },
];

const SKILLS = [
  { group: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML/CSS"] },
  { group: "Backend", items: ["Node.js", "Django", "Spring Boot", "Python", "Flask"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { group: "Tools & Platforms", items: ["Git", "Docker", "VMware", "GitHub Actions", "AWS", "Postman"] },
  { group: "Core CS Foundations", items: ["Data Structures", "Algorithms", "OOP", "Operating Systems", "Networking", "System Design"] },
];

const PROJECTS = [
  {
    title: "Dental Clinic Management System",
    description:
      "Full-stack dental clinic management system with role-based access control and patient appointment booking",
    tags: ["Java", "JSP", "MySQL", "Eclipse IDE"],
    github: "https://github.com/Farfarhan9/DentalClinicSystem",
    demo: "./demo-dental-clinic.mp4",
    report: "./dental-report.pdf",
  },
  {
    title: "Azura House Restaurant Automation System",
    description:
      "Restaurant automation platform with QR table ordering, admin sales analytics, and a dynamic inventory system that automatically updates stock via recipe links.",
    tags: ["Java", "JSP", "Gson (JSON)", "Eclipse IDE"],
    github: "https://github.com/Farfarhan9/AzuraHouseProject",
    demo: "./demo-azurahouse.mp4",
    report: "./AzuraHouse-report.pdf",
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "Scalable Tic-Tac-Toe game with a customizable 3x3 to 6x6 grid, local leaderboard storage via MySQL, and four difficulty levels including a Minimax bot.",
    tags: ["Java Swing", "MySQL", "Minimax AI", "Eclipse IDE"],
    github: "https://github.com/Farfarhan9/vp-tic-tac-toe",
    demo: "./demo-tic-tac-toe.mp4",
    report: "./tictactoe-report.pdf",
  },
];

const TIMELINE = [
  {
    icon: GraduationCap,
    org: "University Tun Hussein Onn Malaysia",
    course: "Bachelor of Computer Science (Software Engineering) with Honours",
    date: "29 September 2024 to Expected May 2028",
    text: "Relevant coursework: Data Structures & Algorithms, Operating Systems, Database Systems, Software Architecture, Computer Networks, Machine Learning, web development, Software Design and Development, and more.",
  },
  {
    icon: BookOpen,
    org: "Kolej Matrikulasi Selangor",
    course: "Science Stream, Module 3",
    date: "10 July 2023 to 29 May 2024",
    text: "Built internal dashboard features in React and Node.js, cut report load time by 40% with query optimisation, and shipped 12 merged pull requests.",
  },
];

/* --------------------------- SMALL PIECES --------------------------- */
const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="scroll-mt-20 px-4 py-20 sm:px-6">
    <div className="mx-auto max-w-6xl">
      <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-xl text-slate-400">{subtitle}</p>}
      <div className="mt-10">{children}</div>
    </div>
  </section>
);

const Badge = ({ children, tone = "indigo" }) => {
  const tones = {
    indigo: "bg-indigo-500/10 text-indigo-300 ring-indigo-500/20",
    emerald: "bg-emerald-400/10 text-emerald-300 ring-emerald-400/20",
  };
  return (
    <span className={`rounded-md px-2.5 py-1 font-mono text-xs ring-1 ring-inset ${tones[tone]}`}>
      {children}
    </span>
  );
};

/* ----------------------------- SECTIONS ----------------------------- */
function Header({ active }) {
  const [open, setOpen] = useState(false);
  const link = (id) =>
    `text-sm transition-colors ${active === id ? "text-emerald-400" : "text-slate-300 hover:text-white"}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6" aria-label="Main">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-emerald-400 font-mono text-sm font-bold text-slate-900">
            {PROFILE.initials}
          </span>
          <span className="font-semibold text-slate-100">{PROFILE.name}</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className={link(n.id)}>{n.label}</a>
            </li>
          ))}
          <li>
            <a
              href={PROFILE.resume}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-400"
            >
              <Download size={16} /> Resume
            </a>
          </li>
        </ul>

        <button
          className="rounded-lg p-2 text-slate-300 hover:bg-white/5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-900/95 px-4 pb-5 pt-3 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 ${link(n.id)} hover:bg-white/5`}
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={PROFILE.resume}
                className="flex items-center justify-center gap-2 rounded-lg bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white"
              >
                <Download size={16} /> Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const socials = [
    { icon: Github, href: PROFILE.github, label: "GitHub" },
    { icon: Linkedin, href: PROFILE.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${PROFILE.email}`, label: "Email" },
  ];
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-24 pt-36 sm:px-6 sm:pt-44">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Open to internships for 2027
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
            Software Engineering Student &amp; Full-Stack Developer
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            I build scalable web software and practical AI applications. I like turning messy
            requirements into clean, tested systems that people actually use.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-lg bg-indigo-500 px-6 py-3 font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400">
              View Projects
            </a>
            <a href="#contact" className="rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:border-emerald-400 hover:text-emerald-300">
              Get in Touch
            </a>
          </div>
          <div className="mt-8 flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-700 p-2.5 text-slate-400 transition hover:border-indigo-500 hover:text-indigo-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Code card in place of a photo */}
        {/* Hero Right Column: Profile Image */}
        <img
          src="./profile.png"
          alt={PROFILE.name}
          className="mx-auto w-full max-w-sm rounded-2xl shadow-xl"
        />
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4 leading-relaxed text-slate-400">
          <p>
           Software Engineering student focused on full-stack development. I enjoy the process of building clean web platforms, managing data efficiently, and creating straightforward, functional user interfaces.
          </p>
          <p>
            I'm looking for an internship or entry-level role where I can ship real features, learn
            from experienced engineers and contribute to a team that cares about code quality.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-slate-800 bg-slate-800/40 p-5 transition hover:border-indigo-500/50">
              <Icon className="text-emerald-400" size={22} />
              <h3 className="mt-3 font-semibold text-slate-100">{title}</h3>
              <p className="mt-1 text-sm text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Tech stack" subtitle="Tools I use regularly, grouped by where they fit in a project.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map(({ group, items }, i) => (
          <div key={group} className={`rounded-xl border border-slate-800 bg-slate-800/40 p-6 ${i === 4 ? "lg:col-span-1" : ""}`}>
            <h3 className="mb-4 flex items-center gap-2 font-semibold text-slate-100">
              <Code2 size={18} className="text-indigo-400" /> {group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <Badge key={s} tone={i % 2 ? "emerald" : "indigo"}>{s}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function VideoModal({ demo, onClose }) {
  if (!demo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
          <h3 className="font-semibold text-slate-100">{demo.title} — Video Demo</h3>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-slate-400 transition hover:bg-slate-800 hover:text-slate-200"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black">
          <video
            src={demo.url}
            controls
            autoPlay
            className="h-full w-full object-contain"
          >
            Your browser does not support video playback.
          </video>
        </div>
      </div>
    </div>
  );
}

// 3. MAIN PROJECTS COMPONENT
function Projects() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <Section id="projects" title="Featured projects" subtitle="A selection of things I've designed, built and deployed.">
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <article
            key={p.title}
            className="group rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 p-px transition duration-300 hover:-translate-y-1.5 hover:from-indigo-500 hover:to-emerald-400 hover:shadow-xl hover:shadow-indigo-500/10"
          >
            <div className="flex h-full flex-col rounded-2xl bg-slate-900 p-6">
              <h3 className="text-xl font-semibold text-slate-100">{p.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-slate-400">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => <Badge key={t}>{t}</Badge>)}
              </div>
              
              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <a 
                  href={p.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-indigo-300 transition"
                >
                  <Github size={16} /> Code
                </a>
                
                <button
                  type="button"
                  onClick={() => setActiveVideo({ title: p.title, url: p.demo })}
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-300 transition"
                >
                  <Play size={16} className="text-emerald-400" /> Watch Demo
                </button>

                {/* Report Button (renders only if p.report exists) */}
                {p.report && (
                  <a
                    href={p.report}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-300 transition"
                  >
                    <FileText size={16} className="text-amber-400" /> Report
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <VideoModal demo={activeVideo} onClose={() => setActiveVideo(null)} />
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" title="Education & experience">
      <ol className="relative ml-4 border-l border-slate-700">
        {TIMELINE.map(({ icon: Icon, org, course, date, text }) => (
          <li key={org} className="mb-10 ml-8 last:mb-0">
            <span className="absolute -left-4 grid h-8 w-8 place-items-center rounded-full bg-slate-900 ring-2 ring-indigo-500">
              <Icon size={16} className="text-emerald-400" />
            </span>
            <div className="rounded-xl border border-slate-800 bg-slate-800/40 p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-semibold text-slate-100">{org}</h3>
                <time className="font-mono text-xs text-slate-500">{date}</time>
              </div>
              <p className="text-sm text-indigo-300">{course}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    // Mock submission: replace with a real API call or a service like Formspree.
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  const field =
    "w-full rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-3 text-slate-100 placeholder-slate-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30";

  return (
    <Section id="contact" title="Get in touch" subtitle="Have an internship, project or question? Send me a message and I'll reply within two days.">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-5 text-slate-300">
          <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-3 hover:text-emerald-300">
            <Mail className="text-indigo-400" size={20} /> {PROFILE.email}
          </a>
          <p className="flex items-center gap-3">
            <MapPin className="text-indigo-400" size={20} /> {PROFILE.location}
          </p>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-emerald-300">
            <Github className="text-indigo-400" size={20} /> github.com/Farfarhan9
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-emerald-300">
            <Linkedin className="text-indigo-400" size={20} /> linkedin.com/in/muhdfarhanzin
          </a>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-800/40 p-6">
          {status === "sent" ? (
            <div className="flex flex-col items-center py-10 text-center" role="status">
              <CheckCircle2 size={44} className="text-emerald-400" />
              <h3 className="mt-4 text-xl font-semibold text-slate-100">Message sent</h3>
              <p className="mt-2 text-slate-400">Thanks for reaching out. I'll get back to you soon.</p>
              <button onClick={() => setStatus("idle")} className="mt-6 text-sm text-indigo-300 hover:text-indigo-200">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm text-slate-300">Name</label>
                  <input id="name" name="name" required value={form.name} onChange={onChange} placeholder="Jane Doe" className={field} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-slate-300">Email</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={onChange} placeholder="jane@company.com" className={field} />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-slate-300">Message</label>
                <textarea id="message" name="message" rows={5} required value={form.message} onChange={onChange} placeholder="Tell me about the role or project..." className={field} />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-6 py-3 font-medium text-white transition hover:bg-indigo-400 disabled:opacity-60"
              >
                <Send size={16} /> {status === "sending" ? "Sending..." : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 px-4 py-8 text-center text-sm text-slate-500">
      <p>© {new Date().getFullYear()} {PROFILE.name}. Built with React &amp; Tailwind CSS.</p>
    </footer>
  );
}

/* ------------------------------- APP -------------------------------- */
export default function App() {
  const [active, setActive] = useState("");

  // Smooth scrolling (skipped for users who prefer reduced motion)
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.style.scrollBehavior = reduce ? "auto" : "smooth";
  }, []);

  // Active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-100 antialiased selection:bg-indigo-500/40">
      <Header active={active} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}