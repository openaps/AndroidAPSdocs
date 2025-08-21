- - -
orphan: true
- - -

# Auf AAPS 3.2.0.4 aktualisieren

(update-aaps-3204)=

## Kein Download möglich - APK muss selbst erstellt werden

**Die AAPS-App (eine apk-Datei) ist aufgrund der Vorschriften rund um medizinische Geräte nicht zum Download verfügbar. Es ist zulässig, die App für den eigenen Gebrauch zu erstellen, aber du darfst keine Kopie an andere weitergeben!**

Zu den Details schaue bitte auf die [FAQ-Seite](../UsefulLinks/FAQ.md).

## Computer- und Software-Anforderungen für das Erstellen der AAPS-Version 3.2.0.4

* Um die APK zu erstellen ist möglicherweise eine bestimmte **[Android Studio](https://developer.android.com/studio/)**-Version erforderlich.

| AAPS-Version            | Empfohlene <br/>Android Studio<br/> Version | Alternative <br/>Android Studio<br/> Version | Gradle | JVM |
| ----------------------- | ------------------------------------------------------- | -------------------------------------------------------- | ------ |:--- |
| [3.2.0.4](#version3200) | Hedgehog (2023.1.1)                                     | bis zu Meerkat                                           | 8.2    | 17  |

Die „empfohlene Version“ enthält im Paket bereits die entsprechende JVM-Version. Die empfohlene Version ist gleichzeitig auch die Mindestversion, die Du zum Erstellen von **AAPS** nutzen kannst. Mit einer älteren Version als der, die unter „empfohlen“ aufgeführt ist, wirst Du **NICHT** in der Lage sein, AAPS zu erstellen. Solltest Du eine andere Version verwenden, kann es aufgrund der JVM-Version zu Problemen kommen. Schaue auf den Seiten zur [Fehlerbehebung für Android Studio](#troubleshooting_androidstudio-uncommitted-changes) nach, um diese Probleme zu lösen. Wenn Deine aktuelle Android Studio Version nicht in der Tabelle aufgeführt ist, musst Du sie zuerst aktualisieren.

Die Gradle-Version ist mit dem Quellcode verknüpft. Wenn Du den Quellcode herunterlädst oder aktualisierst, bekommst Du automatisch die richtige Gradle-Version. Das wird hier rein zu Deiner Information erwähnt. Du brauchst nichts machen.

* Android Studio unterstützt keine [Windows 32-Bit-Systeme](#troubleshooting_androidstudio-unable-to-start-daemon-process). Bitte beachte, dass sowohl eine **64-Bit-CPU als auch ein 64-Bit-Betriebssystem zwingend erforderlich sind**. Wenn Dein System diese Bedingung nicht erfüllt, musst Du die entsprechende Hardware, Software oder das ganze System ersetzen.

<table class="tg">
<tbody>
  <tr>
    <th class="tg-baqh">Betriebssystem (nur 64 Bit)</th>
    <td class="tg-baqh">Windows 8 oder höher</td>
    <td class="tg-baqh">Mac OS 10.14 oder höher</td>
    <td class="tg-baqh">Jedes Linux unterstützt Gnome, KDE oder Unity DE;&nbsp;&nbsp;GNU C Library 2.31 oder höher</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">CPU (nur 64 Bit)</th>
    <td class="tg-baqh">x86_64-CPU-Architektur Intel Core der 2. Generation oder neuer oder AMD-CPU mit Unterstützung für <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-windows" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Windows Hypervisor-Framework</span></a></td>
    <td class="tg-baqh">ARM-basierte Chips oder Intel Core der 2. Generation oder neuer mit Unterstützung für <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-mac" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Hypervisor-Framework</span></a></td>
    <td class="tg-baqh">x86_64 CPU Architektur; Intel Core der zweiten Generation oder neuer, alternativ AMD Prozessor mit Unterstützung für AMD Virtualization (AMD-V) und SSSE3</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">RAM</th>
    <td class="tg-baqh" colspan="3"><p align="center">8GB oder mehr</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Festplatte</th>
    <td class="tg-baqh" colspan="3"><p align="center">Mind. 30 GB freier Speicherplatz. SSD wird empfohlen.</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Bildschirmauflösung</th>
    <td class="tg-baqh" colspan="3"><p align="center">min. 1280 x 800<br></td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Internet</th>
    <td class="tg-baqh" colspan="3"><p align="center">Breitband</td>
  </tr>
</tbody>
</table>

**Es wird dringend empfohlen eine SSD (Solid State Disk) anstelle einer HDD (Hard Disk Drive) zu verwenden, da damit weniger Zeit benötigt wird, um die AAPS-apk-Datei zu erstellen**. Es ist aber auch möglich eine Festplatte (HDD) zum Erstellen der **AAPS**-apk-Datei zu nutzen. Wenn du dies tust, kann es lange dauern, bis der Bau der App abgeschlossen ist, aber sobald er begonnen hat, kann man ihn unbeaufsichtigt lassen.

## Hilfestellung des 3.2.0.4 Erstellprozesses

Solltest Du Probleme beim Erstellen der **AAPS**-App haben, kannst Du im Abschnitt [**Fehlerbehebung für Android Studio**](https://androidaps.readthedocs.io/en/3.2/GettingHelp/TroubleshootingAndroidStudio.html) einiges an Hilfestellung finden.

Wenn Du den Eindruck hast, dass in der Anleitung Schritte falsch, fehlend oder missverständlich sind, oder Du trotzdem noch Probleme hast, wende Dich über [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) oder [Discord](https://discord.gg/4fQUWHZ4Mw) an andere **AAPS**-Nutzende. Wenn Du selbst etwas ändern möchtest (z.B. Screenshots aktualisieren _etc_), erstelle einen entsprechenden [Pull-Request (PR)](../SupportingAaps/HowToEditTheDocs.md).

```{note}
Diese Seite zeigt einige Screenshots der verschiedenen Benutzeroberflächen (**New** und **Classic**), die Android Studio anbietet.
```

## Übersicht zur Aktualisierung von 3.2.0.x auf 3.2.0.4

```{contents} Steps for updating to 3.2.0.4
:depth: 1
:local: true
```

### Exportiere Deine aktuellen Einstellungen

Exportiere die Einstellungen Deiner aktuellen **AAPS**-Version Deines Smartphones. Vielleicht brauchst Du sie nicht, aber sicher ist sicher.

Wenn Du nicht mehr genau weißt, wie man das macht, schaue auf der Seite [Export & Import der Einstellungen](ExportImportSettings.md) nach.

### Aktualisiere Deine lokale AAPS-Kopie

* Öffne Dein bestehendes AAPS-Projekt mit Android Studio. Möglicherweise musst Du Dein Projekt wählen. Klicke (doppelt) auf das AAPS-Projekt.

![Android Studio - Projekt auswählen](../images/update/01_ProjectSelection.png)

<br>

![Android Studio - Projekt auswählen](https://androidaps.readthedocs.io/en/3.1/_images/01_ProjectSelection.png)

* Wähle in der Menüleiste des Android Studios Git -> Fetch

![Android Studio Menü - Git - Fetch](../images/update/02_GitFetch.png)

<br>

![Android Studio Menü - Git - Fetch](https://androidaps.readthedocs.io/en/3.1/_images/02_GitFetch.png)

* Unten rechts wird Dir eine Meldung angezeigt, sobald der Fetch erfolgreich durchgeführt wurde.

![Android Studio Menü - Git - Fetch erfolgreich](../images/update/03_GitFetchSuccessful.png)

<br>

![Android Studio Menü - Git - Fetch erfolgreich](https://androidaps.readthedocs.io/en/3.1/_images/03_GitFetchSuccessful.png)

* Wähle nun in der Menüleiste Git -> Pull

![Android Studio Menü - Git - Pull](../images/update/04_GitPull.png)

<br>

![Android Studio Menü - Git - Pull](https://androidaps.readthedocs.io/en/3.1/_images/04_GitPull.png)

* Lasse alle Optionen wie sie sind (Original/Master) und wähle Pull.

![Android Studio - Git - Pull-Dialog](../images/update/05_GitPullOptions.png)

<br>

![Android Studio - Git - Pull-Dialog](https://androidaps.readthedocs.io/en/3.1/_images/05_GitPullOptions.png)

* Warte ab, während der Download läuft. Du siehst dazu einen Hinweis in der Fußzeile. Eine Erfolgsmeldung wird angezeigt, so bald erfolgreich heruntergeladen wurde.

  ```{note}
  Die Anzahl der aktualisierten Dateien kann unterschiedlich sein! Dies ist kein Hinweis auf einen Download-Fehler.
  ```


![Android Studio - Pull erfolgreich](../images/update/06_GitPullSuccess.png)

<br>

![Android Studio - Pull erfolgreich](https://androidaps.readthedocs.io/en/3.1/_images/06_GitPullSuccess.png)

* Gradle Sync wird ausgeführt, um einige Abhängigkeiten herunterzuladen. Warte, bis es fertig ist.

![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

<br>

![Android Studio - Gradle Sync](https://androidaps.readthedocs.io/en/3.1/_images/40_BackgroundTasks.png)

### Wähle JVM Version 17 aus

- Öffne die Gradle-Ansicht, in dem Du auf der rechten Seite im Android Studio auf den Elefanten (1) klickst, und öffne dann die Einstellungen (2) und wähle dort die **Gradle Settings** (3) aus:

![Open Gradle Settings](../images/studioTroubleshooting/161_GradleSettings.png)

<br>

![Open Gradle Settings](../images/studioTroubleshooting/09_GradleSettings.png)

- Prüfe im **Gradle JDK**-Feld, ob die richtige Version: **jbr-17** ausgewählt ist (1). Wenn nicht, klicke auf das Feld und schaue, ob es schon in der Liste zu sehen ist.

![Select Download JDK](../images/studioTroubleshooting/162_DownloadJDK.png)



- Wähle als Version (1), **17** aus. Unter Vendor (2) wähle JetBrains Runtime oder einen beliebigen Vendor. Location (3): Ändere nichts.

![Select JDK 17](https://androidaps.readthedocs.io/en/3.2/_images/163_JDKSelection.png)

- Schließe die **Settings** (dt. Einstellungen) mit **OK**.

### Wähle den AAPS 3.2.0.4 Branch

- Wähle unten links das Git-Symbol, klicke mit der rechten Maustaste auf 3.2.0.4 und dann auf Checkout.

![Select Download JDK](../images/studioTroubleshooting/17_Checkout.png)

<br>

![Select Download JDK](../images/studioTroubleshooting/17_CheckoutOld.png)

### Synchronisiere das Projekt mit Gradle

```{admonition} WARNING!
:class: warning
**Aktualisiere niemals Gradle.** Synchronisiere es nur mit dem Projekt.
```

Nutze das Elefanten-Symbol und synchronisiere das Projekt mit den Gradle-Dateien (oder folge [dieser Anleitung](#gradle-resync)) für die neue Benutzeroberfläche (UI).

![Sync Project with Gradle Files](../images/studioTroubleshooting/06_GradleResyncElephant.png)

Oder ([dieser Anleitung](https://androidaps.readthedocs.io/en/3.2/GettingHelp/TroubleshootingAndroidStudio.html#gradle-resync)) für die klassische Benutzeroberfläche.

![Sync Project with Gradle Files](../images/studioTroubleshooting/06_GradleResyncElephantOld.png)

### Erstelle die eine signierte 3.2.0.4 APK

Dein Quellcode entspricht jetzt der zuletzt freigegebenen Version und alle Voraussetzungen sind geprüft. Es ist an der Zeit, die signierte APK wie im Abschnitt[Signierte AAPS APK erstellen](#Building-APK-generate-signed-apk) beschrieben zu erstellen (bauen).

### Übertrage und installiere die 3.2.0.4 APK

Du musst die APK-Datei auf Dein Smartphone übertragen, um sie dort installieren zu können.

```{note}
Wenn Du beim Erstellen Deinen bestehenden „Keystore“ im Android Studio genutzt hast, musst Du die bestehende App nicht deinstallieren. Um die APK zu installieren, folge den Anweisungen während des Updatevorgangs.
In allen anderen Fällen (z.B. wenn ein neuer 'key store' für das Signieren der APK genutzt wurde), muss die alte App gelöscht werden, bevor die neue Version installiert werden kann. **Achte darauf, Deine Einstellungen zu exportieren!**
```

Nutze die Anleitung [AAPS auf Dein Smartphone übertragen und installieren](../SettingUpAaps/TransferringAndInstallingAaps.md)

### Überprüfe die AAPS Version 3.2.0.4 auf Deinem Smartphone

Nachdem Du die neue APK-Datei installiert hast, kannst Du auf dem Smartphone die Version prüfen. Gehe dazu oben rechts auf die drei Punkte und wähle dann "Über". Du solltest die aktuelle Version angezeigt bekommen.

