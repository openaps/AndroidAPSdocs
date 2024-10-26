# Přenos a instalace AAPS na váš telefon

In the previous section, [building **AAPS**](../SettingUpAaps/BuildingAaps.md), you built the **AAPS** app (which is an .apk file) on a computer.

Dalším krokem je **přenos** APK souboru **AAPS** (a dalších souborů, které můžete potřebovat, jako BYODA, Xdrip+ nebo jiná CGM aplikace) na váš Android telefon a jeho následná **instalace**.

Following installation of **AAPS** on the smartphone, you will then be able to move onto [**configuring the AAPS loop**](../SettingUpAaps/SetupWizard.md).

Existuje několik možností, jak přenést **AAPS** APK soubor z vašeho počítače na váš chytrý telefon. Zde popíšeme dva různé způsoby:

- Možnost 1 - Přenos pomocí Google drive (Gdrive)
- Možnost 2 - Přenos pomocí USB kabelu

Vezměte prosím na vědomí, že přenos e-mailem může způsobit potíže, a není doporučován.

## Možnost 1. Přenos pomoví Google drive (Gdrive)

Ve vašem webovém prohlížeči otevřete stránku [Google.com](https://www.google.com/) a přihlašte se k vašemu Účtu Google.

V Google menu v pravém horním rohu vyberte aplikaci Drive.

![Start Drive App](../images/GoogleDriveInWebbrowser.png)

Klikněte pravým tlačítkem do prázdného místa pod vašimi soubory a ložkami, vyberte položku "Nahrát soubor" a navigujte k vašemu APK souboru.

![Upload apk file with Google Drive App](../images/GoogleDriveUploadFile.png)

Váš APK soubor by teď měl být nahrán ve vašem Google Drive.

### Use the Google Drive app to execute the apk file for installation

Vezměte si váš telefon a spusťte aplikaci Google Drive. Jedná se předinstalovanou aplikaci a najdete ji na stejném místě, kde se nachází všechny vaše Google aplikace nebo pomocí vyhledávání.

![start the Google Drive app](../images/GoogleDriveMobileAPPLaunch.png)

Spusťte instalaci poklikáním na název vašeho APK souboru v mobilní aplikaci Google Drive.

![launch the apk installation](../images/GoogleDriveMobileUploadedAPK.png)

V případě, že se vám zobrazí bezpečnostní upozornění, že nemůžete instalovat aplikace z Google Drive, povolte na potřebný čas tuto aperaci a následně ji opět zakažte, jelikož při dlouhodobém povolení se jedná o bezpečnostní riziko.

![Security Notice Google Drive](../images/GoogleDriveMobileMissingSecuritySetting.png)

![Security Notice Google Drive](../images/GoogleDriveMobileSettingSecuritySetting.png)

Po dokončení instalace aplikace máte tuto část ukončenou.

Na telefonu byste měli vidět ikonu **AAPS** a měli byste mít možnost ji otevřít.

```{warning}
**DŮLEŽITÉ BEZPEČNOSTNÍ UPOZORNĚNÍ**
Nezapomněli jste zakázat intalaci aplikací z Google Drive?
```

Please go on with [configuring the AAPS loop](../SettingUpAaps/SetupWizard.md).

## Možnost 2. Přenos pomocí USB kabelu

Druhá možnost přenosu AAPS apk souboru je pomocí [USB kabelu](https://support.google.com/android/answer/9064445?hl=en).

Přenos souboru z jeho umístění ve vašem počítači do adresáře "Stažené soubory" ve vašem telefonu.

Ve vašem telefonu budete muset povolit instalaci aplikací z neznámých zdrojů. Popis jak to udělat je dostupný na internetu (_např._ [zde](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) nebo [zde](https://www.androidcentral.com/unknown-sources)).

Jakmile jste přenesli soubor jeho přetažením, otevřete na telefonu složku "Stažené soubory", podržte ikonu AAPS apk souboru a vyberte "Instalovat". You can then proceed to the next step, [Setup Wizard](../SettingUpAaps/SetupWizard.md), which will help you setup the **AAPS** app and loop on your smartphone.

Please go on with [configuring the AAPS loop](../SettingUpAaps/SetupWizard.md).
