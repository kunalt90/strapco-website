import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Menu,
  X,
  ShieldCheck,
  Layers,
  ChevronRight,
  Command,
  ExternalLink
} from "lucide-react";
import { STRAPCO_S_LOGO, STRAPCO_FULL_LOGO, SERVICES, CASE_STUDIES } from "./constants";

type Page = "home" | "capabilities" | "case-studies" | "frameworks" | "strategy" | "contact";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navItems: Array<{ id: Page; label: string }> = [
    { id: "home", label: "Overview" },
    { id: "capabilities", label: "Capabilities" },
    { id: "case-studies", label: "Case Studies" },
    { id: "frameworks", label: "Frameworks" },
    { id: "strategy", label: "Strategy" }
  ];

  const Navigation = () => (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex justify-between items-center">
        <button
          onClick={() => setCurrentPage("home")}
          className="flex items-center transition-transform hover:scale-105 active:scale-95"
        >
          {STRAPCO_S_LOGO}
        </button>

        <div className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative group ${
                currentPage === item.id ? "text-brand" : "text-slate-500 hover:text-white"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-[1px] bg-brand transition-all duration-300 ${
                  currentPage === item.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </button>
          ))}

          <button
            onClick={() => setCurrentPage("contact")}
            className="px-6 py-2 border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-white hover:text-navy-950 transition-all"
          >
            Inquiry
          </button>
        </div>

        <button className="lg:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-navy-950 z-40 p-10 flex flex-col pt-32 space-y-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id);
                setIsMenuOpen(false);
              }}
              className="text-left text-3xl font-black uppercase tracking-tighter text-white"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              setCurrentPage("contact");
              setIsMenuOpen(false);
            }}
            className="w-full py-5 border border-brand text-brand text-xs font-bold uppercase tracking-[0.3em]"
          >
            Start a Project
          </button>
        </div>
      )}
    </nav>
  );

  const HomeCaseStudies = () => {
    const featured = CASE_STUDIES.slice(0, 3);

    return (
      <section className="py-28 bg-slate-850 border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="mb-12 border border-white/10 overflow-hidden bg-white/5">
            <img
              src="/images/case-studies.jpg"
              alt="Case studies"
              className="w-full h-[200px] md:h-[260px] object-cover opacity-90"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-baseline mb-14 gap-10">
            <div>
              <div className="flex items-center gap-4 text-brand mb-5">
                <span className="text-[10px] font-black uppercase tracking-[0.6em] border-b border-brand pb-1">
                  Delivery Evidence
                </span>
                <div className="h-px flex-grow bg-white/5 max-w-[100px]"></div>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-[-0.03em]">
                Case studies (anonymised).
              </h2>
            </div>

            <div className="text-slate-200/80 text-sm font-medium max-w-xl leading-relaxed">
              Clients are intentionally anonymised. These examples focus on delivery approach, technology and
              measurable outcomes in regulated environments.
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {featured.map((cs) => (
              <div key={cs.id} className="border border-white/10 bg-white/5 p-10 flex flex-col">
                <div className="flex items-start justify-between gap-6">
                  <div className="text-brand text-[10px] font-black uppercase tracking-[0.5em]">
                    {cs.sector}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-200/70">
                    {cs.classification}
                  </div>
                </div>

                <p className="mt-6 text-slate-100/85 text-sm font-medium leading-relaxed flex-grow">
                  {cs.summary}
                </p>

                <div className="mt-8">
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80 mb-4">
                    Outcomes
                  </div>
                  <div className="space-y-2">
                    {cs.outcomes.slice(0, 3).map((o, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-[12px] font-medium text-slate-100/80 leading-relaxed"
                      >
                        <div className="mt-2 w-1 h-1 bg-brand flex-shrink-0"></div>
                        <span>{o}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => setCurrentPage("case-studies")}
                    className="text-[10px] font-black uppercase tracking-[0.35em] text-white/75 hover:text-white transition-colors inline-flex items-center gap-3"
                  >
                    View full case studies <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
            <p className="text-slate-100/70 text-sm font-medium max-w-2xl leading-relaxed">
              Want case studies tailored to your domain? Strapco can share a short engagement outline and
              relevant delivery artefacts.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setCurrentPage("case-studies")}
                className="px-8 py-4 bg-brand text-white font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-navy-950 transition-all inline-flex items-center gap-3"
              >
                Browse all <ExternalLink size={14} />
              </button>
              <button
                onClick={() => setCurrentPage("contact")}
                className="px-8 py-4 border border-white/10 text-[10px] font-black uppercase tracking-[0.35em] hover:bg-white hover:text-navy-950 transition-all"
              >
                Discuss
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const HomePage = () => (
    <div>
      {/* HERO: lighter navy + controlled layout */}
      <section className="relative pt-32 pb-20 zest-grid bg-navy-950">
        {/* subtle lightening overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/5"></div>

        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="flex items-center gap-4 text-brand mb-10">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] border-b border-brand pb-1">
              Trusted delivery for regulated environments
            </span>
            <div className="h-px flex-grow bg-white/5 max-w-[140px]"></div>
          </div>

          {/* IMPORTANT: minmax columns so nothing overlaps */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-12 items-center">
            {/* LEFT */}
            <div className="min-w-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.95] tracking-[-0.03em] text-white">
                Assured delivery
                <br />
                <span className="text-slate-300">for</span>{" "}
                <span className="text-brand">regulated</span>
                <br />
                environments.
              </h1>

              <p className="mt-8 text-base sm:text-lg text-slate-200/80 leading-relaxed font-medium max-w-xl">
                Strapco provides senior delivery, data and technology consulting to highly regulated
                organisations across the UK public sector. We translate policy, legal and investigative
                requirements into operational systems that are secure, compliant and deliverable at scale.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-6 sm:items-center">
                <button
                  onClick={() => setCurrentPage("case-studies")}
                  className="px-10 py-5 bg-brand text-white font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-navy-950 transition-all inline-flex items-center justify-center gap-6 shadow-[0_0_30px_rgba(37,99,235,0.22)]"
                >
                  View case studies <ArrowRight size={16} />
                </button>

                <div className="flex items-center gap-10 border-l border-white/10 pl-10">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                      Status
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                        Available Q2
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {["Discovery → Live", "Framework-ready", "Risk-managed delivery", "Audit-friendly requirements"].map(
                  (t) => (
                    <span
                      key={t}
                      className="px-4 py-2 border border-white/10 bg-white/0 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-200/70"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* RIGHT: image contained so it cannot overlap */}
            <div className="min-w-0 lg:justify-self-end w-full">
              <div className="border border-white/10 bg-white/5 overflow-hidden w-full max-w-[520px]">
                <img
                  src="/images/hero.jpg"
                  alt="Modern delivery in regulated environments"
                  className="w-full h-[280px] sm:h-[340px] lg:h-[360px] object-cover opacity-95"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES: slightly lighter */}
      <section className="py-28 bg-navy-900 border-y border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row justify-between items-baseline mb-16 gap-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-[-0.03em]">
              Core delivery capabilities
            </h2>
            <p className="text-slate-200/70 text-sm font-bold uppercase tracking-widest">
              Framework-aligned services
            </p>
          </div>

          <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x border border-white/5 divide-white/5">
            {SERVICES.map((s, i) => (
              <div
                key={s.id}
                className="group p-12 lg:p-14 hover:bg-navy-800 transition-colors duration-500 flex flex-col"
              >
                <div className="mb-10 border border-white/10 overflow-hidden bg-white/5">
                  <img
                    src={`/images/capability-${i + 1}.jpg`}
                    alt={s.title}
                    className="w-full h-[150px] object-cover opacity-85 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </div>

                <span className="text-brand text-[10px] font-black tracking-[0.5em] uppercase mb-10 opacity-50 group-hover:opacity-100 transition-opacity">
                  0{i + 1}
                </span>

                <div className="mb-10">
                  {i === 0 ? (
                    <Command className="text-white" size={26} />
                  ) : i === 1 ? (
                    <Layers className="text-white" size={26} />
                  ) : (
                    <ShieldCheck className="text-white" size={26} />
                  )}
                </div>

                <h3 className="text-2xl lg:text-3xl font-black text-white mb-5 tracking-[-0.03em] group-hover:text-brand transition-colors">
                  {s.title}
                </h3>

                <p className="text-slate-100/80 text-base mb-10 font-medium leading-relaxed flex-grow">
                  {s.description}
                </p>

                <div className="space-y-3 mb-12">
                  {s.features.slice(0, 3).map((f, fi) => (
                    <div
                      key={fi}
                      className="flex items-center gap-3 text-[10px] font-bold text-slate-200/70 uppercase tracking-widest"
                    >
                      <div className="w-1 h-1 bg-brand"></div> {f}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage("capabilities")}
                  className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/70 group-hover:text-white transition-all"
                >
                  Full details <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
            <p className="text-slate-100/70 text-sm font-medium max-w-2xl leading-relaxed">
              Delivery is built with traceability (policy → requirements → acceptance criteria), clear governance
              and operational readiness—so it stands up to scrutiny.
            </p>
            <button
              onClick={() => setCurrentPage("frameworks")}
              className="px-8 py-4 border border-white/10 text-[10px] font-black uppercase tracking-[0.35em] hover:bg-white hover:text-navy-950 transition-all inline-flex items-center gap-3"
            >
              Framework engagement <ExternalLink size={14} />
            </button>
          </div>
        </div>
      </section>

      <HomeCaseStudies />
    </div>
  );

  const PageShell: React.FC<{ title: string; kicker: string; children: React.ReactNode }> = ({
    title,
    kicker,
    children
  }) => (
    <div className="pt-44 pb-24 px-6 lg:px-16 min-h-[80vh] zest-grid bg-navy-800">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center gap-4 text-brand mb-8">
          <span className="text-[10px] font-black uppercase tracking-[0.6em]">{kicker}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-10 tracking-[-0.03em]">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );

  const CapabilitiesPage = () => (
    <PageShell title="Delivery that holds up under scrutiny." kicker="Capabilities">
      <p className="text-slate-100/80 text-lg max-w-3xl font-medium leading-relaxed">
        Strapco supports complex programmes where policy, legal constraints, security requirements and operational
        realities must be reflected in delivery artefacts—not added later.
        <br />
        <br />
        Typical outputs include: structured epics and user stories, acceptance criteria, operational rules, service
        constraints, governance controls, and implementation-ready delivery plans.
      </p>

      <div className="mt-16">
        <button
          onClick={() => setCurrentPage("case-studies")}
          className="px-10 py-5 bg-brand text-white font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-navy-950 transition-all inline-flex items-center gap-6"
        >
          See delivery examples <ArrowRight size={16} />
        </button>
      </div>
    </PageShell>
  );

  const CaseStudiesPage = () => (
    <PageShell title="Anonymised delivery outcomes." kicker="Case Studies">
      <p className="text-slate-100/80 text-lg max-w-3xl font-medium leading-relaxed">
        Examples of work delivered across highly regulated environments. Clients are intentionally anonymised; the focus
        is on delivery approach, technology and outcomes.
      </p>

      <div className="mt-14 grid lg:grid-cols-2 gap-6">
        {CASE_STUDIES.map((cs) => (
          <div key={cs.id} className="border border-white/10 bg-white/5 p-10">
            <div className="flex flex-wrap gap-3 items-center justify-between">
              <div className="text-brand text-[10px] font-black uppercase tracking-[0.5em]">{cs.sector}</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-100/70">
                {cs.classification}
              </div>
            </div>

            <p className="mt-6 text-slate-100/80 text-sm font-medium leading-relaxed">{cs.summary}</p>

            <div className="mt-8">
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80 mb-4">Outcomes</div>
              <div className="space-y-3">
                {cs.outcomes.map((o, i) => (
                  <div key={i} className="flex items-start gap-3 text-[12px] font-medium text-slate-100/75 leading-relaxed">
                    <div className="mt-2 w-1 h-1 bg-brand flex-shrink-0"></div>
                    <span>{o}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80 mb-4">Technology</div>
                <div className="space-y-2">
                  {cs.technologies.map((t, i) => (
                    <div key={i} className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-100/70">
                      {t}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80 mb-4">Delivery</div>
                <div className="space-y-2">
                  {cs.delivery.map((d, i) => (
                    <div key={i} className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-100/70">
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button
                onClick={() => setCurrentPage("contact")}
                className="px-8 py-4 border border-white/10 text-[10px] font-black uppercase tracking-[0.35em] hover:bg-white hover:text-navy-950 transition-all"
              >
                Discuss a similar engagement
              </button>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );

  const FrameworksPage = () => (
    <PageShell title="Framework-ready engagement." kicker="Frameworks">
      <p className="text-slate-100/80 text-lg max-w-3xl font-medium leading-relaxed">
        Strapco is structured for public sector procurement and delivery expectations. Engagements are scoped with clear
        outcomes, deliverables, governance and quality gates—designed to support transparent decision-making and auditability.
      </p>

      <div className="mt-16">
        <button
          onClick={() => setCurrentPage("contact")}
          className="px-10 py-5 bg-brand text-white font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-navy-950 transition-all inline-flex items-center gap-6"
        >
          Request an engagement outline <ArrowRight size={16} />
        </button>
      </div>
    </PageShell>
  );

  const StrategyPage = () => (
    <PageShell title="Options, trade-offs and delivery reality." kicker="Strategy">
      <p className="text-slate-100/80 text-lg max-w-3xl font-medium leading-relaxed">
        Strategy is only useful when it is deliverable. Strapco supports senior stakeholders with options analysis, delivery strategies,
        dependency mapping and risk controls—grounded in modern delivery practice and regulated constraints.
      </p>

      <div className="mt-16">
        <button
          onClick={() => setCurrentPage("case-studies")}
          className="px-10 py-5 border border-white/10 text-[10px] font-black uppercase tracking-[0.35em] hover:bg-white hover:text-navy-950 transition-all inline-flex items-center gap-3"
        >
          See delivery examples <ExternalLink size={14} />
        </button>
      </div>
    </PageShell>
  );

  const ContactPage = () => (
    <PageShell title="Start with scope, outcomes and constraints." kicker="Inquiry">
      <p className="text-slate-100/80 text-lg font-medium leading-relaxed max-w-3xl">
        Share the problem space, constraints (security, compliance, policy), stakeholders involved, and any delivery timelines.
        Strapco can respond with a short engagement outline and proposed deliverables.
      </p>

      <div className="mt-16">
        <button
          onClick={() => setCurrentPage("home")}
          className="px-10 py-5 border border-white/10 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-brand hover:border-brand transition-all active:scale-95"
        >
          Back to overview
        </button>
      </div>
    </PageShell>
  );

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "capabilities":
        return <CapabilitiesPage />;
      case "case-studies":
        return <CaseStudiesPage />;
      case "frameworks":
        return <FrameworksPage />;
      case "strategy":
        return <StrategyPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen font-sans bg-navy-950">
      <Navigation />
      <main>{renderPage()}</main>

      <footer className="bg-slate-800 py-24 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-4 gap-16">
            <div className="lg:col-span-2">
              {STRAPCO_FULL_LOGO}
              <p className="mt-10 max-w-md text-sm font-medium text-slate-100/70 leading-relaxed">
                Senior delivery and technology consulting for the UK public sector and regulated environments.
                From early discovery through to live service, Strapco supports organisations delivering high-risk,
                high-impact systems with confidence.
              </p>
            </div>

            <div>
              <h4 className="text-[10px] font-black text-brand uppercase tracking-[0.4em] mb-10">Navigate</h4>
              <ul className="space-y-6 text-[10px] font-bold text-slate-100/70 uppercase tracking-[0.25em]">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button onClick={() => setCurrentPage(item.id)} className="hover:text-white transition-colors">
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black text-brand uppercase tracking-[0.4em] mb-10">Connect</h4>
              <ul className="space-y-6 text-[10px] font-bold text-slate-100/70 uppercase tracking-[0.25em]">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <button onClick={() => setCurrentPage("contact")} className="hover:text-white transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[9px] font-bold text-slate-100/50 uppercase tracking-[0.4em]">
              © 2026 Strapco Strategic Delivery. Delivery assurance for regulated environments.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
