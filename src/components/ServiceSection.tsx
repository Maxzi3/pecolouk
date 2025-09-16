"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Property Management",
    desc: "Comprehensive management services ensuring maximum value and tenant satisfaction.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: "02",
    title: "Serviced Apartments",
    desc: "Premium, fully furnished apartments in exclusive urban locations.",
    img: "/images/Serviced-Apartments.jpg",
  },
  {
    id: "03",
    title: "Rent-to-Rent",
    desc: "Secure rental income with expert, hassle-free management solutions.",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  },
  {
    id: "04",
    title: "Buying & Selling",
    desc: "Expert guidance for seamless and successful property transactions.",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-brown mb-4">
            Our Premier Real Estate Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exceptional solutions tailored for luxury, reliability, and seamless
            real estate experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative bg-card p-6 transition-all duration-300 hover:bg-black hover:bg-opacity-50 md:border-r border-b border-border last:border-r-0 overflow-hidden h-100 max-w-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cover bg-center z-0"
                style={{ backgroundImage: `url('${service.img}')` }}
              ></div>

              {/* Animated Overlay */}
              <div className="absolute inset-0 bg-white/40 group-hover:bg-black/60 transition-colors duration-500 z-10"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col space-y-8">
                <div className="w-10 h-24 rounded-lg text-4xl font-bold text-brand-brown flex items-center justify-center">
                  {service.id}
                </div>
                <h3 className="text-xl font-semibold text-brand-brown group-hover:text-primary mb-2 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground mb-4 transition-colors duration-300">
                  {service.desc}
                </p>
                <Link
                  href="/services"
                  className="text-gray-700 font-extrabold group-hover:text-brand-brown-light transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
