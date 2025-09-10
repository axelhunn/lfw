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

export const StoryMedia = (props: Props) => (
  <Card {...props}>
    <CardHeader>
      <CardTitle>{mock.story.text.title}</CardTitle>
      <CardDescription>{mock.story.text.description}</CardDescription>
    </CardHeader>

    <CardContent>
      <div className="rounded-xl border aspect-video grid place-content-center text-muted-foreground">
        Media
      </div>
      <dl className="grid grid-cols-3 gap-4 mt-3 text-xs">
        <div>
          <dt className="text-muted-foreground">Brand</dt>
          <dd className="truncate">{mock.identity.details.brand}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Color</dt>
          <dd className="truncate">{mock.identity.details.color}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Size</dt>
          <dd className="truncate">{mock.identity.details.size}</dd>
        </div>
      </dl>
      <p className="text-xs text-muted-foreground mt-2">
        Designer note: “On silhouette and movement.” (00:10)
      </p>
    </CardContent>
  </Card>
);
