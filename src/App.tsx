import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Menu, 
  X, 
  ShieldCheck, 
  Layers, 
  ChevronRight,
  Target,
  FileText,
  Clock,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { STRAPCO_S_LOGO, STRAPCO_FULL_LOGO, SERVICES } from './constants.tsx';

type Page = 'home' | 'capabilities' | 'frameworks' | 'strategy' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
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

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [currentPage]);

  const Navigation = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1280px] mx-auto px-6 flex justify-between items-center">
        <button onClick={() => setCurrentPage('home')} className="flex items-center transition-opacity hover:opacity-80">
          {STRAPCO_S_LOGO}
        </button>
        
        <div className="hidden lg:flex items-center space-x-10">
          {['home', 'capabilities', 'frameworks', 'strategy'].map((id) => (
            <button 
              key={id}
              onClick={() => setCurrentPage(id as Page)} 
              className={`text-sm font-semibold transition-colors relative group ${
                currentPage === id ? 'text-brand' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {id === 'home' ? 'Overview' : id.charAt(0).toUpperCase() + id.slice(1)}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-brand transition-all duration-300 ${currentPage === id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage('contact')}
            className="px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-brand transition-all shadow-sm"
          >
            Get in touch
          </button>
        </div>

        <button className="lg:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-40 p-8 flex flex-col pt-24 space-y-6 animate-in fade-in slide-in-from-top">
          {['home', 'capabilities', 'frameworks', 'strategy'].map(id => (
            <button key={id} onClick={() => { setCurrentPage(id as Page); setIsMenuOpen(false); }} className="text-left text-3xl font-bold text-slate-900 capitalize border-b border-slate-100 pb-4">{id}</button>
          ))}
          <button onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }} className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl">Contact us</button>
        </div>
      )}
    </nav>
  );

  const SectionHeader = ({ tag, title }: { tag: string, title: string }) => (
    <div className="mb-12">
      <div className="flex items-center gap-3 text-brand font-bold text-xs uppercase tracking-widest mb-4">
        <div className="h-px w-8 bg-brand"></div>
        <span>{tag}</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
    </div>
  );

  const HomePage = () => (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col justify-center pt-24 zest-grid">
        <div className="max-w-[1280px] mx-auto px-6 w-full relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand/5 border border-brand/10 rounded-full text-brand text-[10px] font-bold uppercase tracking-widest mb-8">
              <ShieldCheck size={12} />
              G-Cloud 14 Compliance Enabled
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight text-slate-900 mb-10 text-balance">
              Intelligent systems at <span className="text-brand">national scale.</span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium text-balance border-l-4 border-brand/20 pl-8">
                  Strapco provides senior-led transformation discovery, assurance and technical intervention for the UK's most complex regulated environments.
                </p>
                <div className="flex gap-10 pl-8">
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Standard</div>
                    <div className="text-lg font-bold text-slate-900">Lot 3 Support</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Expertise</div>
                    <div className="text-lg font-bold text-slate-900">Transformation</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 lg:pt-0">
                <button 
                  onClick={() => setCurrentPage('capabilities')}
                  className="px-10 py-5 bg-brand text-white font-bold rounded-xl hover:bg-slate-900 transition-all flex items-center justify-center gap-3 shadow-lg shadow-brand/20 group"
                >
                  View capabilities <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Vertical Cards restored */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader tag="Capabilities" title="Our core services" />
          <div className="grid lg:grid-cols-3 gap-8">
            {SERVICES.map((s, i) => (
              <div key={s.id} className="group bg-white p-10 rounded-2xl border border-slate-200/60 card-shadow transition-all duration-500 flex flex-col">
                <div className="mb-8 w-14 h-14 bg-brand/5 rounded-xl flex items-center justify-center text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  {i === 0 ? <Target size={28} /> : i === 1 ? <ShieldCheck size={28} /> : <Layers size={28} />}
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight group-hover:text-brand transition-colors leading-snug">
                  {s.title}
                </h3>
                <p className="text-slate-600 text-base mb-10 font-medium leading-relaxed flex-grow">
                  {s.description}
                </p>
                <button 
                  onClick={() => setCurrentPage('capabilities')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-900 transition-all"
                >
                  Learn more <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Trust Bar */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Cloud Lot', val: '3' },
              { label: 'Procurement', val: 'G-Cloud 14' },
              { label: 'Accreditation', val: 'ISO 27001' },
              { label: 'Security', val: 'BPSS+' }
            ].map((item, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-brand font-bold text-3xl mb-1 tracking-tighter">{item.val}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-brand/10 selection:text-brand">
      <div ref={glowRef} className="glow-pointer"></div>
      <Navigation />
      
      <main className="relative z-10">
        {currentPage === 'home' && <HomePage />}
        
        {currentPage === 'capabilities' && (
           <div className="pt-40 pb-24 animate-in fade-in slide-in-from-bottom duration-500">
            <div className="max-w-[1000px] mx-auto px-6">
              <SectionHeader tag="Services" title="Detailed service definitions" />
              <div className="space-y-12">
                {SERVICES.map((s) => (
                  <div key={s.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden card-shadow">
                    <div className="p-10 lg:p-14">
                      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-12">
                        <div className="max-w-2xl">
                          <span className="text-[10px] font-bold text-brand uppercase tracking-widest mb-3 block px-2 py-1 bg-brand/5 rounded border border-brand/10 inline-block">{s.category}</span>
                          <h3 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">{s.title}</h3>
                          <p className="text-slate-600 text-lg font-medium leading-relaxed">{s.description}</p>
                        </div>
                        <button onClick={() => setCurrentPage('contact')} className="whitespace-nowrap px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-brand transition-all flex items-center gap-2">
                          Start discovery <FileText size={18} />
                        </button>
                      </div>

                      <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-slate-100">
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-8 flex items-center gap-2">
                            <Target size={16} className="text-brand" /> Service Features
                          </h4>
                          <ul className="space-y-4">
                            {s.features.map((f, fi) => (
                              <li key={fi} className="text-sm font-medium text-slate-600 flex items-start gap-4">
                                <div className="w-1.5 h-1.5 bg-brand rounded-full mt-2 flex-shrink-0"></div> 
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-8 flex items-center gap-2">
                            <ShieldCheck size={16} className="text-brand" /> Service Benefits
                          </h4>
                          <ul className="space-y-4">
                            {s.benefits.map((b, bi) => (
                              <li key={bi} className="text-sm font-medium text-slate-600 flex items-start gap-4">
                                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-2 flex-shrink-0"></div> 
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentPage === 'frameworks' && (
          <div className="pt-40 pb-24 animate-in fade-in slide-in-from-bottom duration-500">
            <div className="max-w-[1000px] mx-auto px-6">
              <SectionHeader tag="Methods" title="Compliance frameworks" />
              <div className="grid lg:grid-cols-2 gap-8">
                {[
                  { title: "GDS service standard", desc: "Expert 14-point alignment for government usability and technology choices." },
                  { title: "Legacy risk mitigation", desc: "Safe decommissioning and Strangler Pattern implementation in secure estates." },
                  { title: "Cloud native strategy", desc: "Architecture designed for modern Sovereign Cloud requirements." },
                  { title: "Policy mapping", desc: "Direct alignment of technical backlogs with ministerial policy goals." }
                ].map((f, i) => (
                  <div key={i} className="p-10 bg-slate-50 rounded-2xl border border-slate-200 hover:border-brand/40 transition-all flex flex-col justify-center min-h-[220px]">
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">{f.title}</h3>
                    <p className="text-slate-600 text-base font-medium leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentPage === 'strategy' && (
          <div className="pt-40 pb-24 animate-in fade-in slide-in-from-bottom duration-500">
            <div className="max-w-[1000px] mx-auto px-6">
              <SectionHeader tag="Protocol" title="The Strapco method" />
              <div className="grid lg:grid-cols-3 gap-6">
                {[
                  { step: "01", title: "Discovery", content: "Uncovering behavioral blockers and hidden technical requirements." },
                  { step: "02", title: "Architecture", content: "Translating policy into resilient system blueprints." },
                  { step: "03", title: "Execution", content: "High-velocity delivery squads operating at compliance scale." }
                ].map((s, i) => (
                  <div key={i} className="bg-white border border-slate-200 p-10 rounded-2xl flex flex-col items-start min-h-[340px] shadow-sm">
                    <span className="bg-brand/10 text-brand px-3 py-1 rounded-full text-xs font-bold mb-8">Phase {s.step}</span>
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">{s.title}</h3>
                    <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10">{s.content}</p>
                    <div className="mt-auto">
                      <Clock size={20} className="text-brand/20" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="pt-40 pb-24 animate-in fade-in slide-in-from-bottom duration-500 zest-grid">
            <div className="max-w-[1000px] mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div>
                  <SectionHeader tag="Contact" title="Start a project inquiry" />
                  <p className="text-lg text-slate-600 mb-10 font-medium leading-relaxed">
                    We partner with organizations requiring high-integrity delivery assurance. For G-Cloud inquiries, please use our primary terminal.
                  </p>
                  <div className="space-y-8">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Primary terminal</span>
                      <span className="text-2xl font-extrabold text-slate-900">hello@strapco.co.uk</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">HQ</span>
                      <span className="text-xl font-bold text-slate-900">London, United Kingdom</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-slate-200 p-10 rounded-3xl shadow-xl">
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-slate-900 font-semibold focus:ring-2 focus:ring-brand focus:outline-none transition-all" placeholder="Full name" />
                      <input type="text" className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-slate-900 font-semibold focus:ring-2 focus:ring-brand focus:outline-none transition-all" placeholder="Organization" />
                    </div>
                    <div className="relative">
                      <select className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-slate-900 font-semibold focus:ring-2 focus:ring-brand focus:outline-none transition-all appearance-none">
                        <option>Transformation Discovery</option>
                        <option>Delivery Assurance</option>
                        <option>Backlog Definition</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                    </div>
                    <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-slate-900 font-semibold focus:ring-2 focus:ring-brand focus:outline-none transition-all resize-none" placeholder="Brief requirements overview..."></textarea>
                    <button className="w-full py-5 bg-slate-900 text-white font-bold rounded-xl hover:bg-brand transition-all shadow-lg shadow-slate-900/10">Submit inquiry</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <footer className="bg-slate-50 py-24 border-t border-slate-200 relative z-10">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-20">
            <div className="lg:col-span-2">
              {STRAPCO_FULL_LOGO}
              <p className="mt-8 text-slate-500 font-medium max-w-sm">
                Strategic advisory and technical implementation for the UK's regulated industries.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-8">Navigation</h4>
              <ul className="space-y-4 text-sm font-semibold text-slate-500">
                <li><button onClick={() => setCurrentPage('capabilities')} className="hover:text-brand transition-colors">Capabilities</button></li>
                <li><button onClick={() => setCurrentPage('frameworks')} className="hover:text-brand transition-colors">Frameworks</button></li>
                <li><button onClick={() => setCurrentPage('strategy')} className="hover:text-brand transition-colors">Methodology</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-8">Resources</h4>
              <ul className="space-y-4 text-sm font-semibold text-slate-500">
                <li><a href="#" className="flex items-center gap-2 hover:text-brand transition-colors">G-Cloud 14 Portal <ExternalLink size={12} /></a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Privacy policy</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">ISO 27001 info</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-20 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">© 2025 Strapco Strategic Delivery. ISO Accredited.</p>
            <div className="flex gap-8 text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">
              <span>ISO 27001</span>
              <span>ISO 9001</span>
              <span>G-Cloud Support</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
