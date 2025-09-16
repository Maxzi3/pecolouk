import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import CallToActionSection from "@/components/CallToActionSection";
import HeroSlider from "@/components/HeroSlider";
import ServicesSection from "@/components/ServiceSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import { blogPosts } from "@/data/blogData";

const page = () => {
  return (
    <>
      <HeroSlider />
      <ServicesSection />
      <StatsSection />
      <AboutSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <BlogSection posts={blogPosts.slice(0, 3)} />
      <CallToActionSection />
    </>
  );
};

export default page;
