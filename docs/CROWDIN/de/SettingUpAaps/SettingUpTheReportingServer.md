# Einen Server für Berichte einrichten

There are currently two reporting servers available for use with **AAPS**:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Reporting Servers](../images/Building-the-App/ReportingServer.png)

Wir empfehlen Nightscout zu nutzen.

(SettingUpTheReportingServer-nightscout)=
## Nightscout

Nightscout is a web application that can log and display your CGM data and **AAPS** data and creates reports. It is a powerful platform which has been integrated into **AAPS** for many years. It enables users and caregivers to track the patient's diabetes data in near real-time (only a few seconds may pass between data reception and data provision if there is a sufficient Internet connection between all components involved). It also allows caregivers to send remote commands to **AAPS**.

Nightscout steht als Open-Source-Software zur Verfügung. Jeder kann einen Nightscout-Server erstellen und betreiben, entweder kostenlos oder als kostenpflichtiger Dienst.

You can find more information on the [website of the Nightscout project](http://nightscout.github.io/).

### Option 1 - Set up your Nightscout server yourself

Das Einrichten Deines Nightscout-Berichtsservers kann eine oder mehrere webbasierte Anwendungen erfordern, die gepflegt werden wollen. Um einen vollständig kostenlosen Service zu haben, musst Du im Fall, dass ein Anbieter seinen Service nicht mehr kostenfrei anbietet, Deine Nightscout-Website und Deine Daten umziehen (migrieren).

A description of how you can set up Nightscout with the advantages and disadvantages of the various operating options, including an estimate of the costs, can be found [here](https://nightscout.github.io/nightscout/new_user/#free-diy).

### Option 2 - Nutze einen gehosteten Nightscout-Bezahldienst

Es gibt auch Optionen von verschiedenen Dienstleistern, die Nightscout für eine monatliche Gebühr für Dich hosten. Die Kosten sind überschaubar, und der Vorteil einer gehosteten Option besteht darin, dass Du ohne IT-Kenntnisse auskommst und auch keine eigene technische Infrastruktur haben musst.


Von Zeit zu Zeit schauen sich bestehende Nightscout-Nutzende an, wie und wo ihr Nightscout-Server gehostet wird und steigen auf andere Optionen um, wenn diese für sie besser passen.

Some Nightscout hosted services are listed [here](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

### Further configuration of Nightscout

Once you have your Nightscout instance up and running, see [Nightscout configuration page](../SettingUpAaps/Nightscout.md) for additional considerations.

(SettingUpTheReportingServer-tidepool)=
## Tidepool

Tidepool has only been available in **AAPS** since version 3.2 which was released in late 2023.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger  
As there is a delay of three hours between data income and data reporting when using **AAPS**, Tidepool it is not suitable for sharing real-time information with caregivers.  
On the other hand, Tidepool can be a great solution for sharing reports with a patient's endocrinologist if Nightscout is not an accepted solution.  
```

Tidepool is an [open source](https://github.com/tidepool-org) project. Es bietet die kostenlose Nutzung eines Accounts auf den Tidepool-Servern.

More information about setting up Tidepool with AAPS [here](../SettingUpAaps/Tidepool.md).

```{admonition} **AAPS** has a the uploader for Tidepool integrated
:class: note
You do **not** need to use the uploader app to Tidepool: **AAPS** will upload blood glucose, treatments and basal for you. You only need a personal account with Tidepool. Do not upload your data with the separate Tidepool uploader tool as it will lead to duplicate values.  
```

## Next step

Once you have set up your reporting server, you can now either set up a [dedicated Google account for AAPS use](../UsefulLinks/DedicatedGoogleAccountForAaps.md), or go straight to [building the AAPS app](../SettingUpAaps/BuildingAaps.md). 