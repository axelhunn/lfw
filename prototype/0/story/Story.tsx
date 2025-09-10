import { AddStamp } from "./AddStamp";
import { OwnerStamps } from "./OwnerStamps";
import { StoryMedia } from "./StoryMedia";

type Props = {
  id?: string;
  /** kept for future sections, currently unused per scope */
  nextHref?: string;
};

export const Story = ({ id = "story" }: Props) => (
  <section id={id} className="scroll-mt-20 py-6" aria-label="Story & Media">
    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
      {/* Left column */}
      <div className="space-y-4">
        <StoryMedia />
      </div>

      {/* Right column */}
      <div className="space-y-4">
        <OwnerStamps />
        <AddStamp />
      </div>
    </div>
  </section>
);
