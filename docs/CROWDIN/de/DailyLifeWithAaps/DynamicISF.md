(Open-APS-features-DynamicISF)=
# Dynamischer ISF (DynISF)

Bisher, mit **AMA** und **SMB**, wurde der **ISF** im **Profil** definiert und war für jeden definierten Zeitraum am Tag statisch. Im echten Leben ist ein **ISF** nicht statisch und ändert sich in Abhängigkeit vom **Glukosewert**: Bei einem hohen Glukosewert wird mehr Insulin benötigt, um den **Glukosewert** um 50mg/dl (3mmol/l) zu senken als bei einem niedrigen **Glukosewert**. [Autosens](#Open-APS-features-autosens) war der erste Algorithmus, der versuchte dieses Problem durch Anpassung des **ISF** außerhalb der Mahlzeiten zu lösen.

**Dynamischer ISF** (auch **DynISF** genannt) verfolgt das gleiche Ziel, ist aber weiter entwickelt, da es über den ganzen Tag (auch während der Mahlzeiten-Phasen) genutzt werden kann. Es wird nur erfahrenen Loopern, die sich gut mit der **AAPS**-Steuerungen und -Überwachung auskennen, empfohlen. Lies den Abschnitt [Dinge, die bei der Aktivierung des dynamischen ISF zu beachten sind](#dyn-isf-things-to-consider-when-activating-dynamicisf), bevor Du es ausprobierst.

```{admonition} CAUTION - Automations or Profile Percentage change
:class: warning

**Automatisierungen** sollten immer mit besonderer Vorsicht eingesetzt werden. Das gilt insbesondere für den **dynamischen ISF**.

Wenn Du den **dynamischen ISF** einsetzt, deaktiviere alle **Automatisierungsregeln, die eine temporäre **Profiländerung** vornehmen. Dadurch verhinderst Du, dass der **dynamische ISF** zu starke Korrekturboli abgibt, die zu einer Hypoglykämie führen könnten. This is the exact purpose of **Dynamic ISF** and so there is no need for **AAPS** to be told to provide additional insulin by way of Automation in the event of high **BGs**.

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

When using the [Bolus wizard](#aaps-screens-bolus-wizard), **ISF** is used if **BG** is above target to add a correction.

When using **Dynamic ISF**, the **ISF** used here is the average of past 24h Dynamic ISF values.

(dyn-isf-preferences)=
## Einstellungen

**Aktiviere dynamische Empfindlichkeit** in [Einstellungen > OpenAPS SMB](#Preferences-openaps-smb-settings). New settings become available once selected.

![Dynamic ISF settings](../images/Pref2020_DynISF.png)

(dyn-isf-adjustment-factor)=
### Dynamischer ISF Anpassungsfaktor
**Dynamic ISF** works based on a single rule which is supposed to apply to everyone, implying that people having the same **TDD** would have the same sensitivity. As each user has their own personal sensitivity, the **Adjustment Factor** allows the user to define whether they are more or less sensitive to insulin than the "standard" person.

The **Adjustment Factor** is a value between 1% and 300%. This acts as a multiplier on the **TDD** value.

* Increasing this value above 100 % makes **DynISF** more aggressive: the **ISF** values become *smaller* (_i.e._ more insulin required to decrease **BG** levels a small amount)
* Lowering this value under 100% makes **DynISF** less aggressive: the **ISF** values become larger (_i.e._ less insulin required to decrease **BG** levels a small amount).

The **Adjustment Factor** is also altered when activating a [**Profile Switch** with percentage](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md). A lower **Profile Percentage** will lower the **Adjustment Factor**, and vice versa in respect of higher **Profile Percentage**.

For example, if your **Adjustment Factor** is 80%, and **Profile Switch** to 80% is actioned , the resulting **Adjustment Factor** will be `0.8*0.8=0.64`.

This means that, when using **DynISF**, you can use **Profile Percentage** to temporarily fine tune your sensitivity manually. This can be useful for physical activity (lower percentage), illness (higher percentage), etc.

### BG-Pegel, unterhalb dessen die Aussetzung wegen niedriger Glukoseaussetzung eintritt

**BG** value below which insulin is suspended. Default value uses the standard target model. A user can set this value between 60mg/dl (3.3mmol/l) and 100mg/dl(5.5mmol/l). Values below 65/3.6 result in use of the default model.

### Aktivieren des TDD-basierten Empfindlichkeitsverhältnises für Basal und Glukose-Zielwertanpassungen

Diese Einstellung ersetzt Autosens, und nutzt die letzten 24h **TDD**/7D **TDD** als Basis für Anpassung der Basalrate genauso wie es Standard-Autosens es tut. Dieser berechnete Wert wird auch verwendet, um das Ziel anzupassen, wenn die Optionen "Empfindlichkeit und Glukosewert anpassen" aktiviert ist. Im Gegensatz zu Autosens wird durch diese Option der **ISF**-Werte nicht angepasst.

(dyn-isf-things-to-consider-when-activating-dynamicisf)=
## Dinge, die bei der Aktivierung des dynamischen ISF zu beachten sind

* **Dynamischer ISF** wird nur erfahrenen Loopern, die sich gut mit der **AAPS**-Steuerungen und -Überwachung auskennen, empfohlen. Users should ideally have attained good control with **SMB** before moving onto **Dynamic ISF**.
* As mentioned above, turn off all [**Automations**](../DailyLifeWithAaps/Automations.md) which activate a **Profile Percentage** in relation to **BG** because it will be too aggressive and may over deliver in insulin! This is already part of the **Dynamic ISF** algorithm.
* [Profile Percentage](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) is taken into account for the Dynamic ISF calculation (see [Dynamic ISF Adjustment Factor](#dyn-isf-adjustment-factor) above). It is bad practice to use a **Profile Percentage** other than 100% for a long time. If you determine that your **Profile** has changed, create a new **Profile** with your revised values in order to replicate the **Profile** with a specific percentage.
* **Dynamic ISF** may not work for everyone. Specifically, you may see unexpected results if one of these situations apply to you:
  * Variable lifestyle (inconsistent eating or physical activity patterns)
  * Inconsistent TDD or sensitivity from day to day.
* There is no precise guide to set the initial value of the **Adjustment Factor**. However, as a starting point: assuming your **Profile** values are correct, when you are in range and **BG** levels are flat, the **DynISF** value should be about the same as the one you had in your **Profile** before.<br/>If you see that **Dynamic ISF** is too aggressive, lower the **Adjustment Factor**, and vice-versa.
* Even though **DynISF** does not use **Profile ISF** at all, if you notice that your sensitivity is very different from what was previously stored in your **Profile**, you should consider keeping it up-to-date. This may be useful in case you loose your **AAPS** data (_i.e._ new phone, new **AAPS** version…), as your **Profile ISF** will be used as fallback for the next 7 days.