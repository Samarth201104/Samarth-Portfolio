import type { Metadata } from 'next';
import { DM_Mono, DM_Sans, Manrope } from 'next/font/google';
import './globals.css';

const bodyFont = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap', weight: ['400', '500', '600', '700'] });
const displayFont = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap', weight: ['400', '500', '600', '700', '800'] });
const monoFont = DM_Mono({ subsets: ['latin'], variable: '--font-dm-mono', display: 'swap', weight: ['400', '500'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://samarth-portfolio-eight.vercel.app'),
  title: 'Samarth More | AI/ML Engineer | Computer Vision | Generative AI',
  description: 'Portfolio of Samarth More — AI/ML Engineer building across Computer Vision, Generative AI, RAG systems, Python, and backend engineering.',
  keywords: ['AI/ML Engineer', 'Computer Vision', 'Generative AI', 'RAG', 'Python', 'Backend Engineering'],
  alternates: { canonical: '/' },
  openGraph: { title: 'Samarth More | AI/ML Engineer', description: 'AI/ML, Computer Vision, Generative AI, RAG, and backend engineering.', url: '/', siteName: 'Samarth More Portfolio', locale: 'en_IN', type: 'website' },
  twitter: { card: 'summary', title: 'Samarth More | AI/ML Engineer', description: 'AI/ML, Computer Vision, Generative AI, RAG, and backend engineering.' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN" className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable}`}><body>{children}</body></html>;
}
