# Bijwerken naar een nieuwe versie

## Zelf bouwen, in plaats van downloaden

**AndroidAPS is niet beschikbaar als download vanwege regelgeving voor medische hulpmiddelen. Het is wettelijk wel toegestaan om de app voor eigen gebruik te bouwen, maar het is verboden om de kant-en-klare app te verspreiden. Zie de [Veelgestelde vragen](../Getting-Started/FAQ.md) pagina voor meer informatie.**

## Belangrijk:

* Bouw zo snel mogelijk een nieuwe app zodra er een nieuwe versie is uitgebracht. Je zult een [melding op het Overzichtscherm van AndroidAPS](../Installing-AndroidAPS/Releasenotes#release-notes) zien over de nieuwe versie.
* Vanaf versie 2.3 moet je git gebruiken om te updaten. Bijwerken via zip-bestand werkt niet meer.
* As of version 2.7 repository location changed to <https://github.com/nightscout/AndroidAPS>. If you are not familiar with git the easiest way for update is remove directory with AndroidAPS and do a [new clone](../Installing-AndroidAPS/Building-APK.html).
* Please use [Android Studio Version 4.0.1](https://developer.android.com/studio/) or newer to build the apk.
* [Windows 10 32-bit systems](../Installing-AndroidAPS/troubleshooting_androidstudio#unable-to-start-daemon-process) are not supported by Android Studio 4.0.1.
* If you are using xDrip make sure to [identify the receiver](../Configuration/xdrip#identify-receiver).
* If you are using Dexcom G6 with the [patched Dexcom app](../Hardware/DexcomG6#if-using-g6-with-patched-dexcom-app) you will need the version from the [2.4 folder](https://github.com/dexcomapp/dexcomapp/tree/master/2.4).

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

* As of version 2.7 repository location changed to <https://github.com/nightscout/AndroidAPS>. If you are not familiar with git the easiest way for update is remove directory with AndroidAPS and do a [new clone](../Installing-AndroidAPS/Building-APK.html).
* Click: VCS -> Git -> Pull
    
    ![Android Studio - GIT - Pull](../images/AndroidStudio361_Update01.png)

* Click Pull (no changes in dialog field)
    
    ![Android Studio - GIT - Pull 2](../images/AndroidStudio361_Update02a.png)

* Wait while download is in progress.
    
    ![Android Studio - Pull in progress](../images/AndroidStudio361_Update03.png)

* When done Android Studio will inform you that "all files are up-to-date".
    
    ![All files up to date](../images/AndroidStudio361_Update04.png)

## Bouwen van de ondertekende APK

<!--- Text is maintained in page building-apk.md --->

* Klik op "Build" in de menubalk en kies "Generate Signed Bundle / APK..." (Ondertekende Bundel/APK genereren...).

![Apk bouwen](../images/AndroidStudio361_27.png)

* Selecteer "APK" (1.) in plaats van "Android App Bundle" en klik op "Next" (2.).

![APK in plaats van bundel](../images/AndroidStudio361_28.png)

* Zorg dat de module is ingesteld op "app".
* Selecteer jouw key store door te klikken op "Choose existing..." (Kies bestaande...).
* Voer jouw wachtwoorden in voor key stor en key.
* Als je het vakje voor het onthouden van wachtwoorden eerder had geselecteerd, dan staan de wachtwoorden er al en hoef je deze niet in te voeren. Als je het vakje niet had aangevinkt tijdens de laatste keer dat je de app bouwde en je kunt je wachtwoorden niet meer herinneren, ga dan naar de [Problemen oplossen sectie](../Installing-AndroidAPS/troubleshooting_androidstudio#lost-keystore).
* Klik "Next" (volgende).

![Key store](../images/AndroidStudio361_Update05.png)

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

## Controleer AAPS versie op telefoon

U kunt de AAPS-versie op jouw telefoon bekijken door op de drie stipjes in de rechterbovenhoek van het Overzicht scherm te tikken, en te kiezen voor 'Over'.

![AAPS versie geïnstalleerd](../images/Update_VersionCheck.png)

## Problemen oplossen

Zie afzonderlijke pagina over [Probleemoplossing Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).