# Android Auto

AAPS is capable to send you information about your actual state as message directly into Android Auto in your car.

:::{admonition} version and last change information :class: dropdown date of last edit: 07/05/2023

versions used for documentation:

* AAPS 3.2.0-dev-i
* Android Auto: 9.3.631434-release :::

## Requirements

AAPS uses a feature of Android Auto which allows messages from apps on the mobile to be routed to the display of Auto Audio in the car.

That means that

* you must configure AAPS to use system notifications for alerts and notifications and
* as AAPS is an unoffical App allow the use of "unknown sources" with Android Auto.

![AAPS CGM data on Android Auto](../images/android_auto_01.png)

(Android-auto-AAPS-settings-for-android-auto)=

## use system notifications in AAPS for alerts and notifications

Open 3-dot-menu on top right of home screen and selecting **Preferences**

![Use system notifications for alerts and notifications](../images/android_auto_02.png)

In **Local Alerts** activate **Use system notifications for alerts and notifications**

![Use system notifications for alerts and notifications](../images/android_auto_03.png)

Please check now that you get notifications from AASP on the mobile before you walk to your car!

![Use system notifications for alerts and notifications](../images/android_auto_04.png)

(Android-auto-AAPS-settings-in-android-auto-app-on-your-phone)=

## allow the use of "unknown sources" with Android Auto.

As AAPS is no official Android Auto app notifications have to be activated for "unknown sources" in Android Auto. This is done through the use of the developer mode which we will show you here.

Go to your car and connect your mobile with the cars audio system.

You should now see a screen similar to this screen.

![Enable developer mode](../images/android_auto_05.png)

Press on the **setting** icon to start the configuration.

Scroll down to the end of the page and select **see more in the phone**.

![Enable developer mode](../images/android_auto_06.png)

Now on the mobile we will activate the developer mode.

the first screen looks like this. Scroll down to the end of the page.

![Enable developer mode](../images/android_auto_07.png)

There you see the version of Android Auto listed. Tap 10 times (in word ten) on the version of Android Auto. With this hidden combination you are open the developer mode.

![Enable developer mode](../images/android_auto_08.png)

Confirm that you want to enable the developer mode in the modal dialog "Allow development settings?".

![Enable developer mode](../images/android_auto_09.png)

In the **developer settings** enable the "Unknown sources".

![Enable developer mode](../images/android_auto_10.png)

Now you can quit developer mode if you want. Tap three dots menu on the top right to do so.

## Arabada bildirimlerin gösterilmesi

Arabanızda Android Auto'da sağ alt taraftaki **sayı simgesine** dokunun.

![number icon - Android Auto in car](../images/android_auto_11.png)

CGM değerleri aşağıdaki gibi gösterilecektir.

![AAPS CGM data on Android Auto](../images/android_auto_01.png)

## Sorun giderme:

* Bildirimleri görmüyorsanız, [AAPS'in bildirimleri göstermesine izin verdiğinizi](Android-auto-AAPS-settings-for-android-auto) ve android için de [Android Auto'nun bildirimlere erişim hakları olduğunu kontrol edin](Android-auto-AAPS-settings-in-android-auto-app-on-your-phone).