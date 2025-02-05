/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.unsplash.com"], // Add Unsplash domain here
      },
      webpack: (config) => {
        config.module.rules.push({
          test: /\.md$/,
          use: 'raw-loader'
        });
        return config;
      }
    };


export default nextConfig;
