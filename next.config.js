/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensures static site export
  basePath: '/portfolio', // Subpath for GitHub Pages
  assetPrefix: '/portfolio/',
  trailingSlash: true, // Ensures proper folder structure for GitHub Pages
};

module.exports = nextConfig;
