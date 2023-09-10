# Export & import settings

## Wanneer zou ik mijn instellingen moeten exporteren?

Wees voorbereid op onvoorziene omstandigheden. Je kunt belangrijke instellingen per ongeluk veranderen en problemen hebben om weer terug te gaan naar de juiste instellingen. Je telefoon kan stuk gaan of gestolen worden. Om makkelijk terug te keren naar instellingen die voor jou goed werkten (en ook: als je de Doelen die je eerder hebt afgerond, niet opnieuw wilt moeten doen) dan moet je jouw instellingen regelmatig exporteren.

Het is goed om jouw instellingen steeds te exporteren na het wijzigen van instellingen of *na het voltooien van een Doel*.

Kopieer het bestand met jouw geëxporteerde instellingen ook naar een cloudopslag of naar een computer, het liefst naar beide (of naar twee computers, twee cloudopslagen). Zodat je altijd nog ergens een kopie van jouw instellingen-bestand hebt wanneer je AAPS telefoon stuk gaat of gestolen wordt, of als er iets met één computer / cloudopslag gebeurt. Het is heel frustrerend als je jouw instellingen om wat voor reden dan ook kwijt bent, en je moet weer van voren af aan beginnen in de Doelen. Zorg dat je een (liefst meerdere) backup(s) hebt!

Op een Windows-10 computer ziet het er zo uit:

```{image} ../images/AAPS_ExImportSettingsWin.png
:alt: Telefoon-opslag bekijken via computer
```

## Ge-exporteerde gegevens

Onder andere de volgende gegevens uit jouw instellingen worden ge-exporteerd:

- [Automation](../Usage/Automation.md) events
- [Config builder](../Configuration/Config-Builder.md) settings
- [Local profile](Config-Builder-local-profile) settings
- [Objectives](../Usage/Objectives.md) status incl. [exam results](Objectives-objective-3-prove-your-knowledge)
- [Preferences](../Configuration/Preferences.md) incl. [NS Client settings](Preferences-nsclient)

## Versleuteld instellingen-bestand

Settings backup is encrypted by a master password that can be set in [Preferences](Preferences-master-password) .

(ExportImportSettings-export-settings)=
## Exporteer instellingen

- Hamburger menu (top left corner of screen)
- Maintenance
- Exporteer instellingen

```{image} ../images/AAPS_ExportSettings1.png
:alt: AndroidAPS instellingen exporteren 1
```

- Date and time of export will be added to the file name automatically and displayed together with the path.
- Click 'OK'.
- Enter [master password](Preferences-master-password) and click 'OK'.
- Successful export will be prompted at bottom of the screen.

```{image} ../images/AAPS_ExportSettings2.png
:alt: AndroidAPS instellingen exporteren 2
```

(ExportImportSettings-import-settings)=
## Importeer instellingen

**Do not import settings while on an active Pod session** - see [Omnipod page for details](OmnipodEros-import-settings-from-previous-aaps).

- Hamburger menu (top left corner of screen)
- Maintenance
- Importeer instellingen

```{image} ../images/AAPS_ImportSettings1.png
:alt: AndroidAPS instellingen importeren 1
```

- All files from folder AAPS/preferences/ on your phone will be shown in the list.
- Select file.
- Confirm import by clicking 'OK'.
- Enter [master password](Preferences-master-password) and click 'OK'.

```{image} ../images/AAPS_ImportSettings2.png
:alt: AndroidAPS instellingen importeren 2
```

- Details on the preference file will be shown.
- Last option to cancel import.
- Click 'Import'.
- Confirm message by clicking 'OK'.
- AAPS will be restarted in order to activate imported preferences.

### Tip voor Dana RS gebruikers

- As pump connection settings are also imported AAPS on your new phone will already "know" the pump and therefore not start a bluetooth scan.
- Please pair new phone and pump manually.

### Instellingen importeren uit vorige versies (vóór AAPS 2.7)

- The "old" settings file (called 'AndroidAPSPreferences' - without file extension) must be in root folder of your smartphone (/storage/emulated/0).
- Do not put the "old" file in the same folder as the new exported settings (AAPS/preferences).
- You will find the "old" file on the bottom of the list in the import dialogue.

## Instellingen bestand overzetten

- Best way to transfer settings file to a new phone is via USB cable or cloud service (i.e. Google Drive).
- Manuals can be found on the web, i.e. [Android help pages](https://support.google.com/android/answer/9064445?hl=en).
- If you experience problems with the transferred file try another way to transfer file.
