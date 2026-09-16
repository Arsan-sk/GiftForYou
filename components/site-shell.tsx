import type { ReactNode } from 'react';
import { Footer } from './footer';
import { Header } from './header';

export function SiteShell({ children }: { children: ReactNode }) {
  return <><Header /><main>{children}</main><Footer /></>;
}