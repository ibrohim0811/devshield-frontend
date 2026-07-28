/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Production build paytida TypeScript xatolarini e'tiborsiz qoldiradi
    ignoreBuildErrors: true,
  },
  eslint: {
    // ESLint xatolarini ham e'tiborsiz qoldiradi
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;