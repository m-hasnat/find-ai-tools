# Find AI Tools

A React TypeScript app for discovering and exploring AI tools. Built as a companion frontend to the [Talika GraphQL API](https://github.com/m-hasnat/talika).

## Preview

![Find AI Tools](./screenshot.png)

## What It Does

- Browse 15+ AI tools across categories — LLM, Code, Image, Audio, Video, and more
- Search tools by name in real time
- Sort alphabetically A-Z
- Click any card to expand details — tags, API availability, links to tool and docs

## Tech Stack

- React 18 + TypeScript
- Apollo Client — GraphQL data fetching
- Chakra UI v3 — component library
- Context + useReducer — state management
- Custom hooks — separation of concerns

## Architecture

- src/
- modules/
- directory/
- components/ # ToolCard, ToolList, SearchBar, SortToggle
- context/ # AIToolFilterContext, AIToolFilterReducer
- hooks/ # useAITools, useGetAITools
- pages/ # DirectoryPage
- queries/ # GraphQL query definitions
- types/ # TypeScript interfaces
- shared/
- apolloClient.ts # Apollo Client setup

## Setup

### Prerequisites

- Node.js 18+
- [Talika API](https://github.com/m-hasnat/talika) running on `localhost:3000`

### Installation

```bash
git clone https://github.com/m-hasnat/find-ai-tools.git
cd find-ai-tools
npm install
npm start
```

App runs on `http://localhost:3001`

## State Management

Uses React Context + useReducer pattern for filter state:

AIToolFilterContext
→ SearchBar dispatches SET_SEARCH
→ SortToggle dispatches SET_SORT
→ ToolList reads filters via useAITools hook

## Data Flow

DirectoryPage
→ useAITools (reads context, calls useGetAITools)
→ useGetAITools (Apollo useQuery → Talika GraphQL API)
→ ToolList → ToolCard

## Future Improvements

- Pagination / load more
- Category filter buttons
- Mobile responsive layout
- Footer
- Rebuild in Next.js for SSR
