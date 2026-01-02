# Príprava na štart s AAPS

Vitajte. Táto dokumentácia má slúžiť ako pomôcka pre používateľov, ktorí sa pripravujú na nastavenie a začatie používania systému umelého pankreasu pre systém Android (**AAPS**).

## Ako sa vyznať v dokumentácii

**Index** a vysvetlenie štruktúry dokumentácie nájdete [tu](../index.md), môžete sa k tomu dostať aj kliknutím na symbol **AAPS** v ľavom hornom rohu dokumentácie. Nájdete tam zhrnutie, na čo slúžia rôzne časti dokumentácie. Na navigáciu v dokumentácii môžete použiť aj nadpisy naľavo od tejto stránky. Nakoniec je tu funkcia vyhľadávania priamo pod symbolom **AAPS**.

Naším cieľom je uľahčiť určenie možností aj obmedzení systému **AAPS**. Môže byť nepríjemné keď po naštudovaní návodu zistíte, že vaša pumpa alebo senzor niesú kompatibilné s **AAPS** alebo že systém vie niečo iné než ste čakali.

Mnohé podrobnosti týkajúce sa skúseností v dokumentácii k **AAPS** dávajú väčší zmysel, keď **AAPS** skutočne používate v reálnom čase. Rovnako ako je ťažké naučiť sa šport len ​​čítaním pravidiel, vyžaduje si to kombináciu učenia sa základov pravidiel pre bezpečné fungovanie **AAPS** a následného učenia sa ako tieto pravidlá čo najlepšie uplatňovať keď začínate používať **AAPS**.

(preparing-safety-first)=

## Safety First
„S veľkou mocou prichádza aj veľká zodpovednosť…“

### Technická bezpečnosť
Systém **AAPS** má rozsiahlu sadu bezpečnostných prvkov. Tieto obmedzenia sa postupne odstraňujú prostredníctvom postupného plnenia série [Cieľov](../SettingUpAaps/CompletingTheObjectives.md), ktoré zahŕňajú testovanie špecifických parametrov a odpovedanie na otázky s výberom odpovede. Funkcie **AAPS** sa odomknú po úspešnom splnení cieľov. Tento proces umožňuje používateľovi bezpečne migrovať po etapách z otvorenej slučky do uzavretej slučky a zároveň sa učiť o rôznych funkciách systému **AAPS**.

[Ciele](../SettingUpAaps/CompletingTheObjectives.md) boli navrhnuté tak, aby sa dosiahol čo najlepší úvod do **AAPS**, berúc do úvahy typické chyby ktoré vývojári **AAPS** pozorovali u nových používateľov. Chyby sa môžu stať, pretože začiatočník je neskúsený a príliš dychtivý začať s **AAPS** alebo prehliadol kľúčové body. Cieľom [Cieľov](../SettingUpAaps/CompletingTheObjectives.md) je minimalizovať tieto problémy.

### Bezpečnosť pri používaní zdravotníckych zariadení a inzulínovej techniky
```{admonition} Avoid permanent and painful damage to your eyes and nerves
:class: danger
V súvislosti s rýchlym zlepšením kontroly hladiny glukózy v krvi a znížením HbA1c sa odporúča opatrnosť 
```

Dôležitým bezpečnostným aspektom je, že **rýchle zníženie HbA1c a zlepšená kontrola hladiny glukózy v krvi u osôb, ktoré majú dlhší čas zvýšené hladiny glukózy, môže spôsobiť trvalé poškodenie**. Mnoho ľudí s cukrovkou si to neuvedomuje a nie všetci lekári o tomto probléme informujú svojich pacientov.

Toto poškodenie môže zahŕňať **stratu zraku a trvalú neuropatiu (bolesť)**. Tomuto poškodeniu sa dá vyhnúť pomalším znižovaním priemerných hladín glukózy. Ak máte momentálne zvýšený HbA1c a prechádzate na **AAPS** (alebo akýkoľvek iný systém s uzavretou slučkou), _prosím_ pred začatím preberte toto potenciálne riziko so svojím lekárom a dohodnite si s ním časový harmonogram s postupným znižovaním bezpečných cieľových hodnôt glukózy. V **AAPS** si môžete spočiatku jednoducho nastaviť vyššie cieľové hodnoty glukózy (v súčasnosti je najvyššia cieľová hodnota, ktorú si môžete vybrať, 10,6 mmol/l, ale v prípade potreby si môžete udržiavať aj zámerne slabý profil) a potom cieľovú hodnotu v priebehu mesiacov znižovať.

#### Ako rýchlo si môžem znížiť HbA1c bez rizika trvalého poškodenia?

Jedna retrospektívna [štúdia](https://pubmed.ncbi.nlm.nih.gov/1464975/) so 76 pacientmi uviedla, že riziko progresie retinopatie sa zvýšilo 1,6-krát, 2,4-krát a 3,8-krát, ak Hba1C klesol o 1 %, 2 % alebo 3 % počas 6 mesiacov. Navrhli, aby **„pokles hodnoty HbA1c počas 6-mesačného obdobia bol obmedzený na menej ako 2 %, aby sa zabránilo progresii retinopatie... Príliš rýchly pokles na začiatku kontroly glykémie by mohol spôsobiť závažné alebo prechodné zhoršenie progresie retinopatie.“**

N.B. Ak používate iné jednotky HbA1c (mmol/mol namiesto %), kliknite [sem](https://www.diabetes.co.uk/hba1c-units-converter.html) pre výpočet HbA1c.

V ďalšom retrospektívnom [hodnotení](https://academic.oup.com/brain/article/138/1/43/337923) 954 pacientov výskumníci zistili, že:

**„Pri poklese HbA1c o 2 – 3 % počas 3 mesiacov existovalo 20 % riziko vzniku neuropatie vyvolanej liečbou pri diabete, pri poklese HbA1c o > 4 % počas 3 mesiacov riziko vzniku neuropatie vyvolanej liečbou pri diabete prekročilo 80 %“.**

V [komentári](https://academic.oup.com/brain/article/138/1/2/340563) k tejto práci sa zhoda, že na predchádzanie komplikáciám **cieľom by malo byť zníženie A1c o < 2 % počas 3 mesiacov.** Ďalšie recenzie na túto tému si môžete prečítať [tu](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6587545/pdf/DOM-21-454.pdf) a [tu](https://www.mdpi.com/1999-4923/15/7/1791).

Všeobecne je známe, že _novo_ diagnostikovaní diabetici 1. typu (ktorí majú často pri diagnóze veľmi vysoký HbA1c pred začatím inzulínovej liečby) sa zdajú byť schopní rýchlo znížiť svoj HbA1c ihneď po diagnóze bez toho, aby sa stretli s týmito rizikami v rovnakej miere, pretože nemali zvýšené hladiny glukózy v krvi počas takéhoto dlhodobého obdobia. Je to však stále otázka, ktorú by ste mali prediskutovať so svojím lekárom.

(PreparingForAaps-no-sglt-2-inhibitors)=
### Žiadne inhibítory SGLT-2

```{admonition} NO SGLT-2 inhibitors
:class: danger
Inhibítory SGLT-2, nazývané aj gliflozíny, inhibujú reabsorpciu glukózy v obličkách. Gliflozíny výrazne znižujú hladinu cukru v krvi, a preto ich NESMIETE užívať počas používania systému s uzavretou slučkou, ako je AAPS! Hrozí značné riziko ketoacidózy a/alebo hypoglykémie! Kombinácia tohto lieku so systémom, ktorý znižuje bazálne dávky s cieľom zvýšiť glykémiu, je obzvlášť nebezpečná. 

Stručne povedané:
- **Príklad 1: riziko hypoglykémie**
> Počas obeda použijete **AAPS** na podanie bolusu na základe konzumácie 45 g glukózy. Problém je v tom, že AAPS si to neuvedomuje, ale inhibítory spôsobujú, že telo vylučuje časť sacharidov, čo má za následok, že vaše telo má priveľa inzulínu v porovnaní s absorbovanými sacharidmi, čo vedie k hypoglykémii.

- **Príklad 2: riziko ketoacidózy**
> Inhibítory eliminujú časť sacharidov v pozadí, čo spôsobuje zníženie glykémie. **AAPS** automaticky dá pumpe pokyn na zníženie príjmu inzulínu vrátane bazálneho inzulínu. Postupom času to môže viesť k tomu, že vaša glykémia zostane pod cieľovou hodnotou až do bodu, kedy telo nemá dostatok inzulínu na vstrebávanie sacharidov, čo vedie ku ketoacidóze. Ketoacidóza sa u diabetikov 1. typu zvyčajne objaví vtedy keď prestane fungovať pumpa, čo spustí alarm na mobile a prejaví sa to aj vysokou glykémiou. Nebezpečenstvo gliflozínov však spočíva v tom, že sa nebudú spúšťať žiadne výstrahy AAPS, pretože pumpa zostáva funkčná a glykémia potenciálne zostáva v cieľovom rozmedzí.  

Medzi bežné obchodné názvy inhibítorov SGLT-2 patria: Invokana, Farxiga, Jardiance, Glyxambi, Synjardy, Steglatro a Xigduo XR a ďalšie.
```


### Kľúčové princípy slučky s AAPS

Skôr než začnete používať **AAPS** mali by ste porozumieť základom toho ako má fungovať slučka. Toto dosiahnete investovaním vášho času do čítania dokumentácie **AAPS** a splnením cieľov, ktorých cieľom je poskytnúť vám solídny základ pre bezpečné a efektívne používanie **AAPS**. Obsah dokumentácie **AAPS** sa môže na prvý pohľad zdať ohromujúci, ale buďte trpezliví a dôverujte procesu – so správnym prístupom to dosiahnete!

Rýchlosť postupu bude závisieť od jednotlivca, ale majte na pamäti, že splnenie všetkých cieľov zvyčajne trvá 6 – 9 týždňov. Mnoho ľudí začína so zostavením, inštaláciou a nastavovaním **AAPS** dávno predtým, ako ho začnú používať. Na pomoc s týmto má systém „virtuálnu pumpu“, ktorú je možné použiť počas plnenia počiatočných cieľov, aby ste sa mohli oboznámiť s **AAPS** bez toho, aby ste ho skutočne používali na podávanie inzulínu. Detailná časová os je uvedená nižšie. Uvedomte si, že cieľom 8 v **AAPS** je uzavretá slučka, neskoršie ciele pridávajú ďalšie funkcie, ako sú **SMS príkazy** a **automatizácia**, ktoré sú užitočné pre niektorých používateľov, ale nie sú nevyhnutné pre základnú funkciu **AAPS**.

Úspech s **AAPS</0 si vyžaduje proaktívny prístup, ochotu reflektovať údaje o glykémii a flexibilitu pri vykonávaní potrebných úprav **AAPS** s cieľom zlepšiť vaše výsledky. Rovnako ako je takmer nemožné naučiť sa hrať šport len ​​čítaním pravidiel, to isté možno povedať o **AAPS**.</p>

#### Pri nastavení a prevádzke systému počítajte s oneskoreniami a menšími problémami

V úvodných fázach používania **AAPS** sa môžu vyskytnúť ťažkosti s efektívnou komunikáciou všetkých komponentov slučky medzi sebou (a potenciálnymi sledovateľmi) a s dolaďovaním nastavení. Niektoré chyby sa nedajú vyriešiť, kým sa **AAPS** nepoužíva v bežnom živote, ale veľkú pomoc nájdete aj v skupine na Facebooku a na Discorde. Podľa toho si naplánujte a vyberte „vhodný“ čas, napríklad víkend (t. j. nie neskoro v noci, keď ste unavení, ani pred dôležitým stretnutím či cestovaním), na riešenie problémov.

#### Technologická kompatibilita

Systém **AAPS** je kompatibilný iba s určitými typmi inzulínových púmp, systémov CGM a telefónov a niektoré technológie nemusia byť v rôznych krajinách dostupné. Aby ste sa vyhli sklamaniu alebo frustrácii, prečítajte si časti o [CGM](../Getting-Started/CompatiblesCgms.md), [pumpe](../Getting-Started/CompatiblePumps.md) a [telefóne](../Getting-Started/Phones.md).

#### Čas potrebný k zostaveniu aplikácie a postup k úplnej slučke

Čas potrebný na vytvorenie aplikácie **AAPS** závisí od vašej úrovne odborných znalostí a technických schopností. Pre neskúsených používateľov môže zostavenie **AAPS** trvať zvyčajne pol dňa alebo celý deň (s pomocou komunity). Proces sa pri novších verziách **AAPS** výrazne zrýchli, keď budete skúsenejší.

Na uľahčenie procesu vytvorenia aplikácie existujú samostatné sekcie:

- Zoznam otázok a odpovedí na časté chyby, ktoré sa pravdepodobne vyskytnú v časti [FAQs (Sekcia](../UsefulLinks/FAQ.md) K);

- [Ako nainštalovať AAPS](../SettingUpAaps/BuildingAaps.md)? (Sekcia D), ktorá obsahuje podsekciu [Riešenie problémov](../GettingHelp/GeneralTroubleshooting.md).

Ako dlho trvá dosiahnutie uzavretej slučky, závisí od jednotlivca, ale približný časový harmonogram pre dosiahnutie plnej slučky s AAPS nájdete ([tu](#preparing-how-long-will-it-take))


#### Keystore a konfigurácia exportu nastavených hodnôt

„keystore“ (súbor .jks) je súbor zašifrovaný heslom, ktorý je jedinečný pre vašu vlastnú kópiu **AAPS**. Váš telefón ho používa na zabezpečenie toho, aby nikto iný nemohol aktualizovať vašu vlastnú kópiu bez úložiska kľúčov. Stručne povedané, ako súčasť zostavenia **AAPS** by ste mali:

1.  Uložiť si keystore súbor (súbor .jks používaný na podpisovanie aplikácie) na bezpečné miesto;

2.  Poznačte si heslo k tomuto keystore súboru.


Vďaka tomu budete môcť použiť presne ten istý súbor vždy, keď sa vytvorí aktualizovaná verzia **AAPS**. V priemere sú potrebné 2 aktualizácie **AAPS** ročne.

Okrem toho **AAPS** poskytuje možnosť [exportovať všetky vaše konfiguračné nastavenia](../Maintenance/ExportImportSettings.md). Vďaka tomu môžete bezpečne obnoviť systém pri zmene telefónu a aktualizovať/preinštalovať aplikáciu. 

#### Troubleshooting

Ak si niečím nie ste istí, neváhajte sa obrátiť na komunitu AAPS – hlúpe otázky neexistujú! Všetci používatelia beh ohľadu na úroveň skúseností sa môžu spýtať na čokoľvek. Vďaka veľkému množstvu používateľov **AAPS** sú odpovede na vaše otázky pomerne rýchle.

##### [spýtajte sa v skupine AAPS na Facebooku](https://www.facebook.com/groups/AndroidAPSUsers/)

##### [spýtať sa môžete na Discord kanáli AAPS](https://discord.gg/4fQUWHZ4Mw)





#### <0>Kde získať pomoc</0>?

Táto časť má poskytnúť novým používateľom odkazy na zdroje, aby mohli získať pomoc vrátane prístupu ku komunite zloženej z nových aj skúsených používateľov, ktorí vám pomôžu s otázkami a riešením problémov, ktoré sa s AAPS spájajú.

#### [Section For Clinicians](../UsefulLinks/ClinicianGuideToAaps.md)

Toto je [sekcia určená špeciálne pre lekárov](../UsefulLinks/ClinicianGuideToAaps.md), ktorí sa chcú dozvedieť viac o AAPS a technológii umelého pankreasu. V úvode nájdete aj spôsob, [ako komunikovať s vaším lekárom](#introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team).

## Čo budeme zostavovať a inštalovať?

Táto schéma poskytuje prehľad kľúčových komponentov (hardvéru aj softvéru) systému **AAPS**:

![preparing_overview](../images/preparing_images/AAPS_preparing_overview_01.png)


Okrem troch základných hardvérových komponentov (telefón, pumpa, glukózový senzor) potrebujeme aj: 1) Aplikáciu **AAPS** 2) Reportovací server a 3) Aplikáciu na kontinuálne monitorovanie glukózy (CGM)

### 1) Aplikácia pre android telefón: **AAPS**

**AAPS** je aplikácia, ktorá beží na smartfónoch a zariadeniach s Androidom. Aplikáciu **AAPS** (súbor apk) si vytvoríte sami pomocou podrobného návodu. Stiahnutím zdrojového kódu **AAPS** z GitHubu, nainštalovaním potrebných programov (Android Studio, GitHub desktop) do počítača a vytvorením vlastnej kópie aplikácie **AAPS**. Potom si prenesiete aplikáciu **AAPS** do smartfónu (e-mailom, káblom USB _atď._) a nainštalujete ju.

### 2) Reportovací server: NightScout (alebo Tidepool)

Aby ste mohli plne využiť výhody **AAPS**, musíte si nastaviť server Nightscout. Môžete to [urobiť sami](https://nightscout.github.io/nightscout/new_user/#free-diy) alebo zaplatiť malý poplatok za [spravovanú službu Nightscout](https://nightscout.github.io/#nightscout-as-a-service), ktorá vám bude nastavená. Nightscout sa používa na zhromažďovanie údajov z **AAPS** a vie vytvárať detailné prehľady, ktoré prepájajú dáta zo senzora a vzory podávania inzulínu. Opatrovatelia môžu tiež používať Nightscout na diaľkovú komunikáciu s aplikáciou **AAPS** a dohliadať na liečbu diabetu svojho dieťaťa. Medzi takéto funkcie patrí monitorovanie hladín glukózy a inzulínu v reálnom čase, diaľkové podávanie inzulínu (prostredníctvom SMS) a oznámenia o jedle. Hodnotiť cukrovku len podľa CGM dát bez súvisu s pumpou je ako viesť auto naslepo a nechať si cestu opisovať spolujazdcom.  Ako alternatíva k NightScout je k dispozícii Tidepool pre AAPS verzie 3.2 a novšie.

### 3) Aplikácia senzora CGM

V závislosti od vášho glukózového senzora/CGM budete potrebovať kompatibilnú aplikáciu na prijímanie hodnôt glukózy a ich odosielanie do **AAPS**. Nižšie sú zobrazené rôzne možnosti a ďalšie informácie nájdete v sekcii [kompatibilných CGM](../Getting-Started/CompatiblesCgms.md):

![dexcom_options](../images/preparing_images/AAPS_connectivity_Dex_02.png) ![libre_options](../images/preparing_images/AAPSconnectivity_libre.png) ![eversense_options](../images/preparing_images/AAPS_connectivity_eversense.png)

### Údržba systému **AAPS**

Aplikácie **Nightscout** aj **AAPS** je potrebné aktualizovať približne raz ročne, pretože sa vydávajú vylepšené verzie. V niektorých prípadoch sa aktualizácia môže oneskoriť, v iných sa dôrazne odporúča alebo sa považuje za nevyhnutnú z bezpečnostných dôvodov. O týchto aktualizáciách budeme informovať v skupinách na Facebooku a na serveroch Discord. O aké zmeny sa jedná bude napísane v poznámkach. Keď bude vydaná aktualizácia určite nebudete jediní kto bude mať veľa otázok ale komunita aj návody vám pomôžu to zvládnuť.

(preparing-how-long-will-it-take)=
## Ako dlho bude trvať nastavenie všetkého?

Ako už bolo spomenuté, používanie **AAPS** je skôr „cesta“, ktorá si vyžaduje investíciu vášho osobného času. Nie je to jednorazové nastavenie. Aktuálne odhady na zostavenie systému **AAPS**, inštaláciu a konfiguráciu softvéru **AAPS** a **CGM** a prechod z otvorenej slučky na hybridnú uzavretú slučku s systémom **AAPS** sú celkovo približne 4 až 6 mesiacov. Preto sa odporúča, aby ste vytvorili aplikáciu **AAPS** čo najskôr a splnili počiatočné ciele, a to aj v prípade, že stále používate iný systém na podávanie inzulínu (virtuálnu pumpu môžete použiť až do cieľa 5).

Niektoré ciele vyžadujú určitý počet dní, aby ste sa uistili, že pochopíte novú funkcionalitu. Túto čakaciu dobu nie je možné obísť, tieto minimálne časy boli stanovené pre vašu vlastnú bezpečnosť.

Tu je približný časový rámec:

| Úlohy                                                                          |           Približný čas           |
| ------------------------------------------------------------------------------ |:---------------------------------:|
| Úvodné čítanie dokumentácie                                                    |             1 - 2 dni             |
| Inštalácia/konfigurácia počítača pre zostavenie                                |            2 - 8 hodín            |
| Nastvenie reportovacieho servera                                               |             1 hodina              |
| Inštalácia aplikácie CGM (xDrip+, BYODA, …)                                    |             1 hodina              |
| Úvodná konfigurácia CGM → xDrip+ → APPS                                        |             1 hodina              |
| Konfigurácia AAPS → prvé nastavenie pumpy                                      |             1 hodina              |
| Konfigurácia AAPS → Nightscout/Tidepool (iba reportovanie)                     |             1 hodina              |
| Voliteľné: Konfigurácia NightScout ↔ **AAPS** a NS Followers                   |             1 hodina              |
| Cieľ 1: Nastavenie vizualizácie a monitorovania                                |             1 hodina              |
| Cieľ 2: Naučiť sa ovládať AAPS                                                 |             2 hodiny              |
| Cieľ 3: Overte si svoje vedomosti                                              |             Až 14 dní             |
| Cieľ 4: Začnite s otvoreným okruhom                                            |           Minimum 7 dní           |
| Cieľ 5: Pochopenie vášho otvoreného slučky                                     |               7 dní               |
| Cieľ 6: Začiatok s uzavretou slučkou (Pozastavenie pri nízkej hladine glukózy) |   Minimálne 5, maximálne 14 dní   |
| Cieľ 7: Ladenie uzavretej slučky                                               | Minimálne 1 deň, maximálne 7 dní  |
| Cieľ 8: Úprava bazálnych dávok a pomerov, povolenie funkcie Autosens           | Minimálne 7 dní, maximálne 14 dní |
| Cieľ 9: Povolenie super mikrobolusu (SMB)                                      |         Minimálne 28 dní          |
| Cieľ 10: Automatizácia                                                         |         Minimálne 28 dní          |
| Cieľ 11: Dynamický ISF                                                         |         Minimálne 28 dní          |

Aj keď budete fungovať plne na **AAPS**, budete musieť pravidelne dolaďovať nastavenia, aby ste zlepšili celkovú liečbu diabetu.

## Requirements

### Lekárske úvahy

Okrem lekárskych upozornení v [časti bezpečnosť](#preparing-safety-first) sú uvedené aj rôzne parametre v závislosti od toho, aký inzulín v pumpe používate.

#### Voľba inzulínu

Výpočty **AAPS** sú založené na koncentráciách inzulínu 100 U/ml (rovnako ako štandard pumpy). Podporované sú nasledujúce typy inzulínových profilov:

- Rýchlo pôsobiaci Oref: Humalog/NovoRapid/NovoLog
- Ultrarýchly ORef: Fiasp
- Lyumjev:

Len pre experimentálne použitie/pokročilých používateľov:
- Free-Peak Oref: Umožňuje definovať vrchol aktivity inzulínu


### Technicky

Cieľom tejto dokumentácie je znížiť požadovanú technickú odbornosť na absolútne minimum. Na vytvorenie aplikácie **AAPS** v prostredí Android Studio budete potrebovať počítač. Budete si musieť zriadiť server v cloude, nastaviť viacero android aplikácií a mať dobrý prehľad o riadení diabetu. To sa dá dosiahnuť postupným postupom, trpezlivosťou a pomocou komunity **AAPS**. Ak už viete pohybovať na internete, spravovať si vlastné e-maily v Gmaile a udržiavať si počítač aktualizovaný, potom je vytvorenie **AAPS** jednoduchšou úlohou. Času máte dostatok.

### Smartfóny

#### Verzie AAPS a Androidu

The current version of **AAPS** (3.4) requires an Android smartphone with Google **Android 12.0 or above**. If you are considering buying a new phone, (as of January 2026), Android 16 is preferred.<br/> Users are strongly encouraged to keep their build of **AAPS** up to date for safety reasons. However, for users unable to use a device with Android 12.0 or newer, earlier versions of **AAPS** compatible for older Android versions, remain available, see: [Release notes](#maintenance-android-version-aaps-version).

#### Výber modelu smartfónu
Presný model, ktorý si kúpite, závisí od požadovaných funkcií. Odporúčania a spätnú väzbu od používateľov týkajúce sa funkčných nastavení nájdete na [stránke Telefóny](../Getting-Started/Phones.md).

Používateľom sa odporúča, aby si vo svojich telefónoch udržiavali aktuálnu verziu systému Android vrátane bezpečnostných parametrov. Ak ste však s **AAPS** nováčikom alebo nie ste technickým expertom, možno budete chcieť aktualizáciu telefónu odložiť, kým tak neurobia iní a nepotvrdia, že je to bezpečné, na našich fórach.

```{admonition} delaying Samsung phones updates
:class: warning
Spoločnosť Samsung je známa tým ze vnucuje aktualizácie svojich telefónov, ktoré potom spôsobujú problémy s pripojením Bluetooth. To disable these forced updates you need to switch the phone to "developer mode" by:
 go to settings and about then software information, then tap build number until it confirms you have unlocked developer mode. Vrátite sa do hlavnej ponuky nastavení a mali by ste vidieť novú položku ponuky možností pre vývojárov. Otvorte možnosti pre vývojárov a posúvaním vyhľadajte automatickú aktualizáciu systému a vypnite ju
```

```{admonition} Google Play Protect potential Issue
:class: warning
Existuje niekoľko hlásení o tom, že **AAPS** je každé ráno svojvoľne vypínaná službou Google Play Protect. Ak sa to stane, budete musieť prejsť do možností služby Google Play a vypnúť funkciu „Google Play Protect“. Nie sú tým postihnuté všetky modely telefónov ani všetky verzie systému Android..
```

