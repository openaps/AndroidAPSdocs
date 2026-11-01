(generaltroubleshooting)=

# Probleemoplossing

**Begin hier als iets niet werkt.** Informatie over probleemoplossing staat op veel pagina's in de documentatie. Deze pagina brengt het samen: het is één verzameling links, gesorteerd op onderwerp, om je te helpen de meest voorkomende problemen op te lossen.

Vind je hieronder geen antwoord, kijk dan ook in:

* de [FAQ](../UsefulLinks/FAQ.md) voor antwoorden op veelgestelde vragen, en
* de [handleiding voor het afstellen van je profiel](ProfileTuning.md) als je loop werkt, maar je glucoseregeling beter kan.

```{admonition} Still stuck?
:class: tip
Lost geen van de links je probleem op? Lees dan [Waar kan ik hulp krijgen?](WhereCanIGetHelp.md) om de community te vragen (Facebook, Discord), of stuur je [logbestanden](AccessingLogFiles.md) naar de ontwikkelaars.
```

---

(generaltroubleshooting-aaps-app)=

## AAPS-app

### Bouwen & bijwerken

* Mislukt het bouwen, zie dan [Als het bouwen mislukt](#building-aaps-troubleshooting): daar staat voor elke bouwmethode het deel over probleemoplossing:
  * [AAPS Builder](#aaps-builder-troubleshooting)
  * [Bouwen in de browser](#aaps-ci-troubleshooting)
  * [Android Studio](TroubleshootingAndroidStudio.md)
* Keystore kwijt, of nieuwe keystore: [AAPS opnieuw installeren](#reinstall-aaps)
* **AAPS** bijwerken: [met AAPS Builder](#aaps-builder-updates), [met bouwen in de browser (fork)](#update-browser-build-troubleshooting), [met Android Studio](#update-computer-build-troubleshooting)

### Installeren

* [Waarschuwing van Google Play Protect](#transferring-installing-play-protect-warning): de app wordt als onveilig gemeld.
* Installatie **geblokkeerd** met een melding over een niet-geverifieerde ontwikkelaar: zie [Android-ontwikkelaarsverificatie](#android-developer-verification) voor de gratis manieren om te installeren.

### Instellingen

* [Profiel: "Basaalstand is niet compatibel met de huidige pomp"](#your-aaps-profile-basal-not-compatible)
* [Pomp: "Data komt van een andere pomp"](#config-builder-wrong-pump-data)
* [Nightscout Client](TroubleshootingNsClient.md)
* **"AAPS settings cannot be read"** at start: the settings are encrypted with a key that Android keeps for **AAPS**, and that key does not open them any more, for example after the key store of the phone was reset. While this screen is shown, **AAPS** is not running and does not control the pump. Tap **Retry**: it closes and restarts **AAPS**. If that does not help, restart the phone. Use **Start fresh** only when nothing else helps: it sets the unreadable settings file aside (it is renamed and kept) and starts **AAPS** with empty settings. Then import your last [settings export](../Maintenance/ExportImportSettings.md).

### Gebruik

* [Verkeerde koolhydraatwaarden (langzame opname van koolhydraten)](#CobCalculation-detection-of-wrong-cob-values)
* [Automatiseringen](#automations-troubleshooting)
* [Volledig gesloten loop](#full-closed-loop-troubleshooting)

---

(generaltroubleshooting-bluetooth-related-issues)=


## Problemen met Bluetooth

Voor bekende problemen met Bluetooth-verbindingen, het wegvallen van pomp/pods, of problemen met activeren en verbinden: zie [Bluetooth-probleemoplossing](../GettingHelp/BluetoothTroubleshooting.md)

---

(generaltroubleshooting-android-related-issues)=

## Problemen met Android

### Batterij optimalisatie

**AAPS** kan je helpen de juiste instellingen voor je telefoon te vinden: open het **menu** (☰) > **Over** en tik op **Sluit mijn app niet af?**. Dit opent de instructies voor het merk van je telefoon op [Don't kill my app](https://dontkillmyapp.com/). De [Setup Wizard](#setup-wizard-bluetooth-battery-optimisation) vraagt je ook om de batterij optimalisatie voor **AAPS** en Bluetooth uit te zetten.

Android heeft een instelling om batterij te sparen. Deze staat standaard aan. Deze instelling pauzeert automatisch apps die het systeem niet nodig heeft. Zo gebruiken apps die niet altijd hoeven te draaien minder batterij.

Als dit aan staat, geeft het zeer waarschijnlijk problemen voor **AAPS** en andere hulp-apps zoals **xDrip**.

Het is belangrijk dat je de Batterij optimalisatie uitzet, zodat **AAPS** en andere hulp-apps altijd actief blijven.

Afhankelijk van het merk en model van je telefoon kan dit op meer dan één plek en in meer dan één instelling nodig zijn.

***LET OP:** Volg de stappen hieronder om de Batterij optimalisatie voor de Bluetooth-service uit te zetten, als je telefoon deze optie heeft. Met dezelfde stappen zet je het ook uit voor **AAPS** en andere apps. De screenshots laten het alleen zien voor de Bluetooth-service.*

#### Pixel-telefoons (standaard Android)

* Ga naar de Android-instellingen en kies "Apps".

  ![Android-instellingen¦Apps](../images/troubleshooting/pixel/01_androidsettings.png)

* Kies "Alle apps bekijken"

  ![Alle apps bekijken](../images/troubleshooting/pixel/02_apps.png)

* Kies in het menu rechts "Systeem-apps tonen".

  ![Systeem-apps tonen](../images/troubleshooting/pixel/03_allapps.png)

* Zoek nu de app "Bluetooth" en kies deze.

  ![Bluetooth-app](../images/troubleshooting/pixel/03_bluetooth.png)

* Klik op "Batterijgebruik van app" en kies "Onbeperkt" (in sommige oudere Android-versies heet dit "Niet geoptimaliseerd").

  ![BT batterij optimalisatie](../images/troubleshooting/pixel/04_btunrestricted.png)


#### Samsung-telefoons

* Ga naar de Android-instellingen en kies "Apps"

* Kies bij het icoon dat de sortering lijkt te veranderen (1) "Systeem-apps tonen" (2).

  ![App-filter](../images/troubleshooting/samsung/Samsung01_Apps.png)

  ![Systeem-apps tonen](../images/troubleshooting/samsung/Samsung02_ShowSystemApps.png)

* Zoek nu de Bluetooth-app en kies deze om de instellingen te zien.

  ![Bluetooth-app](../images/troubleshooting/samsung/Samsung03_BtApp.png)

* Kies "Batterij".

  ![Batterij](../images/troubleshooting/samsung/Samsung04_Battery.png)

* Zet het op "Onbeperkt" (in sommige oudere Android-versies heet dit "Niet geoptimaliseerd").

  ![Onbeperkt](../images/troubleshooting/samsung/Samsung05_NotOptimized.png)

#### Huawei-telefoons

Zie deze handleiding voor [Huawei Bluetooth & batterij optimalisatie](../CompatiblePhones/Huawei.md)

---

(generaltroubleshooting-cgm)=

## Continue glucosemeter (CGM)

Nuttige links over bekende problemen met CGM's en hoe je ze oplost.

* [Algemeen](#general-cgm-troubleshooting)
* [Dexcom G6](#DexcomG6-troubleshooting-g6)
* [Libre 2 met Minimal Looper](#minimallooper-troubleshooting)
* [Libre 3](#libre3-experiences-and-troubleshooting)
* [xDrip - geen CGM-gegevens](#xdrip-identify-receiver)
* [xDrip - problemen met Dexcom oplossen](#xdrip-troubleshooting-dexcom-g5-g6-and-xdrip)

---

(generaltroubleshooting-pumps)=

## Pompen

Nuttige links over bekende problemen met pompen en hoe je ze oplost

* [Accu-Chek Combo](#combov2-tips-for-basic-usage)
* [Accu-Chek Insight](#Accu-Chek-Insight-Pump-insight-specific-errors)
* [CareLevo](#carelevo-alarms-and-notifications)
* [DanaRS](#DanaRS-Insulin-Pump-dana-rs-specific-errors)
* [Diaconn G8](#diaconn-g8-bluetooth-troubleshooting)
* [EOPatch2](#eopatch2-alarms-and-warnings)
* [Medtronic + RileyLink](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)
* [Medtrum Nano](#medtrum-nano-troubleshooting)
* [Omnipod DASH](#omnipod-dash-troubleshooting)
* [Omnipod Eros](#OmnipodEros-troubleshooting)

---

(generaltroubleshooting-phones)=

## Telefoons

Nuttige links over bekende problemen met telefoons en hoe je ze oplost

* [Lijst van geteste telefoons en apparaten](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true)
* [Jelly](../CompatiblePhones/Jelly.md)
* [Huawei Bluetooth & batterij optimalisatie](../CompatiblePhones/Huawei.md)

---

(generaltroubleshooting-remote-control)=

## Afstandsbediening

* [AAPSClient en bediening op afstand (koppelen, commando's komen niet aan)](#client-master-control-troubleshooting)
* [Problemen met 'Nightscout toegangstoken'](#remotecontrol-nightscout-access-token)
* [SMS-commando's](#SMSCommands-troubleshooting)
* [Android Auto](#android-auto-troubleshooting)

---

(generaltroubleshooting-smartwatches)=

## Smartwatches

Nuttige links over bekende problemen met smartwatches en hoe je ze oplost

* [Problemen met de Wear-app oplossen](#Watchfaces-troubleshooting-the-wear-app)
* [Horloge en telefoon communiceren niet](#wear-os-watch-phone-communication)
* [Wear OS 5](#wear-os-5-troubleshooting)
* [De Wear-app bouwen](#building-aaps-wear-os-troubleshooting)
