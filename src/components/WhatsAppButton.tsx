"use client";

import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+447466285592"; 
    const message = "Hello! I'm interested in your real estate services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center justify-center"
      size="sm"
    >
      <FaWhatsapp className="h-6 w-6" />
    </Button>
  );
};

export default WhatsAppButton;
