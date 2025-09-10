import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { mock } from "@/prototype/0";

type Props = ComponentProps<typeof Card>;

export const Materials = (props: Props) => (
  <Card {...props}>
    <CardHeader>
      <CardTitle>{mock.care.materials.title}</CardTitle>
      <CardDescription>{mock.care.materials.description}</CardDescription>
    </CardHeader>
    <CardContent className="space-y-3">
      <ul className="space-y-2">
        {mock.care.materials.items.map((m, i) => (
          <li key={`${m.name}-${i}`} className="flex items-center gap-3">
            <div className="flex-1 rounded-lg border px-3 py-2">{m.name}</div>
            <div className="shrink-0 rounded-lg border px-2 py-1 text-xs">
              {m.percent}
            </div>
          </li>
        ))}
      </ul>
      <div className="text-xs text-muted-foreground">
        {mock.care.materials.region}
      </div>
      <Button className="w-full">{mock.care.materials.cta}</Button>
    </CardContent>
  </Card>
);
