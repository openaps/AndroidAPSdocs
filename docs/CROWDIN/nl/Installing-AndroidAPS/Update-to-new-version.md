# Bijwerken naar een nieuwe versie

## Zelf bouwen, in plaats van downloaden

**AndroidAPS is niet beschikbaar als download vanwege regelgeving voor medische hulpmiddelen. Het is wettelijk wel toegestaan om de app voor eigen gebruik te bouwen, maar het is verboden om de kant-en-klare app te verspreiden. Zie de [Veelgestelde vragen](../Getting-Started/FAQ.md) pagina voor meer informatie.**

## Belangrijk:

* Vanaf versie 2.3 moet je git gebruiken om te updaten. Bijwerken via zip-bestand werkt niet meer.
* Gebruik [](https://developer.android.com/studio/)Android Studio Versie 3.5.1 of nieuwer om de apk te bouwen.
* [Windows 10 32-bits systemen](../Installing-AndroidAPS/troubleshooting_androidstudio#unable-to-start-daemon-process) worden niet ondersteund door Android Studio 3.5.1.
* Als je "xDrip+" gebruikt, zorg dan dat je de instelling voor [Identify receiver](../Configuration/xdrip#identify-receiver) (identificeer ontvanger) hebt ingevuld in xDrip+.
* Als je de Dexcom G6 gebruikt met de [aangepaste Dexcom-app](../Hardware/DexcomG6#if-using-g6-with-patched-dexcom-app), dan moet je de versie uit de [2.4 map](https://github.com/dexcomapp/dexcomapp/tree/master/2.4) gebruiken.

## Snelle methode voor ervaren gebruikers

Sla deze alinea over als je app voor de eerste keer bijwerkt. De snelle methode is voor ervaren gebruikers. De eerste stap is [Git installeren](../Installing-AndroidAPS/git-install.rst) als je dit nog niet gedaan had.

Als je al eerder een update van AAPS hebt gedaan en je gebruikt een Windows-PC dan kun je bijwerken in drie simpele stappen:

1. [Lokale kopie bijwerken](../Installing-AndroidAPS/Update-to-new-version#update-your-local-copy) (VCS-> Git-> Pull)
2. [Ondertekende APK genereren](../Installing-AndroidAPS/Update-to-new-version#generate-signed-apk) (Vergeet onderweg niet om 'app' in plaats van 'wear' te selecteren!)
3. Afhankelijk van jouw [BG-bron](../Configuration/BG-Source.rst), zorg dat je bij xDrip+ de [Identify receiver](../Configuration/xdrip#identify-receiver) hebt ingesteld, of zorg dat je de aangepaste Dexcom-app uit de [2.4 map](https://github.com/dexcomapp/dexcomapp/tree/master/2.4) gebruikt.

## Installeer Git (als je dat nog niet hebt)

Volg de handleiding op de [git-installatiepagina](../Installing-AndroidAPS/git-install.rst).

## Bijwerken van jouw lokale kopie

* Klik op: VCS-> Git-> Pull
  
  ![Android Studio - GIT - Pull](../images/Update_Pull.png)

* Klik op Pull (laat alles staan zoals het is in het dialoogvenster)
  
  ![Android Studio - GIT - Pull 2](../images/Update_Pull2.png)

## Bouwen van de ondertekende APK

<!--- Text is maintained in page building-apk.md ---> Selecteer in het menu "Build" en vervolgens "Generate Signed Bundle / APK...". (Het menu in Android Studio is gewijzigd per september 2018. In oudere versies selecteerde je in het menu "Build" en vervolgens "Generate Signed APK...”.)

  
Ondertekenen betekent dat je de door jou gemaakte app ondertekent. Dit is een soort digitale vingerafdruk in de app zelf. Dat is nodig omdat Android om veiligheidsredenen voorschrijft dat een app altijd zo'n handtekening moet hebben. Voor meer informatie over dit onderwerp, volg de link [hier](https://developer.android.com/studio/publish/app-signing.html#generate-key). Veiligheid van apps is een groot en ingewikkeld onderwerp waarin je je niet verder hoeft te verdiepen.

![Screenshot 39a](../images/Installation_Screenshot_39a.PNG)

In het volgende dialoogvenster selecteer je "APK" in plaats van "Android App Bundle" en klik op "Volgende".

![Screenshot 39b](../images/Installation_Screenshot_39b.PNG)

Selecteer "App" en klik op "Next".

![Screenshot 40](../images/Installation_Screenshot_40.png)

Vul de locatie in waar jouw key store bestand (digitale handtekening) te vinden is, en het wachtwoord van jouw key store. Vul ook jouw key alias (naam van jouw 'handtekening') en het bijbehorende wachtwoord in.

Selecteer 'Wachtwoorden onthouden'.

Klik daarna op "Next" (Volgende).

![Key store path](../images/KeystorePathUpdate.PNG)

Selecteer "full" (volledig) als "Flavour" (smaak) om de volledige AndroidAPS app te maken. Selecteer "V1 Jar Signature" (V2 is optioneel) en klik op "Finish". De volgende informatie kan handig zijn voor later.

* 'Release' is wat je hoort te kiezen als "Build Type", 'Debug' is alleen voor programmeurs.
* Kies de "Flavour" die je wilt bouwen: 
  * full/fullRelease (volledige versie van de app, deze heb je nodig om het systeem in closed loop modus te gebruiken)
  * openloop (je krijgt alleen voorstellen voor tijdelijke basaalstanden, die jij als gebruiker handmatig op de pomp moet invoeren)
  * pumpcontrol (functioneert alleen als afstandsbediening voor je pomp, zonder te loopen)
  * nsclient (je kunt de real time gegevens van een andere looper bekijken je kunt dingen invullen in de care portal van die andere looper, wordt gebruikt door ouders van een loopend kind)

![Screenshot 44](../images/Installation_Screenshot_44.png)

In het Event Log kun je zien dat de Signed APK (ondertekende APK) succesvol is gebouwd.

![Screenshot 45](../images/Installation_Screenshot_45.png)

Klik op de "locate" link in het Event Log.

![Screenshot 46](../images/Installation_Screenshot_46.png)

## Overzetten van de APK naar je telefoon

<!--- Text is maintained in page building-apk.md ---> Een Verkenner venster zal openen. Het kan dat het er iets anders uitziet, dit screenshot is met een Linux computer gemaakt. In Windows zal de "Verkenner" openen, op een Mac OS X de "Finder" Hier zul je een map zien met daarin een APK bestand. Helaas is dit de VERKEERDE locatie, omdat "wear-release.apk" NIET de ondertekende app die we zoeken.

![Screenshot 47](../images/Installation_Screenshot_47.png)

Om de juiste locatie te openen, ga naar de map met AndroidAPS/app/full/release om het bestand "app-full-release.apk" te vinden. Zet dit bestand op jouw Android telefoon. Dit kan op verschillende manieren:

* Bluetooth
* Via de cloud (bijvoorbeeld Google Drive, Dropbox)
* Simpelweg met een usb kabeltje tussen computer en telefoon 
* Via e-mail (let op: sommige e-mailapps hebben de mogelijkheid om een apk-bestand als bijlage toe te voegen, geblokkeerd. Kies dan één van bovenstaande opties.)

In dit voorbeeld wordt Gmail gebruikt omdat het vrij eenvoudig is. Om de zelf-ondertekende app te kunnen installeren, moet je Android hiervoor toestemming geven, ook al is dit bestand via Gmail ontvangen, wat normaal gesproken niet toegestaan is. Als je een andere manier gebruikt om de APK over te zetten op je telefoon, geef dan de toestemmingen waar hij naar vraagt zodat je verder kunt.

![Screenshot 48](../images/Installation_Screenshot_48.png)

In de instellingen van je telefoon is een optie om "Apps uit onbekende bronnen" toestemming te geven om te kunnen installeren. Daar moet je Gmail (in dit voorbeeld) toestemming geven om de APK te installeren.

Selecteer "Toestaan van deze bron". Nadat je klaar bent met installeren, wordt het aanbevolen om de instellingen weer terug te zetten op "niet toestaan".

![Installeren uit onbekende bronnen](../images/Installation_Screenshot_49-50.png)

De laatste stap is om op het APK bestand te tikken en de app te installeren. Als hij niet uit zichzelf installeert en je hebt een vorige versie van AndroidAPS op je telefoon staan die met een andere handtekening is ondertekend, dan moet je die versie van de app eerst verwijderen. Vergeet niet om eerst je instellingen van die versie te exporteren vóórdat je de app verwijdert!

Van harte! Je hebt de app geïnstalleerd op je telefoon en nu kun je verder met het instellen van AndroidAPS.

## Controleer AAPS versie op telefoon

Je kunt nakijken welke AAPS-versie er op jouw telefoon staat door op de drie stipjes in de rechterbovenhoek van het Overzicht scherm te tikken, en te kiezen voor 'Over'.

![AAPS versie geïnstalleerd](../images/Update_VersionCheck.png)

## Problemen oplossen

Zie afzonderlijke pagina over [Probleemoplossing Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).