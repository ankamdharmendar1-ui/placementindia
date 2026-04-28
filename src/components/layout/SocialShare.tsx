import { useState, useEffect } from "react";

interface SocialShareProps {
  title: string;
  company: string;
}

export default function SocialShare({ title, company }: SocialShareProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getUrl = () => {
    if (typeof window === "undefined") return "";
    return window.location.href;
  };

  const text = encodeURIComponent(`Check out this opportunity: ${title} at ${company}`);
  const url = encodeURIComponent(getUrl());
  
  if (!mounted) return <div className="h-10" />; // Placeholder to avoid layout shift
  
  const platforms = [
    { 
      name: "WhatsApp", 
      url: `https://wa.me/?text=${text}%20${url}` 
    },
    { 
      name: "LinkedIn", 
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${url}` 
    },
    { 
      name: "Twitter", 
      url: `https://twitter.com/intent/tweet?text=${text}&url=${url}` 
    },
    { 
      name: "Email", 
      url: `mailto:?subject=${encodeURIComponent(title)}&body=${text}%20${url}` 
    },
  ];

  return (
    <div className="flex justify-center flex-wrap gap-4">
      {platforms.map(platform => (
        <a 
          key={platform.name} 
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 glass rounded-xl text-sm font-bold hover:bg-primary hover:text-white transition-all inline-block"
        >
          {platform.name}
        </a>
      ))}
    </div>
  );
}
