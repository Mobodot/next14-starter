/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  env: {
    MONGO:
      "mongodb+srv://testUser:testUser@cluster0.qskldwj.mongodb.net/nextJs14-practice?retryWrites=true&w=majority&appName=Cluster0",
    // AUTH_SECRET: "fadasdfefeaf",
    // AUTH_URL: "http://localhost:3000/api/auth",
    // GITHUB_ID: "Ov23li8wIOcbOTykYr7t",
    // GITHUB_SECRET: "7323a75721efdb13212e06ba4dfb157c287b0b5f",
  },
};

module.exports = nextConfig;
