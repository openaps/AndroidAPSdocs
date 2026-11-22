# Dobro došli u dokumentaciju AAPS-a

![slika](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

31. listopada 2026.: izašla je verzija 4.0.0. Pogledajte [Bilješke o izdanju](#latestrelease) da vidite što je novo i za ažuriranje slijedite upute u [uputama za ažuriranje](./Maintenance/UpdateToNewVersion.md).

```

Android APS (**AAPS**) je aplikacija otvorenog koda za osobe s dijabetesom ovisnim o inzulinu. To je sustav umjetne gušterače (APS) koji radi na pametnim telefonima s Androidom. **AAPS** koristi algoritam OpenAPS i nastoji raditi ono što radi prava gušterača: držati razinu šećera u krvi u zdravim granicama automatskim doziranjem inzulina. Za korištenje **AAPS**-a trebate **tri** kompatibilna uređaja: **(1)** telefon s Androidom, **(2)** uređaj za kontinuirano mjerenje glukoze (CGM) i **(3)** inzulinsku pumpu s odobrenjem FDA/CE. Možete dodati i **(4)** usluge u oblaku za daljinsko upravljanje **AAPS**-om, dijeljenje podataka i njihovo spremanje na poslužitelj za izvješća te **(5)** pametni sat.

Ova dokumentacija objašnjava kako postaviti i koristiti **AAPS**. Kroz dokumentaciju **AAPS**-a možete se kretati putem izbornika s lijeve strane (i korisne funkcije **Search docs** za pretraživanje) ili putem [sadržaja](#index-aaps-documentation-index) na dnu ove stranice.

## Pregled dokumentacije AAPS-a („dokumentacija“)

U odjeljku **1) Prvi koraci**, [Uvod u APS i AAPS](Getting-Started/Introduction.md) objašnjava osnovnu ideju i svrhu sustava umjetne gušterače (APS). Opisuje osnove korištenja petlje općenito, zašto je **AAPS** razvijen, uspoređuje **AAPS** s drugim sustavima i govori o sigurnosti. Daje savjete kako razgovarati s vašim liječničkim timom o **AAPS**-u, objašnjava zašto aplikaciju **AAPS** morate izraditi sami umjesto da je samo preuzmete i daje pregled uobičajenog povezivanja uređaja u sustavu **AAPS**. Govori i o pristupačnosti te o tome kome **AAPS** vjerojatno može pomoći.

[Priprema za početak s AAPS-om](./Getting-Started/PreparingForAaps.md) daje više pojedinosti o sigurnosti te o telefonima, CGM-ovima (uređajima za kontinuirano mjerenje glukoze) i inzulinskim pumpama koji su kompatibilni s **AAPS**-om. Daje pregled postupka kroz koji ćete proći i približan vremenski plan dok ne budete mogli koristiti sve funkcije **AAPS**-a. Ovaj vas odjeljak tehnički priprema da svoj sustav **AAPS** sastavite što brže i učinkovitije. Pododjeljak [Kompatibilni CGM-ovi](./Getting-Started/CompatiblesCgms.md) objašnjava kako optimizirati postavke CGM-a i koje su opcije zaglađivanja najbolje.

Sada kada dobro razumijete postupak, možete početi sastavljati svoju petlju **AAPS**.

Odjeljak **2) Izrada aplikacije** objašnjava zašto aplikaciju **AAPS** morate izraditi sami umjesto da je samo preuzmete, vodi vas korak po korak kroz [izradu aplikacije](./SettingUpAaps/BuildingAaps.md) (u pregledniku, s Android Studiom ili iz naredbenog retka), a zatim kroz prijenos i instalaciju na vaš telefon. Počinje neobaveznim korakom: postavljanjem [zasebnog Google računa](./UsefulLinks/DedicatedGoogleAccountForAaps.md) za vaše izrade i sigurnosne kopije. Objašnjava i [provjeru razvojnih programera za Android](#android-developer-verification), promjenu koju Google uvodi od rujna 2026. i koja utječe na instalaciju aplikacija koje ste sami izradili.

Odjeljak **3) Postavljanje poslužitelja za izvješća** opisuje odabir i [postavljanje vašeg poslužitelja za izvješća](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout ili Tidepool), kako biste mogli pregledavati i dijeliti svoje podatke.

Odjeljak **4) [Konfiguracija AAPS-a](./SettingUpAaps/SetupWizard.md)** opisuje postavljanje aplikacije **AAPS** pomoću čarobnjaka za postavljanje, povezivanje s vašom CGM aplikacijom i sa stvarnom ili virtualnom inzulinskom pumpom te povezivanje **AAPS**-a s vašim poslužiteljem za izvješća. Zatim upoznajete sve što **AAPS** može, kroz siguran postupak korak po korak, pažljivo prilagođenog tempa. Tako ste sigurni da vi (ili vaše dijete) dobro poznajete sve razine i postavke izbornika i da se u njima osjećate sigurno prije nego što prijeđete na sljedeću fazu, koja se obično naziva sljedeći „Cilj“. Tako napredujete sve dok nemate dovoljno iskustva da počnete koristiti naprednije opcije u aplikaciji. Ovi su Ciljevi posebno osmišljeni tako da postupno otključavaju više mogućnosti **AAPS**-a i omogućuju prijelaz s otvorene petlje na zatvorenu petlju.

Odjeljak **5) [Svakodnevni život s AAPS-om](./DailyLifeWithAaps/AapsScreens.md)** opisuje glavne značajke **AAPS**-a, kako biste **AAPS** mogli koristiti (i prilagoditi). To uključuje razumijevanje zaslona, aktivnih ugljikohidrata, osjetljivosti, dinamičkog ISF-a, zamjene profila, privremenih ciljeva, produženih ugljikohidrata (eUH), automatizacije i [pregleda vaših podataka](./Maintenance/Reviewing.md) u pregledniku povijesti i statistici. Opisuje i česte teme, na primjer kako postupati s različitim vrstama obroka, kako se nositi s promjenom kanile i senzora, ažuriranjima pametnog telefona, prelaskom na ljetno ili zimsko vrijeme, [putovanjem s AAPS-om](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) i sportom. Česta pitanja i odgovori nalaze se u odjeljku za rješavanje problema.

Odjeljak **6) [Daljinske značajke AAPS-a](./RemoteFeatures/RemoteControl.md)** ističe jednu pravu prednost **AAPS**-a. Postoji mnogo mogućnosti za daljinsko slanje naredbi **AAPS**-u ili samo za praćenje njegovih podataka. To je jednako korisno za njegovatelje koji koriste **AAPS** za maloljetnike i za odrasle osobe s dijabetesom koje žele pratiti svoj šećer (i druge vrijednosti) lakše nego samo na telefonu (na satu, u automobilu _itd._) ili žele da njihove bliske osobe također prate podatke. Ovaj odjeljak također daje upute za korištenje Android Auta, tako da razinu glukoze možete vidjeti u automobilu.

Odjeljak **7) [Pametni satovi s Wear OS-om](./WearOS/BuildingAapsWearOS.md)** daje informacije i postupke za korištenje pametnog sata s Androidom **Wear OS** s posebnim Watchfaceovima za **AAPS** ili s prilagođenim Watchfaceovima, bilo za daljinsko upravljanje telefonom ili samo kao zaslon za prikaz.


Odjeljak **8) [Održavanje AAPS-a](./Maintenance/ExportImportSettings.md)** opisuje kako izvesti i sigurnosno kopirati postavke (što je vrlo važno ako izgubite ili razbijete telefon), donosi bilješke o najnovijoj verziji, objašnjava kako ažurirati **AAPS** i što se događa kada verzija dođe do kraja podrške. Možete očekivati jednu novu verziju i 2–3 obavezna ažuriranja godišnje. Ova ažuriranja morate napraviti kao i kod svakog softvera, jer se ispravljaju manje greške i **AAPS** se poboljšava. Postoji poseban odjeljak za rješavanje problema s „ažuriranjem“ s čestim pitanjima.

Odjeljak **9) [Pomoć i rješavanje problema](GettingHelp/WhereCanIGetHelp.md)** trebao bi vas uputiti na najbolja mjesta gdje možete dobiti opću pomoć za **AAPS**. To je jedno mjesto na koje idete kada nešto ne radi: stranica [Rješavanje problema](GettingHelp/GeneralTroubleshooting.md) po temama skuplja rješenja najčešćih problema, a [Česta pitanja](UsefulLinks/FAQ.md) odgovaraju na pitanja koja se često postavljaju. To je vrlo važno kako biste što brže mogli stupiti u kontakt s drugima, razjasniti pitanja i riješiti uobičajene probleme. Mnogo ljudi već uspješno koristi **AAPS**, ali svatko u nekom trenutku ima pitanje koje ne može riješiti sam. Budući da ima mnogo korisnika, odgovori na pitanja obično stižu vrlo brzo, najčešće za samo nekoliko sati. Ne bojte se tražiti pomoć, ne postoji glupo pitanje! Potičemo korisnike sa svim razinama iskustva da postave onoliko pitanja koliko im je potrebno da bi sustav pokrenuli i koristili sigurno. Ovaj odjeljak sadrži opće rješavanje problema za **AAPS** i **AAPSClient** (prateću aplikaciju za praćenje) te objašnjava kako poslati svoje podatke iz **AAPS**-a (datoteke dnevnika) razvojnim programerima na provjeru, ako mislite da tehnički problem s **AAPS**-om treba pogledati.

Odjeljak **10)** opisuje **[Napredne opcije AAPS-a](./AdvancedOptions/FullClosedLoop.md)**, na primjer kako s korištenja **AAPS**-a kao hibridne zatvorene petlje (bolus za obroke _itd._) prijeći na potpuno zatvorenu petlju (bez bolusa), kako [podesiti svoj profil](./GettingHelp/ProfileTuning.md) i koristiti Autotune te opisuje razvojni i inženjerski način rada. Većini korisnika sasvim je dovoljna glavna verzija **AAPS**-a („Master“) bez ovih opcija. Ovaj je odjeljak za korisnike koji već imaju dobru regulaciju i žele dodatno poboljšati svoj sustav.

U odjeljku **11) [Kako podržati AAPS](SupportingAaps/HowCanIHelp.md)** dajemo informacije o tome kako možete podržati ovaj projekt. Možete donirati novac, opremu ili znanje. Možete sami predložiti ili napraviti izmjene u dokumentaciji, pomoći s [prijevodom dokumentacije](SupportingAaps/Translations.md) i dati svoje podatke putem projekta Open Humans.

Odjeljak **12) Izvori** sadrži arhiviranu ili dodatnu dokumentaciju, uključujući pododjeljak za [zdravstvene djelatnike](UsefulLinks/ClinicianGuideToAaps.md) koje zanima tehnologija umjetne gušterače otvorenog koda kao što je **AAPS**, ili za pacijente koji te informacije žele podijeliti sa svojim liječnicima. Ova je tema obrađena i u uvodu. U ovom se odjeljku nalaze i drugi izvori o dijabetesu i korištenju petlje. Uključuje [Pojmovnik](./UsefulLinks/Glossary.md), popis kratica (ili kratkih naziva) koje se koriste u **AAPS**-u. Ovdje, na primjer, možete saznati što znače pojmovi ISF ili TT.


 ### Želite li početi koristiti **AAPS**? Više o **AAPS**-u pročitajte u [Uvodu u APS i AAPS](Getting-Started/Introduction.md).

```{admonition} SAFETY NOTICE
:class: danger
Sigurnost **AAPS**-a ovisi o sigurnosnim funkcijama vašeg hardvera (telefon, pumpa, CGM). Koristite samo potpuno ispravnu inzulinsku pumpu i CGM s odobrenjem FDA/CE. Ne koristite pokvarene, preinačene ili samostalno izrađene inzulinske pumpe ili CGM prijemnike. Koristite samo originalni potrošni materijal (aplikatore, kanile i spremnike za inzulin) koji je proizvođač odobrio za vašu pumpu i CGM. Korištenje neispitanog ili preinačenog potrošnog materijala može uzrokovati netočnosti i pogreške u doziranju inzulina, što je ozbiljna opasnost za korisnika. 

Ne koristite **AAPS** ako uzimate inhibitore SGLT-2 (glifozine), jer oni snižavaju razinu šećera u krvi. Povećavate opasnost od dijabetičke ketoacidoze (DKA) zbog smanjene isporuke inzulina i od hipoglikemije zbog snižene razine šećera u krvi. 
```

```{admonition} Disclaimer
:class: note

- Sve ovdje opisane informacije i kod služe samo za informiranje i obrazovanje. [Nightscout](https://nightscout.github.io/) i **AAPS** koristite na vlastitu odgovornost i ne koristite ove informacije ili kod za donošenje medicinskih odluka. Nightscout trenutačno ne pokušava ispuniti zahtjeve privatnosti HIPAA. 
- Kod s github.com koristi se bez ikakvog jamstva ili službene podrške. Za pojedinosti pogledajte LICENSE ovog repozitorija.
- Svi nazivi proizvoda i tvrtki, robni žigovi, žigovi usluga, registrirani robni žigovi i registrirani žigovi usluga vlasništvo su njihovih vlasnika. Koriste se samo kao informacija i ne znače da smo s njima povezani niti da nas oni podržavaju.

**AAPS** nije povezan s ovim tvrtkama niti ga one podržavaju: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/), [Medtronic](https://www.medtronic.com/), [Diaconn](https://www.diaconn.com/en/index.html), [EOFlow](http://www.eoflow.com/), [MicroTech Medical (Equil)](https://www.microtechmd.com/), [Medtrum](https://www.medtrum.com/), [Senseonics (Eversense)](https://www.senseonics.com/), [i-SENS (CareSens)](https://i-sens.com/), [POCTech](https://poctechcorp.com/en/), [Ottai](https://ottai.com/) ili [Syai](https://www.syai.com/).

```

(index-aaps-documentation-index)=

## Sadržaj dokumentacije AAPS-a

```{toctree}
:caption: Korištenje ove dokumentacije
:titlesonly:

Promjena jezika i verzije <./NavigateDoc/ChangeLanguageVersion.md>
Pretraživanje dokumentacije <./NavigateDoc/SearchDoc.md>
Ažuriranja i promjene dokumentacije <./Maintenance/DocumentationUpdate.md>
```
```{toctree}
:caption: 1) Prvi koraci

Uvod u APS i AAPS <./Getting-Started/Introduction.md>
Priprema za početak s AAPS-om <./Getting-Started/PreparingForAaps.md>
Pregled komponenti <./Getting-Started/ComponentOverview.md>
- Kompatibilne pumpe <./Getting-Started/CompatiblePumps.md>
- Kompatibilni CGM-ovi <./Getting-Started/CompatiblesCgms.md>
- Telefoni  <./Getting-Started/Phones.md>
- Pametni satovi i AAPS  <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 2) Izrada aplikacije

Zaseban Google račun za AAPS (neobavezno) <./UsefulLinks/DedicatedGoogleAccountForAaps.md>
Izrada AAPS-a <./SettingUpAaps/BuildingAaps.md>
- Izrada u pregledniku <./SettingUpAaps/BrowserBuild.md>
- Izrada s Android Studiom <./SettingUpAaps/ComputerBuild.md>
- Upute za izradu iz naredbenog retka <./SettingUpAaps/CLIBuild.md>
Prijenos i instalacija AAPS-a na vaš pametni telefon <./SettingUpAaps/TransferringAndInstallingAaps.md>
```
```{toctree}
:caption: 3) Postavljanje poslužitelja za izvješća

Postavljanje poslužitelja za izvješća <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
```
```{toctree}
:caption: 4) Konfiguracija AAPS-a

Čarobnjak za postavljanje AAPS-a <./SettingUpAaps/SetupWizard.md>
Vaš AAPS profil <./SettingUpAaps/YourAapsProfile.md>
Promjene konfiguracije AAPS-a <./SettingUpAaps/ChangeAapsConfiguration.md>
- Konfiguracija (Config Builder) <./SettingUpAaps/ConfigBuilder.md>
- Postavke <./SettingUpAaps/Preferences.md>
Ispunjavanje ciljeva <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 5) Svakodnevni život s AAPS-om

Zasloni AAPS-a <./DailyLifeWithAaps/AapsScreens.md>
Glavne značajke AAPS-a <./DailyLifeWithAaps/KeyAapsFeatures.md>
Izračun aktivnih ugljikohidrata (COB) <./DailyLifeWithAaps/CobCalculation.md>
Detekcija osjetljivosti <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
Dinamički ISF (DynISF) <./DailyLifeWithAaps/DynamicISF.md>
Zamjena profila i postotak profila <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Privremeni ciljevi <./DailyLifeWithAaps/TempTargets.md>
Produženi ugljikohidrati / „e-ugljikohidrati“ <./DailyLifeWithAaps/ExtendedCarbs.md>
Brzi kalkulatori (bolusi jednim dodirom) <./DailyLifeWithAaps/QuickWizards.md>
Scene (predlošci za situacije) <./DailyLifeWithAaps/Scenes.md>
Automatizacija <./DailyLifeWithAaps/Automations.md>
Brzo pokretanje (alatna traka brzih radnji u Pregledu) <./DailyLifeWithAaps/QuickLaunch.md>
Widgeti na početnom zaslonu <./DailyLifeWithAaps/Widgets.md>
Hrana (vaša baza podataka o hrani) <./DailyLifeWithAaps/Food.md>
Globalno pretraživanje <./DailyLifeWithAaps/GlobalSearch.md>
Pregled vaših podataka <./Maintenance/Reviewing.md>
AAPS za djecu <./DailyLifeWithAaps/AapsForChildren.md>
Pumpe i kanile <./DailyLifeWithAaps/PumpsAndCannulas.md>
Promjena vremenske zone i ljetno računanje vremena <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) Daljinske značajke AAPS-a

Daljinski nadzor <./RemoteFeatures/RemoteMonitoring.md>
Praćenje AAPS-a (bez interakcije sa sustavom AAPS) <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>
Daljinsko upravljanje AAPS-om <./RemoteFeatures/RemoteControl.md>
Aplikacija AAPSClient <./RemoteFeatures/AapsClient.md>
Upravljanje glavni uređaj ↔ klijent (potpisano daljinsko upravljanje) <./RemoteFeatures/ClientMasterControl.md>
SMS naredbe <./RemoteFeatures/SMSCommands.md>

```
```{toctree}
:caption: 7) Pametni satovi s Wear OS-om

Izrada aplikacije AAPS za Wear OS <./WearOS/BuildingAapsWearOS.md>
Postavljanje AAPS-a na vaš Wear OS sat <./WearOS/WearOsSmartwatch.md>
Upravljanje AAPS-om putem pametnog sata s Wear OS-om <./RemoteFeatures/RemoteControlWearOS.md>
Referentni dokument za prilagođene Watchfaceove <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Stranica za razmjenu prilagođenih Watchfaceova <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 8) Održavanje AAPS-a

Izrada i vraćanje sigurnosnih kopija <./Maintenance/ExportImportSettings.md>
Bilješke o izdanju <./Maintenance/ReleaseNotes.md>
Što se promijenilo u AAPS-u v4 <./Maintenance/V4Changes.md>
Ažuriranje na novu verziju ili granu <./Maintenance/UpdateToNewVersion.md>
- Ažuriranje putem preglednika (fork, AAPS-CI) <./Maintenance/UpdateBrowserBuild.md>
- Ažuriranje s Android Studiom <./Maintenance/UpdateComputerBuild.md>
Kraj podrške <./Maintenance/EndOfLife.md>

```

```{toctree}
:caption: 9) Pomoć i rješavanje problema

Gdje mogu dobiti pomoć? <./GettingHelp/WhereCanIGetHelp.md>
Rješavanje problema (počnite ovdje) <./GettingHelp/GeneralTroubleshooting.md>
- Problemi s Bluetoothom <./GettingHelp/BluetoothTroubleshooting.md>
- Rješavanje problema s NSClientom <./GettingHelp/TroubleshootingNsClient.md>
- Rješavanje problema s Android Studiom <./GettingHelp/TroubleshootingAndroidStudio.md>
- Izrada u pregledniku: rješavanje problema <./GettingHelp/BrowserBuildTroubleshooting.md>
- Ponovna instalacija AAPS-a s novim spremištem ključeva <./GettingHelp/ReinstallAaps.md>
- Pristup datotekama dnevnika <./GettingHelp/AccessingLogFiles.md>
Česta pitanja korisnika petlje <./UsefulLinks/FAQ.md>
```

```{toctree}
:caption: 10) Napredne opcije AAPS-a

Potpuno zatvorena petlja <./AdvancedOptions/FullClosedLoop.md>
Podešavanje profila u AAPS-u <./GettingHelp/ProfileTuning.md>
Kako koristiti dodatak Autotune <./AdvancedOptions/Autotune.md>
Koncentracija inzulina <./AdvancedOptions/InsulinConcentration.md>
Razvojna grana <./AdvancedOptions/DevBranch.md>
Izrada u pregledniku: cherry-pick commita <./AdvancedOptions/BrowserBuildCherryPick.md>

```
```{toctree}
:caption: 11) Kako podržati AAPS

Kako pomoći AAPS-u <./SupportingAaps/HowCanIHelp.md>
Kako uređivati dokumentaciju <./SupportingAaps/HowToEditTheDocs.md>
Kako prevesti tekstove aplikacije AAPS ili dokumentacije <./SupportingAaps/Translations.md>
Stanje prijevoda aplikacije i dokumentacije <./SupportingAaps/StateOfTranslations.md>
Open Humans Uploader <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 12) Izvori

Pojmovnik <./UsefulLinks/Glossary.md>
Korisni izvori za čitanje prije početka <./UsefulLinks/BackgroundReading.md>
Za zdravstvene djelatnike – Opći uvod i vodič za AAPS <./UsefulLinks/ClinicianGuideToAaps.md>
```
