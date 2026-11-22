- - -
tocdepth: 1
- - -

# Ažuriranja i promjene dokumentacije

## Listopad 2026.

- [Izrada u pregledniku s AAPS Builderom](#aaps-builder): workflow za izradu, verzija 8, sada ga održavaju razvojni programeri AAPS-a u repozitoriju [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder). Postavljanje je kraće za jedan korak: [korak 1](#aaps-builder-step1) [stranice postavki](#aaps-builder-setup) izrađuje vaš privatni repozitorij kao kopiju tog repozitorija, u kojoj je workflow za izradu već uključen, pa više ne morate dodavati workflow. Od sada se koraci izrade ažuriraju umjesto vas: vaš repozitorij pri svakoj izradi pokreće verziju koju su objavili razvojni programeri AAPS-a, bez ikakve promjene s vaše strane (i dalje bez automatske izrade). Sama izrada se ne mijenja, a vaš postojeći repozitorij i dalje radi. Da biste dobivali ova automatska ažuriranja, jednom zamijenite svoju datoteku `.github/workflows/build.yml` kako je objašnjeno u [Ažuriranje AAPS-a](#aaps-builder-updates). Vaša tajna `KEYSTORE_SET` ostaje kakva jest. Neobavezni [korak za Google Drive](#aaps-builder-google-drive) sada radi izravno na stranici postavki, na telefonu ili računalu: datoteka za pripremu više nije potrebna @psonnera
- [Pametni satovi i AAPS](#watches-external-companion-apps): odjeljak **Samsung Tizen** postaje **Vanjske prateće aplikacije** i navodi aplikacije koje čitaju broadcast **AAPS-a** (WatchDrip+, GlucoDataHandler, G-Watch). [WatchDrip+](#watches-xiaomi-amazfit) 0.5 i novije verzije povezuju se izravno s **AAPS-om** bez xDripa+: dodani su koraci postavljanja, sažeti i na stranicama [Konfiguracija](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md) i [Daljinski nadzor](../RemoteFeatures/RemoteMonitoring.md). Satovi Bluejay: GTS se više ne proizvodi, ažuriran je trenutni model @psonnera
- [Izrada u pregledniku s AAPS Builderom](#aaps-builder): workflow za izradu, verzija 6. Koraci izrade sada koriste točne, provjerene verzije GitHubovih alata i računala za izradu. Izrada također jasno objašnjava kada je u tajnu `KEYSTORE_SET` zalijepljen pogrešan tekst. [Stranica postavki](#aaps-builder-setup) sada je dio dokumentacije i prevedena je. Provjerava vaše GitHub korisničko ime i ima jasniju pomoć za tajnu, „Page not found“ (404) i aplikaciju GitHub. Ako u vašoj datoteci `.github/workflows/build.yml` piše verzija 5 ili starija, zamijenite je kako je objašnjeno u [Ažuriranje AAPS-a](#aaps-builder-updates) @psonnera
- [Web instalacijski program za AAPS](#web-installer): sada je stranica dokumentacije, prevedena kao i ostale. Stara adresa i dalje radi @psonnera
- [Izrada u pregledniku s AAPS Builderom](#aaps-builder): workflow za izradu, verzija 3, dodaje varijantu `aapsclient3Release` (**AAPSClient3**, AAPS 4.0 i noviji). Da biste je izradili, zamijenite svoju datoteku `.github/workflows/build.yml` kako je objašnjeno u [Ažuriranje AAPS-a](#aaps-builder-updates) @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md): uklonjena je zakrpana aplikacija Dexcom G7 (DiaKEM) jer više ne radi za nove instalacije @psonnera
- [Izrada u pregledniku s AAPS Builderom](#aaps-builder): workflow za izradu, verzija 2. Automatske tjedne izrade su uklonjene (nema rasporeda, nema varijabli `AUTO_BUILD` / `AUTO_VARIANT`, nema oznaka `built/…`): svaku izradu pokrećete vi, s verzijom i varijantom koju odaberete, a workflow ima samo pravo čitanja vašeg repozitorija. Ako u vašoj datoteci `.github/workflows/build.yml` piše verzija 1, zamijenite je kako je objašnjeno u [Ažuriranje AAPS-a](#aaps-builder-updates). Dodane su snimke zaslona za svaki korak @psonnera
- [Izrada u pregledniku s AAPS Builderom](#aaps-builder): workflow za izradu sada je dio ove dokumentacije. Nema više repozitorija predloška: izradite prazan privatni repozitorij i dodajte workflow sa stranice postavki (novi korak 2). Workflow više ne provjerava ažuriranja u vanjskom repozitoriju. Ako ste svoj repozitorij izradili iz ranijeg predloška, zamijenite `.github/workflows/build.yml` workflowom sa stranice postavki kako je objašnjeno u [Ažuriranje AAPS-a](#aaps-builder-updates) @psonnera
- Nova stranica [Izrada u pregledniku s AAPS Builderom](#aaps-builder): izradite AAPS s Android telefona pomoću stranice postavki na ovoj web-stranici, s automatskim tjednim izradama i bez datoteke za pripremu. Zamjenjuje upute za Android kod izrade u pregledniku (stranice za File Manager Plus su uklonjene). AAPS Builder izradio je @dio99, dokumentaciju @psonnera

## Kolovoz 2026.

- [Prijenos i instalacija AAPS-a na vaš pametni telefon](../SettingUpAaps/TransferringAndInstallingAaps.md): stranica *Android developer verification* (provjera Android razvojnih programera) spojena je s vodičem za instalaciju, dodan je [web instalacijski program](#android-developer-verification-web) (instalacija APK-a izravno iz preglednika, bez provjere) i bežični ADB @psonnera

## Srpanj 2026.

- [Uvod u APS i AAPS](../Getting-Started/Introduction.md): provjera točnosti odjeljka o APS-u. Ispravljeni su naslov i poveznica citata iz časopisa Frontiers, citat je predstavljen kao pozadina, a ne kao trenutni vodič kroz tržište. Ažurirane su izjave o dvohormonskim sustavima i potpuno zatvorenoj petlji, pojašnjeno je da kontroler nije uvijek aplikacija na telefonu, uklonjeni su komercijalni nazivi marki i brojevi korisnika bez izvora, a OS-AID je ispravljen u *Open-Source Automated Insulin Delivery* (automatizirana isporuka inzulina otvorenog koda) @psonnera
- [Pojmovnik](../UsefulLinks/Glossary.md): dodani su pojmovi **AID**, **FCL**, **HCL** i **OS-AID**, s poveznicama iz pojmova **APS** i **Closed Loop** @psonnera
- Nova stranica [Provjera Android razvojnih programera](#android-developer-verification): utjecaj Googleova budućeg zahtjeva za provjeru na instalaciju aplikacija koje ste sami izradili, s besplatnim načinima instalacije (ADB, napredni postupak, račun za ograničenu distribuciju) @psonnera

## Lipanj 2026.

- [Izrada u pregledniku](#browser-build): preuređena u tijek na više stranica koji počinje odlukom (Fork → spremište ključeva Opcija 1/Opcija 2 s posebnom stranicom za svaki uređaj → Google Drive → Izrada → Rješavanje problema); uklonjene su ugniježđene kartice, a instalacija aplikacije File Manager Plus sada je istaknuti korak @psonnera
- [Uvod u APS i AAPS](../Getting-Started/Introduction.md): izraz *DIY* zamijenjen je izrazom *OS-AID* (Open-Source Automated Insulin Delivery – automatizirana isporuka inzulina otvorenog koda), dodani su Trio i Stelo, ažurirana je tablica kompatibilnosti pumpi i CGM-ova @tmhastings

## Ožujak 2026.

- [Dodana opcija izrade iz naredbenog retka (CLI)](../SettingUpAaps/CLIBuild.md) @je-l
- *Computer Build* preimenovan je u *Android Studio Build*. Nazivi datoteka zadržani su za URL-ove.

## Siječanj 2025.

- Izdanje [3.4](#version3400) i skupno ažuriranje dokumentacije (čarobnjak, verzije za izradu na računalu, Konfiguracija)
- Ažuriranje popisa CGM-ova. Uklonjeni su Dexcom G5, Tomato i Glimp.
- [Sučelje za rotaciju mjesta primjene](#Aapsscreens-site-rotation)
- [Način rada](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## Prosinac 2025.

- [Podešavanje profila u AAPS-u](../GettingHelp/ProfileTuning.md) od @robrub

## Listopad 2025.

- DiaKEM: nove instalacije ne rade nakon nadogradnje poslužitelja @psonnera
- Uklonjena je zakrpana aplikacija za Libre 2 (zastarjela): ne radi s novim senzorima @psonnera
- Preuređena stranica za Omnipod DASH @XiTatiON

## Kolovoz 2025.

- Ažurirane verzije i preduvjeti za Android Studio
- Dodano izdanje [3.3.2.1](#version3321), uklonjeni spomeni Androida 16 (popravljeno)
- Dodana je [Izrada u pregledniku](#browser-build) @Angus

## Svibanj 2025.

- Dodana je [stranica za nadogradnju na 3.2.0.4](#update-aaps-3204) @psonnera

## Siječanj 2025.

- Brzi kalkulator: [funkcija dugog pritiska](#Preferences-quick-wizard) @emilise
- Stranica [Dinamički ISF (DynISF)](../DailyLifeWithAaps/DynamicISF.md) napisana je iznova @emilise

## Prosinac 2024.

- Dokumentacija [verzije 3.3](#version3300) @emilise

## Studeni 2024.

- Ažuriranje stranice [Vaš AAPS profil](../SettingUpAaps/YourAapsProfile.md) @emilise
- Preuređen je sadržaj [Pametni satovi s Wear OS-om](../WearOS/BuildingAapsWearOS.md) @psonnera

## Listopad 2024.

- Ažuriranje nekoliko stranica:
  - [Koliko će to trajati](#preparing-how-long-will-it-take), [Pregled komponenti](../Getting-Started/ComponentOverview.md), [Ispunjavanje ciljeva](../SettingUpAaps/CompletingTheObjectives.md), [Vaš AAPS profil](../SettingUpAaps/YourAapsProfile.md), [Konfiguracija (Config Builder)](../SettingUpAaps/ConfigBuilder.md) i [Postavke](../SettingUpAaps/Preferences.md), [Zasloni AAPS-a](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [Izračun aktivnih ugljikohidrata (COB)](../DailyLifeWithAaps/CobCalculation.md), [Dinamički ISF (DynISF)](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Upute za izradu s Android Studiom Ladybug](../SettingUpAaps/BuildingAaps.md) @tanja
- Tehnički rad (postupak objave dokumentacije, organizacija datoteka...) @psonnera i @emilise

***

Nedostaje povijest od ožujka 2022. do rujna 2024.

Pri preradi za verziju 3.2 uklonjene su neke zastarjele informacije. Možete ih pronaći u prethodnoj verziji dokumentacije:

Dokumentacija za AAPS 3.1 dostupna je [ovdje](https://androidaps.readthedocs.io/en/3.1/index.html).

***

```{dropdown} Older updates (2019 to 2022)
**Veljača 2022.**

- [Znak upozorenja za kvalitetu GUK-a](#aaps-screens-bg-warning-sign) @tanja
- [Ažuriranje za Medtronic pumpe](../CompatiblePumps/MedtronicPump.md) @dottedfingertips
- [Potrebne provjere nakon ažuriranja na AAPS 3.0](Update3_0.md) @tanja
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- Ažuriranje dokumentacije za AAPS 3.0 (djelomično) @xJoe
- [Wear OS za AAPS 3.0](../WearOS/WearOsSmartwatch.md) @peterleimbach

**Siječanj 2022.**

- [Rješavanje problema s Android Studiom](../GettingHelp/TroubleshootingAndroidStudio.md) – ažuriranje @tanja

**Prosinac 2021.**

- [Izrada APK-a](../SettingUpAaps/BuildingAaps.md) – ažuriranje za Android Studio Arctic Fox | 2020.3.1 @tanja
- Dodane informacije o [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) @MilosKozak

**Studeni 2021.**

- Dobra praksa za kalibraciju senzora Libre 2
- [ISF](../UsefulLinks/FAQ.md) – novi opis utjecaja
- Ažuriranje stranice [Rješavanje problema s Android Studiom](../GettingHelp/TroubleshootingAndroidStudio.md)
- Uklonjena zakrpana aplikacija [Dexcom](../CompatibleCgms/DexcomG6.md) jer je zastarjela

**Listopad 2021.**

- [Bilješke o izdanju](ReleaseNotes.md) AAPS 3.0 beta

**Rujan 2021.**

- Preporučena specifikacija računala za [izradu aplikacije AAPS](#Building-APK-recommended-specification-of-computer-for-building-apk-file)

**Lipanj 2021.**

- [Ručna instalacija Watchfacea (sideload)](../WearOS/WearOsSmartwatch.md)

**Travanj 2021.**

- Popis [komunikacijskih uređaja](#CompatiblePumps-additional-communication-device) za pumpe Omnipod i Medtronic
- Predviđanja AAPS-a u [Nightscoutu](#Nightscout-manual-nightscout-setup)

**Ožujak 2021.**

- Komunikacija razvojnih programera premještena je s Gittera na [Discord](https://discord.gg/4fQUWHZ4Mw)

**Veljača 2021.**

- Nova navigacijska traka i [promjena jezika](../NavigateDoc/ChangeLanguageVersion.md)

**Siječanj 2021.**

- [Kartica Radnje](#screens-action-tab) – više pojedinosti na stranici „Zasloni AAPS-a“
- Dexcom G6 s aplikacijom [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- [Razina baterije](#screens-sensor-level-battery) čitača Libre smart reader
- [Ciljevi](#objectives-objective3) – nova pitanja
- Ostale [nove funkcije AAPS-a 2.8.0](#Releasenotes-version-2-8-0)

**Prosinac 2020.**

- [Libre 2](../CompatibleCgms/Libre2.md) – zakrpana aplikacija ne radi sa senzorima iz SAD-a
- [Čvrste granice u OpenAPS-u](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3: ručna instalacija usluge Google Play

**Listopad 2020.**

- Accu-Chek Combo – ažuriranje [prilagodbe vremena za ljetno računanje vremena](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight – opcija za [prijenos apsolutnih vrijednosti](#Accu-Chek-Insight-Pump-settings-in-aaps)
- Dnevnici – više pojedinosti o [lokaciji mape](../GettingHelp/AccessingLogFiles.md)
- Omnipod Eros – ažuriranje statusa
- [SMS naredbe – sinkronizacija vremena](../RemoteFeatures/SMSCommands.md)

**Rujan 2020.**

- Veliko ažuriranje za novu verziju AAPS-a 2.7
- Pojedinosti pogledajte u [bilješkama o izdanju](#Releasenotes-version-2-7-0)

**Lipanj 2020.**

- Libre 2 – više pojedinosti o zakrpanoj aplikaciji Libre Link i korištenju Bluetooth odašiljača
- [Putovanje kroz vremenske zone](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) s Libre 2

**Svibanj 2020.**

- [Produženi bolus samo za pumpe Dana i Insight](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Insight: isključivanje vibracije](#Accu-Chek-Insight-Pump-vibration) (samo firmware 3.x)
- [Minimalna promjena zahtjeva](#Preferences-minimal-request-change) za manje obavijesti u načinu otvorene petlje
- Zakrpana aplikacija Libre Link – provjerite je li ispravno zakrpana
- [Linije predviđanja](#aaps-screens-prediction-lines) – više pojedinosti

**Travanj 2020.**

- Unos inzulina s ranijim vremenom (npr. dan špricom)
- Podrška za Android 6 prestat će u sljedećoj master verziji

**Ožujak 2020.**

- [Izrada APK-a s Android Studiom 3.6.1](../SettingUpAaps/BuildingAaps.md)
- [DanaRS s firmwareom v3](../CompatiblePumps/DanaRS-Insulin-Pump.md) **trenutno se ne može koristiti s AAPS-om!**
- [Produženi bolus i prelazak na otvorenu petlju](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Ažuriranje APK-a s Android Studiom 3.6.1](../Maintenance/UpdateToNewVersion.md)

**Veljača 2020.**

- Upozorenja za automatizaciju
- [Autosens](#Open-APS-features-autosens) – kratko objašnjenje
- Alternative za Careportal
- Funkcija [produženog bolusa](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) – zatvorena petlja bit će onemogućena
- Novi [dodatak Lokalni profil](../SettingUpAaps/ConfigBuilder.md)
- Primjer postavljanja – ažuriranje za Dexcom G6
- [Verzija 2.6.0](#Releasenotes-version-2-6-0) – velike nove značajke
- [Komplikacije za Wear](../WearOS/WearOsSmartwatch.md)

**Siječanj 2020.**

- [Ručna korekcija ugljikohidrata](#screens-bolus-carbs) za pogrešne unose ugljikohidrata
- [Veličina slike](../SupportingAaps/HowToEditTheDocs.md) pri uređivanju dokumentacije

**Prosinac 2019.**

- [Android Auto](../RemoteFeatures/AndroidAuto.md) – postavljanje sa snimkama zaslona
- [Accu-Chek Insight i Autotune](#Accu-Chek-Insight-Pump-settings-in-aaps) – zaobilazno rješenje za korištenje
- [Glimp](#Config-Builder-bg-source) – podržana je verzija 4.15.57 i novije
- [Watchfaceovi](../WearOS/WearOsSmartwatch.md) – veliko ažuriranje, mnogo više pojedinosti
- [Komplikacije za Watchface](#Watchfaces-complications) – koristite svoj omiljeni Watchface s podacima AAPS-a

**Studeni 2019.**

- [Automatizacija – deaktivacija kada se petlja onemogući](../DailyLifeWithAaps/Automations.md)
- [Dexcom G6 – ažuriranje zamjene odašiljača](#xdrip-replace-transmitter)
- [Produženi bolus – zašto ne radi uz petlju](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Česta pitanja – sport](#FAQ-sports)
- [Početni zaslon – linije na grafu](#aaps-screens-main-graph)
- [Insight – onemogućite apsolutne vrijednosti u NS Clientu](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Medtronic pumpa – mogući dvostruki unosi](../CompatiblePumps/MedtronicPump.md)
- [Novi vodič za Freestyle Libre 2](../CompatibleCgms/Libre2.md)
- [Zamjena profila s postotkom – primjer](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
- [Ažuriranje SMS naredbi](../RemoteFeatures/SMSCommands.md)
- [Rješavanje problema s Android Studiom](../GettingHelp/TroubleshootingAndroidStudio.md)
- [Rješavanje problema – zbirka poveznica](../GettingHelp/GeneralTroubleshooting.md)
- Ažuriranje – kratki pregled za iskusne korisnike
- Dokumentacija – ažuriranje za [uređivanje](#edit-the-docs-code-syntax) i [prevođenje](#translations-translation-of-the-documentation).

**Listopad 2019.**

- Ažuriranja za [AAPS verziju 2.5](#Releasenotes-version-2-5-0) (posebno na [stranici za ažuriranje](../Maintenance/UpdateToNewVersion.md))
- [Accu-Chek Insight – opcije dnevnika](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Izračun aktivnih ugljikohidrata (COB) na posebnoj stranici](../DailyLifeWithAaps/CobCalculation.md)
- [COB – otkrivanje pogrešne vrijednosti COB-a](#CobCalculation-detection-of-wrong-cob-values)
- [Rješavanje problema specifičnih za Dexcom G6](#DexcomG6-troubleshooting-g6)
- [Ažuriranje ciljeva za verziju 2.5](../SettingUpAaps/CompletingTheObjectives.md)
- [Ažuriranje postavki](../SettingUpAaps/Preferences.md)
- [SGLT-2 inhibitori – ne koristite ih uz petlju](#PreparingForAaps-no-sglt-2-inhibitors)
- [Rješavanje problema sa SMS naredbama](#SMSCommands-troubleshooting)
- [xDrip – ažuriranje zamjene odašiljača G6](#xdrip-replace-transmitter)

**Rujan 2019.**

- [Automatizacija](../DailyLifeWithAaps/Automations.md)
- [Bolus kalkulator](#AapsScreens-wrong-cob-detection) – spora apsorpcija ugljikohidrata
- [Sigurnost Nightscouta](#Nightscout-security-considerations)
- [Vremenski pomak profila](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) (više pojedinosti)
- [Daljinski nadzor](../RemoteFeatures/RemoteMonitoring.md)
- [Što je sustav zatvorene petlje?](#Introduction-what-does-hybrid-closed-loop-mean)

**Kolovoz 2019.**

- Regija zakrpane aplikacije Dexcom G6
- [Novi odašiljač Dexcom G6](#xdrip-connect-g6-transmitter-for-the-first-time) („firefly“ / 8G...)
- Što mi je potrebno? - nova struktura i dodatne informacije
- Nova struktura
```
