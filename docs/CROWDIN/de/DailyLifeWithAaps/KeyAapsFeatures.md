# Wichtigste AAPS-Funktionalitäten

## Loop-Modus

Der Loop-Status wird auf dem Hauptbildschirm mit einem der Symbole unten angezeigt.

**AAPS** offers several loop modes, such as Closed Loop (1), Low Glucose Suspend (LGS - 2) and Open Loop (3).

See [AAPS screens > The main screen > Loop status](#AapsScreens-loop-status) for information on how to select the loop mode and on the other icons in the picture (4 to 6).

![Loop Status](../images/Home2020_LoopStatus.png)

(KeyAapsFeatures-OpenLoop)=

### Open Loop

**AAPS** wertet kontinuierlich alle verfügbaren Daten (IOB, COB, BZ...) aus und erstellt, sofern notwendig, daraus Behandlungsvorschläge (temporäre Basalraten) zur Anpassung Deiner Therapie.

Die Vorschläge werden nicht, wie im Closed Loop, automatisch ausgeführt. Die Vorschläge müssen manuell in die Pumpe (falls eine virtuelle Pumpe verwendet wird) eingegeben oder über einen Tastendruck, wenn **AAPS** mit einer echten Pumpe verbunden ist, ausgeführt werden.

When **AAPS** has a suggestion, a **Loop** entry with a badge appears in the bottom navigation of the main screen. Press it to read the suggestion ("Accept new temp basal") with its rate, duration and reason, then press **Perform** to carry it out:

![Open loop suggestion with the Perform button](../images/screens/loop_tab.png)

A suggestion is only valid for a few minutes. If it is older than about 9 minutes, or if the loop has been suspended or the pump disconnected in the meantime, **AAPS** refuses it and nothing is sent to the pump (*"This suggestion is too old. Nothing was sent to the pump. Wait for the next one."*). Wait for the next suggestion.

Diese Option ist zum Kennenlernen der **AAPS**-Funktionsweise gedacht. Die Option wird auch für nicht unterstützte Pumpen genutzt. Bis zum Ende des **[Ziel 5](#objectives-objective5)** wirst Du, unabhängig davon, welche Auswahl Du hier triffst, im Open Loop bleiben.

(KeyAapsFeatures-LGS)=

### Abschalten der Basalrate bei niedrigen Werten (Low Glucose Suspend - LGS)

In diesem Modus ist [maxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over) auf Null gesetzt.

Das bedeutet, dass bei fallenden Glukosewerten, **AAPS** das Basal für Dich reduzieren kann. Wenn aber die Glukosewerte steigen, wird keine automatische Korrektur vorgenommen. Die Basalrate wird genauso so bleiben, wie sie im aktuellen **Profil** hinterlegt ist. Nur wenn das IOB negativ ist (wegen einer vorangegangenen Abschaltung der Basalrate bei niedrigen Werten), wird, um den **Glukosewert** zu senken, zusätzliches Insulin abgegeben.

Dieser Modus wird mit dem Beginn des **[Ziel 6](#objectives-objective6)** auswählbar.

Besides selecting it yourself, **AAPS** can also switch to this mode on its own: while you are working on **[Objective 6](#objectives-objective6)**, and whenever it detects duplicate BG readings (see [BG warning sign](#aaps-screens-bg-warning-sign)).

(KeyAapsFeatures-ClosedLoop)=

### Closed Loop

**AAPS** wertet kontinierlich alle verfügbaren Daten (IOB, COB, BZ-Wert) aus und passt die Behandlung bei Bedarf automatisch (*d. h.* ohne weiteren Eingriff durch Dich) an, um den eingestellten [Zielbereich oder Zielwert](#profile-glucose-targets) zu erreichen (Bolusabgabe, temporäre Basalrate, Insulinabschaltung zur Hypovermeidung etc.).

Der Closed Loop arbeitet im Rahmen zahlreicher Sicherheitsgrenzen, die Du individuell einstellen kannst.

Der Closed Loop steht ab dem **[Ziel 7](#objectives-objective7)** (oder darüber) zur Verfügung und setzt eine kompatible Pumpe voraus.

(autosens)= (Open-APS-features-autosens)=

## Autosens

- Autosens ist ein Algorithmus, der Glukosewert-Abweichungen (positiv/negativ/neutral) untersucht.
- Er versucht herauszufinden, wie empfindlich/resistent Du aufgrund dieser Abweichungen bist.
- Die oref-Implementierung in **OpenAPS** läuft mit einer Kombination von Daten aus 24 und 8 Stunden. Es wird das "empfindlichere" Ergebnis der beiden Berechnungen verwendet.
- Wenn Du bisher oref1 genutzt hast, wirst Du wahrscheinlich bemerken, dass das System weniger dynamisch auf Veränderungen reagiert, da zwischen 8 und 24 Stunden gewechselt wird.
- Der Wechsel der Kanüle oder ein Profilwechsel setzen Autosens auf 100% zurück. Ausnahme ist ein prozentualer Profilwechsel mit festgelegter Dauer. Bei diesem wird Autosens nicht zurückgesetzt.
- Autosens passt Deine Basalrate und den ISF an (d.h. Nachahmen der Effekte einer Profilverschiebung).
- Wenn Du über einen längeren Zeitraum kontinuierlich Kohlenhydrate zu Dir nimmst, ist Autosens während dieses Zeitraums weniger effektiv, da Kohlenhydrate aus den Berechnungen der **Glukosewert**-Abweichungen ausgenommen werden.
- The deviations are converted into a **sensitivity ratio** (a percentage): a ratio below 100% means AAPS thinks you're more sensitive to insulin than your **Profile** assumes (so it lowers effective basal and ISF), while a ratio above 100% means you're more resistant (so it raises them).
- By default this ratio is kept between 0.7 (70%, more sensitive) and 1.2 (120%, more resistant), so a run of unusual data can't push your dosing too far from your **Profile**. These bounds can be adjusted in Sensitivity Detection's advanced settings.
- Autosens and [Autotune](../AdvancedOptions/Autotune.md) address the same underlying problem on different timescales: Autosens nudges your *live* dosing minute-to-minute based on the last 8-24h, while Autotune slowly rewrites your *Profile* itself based on weeks of history. Running both is normal and expected — they complement rather than duplicate each other.

*For the full technical treatment of the autosens algorithm, see [OpenAPS's Autosens documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).*

(Open-APS-features-super-micro-bolus-smb)=

## Super Micro Bolus (SMB)

**SMB**, die Kurzform von **Super Micro Bolus**, ist eine OpenAPS-Funktion, die ab 2018 innerhalb des Oref1-Algorithmus eingeführt wurde. Im Gegensatz zu **AMA** verwendet **SMB** keine temporären Basalraten, um den Glukosespiegel zu steuern, sondern hauptsächlich kleine **Supermicroboli**. In Situationen, in denen AMA 1.0 IE Insulin über eine temporäre Basalrate zugeben würde, gibt **SMB** im **5-Minutentakt** mehrere Supermicroboli in kleinen Schritten ab, z.B. 0.4 IE, 0.3 IE, 0.2 IE und 0.1 IE. Gleichzeitig wird die laufende Basalrate aus Sicherheitsgründen für eine bestimmte Dauer auf 0 IE/h gesetzt, damit keine Überdosierung erfolgt (**“zero-temping”**). So kann das System den Glukosewert schneller abfangen als mit der temporären Basalratenerhöhung bei **AMA**.

Für Mahlzeiten mit ausschließlich langsamen Kohlenhydraten kann es - Dank der SMB - ausreichen, dem System die voraussichtliche KH-Menge anzukündigen und den Rest **AAPS** zu überlassen. Dies führt aber womöglich zu höheren postprandialen Spitzen, weil kein Spritz-Ess-Abstand (SEA) eingehalten werden kann. Oder Du gibst, ggf. mit SEA, einen **Anfangsbolus**, der **nur zum Teil** die Kohlenhydrate abdeckt (z.B. 2/3 der geschätzten Menge) ab und lässt den Rest vom **SMB** auffüllen.

![SMBs in der Hauptgrafik](../images/SMBs.png)

SMBs are shown on the [IOB graph](#aaps-screens-iob) with blue triangles. [Press and hold](#aaps-screens-graph-press-and-hold) the graph at a triangle to see how much insulin was delivered, or use the [Treatments history](#aaps-screens-treatments).

Die **SMB**-Funktionalität hat einige Sicherheitsmechanismen:

1. **Größte SMB-Dosis**  
  Die größte einzelne SMB-Dosis kann nur der kleinste Wert sein:
  
        * value corresponding to the current basal rate (as adjusted by autosens) for the duration set in "Max minutes of basal to limit SMB to", e.g. basal quantity for the next 30 minutes, or
        * half the amount of insulin currently required, or
        * the remaining portion of your maxIOB value in the settings.
      

2. **Niedrige temporäre Basalraten**  
  Niedrige temporäre Basalraten (sog. „Low Temps“) oder temporäre Basalraten mit 0 IEU/h (sog. „Zero-Temps“) werden in **SMB** häufiger aktiviert. Dies ist aus Sicherheitsgründen so gewollt und hat bei einem korrekt eingestellten **Profil** auch keine negativen Auswirkungen. In der Hauptgrafik ist die IOB-Kurve (gelbe dünne Linie) aussagekräftiger als der Verlauf der temporären Basalraten.

3. **Unangekündigte Mahlzeiten**  
  Zusätzliche Berechnungen zur Vorhersage des Glukoseverlaufs, z. B. durch **UAM** (unangekündigte Mahlzeiten). **UAM** kann auch ohne manuelle Kohlenhydrat-Eingaben des Nutzers automatisch erkennen, dass die Glukosewerte durch Mahlzeiten, Adrenalin oder anderen Einflüsse signifikant steigen und wird versuchen, dies mit **SMB** abzufangen. Dies funktioniert aber zur Sicherheit auch andersherum und kann bei unvorhergesehen schnellem Glukoseabfall den SMB früher stoppen. Deshalb sollte UAM bei SMB auch immer aktiv sein.

SMB doesn't decide on its own that insulin is needed — it draws on the same blended BG predictions (eventual BG, zero-temp, COB, UAM) described in [how AAPS turns predictions into a dosing decision](#aaps-screens-how-predictions-become-a-dosing-decision). SMB and zero-temping are simply the two tools AAPS uses to act on that decision.

**Du musst [Ziel 9](#objectives-objective9) gestartet haben, um SMBs nutzen zu können.**

See also [OpenAPS's oref1/SMB documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb) for the full technical treatment, or [Tim's info on SMB](https://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/) for a community write-up.

Die Einstellungen des OpenAPS SMB ist im Folgenden beschrieben.

(Open-APS-features-max-u-h-a-temp-basal-can-be-set-to)=

### Maximale IE/h, die als TBR gesetzt werden können

Diese Sicherheitseinstellung legt fest, welche maximale temporäre Basalrate die Insulinpumpe abgeben darf. Es wird auch als **max-basal** bezeichnet.

Der Wert wird in IE pro Stunde angegeben (IE/h). Es wird empfohlen, hier etwas vernünftiges einzugeben. Ein empfohlener Wert für diesen Parameter ist:

**MAX-BASAL = Höchste Basalrate x 4**

Wenn zum Beispiel die höchste Basalrate in deinem Profil 0.5I E/h war, kannst du das mit 4 multiplizieren, um einen Wert von 2 IE/h zu erhalten.

**AAPS** limits this value as a 'hard limit' according to [Settings > Safety > Patient age](#preferences-patient-type). Die harten Grenzen sind folgende:

- Kind: 2
- Jugendlicher: 5
- Erwachsener: 10
- Insulinresistenter Erwachsener: 12
- Schwangere: 25

*Siehe auch [Übersicht der fest programmierten Limits](#Open-APS-features-overview-of-hard-coded-limits).*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over)=

### Maximales Gesamt-IOB, das nicht überschritten werden darf [IE]

Dieser Wert bestimmt das maximale **Insulin an Bord** (Basal- und Bolus-IOB; sog. aktives Insulin)), das **AAPS** im Closed Loop Modus nicht überschreitet. Es wird auch als **maxIOB** bezeichnet.

Liegt das aktuelle IOB (z. B nach einem Mahlzeit-Bolus) über dem festgelegten Wert, dann wird die Insulinabgabe durch den Loop unterbunden, bis die IOB-Grenze wieder unterschritten ist.

Ein guter Anfangswert für diesen Parameter ist:

      maxIOB = mittlerer Mahlzeitenbolus + 3x höchste tägliche Basalrate
    

Sei bei der Anpassung des **max-IOB** vorsichtig. Das ist sehr individuell und hängt stark vom durchschnittlichen Gesamtinsulinbedarf ab (total daily dose = TDD).

**AAPS** limits this value as a 'hard limit' according to [Settings > Safety > Patient age](#preferences-patient-type). Die harten Grenzen sind folgende:

- Child: 7
- Teenager: 13
- Adult: 22
- Insulin resistant adult: 30
- Pregnant: 70

*Siehe auch [Übersicht der fest programmierten Limits](#Open-APS-features-overview-of-hard-coded-limits).*

Hinweis: Bei der Verwendung von **SMB** wird **max-IOB** anders berechnet als in AMA. In **AMA** ist maxIOB ein Sicherheitsparameter für das Basal-**IOB**, während im SMB-Modus auch Bolus-IOB enthalten ist.

### Use dynamic sensitivity

Dies ist die Funktion [Dynamischer ISF](../DailyLifeWithAaps/DynamicISF.md). Mit der Aktivierung werden neue Einstellungsoptionen verfügbar. Die Einstellungen werden auf der Seite zum [Dynamischen ISF](#dyn-isf-preferences) beschrieben.

### Use Autosens

Das ist die [Autosens](#Open-APS-features-autosens)-Funktion. When using DynamicISF, Autosens cannot be used, since they are two different algorithms altering the same variable (sensitivity).

Autosens analysiert Deine Glukosewert-Abweichungen (positiv/negativ/neutral). Dabei wird anhand dieser Abweichungen ermittelt, wie empfindlich / resistent Du auf Insulin reagierst und Deine Basalrate und der ISF entsprechend angepasst.

Mit der Aktivierung werden neue Einstellungsoptionen verfügbar.

#### Empfindlichkeit erhöht den Zielwert

Wenn diese Option aktiviert ist, kann die Empfindlichkeitserkennung (Autosens) das Ziel erhöhen, wenn eine höhere (Insulin-)Empfindlichkeit erkannt wird (unter 100%). In diesem Fall wird Dein Ziel um den Prozentsatz der erkannten Empfindlichkeit erhöht.

If the target is modified due to sensitivity detection, it will be displayed with a green background on your main screen.

![Von Autosens angepasster Zielwert](../images/Home2020_DynamicTargetAdjustment.png)

This setting is available when one of "Use dynamic sensitivity" or "Use Autosens" are enabled.

#### Resistenz senkt den Zielwert

Wenn diese Option aktiviert ist, kann die Empfindlichkeitserkennung (Autosens) das Ziel absenken, wenn eine Insulinresistenz erkannt wird (über 100%). In diesem Fall wird Dein Ziel um den Prozentsatz der erkannten Resistenz reduziert.

This setting is available when one of "Use dynamic sensitivity" or "Use Autosens" are enabled.

### Aktiviere SMB

Aktiviere diese Option, um die SMB-Funktionalität zu nutzen. Ist sie deaktiviert, werden keine **SMBs** abgegeben.

Mit der Aktivierung werden neue Einstellungsoptionen verfügbar.

(Open-APS-features-enable-smb-with-high-temp-targets)=

#### Enable SMB with high temp target

If this setting is enabled, **SMBs** will still be delivered even if the user has selected a high **Temp Target** (defined as 100 mg/dL or 5.6 mmol/L and above, regardless of **Profile** target). Use caution when enabling it: **SMBs** can become overly aggressive if your settings are not well tuned or if your **Profile** is subject to frequent variation (for example, with children).

Bei ausgeschalteter Option werden SMBs nicht abgegeben. For example, if this option is disabled, **SMBs** can be disabled by setting a **Temp Target** of 100 mg/dL or 5.6 mmol/L and above. This option will also disable **SMBs** regardless of what other condition is trying to enable SMB — apart from a low **Temp Target** such as **Eating Soon** (or any **Temp Target** of 98 mg/dL or 5.4 mmol/L and below), which may still deliver **SMBs** to drive **BG** towards the target.

If this setting is enabled, **SMB** will only be enabled with a high temp target if **Enable SMB with low temp target** is also enabled.

(Open-APS-features-enable-smb-always)=

#### SMB immer aktivieren

If this setting is enabled, SMB is always enabled (independent of COB, temp targets or boluses). Wenn diese Einstellung aktiviert ist, sind die übrigen Bedingungen ohne Einfluss und werden nicht berücksichtigt. Wenn jedoch **Aktiviere SMB bei hohem temporären Ziel** ausgeschaltet ist und ein hohes temporäres Ziel aktiv ist, werden SMBs nicht abgegeben.

Diese Einstellung ist nur dann verfügbar, wenn **AAPS** erkennt, dass Du eine [zuverlässige BZ-Quelle](#GettingStarted-TrustedBGSource) mit erweiterter Filterung verwendest. Der FreeStyle Libre 1 wird nicht als zuverlässige Quelle eingestuft, da bei einem Sensorausfall die Gefahr besteht, dass der letzte (und über die Zeit damit falsche) Glukosewert unendlich oft gesendet wird.

Verrauschte (d. h. springende) Werte könnten **AAPS** annehmen lassen, dass der Glukosespiegel wirklich schnell steigt und mit unnötigen SMBs ausgeglichen wird. Weitere Informationen über verrauschte Werte und deren Glättung findest Du [hier](../CompatibleCgms/SmoothingBloodGlucoseData.md).

#### Aktiviere SMB während aktiver Kohlenhydrate.

Wenn diese Einstellung aktiviert ist, werden SMB aktiviert, wenn der COB größer als 0 (z. B. nach Mahlzeiten) ist.

Wenn „SMB immer aktivieren“ eingeschaltet ist, ist diese Einstellung nicht verfügbar.

#### Enable SMB with low temp target

If this setting is enabled, SMB is enabled when a temp target is set (eating soon, activity, hypo, custom). If this setting is enabled but **Enable SMB with high temp target** is disabled, SMB will be enabled when a low temp target is set (98 mg/dL or 5.4 mmol/L and below) but disabled when a high temp target is set.

Wenn „SMB immer aktivieren“ eingeschaltet ist, ist diese Einstellung nicht verfügbar.

#### Aktiviere SMB nach Mahlzeiten.

Bei eingeschalter Option, sind SMBs für einen Zeitraum von 6h ab dem Zeitpunkt für den KH angekündigt sind aktiv, auch wenn COB mittlerweile 0 ist (keine aktiven KH mehr vorhanden sind).

Aus Sicherheitsgründen ist diese Einstellung nur dann verfügbar, wenn **AAPS** erkennt, dass Du eine zuverlässige BZ-Quelle verwendest. Es wird nicht angezeigt, wenn „SMB immer aktivieren“ eingeschaltet ist.

Diese Einstellung ist nur dann verfügbar, wenn **AAPS** erkennt, dass Du eine [zuverlässige BZ-Quelle](#GettingStarted-TrustedBGSource) mit erweiterter Filterung verwendest. Der FreeStyle Libre 1 wird nicht als zuverlässige Quelle eingestuft, da bei einem Sensorausfall die Gefahr besteht, dass der letzte (und über die Zeit damit falsche) Glukosewert unendlich oft gesendet wird.

Verrauschte (d. h. springende) Werte könnten **AAPS** annehmen lassen, dass der Glukosespiegel wirklich schnell steigt und mit unnötigen SMBs ausgeglichen wird. Weitere Informationen über verrauschte Werte und Datenglättung findest Du [hier](../CompatibleCgms/SmoothingBloodGlucoseData.md).  
Diese Einstellung wird nicht angezeigt, wenn „SMB immer aktivieren“ eingeschaltet ist.

#### SMB interval

Diese Funktion beschränkt die Häufigkeit der SMBs. Dieser Wert bestimmt die Zeit, die zwischen der Abgabe der einzelnen SMBs mindestens vergehen muss. Sobald ein neuer Glukosewert empfangen wird (in der Regel alle 5 Minuten), läuft der Loop und führt die entsprechenden Berechnungen durch. Ziehe davon 2 Minuten ab, um dem Loop genug Zeit zu geben die Berechnungen abzuschließen. Wenn Du beispielsweise möchtest, dass mit jedem Loop-Lauf ein SMB abgegeben wird, dann setze diesen Wert auf 3 Minuten.

Standardwert: 3 Min.

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

#### Max minutes of basal to limit SMB

Dies ist eine wichtige Sicherheitseinstellung. Dieser Wert legt fest, wie viel SMB in einer bestimmten Zeit auf der Basis der Menge an Basalinsulin abgegeben werden kann, wenn es von COBs abgedeckt wird.

Eine Erhöhung des Wertes macht den SMB aggressiver. Zu Beginn solltest Du mit einem Standardwert von 30 Minuten starten. Wenn Du mehr Erfahrung gesammelt hast, erhöhe den Wert in 15 Minuten-Schritten und schaue Dir die Effekte über mehrere Mahlzeiten hinweg genau an.

Ein Wert über 90 Minuten führt dazu, dass der Algorithmus mit einer temporären 0 IE/h-Basalrate (“zero-temp”) einen fallenden Glukosewert möglicherweise nicht mehr sicher abfangen kann. Daher wird davon abgeraten, einen Wert über 90 Minuten hinaus, zu setzen. Gerade in der Testphase neuer Einstellungen, solltest Du Alarme nutzen, um Dich vor einer Hypo frühzeitig zu warnen.

Standardwert: 30 Min.

#### UAM max minutes of basal to limit SMB

This setting allows you to adjust the strength of SMB during UAM, when there are no more carbs.

Default value : the same as **Max minutes of basal to limit SMB**.

Diese Einstellung wird nur angezeigt, wenn „Aktiviere SMB“ und „Aktiviere UAM“ eingeschaltet sind.

(enable-uam)=

### Aktiviere UAM

Wenn Du diese Option aktivierst, dann kann der SMB unangekündigte Mahlzeiten erkennen. Das hilft, wenn Du vergessen haben solltest in **AAPS** KH einzugeben, Dich bei der KH-Menge verschätzt hast oder eine fett- und eiweißlastige Mahlzeit länger wirkt. UAM kann also auch ohne manuelle Kohlenhydrat-Eingaben automatisch erkennen, dass die Glukosewerte durch Mahlzeiten, Adrenalin oder anderen Einflüsse signifikant steigen und versuchen, dies mit SMB abzufangen. Dies funktioniert aber auch andersherum: wenn der Glukosewert schnell sinkt, wird der SMB früher gestoppt.

**Deshalb sollte UAM bei SMB auch immer aktiv sein.**

(key-aaps-features-minimal-carbs-required-for-suggestion)=

### Carbs required threshold

Minimale KH-Menge in Gramm, ab der ein Alarm zur Aufnahme von Kohlenhydraten ausgelöst werden soll. Der Algorithmus empfiehlt Dir, etwas zu essen, wenn er feststellt, dass zusätzliche Kohlenhydrate benötigt werden. In diesem Fall erhältst Du eine Benachrichtigung, die Du für 5, 15 oder 30 Minuten stummschalten kannst.

Auf Wunsch können die Kohlenhydrat-Vorschläge an Nightscout gesandt werden. In diesem Fall wird eine Ankündigung angezeigt und verteilt.

In any case, the required carbs will be displayed in the COB section on your main screen.

![Display carbs required on main screen](../images/main/main_screen_carbs_required.png)

### Erweiterte Einstellungen

For the full parameter reference (including settings not covered here), see [OpenAPS's preferences and safety settings documentation](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Verwende immer das kurze durchschnittliche Delta statt des einfachen Deltas**. Wenn Du dies aktivierst, dann verwendet **AAPS** für die Berechnungen statt des aktuellen Glukosewertes den durchschnittlichen Glukosewert der letzten 15 Minuten (= kurzes durchschnittliches Delta), was normalerweise dem Durchschnittswert der letzten drei Werte entspricht. This helps **AAPS** to be steadier with noisy data sources like xDrip and Libre.

**Sicherheitsmultiplikator des Basalhöchstwertes** Dies ist eine wichtige Sicherheitseinstellung. Der voreingestellte Wert (der nur in Ausnahmefällen geändert werden muss) ist 3. Das bedeutet, dass **AAPS** daran gehindert wird, eine temporäre Basalrate zu setzen, die das Dreifache der in der Pumpe und/oder dem Profil gesetzten höchsten stündlichen Basalrate übersteigt. Beispiel: Wenn die höchste stündliche Basalrate 1,0 IE/h ist und der Sicherheitsmultiplikator des Basalhöchstwertes auf 3 gesetzt ist, dann kann **AAPS** die temporäre Basalrate höchstens auf einen Wert von 3,0 IE setzen (= 3 x 1,0 IE/h).

Standardwert: 3 (sollte nur in Ausnahmefällen geändert werden und wenn Du weißt, was das bedeutet)

**Sicherheitsmultiplikator der aktuellen Basalrate** Dies ist eine weitere wichtige Sicherheitseinstellung. Der voreingestellte Wert (der nur in Ausnahmefällen geändert werden muss) ist 4. Das bedeutet, dass **AAPS** daran gehindert wird, eine temporäre Basalrate zu setzen, die das Vierfache der in der Pumpe und/oder dem Profil gesetzten höchsten stündlichen Basalrate übersteigt.

Standardwert: 4 (sollte nur in Ausnahmefällen geändert werden und wenn du weisst, was das bedeutet)

* * *

(Open-APS-features-auto-isf)=

## Auto ISF

**Auto ISF** is an **experimental** algorithm for advanced users. It is built on OpenAPS SMB and adds rules that make the insulin sensitivity factor (ISF) stronger or weaker depending on how your glucose behaves.

It is a development feature: it can only be switched on in a [dev build](../AdvancedOptions/DevBranch.md) with **Engineering Mode** enabled. In a regular release build it stays forced off and is therefore not shown in **Configuration → APS**. Completing the [Objectives](../SettingUpAaps/CompletingTheObjectives.md) does not unlock it.

After selecting it, its **Settings** contain the OpenAPS SMB settings plus an **AutoISF settings** group:

- **Enable AutoISF**: turns the ISF adjustments on. Without it, the algorithm behaves like OpenAPS SMB.
- **AutoISF min** and **AutoISF max**: how weak and how strong the ISF is allowed to become, in the same way as the Autosens limits. With the default value 1.0 the effect is switched off.
- **Weights**: each one drives one rule, and the default value 0.0 switches the rule off. 
  - while glucose **accelerates**, ISF is strengthened (more insulin);
  - while glucose **decelerates**, ISF is weakened (less insulin);
  - while glucose is **below target**, ISF is weakened;
  - while glucose is **above target**, ISF is strengthened;
  - a **post-prandial** weight and a **duration** weight act after meals and when glucose stays high for a long time.
- **SMB delivery ratio** (with a minimum, a maximum and a BG range): what share of the insulin required can be delivered as SMB.
- **SMB max range extension**: by what factor the usual SMB size limit ([max minutes of basal](#Open-APS-features-max-minutes-of-basal-to-limit-smb-to), normally 120 minutes) may be exceeded. The default value 1 changes nothing; up to 5 is possible. Increase this experimental value slowly and with caution.
- **IOB threshold percent**: the percentage of max IOB above which SMBs are disabled.

    {admonition} Only for experienced users
    :class: danger
    With its default values Auto ISF changes nothing. Every value you raise makes **AAPS** more aggressive. Change one value at a time, in small steps, and watch the result for several days. Be extremely careful with an **AutoISF max** above 2.5.

(Open-APS-features-advanced-meal-assist-ama)=

## Erweiterter Mahlzeit-Assistent (AMA)

AMA steht für „advanced meal assist“ und ist eine OpenAPS-Funktion aus 2017 (Oref0). Nachdem du dir einen Bolus gegeben hast, darf AMA schneller eine höhere temporäre Basalrate wählen, vorausgesetzt du gibst die Kohlenhydrate verlässlich ein.

Siehe auch: [OpenAPS-Dokumentation (englisch)](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Max IE/h, die als temporäre Basalrate gesetzt werden können (OpenAPS “max-basal”)

Diese Sicherheitseinstellung hindert **AAPS** daran, jemals eine gefährlich hohe Basalrate zu setzen und begrenzt die temporäre Basalrate auf x IE/h. Es wird empfohlen, hier etwas vernünftiges einzugeben. Eine gute Empfehlung ist, den höchsten stündlichen Basalratenwert in Deinem Profil zu verwenden und diesen mit 4 oder mindestens mit 3 zu multiplizieren. Beispiel: wenn der höchste stündliche Basalratenwert in deinem Profil 1.0 IE/h ist, kannst du diesen mit 4 multiplizieren, wodurch du einen Wert von 4 IE/h erhältst, so dass du "4" als Sicherheitseinstellung setzen kannst.

Du kannst aber keinen beliebigen Wert wählen: AAPS begrenzt als „hartes Limit“ den Wert in Abhängigkeit vom Patientenalter in den Einstellungen. Das „hard limit“ für maxIOB ist bei AMA niedriger als bei SMB. Bei Kindern ist der zulässige Wert am niedrigsten, bei insulinresistenten Erwachsenen am höchsten.

Die in **AAPS** fest hinterlegten Parameter sind:

- Kind: 2
- Jugendlicher: 5
- Erwachsener: 10
- Insulinresistenter Erwachsener: 12
- Schwangere: 25

*Siehe auch [Übersicht der fest programmierten Limits](#Open-APS-features-overview-of-hard-coded-limits).*

### Maximales Basal-IOB, das OpenAPS abgeben darf \[IE\] (OpenAPS „max-iob“)

Dieser Parameter begrenzt das maximale Basal-IOB, bis zu dem **AAPS** noch funktioniert. Wenn dieses IOB höher ist, dann wird kein weiteres Basalinsulin mehr abgegeben, bis das Basal-IOB wieder unter dem Grenzwert liegt.

Der Standardwert ist 2, aber Du solltest diesen Parameter in kleinen Schritten erhöhen, um zu sehen, wie stark sich die Anpassung bei Dir auswirkt und welcher Wert am besten passt. Das ist sehr individuell und hängt stark vom durchschnittlichen Gesamtinsulinbedarf ab (total daily dose = TDD). Zur Sicherheit gibt es ein Limit, das auf dem Patientenalter basiert. Das „hard limit“ für maxIOB ist bei AMA niedriger als bei SMB.

- Kind: 3
- Jugendlicher: 5
- Erwachsener: 7
- Insulinresistenter Erwachsener: 12
- Schwangere: 25

*Siehe auch [Übersicht der fest programmierten Limits](#Open-APS-features-overview-of-hard-coded-limits).*

### Use Autosens (AMA)

Hier kannst Du auswählen, ob die [Empfindlichkeitserkennung](../DailyLifeWithAaps/SensitivityDetectionAndCob.md) Autosens verwendet werden soll oder nicht.

### Autosens adjust targets

Wenn Du diese Option aktivierst, dann kann Autosense auch Ziele anpassen (neben Basalrate und ISF). Dadurch kann **AAPS** „aggressiver“ oder weniger aggressiv arbeiten. Der aktuell eingestellte Zielwert wird dadurch möglicherweise schneller erreicht.

### Erweiterte Einstellungen

- Normally you do not have to change the settings in this dialog!
- If you want to change them anyway, make sure you understand what you are doing — see the full parameter reference in [OpenAPS's preferences and safety settings documentation](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Verwende immer das kurze durchschnittliche Delta statt des einfachen Deltas**. Wenn Du dies aktivierst, dann verwendet **AAPS** für die Berechnungen statt des aktuellen Glukosewertes den durchschnittlichen Glukosewert der letzten 15 Minuten (= kurzes durchschnittliches Delta), was normalerweise dem Durchschnittswert der letzten drei Werte entspricht. This helps **AAPS** to work more steady with noisy data sources like xDrip and Libre.

**Sicherheitsmultiplikator des Basalhöchstwertes** Dies ist eine wichtige Sicherheitseinstellung. Der voreingestellte Wert (der nur in Ausnahmefällen geändert werden muss) ist 3. Das bedeutet, dass **AAPS** daran gehindert wird, eine temporäre Basalrate zu setzen, die das Dreifache der in der Pumpe gesetzten höchsten stündlichen Basalrate übersteigt. Beispiel: Wenn die höchste stündliche Basalrate 1,0 IE/h ist und der Sicherheitsmultiplikator des Basalhöchstwertes auf 3 gesetzt ist, dann kann **AAPS** die temporäre Basalrate höchstens auf einen Wert von 3,0 IE setzen (= 3 x 1,0 IE/h).

Standardwert: 3 (sollte nur in Ausnahmefällen geändert werden und wenn Du weißt, was das bedeutet)

**Sicherheitsmultiplikator der aktuellen Basalrate** Dies ist eine weitere wichtige Sicherheitseinstellung. Der voreingestellte Wert (der nur in Ausnahmefällen geändert werden muss) ist 4. Das bedeutet, dass **AAPS** daran gehindert wird, eine temporäre Basalrate zu setzen, die das Vierfache der in der Pumpe gesetzten höchsten stündlichen Basalrate übersteigt.

Standardwert: 4 (sollte nur in Ausnahmefällen geändert werden und wenn du weisst, was das bedeutet)

**Bolus Snooze DIA Divisor** Die Funktion „Bolus Snooze“ wird dann aktiviert, wenn du einen Essensbolus gegeben hast. **AAPS** reagiert nach den Mahlzeiten für die Dauer des DIA geteilt durch den „Bolus-Snooze“-Parameter nicht mit einer niedrigen temporären Basalrate. Der Standardwert ist 2. Dies bedeutet: Bei einem DIA von 5 Stunden wird der “Bolus snooze” über 5 : 2 = 2,5 Stunden geradlinig auslaufen.

Standardwert: 2

* * *

(Open-APS-features-overview-of-hard-coded-limits)=

## Übersicht der fest programmierten Limits

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