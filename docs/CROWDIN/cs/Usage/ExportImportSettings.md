# Export & import settings

## Kdy bych měl exportovat nastavení?

Buďte připraveni na nepředvídané situace. Náhodou se vám může povést změnit důležité nastavení, a budete mít problémy s návratem zpět. Mobil se může rozbít nebo bude ukraden. Chcete-li se snadno vrátit do stavu před incidentem, měli byste nastavení exportovat pravidelně.

Osvědčeným postupem je exportovat po změně nastavení nebo dokončení cíle.

Exported settings should be copied to a cloud storage or your computer, better two different locations. Takže tímto jste připraveni na ztrátu nebo poškození telefonu s AAPS a nemusíte začínat od nuly.

Na počítači se systémem Windows 10 to vypadá takto:

![AAPS Preferences phone connected to computer](../images/AAPS_ExImportSettingsWin.png)

## Export Path
The exports will be placed in this folder on your phone:

/Internal Storage/AAPS/preferences

This storage location cannot be changed in the AAPS settings.

## Exportovaná data

Mezi jinými jsou součástí exportu tato nastavení:

- [Automation](../Usage/Automation.md) events
- [Config builder](../Configuration/Config-Builder.md) settings
- [Local profile](Config-Builder-local-profile) settings
- [Objectives](../Usage/Objectives.md) status incl. [exam results](Objectives-objective-3-prove-your-knowledge)
- [Preferences](../Configuration/Preferences.md) incl. [NS Client settings](Preferences-nsclient)

## Encrypted backup format

Settings backup is encrypted by a master password that can be set in [Preferences](Preferences-master-password) .

(ExportImportSettings-export-settings)=
## Exportovat nastavení

- Hamburger menu (top left corner of screen)
- Údržba
- Exportovat nastavení

![AAPS export settings 1](../images/AAPS_ExportSettings1.png)

- Date and time of export will be added to the file name automatically and displayed together with the path.
- Click 'OK'.
- Enter [master password](Preferences-master-password) and click 'OK'.
- Successful export will be prompted at bottom of the screen.

![AAPS export settings 2](../images/AAPS_ExportSettings2.png)

(ExportImportSettings-import-settings)=
## Importujte nastavení

**Do not import settings while on an active Pod session** - see [Omnipod page for details](OmnipodEros-import-settings-from-previous-aaps).

- Hamburger menu (top left corner of screen)
- Údržba
- Importujte nastavení

![AAPS import settings 1](../images/AAPS_ImportSettings1.png)

- All files from folder AAPS/preferences/ on your phone will be shown in the list.
- Select file.
- Confirm import by clicking 'OK'.
- Enter [master password](Preferences-master-password) and click 'OK'.

![AAPS import settings 2](../images/AAPS_ImportSettings2.png)

- Details on the preference file will be shown.
- Last option to cancel import.
- Click 'Import'.
- Confirm message by clicking 'OK'.
- AAPS will be restarted in order to activate imported preferences.

### Note for Dana RS users

- Vzhledem k tomu, že nastavení týkající se připojení pumpy jsou také importována, AAPS na vašem novém telefonu již pumpu „zná“, a proto nezahájí skenování bluetooth.
- Please pair new phone and pump manually.

### Import settings from previous versions (before AAPS 2.7)

- The "old" settings file (called 'AndroidAPSPreferences' - without file extension) must be in root folder of your smartphone (/storage/emulated/0).
- Do not put the "old" file in the same folder as the new exported settings (AAPS/preferences).
- You will find the "old" file on the bottom of the list in the import dialogue.

## Transfer settings file

- Best way to transfer settings file to a new phone is via USB cable or cloud service (i.e. Google Drive).
- Manuals can be found on the web, i.e. [Android help pages](https://support.google.com/android/answer/9064445?hl=en).
- If you experience problems with the transferred file try another way to transfer file.
