# Übersicht der Komponenten

**AAPS** is not just a (self-built) application; it is one of several modules of your closed loop system. Before deciding on components, it is a good idea to look at the component documentation.

![Übersicht der Komponenten](../images/modules.png)

```{admonition} IMPORTANT SAFETY NOTICE
:class: important

Die Grundlage der **AAPS** Sicherheitsfunktionen, die in dieser Dokumentation diskutiert werden, basiert auf den Sicherheitsmerkmalen der Hardware, die zum Erstellen Deines Systems verwendet wird. Um einen Loop zur automatisierten Insulinabgabe schließen zu können, ist es extrem wichtig nur getestete, voll funktionsfähige und von den offiziellen Behörden Deines Landes freigegebene Insulinpumpen und Sensoren (CGM) zu nutzen. Veränderungen an Hard- oder Software dieser Komponenten können zu unerwarteter Insulinabgabe und damit zu erheblichen Risiken für den Anwender führen. **Verwende keine** defekten, modifizierten oder selbstgebauten Insulinpumpen oder CGM-Empfänger, zum Erestellen eines **AAPS**-Systems.

Außerdem ist es ebenso wichtig, nur Originalzubehör zu verwenden. Setzhilfen, Kanülen und Reservoire müssen vom Hersteller für den Einsatz mit deiner Pumpe bzw. deinem CGM zugelassen sein. Die Verwendung von nicht geprüftem oder modifiziertem Zubehör kann zu Ungenauigkeiten des CGM-Systems und Insulinabgabefehlern führen. Insulin ist sehr gefährlich, wenn es falsch dosiert wird. Spiele nicht mit deinem Leben, indem du ungeprüftes oder modifiziertes Zubehör verwendest.

Nicht zuletzt darfst Du keine SGLT-2-Hemmer (Gliflozins) einnehmen, da sie den Blutzuckerspiegel unberechenbar senken. Die Kombination mit einem Closed Loop System, das die basalen Raten senkt, um den BZ zu erhöhen ist besonders gefährlich, da durch die Gliflozin dieser BZ-Anstieg verhindert wird und ein gefährlicher Zustand durch Insulinmangel auftreten kann. [Weitere Informationen gibt es hier](#PreparingForAaps-no-sglt-2-inhibitors).
```

## Erforderliche Komponenten

### Gute individuelle Profileinstellungen für Deine Diabetes-Therapie

Even though this is not something to create or buy, it is probably the most underestimated 'module' — but it is essential. When you let an algorithm help manage your diabetes, it needs to know the right settings so it does not make severe mistakes. Auch wenn Dir andere Module noch fehlen, kannst Du Dein bestehendes **Profil** gemeinsam mit Deinem Diabetes-Team prüfen und anpassen.

Das **Profil** enthält:

- BR (Basalrate); liefert das Basalinsulin;
- ISF (Insulin Sensitivity Factor; dt. Korrekturfaktor): Um wie viel Einheiten sinkt Dein Glukosewert durch eine Einheit Insulin;
- CR (carb ratio): how many grams of carbohydrate are covered by one unit of insulin.

Die meisten Looper verwenden eine sogenannte zirkadiane Basalrate, Korrektur- und KH-Faktoren die sich an der hormonellen Insulinempfindlichkeit im Tagesverlauf orientieren.

Alongside your **Profile**, you also need to configure your **insulin** in **Manage → Insulin settings**, including its DIA (duration of insulin action) — see [Insulin settings](#Config-Builder-insulin-dia).

More information about your **Profile** [on the dedicated page](../SettingUpAaps/YourAapsProfile.md).

### Smartphone

See the dedicated page [Phones](../Getting-Started/Phones.md).

### Insulinpumpe

See the dedicated page [Compatible Pumps](../Getting-Started/CompatiblePumps.md).

**Advantages and disadvantages of some pump models**

The Combo, the Insight and the older Medtronic are solid pumps, and loopable. The Combo has the advantage of many more infusion set types to choose from as it has a standard Luer-Lock. And the battery is a default one you can buy at any gas station, 24-hour convenience store and if you really need one, you can steal/borrow it from the remote control in the hotel room ;-).

The advantages of the DanaR/RS and Dana-i vs. the Combo as the pump of choice however are:

- Das erste Einrichten der Verbindung zwischen der Dana-i/RS und dem Smartphone ist einfacher. Allerdings ist dieser Schritt normalerweise nur bei der Ersteinrichtung erforderlich.
- Bislang arbeitet die Combo mit screen parsing. Grundsätzlich funktioniert das gut, aber es ist leider langsam. Beim Loopen ist das nicht so schlimm, denn das läuft alles im Hintergrund ab. Das führt aber dazu, dass eine bestehende Bluetooth-Verbindung leichter abgebrochen wird. Das kann zu Problemen führen, wenn Du Dich während eines Bolus-Prozesses zu weit vom Smartphone entfernst (z. B. beim Kochen).
- Die Combo virbiert am Ende jeder TBR, die DanaR vibriert (oder piept) bei Abgabe eines SMB. In der Nacht wird der Loop meistens eher TBR setzen statt SMB.  Die Dana-i/RS kann so konfiguriert werden, dass sie weder bei TBR, noch bei SMB vibriert oder piept.
- Die History kann auf der Dana-i/RS in wenigen Sekunden mit COB ausgelesen werden. Deshalb können die Smartphones offline leicht getauscht werden. Sobald einige CGM-Daten verfügbar sind, kann das Loopen fortgesetzt werden.
- Alle Pumpen, die **AAPS** unterstützt, sind (zumindest bei Auslieferung) wasserdicht. Nur die DanaR/Rs garantiert auch während der Nutzung Wasserdichtigkeit durch das abgedichtete Batteriefach und das Reservoir-System.

### BZ-Quelle

See the dedicated page [Compatible CGMs](../Getting-Started/CompatiblesCgms.md).

### **AAPS**.apk-Datei

The main component of the system. In order to install the app, you have to build the apk-file yourself first. Instructions are [here](../SettingUpAaps/BuildingAaps.md).

### Server für Berichte und Auswertungen

A reporting server displays your glucose and treatment data, and creates reports for detailed analysis. There are currently two reporting servers available for use with AAPS: [Nightscout](#SettingUpTheReportingServer-nightscout) and [Tidepool](#SettingUpTheReportingServer-tidepool). They both provide ways to visualize your diabetes data over time, provide statistics about the **time in range** (TIR) and other measures.

The Reporting server is independent of the other modules. If you don’t want to use a reporting server, you should know that it is not mandatory for running **AAPS** in the long term. But you still need to set one up, as it is required to fulfill [**Objective 1**](#objectives-objective1).

Additional information on how to set up your reporting server can be found [here](../SettingUpAaps/SettingUpTheReportingServer.md).

## Optionale Komponenten

### Smartwatch

You can choose any smartwatch running **Wear OS 3** or newer. See [Watches](../Getting-Started/Watches.md) for details.

Users are creating a [list of tested phones and watches](#Phones-list-of-tested-phones). There are different watchfaces for use with **AAPS**, which you can find [here](../WearOS/WearOsSmartwatch.md).

### xDrip+

Even if you don't need the xDrip app as your **BG Source**, you can still use it, for example for alarms or a different blood glucose display. You can have as many alarms as you want, specify the time when an alarm should be active, choose whether it can override silent mode, etc. Some xDrip information can be found [here](../CompatibleCgms/xDrip.md). Please be aware that the documentation for this app is not always up to date, as it changes quickly.

## Wartezeit überbrücken

It sometimes takes a while to get all the modules for closing the loop. But no worries, there are a lot of things you can do while waiting. It is **necessary** to check and (where appropriate) adapt basal rates (BR), insulin-carbratio (IC), insulin-sensitivity-factors (ISF) etc. And maybe open loop can be a good way to test the system and get familiar with **AAPS**. Using this mode, **AAPS** gives treatment recommendations you can manually execute.

You can keep on reading through the docs here, get in touch with other loopers online or offline, [read](../UsefulLinks/BackgroundReading.md) documentations or what other loopers write (even if you have to be careful, not everything is correct or good for you to reproduce).

**Done?** If you have your **AAPS** components all together (congrats!) or at least enough to start in open loop mode, you should first read through the [Objective description](../SettingUpAaps/CompletingTheObjectives.md) before each new Objective, and set up your hardware.
