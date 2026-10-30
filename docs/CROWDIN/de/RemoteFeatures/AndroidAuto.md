# Android Auto

**AAPS** kann aktuelle Statusinformationen als Benachrichtigung direkt an Android Auto im Auto senden.

## Voraussetzungen

**AAPS** verwendet eine Android Auto-Funktion, mit der Nachrichten von Smartphone-Apps an den Bildschirm im Auto geschickt werden können.

Das bedeutet:

* Android must allow **AAPS** to show notifications and
* Dass "unbekannte Quellen" mit Android Auto verwendet werden dürfen, da **AAPS** eine inoffizielle AAPS ist.

![AAPS CGM-Daten in Android Auto](../images/android_auto_01.png)

## Check that AAPS can show notifications

**AAPS** always shows a status notification with your current glucose, IOB and COB. This is the notification that Android Auto displays in the car. There is nothing to switch on in **AAPS**, but Android must allow **AAPS** to show notifications.

On your phone, open **Settings** > **Apps** > **AAPS** > **Notifications** and make sure **All AAPS notifications** is on.

![All AAPS notifications switched on](../images/android_auto_notifications_all.png)

Scroll down and make sure **Ongoing status** is on: this is the channel of the status notification.

![Ongoing status notification channel switched on](../images/android_auto_ongoing_channel.png)

Please check now that you see the **AAPS** status notification on the phone before you walk to your car!

![AAPS notification on the phone](../images/android_auto_04.png)

## Zulassen von "unbekannten Quellen" in Android Auto

Da **AAPS** keine offizielle Android Auto App ist, müssen die Benachrichtigungen einmalig manuell aktiviert werden. Die Aktivierung erfolgt über den Entwicklermodus auf Deinem Smartphone. Was dazuzutun ist, wird nun erklärt.

Als Erstes verbinde Dein Smartphone mit dem Infotainment-System Deines Autos.

Der Bildschirm sollte nun ungefähr so aussehen:

![Entwicklermodus aktivieren](../images/android_auto_05.png)

Um mit der Konfiguration zu starten, wähle das Zahnradsymbol für die **Einstellungen** aus.

Scrolle bis ans Seitenende und wähle **Mehr auf dem Smartphone anzeigen**.

![Entwicklermodus aktivieren](../images/android_auto_06.png)

Jetzt wird der Entwicklermodus auf Deinem Smartphone aktiviert.

Der erste Bildschirm sieht wie folgt aus. Scrolle bis zum Ende der Seite.

![Entwicklermodus aktivieren](../images/android_auto_07.png)

Unten findest Du die verwendete Android Auto-Version. Tippe zehn Mal (10) hintereinander auf die Versionsangabe. Damit hast Du nun den Entwicklermodus aktiviert.

![Entwicklermodus aktivieren](../images/android_auto_08.png)

Durch Deine Bestätigung (z. B. Entsperrmuster) wird der Entwicklermodus dann freigegeben.

![Entwicklermodus aktivieren](../images/android_auto_09.png)

Aktiviere in den **Entwickler-Einstellungen** die "Unbekannte Quellen".

![Entwicklermodus aktivieren](../images/android_auto_10.png)

Jetzt kannst Du den Entwicklermodus wieder verlassen. Rufe dazu über die drei Punkte oben rechts das Menü auf.

## Benachrichtigung im Auto anzeigen

Tippe auf das **Nummernsymbol** unten rechts in Android Auto in deinem Auto.

![number icon - Android Auto in car](../images/android_auto_11.png)

Die CGM-Werte werden wie folgt angezeigt:

![AAPS CGM-Daten in Android Auto](../images/android_auto_01.png)

(android-auto-troubleshooting)=

## Problembehandlung:

* If you don't see the notification, check if you [allowed AAPS to show notifications](#check-that-aaps-can-show-notifications) in Android and if [Android Auto has access rights to notifications](#allow-the-use-of-unknown-sources-with-android-auto).