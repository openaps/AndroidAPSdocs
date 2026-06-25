# AAPS Documentation — Information-Architecture Review

A structural (information-architecture) review of the AAPS documentation, written from the
point of view of a professional technical writer for medical apps used by the general public.

This is a **contributor-facing advisory document**. Like `STYLE_GUIDE.md`, it is deliberately
kept **outside `docs/EN/`** so Crowdin does not translate it and it is not published. It
recommends changes; it does **not** change any documentation.

---

## 1. Scope and method

**What was reviewed**

- The source table of contents in `docs/EN/index.md`.
- The on-disk section folders under `docs/EN/` (to find pages not surfaced in the nav).
- The published site at `https://androidaps.readthedocs.io/en/latest/`.
- The project `STYLE_GUIDE.md` and the Sphinx config (`docs/EN/conf.py`,
  `docs/shared.conf.py`).

**Audience this review optimises for**

The documentation's own style guide sets the bar: *"plain English, around CEFR B1 — readable
by a 15-year-old with no IT background."* Crucially, this audience must **build the Android
app themselves** — they cannot simply download it. So the review judges structure by one
question: *can a motivated person with diabetes (or a carer), but no IT skills, find their way
from "what is this?" to a safely running, maintained loop without getting lost?*

**Branch note**

The maintainer confirmed the structure is **identical across `master`, `dev` and `v4`**. This
review therefore applies to all branches; nothing in it is branch-specific.

---

## 2. What already works

These are strengths worth protecting through any redesign:

- **The top-level order tells a story.** Getting started → Setting up → Daily life →
  Remote/Wear → Maintenance → Help → Advanced → Support → Resources reads as a genuine user
  journey. That narrative instinct is correct for a non-technical audience.
- **The landing page sets expectations well.** It states up front that you must build the app
  yourself, gives a rough timeline, and leads with **safety** and **disclaimer** admonitions
  — exactly right for a medical tool.
- **The writing standard is already defined.** `STYLE_GUIDE.md` targets the right reading
  level, mandates second person, sentence-case headings, and "explain a term the first time
  it appears." The structure should be brought up to the same standard the prose aims for.
- **Safety is treated as a first-class citizen** (the SGLT-2 warning, the hardware safety
  notice). This must survive any move.

---

## 3. Key structural problems

Each item below states the evidence and the impact on a non-technical builder.

### 3.1 The build is bundled with unrelated jobs (but is internally well-built)

Section **3) Setting up AAPS** groups several jobs of very different difficulty into one
section: reporting server → build the app → install → setup wizard → profile → config →
objectives. The genuinely hard one for a non-technical reader — building the app — sits in the
middle of that list rather than standing out as its own phase.

**This is an editorial/placement observation, not a defect.** The build itself is *not*
poorly structured:

- `BrowserBuild.md` is a single page that uses **`{tab-item}` tabs to route the reader by OS**
  (Android / iOS / Computer), with nested **Wiki / Video** tabs inside.
- The `BrowserBuildO1A.md`, `O1I`, `O1C`, `O2A`, `O2C`, `O2AS`, `CIS`,
  `FileManagerPlus` files are **`{include}` content fragments** composed into that page
  (e.g. `:::{include} BrowserBuildO1A.md` inside `:::{tab-item} Android`). They are **not**
  orphan pages and are **not** reached by site search as standalone documents.

So the "which build path is mine?" routing a beginner needs **already exists**, in tab form.

**Recommendation (soft):** the only open question is whether to *elevate* "Build the app" to
its own top-level phase so its difficulty is signposted earlier in the journey. That is a
presentation choice, not a fix for a broken structure.

**Impact:** low. This is a polish-level improvement, not a drop-off risk.

### 3.2 Troubleshooting is fragmented across three sections

Help for a stuck user is currently spread across:

- **Section 4 (Daily Life)** — the index prose says "Common questions and answers are located
  within the troubleshooting section."
- **Section 8 (Getting Help)** — General / Bluetooth / NSClient / Android Studio
  troubleshooting, plus Profile Tuning and accessing log files.
- **Section 11 (Resources)** — the **FAQ** and the **Glossary**.

A user mid-failure should not have to guess which of three sections holds their answer.

**Impact:** the people least able to afford a scavenger hunt — those whose loop just broke —
are the ones sent on one.

### 3.3 "Change language" is Section 1

The first numbered item a new reader meets is *Change language / Change version* — plumbing,
not content. The Introduction is Section 2.

**Impact:** the table of contents leads with a utility instead of the one page that tells a
newcomer whether AAPS is even right for them.

### 3.4 Mega-pages with deep heading nesting

Several core pages are single, very long pages with dozens of H2/H3 (and deeper) sections.
The rendered master sidebar shows, for example, the **Introduction** page alone expanding to
~30 sub-headings, and **Config Builder** and **Preferences** are comparably deep.

**Impact:** a beginner cannot scan these. Length here reads as difficulty, and the reader
loses the sense of "where am I and how much is left."

### 3.5 Trust and freshness signals (these matter more in medical docs)

- A live navigation entry is titled literally **"For Clinicians (outdated)"**
  (`UsefulLinks/ClinicianGuideToAaps.md`). Shipping a page advertised as outdated to the one
  audience you can least afford to mislead — clinicians — is a real liability.
- ✅ **Largely addressed.** The documented version now has a **single source of truth** —
  `version` in `docs/shared.conf.py`, with `release` mirroring it — exposed to any page as the
  `{{ aaps_version }}` MyST substitution and restored to the sidebar header (the `sphinx_rtd_theme`
  3.0 upgrade had silently dropped the static version line). The landing-page "Latest Release"
  admonition now pulls from `{{ aaps_version }}` instead of a hard-coded number. What still drifts
  by hand: the patch-level digits and date in that admonition, and the `ReleaseNotes.md` changelog
  — both inherently per-release.
- The version-specific update pages (`Maintenance/Update2_7.md`, `Update3_0.md`,
  `UpdateAaps3204.md`) are **intentionally placed**, not orphaned: they are listed as
  sub-pages in `ReleaseNotes.md` and cross-linked from `DocumentationUpdate.md` and `FAQ.md`.
  No action needed here beyond keeping them dated; flagged only to retract an earlier
  assumption that "not in the top-level `index.md` toctree" meant "dropped."

### 3.6 Reading order does not match the in-app learning path

In Section 3, **Your AAPS Profile**, **Config Builder** and **Preferences** come *before*
**Completing the objectives** — but the Objectives are the gated, paced path that actually
*teaches* a user to operate those settings safely. The reference material is presented before
the guided practice that gives it meaning.

### 3.7 The index does double duty and is dense

The landing page carries both a long prose "Overview of the documentation" **and** the full
`toctree`, which largely restate each other in single dense paragraphs per section. The
redundancy is partly helpful, but the prose is heavy reading for a B1 audience and is another
place version facts must be hand-maintained.

---

## 4. Proposed information architecture (the overhaul)

Move from 11 mixed sections to a **phase-based journey**, with the language/version switchers
demoted to a small, non-numbered "Using this site" preface (or a persistent UI control).

| New top-level section | Purpose | Built from today's content |
|---|---|---|
| *Using this site* (preface, unnumbered) | Language/version switch, how to navigate | `NavigateDoc/ChangeLanguage`, `ChangeVersion` (today's §1) |
| **About AAPS** | What it is, is it right for me, how it works, safety | §2 Introduction |
| **Plan & prepare** | Requirements, timeline, choose hardware | §2 Preparing for AAPS, Component Overview, Compatible pumps/CGMs/phones/watches |
| **Build the app** *(new phase)* | Browser (OS-tabbed) / Studio / CLI; keystore; transfer & install | §3 Building AAPS + Browser/Studio/CLI build pages (the `BrowserBuildO1*`/`O2*`/`CIS`/`FileManagerPlus` `{include}` fragments move with `BrowserBuild.md`, unchanged) + Transferring & Installing |
| **Configure & learn** | Setup wizard → profile → config builder/preferences → objectives | §3 Setup Wizard, Your AAPS Profile, Change configuration, Config Builder, Preferences, Completing the objectives |
| **Using AAPS day to day** | Screens & everyday features | §4 in full |
| **Remote & wearables** | Remote monitor/control + watches in one place | §5 (Remote monitoring/control, SMS, Following, Android Auto) **merged with** §6 (Wear OS, watchfaces) |
| **Maintain & update** | Backup, review data, release notes, updates | §7 in full |
| **Get help & troubleshooting** *(consolidated hub)* | One discoverable place to get unstuck | §8 (all troubleshooting, Profile Tuning, log files) **merged with** §11 FAQ |
| **Advanced** | Full closed loop, dev branch, Autotune | §9 in full |
| **Reference** | Glossary, background reading, clinicians (refreshed), dedicated Google account | §11 minus FAQ |
| **Contribute** | Donate, edit docs, translate, Open Humans | §10 in full |

**The highest-value moves in this table:**

1. **One troubleshooting/help hub.** Merge the scattered troubleshooting + FAQ so a stuck
   user has a single destination. *(This is the biggest real win — see §3.2.)*
2. **Language/version demoted** below the Introduction, into a "Using this site" preface.
3. **Remote + Wear merged**, because from the reader's point of view "see/control AAPS away
   from the phone" is one topic.
4. **Build becomes its own phase** *(optional polish)*. "Build the app" and "configure the
   app" are different mental modes; the build page is already well-built internally (OS tabs),
   so this just signposts its difficulty earlier — not a fix for a broken structure.

**Coverage check:** every current TOC section (§1–§11) maps to a destination above, and no
existing page is dropped. The `BrowserBuild*` `{include}` fragments stay attached to
`BrowserBuild.md` and move with it.

---

## 5. Page-level recommendations

- **Build page — leave the routing as is.** `BrowserBuild.md` already routes the reader with
  OS tabs and `{include}` fragments; no decision page is needed. If anything, only consider
  surfacing the OS choice slightly earlier on the page.
- **Split the mega-pages.** Break Introduction, Config Builder and Preferences into a small
  cluster of shorter pages, or at minimum add an "In this page" summary block at the top of
  each so a beginner sees the shape before the scroll.
- **Give every long page a one-screen summary** up top (what you'll do, what you need,
  roughly how long).
- **Resolve the "(outdated)" clinician page** — refresh it, or move it to Reference with an
  honest "last reviewed" date rather than "(outdated)" in the nav title.
- ✅ **Done — version centralised.** The major.minor version now lives once in
  `docs/shared.conf.py` and flows to the sidebar and to pages via `{{ aaps_version }}`; the
  landing-page admonition uses it. A release-notes link could still replace the remaining
  per-release prose (patch digits / date) if you want zero hand-kept strings.
- **Headings** should follow the style guide's sentence-case rule consistently as pages move.

---

## 6. Migration considerations (for scoping the real work later)

An IA overhaul changes URLs, so the implementation — when approved — must budget for these:

- **Redirects are manual stub pages.** The build uses **no** `sphinx_reredirects`/`rediraffe`
  extension; redirects are done with per-page redirect stub files (see recent history:
  *"Redirecting old doc"*, and removal of an image whose *"only user is now a redirect stub"*).
  **Every moved or renamed page needs a stub** so the many external deep links
  (Facebook / Discord / forum posts) keep working. This is the single biggest cost of the
  overhaul and the main reason to phase it.
- **Translation load.** `docs/CROWDIN/` is off-limits; English changes propagate to
  translations later. Large renames create re-translation work, so sequence changes to keep
  churn low (the style guide makes the same point about avoiding repo-wide find-and-replace).
- **The 404 page.** `notfound.extension` is enabled — its custom 404 should list the new
  top-level entry points so a stale inbound link still lands somewhere useful.

---

## 7. Prioritised roadmap

Phased so high-value, low-risk changes land first and the disruptive re-nesting comes later.

**Phase 1 — high value, low risk (mostly additive, few redirects):**

1. ✅ **Done.** Created the single **Help & Troubleshooting** hub and cross-linked the
   scattered pages (incl. full pump-troubleshooting audit) into it, without moving files.
2. ✅ **Done.** Fixed trust signals: relabelled/dated the clinician page; widened the
   "no association / not endorsed by" vendor disclaimer to all relevant makers (Abbott
   deliberately excluded).
3. ✅ **Done.** Centralised the documented version: single source of truth in
   `docs/shared.conf.py`, exposed as the `{{ aaps_version }}` substitution, and restored to the
   sidebar header (the `sphinx_rtd_theme` 3.0 upgrade had dropped the static version line). The
   landing-page "Latest Release" admonition now reads from it.

**Phase 2 — structural moves (needs redirect stubs):**

4. ✅ **Done.** Demoted language/version to an unnumbered "Using this documentation" preface
   and renumbered all sections (captions + prose).
5. ⏭️ **Skipped by choice.** Remote and Wear OS kept as separate sections.
6. ✅ **Done.** Split **Build the app** into its own top-level section (Build → Reporting
   server → Configure), presentation only.

**Phase 3 — page-level depth work:**

7. ◑ **Partly done / remainder deferred.** Added on-page "In this page" `{contents}` TOCs to
   the long beginner-facing pages that lacked them (Introduction, Setup Wizard, Omnipod DASH,
   Automations, Remote control, Full Closed Loop); the flagged mega-pages already had them.
   Per maintainer: stop adding TOCs to further long pages; `CustomWatchfaceReference.md` is
   off-limits (consumed by the app). **Physically splitting** mega-pages into sub-pages
   remains deferred as high-churn (redirects + translation cost) — do only on explicit
   request.

---

## 8. Summary

The bones are good: the documentation already tells a journey, aims at the right reading
level, and — contrary to my first draft — already handles the build well (a single OS-tabbed
page composed from `{include}` fragments, with version-update pages deliberately linked from
Release Notes). The clearest remaining structural weakness is **findability when a user is
stuck**: troubleshooting and the FAQ are split across three sections. Building a single
*Help & troubleshooting* hub, plus repairing the freshness signals (the "(outdated)" clinician
page and — now done — centralising the version into a single source shown in the sidebar and
injected via `{{ aaps_version }}`), would deliver most of the benefit. The phase/IA
re-nesting (including optionally elevating the build) is worthwhile polish but lower priority
and carries redirect/translation cost.
