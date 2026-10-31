<!-- Android Studio Build, FKA Computer Build. Preserve filenames to avoid breaking URLs. -->

# Budowanie w Android Studio

To tradycyjna metoda budowania aplikacji AAPS.

Aplikację możesz zbudować bez komputera metodą [Budowanie w przeglądarce](./BrowserBuild.md).

## Build yourself instead of download

**The AAPS app (an apk file) is not available for download, due to regulations around medical devices. It is legal to build the app for your own use, but you must not give a copy to others!**

See [FAQ page](../UsefulLinks/FAQ.md) for details.

---

(Building-APK-recommended-specification-of-computer-for-building-apk-file)=
## Computer and software specifications for building AAPS

* A specific **[Android Studio](https://developer.android.com/studio/)** version may be required to build the apk. Zobacz tabelę poniżej:

| AAPS Version                | Preferred<br/>Android Studio<br/>Version | Alternative<br/>Android Studio<br/>Version | Gradle | JVM |
| --------------------------- | ---------------------------------------------------- | ------------------------------------------------------ | ------ |:--- |
| 2.6.2                       | 3.6.1                                                |                                                        | 5.6.4  | 11  |
| 2.8.2.1                     | 4.1.1                                                |                                                        | 6.1.1  | 13  |
| [3.1.0.3](#version3100)     | 2020.3.1                                             | testowane do Quail 4                                   | 7.3.3  | 17  |
| [3.2.0.4](#version3204)     | Hedgehog (2023.1.1)                                  | testowane do Quail 4                                   | 8.2    | 17  |
| [3.3.1.3](#version3300)     | Ladybug Feature Drop (2024.2.2)                      | testowane do Quail 4                                   | 8.10   | 21  |
| [3.3.2](#version3300)       | Meerkat (2024.3.1)                                   | testowane do Quail 4                                   | 8.11.1 | 21  |
| [3.3.2.1](#version3321)     | Narwhal (2025.1.2)                                   | testowane do Quail 4                                   | 8.13   | 21  |
| [3.4.2.6](#version3426)     | Panda 2 (2025.3.2)                                   | testowane do Quail 4                                   | 9      | 21  |
| [4.0.0-beta1](#version4000) | Rabbit 1                                             | do najnowszej wersji Rabbit 1                          | 9.8    | 21  |

The "preferred version" is packaged with the appropriate JVM version. The preferred version is also the minimal version you can use to build **AAPS**. You will **NOT** be able to build on a version older than the "preferred" one. If using a different version, you may encounter issues related to JVM version. See the [Troubleshooting Android Studio](#troubleshooting_androidstudio-uncommitted-changes) page to help solve these issues. If your current Android Studio version is not listed in the table, you must update it first.

The Gradle version is linked to the source code, you will always get the correct Gradle version when downloading / updating the source code. It is mentioned here for reference only, you don't have to take action on it.

* [Windows 32-bit systems](#troubleshooting_androidstudio-unable-to-start-daemon-process) are not supported by Android Studio. Please keep in mind that both **64 bit CPU and 64 bit OS are mandatory condition.** If your system DOES NOT meet this condition, you have to change affected hardware or software or the whole system.

<table class="tg">
<tbody>
  <tr>
    <th class="tg-baqh">OS (Only 64 bit)</th>
    <td class="tg-baqh">Windows 8 or higher</td>
    <td class="tg-baqh">Mac OS 10.14 or higher</td>
    <td class="tg-baqh">Any Linux supports Gnome, KDE, or Unity DE;&nbsp;&nbsp;GNU C Library 2.31 or later</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">CPU (Only 64 bit)</th>
    <td class="tg-baqh">x86_64 CPU architecture; 2nd generation Intel Core or newer, or AMD CPU with support for a <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-windows" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Windows Hypervisor</span></a></td>
    <td class="tg-baqh">ARM-based chips, or 2nd generation Intel Core or newer with support for <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-mac" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Hypervisor.Framework</span></a></td>
    <td class="tg-baqh">x86_64 CPU architecture; 2nd generation Intel Core or newer, or AMD processor with support for AMD Virtualization (AMD-V) and SSSE3</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">RAM</th>
    <td class="tg-baqh" colspan="3"><p align="center">16 GB lub więcej</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Disk</th>
    <td class="tg-baqh" colspan="3"><p align="center">At least 30GB free space. SSD is recommended.</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Resolution</th>
    <td class="tg-baqh" colspan="3"><p align="center">1280 x 800 Minimum <br></td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Internet</th>
    <td class="tg-baqh" colspan="3"><p align="center">Broadband</td>
  </tr>
</tbody>
</table>

**It is strongly recommended (not mandatory) to use SSD (Solid State Disk) instead of HDD (Hard Disk Drive) because it will take less time when you are building the AAPS apk file.**  You can still use a HDD when you are building the **AAPS** apk file. If you do, the building process may take a long time to complete, but once it has started, you can leave it running unattended.

## Help and support during the building process

Jeśli podczas budowania aplikacji **AAPS** napotkasz problemy, jest osobna sekcja [**Rozwiązywanie problemów z Android Studio**](../GettingHelp/TroubleshootingAndroidStudio.md). Zajrzyj tam najpierw.

If you think something in the building instructions is wrong, missing or confusing, or you are still struggling, please reach out to other **AAPS** users group on [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) or [Discord](https://discord.gg/4fQUWHZ4Mw). If you want to change something yourself (updating screenshots _etc_), please submit a [pull request (PR)](../SupportingAaps/HowToEditTheDocs.md).

## Step-by-step guide to building the AAPS app

```{admonition} WARNING
:class: warning
Jeśli już wcześniej budowałeś AAPS, nie musisz znowu wykonywać wszystkich poniższych kroków.
Przejdź od razu do [instrukcji aktualizacji](../Maintenance/UpdateToNewVersion.md)!
```

```{contents} The overall steps for building the **AAPS** apk file
:depth: 1
:local: true
```

W tej instrukcji znajdziesz _przykładowe_ zrzuty ekranu z budowania pliku apk **AAPS**. **Android Studio** – program, którego używamy do budowania apk **AAPS** – jest regularnie aktualizowany. Dlatego zrzuty ekranu mogą różnić się od Twojej instalacji, ale nadal powinno się dać według nich postępować.

**Android Studio** działa na Windows, Mac OS X i Linux, więc kroki na różnych systemach mogą się nieco różnić.

(install-git-if-you-dont-have-it)=
### Zainstaluj Git

```{admonition} Why Git? 
:class: dropdown

Git to tak zwany „_system kontroli wersji_” (VCS).\
Git to program, który pozwala śledzić zmiany w kodzie i współpracować z innymi. Użyjesz Git, aby skopiować kod źródłowy **AAPS** ze strony GitHub na swój komputer. Potem użyjesz Git na komputerze, aby zbudować aplikację **AAPS** (apk). 
```

(BuildingAaps-steps-for-installing-git)=
#### Steps for Installing Git

1.  Sprawdź, czy nie masz już zainstalowanego **Git**. Możesz to zrobić, wpisując „git” w pasku wyszukiwania Windows. Jeśli widzisz **„Git bash”** lub inną formę Git, jest on już zainstalowany i możesz od razu przejść do [instalacji Android Studio](#install-android-studio):


![Git_installed](../images/Building-the-App/001_check_git_installed.png)

2. Jeśli nie masz zainstalowanego Git, pobierz i zainstaluj najnowszą wersję dla swojego systemu z sekcji „Download” [**tutaj**](https://git-scm.com/downloads). Any recent Git version should work, select the correct version according to your system, either Mac, Windows and Linux.

**Uwaga dla użytkowników Maca:** strona Git poprowadzi Cię też przez instalację dodatkowego programu „homebrew”, który pomaga w instalacji. If you install Git via homebrew, there is no need to change any preferences.

(Make_a_note_of_Git_path)=

* Gdy podczas instalacji pojawi się pytanie „select destination location”, zapisz, _gdzie_ instalowany jest Git (to „**ścieżka instalacji**”). Sprawdzisz ją w następnym kroku. It will be something similar to "C:\Program Files\Git\cmd\git.exe"

*  As you proceed through several steps of the Git installation, just accept all the default options.

*  After the install, if you forgot to make a note of the where Git was installed, you can find it as follows: type "git" into the PC search bar, right click on "Git bash", select "open file location" hover over the "Git bash" icon with your mouse, which will then reveal where it is installed.

* Reboot your computer before the next step.

(Building-APK-install-android-studio)=
### Install Android Studio

- **Podczas kolejnych kroków musisz być cały czas online, bo Android Studio pobiera kilka aktualizacji**

```{admonition} What is Android Studio?
:class: dropdown
Android Studio to program, który działa na Twoim komputerze. Pozwala pobrać kod źródłowy z internetu (przez Git) i zbudować aplikacje na smartfon (i smartwatch). Budując nową lub zaktualizowaną aplikację na komputerze w Android Studio, nie „zepsujesz” obecnej wersji **AAPS**, która działa jako pętla na Twoim smartfonie. To dwa całkowicie oddzielne procesy. 
```

Jedna z najważniejszych rzeczy przy instalacji Android Studio to **cierpliwość!** Podczas instalacji i konfiguracji Android Studio pobiera dużo danych, co zajmuje czas.

```{admonition} Different UI
:class: warning
Ważne: Android Studio zmieniło swój interfejs w ostatnich wersjach. Ta instrukcja pokazuje kroki w *nowym interfejsie*. Zrzuty ekranu wykonano w wersji „Ladybug”, więc nowsze wersje mogą wyglądać trochę inaczej. Jeśli nadal używasz starego interfejsu, możesz najpierw przełączyć Android Studio na nowy interfejs według [tych instrukcji](#computerbuild-NewUI).
```

Wersja Android Studio jest bardzo ważna. Zobacz [instrukcje powyżej](#Building-APK-recommended-specification-of-computer-for-building-apk-file), aby wybrać właściwą wersję Android Studio.

Pobierz [aktualną wersję Android Studio](https://developer.android.com/studio) lub starszą wersję z [**archiwum**](https://developer.android.com/studio/archive) i zaakceptuj warunki pobierania.

![DownloadAndroidStudio](../images/Building-the-App/010_DownloadLadybug.png)

Once the download is finished, start the downloaded application to install it on your computer. You might need to accept/confirm some warnings about downloaded apps from Windows!

Install Android Studio by clicking "Next", as shown in the following screenshots. **Nie** musisz zmieniać żadnych ustawień!

![Welcome_to_Android_Studio_Setup](../images/Building-the-App/011_InstallLadybug.png)

Jeśli chcesz zaoszczędzić miejsce na dysku, możesz odznaczyć Android Virtual Device: nie jest potrzebne do budowania **AAPS**.

![Choose_components](../images/Building-the-App/012_InstallLadybug.png)

![Configuration_Settings](../images/Building-the-App/013_InstallLadybug.png)

Now click on "Install":

![Choose_start_Menu_Folder](../images/Building-the-App/014_InstallLadybug.png)

Once it's completed, press "Next"

![Installation_Complete](../images/Building-the-App/015_InstallLadybug.png)

In the last step, click on "Finished" to start Android Studio for the first time.

![Completing_Android_Studio_Setup](../images/Building-the-App/016_InstallLadybug.png)

You will be asked if you want to help improve Android Studio. Choose the option to your liking, it won't make any difference for the following steps.

![Help_improve_Android_Studio](../images/Building-the-App/020_ImproveAS.png)

The welcome screen greets you to the installation of Android Studio. Press "Next".

![Witaj](../images/Building-the-App/022_WelcomeAndroidStudioInstallation.png)

Select "Standard" as installation type.

![Install_Type](../images/Building-the-App/023_DefaultInstallation.png)

Verify the settings by clicking "Next" again.

![Verify_Settings](../images/Building-the-App/024_DefaultInstallation.png)

Now you need to accept the license agreements. You have two sections (1 + 3) on the left side which you have to select one after the other and each select "Accept" (2 + 4) on the right side.

Then the "Finish" (5) button can be clicked.

![License_Agreement](../images/Building-the-App/025_LicenseAgreement.png)

Some Android packages will now be downloaded and installed. Be patient and wait.

When it's finished, you will find the following screen where you can select "Finish" again.

![Downloading_Components](../images/Building-the-App/026_DownloadFinished.png)

You will now see the Welcome screen of Android Studio.

![Welcome_to_Android_Studio](../images/Building-the-App/031_WelcomeAndroidStudio.png)


(Building-APK-download-AAPS-code)=
### Download the AAPS code

```{admonition} Why can it take a long time to download the AAPS code?
:class: dropdown

Przy pierwszym pobieraniu **AAPS** Android Studio połączy się przez internet ze stroną GitHub, aby pobrać kod źródłowy **AAPS**. Powinno to zająć około 1 minuty. 

Następnie Android Studio użyje **Gradle** (narzędzia do tworzenia aplikacji na Androida), aby ustalić, jakie inne składniki są potrzebne do zbudowania aplikacji na Twoim komputerze. 
```

Na ekranie powitalnym Android Studio sprawdź, czy po lewej jest zaznaczone „**Projects**” (1).

Potem kliknij „**Clone Repository**” (2) po prawej:

![Get_from_VCS](../images/Building-the-App/032_GetVCS.png)

We will now tell Android Studio where to get the code from:

![Get from Version Control](../images/Building-the-App/033_CloneGit.png)

* "Repository URL" should be selected (by default) on the left (1).
* "Git" should be selected (by default) as version control (2).
* Now copy this URL:
    ```
    https://github.com/nightscout/AndroidAPS.git
    ```
    and paste it into the URL textbox (3).

* Sprawdź, czy (domyślny) folder do zapisania sklonowanego kodu nie istnieje już na Twoim komputerze (4). You can change it to some directory, but please remember where you stored it!
* Now click the button "Clone" (5).

```{admonition} INFORMATION
:class: note
Zapisz, jaki to folder. To tam jest przechowywany Twój kod źródłowy!
```

You will now see a screen telling you that the repository is being cloned:

![cloning_repository](../images/Building-the-App/034_CloningProgress.png)

At some point, Android Studio will close and start again. You may be asked whether you want to trust the project. Click on "Trust project":

  ![Okno Trust Project](../images/Building-the-App/035_TrustProject.png)


Only for Windows users: If your firewall asks for permission, grant access:

 ![Zgoda zapory sieciowej dla Javy](../images/AndroidStudio361_18.png)

After the repository is cloned successfully, Android Studio will open the cloned project.

(computerbuild-NewUI)=
```{admonition} New UI
:class: note
Android Studio niedawno zmieniło swój interfejs. Nowe instalacje Android Studio domyślnie używają nowego interfejsu!

Tylko jeśli Twoje Android Studio wygląda inaczej, może być konieczne przełączenie na nowy interfejs:
Kliknij menu (hamburger) w lewym górnym rogu, a potem wybierz **Settings** (lub **Preferences** na komputerach Apple).
W **Appearance & Behavior** przejdź do **New UI** i zaznacz **Enable new UI**. Potem uruchom ponownie Android Studio, aby zacząć go używać.

Jeśli nie znajdziesz opcji **New UI**, nie martw się: już jej używasz!
```


Gdy Android Studio się otworzy, cierpliwie poczekaj (może to potrwać kilka minut) i przede wszystkim **nie** aktualizuj projektu, jak proponuje okienko.

Android Studio will start a "Gradle project sync" automatically, which will take a couple of minutes to finish. You can see it (still) running:

![AS_download_dependencies](../images/Building-the-App/036_GradleSyncing.png)

```{admonition} NEVER UPDATE GRADLE!
:class: warning

Android Studio może zalecać aktualizację systemu gradle. **Nigdy nie aktualizuj gradle!** To prowadzi do problemów.
```

Tylko na komputerach z Windows: może pojawić się powiadomienie o działaniu Windows Defender. Kliknij **Automatically** i potwierdź – budowanie będzie szybsze!

![Windows Defender](../images/Building-the-App/037_WindowsDefender.png)


You can leave the gradle sync running and follow the next steps already.

(Building-APK-set-git-path-in-preferences)=
### Set Git path in Android Studio preferences

Teraz pokażemy Android Studio, gdzie jest Git, który zainstalowałeś [wcześniej](#install-git-if-you-dont-have-it).

* Tylko dla Windows: upewnij się, że uruchomiłeś ponownie komputer po [instalacji Git](#install-git-if-you-dont-have-it). If not, restart now and re-open Android Studio

W lewym górnym rogu **Android Studio** otwórz menu (hamburger) i przejdź do **File** > **Settings** (na Windows) lub **Android Studio** > **Preferences** (na Macu). Otworzy się następujące okno. Kliknij, aby rozwinąć listę **Version Control** (1), i wybierz **Git** (2)

![Version_control_Git](../images/Building-the-App/038_SettingsGit.png)

Sprawdź, czy **Android Studio** potrafi samo znaleźć właściwą ścieżkę **Path to Git executable**, klikając przycisk „Test” (1):

![Git Executable](../images/Building-the-App/039_GitTest.png)


Jeśli automatyczne ustawienie się uda, obok ścieżki pojawi się Twoja obecna wersja **Git**.

   ![Git_version_displayed](../images/Building-the-App/039_GitTestSuccess.png)


Jeśli **git.exe** nie zostanie znaleziony automatycznie albo kliknięcie „Test” kończy się błędem, możesz:
* ręcznie wpisać ścieżkę, którą zapisałeś [wcześniej](#BuildingAaps-steps-for-installing-git), albo
* kliknąć ikonę folderu (1) i ręcznie przejść do folderu, w którym [wcześniej](#BuildingAaps-steps-for-installing-git) zainstalowano **git.exe**
* Sprawdź ustawienia przyciskiem **Test**!

  ![Nie znaleziono Git](../images/Building-the-App/039_GitTestError.png)

(Building-APK-generate-signed-apk)=
### Build the AAPS "signed" APK

```{admonition} Why does the AAPS app need to be "signed"?
:class: dropdown

Android wymaga, aby każda aplikacja była _podpisana_. Dzięki temu można ją później aktualizować tylko z tego samego zaufanego źródła, które wydało oryginalną aplikację. Więcej informacji na ten temat znajdziesz pod [tym linkiem](https://developer.android.com/studio/publish/app-signing.html#generate-key). 

Dla nas oznacza to tylko tyle, że tworzymy plik podpisu, czyli „keystore” (magazyn kluczy), i używamy go przy budowaniu aplikacji **AAPS**.
```


**Ważne: zanim przejdziesz dalej, upewnij się, że synchronizacja gradle zakończyła się pomyślnie!**


Click the hamburger menu on the top left to open the menu bar. Wybierz **Build** (1), a potem **Generate Signed App Bundle / APK** (2)

![Budowanie apk](../images/Building-the-App/040_GenerateSignedAPK.png)

Wybierz „APK” (1) zamiast „Android App Bundle” i kliknij „Next” (2):

![APK zamiast pakietu (bundle)](../images/Building-the-App/041_APK.png)

Na następnym ekranie upewnij się, że „Module” jest ustawione na „AndroidAPS.app” (1). Część przed „.app” to nazwa folderu, do którego sklonowałeś kod.

(Building-APK-wearapk)=
```{admonition} INFORMATION!
:class: note
Jeśli chcesz utworzyć apk na zegarek, musisz teraz wybrać AndroidAPS.wear!
```
![Create_key_store](../images/Building-the-App/042_CreateNewKey.png)

Click "Create new..." (2) to start creating your key store.

```{admonition} INFORMATION!
:class: note
Magazyn kluczy tworzysz tylko raz.
Jeśli już wcześniej budowałeś AAPS, NIE twórz nowego magazynu kluczy, tylko wybierz istniejący i wpisz jego hasła!
```

**_Uwaga:_** magazyn kluczy (keystore) to plik, w którym są zapisane informacje do podpisania aplikacji. It is encrypted, and the information is secured with passwords.

![Tworzenie magazynu kluczy](../images/Building-the-App/043_Keystore.png)

* Click the "folder" symbol (1) to select a path on your computer for your key store.

  **Nie** używaj folderu, w którym jest Twój kod źródłowy, tylko folderu, który przeniósłbyś też na nowy komputer.

```{admonition} WARNING!
:class: warning
Zapisz sobie, gdzie jest przechowywany Twój magazyn kluczy. Będziesz go potrzebować przy budowaniu następnej aktualizacji AndroidAPS!
```

* Now choose a simple password (and make a note of it), enter it in the password box (2), and confirm it (2).

  The passwords for key store and key do not have to be sophisticated. Jeśli w przyszłości zgubisz hasło, zobacz [Ponowna instalacja AAPS z nowym magazynem kluczy](#reinstall-aaps).

```{warning}
**Unikaj znaków specjalnych w hasłach.** Do haseł magazynu kluczy i klucza używaj tylko liter i cyfr. W szczególności nie używaj `$`, odwrotnego apostrofu (backtick), `"` ani `\`. Jeśli później przejdziesz na [Budowanie w przeglądarce](#aaps-ci-option2) i użyjesz tego samego magazynu kluczy, te znaki mogą spowodować błąd podpisywania. Zobacz [Budowanie w przeglądarce: rozwiązywanie problemów](#aaps-ci-password-special-characters).
```

* The default alias (3) for your key is "key0", leave this unchanged.

* You now need a password for your key. To keep it simple, if you want, you can use the same password you used for your keystore, above. Enter a password (4) and confirm it.

```{admonition} WARNING!
:class: warning
Zapisz te hasła! Będziesz ich potrzebować przy budowaniu następnej aktualizacji AAPS!
```

* The validity is 25 years by default, leave it as it is.

* Enter your first and last name (5). No other information needs to be added but you are free to do (6-7).

* Click "OK" (8) to continue:


Na stronie **Generate signed App Bundle or APK** zobaczysz teraz ścieżkę do swojego magazynu kluczy. Now re-enter the Key Store password (1) and Key password (2), and tick the box (3) to remember passwords, so you don't have to enter them again next time you build the apk (i.e. when updating to a new AAPS version). Click "Next" (4):

![Zapamiętaj hasła](../images/Building-the-App/044_RememberPwd.png)


Na następnym ekranie wybierz wariant budowania „fullRelease” (1) i kliknij „Create” (3). Zapamiętaj folder docelowy pokazany w (2), bo później znajdziesz tam zbudowany plik apk!

   ![Wybór wariantu budowania](../images/Building-the-App/045_BuildPath.png)

Android Studio zbuduje teraz apk **AAPS**. It will show "Gradle Build running" (2) at the bottom right. Proces zajmuje trochę czasu, zależnie od komputera i połączenia z internetem, więc **bądź cierpliwy!** Jeśli chcesz śledzić postęp budowania, kliknij mały młotek „build” (1) na dole okna Android Studio:

![Gradle działa](../images/Building-the-App/046_BuildRunning.png)

Now you can watch the building progress:

![Android_Studio_building](../images/Building-the-App/047_BuildDetails.png)

Android Studio will display the information "BUILD SUCCESSFUL" after build is finished. You may see a popup notification which you can click to select "locate". Jeśli to przegapisz, kliknij ikonę powiadomień (1), aby otworzyć powiadomienia, a potem **locate** (2):

![Budowanie zakończone](../images/Building-the-App/049_ReopenNotification.png)

**_Jeśli budowanie się nie udało, zajrzyj do sekcji [Rozwiązywanie problemów z Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)._**

In the Notifications box, click on the blue link "locate":

![Znajdź zbudowany plik](../images/Building-the-App/048_BuildFinished.png) Otworzy się menedżer plików i pokaże plik apk, który właśnie zbudowałeś.

   ![Położenie pliku apk](../images/Building-the-App/050_LocateAPK.png)

Congratulations! Masz już zbudowany plik apk **AAPS**. W następnej części dokumentacji przeniesiesz go na smartfon.

```{tip}
Jeśli myślisz, że w przyszłości możesz chcieć używać smartwatcha z Android Wear, to najlepszy moment, aby zbudować apk AAPS Wear. Wtedy masz pewność, że będzie zgodny z Twoim apk AAPS.
```

Przejdź do następnego etapu: [Przenoszenie i instalacja **AAPS**](../SettingUpAaps/TransferringAndInstallingAaps.md).



