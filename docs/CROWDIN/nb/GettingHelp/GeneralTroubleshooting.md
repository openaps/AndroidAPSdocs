(generaltroubleshooting)=

# Feilsøking

**Start her når noe ikke virker.** Informasjon om feilsøking finnes på mange sider i dokumentasjonen. Denne siden samler den: det er én samling av lenker, sortert etter emne, som hjelper deg å løse de vanligste problemene.

Hvis du ikke finner svaret nedenfor, sjekk også:

* [FAQ](../UsefulLinks/FAQ.md) for svar på vanlige spørsmål, og
* [veiledningen for justering av profilen](ProfileTuning.md) hvis loopen din kjører, men blodsukkerkontrollen bør bli bedre.

```{admonition} Still stuck?
:class: tip
Hvis ingen av lenkene løser problemet ditt, se [Hvor kan jeg få hjelp](WhereCanIGetHelp.md) for å spørre fellesskapet (Facebook, Discord), eller send [loggfilene](AccessingLogFiles.md) dine til utviklerne.
```

---

(generaltroubleshooting-aaps-app)=

## AAPS-appen

### Bygging og oppdatering

* Hvis bygget feiler, se [Hvis bygget feiler](#building-aaps-troubleshooting): der står feilsøkingsdelen for hver byggemetode:
  * [AAPS Builder](#aaps-builder-troubleshooting)
  * [Nettleserbygg](#aaps-ci-troubleshooting)
  * [Android Studio](TroubleshootingAndroidStudio.md)
* Mistet keystore-fil, eller ny keystore-fil: [Installere AAPS på nytt](#reinstall-aaps)
* Oppdatere **AAPS**: [med AAPS Builder](#aaps-builder-updates), [med et nettleserbygg (fork)](#update-browser-build-troubleshooting), [med Android Studio](#update-computer-build-troubleshooting)

### Installering

* [Advarsel fra Google Play Protect](#transferring-installing-play-protect-warning): appen rapporteres som usikker.
* Installasjonen er **blokkert** med en melding om en uverifisert utvikler: se [Android-utviklerverifisering](#android-developer-verification) for de gratis installasjonsmetodene.

### Innstillinger

* [Profil: «Basaldosen er ikke kompatibel med den aktuelle pumpen»](#your-aaps-profile-basal-not-compatible)
* [Pumpe: «Data kommer fra en annen pumpe»](#config-builder-wrong-pump-data)
* [Nightscout-klient (NSClient)](TroubleshootingNsClient.md)
* **«AAPS-innstillingene kan ikke leses»** ved oppstart: innstillingene er kryptert med en nøkkel som Android oppbevarer for **AAPS**, og den nøkkelen åpner dem ikke lenger, for eksempel etter at telefonens nøkkellager er blitt tilbakestilt. Mens denne skjermen vises, kjører ikke **AAPS** og styrer ikke pumpen. Trykk på **Prøv på nytt**: det lukker **AAPS** og starter appen på nytt. Hvis det ikke hjelper, starter du telefonen på nytt. Bruk **Start på nytt** bare når ingenting annet hjelper: det legger den uleselige innstillingsfilen til side (den får nytt navn og beholdes) og starter **AAPS** med tomme innstillinger. Importer deretter den siste [eksporten av innstillingene](../Maintenance/ExportImportSettings.md) dine.

### Bruk

* [Feil karboverdier (langsom absorpsjon av karbohydrater)](#CobCalculation-detection-of-wrong-cob-values)
* [Automasjoner](#automations-troubleshooting)
* [Full lukket loop](#full-closed-loop-troubleshooting)

---

(generaltroubleshooting-bluetooth-related-issues)=


## Bluetooth-relaterte problemer

For kjente problemer med Bluetooth-tilkoblinger, frafall av pumpe/pods, eller problemer med aktivering og tilkobling: [Feilsøking av Bluetooth](../GettingHelp/BluetoothTroubleshooting.md)

---

(generaltroubleshooting-android-related-issues)=

## Android-relaterte problemer

### Batterioptimalisering

**AAPS** kan hjelpe deg å finne de riktige innstillingene for telefonen din: åpne **menyen** (☰) > **Om** og trykk på **Ikke steng appen min?**. Den åpner veiledningen for telefonmerket ditt på [Don't kill my app](https://dontkillmyapp.com/). [Oppsettveiviseren](#setup-wizard-bluetooth-battery-optimisation) ber deg også slå av batterioptimalisering for **AAPS** og Bluetooth.

Android har innebygde innstillinger for batterisparing som er slått på som standard. Disse innstillingene setter automatisk apper som systemet ikke trenger for å fungere, på pause. Det sparer batteri for apper som ikke alltid trenger å kjøre.

Når dette er slått på, vil det svært sannsynlig gi problemer for **AAPS** og andre støtteapper som **xDrip**.

Det er viktig at du slår av batterioptimalisering, slik at **AAPS** og andre støtteapper alltid er aktive.

Avhengig av telefonmodell og merke kan det finnes mer enn ett sted og én innstilling som må slås av.

***MERK:** Følg stegene nedenfor for å slå av batterioptimalisering for Bluetooth-tjenesten hvis telefonen din har dette valget. De samme stegene kan brukes for å slå det av for **AAPS** og andre apper, men skjermbildene viser bare hvordan du gjør det for Bluetooth-tjenesten.*

#### Pixel-telefoner (standard Android)

* Gå til Android-innstillingene og velg «Apper».

  ![Android-innstillinger¦Apper](../images/troubleshooting/pixel/01_androidsettings.png)

* Velg «Se alle apper»

  ![Se alle apper](../images/troubleshooting/pixel/02_apps.png)

* I menyen til høyre velger du «Vis system»-apper.

  ![Vis systemapper](../images/troubleshooting/pixel/03_allapps.png)

* Søk nå etter appen «Bluetooth» og velg den.

  ![Bluetooth-appen](../images/troubleshooting/pixel/03_bluetooth.png)

* Trykk på «Appens batteribruk» og velg «Ubegrenset» (kalt «Ikke optimalisert» på noen eldre Android-versjoner).

  ![Batterioptimalisering for Bluetooth](../images/troubleshooting/pixel/04_btunrestricted.png)


#### Samsung-telefoner

* Gå til Android-innstillingene og velg «Apper»

* På ikonet som visstnok endrer sorteringen (1), velger du «Vis systemapper» (2).

  ![Appfilter](../images/troubleshooting/samsung/Samsung01_Apps.png)

  ![Vis systemapper](../images/troubleshooting/samsung/Samsung02_ShowSystemApps.png)

* Søk nå etter Bluetooth-appen og velg den for å se innstillingene.

  ![Bluetooth-appen](../images/troubleshooting/samsung/Samsung03_BtApp.png)

* Velg «Batteri».

  ![Batteri](../images/troubleshooting/samsung/Samsung04_Battery.png)

* Sett den til «Ubegrenset» (kalt «Ikke optimalisert» på noen eldre Android-versjoner).

  ![Ubegrenset](../images/troubleshooting/samsung/Samsung05_NotOptimized.png)

#### Huawei-telefoner

Se denne veiledningen for [Huawei Bluetooth og batterioptimalisering](../CompatiblePhones/Huawei.md)

---

(generaltroubleshooting-cgm)=

## Kontinuerlig glukosemåler (CGM)

Nyttige lenker til kjente problemer og løsninger for CGM-er.

* [Generelt](#general-cgm-troubleshooting)
* [Dexcom G6](#DexcomG6-troubleshooting-g6)
* [Libre 2 med Minimal Looper](#minimallooper-troubleshooting)
* [Libre 3](#libre3-experiences-and-troubleshooting)
* [xDrip – ingen CGM-data](#xdrip-identify-receiver)
* [xDrip – feilsøking av Dexcom](#xdrip-troubleshooting-dexcom-g5-g6-and-xdrip)

---

(generaltroubleshooting-pumps)=

## Pumper

Nyttige lenker til kjente problemer og løsninger for pumper

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

## Telefoner

Nyttige lenker til kjente problemer og løsninger for telefoner

* [Liste over testede telefoner og enhetsoppsett](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true)
* [Jelly](../CompatiblePhones/Jelly.md)
* [Huawei Bluetooth og batterioptimalisering](../CompatiblePhones/Huawei.md)

---

(generaltroubleshooting-remote-control)=

## Fjernstyring

* [AAPSClient og fjernstyring (sammenkobling, kommandoer kommer ikke fram)](#client-master-control-troubleshooting)
* [Problemer med «Nightscout tilgangstoken»](#remotecontrol-nightscout-access-token)
* [SMS-kommandoer](#SMSCommands-troubleshooting)
* [Android Auto](#android-auto-troubleshooting)

---

(generaltroubleshooting-smartwatches)=

## Smartklokker

Nyttige lenker til kjente problemer og løsninger for smartklokker

* [Feilsøking av Wear-appen](#Watchfaces-troubleshooting-the-wear-app)
* [Klokken og telefonen kommuniserer ikke](#wear-os-watch-phone-communication)
* [Wear OS 5](#wear-os-5-troubleshooting)
* [Bygge AAPS Wear-appen](#building-aaps-wear-os-troubleshooting)
