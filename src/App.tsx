import {
  ArrowRight,
  Braces,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  MonitorCog,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import { motion } from "framer-motion";
import { type FormEvent, type MouseEvent, useEffect, useRef, useState } from "react";
import { FeatureCard } from "./components/FeatureCard";
import { ScrollRevealParagraph, WordsPullUp, WordsPullUpMultiStyle } from "./components/AnimatedText";
import { apps, featureCards, navItems, profile, skills, timeline } from "./data/portfolio";

const textPrimary = "#E1E0CC";
const ease = [0.16, 1, 0.3, 1] as const;

function scrollToSection(event: MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#")) return;

  const target = document.querySelector(href);
  if (!target) return;

  event.preventDefault();
  const top = target.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top, behavior: "auto" });
  window.history.pushState(null, "", href);
}

function Hero() {
  return (
    <section id="hero" className="h-screen bg-black p-4 md:p-6">
      <div className="relative h-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="assets/hero-cinematic.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/5 to-black/70" />
        <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
          <nav className="rounded-b-2xl bg-black px-4 py-2 md:rounded-b-3xl md:px-8">
            <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="whitespace-nowrap text-[10px] transition-colors sm:text-xs md:text-sm"
                    style={{ color: "rgba(225, 224, 204, 0.8)" }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.color = textPrimary;
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.color = "rgba(225, 224, 204, 0.8)";
                    }}
                    onClick={(event) => scrollToSection(event, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-6 sm:px-7 sm:pb-8 md:px-10 md:pb-10">
          <div className="grid items-end gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1
                className="max-w-full break-words text-[10.5vw] font-medium leading-[0.9] tracking-normal sm:text-[10vw] md:text-[8.8vw] lg:text-[7vw] xl:text-[6.3vw] 2xl:text-[5.8vw]"
                style={{ color: textPrimary }}
              >
                <WordsPullUp text={profile.handle} />
              </h1>
            </div>
            <div className="min-w-0 space-y-5 lg:col-span-4 lg:pb-5">
              <motion.p
                className="max-w-full break-words text-xs leading-[1.2] text-primary/70 sm:max-w-xl sm:text-sm md:text-base lg:max-w-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease }}
              >
                Computer Science graduate who solo-shipped 3 Android apps on Google Play, builds Java web systems,
                and uses AI-assisted engineering to move from idea to release with rare speed.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.7, ease }}
              >
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-black transition-all hover:gap-3 sm:text-base"
                >
                  Hire me
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </span>
                </a>
                <a
                  href={profile.cv}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-black/35 px-4 py-2.5 text-sm font-medium text-primary backdrop-blur transition-colors hover:border-primary/60 sm:text-base"
                >
                  <Download className="h-4 w-4" />
                  CV
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-black px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl rounded-[1.6rem] bg-[#101010] px-5 py-14 text-center sm:px-8 sm:py-20 md:rounded-[2rem] lg:px-16">
        <p className="text-[10px] uppercase tracking-normal text-primary sm:text-xs">Builder profile</p>
        <div
          className="mx-auto mt-6 max-w-4xl text-3xl leading-[0.95] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl"
          style={{ color: textPrimary }}
        >
          <WordsPullUpMultiStyle
            segments={[
              { text: "I am Kutraleeswaran," },
              { text: "a solo product builder.", className: "font-serif italic" },
              { text: "I turn Java, APIs, Android, and AI workflows into shipped software." },
            ]}
          />
        </div>
        <ScrollRevealParagraph
          text="I learned the hard parts by shipping real things: Play Store releases, Java web applications, REST APIs, database-backed modules, product copy, debugging loops, and release builds. At School for Graduate Studies, Zoho, I strengthened core Java, OOP, design patterns, SOLID principles, data structures, and professional debugging practice. The result is simple: I can build, test, fix, and publish without waiting for perfect conditions."
          className="mx-auto mt-12 max-w-3xl text-xs leading-relaxed text-[#DEDBC8] sm:text-sm md:text-base"
        />
        <div className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-[1.35rem] border border-primary/10 bg-black/45 p-3 text-left">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(222,219,200,0.12),transparent_28%),linear-gradient(135deg,rgba(222,219,200,0.06),transparent_42%)]" />
          <div className="relative grid gap-3 lg:grid-cols-2">
            {timeline.map((item, index) => {
              const Icon = index === 0 ? Braces : GraduationCap;

              return (
                <article key={item.title} className="group relative min-h-[220px] overflow-hidden rounded-[1.05rem] border border-primary/10 bg-[#141414] p-5 transition-colors hover:border-primary/30 sm:p-6">
                  <div className="absolute right-5 top-5 text-[11px] font-bold text-primary/25">{String(index + 1).padStart(2, "0")}</div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-black/45 text-primary">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <div>
                      <p className="text-[11px] uppercase tracking-normal text-primary/45">{item.marker}</p>
                      <p className="mt-1 text-xs text-primary/60">{item.date}</p>
                    </div>
                  </div>
                  <h3 className="mt-7 max-w-md text-2xl font-bold leading-[1.05] text-[#E1E0CC] sm:text-[1.7rem]">{item.title}</h3>
                  <p className="mt-2 font-serif text-xl italic leading-none text-primary/70 sm:text-2xl">{item.org}</p>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-400">{item.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function AppShowcase() {
  return (
    <div className="mt-10 grid gap-3 md:grid-cols-3">
      {apps.map((app, index) => (
        <motion.a
          key={app.name}
          href={app.href}
          target="_blank"
          rel="noreferrer"
          className="group rounded-[1.15rem] border border-primary/10 bg-[#151515] p-4 transition-colors hover:border-primary/40"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 * index, ease }}
        >
          <div className="flex items-center gap-3">
            <img src={app.icon} alt="" className="h-12 w-12 rounded-2xl object-cover" />
            <div>
              <h4 className="text-base font-normal text-[#E1E0CC]">{app.name}</h4>
              <p className="text-xs text-primary/45">{app.storeName}</p>
            </div>
            <ExternalLink className="ml-auto h-4 w-4 text-primary/60 transition-transform group-hover:translate-x-0.5" />
          </div>
          <p className="mt-4 text-sm leading-snug text-gray-400">{app.description}</p>
        </motion.a>
      ))}
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="bg-noise relative min-h-screen overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.15]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center text-xl font-normal leading-tight sm:text-2xl md:text-3xl lg:text-4xl">
          <WordsPullUpMultiStyle segments={[{ text: "Proof that ships, not just promises.", className: "text-[#E1E0CC]" }]} />
          <div className="mt-1">
            <WordsPullUpMultiStyle segments={[{ text: "Built with fundamentals. Accelerated by AI.", className: "text-gray-500" }]} />
          </div>
        </div>

        <AppShowcase />

        <div className="mt-10 grid items-stretch gap-3 sm:gap-2 md:grid-cols-2 md:gap-1 lg:grid-cols-4">
          <motion.article
            className="relative h-full min-h-[420px] overflow-hidden rounded-[1.35rem] bg-[#212121] p-5 sm:p-6 lg:min-h-[480px]"
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="assets/feature-canvas.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/70" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-xs text-primary/60">00</span>
              </div>
              <div>
                <p className="text-2xl leading-none text-[#E1E0CC] sm:text-3xl">Your builder signal.</p>
                <p className="mt-3 max-w-[14rem] text-sm leading-snug text-primary/65">
                  A portfolio shaped around shipping velocity, product taste, and engineering discipline.
                </p>
              </div>
            </div>
          </motion.article>
          {featureCards.map((card, index) => (
            <FeatureCard key={card.title} {...card} delay={(index + 1) * 0.15} />
          ))}
        </div>

        <div id="systems" className="mt-10 grid gap-3 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative overflow-hidden rounded-[1.35rem] border border-primary/10 bg-[#101010] p-5 sm:p-7">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(222,219,200,0.12),transparent_30%),linear-gradient(145deg,rgba(255,255,255,0.05),transparent_35%)]" />
            <div className="relative flex flex-col gap-8 lg:min-h-[380px]">
              <div className="flex items-start justify-between gap-4">
                <h3 className="max-w-md text-2xl font-normal leading-tight text-[#E1E0CC] sm:text-4xl">
                  Systems I can build from scratch.
                </h3>
                <span className="rounded-full border border-primary/15 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-normal text-primary/60">
                  Java lab
                </span>
              </div>

              <div className="grid gap-3">
                <article className="relative overflow-hidden rounded-2xl border border-primary/10 bg-black/35 p-4 sm:p-5">
                  <div className="flex items-start gap-4">
                    <Database className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={1.7} />
                    <div>
                      <p className="text-lg font-bold text-primary">Knowledge Nexus - Library Management System</p>
                      <p className="mt-2 text-sm leading-relaxed text-gray-400">
                        Java Servlets, JSP, JDBC, and MySQL web application with login, book management, strict JSON API communication, book CRUD, borrow/return operations, a designed MySQL schema, and PreparedStatements for safer database access.
                      </p>
                    </div>
                  </div>
                </article>
                <article className="relative overflow-hidden rounded-2xl border border-primary/10 bg-black/35 p-4 sm:p-5">
                  <div className="flex items-start gap-4">
                    <TerminalSquare className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={1.7} />
                    <div>
                      <p className="text-lg font-bold text-primary">ATM and Bus Booking Console Applications</p>
                      <p className="mt-2 text-sm leading-relaxed text-gray-400">
                        Java console projects built to show architecture and core logic: an ATM simulation using MVC with login, withdrawal, deposit, and balance checks, plus a Bus Booking system using MVP with seat booking, cancellation, and fare calculation.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[1.35rem] border border-primary/10 bg-[#101010] p-5 sm:p-7">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(222,219,200,0.09),transparent_38%),radial-gradient(circle_at_90%_10%,rgba(222,219,200,0.12),transparent_26%)]" />
            <div className="relative">
              <div className="flex items-start justify-between gap-5">
                <h3 className="max-w-xs text-2xl font-normal leading-tight text-[#E1E0CC] sm:text-4xl">Stack and strengths.</h3>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/15 bg-black/40 text-primary">
                  <MonitorCog className="h-5 w-5" strokeWidth={1.7} />
                </span>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
              {skills.map(({ label, icon: Icon }) => (
                <div key={label} className="group relative min-h-[86px] overflow-hidden rounded-2xl border border-primary/10 bg-black/35 p-3 transition-colors hover:border-primary/35">
                  <Icon className="h-4 w-4 text-primary" strokeWidth={1.8} />
                  <span className="absolute bottom-3 left-3 right-3 text-sm leading-tight text-gray-300">{label}</span>
                </div>
              ))}
              </div>
              <div className="mt-5 rounded-2xl border border-primary/10 bg-black/35 p-4">
                <p className="text-sm leading-relaxed text-gray-400">
                  The through-line is independent execution: design the flow, build the system, test the edge cases, and publish the release.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

const socialLinks = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    path: "M2.75 5.75A2.75 2.75 0 0 1 5.5 3h13A2.75 2.75 0 0 1 21.25 5.75v12.5A2.75 2.75 0 0 1 18.5 21h-13a2.75 2.75 0 0 1-2.75-2.75V5.75Zm2.13-.25 6.55 5.58c.33.28.81.28 1.14 0l6.55-5.58H4.88Zm14.87 2.02-5.98 5.1a2.75 2.75 0 0 1-3.54 0l-5.98-5.1v10.73c0 .69.56 1.25 1.25 1.25h13c.69 0 1.25-.56 1.25-1.25V7.52Z",
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.371 4.267 5.455v6.286ZM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z",
  },
  {
    label: "GitHub",
    href: profile.github,
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.387.6.113.793-.262.793-.583 0-.288-.012-1.243-.018-2.253-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.304-5.466-1.333-5.466-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 0 1 6.006 0c2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.805 5.624-5.476 5.922.43.37.818 1.102.818 2.222 0 1.606-.015 2.898-.015 3.293 0 .323.192.7.8.581C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12Z",
  },
];

const footerNavigation = [
  { label: "Profile", href: "#hero" },
  { label: "Experience", href: "#about" },
  { label: "Apps", href: "#features" },
  { label: "Systems", href: "#systems" },
  { label: "Email me", href: `mailto:${profile.email}` },
];

const footerLaunches = [
  ...apps.map((app) => ({ label: app.name, href: app.href })),
  { label: "GitHub", href: profile.github },
  { label: "Download CV", href: profile.cv },
];

function PortfolioFooter() {
  const [message, setMessage] = useState("");
  const watermarkSvgRef = useRef<SVGSVGElement | null>(null);
  const watermarkTextRef = useRef<SVGTextElement | null>(null);

  useEffect(() => {
    const fitWatermark = () => {
      const svg = watermarkSvgRef.current;
      const text = watermarkTextRef.current;
      if (!svg || !text) return;

      try {
        const bbox = text.getBBox();
        svg.setAttribute("viewBox", `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
      } catch {
        // The SVG is decorative, so failing to measure should not affect the page.
      }
    };

    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    fontsReady.then(fitWatermark);
    window.addEventListener("resize", fitWatermark);

    return () => {
      window.removeEventListener("resize", fitWatermark);
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = message.trim()
      ? `Hi Kutraleeswaran,%0D%0A%0D%0A${encodeURIComponent(message.trim())}`
      : "Hi Kutraleeswaran,%0D%0A%0D%0AI saw your portfolio and want to talk.";
    window.location.href = `mailto:${profile.email}?subject=Portfolio%20opportunity&body=${body}`;
  };

  return (
    <section id="contact" className="footer-section">
      <div className="footer-wrapper">
        <div className="footer-left">
          <video className="footer-left-video" autoPlay muted loop playsInline preload="auto">
            <source src="assets/footer-kinetic.mp4" type="video/mp4" />
          </video>

          <div className="footer-logo">
            <span className="footer-logo-mark">K</span>
            <span className="footer-logo-name">Kutraleeswaran</span>
          </div>

          <div className="footer-tagline-container">
            <p className="footer-tagline">
              Shipping Android apps, Java systems,
              <br />
              <span>and AI-assisted products.</span>
            </p>
          </div>

          <div className="footer-social-row">
            <span className="footer-social-label">Stay in touch!</span>
            <div className="footer-social-icons">
              {socialLinks.map((link) => (
                <a key={link.label} className="social-icon" href={link.href} target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"} aria-label={link.label} title={link.label}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d={link.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-lucky-graphic" aria-hidden="true">
            <div className="lucky-cube">
              <span className="lucky-cube-mark">K</span>
            </div>
            <div className="lucky-text-row">
              <svg className="lucky-arrow" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 20 C 6 14, 10 9, 18 5" />
                <path d="M18 5 L 12 5" />
                <path d="M18 5 L 18 11" />
              </svg>
              <span className="lucky-text">Ready to hire?</span>
            </div>
          </div>

          <div className="footer-right-top">
            <div className="footer-nav-cols">
              <div className="footer-col">
                <h3 className="footer-col-title">Navigate</h3>
                {footerNavigation.map((link) => (
                  <a key={link.label} href={link.href} onClick={(event) => scrollToSection(event, link.href)}>
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="footer-col">
                <h3 className="footer-col-title">Launches</h3>
                {footerLaunches.map((link) => (
                  <a key={link.label} href={link.href} target={link.href.startsWith("#") || link.href.startsWith("mailto:") ? undefined : "_blank"} rel={link.href.startsWith("#") || link.href.startsWith("mailto:") ? undefined : "noreferrer"}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">© 2026 Kutraleeswaran. Built in Chennai.</p>
            <div className="footer-cta-mini">
              <h4>
                Useful software ships fast.
                <br />
                <strong>Let&apos;s build the next one.</strong>
              </h4>
              <form className="footer-subscribe-row" onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Role, project, or idea"
                  aria-label="Role, project, or idea"
                />
                <button type="submit">Email me</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-watermark" aria-hidden="true">
        <svg ref={watermarkSvgRef} id="watermarkSvg" viewBox="62 95 876 175" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
          <text ref={watermarkTextRef} id="watermarkText" x="500" y="240" textAnchor="middle" fontSize="320">
            Kutraleeswaran
          </text>
        </svg>
      </div>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    if (!window.location.hash) return;

    window.requestAnimationFrame(() => {
      const target = document.querySelector(window.location.hash);
      if (!target) return;

      const top = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: "auto" });
    });
  }, []);

  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <About />
      <Features />
      <PortfolioFooter />
    </main>
  );
}
