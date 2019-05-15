# Bijwerken naar een nieuwe versie of branch

<font color="#FF0000"><b>Belangrijk: Vanaf versie 2.3 moet je git gebruiken om te updaten. Bijwerken via zip-bestand werkt niet meer.</font></b>

## Installeer Git (als je dat nog niet hebt)

* Elke versie van Git zou moeten werken. Bijvoorbeeld <https://git-scm.com/download/win>. Volg de instructies op die site om Git te installeren.
* Onthoud of noteer in welke map Git op jouw computer geïnstalleerd wordt. Dat heb je nodig in de volgende stap.
    
    ![Git installatie pad](../images/Update_GitPath.png)

* Laat Studio weten waar git.exe zich bevindt: File - Settings (Bestand - Instellingen)
    
    ![Android Studio - open instellingen](../images/Update_GitSettings1.png)

* In het volgende venster: Versie Control - Git

* Zorg ervoor dat de update methode "Merge" ("Samenvoegen") is geselecteerd.
    
    ![Android Studio - GIT pad](../images/Update_GitSettings2.png)

## Bijwerken van jouw lokale kopie

* Zorg dat je in het hoofdscherm van Android Studio bent. Klik op VCS > Git > Fetch
    
    ![Android Studio - GIT - Ophalen](../images/Update_Fetch.png)

## Selecteer branch

* Als je de branch wilt wijzigen, selecteer dan een andere branch uit het menu rechtsonder: "master" (de meest actuele, stabiele versie) of een andere versie (zie verderop).
    
    ![](../images/UpdateAAPS1.png)

Kies vervolgens 'Checkout' (je kunt 'Checkout as New Branch' of 'Checkout As...' gebruiken als je hier geen 'Checkout' kunt kiezen).

![](../images/UpdateAAPS2.png)

## Bijwerken vd branch vanuit Github

* Druk op Ctrl+T, selecteer Merge method en druk op OK
    
    ![](../images/merge.png)

Onderin beeld zie je een bericht verschijnen over 'updated project' (bijgewerkt projekt) of 'all files are up-to-date' (alle bestanden zijn bijgewerkt).

## Genereer APK & upload naar telefoon

Bouw de ondertekende apk zoals beschreven in [Bouwen van de app (kopje 'Bouwen van de ondertekende APK')](../Installing-AndroidAPS/Building-APK#generate-signed-apk). Volg de verdere instructies daar om de app op je telefoon te zetten.

![Navigatie Genereren ondertekende APK](../images/GenerateSignedAPK.PNG)

U kunt de AAPS-versie op jouw telefoon bekijken door op de drie stipjes in de rechterbovenhoek van het Overzicht scherm te tikken, en te kiezen voor 'Over'.

![AAPS versie geïnstalleerd](../images/Update_VersionCheck.png)

# Problemen oplossen

## Kotlin compiler warning

Als je de app succesvol hebt gebouwd, maar je krijgt een Kotlin compiler waarschuwing dan kun je deze negeren.

Je kunt verdergaan met het overzetten van de app (*.apk bestand) naar je telefoon.

![negeer Kotlin compiler waarschuwing](../images/GIT_WarningIgnore.PNG)

## Could not download… / Offline Work

Als je een foutmelding krijgt over 'Kon niet downloaden/offline werken' zoals dit

![Waarschuwing kon niet worden gedownload](../images/GIT_Offline1.jpg)

zorg ervoor dat “Offline work” uitgeschakeld is.

File -> Settings (Bestand -> Instellingen)

![Instellingen offline werk](../images/GIT_Offline2.jpg)

## Uncommitted changes

Als je een foutmelding ontvangt over 'Niet-opgenomen veranderingen' zoals

![Niet-opgenomen wijzigingen mislukt](../images/GIT_TerminalCheckOut0.PNG)

### Optie 1

* In Android APS selecteer VCS -> GIT -> Reset HEAD ![HEAD resetten](../images/GIT_TerminalCheckOut3.PNG)

### Optie 2

* Kopieer 'git checkout --' naar klembord (zonder aanhalingstekens)
* Schakel over naar Terminal in Android Studio (linkerbenedenhoek van Android Studio venster) ![Android Studio Terminal](../images/GIT_TerminalCheckOut1.PNG)

* Plak gekopieerde tekst en druk op return ![GIT checkout succes](../images/GIT_TerminalCheckOut2.jpg)

## App niet geïnstalleerd

![telefoonapp niet geïnstalleerd](../images/Update_AppNotInstalled.png)

* Controleer of je inderdaad het bestand "app-full-release.apk" naar jouw telefoon hebt overgebracht.
* Als "App niet geïnstalleerd" wordt weergegeven op jouw telefoon volg dan deze stappen: 
    1. Ga naar de huidige AndroidAPS app op jouw telefoon en [Exporteer instellingen](../Usage/Objectives#export-import-settings)
    2. Verwijder de AndroidAPS app van jouw telefoon.
    3. Schakel vliegtuigmodus in & schakel bluetooth uit.
    4. Installeer nieuwe versie ("app-full-release.apk”)
    5. [Importeer instellingen](../Usage/Objectives#export-import-settings)
    6. Zet bluetooth weer aan en schakel de vliegtuigmodus uit

## App geïnstalleerd maar oude versie

Wanneer je de app succesvol hebt gebouwd, hem naar jouw telefoon hebt overgebracht en geïnstalleerd, maar het versienummer blijft hetzelfde, dan heb je waarschijnlijk de 'Merge' stap gemist in de handleiding voor het [bijwerken van de app](…/Installing-AndroidAPS/Update-to-new-version.html#updating-branch-from-github).

## Geen van de bovengenoemde

Als geen van de bovenstaande tips je geholpen heeft, dan zou je de de app helemaal vanaf nul kunnen bouwen:

1. Ga naar de huidige AndroidAPS app op jouw telefoon en [Exporteer instellingen](../Usage/Objectives#export-import-settings)
2. Zorg dat je het eerder door jouzelf gemaakte key bestandje en wachtwoord bij de hand hebt. Mocht je de wachtwoorden vergeten zijn, kunt je proberen deze te vinden in de 'project files' zoals [hier](https://youtu.be/nS3wxnLgZOo) beschreven.
3. Noteer ergens het pad naar jouw keystore: te vinden in Android Studio -> Build -> Generate Signed APK ![Key store path](../images/KeystorePath.PNG)
    
    4. Bouw app vanaf nul zoals [hier](…/Installing-AndroidAPS/Building-APK.html#download-code-and-additional-components) beschreven. Gebruik bestaande keystore en wachtwoord.
4. Als je de APK hebt gebouwd, verwijder eerst de bestaande app van jouw telefoon. Verplaats daarna de nieuwe apk naar je telefoon en installeer.
5. [Importeer instellingen](../Usage/Objectives#export-import-settings)

## In het ergste geval

In het geval dat zelfs het bouwen van de app vanaf nul niet jouw probleem oplost, zou je kunnen proberen om Android Studio volledig te verwijderen. Sommige gebruikers hebben gemeld dat dit hun probleem heeft opgelost.

Zorg ervoor dat alle bestanden die gekoppeld zijn aan Android Studio worden verwijderd. Handleidingen kunnen online worden gevonden bijvoorbeeld [https://stackoverflow.com/questions/39953495/hoe-to-volledig-uninstall-android-studio-from-windowsv10](https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10).

Installeer Android Studio vanaf nul zoals [hier](/Installing-AndroidAPS/Building-APK#install-android-studio) beschreven.