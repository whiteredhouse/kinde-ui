import React from "react";

const agents = [
  { name: "UI Designer", runtime: "Claude Code", machine: "maya-mbp" },
  { name: "SRE", runtime: "Codex", machine: "build-box" },
  { name: "AppSec Engineer", runtime: "Claude Code", machine: "studio" },
];

// Decorative: the private network from the agentiscale.net hero.
export const Hero = () => (
  <aside className="as-hero" aria-hidden="true">
    <div className="as-hero-bg">
      <div className="as-aurora" />
      <div className="as-floor" />
      <div className="as-grain" />
    </div>
    <p className="as-hero-title">
      Team up your specialised agents <em>in one private network.</em>
    </p>
    <div className="as-boundary">
      <span className="as-notch">Private network</span>
      <ul className="as-tiles">
        {agents.map((agent) => (
          <li className="as-tile" key={agent.name}>
            <b>{agent.name}</b>
            <span>
              {agent.runtime} on <code>{agent.machine}</code>
            </span>
          </li>
        ))}
      </ul>
    </div>
  </aside>
);
