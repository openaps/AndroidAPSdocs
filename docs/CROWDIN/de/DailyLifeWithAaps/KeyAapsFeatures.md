# Wichtigste AAPS-Funktionalitäten

## Loop-Modus

The loop status is shown on the main screen with one of the icons below.

**AAPS** offers several loop modes, such as Open Loop (7), Closed Loop (1) and Low Glucose Suspend (LGS - 2).

See [AAPS Screens > The Homescreen > Loop status](#AapsScreens-loop-status) for information on how to select the loop mode.

![Loop Status](../images/Home2020_LoopStatus.png)

(KeyAapsFeatures-OpenLoop)=

### Open Loop

**AAPS** continuously evaluates all available data (IOB, COB, BG...) and makes treatment suggestions (temporary basal rates) on how to adjust your therapy if necessary.

Die Vorschläge werden nicht, wie im Closed Loop, automatisch ausgeführt. The suggestions have to be enacted by the user manually into the pump (if using virtual pump) or by using a button if **AAPS** is connected to a real pump.

This option is for getting to know how **AAPS** works or if you are using an unsupported pump. You will be in Open Loop, no matter what choice you make here, until the end of **[Objective 5](#objectives-objective5)**.

(KeyAapsFeatures-LGS)=

### Low Glucose Suspend (LGS)

In diesem Modus ist [maxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over) auf Null gesetzt.

This means that if blood glucose is dropping, **AAPS** can reduce the basal for you. Wenn aber die Glukosewerte steigen, wird keine automatische Korrektur vorgenommen. Your basal rates will remain the same as defined in your current **Profile**. Only if IOB is negative (from a previous Low Glucose Suspend) additional insulin will be given to lower **BG**.

This mode is available starting at **[Objective 6](#objectives-objective6)**.

(KeyAapsFeatures-ClosedLoop)=

### Closed Loop

**AAPS** continuously evaluates all available data (IOB, COB, BG...) and automatically adjusts the treatment if necessary (*i.e.* without further intervention by you) to reach the set [target range or value](#profile-glucose-targets) (bolus delivery, temporary basal rate, insulin switch-off to avoid hypo etc.).

Der Closed Loop arbeitet im Rahmen zahlreicher Sicherheitsgrenzen, die Du individuell einstellen kannst.

Closed Loop is only possible if you are in **[Objective 7](#objectives-objective7)** or higher and use a supported pump.

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

### Max U/h a temp basal can be set to

Diese Sicherheitseinstellung legt fest, welche maximale temporäre Basalrate die Insulinpumpe abgeben darf. Es wird auch als **max-basal** bezeichnet.

Der Wert wird in IE pro Stunde angegeben (IE/h). Es wird empfohlen, hier etwas vernünftiges einzugeben. Ein empfohlener Wert für diesen Parameter ist:

**MAX-BASAL = HIGHEST BASAL RATE x 4**

For example, if the highest basal rate in your profile was 0.5 U/h you could multiply that by 4 to get a value of 2 U/h.

**AAPS** limits this value as a 'hard limit' according to [Preferences > Treatments safety > Patient Type](#preferences-patient-type). The hard limits are as follows:

- Kind: 2
- Jugendlicher: 5
- Erwachsener: 10
- Insulinresistenter Erwachsener: 12
- Schwangere: 25

*See also [overview of hard-coded limits](#Open-APS-features-overview-of-hard-coded-limits).*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over)=

### Maximum total IOB OpenAPS can’t go over

This value determines the maximum **Insulin on Board** (basal and bolus IOB) that **AAPS** will remain under while running in closed loop mode. It is also known as **maxIOB**.

If the current IOB (e.g. after a meal bolus) is above the defined value, the loop stops dosing insulin until the IOB limit is below the given value.

A good start for setting this parameter is:

    maxIOB = average mealbolus + 3x max daily basal
    

Be careful and patient when adjusting your **max-IOB**. It is different for everyone and can also depend on the average total daily dose (TDD).

**AAPS** limits this value as a 'hard limit' according to [Preferences > Treatments safety > Patient Type](#preferences-patient-type). The hard limits are as follows:

- Kind: 3
- Jugendlicher: 7
- Erwachsener: 12
- Insulinresistenter Erwachsener: 25
- Schwangere: 40

*See also [overview of hard-coded limits](#Open-APS-features-overview-of-hard-coded-limits).*

Note : When using **SMB**, the **max-IOB** is calculated differently than in AMA. In **AMA**, maxIOB is a safety-parameter for basal **IOB**, while in SMB-mode, it also includes bolus IOB.

See also [OpenAPS documentation for SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb).

### Enable dynamic sensitivity

This is the [DynamicISF](../DailyLifeWithAaps/DynamicISF.md) feature. When enabled, new settings become available. Settings are explained on the [DynamicISF](#dyn-isf-preferences) page.

### Use Autosens feature

This is the [Autosens](#Open-APS-features-autosens) feature. When using DynamicISF, Autosens can not be used, since they are two different algorithms altering the same variable (sensitivity).

Autosens looks at blood glucose deviations (positive/negative/neutral). It will try and figure out how sensitive/resistant you are based on these deviations and adjust basal rate and ISF based on these deviations.

When enabled, new settings become available.

#### Sensitivity raises target

If this option is enabled, the sensitivity detection (autosens) can raise the target when sensitivity is detected (below 100%). In this case your target will be raised by the percentage of the detected sensitivity.

If the target is modified due to sensitivity detection, it will be displayed with a green background on your home screen.

![Target modified by autosens](../images/Home2020_DynamicTargetAdjustment.png)

This setting is available when one of "Enable dynamic sensitivity" or "Enable Autosens feature" are enabled.

#### Resistance lowers target

If this option is enabled, the sensitivity detection (autosens) can lower the target when resistance is detected (above 100%). In this case your target will be lowered by the percentage of the detected resistance.

This setting is available when one of "Enable dynamic sensitivity" or "Enable Autosens feature" are enabled.

### Enable SMB

Enable this to use SMB functionality. If disabled, no **SMBs** will be given.

When enabled, new settings become available.

(Open-APS-features-enable-smb-with-high-temp-targets)=

#### Enable SMB with high temp targets

If this setting is enabled, **SMBs** will still be delivered even if the user has selected a high **Temp Target** (defined as anything above 100mg/dL or 5.6mmol/l, regardless of **Profile** target). This option is intended to be used to disable SMBs when the setting is disabled. For example, if this option is disabled, **SMBs** can be disabled by setting a **Temp Target** above 100mg/dL or 5.6mmol/l. This option will also disable **SMBs** regardless of what other condition is trying to enable SMB.

If this setting is enabled, **SMB** will only be enabled with a high temp target if **Enable SMB with temp targets** is also enabled.

(Open-APS-features-enable-smb-always)=

#### Enable SMB always

If this setting is enabled, SMB is enabled always enabled(independent of COB, temp targets or boluses). If this setting is enabled, the rest of the enable settings below will have no effect. However, if **Enable SMB with high temp targets** is disabled and a high temp target is set, SMBs will be disabled.

This setting is only available if **AAPS** detects that you are using a [reliable BG source](#GettingStarted-TrustedBGSource), with advanced filtering. FreeStyle Libre 1 is not considered a reliable source due to the risk of infinitely repeating old BG data in case of sensor failure.

Noisy data could cause **AAPS** to believe BG is rising really fast, resulting in the administration of unnecessary SMBs. For more information about noise and data smoothing, see [here](../CompatibleCgms/SmoothingBloodGlucoseData.md).

#### Enable SMB with COB

If this setting is enabled, SMB is enabled when the COB is greater than 0.

This setting is not visible if "Enable SMB always" is switched on.

#### Enable SMB with temp targets

If this setting is enabled, SMB is enabled when there is any temp target set (eating soon, activity, hypo, custom). If this setting is enabled but **Enable SMB with high temp targets** is disabled, SMB will be enabled when a low temp target is set (below 100mg/dL or 5.6mmol/l) but disabled when a high temp target is set.

This setting is not visible if "Enable SMB always" is switched on.

#### Enable SMB after carbs

If enabled, SMB is enabled for 6h after carbohydrates are announced, even if COB has reached 0.

For safety reasons, this setting is only available if **AAPS** detects that you are using a reliable BG source. It is not visible if "Enable SMB always" is switched on.

This setting is only available if **AAPS** detects that you are using a [reliable BG source,](#GettingStarted-TrustedBGSource) with advanced filtering. FreeStyle Libre 1 is not considered a reliable source due to the risk of infinitely repeating old BG data in case of sensor failure.

Noisy data could cause **AAPS** to believe BG is rising really fast, resulting in the administration of unnecessary SMBs. For more information about noise and data smoothing, see [here](../CompatibleCgms/SmoothingBloodGlucoseData.md).  
This setting is not visible if "Enable SMB always" is switched on.

#### How frequently SMBs will be given in min

This feature limits the frequency of SMBs. This value determines the minimum time between SMBs. Note that the loop runs every time a glucose value comes in (generally 5 minutes). Subtract 2 minute to give loop additional time to complete. E.g. if you want SMB to be given every loop run, set this to 3 minutes.

Default value: 3 min.

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

#### Max minutes of basal to limit SMB to

This is an important safety setting. This value determines how much SMB can be given based on the amount of basal insulin in a given time, when it is covered by COBs.

Making this value larger allows the SMB to be more aggressive. You should start with the default value of 30 minutes. After some experience, increase the value in 15 minutes increments and observe the effects over multiple meals.

It is recommended not to set the value higher than 90 minutes, as this would lead to a point where the algorithm might not be able to accommodate a decreasing BG with 0 U/h basal ('zero-temp'). You should also set alarms, especially if you are still testing new settings, which will warn you well before a hypo.

Default value: 30 min.

#### Max minutes of basal to limit SMB to for UAM

This setting allows to adjust the strength of SMB during UAM, when there are no more carbs.

Default value : the same as **Max minutes of basal to limit SMB to**.

This setting is only visible if "Enable SMB" and "Enable UAM " are switched on.

### Enable UAM

With this option enabled, the SMB algorithm can recognize unannounced meals. This is helpful if you forget to tell **AAPS** about your carbs or estimate your carbs wrong and the amount of entered carbs is wrong or if a meal with lots of fat and protein has a longer duration than expected. Without any carb entry, UAM can recognize fast glucose increase caused by carbs, adrenaline, etc., and tries to adjust it with SMBs. This also works the opposite way: if there is a fast glucose decrease, it can stop SMBs earlier.

**Therefore, UAM should always be activated when using SMB.**

(key-aaps-features-minimal-carbs-required-for-suggestion)=

### Minimal carbs required for suggestion

Minimum grams of carbs to display a carbs suggestion alert. Eating of additional carbs will be suggested when the reference design detects that it requires carbs. In this case you will receive a notification which can be snoozed for 5, 15 or 30 minutes.

Auf Wunsch können die Kohlenhydrat-Vorschläge an Nightscout gesandt werden. In diesem Fall wird eine Ankündigung angezeigt und verteilt.

In any case, the required carbs will be displayed in the COB section on your home screen.

![Display carbs required on home screen](../images/Pref2020_CarbsRequired.png)

### Advanced Settings

You can read more here : [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Always use short average delta instead of simple data** If you enable this feature, **AAPS** uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps **AAPS** to be steadier with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump and/or profile. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then **AAPS** can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump and/or profile.

Default value: 4 (shouldn’t be changed unless you really need to and know what you are doing)

* * *

(Open-APS-features-advanced-meal-assist-ama)=

## Advanced Meal Assist (AMA)

AMA, the short form of "advanced meal assist" is an OpenAPS feature from 2017 (oref0). OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus if you enter carbs reliably.

You can find more information in the [OpenAPS documentation](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Max U/hr a Temp Basal can be set to (OpenAPS "max-basal")

This safety setting helps **AAPS** from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. Es wird empfohlen, hier etwas vernünftiges einzugeben. A good recommendation is to take the highest basal rate in your profile and multiply it by 4 and at least 3. For example, if the highest basal rate in your profile is 1.0 U/h you could multiply that by 4 to get a value of 4 U/h and set the 4 as your safety parameter.

You cannot choose any value: For safety reason, there is a 'hard limit', which depends on the patient age. The 'hard limit' for maxIOB is lower in AMA than in SMB. For children, the value is the lowest while for insulin resistant adults, it is the biggest.

The hardcoded parameters in **AAPS** are:

- Kind: 2
- Jugendlicher: 5
- Erwachsener: 10
- Insulinresistenter Erwachsener: 12
- Schwangere: 25

*See also [overview of hard-coded limits](#Open-APS-features-overview-of-hard-coded-limits).*

### Maximum basal IOB OpenAPS can deliver \[U\] (OpenAPS "max-iob")

This parameter limits the maximum of basal IOB where **AAPS** still works. If the IOB is higher, it stops giving additional basal insulin until the basal IOB is under the limit.

The default value is 2, but you should rise this parameter slowly to see how much it affects you and which value fits best. It is different for anyone and also depends on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age . The 'hard limit' for maxIOB is lower in AMA than in SMB.

- Kind: 3
- Jugendlicher: 5
- Erwachsener: 7
- Insulinresistenter Erwachsener: 12
- Schwangere: 25

*See also [overview of hard-coded limits](#Open-APS-features-overview-of-hard-coded-limits).*

### Enable AMA Autosens

Here, you can choose, if you want to use the [sensitivity detection](../DailyLifeWithAaps/SensitivityDetectionAndCob.md) autosens or not.

### Autosens adjust temp targets too

If you have this option enabled, autosens can adjust targets (next to basal and ISF), too. This lets **AAPS** work more 'aggressive' or not. The actual target might be reached faster with this.

### Advanced Settings

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

## Overview of hard-coded limits

|            | Kind | Jugendlicher | Erwachsener | Insulinresistenter Erwachsener | Schwangere |
| ---------- | ---- | ------------ | ----------- | ------------------------------ | ---------- |
| MAXBOLUS   | 5    | 10           | 17          | 25                             | 60         |
| MINDIA     | 5    | 5            | 5           | 5                              | 5          |
| MAXDIA     | 9    | 9            | 9           | 9                              | 10         |
| MINIC      | 2    | 2            | 2           | 2                              | 0.3        |
| MAXIC      | 100  | 100          | 100         | 100                            | 100        |
| MAXIOB_AMA | 3    | 5            | 7           | 12                             | 25         |
| MAXIOB_SMB | 7    | 13           | 22          | 30                             | 70         |
| MAXBASAL   | 2    | 5            | 10          | 12                             | 25         |