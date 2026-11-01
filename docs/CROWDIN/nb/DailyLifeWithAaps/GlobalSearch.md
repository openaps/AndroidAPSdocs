(global-search)=
# Globalt søk

**AAPS** v4 har et **globalt søkefelt** øverst på hovedskjermen. Skriv inn et ord, så søker det i hele appen på én gang — plugins, dialoger, innstillingsskjermer, enkeltinnstillinger — og, hvis du er på nett, også i **AndroidAPS-dokumentasjonen**. Det er den raskeste måten å hoppe til en innstilling eller skjerm på, uten å måtte huske hvor den ligger.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Åpne søk

Trykk på feltet **🔍 Søk** øverst i **oversikten** (ved siden av ☰-menyen). Begynn å skrive, så vises resultatene mens du skriver (etter en kort pause), gruppert etter kategori:

![Resultater fra globalt søk, gruppert etter kategori](../images/v4/Search/search_results.png)

Tøm feltet med **✕**, eller lukk søket med enhetens **Tilbake**-knapp.

---

## Søk på engelsk *eller* på ditt eget språk

Dette er verdt å vite: søket sammenligner med **både** teksten på det **språket du har valgt** **og** den opprinnelige **engelske** teksten.

- Hvis appen din for eksempel er på tysk eller tsjekkisk, kan du skrive det **oversatte** ordet **eller** det **engelske** ordet — begge finner innstillingen.
- Et treff på den **oversatte** tittelen rangeres høyest, deretter den **engelske** tittelen, og så de oversatte og engelske **beskrivelsene**.
- Søket ignorerer **aksenter/diakritiske tegn** (så *ů* matcher *u*, *é* matcher *e*) og **skiller ikke mellom store og små bokstaver**.

Det betyr at en veiledning eller et foruminnlegg skrevet på engelsk fortsatt leder deg til riktig innstilling, selv om telefonen din viser alt oversatt.

---

## Hva søket dekker

Resultatene grupperes i disse kategoriene:

- **Plugins** — alle plugins som er synlige i ditt bygg (de samme som er listet under [Konfigurasjon](../SettingUpAaps/ConfigBuilder.md)). Hver plugin-rad har sin **aktiveringsbryter**, så du kan aktivere eller deaktivere en plugin rett fra resultatene — trykker du på raden til en deaktivert plugin (som kan slås av og på), aktiveres den.
- **Dialoger** — skjermene for behandling/handling og administrasjon (Boluskalkulator, Insulin, Forlenget bolus, Kalibrering, Midlertidig mål, Profil, …). Skjermer som ikke gjelder for ditt bygg, utelates (for eksempel *Koble til hovedenhet* på en hovedenhet, *Autoriserte klienter* på en klient).
- **Innstillingskategorier** — innstillings**skjermene** og underskjermene, både de innebygde (Generelt, Utseende, Beskyttelse, Varsler, Vedlikehold, …) og de fra plugins, pluss de små innstillingsgruppene du når fra dialoger (Fyll-knapper, steg for Insulin/Karbo-knapper, terskler for statuslys, kalkulatorinnstillinger, …).
- **Innstillinger** — hver **enkeltinnstilling** som har en tittel. Disse filtreres etter ditt bygg/din modus, så du ser bare innstillinger som faktisk gjelder (APS / NSClient / pumpestyring).
- **Dokumentasjon** — sider fra **AndroidAPS-dokumentasjonen** på nett (se nedenfor).

```{admonition} Settings that belong to a disabled plugin
:class: note
En innstilling der tilhørende plugin er **deaktivert**, vises fortsatt — **nedtonet** og ikke trykkbar — med merknaden *«Plugin … deaktivert»*, så du kan se at innstillingen finnes og hvilken plugin du må aktivere for å nå den.

![En nedtonet innstilling fra en deaktivert plugin](../images/v4/Search/search_disabled_plugin.png)
```

---

## Dokumentasjonsresultater (på nett)

Mens det lokale søket kjører, søker **AAPS** samtidig i den offisielle **AndroidAPS-dokumentasjonen** (som ligger på ReadTheDocs). Sider som matcher, vises i en **Dokumentasjon**-gruppe nederst, hver med et 📖-ikon, tittelen på avsnittet og et kort utdrag:

![Dokumentasjonsresultater (wiki) med utdrag](../images/v4/Search/search_documentation.png)

- Hvis dokumentasjonen er oversatt til appspråket ditt, søker **AAPS** i de oversatte sidene og de engelske sidene samtidig. Sider på ditt språk kommer først, deretter de engelske sidene som ikke allerede ble funnet.
- Trykker du på et dokumentasjonsresultat, åpnes siden i **nettleseren** din.
- Dokumentasjonssøk krever **internett** — når du er frakoblet, får du i stedet merknaden *«Søk etter dokumentasjon krever internettforbindelse»*, og de lokale resultatene (i appen) fungerer fortsatt som normalt.

---

## Åpne et resultat

Trykk på et resultat for å gå rett til det:

- **Plugin** → åpner den pluginen.
- **Dialog** → åpner den skjermen eller dialogen.
- **Innstillingskategori** → åpner den innstillingsskjermen.
- **Innstilling** → åpner innstillingen **der den ligger** (hopper til den inne på skjermen dens).
- **Dokumentasjon** → åpner siden i nettleseren din.

Når du åpner innstillinger og beskyttede handlinger, gjelder fortsatt **[beskyttelsen](../SettingUpAaps/ConfigBuilder.md)** din (PIN/passord), akkurat som om du hadde navigert dit selv. Etter at du har gjort noe med et resultat, kan du trykke på **Tilbake** for å gå tilbake til søkeresultatene.

---

## Snarveier for avanserte brukere

To spesielle søkeord lister en hel kategori på én gang:

- `%PLUGINS%` — lister **alle** plugins.
- `%DIALOGS%` — lister **alle** dialoger/handlingsskjermer.

---

```{admonition} The index stays current
:class: note
Søkeindeksen bygges første gang du søker, og holdes klar etter det. Den bygges automatisk på nytt når du **aktiverer/deaktiverer en plugin** eller **bytter appspråk**, så resultatene alltid gjenspeiler oppsettet ditt.
```

---


<!-- =====================================================================
     Screenshots captured from a real master device (query "bolus"):
       - search_results.png        (categorized local results: Dialogs / Preference categories / Preferences)
       - search_disabled_plugin.png (greyed-out preference from a disabled plugin)
       - search_documentation.png   (online ReadTheDocs results with 📖 icon + snippets)
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
