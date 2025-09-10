"use client";

import dynamic from "next/dynamic";

export const ModelViewerClientSide = dynamic(
  () => import("./ModelViewer").then((mod) => mod.ModelViewer),
  {
    ssr: false,
  }
);
