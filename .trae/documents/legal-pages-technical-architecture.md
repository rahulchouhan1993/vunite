## 1.Architecture design
```mermaid
graph TD
  A["User Browser"] --> B["React Frontend Application"]
  B --> C["React Router"]
  B --> D["Tailwind CSS"]
  C --> E["Privacy Policy Page"]
  C --> F["Terms of Service Page"]

  subgraph "Frontend Layer"
    B
    C
    D
    E
    F
  end
```

## 2.Technology Description
- Frontend: React@18 + react-router-dom@6 + tailwindcss@3 + vite
- Backend: None

## 3.Route definitions
| Route | Purpose |
|-------|---------|
| /privacy | Privacy Policy page (legal content and contact info) |
| /terms | Terms of Service page (service terms and contact info) |

## 4.API definitions (If it includes backend services)
Not applicable (no backend services).

## 6.Data model(if applicable)
Not applicable (no database required).
