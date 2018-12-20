# Für Klinikpersonal - Eine allgemeine Einführung und Anleitung zu AndroidAPS

Diese Seite richtet sich an Klinikpersonal, das Interesse an der Open-Source-Technologie der künstlichen Bauchspeicheldrüse wie AndroidAPS haben und an Patienten, die diese Informationen mit ihren Ärzten und Diabetesberatern teilen möchten.

Dieser Leitfaden enthält einige wichtige Informationen über DIY Closed Looping und speziell über die Funktionsweise von AndroidAPS. Für weitere Details zu all diesen Themen lesen Sie bitte die ausführliche AndroidAPS-Dokumentation online<0>. Bei Fragen wenden Sie sich bitte an Ihren Patienten bezüglich weiterer Details oder zögern Sie nicht, die Community zu kontaktieren. (Wenn Sie nicht auf Social Media (z.B. Twitter<0> oder Facebook) sind, können Sie gerne eine E-Mail an developers@AndroidAPS.org senden.) [Einige der neuesten Studien und ergebnisbezogenen Daten finden Sie unter diesem Link](https://openaps.org/outcomes/).</p> 

### Die Schritte zum Aufbau eines DIY Closed Loop

Um AndroidAPS nutzen zu können, müssen die folgenden Schritte unternommen werden:

* Organisieren Sie sich eine [kompatible Insulinpumpe](https://androidaps.readthedocs.io/en/latest/EN/Getting-Started/Pump-Choices.html), ein [kompatibles Android-Gerät](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing) und eine [kompatible CGM Quelle](https://androidaps.readthedocs.io/en/latest/EN/index.html#getting-started-with-androidaps).
* [AndroidAPS Quellcode herunterladen und die Software "erstellen"](https://androidaps.readthedocs.io/en/latest/EN/Installing-AndroidAPS/Building-APK.html).
* [Konfigurieren Sie die Software so, dass sie mit Ihren Diabetes-Geräten kommuniziert, richten Sie sie ein und nehmen Sie Sicherheitseinstellungen vor](https://androidaps.readthedocs.io/en/latest/EN/index.html#configuration).

### Wie ein DIY Closed Loop funktioniert

Ohne ein Closed Loop System sammelt der Patient mit Diabetes Daten von seiner Pumpe und seinem CGM, entscheidet, was zu tun ist, und ergreift entsprechende Maßnahmen.

Bei der automatisierten Insulinverabreichung macht das System das Gleiche: Es sammelt Daten von der Pumpe, dem CGM und andere Informationen, die protokolliert werden (z.B. über Nightscout). Diese Informationen verwendet es als Basis seiner Berechnungen und entscheidet, wie viel mehr oder weniger Insulin benötigt wird (über oder unter der zugrunde liegenden Basalrate). Mittels temporärer Basalraten werden die notwendigen Anpassungen vorgenommen, um den BZ stabil zu halten oder in den Zielbereich zu bringen.

Wenn das Gerät, auf dem AndroidAPS läuft, kaputt geht oder die Bluetooth-Verbindung zur Pumpe verliert, fällt die Insulinpumpe nach dem Ende der letzten temporären Basalrate wieder auf das Standardprogramm zurück, bei dem die vorprogrammierte Basalrate läuft.

### Wie Daten gesammelt werden

Mit AndroidAPS führt ein Android-Gerät eine spezielle App aus, um die Berechnungen durchzuführen. Das Gerät kommuniziert über Bluetooth mit einer unterstützten Pumpe. AndroidAPS kann mit anderen Geräten und der Cloud über WLAN oder mobile Datenverbindungen kommunizieren, um zusätzliche Informationen zu sammeln. Über diesen Weg können Patienten, Pflegepersonal und Angehörige auch nachverfolgen, was und warum AndroidAPS etwas tut.

Das Android-Gerät muss:

* mit der Pumpe kommunizieren und den Verlauf auslesen, um zu ermitteln, wie viel Insulin abgegeben wurde
* mit dem CGM kommunizieren (entweder direkt oder über einen Cloud Server), um den BZ-Verlauf zu kennen

Sobald das Gerät die Daten gesammelt hat, analysiert der Algorithmus sieund führt die Entscheidungsfindung auf Basis der Einstellungen (Korrektur- und BE-Faktoren, DIA, Zielwert/-bereich, etc.) durch. Bei Bedarf gibt es dann Kommadnos an die Pumpe, um die Insulinabgabe zu verändern.

Es sammelt zudem alle Informationen über Boli, Kohlenhydrataufnahme und temporäre Änderungen des Zielwerts/-bereichs von der Pumpe oder von Nightscout, um sie in die Berechnung der Insulinabgabe einzubeziehen.

### Woher weiß es, was es zu tun hat?

Die Open-Source-Software wurde entwickelt, um die bisher von Diabetikern händisch durchgeführten Tätigkeiten zu übernehmen und zu berechnen, wie die Insulinzufuhr angepasst werden sollte. Zuerst sammelt das System die Daten aller verbundenen Geräte und aus der Cloud, bereitet sie auf und führt die notwendigen Berechnungen durch. Ausgehend von verschiedenen Szenarien werden die erwarteten BZ-Bereiche der kommenden Stunden vorhergesagt und die notwenigen Anpassungen der Insulingabe berechnet, um den BZ im Zielbereich zu halten oder wieder dorthin zu bringen. Anschließend sendet es notwendigen Anpassungen an die Pumpe. Danach werden die Daten aus der Pumpe ausgelesen und die Berechnungen starten neu.

Es ist wichtig, qualitativ hochwertige CGM-Daten zu haben, da die Werte aus dem CGM die wichtigsten Eingabeparameter sind.

AndroidAPS dokumentiert transparent alle erfassten Eingabedaten, die daraus resultierende Empfehlung und die getroffenen Maßnahmen. Daher kann die Frage, "Warum tut es das?" zu jedem Zeitpunkt mit einem Blick in die Log-Dateien leicht beantwortet werden.

### Beispiele für die Entscheidungsfindung des AndroidAPS-Algorithmus

AndroidAPS verwendet den gleichen Kern-Algorithmus und Funktionsumfang wie OpenAPS. Der Algorithmus macht, basierend auf den Einstellungen und der aktuellen Situation, mehrere Vorhersagen, die verschiedene Szenarien berechnen, was in der Zukunft passieren könnte. In Nightscout werden diese als "violette Linien" angezeigt. AndroidAPS verwendet verschiedene Farben um diese \[Vorhersagelinien\] (../Installing-AndroidAPS/Releasenotes.md?highlight=Colored prediction lines#overview-tab) zu unterscheiden. In den Log-Dateien kann nachvollzogen werden, welche dieser verschiedenen Vorhersagen in welchem Zeitraum für die Berechnung der notwendigen Maßnahmen verwendet wurde.

#### Hier einige Beispiele für die Vorhersagelinien und wie sie sich unterscheiden können:

![Beispiele für lila Vorhersagelinien](../images/Prediction_lines.jpg)

#### Die folgenden Beispiele zeigen verschiedene Zeiträume und wie sie die Insulingabe beeinflussen:

#### Szenario 1 - ZeroTemp aus Sicherheitsgründen I

Zwar steigt der BZ auf kurze Sicht an, es wird aber erwartet, dass er mittelfristig deutlich sinken wird. Tatsächlich wird prognostiziert, dass er nicht nur unter den Zielwert, *sondern auch* unter die Sicherheitsschwellenwert fallen wird. Aus Sicherheitsgründen und um eine Hypo zu vermeiden setzt AndroidAPS ein sogenanntes "zero temp" (temporäre Basalrate mit 0%) bis der erwartete BZ-Wert in allen Zeiträumen über der Sicherheitsschwelle liegt.

![Szenario 1](../images/Dosing_scenario_1.jpg)

#### Szenario 2 - ZeroTemp aus Sicherheitsgründen II

In diesem Beispiel wird erwartet, dass der BZ in Kürze unter den Sicherheitsschwellenwert sinken, jedoch mittelfristig deutlich über den Zielwert steigen wird. Da der kurzfristig erwartete Wert aber unter dem Sicherheitsschwellenwert liegt, setzt AndroidAPS erneut ein "zero temp" bis der erwartete BZ-Wert zu keinem Zeitpunkt mehr unter dem Grenzwert liegt.

![Dosing scenario 2](../images/Dosing_scenario_2.jpg)

#### Scenario 3 - More insulin needed

In this example, a near-term prediction shows a dip below target. However, it is not predicted to be below the safety threshold. The eventual BG is above target. Therefore, AndroidAPS will restrain from adding any insulin that would contribute to a near-term low (by adding insulin that would make the prediction go below threshold). It will then assess adding insulin to bring the lowest level of the eventual predicted BG down to target, once it is safe to do so. *(Depending on settings and the amount and timing of insulin required, this insulin may be delivered via temp basals or SMB's (super micro boluses) ).*

![Dosing scenario 3](../images/Dosing_scenario_3.jpg)

#### Scenario 4 - Low temping for safety

In this example, AndroidAPS sees that BG is spiking well above target. However, due to the timing of insulin, there is already enough insulin in the body to bring BG into range eventually. In fact, BG is predicted to eventually be below target. Therefore, AndroidAPS will not provide extra insulin so it will not contribute to a longer-timeframe low. Although BG is high/rising, a low temporary basal rate is likely here.

![Dosing scenario 4](../images/Dosing_scenario_4.jpg)

### Optimizing settings and making changes

As a clinician who may not have experience with AndroidAPS or DIY closed loops, you may find it challenging to help your patient optimize their settings or make changes to improve their outcomes. We have multiple tools and [guides](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/optimize-your-settings.html) in the community that help patients make small, tested adjustments to improve their settings.

The most important thing for patients to do is make one change at a time, and observe the impact for 2-3 days before choosing to change or modify another setting (unless it’s obviously a bad change that makes things worse, in which case they should revert immediately to the previous setting). The human tendency is to turn all the knobs and change everything at once; but if someone does so, then they may end up with further sub-optimal settings for the future, and find it hard to get back to a known good state.

One of the most powerful tools for making settings changes is an automated calculation tool for basal rates, ISF, and carb ratio. Es heißt “[Autotune](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html)”. It is designed to be run independently/manually, and allow the data to guide you or your patient in making incremental changes to settings. Es hat sich in der Community bewährt, Autotune-Berichte zuerst zu überprüfen bevor man versucht, manuelle Anpassungen an den Einstellungen vorzunehmen. Mit AndroidAPS wird Autotune als eigenständiges, separates System ausgeführt, obwohl es derzeit Bemühungen gibt, es auch direkt in AndroidAPS zu integrieren. As these parameters are a prerequesite both for standard pump insulin delivery and for closed loop insulin delivery, discussion of the autotune results and adustment of these parameters would be the natural link to the clinician.

Additionally, human behavior (learned from manual diabetes mode) often influences outcomes, even with a DIY closed loop. For example, if BG is predicted to go low and AndroidAPS reduces insulin on the way down, only a small amount of carbs (e.g. 3-4g carbs) may be needed to bring BG up from 70 mg/dl (3.9 mmol). However, in many cases, someone may choose to treat with many more carbs (e.g. sticking to the 15 rule), which will cause a resulting faster spike both from the extra glucose and because insulin had been reduced in the timeframe leading up to the low.

### OpenAPS

**This guide was adopted from [The clinician's guide to OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/clinician-guide-to-OpenAPS.html).** OpenAPS is a system developed to be run on a small portable computer (generally referred to as the "rig"). AndroidAPS uses many of the techniques implemented in OpenAPS, and shares much of the logic and algorithms, which is why this guide is very similar to the original guide. Much of the information about OpenAPS can be easily adapted to AndroidAPS, with the main difference being the hardware platform where each peace of software is run.

### Summary

This is meant to be a high-level overview of how AndroidAPS works. For more details, ask your patient, reach out to the community, or read the full AndroidAPS documentation available online.

Additional recommended reading:

* The [full AndroidAPS documentation](http://androidaps.readthedocs.io/en/latest/EN/index.html)
* The [OpenAPS Reference Design](https://OpenAPS.org/reference-design/), which explains how OpenAPS is designed for safety: https://openaps.org/reference-design/
* The [full OpenAPS documentation](http://openaps.readthedocs.io/en/latest/index.html) 
  * More [details on OpenAPS calculations](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#understanding-the-determine-basal-logic)