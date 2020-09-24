# Sestavení APK

## Vyrobte si místo stažení

**AndroidAPS není k dispozici ke stažení kvůli regulaci zdravotnických zařízení. Je legální vytvořit aplikaci pro své vlastní použití, ale nesmíte dát kopii ostatním! Další informace naleznete v části [Časté dotazy](../Getting-Started/FAQ.md).**

## ## Důležité poznámky

* Chcete-li sestavit apk, použijte **[Android Studio Version 3.6.1](https://developer.android.com/studio/)** nebo novější.
* [32 bitové systémy Windows 10](../Installing-AndroidAPS/troubleshooting_androidstudio#unable-to-start-daemon-process) nejsou programem Android Studio 3.6.1. podporovány.

**Configuration on demand (Konfigurace na vyžádání)** není aktuální verzí plug-inu Android Gradle podporována!

Jestliže vytváření apk selže s chybou "on demand configuration", proveďte následující změnu:

* Otevřete okno Preferences klepnutím na File > Settings (na platformě Mac, Android Studio > Preferences).
* V levé části pak na Build, Execution, Deployment > Compiler.
* Zrušte označení možnosti Configure on demand.
* Klepněte na tlačítko použít nebo OK.

* * *

### Tento článek je rozdělený do dvou částí.

* V části Přehled najdete vysvětlení, které kroky jsou obecně nutné, abyste sestavili soubor APK.
* V části Průvodce krok za krokem najdete snímky obrazovky z konkrétní instalace. Jelikož se Android Studio (vývojové prostředí, které použijeme k sestavení APK) v čase mění velmi rychle, nebudou snímky úplně shodné s vaší instalací, ale určitě vám poskytnou dobrý záchytný bod. Android studio běží na Windows, Linuxu a Mac OS X, a proto mohou být na různých platformách malé rozdíly. Jestliže najdete něco zásadního, co je špatně nebo vám něco chybí, prosím informujte o tom facebookovou skupinu „AndroidAPS users“ nebo použijte Gitter chat [Android APS](https://gitter.im/MilosKozak/AndroidAPS) nebo [AndroidAPSwiki](https://gitter.im/AndroidAPSwiki/Lobby), abychom se na to mohli podívat.

## Přehled

Následují obecné kroky k sestavení souboru APK:

1. [Nainstalujte git](../Installing-AndroidAPS/git-install.rst)
2. [Instalace Android Studio](../Installing-AndroidAPS/Building-APK#install-android-studio)
3. [Nastavte v předvolbách Android Studio cestu ke gitu](../Installing-AndroidAPS/Building-APK#set-git-path-in-preferences)
4. [Stáhněte si kód AndroidAPS](../Installing-AndroidAPS/Building-APK#download-androidaps-code)
5. [Stáhněte Android SDK](../Installing-AndroidAPS/Building-APK#download-android-sdk)
6. [Sestavte aplikaci](../Installing-AndroidAPS/Building-APK#generate-signed-apk) (vygenerujte podepsaný soubor apk)
7. [Nahrajte aplikaci do mobilu](../Installing-AndroidAPS/Building-APK#transfer-apk-to-smartphone)
8. [Možnost „Identify receiver“ při používání xDripu+](../Installing-AndroidAPS/Building-APK#identify-receiver-if-using-xdrip)

## Průvodce krok za krokem

Následuje detailní popis kroků nutných k sestavení souboru APK.

## Nainstalujte git (pokud ho ještě nemáte)

Postupujte podle návodu na [stránka instalace gitu](../Installing-AndroidAPS/git-install.rst).

## Instalace Android Studio

Následující snímky obrazovky byly převzaty z aplikace Android Studio verze 3.6.1. Máte-li vyšší verzi aplikace Android Studio, může Vaše obrazovka vypadat trochu jinak. Měli byste však být schopni najít cestu. K dispozici je [pomoc od komunity](../Where-To-Go-For-Help/Connect-with-other-users.md).

Jedna z nejdůležitějších věcí při instalaci aplikace Android Studio: **Buďte trpěliví!** Během instalace a nastavení aplikace Android Studio se stahuje spousta věcí, které zaberou spoustu času.

Nainstalujte [Android Studio](https://developer.android.com/studio/install.html) a proveďte nastavení během prvního spuštění.

Zvolte "Do not import settings", protože jste tento software zatím nevyužívali.

![Do not import settings](../images/AndroidStudio361_01.png)

Rozhodněte se, zda chcete či nechcete sdílet data se společností Google.

![Share data with Google](../images/AndroidStudio361_02.png)

Na následující obrazovce klepněte na tlačítko „Další“.

![Welcome screen](../images/AndroidStudio361_03.png)

Vyberte „Standard“ instalaci a klikněte na „Next“.

![Standard installation](../images/AndroidStudio361_04.png)

Vyberte si motiv uživatelského rozhraní, který se vám líbí. (V tomto návodu jsme použili „Light“.) Poté klikněte na „Next“. Jedná se pouze o barevný motiv. Můžete si vybrat jakýkoli jiný (např. „Darcula“ pro tmavý režim). Tato volba nemá žádný vliv na sestavení APK.

![UI color scheme](../images/AndroidStudio361_05.png)

V dialogovém okně „Verify Settings“ klikněte na „Next“.

![Verify settings](../images/AndroidStudio361_06.png)

Buďte trpěliví - vyčkejte, dokud Android Studio nestáhne potřebné komponenty. Jakmile je vše staženo, tlačítko „Finish“ se zbarví modře. Klikněte na něj.

![Downloading components](../images/AndroidStudio361_07.png)

## Nastavení cesty k nástroji git v předvolbách

Ujistěte se, že na svém počítači máte [nainstalován git](../Installing-AndroidAPS/git-install.rst).

Na úvodní obrazovce aplikace Android Studio klepněte na malý trojúhelník (1. v dalším snímku obrazovky) a vyberte „Settings“ (2.).

![Android Studio settings from welcome screen](../images/AndroidStudio361_08.png)

### Windows

* Click the small triangle next to Version Control (1.) to open the sub-menu.
* Click Git (2.).
* Make sure update method "Merge" (3.) is selected.
* Check if Android Studio can locate path to git.exe automatically by clicking the button "Test" (4.)

![Android Studio settings](../images/AndroidStudio361_09.png)

* If automatic setting is successful git version will be displayed.
* Click "OK" in the dialog box (1.) and "OK" in the settings window (2.).

![Automatic git installation succeeded](../images/AndroidStudio361_10.png)

* In case file git.exe cannot be found click "OK" in the dialog box (1.) and then the button with the three dots (2.).
* Use [search function](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html) in windows explorer to find "git.exe" if you are unsure where it can be found. You are looking for git.exe located in \bin\ folder.
* Select path to git.exe and make sure you selected the one in ** \bin\ ** folder (3.) and click "OK" (4.).
* Close settings window by clicking "OK" button (5.).

![Automatic git installation failed](../images/AndroidStudio361_11.png)

* **Reboot your computer to update system environment.**

### Mac

* Měly by fungovat všechny verze gitu. Například <https://git-scm.com/download/mac>.
* Použijte homebrew k instalaci gitu: ```$ brew install git```.
* Detaily o instalaci gitu naleznete v [oficiální dokumentaci gitu](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
* Pokud instalujete git přes homebrew, není třeba měnit žádné předvolby. Pokud by bylo třeba: Najdete je zde: Android Studio - Preferences.

## Stáhněte si kód AndroidAPS

* **If you haven't already rebooted your computer after setting git path in preferences do it now. System environment must be updated.**

* There are two options to start a new project:
    
    * On the Android Studio welcome screen click "Get from version control"
        
        ![Check out project from version control from welcome screen](../images/AndroidStudio_GetFromVersionControl.PNG)
    
    * If you already opened Android Studio and do not see the welcome screen anymore select File (1.) > New (2.) > Project from Version Control... (3.)
        
        ![Check out project from version control within Android Studio](../images/AndroidStudio_FileNew.PNG)

* Fill in the URL to the main AndroidAPS repository (https://github.com/nightscout/AndroidAPS) (1.).

* Choose the directory where you want to save the cloned code. (2.)
* Click button "Clone" (3.).

![Clone repository](../images/AndroidStudio_NewURL.PNG)

* Do not click "Background" while repository is cloned!

![Clone repository - no background action](../images/AndroidStudio361_15.png)

* After repository is cloned successfully open your local copy by clicking "Yes".

![Open repository](../images/AndroidStudio361_16.png)

* In the lower right corner you will see the information that Android Studio is running background tasks.

![Background tasks](../images/AndroidStudio361_17.png)

* Grant access if your firewall is asking for permission.

![Firewall permission java](../images/AndroidStudio361_18.png)

* Once the background tasks are finished you will probably see the following error message:

![SDK licence](../images/AndroidStudio361_19.png)

## Stáhněte Android SDK

* Click File > Settings.

![Open settings](../images/AndroidStudio361_20.png)

* Click the small triangle next to Appearance & Behaviour (1.).
* Click the small triangle next to System Settings (2.) and select Android SDK (3.)
* Check the box left of "Android 9.0 (Pie)" (4.) (API Level 28).

![SDK settings](../images/AndroidStudio361_21.png)

* Confirm changes by clicking OK.

![Confirm SDK changes](../images/AndroidStudio361_22.png)

* Accept licence agreement (1.) and click "Next" (2.).

![Accept SDK licence](../images/AndroidStudio361_23.png)

* Wait until installation is finished.

![Wait during SDK installation](../images/AndroidStudio361_24.png)

* When SDK installation is completed the "Finish" button will turn blue. Click this button.

![Finish SDK installation](../images/AndroidStudio361_25.png)

* Android Studio might recommend to update the gradle system. **Never update gradle!** This might lead to difficulties!
* If you see an information on the lower right side of your Android Studio window that Android Gradle Plugin is ready to update click on the text "update" (1.) and in the dialog box on "Don't remind me again for this project" (2.).

![No cradle update](../images/AndroidStudio361_26.png)

## Vytvořte podepsaný soubor APK

Signing means that you indicate your app to be your own creation but in a digital way as a kind of digital fingerprint within the app itself. That is necessary because Android has a rule that it only accepts signed code to run for security reasons. For more information on this topic, follow [this link](https://developer.android.com/studio/publish/app-signing.html#generate-key).

* Click "Build" in the menu bar and select "Generate Signed Bundle / APK...".

![Build apk](../images/AndroidStudio361_27.png)

* Select "APK" (1.) instead of "Android App Bundle" and click "Next" (2.).

![APK instead of bundle](../images/AndroidStudio361_28.png)

* Make sure that module is set to "app" (1.).
* Click "Create new..." (2.) to start creating your key store.
    
    A key store in this case is nothing more than a file in which the information for signing is stored. It is encrypted and the information is secured with passwords.

![Create key store](../images/AndroidStudio361_29.png)

* Click the folder symbol (1.) to select your key store path. 
* Select the path where your key store shall be saved (2.). **Do not save in same folder as project. You must use a different directory!** One option might be your home folder.
* Type a file name for your key store (3.).
* Click "OK" (4.).
* Passwords for key store and key do not have to be very sophisticated. Make sure to remember those or make a note in a safe place. In case you will not remember your passwords in the future you see [troubleshooting for lost key store](../Installing-AndroidAPS/troubleshooting_androidstudio#lost-keystore).
* Enter (5.) and confirm (6.) the password for your key store.
* Do the same for your key (7. + 8.).
* Validity (9.) is 25 years by default. You do not have to change the default value.
* First and last name must be entered (10.). All other information is optional.
* Click "OK" (11.) when you are done.

![Key store path](../images/AndroidStudio361_30.png)

* Make sure the box to remember passwords is checked (1.). So you don't have to enter them again next time you build the apk (i.e. when updating to a new AndroidAPS version).
* Click "Next" (2.).

![Remember passwords](../images/AndroidStudio361_31.png)

* Select build variant "fullRelease" (1.). 
* Check boxes V1 and V2 for signature versions (2.).
* Click "Finish". (3.)

![Finish build](../images/AndroidStudio361_32.png)

* Android Studio will display the information "APK(s) generated successfully..." after build is finished.
* In case build was not successful refer to the [troubleshooting section](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).
* Easiest way to find the apk is to click on "Event log".

![Build successfully - event log](../images/AndroidStudio361_33.png)

* In the event log section click "locate".

![Event log - locate apk](../images/AndroidStudio361_34.png)

* app-full-release.apk is the file you are looking for.

![File location apk](../images/AndroidStudio361_35.png)

## Přeneste soubor APK do telefonu

Easiest way to transfer app-full-release.apk to your phone is via [USB cable or Google Drive](https://support.google.com/android/answer/9064445?hl=en). Please note that transfer by mail might cause difficulties and is not the preferred way.

On your phone you have to allow installation from unknown sources. Manuals how to do this can be found on the internet (i.e. [here](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) or [here](https://www.androidcentral.com/unknown-sources)).

## Možnost „Identify receiver“ při používání xDripu+

[See xDrip+ page](../Configuration/xdrip#identify-receiver)

## Poradce při potížích

Viz samostatná stránka [odstraňování potíží s Android Studiem](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).