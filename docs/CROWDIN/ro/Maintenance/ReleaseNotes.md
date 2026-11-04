
# Note de lansare

```{toctree}
:hidden:

Update2_7.md
Update3_0.md
UpdateAaps3204.md
```

Please follow the instructions in the [update manual](UpdateToNewVersion.md) to update to a new version. The troubleshooting section also addresses the most common difficulties encountered when updating **AAPS** on the update manual page.

```{admonition} Upgrading from AAPS v3?
:class: tip
See [What changed in AAPS v4](V4Changes.md) for the notable behavioral changes — features that have moved, been renamed, or been removed.
```

Veți primi o notificare ca aceasta când este disponibilă o actualizare nouă:

![Informații despre actualizare](../images/AAPS_LoopDisable90days.png)

If you do not update until expiration date **AAPS** will switch to Open Loop.

See [End of life](EndOfLife.md) for AAPS version end dates.

**Nu ignorați notificarea.** Versiunile noi de **AAPS** aduc corecturi importante de siguranță. Therefore, every **AAPS** user must update to the latest version as soon as possible. This is an effort to try to improve the safety for each **AAPS** user and the DIY community. Vă mulțumim pentru înțelegere.

(maintenance-android-version-aaps-version)=

## Versiunea Android și versiunea AAPS

If your smartphone uses an Android Version older than Android 12 you will not be able to use AAPS v3.4 and up as it requires at least Android 12.

In order to allow users with older Android to use older version of AAPS new versions were pushed which only change version verification. Nu sunt incluse alte îmbunătățiri.

Find your Android version in the table below and use the matching **AAPS** version. The code is downloaded from <https://github.com/nightscout/AndroidAPS> using the branch shown.

| Versiunea dumneavoastră de Android | Versiunea AAPS de folosit | Ramura de descărcat                                              |
| ---------------------------------- | ------------------------- | ---------------------------------------------------------------- |
| Android 12 și mai nou              | Ultima versiune           | [master](https://github.com/nightscout/AndroidAPS) (implicit)    |
| Android 11                         | **3.3.2.1**               | [3.3.2.1](https://github.com/nightscout/AndroidAPS/tree/3.3.2.1) |
| Android 9, 10                      | **3.2.0.4**               | [3.2.0.4](https://github.com/nightscout/AndroidAPS/tree/3.2.0.4) |
| Android 8                          | **2.8.2.1**               | [2.8.2.1](https://github.com/nightscout/AndroidAPS/tree/2.8.2.1) |
| Android 7                          | **2.6.2**                 | [2.6.2](https://github.com/nightscout/AndroidAPS/tree/2.6.2)     |

## Versiunea WearOS

- AAPS requires WearOS 3.0, 3.2 or 3.5 (Android 11, API level 30) or newer. WearOS 2 watches are not supported.

```{tip}
WearOS 5, API level 34 (Android 14) has [limitations](#BuildingAapsWearOs-WearOS5).
```

Versiunile cu titlu sunt ultima lansare pentru fiecare versiune de Android (vedeți tabelul de mai sus). Celelalte lansări urmează între ele, cu notele lor sau cu un link către acestea pe GitHub.

(latestrelease)=

(version400)=

## Versiunea 4.0.0

Data lansării: 31-10-2026

**Funcții noi**

- New user interface: phone app rebuilt in Jetpack Compose @MilosKozak
- [Căutare globală](../DailyLifeWithAaps/GlobalSearch.md) @MilosKozak
- Kotlin Multiplatform migration, client for Windows, Mac, Linux desktop and iOS @MilosKozak
- [Scenarii](../DailyLifeWithAaps/Scenes.md): salvați un set de acțiuni și rulați-le împreună @MilosKozak
- [Controlul dispozitiv principal ↔ client](../RemoteFeatures/ClientMasterControl.md): trimiteți comenzi de pe un telefon client către dispozitivul principal @MilosKozak
  - [Roluri pentru clienți](#client-master-control-roles): Doar citire, Mese, Îngrijitor sau Administrator pentru fiecare client @MilosKozak
  - [Hardened mode](#client-master-control-hardened-mode): with client control on, the master takes changes only from paired clients @MilosKozak
  - Pairing with a QR code that also sets up Nightscout on the client, or with a PIN; the pairing secret is replaced right after pairing @MilosKozak
  - [Own Nightscout token](#client-master-control-own-token) for each client, with only the rights a client needs @MilosKozak
- [Insulin concentration](../AdvancedOptions/InsulinConcentration.md) support (U200, U500) across pumps, wizard and profiles @Philoul @MilosKozak
- Insulin management: insulin catalogue, nicknames, selection in profile and wizard @Philoul
- Calibration plugin @MilosKozak
- [Netezire](../CompatibleCgms/SmoothingBloodGlucoseData.md): Filtru Kalman Nescentrat (UKF) @piecycle
- [Acțiuni noi de automatizare](#automations-automation-action): **Schimbați netezirea** @olorinmaia, precum și **Rulați**, **Activați** sau **Dezactivați scenariul** @MilosKozak
- [Site rotation](#Aapsscreens-site-rotation): track and rotate infusion sites @Philoul @MilosKozak
- [Autotune](../AdvancedOptions/Autotune.md) rework @Philoul
- [Widgeturi](../DailyLifeWithAaps/Widgets.md) noi @MilosKozak @t1dude
- Accessibility: the phone app works with a screen reader - named controls, spoken status, graph descriptions and headings to skim @MilosKozak
- [Importul setărilor](../Maintenance/ExportImportSettings.md): poate păstra setările pompei @MilosKozak
- Persistent notification uses Android live updates, with Samsung Now bar support and the delta @premnirmal
- BG graph: [press and hold](#aaps-screens-graph-press-and-hold) to see the values at a reading, on every graph of the overview @t1dude @olorinmaia
- Îmbunătățiri de performanță @MilosKozak
- Automatic e-carbs in Bolus wizard @MilosKozak

**Dispozitive noi**

- **CareLevo**: [driver de pompă](../CompatiblePumps/CareLevo.md) nou @Kisu-Choi @MilosKozak
- **Dana-i2**: suport @MilosKozak
- **Instara**: sursă CGM nouă @leohunt

**Îmbunătățiri ale driverelor de pompă**

- Pump overview screens rebuilt for Insight, Medtronic, Medtrum, Omnipod, Dana, Diaconn and Equil @MilosKozak
- **Omnipod DASH**: coduri Ref ca pe PDM și descrieri ușor de citit ale erorilor, compensarea abaterii orei mereu activă, raportare mai bună a tipului de bolus @nl-ruud
- **Omnipod**: hard-end date for Dash & Eros @mcnelson
- **DanaR, RS**: emulator de pompă pentru testare @MilosKozak
- **Equil**: emulator de pompă pentru testare @MilosKozak
- Multe corecturi pentru pompe și buclă @MilosKozak și alții

**Wear OS**

- [Watch app](../WearOS/WearOsSmartwatch.md) rebuilt in Compose, new tiles and complications, automatic watch face install (Watch Face Push) on Wear OS 6+ @olorinmaia @Philoul
- CustomWatchface available for WearOS 6.0 (GW7, GW8, GW9...) with a WFF dedicated watchface @Philoul @olorinmaia
- CustomWatchface can now include 5 Complication slots you can customize (new feature only available for older watches) @Philoul
- New [WFF watchface based on AAPS complications](#wearos-complications-watchface-setup) @olorinmaia
- Corrections in Bolus wizard and Quick wizard result @olorinmaia
- New BG graph and Running mode activity in main menu @olorinmaia
- Bolus wizard: [meal type](#WearOsSmartwatch-wizard-meal-type) page that splits the carbs like the phone wizard, and [carb time](#WearOsSmartwatch-wizard-carb-time) with the *time to eat* reminder on the watch @olorinmaia
- [Phone alarms on the watch](#WearOsSmartwatch-phone-alarms): the watch shows the alarm and offers Silence and Mute 5 min @olorinmaia

**Construire**

- CI workflows for tag/branch builds, JDK version mapping @Angus-repo

**Contribuitori**

@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

Lista completă a modificărilor: <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

---

(version3426)=

## Versiunea 3.4.2.6

- Equil: stabilitate îmbunătățită @MilosKozak

---

(version3425)=

**Versiunea 3.4.2.5**

- Equil: corectarea unei condiții de concurență @MilosKozak

---

(version3424)=

**Versiunea 3.4.2.4**

- Corecturi Equil @MilosKozak
- Corectarea sincronizării profilului NS @MilosKozak

---

(version3423)=

**Versiunea 3.4.2.3**

- Dash: rezolvarea abaterii orei (drift) @nl-ruud
- NSClientV3: corectarea golului de date după reconectare @MilosKozak
- Automatizare: corectarea deserializării @MilosKozak
- Equil: corectarea raportării bateriei @MilosKozak
- Curățarea fluxului de lucru @vanelsberg
- Equil: recuperare îmbunătățită după erori @MilosKozak
- DanaRS: corectarea comunicării cu pompele domestice @MilosKozak
- Insight: Fix TBR sync @MilosKozak
- Dash: corectarea unei erori la activare @nl-ruud

---

(version3422)=

**Versiunea 3.4.2.2**

- Corectarea unor probleme cu Equil și Medtronic
- Siguranță îmbunătățită pentru Medtrum

---

(version3421)=

**Versiunea 3.4.2.1**

- Equil: corectarea asocierii și a dialogului de progres @MilosKozak

---

(version3420)=

**Versiunea 3.4.2.0**

Data lansării: 02-04-2026

- Equil: corectarea rezistenței pentru diferite modele @hhfcvmars
- Tidepool: corectarea sesiunii @MilosKozak
- Medtrum: corectarea procesului de activare, prin prevenirea umplerii duble @MilosKozak
- COB: corectarea calculului COB (acoperă un caz limită periculos) @MilosKozak

---

(version3410)=

**Versiunea 3.4.1.0**

Data lansării: 08-03-2026

**Nucleu**

- Corectarea gestionării orei de vară @MilosKozak
- Îmbunătățirea și unificarea identificării țintei normale (mgdl > 99, mmol > 5.5) @MilosKozak
- SMS: protejarea RESTART prin PIN @MilosKozak
- Mentenanță: avertizare dacă este selectat un dosar greșit @MilosKozak

**Îmbunătățiri ale driverelor de pompă**

- **Omnipod DASH**: mutarea codului driverului BLE în modulul omnipod/common @jwoglom
- **Omnipod DASH**: încercare de corectare a stării conexiunii @MilosKozak
- **Omnipod**: validarea profilului înainte de activarea pompei, pentru a nu irosi pompe (#4534) @brianV
- **Medtronic**: corectarea afișării aceluiași tip de codificare în dialogul de setări @mifi100
- **Medtronic**: pregătirea claselor comune pentru pompe (pregătire pentru Tandem) @andy-rozman
- **RileyLink**: corectarea codificării (#4519) @mifi100
- **Equil**: extinderea compatibilității cu pompele de insulină după prefixul numărului de serie (#4510) @hhfcvmars
- **Equil**: adăugarea jurnalizării @MilosKozak
- **Diaconn G8**: corectarea unei erori de sincronizare a jurnalului și suport pentru firmware 3.58+ @miyeongkim
- **Diaconn**: fix TBR duration unit conversion @miyeongkim
- **Diaconn**: folosirea commandQueue.loadEvents() pentru sincronizarea istoricului @miyeongkim
- Se permite administrarea insulinei când bucla este suspendată, dar pompa este disponibilă @cschuijt

**Cloud / copie de rezervă**

- Adăugarea copiei de rezervă în Google Drive @Angus-repo
- Notificarea interfeței la schimbarea stării de eroare a stocării în cloud @Angus-repo
- Se permite stocarea locală și în cloud în același timp @Angus-repo

**Tidepool**

- Îmbunătățirea migrării Tidepool OAuth2 @MilosKozak
- Corectarea stării Tidepool BLOCKED care nu se mai termina, corectarea respingerii SSID-urilor goale @michaeln-synapse

**NSClient**

- NSCv3: reconectare îmbunătățită @MilosKozak

**Wear OS**

- Afișarea IOB nou în rezultatul asistentului dacă IOB este folosit în calcule @olorinmaia
- Corectarea BolusProgress pe ceas cu cantitatea totală @Philoul

**Interfață**

- Îmbunătățirea pictogramei ic_none pentru Rotație loc @Philoul
- Corectarea setării de gestionare a rotației locului pompei care nu era folosită @samfundev

**Contribuitori**

@MilosKozak @Philoul @olorinmaia @jwoglom @mifi100 @andy-rozman @Angus-repo @brianV @cschuijt @hhfcvmars @miyeongkim @samfundev @michaeln-synapse

---

(version3400)=

**Versiunea 3.4.0.0**

Data lansării: 31-12-2025

**Înainte de actualizare:**

* Această versiune necesită Google Android 12.0 sau mai nou. Verificați versiunea telefonului înainte de a încerca actualizarea.
* Actualizați la ultima versiune de Android Studio sau, mai bine, folosiți construirea în browser.

**Funcții noi**

* Mod de funcționare @MilosKozak
  * Afișarea [istoricului stării buclei](#AapsScreens-running-mode) în filele de tratamente
  * Afișarea și schimbarea [stării buclei din AAPSClient](#RemoteControl_aapsclient).<br>NB: necesită setarea [NSClient > Sincronizare > Primiți modul de funcționare din NS](#Preferences-nsclient-synchronization)
* [CGM-uri noi](../Getting-Started/CompatiblesCgms.md): Glunovo, Intelligo, Sinocare
* Suport pentru [Rotație loc](#Aapsscreens-site-rotation) @Philoul
* [Acțiune nouă de automatizare](#automations-automation-action): activați sau dezactivați SMB @MilosKozak
* CGM Syai este o [sursă de încredere](#GettingStarted-TrustedBGSource) și acceptă filtrare avansată @MilosKozak

**Îmbunătățiri Wear OS**

* consum de baterie redus foarte mult @MilosKozak
* îmbunătățiri și corecturi ale interfeței @olorinmaia
* cod rescris aproape complet, pentru a corespunde nivelului actual al bibliotecilor (înainte WearOS 2) @MilosKozak
* 2 complicații noi pentru date extinse @Philoul
* Migrare la un furnizor modern de complicații cu DataStore @MilosKozak

**Corecturi pentru pierderi de memorie**

* Au fost corectate pierderile de memorie din cod @MilosKozak
* A fost adăugată raportarea pierderilor de memorie LeakCanary în Firebase Crashlytics @MilosKozak

**Îmbunătățiri ale driverelor de pompă**

* **DanaI**: au fost corectate problemele de deconectare @MilosKozak
* **RileyLink**: comunicare mai rapidă prin reducerea întârzierilor @mifi100
* **Medtrum**: a fost adăugată afișarea orei de activare și a vechimii plasturelui @vanelsberg, corectarea parolei cu majuscule @MilosKozak
* **Combo**: au fost corectate condițiile de concurență din teste @MilosKozak @dv1
* **Equil**: conectare optimizată, consum de baterie redus @MilosKozak

**Sincronizare Nightscout**

* Eliminarea dublurilor îmbunătățită la erori NS @MilosKozak

**Îmbunătățiri UI/UX**

* diverse îmbunătățiri @MilosKozak @Philoul @olorinmaia

**Automatizare**

* Acțiune nouă de control SMB - activați/dezactivați SMB prin automatizare @MilosKozak

**Testare**

* Au fost adăugate teste unitare complete pentru pompele Equil, Eopatch, Dana și Medtronic @MilosKozak
* Stabilitate și acoperire îmbunătățite ale testelor în mai multe module @MilosKozak

**Tidepool**

* Tidepool OAUTH2 (suport pentru noua autentificare Tidepool) @MilosKozak

---

(version3321)=

## Versiunea 3.3.2.1

Data lansării: 13-08-2025

- Fixed Omnipod Bluetooth connection on Android 16
- CI process (Browser build)
- Corectarea conversiei mmol-mgdl
- Fix wrong time selection in dialogs in some timezones
- Corectarea citirii cheilor în modul simplu
- Fix missed predictions on wear
- ConfigBuilder îmbunătățit
- Sincronizare completă NSCv3 îmbunătățită

---

(version3300)=

**Versiunea 3.3.2.0**

Data lansării: 27-03-2025

**How to upgrade**

* Pentru a construi această versiune este necesară [versiunea Android Studio numită „Meerkat”](#Building-APK-recommended-specification-of-computer-for-building-apk-file) sau una mai nouă. Dacă ați construit deja o versiune 3.3.x, trebuie să actualizați din nou Android Studio.

(version-enforcement)=

**Începând cu această versiune, notificarea și impunerea versiunii au fost simplificate și relaxate și funcționează astfel:**

*  No expiration when device is offline (if no connection to the internet). It means no 60 and 90 days grace periods anymore.
*  After expiration LGS mode is enforced
*  Veți primi avertismente/notificări mai rar:
   - 28+ zile rămase: la fiecare 7 zile
   - 27-14 zile rămase: la fiecare 3 zile
   - apoi o dată pe zi
   - Notification will be generated after noon to not bother you during nights
* Există doar 2 tipuri de notificări
   - New version available (has no effect on AAPS)
   - Application is expiring on some date in the future (still no effect on AAPS) / has expired (AAPS will turn into LGS mode)

**Noutăți**

* Comanda SMS RESTART @MilosKozak
* Watch Profile switch parameters @olorinmaia
* Mod întunecat pentru cadranul AAPS V2 @olorinmaia
* Îmbunătățiri ale schimbului de date G7 @olorinmaia
* Configurare widget @MilosKozak
* Îmbunătățiri ale interfeței pentru RadioButtons @olorinmaia
* Automatizare: alegerea poziției de pe hartă @MilosKozak
* Versiunea este vizibilă pe ecranele principale @MilosKozak
* Compilation with existing git system is enforced (no zip downloads)
* Afișarea versiunii pe ecranul principal @MilosKozak
* Îmbunătățiri ale încărcării în Tidepool @ConstantinMatheis

**Corecturi de erori**

* Corectarea dezlegării (unbonding) la Dash @Andreas
* Corecturi Garmin @robertbuessow @suside
* Corectarea afișării IOB în dialoguri @olorinmaia
* Îmbunătățiri ale ortografiei și validării pentru obiective @MilosKozak
* Fixed rendering of emulated TBRs @MilosKozak
* A fost corectată ocolirea securității @tdrkDev

---

**Versiunea 3.3.1.3**

Release date: 21-01-2025

**Corecturi de erori**

* Dash: legarea (bonding) este opțională (implicit dezactivată) @MilosKozak
* Equil: corectarea bolusului de 10 U sau mai mult, îmbunătățiri ale alarmelor @EquilHack
* Garmin: îmbunătățiri pentru ceas @swissalpine
* Îmbunătățiri pentru ceas @olorinmaia
* Controlul stării buclei de pe ceas @tdrkDev
* Îmbunătățiri ale stabilității

*  **Poate fi necesară o nouă [configurare a Authenticator](#sms-commands-authenticator-setup).**

---

**Versiunea 3.3.1.2**

Release date: 15-01-2025

**How to upgrade**

* Pentru a construi această versiune este necesară [versiunea Android Studio numită „Ladybug Feature Drop”](#Building-APK-recommended-specification-of-computer-for-building-apk-file) sau una mai nouă. **Aceasta nu este același lucru cu „Ladybug” simplu.** Dacă ați construit deja o versiune 3.3.x, trebuie să actualizați din nou Android Studio.

**Corecturi de erori**

* Dash: se folosește legarea (bonding) pe Android 15+
* A fost readus butonul Dexcom pe ecranul principal (Overview)
* Equil: se permite eliminarea unei pompe care nu funcționează
* Avertizare când Factorul de ajustare DynISF este zero
* NSCv3: rezolvarea comunicării prin websocket pe telefoanele cu ora puțin diferită
* Comenzi SMS: corectarea OneTimePassword. **Poate fi necesară o nouă [configurare a Authenticator](#sms-commands-authenticator-setup).**
* Corectarea problemei în care unele preferințe nu mai puteau fi editate.
* Corectarea resetării parolei principale cu pompa virtuală.
* A fost corectat importul fișierelor mari de copie de rezervă a setărilor.

---

**Versiunea 3.3.1.0**

Release date: 06-01-2025

**Modificări ale interfeței**

* [Au fost adăugate culori pentru a deosebi AAPSClient de AAPSClient2](#RemoteControl_aapsclient) @MilosKozak
* Aspect și pictograme îmbunătățite pentru acțiunile utilizatorului

**Alte funcții**

* Declanșator nou pentru automatizare: [numărul de pași](#screen-heart-rate-steps) @Roman Rihter
* Allow to receive everything on NSCv3 full sync (including data previously not synced such as TBR) @MilosKozak
* NSClient v3: funcționarea anunțurilor (_de exemplu_, de la AAPSClient la AAPS) @MilosKozak

**Modificări tehnice și corecturi de erori**

* Corectarea unei căderi a aplicației la Insight @philoul
* Corectarea creării unui număr foarte mare de înregistrări deviceStatus în Nightscout @MilosKozak
* Corectarea absorbției carbohidraților @MilosKozak
* A fost corectată culoarea pentru RadioButtons și CheckBoxes @MilosKozak
* A fost corectată o eroare la migrarea procentajului DynISF @MilosKozak
* A fost rezolvată notificarea DynISF afișată greșit @MilosKozak
* A fost corectată o eroare la cadrane @philoul

---

**Versiunea 3.3.0.0**

Data lansării: 29-12-2024

**Funcții principale**

* Funcția **[ISF dinamic](../DailyLifeWithAaps/DynamicISF.md)** nu mai este un modul separat, ci este acum inclusă ca opțiune a modulului [OpenAPS SMB](#Config-Builder-aps), cu unele modificări în comportament:
  * **Schimbare de profil** și **Procentajul profilului** sunt acum luate în considerare pentru **ISF dinamic** în ceea ce privește intensitatea sensibilității dinamice
  * Se calculează **ISF** mediu din ultimele 24 de ore, iar această valoare este folosită pentru asistentul de bolusare și pentru calculul **COB**. Valoarea **ISF din profil** nu mai este folosită deloc (cu excepția situației de rezervă, când datele din istoric nu sunt disponibile)
  * Pagina de documentație DynamicISF a fost rescrisă. Vă rugăm să citiți secțiunea importantă [Ce trebuie avut în vedere la activarea ISF dinamic](#dyn-isf-things-to-consider-when-activating-dynamicisf).
* [Activați SMB întotdeauna și Activați SMB după carbohidrați](#Open-APS-features-enable-smb-always) pentru utilizatorii FreeStyle Libre 2 și Libre 3
  * Notă: Necesită ultima versiune de xDrip+ sau Juggluco.
* Declanșatori noi pentru **Automatizare**
* Export automat al setărilor

**How to upgrade**

* Înainte de actualizare:
  * **<span style="color:red">Această versiune necesită Google Android 11.0 sau mai nou</span>**. Verificați versiunea telefonului înainte de a încerca actualizarea.
  * Dacă folosiți driverul Combo „vechi” cu dispozitivul ruffy, treceți la [driverul Combo nativ](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) înainte de actualizare
  * În timpul actualizării veți pierde [graficele suplimentare](#AapsScreens-section-g-additional-graphs) de pe ecranul principal: dacă este nevoie, notați configurația actuală, ca să le puteți crea din nou după actualizare.
  * [Problemele de conectare Bluetooth pe care le au unii utilizatori cu Android 15](../Getting-Started/Phones.md) **NU** sunt rezolvate de această versiune (este o problemă a Android, nu a **AAPS**). O corectură este disponibilă în 3.3.1.2.
  * Butonul BYODA de pe ecranul principal nu mai este disponibil din cauza limitărilor Android. Acest lucru este corectat în 3.3.1.2.
* Instrucțiuni de actualizare: urmați ghidul [Actualizarea la o versiune nouă](../Maintenance/UpdateToNewVersion.md).
  * Pentru a construi această versiune este necesară [versiunea Android Studio numită „Ladybug”](#Building-APK-recommended-specification-of-computer-for-building-apk-file) sau una mai nouă. Dacă aveți deja instalată o versiune mai veche de Android Studio, poate fi nevoie să <span style="color:red">configurați versiunea JVM la 21</span>. Consultați [Depanare Android Studio > Incompatible Gradle JVM](#incompatible-gradle-jvm).
  * Sfat - dacă nu doriți să pierdeți istoricul **AAPS**, faceți ÎNTOTDEAUNA o ACTUALIZARE și NU o DEZINSTALARE/INSTALARE. Ca măsură de precauție, faceți o copie de rezervă a setărilor **AAPS** actuale și a vechiului APK, ca să puteți reveni la o versiune veche dacă ceva nu merge bine.
* După actualizare:
  * Setați noua [setare „Dosar AAPS”](#preferences-maintenance-logdirectory) din fila Mentenanță.

**Modificări detaliate**

**CGM-uri și pompe**

* [Activați SMB întotdeauna și Activați SMB după carbohidrați](#Open-APS-features-enable-smb-always) pentru utilizatorii FreeStyle Libre 2 și Libre 3 @MilosKozak
* Îmbunătățiri ale [driverului Medtrum](../CompatiblePumps/MedtrumNano.md) @jbr77rr
  * Îmbunătățiri ale comunicării, inclusiv o setare nouă pentru a ocoli problemele pe unele telefoane
  * Afișarea nivelului rezervorului la începutul activării
  * Corectarea erorii în care activarea revine la început și utilizatorul nu poate termina activarea
  * Informații despre starea sincronizării și alte clarificări
* Pompă nouă acceptată: [Equil 5.3](../CompatiblePumps/Equil5.3.md) @EquilHack
* CGM-uri noi acceptate: [Ottai](../CompatibleCgms/OttaiM8.md) @ottai-developer și [Syai Tag](../CompatibleCgms/SyaiTagX1.md) @syai-dev
* Driverul Insight a fost rescris în kotlin @Philoul
* A fost eliminat vechiul driver Combo care depindea de ruffy

**Modificări ale interfeței**

* [Mod simplu](#preferences-simple-mode) este activat implicit la o instalare nouă @MilosKozak
* Opțiuni noi pentru [Asistent Rapid](#Preferences-quick-wizard) @radicalb
  * The QuickWizard now uses the same logic for bolus calculation and display as the calculator. You can now use the “carb time” field in QuickWizard to pre-bolus.
* [Meniu nou pentru scala graficului](#aaps-screens-main-graph); îmbunătățiri ale interfeței pentru [meniul de grafice suplimentare](#AapsScreens-activate-optional-information) @Philoul
* [Îmbunătățirea aspectului ConfigBuilder](../SettingUpAaps/ConfigBuilder.md) @MilosKozak
  * Secțiunile sunt acum închise implicit. Folosiți săgeata pentru a le deschide.
* Sensibilitatea variabilă este vizibilă în AAPSClient
* Îmbunătățiri ale interfeței asistentului de bolusare @kenzo44
* Corectarea afișării textului în filele pompelor când se folosește tema luminoasă @jbr77rr

**Alte funcții**

* [Export automat al setărilor](#ExportImportSettings-Automating-Settings-Export) @vanelsberg
* [Declanșator nou pentru automatizare](#automations-automation-triggers) @vanelsberg
  * Activarea pompei (doar pentru pompe plasture)
* [Declanșatori noi pentru automatizare](#automations-automation-triggers) @jbr77rr
  * Cannula age, Insulin age, Battery age, Sensor age, Reservoir level, Pump battery level
* Se pot introduce carbohidrați negativi @MilosKozak
* Parametru nou [„Dosar AAPS”](#preferences-maintenance-settings) pentru a alege un dosar de stocare diferit de cel implicit.
* Se permit [înregistrări de insulină când pompa este suspendată](#aaps-screens-buttons-insulin) @jbr77rr
* [Obiectivul 2](#objectives-objective2) a fost actualizat @MilosKozak
  * Check that master password is set and known
* Carbohidrați aleatorii în modul de test @MilosKozak
* A fost corectată o eroare în calculul DZT @MilosKozak
* Comenzi SMS: se poate alege să [**nu** se trimită SMS pentru schimbările de profil](#sms-commands-too-many-messages) venite din NS @MilosKozak

**Ceasuri inteligente**

* îmbunătățiri pentru ceas și cadrane @Philoul @MilosKozak @olorinmaia
* Iconițe (tiles) pe ceas din acțiunile de automatizare @Philoul
* Cadrane combinate din AAPS, AAPSClient și AAPSClient2 pentru a monitoriza mai mulți pacienți @Philoul @MilosKozak
* EXTRA: show\_user\_actions\_on\_watch\_only @MilosKozak

**Modificări tehnice**

* [schimbarea locației fișierelor jurnal](#Accessing-logfiles-accessing-logfiles)
* structură nouă a modulelor interne @MilosKozak
* stratul de persistență a fost separat de codul principal @MilosKozak
* fișierele de construire au fost rescrise în kts @MilosKozak
* algoritmii au fost rescriși în kotlin pentru performanță mai bună @MilosKozak
* foarte multe teste unitare noi @MilosKozak și alții
* mai mult cod convertit în kotlin @MilosKozak
* gestionare nouă a preferințelor, xml \-\> kotlin @MilosKozak
* configurație CI nouă, CI rulează pe servere proprii @MilosKozak
* bibliotecile au fost actualizate la ultima versiune, toml @MilosKozak
* migrare la kotlin 2.0, java 21 @MilosKozak

---

(version3204)=

## [Versiunea 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)

Data lansării: 27-02-2024

Această versiune este ultima care acceptă Android 10. Dacă nu puteți trece la Android 11, [actualizați AAPS la 3.2.0.4](#update-aaps-3204).

**Modificări**

- Suport pentru xDrip G7
- Corecturi Medtrum
- Automation icon fix
- Passing objective 1 fix

---

(version3200)=

**Versiunea 3.2.0.0, dedicată lui @Philoul**

Release date: 23-10-2023

**Important hints**

- Este necesar NS 15
- Când folosiți websockets în modulul NS v3, tratamentele introduse prin interfața NS (butonul plus) și prin alte aplicații care folosesc API v1 nu sunt trimise la AAPS. Acest lucru va fi corectat într-o versiune viitoare a NS. Folosiți întotdeauna același client (v1 sau v3) în AAPS și în AAPSClient, până când NS trece complet la v3 intern. Același lucru este valabil și pentru AAPS și AAPSClient.
- Websockets în modulul v3 funcționează asemănător cu modulul v1. Fără websockets activate, AAPS programează descărcări regulate din NS, ceea ce ar trebui să ducă la un consum mai mic de energie, deoarece NS nu este conectat permanent. Pe de altă parte, înseamnă întârzieri în schimbul de date. Vă rugăm să citiți [aici](#Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS) observațiile importante ale echipei de dezvoltare înainte de a o folosi!
- Dacă folosiți xdrip ca sursă CGM, trebuie să îl selectați din nou după actualizare, din cauza unor modificări interne
- Tidepool poate fi folosit în locul NS pentru a trece primul obiectiv
- Dacă trimiteți date către xDrip+, trebuie să configurați modulul de sincronizare xDrip. Pentru a primi glicemiile din AAPS în xDrip, trebuie selectată sursa „xDrip+ Sync Follower”
- Dacă doriți să treceți la driverul ComboV2, Ruffy trebuie dezinstalat, iar pompa trebuie asociată din nou cu AAPS
- Pentru a folosi modulul DynISF, trebuie să începeți Obiectivul 11 (toate obiectivele anterioare trebuie să fie terminate pentru a putea începe obiectivul 11)

**Modificări**

- Driver de pompă EOPatch2 / GlucomenDay @jungsomyeonggithub @MilosKozak
- Driver de pompă ComboV2 (nu mai este nevoie de Ruffy) @dv1
- Driver Medtrum Nano @jbr7rr
- Suport pentru DanaI coreeană @MilosKozak
- Suport pentru CGM Glunovo @christinadamianou
- Suport pentru G7 @MilosKozak @rICTx-T1D @khskekec
- Modulul NSClient v3 @MilosKozak
- Suport pentru Tidepool @MilosKozak
- Modulul de netezire @MilosKozak, @justmara, Netezire exponențială @nichi (Tsunami), Netezire medie @jbr7rr
- Modulul DynamicISF @Chris Wilson, @tim2000s
- Suport pentru cadrane Garmin și pentru pulsul cardiac (HeartRate) @buessow
- Siglă nouă @thiagomsoares
- Cadran nou @Philoul
- au fost corectate foarte multe probleme din versiunea 3.1
- se pot adăuga note în mai multe locuri @Sergey Zorchenko
- Corecturi ale interfeței @MilosKozak @osodebailar @Andries-Smit @yodax @Philoul @dv1 @paravoid
- comenzi SMS noi LOOP LGS/CLOSED @pzadroga
- traduceri pentru ceas (Wear) @Andries-Smit
- comunicarea cu xdrip a fost mutată într-un modul separat @MilosKozak
- modificări interne: versiuni actualizate ale bibliotecilor, migrare la rx3, structură nouă a modulelor @MilosKozak
- Corecturi pentru driverul Diaconn @miyeongkim
- more database maintenance options @MilosKozak
- AAPSClient arată dacă telefonul principal este conectat la priză @MilosKozak
- Modificare în asistentul de bolusare. Dacă CGM nu este disponibil, procentajul este ignorat (adică se folosește 100%)
- migrare la sistemul de construire kts @MilosKozak
- integrare CI îmbunătățită @MilosKozak @buessow
- curățarea testelor @ryanhaining @MilosKozak
- peste 110k linii de cod noi, 240k linii modificate, 6884 de fișiere modificate

(Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS)= **Observații importante despre utilizarea API v3 față de v1 pentru Nightscout cu AAPS**

v1 este protocolul vechi folosit pentru schimbul de date între site-ul NS și serverul NS. Are multe limitări
- v1 trimite doar 2 zile de date
- v1 trimite toate datele din cele 2 zile la fiecare reconectare
- folosirea websockets este obligatorie = conexiune permanentă, consum mai mare de baterie
- când conexiunea la NS se întrerupe des, conexiunea este oprită pentru 15 minute, pentru a evita un consum mare de date

v3 este protocolul nou. Mai sigur și mai eficient
- când folosiți tokenuri, puteți defini mai bine drepturile de acces
- protocolul este mai eficient pe ambele părți (AAPS și NS)
- Poate citi până la 3 luni de date din NS
- puteți alege să folosiți sau nu websockets pe fiecare dispozitiv (folosirea înseamnă actualizări mai rapide, nefolosirea înseamnă consum de energie mai mic, dar actualizări mai lente, adică în minute)
- NSClient nu este oprit când conexiunea se întrerupe

LIMITĂRI
- NS 15 trebuie folosit cu AAPS 3.2
- v3 nu vede actualizările făcute prin protocolul v1 (probabil acest lucru va fi rezolvat într-o versiune viitoare a NS)
- în direcția opusă, din cauza vechii metode ineficiente de urmărire a modificărilor, v1 vede modificările făcute de v3
- rețineți că, deocamdată, NS folosește încă intern v1, deci nu puteți introduce date prin interfața web NS dacă folosiți v3. Trebuie să folosiți AAPSClient sau SMS dacă doriți să introduceți date de la distanță

SETAREA RECOMANDATĂ
- din toate motivele de mai sus, ar trebui să alegeți o singură metodă și să o folosiți pe toate dispozitivele (rețineți că, la momentul scrierii, toate celelalte programe de încărcare folosesc v1). Dacă decideți să treceți la v3, selectați v3 în AAPS și în toate aplicațiile AAPSClient
- v3 este preferat datorită eficienței
- folosirea sau nu a websockets cu v3 depinde de preferința dumneavoastră
- este FOARTE recomandat să lăsați AAPS să adune toate datele și apoi să le încarce în NS, ca singur program de încărcare. Toate celelalte dispozitive/aplicații ar trebui doar să citească din NS. Astfel veți evita conflictele și erorile de sincronizare. Acest lucru este valabil și pentru trimiterea datelor de glicemie în NS cu conectorul Dexcom Share etc.

---

(version3100)=

**Versiunea 3.1.0**

Data lansării: 19-07-2022

[Note de lansare](https://github.com/nightscout/AndroidAPS/releases/tag/3.1.0)

---

**Versiunea 3.0.0**

Data lansării: 31-01-2022

[Note de lansare](https://github.com/nightscout/AndroidAPS/releases/tag/3.0.0)

---

(version2821)=

## Versiunea 2.8.2.1

Release date: 05-10-2021

Această versiune este ultima care acceptă Android 8. [Note de lansare](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2.1)

---

**Versiunea 2.8.2**

Data lansării: 23-01-2021

[Note de lansare](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

---

(version-2811)= (important-hints-2-8-1-1)=

**Versiunea 2.8.1.1**

Data lansării: 12-01-2021

[Note de lansare](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.1.1)

---

(Releasenotes-version-2-8-0)=

**Versiunea 2.8.0**

Data lansării: 01-01-2021

[Note de lansare](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.0)

---

(Releasenotes-version-2-7-0)=

**Versiunea 2.7.0**

Data lansării: 24-09-2020

[Note de lansare](https://github.com/nightscout/AndroidAPS/releases/tag/2.7.0)

---

(Releasenotes-version-2-6-1-4)=

**Versiunea 2.6.1.4**

Data lansării: 04-05-2020

[Note de lansare](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2614)

---

**Versiunea 2.6.1.3**

Release date: 03-05-2020

[Note de lansare](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2613)

---

**Versiunea 2.6.1.2**

Data lansării: 19-04-2020

[Note de lansare](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2612)

---

**Versiunea 2.6.1.1**

Data lansării: 06-04-2020

[Note de lansare](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2611)

---

**Versiunea 2.6.1**

Data lansării: 21-03-2020

[Note de lansare](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-261)

---

(Releasenotes-version-2-6-0)=

**Versiunea 2.6.0**

Data lansării: 29-02-2020

[Note de lansare](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-260)

---

**Versiunea 2.5.1**

Data lansării: 31-10-2019

[Note de lansare](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-251)

---

(Releasenotes-version-2-5-0)=

**Versiunea 2.5.0**

Data lansării: 26-10-2019

[Note de lansare](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-250)

---

**Versiunea 2.3**

Data lansării: 25-04-2019

[Note de lansare](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-23)

---

**Versiunea 2.2.2**

Data lansării: 07-04-2019

[Note de lansare](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-222)

---

**Versiunea 2.2**

Data lansării: 29-03-2019

[Note de lansare](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-22)

---

**Versiunea 2.1**

Data lansării: 03-03-2019

[Note de lansare](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-21)

---

**Versiunea 2.0**

Data lansării: 03-11-2018

[Note de lansare](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-20)

---

**Versiunea 1.0**

```{admonition} First version of **AAPS**
:class: note

The first test version started in 2015 and the first release was in 2016.

The exact chronology of these releases is not available at the moment but as this question has been asked several times we document it here.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
