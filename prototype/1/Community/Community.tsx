import { ContentBlock, mock, SectionHeader } from "@/prototype/1";

export const Community = () => (
  <>
    <SectionHeader>{mock.community.title}</SectionHeader>
    <ContentBlock className="text-sm px-6">{mock.community.blurb}</ContentBlock>
  </>
);
