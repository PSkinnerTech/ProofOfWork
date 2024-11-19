'use client';

import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { ThemeProvider } from "next-themes";
import { ClientLayout } from './ClientLayout';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <DynamicContextProvider
        settings={{
          environmentId: 'd3f28879-b740-45c3-82ec-7ba468303803',
          walletConnectors: [EthereumWalletConnectors],
        }}
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </DynamicContextProvider>
    </ThemeProvider>
  );
}