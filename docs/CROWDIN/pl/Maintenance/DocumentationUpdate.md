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

- Wersja [3.4](#version3400) i zbiorcza aktualizacja dokumentacji (Kreator, wersje do budowania na komputerze, Konfiguracja (Config Builder))
- Aktualizacja listy CGM. Usunięto Dexcom G5, Tomato i Glimp.
- [Interfejs rotacji miejsc wkłucia](#Aapsscreens-site-rotation)
- [Tryb pracy](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## Grudzień 2025

- [Dostrajanie profilu AAPS](../GettingHelp/ProfileTuning.md) od @robrub

## Październik 2025

- DiaKEM: nowe instalacje nie działają po aktualizacji serwerów @psonnera
- Usunięto zmodyfikowaną aplikację Libre 2 (patched, przestarzała): nie działa z nowymi sensorami @psonnera
- Nowa wersja strony Omnipod Dash @XiTatiON

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

## Luty 2022

- [Znak ostrzeżenia o jakości BG](#aaps-screens-bg-warning-sign) @tanja
- [Aktualizacja: pompy Medtronic](../CompatiblePumps/MedtronicPump.md) @dottedfingertips
- [Niezbędne kontrole po aktualizacji do AAPS 3.0](Update3_0.md) @tanja
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- Aktualizacja dokumentacji dla AAPS 3.0 (częściowa) @xJoe
- [Wear OS dla AAPS 3.0](../WearOS/WearOsSmartwatch.md) @peterleimbach

## Styczeń 2022

- [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md) - update @tanja

## Grudzień 2021

- [Budowanie APK](../SettingUpAaps/BuildingAaps.md) – aktualizacja dla Android Studio Arctic Fox | 2020.3.1 @tanja
- Dodano informacje o [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) @MilosKozak

## Listopad 2021

- Dobre praktyki kalibracji sensora Libre 2
- [ISF](../UsefulLinks/FAQ.md) – nowy opis wpływu
- Update [troubleshooting Android studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- Usunięto zmodyfikowaną aplikację [Dexcom](../CompatibleCgms/DexcomG6.md) (patched), ponieważ jest przestarzała

## Październik 2021

- [Informacje o wersji](ReleaseNotes.md) AAPS 3.0 beta

## Wrzesień 2021

- Zalecana specyfikacja komputera do [zbudowania aplikacji AAPS](#Building-APK-recommended-specification-of-computer-for-building-apk-file)

## Czerwiec 2021

- [Ręczne instalowanie tarcz zegarka (sideload)](../WearOS/WearOsSmartwatch.md)

## Kwiecień 2021

- Lista [urządzeń komunikacyjnych](#CompatiblePumps-additional-communication-device) dla pomp Omnipod i Medtronic
- Prognozy AAPS w [Nightscout](#Nightscout-manual-nightscout-setup)

## Marzec 2021

- Komunikacja programistów przeniesiona z gittera na [Discorda](https://discord.gg/4fQUWHZ4Mw)

## Luty 2021

- Nowy pasek nawigacji i [przełącznik języka](../NavigateDoc/ChangeLanguageVersion.md)

## Styczeń 2021

- [Zakładka Akcje](#screens-action-tab) – więcej szczegółów na stronie „Ekrany AAPS”
- Dexcom G6 z [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- [Poziom baterii](#screens-sensor-level-battery) czytnika Libre smart reader
- [Zadania](#objectives-objective3) – nowe pytania
- Inne [nowe funkcje AAPS 2.8.0](#Releasenotes-version-2-8-0)

## Grudzień 2020

- [Libre 2](../CompatibleCgms/Libre2.md) – zmodyfikowana aplikacja (patched) nie działa z sensorami z USA
- [Twarde ograniczenia OpenAPS](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3 – ręczna instalacja usług Google Play

## Październik 2020

- Accu-Chek Combo – aktualizacja [zmiany czasu przy przejściu na czas letni](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight – opcja [wysyłania wartości bezwzględnych](#Accu-Chek-Insight-Pump-settings-in-aaps)
- Logi – więcej szczegółów o [lokalizacji folderu](../GettingHelp/AccessingLogFiles.md)
- Omnipod Eros – aktualny stan
- [Polecenia SMS – synchronizacja czasu](../RemoteFeatures/SMSCommands.md)

## Wrzesień 2020

- Duża aktualizacja dla nowej wersji AAPS 2.7
- For details see the [release notes](#Releasenotes-version-2-7-0)

## Czerwiec 2020

- Libre 2 – więcej szczegółów o zmodyfikowanej aplikacji Libre Link (patched) i używaniu nadajników Bluetooth
- [Podróże ze zmianą strefy czasowej](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) z Libre 2

## Maj 2020

- [Bolus przedłużony tylko dla pomp Dana i Insight](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Wyłączanie wibracji Insight](#Accu-Chek-Insight-Pump-vibration) (tylko oprogramowanie 3.x)
- [Minimalna zmiana żądania](#Preferences-minimal-request-change), aby zmniejszyć liczbę powiadomień w trybie otwartej pętli
- Zmodyfikowana aplikacja Libre Link (patched) – jak sprawdzić, czy została poprawnie zmodyfikowana
- [Linie prognozy](#aaps-screens-prediction-lines) – więcej szczegółów

## Kwiecień 2020

- Wprowadzanie insuliny z datą wsteczną (np. podanej strzykawką)
- Wsparcie dla Androida 6 zostanie zakończone w następnej wersji master

## Marzec 2020

- [Budowanie APK w Android Studio 3.6.1](../SettingUpAaps/BuildingAaps.md)
- [DanaRS z oprogramowaniem v3](../CompatiblePumps/DanaRS-Insulin-Pump.md) **obecnie nie może być używana z AAPS!**
- [Bolus przedłużony i przełączenie na otwartą pętlę](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Aktualizacja APK w Android Studio 3.6.1](../Maintenance/UpdateToNewVersion.md)

## Luty 2020

- Automatyzacja – zastrzeżenia
- [Autosens](#Open-APS-features-autosens) – krótkie wyjaśnienie
- Alternatywy dla Portalu opieki (Careportal)
- Funkcja [Bolus Przedłużony](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) – zamknięta pętla zostanie wyłączona
- Nowa [wtyczka Profil lokalny](../SettingUpAaps/ConfigBuilder.md)
- Przykładowa konfiguracja – aktualizacja Dexcom G6
- [Wersja 2.6.0](#Releasenotes-version-2-6-0) – duże nowe funkcje
- [Komplikacje na zegarku (Wear)](../WearOS/WearOsSmartwatch.md)

## Styczeń 2020

- [Ręczna korekta węglowodanów](#screens-bolus-carbs) dla błędnie wprowadzonych węglowodanów
- [Rozmiar obrazów](../SupportingAaps/HowToEditTheDocs.md) przy edycji dokumentacji

## Grudzień 2019

- [Android Auto](../RemoteFeatures/AndroidAuto.md) – konfiguracja ze zrzutami ekranu
- [Accu-Chek Insight i Autotune](#Accu-Chek-Insight-Pump-settings-in-aaps) – obejście problemu
- [Glimp](#Config-Builder-bg-source) – obsługiwana wersja 4.15.57 i nowsze
- [Tarcze zegarka](../WearOS/WearOsSmartwatch.md) – duża aktualizacja, dużo więcej szczegółów
- [Komplikacje tarczy zegarka](#Watchfaces-complications) – używaj ulubionej tarczy zegarka z danymi AAPS

## Listopad 2019

- [Automatyzacja – wyłączana po wyłączeniu pętli](../DailyLifeWithAaps/Automations.md)
- [Dexcom G6 – aktualizacja wymiany nadajnika](#xdrip-replace-transmitter)
- [Bolus przedłużony – dlaczego nie działa w pętli](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [FAQ – sport](#FAQ-sports)
- [Ekran główny – linie na wykresie](#aaps-screens-main-graph)
- [Insight – wyłączenie wartości bezwzględnych w NS Client](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Pompa Medtronic – możliwe podwójne wpisy](../CompatiblePumps/MedtronicPump.md)
- [Nowy samouczek dla Freestyle Libre 2](../CompatibleCgms/Libre2.md)
- [Zmiana profilu z procentem – przykład](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
- [Aktualizacja poleceń SMS](../RemoteFeatures/SMSCommands.md)
- [Rozwiązywanie problemów z Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- [Rozwiązywanie problemów – zbiór linków](../GettingHelp/GeneralTroubleshooting.md)
- Aktualizacja – szybki przewodnik dla doświadczonych użytkowników
- Dokumentacja – aktualizacja stron o [edycji](#edit-the-docs-code-syntax) i [tłumaczeniu](#translations-translation-of-the-documentation).

## Październik 2019

- Aktualizacje dla [AAPS w wersji 2.5](#Releasenotes-version-2-5-0) (szczególnie na [stronie aktualizacji](../Maintenance/UpdateToNewVersion.md))
- [AccuChek Insight – opcje logów](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Obliczanie COB na osobnej stronie](../DailyLifeWithAaps/CobCalculation.md)
- [COB – wykrywanie błędnej wartości COB](#CobCalculation-detection-of-wrong-cob-values)
- [Dexcom G6 – rozwiązywanie problemów](#DexcomG6-troubleshooting-g6)
- [Aktualizacja zadań dla wersji 2.5](../SettingUpAaps/CompletingTheObjectives.md)
- [Aktualizacja ustawień](../SettingUpAaps/Preferences.md)
- [Inhibitory SGLT-2 – nie używaj podczas korzystania z pętli](#PreparingForAaps-no-sglt-2-inhibitors)
- [Polecenia SMS – rozwiązywanie problemów](#SMSCommands-troubleshooting)
- [xDrip – aktualizacja wymiany nadajnika G6](#xdrip-replace-transmitter)

## Wrzesień 2019

- [Automatyzacja](../DailyLifeWithAaps/Automations.md)
- [Kalkulator bolusa](#AapsScreens-wrong-cob-detection) – wolne wchłanianie węglowodanów
- [Bezpieczeństwo Nightscout](#Nightscout-security-considerations)
- [Przesunięcie czasu profilu](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) (więcej szczegółów)
- [Zdalny monitoring](../RemoteFeatures/RemoteMonitoring.md)
- [Co to jest system zamkniętej pętli?](#Introduction-what-does-hybrid-closed-loop-mean)

## Sierpień 2019

- Dexcom G6 – region zmodyfikowanej aplikacji (patched)
- [Nowy nadajnik Dexcom G6](#xdrip-connect-g6-transmitter-for-the-first-time) („firefly” / 8G...)
- Czego potrzebuję? – nowa struktura i dodatkowe informacje
- Nowa struktura
