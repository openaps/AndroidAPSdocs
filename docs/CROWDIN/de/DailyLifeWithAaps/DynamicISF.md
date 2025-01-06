(Open-APS-features-DynamicISF)=
# Dynamischer ISF (DynISF)
**Dynamic ISF** was added in **AAPS** version 3.2 and requires **[Objective 11](#objectives-objective11)** to be started before **Dynamic ISF** can be activated. Check **Enable dynamic sensitivity** in [Preferences > OpenAPS SMB](#Preferences-openaps-smb-settings) to activate. **Dynamischer ISF** wird nur erfahrenen Loopern, die sich gut mit der **AAPS**-Steuerungen und -Überwachung auskennen, empfohlen.

Um den **dynamischen ISF** effektiv einsetzen zu können, benötigt die **AAPS**-Datenbank mindestens fünf (5) Tage mit **AAPS**-Daten.

**Dynamischer ISF** passt den Faktor für die Insulinempfindlichkeit **ISF** dynamisch an und berücksichtigt dabei:

- Den Tages-Gesamtinsulinbedarf (**TDD**); und
- den aktuellen und die prognostizierten Glukosewerte.

**Dynamischer ISF** nutzt das Modell von Chris Wilsons zur Bestimmung des**ISF** anstelle der statischen **ISF-****Profil**-Einstellungen.

The **Dynamic ISF** equation implemented is: `ISF = 1800 / (TDD * Ln (( glucose / insulin divisor) +1 ))`

SMB/AMA - ein Beispiel eines Benutzer-**Profils** mit statischem **ISF**, so wie er vom Nutzenden hinterlegt wurde und von **SMB** und **AMA** genutzt wird.

![Static ISF](../images/DynISF1.png)

Dynamischer ISF - ein Beispiel eines Benutzer-**ISF**s, der durch **Dynamischer ISF** geändert werden muss.

![Dyn ISF](../images/DynISF2.png)

The section circled in red shows: <br/> Alg:`DynamicISF value (based on TDD)`<br/> `profile ISF` -> `ISF as calculated by DynISF (used in SMB algorithm)` (`ISF used for COB calculations and bolus wizard`)

Die Implementierung verwendet die oben gezeigt Gleichung zur Berechnung des aktuellen **ISF** und in den oref1-Prognosen für **IOB**, **ZT** und **UAM**. It is also used for **COB** and in the bolus wizard. Further discussion can be found here: [Chris Wilson on Insulin Sensitivity (Correction Factor) with Loop and Learn, 2/6/2022](https://www.youtube.com/watch?v=oL49FhOts3c).

## TDD (Total Daily Dose; dt. Tages-Gesamtinsulinbedarf)
TDD nutzt eine Kombination der folgenden Werte:
1.  durchschnittlicher **TDD** der letzten 7 Tage;
2.  den **TDD** der Vortages; und
3.  einen gewichteten Durchschnitt des Insulinbedarfs der letzten acht (8) Stunden extrapoliert auf 24 Stunden.

Der in der obigen Gleichung verwendete **TDD** ist mit einem Drittel zu den obigen Werten gewichtet.

## Insulin-Divisor
Der Insulin-Divisor ist vom Wirkmaximum des genutzten Insulins abhängig und ist umgekehrt proportional zum Wirkmaximum. Für Lyumjev ist dieser Wert 75, für Fiasp 65, und übliches schnell wirkendes Insulin 55.

## Zukünftiger ISF

Zukünftiger **ISF** wird bei den Dosierentscheidungen von oref1 eingesetzt.  Zukünftiger **ISF** verwendet den gleichen **TDD**-Wert und berücksichtigt den Anpassungsfaktor (oben beeschrieben). Er verwendet dann, abhängig von der jeweiligen Situation, unterschiedliche Glukosewerte:

* Wenn der Glukosespiegel stabil (+/- 3mg/dl) ist, und der vorhergesagte **Glukosewert** über dem Zielwert liegt, wird eine Kombination des unteren vorhergesagten **Glukosewertes** und des aktuellen **Glukosewertes** (jeweils 50 %) verwendet.

* Wenn der vorhergesagte **Glukosewert** über dem Zielwert liegt und der Glukosespiegel steigt, oder der vorhergesagte **Glukosewert** über dem aktuellen **Glukosewert** liegt, dann wird der aktuelle **Glukosewert** verwendet.

In allen anderen Fällen wird der untere vorhergesagte **Glukosewert** verwendet.

## Einstellungen

Check **Enable dynamic sensitivity** in [Preferences > OpenAPS SMB](#Preferences-openaps-smb-settings) to activate. New settings become available once checked.

![Dynamic ISF settings](../images/Pref2020_DynISF.png)

### Dynamischer ISF Anpassungsfaktor
Der Anpassungsfaktor kann zwischen 1 % und 300 % gewählt werden. Dieser Anpassungfaktor ist ein Multiplikator für den **TDD**-Wert und führt dazu, dass die **ISF**-Werte *kleiner* werden (d.h. es ist mehr Insulin erforderlich, um den Glukosespiegel zu verändern), wenn der Wert über 100 % angehoben wird und die ISF-Werte *größer* werden (weniger Insulin erforderlich, um den Glukosespiegel zu verändern), wenn der Wert unter 100 % abgesenkt wird.

### BG-Pegel, unterhalb dessen die Aussetzung wegen niedriger Glukoseaussetzung eintritt

BG value below which insulin is suspended. Default value uses standard target model. User can set value between 60mg/dl (3.3mmol/l) and 100mg/dl(5.5mmol/l). Values below 65/3.6 result in use of default model.

### Aktivieren des TDD-basierten Empfindlichkeitsverhältnises für Basal und Glukose-Zielwertanpassungen

Diese Einstellung ersetzt Autosens, und nutzt die letzten 24h **TDD**/7D **TDD** als Basis für Anpassung der Basalrate genauso wie es Standard-Autosens es tut. Dieser berechnete Wert wird auch verwendet, um das Ziel anzupassen, wenn die Optionen "Empfindlichkeit und Glukosewert anpassen" aktiviert ist. Im Gegensatz zu Autosens wird durch diese Option der **ISF**-Werte nicht angepasst.

## ACHTUNG - Automatisierungen oder prozentuale Profil-Erhöhung
**Automatisierungen** sollten immer mit Vorsicht verwendet werden. Dies ist besonders beim **Dynamischer ISF** der Fall.

Wenn der **Dynamische ISF** aktiv eingreift, solltest Du darauf achten, ob eine temporäre prozentuale **Profil**-Erhöhung durch eine **Automatisierungs**-Regel oder eine ähnliche prozentuale **Profilanpassung** zu einem **Dynamischen ISF** führt, der zu zu aggressiven Korrekturboli führt, die wiederum eine Hypo zur Folge haben können.
