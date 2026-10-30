# Set up AAPS on your Wear OS watch

Die folgenden Anweisungen gelten für die durch Dich zu erstellende **AAPS Wear**-APK. Solltest Du es zum ersten Mal machen, hilft Dir die [Anleitung](../WearOS/BuildingAapsWearOS.md) weiter. Im Erstellprozess ist es wichtig, dass Du die gleiche Keystore-Datei nutzt, die Du schon beim Erstellen der **AAPS**-APK für das Smartphone genutzt hast.

Einige der Informationen können auch für die **AAPSClient**- und die **PumpControl**-**Wear**-APK genutzt werden. Jede der **Wear**-Apps kommuniziert mit der zugehörigen Smartphone-App. Beispiel: Die **AAPSClient Wear**-App kann **AAPSClient**-Daten anzeigen, aber keine **AAPS**-Daten. When several client flavors (**AAPSClient**, **AAPSClient2**, **AAPSClient3**) are installed side by side, each one's tiles carry a small header in that flavor's accent colour so you can tell them apart while swiping.

## Wear OS-Versionen und Kompatibilität

(wearos-watchface-changes)=

### Wear OS watch face changes (impact on AAPS watchfaces)

```{admonition} Why newer Wear OS watches break AAPS watchfaces
:class: warning

In June 2025 Google [announced changes](https://android-developers.googleblog.com/2025/06/upcoming-changes-to-wear-os-watch-faces.html) that phase out the legacy watch face engine (the AndroidX / Wearable Support Library, or "WSL", engine) in favour of the newer declarative **Watch Face Format**. The **AAPS** custom watchfaces are built on the legacy engine, so the newer the Wear OS version, the more likely an AAPS watchface is to misbehave or stop working.

This affects the **watchfaces** specifically — AAPS **complications**, tiles and remote-control functions are not impacted. It is also why **a firmware/system update on a Wear OS watch can break AAPS watchfaces**, and a watch cannot be rolled back to an older Wear OS version afterwards. If your AAPS watchface currently works, **disable automatic watch updates**.
```

The table below summarises how Google's change affects the AAPS (legacy-engine) watchfaces by Wear OS version:

| Wear OS version         | Base Android | API level | Impact on AAPS (legacy) watchfaces                                                                                                                                                          |
| ----------------------- | ------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wear OS 6               | Android 16   | 36        | **Legacy watchfaces no longer available** — AAPS installs a [Watch Face Format watchface](#wearos-aaps-v4-watchface) instead: your custom watchface, or the AAPS V4 complications watchface |
| Wear OS 5               | Android 14   | 34        | **Severe** — active (interactive) mode often fails, complications freeze, animations stop                                                                                                   |
| Wear OS 4               | Android 13   | 33        | **Moderate** — throttling, missed updates, partial failures                                                                                                                                 |
| Wear OS 3.0 / 3.2 / 3.5 | Android 11   | 30        | **Low** — legacy engine still supported                                                                                                                                                     |

If your watch runs a version where AAPS watchfaces are unreliable, you can instead display AAPS data through **complications** on a compatible watchface, or use [GlucoDataHandler](https://play.google.com/store/apps/details?id=de.michelinside.glucodatahandler) with a complication, fed by the [External Companion Apps](#external-companion-apps) plugin of **AAPS**. On **Wear OS 6 and newer**, AAPS installs a replacement watchface built in the new format — see below.

(wearos-aaps-v4-watchface)=

### Wear OS 6 and newer — the watchface AAPS installs

Watches running **Wear OS 6 or newer** cannot run the classic AAPS watchfaces as watchfaces. For these watches the AAPS watch app brings two watchfaces built in Google's new **Watch Face Format**. Wear OS lets an app install only **one** watchface, so you choose which of the two is on the watch:

- **Custom watchface** (default): shows the custom watchface you loaded from the phone with **Load Watchface** (see [Changing to an AAPS Watchface](#WearOS_changing-to-AAPS-watchface)). The watch draws your design as a picture, so every existing custom watchface works. The complication slots a custom watchface may define are **not available** in this picture, because Wear OS only delivers complication data to a real watchface. Long-press the face to reach its one setting: whether the always-on display shows a plain clock or your own design, dimmed.
- **Complications watchface** (the **AAPS V4** watchface): its **seven complication slots** come **preconfigured with AAPS data**: BG value, IOB, COB, the [BG Graph complication](#Watchfaces-complications), basal rate / temp target, and the **Running Mode** icon in the top-left slot (tap it to change the loop mode from the watch). Tap the time at the top to open the watch's alarm app. You can change what each slot shows in the watch face editor.

You choose on the phone: open the **Wear** plugin and, under **Watchface installed on watch**, select one of the two. This card is only shown while a Wear OS 6 or newer watch is connected. **AAPS** asks you to confirm, because the watch replaces its face immediately. Switching away from the **Complications watchface** also resets the complications you changed in the watch face editor back to the defaults, and the confirmation says so. While the **Complications watchface** is selected, the custom watchface buttons are hidden and a preview of the face is shown instead. If you load a custom watchface while the **Complications watchface** is selected, **AAPS** reminds you to switch to **Custom watchface** to see it on the watch.

- The selected watchface is **installed and activated automatically** the first time the AAPS watch app runs on such a watch, and it is **updated automatically** together with the watch app.
- If you removed the watchface, an **Install watchface** entry appears at the bottom of the watch's AAPS **main menu** — tap it to reinstall.

While a watch running Wear OS 5 or older is connected, the **Watchface installed on watch** card is not shown at all (the mechanism it relies on requires Wear OS 6); the classic watchfaces run there as before.

(wearos-complications-watchface-setup)=

### Complications watchface — recommended setup

The **Complications watchface** has seven complication slots. Long-press the watchface, tap **Customize**, and pick a data source for each slot. The slots are numbered as in the watch face editor: **1** left, **2** centre, **3** right, **4** the graph, **5** bottom, **6** top-left and **7** top-right.

| Default setup                                                                                   | Alternative setup                                                                                       |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| ![Complications watchface, default setup](../images/wearos/complications_watchface_default.png) | ![Complications watchface, alternative setup](../images/wearos/complications_watchface_alternative.png) |

| Slot | Position  | Default                                                             | Alternative                           |
| ---- | --------- | ------------------------------------------------------------------- | ------------------------------------- |
| 1    | Left      | IoB Icon                                                            | CoB & IoB                             |
| 2    | Centre    | Blood Glucose                                                       | Blood Glucose                         |
| 3    | Right     | CoB Icon                                                            | BR & Target                           |
| 4    | Graph     | BG Graph                                                            | BG Graph                              |
| 5    | Bottom    | BR & Target                                                         | Uploader/Phone Battery                |
| 6    | Top-left  | Betriebsmodus                                                       | Betriebsmodus                         |
| 7    | Top-right | Uploader/Phone Battery, or an app shortcut to **AAPS Snooze Alert** | App shortcut to **AAPS Snooze Alert** |

The **AAPS Snooze Alert** shortcut is picked from the watch's own **App shortcut** complications. Tapping it snoozes the alarm that is sounding on the phone.

```{tip}
Turn on **Always-on display** on the watch (**Settings** > **Display**). The watchface then keeps showing your glucose when the wrist is down, instead of a blank or a plain clock.
```

```{admonition} No complication data while the watch is locked
:class: note
If a **Lock type** is set under **Settings** > **Security and privacy**, the watch hides complication data while it is locked, and the watchface shows empty slots until you unlock it. To keep the data visible, turn off **Hide information** in the same menu.
```

### Wear OS 3

Installiere die **AAPS Wear**-APK mit [Wear Installer 2](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV), Easy Fire Tools (weiter unten beschrieben) oder ADB.  
Keine Einschränkung bei **AAPS Wear-** Operationen.

(BuildingAapsWearOs-WearOS5)=

### Wear OS 4 and Wear OS 5

Example: Galaxy Watch 4, 5, 6, 7 and Ultra or Pixel Watch that have **not** been updated to Wear OS 6 yet. Check the version under **Settings** > **About watch** > **Software**.

Install the **AAPS Wear** apk using [Wear Installer 2](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV) (for Wear OS 5 follow [this video](https://www.youtube.com/watch?v=yef_qGvcCnk)). All **AAPS Wear** functions work, but the classic **AAPS** watchfaces are limited as described in the table above: throttled on Wear OS 4, often failing on Wear OS 5.

```{admonition} Wear OS 5
:class: warning
On Wear OS 5 the AAPS watchface has to be selected with Wear Installer 2 right after installing the Wear app: the installer offers the **AAPS (Custom)** watchface at the end of the installation. If you accidentally switch to another watchface, repeat the installation. Changing the watchface settings (Dark, Watchdivider, etc.) may not be possible.

If the classic watchface currently works for you, **disable automatic watch updates**: the next firmware update is likely to break it. If you update to Wear OS 6 anyway, read the section above: **AAPS** then installs its own watchface in the new format.
```

If the watchface is too unreliable, consider [GlucoDataHandler](https://play.google.com/store/apps/details?id=de.michelinside.glucodatahandler) with a complication instead. It needs the [External Companion Apps](#external-companion-apps) plugin enabled in **AAPS**.

### Wear OS 6 and newer

Example: Galaxy Watch 4 and newer with One UI 8 Watch, Pixel Watch after the 2025 update. Most Galaxy and Pixel watches have received this update.

Install the **AAPS Wear** apk using [Wear Installer 2](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV). The classic watchfaces are not available; **AAPS** installs the watchface selected on the phone automatically, see [the watchface AAPS installs](#wearos-aaps-v4-watchface). No limitation in **AAPS Wear** operations.

## Wie man eine Samsung Galaxy 4 Smartwatch mit **AAPS** einrichtet

Dieser Abschnitt ist für Neulinge im Umgang mit Smartwatches und gibt zunächst einen ersten Überblick über die beliebte **Galaxy Watch 4** und danach eine Schritt-für-Schritt Anleitung, um **AAPS** auf der Smartwatch einzurichten.

_This guide was written for a Galaxy Watch running Wear OS 3._ On Wear OS 4 and later the watch asks for a **pairing code** when a phone or computer connects over ADB. Wear Installer 2 and the terminal procedure [below](#BuildingAapsWearOs-WearOS5-TShoot) both support it.

Hier sind die Anleitungen zur Einrichtung der [Galaxy Watch 5](https://www.youtube.com/watch?v=Y5upzOIxwTU) und der [Galaxy Watch 6](https://www.youtube.com/watch?v=D6bq20KzPW0)

## Mit der Smartwatch vertraut machen

Nach den im Video gezeigten Grundeinstellungen Deiner Smartwatch, gehe in den Play Store Deines Smartphones und lade "Galaxy Wearable", “Samsung” und entweder “Easy Fire Tools” oder "Wear Installer 2" herunter.

Es gibt eine Reihe von YouTube-Videos von Drittanbietern, die Dir helfen werden, Dich mit Deiner neuen Smartwatch vertraut zu machen, zum Beispiel:

[https://www.youtube.com/watch?v=tSVkqWNmO2c](https://www.youtube.com/watch?v=tSVkqWNmO2c)

Die App „Galaxy Wearable“ enthält auch ein Benutzerhandbuch. Öffne die Galaxy Wearable App auf Deinem Smartphone, suche unter dem Punkt "Neues Gerät hinzufügen" nach Deiner Smartwatch und versuche diese mir dem Smartphone zu koppeln. In Abhängigkeit von der Version, kann es sein, dass Du dazu aufgefordert wirst eine weitere Drittanbieter App "Galaxy Watch 4 Plugin" aus dem Play Store zu installieren. Der Download ein wenig. Installiere diese auf Deinem Smartphone und versuche danach die beiden Geräte in der Galaxy Wearable App zu koppeln. Gehe durch die verschiedenen Menüs und wähle Deine persönlichen Voreinstellungen aus.

## Samsung-Konto einrichten

Stelle sicher, dass in dem eMail-Konto, das Du zur Einrichtung des Samsung-Kontos verwendest, ein Geburtsdatum älter als 13 Jahre hinterlegt ist, da die notwendigen Samsung Berechtigungen sonst nur schwer genehmigt werden können. Du kannst ein Gmail Konto eines Kindes (unter 13 Jahren) nicht problemlos in das eines Erwachsenen ändern. Ein möglicher Weg, das zu umgehen ist, das Geburtsdatum auf ein Alter von 12 Jahren und 363 Tagen zu ändern. Am folgenden Tag wird das Konto in ein Erwachsenen-Konto umgewandelt, und Du kannst mit der Einrichtung des Samsung-Kontos weiter machen.

(remote-control-transferring-the-aaps-wear-app-onto-your-aaps-phone)=

## Übertragen der **AAPS** Wear-App auf Dein **AAPS**-Smartphone

Die wear.apk kann über mehrere Wege aus dem Android Studio auf Dein Smartphone übertragen werden:

a) Mit einem USB-Kabel, um die **AAPS** wear apk Datei auf das Smartphone zu bringen und sie dann über "Sideloading" auf die Smartwatch zu laden. Übertrage die Wear.apk auf das Smartphone über USB in den „Downloads“-Ordner oder

b) Schneide die Wear.apk aus Android Studio aus und füge sie in Dein Google Drive Laufwerk ein.


Um AAPS über „sideloading“ auf die Smartwatch zu bekommen, kannst Du eines der folgenden Tools nutzen: 1) Wear-Installer 2 2) Easy Fire Tools 3) Android Debug Bridge (ADB) Wir empfehlen den Wear Installer 2, weil die einzelnen Schritte und Prozesse im Video klar und gut erklärt werden. If Wear Installer 2 does not work for you, try Easy Fire Tools or ADB, both described below.

### Wear Installer 2 zum „Sideloading“ von **AAPS** Wear vom Smartphone auf die Smartwatch nutzen

 ![Wear Installer 2 app icon](../images/wearos/wear_installer2_icon.png)

Wear Installer 2, das von [Malcolm Bryant](https://www.youtube.com/@Freepoc) entwickelt wurde, kann aus dem Play Store auf Dein Smartphone heruntergeladen und zum Sideloading der AAPS Wear App auf die Smartwatch genutzt werden. Die App hat auch ein praktisches „Wie mache ich ein Sideloading“ [Video](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV).

```{tip}
Für Wear OS 5 Smartwatches gibt es eine [Videoanleitung](https://www.youtube.com/watch?v=yef_qGvcCnk).
Siehe die Empfehlungen zur Fehlerbehebung [weiter unten](#BuildingAapsWearOs-WearOS5-TShoot).
```

This provides all the necessary detail (best to open the video on a separate device so you can watch it while setting up the phone).

Um die Akkulaufzeit zu verlängern, schalte - wie auch im Video gezeigt - auf der Smartwatch das ADB Debugging aus.

Alternativ, allerdings nicht für Wear OS 5, kannst Du:

### Easy Fire Tools zum „Sideloading“ von **AAPS**-Wear auf die Smartwatch nutzen

1) Lade _[Easy Fire Tools](https://play.google.com/store/apps/details?id=de.agondev.easyfiretools&hl=en)_ aus dem Play Store auf Dein Smartphone herunter

![grafik](../images/wearos/easyfire01.png)

2) Bringe die Smartwatch (sobald die Einrichtung abgeschlossen ist und sie mit dem Smartphone verbunden ist) in den Entwicklermodus:

Go to **Settings** > **System** > **About** > **Versions** (the menu names vary between watch brands — on some watches it is **About watch** > **Software info** > **Software version**).

![grafik](../images/wearos/easyfire02.png)

Rapidly tap on **Build number** (or **Software version**) several times until a message tells you that you are now a developer.

![grafik](../images/wearos/easyfire03.png)

Go back to **Settings** > **System**: a new **Developer options** menu is now shown.

In **Developer options**, turn on **ADB debugging** and **Wireless debugging**, and confirm the prompts. Wireless debugging then shows the watch's **IP address & Port**, something like: **192.168.1.214** : 5555. You only need the IP address (here **192.168.1.214**), not the port number after the colon. Note that the IP address can change, for example every time you change to a new phone handset for AAPS.

![grafik](../images/wearos/easyfire04.png)

Schritt 3) Gib die IP-Adresse _z. B. _ **192.168.1.214** in Easy Fire Tools auf Deinem Smartphone ein (gehe dazu auf das linke Hamburger-Menü, Einstellungen und gib die IP-Adresse ein).

![grafik](../images/wearos/easyfire05.png)

Klicke dann auf das plug socket Icon oben rechts. Sobald es verbunden ist, wird es grün.

![grafik](../images/wearos/easyfire06.png)


Schritt 4) Folge den [Sideloading-Anweisungen](https://wearablestouse.com/blog/2022/01/04/install-apps-apk-samsung-galaxy-watch-4/?utm_content=cmp-true) (d. h. dem Transfer der aaps.wear.apk mit Hilfe der Easy Fire Tools auf die Smartwatch).


![grafik](../images/wearos/easyfire07.png)


(BuildingAapsWearOs-WearOS5-TShoot)=

### Benutzen des Terminals
Verbinde Deine Smartwatch und Deinen Computer mit dem gleichen WLAN-Netzwerk.

- Um ADB zu installieren, lade es zunächst hier herunter: https://developer.android.com/tools/releases/platform-tools
- Öffne ein Terminal.
- Für Windows erstelle auf Deiner Festplatte `C:` den Ordner `adb`. Öffne die heruntergeladene Datei `platform-tools-latest-windows.zip`. Kopiere alle Dateien aus dem Ordner `Plattform-Tools` nach `C:\adb` und öffne diesen Ordner mit einer Eingabeaufforderung (Rechtsklick und „Öffnen“ im Terminal). Gebe dann den folgenden Befehl ein, um den Pfad zum Ordner in dem sich ADB befindet zu setzen: `setx PATH "%PATH%;C:\adb"`
- Für den Mac kannst Du statt der manuellen Installation auch Homebrew nutzen: `brew install android-platform-tools`

Auf der Smartwatch:
- Gehe in die Einstellungen → Info zur Uhr → **Software-Informationen**
- Tippe 7-mal auf die Software-Version (bis der Entwicklermodus aktiviert ist).
- Gehe in die Einstellungen → Entwickleroptionen. Aktiviere **ADB-Debugging**
- Gehe in die Einstellungen → Entwickleroptionen → Drahtloses Debugging → **Neues Gerät koppeln**

You will see a Wi-Fi pairing code and IP address and port appearing:

![Watch screen showing the Wi-Fi pairing code and IP address and port](../images/wearos/ADB03.png)

- Im Terminal: `adb pair ipaddress:port` z B. `adb pair 10.10.1.125:36299`
- Du wirst nach dem Koppelungscode gefragt werden. Gib ihn ein.
- Du wirst die Rückmeldung bekommen:<br> `Successfully paired to 10.10.1.125:36299 [guid=adb-RXXXW20LMKJY-eh5zBj]`<br>
- Gib im Terminal ein: <br>`adb devices`.<br> Es sollte ungefähr das erscheinen:<br> `List of devices attached`<br> `10.10.1.125:36299  offline`<br> `adb-RFAW20LMKJY-eh5zBj._adb-tls-connect._tcp   device`<br>

- Gehe jetzt auf Deinem Computer in den Ordner, der die Wear-APKenthält und gib <br> `adb install wear-full.apk` ein, <br>wobei Du wear.apk durch den Namen Deiner APK-Datei ersetzt.
- Es erscheint:<br> `Performing Streamed Install`<br> `Success`


(wear-os-5-troubleshooting)=

### Allgemeine Empfehlungen zur Fehlerbehebung bei Wear OS 5

- WLAN Tethering nicht verwenden. Das wird nicht funktionieren.
- ADB-Debugging muss nicht auf dem Smartphone aktiviert werden (nur auf der Smartwatch). Deaktiviere das ADB Debugging auf dem Smartphone.
- Achte darauf, dass Du Dich mit Deinem lokalen Netzwerk verbindest, in dem sich das Smartphone und die Smartwatch gegenseitig „sehen“ können (verwende nicht Dein WLAN-Gästenetzwerk).
- Achte darauf, dass sowohl die Smartwatch als auch das Smartphone im gleichen Netzwerk und auf dem gleichen WLAN-Gerät sind. Insbesondere WLAN-Repeater oder Access Points können Probleme verursachen.
- Achte darauf, dass Du in der Nähe des Haupt-Routers bist, und starte dann Smartphone und Smartwatch neu.

**Koppeln:**

- Smartwatch: Drahtloses Debugging: Notiere die IP-Adresse.
- Wear Installer: Gib die IP in der Wear Installer App ein.
- Tippe auf „Pair new“ und notiere den Pairing Code und die Port-Nummer, die angezeigt werden.
- Wear Installer: enter the pairing code + space + port number.
- Der Wear Installer sollte „pairing successful“ zurückmelden. Falls nicht, schließe den Wear Installer und versuche es erneut.

Sobald Du gekoppelt bist, solltest Du die AAPS Wear-APK installieren können:

- Beende/schließe den Wear Installer und starte ihn dann neu.
- Bei drahtlosem Debugging notiere die IP und Port-Nummer und überprüfe bzw. gib die IP und die Port-Nummer im Wear Installer ein.
- Hinweis: Die Port-Nummer ist eine andere, als die die Du zum Koppeln genutzt hast!

## Die Verbindung zwischen der Smartwatch und Smartphone aus **AAPS** heraus einrichten

Der letzte Schritt ist es, **AAPS** auf dem Smartphone so einzurichten, so dass es mit **Wear.apk** auf der Smartwatch interagiert. To do this, enable the Wear plugin:

* Gehe zur **AAPS**-App auf dem Smartphone

* Open the **menu** (☰) in the top-left corner and go to **Configuration** > **Communication**

* Tick the **Wear** box

![Configuration > Communication with Wear enabled](../images/v4/Configuration/configuration_communication_wear.png)

To bolus or take other actions from the watch, also turn on **Wear control** in [Settings > Wear](#preferences-wear).

Um zu einem anderen **AAPS**-Zifferblatt zu wechseln, drücke lange auf den Startbildschirm der Smartwatch und es wird die Option Anpassen“ erscheinen. Wische dann nach rechts, bis Du die **AAPS**-Zifferblätter erreicht hast.

Wenn das Sideloading der **AAPS** Wear.apk auf die Smartwatch erfolgreich war, sieht es ungefähr so aus:


![Wear plugin showing the connected Galaxy Watch, and the AAPS app on the watch](../images/wearos/wear_apk_installed.png)


For certain smart watches, like the Samsung Galaxy, 'Remote Connection' under Samsung Galaxy's Advanced Features must be switched **on** to use **Wear.apk** & **AAPS** remotely via Wi-Fi.

![Galaxy Wearable, Advanced features, Remote connection switched on](../images/wearos/galaxy_wearable_remote_connection.png)

(wear-os-watch-phone-communication)=

### Verbindungsprobleme zwischen **AAPS** Smartwatch und **AAPS** Smartphone beheben

1.  Wenn Easy Fire Tools sich nicht verbindet oder Du die Meldung "authorisation failed" erhälst > Überprüfe, ob die IP-Adresse korrekt eingegeben wurde.
2.  Überprüfe, ob die Smartwatch mit dem Internet (und nicht nur über Bluetooth mit dem Smartphone) verbunden ist.
3.  Überprüfe, ob das **AAPS** Smartphone und die Smartwatch in der Samsung App miteinander gekoppelt bzw. verbunden sind.
4.  Es kann auch helfen, einen harten Neustart von Smartphone und Smartwatch durchzuführen (d. h. Smartphone aus- und wieder einschalten)
5.  Assuming you have managed to download the Wear.apk onto your phone but you are not receiving any BG data, _check_ that you have side-loaded the correct **AAPS** Wear apk onto the watch: the watch app of a browser build is the `aaps-wear-….apk` file, see [Building the Wear app](../WearOS/BuildingAapsWearOS.md). If the file you installed is any of the following: a) an **AAPSClient** Wear apk (while the phone runs **AAPS**); b) a `.aab` file; or c) a file with the word ‘debug’ in its name, you have not selected the correct Wear OS apk during the build.
6.  Überprüfe, dass Dein Router die Geräte nicht voneinander isoliert (IP Isolation).

Weitere Tipps zur Fehlerbehebung findest Du [hier](https://freepoc.org/wear-installer-help-page/#:~:text=If%20you%20are%20having%20problems,your%20phone%20and%20your%20watch.)

(WearOS_changing-to-AAPS-watchface)=

## Wechsel zu einem AAPS-Zifferblatt auf Deiner WearOS-Smartwatch

In der Basisversion der AAPS Wear OS APK sind schon eine Vielzahl von Zifferblättern enthalten. Nach der Installation der AAPS Wear APK, kannst Du diese nutzen. Die einzelnen Schritte zur Auswahl eines Zifferblattes sind:

1. Durch langes Drücken auf das aktuelle Zifferblatt öffnest Du die Zifferblatt-Auswahl auf Deiner Smartwatch (sofern es eine WearOS-Uhr ist).

![Watchface selector with the Add watch face button](../images/wearos/watchface_add.png)

2. Scroll through the list until you find "AAPS (Custom)" (depending on the watch, the watch faces of installed apps are listed under a "Downloaded" section or grouped by app) and click the middle of the image to add it to your shortlist of current watchfaces. Keine Angst, das Aussehen des „AAPS (Custom)“-Zifferblattes kannst Du im nächsten Schritt noch anpassen.

![List of AAPS watchfaces, with AAPS (Custom)](../images/wearos/watchface_list_aaps.png)

3. Now open AAPS on your phone and open the Wear plugin: **Configuration** > **Communication** > **Wear** > **Open plugin** (tick **Wear** first if it is not enabled).

![Wear plugin with the Custom Watchface card](../images/wearos/wear_plugin_custom_watchface.png)

4. Klicke auf „Watchface laden“ und wähle das gewünschte Zifferblatt aus.

![Select Custom Watchface list](../images/wearos/select_custom_watchface.png)

5. Das „AAPS (Custom)“-Zifferblatt sollte im ausgewählten Design auf Deiner Smartwatch angezeigt werden. Das Laden kann einige Sekunden dauern. The **Wear** screen on the phone now shows the name of the loaded watchface and a preview of it. **Infos Watchface** lists its details and the fields it contains, and **More watchfaces** opens the [exchange site](../ExchangeSiteCustomWatchfaces/index.md) where you can download other custom watchfaces. Du kannst jetzt die „Complications“ anpassen, in dem Du lange auf das Zifferblatt drückst und dann auf „Anpassen“ tippst.

```{admonition} Complications on a custom watchface
:class: note
Custom watchfaces made with version 3.0 or newer of the custom watchface format can contain up to five complication slots, with their position and size defined by the watchface (**Complication layout**). On the watch, long-press the watchface, tap **Customize** and tap **Complication 1** to **Complication 5** to choose the data source shown in each slot. The same rows are listed in the watch's AAPS app under **Settings** > **AAPS(Custom)**; tapping one there opens the same picker. **Complication type priority** decides whether a slot prefers a value or gauge, text, or an icon when the data source offers several. A changed priority only applies the next time you pick a data source for that slot.

These slots only work on watches running **Wear OS 5 or older**, where the custom watchface runs as a real watchface. On **Wear OS 6 and newer**, the custom watchface is shown as a picture without its complication slots, and steps 1 and 2 above are not needed: make sure **Custom watchface** is selected under **Watchface installed on watch** in the phone's **Wear** plugin (see [the watchface AAPS installs](#wearos-aaps-v4-watchface)).
```

## AAPSv2 Watchface - Legende

![Legende AAPSv2 Watchface](../images/Watchface_Legend.png)

A - Zeit seit der letzten Loop-Aktion

B - CGM Wert

C - Minuten seit dem letzten CGM-Wert

D - change compared to last CGM reading (in mmol or mg/dL)

E - Durchschnittliche Änderung der CGM-Werte in den letzten 15 Minuten

F - Batteriestatus des Smartphones

G - Basalrate (Anzeige in IE/Std. bei Standard-BR und in % während einer TBR)

H - BGI (blood glucose interaction; dt. Blutzuckerwirkung) -> erwartete Glukosewert-Änderung nur auf Basis des aktiven Insulins.

I - Kohlenhydrate (carbs on board | e-carbs in der Zukunft)

J - Insulin on board (aus Boli | aus Basal)
