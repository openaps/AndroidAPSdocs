(quickwizards)=
# QuickWizards (one-tap boluses)

A **QuickWizard** is a saved one-tap button for a recurring meal or situation. It carries a fixed amount of **carbs** (and how to dose for them), so you can deliver a bolus — or just log carbs — with a single tap and a confirmation, instead of opening the full bolus calculator every time.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Opening QuickWizards

Open the **Manage** screen (bottom navigation) and choose **QuickWizard** (*“Manage quick wizard presets”*).

---

## Gestire gli Assistenti Rapidi

I tuoi Assistenti Rapidi sono mostrati come un **carosello di schede da scorrere** (ogni scheda mostra il testo del pulsante, i carboidrati e l'intervallo di tempo valido). The editor below configures the **selected** one; the bottom action bar has **➕ add**, **⧉ clone**, **🗑️ delete** and a **▶** button to run the selected QuickWizard.

![The QuickWizard editor — mode, carbs, carb time and valid time range](../images/v4/QuickWizard/quickwizard_editor.png)

I campi principali dell'editor sono:

- **Button text** — the label shown on the button.
- **Carbs** and **Carb Time** — the carb amount and its time offset.
- **Intervallo Di Tempo Valido**: vedi [Validità](#quickwizard_validity).
- **Opzioni Calcolatore** e **Selezione dispositivo**: vedi sotto.

---

## Le tre modalità

The selector at the top of the editor — **Wizard / Insulin / Carbs** — decides **what the button does** when tapped:

- **Wizard** — runs the full **bolus calculator** for the configured carbs, using your current **BG, IOB, COB and trend** (per the *Calculator Options* below). Eroga il bolo *calcolato* e registra i carboidrati. This is the classic quick wizard.
- **Insulin** — delivers a **fixed, preset insulin amount** that you set — no calculation.
- **Carbs** — records the configured **carbs only**, with **no bolus**.

---

## Opzioni Calcolatore (modalità Calcolatore)

Per un pulsante in modalità **Calcolatore** scegli quali dati usa il calcolo:

- **Use BG**, **Use COB**, **Use IOB** (with *Positive IOB only*), **Use Trend** (*All / Positive only / Negative only*), **Use Temp Target**, **Use Alarm**.
- **Bolus percentage** — scale the calculated bolus.
- **Add eCarbs** — also schedule extended carbs.

![Opzioni Calcolatore, Percentuale bolo e Selezione dispositivo](../images/v4/QuickWizard/quickwizard_options.png)

---

## Validity — when the button appears

(quickwizard_validity)= The **Valid Time Range** (*From / To*) controls **when** a QuickWizard is shown and usable. A button set to, say, **06:00–10:00** only appears in the morning — so a *Breakfast* QuickWizard does not clutter your screen (or get tapped by mistake) at dinner. Outside its window the button is hidden from the **Treatments** sheet and from the [QuickLaunch toolbar](QuickLaunch.md). A toolbar button is not deleted: it comes back when the window opens again.

When the valid time range is shorter than 4 hours, the button is also hidden for 30 minutes after you use it, so that the same meal is not entered twice by mistake.

---

## Invocation points — where you use it

The **Device Selection** toggles decide where each QuickWizard appears:

- **Show on Phone** — it appears in the **[Treatments](../Maintenance/V4Changes.md) sheet** (with the calculated dose shown right on the button). Un Assistente Rapido mostrato sul telefono può anche essere **fissato come pulsante di azione rapida nella panoramica**: apri *Configura Avvio Rapido* (l'icona ⚙ sulla barra [Avvio Rapido](QuickLaunch.md)) e aggiungilo dalla categoria **Assistente Rapido**.
- **Show on Watch** — it appears on the **Wear OS QuickWizard tile** (swipe to it in the watch's tile carousel, then tap a button to run it — just like the [Scene tile](#scenes-from-watch)).

```{admonition} Don't see Device Selection?
:class: note
The **Device Selection** section only appears in the editor when the **Wear** plugin is enabled and its **Wear control** preference is on. Without it, every QuickWizard simply shows on the phone.
```

On the phone the QuickWizards appear at the top of the **Treatments** bottom sheet:

![QuickWizards (top) in the open Treatments bottom sheet](../images/v4/QuickWizard/quickwizard_in_treatments.png)

…e come pulsante di azione rapida nella panoramica:

![A QuickWizard quick-action button on the overview](../images/v4/QuickWizard/quickwizard_overview.png)

![Il tile Assistente Rapido su un orologio Wear OS](../images/v4/QuickWizard/quickwizard_watch_tile.png)

A paired **client** (**AAPSClient**) can also trigger a QuickWizard — the **master** computes and delivers it (see [Master ↔ Client control](../RemoteFeatures/ClientMasterControl.md)).

Wherever it is triggered, tapping a QuickWizard always shows a **confirmation** (the master-authored confirmation, when triggered from a client or watch) before anything is delivered.

A QuickWizard is refused when its dose is above your max bolus, or when its carbs or eCarbs are above your max carbs (for example after you lowered the limit). When the carbs are above the limit, the button in the **Treatments** sheet is disabled. Edit the QuickWizard or the limit.

---

## Aggiungere e rimuovere

- **➕ Aggiungi**: crea un nuovo Assistente Rapido.
- **⧉ Clone** — duplicate one as a starting point.
- **🗑️ Cancella**: rimuove un Assistente Rapido.

With two or more QuickWizards you can also change their order in the carousel: tap the **Reorder** icon (⇅) in the top bar, step the centred card with the **◀ / ▶ move buttons**, then confirm with **✓**. (The controls look the same as [reordering profiles](ProfileSwitch-ProfilePercentage.md).)

QuickWizards are part of the synced configuration, so they are shared across your master and paired clients.

---


<!-- =====================================================================
     Screenshots captured from a real master device:
       - quickwizard_editor.png   (Manage → QuickWizard: carousel, mode, carbs, carb time, valid time range)
       - quickwizard_options.png  (Calculator Options, Bolus percentage, Device Selection)
       - quickwizard_overview.png (the QuickWizard quick-action button on the overview)
       - quickwizard_watch_tile.png (the Wear OS QuickWizard tile)
     No QuickWizard was actually run (no bolus delivered).
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
