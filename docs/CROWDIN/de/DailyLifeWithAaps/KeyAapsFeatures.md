# OpenAPS Funktionen

(Open-APS-features-autosens)=

## Autosens

* Autosens ist ein Algorithmus, der Blutzuckerabweichungen (positiv/negativ/neutral) untersucht.
* Er versucht herauszufinden, wie empfindlich/resistent Du aufgrund dieser Abweichungen bist.
* Die oref-Implementierung in **OpenAPS** läuft mit einer Kombination von Daten aus 24 und 8 Stunden. Es wird das "empfindlichere" Ergebnis der beiden Berechnungen verwendet.
* In den Versionen vor AAPS 2.7 musste der Benutzer manuell zwischen 8 oder 24 Stunden wählen.
* Ab AAPS Version 2.7 wechselt Autosens in AAPS zwischen einem 24- und 8-Stunden-Fenster zur Berechnung der Empfindlichkeit. Dabei wird das empfindlichere Ergebnis verwendet. 
* Wenn Du bisher oref1 genutzt hast, wirst Du wahrscheinlich bemerken, dass das System weniger dynamisch auf Veränderungen reagiert, da zwischen 8 und 24 Stunden gewechselt wird.
* Der Wechsel der Kanüle oder ein Profilwechsel setzen Autosens auf 100% zurück. Ausnahme ist ein prozentualer Profilwechsel mit festgelegter Dauer. Bei diesem wird Autosens nicht zurückgesetzt.
* Autosens passt Deine Basalrate und den ISF an (d.h. Nachahmen der Effekte einer Profilverschiebung).
* Wenn Du über einen längeren Zeitraum kontinuierlich Kohlenhydrate zu Dir nimmst, ist Autosens während dieses Zeitraums weniger effektiv, da Kohlenhydrate aus den Berechnungen der BZ-Abweichungen ausgenommen werden.

(Open-APS-features-super-micro-bolus-smb)=

## Super Micro Bolus (SMB)

SMB steht für “super micro bolus” und ist die neueste OpenAPS-Funktion (aus 2018) im Rahmen des Oref1-Algorithmus. Im Gegensatz zu AMA arbeitet SMB nicht so stark mit temporären Basalraten, sondern hauptsächlich mit **kleinen Supermicroboli**. In Situationen, in denen AMA 1.0 IE Insulin über eine temporäre Basalrate zugeben würde, gibt SMB im **5-Minutentakt** mehrere Supermicroboli in kleinen Schritten ab, z.B. 0.4 IE, 0.3 IE, 0.2 IE und 0.1 IE. Gleichzeitig wird die laufende Basalrate aus Sicherheitsgründen für eine bestimmte Dauer auf 0 IE/h gesetzt, damit keine Überdosierung erfolgt (**“zero-temping”**). So kann das System den BZ schneller abfangen als mit der temporären Basalratenerhöhung bei AMA.

Für Mahlzeiten mit ausschließlich langsamen Kohlenhydraten kann es - Dank der SMB - ausreichen, dem System die voraussichtliche KH-Menge anzukündigen und den Rest AAPS zu überlassen. Dies führt aber womöglich zu höheren postprandialen Spitzen, weil kein Spritz-Ess-Abstand (SEA) eingehalten werden kann. Oder du gibst, ggf. mit SEA, einen **Anfangsbolus**, der **nur zum Teil** die Kohlenhydrate abdeckt (z.B. 2/3 der geschätzten Menge) und lässt den Rest vom SMB auffüllen.

Die SMB-Funktion arbeitet mit einigen Sicherheitsmechanismen:

1. Die größte einzelne SMB-Dosis kann nur der kleinste Wert sein aus:
    
    * Wert, der der aktuellen Basalrate (wie sie autosens angepasst haben) für die unter “SMB-Basal-Limit in Minuten” voreingestellte Dauer entspricht, z.B. Basalmenge der kommenden 30 Minuten, oder
    * die Hälfte der aktuell benötigten Insulinmenge oder
    * der verbleibende Anteil deines maxIOB-Wertes in den Einstellungen.

2. Wahrscheinlich wirst du häufig niedrige temporäre Basalraten (sog. ‘low temps’) oder temporäre Basalraten mit 0 IE/h (sog. ‘zero-temps’) feststellen. Dies ist aus Sicherheitsgründen so gewollt und hat bei einem korrekt eingestellten Profil auch keine negativen Auswirkungen. Die IOB-Kurve ist aussagekräftiger als der Verlauf der temporären Basalraten.

3. Zusätzliche Berechnungen zur Vorhersage des Glukoseverlaufs, z.B. durch UAM (un-announced meals). UAM kann auch ohne manuelle Kohlenhydrat-Eingaben des Nutzers automatisch erkennen, dass die Glukosewerte auf Grund von Mahlzeiten, Adrenalin oder anderen Einflüssen signifikant steigen und versuchen, dies mit SMB abzufangen. Dies funktioniert aber zur Sicherheit auch andersherum und kann bei unvorhergesehen schnellem Glukoseabfall den SMB früher stoppen. Deshalb sollte UAM bei SMB auch immer aktiv sein.

**You must have started [objective 9](../SettingUpAaps/CompletingTheObjectives.md#objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) to use SMB.**

Siehe dazu auch (beides in Englisch): [OpenAPS Dokumentation zu oref1 SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) und [Tim's Info zu SMB](https://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/).

(Open-APS-features-max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal)=

### Max IE/h, die als TBR gesetzt werden können (OpenAPS “max-basal”)

Diese Sicherheitseinstellung legt fest, welche maximale temporäre Basalrate die Insulinpumpe abgeben darf. Der Wert sollte in der Pumpe und in AAPS übereinstimmen und mindestens beim 3-fachen der höchsten eingestellten einzelnen Basalrate liegen.

Beispiel:

Im Basalprofil ist im Laufe des Tages die Basalrate 1.00 U/h die höchste. Dann empfiehlt sich ein max-basal Wert von mindestens 3 U/h.

AAPS begrenzt als “hard limit” den Wert danach, welches Patientenalter du unter Einstellungen gewählt hast.

AAPS beschränkt den Wert wie folgt:

* Kind: 2
* Jugendlicher: 5
* Erwachsener: 10
* Insulinresistenter Erwachsener: 12
* Schwangere: 25

*See also [overview of hard-coded limits](#overview-of-hard-coded-limits).*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob)=

### Maximales Basal-IOB, das OpenAPS abgeben darf (OpenAPS “max-iob”)

maxIOB legt den Wert fest, den AAPS im "closed loop" nicht überschreiten soll. Liegt das aktuelle IOB (z.B nach einem Mahlzeit-Bolus) über dem festgelegten Wert, dann wird die Insulinabgabe durch den Loop unterbunden, bis die IOB-Grenze wieder unterschritten ist.

Wenn du OpenAPS SMB verwendest, wird max-IOB anders berechnet, als in OpenAPS AMA. In AMA war maxIOB nur ein Sicherheitsparameter für Basal IOB, während er in SMB-Mode auch Bolus IOB beinhaltet. Ein guter Startwert ist

    maxIOB = mittlerer Mahlzeitenbolus + 3x höchste tägliche Basalrate
    

Sei jedoch vorsichtig und passe deine Einstellungen in kleinen Schritten an. Das ist sehr individuell und hängt stark vom durchschnittlichen Gesamtinsulinbedarf ab (total daily dose = TDD). For safety reason, there is a limit, which depends on the patient age. The 'hard limit' for maxIOB is higher than in [AMA](#max-uh-a-temp-basal-can-be-set-to-openaps-max-basal).

* Kind: 3
* Jugendlicher: 7
* Erwachsener: 12
* Insulinresistenter Erwachsener: 25
* Schwangere: 40

*See also [overview of hard-coded limits](#overview-of-hard-coded-limits).*

Siehe auch [OpenAPS-Dokumentation zu SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb).

### Verwende AMA Autosense

Here, you can choose if you want to use the [sensitivity detection](../DailyLifeWithAaps/SensitivityDetectionAndCob.md) 'autosens' or not.

(Open-APS-features-enable-smb)=

### Aktiviere SMB

Aktiviere diese Option, um die SMB-Funktionalität zu nutzen. Wenn diese Option deaktiviert ist, werden keine SMB abgegeben.

### Aktiviere SMB bei temporären Zielen oberhalb des regulären Ziels

Wenn diese Einstellung aktiviert ist, sind SMB unabhängig vom Profil bei einem aktiven hohen temporären Ziel (Zielwert über 100 mg/dl) grundsätzlich möglich. Ergänzender Hinweis: Andere Bedingungen können aber dazu führen, dass diese SMB nicht abgegeben werden. Bei ausgeschalteter Option werden SMBs nicht abgegeben. Wenn zum Beispiel diese Option deaktiviert ist, werden SMBs durch das Setzen eines Ziels über 100 mg/dl ausgeschaltet. Diese Option deaktiviert SMBs grundsätzlich (auch wenn andere Bedingungen versuchen SMBs zu aktivieren).

Wenn diese Option aktiviert ist, werden SMB bei einem hohen temporären Ziel nur dann aktiv sein, wenn gleichzeitig auch die Option "Aktiviere SMB bei aktiven temporären Zielen" eingeschaltet ist.

(Open-APS-features-enable-smb-always)=

### SMB immer aktivieren

Wenn diese Option aktiviert ist, sind SMS immer aktiviert (unabhängig von COB, temporären Zielen und Bolus). Wenn diese Einstellung aktiviert ist, sind die übrigen Bedingungen ohne Einfluss und werden nicht berücksichtigt. Wenn jedoch „Aktiviere SMB bei hohem temporären Ziel“ ausgeschalter ist und ein hohes temporäres Ziel aktiv ist, werden SMBs nicht abgegeben. Diese Option ist nur für Sensorsysteme, die gut gefilterte (nicht rauschende /springende) Glukosewerte liefert, verfügbar. Currently it is only an available option with a Dexcom G5 or G6, if using the ['Build your own Dexcom App'](../CompatibleCgms/DexcomG6.md#if-using-g6-with-build-your-own-dexcom-app) or “native mode” in xDrip+. Falls ein gemessener Wert zu weit vom vorherigen Wert abweicht, gibt der G5/G6 einfach gar keinen Wert aus und wartet die nächste Messung in 5 Minuten ab.

Für andere CGM/FGM wie das Freestyle Libre ist die SMB-always-Option deaktiviert, bis xDrip+ ein Glättungs-Plugin beinhaltet, das verrauschte Werte filtert. Weitere Informationen dazu findest du [hier](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Aktiviere SMB während aktiver Kohlenhydrate.

Wenn diese Einstellung aktiviert ist, werden SMB aktiviert, wenn der COB größer als 0 (z.B. nach Mahlzeiten) ist.

### Aktiviere SMB bei aktiven temporären Zielen

Wenn diese Option eingeschaltet ist, werden SMBs bei einem beliebigen gesetzten temporären Ziel (Bald essen, Aktivität, Hypo oder Individuell) abgegeben. Sollte diese Option eingeschaltet sein und "Aktiviere SMB bei hohem temporären Ziel" ist zur gleichen Zeit ausgeschaltet, werden SMBs nur bei einem gesetzten niedrigen Ziel (unter 100 mg/dl) abgegeben, nicht aber bei einem hohen Ziel.

### Aktiviere SMB nach Mahlzeiten

Bei eingeschalter Option, sind SMBs für einen Zeitraum von 6h ab dem Zeitpunkt für den KH angekündigt sind aktiv, auch wenn COB mittlerweile 0 ist (keine aktiven KH mehr vorhanden sind). Diese Option ist nur für Sensorsysteme, die gut gefilterte (nicht rauschende /springende) Glukosewerte liefert, verfügbar. Currently it is only an available option with a Dexcom G5 or G6 if using the ['Build your own Dexcom App'](../CompatibleCgms/DexcomG6.md#if-using-g6-with-build-your-own-dexcom-app) or “native mode” in xDrip+. Falls ein gemessener Wert zu weit vom vorherigen Wert abweicht, gibt der G5/G6 einfach gar keinen Wert aus und wartet die nächste Messung in 5 Minuten ab.

Für andere CGM/FGM wie das Freestyle Libre ist die SMB-always-Option deaktiviert, bis xDrip+ ein Glättungs-Plugin beinhaltet, das verrauschte Werte besser glättet. Weitere Informationen dazu findest du [hier](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Wie häufig SMBs abgegeben werden (in Min.)

Diese Funktion beschränkt die Häufigkeit der SMBs. Dieser Wert bestimmt die Zeit, die zwischen der Abgabe der einzelnen SMBs mindestens vergehen muss. Sobald ein neuer Glukosewert empfangen wird (in der Regel alle 5 Minuten), läuft der Loop und führt die entsprechenden Berechnungen durch. Ziehe davon 2 Minuten ab, um dem Loop genug Zeit zu geben die Berechnungen abzuschließen. Wenn Du beispielsweise möchtest, dass mit jedem Loop-Lauf ein SMB abgegeben wird, dann setze diesen Wert auf 3 Minuten.

Standardwert: 3 Min.

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

### SMB-Basal-Limit in Minuten

Dies ist eine wichtige Sicherheitseinstellung. Dieser Wert legt fest, wie viel SMB in einer bestimmten Zeit auf der Basis der Menge an Basalinsulin abgegeben werden kann, wenn es von COBs abgedeckt wird.

Eine Erhöhung des Wertes macht den SMB aggressiver. Zu Beginn solltest Du mit einem Standardwert von 30 Minuten starten. Wenn Du mehr Erfahrung gesammelt hast, erhöhe den Wert in 15 Minuten-Schritten und schaue Dir die Effekte über mehrere Mahlzeiten hinweg genau an.

Ein Wert über 90 Minuten führt dazu, dass der Algorithmus mit einer temporären 0 IE/h-Basalrate (“zero-temp”) einen fallenden Glukosewert möglicherweise nicht mehr sicher abfangen kann. Daher wird davon abgeraten, einen Wert über 90 Minuten hinaus, zu setzen. Gerade in der Testphase neuer Einstellungen, solltest Du Alarme nutzen, um Dich vor einer Hypo frühzeitig zu warnen.

Standardwert: 30 Min.

### Aktiviere UAM

Wenn du diese Option aktivierst, dann kann der SMB unangekündigte Mahlzeiten erkennen. Das hilft, wenn Du vergessen haben solltest KH einzugeben, Dich bei der KH-Menge verschätzt hast oder eine fett- und eiweißlastige Mahlzeit länger wirkt. UAM erkennt auch ohne manuelle Kohlenhydrat-Eingaben des Nutzenden automatisch, dass die Glukosewerte aufgrund von Mahlzeiten, Adrenalin oder anderen Einflüssen signifikant steigen und wird versuchen, dies mit SMB abzufangen. Dies funktioniert aber auch andersherum: wenn der Glukosewert schnell sinkt, wird der SMB früher gestoppt.

**Deshalb sollte UAM bei SMB auch immer aktiv sein.**

### Empfindlichkeit erhöht den Zielwert

Wenn diese Option aktiviert ist, kann die Empfindlichkeitserkennung (Autosens) das Ziel erhöhen, wenn eine höhere (Insulin-)Empfindlichkeit erkannt wird (unter 100%). In diesem Fall wird Dein Ziel um den Prozentsatz der erkannten Empfindlichkeit erhöht.

### Resistenz senkt den Zielwert

Wenn diese Option aktiviert ist, kann die Empfindlichkeitserkennung (Autosens) das Ziel absenken, wenn eine Insulinresistenz erkannt wird (über 100%). In diesem Fall wird Dein Ziel um den Prozentsatz der erkannten Resistenz reduziert.

### Hohe temporäre Ziele erhöhen die Sensitivität

Wenn Du diese Option aktivierst, wird die Insulinempfindlichkeit bei einem gesetzten temporären Ziel oberhalb von 100 mg/dl (oder 5,6 mmol/l) erhöht. Das bedeutet, der Insulinsensibilitäts-Faktor (ISF) wird erhöht während der Kohlenhydrate-Faktor (IC) und die Basalrate gesenkt werden. Am Ende macht eine gesetztes temporäres hohes Ziel, AAPS weniger aggressiv.

### Niedrige temporäre Ziele senken die Sensitivität

Wenn du diese Option aktivierst, dann wird die Insulinempfindlichkeit verringert, wenn du ein temporäres Ziel unter 100 mg/dl bzw. 5,6 mmol/l setzt. Das bedeutet, der Insulinsensibilitäts-Faktor (ISF) wird gesenkt während der Kohlenhydrate-Faktor (IC) und die Basalrate erhöht werden. Wenn ein niedriges temporäres Ziel aktiv ist, macht diese Option AAPS aggressiver.

### Erweiterte Einstellungen

**Verwende immer das kurze durchschnittliche Delta statt des einfachen Deltas** Wenn Du dies aktivierst, dann verwendet AAPS für die Berechnungen statt des aktuellen Glukosewertes den durchschnittlichen Glukosewert der letzten 15 Minuten (= kurzes durchschnittliches Delta), was normalerweise dem Durchschnittswert der letzten drei Werte entspricht. Dies hilft AAPS dabei, mit Werten aus verrauschten Quellen wie xDrip+ und dem Libre stabiler zu arbeiten.

**Sicherheitsmultiplikator des Basalhöchstwertes** Dies ist eine wichtige Sicherheitseinstellung. Der voreingestellte Wert (der nur in Ausnahmefällen geändert werden muss) ist 3. Das bedeutet, dass AAPS daran gehindert wird, eine temporäre Basalrate zu setzen, die das dreifache der in der Pumpe und/oder Profil gesetzten höchsten stündlichen Basalrate übersteigt. Beispiel: Wenn die höchste stündliche Basalrate 1,0 IE/h ist und der Sicherheitsmultiplikator des Basalhöchstwertes auf 3 gesetzt ist, dann kann AAPS die temporäre Basalrate höchstens auf einen Wert von 3,0 IE setzen (= 3 x 1,0 IE/h).

Standardwert: 3 (sollte nur in Ausnahmefällen geändert werden und wenn Du weißt, was das bedeutet)

**Sicherheitsmultiplikator der aktuellen Basalrate** Dies ist eine weitere wichtige Sicherheitseinstellung. Der voreingestellte Wert (der nur in Ausnahmefällen geändert werden muss) ist 4. Das bedeutet, dass AAPS daran gehindert wird, eine temporäre Basalrate zu setzen, die das vierfache der in der Pumpe und/oder Profil aktuell laufenden Basalrate übersteigt.

Standardwert: 4 (sollte nur in Ausnahmefällen geändert werden und wenn du weisst, was das bedeutet)

* * *

(Open-APS-features-advanced-meal-assist-ama)=

## Erweiterter Mahlzeit-Assistent (AMA)

AMA steht für “advanced meal assist” und ist eine OpenAPS-Funktion aus 2017 (Oref0). Nachdem du dir einen Bolus gegeben hast, darf AMA schneller eine höhere temporäre Basalrate wählen, vorausgesetzt du gibst die Kohlenhydrate verlässlich ein.

Siehe auch: [OpenAPS-Dokumentation (englisch)](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

(Open-APS-features-max-u-hr-a-temp-basal-can-be-set-to-openaps-max-basal)=

### Max IE/h, die als temporäre Basalrate gesetzt werden können (OpenAPS “max-basal”)

Diese Sicherheitseinstellung hindert AAPS daran, jemals eine gefährlich hohe Basalrate zu setzen und begrenzt die temporäre Basalrate auf x IE/h. Es wird empfohlen, hier etwas vernünftiges einzugeben. Eine gute Empfehlung ist, den höchsten stündlichen Basalratenwert in deinem Profil zu verwenden und diesen mit 4 oder mindestens mit 3 zu multiplizieren. Beispiel: wenn der höchste stündliche Basalratenwert in deinem Profil 1.0 IE/h ist, kannst du diesen mit 4 multiplizieren, wodurch du einen Wert von 4 IE/h erhältst, so dass du "4" als Sicherheitseinstellung setzen kannst.

Du kannst aber keinen beliebigen Wert wählen: AAPS begrenzt als “hard limit” den Wert danach, welches Patientenalter du unter Einstellungen gewählt hast. Das "hard limit" für maxIOB ist bei AMA niederiger als bei SMB. Bei Kindern ist der zulässige Wert am niedrigsten, bei insulinresistenten Erwachsenen am höchsten.

In AAPS sind die folgenden harten Grenzen hinterlegt:

* Kind: 2
* Jugendlicher: 5
* Erwachsener: 10
* Insulinresistenter Erwachsener: 12
* Schwangere: 25

*See also [overview of hard-coded limits](#overview-of-hard-coded-limits).*

### Maximales Basal-IOB, das OpenAPS abgeben darf \[IE\] (OpenAPS “max-iob”)

Dieser Parameter begrenzt das maximale Basal-IOB, bis zu dem AAPS noch funktioniert. Wenn dieses IOB höher ist, dann wird kein weiteres Basalinsulin mehr abgegeben, bis das Basal-IOB wieder unter dem Grenzwert liegt.

Der Standardwert ist 2, aber du solltest diesen Parameter in kleinen Schritten erhöhen um zu sehen, wie stark sich das bei dir auswirkt und welcher Wert am besten passt. Das ist sehr individuell und hängt stark vom durchschnittlichen Gesamtinsulinbedarf ab (total daily dose = TDD). Zur Sicherheit gibt es ein Limit, das auf dem Patientenalter basiert. Das "hard limit" für maxIOB ist bei AMA niederiger als bei SMB.

* Kind: 3
* Jugendlicher: 5
* Erwachsener: 7
* Insulinresistenter Erwachsener: 12
* Schwangere: 25

*See also [overview of hard-coded limits](#overview-of-hard-coded-limits).*

### Verwende AMA Autosense

Here, you can chose, if you want to use the [sensitivity detection](../DailyLifeWithAaps/SensitivityDetectionAndCob.md) autosens or not.

### Autosense passt auch temporäre Ziele an

Wenn Du diese Option aktivierst, dann kann Autosense auch Ziele anpassen (neben Basalrate und ISF). Dadurch kann AAPS "aggressiver" oder weniger aggressiv arbeiten. Der aktuell eingestellte Zielwert wird dadurch möglicherweise schneller erreicht.

### Erweiterte Einstellungen

**Verwende immer das kurze durchschnittliche Delta statt des einfachen Deltas** Wenn Du dies aktivierst, dann verwendet AAPS für die Berechnungen statt des aktuellen Glukosewertes den durchschnittlichen Glukosewert der letzten 15 Minuten (= kurzes durchschnittliches Delta), was normalerweise dem Durchschnittswert der letzten drei Werte entspricht. Dies hilft AAPS dabei, mit Werten aus verrauschten Quellen wie xDrip+ und dem Libre stabiler zu arbeiten.

**Sicherheitsmultiplikator des Basalhöchstwertes** Dies ist eine wichtige Sicherheitseinstellung. Der voreingestellte Wert (der nur in Ausnahmefällen geändert werden muss) ist 3. Das bedeutet, dass AAPS daran gehindert wird, eine temporäre Basalrate zu setzen, die das dreifache der in der Pumpe gesetzten höchsten stündlichen Basalrate übersteigt. Beispiel: Wenn die höchste stündliche Basalrate 1,0 IE/h ist und der Sicherheitsmultiplikator des Basalhöchstwertes auf 3 gesetzt ist, dann kann AAPS die temporäre Basalrate höchstens auf einen Wert von 3,0 IE setzen (= 3 x 1,0 IE/h).

Standardwert: 3 (sollte nur in Ausnahmefällen geändert werden und wenn Du genau weißt was die Auswirkungen sind)

**Sicherheitsmultiplikator der aktuellen Basalrate** Dies ist eine weitere wichtige Sicherheitseinstellung. Der voreingestellte Wert (der nur in Ausnahmefällen geändert werden muss) ist 4. Das bedeutet, dass AAPS daran gehindert wird, eine temporäre Basalrate zu setzen, die das vierfache der in der Pumpe aktuell laufenden Basalrate übersteigt.

Standardwert: 4 (sollte nur in Ausnahmefällen geändert werden und wenn du weisst, was das bedeutet)

**Bolus snooze dia divisor** Die Funktion “Bolus snooze” wird dann aktiviert, wenn du einen Essensbolus gegeben hast. AAPS reagiert nach den Mahlzeiten für die Dauer des DIA geteilt durch den "bolus-snooze" Parameter nicht mit einer niedrigen temporären Basalrate. Der Standardwert ist 2. Dies bedeutet: Bei einem DIA von 5 Stunden wird der “Bolus snooze” über 5 : 2 = 2,5 Stunden geradlinig auslaufen.

Standardwert: 2

* * *

(Open-APS-features-overview-of-hard-coded-limits)=

## Übersicht der fest programmierten Limits

<table border="1">
  
<thead>
  <tr>
    <th width="200"></th>
    <th width="75">Kind</th>
    <th width="75">Jugendlicher</th>
    <th width="75">Erwachsener</th>
    <th width="75">Insulinresistenter Erwachsener</th>
    <th width="75">Schwangere</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>MAXBOLUS</td>
    <td>5,0</td>
    <td>10,0</td>
    <td>17,0</td>
    <td>25,0</td>
    <td>60,0</td>
  </tr>
  <tr>
    <td>MINDIA</td>
    <td>5,0</td>
    <td>5,0</td>
    <td>5,0</td>
    <td>5,0</td>
    <td>5,0</td>
  </tr>
  <tr>
    <td>MAXDIA</td>
    <td>9,0</td>
    <td>9,0</td>
    <td>9,0</td>
    <td>9,0</td>
    <td>10,0</td>
  </tr>
  <tr>
    <td>MINIC</td>
    <td>2,0</td>
    <td>2,0</td>
    <td>2,0</td>
    <td>2,0</td>
    <td>0,3</td>
  </tr>
  <tr>
    <td>MAXIC</td>
    <td>100,0</td>
    <td>100,0</td>
    <td>100,0</td>
    <td>100,0</td>
    <td>100,0</td>
  </tr>
  <tr>
    <td>MAXIOB_AMA</td>
    <td>3,0</td>
    <td>5,0</td>
    <td>7,0</td>
    <td>12,0</td>
    <td>25,0</td>
  </tr>
  <tr>
    <td>MAXIOB_SMB</td>
    <td>7,0</td>
    <td>13,0</td>
    <td>22,0</td>
    <td>30,0</td>
    <td>70,0</td>
  </tr>
  <tr>
    <td>MAXBASAL</td>
    <td>2,0</td>
    <td>5,0</td>
    <td>10,0</td>
    <td>12,0</td>
    <td>25,0</td>
  </tr>
</tbody>
</table>