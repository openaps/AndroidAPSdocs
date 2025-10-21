# Erstellen der Wear-AAPS-App

Die Version, die für die Smartwatch benötigt wird (Wear OS apk), wurde aus dem "vollen" **AAPS**-Build für das Android Smartphone herausgelöst. Deswegen musst Du eine zweite Installationsdatei (sog. 'APK') erzeugen, um **AAPS** wear durch "Sideloading" von Deinem Smartphone auf Deine Smartwatch installieren zu können. Es wird dringend empfohlen, die **AAPS** Wear OS apk Datei unmittelbar nach dem ersten Erstellen der vollständigen **AAPS** apk für das Smartphone zu generieren. Das zu tun während Du ohnehin [**AAPS** erstmalig erstellst](../SettingUpAaps/BuildingAaps.md), geht nicht nur schnell, sondern vermeidet auch spätere Kompatibilitätsprobleme beim Einrichten der Smartwatch-Smartphone-Kommunikation. Es ist sehr unwahrscheinlich, dass die **AAPS** Wear apk auf der Smartwatch kompatibel mit der **AAPS** Smartphone apk ist, wenn diese mit unterschiedlichen Versionen von Android Studio erstellt/gebaut wurden, oder wenn Monate seit dem ursprünglichen **AAPS** Build vergangen sind.

Wenn Du **AAPS** bereits auf Deinem Smartphone nutzt und bei der Erstellung in der Vergangenheit nicht beide Installationsversionen (Smartphone und -Smartwatch (wear) **AAPS** APKs)) generiert hast, ist es am Besten, beide Dateien neu zu erzeugen. Erstelle beide AAPS-APKs (Smartphone und Smartwatch) gleichzeitig und mit der gleichen **-Keystore-Datei**.

## Unterstützte Wear-OS-Versionen

AAPS benötigt mindestens Wear OS API Level 28 (Android 9).

```{warning}
AAPS Zifferblätter sind für Wear OS Smartwatches mit API Level 28 bis 33 verfügbar.<br>
Wear OS 5 hat [Beschränkungen](BuildingAapsWearOs-WearOS5).
```

## Erstellen der **AAPS** Wear APK

Der Erstellprozess für die Wear-APK ist dem der „Vollversion“ der Smartphone-App sehr ähnlich.

- Befolge die Hinweise in der Anleitung [AAPS erstellen](../SettingUpAaps/BuildingAaps.md).
- Wenn Du an die Stele zur [Modulauswahl](#Building-APK-wearapk) im Abschnitt „Signierte AAPS APK erstellen“ kommst, wähle **`AndroidAPS.wear`** aus.

![Wear module](../images/Building-the-App/wear_build1.png)

Wähle „**fullRelease**“ aus, um damit die **AAPS**-Wear-APK-Datei zu erzeugen.

![Wear module](../images/Building-the-App/wear_build2.png)

Wenn Du möchtest, kannst Du aus dem Drop-Down-Menü das **“pumpcontrolRelease”** auswählen und erstellen. Mit dieser Version kannst Du die Pumpe (ohne die Loop-Funktion) remote steuern.

## Problembehandlung

Beim Erstellen der 3.2 **AAPS** App Vollversion (und eigentlich bei jeder signierten App), erzeugt Android Studio eine .json-Datei im gleichen Ordner. Das kann zum Fehler [uncommitted changes](#troubleshooting_androidstudio-uncommitted-changes) führen, wenn die nächste signierte App (wie zum Beispiel die **AAPS** wear App) erstellt werden soll. Am schnellsten kann das behoben werden, in dem Du den Ordner, in dem die Vollversion der AAPS App erzeugt wurde, aufrufst. Der Ordner sollte ungefähr so aussehen:

`C:\Users\Your Name\AndroidStudioProjects\AndroidAPS\app\aapsclient\release.`

Lösche die .json Datei oder verschiebe sie in einen anderen Ordner. Versuche nun die **AAPS** wear App erneut zu erzeugen (build). Wenn das nicht helfen sollte, findest Du im Abschnitt[Fehlerbehebung für Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md) Hilfestellung, um die Datei zu identifizieren, die das Problem ausgelöst hat. Auch die Keystore-Datei kann das Problem sein. 