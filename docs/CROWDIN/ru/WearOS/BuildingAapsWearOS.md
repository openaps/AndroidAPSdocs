# Building the Wear AAPS app

Приложение ОС Wear OS **AAPS**  («Apk Wear OS»), необходимое для смарт-часов теперь отделено от "полной" сборки **AAPS** для телефонов Android. Поэтому следует создать второй установочный файл, или apk, для установки **AAPS**wear на часы (который параллельно загружается с телефона). Настоятельно рекомендуется, чтобы файл **AAPS** Wear apk был собран сразу же после сборки полноценного **AAPS** apk для телефона. Not only is this very quick to do if you are [building **AAPS** for the first time](../SettingUpAaps/BuildingAaps.md), but it will avoid any potential compatibility issues when you try to set up the watch-phone communication. **AAPS** Wear apk на часах вряд ли будет совместимо с телефоном**AAPS**, если было создано в другой версии Android studio, или если с момента первоначальной сборки **AAPS** истекли месяцы.

Если вы уже используете **AAPS** на телефоне, и не собирали сразу оба приложения тогда лучше сделать новую сборку обоих apk файлов одновременно. Build the AAPS phone and watch apks at the same time, using the same **keystore file**.

## Supported Wear OS versions

AAPS requires at least Wear OS API level 28 (Android 9).

```{warning}
AAPS Watchfaces are available for Wear OS smartwatches with API level 28 to 33.<br>
Wear OS 5 has [limitations](BuildingAapsWearOs-WearOS5).
```

## Создание приложения **AAPS** Wear apk

The build process for the Wear apk is similar to that for the "full" phone apk.

- Follow the instructions for [Building AAPS](../SettingUpAaps/BuildingAaps.md).
- When you reach [module selection](#Building-APK-wearapk) in "Build the AAPS signed apk", make sure to select **`AndroidAPS.wear`**.

![Wear module](../images/Building-the-App/wear_build1.png)

Select "**fullRelease**" to generate the **AAPS** Wear apk file.

![Wear module](../images/Building-the-App/wear_build2.png)

Вместо этого можно собрать **“pumpcontrolRelease”** из выпадающего меню, которое позволит дистанционно управлять помпой, но вне цикла.

## Устранение неполадок

В процессе сборки полного приложения **AAPS** 3.2 (и в принципе любого подписанного приложения) Android Studio генерирует файл с расширением .json. This then causes errors with [uncommitted changes](#troubleshooting_androidstudio-uncommitted-changes) when you try to build the next signed app, like the **AAPS** wear app. Самый быстрый способ решения это переход к папке, в которой было построено полное приложение AAPS, путь к папке, вероятно, выглядит как-то так:

`C:\Users\Your Name\AndroidStudioProjects\AndroidAPS\app\aapsclient\release.`

Удалите или переместите ненужный файл .json из этой папки. Затем попробуйте снова создать приложение **AAPS**. If that doesn't work, the more detailed [troubleshooting guide](../GettingHelp/TroubleshootingAndroidStudio.md) will help you to identify the specific file causing the issue, which could also be your keystore file. 