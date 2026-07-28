'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import {
    ShieldCheck, Cpu, Terminal, ArrowRight, Menu, X,
    CheckCircle2, Search, AlertTriangle, FileText, Play,
    UserPlus, Globe, BadgeCheck, Radar, FileSpreadsheet, Sparkles,
    Monitor, Code2, Check, Phone, MessageSquare
} from 'lucide-react';

export default function LandingPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    // 🌌 Interstellar Space Canvas Particle Effect
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const handleResize = () => {
            if (!canvas) return;
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        const stars = Array.from({ length: 140 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2,
            speedX: (Math.random() - 0.5) * 0.4,
            speedY: (Math.random() - 0.5) * 0.4,
            opacity: Math.random() * 0.8 + 0.2,
            pulse: Math.random() * 0.02 + 0.005,
        }));

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            stars.forEach((star) => {
                star.x += star.speedX;
                star.y += star.speedY;

                if (star.x < 0) star.x = width;
                if (star.x > width) star.x = 0;
                if (star.y < 0) star.y = height;
                if (star.y > height) star.y = 0;

                star.opacity += star.pulse;
                if (star.opacity > 0.9 || star.opacity < 0.2) {
                    star.pulse = -star.pulse;
                }

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 162, 255, ${star.opacity})`;
                ctx.shadowBlur = star.size * 4;
                ctx.shadowColor = '#0052FF';
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // 🖥 Terminal Auto-Typing Simulation
    const [terminalLogs, setTerminalLogs] = useState<string[]>([]);

    useEffect(() => {
        const logsList = [
            "[+] Target URL: https://example.com",
            "[+] Initializing DevGuard Scanner Engine v2.4...",
            "[+] Running Port Scan (Nmap)...",
            "[!] Open Ports Found: 80 (HTTP), 443 (HTTPS), 8080 (ALT-HTTP)",
            "[+] Running Web Vulnerability Analysis (Nikto)...",
            "[!] Header Warning: X-Frame-Options is missing!",
            "[+] Executing Nuclei CVE Templates (4,200+ rules)...",
            "[✓] Scan Completed! 0 Critical, 1 High, 2 Medium vulnerabilities found.",
            "[+] Generating AI Security Report PDF..."
        ];

        let currentStep = 0;
        const interval = setInterval(() => {
            if (currentStep < logsList.length) {
                const nextLog = logsList[currentStep];
                if (nextLog) {
                    setTerminalLogs((prev) => [...prev, nextLog]);
                }
                currentStep++;
            } else {
                setTerminalLogs([]);
                currentStep = 0;
            }
        }, 1800);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-[#020205] text-white relative overflow-x-hidden font-sans selection:bg-blue-500 selection:text-white">

            {/* 🌌 Interstellar Space Stars Canvas */}
            <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

            {/* 💡 Neon Glowing Background Orbs */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] rounded-full bg-blue-600/20 blur-[150px] animate-pulse" />
                <div className="absolute top-1/2 -left-20 w-[400px] sm:w-[750px] h-[400px] sm:h-[750px] rounded-full bg-indigo-600/15 blur-[160px]" />
                <div className="absolute -bottom-20 right-1/3 w-[300px] sm:w-[550px] h-[300px] sm:h-[550px] rounded-full bg-cyan-500/15 blur-[140px]" />
            </div>

            {/* 🌐 Header Navigation */}
            <header className="fixed top-0 left-0 w-full h-20 px-4 sm:px-8 md:px-16 flex items-center justify-between bg-[#030304]/70 backdrop-blur-2xl border-b border-white/10 z-50 transition-all">
                <Link href="/" className="z-50">
                    <Logo />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
                    <a href="#scan-services" className="hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all">Skaner Xizmatlari</a>
                    <a href="#workflow" className="hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all">Qanday ishlaydi?</a>
                    <a href="#demo" className="hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all">Terminal Demo</a>
                    <a href="#features" className="hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all">Imkoniyatlar</a>
                </nav>

                {/* Desktop Actions */}
                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="tel:+998908269007"
                        className="px-4 py-2.5 text-sm font-semibold rounded-full border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(0,82,255,0.3)] transition-all flex items-center gap-2"
                    >
                        <Phone size={16} /> +998 90 826 90 07
                    </a>

                    <Link href="/login" className="px-5 py-2.5 text-sm font-semibold rounded-full border border-white/10 hover:border-blue-500/50 hover:bg-white/5 transition-all">
                        Kirish
                    </Link>

                    <Link href="/register" className="px-5 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 shadow-[0_0_20px_rgba(0,82,255,0.6)] transition-all">
                        Ro'yxatdan o'tish
                    </Link>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden z-50 p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {/* 📱 Mobile Drawer Overlay */}
            <div className={`fixed inset-0 bg-[#030304]/95 backdrop-blur-2xl z-40 md:hidden flex flex-col justify-center items-center px-6 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <nav className="flex flex-col items-center gap-6 text-lg font-semibold text-slate-300 mb-8">
                    <a href="#scan-services" onClick={() => setMobileMenuOpen(false)}>Skaner Xizmatlari</a>
                    <a href="#workflow" onClick={() => setMobileMenuOpen(false)}>Qanday ishlaydi?</a>
                    <a href="#demo" onClick={() => setMobileMenuOpen(false)}>Terminal Demo</a>
                    <a href="#features" onClick={() => setMobileMenuOpen(false)}>Imkoniyatlar</a>
                </nav>

                <div className="flex flex-col w-full max-w-xs gap-3">
                    <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="w-full py-3 text-center font-semibold rounded-xl border border-white/10 bg-white/5">
                        Kirish
                    </Link>
                    <Link href="/register" onClick={() => setMobileMenuOpen(false)} className="w-full py-3 text-center font-semibold rounded-xl bg-blue-600 shadow-lg shadow-blue-600/30">
                        Ro'yxatdan o'tish
                    </Link>
                </div>
            </div>

            {/* 🚀 Hero Section */}
            <section className="relative z-10 pt-32 sm:pt-40 pb-12 sm:pb-16 px-4 text-center max-w-5xl mx-auto flex flex-col items-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-blue-500/30 text-xs font-semibold text-blue-400 mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(0,82,255,0.2)]">
                    <Sparkles size={14} className="text-blue-400 animate-spin" />
                    PREMIUM API & WEB SECURITY SCANNER
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.15]">
                    Veb-saytingiz xavfsizligini <br className="hidden sm:inline" />
                    <span className="bg-gradient-to-r from-white via-slate-100 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,82,255,0.4)]">
                        Real-Time rejimda tekshiring
                    </span>
                </h1>

                <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
                    DevGuard — Web ilovalar va API backend tizimlarini avtomatlashtirilgan kiberxavfsizlik skanerlash va monitoring qilishning zamonaviy ekotizimi.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Link href="/register" className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(0,82,255,0.5)] hover:shadow-[0_0_35px_rgba(0,82,255,0.8)] flex items-center justify-center gap-2 transition-all active:scale-95">
                        Skanerlashni boshlash <ArrowRight size={18} />
                    </Link>
                    <a href="#scan-services" className="px-8 py-4 rounded-full bg-white/[0.03] hover:bg-white/10 border border-white/10 hover:border-blue-500/50 text-white font-semibold text-sm sm:text-base backdrop-blur-md transition-all active:scale-95 flex items-center justify-center">
                        Jarayon bilan tanishish
                    </a>
                </div>
            </section>

            {/* 🔍 SCAN SERVICES SECTION (Siz Yuborgan Yangi Bo'lim) */}
            <section id="scan-services" className="relative z-10 py-16 px-4 max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-4xl font-bold mb-3">
                        Biz Nimalarni <span className="text-blue-500 drop-shadow-[0_0_12px_rgba(0,82,255,0.6)]">Skanerlaymiz?</span>
                    </h2>
                    <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
                        DevGuard professional yondashuv bilan saytingizning har bir qismini to'liq tekshiruvdan o'tkazadi.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Card 1: Web Sahifalar Skaneri */}
                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(0,82,255,0.25)] backdrop-blur-xl transition-all flex flex-col justify-between">
                        <div>
                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 shadow-[0_0_20px_rgba(0,82,255,0.3)]">
                                <Monitor size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Web Sahifalar Skaneri</h3>
                            <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                                Front-end va statik resurslarning xavfsizlik tahlili:
                            </p>

                            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                                <li className="flex items-start gap-3">
                                    <div className="p-1 rounded-full bg-blue-500/20 text-blue-400 mt-0.5">
                                        <Check size={14} />
                                    </div>
                                    <span>XSS (Cross-Site Scripting) zaifliklari tahlili</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="p-1 rounded-full bg-blue-500/20 text-blue-400 mt-0.5">
                                        <Check size={14} />
                                    </div>
                                    <span>Kutubxonalar va framework xatoliklari</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="p-1 rounded-full bg-blue-500/20 text-blue-400 mt-0.5">
                                        <Check size={14} />
                                    </div>
                                    <span>SSL/TLS sertifikat sertifikatsiyasi testi</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 2: API Backend Skaneri */}
                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] backdrop-blur-xl transition-all flex flex-col justify-between">
                        <div>
                            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                                <Code2 size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">API Backend Skaneri</h3>
                            <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                                Backend va API endpointlarning xavfsizlik holati tahlili:
                            </p>

                            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                                <li className="flex items-start gap-3">
                                    <div className="p-1 rounded-full bg-indigo-500/20 text-indigo-400 mt-0.5">
                                        <Check size={14} />
                                    </div>
                                    <span>REST va GraphQL API audit tekshiruvi</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="p-1 rounded-full bg-indigo-500/20 text-indigo-400 mt-0.5">
                                        <Check size={14} />
                                    </div>
                                    <span>SQL Injection va ma'lumot sizib chiqishi testi</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="p-1 rounded-full bg-indigo-500/20 text-indigo-400 mt-0.5">
                                        <Check size={14} />
                                    </div>
                                    <span>Avtorizatsiya (OAuth/JWT) xavfsizlik testlari</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            {/* 💻 Live Terminal Section */}
            <section id="demo" className="relative z-10 py-6 px-4 max-w-4xl mx-auto">
                <div className="rounded-2xl bg-[#070a12]/90 border border-blue-500/30 shadow-[0_0_30px_rgba(0,82,255,0.25)] backdrop-blur-xl overflow-hidden font-mono text-xs sm:text-sm">
                    <div className="px-4 py-3 bg-white/[0.03] border-b border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
                            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                        </div>
                        <span className="text-slate-400 text-[11px] font-medium tracking-wider">devguard-cli --live-scanner</span>
                        <div className="w-12" />
                    </div>

                    <div className="p-5 sm:p-6 h-64 sm:h-72 overflow-y-auto space-y-2.5 text-slate-300">
                        {terminalLogs.map((log, index) => {
                            if (!log) return null;
                            const isWarning = log.includes('[!]');
                            const isSuccess = log.includes('[✓]');
                            return (
                                <div key={index} className="flex items-start gap-2 leading-relaxed">
                                    <span className="text-blue-400 select-none drop-shadow-[0_0_5px_rgba(96,165,250,0.8)]">&gt;</span>
                                    <span className={isWarning ? 'text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]' : isSuccess ? 'text-green-400 font-bold drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]' : ''}>
                                        {log}
                                    </span>
                                </div>
                            );
                        })}
                        <div className="flex items-center gap-1 text-blue-500 animate-pulse pt-1">
                            <span>_</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🔄 5-Step Workflow Section */}
            <section id="workflow" className="relative z-10 py-20 px-4 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-4xl font-bold mb-3">
                        Tizim qanday <span className="text-blue-500 drop-shadow-[0_0_12px_rgba(0,82,255,0.6)]">ishlaydi?</span>
                    </h2>
                    <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
                        Atigi 5 ta oddiy qadam orqali veb-saytingiz xavfsizligini to'liq nazorat ostiga oling.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl relative group hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all">
                            <UserPlus size={22} />
                        </div>
                        <span className="text-[10px] font-extrabold tracking-wider text-blue-400 uppercase mb-1">1-Bosqich</span>
                        <h3 className="text-sm font-bold mb-2">Ro'yxatdan o'ting</h3>
                        <p className="text-slate-400 text-[11px] leading-relaxed">
                            Platformadan tezda hisob yarating va shaxsiy kabinetingizga kiring.
                        </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl relative group hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all">
                            <Globe size={22} />
                        </div>
                        <span className="text-[10px] font-extrabold tracking-wider text-indigo-400 uppercase mb-1">2-Bosqich</span>
                        <h3 className="text-sm font-bold mb-2">Saytni Qo'shing</h3>
                        <p className="text-slate-400 text-[11px] leading-relaxed">
                            Skanerlamoqchi bo'lgan domen yoki API backend URL manzilingizni kiriting.
                        </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl relative group hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all">
                            <BadgeCheck size={22} />
                        </div>
                        <span className="text-[10px] font-extrabold tracking-wider text-cyan-400 uppercase mb-1">3-Bosqich</span>
                        <h3 className="text-sm font-bold mb-2">Egalikni Tekshiring</h3>
                        <p className="text-slate-400 text-[11px] leading-relaxed">
                            Sayt haqiqatan sizniki ekanini tezkor metateg yoki TXT fayl orqali tasdiqlang.
                        </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl relative group hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all">
                            <Radar size={22} />
                        </div>
                        <span className="text-[10px] font-extrabold tracking-wider text-purple-400 uppercase mb-1">4-Bosqich</span>
                        <h3 className="text-sm font-bold mb-2">Skanerlang</h3>
                        <p className="text-slate-400 text-[11px] leading-relaxed">
                            Nmap, Nikto va Nuclei skanerlarini ishga tushiring va real-time kuzating.
                        </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl relative group hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all">
                            <FileSpreadsheet size={22} />
                        </div>
                        <span className="text-[10px] font-extrabold tracking-wider text-emerald-400 uppercase mb-1">5-Bosqich</span>
                        <h3 className="text-sm font-bold mb-2">Natijani Oling</h3>
                        <p className="text-slate-400 text-[11px] leading-relaxed">
                            A.I. tomonidan tayyorlangan batafsil xavfsizlik va yechimlar hisobotini oling.
                        </p>
                    </div>
                </div>
            </section>

            {/* 🛡️ Features Section */}
            <section id="features" className="relative z-10 py-12 px-4 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-4xl font-bold mb-3">
                        Nega aynan <span className="text-blue-500 drop-shadow-[0_0_12px_rgba(0,82,255,0.6)]">DevGuard</span>?
                    </h2>
                    <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
                        Ilg'or kiber-xavfsizlik vositalari va sun'iy intellekt bitta boshqaruv panelida.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(0,82,255,0.2)] backdrop-blur-xl transition-all">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 shadow-[0_0_12px_rgba(0,82,255,0.3)]">
                            <ShieldCheck size={26} />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Zaifliklarni Aniqla</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            XSS, SQLi va server konfiguratsion xatoliklarini o'z vaqtida va aniq topsangiz bo'ladi.
                        </p>
                    </div>

                    <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] backdrop-blur-xl transition-all">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 shadow-[0_0_12px_rgba(99,102,241,0.3)]">
                            <Terminal size={26} />
                        </div>
                        <h3 className="text-lg font-bold mb-2">WebSocket Stream</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            Saytingiz skanerlanayotgan vaqtda har bir paket harakatini jonli rejimda ko'ring.
                        </p>
                    </div>

                    <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] backdrop-blur-xl transition-all sm:col-span-2 lg:col-span-1">
                        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                            <Cpu size={26} />
                        </div>
                        <h3 className="text-lg font-bold mb-2">A.I. Analitika</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            Kod darajasidagi zaifliklarni bartaraf etish bo'yicha tayyor yechimlarga ega bo'lasiz.
                        </p>
                    </div>
                </div>
            </section>

            {/* 🦶 Footer */}
            {/* 🦶 Footer */}
            <footer className="relative z-10 border-t border-white/10 py-10 px-4 text-center bg-[#020205]/80 backdrop-blur-xl">
                <div className="flex flex-col items-center gap-5">
                    <Logo />

                    <p className="text-base font-extrabold text-slate-200 tracking-wide">
                        DevGuard <span className="text-blue-500 drop-shadow-[0_0_10px_rgba(0,82,255,0.8)]">by Ibrohim</span>
                    </p>

                    {/* Support Contact Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
                        <a
                            href="tel:+998908269007"
                            className="px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 text-xs sm:text-sm font-semibold text-slate-200 flex items-center gap-2 transition-all shadow-[0_0_10px_rgba(0,82,255,0.1)]"
                        >
                            <Phone size={16} className="text-blue-400" /> +998 90 826 90 07
                        </a>
                    </div>

                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()} Barcha huquqlar himoyalangan.
                    </p>
                </div>
            </footer>

        </div>
    );
}