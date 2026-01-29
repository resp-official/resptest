import React, { useState, useEffect, useMemo } from 'react';
import { 
  Sparkles, 
  Zap, 
  Target, 
  Globe, 
  Database, 
  Gem,
  Menu,
  X,
  Twitter,
  Linkedin,
  ArrowRight,
  Search,
  Wallet,
  Loader2,
  CheckCircle,
  ExternalLink,
  Cpu,
  AlertCircle,
  Navigation,
  FileText,
  Shield,
  Rocket,
  Activity,
  Box
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MiningAnalysisService } from './services/geminiService';
import { AsteroidAnalysis, RoadmapItem } from './types';

const RespLogo = ({ className = "w-full h-full", strokeWidth = 16 }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`${className} notranslate`}
    stroke="currentColor" 
    strokeWidth={strokeWidth} 
    strokeLinecap="square" 
    strokeLinejoin="miter"
  >
    <path d="M 35 25 L 10 50 L 35 75" />
    <path d="M 65 25 L 90 50 L 65 75" />
  </svg>
);

const HyperRealisticSpaceMining = () => {
    const [stage, setStage] = useState<'launch' | 'transit' | 'extraction'>('launch');
    
    // Partikül sayısını daha da düşürerek performansı maksimize ediyoruz
    const stars = useMemo(() => [...Array(25)].map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: Math.random() * 3 + 3,
        opacity: Math.random() * 0.5 + 0.2
    })), []);

    useEffect(() => {
        const sequence = async () => {
            setStage('launch'); await new Promise(r => setTimeout(r, 8000));
            setStage('transit'); await new Promise(r => setTimeout(r, 8000));
            setStage('extraction'); await new Promise(r => setTimeout(r, 12000));
        };
        const interval = setInterval(sequence, 28000);
        sequence();
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[700px] flex items-center justify-center overflow-hidden rounded-[3rem] bg-[#02040a] shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/5 gpu-accelerated">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-[#010204]" />
                {stars.map((star) => (
                    <motion.div 
                        key={star.id} 
                        animate={{ opacity: [0.1, 0.5, 0.1] }} 
                        transition={{ duration: star.duration, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[1px] h-[1px] bg-white rounded-full"
                        style={{ top: star.top, left: star.left }}
                    />
                ))}
            </div>

            <motion.div animate={{ 
                scale: stage === 'launch' ? 0.95 : stage === 'transit' ? 0.75 : 2.1,
                x: stage === 'launch' ? -150 : stage === 'transit' ? -200 : -600,
                y: stage === 'launch' ? 120 : stage === 'transit' ? 0 : 200,
            }} transition={{ duration: 6, ease: "easeInOut" }} className="relative w-full h-full flex items-center justify-center will-change-transform">
                <motion.div animate={{ opacity: stage === 'extraction' ? 0 : 1 }} transition={{ duration: 1 }} className="absolute z-10">
                    <div className="relative w-[1150px] h-[1150px] rounded-full shadow-[inset_-80px_-80px_150px_rgba(0,0,0,0.9)] overflow-hidden">
                        <motion.div animate={{ backgroundPositionX: ['0%', '100%'] }} transition={{ duration: 240, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1974&auto=format&fit=crop')] bg-cover opacity-90"
                            style={{ backgroundSize: '200% 100%' }} />
                    </div>
                </motion.div>

                <motion.div animate={{ 
                    x: stage === 'launch' ? 0 : stage === 'transit' ? 650 : 1200,
                    y: stage === 'launch' ? -350 : stage === 'transit' ? -180 : -60,
                    rotate: stage === 'launch' ? 35 : stage === 'transit' ? 10 : 0,
                    scale: stage === 'extraction' ? 0.2 : 1.1
                }} transition={{ duration: 6 }} className="absolute z-30 flex flex-col items-center will-change-transform">
                    <div className="relative w-80 h-40 bg-[#1e293b] rounded-2xl border-l-[15px] border-[#475569] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/60" />
                        {stage === 'extraction' && (
                            <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} className="absolute top-20 left-72 w-5 h-[650px] bg-gradient-to-b from-purple-600 via-white to-cyan-100 origin-top z-40" />
                        )}
                    </div>
                </motion.div>

                <motion.div animate={{ opacity: stage === 'launch' ? 0 : 1, x: 1300 }} transition={{ duration: 6 }} className="absolute z-20">
                    <div className="relative w-[1400px] h-[1400px] rounded-full bg-[#cbd5e1] shadow-[inset_-100px_-100px_200px_rgba(0,0,0,0.9)] overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522030239044-1230198d0bc7?q=80&w=1974&auto=format&fit=crop')] bg-cover opacity-95" />
                    </div>
                </motion.div>
            </motion.div>

            <div className="absolute inset-0 z-50 pointer-events-none flex flex-col justify-center px-16 md:px-24">
                <div className="max-w-4xl text-left">
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-display font-bold leading-[1.1] tracking-tighter mb-8">
                        Beyond Earth.<br />
                        <span className="text-purple-500 bg-gradient-to-r from-purple-500 via-blue-400 to-indigo-500 bg-clip-text text-transparent italic">Beyond Limits.</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-lg md:text-xl text-slate-100/90 max-w-xl font-light">
                        Welcome to RESP – Humanity’s first asteroid mining dream begins here. Join the mission. Leave a legacy.
                    </motion.p>
                </div>
            </div>
            
            <div className="absolute bottom-16 left-16 md:left-24 z-50 pointer-events-none">
                <div className="flex items-center gap-5">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-[11px] font-mono text-white/95 uppercase tracking-[0.5em] font-bold notranslate" translate="no">
                        {stage === 'launch' ? "MISSION STATE: LEO ASCENT" : stage === 'transit' ? "MISSION STATE: TRANSLUNAR INJECTION" : "MISSION STATE: SURFACE EXTRACTION"}
                    </span>
                </div>
            </div>
        </div>
    );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMissionOpen, setIsMissionOpen] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<AsteroidAnalysis | null>(null);
  const [searchSeed, setSearchSeed] = useState("");
  
  const gemini = new MiningAnalysisService();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchSeed.trim()) return;
    setIsScanning(true);
    setScanResult(null);
    try {
      const result = await gemini.scanAsteroid(searchSeed.trim());
      setScanResult(result);
    } catch (err: any) {
      alert(err.message); // Temizlenmiş hata mesajı
    } finally { setIsScanning(false); }
  };

  const handleNavClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const roadmap: RoadmapItem[] = [
    { year: '2026', title: 'Community Formation', description: 'Establishment of the mining guild and DAO governance structure.', status: 'current' },
    { year: '2027', title: 'Micro-Mining Prototype', description: 'Initial drilling and extraction tests in low-gravity environments.', status: 'future' },
    { year: '2028', title: 'Simulation Testing', description: 'Comprehensive deep space mining and logistics simulations.', status: 'future' },
    { year: '2029', title: 'Orbital Deployment', description: 'Deployment of the first commercial asteroid mining station.', status: 'future' }
  ];

  const nftTiers = [
    { tier: 'Stellar Dust', icon: '✦', link: 'https://og.rarible.com/token/base/0x55a921a57f7f15df2f229ab9889506ca89310800:22376951541997075552095926033075579032637584999895204922044273269803719852037' },
    { tier: 'Core Initiate', icon: '◈', link: 'https://og.rarible.com/token/base/0x55a921a57f7f15df2f229ab9889506ca89310800:22376951541997075552095926033075579032637584999895204922044273269803719852036' },
    { tier: 'Orbit Vanguard', icon: '◆', link: 'https://og.rarible.com/token/base/0x55a921a57f7f15df2f229ab9889506ca89310800:22376951541997075552095926033075579032637584999895204922044273269803719852035', featured: true },
    { tier: "Founder's Circle", icon: '⬡', link: 'https://og.rarible.com/token/base/0x55a921a57f7f15df2f229ab9889506ca89310800:22376951541997075552095926033075579032637584999895204922044273269803719852034' }
  ];

  return (
    <div className="relative min-h-screen selection:bg-purple-500/30 overflow-x-hidden">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-3 border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-6 group">
            <div className="w-10 h-10 text-white"><RespLogo /></div>
            <span className="text-2xl font-display font-bold tracking-tighter uppercase notranslate" translate="no">RESP</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {['Roadmap', 'NFT Launch', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={(e) => handleNavClick(e, item.toLowerCase().replace(' ', '-'))} className="text-[10px] font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest">{item}</a>
            ))}
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-6 min-h-[80vh] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-12">
          <HyperRealisticSpaceMining />
          <div className="flex flex-col sm:flex-row gap-8 px-16 md:px-24 items-center">
              <button onClick={() => setIsMissionOpen(true)} className="bg-purple-600 hover:bg-purple-500 text-white px-12 py-5 rounded-3xl font-bold flex items-center gap-3 transition-all uppercase text-sm tracking-[0.2em] shadow-xl gpu-accelerated">Missions <ArrowRight className="w-4 h-4" /></button>
              <p className="text-slate-400 font-display font-medium text-lg md:text-2xl italic leading-tight">RESP is the foundation of interplanetary civilization.</p>
          </div>
        </div>
      </section>

      {/* Asteroid Scanner */}
      <section id="scanner" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="w-full lg:w-1/2 text-left">
              <span className="text-cyan-400 font-bold tracking-[0.5em] text-[10px] uppercase mb-6 block">Spectroscopic Acquisition</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Asteroid Scanner</h2>
              <form onSubmit={handleScan} className="relative group">
                <input type="text" value={searchSeed} onChange={(e) => setSearchSeed(e.target.value)} placeholder="Body Name (Psyche, Bennu...)" className="w-full bg-white/[0.03] border border-white/10 rounded-3xl py-6 px-8 text-white focus:outline-none focus:border-cyan-500/50" />
                <button type="submit" disabled={isScanning} className="absolute right-3 top-3 bottom-3 bg-cyan-500 text-black px-8 rounded-2xl font-bold transition-all hover:bg-cyan-400">{isScanning ? <Loader2 className="animate-spin w-5 h-5" /> : <Search className="w-5 h-5" />}</button>
              </form>
            </div>
            <div className="w-full lg:flex-1 min-h-[400px]">
              <AnimatePresence mode="wait">
                {isScanning ? (
                  <motion.div key="scanning" className="glass-panel h-full min-h-[400px] rounded-[3rem] flex flex-col items-center justify-center p-20"><Activity className="w-12 h-12 text-cyan-400 animate-pulse" /><p className="mt-8 text-cyan-400 font-mono text-[11px] tracking-[0.4em] uppercase">Recalibrating Satellites...</p></motion.div>
                ) : scanResult ? (
                  <motion.div key="result" className="glass-panel rounded-[3rem] p-12 text-left shadow-[0_0_100px_rgba(34,211,238,0.1)]">
                    <div className="flex justify-between mb-10"><div><h3 className="text-3xl font-display font-bold text-white mb-2">{scanResult.name}</h3><span className="bg-cyan-500/10 text-cyan-400 text-[10px] font-bold px-3 py-1 rounded-full">{scanResult.type}</span></div><div className="text-right"><span className="text-[10px] text-slate-500 uppercase block">Value</span><span className="text-3xl font-display font-bold text-green-400">{scanResult.estimatedValue}</span></div></div>
                    {scanResult.description && <p className="text-slate-400 text-sm mb-8 leading-relaxed italic">"{scanResult.description}"</p>}
                    <div className="grid grid-cols-2 gap-8">{scanResult.composition.map((comp, i) => (<div key={i}><div className="flex justify-between text-[11px] font-bold uppercase"><span className="text-white">{comp.material}</span><span className="text-cyan-400">{comp.percentage}%</span></div><div className="h-1 bg-white/5 rounded-full overflow-hidden mt-2"><motion.div initial={{ width: 0 }} animate={{ width: `${comp.percentage}%` }} transition={{ duration: 1.5 }} className="h-full bg-cyan-500" /></div></div>))}</div>
                  </motion.div>
                ) : <div className="glass-panel h-full min-h-[400px] rounded-[3rem] flex flex-col items-center justify-center p-20"><Target className="w-12 h-12 text-slate-800 mb-8" /><p className="text-slate-600 font-display uppercase tracking-[0.3em] text-[11px]">Awaiting Telemetry...</p></div>}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold mb-20 tracking-tighter">Strategic Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {roadmap.map((item, i) => (
              <motion.div key={i} className="glass-panel p-8 rounded-3xl text-left border-purple-500/10 hover:border-purple-500/30 transition-colors">
                <span className="text-purple-400 font-mono font-bold text-lg mb-4 block">{item.year}</span>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NFT Section */}
      <section id="nft-launch" className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold mb-20 tracking-tighter">Genesis Access NFTs</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {nftTiers.map((nft, i) => (
              <a key={i} href={nft.link} target="_blank" rel="noopener" className={`glass-panel p-10 rounded-[2.5rem] transition-all hover:bg-white/[0.02] flex flex-col items-center group ${nft.featured ? 'border-purple-500/40 bg-purple-500/5' : 'border-white/5'}`}>
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{nft.icon}</div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-[10px]">{nft.tier}</h4>
                <span className="text-slate-400 text-[9px] group-hover:text-purple-400 uppercase font-mono font-bold tracking-tighter">View on Rarible</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="pt-32 pb-16 border-t border-white/5 bg-[#020408]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-24 items-end">
            <div className="text-left">
              <h2 className="text-5xl font-display font-bold mb-8 tracking-tighter">Forge the Cosmos.</h2>
              <p className="text-slate-400 max-w-lg leading-relaxed font-light text-base">Join the interplanetary infrastructure network. Connect with our professional logistics vanguard.</p>
            </div>
            <div className="flex flex-wrap gap-5 md:justify-end">
              <a href="https://x.com/respspace" target="_blank" rel="noopener noreferrer" className="px-8 py-5 glass-panel rounded-3xl text-white hover:text-purple-400 transition-all hover:border-purple-500/40 flex items-center gap-3 uppercase text-[10px] font-bold tracking-widest bg-white/[0.02]">
                <Twitter className="w-4 h-4 text-white" /> Twitter
              </a>
              <a href="https://www.linkedin.com/in/resp-space-6a4908397" target="_blank" rel="noopener noreferrer" className="px-8 py-5 glass-panel rounded-3xl text-white hover:text-cyan-400 transition-all hover:border-cyan-500/40 flex items-center gap-3 uppercase text-[10px] font-bold tracking-widest bg-white/[0.02]">
                <Linkedin className="w-4 h-4 text-white" /> LinkedIn
              </a>
            </div>
          </div>

          <div className="flex justify-between items-center py-16 border-t border-white/5 text-slate-500 text-[9px] uppercase tracking-[0.4em]">
            <div className="flex items-center gap-3 font-display font-bold text-white text-2xl tracking-tighter normal-case">
              <div className="w-8 h-8 text-white"><RespLogo /></div><span className="ml-[-4px] notranslate" translate="no">RESP</span>
            </div>
            <p>© 2025 RESP. Deep Space Exploration & Extraction.</p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {isMissionOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-20">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsMissionOpen(false)} />
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="relative w-full max-w-6xl glass-panel border-purple-500/30 rounded-[3rem] p-12 overflow-hidden shadow-2xl bg-[#030508]/90">
                <button onClick={() => setIsMissionOpen(false)} className="absolute top-8 right-8 text-slate-500 hover:text-white"><X className="w-8 h-8" /></button>
                <div className="text-center">
                    <h3 className="text-5xl font-display font-bold text-white mb-10 uppercase tracking-tighter">Mission Briefing</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="glass-panel p-8 rounded-3xl border-purple-500/10">
                            <Rocket className="w-6 h-6 text-purple-400 mb-6" />
                            <h4 className="text-white font-bold mb-4 uppercase text-[10px] tracking-widest">Operation: OSIRIS-01</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">The first lunar surface extraction prototype. Testing Core Drill-X and stabilization systems.</p>
                        </div>
                        <div className="glass-panel p-8 rounded-3xl border-cyan-500/10">
                            <Database className="w-6 h-6 text-cyan-400 mb-6" />
                            <h4 className="text-white font-bold mb-4 uppercase text-[10px] tracking-widest">Protocol: SPECTRA</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">Live spectroscopic analysis of near-Earth asteroids using the AI Core.</p>
                        </div>
                        <div className="glass-panel p-8 rounded-3xl border-blue-500/10">
                            <Shield className="w-6 h-6 text-blue-400 mb-6" />
                            <h4 className="text-white font-bold mb-4 uppercase text-[10px] tracking-widest">Civ: RESP-DAO</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">Decentralized governance for interplanetary assets and voting.</p>
                        </div>
                    </div>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;