# Export & import settings

## ¿Cuándo debo exportar los valores?

Esté preparado para lo imprevisto. Es posible que cambie los valores importantes por accidente y que tenga problemas para deshacer los cambios. Tu teléfono podría romperse o ser robado. Para volver fácilmente al estado en el que ha estado, los valores deben exportarse de forma regular.

La mejor práctica es la exportación después del cambio de valores o la finalización de un objetivo.

Exported settings should be copied to a cloud storage or your computer, better two different locations. Así usted está preparado ante la pérdida o daño de su AAPS teléfono y no tiene que empezar desde cero.

En un sistema Windows 10, se ve así:

```{image} ../images/AAPS_ExImportSettingsWin.png
:alt: AndroidAPS Preferencias del teléfono conectado a una computadora
```

## Información exportada

Among others the following information is part of the settings export:

- [Automation](../Usage/Automation.md) events
- [Config builder](../Configuration/Config-Builder.md) settings
- [Local profile](Config-Builder-local-profile) settings
- [Objectives](../Usage/Objectives.md) status incl. [exam results](Objectives-objective-3-prove-your-knowledge)
- [Preferences](../Configuration/Preferences.md) incl. [NS Client settings](Preferences-nsclient)

## Encrypted backup format

Settings backup is encrypted by a master password that can be set in [Preferences](Preferences-master-password) .

(ExportImportSettings-export-settings)=
## Exportar ajustes

- Hamburger menu (top left corner of screen)
- Maintenance
- Exportar ajustes

```{image} ../images/AAPS_ExportSettings1.png
:alt: AndroidAPS export settings 1
```

- Date and time of export will be added to the file name automatically and displayed together with the path.
- Click 'OK'.
- Enter [master password](Preferences-master-password) and click 'OK'.
- Successful export will be prompted at bottom of the screen.

```{image} ../images/AAPS_ExportSettings2.png
:alt: AndroidAPS export settings 2
```

(ExportImportSettings-import-settings)=
## Importar ajustes

**Do not import settings while on an active Pod session** - see [Omnipod page for details](OmnipodEros-import-settings-from-previous-aaps).

- Hamburger menu (top left corner of screen)
- Maintenance
- Importar ajustes

```{image} ../images/AAPS_ImportSettings1.png
:alt: AndroidAPS import settings 1
```

- All files from folder AAPS/preferences/ on your phone will be shown in the list.
- Select file.
- Confirm import by clicking 'OK'.
- Enter [master password](Preferences-master-password) and click 'OK'.

```{image} ../images/AAPS_ImportSettings2.png
:alt: AndroidAPS import settings 2
```

- Details on the preference file will be shown.
- Last option to cancel import.
- Click 'Import'.
- Confirm message by clicking 'OK'.
- AAPS will be restarted in order to activate imported preferences.

### Note for Dana RS users

- As pump connection settings are also imported AAPS on your new phone will already "know" the pump and therefore not start a bluetooth scan.
- Please pair new phone and pump manually.

### Import settings from previous versions (before AAPS 2.7)

- The "old" settings file (called 'AndroidAPSPreferences' - without file extension) must be in root folder of your smartphone (/storage/emulated/0).
- Do not put the "old" file in the same folder as the new exported settings (AAPS/preferences).
- You will find the "old" file on the bottom of the list in the import dialogue.

## Transfer settings file

- Best way to transfer settings file to a new phone is via USB cable or cloud service (i.e. Google Drive).
- Manuals can be found on the web, i.e. [Android help pages](https://support.google.com/android/answer/9064445?hl=en).
- If you experience problems with the transferred file try another way to transfer file.
