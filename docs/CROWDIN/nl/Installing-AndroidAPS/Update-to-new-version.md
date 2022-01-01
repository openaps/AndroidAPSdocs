# Bijwerken naar een nieuwe versie

## Zelf bouwen, in plaats van downloaden

**AndroidAPS is niet beschikbaar als download vanwege regelgeving voor medische hulpmiddelen. Het is wettelijk wel toegestaan om de app voor eigen gebruik te bouwen, maar het is verboden om de kant-en-klare app te verspreiden. Zie de [Veelgestelde vragen](../Getting-Started/FAQ.md) pagina voor meer informatie.**

## Belangrijk:

* Bouw zo snel mogelijk een nieuwe app zodra er een nieuwe versie is uitgebracht. Je zult een [melding op het Overzichtscherm van AndroidAPS](../Installing-AndroidAPS/Releasenotes#release-notes) zien over de nieuwe versie.
* Vanaf versie 2.3 moet je git gebruiken om te updaten. Bijwerken via zip-bestand werkt niet meer.
* Vanaf versie 2.7 is de locatie waar de code staat, gewijzigd in <https://github.com/nightscout/AndroidAPS>. Als je niet precies weet hoe git werkt, dan is het het gemakkelijkst om de map (directory) waarin AndroidAPS staat, te verwijderen. Gebruik daarna de instructies voor het nieuw [bouwen van de APK](../Installing-AndroidAPS/Building-APK.md).
* Please use **[Android Studio Version 2020.3.1 (Arctic Fox)](https://developer.android.com/studio/)** or newer to build the apk.
* [Windows 10 32-bit systems](../Installing-AndroidAPS/troubleshooting_androidstudio#unable-to-start-daemon-process) are not supported by Android Studio 2020.3.1.
* Als je "xDrip+" gebruikt, zorg dan dat je de instelling voor [Identify receiver](../Configuration/xdrip#identify-receiver) (identificeer ontvanger) hebt ingevuld in xDrip+.
* You can also use Dexcom G6 with the ['Build your own Dexcom App'](../Hardware/DexcomG6.html#if-using-g6-with-build-your-own-dexcom-app).

## Snelle methode voor ervaren gebruikers

Sla deze alinea over als je AndroidAPS voor het eerst bijwerkt. De snelle methode is voor ervaren gebruikers. De eerste stap is [Git installeren](../Installing-AndroidAPS/git-install.rst) als je dit nog niet gedaan had.

Als je AAPS al eerder hebt bijgewerkt en je hebt een Windows-PC gebruikt, kun je bijwerken in vier eenvoudige stappen:

1. [Exporteer jouw instellingen](../Usage/ExportImportSettings#instellingen-exporteren) voor de zekerheid. Mocht er iets misgaan met bijwerken, dan ben je in ieder geval niet jouw AAPS instellingen kwijt.
2. [Lokale kopie bijwerken](../Installing-AndroidAPS/Update-to-new-version#bijwerken-van-jouw-lokale-kopie) (VCS-> Git-> Pull)
3. [Ondertekende APK genereren](../Installing-AndroidAPS/Update-to-new-version#bouwen-van-de-ondertekende-apk) (Vergeet onderweg niet om 'app' in plaats van 'wear' te selecteren!)
4. Depending on your [BG source](../Configuration/BG-Source.rst) make sure to [identify receiver](../Configuration/xdrip#identify-receiver) in xDrip or use the ['Build your own Dexcom App'](../Hardware/DexcomG6.html#if-using-g6-with-build-your-own-dexcom-app).

## Installeer Git (als je dat nog niet hebt)

Volg de handleiding op de [git-installatiepagina](../Installing-AndroidAPS/git-install.rst).

## Bijwerken van jouw lokale kopie

* Vanaf versie 2.7 is de locatie waar de code staat, gewijzigd in <https://github.com/nightscout/AndroidAPS>. If you are not familiar with git the easiest way for update is remove directory with AndroidAPS on your disk and follow the instructions to do a [New clone](../Installing-AndroidAPS/Building-APK.md). If you have already changed the URL or update from version 2.8.x, follow these steps:

* Open your existing AndroidAPS project with Android Studio. You might need to select your project. (Double) click on the AndroidAPS project.
    
    ![Android Studio - Select Project](../images/update/01_ProjectSelection.png)

* In the menu bar of Android Studio, select Git -> Fetch
    
    ![Android Studio Menu - Git - Fetch](../images/update/02_GitFetch.png)

* You will see a message in the lower right corner that Fetch was successful.
    
    ![Android Studio Menu - Git - Fetch successful](../images/update/03_GitFetchSuccessful.png)

* In the menu bar, now select Git -> Pull
    
    ![Android Studio Menu - Git - Pull](../images/update/04_GitPull.png)

* Leave all options as they are (origin/master) and select Pull
    
    ![Android Studio - Git - Pull dialog](../images/update/05_GitPullOptions.png)

* Wait while download is in progress, you will see this as info in the bottom bar. When it's done, you will see a success message. Note: The files that were updated may vary! This is not an indication
    
    ![Android Studio - Pull successful](../images/update/06_GitPullSuccess.png)

* Gradle Sync will be running a couple of seconds to download some dependencies. Wait until it is finished.
    
    ![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

* Your sourcecode is now the current released version. It's time to build the signed apk from it as described in the [build signed apk section](../Installing-AndroidAPS/Building-APK.html#generate-signed-apk).

## Check AAPS version on phone

After you installed the new apk, you can check the AAPS version on your phone by clicking the three dots menu on the top right and then About.

![AAPS version installed](../images/Update_VersionCheck282.png)

## Problemen oplossen

Zie afzonderlijke pagina over [Probleemoplossing Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).