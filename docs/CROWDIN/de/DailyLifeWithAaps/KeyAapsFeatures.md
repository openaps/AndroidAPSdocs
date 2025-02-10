# Wichtigste AAPS-Funktionalitäten

(Open-APS-features-autosens)=

## Autosens

- Autosens ist ein Algorithmus, der Glukosewert-Abweichungen (positiv/negativ/neutral) untersucht.
- Er versucht herauszufinden, wie empfindlich/resistent Du aufgrund dieser Abweichungen bist.
- Die oref-Implementierung in **OpenAPS** läuft mit einer Kombination von Daten aus 24 und 8 Stunden. Es wird das "empfindlichere" Ergebnis der beiden Berechnungen verwendet.
- In den Versionen vor **AAPS** 2.7 musste der Benutzer manuell zwischen 8 oder 24 Stunden wählen.
- Ab **AAPS Version 2.7** wechselt Autosens in **AAPS** zwischen einem 24- und 8-Stunden-Fenster zur Berechnung der Empfindlichkeit. Dabei wird das empfindlichere Ergebnis verwendet. 
- Wenn Du bisher oref1 genutzt hast, wirst Du wahrscheinlich bemerken, dass das System weniger dynamisch auf Veränderungen reagiert, da zwischen 8 und 24 Stunden gewechselt wird.
- Der Wechsel der Kanüle oder ein Profilwechsel setzen Autosens auf 100% zurück. Ausnahme ist ein prozentualer Profilwechsel mit festgelegter Dauer. Bei diesem wird Autosens nicht zurückgesetzt.
- Autosens passt Deine Basalrate und den ISF an (d.h. Nachahmen der Effekte einer Profilverschiebung).
- Wenn Du über einen längeren Zeitraum kontinuierlich Kohlenhydrate zu Dir nimmst, ist Autosens während dieses Zeitraums weniger effektiv, da Kohlenhydrate aus den Berechnungen der **Glukosewert**-Abweichungen ausgenommen werden.

(Open-APS-features-super-micro-bolus-smb)=

## Super Micro Bolus (SMB)

**SMB**, die Kurzform von **Super Micro Bolus**, ist eine OpenAPS-Funktion, die ab 2018 innerhalb des Oref1-Algorithmus eingeführt wurde. Im Gegensatz zu **AMA** verwendet **SMB** keine temporären Basalraten, um den Glukosespiegel zu steuern, sondern hauptsächlich kleine **Supermicroboli**. In Situationen, in denen AMA 1.0 IE Insulin über eine temporäre Basalrate zugeben würde, gibt **SMB** im **5-Minutentakt** mehrere Supermicroboli in kleinen Schritten ab, z.B. 0.4 IE, 0.3 IE, 0.2 IE und 0.1 IE. Gleichzeitig wird die laufende Basalrate aus Sicherheitsgründen für eine bestimmte Dauer auf 0 IE/h gesetzt, damit keine Überdosierung erfolgt (**“zero-temping”**). So kann das System den Glukosewert schneller abfangen als mit der temporären Basalratenerhöhung bei **AMA**.

Für Mahlzeiten mit ausschließlich langsamen Kohlenhydraten kann es - Dank der SMB - ausreichen, dem System die voraussichtliche KH-Menge anzukündigen und den Rest **AAPS** zu überlassen. Dies führt aber womöglich zu höheren postprandialen Spitzen, weil kein Spritz-Ess-Abstand (SEA) eingehalten werden kann. Oder Du gibst, ggf. mit SEA, einen **Anfangsbolus**, der **nur zum Teil** die Kohlenhydrate abdeckt (z.B. 2/3 der geschätzten Menge) ab und lässt den Rest vom **SMB** auffüllen.

![SMBs in der Hauptgrafik](../images/SMBs.png)

SMBs werden auf dem Hauptdiagramm als blaue Dreiecke angezeigt. Um zu sehen, wie viel Insulin abgegeben wurde, tippe entweder auf das Dreieck oder schaue im Reiter [Behandlung](#aaps-screens-treatments) nach.

Die **SMB**-Funktionalität hat einige Sicherheitsmechanismen:

1. **Größte SMB-Dosis**  
    Die größte einzelne SMB-Dosis kann nur der kleinste Wert sein:
    
    - Wert, der der aktuellen Basalrate (wie sie Autosens angepasst hat) für die unter „SMB-Basal-Limit in Minuten“ voreingestellte Dauer entspricht, z.B. Basalmenge der kommenden 30 Minuten, oder
    - die Hälfte der aktuell benötigten Insulinmenge oder
    - der verbleibende Anteil deines maxIOB-Wertes in den Einstellungen.

2. **Niedrige temporäre Basalraten**  
    Niedrige temporäre Basalraten (sog. „Low Temps“) oder temporäre Basalraten mit 0 IEU/h (sog. „Zero-Temps“) werden in **SMB** häufiger aktiviert. Dies ist aus Sicherheitsgründen so gewollt und hat bei einem korrekt eingestellten **Profil** auch keine negativen Auswirkungen. In der Hauptgrafik ist die IOB-Kurve (gelbe dünne Linie) aussagekräftiger als der Verlauf der temporären Basalraten.

3. **Unangekündigte Mahlzeiten**  
    Zusätzliche Berechnungen zur Vorhersage des Glukoseverlaufs, z. B. durch **UAM** (unangekündigte Mahlzeiten). **UAM** kann auch ohne manuelle Kohlenhydrat-Eingaben des Nutzers automatisch erkennen, dass die Glukosewerte durch Mahlzeiten, Adrenalin oder anderen Einflüsse signifikant steigen und wird versuchen, dies mit **SMB** abzufangen. Dies funktioniert aber zur Sicherheit auch andersherum und kann bei unvorhergesehen schnellem Glukoseabfall den SMB früher stoppen. Deshalb sollte UAM bei SMB auch immer aktiv sein.

**Du musst [Ziel 9](#objectives-objective9) gestartet haben, um SMBs nutzen zu können.**

Weitere Informationen hierzu findest Du unter:

- [OpenAPS-Dokumentation zu SMBs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb).
- [OpenAPS-Dokumentation zu oref1 SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)
- [Tims Infos zu SMBs](https://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/).

Die Einstellungen des OpenAPS SMB ist im Folgenden beschrieben.

(Open-APS-features-max-u-h-a-temp-basal-can-be-set-to)=

### Maximale IE/h, die als TBR gesetzt werden können

Diese Sicherheitseinstellung legt fest, welche maximale temporäre Basalrate die Insulinpumpe abgeben darf. Es wird auch als **max-basal** bezeichnet.

Der Wert wird in IE pro Stunde angegeben (IE/h). Es wird empfohlen, hier etwas vernünftiges einzugeben. Ein empfohlener Wert für diesen Parameter ist:

    max-basal = Höchste Basalrate x 4
    

Wenn zum Beispiel die höchste Basalrate in deinem Profil 0.5IE/h war, kannst du das mit 4 multiplizieren, um einen Wert von 2IE/h zu erhalten.

**AAPS** beschränkt diesen Wert als „hartes Limit“ gemäß [Einstellungen > Sicherheitseinstellungen der Behandlungen > Patiententyp](#preferences-patient-type). Die harten Grenzen sind folgende:

- Kind: 2
- Jugendlicher: 5
- Erwachsener: 10
- Insulinresistenter Erwachsener: 12
- Schwangere: 25

*Siehe auch [Übersicht der fest programmierten Limits](#overview-of-hard-coded-limits).*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over)=

### Maximales Gesamt-IOB, das nicht überschritten werden darf [IE]

Dieser Wert bestimmt das maximale **Insulin an Bord** (Basal- und Bolus-IOB; sog. aktives Insulin)), das **AAPS** im Closed Loop Modus nicht überschreitet. Es wird auch als **maxIOB** bezeichnet.

Liegt das aktuelle IOB (z.B nach einem Mahlzeit-Bolus) über dem festgelegten Wert, dann wird die Insulinabgabe durch den Loop unterbunden, bis die IOB-Grenze wieder unterschritten ist.

Ein guter Anfangwert für diesen Parameters ist:

    maxIOB = mittlerer Mahlzeitenbolus + 3x höchste tägliche Basalrate
    

Sei bei der Anpassung des **max-IOB** vorsichtig. Das ist sehr individuell und hängt stark vom durchschnittlichen Gesamtinsulinbedarf ab (total daily dose = TDD).

**AAPS** beschränkt diesen Wert als „hartes Limit“ gemäß [Einstellungen > Sicherheitseinstellungen der Behandlungen > Patiententyp](#preferences-patient-type). Die harten Grenzen sind folgende:

- Kind: 3
- Jugendlicher: 7
- Erwachsener: 12
- Insulinresistenter Erwachsener: 25
- Schwangere: 40

*Siehe auch [Übersicht der fest programmierten Limits](#overview-of-hard-coded-limits).*

Hinweis: Bei der Verwendung von **SMB** wird **max-IOB** anders berechnet als in AMA. In **AMA** ist maxIOB ein Sicherheitsparameter für das Basal-**IOB**, während im SMB-Modus auch Bolus-IOB enthalten ist.

Siehe auch [OpenAPS-Dokumentation zu SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb).

### Dynamische Empfindlichkeit aktivieren

Dies ist die Funktion [Dynamischer ISF](../DailyLifeWithAaps/DynamicISF.md). Mit der Aktivierung werden neue Einstellungsoptionen verfügbar. Die Einstellungen werden auf der Seite zum [Dynamischen ISF](#dyn-isf-preferences) beschrieben.

#### Hohe temporäre Ziele erhöhen die Sensitivität

Wenn Du diese Option aktivierst, wird die Insulinempfindlichkeit bei einem gesetzten temporären Ziel oberhalb von 100 mg/dl (oder 5,6 mmol/l) erhöht. Das bedeutet, der Insulinsensibilitäts-Faktor (ISF) wird erhöht während der Kohlenhydrate-Faktor (IC) und die Basalrate gesenkt werden. Am Ende macht eine gesetztes temporäres hohes Ziel **AAPS** weniger aggressiv.

#### Niedrige temporäre Ziele senken die Sensitivität

Wenn du diese Option aktivierst, dann wird die Insulinempfindlichkeit verringert, wenn du ein temporäres Ziel unter 100 mg/dl bzw. 5,6 mmol/l setzt. Das bedeutet, der Insulinsensibilitäts-Faktor (ISF) wird gesenkt während der Kohlenhydrate-Faktor (IC) und die Basalrate erhöht werden. Wenn ein niedriges temporäres Ziel aktiv ist, macht diese Option **AAPS** aggressiver.

### Nutze Autosens

Das ist die [Autosens](#autosens)-Funktion. Autosens kann nicht gleichzeitig mit dem dynamischen ISF genutzt werden. Der Grund dafür ist, dass die beiden unterschiedlichen Algorithmen die gleichen Variablen zur Empfindlichkeit verändern würden.

Autosens analysiert Deine Glukosewert-Abweichungen (positiv/negativ/neutral). Dabei wird anhand dieser Abweichungen ermittelt, wie empfindlich / resistent Du auf Insulin reagierst und Deine Basalrate und den ISF entsprechend angepasst.

Mit der Aktivierung werden neue Einstellungsoptionen verfügbar.

### Empfindlichkeit erhöht den Zielwert

Wenn diese Option aktiviert ist, kann die Empfindlichkeitserkennung (Autosens) das Ziel erhöhen, wenn eine höhere (Insulin-)Empfindlichkeit erkannt wird (unter 100%). In diesem Fall wird Dein Ziel um den Prozentsatz der erkannten Empfindlichkeit erhöht.

Wenn das Ziel aufgrund der Empfindlichkeitserkennung geändert wird, wird es mit einem grünen Hintergrund auf Deinem Startbildschirm dargestellt.

![Von Autosens angepasster Zielwert](../images/Home2020_DynamicTargetAdjustment.png)

Diese Einstellung ist verfügbar, wenn eine der Funktionen "Dynamische Empfindlichkeit aktivieren" oder "Autosens aktivieren" aktiviert sind.

### Resistenz senkt den Zielwert

Wenn diese Option aktiviert ist, kann die Empfindlichkeitserkennung (Autosens) das Ziel absenken, wenn eine Insulinresistenz erkannt wird (über 100%). In diesem Fall wird Dein Ziel um den Prozentsatz der erkannten Resistenz reduziert.

Diese Einstellung ist verfügbar, wenn eine der Funktionen "Dynamische Empfindlichkeit aktivieren" oder "Autosens aktivieren" aktiviert sind.

### Aktiviere SMB

Aktiviere diese Option, um die SMB-Funktionalität zu nutzen. Ist sie deaktiviert, werden keine **SMBs** abgegeben.

Mit der Aktivierung werden neue Einstellungsoptionen verfügbar.

(Open-APS-features-enable-smb-with-high-temp-targets)=

#### Aktiviere SMB bei temporären Zielen oberhalb des regulären Ziels

Wenn diese Option aktiviert ist, werden **SMBs** auch dann abgegeben, wenn Du ein hohes **Temp Target** gesetzt hast (d. h. Dein Ziel über 100mg/dl bzw. 5,6 mmol/l liegt; das ist unabhängig vom im **Profil** hinterlegten Ziel). Bei ausgeschalteter Option werden SMBs nicht abgegeben. Wenn diese Option beispielsweise deaktiviert ist, können **SMBs** dadurch deaktiviert werden, dass Du ein **Temp Target** über 100mg/dl bzw. 5,6mmol/l setzt. Diese Option deaktiviert **SMBs** generell (auch wenn andere Bedingungen versuchen SMBs zu aktivieren).

Wenn diese Option aktiviert ist, werden **SMB** bei einem hohen temporären Ziel nur dann aktiv sein, wenn gleichzeitig auch die Option **Aktiviere SMB bei aktiven temporären Zielen** eingeschaltet ist.

(Open-APS-features-enable-smb-always)=

#### SMB immer aktivieren

Wenn diese Option aktiviert ist, sind SMB immer aktiviert (unabhängig von COB, temporären Zielen oder Boli). Wenn diese Einstellung aktiviert ist, sind die übrigen Bedingungen ohne Einfluss und werden nicht berücksichtigt. Wenn jedoch **Aktiviere SMB bei hohem temporären Ziel** ausgeschaltet ist und ein hohes temporäres Ziel aktiv ist, werden SMBs nicht abgegeben.

This setting is only available if **AAPS** detects that you are using a [reliable BG source](#GettingStarted-TrustedBGSource), with advanced filtering. Der FreeStyle Libre 1 wird nicht als zuverlässige Quelle eingestuft, da bei einem Sensorausfall die Gefahr besteht, dass der letzte (und über die Zeit damit falsche) Glukosewert unendlich oft gesendet wird.

Noisy data could cause **AAPS** to believe BG is rising really fast, resulting in the administration of unnecessary SMBs. For more information about noise and data smoothing, see [here](../CompatibleCgms/SmoothingBloodGlucoseData.md).

#### Aktiviere SMB während aktiver Kohlenhydrate.

If this setting is enabled, SMB is enabled when the COB is greater than 0.

This setting is not visible if "Enable SMB always" is switched on.

#### Aktiviere SMB bei aktiven temporären Zielen

If this setting is enabled, SMB is enabled when there is any temp target set (eating soon, activity, hypo, custom). If this setting is enabled but **Enable SMB with high temp targets** is disabled, SMB will be enabled when a low temp target is set (below 100mg/dL or 5.6mmol/l) but disabled when a high temp target is set.

This setting is not visible if "Enable SMB always" is switched on.

#### Aktiviere SMB nach Mahlzeiten

If enabled, SMB is enabled for 6h after carbohydrates are announced, even if COB has reached 0.

For safety reasons, this setting is only available if **AAPS** detects that you are using a reliable BG source. It is not visible if "Enable SMB always" is switched on.

This setting is only available if **AAPS** detects that you are using a [reliable BG source,](#GettingStarted-TrustedBGSource) with advanced filtering. Der FreeStyle Libre 1 wird nicht als zuverlässige Quelle eingestuft, da bei einem Sensorausfall die Gefahr besteht, dass der letzte (und über die Zeit damit falsche) Glukosewert unendlich oft gesendet wird.

Noisy data could cause **AAPS** to believe BG is rising really fast, resulting in the administration of unnecessary SMBs. For more information about noise and data smoothing, see [here](../CompatibleCgms/SmoothingBloodGlucoseData.md).  
This setting is not visible if "Enable SMB always" is switched on.

#### Wie häufig SMBs abgegeben werden (in Min.)

This feature limits the frequency of SMBs. This value determines the minimum time between SMBs. Note that the loop runs every time a glucose value comes in (generally 5 minutes). Subtract 2 minute to give loop additional time to complete. E.g. if you want SMB to be given every loop run, set this to 3 minutes.

Default value: 3 min.

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

#### SMB-Basal-Limit in Minuten

This is an important safety setting. This value determines how much SMB can be given based on the amount of basal insulin in a given time, when it is covered by COBs.

Making this value larger allows the SMB to be more aggressive. You should start with the default value of 30 minutes. After some experience, increase the value in 15 minutes increments and observe the effects over multiple meals.

It is recommended not to set the value higher than 90 minutes, as this would lead to a point where the algorithm might not be able to accommodate a decreasing BG with 0 U/h basal ('zero-temp'). You should also set alarms, especially if you are still testing new settings, which will warn you well before a hypo.

Default value: 30 min.

#### SMB Basal-Limit in Minuten für UAM

This setting allows to adjust the strength of SMB during UAM, when there are no more carbs.

Default value : the same as **Max minutes of basal to limit SMB to**.

This setting is only visible if "Enable SMB" and "Enable UAM " are switched on.

### Aktiviere UAM

With this option enabled, the SMB algorithm can recognize unannounced meals. This is helpful if you forget to tell **AAPS** about your carbs or estimate your carbs wrong and the amount of entered carbs is wrong or if a meal with lots of fat and protein has a longer duration than expected. Without any carb entry, UAM can recognize fast glucose increase caused by carbs, adrenaline, etc., and tries to adjust it with SMBs. This also works the opposite way: if there is a fast glucose decrease, it can stop SMBs earlier.

**Therefore, UAM should always be activated when using SMB.**

(key-aaps-features-minimal-carbs-required-for-suggestion)=

### Minimale KH-Menge, die für einen Vorschlag erforderlich ist

Minimum grams of carbs to display a carbs suggestion alert. Eating of additional carbs will be suggested when the reference design detects that it requires carbs. In this case you will receive a notification which can be snoozed for 5, 15 or 30 minutes.

Auf Wunsch können die Kohlenhydrat-Vorschläge an Nightscout gesandt werden. In diesem Fall wird eine Ankündigung angezeigt und verteilt.

In any case, the required carbs will be displayed in the COB section on your home screen.

![Display carbs required on home screen](../images/Pref2020_CarbsRequired.png)

### Erweiterte Einstellungen

You can read more here : [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Always use short average delta instead of simple data** If you enable this feature, **AAPS** uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps **AAPS** to be steadier with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump and/or profile. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then **AAPS** can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump and/or profile.

Default value: 4 (shouldn’t be changed unless you really need to and know what you are doing)

* * *

(Open-APS-features-advanced-meal-assist-ama)=

## Erweiterter Mahlzeit-Assistent (AMA)

AMA, the short form of "advanced meal assist" is an OpenAPS feature from 2017 (oref0). OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus if you enter carbs reliably.

You can find more information in the [OpenAPS documentation](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Max IE/h, die als temporäre Basalrate gesetzt werden können (OpenAPS “max-basal”)

This safety setting helps **AAPS** from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. Es wird empfohlen, hier etwas vernünftiges einzugeben. A good recommendation is to take the highest basal rate in your profile and multiply it by 4 and at least 3. For example, if the highest basal rate in your profile is 1.0 U/h you could multiply that by 4 to get a value of 4 U/h and set the 4 as your safety parameter.

You cannot choose any value: For safety reason, there is a 'hard limit', which depends on the patient age. The 'hard limit' for maxIOB is lower in AMA than in SMB. For children, the value is the lowest while for insulin resistant adults, it is the biggest.

The hardcoded parameters in **AAPS** are:

- Kind: 2
- Jugendlicher: 5
- Erwachsener: 10
- Insulinresistenter Erwachsener: 12
- Schwangere: 25

*Siehe auch [Übersicht der fest programmierten Limits](#overview-of-hard-coded-limits).*

### Maximales Basal-IOB, das OpenAPS abgeben darf \[IE\] (OpenAPS “max-iob”)

This parameter limits the maximum of basal IOB where **AAPS** still works. If the IOB is higher, it stops giving additional basal insulin until the basal IOB is under the limit.

The default value is 2, but you should rise this parameter slowly to see how much it affects you and which value fits best. It is different for anyone and also depends on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age . The 'hard limit' for maxIOB is lower in AMA than in SMB.

- Kind: 3
- Jugendlicher: 5
- Erwachsener: 7
- Insulinresistenter Erwachsener: 12
- Schwangere: 25

*Siehe auch [Übersicht der fest programmierten Limits](#overview-of-hard-coded-limits).*

### Verwende AMA Autosense

Here, you can choose, if you want to use the [sensitivity detection](../DailyLifeWithAaps/SensitivityDetectionAndCob.md) autosens or not.

### Autosense passt auch temporäre Ziele an

If you have this option enabled, autosens can adjust targets (next to basal and ISF), too. This lets **AAPS** work more 'aggressive' or not. The actual target might be reached faster with this.

### Erweiterte Einstellungen

- Normalerweise musst Du die Einstellungen in diesem Dialog nicht ändern!
- Falls Du sie doch ändern willst, lies in jedem Fall vorher die Details dazu in den [OpenAPS Docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#) und stelle sicher, dass Du weißt, was Du tust.

**Always use short average delta instead of simple data** If you enable this feature, **AAPS** uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps **AAPS** to work more steady with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then **AAPS** can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.

Default value: 4 (shouldn’t be changed unless you really need to and know what you are doing)

**Bolus snooze dia divisor** The feature “bolus snooze” works after a meal bolus. **AAPS** doesn’t set low temporary basal rates after a meal in the period of the DIA divided by the “bolus snooze”-parameter. The default value is 2. That means with a DIA of 5h, the “bolus snooze” would be 5h : 2 = 2.5h long.

Default value: 2

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