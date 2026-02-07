import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Menu, 
  X, 
  ShieldCheck, 
  Layers, 
  ChevronRight,
  Zap,
  Command,
  CheckCircle2,
  Database,
  Cloud,
  FileCode,
  Lock,
  Target,
  BarChart3
} from 'lucide-react';
import { STRAPCO_S_LOGO, STRAPCO_FULL_LOGO, SERVICES } from './constants.tsx';

type Page = 'home' | 'capabilities' | 'frameworks' | 'strategy' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => { window.scrollTo(0, 0); }, [currentPage]);

  const Navigation = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-6' : 'bg-transparent py-10'}`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex justify-between items-center">
        <button onClick={() => setCurrentPage('home')} className="flex items-center transition-transform hover:scale-105 active:scale-95">
          {STRAPCO_S_LOGO}
        </button>
        
        <div className="hidden lg:flex items-center space-x-12">
          {['home', 'capabilities', 'frameworks', 'strategy'].map((id) => (
            <button 
              key={id}
              onClick={() => setCurrentPage(id as Page)} 
              className={`text-[11px] font-black uppercase tracking-[0.4em] transition-all relative group ${
                currentPage === id ? 'text-brand' : 'text-slate-500 hover:text-white'
              }`}
            >
              {id === 'home' ? 'Overview' : id}
              <span className={`absolute -bottom-2 left-0 h-[1px] bg-brand transition-all duration-300 ${currentPage === id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage('contact')}
            className="px-10 py-3 bg-brand text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-sm hover:bg-white hover:text-navy-950 transition-all shadow-[0_0_30px_rgba(0,102,255,0.2)]"
          >
            Inquiry
          </button>
        </div>

        <button className="lg:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-navy-950 z-40 p-10 flex flex-col pt-32 space-y-10 animate-in fade-in slide-in-from-right">
          {['home', 'capabilities', 'frameworks', 'strategy'].map(id => (
            <button key={id} onClick={() => { setCurrentPage(id as Page); setIsMenuOpen(false); }} className="text-left text-4xl font-black uppercase tracking-tighter text-white">{id}</button>
          ))}
          <button onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }} className="w-full py-6 border border-brand text-brand text-sm font-black uppercase tracking-[0.4em]">Start a Project</button>
        </div>
      )}
    </nav>
  );

  const SectionHeader = ({ tag, title, number }: { tag: string, title: string, number: string }) => (
    <div className="flex flex-col lg:flex-row justify-between items-baseline mb-16 gap-10">
      <div className="max-w-4xl">
        <div className="flex items-center gap-4 text-brand mb-6">
          <span className="text-[11px] font-black uppercase tracking-[0.6em]">{tag}</span>
          <div className="h-px w-20 bg-brand/30"></div>
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-white tracking-[-0.04em] uppercase leading-[0.9]">
          {title}
        </h2>
      </div>
      <span className="text-slate-700 text-xs font-black font-mono tracking-[0.4em]">{number}</span>
    </div>
  );

  const HomePage = () => (
    <div className="animate-in fade-in duration-1000">
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 zest-grid overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full relative z-10">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4 text-brand mb-12 animate-in slide-in-from-left duration-700">
              <span className="text-[11px] font-black uppercase tracking-[0.6em] border-b border-brand pb-1">Logic Unit</span>
              <div className="h-px flex-grow bg-white/5 max-w-[80px]"></div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-[-0.05em] text-white mb-16 text-balance uppercase">
              INTELLIGENT<br/>
              <span className="text-slate-800">SYSTEMS</span> AT<br/>
              <span className="text-brand">SCALE.</span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-20 items-end">
              <div className="space-y-8">
                <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium text-balance border-l-2 border-brand/20 pl-10">
                  Strapco is a high-integrity strategic advisory firm engineering the next generation of public sector infrastructure. We specialize in decommissioning legacy risk.
                </p>
                <div className="flex gap-12 pl-10">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">Impact</span>
                    <span className="text-xl font-bold text-white tracking-tighter uppercase">£200M+ Optimized</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">Standard</span>
                    <span className="text-xl font-bold text-white tracking-tighter uppercase">GDS Alpha/Beta</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setCurrentPage('capabilities')}
                className="px-12 py-7 bg-brand text-white font-black uppercase tracking-[0.3em] text-[11px] hover:bg-white hover:text-navy-950 transition-all flex items-center justify-center gap-8 group shadow-[0_0_40px_rgba(0,102,255,0.25)]"
              >
                CAPABILITIES <ArrowRight size={18} className="group-hover:translate-x-3 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Concise) */}
      <section className="py-32 bg-navy-900 border-y border-white/5 relative">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <SectionHeader tag="Practice" title="Capabilities" number="[01]" />
          <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x border border-white/5 divide-white/10 rounded-sm overflow-hidden bg-navy-950/50">
            {SERVICES.map((s, i) => (
              <div key={s.id} className="group p-14 hover:bg-navy-900 transition-all duration-700 flex flex-col relative overflow-hidden">
                <div className="mb-12 relative">
                  {i === 0 ? <Command className="text-brand" size={40} /> : i === 1 ? <Layers className="text-brand" size={40} /> : <ShieldCheck className="text-brand" size={40} />}
                </div>
                <h3 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-brand transition-colors uppercase leading-none">{s.title}</h3>
                <p className="text-slate-400 text-base mb-10 font-medium leading-relaxed flex-grow">{s.description}</p>
                <button onClick={() => setCurrentPage('capabilities')} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-white transition-all">
                  Details <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust (Concise) */}
      <section className="py-32 bg-navy-950">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <SectionHeader tag="Trust" title="Regulated Standards" number="[02]" />
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Cyber Essentials+', icon: <Lock size={20}/> },
                  { label: 'G-Cloud 14', icon: <Cloud size={20}/> },
                  { label: 'ISO 27001', icon: <ShieldCheck size={20}/> },
                  { label: 'BPSS Cleared', icon: <CheckCircle2 size={20}/> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 p-6 bg-navy-900 border border-white/5 hover:border-brand/30 transition-all">
                    <div className="text-brand">{item.icon}</div>
                    <span className="text-[11px] font-black text-white uppercase tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-video bg-navy-900 border border-white/10 flex items-center justify-center p-12 zest-grid relative overflow-hidden">
               <div className="text-center relative z-10">
                  <div className="text-6xl font-black text-white/10 leading-none mb-2 select-none tracking-tighter">DATA_PROTOCOL</div>
                  <p className="text-slate-500 font-bold uppercase tracking-[0.4em] text-[10px]">Strategic Logic Active</p>
                </div>
                <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-brand"></div>
                <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-brand"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-navy-950 font-sans selection:bg-brand selection:text-white">
      <div ref={glowRef} className="glow-pointer"></div>
      <Navigation />
      <main className="relative z-10">
        {currentPage === 'home' && <HomePage />}
        
        {/* Capabilities (Back to Grid Cards) */}
        {currentPage === 'capabilities' && (
           <div className="pt-48 pb-32 animate-in fade-in slide-in-from-bottom duration-700">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
              <SectionHeader tag="Capabilities" title="Detailed Practice Areas" number="[01]" />
              <div className="grid lg:grid-cols-3 gap-6">
                {SERVICES.map((s) => (
                  <div key={s.id} className="p-12 border border-white/5 bg-navy-900 group hover:border-brand transition-all flex flex-col">
                    <h3 className="text-3xl font-black text-white mb-8 tracking-tighter uppercase leading-none">{s.title}</h3>
                    <p className="text-slate-400 text-lg mb-10 font-medium leading-relaxed flex-grow">{s.description}</p>
                    <div className="space-y-3 mb-12">
                      {s.features.slice(0,3).map((f, fi) => (
                        <div key={fi} className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-3">
                          <div className="w-1 h-1 bg-brand"></div> {f}
                        </div>
                      ))}
                    </div>
                    <button onClick={() => setCurrentPage('contact')} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-brand hover:text-white transition-all">
                      Inquire <ArrowRight size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Frameworks (Concise Cards) */}
        {currentPage === 'frameworks' && (
          <div className="pt-48 pb-32 animate-in fade-in slide-in-from-bottom duration-700">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
              <SectionHeader tag="Standards" title="Compliance Frameworks" number="[03]" />
              <div className="grid lg:grid-cols-2 gap-6">
                {[
                  { title: "GDS Service Standard", desc: "14-point UK Government standard for usability and technology." },
                  { title: "Legacy Risk Mitigation", desc: "Safe decommissioning and Strangler Pattern execution." },
                  { title: "Cloud Native Readiness", desc: "Architecture for modern Sovereign Cloud requirements." },
                  { title: "Policy Logic", desc: "Aligning technical roadmap with ministerial policy goals." }
                ].map((f, i) => (
                  <div key={i} className="p-12 bg-navy-900 border border-white/5 hover:border-brand transition-all group flex flex-col justify-center min-h-[240px]">
                    <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter group-hover:text-brand leading-none">{f.title}</h3>
                    <p className="text-slate-400 text-lg font-medium leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Strategy (3 Step Grid) */}
        {currentPage === 'strategy' && (
          <div className="pt-48 pb-32 animate-in fade-in slide-in-from-bottom duration-700">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
              <SectionHeader tag="Method" title="The Strapco Protocol" number="[04]" />
              <div className="grid lg:grid-cols-3 gap-6">
                {[
                  { step: "01", title: "Logic Discovery", content: "Researching behavioral and organizational blockers." },
                  { step: "02", title: "System Blueprint", content: "Translating strategy into cloud and data reality." },
                  { step: "03", title: "Rapid Execution", content: "High-velocity squads delivering at compliance scale." }
                ].map((s, i) => (
                  <div key={i} className="bg-navy-900 border border-white/5 p-12 flex flex-col items-start min-h-[360px]">
                    <span className="text-brand font-mono text-xs font-black tracking-[0.5em] mb-10">P_{s.step}</span>
                    <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter leading-none">{s.title}</h3>
                    <p className="text-slate-400 text-lg font-medium leading-relaxed mb-10">{s.content}</p>
                    <div className="mt-auto flex justify-between items-center w-full">
                      <Target size={16} className="text-brand opacity-20" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="pt-48 pb-32 animate-in fade-in slide-in-from-bottom duration-700 zest-grid">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
              <div className="grid lg:grid-cols-2 gap-32">
                <div>
                  <SectionHeader tag="Contact" title="Strategic Inquiry" number="[05]" />
                  <p className="text-xl text-slate-400 mb-12 font-medium leading-relaxed">
                    We operate exclusively through strategic partnerships for G-Cloud procurement and specialized advisory.
                  </p>
                  <div className="space-y-10">
                    <div className="flex flex-col">
                      <span className="text-[11px] font-black text-slate-600 uppercase tracking-widest mb-2">Terminal</span>
                      <span className="text-3xl font-black text-white uppercase tracking-tighter">hello@strapco.co.uk</span>
                    </div>
                  </div>
                </div>
                <div className="bg-navy-900 border border-white/5 p-12">
                  <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-8">
                      <input type="text" className="bg-navy-950 border border-white/10 p-4 text-white font-bold tracking-tight focus:border-brand outline-none transition-all" placeholder="Full Name" />
                      <input type="text" className="bg-navy-950 border border-white/10 p-4 text-white font-bold tracking-tight focus:border-brand outline-none transition-all" placeholder="Organization" />
                    </div>
                    <select className="w-full bg-navy-950 border border-white/10 p-4 text-white font-bold tracking-tight focus:border-brand outline-none transition-all appearance-none">
                      <option>Strategic Implementation</option>
                      <option>Legacy Modernization</option>
                      <option>Board Advisory</option>
                    </select>
                    <textarea rows={4} className="w-full bg-navy-950 border border-white/10 p-4 text-white font-bold tracking-tight focus:border-brand outline-none transition-all resize-none" placeholder="Requirement Details..."></textarea>
                    <button className="w-full py-6 bg-brand text-white font-black uppercase tracking-[0.4em] text-[11px] hover:bg-white hover:text-navy-950 transition-all active:scale-[0.98]">Transmit Inquiry</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <footer className="bg-navy-950 py-32 border-t border-white/5 relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-4 gap-24">
            <div className="lg:col-span-2">
              {STRAPCO_FULL_LOGO}
            </div>
            <div>
              <h4 className="text-[11px] font-black text-brand uppercase tracking-[0.6em] mb-10">Practice</h4>
              <ul className="space-y-4 text-[11px] font-bold text-slate-500 uppercase tracking-[0.4em]">
                <li><button onClick={() => setCurrentPage('capabilities')} className="hover:text-white transition-colors">Capabilities</button></li>
                <li><button onClick={() => setCurrentPage('frameworks')} className="hover:text-white transition-colors">Frameworks</button></li>
                <li><button onClick={() => setCurrentPage('strategy')} className="hover:text-white transition-colors">Strategy</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-black text-brand uppercase tracking-[0.6em] mb-10">Connect</h4>
              <ul className="space-y-4 text-[11px] font-bold text-slate-500 uppercase tracking-[0.4em]">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition-colors">Inquiry</button></li>
              </ul>
            </div>
          </div>
          <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
            <p className="text-[10px] font-bold text-slate-800 uppercase tracking-[0.6em]">© 2025 Strapco Strategic Delivery. ISO 27001 Accredited.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
