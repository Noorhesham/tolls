import type React from "react";
import { Sidebar } from "../components/sidebar";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MaxWidthWrapper className="flex-1 overflow-y-auto bg-background">{children}</MaxWidthWrapper>
    </div>
  );
}
