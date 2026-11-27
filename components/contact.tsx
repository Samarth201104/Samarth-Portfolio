"use client";
import { useState } from "react";
import { profile, profileLinks, resumeUrl } from "@/data/profile";
import { Icon, SectionHeading, ButtonLink } from "./ui";
const methods = [
  {
    name: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: "mail",
    copy: profile.email,
  },
  {
    name: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneLink}`,
    icon: "phone",
    copy: profile.phoneLink,
  },
  {
    name: "GitHub",
    value: "Samarth201104",
    href: profileLinks.github,
    icon: "github",
  },
  {
    name: "LinkedIn",
    value: "Samarth More",
    href: profileLinks.linkedin,
    icon: "linkedin",
  },
];
export function Contact() {
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState("");
  async function copy(name: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(name);
      setMessage(`${name} copied to clipboard.`);
    } catch {
      setCopied("");
      setMessage(
        `Could not copy. You can select the ${name.toLowerCase()} text or use its direct link.`,
      );
    }
  }
  return (
    <section id="contact" tabIndex={-1} className="section section-tinted">
      <div className="container">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let’s build something intelligent."
          description="For engineering opportunities, project conversations and thoughtful collaborations."
        />
        <div className="contact-grid">
          {methods.map((m) => (
            <div className="contact-card surface" key={m.name}>
              <a
                href={m.href}
                {...(m.href.startsWith("https")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className="icon-tile">
                  <Icon name={m.icon} />
                </span>
                <span>
                  <small>{m.name}</small>
                  <strong>{m.value}</strong>
                </span>
              </a>
              {m.copy && (
                <button
                  className="icon-button"
                  aria-label={`Copy ${m.name.toLowerCase()}`}
                  onClick={() => copy(m.name, m.copy!)}
                >
                  <Icon name={copied === m.name ? "check" : "copy"} size={17} />
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="contact-bottom">
          <ButtonLink href={resumeUrl} download icon="download">
            Download Resume
          </ButtonLink>
          <p role="status" className="copy-status">
            {message}
          </p>
        </div>
      </div>
    </section>
  );
}
