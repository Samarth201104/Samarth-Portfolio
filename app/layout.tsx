import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Samarth More | AI/ML Engineer | Computer Vision | Generative AI',
  description: 'Portfolio of Samarth Haresh More — AI/ML Engineer specializing in Computer Vision, Generative AI, RAG systems, backend engineering, and intelligent applications.',
  openGraph: { title: 'Samarth More | AI/ML Engineer', description: 'AI/ML, Computer Vision, Generative AI and intelligent applications.', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Samarth More | AI/ML Engineer', description: 'AI/ML, Computer Vision, Generative AI and intelligent applications.' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
