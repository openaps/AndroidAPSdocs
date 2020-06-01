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
* Controleer of Android Studio het pad naar git.exe automatisch heeft gevonden door te klikken op de knop "Test" (4.)

![Android Studio instellingen](../images/AndroidStudio361_09.png)

* Als hij hem heeft gevonden, zal het git versienummer worden getoond.
* Klik op "OK" in het dialoogvenster (1.) en "OK" in het instellingenvenster (2.).

![Automatische installatie van git geslaagd](../images/AndroidStudio361_10.png)

* Als hij het bestand git.exe niet heeft kunnen vinden klik "OK" in het dialoogvenster (1.) en dan de knop met de drie stipjes (2.).
* Gebruik [zoekfunctie](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html) in windows verkenner om "git.exe" te vinden als je niet zeker weet waar op jouw computer het git bestand staat. Je moet zoeken naar git.exe in een map die \bin\ heet.
* Selecteer het pad naar git.exe en zorg ervoor dat je de map hebt geselecteerd in de ** \bin\ ** map (3.) en klik op "OK" (4.).
* Sluit het instellingen venster door te klikken op de "OK" knop (5.).

![Automatische installatie van git mislukt](../images/AndroidStudio361_11.png)

* **Start de PC opnieuw op om de installatie van Android Studio af te ronden.**

### Mac

* Elke versie van Git zou moeten werken. Bijvoorbeeld <https://git-scm.com/download/mac>. Volg de instructies op die site om Git te installeren.
* Gebruik homebrew om git te installeren: ```$ brew install git```.
* Voor meer informatie over het installeren van git zie de [officiële git dokumentatie](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
* Als je git installeert via homebrew, hoef je niets aan de instellingen te wijzigen. Voor het geval je ze toch zoekt: je vind ze hier: Android Studio - Preferences.

## AndroidAPS-code downloaden

* **Als je je computer nog niet hebt heropgestart nadat je het git pad in voorkeuren hebt ingesteld, doe het dan nu. Als je dit niet doet krijg je later een foutmelding.**
* Op het welkomstscherm van Android Studio klikt op het kleine driehoekje van het "Check out project van versiebeheer" (1.).
* Selecteer "Git" (2.).

![Project uitchecken van versiebeheer vanaf welkomstscherm](../images/AndroidStudio361_12.png)

* Als je Android Studio al geopend had en het welkomstscherm niet meer ziet, selecteer je Bestand (1.) > Nieuw (2.) > Project van versiebeheer... (3.) > Git (4.).

![Project uitchecken van versiebeheer vanuit Android studio](../images/AndroidStudio361_13.png)

* Vul de URL in van de hoofdpagina van de AndroidAPS Repository (“https://github.com/MilosKozak/AndroidAPS”) (1.).
* Kies de map waar je de gedownloade code wilt opslaan.
* Klik op de knop "Test" (2.).
* Als de test niet kan worden voltooid, controleer dan de URL en klik opnieuw op "Test".
* Als de URL klopt, wordt "Connection successful" (3.) afgebeeld.
* Klik op de knop "Clone" (4.).

![Kloon repository](../images/AndroidStudio361_14.png)

* Klik niet op "Background" terwijl de code wordt gekloond!

![Kloon repository - geen achtergrondactie](../images/AndroidStudio361_15.png)

* Nadat de code is gedownload, open je jouw lokale kopie door te klikken op "Ja".

![Open repository](../images/AndroidStudio361_16.png)

* In de rechterbenedenhoek zie je dat Android Studio achtergrondtaken uitvoert "background tasks running".

![Achtergrondtaken](../images/AndroidStudio361_17.png)

* Verleen toegang als jouw firewall om toestemming vraagt.

![Firewall toestemming java](../images/AndroidStudio361_18.png)

* Zodra de achtergrondtaken zijn voltooid, zul je waarschijnlijk het volgende foutbericht zien:

![SDK licentie](../images/AndroidStudio361_19.png)

## Android SDK downloaden

* Klik op File > Settings (Bestand > Instellingen).

![Instellingen openen](../images/AndroidStudio361_20.png)

* Klik op de kleine driehoek naast Appearance & Behaviour (1.) (Verschijning & Gedrag).
* Klik op de kleine driehoek naast System Settings (2.) en selecteer Android SDK (3.).
* Vink het vakje links van "Android 9.0 (Pie)" (4.) (API Level 28) aan.

![SDK instellingen](../images/AndroidStudio361_21.png)

* Bevestig door op OK te klikken.

![Bevestig SDK wijzigingen](../images/AndroidStudio361_22.png)

* Accepteer de licence agreement (1.) (licentieovereenkomst) en klik op "Next" (2.) (Volgende).

![SDK licentie accepteren](../images/AndroidStudio361_23.png)

* Wacht tot de installatie is voltooid.

![Wachten tijdens SDK installatie](../images/AndroidStudio361_24.png)

* Wanneer de SDK-installatie is voltooid zal de "Finish" knop blauw worden. Klik op de knop.

![Voltooi SDK installatie](../images/AndroidStudio361_25.png)

* Android Studio komt nu misschien met een "update Gradle" melding (Gradle bijwerken). **Update Gradle nooit!** Dit kan tot problemen leiden!
* Als je een melding ziet aan de rechteronderkant van het Android Studio scherm waarin iets staat over "Android Gradle Plugin is ready to update" (dat de Android Gradle Plugin klaar is om te updaten) klik dan op de tekst "update" (1.) en in het dialoogvenster op "Don't remind me again for this prject" (2.) (Herinner me niet opnieuw voor dit project).

![Geen cradle update](../images/AndroidStudio361_26.png)

## Bouwen van de ondertekende APK

Ondertekenen betekent dat je een handtekening op jouw app zet, een soort digitale vingerafdruk. Dat is nodig omdat Android om veiligheidsredenen voorschrijft dat een app altijd zo'n handtekening moet hebben. Voor meer informatie over dit onderwerp, ga naar [deze link](https://developer.android.com/studio/publish/app-signing.html#generate-key).

* Klik op "Build" in de menubalk en kies "Generate Signed Bundle / APK..." (Ondertekende Bundel/APK genereren...).

![Apk bouwen](../images/AndroidStudio361_27.png)

* Selecteer "APK" (1.) in plaats van "Android App Bundle" en klik op "Next" (2.).

![APK in plaats van bundel](../images/AndroidStudio361_28.png)

* Zorg dat de module is ingesteld op "app" (1.).
* Klik op "Create new..." (maak nieuwe...) om jouw eigen key store (digitale handtekening) te maken.
    
    Een key store is een bestandje waarin de informatie van jouw handtekening is opgeslagen. Het bestandje is versleuteld en beveiligd met een wachtwoord.

![Maak key store](../images/AndroidStudio361_29.png)

* Klik op het mapsymbool (1.) om te selecteren waar jouw key store bestandje moet worden opgeslagen. 
* Selecteer een map (submap) waar jouw key store moet worden opgeslagen (2.). **Sla dit NIET op in dezelfde map als jouw project. Je moet het in een andere map opslaan!** Bijvoorbeeld ergens in je persoonlijke bestanden.
* Typ een bestandsnaam voor jouw key store (3.).
* Klik op "OK" (4.).
* Je hoeft niet een heel ingewikkeld wachtwoord te kiezen voor de key store en de key. Zorg er wel voor dat je deze onthoudt of noteer ze op een veilige plek. Je hebt ze telkens nodig wanneer je een nieuwe versie van de app moet bouwen als er een update is uitgekomen. In het geval dat je jouw wachtwoorden toch vergeet zie [probleemoplossing bij verloren key store](../Installing-AndroidAPS/troubleshooting_androidstudio#lost-keystore).
* Typ (5.) en bevestig (6.) het wachtwoord voor jouw key store.
* Doe hetzelfde voor jouw key (7. + 8.).
* Geldigheid (9.) is standaard 25 jaar. Je hoeft de standaardwaarde niet te wijzigen.
* De voor- en de achternaam velden moeten worden ingevuld (10.). Alle andere informatie is optioneel.
* Klik op "OK" (11.) als je klaar bent.

![Key store bestandslocatie](../images/AndroidStudio361_30.png)

* Zorg ervoor dat het vakje om wachtwoorden te onthouden is geselecteerd (1.). Zodat je ze niet opnieuw hoeft in te voeren de volgende keer dat je de apk bouwt (d.w.z. bij het updaten naar een nieuwe AndroidAPS versie).
* Klik op "Next" (2.).

![Wachtwoorden onthouden](../images/AndroidStudio361_31.png)

* Selecteer de buildvariant "fullRelease" (1.). 
* Selecteer de hokjes V1 en V2 voor de handtekeningversies (2.).
* Klik op "Finish". (3.)

![Bouwen voltooien](../images/AndroidStudio361_32.png)

* Android Studio laat het je weten wanneer de APK succesvol is gebouwd: "APK(s) generated succesfully...".
* In het geval dat de APK niet succesvol is gebouwd, verwijzen we je naar de [Problemen oplossen sectie](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).
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

[Zie xDrip pagina](../Configuration/xdrip#identify-receiver)

## Problemen oplossen

Zie afzonderlijke pagina over [Probleemoplossing Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).