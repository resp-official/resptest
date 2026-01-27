import React, { useState, useEffect } from 'react';
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
import { ethers } from 'ethers';
import { MiningAnalysisService } from './services/geminiService';
import { AsteroidAnalysis, RoadmapItem } from './types';

const RECIPIENT_ADDRESS = "0x3178e7DEEE9E0F733d7fc3DCA84Ea791aC6bd4c0";

const RespLogo = ({ className = "w-full h-full", strokeWidth = 16 }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    stroke="currentColor" 
    strokeWidth={strokeWidth} 
    strokeLinecap="square" 
    strokeLinejoin="miter"
  >
    {/* Sol Parça: Sola bakan V (<), açık ucu sağa (merkeze) bakar */}
    <path d="M 35 25 L 10 50 L 35 75" />
    {/* Sağ Parça: Sağa bakan V (>), açık ucu sola (merkeze) bakar */}
    <path d="M 65 25 L 90 50 L 65 75" />
  </svg>
);

const HyperRealisticSpaceMining = () => {
    const [stage, setStage] = useState<'launch' | 'transit' | 'extraction'>('launch');
    
    useEffect(() => {
        const sequence = async () => {
            setStage('launch');
            await new Promise(r => setTimeout(r, 8000));
            setStage('transit');
            await new Promise(r => setTimeout(r, 8000));
            setStage('extraction');
            await new Promise(r => setTimeout(r, 12000));
        };
        const interval = setInterval(sequence, 28000);
        sequence();
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[700px] flex items-center justify-center overflow-hidden rounded-[3rem] bg-[#02040a] shadow-[0_0_150px_rgba(0,0,0,1)] border border-white/5">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-[#010204]" />
                {[...Array(80)].map((_, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: Math.random() }}
                        animate={{ opacity: [0.1, 0.8, 0.1] }}
                        transition={{ duration: Math.random() * 4 + 2, repeat: Infinity }}
                        className="absolute w-[1.5px] h-[1.5px] bg-white rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            boxShadow: '0 0 4px rgba(255,255,255,0.6)'
                        }}
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
            </div>

            <motion.div 
                animate={{ 
                    scale: stage === 'launch' ? 0.95 : stage === 'transit' ? 0.75 : 2.6,
                    x: stage === 'launch' ? -150 : stage === 'transit' ? -200 : -750,
                    y: stage === 'launch' ? 120 : stage === 'transit' ? 0 : 280,
                }}
                transition={{ duration: 8, ease: [0.4, 0, 0.2, 1] }}
                className="relative w-full h-full flex items-center justify-center"
            >
                <motion.div 
                    animate={{ 
                        opacity: stage === 'extraction' ? 0 : 1,
                        filter: stage === 'transit' ? 'blur(10px)' : 'blur(0px)'
                    }}
                    transition={{ duration: 3 }}
                    className="absolute z-10"
                >
                    <div className="relative w-[1150px] h-[1150px] rounded-full shadow-[inset_-120px_-120px_220px_rgba(0,0,0,0.98),0_0_120px_rgba(34,211,238,0.1)] overflow-hidden">
                        <div className="absolute inset-0 border-[30px] border-cyan-400/5 rounded-full blur-[20px] z-20" />
                        <motion.div 
                            animate={{ backgroundPositionX: ['0%', '100%'] }}
                            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-[#020617] bg-[url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-repeat-x opacity-95"
                            style={{ backgroundSize: '200% 100%' }}
                        />
                        <div className="absolute inset-0 shadow-[inset_0_0_250px_rgba(0,0,0,1)] z-10" />
                    </div>
                </motion.div>

                <motion.div 
                    animate={{ 
                        x: stage === 'launch' ? 0 : stage === 'transit' ? 750 : 1350,
                        y: stage === 'launch' ? -350 : stage === 'transit' ? -180 : -60,
                        rotate: stage === 'launch' ? 38 : stage === 'transit' ? 12 : 0,
                        scale: stage === 'extraction' ? 0.18 : 1.25
                    }}
                    transition={{ duration: stage === 'launch' ? 1 : 8, ease: "easeInOut" }}
                    className="absolute z-30"
                >
                    <div className="relative flex flex-col items-center">
                        <div className="relative w-80 h-40">
                            <div className="w-full h-full bg-[#1e293b] rounded-2xl shadow-[0_60px_120px_rgba(0,0,0,0.95)] relative border-l-[20px] border-[#475569] border-t-[1px] border-white/5 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/70" />
                                <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                                <div className="absolute top-4 left-6 right-6 h-1/2 border border-white/5 rounded-xl flex gap-1.5 p-2">
                                    <div className="flex-1 bg-black/50 rounded-md" />
                                    <div className="flex-1 bg-black/50 rounded-md" />
                                    <div className="flex-1 bg-black/50 rounded-md" />
                                </div>
                                <div className="absolute bottom-5 right-6 w-16 h-8 bg-red-600/5 border border-red-500/20 rounded-md animate-pulse" />
                            </div>

                            <div className="absolute -left-24 top-0 bottom-0 w-24 flex flex-col justify-between py-5">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="relative h-7 w-full flex items-center justify-end">
                                        <motion.div 
                                            animate={{ 
                                                width: [70, 260, 70], 
                                                opacity: [0.6, 1, 0.6],
                                                filter: ['blur(8px)', 'blur(20px)', 'blur(8px)']
                                            }}
                                            transition={{ duration: 0.1, repeat: Infinity, delay: i * 0.03 }}
                                            className="h-12 bg-gradient-to-r from-transparent via-cyan-400 to-white rounded-full origin-right"
                                        />
                                        <motion.div 
                                            animate={{ width: [40, 180, 40], opacity: [0.8, 1, 0.8] }}
                                            transition={{ duration: 0.08, repeat: Infinity }}
                                            className="absolute h-5 bg-gradient-to-r from-orange-400 to-white blur-[5px] rounded-full origin-right"
                                        />
                                        <div className="absolute right-0 w-12 h-full bg-[#334155] rounded-l-xl border-r-[8px] border-[#0f172a]" />
                                    </div>
                                ))}
                            </div>

                            <div className="absolute -top-20 left-28 w-6 h-24 bg-[#334155] rounded-full border-b-[12px] border-[#0f172a] shadow-2xl" />
                            <div className="absolute -bottom-20 left-28 w-6 h-24 bg-[#334155] rounded-full border-t-[12px] border-[#0f172a] shadow-2xl" />
                            <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-20 h-24 bg-[#0f172a] rounded-2xl border-r-[10px] border-slate-700 shadow-[0_30px_60px_rgba(0,0,0,0.8)]" />
                        </div>

                        {stage === 'extraction' && (
                            <motion.div 
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                className="absolute top-20 left-72 w-6 h-[650px] bg-gradient-to-b from-purple-700 via-white to-cyan-200 shadow-[0_0_120px_rgba(168,85,247,1)] origin-top z-40"
                            >
                                <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 0.05, repeat: Infinity }} className="w-full h-full bg-white/50 blur-[10px]" />
                                <motion.div 
                                    animate={{ scale: [1, 6, 1], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 0.12, repeat: Infinity }}
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-white rounded-full blur-[60px]"
                                />
                            </motion.div>
                        )}
                    </div>
                </motion.div>

                <motion.div 
                    animate={{ 
                        opacity: stage === 'launch' ? 0 : 1,
                        x: 1450
                    }}
                    transition={{ duration: 8 }}
                    className="absolute z-20"
                >
                    <div className="relative w-[1500px] h-[1500px] rounded-full bg-[#cbd5e1] shadow-[inset_-140px_-140px_300px_rgba(0,0,0,1),0_0_150px_rgba(0,0,0,0.6)] overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522030239044-1230198d0bc7?q=80&w=1974&auto=format&fit=crop')] bg-cover opacity-98 mix-blend-multiply scale-110" />
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rocky-wall.png')] opacity-80" />
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 border-[15px] border-purple-500/10 rounded-full flex items-center justify-center">
                            <motion.div 
                                animate={{ scale: [1, 1.6, 1], opacity: [0.1, 0.9, 0.1] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="w-14 h-14 bg-purple-500 rounded-full shadow-[0_0_100px_rgba(168,85,247,1)]"
                            />
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <div className="absolute inset-0 z-50 pointer-events-none flex flex-col justify-center px-16 md:px-24">
                <div className="absolute top-16 left-16 md:left-24">
                   <motion.span 
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-purple-400 text-xs md:text-sm font-bold tracking-[0.9em] uppercase font-display drop-shadow-[0_4px_12px_rgba(0,0,0,1)]"
                    >
                        DEEP SPACE MINING
                    </motion.span>
                </div>
                <div className="max-w-4xl text-left">
                    <motion.h1 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        className="text-4xl md:text-6xl font-display font-bold leading-[1.1] tracking-tighter mb-8 drop-shadow-2xl"
                    >
                        Beyond Earth.<br />
                        <span className="text-purple-500 bg-gradient-to-r from-purple-500 via-blue-400 to-indigo-500 bg-clip-text text-transparent italic drop-shadow-[0_15px_40px_rgba(168,85,247,0.3)]">
                            Beyond Limits.
                        </span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="text-lg md:text-xl text-slate-100/90 max-w-xl leading-relaxed font-light drop-shadow-[0_6px_15px_rgba(0,0,0,1)]"
                    >
                        Welcome to RESP – Humanity’s first asteroid mining dream begins here. Join the mission. Leave a legacy.
                    </motion.p>
                </div>
            </div>

            <div className="absolute bottom-16 left-16 md:left-24 z-50 pointer-events-none">
                <div className="flex items-start flex-col gap-2.5">
                    <div className="flex items-center gap-5">
                        <div className="w-3.5 h-3.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_25px_rgba(34,211,238,1)]" />
                        <span className="text-[13px] font-mono text-white/95 uppercase tracking-[0.6em] font-bold drop-shadow-lg">
                            {stage === 'launch' && "MISSION STATE: LEO ASCENT"}
                            {stage === 'transit' && "MISSION STATE: TRANSLUNAR INJECTION"}
                            {stage === 'extraction' && "MISSION STATE: SURFACE EXTRACTION"}
                        </span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 tracking-[0.5em] uppercase ml-8 bg-black/40 px-3 py-1 rounded backdrop-blur-sm">
                        TARGET: MOON // VESSEL: RESP-OSIRIS-01
                    </span>
                </div>
            </div>

            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_left,transparent_50%,rgba(0,0,0,0.92)_100%)]" />
            <div className="absolute inset-0 pointer-events-none opacity-[0.1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
            <div className="absolute inset-0 pointer-events-none border-[1px] border-white/10 rounded-[3rem]" />
        </div>
    );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMissionOpen, setIsMissionOpen] = useState(false);
  
  const [account, setAccount] = useState<string | null>(null);
  const [isMinting, setIsMinting] = useState<string | null>(null); 
  const [txHash, setTxHash] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Scanner States
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<AsteroidAnalysis | null>(null);
  const [searchSeed, setSearchSeed] = useState("");
  const gemini = new MiningAnalysisService();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const connectWallet = async () => {
    setError(null);
    if (typeof (window as any).ethereum !== 'undefined') {
      try {
        const provider = new ethers.BrowserProvider((window as any).ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);
      } catch (err: any) {
        setError("Connection rejected.");
      }
    } else {
      alert("Install MetaMask to access the RESP Protocol.");
    }
  };

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchSeed.trim()) return;
    setIsScanning(true);
    setScanResult(null);
    try {
      const result = await gemini.scanAsteroid(searchSeed.trim());
      setScanResult(result);
    } catch (err) {
      console.error(err);
      alert("Celestial body analysis failed. Target may be out of range or unknown.");
    } finally {
      setIsScanning(false);
    }
  };

  const handleMint = async (tier: string, ethPrice: string) => {
    setError(null);
    if (!account) { await connectWallet(); return; }
    setIsMinting(tier);
    setTxHash(null);
    try {
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const signer = await provider.getSigner();
      const tx = await signer.sendTransaction({ to: RECIPIENT_ADDRESS, value: ethers.parseEther(ethPrice) });
      await tx.wait();
      setTxHash(tx.hash);
      setIsMinting(null);
    } catch (err: any) {
      setError(err.reason || err.message || "Mint failed.");
      setIsMinting(null);
    }
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
    { tier: 'Stellar Dust', price: '0.001', icon: '✦', ethLabel: '0.001 ETH' },
    { tier: 'Core Initiate', price: '0.005', icon: '◈', ethLabel: '0.005 ETH' },
    { tier: 'Orbit Vanguard', price: '0.1', icon: '◆', ethLabel: '0.1 ETH', featured: true },
    { tier: "Founder's Circle", price: '0.5', icon: '⬡', ethLabel: '0.5 ETH' }
  ];

  return (
    <div className="relative min-h-screen selection:bg-purple-500/30">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 nebula-glow rounded-full" />
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-cyan-600/10 nebula-glow rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" onClick={(e) => handleNavClick(e, 'root')} className="flex items-center gap-6 group">
            <div className="w-10 h-10 flex items-center justify-center text-white transition-transform group-hover:scale-110">
              <RespLogo strokeWidth={16} />
            </div>
            <span className="text-2xl font-display font-bold tracking-tighter uppercase ml-[-4px]">RESP</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {['Roadmap', 'NFT Launch', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                onClick={(e) => handleNavClick(e, item.toLowerCase().replace(' ', '-'))}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors uppercase tracking-widest text-[10px]"
              >
                {item}
              </a>
            ))}
            <button onClick={connectWallet} className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] font-bold tracking-[0.2em] transition-all transform active:scale-95 uppercase ${account ? 'bg-purple-500/10 border border-purple-500/30 text-purple-400' : 'bg-white text-black hover:bg-purple-500 hover:text-white'}`}>
              <Wallet className="w-3 h-3" />
              {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect Wallet'}
            </button>
          </div>
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-6 min-h-[80vh] flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-12">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="relative z-10 w-full">
             <HyperRealisticSpaceMining />
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 justify-start items-center px-16 md:px-24">
              <button onClick={() => setIsMissionOpen(true)} className="bg-purple-600 hover:bg-purple-500 text-white px-12 py-5 rounded-3xl font-bold flex items-center justify-center gap-3 group transition-all shadow-[0_10px_50px_rgba(168,85,247,0.4)] uppercase text-sm tracking-[0.2em] shrink-0">
                Missions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-slate-400 font-display font-medium tracking-tight text-lg sm:text-xl md:text-2xl italic leading-tight"
              >
                RESP is the foundation of interplanetary civilization.
              </motion.p>
          </div>
        </div>
      </section>

      {/* Asteroid Scanner Section */}
      <section id="scanner" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="w-full lg:w-1/2">
              <span className="text-cyan-400 font-bold tracking-[0.5em] text-[10px] uppercase font-mono mb-6 block">Spectroscopic Acquisition</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 tracking-tighter">Asteroid Scanner</h2>
              <p className="text-slate-400 font-light leading-relaxed mb-12 max-w-lg">
                Enter target designation or planetary name to initialize deep-space spectroscopic analysis powered by the RESP AI Core and live research telemetry.
              </p>
              
              <form onSubmit={handleScan} className="relative group">
                <input 
                  type="text" 
                  value={searchSeed}
                  onChange={(e) => setSearchSeed(e.target.value)}
                  placeholder="Body Name (e.g. Psyche, Bennu, Ceres)..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-3xl py-6 px-8 text-white focus:outline-none focus:border-cyan-500/50 transition-all font-display text-lg tracking-wide placeholder:text-slate-600"
                />
                <button 
                  type="submit" 
                  disabled={isScanning}
                  className="absolute right-3 top-3 bottom-3 bg-cyan-500 hover:bg-cyan-400 text-black px-8 rounded-2xl flex items-center justify-center gap-3 font-bold transition-all disabled:opacity-50"
                >
                  {isScanning ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
                  {isScanning ? 'Analyzing...' : 'Analyze'}
                </button>
              </form>

              <div className="mt-12 flex gap-10">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Scientific Grounding</span>
                  <span className="text-white font-display font-bold text-2xl uppercase">Verified</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Real-world Telemetry</span>
                  <span className="text-cyan-400 font-display font-bold text-2xl uppercase">Linked</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:flex-1 relative min-h-[500px]">
              <AnimatePresence mode="wait">
                {isScanning ? (
                  <motion.div 
                    key="scanning"
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center glass-panel rounded-[3rem] border-cyan-500/20 overflow-hidden"
                  >
                    <div className="scanline absolute inset-0 z-0" />
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="relative z-10 w-32 h-32 border-2 border-dashed border-cyan-500/40 rounded-full flex items-center justify-center"
                    >
                      <Activity className="w-10 h-10 text-cyan-400 animate-pulse" />
                    </motion.div>
                    <p className="mt-8 text-cyan-400 font-mono text-sm tracking-[0.4em] uppercase animate-pulse relative z-10">Cross-referencing Global Datasets...</p>
                  </motion.div>
                ) : scanResult ? (
                  <motion.div 
                    key="result"
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="glass-panel rounded-[3rem] p-10 md:p-12 border-cyan-500/30 shadow-[0_0_100px_rgba(34,211,238,0.1)] text-left"
                  >
                    <div className="flex justify-between items-start mb-10">
                      <div>
                        <h3 className="text-3xl font-display font-bold text-white mb-2">{scanResult.name}</h3>
                        <span className="bg-cyan-500/10 text-cyan-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{scanResult.type}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-slate-500 font-mono uppercase block mb-1">Estimated Value</span>
                        <span className="text-3xl font-display font-bold text-green-400 tracking-tighter">{scanResult.estimatedValue}</span>
                      </div>
                    </div>

                    <div className="mb-10 p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                       <p className="text-slate-400 text-sm italic font-light leading-relaxed">{scanResult.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mb-10">
                      <div>
                        <span className="text-[10px] text-slate-500 font-mono uppercase block mb-4">Known Composition</span>
                        <div className="space-y-4">
                          {scanResult.composition.map((comp, i) => (
                            <div key={i} className="space-y-1.5">
                              <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest">
                                <span className="text-white">{comp.material}</span>
                                <span className="text-cyan-400">{comp.percentage}%</span>
                              </div>
                              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: `${comp.percentage}%` }}
                                  transition={{ duration: 1, delay: i * 0.1 }}
                                  className="h-full bg-cyan-500"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-center p-8 bg-cyan-500/5 rounded-3xl border border-cyan-500/10">
                         <span className="text-[10px] text-slate-500 font-mono uppercase block mb-6">Exploitation Risk</span>
                         <div className="relative w-24 h-24 flex items-center justify-center">
                            <div className={`text-xl font-display font-bold uppercase tracking-widest ${
                              scanResult.miningDifficulty === 'Low' ? 'text-green-400' :
                              scanResult.miningDifficulty === 'Medium' ? 'text-yellow-400' :
                              scanResult.miningDifficulty === 'High' ? 'text-orange-400' : 'text-red-500'
                            }`}>
                              {scanResult.miningDifficulty}
                            </div>
                            <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full animate-ping opacity-20" />
                         </div>
                      </div>
                    </div>

                    <button className="w-full py-5 bg-white text-black rounded-2xl font-bold flex items-center justify-center gap-3 uppercase text-[10px] tracking-[0.2em] hover:bg-cyan-500 transition-colors">
                       <Box className="w-4 h-4" /> Save Findings to Protocol
                    </button>
                  </motion.div>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center border border-white/5 bg-white/[0.01] rounded-[3rem]">
                    <Target className="w-16 h-16 text-slate-800 mb-8" />
                    <p className="text-slate-600 font-display uppercase tracking-[0.3em] text-sm">Awaiting Target Designation...</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Details Overlay */}
      <AnimatePresence>
          {isMissionOpen && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-20">
                  <motion.div initial={{ opacity: 0, backdropFilter: 'blur(0px)' }} animate={{ opacity: 1, backdropFilter: 'blur(40px)' }} exit={{ opacity: 0, backdropFilter: 'blur(0px)' }} onClick={() => setIsMissionOpen(false)} className="absolute inset-0 bg-black/80" />
                  <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="relative w-full max-w-6xl glass-panel border-purple-500/30 rounded-[3rem] overflow-hidden shadow-[0_0_150px_rgba(139,92,246,0.2)] flex flex-col md:flex-row h-full max-h-[85vh]">
                      <div className="w-full md:w-1/3 bg-purple-600/5 p-10 border-r border-white/5 flex flex-col justify-between text-left">
                          <div>
                              <div className="w-16 h-16 text-white mb-10">
                                  <RespLogo strokeWidth={12} />
                              </div>
                              <h3 className="text-4xl font-display font-bold text-white mb-6 uppercase tracking-tighter">Mission Briefing</h3>
                              <p className="text-slate-400 text-sm font-light leading-relaxed">Directive Alpha: Establish decentralized sovereignty over extraterrestrial resources.</p>
                          </div>
                          <div className="pt-10 space-y-4">
                              <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                                  <Shield className="w-4 h-4 text-purple-500" /> SECURED DATA LINK
                              </div>
                              <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                                  <Rocket className="w-4 h-4 text-cyan-500" /> ACTIVE DEPLOYMENT
                              </div>
                          </div>
                      </div>
                      <div className="flex-1 p-10 md:p-16 overflow-y-auto text-left relative">
                          <button onClick={() => setIsMissionOpen(false)} className="absolute top-8 right-8 text-slate-500 hover:text-white transition-colors z-[110]">
                              <X className="w-8 h-8" />
                          </button>
                          <div className="space-y-16">
                              <section>
                                  <h4 className="text-[10px] font-bold text-purple-500 uppercase tracking-[0.5em] mb-6 font-mono">01. The Prime Directive</h4>
                                  <p className="text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                                      RESP is the foundation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">interplanetary civilization.</span>
                                  </p>
                                  <p className="text-slate-400 mt-8 leading-relaxed font-light text-lg">
                                      Earth's resources are finite. Scarcity of materials like Helium-3 and rare isotopes is the bottleneck of human evolution. RESP decentralizes the ownership of the first celestial resource treasury.
                                  </p>
                              </section>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                  <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 transition-colors">
                                      <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
                                          <Globe className="text-purple-400 w-6 h-6" />
                                      </div>
                                      <h5 className="font-bold text-white mb-3 uppercase text-xs tracking-widest">Planetary Guard</h5>
                                      <p className="text-slate-500 text-sm leading-relaxed font-light">Cease the ecological destruction caused by deep-earth extraction.</p>
                                  </div>
                                  <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-colors">
                                      <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6">
                                          <Cpu className="text-cyan-400 w-6 h-6" />
                                      </div>
                                      <h5 className="font-bold text-white mb-3 uppercase text-xs tracking-widest">AI Analytics</h5>
                                      <p className="text-slate-500 text-sm leading-relaxed font-light">Every cluster scan is processed and validated by our proprietary artificial intelligence core and recorded on the protocol ledger.</p>
                                  </div>
                              </div>
                              <div className="pt-8 border-t border-white/5">
                                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.5em] mb-10 font-mono">Active Target Acquisition</h4>
                                  <div className="flex flex-col md:flex-row gap-8 items-center bg-purple-500/5 p-8 rounded-3xl border border-purple-500/10">
                                      <div className="w-24 h-24 rounded-full bg-[#cbd5e1] shadow-[0_0_50px_rgba(34,211,238,0.2)] overflow-hidden shrink-0">
                                          <img src="https://images.unsplash.com/photo-1522030239044-1230198d0bc7?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-50" />
                                      </div>
                                      <div>
                                          <p className="text-white font-bold mb-2 uppercase text-xs tracking-widest">Sector: Lunar South Pole (Shackleton)</p>
                                          <p className="text-slate-500 text-sm font-light">Initial focus area for high-density water-ice extraction. Estimated capacity: 10M Metric Tons.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </motion.div>
              </motion.div>
          )}
      </AnimatePresence>

      <section id="roadmap" className="py-32 px-6 relative overflow-hidden bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Roadmap</h2>
            <p className="text-slate-400 mt-6 max-w-2xl mx-auto font-light text-sm">Mapping the path from architecture to planetary-scale acquisition.</p>
          </div>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent md:-translate-x-1/2" />
            <div className="space-y-16">
              {roadmap.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`relative flex flex-col md:flex-row gap-10 items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="absolute left-0 md:left-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full md:-translate-x-1/2 shadow-[0_0_20px_rgba(139,92,246,0.3)] border-4 border-black" />
                  <div className="flex-1 md:text-right w-full">
                    <div className={i % 2 === 0 ? 'md:pr-16 text-right' : 'md:pl-16 md:text-left text-left'}>
                      <span className="text-purple-500 font-display font-bold text-2xl tracking-tighter mb-2 block">{item.year}</span>
                      <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase tracking-widest">{item.title}</h3>
                      <p className="text-slate-400 text-sm font-light leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="nft-launch" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-20">
            <span className="text-purple-500 font-bold tracking-[0.4em] text-[10px] uppercase font-mono mb-4 block">Capital Allocation</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Treasury Matrix</h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light">Secure your license and fund the vanguard. 100% of proceeds go to the mission core.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nftTiers.map((nft, i) => (
              <div key={i} className={`relative group p-10 rounded-[2.5rem] border transition-all duration-500 ${nft.featured ? 'bg-purple-600/5 border-purple-500 shadow-2xl shadow-purple-500/10' : 'bg-white/[0.02] border-white/10 hover:border-white/30'}`}>
                {nft.featured && <span className="absolute top-6 right-6 bg-purple-500 text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg shadow-purple-500/20">Vanguard</span>}
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform inline-block">{nft.icon}</div>
                <h3 className="text-2xl font-display font-bold mb-3">{nft.tier}</h3>
                <div className="text-4xl font-display font-bold text-white mb-10 tracking-tight">{nft.ethLabel}</div>
                <button onClick={() => handleMint(nft.tier, nft.price)} disabled={!!isMinting} className={`w-full py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 uppercase text-[10px] tracking-[0.2em] ${nft.featured ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-xl shadow-purple-500/30' : 'bg-white text-black hover:bg-slate-200'} disabled:opacity-50`}>
                  {isMinting === nft.tier ? <><Loader2 className="w-4 h-4 animate-spin" /> Transmitting...</> : <><Zap className="w-4 h-4" /> Initialize Mint</>}
                </button>
              </div>
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
              <a href="https://x.com/respspace" target="_blank" rel="noopener noreferrer" className="px-8 py-5 glass-panel rounded-3xl hover:text-purple-400 transition-all hover:border-purple-500/40 flex items-center gap-3 uppercase text-[10px] font-bold tracking-widest">
                <Twitter className="w-4 h-4" /> Twitter
              </a>
              <a href="https://www.linkedin.com/in/resp-space-6a4908397" target="_blank" rel="noopener noreferrer" className="px-8 py-5 glass-panel rounded-3xl hover:text-cyan-400 transition-all hover:border-cyan-500/40 flex items-center gap-3 uppercase text-[10px] font-bold tracking-widest">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/5 text-slate-500 text-[9px] gap-10 font-mono uppercase tracking-[0.4em]">
            <div className="flex items-center gap-3 font-display font-bold text-white text-2xl tracking-tighter normal-case">
              <div className="w-8 h-8 text-white">
                <RespLogo strokeWidth={16} />
              </div>
              <span className="ml-[-4px]">RESP</span>
            </div>
            <p>© 2025 RESP. Deep Space Exploration & Extraction.</p>
            <div className="flex gap-10">
              <a href={`https://etherscan.io/address/${RECIPIENT_ADDRESS}`} target="_blank" className="hover:text-white transition-colors flex items-center gap-2">Protocol Treasury: {RECIPIENT_ADDRESS.slice(0,10)}... <ExternalLink className="w-3 h-3" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;