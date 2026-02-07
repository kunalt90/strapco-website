import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  BarChart3, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2,
  ExternalLink,
  Cpu,
  Smartphone,
  Trophy,
  Activity,
  Globe,
  Lock,
  Zap
} from 'lucide-react';
import { STRAPCO_S_LOGO, STRAPCO_FULL_LOGO, SERVICES } from './constants';

type Page = 'home' | 'services' | 'frameworks' | 'strategy' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, [currentPage]);

  const Navigation = () => (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-20">
        <button onClick={() => setCurrentPage('home')}>{STRAPCO_S_LOGO}</button>
        <div className="hidden lg:flex items-center space-x-10">
          {['home', 'services', 'frameworks', 'strategy'].map((id) => (
            <button key={id} onClick={() => setCurrentPage(id as Page)} className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${currentPage === id ? 'text-brand' : 'text-slate-400 hover:text-white'}`}>
              {id === 'home' ? 'Overview' : id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
          <button onClick={() => setCurrentPage('contact')} className="px-6 py-2.5 bg-brand text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-sm hover:bg-white hover:text-navy-900 transition-all border border-brand">Request Briefing</button>
        </div>
        <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-navy-900 p-8 flex flex-col space-y-6 border-b border-white/5">
          <button onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }} className="text-left text-xs font-black uppercase tracking-widest text-white">Overview</button>
          <button onClick={() => { setCurrentPage('services'); setIsMenuOpen(false); }} className="text-left text-xs font-black uppercase tracking-widest text-white">Capabilities</button>
          <button onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }} className="w-full py-4 bg-brand text-white text-xs font-black uppercase tracking-widest rounded-sm">Request Briefing</button>
        </div>
      )}
    </nav>
  );

  const HomePage = () => (
    <div>
      <section className="relative pt-40 pb-32 lg:pt-56 lg:pb-48 hero-grid">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tight">Navigating Complexity.<br/><span className="text-brand">Delivering Precision.</span></h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-16 font-medium">Strapco provides high-integrity business transformation for the UK's regulated sectors. We solve complex operational and technical challenges.</p>
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <button onClick={() => setCurrentPage('services')} className="w-full sm:w-auto px-10 py-5 bg-white text-navy-900 font-black uppercase tracking-widest text-[10px] hover:bg-brand hover:text-white transition-all rounded-sm shadow-xl flex items-center gap-3">View Capabilities <ArrowRight size={16} /></button>
              <div className="flex gap-10">
                <div className="border-l border-brand/40 pl-4"><span className="text-[10px] font-black text-white">G-Cloud 14</span></div>
                <div className="border-l border-brand/40 pl-4"><span className="text-[10px] font-black text-white">ISO 27001</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-navy-950/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-20">Services focused on outcomes<span className="text-brand">.</span></h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {SERVICES.map((s, i) => (
              <div key={s.id} className="bg-[#0A0F1A] border border-white/5 rounded-[2.5rem] p-12 hover:border-brand/40 transition-all">
                <div className="mb-8 p-4 bg-brand/10 rounded-xl w-fit">{i === 0 ? <Smartphone className="text-brand" /> : i === 1 ? <Cpu className="text-brand" /> : <BarChart3 className="text-brand" />}</div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase">{s.title}</h3>
                <p className="text-slate-400 mb-8 font-medium">{s.description}</p>
                <ul className="space-y-3 mb-10">
                  {s.features.slice(0, 3).map((f, fi) => <li key={fi} className="text-[10px] font-black text-white/80 uppercase tracking-widest flex items-center gap-2"><div className="w-1 h-1 bg-brand rounded-full" /> {f}</li>)}
                </ul>
                <button onClick={() => setCurrentPage('services')} className="text-[10px] font-black uppercase text-brand flex items-center gap-2">Explore <ArrowRight size={14} /></button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen font-sans">
      <Navigation />
      <main>{currentPage === 'home' ? <HomePage /> : <div className="pt-40 px-12 text-center text-white h-screen">Page content for {currentPage} coming soon...</div>}</main>
      <footer className="bg-navy-950 py-20 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6">{STRAPCO_FULL_LOGO}</div>
      </footer>
    </div>
  );
};

export default App;
