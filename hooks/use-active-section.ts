"use client";

import { useEffect, useState } from "react";
import { navigation } from "@/data/profile";

export function useActiveSection() {
  const [active, setActive] = useState("about");
  useEffect(() => {
    const sections = navigation.map((name) =>
      document.getElementById(name.toLowerCase()),
    );
    let frame = 0;
    const update = () => {
      frame = 0;
      const marker = Math.max(110, window.innerHeight * 0.25);
      let current = "about";
      for (const section of sections)
        if (section && section.getBoundingClientRect().top <= marker)
          current = section.id;
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 4
      )
        current = "contact";
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);
  return active;
}
