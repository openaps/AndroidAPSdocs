# Android Auto

**AAPS** is capable of sending you information about your current status as a message, directly into Android Auto in your car.

## Requisiti

**AAPS** usa una funzione di Android Auto che permette di inviare i messaggi delle app del telefono al display del sistema audio dell'auto.

Questo significa che:

* Android must allow **AAPS** to show notifications and
* As **AAPS** is an unofficial App, allow the use of "unknown sources" with Android Auto.

![Dati CGM di AAPS su Android Auto](../images/android_auto_01.png)

(androidauto-check-that-aaps-can-show-notifications)=

## Check that AAPS can show notifications

**AAPS** always shows a status notification with your current glucose, IOB and COB. This is the notification that Android Auto displays in the car. There is nothing to switch on in **AAPS**, but Android must allow **AAPS** to show notifications.

On your phone, open **Settings** > **Apps** > **AAPS** > **Notifications** and make sure **All AAPS notifications** is on.

![All AAPS notifications switched on](../images/android_auto_notifications_all.png)

Scroll down and make sure **Ongoing status** is on: this is the channel of the status notification.

![Canale di notifica Stato in corso attivato](../images/android_auto_ongoing_channel.png)

Please check now that you see the **AAPS** status notification on the phone before you walk to your car!

![Notifica di AAPS sul telefono](../images/android_auto_04.png)

(androidauto-allow-the-use-of-unknown-sources-with-android-auto)=

## Allow the use of "unknown sources" with Android Auto.

As **AAPS** is not an official Android Auto app, notifications have to be activated for "unknown sources" in Android Auto. Si fa con la modalità sviluppatore, che ti mostriamo qui.

Vai alla tua auto e collega il telefono al sistema audio dell'auto.

Ora dovresti vedere una schermata simile a questa.

![Enable developer mode](../images/android_auto_05.png)

Premi l'icona delle **impostazioni** per iniziare la configurazione.

Scroll down to the end of the page and select **see more in the phone**.

![Enable developer mode](../images/android_auto_06.png)

Now on the mobile we will activate the developer mode.

The first screen looks like this. Scroll down to the end of the page.

![Enable developer mode](../images/android_auto_07.png)

Lì vedi la versione di Android Auto. Tap 10 times (in word ten) on the version of Android Auto. With this hidden combination you have now enabled developer mode.

![Enable developer mode](../images/android_auto_08.png)

Confirm that you want to enable the developer mode in the modal dialog "Allow development settings?".

![Enable developer mode](../images/android_auto_09.png)

In the **developer settings** enable the "Unknown sources".

![Enable developer mode](../images/android_auto_10.png)

Ora, se vuoi, puoi uscire dalla modalità sviluppatore. Per farlo, tocca il menu con i tre puntini in alto a destra.

## Mostrare le notifiche in auto

Tap the **number icon** on the lower right side in Android Auto in your car.

![icona con il numero - Android Auto in auto](../images/android_auto_11.png)

Your CGM data will be shown as follows:

![Dati CGM di AAPS su Android Auto](../images/android_auto_01.png)

(android-auto-troubleshooting)=

## Troubleshooting:

* If you don't see the notification, check if you [allowed AAPS to show notifications](#androidauto-check-that-aaps-can-show-notifications) in Android and if [Android Auto has access rights to notifications](#androidauto-allow-the-use-of-unknown-sources-with-android-auto).