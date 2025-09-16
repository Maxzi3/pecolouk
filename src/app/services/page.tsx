"use client";

import { motion, Variants } from "framer-motion";
import { Home, Building2, Key, ShoppingBag, ArrowRight } from "lucide-react";
import { TrendingUp, HandCoins, Hammer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";

// ✨ Variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeInOut",
    },
  }),
};

const ServicesPage = () => {
  const services = [
    {
      icon: Building2,
      title: "Property Management",
      description:
        "Comprehensive property management services including tenant screening, rent collection, maintenance coordination, and 24/7 support.",
      image: "/images/Property-Management.jpg",
      features: [
        "Professional tenant screening",
        "Monthly rent collection & reporting",
        "Property maintenance & repairs",
        "Legal compliance & documentation",
        "24/7 emergency support",
      ],
    },
    {
      icon: Home,
      title: "Serviced Apartments",
      description:
        "Fully furnished luxury apartments perfect for corporate clients, relocations, and extended stays with all amenities included.",
      image: "/images/Serviced-Apartments.jpg",
      features: [
        "Fully furnished & equipped",
        "Weekly housekeeping service",
        "All utilities included",
        "High-speed internet & cable",
        "Prime locations",
      ],
    },
    {
      icon: TrendingUp,
      title: "Rent-to-Rent",
      description:
        "Strategic rental arbitrage opportunities providing guaranteed monthly returns for property owners with professional management.",
      image: "/images/Rent-to-Rent.png",
      features: [
        "Guaranteed monthly rent",
        "Professional property setup",
        "Complete management service",
        "Risk-free investment",
        "Market-rate returns",
      ],
    },
    {
      icon: HandCoins,
      title: "Buying & Selling",
      description:
        "Expert guidance through the entire buying or selling process, from market analysis to closing, ensuring optimal outcomes.",
      image: "/images/Buying-Selling.png",
      features: [
        "Market analysis & valuation",
        "Professional photography & marketing",
        "Negotiation expertise",
        "Legal & financial guidance",
        "End-to-end transaction support",
      ],
    },
    {
      icon: Hammer,
      title: "Refurbishment & Renovation",
      description:
        "Transform your property with our expert refurbishment and renovation services enhancing both aesthetics and market value.",
      image: "/images/Refurbishment-Renovation.jpeg",
      features: [
        "Full property refurbishments",
        "Interior & exterior renovations",
        "Custom design solutions",
        "Energy-efficient upgrades",
        "Increase property value",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description:
        "We start with understanding your goals — whether you’re an investor, homeowner, or tenant.",
    },
    {
      step: "02",
      title: "Tailored Plan",
      description:
        "We create a custom strategy that matches your needs and maximizes value.",
    },
    {
      step: "03",
      title: "Execution",
      description:
        "Our expert team handles everything from paperwork to property management with professionalism.",
    },
    {
      step: "04",
      title: "Support",
      description:
        "We stay by your side, offering continuous support and updates to ensure your satisfaction.",
    },
  ];

  return (
    <main className="text-foreground">
      {/* Hero Section (keep your existing component) */}
      <HeroSection
        title="Our Services"
        subtitle="Discover tailored real estate solutions that combine reliability,
            luxury, and innovation to meet your unique needs."
        image="/images/hero-6.jpg"
      />

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className={`grid md:grid-cols-2 gap-10 items-center`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index}
              >
                {/* Text Block */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-full bg-brand-brown/10">
                      <Icon className="h-8 w-8 text-brand-brown" />
                    </div>
                    <h2 className="text-2xl font-bold text-brand-brown">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 before:content-['✓'] before:text-brand-brown"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <motion.div
                  className="relative h-64 w-full bg-secondary rounded-2xl shadow-md overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-brand-brown text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            How We Work
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <Card className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="text-4xl font-bold text-brand-brown mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        className="py-16 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-brown mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you want to manage your property, invest in real estate, or
            find the perfect home, Pecolo is here to make it happen.
          </p>
          <Link href="/contact">
            <Button className="bg-brand-brown hover:bg-brand-brown-dark text-white">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </motion.section>
    </main>
  );
};

export default ServicesPage;
