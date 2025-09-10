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

export const Details = (props: Props) => (
  <Card {...props}>
    <CardHeader>
      <CardTitle>{mock.identity.text.title}</CardTitle>
      <CardDescription>{mock.identity.text.description}</CardDescription>
    </CardHeader>

    <CardContent>
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm">
        <div>
          <dt className="text-muted-foreground">Brand</dt>
          <dd>{mock.identity.details.brand}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Model</dt>
          <dd>{mock.identity.details.model}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-muted-foreground">Product name</dt>
          <dd>{mock.identity.details.productName}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">SKU</dt>
          <dd>
            <code className="rounded border px-1.5 py-0.5 text-xs">
              {mock.identity.details.sku}
            </code>
          </dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Color</dt>
          <dd>{mock.identity.details.color}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Size</dt>
          <dd>{mock.identity.details.size}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Material</dt>
          <dd>{mock.identity.details.material}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Country of origin</dt>
          <dd>{mock.identity.details.countryOfOrigin}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-muted-foreground">On-chain ID</dt>
          <dd>
            <code className="rounded border px-1.5 py-0.5 text-xs">
              {mock.identity.details.onChainId}
            </code>
          </dd>
        </div>
      </dl>
    </CardContent>
  </Card>
);
