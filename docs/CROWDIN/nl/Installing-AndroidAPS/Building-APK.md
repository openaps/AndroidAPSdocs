# Bouwen van de app

## Zelf bouwen, in plaats van downloaden

**AndroidAPS is niet beschikbaar als download vanwege regelgeving voor medische hulpmiddelen. Het is wettelijk wel toegestaan om de app voor eigen gebruik te bouwen, maar het is verboden om de kant-en-klare app te verspreiden. Zie de [Veelgestelde vragen](../Getting-Started/FAQ.md) pagina voor meer informatie.**

## ## Belangrijk:

* Gebruik **[Android Studio Versie 3.6.1](https://developer.android.com/studio/)** of nieuwer om de apk te bouwen.
* [Windows 10 32-bits systemen](../Installing-AndroidAPS/troubleshooting_androidstudio#unable-to-start-daemon-process) worden niet ondersteund door Android Studio 3.6.1.

**Configuration on demand** wordt niet ondersteund door de huidige versie van de Android Gradle-plugin.

Als je een foutmelding krijgt die gaat over "on demand configuration" kun je het volgende doen:

* Open het Preferences (Voorkeuren) venster door op File > Settings (Bestand > Instellingen) te klikken (op Mac, Android Studio > Voorkeuren).
* In het linkerscherm, klik op Build, Execution, Deployment > Compiler.
* Vink de Configure on demand checkbox uit.
* Klik op Apply (Toepassen) of OK.

* * *

### Dit artikel is verdeeld in twee delen.

* In het overzicht gedeelte wordt uitgelegd welke stappen je moet nemen om de APK (APK is het bestandsformaat van een app) te bouwen.
* In de stap voor stap instructie vind je heel gedetailleerd wat je moet doen, met behulp van screenshots. Omdat van Android Studio (het programma waarin je de APK bouwt) vaak een nieuwe versie uitkomt, kan het zijn dat de screenshots niet helemaal hetzelfde zijn als jouw versie maar het is een goede houvast. Android Studio kun je gebruiken onder Windows, Mac OS X en Linux, er kunnen kleine verschillen zitten tussen deze besturingssystemen. Als je vindt dat een belangrijke stap onjuist is of ontbreekt, stel er dan een vraag over in de facebook groep "AndroidAPS gebruikers" of in de Gitter chats [Android APS](https://gitter.im/MilosKozak/AndroidAPS) of [AndroidAPSwiki](https://gitter.im/AndroidAPSwiki/Lobby) zodat we hiernaar kunnen kijken.

## Overzicht

De belangrijkste stappen voor het bouwen van het APK bestand zijn:

1. [Git installeren](../Installing-AndroidAPS/git-install.rst)
2. [Installeer Git + Android Studio](../Installing-AndroidAPS/Building-APK#install-android-studio)
3. [Stel git path in Android Studio in](../Installing-AndroidAPS/Building-APK#set-git-path-in-preferences)
4. [AndroidAPS-code downloaden](../Installing-AndroidAPS/Building-APK#download-androidaps-code)
5. [Android SDK downloaden](../Installing-AndroidAPS/Building-APK#download-android-sdk)
6. [Bouw de app](../Installing-AndroidAPS/Building-APK#generate-signed-apk) (ondertekende apk genereren)
7. [Apk-bestand overzetten naar je telefoon](../Installing-AndroidAPS/Building-APK#transfer-apk-to-smartphone)
8. [Identify receiver (identificeer ontvanger) bij gebruik van xDrip+](../Installing-AndroidAPS/Building-APK#identify-receiver-if-using-xdrip)

## Stap voor stap instructie

Gedetailleerde beschrijving van de verschillende stappen.

## Installeer Git (als je dat nog niet hebt)

Volg de handleiding op de [git-installatiepagina](../Installing-AndroidAPS/git-install.rst).

## Installeer Git + Android Studio

De volgende screenshots zijn gemaakt met Android Studio Versie 3.6.1. Jouw scherm ziet er misschien een beetje anders uit, afhankelijk van de versie van de Android Studio die je gebruikt. Maar laat je niet tegenhouden door kleine (uiterlijke) verschillen. Wanneer je er niet uitkomt, schroom dan niet om [hulp van andere gebruikers](../Where-To-Go-For-Help/Connect-with-other-users.md) te vragen.

Een van de belangrijkste dingen bij het installeren van Android Studio: **Wees geduldig!** Tijdens de installatie en setup zal Android Studio een heleboel dingen gaan downloaden die best wat tijd kosten.

Installeer [Android Studio](https://developer.android.com/studio/install.html).

Selecteer "Do not import settings" (instellingen niet importeren) omdat je het nog niet eerder hebt gebruikt.

![Instellingen niet importeren](../images/AndroidStudio361_01.png)

Bepaal of je gegevens wilt delen met Google of niet.

![Gegevens delen met Google](../images/AndroidStudio361_02.png)

Op het volgende scherm klik je op "Next" (Volgende).

![Welkomstscherm](../images/AndroidStudio361_03.png)

Selecteer “Standard” Installation en klik op “Next”.

![Standaard installatie](../images/AndroidStudio361_04.png)

Selecteer het thema voor de gebruikersinterface. (In deze handleiding gebruikten we "Light".) Klik dan op "Next" (Volgende). Dit is alleen het uiterlijk van Android Studio, het kleurenschema. Je kunt hier ook iets anders kiezen als je dat mooier vind, wat je hier kiest maakt geen enkel verschil voor het bouwen van de app.

![Kleurenschema](../images/AndroidStudio361_05.png)

Klik op "Finish" in het dialoogvenster "Verify Settings" (instellingen controleren).

![Instellingen controleren](../images/AndroidStudio361_06.png)

Wacht geduldig af terwijl Android Studio extra onderdelen downloadt. Zodra alles is gedownload, zal de knop "Finish" blauw worden. Klik nu op de knop.

![Onderdelen downloaden](../images/AndroidStudio361_07.png)

## Git pad in voorkeuren instellen

Zorg ervoor dat [git is geïnstalleerd](../Installing-AndroidAPS/git-install.rst) op jouw computer.

Op het welkomstscherm van Android Studio klik op de kleine driehoek (1. in het volgende screenshot) en selecteer "Settings" (2.).

![Android Studio-instellingen van welkomstscherm](../images/AndroidStudio361_08.png)

### Windows

* Klik op het driehoekje naast Version Control "versiebeheer" (1.) om het submenu te openen.
* Klik op Git (2.).
* Zorg ervoor dat de update methode Merge "Samenvoegen" (3.)is geselecteerd.
* Check if Android Studio can locate path to git.exe automatically by clicking the button "Test" (4.)
    
    ![Android Studio settings](../images/AndroidStudio361_09.png)

* If automatic setting is successful git version will be displayed.

* Click "OK" in the dialog box (1.) and "OK" in the settings window (2.).
    
    ![Automatic git installation succeeded](../images/AndroidStudio361_10.png)

* In case file git.exe cannot be found click "OK" in the dialog box (1.) and then the button with the three dots (2.).

* Use [search function](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html) in windows explorer to find "git.exe" if you are unsure where it can be found. Je moet zoeken naar git.exe in een map die \bin\ heet.
* Select path to git.exe and make sure you selected the one in ** \bin\ ** folder (3.) and click "OK" (4.).
* Close settings window by clicking "OK" button (5.).
    
    ![Automatic git installation failed](../images/AndroidStudio361_11.png)

* **Reboot your computer to update system environment.**

### Mac

* Any git version should work. For example <https://git-scm.com/download/mac>.
* Use homebrew to install git: ```$ brew install git```.
* For details on installing git see the [official git documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
* If you install git via homebrew there is no need to change any preferences. Voor het geval je ze toch zoekt: je vind ze hier: Android Studio - Preferences.

## AndroidAPS-code downloaden

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
    
    ![No background action](../images/AndroidStudio_NoBackground.png)

* After repository is cloned successfully open your local copy by clicking "Yes".
    
    ![Open repository](../images/AndroidStudio361_16.png)

* In the lower right corner you will see the information that Android Studio is running background tasks.
    
    ![Background tasks](../images/AndroidStudio361_17.png)

* Grant access if your firewall is asking for permission.
    
    ![Firewall permission java](../images/AndroidStudio361_18.png)

* Once the background tasks are finished you will probably see the following error message:
    
    ![SDK licence](../images/AndroidStudio361_19.png)

## Android SDK downloaden

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

## Bouwen van de ondertekende APK

Signing means that you indicate your app to be your own creation but in a digital way as a kind of digital fingerprint within the app itself. That is necessary because Android has a rule that it only accepts signed code to run for security reasons. For more information on this topic, follow [this link](https://developer.android.com/studio/publish/app-signing.html#generate-key).

* Klik op "Build" in de menubalk en kies "Generate Signed Bundle / APK..." (Ondertekende Bundel/APK genereren...).
    
    ![Apk bouwen](../images/AndroidStudio361_27.png)

* Selecteer "APK" (1.) in plaats van "Android App Bundle" en klik op "Next" (2.).
    
    ![APK in plaats van bundel](../images/AndroidStudio361_28.png)

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

* Selecteer de buildvariant "fullRelease" (1.).

* Selecteer de hokjes V1 en V2 voor de handtekeningversies (2.).
* Klik op "Finish". (3.)
    
    ![Bouwen voltooien](../images/AndroidStudio361_32.png)

* Android Studio laat het je weten wanneer de APK succesvol is gebouwd: "APK(s) generated succesfully...".

* In het geval dat de APK niet succesvol is gebouwd, verwijzen we je naar de pagina [Problemen oplossen](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).
* De makkelijkste manier om de apk te vinden is door te klikken op "Event log".
    
    ![Succesvol gebouwd - event log](../images/AndroidStudio361_33.png)

* Klik in de event log sectie op "locate".
    
    ![Event log - zoek apk](../images/AndroidStudio361_34.png)

* app-full-release.apk is het bestand dat je nodig hebt.
    
    ![Bestandslocatie apk](../images/AndroidStudio361_35.png)

## Overzetten van de APK naar je telefoon

De eenvoudigste manier om app-full-release.apk over te zetten op je telefoon is via [USB-kabel of Google Drive](https://support.google.com/android/answer/9064445?hl=en). Overdracht per e-mail kan leiden tot problemen (veel e-mailprogramma's blokkeren apk-bestanden als bijlage) en is dus niet de makkelijkste manier.

Op jouw telefoon moet je installatie uit onbekende bronnen toestaan. Je vindt dit ergens in je telefooninstellingen, waarschijnlijk onder Beveiliging. Handleidingen hoe dit te doen kun je op internet vinden (bijv. [hier](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) of [hier](https://www.androidcentral.com/unknown-sources)).

## Identify receiver (identificeer ontvanger) bij gebruik van xDrip+

[See xDrip+ page](../Configuration/xdrip#identify-receiver)

## Problemen oplossen

Zie afzonderlijke pagina over [Probleemoplossing Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).