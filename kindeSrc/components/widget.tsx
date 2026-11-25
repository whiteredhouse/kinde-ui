"use server";

import React from "react";
import { getKindeWidget } from "@kinde/infrastructure";
import { Brand } from "./brand";

export const Widget = (props: { heading: string; description: string }) => {
  return (
    <main className="as-auth-main">
      <div className="as-auth-card">
        <Brand />
        <h1 className="as-auth-title">{props.heading}</h1>
        {props.description && (
          <p className="as-auth-description">{props.description}</p>
        )}
        <div className="as-auth-widget">{getKindeWidget()}</div>
      </div>
    </main>
  );
};
