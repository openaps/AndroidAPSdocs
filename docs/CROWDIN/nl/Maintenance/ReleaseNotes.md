
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

**Release notes of the latest version of each major release**. For all other versions, see the [releases on GitHub](https://github.com/nightscout/AndroidAPS/releases).

(latestrelease)=

(version400)=

**Versie 4.0.0**

Release datum: 31-10-2026

**Nieuwe functies**

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
- New [automation actions](#automations-automation-action): **Change smoothing** @olorinmaia, and **Run**, **Enable** or **Disable scene** @MilosKozak
- [Site rotatie](#Aapsscreens-site-rotation): infuusplaatsen bijhouden en afwisselen @Philoul @MilosKozak
- [Autotune](../AdvancedOptions/Autotune.md) vernieuwd @Philoul
- Nieuwe [widgets](../DailyLifeWithAaps/Widgets.md) @MilosKozak @t1dude
- Toegankelijkheid: de telefoonapp werkt met een schermlezer - knoppen met namen, uitgesproken status, beschrijvingen van grafieken en koppen om snel door te lopen @MilosKozak
- [Instellingen importeren](../Maintenance/ExportImportSettings.md): de pompinstellingen kunnen behouden blijven @MilosKozak
- De vaste notificatie gebruikt live updates van Android, met ondersteuning voor de Samsung Now bar en de delta @premnirmal
- BG-grafiek: [druk lang](#aaps-screens-graph-press-and-hold) om de waarden bij een meting te zien, in elke grafiek van het overzicht @t1dude @olorinmaia
- Betere prestaties @MilosKozak
- Automatische e-carbs in de Bolus wizard @MilosKozak

**Nieuwe apparaten**

- **CareLevo**: nieuwe [pompdriver](../CompatiblePumps/CareLevo.md) @Kisu-Choi @MilosKozak
- **Dana-i2**: ondersteuning @MilosKozak
- **Instara**: nieuwe CGM-bron @leohunt

**Verbeteringen in pompdrivers**

- Overzichtsschermen van de pomp opnieuw gebouwd voor Insight, Medtronic, Medtrum, Omnipod, Dana, Diaconn en Equil @MilosKozak
- **Omnipod Dash**: Ref-codes zoals op de PDM en leesbare foutbeschrijvingen, driftcompensatie altijd aan, betere melding van het type bolus @nl-ruud
- **Omnipod**: harde einddatum voor Dash & Eros @mcnelson
- **DanaR, RS**: pompemulator om te testen @MilosKozak
- **Equil**: pompemulator om te testen @MilosKozak
- Veel oplossingen voor pompen en de loop @MilosKozak en anderen

**Wear OS**

- [Horloge-app](../WearOS/WearOsSmartwatch.md) opnieuw gebouwd in Compose, nieuwe tegels en complicaties, automatische installatie van de watchface (Watch Face Push) op Wear OS 6+ @olorinmaia @Philoul
- CustomWatchface beschikbaar voor WearOS 6.0 (GW7, GW8, GW9...) met een speciale WFF-watchface @Philoul @olorinmaia
- CustomWatchface kan nu 5 complicatieplaatsen bevatten die je kunt aanpassen (nieuwe functie, alleen beschikbaar voor oudere horloges) @Philoul
- Nieuwe [WFF-watchface gebaseerd op AAPS-complicaties](#wearos-complications-watchface-setup) @olorinmaia
- Correcties in het resultaat van de Bolus wizard en de Quick Wizard @olorinmaia
- Nieuwe activiteiten BG-grafiek en Bedrijfsmodus in het hoofdmenu @olorinmaia
- Bolus wizard: pagina [Type maaltijd](#WearOsSmartwatch-wizard-meal-type) die de koolhydraten verdeelt zoals de wizard op de telefoon, en [Koolhydraattijd](#WearOsSmartwatch-wizard-carb-time) met de herinnering *Tijd om te eten* op het horloge @olorinmaia
- [Telefoonalarmen op het horloge](#WearOsSmartwatch-phone-alarms): het horloge toont het alarm en biedt Stil en Demp 5 min @olorinmaia

**Bouwen**

- CI-workflows voor builds van tags/branches, koppeling van JDK-versies @Angus-repo

**Bijdragers**

@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

Volledige lijst met wijzigingen: <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

---

(version3426)=

**Versie 3.4.2.6**

- Equil: betere stabiliteit @MilosKozak

---

(version3321)=

**Versie 3.3.2.1**

Release datum: 13-08-2025

- Omnipod Bluetooth-verbinding op Android 16 opgelost
- CI-proces (bouwen in de browser)
- Omrekening mmol-mg/dl opgelost
- Verkeerde tijdkeuze in dialoogvensters in sommige tijdzones opgelost
- Lezen van sleutels in de eenvoudige modus opgelost
- Ontbrekende voorspellingen op Wear opgelost
- Betere Configuratie
- Betere volledige synchronisatie met NSCv3

---

(version3300)=

**Versie 3.3.2.0**

Release datum: 27-03-2025

**Hoe je bijwerkt**

* Om deze versie te bouwen heb je [de versie van Android Studio met de naam "Meerkat"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) of hoger nodig. Als je al een versie 3.3.x hebt gebouwd, moet je Android Studio opnieuw bijwerken.

(version-enforcement)=

**Vanaf deze versie zijn de notificaties en het afdwingen van versies eenvoudiger en milder gemaakt. Het werkt als volgt:**

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

Other changes: [release notes on GitHub](https://github.com/nightscout/AndroidAPS/releases/tag/3.3.2.0).

---

(version3204)=

**[Versie 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)**

Release datum: 27-02-2024

Dit is de laatste versie die Android 10 ondersteunt. Als je niet kunt bijwerken naar Android 11, [werk AAPS dan bij naar 3.2.0.4](#update-aaps-3204).

**Wijzigingen**

- Ondersteuning voor G7 via xDrip
- Verbeteringen voor Medtrum
- Pictogram van Automatisering opgelost
- Probleem bij het halen van doel 1 opgelost

---

**Versie 2.8.2**

Release datum: 23-01-2021

[Release notes](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

---

**Versie 1.0**

```{admonition} First version of **AAPS**
:class: note

De eerste testversie begon in 2015 en de eerste release was in 2016.

De precieze volgorde van deze releases is op dit moment niet bekend, maar omdat deze vraag vaak is gesteld, leggen we het hier vast.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
