# Najčastejšie otázky používateľov APS

Ako pridať otázky do Častých otázok: Postupujte podľa týchto [pokynov](../SupportingAaps/HowToEditTheDocs.md)

## Všeobecne

### Môžem si jednoducho stiahnuť inštalačný súbor AAPS?

Nie. Pre AAPS neexistuje súbor APK na stiahnutie. Musíte si ju [zostaviť](../SettingUpAaps/BuildingAaps.md) sami. Tu je dôvod:

AAPS sa používa na ovládanie vašej pumpy a podávanie inzulínu. Podľa súčasných predpisov v Európe sú všetky systémy triedy IIa alebo IIb zdravotníckymi pomôckami, ktoré potrebujú regulačné schválenie (označenie CE), a to si vyžaduje rôzne štúdie a schválenia. Distribúcia neregulovaných zariadení je nezákonná. Podobné predpisy platia aj v iných častiach sveta.

Tento predpis sa netýka iba predaja (teda získania peňazí za niečo), ale každej distribúcie (aj bezplatného darovania). Zostaviť si zdravotnícku pomôcku sám pre seba je jediný spôsob, ako používať aplikáciu v súlade s týmito predpismi.

Preto nie sú súbory APK k dispozícii.

(FAQ-how-to-begin)=

### Ako začať?

Začnite stránkou [Príprava na štart s AAPS](../Getting-Started/PreparingForAaps.md): podrobnejšie vás prevedie všetkým, čo je uvedené nižšie.

V prvom rade potrebujete **hardvérové komponenty, ktoré sa dajú použiť v okruhu**:

* [Podporovaná inzulínová pumpa](../Getting-Started/CompatiblePumps.md), 
* [smartfón s Androidom](../Getting-Started/Phones.md) (Apple iOS AAPS nepodporuje – môžete si pozrieť [iOS Loop](https://loopkit.github.io/loopdocs/)) a
* [systém kontinuálneho monitorovania glukózy](../Getting-Started/CompatiblesCgms.md). 

Po druhé, musíte **nastaviť softvérové komponenty**: [AAPS](../SettingUpAaps/BuildingAaps.md), [zdroj CGM/FGM](../Getting-Started/CompatiblesCgms.md) a [reportovací server](../SettingUpAaps/SettingUpTheReportingServer.md).

Po tretie, musíte sa naučiť a **porozumieť OpenAPS reference design, aby ste mohli skontrolovať svoje parametre liečby**. Základným princípom uzavretého okruhu je, že vaša [bazálna dávka a sacharidový pomer](../SettingUpAaps/YourAapsProfile.md) sú presné. Všetky odporúčania predpokladajú, že vaše bazálne potreby sú pokryté a že vzostupy alebo poklesy, ktoré vidíte, sú dôsledkom iných faktorov, a preto si vyžadujú jednorazové úpravy (pohyb, stres atď.). Úpravy, ktoré môže uzavretý okruh z bezpečnostných dôvodov urobiť, sú obmedzené (pozrite maximálny povolený dočasný bazál v [OpenAPS Reference Design](https://openaps.org/reference-design/)). Preto nechcete míňať povolené dávkovanie na opravu nesprávneho základného bazálu. Ak napríklad pred jedlom často dochádza k nízkym dočasným bazálom, je pravdepodobné, že treba upraviť bazál. Pomocou [Autotune](#autotune-how-autotune-calculates-adjustments) môžete vyhodnotiť veľké množstvo dát a získať návrh, či a ako treba upraviť bazály a/alebo ISF, a tiež či treba zmeniť sacharidový pomer. Alebo si môžete bazál otestovať a nastaviť [tradičným spôsobom](https://integrateddiabetes.com/basal-testing/).

### Aké praktické otázky prináša používanie okruhu?

#### Ochrana heslom

Ak nechcete, aby sa vaše nastavenia dali ľahko zmeniť, môžete ich chrániť heslom, PIN kódom alebo biometrickým overením telefónu (odtlačok prsta, tvár). Otvorte **Nastavenia** > **Ochrana** > **Ochrana nastavení** a zvoľte typ ochrany. Na tom istom mieste môžete chrániť aj celú aplikáciu alebo iba bolusy. Podrobnosti nájdete v časti [Ochrana nastavení](#Preferences-settings-protection).

#### Inteligentné hodinky s Android Wear

Ak cez aplikáciu AAPS v hodinkách podávate bolus alebo meníte nastavenia, každú požiadavku musíte potvrdiť na hodinkách: po odoslaní hodinky zobrazia súhrn s tlačidlom **POTVRDIŤ**. Pozrite [Ovládanie AAPS pomocou inteligentných hodiniek s Wear OS](../RemoteFeatures/RemoteControlWearOS.md).

(FAQ-disconnect-pump)=

#### Odpojenie pumpy

Ak si pumpu odpojíte kvôli sprchovaniu, kúpaniu, plávaniu, športu alebo iným aktivitám, musíte AAPS oznámiť, že sa nepodáva žiadny inzulín, aby bol IOB správny.

Pumpu môžete odpojiť pomocou [ikony okruhu](#AapsScreens-loop-status) na hlavnej obrazovke AAPS: stlačte ju a zvoľte **Odpojiť pumpu** s potrebným trvaním. Ak aktivita trvá dlhšie, než ste plánovali, stlačte ikonu znova a zvoľte nové trvanie: pumpu nemusíte najprv znova pripojiť. Ako predísť nedostatku inzulínu pri dlhom odpojení, nájdete v časti [Odpojenie pumpy pri sprchovaní alebo aktivite](#pumps-cannulas-disconnecting).

#### Odporúčania nie sú založené iba na jednej hodnote z CGM

Z bezpečnostných dôvodov sa odporúčania nezakladajú na jednej hodnote z CGM, ale na priemernom rozdiele (delta). Ak preto chýbajú niektoré hodnoty, môže chvíľu trvať, kým AAPS po obnovení dát znova začne riadiť okruh.

#### Ďalšie čítanie

Existuje niekoľko blogov s dobrými tipmi, ktoré vám pomôžu pochopiť praktickú stránku používania okruhu. Niektoré z nich už nie sú online: odkazy nižšie označené „archivovaná kópia“ otvoria uloženú kópiu v Internet Archive.

    * [Jemné ladenie nastavení](https://web.archive.org/web/20171029031305/http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM (archivovaná kópia)
    * [Prečo na DIA záleží](https://web.archive.org/web/20231130035027/http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM (archivovaná kópia)
    * [Obmedzenie vzostupov po jedle](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
    * [Hormóny a autosens](https://web.archive.org/web/20170902081839/http://seemycgm.com/2017/06/06/hormones-2/) See my CGM (archivovaná kópia)
    

(what-emergency-equipment-is-recommended-to-take-with-me)= (FAQ-emergency-equipment)=

### Aké núdzové vybavenie sa odporúča nosiť so sebou?

Musíte mať so sebou rovnaké núdzové vybavenie ako každý iný človek s diabetom 1. typu liečený inzulínovou pumpou. Pri používaní okruhu s AAPS sa dôrazne odporúča mať pri sebe alebo nablízku toto ďalšie vybavenie:

* Powerbanka a káble na nabíjanie smartfónu, hodiniek a (ak treba) BT čítačky alebo zariadenia Link
* Batérie do pumpy
* Prístup k zálohám v telefóne aj v cloude (napr. Disk Google, Dropbox), aby ste mohli AAPS znova nastaviť na inom telefóne (pozrite [Vytváranie a obnova záloh](../Maintenance/ExportImportSettings.md)): 
  * aktuálny [súbor APK](../SettingUpAaps/BuildingAaps.md) AAPS a všetkých ďalších aplikácií, ktoré používate (napr. xDrip, Juggluco, BYODA).
  * váš súbor úložiska kľúčov (zo zostavenia APK) a jeho heslo,
  * vaše najnovšie súbory exportu nastavení z AAPS a z ďalších aplikácií,
  * vaše hlavné heslo **AAPS**: bez neho nemôžete importovať súbor s nastaveniami.

(FAQ-organize-backups)=

#### Ako mám usporiadať zálohy?

Nastavenia exportujte veľmi pravidelne: po každej výmene podu alebo zásobníka, po úprave profilu, po splnení cieľa, pri výmene pumpy… Aj keď sa nič nezmení, exportujte raz za mesiac. Uchovávajte niekoľko starších súborov exportu.

**AAPS** to môže urobiť za vás: dokáže nastavenia exportovať automaticky (napríklad pomocou [Automatizácie](#ExportImportSettings-Automating-Settings-Export) po každej výmene podu) a export uložiť priamo do cloudového priečinka (Disk Google). Pozrite [Vytváranie a obnova záloh](../Maintenance/ExportImportSettings.md).

### Ako bezpečne a spoľahlivo pripevniť CGM/FGM?

Môžete ho prelepiť páskou. Pre bežné systémy CGM sú k dispozícii vopred perforované krycie náplasti („overpatches“) (hľadajte na Google, eBay alebo Amazon). Niektorí používatelia okruhu používajú lacnejšiu štandardnú kineziologickú pásku alebo rocktape.

Môžete ho upevniť. Môžete si kúpiť aj pásky na rameno, ktoré CGM/FGM upevnia (hľadajte na Google, eBay alebo Amazon).

## Algoritmus APS

### Prečo OpenAPS AMA zobrazuje „dia: 3“, aj keď mám v profile iné DIA?

Keď je v **Konfigurácia** > **APS** zvolený **OpenAPS AMA**, **Otvoriť plugin** zobrazí dáta odoslané algoritmu. V jeho časti **Profil** je `dia` vždy 3.0 alebo menej:

![Obrazovka pluginu OpenAPS AMA s dia 3.0 v dátach profilu](../images/screens/openaps_ama_plugin.png)

V AMA neznamená DIA v skutočnosti „dobu pôsobenia inzulínu“. Je to parameter, ktorý býval prepojený s DIA. Teraz znamená „za aký čas má byť korekcia dokončená“. Nemá to nič spoločné s výpočtom IOB. V OpenAPS SMB už tento parameter nie je potrebný.

## Ďalšie nastavenia

### Nastavenia Nightscout

(FAQ-nsclient-blocked)=

#### AAPSClient (alebo AAPS) nenahráva dáta: „Blokované…“. Čo môžem urobiť?

Stav NSClient ukazuje, prečo sa neodosielajú žiadne dáta:

* **Blokované nastaveniami pripojenia**: nastavenia pripojenia nepovoľujú aktuálne pripojenie. Napríklad používate mobilné dáta, ale povolená je iba Wi-Fi, alebo nie ste pripojení k žiadnej z povolených sietí Wi-Fi (SSID).
* **Blokované nastaveniami nabíjania**: nastavenia pripojenia povoľujú synchronizáciu iba počas nabíjania telefónu (alebo iba pri napájaní z batérie) a teraz to tak nie je.
* **Žiadne pripojenie**: telefón nemá pripojenie na internet.

Skontrolujte [nastavenia pripojenia NSClient](#Preferences-nsclient): **Použiť mobilné dáta**, **Použiť roaming**, **Použiť WiFi**, **WiFi SSID**, **Synchronizovať pri napájaní z batérie** a **Synchronizovať pri nabíjaní**.

### Nastavenia CGM

(FAQ-advanced-filtering)=

#### Prečo AAPS hlási „SMB vždy a po jedle zakázané, pretože zdroj glykémie nepodporuje rozšírené filtrovanie“?

**Vždy povoliť SMB** a **Povoliť SMB po jedle** sa dajú použiť iba s [dôveryhodným zdrojom dát glykémie](#GettingStarted-TrustedBGSource): senzorom a aplikáciou CGM, ktorá dokáže **AAPS** oznámiť, z ktorého senzora hodnoty pochádzajú. Pri akomkoľvek inom zdroji glykémie **AAPS** tieto dve možnosti vypne a zobrazí túto správu. Skontrolujte zoznam dôveryhodných zdrojov a ak je v ňom váš senzor, uistite sa, že používate jednu z aplikácií CGM, ktoré sú preň uvedené. Pozrite aj [Vyhladzovanie údajov glykémie](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Pumpa

#### Batérie

Používanie okruhu môže vybíjať batériu pumpy rýchlejšie ako bežné používanie, pretože systém komunikuje cez Bluetooth oveľa viac ako používateľ, ktorý pumpu ovláda ručne. Batériu je najlepšie vymeniť pri 25 %, pretože potom začína byť komunikácia problematická. Varovné alarmy pre batériu pumpy si môžete nastaviť pomocou premennej PUMP_WARN_BATT_P na vašej stránke Nightscout. Spôsoby, ako predĺžiť výdrž batérie:

* skráťte čas, počas ktorého zostáva LCD displej zapnutý (v ponuke nastavení pumpy)
* skráťte čas, počas ktorého zostáva zapnuté podsvietenie (v ponuke nastavení pumpy)
* v nastaveniach upozornení zvoľte pípnutie namiesto vibrácií (v ponuke nastavení pumpy)
* tlačidlá na pumpe stláčajte iba pri plnení; na zobrazenie celej histórie, stavu batérie a objemu zásobníka používajte AAPS.
* Aplikácia AAPS môže byť na niektorých telefónoch často zatváraná, aby sa šetrila energia alebo uvoľnila pamäť RAM. Keď sa AAPS pri každom spustení znova inicializuje, nadviaže s pumpou spojenie cez Bluetooth a znova načíta aktuálnu bazálnu dávku a históriu bolusov. Spotrebúva to batériu. Ak to chcete overiť, zapnite **Zaznamenávať spustenie aplikácie** v **Rozšírených nastaveniach** NSClient: Nightscout dostane udalosť pri každom reštarte AAPS, takže problém ľahko sledujete. Aby sa to stávalo menej, vypnite pre AAPS optimalizáciu batérie, aby ho telefón prestal zatvárať: pozrite [úspora batérie](#FAQ-battery-savings) nižšie.
* očistite kontakty batérie alkoholovým tampónom, aby na nich nezostal žiadny výrobný vosk ani mazivo.
* pri [pumpách Dana R/RS](../CompatiblePumps/DanaRS-Insulin-Pump.md) postup pri spustení zámerne zaťaží batériu vysokým prúdom, aby sa prerušil pasivačný film (ten bráni strate energie počas skladovania), ale nie vždy sa ho podarí prerušiť na 100 %. Batériu buď 2- až 3-krát vyberte a znova vložte, kým displej neukáže 100 %, alebo ju pred vložením na zlomok sekundy krátko skratujte kľúčom na batériu, ktorý priložíte na oba kontakty.
* pozrite aj ďalšie tipy pre [konkrétne typy batérií](#Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)

#### Výmena zásobníka a kanyly

Zásobník sa musí vymeniť priamo na pumpe a potom sa výmena zaznamená v **AAPS**. Postupujte krok za krokom podľa [návodu na výmenu zásobníka a kanyly pumpy](#pumps-cannulas-changing-reservoir-and-cannula).

### Tapeta

Tapetu AAPS pre váš telefón nájdete na [stránke o telefónoch](#Phones-phone-wallpaper).

### Každodenné používanie

Mnohé z nasledujúcich situácií si môžete raz pripraviť ako [scénu](#scenes): predvoľbu, ktorá jedným ťuknutím prepne profil, dočasný cieľ a ďalšie nastavenia. **AAPS** ponúka hotové šablóny, napríklad *Cvičenie*, *Spánok*, *Alkohol* alebo *Kúpanie*.

#### Hygiena

(what-to-do-when-taking-a-shower-or-bath)=

##### Čo robiť pri sprchovaní alebo kúpaní?

Počas sprchovania alebo kúpania si pumpu môžete odpojiť. Na tento krátky čas ju možno nepotrebujete, ale mali by ste AAPS oznámiť, že ste ju odpojili, aby bol výpočet IOB správny. Pozrite [popis vyššie](#FAQ-disconnect-pump). Šablóna [scény](#scenes) *Kúpanie* to urobí za vás.

#### Práca

Podľa toho, akú máte prácu, môžete v pracovné dni používať iné nastavenia liečby. Ako používateľ okruhu by ste mali zvážiť [prepnutie profilu](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) pre váš bežný pracovný deň. Napríklad môžete prepnúť na profil vyšší ako 100 %, ak máte menej náročnú prácu (napr. sedíte za stolom), alebo nižší ako 100 %, ak ste aktívni a celý deň na nohách. You could also consider a high or low temporary target or a [time shift of your profile](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) when working much earlier or later than regular, or if you work different shifts. Môžete si vytvoriť aj druhý profil (napr. „doma“ a „pracovný deň“) a každý deň prepnúť na profil, ktorý práve potrebujete, alebo si nastavenia pre pracovný deň uložiť ako [scénu](#scenes).

### Voľnočasové aktivity

(FAQ-sports)=

#### Šport

Svoje staré športové návyky z čias pred okruhom musíte prepracovať. Ak jednoducho zjete jednu alebo viac porcií „športových“ sacharidov ako predtým, uzavretý okruh ich rozpozná a podľa toho ich bude korigovať.

Budete teda mať viac aktívnych sacharidov, ale okruh bude zároveň pôsobiť proti nim a podá inzulín.

Pri používaní okruhu skúste tieto kroky:

* Urobte [prepnutie profilu](#ProfileSwitch-change-percentage) < 100 %: ťuknite na názov profilu na hlavnej obrazovke, ťuknite na okrúhle tlačidlo **▶** a potom nastavte **Percento** a **Trvanie**.
* Nastavte [dočasný cieľ Aktivita](#TempTargets-activity-temp-target) nad váš štandardný cieľ. Pri percente pod 100 % a zadanom trvaní ponúka tá istá obrazovka **Aktivovať** prepínač **Dočasný cieľ / Aktivita**, ktorý spustí oboje naraz.
* Ak používate SMB, uistite sa, že [„Povoliť SMB s vysokými dočasnými cieľmi“](#Open-APS-features-enable-smb-with-high-temp-targets) a [„Vždy povoliť SMB“](#Open-APS-features-enable-smb-always) sú vypnuté.

Dôležité je správne načasovať tieto nastavenia pred športom aj po ňom. Zmeny urobte včas pred športom a myslite na vplyv dopĺňania zásob vo svaloch.

Šablóny [scén](#scenes) *Cvičenie* a *Noc po cvičení* obsahujú tieto nastavenia, takže ich môžete spustiť jedným ťuknutím. Ak športujete pravidelne v rovnakom čase (napr. skupinové cvičenie vo fitku), môžete zvážiť [automatizáciu](../DailyLifeWithAaps/Automations.md), ktorá spustí prepnutie profilu a DC alebo scénu. Dobrým nápadom môže byť aj automatizácia podľa polohy, ale prípravu vopred to sťažuje.

Percento prepnutia profilu, hodnota dočasného cieľa pre aktivitu a najlepší čas na zmeny sú individuálne. Ak hľadáte správnu hodnotu pre seba, začnite na bezpečnej strane (s nižším percentom a vyšším DC).

#### Sex

Pumpu si môžete odpojiť, aby ste boli „voľní“, ale mali by ste to oznámiť AAPS, aby bol výpočet IOB správny. Pozrite [popis vyššie](#FAQ-disconnect-pump).

#### Pitie alkoholu

Pitie alkoholu je v režime uzavretého okruhu riskantné, pretože algoritmus nedokáže správne predpovedať glykémiu ovplyvnenú alkoholom. Musíte si vyskúšať vlastný spôsob, ako to riešiť, pomocou týchto funkcií v AAPS:

* Vypnúť uzavretý okruh a liečiť diabetes ručne alebo
* nastaviť vysoké dočasné ciele a vypnúť UAM, aby okruh nezvyšoval IOB kvôli neohlásenému jedlu, alebo
* urobte [prepnutie profilu](#ProfileSwitch-change-percentage) na výrazne menej ako 100 % 

Šablóna [scény](#scenes) *Alkohol* je východiskový bod, ktorý si môžete prispôsobiť vlastnému postupu.

Keď pijete alkohol, musíte stále sledovať CGM, aby ste ručne predišli hypoglykémii tým, že zjete sacharidy.

#### Spánok

##### Ako používať okruh v noci bez mobilného a Wi-Fi žiarenia?

Mnoho používateľov si na noc prepína telefón do režimu v lietadle. Ak chcete, aby vám okruh pomáhal počas spánku, postupujte takto (funguje to iba vtedy, ak vaša aplikácia CGM beží na tom istom telefóne ako AAPS, napríklad xDrip, Juggluco alebo BYODA; NEBUDE to fungovať, ak hodnoty glykémie dostávate cez Nightscout):

1. Zapnite v mobile režim v lietadle.
2. Počkajte, kým sa režim v lietadle zapne.
3. Zapnite Bluetooth.

Vtedy neprijímate hovory a nie ste ani pripojení na internet. Okruh však stále beží.

Niektorí ľudia zistili problémy s lokálnym vysielaním (AAPS nedostáva hodnoty glykémie z xDrip), keď je telefón v režime v lietadle. V xDrip prejdite do Settings > Inter-app settings > Identify receiver a zadajte `info.nightscout.androidaps`.

![xDrip Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

Ak chcete v noci iné nastavenia (napríklad vyšší cieľ), dobrým východiskom je šablóna [scény](#scenes) *Spánok*.

#### Cestovanie

##### Ako sa vysporiadať so zmenami časových pásiem?

Pri pumpách Dana R a Dana R Korean nemusíte robiť nič. Pre ostatné pumpy nájdete podrobnosti na stránke [Zmena časového pásma a letný čas](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

### Lekárske témy

#### Hospitalizácia

Ak chcete poskytnúť lekárom informácie o AAPS a DIY okruhu, môžete im vytlačiť [príručku AAPS pre lekárov](../UsefulLinks/ClinicianGuideToAaps.md).

#### Kontrola u vášho diabetológa

##### Reporty

Môžete ukázať svoje reporty z Nightscoutu (https://YOUR-NS-SITE.com/report) alebo použiť [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).

## Časté otázky na Discorde a odpovede na ne...

### Môj problém tu nie je uvedený.

Pozrite [Kde získať pomoc](../GettingHelp/WhereCanIGetHelp.md). Ak ste riešenie našli sami, **pripomeňte nám, aby sme ho pridali do tohto zoznamu!**

### Zostavenie a inštalácia

(FAQ-build-errors)=

#### Mám problémy a chyby pri zostavení aplikácie.

Pozrite si stránku riešenia problémov pre spôsob, akým zostavujete **AAPS** (pozrite [Zostavenie AAPS](../SettingUpAaps/BuildingAaps.md)):

* zostavenie v prehliadači: [Zostavenie v prehliadači: riešenie problémov](#aaps-ci-troubleshooting),
* zostavenie v Android Studiu: [Riešenie problémov s Android Studiom](../GettingHelp/TroubleshootingAndroidStudio.md).

(FAQ-build-error-file-name-too-long)=

#### Chyba zostavenia: file name too long (príliš dlhý názov súboru)

Táto chyba sa môže vyskytnúť pri zostavení v Android Studiu: zostavenie sa zastaví s chybou, že názov súboru je príliš dlhý. Možné riešenia: Presuňte zdrojové súbory do priečinka bližšie ku koreňovému priečinku disku (napr. „C:\src\AndroidAPS“).

V Android Studiu: Uistite sa, že po otvorení projektu a stiahnutí zmien z GitHubu (pull) „Gradle“ dokončil synchronizáciu a indexovanie. Spustite Build->Clean Project a až potom Rebuild Project. Spustite File->Invalidate Caches a reštartujte Android Studio.

(FAQ-running-dev-version)=

#### Výstraha: Bežiaca vývojárska verzia. Uzavretý okruh je zakázaný

**AAPS** zobrazí túto správu, keď používate vývojársku (dev) verziu bez Engineering Mode (vývojárskeho režimu): vo vývojárskej verzii funguje uzavretý okruh iba v Engineering Mode.

Vývojárska verzia je určená na testovanie, nie na skutočné používanie okruhu: skôr než budete pokračovať, prečítajte si [Vývojová vetva](../AdvancedOptions/DevBranch.md).

Ako zapnúť Engineering Mode:

1. Do podpriečinka `extra` vo vašom AAPS priečinku (priečinok, ktorý ste zvolili v sprievodcovi nastavením, zvyčajne `AAPS/extra`) vložte súbor s názvom `engineering_mode`. Poslúži akýkoľvek súbor, ak má správny názov.
2. Reštartujte **AAPS**, aby súbor našiel.

Tip: Urobte kópiu existujúceho log súboru a premenujte ju na „engineering_mode“ (pozor: bez prípony súboru!).

### Ciele

#### Zasekol som sa na jednom cieli a potrebujem pomoc.

Najprv si prečítajte [Plnenie cieľov](../SettingUpAaps/CompletingTheObjectives.md). Ak sa stále neviete pohnúť, urobte snímku obrazovky s otázkou a odpoveďami a pošlite ju na kanál AAPS na Discorde. Nezabudnite uviesť, ktoré možnosti ste zvolili (alebo nezvolili) a prečo. Dostanete rady a pomoc, ale odpovede musíte nájsť sami.

### Nastavenia, heslá a zálohy

(FAQ-reset-master-password)=

#### Ako resetovať hlavné heslo?

Ak ste zabudli hlavné heslo, môžete ho resetovať na sériové číslo vašej pumpy:

1. V podpriečinku `extra` vášho AAPS priečinka (zvyčajne `AAPS/extra`) vytvorte prázdny súbor s názvom `PasswordReset` (bez prípony).
2. Reštartujte **AAPS**. Pumpa musí byť pripojená: **AAPS** zobrazí „Čakanie na pumpu…“ a do 30 sekúnd musí načítať sériové číslo pumpy.
3. **AAPS** zobrazí „Heslo nastavené!“: vaše hlavné heslo je teraz **sériové číslo pumpy**. Súbor `PasswordReset` sa automaticky vymaže.
4. Otvorte **Nastavenia** > **Ochrana** > **Hlavné heslo** a nastavte nové heslo.

Ak sa pumpu nepodarí včas zastihnúť, nič sa nezmení: skontrolujte pripojenie pumpy a skúste to znova.

Tým sa resetuje iba hlavné heslo. Heslo alebo PIN pre nastavenia, aplikáciu alebo bolus sa neresetuje, ale namiesto nich môžete vždy použiť hlavné heslo.

    {admonition} Staré súbory s nastaveniami
    :class: warning
    Súbory s nastaveniami exportované so starým hlavným heslom sa dajú importovať iba s týmto starým heslom.

(FAQ-where-are-settings-files)=

#### Kde nájdem súbory s nastaveniami?

Súbory s nastaveniami sú uložené v podpriečinku `preferences` AAPS priečinka, ktorý ste zvolili v [sprievodcovi nastavením](#SetupWizard-StoragePermission) (napríklad `/internal storage/AAPS/preferences`). Ak ste si nastavili cloudový priečinok (Disk Google), exporty sa môžu ukladať aj tam. Pozrite [Vytváranie a obnova záloh](../Maintenance/ExportImportSettings.md).

UPOZORNENIE: Heslo nestraťte, pretože bez neho nebudete môcť importovať zašifrovaný súbor s nastaveniami!

(FAQ-import-settings-earlier-versions)=

#### Ako importovať nastavenia zo starších verzií AAPS do AAPS v3 alebo v4?

Do AAPS v3 alebo v4 môžete importovať iba nastavenia, ktoré boli exportované v AAPS v2.8x alebo novšom. Ak ste používali verziu AAPS staršiu ako v2.8x alebo potrebujete použiť exporty nastavení staršie ako v2.8x, musíte najprv nainštalovať AAPS v2.8. Importujte staršie nastavenia z v2.x do v2.8. Keď overíte, že je všetko v poriadku, exportujte nastavenia z v2.8. Nainštalujte aktuálnu verziu AAPS a importujte do nej nastavenia z v2.8.

Ak na zostavenie starej aj novej verzie použijete ten istý kľúč, nastavenia nebudete musieť ani importovať. Novú verziu môžete nainštalovať cez starú.

Pribudli nové ciele. Budete ich musieť splniť.

(FAQ-delete-treatments)=

#### Kde môžem vymazať ošetrenia?

Otvorte **ponuku** (☰) a zvoľte **História ošetrení**. Dlhým podržaním záznam označte, v prípade potreby ťuknite na ďalšie záznamy, potom ťuknite na ikonu **koša** a potvrďte. Pozrite [História ošetrení](#aaps-screens-treatments).

### Problémy s telefónom a pripojením

(FAQ-aaps-stops)=

#### AAPS sa každý deň zastaví približne v rovnakom čase.

* Google Play Protect môže na niektorých telefónoch každé ráno vypnúť **AAPS**. Ak sa to stane, prejdite do možností Google Play a vypnite **Google Play Protect**.
* Skontrolujte, či nemáte „čistiace“ aplikácie (napr. CCleaner atď.), a odinštalujte ich.
* Vypnite pre **AAPS** všetky optimalizácie batérie (pozrite [úspora batérie](#FAQ-battery-savings) nižšie).

(FAQ-battery-savings)=

#### Ako nastaviť úsporu batérie?

Keď telefón nepoužívate, môže pozastaviť **AAPS** a súvisiace aplikácie (aplikáciu CGM, Bluetooth). **AAPS** potom nemôže robiť svoju prácu a spojenia Bluetooth so senzorom a pumpou (alebo RileyLinkom) sa môžu prerušiť. To spôsobuje výstrahy „Pumpa nedostupná“ a chyby komunikácie.

Vypnite optimalizáciu batérie pre **AAPS**, vašu aplikáciu CGM (napr. xDrip) a systémovú aplikáciu Bluetooth. Postup závisí od značky a modelu telefónu a verzie Androidu:

* pre telefóny Pixel, Samsung a Huawei pozrite [Optimalizácia batérie](#generaltroubleshooting-android-related-issues),
* v **AAPS** otvorte **ponuku** (☰) > **O aplikácii** a ťuknite na **Nepotláčať moju aplikáciu?**, alebo pre iné značky navštívte [Don't kill my app](https://dontkillmyapp.com/).

Ak si nie ste istí, či problém spôsobuje úspora batérie, môžete v telefóne dočasne vypnúť všetky úspory batérie: batéria sa bude vybíjať rýchlejšie, ale rýchlo uvidíte, či problém zmizne.

(FAQ-pump-unreachable-alerts)=

#### Výstrahy „Pumpa nedostupná“ niekoľkokrát za deň alebo v noci.

Telefón môže pozastavovať **AAPS** alebo dokonca Bluetooth, a tak sa stratí spojenie s pumpou alebo RileyLinkom (pozrite [úspora batérie](#FAQ-battery-savings) vyššie).

Môžete tiež zmeniť, kedy sa výstraha spustí: stlačte ikonu **Nastavenia** (ozubené koliesko) vpravo hore na hlavnej obrazovke a potom zvoľte **Lokálne výstrahy** > **Prah nedostupnosti pumpy** (30 až 300 minút). Pozrite si stránku vašej pumpy: niektoré odporúčajú hodnotu, napr. 120 minút pre [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md).

(FAQ-link-unresponsive)=

#### Moje zariadenie Link/pumpa/pod nereaguje (RL/OL/EmaLink…)

Pri niektorých telefónoch sa Bluetooth odpája od zariadení Link (RL/OL/EmaL...).

Niektoré majú aj nereagujúce zariadenia Link (AAPS hlási, že sú pripojené, ale Link nedokáže pumpu zastihnúť ani ovládať.)

Najprv skúste tlačidlo **Resetovať RileyLink** na obrazovke pumpy (pozrite stránku vašej pumpy: [Medtronic](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump), [Omnipod Eros](#OmnipodEros-reset-rileylink-config-notes)). Ak to nepomôže, najjednoduchší spôsob, ako všetky tieto časti znova uviesť do spoločnej činnosti, je:

1. Vypnite Link.
2. Ukončite **AAPS** (**ponuka** (☰) > **Ukončiť**).
3. Dlho podržte ikonu **AAPS**, otvorte v Androide **Informácie o aplikácii** (App info), ťuknite na **Vynútiť zastavenie** (Force stop) a potom na **Úložisko** (Storage) > **Vymazať vyrovnávaciu pamäť** (Clear cache) (NEMAŽTE úložisko/dáta!).
4. Zriedkavo môžu niektoré telefóny v tomto kroku potrebovať reštart. Môžete to skúsiť bez reštartu.
5. Zapnite Link.
6. Spustite **AAPS**.
7. Na obrazovke pumpy ťuknite na **Spárovať RileyLink** a znova zvoľte váš Link.

### Vzdialené ovládanie

(FAQ-aapsclient)=

#### Nastavenie a používanie vzdialenej aplikácie AAPSClient

**AAPSClient** je samostatná aplikácia, ktorá opatrovateľovi umožňuje na diaľku sledovať a ovládať **AAPS**. Od **AAPS** v4 vyžaduje ovládanie **AAPS** z AAPSClient jednorazové spárovanie oboch aplikácií. Pozrite:

* [Aplikácia AAPSClient](#aapsclient-app): inštalácia, prvé spustenie a spárovanie,
* [Ovládanie Master ↔ Client](#client-master-control): čo sa dá ovládať a ako funguje spárovanie,
* [AAPSClient na inteligentných hodinkách](#remotecontrol-smartwatches).

(FAQ-hardened-mode)=

#### Ošetrenia, ktoré zadám na webovej stránke Nightscout, sa nepoužijú

To je [režim zvýšeného zabezpečenia](#client-master-control-hardened-mode). Kým je zapnuté ovládanie z klienta (v Jednoduchom móde vždy), **AAPS** prijíma zmeny iba zo spárovaných klientov, nie z webovej stránky Nightscout ani z iných aplikácií. Zadávajte ich namiesto toho v spárovanom **AAPSClient**.

### Výstrahy a varovania

#### Mám červený varovný odznak (červený trojuholník) / AAPS nezapne uzavretý okruh / Okruh zostáva v LGS / Mal som žltý trojuholník

Červený varovný odznak na skratke zdroja glykémie je bezpečnostná funkcia AAPS. Úplné vysvetlenie nájdete v časti [Varovný znak glykémie](#aaps-screens-bg-warning-sign).

Červený varovný odznak na skratke zdroja glykémie v dolnej lište (v starších verziách červený trojuholník) znamená, že máte duplicitné glykémie a AAPS nedokáže presne vypočítať rozdiely (delty). Uzavretý okruh sa prepne do režimu **Ochrana pred nízkou glykémiou**: stále znižuje alebo pozastavuje bazál, aby vás chránil pred hypoglykémiou, ale nepodáva žiadny korekčný inzulín. Aby varovanie zmizlo, musíte z každej duplicitnej hodnoty vymazať jednu glykémiu. Ťuknutím na skratku otvorte [obrazovku zdroja glykémie](#aaps-screens-bg-source): duplicitná hodnota je zvýraznená červenou. Dlho podržte jeden riadok, ktorý chcete vymazať, označte po jednom z každej dvojice zdvojených riadkov a ťuknite na ikonu koša. Ak je v databáze príliš veľa duplicitných glykémií, možno budete musieť resetovať databázy AAPS. In this case, you'll also lose stats, IOB, COB, selected profile.

Keď varovanie zmizne, AAPS sa sám nevráti do režimu **Uzavretý okruh**. Stlačte ikonu okruhu na hlavnej obrazovke a znova zvoľte **Uzavretý okruh**.

Možná príčina problému: xDrip a/alebo NS spätne dopĺňajú glykémie (backfilling).

Žltý trojuholník v starších verziách znamenal nestabilný odstup medzi jednotlivými hodnotami glykémie (glykémie neprichádzali pravidelne každých 5 minút alebo chýbali). To sa často stáva pri Libre alebo po výmene vysielača G6. **AAPS** 4 ho už nezobrazuje: hodnoty prepočíta na pozadí a okruh funguje správne.

### Omnipod DASH

(FAQ-move-dash-pod)=

#### Môžem presunúť aktívny DASH Pod na iný telefón?

Stav Podu je súčasťou exportovaných nastavení, takže aktívny Pod môžete presunúť na iný telefón: tesne pred presunom exportujte nastavenia a importujte ich na druhom telefóne. Oficiálne to nie je podporované a hrozí, že o Pod prídete: ak je to možné, skúste to, keď sa vášmu Podu blíži koniec platnosti.

Najprv si prečítajte tieto časti:

* [Export a import nastavení](#omnipod-dash-export-import) na stránke Omnipod DASH a [Pumpy bez hadičky](#ExportImportSettings-tubeless-pumps): na novom telefóne zaškrtnite **Nahradiť aj nastavenia pumpy** a použite súbor exportovaný počas Podu, ktorý máte práve nasadený,
* [Vyradenie podu](#omnipod-dash-discard-pod), aby ste potom Pod odstránili zo starého telefónu. Keep the old phone in airplane mode until the Pod is discarded, so that the two phones never talk to the Pod at the same time.