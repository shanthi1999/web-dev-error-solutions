# 🐞 Deprecated, Harmful and Dangerous JavaScript Libraries list for developers - part 2

# ☠️ Harmful or Dangerous JavaScript Libraries: Part 3

---

## 24. 🔥 Critical Remote Code Execution (RCE) Vulnerabilities

### 24.1 

- **Issue**: Vulnerable to RCE via deserialization of untrusted JSON.
- **Impact**: Allows attacker to execute arbitrary commands on the server.
- **Status**: Deprecated and unsafe, avoid completely.

### 24.2 

- **Risk**: Arbitrary code execution if unsafe loading () is used instead of safe load ().
- **Best Practice**: Always use  or equivalent secure API.

---

## 25. 💣 Prototype Pollution Exploits in JS Libraries

- Prototype pollution enables attackers to modify or add properties on Object prototype, which can crash or compromise apps.

### Vulnerable Libraries (examples):

| Library             | Versions affected  | Description                          |
|---------------------|--------------------|------------------------------------|
|             | <4.17.21           | Widely used utility library         |
|           | <1.2.5             | CLI argument parser                 |
|              | Multiple versions   | Deep merging of objects             |

- **How to Mitigate**: Update libraries; sanitize inputs; use defensive coding practices.

---

## 26. 🚷 Libraries That Enable Dangerous DOM Manipulation

### 26.1  Helpers

- Libraries that heavily rely on  without sanitization (e.g., older versions of , ) expose apps to XSS.

### 26.2 Deprecated Templating Engines

- ,  older versions had XSS vectors if escaping is not done properly.

---

## 27. 🧨 Dangerous Regex Usage in Libraries

- Some libraries use regex patterns vulnerable to ReDoS (Regular Expression Denial of Service).

### Examples:

| Library              | Problematic Regex | Impact                      |
|----------------------|-------------------|-----------------------------|
|   | Complex patterns  | Can cause event loop blocking|
|         | Certain patterns  | Potential DoS attacks       |

- **Tip**: Avoid untrusted user input in regexes; monitor for CVEs on regex use.

---

## 28. 🚩 Event Hijacking and Injection Vectors

- Libraries that do not properly sanitize event handlers or attach listeners globally.

### Example

- Older  versions allowed unsafe binding to events leading to event injection.

---

## 29. 🚨 Deprecated Cryptography Libraries

### 29.1  (Older versions)

- Vulnerable to padding oracle attacks and weak ciphers.
- **Recommendation**: Use native Node.js  module or vetted libraries like .

### 29.2  (Stanford JS Crypto Library)

- Older versions had timing attacks.
- Keep updated or switch to audited crypto packages.

---

## 30. ⚠️ Dangerous Cross-Origin and CORS Misconfigurations

- Libraries with lax CORS defaults expose applications to CSRF and data leakage.

### Problematic Examples

-  npm package used with  and  combined.
- Proxy middleware with unrestricted forwarding.

---

## 31. 🧩 Problematic UI Libraries Causing Memory Leaks

### 31.1  (1.x)

- Known for causing memory leaks with complex digest cycles.
- Legacy apps suffer from degraded performance.

### 31.2  (with improper cleanup)

- Libraries or components that do not clean up timers, listeners can cause memory leaks over time.

---

## 32. 💻 Dangerous CLI Tools (npm Packages)

- CLI tools that run post-install scripts can execute arbitrary code.

### Examples

-  hijacked package (2020).
- Always audit CLI tools; prefer packages with minimal install scripts.

---

## 33. 🛡️ Risky Data Parsing Libraries

### 33.1  (Older Versions)

- Vulnerable to XML External Entity (XXE) attacks.
- Update to recent versions with XXE mitigation.

### 33.2 

- Older versions vulnerable to CSV Injection when handling untrusted CSV files.

---

## 34. ⚠️ Dangerous Package Naming Collisions

- Attackers publish malicious packages with names similar to popular ones.

### Examples

| Intended Package | Malicious Package     | Description                    |
|------------------|----------------------|-------------------------------|
|          | ,    | Typosquatting attack          |
|           |               | Malicious backdoor injected   |

- **Prevention**: Use exact package names; verify publisher identity.

---

## 35. 🚀 Libraries With Hidden Backdoors or Malware

-  incident (2018).
- Several other npm packages in 2022-2024 discovered with crypto mining or data exfiltration scripts hidden.

---

## 36. 🕵️‍♂️ How to Detect and Avoid Harmful Libraries

### 36.1 Use Automated Tools

- 
- 
- 

### 36.2 Manual Checks

- Review package repository activity.
- Check for open security issues.
- Verify maintainers and contributors.

---

## 37. 📝 Best Practices to Avoid Dangerous Libraries

- Prefer well-maintained, actively developed packages.
- Avoid packages with few downloads and no recent updates.
- Check for vulnerabilities before adding dependencies.
- Use lock files ( or ).
- Monitor and upgrade dependencies regularly.

---

## 38. 🧠 Final Notes

Using third-party libraries accelerates development but increases risk if not carefully managed. Understanding:

- **Why** a library might be dangerous
- **How** vulnerabilities manifest
- **When** to update or replace libraries

is crucial to maintain secure and performant JavaScript applications.

---

