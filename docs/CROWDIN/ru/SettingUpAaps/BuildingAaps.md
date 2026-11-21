# Сборка AAPS

## Постройте сами вместо скачивания

**Приложение AAPS (файл apk) недоступно для скачивания из-за правил, связанных с медицинскими устройствами. Построить приложение для собственного использования вполне законно, но передавать копию другим не разрешается!**

Подробности смотрите на странице [Часто задаваемые вопросы по работе ИПЖ](../UsefulLinks/FAQ.md).

---

Есть три способа собрать приложение AAPS:

### Сборка через браузер (рекомендуется)

You can build the app in a web browser using GitHub Actions. From an Android phone, the [AAPS Builder](#aaps-builder) setup page walks you through it, and you start each build yourself. From a computer or an iPhone, you can also build with a fork and save the app in your Google Drive.

**[Follow these instructions.](./BrowserBuild.md)**

----

### Сборка в Android Studio

Вы можете собрать приложение на своем компьютере с помощью Android Studio. Раньше это был единственный способ сборки, сейчас Android Studio используют в основном разработчики, которые хотят менять код.

**[Follow these instructions.](./ComputerBuild.md)**

----

### Сборка из командной строки

Этот способ для тех, кто хочет собрать AAPS в командной строке на своем компьютере, без установки Android Studio.

**[Follow these instructions.](./CLIBuild.md)**

----

(building-aaps-troubleshooting)=
## If the build fails

Each build method has its own troubleshooting section:

* **AAPS Builder**: [AAPS Builder troubleshooting](#aaps-builder-troubleshooting)
* **Browser build** from a computer or an iPhone: [Browser build troubleshooting](#aaps-ci-troubleshooting)
* **Android Studio**: [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)

Lost your keystore or its password? See [Reinstalling AAPS with a new keystore](#reinstall-aaps).

If the app is built but does not install on your phone, see [Transferring and installing AAPS](TransferringAndInstallingAaps.md).

If your problem is not listed, see [Where can I get help](../GettingHelp/WhereCanIGetHelp.md).
