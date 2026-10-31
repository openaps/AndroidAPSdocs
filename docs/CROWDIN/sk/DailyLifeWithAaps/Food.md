(food)=
# Jedlo (vaša databáza jedál)

Databáza **Jedlo** je váš osobný zoznam uložených jedál. Každý záznam obsahuje **sacharidy** jedla (a voliteľne aj tuky, bielkoviny, energiu a kategóriu). Jedlá, ktoré jete často, tak máte na jednom mieste a bolus môžete spustiť z uloženého jedla s už vyplnenými sacharidmi.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Otvorenie databázy jedál

Otvorte obrazovku **Spravovať** (spodná navigácia) a vyberte **Jedlo** (*„Spravuj databázu záznamov jedál“*). V **AAPS** v4 už Jedlo **nie je plugin** – nie je potrebné nič povoliť; je to samostatná obrazovka, na ktorú sa dostanete z [panela Spravovať](#v4changes-manage).

---

## Zoznam jedál

Vaše jedlá sa zobrazujú ako posúvateľný zoznam. Každý riadok zobrazuje **názov** jedla, jeho **porciu / jednotku / kategóriu** a jeho **sacharidy**:

![Zoznam databázy jedál s vyhľadávaním a tlačidlom na pridanie](../images/v4/Food/food_list.png)

- **🔍 Hľadať** (hore) – filtruje zoznam podľa **názvu** (bez ohľadu na veľké a malé písmená).
- **Filter kategórií** – pomocou štítkov (chips) môžete zoznam zúžiť na jednu **kategóriu**; po výbere kategórie sa pre ňu zobrazia štítky **podkategórií**. (Ak chcete výber zrušiť, ťuknite znova na vybraný štítok.)
- **➕** (vpravo dole) – pridá nové jedlo (pozrite nižšie).
- Ťuknutím na riadok jedlo **upravíte**.

Ak zoznam (alebo aktuálny filter) nemá žiadne záznamy, obrazovka zobrazí **Žiadne dáta**.

---

## Pridanie a úprava jedla

Ťuknutím na **➕** jedlo pridáte, ťuknutím na existujúci riadok ho upravíte. Editor sa otvorí ako spodný panel (**Pridať jedlo** / **Upraviť jedlo**):

![Editor jedla – názov, kategória, porcia, sacharidy a živiny](../images/v4/Food/food_editor.png)

Polia sú:

- **Názov** – povinné (bez neho sa jedlo nedá uložiť).
- **Kategória** a **Podkategória** – voliteľné, slúžia na zoskupenie a filtrovanie jedál.
- **Porcia** a **Jednotka** – bežná veľkosť porcie; **Jednotka** je predvolene **g**.
- **Sacharidy (g)** – množstvo sacharidov v jedle.
- **Tuky (g)**, **Bielkoviny (g)**, **Energia (kJ)** – voliteľné nutričné hodnoty.

Ťuknutím na **Uložiť** jedlo uložíte, ťuknutím na **Zrušiť** zmeny zahodíte. Pri úprave existujúceho jedla má editor aj tlačidlo **Vymazať**.

```{admonition} Deleting is undoable
:class: note
Po vymazaní jedla sa zobrazí správa **„Jedlo odstránené“** s akciou **Krok späť**, takže omylom vymazané jedlo ľahko obnovíte.
```

---

## Použitie jedla pre bolus

Každý riadok jedla má tlačidlo **kalkulačky**. Ťuknutím naň sa otvorí **bolusová kalkulačka** s už vyplnenými **sacharidmi** jedla a s **názvom** jedla pridaným ako poznámka k ošetreniu – stačí potvrdiť a podať bez opätovného zadávania sacharidov.

```{admonition} The carbs value is used as-is
:class: note
Uložené množstvo **sacharidov** jedla sa odovzdá priamo do kalkulačky – **AAPS** ho nenásobí porciou ani tým, koľko ste zjedli. Ak máte iné množstvo, pred potvrdením upravte sacharidy v kalkulačke. (*V* bolusovej kalkulačke ani v dialógu sacharidov nie je výber jedla; začínate tu z riadku jedla.)
```

---

## Odkiaľ jedlá pochádzajú (synchronizácia s Nightscoutom)

Databáza jedál sa zdieľa cez **Nightscout**, ale **iba jedným smerom**:

- **Sťahovanie:** **AAPS** **načítava** jedlá z **databázy jedál** vašej stránky Nightscout a miestny zoznam s ňou udržiava synchronizovaný. Prebieha to ako súčasť synchronizácie NSClient, takže spárovaný **klient/sledujúci** má nakoniec tiež rovnaké jedlá.
- **Nahrávanie:** **AAPS** **neodosiela** jedlá **do** Nightscoutu – NSClient nepodporuje nahrávanie záznamov jedál. Jedlá, ktoré vytvoríte alebo upravíte **v AAPS**, preto zostanú **v danom zariadení** a neprenesú sa do Nightscoutu ani do vašich ďalších zariadení.

```{admonition} Maintain your shared list in Nightscout
:class: important
Keďže jedlá sa **iba sťahujú**, jeden zoznam jedál pre váš telefón, vaše zariadenie sledujúceho/[klienta](../RemoteFeatures/ClientMasterControl.md) a zvyšok vašej zostavy môžete zdieľať tak, že ho budete spravovať v **Nightscoute** (v jeho vstavanom editore jedál). **AAPS** si tieto záznamy stiahne. Jedlo pridané iba v **AAPS** je miestne pre dané zariadenie – a zostane tam: sťahovanie páruje záznamy z Nightscoutu podľa ich ID v Nightscoute, takže tieto záznamy pridáva a aktualizuje, ale nikdy neprepíše ani neodstráni jedlo, ktoré ste vytvorili miestne (jedlo sa odstráni iba vtedy, keď sa jeho kópia v Nightscoute vymaže v Nightscoute).

Databáza jedál tiež **nie je** súčasťou podpísaného ovládacieho kanála master ↔ klient – prenáša sa iba ako dáta Nightscoutu.
```

---

## Nie na hodinkách

Databáza jedál je funkcia **telefónu** – na **hodinkách s Wear OS** nie je žiadny prehliadač jedál, dlaždica ani menu.

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
