(food)=
# Mat (matdatabasen din)

**Mat**-databasen er din personlige liste over lagrede matvarer. Hver oppføring lagrer **karbohydratene** til en matvare (og eventuelt fett, protein, energi og en kategori), slik at du kan holde det du spiser ofte på ett sted og starte en bolus fra en lagret matvare med karbohydratene allerede fylt inn.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Åpne matdatabasen

Åpne skjermen **Administrer** (navigasjonslinjen nederst) og velg **Mat** (*«Administrer oppføringer i matdatabasen»*). I **AAPS** v4 er Mat **ikke lenger en plugin** — det er ingenting å aktivere; det er en egen skjerm som du når fra [Administrer-arket](#v4changes-manage).

---

## Matlisten

Matvarene dine vises som en rullbar liste. Hver rad viser matvarens **navn**, **porsjon / enhet / kategori** og **karbohydrater**:

![Listen i matdatabasen, med søk og legg til-knappen](../images/v4/Food/food_list.png)

- **🔍 Søk** (øverst) — filtrer listen etter **navn** (skiller ikke mellom store og små bokstaver).
- **Kategorifilter** — med brikker kan du begrense listen til en **kategori**; når en kategori er valgt, vises brikker for **underkategori** for den. (Trykk på en valgt brikke igjen for å fjerne valget.)
- **➕** (nederst til høyre) — legg til en ny matvare (se nedenfor).
- Trykk på en rad for å **redigere** den matvaren.

Hvis listen (eller det gjeldende filteret) ikke har noen oppføringer, viser skjermen **Ingen data**.

---

## Legge til og redigere en matvare

Trykk på **➕** for å legge til, eller trykk på en eksisterende rad for å redigere. Et redigeringsvindu åpnes som et ark nederst (**Legg til mat** / **Rediger mat**):

![Redigering av matvare — navn, kategori, porsjon, karbohydrater og makronæringsstoffer](../images/v4/Food/food_editor.png)

Feltene er:

- **Navn** — obligatorisk (du kan ikke lagre uten).
- **Kategori** og **Underkategori** — valgfrie, brukes til å gruppere/filtrere matvarer.
- **Porsjon** og **Enhet** — den vanlige porsjonsstørrelsen; **Enhet** er **g** som standard.
- **Karbo (g)** — mengden karbohydrater i matvaren.
- **Fett (g)**, **Protein (g)**, **Energi (kJ)** — valgfrie næringsverdier.

Trykk på **Lagre** for å lagre, eller **Avbryt** for å forkaste. Når du redigerer en eksisterende matvare, har redigeringsvinduet også en **Slett**-knapp.

```{admonition} Deleting is undoable
:class: note
Når du sletter en matvare, vises meldingen **«Mat slettet»** med en **Angre**-handling, så en sletting ved et uhell er lett å gjøre om.
```

---

## Bruke en matvare til en bolus

Hver matrad har en **kalkulator**-knapp. Trykker du på den, åpnes **boluskalkulatoren** med matvarens **karbohydrater** allerede fylt inn og matvarens **navn** lagt til som merknad på behandlingen — så du bekrefter og gir bolusen uten å skrive inn karbohydratene på nytt.

```{admonition} The carbs value is used as-is
:class: note
Matvarens lagrede **karbohydrat**-tall sendes rett til kalkulatoren — **AAPS** ganger det ikke med porsjonen eller med hvor mye du spiste. Hvis du har en annen mengde, justerer du karbohydratene i kalkulatoren før du bekrefter. (Det finnes ingen matvelger *inne i* boluskalkulatoren eller Karbo-dialogen; du starter fra matraden her.)
```

---

## Hvor matvarene kommer fra (Nightscout-synkronisering)

Matdatabasen deles via **Nightscout**, men **bare én vei**:

- **Nedlasting:** **AAPS** **leser** matvarer fra **matdatabasen** på Nightscout-siden din og holder den lokale listen synkronisert med den. Dette kjører som en del av NSClient-synkroniseringen, så en paret **klient/følger** ender også opp med de samme matvarene.
- **Opplasting:** **AAPS** sender **ikke** matvarer **til** Nightscout — NSClient støtter ikke opplasting av matoppføringer. Matvarer du lager eller redigerer **i AAPS**, blir derfor værende **på den enheten** og sendes ikke videre til Nightscout eller til de andre enhetene dine.

```{admonition} Maintain your shared list in Nightscout
:class: important
Siden mat er **bare nedlasting**, er måten å dele én matliste på mellom telefonen din, følgeren/[klienten](../RemoteFeatures/ClientMasterControl.md) din og resten av oppsettet ditt å vedlikeholde den i **Nightscout** (den innebygde matredigeringen der). **AAPS** henter ned disse oppføringene. En matvare som bare er lagt til i **AAPS**, er lokal på den enheten — og blir værende: en nedlasting matcher Nightscout-oppføringer på Nightscout-ID-en deres, så den legger til og oppdaterer dem, men overskriver eller fjerner aldri en matvare du har laget lokalt (en matvare fjernes bare når Nightscout-kopien slettes i Nightscout).

Merk at matdatabasen heller **ikke** er en del av den signerte styringskanalen mellom hovedenhet ↔ klient — den reiser kun som Nightscout-data.
```

---

## Ikke på klokken

Matdatabasen er en **telefon**-funksjon — det finnes ingen matliste, flis eller meny på en **Wear OS-klokke**.

---


<!-- =====================================================================
     Screenshots captured from a real master device:
       - food_list.png    (Manage → Food: list row, search, add button)
       - food_editor.png  ("Add Food" editor: name/category/subcategory/portion/unit/carbs/fat/protein/energy)
     No food was created or deleted (the editor was cancelled).
     Sync facts code-verified: download via LoadFoodsWorker.getFoods(); upload disabled
     (DataSyncSelectorV3 processChangedFoods() commented out — "NSCv3 doesn't support food update").
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
