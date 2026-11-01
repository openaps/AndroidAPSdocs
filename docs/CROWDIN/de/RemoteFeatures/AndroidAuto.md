# Android Auto

**AAPS** kann aktuelle Statusinformationen als Benachrichtigung direkt an Android Auto im Auto senden.

## Voraussetzungen

**AAPS** verwendet eine Android Auto-Funktion, mit der Nachrichten von Smartphone-Apps an den Bildschirm im Auto geschickt werden können.

Das bedeutet:

* Android muss **AAPS** erlauben, Benachrichtigungen anzuzeigen, und
* Dass „unbekannte Quellen“ mit Android Auto verwendet werden dürfen, da **AAPS** eine inoffizielle AAPS ist.

![AAPS CGM data on Android Auto](../images/android_auto_01.png)

(androidauto-check-that-aaps-can-show-notifications)=

## Prüfen, ob AAPS Benachrichtigungen anzeigen darf

**AAPS** zeigt immer eine Status-Benachrichtigung mit Deinem aktuellen Glukosewert, IOB und COB. Diese Benachrichtigung zeigt Android Auto im Auto an. In **AAPS** musst Du nichts einschalten, aber Android muss **AAPS** erlauben, Benachrichtigungen anzuzeigen.

Öffne auf Deinem Smartphone **Einstellungen** > **Apps** > **AAPS** > **Benachrichtigungen** und stelle sicher, dass **Alle Benachrichtigungen von „AAPS“** eingeschaltet ist.

![All AAPS notifications switched on](../images/android_auto_notifications_all.png)

Scrolle nach unten und stelle sicher, dass **Laufender Status** eingeschaltet ist: Das ist der Kanal der Status-Benachrichtigung.

![Ongoing status notification channel switched on](../images/android_auto_ongoing_channel.png)

Prüfe bitte jetzt, ob Du die Status-Benachrichtigung von **AAPS** auf dem Smartphone siehst, bevor Du zu Deinem Auto gehst!

![AAPS notification on the phone](../images/android_auto_04.png)

(androidauto-allow-the-use-of-unknown-sources-with-android-auto)=

## Zulassen von „unbekannten Quellen“ in Android Auto

Da **AAPS** keine offizielle Android Auto App ist, müssen die Benachrichtigungen einmalig manuell aktiviert werden. Die Aktivierung erfolgt über den Entwicklermodus auf Deinem Smartphone. Was dazuzutun ist, wird nun erklärt.

Als Erstes verbinde Dein Smartphone mit dem Infotainment-System Deines Autos.

Der Bildschirm sollte nun ungefähr so aussehen:

![Enable developer mode](../images/android_auto_05.png)

Um mit der Konfiguration zu starten, wähle das Zahnradsymbol für die **Einstellungen** aus.

Scrolle bis ans Seitenende und wähle **Mehr auf dem Smartphone anzeigen**.

![Enable developer mode](../images/android_auto_06.png)

Jetzt wird der Entwicklermodus auf Deinem Smartphone aktiviert.

Der erste Bildschirm sieht wie folgt aus. Scrolle bis zum Ende der Seite.

![Enable developer mode](../images/android_auto_07.png)

Unten findest Du die verwendete Android Auto-Version. Tippe zehn Mal (10) hintereinander auf die Versionsangabe. Damit hast Du nun den Entwicklermodus aktiviert.

![Enable developer mode](../images/android_auto_08.png)

Durch Deine Bestätigung (z. B. Entsperrmuster) wird der Entwicklermodus dann freigegeben.

![Enable developer mode](../images/android_auto_09.png)

Aktiviere in den **Entwickler-Einstellungen** die "Unbekannte Quellen".

![Enable developer mode](../images/android_auto_10.png)

Jetzt kannst Du den Entwicklermodus wieder verlassen. Rufe dazu über die drei Punkte oben rechts das Menü auf.

## Benachrichtigung im Auto anzeigen

Tippe auf das **Nummernsymbol** unten rechts in Android Auto in deinem Auto.

![number icon - Android Auto in car](../images/android_auto_11.png)

Die CGM-Werte werden wie folgt angezeigt:

![AAPS CGM data on Android Auto](../images/android_auto_01.png)

(android-auto-troubleshooting)=

## Problembehandlung:

* Falls keine Benachrichtigungen angezeigt werden: prüfe, ob Du in den Android-Einstellungen die [Benachrichtigungsanzeige für AAPS aktiviert](#androidauto-check-that-aaps-can-show-notifications) hast und ob [Android Auto Zugriffsrechte für die Benachrichtigungen hat](#androidauto-allow-the-use-of-unknown-sources-with-android-auto).