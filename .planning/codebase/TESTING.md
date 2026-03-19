# Testing Patterns

**Analysis Date:** 2025-03-19

## Test Framework

**Status:** No test suite exists

- No test runner installed (Jest, Vitest, etc.)
- No test files in the codebase (no `*.test.ts`, `*.spec.ts`)
- Build (`npm run build`) serves as primary validation mechanism

**Run Commands:**
```bash
npm run dev        # Dev server — manual testing
npm run build      # Static export — validates entire app builds correctly
npm run lint       # ESLint — catches TypeScript and code quality issues
```

## Testing Strategy

**Current Approach:**
- **Manual testing during development** via dev server (`npm run dev`)
- **Build validation** via static export (`npm run build`) — if build succeeds, app is valid for GitHub Pages deployment
- **Type checking** via TypeScript strict mode and ESLint (compile-time safety)
- **Visual inspection** in browser during development

**Why No Unit/Integration Tests:**
- Static portfolio website with zero runtime logic
- All data imported from `data/` files at build time
- No API calls, no async operations, no error states to test
- Components are presentational — primarily JSX rendering
- Build succeeds → App works

## Validation Methods

**Type Safety (Primary):**
- TypeScript strict mode (`strict: true`)
- ESLint enforces no `any` types
- Interfaces for all component props
- Example: `interface ProjectCardProps { project: Project; onClick?: () => void; }`

**Build Process (Secondary):**
```bash
npm run build
# Outputs static HTML/CSS/JS to pyrux_portfolio/out/
# Deploys via GitHub Actions to GitHub Pages
```
If build succeeds: all imports resolve, all types check, all metadata renders correctly.

## Component Testing Approach (If Tests Were Added)

### Recommended Structure

**Location:** Co-located with components
```
components/
├── sections/
│   ├── Hero.tsx
│   ├── Hero.test.tsx          ← Same level
│   ├── OurProjects.tsx
│   └── OurProjects.test.tsx
├── cards/
│   ├── ProjectCard.tsx
│   └── ProjectCard.test.tsx
└── modals/
    ├── ProjectModal.tsx
    └── ProjectModal.test.tsx
```

**Recommended Framework:**
- **Runner:** Vitest (lightweight, compatible with Vite/Next.js)
- **Testing Library:** `@testing-library/react` (component testing best practices)
- **Assertions:** Vitest built-in assertions or Chai

### Example Test Pattern

**Snapshot Testing for Presentational Components:**
```typescript
import { render } from "@testing-library/react";
import ProjectCard from "./ProjectCard";

describe("ProjectCard", () => {
	it("renders project title and description", () => {
		const mockProject: Project = {
			id: "test-1",
			title: "Test Project",
			shortDescription: "A test project",
			// ... other required fields
		};

		const { getByText } = render(
			<ProjectCard project={mockProject} />
		);

		expect(getByText("Test Project")).toBeInTheDocument();
		expect(getByText("A test project")).toBeInTheDocument();
	});

	it("calls onClick when clicked", () => {
		const onClick = vi.fn();
		const { container } = render(
			<ProjectCard project={mockProject} onClick={onClick} />
		);

		container.querySelector('[role="button"]')?.click();
		expect(onClick).toHaveBeenCalled();
	});
});
```

**Modal State Testing:**
```typescript
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OurProjects from "./OurProjects";

describe("OurProjects", () => {
	it("opens modal when project card is clicked", async () => {
		const { getByText, getByRole } = render(<OurProjects />);

		const projectCard = getByText(/Landing Page MedMind/);
		await userEvent.click(projectCard);

		expect(getByRole("dialog")).toBeInTheDocument();
	});

	it("closes modal with Escape key", async () => {
		const { getByText, getByRole, queryByRole } = render(<OurProjects />);

		const projectCard = getByText(/Landing Page MedMind/);
		await userEvent.click(projectCard);

		expect(getByRole("dialog")).toBeInTheDocument();

		await userEvent.keyboard("{Escape}");
		expect(queryByRole("dialog")).not.toBeInTheDocument();
	});
});
```

## Data Layer Testing (If Implemented)

**Pattern — Data File Validation:**
```typescript
describe("data/projects", () => {
	it("all projects have required fields", () => {
		projects.forEach((project) => {
			expect(project.id).toBeDefined();
			expect(project.title).toBeDefined();
			expect(project.technologies).toBeInstanceOf(Array);
			expect(project.technologies.length).toBeGreaterThan(0);
		});
	});

	it("all technology IDs exist in technology definitions", () => {
		const techIds = new Set(
			projects.flatMap((p) => p.technologies)
		);

		techIds.forEach((id) => {
			expect(getTechnologyById(id)).toBeDefined();
		});
	});
});
```

## Animation Testing (If Implemented)

**Pattern — Framer Motion Variants:**
```typescript
import { render } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero Animation", () => {
	it("renders with initial hidden state", () => {
		const { container } = render(<Hero />);

		const header = container.querySelector("header");
		expect(header).toHaveStyle("opacity: 0");
	});

	it("animates to visible on viewport intersection", async () => {
		const { container } = render(<Hero />);

		// Trigger IntersectionObserver callback
		// (requires mocking IntersectionObserver)

		const header = container.querySelector("header");
		// After animation, opacity should be 1
		await waitFor(() => {
			expect(header).toHaveStyle("opacity: 1");
		});
	});
});
```

## Mocking Patterns (Reference)

**What to Mock:**
- `next/image` Image component (static build doesn't need real image optimization)
- `framer-motion` for animation unit tests (test logic, not animation)
- `IntersectionObserver` for `whileInView` animations
- External APIs (if any were introduced)

**What NOT to Mock:**
- Component composition (test how components work together)
- Data imports (test with real data)
- Router navigation (Next.js handles routing)
- Tailwind CSS classes (test styling via computed styles)

**Example - Mock Next Image:**
```typescript
vi.mock("next/image", () => ({
	default: (props: any) => (
		<img {...props} src={props.src} alt={props.alt} />
	),
}));
```

## Coverage Metrics (If Implemented)

**Recommended Target:**
- Statements: 80%+
- Branches: 75%+
- Functions: 80%+
- Lines: 80%+

**Run Coverage:**
```bash
vitest --coverage
```

**Critical Paths to Cover:**
1. Modal open/close state management (`OurProjects`, `ProjectModal`)
2. Data array transformations (carousel duplication)
3. Conditional rendering (`if (!project) return null`)
4. Event handlers (keyboard navigation, clicks)

## Edge Cases to Test (If Tests Were Added)

**Component-Specific:**

**ProjectCard:**
- Renders with missing images
- Renders with long titles (text truncation)
- Keyboard navigation (Enter/Space)

**Modal:**
- Opens/closes with button click
- Closes with Escape key
- Closes when backdrop clicked
- Prevents body scroll when open

**Carousels (OurProjects):**
- Scroll arrows show/hide based on scroll position
- Animation pauses on hover
- Responsive width changes (mobile vs desktop)

**Accordion (FAQ):**
- Multiple items can't be open simultaneously (optional behavior)
- Chevron rotates on toggle
- Content expands/collapses smoothly

## Development Testing Checklist

**Manual Testing Before Build:**
1. Run `npm run dev` and visually inspect:
   - All sections render without console errors
   - Animations trigger on scroll (whileInView)
   - Modals open/close without lag
   - Responsive design works (test at 480px and desktop)
   - Dark/light theme toggle works

2. Run `npm run lint` — fix all warnings

3. Run `npm run build` — must complete without errors
   - Check `pyrux_portfolio/out/` exists and contains `index.html`
   - Verify `out/` is ready for GitHub Pages deployment

**Browser DevTools Checks:**
- No console errors or warnings (except external scripts)
- Network tab shows all images load
- Lighthouse performance score 90+

## Testing Libraries (If Added)

**Recommended Installation:**
```bash
npm install --save-dev vitest @testing-library/react @testing-library/user-event jsdom
```

**Minimal vitest.config.ts:**
```typescript
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: "jsdom",
		css: true,
	},
});
```

---

*Testing analysis: 2025-03-19*
