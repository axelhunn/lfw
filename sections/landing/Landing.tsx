import { AboutExcerpt } from "./AboutExcerpt";
import { Hero } from "./Hero";

type Props = {
  id?: string;
  nextHref?: string;
};

export const Landing = ({ id = "landing", nextHref = "#identity" }: Props) => (
  <section id={id} className="scroll-mt-20 space-y-4" aria-label="Landing">
    <header>
      <Hero nextHref={nextHref} className="min-h-[60vh]" />
    </header>
    <section aria-labelledby="about-heading">
      <AboutExcerpt titleId="about-heading" />
    </section>
  </section>
);
