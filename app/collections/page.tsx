import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { categories } from '@/lib/data';

export default function CollectionsPage() { return <div className="shell"><div className="page-intro"><p className="eyebrow">The collections</p><h1 className="display display-lg">Start with a feeling.</h1><p>Ten small worlds for ten different ways of being known. Wander until something sounds like them.</p></div><div className="collections-grid" style={{ paddingBottom: 120 }}>{categories.map((category, i) => <Reveal key={category.slug} delay={i % 3 * .05}><Link href={`/collections/${category.slug}`} className="collection-card"><img className="card-image" src={category.image} alt="" /><div className="card-body"><h3>{category.name}</h3><p>{category.mood}</p><span className="text-link" style={{ marginTop: 16 }}>Open collection <ArrowUpRight size={14} /></span></div></Link></Reveal>)}</div></div>; }