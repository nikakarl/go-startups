"use client";

import { NinetailedProvider } from "@ninetailed/experience.js-react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NinetailedProvider
      clientId={process.env.NEXT_PUBLIC_NINETAILED_CLIENT_ID!}
    >
      {children}
    </NinetailedProvider>
  );
}
