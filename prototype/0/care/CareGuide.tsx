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

export const CareGuide = (props: Props) => (
  <Card {...props}>
    <CardHeader>
      <CardTitle>{mock.care.guide.title}</CardTitle>
      <CardDescription>{mock.care.guide.description}</CardDescription>
    </CardHeader>
    <CardContent className="space-y-3">
      <ul className="list-disc ps-5 text-sm">
        {mock.care.guide.items.map((item, i) => (
          <li key={`${item}-${i}`}>{item}</li>
        ))}
      </ul>
      <div className="rounded-lg border px-3 py-2 text-xs text-muted-foreground">
        {mock.care.guide.tip}
      </div>
    </CardContent>
  </Card>
);
