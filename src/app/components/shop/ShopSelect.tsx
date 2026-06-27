"use client";

import React, { useEffect, useRef, useState } from "react";

type Option = {
  value: string;
  label: string;
};

type Props = {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
  compact?: boolean;
  ariaLabel?: string;
};

export default function ShopSelect({
  value,
  options,
  onChange,
  compact = false,
  ariaLabel,
}: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const selected = options.find((option) => option.value === value);

  return (
    <div
      ref={ref}
      className={`zn-shop-select ${compact ? "zn-shop-select--compact" : ""} ${open ? "is-open" : ""}`}
    >
      <button
        type="button"
        className="zn-shop-select__trigger"
        aria-label={ariaLabel}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span>{selected?.label}</span>
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
          <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <ul className="zn-shop-select__menu">
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                className={value === option.value ? "active" : ""}
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
