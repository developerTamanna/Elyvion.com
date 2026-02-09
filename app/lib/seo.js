// SEO component for individual pages
export function generateMetadata({ title, description, path }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://elyvion-global.site';
  
  return {
    title: title ? `${title} | Elyvion` : 'Elyvion',
    description: description || 'Experience curated shopping made simple, secure, and seamless.',
    
      // Fav icon 
    icons: {
      icon: 'logo/logo.png',
      shortcut: '/logo.png',
      apple: '/logo.png',
    },

    openGraph: {
      title: title || 'Elyvion',
      description: description || 'Experience curated shopping made simple, secure, and seamless.',
      url: `${baseUrl}${path || ''}`,
      siteName: 'Elyvion',
      images: [
        {
          url: `${baseUrl}/images/hero.png`,
          width: 1200,
          height: 630,
          alt: 'Elyvion',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title || 'Elyvion',
      description: description || 'Experience curated shopping made simple, secure, and seamless.',
      images: [`${baseUrl}/images/hero.png`],
    },
  };
}