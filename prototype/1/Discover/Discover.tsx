import { ContentBlock, mock, SectionHeader, Video } from "@/prototype/1";
import { Viewer } from "./Viewer";

export const Discover = () => (
  <>
    <SectionHeader>{mock.discover.title}</SectionHeader>
    <ContentBlock>
      <Viewer />
    </ContentBlock>

    <SectionHeader>{mock.story.title}</SectionHeader>
    <ContentBlock>
      <Video sources={mock.story.video} />
    </ContentBlock>
  </>
);
