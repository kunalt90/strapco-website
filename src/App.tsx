import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Menu,
  X,
  ShieldCheck,
  Layers,
  Command,
  ChevronRight,
} from "lucide-react";
import { STRAPCO_S_LOGO, STRAPCO_FULL_LOGO, SERVICES } from "./constants";

type Page =
  | "overview"
  | "capabilities"
  | "case-studies"
  | "frameworks"
  | "strategy"
  | "contact";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>("overview");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  /* ---------------- NAVIGATION ---------------- */

  const Navigation = () => (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-4" : "py-8"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex justify-between items-center">
        <button onClick={() => setCurrentPage("overview")}>
          {STRAPCO_S_LOGO}
        </button>

        <div className="hidden lg:flex items-center space-x-10">
          {[
            ["overview", "Overview"],
            ["capabilities", "Capabilities"],
            ["case-studies", "Case Studies"],
            ["frameworks", "Frameworks"],
            ["strategy", "Strategy"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => setCurrentPage(id as Page)}
              className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative ${
                currentPage === id
                  ? "text-brand"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-brand transition-all ${
                  currentPage === id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}

          <button
            onClick={() => setCurrentPage("contact")}
            className="px-6 py-2 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-navy-950 transition-all"
          >
            Inquiry
          </button>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );

  /* ---------------- OVERVIEW PAGE ---------------- */

  const OverviewPage = () => (
    <>
      {/* HERO */}
      <section className="bg-navy-950 min-h-screen pt-40 zest-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-[1.1fr_1.4fr] gap-24 items-center">
            <div>
              <div className="text-brand text-[10px] font-black uppercase tracking-[0.6em] mb-8">
                Trusted delivery for regulated environments
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-10">
                Assured delivery <br />
                <span className="text-slate-500">for</span>{" "}
                <span className="text-brand">regulated</span> environments.
              </h1>

              <p className="text-slate-400 text-lg max-w-xl leading-relaxed mb-10">
                Strapco provides senior delivery, data and technology consulting
                to highly regulated organisations across the UK public sector.
                We translate policy, legal and investigative requirements into
                operational systems that are secure, compliant and deliverable
                at scale.
              </p>

              <div className="flex items-center gap-10">
                <button
                  onClick={() => setCurrentPage("case-studies")}
                  className="px-10 py-5 bg-brand text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-4 hover:bg-white hover:text-navy-950 transition-all"
                >
                  View Case Studies <ArrowRight size={14} />
                </button>

                <div className="text-[10px] uppercase tracking-widest text-slate-400">
                  <span className="block text-slate-500">Status</span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Available Q2
                  </span>
                </div>
              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="relative lg:-mr-32">
              <img
                src="/images/hero.jpg"
                alt="Secure regulated digital delivery"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-navy-900 py-32 border-y border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-5xl lg:text-6xl font-black tracking-tight">
              Core delivery capabilities
            </h2>
            <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">
              Framework-aligned services
            </span>
          </div>

          <div className="grid lg:grid-cols-3 gap-px bg-white/5">
            {SERVICES.map((s, i) => (
              <div
                key={s.id}
                className="bg-navy-800 p-12 flex flex-col hover:bg-navy-900 transition-colors"
              >
                <img
                  src={`/images/capability-${i + 1}.jpg`}
                  alt={s.title}
                  className="mb-10 rounded-lg"
                />

                <div className="mb-6">
                  {i === 0 && <Command />}
                  {i === 1 && <Layers />}
                  {i === 2 && <ShieldCheck />}
                </div>

                <h3 className="text-3xl font-black mb-6">{s.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  {s.description}
                </p>

                <ul className="space-y-2 text-[10px] uppercase tracking-widest text-slate-500 mb-8">
                  {s.features.slice(0, 3).map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-brand" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button className="mt-auto flex items-center gap-3 text-[10px] uppercase tracking-widest text-white/60 hover:text-white">
                  Learn more <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-slate-850 py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <h2 className="text-5xl font-black mb-10">Selected case studies</h2>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              A selection of senior-led programmes delivering complex data,
              investigative and cloud platforms in regulated environments.
              Client names are withheld due to sensitivity.
            </p>

            <img
              src="/images/case-studies.jpg"
              alt="Case studies"
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>
    </>
  );

  /* ---------------- PAGE SWITCH ---------------- */

  return (
    <div className="min-h-screen font-sans">
      <Navigation />
      <main>
        {currentPage === "overview" ? (
          <OverviewPage />
        ) : (
          <div className="pt-48 pb-32 text-center bg-navy-900">
            <h1 className="text-6xl font-black uppercase tracking-tight mb-8">
              {currentPage.replace("-", " ")}
            </h1>
            <button
              onClick={() => setCurrentPage("overview")}
              className="text-[10px] uppercase tracking-widest text-brand"
            >
              Back to overview
            </button>
          </div>
        )}
      </main>

      <footer className="bg-slate-800 py-24 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          {STRAPCO_FULL_LOGO}
          <p className="mt-10 text-sm text-slate-500 max-w-md">
            Senior delivery and technology consulting for the UK public sector
            and regulated environments.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
