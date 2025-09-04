import { ArrowRight, ScanEye, Send, ShieldCheck } from "lucide-react";
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

type Props = ComponentProps<typeof Card>;

export const AssociatedTools = ({ className, ...props }: Props) => (
  <Card className={cn(className)} {...props}>
    <CardHeader>
      <CardTitle>Associated tools</CardTitle>
      <CardDescription>Verification & actions</CardDescription>
    </CardHeader>

    <CardContent className="space-y-2">
      <Button
        variant="outline"
        className="w-full justify-between"
        aria-label="Warranty check"
      >
        <span className="inline-flex items-center gap-2">
          <ShieldCheck className="size-4" />
          Warranty check
        </span>
        <ArrowRight className="size-4" />
      </Button>

      <Button
        variant="outline"
        className="w-full justify-between"
        aria-label="Anti-counterfeit verify"
      >
        <span className="inline-flex items-center gap-2">
          <ScanEye className="size-4" />
          Anti-counterfeit verify
        </span>
        <ArrowRight className="size-4" />
      </Button>

      <Button className="w-full justify-center" aria-label="Send passport">
        <Send className="me-2 size-4" />
        Send passport
      </Button>
    </CardContent>
  </Card>
);
