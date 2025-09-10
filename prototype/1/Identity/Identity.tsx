import { ContentBlock, mock, SectionHeader } from "@/prototype/1";

export const Identity = () => (
  <>
    <SectionHeader>{mock.identity.title}</SectionHeader>
    <ContentBlock className="text-sm px-6">
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <span className="font-semibold">Brand:</span>
          {mock.identity.details.brand}
        </li>
        <li className="flex items-center gap-2">
          <span className="font-semibold">Category:</span>
          {mock.identity.details.category}
        </li>
        <li className="flex items-center gap-2">
          <span className="font-semibold">Model:</span>
          {mock.identity.details.model}
        </li>
        <li className="flex items-center gap-2">
          <span className="font-semibold">UID:</span>
          {mock.identity.details.uid}
        </li>
        <li className="flex items-center gap-2">
          <span className="font-semibold">Product Code:</span>
          {mock.identity.details.productCode}
        </li>
        <li className="flex items-center gap-2">
          <span className="font-semibold">Color:</span>
          {mock.identity.details.color}
        </li>
        <li className="flex items-center gap-2">
          <span className="font-semibold">Size:</span>
          {mock.identity.details.size}
        </li>
      </ul>
    </ContentBlock>
  </>
);
