import type { ComponentProps } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { mock } from "@/prototype/0";

type Props = ComponentProps<typeof Card>;

export const ServiceabilityView = (props: Props) => (
  <Card {...props}>
    <CardHeader>
      <CardTitle>{mock.care.serviceability.title}</CardTitle>
      <CardDescription>{mock.care.serviceability.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="rounded-xl border aspect-[4/3] grid place-content-center text-muted-foreground">
        Exploded garment view
      </div>
      <p className="mt-2 text-xs text-muted-foreground">
        {mock.care.serviceability.caption}
      </p>
    </CardContent>
  </Card>
);
