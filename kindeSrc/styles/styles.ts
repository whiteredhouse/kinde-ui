import { designTokens } from "./tokens";

// Kinde's widget reads --kinde-* custom properties. Each entry below points one
// of them at an AgentiScale design token. The tokens switch between light and
// dark with the system preference, so the "-dark" twin Kinde reads in dark
// mode gets the same value.
const kindeProperties: Record<string, string> = {
  // Page and type
  "base-font-family": "var(--as-font-family-sans)",
  "base-font-family-mono": "var(--as-font-family-mono)",
  "base-font-size": "15px",
  "base-line-height": "1.5",
  "base-color": "var(--as-color-text-primary)",
  "base-background-color": "var(--as-color-bg-canvas)",
  "base-accent-color": "var(--as-color-accent-strong)",
  "heading-color": "var(--as-color-text-primary)",
  "heading-font-family": "var(--as-font-family-sans)",
  "shared-color-text-label": "var(--as-color-text-primary)",
  "shared-color-text-caption": "var(--as-color-text-secondary)",
  "shared-color-invalid": "var(--as-color-danger-fg)",
  "shared-color-disabled-background": "var(--as-color-bg-sunken)",
  "shared-color-disabled-text": "var(--as-color-text-tertiary)",

  // Focus: the console's 2px ring with a 2px gap
  "base-focus-outline-color": "var(--as-c-focus-ring)",
  "base-focus-outline-width": "var(--as-c-focus-width)",
  "base-focus-outline-offset": "var(--as-c-focus-offset)",
  "base-focus-outline-style": "solid",

  // Buttons: lime primary, outlined secondary, 9px corners, 40px tall
  "button-border-radius": "var(--as-c-button-radius)",
  "button-block-size": "var(--as-c-button-height-comfortable)",
  "button-font-size": "14px",
  "button-font-weight": "var(--as-font-weight-semibold)",
  "button-primary-background-color": "var(--as-c-button-primary-bg)",
  "button-primary-background-color-hover": "var(--as-c-button-primary-bg-hover)",
  "button-primary-background-color-active": "var(--as-c-button-primary-bg-hover)",
  "button-primary-background-color-focus": "var(--as-c-button-primary-bg)",
  "button-primary-background-color-loading": "var(--as-c-button-primary-bg)",
  "button-primary-background-color-disabled": "var(--as-color-bg-sunken)",
  "button-primary-color": "var(--as-c-button-primary-text)",
  "button-primary-color-hover": "var(--as-c-button-primary-text)",
  "button-primary-color-active": "var(--as-c-button-primary-text)",
  "button-primary-color-focus": "var(--as-c-button-primary-text)",
  "button-primary-color-loading": "var(--as-c-button-primary-text)",
  "button-primary-color-disabled": "var(--as-color-text-tertiary)",
  "button-primary-border-color": "var(--as-c-button-primary-border)",
  "button-primary-border-width": "1px",
  "button-primary-border-style": "solid",
  "button-secondary-background-color": "var(--as-c-button-secondary-bg)",
  "button-secondary-background-color-hover": "var(--as-c-button-secondary-bg-hover)",
  "button-secondary-background-color-active": "var(--as-color-bg-pressed)",
  "button-secondary-background-color-focus": "var(--as-c-button-secondary-bg)",
  "button-secondary-background-color-loading": "var(--as-c-button-secondary-bg)",
  "button-secondary-background-color-disabled": "var(--as-color-bg-sunken)",
  "button-secondary-color": "var(--as-c-button-secondary-text)",
  "button-secondary-color-hover": "var(--as-c-button-secondary-text)",
  "button-secondary-color-active": "var(--as-c-button-secondary-text)",
  "button-secondary-color-focus": "var(--as-c-button-secondary-text)",
  "button-secondary-color-loading": "var(--as-c-button-secondary-text)",
  "button-secondary-color-disabled": "var(--as-color-text-tertiary)",
  "button-secondary-border-color": "var(--as-c-button-secondary-border)",
  "button-secondary-border-width": "1px",
  "button-secondary-border-style": "solid",
  "button-secondary-border-radius": "var(--as-c-button-radius)",
  "button-uncontained-color": "var(--as-color-text-link)",
  "button-uncontained-color-hover": "var(--as-color-text-link)",
  "button-uncontained-background-color-hover": "var(--as-color-bg-hover)",

  // Fields
  "control-select-text-border-radius": "var(--as-radius-sm)",
  "control-select-text-color": "var(--as-c-field-text)",
  "control-select-text-background-color": "var(--as-c-field-bg)",
  "control-select-text-background-color-hover": "var(--as-c-field-bg)",
  "control-select-text-background-color-focus": "var(--as-c-field-bg)",
  "control-select-text-background-color-invalid": "var(--as-c-field-bg)",
  "control-select-text-background-color-disabled": "var(--as-color-bg-sunken)",
  "control-select-text-background-color-readonly": "var(--as-color-bg-sunken)",
  "control-select-text-border-color": "var(--as-c-field-border)",
  "control-select-text-border-color-hover": "var(--as-color-text-secondary)",
  "control-select-text-border-color-focus": "var(--as-c-focus-ring)",
  "control-select-text-border-color-invalid": "var(--as-color-danger-fg)",
  "control-select-text-border-color-disabled": "var(--as-color-border-default)",
  "control-select-text-border-color-readonly": "var(--as-color-border-default)",
  "control-select-text-color-invalid": "var(--as-c-field-text)",
  "control-select-text-color-disabled": "var(--as-color-text-tertiary)",
  "control-select-text-color-readonly": "var(--as-color-text-secondary)",
  "control-label-color": "var(--as-color-text-primary)",
  "control-label-font-size": "14px",
  "control-label-font-weight": "var(--as-font-weight-semibold)",
  "control-associated-text-color": "var(--as-color-text-secondary)",
  "control-associated-text-font-size": "13px",
  "control-associated-text-invalid-message-color": "var(--as-color-danger-fg)",
  "control-checkable-border-color": "var(--as-c-field-border)",
  "control-checkable-background-color": "var(--as-c-field-bg)",
  "control-checkable-background-color-checked": "var(--as-color-text-primary)",
  "control-checkable-border-color-checked": "var(--as-color-text-primary)",

  // Links and the "or" separator
  "text-link-color": "var(--as-color-text-link)",
  "text-link-color-hover": "var(--as-color-text-link)",
  "text-link-color-active": "var(--as-color-text-link)",
  "text-link-color-focus": "var(--as-color-text-link)",
  "text-link-color-visited": "var(--as-color-text-link)",
  "text-link-font-weight": "var(--as-font-weight-semibold)",
  "choice-separator-color": "var(--as-color-text-tertiary)",

  // Cards and banners
  "card-background-color": "var(--as-color-bg-paper)",
  "card-border-color": "var(--as-color-border-default)",
  "card-border-radius": "var(--as-radius-lg)",
  "alert-banner-error-background-color": "var(--as-color-status-error-bg)",
  "alert-banner-error-border-color": "var(--as-color-status-error-border)",
  "alert-banner-error-color": "var(--as-color-status-error-text)",
  "alert-banner-info-background-color": "var(--as-color-bg-sunken)",
  "alert-banner-info-border-color": "var(--as-color-border-default)",
  "alert-banner-info-color": "var(--as-color-text-primary)",
  "alert-banner-border-radius": "var(--as-radius-sm)",
};

const kindeDeclarations = Object.entries(kindeProperties)
  .flatMap(([name, value]) => [
    `--kinde-${name}: ${value};`,
    `--kinde-${name}-dark: ${value};`,
  ])
  .join("\n    ");

const pageStyles = String.raw`
  /* Served by the console with a CORS header for the Kinde origin. */
  @font-face {
    font-family: Inter;
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    src: url("https://console.agentiscale.net/inter-latin.woff2") format("woff2");
  }

  :root {
    ${kindeDeclarations}
  }

  body {
    margin: 0;
    min-width: 320px;
    background: var(--as-color-bg-canvas);
    color: var(--as-color-text-primary);
    font-family: var(--as-font-family-sans);
    -webkit-font-smoothing: antialiased;
  }

  /* Sign-in column beside the hero panel; the panel drops below 960px. */
  .as-auth {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
    min-height: 100dvh;
  }

  .as-auth-main {
    display: grid;
    place-items: center;
    padding: var(--as-space-24) var(--as-space-16);
  }

  .as-auth-card {
    width: min(100%, 420px);
    background: var(--as-color-bg-paper);
    border: 1px solid var(--as-color-border-default);
    border-radius: 16px;
    padding: clamp(24px, 6vw, 40px);
  }

  .as-auth-head {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .as-brand {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    margin-bottom: 36px;
    color: var(--as-color-text-primary);
    font-size: 17px;
    font-weight: 650;
    letter-spacing: -0.03em;
    text-decoration: none;
  }

  .as-brand svg {
    width: 17px;
    height: 22px;
  }

  .as-auth-title {
    margin: 0;
    font-size: clamp(24px, 6vw, var(--as-type-h1-size));
    font-weight: var(--as-type-h1-weight);
    line-height: var(--as-type-h1-line);
    letter-spacing: var(--as-type-h1-tracking);
    text-wrap: balance;
  }

  .as-auth-description {
    margin: var(--as-space-12) 0 0;
    font-size: 15px;
    color: var(--as-color-text-secondary);
  }

  .as-auth-widget {
    margin-top: var(--as-space-32);
  }

  [data-kinde-choice-separator] {
    font-size: 13px;
  }

  [data-kinde-button] {
    transition:
      background-color var(--as-duration-120) var(--as-easing-standard),
      border-color var(--as-duration-120) var(--as-easing-standard);
  }

  /* Hero panel: the private network from the agentiscale.net hero */
  .as-hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--as-space-32);
    text-align: center;
    margin: var(--as-space-8);
    padding: clamp(32px, 5vw, 72px);
    border-radius: var(--as-radius-boundary);
    background: var(--as-color-bg-hero-deep);
    color: var(--as-color-text-hero);
    position: relative;
    isolation: isolate;
    overflow: hidden;
  }

  /* Background from the agentiscale.net hero: aurora glow, floor grid, grain */
  .as-hero-bg {
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
  }

  .as-aurora {
    position: absolute;
    left: 50%;
    top: -260px;
    width: 1300px;
    height: 760px;
    transform: translateX(-50%);
    background:
      radial-gradient(closest-side, rgba(197, 237, 147, 0.2), transparent 70%),
      radial-gradient(closest-side at 30% 60%, rgba(120, 170, 255, 0.1), transparent 70%),
      radial-gradient(closest-side at 72% 55%, rgba(240, 197, 120, 0.07), transparent 70%);
    filter: blur(20px);
  }

  .as-floor {
    position: absolute;
    left: -10%;
    right: -10%;
    bottom: -10%;
    height: 70%;
    transform: perspective(900px) rotateX(62deg);
    transform-origin: 50% 100%;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
    background-size: 64px 64px;
    -webkit-mask-image: radial-gradient(ellipse 60% 70% at 50% 30%, #000 20%, transparent 75%);
    mask-image: radial-gradient(ellipse 60% 70% at 50% 30%, #000 20%, transparent 75%);
  }

  .as-grain {
    position: absolute;
    inset: 0;
    opacity: 0.5;
    mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 .09 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }

  .as-hero-title {
    margin: 0;
    max-width: 16ch;
    font-size: clamp(32px, 3.6vw, var(--as-type-display-s-size));
    font-weight: 680;
    line-height: 1.04;
    letter-spacing: -0.035em;
    text-wrap: balance;
  }

  .as-hero-title em {
    font-style: normal;
    color: var(--as-color-hero-fresh);
  }

  .as-boundary {
    position: relative;
    width: 100%;
    max-width: 560px;
    text-align: left;
    margin-top: 14px;
    padding: 34px 18px 18px;
    border: var(--as-c-boundary-width-hero) solid var(--as-color-hero-fresh);
    border-radius: var(--as-c-boundary-radius);
  }

  .as-notch {
    position: absolute;
    top: -13px;
    left: 18px;
    display: inline-flex;
    align-items: center;
    height: 26px;
    padding: 0 10px;
    border-radius: var(--as-radius-sm);
    background: var(--as-color-accent-bg);
    color: var(--as-color-text-on-accent);
    font-size: 13px;
    font-weight: var(--as-font-weight-semibold);
    white-space: nowrap;
  }

  .as-tiles {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .as-tile {
    display: grid;
    gap: 4px;
    padding: 12px 14px;
    border: 1px solid var(--as-color-border-hero);
    border-radius: 12px;
    background: rgba(12, 17, 23, 0.72);
  }

  .as-tile b {
    font-size: 15px;
    font-weight: var(--as-font-weight-semibold);
  }

  .as-tile span {
    font-size: 13px;
    color: var(--as-color-text-hero-muted);
  }

  .as-tile code {
    font-family: var(--as-font-family-mono);
    font-size: 12.5px;
    color: var(--as-color-text-hero);
  }

  @media (max-width: 959px) {
    .as-auth {
      grid-template-columns: minmax(0, 1fr);
    }

    .as-hero {
      display: none;
    }
  }

  @media (max-width: 479px) {
    .as-auth-main {
      place-items: start center;
    }

    .as-auth-card {
      border: 0;
      background: transparent;
      padding: var(--as-space-8) 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [data-kinde-button] {
      transition: none;
    }
  }
`;

export const getStyles = (): string => designTokens + pageStyles;
