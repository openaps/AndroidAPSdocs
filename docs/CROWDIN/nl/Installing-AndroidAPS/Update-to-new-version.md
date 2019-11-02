# Bijwerken naar een nieuwe versie

## Build yourself instead of download

**AndroidAPS is not available as download due to regulation for medial devices. It is legal to build the app for your own use but you must not give a copy to others! See [FAQ page](../Getting-Started/FAQ.md) for dertails.**

## Important notes

* As of version 2.3 you have to use git to update. Updating via zip file does not work anymore.
* Please use [Android Studio Version 3.5.1](https://developer.android.com/studio/) or newer to build the apk.
* If you are using Dexcom G6 with the [patched Dexcom app](../Hardware/DexcomG6.html#if-using-g6-with-patched-dexcom-app) you will need the version from the [2.4 folder](https://github.com/dexcomapp/dexcomapp/tree/master/2.4).

## Quick walk-through for experienced users

Please skip this paragraph if you update for the first time. The quick walk-through is for experienced users. Your next step would be to [install git](../Installing-AndroidAPS/git-install.rst) if you do not have it already.

If you already updated AAPS in previous versions and use a Windows PC you can update in two simple steps:

1. [Update local copy](../Installing-AndroidAPS/Update-to-new-version#update-your-local-copy) (VCS->Git->Pull)
2. [Generate signed APK](../Installing-AndroidAPS/Update-to-new-version#generate-signed-apk) (Select 'app' instead of 'wear' on your way!)

## Installeer Git (als je dat nog niet hebt)

Follow the manual on the [git installation page](../Installing-AndroidAPS/git-install.rst).

## Update your local copy

* Click: VCS -> Git -> Pull
  
  ![Android Studio - GIT - Pull](../images/Update_Pull.png)

* Click Pull (no changes in dialog field)
  
  ![Android Studio - GIT - Pull 2](../images/Update_Pull2.png)

## Bouwen van de ondertekende APK

<!--- Text is maintained in page building-apk.md ---> Selecteer in het menu "Build" en vervolgens "Generate Signed Bundle / APK...". (Het menu in Android Studio is gewijzigd per september 2018. In older versions select in the menu “Build” and then “Generate Signed APK...”.)

  
Signing means that you sign your generated app but in a digital way as a kind of digital fingerprint in the app itself. Dat is nodig omdat Android om veiligheidsredenen voorschrijft dat een app altijd zo'n handtekening moet hebben. Voor meer informatie over dit onderwerp, volg de link [hier](https://developer.android.com/studio/publish/app-signing.html#generate-key). Veiligheid van apps is een groot en ingewikkeld onderwerp waarin je je niet verder hoeft te verdiepen.

![Screenshot 39a](../images/Installation_Screenshot_39a.PNG)

In het volgende dialoogvenster selecteer je "APK" in plaats van "Android App Bundle" en klik op "Volgende".

![Screenshot 39b](../images/Installation_Screenshot_39b.PNG)

Selecteer "App" en klik op "Next".

![Screenshot 40](../images/Installation_Screenshot_40.png)

Enter your key store path, enter key store password, select key alias and enter key password.

Select 'Remember passwords'.

Then click next.

![Key store path](../images/KeystorePathUpdate.PNG)

Selecteer "full" (volledig) als "Flavour" (smaak) om de volledige AndroidAPS app te maken. Selecteer "V1 Jar Signature" (V2 is optioneel) en klik op "Finish". De volgende informatie kan handig zijn voor later.

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

Om de juiste locatie te openen, ga naar de map met AndroidAPS/app/full/release om het bestand "app-full-release.apk" te vinden. Zet dit bestand op jouw Android telefoon. You can do it on your preferred way:

* Bluetooth
* cloud upload (Google Drive or other cloud services)
* connect computer and phone by cable 
* by mail (Note that some mail apps do not allow apk attachments, in this case use other transfer method.)

In this example Gmail is used as it is fairly simple. To install the self-signed app you need to allow Android on your smartphone to do this installation even if this file is received via Gmail which is normally forbidden. Als je een andere manier gebruikt om de APK over te zetten op je telefoon, geef dan de toestemmingen waar hij naar vraagt zodat je verder kunt.

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

See separate page [troubleshooting Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).