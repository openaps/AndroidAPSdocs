
# Versionsinformation

```{toctree}
:hidden:

Update2_7.md
Update3_0.md
UpdateAaps3204.md
```

Följ instruktionerna i [guiden för uppdatering](UpdateToNewVersion.md) för att uppdatera till en ny version. Avsnittet om felsökning på sidan med uppdateringsguiden tar också upp de vanligaste problemen när du uppdaterar **AAPS**.

```{admonition} Upgrading from AAPS v3?
:class: tip
Se [Vad har ändrats i AAPS v4](V4Changes.md) för de viktigaste ändringarna i hur appen fungerar – funktioner som har flyttats, bytt namn eller tagits bort.
```

Du får en avisering som den här när en ny uppdatering finns:

![Information om uppdateringen](../images/AAPS_LoopDisable90days.png)

Om du inte uppdaterar före slutdatumet byter **AAPS** till öppen loop.

Se [Slut på support](EndOfLife.md) för slutdatum för AAPS-versioner.

**Ignorera inte aviseringen.** Nya versioner av **AAPS** innehåller viktiga säkerhetsrättningar. Därför måste alla som använder **AAPS** uppdatera till den senaste versionen så snart som möjligt. Detta är ett försök att förbättra säkerheten för alla som använder **AAPS** och för DIY-communityn. Tack för din förståelse.

(maintenance-android-version-aaps-version)=

## Android-version och AAPS-version

Om din smarttelefon har en äldre Android-version än Android 12 kan du inte använda AAPS v3.4 eller senare, eftersom det kräver minst Android 12.

För att användare med äldre Android ska kunna använda äldre versioner av AAPS har nya versioner släppts som bara ändrar versionskontrollen. Inga andra förbättringar ingår.

Hitta din Android-version i tabellen nedan och använd den **AAPS**-version som hör till. Koden laddas ner från <https://github.com/nightscout/AndroidAPS> med den gren som visas.

| Din Android-version   | AAPS-version att använda | Gren att ladda ner                                               |
| --------------------- | ------------------------ | ---------------------------------------------------------------- |
| Android 12 och senare | Senaste versionen        | [master](https://github.com/nightscout/AndroidAPS) (standard)    |
| Android 11            | **3.3.2.1**              | [3.3.2.1](https://github.com/nightscout/AndroidAPS/tree/3.3.2.1) |
| Android 9, 10         | **3.2.0.4**              | [3.2.0.4](https://github.com/nightscout/AndroidAPS/tree/3.2.0.4) |
| Android 8             | **2.8.2.1**              | [2.8.2.1](https://github.com/nightscout/AndroidAPS/tree/2.8.2.1) |
| Android 7             | **2.6.2**                | [2.6.2](https://github.com/nightscout/AndroidAPS/tree/2.6.2)     |

## WearOS-version

- AAPS kräver WearOS 3.0, 3.2 eller 3.5 (Android 11, API-nivå 30) eller senare. Klockor med WearOS 2 stöds inte.

```{tip}
WearOS 5, API-nivå 34 (Android 14) har [begränsningar](#BuildingAapsWearOs-WearOS5).
```

Versioner med en rubrik är den senaste versionen för varje Android-version (se tabellen ovan). De andra versionerna kommer däremellan, med sin versionsinformation eller en länk till den på GitHub.

(latestrelease)=

(version400)=

## Version 4.0.0

Utgivningsdatum: 31-10-2026

**Nya funktioner**

- Nytt användargränssnitt: telefonappen är ombyggd med Jetpack Compose @MilosKozak
- [Global sökning](../DailyLifeWithAaps/GlobalSearch.md) @MilosKozak
- Migrering till Kotlin Multiplatform, klient för Windows, Mac, Linux (dator) och iOS @MilosKozak
- [Scener](../DailyLifeWithAaps/Scenes.md): spara en uppsättning åtgärder och kör dem tillsammans @MilosKozak
- [Styrning huvudenhet ↔ klient](../RemoteFeatures/ClientMasterControl.md): skicka kommandon från en klienttelefon till huvudenheten @MilosKozak
  - [Klientroller](#client-master-control-roles): Skrivskyddad, Måltider, Vårdgivare eller Administratör för varje klient @MilosKozak
  - [Härdat läge](#client-master-control-hardened-mode): när klientstyrning är på tar huvudenheten bara emot ändringar från parkopplade klienter @MilosKozak
  - Parkoppling med en QR-kod som också ställer in Nightscout på klienten, eller med en PIN-kod; parkopplingens hemlighet byts ut direkt efter parkopplingen @MilosKozak
  - [Egen Nightscout-token](#client-master-control-own-token) för varje klient, med bara de rättigheter som klienten behöver @MilosKozak
- Stöd för [insulinkoncentration](../AdvancedOptions/InsulinConcentration.md) (U200, U500) i pumpar, kalkylator och profiler @Philoul @MilosKozak
- Hantering av insulin: insulinkatalog, smeknamn, val i profil och kalkylator @Philoul
- Plugin för kalibrering @MilosKozak
- [Utjämning](../CompatibleCgms/SmoothingBloodGlucoseData.md): Unscented Kalman Filter (UKF) @piecycle
- Nya [automationsåtgärder](#automations-automation-action): **Ändra utjämning** @olorinmaia, samt **Kör**, **Aktivera** eller **Inaktivera scen** @MilosKozak
- [Platsrotation](#Aapsscreens-site-rotation): följ och rotera infusionsställen @Philoul @MilosKozak
- [Autotune](../AdvancedOptions/Autotune.md) omarbetat @Philoul
- Nya [widgets](../DailyLifeWithAaps/Widgets.md) @MilosKozak @t1dude
- Tillgänglighet: telefonappen fungerar med en skärmläsare – namngivna kontroller, uppläst status, beskrivningar av grafer och rubriker för att snabbt hitta rätt @MilosKozak
- [Import av inställningar](../Maintenance/ExportImportSettings.md): kan behålla pumpinställningarna @MilosKozak
- Den beständiga aviseringen använder Androids liveuppdateringar, med stöd för Samsung Now bar och delta @premnirmal
- BG-graf: [tryck och håll](#aaps-screens-graph-press-and-hold) för att se värdena vid en mätning, på alla grafer på huvudskärmen @t1dude @olorinmaia
- Förbättrad prestanda @MilosKozak
- Automatiska eCarbs i kalkylatorn @MilosKozak

**Nya enheter**

- **CareLevo**: ny [pumpdrivrutin](../CompatiblePumps/CareLevo.md) @Kisu-Choi @MilosKozak
- **Dana-i2**: stöd @MilosKozak
- **Instara**: ny CGM-källa @leohunt

**Förbättringar av pumpdrivrutiner**

- Pumpskärmarna ombyggda för Insight, Medtronic, Medtrum, Omnipod, Dana, Diaconn och Equil @MilosKozak
- **Omnipod DASH**: Ref-koder som på PDM:en och felbeskrivningar som går att förstå, kompensation för tidsdrift alltid på, bättre rapportering av bolustyp @nl-ruud
- **Omnipod**: datum för avstängning (hard end) för Dash & Eros @mcnelson
- **DanaR, RS**: pumpemulator för tester @MilosKozak
- **Equil**: pumpemulator för tester @MilosKozak
- Många rättningar för pumpar och loop @MilosKozak med flera

**Wear OS**

- [Klockappen](../WearOS/WearOsSmartwatch.md) ombyggd i Compose, nya brickor och komplikationer, automatisk installation av urtavla (Watch Face Push) på Wear OS 6+ @olorinmaia @Philoul
- CustomWatchface finns för WearOS 6.0 (GW7, GW8, GW9 ...) med en egen WFF-urtavla @Philoul @olorinmaia
- CustomWatchface kan nu ha 5 platser för komplikationer som du kan anpassa (ny funktion som bara finns för äldre klockor) @Philoul
- Ny [WFF-urtavla baserad på komplikationer från AAPS](#wearos-complications-watchface-setup) @olorinmaia
- Rättningar i resultatet från kalkylatorn och snabbknappen @olorinmaia
- Ny BG-graf och aktivitet för körläge i huvudmenyn @olorinmaia
- Kalkylator: sidan [Måltidstyp](#WearOsSmartwatch-wizard-meal-type) som delar upp kolhydraterna som kalkylatorn i telefonen, och [KH-tid](#WearOsSmartwatch-wizard-carb-time) med påminnelsen *dags att äta* på klockan @olorinmaia
- [Larm från telefonen på klockan](#WearOsSmartwatch-phone-alarms): klockan visar larmet och erbjuder Tysta och Tysta 5 min @olorinmaia

**Bygge**

- CI-arbetsflöden för byggen från tagg/gren, mappning av JDK-version @Angus-repo

**Bidragsgivare**

@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

Fullständig ändringslogg: <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

---

(version3426)=

## Version 3.4.2.6

- Equil: förbättrad stabilitet @MilosKozak

---

(version3425)=

**Version 3.4.2.5**

- Equil: rättat kapplöpningsvillkor (race condition) @MilosKozak

---

(version3424)=

**Version 3.4.2.4**

- Rättningar för Equil @MilosKozak
- Rättad synkronisering av profiler med NS @MilosKozak

---

(version3423)=

**Version 3.4.2.3**

- Dash: lösning för tidsdrift @nl-ruud
- NSClientV3: rättat glapp efter återanslutning @MilosKozak
- Automation: rättad deserialisering @MilosKozak
- Equil: rättad rapport om batteriet @MilosKozak
- Städning av arbetsflöde @vanelsberg
- Equil: förbättrad återhämtning efter fel @MilosKozak
- DanaRS: rättad kommunikation med inhemsk (koreansk) pump @MilosKozak
- Insight: rättad synkronisering av tillfällig basal @MilosKozak
- Dash: rättat fel vid aktivering @nl-ruud

---

(version3422)=

**Version 3.4.2.2**

- Rättat problem med Equil och Medtronic
- Förbättrad säkerhet för Medtrum

---

(version3421)=

**Version 3.4.2.1**

- Equil: rättad parkoppling och förloppsdialog @MilosKozak

---

(version3420)=

**Version 3.4.2.0**

Utgivningsdatum: 02-04-2026

- Equil: rättat motstånd för olika modeller @hhfcvmars
- Tidepool: rättad session @MilosKozak
- Medtrum: rättad aktivering genom att förhindra dubbel påfyllning @MilosKozak
- COB: rättad beräkning av COB (gäller ett farligt specialfall) @MilosKozak

---

(version3410)=

**Version 3.4.1.0**

Utgivningsdatum: 08-03-2026

**Kärna**

- Rättad hantering av sommartid @MilosKozak
- Förbättrad och enhetlig identifiering av normalt målvärde (mgdl > 99, mmol > 5,5) @MilosKozak
- SMS: RESTART skyddas med PIN-kod @MilosKozak
- Underhåll: varning om fel katalog har valts @MilosKozak

**Förbättringar av pumpdrivrutiner**

- **Omnipod DASH**: koden för BLE-drivrutinen har flyttats till modulen omnipod/common @jwoglom
- **Omnipod DASH**: försök att rätta anslutningsstatus @MilosKozak
- **Omnipod**: profilen kontrolleras före podaktivering, så att inga poddar slösas bort (#4534) @brianV
- **Medtronic**: rättat att samma kodningstyp visades i inställningsdialogen @mifi100
- **Medtronic**: förberett gemensamma klasser för pumpar (förberedelse för Tandem) @andy-rozman
- **RileyLink**: rättad kodning (#4519) @mifi100
- **Equil**: fler insulinpumpar stöds, baserat på början av serienumret (#4510) @hhfcvmars
- **Equil**: loggning har lagts till @MilosKozak
- **Diaconn G8**: rättat fel i synkroniseringen av loggen och lagt till stöd för firmware 3.58+ @miyeongkim
- **Diaconn**: rättad omvandling av enheten för tillfällig basals varaktighet @miyeongkim
- **Diaconn**: commandQueue.loadEvents() används för synkronisering av historiken @miyeongkim
- Insulin kan ges när loopen är pausad men pumpen är tillgänglig @cschuijt

**Moln / säkerhetskopiering**

- Säkerhetskopiering till Google Drive har lagts till @Angus-repo
- Gränssnittet meddelas när felstatus för molnlagringen ändras @Angus-repo
- Både lokal lagring och molnlagring kan användas samtidigt @Angus-repo

**Tidepool**

- Förbättrad migrering till Tidepool OAuth2 @MilosKozak
- Rättat att Tidepool fastnade i läget BLOCKED, rättat att tomma SSID avvisades @michaeln-synapse

**NSClient**

- NSCv3: förbättrad återanslutning @MilosKozak

**Wear OS**

- Visa Ny IOB i kalkylatorns resultat om IOB används i beräkningen @olorinmaia
- Rättat BolusProgress på klockan med total mängd @Philoul

**Gränssnitt**

- Förbättrad ikon ic_none för platsrotation @Philoul
- Rättat att inställningen för pumpplatsrotation inte användes @samfundev

**Bidragsgivare**

@MilosKozak @Philoul @olorinmaia @jwoglom @mifi100 @andy-rozman @Angus-repo @brianV @cschuijt @hhfcvmars @miyeongkim @samfundev @michaeln-synapse

---

(version3400)=

**Version 3.4.0.0**

Utgivningsdatum: 31-12-2025

**Innan du uppgraderar:**

* Den här versionen kräver Google Android 12.0 eller senare. Kontrollera vilken Android-version din telefon har innan du försöker uppdatera.
* Uppdatera till senaste Android Studio, eller ännu bättre: bygg i webbläsaren.

**Nya funktioner**

* Körläge @MilosKozak
  * Visa [historiken över loopstatus](#AapsScreens-running-mode) på flikarna för behandlingar
  * Visa och ändra [loopstatus från AAPSClient](#RemoteControl_aapsclient).<br>Obs! Kräver inställningen [NSClient > Synkronisering > Ta emot körläge från NS](#Preferences-nsclient-synchronization)
* [Nya CGM](../Getting-Started/CompatiblesCgms.md): Glunovo, Intelligo, Sinocare
* Stöd för [Platsrotation](#Aapsscreens-site-rotation) @Philoul
* Ny [åtgärd för automation](#automations-automation-action): aktivera eller inaktivera SMB @MilosKozak
* Syai CGM är en [pålitlig källa](#GettingStarted-TrustedBGSource) och stöder avancerad filtrering @MilosKozak

**Förbättringar för Wear OS**

* kraftigt minskad batterianvändning @MilosKozak
* förbättringar och rättningar i gränssnittet @olorinmaia
* koden är nästan helt omskriven för att passa dagens nivå av bibliotek (tidigare WearOS 2) @MilosKozak
* 2 nya komplikationer för utökade data @Philoul
* Migrerat till modern leverantör av komplikationer med DataStore @MilosKozak

**Rättningar av minnesläckor**

* Rättat minnesläckor i koden @MilosKozak
* Rapportering av minnesläckor med LeakCanary till Firebase Crashlytics har lagts till @MilosKozak

**Förbättringar av pumpdrivrutiner**

* **DanaI**: rättat problem med frånkopplingar @MilosKozak
* **RileyLink**: snabbare kommunikation genom kortare fördröjningar @mifi100
* **Medtrum**: visning av poddens aktiveringstid och ålder har lagts till @vanelsberg, rättning av versaler i lösenord @MilosKozak
* **Combo**: rättat kapplöpningsvillkor (race conditions) i tester @MilosKozak @dv1
* **Equil**: optimerad anslutning, minskad batterianvändning @MilosKozak

**Synkronisering med Nightscout**

* Förbättrad borttagning av dubbletter vid fel i NS @MilosKozak

**Förbättringar av gränssnitt och användarupplevelse**

* olika förbättringar @MilosKozak @Philoul @olorinmaia

**Automation**

* Ny åtgärd för SMB-styrning – aktivera/inaktivera SMB via automation @MilosKozak

**Tester**

* Omfattande enhetstester för pumparna Equil, Eopatch, Dana och Medtronic har lagts till @MilosKozak
* Bättre stabilitet och täckning för tester i flera moduler @MilosKozak

**Tidepool**

* Tidepool OAUTH2 (stöd för den nya inloggningen i Tidepool) @MilosKozak

---

(version3321)=

## Version 3.3.2.1

Utgivningsdatum: 13-08-2025

- Rättad Bluetooth-anslutning för Omnipod på Android 16
- CI-process (bygge i webbläsaren)
- Rättad omvandling mellan mmol och mg/dl
- Rättat fel val av tid i dialogrutor i vissa tidszoner
- Rättad läsning av nycklar i enkelt läge
- Rättat saknade prognoser på klockan
- Förbättrad Konfiguration
- Förbättrad full synkronisering med NSCv3

---

(version3300)=

**Version 3.3.2.0**

Utgivningsdatum: 27-03-2025

**Så uppgraderar du**

* [Android Studio-versionen ”Meerkat”](#Building-APK-recommended-specification-of-computer-for-building-apk-file) eller senare krävs för att bygga den här versionen. Om du redan har byggt en version 3.3.x måste du uppgradera Android Studio igen.

(version-enforcement)=

**Från och med den här versionen har aviseringar och tvingande av version förenklats och mildrats, och det fungerar så här:**

*  Inget slutdatum när enheten är offline (om den inte har anslutning till internet). Det betyder att det inte längre finns någon tidsfrist på 60 och 90 dagar.
*  Efter slutdatumet tvingas läget LGS fram
*  Du får varningar/aviseringar mer sällan:
   - 28 eller fler dagar kvar: var 7:e dag
   - 27–14 dagar kvar: var 3:e dag
   - sedan en gång om dagen
   - Aviseringen visas efter klockan 12 så att du inte störs på natten
* Det finns bara 2 typer av aviseringar
   - Ny version tillgänglig (påverkar inte AAPS)
   - Appen slutar gälla ett visst datum i framtiden (påverkar fortfarande inte AAPS) / har slutat gälla (AAPS byter till läget LGS)

**Nyheter**

* SMS-kommandot RESTART @MilosKozak
* Parametrar för profilbyte på klockan @olorinmaia
* Mörkt läge för urtavlan AAPS V2 @olorinmaia
* Förbättrat datautbyte för G7 @olorinmaia
* Widget-konfiguration @MilosKozak
* Förbättringar av radioknappar i gränssnittet @olorinmaia
* Automation: välj plats från karta @MilosKozak
* Versionen syns på huvudskärmarna @MilosKozak
* Kompilering med befintligt git-system krävs (inga nedladdningar som zip)
* Visa versionen på huvudskärmen @MilosKozak
* Förbättrad uppladdning till Tidepool @ConstantinMatheis

**Buggrättningar**

* Rättat borttagning av bindning för Dash @Andreas
* Rättningar för Garmin @robertbuessow @suside
* Rättat visning av IOB i dialogrutor @olorinmaia
* Förbättrad stavning och validering i målen @MilosKozak
* Rättat visning av emulerade tillfälliga basaler @MilosKozak
* Rättat kringgående av säkerheten @tdrkDev

---

**Version 3.3.1.3**

Utgivningsdatum: 21-01-2025

**Buggrättningar**

* Dash: bindning (bonding) är valfri (av som standard) @MilosKozak
* Equil: rättad bolus på 10+ U, förbättrade larm @EquilHack
* Garmin: förbättringar för klockan @swissalpine
* Förbättringar för klockan @olorinmaia
* Styr loopstatus från klockan @tdrkDev
* Förbättrad stabilitet

*  **Du kan behöva göra en ny [inställning av Authenticator](#sms-commands-authenticator-setup).**

---

**Version 3.3.1.2**

Utgivningsdatum: 15-01-2025

**Så uppgraderar du**

* [Android Studio-versionen ”Ladybug Feature Drop”](#Building-APK-recommended-specification-of-computer-for-building-apk-file) eller senare krävs för att bygga den här versionen. **Detta är inte samma sak som vanliga ”Ladybug”.** Om du redan har byggt en version 3.3.x måste du uppgradera Android Studio igen.

**Buggrättningar**

* Dash: använd bindning (bonding) på Android 15+
* Dexcom-knappen på huvudskärmen är tillbaka
* Equil: det går att ta bort en pump som inte fungerar
* Varning när justeringsfaktorn för DynISF är noll
* NSCv3: rättat kommunikationen via websocket på telefoner där tiden skiljer sig lite
* SMS-kommandon: rättat engångslösenordet (OneTimePassword). **Du kan behöva göra en ny [inställning av Authenticator](#sms-commands-authenticator-setup).**
* Rättat problem där vissa inställningar inte längre gick att ändra.
* Rättat återställning av huvudlösenordet med virtuell pump.
* Rättat import av stora säkerhetskopior av inställningar.

---

**Version 3.3.1.0**

Utgivningsdatum: 06-01-2025

**Ändringar i användargränssnittet**

* [Färger har lagts till för att skilja mellan AAPSClient och AAPSClient2](#RemoteControl_aapsclient) @MilosKozak
* Förbättrad layout och ikoner för användaråtgärder

**Andra funktioner**

* Ny utlösare för automation: [antal steg](#screen-heart-rate-steps) @Roman Rihter
* Allt kan tas emot vid full synkronisering med NSCv3 (även data som inte synkroniserades tidigare, t.ex. tillfälliga basaler) @MilosKozak
* NSClient v3: Meddelande fungerar nu (_t.ex._ från AAPSClient till AAPS) @MilosKozak

**Tekniska ändringar & buggrättningar**

* Rättat krasch i Insight @philoul
* Rättat att alldeles för många deviceStatus-poster skapades i Nightscout @MilosKozak
* Rättat kolhydratabsorption @MilosKozak
* Rättat färg på RadioButtons & CheckBoxes @MilosKozak
* Rättat fel i migreringen av procentandelen för DynISF @MilosKozak
* Rättat felplacerad avisering för DynISF @MilosKozak
* Rättat fel i urtavlor @philoul

---

**Version 3.3.0.0**

Utgivningsdatum: 29-12-2024

**Viktigaste funktionerna**

* Funktionen **[Dynamisk ISF](../DailyLifeWithAaps/DynamicISF.md)** är inte längre ett eget plugin, utan ingår nu som ett alternativ i pluginet [OpenAPS SMB](#Config-Builder-aps), med några ändringar i hur den fungerar:
  * **Profilbyte** och **Procent av profil** tas nu med i beräkningen för **Dynamisk ISF** när det gäller hur stark den dynamiska känsligheten är
  * Medelvärdet av **ISF** för de senaste 24 timmarna beräknas, och det värdet används för kalkylatorn och för beräkningen av **COB**. Värdet **ISF i profilen** används inte alls (utom som reserv när historikdata saknas)
  * Dokumentationssidan om DynamicISF har skrivits om. Läs det viktiga avsnittet [Saker att tänka på när du aktiverar Dynamisk ISF](#dyn-isf-things-to-consider-when-activating-dynamicisf).
* [Aktivera ”SMB alltid” och ”SMB efter kolhydrater”](#Open-APS-features-enable-smb-always) för användare av FreeStyle Libre 2 och Libre 3
  * Obs! Kräver senaste versionen av xDrip+ eller Juggluco.
* Nya utlösare för **Automation**
* Automatisk export av inställningar

**Så uppgraderar du**

* Innan du uppgraderar:
  * **<span style="color:red">Den här versionen kräver Google Android 11.0 eller senare</span>**. Kontrollera vilken Android-version din telefon har innan du försöker uppdatera.
  * Om du använder den ”gamla” Combo-drivrutinen med Ruffy-enheten ska du byta till den [nya inbyggda Combo-drivrutinen](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) innan du uppdaterar
  * Du förlorar dina [extra grafer](#AapsScreens-section-g-additional-graphs) på huvudskärmen vid uppgraderingen: anteckna vid behov din nuvarande konfiguration, så att du kan skapa graferna igen efter uppgraderingen.
  * De [problem med Bluetooth-anslutningen som vissa får på Android 15](../Getting-Started/Phones.md) löses **INTE** av den här versionen (det är ett problem i Android, inte i **AAPS**). En rättning finns i 3.3.1.2.
  * Knappen BYODA på huvudskärmen finns inte längre på grund av begränsningar i Android. Detta är rättat i 3.3.1.2.
* Instruktioner för uppdateringen: följ guiden [Uppdatera till en ny version](../Maintenance/UpdateToNewVersion.md).
  * [Android Studio-versionen ”Ladybug”](#Building-APK-recommended-specification-of-computer-for-building-apk-file) eller senare krävs för att bygga den här versionen. Om du redan har en äldre version av Android Studio installerad kan du behöva <span style="color:red">ställa in JVM-versionen till 21</span>. Se [Felsökning av Android Studio > Incompatible Gradle JVM](#incompatible-gradle-jvm).
  * Tips: om du inte vill förlora din historik i **AAPS** ska du ALLTID göra en UPPDATERING och INTE AVINSTALLERA/INSTALLERA. Som en försiktighetsåtgärd kan du säkerhetskopiera dina nuvarande inställningar i **AAPS** och spara den gamla APK-filen, så att du kan gå tillbaka till en äldre version om något går fel.
* Efter uppgraderingen:
  * Ställ in den nya [inställningen ”AAPS-katalog”](#preferences-maintenance-logdirectory) på fliken Underhåll.

**Detaljerade ändringar**

**CGM och pumpar**

* [Aktivera ”SMB alltid” och ”SMB efter kolhydrater”](#Open-APS-features-enable-smb-always) för användare av FreeStyle Libre 2 och Libre 3 @MilosKozak
* Förbättringar av [Medtrum-drivrutinen](../CompatiblePumps/MedtrumNano.md) @jbr77rr
  * Förbättrad kommunikation, bland annat en ny inställning för att komma runt problem på vissa smarttelefoner
  * Reservoarnivån visas i början av aktiveringen
  * Rättat fel där aktiveringen gick tillbaka till början och användaren inte kunde slutföra aktiveringen
  * Återkoppling om synkroniseringsstatus och andra förtydliganden
* Ny pump som stöds: [Equil 5.3](../CompatiblePumps/Equil5.3.md) @EquilHack
* Nya CGM som stöds: [Ottai](../CompatibleCgms/OttaiM8.md) @ottai-developer och [Syai Tag](../CompatibleCgms/SyaiTagX1.md) @syai-dev
* Insight-drivrutinen omskriven i Kotlin @Philoul
* Den gamla Combo-drivrutinen som krävde Ruffy har tagits bort

**Ändringar i användargränssnittet**

* [Enkelt läge](#preferences-simple-mode) är aktiverat som standard vid ny installation @MilosKozak
* Nya alternativ för [Snabbknappar](#Preferences-quick-wizard) @radicalb
  * Snabbknappen använder nu samma logik för att beräkna och visa bolus som kalkylatorn. Du kan nu använda fältet ”KH-tid” i Snabbknappen för att ge förbolus.
* Ny [meny för grafens skala](#aaps-screens-main-graph); förbättringar av [menyn för extra grafer](#AapsScreens-activate-optional-information) @Philoul
* [Förbättrad layout i Konfiguration](../SettingUpAaps/ConfigBuilder.md) @MilosKozak
  * Avsnitten är nu hopfällda som standard. Använd pilen för att fälla ut dem.
* Variabel känslighet visas i AAPSClient
* Förbättringar av kalkylatorns gränssnitt @kenzo44
* Rättad textvisning på pumpflikarna med ljust tema @jbr77rr

**Andra funktioner**

* [Automatisk export av inställningar](#ExportImportSettings-Automating-Settings-Export) @vanelsberg
* Ny [utlösare för Automation](#automations-automation-triggers) @vanelsberg
  * Podaktivering (endast slanglösa pumpar)
* Nya [utlösare för Automation](#automations-automation-triggers) @jbr77rr
  * Kanylålder, Insulinålder, Pumpbatteriets ålder, Sensorålder, Reservoarnivå, Pumpbatterinivå
* Det går att ange negativa kolhydrater @MilosKozak
* Ny parameter [”AAPS-katalog”](#preferences-maintenance-settings) för att välja en annan lagringskatalog än standardkatalogen.
* Det går att [logga insulin när pumpen är pausad](#aaps-screens-buttons-insulin) @jbr77rr
* Uppdaterat [mål 2](#objectives-objective2) @MilosKozak
  * Kontrollera att huvudlösenordet är inställt och att du kan det
* Slumpmässiga kolhydrater i testläge @MilosKozak
* Rättat fel i beräkningen av TDD @MilosKozak
* SMS-kommandon: möjlighet att [**inte** skicka SMS vid profilbyte](#sms-commands-too-many-messages) som kommer från NS @MilosKozak

**Smartklockor**

* förbättringar av klockan och urtavlorna @Philoul @MilosKozak @olorinmaia
* Rutor på klockan från åtgärder i Automation @Philoul
* Kombinerade urtavlor från AAPS, AAPSClient och AAPSClient2 för att följa flera personer @Philoul @MilosKozak
* EXTRA: show\_user\_actions\_on\_watch\_only @MilosKozak

**Tekniska ändringar**

* [loggfilerna har flyttats](#Accessing-logfiles-accessing-logfiles)
* ny intern modulstruktur @MilosKozak
* lagringslagret har separerats från huvudkoden @MilosKozak
* byggfilerna omskrivna till kts @MilosKozak
* algoritmerna omskrivna i Kotlin för bättre prestanda @MilosKozak
* mängder av nya enhetstester @MilosKozak med flera
* mer kod konverterad till Kotlin @MilosKozak
* ny hantering av inställningar, xml \-\> kotlin @MilosKozak
* ny CI-konfiguration, CI körs på egna servrar @MilosKozak
* bibliotek uppdaterade till senaste version, toml @MilosKozak
* migrering till Kotlin 2.0, Java 21 @MilosKozak

---

(version3204)=

## [Version 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)

Utgivningsdatum: 27-02-2024

Den här versionen är den sista som stöder Android 10. Om du inte kan uppgradera till Android 11, [uppdatera AAPS till 3.2.0.4](#update-aaps-3204).

**Ändringar**

- Stöd för G7 i xDrip
- Rättningar för Medtrum
- Rättad ikon för Automation
- Rättat att klara mål 1

---

(version3200)=

**Version 3.2.0.0 tillägnad @Philoul**

Utgivningsdatum: 23-10-2023

**Viktiga tips**

- NS 15 krävs
- När du använder websockets i pluginet NS v3 skickas behandlingar som har angetts i NS webbgränssnitt (plusknappen) och i andra appar som använder API v1 inte till AAPS. Detta kommer att rättas i en framtida version av NS. Använd alltid samma klient (v1 eller v3) i AAPS och AAPSClient tills NS internt har gått över helt till v3. Samma sak gäller för AAPS och AAPSClient.
- Websockets i pluginet v3 fungerar på liknande sätt som i pluginet v1. Utan websockets hämtar AAPS data från NS med jämna mellanrum. Det bör ge lägre strömförbrukning, eftersom NS inte är ansluten hela tiden. Å andra sidan innebär det fördröjningar i datautbytet. Läs de viktiga kommentarerna från utvecklarteamet [här](#Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS) innan du använder den!
- Om du använder xDrip som CGM-källa måste du välja den igen efter uppdateringen på grund av interna ändringar
- Tidepool kan användas i stället för NS för att klara det första målet
- Om du skickar data till xDrip+ måste du konfigurera synkroniseringspluginet för xDrip. För att ta emot BG från AAPS i xDrip måste ”xDrip+ Sync Follower” väljas som källa
- Om du vill byta till drivrutinen ComboV2 måste du avinstallera Ruffy och parkoppla pumpen med AAPS igen
- För att använda pluginet DynISF måste du starta mål 11 (alla tidigare mål måste vara slutförda innan du kan starta mål 11)

**Ändringar**

- Pumpdrivrutin för EOPatch2 / GlucomenDay @jungsomyeonggithub @MilosKozak
- Pumpdrivrutin ComboV2 (Ruffy behövs inte) @dv1
- Drivrutin för Medtrum Nano @jbr7rr
- Stöd för koreansk DanaI @MilosKozak
- Stöd för Glunovo CGM @christinadamianou
- Stöd för G7 @MilosKozak @rICTx-T1D @khskekec
- Plugin NSClient v3 @MilosKozak
- Stöd för Tidepool @MilosKozak
- Plugin för utjämning @MilosKozak, @justmara, Exponentiell utjämning @nichi (Tsunami), Genomsnittlig utjämning @jbr7rr
- Plugin DynamicISF @Chris Wilson, @tim2000s
- Urtavla för Garmin & stöd för puls (HeartRate) @buessow
- Ny logotyp @thiagomsoares
- Ny urtavla @Philoul
- rättat mängder av problem från version 3.1
- anteckningar kan läggas till på fler ställen @Sergey Zorchenko
- Rättningar i användargränssnittet @MilosKozak @osodebailar @Andries-Smit @yodax @Philoul @dv1 @paravoid
- nya SMS-kommandon LOOP LGS/CLOSED @pzadroga
- översättningar för klockan @Andries-Smit
- kommunikationen med xDrip har flyttats till en egen modul @MilosKozak
- interna ändringar: uppdaterade versioner av bibliotek, migrering till rx3, ny modulstruktur @MilosKozak
- rättningar i Diaconn-drivrutinen @miyeongkim
- fler alternativ för underhåll av databasen @MilosKozak
- AAPSClient visar om huvudtelefonen är ansluten till laddare @MilosKozak
- Ändring i kalkylatorn. Om CGM inte är tillgänglig ignoreras procentandelen (dvs. 100 % används)
- migrering till byggsystemet kts @MilosKozak
- förbättrad CI-integration @MilosKozak @buessow
- städning av tester @ryanhaining @MilosKozak
- över 110 000 nya kodrader, 240 000 ändrade rader, 6884 ändrade filer

(Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS)= **Viktiga kommentarer om att använda API v3 eller v1 för Nightscout med AAPS**

v1 är det gamla protokollet som används för att utbyta data mellan NS-webbplatsen och NS-servern. Det har många begränsningar
- v1 skickar bara data för 2 dagar
- v1 skickar alla data för 2 dagar vid varje återanslutning
- websockets är obligatoriskt = permanent anslutning, högre batteriförbrukning
- vid täta avbrott pausas anslutningen till NS i 15 minuter för att undvika hög dataanvändning

v3 är ett nytt protokoll. Säkrare och effektivare
- med tokens kan du bättre bestämma åtkomsträttigheter
- protokollet är effektivare på båda sidor (AAPS & NS)
- Det kan läsa upp till 3 månader med data från NS
- du kan välja att använda eller inte använda websockets på varje enhet (använda betyder snabbare uppdateringar, inte använda betyder lägre strömförbrukning men långsammare uppdateringar, dvs. minuter)
- NSClient pausas inte vid avbrott

BEGRÄNSNINGAR
- NS 15 måste användas med AAPS 3.2
- v3 ser inte uppdateringar som görs via protokollet v1 (det löses troligen i en framtida version av NS)
- i motsatt riktning ser v1 ändringar som görs av v3, på grund av den gamla ineffektiva metoden för att spåra ändringar
- kom ihåg att NS hittills fortfarande använder v1 internt, så det går inte att ange data via NS webbgränssnitt om du använder v3. Du måste använda AAPSClient eller SMS om du vill ange data på distans

REKOMMENDERAD INSTÄLLNING
- på grund av allt ovan bör du bara välja en metod och använda den på alla enheter (kom ihåg att alla andra uppladdare använder v1 när detta skrivs). Om du väljer v3 ska du välja v3 i AAPS och i alla AAPSClient
- v3 rekommenderas eftersom det är effektivare
- om du använder websockets med v3 eller inte beror på vad du föredrar
- det rekommenderas STARKT att låta AAPS samla in alla data och sedan ladda upp dem till NS som enda uppladdare. Alla andra enheter och appar ska bara läsa från NS. På så sätt undviker du konflikter och synkroniseringsfel. Detta gäller också när BG-data skickas till NS med Dexcom Share connector osv.

---

(version3100)=

**Version 3.1.0**

Utgivningsdatum: 19-07-2022

[Versionsinformation](https://github.com/nightscout/AndroidAPS/releases/tag/3.1.0)

---

**Version 3.0.0**

Utgivningsdatum: 31-01-2022

[Versionsinformation](https://github.com/nightscout/AndroidAPS/releases/tag/3.0.0)

---

(version2821)=

## Version 2.8.2.1

Utgivningsdatum: 05-10-2021

Den här versionen är den sista som stöder Android 8. [Versionsinformation](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2.1)

---

**Version 2.8.2**

Utgivningsdatum: 23-01-2021

[Versionsinformation](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

---

(version-2811)= (important-hints-2-8-1-1)=

**Version 2.8.1.1**

Utgivningsdatum: 12-01-2021

[Versionsinformation](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.1.1)

---

(Releasenotes-version-2-8-0)=

**Version 2.8.0**

Utgivningsdatum: 01-01-2021

[Versionsinformation](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.0)

---

(Releasenotes-version-2-7-0)=

**Version 2.7.0**

Utgivningsdatum: 24-09-2020

[Versionsinformation](https://github.com/nightscout/AndroidAPS/releases/tag/2.7.0)

---

(Releasenotes-version-2-6-1-4)=

**Version 2.6.1.4**

Utgivningsdatum: 04-05-2020

[Versionsinformation](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2614)

---

**Version 2.6.1.3**

Utgivningsdatum: 03-05-2020

[Versionsinformation](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2613)

---

**Version 2.6.1.2**

Utgivningsdatum: 19-04-2020

[Versionsinformation](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2612)

---

**Version 2.6.1.1**

Utgivningsdatum: 06-04-2020

[Versionsinformation](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2611)

---

**Version 2.6.1**

Utgivningsdatum: 21-03-2020

[Versionsinformation](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-261)

---

(Releasenotes-version-2-6-0)=

**Version 2.6.0**

Utgivningsdatum: 29-02-2020

[Versionsinformation](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-260)

---

**Version 2.5.1**

Utgivningsdatum: 31-10-2019

[Versionsinformation](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-251)

---

(Releasenotes-version-2-5-0)=

**Version 2.5.0**

Utgivningsdatum: 26-10-2019

[Versionsinformation](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-250)

---

**Version 2.3**

Utgivningsdatum: 25-04-2019

[Versionsinformation](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-23)

---

**Version 2.2.2**

Utgivningsdatum: 07-04-2019

[Versionsinformation](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-222)

---

**Version 2.2**

Utgivningsdatum: 29-03-2019

[Versionsinformation](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-22)

---

**Version 2.1**

Utgivningsdatum: 03-03-2019

[Versionsinformation](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-21)

---

**Version 2.0**

Utgivningsdatum: 03-11-2018

[Versionsinformation](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-20)

---

**Version 1.0**

```{admonition} First version of **AAPS**
:class: note

Den första testversionen började 2015 och den första versionen släpptes 2016.

Den exakta tidslinjen för dessa versioner finns inte just nu, men eftersom frågan har ställts flera gånger dokumenterar vi det här.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
