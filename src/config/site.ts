export interface SocialLinks {
  youtube?: string;
  facebook?: string;
  instagram?: string;
}

export interface ContactInfo {
  email: string;
  location: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const siteConfig = {
  // Company Info
  name: "Kili.ai",
  tagline: "Your Business Never Sleeps",
  description: "Transform your customer service with AI voice agents that handle reservations, appointments, and inquiries 24/7. Perfect for restaurants, clinics, real estate, and more.",
  
  // Contact Information
  contact: {
    email: "info@kili-ai.com",
    location: "Ostrava, Czech Republic"
  } as ContactInfo,
  
  // Social Media Links
  social: {
    youtube: "#",
    facebook: "#",
    instagram: "#"
  } as SocialLinks,
  
  // Services Section
  services: [
    {
      title: "Restaurant Bookings",
      description: "AI agents that handle reservations, answer menu questions, and manage special requests 24/7.",
      icon: "UtensilsCrossed"
    },
    {
      title: "Medical Reception",
      description: "Schedule appointments, handle patient inquiries, and manage follow-ups automatically.",
      icon: "Stethoscope"
    },
    {
      title: "Real Estate Agents",
      description: "Qualify leads, schedule viewings, and answer property questions round the clock.",
      icon: "Building2"
    },
    {
      title: "Appointment Booking",
      description: "Perfect for salons, spas, and service businesses. Handle bookings effortlessly.",
      icon: "CalendarClock"
    },
    {
      title: "Inbound Calls",
      description: "Never miss a call. Our AI agents handle customer inquiries with natural conversation.",
      icon: "Phone"
    },
    {
      title: "Outbound Campaigns",
      description: "Proactive communication for appointments, follow-ups, and promotional campaigns.",
      icon: "MessageSquare"
    }
  ],

  // Process Steps
  processSteps: [
    {
      number: "01",
      title: "Intro Call",
      description: "Quick chat to understand your needs and demonstrate our AI voice agents in action."
    },
    {
      number: "02",
      title: "Strategy",
      description: "We present a tailored solution with clear pricing and implementation timeline."
    },
    {
      number: "03",
      title: "Launch",
      description: "Swift setup of your AI voice agent, with ongoing support and optimization."
    }
  ]
};

export default siteConfig;