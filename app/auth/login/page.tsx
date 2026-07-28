'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Auth backend API integratsiyasi shu yerda bo'ladi
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,82,255,0.15)]">
      
      {/* Header / Logo */}
      <div className="flex flex-col items-center mb-8">
        <Link href="/" className="mb-4">
          <Logo />
        </Link>
        <h2 className="text-2xl font-bold text-white">Xush kelibsiz!</h2>
        <p className="text-xs text-slate-400 mt-1">DevGuard tizimiga kirish uchun ma'lumotlarni kiriting</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email manzil</label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@devguard.uz"
              className="w-full pl-10 pr-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">Parol</label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full pl-10 pr-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 font-semibold text-sm text-white shadow-[0_0_20px_rgba(0,82,255,0.4)] flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50 mt-2"
        >
          {loading ? 'Kirilmoqda...' : 'Kirish'} <ArrowRight size={18} />
        </button>
      </form>

      {/* Register Redirect */}
      <div className="text-center mt-6 text-xs text-slate-400">
        Hisobingiz yo'qmi?{' '}
        <Link href="/auth/register" className="text-blue-400 hover:underline font-semibold">
          Ro'yxatdan o'ting
        </Link>
      </div>

    </div>
  );
}