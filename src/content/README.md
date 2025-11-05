# Research Content Management

This file (`src/content/research.ts`) contains all the research page content for easy management.

## How to Add Content

### Add a Research Paper

```typescript
{
  title: "Your Paper Title",
  description: "Brief description of the paper",
  link: "https://link-to-paper.com",
  date: "2025-11-05",
  tags: ["RAG", "AI", "Research"],
}
```

### Add a Blog Post

```typescript
{
  title: "Your Blog Post Title",
  description: "Brief description of the blog post",
  link: "https://link-to-blog.com",
  date: "2025-11-05",
  author: "Author Name", // optional
}
```

### Add a Roadmap Version

```typescript
{
  version: "v1.2.0 - Feature Name",
  date: "Q2 2026",
  status: "planned", // or "completed" or "inprogress"
  items: [
    "Feature 1 description",
    "Feature 2 description",
    "Feature 3 description",
  ],
}
```

## Status Options

- `"completed"` - Green badge, for released versions
- `"inprogress"` - Yellow badge, for currently in development
- `"planned"` - Blue badge, for future versions

## Example Additions

### Adding More Research Projects

To add research for other projects beyond IntraMind:

```typescript
{
  version: "v1.0.0 - ProjectName",
  date: "2025-12-01",
  status: "planned",
  items: [
    "Project-specific feature 1",
    "Project-specific feature 2",
  ],
}
```

Simply add new items to the respective arrays in `src/content/research.ts` and they will automatically appear on the research page!
