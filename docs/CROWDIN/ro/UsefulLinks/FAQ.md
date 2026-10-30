# FAQ pentru cei care folosesc bucla

How to add questions to the FAQ: Follow these [instructions](../SupportingAaps/HowToEditTheDocs.md)

## General

### Pot descărca direct fișierul de instalare AAPS?

Nu. Nu există niciun fișier apk descărcabil pentru AAPS. Trebuie să-l [construiți](../SettingUpAaps/BuildingAaps.md) chiar voi. Iată de ce:

AAPS este utilizat pentru a vă controla pompa și a administra insulină. În conformitate cu reglementările actuale, în Europa, toate sistemele din clasa IIa sau IIb sunt dispozitive medicale care necesită aprobare din partea regulatorilor (un marcaj CE), și care trebuie să aibă diferite studii și semnalizări ale calității. Distribuirea unui dispozitiv nereglementat este ilegală. Reglementări similare există și în alte părți ale lumii.

Acest regulament nu se limitează doar la vânzări (în sensul obținerii de bani pentru ceva), ci se aplică oricărui mod de distribuire (chiar și acordarea gratuită). Construirea unui dispozitiv medical pentru propriul uz este singura modalitate de a nu fi afectat de aceste reglementări.

De aceea fișierele apk nu sunt disponibile.

(FAQ-how-to-begin)=

### Cum se pornește?

Start with [Preparing to start with AAPS](../Getting-Started/PreparingForAaps.md): it walks you through everything below in more detail.

În primul rând, trebuie să **aveți componentele fizice compatibile pentru buclă**:

* O pompă de insulină [acceptată](../Getting-Started/CompatiblePumps.md), 
* un telefon inteligent [Android](../Getting-Started/Phones.md) (Apple iOS nu este acceptat de AAPS - puteți verifica [iOS Loop](https://loopkit.github.io/loopdocs/)) și
* un [sistem de monitorizare continuă a glicemiei](../Getting-Started/CompatiblesCgms.md). 

În al doilea rând, trebuie **să vă pregătiți componentele software**: [AAPS](../SettingUpAaps/BuildingAaps.md), [sursa CGM/FGM](../Getting-Started/CompatiblesCgms.md) și [un server de raportare](../SettingUpAaps/SettingUpTheReportingServer.md).

În al treilea rând, trebuie să învățați și **să înțelegeți designul de referință OpenAPS pentru a vă verifica factorii de tratament**. Principiul fundamental al buclei închise este că [rata bazală și raportul insulină carbohidrați](../SettingUpAaps/YourAapsProfile.md), ale dumneavoastră, sunt exacte. Toate recomandările presupun că nevoile dumneavoastră bazale sunt îndeplinite și orice creșteri sau scăderi bruște pe care le vedeți sunt un rezultat al altor factori care necesită, prin urmare, unele ajustări punctuale (exercițiu, stres șamd). Ajustările pe care le poate face bucla sunt limitate pentru siguranță (a se vedea bazala temporară maximă permisă în [designul de referință al OpenAPS](https://openaps.org/reference-design/)), ceea ce înseamnă că nu veți dori să pierdeți doza permisă pe corecții necesare pentru a repara greșelile bazalei. Dacă, de exemplu, ajungeți în mod frecvent la rate bazale temporare joase atunci când se apropie o masă, atunci este foarte probabil că sunt necesare ajustări ale bazalei. You can use [Autotune](#autotune-how-autotune-calculates-adjustments) to consider a large pool of data to suggest whether and how basals and/or ISF need to be adjusted, and also whether carb ratio needs to be changed. Sau puteți testa și stabili ratele bazale [folosind metoda tradițională](https://integrateddiabetes.com/basal-testing/).

### Care sunt aspectele practice ale utilizării unui sistem de tip buclă?

#### Protecția parolei

If you don't want your settings to be easily changed, you can protect them with a password, a PIN or your phone's biometric authentication (fingerprint, face). Open **Settings** > **Protection** > **Settings protection** and choose the type of protection. You can also protect the whole app or only boluses in the same place. See [Settings protection](#Preferences-settings-protection) for details.

#### Ceasuri inteligente cu Android Wear

If you use the AAPS watch app to bolus or change settings, every request has to be confirmed on the watch: after you send it, the watch shows a summary with a **CONFIRM** button. See [Remote control from a Wear OS watch](../RemoteFeatures/RemoteControlWearOS.md).

(FAQ-disconnect-pump)=

#### Deconectați pompa

Dacă vă scoateți pompa pentru duș, băi, înot, sporturi sau alte activități, trebuie să aduceți la cunoștință programului AAPS că nu s-a administrat insulină, pentru a menține IOB corect.

The pump can be disconnected using the [loop icon](#AapsScreens-loop-status) on the AAPS main screen: press it and select **Disconnect pump** with the duration you need. If the activity takes longer than planned, press the icon again and pick a new duration: you don't need to reconnect first. See [Disconnecting the pump for showering or activity](#pumps-cannulas-disconnecting) for how to avoid a lack of insulin during long disconnections.

#### Recomandări care se bazează nu doar pe o singură citire CGM

Pentru siguranță, recomandările se bazează nu doar pe o singură citire a CGM, ci pe variația medie. Prin urmare, dacă pierdeți unele citiri, ar putea dura ceva timp după ce începeți să primiți din nou date înainte ca AAPS să facă din nou bucla.

#### Referințe suplimentare

There are several blogs with good tips to help you understand the practicalities of looping. Some of them are no longer online: the links below marked "archived copy" open a saved copy on the Internet Archive.

    * [Fine-tuning Settings](https://web.archive.org/web/20171029031305/http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM (archived copy)
    * [Why DIA matters](https://web.archive.org/web/20231130035027/http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM (archived copy)
    * [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
    * [Hormones and autosens](https://web.archive.org/web/20170902081839/http://seemycgm.com/2017/06/06/hormones-2/) See my CGM (archived copy)
    

(what-emergency-equipment-is-recommended-to-take-with-me)= (FAQ-emergency-equipment)=

### Ce echipamente pentru situații de urgență se recomandă să aveți la dumneavoastră întotdeauna?

Trebuie să aveți cu dumneavoastră același echipament de urgență ca oricare altă persoană cu DZ1 ce folosește tratamentul cu pompă de insulină. Când folosiți bucla în AAPS, este recomandat cu tărie să aveți următorul echipament suplimentar cu sau în apropierea dumneavoastră:

* Un pachet de baterii și cabluri pentru a încărca telefonul inteligent, ceasul și (dacă este necesar) cititorul Bluetooth sau dispozitivul de tip RileyLink
* Baterii pentru pompă
* Access to your backups, both on the phone and in the cloud (e.g. Google Drive, Dropbox), so that you can set up AAPS again on another phone (see [Creating and restoring back-ups](../Maintenance/ExportImportSettings.md)): 
  * the current [apk](../SettingUpAaps/BuildingAaps.md) of AAPS and of any other apps you use (e.g. xDrip, Juggluco, BYODA).
  * your keystore file (from building the apk) and its password,
  * your latest settings export files from AAPS and your other apps,
  * your **AAPS** master password: you cannot import the settings file without it.

(FAQ-organize-backups)=

#### How to organize my backups?

Export settings very regularly: after each pod or reservoir change, after modifying your profile, when you have validated an objective, if you change your pump… Even if nothing changes, export once a month. Păstrați câteva fișiere vechi de export.

**AAPS** can do this for you: it can export your settings automatically (for example with an [Automation](#ExportImportSettings-Automating-Settings-Export) after each pod change) and save the export directly to a cloud folder (Google Drive). See [Creating and restoring back-ups](../Maintenance/ExportImportSettings.md).

### Cum pot atașa în siguranță și în mod securizat dispozitivul CGM/FGM?

Puteți să-l lipiți cu o bandă. Există mai mulți plasturi de fixare pre-perforați, disponibili pentru sistemele CGM obișnuite (căutați pe Google, eBay sau Amazon). Unii utilizatori de bucle folosesc banda simplă kinesiologică sau rocktape.

Îl puteți repara. Puteți, de asemenea, să achiziționați benzi pentru braț care fixează senzorul CGM/FGM cu o bandă elastică (căutați pe Google, eBay sau Amazon).

## Algoritm APS

### Why does OpenAPS AMA show "dia: 3" even though I have a different DIA in my profile?

With **OpenAPS AMA** selected in **Configuration** > **APS**, **Open plugin** shows the data sent to the algorithm. In its **Profile** section, `dia` is always 3.0 or less:

![OpenAPS AMA plugin screen with dia 3.0 in the profile data](../images/screens/openaps_ama_plugin.png)

În AMA, DIA nu înseamnă de fapt "durata de acțiune a insulinei". Este un parametru care era anterior conectat la DIA. Acum, înseamnă "în care timp ar trebui să se termine corecția". Nu are nicio legătură cu calcularea IOB. În OpenAPS SMB, acest parametru nu mai este necesar.

## Alte setări

### Setări Nightscout

(FAQ-nsclient-blocked)=

#### AAPSClient (or AAPS) does not upload data: "Blocked by…". Ce pot face?

The NSClient status shows why no data is sent:

* **Blocked by connectivity options**: the connection settings do not allow the current connection. For example, you are on cellular data but only Wi-Fi is allowed, or you are not on one of the allowed Wi-Fi networks (SSIDs).
* **Blocked by charging options**: the connection settings only allow syncing while the phone is charging (or only on battery), and this is not the case right now.
* **No connectivity**: the phone has no internet connection.

Check the [NSClient connection settings](#Preferences-nsclient): **Use cellular data**, **Use roaming**, **Use WiFi**, **WiFi SSID**, **Sync on battery** and **Sync while charging**.

### Setări CGM

(FAQ-advanced-filtering)=

#### Why does AAPS say 'SMB always and after carbs disabled because active BG source doesn't support advanced filtering'?

**Enable SMB always** and **Enable SMB after carbs** can only be used with a [trusted BG data source](#GettingStarted-TrustedBGSource): a sensor and CGM app that can tell **AAPS** which sensor the readings come from. With any other BG source, **AAPS** switches these two options off and shows this message. Check the list of trusted sources and, if your sensor is listed, make sure you use one of the CGM apps shown for it. See also [Smoothing blood glucose data](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Pompă

#### Baterii

Looping can reduce the pump battery faster than normal use because the system interacts through Bluetooth far more than a manual user does. Se recomandă să schimbați bateriile la 25%, deoarece comunicația devine problematică sub această valoare. Puteți seta alarme de avertizare pentru bateria pompei folosind variabila PUMP_WARN_BATT_P în site-ul dumneavoastră Nightscout. Sfaturi pentru îmbunătățirea vieții bateriilor:

* reduceți perioada de timp cât ecranul pompei stă aprins (din setările pompei)
* reduceți perioada de timp cât iluminarea ecranului pompei este pornită (din setările pompei)
* selectați notificarea să fie prin intermediul unui sunet mai degrabă decât prin vibrație (în setările pompei)
* apăsați butoanele pompei doar pentru revenirea pistonului, folosiți AAPS pentru a verifica istoricul, nivelul bateriilor și volumul rezervorului.
* Aplicația AAPS poate fi adesea închisă pentru a economisi energie sau pentru a elibera memoria RAM pe unele telefoane. Când AAPS este reinițializat la fiecare pornire, se stabilește o conexiune Bluetooth cu pompa și apoi sunt recitite rata bazală curentă și istoricul de bolusuri. Acest lucru consumă baterie. To see if this is happening, enable **Log app start event** in the NSClient **Advanced settings**: Nightscout will receive an event at every restart of AAPS, which makes it easy to track the issue. To reduce this happening, turn off battery optimization for AAPS so that the phone stops closing it down: see [battery savings](#FAQ-battery-savings) below.
* curățați bornele bateriei cu tampon cu alcool, pentru a vă asigura că nu a rămas ceară/unsoare.
* for [Dana R/RS pumps](../CompatiblePumps/DanaRS-Insulin-Pump.md) the startup procedure draws a high current across the battery to purposefully break the passivation film (prevents loss of energy while in storage) but it doesn't always work to break it 100%. Fie scoateți și reintroduceți bateria de 2-3 ori până când se afișează 100% pe ecran, fie utilizați cheia bateriei pentru o scurtcircuitare rapidă înainte de a fi introdusă, prin aplicarea sa la ambele borne pentru o fracțiune de secundă.
* vedeți de asemenea mai multe sfaturi pentru [tipuri speciale de baterie](#Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)

#### Schimbarea rezervoarelor și a canulelor

The reservoir must be changed directly on the pump, then the change is recorded in **AAPS**. Follow the step-by-step [guide for changing the pump reservoir and cannula](#pumps-cannulas-changing-reservoir-and-cannula).

### Fundal

Puteți găsi imaginea de fundal AAPS pentru telefonul dumneavoastră pe [pagina de telefoane](#Phones-phone-wallpaper).

### Utilizare zilnică

Many of the situations below can be prepared once as a [scene](#scenes): a preset that switches profile, temp target and other settings with one tap. **AAPS** offers ready-made templates, for example *Exercise*, *Sleep*, *Alcohol* or *Bathing*.

#### Igienă

(what-to-do-when-taking-a-shower-or-bath)=

##### Ce trebuie făcut când se face duș sau baie?

Puteți îndepărta pompa în timp ce faceți duș sau baie. Pentru această perioadă scurtă de timp s-ar putea să nu aveți nevoie de ea, dar ar trebui să anunțați AAPS că v-ați deconectat astfel încât calculele IOB să fie corecte. Vedeți [descrierea de mai sus](#FAQ-disconnect-pump). The *Bathing* [scene](#scenes) template does this for you.

#### Serviciu

În funcție de tipul locului de muncă, veți putea alege să folosiți diferiți factori de tratament în zilele lucrătoare. Ca persoană care folosește o buclă, ar trebui să luați în considerare o [schimbare de profil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) pentru ziua tipică de muncă. De exemplu, puteți trece la un profil mai mare de 100% dacă aveți o activitate mai puțin solicitantă (spre exemplu statul la un birou), sau mai puțin de 100% dacă sunteți activ și în picioare toată ziua. Ați putea de asemenea să luați în considerare o țintă temporară mare sau mică, sau o schimbare de timp [a profilului dumneavoastră](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) atunci când lucrați mult mai devreme sau mai târziu decât este obișnuit, sau dacă lucrezi în schimburi diferite. You can also create a second profile (e.g. 'home' and 'workday') and do a daily profile switch to the profile you actually need, or save your workday settings as a [scene](#scenes).

### Activități de agrement

(FAQ-sports)=

#### Sporturi

Trebuie să vă adaptați vechile obiceiuri sportive din vremurile dinaintea buclei. Dacă doar ați consuma mai mulți carbohidrați la fel ca înainte, sistemul de buclă închisă îi va recunoaște și îi va corecta în mod corespunzător.

Deci, ați avea mai mulți carbohidrați la bord, dar în același timp bucla ar contracara și va elibera insulina.

Când folosiți bucla ar trebui să încercați acești pași:

* Make a [profile switch](#ProfileSwitch-change-percentage) < 100%: tap the profile name on the main screen, tap the round **▶** button, then set **Percentage** and **Duration**.
* Setați o [țintă temporară de activitate](#TempTargets-activity-temp-target) peste ținta standard. With a percentage below 100 % and a duration, the same **Activate** screen offers a **Temporary target / Activity** switch that starts both at once.
* Dacă utilizați SMB, asigurați-vă că ["Activați SMB cu ținte temporare mari"](#Open-APS-features-enable-smb-with-high-temp-targets) și ["Activați SMB întotdeauna"](#Open-APS-features-enable-smb-always) sunt dezactivate.

Pre- și post-procesarea acestor setări sunt importante. Faceți schimbările la timp, înainte de sport si luați în considerare efectul de umplere cu glucoză a mușchilor.

The *Exercise* and *Post-exercise Night* [scene](#scenes) templates bundle these settings, so you can start them with one tap. If you do sports regularly at the same time (i.e. sports class in your gym) you can consider using [automation](../DailyLifeWithAaps/Automations.md) to start the profile switch and TT, or the scene. Automatizarea bazată pe locație ar putea fi de asemenea o idee, dar face preprocesarea mai dificilă.

Procentul de schimbare a profilului, valoarea pentru ținta temporară a activității tale și momentul cel mai bun pentru modificări sunt setări individuale. Începeți pe partea sigură dacă sunteți în căutarea valorii corecte pentru dumneavoastră (începeți cu un procent mai mic și cu o țintă temporară mai mare).

#### Sex

Puteți îndepărta pompa pentru a fi „liber”, dar trebuie să anunțați AAPS astfel încât calculele IOB să fie corecte. Vedeți [descrierea de mai sus](#FAQ-disconnect-pump).

#### Consumul de alcool

Consumul de alcool este riscant în modul de buclă închisă deoarece algoritmul nu poate prezice corect dacă alcoolul a influențat glicemia. Trebuie să vă verificați propria metodă de tratare în acest caz, prin folosirea următoarelor funcții în AAPS:

* Dezactivarea modului de buclă închisă și tratarea manuală a diabetului sau
* stabilirea unor ținte temporare ridicate și dezactivarea UAM pentru a evita ca bucla să crească IOB din cauza unei mese inexistente sau
* do a [profile switch](#ProfileSwitch-change-percentage) to noticeably less than 100% 

The *Alcohol* [scene](#scenes) template is a starting point you can adapt to your own method.

Atunci când consumați alcool, trebuie să fiți întotdeauna atent la CGM pentru a evita manual o hipoglicemie prin consumul de carbohidrați.

#### Dormitul

##### How can I loop during the night without mobile and Wi-Fi radiation?

Mulți utilizatori activează modul avion pe timp de noapte. If you want the loop to support you when you are sleeping, proceed as follows (this will only work if your CGM app runs on the same phone as AAPS, such as xDrip, Juggluco or BYODA; it will NOT work if you get the BG-readings via Nightscout):

1. Activați modul avion în telefon.
2. Așteptați până când modul avion este activ.
3. Activați Bluetooth.

Acum nu mai primiți apeluri și nici nu sunteți conectat la internet. Dar bucla încă rulează.

Some people have discovered problems with local broadcast (AAPS not receiving BG values from xDrip) when phone is in airplane mode. In xDrip, go to Settings > Inter-app settings > Identify receiver and enter `info.nightscout.androidaps`.

![xDrip Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

If you want different settings at night (for example a higher target), the *Sleep* [scene](#scenes) template is a good starting point.

#### Traveling

##### Cum să facem față schimbărilor de fus orar?

Cu Dana R și Dana R Korean nu trebuie să faci nimic. For other pumps see [time zone traveling](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) page for more details.

### Subiecte medicale

#### Spitalizare

Dacă doriți să partajați unele informații despre AAPS și bucla artizanală cu medicii dumneavoastră, puteți să tipăriți [ghidul AAPS pentru medici](../UsefulLinks/ClinicianGuideToAaps.md).

#### Programare medicală la endocrinologul dumneavoastră

##### Raportare

Puteți afișa rapoartele Nightscout (https://YOUR-NS-SITE.com/report) sau să verificați [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).

## Întrebări frecvente pe Discord și răspunsurile lor...

### Problema mea nu este enumerată aici.

See [where to get help](../GettingHelp/WhereCanIGetHelp.md). If you found the solution yourself, **remind us to add it to this list!**

### Building and installing

(FAQ-build-errors)=

#### Am probleme, erori în construirea aplicației.

Please check the troubleshooting page for the way you build **AAPS** (see [Building AAPS](../SettingUpAaps/BuildingAaps.md)):

* building with a browser: [Browser build: troubleshooting](#aaps-ci-troubleshooting),
* building with Android Studio: [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md).

(FAQ-build-error-file-name-too-long)=

#### Eroare de construcție: numele fișierului este prea lung

This error can happen when building with Android Studio: the build stops with an error stating the file name is too long. Possible solutions: Move your sources to a directory closer to the root directory of your drive (e.g. "C:\src\AndroidAPS").

Din Android Studio: Asigurați-vă că "Gradle" a terminat de sincronizat și indexat după deschiderea proiectului și extragerea din GitHub. Executați o comandă Construiți->Curățați proiectul înainte de a face Reconstruiți proiectul. Executați fișier->Invalidați cache și Reporniți Android Studio.

(FAQ-running-dev-version)=

#### Alertă: Rularea versiunii dev. Bucla închisă este dezactivată

**AAPS** shows this message when you run a development (dev) version without engineering mode: in a dev version, closed loop only works in engineering mode.

The dev version is meant for testing, not for actual looping: read [Development branch](../AdvancedOptions/DevBranch.md) before going further.

To turn on engineering mode:

1. Place a file named `engineering_mode` in the `extra` subfolder of your AAPS directory (the folder you chose in the setup wizard, usually `AAPS/extra`). Orice fișier este potrivit atâta timp cât este corect denumit.
2. Restart **AAPS** so that it finds the file.

Sugestie: Faceți o copie a unui fișier de jurnal existent și redenumiți-l în "engineering_mode" (notă: fără extensia de fișier!).

### Obiective

#### Sunt blocat la un obiectiv și au nevoie de ajutor.

First read [Completing the Objectives](../SettingUpAaps/CompletingTheObjectives.md). If you are still stuck, screen capture the question and answers and post them on the Discord AAPS channel. Nu uitați să spuneți care sunt opțiunile pe care le alegeți (sau nu) și de ce. Veți primi sugestii și ajutor, dar va trebui să găsiți răspunsurile.

### Settings, passwords and backups

(FAQ-reset-master-password)=

#### How to reset the master password?

If you forgot your master password, you can reset it to your pump's serial number:

1. Create an empty file named `PasswordReset` (no file extension) in the `extra` subfolder of your AAPS directory (usually `AAPS/extra`).
2. Restart **AAPS**. Your pump must be connected: **AAPS** shows "Waiting for pump…" and needs to read the pump serial number within 30 seconds.
3. **AAPS** shows "Password set!": your master password is now your **pump serial number**. The `PasswordReset` file is deleted automatically.
4. Open **Settings** > **Protection** > **Master password** and set a new password.

If the pump is not reached in time, nothing changes: check the pump connection and try again.

This only resets the master password. A settings, application or bolus password or PIN is not reset, but you can always use the master password instead of them.

    {admonition} Old settings files
    :class: warning
    Settings files exported with the old master password can only be imported with that old password.

(FAQ-where-are-settings-files)=

#### Unde pot găsi fișierele de setări?

Settings files are stored in the `preferences` subfolder of the AAPS directory you chose in the [setup wizard](#SetupWizard-StoragePermission) (for example `/internal storage/AAPS/preferences`). If you set up a cloud folder (Google Drive), your exports can also be saved there. See [Creating and restoring back-ups](../Maintenance/ExportImportSettings.md).

AVERTISMENT: Asigurați-vă că nu vă pierdeți parola, deoarece fără ea nu veți putea importa un fișier de setări criptat!

(FAQ-import-settings-earlier-versions)=

#### How do I import settings from earlier versions of AAPS into AAPS v3 or v4 ?

You can only import settings (in AAPS v3 or v4) that were exported using AAPS v2.8x or later. If you were using a version of AAPS older than v2.8x or you need to use setting exports older than v2.8x, then you need to install AAPS v2.8 first. Import the older settings of v2.x in v2.8. After checking that all is OK, you can export settings from v2.8. Install the current AAPS version and import v2.8 settings in it.

If you use the same key to build the old and the new version, you won't even have to import settings. You can install the new version over the old one.

There were some new objectives added. You'll need to validate them.

(FAQ-delete-treatments)=

#### Where can I delete treatments?

Open the **menu** (☰) and select **Treatments history**. Long press an entry to select it, tap more entries if needed, then tap the **trash can** icon and confirm. See [Treatments history](#aaps-screens-treatments).

### Phone and connection problems

(FAQ-aaps-stops)=

#### AAPS se oprește zilnic cam la același timp.

* Google Play Protect may shut down **AAPS** every morning on some phones. If this happens, go to the Google Play options and disable **Google Play Protect**.
* Verificați de aplicațiile de "curățare" (spre exemplu CCleaner șamd) și dezinstalați-le.
* Turn off all battery optimizations for **AAPS** (see [battery savings](#FAQ-battery-savings) below).

(FAQ-battery-savings)=

#### Cum să configurați economisirea bateriei?

Your phone may suspend **AAPS** and related apps (CGM app, Bluetooth) when you are not using it. **AAPS** then cannot do its work, and Bluetooth connections to the sensor and pump (or RileyLink) may be shut down, causing "pump unreachable" alerts and communication errors.

Turn off battery optimization for **AAPS**, your CGM app (e.g. xDrip) and the Bluetooth system app. The way to do this depends on the phone's brand, model and Android version:

* see [Battery optimization](#generaltroubleshooting-android-related-issues) for Pixel, Samsung and Huawei phones,
* in **AAPS**, open the **menu** (☰) > **About** and tap **Don't kill my app?**, or visit [Don't kill my app](https://dontkillmyapp.com/) for other brands.

If you are not sure that battery savings cause your problem, you can temporarily turn off all battery savings on the phone: your battery will drain faster, but you will quickly see if the problem goes away.

(FAQ-pump-unreachable-alerts)=

#### Alerte ale pompei inaccesibile de mai multe ori pe zi sau noapte.

Your phone may be suspending **AAPS** or even Bluetooth, causing it to lose the connection to the pump or RileyLink (see [battery savings](#FAQ-battery-savings) above).

You can also change when the alert is raised: press the **Settings** (gear) icon on the top right of the main screen, then select **Local alerts** > **Pump unreachable threshold** (30 to 300 minutes). Check your pump's page: some recommend a value, e.g. 120 minutes for [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md).

(FAQ-link-unresponsive)=

#### Dispozitivul de tip RileyLink/pompa nu răspund (RL/OL/EmaLink…)

Cu unele telefoane, există deconectări Bluetooth de la dispozitivul de legătură (RL/OL/EmaL...).

Some also have non responsive Links (AAPS says that they are connected but the Links can't reach or command the pump.)

First try the **Reset RileyLink** button on the pump screen (see your pump's page: [Medtronic](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump), [Omnipod Eros](#OmnipodEros-reset-rileylink-config-notes)). If this does not help, the easiest way to get all these parts working together is:

1. Power off the Link.
2. Quit **AAPS** (**menu** (☰) > **Exit**).
3. Long press the **AAPS** icon, open the Android **App info**, tap **Force stop**, then **Storage** > **Clear cache** (do NOT clear storage/data!).
4. Rarely some phones may need a reboot here. Puteți încerca fără repornire.
5. Power on the Link.
6. Start **AAPS**.
7. On the pump screen, tap **Pair RileyLink** and select your Link again.

### Remote control

(FAQ-aapsclient)=

#### Configurarea și utilizarea aplicației la distanță AAPSClient

**AAPSClient** is a separate app that lets a caregiver follow and control **AAPS** remotely. Since **AAPS** v4, controlling **AAPS** from AAPSClient needs a one-time pairing between the two apps. See:

* [The AAPSClient app](#aapsclient-app): installing, first start and pairing,
* [Master ↔ Client control](#client-master-control): what can be controlled and how pairing works,
* [AAPSClient on a smartwatch](#remotecontrol-smartwatches).

(FAQ-hardened-mode)=

#### Treatments I enter on the Nightscout website are not applied

That is [hardened mode](#client-master-control-hardened-mode). While client control is on — always in Simple Mode — **AAPS** takes changes only from paired clients, not from the Nightscout website or other apps. Enter them on a paired **AAPSClient** instead.

### Alerts and warnings

#### I have a red warning badge (red triangle) / AAPS won't enable closed loop / Loop stays in LGS / I had a yellow triangle

The red warning badge on the BG source shortcut is a security feature in AAPS. See [BG warning sign](#aaps-screens-bg-warning-sign) for the full explanation.

A red warning badge on the BG source shortcut in the bottom bar (the red triangle of older versions) means that you have duplicate BGs and AAPS can't calculate precisely the deltas. A closed loop is switched to **Low Glucose Suspend** mode: it still reduces or suspends your basal to protect you against lows, but it gives no correction insulin. You need to delete one BG of each duplicated value in order to clear the warning. Tap the shortcut to open your [BG source screen](#aaps-screens-bg-source): the duplicate is highlighted in red. Long press one line you want to delete, check one of each lines that are doubled and tap the trash icon. You may need to reset the AAPS databases if there are too many double BGs. In this case, you'll also loose stats, IOB, COB, selected profile.

Once the warning is gone, AAPS does not go back to **Closed Loop** by itself. Press the loop icon on the main screen and select **Closed Loop** again.

Possible origin of the problem: xDrip and/or NS backfilling BGs.

The yellow triangle of older versions meant unstable delay between each BG reading (BGs not received every 5 min regularly, or missing BGs), which often happens with Libre or after a G6 transmitter change. **AAPS** 4 no longer shows it: it recalculates the values in the background and the loop works correctly.

### Omnipod DASH

(FAQ-move-dash-pod)=

#### Can I move an active DASH Pod to another phone?

The Pod state is included in the exported settings, so an active Pod can be moved to another phone by exporting the settings right before the move and importing them on the other phone. This is not officially supported and there is a risk of losing the Pod: if possible, try it when your Pod is about to expire.

Read these sections first:

* [Export and import settings](#omnipod-dash-export-import) on the Omnipod DASH page, and [Tubeless pumps](#ExportImportSettings-tubeless-pumps): on the new phone, tick **Also replace pump settings** and use a file exported during the Pod you are wearing now,
* [Discarding a pod](#omnipod-dash-discard-pod), to remove the Pod from the old phone afterwards. Keep the old phone in airplane mode until the Pod is discarded, so that both phones never talk to the Pod.