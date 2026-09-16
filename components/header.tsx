'use client';

import Link from 'next/link';
import { Menu, Sparkles, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="wordmark" aria-label="WRAPT home"><span>W</span>RAPT</Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/collections">Collections</Link>
          <Link href="/our-story">Our story</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/gift-finder" className="nav-finder"><Sparkles size={14} /> Gift Finder</Link>
        </nav>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && <nav className="mobile-nav shell" aria-label="Mobile navigation">
        <Link href="/collections" onClick={() => setOpen(false)}>Collections</Link>
        <Link href="/our-story" onClick={() => setOpen(false)}>Our story</Link>
        <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        <Link href="/gift-finder" onClick={() => setOpen(false)} className="nav-finder"><Sparkles size={14} /> Gift Finder</Link>
      </nav>}
    </header>
  );
}