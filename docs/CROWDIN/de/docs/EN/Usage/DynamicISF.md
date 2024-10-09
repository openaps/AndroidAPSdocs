(Open-APS-features-DynamicISF)=
## Dynamischer ISF (DynISF)
Dynamischer ISF ist seit der AAPS-Version 3.2 als Funktion verfügbar. Um es nutzen zu können, muss das Ziel (Objective) 11 bestanden und erreicht sein. Tippe in der KONFIGURATION > APS auf 'Dynamischer ISF', um es einzuschalten. Diese Funktion wird nur erfahrenen Nutzenden empfohlen, die sicher im Umgang mit AAPS sind und das System sehr genau beobachten.

Um den dynamischen ISF sinnvoll nutzen zu können, sollten mindestens 5 Tage historischer Daten in der AAPS-Datenbank vorliegen.

Die Funktion "dynamischer ISF" passt den Insulinempfindlichkeitsfaktor (ISF) auf Basis der täglichen Gesamtinsulinmenge (TDD), dem aktuellen und dem erwarteten Glukosewerten dynamisch an.

Der Dynamische ISF verwendet das Modell von Chris Wilson anstelle statischer Profileinstellungen, um den ISF zu ermitteln.

Die Berechnungsformel ist: ISF = 1800 / (TDD * Ln (( Glukose / Insulindivisor) +1 ))

Die Implementierung verwendet die Formel zur Berechnung des aktuellen ISF und in den oref1-Vorhersagen für IOB, ZT und UAM. Er wird nicht für die COB verwendet.

### TDD
Dies verwendet eine Kombination aus dem TDD-Durchschnitt der letzten 7 Tage, dem -TDD des vorangegangenen Tages und einem gewichteten Durchschnitt des Insulinbedarfs der letzten acht Stunden, extrapoliert auf 24 Stunden. Die in der obigen Gleichung verwendete Gesamtdosis wird mit einem Drittel gegenüber den übrigen Werten berücksichtigt.

### Insulindivisor
Der Insulindivisor ist vom Wirkmaximum des genutzten Insulins abhängig und ist umgekehrt proportional zum Wirkmaximum. Für Lyumjev ist dieser Wert 75, für Fiasp 65, und übliches schnell wirkendes Insulin 55.

### Dynamischer ISF Anpassungsfaktor
Der Anpassungsfaktor kann zwischen 1% und 300% eingestellt werden. Dieser Anpassungfaktor ist ein Multiplikator auf den TDD-Wert und führt dazu, dass die ISF-Werte kleiner werden (d.h. es ist mehr Insulin erforderlich, um den Glukosespiegel zu verändern), wenn der Wert über 100% angehoben wird und die ISF-Werte größer werden (weniger Insulin erforderlich, um den Glukosespiegel zu verändern), wenn der Wert unter 100% abgesenkt wird.

### Zukünftiger ISF

Zukünftiger ISF wird bei den Dosierentscheidungen von oref1 eingesetzt. Der zukünftige ISF verwendet den gleichen TDD-Wert unter Berücksichtigung des Anpassungsfaktors wie er oben berechnet wurde. Er verwendet dann, abhängig von der jeweiligen Situation, unterschiedliche Glukosewerte:

* Wenn der Glukosespiegel stabil (+/- 3mg/dl) ist, und der vorhergesagte Glukosewert über dem Zielwert liegt, wird eine Kombination aus des unteren vorhergesagten Glukosewertes und des aktuellen Glukosewertes (jeweils 50%) verwendet.

* Wenn der erwartete Glukosewert über dem Zielwert liegt und die Glukosewerte steigen oder der erwartete Glukosewert liegt über dem aktuellen Wert, dann wird der aktuelle Glukosewert in der Berechnung genutzt.

In allen anderen Fällen wird der untere vorhergesagte Glukosewert verwendet.

### Aktivieren des TDD-basierten Empfindlichkeitsverhältnises für Basal und Glukose-Zielwertanpassungen (Empfindlichkeit und BZ anpassen)

Diese Einstellung ersetzt Autosens, und nutzt die letzten 24h TDD/7D TDD als Basis für die Erhöhung und Verringerung der Basalrate auf die gleiche Weise wie Standard Autosens es tut. Dieser berechnete Wert wird auch verwendet, um das Ziel anzupassen, wenn die Optionen "Empfindlichkeit und Glukosewert anpassen" aktiviert ist. Im Gegensatz zu Autosens wird durch diese Option der ISF-Werte nicht angepasst. 
