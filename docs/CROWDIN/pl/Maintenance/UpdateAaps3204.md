# Aktualizacja do AAPS 3.2.0.4

(update-aaps-3204)=

## Zbuduj sam zamiast pobierać

**Aplikacji AAPS (pliku apk) nie można pobrać gotowej z powodu przepisów dotyczących wyrobów medycznych. Zbudowanie aplikacji na własny użytek jest legalne, ale NIE WOLNO Ci przekazywać jej kopii innym osobom!**

Szczegóły znajdziesz na stronie [FAQ](../UsefulLinks/FAQ.md).

## Wymagania dla komputera i oprogramowania do budowania AAPS 3.2.0.4

* Do zbudowania pliku apk może być potrzebna konkretna wersja **[Android Studio](https://developer.android.com/studio/)**.

| Wersja AAPS             | Zalecana<br/>wersja<br/>Android Studio | Alternatywna<br/>wersja<br/>Android Studio | Gradle | JVM |
| ----------------------- | -------------------------------------------------- | ------------------------------------------------------ | ------ |:--- |
| [3.2.0.4](#version3204) | Hedgehog (2023.1.1)                                | do Meerkat                                             | 8.2    | 17  |

„Zalecana wersja” zawiera odpowiednią wersję JVM. Zalecana wersja jest też minimalną wersją, której możesz użyć do zbudowania **AAPS**. **NIE** zbudujesz aplikacji w wersji starszej niż „zalecana”. Jeśli używasz innej wersji, mogą wystąpić problemy związane z wersją JVM. See the [Troubleshooting Android Studio](#incompatible-gradle-jvm) page to help solve these issues. Jeśli Twojej obecnej wersji Android Studio nie ma w tabeli, MUSISZ ją najpierw zaktualizować.

Wersja Gradle jest powiązana z kodem źródłowym. Zawsze otrzymasz właściwą wersję Gradle podczas pobierania lub aktualizacji kodu źródłowego. Podajemy ją tu tylko dla informacji, nie musisz nic z nią robić.

* [32-bitowe systemy Windows](#troubleshooting_androidstudio-unable-to-start-daemon-process) nie są obsługiwane przez Android Studio. Pamiętaj, że **64-bitowy procesor i 64-bitowy system operacyjny są warunkiem obowiązkowym.** Jeśli Twój system NIE spełnia tego warunku, musisz wymienić odpowiedni sprzęt, oprogramowanie lub cały system.

<table class="tg">
<tbody>
  <tr>
    <th class="tg-baqh">System operacyjny (tylko 64-bit)</th>
    <td class="tg-baqh">Windows 8 lub nowszy</td>
    <td class="tg-baqh">Mac OS 10.14 lub nowszy</td>
    <td class="tg-baqh">Dowolny Linux z obsługą Gnome, KDE lub Unity DE;&nbsp;&nbsp;GNU C Library 2.31 lub nowsza</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Procesor (tylko 64-bit)</th>
    <td class="tg-baqh">Architektura procesora x86_64; Intel Core 2. generacji lub nowszy albo procesor AMD z obsługą <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-windows" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Windows Hypervisor</span></a></td>
    <td class="tg-baqh">Układy ARM albo Intel Core 2. generacji lub nowszy z obsługą <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-mac" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Hypervisor.Framework</span></a></td>
    <td class="tg-baqh">Architektura procesora x86_64; Intel Core 2. generacji lub nowszy albo procesor AMD z obsługą AMD Virtualization (AMD-V) i SSSE3</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Pamięć RAM</th>
    <td class="tg-baqh" colspan="3"><p align="center">8 GB lub więcej</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Dysk</th>
    <td class="tg-baqh" colspan="3"><p align="center">Co najmniej 30 GB wolnego miejsca. Zalecany jest dysk SSD.</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Rozdzielczość</th>
    <td class="tg-baqh" colspan="3"><p align="center">Minimum 1280 x 800<br></td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Internet</th>
    <td class="tg-baqh" colspan="3"><p align="center">Szerokopasmowy</td>
  </tr>
</tbody>
</table>

**Zdecydowanie zalecamy (nie jest to obowiązkowe) używanie dysku SSD (Solid State Disk) zamiast HDD (Hard Disk Drive), ponieważ budowanie pliku apk AAPS trwa wtedy krócej.**  Do budowania pliku apk **AAPS** możesz nadal używać dysku HDD. Jeśli tak, budowanie może trwać długo, ale gdy już się zacznie, możesz zostawić je bez nadzoru.

## Pomoc i wsparcie podczas budowania wersji 3.2.0.4

Jeśli masz trudności podczas budowania aplikacji **AAPS**, najpierw zajrzyj do osobnej sekcji [**Rozwiązywanie problemów z Android Studio**](https://androidaps.readthedocs.io/en/3.2/GettingHelp/TroubleshootingAndroidStudio.html).

Jeśli uważasz, że coś w instrukcji budowania jest błędne, brakuje czegoś lub jest niejasne, albo nadal masz problemy, zwróć się do grupy użytkowników **AAPS** na [Facebooku](https://www.facebook.com/groups/AndroidAPSUsers) lub [Discordzie](https://discord.gg/4fQUWHZ4Mw). Jeśli chcesz sam coś zmienić (np. zaktualizować zrzuty ekranu _itp._), wyślij [pull request (PR)](../SupportingAaps/HowToEditTheDocs.md).

```{note}
Ta strona pokazuje przykładowe obrazy zarówno dla nowego (**New**), jak i starego (**Classic**) interfejsu Android Studio.
```

## Przegląd aktualizacji z 3.2.0.x do 3.2.0.4

```{contents} Steps for updating to 3.2.0.4
:depth: 1
:local: true
```

### Wyeksportuj swoje obecne ustawienia

Wyeksportuj ustawienia z obecnej wersji **AAPS** w swoim telefonie. Może nie będą Ci potrzebne, ale lepiej dmuchać na zimne.

Jeśli nie pamiętasz, jak to zrobić, zobacz stronę [Tworzenie i przywracanie kopii zapasowych](ExportImportSettings.md).

### Zaktualizuj lokalną kopię AAPS

* Otwórz swój istniejący projekt AAPS w Android Studio. Może być konieczne wybranie projektu. Kliknij (dwukrotnie) projekt AAPS.

![Android Studio – wybór projektu](../images/update/01_ProjectSelection.png)

<br>

![Android Studio – wybór projektu](https://androidaps.readthedocs.io/en/3.1/_images/01_ProjectSelection.png)

* Na pasku menu Android Studio wybierz Git -> Fetch

![Menu Android Studio – Git – Fetch](../images/update/02_GitFetch.png)

<br>

![Menu Android Studio – Git – Fetch](https://androidaps.readthedocs.io/en/3.1/_images/02_GitFetch.png)

* W prawym dolnym rogu zobaczysz komunikat, że Fetch się powiódł.

![Menu Android Studio – Git – Fetch zakończony powodzeniem](../images/update/03_GitFetchSuccessful.png)

<br>

![Menu Android Studio – Git – Fetch zakończony powodzeniem](https://androidaps.readthedocs.io/en/3.1/_images/03_GitFetchSuccessful.png)

* Teraz na pasku menu wybierz Git -> Pull

![Menu Android Studio – Git – Pull](../images/update/04_GitPull.png)

<br>

![Menu Android Studio – Git – Pull](https://androidaps.readthedocs.io/en/3.1/_images/04_GitPull.png)

* Pozostaw wszystkie opcje bez zmian (origin/master) i wybierz Pull

![Android Studio – okno Git – Pull](../images/update/05_GitPullOptions.png)

<br>

![Android Studio – okno Git – Pull](https://androidaps.readthedocs.io/en/3.1/_images/05_GitPullOptions.png)

* Poczekaj, aż pobieranie się zakończy. Informację o tym zobaczysz na dolnym pasku. Po zakończeniu zobaczysz komunikat o powodzeniu.

  ```{note}
  Lista zaktualizowanych plików może być inna! This is not an indication of a problem.
  ```


![Android Studio – Pull zakończony powodzeniem](../images/update/06_GitPullSuccess.png)

<br>

![Android Studio – Pull zakończony powodzeniem](https://androidaps.readthedocs.io/en/3.1/_images/06_GitPullSuccess.png)

* Gradle Sync zostanie uruchomiony, aby pobrać niektóre zależności. Poczekaj, aż się zakończy.

![Android Studio – Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

<br>

![Android Studio – Gradle Sync](https://androidaps.readthedocs.io/en/3.1/_images/40_BackgroundTasks.png)

### Wybierz wersję JVM 17

- Otwórz widok Gradle, klikając słonia (1) po prawej stronie Android Studio, otwórz ustawienia (2) i wybierz **Gradle Settings** (3):

![Otwórz Gradle Settings](../images/studioTroubleshooting/161_GradleSettings.png)

<br>

![Otwórz Gradle Settings](../images/studioTroubleshooting/09_GradleSettings.png)

- W polu **Gradle JDK** (1) sprawdź, czy wybrana jest odpowiednia wersja: **jbr-17**. Jeśli nie, kliknij pole i sprawdź, czy ta wersja jest już dostępna na liście. Jeśli nie ma jej na liście (na zrzucie ekranu poniżej komputer ma dostępną tylko wersję **jbr-21**), wybierz **Download JDK...** (2).

![Wybierz Download JDK](../images/studioTroubleshooting/162_DownloadJDK.png)



- W polu Version (1) wybierz **17**. W polu Vendor (2) wybierz JetBrains Runtime lub dowolnego dostawcę. Location (3): nie zmieniaj.

![Wybierz JDK 17](https://androidaps.readthedocs.io/en/3.2/_images/163_JDKSelection.png)

- Zamknij okno **Settings** przyciskiem **OK**.

### Wybierz gałąź AAPS 3.2.0.4

- W lewym dolnym rogu wybierz symbol Git, kliknij prawym przyciskiem 3.2.0.4 i wybierz Checkout.

![Wybierz Download JDK](../images/studioTroubleshooting/17_Checkout.png)

<br>

![Wybierz Download JDK](../images/studioTroubleshooting/17_CheckoutOld.png)

### Synchronizuj projekt z Gradle

```{admonition} WARNING!
:class: warning
**Nigdy nie aktualizuj Gradle.** Zawsze synchronizuj go z projektem.
```

W nowym interfejsie użyj ikony słonia i Sync Project with Gradle Files (albo postępuj zgodnie z [tym opisem](#gradle-resync)).

![Sync Project with Gradle Files](../images/studioTroubleshooting/06_GradleResyncElephant.png)

Albo ([tym opisem](https://androidaps.readthedocs.io/en/3.2/GettingHelp/TroubleshootingAndroidStudio.html#gradle-resync)) w klasycznym interfejsie.

![Sync Project with Gradle Files](../images/studioTroubleshooting/06_GradleResyncElephantOld.png)

### Zbuduj podpisany plik APK 3.2.0.4

Twój kod źródłowy jest teraz aktualną wydaną wersją, a wszystkie wymagania zostały sprawdzone. Teraz zbuduj podpisany plik apk, jak opisano w [sekcji o budowaniu podpisanego pliku apk](#Building-APK-generate-signed-apk).

### Przenieś i zainstaluj plik APK 3.2.0.4

Musisz przenieść plik apk do telefonu, aby go zainstalować.

```{note}
Jeśli zbudowano aplikację z tym samym istniejącym magazynem kluczy w Android Studio, nie musisz usuwać obecnej aplikacji z telefonu. Podczas instalacji pliku apk postępuj zgodnie z komunikatami, aby zainstalować aktualizację.
W innych przypadkach, np. gdy w Android Studio utworzono nowy magazyn kluczy dla podpisanego pliku apk, musisz usunąć starą aplikację przed instalacją pliku apk. **Pamiętaj, aby wyeksportować ustawienia!**
```

Zobacz instrukcję [Przenoszenie i instalacja AAPS na smartfonie](../SettingUpAaps/TransferringAndInstallingAaps.md)

### Sprawdź wersję AAPS 3.2.0.4 w telefonie

Po zainstalowaniu nowego pliku apk możesz sprawdzić wersję AAPS w telefonie: dotknij menu z trzema kropkami w prawym górnym rogu, a następnie O aplikacji. Powinna być widoczna aktualna wersja.

