This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:5000](http://localhost:5000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Accessibility & SEO Improvements

This project has been thoroughly optimized for web accessibility (WCAG 2.2 AA compliant), responsive visual hierarchy, and SEO search visibility.

### 1. Accessibility & Semantic HTML
* **Skip-to-Content Link**: Implemented a skip link targeting `#main-content` at the root of `body` for keyboard-only and screen-reader navigation.
* **Global Focus Rings**: High-contrast, brand-orange `:focus-visible` outlines added for all interactive links, buttons, inputs, and textareas.
* **Badges Contrast**: Tweaked badge contrast ratios (e.g. `+280%`, `4.9★`) against dark backgrounds to satisfy WCAG AA contrast guidelines.
* **ARIA & Screen-Reader Labels**: Configured descriptive `aria-label` tags for social links, decorative icons, and custom cards.
* **Descriptive Alternative Text**: Conducted an image alt-text audit across all project cards, hero portraits, and site graphics.
* **Form Validation**: Form inputs now perform blur-time validation, using live `role="alert"`, `aria-describedby`, and automatic keyboard focus routing for error messages.
* **Heading Outline**: Cleaned up heading hierarchy using semantic `H1` -> `H2` -> `H3` structures.

### 2. Design & Motion Optimization
* **CTA Button Prominence**: Restructured the visual hierarchy between primary ("Initiate Transmission") and secondary ("Explore Work") CTAs.
* **Trust Signals**: Upgraded client testimonial stacks with real client profiles, named companies, and high-contrast rating stars.
* **Mobile Spacing**: Enhanced mobile density by making grid columns responsive (stacking vertical on viewports <640px) and padding responsive.
* **Snappy Interactions**: Unified hover/focus card transitions to use snappy `0.2s ease` transitions.
* **Reduced Motion Support**: Bypassed GSAP scroll reveals, typing animations, and page transition overlays if `prefers-reduced-motion` is requested.

### 3. SEO & Performance
* **Canonical URL**: Dynamic metadata alternates set to absolute `https://rayyan.ninety5.in/` URL.
* **Twitter Cards & OG**: Injected summary-large-image cards, descriptions, and custom OG tags.
* **Structured Data**: Injected full `Person` and `ProfessionalService` JSON-LD schemas in layout, and dynamic `Article` schemas for blog posts.
* **Dynamic Blog Section**: Launched a dynamic blog engine at `/blogs` and `/blog/[slug]`.
* **3 SEO Starter Posts**:
  1. *How to Build a Custom Android Kernel for Performance Gains – A Step‑by‑Step Guide*
     * *Lead Magnet*: [Free Android Kernel Tuning Checklist](/contact)
  2. *UI/UX Design Process: From Discovery to Shipping – A Case Study*
     * *Lead Magnet*: [Free UI/UX Discovery Phase Questionnaire](/contact)
  3. *Designing for Engineers: Merging AOSP Development with Premium Visuals*
     * *Lead Magnet*: [Free Developer-First UI Checklist](/contact)
* **Local NAP & Map**: Added Chennai location details and contact endpoints to the footer, coupled with a high-fidelity stylized Chennai map placeholder linking to Google Maps.
* **Sitemap & Robots**: Standardized sitemap generation dynamically using `@/lib/blog-data` to index all 9 posts.
* **Performance Enhancements**: 
  * Converted the main portrait image from a 1.9 MB PNG to a highly optimized 62 KB WebP asset.
  * Deferred terminal animation loading using next/dynamic with `ssr: false` in a dedicated client wrapper.

