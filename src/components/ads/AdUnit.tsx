"use client";

import { useEffect } from "react";

interface AdUnitProps {
  slot: string;
  format?: "auto" | "fluid" | "rectangle";
  style?: React.CSSProperties;
}

export default function AdUnit({ slot, format = "auto", style }: AdUnitProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("Adsense error:", err);
    }
  }, []);

  return (
    <div className="ad-container my-8 flex justify-center overflow-hidden">
      <ins
        className="adsbygoogle"
        style={style || { display: "block", minWidth: "250px", minHeight: "90px" }}
        data-ad-client="ca-pub-8710423330759174"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
