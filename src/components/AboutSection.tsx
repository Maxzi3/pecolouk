import Link from "next/link";
import { Button } from "@/components/ui/button"; // Adjust path
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative w-full h-80 lg:h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/aboutsection.image.jpg"
              alt="Real estate overview"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Text Content */}
          <div className="animate-fade-in">
            <h2 className="text-base font-bold text-brand-brown mb-6">
              Who We Are
            </h2>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-brown mb-6">
              PECOLO
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We simplify real estate. From managing properties
              and overseeing rentals to helping clients buy, sell, or invest
              with confidence, we provide tailored solutions that deliver
              real-world results. Our team combines local knowledge, industry
              expertise, and a commitment to integrity to make every property
              experience seamless and profitable.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">
              Our Mission
            </h3>
            <p className="text-muted-foreground mb-8">
              "To provide trustworthy, efficient, and innovative real estate
              services that maximize value for property owners, tenants, and
              investors alike."
            </p>

            <Link href="/about">
              <Button className="bg-brand-brown hover:bg-brand-brown-dark text-white flex items-center">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
