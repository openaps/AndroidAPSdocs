# Für Klinikpersonal - Eine allgemeine Einführung und Anleitung zu AndroidAPS

Diese Seite richtet sich an Klinikpersonal, das Interesse an der Open-Source-Technologie der künstlichen Bauchspeicheldrüse wie AndroidAPS haben und an Patienten, die diese Informationen mit ihren Ärzten und Diabetesberatern teilen möchten.

Dieser Leitfaden enthält einige wichtige Informationen über DIY Closed Looping und speziell über die Funktionsweise von AndroidAPS. Für weitere Details zu all diesen Themen lesen Sie bitte die [ausführliche AndroidAPS-Dokumentation online](../index.md). Bei Fragen wenden Sie sich bitte an Ihren Patienten bezüglich weiterer Details oder zögern Sie nicht, die Community zu kontaktieren. (Wenn Sie nicht auf Social Media (z.B. Twitter<0> oder Facebook) sind, können Sie gerne eine E-Mail an developers@AndroidAPS.org senden.) [Einige der neuesten Studien und ergebnisbezogenen Daten finden Sie unter diesem Link](https://openaps.org/outcomes/).</p> 

## Die Schritte zum Aufbau eines DIY Closed Loop

Um AndroidAPS nutzen zu können, müssen die folgenden Schritte unternommen werden:

* Organisiere Dir eine [kompatible Insulinpumpe](../Hardware/pumps.md), ein [kompatibles Android-Gerät](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing) und eine [kompatible CGM Quelle](../Configuration/BG-Source.md).
* [AndroidAPS Quellcode herunterladen und die Software "erstellen"](../Installing-AndroidAPS/Building-APK.md).
* [Configure the software to talk to their diabetes devices and specify settings and safety preferences](index-configuration).

## Wie ein DIY Closed Loop funktioniert

Ohne ein Closed Loop System sammelt der Patient mit Diabetes Daten von seiner Pumpe und seinem CGM, entscheidet, was zu tun ist, und ergreift entsprechende Maßnahmen.

Bei der automatisierten Insulinverabreichung macht das System das Gleiche: Es sammelt Daten von der Pumpe, dem CGM und andere Informationen, die protokolliert werden (z.B. über Nightscout). Diese Informationen verwendet es als Basis seiner Berechnungen und entscheidet, wie viel mehr oder weniger Insulin benötigt wird (über oder unter der zugrunde liegenden Basalrate). Mittels temporärer Basalraten werden die notwendigen Anpassungen vorgenommen, um den BZ stabil zu halten oder in den Zielbereich zu bringen.

Wenn das Gerät, auf dem AndroidAPS läuft, kaputt geht oder die Bluetooth-Verbindung zur Pumpe verliert, fällt die Insulinpumpe nach dem Ende der letzten temporären Basalrate wieder auf das Standardprogramm zurück, bei dem die vorprogrammierte Basalrate läuft.

## Wie Daten gesammelt werden

Mit AndroidAPS führt ein Android-Gerät eine spezielle App aus, um die Berechnungen durchzuführen. Das Gerät kommuniziert über Bluetooth mit einer unterstützten Pumpe. AndroidAPS kann mit anderen Geräten und der Cloud über WLAN oder mobile Datenverbindungen kommunizieren, um zusätzliche Informationen zu sammeln. Über diesen Weg können Patienten, Pflegepersonal und Angehörige auch nachverfolgen, was und warum AndroidAPS etwas tut.

Das Android-Gerät muss:

* mit der Pumpe kommunizieren und den Verlauf auslesen, um zu ermitteln, wie viel Insulin abgegeben wurde
* mit dem CGM kommunizieren (entweder direkt oder über einen Cloud Server), um den BZ-Verlauf zu kennen

Sobald das Gerät die Daten gesammelt hat, analysiert der Algorithmus sie und führt die Entscheidungsfindung auf Basis der Einstellungen (Korrektur- und BE-Faktoren, DIA, Zielwert/-bereich, etc.) durch. Bei Bedarf gibt es dann Kommadnos an die Pumpe, um die Insulinabgabe zu verändern.

Es sammelt zudem alle Informationen über Boli, Kohlenhydrataufnahme und temporäre Änderungen des Zielwerts/-bereichs von der Pumpe oder von Nightscout, um sie in die Berechnung der Insulinabgabe einzubeziehen.

## Woher weiß es, was es zu tun hat?

Die Open-Source-Software wurde entwickelt, um die bisher von Diabetikern händisch durchgeführten Tätigkeiten zu übernehmen und zu berechnen, wie die Insulinzufuhr angepasst werden sollte. Zuerst sammelt das System die Daten aller verbundenen Geräte und aus der Cloud, bereitet sie auf und führt die notwendigen Berechnungen durch. Ausgehend von verschiedenen Szenarien werden die erwarteten BZ-Bereiche der kommenden Stunden vorhergesagt und die notwenigen Anpassungen der Insulingabe berechnet, um den BZ im Zielbereich zu halten oder wieder dorthin zu bringen. Anschließend sendet es notwendigen Anpassungen an die Pumpe. Danach werden die Daten aus der Pumpe ausgelesen und die Berechnungen starten neu.

Es ist wichtig, qualitativ hochwertige CGM-Daten zu haben, da die Werte aus dem CGM die wichtigsten Eingabeparameter sind.

AndroidAPS dokumentiert transparent alle erfassten Eingabedaten, die daraus resultierende Empfehlung und die getroffenen Maßnahmen. Daher kann die Frage, "Warum tut es das?" zu jedem Zeitpunkt mit einem Blick in die Log-Dateien leicht beantwortet werden.

## Beispiele für die Entscheidungsfindung des AndroidAPS-Algorithmus

AndroidAPS verwendet den gleichen Kern-Algorithmus und Funktionsumfang wie OpenAPS. Der Algorithmus macht, basierend auf den Einstellungen und der aktuellen Situation, mehrere Vorhersagen, die verschiedene Szenarien berechnen, was in der Zukunft passieren könnte. In Nightscout werden diese als "violette Linien" angezeigt. AndroidAPS uses different colors to separate these [prediction lines](Releasenotes-overview-tab). In den Log-Dateien kann nachvollzogen werden, welche dieser verschiedenen Vorhersagen in welchem Zeitraum für die Berechnung der notwendigen Maßnahmen verwendet wurde.

### Hier einige Beispiele für die Vorhersagelinien und wie sie sich unterscheiden können:

![Beispiele für lila Vorhersagelinien](../images/Prediction_lines.jpg)

### Die folgenden Beispiele zeigen verschiedene Zeiträume und wie sie die Insulingabe beeinflussen:

### Szenario 1 - ZeroTemp aus Sicherheitsgründen I

Zwar steigt der BZ auf kurze Sicht an, es wird aber erwartet, dass er mittelfristig deutlich sinken wird. Tatsächlich wird prognostiziert, dass er nicht nur unter den Zielwert, *sondern auch* unter die Sicherheitsschwellenwert fallen wird. Aus Sicherheitsgründen und um eine Hypo zu vermeiden setzt AndroidAPS ein sogenanntes "zero temp" (temporäre Basalrate mit 0%) bis der erwartete BZ-Wert in allen Zeiträumen über der Sicherheitsschwelle liegt.

![Szenario 1](../images/Dosing_scenario_1.jpg)

### Szenario 2 - ZeroTemp aus Sicherheitsgründen II

In diesem Beispiel wird erwartet, dass der BZ in Kürze unter den Sicherheitsschwellenwert sinken, jedoch mittelfristig deutlich über den Zielwert steigen wird. Da der kurzfristig erwartete Wert aber unter dem Sicherheitsschwellenwert liegt, setzt AndroidAPS erneut ein "zero temp" bis der erwartete BZ-Wert zu keinem Zeitpunkt mehr unter dem Grenzwert liegt.

![Szenario 2](../images/Dosing_scenario_2.jpg)

### Szenario 3 - erhöhter Insulinbedarf

Die Vorhersage in diesem Beispiel erwartetet ein Abfallen unter den Zielwert in der nahen Zukunft. Allerdings wird nicht erwartet, dass dieser Wert unter den Sicherheitsgrenzwert sinkt. Der langfristig erwartete BZ-Wert liegt oberhalb des Zielwertes. Daher wird AndroidAPS davon absehen, Insulin abzugeben, das zu einer kurzfristigen Hypo beitragen würde, denn hinzugefügtes Insulin würde die Vorhersage unter den Schwellenwert bringen. AndroidAPS beobachtet die CGM-Werte weiterhin und wird Insulin abgeben, sobald dies sicher möglich ist (ohne Unterzuckerungsgefahr), um den erwarteten hohen Wert zurück in den Zielbereich zu bringen. *(Je nach Einstellung sowie Menge und Zeitpunkt des benötigten Insulins kann dieses Insulin über eine temporäre Basalrate oder SMB (Super Micro Bolus) abgegeben werden).*

![Szenario 3](../images/Dosing_scenario_3.jpg)

### Szenario 4 - Reduktion der Insulingabe aus Sicherheitsgründen

In diesem Beispiel erkennt AndroidAPS, dass der BZ-Wert deutlich über den Zielwert hinaus ansteigen wird. Aufgrund des bereits im Körper befindlichen Insulins und dessen Wirkdauer wird aber erwartet, dass der Zielbereich ohne zusätzliche Insulingabe wieder erreicht werden kann. Tatsächlich wird sogar ein Abfallen unter den Zielwert erwartet. Daher wird AndroidAPS kein zusätzliches Insulin abgeben, um nicht mittelfristig eine Unterzuckerung zu verursachen. Obwohl der BZ-Wert hoch ist und steigt, wird in einem solchen Szenario eher eine Reduktion der Basalrate durch AndroidAPS zu erwarten sein.

![Szenario 4](../images/Dosing_scenario_4.jpg)

## Optimierung von Einstellungen und Änderungen

Als Arzt, der möglicherweise keine Erfahrung mit AndroidAPS oder DIY Closed Loop Systemen hat, kann es für Sie eine Herausforderung sein, Ihrem Patienten zu helfen, seine Einstellungen zu optimieren oder Änderungen vorzunehmen, um seine Ergebnisse zu verbessern. Wir verfügen in der Gemeinschaft über mehrere Tools und Leitfäden<0>, die den Patienten helfen, kleine, getestete Anpassungen vorzunehmen, um ihre Einstellungen zu verbessern.</p> 

Das Wichtigste für den Patienten ist, nur jeweils eine Änderung vorzunehmen und deren Auswirkungen 2 - 3 Tage lang zu beobachten, bevor er sich entscheidet, eine andere Einstellung zu ändern oder zu modifizieren. Dies gilt natürlich nicht, wenn es sich offensichtlich um eine "schlechte Anpassung" handelt, die die Situation verschlimmert. In diesem Fall sollte er sofort zur vorherigen Einstellung zurückkehren. Wir Menschen tendieren dazu, alles auf einmal ändern zu wollen. Aber wenn man das tut kann es sein, dass daraus suboptimale Einstellungen entstehen, die nur schwer wieder in einen guten Status zurückgeführt werden können.

Eines der leistungsfähigsten Werkzeuge zur Durchführung von Einstellungsänderungen ist ein automatisiertes Kalkulationstool für Basalraten, ISF und BE-Faktoren. Es heißt “[Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html)”. Es ist so konzipiert, dass es unabhängig/manuell ausgeführt werden kann und die Daten Sie oder Ihren Patienten dabei unterstützen, schrittweise Änderungen an den Einstellungen vorzunehmen. Es hat sich in der Community bewährt, Autotune-Berichte zuerst zu überprüfen bevor man versucht, manuelle Anpassungen an den Einstellungen vorzunehmen. Mit AndroidAPS wird Autotune als eigenständiges, separates System ausgeführt, obwohl es derzeit Bemühungen gibt, es auch direkt in AndroidAPS zu integrieren. Da diese Parameter sowohl für die Standardpumpentherapie als auch für den Closed Loop die Basis darstellen, wäre die Diskussion der Autotune-Ergebnisse und die Anpassung dieser Parameter die natürliche Verbindung zum Arzt.

Darüber hinaus beeinflusst das menschliche Verhalten, das in der manuellen Diabetes-Therapie erlernt wurde, oft die Ergebnisse - auch bei einem DIY Closed Loop. Wenn zum Beispiel ein niedriger BZ vorhergesagt wird und AndroidAPS das Insulin reduziert, kann eine geringe Menge an Kohlenhydraten (z.B. 3-4g Kohlenhydrate) ausreichen, um einen BZ von 70 mg/dl (3.9 mmol) zu erhöhen. In vielen Fällen kann es aber sein, dass der Patient sich auf Basis seiner bisherigen Erfahrungen entscheidet, deutlich mehr Kohlenhydrate zu sich zu nehmen. Dies führt zu einem schnelleren Anstieg sowohl aus der zusätzlichen Glukose als auch durch die von AndroidAPS im Vorfeld vorgenommene Reduktion der Insulingabe.

## OpenAPS

**Dieser Leitfaden wurde aus dem [The clinician's guide to OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/clinician-guide-to-OpenAPS.html) übernommen und angepasst.** OpenAPS ist ein System, das für den Betrieb auf einem kleinen tragbaren Computer (allgemein als "Rig" bezeichnet) entwickelt wurde. AndroidAPS verwendet viele der in OpenAPS implementierten Techniken und teilt einen Großteil der Logik und Algorithmen, weshalb dieses Handbuch dem ursprünglichen Handbuch sehr ähnlich ist. Ein Großteil der Informationen über OpenAPS kann leicht an AndroidAPS angepasst werden, wobei der Hauptunterschied die Hardwareplattform ist, auf der die Software ausgeführt wird.

## Zusammenfassung

Dies soll ein allgemeiner Überblick darüber sein, wie AndroidAPS funktioniert. Für weitere Informationen fragen Sie Ihren Patienten, kontaktieren Sie die Community oder lesen Sie die vollständige AndroidAPS-Dokumentation, die online verfügbar ist.

Zusätzliche Literaturhinweise:

* Die [umfassende AndroidAPS-Dokumentation](../index)
* Das [OpenAPS Reference Design](https://OpenAPS.org/reference-design/) das erklärt, wie OpenAPS für die Sicherheit konzipiert ist: https://openaps.org/reference-design/
* Die [vollständige OpenAPS-Dokumentation](https://openaps.readthedocs.io/en/latest/index.html) 
  * Weitere [Details zur OpenAPS Berechnungen](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#understanding-the-determine-basal-logic)