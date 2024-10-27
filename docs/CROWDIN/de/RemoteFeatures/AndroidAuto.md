# Android Auto

**AAPS** kann aktuelle Statusinformationen als Benachrichtigung direkt an Android Auto im Auto senden.

```{admonition} version and last change information :class: dropdown date of last edit: 07/05/2023

Für die Dokumentation verwendete Versionen:

* AAPS 3.2.0-dev-i
* Android Auto: 9.3.631434-release ```

## Voraussetzungen

**AAPS** verwendet eine Android Auto-Funktion, mit der Nachrichten von Smartphone-Apps an den Bildschirm im Auto geschickt werden können.

Das bedeutet:

* **AAPS** muss so konfiguriert werden, dass Systembenachrichtigungen verwendet werden können und
* Dass "unbekannte Quellen" mit Android Auto verwendet werden dürfen, da **AAPS** eine inoffizielle AAPS ist.

![AAPS CGM-Daten in Android Auto](../images/android_auto_01.png)

## Verwenden der Benachrichtigungen für Alarme und Meldungen

Rufe das 3-Punkte Menü auf dem **AAPS**-Übersicht-Reiter oben rechts auf und wähle **Einstellungen** aus.

![Benutze Systemmeldungen für Alarme und Meldungen](../images/android_auto_02.png)

Aktiviere unter **Lokale Warnungen** die Option **Benutze Systemmeldungen für Alarme und Meldungen**

![Benutze Systemmeldungen für Alarme und Meldungen](../images/android_auto_03.png)

Bevor Du nun zu Deinem Auto gehst, überprüfe, ob Du **AAPS**-Meldungen auf Deinem Smartphone erhältst.

![Benutze Systemmeldungen für Alarme und Meldungen](../images/android_auto_04.png)

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

## Problembehandlung:

* If you don't see the notification, check if you [allowed AAPS to show notifications](#use-system-notifications-in-aaps-for-alerts-and-notifications) in Android and if [Android Auto has access rights to notifications](#allow-the-use-of-unknown-sources-with-android-auto).