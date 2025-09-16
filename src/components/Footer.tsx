import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-brand-brown text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <Logo />
            <p className="text-gray-200 mb-6 text-sm leading-relaxed">
              Your trusted partner in real estate excellence. Delivering
              professional property management and investment solutions since
              2021.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Instagram, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="text-gray-200 hover:text-brand-brown-light transition-transform duration-200 hover:scale-110"
                  aria-label={Icon.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-scale-in">
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about-us", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/blog", label: "Blog" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }, i) => (
                <li key={i}>
                  <Link
                    href={to}
                    className="text-gray-200 hover:text-brand-brown-light transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-scale-in">
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>Property Management</li>
              <li>Serviced Apartments</li>
              <li>Rent-to-Rent</li>
              <li>Buying & Selling</li>
              <li>Investment Advice</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-scale-in">
            <h4 className="text-lg font-semibold mb-4 text-white">
              Contact Info
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-brand-brown-light" />
                <span className="text-gray-200">
                  24 blyth House, 535 southchurch Road, Southend on sea,Essex,
                  United Kingdom.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-brand-brown-light" />
                <a
                  href="tel:+442012345678"
                  className="text-gray-200 hover:text-brand-brown-light transition-colors duration-200"
                >
                  +44 7466 285592
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-brand-brown-light" />
                <a
                  href="mailto:info@estatecore.co.uk"
                  className="text-gray-200 hover:text-brand-brown-light transition-colors duration-200"
                >
                  Chike@pecolo.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-brown-light mt-8 pt-8 text-center">
          <p className="text-gray-200 text-sm">
            © {new Date().getFullYear()} Pecolo uk limited. All rights reserved.
            |{" "}
            <Link
              href="#"
              className="hover:text-brand-brown-light transition-colors duration-200"
            >
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link
              href="#"
              className="hover:text-brand-brown-light transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
