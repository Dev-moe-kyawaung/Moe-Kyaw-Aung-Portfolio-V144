# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| V144 (latest) | ✅ Active |
| V123 | ❌ End of life |
| V5 and below | ❌ End of life |

---

## Reporting a Vulnerability

If you discover a security vulnerability in this portfolio, please **do not open a public GitHub issue**.

Instead, report it privately:

**Email:** moekyawaung@programmer.net  
**Subject:** `[SECURITY] Portfolio V144 — <short description>`

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

I will respond within **48 hours** and will work with you to resolve the issue before any public disclosure.

---

## Security Considerations

This is a **static front-end portfolio** deployed on GitHub Pages. Key notes:

- **No server-side code** — no backend, no database
- **No authentication** — no user accounts or sessions
- **Contact form** — client-side validation only; backend integration (if added) must use server-side validation
- **Third-party assets** — images served from Cloudinary CDN; fonts from Google Fonts CDN
- **No secrets** — API keys or tokens must never be committed to this repository

---

## Responsible Disclosure

We follow responsible disclosure practices. Credit will be given to researchers who report valid vulnerabilities.

---

*"Code with culture. Build with purpose."* — မိုးကျော်အောင်
