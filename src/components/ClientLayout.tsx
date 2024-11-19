'use client';

import { useUserSync } from '@/hooks/useUserSync';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  useUserSync();
  return children;
}