import { AssociatedTools } from "./AssociatedTools";
import { ChainOfCustody } from "./ChainOfCustody";
import { Details } from "./Details";

type Props = {
  id?: string;
  /** kept for future sections, currently unused per scope */
  nextHref?: string;
};

export const Identity = ({ id = "identity" }: Props) => (
  <section id={id} className="scroll-mt-20 py-6" aria-label="Identity & Proof">
    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
      {/* Left column */}
      <div className="space-y-4">
        <Details />
        <ChainOfCustody />
      </div>

      {/* Right column */}
      <div className="space-y-4">
        <AssociatedTools />
      </div>
    </div>
  </section>
);
