
# Release notes

```{toctree}
:hidden:

Update2_7.md
Update3_0.md
UpdateAaps3204.md
```

Volg de instructies in de [handleiding voor het bijwerken](UpdateToNewVersion.md) om naar een nieuwe versie bij te werken. Het deel over probleemoplossing op de pagina met de handleiding voor het bijwerken behandelt ook de meest voorkomende problemen bij het bijwerken van **AAPS**.

```{admonition} Upgrading from AAPS v3?
:class: tip
Zie [Wat is er veranderd in AAPS v4](V4Changes.md) voor de belangrijke wijzigingen in gedrag: functies die verplaatst zijn, een nieuwe naam hebben gekregen of verwijderd zijn.
```

Als er een nieuwe update beschikbaar is, krijg je een notificatie zoals deze:

![Informatie over de update](../images/AAPS_LoopDisable90days.png)

Als je niet bijwerkt vóór de vervaldatum, schakelt **AAPS** over naar Open loop.

Zie [Einde van de ondersteuning](EndOfLife.md) voor de einddatums van AAPS-versies.

**Negeer de notificatie niet.** Nieuwe versies van **AAPS** bevatten belangrijke oplossingen voor de veiligheid. Daarom moet elke gebruiker van **AAPS** zo snel mogelijk bijwerken naar de nieuwste versie. Dit is een poging om de veiligheid te verbeteren voor elke gebruiker van **AAPS** en voor de DIY-gemeenschap. Bedankt voor je begrip.

(maintenance-android-version-aaps-version)=

## Android versie en AAPS versie

Als je smartphone een Android-versie ouder dan Android 12 heeft, kun je AAPS v3.4 en hoger niet gebruiken, want daarvoor is minstens Android 12 nodig.

Om gebruikers met een oudere Android-versie een oudere versie van AAPS te laten gebruiken, zijn er nieuwe versies uitgebracht die alleen de versiecontrole veranderen. Er zijn geen andere verbeteringen inbegrepen.

Zoek je Android-versie in de tabel hieronder en gebruik de **AAPS**-versie die erbij hoort. De code wordt gedownload van <https://github.com/nightscout/AndroidAPS> met de getoonde branch.

| Jouw Android-versie | AAPS-versie om te gebruiken | Branch om te downloaden                                          |
| ------------------- | --------------------------- | ---------------------------------------------------------------- |
| Android 12 en hoger | Nieuwste versie             | [master](https://github.com/nightscout/AndroidAPS) (standaard)   |
| Android 11          | **3.3.2.1**                 | [3.3.2.1](https://github.com/nightscout/AndroidAPS/tree/3.3.2.1) |
| Android 9, 10       | **3.2.0.4**                 | [3.2.0.4](https://github.com/nightscout/AndroidAPS/tree/3.2.0.4) |
| Android 8           | **2.8.2.1**                 | [2.8.2.1](https://github.com/nightscout/AndroidAPS/tree/2.8.2.1) |
| Android 7           | **2.6.2**                   | [2.6.2](https://github.com/nightscout/AndroidAPS/tree/2.6.2)     |

## WearOS-versie

- AAPS heeft WearOS 3.0, 3.2 of 3.5 (Android 11, API-niveau 30) of nieuwer nodig. Horloges met WearOS 2 worden niet ondersteund.

```{tip}
WearOS 5, API-niveau 34 (Android 14) heeft [beperkingen](#BuildingAapsWearOs-WearOS5).
```

(latestrelease)=

(version400)=

## Versie 4.0.0

Release datum: 31-10-2026

### Nieuwe functies
- Nieuwe gebruikersinterface: de telefoonapp is opnieuw gebouwd in Jetpack Compose @MilosKozak
- [Overal zoeken](../DailyLifeWithAaps/GlobalSearch.md) @MilosKozak
- Migratie naar Kotlin Multiplatform, client voor Windows, Mac, Linux-desktop en iOS @MilosKozak
- [Scènes](../DailyLifeWithAaps/Scenes.md): sla een set acties op en voer ze samen uit @MilosKozak
- [Master ↔ Client besturing](../RemoteFeatures/ClientMasterControl.md): stuur commando's van een client-telefoon naar de master @MilosKozak
  - [Rollen van clients](#client-master-control-roles): Alleen lezen, Maaltijden, Zorgverlener of Beheerder voor elke client @MilosKozak
  - [Beveiligde modus](#client-master-control-hardened-mode): als Client besturing aan staat, neemt de master alleen wijzigingen aan van gekoppelde clients @MilosKozak
  - Koppelen met een QR-code die ook Nightscout op de client instelt, of met een pincode; het geheime koppelgegeven wordt direct na het koppelen vervangen @MilosKozak
  - [Eigen Nightscout-token](#client-master-control-own-token) voor elke client, met alleen de rechten die een client nodig heeft @MilosKozak
- Ondersteuning voor [insulineconcentratie](../AdvancedOptions/InsulinConcentration.md) (U200, U500) in pompen, wizard en profielen @Philoul @MilosKozak
- Insulinebeheer: lijst met insulines, bijnamen, keuze in profiel en wizard @Philoul
- Plugin voor kalibratie @MilosKozak
- [Vloeiend maken](../CompatibleCgms/SmoothingBloodGlucoseData.md): Unscented Kalman Filter (UKF) @piecycle
- [Site rotatie](#Aapsscreens-site-rotation): infuusplaatsen bijhouden en afwisselen @Philoul @MilosKozak
- [Autotune](../AdvancedOptions/Autotune.md) vernieuwd @Philoul
- Nieuwe [widgets](../DailyLifeWithAaps/Widgets.md) @MilosKozak @t1dude
- Toegankelijkheid: de telefoonapp werkt met een schermlezer - knoppen met namen, uitgesproken status, beschrijvingen van grafieken en koppen om snel door te lopen @MilosKozak
- [Instellingen importeren](../Maintenance/ExportImportSettings.md): de pompinstellingen kunnen behouden blijven @MilosKozak
- De vaste notificatie gebruikt live updates van Android, met ondersteuning voor de Samsung Now bar en de delta @premnirmal
- BG-grafiek: [druk lang](#aaps-screens-graph-press-and-hold) om de waarden bij een meting te zien, in elke grafiek van het overzicht @t1dude @olorinmaia
- Betere prestaties @MilosKozak
- Automatische e-carbs in de Bolus wizard @MilosKozak

### Nieuwe apparaten
- **CareLevo**: nieuwe [pompdriver](../CompatiblePumps/CareLevo.md) @Kisu-Choi @MilosKozak
- **Dana-i2**: ondersteuning @MilosKozak
- **Instara**: nieuwe CGM-bron @leohunt

### Verbeteringen in pompdrivers
- Overzichtsschermen van de pomp opnieuw gebouwd voor Insight, Medtronic, Medtrum, Omnipod, Dana, Diaconn en Equil @MilosKozak
- **Omnipod Dash**: Ref-codes zoals op de PDM en leesbare foutbeschrijvingen, driftcompensatie altijd aan, betere melding van het type bolus @nl-ruud
- **Omnipod**: harde einddatum voor Dash & Eros @mcnelson
- **DanaR, RS**: pompemulator om te testen @MilosKozak
- **Equil**: pompemulator om te testen @MilosKozak
- Veel oplossingen voor pompen en de loop @MilosKozak en anderen

### Wear OS
- [Horloge-app](../WearOS/WearOsSmartwatch.md) opnieuw gebouwd in Compose, nieuwe tegels en complicaties, automatische installatie van de watchface (Watch Face Push) op Wear OS 6+ @olorinmaia @Philoul
- CustomWatchface beschikbaar voor WearOS 6.0 (GW7, GW8, GW9...) met een speciale WFF-watchface @Philoul @olorinmaia
- CustomWatchface kan nu 5 complicatieplaatsen bevatten die je kunt aanpassen (nieuwe functie, alleen beschikbaar voor oudere horloges) @Philoul
- Nieuwe [WFF-watchface gebaseerd op AAPS-complicaties](#wearos-complications-watchface-setup) @olorinmaia
- Correcties in het resultaat van de Bolus wizard en de Quick Wizard @olorinmaia
- Nieuwe activiteiten BG-grafiek en Bedrijfsmodus in het hoofdmenu @olorinmaia
- Bolus wizard: pagina [Type maaltijd](#WearOsSmartwatch-wizard-meal-type) die de koolhydraten verdeelt zoals de wizard op de telefoon, en [Koolhydraattijd](#WearOsSmartwatch-wizard-carb-time) met de herinnering *Tijd om te eten* op het horloge @olorinmaia
- [Telefoonalarmen op het horloge](#WearOsSmartwatch-phone-alarms): het horloge toont het alarm en biedt Stil en Demp 5 min @olorinmaia

### Bouwen
- CI-workflows voor builds van tags/branches, koppeling van JDK-versies @Angus-repo

### Bijdragers
@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

Volledige lijst met wijzigingen: <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

(version3426)=

## Versie 3.4.2.6

- Equil: betere stabiliteit @MilosKozak

(version3425)=

## Versie 3.4.2.5

- Equil: race condition opgelost @MilosKozak

(version3424)=

## Versie 3.4.2.4

- Equil: verbeteringen @MilosKozak
- Synchronisatie van NS-profiel opgelost @MilosKozak

(version3423)=

## Versie 3.4.2.3
- Dash: oplossing voor drift @nl-ruud
- NSClientV3: gat na opnieuw verbinden opgelost @MilosKozak
- Automatisering: deserialisatie opgelost @MilosKozak
- Equil: batterijmelding opgelost @MilosKozak
- Opschonen van de workflow @vanelsberg
- Equil: beter herstel na fouten @MilosKozak
- DanaRS: communicatie met binnenlandse pomp opgelost @MilosKozak
- Insight: synchronisatie van TBR opgelost @MilosKozak
- Dash: fout bij activering opgelost @nl-ruud

(version3422)=

## Versie 3.4.2.2

- Problemen met Equil en Medtronic opgelost
- Betere veiligheid van Medtrum

(version3421)=

## Versie 3.4.2.1

- Equil: Koppelen en voortgangsvenster opgelost @MilosKozak

(version3420)=

## Versie 3.4.2.0

Release datum: 04-02-2026

- Equil: weerstand voor verschillende modellen opgelost @hhfcvmars
- Tidepool: sessie opgelost @MilosKozak
- Medtrum: activeringsroute opgelost door dubbel vullen te voorkomen @MilosKozak
- COB: berekening van COB opgelost (lost een gevaarlijk randgeval op) @MilosKozak

(version3410)=

## Versie 3.4.1.0

Release datum: 03-08-2026

### Kern
- Verwerking van zomer-/wintertijd opgelost @MilosKozak
- Herkennen van een normaal streefdoel verbeterd en gelijkgetrokken (mg/dl > 99, mmol > 5,5) @MilosKozak
- SMS: RESTART beveiligd met een pincode @MilosKozak
- Onderhoud: waarschuwing als de verkeerde map is gekozen @MilosKozak

### Verbeteringen in pompdrivers
- **Omnipod Dash**: code van de BLE-driver verplaatst naar de module omnipod/common @jwoglom
- **Omnipod Dash**: poging om de verbindingsstatus te repareren @MilosKozak
- **Omnipod**: profiel controleren vóór de pod-activering, zodat er geen pods verloren gaan (#4534) @brianV
- **Medtronic**: zelfde coderingstype getoond in het instellingenvenster opgelost @mifi100
- **Medtronic**: gemeenschappelijke pompklassen voorbereid (voorbereiding op Tandem) @andy-rozman
- **RileyLink**: codering opgelost (#4519) @mifi100
- **Equil**: meer insulinepompen ondersteund via het begin van het serienummer (#4510) @hhfcvmars
- **Equil**: logging toegevoegd @MilosKozak
- **Diaconn G8**: fout bij het synchroniseren van het logboek opgelost en ondersteuning voor firmware 3.58+ toegevoegd @miyeongkim
- **Diaconn**: omrekening van de eenheid van de TBR-duur opgelost @miyeongkim
- **Diaconn**: commandQueue.loadEvents() gebruikt voor het synchroniseren van de geschiedenis @miyeongkim
- Insuline toedienen is mogelijk als de loop onderbroken is maar de pomp beschikbaar is @cschuijt

### Cloud / Back-up
- Back-up naar Google Drive toegevoegd @Angus-repo
- De gebruikersinterface krijgt een melding als de foutstatus van de cloudopslag verandert @Angus-repo
- Lokale opslag en cloudopslag kunnen tegelijk worden gebruikt @Angus-repo

### Tidepool
- Betere migratie naar Tidepool OAuth2 @MilosKozak
- Eindeloze status BLOCKED bij Tidepool opgelost, afwijzen van lege SSID's opgelost @michaeln-synapse

### NSClient
- NSCv3: beter opnieuw verbinden @MilosKozak

### Wear OS
- Nieuwe IOB tonen in het resultaat van de wizard als IOB in de berekening wordt gebruikt @olorinmaia
- BolusProgress met totale hoeveelheid op Wear opgelost @Philoul

### Gebruikersinterface
- Beter ic_none-pictogram voor Site rotatie @Philoul
- Opgelost dat de instelling voor het beheren van de pomp bij Site rotatie niet werd gebruikt @samfundev

### Bijdragers
@MilosKozak @Philoul @olorinmaia @jwoglom @mifi100 @andy-rozman @Angus-repo @brianV @cschuijt @hhfcvmars @miyeongkim @samfundev @michaeln-synapse

(version3400)=

## Versie 3.4.0.0

Release datum: 31-12-2025

### Voordat je bijwerkt:
* Deze versie heeft Google Android 12.0 of hoger nodig. Controleer de versie van je telefoon voordat je probeert bij te werken.
* Werk Android Studio bij naar de nieuwste versie, of nog beter: bouw de app in de browser.

### Nieuwe functies
* Bedrijfsmodus @MilosKozak
  * [Geschiedenis van de loop-status](#AapsScreens-running-mode) getoond in de tabbladen met behandelingen
  * [Loop-status vanuit AAPSClient](#RemoteControl_aapsclient) tonen en wijzigen.<br>LET OP: hiervoor is de instelling [NSClient > Synchronisatie > Ontvang bedrijfsmodus van NS](#Preferences-nsclient-synchronization) nodig
* [Nieuwe CGM's](../Getting-Started/CompatiblesCgms.md): Glunovo, Intelligo, Sinocare
* Ondersteuning voor [Site rotatie](#Aapsscreens-site-rotation) @Philoul
* Nieuwe [actie voor automatisering](#automations-automation-action): SMB's aan- of uitzetten @MilosKozak
* Syai CGM is een [betrouwbare bron](#GettingStarted-TrustedBGSource) en ondersteunt geavanceerd filteren @MilosKozak

### Verbeteringen voor Wear OS
* veel minder batterijverbruik @MilosKozak
* verbeteringen en reparaties in de gebruikersinterface @olorinmaia
* code bijna helemaal herschreven voor de huidige versies van de bibliotheken (eerder WearOS 2) @MilosKozak
* 2 nieuwe complicaties voor uitgebreide gegevens @Philoul
* Overgestapt op een moderne complication provider met DataStore @MilosKozak

### Geheugenlekken opgelost
* Geheugenlekken in de code opgelost @MilosKozak
* Melding van geheugenlekken met LeakCanary naar Firebase Crashlytics toegevoegd @MilosKozak

### Verbeteringen in pompdrivers
* **DanaI**: problemen met verbroken verbinding opgelost @MilosKozak
* **RileyLink**: snellere communicatie door kortere wachttijden @mifi100
* **Medtrum**: activeringstijd en leeftijd van de patch worden getoond @vanelsberg, probleem met hoofdletters in het wachtwoord opgelost @MilosKozak
* **Combo**: race conditions in tests opgelost @MilosKozak @dv1
* **Equil**: betere verbinding, minder batterijverbruik @MilosKozak

### Nightscout-synchronisatie
* Betere ontdubbeling bij fouten in NS @MilosKozak

### Verbeteringen in UI/UX
* diverse verbeteringen @MilosKozak @Philoul @olorinmaia

### Automatisering
* Nieuwe actie voor SMB - SMB aan- of uitzetten via automatisering @MilosKozak

### Testen
* Uitgebreide unittests toegevoegd voor de pompen Equil, Eopatch, Dana en Medtronic @MilosKozak
* Betere stabiliteit en dekking van tests in meerdere modules @MilosKozak

### Tidepool
* Tidepool OAUTH2 (ondersteuning voor de nieuwe Tidepool-aanmelding) @MilosKozak

(version3321)=

## Versie 3.3.2.1

Release datum: 13-08-2025

- Omnipod Bluetooth-verbinding op Android 16 opgelost
- CI-proces (bouwen in de browser)
- Omrekening mmol-mg/dl opgelost
- Verkeerde tijdkeuze in dialoogvensters in sommige tijdzones opgelost
- Lezen van sleutels in de eenvoudige modus opgelost
- Ontbrekende voorspellingen op Wear opgelost
- Betere Configuratie
- Betere volledige synchronisatie met NSCv3

(version3300)=

## Versie 3.3.2.0

Release datum: 27-03-2025

### Hoe je bijwerkt

* Om deze versie te bouwen heb je [de versie van Android Studio met de naam "Meerkat"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) of hoger nodig. Als je al een versie 3.3.x hebt gebouwd, moet je Android Studio opnieuw bijwerken.

(version-enforcement)=

### Vanaf deze versie zijn de notificaties en het afdwingen van versies eenvoudiger en milder gemaakt. Het werkt als volgt:
*  Geen vervaldatum als het apparaat offline is (als er geen verbinding met internet is). Er zijn dus geen extra periodes van 60 en 90 dagen meer.
*  Na de vervaldatum wordt de LGS-modus afgedwongen
*  Je krijgt minder vaak waarschuwingen/notificaties:
   - nog 28 dagen of meer: elke 7 dagen
   - nog 27–14 dagen: elke 3 dagen
   - daarna één keer per dag
   - De notificatie komt na 12 uur 's middags, zodat je er 's nachts geen last van hebt
* Er zijn maar 2 soorten notificaties
   - Nieuwe versie beschikbaar (heeft geen gevolgen voor AAPS)
   - De app vervalt op een datum in de toekomst (nog geen gevolgen voor AAPS) / is vervallen (AAPS gaat naar de LGS-modus)

### Nieuw

* SMS-commando RESTART @MilosKozak
* Parameters voor Profiel wissel op het horloge @olorinmaia
* Donkere modus voor de watchface AAPS V2 @olorinmaia
* Betere uitwisseling van G7-gegevens @olorinmaia
* Widget configuratie @MilosKozak
* Verbeteringen in de weergave van keuzerondjes @olorinmaia
* Automatisering: locatie kiezen op de kaart @MilosKozak
* Versie zichtbaar op de hoofdschermen @MilosKozak
* Bouwen met het bestaande git-systeem is verplicht (geen zip-downloads)
* Versie tonen op het hoofdscherm @MilosKozak
* Verbeteringen bij het uploaden naar Tidepool @ConstantinMatheis

### Opgeloste fouten

* Probleem met unbonding bij Dash opgelost @Andreas
* Verbeteringen voor Garmin @robertbuessow @suside
* Weergave van IOB in dialoogvensters opgelost @olorinmaia
* Betere spelling en controle in Doelen @MilosKozak
* Weergave van geëmuleerde TBR's opgelost @MilosKozak
* Omzeilen van de beveiliging opgelost @tdrkDev

## Versie 3.3.1.3

Release datum: 21-01-2025

### Opgeloste fouten

* Dash: bonding is optioneel (standaard uit) @MilosKozak
* Equil: bolus van 10+ U opgelost, verbeteringen in alarmen @EquilHack
* Garmin: verbeteringen voor het horloge @swissalpine
* Verbeteringen voor het horloge @olorinmaia
* Loop-status bedienen vanaf het horloge @tdrkDev
* Betere stabiliteit

*  **Misschien moet je de [Authenticator opnieuw instellen](#sms-commands-authenticator-setup).**

## Versie 3.3.1.2

Release datum: 15-01-2025

### Hoe je bijwerkt

* Om deze versie te bouwen heb je [de versie van Android Studio met de naam "Ladybug Feature Drop"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) of hoger nodig. **Dit is niet hetzelfde als gewoon "Ladybug".** Als je al een versie 3.3.x hebt gebouwd, moet je Android Studio opnieuw bijwerken.

### Opgeloste fouten

* Dash: gebruik bonding op Android 15+
* Dexcom-knop op het Overzicht teruggezet
* Equil: een pomp die niet werkt kan nu worden verwijderd
* Waarschuwing als de Aanpassingsfactor Dynamische ISF nul is
* NSCv3: websocket-communicatie opgelost op telefoons met een iets andere tijd
* SMS-commando's: OneTimePassword opgelost. **Misschien moet je de [Authenticator opnieuw instellen](#sms-commands-authenticator-setup).**
* Probleem opgelost waarbij sommige instellingen niet meer konden worden gewijzigd.
* Reset van het hoofdwachtwoord met de virtuele pomp opgelost.
* Import van grote back-upbestanden van instellingen opgelost.

## Versie 3.3.1.0

Release datum: 06-01-2025

### Wijzigingen in de gebruikersinterface

* [Kleuren toegevoegd om AAPSClient en AAPSClient2 uit elkaar te houden](#RemoteControl_aapsclient) @MilosKozak
* Betere indeling en pictogrammen bij de gebruikersacties

### Andere functies

* Nieuwe trigger voor Automatisering: [aantal stappen](#screen-heart-rate-steps) @Roman Rihter
* Bij een volledige synchronisatie met NSCv3 kan nu alles worden ontvangen (ook gegevens die eerder niet werden gesynchroniseerd, zoals TBR) @MilosKozak
* NSClient v3: Mededeling werkt nu (_d.w.z._ van AAPSClient naar AAPS) @MilosKozak

### Technische wijzigingen & opgeloste fouten

* Crash van Insight opgelost @philoul
* Opgelost dat er heel veel extra deviceStatus-records in Nightscout werden gemaakt @MilosKozak
* Opname van koolhydraten opgelost @MilosKozak
* Kleur van RadioButtons & CheckBoxes opgelost @MilosKozak
* Fout in de migratie van het DynISF-percentage opgelost @MilosKozak
* Verkeerd geplaatste DynISF-notificatie opgelost @MilosKozak
* Fout in de watchfaces opgelost @philoul

## Versie 3.3.0.0

Release datum: 29-12-2024

### Belangrijkste functies

* **[Dynamische ISF](../DailyLifeWithAaps/DynamicISF.md)** is geen aparte plugin meer, maar is nu een optie van de plugin [OpenAPS SMB](#Config-Builder-aps), met een paar wijzigingen in de werking:
  * Met **Profiel wissel** en **Profiel percentage** wordt nu rekening gehouden bij **Dynamische ISF** voor de sterkte van de dynamische gevoeligheid
  * De gemiddelde **ISF** van de laatste 24 uur wordt berekend. Deze waarde wordt gebruikt voor de Bolus wizard en de berekening van **COB**. De waarde **Profiel ISF** wordt helemaal niet meer gebruikt (behalve als terugval als er geen historische gegevens zijn)
  * De documentatiepagina over DynamicISF is herschreven. Lees het belangrijke deel [Waar je op moet letten als je Dynamische ISF aanzet](#dyn-isf-things-to-consider-when-activating-dynamicisf).
* ["SMB altijd toestaan" en "SMB toestaan na koolhydraten"](#Open-APS-features-enable-smb-always) voor gebruikers van FreeStyle Libre 2 en Libre 3
  * Let op: dit vereist de nieuwste versie van xDrip+ of Juggluco.
* Nieuwe triggers voor **Automatisering**
* Automatisch exporteren van instellingen

### Hoe je bijwerkt

* Voordat je bijwerkt:
  * **<span style="color:red">Deze versie heeft Google Android 11.0 of hoger nodig</span>**. Controleer de versie van je telefoon voordat je probeert bij te werken.
  * Als je de "oude" Combo-driver met het ruffy-apparaat gebruikt, stap dan vóór de update over naar de [eigen (native) Combo-driver](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)
  * Bij het bijwerken verlies je je [extra grafieken](#AapsScreens-section-g-additional-graphs) op het startscherm: schrijf zo nodig je huidige instellingen op, zodat je ze na de update opnieuw kunt maken.
  * De [problemen met de Bluetooth-verbinding die sommige mensen hebben op Android 15](../Getting-Started/Phones.md) worden **NIET** opgelost door deze versie (dit is een probleem van Android, niet van **AAPS**). Een oplossing is beschikbaar in 3.3.1.2.
  * De BYODA-knop op het startscherm is niet meer beschikbaar door beperkingen van Android. Dit is opgelost in 3.3.1.2.
* Instructies voor het bijwerken: volg de handleiding [Bijwerken naar een nieuwe versie](../Maintenance/UpdateToNewVersion.md).
  * Om deze versie te bouwen heb je [de versie van Android Studio met de naam "Ladybug"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) of hoger nodig. Als je al een oudere versie van Android Studio hebt geïnstalleerd, moet je misschien <span style="color:red">de JVM-versie op 21 instellen</span>. Zie [Problemen met Android Studio oplossen > Incompatible Gradle JVM](#incompatible-gradle-jvm).
  * Tip - als je je **AAPS**-geschiedenis niet wilt verliezen, doe dan ALTIJD een UPDATE en GEEN VERWIJDEREN/INSTALLEREN. Maak voor de zekerheid een back-up van je huidige **AAPS**-instellingen en van de oude APK, zodat je terug kunt naar de oude versie als er iets misgaat.
* Na het bijwerken:
  * Stel de nieuwe [instelling "AAPS map"](#preferences-maintenance-logdirectory) in, op het tabblad Onderhoud.

### Gedetailleerde wijzigingen

#### CGM's en pompen

* ["SMB altijd toestaan" en "SMB toestaan na koolhydraten"](#Open-APS-features-enable-smb-always) voor gebruikers van FreeStyle Libre 2 en Libre 3 @MilosKozak
* Verbeteringen in de [Medtrum-driver](../CompatiblePumps/MedtrumNano.md) @jbr77rr
  * Betere communicatie, met een nieuwe instelling om problemen op sommige smartphones te omzeilen
  * Toon het reservoirniveau aan het begin van de activering
  * Fout opgelost waarbij de activering terugging naar het begin en de gebruiker de activering niet kon afmaken
  * Terugkoppeling over de synchronisatiestatus en andere verduidelijkingen
* Nieuwe ondersteunde pomp: [Equil 5.3](../CompatiblePumps/Equil5.3.md) @EquilHack
* Nieuwe ondersteunde CGM's: [Ottai](../CompatibleCgms/OttaiM8.md) @ottai-developer en [Syai Tag](../CompatibleCgms/SyaiTagX1.md) @syai-dev
* Insight-driver herschreven in Kotlin @Philoul
* Oude Combo-driver die ruffy nodig had, verwijderd

#### Wijzigingen in de gebruikersinterface

* [Eenvoudige modus](#preferences-simple-mode) staat standaard aan bij een nieuwe installatie @MilosKozak
* Nieuwe opties voor [QuickWizard](#Preferences-quick-wizard) @radicalb
  * De QuickWizard gebruikt nu dezelfde logica voor het berekenen en tonen van de bolus als de calculator. Je kunt nu het veld "Koolhydraattijd" in QuickWizard gebruiken om vooraf te bolussen.
* Nieuw [menu voor de schaal van de grafiek](#aaps-screens-main-graph); verbeteringen in het [menu voor extra grafieken](#AapsScreens-activate-optional-information) @Philoul
* [Betere indeling van Configuratie](../SettingUpAaps/ConfigBuilder.md) @MilosKozak
  * Onderdelen zijn nu standaard ingeklapt. Gebruik de pijl om ze uit te klappen.
* Variabele gevoeligheid zichtbaar in AAPSClient
* Verbeteringen in het scherm van de Bolus wizard @kenzo44
* Weergave van tekst in de pomptabbladen bij het lichte thema opgelost @jbr77rr

#### Andere functies

* [Automatisch exporteren van instellingen](#ExportImportSettings-Automating-Settings-Export) @vanelsberg
* Nieuwe [trigger voor Automatisering](#automations-automation-triggers) @vanelsberg
  * Pod activering (alleen patchpomp)
* Nieuwe [triggers voor Automatisering](#automations-automation-triggers) @jbr77rr
  * Canule leeftijd, Insuline leeftijd, leeftijd van de batterij, Sensor leeftijd, Reservoir niveau, Pomp batterij niveau
* Negatieve koolhydraten kunnen worden ingevoerd @MilosKozak
* Nieuwe parameter ["AAPS map"](#preferences-maintenance-settings) om een andere opslagmap dan de standaardmap te kiezen.
* [Insuline vastleggen als de pomp onderbroken is](#aaps-screens-buttons-insulin) is nu mogelijk @jbr77rr
* [Doel 2](#objectives-objective2) bijgewerkt @MilosKozak
  * Controle dat het hoofdwachtwoord is ingesteld en bekend is
* Willekeurige koolhydraten in testmodus @MilosKozak
* Fout in de TDD-berekening opgelost @MilosKozak
* SMS-commando's: je kunt nu kiezen om [bij profielwijzigingen vanuit NS **geen** sms te sturen](#sms-commands-too-many-messages) @MilosKozak

#### Smartwatches

* verbeteringen voor Wear en watchfaces @Philoul @MilosKozak @olorinmaia
* Watch-tegels voor acties van Automatisering @Philoul
* Gecombineerde watchfaces van AAPS, AAPSClient en AAPSClient2 om meer patiënten te volgen @Philoul @MilosKozak
* EXTRA: show\_user\_actions\_on\_watch\_only @MilosKozak

#### Technische wijzigingen

* [andere locatie van de logbestanden](#Accessing-logfiles-accessing-logfiles)
* nieuwe interne structuur van modules @MilosKozak
* opslaglaag gescheiden van de hoofdcode @MilosKozak
* buildbestanden herschreven naar kts @MilosKozak
* algoritmes herschreven in Kotlin voor betere prestaties @MilosKozak
* heel veel nieuwe unittests @MilosKozak en anderen
* meer code omgezet naar Kotlin @MilosKozak
* nieuw beheer van instellingen, xml \-\> kotlin @MilosKozak
* nieuwe CI-configuratie, CI draait op eigen servers @MilosKozak
* bibliotheken bijgewerkt naar de nieuwste versie, toml @MilosKozak
* migratie naar Kotlin 2.0, Java 21 @MilosKozak

(version3204)=

## [Versie 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)

Release datum: 27-02-2024

Dit is de laatste versie die Android 10 ondersteunt. Als je niet kunt bijwerken naar Android 11, [werk AAPS dan bij naar 3.2.0.4](#update-aaps-3204).

### Wijzigingen

- Ondersteuning voor G7 via xDrip
- Verbeteringen voor Medtrum
- Pictogram van Automatisering opgelost
- Probleem bij het halen van doel 1 opgelost

(version3200)=

## Versie 3.2.0.0, opgedragen aan @Philoul

Release datum: 23-10-2023

### Belangrijke opmerkingen

- NS 15 is vereist
- Als je websockets gebruikt in de NS v3-plugin, worden behandelingen die zijn ingevoerd via de NS-website (plusknop) en via andere apps die de v1 API gebruiken, niet naar AAPS gestuurd. Dit wordt opgelost in een toekomstige versie van NS. Gebruik altijd dezelfde client (v1 of v3) in AAPS en AAPSClient, totdat NS intern helemaal is overgestapt op v3. Hetzelfde geldt voor AAPS en AAPSClient zelf.
- Websockets in de v3-plugin werken ongeveer op dezelfde manier als in de v1-plugin. Zonder websockets haalt AAPS op vaste tijden gegevens op uit NS. Dit zou minder stroom moeten gebruiken, omdat NS niet steeds verbonden is. Aan de andere kant betekent dit vertraging bij het uitwisselen van gegevens. Lees [hier](#Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS) de belangrijke opmerkingen van het ontwikkelteam voordat je deze versie gebruikt!
- Als je xDrip als CGM-bron gebruikt, moet je deze na de update opnieuw kiezen, door interne wijzigingen
- Tidepool kan in plaats van NS worden gebruikt om het eerste doel te halen
- Als je gegevens naar xDrip+ stuurt, moet je de xDrip-synchronisatieplugin instellen. Om BG-waarden van AAPS in xDrip te ontvangen, moet "xDrip+ Sync Follower" als bron gekozen zijn
- Als je wilt overstappen naar de ComboV2-driver, moet je Ruffy verwijderen en de pomp opnieuw koppelen met AAPS
- Om de DynISF-plugin te gebruiken, moet je Doel 11 starten (alle vorige doelen moeten afgerond zijn voordat je Doel 11 kunt starten)


### Wijzigingen

- EOPatch2 / GlucomenDay pompdriver @jungsomyeonggithub @MilosKozak
- ComboV2 pompdriver (Ruffy is niet nodig) @dv1
- Medtrum Nano-driver @jbr7rr
- Ondersteuning voor Koreaanse DanaI @MilosKozak
- Ondersteuning voor Glunovo CGM @christinadamianou
- Ondersteuning voor G7 @MilosKozak @rICTx-T1D @khskekec
- NSClient v3-plugin @MilosKozak
- Ondersteuning voor Tidepool @MilosKozak
- Plugin voor vloeiend maken @MilosKozak, @justmara, Exponentieel vloeiend maken @nichi (Tsunami), Gemiddeld vloeiend maken @jbr7rr
- DynamicISF-plugin @Chris Wilson, @tim2000s
- Garmin-watchface & ondersteuning voor hartslag @buessow
- Nieuw logo @thiagomsoares
- Nieuwe watchface @Philoul
- heel veel problemen uit versie 3.1 opgelost
- notities kunnen op meer plaatsen worden toegevoegd @Sergey Zorchenko
- Verbeteringen in de gebruikersinterface @MilosKozak @osodebailar @Andries-Smit @yodax @Philoul @dv1 @paravoid
- nieuwe SMS-commando's LOOP LGS/CLOSED @pzadroga
- vertalingen voor Wear @Andries-Smit
- communicatie met xDrip verplaatst naar een aparte module @MilosKozak
- interne wijzigingen: nieuwere versies van bibliotheken, migratie naar rx3, nieuwe structuur van modules @MilosKozak
- verbeteringen in de Diaconn-driver @miyeongkim
- meer opties voor onderhoud van de database @MilosKozak
- AAPSClient laat zien of de AAPS-telefoon aan de lader is aangesloten @MilosKozak
- Wijziging in de Bolus wizard. Als de CGM niet beschikbaar is, wordt het percentage genegeerd (dus wordt 100% gebruikt)
- migratie naar het kts-buildsysteem @MilosKozak
- betere CI-integratie @MilosKozak @buessow
- opschonen van tests @ryanhaining @MilosKozak
- meer dan 110.000 nieuwe regels code, 240.000 regels gewijzigd, 6884 gewijzigde bestanden

(Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS)=
### Belangrijke opmerkingen over het gebruik van de v3- of v1-API voor Nightscout met AAPS

v1 is het oude protocol voor het uitwisselen van gegevens tussen de NS-website en de NS-server. Het heeft veel beperkingen
- v1 stuurt alleen gegevens van 2 dagen
- v1 stuurt bij elke nieuwe verbinding alle gegevens van 2 dagen opnieuw
- websockets gebruiken is verplicht = vaste verbinding, meer batterijverbruik
- als de verbinding met NS vaak wegvalt, wordt de verbinding 15 minuten gepauzeerd om veel dataverbruik te voorkomen

v3 is het nieuwe protocol. Veiliger en efficiënter
- met tokens kun je toegangsrechten beter instellen
- het protocol is efficiënter aan beide kanten (AAPS & NS)
- Het kan gegevens tot 3 maanden terug uit NS lezen
- je kunt op elk apparaat kiezen of je websockets gebruikt (gebruiken betekent snellere updates, niet gebruiken betekent minder stroomverbruik maar tragere updates, dus minuten)
- NSClient wordt niet gepauzeerd als de verbinding wegvalt

BEPERKINGEN
- Met AAPS 3.2 moet je NS 15 gebruiken
- v3 ziet geen wijzigingen die via het v1-protocol zijn gedaan (dit wordt waarschijnlijk opgelost in een toekomstige versie van NS)
- in de andere richting ziet v1 wel wijzigingen die door v3 zijn gedaan, door de oude, niet efficiënte manier van wijzigingen bijhouden
- let op: NS gebruikt intern nog steeds v1, dus als je v3 gebruikt, kun je geen gegevens invoeren via de NS-website. Je moet AAPSClient of SMS gebruiken als je op afstand gegevens wilt invoeren

AANBEVOLEN INSTELLING
- door al het bovenstaande moet je maar één methode kiezen en die op alle apparaten gebruiken (let op: op het moment van schrijven gebruiken alle andere uploaders v1). Als je kiest voor v3, kies dan v3 in AAPS en in alle AAPSClients
- v3 heeft de voorkeur omdat het efficiënter is
- of je websockets gebruikt met v3 of niet, hangt af van wat je zelf wilt
- het wordt STERK aangeraden om AAPS alle gegevens te laten verzamelen en ze als enige uploader naar NS te sturen. Alle andere apparaten/apps mogen alleen gegevens uit NS lezen. Zo voorkom je conflicten en fouten bij het synchroniseren. Dit geldt ook voor BG-gegevens die naar NS gaan via de Dexcom Share connector enz.

(version3100)=

## Versie 3.1.0

Release datum: 19-07-2022

[Release notes](https://github.com/nightscout/AndroidAPS/releases/tag/3.1.0)

## Versie 3.0.0

Release datum: 31-01-2022

[Release notes](https://github.com/nightscout/AndroidAPS/releases/tag/3.0.0)

## Versie 2.8.2

Release datum: 23-01-2021

[Release notes](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

(version-2811)= (important-hints-2-8-1-1)=

## Versie 2.8.1.1

Release datum: 12-01-2021

[Release notes](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.1.1)

(Releasenotes-version-2-8-0)=

## Versie 2.8.0

Release datum: 01-01-2021

[Release notes](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.0)

(Releasenotes-version-2-7-0)=

## Versie 2.7.0

Release datum: 24-09-2020

[Release notes](https://github.com/nightscout/AndroidAPS/releases/tag/2.7.0)

(Releasenotes-version-2-6-1-4)=

## Versie 2.6.1.4

Release datum: 04-05-2020

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2614)

## Versie 2.6.1.3

Release datum: 03-05-2020

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2613)

## Versie 2.6.1.2

Release datum: 19-04-2020

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2612)

## Versie 2.6.1.1

Release datum: 06-04-2020

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2611)

## Versie 2.6.1

Release datum: 21-03-2020

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-261)

(Releasenotes-version-2-6-0)=

## Versie 2.6.0

Release datum: 29-02-2020

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-260)

## Versie 2.5.1

Release datum: 31-10-2019

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-251)

(Releasenotes-version-2-5-0)=

## Versie 2.5.0

Release datum: 26-10-2019

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-250)

## Versie 2.3

Release datum: 25-04-2019

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-23)

## Versie 2.2.2

Release datum: 07-04-2019

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-222)

## Versie 2.2

Release datum: 29-03-2019

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-22)

## Versie 2.1

Release datum: 03-03-2019

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-21)

## Versie 2.0

Release datum: 03-11-2018

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-20)

## Versie 1.0

```{admonition} First version of **AAPS**
:class: note

De eerste testversie begon in 2015 en de eerste release was in 2016.

De precieze volgorde van deze releases is op dit moment niet bekend, maar omdat deze vraag vaak is gesteld, leggen we het hier vast.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
