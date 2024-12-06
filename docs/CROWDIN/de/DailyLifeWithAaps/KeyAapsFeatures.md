# OpenAPS Funktionen

(Open-APS-features-autosens)=

## Autosens

- Autosens is an algorithm which looks at blood glucose deviations (positive/negative/neutral).
- Er versucht herauszufinden, wie empfindlich/resistent Du aufgrund dieser Abweichungen bist.
- Die oref-Implementierung in **OpenAPS** läuft mit einer Kombination von Daten aus 24 und 8 Stunden. Es wird das "empfindlichere" Ergebnis der beiden Berechnungen verwendet.
- In versions prior to **AAPS 2.7**, the user had to choose between 8 or 24 hours manually.
- From **AAPS 2.7** on Autosens in **AAPS** will switch between a 24 and 8 hours window for calculating sensitivity. It will pick whichever one is more sensitive. 
- Wenn Du bisher oref1 genutzt hast, wirst Du wahrscheinlich bemerken, dass das System weniger dynamisch auf Veränderungen reagiert, da zwischen 8 und 24 Stunden gewechselt wird.
- Der Wechsel der Kanüle oder ein Profilwechsel setzen Autosens auf 100% zurück. Ausnahme ist ein prozentualer Profilwechsel mit festgelegter Dauer. Bei diesem wird Autosens nicht zurückgesetzt.
- Autosens passt Deine Basalrate und den ISF an (d.h. Nachahmen der Effekte einer Profilverschiebung).
- If continuously eating carbs over an extended period, Autosens will be less effective during that period as carbs are excluded from **BG** delta calculations.

(Open-APS-features-super-micro-bolus-smb)=

## Super Micro Bolus (SMB)

**SMB**, the shortform of **Super micro bolus**, is an OpenAPS feature introduced from 2018 onwards, within the Oref1 algorithm. In contrast to **AMA**, **SMB** does not use temporary basal rates to control glucose levels, but mainly **small super micro boluses**. In situations where **AMA** would add 1.0 IU insulin using a temporary basal rate, **SMB** delivers several super micro boluses in small steps at **5 minute intervals**, e.g. 0.4 IU, 0.3 IU, 0.2 IU and 0.1 IU. Gleichzeitig wird die laufende Basalrate aus Sicherheitsgründen für eine bestimmte Dauer auf 0 IE/h gesetzt, damit keine Überdosierung erfolgt (**“zero-temping”**). This allows the system to adjust the blood glucose faster than with the temporary basal rate increase in **AMA**.

Thanks to SMB, it may be sufficient for meals containing only "slow" carbs to inform the system of the planned amount of carbohydrate and leave the rest to **AAPS**. Dies führt aber womöglich zu höheren postprandialen Spitzen, weil kein Spritz-Ess-Abstand (SEA) eingehalten werden kann. Or you can give, if necessary with pre-bolusing, a **start bolus**, which **only partly** covers the carbohydrates (e.g. 2/3 of the estimated amount) and let **SMB** deliver the rest of the insulin.

![SMBs on main graph](../images/SMBs.png)

SMBs are shown on the main graph with blue triangles. Tap on the triangle to see how much insulin was delivered, or use the [Treatments tab](#aaps-screens-treatments).

**SMB's** features contain some safety mechanisms:

1. **Largest single SMB dose**  
    The largest single SMB dose can only be the smallest value of:
    
    - Wert, der der aktuellen Basalrate (wie sie Autosens angepasst hat) für die unter „SMB-Basal-Limit in Minuten“ voreingestellte Dauer entspricht, z.B. Basalmenge der kommenden 30 Minuten, oder
    - die Hälfte der aktuell benötigten Insulinmenge oder
    - der verbleibende Anteil deines maxIOB-Wertes in den Einstellungen.

2. **Low temp basal rates**  
    Low temporary basal rates (called 'low temps') or temporary basal rates at 0 U/h (called 'zero-temps') are activated more in **SMB**. This is by design for safety reasons and has no negative effects if the **Profile** is set correctly. On the main graph, the IOB curve (yellow thin line) is more meaningful than the course of the temporary basal rates.

3. **Un-Announced Meals**  
    Additional calculations to predict the course of glucose, e.g. by **UAM** (un-announced meals). Even without manual carbohydrate input from the user, **UAM** can automatically detect a significant increase in glucose levels due to meals, adrenaline or other influences and try to adjust this with **SMB**. Dies funktioniert aber zur Sicherheit auch andersherum und kann bei unvorhergesehen schnellem Glukoseabfall den SMB früher stoppen. Deshalb sollte UAM bei SMB auch immer aktiv sein.

**You must have started [objective 9](#objectives-objective9) to use SMB.**

See also :

- [OpenAPS documentation for SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb).
- [OpenAPS documentation for oref1 SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)
- [Tim's info on SMB](https://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/).

The settings for OpenAPS SMB are described below.

(Open-APS-features-max-u-h-a-temp-basal-can-be-set-to)=

### Max U/h a temp basal can be set to

Diese Sicherheitseinstellung legt fest, welche maximale temporäre Basalrate die Insulinpumpe abgeben darf. It is also known as **max-basal**.

Der Wert wird in IE pro Stunde angegeben (IE/h). Es wird empfohlen, hier etwas vernünftiges einzugeben. A good recommendation for setting this parameter is:

    max-basal = highest basal rate x 4
    

Wenn zum Beispiel die höchste Basalrate in deinem Profil 0.5IE/h war, kannst du das mit 4 multiplizieren, um einen Wert von 2IE/h zu erhalten.

**AAPS** limits this value as a 'hard limit' according to [Preferences > Treatments safety > Patient Type](#preferences-patient-type). The hard limits are as follows:

- Kind: 2
- Jugendlicher: 5
- Erwachsener: 10
- Insulinresistenter Erwachsener: 12
- Schwangere: 25

*See also [overview of hard-coded limits](#overview-of-hard-coded-limits).*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over)=

### Maximum total IOB OpenAPS can’t go over

This value determines the maximum **Insulin on Board** (basal and bolus IOB) that **AAPS** will remain under while running in closed loop mode. It is also known as **maxIOB**.

Liegt das aktuelle IOB (z.B nach einem Mahlzeit-Bolus) über dem festgelegten Wert, dann wird die Insulinabgabe durch den Loop unterbunden, bis die IOB-Grenze wieder unterschritten ist.

A good start for setting this parameter is:

    maxIOB = mittlerer Mahlzeitenbolus + 3x höchste tägliche Basalrate
    

Be careful and patient when adjusting your **max-IOB**. Das ist sehr individuell und hängt stark vom durchschnittlichen Gesamtinsulinbedarf ab (total daily dose = TDD).

**AAPS** limits this value as a 'hard limit' according to [Preferences > Treatments safety > Patient Type](#preferences-patient-type). The hard limits are as follows:

- Kind: 3
- Jugendlicher: 7
- Erwachsener: 12
- Insulinresistenter Erwachsener: 25
- Schwangere: 40

*See also [overview of hard-coded limits](#overview-of-hard-coded-limits).*

Note : When using **SMB**, the **max-IOB** is calculated differently than in AMA. In **AMA**, maxIOB is a safety-parameter for basal **IOB**, while in SMB-mode, it also includes bolus IOB.

Siehe auch [OpenAPS-Dokumentation zu SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb).

### Enable Autosens

[Autosens](#autosens) looks at blood glucose deviations (positive/negative/neutral). Dabei wird anhand dieser Abweichungen ermittelt, wie empfindlich / resistent Du auf Insulin reagierst und Deine Basalrate und den ISF entsprechend angepasst.

### Aktiviere SMB

Aktiviere diese Option, um die SMB-Funktionalität zu nutzen. If disabled, no **SMBs** will be given.

(Open-APS-features-enable-smb-with-high-temp-targets)=

### Aktiviere SMB bei temporären Zielen oberhalb des regulären Ziels

If this setting is enabled, **SMBs** will still be delivered even if the user has selected a high **Temp Target** (defined as anything above 100mg/dL or 5.6mmol/l, regardless of **Profile** target). Bei ausgeschalteter Option werden SMBs nicht abgegeben. For example, if this option is disabled, **SMBs** can be disabled by setting a **Temp Target** above 100mg/dL or 5.6mmol/l. This option will also disable **SMBs** regardless of what other condition is trying to enable SMB.

If this setting is enabled, **SMB** will only be enabled with a high temp target if **Enable SMB with temp targets** is also enabled.

(Open-APS-features-enable-smb-always)=

### SMB immer aktivieren

If this setting is enabled, SMB is enabled always enabled(independent of COB, temp targets or boluses). Wenn diese Einstellung aktiviert ist, sind die übrigen Bedingungen ohne Einfluss und werden nicht berücksichtigt. However, if **Enable SMB with high temp targets** is disabled and a high temp target is set, SMBs will be disabled.

Diese Option ist nur für Sensorsysteme, die gut gefilterte (nicht rauschende/springende) Glukosewerte liefert, verfügbar.

- Currently, it is only available with a Dexcom G5 or G6, if using the [Build your own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) or “[native mode](#smoothing-xdrip-dexcom-g6)” in xDrip+. If a BG value has too large of a deviation, the G5/G6 doesn’t send it and waits for the next value 5 minutes later.
- For other CGM/FGM like Freestyle Libre, **SMB always** is deactivated until there is a better noise smoothing plugin. 
- You can find more [here](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Aktiviere SMB während aktiver Kohlenhydrate.

Wenn diese Einstellung aktiviert ist, werden SMB aktiviert, wenn der COB größer als 0 (z.B. nach Mahlzeiten) ist.

### Aktiviere SMB bei aktiven temporären Zielen

Wenn diese Option eingeschaltet ist, werden SMBs bei einem beliebigen gesetzten temporären Ziel (Bald essen, Aktivität, Hypo oder Individuell) abgegeben. If this setting is enabled but **Enable SMB with high temp targets** is disabled, SMB will be enabled when a low temp target is set (below 100mg/dL or 5.6mmol/l) but disabled when a high temp target is set.

### Aktiviere SMB nach Mahlzeiten

Bei eingeschalter Option, sind SMBs für einen Zeitraum von 6h ab dem Zeitpunkt für den KH angekündigt sind aktiv, auch wenn COB mittlerweile 0 ist (keine aktiven KH mehr vorhanden sind).

Diese Option ist nur für Sensorsysteme, die gut gefilterte (nicht rauschende/springende) Glukosewerte liefert, verfügbar.

- Currently, it is only available with a Dexcom G5 or G6, if using the [Build your own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) or “[native mode](#smoothing-xdrip-dexcom-g6)” in xDrip+. If a BG value has too large of a deviation, the G5/G6 doesn’t send it and waits for the next value 5 minutes later.
- For other CGM/FGM like Freestyle Libre, **SMB always** is deactivated until there is a better noise smoothing plugin.
- You can find more [here](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Wie häufig SMBs abgegeben werden (in Min.)

Diese Funktion beschränkt die Häufigkeit der SMBs. Dieser Wert bestimmt die Zeit, die zwischen der Abgabe der einzelnen SMBs mindestens vergehen muss. Sobald ein neuer Glukosewert empfangen wird (in der Regel alle 5 Minuten), läuft der Loop und führt die entsprechenden Berechnungen durch. Ziehe davon 2 Minuten ab, um dem Loop genug Zeit zu geben die Berechnungen abzuschließen. E.g. if you want SMB to be given every loop run, set this to 3 minutes.

Standardwert: 3 Min.

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

### SMB-Basal-Limit in Minuten

Dies ist eine wichtige Sicherheitseinstellung. Dieser Wert legt fest, wie viel SMB in einer bestimmten Zeit auf der Basis der Menge an Basalinsulin abgegeben werden kann, wenn es von COBs abgedeckt wird.

Eine Erhöhung des Wertes macht den SMB aggressiver. Zu Beginn solltest Du mit einem Standardwert von 30 Minuten starten. Wenn Du mehr Erfahrung gesammelt hast, erhöhe den Wert in 15 Minuten-Schritten und schaue Dir die Effekte über mehrere Mahlzeiten hinweg genau an.

Ein Wert über 90 Minuten führt dazu, dass der Algorithmus mit einer temporären 0 IE/h-Basalrate (“zero-temp”) einen fallenden Glukosewert möglicherweise nicht mehr sicher abfangen kann. Daher wird davon abgeraten, einen Wert über 90 Minuten hinaus, zu setzen. Gerade in der Testphase neuer Einstellungen, solltest Du Alarme nutzen, um Dich vor einer Hypo frühzeitig zu warnen.

Standardwert: 30 Min.

### Aktiviere UAM

Wenn du diese Option aktivierst, dann kann der SMB unangekündigte Mahlzeiten erkennen. This is helpful if you forget to tell **AAPS** about your carbs or estimate your carbs wrong and the amount of entered carbs is wrong or if a meal with lots of fat and protein has a longer duration than expected. Without any carb entry, UAM can recognize fast glucose increase caused by carbs, adrenaline, etc., and tries to adjust it with SMBs. Dies funktioniert aber auch andersherum: wenn der Glukosewert schnell sinkt, wird der SMB früher gestoppt.

**Deshalb sollte UAM bei SMB auch immer aktiv sein.**

### Empfindlichkeit erhöht den Zielwert

Wenn diese Option aktiviert ist, kann die Empfindlichkeitserkennung (Autosens) das Ziel erhöhen, wenn eine höhere (Insulin-)Empfindlichkeit erkannt wird (unter 100%). In diesem Fall wird Dein Ziel um den Prozentsatz der erkannten Empfindlichkeit erhöht.

If the target is modified due to sensitivity detection, it will be displayed with a green background on your home screen.

![Von Autosens angepasster Zielwert](../images/Home2020_DynamicTargetAdjustment.png)

### Resistenz senkt den Zielwert

Wenn diese Option aktiviert ist, kann die Empfindlichkeitserkennung (Autosens) das Ziel absenken, wenn eine Insulinresistenz erkannt wird (über 100%). In diesem Fall wird Dein Ziel um den Prozentsatz der erkannten Resistenz reduziert.

### Hohe temporäre Ziele erhöhen die Sensitivität

Wenn Du diese Option aktivierst, wird die Insulinempfindlichkeit bei einem gesetzten temporären Ziel oberhalb von 100 mg/dl (oder 5,6 mmol/l) erhöht. Das bedeutet, der Insulinsensibilitäts-Faktor (ISF) wird erhöht während der Kohlenhydrate-Faktor (IC) und die Basalrate gesenkt werden. This will effectively make **AAPS** less aggressive when you set a high temp target.

### Niedrige temporäre Ziele senken die Sensitivität

Wenn du diese Option aktivierst, dann wird die Insulinempfindlichkeit verringert, wenn du ein temporäres Ziel unter 100 mg/dl bzw. 5,6 mmol/l setzt. Das bedeutet, der Insulinsensibilitäts-Faktor (ISF) wird gesenkt während der Kohlenhydrate-Faktor (IC) und die Basalrate erhöht werden. This will effectively make **AAPS** more aggressive when you set a low temp target.

(key-aaps-features-minimal-carbs-required-for-suggestion)=

### Minimal carbs required for suggestion

Minimum grams of carbs to display a carbs suggestion alert. Der Algorithmus empfiehlt Dir, etwas zu essen, wenn er feststellt, dass zusätzliche Kohlenhydrate benötigt werden. In diesem Fall erhältst Du eine Benachrichtigung, die Du für 5, 15 oder 30 Minuten stummschalten kannst.

Auf Wunsch können die Kohlenhydrat-Vorschläge an Nightscout gesandt werden. In diesem Fall wird eine Ankündigung angezeigt und verteilt.

In any case, the required carbs will be displayed in the COB section on your home screen.

![Kohlenhydrat-Vorschlag auf dem Startbildschirm](../images/Pref2020_CarbsRequired.png)

### Erweiterte Einstellungen

You can read more here : [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Always use short average delta instead of simple data** If you enable this feature, **AAPS** uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps **AAPS** to be steadier with noisy data sources like xDrip+ and Libre.

**Sicherheitsmultiplikator des Basalhöchstwertes** Dies ist eine wichtige Sicherheitseinstellung. Der voreingestellte Wert (der nur in Ausnahmefällen geändert werden muss) ist 3. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump and/or profile. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then **AAPS** can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Standardwert: 3 (sollte nur in Ausnahmefällen geändert werden und wenn Du weißt, was das bedeutet)

**Sicherheitsmultiplikator der aktuellen Basalrate** Dies ist eine weitere wichtige Sicherheitseinstellung. Der voreingestellte Wert (der nur in Ausnahmefällen geändert werden muss) ist 4. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump and/or profile.

Standardwert: 4 (sollte nur in Ausnahmefällen geändert werden und wenn du weisst, was das bedeutet)

* * *

(Open-APS-features-advanced-meal-assist-ama)=

## Erweiterter Mahlzeit-Assistent (AMA)

AMA steht für “advanced meal assist” und ist eine OpenAPS-Funktion aus 2017 (Oref0). Nachdem du dir einen Bolus gegeben hast, darf AMA schneller eine höhere temporäre Basalrate wählen, vorausgesetzt du gibst die Kohlenhydrate verlässlich ein.

Siehe auch: [OpenAPS-Dokumentation (englisch)](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Max IE/h, die als temporäre Basalrate gesetzt werden können (OpenAPS “max-basal”)

This safety setting helps **AAPS** from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. Es wird empfohlen, hier etwas vernünftiges einzugeben. Eine gute Empfehlung ist, den höchsten stündlichen Basalratenwert in deinem Profil zu verwenden und diesen mit 4 oder mindestens mit 3 zu multiplizieren. Beispiel: wenn der höchste stündliche Basalratenwert in deinem Profil 1.0 IE/h ist, kannst du diesen mit 4 multiplizieren, wodurch du einen Wert von 4 IE/h erhältst, so dass du "4" als Sicherheitseinstellung setzen kannst.

You cannot choose any value: For safety reason, there is a 'hard limit', which depends on the patient age. Das "hard limit" für maxIOB ist bei AMA niederiger als bei SMB. Bei Kindern ist der zulässige Wert am niedrigsten, bei insulinresistenten Erwachsenen am höchsten.

The hardcoded parameters in **AAPS** are:

- Kind: 2
- Jugendlicher: 5
- Erwachsener: 10
- Insulinresistenter Erwachsener: 12
- Schwangere: 25

*See also [overview of hard-coded limits](#overview-of-hard-coded-limits).*

### Maximales Basal-IOB, das OpenAPS abgeben darf \[IE\] (OpenAPS “max-iob”)

This parameter limits the maximum of basal IOB where **AAPS** still works. Wenn dieses IOB höher ist, dann wird kein weiteres Basalinsulin mehr abgegeben, bis das Basal-IOB wieder unter dem Grenzwert liegt.

The default value is 2, but you should rise this parameter slowly to see how much it affects you and which value fits best. Das ist sehr individuell und hängt stark vom durchschnittlichen Gesamtinsulinbedarf ab (total daily dose = TDD). Zur Sicherheit gibt es ein Limit, das auf dem Patientenalter basiert. Das "hard limit" für maxIOB ist bei AMA niederiger als bei SMB.

- Kind: 3
- Jugendlicher: 5
- Erwachsener: 7
- Insulinresistenter Erwachsener: 12
- Schwangere: 25

*See also [overview of hard-coded limits](#overview-of-hard-coded-limits).*

### Verwende AMA Autosense

Here, you can choose, if you want to use the [sensitivity detection](../DailyLifeWithAaps/SensitivityDetectionAndCob.md) autosens or not.

### Autosense passt auch temporäre Ziele an

Wenn Du diese Option aktivierst, dann kann Autosense auch Ziele anpassen (neben Basalrate und ISF). This lets **AAPS** work more 'aggressive' or not. Der aktuell eingestellte Zielwert wird dadurch möglicherweise schneller erreicht.

### Erweiterte Einstellungen

- Normalerweise musst Du die Einstellungen in diesem Dialog nicht ändern!
- Falls Du sie doch ändern willst, lies in jedem Fall vorher die Details dazu in den [OpenAPS Docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#) und stelle sicher, dass Du weißt, was Du tust.

**Always use short average delta instead of simple data** If you enable this feature, **AAPS** uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps **AAPS** to work more steady with noisy data sources like xDrip+ and Libre.

**Sicherheitsmultiplikator des Basalhöchstwertes** Dies ist eine wichtige Sicherheitseinstellung. Der voreingestellte Wert (der nur in Ausnahmefällen geändert werden muss) ist 3. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then **AAPS** can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Standardwert: 3 (sollte nur in Ausnahmefällen geändert werden und wenn Du weißt, was das bedeutet)

**Sicherheitsmultiplikator der aktuellen Basalrate** Dies ist eine weitere wichtige Sicherheitseinstellung. Der voreingestellte Wert (der nur in Ausnahmefällen geändert werden muss) ist 4. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.

Standardwert: 4 (sollte nur in Ausnahmefällen geändert werden und wenn du weisst, was das bedeutet)

**Bolus snooze dia divisor** Die Funktion “Bolus snooze” wird dann aktiviert, wenn du einen Essensbolus gegeben hast. **AAPS** doesn’t set low temporary basal rates after a meal in the period of the DIA divided by the “bolus snooze”-parameter. Der Standardwert ist 2. Dies bedeutet: Bei einem DIA von 5 Stunden wird der “Bolus snooze” über 5 : 2 = 2,5 Stunden geradlinig auslaufen.

Standardwert: 2

* * *

(Open-APS-features-overview-of-hard-coded-limits)=

## Übersicht der fest programmierten Limits

|            | Kind  | Jugendlicher | Erwachsener | Insulinresistenter Erwachsener | Schwangere |
| ---------- | ----- | ------------ | ----------- | ------------------------------ | ---------- |
| MAXBOLUS   | 5,0   | 10,0         | 17,0        | 25,0                           | 60,0       |
| MINDIA     | 5,0   | 5,0          | 5,0         | 5,0                            | 5,0        |
| MAXDIA     | 9,0   | 9,0          | 9,0         | 9,0                            | 10,0       |
| MINIC      | 2,0   | 2,0          | 2,0         | 2,0                            | 0,3        |
| MAXIC      | 100,0 | 100,0        | 100,0       | 100,0                          | 100,0      |
| MAXIOB_AMA | 3,0   | 5,0          | 7,0         | 12,0                           | 25,0       |
| MAXIOB_SMB | 7,0   | 13,0         | 22,0        | 30,0                           | 70,0       |
| MAXBASAL   | 2,0   | 5,0          | 10,0        | 12,0                           | 25,0       |