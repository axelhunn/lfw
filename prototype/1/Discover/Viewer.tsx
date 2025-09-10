import { ModelViewerClientSide } from "./ModelViewerClientSide";

export const Viewer = () => (
  <ModelViewerClientSide
    src="/yaku-model.glb"
    poster="/product-model-placeholder.webp"
    camera-controls
    powerPreference="low-power"
    className="w-full h-[546]"
  >
    <div slot="progress-bar"></div>
  </ModelViewerClientSide>
);
