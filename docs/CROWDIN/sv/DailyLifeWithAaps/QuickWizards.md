(quickwizards)=
# Snabbknappar (bolus med ett tryck)

En **Snabbknapp** är en sparad knapp för en måltid eller situation som återkommer. Du använder den med ett enda tryck. Den har en fast mängd **kolhydrater** (och hur de ska doseras), så att du kan ge en bolus – eller bara registrera kolhydrater – med ett tryck och en bekräftelse, i stället för att öppna hela kalkylatorn varje gång.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Öppna Snabbknappar

Öppna skärmen **Hantera** (nedre navigeringen) och välj **Snabbknappar** (*”Hantera snabbknappar”*).

---

## Hantera Snabbknappar

Dina Snabbknappar visas som en **karusell med kort som du sveper mellan** (varje kort visar knapptexten, kolhydraterna och det giltiga tidsintervallet). Redigeraren nedanför ställer in den **valda** knappen. Åtgärdsfältet längst ner har knapparna **➕ lägg till**, **⧉ klona**, **🗑️ radera** och en knapp **▶** som kör den valda Snabbknappen.

![Redigeraren för Snabbknapp – läge, kolhydrater, KH-tid och giltigt tidsintervall](../images/v4/QuickWizard/quickwizard_editor.png)

De viktigaste fälten i redigeraren är:

- **Knapptext** – texten som visas på knappen.
- **Kolhydrater** och **KH-tid** – mängden kolhydrater och tidsförskjutningen för dem.
- **Giltigt tidsintervall** – se [Giltighet](#quickwizard_validity).
- **Kalkylatoralternativ** och **Enhetsval** – se nedan.

---

## De tre lägena

Väljaren högst upp i redigeraren – **Kalkylator / Insulin / Kolhydrater** – bestämmer **vad knappen gör** när du trycker på den:

- **Kalkylator** – kör hela **kalkylatorn** för de inställda kolhydraterna och använder ditt aktuella **BG, IOB, COB och trend** (enligt *Kalkylatoralternativ* nedan). Den ger den *beräknade* bolusen och registrerar kolhydraterna. Detta är den klassiska Snabbknappen.
- **Insulin** – ger en **fast, förinställd mängd insulin** som du själv anger – ingen beräkning.
- **Kolhydrater** – registrerar **bara de inställda kolhydraterna**, **utan bolus**.

---

## Kalkylatoralternativ (läget Kalkylator)

För en knapp i läget **Kalkylator** väljer du vilka värden beräkningen använder:

- **Använd BG**, **Använd COB**, **Använd IOB** (med *Endast positiv IOB*), **Använd trend** (*Alla / Endast positiv / Endast negativ*), **Använd tillfälligt målvärde**, **Använd larm**.
- **Bolusprocent** – ändrar storleken på den beräknade bolusen.
- **Lägg till eCarbs** – lägger också in förlängda kolhydrater.

![Kalkylatoralternativ, Bolusprocent och Enhetsval](../images/v4/QuickWizard/quickwizard_options.png)

---

## Giltighet – när knappen visas

(quickwizard_validity)= **Giltigt tidsintervall** (*Från / Till*) styr **när** en Snabbknapp visas och kan användas. En knapp som till exempel är inställd på **06:00–10:00** visas bara på morgonen. Då skräpar en Snabbknapp för *Frukost* inte ner skärmen (och du trycker inte på den av misstag) vid middagen. Utanför sitt tidsintervall döljs knappen i panelen **Behandlingar** och i [verktygsfältet Snabbstart](QuickLaunch.md). En knapp i verktygsfältet tas inte bort: den kommer tillbaka när tidsintervallet börjar igen.

Om det giltiga tidsintervallet är kortare än 4 timmar döljs knappen också i 30 minuter efter att du har använt den. Då registreras inte samma måltid två gånger av misstag.

---

## Var du använder den

Reglagen under **Enhetsval** bestämmer var varje Snabbknapp visas:

- **Visa på telefon** – den visas i **panelen [Behandlingar](../Maintenance/V4Changes.md)** (med den beräknade dosen direkt på knappen). En Snabbknapp som visas på telefonen kan också **fästas som en knapp för snabbåtgärd på huvudskärmen**: öppna *Konfigurera Snabbstart* (⚙ i verktygsfältet [Snabbstart](QuickLaunch.md)) och lägg till den från kategorin **Snabbknapp**.
- **Visa på klocka** – den visas på **brickan Snabbknapp i Wear OS** (svep till den bland klockans brickor och tryck sedan på en knapp för att köra den – precis som [brickan Scen](#scenes-from-watch)).

```{admonition} Don't see Device Selection?
:class: note
Avsnittet **Enhetsval** visas bara i redigeraren när pluginet **Klocka (Wear)** är aktiverat och inställningen **Kontrollera från Wear-klocka** är på. Annars visas alla Snabbknappar helt enkelt på telefonen.
```

På telefonen visas Snabbknapparna högst upp i panelen **Behandlingar**:

![Snabbknappar (högst upp) i den öppna panelen Behandlingar](../images/v4/QuickWizard/quickwizard_in_treatments.png)

…och som en knapp för snabbåtgärd på huvudskärmen:

![En Snabbknapp som knapp för snabbåtgärd på huvudskärmen](../images/v4/QuickWizard/quickwizard_overview.png)

![Brickan Snabbknapp på en Wear OS-klocka](../images/v4/QuickWizard/quickwizard_watch_tile.png)

En parkopplad **klient** (**AAPSClient**) kan också starta en Snabbknapp – **huvudenheten** beräknar och ger den (se [Styrning huvudenhet ↔ klient](../RemoteFeatures/ClientMasterControl.md)).

Var du än startar den visar en Snabbknapp alltid en **bekräftelse** innan något ges (bekräftelsen kommer från huvudenheten när du startar den från en klient eller klocka).

En Snabbknapp avvisas om dosen är större än din maximala bolus, eller om kolhydraterna eller eCarbs är fler än din maxgräns för kolhydrater (till exempel efter att du har sänkt gränsen). När kolhydraterna är över gränsen är knappen i panelen **Behandlingar** inaktiverad. Ändra Snabbknappen eller gränsen.

---

## Lägga till och ta bort

- **➕ Lägg till** – skapa en ny Snabbknapp.
- **⧉ Klona** – kopiera en knapp som utgångspunkt.
- **🗑️ Radera** – ta bort en knapp.

När du har två eller fler Snabbknappar kan du också ändra deras ordning i karusellen: tryck på ikonen **Ändra ordning** (⇅) i det övre fältet, flytta kortet i mitten med **◀ / ▶ flyttknapparna** och bekräfta sedan med **✓**. (Knapparna ser likadana ut som när du [ändrar ordning på profiler](ProfileSwitch-ProfilePercentage.md).)

Snabbknappar är en del av den synkroniserade konfigurationen, så de delas mellan din huvudenhet och parkopplade klienter.

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
