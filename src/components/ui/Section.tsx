import type React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  containerClassName?: string;
  bgWhite?: boolean;
}

export function Section({
  children,
  className = "",
  containerClassName = "",
  bgWhite = false,
  ...props
}: SectionProps) {
  return (
    <section
      className={`py-16 md:py-24 ${bgWhite ? "bg-white" : "bg-[var(--color-background)]"} ${className}`}
      {...props}
    >
      <div
        className={`container mx-auto px-4 md:px-8 max-w-6xl ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
