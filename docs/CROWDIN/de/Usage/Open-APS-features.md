# OpenAPS Funktionen

## Autosens

* Autosens ist ein Algorithmus, der Blutzuckerabweichungen (positiv/negativ/neutral) untersucht.
* Er versucht herauszufinden, wie empfindlich/resistent Du aufgrund dieser Abweichungen bist.
* Die oref-Implementierung in **OpenAPS** läuft mit einer Kombination von Daten aus 24 und 8 Stunden. Es wird das "empfindlichere" Ergebnis der beiden Berechnungen verwendet.
* In den Versionen vor AAPS 2.7 musste der Benutzer manuell zwischen 8 oder 24 Stunden wählen.
* Ab AAPS Version 2.7 wechselt Autosens in AAPS zwischen einem 24- und 8-Stunden-Fenster zur Berechnung der Empfindlichkeit. Dabei wird das empfindlichere Ergebnis verwendet. 
* Wenn Du bisher oref1 genutzt hast, wirst Du wahrscheinlich bemerken, dass das System weniger dynamisch auf Veränderungen reagiert, da zwischen 8 und 24 Stunden gewechselt wird.
* Das Wechseln einer Kanüle oder ein Profilwechsel setzt Autosens wieder auf 0 zurück.
* Autosens passt Deine Basalrate, Deinen I:C und den ISF für Dich an (d.h. Nachahmen der Effekte einer Profilverschiebung).
* Wenn Du über einen längeren Zeitraum kontinuierlich Kohlenhydrate zu Dir nimmst, ist Autosens während dieses Zeitraums weniger effektiv, da Kohlenhydrate aus den Berechnungen der BZ-Abweichungen ausgenommen werden.

## Super Micro Bolus (SMB)

SMB steht für “super micro bolus” und ist die neueste OpenAPS-Funktion (aus 2018) im Rahmen des Oref1-Algorithmus. Im Gegensatz zu AMA arbeitet SMB nicht so stark mit temporären Basalraten, sondern hauptsächlich mit **kleinen Supermicroboli**. In Situationen, in denen AMA 1.0 IE Insulin über eine temporäre Basalrate zugeben würde, gibt SMB im **5-Minutentakt** mehrere Supermicroboli in kleinen Schritten ab, z.B. 0.4 IE, 0.3 IE, 0.2 IE und 0.1 IE. Gleichzeitig wird die laufende Basalrate aus Sicherheitsgründen für eine bestimmte Dauer auf 0 IE/h gesetzt, damit keine Überdosierung erfolgt (**“zero-temping”**). So kann das System den BZ schneller abfangen als mit der temporären Basalratenerhöhung bei AMA.

Grundsätzlich kann es dank SMB bei kohlenhydratarmen Mahlzeiten ausreichen, dem System die geplante Kohlenhydratmenge mitzuteilen und den Rest AAPS zu überlassen. Dies führt aber womöglich zu höheren postprandialen Peaks, weil kein Spritz-Ess-Abstand (SEA) eingehalten werden kann. Oder du gibst, ggf. mit SEA, einen **Anfangsbolus**, der **nur zum Teil** die Kohlenhydrate abdeckt (z.B. 2/3 der geschätzten Menge) und lässt den Rest vom SMB auffüllen.

Die SMB-Funktion arbeitet mit einigen Sicherheitsmechanismen:

1. Die größte einzelne SMB-Dosis kann nur der kleinste Wert sein aus:
    
    * Wert, der der aktuellen Basalrate (wie sie autosens angepasst haben) für die unter “SMB-Basal-Limit in Minuten” voreingestellte Dauer entspricht, z.B. Basalmenge der kommenden 30 Minuten, oder
    * die Hälfte der aktuell benötigten Insulinmenge oder
    * der verbleibende Anteil deines maxIOB-Wertes in den Einstellungen.

2. Wahrscheinlich wirst du häufig niedrige temporäre Basalraten (sog. ‘low temps’) oder temporäre Basalraten mit 0 IE/h (sog. ‘zero-temps’) feststellen. Dies ist aus Sicherheitsgründen so gewollt und hat bei einem korrekt eingestellten Profil auch keine negativen Auswirkungen. Die IOB-Kurve ist aussagekräftiger als der Verlauf der temporären Basalraten.

3. Zusätzliche Berechnungen zur Vorhersage des Glukoseverlaufs, z.B. durch UAM (un-announced meals). UAM kann auch ohne manuelle Kohlenhydrat-Eingaben des Nutzers automatisch erkennen, dass die Glukosewerte auf Grund von Mahlzeiten, Adrenalin oder anderen Einflüssen signifikant steigen und versuchen, dies mit SMB abzufangen. Dies funktioniert aber zur Sicherheit auch andersherum und kann bei unvorhergesehen schnellem Glukoseabfall den SMB früher stoppen. Deshalb sollte UAM bei SMB auch immer aktiv sein.

**Du musst [Ziel (objective) 10](../Usage/Objectives#ziel-10-aktiviere-zusatzliche-oref1-funktionen-zum-taglichen-gebrauch-wie-z-b-den-super-micro-bolus-smb) begonnen haben, um SMB nutzen zu können.**

Siehe dazu auch (beides in Englisch): [OpenAPS Dokumentation zu oref1 SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) und [Tim's Info zu SMB](http://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/).

### Max IE/h, die als TBR gesetzt werden können (OpenAPS “max-basal”)

Diese Sicherheitseinstellung legt fest, welche maximale temporäre Basalrate die Insulinpumpe abgeben darf. Der Wert sollte in der Pumpe und in AAPS übereinstimmen und mindestens beim 3-fachen der höchsten eingestellten einzelnen Basalrate liegen.

Beispiel:

Im Basalprofil ist im Laufe des Tages die Basalrate 1.00 U/h die höchste. Dann empfiehlt sich ein max-basal Wert von mindestens 3 U/h.

Du kannst aber keinen beliebigen Wert wählen. AAPS begrenzt als “hard limit” den Wert danach, welches Patientenalter du unter Einstellungen gewählt hast. Bei Kindern ist der zulässige Wert am niedrigsten, bei insulinresistenten Erwachsenen am höchsten.

AndroidAPS beschränkt den Wert wie folgt:

* Kind: 2
* Teenager: 5
* Erwachsener: 10
* Insulinresistenter Erwachsener: 12

### Maximales Basal-IOB, das OpenAPS abgeben darf (OpenAPS “max-iob”)

Dieser Wert bestimmt, welchen IOB-Wert AAPS im Closed Loop Modus nicht überschreiten darf. Liegt das aktuelle IOB (z.B nach einem Mahlzeit-Bolus) über dem festgelegten Wert, dann wird die Insulinabgabe durch den Loop unterbunden, bis die IOB-Grenze wieder unterschritten ist.

Wenn du OpenAPS SMB verwendest, wird max-IOB anders berechnet, als in OpenAPS AMA. In AMA war maxIOB nur ein Sicherheitsparameter für Basal IOB, während er in SMB-Mode auch Bolus IOB beinhaltet. Ein guter Startwert ist

    maxIOB = mittlerer Mahlzeitenbolus + 3x höchste tägliche Basalrate
    

Sei jedoch vorsichtig und passe deine Einstellungen in kleinen Schritten an. Das ist sehr individuell und hängt stark vom durchschnittlichen Gesamtinsulinbedarf ab (total daily dose = TDD). Zur Sicherheit gibt es ein Limit, das auf dem Patientenalter basiert. Das "hard limit" für maxIOB ist höher als in AMA.

* Kind: 3
* Jugendlicher: 7
* Erwachsener: 12
* Insulinresistenter Erwachsener: 25

Siehe auch [OpenAPS-Dokumentation zu SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-smb).

### Verwende AMA Autosense

Hier kannst du auswählen, ob die [Empfindlichkeitserkennung](../Configuration/Sensitivity-detection-and-COB.md) "Autosens" verwendet werden soll oder nicht.

### Aktiviere SMB

Hier kannst du die SMB-Funktion komplett aktivieren oder deaktivieren.

### Aktiviere SMB während COB

Der SMB arbeitet, wenn COB aktiv sind (COB > 0).

### Aktiviere SMB während temporären Zielen

Der SMB arbeitet sowohl wenn ein niedriges, als auch wenn ein hohes temporäres Ziel gesetzt ist (bald essen, Aktivität, Hypo, Auswahl)

### Aktiviere SMB während hohen temporären Zielen

Der SMB arbeitet, wenn ein hohes temporäres Ziel gesetzt ist (Aktivität, Hypo). Diese Option kann "Aktiviere SMB während temporären Zielen" begrenzen: Wenn "SMB mit temporären Zielen" aktiviert ist und "SMB mit hohen temporären Zielen" deaktiviert ist, arbeitet SMB nur mit niedrigen, aber nicht mit hohen temporären Zielen. Genauso ist es auch, wenn "SMB mit COB" aktiviert ist: Wenn "SMB bei hohen temporären Zielen" deaktiviert ist, dann wird während eines hohen temporären Ziels auch dann kein SMB abgegeben, wenn COB vorhanden sind.

### Aktiviere SMB immer

Der SMB arbeitet immer (unabhängig von COB oder temporären Zielen oder Boli). Zur Sicherheit ist diese Option nur möglich, wenn die BZ-Quelle gut gefilterte (nicht rauschende) Werte ausgibt. Derzeit ist das nur möglich mit dem Dexcom G5, wenn es mit der gepatchten Dexcom App oder mit xDrip+ im “native Modus” ausgelesen wird. Falls ein gemessener Wert zu weit abweicht, gibt der G5 einfach gar keinen Wert ab und wartet die nächste Messung in 5 Minuten ab.

Für andere CGM/FGM wie das Freestyle Libre ist die SMB-always-Option deaktiviert, bis xDrip+ ein Glättungs-Plugin beinhaltet, das verrauschte Werte filtert. Weitere Informationen dazu findest du [hier](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Aktiviere SMB nach Mahlzeiten

Der SMB arbeitet bis zu 6 Stunden nach Mahlzeiten, auch wenn COB vorher bei 0 ist. Zur Sicherheit ist diese Option nur möglich, wenn die BZ-Quelle gut gefilterte (nicht rauschende) Werte ausgibt. Derzeit ist das nur möglich mit dem Dexcom G5, wenn es mit der gepatchten Dexcom App oder mit xDrip+ im “native Modus” ausgelesen wird. Falls ein gemessener Wert zu weit abweicht, gibt der G5 einfach gar keinen Wert ab und wartet die nächste Messung in 5 Minuten ab.

Für andere CGM/FGM wie das Freestyle Libre ist die SMB-always-Option deaktiviert, bis xDrip+ ein Glättungs-Plugin beinhaltet, das verrauschte Werte besser filtert. Weitere Informationen dazu findest du [hier](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### SMB-Basal-Limit in Minuten

Dies ist eine wichtige Sicherheitseinstellung. Dieser Wert legt fest, wie viel SMB in einer bestimmten Zeit auf der Basis der Menge an Basalinsulin angegeben werden kann, wenn es von COBs abgedeckt wird.

Dadurch wird der SMB aggressiver. Zu Beginn solltest du den Standardwert von 30 Minuten wählen. Mit etwas SMB-Erfahrung kannst du den Wert dann in 15-Minuten-Schritten erhöhen. Dabei solltest du immer genau beobachten, wie sich diese Veränderung auswirkt.

Es wird davon abgeraten, den Wert auf über 90 Minuten zu stellen. Denn das würde dazu führen, dass der Algorithmus mit einer temporären 0 IE/h-Basalrate (“zero-temp”) einen BZ-Abfall nicht mehr sicher abfangen könnte. Außerdem solltest du (gerade beim Testen) unbedingt Alarme verwenden, um vor BZ-Entgleisungen gewarnt zu werden.

Standardwert: 30 Min.

### Aktiviere UAM

Wenn du diese Option aktivierst, dann kann der SMB unangekündigte Mahlzeiten erkennen. Das ist besonders dann hilfreich, wenn du vergisst sie in AndroidAPS einzugeben, dich verschätzt und eine zu geringe KH-Menge eingegeben hast oder wenn eine fett-eiweisslastige Mahlzeit länger wirkt als gedacht. UAM kann also auch ohne manuelle Kohlenhydrat-Eingaben des Nutzers automatisch erkennen, dass die Glukosewerte auf Grund von Mahlzeiten, Adrenalin oder anderen Einflüssen signifikant steigen und versuchen, dies mit SMB abzufangen. Dies funktioniert aber auch andersherum: wenn der Glukosewert schnell sinkt, wird der SMB früher gestoppt.

**Deshalb sollte UAM bei SMB auch immer aktiv sein.**

### Hohe temporäre Ziele erhöhen die Sensitivität

Wenn du diese Option aktivierst, dann wird die Insulinempfindlichkeit erhöht, wenn du ein temporäres Ziel über 100 mg/dl bzw. 5,6 mmol/l setzt. Das bedeutet, der Insulinsensibilitäts-Faktor (ISF) wird erhöht während der Kohlenhydrate-Faktor (IC) und die Basalrate gesenkt werden.

### Niedrige temporäre Ziele senken die Sensitivität

Wenn du diese Option aktivierst, dann wird die Insulinempfindlichkeit verringert, wenn du ein temporäres Ziel unter 100 mg/dl bzw. 5,6 mmol/l setzt. Das bedeutet, der Insulinsensibilitäts-Faktor (ISF) wird gesenkt während der Kohlenhydrate-Faktor (IC) und die Basalrate erhöht werden.

### Erweiterte Einstellungen

**Verwende immer das kurze durchschnittliche Delta statt einfacher Werte.** Wenn du dies aktivierst, dann verwendet AndroidAPS für die Berechnungen statt des aktuellen Glukosewertes den durchschnittlichen Glukosewert der letzten 15 Minuten (= kurzes durchschnittliches Delta), was normalerweise dem Durchschnittswert der letzten drei Werte entspricht. Dies hilft AndroidAPS dabei, mit Werten aus verrauschten Quellen wie xDrip+ und Libre stabiler zu arbeiten.

**Max daily safety multiplier** Dies ist eine wichtige Sicherheitseinstellung. Der voreingestellte Wert (der nur in Ausnahmefällen geändert werden muss) ist 3. Das bedeutet, dass AndroidAPS daran gehindert wird, eine temporäre Basalrate zu setzen, die mehr als dem dreifachen Wert der höchsten stündlichen Rate entspricht, die in der Pumpe gesetzt ist. Beispiel: Wenn die höchste stündliche Basalrate 1.0 U/h ist und der Sicherheitsmultiplikator des Basalhöchstwertes auf 3 gesetzt ist, dann kann AndroidAPS die temporäre Basalrate höchstens auf einen Wert von 3.0 IE setzen.

Standardwert: 3 (sollte nur in Ausnahmefällen geändert werden und wenn du weißt, was das bedeutet)

**Current Basal safety multiplier** Dies ist eine weitere wichtige Sicherheitseinstellung. Der voreingestellte Wert (der nur in Ausnahmefällen geändert werden muss) ist 4. Das bedeutet, dass AndroidAPS daran gehindert wird, eine temporäre Basalrate zu setzen, die mehr als dem vierfachen Wert der aktuellen stündlichen Basalrate entspricht, die in der Pumpe gesetzt ist.

Standardwert: 4 (sollte nur in Ausnahmefällen geändert werden und wenn du weißt, was das bedeutet)

* * *

## Erweiterter Mahlzeit-Assistent (AMA)

AMA steht für “advanced meal assist” und ist eine OpenAPS-Funktion aus 2017 (Oref0). Nachdem du dir einen Bolus gegeben hast, darf AMA schneller eine höhere temporäre Basalrate wählen, vorausgesetzt du gibst die Kohlenhydrate verlässlich ein.

Siehe auch: [OpenAPS-Dokumentation (englisch)](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Max IE/h, die als temporäre Basalrate gesetzt werden können (OpenAPS “max-basal”)

Diese Sicherheitseinstellung hindert AndroidAPS daran, jemals eine gefährlich hohe Basalrate zu setzen und begrenzt die temporäre Basalrate auf x IE/h. Es wird empfohlen, hier etwas Vernünftiges einzugeben. Eine gute Empfehlung ist, den höchsten stündlichen Basalratenwert in deinem Profil zu verwenden und diesen mit 4 oder mindestens mit 3 zu multiplizieren. Beispiel: wenn der höchste stündliche Basalratenwert in deinem Profil 1.0 IE/h ist, kannst du diesen mit 4 multiplizieren, wodurch du einen Wert von 4 IE/h erhältst, so dass du "4" als Sicherheitseinstellung setzen kannst.

Du kannst aber keinen beliebigen Wert wählen: AAPS begrenzt als “hard limit” den Wert danach, welches Patientenalter du unter Einstellungen gewählt hast. Das "hard limit" für maxIOB ist bei AMA niedriger als bei SMB. Bei Kindern ist der zulässige Wert am niedrigsten, bei insulinresistenten Erwachsenen am höchsten.

AndroidAPS hat folgende "hard limits":

* Kind: 2
* Teenager: 5
* Erwachsener: 10
* Insulinresistenter Erwachsener: 12

### Maximales Basal-IOB, das OpenAPS abgeben darf \[IE\] (OpenAPS “max-iob”)

Dieser Parameter begrenzt das maximale Basal-IOB, bis zu dem AndroidAPS noch funktioniert. Wenn dieses IOB höher ist, dann wird kein weiteres Basalinsulin mehr abgegeben, bis das Basal-IOB wieder unter dem Grenzwert liegt.

Der Standardwert ist 2, aber du solltest diesen Parameter in kleinen Schritten erhöhen um zu sehen, wie stark sich das bei dir auswirkt und welcher Wert am besten passt. Das ist sehr individuell und hängt stark vom durchschnittlichen Gesamtinsulinbedarf ab (total daily dose = TDD). Zur Sicherheit gibt es ein Limit, das auf dem Patientenalter basiert. Das "hard limit" für maxIOB ist bei AMA niedriger als bei SMB.

* Kind: 3
* Teenager: 5
* Erwachsener: 7
* Insulinresistenter Erwachsener: 12

### Verwende AMA Autosense

Hier kannst du auswählen, ob die [Empfindlichkeitserkennung](../Configuration/Sensitivity-detection-and-COB.md) Autosens verwendet werden soll oder nicht.

### Autosense passt auch temporäre Ziele an

Wenn du diese Option aktivierst, dann kann Autosense auch Ziele anpassen (neben Basalrate, ISF und IC). Dadurch kann AndroidAPS "aggressiver" arbeiten oder nicht. Der aktuell eingestellte Zielwert wird dadurch möglicherweise schneller erreicht.

### Erweiterte Einstellungen

**Verwende immer das kurze durchschnittliche Delta statt einfacher Werte.** Wenn du dies aktivierst, dann verwendet AndroidAPS für die Berechnungen statt des aktuellen Glukosewertes den durchschnittlichen Glukosewert der letzten 15 Minuten (= kurzes durchschnittliches Delta), was normalerweise dem Durchschnittswert der letzten drei Werte entspricht. Dies hilft AndroidAPS dabei, mit Werten aus verrauschten Quellen wie xDrip+ und Libre stabiler zu arbeiten.

**Max daily safety multiplier** Dies ist eine wichtige Sicherheitseinstellung. Der voreingestellte Wert (der nur in Ausnahmefällen geändert werden muss) ist 3. Das bedeutet, dass AndroidAPS daran gehindert wird, eine temporäre Basalrate zu setzen, die mehr als dem dreifachen Wert der höchsten stündlichen Rate entspricht, die in der Pumpe gesetzt ist. Beispiel: Wenn die höchste stündliche Basalrate 1.0 U/h ist und der Sicherheitsmultiplikator des Basalhöchstwertes auf 3 gesetzt ist, dann kann AndroidAPS die temporäre Basalrate höchstens auf einen Wert von 3.0 IE setzen.

Standardwert: 3 (sollte nur in Ausnahmefällen geändert werden und wenn du weißt, was das bedeutet)

**Current Basal safety multiplier** Dies ist eine weitere wichtige Sicherheitseinstellung. Der voreingestellte Wert (der nur in Ausnahmefällen geändert werden muss) ist 4. Das bedeutet, dass AndroidAPS daran gehindert wird, eine temporäre Basalrate zu setzen, die mehr als dem vierfachen Wert der aktuellen stündlichen Basalrate entspricht, die in der Pumpe gesetzt ist.

Standardwert: 4 (sollte nur in Ausnahmefällen geändert werden und wenn du weißt, was das bedeutet)

**Bolus snooze dia divisor** Die Funktion “Bolus snooze” wird dann aktiviert, wenn du einen Essensbolus gegeben hast. AAPS reagiert nach den Mahlzeiten für die Dauer des DIA geteilt durch den "bolus-snooze" Parameter nicht mit einer niedrigen temporären Basalrate. Der Standardwert ist 2. Dies bedeutet: Bei einem DIA von 5 Stunden wird der “Bolus snooze” über 5 : 2 = 2,5 Stunden geradlinig auslaufen.

Standardwert: 2