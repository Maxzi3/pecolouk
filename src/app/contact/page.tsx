"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import { useEffect, useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [isValid, setIsValid] = useState(false);

  // Email validation function
  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  //  Check if all required fields are filled
  useEffect(() => {
    const { name, email, message } = form;
    setIsValid(
      name.trim() !== "" && message.trim() !== "" && validateEmail(email)
    );
  }, [form]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");;
    } finally {
      setLoading(false);
    }
  };
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

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <Input
                name="phone"
                type="tel"
                placeholder="Your Phone"
                value={form.phone}
                onChange={handleChange}
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                className="h-32"
                value={form.message}
                onChange={handleChange}
                required
              />
              <Button
                type="submit"
                disabled={!isValid || loading}
                className={`w-full text-white ${
                  isValid
                    ? "bg-brand-brown hover:bg-brand-brown-dark"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>

              {status === "success" && (
                <p className="text-green-600 text-sm text-center">
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm text-center">
                  Failed to send message. Try again later.
                </p>
              )}
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
              {/* <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-brand-brown" />
                <p className="text-muted-foreground">
                  24 blyth House, 535 southchurch Road, Southend on sea, Essex,
                  United Kingdom.
                </p>
              </div> */}
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-brand-brown" />
                <p className="text-muted-foreground">+44 7466 285592</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-brand-brown" />
                <p className="text-muted-foreground">pecolouk@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-brand-brown" />
                <p className="text-muted-foreground">
                  Mon – Fri: 9:00 AM – 6:00 PM
                </p>
              </div>
              <div className="flex space-x-4">
                {[
                  {
                    Icon: Facebook,
                    href: "https://www.facebook.com/share/1B7FMTcnXh/",
                  },
                  { Icon: Twitter, href: "#" },
                  {
                    Icon: FaTiktok,
                    href: "https://www.tiktok.com/@pecolo.uk?_t=ZN-908f48WdPl8&_r=1",
                  },
                  {
                    Icon: Instagram,
                    href: "https://www.instagram.com/pecolo_uk?igsh=M3c2YmVjMHRnNzNi",
                  },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="blank"
                    className="text-brand-brown hover:text-brand-brown-light transition-transform duration-200 hover:scale-110"
                    aria-label={Icon.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            {/* <div className="h-56 w-full bg-secondary rounded-xl flex items-center justify-center shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.504984055093!2d0.7304377000000001!3d51.5406386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8d843b4b0500f%3A0x43d45cd17de75d0e!2s24%2C%20Blyth%20House%2C%20535%20Southchurch%20Rd%2C%20Southend-on-Sea%20SS1%202AY%2C%20UK!5e0!3m2!1sen!2sng!4v1758044061665!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div> */}
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
