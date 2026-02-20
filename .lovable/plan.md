
# Samit Shrestha — Neo-Minimalist Portfolio

## Visual Foundation
- **Deep Navy (#001B2E) background** with animated ambient mesh gradient (Teal + Sky Blue soft blurs that shift on scroll)
- Subtle noise/grain texture overlay (opacity 0.03) for a cinematic feel
- **Typography**: FigTree for display headers, Manrope for body text (Google Fonts)
- **Color palette**: Ivory (#FFFFF0) text, Teal (#008080) + Sky Blue (#87CEEB) accents, Beige (#F5F5DC) secondary surfaces

## Navigation
- Sticky top nav with magnetic hover effects on links
- Smooth page transitions between all four pages

## Page 1: Home
- Bold hero section with your name and a short tagline
- Parallax scroll effect on the heading (Framer Motion useScroll/useTransform)
- Animated call-to-action buttons linking to Work and Contact
- Brief highlight reel or featured projects teaser

## Page 2: Work (Project Gallery)
- **Bento Box masonry grid** with varied card sizes (no symmetrical 3-column layout)
- Cards with hover preview effects (scale, glow, project title reveal)
- Gallery-only view — no separate detail pages
- whileInView reveal animations so cards animate in as you scroll
- Placeholder structure ready for you to drop in your real web development projects

## Page 3: About (Story)
- Storytelling layout with your bio, skills, and journey
- Parallax headings and staggered text reveal animations
- Space for a profile photo and key highlights

## Page 4: Contact
- Styled contact form with ivory-bordered input fields and magnetic hover on the submit button
- **EmailJS integration** — you'll provide your Service ID, Template ID, and Public Key
- Success/error toast notifications on submission

## Animations & Performance
- Framer Motion for all animations: parallax headings, whileInView reveals, hover micro-interactions
- Magnetic cursor effects on buttons and interactive elements
- Lightweight approach — CSS blur + opacity/translate transforms only, no heavy 3D libraries
- Smooth scroll behavior throughout
