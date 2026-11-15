(bluetoothtroubleshooting-bluetooth-related-issues)=

# Bluetooth-Probleme

Einige Benutzer haben Probleme bei der Aktivierung des Omnipod DASH, Verbindungsprobleme mit der Medtrum Nano und haben andere Pod-Fehler, die auf Bluetooth-Probleme hinweisen, erhalten. Viele dieser Probleme sind auf eines der folgenden Probleme zurückzuführen.

Einige dieser Probleme betreffen wahrscheinlich auch andere Bluetooth Insulinpumpen. Die Medtrum Nano und auch der Omnipod DASH haben bekannte Probleme mit der „Geräte in der Nähe“-Berechtigung.

---

(bluetoothtroubleshooting-cannot-start-omnipod-with-android-16)=

## Omnipod kann nicht mit Android 16 gestartet werden
- Unter Android 16 braucht der Omnipod DASH mindestens die **AAPS**-Version 3.3.2.1, um richtig zu funktionieren. Diese Version enthält Korrekturen speziell für bekannte Probleme, die Android 16 beim Omnipod verursacht.

---

(bluetoothtroubleshooting-bluetooth-battery-optimisation)=

## Bluetooth-Akku-Optimierung

Neuere Android-Versionen haben die Akku-Optimierung für die Bluetooth-System-App eingeschaltet. Dies führt erwiesenerrmaßen zu einigen Problemen bei Pumpen und CGMs, die Bluetooth nutzen.

Wenn Du dem [Einrichtungsassistenten](../SettingUpAaps/SetupWizard.md) und den Einstellungen im Abschnitt [Akku-Optimierung für Bluetooth](#setup-wizard-bluetooth-battery-optimisation) gefolgt bist, sollte diese Einstellung stimmen. Wenn Du aber einer älteren Version dieser Anleitung gefolgt bist, hast Du sie möglicherweise nicht geändert.

Prüfe, ob das richtig eingestellt ist, wenn Pumpe und CGM die Verbindung verlieren.

---

(bluetoothtroubleshooting-apps-using-nearby-device-permission)=

## Apps, die die Android-Berechtigung „Geräte in der Nähe“ verwenden, können Verbindungsabbrüche und Pod-Aktivierungsprobleme verursachen

Du kannst mit Android durch ein Berechtigungsmodell genau festlegen, was jede App tun darf und wie sie auf Dein Smartphone zugreifen darf. Für jede installierte App kannst Du bestimmte Berechtigungen erlauben oder verweigern, z. B. den Zugriff auf Dateien auf dem Gerät, auf Bluetooth, die Suche nach Geräten in der Nähe usw.

**AAPS** braucht eine Reihe bestimmter Berechtigungen, um zu funktionieren. Damit Pods funktionieren, ist unter anderem die Berechtigung „Geräte in der Nähe“ nötig. Es gibt viele andere Anwendungen, die diese Berechtigung ebenfalls benötigen. Die Community hat herausgefunden, dass eine Reihe von Anwendungen, wenn ihnen diese Berechtigung gegeben wird, Probleme bei der Aktivierung neuer Pods auf einigen Geräten verursachen können.

(bluetoothtroubleshooting-apps-using-nearby-device-permission-known-apps)=

### Apps, die die Berechtigung „Geräte in der Nähe“ benötigen und von denen man weiß, dass sie problematisch sind:

Die in dieser Liste aufgeführten Apps wurden an einer oder mehreren Stellen in der Community als Verursacher der Probleme mit Omnipod-DASH-Geräten und in einigen Fällen auch der Medtrum Nano diskutiert.

```{admonition} Updating the list
:class: note
Ping @XiTatiON im Discord-Kanal #omnipod-dash an, um Apps, die zur Liste hinzugefügt werden sollen, zu besprechen.
```

- **myBMW** MyBMW hat die Verbindung zu Medtrum Nano und Omnipod DASH getrennt. Die MyBMW-App fragt nur einmal nach der Erlaubnis „Geräte in der Nähe finden“. Wenn Du die Erlaubnis nicht gibst, funktioniert sie immer noch absolut OK

- **Amazon Alexa**  Das Entfernen von „Geräte in der Nähe“ für die Alexa-App hat bei manchen das Problem gelöst, verhindert aber das Koppeln von Matter-IoT-Geräten

- **MINI-App**  Die App basiert offenbar auf der myBMW-App und verhält sich daher vermutlich genauso

- **BM2** App zur Überwachung von Solarbatterien, die in manchen Wohnmobilen und Camping-Solaranlagen verwendet wird: Solange die App lief, verhinderte sie die Aktivierung eines neuen Pods. Als Abhilfe kannst Du die App während der Aktivierung eines neuen Pods beenden („Stopp erzwingen“). Das Ausführen der App danach schien die Funktion des DASH (auf einem Pixel 8 Pro mit Android 16) zu beeinträchtigen.

(bluetoothtroubleshooting-revoke-nearby-device-permission)=

### Wie man die „Geräte in der Nähe“-Berechtigungen für andere Apps entzieht:
Wenn Du Probleme beim Aktivieren eines neuen Pods hast und die für Deine Android-Version richtige unterstützte **AAPS**-Version nutzt, kann es nötig sein, anderen Apps die Berechtigung während der Aktivierung eines neuen Pods zu entziehen.

So entziehst Du allen Apps außer **AAPS** die Berechtigung „Geräte in der Nähe“:

```{admonition} Menus and settings
:class: note
Die Screenshots und Anweisungen in dieser Anleitung stammen von einer Standard-Android 16 Installation auf einem Google Pixel 8 Pro. Andere Hersteller und Geräte werden diesen Menüs und Beschreibungen wahrscheinlich nicht genau entsprechen. Passe die Schritte an Dein Gerät an. Wenn Du nicht weiterkommst, findest Du im Abschnitt [Wo bekomme ich Hilfe zum DASH](#omnipod-dash-where-to-get-help-for-dash), wie Du Dich an die Community wenden kannst.
```

1. Öffne die Android-Einstellungen auf Deinem Smartphone, scrolle nach unten und tippe auf **Sicherheit und Datenschutz (1)**.

    ![android_settings_sec_priv](../images/android_16/android_settings_sec_priv.png)

2. Scrolle nach unten und tippe auf **Datenschutz (1)**.

   ![android_sec_priv](../images/android_16/android_sec_priv.png)

3. Tippe auf **Berechtigungsnutzung (1)**.

   ![android_priv_control](../images/android_16/android_priv_control.png)

3. Scrolle herunter und tippe auf **Geräte in der Nähe (1)**.

   ![android_perm_man_nearby_dev](../images/android_16/android_perm_man_nearby_dev.png)

4. Gehe durch die App-Liste und tippe auf die App, der Du die **Geräte in der Nähe**-Berechtigung entziehen möchtest.

   In dieser Anleitung wird der App **Android Auto (1)** die Berechtigung entzogen.

   Um zu vermeiden, dass mehr Pods unbrauchbar werden, raten wir zuerst allen Apps außer **AAPS** die Berechtigung zu entziehen.

```{admonition} Which app to select?
:class: tip
Wenn Du nicht genau weißt, welche App das Problem verursacht (denke auch daran zuerst die Liste der bekannten Problem-Apps zu prüfen) und Du Dir erlauben kannst einige Pods unbrauchbar zu machen, aktiviere vor jeder neuen Pod-Aktivierung die Berechtigung für eine weitere App. Mach das solange, bis Du erkennen kannst, welche App konkret das Pod-Probleme verursacht. Wenn Du neue problematische Apps identifizierst, lass es uns bitte im #omnipod-dash Discord-Kanal wissen.
```

   ![android_nearby_dev](../images/android_16/android_nearby_dev.png)

5. Um die Berechtigung zu entziehen, tippe bitte auf **Nicht zulassen (1)** und dann auf **Trotzdem nicht zulassen (2)**. Wenn Du alles richtig gemacht hast, dann sollte **Nicht zulassen (3)** als Option ausgewählt sein. Du kommst zum **Geräte in der Nähe**-Menü zurück, indem Du auf den **Zurückpfeil (4)** drückst und diese Einstellung bei Bedarf bei anderen Apps änderst.

   ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dev.png) ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dont_allow_anyway.png)  ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dont_allow.png)

(bluetoothtroubleshooting-re-enable-nearby-device-permission)=

### Wie man die Berechtigung „Geräte in der Nähe“ für System- und andere Apps wieder aktiviert:

1. Lies bei Bedarf im Abschnitt **„Wie man die ‚Geräte in der Nähe‘-Berechtigungen für andere Apps entzieht“** nach, wie Du zu den Datenschutzeinstellungen der App gelangst, und fahre dann in der Konfiguration **Geräte in der Nähe** mit Schritt 2 fort.

2. Gehe durch die App-Liste und tippe auf die App, der Du die **Geräte in der Nähe**-Berechtigung erlauben möchtest.

   In dieser Anleitung wird der App **Android Auto (1)** die Berechtigung zugewiesen.

   Du wirst erkennen, dass **Android Auto (1)** in der App-Liste fehlt, nachdem die Berechtigung entzogen wurde. Das liegt daran, dass die **Android Auto**-App eine **System-App** ist und System-Apps standardmäßig versteckt sind.

   ![android_auto_nearby_dev_missing](../images/android_16/android_auto_nearby_dev_missing.png)

3. Um ausgeblendete System-Apps anzuzeigen, tippe oben rechts auf das **Drei-Punkte-Menü (⋮) (1)** und dann auf **„System anzeigen“ (2)**. Du solltest nun auch die versteckte System-App **Android Auto (3)** in der Liste sehen können.

```{admonition} Find your app
:class: tip
Wenn eine App „widerrufen“ ist, musst Du nach unten scrollen. „Widerrufene Apps“ erscheinen in der Liste ganz unten.
```

   ![android_auto_nearby_dev_missing_hamburger](../images/android_16/android_auto_nearby_dev_missing_hamburger.png) ![android_auto_nearby_show_system](../images/android_16/android_auto_nearby_show_system.png) ![android_nearby_dev_system](../images/android_16/android_nearby_dev_system.png)

5. Befolge die Anleitung unter **„Wie man die ‚Geräte in der Nähe‘-Berechtigungen für andere Apps entzieht“** in umgekehrter Reihenfolge, um die Berechtigungen für jede App wieder zu erteilen.

---

(bluetoothtroubleshooting-android-15-bluetooth-connection-problems)=

## Android 15 - Häufige auftretende Bluetooth-Verbindungsprobleme

Nach einem Android-Upgrade oder dem Umzug auf ein neueres Smartphone verliert **AAPS** häufig die Bluetooth-Verbindung zur Pumpe. Mit einem Neustart des Smartphones verschwindet das Problem vorübergehend. Wenn Du einen **Omnipod DASH** nutzt und Dein Smartphone mit Android 15 läuft, kann das Einschalten der Einstellung **Bluetooth-Kopplung** die Stabilität der Bluetooth-Verbindung verbessern. So schaltest Du sie ein:

```{admonition} Android 16
:class: warning
Schalte **Bluetooth-Kopplung** nur unter Android 15 ein und nur dann, wenn Du Verbindungsprobleme hast. Schalte die Kopplung unter Android 16 NICHT ein.
```

1. Öffne die [DASH-Einstellungen](#omnipod-dash-settings): Öffne den DASH-Pumpenbildschirm über **Verwalten** > **Pumpe** und tippe oben rechts auf das Symbol **Einstellungen** (Zahnrad).

   ![The DASH pump screen](../images/v4/Pumps/dash_pump_screen.png)

2. Öffne den Bereich **Erweiterte Einstellungen** und schalte **Bluetooth-Kopplung** ein.

   ![Bluetooth bonding in the Advanced Settings section](../images/v4/Pumps/dash_settings_advanced.png)

3. Wenn das Smartphone eine Kopplungsanfrage anzeigt, nimm sie an.

4. Starte dein Smartphone neu.
