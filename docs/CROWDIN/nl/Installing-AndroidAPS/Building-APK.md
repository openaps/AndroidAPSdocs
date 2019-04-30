# Bouwen van de app

* * *

***Let op** bij het bouwen van de AndroidAPS 2.0 apk: **Configuration on demand** wordt niet ondersteund door de huidige versie van de Android Gradle plugin! Als je een foutmelding krijgt die gaat over "on demand configuration" kun je het volgende doen:*

     *  *Open het instellingen venster, door op File > Settings (voor Mac: Android Studio > Preferences) te klikken.*
    *  *In het linker subvenster, klik op Build, Execution, Deployment > Compiler.*
    *  *Haal het vinkje weg bij "Configure on demand".*
    *  *Klik op Apply of OK.*
    

## 

### Dit artikel is verdeeld in twee delen.

* In het overzicht gedeelte wordt uitgelegd welke stappen je moet nemen om de APK (APK is het bestandsformaat van een app) te bouwen.
* In de stap voor stap instructie vind je heel gedetailleerd wat je moet doen, met behulp van screenshots. Omdat van Android Studio (het programma waarin je de APK bouwt) vaak een nieuwe versie uitkomt, kan het zijn dat de screenshots niet helemaal hetzelfde zijn als jouw versie maar het is een goede houvast. Android Studio kun je gebruiken onder Windows, Mac OS X en Linux, er kunnen kleine verschillen zitten tussen deze besturingssystemen. Als je vindt dat een belangrijke stap onjuist is of ontbreekt, stel er dan een vraag over in de facebook groep "AndroidAPS gebruikers" of in de Gitter chats [Android APS](https://gitter.im/MilosKozak/AndroidAPS) of [AndroidAPSwiki](https://gitter.im/AndroidAPSwiki/Lobby) zodat we hiernaar kunnen kijken.

## Overzicht

De belangrijkste stappen voor het bouwen van het APK bestand zijn:

* Git installeren
* Android Studio installeren en instellen
* Gebruik Git clone, om een kopie ('kloon') van de broncode voor AndroidAPS te downloaden vanaf Github.
* Open het gedownloade project in Android Studio.
* Bouw de ondertekende APK.
* Zet de ondertekende APK op jouw telefoon.

## Stap voor stap instructie

Gedetailleerde beschrijving van de verschillende stappen.

## Installeer Git + Android Studio

* Git installeren 
  * [Windows](https://gitforwindows.org/)
  * [Mac OS X](http://sourceforge.net/projects/git-osx-installer/)
  * Linux - installeer simpelweg een ‘Package Git’ van de ‘Package Manager’ die bij jouw Linux-Distribution hoort
* Installeer [Android Studio](https://developer.android.com/studio/install.html).
* Instellen van Android Studio als je hem voor het eerst opstart

Selecteer "Do not import settings" (instellingen niet importeren) omdat je het nog niet eerder hebt gebruikt.

![Screenshot 1](../images/Installation_Screenshot_01.png)

Klik "Next" (volgende).

![Screenshot 2](../images/Installation_Screenshot_02.png)

Selecteer “Standard” Installation en klik op “Next”.

![Screenshot 3](../images/Installation_Screenshot_03.png)

Selecteer "Intellij" als thema voor UI (gebruikersinterface) en klik op "Next".

![Screenshot 4](../images/Installation_Screenshot_04.png)

Klik op "Next" in het dialoogvenster "Verify Settings" (instellingen controleren).

![Screenshot 5](../images/Installation_Screenshot_05.png)

De Android emulator (hiermee boots je een smartphone na op je computer) wordt niet gebruikt bij het bouwen van de APK. Klik op "Finish" om de installatie af te ronden, de documentatie kun je later lezen wanneer je wilt.

![Screenshot 6](../images/Installation_Screenshot_06.png)

Android Studio gaat nu allerlei software-onderdelen downloaden. Je kunt klikken op de knop "Show Details" (details weergeven) om te zien wat er precies gebeurt, maar het is niet nodig om dat allemaal te weten.

![Screenshot 7](../images/Installation_Screenshot_07.png)

![Screenshot 8](../images/Installation_Screenshot_08.png)

Wanneer hij klaar is met downloaden, klik op "Finish" (afronden).

![Screenshot 9](../images/Installation_Screenshot_09.png)

* Gefeliciteerd! Je hebt nu Android Studio succesvol geïnstalleerd en je kunt beginnen met het klonen van de broncode. Misschien is het even tijd voor pauze?

## Code en extra componenten downloaden

* Gebruik Git clone in Android Studio zoals in onderstaande screenshots te zien is. Selecteer “Check out project from Version Control” en kies “Git” als versie controle systeem.

![Screenshot 10](../images/Installation_Screenshot_10.png) ![Version_Control_Git](../images/Version_Control_Git.png)

Vul de URL in van de hoofdpagina van de AndroidAPS Repository (“https://github.com/MilosKozak/AndroidAPS”) en klik op “Clone”.

![Screenshot 13](../images/Installation_Screenshot_13.png)

Android Studio zal nu het project gaan klonen (kopiëren). Klik niet op "Background" (achtergrond). Dit gaat snel en wanneer je het naar de achtergrond verplaatst, maak je het onnodig ingewikkeld voor nu.

![Screenshot 14](../images/Installation_Screenshot_14.png)

Je krijgt de melding dat de "checkout from version control" (het klonen) is afgerond. Open het project door op "Yes" te klikken.

![Screenshot 15](../images/Installation_Screenshot_15.png)

Gebruik de standaard "default gradle wrapper" en klik "OK".

![Screenshot 16](../images/Installation_Screenshot_16.png)

Lees en sluit het scherm van de "Tip of the Day" (tip van de dag) van Android Studio door te drukken op "Close" (sluiten).

![Screenshot 17](../images/Installation_Screenshot_17.png)

* Top! Je hebt jouw eigen kopie van de broncode en je bent klaar om de app te gaan bouwen.
* Nu krijg je je eerste foutmelding. Gelukkig geeft Android Studio je direct de oplossing hiervoor.

Klik op "Install missing platform(s) and sync project" (ontbrekende platforms installeren en project synchroniseren). Android Studio zal nu een ontbrekend stuk software gaan installeren.

![Screenshot 18](../images/Installation_Screenshot_18.png)

Accepteer de gebruiksrechtovereenkomst door op "Accept" en op "Next" te klikken.

![Screenshot 19](../images/Installation_Screenshot_19.png)

Het dialoogvenster geeft aan "Please wait until the installation finishes" (wacht aub tot de installatie is afgerond) en dus wacht je even.

![Screenshot 20](../images/Installation_Screenshot_20.png)

Wanneer hij een melding geeft dat dit is afgerond, klik je op "Finish" (afronden). 

![Screenshot 21](../images/Installation_Screenshot_21.png)

En dan... een volgende foutmelding. Maar ook hier geeft Android Studio je weer een vergelijkbare oplossing. Klik op “Install Build Tools and sync project” om de ontbrekende “Tools” te installeren.

![Screenshot 22](../images/Installation_Screenshot_22.png)

Het dialoogvenster geeft aan "Please wait until the installation finishes" (wacht aub tot de installatie is afgerond) en dus wacht je even.

![Screenshot 23](../images/Installation_Screenshot_23.png)

Wanneer hij een melding geeft dat dit is afgerond, klik je op "Finish" (afronden). 

![Screenshot 24](../images/Installation_Screenshot_24.png)

En een andere foutmelding omdat Android Studio weer een ontbrekend platform moet installeren. Klik weer op "Install missing platform(s) and sync project".

![Screenshot 25](../images/Installation_Screenshot_25.png)

Het dialoogvenster geeft aan "Please wait until the installation finishes" (wacht aub tot de installatie is afgerond) en dus wacht je even.

![Screenshot 26](../images/Installation_Screenshot_26.png)

Wanneer hij een melding geeft dat dit is afgerond, klik je op "Finish" (afronden). 

![Screenshot 27](../images/Installation_Screenshot_27.png)

Klik op “Install Build Tools and sync project” om de ontbrekende “Tools” te installeren.

![Screenshot 28](../images/Installation_Screenshot_28.png)

Het dialoogvenster geeft aan "Please wait until the installation finishes" (wacht aub tot de installatie is afgerond) en dus wacht je even.

![Screenshot 29](../images/Installation_Screenshot_29.png)

Wanneer hij een melding geeft dat dit is afgerond, klik je op "Finish" (afronden). 

![Screenshot 30](../images/Installation_Screenshot_30.png)

Jippie! De foutmeldingen zijn voorbij en je bent begonnen. Misschien tijd om wat water te drinken?

![Screenshot 31](../images/Installation_Screenshot_31.png)

<!--- Android Studio recommends we now update the gradle system to version 4.4. If you made this build for an AndroidAPS version before the release of at least a release candidate(RC) of version 2.0 do not follow this recommendation. Otherwise, the build will fail. The gradle system is a tool which Android Studio uses to control the build process. For AndroidAPS there is no disadvantage to using the old gradle version. The APK file in the end is not different. If you build a APK for version 2 of AndroidAPS feel free to upgrade the gradle system to version 4.4. ---> Android Studio recommends to update the gradle system. 

**Never update gradle!** This might lead to difficulties!

Please click "Don't remind me again for this project".

![Screenshot 32](../images/AS_NoGradleUpdate.png)

The build is running again.

![Screenshot 33](../images/Installation_Screenshot_33.png)

Yeah, the first build is successful but we are not finished.

![Screenshot 34](../images/Installation_Screenshot_34.png)

## Bouwen van de ondertekende APK

<!--- Do not forget to copy to update-to-new-version.md --->

In the menu select "Build" and then "Generate Signed Bundle / APK...". (The menu in Android Studio changed as of September 2018. In older versions select in the menu “Build” and then “Generate Signed APK...”.)  
Signing means that you sign your generated app but in a digital way as a kind of digital fingerprint in the app itself. That is necessary because Android has a rule that it only accepts signed code to run for security reasons. For more information on this topic, follow the link [here](https://developer.android.com/studio/publish/app-signing.html#generate-key) Security is a deep and complex topic and you don't need this now.

![Screenshot 39a](../images/Installation_Screenshot_39a.PNG)

In the following dialogue box select "APK" instead of "Android App Bundle" and click button "Next".

![Screenshot 39b](../images/Installation_Screenshot_39b.PNG)

Select "app" and click "Next".

![Screenshot 40](../images/Installation_Screenshot_40.png)

Click "Create new..." to start creating your keystore. A keystore in this case is nothing more than a file in which the information for signing is stored. It is encrypted and the information is secured with passwords. We suggest storing it in your home folder and remember the passwords but if you lose this information it's not a big issue because then you just have to create a new one. Best practice is to store this information carefully.

![Screenshot 41](../images/Installation_Screenshot_41.png)

* Vul de volgende tekstvelden in. 
  * Key store path: is de locatie waar je het bestandje met jouw handtekening opslaat
  * In de Password (wachtwoord) en Confirm (bevestig) velden vul je tweemaal het door jou gekozen wachtwoord in. Tweemaal om op typfouten te controleren.
  * Alias is de naam voor jouw handtekening. Je kunt de vooraf ingevulde tekst laten staan, of zelf een naam kiezen die je leuk vindt.
  * Ook hier moet je weer tweemaal een door jou gekozen wachtwoord invullen. Ook weer tweemaal, om op typfouten te controleren.
  * Je kunt de Validity (geldigheidsduur) op de standaardwaarde van 25 jaar laten staan.
  * Je hoeft alleen je First and Last Name (voor- en achternaam) in te vullen, de rest is optioneel. Klik daarna op "OK".

![Screenshot 42](../images/Installation_Screenshot_42.png)

Fill in the information of the last dialog in this dialog and click "Next".

![Screenshot 43](../images/Installation_Screenshot_43.png)

Select "full" as flavour for the generated app. Select V1 "Jar Signature" (V2 is optional) and click "Finish". The following information might be important for later use.

* 'Release' is wat je hoort te kiezen als "Build Type", 'Debug' is alleen voor programmeurs, om fouten op te sporen.
* Kies de "Flavour" die je wilt bouwen: 
  * full (dwz je pomp wordt automatisch aangestuurd tijdens closed looping)
  * openloop (dwz voorstellen voor tijdelijke basaalstanden, die de gebruiker handmatig op de pomp instelt)
  * pumpcontrol (dwz alleeneen afstandsbediening voor de pomp, zonder te loopen)
  * nsclient (dwz de gegevens van een andere gebruiker worden weergegeven en care portal bijdragen kunnen worden toegevoegd)

![Screenshot 44](../images/Installation_Screenshot_44.png)

In the event log you see that the Signed APK was generated successfully.

![Screenshot 45](../images/Installation_Screenshot_45.png)

Click the "locate" link in the event log.

![Screenshot 46](../images/Installation_Screenshot_46.png)

## Overzetten van de APK naar je telefoon

<!--- Do not forget to copy to update-to-new-version.md --->

A file manager window opens. It might look a bit different on your system as I am using Linux. On Windows there will be the File Explorer and on Mac OS X the Finder. There you should see the directory with the generated APK file. Unfortunately this is the wrong place as "wear-release.apk" is not the signed "app" APK we are searching for.

![Screenshot 47](../images/Installation_Screenshot_47.png)

Please change to the directory AndroidAPS/app/full/release to find the "app-full-release.apk" file. Transfer this file to your Android smartphone. You can do it on your preferred way, i.e. Bluetooth, cloud upload, connect computer and phone by cable or use email. I use Gmail here in this example as it is fairly simple for me. I mention this because to install the self-signed app we need to allow Android on our smartphone to do this installation even if this file is received via Gmail which is normally forbidden. If you use something other please proceed accordingly.

![Screenshot 48](../images/Installation_Screenshot_48.png)

In the settings of your smartphone there is an area "unknown apps install" where I have to give Gmail the right to install APK files which I get via Gmail.

Selecteer "Toestaan van deze bron". Nadat je klaar bent met installeren, wordt het aanbevolen om de instellingen weer terug te zetten op "niet toestaan".

![Installation from unknown sources](../images/Installation_Screenshot_49-50.png)

De laatste stap is om op het APK bestand te tikken en de app te installeren. Als hij niet uit zichzelf installeert en je hebt een vorige versie van AndroidAPS op je telefoon staan die met een andere handtekening is ondertekend, dan moet je die versie van de app eerst verwijderen. Vergeet niet om eerst je instellingen van die versie te exporteren vóórdat je de app verwijdert!

Van harte! Je hebt de app geïnstalleerd op je telefoon en nu kun je verder met het instellen van AndroidAPS.