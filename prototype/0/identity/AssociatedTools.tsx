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
import { mock } from "@/prototype/0";

type Props = ComponentProps<typeof Card>;

export const AssociatedTools = ({ className, ...props }: Props) => (
  <Card className={cn(className)} {...props}>
    <CardHeader>
      <CardTitle>{mock.tools.title}</CardTitle>
      <CardDescription>{mock.tools.description}</CardDescription>
    </CardHeader>

    <CardContent className="space-y-2">
      <Button
        variant="outline"
        className="w-full justify-between"
        aria-label={mock.tools.items.warrantyCheck}
      >
        <span className="inline-flex items-center gap-2">
          <ShieldCheck className="size-4" />
          {mock.tools.items.warrantyCheck}
        </span>
        <ArrowRight className="size-4" />
      </Button>

      <Button
        variant="outline"
        className="w-full justify-between"
        aria-label={mock.tools.items.antiCounterfeit}
      >
        <span className="inline-flex items-center gap-2">
          <ScanEye className="size-4" />
          {mock.tools.items.antiCounterfeit}
        </span>
        <ArrowRight className="size-4" />
      </Button>

      <Button
        className="w-full justify-center"
        aria-label={mock.tools.items.sendPassport}
      >
        <Send className="me-2 size-4" />
        {mock.tools.items.sendPassport}
      </Button>
    </CardContent>
  </Card>
);
