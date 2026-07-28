'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/Logo';
import { KeyRound, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function VerifyOtpPage() {
  const router = useRouter();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Keyingi inputga avtomatik o'tish
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpCode = otp.join('');
    if (otpCode.length < 6) return;

    setLoading(true);
    console.log('OTP Verification:', otpCode);

    // Tasdiqlangandan so'ng Dashboard'ga yo'naltiriladi
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard');
    }, 1200);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,82,255,0.15)] text-center">
      
      {/* Header / Logo */}
      <div className="flex flex-col items-center mb-6">
        <Link href="/" className="mb-4">
          <Logo />
        </Link>
        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3 shadow-[0_0_15px_rgba(0,82,255,0.3)]">
          <KeyRound size={24} />
        </div>
        <h2 className="text-2xl font-bold text-white">Kodni tasdiqlang</h2>
        <p className="text-xs text-slate-400 mt-1 max-w-xs">
          Email manzilingizga yuborilgan 6 xonali tasdiqlash kodini kiriting
        </p>
      </div>

      {/* OTP Inputs */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-center gap-2 sm:gap-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => { inputRefs.current[index] = el; }}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-11 h-12 sm:w-12 sm:h-14 text-center text-xl font-bold bg-white/[0.03] border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          ))}
        </div>

        <button
          type="submit"
          disabled={loading || otp.join('').length < 6}
          className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 font-semibold text-sm text-white shadow-[0_0_20px_rgba(0,82,255,0.4)] flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50"
        >
          {loading ? 'Tasdiqlanmoqda...' : 'Tasdiqlash'} <CheckCircle2 size={18} />
        </button>
      </form>

      {/* Resend OTP */}
      <div className="mt-6 text-xs text-slate-400">
        Kod kelmadimi?{' '}
        <button type="button" className="text-blue-400 hover:underline font-semibold">
          Qayta yuborish
        </button>
      </div>

    </div>
  );
}