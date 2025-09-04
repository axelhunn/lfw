import type { ComponentProps } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = ComponentProps<typeof Card>;

export const Details = (props: Props) => (
  <Card {...props}>
    <CardHeader>
      <CardTitle>Identity</CardTitle>
      <CardDescription>Core product identifiers</CardDescription>
    </CardHeader>

    <CardContent>
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm">
        <div>
          <dt className="text-muted-foreground">Brand</dt>
          <dd>Roksanda</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Model</dt>
          <dd>Signature Sculpt Dress</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-muted-foreground">Product name</dt>
          <dd>Signature Sculpt Dress</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">SKU</dt>
          <dd>
            <code className="rounded border px-1.5 py-0.5 text-xs">
              ROK-SS24-001
            </code>
          </dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Color</dt>
          <dd>Ivory</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Size</dt>
          <dd>UK 8</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Material</dt>
          <dd>Silk blend</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Country of origin</dt>
          <dd>United Kingdom</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-muted-foreground">On-chain ID</dt>
          <dd>
            <code className="rounded border px-1.5 py-0.5 text-xs">
              0x8f1c…d2a9
            </code>
          </dd>
        </div>
      </dl>
    </CardContent>
  </Card>
);
