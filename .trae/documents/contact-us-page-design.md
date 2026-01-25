# Contact Us — Page Design Spec (Desktop-first)

## Layout
- Primary layout: 12-column CSS Grid for page sections + Flexbox within cards/pills.
- Desktop behavior: two-column hero (text left, contact pills + CTA right), then two-column content (form card left, image card right).
- Responsive behavior:
  - Tablet: maintain two columns but reduce spacing and card sizes.
  - Mobile: stack sections vertically (hero text → pills/CTA → form → image), full-width cards.

## Meta Information
- Title: Contact Us | VUnite Support Services
- Description: Get in touch with VUnite Support Services by phone, email, or message.
- Open Graph:
  - og:title: Contact Us | VUnite
  - og:description: Contact VUnite via phone, email, or the contact form.
  - og:type: website

## Global Styles (match existing site)
- Typography: reuse existing site font stack; headings use the same display style as other hero sections.
- Color tokens (use existing Tailwind/theme equivalents):
  - Primary accent: teal (used for footer + highlights)
  - Secondary accent: coral/salmon (used for CTA/button gradient)
  - Surface: white cards on off-white/light background
  - Radius: large rounded corners for cards and pill containers
- Buttons:
  - Primary CTA: pill-shaped, coral→teal gradient, left icon, hover = slightly darker gradient + subtle lift shadow.
  - Secondary (form submit): same primary CTA styling but smaller height.
- Inputs:
  - Rounded, light border, subtle inset background; focus ring in teal.

## Page Structure
1. Reused global Header
2. Contact hero section
3. Contact content section (Write Us + image)
4. Reused global Footer

## Sections & Components

### 1) Header (reused)
- Use existing Header component and navigation.
- Highlight current route: “Contact” / “Contact Us” (whichever naming you standardize in nav).

### 2) Hero Section: “Get in touch / Contact us”
**Left column**
- Eyebrow/small title: “Get in touch” (teal)
- Main H1: “Contact us” (large, coral)
- Supporting text: 2–3 lines describing how to contact (match tone and spacing of existing pages)

**Right column**
- Contact pills container (vertical stack):
  - Phone pill
    - Left icon (phone)
    - Text: phone number
    - Interaction: click-to-call (`tel:`)
  - Email pill
    - Left icon (mail)
    - Text: support email
    - Interaction: click-to-email (`mailto:`)
- Appointment CTA button:
  - Label: “Make an Appointment”
  - Icon: calendar
  - Interaction: open booking destination (new tab recommended if external)

### 3) Content Section: Write Us + Image
**Left: Write Us card**
- Card title: “Write Us”
- Form fields (vertical):
  - Name (required)
  - Phone (optional)
  - Email (required)
  - Message (required, textarea)
- Submit button: “SEND NOW”
- States:
  - Loading: disable button + spinner
  - Validation: inline field errors under inputs
  - Success: inline confirmation message near button (or toast), and clear message field
  - Failure: inline error message with retry guidance

**Right: Image panel card**
- Rounded image container matching screenshot proportions.
- Optional small floating logo badge at lower-left of image card (if used elsewhere on the site).
- Ensure image has alt text and doesn’t crop faces awkwardly; preserve brand warmth.

### 4) Footer (reused)
- Use existing Footer component and link groups.
- Ensure contact details in footer match the pills (single source of truth recommended via config/constants).
