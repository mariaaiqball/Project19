import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="pt-[calc(5.5rem+env(safe-area-inset-top,0px))]">
      {children}
    </div>
  );
}
