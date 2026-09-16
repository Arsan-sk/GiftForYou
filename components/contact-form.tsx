'use client';

import { FormEvent, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export function ContactForm() { const [sent, setSent] = useState(false); const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); }; if (sent) return <div className="form-success"><strong>Your note is on its way.</strong><br />We will be in touch soon, usually from a sunny corner of the studio.</div>; return <form className="form" onSubmit={submit}><div className="field"><label htmlFor="name">Your name</label><input id="name" required /></div><div className="field"><label htmlFor="email">Email address</label><input id="email" type="email" required /></div><div className="field"><label htmlFor="message">A note</label><textarea id="message" required /></div><button className="button button-primary" type="submit">Send your note <ArrowUpRight size={17} /></button></form>; }