(global-search)=
# Overal zoeken

**AAPS** v4 heeft bovenaan het hoofdscherm een zoekvak voor **overal zoeken**. Typ een woord en het zoekt in één keer door de hele app — plugins, dialoogvensters, instellingenschermen, losse instellingen — en, als je online bent, ook in de **AndroidAPS-documentatie**. Zo ga je het snelst naar een instelling of scherm, zonder te hoeven onthouden waar het staat.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Zoeken openen

Tik op het veld **🔍 Zoeken** bovenaan het **Overzicht** (naast het menu ☰). Begin te typen; de resultaten verschijnen tijdens het typen (na een korte pauze), gegroepeerd per categorie:

![Resultaten van overal zoeken, gegroepeerd per categorie](../images/v4/Search/search_results.png)

Maak het vak leeg met de **✕**, of sluit het zoeken met de knop **Terug** van het toestel.

---

## Zoek in het Engels *of* in je eigen taal

Dit is handig om te weten: zoeken vergelijkt met **zowel** de tekst in je **gekozen taal** **als** de originele **Engelse** tekst.

- Staat je app bijvoorbeeld in het Duits of Tsjechisch, dan kun je het **vertaalde** woord **of** het **Engelse** woord typen — met allebei vind je de instelling.
- Een treffer in de **vertaalde** titel staat het hoogst, daarna de **Engelse** titel, daarna de vertaalde en Engelse **beschrijvingen**.
- Bij het zoeken tellen **accenten/diakritische tekens** niet mee (dus *ů* vindt ook *u*, *é* vindt ook *e*) en **hoofdletters maken niet uit**.

Een handleiding of forumbericht in het Engels brengt je dus nog steeds naar de juiste instelling, ook als je telefoon alles vertaald toont.

---

## Waarin zoeken werkt

De resultaten zijn gegroepeerd in deze categorieën:

- **Plugins** — elke plugin die in jouw versie zichtbaar is (dezelfde als in [Configuratie](../SettingUpAaps/ConfigBuilder.md)). Elke plugin-regel heeft een **schakelaar**, zodat je een plugin direct vanuit de resultaten kunt in- of uitschakelen — als je tikt op de regel van een uitgeschakelde plugin (die je kunt schakelen), wordt die ingeschakeld.
- **Dialoogvensters** — de schermen voor behandelingen/acties en voor beheer (Bolus wizard, Insuline, Vertraagde bolus, Kalibratie, Tijdelijk streefdoel, Profiel, …). Schermen die niet bij jouw versie horen, worden weggelaten (bijvoorbeeld *Koppel met master* op een master, *Geautoriseerde clients* op een client).
- **Instellingencategorieën** — de instellings**schermen** en subschermen, zowel ingebouwd (Algemeen, Weergave, Beveiliging, Waarschuwingen, Onderhoud, …) als van plugins, plus de kleine groepen instellingen die je via dialoogvensters bereikt (knoppen Vullen, stappen voor de knoppen Insuline/Koolhydraten, grenzen voor statuslampjes, wizard-instellingen, …).
- **Instellingen** — elke **losse instelling** die een titel heeft. Deze zijn gefilterd op jouw versie/modus, zodat je alleen instellingen ziet die echt van toepassing zijn (APS / NSClient / pompbesturing).
- **Documentatie** — pagina's uit de online **AndroidAPS-documentatie** (zie hieronder).

```{admonition} Settings that belong to a disabled plugin
:class: note
Een instelling waarvan de plugin nu **uitgeschakeld** is, wordt toch getoond — **grijs** en niet aan te tikken — met de opmerking *“Plugin … gedeactiveerd”*. Zo zie je dat de instelling bestaat en welke plugin je moet inschakelen om erbij te komen.

![Een grijze instelling van een uitgeschakelde plugin](../images/v4/Search/search_disabled_plugin.png)
```

---

## Resultaten uit de documentatie (online)

Terwijl er lokaal wordt gezocht, zoekt **AAPS** tegelijk ook in de officiële **AndroidAPS-documentatie** (op ReadTheDocs). Gevonden pagina's verschijnen onderaan in een groep **Documentatie**, elk met een pictogram 📖, de titel van de sectie en een kort fragment:

![Resultaten uit de documentatie (wiki) met fragmenten](../images/v4/Search/search_documentation.png)

- Als de documentatie in de taal van je app is vertaald, zoekt **AAPS** tegelijk in de vertaalde pagina's en in de Engelse pagina's. Pagina's in jouw taal komen eerst, daarna de Engelse pagina's die nog niet gevonden waren.
- Als je op een resultaat uit de documentatie tikt, opent die pagina in je **browser**.
- Zoeken in de documentatie heeft **internet** nodig — als je offline bent, krijg je in plaats daarvan de melding *“Voor zoeken in de documentatie is een internetverbinding vereist”*, en de lokale resultaten (in de app) werken gewoon.

---

## Een resultaat openen

Tik op een resultaat om er direct naartoe te gaan:

- **Plugin** → opent die plugin.
- **Dialoogvenster** → opent dat scherm of dialoogvenster.
- **Instellingencategorie** → opent dat instellingenscherm.
- **Instelling** → opent de instelling **op zijn plek** (springt ernaartoe binnen het scherm).
- **Documentatie** → opent de pagina in je browser.

Opening settings and protected actions still respects your **[protection](#Preferences-protection)** (PIN/password), exactly as it would if you had navigated there by hand. Nadat je iets met een resultaat hebt gedaan, kun je op **Terug** drukken om terug te gaan naar je zoekresultaten.

---

## Snelkoppelingen voor gevorderden

Twee speciale zoekopdrachten tonen in één keer een hele categorie:

- `%PLUGINS%` — toont **alle** plugins.
- `%DIALOGS%` — toont **alle** dialoogvensters/actieschermen.

---

```{admonition} The index stays current
:class: note
De zoekindex wordt gemaakt als je voor het eerst zoekt en blijft daarna klaar staan. Hij wordt automatisch opnieuw gemaakt als je **een plugin in- of uitschakelt** of **de taal van de app wijzigt**, zodat de resultaten altijd bij je huidige instellingen passen.
```

---


<!-- =====================================================================
     Screenshots captured from a real master device (query "bolus"):
       - search_results.png        (categorized local results: Dialogs / Preference categories / Preferences)
       - search_disabled_plugin.png (greyed-out preference from a disabled plugin)
       - search_documentation.png   (online ReadTheDocs results with 📖 icon + snippets)
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
