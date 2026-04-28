"use client";

import { Share2, Bookmark } from "lucide-react";
import { useState } from "react";

interface JobActionsProps {
  title: string;
  company: string;
}

export default function JobActions({ title, company }: JobActionsProps) {
  const [isSaved, setIsSaved] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${title} at ${company}`,
          text: `Check out this opportunity: ${title} at ${company}`,
          url: window.location.href,
        });
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          console.error("Error sharing:", err);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    // In a real app, this would call an API to save to the database
    alert(isSaved ? "Removed from saved items" : "Saved to your profile!");
  };

  return (
    <div className="flex gap-2 w-full md:w-auto">
      <button 
        onClick={handleShare}
        className="flex-1 md:flex-none glass p-4 rounded-2xl hover:bg-muted/5 transition-all flex items-center justify-center"
        title="Share"
      >
        <Share2 className="w-5 h-5" />
      </button>
      <button 
        onClick={handleSave}
        className={`flex-1 md:flex-none glass p-4 rounded-2xl hover:bg-muted/5 transition-all flex items-center justify-center ${isSaved ? 'text-primary bg-primary/10' : ''}`}
        title="Save"
      >
        <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
      </button>
      <button className="flex-[3] md:flex-none bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
        Apply Now
      </button>
    </div>
  );
}
