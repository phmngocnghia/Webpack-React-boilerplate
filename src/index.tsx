import * as React from "react";
import { render } from "react-dom";
import { App } from "@components";

const rootElm = document.getElementById("root");

console.log();

if (rootElm) {
  render(<App />, rootElm);

  if (process.env.NODE_ENV !== "development") {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then(() => {
            console.log("SW registered: ");
          })
          .catch(() => {
            console.log("SW registration failed: ");
          });
      });
    }
  }
}
