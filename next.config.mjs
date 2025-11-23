import yaml from 'js-yaml';
import fs from 'fs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'api.mcheads.org',
        protocol: 'https',
      },
      {
        hostname: 'via.placeholder.com',
        protocol: 'https',
      },
      {
        hostname: 'i.imgur.com',
        protocol: 'https',
      },
      {
        hostname: 'imgur.com',
        protocol: 'https',
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'js-yaml-loader',
    });
    return config;
  },
};

export default nextConfig;
