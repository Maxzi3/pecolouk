"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const isHome = pathname === "/";

 const navItems = [
   { name: "Home", path: "/" },
   { name: "About", path: "/about-us" },
   { name: "Services", path: "/services" },
   { name: "Blog", path: "/blog" },
   { name: "Contact", path: "/contact" },
 ];

 const handleNavClick = (link: { path: string }) => {
   router.push(link.path);
   setIsOpen(false);
 };


  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] lg:w-[90%] max-w-7xl bg-background backdrop-blur-lg border border-border/50 rounded-2xl z-40 shadow-soft">
      <div className="px-6" ref={menuRef}>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`text-sm font-medium transition-colors hover:text-brand-brown ${
                  pathname === item.path
                    ? "text-brand-brown border-b-2 border-brand-brown"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </button>
            ))}

            <Link href="/contact">
              <Button className="bg-brand-brown hover:bg-brand-brown-dark text-white">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </button>
              ))}

              <Link href="/contact">
                <Button>Get a Quote</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
