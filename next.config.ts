import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  
  // If your repo is named "pyrux_portfolio", uncomment the following line:
  //basePath: '/pyrux_portfolio',

  // If it's a user repo (username.github.io), leave basePath commented out

  images: {
    unoptimized: true, // Required for static export
  },
};

export default withNextIntl(nextConfig);
