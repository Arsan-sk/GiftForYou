import Link from 'next/link';
import { ArrowUpRight, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return <footer className="site-footer">
    <div className="shell footer-grid">
      <div><Link href="/" className="wordmark footer-mark"><span>W</span>RAPT</Link><p className="footer-blurb">Considered gifts for the people who make ordinary days matter.</p></div>
      <div className="footer-links"><p className="eyebrow">Explore</p><Link href="/collections">Collections</Link><Link href="/our-story">Our story</Link><Link href="/contact">Contact</Link></div>
      <div className="footer-links"><p className="eyebrow">Stay close</p><p className="footer-blurb">A few well-chosen things, now and then.</p><form className="newsletter"><label htmlFor="newsletter-email" className="sr-only">Email address</label><input id="newsletter-email" type="email" placeholder="Your email" /><button aria-label="Join newsletter"><ArrowUpRight size={17} /></button></form><div className="socials"><a href="#" aria-label="Instagram"><Instagram size={17} /></a><a href="mailto:hello@wrapt.studio" aria-label="Email WRAPT"><Mail size={17} /></a></div></div>
    </div>
    <div className="shell footer-bottom"><span>WRAPT / Gifts, thoughtfully found.</span><span>Made for the moment between knowing and finding.</span></div>
  </footer>;
}