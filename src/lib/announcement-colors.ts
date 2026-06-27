const DEFAULT_ANNOUNCEMENT_BG = "#ef4444";

function expandHex(hex: string): string | null {
  const value = hex.replace("#", "").trim();
  if (/^[0-9a-fA-F]{3}$/.test(value)) {
    return value.split("").map((char) => char + char).join("");
  }
  if (/^[0-9a-fA-F]{6}$/.test(value)) {
    return value;
  }
  return null;
}

export function normalizeHex(color: string, fallback = DEFAULT_ANNOUNCEMENT_BG): string {
  const expanded = expandHex(String(color || "").trim());
  if (!expanded) return fallback;
  return `#${expanded.toLowerCase()}`;
}

function getRelativeLuminance(r: number, g: number, b: number): number {
  const channels = [r, g, b].map((value) => {
    const channel = value / 255;
    return channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

export function getContrastingTextColor(backgroundColor: string): "#ffffff" | "#111111" {
  const hex = normalizeHex(backgroundColor);
  const expanded = expandHex(hex);
  if (!expanded) return "#ffffff";

  const r = parseInt(expanded.slice(0, 2), 16);
  const g = parseInt(expanded.slice(2, 4), 16);
  const b = parseInt(expanded.slice(4, 6), 16);
  return getRelativeLuminance(r, g, b) > 0.55 ? "#111111" : "#ffffff";
}

export function resolveAnnouncementBarColors(config?: {
  backgroundColor?: string;
  textColor?: string;
}) {
  const backgroundColor = normalizeHex(config?.backgroundColor || DEFAULT_ANNOUNCEMENT_BG);
  const textColor = config?.textColor
    ? normalizeHex(config.textColor, getContrastingTextColor(backgroundColor))
    : getContrastingTextColor(backgroundColor);

  return { backgroundColor, textColor };
}

export type AnnouncementBarConfig = {
  enabled?: boolean;
  text?: string;
  link?: string;
  backgroundColor?: string;
  textColor?: string;
  announcements?: Array<{ text?: string; link?: string }>;
};

export function getAnnouncementItems(config?: AnnouncementBarConfig | null) {
  if (!config || config.enabled === false) return [];

  if (Array.isArray(config.announcements)) {
    return config.announcements
      .map((item) => ({
        text: String(item?.text || "").trim(),
        link: item?.link ? String(item.link).trim() : "",
      }))
      .filter((item) => item.text);
  }

  const legacyText = String(config.text || "").trim();
  if (legacyText) {
    return [{ text: legacyText, link: config.link ? String(config.link).trim() : "" }];
  }

  return [];
}

export { DEFAULT_ANNOUNCEMENT_BG };
