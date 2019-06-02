# OpenAPS-Funktionen

## SMB
SMB steht für "super micro bolus" und ist die neueste OpenAPS-Funktion (aus 2018) im Rahmen des Oref1-Algorythmus. Im Gegensatz zu AMA arbeitet SMB nicht so stark mit temporären Basalraten, sondern hauptsächlich mit **kleinen Supermicroboluses**. In Situationen, in denen AMA 1.0 IE Insulin über eine temporäre Basalrate zugeben würde, gibt SMB im **5-Minutentakt** mehrere Supermicroboli in kleinen Schritten ab, z.B. 0.4 IE, 0.3 IE, 0.2 IE und 0.1 IE. Gleichzeitig wird die laufende Basalrate aus Sicherheitsgründen für eine bestimmte Dauer auf 0 IE/h gesetzt, damit keine Überdosierung erfolgt (**"zero-temping"**). So kann das System den BZ schneller abfangen als mit der temporären Basalratenerhöhung bei AMA.

Grundsätzlich kann es dank SMB bei kohlenhydratarmen Mahlzeiten ausreichen, dem System die geplante Kohlenhydratmenge mitzuteilen und den Rest AAPS zu überlassen. Dies führt aber womöglich zu höheren postprandialen Peaks, weil kein Spritz-Ess-Abstand (SEA) eingehalten werden kann. Oder du gibst, ggf. mit SEA, einen **Anfangsbolus**, der **nur zum Teil** die Kohlenhydrate abdeckt (z.B. 2/3 der geschätzten Menge) und lässt den Rest vom SMB auffüllen. 

Die SMB-Funktion arbeitet mit einigen Sicherheitsmechanismen. 

1. Die größte einzelne SMB-Dosis kann nur der kleinste Wert sein aus:
* Wert, der der aktuellen Basalrate (wie sie autotune/autosens angepasst haben) für die unter "SMB-Basal-Limit in Minuten" voreingestellte Dauer entspricht, z.B. Basalmenge der kommenden 30 Minuten, oder
* die Hälfte der aktuell benötigten Insulinmenge oder
* der verbleibende Anteil deines maxIOB-Wertes in den Einstellungen.

2. Wahrscheinlich wirst du häufig niedrige temporäre Basalraten (sog. 'low temps') oder temporäre Basalraten mit 0 U/h (sog. 'zero-temps') feststellen. Dies ist aus Sicherheitsgründen so gewollt und hat bei einem korrekt eingestellten Profil auch keine negativen Auswirkungen. Aussagekräftiger als der Verlauf der temporären Basalraten ist die IOB-Kurve.

3. Zusätzliche Berechnungen zur Vorhersage des Glukoseverlaufs, z.B. durch UAM (un-announced meals). UAM kann auch ohne manuelle Kohlenhydrat-Eingaben des Nutzers automatisch erkennen, dass die Glukosewerte auf Grund von Mahlzeiten, Adrenalin oder anderen Einflüssen siginifikant steigen und versuchen, dies mit SMB abzufangen. Dies funktioniert aber zur Sicherheit auch andersherum und kann bei unvorhergesehen schnellem Glukoseabfall den SMB früher stoppen. Deshalb sollte UAM bei SMB auch immer aktiv sein.

**Du musst das Objective 8 abgeschlossen haben, um SMB verwenden zu können.**

Siehe auch: [OpenAPS-Dokumentation zu oref1 SMB (englisch)](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)

### Max IE/h, die als TBR gesetzt werden können (OpenAPS "max-basal")
Diese Sicherheitseinstellung legt fest, welche maximale temporäre Basalrate die Insulinpumpe abgeben darf. Der Wert sollte in der Pumpe und in AAPS übereinstimmen und mindestens beim 3-fachen der höchsten eingestellten einzelnen Basalrate liegen. 

Beispiel: Im Basalprofil ist im Laufe des Tages die Basalrate 1.00 U/h die höchste. Dann empfiehlt sich ein max-basal Wert von mindestens 3 U/h.

Du kannst aber keinen beliebigen Wert wählen. AAPS begrenzt als "hard limit" den Wert danach, welches Patientenalter du unter Einstellungen gewählt hast. Bei Kindern ist der zulässige Wert am niedrigsten, bei insulinresistenten Erwachsenen am höchsten.

AndroidAPS beschränkt den Wert wie folgt:

* Kind: 2
* Jugendliche: 5
* Erwachsene: 10
* Insulinresistente Erwachsene: 12

### Maximales Basal-IOB, das OpenAPS abgeben darf (OpenAPS "max-iob")
Dieser Wert bestimmt, bis zu welchem IOB-Wert AAPS im Closed Loop Modus regeln darf. Liegt das aktuelle IOB (z.B nach einem Mahlzeit-Bolus) über dem festgelegten Wert, dann macht der Loop zunächst nichts, bis die IOB-Grenze wieder unterschritten ist. 

Da mit SMB der max-iob nicht mehr durch die vom APS gegebenen Dosen berechnet wird, sondern alles IOB (auch deinen selbst gegebenen Essensbolus), ist der Wert für max-iob höher, als du das von MA und AMA gewohnt bist. Ein guter Wert für den Anfang ist: 

    max-iob = mindestens 1 normaler Essensbolus + 3x höchste tägl. Basalrate 

Sei jedoch dabei vorsichtig und passe deine Einstellungen in kleinen Schritten an. Das ist sehr individuell und hängt stark vom durchschnittlichen Insulinbedarf ab. Du kannst aber keinen beliebigen Wert wählen. AAPS begrenzt als "hard limit" den Wert danach, welches Patientenalter du unter Einstellungen gewählt hast. Bei Kindern ist der zulässige Wert am niedrigsten, bei insulinresistenten Erwachsenen am höchsten.

AndroidAPS beschränkt beim SMB (höher als bei AMA) den Wert wie folgt:

* Kind: 3
* Jugendliche: 7
* Erwachsene: 12
* Insulinresistente Erwachsene: 25

Siehe auch [OpenAPS-Dokumentation zu SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-smb).

### Verwende AMA Autosense
Hier kannst du aswählen, ob die [Empfindlichkeitserkennung](http://androidaps.readthedocs.io/en/latest/DE/konfigurations-generator.html#empfindlichkeitserkennung) Autosens verwendet werden soll oder nicht.

### Aktiviere SMB
Hier kannst du die SMB-Funktion komplett aktivieren oder deaktivieren.

### Aktiviere SMB während COB
Der SMB arbeitet, wenn COB aktiv sind (COB > 0)

### Aktiviere SMB während temporären Zielen
Der SMB arbeitet sowohl wenn ein niedriges, als auch wenn ein hohes temporäres Ziel gesetzt ist (bald essen, Aktivität)

### Aktiviere SMB während hohen temporären Zielen
Der SMB arbeitet, wenn ein hohes temporäres Ziel gesetzt ist (Aktivität)

### Aktiviere SMB immer
Der SMB arbeitet immer (unabhängig von COB oder temporären Zielen). Diese Option besteht nur, wenn die BZ-Quelle gut gefilterte (nicht rauschende) Werte ausgibt. Derzeit ist das nur möglich mit dem Dexcom G5, wenn es mit der gepatchten Dexcom App oder mit xDrip+ im "native Modus" ausgelesen wird. Falls ein gemessener Wert zu weit abweicht, gibt der G5 einfach gar keinen Wert ab und wartet die nächste Messung in 5 Minuten ab.

Andere CGM/FGM wie das Freestyle Libre sind momentan für die SMB-always-Option deaktiviert, bis xDrip+ ein Glättungs-Plugin beinhaltet, das verrauschte Werte filtert.

### Aktiviere SMB nach Mahlzeiten
Der SMB arbeitet bis 6 Stunden nach Mahleiten, auch wenn COB vorher bei 0 ist.  

Diese Option besteht nur, wenn die BZ-Quelle gut gefilterte (nicht rauschende) Werte ausgibt. Derzeit ist das nur möglich mit dem Dexcom G5, wenn es mit der gepatchten Dexcom App oder mit xDrip+ im "native Modus" ausgelesen wird. Falls ein gemessener Wert zu weit abweicht, gibt der G5 einfach gar keinen Wert ab und wartet die nächste Messung in 5 Minuten ab.

Andere CGM/FGM wie das Freestyle Libre sind momentan für die SMB-nach-Mahlzeiten-Option deaktiviert, bis xDrip+ ein Glättungs-Plugin beinhaltet, das verrauschte Werte filtert.

### Max minutes of basal to limit SMB to
Dies ist eine wichtige Sicherheitseinstellung. Der Wert legt fest, für wie viele Minuten benötigtes Basal-Insulin der SMB zugeben darf, obwohl es nicht von COB gedeckt ist. Dadurch kann der SMB aggressiver sein. Zu Beginn solltest du den Standardwert von 30 Minuten wählen. Mit etwas SMB-Erfahrung kannst du den Wert dann in 15-Minuten-Schritten erhöhen. Dabei solltest du immer genau beobachten, wie sich diese Veränderung auswirkt. Es wird davon abgeraten, den Wert auf über 90 Minuten zu stellen. Denn das würde dazu führen , dass der Algorythmus mit einer temporären 0 IE/h-Basalrate ("zero-temp") einen BZ-Abfall nicht mehr sicher abfangen könnte. Außerdem solltest du (gerade beim Testen) unbedingt Alarme verwenden, um vor BZ-Entgleisungen gewarnt zu werden.

Standardwert zu Beginn: 30 Min.

### Aktiviere UAM
Wenn du diese Option aktivierst, dann kann der SMB unangekündigte Mahlzeiten erkennen. Beispielsweise, wenn du vergisst sie in  AndroidAPS einzugeben, dich verschätzt und eine zu geringe KH-Menge eingegeben hast oder wenn eine fett-eiweißlastige Mahlzeit länger wirkt als gedacht. UAM kann also auch ohne manuelle Kohlenhydrat-Eingaben des Nutzers automatisch erkennen, dass die Glukosewerte auf Grund von Mahlzeiten, Adrenalin oder anderen Einflüssen siginifikant steigen und versuchen, dies mit SMB abzufangen. Dies funktioniert aber zur Sicherheit auch andersherum und kann bei unvorhergesehen schnellem Glukoseabfall den SMB früher stoppen. 

**Deshalb sollte UAM bei SMB auch immer aktiv sein.**

### High temptarget raises sensitivity
Wenn du diese Option aktivierst, dann wird die Insulinempfindlichkeit erhöht, wenn du ein temporäres Ziel über 100 mg/dl bzw. 5,6 mmol/l setzt

### Low temptarget lowers sensitivity
Wenn du diese Option aktivierst, dann wird die Insulinempfindlichkeit verringert, wenn du ein temporäres Ziel unter 100 mg/dl bzw. 5,6 mmol/l setzt

### Erweriterte Einstellungen

**Verwende immer das kurze durchschnittliche Delta**
Wenn du dies aktivierst, dann verwendet AndroidAPS für die Berechnungen statt des aktuellen BZ-Wertes den durchschnittlichen BZ-Wert der letzten 15 Minuten (= kurzes durchschnittliches Delta). Dieser Durchschnittswert lässt den Loop bei ungefilterten Quellen mit Signalrauschen (also wenn vom CGM/FGM keine glatte Kurve ausgegeben wird) ruhiger laufen.

**Max daily safety multiplier**
Dies ist eine wichtige Sicherheitseinstellung. Sie begrenzt das maximale Basal-IOB auf die x-fache Menge deiner höchsten Basalrate. Beispiel: höchste Basalrate = 1.0 U/h, max daily safety multiplier = 3 > AndroidAPS kann höchstens bis zu einem Basal-IOB von 3.0 IE regeln. 

Standardwert: 3 (sollte nur in Ausnahmefällen verändert werden)

**Current Basal safety multiplier**
Dies ist eine wichtige Sicherheitseinstellung. Sie begrenzt das Basal-IOB auf die x-fache Menge der aktuell laufenden Basalrate. Dies ist wichtig, um Nutzer davor zu bewahren, zu viel Basal-Insulin zu verabreichen.   

Standardwert: 4 (sollte nur in Ausnahmefällen verändert werden)

## AMA
AMA steht für "advanced meal assist" und ist eine Funktion OpenAPS-Funktion aus 2017 (Oref0). Nachdem du dir einen Bolus gegeben hast, kann das System eine höhere temporäre Basalrate wählen, vorausgesetzt du gibst die Kohlenhydrate verlässlich ein. 

**Du musst das Objective 7 abgeschlossen haben, um AMA verwenden zu können.**

Siehe auch: [OpenAPS-Dokumentation zu AMA (englisch)](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama)

### Max IE/h, die als TBR gesetzt werden können (OpenAPS "max-basal")
Diese Sicherheitseinstellung legt fest, welche maximale temporäre Basalrate die Insulinpumpe abgeben darf. Der Wert sollte in der Pumpe und in AAPS übereinstimmen und mindestens beim 3-fachen der höchsten eingestellten einzelnen Basalrate liegen. 

Beispiel: Im Basalprofil ist im Laufe des Tages die Basalrate 1.00 U/h die höchste. Dann empfiehlt sich ein max-basal Wert von mindestens 3 U/h.

Du kannst aber keinen beliebigen Wert wählen. AAPS begrenzt als "hard limit" den Wert danach, welches Patientenalter du unter Einstellungen gewählt hast. Bei Kindern ist der zulässige Wert am niedrigsten, bei insulinresistenten Erwachsenen am höchsten.

AndroidAPS beschränkt den Wert wie folgt:

* Kind: 2
* Jugendliche: 5
* Erwachsene: 10
* Insulinresistente Erwachsene: 12

### Maximales Basal-IOB, das OpenAPS abgeben darf (OpenAPS "max-iob")
Dieser Wert bestimmt, bis zu welchem IOB-Wert AAPS im Closed Loop Modus regeln darf. Liegt das aktuelle IOB (z.B nach einem Mahlzeit-Bolus) über dem festgelegten Wert, dann macht der Loop zunächst nichts, bis die IOB-Grenze wieder unterschritten ist. 

Standardmäßig wird zu Beginn eine Einstellung auf 2 vorgeschlagen, aber du solltest dich langsam rauf arbeiten bis du weißt, welcher Wert für dich in Ordnung ist. Das ist sehr individuell und hängt stark vom durchschnittlichen Insulinbedarf ab. Du kannst aber keinen beliebigen Wert wählen. AAPS begrenzt als "hard limit" den Wert danach, welches Patientenalter du unter Einstellungen gewählt hast. Bei Kindern ist der zulässige Wert am niedrigsten, bei insulinresistenten Erwachsenen am höchsten.

AndroidAPS beschränkt bei AMA den Wert wie folgt:

* Kind: 3
* Jugendliche: 5
* Erwachsene: 7
* Insulinresistente Erwachsene: 12

### Verwende AMA Autosense
Hier kannst du aswählen, ob die [Empfindlichkeitserkennung](http://androidaps.readthedocs.io/en/latest/DE/konfigurations-generator.html#empfindlichkeitserkennung) Autosens verwendet werden soll oder nicht.

### Autosense passt Zielwerte an
Wenn du diese Option aktivierst, dann kann Autosens bei Bedarf (neben ISF und IC) auch den Zielbereich anpassen, damit der Loop aggressiver oder weniger aggressiv läuft. Dadurch kann der eigentliche Zielbereich ggf. schneller wieder erreicht werden.

### Erweiterte Einstellungen

**Verwende immer das kurze durchschnittliche Delta**
Wenn du dies aktivierst, dann verwendet AndroidAPS für die Berechnungen statt des aktuellen BZ-Wertes den durchschnittlichen BZ-Wert der letzten 15 Minuten (= kurzes durchschnittliches Delta). Dieser Durchschnittswert lässt den Loop bei ungefilterten Quellen mit Signalrauschen (also wenn vom CGM/FGM keine glatte Kurve ausgegeben wird) ruhiger laufen.

**Max daily safety multiplier**
Dies ist eine wichtige Sicherheitseinstellung. Sie begrenzt das maximale Basal-IOB auf die x-fache Menge deiner höchsten Basalrate. Beispiel: höchste Basalrate = 1.0 U/h, max daily safety multiplier = 3 > AndroidAPS kann höchstens bis zu einem Basal-IOB von 3.0 IE regeln. 

Standardwert: 3 (sollte nur in Ausnahmefällen verändert werden)

**Current Basal safety multiplier**
Dies ist eine wichtige Sicherheitseinstellung. Sie begrenzt das Basal-IOB auf die x-fache Menge der aktuell laufenden Basalrate. Dies ist wichtig, um Nutzer davor zu bewahren, zu viel Basal-Insulin zu verabreichen.   

Standardwert: 4 (sollte nur in Ausnahmefällen verändert werden)

**Bolus snooze dia divisor**
Die Funktion "Bolus snooze" wird dann aktiviert, wenn du einen Essensbolus gegeben hast. Der Loop reagiert dadurch nach dem Essen nicht gleich mit niedrigen temporären Basalraten. Der Standardwert ist 2. Dies bedeutet: Bei einem DIA (Dauer der Insulinaktivität) von 5 wird der "Bolus snooze" über 5 : 2 = 2,5 Stunden geradlinig auslaufen.

Standardwert: 2

## MA
MA steht für "Meal Assist" und ist eine der ältesten OpenAPS-Funktionen (aus 2016) im Rahmen des Oref0-Algorythmus. In die Berechnungen können die Vorzüge der Insulin-Empfindlichkeitserkennung (autosens) nicht einbezogen werden.

### Max IE/h, die als TBR gesetzt werden können (OpenAPS "max-basal")
Diese Sicherheitseinstellung legt fest, welche maximale temporäre Basalrate die Insulinpumpe abgeben darf. Der Wert sollte in der Pumpe und in AAPS übereinstimmen und mindestens beim 3-fachen der höchsten eingestellten einzelnen Basalrate liegen. 

Beispiel: Im Basalprofil ist im Laufe des Tages die Basalrate 1.00 U/h die höchste. Dann empfiehlt sich ein max-basal Wert von mindestens 3 U/h.

Du kannst aber keinen beliebigen Wert wählen. AAPS begrenzt als "hard limit" den Wert danach, welches Patientenalter du unter Einstellungen gewählt hast. Bei Kindern ist der zulässige Wert am niedrigsten, bei insulinresistenten Erwachsenen am höcyhsten.

AndroidAPS beschränkt den Wert wie folgt:

* Kind: 2
* Jugendliche: 5
* Erwachsene: 10
* Insulinresistente Erwachsene: 12

### Maximales Basal-IOB, das OpenAPS abgeben darf (OpenAPS "max-iob")
Dieser Wert bestimmt, bis zu welchem IOB-Wert AAPS im Closed Loop Modus regeln darf. Liegt das aktuelle IOB (z.B nach einem Mahlzeit-Bolus) über dem festgelegten Wert, dann macht der Loop zunächst nichts, bis die IOB-Grenze wieder unterschritten ist. 

Standardmäßig wird zu Beginn eine Einstellung auf 2 vorgeschlagen, aber du solltest dich langsam rauf arbeiten bis du weißt, welcher Wert für dich in Ordnung ist. Das ist sehr individuell und hängt stark vom durchschnittlichen Insulinbedarf ab. Du kannst aber keinen beliebigen Wert wählen. AAPS begrenzt als "hard limit" den Wert danach, welches Patientenalter du unter Einstellungen gewählt hast. Bei Kindern ist der zulässige Wert am niedrigsten, bei insulinresistenten Erwachsenen am höchsten.

AndroidAPS beschränkt bei AMA den Wert wie folgt:

* Kind: 3
* Jugendliche: 5
* Erwachsene: 7
* Insulinresistente Erwachsene: 12

### Erweiterte Einstellungen

**Verwende immer das kurze durchschnittliche Delta**

**Bolus snooze dia divisor**
Die Funktion "Bolus snooze" wird dann aktiviert, wenn du einen Essensbolus gegeben hast. Der Loop reagiert dadurch nach dem Essen nicht gleich mit niedrigen temporären Basalraten. Der Standardwert ist 2. Dies bedeutet: Bei einem DIA (Dauer der Insulinaktivität) von 5 wird der "Bolus snooze" über 5 : 2 = 2,5 Stunden geradlinig auslaufen.

Standardwert: 2
