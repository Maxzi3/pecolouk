"use client";

import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  image: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  image,
}) => {
  return (
    <section className="relative h-[70vh] flex items-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image src={image} alt={title} fill className="object-cover" priority />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        {subtitle && <p className="text-lg text-white/90">{subtitle}</p>}
      </div>
    </section>
  );
};

export default HeroSection;
