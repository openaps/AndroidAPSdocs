# Aktualizace na novou verzi nebo větev (branch)

## Vyrobte si místo stažení

**AndroidAPS není k dispozici ke stažení kvůli regulaci zdravotnických zařízení. Je legální vytvořit aplikaci pro své vlastní použití, ale nesmíte dát kopii ostatním! Další informace naleznete v části [Časté dotazy](../Getting-Started/FAQ.md).**

## Důležité poznámky

* Aktualizujte co nejdříve, jakmile bude k dispozici nová verze. O nové verzi budete [informování na domovské obrazovce AndroidAPS](../Installing-AndroidAPS/Releasenotes#release-notes).
* Od verze 2.3 je potřeba pro aktualizaci použít git. Aktualizace pomocí zip souboru již nefunguje.
* Od verze 2.7 se umístění repozitáře změnilo na <https://github.com/nightscout/AndroidAPS>. Pokud se nevyznáte v práci s nástrojem git, nejjednodušší způsob aktualizace je odstranění staré verze a vytvoření `nového klonu kódu<../Installing-AndroidAPS/Building-APK.html>`_.
* Chcete-li sestavit apk, použijte [ Android Studio verze 4.1.1 ](https://developer.android.com/studio/) nebo novější.
* [32 bitové systémy Windows 10](../Installing-AndroidAPS/troubleshooting_androidstudio#unable-to-start-daemon-process) nejsou programem Android Studio 4.1.1. podporovány.
* Používáte-li xDrip, ujistěte se, že máte zapnutou volbu [identifikovat příjemce ](../Configuration/xdrip#identify-receiver).
* You can also use Dexcom G6 with the ['Build your own Dexcom App'](../Hardware/DexcomG6.html#if-using-g6-with-build-your-own-dexcom-app).

## Rychlý postup pro pokročilé uživatele

Pokud aplikaci aktualizujete poprvé, přeskočte tento odstavec. Je určen pouze pro zkušené uživatele. Pokud ho ještě nemáte, měli byste pokračovat bodem [ nainstalujte git ](../Installing-AndroidAPS/git-install.rst).

Pokud jste v minulosti již AAPS aktualizovali z předchozí verze a používáte-li OS Windows, můžete provést aktualizaci ve čtyřech jednoduchých krocích:

1. [Exportujte své nastavení](../Usage/ExportImportSettings#export-settings) ze stávající verze AAPS do svého telefonu
2. [Aktualizujte lokální kopii](../Installing-AndroidAPS/Update-to-new-version#update-your-local-copy) (VCS->Git->Pull)
3. [Vytvořte podepsané APK (Generate signed APK)](../Installing-AndroidAPS/Update-to-new-version#generate-signed-apk) (Místo 'wear' zvolte 'app'!)
4. Depending on your [BG source](../Configuration/BG-Source.rst) make sure to [identify receiver](../Configuration/xdrip#identify-receiver) in xDrip or use the ['Build your own Dexcom App'](../Hardware/DexcomG6.html#if-using-g6-with-build-your-own-dexcom-app).

## Nainstalujte git (pokud ho ještě nemáte)

Postupujte podle návodu na [stránka instalace gitu](../Installing-AndroidAPS/git-install.rst).

## Aktualizace lokální kopie

* Od verze 2.7 se umístění repozitáře změnilo na <https://github.com/nightscout/AndroidAPS>. Pokud se nevyznáte v práci s nástrojem git, nejjednodušší způsob aktualizace je odstranění staré verze a vytvoření `nového klonu kódu<../Installing-AndroidAPS/Building-APK.html>`_.
* Klikněte na: VCS -> Git -> Pull
    
    ![Android Studio - GIT - Pull](../images/AndroidStudio361_Update01.png)

* Klikněte na možnost Pull (žádné změny v dialogovém okně)
    
    ![Android Studio - GIT - Pull 2](../images/AndroidStudio361_Update02a.png)

* Počkejte, dokud se stahování nedokončí.
    
    ![Android Studio – probíhá stahování](../images/AndroidStudio361_Update03.png)

* Jakmile bude stahování dokončeno, Android Studio vás bude informovat hlášením "all files are up-to-date".
    
    ![Všechny soubory jsou aktuální](../images/AndroidStudio361_Update04.png)

## Vytvořte podepsaný soubor APK

<!--- Text is maintained in page building-apk.md --->

* Klikněte na možnost „Build“ v horní liště a vyberte „Generate Signed Bundle / APK...“.

![Sestavení apk](../images/AndroidStudio361_27.png)

* Vyberte variantu „APK“ (1.) namísto předvybrané „Android App Bundle“ a klikněte na „Next“ (2.).

![APK namísto možnosti bundle](../images/AndroidStudio361_28.png)

* Ujistěte se, že modul je nastaven na "app".
* Vyberte cestu k úložišti klíčů klepnutím na volbu "Vybrat existující...".
* Zadejte heslo pro úložiště klíčů a klíč.
* Máte-li zaškrtnuté políčko pro zapamatování hesla, nemusíte ho zadávat. V případě, že během posledního sestavení aplikace nebylo zaškrtnuto políčko pro zapamatování hesla, a vy jste heslo zapomněli, pokračujte na článek [odstraňování problémů](../Installing-AndroidAPS/troubleshooting_androidstudio#lost-keystore).
* Klikněte na "Next".

![Úložiště klíčů](../images/AndroidStudio361_Update05.png)

* Vyberte variantu sestavení „fullRelease“ (1.). 
* Zaškrtněte kolonky V1 a V2 pro verze podpisu (2.).
* Klikněte na "Finish". (3.)

![Dokončit sestavení](../images/AndroidStudio361_32.png)

* Po úspěšném sestavení Android Studio zobrazí informaci „APK(s) generated successfully...“.
* V případě, že sestavění neproběhlo úspěšně, přejděte do části [řešení problémů](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).
* Nejjednodušší způsob, jak najít soubor apk, je kliknout na „Event Log“.

![Úspěšné sestavení - event log](../images/AndroidStudio361_33.png)

* V event logu klikněte na možnost „locate“.

![Event log - lokalizace apk](../images/AndroidStudio361_34.png)

* Soubor, který hledáte, má název app-full-release.apk.

![Umístění souboru apk](../images/AndroidStudio361_35.png)

## Přeneste soubor APK do telefonu

Nejjednodušší způsob, jak přenést soubor app-full-release.apk do telefonu, je přes [USB kabel nebo Google Drive](https://support.google.com/android/answer/9064445?hl=en). Vezměte prosím na vědomí, že přenos e-mailem může být problematický, a není to tedy preferovaná varianta přenosu.

V telefonu musíte povolit instalaci aplikací z neznámých zdrojů. Návody, jak to udělat, naleznete na internetu (např. [zde](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) nebo [zde](https://www.androidcentral.com/unknown-sources)).

## Zkontrolujte verzi AAPS na telefonu

Verzi AAPS můžete na telefonu zkontrolovat klepnutím na tři tečky vpravo nahoře a poté na položku O aplikaci.

![Nainstalovaná verze AAPS](../images/Update_VersionCheck.png)

## Řešení problémů

Viz samostatná stránka [odstraňování potíží s Android Studiem](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).