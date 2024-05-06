// next.config.mjs

const nextConfig = {
  experimental: {
    serverComponents: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: [
      "img.clerk.com",
      "images.clerk.dev",
      "uploadthing.com",
      "placehold.co",
    ],
  },
};

export default nextConfig;
