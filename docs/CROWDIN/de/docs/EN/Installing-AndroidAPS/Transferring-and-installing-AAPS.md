# AAPS auf Dein Smartphone übertragen und installieren

In the previous section, [building **AAPS**](../building-AAPS.md), you built the **AAPS** app (which is an .apk file) on a computer.

The next steps are to **transfer** the **AAPS** APK file (as well as other apps you may need, like BYODA, Xdrip+ or another CGM reciever app) to your Android smartphone, and then **install** the app(s).

Following installation of **AAPS** on the smartphone, you will then be able to move onto [**configuring the AAPS loop**](configuring-the-AAPS-loop.md).

There are several ways to transfer the **AAPS** APK file from your computer to the smartphone. Here we explain two different ways:

- Option 1 -  Google-Laufwerk (Goggle Drive) verwenden
- Option 2 - USB-Kabel verwenden

Please note that transfer by email might cause difficulties, and is discouraged.

## Option 1. Google-Laufwerk zum Übertragen von Dateien verwenden

Open [Google.com](https://www.google.com/) in your web browser and login to your Google Account.

On the right upper side select the Drive app in the Google menu.

![Start Drive App](../images/GoogleDriveInWebbrowser.png)

Right click in the free area below the files and folders in the Google Drive app and select "Upload File".

![Upload apk file with Google Drive App](../images/GoogleDriveUploadFile.png)

The apk file should now be uploaded on Google Drive.

### use the Google Drive app to excute the apk file for installation

Switch to your mobile and start the Google Drive app. It is a preinstalled app and can be found where the other Google apps are located or with search for the name of the app.

![start the Google Drive app](../images/GoogleDriveMobileAPPLaunch.png)

Launch the apk installation by double click on the filename in the Google Drive App on the mobile.

![launch the apk installation](../images/GoogleDriveMobileUploadedAPK.png)

In case you get a security notice that you are not allowed to install apps from Google Driver at the moment please allow it for that short moment and disallow it afterwards as it is a security risk when you let it enable all the time.

![Security Notice Google Drive](../images/GoogleDriveMobileMissingSecuritySetting.png)

![Security Notice Google Drive](../images/GoogleDriveMobileSettingSecuritySetting.png)

After the installation finished your are done with this step.

you should see the **AAPS** icon and be able to open the app.

```{warning}
**IMPORTANT SAFETY NOTICE**
Did you remeber to disallow the installation from Google Drive?
```

## Please go on with [configuring the AAPS loop](../Installing-AndroidAPS/setup-wizard.md).

## Option 2. USB-Kabel zum Übertragen von Dateien verwenden

Der zweite Weg, um die AAPS-APK-Datei zu übertragen, ist ein [USB-Kabel](https://support.google.com/android/answer/9064445?hl=de) zu nutzen.

Übertrage die Datei von Deinem Computer in den "Downloads"-Ordner auf dem Smartphone.

Auf dem Smartphone musst Du die Installation aus unbekannten Quellen zulassen. Wie das geht kannst Du im Internet nachlesen (_z.B._ [hier](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) oder [hier](https://www.androidcentral.com/unknown-sources)).

Sobald Du die Datei per Drag & Drop übertragen hast, kannst Du sie installieren. Öffne dazu den "Downloads"-Ordner auf dem Smartphone und tippe auf die AAPS-apk. Wählen dann "installieren" aus. Du kannst dann mit dem nächsten Schritt fortfahren, siehe [Einrichtungsassistent](../Installing-AndroidAPS/setup-wizard.md), bei dem Du die **AAPS**-App und den Loop auf Deinem Smartphone einrichtest.
