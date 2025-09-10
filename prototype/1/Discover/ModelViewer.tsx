"use client";

import React, { JSX, JSXElementConstructor, useEffect } from "react";

export interface ModelViewerProps {
  src: string;
  poster?: string;
  children: JSX.Element | JSX.Element[];
  "camera-controls"?: true;
  powerPreference?: "low-power";
  className?: string;
}

export const ModelViewer: React.FC<ModelViewerProps> = (props) => {
  // client-side import only. Will not work in SSR context.
  useEffect(() => {
    import("@google/model-viewer");
  }, []);

  return <model-viewer {...props}></model-viewer>;
};
