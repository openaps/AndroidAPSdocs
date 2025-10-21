(Open-APS-features-DynamicISF)=
# Dynamischer ISF (DynISF)

Bisher, mit **AMA** und **SMB**, wurde der **ISF** im **Profil** definiert und war für jeden definierten Zeitraum am Tag statisch. Im echten Leben ist ein **ISF** nicht statisch und ändert sich in Abhängigkeit vom **Glukosewert**: Bei einem hohen Glukosewert wird mehr Insulin benötigt, um den **Glukosewert** um 50mg/dl (3mmol/l) zu senken als bei einem niedrigen **Glukosewert**. [Autosens](#Open-APS-features-autosens) war der erste Algorithmus, der versuchte dieses Problem durch Anpassung des **ISF** außerhalb der Mahlzeiten zu lösen.

**Dynamischer ISF** (auch **DynISF** genannt) verfolgt das gleiche Ziel, ist aber weiter entwickelt, da es über den ganzen Tag (auch während der Mahlzeiten-Phasen) genutzt werden kann. Es wird nur erfahrenen Loopern, die sich gut mit der **AAPS**-Steuerungen und -Überwachung auskennen, empfohlen. Lies den Abschnitt [Dinge, die bei der Aktivierung des dynamischen ISF zu beachten sind](#dyn-isf-things-to-consider-when-activating-dynamicisf), bevor Du es ausprobierst.

```{admonition} CAUTION - Automations or Profile Percentage change
:class: warning

**Automatisierungen** sollten immer mit besonderer Vorsicht eingesetzt werden. Das gilt insbesondere für den **dynamischen ISF**.

Wenn Du den **dynamischen ISF** einsetzt, deaktiviere alle **Automatisierungsregeln, die eine temporäre **Profiländerung** vornehmen. Dadurch verhinderst Du, dass der **dynamische ISF** zu starke Korrekturboli abgibt, die zu einer Hypoglykämie führen könnten. Genau dafür ist der **dynamische ISF** gedacht und daher ist es auch nicht mehr nötig, **AAPS** bei hohen **Glukosewerten** durch Automatisierungen dazu zu bringen zusätzliches Insulin zur Korrektur abzugeben.

```

Um den **dynamischen ISF** nutzen zu können, müssen in der **AAPS**-Datenbank mindestens **AAPS**-Daten der letzten 7 Tage vorliegen.

## Was macht der dynamische ISF?

**Dynamischer ISF** passt den Faktor für die Insulinempfindlichkeit **ISF** dynamisch an und berücksichtigt dabei:

- Den Tages-Gesamtinsulinbedarf (**TDD**); und
- den aktuellen und die prognostizierten Glukosewerte.

Wenn der **dynamische ISF** genutzt wird, werden die im **Profil** hinterlegten **ISF**-Werte im Regelfall nicht mehr genutzt. Für den Fall, dass nicht genügend TDD-Daten in der **AAPS**-Datenbank zur Verfügung stehen (*z. B.* wegen der Neuinstallation der App) wird jedoch auf die Profilwerte als Fallback zurückgegriffen.

**SMB/AMA** - ein echtes Beispiel eines **Profils** mit statischem **ISF**, so wie es in der Praxis vorkommt und durch **SMB** und **AMA** genutzt wird.

![Static ISF](../images/DynamicISF/DynISF1.png)

**Dynamischer ISF** - ein Beispiel eines Benutzer-**ISF**s, der durch den **dynamischen ISF** geändert wird.

![Dyn ISF](../images/DynamicISF/DynISF2.png)

Der rot eingekreiste Bereich zeigt: `Profil-ISF` -> `ISF wie er von DynISF` berechnet wurde. <br/> Tippen auf diesen Abschnitt zeigt Zusatzinformationen wie zum Beispiel den **ISF** für den Bolus-Rechner und die KH-Verstoffwechselung (siehe [Weitere Anwendungen des ISF](#dynisf-other-usages-of-isf) unten).

Der **DynISF**-Wert kann auch in einem zusätzlichen Diagramm angezeigt werden, indem „Variable Empfindlichkeit“ als Diagramm-Daten aktiviert wird. Er wird als weiße Linie dargestellt (siehe roten Pfeil auf dem obigen Bild).

## Wie wird der dynamische ISF berechnet?

**Dynamic ISF** verwendet das Modell von Chris Wilson, um **ISF** anstelle des statischen **ISF**-Wertes zu ermitteln, der im **Profil** festgelegt wurde. Weitergehende Erklärungen findest Du (in englischer Sprache) hier: [Chris Wilson on Insulin Sensitivity (Correction Factor) with Loop and Learn, 2/6/2022](https://www.youtube.com/watch?v=oL49FhOts3c).

Die hinterlegte **Dynamic ISF**-Gleichung lautet: `ISF = 1800 / ((TDD * DynISF-Anpassungsfaktor) * Ln (( aktueller BG / Insulindivisor) + 1 ))`

Die in dieser Gleichung verwendeten Variablen, sind unten genauer beschrieben.<br/> Anmerkung: `Ln` steht für den natürlichen Logarithmus, eine mathematische Funktion.

Die Implementierung verwendet die oben gezeigt Gleichung zur Berechnung des aktuellen **ISF** und in den oref1-[Prognosen für **IOB**, **ZT** (zero-temping) und **UAM**](#aaps-screens-prediction-lines). Es wird auch für **COB** und im Bolus-Rechner verwendet (siehe [Weitere Nutzung des ISF](#dynisf-other-usages-of-isf) unten).

### TDD (Total Daily Dose; dt. Tages-Gesamtinsulinbedarf)
TDD nutzt eine Kombination der folgenden Werte:
1.  durchschnittlicher **TDD** der letzten 7 Tage;
2.  den **TDD** der Vortages; und
3.  einen gewichteten Durchschnitt des Insulinbedarfs der letzten acht (8) Stunden extrapoliert auf 24 Stunden.

Die in der obigen Gleichung verwendete **TDD** wird mit einem Drittel in den obigen Werten gewichtet.

### Dynamischer ISF Anpassungsfaktor

Dieser wird in den **Einstellungen** gesetzt und wird dazu genutzt den **dynamischen ISF** mehr oder weniger aggressiv zu machen. Vgl. hierzu den Abschnitt [Einstellungen](#dyn-isf-preferences) unten.

### Insulin-Divisor
Der Insulin-Divisor ist vom Wirkmaximum des genutzten Insulins abhängig und ist umgekehrt proportional zum Wirkmaximum. Für Lyumjev ist dieser Wert 75, für Fiasp 65, und übliches schnell wirkendes Insulin 55.

### ISF für Bolusentscheidungen basiert auf vorhergesagten Glukosewerten

Die dynamische Empfindlichkeit wird mit dem **aktuellen Glukosewert** berechnet und als aktueller ISF in **AAPS** angezeigt. Für Bolusentscheidungen berechnet und verwendet der oref1-Algorithmus stattdessen den **zukünftigen ISF** (engl. Future ISF).

Dies wird getan, um zu hohe Insulinabgaben zu verhindern, wenn der **Glukosewert** niedrig ist oder voraussichtlich niedrig sein wird.

**Future ISF** (dt. zukünftiger ISF) nutzt die gleiche Formel, so wie sie oben beschrieben ist, mit der Ausnahme, dass es den **minimum predicted BG** (dt. niedrigste vorhergesagte Glukosewert) anstelle des **current BG** (dt. aktuellen Glukosewerts) verwenden kann. Der **vorhergesagte niedrigste Glukosewert**, [wie durch oref1](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) berechnet, ist der Minimalwert, den Dein Glukosewert im Vorhersagezeitraum annehmen kann.

* Wenn der aktuelle **Glukosewert** über dem Ziel ist  <br/> **und** die **Glukosewerte** sich nur um +/- 3 mg/dl ändern:  <br/>Wird der Glukosewert in der Formel wie folgt genutzt:  `average(minimum predicted BG, current BG)`. Anm.: Das ist der Durchschnittswert der beiden Werte.
* Wenn der mögliche **Glukosewert** (engl. eventual BG) über dem Ziel liegt und die Glukosewerte steigen,<br/>  
  **oder** der mögliche **Glukosewert** liegt oberhalb des aktuellen **Glukosewerts**:<br/>Es wird als Glukosewert in der Formel der folgende Wert verwendet: aktueller Glukosewert (`current BG`).
* In allen anderen Fällen wird in der Formel als <br/>Glukosewert der niedrigste vorhergesagte Glukosewert (`minimum predicted BG`) genutzt.

Die Screenshots unten geben eine vereinfachte Erklärung der oben beschriebenen Szenarien. Orange Punkte werden für **predicted BG**, lila-farbene Punkte für **average(predicted BG, current BG)** und blaue Punkte für **current BG** verwendet.

![DynISF_BGValue.png](../images/DynamicISF/DynISF_BGValue.png)

(dynisf-other-usages-of-isf)=
## Weitere Nutzung des ISF

### ISF und COB-Absorption (KH-Verstoffwechselung)

Wie auf der Seite zur [Berechnung der aktiven Kohlenhydrate](../DailyLifeWithAaps/CobCalculation.md) (COB) beschrieben, wird die Verstoffwechselung (KH-Aufnahme) mit dieser Formel berechnet:   
`absorbed_carbs = deviation * ic / isf`  
Bei Verwendung des **dynamischen ISF**, ist der dort verwendete **ISF** der Durchschnitt dynamischen ISF-Werte der letzten 24h.

### ISF im Bolus-Rechner

Im [Bolus-Rechner](#aaps-screens-bolus-wizard) wird der **ISF** genutzt, um bei einem hohen **Glukosewert**, (über dem Ziel), die Korrektur zu berechnen.

Bei aktiviertem **dynamischen ISF**, ist der hier genutzte **ISF** der Durchschnittswert der ISF-Werte der letzten 24 Stunden.

(dyn-isf-preferences)=
## Einstellungen

**Aktiviere dynamische Empfindlichkeit** in [Einstellungen > OpenAPS SMB](#Preferences-openaps-smb-settings). Mit der Aktivierung werden neue Einstellungsoptionen verfügbar.

![Dynamic ISF settings](../images/Pref2020_DynISF.png)

(dyn-isf-adjustment-factor)=
### Dynamischer ISF Anpassungsfaktor
Der **dynamische ISF** geht von der Grundidee aus, dass Personen, die den gleichen **TDD** haben auch die gleiche Empfindlichkeit haben. Da die Empfindlichkeiten in der Realität aber tatsächlich verschieden sind, kann mit dem **Anpassungsfaktor** eine Anpassung an die eigene Situation vorgenommen werden. Der Faktor legt fest, ob Du empfindlicher oder weniger empfindlich auf Insulin reagierst, als es die „Standard"-Person tut.

Der **Anpassungsfaktor** kann zwischen 1% und 300% liegen. Er wirkt als Multiplikator für den **TDD**-Wert.

* Eine Erhöhung des Wertes über 100% macht **DynISF** aggressiver: Die **ISF**-Werte werden *kleiner* (_d. h._ es wird mehr Insulin benötigt, um die **Glukosewerte** zu senken)
* Eine Absenkung des Wertes unter 100% macht **DynISF** weniger aggressiv: Die **ISF**-Werte werden größer (_d. h. _ es wird weniger Insulin benötigt, um die **Glukosewerte** zu senken).

Der **Anpassungsfaktor** wird auch bei der Aktivierung eines [**prozentualen Profilwechsels**](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) verändert. Ein niedrigerer **Profil-Prozentsatz** senkt den **Anpassungsfaktor** und ein höherer **Profil-Prozentsatz** hebt in.

Wenn beispielsweise der **Anpassungsfaktor** 80% ist, und es wird ein **Profilwechsel** auf 80% ausgelöst, dann ist der dann entstehende **Anpassungsfaktor** `0,8*0,8=0,64`.

Das bedeutet, dass Du bei aktiviertem **dynamischen ISF**, einen **prozentualen Profilwechsel** nutzen kannst, um Deine Empfindlichkeit manuell zu „finetunen“. Dies kann für körperliche Aktivität (niedrigerer Prozentwert), Krankheit (höherer Prozentwert), etc. sehr helfen.

### BG-Pegel, unterhalb dessen die Aussetzung wegen niedriger Glukoseaussetzung eintritt

**Glukosewert**, unterhalb dessen die Insulinzufuhr ausgesetzt wird. Der Standardwert verwendet das Standard-Ziel-Modell. Du kannst den Wert zwischen 60 mg/dl (3,3 mmol/l) und 100 mg/dl (5,5 mmol/l) einstellen. Werte unterhalb von 65 bzw. 3,6 führen dazu, dass das Standard-Modell genutzt wird.

### Aktivieren des TDD-basierten Empfindlichkeitsverhältnises für Basal und Glukose-Zielwertanpassungen

Diese Einstellung ersetzt Autosens, und nutzt die letzten 24h **TDD**/7D **TDD** als Basis für Anpassung der Basalrate genauso wie es Standard-Autosens es tut. Dieser berechnete Wert wird auch verwendet, um das Ziel anzupassen, wenn die Optionen "Empfindlichkeit und Glukosewert anpassen" aktiviert ist. Im Gegensatz zu Autosens wird durch diese Option der **ISF**-Werte nicht angepasst.

(dyn-isf-things-to-consider-when-activating-dynamicisf)=
## Dinge, die bei der Aktivierung des dynamischen ISF zu beachten sind

* **Dynamischer ISF** wird nur erfahrenen Loopern, die sich gut mit der **AAPS**-Steuerungen und -Überwachung auskennen, empfohlen. Du hast idealerweise bereits mit **SMB** eine gute Glukosespiegel-Einstellung erreicht, bevor Du auf den **dynamischen ISF** umsteigst.
* Wie oben schon erwähnt, schalte alle [**Automatisierungen**](../DailyLifeWithAaps/Automations.md), die ein **prozentuales Profil** in Abhängigkeit vom **Glukosewert** aktivieren, aus. Es kann sonst sein, dass zu aggressiv reagiert und zu viel Insulin abgegeben wird! Das ist schon im Algorithmus des **dynamischen ISF** berücksichtigt.
* Ein [prozentuales Proflil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) wird bei der Berechnung des dynamischen ISF berücksichtigt (siehe [Dynamischer ISF Anpassungsfaktor](#dyn-isf-adjustment-factor) oben). Es ist schlecht ein **prozentuales Profil**, das nicht 100% entspricht, über einen längeren Zeitraum zu nutzen. Wenn Du erkennst, dass sich Dein **Profil** geändert hat, erstelle ein neues **Profil** mit Deinen überarbeiteten Werten, um das **Profil** mit dem entsprechenden Prozentwert nachzubilden.
* **Dynamischer ISF** funktioniert möglicherweise nicht bei jedem. In den folgenden Situationen kann es ganz konkret sein, dass Du überraschende Ergebnisse erhältst:
  * Variabler Lebensstil (unregelmäßiges Essen oder unregelmäßige körperliche Aktivitäten)
  * Starke Unterschiede im Gesamtinsulinbedarf des Tages (TDD) oder hohe Schwankungen in der täglichen Insulin-Empfindlichkeit.
* Es gibt keine genaue Anleitung, wie der Wert des **Anpassungsfaktors** erstmalig gesetzt werden sollte. Als Ausgangspunkt: Unter der Annahme, dass Deine **Profil**werte korrekt sind, Du im Zielbereich bist und der **Glukosewert**-Verlauf stabil ist, entspricht der **DynISF**-Wert ungefähr dem Wert, den Du vorher in Deinem **Profil** hattest.<br/>Wenn Du erkennst, dass der **dynamische ISF** zu aggressiv ist, senke den **Anpassungsfaktor** und umgekehrt.
* Auch wenn **DynISF** nicht den **Profil-ISF** verwendet, solltest Du, sofern Du erkennst, dass sich Deine Empfindlichkeit stark von dem unterscheidet, was zuvor in Deinem **Profil** gespeichert wurde, Dein Profil mit den geänderten Werten aktualisieren und aktuell halten. Das kann dann zum Tragen kommen, wenn Du Deine **AAPS**-Daten verlierst (_z. B. _ neues Smartphone, neue **AAPS**-Version…), da der **Profil-ISF** als Fallback für 7 Tage verwendet wird.