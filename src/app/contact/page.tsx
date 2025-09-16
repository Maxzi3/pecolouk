"use client";

import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";

const ContactPage = () => {
  return (
    <main className=" text-foreground">
      {/* Hero Section */}
      <HeroSection
        title="Get in Touch"
        subtitle="Have questions about our services or want to discuss your next real estate move? We’d love to hear from you!"
        image="/images/hero-2.jpg"
      />

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 max-w-6xl">
          {/* Contact Form */}
          <div className="bg-white dark:bg-card shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-brand-brown mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <Input placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
              <Input type="tel" placeholder="Your Phone" />
              <Textarea placeholder="Your Message" className="h-32" required />
              <Button className="bg-brand-brown hover:bg-brand-brown-dark text-white w-full">
                Send Message <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-brand-brown mb-4">
                Contact Information
              </h2>
              <p className="text-muted-foreground">
                Reach out to us using the form or through any of the details
                below.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-brand-brown" />
                <p className="text-muted-foreground">
                  24 blyth House, 535 southchurch Road, Southend on sea, Essex,
                  United Kingdom.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-brand-brown" />
                <p className="text-muted-foreground">+44 7466 285592</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-brand-brown" />
                <p className="text-muted-foreground">Chike@pecolo.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-brand-brown" />
                <p className="text-muted-foreground">
                  Mon – Fri: 9:00 AM – 6:00 PM
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-56 w-full bg-secondary rounded-xl flex items-center justify-center shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.504984055093!2d0.7304377000000001!3d51.5406386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8d843b4b0500f%3A0x43d45cd17de75d0e!2s24%2C%20Blyth%20House%2C%20535%20Southchurch%20Rd%2C%20Southend-on-Sea%20SS1%202AY%2C%20UK!5e0!3m2!1sen!2sng!4v1758044061665!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-brown mb-6">
            Let’s Start Your Journey Today
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're buying, selling, or investing our team is ready to
            guide you every step of the way.
          </p>
          <Link href="/services">
            <Button className="bg-brand-brown hover:bg-brand-brown-dark text-white">
              Explore Services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
