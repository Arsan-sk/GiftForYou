import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { categories, categoryBySlug } from '@/lib/data';

export function generateStaticParams() { return categories.map(({ slug }) => ({ category: slug })); }

export default function CategoryPage({ params }: { params: { category: string } }) { const category = categoryBySlug(params.category); if (!category) notFound(); return <div className="shell"><Link href="/collections" className="text-link" style={{ marginTop: 42 }}><ArrowLeft size={15} /> All collections</Link><section className="category-hero"><Reveal><img src={category.image} alt="" /></Reveal><Reveal delay={.12}><div className="category-hero-copy"><p className="eyebrow">A WRAPT collection</p><h1 className="display display-lg">{category.name}</h1><p>{category.mood} This is a starting point for gifts with a little atmosphere in them: things to use, keep, and remember.</p><Link href="/gift-finder" className="button button-primary">Let us find the fit <ArrowUpRight size={17} /></Link></div></Reveal></section><section className="section" style={{ paddingTop: 10 }}><div className="section-top"><div><p className="eyebrow">A closer look</p><h2 className="display" style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)' }}>Objects with a point of view.</h2></div></div><div className="category-gallery">{category.gallery.map((image, index) => <Reveal key={image} delay={index * .08}><img src={image} alt="" /></Reveal>)}</div></section></div>; }