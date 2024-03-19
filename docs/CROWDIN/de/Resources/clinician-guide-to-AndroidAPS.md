# For Clinicians – A General Introduction and Guide to AAPS

This page is intended for clinicians who have expressed interest in open source artificial pancreas technology such as AAPS, or for patients who want to share such information with their clinicians.

This guide has some high-level information about DIY closed looping and specifically how AAPS works. For more details on all of these topics, please view the [comprehensive AAPS documentation online](../index.md). Bei Fragen wenden Sie sich bitte an Ihren Patienten bezüglich weiterer Details oder zögern Sie nicht, die Community zu kontaktieren. (Wenn Sie nicht auf Social Media (z.B. Twitter<0> oder Facebook) sind, können Sie gerne eine E-Mail an developers@AndroidAPS.org senden.) [Einige der neuesten Studien und ergebnisbezogenen Daten finden Sie unter diesem Link](https://openaps.org/outcomes/).</p> 

## Die Schritte zum Aufbau eines DIY Closed Loop

To start using AAPS, the following steps should be taken:

* Organisiere Dir eine [kompatible Insulinpumpe](../Hardware/pumps.md), ein [kompatibles Android-Gerät](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing) und eine [kompatible CGM Quelle](../Configuration/BG-Source.md).
* [Download the AAPS source code and build the software](../Installing-AndroidAPS/Building-APK.md).
* [Konfigurieren Sie die Software so, dass sie mit Ihren Diabetes-Geräten kommuniziert, richten Sie sie ein und nehmen Sie Sicherheitseinstellungen vor](index-configuration).

## Wie ein DIY Closed Loop funktioniert

Ohne ein Closed Loop System sammelt der Patient mit Diabetes Daten von seiner Pumpe und seinem CGM, entscheidet, was zu tun ist, und ergreift entsprechende Maßnahmen.

Bei der automatisierten Insulinverabreichung macht das System das Gleiche: Es sammelt Daten von der Pumpe, dem CGM und andere Informationen, die protokolliert werden (z.B. über Nightscout). Diese Informationen verwendet es als Basis seiner Berechnungen und entscheidet, wie viel mehr oder weniger Insulin benötigt wird (über oder unter der zugrunde liegenden Basalrate). Mittels temporärer Basalraten werden die notwendigen Anpassungen vorgenommen, um den BZ stabil zu halten oder in den Zielbereich zu bringen.

If the device running AAPS breaks or goes out of range of the pump, once the latest temporary basal rate ends, the pump falls back to being a standard pump with the preprogrammed basals rates runnning.

## Wie Daten gesammelt werden

With AAPS, an Android device runs a special app to do the math, the device communicates using Bluetooth with a supported pump. AAPS can communicate with other devices and to the cloud via wifi or mobile data to gather additional information, and to report to the patient, caregivers, and loved ones about what it’s doing and why.

Das Android-Gerät muss:

* mit der Pumpe kommunizieren und den Verlauf auslesen, um zu ermitteln, wie viel Insulin abgegeben wurde
* mit dem CGM kommunizieren (entweder direkt oder über einen Cloud Server), um den BZ-Verlauf zu kennen

Sobald das Gerät die Daten gesammelt hat, analysiert der Algorithmus sie und führt die Entscheidungsfindung auf Basis der Einstellungen (Korrektur- und BE-Faktoren, DIA, Zielwert/-bereich, etc.) durch. Bei Bedarf gibt es dann Kommadnos an die Pumpe, um die Insulinabgabe zu verändern.

Es sammelt zudem alle Informationen über Boli, Kohlenhydrataufnahme und temporäre Änderungen des Zielwerts/-bereichs von der Pumpe oder von Nightscout, um sie in die Berechnung der Insulinabgabe einzubeziehen.

## Woher weiß es, was es zu tun hat?

Die Open-Source-Software wurde entwickelt, um die bisher von Diabetikern händisch durchgeführten Tätigkeiten zu übernehmen und zu berechnen, wie die Insulinzufuhr angepasst werden sollte. Zuerst sammelt das System die Daten aller verbundenen Geräte und aus der Cloud, bereitet sie auf und führt die notwendigen Berechnungen durch. Ausgehend von verschiedenen Szenarien werden die erwarteten BZ-Bereiche der kommenden Stunden vorhergesagt und die notwenigen Anpassungen der Insulingabe berechnet, um den BZ im Zielbereich zu halten oder wieder dorthin zu bringen. Anschließend sendet es notwendigen Anpassungen an die Pumpe. Danach werden die Daten aus der Pumpe ausgelesen und die Berechnungen starten neu.

Es ist wichtig, qualitativ hochwertige CGM-Daten zu haben, da die Werte aus dem CGM die wichtigsten Eingabeparameter sind.

AAPS is designed to transparently track all input data it gathers, the resulting recommendation, and any action taken. Daher kann die Frage, "Warum tut es das?" zu jedem Zeitpunkt mit einem Blick in die Log-Dateien leicht beantwortet werden.

## Examples of AAPS algorithm decision making:

AAPS uses the same core algorithm and feature set as OpenAPS. Der Algorithmus macht, basierend auf den Einstellungen und der aktuellen Situation, mehrere Vorhersagen, die verschiedene Szenarien berechnen, was in der Zukunft passieren könnte. In Nightscout werden diese als "violette Linien" angezeigt. AAPS uses different colors to separate these [prediction lines](Releasenotes-overview-tab). In den Log-Dateien kann nachvollzogen werden, welche dieser verschiedenen Vorhersagen in welchem Zeitraum für die Berechnung der notwendigen Maßnahmen verwendet wurde.

### Hier einige Beispiele für die Vorhersagelinien und wie sie sich unterscheiden können:

![Beispiele für lila Vorhersagelinien](../images/Prediction_lines.jpg)

### Die folgenden Beispiele zeigen verschiedene Zeiträume und wie sie die Insulingabe beeinflussen:

### Szenario 1 - ZeroTemp aus Sicherheitsgründen I

Zwar steigt der BZ auf kurze Sicht an, es wird aber erwartet, dass er mittelfristig deutlich sinken wird. Tatsächlich wird prognostiziert, dass er nicht nur unter den Zielwert, *sondern auch* unter die Sicherheitsschwellenwert fallen wird. For safety to prevent the low, AAPS will issue a zero temp (temporary basal rate at 0%), until the eventualBG (in any time frame) is above threshold.

![Szenario 1](../images/Dosing_scenario_1.jpg)

### Szenario 2 - ZeroTemp aus Sicherheitsgründen II

In diesem Beispiel wird erwartet, dass der BZ in Kürze unter den Sicherheitsschwellenwert sinken, jedoch mittelfristig deutlich über den Zielwert steigen wird. However, because the near-term low is actually below the safety threshold, AAPS will issue a zero temp, until there is no longer any point of the prediction line that is below threshold.

![Szenario 2](../images/Dosing_scenario_2.jpg)

### Szenario 3 - erhöhter Insulinbedarf

Die Vorhersage in diesem Beispiel erwartetet ein Abfallen unter den Zielwert in der nahen Zukunft. Allerdings wird nicht erwartet, dass dieser Wert unter den Sicherheitsgrenzwert sinkt. Der langfristig erwartete BZ-Wert liegt oberhalb des Zielwertes. Therefore, AAPS will restrain from adding any insulin that would contribute to a near-term low (by adding insulin that would make the prediction go below threshold). AndroidAPS beobachtet die CGM-Werte weiterhin und wird Insulin abgeben, sobald dies sicher möglich ist (ohne Unterzuckerungsgefahr), um den erwarteten hohen Wert zurück in den Zielbereich zu bringen. *(Je nach Einstellung sowie Menge und Zeitpunkt des benötigten Insulins kann dieses Insulin über eine temporäre Basalrate oder SMB (Super Micro Bolus) abgegeben werden).*

![Szenario 3](../images/Dosing_scenario_3.jpg)

### Szenario 4 - Reduktion der Insulingabe aus Sicherheitsgründen

In this example, AAPS sees that BG is spiking well above target. Aufgrund des bereits im Körper befindlichen Insulins und dessen Wirkdauer wird aber erwartet, dass der Zielbereich ohne zusätzliche Insulingabe wieder erreicht werden kann. Tatsächlich wird sogar ein Abfallen unter den Zielwert erwartet. Therefore, AAPS will not provide extra insulin so it will not contribute to a longer-timeframe low. Obwohl der BZ-Wert hoch ist und steigt, wird in einem solchen Szenario eher eine Reduktion der Basalrate durch AndroidAPS zu erwarten sein.

![Szenario 4](../images/Dosing_scenario_4.jpg)

## Optimierung von Einstellungen und Änderungen

As a clinician who may not have experience with AAPS or DIY closed loops, you may find it challenging to help your patient optimize their settings or make changes to improve their outcomes. Wir verfügen in der Gemeinschaft über mehrere Tools und Leitfäden<0>, die den Patienten helfen, kleine, getestete Anpassungen vorzunehmen, um ihre Einstellungen zu verbessern.</p> 

Das Wichtigste für den Patienten ist, nur jeweils eine Änderung vorzunehmen und deren Auswirkungen 2 - 3 Tage lang zu beobachten, bevor er sich entscheidet, eine andere Einstellung zu ändern oder zu modifizieren. Dies gilt natürlich nicht, wenn es sich offensichtlich um eine "schlechte Anpassung" handelt, die die Situation verschlimmert. In diesem Fall sollte er sofort zur vorherigen Einstellung zurückkehren. Wir Menschen tendieren dazu, alles auf einmal ändern zu wollen. Aber wenn man das tut kann es sein, dass daraus suboptimale Einstellungen entstehen, die nur schwer wieder in einen guten Status zurückgeführt werden können.

Eines der leistungsfähigsten Werkzeuge zur Durchführung von Einstellungsänderungen ist ein automatisiertes Kalkulationstool für Basalraten, ISF und BE-Faktoren. Es heißt “[Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html)”. Es ist so konzipiert, dass es unabhängig/manuell ausgeführt werden kann und die Daten Sie oder Ihren Patienten dabei unterstützen, schrittweise Änderungen an den Einstellungen vorzunehmen. Es hat sich in der Community bewährt, Autotune-Berichte zuerst zu überprüfen bevor man versucht, manuelle Anpassungen an den Einstellungen vorzunehmen. With AAPS, Autotune will be run as a "one-off", although there are ongoing efforts to incorporate it directly into AAPS as well. Da diese Parameter sowohl für die Standardpumpentherapie als auch für den Closed Loop die Basis darstellen, wäre die Diskussion der Autotune-Ergebnisse und die Anpassung dieser Parameter die natürliche Verbindung zum Arzt.

Darüber hinaus beeinflusst das menschliche Verhalten, das in der manuellen Diabetes-Therapie erlernt wurde, oft die Ergebnisse - auch bei einem DIY Closed Loop. For example, if BG is predicted to go low and AAPS reduces insulin on the way down, only a small amount of carbs (e.g. 3-4g carbs) may be needed to bring BG up from 70 mg/dl (3.9 mmol). In vielen Fällen kann es aber sein, dass der Patient sich auf Basis seiner bisherigen Erfahrungen entscheidet, deutlich mehr Kohlenhydrate zu sich zu nehmen. Dies führt zu einem schnelleren Anstieg sowohl aus der zusätzlichen Glukose als auch durch die von AndroidAPS im Vorfeld vorgenommene Reduktion der Insulingabe.

## OpenAPS

**Dieser Leitfaden wurde aus dem [The clinician's guide to OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/clinician-guide-to-OpenAPS.html) übernommen und angepasst.** OpenAPS ist ein System, das für den Betrieb auf einem kleinen tragbaren Computer (allgemein als "Rig" bezeichnet) entwickelt wurde. AAPS uses many of the techniques implemented in OpenAPS, and shares much of the logic and algorithms, which is why this guide is very similar to the original guide. Much of the information about OpenAPS can be easily adapted to AAPS, with the main difference being the hardware platform where each piece of software is run.

## Zusammenfassung

This is meant to be a high-level overview of how AAPS works. For more details, ask your patient, reach out to the community, or read the full AAPS documentation available online.

Zusätzliche Literaturhinweise:

* The [full AAPS documentation](../index)
* Das [OpenAPS Reference Design](https://OpenAPS.org/reference-design/) das erklärt, wie OpenAPS für die Sicherheit konzipiert ist: https://openaps.org/reference-design/
* Die [vollständige OpenAPS-Dokumentation](https://openaps.readthedocs.io/en/latest/index.html) 
  * Weitere [Details zur OpenAPS Berechnungen](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#understanding-the-determine-basal-logic)