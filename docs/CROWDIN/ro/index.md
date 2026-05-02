# Bine ați venit la documentația AAPS

![imagine](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

 10 April 2026 : Version 3.4.2.2 is out. Check the [Release Notes](#latestrelease) to see what's new and follow the instructions in the [update manual](#UpdateToNewVersion) to update to a the version.

```

Android APS (**AAPS**) este un program cu sursă deschisă pentru persoanele care trăiesc cu diabet de tip insulino-dependent. Este un sistem de tip pancreas artificial (APS) care rulează pe telefoanele inteligente cu Android. **AAPS** folosește algoritmul software OpenAPS și are ca scop preluarea sarcinilor unui pancreas adevărat; menținerea nivelului de zahăr din sânge în limite sănătoase prin utilizarea de doze automate de insulină. Pentru a utiliza <0>AAPS</0> ai nevoie de <0>trei</0> dispozitive compatibile: <0>(1)</0> un telefon Android, <0>(2)</0> un senzor de monitorizare continuă a glicemiei (CGM), și<0>(3)</0>  de o pompă de insulină aprobată FDA/CE.</0></0> Opțional veți avea nevoie de servicii în cloud **(4)** pentru a controla de la distanță **AAPS**, a partaja datele și de a stoca într-un server de raportare, și de asemenea **(5)** de un ceas inteligent (smartwatch).

Această documentație explică modul de configurare și utilizare al **AAPS**. Puteți naviga prin documentația **AAPS** fie prin meniul din stânga (și funcția la îndemână "**Căutați în documentație**"), sau prin folosirea [indexului](#index-aaps-documentation-index) din partea de jos a acestei pagini.

## Prezentare generală a documentației AAPS

Secțiunea **2) Noțiuni de bază**, [Introducere](Getting-Started/Introduction.md) explică conceptul general a ceea ce un sistem de tip pancreas artificial (APS) ar trebui să facă. Acesta subliniază informațiile generale ale sistemului de tip buclă închisă, de ce **AAPS** a fost dezvoltat, compară **AAPS** cu alte sisteme, și adresează problematica de siguranță. Vă dă sugestii despre cum să vorbiți cu medicul curant despre **AAPS**, explică de ce trebuie să construiți aplicația **AAPS** singur/ă în loc să o descărcați pur și simplu, și oferă o privire de ansamblu despre conectivitatea tipică a sistemului **AAPS**. De asemenea abordează tematica accesibilității și discută despre cine ar putea să beneficieze de pe urma **AAPS**.

[Pregătirea pentru AAPS](./Getting-Started/PreparingForAaps.md) oferă mai multe detalii despre elementele ce țin de siguranță, și despre telefoanele, senzorii de monitorizare continuă a glicemiei (CGM) și pompele de insulină compatibile cu **AAPS**. Oferă o privire de ansamblu despre procesul prin care veți trece, și oferă o cronologie aproximativă pentru obținerea unei funcționalități complete **AAPS**. Această secțiune vă pregătește din punct de vedere tehnic să vă puneți la punct configurarea **AAPS** cât mai repede și eficient posibil. Subsecțiunea [Configurarea CGM](./Getting-Started/CompatiblesCgms.md) explică configurarea optimă de CGM și care sunt cele mai bune opțiuni de uniformizare ale valorilor de glicemie.

Acum că aveți o înțelegere solidă a procesului, puteți începe să faceți sistemul de buclă închisă **AAPS**.

Secțiunea **3) Configurarea AAPS** conține instrucțiuni pas cu pas pentru a face acest lucru. Acoperă alegerea și [configurarea serverului dumneavoastră de raportare](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout sau Tidepool) astfel încât să puteți analiza și partaja datele dumneavoastră, pregătirea pentru construirea aplicației AAPS, construirea efectivă a aplicației AAPS și transferarea aplicației AAPS pe telefonul dumneavoastră. Acoperă, de asemenea, configurarea aplicației **AAPS** prin folosirea asistentului de configurare, conectarea la aplicația CGM, și fie o pompă virtuală de insulină, fie una reală, precum și conectarea **AAPS** la serverul unde se vor strânge rapoartele. Sunteți apoi introdus treptat în utilizarea integrală a ceea ce **AAPS** are de oferit printr-un proces pas cu pas sigur și atent calibrat, conceput pentru a te asigura că dumneavoastră și copilul dumneavoastră vă familiarizați în întregime și sunteți confortabili în navigarea prin toate diferitele niveluri și configurații de meniu înainte de a trece la următoarea fază, denumită în mod obișnuit următorul "Obiectiv", până când aveți suficientă experiență pentru a începe să folosiți opțiunile mai avansate disponibile în cadrul aplicației. Aceste Obiective sunt special concepute astfel încât să deblocheze treptat mai multe posibilități din cadrul **AAPS** și să treacă de la Bucla Deschisă la Bucla Închisă.

Secțiunea **4) Viața zilnică cu AAPS** acoperă funcțiile cheie **AAPS** pentru a te ajuta să utilizezi (și personalizezi)  **AAPS**. Acest lucru include înțelegerea ecranelor, a carbohidraților-la-bord, sensibilității, schimbarea profilelor, ținte temporare, carbohidrați extinși (sau e-carbohidrați), automatizări și DynamicISF. Acoperă de asemenea subiecte des întâlnite cum ar fi gestionarea diferitelor tipuri de mese, modul de abordare al schimbărilor de canulă și de senzor, actualizările telefoanelor inteligente, schimbările cu ora de vară, [călătoritul cu AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) și sporturile. Întrebările obișnuite și răspunsurile sunt localizate în secțiunea de depanare.

Secțiunea **5) [Funcțiile AAPS de la distanță](./RemoteFeatures/RemoteControl.md)** evidențiază o putere mare a **AAPS**. Există o gamă largă de posibilități pentru trimiterea de la distanță a comenzilor către sau pur și simplu urmărirea datelor din **AAPS**. Acest lucru este la fel de util pentru îngrijitorii care doresc să folosească **AAPS** pentru minori, și pentru adulții cu diabet, care fie doresc să își monitorizeze mai ușor nivelurile de zahăr (și alte metrice) și pe alte dispozitive (pe ceas, în mașină _șamd_) decât pe telefon, sau care au persoane apropiate care doresc să-i monitorizeze. Acestă secțiune oferă, de asemenea, ghidaj pentru utilizarea Android Auto astfel încât să puteți vedea nivelurile glicemiei în autoturism.

Secțiunea **6) Ceasurile inteligente cu Wear OS** oferă informații și proceduri pentru utilizarea unui ceas inteligent cu Android Wear OS cu fețele **AAPS** dedicate de ceas sau cu unele personalizate, fie ca o telecomandă a telefonului sau ca un afișaj suplimentar.


Secțiunea **7) Mentenanța AAPS** acoperă felul în care se exportă și se face o copie de rezervă a setărilor (ceea ce este foarte important în cazul în care pierzi/spargi telefonul), oferă cele mai recente note de versiune și detalii despre cum să actualizezi **AAPS**. Te poți aștepta la o nouă versiune și 2-3 actualizări necesare pe an. Este necesar să faci aceste actualizări ca în cazul tuturor aplicațiilor software, deoarece erorile minore sunt eliminate, și apar îmbunătățiri ale **AAPS**. Există o secțiune dedicată depanării aspectelor ce țin de "actualizare" cu întrebările comune.

Secțiunea **8) [Obținerea Ajutorului](GettingHelp/WhereCanIGetHelp.md)** ar trebui să te ajute să te îndrepți către cele mai bune locuri pentru a găsi ajutor general cu **AAPS**. Acest lucru e foarte important pentru a putea intra în contact cu ceilalți cât mai repede posibil, pentru a clarifica întrebările și a rezolva capcanele obișnuite. O mulțime de persoane deja folosesc **AAPS** cu succes, dar cu toții avem la un moment dat o întrebare pe care nu o putem rezolva singuri. Datorită numărului mare de utilizatori, timpii de răspuns ai întrebărilor sunt de obicei foarte rapizi, de obicei doar câteva ore. Nu-ți face griji în legătură cu cerutul de ajutor, nu există nicio întrebare care să fie proastă! Încurajăm utilizatorii de orice/toate nivelurile de experiență să pună cât de multe întrebări sunt de părere că este necesar pentru a-i ajuta să pună în funcțiune sistemul în condiții de siguranță. Această secțiune include depanarea generală pentru **AAPS** și **AAPSClient** (o aplicație companion de urmărire) precum și explicarea felului în care se trimit datele **AAPS** (jurnalele) către dezvoltatori pentru investigații, dacă crezi că există o problemă tehnică cu **AAPS** ce necesită inspecție.

Secțiunea**9)** acoperă **Opțiuni avansate AAPS** cum ar fi cum avansarea de la utilizarea **AAPS** în mod buclă închisă hibrid (bolusarea pentru mese _șamd_) la bucla închisă complet (fără bolusare) și detaliază modurile de tip dezvoltare și inginerie. Majoritatea utilizatorilor se descurcă bine cu versiunea principală sau "Master" de **AAPS** fără să se mai uite la aceste opțiuni, această secțiune este pentru utilizatorii care au deja un control bun și caută să își îmbunătățească în continuare configurarea.

În secțiunea **10) [Cum să sprijinim AAPS](SupportingAaps/HowToEditTheDocs.md)** oferim informații astfel încât să poți sprijini acest proiect. Poți dona bani, echipamente sau expertiză. Poți sugera/face modificări chiar tu în documentație, ajuta cu [traducerea documentației](SupportingAaps/Translations) și să îți furnizezi datele în cadrul proiectului Open Humans.

Secțiunea **11) Resurse**, conține documentații arhivate sau adiționale, inclusiv o subsecțiune pentru [clinicieni](UsefulLinks/ClinicianGuideToAaps.md) care și-au exprimat interesul pentru sistemele de tip pancreas artificial, cu sursă deschisă, cum ar fi **AAPS**, sau pentru pacienții care doresc să împărtășească astfel de informații cu medicii lor curanți, acest subiect este adresat de asemenea și în introducere. Mai multe referințe și resurse pentru diabet și sisteme buclă închisă sunt conținute, de asemenea, în această secțiune. Este inclus și [Glosarul](./UsefulLinks/Glossary.md), o lista a acronimelor (sau prescurtărilor) folosite de-a lungul **AAPS**. Aici trebuie venit pentru a afla ce înseamnă termenii ISF sau TT, spre exemplu.


 ### Doriți să începeți cu **AAPS**? Citiți mai multe despre **AAPS** în [Introducere](Getting-Started/Introduction.md).

```{admonition} SAFETY NOTICE
:class: pericol
Siguranța **AAPS** se bazează pe caracteristicile de siguranță ale hardware-ului dumneavoastră (telefon, pompă, CGM). Utilizați numai o pompă de insulină și un senzor de monitorizare continuă a glicemiei (CGM) care sunt complet funcționale și aprobate de către FDA/CE. Nu utilizați echipamente, pompe de insulină și CGM, stricate, modificate sau auto-construite. Utilizați doar materialele consumabile originale (inseratoare, canule și rezervoare de insulină) aprobate de către producător pentru a fi utilizate cu pompa și cu senzorul dumneavoastră. Utilizarea unor materiale netestate sau modificate poate cauza inexactitate și erori în dozarea insulinei, ceea ce duce la riscuri semnificative pentru utilizator. 

Nu utilizați **AAPS** dacă iei inhibitori SGLT-2 (glifozine), deoarece aceștia scad concentrația de zahăr din sânge. Vă creșteți riscul de cetoacidoză diabetică (CAD) din cauza administrării reduse de insulină și de hipoglicemie din cauza scăderii nivelului de zahăr din sânge. 
```

```{admonition} Disclaimer
:class: notă

- Toate informațiile și codul descrise aici sunt destinate exclusiv scopurilor informative și educaționale. Folosiți [Nightscout](https://nightscout.github.io/) și **AAPS** pe propriul risc, și nu utilizați informațiile sau codul pentru a lua decizii medicale. În prezent, Nightscout nu face nicio încercare de respectare a confidențialității HIPAA. 
- Folosirea codului de pe github.com este fără garanție sau suport formal de orice fel. Vă rugăm să examinați fișierul LICENSE al acestui depozit pentru mai multe detalii.
- Toate numele produselor și firmelor, mărcile comerciale, mărcile de serviciu, mărcile înregistrate și mărcile de serviciu înregistrate sunt proprietatea titularilor lor. Utilizarea lor este în scop informativ și nu implică nicio afiliere sau aprobare din partea acestora.

**AAPS** nu are nicio asociere cu, și nu este aprobat de: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) sau [Medtronic](https://www.medtronic.com/).

```

(index-aaps-documentation)=

## Indexul documentației AAPS

```{toctree}
:caption: 1) Schimbă limba

Schimbă limba <./NavigateDoc/ChangeLanguage.md>
Modifică versiunea <./NavigateDoc/ChangeVersion.md>
```
```{toctree}
:caption: 2) Introducere în AAPS <./Getting-Started/Introduction.md>
Pregătire pentru AAPS <. Getting-Started/PreparingForAaps.md>
Privire de ansamblu asupra componentelor <./Getting-Started/ComponentOverview.md>
- Pompe compatibile <. Getting-Started/CompatiblePumps.md>
- Senzori de monitorizare continuă a glicemiei compatibili <./Getting-Started/CompatiblesCgms.md>
- Telefoane compatibile  <. Getting-Started/Phones.md>
- Ceasuri compatibile  <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 3) Setting up AAPS

Setting up the reporting server <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
Building AAPS <./SettingUpAaps/BuildingAaps.md>
- Browser Build <./SettingUpAaps/BrowserBuild.md>
- Android Studio Build <./SettingUpAaps/ComputerBuild.md>
- CLI Build <./SettingUpAaps/CLIBuild.md>
Transferring and Installing AAPS <./SettingUpAaps/TransferringAndInstallingAaps.md>
Setup Wizard <./SettingUpAaps/SetupWizard.md>
Your AAPS Profile <./SettingUpAaps/YourAapsProfile.md>
Change AAPS configuration <./SettingUpAaps/ChangeAapsConfiguration.md>
- Config Builder <./SettingUpAaps/ConfigBuilder.md>
- Preferences <./SettingUpAaps/Preferences.md>
Completing the objectives <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 4) Viața zilnică cu AAPS

Ecranele AAPS <./DailyLifeWithAaps/AapsScreens.md>
Funcționalități cheie AAPS <./DailyLifeWithAaps/KeyAapsFeatures.md>
Calcularea COB <./DailyLifeWithAaps/CobCalculation.md>
Detecția sensibilității <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
Schimbarea profilului & Profile Percentage <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Ținte-temporare <./DailyLifeWithAaps/TempTargets.md>
Carbohidrați extinși <./DailyLifeWithAaps/ExtendedCarbs.md>
Automatizări <./DailyLifeWithAaps/Automations.md>
ISF Dinamic <./DailyLifeWithAaps/DynamicISF.md>
AAPS pentru copii <./DailyLifeWithAaps/AapsForChildren.md>
Pompe și canule <./DailyLifeWithAaps/PumpsAndCannulas.md>
Călătorit pe alte meridiane & ora de vară <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 5) Funcționalități de la distanță ale AAPS

Monitorizarea de la distanță <./RemoteFeatures/Telecomandă. d>
Control de la distanță <./RemoteFeatures/RemoteControl.md>
Comenzi SMS <. RemoteFeatures/SMSCommands.md>
Doar urmărire <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>

```
```{toctree}
:caption: 6) Ceasuri inteligente Wear OS

AAPS pentru Wear OS <./WearOS/BuildingAapsWearOS.md>
Utilizează ceasul inteligent <. WearOS/WearOsSmartwatch.md>
Control de la distanță <./RemoteFeatures/RemoteControlWearOS. d>
Referințe pentru fețele de ceas personalizate <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Site de schimb pentru fețele personalizate <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 7) Maintenance of AAPS

Export/Import Settings <./Maintenance/ExportImportSettings.md>
Reviewing your data <./Maintenance/Reviewing.md>
AAPS Release Notes <./Maintenance/ReleaseNotes.md>
Documentation updates <./Maintenance/DocumentationUpdate.md>
Updating to a new version of AAPS <./Maintenance/UpdateToNewVersion.md>
- Browser Update <./Maintenance/UpdateBrowserBuild.md>
- Android Studio Update <./Maintenance/UpdateComputerBuild.md>

```

```{toctree}
:caption: 8) Getting Help

Where can I get help with AAPS <./GettingHelp/WhereCanIGetHelp.md>
General troubleshooting <./GettingHelp/GeneralTroubleshooting.md>
- Bluetooth troubleshooting <./GettingHelp/BluetoothTroubleshooting.md>
Profile Tuning Guide <./GettingHelp/ProfileTuning.md>
Troubleshooting Android Studio <./GettingHelp/TroubleshootingAndroidStudio.md>
Accessing logfiles <./GettingHelp/AccessingLogFiles.md>
```

```{toctree}
:caption: 9) Facilități avansate AAPS

Buclă complet închisă <./AdvancedOptions/FullClosedLoop.md>
Ramura dev <./AdvancedOptions/DevBranch.md>
Autotune <./AdvancedOptions/Autotune.md>

```
```{toctree}
:caption: 10) Cum să sprijiniți AAPS

Cum să ajutați <./SupportingAaps/HowCanIHelp. d>
Editând documentația <./SupportingAaps/HowToEditTheDocs.md>
Traducând aplicația și documentația <. SuportAaps/Translations.md>
Starea traducerilor <./SupportingAaps/StateOfTranslations.md>
Open Humans Uploader <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 11) Resurse

Glosar <./UsefulLinks/Glossary.md>
Secțiunea de întrebări frecvente <. UsefulLinks/FAQ.md>
Resurse generale pentru diabet și sisteme cu buclă închisă <./UsefulLinks/BackgroundReading. d>
Contul Google Dedicat pentru AAPS (opțional)<./UsefulLinks/DedicatedGoogleAccountForAaps.md>
Pentru clinicieni (învechit) <./UsefulLinks/ClinicianGuideToAaps.md>
```
