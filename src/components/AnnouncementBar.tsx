"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  AnnouncementBarConfig,
  getAnnouncementItems,
  resolveAnnouncementBarColors,
} from "@/lib/announcement-colors";

type Props = {
  initialConfig?: AnnouncementBarConfig | null;
};

function notifyEditorClick(sectionId: string) {
  if (typeof window === "undefined" || window.parent === window) return;
  window.parent.postMessage({ type: "ORBIT_SECTION_CLICK", sectionId }, "*");
}

export default function AnnouncementBar({ initialConfig }: Props) {
  const [config, setConfig] = useState<AnnouncementBarConfig | null>(
    initialConfig ?? null
  );

  useEffect(() => {
    setConfig(initialConfig ?? null);
  }, [initialConfig]);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.data?.type !== "ORBIT_CUSTOMIZATION_UPDATE") return;
      const next = event.data?.data?.announcementBar;
      if (next && typeof next === "object") {
        setConfig(next);
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const items = useMemo(() => getAnnouncementItems(config), [config]);
  const { backgroundColor, textColor } = useMemo(
    () => resolveAnnouncementBarColors(config ?? undefined),
    [config]
  );

  if (!items.length) return null;

  const isEditor =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("isEditor") === "true";

  return (
    <div
      className={`ecommerce-ticker-wrap orbit-announcement-bar${isEditor ? " cursor-pointer hover:outline hover:outline-2 hover:outline-blue-500/40" : ""}`}
      style={
        {
          "--announcement-bg": backgroundColor,
          "--announcement-text": textColor,
        } as React.CSSProperties
      }
      onClick={(event) => {
        event.stopPropagation();
        notifyEditorClick("announcementBar");
      }}
      role="region"
      aria-label="Store announcements"
    >
      <div className="ecommerce-ticker">
        {items.map((item, index) => (
          <div className="ticker-item" key={`${index}-${item.text}`}>
            {item.link ? <a href={item.link}>{item.text}</a> : <span>{item.text}</span>}
          </div>
        ))}
        {items.map((item, index) => (
          <div className="ticker-item" key={`dup-${index}-${item.text}`} aria-hidden="true">
            {item.link ? <a href={item.link}>{item.text}</a> : <span>{item.text}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
