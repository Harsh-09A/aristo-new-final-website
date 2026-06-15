import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    quietDeps: true, // This will silence deprecation warnings
    silenceDeprecations: [
      "legacy-js-api",
      "import",
      "slash-div",
      "global-builtin",
    ],
  },
  allowedDevOrigins: ['192.168.0.111'],
    typescript: {
    ignoreBuildErrors: true, 
  },
};

export default nextConfig;
