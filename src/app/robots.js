const baseUrl = process.env.NEXT_PUBLIC_MAIN_URL;

export default function robots() {
  const routes = [
    {
      name: '/',
    },
    {
      name: '/aboutUs/',
    },
    {
      name: '/design/',
    },
    {
      name: '/gallery/',
    },
    {
      name: '/video/',
    },
    {
      name: '/contacts/',
    },
    {
      name: '/design/sertificate/',
    },
    {
      name: '/design/documentation/',
    },
    {
      name: '/design/visualization/',
    },
    {
      name: '/gallery/houses/',
    },
    {
      name: '/gallery/angars/',
    },
    {
      name: '/gallery/asphalt/',
    },
    {
      name: '/gallery/beton/',
    },
    {
      name: '/gallery/shops/',
    },
  ].map(route => route.name);

  return {
    rules: {
      userAgent: '*',
      allow: [...routes],
      disallow: ['/private/'],
    },
    sitemap: `${baseUrl}sitemap.xml`,
  };
}
