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

type Props = ComponentProps<typeof Card> & {
  nextHref?: string;
};

export const Proof = ({ nextHref = "#story", className, ...props }: Props) => (
  <Card className={cn(className)} {...props}>
    <CardHeader>
      <CardTitle>Proof</CardTitle>
      <CardDescription>Authenticity & provenance</CardDescription>
    </CardHeader>

    <CardContent>
      <ul className="space-y-2 text-sm">
        <li className="flex items-start gap-2">
          <ShieldCheck className="size-4 mt-0.5" />
          <span>
            Authenticity: <strong>Verified</strong>
          </span>
        </li>
        <li className="flex items-start gap-2">
          <BadgeCheck className="size-4 mt-0.5" />
          <span>NFC tag and passport bound to this physical item.</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-muted-foreground">On-chain proof:</span>
          <code className="rounded border px-1.5 py-0.5 text-xs">
            0x8f1c…d2a9
          </code>
        </li>
      </ul>
    </CardContent>

    <CardFooter className="justify-between border-t">
      <Button asChild variant="outline">
        <a href="#identity-qr" aria-label="Show QR code for verification">
          Show QR
        </a>
      </Button>
      <Button asChild aria-label="Continue to Story">
        <a href={nextHref}>
          Continue
          <ArrowRight className="ms-2 size-4" />
        </a>
      </Button>
    </CardFooter>
  </Card>
);
