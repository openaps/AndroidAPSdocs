# Konfigurácia

V závislosti od vašich nastavení môžete otvoriť nástroj konfigurácia prostredníctvom karty v hornej časti **AAPS**' obrazovky alebo prostredníctvom hamburgerového menu.

![Open config builder](../images/ConfBuild_Open_AAPS30.png)

**Konfigurátor** je karta, kde si môžte nastaviť ktoré časti AAPS chcete používať a ktoré moduly chcete zapnúť alebo vypnúť podla potreby. Na obrázku nižšie vám políčka na ľavej strane (A) umožňujú vybrať, ktoré moduly chcete aktivovať. Pri otvorení konfigurátora sa jednotlivé sekcie zbalia, aby sa zobrazili iba aktívne pluginy. Kliknite na šípku (G) pre zobrazenie všetkých dostupných možností. Polia na pravej strane (C) umožňujú zobraziť aktívne moduly ako kartu (E) v **AAPS**. V prípade ak nezaškrtnete políčko na pravej strane, stále sa k danej funkcii dostanete cez hamburgerové menu (D) v ľavej hornej časti obrazovky. Pozrieť si to môžte v [záložky alebo Hamburgerové menu](#tab-or-hamburger-menu) nižšie.

Ak sú dostupné podrobnejšie nastavenia modulu, po kliknutí na ozubené koliesko (B) v blízkosti štvorčekov vpravo môžete tieto parametre modulu upraviť priamo v Nastaveniach.

![Config Builder boxes and cog wheel](../images/ConfBuild_ConfigBuilder.png)

(Config-Builder-tab-or-hamburger-menu)=

## Záložky alebo hamburgerové menu

Zaškrtávacím políčkom pod symbolom oka sa môžete rozhodnúť, ako otvoriť príslušnú časť programu.

![Záložky alebo hamburgerové menu](../images/ConfBuild_TabOrHH.png)

```{contents}
:backlinks: entry
:depth: 2
```

(ConfigBuilder_Profile)=

## Profil

Tento modul nie je možné deaktivovať, pretože je základnou časťou **AAPS**.

Základné informácie o tom, čo sa nachádza vo vašom **profile**, nájdete v časti [Váš profil AAPS](../SettingUpAaps/YourAapsProfile.md).

(Config-Builder-insulin)=

## Inzulín

![Insulin type](../images/ConfBuild_Insulin_AAPS30.png)

Vyberte typ inzulínu, ktorý používate.

Viac informácií k pochopeniu inzulínového profilu, ktorý sa používa v **AAPS** nájdete [tu](#AapsScreens-insulin-profile).

### Rozdiely v typoch inzulínu

* Možnosti „Rýchlo pôsobiaci Oref“, „Ultrarýchly Oref“, „Lyumjev“ a „Free-Peak Oref“ majú exponenciálny tvar.
* Pre „rýchlopôsobiaci“, „ultrarýchly“ a „Lyumjev“ je DIA jedinou premennou, ktorú si môžete sami upraviť, čas do dosiahnutia vrcholu je pevne stanovený. 
* Funkcia Free-Peak umožňuje nastaviť DIA a čas do dosiahnutia vrcholu a môžu ju používať iba pokročilí používatelia, ktorí poznajú účinky týchto nastavení. 
* [Graf inzulínovej krivky](#AapsScreens-insulin-profile) vám pomôže pochopiť rôzne krivky.

#### Rýchlo pôsobiaci - Oref

![Insulin type Rapid-Acting Oref](../images/ConfBuild_Insulin_RAO.png)

* odporúčané pre Humalog, Novolog a Novorapid
* DIA = aspoň 5.0 hodín
* Max. vrchol = 75 minút po injekcii (fixný, nenastaviteľný)

#### Ultra rýchly - Oref

![Insulin type Ultra-Rapid Oref](../images/ConfBuild_Insulin_URO.png)

* odporúčané pre FIASP
* DIA = aspoň 5.0 hodín
* Max. vrchol = 55 minút po injekcii (fixný, nenastaviteľný)

(Config-Builder-lyumjev)=

#### Lyumjev

![Insulin type Lyumjev](../images/ConfBuild_Insulin_L.png)

* Špeciálny inzulínový profil pre Lyumjev
* DIA = aspoň 5.0 hodín
* Max. vrchol = 45 minút po injekcii (fixný, nenastaviteľný)

#### Voliteľný vrchol Oref

![Insulin type Free Peak Oref](../images/ConfBuild_Insulin_FPO.png)

* Pomocou profilu „Free Peak 0ref“ si môžete nastaviť po akom čase má inzulín dosahovať vrchol účinku. Môžete tak urobiť v rozšírených nastavenia po kliknutí na ozubené koliesko.
* DIA sa automaticky nastaví na 5 hodín, ak to nieje uvedené vyššie v profile.
* Tento typ profilu sa odporúča, ak používate inzulín ktorý nieje priamo podporovaný AAPS alebo zmes rôznych inzulínov.

(Config-Builder-bg-source)=

## Zdroj glykémie

Vyberte zdroj glukózy v krvi, ktorý používate. Pre viac informácií kliknite na [Zdroj glykémie](../Getting-Started/CompatiblesCgms.md).

![Config Builder BG source](../images/ConfBuild_BG.png)

* [xDrip+](../CompatibleCgms/xDrip.md)
* [NSClient BG](../CompatibleCgms/CgmNightscoutUpload.md) – iba ak viete, čo robíte, pozrite si [Zdroj BG](../Getting-Started/CompatiblesCgms.md).
* [MM640g](../CompatibleCgms/MM640g.md)
* Glimp - only version 4.15.57 and newer are supported
* [Vytvorte si vlastnú aplikáciu Dexcom (BYODA)](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app).
* [Poctech](../CompatibleCgms/PocTech.md)
* Tomato App for MiaoMiao device
* [Aplikácia Glunovo](https://infinovo.com/) pre systém Glunovo CGM
* [Ottai](../CompatibleCgms/OttaiM8.md)
* [Syai Tag](../CompatibleCgms/SyaiTagX1.md)
* Náhodná glykémia: Generuje náhodné údaje o glykémii (iba v demo režime)

## Vyhladzovanie

![Vyhladzovanie](../images/ConfBuild_Smoothing.png)

Pozrite si časť [Vyhladzovanie údajov hladiny glukózy v krvi](../CompatibleCgms/SmoothingBloodGlucoseData.md).

(Config-Builder-pump)=

## Pumpa

Vyberte inzulínovú pumpu ktorú používate. Viac informácií nájdete na stránke [Kompatibilné pumpy](../Getting-Started/CompatiblePumps.md).

![](../images/ConfBuild_Pump_AAPS33.png) ![](../images/ConfBuild_Pump_AAPS33-2.png)

* [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)
* Dana R Korean (for domestic DanaR pump)
* Dana Rv2 (DanaR pump with unofficial firmware upgrade)
* [Dana-i/RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)
* [Accu Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)
* [Accu Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)
* Omnipod for [Omnipod Eros](../CompatiblePumps/OmnipodEros.md)
* Dash for [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md)
* [Medtronic](../CompatiblePumps/MedtronicPump.md)
* [Diaconn G8](../CompatiblePumps/DiaconnG8.md)
* [EOPatch2](../CompatiblePumps/EOPatch2.md)
* [Medtrum](../CompatiblePumps/MedtrumNano.md)
* [Equil 5.3](../CompatiblePumps/Equil5.3.md)
* Virtuálna pumpa: otvorená slučka – **AAPS** dáva návrhy ale nepodáva inzulín 
  * Keď začínate s **AAPS**, počas prvých [cieľov](../SettingUpAaps/CompletingTheObjectives.md)
  * Pre pumpu, ktorá ešte nieje priamo podporovaná AAPS

## Detekcia citlivosti

Vyberte akým spôsobom má byť zisťovaná vaša citlivosť na inzulín. Viac informácií o jednotlivých možnostiach nájdete [tu](../DailyLifeWithAaps/SensitivityDetectionAndCob.md). Táto funkcia priebežne analyzuje vaše dáta a upravuje parametre ak rozpozná, že reagujete na inzulín citlivejšie (alebo naopak, odolnejšie) ako obvykle. Viac podrobností o algoritme citlivosti nájdete v [dokumentácii OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

Citlivosť si môžete pozrieť na hlavnej obrazovke v [dodatočnom grafe](#AapsScreens-section-g-additional-graphs). Citlivosť si môžete zobraziť na domovskej obrazovke výberom možnosti SEN a sledovaním bielej čiary. Upozorňujeme, že musíte plniť [Cieľ 8](#objectives-objective8), aby detekcia citlivosti/[Autosens](#Open-APS-features-autosens) automaticky upravila množstvo podaného inzulínu. Pred dosiahnutím tohto cieľa sa percento Autosensu / čiara v grafe zobrazí len pre informáciu.

### Nastavenie vstrebávania sacharidov

Ak používate Oref1 s **SMB**, musíte zmeniť **min_5m_carbimpact** na 8. Hodnota sa používa iba počas chýbajúcich údajov **CGM** alebo keď fyzickou aktivitou „spálite“ nárast hladiny glukózy v krvi, ktorý by inak spôsobil rozklad COB v **AAPS**. V prípadoch, keď [absorpciu sacharidov](../DailyLifeWithAaps/CobCalculation.md) nemožno dynamicky vypočítať na základe reakcií vašej glykémie, systém do sacharidov vloží predvolený rozklad. V podstate je to niečo ako poistka.

(Config-Builder-aps)=

## APS

Zvoľte ktorý algoritmus má AAPS používať na prispôsobenie dávkovania vášho inzulínu. Detaily zvoleného algoritmu môžete zobraziť v záložke OpenAPS (OAPS).

* OpenAPS AMA 
  * Advanced Meal Assist: starší algoritmus sa už neodporúča.
  * Jednoducho povedané, výhody spočívajú v tom, že po podaní bolusu k jedlu môže systém rýchlejšie zvýšiť dávku inzulínu ak spoľahlivo zadáte počet sacharidov.
* [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb) 
  * Super Micro Bolus: most recent algorithm recommended for all users.
  * Na rozdiel od AMA, SMB nepoužíva na kontrolu hladiny glukózy dočasné bazálne dávky, ale hlavne malé **Super mikro bolusy**.
  * Poznámka: Odporúča sa používať tento algoritmus od začiatku, aj keď v skutočnosti nebudete dostávať SMB do [Cieľa 9](#objectives-objective9).

Ak prechádzate z algoritmu AMA na algoritmus SMB, je potrebné manuálne zmeniť hodnotu *min_5m_carbimpact* na **8** (predvolená hodnota pre SMB) v časti [Predvoľby > Detekcia citlivosti > Nastavenia citlivosti Oref1](../SettingUpAaps/Preferences.md).

## Uzavretý okruh

Tento modul by nemal byť deaktivovaný, pretože je základnou súčasťou **AAPS**.

## Obmedzenia

### Ciele

**AAPS** má vzdelávací program (sériu cieľov), ktoré musíte krok za krokom splniť. Toto by vás malo bezpečne previesť nastavením systému s uzavretou slučkou. Zaručuje, že ste všetko správne nastavili a rozumiete tomu, čo systém presne robí. Len tak môžete systému dôverovať.

Viac informácií nájdete na stránke [Ciele](../SettingUpAaps/CompletingTheObjectives.md).

## Synchronizácia

V tejto sekcii si môžete vybrať, či a kam chcete, aby **AAPS** odosielal vaše údaje.

### NSClient alebo NSClientV3

Môže sa použiť ako [reporting server](../SettingUpAaps/SettingUpTheReportingServer.md) a/alebo na [vzdialené monitorovanie](../RemoteFeatures/RemoteMonitoring.md), [vzdialené ovládanie](../RemoteFeatures/RemoteControl.md).

Pozrite si časť [Synchronizácia s reporting serverom](#SetupWizard-synchronization-with-the-reporting-server-and-more), ktorá vám pomôže vybrať si medzi NSClient (v1) a NSClientV3.

### Tidepool

Môže sa použiť ako [reporting server](../SettingUpAaps/SettingUpTheReportingServer.md).

Pozri [Tidepool](../SettingUpAaps/Tidepool.md).

### xDrip

Používa sa na **odosielanie** údajov, ako sú napríklad ošetrenia, do xDrip+.

### Open Humans

Pozri [Open Humans](../SupportingAaps/OpenHumans.md).

### Wear

Monitorujte a ovládajte **AAPS** pomocou hodiniek so systémom Android WearOS (pozri [stránku Ciferníky](../WearOS/WearOsSmartwatch.md)).

### Samsung Tizen

Odosielanie dát do Samsung aplikácie G-Watch Wear App (Tizen OS).

### Garmin

Pripojenie k zariadeniu Garmin (Fenix, Edge...)

## Ošetrenia

Ak si zobrazíte záložku Ošetrenie (Ošet), môžete vidieť ošetrenia ktoré boli nahraté do Nightscoutu. Ak chcete upraviť alebo odstrániť položku (napr. ste zjedli menej sacharidov, ako ste očakávali), vyberte možnosť „Odstrániť“ a zadajte novú hodnotu (v prípade potreby zmeňte čas) pomocou [tlačidla sacharidy na domovskej obrazovke](#screens-bolus-carbs).

## Všeobecne

### Prehľad

Toto je [hlavná obrazovka](#AapsScreens-the-homescreen) **AAPS** a nedá sa vypnúť.

#### Zobrazovať kolónku poznámky v dialógoch ošetrení

Vyberte, či chcete mať pri zadávaní ošetrení pole na poznámky alebo nie.

#### Indikátory stavu

Vyberte, či chcete mať v prehľade [stavové kontrolky](#Preferences-status-lights) zobrazené pre vek kanyly, vek inzulínu, vek senzora, vek batérie, hladinu v zásobníku alebo úroveň batérie. Keď sa dosiahne potrebná úroveň upozornenia, farba kontrolky sa zmení na žltú. Kritická hodnota sa zobrazí červenou farbou.

#### Pokročilé nastavenia

**Podanie len časti vypočítaného bolusu**: Pri používaní SMB si veľa ľudí nepodáva 100 % potrebného bolusu k jedlu, ale iba jeho časť (napr. 75 %) a zvyšok nechávajú na SMB s UAM (detekcia neohlásených jedál). V tomto nastavení si môžete vybrať predvolenú hodnotu pre percento, s ktorým má bolusová kalkulačka počítať. Ak je toto nastavenie 75 % a museli ste podať bolus 10 jednotiek, bolusová kalkulačka navrhne bolus k jedlu iba s hmotnosťou 7,5 jednotiek.

**Povolenie funkcie super bolusu v sprievodcovi** (líši sa od *super mikro bolusu*!): Používajte opatrne a neaktivujte ju, kým sa nenaučíte, čo skutočne robí. V podstate sa k bolusu pridá bazálna dávka na ďalšie dve hodiny a na ďalšie dve hodiny sa vypne bazál. **AAPS looping functions will be disabled - so use with care! Ak používate SMB v AAPS, funkcie budú deaktivované podľa vašich nastavení v časti [„Maximálny počet minút bazálu na obmedzenie SMB na“](#Open-APS-features-max-minutes-of-basal-to-limit-smb-to). Ak nepoužívate SMB, funkcie slučky budú deaktivované na dve hodiny.** Podrobnosti o super boluse nájdete [tu](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

(Config-Builder-actions)=

### Akcie

Karta kde máte viac tlačidiel na rôzne [akcie](#screens-action-tab) v **AAPS**.

### Automatizácia

Karta na správu vašich [Automatizácií](../DailyLifeWithAaps/Automations.md), počnúc [Cieľom 10](#objectives-objective10).

(Config-Builder-sms-communicator)=

### SMS komunikátor

Umožňuje vzdialene opatrovateľom ovládať niektoré funkcie **AAPS** prostredníctvom SMS, ďalšie informácie o nastavení nájdete v časti [SMS príkazy](../RemoteFeatures/SMSCommands.md).

### Jedlo

Zobrazuje predvoľby jedál definované v databáze jedál Nightscout, ďalšie informácie o nastavení nájdete v súbore [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods).

Poznámka: Záznamy nie je možné použiť v kalkulačke **AAPS**. (iba zobraziť)

(Config-Builder-wear)=

### Wear

Monitorujte a ovládajte AAPS pomocou hodiniek Android Wear (pozri [stránku Ciferníky](../WearOS/WearOsSmartwatch.md)). Pomocou nastavení (ozubené koleso) definujte, ktoré premenné by sa mali zohľadniť pri výpočte bolusu podávaného cez hodinky (napr. 15-minútový trend, COB...).

Ak chcete podať bolus atď. z hodiniek, potom v časti „Nastavenia Wear“ musíte povoliť „Ovládanie z hodiniek“.

![Nastavenie hodiniek](../images/ConfBuild_Wear.png)

Prostredníctvom karty wear alebo hamburgerovej ponuky (vľavo hore na obrazovke, ak karta nie je zobrazená) môžete

* Znovu odoslať všetky údaje. Môže to byť užitočné, ak hodinky neboli nejaký čas pripojené a chcete do nich preniesť informácie.
* Otvorte nastavenia na hodinkách priamo z telefónu.

### Údržba

Prejdite na túto kartu pre export/import nastavení.

### Konfigurácia

Táto aktuálna karta.