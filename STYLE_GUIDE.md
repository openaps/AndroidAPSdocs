# AAPS Documentation Style Guide

This is the single source of truth for **how the English AAPS documentation is written**.
Its job is to make the whole guide read as one clear, plain-English voice that a
non-technical reader can follow.

It is a contributor reference. It is **not** part of the published documentation and is
deliberately kept outside `docs/EN/` so it is not translated by Crowdin.

---

## 1. Purpose and scope

- This guide governs **everyday English and formatting only**.
- It **never** changes the meaning of an instruction, a numeric value, or any
  clinical/technical term.
- It applies to the **English source only** (`docs/EN/`). Do not edit translations in
  `docs/CROWDIN/` — Crowdin propagates English changes to translations later.

> **Why this matters:** readers around the world rely on these docs to build and run a
> system that doses insulin. Clarity is a safety feature; changing meaning is a safety risk.

---

## 2. Reading level

Aim for **plain English, around CEFR B1** — readable by a 15-year-old with no IT background.

- Prefer **short sentences**. Split long, run-on sentences into two or three.
- Use **everyday words** where they exist (use "about" not "approximately", "use" not
  "utilize", "help" not "facilitate").
- Use the **active voice** ("AAPS sends the command" rather than "the command is sent").
- Keep necessary technical and diabetes terms — **but explain a term in plain words the
  first time it appears on a page** if a beginner might not know it.
- One idea per sentence. One topic per paragraph.

---

## 3. Voice and tense

- Address the reader directly in the **second person**: **"you" / "your"**.
- Replace **"the user" / "users"** with **"you" / "your"** when it means the reader.
  (Keep "user" only where it genuinely means a third party, e.g. describing what a carer
  sees about another person.)
- Write in the **present tense** ("the screen shows…", not "the screen will show…"),
  except when describing something that genuinely happens later.
- Speak as the project to the reader: **"we recommend"**, **"you can"**.

---

## 4. Spelling

Use **US English** for everyday words.

| Use (US)            | Not (UK)               |
|---------------------|------------------------|
| color               | colour                 |
| behavior            | behaviour              |
| license (noun/verb) | licence                |
| customize, organize | customise, organise    |
| optimize, recognize | optimise, recognise    |
| center              | centre                 |
| -ize / -ization     | -ise / -isation        |

- The repo spell-check config (`.cspell.json`) is set to `en-US`.
- **Clinical/medical spelling is exempt and must be left as-is** — e.g. keep
  `hypoglycemia`, `hyperglycemia`, `ketoacidosis`. Do not "correct" medical terms.
- Keep brand and product names exactly as the owner spells them (e.g. *Accu-Chek*,
  *Dexcom*, *Nightscout*, *xDrip+*).

---

## 5. Terminology

Use the **preferred term** consistently. This table grows as the rollout proceeds.

| Preferred                      | Replace these variants                          | Notes |
|--------------------------------|-------------------------------------------------|-------|
| set up *(verb)* / setup *(noun/adjective)* | "setup" used as a verb; "set-up"     | "First **set up** the pump." / "Open the **setup** wizard." |
| Bluetooth                      | bluetooth, BlueTooth                            | Always capital B. |
| Wi-Fi                          | wifi, WiFi, wi-fi                                | |
| app                            | application                                     | |
| phone / smartphone             | mobile, cell phone, handset                     | Be consistent within a page. |
| closed loop / open loop        | closed-loop *(as noun)*                          | Hyphenate only when used as an adjective before a noun ("closed-loop system"). |
| Nightscout                     | NightScout, nightscout                          | |
| AAPS                           | AndroidAPS *(in prose)*                          | Keep existing `**AAPS**` bolding (see §11). |

- **Acronyms:** expand on first use per page, then use the acronym:
  "insulin on board (IOB)". Common ones in the [Glossary](docs/EN/UsefulLinks/Glossary.md)
  do not need re-expanding on every page, but expand when a beginner page introduces them.

---

## 6. Formatting UI elements

Use **bold** for anything the reader taps, clicks, or selects on screen.

- Buttons, tabs, menu items, settings, and field names: **bold**.
  - "Tap **NEXT**." / "Open the **Actions** tab." / "Enable **Allow display over other apps**."
- **Preserve the exact on-screen wording and capitalization** of a button or setting. If
  the button reads `I UNDERSTAND AND AGREE`, write it that way in bold; do not re-case it.
- **Menu paths:** join steps with ` > `, each step bold:
  **Preferences** > **Protection** > **Settings protection**.
- **Literal values, file names, paths, code, and things the user types:** use
  `` `backticks` `` (e.g. `roundtrip-time`, `keystore.jks`, `git pull`).
- Do **not** use quotation marks to mark UI elements. Reserve quotes for actual quoted text.

---

## 7. Units and numbers

- Write glucose units canonically: **`mg/dL`** and **`mmol/L`** (note the capital L; "dL").
- Put a **space between the number and the unit**: `8 mmol/L`, `144 mg/dL` (not `8mmol/l`).
- Where the source shows **both units**, keep both, in the same order each time, e.g.
  `4.0 mmol/L (72 mg/dL)`.
- **Never change a numeric value, a conversion, a threshold, or a dose.** Formatting only.
- Use a numeral + unit for measurements; spell out small counts in plain prose where it
  reads naturally ("two devices", "5 minutes").

---

## 8. Notes, tips and warnings (admonitions)

Use MyST admonitions. **Prefer the short directive form** over the verbose
`{admonition}` + `:class:` form when the title is just the type:

````markdown
```{note}
Helpful background or context.
```
````

Choose the right type by **purpose**:

| Type                | Use it for |
|---------------------|-----------|
| `{note}`            | Helpful info or context the reader should be aware of. |
| `{tip}`             | An optional improvement or shortcut. |
| `{important}`       | Something easy to miss but needed to succeed. |
| `{warning}` / `{caution}` | Risk of an error, data loss, or a broken setup. |
| `{danger}`          | Safety or clinical risk (insulin dosing, DKA, hypo). |

- Map the **non-standard classes** `:class: information` and `:class: info` to a real type
  (use `{note}`), so they render with proper coloring.
- Keep `:class: dropdown` where it is used — it makes the box collapsible and is intentional.
  Use the `{admonition}` form when you need a **custom title** or `dropdown`.
- Keep admonitions short. Don't bury a critical safety point inside a long paragraph.

---

## 9. Headings

- Use **sentence case**: capitalize the first word and proper nouns only.
  - "Setting up the reporting server" — not "Setting Up The Reporting Server".
  - Keep proper nouns/brands/acronyms capitalized (AAPS, Nightscout, Bluetooth).
- **One `#` (H1) per page**, as the page title. Use `##`, `###` for structure; don't skip levels.
- **Do not bold the whole heading** (`# **Troubleshooting**` → `# Troubleshooting`). Headings
  are already emphasized. A single brand/term that is bold *within* a longer heading may stay
  (follows §11), but don't bold the entire heading text.
- Keep a question-style heading if it already reads clearly to a beginner ("What is a
  Temp-Target?"); don't force every heading into a noun phrase.
- **Keep `(label)=` anchors exactly as they are**, on their own line immediately above the
  heading they belong to. Never rename or remove an anchor.

---

## 10. Links and cross-references

- **Keep all existing link targets exactly**: `[text](#anchor)`, `[text](path.md)`,
  `[text](../folder/Page.md)`, and external URLs. Do not invent, rename, or reorder anchors.
- You may **improve the visible link text** for clarity (the part in `[...]`), as long as the
  target in `(...)` is unchanged.
- Prefer descriptive link text over "click here" where it's easy to improve, but don't churn
  links just to reword them.

---

## 11. Punctuation and typography

- **Term bolding:** leave existing emphasis (e.g. `**AAPS**`, `**profile**`) as it is. Do not
  add new repetitive bolding and do not strip existing bolding — this keeps re-translation low.
- Use **straight quotes** (`"` and `'`), not curly quotes.
- **No double spaces** between words; no trailing spaces at end of lines.
- Abbreviations: write **`e.g.`**, **`i.e.`**, **`etc.`** in plain text with the periods (no
  italics, no missing final period). Prefer "for example" / "that is" in beginner-facing prose.
- Use an em dash (`—`) for breaks in a sentence; a hyphen (`-`) only for compound words.
- Lists: keep parallel structure (all items start the same grammatical way); end items with a
  period only if they are full sentences.

---

## 12. Hard "don'ts" (all phases)

Never change:

- Markup, MyST/Sphinx directives, or code blocks.
- `(label)=` anchors, cross-reference targets, or `toctree` entries.
- Image paths or file names.
- Numeric values, conversions, thresholds, or doses.
- Clinical and medical terminology.

And never:

- Edit anything under `docs/CROWDIN/`.
- Do a blind, repo-wide find-and-replace. Review every change per section.
- Reword historical/dated records (release notes, version-update pages) beyond spelling and
  formatting fixes.
