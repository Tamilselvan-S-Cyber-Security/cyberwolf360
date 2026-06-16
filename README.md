# CyberWolf360

**Enterprise-grade security services — VAPT, compliance, and enterprise defense.**

🌐 **Website:** [www.cyberwolf360.in](https://www.cyberwolf360.in)

CyberWolf360 is a practitioner-led cybersecurity platform offering vulnerability assessment and penetration testing (VAPT), compliance readiness, red team operations, and security resources for enterprises and security learners.

---

## Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Website Pages](#website-pages)
- [Services](#services)
- [Compliance Frameworks](#compliance-frameworks)
- [Tools & Resources](#tools--resources)
- [Getting Started / FAQ](#getting-started--faq)
- [Design & Features](#design--features)
- [Local Development](#local-development)
- [Maintenance Scripts](#maintenance-scripts)
- [Deployment](#deployment)
- [License](#license)

---

## About

Cyber Wolf security services combine manual expert analysis with automated tooling aligned to industry standards including **OWASP ASVS**, **OWASP MASVS**, **OWASP API Security Top 10**, and **NIST CSF**.

### How We Test

1. **Scoping & threat modeling** — Define assets, trust boundaries, and realistic attack scenarios
2. **Manual + automated testing** — Human-led exploitation backed by industry-standard scanners
3. **Standards alignment** — Findings mapped to OWASP, MITRE ATT&CK, and compliance frameworks
4. **Actionable reporting** — Clear reproduction steps, risk ratings, and remediation guidance
5. **Retest & validation** — Verify fixes and measure security posture improvement

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 |
| Styling | CSS3 (custom dark theme) |
| Scripting | Vanilla JavaScript |
| Fonts | Inter (Google Fonts) |
| Build | Static site — no framework required |

---

## Project Structure

```
cyberwolf360-github-website/
├── index.html              # Homepage
├── services.html           # Services overview
├── compliance.html         # Compliance overview
├── getting-started.html    # FAQ & learning guide
├── tools.html              # 76+ curated security tools
├── css/
│   └── styles.css          # Global styles
├── js/
│   └── main.js             # Navigation, dropdowns, theme toggle
├── logo/
│   └── cyberwolf-logo-DbrojaJC.png
├── services/               # 24 individual service pages
│   ├── web-vapt.html
│   ├── mobile-vapt.html
│   └── ...
├── compliance/             # 18 individual compliance pages
│   ├── iso-27001.html
│   ├── gdpr.html
│   └── ...
└── scripts/                # Page generation & update utilities
    ├── generate-pages.py
    ├── generate-tools.py
    ├── update-tools-html.py
    ├── update-logo.py
    ├── update-site-domain.py
    └── fix-favicon-paths.py
```

---

## Website Pages

| Page | URL Path | Description |
|------|----------|-------------|
| Home | `/` | Overview, core services, methodology |
| Services | `/services.html` | All 24 services in 3 categories |
| Compliance | `/compliance.html` | All 18 compliance frameworks |
| Getting Started | `/getting-started.html` | FAQ, CTF info, bug bounty guide |
| Tools | `/tools.html` | 76 tools across 10 categories |
| Service detail | `/services/{slug}.html` | Individual service pages |
| Compliance detail | `/compliance/{slug}.html` | Individual framework pages |

---

## Services

### Enterprise-Grade Security

| Service | Description |
|---------|-------------|
| **Web Application VAPT** | Manual + automated testing aligned to OWASP ASVS to find exploitable flaws across web apps |
| **Mobile Application VAPT** | iOS & Android assessments covering MASVS, runtime, storage, and API attack surface |
| **Network Penetration Testing** | External and internal network exploitation to surface lateral movement paths |
| **API Penetration Testing** | Deep REST, GraphQL & gRPC testing against the OWASP API Security Top 10 |
| **Thick Client Security Assessment** | Reverse engineering and traffic analysis of desktop and installed clients |
| **Red Team Assessment** | Goal-based adversary emulation across people, process, and technology |

### Emerging Tech & Infrastructure

| Service | Description |
|---------|-------------|
| **AI & LLM Security** | Prompt injection, model abuse, data leakage and OWASP LLM Top 10 testing |
| **Web3 Security** | Smart contract audits, dApp testing, and on-chain risk reviews |
| **Cloud Security Assessment** | AWS, Azure, GCP posture reviews — identity, data, network, workloads |
| **Infrastructure Security Assessment** | On-prem and hybrid infra reviews for resilience and exposure |
| **Drone & UAV Security** | RF, firmware, and protocol assessments for unmanned aerial systems |
| **IoT Security Assessment** | Hardware, firmware, and cloud-side testing for connected products |
| **OT Security Assessment** | ICS / SCADA reviews aligned to IEC 62443 and NIST SP 800-82 |
| **Automotive Security & Compliance** | Vehicle and ECU security against ISO/SAE 21434 and UNECE R155 |

### Operations & Advisory

| Service | Description |
|---------|-------------|
| **Configuration Assessment** | Hardening reviews against CIS Benchmarks for OS, cloud, and middleware |
| **Secure Code Review** | Hybrid SAST + manual review across critical repositories |
| **DevSecOps** | Shift-left tooling, pipeline hardening, and secrets hygiene for CI/CD |
| **Security Awareness Training** | Phishing simulations and role-based training to build a human firewall |
| **Virtual CISO (vCISO)** | Executive-level security leadership on demand to mature your program |
| **Virtual DPO (vDPO)** | Outsourced data protection officer for privacy compliance and oversight |
| **Threat Intelligence** | Curated, actionable intel from surface, deep, and dark web sources |
| **Third Party Risk Assessment** | Vendor risk profiling, due diligence and continuous monitoring |
| **Digital Forensics & Incident Response** | 24×7 DFIR to contain, eradicate, and learn from incidents |
| **Managed SOC** | 24×7 detection and response powered by modern SIEM/XDR |

---

## Compliance Frameworks

### Global Standards

| Framework | Description |
|-----------|-------------|
| **ISO 27001** | Information security management systems (ISMS) |
| **ISO 27701** | Privacy information management |
| **ISO 42001** | AI management systems |
| **SOC 2** | Trust services criteria audit readiness |
| **NIST CSF** | Cybersecurity framework alignment |
| **NIST AI RMF** | AI risk management framework |

### Privacy & Data

| Framework | Description |
|-----------|-------------|
| **GDPR** | EU general data protection regulation |
| **CCPA** | California consumer privacy act |
| **DPDP Act** | India digital personal data protection |
| **PCI-DSS** | Payment card industry data security |
| **HIPAA** | US healthcare information protection |
| **HITRUST** | Healthcare risk assurance framework |

### Regional & Sectoral

| Framework | Description |
|-----------|-------------|
| **EU AI Act** | European AI regulation readiness |
| **CRA** | EU Cyber Resilience Act |
| **DORA** | Digital operational resilience act |
| **RBI** | Reserve Bank of India cyber guidelines |
| **IRDAI** | Insurance regulator security standards |
| **SEBI** | Securities market cybersecurity framework |

---

## Tools & Resources

**76 curated tools** across 10 categories for security practitioners and learners.

### Programming Languages

| Tool | Description |
|------|-------------|
| **Python** | Primary language for security scripting, exploit development, automation, and tool building |
| **JavaScript** | Essential for web app security testing, XSS analysis, and browser-based attacks |
| **Ruby** | Powers Metasploit Framework; useful for rapid prototyping and security tooling |
| **Go** | Fast, compiled language for building recon tools, scanners, and cloud security utilities |
| **C / C++** | Required for binary exploitation, reverse engineering, and understanding memory corruption |
| **Java** | Common in enterprise apps and Android; needed for deserialization and thick-client testing |
| **Bash** | Shell scripting for Linux automation, payload delivery, and post-exploitation tasks |
| **PHP** | Understanding PHP helps test LFI, RFI, deserialization, and legacy web vulnerabilities |
| **Rust** | Memory-safe systems language for building high-performance security tools and fuzzers |
| **PowerShell** | Critical for Windows post-exploitation, AD attacks, and red team operations |

### Web Hacking Tools

| Tool | Description |
|------|-------------|
| **Burp Suite** | Industry-standard web proxy for intercepting, modifying, and analyzing HTTP/HTTPS traffic |
| **OWASP ZAP** | Free, open-source web app scanner and proxy for automated and manual security testing |
| **SQLmap** | Automated SQL injection detection and exploitation tool for database takeover |
| **ffuf** | Fast web fuzzer for discovering hidden directories, parameters, and virtual hosts |
| **Gobuster** | Directory and DNS busting tool to find hidden paths and subdomains |
| **dirsearch** | Multi-threaded web path scanner for brute-forcing directories and files |
| **Arjun** | HTTP parameter discovery tool that finds hidden GET and POST parameters |
| **Katana** | Next-gen web crawler for endpoint discovery and JavaScript-aware spidering |
| **httpx** | Fast HTTP toolkit for probing live hosts, status codes, and technology fingerprints |
| **Nuclei** | Template-based vulnerability scanner with 5000+ community checks for fast detection |
| **waybackurls** | Fetches historical URLs from Wayback Machine for expanded attack surface discovery |
| **gau** | Get All URLs — aggregates known URLs from Wayback, Common Crawl, and other sources |

### Burp Suite Plugins

| Tool | Description |
|------|-------------|
| **Logger++** | Advanced logging extension to filter, search, and export Burp traffic at scale |
| **Autorize** | Automates authorization testing by replaying requests with different session tokens |
| **Turbo Intruder** | High-speed HTTP request engine for race conditions and brute-force attacks |
| **Param Miner** | Discovers hidden parameters, cache poisoning vectors, and Web Cache deception |
| **Hackvertor** | Encoding and transformation tool for crafting complex payloads in Burp |
| **Active Scan++** | Enhances Burp's active scanner with additional vulnerability checks |
| **JWT Editor** | Inspect, modify, and attack JSON Web Tokens for auth bypass testing |
| **Backslash Powered Scanner** | Finds unknown vulnerability classes using advanced injection techniques |

### Mobile Hacking Tools

| Tool | Description |
|------|-------------|
| **Frida** | Dynamic instrumentation toolkit for hooking and modifying mobile app runtime behavior |
| **Objection** | Runtime mobile exploration toolkit built on Frida for iOS and Android testing |
| **MobSF** | All-in-one mobile app security framework for static and dynamic analysis |
| **jadx** | Decompiles Android APK/DEX files to readable Java source for code review |
| **apktool** | Reverse engineers Android APK resources and smali code for modification |
| **drozer** | Android security assessment framework for finding app and device vulnerabilities |

### Android Hacking Tools

| Tool | Description |
|------|-------------|
| **ADB** | Android Debug Bridge for device communication, shell access, and app management |
| **QARK** | Quick Android Review Kit — static analysis tool for finding common Android flaws |
| **Inspeckage** | Dynamic Android analysis tool for inspecting app HTTP traffic and shared preferences |
| **Drozer Agent** | Companion agent app that enables drozer console to interact with Android devices |
| **Android Emulator** | Virtual Android device for safe mobile app testing and debugging |
| **scrcpy** | Mirrors and controls Android devices from desktop for efficient mobile testing |

### Desktop / Embedded Hacking Tools

| Tool | Description |
|------|-------------|
| **Ghidra** | NSA's free reverse engineering suite for disassembling and analyzing binaries |
| **radare2** | Open-source reverse engineering framework for binary analysis and debugging |
| **Wireshark** | Network protocol analyzer for capturing and inspecting packet-level traffic |
| **binwalk** | Firmware analysis tool for extracting embedded files and reverse engineering IoT devices |
| **IDA Free** | Industry-standard disassembler for deep binary and malware analysis |
| **x64dbg** | Open-source debugger for Windows binary analysis and exploit development |

### Exploitation Resources

| Tool | Description |
|------|-------------|
| **ExploitDB** | Archive of public exploits and vulnerable software for research and pentesting |
| **PayloadsAllTheThings** | Curated list of payloads and bypass techniques for every vulnerability class |
| **GTFOBins** | Unix binaries that can be abused for privilege escalation and shell escape |
| **HackTricks** | Comprehensive pentesting methodology book covering web, cloud, AD, and mobile |
| **LOLBAS** | Living Off The Land Binaries — Windows binaries usable for post-exploitation |
| **LinPEAS / WinPEAS** | Automated privilege escalation scanners for Linux and Windows environments |

### Scanners / Frameworks

| Tool | Description |
|------|-------------|
| **Metasploit** | Penetration testing framework with exploits, payloads, and post-exploitation modules |
| **BloodHound** | Maps Active Directory attack paths to find privilege escalation routes to Domain Admin |
| **CrackMapExec** | Swiss army knife for pentesting Windows networks and Active Directory |
| **OpenVAS** | Open-source vulnerability scanner for network-wide security assessment |
| **Metasploit Framework** | Open-source core of Metasploit for exploit development and penetration testing |
| **Commix** | Automated command injection exploitation tool for web applications |

### Datasets / Freemium Services

| Tool | Description |
|------|-------------|
| **VulnHub** | Downloadable vulnerable VMs for offline penetration testing practice |
| **HackTheBox** | Online platform with realistic machines and challenges for skill building |
| **TryHackMe** | Guided, beginner-friendly cybersecurity learning paths and virtual labs |
| **PentesterLab** | Hands-on web security exercises with real-world vulnerability scenarios |
| **PortSwigger Labs** | Free interactive labs covering OWASP Top 10 and advanced web attacks |
| **HackerOne** | Leading bug bounty platform connecting researchers with vulnerability reward programs |

### Miscellaneous Hacking Tools

| Tool | Description |
|------|-------------|
| **CyberChef** | Swiss army knife for encoding, decoding, encryption, and data transformation |
| **Recon-ng** | Full-featured reconnaissance framework with modular OSINT gathering |
| **theHarvester** | OSINT tool for collecting emails, subdomains, and hosts from public sources |
| **Amass** | In-depth attack surface mapping and external asset discovery via OSINT |
| **Subfinder** | Passive subdomain discovery tool using multiple public data sources |
| **testssl.sh** | Command-line tool for testing TLS/SSL configuration and cipher weaknesses |
| **Dalfox** | Fast, powerful parameter analysis and XSS scanning tool for web apps |
| **Feroxbuster** | Recursive content discovery tool written in Rust for fast directory brute-forcing |
| **Subjack** | Subdomain takeover vulnerability checker to find dangling DNS records |
| **anew** | Utility to append new lines to files — essential for deduplicating recon output |

---

## Getting Started / FAQ

### What is CyberWolf360?

CyberWolf360 is a practitioner-led cybersecurity platform that combines enterprise security services with community education. We offer VAPT, compliance readiness, red team operations, and managed defense for organizations — while also providing resources, tools, and a CTF platform for security practitioners.

### What is the CyberWolf360 CTF?

The CyberWolf360 Capture The Flag (CTF) is a hands-on learning platform where you solve security challenges across web, crypto, forensics, reverse engineering, and pwn categories.

**Recommended progression:**
1. Start with web challenges (SQL injection, XSS, SSRF)
2. Move to crypto and forensics basics
3. Progress to reverse engineering and binary exploitation
4. Join team competitions to build collaboration skills

### I'm New — How Do I Get Started?

1. Learn networking basics — TCP/IP, DNS, HTTP
2. Pick a programming language — start with **Python**
3. Set up a lab — Kali Linux in VirtualBox or VMware
4. Learn web security — [PortSwigger Web Security Academy](https://portswigger.net/web-security)
5. Practice legally — TryHackMe, HackTheBox, CyberWolf360 CTF
6. Build a methodology — recon → enumeration → exploitation → reporting

### Getting Into Bug Bounties

1. Master one vulnerability class deeply (XSS, IDOR, SSRF)
2. Start with public programs on HackerOne and Bugcrowd
3. Focus on recon — subfinder, amass, httpx
4. Write quality reports with clear impact and reproduction steps
5. Build a portfolio of CTF solves and write-ups
6. Stay ethical — only test in-scope assets

---

## Design & Features

- **Dark theme** inspired by Hacker101 — black background, white text, blue links, pink accents
- **Mega dropdown navigation** — Services, Compliance, Resources with scroll support
- **Responsive layout** — desktop, tablet, and mobile
- **Light / dark mode toggle**
- **Smooth anchor scrolling** for tools and FAQ sections
- **SEO optimized** — canonical URLs, Open Graph, Twitter Cards, JSON-LD on homepage
- **Sticky header** with scroll shadow effect
- **Individual detail pages** for every service and compliance framework

---

## Local Development

### Option 1 — Open directly

Open `index.html` in your browser.

### Option 2 — Local server (recommended)

```bash
# Python
python -m http.server 8080

# Node.js
npx serve .
```

Visit: `http://localhost:8080`

---

## Maintenance Scripts

Run from the project root:

```bash
# Regenerate all service & compliance detail pages
python scripts/generate-pages.py

# Regenerate tools section in tools.html
python scripts/update-tools-html.py

# Apply logo image across all pages
python scripts/update-logo.py

# Add/update www.cyberwolf360.in meta tags
python scripts/update-site-domain.py

# Fix favicon paths in subfolder pages
python scripts/fix-favicon-paths.py
```

---

## Deployment

1. Upload all files to your web host
2. Point **www.cyberwolf360.in** to the site root
3. Ensure `index.html` is the default document
4. Verify canonical URLs resolve at `https://www.cyberwolf360.in/`

### Recommended hosting

- GitHub Pages
- Netlify
- Vercel
- Any static file hosting (Apache, Nginx, S3 + CloudFront)

---

## License

© 2026 [www.cyberwolf360.in](https://www.cyberwolf360.in) — All rights reserved.

---

**CyberWolf360** — Practitioner-led VAPT, compliance, and enterprise defense.
