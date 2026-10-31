# Witaj w dokumentacji AAPS

![image](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

 31 October 2026 : Version 4.0.0 is out. Sprawdź w [informacjach o wersji](#latestrelease), co nowego, i zaktualizuj AAPS według [instrukcji aktualizacji](./Maintenance/UpdateToNewVersion.md).

```

Android APS (**AAPS**) to aplikacja open source dla osób żyjących z cukrzycą insulinozależną. Jest to system sztucznej trzustki (APS — ang. artificial pancreas system), który działa na smartfonach z Androidem. **AAPS** używa algorytmu oprogramowania OpenAPS i ma na celu robić to, co prawdziwa trzustka: utrzymać poziom cukru we krwi w zdrowym zakresie używając zautomatyzowanego dozowania insuliny. Aby używać **AAPS**, potrzebujesz **trzech** kompatybilnych urządzeń: **(1)** telefonu z Androidem, **(2)** systemu ciągłego monitorowania glikemii (CGM) i **(3)** pompy insulinowej zatwierdzonej przez FDA/CE. Możesz też dodać **(4)** usługi w chmurze, aby zdalnie sterować **AAPS**, udostępniać swoje dane i przechowywać je na serwerze raportów, oraz **(5)** smartwatch.

Ta dokumentacja wyjaśnia, jak skonfigurować i używać **AAPS**. Po dokumentacji **AAPS** możesz poruszać się za pomocą menu po lewej stronie (i przydatnej funkcji wyszukiwania **Search docs**) albo za pomocą [spisu treści](#index-aaps-documentation-index) na dole tej strony.

## Przegląd dokumentacji AAPS (w skrócie „dokumentacja”)

W rozdziale **1) Pierwsze kroki** strona [Wprowadzenie do APS i AAPS](Getting-Started/Introduction.md) wyjaśnia ogólną ideę: do czego służy system sztucznej trzustki (APS). Przedstawia ogólne podstawy działania systemów pętli, wyjaśnia, dlaczego powstał **AAPS**, porównuje **AAPS** z innymi systemami i omawia kwestie bezpieczeństwa. Podpowiada, jak rozmawiać o **AAPS** z zespołem diabetologicznym, wyjaśnia, dlaczego musisz samodzielnie zbudować aplikację **AAPS**, zamiast po prostu ją pobrać, i pokazuje typowe połączenia w systemie **AAPS**. Omawia też dostępność oraz to, kto najprawdopodobniej skorzysta na używaniu **AAPS**.

Strona [Przygotowanie do rozpoczęcia pracy z AAPS](./Getting-Started/PreparingForAaps.md) podaje więcej szczegółów o bezpieczeństwie oraz o telefonach, systemach CGM (ciągłego monitorowania glikemii) i pompach insulinowych, które są kompatybilne z **AAPS**. Przedstawia przegląd całego procesu, przez który przejdziesz, i podaje przybliżony czas potrzebny, aby korzystać ze wszystkich funkcji **AAPS**. Ten rozdział przygotuje cię technicznie do jak najszybszego i najsprawniejszego złożenia twojego systemu **AAPS**. Podrozdział [Kompatybilne systemy CGM](./Getting-Started/CompatiblesCgms.md) wyjaśnia, jak najlepiej skonfigurować CGM i które opcje wygładzania są najlepsze.

Gdy solidnie zrozumiesz proces, możesz rozpocząć tworzenie swojej pętli **AAPS**.

Rozdział **2) Zbuduj aplikację** wyjaśnia, dlaczego musisz samodzielnie zbudować aplikację **AAPS**, zamiast po prostu ją pobrać, i krok po kroku prowadzi cię przez [budowanie](./SettingUpAaps/BuildingAaps.md) (w przeglądarce, w Android Studio lub z wiersza poleceń), a potem przez przeniesienie i instalację aplikacji na telefonie. Zaczyna się od kroku opcjonalnego: założenia [osobnego konta Google](./UsefulLinks/DedicatedGoogleAccountForAaps.md) na twoje zbudowane aplikacje i kopie zapasowe. Wyjaśnia też [weryfikację deweloperów Androida](#android-developer-verification) – zmianę, którą Google wprowadza od września 2026 r. i która wpływa na instalację samodzielnie zbudowanych aplikacji.

Rozdział **3) Konfiguracja serwera raportów** opisuje wybór i [konfigurację serwera raportów](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout lub Tidepool), aby móc przeglądać i udostępniać swoje dane.

Rozdział **4) [Konfiguracja AAPS](./SettingUpAaps/SetupWizard.md)** opisuje konfigurację aplikacji **AAPS** za pomocą kreatora konfiguracji, połączenie jej z aplikacją CGM i z prawdziwą lub wirtualną pompą insulinową, a także połączenie **AAPS** z serwerem raportów. Następnie poznajesz wszystko, co potrafi **AAPS**, w bezpiecznym procesie krok po kroku, w starannie dobranym tempie. Dzięki temu ty (lub twoje dziecko) dobrze poznasz wszystkie poziomy i ustawienia menu i swobodnie będziesz się po nich poruszać, zanim przejdziesz do następnego etapu, zwanego kolejnym „zadaniem”. W ten sposób robisz kolejne postępy, aż zdobędziesz wystarczające doświadczenie, aby zacząć używać bardziej zaawansowanych opcji aplikacji. Zadania te są specjalnie zaprojektowane w taki sposób, aby stopniowo odblokowywać kolejne możliwości **AAPS** i przejść od otwartej do zamkniętej pętli.

Rozdział **5) [Życie codzienne z AAPS](./DailyLifeWithAaps/AapsScreens.md)** opisuje najważniejsze funkcje **AAPS**, aby pomóc ci używać **AAPS** (i dostosować go do siebie). Obejmuje to zrozumienie ekranów, aktywnych węglowodanów (COB), wrażliwości, Dynamicznego ISF, zmian profilu, celów tymczasowych, przedłużonych węglowodanów (eCarbs), automatyzacji oraz [przeglądu danych](./Maintenance/Reviewing.md) w Przeglądzie historii i w Statystykach. Omawia też częste tematy, np. jak radzić sobie z różnymi rodzajami posiłków, z wymianą kaniuli i sensora, z aktualizacjami smartfona, ze zmianą czasu na letni i zimowy, [podróżami z AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) oraz ze sportem. Często zadawane pytania i odpowiedzi znajdują się w rozdziale rozwiązywania problemów.

Rozdział **6) [Funkcje zdalne AAPS](./RemoteFeatures/RemoteControl.md)** podkreśla ważną zaletę **AAPS**. Istnieje szeroki zakres możliwości zdalnego przesyłania poleceń, lub po prostu monitorowania danych z **AAPS**. Jest to tak samo przydatne dla opiekunów, którzy używają **AAPS** u dzieci, jak i dla dorosłych z cukrzycą, którzy chcą wygodniej śledzić glikemię (i inne dane) nie tylko na telefonie (na zegarku, w samochodzie _itd._) albo chcą, aby bliskie osoby też mogły śledzić te dane. Ten rozdział zawiera też wskazówki dotyczące Android Auto, aby móc sprawdzać poziom glukozy w samochodzie.

Rozdział **7) [Smartwatche z Wear OS](./WearOS/BuildingAapsWearOS.md)** podaje informacje i procedury, jak używać smartwatcha z systemem Android **Wear OS** z dedykowanymi tarczami zegarka **AAPS** lub z własnymi tarczami: jako pilota do telefonu albo tylko jako wyświetlacza.


Rozdział **8) [Konserwacja AAPS](./Maintenance/ExportImportSettings.md)** opisuje, jak eksportować ustawienia i robić ich kopię zapasową (to bardzo ważne, gdy zgubisz lub zepsujesz telefon), podaje informacje o najnowszej wersji, wyjaśnia, jak zaktualizować **AAPS**, oraz co się dzieje, gdy wersja traci wsparcie. Możesz się spodziewać jednej nowej wersji i 2–3 wymaganych aktualizacji rocznie. Musisz przeprowadzić te aktualizacje, jak w przypadku każdego innego oprogramowania, ponieważ eliminowane są w nich drobne błędy oraz wprowadzane są ulepszenia do **AAPS**. Jest osobna sekcja rozwiązywania problemów z „aktualizacją”, z odpowiedziami na najczęstsze pytania.

Rozdział **9) [Pomoc i rozwiązywanie problemów](GettingHelp/WhereCanIGetHelp.md)** wskaże ci najlepsze miejsca, w których znajdziesz ogólną pomoc dotyczącą **AAPS**. To jedno miejsce, do którego warto zajrzeć, gdy coś nie działa: strona [Ogólne rozwiązywanie problemów](GettingHelp/GeneralTroubleshooting.md) zbiera według tematów rozwiązania najczęstszych problemów, a [FAQ](UsefulLinks/FAQ.md) odpowiada na częste pytania. To bardzo ważne, aby jak najszybciej nawiązać kontakt z innymi, wyjaśnić swoje pytania i rozwiązać typowe problemy. Wiele osób pomyślnie korzysta już z **AAPS**, ale każdy ma w pewnym momencie pytanie, którego nie jest w stanie rozwiązać samodzielnie. Ze względu na dużą liczbę użytkowników, czas odpowiedzi na pytania jest zwykle bardzo szybki, zazwyczaj tylko kilka godzin. Nie bój się prosić o pomoc – nie ma głupich pytań! Zachęcamy użytkowników o dowolnym poziomie doświadczenia, do zadawania tylu pytań ilu potrzebują, aby pomóc im w bezpiecznym uruchomieniu i użytkowaniu. Rozdział ten zawiera ogólny opis rozwiązywania problemów z **AAPS** i **AAPSClient** (aplikacja dla osób monitorujących) jak również instrukcje wysyłania danych **AAPS** (plików logów) do deweloperów w celu zbadania, jeśli uważasz, że trzeba przyjrzeć się problemowi technicznemu z **AAPS**.

Rozdział **10)** opisuje **[Zaawansowane opcje AAPS](./AdvancedOptions/FullClosedLoop.md)**, np. jak przejść od używania **AAPS** w hybrydowej zamkniętej pętli (bolusy do posiłków _itd._) do w pełni zamkniętej pętli (bez bolusów), jak [dostroić profil](./GettingHelp/ProfileTuning.md) i używać Autotune, a także opisuje wersję rozwojową (dev) i Tryb Inżynierski. Większość użytkowników dobrze radzi sobie z główną wersją **AAPS** („master”) i nie potrzebuje tych opcji. Ten rozdział jest dla użytkowników, którzy mają już dobrą kontrolę i chcą jeszcze ulepszyć swoją konfigurację.

W rozdziale **11) [Jak wspierać AAPS](SupportingAaps/HowToEditTheDocs.md)** podajemy informacje, jak możesz wspierać ten projekt. Możesz przekazać pieniądze, sprzęt lub podzielić się swoją specjalistyczną wiedzą. Możesz samodzielnie proponować lub wprowadzać zmiany w dokumentacji, pomóc w [tłumaczeniu dokumentacji](SupportingAaps/Translations) i udostępniać swoje dane w projekcie Open Humans.

Rozdział **12) Zasoby** zawiera zarchiwizowaną lub dodatkową dokumentację, w tym podrozdział dla [lekarzy](UsefulLinks/ClinicianGuideToAaps.md), którzy interesują się technologią sztucznej trzustki open source, taką jak **AAPS**, oraz dla pacjentów, którzy chcą przekazać takie informacje swoim lekarzom; ten temat jest omawiany także we wprowadzeniu. Ten rozdział zawiera też więcej materiałów o cukrzycy i systemach pętli. Zawiera [Słowniczek pojęć](./UsefulLinks/Glossary.md) – listę skrótów (lub krótkich nazw) używanych w **AAPS**. Tutaj sprawdzisz na przykład, co oznaczają skróty ISF lub TT.


 ### Chcesz zacząć korzystać z **AAPS**? Więcej o **AAPS** przeczytasz na stronie [Wprowadzenie do APS i AAPS](Getting-Started/Introduction.md).

```{admonition} SAFETY NOTICE
:class: danger
Bezpieczeństwo **AAPS** zależy od funkcji bezpieczeństwa twojego sprzętu (telefonu, pompy, systemu CGM). Używaj tylko w pełni działającej pompy insulinowej i systemu CGM zatwierdzonych przez FDA lub CE. Nie używaj uszkodzonych, zmodyfikowanych lub własnoręcznie stworzonych pomp insulinowych i odbiorników CGM. Używaj tylko oryginalnych materiałów eksploatacyjnych (wkłuwacze, kaniule i zbiorniki na insulinę) zatwierdzonych przez producenta do użytku z twoją pompą i systemem CGM. Używanie nieprzetestowanych lub zmodyfikowanych materiałów może spowodować niedokładności i błędy w dozowaniu insuliny, które mogą spowodować znaczne ryzyko dla użytkownika. 

Nie używaj **AAPS**, jeśli przyjmujesz inhibitory SGLT-2 (flozyny), ponieważ obniżają one poziom cukru we krwi. You increase the risk of diabetic ketoacidosis (DKA) due to reduced insulin delivery and hypoglycemia due to lowered blood sugar levels. 
```

```{admonition} Disclaimer
:class: note

- Wszystkie informacje i kod opisane tutaj służą wyłącznie celom informacyjnym i edukacyjnym. Używaj [Nightscout](https://nightscout.github.io/) i **AAPS** na własne ryzyko i nie używaj informacji lub kodu do podejmowania decyzji medycznych. Nightscout obecnie nie podejmuje prób zachowania zgodności z zasadami ochrony prywatności HIPAA. 
- Korzystanie z kodu pobranego ze strony github.com nie jest objęte żadną gwarancją ani formalnym wsparciem. Szczegóły znajdziesz w pliku LICENSE tego repozytorium.
- Wszystkie nazwy produktów i firm, znaki handlowe, znaki serwisowe, zastrzeżone znaki handlowe i zastrzeżone znaki serwisowe są własnością ich odpowiednich właścicieli. Ich wykorzystanie służy celom informacyjnym i nie oznacza żadnego powiązania z nimi ani poparcia.

**AAPS** nie jest powiązany z następującymi firmami ani przez nie popierany: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/), [Medtronic](https://www.medtronic.com/), [Diaconn](https://www.diaconn.com/en/index.html), [EOFlow](http://www.eoflow.com/), [MicroTech Medical (Equil)](https://www.microtechmd.com/), [Medtrum](https://www.medtrum.com/), [Senseonics (Eversense)](https://www.senseonics.com/), [i-SENS (CareSens)](https://i-sens.com/), [POCTech](https://poctechcorp.com/en/), [Ottai](https://ottai.com/) ani [Syai](https://www.syai.com/).

```

(index-aaps-documentation-index)=

## Spis treści dokumentacji AAPS

```{toctree}
:caption: Korzystanie z tej dokumentacji

Zmiana języka i wersji <./NavigateDoc/ChangeLanguageVersion.md>
Wyszukiwanie w dokumentacji <./NavigateDoc/SearchDoc.md>
Aktualizacje i zmiany w dokumentacji <./Maintenance/DocumentationUpdate.md>
```
```{toctree}
:caption: 1) Pierwsze kroki

Wprowadzenie do APS i AAPS <./Getting-Started/Introduction.md>
Przygotowanie do rozpoczęcia pracy z AAPS <./Getting-Started/PreparingForAaps.md>
Przegląd komponentów <./Getting-Started/ComponentOverview.md>
- Kompatybilne pompy <./Getting-Started/CompatiblePumps.md>
- Kompatybilne systemy CGM <./Getting-Started/CompatiblesCgms.md>
- Telefony  <./Getting-Started/Phones.md>
- Smartwatche i AAPS  <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 2) Zbuduj aplikację

Osobne konto Google dla AAPS (opcjonalnie) <./UsefulLinks/DedicatedGoogleAccountForAaps.md>
Budowanie AAPS <./SettingUpAaps/BuildingAaps.md>
- Budowanie w przeglądarce <./SettingUpAaps/BrowserBuild.md>
- Budowanie w Android Studio <./SettingUpAaps/ComputerBuild.md>
- Instrukcja budowania z wiersza poleceń <./SettingUpAaps/CLIBuild.md>
Przenoszenie i instalacja AAPS na smartfonie <./SettingUpAaps/TransferringAndInstallingAaps.md>
```
```{toctree}
:caption: 3) Konfiguracja serwera raportów

Konfiguracja serwera raportów <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
```
```{toctree}
:caption: 4) Konfiguracja AAPS

Kreator konfiguracji AAPS <./SettingUpAaps/SetupWizard.md>
Twój profil AAPS <./SettingUpAaps/YourAapsProfile.md>
Zmiana konfiguracji AAPS <./SettingUpAaps/ChangeAapsConfiguration.md>
- Konfiguracja (Config Builder) <./SettingUpAaps/ConfigBuilder.md>
- Ustawienia (Preferencje) <./SettingUpAaps/Preferences.md>
Ukończenie zadań <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 5) Życie codzienne z AAPS

Ekrany AAPS <./DailyLifeWithAaps/AapsScreens.md>
Najważniejsze funkcje AAPS <./DailyLifeWithAaps/KeyAapsFeatures.md>
Obliczanie COB <./DailyLifeWithAaps/CobCalculation.md>
Detekcja wrażliwości (sensitivity) <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
Dynamiczny ISF (DynISF) <./DailyLifeWithAaps/DynamicISF.md>
Zmiana profilu i procent profilu <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Cele tymczasowe <./DailyLifeWithAaps/TempTargets.md>
Przedłużone węglowodany / „eCarbs” <./DailyLifeWithAaps/ExtendedCarbs.md>
Szybki kalkulator (bolusy jednym dotknięciem) <./DailyLifeWithAaps/QuickWizards.md>
Sceny (ustawienia dla sytuacji) <./DailyLifeWithAaps/Scenes.md>
Automatyzacja <./DailyLifeWithAaps/Automations.md>
QuickLaunch (pasek szybkich akcji na ekranie głównym) <./DailyLifeWithAaps/QuickLaunch.md>
Widżety na ekranie głównym <./DailyLifeWithAaps/Widgets.md>
Żywność (Twoja baza produktów) <./DailyLifeWithAaps/Food.md>
Wyszukiwanie globalne <./DailyLifeWithAaps/GlobalSearch.md>
Przegląd danych <./Maintenance/Reviewing.md>
AAPS dla dzieci <./DailyLifeWithAaps/AapsForChildren.md>
Pompy i kaniule <./DailyLifeWithAaps/PumpsAndCannulas.md>
Zmiana strefy czasowej i czas letni <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) Funkcje zdalne AAPS

Zdalny monitoring <./RemoteFeatures/RemoteMonitoring.md>
Obserwowanie AAPS (bez interakcji z systemem AAPS) <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>
Zdalne sterowanie AAPS <./RemoteFeatures/RemoteControl.md>
Aplikacja AAPSClient <./RemoteFeatures/AapsClient.md>
Sterowanie Master ↔ Client <./RemoteFeatures/ClientMasterControl.md>
Polecenia SMS <./RemoteFeatures/SMSCommands.md>

```
```{toctree}
:caption: 7) Smartwatche z Wear OS

Budowanie aplikacji AAPS na zegarek (Wear) <./WearOS/BuildingAapsWearOS.md>
Smartwatch z Wear OS <./WearOS/WearOsSmartwatch.md>
Obsługa AAPS ze smartwatcha z Wear OS <./RemoteFeatures/RemoteControlWearOS.md>
Dokumentacja własnych tarcz zegarka (Custom Watchface) <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Wymiana własnych tarcz zegarka <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 8) Konserwacja AAPS

Tworzenie i przywracanie kopii zapasowych <./Maintenance/ExportImportSettings.md>
Informacje o wersji <./Maintenance/ReleaseNotes.md>
Co zmieniło się w AAPS v4 <./Maintenance/V4Changes.md>
Aktualizacja do nowej wersji lub innej gałęzi <./Maintenance/UpdateToNewVersion.md>
- Aktualizacja w przeglądarce (fork) <./Maintenance/UpdateBrowserBuild.md>
- Aktualizacja w Android Studio <./Maintenance/UpdateComputerBuild.md>
Koniec wsparcia <./Maintenance/EndOfLife.md>

```

```{toctree}
:caption: 9) Pomoc i rozwiązywanie problemów

Gdzie mogę uzyskać pomoc? <./GettingHelp/WhereCanIGetHelp.md>
Ogólne rozwiązywanie problemów <./GettingHelp/GeneralTroubleshooting.md>
- Rozwiązywanie problemów z Bluetooth <./GettingHelp/BluetoothTroubleshooting.md>
- Wskazówki dotyczące rozwiązywania problemów z NSClient <./GettingHelp/TroubleshootingNsClient.md>
- Rozwiązywanie problemów z Android Studio <./GettingHelp/TroubleshootingAndroidStudio.md>
- Budowanie w przeglądarce: rozwiązywanie problemów <./GettingHelp/BrowserBuildTroubleshooting.md>
- Ponowna instalacja AAPS z nowym magazynem kluczy <./GettingHelp/ReinstallAaps.md>
- Dostęp do plików logów <./GettingHelp/AccessingLogFiles.md>
FAQ dla osób korzystających z pętli <./UsefulLinks/FAQ.md>
```

```{toctree}
:caption: 10) Zaawansowane opcje AAPS

W pełni zamknięta pętla <./AdvancedOptions/FullClosedLoop.md>
Dostrajanie profilu AAPS <./GettingHelp/ProfileTuning.md>
Autotune <./AdvancedOptions/Autotune.md>
Stężenie insuliny <./AdvancedOptions/InsulinConcentration.md>
Gałąź rozwojowa (dev) <./AdvancedOptions/DevBranch.md>
Budowanie w przeglądarce: przeniesienie commita (cherry-pick) <./AdvancedOptions/BrowserBuildCherryPick.md>

```
```{toctree}
:caption: 11) Jak wspierać AAPS

Jak pomóc w rozwoju AAPS <./SupportingAaps/HowCanIHelp.md>
Jak edytować dokumentację <./SupportingAaps/HowToEditTheDocs.md>
Jak przetłumaczyć teksty dla aplikacji AAPS lub dokumentacji <./SupportingAaps/Translations.md>
Stan tłumaczenia aplikacji i dokumentacji <./SupportingAaps/StateOfTranslations.md>
Open Humans Uploader <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 12) Zasoby

Słowniczek pojęć <./UsefulLinks/Glossary.md>
Przydatne materiały zanim zaczniesz <./UsefulLinks/BackgroundReading.md>
Dla lekarzy – ogólne wprowadzenie i przewodnik po AAPS <./UsefulLinks/ClinicianGuideToAaps.md>
```
