"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Luxury Apartments Tailored for You",
    description:
      "Experience premium living with our fully furnished serviced apartments, designed for comfort and convenience.",
    image: "/images/hero-2.jpg",
    button: { text: "Explore Apartments", link: "/services" },
  },
  {
    id: 2,
    title: "Smart Property Management",
    description:
      "Let us handle everything — from tenant screening to 24/7 support, we make property ownership stress-free.",
    image: "/images/hero-3.jpg",
    button: { text: "Our Services", link: "/services" },
  },
  {
    id: 3,
    title: "Invest in Your Future",
    description:
      "Unlock opportunities with our rent-to-rent and investment solutions that guarantee returns.",
    image: "/images/hero-4.jpg",
    button: { text: "Get Started", link: "/contact" },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(true);
  const startX = useRef(0);
  const endX = useRef(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handlePrev = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setAnimate(true);
      resetTimer();
    }, 50);
  };

  const handleNext = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setAnimate(true);
      resetTimer();
    }, 50);
  };

  // Reset the timer and restart it
  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  };

  useEffect(() => {
    // Start the timer on mount
    resetTimer();

    // Clear the timer on unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  // Touch gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    endX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const distance = startX.current - endX.current;
    if (distance > 50) handleNext();
    else if (distance < -50) handlePrev();
  };

  return (
    <section
      className="relative h-[100vh] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides wrapper */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div key={slide.id} className="relative w-full h-full flex-shrink-0">
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={idx === 0}
              className="object-cover brightness-70"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content with animation */}
            <div
              className={`relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 transition-all duration-700 ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-6">{slide.description}</p>
              <Link href={slide.button.link}>
                <Button className="bg-brand-brown hover:bg-brand-brown-dark text-white">
                  {slide.button.text}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrent(idx);
              resetTimer();
            }}
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === current ? "bg-brand-brown" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
