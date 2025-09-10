"use client";

import type { ComponentProps } from "react";
import * as React from "react";
import { cn } from "@/lib/utils";

type ScrollTabsContextValue = {
  activeValue: string | ScrollTabsContextValue | null;
  setActiveValue: (value: string) => void;
  registerValue: (value: string) => void;
};

const ScrollTabsContext = React.createContext<ScrollTabsContextValue | null>(
  null,
);

function useScrollTabsContext() {
  const ctx = React.useContext(ScrollTabsContext);
  if (!ctx)
    throw new Error("ScrollTabs components must be used within <ScrollTabs>");
  return ctx;
}

type ScrollTabsProps = Partial<
  ComponentProps<typeof ScrollTabsContext.Provider>
> & {
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

function ScrollTabs({
  value,
  defaultValue,
  onValueChange,
  ...props
}: ScrollTabsProps) {
  const isControlled = value !== undefined;
  const [uncontrolled, setUncontrolled] = React.useState<string | null>(
    defaultValue ?? null,
  );

  const activeValue = (isControlled ? value : uncontrolled) ?? null;
  const valuesRef = React.useRef<Set<string>>(new Set());

  const setActiveValue = React.useCallback(
    (next: string) => {
      if (!isControlled) setUncontrolled(next);
      onValueChange?.(next);
    },
    [isControlled, onValueChange],
  );

  const registerValue = React.useCallback((v: string) => {
    valuesRef.current.add(v);
  }, []);

  React.useEffect(() => {
    const values = Array.from(valuesRef.current);
    if (values.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            setActiveValue(entry.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0.01 },
    );

    values.forEach((v) => {
      const el = document.getElementById(v);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setActiveValue]);

  return (
    <ScrollTabsContext.Provider
      value={{ activeValue, setActiveValue, registerValue }}
      {...props}
    />
  );
}

type ScrollTabsListProps = React.HTMLAttributes<HTMLElement>;

function ScrollTabsList({
  className,
  children,
  ...props
}: ScrollTabsListProps) {
  return (
    <nav
      className={cn(
        "sticky top-12 z-40 border-b bg-gradient-to-b from-muted/60 to-background/90 backdrop-blur",
        className,
      )}
      aria-label="Scroll tabs"
      {...props}
    >
      <div className="max-w-screen-sm mx-auto px-3">
        <ul className="flex gap-6 md:gap-8 overflow-x-auto overflow-y-hidden py-2 md:py-3">
          {children}
        </ul>
      </div>
    </nav>
  );
}

type ScrollTabsTriggerProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  value: string;
};

function ScrollTabsTrigger({
  value,
  className,
  children,
  ...props
}: ScrollTabsTriggerProps) {
  const { activeValue, setActiveValue, registerValue } = useScrollTabsContext();

  React.useEffect(() => {
    registerValue(value);
  }, [registerValue, value]);

  return (
    <li>
      <a
        href={`#${value}`}
        data-active={activeValue === value}
        className={cn(
          "relative whitespace-nowrap px-1 py-2 text-xs md:text-sm font-semibold uppercase tracking-wide text-muted-foreground transition-colors data-[active=true]:text-foreground after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:rounded-full after:bg-foreground after:opacity-0 data-[active=true]:after:opacity-100",
          className,
        )}
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById(value);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            setActiveValue(value);
          } else {
            window.location.hash = `#${value}`;
          }
        }}
        {...props}
      >
        {children}
      </a>
    </li>
  );
}

type ScrollTabsContentProps = React.HTMLAttributes<HTMLElement> & {
  value: string;
};

function ScrollTabsContent({
  value,
  className,
  children,
  ...props
}: ScrollTabsContentProps) {
  // Optional helper if consumers want to wrap sections
  return (
    <section id={value} className={cn("scroll-mt-20", className)} {...props}>
      {children}
    </section>
  );
}

export { ScrollTabs, ScrollTabsList, ScrollTabsTrigger, ScrollTabsContent };
