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

  const HomePage = () => (
    <div>
      <section className="relative min-h-screen flex flex-col justify-center pt-32 zest-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full">
          <div className="max-w-6xl">
            <div className="flex items-center gap-4 text-brand mb-12">
              <span className="text-[10px] font-black uppercase tracking-[0.6em] border-b border-brand pb-1">
                Trusted Delivery for Regulated Environments
              </span>
              <div className="h-px flex-grow bg-white/5 max-w-[100px]"></div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-[-0.03em] text-white mb-12 text-balance">
              ASSURED DELIVERY
              <br />
              <span className="text-slate-700">IN REGULATED</span>
              <br />
              <span className="text-brand">ENVIRONMENTS.</span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-16 items-end">
              <p className="text-lg sm:text-xl text-slate-400 leading-relaxed font-medium text-balance">
                Strapco provides senior delivery, data and technology consulting to highly regulated
                organisations across the UK public sector.
                <br />
                <br />
                We specialise in translating policy, legal and investigative requirements into operational
                systems that are secure, compliant and deliverable at scale.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <button
                  onClick={() => setCurrentPage("case-studies")}
                  className="px-10 py-5 bg-brand text-white font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-navy-950 transition-all flex items-center justify-center gap-6 group shadow-[0_0_30px_rgba(0,102,255,0.2)]"
                >
                  View Case Studies
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

            <div className="mt-16 flex flex-wrap gap-3">
              {["Discovery → Live", "Framework-ready", "Risk-managed delivery", "Audit-friendly requirements"].map(
                (t) => (
                  <span
                    key={t}
                    className="px-4 py-2 border border-white/10 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-navy-900 border-y border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row justify-between items-baseline mb-20 gap-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-[-0.03em]">
              Core Delivery Capabilities
            </h2>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
              Framework-Aligned Services
            </p>
          </div>

          <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x border border-white/5 divide-white/5">
            {SERVICES.map((s, i) => (
              <div
                key={s.id}
                className="group p-12 lg:p-14 hover:bg-navy-800 transition-colors duration-500 flex flex-col"
              >
                <span className="text-brand text-[10px] font-black tracking-[0.5em] uppercase mb-14 opacity-40 group-hover:opacity-100 transition-opacity">
