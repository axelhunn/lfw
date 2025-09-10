import type { ComponentProps } from "react";

type VideoSources = {
  av1?: string;
  webm?: string;
  h264: string;
};

type Props = ComponentProps<"video"> & {
  sources: VideoSources;
};

export const Video = ({ sources, ...props }: Props) => (
  <video
    playsInline
    muted
    autoPlay
    loop
    preload="metadata"
    controls={false}
    controlsList="nodownload noplaybackrate nodetachpictureinpicture"
    disablePictureInPicture
    {...props}
  >
    {sources.av1 && <source src={sources.av1} type="video/mp4" />}
    {sources.webm && <source src={sources.webm} type="video/webm" />}
    <source src={sources.h264} type="video/mp4" />
  </video>
);
