# Troubleshooting

Jūs galite rasti trikčių diagnostikos informaciją daugelyje puslapių šioje wiki. Šis puslapis yra nuorodų rinkinys, padėsiantis rasti informaciją, galinčią išspręsti jūsų problemą.

Additional useful information might also be available in the [FAQ](../UsefulLinks/FAQ.md).

## AAPS app

### Building & updating

* [Prarasta raktų saugykla](#troubleshooting_androidstudio-lost-keystore)
* [Troubleshooting AndroidStudio](TroubleshootingAndroidStudio)

### Installing

You may see a Google Play Protect warning that the app is unsafe, was built for older Android versions and doesn't include latest privacy protections.

Ignore it: More details, Install anyway.

![Google Play Protect warning](../images/troubleshooting/InstallGPP.png)

### Parametrai
* Profile

  ![Error: Basal not aligned to hours](../images/Screen_DifferentPump.png)

* [Pump - data from different pump](#update30-failure-message-data-from-different-pump)

  ![Failure message: Data from different pump](../images/BasalNotAlignedToHours2.png)

* [Nightscout Client](../GettingHelp/TroubleshootingNsClient.md)

### Naudojimas
* [Wrong carb values](#CobCalculation-detection-of-wrong-cob-values)

   ![Error: Slow carb absorption](../images/Calculator_SlowCarbAbsorption.png)

* [SMS commands](#SMSCommands-troubleshooting)

### Frequent bluetooth connection problems due to android 15 (in particular for  Samsung & Pixel phones )

#### Symptoms:
After a recent Android update or moving to a recent phone, you notice that AAPS lose its bluetooth connection to the pump (mostly on Samsung/Pixel running Andrtoid 15). The problem disapears if you restart the phone completely for a limited amount of time.

#### Fix:
1) open AAPS and go to the vertical 3 dots  menu on the top right.\
![Android Settings¦Apps](../images/troubleshooting/samsung/01_BondBT_20250526.png)

3) click preferences\
![Android Settings¦Apps](../images/troubleshooting/samsung/02_BondBT_20250526.png)

5) slide down and open the "Confirmation beeps" submenu \
![Android Settings¦Apps](../images/troubleshooting/samsung/03_BondBT_20250526.png)

7) open the "Advanced"  sub-submenu and "select BondBT device on Android 15+" (note that you might have to accept "pairing" with the pump MAC address moving forward something like 00:01:02:03:04:05:06) \
![Android Settings¦Apps](../images/troubleshooting/samsung/04_BondBT_20250526.png)





### Frequent bluetooth connection problems due to battery optimizations

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

  ![Battery](../images/troubleshooting/samsung/Samsung04_Battery.png)

* Set it to "Not optimized"

  ![Not optimized](../images/troubleshooting/samsung/Samsung05_NotOptimized.png)


## NGJ

* [General](#general-cgm-troubleshooting)
* [Dexcom G6](#DexcomG6-troubleshooting-g6)
* [Libre 3](#libre3-experiences-and-troubleshooting)
* [Libre 2](#Libre2-experiences-and-troubleshooting)
* [xDrip - no CGM data](#xdrip-identify-receiver)
* [xDrip - Dexcom troubleshooting](#xdrip-troubleshooting-dexcom-g5-g6-and-xdrip)

## Pompos

* [DanaRS](#DanaRS-Insulin-Pump-dana-rs-specific-errors)
* [Accu-Chek Combo general](../CompatiblePumps/Accu-Chek-Combo-Tips-for-Basic-usage.md)
* [Accu-Chek Insight](#Accu-Chek-Insight-Pump-insight-specific-errors)
* [Medtronic + RileyLink](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)

## Telefonai

* [Jelly](../CompatiblePhones/Jelly.md)
* [Huawei bluetooth & battery optimization](../CompatiblePhones/Huawei.md)

## Išmanieji laikrodžiai

* [Troubleshooting Wear app](#Watchfaces-troubleshooting-the-wear-app)
