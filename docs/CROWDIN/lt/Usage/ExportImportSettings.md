# Export & import settings

## Kada turėčiau eksportuoti parametrus?

Būkite pasirengę nenumatytiems atvejams. Galite netyčia pakeisti svarbius parametrus ir jums bus sunku anuliuoti pakeitimus. Jūsų išmanusis telefonas gali būti sugadintas arba pavogtas. Kad galėtumėte tiesiog grįžti į nustatymų statusą, kuriame buvote, nustatymus reikia reguliariai eksportuoti.

Rekomenduojama eksportuoti nustatymus atlikus pakeitimus ar įvykdžius tikslą.

Exported settings should be copied to a cloud storage or your computer, better two different locations. Tuomet esate pasirengęs tam atvejui, jei prarasite ar sugadinsite savo AAPS išmanųjį telefoną ir nereikės pradėti nuo nulio.

Windows 10 kompiuteryje tai atrodo maždaug taip:

```{image} ../images/AAPS_ExImportSettingsWin.png
:alt: AndroidAPS nuostatų failas - išmanusis telefonas prijungtas prie kompiuterio
```

## Eksportuojama informacija

Be kita ko, eksportuojami šie parametrai:

- [Automation](../Usage/Automation.md) events
- [Config builder](../Configuration/Config-Builder.md) settings
- [Local profile](../Configuration/Config-Builder.md#local-profile) settings
- [Objectives](../Usage/Objectives.md) status incl. [exam results](../Usage/Objectives.md#objective-3-prove-your-knowledge)
- [Preferences](../Configuration/Preferences.md) incl. [NS Client settings](../Configuration/Preferences.md#nsclient)

## Šifruotas kopijos formatas

Settings backup is encrypted by a master password that can be set in [Preferences](../Configuration/Preferences.md#master-password) .

(export-settings)=
## Eksportuoti nustatymus

- Hamburger menu (top left corner of screen)
- Maintenance
- Eksportuoti nustatymus

```{image} ../images/AAPS_ExportSettings1.png
:alt: AndroidAPS eksportavimo nustatymai 1
```

- Date and time of export will be added to the file name automatically and displayed together with the path.
- Click 'OK'.
- Enter [master password](../Configuration/Preferences.md#master-password) and click 'OK'.
- Successful export will be prompted at bottom of the screen.

```{image} ../images/AAPS_ExportSettings2.png
:alt: AndroidAPS eksportavimo nustatymai 2
```

(import-settings)=
## Importuokite nustatymus

**Do not import settings while on an active Pod session** - see [Omnipod page for details](../Configuration/OmnipodEros.md#import-settings-from-previous-aaps).

- Hamburger menu (top left corner of screen)
- Maintenance
- Importuokite nustatymus

```{image} ../images/AAPS_ImportSettings1.png
:alt: AndroidAPS importavimo nustatymai 1
```

- All files from folder AAPS/preferences/ on your phone will be shown in the list.
- Select file.
- Confirm import by clicking 'OK'.
- Enter [master password](../Configuration/Preferences.md#master-password) and click 'OK'.

```{image} ../images/AAPS_ImportSettings2.png
:alt: AndroidAPS importavimo nustatymai 2
```

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
