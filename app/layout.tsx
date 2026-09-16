import type { Metadata } from 'next';
import './globals.css';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = { title: 'WRAPT — Gifts, thoughtfully found.', description: 'A considered gift shop for the people who make ordinary days matter.' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>; }