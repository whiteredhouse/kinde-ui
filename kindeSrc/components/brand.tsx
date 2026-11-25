import React from "react";

// The AgentiScale mark: three rising bars, drawn in the current text colour.
export const BrandMark = () => (
  <svg viewBox="0 0 28 36" aria-hidden="true" focusable="false">
    <path
      d="M2.50 32.00 L8.50 30.39 L8.50 17.39 L2.50 19.00 Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path
      d="M11.50 29.59 L17.50 27.98 L17.50 6.98 L11.50 8.59 Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path
      d="M20.50 27.18 L26.50 25.57 L26.50 -2.43 L20.50 -0.82 Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

export const Brand = () => (
  <a className="as-brand" href="https://agentiscale.net" aria-label="AgentiScale home">
    <BrandMark />
    <span>agentiscale.</span>
  </a>
);
