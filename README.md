# WRAPT

WRAPT is a portfolio-grade gift shop showcase built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. It includes a multi-page editorial storefront and an AI-assisted Gift Finder with a graceful fallback when no provider key is configured.

## Requirements

- Node.js 18.17 or newer
- npm

## Setup

Install dependencies:

```bash
npm install
```

Configuration lives directly in `.env` at the project root. It is ignored by Git. Add whichever optional keys you have:

```env
GROQ_API_KEY=your_key_here
GEMINI_API_KEY=your_key_here
OPENROUTER_API_KEY=your_key_here
TOGETHER_API_KEY=your_key_here
PEXELS_API_KEY=your_key_here
```

The Gift Finder checks LLM providers in this order: Groq, Gemini, OpenRouter, then Together. If no key is available, or a provider fails, it returns a warm random category fallback instead of showing an error.

## Run locally

Start the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

For a production run:

```bash
npm run build
npm run start
```

## Gift Finder stock

The repository includes a generated SVG fallback, and the seed command downloads ten genuine JPEG photographs per category into the private Gift Finder stock library. It prefers Pexels when `PEXELS_API_KEY` is configured and otherwise uses category-keyword photographs from LoremFlickr:

```bash
npm run seed:gift-stock
```

Stock images are stored under `public/gift-stock/<category-slug>/` and are only used by the Gift Finder result screen. The server randomly selects one of the ten images from the matched category. If an LLM key is missing or a provider fails, a small local keyword engine scores the answers and chooses the best category, using random selection only when there is no useful signal.

## Routes

- `/` Home
- `/gift-finder` Interactive five-step finder
- `/collections` All gift categories
- `/collections/[category]` Category detail pages
- `/our-story` Brand story and values
- `/contact` Client-side contact form
- `/api/gift-finder` Server-side curator endpoint

## Validation

```bash
npx tsc --noEmit
npm run build
```