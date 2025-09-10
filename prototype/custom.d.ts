import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": {
        children: Element | Element[]
        src: string
        "camera-controls"?: true;
        powerPreference?: string;
      };
    }
  }
}
