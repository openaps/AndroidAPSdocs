- - -
tocdepth: 1
- - -

# Aktualizacje i zmiany w dokumentacji

## Październik 2026

- [Browser build with AAPS Builder](#aaps-builder): build workflow version 8, now maintained by the AAPS developers in the [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) repository. Setting up is one step shorter: [step 1](#aaps-builder-step1) of the [setup page](#aaps-builder-setup) creates your private repository as a copy of that repository, with the build workflow already in it, so there is no workflow to add any more. From now on the build steps are updated for you: your repository runs the version released by the AAPS developers at every build, without any change on your side (and still no automatic build). The build itself does not change, and your existing repository keeps working. To get these automatic updates, replace your `.github/workflows/build.yml` once as explained in [Updating AAPS](#aaps-builder-updates). Your `KEYSTORE_SET` secret stays as it is. The optional [Google Drive step](#aaps-builder-google-drive) now works on the setup page itself, on a phone or a computer: no preparation file needed @psonnera
- [Smartwatche i AAPS](#watches-external-companion-apps): sekcja **Samsung Tizen** zmienia się w **Zewnętrzne aplikacje towarzyszące** i wymienia aplikacje, które odczytują dane rozgłaszane przez **AAPS** (WatchDrip+, GlucoDataHandler, G-Watch). [WatchDrip+](#watches-xiaomi-amazfit) 0.5 i nowsze łączą się bezpośrednio z **AAPS** bez xDrip+: dodano kroki konfiguracji, opisane też krótko w [Konfiguracji](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md) i [Zdalnym monitoringu](../RemoteFeatures/RemoteMonitoring.md). Zegarki Bluejay: model GTS wycofany, zaktualizowano obecny model @psonnera
- [Budowanie w przeglądarce z AAPS Builder](#aaps-builder): workflow budowania w wersji 6. Kroki budowania używają teraz dokładnych, sprawdzonych wersji narzędzi GitHub i maszyny budującej. Gdy do sekretu `KEYSTORE_SET` wklejono zły tekst, budowanie jasno to wyjaśnia. [Strona konfiguracji](#aaps-builder-setup) jest teraz częścią dokumentacji i jest tłumaczona. Sprawdza Twoją nazwę użytkownika GitHub i ma jaśniejszą pomoc dotyczącą sekretu, błędu „Page not found” (404) i aplikacji GitHub. Jeśli Twój plik `.github/workflows/build.yml` ma wersję 5 lub starszą, zastąp go zgodnie z opisem w [Aktualizowanie AAPS](#aaps-builder-updates) @psonnera
- [Instalator webowy AAPS](#web-installer): teraz jest stroną dokumentacji, tłumaczoną tak jak inne. Stary adres nadal działa @psonnera
- [Budowanie w przeglądarce z AAPS Builder](#aaps-builder): workflow budowania w wersji 3 dodaje wariant `aapsclient3Release` (**AAPSClient3**, AAPS 4.0 i nowsze). Aby go zbudować, zastąp swój plik `.github/workflows/build.yml` zgodnie z opisem w [Aktualizowanie AAPS](#aaps-builder-updates) @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md): usunięto zmodyfikowaną aplikację Dexcom G7 (DiaKEM, patched), która nie działa już przy nowych instalacjach @psonnera
- [Budowanie w przeglądarce z AAPS Builder](#aaps-builder): workflow budowania w wersji 2. Usunięto automatyczne cotygodniowe budowanie (brak harmonogramu, brak zmiennych `AUTO_BUILD` / `AUTO_VARIANT`, brak tagów `built/…`): każde budowanie uruchamiasz Ty, z wybraną wersją i wariantem, a workflow ma tylko dostęp do odczytu Twojego repozytorium. Jeśli Twój plik `.github/workflows/build.yml` ma wersję 1, zastąp go zgodnie z opisem w [Aktualizowanie AAPS](#aaps-builder-updates). Dodano zrzuty ekranu dla każdego kroku @psonnera
- [Budowanie w przeglądarce z AAPS Builder](#aaps-builder): workflow budowania jest teraz częścią tej dokumentacji. Bez repozytorium szablonu: tworzysz puste prywatne repozytorium i dodajesz workflow ze strony konfiguracji (nowy krok 2). Workflow nie sprawdza już aktualizacji w zewnętrznym repozytorium. Jeśli Twoje repozytorium zostało utworzone z wcześniejszego szablonu, zastąp plik `.github/workflows/build.yml` workflow ze strony konfiguracji zgodnie z opisem w [Aktualizowanie AAPS](#aaps-builder-updates) @psonnera
- Nowa strona [Budowanie w przeglądarce z AAPS Builder](#aaps-builder): zbuduj AAPS z telefonu z Androidem za pomocą strony konfiguracji na tej witrynie, z automatycznym cotygodniowym budowaniem i bez pliku przygotowawczego. Zastępuje ona instrukcje budowania w przeglądarce dla Androida (usunięto strony File Manager Plus). AAPS Builder stworzył @dio99, dokumentację @psonnera

## Sierpień 2026

- [Przenoszenie i instalacja AAPS na smartfonie](../SettingUpAaps/TransferringAndInstallingAaps.md): stronę *Weryfikacja deweloperów Androida* włączono do instrukcji instalacji, dodano [instalator webowy](#android-developer-verification-web) (instalacja APK prosto z przeglądarki, bez weryfikacji) oraz bezprzewodowe ADB @psonnera

## Lipiec 2026

- [Wprowadzenie do APS i AAPS](../Getting-Started/Introduction.md): sprawdzenie poprawności sekcji o APS. Poprawiono tytuł i link cytatu z Frontiers i przedstawiono go jako tło, a nie aktualny przewodnik po rynku. Zaktualizowano informacje o systemach dwuhormonalnych i w pełni zamkniętej pętli, wyjaśniono, że sterownik nie zawsze jest aplikacją na telefon, usunięto nazwy marek komercyjnych i liczby użytkowników bez źródła oraz poprawiono rozwinięcie OS-AID na *Open-Source Automated Insulin Delivery* @psonnera
- [Słowniczek pojęć](../UsefulLinks/Glossary.md): dodano hasła **AID**, **FCL**, **HCL** i **OS-AID**, z linkami z haseł **APS** i **Zamknięta pętla** @psonnera
- Nowa strona [Weryfikacja deweloperów Androida](#android-developer-verification): wpływ nadchodzącego wymogu weryfikacji Google na instalację samodzielnie zbudowanych aplikacji, z darmowymi metodami instalacji (ADB, zaawansowany proces, konto z ograniczoną dystrybucją) @psonnera

## Czerwiec 2026

- [Budowanie w przeglądarce](#browser-build): nowy układ na kilku stronach, który zaczyna od decyzji (Fork → magazyn kluczy Opcja 1/Opcja 2 z osobną stroną dla każdego urządzenia → Google Drive → Budowanie → Rozwiązywanie problemów); usunięto zagnieżdżone karty, a instalacja File Manager Plus jest teraz wyraźnym krokiem @psonnera
- [Wprowadzenie do APS i AAPS](../Getting-Started/Introduction.md): zmiana nazewnictwa z *DIY* na *OS-AID* (Open-Source Automated Insulin Delivery – automatyczne podawanie insuliny z otwartym kodem źródłowym), dodano Trio i Stelo, zaktualizowano tabelę kompatybilności pomp i CGM @tmhastings

## Marzec 2026

- [Dodano opcję budowania z wiersza poleceń (CLI)](../SettingUpAaps/CLIBuild.md) @je-l
- Zmiana nazwy *Computer Build* na *Android Studio Build*. Zachowanie nazw plików w adresach URL.

## Styczeń 2025

- [3.4](#version3400) release and documentation update roll-up (Wizard, Computer build versions, Config Builder)
- Aktualizacja listy CGM. Usunięto Dexcom G5, Tomato i Glimp.
- [Interfejs rotacji miejsc wkłucia](#Aapsscreens-site-rotation)
- [Tryb pracy](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## Grudzień 2025

- [Dostrajanie profilu AAPS](../GettingHelp/ProfileTuning.md) od @robrub

## Październik 2025

- DiaKEM: nowe instalacje nie działają po aktualizacji serwerów @psonnera
- Usunięto zmodyfikowaną aplikację Libre 2 (patched, przestarzała): nie działa z nowymi sensorami @psonnera
- Reworked Omnipod DASH page @XiTatiON

## Sierpień 2025

- Zaktualizowano wersje i wymagania dla Android Studio
- Dodano wersję [3.3.2.1](#version3321), usunięto wzmianki o Androidzie 16 (naprawione)
- Dodano [Budowanie w przeglądarce](#browser-build) @Angus

## Maj 2025

- Dodano [stronę aktualizacji do 3.2.0.4](#update-aaps-3204) @psonnera

## Styczeń 2025

- Szybki kalkulator – [funkcja długiego naciśnięcia](#Preferences-quick-wizard) @emilise
- Nowa wersja strony [Dynamiczny ISF](../DailyLifeWithAaps/DynamicISF.md) @emilise

## Grudzień 2024

- Dokumentacja [wersji 3.3](#version3300) @emilise

## Listopad 2024

- Aktualizacja strony [Twój profil AAPS](../SettingUpAaps/YourAapsProfile.md) @emilise
- Reorganization of [Wear OS Smartwatches](../WearOS/BuildingAapsWearOS.md) content @psonnera

## Październik 2024

- Aktualizacja kilku stron:
  - [How long will it take](#preparing-how-long-will-it-take), [Component Overview](../Getting-Started/ComponentOverview.md), [Completing the objectives](../SettingUpAaps/CompletingTheObjectives.md), [Your AAPS Profile](../SettingUpAaps/YourAapsProfile.md), [Config Builder](../SettingUpAaps/ConfigBuilder.md) & [Preferences](../SettingUpAaps/Preferences.md), [AAPS screens](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [Obliczanie COB](../DailyLifeWithAaps/CobCalculation.md), [Dynamiczny ISF](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Instrukcje budowania dla Android Studio Ladybug](../SettingUpAaps/BuildingAaps.md) @tanja
- Technical work (deployment process for the documentation, files organization...) @psonnera & @emilise

***

Brak historii od marca 2022 do września 2024

Przy przebudowie dla wersji 3.2 usunięto niektóre przestarzałe informacje. Znajdziesz je w poprzedniej wersji dokumentacji:

Dokumentacja AAPS 3.1 jest dostępna [tutaj](https://androidaps.readthedocs.io/en/3.1/index.html).

***

```{dropdown} Older updates (2019 to 2022)
**February 2022**

- [BG quality warning sign](#aaps-screens-bg-warning-sign) @tanja
- [Medtronic pump update](../CompatiblePumps/MedtronicPump.md) @dottedfingertips
- [Necessary checks after update to AAPS 3.0](Update3_0.md) @tanja
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- Update docs for AAPS 3.0 (partly) @xJoe
- [Wear OS for AAPS 3.0](../WearOS/WearOsSmartwatch.md) @peterleimbach

**January 2022**

- [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md) - update @tanja

**December 2021**

- [Building the APK](../SettingUpAaps/BuildingAaps.md) - update Android Studio Arctic Fox | 2020.3.1 @tanja
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) information added @MilosKozak

**November 2021**

- Best practices for calibrating a Libre 2 sensor
- [ISF](../UsefulLinks/FAQ.md) reformulation of impact
- Update [troubleshooting Android studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- Removed patched [Dexcom](../CompatibleCgms/DexcomG6.md) app as it is obsolete

**October 2021**

- [Release notes](ReleaseNotes.md) AAPS 3.0 beta

**September 2021**

- Recommended computer specification to [build AAPS app](#Building-APK-recommended-specification-of-computer-for-building-apk-file)

**June 2021**

- [Watchface sideload](../WearOS/WearOsSmartwatch.md)

**April 2021**

- List of [communication devices](#CompatiblePumps-additional-communication-device) for Omnipod and Medtronic pumps
- AAPS predictions in [Nightscout](#Nightscout-manual-nightscout-setup)

**March 2021**

- Dev communication moved from gitter to [discord](https://discord.gg/4fQUWHZ4Mw)

**February 2021**

- New navigation bar and [language switch](../NavigateDoc/ChangeLanguageVersion.md)

**January 2021**

- [Action tab](#screens-action-tab) - more details on page 'AAPS screens'
- Dexcom G6 with [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- Libre smart reader [battery level](#screens-sensor-level-battery)
- [Objectives](#objectives-objective3) - new questions
- Other [new AAPS 2.8.0 functions](#Releasenotes-version-2-8-0)

**December 2020**

- [Libre 2](../CompatibleCgms/Libre2.md) - patched app does not work with US sensors
- [OpenAPS hard-coded limits](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3 Manual Installation of Google Play Service

**October 2020**

- Accu-Chek Combo - update [time adjustment daylight savings time](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight - Option to [upload absolute values](#Accu-Chek-Insight-Pump-settings-in-aaps)
- Logs - more details about [folder location](../GettingHelp/AccessingLogFiles.md)
- Omnipod Eros - status update
- [SMS commands - time sync](../RemoteFeatures/SMSCommands.md)

**September 2020**

- Major update for new AAPS version 2.7
- For details see the [release notes](#Releasenotes-version-2-7-0)

**June 2020**

- Libre 2 - more details patched Libre Link app & use of Bluetooth transmitters
- [Time zone traveling](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) with Libre 2

**May 2020**

- [Extended bolus only for Dana + Insight pumps](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Insight deactivate vibration](#Accu-Chek-Insight-Pump-vibration) (firmware 3.x only)
- [Minimal request rate](#Preferences-minimal-request-change) to reduce number of notifications in open loop mode
- Patched Libre Link app - check if correctly patched
- [Prediction lines](#aaps-screens-prediction-lines) - more details

**April 2020**

- Backdate insulin (i.e. given by syringe)
- Android 6 support will be discontinued in next master version

**March 2020**

- [Build apk with Android Studio 3.6.1](../SettingUpAaps/BuildingAaps.md)
- [DanaRS with firmware v3](../CompatiblePumps/DanaRS-Insulin-Pump.md) **cannot currently be used with AAPS!**
- [Extended bolus and switch to open loop](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Update apk with Android Studio 3.6.1](../Maintenance/UpdateToNewVersion.md)

**February 2020**

- Automation caveats
- [Autosens](#Open-APS-features-autosens) - short explanation
- Careportal alternatives
- [Extended bolus](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) feature - closed loop will be disabled
- New [Local Profile plugin](../SettingUpAaps/ConfigBuilder.md)
- Sample Setup - update Dexcom G6
- [Version 2.6.0](#Releasenotes-version-2-6-0) - major new features
- [Wear complications](../WearOS/WearOsSmartwatch.md)

**January 2020**

- [Manual carb correction](#screens-bolus-carbs) for faulty carb entries
- [Image size](../SupportingAaps/HowToEditTheDocs.md) when editing docs

**December 2019**

- [Android Auto](../RemoteFeatures/AndroidAuto.md) - setup with screenshots
- [Accu-Chek Insight & Autotune](#Accu-Chek-Insight-Pump-settings-in-aaps) - workaround for usage
- [Glimp](#Config-Builder-bg-source) - version 4.15.57 and newer supported
- [Watchfaces](../WearOS/WearOsSmartwatch.md) - major update, way more details
- [Watchface complications](#Watchfaces-complications) - use your favorite watchface with AAPS data

**November 2019**

- [Automation - deactivate when disabling loop](../DailyLifeWithAaps/Automations.md)
- [Dexcom G6 replace transmitter update](#xdrip-replace-transmitter)
- [Extended bolus - why they do not work in a loop context](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [FAQ - sports](#FAQ-sports)
- [Homescreen - lines on graph](#aaps-screens-main-graph)
- [Insight - Disable absolute values in NS Client](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Medtronic pump - possible double entries](../CompatiblePumps/MedtronicPump.md)
- [New Freestyle Libre 2 tutorial](../CompatibleCgms/Libre2.md)
- [Profile switch with percentage - example](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
- [SMS commands update](../RemoteFeatures/SMSCommands.md)
- [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- [Troubleshooting - link collection](../GettingHelp/GeneralTroubleshooting.md)
- Update - quick walk-through for experienced users
- Docs - update [edit](#edit-the-docs-code-syntax) and [translation](#translations-translation-of-the-documentation).

**October 2019**

- [AAPS version 2.5](#Releasenotes-version-2-5-0) updates (especially on [update page](../Maintenance/UpdateToNewVersion.md))
- [Accu-Chek Insight - log options](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [COB calculation on separate page](../DailyLifeWithAaps/CobCalculation.md)
- [COB - wrong COB value detection](#CobCalculation-detection-of-wrong-cob-values)
- [Dexcom G6 specific troubleshooting](#DexcomG6-troubleshooting-g6)
- [Objectives update version 2.5](../SettingUpAaps/CompletingTheObjectives.md)
- [Preferences update](../SettingUpAaps/Preferences.md)
- [SGLT-2 inhibitors - do not use when looping](#PreparingForAaps-no-sglt-2-inhibitors)
- [SMS Commands Troubleshooting](#SMSCommands-troubleshooting)
- [xDrip - update G6 transmitter replacement](#xdrip-replace-transmitter)

**September 2019**

- [Automate](../DailyLifeWithAaps/Automations.md)
- [Bolus calculator](#AapsScreens-wrong-cob-detection) - slow carb absorption
- [Nightscout security](#Nightscout-security-considerations)
- [Profile timeshift](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) (more details)
- [Remote monitoring](../RemoteFeatures/RemoteMonitoring.md)
- [What is a closed loop system?](#Introduction-what-does-hybrid-closed-loop-mean)

**August 2019**

- Dexcom G6 patched app region
- [Dexcom G6 new transmitter](#xdrip-connect-g6-transmitter-for-the-first-time) ("firefly" / 8G...)
- What do I need? - new structure & additional information
- New structure
```
