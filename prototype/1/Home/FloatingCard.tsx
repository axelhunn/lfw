import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = React.ComponentPropsWithoutRef<"aside"> & {
  title: string;
  uid: string;
  verifiedLabel: string;
  badgeSrc: string;
};

export const FloatingCard = ({
  title,
  uid,
  verifiedLabel,
  badgeSrc,
  className,
  ...props
}: Props) => {
  return (
    <aside
      className={cn("rounded-[9px] bg-white shadow-md px-3 py-2", className)}
      aria-label="Product verification"
      {...props}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-[13px] font-semibold leading-none text-foreground">
          {title}
        </h3>
        <Image src={badgeSrc} alt="Verified badge" width={47} height={26} />
      </div>
      <p className="text-[11px] leading-[1.45] text-foreground">UID #{uid}</p>
      <p className="text-center text-[8px] text-muted-foreground">
        {verifiedLabel}
      </p>
    </aside>
  );
};
