# Export & import settings

## Когда следует экспортировать настройки?

Будьте готовы к непредвиденным ситуациям. Вы можете случайно изменить важные параметры и иметь проблемы с отменой. Телефон может сломаться или быть украден. Чтобы легко вернуться к состоянию, в котором вы были, регулярно экспортируйте параметры.

Лучше всего экспортировать после изменения настроек или прохождения цели.

Экспортированные настройки должны быть скопированы в облачное хранилище или на компьютер, лучше в два разных места. Так вы будете готовы к утрате или повреждению телефона с AAPS и вам не придется начинать с нуля.

На компьютере с Windows 10 это выглядит так:

```{image} ../images/AAPS_ExImportSettingsWin.png
:alt: AAPS Preferences phone connected to computer
```

## Экспортированные данные

Среди прочего следующая информация является частью экспорта настроек:

- [Automation](../Usage/Automation.md) events
- [Config builder](../Configuration/Config-Builder.md) settings
- [Local profile](Config-Builder-local-profile) settings
- [Objectives](../Usage/Objectives.md) status incl. [exam results](Objectives-objective-3-prove-your-knowledge)
- [Preferences](../Configuration/Preferences.md) incl. [NS Client settings](Preferences-nsclient)

## Зашифрованный файл резервной копии

Settings backup is encrypted by a master password that can be set in [Preferences](Preferences-master-password) .

(ExportImportSettings-export-settings)=
## Экспорт настроек

- Hamburger menu (top left corner of screen)
- Обслуживание
- Экспорт настроек

```{image} ../images/AAPS_ExportSettings1.png
:alt: AAPS export settings 1
```

- Date and time of export will be added to the file name automatically and displayed together with the path.
- Click 'OK'.
- Enter [master password](Preferences-master-password) and click 'OK'.
- Successful export will be prompted at bottom of the screen.

```{image} ../images/AAPS_ExportSettings2.png
:alt: AAPS export settings 2
```

(ExportImportSettings-import-settings)=
## Выполните импорт настроек

**Do not import settings while on an active Pod session** - see [Omnipod page for details](OmnipodEros-import-settings-from-previous-aaps).

- Hamburger menu (top left corner of screen)
- Обслуживание
- Выполните импорт настроек

```{image} ../images/AAPS_ImportSettings1.png
:alt: AAPS import settings 1
```

- All files from folder AAPS/preferences/ on your phone will be shown in the list.
- Select file.
- Confirm import by clicking 'OK'.
- Enter [master password](Preferences-master-password) and click 'OK'.

```{image} ../images/AAPS_ImportSettings2.png
:alt: AAPS import settings 2
```

- Details on the preference file will be shown.
- Last option to cancel import.
- Click 'Import'.
- Confirm message by clicking 'OK'.
- AAPS will be restarted in order to activate imported preferences.

### Примечание для пользователей Dana RS

- Поскольку настройки подключения помпы также переносятся на новый телефон, AAPS на новом телефоне уже будет "знать" помпу и не запустит сканирование bluetooth.
- Please pair new phone and pump manually.

### Импорт настроек из предыдущих версий (перед AAPS 2.7)

- The "old" settings file (called 'AndroidAPSPreferences' - without file extension) must be in root folder of your smartphone (/storage/emulated/0).
- Do not put the "old" file in the same folder as the new exported settings (AAPS/preferences).
- You will find the "old" file on the bottom of the list in the import dialogue.

## Перенос файла настроек

- Best way to transfer settings file to a new phone is via USB cable or cloud service (i.e. Google Drive).
- Manuals can be found on the web, i.e. [Android help pages](https://support.google.com/android/answer/9064445?hl=en).
- If you experience problems with the transferred file try another way to transfer file.
