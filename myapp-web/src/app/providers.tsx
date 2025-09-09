'use client';

import { QueryClientProviderWrapper } from '@/providers/query-client';

export function Providers({ children }: { children: React.ReactNode }) {
  return <QueryClientProviderWrapper>{children}</QueryClientProviderWrapper>;
}
