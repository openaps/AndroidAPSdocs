
# Poznámky k vydaniu

```{toctree}
:hidden:

Update2_7.md
Update3_0.md
UpdateAaps3204.md
```

Please follow the instructions in the [update manual](UpdateToNewVersion.md) to update to a new version. Najčastejšie ťažkosti pri aktualizácii **AAPS** rieši aj časť o riešení problémov na stránke s návodom na aktualizáciu.

```{admonition} Upgrading from AAPS v3?
:class: tip
Pozrite si [Čo sa zmenilo v AAPS v4](V4Changes.md), kde nájdete dôležité zmeny v správaní – funkcie, ktoré sa presunuli, boli premenované alebo odstránené.
```

Keď bude dostupná nová aktualizácia, dostanete takúto notifikáciu:

![Informácie o aktualizácii](../images/AAPS_LoopDisable90days.png)

Ak neaktualizujete do dátumu vypršania platnosti, **AAPS** sa prepne na otvorený okruh.

Dátumy konca podpory jednotlivých verzií AAPS nájdete na stránke [Koniec podpory](EndOfLife.md).

**Notifikáciu neignorujte.** Nové verzie **AAPS** prinášajú dôležité bezpečnostné opravy. Preto musí každý používateľ **AAPS** čo najskôr aktualizovať na najnovšiu verziu. This is an effort to try to improve the safety for each **AAPS** user and the DIY community. Ďakujeme za pochopenie.

(maintenance-android-version-aaps-version)=

## Verzia Androidu a verzia AAPS

Ak váš smartfón používa verziu Androidu staršiu ako Android 12, nebudete môcť používať AAPS v3.4 a novšie, pretože vyžaduje aspoň Android 12.

Aby mohli používatelia so starším Androidom používať staršiu verziu AAPS, boli vydané nové verzie, ktoré menia iba kontrolu verzie. Žiadne iné vylepšenia nie sú zahrnuté.

V tabuľke nižšie nájdite svoju verziu Androidu a použite zodpovedajúcu verziu **AAPS**. Kód sa sťahuje z <https://github.com/nightscout/AndroidAPS> z uvedenej vetvy.

| Vaša verzia Androidu | Verzia AAPS, ktorú treba použiť | Vetva na stiahnutie                                              |
| -------------------- | ------------------------------- | ---------------------------------------------------------------- |
| Android 12 a novší   | Najnovšia verzia                | [master](https://github.com/nightscout/AndroidAPS) (predvolená)  |
| Android 11           | **3.3.2.1**                     | [3.3.2.1](https://github.com/nightscout/AndroidAPS/tree/3.3.2.1) |
| Android 9, 10        | **3.2.0.4**                     | [3.2.0.4](https://github.com/nightscout/AndroidAPS/tree/3.2.0.4) |
| Android 8            | **2.8.2.1**                     | [2.8.2.1](https://github.com/nightscout/AndroidAPS/tree/2.8.2.1) |
| Android 7            | **2.6.2**                       | [2.6.2](https://github.com/nightscout/AndroidAPS/tree/2.6.2)     |

## Verzia pre WearOS

- AAPS vyžaduje WearOS 3.0, 3.2 alebo 3.5 (Android 11, úroveň API 30) alebo novší. Hodinky s WearOS 2 nie sú podporované.

```{tip}
WearOS 5, úroveň API 34 (Android 14) má [obmedzenia](#BuildingAapsWearOs-WearOS5).
```

(latestrelease)=

(version400)=

## Verzia 4.0.0

Dátum vydania: 31.10.2026

### Nové funkcie
- Nové používateľské rozhranie: aplikácia v telefóne prestavaná v Jetpack Compose @MilosKozak
- [Globálne vyhľadávanie](../DailyLifeWithAaps/GlobalSearch.md) @MilosKozak
- Migrácia na Kotlin Multiplatform, klient pre Windows, Mac, Linux (desktop) a iOS @MilosKozak
- [Scény](../DailyLifeWithAaps/Scenes.md): uložte si súbor akcií a spúšťajte ich naraz @MilosKozak
- [Ovládanie Master ↔ Client](../RemoteFeatures/ClientMasterControl.md): posielanie príkazov z telefónu klienta do hlavného zariadenia (master) @MilosKozak
  - [Roly klientov](#client-master-control-roles): Iba na čítanie, Jedlá, Opatrovateľ alebo Správca pre každého klienta @MilosKozak
  - [Režim zvýšeného zabezpečenia](#client-master-control-hardened-mode): keď je zapnuté ovládanie z klienta, hlavné zariadenie prijíma zmeny iba zo spárovaných klientov @MilosKozak
  - Párovanie pomocou QR kódu, ktorý v klientovi nastaví aj Nightscout, alebo pomocou PIN; tajný kľúč párovania sa hneď po spárovaní vymení @MilosKozak
  - [Vlastný Nightscout token](#client-master-control-own-token) pre každého klienta, iba s právami, ktoré klient potrebuje @MilosKozak
- Podpora [koncentrácie inzulínu](../AdvancedOptions/InsulinConcentration.md) (U200, U500) v pumpách, kalkulačke a profiloch @Philoul @MilosKozak
- Správa inzulínov: katalóg inzulínov, prezývky, výber v profile a v kalkulačke @Philoul
- Plugin kalibrácie @MilosKozak
- [Vyhladzovanie](../CompatibleCgms/SmoothingBloodGlucoseData.md): Unscented Kalmanov filter (UKF) @piecycle
- [Striedanie miest](#Aapsscreens-site-rotation): sledovanie a striedanie miest vpichu @Philoul @MilosKozak
- Prepracovaný [Autotune](../AdvancedOptions/Autotune.md) @Philoul
- Nové [widgety](../DailyLifeWithAaps/Widgets.md) @MilosKozak @t1dude
- Prístupnosť: aplikácia v telefóne funguje s čítačkou obrazovky – pomenované ovládacie prvky, hlasový stav, popisy grafov a nadpisy na rýchlu orientáciu @MilosKozak
- [Import nastavení](../Maintenance/ExportImportSettings.md): môže zachovať nastavenia pumpy @MilosKozak
- Trvalá notifikácia používa živé aktualizácie Androidu (live updates), s podporou Samsung Now bar a s deltou @premnirmal
- Graf glykémie: [stlačte a podržte](#aaps-screens-graph-press-and-hold) a uvidíte hodnoty v danom bode merania, na každom grafe v prehľade @t1dude @olorinmaia
- Vylepšenia výkonu @MilosKozak
- Automatické eSacharidy v bolusovej kalkulačke @MilosKozak

### Nové zariadenia
- **CareLevo**: nový [ovládač pumpy](../CompatiblePumps/CareLevo.md) @Kisu-Choi @MilosKozak
- **Dana-i2**: podpora @MilosKozak
- **Instara**: nový zdroj CGM @leohunt

### Vylepšenia ovládačov púmp
- Prestavané obrazovky prehľadu púmp pre Insight, Medtronic, Medtrum, Omnipod, Dana, Diaconn a Equil @MilosKozak
- **Omnipod Dash**: kódy Ref ako v PDM a čitateľné popisy porúch, kompenzácia posunu času (drift) vždy zapnutá, lepšie hlásenie typu bolusu @nl-ruud
- **Omnipod**: pevný dátum ukončenia pre Dash a Eros @mcnelson
- **DanaR, RS**: emulátor pumpy na testovanie @MilosKozak
- **Equil**: emulátor pumpy na testovanie @MilosKozak
- Veľa opráv púmp a okruhu @MilosKozak a ďalší

### Wear OS
- [Aplikácia pre hodinky](../WearOS/WearOsSmartwatch.md) prestavaná v Compose, nové dlaždice a komplikácie, automatická inštalácia ciferníka (Watch Face Push) na Wear OS 6+ @olorinmaia @Philoul
- CustomWatchface dostupný pre WearOS 6.0 (GW7, GW8, GW9...) s vlastným ciferníkom WFF @Philoul @olorinmaia
- CustomWatchface teraz môže obsahovať 5 pozícií pre komplikácie, ktoré si môžete prispôsobiť (nová funkcia dostupná iba pre staršie hodinky) @Philoul
- Nový [ciferník WFF založený na komplikáciách AAPS](#wearos-complications-watchface-setup) @olorinmaia
- Opravy vo výsledku bolusovej kalkulačky a Rýchleho sprievodcu @olorinmaia
- Nový graf glykémie a aktivita Režim prevádzky v hlavnej ponuke @olorinmaia
- Bolusová kalkulačka: stránka [typ jedla](#WearOsSmartwatch-wizard-meal-type), ktorá rozdelí sacharidy ako kalkulačka v telefóne, a [čas sacharidov](#WearOsSmartwatch-wizard-carb-time) s pripomienkou *čas jesť* na hodinkách @olorinmaia
- [Alarmy telefónu na hodinkách](#WearOsSmartwatch-phone-alarms): hodinky zobrazia alarm a ponúknu Stíšiť a Stlmiť na 5 min @olorinmaia

### Zostavenie
- CI workflowy pre zostavenia z tagov/vetiev, mapovanie verzií JDK @Angus-repo

### Prispievatelia
@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

Úplný zoznam zmien: <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

(version3426)=

## Verzia 3.4.2.6

- Equil: vylepšená stabilita @MilosKozak

(version3425)=

## Verzia 3.4.2.5

- Equil: oprava súbehu (race condition) @MilosKozak

(version3424)=

## Verzia 3.4.2.4

- Opravy Equil @MilosKozak
- Oprava synchronizácie profilu z NS @MilosKozak

(version3423)=

## Verzia 3.4.2.3
- Dash: riešenie posunu času (drift) @nl-ruud
- NSClientV3: oprava medzery v dátach po opätovnom pripojení @MilosKozak
- Automatizácia: oprava deserializácie @MilosKozak
- Equil: oprava hlásenia batérie @MilosKozak
- Cleanup workflow @vanelsberg
- Equil: vylepšené zotavenie z chýb @MilosKozak
- DanaRS: oprava komunikácie s domácou (kórejskou) pumpou @MilosKozak
- Insight: oprava synchronizácie TBR @MilosKozak
- Dash: oprava chyby aktivácie @nl-ruud

(version3422)=

## Verzia 3.4.2.2

- Opravy problémov s Equil a Medtronic
- Vylepšená bezpečnosť Medtrum

(version3421)=

## Verzia 3.4.2.1

- Equil: oprava párovania a dialógu priebehu @MilosKozak

(version3420)=

## Verzia 3.4.2.0

Dátum vydania: 04.02.2026

- Equil: oprava odporu pre rôzne modely @hhfcvmars
- Tidepool: oprava relácie @MilosKozak
- Medtrum: Fix activation path by preventing double fill @MilosKozak
- COB: oprava výpočtu COB (rieši nebezpečný okrajový prípad) @MilosKozak

(version3410)=

## Verzia 3.4.1.0

Dátum vydania: 03.08.2026

### Jadro
- Oprava spracovania letného času (DST) @MilosKozak
- Vylepšené a zjednotené rozpoznávanie bežného cieľa (mg/dl > 99, mmol > 5,5) @MilosKozak
- SMS: RESTART chránený PIN kódom @MilosKozak
- Údržba: upozornenie pri výbere nesprávneho priečinka @MilosKozak

### Vylepšenia ovládačov púmp
- **Omnipod Dash**: kód ovládača BLE presunutý do modulu omnipod/common @jwoglom
- **Omnipod Dash**: pokus o opravu stavu pripojenia @MilosKozak
- **Omnipod**: kontrola profilu pred aktiváciou Podu, aby sa neplytvalo Podmi (#4534) @brianV
- **Medtronic**: oprava zobrazenia rovnakého typu kódovania v dialógu nastavení @mifi100
- **Medtronic**: príprava spoločných tried púmp (príprava na Tandem) @andy-rozman
- **RileyLink**: oprava kódovania (#4519) @mifi100
- **Equil**: rozšírená kompatibilita inzulínových púmp podľa predpony sériového čísla (#4510) @hhfcvmars
- **Equil**: pridané logovanie @MilosKozak
- **Diaconn G8**: oprava chyby synchronizácie logu a pridaná podpora firmvéru 3.58+ @miyeongkim
- **Diaconn**: oprava prevodu jednotky trvania TBR @miyeongkim
- **Diaconn**: na synchronizáciu histórie sa používa commandQueue.loadEvents() @miyeongkim
- Povolené podávanie inzulínu, keď je okruh pozastavený, ale pumpa je dostupná @cschuijt

### Cloud / záloha
- Pridaná záloha na Disk Google @Angus-repo
- Upozornenie v rozhraní pri zmene chybového stavu cloudového úložiska @Angus-repo
- Povolené súčasné používanie lokálneho aj cloudového úložiska @Angus-repo

### Tidepool
- Vylepšená migrácia na Tidepool OAuth2 @MilosKozak
- Oprava trvalého stavu Tidepool BLOCKED, oprava odmietania prázdnych SSID @michaeln-synapse

### NSClient
- NSCv3: vylepšené opätovné pripojenie @MilosKozak

### Wear OS
- Zobrazenie nového IOB vo výsledku kalkulačky, ak sa IOB použije vo výpočtoch @olorinmaia
- Oprava priebehu bolusu (BolusProgress) na hodinkách s celkovým množstvom @Philoul

### Používateľské rozhranie
- Vylepšená ikona ic_none pre striedanie miest @Philoul
- Oprava nepoužívania nastavenia pumpy v správe striedania miest @samfundev

### Prispievatelia
@MilosKozak @Philoul @olorinmaia @jwoglom @mifi100 @andy-rozman @Angus-repo @brianV @cschuijt @hhfcvmars @miyeongkim @samfundev @michaeln-synapse

(version3400)=

## Verzia 3.4.0.0

Dátum vydania: 31.12.2025

### Pred aktualizáciou:
* Táto verzia vyžaduje Google Android 12.0 alebo novší. Pred aktualizáciou skontrolujte verziu svojho telefónu.
* Aktualizujte na najnovšie Android Studio, alebo lepšie, použite zostavenie v prehliadači.

### Nové funkcie
* Režim prevádzky @MilosKozak
  * Zobrazenie [histórie stavu okruhu](#AapsScreens-running-mode) na kartách ošetrení
  * Zobrazenie a možnosť zmeny [stavu okruhu z AAPSClient](#RemoteControl_aapsclient).<br>Pozn.: vyžaduje nastavenie [NSClient > Synchronizácia > Prijímať režim prevádzky z NS](#Preferences-nsclient-synchronization)
* [Nové CGM](../Getting-Started/CompatiblesCgms.md): Glunovo, Intelligo, Sinocare
* Podpora [striedania miest](#Aapsscreens-site-rotation) @Philoul
* Nová [akcia automatizácie](#automations-automation-action): zapnutie alebo vypnutie SMB @MilosKozak
* CGM Syai je [dôveryhodný zdroj](#GettingStarted-TrustedBGSource) a podporuje pokročilé filtrovanie @MilosKozak

### Vylepšenia Wear OS
* výrazne znížená spotreba batérie @MilosKozak
* vylepšenia a opravy používateľského rozhrania @olorinmaia
* takmer úplne prepísaný kód, aby zodpovedal súčasnej úrovni knižníc (predtým WearOS 2) @MilosKozak
* 2 nové komplikácie pre rozšírené dáta @Philoul
* Prechod na moderného poskytovateľa komplikácií s DataStore @MilosKozak

### Opravy únikov pamäte
* Opravené úniky pamäte v kóde @MilosKozak
* Pridané hlásenie únikov pamäte LeakCanary do Firebase Crashlytics @MilosKozak

### Vylepšenia ovládačov púmp
* **DanaI**: opravené problémy s odpájaním @MilosKozak
* **RileyLink**: zrýchlená komunikácia vďaka minimalizácii oneskorení @mifi100
* **Medtrum**: pridané zobrazenie času aktivácie a veku patchu @vanelsberg, oprava veľkých písmen v hesle @MilosKozak
* **Combo**: opravené súbehy (race conditions) v testoch @MilosKozak @dv1
* **Equil**: optimalizované pripojenie, znížená spotreba batérie @MilosKozak

### Synchronizácia s Nightscoutom
* Vylepšené odstraňovanie duplikátov pri zlyhaní NS @MilosKozak

### Vylepšenia UI/UX
* various improvements @MilosKozak @Philoul @olorinmaia

### Automatizácia
* Nová akcia ovládania SMB – zapnutie/vypnutie SMB cez automatizáciu @MilosKozak

### Testovanie
* Pridané rozsiahle unit testy pre pumpy Equil, Eopatch, Dana a Medtronic @MilosKozak
* Vylepšená stabilita a pokrytie testov vo viacerých moduloch @MilosKozak

### Tidepool
* Tidepool OAUTH2 (podpora nového overovania Tidepool) @MilosKozak

(version3321)=

## Verzia 3.3.2.1

Dátum vydania: 13.08.2025

- Opravené pripojenie Bluetooth k Omnipodu na Androide 16
- Proces CI (zostavenie v prehliadači)
- Oprava prevodu mmol-mgdl
- Oprava nesprávneho výberu času v dialógoch v niektorých časových pásmach
- Oprava načítania kľúčov v jednoduchom móde
- Oprava chýbajúcich predikcií na hodinkách
- Vylepšená Konfigurácia (ConfigBuilder)
- Vylepšená úplná synchronizácia NSCv3

(version3300)=

## Verzia 3.3.2.0

Dátum vydania: 27.03.2025

### Ako aktualizovať

* Na zostavenie tejto verzie je potrebné [Android Studio vo verzii „Meerkat“](#Building-APK-recommended-specification-of-computer-for-building-apk-file) alebo novšej. Ak ste už zostavili verziu 3.3.x, musíte Android Studio aktualizovať znova.

(version-enforcement)=

### Starting this version, notification and version enforcement has been simplified and softened and works following way:
*  Žiadne vypršanie platnosti, keď je zariadenie offline (ak nie je pripojené na internet). To znamená, že už neexistujú lehoty 60 a 90 dní.
*  Po vypršaní platnosti sa vynúti režim LGS
*  Upozornenia/notifikácie budete dostávať menej často:
   - zostáva 28+ dní: každých 7 dní
   - zostáva 27–14 dní: každé 3 dni
   - potom raz denne
   - Notifikácia sa zobrazí až po poludní, aby vás nerušila v noci
* Existujú iba 2 druhy notifikácií
   - Je dostupná nová verzia (nemá vplyv na AAPS)
   - Platnosť aplikácie vyprší k určitému dátumu v budúcnosti (stále bez vplyvu na AAPS) / vypršala (AAPS sa prepne do režimu LGS)

### Novinky

* SMS príkaz RESTART @MilosKozak
* Parametre prepnutia profilu na hodinkách @olorinmaia
* Tmavý režim ciferníka AAPS V2 @olorinmaia
* Vylepšenia výmeny dát G7 @olorinmaia
* Konfigurácia widgetu @MilosKozak
* Vylepšenia rozhrania prepínačov (Radiobuttons) @olorinmaia
* Automatizácia: výber polohy z mapy @MilosKozak
* Verzia viditeľná na hlavných obrazovkách @MilosKozak
* Compilation with existing git system is enforced (no zip downloads)
* Zobrazenie verzie na hlavnej obrazovke @MilosKozak
* Vylepšenia nahrávania do Tidepool @ConstantinMatheis

### Opravy chýb

* Oprava zrušenia párovania (unbonding) pri Dash @Andreas
* Opravy pre Garmin @robertbuessow @suside
* Oprava zobrazenia IOB v dialógoch @olorinmaia
* Vylepšenia pravopisu a overovania v cieľoch @MilosKozak
* Opravené vykresľovanie emulovaných TBR @MilosKozak
* Opravené obchádzanie zabezpečenia @tdrkDev

## Verzia 3.3.1.3

Dátum vydania: 21.01.2025

### Opravy chýb

* Dash: párovanie (bonding) je voliteľné (predvolene vypnuté) @MilosKozak
* Equil: fixed bolus 10+U, alarm improvements @EquilHack
* Garmin: vylepšenia hodiniek @swissalpine
* Vylepšenia hodiniek @olorinmaia
* Ovládanie stavu okruhu z hodiniek @tdrkDev
* Vylepšenia stability

*  **Môže byť potrebné nové [nastavenie aplikácie Authenticator](#sms-commands-authenticator-setup).**

## Verzia 3.3.1.2

Dátum vydania: 15.01.2025

### Ako aktualizovať

* Na zostavenie tejto verzie je potrebné [Android Studio vo verzii „Ladybug Feature Drop“](#Building-APK-recommended-specification-of-computer-for-building-apk-file) alebo novšej. **Nie je to to isté ako obyčajný „Ladybug“.** Ak ste už zostavili verziu 3.3.x, musíte Android Studio aktualizovať znova.

### Opravy chýb

* Dash: na Androide 15+ sa používa párovanie (bonding)
* Obnovené tlačidlo Dexcom v Prehľade
* Equil: možnosť odstrániť nefunkčnú pumpu
* Upozornenie, keď je korekčný faktor DynISF nulový
* NSCv3: vyriešená komunikácia cez websocket na telefónoch s mierne odlišným časom
* SMS príkazy: oprava jednorazového hesla (OneTimePassword). **Môže byť potrebné nové [nastavenie aplikácie Authenticator](#sms-commands-authenticator-setup).**
* Oprava problému, keď sa niektoré nastavenia už nedali upravovať.
* Oprava resetovania hlavného hesla pri virtuálnej pumpe.
* Opravený import veľkých záložných súborov nastavení.

## Verzia 3.3.1.0

Dátum vydania: 06.01.2025

### Zmeny používateľského rozhrania

* [Pridané farby na rozlíšenie AAPSClient a AAPSClient2](#RemoteControl_aapsclient) @MilosKozak
* Vylepšené rozloženie a ikony akcií používateľa

### Ďalšie funkcie

* Nový spúšťač automatizácie: [počet krokov](#screen-heart-rate-steps) @Roman Rihter
* Možnosť prijať všetko pri úplnej synchronizácii NSCv3 (vrátane dát, ktoré sa predtým nesynchronizovali, napríklad TBR) @MilosKozak
* NSClient v3: funkčné oznámenia (_t. j._ z AAPSClient do AAPS) @MilosKozak

### Technické zmeny a opravy chýb

* Oprava pádu Insight @philoul
* Oprava vytvárania nadmerného počtu záznamov deviceStatus v Nightscoute @MilosKozak
* Oprava vstrebávania sacharidov @MilosKozak
* Opravená farba prepínačov (RadioButtons) a začiarkavacích políčok (CheckBoxes) @MilosKozak
* Opravená chyba pri migrácii percenta DynISF @MilosKozak
* Vyriešená nesprávne umiestnená notifikácia DynISF @MilosKozak
* Opravená chyba v ciferníkoch @philoul

## Verzia 3.3.0.0

Dátum vydania: 29.12.2024

### Hlavné funkcie

* Funkcia **[Dynamická ISF](../DailyLifeWithAaps/DynamicISF.md)** už nie je samostatný plugin, ale je teraz súčasťou pluginu [OpenAPS SMB](#Config-Builder-aps) ako jeho možnosť, spolu s niekoľkými zmenami v jej správaní:
  * **Prepnutie profilu** a **Percento profilu** sa teraz pri **Dynamickej ISF** berú do úvahy pri sile dynamickej citlivosti
  * Vypočíta sa priemerná **ISF** za posledných 24 h a táto hodnota sa použije pre bolusovú kalkulačku a výpočet **COB**. Hodnota **ISF z profilu** sa vôbec nepoužíva (okrem náhradnej hodnoty, keď nie sú k dispozícii historické dáta)
  * Stránka dokumentácie k DynamicISF bola prepísaná. Prečítajte si prosím dôležitú časť [Čo zvážiť pri aktivácii Dynamickej ISF](#dyn-isf-things-to-consider-when-activating-dynamicisf).
* [Povolenie „SMB vždy“ a „SMB po sacharidoch“](#Open-APS-features-enable-smb-always) pre používateľov FreeStyle Libre 2 a Libre 3
  * Poznámka: Vyžaduje najnovšiu verziu xDrip+ alebo Juggluco.
* Nové spúšťače **automatizácie**
* Automatický export nastavení

### Ako aktualizovať

* Pred aktualizáciou:
  * **<span style="color:red">Táto verzia vyžaduje Google Android 11.0 alebo novší</span>**. Pred aktualizáciou skontrolujte verziu svojho telefónu.
  * Ak používate „starý“ ovládač Combo so zariadením ruffy, pred aktualizáciou prejdite na [natívny ovládač Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)
  * Počas aktualizácie prídete o [ďalšie grafy](#AapsScreens-section-g-additional-graphs) na hlavnej obrazovke: ak je to potrebné, poznačte si ich aktuálne nastavenie, aby ste ich po aktualizácii mohli znova vytvoriť.
  * [Problémy s pripojením Bluetooth, ktoré majú niektorí ľudia na Androide 15](../Getting-Started/Phones.md), toto vydanie **NERIEŠI** (ide o problém Androidu, nie **AAPS**). Oprava je dostupná vo verzii 3.3.1.2.
  * Tlačidlo BYODA na hlavnej obrazovke už nie je dostupné kvôli obmedzeniam Androidu. Toto je opravené vo verzii 3.3.1.2.
* Postup aktualizácie: postupujte podľa návodu [Aktualizácia na novú verziu](../Maintenance/UpdateToNewVersion.md).
  * Na zostavenie tejto verzie je potrebné [Android Studio vo verzii „Ladybug“](#Building-APK-recommended-specification-of-computer-for-building-apk-file) alebo novšej. Ak už máte nainštalovanú staršiu verziu Android Studia, možno budete musieť <span style="color:red">nastaviť verziu JVM na 21</span>. Pozrite si [Riešenie problémov s Android Studiom > Incompatible Gradle JVM](#incompatible-gradle-jvm).
  * Tip – ak nechcete prísť o históriu **AAPS**, VŽDY robte AKTUALIZÁCIU a NIE ODINŠTALOVANIE/INŠTALÁCIU. Pre istotu si zálohujte aktuálne nastavenia **AAPS** a starý APK súbor, aby ste sa mohli vrátiť k starej verzii, ak by sa niečo pokazilo.
* Po aktualizácii:
  * Nastavte nové [nastavenie „AAPS priečinok“](#preferences-maintenance-logdirectory) na karte Údržba.

### Podrobné zmeny

#### CGM a pumpy

* [Povolenie „SMB vždy“ a „SMB po sacharidoch“](#Open-APS-features-enable-smb-always) pre používateľov FreeStyle Libre 2 a Libre 3 @MilosKozak
* Vylepšenia [ovládača Medtrum](../CompatiblePumps/MedtrumNano.md) @jbr77rr
  * Vylepšenia komunikácie vrátane nového nastavenia na obídenie problémov na niektorých smartfónoch
  * Zobrazenie stavu zásobníka na začiatku aktivácie
  * Oprava chyby, keď sa aktivácia vrátila na začiatok a používateľ ju nemohol dokončiť
  * Spätná väzba o stave synchronizácie a ďalšie spresnenia
* Nová podporovaná pumpa: [Equil 5.3](../CompatiblePumps/Equil5.3.md) @EquilHack
* Nové podporované CGM: [Ottai](../CompatibleCgms/OttaiM8.md) @ottai-developer a [Syai Tag](../CompatibleCgms/SyaiTagX1.md) @syai-dev
* Ovládač Insight prepísaný do Kotlinu @Philoul
* Odstránený starý ovládač Combo závislý od ruffy

#### Zmeny používateľského rozhrania

* [Jednoduchý mód](#preferences-simple-mode) je pri novej inštalácii predvolene zapnutý @MilosKozak
* Nové možnosti [Rýchleho sprievodcu](#Preferences-quick-wizard) @radicalb
  * Rýchly sprievodca teraz používa na výpočet a zobrazenie bolusu rovnakú logiku ako kalkulačka. Pole „čas sacharidov“ v Rýchlom sprievodcovi teraz môžete použiť na podanie bolusu vopred (pre-bolus).
* Nová [ponuka mierky grafu](#aaps-screens-main-graph); vylepšenia rozhrania [ponuky ďalších grafov](#AapsScreens-activate-optional-information) @Philoul
* [Vylepšené rozloženie Konfigurácie (ConfigBuilder)](../SettingUpAaps/ConfigBuilder.md) @MilosKozak
  * Sekcie sú teraz predvolene zbalené. Na rozbalenie použite šípku.
* Premenlivá citlivosť je viditeľná v AAPSClient
* Vylepšenia rozhrania bolusovej kalkulačky @kenzo44
* Oprava zobrazenia textu na kartách púmp pri svetlej téme @jbr77rr

#### Ďalšie funkcie

* [Automatický export nastavení](#ExportImportSettings-Automating-Settings-Export) @vanelsberg
* Nový [spúšťač automatizácie](#automations-automation-triggers) @vanelsberg
  * Aktivácia Podu (iba náplasťová pumpa)
* Nové [spúšťače automatizácie](#automations-automation-triggers) @jbr77rr
  * Vek kanyly, Vek inzulínu, Vek batérie v pumpe, Vek senzora, Stav zásobníka, Úroveň nabitia batérie v pumpe
* Povolené zadávanie záporných sacharidov @MilosKozak
* Nový parameter [„AAPS priečinok“](#preferences-maintenance-settings) na výber iného priečinka na ukladanie, ako je predvolený.
* Povolené [záznamy inzulínu pri pozastavenej pumpe](#aaps-screens-buttons-insulin) @jbr77rr
* Aktualizovaný [Cieľ 2](#objectives-objective2) @MilosKozak
  * Kontrola, či je hlavné heslo nastavené a či ho poznáte
* Náhodné sacharidy v testovacom režime @MilosKozak
* Opravená chyba vo výpočte CDD (TDD) @MilosKozak
* SMS príkazy: možnosť [**neposielať** SMS pri zmene profilu](#sms-commands-too-many-messages) prichádzajúcej z NS @MilosKozak

#### Inteligentné hodinky

* vylepšenia hodiniek a ciferníkov @Philoul @MilosKozak @olorinmaia
* Dlaždice na hodinkách z akcií automatizácie @Philoul
* Kombinované ciferníky z AAPS, AAPSClient a AAPSClient2 na sledovanie viacerých pacientov @Philoul @MilosKozak
* EXTRA: show\_user\_actions\_on\_watch\_only @MilosKozak

#### Technické zmeny

* [zmena umiestnenia log súborov](#Accessing-logfiles-accessing-logfiles)
* nová štruktúra interných modulov @MilosKozak
* vrstva ukladania dát oddelená od hlavného kódu @MilosKozak
* zostavovacie súbory prepísané do kts @MilosKozak
* algoritmy prepísané do Kotlinu pre lepší výkon @MilosKozak
* veľké množstvo nových unit testov @MilosKozak a ďalší
* ďalší kód prevedený do Kotlinu @MilosKozak
* nová správa nastavení, xml \-\> kotlin @MilosKozak
* nová konfigurácia CI, CI beží na vlastných serveroch @MilosKozak
* knižnice aktualizované na najnovšie verzie, toml @MilosKozak
* migrácia na Kotlin 2.0, Java 21 @MilosKozak

(version3204)=

## [Verzia 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)

Dátum vydania: 27.02.2024

Táto verzia je posledná, ktorá podporuje Android 10. Ak nemôžete aktualizovať na Android 11, [aktualizujte AAPS na 3.2.0.4](#update-aaps-3204).

### Zmeny

- Podpora xDrip G7
- Opravy Medtrum
- Oprava ikony automatizácie
- Oprava plnenia cieľa 1

(version3200)=

## Verzia 3.2.0.0 venovaná @Philoul

Dátum vydania: 23.10.2023

### Dôležité upozornenia

- Vyžaduje sa NS 15
- Pri používaní websocketov v plugine NS v3 sa ošetrenia zadané cez rozhranie NS (tlačidlo plus) a z iných aplikácií, ktoré používajú API v1, neodosielajú do AAPS. Toto bude opravené v budúcom vydaní NS. V AAPS aj v AAPSClient vždy používajte rovnaký klient (v1 alebo v3), kým NS interne úplne neprejde na v3. To isté platí aj pre samotné AAPS a AAPSClient.
- Websockety v plugine v3 fungujú podobne ako v plugine v1. Bez zapnutých websocketov AAPS plánuje pravidelné sťahovanie z NS, čo by malo znížiť spotrebu energie, pretože NS nie je pripojený stále. Na druhej strane to znamená oneskorenie pri výmene dát. Pred použitím si prosím prečítajte [tu](#Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS) dôležité poznámky od vývojárskeho tímu!
- Ak ako zdroj CGM používate xDrip, musíte ho po aktualizácii znova vybrať kvôli interným zmenám.
- Na splnenie prvého cieľa môžete namiesto NS použiť Tidepool.
- Ak posielate dáta do xDrip+, musíte nastaviť plugin synchronizácie xDrip. Ak chcete v xDrip prijímať glykémie z AAPS, musíte ako zdroj vybrať „xDrip+ Sync Follower“
- Ak chcete prejsť na ovládač ComboV2, musíte odinštalovať Ruffy a pumpu znova spárovať s AAPS.
- Ak chcete používať plugin DynISF, musíte spustiť cieľ 11 (všetky predchádzajúce ciele musia byť dokončené, aby sa dal spustiť cieľ 11).


### Zmeny

- Ovládač pumpy EOPatch2 / GlucomenDay @jungsomyeonggithub @MilosKozak
- Ovládač pumpy ComboV2 (nepotrebuje Ruffy) @dv1
- Ovládač Medtrum Nano @jbr7rr
- Podpora kórejskej DanaI @MilosKozak
- Podpora CGM Glunovo @christinadamianou
- Podpora G7 @MilosKozak @rICTx-T1D @khskekec
- Plugin NSClient v3 @MilosKozak
- Podpora Tidepool @MilosKozak
- Plugin vyhladzovania @MilosKozak, @justmara, exponenciálne vyhladzovanie @nichi (Tsunami), priemerovacie vyhladzovanie @jbr7rr
- Plugin DynamicISF @Chris Wilson, @tim2000s
- Ciferník Garmin a podpora srdcového tepu @buessow
- Nové logo @thiagomsoares
- Nový ciferník @Philoul
- opravené veľké množstvo chýb z verzie 3.1
- poznámky je možné pridať na viacerých miestach @Sergey Zorchenko
- Opravy používateľského rozhrania @MilosKozak @osodebailar @Andries-Smit @yodax @Philoul @dv1 @paravoid
- nové SMS príkazy LOOP LGS/CLOSED @pzadroga
- preklady pre hodinky (Wear) @Andries-Smit
- komunikácia s xDrip presunutá do samostatného modulu @MilosKozak
- interné zmeny: aktualizované verzie knižníc, migrácia na rx3, nová štruktúra modulov @MilosKozak
- opravy ovládača Diaconn @miyeongkim
- viac možností údržby databázy @MilosKozak
- AAPSClient zobrazuje, či je hlavný telefón pripojený k nabíjačke @MilosKozak
- Zmena v bolusovej kalkulačke. Ak CGM nie je dostupné, percento sa ignoruje (t. j. použije sa 100 %).
- migrácia na zostavovací systém kts @MilosKozak
- vylepšená integrácia CI @MilosKozak @buessow
- upratanie testov @ryanhaining @MilosKozak
- nových 110 000+ riadkov kódu, zmenených 240 000 riadkov, 6884 zmenených súborov

(Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS)=
### Dôležité poznámky k používaniu API v3 a v1 pre Nightscout s AAPS

v1 je starý protokol na výmenu dát medzi webovou stránkou NS a serverom NS. Má veľa obmedzení
- v1 posiela iba 2 dni dát
- v1 posiela všetky dáta za 2 dni pri každom opätovnom pripojení
- using websockets is mandatory = permanent connection, more battery consumption
- pri častých výpadkoch spojenia s NS sa pripojenie pozastaví na 15 minút, aby sa zabránilo veľkej spotrebe dát

v3 je nový protokol. Bezpečnejší a efektívnejší
- pri používaní tokenov môžete lepšie určiť prístupové práva
- protokol je efektívnejší na oboch stranách (AAPS a NS)
- Dokáže z NS načítať dáta až za 3 mesiace
- you can choose to use or to not use websockets on every device (using means faster updates, not using means lower power consumption, but slower updates ie. minutes)
- NSClient sa pri výpadkoch spojenia nepozastavuje

OBMEDZENIA
- S AAPS 3.2 sa musí používať NS 15
- v3 nevidí aktualizácie urobené protokolom v1 (pravdepodobne to bude vyriešené v niektorej budúcej verzii NS)
- in the opposite direction, because of the old ineffective method of tracking changes, v1 sees changes done by v3
- pamätajte, že NS zatiaľ interne stále používa v1, preto ak používate v3, nie je možné zadávať dáta cez webové rozhranie NS. You must use AAPSClient or SMS if you want to enter data remotely

ODPORÚČANÉ NASTAVENIE
- kvôli všetkému uvedenému by ste si mali vybrať iba jednu metódu a používať ju na všetkých zariadeniach (pamätajte, že v čase písania tohto textu všetky ostatné nástroje na nahrávanie používajú v1). Ak sa rozhodnete prejsť na v3, vyberte v3 v AAPS aj vo všetkých AAPSClientoch
- v3 sa uprednostňuje kvôli efektivite
- či s v3 použijete websockety alebo nie, závisí od vašich preferencií
- DÔRAZNE sa odporúča nechať AAPS zbierať všetky dáta a potom ich nahrávať do NS ako jediný nástroj na nahrávanie. Všetky ostatné zariadenia/aplikácie by mali z NS iba čítať. Tým predídete konfliktom a chybám synchronizácie. To platí aj pre získavanie dát glykémie do NS pomocou konektora Dexcom Share atď.

(version3100)=

## Verzia 3.1.0

Dátum vydania: 19.07.2022

[Poznámky k vydaniu](https://github.com/nightscout/AndroidAPS/releases/tag/3.1.0)

## Verzia 3.0.0

Dátum vydania: 31.01.2022

[Poznámky k vydaniu](https://github.com/nightscout/AndroidAPS/releases/tag/3.0.0)

## Verzia 2.8.2

Dátum vydania: 23.01.2021

[Poznámky k vydaniu](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

(version-2811)= (important-hints-2-8-1-1)=

## Verzia 2.8.1.1

Dátum vydania: 12.01.2021

[Poznámky k vydaniu](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.1.1)

(Releasenotes-version-2-8-0)=

## Verzia 2.8.0

Dátum vydania: 01.01.2021

[Poznámky k vydaniu](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.0)

(Releasenotes-version-2-7-0)=

## Verzia 2.7.0

Dátum vydania: 24.09.2020

[Poznámky k vydaniu](https://github.com/nightscout/AndroidAPS/releases/tag/2.7.0)

(Releasenotes-version-2-6-1-4)=

## Verzia 2.6.1.4

Dátum vydania: 04.05.2020

[Poznámky k vydaniu](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2614)

## Verzia 2.6.1.3

Dátum vydania: 03.05.2020

[Poznámky k vydaniu](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2613)

## Verzia 2.6.1.2

Dátum vydania: 19.04.2020

[Poznámky k vydaniu](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2612)

## Verzia 2.6.1.1

Dátum vydania: 06.04.2020

[Poznámky k vydaniu](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2611)

## Verzia 2.6.1

Dátum vydania: 21.03.2020

[Poznámky k vydaniu](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-261)

(Releasenotes-version-2-6-0)=

## Verzia 2.6.0

Dátum vydania: 29.02.2020

[Poznámky k vydaniu](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-260)

## Verzia 2.5.1

Dátum vydania: 31.10.2019

[Poznámky k vydaniu](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-251)

(Releasenotes-version-2-5-0)=

## Verzia 2.5.0

Dátum vydania: 26.10.2019

[Poznámky k vydaniu](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-250)

## Verzia 2.3

Dátum vydania: 25.04.2019

[Poznámky k vydaniu](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-23)

## Verzia 2.2.2

Dátum vydania: 07.04.2019

[Poznámky k vydaniu](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-222)

## Verzia 2.2

Dátum vydania: 29.03.2019

[Poznámky k vydaniu](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-22)

## Verzia 2.1

Dátum vydania: 03.03.2019

[Poznámky k vydaniu](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-21)

## Verzia 2.0

Dátum vydania: 03.11.2018

[Poznámky k vydaniu](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-20)

## Verzia 1.0

```{admonition} First version of **AAPS**
:class: note

Prvá testovacia verzia vznikla v roku 2015 a prvé vydanie bolo v roku 2016.

Presná chronológia týchto vydaní momentálne nie je k dispozícii, ale keďže táto otázka zaznela už viackrát, uvádzame ju tu.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
