# Устранение неполадок

Много информации об устранении неполадок можно найти на страницах этого документа. На этой странице собраны ссылки, которые помогут найти решения вашей проблемы.

Дополнительную полезную информацию можно найти в разделе [Часто задаваемые вопросы](../UsefulLinks/FAQ.md).

## Приложение AAPS

### Сборка и обновление

* [Потеряно хранилище ключей](#troubleshooting_androidstudio-lost-keystore)
* [Устранение неполадок Android Studio](TroubleshootingAndroidStudio)

### Installing

You may see a Google Play Protect warning that the app is unsafe, was built for older Android versions and doesn't include latest privacy protections.

Ignore it: More details, Install anyway.

![Google Play Protect warning](../images/troubleshooting/InstallGPP.png)

### Настройки
* Profile

  ![Ошибка: Базал не выровнен по часам](../images/Screen_DifferentPump.png)

* [Помпа - данные с разных помп](#update30-failure-message-data-from-different-pump)

  ![Сообщение об ошибке: данные с другой помпы](../images/BasalNotAlignedToHours2.png)

* [Клиент Nightscout](../GettingHelp/TroubleshootingNsClient.md)

### Применение
* [Неверные значения углеводов](#CobCalculation-detection-of-wrong-cob-values)

   ![Ошибка: Медленное поглощение углеводов](../images/Calculator_SlowCarbAbsorption.png)

* [SMS-команды](#SMSCommands-troubleshooting)

### Cannot start Omnipod with Android 16

Upgrade to minimum version of AndroidAPS: 3.3.2.1.

### Frequent Bluetooth connection problems

#### Android 15

After upgrading Android or moving to a recent phone, **AAPS** frequently loses Bluetooth connection to the pump. The problem disappears temporarily when restarting the phone. If the phone runs Android 15, you can try to enable the following:

1) **Open preferences** by clicking the three-dot menu on the top right side of the home screen.


![Open preferences](../images/Pref2020_Open2.png)

2. Scroll down and open the **Confirmation beeps** / **Advanced** submenu. Enable **Bond BT device on Android 15+**.

   ![BondBT](../images/troubleshooting/BondBT.png)

3. If the pump asks for a pairing request, accept it.

4. Restart your phone.

#### Battery optimization

Это может произойти с различными помпами. Apart from excluding AAPS from any battery optimization, you can also exclude the system Bluetooth app from battery optimization. В некоторых случаях это может помочь. Depending on the phone you use, you will find the Bluetooth app differently.

Вот примеры того, как найти их на конкретных Android-телефонах.


##### Pixel phones (stock Android)

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


##### Телефоны Samsung

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

* [General](#general-cgm-troubleshooting)
* [Dexcom G6](#DexcomG6-troubleshooting-g6)
* [Libre 3](#libre3-experiences-and-troubleshooting)
* [Libre 2](#Libre2-experiences-and-troubleshooting)
* [xDrip - нет данных CGM](#xdrip-identify-receiver)
* [xDrip - Устранение неполадок Dexcom](#xdrip-troubleshooting-dexcom-g5-g6-and-xdrip)

## Помпы

* [DanaRS](#DanaRS-Insulin-Pump-dana-rs-specific-errors)
* [Accu-Chek Combo общее](../CompatiblePumps/Accu-Chek-Combo-Tips-for-Basic-usage.md)
* [Accu-Chek Insight](#Accu-Chek-Insight-Pump-insight-specific-errors)
* [Medtronic + RileyLink](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)

## Телефоны

* [Jelly](../CompatiblePhones/Jelly.md)
* [Huawei bluetooth & оптимизация батареи](../CompatiblePhones/Huawei.md)

## Смарт-часы

* [Устранение неполадок в приложении Wear](#Watchfaces-troubleshooting-the-wear-app)
