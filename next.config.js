/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'media.istockphoto.com' },
      { protocol: 'https', hostname: 'media.gettyimages.com' },
      { protocol: 'https', hostname: 'www.researchgate.net' },
      { protocol: 'https', hostname: 'media.geeksforgeeks.org' },
      { protocol: 'https', hostname: 'www.opsmx.com' },
      { protocol: 'https', hostname: 'miro.medium.com' },
      { protocol: 'https', hostname: 'miro.com' },
      { protocol: 'https', hostname: 'www.evolution-design.info' },
      { protocol: 'https', hostname: 'c8.alamy.com' },
      { protocol: 'https', hostname: 'www.hlw.com' },
      { protocol: 'https', hostname: '**' }, // Allows any other (safe for now)
    ],
  },
};

module.exports = nextConfig;