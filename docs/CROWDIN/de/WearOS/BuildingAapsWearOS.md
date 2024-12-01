# Building the Wear AAPS app

Die Version, die für die Smartwatch benötigt wird (Wear OS apk), wurde aus dem "vollen" **AAPS**-Build für das Android Smartphone herausgelöst. Deswegen musst Du eine zweite Installationsdatei (sog. 'APK') erzeugen, um **AAPS** wear durch "Sideloading" von Deinem Smartphone auf Deine Smartwatch installieren zu können. Es wird dringend empfohlen, die **AAPS** Wear OS apk Datei unmittelbar nach dem ersten Erstellen der vollständigen **AAPS** apk für das Smartphone zu generieren. Not only is this very quick to do if you are [building **AAPS** for the first time](../SettingUpAaps/BuildingAaps.md), but it will avoid any potential compatibility issues when you try to set up the watch-phone communication. Es ist sehr unwahrscheinlich, dass die **AAPS** Wear apk auf der Smartwatch kompatibel mit der **AAPS** Smartphone apk ist, wenn diese mit unterschiedlichen Versionen von Android Studio erstellt/gebaut wurden, oder wenn Monate seit dem ursprünglichen **AAPS** Build vergangen sind.

Wenn Du **AAPS** bereits auf Deinem Smartphone nutzt und bei der Erstellung in der Vergangenheit nicht beide Installationsversionen (Smartphone und -Smartwatch (wear) **AAPS** APKs)) generiert hast, ist es am Besten, beide Dateien neu zu erzeugen. Build the AAPS phone and watch apks at the same time, using the same **keystore file**.

## Supported Wear OS versions

AAPS requires at least Wear OS API level 28 (Android 9).

```{warning}
AAPS Watchfaces are available for Wear OS smartwatches with API level 28 to 33.<br>
Wear OS 5 has [limitations](BuildingAapsWearOs-WearOS5).
```

## Erstellen der **AAPS** Wear APK

The build process for the Wear apk is similar to that for the "full" phone apk.

- Follow the instructions for [Building AAPS](../SettingUpAaps/BuildingAaps.md).
- When you reach [module selection](#Building-APK-wearapk) in "Build the AAPS signed apk", make sure to select **`AndroidAPS.wear`**.

![Wear module](../images/Building-the-App/wear_build1.png)

Select "**fullRelease**" to generate the **AAPS** Wear apk file.

![Wear module](../images/Building-the-App/wear_build2.png)

Wenn Du möchtest, kannst Du aus dem Drop-Down-Menü das **“pumpcontrolRelease”** auswählen und erstellen. Mit dieser Version kannst Du die Pumpe (ohne die Loop-Funktion) remote steuern.

## Troubleshooting

Beim Erstellen der 3.2 **AAPS** App Vollversion (und eigentlich bei jeder signierten App), erzeugt Android Studio eine .json-Datei im gleichen Ordner. This then causes errors with [uncommitted changes](#troubleshooting_androidstudio-uncommitted-changes) when you try to build the next signed app, like the **AAPS** wear app. Am schnellsten kann das behoben werden, in dem Du den Ordner, in dem die Vollversion der AAPS App erzeugt wurde, aufrufst. Der Ordner sollte ungefähr so aussehen:

`C:\Users\Your Name\AndroidStudioProjects\AndroidAPS\app\aapsclient\release.`

Lösche die .json Datei oder verschiebe sie in einen anderen Ordner. Versuche nun die **AAPS** wear App erneut zu erzeugen (build). If that doesn't work, the more detailed [troubleshooting guide](../GettingHelp/TroubleshootingAndroidStudio.md) will help you to identify the specific file causing the issue, which could also be your keystore file. 