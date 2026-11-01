# Dočasné ciele

## Čo sú dočasné ciele a kde ich môžem nastaviť a upraviť?

**Dočasný cieľ** (skrátene **DC**) je funkcia **AAPS**, ktorá vám umožní zmeniť [cieľový rozsah **glykémie**](#profile-glucose-targets) pre plánované aktivity. **AAPS** to dosiahne tak, že upraví podávanie inzulínu.

Cieľová glykémia, najmä ak je krátkodobá (trvá menej ako 4 hodiny), nemusí byť *skutočná hodnota*, ktorú očakávate alebo ktorú chcete dosiahnuť. Je to skôr dobrý spôsob, ako povedať **AAPS**, aby bol viac alebo menej agresívny, a pritom udržal vašu glykémiu v rozsahu.

Dočasné ciele môžete nastaviť v týchto hraniciach:

|         | Dočasný cieľ              |
| ------- | ------------------------- |
| Minimum | 4 mmol/l alebo 72 mg/dl   |
| Maximum | 10 mmol/l alebo 180 mg/dl |

**AAPS** má tri vstavané predvoľby **dočasného cieľa**: na cvičenie (**Aktivita**), k jedlu (**Pred jedlom**) a pri predpokladanej hypoglykémii (**Hypoglykémia**). Nájdete ich na obrazovke **Dočasný cieľ** (**Spravovať** → **Dočasný cieľ**), ktorú otvoríte aj jednoduchým ťuknutím na **rámček cieľa** na hlavnej obrazovke.

Pri výbere **dočasného cieľa** v **AAPS** by ste mali mať reálne očakávania o tom, aké výsledky sa dajú dosiahnuť. Či sa podarí dosiahnuť požadovanú cieľovú **glykémiu**, závisí od viacerých faktorov: od spoľahlivosti vašich nastavení **AAPS**, celkovej kontroly **glykémie**, **IOB**, citlivosti na inzulín, inzulínovej rezistencie, náročnosti cvičenia a podobne.

Dosiahnutie požadovanej cieľovej **glykémie** s **dočasným cieľom** môže trvať približne 30 minút alebo aj dlhšie. **AAPS** nemôže dosiahnuť cieľovú **glykémiu** okamžite. Myslite na to pri výbere **dočasného cieľa**.

The sections below summarize the features of **Temp-Target Activity**, **Temp-Target Eating soon** and **Temp-Target Hypo**. Uvedené hodnoty sú predvolené hodnoty z výroby – [každú predvoľbu si môžete upraviť](#TempTargets-change-preset-defaults) podľa svojich potrieb.

### DC – Aktivita

![DC Aktivita](../images/TempTarget2.png)

**Cieľová glykémia (predvolená hodnota, dá sa upraviť)**

AAPS sa bude snažiť dosiahnuť 140 mg/dl alebo 7,8 mmol/l počas 1 h 30 min

**Ďalšie veci, ktoré môžete pri výbere zvážiť**:

Podľa hodnoty **glykémie** **AAPS** „zníži“ podávanie inzulínu, aby dosiahol cieľovú **glykémiu**. Ak cieľová **glykémia** nie je v rozsahu (t. j. je nad cieľovou **glykémiou** zvolenou vo vašom **profile**), **AAPS** môže ponechať bazál zapnutý.

V režime uzavretého okruhu **SMB**:

- *môžu byť* vypnuté (viac nižšie); a/alebo
- bazál sa môže zapnúť, ak má **AAPS** záporný **IOB**, alebo <0.

Môžete zvážiť aj:

- *výber* tohto **DC** 1–2 hodiny pred plánovaným cvičením, aby sa znížil IOB (správny čas pre tento DC je u každého iný); a
- *výber* dočasného profilu (zníženie) na celú dobu plánovanej aktivity, aby sa znížil **IOB**;
- *ensuring* **TT** is timed to be *deactivated* shortly before the exercise, because **IOB** is already reduced and some users experience a rapid rise in **BG** post exercise.

### DC – Pred jedlom

![DC Pred jedlom](../images/TempTarget1.png)

**Cieľová glykémia (predvolená hodnota, dá sa upraviť)**

AAPS sa bude snažiť dosiahnuť 90 mg/dl alebo 5,0 mmol/l počas 45 minút

**Ďalšie veci, ktoré môžete pri výbere zvážiť**:

V režime uzavretého okruhu **SMB**:

- zostanú zapnuté; a/alebo
- bazál sa môže zapnúť aj podľa nastavení vášho **profilu**.

Podľa hodnoty **glykémie** **AAPS** „zvýši“ podávanie inzulínu v rámci vašich nastavení **AAPS**, aby dosiahol požadovanú cieľovú **glykémiu**.

### DC – Hypo

![DC Hypo](../images/TempTarget3.png)

**Cieľová glykémia (predvolená hodnota, dá sa upraviť)**

AAPS sa bude snažiť dosiahnuť 160 mg/dl alebo 8,9 mmol/l počas 1 hodiny

**Ďalšie veci, ktoré môžete pri výbere zvážiť**:

V režime uzavretého okruhu **SMB**:

- *môžu byť* vypnuté (viac nižšie); a/alebo
- bazál sa môže zapnúť, ak má **AAPS** záporný **IOB**, alebo <0.

(TempTargets-manage-v4)=

## Nastavenie a správa dočasných cieľov (Spravovať → Dočasný cieľ)

V **AAPS** v4 spravujete **predvoľby** DC a spúšťate dočasný cieľ na obrazovke **Spravovať** (spodná navigácia) → **Dočasný cieľ** (*„Spravovať a nastavovať dočasné ciele“*).

![Obrazovka Dočasný cieľ – karusel predvolieb, editor a panel akcií](../images/v4/TempTarget/tt_management.png)

Obrazovka má tri časti:

1. **Karusel predvolieb** (hore) – potiahnutím prstom prechádzate predvoľbami DC. Každá karta zobrazuje **názov**, **cieľ** a **trvanie** predvoľby; práve bežiaci DC je zvýraznený.
2. **Editor** (v strede) – **Dočasný cieľ** a **Trvanie**, ktoré sa naozaj použijú, a dátum/čas **Aktivácie**.
3. **Panel akcií** (dole) – tlačidlá **➕ pridať**, **‘️ vymazať** a **▶ aktivovať**.

Keď vyberiete kartu predvoľby, jej **cieľ** a **trvanie** sa načítajú do editora.

```{admonition} Vstavané a vlastné predvoľby :class: note Vstavané predvoľby – **Pred jedlom**, **Aktivita** a **Hypoglykémia** – existujú vždy a **nedajú sa vymazať** (ich hodnoty však môžete zmeniť a uložiť). Všetky predvoľby, ktoré si vytvoríte sami, sú **vlastné** a môžete ich ľubovoľne upravovať alebo vymazať.

    <br />### Aktivácia dočasného cieľa
    
    Potiahnite prstom na požadovanú predvoľbu (jej hodnoty sa načítajú do editora), podľa potreby upravte **cieľ**/**trvanie** v editore a potom ťuknite na **▶ Aktivovať**. Pred spustením sa zobrazí potvrdenie s presným cieľom, trvaním a dôvodom:
    
    ![Potvrdenie aktivácie](../images/TempTarget8.png)
    
    Po potvrdení sa dočasný cieľ spustí hneď (alebo v zvolenom čase **Aktivácie**) a beží počas nastaveného **trvania**.
    
    ```{admonition} Úprava čísel platí len raz – predvoľbu nezmení
    :class: important
    **Cieľ** a **trvanie** v editore sú hodnoty, ktoré **Aktivovať** použije *práve teraz*. Ak ich zmeníte, zmena je **dočasná**: platí len pre túto aktiváciu a **uloženú predvoľbu nezmení**. Môžete tak „upraviť a aktivovať“ jednorazový DC (napríklad dnes aktivovať *Aktivitu* s trochu iným cieľom) bez trvalej zmeny predvoľby.
    

### Uloženie zmien do predvoľby

Ak upravenú hodnotu *naozaj* chcete zachovať, **uložte** ju: keď sa editor líši od vybranej predvoľby, v hornom paneli nástrojov sa zobrazí ikona **Uložiť**. Ťuknutím na ňu sa aktuálny **cieľ** a **trvanie** (a pri vlastných predvoľbách aj názov) uložia späť do vybranej predvoľby. Pri vstavaných predvoľbách sa na paneli akcií zobrazí aj tlačidlo **Obnoviť predvolené** (↺): vráti predvolené hodnoty predvoľby.

![Obrazovka Dočasný cieľ s ikonou Uložiť a tlačidlom Obnoviť predvolené](../images/v4/TempTarget/tt_preset_save_revert.png)

Jednoduché pravidlo teda znie:

- **Aktivovať** → čísla sa použijú **raz** (predvoľba sa nezmení).
- **Uložiť** → čísla sa stanú **novými predvolenými hodnotami** predvoľby.

Ak chcete vstavanú predvoľbu vrátiť do pôvodného stavu, vyberte ju a ťuknite na tlačidlo **↺ Obnoviť** – na paneli akcií sa zobrazí len pri **vstavanej** predvoľbe, ktorej hodnoty sa práve líšia od výrobných, a obnoví pôvodný **cieľ** a **trvanie** tejto predvoľby.

### Pridanie a odstránenie predvolieb

- **➕ Pridať** – vytvorí **novú vlastnú predvoľbu** z aktuálnych hodnôt v editore. Nová karta sa zobrazí v karuseli.
- **‘️ Vymazať** – odstráni vybranú **vlastnú** predvoľbu. Vstavané predvoľby (*Pred jedlom*, *Aktivita*, *Hypoglykémia*) sa nedajú vymazať.

Keď máte aspoň dve **vlastné** predvoľby, môžete zmeniť aj ich poradie v karuseli: ťuknite na ikonu **Usporiadať** (⇅) v hornom paneli, posúvajte kartu v strede pomocou **tlačidiel ◀ / ▶** a potom potvrďte pomocou **✓**. Vstavané predvoľby zostávajú na svojom mieste – presúvať sa dajú len vlastné predvoľby. (Ovládanie vyzerá rovnako ako pri [zmene poradia profilov](ProfileSwitch-ProfilePercentage.md).)

Vaše predvoľby sú súčasťou synchronizovanej konfigurácie, takže sú spoločné pre hlavné zariadenie (master) aj spárovaných klientov.

### Ďalšie spôsoby, ako nastaviť dočasný cieľ

Dočasný cieľ môžete nastaviť aj bez otvorenia tejto obrazovky:

- pomocou **prepínačov DC v dialógu Sacharidy** – pozrite [nižšie](#TempTargets-carbs-dialog),
- pomocou **tlačidla predvoľby na [paneli Rýchleho spustenia](QuickLaunch.md)** – kategória *Predvoľby dočasného cieľa* v *Konfigurácii Rýchleho spustenia* ponúka tlačidlo na jedno ťuknutie pre každú vašu predvoľbu,
- z **hodiniek s Wear OS** (položka ponuky / dlaždica **Dočasný cieľ**),
- zo spárovaného **klienta** – pozrite [Ovládanie Master ↔ Client](../RemoteFeatures/ClientMasterControl.md),
- ako súčasť **[scény](Scenes.md)** (akcia *Dočasný cieľ*), alebo
- pravidlom **Automatizácie** (*Spustiť dočasný cieľ* / *Zastaviť dočasný cieľ*).

* * *

(TempTargets-where-can-i-select-a-temp-target)=

## Kde môžem zvoliť dočasný cieľ?

Najrýchlejšie je ťuknúť na **rámček cieľa** na hlavnej obrazovke (zobrazuje váš aktuálny cieľový rozsah):

![Rámček cieľa na hlavnej obrazovke](../images/TempTarget6.png)

Otvorí sa obrazovka **Dočasný cieľ** opísaná vyššie – potiahnite prstom na predvoľbu a ťuknite na **▶ Aktivovať**. Na rovnakú obrazovku sa dostanete aj cez **Spravovať** → **Dočasný cieľ**.

(TempTargets-carbs-dialog)= Pri zadávaní sacharidov nemusíte obrazovku **Dočasný cieľ** vôbec otvárať: **dialóg Sacharidy** (**Ošetrenia** → **Sacharidy**) má hore prepínače **Spustiť dočasný cieľ Hypo**, **Spustiť dočasný cieľ Pred jedlom** a **Spustiť dočasný cieľ Aktivita**. Keď jeden z nich zapnete, príslušná predvoľba sa aktivuje spolu so záznamom sacharidov:

![Prepínače DC v dialógu Sacharidy](../images/TempTarget5.png)

    {admonition} Automatický DC Hypo
    :class: note
    Ak otvoríte **dialóg Sacharidy**, keď je vaša glykémia pod 72 mg/dl (4 mmol/l), **AAPS** vám vopred zapne prepínač **Spustiť dočasný cieľ Hypo** (okrem prípadu, keď už beží vyšší dočasný cieľ s dlhším zostávajúcim trvaním).

(TempTargets-change-preset-defaults)=

## Kde môžem zmeniť predvolený dočasný cieľ a nastaviť si vlastné hodnoty?

**Cieľ** a **trvanie** každej predvoľby upravujete priamo na obrazovke **Dočasný cieľ** – samostatná položka v nastaveniach na to už neexistuje:

1. Otvorte obrazovku **Dočasný cieľ** (ťuknite na rámček cieľa alebo **Spravovať** → **Dočasný cieľ**).
2. Potiahnite prstom na predvoľbu, ktorú chcete zmeniť.
3. Upravte **Dočasný cieľ** a/alebo **Trvanie** v editore.
4. Ťuknite na ikonu **Uložiť**, ktorá sa zobrazí v hornom paneli nástrojov.

![Úprava predvoľby – ikona Uložiť v paneli nástrojov, Obnoviť na paneli akcií](../images/TempTarget7.png)

Kým sa editor líši od výrobných hodnôt vstavanej predvoľby, na paneli akcií sa zobrazí aj tlačidlo **↺ Obnoviť** – ťuknutím naň obnovíte pôvodný cieľ a trvanie predvoľby.

## Ako zruším dočasný cieľ?

Kým beží dočasný cieľ, rámček cieľa na hlavnej obrazovke zobrazuje cieľ a zostávajúci čas. Ťuknite naň – na obrazovke **Dočasný cieľ** je bežiaca predvoľba zvýraznená ako **AKTÍVNY** a na konci spodného panela nástrojov, hneď vľavo od tlačidla **▶ Aktivovať**, sa zobrazí červené tlačidlo **✗ Zrušiť**. Ťuknite naň a potvrďte:

![Zrušenie bežiaceho dočasného cieľa](../images/TempTarget9.png)

Bežiaci dočasný cieľ môžete zastaviť aj z **hodiniek s Wear OS**, zo spárovaného **klienta** alebo pravidlom **Automatizácie** (*Zastaviť dočasný cieľ*).

(TempTargets-hypo-temp-target)=

## Dočasný cieľ Hypoglykémia

**Dočasný cieľ Hypoglykémia** umožňuje **AAPS** znížiť podávanie inzulínu, a tak zabrániť nízkej glykémii. Ak predpokladáte, že vaša **glykémia** klesne: zvyčajne to **AAPS** zvládne sám, ale veľa závisí od toho, ako spoľahlivé sú vaše nastavenia **AAPS**. **Dočasný cieľ Hypoglykémia** vám umožní predbehnúť predpokladanú hypoglykémiu a povedať **AAPS**, aby znížil podávanie inzulínu.

Niekedy po zjedení sacharidov na liečbu hypoglykémie môže **glykémia** rýchlo stúpnuť a **AAPS** bude rýchly rast **glykémie** korigovať pomocou **SMB**.

Niektorí používatelia nechcú, aby sa počas **dočasného cieľa Hypoglykémia** podávali **SMB**. Dosiahnete to vypnutím možnosti *„Povoliť SMB s vysokými dočasnými cieľmi“* v **Nastavenia** → **OpenAPS SMB** (pozrite nižšie):

- Advanced, objective 9: the user can enable *“High temp target raises sensitivity”* for **Temp-Targets** of 100 mg/dL (5.6 mmol/L) or higher in OpenAPS SMB, **AAPS** will be more sensitive.

- Advanced, objective 9: the user can deactivate *“Enable SMB with high temp target”*, so that even if **AAPS** has COB > 0, “Enable SMB with low temp target” or “Enable SMB always” enabled and OpenAPS SMB active, **AAPS** will not give SMBs while high temp targets are active.

Poznámka: ak otvoríte **dialóg Sacharidy**, keď je vaša glykémia nižšia ako 72 mg/dl alebo 4 mmol/l, **AAPS** automaticky vopred zapne prepínač **Spustiť dočasný cieľ Hypo**.

(TempTargets-activity-temp-target)=

## Dočasný cieľ Aktivita

Pred cvičením a počas neho môžete potrebovať vyšší cieľ, aby ste počas aktivity predišli hypoglykémii.

Aby bol **dočasný cieľ Aktivita** jednoduchší, môžete si nastaviť predvolený **dočasný cieľ Aktivita**, ktorý zníži podávanie inzulínu, a tým zvýši **glykémiu**, spomalí pokles **glykémie** a pomôže predísť hypoglykémii.

Noví používatelia **AAPS** možno budú musieť s predvolenými nastaveniami **dočasného cieľa Aktivita** experimentovať a prispôsobiť si ich, aby im táto funkcia fungovala čo najlepšie. Každý človek je iný, keď ide o dosiahnutie stabilnej glykémie počas cvičenia. Pozrite si aj [časť o športe v Najčastejších otázkach používateľov APS](#FAQ-sports).

Some users also prefer to activate a **Profile switch** (being a Profile decrease < 100% to reduce insulin delivery by **AAPS**) before and while **Temp-Target Activity** is on. Obe veci môžete spustiť naraz: ťuknite na názov profilu na hlavnej obrazovke, ťuknite na okrúhle tlačidlo **▶**, nastavte **Percento** pod 100 % a **Trvanie** a potom zapnite **Dočasný cieľ / Aktivita**. Pozrite [Zmena percenta profilu](#ProfileSwitch-change-percentage).

Pokročilé, cieľ 9: v OpenAPS **SMB** môžete zapnúť *„Vysoký dočasný cieľ zvyšuje citlivosť“* pre **dočasné ciele** 100 mg/dl (5,6 mmol/l) alebo vyššie. Cieľ 99 mg/dl (5,5 mmol/l) je normálny cieľ, nie je ani vysoký, ani nízky. **AAPS** je potom citlivejší.

Ak je navyše vypnuté *„Povoliť SMB s vysokými dočasnými cieľmi“*, **AAPS** nepodá **SMB**, ani keď je COB > 0, je zapnuté *„Povoliť SMB s nízkymi dočasnými cieľmi“* alebo *„Vždy povoliť SMB“* a OpenAPS **SMB** je aktívny.

(TempTargets-eating-soon-temp-target)=

## Dočasný cieľ Pred jedlom

**Temp-Target Eating soon** can help accomplish a gentle drive down of **BG** and ensure there is ample **IOB** before eating.

This can be an important tool for those users who do not pre bolus, however the efficacy of **Temp-Target Eating soon** will depend on a number of factors including: the user’s settings, if they eat a low carb diet and whether they are using a fast acting insulin (like Fiasp or Lyumjev) in order to eliminate the need to pre bolus. Ordinarily, until users are experienced in **AAPS** they should expect to pre bolus when using **Temp-Target Eating soon** and this is particularly so, if eating a high carb diet.

Viac o „režime Pred jedlom“ (eating soon mode) si môžete prečítať v článku [„How to do ‚eating soon‘ mode“](https://diyps.org/2015/03/26/how-to-do-eating-soon-mode-diyps-lessons-learned/) (v angličtine) alebo [tu](https://diyps.org/tag/eating-soon-mode/).

Pokročilé, [cieľ 9](#objectives-objective9): Ak používate OpenAPS SMB a máte zapnutú možnosť *„Nízky dočasný cieľ znižuje citlivosť“*, **AAPS** pracuje o niečo agresívnejšie. Táto možnosť vyžaduje, aby bol **dočasný cieľ** 98 mg/dl (5,4 mmol/l) alebo nižší.

## Ako vypnem SMB počas dočasných cieľov?

Urobíte to tak, že otvoríte **Nastavenia** → **OpenAPS SMB** a vypnete *„Povoliť SMB s vysokými dočasnými cieľmi“*.

![Nastavenie Povoliť SMB s vysokými dočasnými cieľmi](../images/TempTargetSMB.png)

Tak zabezpečíte, že **AAPS** nepodá **SMB**, ani keď je COB > 0, je zapnuté *„Povoliť SMB s nízkymi dočasnými cieľmi“* alebo *„Vždy povoliť SMB“* a OpenAPS SMB je aktívny.