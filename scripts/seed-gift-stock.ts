import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { categories } from '../lib/data';

const root = path.join(process.cwd(), 'public', 'gift-stock');
const colors = ['#B8894F', '#D98E73', '#3F4B3B', '#A7B19A', '#8F6D58', '#C9A979', '#6B6259', '#B66E5B', '#8B796A', '#D2A85D'];

async function seed() {
	for (let index = 0; index < categories.length; index += 1) {
		const category = categories[index];
		const folder = path.join(root, category.slug);
		await mkdir(folder, { recursive: true });
		const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="#FAF6F1"/><circle cx="930" cy="120" r="250" fill="${colors[index]}" opacity=".18"/><path d="M230 600c140-230 370-260 740-40" fill="none" stroke="${colors[index]}" stroke-width="3" opacity=".7"/><text x="90" y="360" fill="#2B2622" font-family="Georgia,serif" font-size="48">WRAPT / ${category.name}</text><text x="94" y="415" fill="#6B6259" font-family="Arial,sans-serif" font-size="18">Private gift finder stock placeholder</text></svg>`;
		await writeFile(path.join(folder, 'placeholder.svg'), svg);
		let downloaded = 0;
		if (process.env.PEXELS_API_KEY) {
			const response = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(category.search)}&per_page=10&orientation=landscape`, { headers: { Authorization: process.env.PEXELS_API_KEY } });
			if (response.ok) {
				const payload = await response.json() as { photos?: Array<{ src?: { large2x?: string; large?: string } }> };
				for (let imageIndex = 0; imageIndex < (payload.photos ?? []).length; imageIndex += 1) {
					const imageUrl = payload.photos?.[imageIndex]?.src?.large2x ?? payload.photos?.[imageIndex]?.src?.large;
					if (!imageUrl) continue;
					const imageResponse = await fetch(imageUrl);
					if (imageResponse.ok) {
						await writeFile(path.join(folder, `${imageIndex + 1}.jpg`), Buffer.from(await imageResponse.arrayBuffer()));
						downloaded += 1;
					}
				}
			}
		}
		for (let imageIndex = downloaded; imageIndex < 10; imageIndex += 1) {
			const tags = category.slug.replaceAll('-', ',');
			let imageResponse: Response | undefined;
			for (let attempt = 0; attempt < 3; attempt += 1) {
				const response = await fetch(`https://loremflickr.com/1200/800/${encodeURIComponent(tags)}?lock=${index * 10 + imageIndex + 1 + attempt * 100}`);
				if (response.ok) {
					imageResponse = response;
					break;
				}
			}
			if (!imageResponse) {
				const galleryImage = category.gallery[imageIndex % category.gallery.length];
				const response = await fetch(galleryImage);
				if (response.ok) imageResponse = response;
			}
			if (!imageResponse) {
				const response = await fetch(`https://picsum.photos/seed/wrapt-${category.slug}-${imageIndex + 1}/1200/800`);
				if (response.ok) imageResponse = response;
			}
			if (!imageResponse) throw new Error(`Could not download fallback image for ${category.slug}`);
			await writeFile(path.join(folder, `${imageIndex + 1}.jpg`), Buffer.from(await imageResponse.arrayBuffer()));
		}
	}
	console.log(`Seeded ${categories.length} categories with 10 private stock images each.`);
}

void seed();