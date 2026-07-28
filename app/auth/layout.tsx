import React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#020205] text-white flex items-center justify-center relative overflow-hidden">
      {/* Background Neon Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      
      <main className="w-full max-w-md p-4 relative z-10">
        {children}
      </main>
    </div>
  );
}