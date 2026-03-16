import { cn } from "../lib/utils";

interface OpenCodeLogoIconProps {
  className?: string;
}

export function OpenCodeLogoIcon({ className }: OpenCodeLogoIconProps) {
  return (
    <>
      <img
        src="/brands/deh-logo-light.svg"
        alt="Dominion Equity"
        className={cn("dark:hidden", className)}
      />
      <img
        src="/brands/deh-logo-dark.svg"
        alt="Dominion Equity"
        className={cn("hidden dark:block", className)}
      />
    </>
  );
}
