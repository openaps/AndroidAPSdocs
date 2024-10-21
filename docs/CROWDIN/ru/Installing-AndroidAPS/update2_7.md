# Необходимые проверки после обновления при переходе с AAPS 2.6

- Программный код был существенно изменен при переходе на AAPS 2.7.
- Поэтому важно проверить и/или изменить настройки после обновления.
- Please see [release notes](../Installing-AndroidAPS/Releasenotes.md#version-270) for details on new and extended features.

## Проверяем источник ГК

- Проверьте, корректен ли источник ГК после обновления.
- Especially when using [xDrip+](../CompatibleCgms/xDrip.md) it might happen, that BG source is changed to Dexcom app (patched).
- Open [Config builder](../SettingUpAaps/ConfigBuilder.md#bg-source) (hamburger menu on top left side of home screen)
- Прокрутите вниз до "источник ГК".
- Выберите правильный источник ГК.

![BG source ( Источник данных ГК )](../images/ConfBuild_BG.png)

## Завершаем экзамен

- AAPS 2.7 содержит новую цель 11 (в последующих версиях перенумерована до цели 10!) [автоматизация](../Usage/Automation.md).
- You have to finish exam ([objective 3 and 4](../SettingUpAaps/CompletingTheObjectives.md#objective-3-prove-your-knowledge)) in order to complete [objective 11](../SettingUpAaps/CompletingTheObjectives.md#objective-11-enabling-additional-features-for-daytime-use-such-as-dynamic-senstivity-plugin-dynisf).
- If for example you did not finish the exam in [objective 3](../SettingUpAaps/CompletingTheObjectives.md#objective-3-prove-your-knowledge) yet, you will have to complete the exam before you can start [objective 11](../SettingUpAaps/CompletingTheObjectives.md#objective-11-enabling-additional-features-for-daytime-use-such-as-dynamic-senstivity-plugin-dynisf).
- Это не повлияет на другие цели, которые вы уже выполнили. У вас сохранятся все завершенные цели!

## Установите главный пароль

- Необходим для [экспорта настроек](../Usage/ExportImportSettings.md), т. к. они шифруются начиная с версии 2.7.
- Откройте настройки (нажав три точки меню в верхней правой части главного экрана)
- Нажмите на галочку слева от заголовка "Общее"
- Нажмите "Главный пароль"
- Введите пароль, подтвердите пароль и нажмите кнопку Ok.

![Установите главный пароль](../images/MasterPW.png)

## Экспорт настроек

- AAPS 2.7 использует новый зашифрованный формат резервного копирования.
- После обновления до версии 2.7. следует [экспортировать настройки](../Usage/ExportImportSettings.md).
- Импорт настроек из предыдущих версий возможен только в AAPS 2.7. Экспорт будет в новом формате.
- Не забудьте сохранить экспортированные настройки не только на телефоне, но и по крайней мере в одном безопасном месте (на ПК, в облачном хранилище...).
- Если вы собираете AAPS 2.7 с тем же хранилищем ключей, что и в предыдущих версиях, вы можете установить новую версию, не удаляя предыдущую.
- Все настройки, а также завершенные цели останутся такими же, как и в предыдущей версии.
- In case you have lost your keystore build version 2.7 with new keystore and import settings from previous version as described in the [troubleshooting section](../Installing-AndroidAPS/troubleshooting_androidstudio.md#lost-keystore).

## Autosens (подсказка - не требует действий)

- Autosens изменен на динамическую модель, которая воспроизводит оригинальное решение.
- Начиная с AAPS 2.7 Autosens будет переключаться между окнами в 24 и 8 часов для вычисления чувствительности. Он выберет более чувствительный вариант.
- Если пользователи перешли с oref1, они, вероятно, заметят, что система может быть менее динамичной из-за различий в 24 или 8 часах чувствительности.

## Создание пароля для Dana RS (если используется Dana RS)

- Pump password for [Dana RS](../CompatiblePumps/DanaRS-Insulin-Pump.md) was not checked in previous versions.
- Откройте настройки, нажав три точки меню в верхней правой части главного экрана
- Прокрутите вниз и нажмите треугольник рядом с "Dana RS".
- Нажмите на "Пароль помпы (только v1)"
- Enter pump password ([Default password](../CompatiblePumps/DanaRS-Insulin-Pump.md#default-password) is different depending on firmware version) and click OK.

![Set Dana RS password](../images/DanaRSPW.png)

To change password on Dana RS follow instructions on [DanaRS page](../CompatiblePumps/DanaRS-Insulin-Pump.md#change-password-on-pump).
