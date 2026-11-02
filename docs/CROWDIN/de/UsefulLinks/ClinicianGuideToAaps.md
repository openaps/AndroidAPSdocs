# Für Mediziner und Fachpersonal - Eine allgemeine Einführung in und eine Anleitung für AAPS

```{note}
Diese Seite ist eine sehr grobe Einführung für medizinisches Fachpersonal. It was last reviewed in June 2026. AAPS develops continuously, so for the most accurate and up-to-date detail always refer to the [main AAPS documentation](../index.md).
```

Diese Seite richtet sich an medizinischer Fachpersonal, das Interesse an der Open-Source-Technologie der künstlichen Bauchspeicheldrüse wie AAPS hat, und an Patienten, die diese Informationen mit ihren Ärzten und dem Diabetes-Team teilen möchten.

Dieser Leitfaden enthält einige wichtige Informationen über DIY Closed Looping und speziell über die Funktionsweise von AAPS. Für weiterführende Informationen zu all diesen Themen, lohnt sich ein Blick auf die [ausführliche AAPS-Online-Dokumentation](../index.md). Bei Fragen wenden Sie sich bitte an Ihren Patienten bezüglich weiterer Details oder zögern Sie nicht, die Community zu kontaktieren. (Wenn Sie nicht auf Social Media (z. B. [Twitter](https://twitter.com/kozakmilos) oder Facebook) sind, können Sie gerne eine E-Mail an developers@aaps.app senden. [Einige der neuesten Studien und ergebnisbezogenen Daten finden Sie unter diesem Link](https://openaps.org/outcomes/).

## Die Schritte zum Aufbau eines DIY Closed Loop

Um mit AAPS zu beginnen, sollten folgende Schritte unternommen werden:

* Finde eine [kompatible Pump](../Getting-Started/CompatiblePumps.md), ein [kompatibles Android-Gerät](../Getting-Started/Phones.md), und einen [kompatiblen Sensor (CGM)](../Getting-Started/CompatiblesCgms.md).
* [Lade den AAPS-Quellcode herunter und erstelle die Software](../SettingUpAaps/BuildingAaps.md).
* [Konfigurieren Sie die Software so, dass sie mit Ihren Diabetes-Geräten kommuniziert, richten Sie sie ein und nehmen Sie Sicherheitseinstellungen vor](../SettingUpAaps/SetupWizard.md).

## Wie ein DIY Closed Loop funktioniert

Ohne ein Closed Loop System sammelt der Patient mit Diabetes Daten von seiner Pumpe und seinem CGM, entscheidet, was zu tun ist, und ergreift entsprechende Maßnahmen.

Bei der automatisierten Insulinverabreichung macht das System das Gleiche: Es sammelt Daten von der Pumpe, dem CGM und andere Informationen, die protokolliert werden (z.B. über Nightscout). Diese Informationen verwendet es als Basis seiner Berechnungen und entscheidet, wie viel mehr oder weniger Insulin benötigt wird (über oder unter der zugrunde liegenden Basalrate). Mittels temporärer Basalraten werden die notwendigen Anpassungen vorgenommen, um den BZ stabil zu halten oder in den Zielbereich zu bringen.

If the device running AAPS breaks or goes out of range of the pump, once the latest temporary basal rate ends, the pump falls back to being a standard pump with the preprogrammed basal rates running.

## Wie Daten gesammelt werden

Mit AAPS läuft auf dem Android-Gerät eine spezielle App, die Berechnungen vornimmt. Das Smartphone/Smartwatch kommuniziert über Bluetooth mit der unterstützten Pumpe. AAPS can communicate with other devices and to the cloud via Wi-Fi or mobile data to gather additional information, and to report to the patient, caregivers, and loved ones about what it’s doing and why.

Das Android-Gerät muss:

* mit der Pumpe kommunizieren und den Verlauf auslesen, um zu ermitteln, wie viel Insulin abgegeben wurde
* mit dem CGM kommunizieren (entweder direkt oder über einen Cloud Server), um den BZ-Verlauf zu kennen

Sobald das Gerät die Daten gesammelt hat, analysiert der Algorithmus sie und führt die Entscheidungsfindung auf Basis der Einstellungen (Korrektur- und BE-Faktoren, DIA, Zielwert/-bereich, etc.) durch. Bei Bedarf gibt es dann Kommadnos an die Pumpe, um die Insulinabgabe zu verändern.

Es sammelt zudem alle Informationen über Boli, Kohlenhydrataufnahme und temporäre Änderungen des Zielwerts/-bereichs von der Pumpe oder von Nightscout, um sie in die Berechnung der Insulinabgabe einzubeziehen.

## Woher weiß es, was es zu tun hat?

Die Open-Source-Software wurde entwickelt, um die bisher von Diabetikern händisch durchgeführten Tätigkeiten zu übernehmen und zu berechnen, wie die Insulinzufuhr angepasst werden sollte. It first collects data from all the supporting devices and from the cloud, prepares the data and runs the calculations, makes predictions of what BG levels are expected to do during the next hours in different scenarios, and calculates the needed adjustments to keep or bring BG back into target range. Anschließend sendet es notwendigen Anpassungen an die Pumpe. Danach werden die Daten aus der Pumpe ausgelesen und die Berechnungen starten neu.

Es ist wichtig, qualitativ hochwertige CGM-Daten zu haben, da die Werte aus dem CGM die wichtigsten Eingabeparameter sind.

AAPS wurde so entworfen, dass alle Eingabedaten, die daraus resultierende Empfehlung und die abgeleiteten Maßnahmen völlig transparent nachverfolgbar sind. Daher kann die Frage, "Warum tut es das?" zu jedem Zeitpunkt mit einem Blick in die Log-Dateien leicht beantwortet werden.

## Beispiele für die Entscheidungsfindung des AAPS-Algorithmus

AAPS verwendet den gleichen OpenAPS-Algorithmus und -Funktionsumfang. Der Algorithmus macht, basierend auf den Einstellungen und der aktuellen Situation, mehrere Vorhersagen, die verschiedene Szenarien berechnen, was in der Zukunft passieren könnte. In Nightscout werden diese als "violette Linien" angezeigt. Die [Vorhersagelinien](#aaps-screens-prediction-lines) sind in AAPS, zur besseren Unterscheidung, verschieden eingefärbt. In den Log-Dateien kann nachvollzogen werden, welche dieser verschiedenen Vorhersagen in welchem Zeitraum für die Berechnung der notwendigen Maßnahmen verwendet wurde.

### Hier einige Beispiele für die Vorhersagelinien und wie sie sich unterscheiden können:

![Beispiele für lila Vorhersagelinien](../images/Prediction_lines.jpg)

(clinicianguide-dosing-scenarios)=

### Die folgenden Beispiele zeigen verschiedene Zeiträume und wie sie die Insulingabe beeinflussen:

### Szenario 1 - ZeroTemp aus Sicherheitsgründen I

Zwar steigt der BZ auf kurze Sicht an, es wird aber erwartet, dass er mittelfristig deutlich sinken wird. Tatsächlich wird prognostiziert, dass er nicht nur unter den Zielwert, *sondern auch* unter die Sicherheitsschwellenwert fallen wird. Um eine Hypo zu vermeiden, setzt AAPS aus Sicherhheitsgründen ein sogenanntes "zero temp" (temporäre Basalrate mit 0 %) bis der erwartete Glukosewert dauerhaft über der Sicherheitsschwelle liegt.

![Szenario 1](../images/Dosing_scenario_1.jpg)

### Szenario 2 - ZeroTemp aus Sicherheitsgründen II

In diesem Beispiel wird erwartet, dass der BZ in Kürze unter den Sicherheitsschwellenwert sinken, jedoch mittelfristig deutlich über den Zielwert steigen wird. Da der kurzfristig erwartete Wert aber unter dem Sicherheitsschwellwert liegt, setzt AAPS erneut ein "zero temp" bis der erwartete Glukosewert dauerhaft darüber liegt.

![Szenario 2](../images/Dosing_scenario_2.jpg)

### Szenario 3 - erhöhter Insulinbedarf

Die Vorhersage in diesem Beispiel erwartetet ein Abfallen unter den Zielwert in der nahen Zukunft. Allerdings wird nicht erwartet, dass dieser Wert unter den Sicherheitsgrenzwert sinkt. Der langfristig erwartete BZ-Wert liegt oberhalb des Zielwertes. Therefore, AAPS will refrain from adding any insulin that would contribute to a near-term low (by adding insulin that would make the prediction go below threshold). AndroidAPS beobachtet die CGM-Werte weiterhin und wird Insulin abgeben, sobald dies sicher möglich ist (ohne Unterzuckerungsgefahr), um den erwarteten hohen Wert zurück in den Zielbereich zu bringen. *(Depending on settings and the amount and timing of insulin required, this insulin may be delivered via temp basals or SMBs (super micro boluses)).*

![Szenario 3](../images/Dosing_scenario_3.jpg)

### Szenario 4 - Reduktion der Insulingabe aus Sicherheitsgründen

In diesem Beispiel erkennt AAPS, dass der Glukosewert deutlich über den Zielwert hinaus ansteigen wird. Aufgrund des bereits im Körper befindlichen Insulins und dessen Wirkdauer wird aber erwartet, dass der Zielbereich ohne zusätzliche Insulingabe wieder erreicht werden kann. Tatsächlich wird sogar ein Abfallen unter den Zielwert erwartet. In der Folge AAPS daher kein zusätzliches Insulin abgeben, um nicht mittelfristig eine Unterzuckerung zu verursachen. Obwohl der BZ-Wert hoch ist und steigt, wird in einem solchen Szenario eher eine Reduktion der Basalrate durch AndroidAPS zu erwarten sein.

![Szenario 4](../images/Dosing_scenario_4.jpg)

## Optimierung von Einstellungen und Änderungen

Als Arzt, der möglicherweise keine Erfahrung mit AAPS oder DIY Closed Loop Systemen hat, kann es eine Herausforderung sein, Ihrem Patienten zu helfen, seine Einstellungen zu optimieren oder Änderungen vorzunehmen, um so seine Werte zu verbessern. Wir verfügen in der Gemeinschaft über mehrere Tools und Leitfäden<0>, die den Patienten helfen, kleine, getestete Anpassungen vorzunehmen, um ihre Einstellungen zu verbessern.</p> 

Das Wichtigste für den Patienten ist, nur jeweils eine Änderung vorzunehmen und deren Auswirkungen 2 - 3 Tage lang zu beobachten, bevor er sich entscheidet, eine andere Einstellung zu ändern oder zu modifizieren. Dies gilt natürlich nicht, wenn es sich offensichtlich um eine "schlechte Anpassung" handelt, die die Situation verschlimmert. In diesem Fall sollte er sofort zur vorherigen Einstellung zurückkehren. Wir Menschen tendieren dazu, alles auf einmal ändern zu wollen. Aber wenn man das tut kann es sein, dass daraus suboptimale Einstellungen entstehen, die nur schwer wieder in einen guten Status zurückgeführt werden können.

Eines der leistungsfähigsten Werkzeuge zur Durchführung von Einstellungsänderungen ist ein automatisiertes Kalkulationstool für Basalraten, ISF und BE-Faktoren. This is called “[Autotune](#autotune-how-autotune-calculates-adjustments)”. It is designed to allow the data to guide you or your patient in making incremental changes to settings. Es hat sich in der Community bewährt, Autotune-Berichte zuerst zu überprüfen bevor man versucht, manuelle Anpassungen an den Einstellungen vorzunehmen. Autotune is built into AAPS as a plugin (**Configuration** → **General** → **Autotune**); see [Autotune](../AdvancedOptions/Autotune.md). It can be run on demand or automatically. Da diese Parameter sowohl für die Standardpumpentherapie als auch für den Closed Loop die Basis darstellen, wäre die Diskussion der Autotune-Ergebnisse und die Anpassung dieser Parameter die natürliche Verbindung zum Arzt.

Darüber hinaus beeinflusst das menschliche Verhalten, das in der manuellen Diabetes-Therapie erlernt wurde, oft die Ergebnisse - auch bei einem DIY Closed Loop. For example, if BG is predicted to go low and AAPS reduces insulin on the way down, only a small amount of carbs (e.g. 3-4g carbs) may be needed to bring BG up from 70 mg/dL (3.9 mmol/L). In vielen Fällen kann es aber sein, dass der Patient sich auf Basis seiner bisherigen Erfahrungen entscheidet, deutlich mehr Kohlenhydrate zu sich zu nehmen. Dies führt zu einem schnelleren Anstieg sowohl aus der zusätzlichen Glukose als auch durch die von AndroidAPS im Vorfeld vorgenommene Reduktion der Insulingabe.

## OpenAPS

**This guide was adapted from [The clinician's guide to OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/clinician-guide-to-OpenAPS.html).** OpenAPS is a system developed to be run on a small portable computer (generally referred to as the "rig"). AAPS greift auf viele der in OpenAPS implementierten Techniken zurück und teilt einen Großteil der Logik und Algorithmen, weshalb dieses Handbuch dem ursprünglichen OpenAPS-Handbuch sehr ähnlich ist. Ein Großteil der Informationen über OpenAPS kann leicht auf AAPS übertragen werden, wobei der Hauptunterschied in der genutzten Hardware, auf der die Software ausgeführt wird, liegt.

## Zusammenfassung

Dies soll ein erster allgemeiner Überblick über die Funktionsweise von AAPS sein. Für weitere Informationen sprechen Sie mit Ihrem Patienten, wenden Sie sich an die Community oder lesen Sie die vollständige AAPS-Online-Dokumentation.

Zusätzliche Literaturhinweise:

* Die [vollständige AAPS-Dokumentation](../index.md)
* Das [OpenAPS Reference Design](https://OpenAPS.org/reference-design/) das erklärt, wie OpenAPS für die Sicherheit konzipiert ist: https://openaps.org/reference-design/
* Die [vollständige OpenAPS-Dokumentation](https://openaps.readthedocs.io/en/latest/index.html) 
  * See [how AAPS turns predictions into a dosing decision](#aaps-screens-how-predictions-become-a-dosing-decision) in this documentation, or [OpenAPS's determine-basal documentation](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#understanding-the-determine-basal-logic) for the underlying algorithm in full technical detail