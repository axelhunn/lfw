import Image from "next/image";
import { ContentBlock, mock, SectionHeader } from "@/prototype/1";
import { FloatingCard } from "./FloatingCard";

export const Hero = () => (
  <>
    <div className="relative h-[546px] w-full">
      <Image
        src={mock.hero.image}
        alt="YAKU hero"
        fill
        sizes="375px"
        className="object-contain"
        priority
      />
      <FloatingCard
        title={mock.hero.title}
        uid={mock.hero.uid}
        verifiedLabel={mock.hero.verifiedLabel}
        badgeSrc={mock.hero.badge}
        className="absolute left-1/2 top-[260px] w-[270px] -translate-x-1/2"
      />
    </div>

    <section aria-labelledby="about-heading">
      <SectionHeader id="about-heading">{mock.about.title}</SectionHeader>
      <ContentBlock className="px-6">
        <p className="text-[14px] leading-[1.43] text-foreground/90">
          {mock.about.body}
        </p>
      </ContentBlock>
    </section>
  </>
);
