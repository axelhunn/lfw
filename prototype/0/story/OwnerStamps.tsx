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

export const OwnerStamps = (props: Props) => (
  <Card {...props}>
    <CardHeader>
      <CardTitle>{mock.story.stamps.title}</CardTitle>
      <CardDescription>{mock.story.stamps.description}</CardDescription>
    </CardHeader>

    <CardContent className="space-y-2">
      {mock.story.stamps.items.map((stamp, i) => (
        <div
          key={`${stamp.title}-${i}`}
          className="rounded-lg border px-3 py-2 text-sm"
        >
          <div className="text-muted-foreground text-xs">{stamp.meta}</div>
          <div className="font-medium">{stamp.title}</div>
          {"detail" in stamp && stamp.detail ? (
            <div className="text-muted-foreground">{stamp.detail}</div>
          ) : null}
        </div>
      ))}
    </CardContent>
  </Card>
);
