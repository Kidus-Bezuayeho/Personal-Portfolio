/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',              // next build writes static site to ./out
  images: { unoptimized: true }, // required if you use next/image on static export
};
export default nextConfig;       // or: module.exports = nextConfig;
