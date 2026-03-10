import type React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  bgWhite?: boolean;
}

export function Card({
  children,
  className = "",
  bgWhite = true,
  ...props
}: CardProps) {
  return (
    <div
      className={`rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 md:p-8 ${
        bgWhite ? "bg-white" : "bg-[var(--color-neutral-subtle)]"
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function CardTitle({
  children,
  className = "",
  ...props
}: CardTitleProps) {
  return (
    <h3
      className={`font-serif text-2xl font-bold mb-4 text-[var(--color-foreground)] ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}

interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function CardDescription({
  children,
  className = "",
  ...props
}: CardDescriptionProps) {
  return (
    <p className={`text-gray-600 leading-relaxed ${className}`} {...props}>
      {children}
    </p>
  );
}
