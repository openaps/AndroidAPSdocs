(food)=
# Maistas (jūsų maisto duomenų bazė)

Duomenų bazė **Maistas** yra jūsų asmeninis išsaugotų maisto produktų sąrašas. Kiekviename įraše saugomas maisto produkto **angliavandenių** kiekis (ir, jei norite, riebalai, baltymai, energija ir kategorija), todėl dažnai valgomus produktus galite laikyti vienoje vietoje ir pradėti bolusą iš išsaugoto produkto, kurio angliavandeniai jau įrašyti.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Maisto duomenų bazės atvėrimas

Atverkite ekraną **Valdymas** (apatinė navigacijos juosta) ir pasirinkite **Maistas** (*„Tvarkyti maisto duomenų bazės įrašus“*). **AAPS** v4 versijoje Maistas **nebėra įskiepis** – nieko nereikia įjungti; tai atskiras ekranas, kurį atveriate iš [lango Valdymas](#v4changes-manage).

---

## Maisto sąrašas

Jūsų maisto produktai rodomi slenkamame sąraše. Kiekvienoje eilutėje rodomas produkto **pavadinimas**, jo **porcija / vienetas / kategorija** ir **angliavandeniai**:

![Maisto duomenų bazės sąrašas su paieška ir pridėjimo mygtuku](../images/v4/Food/food_list.png)

- **🔍 Ieškoti** (viršuje) – filtruoja sąrašą pagal **pavadinimą** (didžiosios ir mažosios raidės nesvarbu).
- **Kategorijos filtras** – žymomis (chips) galite susiaurinti sąrašą iki vienos **kategorijos**; pasirinkus kategoriją, atsiranda jos **subkategorijų** žymos. (Norėdami panaikinti pasirinkimą, dar kartą paspauskite pasirinktą žymą.)
- **➕** (apačioje dešinėje) – pridėti naują maisto produktą (žr. toliau).
- Paspauskite eilutę, jei norite **redaguoti** tą produktą.

Jei sąraše (arba pagal dabartinį filtrą) įrašų nėra, ekrane rodoma **Nėra duomenų**.

---

## Maisto produkto pridėjimas ir redagavimas

Paspauskite **➕**, jei norite pridėti, arba paspauskite esamą eilutę, jei norite ją redaguoti. Redagavimo langas atsidaro ekrano apačioje (**Pridėti maistą** / **Redaguoti maistą**):

![Maisto redagavimo langas – pavadinimas, kategorija, porcija, angliavandeniai ir kitos maistinės medžiagos](../images/v4/Food/food_editor.png)

Laukai:

- **Pavadinimas** – privalomas (be jo išsaugoti negalima).
- **Kategorija** ir **Subkategorija** – neprivalomi, naudojami produktams grupuoti / filtruoti.
- **Porcija** ir **Vienetas** – įprastas porcijos dydis; numatytasis **Vienetas** yra **g**.
- **Angliavandeniai (g)** – produkto angliavandenių kiekis.
- **Riebalai (g)**, **Baltymai (g)**, **Energija (kJ)** – neprivalomos maistinės vertės.

Spauskite **Išsaugoti**, jei norite įrašyti, arba **Atšaukti**, jei norite atmesti pakeitimus. Redaguojant esamą produktą, lange taip pat yra mygtukas **Ištrinti**.

```{admonition} Deleting is undoable
:class: note
Ištrynus produktą, rodomas pranešimas **„Maistas pašalintas“** su veiksmu **Anuliuoti**, todėl atsitiktinį ištrynimą lengva atšaukti.
```

---

## Maisto produkto naudojimas bolusui

Kiekvienoje maisto eilutėje yra **skaičiuotuvo** mygtukas. Jį paspaudus, atsidaro **Boluso patarėjas**, kuriame jau įrašyti to produkto **angliavandeniai**, o produkto **pavadinimas** pridėtas kaip terapijos pastaba – taigi tereikia patvirtinti ir suleisti, angliavandenių iš naujo įvesti nereikia.

```{admonition} The carbs value is used as-is
:class: note
Išsaugotas produkto **angliavandenių** skaičius perduodamas tiesiai į patarėją – **AAPS** jo nedaugina iš porcijos ar iš to, kiek suvalgėte. Jei suvalgėte kitą kiekį, prieš patvirtindami pakoreguokite angliavandenius patarėjuje. (*Pačiame* Boluso patarėjuje ar angliavandenių lange maisto pasirinkimo nėra; pradėti reikia nuo maisto eilutės čia.)
```

---

## Iš kur atsiranda maisto produktai (Nightscout sinchronizavimas)

Maisto duomenų bazė bendrinama per **Nightscout**, tačiau **tik viena kryptimi**:

- **Atsisiuntimas:** **AAPS** **nuskaito** maisto produktus iš jūsų Nightscout svetainės **maisto duomenų bazės** ir vietinį sąrašą sinchronizuoja su ja. Tai vyksta kaip NSClient sinchronizavimo dalis, todėl susietas **klientas / sekėjas** taip pat gauna tuos pačius maisto produktus.
- **Įkėlimas:** **AAPS** **nesiunčia** maisto produktų **į** Nightscout – NSClient nepalaiko maisto įrašų įkėlimo. Todėl maisto produktai, kuriuos sukuriate ar redaguojate **AAPS programėlėje**, lieka **tame įrenginyje** ir nepersiunčiami į Nightscout ar į kitus jūsų įrenginius.

```{admonition} Maintain your shared list in Nightscout
:class: important
Kadangi maistas yra **tik atsisiunčiamas**, norėdami turėti vieną maisto sąrašą telefone, sekėjo / [kliento](../RemoteFeatures/ClientMasterControl.md) įrenginyje ir kitose jūsų sistemos dalyse, tvarkykite jį **Nightscout** (jo įtaisytame maisto redaktoriuje). **AAPS** tuos įrašus atsisiųs. Maisto produktas, pridėtas tik **AAPS**, yra vietinis tame įrenginyje ir toks lieka: atsisiunčiant Nightscout įrašai atpažįstami pagal jų Nightscout ID, todėl jie pridedami ir atnaujinami, bet vietoje sukurtas produktas niekada neperrašomas ir nepašalinamas (produktas pašalinamas tik tada, kai jo kopija ištrinama Nightscout).

Atkreipkite dėmesį, kad maisto duomenų bazė **nėra** ir pasirašyto pagrindinio įrenginio ↔ kliento valdymo kanalo dalis – ji perduodama tik kaip Nightscout duomenys.
```

---

## Laikrodyje nėra

Maisto duomenų bazė yra **telefono** funkcija – **Wear OS laikrodyje** nėra nei maisto naršyklės, nei plytelės, nei meniu.

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
