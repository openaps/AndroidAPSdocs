# Budowanie aplikacji AAPS na zegarek (Wear)

Aplikacja **AAPS** na smartwatch z Wear OS (**Wear apk**, `aaps-wear-….apk`) to osobny plik instalacyjny, inny niż aplikacja **AAPS** na telefon. Potrzebujesz obu: aplikacja na telefonie prowadzi pętlę, a aplikacja na zegarku pokazuje jej dane i może wysyłać do niej polecenia. Aplikację na zegarek instalujesz z telefonu, zobacz [Smartwatch z Wear OS](WearOsSmartwatch.md).

Obie aplikacje działają razem tylko wtedy, gdy do siebie pasują:

- **Ta sama wersja AAPS** na telefonie i na zegarku.
- **Ten sam magazyn kluczy (keystore)** do podpisania obu aplikacji.

Najprościej zapewnić to, gdy zbudujesz obie aplikacje **w tym samym czasie**, w jednym budowaniu. Budowanie w przeglądarce robi to za Ciebie: każde budowanie tworzy razem plik apk na telefon i Wear apk. W Android Studio lub w wierszu poleceń budujesz Wear apk jako drugi krok, zaraz po pliku apk na telefon.

```{note}
Używasz już **AAPS** na telefonie, ale nie masz Wear apk z tego samego budowania? Zbuduj ponownie obie aplikacje z tym samym magazynem kluczy i zainstaluj ponownie także aplikację na telefon. Wear apk zbudowany kilka miesięcy później albo w innej wersji Android Studio najpewniej nie będzie zgodny z aplikacją na telefonie.
```

## Obsługiwane wersje Wear OS

**AAPS** działa na zegarkach z **Wear OS 3.0, 3.2 lub 3.5** (Android 11, poziom API 30) **lub nowszym** (Wear OS 4, 5 i 6). Zegarki z Wear OS 2 nie są obsługiwane.

```{warning}
Tarcze zegarka AAPS są dostępne na smartwatche z Wear OS z poziomem API od 30 do 33 (Wear OS 3.0, 3.2, 3.5 i 4).<br>
Nowsze wersje Wear OS coraz bardziej psują tarcze zegarka AAPS — zobacz [Zmiany tarcz zegarka w Wear OS](#wearos-watchface-changes) i [Ograniczenia Wear OS 5](#BuildingAapsWearOs-WearOS5).
```

(building-aaps-wear-os-method)=

## Pobierz Wear apk w swojej metodzie budowania

Przejdź do sekcji dla metody, której używasz do [budowania AAPS](../SettingUpAaps/BuildingAaps.md).

(building-aaps-wear-os-browser)=

### Budowanie w przeglądarce (zalecane)

**Nie musisz nic więcej robić.** Każde budowanie w przeglądarce tworzy dwa pliki z tego samego kodu źródłowego i z tym samym magazynem kluczy:

- `aaps-….apk`: aplikacja na telefon.
- `aaps-wear-….apk`: aplikacja na zegarek.

Wear apk odpowiada [wariantowi](#browserbuild-variant) wybranemu do budowania: `fullRelease` daje aplikację **AAPS Wear**, `aapsclientRelease` aplikację **AAPSClient Wear**, a `pumpcontrolRelease` aplikację **PumpControl Wear**. Każda aplikacja Wear komunikuje się tylko z pasującą do niej aplikacją na telefon.

Gdzie znaleźć Wear apk:

- **AAPS Builder**: on the build page, scroll down to **Artifacts** and download `aaps-wear-….apk` next to the phone app, as shown in [Step 5 – Install the app on your phone](#aaps-builder-step5). Pobierz go na telefon z **AAPS**, jeśli instalujesz aplikację na zegarek z telefonu (Wear Installer 2 lub Easy Fire Tools), albo na komputer, jeśli używasz ADB.

  ![Artifacts z aplikacją na telefon i na zegarek](../images/Building-the-App/CI/AapsBuilder52_Artifacts.png)

- **Fork z Dyskiem Google**: otwórz swój Dysk Google, folder `AAPS`, a potem folder zbudowanej wersji. Znajdziesz w nim plik apk na telefon i Wear apk, zobacz [Krok 4 – Zbuduj plik APK](#github-build-apk).

  ![Lokalizacja na Dysku Google](../images/update/CI/GitHubActions5.png)

Przechowuj Wear apk razem z plikiem apk na telefon w swoich kopiach zapasowych. W **AAPS Builder** pliki zostają na stronie budowania tylko przez 14 dni.

Dalej: zainstaluj Wear apk na zegarku, zobacz [Smartwatch z Wear OS](WearOsSmartwatch.md).

(building-aaps-wear-os-android-studio)=

### Android Studio

Wear apk buduje się tak samo jak plik apk na telefon, jako drugie podpisane budowanie. Zrób to zaraz po pliku apk na telefon, w tej samej wersji Android Studio i z tym samym magazynem kluczy.

- Postępuj zgodnie z instrukcją [Budowanie w Android Studio](../SettingUpAaps/ComputerBuild.md).
- Gdy dojdziesz do [wyboru modułu](#Building-APK-wearapk) w kroku „Zbuduj podpisany plik apk AAPS”, wybierz **`AndroidAPS.wear`**.

![Moduł Wear](../images/Building-the-App/wear_build1.png)

Wybierz „**fullRelease**”, aby wygenerować plik apk **AAPS** Wear.

![Moduł Wear](../images/Building-the-App/wear_build2.png)

Jeśli wolisz, możesz zamiast tego wybrać z listy rozwijanej **„pumpcontrolRelease”**. Ta wersja pozwala tylko na zdalne sterowanie pompą, bez pętli.

Dalej: zainstaluj Wear apk na zegarku, zobacz [Smartwatch z Wear OS](WearOsSmartwatch.md).

(building-aaps-wear-os-troubleshooting)=

#### Rozwiązywanie problemów z budowaniem w Android Studio

Podczas budowania pełnej aplikacji **AAPS** (i w zasadzie każdej podpisanej aplikacji) Android Studio tworzy plik .json w tym samym folderze. Powoduje to potem błędy [niezatwierdzonych zmian (uncommitted changes)](#troubleshooting_androidstudio-uncommitted-changes), gdy próbujesz zbudować następną podpisaną aplikację, np. aplikację **AAPS** na zegarek. Najszybciej rozwiążesz ten problem, gdy przejdziesz do folderu, w którym zbudowano pełną aplikację AAPS. Twój folder to prawdopodobnie coś takiego:

`C:\Users\Your Name\AndroidStudioProjects\AndroidAPS\app\aapsclient\release.`

Usuń niepotrzebny plik .json albo przenieś go poza ten folder. Potem spróbuj ponownie zbudować aplikację **AAPS** na zegarek. Jeśli to nie pomoże, bardziej szczegółowy [poradnik rozwiązywania problemów](../GettingHelp/TroubleshootingAndroidStudio.md) pomoże Ci znaleźć plik, który powoduje problem. Może to być też plik Twojego magazynu kluczy.

(building-aaps-wear-os-cli)=

### Wiersz poleceń

Postępuj według strony [Instrukcja budowania z wiersza poleceń](../SettingUpAaps/CLIBuild.md) i powtórz kroki kompilacji i podpisywania dla modułu `wear`, z tym samym magazynem kluczy:

```sh
./gradlew :wear:assembleFullRelease
```

Niepodpisany Wear apk zostaje zapisany w `wear/build/outputs/apk/full/release/`. Podpisz go narzędziem `apksigner` dokładnie tak samo jak plik apk na telefon, a potem zainstaluj go na zegarku, zobacz [Smartwatch z Wear OS](WearOsSmartwatch.md).
