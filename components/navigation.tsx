'use client';
import { useEffect, useRef, useState } from 'react';
import { navigation, resumeUrl } from '@/data/profile';
import { Icon } from './ui';
export function Navigation() {
 const [menu, setMenu] = useState(false); const [active, setActive] = useState('home'); const toggle = useRef<HTMLButtonElement>(null);
 const [theme, setTheme] = useState('dark');
 useEffect(() => {
  const media = matchMedia('(prefers-color-scheme: dark)');
  const sync = () => setTheme(document.documentElement.dataset.theme || (media.matches ? 'dark' : 'light'));
  sync();
  const system = () => { try { if (localStorage.getItem('samarth-portfolio-theme')) return; } catch {} document.documentElement.dataset.theme = media.matches ? 'dark' : 'light'; sync(); };
  media.addEventListener('change', system);
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); }), {rootMargin: '-15% 0px -65% 0px'});
  navigation.forEach(name => { const section = document.getElementById(name.toLowerCase()); if(section) observer.observe(section); });
  return () => { observer.disconnect(); media.removeEventListener('change', system); };
 }, []);
 useEffect(() => { if(!menu) return; const key = (e: KeyboardEvent) => { if(e.key === 'Escape') { setMenu(false); toggle.current?.focus(); } }; const resize = () => { if(innerWidth >= 1000) setMenu(false); }; window.addEventListener('keydown',key); window.addEventListener('resize',resize); return () => { window.removeEventListener('keydown',key); window.removeEventListener('resize',resize); }; },[menu]);
 const switchTheme = () => { const next = theme === 'dark' ? 'light' : 'dark'; setTheme(next); document.documentElement.dataset.theme = next; try { localStorage.setItem('samarth-portfolio-theme',next); } catch {} };
 return <header className="site-header"><div className="container nav-inner"><a className="brand" href="#home" ><span className="sr-only">Home: Samarth More </span><span className="brand-monogram">sm<span>.</span></span><span className="brand-caption">SAMARTH MORE<small>AI / ML ENGINEER</small></span></a><nav className="desktop-nav" aria-label="Main navigation">{navigation.map(name=><a key={name} href={`#${name.toLowerCase()}`} aria-current={active===name.toLowerCase()?'location':undefined}>{name}</a>)}</nav><div className="nav-actions"><a href={resumeUrl} download className="button button-secondary nav-resume"><Icon name="download" size={16}/>Resume</a><button className="icon-button theme-toggle" onClick={switchTheme} aria-label={`Switch to ${theme==='dark'?'light':'dark'} theme`}><Icon name={theme==='dark'?'sun':'moon'}/></button><button ref={toggle} className="icon-button menu-toggle" aria-controls="mobile-navigation" aria-expanded={menu} aria-label={menu?'Close menu':'Open menu'} onClick={()=>setMenu(!menu)}><Icon name={menu?'close':'menu'}/></button></div></div><nav id="mobile-navigation" className="mobile-nav container" aria-label="Mobile navigation" hidden={!menu}>{navigation.map(name=><a key={name} href={`#${name.toLowerCase()}`} aria-current={active===name.toLowerCase()?'location':undefined} onClick={()=>{setMenu(false); document.getElementById(name.toLowerCase())?.focus({preventScroll:true});}}>{name}</a>)}<a href={resumeUrl} download>Download Resume</a></nav></header>;
}
