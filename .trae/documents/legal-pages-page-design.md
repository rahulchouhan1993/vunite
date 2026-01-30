# Page Design Spec — Privacy Policy & Terms (Desktop-first)

## Global Styles (applies to all public pages)
- Layout system: Flexbox + max-width container.
- Container: `max-w-5xl mx-auto px-4 sm:px-6 lg:px-8`.
- Typography: `text-slate-900` body, `text-slate-600` secondary, headings `font-semibold`.
- Links: `text-indigo-600 hover:text-indigo-700 underline-offset-4 hover:underline`.
- Section spacing: `space-y-8` for page blocks, `space-y-4` for paragraphs/lists.
- Cards (optional for callouts): `rounded-xl border border-slate-200 bg-white shadow-sm`.

## Global Footer (site-wide)
- Purpose: provide consistent legal navigation.
- Structure:
  - Left: company name “V Unite Support Services”.
  - Right: inline links “Privacy Policy” and “Terms of Service”.
- Tailwind layout:
  - Wrapper: `border-t border-slate-200 bg-white`.
  - Inner: `max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`.
  - Links: `flex gap-4 text-sm`.

---

## Page 1 — Privacy Policy

### Meta Information
- Title: `Privacy Policy | V Unite Support Services`
- Description: `Learn how V Unite Support Services collects, uses, and protects your information.`
- Open Graph: match title/description; type `website`.

### Page Structure
- Pattern: single-column legal document with anchored sections.
- Header area:
  - Page title + short intro.
  - “Effective date / Last updated” line.

### Sections & Components (Tailwind-styled)
1. Page header
   - `h1` title: `text-3xl sm:text-4xl font-semibold tracking-tight`
   - Subtitle: `mt-3 text-base sm:text-lg text-slate-600`
   - Date row: `mt-4 text-sm text-slate-500`
2. Table of contents (optional, recommended if long)
   - Container: `mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5`
   - Links list: `grid sm:grid-cols-2 gap-2 text-sm`
3. Policy sections (repeat)
   - Section wrapper: `scroll-mt-24`
   - Section title: `text-xl font-semibold`
   - Body: `mt-3 text-slate-700 leading-relaxed`
   - Lists: `mt-3 list-disc pl-5 space-y-1`
4. Required content (relevant to V Unite Support Services)
   - What information you collect (e.g., contact details, inquiry details)
   - How you use information (responding to inquiries, service delivery)
   - Sharing (service providers, legal obligations)
   - Data retention & security
   - Cookies/analytics (only if used)
   - Children’s privacy
   - Changes to this policy
   - Contact: support email/phone and business name

---

## Page 2 — Terms of Service

### Meta Information
- Title: `Terms of Service | V Unite Support Services`
- Description: `Review the terms and conditions for using V Unite Support Services and this website.`
- Open Graph: match title/description; type `website`.

### Page Structure
- Pattern: single-column legal document with clear section headings.
- Header area mirrors Privacy Policy for consistency.

### Sections & Components (Tailwind-styled)
1. Page header (same styles as Privacy Policy)
2. Terms sections (repeat)
   - Section title: `text-xl font-semibold`
   - Body: `mt-3 text-slate-700 leading-relaxed`
   - Subclauses: `mt-3 space-y-3`
3. Required content (relevant to V Unite Support Services)
   - Scope of services (support services description at a high level)
   - Eligibility & acceptable use of the website
   - Client responsibilities (accurate info, respectful communication)
   - Scheduling / cancellations (include only if applicable)
   - Fees & payments (include only if applicable)
   - Disclaimers and limitation of liability
   - Intellectual property (site content/branding)
   - Termination / refusal of service (as applicable)
   - Governing law / jurisdiction (set to your operating region)
   - Changes to terms
   - Contact information

## Responsive Behavior
- Desktop-first: legal content stays single column; TOC becomes 2 columns at `sm`.
- Long headings wrap naturally; `prose` is optional but avoid if you need strict brand styling.
