# Notwendige Überprüfungen nach einem Update von AndroidAPS 2.6

- The program code was changed significantly when switching to AAPS 2.7.
- Therefore it is important that you make some changes or check settings after the update.
- Please see [release notes](../Installing-AndroidAPS/Releasenotes.md#version-2-7-0) for details on new and extended features.

## Prüfe die BZ-Quelle

- Check if BG source is correct after update.
- Especially when using [xDrip+](../Configuration/xdrip.md) it might happen, that BG source is changed to Dexcom app (patched).
- Open [Config builder](../Configuration/Config-Builder.md#bg-source) (hamburger menu on top left side of home screen)
- Scroll down to "BG source".
- Select correct BG source if changes are necessary.

```{image} ../images/ConfBuild_BG.png
:alt: BZ-Quelle
```

## Prüfung abschließen

- AAPS 2.7 contains new objective 11 (in later versions renumbered to objective 10!) for [automation](../Usage/Automation.md).
- You have to finish exam ([objective 3 and 4](../Usage/Objectives.md#objective-3-prove-your-knowledge)) in order to complete [objective 11](../Usage/Objectives.md#objective-10-automation).
- If for example you did not finish the exam in [objective 3](../Usage/Objectives.md#objective-3-prove-your-knowledge) yet, you will have to complete the exam before you can start [objective 11](../Usage/Objectives.md#objective-10-automation).
- Andere, von Dir bereits abgeschlossene Objectives werden dadurch nicht verändert. Du behälst alle Objectives, die Du bereits abgeschlossen hast!

## Master-Passwort festlegen

- Die [exportierten Einstellungen](../Usage/ExportImportSettings.md) sind ab Version 2.7 verschlüsselt.
- Open Preferences (three-dot-menu on top right of home screen)
- Klicke das Dreieck neben "Allgemein".
- Klicke auf "Master-Passwort".
- Gib ein Passwort ein, bestätige es und klicke auf OK.

```{image} ../images/MasterPW.png
:alt: Master-Password festlegen
```

## Exportiere die Einstellungen

- AAPS 2.7 uses a new encrypted backup format.
- You must [export your settings](../Usage/ExportImportSettings.md) after updating to version 2.7.
- Settings files from previous versions can only be imported in AAPS 2.7. Der Export wird im neuen Format erfolgen.
- Make sure to store your exported settings not only on your phone but also in at least one safe place (your pc, cloud storage...).
- If you build AAPS 2.7 apk with the same keystore than in previous versions you can install new version without deleting the previous version.
- All settings as well as finished objectives will remain as they were in the previous version.
- In case you have lost your keystore build version 2.7 with new keystore and import settings from previous version as described in the [troubleshooting section](../Installing-AndroidAPS/troubleshooting_androidstudio.md#lost-keystore).

## Autosens (Hinweis - keine Maßnahmen erforderlich)

- Autosens is changed to a dynamic switching model which replicates the reference design.
- Autosens will now switch between a 24 and 8 hours window for calculating sensitivity. Dabei wird das empfindlichere Ergebnis verwendet.
- Wenn Du bisher oref1 genutzt hast, wirst Du wahrscheinlich bemerken, dass das System weniger dynamisch auf Veränderungen reagiert, da zwischen 8 und 24 Stunden gewechselt wird.

## Pumpen-Passwort für Dana RS setzen (wenn Dana RS verwendet wird)

- Pump password for [Dana RS](../Configuration/DanaRS-Insulin-Pump.md) was not checked in previous versions.
- Open Preferences (three-dot-menu on top right of screen)
- Scroll down and click triangle next to "Dana RS".
- Click "Pump password (v1 only)"
- Enter pump password ([Default password](../Configuration/DanaRS-Insulin-Pump.md#default-password) is different depending on firmware version) and click OK.

```{image} ../images/DanaRSPW.png
:alt: Dana RS Passwort setzen
```

To change password on Dana RS follow instructions on [DanaRS page](../Configuration/DanaRS-Insulin-Pump.md#change-password-on-pump).
