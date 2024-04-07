"use client";

import UseQueryProvider from "./UseQuery";
import { ReduxProviders } from "../../../store/provider";
import { Toaster } from "@/components/ui/toaster";
import HOCLayout from "./HOCLayout";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <UseQueryProvider>
      <ReduxProviders>
        <HOCLayout>{children}</HOCLayout>
      </ReduxProviders>
      <Toaster />
    </UseQueryProvider>
  );
}
