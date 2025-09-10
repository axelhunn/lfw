import { ArrowRight } from "lucide-react";
import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { mock } from "@/prototype/0";

type Props = ComponentProps<typeof Card> & {
  nextHref?: string;
};

export const Hero = ({
  nextHref = "#identity",
  className,
  ...props
}: Props) => (
  <Card
    className={cn("place-content-center text-center", className)}
    {...props}
  >
    <CardHeader className="text-center">
      <CardDescription className="uppercase tracking-wide">
        {mock.landingHero.description}
      </CardDescription>
      <CardTitle className="text-3xl sm:text-4xl">
        {mock.landingHero.title}
      </CardTitle>
    </CardHeader>

    <CardContent className="flex justify-center">
      <Button asChild aria-label="View passport">
        <a href={nextHref}>
          {mock.landingHero.ctaLabel}
          <ArrowRight className="ms-2 size-4" />
        </a>
      </Button>
    </CardContent>
  </Card>
);
