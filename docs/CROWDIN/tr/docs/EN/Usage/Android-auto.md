# Android Auto

**AAPS** is capable of sending you information about your current status as a message, directly into Android Auto in your car.

```{admonition} version and last change information :class: dropdown date of last edit: 07/05/2023

versions used for documentation:

* AAPS 3.2.0-dev-i
* Android Auto: 9.3.631434-release ```

## Requirements

**AAPS** uses a feature of Android Auto which allows messages from apps on the mobile to be routed to the display of Auto Audio in the car.

That means that:

* You must configure **AAPS** to use system notifications for alerts and notifications and
* As **AAPS** is an unofficial App, allow the use of "unknown sources" with Android Auto.

![AAPS CGM data on Android Auto](../images/android_auto_01.png)

(Android-auto-AAPS-settings-for-android-auto)=

## Use system notifications in AAPS for alerts and notifications

Open 3-dot-menu on top right of **AAPS** home screen and select **Preferences**

![Use system notifications for alerts and notifications](../images/android_auto_02.png)

In **Local Alerts** activate **Use system notifications for alerts and notifications**

![Use system notifications for alerts and notifications](../images/android_auto_03.png)

Please check now that you get notifications from **AAPS** on the phone before you walk to your car!

![Use system notifications for alerts and notifications](../images/android_auto_04.png)

(Android-auto-AAPS-settings-in-android-auto-app-on-your-phone)=

## Allow the use of "unknown sources" with Android Auto.

As **AAPS** is not an official Android Auto app, notifications have to be activated for "unknown sources" in Android Auto. This is done through the use of the developer mode which we will show you here.

Go to your car and connect your mobile with the cars audio system.

You should now see a screen similar to this screen.

![Enable developer mode](../images/android_auto_05.png)

Press on the **setting** icon to start the configuration.

Scroll down to the end of the page and select **see more in the phone**.

![Enable developer mode](../images/android_auto_06.png)

Now on the mobile we will activate the developer mode.

The first screen looks like this. Scroll down to the end of the page.

![Enable developer mode](../images/android_auto_07.png)

There you see the version of Android Auto listed. Tap 10 times (in word ten) on the version of Android Auto. With this hidden combination you have now enabled developer mode.

![Enable developer mode](../images/android_auto_08.png)

Confirm that you want to enable the developer mode in the modal dialog "Allow development settings?".

![Enable developer mode](../images/android_auto_09.png)

In the **developer settings** enable the "Unknown sources".

![Enable developer mode](../images/android_auto_10.png)

Now you can quit developer mode if you want. Tap three dots menu on the top right to do so.

## Arabada bildirimlerin gösterilmesi

Arabanızda Android Auto'da sağ alt taraftaki **sayı simgesine** dokunun.

![number icon - Android Auto in car](../images/android_auto_11.png)

Your CGM data will be shown as follows:

![AAPS CGM data on Android Auto](../images/android_auto_01.png)

## Sorun giderme:

* Bildirimleri görmüyorsanız, [AAPS'in bildirimleri göstermesine izin verdiğinizi](Android-auto-AAPS-settings-for-android-auto) ve android için de [Android Auto'nun bildirimlere erişim hakları olduğunu kontrol edin](Android-auto-AAPS-settings-in-android-auto-app-on-your-phone).