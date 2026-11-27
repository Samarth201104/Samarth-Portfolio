"use client";

import { useId, useRef, useState } from "react";
import type { ArchitectureStage } from "@/data/projects";
import { Icon } from "./ui";

export function ProjectArchitecture({
  title,
  stages,
}: {
  title: string;
  stages: ArchitectureStage[];
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [active, setActive] = useState(0);
  const id = useId();

  return (
    <>
      <button
        ref={trigger}
        className="architecture-trigger"
        aria-haspopup="dialog"
        onClick={() => dialog.current?.showModal()}
      >
        <span>
          <Icon name="network" size={17} />
          Explore architecture
        </span>
        <Icon name="arrow" size={17} />
        <span className="sr-only"> for {title}</span>
      </button>
      <dialog
        ref={dialog}
        className="architecture-dialog"
        aria-labelledby={`${id}-title`}
        onClose={() => trigger.current?.focus({ preventScroll: true })}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls =
            event.currentTarget.querySelectorAll<HTMLButtonElement>("button");
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            const rect = event.currentTarget.getBoundingClientRect();
            if (
              event.clientX < rect.left ||
              event.clientX > rect.right ||
              event.clientY < rect.top ||
              event.clientY > rect.bottom
            )
              dialog.current?.close();
          }
        }}
      >
        <header className="dialog-header">
          <div>
            <p className="eyebrow">Implementation architecture</p>
            <h2 id={`${id}-title`}>{title}</h2>
          </div>
          <button
            className="icon-button"
            aria-label="Close architecture"
            autoFocus
            onClick={() => dialog.current?.close()}
          >
            <Icon name="close" />
          </button>
        </header>
        <p className="dialog-instruction">
          Select a stage to explore its implementation.
        </p>
        <ol className="architecture-nodes" aria-label="Implementation stages">
          {stages.map((stage, index) => (
            <li key={stage.title}>
              <button
                aria-pressed={active === index}
                aria-controls={`${id}-detail`}
                onClick={() => setActive(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {stage.title}
              </button>
            </li>
          ))}
        </ol>
        <div
          className="architecture-detail"
          id={`${id}-detail`}
          aria-live="polite"
          aria-atomic="true"
        >
          <h3>{stages[active].title}</h3>
          <p>{stages[active].detail}</p>
        </div>
      </dialog>
    </>
  );
}
