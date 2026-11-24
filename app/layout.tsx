import type { Metadata } from 'next';
import { DM_Mono, DM_Sans, Manrope } from 'next/font/google';
import './globals.css';

const bodyFont = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap', weight: ['400', '500', '600', '700'] });
const displayFont = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap', weight: ['400', '500', '600', '700', '800'] });
const monoFont = DM_Mono({ subsets: ['latin'], variable: '--font-dm-mono', display: 'swap', weight: ['400', '500'] });

const title = 'Samarth More | AI/ML Engineer | Generative AI | Computer Vision | Python Developer';
const description = 'AI/ML Engineer with hands-on experience in Machine Learning, Deep Learning, Generative AI, NLP, Computer Vision, multimodal RAG systems, and Python backend development. Explore professional experience, technical projects, and AI engineering expertise.';
export const metadata: Metadata = {
 metadataBase: new URL('https://samarth-portfolio-eight.vercel.app'), title, description,
 keywords: ['AI/ML Engineer', 'Generative AI', 'Computer Vision', 'Python Developer', 'Deep Learning', 'NLP', 'RAG'],
 alternates: { canonical: '/' },
 openGraph: { title, description, url: '/', siteName: 'Samarth More Portfolio', locale: 'en_IN', type: 'website' },
 twitter: { card: 'summary', title, description }, robots: { index: true, follow: true },
};
const themeScript = `(function(){try{var t=localStorage.getItem('samarth-portfolio-theme');document.documentElement.dataset.theme=(t==='light'||t==='dark')?t:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch(e){document.documentElement.dataset.theme=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}})()`;
const person = { '@context': 'https://schema.org', '@type': 'Person', name: 'Samarth More', url: 'https://samarth-portfolio-eight.vercel.app/', jobTitle: 'AI/ML Engineer', email: 'mailto:samarthm770@gmail.com', telephone: '+919819597946', sameAs: ['https://github.com/Samarth201104', 'https://www.linkedin.com/in/samarth-more-740317268/'], alumniOf: { '@type': 'CollegeOrUniversity', name: 'Viva Institute of Technology, Mumbai' }, knowsAbout: ['Machine Learning', 'Generative AI', 'Computer Vision', 'Natural Language Processing', 'Python Backend Development'] };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en-IN" suppressHydrationWarning className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable}`}><head><script dangerouslySetInnerHTML={{__html:themeScript}}/></head><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(person).replace(/</g, '\\u003c')}}/></body></html>;
}
