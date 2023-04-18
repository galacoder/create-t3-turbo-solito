/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds and Linting.
 */
// !process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

import { withExpo } from "@expo/next-adapter";

/** @type {import("next").NextConfig} */
const config = withExpo({
  swcMinify: true,
  reactStrictMode: false,
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "@aeon/api",
    "@aeon/auth",
    "@aeon/db",
    "@aeon/core",
    "react-native",
    "react-native-web",
    "nativewind",
    "expo",
    "solito",
    "moti",
    "react-native-reanimated",
    "react-native-gesture-handler",
    "@expo/html-elements",
  ],
  experimental: {
    forceSwcTransforms: true,
  },
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: !!process.env.CI },
  typescript: { ignoreBuildErrors: !!process.env.CI },
});

export default config;
