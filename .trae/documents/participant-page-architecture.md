## 1. Architecture design

```mermaid
graph TD
  A[User Browser] --> B[React Frontend Application]
  B --> C[PageHero Component]
  B --> D[CTABanner Component]
  B --> E[Participant Content Sections]

  subgraph "Frontend Layer"
    B
    C
    D
    E
  end
```

## 2. Technology Description
- Frontend: React@18 + tailwindcss@3 + vite
- Initialization Tool: vite-init
- Backend: None (static content page)

## 3. Route definitions
| Route | Purpose |
|-------|---------|
| /participant | Participant information page displaying rights, safeguarding, and support information |

## 4. API definitions
Not applicable - this is a static content page with no backend services required.

## 5. Server architecture diagram
Not applicable - no backend services required for this static content page.

## 6. Data model
Not applicable - no database required for this informational page.