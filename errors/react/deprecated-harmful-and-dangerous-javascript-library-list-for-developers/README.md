# 🐞 Deprecated, Harmful and Dangerous Javascript library list for developers 

# ☠️ Harmful or Dangerous JavaScript Libraries: A Deep-Dive Report (1000-line Compilation)

> 📌 **Disclaimer**: This document serves educational purposes to inform developers of deprecated, insecure, or risky JavaScript libraries and patterns. Not all libraries listed here are bad by nature—but their usage in the modern web development ecosystem may lead to vulnerabilities, performance issues, or poor maintainability.

---

## 📖 Table of Contents

1. [Deprecated Libraries](#1-deprecated-libraries)
2. [Insecure Libraries](#2-insecure-libraries)
3. [Libraries With Poor Maintenance](#3-libraries-with-poor-maintenance)
4. [Malicious Packages on npm](#4-malicious-packages-on-npm)
5. [Bloated Libraries](#5-bloated-libraries)
6. [Shady or Suspicious Practices](#6-shady-or-suspicious-practices)
7. [Better Alternatives](#7-better-alternatives)
8. [Security Practices in Dependency Management](#8-security-practices-in-dependency-management)

---

## 1. 🚫 Deprecated Libraries

### 1.1 jQuery

- **Reason**: Obsolete in modern development; replaced by native JS and modern frameworks.
- **Security Issues**: XSS vectors in  and .
- **Size**: ~90KB minified.
- **Better Alternatives**: Vanilla JS, Alpine.js, Stimulus, React.

### 1.2 AngularJS (Angular 1.x)

- **Status**: Officially deprecated since Dec 31, 2021.
- **Reason**: No security updates, poor performance, high learning curve.
- **Alternatives**: Angular (v2+), Vue.js, React.

### 1.3 Bower

- **Reason**: Obsolete package manager; superseded by npm/yarn.
- **Security Risks**: Insecure delivery of dependencies.
- **Recommendation**: Migrate to npm or pnpm.

---

## 2. 🔐 Insecure Libraries

### 2.1 lodash (Certain versions)

- **Issue**: Multiple prototype pollution vulnerabilities.
- **Safe Usage**: Use v4.17.21 or newer.
- **Advice**: Avoid importing the full package; use modular imports ().

### 2.2 moment.js

- **Reason**: Not actively developed; encourages poor date handling.
- **Security**: Allows timezone exploits in poorly handled apps.
- **Size**: Over 60KB.
- **Alternatives**: date-fns, Luxon, Day.js.

### 2.3 markdown-it (Before 12.3.2)

- **Vulnerability**: XSS from crafted Markdown inputs.
- **Patch**: Ensure sanitization of HTML output.

---

## 3. 🧟‍♂️ Libraries With Poor Maintenance

### 3.1 EventEmitter3

- **Issue**: Unresolved memory leak issues in older versions.
- **Last Updated**: Sparse update cycle.
- **Better Alternatives**: mitt, tiny-emitter.

### 3.2 React-Bootstrap (Pre-v2.0)

- **Issue**: Tied to older Bootstrap versions, lagging behind.
- **Problem**: Performance lags in large UIs.
- **Recommendation**: MUI, Chakra UI, Headless UI.

---

## 4. ⚠️ Malicious Packages on npm (Past Attacks)

| Package Name      | Issue Type        | Notes |
|------------------|-------------------|-------|
|    | Malicious Code    | Injected backdoor targeting Bitcoin wallets. |
|    | Malware Distribution | Released with crypto-miners. |
| ,       | Compromised Maintainers | Published malware to steal tokens. |
|  | Trojan            | Hidden dependency attack. |
|    | Maintainer hijack | Included coin-miners. |

### 🔍 How to Detect
- Run 
- Use  or 
- Check maintainer activity on GitHub

---

## 5. 🐘 Bloated Libraries

### 5.1 axios (Full Bundle)

- **Size**: ~17KB gzipped.
- **Issues**: Can be replaced with  in many cases.
- **Problem**: Causes bundle size increase in SPAs.
- **Alternative**: , , .

### 5.2 underscore.js

- **Status**: Legacy library.
- **Problem**: Prototype pollution vulnerabilities; large footprint.
- **Alternatives**: Lodash (modular) or native JS.

---

## 6. 🕵️ Shady or Suspicious Practices

### 6.1 left-pad (Now famous)

- **Impact**: Removed from npm registry and broke thousands of builds.
- **Lesson**: Never rely on tiny utilities you can write yourself.
- **Safe Practice**: Internalize small helpers.

### 6.2 faker.js (Author rage-deleted repo)

- **Reason**: Maintainer deleted project in protest.
- **Lesson**: Governance is essential in open source.
- **Better Option**:  (community-maintained fork)

---

## 7. ✅ Better Alternatives

| Risky/Deprecated | Safer Alternative |
|------------------|-------------------|
| jQuery           | Vanilla JS, Alpine.js |
| Moment.js        | Day.js, date-fns |
| lodash           | Native JS, lodash-es |
| request          | axios, node-fetch |
| alertify.js      | SweetAlert2, Toastify |
| vue-resource     | axios, fetch |
| crypto-js        | Web Crypto API |

---

## 8. 🛡️ Security Practices in Dependency Management

### ✅ Use These Tools:

- 
- yarn audit v1.22.22
info No lockfile found.
0 vulnerabilities found - Packages audited: 0
Done in 0.20s.
-  for CVE detection
- GitHub Dependabot alerts
- 

### 🔐 Version Pinning:

- Always lock versions using .
- Avoid  and  when possible in sensitive projects.

### 🧹 Periodic Cleanup:

- Uninstall unused packages.
- Replace multi-purpose libraries with focused, modular ones.

---

## 📦 Honorable Mentions (Deprecated or Abandoned)

| Library | Reason |
|--------|--------|
| Backbone.js | Replaced by SPA frameworks |
| RequireJS | Replaced by ESModules, Webpack |
| Polymer | Superseded by Lit |
| KnockoutJS | Outdated MVVM library |
| Velocity.js | Animation library, better with GSAP |
| MooTools | Pre-jQuery legacy library |

---

*...Continued in Part 2... (ask to continue for more)*
