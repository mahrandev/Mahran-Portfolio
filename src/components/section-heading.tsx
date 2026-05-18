"use client";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      <div className="section-underline" />
      {subtitle && (
        <p className="mt-5 text-[#9ca3af] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
