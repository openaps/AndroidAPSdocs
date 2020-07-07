# Configurator

Afhankelijk van je instellingen kun je de Configurator openen via een tabblad bovenaan het scherm of via het hamburger menu (3 streepjes in linkerbovenhoek).

![Configurator openen](../images/ConfBuild_Open.png)

Configurator (Conf) is het tabje waar je alle AAPS-functies kunt instellen. De vakjes aan de linker kant (A) kun je aanvinken wanneer je een bepaalde optie wilt gebruiken, de vakjes aan de rechterkant (C) kun je aanvinken als je die als een van de tabbladen (E) in AndroidAPS wilt laten weergeven. Wanneer je niet het vinkje hebt gezet om iets als tabblad weer te geven, kun je naar die functie toegaan dmv het hamburger menu (D), dit zijn de 3 streepjes onder elkaar in de linkerbovenhoek.

Wanneer er voor een functie nog extra instellingen zijn, dan kun je die openen door op het tandwiel icoontje (B) te klikken.

**Eerste instellingen:** Vanaf AAPS versie 2.0 is er een Setup-wizard die je door alle initiele instellingen van AndroidAPS zal leiden. Druk op de 3 puntjes in de rechterbovenhoek (F) en kies 'Setup Wizard' om hem te openen.

![Configurator vakjes en tandwiel](../images/ConfBuild_ConfigBuilder.png)

## Tabblad of hamburger menu

Met het selectievakje onder het oog icoontje, kun je instellen hoe een sectie bereikbaar is. De aangevinkte onderdelen zullen als tabbladen worden weergegeven. Alle niet-aangevinkte onderdelen vindt je terug in het hamburger menu (onder de 3 streepjes in linkerbovenhoek).

![Tabblad of hamburger menu](../images/ConfBuild_TabOrHH.png)

## Profiel

Selecteer het profiel dat je voor je basaalstanden wilt gebruiken. Hieronder staan de verschillende opties beschreven, zie ook de [Profiel wissel](../Usage/Profiles.md) pagina voor hoe je een profiel kunt activeren (nodig voor je eerste gebruik).

### Lokaal profiel (aanbevolen)

Lokaal profiel gebruikt instellingen voor jouw basaalstanden die je handmatig opgeeft in jouw telefoon. Wanneer je deze selecteert, verschijnt er een nieuw tabblad in AAPS, waar je jouw profielgegevens die uit je pomp zijn uitgelezen kunt veranderen indien nodig. Met de volgende profiel switch worden ze vervolgens naar jouw pomp verstuurd en opgeslagen onder profiel 1. Omdat je voor dit profiel geen internetverbinding nodig hebt, is dit de meest eenvoudige om te gebruiken.

Jow lokale profielen zijn een onderdeel van [de geëxporteerde instellingen](../Usage/ExportImportSettings.rst). Dus zorg ervoor dat je een backup van jouw instellingen-bestand (AAPSPreferences) hebt opgeslagen.

![Lokale profiel instellingen](../images/LocalProfile_Settings.png)

Knoppen:

* groene plus: toevoegen
* rode X: verwijderen
* blauwe pijl: kopiëren

Als je wijzigingen aanbrengt in je profiel, zorg er dan voor dat je het juiste profiel aan het bewerken bent. Op het profiel tabblad wordt niet altijd het gebruikte profiel weergegeven - bijvoorbeeld als je van profiel hebt gewisseld met de profiel tab op het overzicht-scherm, kan dit afwijken van het profiel dat wordt weergegeven in het tabblad profiel omdat er geen koppeling tussen deze tabs bestaat.

#### Profiel wissel dupliceren

Je kunt eenvoudig een nieuw lokaal profiel aanmaken van een profiel wissel. In dit geval word het tijdsverschil en het percentage toegepast op het nieuwe lokale profiel.

1. Ga naar het tabblad behandelingen.
2. Kies Profiel Wissel.
3. Druk op "Dupliceren".
4. Het nieuwe lokale profiel kunt u bewerken in het tabblad Lokaal profiel (LP) of via het hamburgermenu.

![Profiel wissel dupliceren](../images/LocalProfile_ClonePS.png)

Als je van Nightscout profiel wilt veranderen naar lokaal profiel, schakel dan je NS profiel in en kopieer de profiel wissel zoals hierboven beschreven.

#### Lokale profielen uploaden naar Nightscout

Lokale profielen kunnen ook worden geüpload naar Nightscout. De instellingen bevinden zich in NS Client instellingen.

![Upload local profile to NS](../images/LocalProfile_UploadNS2.png)

Voordelen:

* Geen internetverbinding nodig om profielinstellingen te wijzigen
* Profielwijzigingen kunnen direct op de telefoon worden aangebracht
* nieuw profiel kan gecreëerd worden via profiel wissel
* lokale profielen kunnen naar Nightscout worden geüpload

Nadelen:

* niks

### NS Profiel

NS Profiel maakt gebruik van de profielen die je hebt opgeslagen op jouw Nightscout site (https://[jouwnightscoutpagina]/profile). Je kunt de [Profiel wissel](../Usage/Profiles.md) gebruiken om te kiezen welk van jouw profielen actief wordt, dit profiel zal vervolgens naar jouw pomp worden gestuurd en in het pompgeheugen worden opgeslagen. Zodat je pomp hierop terugvalt wanneer AndroidAPS niet zou werken. Hierdoor kun je heel makkelijk meerdere profielen gebruiken in Nightscout (dat wil zeggen werk, thuis, sport, vakantie, etc.). Kort nadat je klikt op "Opslaan" zullen deze profielen worden overgedragen naar AAPS als jouw smartphone online is. Zelfs zonder een internetverbinding of zonder een verbinding met Nightscout zijn de Nightscout-profielen beschikbaar in AAPS zodra ze zijn gesynchroniseerd.

Gebruik een **Profiel wissel** om een profiel van Nightscout te activeren. Houd het huidige profiel in het AAPS Overzicht-scherm aan de bovenkant ingedrukt (middelste grijze knop tussen de grijze "Open/Closed Loop"-knop en de grijze streefdoel-knop) > Profiel wissel > Profiel selecteren > OK. AAPS schrijft nu het geselecteerde profiel naar de pomp na de profiel wissel, zodat het beschikbaar blijft zonder AAPS (in noodgevallen) en je pomp dus gewoon blijft doorlopen.

Voordelen:

* Meerdere profielen
* Gemakkelijk te bewerken via PC of tablet

Nadelen:

* Geen lokale wijzigingen in profielinstellingen
* Profielwijzigingen kunnen niet direct op de telefoon worden aangebracht

## Insuline

Kies het werkingsprofiel van de insuline die jij gebruikt. De werkingsprofielen voor 'Rapid-Acting Oref', Ultra-Rapid Oref' en 'Free-Peak Oref' hebben allemaal een exponentiële vorm. Meer informatie staat in de [OpenAPS documenten](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves). Het werkingsprofiel zal variëren op basis van de DIA (Duration of Insulin Action, duur van insulineactiviteit) en de piektijd.

De DIA is niet voor iedereen hetzelfde. Daarom moet je het voor jouzelf testen. Maar het moet altijd minstens 5 uur zijn. Meer informatie hierover vind je in de sectie Insuline Profiel van [deze](../Getting-Started/Screenshots#insulin-profile) pagina.

Voor Snel-werkende en Ultra-Rapid is de DIA de enige variabele die je zelf kunt aanpassen, de piektijd is voorgeprogrammeerd en dus niet aan te passen. Bij Free-Peak kun je zowel de DIA als de piektijd aanpassen, en deze optie mag alleen worden gebruikt door geavanceerde gebruikers die de effecten van deze instellingen begrijpen.

De [insuline werkingsgrafiek](../Getting-Started/Screenshots#insulin-profile) laat zien hoe de concentratie en activiteit van jouw insuline verandert versus de tijd. Je kunt deze grafiek bekijken door in de Configurator een vinkje te zetten om het als een tabblad te laten zien, zonder dit vinkje kun je de grafiek bekijken via het hamburger menu (3 streepjes in linkerbovenhoek).

### Snel-werkende Oref

* Aanbevolen voor Humalog, Novolog en Novorapid
* DIA = at least 5.0h
* Max. piek = 75 minuten na injectie (vast, niet instelbaar)

### Ultra-Rapid Oref

* Aanbevolen voor Fiasp
* DIA = at least 5.0h
* Max. piek = 55 minuten na injectie (vast, niet instelbaar)

Voor veel mensen is er praktisch geen merkbaar effect van Fiasp na 3-4 uur, zelfs als er dan nog maar 0,0xx eenheden zijn overgebleven. Dit kleine restje kan nog wel steeds een merkbaar effect hebben, bijvoorbeeld tijdens het sporten. Daarom gebruikt AndroidAPS een minimum van 5u als DIA.

![Config Builder Ultra-Rapid Oref](../images/ConfBuild_UltraRapidOref.png)

### Free-Peak Oref

Met het Free-Peak Oref (Vrije-Piek Oref) kun je zelf het tijdstip kiezen waarop de werkzaamheid van je insuline zijn piek heeft. De DIA wordt automatisch ingesteld op 5 uur, tenzij je hem in jouw profiel hoger hebt ingesteld (dan wordt de waarde uit jouw profiel gebruikt).

Dit profiel wordt aanbevolen als de insuline bij jou een werkingsprofiel heeft dat helemaal niet overeenkomt met de standaarden, of wanneer je een mengsel van verschillende insulines gebruikt.

## BG bron

Selecteer de bloed glucose bron je gebruikt - Zie [BG bron](BG-Source.rst) pagina voor meer informatie over setup.

* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* NSClient BG
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de) - enkel versie 4.15.57 en nieuwer worden ondersteund
* [Dexcom App (aangepast)](https://github.com/dexcomapp/dexcomapp/) - Selecteer 'BG gegevens verzenden naar xDrip+' als je de alarmen van xDrip+ wilt gebruiken.
    
    ![Configurator BG bron](../images/ConfBuild_BGSource.png)

* [Poctech](http://www.poctechcorp.com/en/contents/268/5682.html)

## Pomp

Selecteer de pomp die jij gebruikt.

* [Dana R](DanaR-Insulin-Pump.md)
* DanaR Koreaans (Koreaanse versie van DanaR)
* DanaRv2 (DanaR met ge-updatete firmware)
* [Dana RS](DanaRS-Insulin-Pump.md)
* [Accu Chek Combo](Accu-Chek-Combo-Pump.md) (hiervoor moet je Ruffy geïnstalleerd hebben)
* MDI (bedoeld voor mensen die pentherapie gebruiken, hiermee geeft AAPS suggesties voor jouw insulinedosis)
* Virtuele pomp (open loop voor een pomp die niet automatisch kan worden aangestuurd door AAPS, hiermee geeft AAPS alleen suggesties die je zelf handmatig in je pomp moet invoeren)

Voor dana pompen, gebruik **Geavanceerde instellingen ** om BT watchdog te activeren indien nodig. Het schakelt bluetooth uit gedurende één seconde als er geen verbinding met de pomp kan worden gemaakt. Dit kan helpen voor sommige telefoons waarbij problemen met de bluetooth verbinding optreden (meer specifiek: wanneer de bluetooth stack bevriest).

## Gevoeligheid detectie

Select the type of sensitivity detection. This will analyze historical data on the go and make adjustments if it recognizes that you are reacting more sensitively (or conversely, more resistant) to insulin than usual. Details about the Sensitivity Oref0 algorithm can be read in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode).

You can view your sensitivity on the homescreen by selecting SEN and watching the white line. Note, you need to be in [Objective 8](../Usage/Objectives#objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens) in order to let Sensitivity Detection/[Autosens](../Usage/Open-APS-features.html#autosens) automatically adjust the amount of insulin delivered. Als je dit doel nog niet hebt bereikt, dan wordt de Autosens percentage lijn in de grafiek alleen weergegeven ter info.

### Opname instellingen

If you use Oref1 with SMB you must change **min_5m_carbimpact** to 8. The value is only used during gaps in CGM readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause AAPS to decay COB. At times when [carb absorption](../Usage/COB-calculation.rst) can't be dynamically worked out based on your bloods reactions it inserts a default decay to your carbs. Basically, it is a failsafe.

## APS

Select the desired APS algorithm for therapy adjustments. You can view the active detail of the chosen algorithm in the OpenAPS(OAPS) tab.

* OpenAPS MA (Meal Assist, maaltijd hulp). Versie van het algoritme uit 2016.
* OpenAPS AMA (geavanceerde maaltijdhulp, onderdeel van het algoritme in 2017)  
    Meer details over OpenAPS AMA kun je vinden in de [OpenAPS documenten](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). Simpel gezegd helpt de geavanceerde maaltijdhulp je door nadat je jezelf een maaltijd bolus hebt gegeven, het systeem eerder een hogere basaalstand kan instellen ZOLANG je je koolhydraten correct invoert.   
    NB: je moet minimaal in [Doel 9](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama) zijn om OpenAPS AMA te kunnen gebruiken.
* [OpenAPS SMB](../Usage/Open-APS-features.md) (Super Micro Bolus). Dit is het meest recente algoritme, bedoeld voor gevorderde gebruikers.   
    Je moet minimaal in [Doel 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) zijn om OpenAPS SMB te gebruiken, en vergeet niet om je min_5m_carbimpact op 8 in te stellen via Configurator > gevoeligheid detectie > gevoeligheid Oref1 instellingen.

## Loop

Define whether you want to allow AAPS automatic controls or not.

### Open loop

AAPS continuously evaluates all available data (IOB, COB, BG...) and makes treatment suggestions on how to adjust your therapy if necessary. The suggestions will not be executed automatically (as in closed loop) have to be entered manually into the pump or by using a button in case you are using a compatible pump (Dana R/RS or Accu Chek Combo). This option is for getting to know how AndroidAPS works or if you are using an unsupported pump.

### Closed loop

AAPS continuously evaluates all available data (IOB, COB, BG...) and automatically adjusts the treatment if necessary (i.e. without further intervention by you) to reach the set target range or value (bolus delivery, temporary basal rate, insulin switch-off to avoid hypo etc.). The Closed Loop works within numerous safety limits, which you can be set individually. Closed Loop is only possible if you are in [Objective 6](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) or higher and use a supported pump.

## Doelen (leerprogramma)

AndroidAPS has a number of objectives that you have to fulfill step by step. This should guide you safely through setting up a closed loop system. It guarantees that you have set everything up correctly and understand what the system does exactly. This is the only way you can trust the system.

You should [export your settings](../Usage/ExportImportSettings.rst) (including progress of the objectives) on a regularly basis. In case you have to replace your smartphone later (new purchase, display damage etc.) you can simply import those settings.

See [Objectives](../Usage/Objectives.rst) page for more information.

## Behandelingen

If you view the Treatments (Treat) tab, you can see the treatments that have been uploaded to nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the [carbs button on the home screen](../Getting-Started/Screenshots.md#carb-correction).

## Algemeen

### Overzicht

Displays the current state of your loop and buttons for most common actions (see [section The Homescreen](../Getting-Started/Screenshots.md) for details). Settings can be accessed by clicking the cog wheel.

#### Laat scherm aan

Option 'Keep screen on' will force Android to keep the screen on at all times. This is useful for presentations etc. But it consumes a lot of battery power. Therefore, it is recommended to connect the smartphone to a charger cable.

#### Knoppen

Define which Buttons are shown on the home screen.

* Behandelingen
* Boluscalculator
* Insuline
* Koolhydraten
* CGM (opent xDrip+)
* Kalibratie

Furthermore, you can set shortcuts for insulin and carb increments and decide whether the notes field should be shown in treatment dialogues.

#### Vaste maaltijd instellingen

Create a button for a certain standard meal (carbs and calculation method for the bolus) which will be displayed on the home screen. Use for standard meals frequently eaten. If different times are specified for the different meals you will always have the appropriate standard meal button on the home screen, depending on the time of day.

Note: Button will not be visible if outside the specified time range or if you have enough IOB to cover the carbs defined in the QuickWizard button.

![QuickWizard button](../images/ConfBuild_QuickWizard.png)

#### Geavanceerde instellingen

Enable super bolus functionality in wizard. Use with caution and do not enable until you learn what it really does. Basically, the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Acties

Some buttons to quickly access common features:

* Profiel wissel (Zie [Profiel wissel pagina](../Usage/Profiles.md) voor meer informatie)
* Tijdelijk streefdoel
* Zet / annuleer Tijdelijke basaalstand
* Vertraagde bolus (alleen DanaR/RS of Combo pomp)
* Opslaan specifieke zorg gegevens
    
    * BG controle
    * Voorvullen / vullen - wissel canulle en voorvullen (indien niet gedaan door pomp)
    * CGM sensor start
    * Pomp batterij vervangen
    * Notitie
    * Sport
* Bekijk de huidige sensor, insuline, canule en pomp batterij status
* Historiek venster
* TDD (Totale Dagelijkse Dosis = bolus + basale insuline per dag)

Some doctors use - especially for new pumpers - a basal-bolus-ratio of 50:50. Therefore ratio is calculated as TDD / 2 * TBB (Total base basal = sum of basal rate within 24 hours). Others prefer range of 32% to 37% of TDD for TBB. Like most of these rules-of-thumb it is of limited real validity. Note: Your diabetes may vary!

![Actions tab](../images/ConfBuild_ConfBuild_Actions_b.png)

### SMS Communicator

Allows remote caregivers to control some AndroidAPS features via SMS, see [SMS Commands](../Children/SMS-Commands.rst) for more setup information.

### Voeding

Displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the AndroidAPS calculator. (View only)

### Wear (voor smartwatches)

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../Configuration/Watchfaces.md)). Use settings (cog wheel) to define which variables should be considered when calculating bolus given though your watch (i.e. 15min trend, COB...).

Als je wilt bolussen etc. vanaf je horloge, dan moet je bij "Wear instellingen" de optie "Bedieningen via horloge" geactiveerd hebben.

![Wear settings](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* "Update Wear gegevens" kiezen. Kan handig zijn als je horloge enige tijd niet verbonden is geweest, en je wilt de informatie naar je horloge sturen.
* "Open instellingen op Wear" kiezen. Dit opent de instellingen van je horloge direct vanaf je telefoon.

### xDrip Statuslijn (Horloge)

Display loop information on your xDrip+ watchface (if you are not using AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md)

### Permanent bericht

Displays a summary of current BG, delta, active TBR%, active basal u/h and profile, IOB and split into bolus IOB and basal IOB on the phones's dropdown screen and phone's lock screen.

![AAPS widget](../images/ConfBuild_Widget.png)

### NS Client

Setup sync of your AndroidAPS data with Nightscout.

If **Log app start to NS** is activated each AndroidAPS will be visible in Nightscout. Might be useful to detect problems with the app (i.e. battery optimization not disabled for AAPS) but can flood the Nightscout graph with entries.

#### Alarm opties

Activate/deactivate AndroidAPS alarms

![Alarm opties](../images/ConfBuild_NSClient_Alarms.png)

#### Verbindings instellingen

Offline looping, disable roaming...

If you want to use only a specific WiFi network you can enter its **WiFi SSID **. Several SSIDs can be separated by semicolon. To delete all SSIDs enter a blank space in the field.

![Nightscout connection settings](../images/ConfBuild_ConnectionSettings.png)

#### Geavanceerde instellingen

* Automatisch ontbrekende BGs aanvullen vanuit NS
* Creëer een melding bij storingen. Creëert een Nightscout melding voor storingen en lokale waarschuwingen (ook zichtbaar in tabbladen Careportal en Behandelingen)
* Activeer lokaal delen Activeert het lokaal (geen wifi/Bluetooth nodig) delen van informatie met andere apps zoals xDrip+
* Alleen NS upload (synchronisatie gedeactiveerd)
* Geen upload naar NS
* Gebruik altijd absolute basale waarden-> moet worden geactiveerd als je gebruik wilt maken van [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) (zorgt dat de Autotune berekeningen correct worden uitgevoerd).

![Nightscout advanced settings](../images/ConfBuild_NSClient_Advanced.png)

### Onderhoud

Email and number of logs to be send. Normally no change necessary.

### Configurator

Use tab for config builder instead of hamburger menu.