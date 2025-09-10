import { ContentBlock, mock, SectionHeader } from "@/prototype/1";
import { Viewer } from "./Viewer";

export const Discover = () => (
  <>
    <SectionHeader>{mock.discover.title}</SectionHeader>
    <ContentBlock>
      <Viewer />
    </ContentBlock>
  </>
);
