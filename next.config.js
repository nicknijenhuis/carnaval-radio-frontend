/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: '**.reliastream.com',
      },
    ],
  },

  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/verzoekjes",
          destination: "/requests",
        },
        {
          source: "/gedraaide-nummers",
          destination: "/recentSongs",
        },
        {
          source: '/nieuwsberichten',
          destination: '/articles',
        },
        {
          source: '/nieuws',
          destination: '/articles',
        },
        {
          source: '/socials',
          destination: '/social',
        },
        {
          source: '/nieuwsberichten/o/:path*',
          destination: '/articles/article/:path*',
        },
        {
          source: '/nieuwsberichten/:path*',
          destination: '/articles/:path*',
        },
      ]
    }
  },
  async redirects() {
    return [
      {
        source: '/post/:path*.aspx',
        destination: '/nieuwsberichten/article/:path*',
        permanent: false,
      },
      {
        source: '/:path*.aspx',
        destination: '/:path*',
        permanent: false,
      },
      {
        source: '/audioplayer',
        destination: '/luisteren',
        permanent: false,
      },
      {
        source: '/recente-nummers',
        destination: '/gedraaide-nummers',
        permanent: false,
      },
      {
        source: '/recentenummers',
        destination: '/gedraaide-nummers',
        permanent: false,
      },
      {
        source: "/beheer",
        destination: process.env.NEXT_PUBLIC_STRAPI_URL + "/admin",
        permanent: false,
        basePath: false,
      },
      {
         source: "/start-verkoop",
         destination: "https://www.ticketcrew.nl/tickets/carnaval-radio",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
