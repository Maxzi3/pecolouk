import Link from 'next/link';
import { Button } from '@/components/ui/button'; 

const CallToActionSection = () => {
  return (
    <section className="py-16 bg-brand-brown text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Whether you&apos;re looking to invest, rent, or need property
          management services, our expert team is here to help you achieve your
          real estate goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="border-white hover:text-brand-brown px-8"
            >
              Get Free Consultation
            </Button>
          </Link>
          <Link href="/services">
            <Button
              size="lg"
              className="bg-white text-brand-brown hover:bg-gray-100 px-8"
            >
              View Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
