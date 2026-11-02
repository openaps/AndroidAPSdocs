# Veelgestelde vragen voor loopers

Vragen toevoegen aan deze FAQ: volg deze [instructies](../SupportingAaps/HowToEditTheDocs.md)

## Algemeen

### Kan ik het installatiebestand van AAPS gewoon downloaden?

Nee. Er is geen downloadbaar apk bestand voor AAPS. Je moet hem zelf [bouwen](../SettingUpAaps/BuildingAaps.md). Dit is de reden waarom:

AAPS wordt gebruikt om je pomp te besturen en insuline te geven. Volgens de huidige Europese regelgeving vallen dit soort systemen onder klasse IIa of IIb voor medische hulpmiddelen. Dat betekent dat die een wettelijke goedkeuring (CE-goedkeuring) vereisen, waarvoor verschillende studies en verificaties nodig zijn. Het verspreiden van een ongereguleerd medisch hulpmiddel is illegaal. In andere delen van de wereld bestaat vergelijkbare regelgeving.

Deze regelgeving beperkt zich niet tot verkoop (in de zin dat er geld voor wordt gevraagd), maar is van toepassing op elke vorm van distributie (zelfs gratis weggeven). Een medisch hulpmiddel voor jezelf bouwen is de enige manier om de app binnen deze regels te gebruiken.

Dat is waarom een kant-en-klare apk niet verspreid mag worden.

(FAQ-how-to-begin)=

### Hoe begin ik?

Begin met [Voorbereiden om te starten met AAPS](../Getting-Started/PreparingForAaps.md): daar wordt alles hieronder stap voor stap en uitgebreider uitgelegd.

Ten eerste moet je alle **fysieke onderdelen van een gesloten loop** verzamelen:

* Een [ondersteunde insulinepomp](../Getting-Started/CompatiblePumps.md), 
* een [Android-smartphone](../Getting-Started/Phones.md) (Apple iOS wordt niet ondersteund door AAPS - kijk eventueel naar [iOS Loop](https://loopkit.github.io/loopdocs/)) en
* een [continue glucosemonitor (CGM)](../Getting-Started/CompatiblesCgms.md). 

Ten tweede moet je je **software-onderdelen instellen**: [AAPS](../SettingUpAaps/BuildingAaps.md), de [CGM/FGM-bron](../Getting-Started/CompatiblesCgms.md) en een [rapportageserver](../SettingUpAaps/SettingUpTheReportingServer.md).

Ten derde moet je het **OpenAPS reference design leren en begrijpen om je behandelfactoren te controleren**. Het basisprincipe van een gesloten loop is dat je [basaalstand en koolhydraatratio](../SettingUpAaps/YourAapsProfile.md) kloppen. Alle aanbevelingen gaan ervan uit dat je basaalbehoefte klopt. Pieken of dalen die je ziet, komen dan door andere factoren, die daarom een eenmalige aanpassing nodig hebben (sport, stress enz.). De aanpassingen die de gesloten loop mag doen, zijn voor de veiligheid beperkt (zie de maximaal toegestane tijdelijke basaalstand in het [OpenAPS Reference Design](https://openaps.org/reference-design/)). Je wilt de toegestane dosering dus niet verspillen aan het corrigeren van een verkeerde basaalstand. Als de loop bijvoorbeeld vaak een lage tijdelijke basaalstand instelt vlak voor een maaltijd, dan moet je basaal waarschijnlijk worden aangepast. Je kunt [Autotune](#autotune-how-autotune-calculates-adjustments) gebruiken om een grote hoeveelheid gegevens te laten bekijken. Het stelt dan voor of en hoe je basaal en/of ISF moet aanpassen, en ook of je koolhydraatratio moet veranderen. Of je kunt je basaal testen en instellen op de [ouderwetse manier](https://integrateddiabetes.com/basal-testing/).

### Wat moet ik in de praktijk weten over loopen?

#### Wachtwoordbeveiliging

Wil je niet dat je instellingen makkelijk te wijzigen zijn, dan kun je ze beveiligen met een wachtwoord, een pincode of de biometrische beveiliging van je telefoon (vingerafdruk, gezicht). Open **Instellingen** > **Beveiliging** > **Instellingen beveiliging** en kies het type beveiliging. Op dezelfde plek kun je ook de hele app of alleen bolussen beveiligen. Zie [Instellingen beveiliging](#Preferences-settings-protection) voor meer details.

#### Android Wear Smartwatches

Gebruik je de AAPS-horloge-app om een bolus te geven of instellingen te wijzigen, dan moet je elk verzoek op het horloge bevestigen: na het versturen toont het horloge een samenvatting met een knop **BEVESTIGEN**. Zie [AAPS bedienen via je Wear OS smartwatch](../RemoteFeatures/RemoteControlWearOS.md).

(FAQ-disconnect-pump)=

#### Pomp afkoppelen

Als je de pomp afkoppelt voor douchen, baden, zwemmen, sporten of andere activiteiten, dan moet je AAPS laten weten dat er geen insuline wordt afgegeven om je IOB correct te houden.

Je kunt de pomp loskoppelen met het [loop-pictogram](#AapsScreens-loop-status) op het hoofdscherm van AAPS: druk erop en kies **Verbreek verbinding met de pomp** met de tijdsduur die je nodig hebt. Duurt de activiteit langer dan gepland, druk dan opnieuw op het pictogram en kies een nieuwe tijdsduur: je hoeft de pomp niet eerst weer te verbinden. Zie [De pomp loskoppelen voor douchen of activiteit](#pumps-cannulas-disconnecting) om te lezen hoe je een tekort aan insuline voorkomt als de pomp lang los is.

#### Aanbevelingen niet alleen gebaseerd op één enkele CGM-waarde

Voor de veiligheid zijn aanbevelingen niet gebaseerd op één CGM-waarde, maar op de gemiddelde delta. Als je een paar metingen mist, kan het daarom even duren nadat er weer gegevens binnenkomen voordat AAPS weer gaat loopen.

#### Verder lezen

Er zijn verschillende blogs met goede tips die je helpen te begrijpen hoe loopen in de praktijk werkt. Sommige zijn niet meer online: de links hieronder met "gearchiveerde kopie" openen een opgeslagen kopie in het Internet Archive.

    * [Fine-tuning Settings](https://web.archive.org/web/20171029031305/http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM (gearchiveerde kopie)
    * [Why DIA matters](https://web.archive.org/web/20231130035027/http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM (gearchiveerde kopie)
    * [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
    * [Hormones and autosens](https://web.archive.org/web/20170902081839/http://seemycgm.com/2017/06/06/hormones-2/) See my CGM (gearchiveerde kopie)
    

(what-emergency-equipment-is-recommended-to-take-with-me)= (FAQ-emergency-equipment)=

### Welke noodspullen kan ik het best bij me hebben?

Je moet dezelfde noodapparatuur bij je hebben als elke andere T1D met insulinepomp-therapie. Als je met AAPS loopt, wordt het sterk aangeraden om de volgende extra spullen bij je of in de buurt te hebben:

* Powerbank en kabels om je smartphone, smartwatch en (indien nodig) BT-lezer of Link-apparaat op te laden
* Batterijen voor je insulinepomp
* Toegang tot je back-ups, zowel op de telefoon als in de cloud (bijv. Google Drive, Dropbox), zodat je AAPS opnieuw kunt instellen op een andere telefoon (zie [Back-ups maken en terugzetten](../Maintenance/ExportImportSettings.md)): 
  * de huidige [apk](../SettingUpAaps/BuildingAaps.md) van AAPS en van andere apps die je gebruikt (bijv. xDrip, Juggluco, BYODA).
  * je keystore-bestand (van het bouwen van de apk) en het wachtwoord ervan,
  * je laatste geëxporteerde instellingenbestanden van AAPS en je andere apps,
  * je **AAPS** hoofdwachtwoord: zonder dit wachtwoord kun je het instellingenbestand niet importeren.

(FAQ-organize-backups)=

#### Hoe organiseer ik mijn back-ups?

Exporteer je instellingen heel regelmatig: na elke wissel van pod of reservoir, na een wijziging van je profiel, als je een doel hebt gehaald, als je van pomp wisselt… Ook als er niets verandert: exporteer één keer per maand. Bewaar meerdere oude exportbestanden.

**AAPS** kan dit voor je doen: het kan je instellingen automatisch exporteren (bijvoorbeeld met een [Automatisering](#ExportImportSettings-Automating-Settings-Export) na elke podwissel) en de export direct opslaan in een cloudmap (Google Drive). Zie [Back-ups maken en terugzetten](../Maintenance/ExportImportSettings.md).

### Hoe kan ik veilig en stevig mijn CGM/FGM vastmaken?

Je kunt hem afplakken. Er zijn verschillende op maat gesneden 'overpatches' voor veelgebruikte CGM-systemen beschikbaar (zoek via Google, of op eBay of Amazon). Sommige loopers gebruiken de goedkopere gewone kinesiotape of rocktape.

Je kunt hem vastzetten. Je kunt ook armbanden voor je bovenarm kopen die de CGM/FGM vasthouden (zoek via Google, of op eBay of Amazon).

## APS algoritme

### Waarom toont OpenAPS AMA "dia: 3", terwijl ik een andere DIA in mijn profiel heb?

Als **OpenAPS AMA** gekozen is in **Configuratie** > **APS**, toont **Plug-in openen** de gegevens die naar het algoritme worden gestuurd. In het onderdeel **Profiel** is `dia` altijd 3.0 of minder:

![Scherm van de OpenAPS AMA-plugin met dia 3.0 in de profielgegevens](../images/screens/openaps_ama_plugin.png)

In AMA betekent DIA eigenlijk niet de 'werkingsduur van insuline'. Het is een parameter die vroeger wel gelinkt was aan de DIA. Nu betekent het 'binnen welke tijd zou de correctie moeten zijn afgerond'. Het heeft niets te maken met de berekening van de IOB. In OpenAPS SMB wordt deze parameter niet meer gebruikt.

## Overige instellingen

### Nightscout-instellingen

(FAQ-nsclient-blocked)=

#### AAPSClient (of AAPS) uploadt geen gegevens: "Geblokkeerd door…". Wat kan ik doen?

De status van NSClient laat zien waarom er geen gegevens worden verstuurd:

* **Geblokkeerd door verbindings instellingen**: de verbindingsinstellingen staan de huidige verbinding niet toe. Je gebruikt bijvoorbeeld mobiele data, maar alleen wifi is toegestaan, of je bent niet verbonden met een van de toegestane wifi-netwerken (SSID's).
* **Geblokkeerd door oplaad instellingen**: de verbindingsinstellingen staan synchroniseren alleen toe als de telefoon wordt opgeladen (of alleen op batterij), en dat is nu niet zo.
* **Geen verbinding**: de telefoon heeft geen internetverbinding.

Controleer de [verbindingsinstellingen van NSClient](#Preferences-nsclient): **Mobiele data gebruiken**, **Roaming toestaan**, **Wifi gebruiken**, **WiFi SSID**, **Synchroniseer op batterij** en **Synchroniseer tijdens opladen**.

### CGM-instellingen

(FAQ-advanced-filtering)=

#### Waarom zegt AAPS 'SMB altijd en na koolhydraten gedeactiveerd doordat de gekozen BG bron geen geavanceerde filtering ondersteunt'?

**SMB altijd toestaan** en **SMB toestaan na koolhydraten** kun je alleen gebruiken met een [betrouwbare BG-bron](#GettingStarted-TrustedBGSource): een sensor en CGM-app die **AAPS** kunnen vertellen van welke sensor de metingen komen. Met elke andere BG-bron zet **AAPS** deze twee opties uit en toont het deze melding. Bekijk de lijst met betrouwbare bronnen en zorg, als je sensor erin staat, dat je een van de CGM-apps gebruikt die erbij genoemd worden. Zie ook [Vloeiend maken van bloedglucosewaarden](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Pomp

#### Batterijen

Loopen kan de pompbatterij sneller leeg laten raken dan normaal gebruik, omdat het systeem veel vaker via Bluetooth met de pomp praat dan een gebruiker met de hand doet. Vervang de batterij het best bij 25%, omdat de communicatie dan moeilijk wordt. Je kunt in Nightscout waarschuwingen voor de pompbatterij instellen met de variabele PUMP_WARN_BATT_P. Tips om de levensduur van de batterij te verlengen:

* verkort de tijd dat het LCD-scherm aan blijft (in het instellingenmenu van de pomp)
* verkort de tijd dat de achtergrondverlichting aan blijft (in het instellingenmenu van de pomp)
* stel meldingen in op een piepje in plaats van trillen (in het instellingenmenu van de pomp)
* druk alleen op de knoppen van de pomp om hem te vullen, gebruik AAPS om de geschiedenis, het batterijniveau en de inhoud van het reservoir te bekijken.
* Op sommige telefoons wordt de AAPS app vaak afgesloten om energie te besparen of RAM vrij te geven. Wanneer AAPS bij elke start opnieuw wordt geïnitialiseerd, maakt het een Bluetoothverbinding met de pomp en leest het de huidige basaalstand en de bolusgeschiedenis opnieuw uit. Hierdoor raakt de batterij van de pomp leeg. Om te zien of dit gebeurt, zet je **Log het starten van de app** aan in de **Geavanceerde instellingen** van NSClient: Nightscout krijgt dan bij elke herstart van AAPS een gebeurtenis, zodat je het probleem makkelijk kunt volgen. Om dit te beperken, zet je de batterijoptimalisatie voor AAPS uit, zodat de telefoon de app niet meer afsluit: zie [batterijbesparing](#FAQ-battery-savings) hieronder.
* maak de contactpunten van de batterij schoon met een alcoholdoekje, om te voorkomen dat er nog vet of olie van het productieproces is achtergebleven.
* bij [Dana R/RS-pompen](../CompatiblePumps/DanaRS-Insulin-Pump.md) trekt de opstartprocedure bewust een hoge stroom uit de batterij om de passiveringslaag te doorbreken (die voorkomt energieverlies tijdens opslag), maar dat lukt niet altijd voor 100%. Haal de batterij 2-3 keer uit de pomp en plaats hem terug tot het scherm 100% toont, of gebruik de batterijsleutel om de batterij vóór het plaatsen heel kort te kortsluiten: houd de sleutel een fractie van een seconde tegen beide polen.
* zie ook meer tips voor [bepaalde soorten batterijen](#Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)

#### Verwisselen van reservoirs en canules

Het reservoir moet direct op de pomp worden vervangen, daarna wordt de wissel in **AAPS** vastgelegd. Volg de stap-voor-stap [uitleg voor het vervangen van het reservoir en de canule](#pumps-cannulas-changing-reservoir-and-cannula).

### Achtergrondafbeelding

Je vindt de AAPS-achtergrond voor je telefoon op de [pagina Telefoons](#Phones-phone-wallpaper).

### Dagelijks gebruik

Veel van de situaties hieronder kun je één keer voorbereiden als [scène](#scenes): een voorinstelling die met één tik je profiel, tijdelijk streefdoel en andere instellingen wisselt. **AAPS** heeft kant-en-klare sjablonen, bijvoorbeeld *Beweging/sport*, *Slaap*, *Alcohol* of *Baden*.

#### Hygiëne

(what-to-do-when-taking-a-shower-or-bath)=

##### Wat te doen bij douchen of baden?

Je kunt de pomp afkoppelen als je doucht of in bad gaat. Voor deze korte tijd heb je de pomp misschien niet nodig, maar je moet AAPS laten weten dat je hem hebt afgekoppeld, zodat de IOB-berekeningen kloppen. Zie de [uitleg hierboven](#FAQ-disconnect-pump). Het [scène](#scenes)-sjabloon *Baden* doet dit voor je.

#### Werk

Afhankelijk van je werk kun je ervoor kiezen om op werkdagen andere behandelfactoren te gebruiken. Als looper kun je een [profiel wissel](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) overwegen voor je gewone werkdag. Je kunt bijvoorbeeld een profiel hoger dan 100% kiezen als je werk weinig inspanning vraagt (bijv. zittend aan een bureau), of lager dan 100% als je de hele dag actief bent en veel staat of loopt. Je kunt ook een hoog of laag tijdelijk streefdoel overwegen, of een [tijdverschuiving van je profiel](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile), als je veel eerder of later werkt dan normaal, of als je in ploegendienst werkt. Je kunt ook een tweede profiel maken (bijv. 'thuis' en 'werkdag') en elke dag een profiel wissel doen naar het profiel dat je echt nodig hebt, of je instellingen voor werkdagen opslaan als [scène](#scenes).

### Vrije tijd

(FAQ-sports)=

#### Sporten

Je moet je oude sportgewoontes van vóór de loop aanpassen. Als je net als vroeger gewoon een of meer sportkoolhydraten neemt, ziet het gesloten loop-systeem die en corrigeert het ze.

Je hebt dan meer koolhydraten aan boord, maar tegelijk werkt de loop dat tegen en geeft hij insuline af.

Probeer bij het loopen deze stappen:

* Make a [profile switch](#ProfileSwitch-change-percentage) below 100%: tap the profile name on the main screen, tap the round **▶** button, then set **Percentage** and **Duration**.
* Stel een [tijdelijk streefdoel voor activiteit](#TempTargets-activity-temp-target) in dat hoger is dan je gewone streefdoel. Met een percentage onder 100 % en een tijdsduur biedt hetzelfde scherm **Activeer** een schakelaar **Tijdelijk streefdoel / Activiteit** die beide tegelijk start.
* Als je SMB gebruikt, zorg dan dat ["SMB toestaan bij hoog tijdelijk streefdoel"](#Open-APS-features-enable-smb-with-high-temp-targets) en ["SMB altijd toestaan"](#Open-APS-features-enable-smb-always) uitgeschakeld zijn.

Voor- en nabewerking van deze instellingen is belangrijk. Maak de wijzigingen op tijd vóór het sporten en houd rekening met het effect van het bijvullen van je spieren (glycogeen).

De [scène](#scenes)-sjablonen *Beweging/sport* en *Nacht na beweging/sport* bundelen deze instellingen, zodat je ze met één tik kunt starten. Sport je regelmatig op hetzelfde tijdstip (bijv. een les in de sportschool), dan kun je [Automatisering](../DailyLifeWithAaps/Automations.md) gebruiken om de profiel wissel en het tijdelijk streefdoel te starten, of de scène. Automatisering op basis van locatie kan ook een idee zijn, maar maakt de voorbereiding lastiger.

Het percentage van de profiel wissel, de waarde van je tijdelijk streefdoel voor activiteit en het beste moment voor de wijzigingen verschillen per persoon. Begin aan de veilige kant als je de juiste waarde voor jou zoekt (begin met een lager percentage en een hoger tijdelijk streefdoel).

#### Seks

Je kunt de pomp loskoppelen voor wat 'vrijheid', maar je moet AAPS wel vertellen dat je dat doet, zodat je IOB goed wordt berekend. Zie de [uitleg hierboven](#FAQ-disconnect-pump).

#### Alcohol drinken

Alcohol drinken is riskant in gesloten loop, omdat het algoritme de invloed van alcohol op je BG niet goed kan voorspellen. Je moet zelf uitzoeken hoe je hiermee omgaat, met de volgende functies in AAPS:

* De gesloten loop uitschakelen en je diabetes handmatig behandelen, of
* setting high temp targets and deactivating UAM to avoid the loop increasing IOB due to an unannounced meal or
* doe een [profiel wissel](#ProfileSwitch-change-percentage) naar duidelijk minder dan 100% 

Het [scène](#scenes)-sjabloon *Alcohol* is een startpunt dat je kunt aanpassen aan je eigen methode.

Als je alcohol drinkt, moet je altijd je CGM in de gaten houden, zodat je zelf een hypo kunt voorkomen door koolhydraten te eten.

#### Slapen

##### Hoe kan ik 's nachts loopen zonder straling van mobiel netwerk en wifi?

Veel gebruikers zetten 's nachts hun telefoon in vliegtuigmodus. Wil je dat de loop je helpt terwijl je slaapt, doe dan het volgende (dit werkt alleen als je CGM-app op dezelfde telefoon draait als AAPS, zoals xDrip, Juggluco of BYODA; het werkt NIET als je de BG-waarden via Nightscout krijgt):

1. Zet de telefoon in vliegtuigmodus.
2. Wacht totdat de vliegtuigmodus actief is.
3. Schakel Bluetooth in.

Je kunt nu niet bellen of gebeld worden, en je bent ook niet verbonden met internet. Maar de loop draait nog wel.

Sommige mensen hebben problemen gezien met de lokale broadcast (AAPS krijgt geen BG-waarden van xDrip) als de telefoon in vliegtuigmodus staat. Ga in xDrip naar Settings > Inter-app settings > Identify receiver en vul `info.nightscout.androidaps` in.

![xDrip Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

Wil je 's nachts andere instellingen (bijvoorbeeld een hoger streefdoel), dan is het [scène](#scenes)-sjabloon *Slaap* een goed startpunt.

#### Reizen

##### Hoe ga ik om met een andere tijdzone?

Met DanaR en DanaR Koreaans hoef je niets te doen. Voor andere pompen: zie de pagina [Wisselen van tijdzone en zomertijd](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) voor meer details.

### Medische onderwerpen

#### Ziekenhuisopname

Wil je informatie over AAPS en zelfgebouwde loops delen met je zorgverleners, dan kun je de [gids over AAPS voor zorgverleners](../UsefulLinks/ClinicianGuideToAaps.md) afdrukken.

#### Afspraak met je internist (endocrinoloog)

##### Rapportage

Je kunt je Nightscout-rapporten laten zien (https://YOUR-NS-SITE.com/report) of [Nightscout Reporter](https://nightscout-reporter.zreptil.de/) gebruiken.

## Vaak gestelde vragen op Discord en de antwoorden...

### Mijn probleem staat hier niet tussen.

Zie [Waar kan ik hulp krijgen?](../GettingHelp/WhereCanIGetHelp.md). Heb je zelf de oplossing gevonden, **vraag ons dan om die aan deze lijst toe te voegen!**

### Bouwen en installeren

(FAQ-build-errors)=

#### Ik heb problemen of fouten bij het bouwen van de app.

Kijk op de pagina met probleemoplossing voor de manier waarop je **AAPS** bouwt (zie [AAPS bouwen](../SettingUpAaps/BuildingAaps.md)):

* bouwen in de browser: [Bouwen in de browser: probleemoplossing](#aaps-ci-troubleshooting),
* bouwen met Android Studio: [Problemen met Android Studio oplossen](../GettingHelp/TroubleshootingAndroidStudio.md).

(FAQ-build-error-file-name-too-long)=

#### Bouwfout: bestandsnaam te lang

Deze fout kan optreden bij het bouwen met Android Studio: het bouwen stopt met een foutmelding dat de bestandsnaam te lang is. Mogelijke oplossingen: Zet je broncode in een map dichter bij de hoofdmap van je schijf (bijv. "C:\src\AndroidAPS").

In Android Studio: Zorg dat "Gradle" klaar is met synchroniseren en indexeren na het openen van het project en het ophalen (pull) van GitHub. Voer een Build->Clean Project uit voordat je een Rebuild Project doet. Voer File->Invalidate Caches uit en herstart Android Studio.

(FAQ-running-dev-version)=

#### Waarschuwing: Dev versie actief. Closed loop gedeactiveerd

**AAPS** toont deze melding als je een ontwikkelversie (dev) gebruikt zonder engineering modus: in een dev versie werkt de gesloten loop alleen in engineering modus.

De dev versie is bedoeld om te testen, niet om echt mee te loopen: lees [Development branch (ontwikkelversie)](../AdvancedOptions/DevBranch.md) voordat je verder gaat.

Zo zet je de engineering modus aan:

1. Zet een bestand met de naam `engineering_mode` in de submap `extra` van je AAPS map (de map die je in de Setup Wizard hebt gekozen, meestal `AAPS/extra`). Elk bestand is goed, zolang het de juiste naam heeft.
2. Start **AAPS** opnieuw, zodat het het bestand vindt.

Tip: Maak een kopie van een bestaand logbestand en hernoem het naar "engineering_mode" (let op: geen bestandsextensie!).

### Doelen

#### Ik zit vast op een doel en heb hulp nodig.

Lees eerst [De Doelen voltooien](../SettingUpAaps/CompletingTheObjectives.md). Zit je nog steeds vast, maak dan een schermafbeelding van de vraag en de antwoorden en plaats die in het AAPS-kanaal op Discord. Vergeet niet te vertellen welke opties je kiest (of niet) en waarom. Je krijgt hints en hulp, maar je moet de antwoorden zelf vinden.

### Instellingen, wachtwoorden en back-ups

(FAQ-reset-master-password)=

#### Hoe reset ik het hoofdwachtwoord?

Ben je je hoofdwachtwoord vergeten, dan kun je het resetten naar het serienummer van je pomp:

1. Maak een leeg bestand met de naam `PasswordReset` (zonder bestandsextensie) in de submap `extra` van je AAPS map (meestal `AAPS/extra`).
2. Start **AAPS** opnieuw. Je pomp moet verbonden zijn: **AAPS** toont "Wachten op pomp…" en moet het serienummer van de pomp binnen 30 seconden uitlezen.
3. **AAPS** toont "Wachtwoord ingesteld!": je hoofdwachtwoord is nu het **serienummer van je pomp**. Het bestand `PasswordReset` wordt automatisch verwijderd.
4. Open **Instellingen** > **Beveiliging** > **Hoofdwachtwoord** en stel een nieuw wachtwoord in.

Wordt de pomp niet op tijd bereikt, dan verandert er niets: controleer de verbinding met de pomp en probeer het opnieuw.

Dit reset alleen het hoofdwachtwoord. Een wachtwoord of pincode voor instellingen, de app of bolussen wordt niet gereset, maar je kunt in plaats daarvan altijd het hoofdwachtwoord gebruiken.

    {admonition} Oude instellingenbestanden
    :class: warning
    Instellingenbestanden die met het oude hoofdwachtwoord zijn geëxporteerd, kun je alleen met dat oude wachtwoord importeren.

(FAQ-where-are-settings-files)=

#### Waar vind ik de instellingenbestanden?

Instellingenbestanden worden opgeslagen in de submap `preferences` van de AAPS map die je in de [Setup Wizard](#SetupWizard-StoragePermission) hebt gekozen (bijvoorbeeld `/internal storage/AAPS/preferences`). Heb je een cloudmap (Google Drive) ingesteld, dan kunnen je exports ook daar worden opgeslagen. Zie [Back-ups maken en terugzetten](../Maintenance/ExportImportSettings.md).

WAARSCHUWING: Zorg dat je je wachtwoord niet kwijtraakt, want zonder dit wachtwoord kun je een versleuteld instellingenbestand niet importeren!

(FAQ-import-settings-earlier-versions)=

#### Hoe importeer ik instellingen van oudere versies van AAPS in AAPS v3 of v4?

Je kunt (in AAPS v3 of v4) alleen instellingen importeren die zijn geëxporteerd met AAPS v2.8x of nieuwer. Gebruikte je een versie van AAPS ouder dan v2.8x, of moet je instellingen gebruiken die met een versie ouder dan v2.8x zijn geëxporteerd, dan moet je eerst AAPS v2.8 installeren. Importeer de oudere instellingen van v2.x in v2.8. Controleer of alles in orde is en exporteer dan de instellingen uit v2.8. Installeer de huidige versie van AAPS en importeer daarin de instellingen van v2.8.

Gebruik je dezelfde sleutel om de oude en de nieuwe versie te bouwen, dan hoef je de instellingen niet eens te importeren. Je kunt de nieuwe versie over de oude heen installeren.

Er zijn enkele nieuwe doelen toegevoegd. Je moet ze valideren.

(FAQ-delete-treatments)=

#### Waar kan ik behandelingen verwijderen?

Open het **menu** (☰) en kies **Behandelingen geschiedenis**. Druk lang op een regel om die te selecteren, tik zo nodig op meer regels, tik dan op het **prullenbak**-pictogram en bevestig. Zie [Behandelingen geschiedenis](#aaps-screens-treatments).

### Problemen met telefoon en verbinding

(FAQ-aaps-stops)=

#### AAPS stopt dagelijks rond dezelfde tijd.

* Google Play Protect kan **AAPS** op sommige telefoons elke ochtend afsluiten. Gebeurt dit, ga dan naar de opties van Google Play en schakel **Google Play Protect** uit.
* Zoek naar "schoonmaak"-apps (bijv. CCleaner) en verwijder ze.
* Zet alle batterijoptimalisaties voor **AAPS** uit (zie [batterijbesparing](#FAQ-battery-savings) hieronder).

(FAQ-battery-savings)=

#### Hoe stel ik batterijbesparing in?

Je telefoon kan **AAPS** en verwante apps (CGM-app, Bluetooth) pauzeren als je ze niet gebruikt. **AAPS** kan dan zijn werk niet doen, en Bluetoothverbindingen met de sensor en de pomp (of RileyLink) kunnen worden afgesloten. Dat geeft meldingen "pomp niet beschikbaar" en communicatiefouten.

Zet de batterijoptimalisatie uit voor **AAPS**, je CGM-app (bijv. xDrip) en de Bluetooth-systeemapp. Hoe je dit doet, hangt af van het merk, het model en de Android-versie van je telefoon:

* zie [Batterijoptimalisatie](#generaltroubleshooting-android-related-issues) voor telefoons van Pixel, Samsung en Huawei,
* open in **AAPS** het **menu** (☰) > **Over** en tik op **Sluit mijn app niet af?**, of ga voor andere merken naar [Don't kill my app](https://dontkillmyapp.com/).

Weet je niet zeker of batterijbesparing je probleem veroorzaakt, dan kun je tijdelijk alle batterijbesparing op de telefoon uitzetten: je batterij raakt dan sneller leeg, maar je ziet snel of het probleem verdwijnt.

(FAQ-pump-unreachable-alerts)=

#### Meerdere keren per dag of 's nachts de melding Pomp niet beschikbaar.

Je telefoon pauzeert misschien **AAPS** of zelfs Bluetooth, waardoor de verbinding met de pomp of RileyLink wegvalt (zie [batterijbesparing](#FAQ-battery-savings) hierboven).

Je kunt ook aanpassen wanneer de melding komt: druk op het pictogram **Instellingen** (tandwiel) rechtsboven op het hoofdscherm en kies dan **Lokale alarmen** > **Maximale tijd pomp onbereikbaar** (30 tot 300 minuten). Kijk op de pagina van je pomp: voor sommige pompen wordt een waarde aangeraden, bijv. 120 minuten voor [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md).

(FAQ-link-unresponsive)=

#### Mijn link/pomp/pod reageert niet (RL/OL/EmaLink…)

With some phones, there are Bluetooth disconnects from the Links (RL/OL/EmaLink).

Some also have non responsive Links (AAPS says that they are connected but the Links can't reach or command the pump).

Probeer eerst de knop **Reset RileyLink** op het pompscherm (zie de pagina van je pomp: [Medtronic](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump), [Omnipod Eros](#OmnipodEros-reset-rileylink-config-notes)). Helpt dit niet, dan krijg je al deze onderdelen het makkelijkst weer samen aan het werk zo:

1. Zet de Link uit.
2. Sluit **AAPS** af (**menu** (☰) > **Afsluiten**).
3. Druk lang op het pictogram van **AAPS**, open de Android **App-info**, tik op **Gedwongen stoppen** en dan op **Opslag** > **Cache wissen** (wis NIET de opslag/gegevens!).
4. Een enkele telefoon moet hier opnieuw worden opgestart. Je kunt het proberen zonder herstarten.
5. Zet de Link aan.
6. Start **AAPS**.
7. Tik op het pompscherm op **Koppel RileyLink** en kies opnieuw je Link.

### Afstandsbediening

(FAQ-aapsclient)=

#### De app AAPSClient voor bediening op afstand instellen en gebruiken

**AAPSClient** is een aparte app waarmee een verzorger **AAPS** op afstand kan volgen en bedienen. Sinds **AAPS** v4 moeten de twee apps eenmalig worden gekoppeld voordat je **AAPS** vanuit AAPSClient kunt bedienen. Zie:

* [De app AAPSClient](#aapsclient-app): installeren, eerste start en koppelen,
* [Master ↔ Client besturing](#client-master-control): wat je kunt bedienen en hoe het koppelen werkt,
* [AAPSClient op een smartwatch](#remotecontrol-smartwatches).

(FAQ-hardened-mode)=

#### Behandelingen die ik op de Nightscout-website invoer, worden niet uitgevoerd

Dat komt door de [beveiligde modus](#client-master-control-hardened-mode). Zolang client besturing aan staat — in Eenvoudige modus altijd — neemt **AAPS** alleen wijzigingen aan van gekoppelde clients, niet van de Nightscout-website of andere apps. Voer ze in plaats daarvan in op een gekoppelde **AAPSClient**.

### Alarmen en waarschuwingen

#### Ik heb een rood waarschuwingsteken (rode driehoek) / AAPS zet de gesloten loop niet aan / De loop blijft in LGS / Ik had een gele driehoek

Het rode waarschuwingsteken op de snelkoppeling van de BG-bron is een veiligheidsfunctie in AAPS. Zie [BG-waarschuwingsteken](#aaps-screens-bg-warning-sign) voor de volledige uitleg.

Een rood waarschuwingsteken op de snelkoppeling van de BG-bron in de onderste balk (de rode driehoek van oudere versies) betekent dat je dubbele BG-waarden hebt en dat AAPS de delta's niet precies kan berekenen. Een gesloten loop wordt overgezet naar de modus **Stop bij laag**: die verlaagt of stopt nog steeds je basaal om je tegen lage waarden te beschermen, maar geeft geen correctie-insuline. Je moet van elke dubbele waarde één BG verwijderen om de waarschuwing weg te krijgen. Tik op de snelkoppeling om je [BG-bronscherm](#aaps-screens-bg-source) te openen: de dubbele waarde is rood gemarkeerd. Druk lang op een regel die je wilt verwijderen, vink van elke dubbele regel er één aan en tik op het prullenbak-pictogram. Mogelijk moet je de AAPS database resetten als er te veel dubbele BG-waarden zijn. In dat geval raak je ook de statistieken, IOB, COB en het gekozen profiel kwijt.

Als de waarschuwing weg is, gaat AAPS niet vanzelf terug naar **Closed loop**. Druk op het loop-pictogram op het hoofdscherm en kies weer **Closed loop**.

Mogelijke oorzaak van het probleem: xDrip en/of NS vullen deze BG-waarden na.

De gele driehoek van oudere versies betekende een onregelmatige tijd tussen de BG-metingen (BG-waarden niet regelmatig elke 5 min ontvangen, of ontbrekende BG-waarden). Dat gebeurt vaak met Libre of na het wisselen van een G6-zender. **AAPS** 4 toont hem niet meer: het berekent de waarden op de achtergrond opnieuw en de loop werkt goed.

### Omnipod DASH

(FAQ-move-dash-pod)=

#### Kan ik een actieve DASH Pod naar een andere telefoon verplaatsen?

De status van de Pod zit in de geëxporteerde instellingen. Een actieve Pod kan dus naar een andere telefoon worden verplaatst: exporteer de instellingen vlak voor de verhuizing en importeer ze op de andere telefoon. Dit wordt niet officieel ondersteund en je kunt de Pod kwijtraken: probeer het zo mogelijk als je Pod bijna verloopt.

Lees eerst deze onderdelen:

* [Export and import settings](#omnipod-dash-export-import) on the Omnipod DASH page, and [Tubeless pumps](#ExportImportSettings-tubeless-pumps): on the new phone, tick **Also replace pump settings** and use a file exported while wearing your current Pod,
* [Een pod verwijderen](#omnipod-dash-discard-pod), om de Pod daarna van de oude telefoon te verwijderen. Houd de oude telefoon in vliegtuigmodus tot de Pod is verwijderd, zodat de twee telefoons nooit tegelijk met de Pod praten.