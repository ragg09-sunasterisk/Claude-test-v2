# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server (Next.js)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run Next.js linting

## Architecture

This is a Next.js 15 application with TypeScript and Material-UI (MUI) integration. The project follows a component-based architecture with clear separation of concerns.

### Key Structure

- **App Router**: Uses Next.js 13+ app directory structure (`src/app/`)
- **Components**: Organized into reusable UI components (`src/components/`)
  - `ui/` - Low-level reusable components (Logo, NavItem, SearchInput)
  - `navigation/` - Navigation-specific components (Navbar)
  - `ThemeProvider.tsx` - MUI theme configuration wrapper
- **Path Aliases**: `@/*` maps to `src/*` (configured in tsconfig.json)

### Component Architecture

The codebase follows a high/low-level component pattern:
- **High-level components**: Feature-rich components like `Navbar` with complex state and interactions
- **Low-level components**: Simple, reusable UI primitives exported from `ui/index.ts`

### Material-UI Integration

- Custom theme configured in `ThemeProvider.tsx` with light mode palette
- CssBaseline included for consistent styling
- Responsive design using MUI breakpoints and Grid v2
- Components use MUI's sx prop for styling

### Layout Structure

- Root layout (`app/layout.tsx`) wraps all pages with ThemeProvider and Navbar
- Navbar includes responsive navigation, search, notifications, and user menu
- Mobile-first responsive design with drawer navigation for mobile devices

### TypeScript Configuration

- Strict mode enabled
- Path mapping configured for clean imports
- Next.js plugin integrated for optimal bundling

## Core Development Rules

### 1. Best Practices, Standards, and Conventions
- Follow established coding standards and best practices for the project's tech stack
- Maintain consistent code style, naming conventions, and project structure
- Use proper error handling, logging, and security practices
- Write clean, maintainable, and well-documented code
- Follow SOLID principles and design patterns where appropriate

### 2. Context7 Guidelines Compliance
- Generated code must adhere to Context7 framework guidelines and conventions
- Follow Context7 component architecture and lifecycle patterns
- Use Context7's routing, state management, and UI component systems appropriately
- Maintain compatibility with Context7's theming and styling approaches
- Implement proper Context7 event handling and data binding patterns

### 4. Folder/File Structure Rules
- Organize files by feature or domain rather than by file type
- Use clear, descriptive naming conventions for folders and files
- Group related components, hooks, utils, and tests together
- Maintain a shallow folder structure to avoid deep nesting
- Separate concerns: components, services, utilities, types, and tests
- Use index files for clean imports and barrel exports
- Keep configuration files at appropriate levels (root, feature, or component)
- Follow naming patterns: PascalCase for components, camelCase for utilities, kebab-case for assets