# Sestavení AAPS

## Vyrobte si místo stažení

**Aplikace AAPS (soubor apk) není k dispozici ke stažení, a to kvůli předpisům týkajícím se zdravotnických prostředků. Je legální vytvořit aplikaci pro své vlastní použití, ale nesmíte dát kopii ostatním!**

Podrobnosti viz [Oddíl FAQ](../Getting-Started/FAQ.md).

(Building-APK-recommended-specification-of-computer-for-building-apk-file)=

## Specifikace hardware a softwaru pro vytvoření AAPS

- Please use the **[Android Studio version called at least Hedgehog (2023.1.1) or one more recent like Iguana, Jellyfish, Koala or Ladybug](https://developer.android.com/studio/)** to build the apk. Older versions of Android Studio need to be updated first!
- Na [32-bitových systémech Windows](troubleshooting_androidstudio-unable-to-start-daemon-process) není program Android Studio podporován. Mějte prosím na paměti, že 64bitový CPU a 64bitový OS jsou nutné podmínky. Pokud je váš systém nesplňuje, musíte vyměnit příslušný hardware nebo software nebo celý systém.

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
    <td class="tg-baqh" colspan="3"><p align="center">8GB or more</td>
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

\*\*Důrazně se doporučuje (není povinné) používat SSD (solid state disk) místo HDD (pevný disk), protože bude trvat méně času, než vytvoříte soubor AAPS. \* Stále můžete použít HDD, když vytváříte soubor apk **AAPS**. Pokud to uděláte, dokončení procesu sestavení může trvat dlouho, ale jakmile začnete, můžete ho nechat bez dozoru.

## Pomoc a podpora během procesu sestavení

Pokud narazíte na potíže v procesu vytváření aplikace **AAPS**, projděte nejdříve oddíl [**Řešení potíží se systémem Android Studio**](../Installing-AndroidAPS/troubleshooting_androidstudio).

If you think something in the building instructions is wrong, missing or confusing, or you are still struggling, please reach out to other **AAPS** users group on [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) or [Discord](https://discord.gg/4fQUWHZ4Mw). Pokud chcete sami něco změnit (aktualizovat snímek obrazovky apod.), odešlete [pull request (PR)] (../make-a-PR.md).

## Návod k sestavení aplikace AAPS krok za krokem

```{admonition} WARNING
:class: warning
If you have built AAPS before, you don't need to take all the following steps again.
Please jump directly to the [update guide](../Installing-AndroidAPS/Update-to-new-version)!
```

Základní kroky k sestavení apk souboru **AAPS** jsou následující:

4.1 [Instalace Git](Install-Git)

4.2 [Instalace Android Studia](Building-APK-install-android-studio)

4.3 [Stažení kódu AAPS](Building-APK-download-AAPS-code)

4.4 [Nastavení cesty ke Git v předvolbách Android Studia](Building-APK-set-git-path-in-preferences)

4.5 [Sestavení "podepsaného" apk souboru AAPS](Building-APK-generate-signed-apk)

V tomto průvodci najdete _příklady_ snímků obrazovky z vytváření apk souboru **AAPS**. Protože **Android Studio** - software, který používáme k sestavení aplikace **AAPS** - je pravidelně aktualizován, tyto screenshoty nemusí být s vaší instalací totožné, ale přesto by mělo být možné postup následovat.

Jelikož **Android Studio** běží na platformě Windows, Mac OS X i Linux, mohou existovat menší rozdíly v krocích na jednotlivých platformách.

(Install-Git)=

### Instalace gitu (pokud ho ještě nemáte)

```{admonition} Why Git? 
:class: dropdown

Git is known as a “_Versioning Control System_” (VCS).\
Git is a program that allows you to track changes in code and to collaborate with others. You will use Git to make a copy of the **AAPS** source code from the GitHub website to your local computer. Then, you will use Git on your computer to build the **AAPS** application (apk). 
```

#### Postup instalace Gitu

1. Zkontrolujte, že již nemáte **Git** nainstalován. Můžete to udělat zadáním „git“ do vyhledávacího panelu Windows – pokud vidíte \*\*„Git bash“ \*\* nebo jinou aplikaci Gitu, je již nainstalován a můžete jít rovnou na [Instalace Android Studia](Building-APK-install-android-studio).

![Git\_installed](../images/Building-the-App/001_check_git_installed.png)

2. If you don’t have Git installed, download and install the latest version for your system from the "Download" section on [**here**](https://git-scm.com/downloads). Jakákoliv nedávná verze Gitu by měla fungovat, vyberte správnou verzi pro váš systém, ať je to Mac, Windows nebo Linux.

**Poznámka pro uživatele Macu:** webová stránka Gitu vás také navede k instalaci programu "homebrew", který pomůže s instalací. Pokud instalujete git přes homebrew, není třeba měnit žádné předvolby.

(Make_a_note_of_Git_path)=

- V průběhu instalace, když budete požádání o "zadání umístění", si poznamenejte **cestu k instalaci Git**, kterou budete potřebovat v dalším kroku. Bude se jednat o cestu jako "C:\Program Files\Git\cmd\git.exe".

- V průběhu instalace Gitu jen přijměte všechny výchozí možnosti.

- Po instalaci, pokud jste si zapomněli poznamenat cestu k instalaci Gitu, najdete program takto: napište "git" do vyhledávacího panelu Windows, klikněte pravým tlačítkem myši na "Git bash", vyberte "open file location" a přejeďte myší na ikonu "Git bash", která pak odhalí, kde je instalována.

- Před dalším krokem restartujte počítač.

(Building-APK-install-android-studio)=

### Instalace Android Studio

- **Musíte zůstat online při provádění dalších kroků, protože Android Studio bude stahovat několik aktualizací**

```{admonition} What is Android Studio?
:class: dropdown
Android Studio is a program which runs on your computer. It allows you to download source code from the internet (using Git) and build smartphone (and smartwatch) apps. You cannot "break" a current, looping version of **AAPS** which you might have running on a smartphone by building a new or updated app on your PC with Android Studio, these are totally separate processes. 
```

Jedna z nejdůležitějších věcí při instalaci aplikace Android Studio: Buďte trpěliví! Během instalace a nastavení aplikace Android Studio se stahuje spousta věcí, což zabere dost času.

Any version of Android Studio like version Hedgehog or any newer is suitable. With version Ladybug, you might need to do one extra step, but it's doable!

```{admonition} Different UI
:class: warning
Import note: Android Studio changed its UI during the last releases. This guide will show you the steps with the *new UI* in "Ladybug". If you still use the older UI, you might want to change Android Studio to the new UI first following [these instructions](NewUI).
```

Download the [current version of Android Studio](https://developer.android.com/studio) or an older version from the [**Archives**](https://developer.android.com/studio/archive) and accept the download agreements.

![DownloadAndroidStudio](../images/Building-the-App/010_DownloadLadybug.png)

Once the download is finished, start the downloaded application to install it on your computer.
You might need to accept/confirm some warnings about downloaded apps from Windows!

Install Android Studio by clicking "Next", as shown in the following screenshots. You do **not** need to change any settings!

![Welcome\_to\_Android\_Studio\_Setup](../images/Building-the-App/011_InstallLadybug.png)

![Choose\_components](../images/Building-the-App/012_InstallLadybug.png)

![Configuration\_Settings](../images/Building-the-App/013_InstallLadybug.png)

Now click on "Install":

![Choose\_start\_Menu\_Folder](../images/Building-the-App/014_InstallLadybug.png)

Once it's completed, press "Next"

![Installation\_Complete](../images/Building-the-App/015_InstallLadybug.png)

In the last step, click on "Finished" to start Android Studio for the first time.

![Completing\_Android\_Studio\_Setup](../images/Building-the-App/016_InstallLadybug.png)

You will be asked if you want to help improve Android Studio. Choose the option to your liking, it won't make any difference for the following steps.

![Help\_improve\_Android\_Studio](../images/Building-the-App/020_ImproveAS.png)

The welcome screen greets you to the installation of Android Studio. Press "Next".

![Welcome](../images/Building-the-App/022_WelcomeAndroidStudioInstallation.png)

Select "Standard" as installation type.

![Install\_Type](../images/Building-the-App/023_DefaultInstallation.png)

Verify the settings by clicking "Next" again.

![Verify\_Settigns](../images/Building-the-App/024_DefaultInstallation.png)

Now you need to accept the license agreements. You have two sections (1 + 3) on the left side which you have to select one after the other and each select "Accept" (2 + 4) on the right side.

Then the "Finish" (5) button can be clicked.

![License\_Agreement](../images/Building-the-App/025_LicenseAgreement.png)

Some Android packages will now be downloaded and installed. Be patient and wait.

When it's finished, you will find the following screen where you can select "Finish" again.

![Downloading\_Components](../images/Building-the-App/026_DownloadFinished.png)

You will now see the Welcome screen of Android Studio.

![Welcome\_to\_Android\_Studio](../images/Building-the-App/031_WelcomeAndroidStudio.png)

(Building-APK-download-AAPS-code)=

### Stažení zdrojového kódu AAPS

```{admonition} Why can it take a long time to download the AAPS code?
:class: dropdown

The first time **AAPS** is downloaded, Android Studio will connect over the internet to the Github website to download the source code for **AAPS**. This should take about 1 minute. 

Android Studio will then use **Gradle** (a development tool for Android apps) to identify other components needed to build these items on your computer. 
```

Na úvodní obrazovce Android Studia zkontrolujte, že **Projects**" (1) jsou zvýrazněny na levé straně.

Poté klikněte na "**Get from VCS**" (2) vpravo:

![Get\_from\_VCS](../images/Building-the-App/032_GetVCS.png)

Nyní řekneme Android Studiu, odkud kód získat:

![Get from Version Control](../images/Building-the-App/033_CloneGit.png)

- Zvolte "Adresa URL úložiště" (výchozí) vlevo (1).

- Ve výchozím nastavení by měl být vybrán verzovací systém „Git“ (2).

- Nyní zkopírujte tuto adresu URL:
  ```
  https://github.com/nightscout/AndroidAPS.git
  ```
  a vložte ji do textového pole URL (3).

- Check the (default) directory for saving the cloned code exists on your computer and doesn't already exists (4). You can change it to some directoy, but please remember where you stored it!

- Nyní spusťte klonování kódu kliknutím na tlačítko "Clone" (5).

```{admonition} INFORMATION
:class: information
Make a note of the directory. It is where your sourcecode is stored!
```

Nyní uvidíte obrazovku s informací, že se repozitář klonuje:

![cloning\_repository](../images/Building-the-App/034_CloningProgress.png)

At some point, Android Studio will close and start again. You may be asked whether you want to trust the project. Klikněte na "Trust project":

![Trust project](../images/Building-the-App/035_TrustProject.png)

Pouze pro uživatele Windows: Pokud firewall požaduje oprávnění, udělte mu je:

![Firewall permission java](../images/AndroidStudio361_18.png)

Po úspěšném dokončení klonování repozitáře otevře Android Studio naklonovaný projekt.

(NewUI)=

```{admonition} New UI
:class: information
Android Studio changed its UI recently. New installations of Android Studio use the new UI by default!

Only if your Android Studio looks different, you might need to switch to the new UI:
Click on the hamburger menu on the top left, then select **Settings** (or **Preferences** on Apple computers).
In **Appearance & Behaviour**, go to **New UI** and tick **Enable new UI**. Then restart Android Studio to start using it.

If you don't find the option **New UI** don't worry: you are already using it!
```

When Android Studio opened, wait patiently (this may take a few minutes), and particularly, **do not** update the project as suggested in the pop-up.

Android Studio will start a "Gradle project sync" automatically, which will take a couple of minutes to finish. You can see it (still) running:

![AS\_download\_dependencies](../images/Building-the-App/036_GradleSyncing.png)

```{admonition} NEVER UPDATE GRADLE!
:class: warning

Android Studio might recommend updating the gradle system. **Never update gradle!** This will lead to difficulties.
```

Only on windows computers: You might get a notification about windows defender running: Click on **Automatically** and confirm, it will make the build run faster!

![Windows Defender](../images/Building-the-App/037_WindowsDefender.png)

You can leave the gradle sync running and follow the next steps already.

(Building-APK-set-git-path-in-preferences)=

### Set Git path in Android Studio preferences

Nyní nastavíme v Android Studiu cestu k nainstalovanému systému [Git](Install-Git).

- Pouze pro uživatele Windows: Ujistěte se, že jste počítač po [instalaci Git](Install-Git) restartovali. If not, restart now and re-open Android Studio

In the top left corner of **Android Studio**, open the hamburger menu and navigate to **File** > **Settings** (on Windows) or **Android Studio** > **Preferences** (on Mac).
This opens the following window, click to expand the dropdown called **Version Control** (1) and select **Git**

![Version\_control\_Git](../images/Building-the-App/038_SettingsGit.png)

Check if **Android Studio** can automatically locate the correct **Path to Git executable** automatically by clicking the button "Test" (1):

![Git Executable](../images/Building-the-App/039_GitTest.png)

Pokud je automatické nastavení v pořádku, vedle cesty bude zobrazena vaše aktuální verze **Git**.

![Git\_version\_displayed](../images/Building-the-App/039_GitTestSuccess.png)

If you find that **git.exe** is not found automatically, or that clicking "Test" results in an error (1), you can either

- manually enter the path which you saved [earlier](Make_a_note_of_Git_path), or
- click on the folder icon (1) and manually navigating to the directory where **git.exe** was installed [earlier](Make_a_note_of_Git_path)
- Verify your settings with the **Test** button!

  ![Git not found](../images/Building-the-App/039_GitTestError.png)

(Building-APK-generate-signed-apk)=

### Sestavení "podepsaného" APK aplikace AAPS

```{admonition} Why does the AAPS app need to be "signed"?
:class: dropdown

Android requires each app to be _signed_, to ensure that it can only be updated later from the same trusted source that released the original app. For more information on this topic, follow [this link](https://developer.android.com/studio/publish/app-signing.html#generate-key). 

For our purposes, this just means that we generate a signing or "keystore" file and use it when we build the **AAPS** app.
```

**Important: Make sure the gradle sync is finished successfully before proceeding!**

Click the hamburger menu on the top left to open the menu bar.
Select **Build** (1), then select **Generate Signed App Bundle / APK** (2)

![Build apk](../images/Building-the-App/040_GenerateSignedAPK.png)

Vyberte variantu „APK“ namísto předvybrané „Android App Bundle“ a klikněte na „Next“:

![APK instead of bundle](../images/Building-the-App/041_APK.png)

Na další obrazovce zkontrolujte, že "Module" je nastavený na "AAPS.app" (1).

(Building-APK-wearapk)=

```{admonition} INFORMATION!
:class: information
If you want to create the apk for your watch, you now need to select AAPS.wear!
```

![Create\_key\_store](../images/Building-the-App/042_CreateNewKey.png)

Kliknutím na "Create new..." (2) začnete vytvářet váš "keystore" soubor (úložiště klíčů).

```{admonition} INFORMATION!
:class: information
You will only need to create the keystore once.
If you have build AAPS before, do NOT create a new keystore but select your existing one and enter its passwords!
```

**_Poznámka:_** Keystore je soubor, ve kterém jsou uložené informace pro podepisování aplikací. Tento soubor je zašifrovaný a chráněný heslem.

![Create key store](../images/Building-the-App/043_Keystore.png)

- Click the "folder" symbol (1) to select a path on your computer for your key store.

  Do **not** use the directory where you stored your sourcecode but some directory that you would also transfer to a new computer.

```{admonition} WARNING!
:class: warning
Make sure to note down for yourself where your keystore is stored. You will need it when you build the next AndroidAPS update!
```

- Now choose a simple password (and make a note of it), enter it in the password box (2), and confirm it (2).

  Heslo ke keystore souboru a uloženým klíčům nemusí být složité. Pokud v budoucnosti heslo zapomenete, podívejte se na [řešení problému se ztraceným keystore souborem](troubleshooting_androidstudio-lost-keystore).

- Výchozí alias (3) pro váš klíč je "key0", ponechte to beze změny.

- Teď potřebujete heslo k vašemu klíči. Pro zjednodušení, pokud chcete, můžete použít stejné heslo jako k vašemu keystore souboru. Enter a password (4) and confirm it.

```{admonition} WARNING!
:class: warning
Note down these passwords! You will need them when you build the next AAPS update!
```

- The validity is 25 years by default, leave it as it is.

- Enter your first and last name (5). No other information needs to be added but you are free to do (6-7).

- Pro pokračování klikněte na "OK" (8):

On the **Generate signed App Bundle or APK** page, the path to your keystore will now be displayed. Now re-enter the Key Store password (1) and Key password (2), and tick the box (3) to remember passwords, so you don't have to enter them again next time you build the apk (i.e. when updating to a new AAPS version). Klikněte na tlačítko "Next" (4):

![Remember passwords](../images/Building-the-App/044_RememberPwd.png)

On the next screen, select build variant "fullRelease" (2) and click "Create" (3). You should remember the directory displayed at (1), as later you will find your built apk file there!

![Select build variant](../images/Building-the-App/045_BuildPath.png)

Android Studio teď sestaví aplikační soubor APK **AAPS**. It will show "Gradle Build running" (2) at the bottom right. The process takes some time, depending on your computer and internet connection, so **be patient!** If you want to watch the progress of the build, click on the small hammer "build" (1) at the bottom of Android Studio:

![Gradle Running](../images/Building-the-App/046_BuildRunning.png)

Nyní můžete sledovat proces sestavování:

![Android\_Studio\_building](../images/Building-the-App/047_BuildDetails.png)

Po dokončení sestavení aplikace zobrazí Android Studio informaci "BUILD SUCCESSFUL". Můžete vidět vyskakovací okno na kterém můžete kliknout na text "locate". If you miss this, click on the notification icon (1) and then on **locate** (2) at the very bottom of the screen to bring up the Notifications:

![Build finished](../images/Building-the-App/049_ReopenNotification.png)

_If the build was not successful, refer to the [Android Studio Troubleshooting section](../Installing-AndroidAPS/troubleshooting_androidstudio)._

V oznámení klikněte na modrý odkaz "locate":

![Locate build](../images/Building-the-App/048_BuildFinished.png)
Your file manager will open and show you the build apk file that you have just built.

![File location apk](../images/Building-the-App/050_LocateAPK.png)

Congratulations! Now you have built the **AAPS** apk file, you will be transferring this file to your smartphone in the next section of the docs.

Move to the next stage of [Transferring and Installing **AAPS**](Transferring-and-installing-AAPS.md).
