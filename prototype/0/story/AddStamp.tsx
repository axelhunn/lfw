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

export const AddStamp = (props: Props) => (
  <Card {...props}>
    <CardHeader>
      <CardTitle>{mock.story.addStamp.title}</CardTitle>
      <CardDescription>{mock.story.addStamp.description}</CardDescription>
    </CardHeader>

    <CardContent className="space-y-2">
      <div className="rounded-lg border px-3 py-2 text-sm bg-amber-50 dark:bg-amber-950/20">
        <div className="text-muted-foreground text-xs">
          Latest · {mock.story.addStamp.latest.meta}
        </div>
        <div className="font-medium">{mock.story.addStamp.latest.title}</div>
        <div className="text-muted-foreground">
          {mock.story.addStamp.latest.detail}
        </div>
      </div>

      <label htmlFor="story-note" className="text-sm">
        {mock.story.addStamp.noteLabel}
      </label>
      <textarea
        id="story-note"
        className="w-full rounded-md border bg-background p-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
        placeholder={mock.story.addStamp.notePlaceholder}
        rows={3}
      />
      <div className="text-[11px] text-muted-foreground">
        {mock.story.addStamp.disclaimer}
      </div>
      <div className="flex justify-end">
        <Button size="sm">{mock.story.addStamp.cta}</Button>
      </div>
    </CardContent>
  </Card>
);
