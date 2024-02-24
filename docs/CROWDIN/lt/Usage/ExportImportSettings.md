# Export & import settings

## Kada turėčiau eksportuoti parametrus?

Būkite pasirengę nenumatytiems atvejams. Galite netyčia pakeisti svarbius parametrus ir jums bus sunku anuliuoti pakeitimus. Jūsų išmanusis telefonas gali būti sugadintas arba pavogtas. Kad galėtumėte tiesiog grįžti į nustatymų statusą, kuriame buvote, nustatymus reikia reguliariai eksportuoti.

Rekomenduojama eksportuoti nustatymus atlikus pakeitimus ar įvykdžius tikslą.

Exported settings should be copied to a cloud storage or your computer, better two different locations. Tuomet esate pasirengęs tam atvejui, jei prarasite ar sugadinsite savo AAPS išmanųjį telefoną ir nereikės pradėti nuo nulio.

Windows 10 kompiuteryje tai atrodo maždaug taip:

![AAPS Preferences phone connected to computer](../images/AAPS_ExImportSettingsWin.png)

## Export Path
The exports will be placed in this folder on your phone:

/Internal Storage/AAPS/preferences

This storage location cannot be changed in the AAPS settings.

## Eksportuojama informacija

Be kita ko, eksportuojami šie parametrai:

- [Automation](../Usage/Automation.md) events
- [Config builder](../Configuration/Config-Builder.md) settings
- [Local profile](Config-Builder-local-profile) settings
- [Objectives](../Usage/Objectives.md) status incl. [exam results](Objectives-objective-3-prove-your-knowledge)
- [Preferences](../Configuration/Preferences.md) incl. [NS Client settings](Preferences-nsclient)

## Šifruotas kopijos formatas

Settings backup is encrypted by a master password that can be set in [Preferences](Preferences-master-password) .

(ExportImportSettings-export-settings)=
## Eksportuoti nustatymus

- Hamburger menu (top left corner of screen)
- Maintenance
- Eksportuoti nustatymus

![AAPS export settings 1](../images/AAPS_ExportSettings1.png)

- Date and time of export will be added to the file name automatically and displayed together with the path.
- Click 'OK'.
- Enter [master password](Preferences-master-password) and click 'OK'.
- Successful export will be prompted at bottom of the screen.

![AAPS export settings 2](../images/AAPS_ExportSettings2.png)

(ExportImportSettings-import-settings)=
## Importuokite nustatymus

**Do not import settings while on an active Pod session** - see [Omnipod page for details](OmnipodEros-import-settings-from-previous-aaps).

- Hamburger menu (top left corner of screen)
- Maintenance
- Importuokite nustatymus

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

### Pastaba Dana RS vartotojams

- As pump connection settings are also imported AAPS on your new phone will already "know" the pump and therefore not start a bluetooth scan.
- Please pair new phone and pump manually.

### Importo nustatymai iš ankstesnių versijų (prieš AAPS 2.7)

- The "old" settings file (called 'AndroidAPSPreferences' - without file extension) must be in root folder of your smartphone (/storage/emulated/0).
- Do not put the "old" file in the same folder as the new exported settings (AAPS/preferences).
- You will find the "old" file on the bottom of the list in the import dialogue.

## Nustatymų failo perkėlimas

- Best way to transfer settings file to a new phone is via USB cable or cloud service (i.e. Google Drive).
- Manuals can be found on the web, i.e. [Android help pages](https://support.google.com/android/answer/9064445?hl=en).
- If you experience problems with the transferred file try another way to transfer file.
