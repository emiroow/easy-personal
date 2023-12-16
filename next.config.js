/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")();

module.exports = withNextIntl({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "api.emiroow.ir",
      },
    ],
  },
});
