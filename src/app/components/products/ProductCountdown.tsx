"use client";

import React from "react";
import { useCountdown } from "@/hooks/useCountdown";

type Props = {
  targetDate: Date | string;
  variant?: "card" | "deal";
  className?: string;
};

export default function ProductCountdown({
  targetDate,
  variant = "card",
  className = "",
}: Props) {
  const timeLeft = useCountdown(targetDate);
  const wrapperClass =
    variant === "deal"
      ? "tp-product-countdown tp-deal-countdown"
      : "tp-product-countdown";

  return (
    <div className={`${wrapperClass} ${className}`.trim()}>
      <div className="tp-product-countdown-inner">
        <ul className="mb-0 pl-0">
          <li>
            <span data-days>{timeLeft.days}</span> Days
          </li>
          <li>
            <span data-hours>{timeLeft.hours}</span> Hrs
          </li>
          <li>
            <span data-minutes>{timeLeft.minutes}</span> Mins
          </li>
          <li>
            <span data-seconds>{timeLeft.seconds}</span> Secs
          </li>
        </ul>
      </div>
    </div>
  );
}
