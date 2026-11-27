"use client";

import { useEffect, useRef, useState } from "react";
import { navigation } from "@/data/profile";
import { useActiveSection } from "@/hooks/use-active-section";
import { useTheme } from "@/hooks/use-theme";
import { Icon } from "./ui";

export function Navigation() {
  const [menu, setMenu] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const active = useActiveSection();
  const { theme, switchTheme } = useTheme();

  useEffect(() => {
    if (!menu) return;
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenu(false);
        toggle.current?.focus();
      }
    };
    const resize = () => {
      if (innerWidth >= 1000) setMenu(false);
    };
    window.addEventListener("keydown", key);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("keydown", key);
      window.removeEventListener("resize", resize);
    };
  }, [menu]);

  const navigate = (name: string) => {
    setMenu(false);
    document.getElementById(name.toLowerCase())?.focus({ preventScroll: true });
  };

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a
          className="brand"
          href="#about"
          aria-label="SM, back to portfolio introduction"
          onClick={() => navigate("About")}
        >
          <span className="brand-monogram">SM</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((name) => (
            <a
              key={name}
              href={`#${name.toLowerCase()}`}
              aria-current={
                active === name.toLowerCase() ? "location" : undefined
              }
            >
              {name}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="icon-button"
            onClick={switchTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} />
          </button>
          <button
            ref={toggle}
            className="icon-button menu-toggle"
            aria-controls="mobile-navigation"
            aria-expanded={menu}
            aria-label={menu ? "Close menu" : "Open menu"}
            onClick={() => setMenu(!menu)}
          >
            <Icon name={menu ? "close" : "menu"} />
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav container"
        aria-label="Mobile navigation"
        hidden={!menu}
      >
        {navigation.map((name) => (
          <a
            key={name}
            href={`#${name.toLowerCase()}`}
            aria-current={
              active === name.toLowerCase() ? "location" : undefined
            }
            onClick={() => navigate(name)}
          >
            {name}
          </a>
        ))}
      </nav>
    </header>
  );
}
