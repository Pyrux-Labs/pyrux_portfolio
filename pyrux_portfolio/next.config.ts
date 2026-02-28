import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  
  // Si tu repositorio se llama "pyrux_portfolio", descomenta la siguiente línea:
  //basePath: '/pyrux_portfolio',
  
  // Si es tu repositorio de usuario (username.github.io), deja basePath comentado
  
  images: {
    unoptimized: true, // Necesario para exportación estática
  },
};

export default nextConfig;
