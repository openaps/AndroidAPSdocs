# Príprava na štart s AAPS

Vitajte. Táto dokumentácia má pomôcť používateľom, ktorí sa pripravujú na nastavenie a používanie systému Android Artificial Pancreas System (**AAPS**).

## Ako sa vyznať v dokumentácii

**Index** a vysvetlenie štruktúry dokumentácie nájdete [tu](../index.md), môžete sa k tomu dostať aj kliknutím na symbol **AAPS** v ľavom hornom rohu dokumentácie. Nájdete tam zhrnutie, na čo slúžia rôzne časti dokumentácie. Na navigáciu v dokumentácii môžete použiť aj nadpisy naľavo od tejto stránky. Nakoniec je tu funkcia vyhľadávania priamo pod symbolom **AAPS**.

Naším cieľom je uľahčiť určenie možností aj obmedzení systému **AAPS**. Môže byť sklamaním, keď po čase strávenom čítaním dokumentácie zistíte, že vaša inzulínová pumpa alebo CGM nie sú kompatibilné, alebo že **AAPS** ponúka iné funkcie, než ste dúfali.

Mnohé podrobnosti týkajúce sa skúseností v dokumentácii k **AAPS** dávajú väčší zmysel, keď **AAPS** skutočne používate v reálnom čase. Rovnako ako je ťažké naučiť sa šport len čítaním pravidiel, treba sa najprv naučiť základné pravidlá pre bezpečné používanie **AAPS** a potom sa učiť, ako ich čo najlepšie uplatňovať, keď začnete **AAPS** používať.

(preparing-safety-first)=

## Safety First
„S veľkou mocou prichádza aj veľká zodpovednosť…“

### Technická bezpečnosť
Systém **AAPS** má rozsiahlu sadu bezpečnostných prvkov. Tieto obmedzenia sa postupne odstraňujú prostredníctvom postupného plnenia série [Cieľov](../SettingUpAaps/CompletingTheObjectives.md), ktoré zahŕňajú testovanie špecifických parametrov a odpovedanie na otázky s výberom odpovede. Funkcie **AAPS** sa odomknú po úspešnom splnení cieľov. Tento proces umožňuje používateľovi bezpečne a postupne prejsť z otvoreného okruhu na uzavretý okruh a zároveň spoznať rôzne funkcie systému **AAPS**.

[Ciele](../SettingUpAaps/CompletingTheObjectives.md) sú navrhnuté tak, aby vás s **AAPS** zoznámili čo najlepšie. Berú do úvahy typické chyby a všeobecné trendy, ktoré vývojári **AAPS** pozorovali u nových používateľov. Chyby sa môžu stať, pretože začiatočník je neskúsený a príliš dychtivý začať s **AAPS** alebo prehliadol kľúčové body. [Ciele](../SettingUpAaps/CompletingTheObjectives.md) majú tieto problémy čo najviac obmedziť.

### Zdravotná bezpečnosť
```{admonition} Avoid permanent and painful damage to your eyes and nerves
:class: danger
V súvislosti s rýchlym zlepšením kontroly hladiny glukózy v krvi a znížením HbA1c sa odporúča opatrnosť 
```

Dôležitým bezpečnostným aspektom je, že **rýchle zníženie HbA1c a zlepšená kontrola hladiny glukózy v krvi u osôb, ktoré majú dlhší čas zvýšené hladiny glukózy, môže spôsobiť trvalé poškodenie**. Mnohí ľudia s diabetom o tom nevedia a nie všetci lekári na to svojich pacientov upozornia.

Toto poškodenie môže zahŕňať **stratu zraku a trvalú neuropatiu (bolesť)**. Tomuto poškodeniu sa dá vyhnúť pomalším znižovaním priemerných hladín glukózy. Ak máte momentálne zvýšený HbA1c a prechádzate na **AAPS** (alebo akýkoľvek iný systém s uzavretým okruhom), _prosím_ preberte toto možné riziko so svojím lekárskym tímom ešte pred začatím a dohodnite sa s ním na časovom pláne, v ktorom budete cieľovú glykémiu znižovať postupne a bezpečne. Na začiatku môžete v **AAPS** ľahko nastaviť vyššiu cieľovú glykémiu (najvyšší cieľ, ktorý teraz môžete zvoliť, je 11,1 mmol/l, ale v prípade potreby môžete aj zámerne používať slabší profil) a potom cieľ v priebehu mesiacov postupne znižovať.

#### Ako rýchlo si môžem znížiť HbA1c bez rizika trvalého poškodenia?

Jedna retrospektívna [štúdia](https://pubmed.ncbi.nlm.nih.gov/1464975/) so 76 pacientmi uviedla, že riziko progresie retinopatie sa zvýšilo 1,6-krát, 2,4-krát a 3,8-krát, ak Hba1C klesol o 1 %, 2 % alebo 3 % počas 6 mesiacov. Navrhli, aby **„pokles hodnoty HbA1c počas 6-mesačného obdobia bol obmedzený na menej ako 2 %, aby sa zabránilo progresii retinopatie... Príliš rýchly pokles na začiatku kontroly glykémie by mohol spôsobiť závažné alebo prechodné zhoršenie progresie retinopatie.“**

N.B. Ak používate iné jednotky HbA1c (mmol/mol namiesto %), kalkulačku HbA1c nájdete [tu](https://www.diabetes.co.uk/hba1c-units-converter.html).

V ďalšom retrospektívnom [hodnotení](https://academic.oup.com/brain/article/138/1/43/337923) 954 pacientov výskumníci zistili, že:

**„Pri poklese HbA1c o 2 – 3 % počas 3 mesiacov existovalo 20 % riziko vzniku neuropatie vyvolanej liečbou pri diabete, pri poklese HbA1c o > 4 % počas 3 mesiacov riziko vzniku neuropatie vyvolanej liečbou pri diabete prekročilo 80 %“.**

[Komentár](https://academic.oup.com/brain/article/138/1/2/340563) k tejto práci súhlasí s tým, že na predchádzanie komplikáciám **by cieľom malo byť zníženie A1c o < 2 % za 3 mesiace.** Ďalšie prehľadové články na túto tému si môžete prečítať [tu](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6587545/pdf/DOM-21-454.pdf) a [tu](https://www.mdpi.com/1999-4923/15/7/1791).

Všeobecne sa uznáva, že ľudia s _novo_ diagnostikovaným diabetom 1. typu (ktorí majú pri diagnóze, pred začatím liečby inzulínom, často veľmi vysoký HbA1c) dokážu HbA1c hneď po diagnóze rýchlo znížiť bez toho, aby im tieto riziká hrozili v rovnakej miere, pretože vysokú glykémiu nemali tak dlho. Je to však stále otázka, ktorú by ste mali prediskutovať so svojím lekárom.

(PreparingForAaps-no-sglt-2-inhibitors)=
### Žiadne inhibítory SGLT-2

```{admonition} NO SGLT-2 inhibitors
:class: danger
Inhibítory SGLT-2, nazývané aj gliflozíny, inhibujú reabsorpciu glukózy v obličkách. Gliflozíny znižujú hladinu cukru v krvi nepredvídateľne, a preto ich NESMIETE užívať počas používania systému s uzavretým okruhom, ako je AAPS! Hrozí značné riziko ketoacidózy a/alebo hypoglykémie! Kombinácia tohto lieku so systémom, ktorý znižuje bazálne dávky s cieľom zvýšiť glykémiu, je obzvlášť nebezpečná. 

Stručne povedané:
- **Príklad 1: riziko hypoglykémie**
>Pri obede si v **AAPS** podáte bolus na 45 g glukózy, ktoré zjete. Problém je v tom, že inhibítory spôsobia, že telo časť sacharidov vylúči, a AAPS o tom nevie. V tele potom zostane príliš veľa inzulínu v porovnaní so vstrebanými sacharidmi a dôjde k hypoglykémii.

- **Príklad 2: riziko ketoacidózy**
>Inhibítory na pozadí vylučujú časť sacharidov, a tým znižujú vašu glykémiu. **AAPS** automaticky povie pumpe, aby podávala menej inzulínu, vrátane bazálu. Postupne môže vaša glykémia zostávať pod cieľovou hodnotou tak dlho, až telo nemá dosť bazálneho inzulínu na spracovanie sacharidov, a dôjde ku ketoacidóze. Ketoacidóza u ľudí s diabetom 1. typu zvyčajne vzniká pre poruchu pumpy. To by spustilo upozornenia v telefóne a bolo by to vidieť na vysokej glykémii. Pri gliflozínoch je však nebezpečné to, že AAPS nezobrazí žiadne upozornenie, pretože pumpa ďalej funguje a glykémia môže zostať v cieľovom rozsahu.

Medzi bežné obchodné názvy inhibítorov SGLT-2 patria: Invokana, Farxiga, Jardiance, Glyxambi, Synjardy, Steglatro a Xigduo XR a ďalšie.
```


### Základné princípy okruhu s AAPS

Skôr než začnete používať **AAPS**, musíte porozumieť základným princípom a pojmom okruhu. Toto dosiahnete investovaním vášho času do čítania dokumentácie **AAPS** a splnením cieľov, ktorých cieľom je poskytnúť vám solídny základ pre bezpečné a efektívne používanie **AAPS**. Obsah dokumentácie **AAPS** sa môže na prvý pohľad zdať ohromujúci, ale buďte trpezliví a dôverujte procesu – so správnym prístupom to dosiahnete!

Rýchlosť postupu bude závisieť od jednotlivca, ale majte na pamäti, že splnenie všetkých cieľov zvyčajne trvá 6 – 9 týždňov. Mnohí ľudia začínajú **AAPS** zostavovať, inštalovať a nastavovať dlho predtým, ako ho začnú používať. Na pomoc s týmto má systém „virtuálnu pumpu“, ktorú je možné použiť počas plnenia počiatočných cieľov, aby ste sa mohli oboznámiť s **AAPS** bez toho, aby ste ho skutočne používali na podávanie inzulínu. Podrobný časový plán nájdete nižšie. Uvedomte si, že pri cieli 7 v **AAPS** už používate uzavretý okruh. Ďalšie ciele pridávajú funkcie ako **SMB** a **automatizácie**, ktoré sú pre niektorých používateľov užitočné, ale pre základnú funkciu **AAPS** nie sú nevyhnutné.

Úspech s **AAPS** si vyžaduje aktívny prístup, ochotu premýšľať o údajoch glykémie a pružnosť pri potrebných úpravách **AAPS**, aby ste zlepšili svoje výsledky. Rovnako ako je takmer nemožné naučiť sa šport len čítaním pravidiel, to isté platí aj pre **AAPS**.

#### Pri nastavení a prevádzke systému počítajte s oneskoreniami a menšími problémami

V úvodných fázach používania **AAPS** sa môžu vyskytnúť ťažkosti, kým všetky komponenty okruhu medzi sebou (a s prípadnými sledujúcimi) správne komunikujú, a tiež pri dolaďovaní nastavení. Niektoré chyby sa nedajú vyriešiť, kým sa **AAPS** nepoužíva v bežnom živote, ale veľkú pomoc nájdete aj v skupine na Facebooku a na Discorde. Podľa toho si to naplánujte a na riešenie problémov si vyberte „vhodný“ čas, napríklad pokojné víkendové ráno (t. j. nie neskoro v noci, keď ste unavení, ani pred dôležitým stretnutím či cestou).

#### Technologická kompatibilita

Systém **AAPS** je kompatibilný iba s určitými typmi inzulínových púmp, systémov CGM a telefónov a niektoré technológie nemusia byť v rôznych krajinách dostupné. Aby ste sa vyhli sklamaniu alebo frustrácii, prečítajte si časti o [CGM](../Getting-Started/CompatiblesCgms.md), [pumpe](../Getting-Started/CompatiblePumps.md) a [telefóne](../Getting-Started/Phones.md).

#### Čas na zostavenie aplikácie a cesta k plnému používaniu okruhu

Čas potrebný na zostavenie aplikácie **AAPS** závisí od vašich znalostí a technických schopností. Pre neskúsených používateľov môže zostavenie **AAPS** trvať zvyčajne pol dňa alebo celý deň (s pomocou komunity). Proces sa pri novších verziách **AAPS** výrazne zrýchli, keď budete skúsenejší.

So zostavením vám pomôžu tieto časti dokumentácie:

- [Zostavenie AAPS](../SettingUpAaps/BuildingAaps.md) vás krok za krokom prevedie zostavením aplikácie a jej inštaláciou do telefónu;

- [Časté otázky](../UsefulLinks/FAQ.md) odpovedajú na bežné otázky a vysvetľujú chyby, ktoré sa vyskytujú najčastejšie; a

- rozcestník [Riešenie problémov](../GettingHelp/GeneralTroubleshooting.md) zhromažďuje riešenia najčastejších problémov, zoradené podľa tém.

Ako dlho potrvá, kým sa dostanete k uzavretému okruhu, závisí od každého z vás. Približný časový plán, ako sa s **AAPS** dostať k plnému používaniu okruhu, nájdete [nižšie](#preparing-how-long-will-it-take).


#### Úložisko kľúčov a súbor s exportom nastavení

„Úložisko kľúčov“ (súbor .jks) je súbor zašifrovaný heslom, ktorý patrí iba k vašej vlastnej kópii **AAPS**. Váš telefón ho používa na zabezpečenie toho, aby nikto iný nemohol aktualizovať vašu vlastnú kópiu bez úložiska kľúčov. Stručne povedané, ako súčasť zostavenia **AAPS** by ste mali:

1.  uložiť súbor úložiska kľúčov (súbor .jks, ktorým sa podpisuje vaša aplikácia) na bezpečné miesto;

2.  Poznačte si heslo k súboru úložiska kľúčov.

Ako úložisko kľúčov uložíte, závisí od spôsobu zostavenia:

- **Zostavenie v Android Studiu (počítač)**: úložisko kľúčov sa vytvorí počas zostavenia – kam ho uložiť, nájdete v časti [Generate signed APK](#Building-APK-generate-signed-apk).
- **AAPS Builder**: uschovajte si záložný súbor `aaps-keystore.jks`, ktorý vám stránka nastavenia ponúkla pri vytvorení kľúča, spolu s jeho heslom a aliasom. Ak ste nahrali vlastné úložisko kľúčov, uschovajte si tento súbor.
- **Zostavenie v prehliadači s forkom**: pomocou workflow [Export keystore](#ci-keystore-export) si stiahnite kópiu na svoj Disk Google.

Vďaka tomu budete môcť použiť presne ten istý súbor vždy, keď sa vytvorí aktualizovaná verzia **AAPS**. V priemere sú potrebné 2 aktualizácie **AAPS** ročne.

Okrem toho **AAPS** poskytuje možnosť [exportovať všetky vaše konfiguračné nastavenia](../Maintenance/ExportImportSettings.md). Vďaka tomu môžete pri výmene telefónu, aktualizácii alebo preinštalovaní aplikácie bezpečne obnoviť systém s čo najmenšími problémami. 

#### Troubleshooting

Ak si niečím nie ste istí, neváhajte sa obrátiť na komunitu AAPS – hlúpe otázky neexistujú! Všetkých používateľov bez ohľadu na úroveň skúseností povzbudzujeme, aby sa pýtali. Vďaka veľkému množstvu používateľov **AAPS** sú odpovede na vaše otázky pomerne rýchle.

##### [spýtajte sa v skupine AAPS na Facebooku](https://www.facebook.com/groups/AndroidAPSUsers/)

##### [spýtajte sa na Discord kanáli AAPS](https://discord.gg/4fQUWHZ4Mw)





#### [Kde získať pomoc](../UsefulLinks/BackgroundReading.md)?

Táto časť má poskytnúť novým používateľom odkazy na zdroje, aby mohli získať pomoc vrátane prístupu ku komunite zloženej z nových aj skúsených používateľov, ktorí vám pomôžu s otázkami a riešením problémov, ktoré sa s AAPS spájajú.

#### [Sekcia pre lekárov](../UsefulLinks/ClinicianGuideToAaps.md)

Toto je [sekcia určená špeciálne pre lekárov](../UsefulLinks/ClinicianGuideToAaps.md), ktorí sa chcú dozvedieť viac o AAPS a o technológii umelého pankreasu s otvoreným zdrojovým kódom. V úvode nájdete aj odporúčania, [ako hovoriť so svojím lekárskym tímom](#introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team).

## Čo budeme zostavovať a inštalovať?

Táto schéma poskytuje prehľad kľúčových komponentov (hardvéru aj softvéru) systému **AAPS**:

![preparing_overview](../images/preparing_images/AAPS_preparing_overview_01.png)


Okrem troch základných hardvérových komponentov (telefón, pumpa, glukózový senzor) potrebujeme aj: 1) Aplikáciu **AAPS** 2) Reportovací server a 3) Aplikáciu na kontinuálne monitorovanie glukózy (CGM)

### 1) Aplikácia pre telefón s Androidom: **AAPS**

**AAPS** je aplikácia pre smartfóny a ďalšie zariadenia s Androidom. Aplikáciu **AAPS** (súbor apk) si zostavíte sami podľa návodu krok za krokom: stiahnete zdrojový kód **AAPS** z GitHubu, nainštalujete do počítača potrebné programy (Android Studio, GitHub Desktop) a zostavíte si vlastnú kópiu aplikácie **AAPS**. Potom si prenesiete aplikáciu **AAPS** do smartfónu (e-mailom, káblom USB _atď._) a nainštalujete ju.

### 2) Reportovací server: Nightscout (Tidepool*)

Aby ste mohli **AAPS** naplno využívať, musíte si nastaviť server Nightscout. Môžete to [urobiť sami](https://nightscout.github.io/nightscout/new_user/#free-diy) alebo zaplatiť malý poplatok za [spravovanú službu Nightscout](https://nightscout.github.io/#nightscout-as-a-service), ktorá vám bude nastavená. Nightscout sa používa na zhromažďovanie údajov z **AAPS** a vie vytvárať detailné prehľady, ktoré prepájajú dáta zo senzora a vzory podávania inzulínu. Opatrovatelia môžu tiež používať Nightscout na diaľkovú komunikáciu s aplikáciou **AAPS** a dohliadať na liečbu diabetu svojho dieťaťa. Medzi takéto funkcie patrí monitorovanie hladín glukózy a inzulínu v reálnom čase, diaľkové podávanie inzulínu (prostredníctvom SMS) a oznámenia o jedle. Hodnotiť liečbu diabetu len podľa dát z CGM bez dát z pumpy je ako riadiť auto, ktorého vodič je slepý a spolujazdec mu opisuje, čo vidí. Ako alternatívu k Nightscoutu môžete použiť aj Tidepool.

### 3) Aplikácia senzora CGM

V závislosti od vášho glukózového senzora/CGM budete potrebovať kompatibilnú aplikáciu na prijímanie hodnôt glukózy a ich odosielanie do **AAPS**. Nižšie sú zobrazené rôzne možnosti a ďalšie informácie nájdete v sekcii [kompatibilných CGM](../Getting-Started/CompatiblesCgms.md):

![dexcom_options](../images/preparing_images/AAPS_connectivity_Dex_02.png) ![libre_options](../images/preparing_images/AAPSconnectivity_libre.png) ![eversense_options](../images/preparing_images/AAPS_connectivity_eversense.png)

### Údržba systému **AAPS**

Aplikácie **Nightscout** aj **AAPS** je potrebné aktualizovať približne raz ročne, pretože sa vydávajú vylepšené verzie. V niektorých prípadoch sa aktualizácia môže oneskoriť, v iných sa dôrazne odporúča alebo sa považuje za nevyhnutnú z bezpečnostných dôvodov. O týchto aktualizáciách budeme informovať v skupinách na Facebooku a na serveroch Discord. Z poznámok k vydaniu bude vždy jasné, o akú situáciu ide. Keď vyjde aktualizácia, podobné otázky ako vy bude mať pravdepodobne veľa ľudí a s aktualizáciou vám pomôžu.

(preparing-how-long-will-it-take)=
## Ako dlho bude trvať nastavenie všetkého?

Ako už bolo spomenuté, používanie **AAPS** je skôr „cesta“, ktorá si vyžaduje investíciu vášho osobného času. Nie je to jednorazové nastavenie. Podľa súčasných odhadov trvá zostavenie **AAPS**, inštalácia a nastavenie softvéru **AAPS** a **CGM** a cesta od otvoreného okruhu k hybridnému uzavretému okruhu s **AAPS** celkovo približne 4 až 6 mesiacov. Preto odporúčame začať čo najskôr so zostavením aplikácie **AAPS** a s plnením prvých cieľov, aj keď ešte používate iný systém na podávanie inzulínu (virtuálnu pumpu môžete používať až do cieľa 5).

Niektoré ciele vyžadujú určitý počet dní, aby ste sa uistili, že pochopíte novú funkcionalitu. Túto čakaciu dobu nie je možné obísť. Minimálne čakacie doby sú nastavené pre vašu bezpečnosť.

Tu je približný časový rámec:

| Úlohy                                                          |           Približný čas           |
| -------------------------------------------------------------- |:---------------------------------:|
| Úvodné čítanie dokumentácie                                    |              1–2 dni              |
| Nastavenie GitHubu pre zostavenie v prehliadači                |            1–4 hodiny             |
| Nastavenie reportovacieho servera                              |             1 hodina              |
| Inštalácia aplikácie pre CGM (xDrip, BYODA, …)                 |             1 hodina              |
| Prvé nastavenie CGM → xDrip → AAPS                             |             1 hodina              |
| Konfigurácia AAPS → prvé nastavenie pumpy                      |             1 hodina              |
| Konfigurácia AAPS → Nightscout/Tidepool (iba reportovanie)     |             1 hodina              |
| Voliteľné: Konfigurácia NightScout ↔ **AAPS** a NS Followers   |             1 hodina              |
| Cieľ 1: Nastaviť vizualizáciu a monitoring                     |             1 hodina              |
| Cieľ 2: Naučte sa, ako ovládať AAPS                            |             2 hodiny              |
| Cieľ 3: Preukážte svoje znalosti                               |             Až 14 dní             |
| Cieľ 4: Začať s otvoreným okruhom                              |          Minimálne 7 dní          |
| Cieľ 5: Porozumieť otvorenému okruhu                           |               7 dní               |
| Cieľ 6: Spustiť uzavretý okruh (Ochrana pred nízkou glykémiou) |   Minimálne 5, maximálne 14 dní   |
| Cieľ 7: Ladenie uzavretého okruhu                              | Minimálne 1 deň, maximálne 7 dní  |
| Cieľ 8: Upraviť bazály a pomery, povoliť Autosens              | Minimálne 7 dní, maximálne 14 dní |
| Cieľ 9: Povoliť Super Micro Bolus (SMB)                        |         Minimálne 28 dní          |
| Cieľ 10: Automatizácia                                         |         Minimálne 28 dní          |

Aj keď budete fungovať plne na **AAPS**, budete musieť pravidelne dolaďovať nastavenia, aby ste zlepšili celkovú liečbu diabetu.

## Requirements

### Zdravotné hľadiská

Okrem lekárskych upozornení v [časti bezpečnosť](#preparing-safety-first) sú uvedené aj rôzne parametre v závislosti od toho, aký inzulín v pumpe používate.

#### Voľba inzulínu

Výpočty **AAPS** sú založené na koncentráciách inzulínu 100 U/ml (rovnako ako štandard pumpy). Inzulín nastavíte v **Spravovať → Nastavenia inzulínu**: nastavte **Vrchol** a **Doba pôsobenia inzulínu** (DIA), alebo použite **Nahraj vrchol z** a doplňte štandardný čas vrcholu jedného z prednastavených inzulínov:

- **Novorapid** (aj pre Humalog a NovoLog)
- **Fiasp**
- **Lyumjev**

Pokročilí používatelia môžu zadať ľubovoľný čas vrcholu (35 až 120 minút) priamo, napríklad pre zmes inzulínov. Pozri [Nastavenia inzulínu](#Config-Builder-insulin).


### Technické hľadiská

Cieľom tejto dokumentácie je znížiť požadovanú technickú odbornosť na absolútne minimum. Aplikáciu **AAPS** môžete zostaviť niekoľkými spôsobmi – prehľad nájdete v časti [Zostavenie AAPS](../SettingUpAaps/BuildingAaps.md):

- **Zostavenie v prehliadači** (odporúčané): aplikáciu zostavíte priamo zo smartfónu pomocou GitHub Actions, bez počítača a bez Android Studia. S [AAPS Builderom](../SettingUpAaps/BrowserBuildAapsBuilder.md) potrebujete iba účet na GitHube: aplikáciu stiahnete priamo z GitHubu. Metóda s forkom potrebuje aj účet Google, aby mohla aplikáciu uložiť na váš Disk Google.
- **Zostavenie v Android Studiu**: aplikáciu zostavíte v počítači pomocou Android Studia. Tento spôsob používajú najmä vývojári, ktorí chcú meniť kód.
- **Zostavenie z príkazového riadku**: pre používateľov, ktorí chcú zostavovať vo svojom počítači bez inštalácie Android Studia.

Okrem zostavenia aplikácie musíte tiež nastaviť reportovací server, nastaviť niekoľko aplikácií v telefóne s Androidom a získať znalosti o liečbe diabetu. Zvládnete to, ak budete postupovať krok za krokom, budete trpezliví a využijete pomoc komunity **AAPS**. Ak sa viete pohybovať na internete a spravovať svoj e-mail v Gmaile, zostavenie **AAPS** zvládnete. Dajte si na to čas.

### Smartfóny

#### Verzie AAPS a Androidu

Aktuálna verzia aplikácie **AAPS** (4.0) vyžaduje smartfón so systémom **Android 12.0 alebo novším**. Ak plánujete kúpiť nový telefón, odporúčame (k januáru 2026) Android 16.<br/> Z bezpečnostných dôvodov dôrazne odporúčame udržiavať vaše zostavenie **AAPS** aktuálne. Pre používateľov, ktorí nemôžu používať zariadenie so systémom Android 12.0 alebo novším, sú však stále k dispozícii staršie verzie aplikácie **AAPS** kompatibilné so staršími verziami systému Android, pozri: [Poznámky k vydaniu](#maintenance-android-version-aaps-version).

#### Výber modelu smartfónu
Presný model, ktorý si kúpite, závisí od požadovaných funkcií. Odporúčania a spätnú väzbu od používateľov týkajúce sa funkčných nastavení nájdete na [stránke Telefóny](../Getting-Started/Phones.md).

Používateľom sa odporúča, aby si vo svojich telefónoch udržiavali aktuálnu verziu systému Android vrátane bezpečnostných parametrov. Ak ste však s **AAPS** nováčikom alebo nie ste technickým expertom, možno budete chcieť aktualizáciu telefónu odložiť, kým tak neurobia iní a nepotvrdia, že je to bezpečné, na našich fórach.

```{admonition} Delaying Samsung phone updates
:class: warning
Samsung bohužiaľ do svojich telefónov často vnucuje aktualizácie, ktoré môžu spôsobiť problémy s pripojením cez Bluetooth. Ak chcete tieto vnútené aktualizácie vypnúť, musíte telefón prepnúť do „režimu vývojára“:

1. Prejdite do **Nastavenia** > **Informácie o telefóne** > **Informácie o softvéri** a potom opakovane ťuknite na **Číslo zostavy**, kým telefón nepotvrdí, že režim vývojára je odomknutý.
2. Vráťte sa do hlavnej ponuky **Nastavenia**, kde uvidíte novú položku **Možnosti vývojára**.
3. Otvorte **Možnosti vývojára**, nájdite položku **Automatické aktualizácie systému** a vypnite ju.
```

```{admonition} Google Play Protect potential issue
:class: warning
Niekoľko používateľov hlásilo, že Google Play Protect každé ráno bez dôvodu vypína **AAPS**. Ak sa vám to stane, musíte v nastaveniach Google Play vypnúť **Google Play Protect**. Netýka sa to všetkých modelov telefónov ani všetkých verzií Androidu.
```

```{admonition} Android developer verification
:class: note
Od septembra 2026 Google postupne zavádza [overovanie vývojárov pre Android](#android-developer-verification), ktoré mení spôsob inštalácie vlastnoručne zostavenej aplikácie do telefónu. Zostavenia **AAPS** sa to netýka a bezplatné spôsoby inštalácie zostávajú dostupné – podrobnosti nájdete na odkazovanej stránke.
```

