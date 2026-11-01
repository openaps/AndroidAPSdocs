<!-- Android Studio Build, FKA Computer Build. Preserve filenames to avoid breaking URLs. -->

# Android Studio-bygg

Dette er den tradisjonelle måten å bygge AAPS-appen din på.

Du kan bygge appen uten datamaskin med metoden [Nettleserbygg](./BrowserBuild.md).

## Build yourself instead of download

**AAPS-appen (en apk-fil) er ikke tilgjengelig for nedlasting, på grunn av regelverket for medisinsk utstyr. It is legal to build the app for your own use, but you must not give a copy to others!**

See [FAQ page](../UsefulLinks/FAQ.md) for details.

---

(Building-APK-recommended-specification-of-computer-for-building-apk-file)=
## Computer and software specifications for building AAPS

* A specific **[Android Studio](https://developer.android.com/studio/)** version may be required to build the apk. Se tabellen nedenfor:

| AAPS Version                                                             | Preferred<br/>Android Studio<br/>Version | Alternative<br/>Android Studio<br/>Version | Gradle | JVM |
| ------------------------------------------------------------------------ | ---------------------------------------------------- | ------------------------------------------------------ | ------ |:--- |
| 2.6.2                                                                    | 3.6.1                                                |                                                        | 5.6.4  | 11  |
| 2.8.2.1                                                                  | 4.1.1                                                |                                                        | 6.1.1  | 13  |
| [3.1.0.3](https://github.com/nightscout/AndroidAPS/releases/tag/3.1.0.3) | 2020.3.1                                             | testet opptil Quail 4                                  | 7.3.3  | 17  |
| [3.2.0.4](#version3204)                                                  | Hedgehog (2023.1.1)                                  | testet opptil Quail 4                                  | 8.2    | 17  |
| [3.3.1.3](#version3300)                                                  | Ladybug Feature Drop (2024.2.2)                      | testet opptil Quail 4                                  | 8.10   | 21  |
| [3.3.2](#version3300)                                                    | Meerkat (2024.3.1)                                   | testet opptil Quail 4                                  | 8.11.1 | 21  |
| [3.3.2.1](#version3321)                                                  | Narwhal (2025.1.2)                                   | testet opptil Quail 4                                  | 8.13   | 21  |
| [3.4.2.6](#version3426)                                                  | Panda 2 (2025.3.2)                                   | testet opptil Quail 4                                  | 9      | 21  |
| [4.0.0](#version400)                                                     | Rabbit 2 (2026.2.2)                                  | Nyeste                                                 | 9.8    | 21  |

The "preferred version" is packaged with the appropriate JVM version. The preferred version is also the minimal version you can use to build **AAPS**. You will **NOT** be able to build on a version older than the "preferred" one. If using a different version, you may encounter issues related to JVM version. Se siden [Feilsøking av Android Studio](#troubleshooting_androidstudio-uncommitted-changes) for hjelp til å løse disse problemene. If your current Android Studio version is not listed in the table, you must update it first.

The Gradle version is linked to the source code, you will always get the correct Gradle version when downloading / updating the source code. It is mentioned here for reference only, you don't have to take action on it.

* [Windows 32-bit systems](#troubleshooting_androidstudio-unable-to-start-daemon-process) are not supported by Android Studio. Please keep in mind that both **64 bit CPU and 64 bit OS are mandatory condition.** If your system DOES NOT meet this condition, you have to change affected hardware or software or the whole system.

<table class="tg">
<tbody>
  <tr>
    <th class="tg-baqh">OS (Only 64 bit)</th>
    <td class="tg-baqh">Windows 10 eller nyere</td>
    <td class="tg-baqh">macOS 12 eller nyere</td>
    <td class="tg-baqh">Enhver Linux-distribusjon som støtter Gnome, KDE eller Unity DE;&nbsp;&nbsp;GNU C Library (glibc) 2.31 eller nyere</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">CPU (Only 64 bit)</th>
    <td class="tg-baqh">x86_64-prosessor fra 2017 eller nyere (Intel 8. generasjon Core i5, AMD Ryzen eller nyere) med <a href="https://developer.android.com/studio/install" target="_blank" rel="noopener noreferrer">støtte for virtualisering</a> (Intel VT-x eller AMD-V) aktivert i BIOS</td>
    <td class="tg-baqh">Apple Silicon (M1 eller nyere), eller 6. generasjon Intel Core eller nyere (støtten for Intel-Macer fases ut)</td>
    <td class="tg-baqh">x86_64-prosessor fra 2017 eller nyere (Intel 8. generasjon Core i5, AMD Ryzen eller nyere) med støtte for virtualisering (Intel VT-x eller AMD-V) aktivert i BIOS</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">RAM</th>
    <td class="tg-baqh" colspan="3"><p align="center">16 GB eller mer (8 GB er det absolutte minimum for Android Studio alene, 32 GB anbefales)</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Disk</th>
    <td class="tg-baqh" colspan="3"><p align="center">Minst 32 GB ledig plass. SSD is recommended.</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Resolution</th>
    <td class="tg-baqh" colspan="3"><p align="center">1280 x 800 minimum (1920 x 1080 anbefales)<br></td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Internet</th>
    <td class="tg-baqh" colspan="3"><p align="center">Broadband</td>
  </tr>
</tbody>
</table>

**It is strongly recommended (not mandatory) to use SSD (Solid State Disk) instead of HDD (Hard Disk Drive) because it will take less time when you are building the AAPS apk file.**  You can still use a HDD when you are building the **AAPS** apk file. If you do, the building process may take a long time to complete, but once it has started, you can leave it running unattended.

## Help and support during the building process

Hvis du får problemer underveis i byggingen av **AAPS**-appen, finnes det en egen del om [**feilsøking av Android Studio**](../GettingHelp/TroubleshootingAndroidStudio.md); se der først.

If you think something in the building instructions is wrong, missing or confusing, or you are still struggling, please reach out to other **AAPS** users group on [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) or [Discord](https://discord.gg/4fQUWHZ4Mw). If you want to change something yourself (updating screenshots _etc_), please submit a [pull request (PR)](../SupportingAaps/HowToEditTheDocs.md).

## Step-by-step guide to building the AAPS app

```{admonition} WARNING
:class: warning
Hvis du har bygd AAPS før, trenger du ikke gjøre alle de følgende stegene på nytt.
Gå rett til [oppdateringsveiledningen](../Maintenance/UpdateToNewVersion.md)!
```

```{contents} The overall steps for building the **AAPS** apk file
:depth: 1
:local: true
```

I denne veiledningen finner du skjermbilder som viser _eksempler_ på bygging av apk-filen til **AAPS**. Fordi **Android Studio** – programmet vi bruker til å bygge apk-filen til **AAPS** – oppdateres jevnlig, er disse skjermbildene kanskje ikke helt like din installasjon, men det skal fortsatt være mulig å følge dem.

Siden **Android Studio** kjører på Windows, Mac OS X og Linux, kan det også være små forskjeller i stegene på de ulike plattformene.

(install-git-if-you-dont-have-it)=
### Installer Git

```{admonition} Why Git? 
:class: dropdown

Git er kjent som et «_versjonskontrollsystem_» (VCS).\
Git er et program som lar deg følge med på endringer i kode og samarbeide med andre. Du bruker Git til å lage en kopi av kildekoden til **AAPS** fra nettstedet GitHub til din egen datamaskin. Deretter bruker du Android Studio på datamaskinen din til å bygge **AAPS**-appen (apk). 
```

(BuildingAaps-steps-for-installing-git)=
#### Steps for Installing Git

1.  Sjekk at du ikke allerede har **Git** installert. Det gjør du ved å skrive «git» i søkefeltet i Windows – hvis du ser **«Git bash»** eller en annen form for Git, er det allerede installert, og du kan gå rett til [installere Android Studio](#install-android-studio):


![Git_installed](../images/Building-the-App/001_check_git_installed.png)

2. Hvis du ikke har Git installert, laster du ned og installerer den nyeste versjonen for systemet ditt fra delen «Download» [**her**](https://git-scm.com/downloads). Any recent Git version should work, select the correct version according to your system, either Mac, Windows and Linux.

**Merknad for Mac-brukere:** nettsiden til Git vil også veilede deg til å installere et ekstra program kalt «homebrew» som hjelper til med installasjonen. If you install Git via homebrew, there is no need to change any preferences.

(Make_a_note_of_Git_path)=

* Under installasjonen, når du blir bedt om å «select destination location» (velge målplassering), noterer du deg _hvor_ Git blir installert («**installasjonsstien**») – du må sjekke den i neste steg. It will be something similar to "C:\Program Files\Git\cmd\git.exe"

*  As you proceed through several steps of the Git installation, just accept all the default options.

*  After the install, if you forgot to make a note of the where Git was installed, you can find it as follows: type "git" into the PC search bar, right click on "Git bash", select "open file location" hover over the "Git bash" icon with your mouse, which will then reveal where it is installed.

* Reboot your computer before the next step.

(Building-APK-install-android-studio)=
### Install Android Studio

- **Du må være på nett hele tiden under de følgende stegene, siden Android Studio laster ned flere oppdateringer**

```{admonition} What is Android Studio?
:class: dropdown
Android Studio er et program som kjører på datamaskinen din. Det lar deg laste ned kildekode fra internett (med Git) og bygge apper for smarttelefon (og smartklokke). Du kan ikke «ødelegge» en versjon av **AAPS** som allerede looper på en smarttelefon ved å bygge en ny eller oppdatert app på PC-en med Android Studio – dette er helt adskilte prosesser. 
```

Noe av det viktigste når du installerer Android Studio er å **være tålmodig!** Under installasjon og oppsett laster Android Studio ned mye, og det tar tid.

```{admonition} Different UI
:class: warning
Viktig merknad: Android Studio har endret brukergrensesnittet sitt i de siste versjonene. Denne veiledningen viser stegene med det *nye brukergrensesnittet*. Skjermbildene ble tatt med «Ladybug», så nyere versjoner kan se litt annerledes ut. Hvis du fortsatt bruker det gamle brukergrensesnittet, kan det være lurt å bytte Android Studio til det nye brukergrensesnittet først, ved å følge [disse instruksjonene](#computerbuild-NewUI).
```

Versjonen av Android Studio er svært viktig. Se [instruksjonene ovenfor](#Building-APK-recommended-specification-of-computer-for-building-apk-file) for å velge riktig versjon av Android Studio.

Last ned [den gjeldende versjonen av Android Studio](https://developer.android.com/studio) eller en eldre versjon fra [**Archives**](https://developer.android.com/studio/archive) (arkivet), og godta nedlastingsvilkårene.

![DownloadAndroidStudio](../images/Building-the-App/010_DownloadLadybug.png)

Once the download is finished, start the downloaded application to install it on your computer. You might need to accept/confirm some warnings about downloaded apps from Windows!

Install Android Studio by clicking "Next", as shown in the following screenshots. Du trenger **ikke** endre noen innstillinger!

![Welcome_to_Android_Studio_Setup](../images/Building-the-App/011_InstallLadybug.png)

Hvis du vil spare plass på harddisken, kan du fjerne avkrysningen for Android Virtual Device: den brukes ikke til å bygge **AAPS**.

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

![Welcome](../images/Building-the-App/022_WelcomeAndroidStudioInstallation.png)

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

Første gang **AAPS** lastes ned, kobler Android Studio seg til nettstedet GitHub over internett for å laste ned kildekoden til **AAPS**. Dette bør ta omtrent 1 minutt. 

Android Studio bruker deretter **Gradle** (et utviklingsverktøy for Android-apper) til å finne ut hvilke andre komponenter som trengs for å bygge dette på datamaskinen din. 
```

På velkomstskjermen i Android Studio sjekker du at «**Projects**» (1) er uthevet til venstre.

Klikk så på «**Clone Repository**» (2) til høyre:

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

* Sjekk at (standard)mappen for lagring av den klonede koden ikke allerede finnes på datamaskinen din (4). You can change it to some directory, but please remember where you stored it!
* Now click the button "Clone" (5).

```{admonition} INFORMATION
:class: note
Noter deg mappen. Det er der kildekoden din lagres!
```

You will now see a screen telling you that the repository is being cloned:

![cloning_repository](../images/Building-the-App/034_CloningProgress.png)

At some point, Android Studio will close and start again. You may be asked whether you want to trust the project. Click on "Trust project":

  ![Trust project](../images/Building-the-App/035_TrustProject.png)


Only for Windows users: If your firewall asks for permission, grant access:

 ![Brannmurtillatelse for Java](../images/AndroidStudio361_18.png)

After the repository is cloned successfully, Android Studio will open the cloned project.

(computerbuild-NewUI)=
```{admonition} New UI
:class: note
Android Studio endret brukergrensesnittet sitt nylig. Nye installasjoner av Android Studio bruker det nye brukergrensesnittet (New UI) som standard!

Bare hvis din Android Studio ser annerledes ut, kan det hende du må bytte til det nye brukergrensesnittet:
Klikk på hamburgermenyen øverst til venstre, og velg så **Settings** (eller **Preferences** på Apple-maskiner).
Under **Appearance & Behavior** går du til **New UI** og krysser av for **Enable new UI**. Start så Android Studio på nytt for å ta det i bruk.

Hvis du ikke finner valget **New UI**, er det ingen grunn til bekymring: da bruker du det allerede!
```


Når Android Studio har åpnet, venter du tålmodig (dette kan ta noen minutter), og du må særlig **ikke** oppdatere prosjektet slik det foreslås i popup-vinduet.

Android Studio will start a "Gradle project sync" automatically, which will take a couple of minutes to finish. You can see it (still) running:

![AS_download_dependencies](../images/Building-the-App/036_GradleSyncing.png)

```{admonition} NEVER UPDATE GRADLE!
:class: warning

Android Studio kan anbefale å oppdatere gradle-systemet. **Oppdater aldri gradle!** Det fører til problemer.
```

Bare på Windows-maskiner: Du kan få et varsel om at Windows Defender kjører: Klikk på **Automatically** og bekreft, det gjør at byggingen går raskere!

![Windows Defender](../images/Building-the-App/037_WindowsDefender.png)


You can leave the gradle sync running and follow the next steps already.

(Building-APK-set-git-path-in-preferences)=
### Set Git path in Android Studio preferences

Nå skal vi fortelle Android Studio hvor den finner Git, som du installerte [tidligere](#install-git-if-you-dont-have-it).

* Bare for Windows-brukere: Sørg for at du har startet datamaskinen på nytt etter at du [installerte Git](#install-git-if-you-dont-have-it). If not, restart now and re-open Android Studio

Øverst til venstre i **Android Studio** åpner du hamburgermenyen og går til **File** > **Settings** (på Windows) eller **Android Studio** > **Preferences** (på Mac). Dette åpner følgende vindu; klikk for å utvide nedtrekksmenyen **Version Control** (1) og velg **Git** (2)

![Version_control_Git](../images/Building-the-App/038_SettingsGit.png)

Sjekk om **Android Studio** kan finne riktig **Path to Git executable** (sti til Git-programmet) automatisk ved å klikke på knappen «Test» (1):

![Git Executable](../images/Building-the-App/039_GitTest.png)


Hvis den automatiske innstillingen lykkes, vises din nåværende versjon av **Git** ved siden av stien.

   ![Git_version_displayed](../images/Building-the-App/039_GitTestSuccess.png)


Hvis **git.exe** ikke blir funnet automatisk, eller hvis du får en feil når du klikker på «Test», kan du enten
* skrive inn stien du lagret [tidligere](#BuildingAaps-steps-for-installing-git) manuelt, eller
* klikke på mappeikonet (1) og gå manuelt til mappen der **git.exe** ble installert [tidligere](#BuildingAaps-steps-for-installing-git)
* Kontroller innstillingene dine med **Test**-knappen!

  ![Git ikke funnet](../images/Building-the-App/039_GitTestError.png)

(Building-APK-generate-signed-apk)=
### Build the AAPS "signed" APK

```{admonition} Why does the AAPS app need to be "signed"?
:class: dropdown

Android krever at hver app er _signert_, for å sikre at den senere bare kan oppdateres fra den samme pålitelige kilden som ga ut den opprinnelige appen. Mer informasjon om dette emnet finner du via [denne lenken](https://developer.android.com/studio/publish/app-signing.html#generate-key). 

For vårt formål betyr dette bare at vi lager en signeringsfil, en «keystore»-fil, og bruker den når vi bygger **AAPS**-appen.
```


**Viktig: Sørg for at gradle-synkroniseringen er fullført uten feil før du går videre!**


Click the hamburger menu on the top left to open the menu bar. Velg **Build** (1), og velg så **Generate Signed App Bundle / APK** (2)

![Bygg apk](../images/Building-the-App/040_GenerateSignedAPK.png)

Velg «APK» (1) i stedet for «Android App Bundle» og klikk på «Next» (2):

![APK i stedet for bundle](../images/Building-the-App/041_APK.png)

På neste skjerm sjekker du at «Module» er satt til «AndroidAPS.app» (1). Delen før «.app» er navnet på mappen du klonet koden til.

(Building-APK-wearapk)=
```{admonition} INFORMATION!
:class: note
Hvis du vil lage apk-filen for klokken din, må du nå velge AndroidAPS.wear!
```
![Create_key_store](../images/Building-the-App/042_CreateNewKey.png)

Click "Create new..." (2) to start creating your key store.

```{admonition} INFORMATION!
:class: note
Du trenger bare å opprette keystore-filen én gang.
Hvis du har bygd AAPS før, må du IKKE opprette en ny keystore-fil, men velge den du allerede har og skrive inn passordene til den!
```

**_Merknad:_** Keystore-filen er en fil der informasjonen som brukes til å signere appen, lagres. It is encrypted, and the information is secured with passwords.

![Opprett keystore-fil](../images/Building-the-App/043_Keystore.png)

* Click the "folder" symbol (1) to select a path on your computer for your key store.

  Bruk **ikke** mappen der du lagret kildekoden, men en mappe som du også ville overført til en ny datamaskin.

```{admonition} WARNING!
:class: warning
Sørg for å notere deg hvor keystore-filen din er lagret. Du trenger den når du bygger neste AndroidAPS-oppdatering!
```

* Now choose a simple password (and make a note of it), enter it in the password box (2), and confirm it (2).

  The passwords for key store and key do not have to be sophisticated. Hvis du mister passordet ditt senere, se [Installere AAPS på nytt med en ny keystore-fil](#reinstall-aaps).

```{warning}
**Unngå spesialtegn i passordene dine.** Bruk bare bokstaver og sifre i passordene for keystore-filen og nøkkelen. Særlig må du ikke bruke `$`, backtick (gravistegn), `"` eller `\`. Hvis du senere bytter til [nettleserbygget](#aaps-ci-option2) og gjenbruker denne keystore-filen, kan disse tegnene få signeringssteget til å feile, se [feilsøking av nettleserbygg](#aaps-ci-password-special-characters).
```

* The default alias (3) for your key is "key0", leave this unchanged.

* You now need a password for your key. To keep it simple, if you want, you can use the same password you used for your keystore, above. Enter a password (4) and confirm it.

```{admonition} WARNING!
:class: warning
Noter deg disse passordene! Du trenger dem når du bygger neste AAPS-oppdatering!
```

* The validity is 25 years by default, leave it as it is.

* Enter your first and last name (5). No other information needs to be added but you are free to do (6-7).

* Click "OK" (8) to continue:


På siden **Generate signed App Bundle or APK** vises nå stien til keystore-filen din. Now re-enter the Key Store password (1) and Key password (2), and tick the box (3) to remember passwords, so you don't have to enter them again next time you build the apk (i.e. when updating to a new AAPS version). Click "Next" (4):

![Husk passordene](../images/Building-the-App/044_RememberPwd.png)


På neste skjerm velger du byggevarianten «fullRelease» (1) og klikker på «Create» (3). Husk målmappen som vises ved (2), for senere finner du den ferdige apk-filen der!

   ![Velg byggevariant](../images/Building-the-App/045_BuildPath.png)

Android Studio bygger nå apk-filen til **AAPS**. It will show "Gradle Build running" (2) at the bottom right. Prosessen tar litt tid, avhengig av datamaskinen og internettforbindelsen din, så **vær tålmodig!** Hvis du vil følge med på framdriften i byggingen, klikker du på den lille hammeren «build» (1) nederst i Android Studio:

![Gradle kjører](../images/Building-the-App/046_BuildRunning.png)

Now you can watch the building progress:

![Android_Studio_building](../images/Building-the-App/047_BuildDetails.png)

Android Studio will display the information "BUILD SUCCESSFUL" after build is finished. You may see a popup notification which you can click to select "locate". Hvis du gikk glipp av dette, klikker du på varslingsikonet (1) for å få fram varslene (Notifications), og deretter på **locate** (2):

![Bygging fullført](../images/Building-the-App/049_ReopenNotification.png)

**_Hvis byggingen ikke lyktes, se [delen om feilsøking av Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)._**

In the Notifications box, click on the blue link "locate":

![Finn bygget](../images/Building-the-App/048_BuildFinished.png) Filbehandleren din åpnes og viser deg apk-filen du nettopp har bygd.

   ![Plasseringen til apk-filen](../images/Building-the-App/050_LocateAPK.png)

Gratulerer! Nå har du bygd apk-filen til **AAPS**, og i neste del av dokumentasjonen skal du overføre denne filen til smarttelefonen din.

```{tip}
Hvis du tror du kan komme til å bruke en Android Wear-smartklokke i framtiden, er dette det beste tidspunktet å bygge AAPS Wear-apk-filen på, så du er sikker på at den er synkronisert med AAPS-apk-filen din.
```

Gå videre til neste steg, [Overføre og installere **AAPS**](../SettingUpAaps/TransferringAndInstallingAaps.md).



