import { ArrowRight, BadgeCheck, ShieldCheck } from "lucide-react";
import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { mock } from "@/prototype/0";

type Props = ComponentProps<typeof Card> & {
  nextHref?: string;
};

export const Proof = ({ nextHref = "#story", className, ...props }: Props) => (
  <Card className={cn(className)} {...props}>
    <CardHeader>
      <CardTitle>{mock.proof.title}</CardTitle>
      <CardDescription>{mock.proof.description}</CardDescription>
    </CardHeader>

    <CardContent>
      <ul className="space-y-2 text-sm">
        <li className="flex items-start gap-2">
          <ShieldCheck className="size-4 mt-0.5" />
          <span>
            {mock.proof.authenticityLabel}{" "}
            <strong>{mock.proof.authenticityValue}</strong>
          </span>
        </li>
        <li className="flex items-start gap-2">
          <BadgeCheck className="size-4 mt-0.5" />
          <span>{mock.proof.boundMessage}</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-muted-foreground">
            {mock.proof.onChainLabel}
          </span>
          <code className="rounded border px-1.5 py-0.5 text-xs">
            {mock.proof.onChainId}
          </code>
        </li>
      </ul>
    </CardContent>

    <CardFooter className="justify-between border-t">
      <Button asChild variant="outline">
        <a href="#identity-qr" aria-label={mock.proof.showQrLabel}>
          {mock.proof.showQrLabel}
        </a>
      </Button>
      <Button asChild aria-label="Continue to Story">
        <a href={nextHref}>
          {mock.proof.continueLabel}
          <ArrowRight className="ms-2 size-4" />
        </a>
      </Button>
    </CardFooter>
  </Card>
);
