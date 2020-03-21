# Bijwerken naar een nieuwe versie

## Zelf bouwen, in plaats van downloaden

**AndroidAPS is niet beschikbaar als download vanwege regelgeving voor medische hulpmiddelen. Het is wettelijk wel toegestaan om de app voor eigen gebruik te bouwen, maar het is verboden om de kant-en-klare app te verspreiden. Zie de [Veelgestelde vragen](../Getting-Started/FAQ.md) pagina voor meer informatie.**

## Belangrijk:

* Bouw zo snel mogelijk een nieuwe app zodra er een nieuwe versie is uitgebracht. Je zult een [melding op het Overzichtscherm van AndroidAPS](../Installing-AndroidAPS/Releasenotes.html#release-notes) zien over de nieuwe versie.
* Vanaf versie 2.3 moet je git gebruiken om te updaten. Bijwerken via zip-bestand werkt niet meer.
* Please use [Android Studio Version 3.6.1](https://developer.android.com/studio/) or newer to build the apk.
* [Windows 10 32-bit systems](../Installing-AndroidAPS/troubleshooting_androidstudio#unable-to-start-daemon-process) are not supported by Android Studio 3.6.1.
* Als je "xDrip+" gebruikt, zorg dan dat je de instelling voor [Identify receiver](../Configuration/xdrip#identificeer-ontvanger-identify-receiver) (identificeer ontvanger) hebt ingevuld in xDrip+.
* Als je de Dexcom G6 gebruikt met de [aangepaste Dexcom-app](../Hardware/DexcomG6#g6-met-aangepaste-dexcom-app), dan moet je de versie uit de [2.4 map](https://github.com/dexcomapp/dexcomapp/tree/master/2.4) gebruiken.

## Snelle methode voor ervaren gebruikers

Sla deze alinea over als je app voor de eerste keer bijwerkt. De snelle methode is voor ervaren gebruikers. De eerste stap is [Git installeren](../Installing-AndroidAPS/git-install.rst) als je dit nog niet gedaan had.

Als je al eerder een update van AAPS hebt gedaan en je gebruikt een Windows-PC dan kun je bijwerken in drie simpele stappen:

1. [Exporteer jouw instellingen](../Usage/ExportImportSettings#instellingen-exporteren) voor de zekerheid. Mocht er iets misgaan met bijwerken, dan ben je in ieder geval niet jouw AAPS instellingen kwijt.
2. [Lokale kopie bijwerken](../Installing-AndroidAPS/Update-to-new-version#bijwerken-van-jouw-lokale-kopie) (VCS-> Git-> Pull)
3. [Ondertekende APK genereren](../Installing-AndroidAPS/Update-to-new-version#bouwen-van-de-ondertekende-apk) (Vergeet onderweg niet om 'app' in plaats van 'wear' te selecteren!)
4. Afhankelijk van jouw [BG-bron](../Configuration/BG-Source.rst), zorg dat je bij xDrip+ de [Identify receiver](../Configuration/xdrip#identificeer-ontvanger-identify-receiver) hebt ingesteld, of zorg dat je de aangepaste Dexcom-app uit de [2.4 map](https://github.com/dexcomapp/dexcomapp/tree/master/2.4) gebruikt.

## Installeer Git (als je dat nog niet hebt)

Volg de handleiding op de [git-installatiepagina](../Installing-AndroidAPS/git-install.rst).

## Bijwerken van jouw lokale kopie

* Klik op: VCS-> Git-> Pull
    
    ![Android Studio - GIT - Pull](../images/AndroidStudio361_Update01.png)

* Klik op Pull (laat alles staan zoals het is in het dialoogvenster)
    
    ![Android Studio - GIT - Pull 2](../images/AndroidStudio361_Update02.png)

* Wait while download is in progress.
    
    ![Android Studio - Pull in progress](../images/AndroidStudio361_Update03.png)

* When done Android Studio will inform you that "all files are up-to-date".
    
    ![All files up to date](../images/AndroidStudio361_Update04.png)

## Bouwen van de ondertekende APK

<!--- Text is maintained in page building-apk.md --->

* Click "Build" in the menu bar and select "Generate Signed Bundle / APK...".

![Build apk](../images/AndroidStudio361_27.png)

* Select "APK" (1.) instead of "Android App Bundle" and click "Next" (2.).

![APK instead of bundle](../images/AndroidStudio361_28.png)

* Make sure that module is set to "app".
* Select your key store path by clicking on "Choose existing...".
* Enter your passwords for key store and key.
* If the box to remember passwords is checked you don't have to enter them. In case the box was not checked during last build and you cannot remember the passwords refer to the [troubleshooting section](../Installing-AndroidAPS/troubleshooting_androidstudio#lost-keystore).
* Click "Next".

![Key store](../images/AndroidStudio361_Update05.png)

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

## Controleer AAPS versie op telefoon

You can check the AAPS version on your phone by clicking the three dots menu on the top right and then about.

![AAPS version installed](../images/Update_VersionCheck.png)

## Problemen oplossen

Zie afzonderlijke pagina over [Probleemoplossing Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).