# Contributing to Moe Kyaw Aung Portfolio V144

Thank you for your interest in contributing! 🙏

This is a personal portfolio project — contributions for bug fixes, accessibility improvements, performance enhancements, and documentation are welcome.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Commit Convention](#commit-convention)
- [Pull Request Process](#pull-request-process)
- [Style Guide](#style-guide)

---

## Code of Conduct

Be respectful, constructive, and professional. Harassment of any kind is not tolerated.

---

## How to Contribute

### 🐛 Reporting Bugs
Use the [Bug Report template](.github/ISSUE_TEMPLATE/bug_report.md).

Include:
- Browser + version
- Steps to reproduce
- Expected vs actual behavior
- Screenshot if applicable

### 💡 Suggesting Features
Use the [Feature Request template](.github/ISSUE_TEMPLATE/feature_request.md).

### 🔧 Submitting Code

1. **Fork** the repository
2. **Create a branch**: `git checkout -b feat/your-feature-name`
3. **Make changes** following the style guide below
4. **Test locally**: `npm run dev` + `npm run build`
5. **Commit** using conventional commits (see below)
6. **Push** and open a **Pull Request**

---

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/moe-kyaw-aung-portfolio-v144.git
cd moe-kyaw-aung-portfolio-v144

# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:5173

# Build and verify
npm run build
npm run preview
```

---

## Commit Convention

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat:     new feature
fix:      bug fix
docs:     documentation only
style:    formatting, whitespace (no logic change)
refactor: code restructure (no feature/fix)
perf:     performance improvement
a11y:     accessibility improvement
chore:    build/tool changes
```

**Examples:**
```
feat: add dark mode persistence via localStorage
fix: correct mobile hamburger menu z-index overlap
docs: update README quick-start section
perf: lazy-load gallery images below the fold
a11y: add aria-label to social media icon links
```

---

## Pull Request Process

1. Fill out the PR template completely
2. Link the related issue (if any)
3. Ensure `npm run build` passes without errors
4. Add screenshots for visual changes
5. Keep PRs focused — one concern per PR
6. PRs are merged after review by [@Dev-moe-kyawaung](https://github.com/Dev-moe-kyawaung)

---

## Style Guide

### JavaScript / JSX
- Functional components only (no class components)
- Hooks: `useState`, `useEffect`, `useRef`, `useCallback`
- Prop destructuring in function signature
- Arrow functions for event handlers
- Descriptive variable names (no single letters except loop counters)

### CSS
- Use CSS custom properties (`var(--c-cyan)`) — never hardcode colors
- Mobile-first responsive design
- Respect `prefers-reduced-motion`
- WCAG AA contrast ratios

### Data
- All personal data constants live at the top of `MoeKyawAung_Portfolio_V144.jsx`
- Use `SCREAMING_SNAKE_CASE` for constant arrays/objects
- Never embed secrets or API keys

---

Thank you for helping make this portfolio better! 🚀

*"Code with culture. Build with purpose."* — မိုးကျော်အောင်
