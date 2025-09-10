import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentProps<"h2">;

export const SectionHeader = ({ className, ...props }: Props) => (
  <h2
    className={cn(
      "p-6 text-[20px] leading-[1.8] font-medium tracking-tight uppercase",
      className,
    )}
    {...props}
  />
);
