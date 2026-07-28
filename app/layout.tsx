import type { Metadata } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'DevGuard - Cyber Security Scanner',
  description: 'Real-Time Web and API Vulnerability Scanner',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body className="antialiased bg-[#030304] text-white">
        {children}
      </body>
    </html>
  );
}