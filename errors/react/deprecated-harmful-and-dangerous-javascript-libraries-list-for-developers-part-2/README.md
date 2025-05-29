# 🐞 Deprecated, Harmful and Dangerous JavaScript Libraries list for developers - part 2

# ☠️ Harmful or Dangerous JavaScript Libraries: Part 2

---

## 9. 🧨 Known Vulnerable Libraries and Versions (Examples)

### 9.1 

- **Vulnerabilities**: Prototype pollution, RCE (Remote Code Execution) via deserialization attacks.
- **Risk**: If used to serialize user input, attackers can inject malicious payloads.
- **Safe Versions**: >2.1.1
- **Remediation**: Upgrade immediately; avoid serializing untrusted data.

### 9.2  (again)

- **Incident Summary**: Maintainer transferred ownership, attacker published malicious version 3.3.6.
- **Payload**: Hidden cryptocurrency wallet theft.
- **Lesson**: Audit ownership transfers; prefer libraries with active, trusted maintainers.

### 9.3 

- **Issue**: Prototype pollution vulnerability in versions <1.2.5.
- **Risk**: Attackers can modify prototype chain, leading to unexpected behavior or privilege escalation.
- **Fix**: Upgrade to 1.2.5 or higher.

---

## 10. 📛 Libraries with Dangerous Defaults

### 10.1 

- **Problem**: If used with default memory store in production, sessions can be lost or lead to DoS.
- **Security risk**: Session fixation if cookies are not properly configured.
- **Advice**: Use production-ready session stores like Redis, MongoDB, or Memcached.

### 10.2  (Node.js middleware)

- **Danger**: Using  with no options (allowing all origins) exposes APIs to CSRF and data theft.
- **Best practice**: Whitelist trusted origins, use credentials cautiously.

---

## 11. 📉 Performance Drainers

### 11.1 

- **More detail**: Heavy (~67KB gzipped), mutable data model.
- **Impact**: Slower parsing & larger bundles.
- **Replace with**:  or  for better tree-shaking and immutability.

### 11.2 

- **Heavyweight**: ~400KB uncompressed; includes jQuery dependency.
- **Alternatives**: , .

---

## 12. 📉 Deprecated Animation Libraries

### 12.1 

- **Status**: No longer actively maintained.
- **Issues**: Performance regressions on modern browsers.
- **Better Alternatives**:  (GreenSock Animation Platform), .

### 12.2 

- **Issues**: Bloated, dated UI widgets.
- **Alternatives**: Native Web Components, React/Vue component libraries.

---

## 13. 🧩 Outdated UI Frameworks

### 13.1 

- **Problem**: Old grid system, not fully responsive for modern devices.
- **Security**: Vulnerabilities in outdated versions.
- **Recommendation**: Upgrade to Bootstrap 5 or switch to Tailwind CSS.

### 13.2 

- **Status**: Discontinued.
- **Issue**: No support for modern CSS Grid or Flexbox.
- **Better Option**: Bulma, Tailwind CSS.

---

## 14. 📛 Suspicious npm Packages to Avoid (Recent Examples)

| Package             | Type              | Description                          |
|---------------------|-------------------|------------------------------------|
|         | Malware           | Injected coin miners (2023 incident) |
|            | Malicious Code    | Destroyed builds due to geopolitical conflict |
|              | Hijacked Package  | Injected malware in 2022            |

**Tip:** Always check package integrity using tools like  and scan for unexpected dependencies.

---

## 15. 🔧 Problematic Legacy Build Tools

### 15.1 

- **Status**: Declining usage.
- **Issues**: Slow builds, complex config.
- **Alternatives**: , , .

### 15.2  (Old presets/plugins)

- **Risk**: Legacy preset-env configs cause bloat and slow compilation.
- **Best Practice**: Use minimal, targeted configs for browserslist.

---

## 16. 🛠️ Risky Utility Libraries

### 16.1 

- **Reason**: Superseded by native JS string methods.
- **Security**: Older versions may have bugs leading to unexpected results.
- **Alternative**: Use ES6+ string utilities.

### 16.2 

- **Status**: Abandoned.
- **Issue**: Incorrect date parsing leading to subtle bugs.
- **Replace with**:  or .

---

## 17. 🚫 Popular but Dangerous Practices in JS Libraries

### 17.1 Using eval() or new Function()

- Many old libraries use  or  internally for dynamic code generation.
- **Risks**: Opens doors to XSS, code injection.
- **Example**: Older versions of Handlebars.js and some template engines.

### 17.2 Polluting Global Scope

- Libraries that create or modify global variables or prototypes.
- **Impact**: Risk of naming collisions, unpredictable behavior.
- **Example**: Prototype.js, MooTools.

---

## 18. 🔄 Problematic Dependency Chains

- Many libraries rely on vulnerable or deprecated dependencies.
- Example:  depending on old  or .
- **Advice**: Regularly audit , avoid deep, unmanaged dependency trees.

---

## 19. 📜 Historical Incidents of Supply Chain Attacks

- 2018:  attack showed how an npm package can be hijacked.
- 2022:  package hijacked, malicious code inserted.
- 2023:  package sabotaged projects due to geopolitical reasons.
- **Lesson**: Always lock your dependency tree and verify packages.

---

## 20. 🚨 Unsafe Default Configurations in Popular Libraries

### 20.1  Hot Module Replacement (HMR)

- When enabled without proper CORS and security headers, can expose internal dev server to attacks.

### 20.2 

- Using default  or lax CORS leads to hijacking risks.

---

## 21. 🧪 Risky Experimental Libraries

- Libraries like  have known exploits.
- Experimental packages without active communities often contain unpatched bugs.

---

## 22. 🔐 Libraries That Frequently Require Security Patches

| Library         | Reason                  | Notes                      |
|-----------------|-------------------------|----------------------------|
|     | Template injection risk | Update to latest            |
|  | Deserialization attacks | Patch urgently             |
|        | Arbitrary code execution | Avoid unsafe loading       |

---

## 23. 📚 Resources for Staying Updated

- [Snyk Vulnerability DB](https://snyk.io/vuln)
- [npm audit](https://docs.npmjs.com/cli/v9/commands/npm-audit)
- [GitHub Security Advisory](https://github.com/advisories)
- [OSSF Scorecards](https://github.com/ossf/scorecard)

---

*To be continued... Ask for Part 3 to go deeper into examples, analysis, and large lists.*
