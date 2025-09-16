"use client";

import { motion, Variants } from "framer-motion";
import { Building2, Users, Trophy, Shield } from "lucide-react";

const whyChooseUs = [
  {
    icon: <Building2 className="h-8 w-8 text-brand-brown" />,
    title: "Expert Property Management",
    desc: "Our team ensures every property is managed efficiently, maximizing returns and tenant satisfaction.",
  },
  {
    icon: <Users className="h-8 w-8 text-brand-brown" />,
    title: "Client-Focused Approach",
    desc: "We tailor solutions to each client’s needs, providing personalized services for owners, tenants, and investors.",
  },
  {
    icon: <Trophy className="h-8 w-8 text-brand-brown" />,
    title: "Proven Track Record",
    desc: "With years of experience, we have a history of successful property transactions and satisfied clients.",
  },
  {
    icon: <Shield className="h-8 w-8 text-brand-brown" />,
    title: "Trust & Integrity",
    desc: "We uphold transparency, professionalism, and ethical practices in every deal and service we offer.",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeInOut" },
  }),
};

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-brown mb-4">
            Why Choose Pecolo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine experience, integrity, and personalized service to help
            clients achieve their property goals with confidence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              className="group relative bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-brand-brown mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
