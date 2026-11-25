import React from "react";
import { Hero } from "../components/hero";

export const DefaultLayout = (props: { children: React.ReactNode }) => {
  return (
    <div className="as-auth">
      {props.children}
      <Hero />
    </div>
  );
};
