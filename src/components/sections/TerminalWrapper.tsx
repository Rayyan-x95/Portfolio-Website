"use client";

import dynamic from "next/dynamic";

const TerminalSection = dynamic(
  () => import("./TerminalSection").then((mod) => mod.TerminalSection),
  { ssr: false }
);

export function TerminalWrapper() {
  return <TerminalSection />;
}
