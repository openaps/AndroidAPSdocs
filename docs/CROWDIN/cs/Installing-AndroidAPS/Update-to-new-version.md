# Aktualizace na novou verzi nebo větev (branch)

## Vyrobte si místo stažení

**AndroidAPS není k dispozici ke stažení kvůli regulaci zdravotnických zařízení. Je legální vytvořit aplikaci pro své vlastní použití, ale nesmíte dát kopii ostatním! See [FAQ page](../Getting-Started/FAQ.md) for details.**

## Důležité poznámky

* Aktualizujte co nejdříve, jakmile bude k dispozici nová verze. O nové verzi budete [informování na domovské obrazovce AndroidAPS](../Installing-AndroidAPS/Releasenotes.html#release-notes).
* Od verze 2.3 je potřeba pro aktualizaci použít git. Aktualizace pomocí zip souboru již nefunguje.
* Chcete-li sestavit apk, použijte [ Android Studio verze 3.6.1 ](https://developer.android.com/studio/) nebo novější.
* [32 bitové systémy Windows 10](../Installing-AndroidAPS/troubleshooting_androidstudio#unable-to-start-daemon-process) nejsou programem Android Studio 3.6.1. podporovány.
* Používáte-li xDrip, ujistěte se, že máte zapnutou volbu [identifikovat příjemce ](../Configuration/xdrip#identify-receiver).
* Používáte-li Dexcom G6 [ s upravenou Dexcom aplikací ](../Hardware/DexcomG6#if-using-g6-with-patched-dexcom-app), musíte si stáhnout verzi z adresáře [ 2.4 ](https://github.com/dexcomapp/dexcomapp/tree/master/2.4).

## Rychlý postup pro pokročilé uživatele

Pokud aplikaci aktualizujete poprvé, přeskočte tento odstavec. Je určen pouze pro zkušené uživatele. Pokud ho ještě nemáte, měli byste pokračovat bodem [ nainstalujte git ](../Installing-AndroidAPS/git-install.rst).

Pokud jste v minulosti již AAPS aktualizovali a používáte-li Windows PC, můžete provést aktualizaci ve čtyřech jednoduchých krocích:

1. [Exportujte své nastavení](../Usage/ExportImportSettings#how-to-export-settings) ze stávající verze AAPS do svého telefonu
2. [Aktualizujte lokální kopii](../Installing-AndroidAPS/Update-to-new-version#update-your-local-copy) (VCS->Git->Pull)
3. [Generate signed APK](../Installing-AndroidAPS/Update-to-new-version#generate-signed-apk) (Select 'app' instead of 'wear' on your way!)
4. Depending on your [BG source](../Configuration/BG-Source.rst) make sure to [identify receiver](../Configuration/xdrip#identify-receiver) in xDrip or use the patched Dexcom app from the [2.4 folder](https://github.com/dexcomapp/dexcomapp/tree/master/2.4).

## Nainstalujte git (pokud ho ještě nemáte)

Follow the manual on the [git installation page](../Installing-AndroidAPS/git-install.rst).

## Aktualizace lokální kopie

* Click: VCS -> Git -> Pull
    
    ![Android Studio - GIT - Pull](../images/AndroidStudio361_Update01.png)

* Click Pull (no changes in dialog field)
    
    ![Android Studio - GIT - Pull 2](../images/AndroidStudio361_Update02.png)

* Wait while download is in progress.
    
    ![Android Studio - Pull in progress](../images/AndroidStudio361_Update03.png)

* When done Android Studio will inform you that "all files are up-to-date".
    
    ![All files up to date](../images/AndroidStudio361_Update04.png)

## Vytvořte podepsaný soubor APK

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

## Přeneste soubor APK do telefonu

Easiest way to transfer app-full-release.apk to your phone is via [USB cable or Google Drive](https://support.google.com/android/answer/9064445?hl=en). Please note that transfer by mail might cause difficulties and is not the preferred way.

On your phone you have to allow installation from unknown sources. Manuals how to do this can be found on the internet (i.e. [here](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) or [here](https://www.androidcentral.com/unknown-sources)).

## Zkontrolujte verzi AAPS na telefonu

You can check the AAPS version on your phone by clicking the three dots menu on the top right and then about.

![AAPS version installed](../images/Update_VersionCheck.png)

## Poradce při potížích

See separate page [troubleshooting Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).