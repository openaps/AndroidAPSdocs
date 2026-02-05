(bluetoothtroubleshooting-bluetooth-related-issues)=

# **Bluetooth related issues**

Einige Benutzer haben Probleme bei der Aktivierung des Omnipod DASH, Verbindungsprobleme mit der Medtrum Nano und haben andere Pod-Fehler, die auf Bluetooth-Probleme hinweisen, erhalten. Viele dieser Probleme sind auf eines der folgenden Probleme zurückzuführen.

Einige dieser Probleme betreffen wahrscheinlich auch andere Bluetooth Insulinpumpen. Die Medtrum Nano und auch der Omnipod DASH haben bekannte Probleme mit der „Geräte in der Nähe“-Berechtigung.

---

(bluetoothtroubleshooting-cannot-start-omnipod-with-android-16)=

## Omnipod kann nicht mit Android 16 gestartet werden
- Damit der Omnipod DASH mit Android 16 funktioniert wird mindestens die **AAPS**-Version 3.3.2.1 benötigt. Diese Version behebt die bekannten Probleme, die Android 16 für den Omnipod verursacht hat.

---

(bluetoothtroubleshooting-bluetooth-battery-optimisation)=

## Bluetooth-Akku-Optimierung

Neuere Android-Versionen haben standardmäßig die Akku-Optimierung für die Bluetooth-App des Systems eingeschaltet. Dies führt erwiesenerrmaßen zu einigen Problemen bei Pumpen und CGMs, die Bluetooth nutzen.

Wenn Du den [Einrichtungsassistenten](../SettingUpAaps/SetupWizard) genutzt hast, und den Konfigurationsvorschlägen im Abschnitt [Bluetooth Akku-Optimierung](setup-wizard-bluetooth-battery-optimisation) gefolgt bist, sollte die Einstellung bereits korrekt sein. Bist Du allerdings durch eine ältere Version der Anleitung gegangen, wurde die Einstellung nicht auf den richtigen Wert geändert.

Solltest Du Verbindungsabbrüche zwischen dem CGM und Deiner Pumpe haben, überprüfe, ob die Einstellung richtig gesetzt ist.

---

(bluetoothtroubleshooting-apps-using-nearby-device-permission)=

## Apps, die die Android-Berechtigung „Geräte in der Nähe“ verwenden, können Verbindungsabbrüche und Pod-Aktivierungsprobleme verursachen

Du kannst mit Android durch ein Berechtigungsmodell genau festlegen, was jede App tun darf und wie sie auf Dein Smartphone zugreifen darf. Für jede installierte App kannst Du einzelne Berechtigungen zuweisen oder verweigern (z. B. den Dateizugriff auf Dein Gerät, die Bluetooth-Nutzung oder die Suche nach Geräten in der Nähe).

Um funktionieren zu können, benötigt **AAPS** eine Reihe spezifischer Berechtigungen. Eine davon, die sicherstellt, dass die Pods funktionieren, ist die Berechtigung für „Geräte in der Nähe“. Es gibt viele andere Anwendungen, die diese Berechtigung ebenfalls benötigen. Die Community hat herausgefunden, dass eine Reihe von Anwendungen, wenn ihnen diese Berechtigung gegeben wird, Probleme bei der Aktivierung neuer Pods auf einigen Geräten verursachen können.

(bluetoothtroubleshooting-apps-using-nearby-device-permission-known-apps)=

### **Apps, die die Berechtigung „Geräte in der Nähe“ benötigen und von denen man weiß, dass sie problematisch sind:**

Die in dieser Liste aufgeführten Apps wurden an einer oder mehreren Stellen in der Community als Verursacher der Probleme mit Omnipod-DASH-Geräten und in einigen Fällen auch der Medtrum Nano diskutiert.

```{admonition} Updating the list
:class: note
Ping @XiTatiON im Discord-Kanal #omnipod-dash an, um Apps, die zur Liste hinzugefügt werden sollen, zu besprechen.
```

- **myBMW** MyBMW hat die Verbindung zu Medtrum Nano und Omnipod DASH getrennt. Die MyBMW-App fragt nur einmal nach der Erlaubnis „Geräte in der Nähe finden“. Wenn Du die Erlaubnis nicht gibst, funktioniert sie immer noch absolut OK

- **Amazon Alexa** Das Löschen der Berechtigung „Geräte in der Nähe“ für die Alexa-App, hat das Problem für einige Leute gelöst, hat aber den Nebeneffekt, dass Matter-IoT-Geräte nicht mehr gekoppelt werden können

- **MINI App** Die App scheint auf der myBMW-App zu basieren und verhält sich folglich genau so

- **BM2** Eine App zum Management einer Solarbatterie. Sie wird in Wohnmobilen und im Camping-Bereich für Solarinstallationen genutzt. Wenn die App läuft, verhindert sie die Aktivierung eines neuen Pods. Als Workaround kannst Du für den Zeitraum in dem ein neuer Pod aktiviert werden soll, die App deaktivieren (Stopp erzwingen). Das Ausführen der App danach schien die Funktion des DASH (auf einem Pixel 8 Pro mit Android 16) zu beeinträchtigen.

(bluetoothtroubleshooting-revoke-nearby-device-permission)=

### **Wie man die „Geräte in der Nähe“-Berechtigungen für andere Apps entzieht:**
Solltest Du die richtige unterstütze **AAPS**-Version für Deine Android-Version im Einsatz haben und Du dennoch Probleme bei der Pod-Aktivierung haben: Es kann notwendig sein, für den Zeitraum der Pod-Aktivierung die Berechtigung den andere Apps zu entziehen.

Befolge die folgenden Schritte, um die „Geräte in der Nähe“-Berechtigung allen Apps außer **AAPS** zu entziehen:

```{admonition} Menus and settings
:class: note
Die Screenshots und Anweisungen in dieser Anleitung stammen von einer Standard-Android 16 Installation auf einem Google Pixel 8 Pro. Die Menüs und Einstellungsbeschreibungen andere Hersteller und Geräte werden wahrscheinlich leicht abweichen. Passe die Schritte entsprechend an das Gerät an, das Du hast. Solltest Du nicht weiterkommen, schau im Abschnitt [Wo ich Hilfe zum DASH finde](#omnipod-dash-where-to-get-help-for-dash) nach, wie Du die Community für Hilfestellung erreichen kannst.
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

### **Wie man die Berechtigung „Geräte in der Nähe“ für System- und andere Apps wieder aktiviert:**

1. Falls erforderlich, schau im Abschnitt **„Wie man die „Geräte in der Nähe“-Berechtigungen für andere Apps entzieht“** nach, wie man zu den Datenschutz-Einstellungen der App gelangt. Wenn Du dann in der **Geräte in der Nähe**-Konfiguration bist, mach mit 2. weiter.

2. Gehe durch die App-Liste und tippe auf die App, der Du die **Geräte in der Nähe**-Berechtigung erlauben möchtest.

   In dieser Anleitung wird der App **Android Auto (1)** die Berechtigung zugewiesen.

   Du wirst erkennen, dass **Android Auto (1)** in der App-Liste fehlt, nachdem die Berechtigung entzogen wurde. Das liegt daran, dass die **Android Auto**-App eine **System-App** ist und System-Apps standardmäßig versteckt sind.

   ![android_auto_nearby_dev_missing](../images/android_16/android_auto_nearby_dev_missing.png)

3. Um versteckte System-Apps anzuzeigen, tippe oben rechts auf die **drei Punkte (Hamburger) (1)** und dann auf **„Systemanwendungen anzeigen (1)“**. Du solltest nun auch die versteckte System-App **Android Auto (3)** in der Liste sehen können.

```{admonition} Find your app
:class: tip
Wenn eine App „widerrufen“ ist, musst Du nach unten scrollen. „Widerrufene Apps“ erscheinen in der Liste ganz unten.
```

   ![android_auto_nearby_dev_missing_hamburger](../images/android_16/android_auto_nearby_dev_missing_hamburger.png) ![android_auto_nearby_show_system](../images/android_16/android_auto_nearby_show_system.png) ![android_nearby_dev_system](../images/android_16/android_nearby_dev_system.png)

5. Führe die Schritte der Anleitung **Wie man die „Geräte in der Nähe“-Berechtigungen für andere Apps entzieht** in umgekehrter Reihenfolge durch, um die Berechtigungen für jede App wieder zu aktivieren.

---

(bluetoothtroubleshooting-android-15-bluetooth-connection-problems)=

## Android 15 - Häufige auftretende Bluetooth-Verbindungsprobleme

Nach einem Android-Upgrade oder dem Umzug auf ein neueres Smartphone verliert **AAPS** häufig die Bluetooth-Verbindung zur Pumpe. Mit einem Neustart des Smartphones verschwindet das Problem vorübergehend. Wenn das Smartphone mit Android 15 läuft. Aktivieren der Option **Koppeln des BT Geräts mit Android 15+** innerhalb der **AAPS**-Einstellungen kann helfen, die Stabilität der Bluetooth-Verbindungen zu verbessern. Arbeite die folgende Anleitung ab, um die Option zu aktivieren:

```{admonition} Android 16
:class: warning
Aktiviere die Option **Koppeln des BT Geräts mit Android 15+** unter Android 15 wirklich nur dann, wenn Du Verbindungsprobleme hast. Aktiviere die Koppelungs-Option NICHT unter Android 16.
```

1) **Öffne die Einstellungen** durch einen Klick auf das 3-Punkte-Menü rechts oben auf dem Startbildschirm.

   ![Einstellungen öffnen](../images/Pref2020_Open2.png)

2. Scrolle ganz herunter und öffne das **Bestätigungstöne** / **Erweitertes**-Untermenü. Aktiviere **Verbinde BT-Gerät bei Android 15+**.

   ![BondBT](../images/troubleshooting/BondBT.png)


3. Wenn die Pumpe eine Koppelungsanfrage schickt, nimm Sie sie an.

4. Starte dein Smartphone neu.
