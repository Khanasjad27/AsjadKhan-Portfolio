import type { Metadata, Viewport } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Asjad Khan | Full-Stack Developer & AI Builder',
  description: 'I build production web systems, explore practical AI, and turn ideas into working products. Asjad Khan — Software Developer Intern at UnsaidTalks & Google Student Ambassador 2026.',
  keywords: [
    'Asjad Khan',
    'Full-Stack Developer',
    'AI Engineer',
    'Machine Learning',
    'RepoMirror',
    'Next.js',
    'React',
    'TypeScript',
    'Google Student Ambassador',
    'Mumbai'
  ],
  authors: [{ name: 'Asjad Khan', url: 'https://github.com/Khanasjad27' }],
  creator: 'Asjad Khan',
  openGraph: {
    title: 'Asjad Khan | Full-Stack Developer & AI Builder',
    description: 'Building production systems. Exploring practical AI. Moving people forward.',
    type: 'website',
    locale: 'en_US', 
    siteName: 'Asjad Khan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asjad Khan | Full-Stack Developer & AI Builder',
    description: 'Building production systems. Exploring practical AI. Moving people forward.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#06080d',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
