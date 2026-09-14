import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Agência Tymax | Marketing Digital, Social Media & Design Estratégico',
  description:
    'Conectamos marcas e pessoas com estratégia e criatividade. Social Media, Tráfego Pago, Design, Criação de Sites, Audiovisual e Lançamentos. Solicite seu orçamento.',
  keywords: [
    'agência de marketing digital',
    'social media',
    'tráfego pago',
    'design gráfico',
    'criação de sites',
    'audiovisual',
    'marketing de conteúdo',
    'agência tymax',
  ],
  authors: [{ name: 'Agência Tymax' }],
  creator: 'Agência Tymax',
  publisher: 'Agência Tymax',
  metadataBase: new URL('https://agenciatymax.com.br'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://agenciatymax.com.br',
    siteName: 'Agência Tymax',
    title: 'Agência Tymax | Marketing Digital com Estratégia & Criatividade',
    description:
      'Conectamos marcas e pessoas com estratégia e criatividade. Social Media, Tráfego Pago, Design, Sites e muito mais.',
    images: [
      {
        url: '/images/hero-photo.jpg',
        width: 1200,
        height: 630,
        alt: 'Agência Tymax - Conectando marcas e pessoas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agência Tymax | Marketing Digital',
    description:
      'Conectamos marcas e pessoas com estratégia e criatividade.',
    images: ['/images/hero-photo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Agência Tymax',
              url: 'https://agenciatymax.com.br',
              logo: 'https://agenciatymax.com.br/images/hero-photo.jpg',
              description:
                'Agência de marketing digital especializada em social media, tráfego pago, design, criação de sites, audiovisual e lançamentos.',
              sameAs: [
                'https://www.instagram.com/agenciatymax',
                'https://www.tiktok.com/@agenciatymax',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'sales',
                availableLanguage: 'Portuguese',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Serviços de Marketing Digital',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Design' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tráfego Pago' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Criação de Sites' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Audiovisual' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Criação e Lançamento' } },
                ],
              },
            }),
          }}
        />
      </head>
      <body>
        <svg
          width="0"
          height="0"
          className="sr-only"
          aria-hidden="true"
          style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}
        >
          <defs>
            <filter
              id="text-spray-texture"
              x="-15%"
              y="-15%"
              width="130%"
              height="130%"
              colorInterpolationFilters="sRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.75"
                numOctaves="4"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="3.5"
                xChannelSelector="R"
                yChannelSelector="G"
                result="disp"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0.65"
                in="noise"
                result="grain"
              />
              <feComposite in="disp" in2="grain" operator="in" />
            </filter>
            <filter
              id="cases-spray-texture"
              x="-15%"
              y="-15%"
              width="130%"
              height="130%"
              colorInterpolationFilters="sRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.65"
                numOctaves="4"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="5"
                xChannelSelector="R"
                yChannelSelector="G"
                result="disp"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.32 0.68"
                in="noise"
                result="grain"
              />
              <feComposite in="disp" in2="grain" operator="in" />
            </filter>
          </defs>
        </svg>
        {children}
      </body>
    </html>
  );
}
