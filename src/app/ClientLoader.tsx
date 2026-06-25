/* eslint-disable */
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientLoader() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const timer = setTimeout(() => {
        const event = new CustomEvent("load");
        window.dispatchEvent(event);
      }, 150); // Small delay to ensure DOM is fully ready
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return null;
}
