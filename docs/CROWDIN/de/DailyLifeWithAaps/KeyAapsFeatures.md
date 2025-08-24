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

*See also [overview of hard-coded limits](#Open-APS-features-overview-of-hard-coded-limits).*

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

*See also [overview of hard-coded limits](#Open-APS-features-overview-of-hard-coded-limits).*

Hinweis: Bei der Verwendung von **SMB** wird **max-IOB** anders berechnet als in AMA. In **AMA** ist maxIOB ein Sicherheitsparameter für das Basal-**IOB**, während im SMB-Modus auch Bolus-IOB enthalten ist.

Siehe auch [OpenAPS-Dokumentation zu SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb).

### Dynamische Empfindlichkeit aktivieren

Dies ist die Funktion [Dynamischer ISF](../DailyLifeWithAaps/DynamicISF.md). Mit der Aktivierung werden neue Einstellungsoptionen verfügbar. Die Einstellungen werden auf der Seite zum [Dynamischen ISF](#dyn-isf-preferences) beschrieben.

#### Hohe temporäre Ziele erhöhen die Sensitivität

Wenn Du diese Option aktivierst, wird die Insulinempfindlichkeit bei einem gesetzten temporären Ziel oberhalb von 100 mg/dl (oder 5,6 mmol/l) erhöht. Das bedeutet, der Insulinsensibilitäts-Faktor (ISF) wird erhöht während der Kohlenhydrate-Faktor (IC) und die Basalrate gesenkt werden. Am Ende macht eine gesetztes temporäres hohes Ziel **AAPS** weniger aggressiv.

#### Niedrige temporäre Ziele senken die Sensitivität

Wenn du diese Option aktivierst, dann wird die Insulinempfindlichkeit verringert, wenn du ein temporäres Ziel unter 100 mg/dl bzw. 5,6 mmol/l setzt. Das bedeutet, der Insulinsensibilitäts-Faktor (ISF) wird gesenkt während der Kohlenhydrate-Faktor (IC) und die Basalrate erhöht werden. Wenn ein niedriges temporäres Ziel aktiv ist, macht diese Option **AAPS** aggressiver.

### Nutze Autosens

This is the [Autosens](#Open-APS-features-autosens) feature. Autosens kann nicht gleichzeitig mit dem dynamischen ISF genutzt werden. Der Grund dafür ist, dass die beiden unterschiedlichen Algorithmen die gleichen Variablen zur Empfindlichkeit verändern würden.

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

Diese Einstellung ist nur dann verfügbar, wenn **AAPS** erkennt, dass Du eine [zuverlässige BZ-Quelle](#GettingStarted-TrustedBGSource) mit erweiterter Filterung verwendest. Der FreeStyle Libre 1 wird nicht als zuverlässige Quelle eingestuft, da bei einem Sensorausfall die Gefahr besteht, dass der letzte (und über die Zeit damit falsche) Glukosewert unendlich oft gesendet wird.

Verrauschte (d. h. springende) Werte könnten **AAPS** annehmen lassen, dass der Glukosespiegel wirklich schnell steigt und mit unnötigen SMBs ausgeglichen wird. Weitere Informationen über verrauschte Werte und deren Glättung findest Du [hier](../CompatibleCgms/SmoothingBloodGlucoseData.md).

#### Aktiviere SMB während aktiver Kohlenhydrate.

Wenn diese Einstellung aktiviert ist, werden SMB aktiviert, wenn der COB größer als 0 (z.B. nach Mahlzeiten) ist.

Wenn „SMB immer aktivieren“ eingeschaltet ist, ist diese Einstellung nicht verfügbar.

#### Aktiviere SMB bei aktiven temporären Zielen

Wenn diese Option eingeschaltet ist, werden SMBs bei einem beliebigen gesetzten temporären Ziel (Bald essen, Aktivität, Hypo oder Individuell) abgegeben. Sollte diese Option eingeschaltet sein und **Aktiviere SMB bei hohem temporären Ziel** ist gleichzeritg ausgeschaltet, werden SMBs nur bei einem gesetzten niedrigen Ziel (unter 100 mg/dl) abgegeben, nicht aber bei einem hohen Ziel.

Wenn „SMB immer aktivieren“ eingeschaltet ist, ist diese Einstellung nicht verfügbar.

#### Aktiviere SMB nach Mahlzeiten

Bei eingeschalter Option, sind SMBs für einen Zeitraum von 6h ab dem Zeitpunkt für den KH angekündigt sind aktiv, auch wenn COB mittlerweile 0 ist (keine aktiven KH mehr vorhanden sind).

Aus Sicherheitsgründen ist diese Einstellung nur dann verfügbar, wenn **AAPS** erkennt, dass Du eine zuverlässige BZ-Quelle verwendest. Es wird nicht angezeigt, wenn „SMB immer aktivieren“ eingeschaltet ist.

Diese Einstellung ist nur dann verfügbar, wenn **AAPS** erkennt, dass Du eine [zuverlässige BZ-Quelle](#GettingStarted-TrustedBGSource) mit erweiterter Filterung verwendest. Der FreeStyle Libre 1 wird nicht als zuverlässige Quelle eingestuft, da bei einem Sensorausfall die Gefahr besteht, dass der letzte (und über die Zeit damit falsche) Glukosewert unendlich oft gesendet wird.

Verrauschte (d. h. springende) Werte könnten **AAPS** annehmen lassen, dass der Glukosespiegel wirklich schnell steigt und mit unnötigen SMBs ausgeglichen wird. Weitere Informationen über verrauschte Werte und Datenglättung findest Du [hier](../CompatibleCgms/SmoothingBloodGlucoseData.md).  
Diese Einstellung wird nicht angezeigt, wenn "SMB immer aktivieren" eingeschaltet ist.

#### Wie häufig SMBs abgegeben werden (in Min.)

Diese Funktion beschränkt die Häufigkeit der SMBs. Dieser Wert bestimmt die Zeit, die zwischen der Abgabe der einzelnen SMBs mindestens vergehen muss. Sobald ein neuer Glukosewert empfangen wird (in der Regel alle 5 Minuten), läuft der Loop und führt die entsprechenden Berechnungen durch. Ziehe davon 2 Minuten ab, um dem Loop genug Zeit zu geben die Berechnungen abzuschließen. Wenn Du beispielsweise möchtest, dass mit jedem Loop-Lauf ein SMB abgegeben wird, dann setze diesen Wert auf 3 Minuten.

Standardwert: 3 Min.

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

#### SMB-Basal-Limit in Minuten

Dies ist eine wichtige Sicherheitseinstellung. Dieser Wert legt fest, wie viel SMB in einer bestimmten Zeit auf der Basis der Menge an Basalinsulin abgegeben werden kann, wenn es von COBs abgedeckt wird.

Eine Erhöhung des Wertes macht den SMB aggressiver. Zu Beginn solltest Du mit einem Standardwert von 30 Minuten starten. Wenn Du mehr Erfahrung gesammelt hast, erhöhe den Wert in 15 Minuten-Schritten und schaue Dir die Effekte über mehrere Mahlzeiten hinweg genau an.

Ein Wert über 90 Minuten führt dazu, dass der Algorithmus mit einer temporären 0 IE/h-Basalrate (“zero-temp”) einen fallenden Glukosewert möglicherweise nicht mehr sicher abfangen kann. Daher wird davon abgeraten, einen Wert über 90 Minuten hinaus, zu setzen. Gerade in der Testphase neuer Einstellungen, solltest Du Alarme nutzen, um Dich vor einer Hypo frühzeitig zu warnen.

Standardwert: 30 Min.

#### SMB Basal-Limit in Minuten für UAM

Wenn es keine weiteren Kohlenhydrate mehr gibt, wird mit dieser Einstellung die SMB-Stärke während UAM angepasst.

Standardwert: Der Wert, der unter **SMB-Basal-Limit in Minuten** hinterlegt ist.

Diese Einstellung wird nur angezeigt, wenn „Aktiviere SMB“ und „Aktiviere UAM“ eingeschaltet sind.

### Aktiviere UAM

Wenn du diese Option aktivierst, dann kann der SMB unangekündigte Mahlzeiten erkennen. Das hilft, wenn Du vergessen haben solltest in **AAPS**KH einzugeben, Dich bei der KH-Menge verschätzt hast oder eine fett- und eiweißlastige Mahlzeit länger wirkt. UAM kann also auch ohne manuelle Kohlenhydrat-Eingaben automatisch erkennen, dass die Glukosewerte durch Mahlzeiten, Adrenalin oder anderen Einflüsse signifikant steigen und versuchen, dies mit SMB abzufangen. Dies funktioniert aber auch andersherum: wenn der Glukosewert schnell sinkt, wird der SMB früher gestoppt.

**Deshalb sollte UAM bei SMB auch immer aktiv sein.**

(key-aaps-features-minimal-carbs-required-for-suggestion)=

### Minimale KH-Menge, die für einen Vorschlag erforderlich ist

Minimale KH-Menge in Gramm, ab der ein Alarm zur Aufnahme von Kohlenhydraten ausgelöst werden soll. Der Algorithmus empfiehlt Dir, etwas zu essen, wenn er feststellt, dass zusätzliche Kohlenhydrate benötigt werden. In diesem Fall erhältst Du eine Benachrichtigung, die Du für 5, 15 oder 30 Minuten stummschalten kannst.

Auf Wunsch können die Kohlenhydrat-Vorschläge an Nightscout gesandt werden. In diesem Fall wird eine Ankündigung angezeigt und verteilt.

Zusätzlich werden die vorgeschlagenen Kohlenhydrate auf dem Startbildschirm im Bereich COB angezeigt.

![Kohlenhydrat-Vorschlag auf dem Startbildschirm](../images/Pref2020_CarbsRequired.png)

### Erweiterte Einstellungen

Weitere Informationen findest Du hier: [OpenAPS Docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Verwende immer das kurze durchschnittliche Delta statt des einfachen Deltas** Wenn Du dies aktivierst, dann verwendet **AAPS** für die Berechnungen statt des aktuellen Glukosewertes den durchschnittlichen Glukosewert der letzten 15 Minuten (= kurzes durchschnittliches Delta), was normalerweise dem Durchschnittswert der letzten drei Werte entspricht. Dies hilft **AAPS** dabei, mit Werten aus verrauschten Quellen wie xDrip+ und dem Libre stabiler zu arbeiten.

**Sicherheitsmultiplikator des Basalhöchstwertes** Dies ist eine wichtige Sicherheitseinstellung. Der voreingestellte Wert (der nur in Ausnahmefällen geändert werden muss) ist 3. Das bedeutet, dass **AAPS** daran gehindert wird, eine temporäre Basalrate zu setzen, die das Dreifache der in der Pumpe und/oder dem Profil gesetzten höchsten stündlichen Basalrate übersteigt. Beispiel: Wenn die höchste stündliche Basalrate 1,0 IE/h ist und der Sicherheitsmultiplikator des Basalhöchstwertes auf 3 gesetzt ist, dann kann **AAPS** die temporäre Basalrate höchstens auf einen Wert von 3,0 IE setzen (= 3 x 1,0 IE/h).

Standardwert: 3 (sollte nur in Ausnahmefällen geändert werden und wenn Du weißt, was das bedeutet)

**Sicherheitsmultiplikator der aktuellen Basalrate** Dies ist eine weitere wichtige Sicherheitseinstellung. Der voreingestellte Wert (der nur in Ausnahmefällen geändert werden muss) ist 4. Das bedeutet, dass **AAPS** daran gehindert wird, eine temporäre Basalrate zu setzen, die das Vierfache der in der Pumpe und/oder dem Profil gesetzten höchsten stündlichen Basalrate übersteigt.

Standardwert: 4 (sollte nur in Ausnahmefällen geändert werden und wenn du weisst, was das bedeutet)

* * *

(Open-APS-features-advanced-meal-assist-ama)=

## Erweiterter Mahlzeit-Assistent (AMA)

AMA steht für “advanced meal assist” und ist eine OpenAPS-Funktion aus 2017 (Oref0). Nachdem du dir einen Bolus gegeben hast, darf AMA schneller eine höhere temporäre Basalrate wählen, vorausgesetzt du gibst die Kohlenhydrate verlässlich ein.

Siehe auch: [OpenAPS-Dokumentation (englisch)](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Max IE/h, die als temporäre Basalrate gesetzt werden können (OpenAPS “max-basal”)

Diese Sicherheitseinstellung hindert **AAPS** daran, jemals eine gefährlich hohe Basalrate zu setzen und begrenzt die temporäre Basalrate auf x IE/h. Es wird empfohlen, hier etwas vernünftiges einzugeben. Eine gute Empfehlung ist, den höchsten stündlichen Basalratenwert in deinem Profil zu verwenden und diesen mit 4 oder mindestens mit 3 zu multiplizieren. Beispiel: wenn der höchste stündliche Basalratenwert in deinem Profil 1.0 IE/h ist, kannst du diesen mit 4 multiplizieren, wodurch du einen Wert von 4 IE/h erhältst, so dass du "4" als Sicherheitseinstellung setzen kannst.

Du kannst aber keinen beliebigen Wert wählen: AAPS begrenzt als „hartes Limit“ den Wert in Abhängigkeit vom Patientenalter in den Einstellungen. Das "hard limit" für maxIOB ist bei AMA niederiger als bei SMB. Bei Kindern ist der zulässige Wert am niedrigsten, bei insulinresistenten Erwachsenen am höchsten.

Die in **AAPS** fest hinterlegten Parameter sind:

- Kind: 2
- Jugendlicher: 5
- Erwachsener: 10
- Insulinresistenter Erwachsener: 12
- Schwangere: 25

*See also [overview of hard-coded limits](#Open-APS-features-overview-of-hard-coded-limits).*

### Maximales Basal-IOB, das OpenAPS abgeben darf \[IE\] (OpenAPS “max-iob”)

Dieser Parameter begrenzt das maximale Basal-IOB, bis zu dem **AAPS** noch funktioniert. Wenn dieses IOB höher ist, dann wird kein weiteres Basalinsulin mehr abgegeben, bis das Basal-IOB wieder unter dem Grenzwert liegt.

Der Standardwert ist 2, aber Du solltest diesen Parameter in kleinen Schritten erhöhen, um zu sehen, wie stark sich die Anpassung bei Dir auswirkt und welcher Wert am besten passt. Das ist sehr individuell und hängt stark vom durchschnittlichen Gesamtinsulinbedarf ab (total daily dose = TDD). Zur Sicherheit gibt es ein Limit, das auf dem Patientenalter basiert. Das "hard limit" für maxIOB ist bei AMA niederiger als bei SMB.

- Kind: 3
- Jugendlicher: 5
- Erwachsener: 7
- Insulinresistenter Erwachsener: 12
- Schwangere: 25

*See also [overview of hard-coded limits](#Open-APS-features-overview-of-hard-coded-limits).*

### Verwende AMA Autosense

Hier kannst Du auswählen, ob die [Empfindlichkeitserkennung](../DailyLifeWithAaps/SensitivityDetectionAndCob.md) Autosens verwendet werden soll oder nicht.

### Autosense passt auch temporäre Ziele an

Wenn Du diese Option aktivierst, dann kann Autosense auch Ziele anpassen (neben Basalrate und ISF). Dadurch kann **AAPS** „aggressiver“ oder weniger aggressiv arbeiten. Der aktuell eingestellte Zielwert wird dadurch möglicherweise schneller erreicht.

### Erweiterte Einstellungen

- Normalerweise musst Du die Einstellungen in diesem Dialog nicht ändern!
- Falls Du sie doch ändern willst, lies in jedem Fall vorher die Details dazu in den [OpenAPS Docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#) und stelle sicher, dass Du weißt, was Du tust.

**Verwende immer das kurze durchschnittliche Delta statt des einfachen Deltas** Wenn Du dies aktivierst, dann verwendet **AAPS** für die Berechnungen statt des aktuellen Glukosewertes den durchschnittlichen Glukosewert der letzten 15 Minuten (= kurzes durchschnittliches Delta), was normalerweise dem Durchschnittswert der letzten drei Werte entspricht. Dies erlaubt **AAPS**, mit Werten aus verrauschten Quellen wie xDrip+ und dem Libre stabiler zu arbeiten.

**Sicherheitsmultiplikator des Basalhöchstwertes** Dies ist eine wichtige Sicherheitseinstellung. Der voreingestellte Wert (der nur in Ausnahmefällen geändert werden muss) ist 3. Das bedeutet, dass **AAPS** daran gehindert wird, eine temporäre Basalrate zu setzen, die das Dreifache der in der Pumpe gesetzten höchsten stündlichen Basalrate übersteigt. Beispiel: Wenn die höchste stündliche Basalrate 1,0 IE/h ist und der Sicherheitsmultiplikator des Basalhöchstwertes auf 3 gesetzt ist, dann kann **AAPS** die temporäre Basalrate höchstens auf einen Wert von 3,0 IE setzen (= 3 x 1,0 IE/h).

Standardwert: 3 (sollte nur in Ausnahmefällen geändert werden und wenn Du weißt, was das bedeutet)

**Sicherheitsmultiplikator der aktuellen Basalrate** Dies ist eine weitere wichtige Sicherheitseinstellung. Der voreingestellte Wert (der nur in Ausnahmefällen geändert werden muss) ist 4. Das bedeutet, dass **AAPS** daran gehindert wird, eine temporäre Basalrate zu setzen, die das Vierfache der in der Pumpe gesetzten höchsten stündlichen Basalrate übersteigt.

Standardwert: 4 (sollte nur in Ausnahmefällen geändert werden und wenn du weisst, was das bedeutet)

**Bolus snooze dia divisor** Die Funktion “Bolus snooze” wird dann aktiviert, wenn du einen Essensbolus gegeben hast. **AAPS** reagiert nach den Mahlzeiten für die Dauer des DIA geteilt durch den „Bolus-Snooze“-Parameter nicht mit einer niedrigen temporären Basalrate. Der Standardwert ist 2. Dies bedeutet: Bei einem DIA von 5 Stunden wird der “Bolus snooze” über 5 : 2 = 2,5 Stunden geradlinig auslaufen.

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