import { CareGuide } from "./CareGuide";
import { Materials } from "./Materials";
import { ServiceabilityView } from "./ServiceabilityView";

type Props = {
  id?: string;
  /** kept for future sections, currently unused per scope */
  nextHref?: string;
};

export const Care = ({ id = "care" }: Props) => (
  <section id={id} className="scroll-mt-20 py-6" aria-label="Care & Repair">
    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
      {/* Left column */}
      <div className="space-y-4">
        <ServiceabilityView />
        <CareGuide />
      </div>

      {/* Right column */}
      <div className="space-y-4">
        <Materials />
      </div>
    </div>
  </section>
);
