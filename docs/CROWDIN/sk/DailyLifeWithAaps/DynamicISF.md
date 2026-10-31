(Open-APS-features-DynamicISF)=
# Dynamická ISF (DynISF)

Doteraz bola pri **AMA** a **SMB** hodnota **ISF** definovaná v **Profile** a bola statická pre každé zadané obdobie dňa. V skutočnosti však **ISF** človeka nie je taká statická a mení sa podľa úrovne **glykémie**: pri vysokej glykémii bude používateľ potrebovať viac inzulínu na zníženie **glykémie** o 50 mg/dl / 3 mmol/l než pri nižšej **glykémii**. [Autosens](#Open-APS-features-autosens) bol prvý algoritmus, ktorý sa pokúsil vyriešiť tento problém úpravou **ISF** mimo času jedla.

**Dynamická ISF** (nazývaná aj **DynISF**) slúži na rovnaký účel, ale je pokročilejšia, pretože ju možno používať neustále. Odporúča sa iba pokročilým používateľom, ktorí dobre zvládajú ovládanie a sledovanie **AAPS**. Pred vyskúšaním si prečítajte časť [Na čo dbať pri aktivácii dynamickej ISF](#dyn-isf-things-to-consider-when-activating-dynamicisf) nižšie.

```{admonition} CAUTION - Automations or Profile Percentage change
:class: warning

**Automatizácie** používajte vždy opatrne. Platí to najmä pri **Dynamickej ISF**.

Pri používaní **Dynamickej ISF** vypnite všetky pravidlá **Automatizácie**, ktoré dočasne menia **Profil**, pretože by **Dynamická ISF** bola pri korekčných bolusoch príliš agresívna a viedlo by to k hypoglykémii. Presne na to slúži **Dynamická ISF**, a preto nie je potrebné, aby **AAPS** pri vysokých **glykémiách** dostával cez Automatizáciu pokyn na podanie ďalšieho inzulínu.

```

Na používanie **Dynamickej ISF** potrebuje databáza **AAPS** aspoň 7 dní údajov používateľa z **AAPS**.

## Čo robí dynamická ISF?

**Dynamická ISF** dynamicky prispôsobuje citlivosť na inzulín (**ISF**) na základe používateľovej:

- celkovej dennej dávky inzulínu (**TDD**); a
- aktuálnych a predpovedaných hodnôt glykémie.

Pri používaní **Dynamickej ISF** sa hodnoty **ISF** zadané v **Profile** už vôbec nepoužívajú, okrem náhradného riešenia, keď v databáze **AAPS** nie je dosť údajov TDD (*t. j.* po novej inštalácii aplikácie).

**SMB/AMA** – príklad **profilu** používateľa so statickým **ISF** nastaveným používateľom a využívaným **SMB** a **AMA**.

![Statická ISF](../images/DynamicISF/profile_viewer_isf.png)

**Dynamická ISF** – príklad **ISF** používateľa, ktorá sa mení podľa výpočtu **Dynamickej ISF**.

![Dynamická ISF](../images/DynamicISF/DynISF2.png)

Červeno zakrúžkovaná časť zobrazuje: `profile ISF` -> `ISF as calculated by DynISF` (ISF z profilu, potom ISF vypočítaná pomocou DynISF). <br/> Tapping on this section shows a dialog with additional information, such as the **ISF** used for the calculator and carbs absorption (see [Other usages of ISF](#dynisf-other-usages-of-isf) below).

Hodnotu **DynISF** možno zobraziť aj v grafe: ťuknite na **Pridať graf** pod grafmi na hlavnej obrazovke a vyberte **VSENS** (premenlivá citlivosť). Zobrazuje sa ako biela čiara (dolná časť obrázka vyššie).

## Ako sa počíta dynamická ISF?

**Dynamická ISF** používa na určenie **ISF** model Chrisa Wilsona namiesto statickej hodnoty **ISF**, ktorú používateľ nastavil v **Profile**. Podrobné vysvetlenie nájdete tu: [Chris Wilson on Insulin Sensitivity (Correction Factor) with Loop and Learn, 2/6/2022](https://www.youtube.com/watch?v=oL49FhOts3c).

Použitá rovnica **Dynamickej ISF** je: `ISF = 1800 / ((TDD * DynISF Adjust Factor) * Ln (( current BG / insulin divisor) + 1 ))`

Premenné použité v tejto rovnici sú opísané nižšie.<br/> Poznámka: `Ln` znamená prirodzený logaritmus, matematickú funkciu.

Implementácia používa vyššie uvedenú rovnicu na výpočet aktuálnej **ISF** a v oref1 [predikciách pre **IOB**, **ZT** (nulový dočasný bazál, zero-temping) a **UAM**](#aaps-screens-prediction-lines). Používa sa aj pre **COB** a v bolusovej kalkulačke (pozrite [Iné využitie ISF](#dynisf-other-usages-of-isf) nižšie).

### TDD (celková denná dávka)
TDD využíva kombináciu nasledujúcich hodnôt:
1.  7-dňový priemer **TDD**;
2.  **TDD** z predchádzajúceho dňa; a
3.  vážený priemer spotreby inzulínu za posledných osem (8) hodín, prepočítaný (extrapolovaný) na 24 hodín.

**TDD** použitá vo vyššie uvedenej rovnici je vážená tak, že každá z vyššie uvedených hodnôt tvorí jednu tretinu.

### Korekčný faktor pre DynISF

Nastavuje sa v **Nastaveniach** používateľa a slúži na to, aby bola **Dynamická ISF** viac alebo menej agresívna. Pozrite si sekciu [Nastavenia](#dyn-isf-preferences) nižšie.

### Inzulínový deliteľ
Inzulínový deliteľ závisí od vrcholu použitého inzulínu a je nepriamo úmerný času vrcholu. Pre Lyumjev je táto hodnota 75, pre Fiasp 65 a pre bežný rýchly inzulín 55.

### ISF podľa predpovedanej glykémie pri rozhodovaní o dávkovaní

Dynamická citlivosť sa počíta z hodnoty **aktuálnej glykémie** a v **AAPS** sa zobrazuje ako vaša aktuálna ISF. Pri výpočtoch dávkovania však algoritmus oref1 počíta a používa namiesto nej **budúcu ISF**.

Robí sa to preto, aby sa nepodalo príliš veľa inzulínu, keď je **glykémia** nízka alebo sa predpovedá jej pokles.

**Budúca ISF** používa rovnaký vzorec, ako je opísané vyššie, ale namiesto **aktuálnej glykémie** môže použiť **minimálnu predpovedanú glykémiu**. **Minimálna predpovedaná glykémia**, [ako ju počíta oref1](#aaps-screens-how-predictions-become-a-dosing-decision), je najnižšia hodnota, na ktorú by mala vaša glykémia podľa predpovedí klesnúť počas celého obdobia predpovedí.

* Ak je aktuálna **glykémia** nad cieľom <br/> **a** ak je **glykémia** stabilná, v rozmedzí +/- 3 mg/dl:<br/>glykémia sa vo vzorci použije takto: `average(minimum predicted BG, current BG)` (priemer minimálnej predpovedanej glykémie a aktuálnej glykémie).
* Ak je výsledná **glykémia** nad cieľom a glykémia stúpa,<br/>  
  **alebo** je výsledná **glykémia** vyššia ako aktuálna **glykémia**:<br/>glykémia sa vo vzorci použije takto: `current BG` (aktuálna glykémia).
* Inak:<br/>glykémia sa vo vzorci použije takto: `minimum predicted BG` (minimálna predpovedaná glykémia).

Zjednodušené vysvetlenie nájdete na snímke obrazovky nižšie, ktorá túto situáciu znázorňuje. Oranžové bodky používajú **predpovedanú glykémiu**, fialové bodky **priemer (predpovedaná glykémia, aktuálna glykémia)** a modré bodky **aktuálnu glykémiu**.

![DynISF_BGValue.png](../images/DynamicISF/DynISF_BGValue.png)

(dynisf-other-usages-of-isf)=
## Iné využitie ISF

### ISF a vstrebávanie COB

Ako je opísané na stránke [Výpočet COB](../DailyLifeWithAaps/CobCalculation.md), vstrebávanie COB sa zvyčajne počíta podľa tohto vzorca:   
`absorbed_carbs = deviation * ic / isf`  
Pri používaní **Dynamickej ISF** je tu použitá **ISF** priemerom hodnôt dynamickej ISF za posledných 24 h.

### ISF v bolusovej kalkulačke

Pri použití [Bolusovej kalkulačky](#aaps-screens-bolus-wizard) sa **ISF** použije na pridanie korekcie, ak je **glykémia** nad cieľom.

Pri používaní **Dynamickej ISF** je tu použitá **ISF** priemerom hodnôt dynamickej ISF za posledných 24 h.

(dyn-isf-preferences)=
## Nastavenia

Na aktiváciu zapnite **Použiť dynamickú citlivosť** v [Nastavenia > OpenAPS SMB](#Preferences-openaps-smb-settings). Po tomto výbere budú k dispozícii nové nastavenia.

![Nastavenia dynamickej ISF](../images/preferences/settings_dynamic_isf.png)

(dyn-isf-adjustment-factor)=
### Korekčný faktor pre DynISF
**Dynamická ISF** funguje na základe jediného pravidla, ktoré má platiť pre všetkých. To znamená, že ľudia s rovnakou **TDD** by mali rovnakú citlivosť. Keďže každý používateľ má vlastnú citlivosť, **korekčný faktor** umožňuje určiť, či je na inzulín citlivejší alebo menej citlivý ako „štandardný“ človek.

**Korekčný faktor** je hodnota medzi 1 % a 300 %. Toto funguje ako násobiteľ hodnoty **TDD**.

* Zvýšenie tejto hodnoty nad 100 % robí **DynISF** agresívnejšou: hodnoty **ISF** sa *zmenšia* (_t. j._ na malé zníženie **glykémie** je potrebné viac inzulínu)
* Zníženie tejto hodnoty pod 100 % robí **DynISF** menej agresívnou: hodnoty **ISF** sa zväčšia (_t. j._ na malé zníženie **glykémie** je potrebné menej inzulínu).

**Korekčný faktor** sa mení aj pri aktivácii [**Prepnutia profilu** s percentom](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md). Nižšie **Percento profilu** zníži **korekčný faktor** a vyššie **Percento profilu** ho naopak zvýši.

Ak je napríklad váš **korekčný faktor** 80 % a vykonáte **Prepnutie profilu** na 80 %, výsledný **korekčný faktor** bude `0.8*0.8=0.64`.

To znamená, že pri používaní **DynISF** môžete pomocou **Percenta profilu** dočasne ručne doladiť svoju citlivosť. Toto môže byť užitočné pri fyzickej aktivite (nižšie percento), chorobe (vyššie percento) atď.

### Prah LGS

Hodnota **glykémie**, pod ktorou sa podávanie inzulínu zastaví (ochrana pred nízkou glykémiou). Predvolená hodnota používa štandardný cieľový model. Používateľ môže túto hodnotu nastaviť od 60 mg/dl (3,3 mmol/l) do 100 mg/dl (5,5 mmol/l). Hodnoty pod 65/3,6 vedú k použitiu predvoleného modelu.

### DynamicISF upravuje citlivosť

Toto nastavenie (*„Upraviť výpočty citlivosti pri použití DynamicISF“*) nahrádza Autosens a ako základ na zvyšovanie a znižovanie bazálnej dávky používa pomer **TDD** za posledných 24 h / **TDD** za 7 dní, rovnako ako štandardný Autosens. Táto vypočítaná hodnota sa používa aj na úpravu cieľa, ak sú povolené možnosti úpravy cieľa podľa citlivosti. Na rozdiel od funkcie Autosens táto možnosť neupravuje hodnoty **ISF**.

(dyn-isf-things-to-consider-when-activating-dynamicisf)=
## Na čo dbať pri aktivácii dynamickej ISF

* **Dynamická ISF** sa odporúča iba pokročilým používateľom, ktorí dobre zvládajú ovládanie a sledovanie **AAPS**. Používatelia by ideálne mali najprv dosiahnuť dobrú kompenzáciu so **SMB** a až potom prejsť na **Dynamickú ISF**.
* Ako už bolo spomenuté, vypnite všetky [**Automatizácie**](../DailyLifeWithAaps/Automations.md), ktoré aktivujú **Percento profilu** v závislosti od **glykémie**, pretože by to bolo príliš agresívne a mohlo by sa podať príliš veľa inzulínu! Toto je už súčasťou algoritmu **Dynamickej ISF**.
* Pri výpočte dynamickej ISF sa berie do úvahy [Percento profilu](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) (pozrite [Korekčný faktor dynamickej ISF](#dyn-isf-adjustment-factor) vyššie). Je zlým zvykom dlhodobo používať iné **Percento profilu** ako 100 %. Ak zistíte, že sa váš **Profil** zmenil, vytvorte nový **Profil** s upravenými hodnotami, ktorý zodpovedá **Profilu** s určitým percentom.
* **Dynamická ISF** nemusí fungovať u každého. Neočakávané výsledky môžete vidieť najmä vtedy, ak sa vás týka niektorá z týchto situácií:
  * Premenlivý životný štýl (nepravidelné jedlo alebo fyzická aktivita)
  * Nestála TDD alebo citlivosť zo dňa na deň.
* Neexistuje presný návod, ako nastaviť počiatočnú hodnotu **korekčného faktora**. Ako východisko však platí: ak sú hodnoty vo vašom **Profile** správne, keď ste v rozsahu a **glykémia** je stabilná, hodnota **DynISF** by mala byť približne rovnaká ako hodnota, ktorú ste predtým mali v **Profile**.<br/>Ak vidíte, že **Dynamická ISF** je príliš agresívna, znížte **korekčný faktor**, a naopak.
* Aj keď **DynISF** vôbec nepoužíva **ISF z Profilu**, ak si všimnete, že sa vaša citlivosť veľmi líši od hodnoty uloženej v **Profile**, mali by ste ju v ňom udržiavať aktuálnu. This may be useful in case you lose your **AAPS** data (_e.g._ new phone, new **AAPS** version…), as your **Profile ISF** will be used as fallback for the next 7 days.