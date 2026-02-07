import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Menu,
  X,
  ShieldCheck,
  Layers,
  ChevronRight,
  Command
} from "lucide-react";
import { STRAPCO_S_LOGO, STRAPCO_FULL_LOGO, SERVICES } from "./constants";

type Page = "home" | "capabilities" | "frameworks" | "strategy" | "contact";

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
          {["home", "capabilities", "frameworks", "strategy"].map((id) => (
            <button
              key={id}
              onClick={() => setCurrentPage(id as Page)}
              className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative group ${
                currentPage === id ? "text-brand" : "text-slate-500 hover:text-white"
              }`}
            >
              {id === "home" ? "Overview" : id}
              <span
                className={`absolute -bottom-1 left-0 h-[1px] bg-brand transition-all duration-300 ${
                  currentPage === id ? "w-full" : "w-0 group-hover:w-full"
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
        <div className="lg:hidden fixed inset-0 bg-navy-950 z-40 p-10 flex flex-col pt-32 space-y-10">
          {["home", "capabilities", "frameworks", "strategy"].map((id) => (
            <button
              key={id}
              onClick={() => {
                setCurrentPage(id as Page);
                setIsMenuOpen(false);
              }}
              className="text-left text-3xl font-black uppercase tracking-tighter text-white"
            >
              {id === "home" ? "Overview" : id}
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

  const HomePage = () => (
    <div>
      <section className="relative min-h-screen flex flex-col justify-center pt-32 zest-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full">
          <div className="max-w-6xl">
            <div className="flex items-center gap-4 text-brand mb-12">
              <span className="text-[10px] font-black uppercase tracking-[0.6em] border-b border-brand pb-1">
                Strategic Logic
              </span>
              <div className="h-px flex-grow bg-white/5 max-w-[100px]"></div>
            </div>

            {/* HERO HEADLINE — reduced */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-[-0.03em] text-white mb-12 text-balance">
              INTELLIGENT
              <br />
              <span className="text-slate-700">DELIVERY</span> AT
              <br />
              <span className="text-brand">SCALE.</span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-16 items-end">
              <p className="text-lg sm:text-xl text-slate-400 leading-relaxed font-medium text-balance">
                Strapco is a boutique consultancy engineering complex systems modernization for regulated
                industries. We bridge the gap between abstract strategy and operational reality.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <button
                  onClick={() => setCurrentPage("capabilities")}
                  className="px-10 py-5 bg-brand text-white font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-navy-950 transition-all flex items-center justify-center gap-6 group shadow-[0_0_30px_rgba(0,102,255,0.2)]"
                >
                  Explore Capabilities
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
                <div className="flex items-center gap-10 border-l border-white/10 pl-10">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">
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
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-navy-900 border-y border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row justify-between items-baseline mb-20 gap-10">
            {/* SECTION TITLE — reduced and remove random blue single letter */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-[-0.03em]">
              Strategic Practice Areas
            </h2>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">01 // Capabilities</p>
          </div>

          <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x border border-white/5 divide-white/5">
            {SERVICES.map((s, i) => (
              <div
                key={s.id}
                className="group p-12 lg:p-14 hover:bg-navy-800 transition-colors duration-500 flex flex-col"
              >
                <span className="text-brand text-[10px] font-black tracking-[0.5em] uppercase mb-14 opacity-40 group-hover:opacity-100 transition-opacity">
                  0{i + 1}
                </span>

                <div className="mb-10">
                  {i === 0 ? (
                    <Command className="text-white" size={28} />
                  ) : i === 1 ? (
                    <Layers className="text-white" size={28} />
                  ) : (
                    <ShieldCheck className="text-white" size={28} />
                  )}
                </div>

                <h3 className="text-3xl lg:text-4xl font-black text-white mb-6 tracking-[-0.03em] group-hover:text-brand transition-colors">
                  {s.title}
                </h3>

                <p className="text-slate-400 text-base lg:text-lg mb-10 font-medium leading-relaxed flex-grow">
                  {s.description}
                </p>

                <div className="space-y-3 mb-12">
                  {s.features.slice(0, 3).map((f, fi) => (
                    <div
                      key={fi}
                      className="flex items-center gap-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest"
                    >
                      <div className="w-1 h-1 bg-brand"></div> {f}
                    </div>
                  ))}
                </div>

                <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-all">
                  Full Details <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-navy-950 font-sans">
      <Navigation />
      <main>
        {currentPage === "home" ? (
          <HomePage />
        ) : (
          <div className="pt-56 px-6 lg:px-16 min-h-[80vh] flex flex-col items-center justify-center text-center zest-grid">
            <div className="flex items-center gap-4 text-brand mb-8">
              <span className="text-[10px] font-black uppercase tracking-[0.6em]">
                Section // {currentPage}
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-10 tracking-[-0.03em] uppercase">
              {currentPage}
            </h1>
            <p className="text-slate-500 text-lg max-w-xl mx-auto font-medium leading-relaxed">
              Detailed specifications and operational frameworks for our {currentPage} methodologies are
              currently classified for partner review only.
            </p>
            <button
              onClick={() => setCurrentPage("home")}
              className="mt-16 px-10 py-5 border border-white/10 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-brand hover:border-brand transition-all active:scale-95"
            >
              Back to Overview
            </button>
          </div>
        )}
      </main>

      <footer className="bg-navy-950 py-28 border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-4 gap-16">
            <div className="lg:col-span-2">
              {STRAPCO_FULL_LOGO}
              <p className="mt-10 max-w-md text-sm font-medium text-slate-500 leading-relaxed">
                Expert implementation of digital architecture for the UK's regulated industries. From GDS
                Discovery to full-scale technical delivery.
              </p>
            </div>

            <div>
              <h4 className="text-[10px] font-black text-brand uppercase tracking-[0.4em] mb-10">
                Intelligence
              </h4>
              <ul className="space-y-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em]">
                <li>
                  <button
                    onClick={() => setCurrentPage("capabilities")}
                    className="hover:text-white transition-colors"
                  >
                    Capabilities
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage("frameworks")}
                    className="hover:text-white transition-colors"
                  >
                    Frameworks
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Insights
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black text-brand uppercase tracking-[0.4em] mb-10">
                Connect
              </h4>
              <ul className="space-y-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em]">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage("contact")}
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-28 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[9px] font-bold text-slate-700 uppercase tracking-[0.4em]">
              © 2025 Strapco Strategic Delivery. ISO 27001 Accredited.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
