import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function WhatsAppButton() {
  const message = encodeURIComponent("Hi Edemrey Homes, I'm interested in starting my land banking journey. Can I get details on the Mowe project?");
  const whatsappUrl = `${BUSINESS_INFO.WHATSAPP}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-gold text-forest p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-4 bg-forest text-gold px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
        Chat with a Consultant
      </span>
    </a>
  );
}
