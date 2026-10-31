# Przenoszenie i instalacja AAPS na smartfonie

W poprzedniej sekcji, [Budowanie **AAPS**](../SettingUpAaps/BuildingAaps.md), aplikacja **AAPS** (plik .apk) została zbudowana na komputerze.

Kolejne kroki to **przeniesienie** pliku APK **AAPS** (a także innych potrzebnych aplikacji, np. BYODA, xDrip lub innej aplikacji odbiornika CGM) na smartfon z Androidem, a potem **instalacja** tych aplikacji. Po zainstalowaniu **AAPS** na smartfonie możesz przejść do [**konfiguracji pętli AAPS**](../SettingUpAaps/SetupWizard.md).

Ta strona wyjaśnia też [weryfikację deweloperów Androida](#android-developer-verification). To zmiana, którą Google wprowadza od września 2026 r. Wpływa ona na instalację samodzielnie zbudowanych aplikacji. Strona opisuje też [darmowe metody instalacji](#android-developer-verification-free-methods), które działają także po tej zmianie.

```{contents} Table of contents
:depth: 1
:local: true
```

## Instalacja AAPS przez dotknięcie pliku APK

Obecnie instalujesz **AAPS**, przenosząc plik APK na telefon i otwierając go (dotykając go). Plik APK **AAPS** możesz przenieść z komputera na smartfon na kilka sposobów. Tutaj opisujemy dwa różne sposoby:

* Opcja 1 -  Użyj Dysku Google (Gdrive)
* Opcja 2 -  Użyj kabla USB

Pamiętaj, że przesyłanie przez e-mail może sprawiać problemy i nie jest zalecane.

```{admonition} Android developer verification
:class: warning
Google wprowadza [weryfikację deweloperów Androida](#android-developer-verification) od września 2026 r. (najpierw w Brazylii, Indonezji, Singapurze i Tajlandii; na całym świecie w 2027 r.). Tam, gdzie ta zasada obowiązuje, instalacja pliku APK przez dotknięcie pliku — tak jak w obu opcjach poniżej — jest zablokowana. W takim przypadku użyj jednej z [darmowych metod instalacji](#android-developer-verification-free-methods) opisanych niżej na tej stronie.
```

### Opcja 1. Przenieś pliki przez Dysk Google

Otwórz [Google.com](https://www.google.com/) w przeglądarce i zaloguj się na swoje konto Google.

W prawym górnym rogu wybierz w menu Google aplikację Dysk.

![Uruchom aplikację Dysk Google](../images/GoogleDriveInWebbrowser.png)

Kliknij **Nowy** w lewym górnym rogu (albo kliknij prawym przyciskiem myszy puste miejsce pod plikami i folderami) i wybierz **Prześlij plik**.

![Wysyłanie pliku apk przez aplikację Dysk Google](../images/GoogleDriveUploadFile.png)

Plik apk powinien być teraz przesłany na Dysk Google.

#### Użyj aplikacji Dysk Google, aby uruchomić instalację pliku apk

Przejdź do telefonu i uruchom aplikację Dysk Google. Jest to aplikacja zainstalowana fabrycznie. Znajdziesz ją tam, gdzie inne aplikacje Google, albo wyszukując jej nazwę.

![uruchom aplikację Dysk Google](../images/GoogleDriveMobileAPPLaunch.png)

Uruchom instalację pliku apk, dotykając nazwy pliku w aplikacji Dysk Google na telefonie.

![uruchom instalację pliku apk](../images/GoogleDriveMobileUploadedAPK.png)

Jeśli zobaczysz ostrzeżenie, że teraz nie możesz instalować aplikacji z Dysku Google, dotknij „Ustawienia” i zezwól na to na chwilę. Potem znowu to zablokuj, bo stale włączona opcja jest zagrożeniem dla bezpieczeństwa.

![Ostrzeżenie bezpieczeństwa Dysku Google](../images/GoogleDriveMobileMissingSecuritySetting.png)

![Ostrzeżenie bezpieczeństwa Dysku Google](../images/GoogleDriveMobileSettingSecuritySetting.png)

Po zakończeniu instalacji ten krok jest gotowy.

Powinna być widoczna ikona **AAPS** i możesz otworzyć aplikację.

```{warning}
**WAŻNA INFORMACJA DOTYCZĄCA BEZPIECZEŃSTWA**
Czy pamiętasz, aby z powrotem zablokować instalację z Dysku Google?
```

Przejdź teraz do [konfiguracji pętli AAPS](../SettingUpAaps/SetupWizard.md).

### Opcja 2. Przenieś pliki kablem USB

Drugi sposób przeniesienia pliku apk AAPS to [kabel USB](https://support.google.com/android/answer/9064445?hl=en).

Przenieś plik z jego miejsca na komputerze do folderu „downloads” (Pobrane) na telefonie.

Na telefonie musisz zezwolić na instalację z nieznanych źródeł. Opisy, jak to zrobić, znajdziesz w internecie (_np._ [tutaj](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) lub [tutaj](https://www.androidcentral.com/unknown-sources)).

Gdy przeciągniesz plik na telefon, otwórz na telefonie folder „Pobrane” (Downloads) i naciśnij plik apk AAPS:

![Plik apk w folderze Pobrane](../images/install/install_01_downloads_apk.png)

Za pierwszym razem Android poinformuje Cię, że telefon nie może instalować nieznanych aplikacji z tego źródła. Naciśnij „**Ustawienia**”:

![Ostrzeżenie bezpieczeństwa dla nieznanych aplikacji](../images/install/install_02_unknown_apps_notice.png)

Włącz „**Zezwalaj z tego źródła**”, a potem wróć:

![Włączone „Zezwalaj z tego źródła”](../images/install/install_04_unknown_apps_allowed.png)

Naciśnij znowu plik apk i wybierz „**Zainstaluj**”:

![Okno instalacji](../images/install/install_05_install_prompt.png)

Po zakończeniu instalacji naciśnij „**Otwórz**”, aby uruchomić **AAPS**, albo „**Gotowe**”, aby otworzyć go później:

![Aplikacja zainstalowana](../images/install/install_07_app_installed.png)

```{warning}
**WAŻNA INFORMACJA DOTYCZĄCA BEZPIECZEŃSTWA**
Pamiętaj, aby po instalacji znowu wyłączyć „Zezwalaj z tego źródła”, bo stale włączona opcja jest zagrożeniem dla bezpieczeństwa.
```

Przejdź teraz do [konfiguracji pętli AAPS](../SettingUpAaps/SetupWizard.md).

(transferring-installing-play-protect-warning)=
## Ostrzeżenie Google Play Protect

Podczas instalacji **AAPS** Google Play Protect może ostrzec, że aplikacja jest niebezpieczna, została zbudowana dla starszej wersji Androida i nie ma najnowszych zabezpieczeń prywatności.

![Ostrzeżenie Google Play Protect](../images/troubleshooting/InstallGPP.png)

To normalne dla aplikacji, którą zbudowałeś samodzielnie. Dotknij **Więcej szczegółów**, a potem **Zainstaluj mimo to**.

Jeśli instalacja jest **zablokowana** z komunikatem o niezweryfikowanym deweloperze (a nie tylko ostrzeżeniem), zobacz [Weryfikacja deweloperów Androida](#android-developer-verification) poniżej.

(android-developer-verification)=

## Weryfikacja deweloperów Androida

Google wprowadza **weryfikację deweloperów Androida**: na większości telefonów z Androidem aplikacje będą się instalować tylko wtedy, gdy zweryfikowany deweloper zarejestrował je w Google. Dotyczy to też aplikacji instalowanych z pliku APK („sideloading”) — a właśnie tak instalujesz samodzielnie zbudowaną aplikację **AAPS**.

### Co się zmienia

Gdy instalujesz **AAPS** na telefonie z usługami Google („certyfikowane” urządzenie z Androidem — praktycznie każdy telefon sprzedawany ze Sklepem Play), Android sprawdzi, czy aplikacja pochodzi od dewelopera zarejestrowanego w Google. Jeśli nie, zwykła instalacja przez dotknięcie pliku APK zostanie zablokowana.

**Sprawdzenie odbywa się podczas instalacji lub aktualizacji aplikacji.** Nie usuwa ono aplikacji, które są już zainstalowane i działają.

Google wprowadza to stopniowo:

| Kiedy            | Co się dzieje                                                                                                                                                                    |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sierpień 2026    | Darmowe konta deweloperskie „ograniczonej dystrybucji” (limited distribution) są dostępne na całym świecie, a „zaawansowana ścieżka” (advanced flow) zaczyna trafiać na telefony |
| 30 września 2026 | Weryfikacja obowiązuje w **Brazylii, Indonezji, Singapurze i Tajlandii** dla aplikacji instalowanych z Google Play i kilku innych sklepów z aplikacjami                          |
| 2027             | Weryfikacja obejmuje **resztę świata** i **wszystkie instalacje**, także z plików APK                                                                                            |

Szczegóły Google publikuje na stronach [Android developer verification](https://developer.android.com/developer-verification), razem z [FAQ](https://developer.android.com/developer-verification/guides/faq). Google może jeszcze zmienić daty i szczegóły; ta strona będzie aktualizowana w miarę wprowadzania zmian.

### Czy to mnie dotyczy?

- **Budowanie AAPS w ogóle się nie zmienia.** [Budowanie w przeglądarce](#browser-build), [budowanie w Android Studio](ComputerBuild.md) i [budowanie z wiersza poleceń (CLI)](CLIBuild.md) działają dokładnie tak jak wcześniej, a Twój magazyn kluczy (keystore) się nie zmienia.
- **Twój obecny AAPS dalej działa.** Weryfikacja jest sprawdzana tylko podczas instalacji lub aktualizacji aplikacji.
- **Jeśli mieszkasz w Brazylii, Indonezji, Singapurze lub Tajlandii:** od 30 września 2026 r. weryfikacja obowiązuje dla aplikacji instalowanych z Google Play i kilku innych sklepów z aplikacjami. Google podaje, że bezpośrednia instalacja pliku APK nie jest objęta tym pierwszym etapem, więc **AAPS** powinien instalować się jak zwykle. Mimo to przygotuj już teraz jedną z [darmowych metod instalacji](#android-developer-verification-free-methods) opisanych poniżej, aby nie zaskoczyła Cię zmiana tej zasady.
- **Jeśli mieszkasz w innym kraju:** do 2027 r. nic się dla Ciebie nie zmienia i na razie możesz nic nie robić. Ale przygotuj jedną z [darmowych metod instalacji](#android-developer-verification-free-methods) poniżej, gdy wszystko jeszcze działa. Najgorszy moment na odkrycie blokady to dzień, w którym aktualizacja zostanie odrzucona, a przed Tobą jest jeszcze 24-godzinne czekanie w [zaawansowanej ścieżce](#android-developer-verification-advanced-flow).
- **Stare telefony:** weryfikacja dotyczy telefonów z Androidem 7 lub nowszym, czyli każdego telefonu, na którym działa **AAPS**.

(android-developer-verification-free-methods)=

## Darmowe sposoby instalacji AAPS

**Nie** musisz nic płacić Google, aby dalej używać **AAPS**. Jest kilka darmowych metod; wybierz tę, która pasuje do Twojej sytuacji.

```{admonition} Which method should I use?
:class: tip
- Masz **komputer** (bez względu na to, jak budujesz **AAPS**): użyj [ADB](#android-developer-verification-adb) albo, jeśli wolisz uniknąć wiersza poleceń, [instalatora webowego](#android-developer-verification-web). Obie metody nie podlegają weryfikacji, nie mają limitów i nie wymagają konta Google.
- **Nie masz komputera**: użyj [zaawansowanej ścieżki](#android-developer-verification-advanced-flow) na telefonie.
- Wolisz zarejestrować się w Google, aby zwykła instalacja przez dotknięcie pliku APK dalej działała: istnieje [darmowe konto ograniczonej dystrybucji](#android-developer-verification-limited-account), ale nie zostało jeszcze przetestowane z **AAPS**.
```

(android-developer-verification-adb)=

### Opcja 1: Instalacja przez ADB (potrzebny komputer)

ADB (Android Debug Bridge) to oficjalne narzędzie Google do instalowania aplikacji z komputera na telefon przez kabel USB. Google potwierdziło, że **aplikacje instalowane przez ADB nie wymagają weryfikacji** — nie ma czasu oczekiwania, limitu urządzeń ani rejestracji.

Jednorazowe przygotowanie:

1. Na telefonie włącz ukryte opcje programisty: wejdź w **Ustawienia** > **Informacje o telefonie** (na niektórych telefonach **Informacje o oprogramowaniu**) i dotknij **Numer kompilacji** siedem razy, aż telefon potwierdzi, że jesteś deweloperem.
1. Wróć do głównych **Ustawień**, otwórz nową pozycję **Opcje programisty** i włącz **Debugowanie USB**.
1. Na komputerze sprawdź, czy ADB jest dostępne:
   - Jeśli używasz **Android Studio**, ADB jest już zainstalowane razem z nim.
   - W przeciwnym razie pobierz darmowe [SDK Platform Tools](https://developer.android.com/tools/releases/platform-tools) od Google i rozpakuj folder. Nie trzeba niczego instalować; ADB to program `adb` w tym folderze.

Instalacja (a później aktualizacja) **AAPS**:

1. Podłącz telefon do komputera kablem USB. Nie musisz najpierw przenosić pliku APK na telefon: ADB wysyła go prosto z komputera.
1. Na telefonie zaakceptuj komunikat **Zezwolić na debugowanie USB?** (tylko za pierwszym razem).
1. Na komputerze otwórz terminal (wiersz poleceń) w folderze, w którym jest ADB i plik APK **AAPS**, i uruchom:

   ```
   adb install -r app-full-release.apk
   ```

   Zamień `app-full-release.apk` na prawdziwą nazwę Twojego pliku APK. Opcja `-r` aktualizuje już zainstalowany **AAPS** i zachowuje wszystkie jego dane i ustawienia.

1. Poczekaj, aż pojawi się `Success`. **AAPS** jest teraz zainstalowany na Twoim telefonie.

Tego samego polecenia używasz przy każdej kolejnej aktualizacji. [Strony o Wear OS](../WearOS/WearOsSmartwatch.md) już używają ADB w ten sam sposób do instalacji aplikacji na zegarek.

Jeśli nie chcesz używać kabla: na Androidzie 11 i nowszym **Debugowanie bezprzewodowe** (również w **Opcjach programisty**) robi to samo przez Wi-Fi, po jednorazowym sparowaniu kodem pokazanym na telefonie.

(android-developer-verification-web)=

### Opcja 2: Instalacja ze strony internetowej (komputer, bez wiersza poleceń)

Jeśli wiersz poleceń nie jest dla Ciebie, strona internetowa może zrobić dokładnie to samo co ADB, prosto z przeglądarki. Ponieważ łączy się z telefonem tym samym mechanizmem co ADB, ma **to samo zwolnienie z weryfikacji** — ale nie trzeba niczego pobierać, rozpakowywać folderu ani wpisywać poleceń.

To najprostsza droga, jeśli używasz [budowania w przeglądarce](#browser-build) i nigdy nie otwierałeś wiersza poleceń.

1. Włącz **Debugowanie USB** na telefonie (kroki 1 i 2 [metody ADB](#android-developer-verification-adb) powyżej — jednorazowa konfiguracja).
1. Otwórz **[Instalator webowy AAPS](#web-installer)** w przeglądarce.
1. Podłącz telefon kablem USB i postępuj według instrukcji na stronie: połącz, wybierz plik APK i zainstaluj.

Trzy ważne rzeczy:

- Działa tylko w **Chrome, Edge lub Opera**. Firefox i Safari nie mogą łączyć się z urządzeniami USB.
- Z połączenia ADB telefonu może korzystać tylko jeden program naraz, więc przed połączeniem **zamknij Android Studio** (lub inny program, który używa ADB).
- Strona internetowa połączona w ten sposób ma pełną kontrolę nad Twoim telefonem. **Używaj tylko adresu podanego powyżej**, z dokumentacji **AAPS** — nigdy strony instalatora znalezionej w wyszukiwarce. Instalator webowy **AAPS** działa w całości w Twojej przeglądarce: Twój plik APK nie jest nigdzie wysyłany.

```{admonition} No computer? A second phone works too
:class: tip
Instalator webowy działa też z **Chrome na innym telefonie z Androidem** przez kabel USB-C – USB-C — rodzic może więc zainstalować **AAPS** na telefonie dziecka bez komputera w domu.
```

(android-developer-verification-advanced-flow)=

### Opcja 3: „Zaawansowana ścieżka” (advanced flow) na telefonie (bez komputera)

Google daje doświadczonym użytkownikom, którzy rozumieją ryzyko instalowania niezweryfikowanych aplikacji, wyjście awaryjne. Nazywa się ono **zaawansowaną ścieżką** (advanced flow). Google zaczęło wprowadzać ją na telefony w sierpniu 2026 r., przed obowiązkową weryfikacją, więc możesz ją skonfigurować już teraz. To jednorazowa konfiguracja na samym telefonie, która **trwa 24 godziny**:

1. Włącz ukryte opcje programisty (zobacz krok 1 metody ADB powyżej), a potem otwórz **Ustawienia** > **Opcje programisty** > **Aplikacje od niezweryfikowanych deweloperów** (Apps from unverified developers).
1. Włącz **Zezwalaj na aplikacje od niezweryfikowanych deweloperów** (Allow apps from unverified developers). Telefon poprosi o blokadę ekranu, aby potwierdzić, że to Ty.
1. Telefon zapyta, czy ktoś prosi Cię o włączenie tego ustawienia, i wyjaśni, że bank, urząd ani policja nigdy nie poproszą Cię o to. Przeczytaj ostrzeżenie i potwierdź, że nikt Cię nie naciska ani nie prowadzi (to ochrona przed oszustami).
1. **Uruchom ponownie telefon.** To rozpoczyna jednorazowy **24-godzinny czas oczekiwania**.
1. Po 24 godzinach wróć do **Ustawienia** > **Opcje programisty** > **Aplikacje od niezweryfikowanych deweloperów**, aby zakończyć konfigurację.
1. Wybierz, czy zezwolić na niezweryfikowane aplikacje przez **7 dni**, czy **bezterminowo**. Dla **AAPS** wybierz **bezterminowo**, w przeciwnym razie Twoja następna aktualizacja zostanie zablokowana po upływie 7 dni.

Po tej konfiguracji instalacja lub aktualizacja pliku APK **AAPS** działa tak jak dziś, z jednym dodatkowym ostrzeżeniem, że aplikacja pochodzi od niezweryfikowanego dewelopera — dotknij **Zainstaluj mimo to**.

Warto wiedzieć:

- Możesz potem znowu wyłączyć **Opcje programisty**: zaawansowana ścieżka pozostaje włączona. Google nie daje też aplikacjom (np. aplikacjom bankowym) żadnej możliwości sprawdzenia, czy zaawansowana ścieżka jest włączona.
- Jeśli wyłączysz zaawansowaną ścieżkę, instalacja **lub aktualizacja** **AAPS** znowu będzie zablokowana (zainstalowany **AAPS** dalej działa). Masz 10 minut, aby ją z powrotem włączyć; potem 24-godzinny czas oczekiwania zaczyna się od nowa.
- Zmiana zegara w telefonie nie skraca czasu oczekiwania, a ADB nie może go pominąć.
- Google podaje, że Twój wybór jest przypisany do konta Google i przenosi się na Twoje inne urządzenia, więc nowy telefon nie powinien oznaczać kolejnych 24 godzin czekania.
- Jeśli nie możesz znaleźć **Aplikacje od niezweryfikowanych deweloperów** w opcjach programisty, Twój telefon jeszcze nie dostał tej funkcji. Dostarcza ją składnik systemu o nazwie **Android Developer Verifier**, który Google stopniowo udostępnia przez Sklep Play. Możesz to przyspieszyć, otwierając **Android Developer Verifier** w Sklepie Play.

```{note}
Google opisuje to jako pierwszą wersję i może jeszcze zmienić ekrany i kroki; ta sekcja zostanie uzupełniona o zrzuty ekranu, gdy będzie dostępna wersja końcowa.
```

(android-developer-verification-limited-account)=

### Opcja 4: Rejestracja w Google (darmowe konto ograniczonej dystrybucji)

Google oferuje **darmowy** typ konta deweloperskiego dla hobbystów i do użytku osobistego. Nazywa się ono **kontem ograniczonej dystrybucji** (limited distribution account) i od sierpnia 2026 r. jest dostępne dla wszystkich:

- **Bez dowodu tożsamości** i **bez opłaty** (w przeciwieństwie do płatnego konta deweloperskiego, które nie jest potrzebne do osobistego używania **AAPS**). Potrzebujesz jednak konta Google z weryfikacją dwuetapową, profilu płatności Google z Twoim imieniem, nazwiskiem i adresem oraz kontaktowego adresu e-mail.
- Rejestrujesz nazwę pakietu swojej aplikacji w Google Android Developer Console i autoryzujesz telefony, na których można ją zainstalować, maksymalnie **20 urządzeń**. Autoryzacja odbywa się przez połączenie telefonu z konsolą kodem QR lub linkiem.
- Po rejestracji zwykła instalacja (przez dotknięcie pliku APK) znowu działa na autoryzowanych telefonach, bez ADB i bez zaawansowanej ścieżki.
- Konto ograniczonej dystrybucji można później zmienić na pełne konto, ale nie odwrotnie.

```{warning}
Google nie wyjaśniło, jak działa rejestracja, gdy wiele osób buduje tę samą aplikację open source: każdy samodzielnie zbudowany **AAPS** ma tę samą nazwę pakietu (`info.nightscout.androidaps`) z innym kluczem podpisu, a FAQ Google mówi, że nazwy pakietu używanej już przez innych nie można po prostu przejąć i wymaga ona dodatkowej weryfikacji. Wynik takiej weryfikacji jest nieznany, a płatne konto deweloperskie (25 USD i dowód tożsamości) tu nie pomaga: opłata usuwa tylko limit 20 urządzeń, a nie weryfikację nazwy pakietu.

Z tego powodu nie można jeszcze napisać instrukcji krok po kroku. Ta sekcja zostanie uzupełniona, gdy rejestracja zostanie przetestowana z **AAPS**. Do tego czasu ADB, instalator webowy i opisana wyżej zaawansowana ścieżka są niezawodnymi alternatywami.
```

## Co się nie zmienia

- Samodzielne budowanie **AAPS** każdą z trzech [metod budowania](BuildingAaps.md).
- Twoje konto GitHub, Twoje repozytorium do budowania (AAPS Builder) lub fork oraz Twój magazyn kluczy (keystore).
- Twoja zainstalowana aplikacja **AAPS**, Twoje ustawienia i Twoje [zadania](CompletingTheObjectives.md).
- Telefony bez usług Google i ogólnie [instalacje przez ADB](#android-developer-verification-adb).

## Gdzie uzyskać pomoc

1. **Przeczytaj** [FAQ Google o weryfikacji deweloperów](https://developer.android.com/developer-verification/guides/faq), jeśli masz pytania o samą weryfikację.
2. **Zapytaj** na kanale *#AAPS* na [Discordzie](https://discord.gg/4fQUWHZ4Mw) lub na jednym z innych [kanałów społeczności](../GettingHelp/WhereCanIGetHelp.md), jeśli instalacja jest zablokowana.
3. Gdy prosisz o pomoc, podaj markę i model telefonu, wersję Androida, swój kraj i dokładny komunikat wyświetlany przy nieudanej instalacji.

```{toctree}
:hidden:

Instalator webowy AAPS <WebInstaller.md>
```
