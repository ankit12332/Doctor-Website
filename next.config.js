/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove trailing slashes for static exports
  trailingSlash: false,
}

module.exports = nextConfig