"use client";

import { Building2, Users, Trophy, Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";

const AboutPage = () => {
  const coreValues = [
    {
      icon: <Target className="h-8 w-8 text-brand-brown" />,
      title: "Integrity",
      description:
        "We believe in honesty, transparency, and always doing the right thing for our clients.",
    },
    {
      icon: <Users className="h-8 w-8 text-brand-brown" />,
      title: "Client Focus",
      description:
        "Every decision we make puts our clients’ needs at the heart of the process.",
    },
    {
      icon: <Trophy className="h-8 w-8 text-brand-brown" />,
      title: "Excellence",
      description:
        "We go above and beyond to deliver outstanding results in every project we handle.",
    },
    {
      icon: <Building2 className="h-8 w-8 text-brand-brown" />,
      title: "Innovation",
      description:
        "We embrace modern solutions to provide smarter and more efficient services.",
    },
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/team/sarah.jpg",
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image: "/team/michael.jpg",
    },
    {
      name: "Emma Rodriguez",
      role: "Property Manager",
      image: "/team/emma.jpg",
    },
    {
      name: "James Smith",
      role: "Client Relations",
      image: "/team/james.jpg",
    },
  ];

  return (
    <main className="text-foreground">
      {/* Hero Section */}

      <HeroSection
        title="About Us"
        subtitle="With over 4 years of experience, Pecolo has become a trusted name in real estate. From property management to serviced apartments, we deliver exceptional service that creates lasting value."
        image="/images/hero-1.jpg"
      />

      {/* Vision */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="flex justify-center mb-4">
            <Eye className="h-10 w-10 text-brand-brown" />
          </div>
          <h2 className="text-3xl font-bold text-brand-brown mb-6">
            Our Vision
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            To redefine the real estate experience by creating sustainable,
            client-focused solutions that empower individuals and businesses to
            thrive in modern communities.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-brown mb-6">
            Our Mission
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            To provide real estate solutions that exceed expectations by
            combining professionalism, innovation, and a client-first approach.
            We aim to simplify property ownership and investment while creating
            sustainable growth opportunities.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-brown text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition">
                <CardContent className="p-0 text-center">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-brand-brown mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <h2 className="text-3xl font-bold text-brand-brown mb-6">
            Why Choose Pecolo?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Choosing the right partner in real estate can make all the
            difference. At Pecolo, we pride ourselves on our proven track
            record, personalized service, and unwavering commitment to your
            success.
          </p>
          <Link href="/contact">
            <Button className="bg-brand-brown hover:bg-brand-brown-dark text-white">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-brown text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition"
              >
                <CardContent className="p-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-brand-brown">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
