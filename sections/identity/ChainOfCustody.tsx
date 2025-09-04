import type { ComponentProps } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = ComponentProps<typeof Card>;

const EVENTS: Array<{
  title: string;
  detail?: string;
  date: string;
}> = [
  { title: "Item created", detail: "Factory QC complete", date: "2024-08-12" },
  {
    title: "Shipped to boutique",
    detail: "Batch #SS24-07",
    date: "2024-09-14",
  },
  { title: "Received in store", detail: "New Bond Street", date: "2024-09-18" },
  { title: "Purchased", detail: "Passport activated", date: "2025-02-16" },
];

export const ChainOfCustody = (props: Props) => (
  <Card {...props}>
    <CardHeader>
      <CardTitle>Chain of custody</CardTitle>
      <CardDescription>Ownership & transfer log</CardDescription>
    </CardHeader>

    <CardContent>
      <ol className="border-s ps-5 space-y-4">
        {EVENTS.map((e, i) => (
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
