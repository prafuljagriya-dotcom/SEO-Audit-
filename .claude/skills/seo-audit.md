# SEO Audit Skill — Local Storage Facility Websites

## Trigger
Invoked with `/seo-audit <url>` where `<url>` is the root URL of a storage facility website.

## Target Keywords (always in scope)
- self storage
- self storage units
- self storage near me
- self storage facility
- RV storage
- boat storage
- [city] [state] (extracted from the facility address)

---

## Execution Plan

Follow every step in order. Do not skip steps. Present findings in the structured report format defined at the end.

### Step 1 — Identify & Fetch Core Pages

Using `WebFetch`, retrieve the following pages (replace `<url>` with the provided root URL):

1. **Home page** — `<url>/`
2. **Rent / Reserve page** — try `/rent`, `/reserve`, `/units`, `/storage-units`, `/self-storage` (use the first one that resolves)
3. **About / About Us page** — try `/about`, `/about-us`
4. **Contact page** — try `/contact`, `/contact-us`
5. **Sitemap** — try `/sitemap.xml` or `/sitemap_index.xml` (optional, captures additional pages)

For each page capture:
- Full page title (`<title>` tag)
- Meta description content
- All heading tags in order: H1, H2, H3
- Visible body text (first 2000 characters)
- NAP block: business name, street address, city, state, ZIP, phone number
- Internal links list

---

### Step 2 — Extract Facility Identity

From the fetched pages, extract and record:

| Field | Value |
|---|---|
| Business name | |
| Street address | |
| City | |
| State | |
| ZIP | |
| Phone | |
| Primary city/state keyword | `[city] [state]` |

---

### Step 3 — Technical SEO Checklist

Check each item and mark **PASS / FAIL / WARN / NOT CHECKED** with a short note.

#### 3a. Crawlability & Indexing
- [ ] `robots.txt` accessible at `<url>/robots.txt` — is Googlebot blocked?
- [ ] Sitemap present and linked from `robots.txt`
- [ ] Canonical tags present on home page and rent page (check `<link rel="canonical">`)
- [ ] No `noindex` meta tag on home page or rent page
- [ ] HTTPS — URL loads securely (https://)

#### 3b. Page Speed Signals (infer from page weight/structure)
- [ ] Images: are `<img>` tags missing `alt` attributes?
- [ ] Images: are image files referenced with descriptive filenames (e.g., `self-storage-units-austin-tx.jpg`) or generic names (`img001.jpg`)?
- [ ] Is there a lazy-loading attribute (`loading="lazy"`) on below-the-fold images?

#### 3c. Mobile & Core Web Vitals (structural check)
- [ ] Viewport meta tag present: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- [ ] No intrusive interstitials or pop-ups detected in markup

#### 3d. Structured Data (Schema.org)
- [ ] `LocalBusiness` or `SelfStorage` schema present in `<script type="application/ld+json">`
- [ ] Schema includes: `name`, `address`, `telephone`, `openingHours`, `geo` (lat/long), `url`
- [ ] FAQ schema present (if FAQ section exists)
- [ ] Review/AggregateRating schema present

#### 3e. NAP Consistency
- [ ] NAP (Name, Address, Phone) is identical on home page footer, contact page, and rent page
- [ ] Address format matches Google Business Profile format (if detectable)

---

### Step 4 — On-Page SEO Audit (Home Page)

Evaluate each element against best practices for local self-storage SEO.

#### 4a. Title Tag
- Current title: `[extract]`
- Optimal format: `Self Storage Units in [City], [State] | [Brand Name]`
- Does it include the primary keyword + city + state? **YES / NO**
- Character count (ideal: 50–60 chars): `[count]`
- **Recommendation:** `[rewritten title if needed]`

#### 4b. Meta Description
- Current meta description: `[extract]`
- Does it include primary keyword + city + CTA (e.g., "Reserve online today")? **YES / NO**
- Character count (ideal: 140–160 chars): `[count]`
- **Recommendation:** `[rewritten meta description if needed]`

#### 4c. H1 Tag
- Current H1: `[extract]`
- Should contain the primary keyword and city. **YES / NO**
- Only one H1 on the page? **YES / NO**
- **Recommendation:** `[rewritten H1 if needed]`

#### 4d. H2 / H3 Subheadings
- List all current H2s and H3s
- Do subheadings incorporate secondary keywords (RV storage, self storage near me, storage units, etc.)? **YES / NO**
- **Recommendation:** list of suggested H2/H3 replacements if needed

#### 4e. Body Content
- Approximate word count: `[count]`
- Is the primary keyword mentioned in the first 100 words? **YES / NO**
- Does content mention city + state at least 3 times? **YES / NO**
- Is there a locally relevant paragraph (neighborhood references, nearby landmarks, city-specific language)? **YES / NO**
- Does content answer common customer questions (pricing, access hours, security, unit sizes)? **YES / NO**
- **Recommendation:** list content gaps and suggested additions

#### 4f. Internal Linking
- Does home page link to the rent/units page with keyword-rich anchor text (e.g., "View self storage units" not just "click here")? **YES / NO**
- **Recommendation:** `[anchor text suggestions]`

#### 4g. Image Alt Text
- List any images missing alt text
- **Recommendation:** suggested alt text for each (include keyword + location where relevant)

---

### Step 5 — On-Page SEO Audit (Rent / Units Page)

#### 5a. Title & Meta Description
- Apply the same checks as Step 4a–4b
- Optimal title format: `Storage Units for Rent in [City], [State] | [Brand Name]`

#### 5b. H1 & Subheadings
- Same checks as Step 4c–4d
- Suggested H1: `Storage Units for Rent in [City, State]`

#### 5c. Unit Listings
- Are unit sizes labeled clearly (5×5, 5×10, 10×10, 10×20, etc.)? **YES / NO**
- Do listings include descriptive text mentioning use cases (vehicle storage, RV storage, business storage, household items)? **YES / NO**
- Are prices shown? **YES / NO**
- Is there a clear CTA per unit (Reserve, Rent Now, Check Availability)? **YES / NO**
- **Recommendation:** suggested unit description template

#### 5d. Location/Address Block
- Is the full address visible on the rent page? **YES / NO**
- Is an embedded Google Map present? **YES / NO**

#### 5e. FAQ Section
- Does a FAQ section exist on the rent page or home page? **YES / NO**
- If YES: list current FAQ questions
- Does FAQ cover: unit sizes, pricing, access hours, security, RV/boat storage availability, online rental? **YES / NO**
- Is FAQ marked up with FAQ schema (`FAQPage` + `Question` + `Answer`)? **YES / NO**
- **Generated FAQ suggestions** (always provide at least 5 new or improved Q&A pairs tuned to target keywords and city):

```
Q: What size self storage unit do I need in [City]?
A: ...

Q: Do you offer RV storage near [City], [State]?
A: ...

Q: How much does self storage cost in [City]?
A: ...

Q: Can I rent a self storage unit online?
A: ...

Q: Is your [City] storage facility climate controlled?
A: ...
```

---

### Step 6 — Competitive Gap (SERP Snapshot)

Search for the primary keyword `self storage [city] [state]` using `WebSearch` and note:

- Top 3 ranking pages (URL + title)
- What content elements do they have that this site lacks?
- What schema markup do they use that this site lacks?
- List the gaps as actionable items

---

### Step 7 — Priority Action Plan

Produce a ranked list of fixes sorted by impact (High / Medium / Low):

| Priority | Category | Issue | Recommended Fix |
|---|---|---|---|
| HIGH | Technical | Missing LocalBusiness schema | Add JSON-LD schema block (template provided below) |
| HIGH | On-Page | H1 missing city keyword | Rewrite H1 to include city + state |
| ... | ... | ... | ... |

---

### Step 8 — Ready-to-Use Content Snippets

Always provide the following copy-paste ready outputs at the end of the audit:

#### A. JSON-LD LocalBusiness Schema (filled with extracted data)
```json
{
  "@context": "https://schema.org",
  "@type": "SelfStorage",
  "name": "[Business Name]",
  "url": "[URL]",
  "telephone": "[Phone]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Street]",
    "addressLocality": "[City]",
    "addressRegion": "[State]",
    "postalCode": "[ZIP]",
    "addressCountry": "US"
  },
  "openingHoursSpecification": [],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "",
    "longitude": ""
  }
}
```

#### B. Rewritten Home Page Title Tag
```
[Provide optimized title — 50–60 chars, includes primary keyword + city + state]
```

#### C. Rewritten Home Page Meta Description
```
[Provide optimized meta description — 140–160 chars, includes keyword + city + CTA]
```

#### D. Suggested Home Page H1
```
[Provide optimized H1]
```

#### E. Suggested Home Page Introductory Paragraph (100–150 words, keyword-rich, locally relevant)
```
[Write the paragraph here]
```

#### F. FAQ Block (minimum 5 Q&As with FAQ schema markup)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Q1?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A1."
      }
    }
  ]
}
```

---

## Output Format

Present the audit as a structured markdown report with these top-level sections:

```
# SEO Audit Report — [Business Name] ([City, State])
Audited: [today's date]
URL: [url]

## Facility Summary
## Technical SEO
## Home Page — On-Page SEO
## Rent Page — On-Page SEO
## Competitive Gap
## Priority Action Plan
## Ready-to-Use Content Snippets
```

Keep findings factual and specific to the actual page content fetched. Do not invent issues that are not present. Where a check cannot be verified from the fetched HTML, mark it "NOT CHECKED — verify manually."
