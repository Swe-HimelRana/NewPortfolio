

import { MagicCard } from "@/components/ui/magic-card";

interface MagicCardBoxProps {
  children: React.ReactNode;
}
 
export function MagicCardBox({children}: MagicCardBoxProps) {
 
  return (
    <div
      className={
        "flex h-full w-full flex-col gap-2"
      }
    >
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        // gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        {children}
      </MagicCard>
 
    </div>
  );
}
