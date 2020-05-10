# Bouwen van de app

## Zelf bouwen, in plaats van downloaden

**AndroidAPS is niet beschikbaar als download vanwege regelgeving voor medische hulpmiddelen. Het is wettelijk wel toegestaan om de app voor eigen gebruik te bouwen, maar het is verboden om de kant-en-klare app te verspreiden. Zie de [Veelgestelde vragen](../Getting-Started/FAQ.md) pagina voor meer informatie.**

## ## Belangrijk:

* Gebruik **[Android Studio Versie 3.6.1](https://developer.android.com/studio/)** of nieuwer om de apk te bouwen.
* [Windows 10 32-bit systems](../Installing-AndroidAPS/troubleshooting_androidstudio#unable-to-start-daemon-process) are not supported by Android Studio 3.6.1.

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

Een van de belangrijkste dingen bij het installeren van Android Studio: **Wees geduldig!** Tijdens de installatie en setup Android Studio is het downloaden van een heleboel dingen die zijn tijd zal nemen.

Installeer [Android Studio](https://developer.android.com/studio/install.html).

Selecteer "Do not import settings" (instellingen niet importeren) omdat je het nog niet eerder hebt gebruikt.

![Do not import settings](../images/AndroidStudio361_01.png)

Bepaal of je gegevens wilt delen met Google of niet.

![Share data with Google](../images/AndroidStudio361_02.png)

Op het volgende scherm klik je op "Next" (Volgende).

![Welcome screen](../images/AndroidStudio361_03.png)

Selecteer “Standard” Installation en klik op “Next”.

![Standard installation](../images/AndroidStudio361_04.png)

Selecteer het thema voor de gebruikersinterface. (In deze handleiding gebruikten we "Light".) Klik dan op "Next" (Volgende). Dit is alleen het uiterlijk van Android Studio, het kleurenschema. Je kunt hier ook iets anders kiezen als je dat mooier vind, wat je hier kiest maakt geen enkel verschil voor het bouwen van de app.

![UI color scheme](../images/AndroidStudio361_05.png)

Klik op "Finish" in het dialoogvenster "Verify Settings" (instellingen controleren).

![Verify settings](../images/AndroidStudio361_06.png)

Wacht geduldig af terwijl Android Studio extra onderdelen downloadt. Zodra alles is gedownload, zal de knop "Finish" blauw worden. Klik nu op de knop.

![Downloading components](../images/AndroidStudio361_07.png)

## Git pad in voorkeuren instellen

Zorg ervoor dat [git is geïnstalleerd](../Installing-AndroidAPS/git-install.rst) op jouw computer.

Op het welkomstscherm van Android Studio klik op de kleine driehoek (1. in het volgende screenshot) en selecteer "Settings" (2.).

![Android Studio settings from welcome screen](../images/AndroidStudio361_08.png)

### Windows

* Klik op het driehoekje naast Version Control "versiebeheer" (1.) om het submenu te openen.
* Klik op Git (2.).
* Zorg ervoor dat de update methode Merge "Samenvoegen" (3.)is geselecteerd.
* Controleer of Android Studio het pad naar git.exe automatisch heeft gevonden door te klikken op de knop "Test" (4.)

![Android Studio settings](../images/AndroidStudio361_09.png)

* Als hij hem heeft gevonden, zal het git versienummer worden getoond.
* Klik op "OK" in het dialoogvenster (1.) en "OK" in het instellingenvenster (2.).

![Automatic git installation succeeded](../images/AndroidStudio361_10.png)

* Als hij het bestand git.exe niet heeft kunnen vinden klik "OK" in het dialoogvenster (1.) en dan de knop met de drie stipjes (2.).
* Gebruik [zoekfunctie](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html) in windows verkenner om "git.exe" te vinden als je niet zeker weet waar op jouw computer het git bestand staat. Je moet zoeken naar git.exe in een map die \bin\ heet.
* Selecteer het pad naar git.exe en zorg ervoor dat je de map hebt geselecteerd in de ** \bin\ ** map (3.) en klik op "OK" (4.).
* Sluit het instellingen venster door te klikken op de "OK" knop (5.).

![Automatic git installation failed](../images/AndroidStudio361_11.png)

* **Start de PC opnieuw op om de installatie van Android Studio af te ronden.**

### Mac

* Elke versie van Git zou moeten werken. Bijvoorbeeld <https://git-scm.com/download/mac>. Volg de instructies op die site om Git te installeren.
* Gebruik homebrew om git te installeren: ```$ brew install git```.
* Voor meer informatie over het installeren van git zie de [officiële git documentatie](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
* Als je git installeert via homebrew, hoef je niets aan de instellingen te wijzigen. Voor het geval je ze toch zoekt: je vind ze hier: Android Studio - Preferences.

## AndroidAPS-code downloaden

* **Als je je computer nog niet hebt heropgestart nadat je het git pad in voorkeuren hebt ingesteld, doe het dan nu. Als je dit niet doet krijg je later een foutmelding.**
* Op het welkomstscherm van Android Studio klikt op het kleine driehoekje van het "Check out project van versiebeheer" (1.).
* Selecteer "Git" (2.).

![Check out project from version control from welcome screen](../images/AndroidStudio361_12.png)

* Als je Android Studio al geopend had en het welkomstscherm niet meer ziet, selecteer je Bestand (1.) > Nieuw (2.) > Project van versiebeheer... (3.) > Git (4.).

![Check out project from version control within Android Studio](../images/AndroidStudio361_13.png)

* Vul de URL in van de hoofdpagina van de AndroidAPS Repository (“https://github.com/MilosKozak/AndroidAPS”) (1.).
* Kies de map waar je de gedownloade code wilt opslaan.
* Klik op de knop "Test" (2.).
* Als de test niet kan worden voltooid, controleer dan de URL en klik opnieuw op "Test".
* Als de URL klopt, wordt "Connection successful" (3.) afgebeeld.
* Klik op de knop "Clone" (4.).

![Clone repository](../images/AndroidStudio361_14.png)

* Klik niet op "Background" terwijl de code wordt gekloond!

![Clone repository - no background action](../images/AndroidStudio361_15.png)

* Nadat de code is gedownload, open je jouw lokale kopie door te klikken op "Ja".

![Open repository](../images/AndroidStudio361_16.png)

* In de rechterbenedenhoek zie je dat Android Studio achtergrondtaken uitvoert "background tasks running".

![Background tasks](../images/AndroidStudio361_17.png)

* Verleen toegang als jouw firewall om toestemming vraagt.

![Firewall permission java](../images/AndroidStudio361_18.png)

* Zodra de achtergrondtaken zijn voltooid, zul je waarschijnlijk het volgende foutbericht zien:

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

* Android Studio might recommend to update the gradle system. **Update Gradle nooit!** Dit kan tot problemen leiden!
* If you see an information on the lower right side of your Android Studio window that Android Gradle Plugin is ready to update click on the text "update" (1.) and in the dialog box on "Don't remind me again for this project" (2.).

![No cradle update](../images/AndroidStudio361_26.png)

## Bouwen van de ondertekende APK

Signing means that you indicate your app to be your own creation but in a digital way as a kind of digital fingerprint within the app itself. Dat is nodig omdat Android om veiligheidsredenen voorschrijft dat een app altijd zo'n handtekening moet hebben. For more information on this topic, follow [this link](https://developer.android.com/studio/publish/app-signing.html#generate-key).

* Click "Build" in the menu bar and select "Generate Signed Bundle / APK...".

![Build apk](../images/AndroidStudio361_27.png)

* Select "APK" (1.) instead of "Android App Bundle" and click "Next" (2.).

![APK instead of bundle](../images/AndroidStudio361_28.png)

* Make sure that module is set to "app" (1.).
* Click "Create new..." (2.) to start creating your key store.
    
    A key store in this case is nothing more than a file in which the information for signing is stored. Het bestandje is versleuteld en beveiligd met een wachtwoord.

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

![Key store bestandslocatie](../images/AndroidStudio361_30.png)

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

## Overzetten van de APK naar je telefoon

Easiest way to transfer app-full-release.apk to your phone is via [USB cable or Google Drive](https://support.google.com/android/answer/9064445?hl=en). Please note that transfer by mail might cause difficulties and is not the preferred way.

On your phone you have to allow installation from unknown sources. Manuals how to do this can be found on the internet (i.e. [here](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) or [here](https://www.androidcentral.com/unknown-sources)).

## Identify receiver (identificeer ontvanger) bij gebruik van xDrip+

[Zie xDrip pagina](../Configuration/xdrip#identify-receiver)

## Problemen oplossen

Zie afzonderlijke pagina over [Probleemoplossing Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).