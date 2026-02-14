"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { HTMLAttributes, ReactNode } from "react";

type RevealElement = "div" | "section" | "article" | "header";

type RevealProps = {
  as?: RevealElement;
  className?: string;
  variant?: "up" | "left" | "right";
  delay?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  once?: boolean;
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "children" | "className">;

export default function Reveal({
  as = "div",
  className = "",
  variant = "up",
  delay = 0,
  once = true,
  children,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasObserverSupport, setHasObserverSupport] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const raf = window.requestAnimationFrame(() => {
      setHasObserverSupport(typeof window.IntersectionObserver !== "undefined");
    });

    return () => window.cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onPreferenceChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };
    const legacyMediaQuery = mediaQuery as MediaQueryList & {
      addListener?: (listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void) => void;
      removeListener?: (listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void) => void;
    };

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", onPreferenceChange);
      return () => mediaQuery.removeEventListener("change", onPreferenceChange);
    }

    legacyMediaQuery.addListener?.(onPreferenceChange);
    return () => legacyMediaQuery.removeListener?.(onPreferenceChange);
  }, []);

  useEffect(() => {
    if (reducedMotion || !hasObserverSupport || !ref.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const visible = entry.isIntersecting;

        if (visible) {
          setIsInView(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasObserverSupport, once, reducedMotion]);

  const variantClass = useMemo(() => {
    if (variant === "left") return "reveal-left";
    if (variant === "right") return "reveal-right";
    return "";
  }, [variant]);

  const visible = reducedMotion || !hasObserverSupport || isInView;
  const Component = as;
  const composedClassName = [
    "reveal",
    variantClass,
    delay > 0 ? `stagger-${delay}` : "",
    visible ? "in-view" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      ref={(node) => {
        ref.current = node as HTMLElement | null;
      }}
      className={composedClassName}
      {...rest}
    >
      {children}
    </Component>
  );
}
