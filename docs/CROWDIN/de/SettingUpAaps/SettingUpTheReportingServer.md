# Einen Server für Berichte einrichten

Derzeit können zwei Berichtsserver mit **AAPS** genutzt werden:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Berichtsserver](../images/Building-the-App/ReportingServer.png)

Wir empfehlen Nightscout zu nutzen.

(SettingUpTheReportingServer-nightscout)=
## Nightscout

Nightscout ist eine Web-Anwendung, die Deine CGM-Daten und **AAPS**-Daten protokolliert, anzeigen und daraus Berichte erstellt. Es ist eine leistungsstarke Plattform, die seit vielen Jahren in **AAPS** integriert ist. It enables users and caregivers to track the patient's diabetes data in near real-time (only a few seconds may pass between data reception and data provision if there is a sufficient Internet connection between all components involved). Es ermöglicht auch Betreuenden, Befehle remote an **AAPS** zu senden.

Nightscout steht als Open-Source-Software zur Verfügung. Jeder kann einen Nightscout-Server erstellen und betreiben, entweder kostenlos oder als kostenpflichtiger Dienst.

Mehr Informationen hierzu findest Du auf der [Website des Nightscout-Projekts](http://nightscout.github.io/).

### Option 1 - Set up your Nightscout server yourself

Das Einrichten Deines Nightscout-Berichtsservers kann eine oder mehrere webbasierte Anwendungen erfordern, die gepflegt werden wollen. Um einen vollständig kostenlosen Service zu haben, musst Du im Fall, dass ein Anbieter seinen Service nicht mehr kostenfrei anbietet, Deine Nightscout-Website und Deine Daten umziehen (migrieren).

Eine Beschreibung, wie Du Nightscout erstellen kannst, welche Vor- und Nachteile die verschiedenen Pflege- und Betriebsoptionen (und die damit verbundenen Kosten) haben, findest Du [hier](https://nightscout.github.io/nightscout/new_user/#free-diy).

### Option 2 - Nutze einen gehosteten Nightscout-Bezahldienst

Es gibt auch Optionen von verschiedenen Dienstleistern, die Nightscout für eine monatliche Gebühr für Dich hosten. Die Kosten sind überschaubar, und der Vorteil einer gehosteten Option besteht darin, dass Du ohne IT-Kenntnisse auskommst und auch keine eigene technische Infrastruktur haben musst.


Von Zeit zu Zeit schauen sich bestehende Nightscout-Nutzende an, wie und wo ihr Nightscout-Server gehostet wird und steigen auf andere Optionen um, wenn diese für sie besser passen.

Einige der gehosteten Services für Nightscout („Bezahldienste“) sind [hier](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table) gelistet.

### Further configuration of Nightscout

Sobald Du Deine Nightscout-Seite installiert und lauffähig hast, gehe zur [Nightscout-Konfigurationsseite](../SettingUpAaps/Nightscout.md), um weitere Einstellmöglichkeiten kennenzulernen.

(SettingUpTheReportingServer-tidepool)=
## Tidepool

Tidepool has been available in **AAPS** since version 3.2 which was released in late 2023.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger  
Tidepool ist nicht für das Teilen von **AAPS**-Echtzeit-Informationen mit Betreuenden geeignet, da es zwischen dem Dateneingang und der Datenverfügbarkeit eine Verzögerung von drei Stunden gibt.  
Auf der anderen Seite kann Tidepool eine großartige Lösung sein, wenn Berichte mit dem Diabetes-Team geteilt werden sollen, und Nightscout dort keine akzeptierte Lösung ist.  
```

Tidepool ist ein [Open-Source](https://github.com/tidepool-org)-Projekt. Es bietet die kostenlose Nutzung eines Accounts auf den Tidepool-Servern.

Weitere Informationen, um Tidepool mit AAPS einzurichten, findest Du [hier](../SettingUpAaps/Tidepool.md).

```{admonition} **AAPS** has a the uploader for Tidepool integrated
:class: note
Du brauchst die Tidepool Uploadedr App ** nicht nutzen: **AAPS** lädt die Glukosewerte, die Behandlungs- und die Basalinformationen für Dich hoch. Du brauchst nur ein eigenes Tidepool-Konto. Lade Deine Daten nicht mit Tidepools separaten Upload-Tool hoch, da dies zu doppelten Werten führen wird.  
```

## Next step

Sobald Du Deinen Berichtsserver eingerichtet hast, kannst Du jetzt entweder ein [dediziertes Google-Konto für die AAPS-Nutzung](../UsefulLinks/DedicatedGoogleAccountForAaps.md)einrichten, oder direkt zum Abschnitt [AAPS erstellen](../SettingUpAaps/BuildingAaps.md) weiter gehen. 