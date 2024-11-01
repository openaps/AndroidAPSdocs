# Přenos a instalace AAPS na váš telefon

In the previous section, [building **AAPS**](../SettingUpAaps/BuildingAaps.md), you built the **AAPS** app (which is an .apk file) on a computer.

The next steps are to **transfer** the **AAPS** APK file (as well as other apps you may need, like BYODA, Xdrip+ or another CGM reciever app) to your Android smartphone, and then **install** the app(s).

Following installation of **AAPS** on the smartphone, you will then be able to move onto [**configuring the AAPS loop**](../SettingUpAaps/SetupWizard.md).

There are several ways to transfer the **AAPS** APK file from your computer to the smartphone. Zde popíšeme dva různé způsoby:

* Možnost 1 - Přenos pomocí Google drive (Gdrive)
* Možnost 2 - Přenos pomocí USB kabelu

Vezměte prosím na vědomí, že přenos e-mailem může způsobit potíže, a není doporučován.

## Možnost 1. Přenos pomoví Google drive (Gdrive)

Open [Google.com](https://www.google.com/) in your web browser and login to your Google Account.

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

you should see the **AAPS** icon and be able to open the app.

```{warning}
**DŮLEŽITÉ BEZPEČNOSTNÍ UPOZORNĚNÍ**
Nezapomněli jste zakázat intalaci aplikací z Google Drive?
```

Please go on with [configuring the AAPS loop](../SettingUpAaps/SetupWizard.md).

## Možnost 2. Přenos pomocí USB kabelu
The second way to transfer the AAPS apk file is with a  [USB cable](https://support.google.com/android/answer/9064445?hl=en).

Přenos souboru z jeho umístění ve vašem počítači do adresáře "Stažené soubory" ve vašem telefonu.

Ve vašem telefonu budete muset povolit instalaci aplikací z neznámých zdrojů. Explanations of how to do this can be found on the internet (_e.g._ [here](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) or [here](https://www.androidcentral.com/unknown-sources)).

Jakmile jste přenesli soubor jeho přetažením, otevřete na telefonu složku "Stažené soubory", podržte ikonu AAPS apk souboru a vyberte "Instalovat". You can then proceed to the next step, [Setup Wizard](../SettingUpAaps/SetupWizard.md), which will help you setup the **AAPS** app and loop on your smartphone.

Please go on with [configuring the AAPS loop](../SettingUpAaps/SetupWizard.md).