# Устранение неполадок

Много информации об устранении неполадок можно найти на страницах этого документа. На этой странице собраны ссылки, которые помогут найти решения вашей проблемы.

Дополнительную полезную информацию можно также найти в часто задаваемых вопросах [FAQ](../Getting-Started/FAQ.html).

## Приложение AAPS

### Сборка и обновление

* [Потеряно хранилище ключей](troubleshooting_androidstudio-lost-keystore)
* [Troubleshooting AndroidStudio](../Installing-AndroidAPS/troubleshooting_androidstudio.md)

### Настройки
* [Профиль](Profiles-troubleshooting-profile-errors)

  ![Ошибка: Базал не выровнен по часам](../images/Screen_DifferentPump.png)

* [Помпа - данные с разных помп](../Installing-AndroidAPS/update3_0.html#failure-message-data-from-different-pump)

  ![Сообщение об ошибке: данные с другой помпы](../images/BasalNotAlignedToHours2.png)

* [Nightscout Client](../Usage/Troubleshooting-NSClient.html)

### Применение
* [Wrong carb values](COB-calculation-detection-of-wrong-cob-values)

   ![Ошибка: Медленное поглощение углеводов](../images/Calculator_SlowCarbAbsorption.png)

* [SMS commands](SMS-Commands-troubleshooting)

### Frequent bluetooth connection problems

This can happen with various pumps. Apart from excluding AAPS from any battery optimization, you can also exclude the system bluetooth app from battery optimization. This can help in some cases. Depending on the phone you use, you will find the bluetooth app differently.

Here are examples how to find them on specific android phones.


#### Pixel phones (stock android)

* Go to the android settings, select "Apps".

  ![Android Settings¦Apps](../images/troubleshooting/pixel/01_androidsettings.png)

* Select "See all apps"

  ![See all apps](../images/troubleshooting/pixel/02_apps.png)

* On the menu on the right, select "Show system" apps.

  ![Show system apps](../images/troubleshooting/pixel/03_allapps.png)

* Now search and select the app "Bluetooth".

  ![Bluetooth app](../images/troubleshooting/pixel/03_bluetooth.png)

* Click the "App battery usage" and select "Not optimized".

  ![BT Battery optimization](../images/troubleshooting/pixel/04_btunrestricted.png)


#### Samsung phones

* Go to the android settings, select "Apps"

* On the icon that supposedly changes the sorting algorithm (1), select "Show system apps" (2).

  ![App Filter](../images/troubleshooting/samsung/Samsung01_Apps.png)

  ![Show system apps](../images/troubleshooting/samsung/Samsung02_ShowSystemApps.png)

* Now search the bluetooth app and select it to see its settings.

  ![Bluetooth App](../images/troubleshooting/samsung/Samsung03_BtApp.png)

* Select "battery".

  ![Батарея](../images/troubleshooting/samsung/Samsung04_Battery.png)

* Set it to "Not optimized"

  ![Not optimized](../images/troubleshooting/samsung/Samsung05_NotOptimized.png)


## CGM /  НМГ

* [Общие настройки](GeneralCGMRecommendation-troubleshooting)
* [Dexcom G6](DexcomG6-troubleshooting-g6)
* [Libre 3](Libre3-experiences-and-troubleshooting)
* [Libre 2](Libre2-experiences-and-troubleshooting)
* [xDrip - no CGM data](xdrip-identify-receiver)
* [xDrip - Dexcom troubleshooting](xdrip-troubleshooting-dexcom-g5-g6-and-xdrip)

## Помпы

* [DanaRS](DanaRS-Insulin-Pump-dana-rs-specific-errors)
* [Accu-Chek Combo general](Accu-Chek-Combo-Tips-for-Basic-usage)
* [Accu-Chek Combo + Ruffy](Accu-Chek-Combo-Pump-why-pairing-with-the-pump-does-not-work-with-the-app-ruffy)
* [Accu-Chek Insight](Accu-Chek-Insight-Pump-insight-specific-errors)
* [Medtronic + RileyLink](MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)

## Телефоны

* [Jelly](../Usage/jelly.md)
* [Huawei bluetooth & battery optimization](../Usage/huawei.md)

## Смарт-часы

* [Troubleshooting Wear app](Watchfaces-troubleshooting-the-wear-app)
* [Sony Smartwatch 3](../Usage/SonySW3.md)
