# Bijwerken naar een nieuwe versie of branch

<font color="#FF0000"><b>Belangrijk: Vanaf versie 2.3 moet je git gebruiken om te updaten. Bijwerken via zip-bestand werkt niet meer.</font></b>

## Installeer Git (als je dat nog niet hebt)

### Windows

* Elke versie van Git zou moeten werken. Bijvoorbeeld <https://git-scm.com/download/win>. Volg de instructies op die site om Git te installeren.
* Onthoud of noteer in welke map Git op jouw computer geïnstalleerd wordt. Dat heb je nodig in de volgende stap.
  
  ![Git installatie pad](../images/Update_GitPath.png)

* Laat Studio weten waar git.exe zich bevindt: File - Settings (Bestand - Instellingen)
  
  ![Android Studio - open instellingen](../images/Update_GitSettings1.png)

* In het volgende venster: Versie Control - Git

* Choose correct path: .../Git<font color="#FF0000"><b>/bin</b></font>

* Make sure update method "Merge" is selected.
  
  ![Android Studio - GIT path](../images/Update_GitSettings2a.png)

### Mac

* Elke versie van Git zou moeten werken. For example <https://git-scm.com/download/mac>
* Use homebrew to install git: ```$ brew install git```.
* For details on installing git see the [official git documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
* If you install git via homebrew there is no need to change any preferences. Just in case: They can be found here: Android Studio - Preferences.

## Bijwerken van jouw lokale kopie

* Click: VCS->Git->Fetch
  
  ![Android Studio - GIT - Fetch](../images/Update_Fetch.png)

## Selecteer branch

* If you want to change branch select another branch from tray: master (latest release) or another version (please see below)
  
  ![](../images/UpdateAAPS1.png)

Kies vervolgens 'Checkout' (je kunt 'Checkout as New Branch' of 'Checkout As...' gebruiken als je hier geen 'Checkout' kunt kiezen).

     ![](../images/UpdateAAPS2.png)
    

## Bijwerken vd branch vanuit Github

* Press Ctrl+T, select Merge method and press OK
  
  ![](../images/merge.png)

On the tray you'll see green message about updated project

## Bouwen van de ondertekende APK

<!--- Text is maintained in page building-apk.md ---> Selecteer in het menu "Build" en vervolgens "Generate Signed Bundle / APK...". (Het menu in Android Studio is gewijzigd per september 2018. In oudere versies selecteerde je in het menu "Build" en vervolgens "Generate Signed APK...”.)

  
Ondertekenen betekent dat je de door jou gemaakte app ondertekent. Dit is een soort digitale vingerafdruk in de app zelf. Dat is nodig omdat Android om veiligheidsredenen voorschrijft dat een app altijd zo'n handtekening moet hebben. Voor meer informatie over dit onderwerp, volg de link [hier](https://developer.android.com/studio/publish/app-signing.html#generate-key). Veiligheid van apps is een groot en ingewikkeld onderwerp waarin je je niet verder hoeft te verdiepen.

![Screenshot 39a](../images/Installation_Screenshot_39a.PNG)

In het volgende dialoogvenster selecteer je "APK" in plaats van "Android App Bundle" en klik op "Volgende".

![Screenshot 39b](../images/Installation_Screenshot_39b.PNG)

Selecteer "App" en klik op "Next".

![Screenshot 40](../images/Installation_Screenshot_40.png)

Enter your key store path, enter key store password, select key alias and enter key password.

Select 'Remember passwords'.

Then click next.

![Key store path](../images/KeystorePathUpdate.PNG)

Selecteer "full" (volledig) als "Flavour" (smaak) om de volledige AndroidAPS app te maken. Selecteer "V1 Jar Signature" (V2 is optioneel) en klik op "Finish". The following information might be important for later use.

* 'Release' is wat je hoort te kiezen als "Build Type", 'Debug' is alleen voor programmeurs.
* Kies de "Flavour" die je wilt bouwen: 
  * full (dwz je pomp wordt automatisch aangestuurd tijdens closed looping)
  * openloop (dwz voorstellen voor tijdelijke basaalstanden, die de gebruiker handmatig op de pomp instelt)
  * pumpcontrol (dwz alleeneen afstandsbediening voor de pomp, zonder te loopen)
  * nsclient (dwz de gegevens van een andere gebruiker worden weergegeven en care portal bijdragen kunnen worden toegevoegd)

![Screenshot 44](../images/Installation_Screenshot_44.png)

In het Event Log kun je zien dat de Signed APK (ondertekende APK) succesvol is gebouwd.

![Screenshot 45](../images/Installation_Screenshot_45.png)

Klik op de "locate" link in het Event Log.

![Screenshot 46](../images/Installation_Screenshot_46.png)

## Overzetten van de APK naar je telefoon

<!--- Text is maintained in page building-apk.md ---> Een Verkenner venster zal openen. Het kan dat het er iets anders uitziet, dit screenshot is met een Linux computer gemaakt. In Windows zal de "Verkenner" openen, op een Mac OS X de "Finder" Hier zul je een map zien met daarin een APK bestand. Helaas is dit de VERKEERDE locatie, omdat "wear-release.apk" NIET de ondertekende app die we zoeken.

![Screenshot 47](../images/Installation_Screenshot_47.png)

Om de juiste locatie te openen, ga naar de map met AndroidAPS/app/full/release om het bestand "app-full-release.apk" te vinden. Zet dit bestand op jouw Android telefoon. Het overzetten op je telefoon kun je simpelweg via een usb-kabeltje doen. Andere opties zijn Bluetooth, cloud upload, e-mail. Kies wat je makkelijk vindt. In dit voorbeeld wordt Gmail gebruikt. Om de zelf-ondertekende app te kunnen installeren, moet je Android hiervoor toestemming geven ookal is dit bestand via Gmail ontvangen, wat normaal gesproken niet toegestaan is. Als je een andere manier gebruikt om de APK over te zetten op je telefoon, geef dan de toestemmingen waar hij naar vraagt zodat je verder kunt.

![Screenshot 48](../images/Installation_Screenshot_48.png)

In de instellingen van je telefoon is een optie om "Apps uit onbekende bronnen" toestemming te geven om te kunnen installeren. Daar moet je Gmail (in dit voorbeeld) toestemming geven om de APK te installeren.

Selecteer "Toestaan van deze bron". Nadat je klaar bent met installeren, wordt het aanbevolen om de instellingen weer terug te zetten op "niet toestaan".

![Installeren uit onbekende bronnen](../images/Installation_Screenshot_49-50.png)

De laatste stap is om op het APK bestand te tikken en de app te installeren. Als hij niet uit zichzelf installeert en je hebt een vorige versie van AndroidAPS op je telefoon staan die met een andere handtekening is ondertekend, dan moet je die versie van de app eerst verwijderen. Vergeet niet om eerst je instellingen van die versie te exporteren vóórdat je de app verwijdert!

Van harte! Je hebt de app geïnstalleerd op je telefoon en nu kun je verder met het instellen van AndroidAPS.

## Check AAPS version on phone

You can check the AAPS version on your phone by clicking the three dots menu on the top right and then about.

![AAPS version installed](../images/Update_VersionCheck.png)

# Problemen oplossen

## Kotlin compiler warning

If build completed successfully but you get Kotlin compiler warnings then just ignore these warnings.

App was build successfully and can be transferred to phone.

![ignore Kotline compiler warning](../images/GIT_WarningIgnore.PNG)

## Could not download… / Offline Work

If you get a failure message like this

![Warning could not download](../images/GIT_Offline1.jpg)

make sure that ‘Offline work’ is disabled.

File -> Settings

![Settings offline work](../images/GIT_Offline2.jpg)

## Uncommitted changes

If you receive failure message like

![Failure uncommitted changes](../images/GIT_TerminalCheckOut0.PNG)

### Option 1

* In Android APS select VCS -> GIT -> Reset HEAD ![Reset HEAD](../images/GIT_TerminalCheckOut3.PNG)

### Option 2

* Copy ‘git checkout --’ to clipboard (without quote signs)
* Switch to Terminal in Android Studio (lower left side of Android Studio window) ![Android Studio Terminal](../images/GIT_TerminalCheckOut1.PNG)

* Paste copied text and press return ![GIT checkout success](../images/GIT_TerminalCheckOut2.jpg)

## App not installed

![phone app note installed](../images/Update_AppNotInstalled.png)

* Make sure you have transferred the “app-full-release.apk” file to your phone.
* If "App not installed" is displayed on your phone follow these steps: 
  1. Ga naar de huidige AndroidAPS app op jouw telefoon en [Exporteer instellingen](../Usage/Objectives#export-import-settings)
  2. Uninstall AAPS on your phone.
  3. Enable airplane mode & turn off bluetooth.
  4. Install new version (“app-full-release.apk”)
  5. [Importeer instellingen](../Usage/Objectives#export-import-settings)
  6. Turn bluetooth back on and disable airplane mode

## App installed but old version

If you build the app successfully, transferred it to your phone and installed it successfully but the version number stays the same then you might have missed the merging step in the [update manual](…/Installing-AndroidAPS/Update-to-new-version.html#updating-branch-from-github).

## None of the above worked

If non of the above tips helped you might consider building the app from scratch:

1. Ga naar de huidige AndroidAPS app op jouw telefoon en [Exporteer instellingen](../Usage/Objectives#export-import-settings)
2. Have your key password and key store password ready In case you have forgotten passwords you can try to find them in project files as described [here](https://youtu.be/nS3wxnLgZOo).
3.     Note down the path to your key store
      In Android Studio Build -> Generate Signed APK
      ![Key store path](../images/KeystorePath.PNG)
      
  
  4. Bouw app vanaf nul zoals [hier](…/Installing-AndroidAPS/Building-APK.html#download-code-and-additional-components) beschreven. Gebruik bestaande keystore en wachtwoord.
4. Als je de APK hebt gebouwd, verwijder eerst de bestaande app van jouw telefoon. Verplaats daarna de nieuwe apk naar je telefoon en installeer.
5. [Importeer instellingen](../Usage/Objectives#export-import-settings)

## Worst case scenario

In case even building the app from scratch does not solve your problem you might want to try to uninstall Android Studio completely. Some Users reported that this solved their problem.

Make sure to uninstall all files associated with Android Studio. Manuals can be found online i.e. <https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10>.

Install Android Studio from scratch as described [here](/Installing-AndroidAPS/Building-APK#install-android-studio).