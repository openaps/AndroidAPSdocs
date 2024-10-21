# Устранение неполадок

Много информации об устранении неполадок можно найти на страницах этого документа. На этой странице собраны ссылки, которые помогут найти решения вашей проблемы.

Additional useful information might also be available in the [FAQ](../Getting-Started/FAQ.md).

## Приложение AAPS

### Сборка и обновление

* [Потеряно хранилище ключей](../Installing-AndroidAPS/troubleshooting_androidstudio.md#lost-keystore)
* [Устранение неполадок Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.md)

### Настройки
* [Профиль](Profiles-troubleshooting-profile-errors)

  ![Ошибка: Базал не выровнен по часам](../images/Screen_DifferentPump.png)

* [Помпа - данные с разных помп](../Installing-AndroidAPS/update3_0.md#failure-message-data-from-different-pump)

  ![Сообщение об ошибке: данные с другой помпы](../images/BasalNotAlignedToHours2.png)

* [Клиент Nightscout](../Usage/Troubleshooting-NSClient.md)

### Применение
* [Неверные значения углеводов](../Usage/COB-calculation.md#detection-of-wrong-cob-values)

   ![Ошибка: Медленное поглощение углеводов](../images/Calculator_SlowCarbAbsorption.png)

* [SMS-команды](../Children/SMS-Commands.md#troubleshooting)

### Частые проблемы с подключением Bluetooth

Это может произойти с различными помпами. Помимо того, что AAPS должен быть исключен из оптимизации батареи, можно также исключить системное приложение Bluetooth из оптимизации батареи. В некоторых случаях это может помочь. В зависимости от используемого телефона приложение bluetooth находится по-разному.

Вот примеры того, как найти их на конкретных Android-телефонах.


#### ТелефоныPixel (стоковый android)

* Перейдите в настройки Android и выберите "Приложения".

  ![Настройки Android¦приложений](../images/troubleshooting/pixel/01_androidsettings.png)

* Выберите "Просмотреть все приложения"

  ![Просмотреть все приложения](../images/troubleshooting/pixel/02_apps.png)

* В меню справа выберите "Показать системные приложения".

  ![Показать системные приложения](../images/troubleshooting/pixel/03_allapps.png)

* Теперь найдите и выберите приложение "Bluetooth".

  ![Приложение Bluetooth](../images/troubleshooting/pixel/03_bluetooth.png)

* Нажмите кнопку "Использование батареи приложением" и выберите "Не оптимизировать".

  ![Оптимизация батареи BT](../images/troubleshooting/pixel/04_btunrestricted.png)


#### Телефоны Samsung

* Перейдите в настройки Android и выберите "Приложения"

* На значке, который вроде бы изменяет алгоритм сортировки (1), выберите "Показать системные приложения" (2).

  ![Фильтр приложений](../images/troubleshooting/samsung/Samsung01_Apps.png)

  ![Показать системные приложения](../images/troubleshooting/samsung/Samsung02_ShowSystemApps.png)

* Теперь найдите приложение bluetooth и выберите его для просмотра настроек.

  ![Приложение Bluetooth](../images/troubleshooting/samsung/Samsung03_BtApp.png)

* Выберите "Батарея".

  ![Батарея](../images/troubleshooting/samsung/Samsung04_Battery.png)

* Установите на "Не оптимизировать"

  ![Оптимизация отключена](../images/troubleshooting/samsung/Samsung05_NotOptimized.png)


## CGM /  НМГ

* [Общие настройки](../CompatibleCgms/GeneralCGMRecommendation.md#troubleshooting)
* [Dexcom G6](../CompatibleCgms/DexcomG6.md#troubleshooting-g6-and-one)
* [Libre 3](../CompatibleCgms/Libre3.md#experiences-and-troubleshooting)
* [Libre 2](../CompatibleCgms/Libre2.md#experiences-and-troubleshooting)
* [xDrip - нет данных CGM](../CompatibleCgms/xDrip.md#identify-receiver)
* [xDrip - Устранение неполадок Dexcom](../CompatibleCgms/xDrip.md#troubleshooting-dexcom-g5g6-and-xdrip)

## Помпы

* [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md#dana-rs-specific-errors)
* [Accu-Chek Combo общее](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md)
* [Accu-Chek Combo + Ruffy](../CompatiblePumps/Accu-Chek-Combo-Pump.md#why-pairing-with-the-pump-does-not-work-with-the-app-ruffy)
* [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md#insight-specific-errors)
* [Medtronic + RileyLink](../CompatiblePumps/MedtronicPump.md#what-to-do-if-i-loose-connection-to-rileylink-andor-pump)

## Телефоны

* [Jelly](../CompatiblePhones/Jelly.md)
* [Huawei bluetooth & оптимизация батареи](../CompatiblePhones/Huawei.md)

## Смарт-часы

* [Устранение неполадок в приложении Wear](../Configuration/Watchfaces.md#troubleshooting-the-wear-app)
* [Sony Smartwatch 3](../Usage/SonySW3.md)
