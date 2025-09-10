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

export const ChainOfCustody = (props: Props) => (
  <Card {...props}>
    <CardHeader>
      <CardTitle>{mock.chain.text.title}</CardTitle>
      <CardDescription>{mock.chain.text.description}</CardDescription>
    </CardHeader>

    <CardContent>
      <ol className="border-s ps-5 space-y-4">
        {mock.chain.events.map((e, i) => (
          <li key={`${e.title}-${i}`} className="relative">
            <span
              aria-hidden
              className="absolute -left-2 top-2 size-2 rounded-full border bg-background"
            />
            <div className="flex items-start justify-between gap-3 text-sm">
              <div className="min-w-0">
                <div className="font-medium">{e.title}</div>
                {e.detail ? (
                  <div className="text-muted-foreground">{e.detail}</div>
                ) : null}
              </div>
              <time className="shrink-0 tabular-nums text-muted-foreground">
                {e.date}
              </time>
            </div>
          </li>
        ))}
      </ol>
    </CardContent>
  </Card>
);
