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

Grundsätzlich kann es dank SMB bei kohlenhydratarmen Mahlzeiten ausreichen, dem System die geplante Kohlenhydratmenge mitzuteilen und den Rest AAPS zu überlassen. Dies führt aber womöglich zu höheren postprandialen Peaks, weil kein Spritz-Ess-Abstand (SEA) eingehalten werden kann. Oder Du gibst, ggf. mit SEA, einen **Anfangsbolus**, der **nur zum Teil** die Kohlenhydrate abdeckt (z.B. 2/3 der geschätzten Menge) und lässt den Rest vom SMB auffüllen.

Die SMB-Funktion arbeitet mit einigen Sicherheitsmechanismen:

1. Die größte einzelne SMB-Dosis kann nur der kleinste Wert sein aus:
    
    * Wert, der der aktuellen Basalrate (wie sie autosens angepasst haben) für die unter “SMB-Basal-Limit in Minuten” voreingestellte Dauer entspricht, z.B. Basalmenge der kommenden 30 Minuten, oder
    * die Hälfte der aktuell benötigten Insulinmenge oder
    * der verbleibende Anteil deines maxIOB-Wertes in den Einstellungen.

2. Wahrscheinlich wirst du häufig niedrige temporäre Basalraten (sog. ‘low temps’) oder temporäre Basalraten mit 0 IE/h (sog. ‘zero-temps’) feststellen. Dies ist aus Sicherheitsgründen so gewollt und hat bei einem korrekt eingestellten Profil auch keine negativen Auswirkungen. Die IOB-Kurve ist aussagekräftiger als der Verlauf der temporären Basalraten.

3. Zusätzliche Berechnungen zur Vorhersage des Glukoseverlaufs, z.B. durch UAM (un-announced meals). UAM kann auch ohne manuelle Kohlenhydrat-Eingaben des Nutzers automatisch erkennen, dass die Glukosewerte auf Grund von Mahlzeiten, Adrenalin oder anderen Einflüssen signifikant steigen und versuchen, dies mit SMB abzufangen. Dies funktioniert aber zur Sicherheit auch andersherum und kann bei unvorhergesehen schnellem Glukoseabfall den SMB früher stoppen. Deshalb sollte UAM bei SMB auch immer aktiv sein.

**Du musst [Ziel 9](Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) gestartet haben, um SMB nutzen zu können.**

Siehe dazu auch (beides in Englisch): [OpenAPS Dokumentation zu oref1 SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) und [Tim's Info zu SMB](https://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/).

(Open-APS-features-max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal)=

### Max IE/h, die als TBR gesetzt werden können (OpenAPS “max-basal”)

Diese Sicherheitseinstellung legt fest, welche maximale temporäre Basalrate die Insulinpumpe abgeben darf. Der Wert sollte in der Pumpe und in AAPS übereinstimmen und mindestens beim 3-fachen der höchsten eingestellten einzelnen Basalrate liegen.

Beispiel:

Im Basalprofil ist im Laufe des Tages die Basalrate 1.00 U/h die höchste. Dann empfiehlt sich ein max-basal Wert von mindestens 3 U/h.

Du kannst aber keinen beliebigen Wert wählen. AAPS begrenzt als “hard limit” den Wert danach, welches Patientenalter du unter Einstellungen gewählt hast. Bei Kindern ist der zulässige Wert am niedrigsten, bei insulinresistenten Erwachsenen am höchsten.

AndroidAPS beschränkt den Wert wie folgt:

* Kind: 2
* Jugendlicher: 5
* Erwachsener: 10
* Insulinresistenter Erwachsener: 12
* Schwangere: 25

*Vgl. dazu auch die [Übersicht der fest programmierten Limits](Open-APS-features-overview-of-hard-coded-limits).*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob)=

### Maximales Basal-IOB, das OpenAPS abgeben darf (OpenAPS “max-iob”)

Dieser Wert bestimmt, welchen IOB-Wert AAPS im Closed Loop Modus nicht überschreiten darf. Liegt das aktuelle IOB (z.B nach einem Mahlzeit-Bolus) über dem festgelegten Wert, dann wird die Insulinabgabe durch den Loop unterbunden, bis die IOB-Grenze wieder unterschritten ist.

Wenn du OpenAPS SMB verwendest, wird max-IOB anders berechnet, als in OpenAPS AMA. In AMA war maxIOB nur ein Sicherheitsparameter für Basal IOB, während er in SMB-Mode auch Bolus IOB beinhaltet. Ein guter Startwert ist

    maxIOB = mittlerer Mahlzeitenbolus + 3x höchste tägliche Basalrate
    

Sei jedoch vorsichtig und passe deine Einstellungen in kleinen Schritten an. Das ist sehr individuell und hängt stark vom durchschnittlichen Gesamtinsulinbedarf ab (total daily dose = TDD). Zur Sicherheit gibt es ein Limit, das auf dem Patientenalter basiert. Das “hard limit” für maxIOB ist höher als in [AMA](Open-APS-features-max-u-hr-a-temp-basal-can-be-set-to-openaps-max-basal).

* Kind: 3
* Jugendlicher: 7
* Erwachsener: 12
* Insulinresistenter Erwachsener: 25
* Schwangere: 40

*Vgl. dazu auch die [Übersicht der fest programmierten Limits](Open-APS-features-overview-of-hard-coded-limits).*

Siehe auch [OpenAPS-Dokumentation zu SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb).

### Verwende AMA Autosense

Hier kannst Du auswählen, ob die [Empfindlichkeitserkennung](../Configuration/Sensitivity-detection-and-COB.md) "Autosens" verwendet werden soll oder nicht.

(Open-APS-features-enable-smb)=

### Aktiviere SMB

Hier kannst Du die SMB-Funktion komplett aktivieren oder deaktivieren.

### Aktiviere SMB während COB

Der SMB arbeitet, wenn COB aktiv sind (COB > 0).

### Aktiviere SMB während temporären Zielen

Der SMB arbeitet sowohl wenn ein niedriges, als auch wenn ein hohes temporäres Ziel gesetzt ist (bald essen, Aktivität, Hypo, Auswahl)

### Aktiviere SMB während hohen temporären Zielen

Der SMB arbeitet, wenn ein hohes temporäres Ziel gesetzt ist (Aktivität, Hypo). Diese Option kann "Aktiviere SMB während temporären Zielen" begrenzen: Wenn "SMB mit temporären Zielen" aktiviert ist und "SMB mit hohen temporären Zielen" deaktiviert ist, arbeitet SMB nur mit niedrigen, aber nicht mit hohen temporären Zielen. Genauso ist es auch, wenn "SMB mit COB" aktiviert ist: Wenn "SMB bei hohen temporären Zielen" deaktiviert ist, dann wird während eines hohen temporären Ziels auch dann kein SMB abgegeben, selbst wenn COB vorhanden sind.

(Open-APS-features-enable-smb-always)=

### Aktiviere SMB immer

Der SMB arbeitet immer (unabhängig von COB oder temporären Zielen oder Boli). Zur Sicherheit ist diese Option nur möglich, wenn die BZ-Quelle gut gefilterte (nicht rauschende) Werte ausgibt. Im Moment funktioniert das nur mit einem Dexcom G5 oder G6 und bei Verwendung der ['Build Your Own Dexcom App'](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (BYODA) oder des 'native mode' in xDrip+. Falls ein gemessener Wert zu weit abweicht, gibt der G5/G6 einfach gar keinen Wert ab und wartet die nächste Messung in 5 Minuten ab.

Für andere CGM/FGM wie das Freestyle Libre ist die SMB-always-Option deaktiviert, bis xDrip+ ein Glättungs-Plugin beinhaltet, das verrauschte Werte glättet. Weitere Informationen dazu findest du [hier](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Aktiviere SMB nach Mahlzeiten

Der SMB arbeitet bis zu 6 Stunden nach Mahlzeiten, auch wenn COB bei 0 ist. Zur Sicherheit ist diese Option nur möglich, wenn die BZ-Quelle gut gefilterte (nicht rauschende) Werte ausgibt. Im Moment funktioniert das nur mit einem Dexcom G5 oder G6 und bei Verwendung der ['Build Your Own Dexcom App'](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (BYODA) oder des 'native mode' in xDrip+. Falls ein gemessener Blutzuckerwert zu weit abweicht, gibt der G5 einfach gar keinen Wert ab und wartet die nächste Messung in 5 Minuten ab.

Für andere CGM/FGM wie das Freestyle Libre ist die SMB-always-Option deaktiviert, bis xDrip+ ein Glättungs-Plugin beinhaltet, das verrauschte Werte besser glättet. Weitere Informationen dazu findest du [hier](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

### SMB-Basal-Limit in Minuten

Dies ist eine wichtige Sicherheitseinstellung. Dieser Wert legt fest, wie viel SMB in einer bestimmten Zeit auf der Basis der Menge an Basalinsulin abgegeben werden kann, wenn es von COBs abgedeckt wird.

Dadurch wird der SMB aggressiver. Zu Beginn solltest du den Standardwert von 30 Minuten wählen. Mit etwas SMB-Erfahrung kannst du den Wert dann in 15-Minuten-Schritten erhöhen. Dabei solltest du immer genau beobachten, wie sich diese Veränderung auswirkt.

Es wird davon abgeraten, den Wert auf über 90 Minuten zu stellen. Denn das würde dazu führen, dass der Algorithmus mit einer temporären 0 IE/h-Basalrate (“zero-temp”) einen BZ-Abfall nicht mehr sicher abfangen könnte. Außerdem solltest du (gerade beim Testen) unbedingt Alarme verwenden, um vor BZ-Entgleisungen gewarnt zu werden.

Standardwert: 30 Min.

### Aktiviere UAM

Wenn du diese Option aktivierst, dann kann der SMB unangekündigte Mahlzeiten erkennen. Das ist besonders dann hilfreich, wenn Du vergisst sie in AndroidAPS einzugeben, Dich verschätzt und eine zu geringe KH-Menge eingegeben hast oder wenn eine fett-eiweisslastige Mahlzeit länger wirkt als gedacht. UAM kann also auch ohne manuelle Kohlenhydrat-Eingaben des Nutzers automatisch erkennen, dass die Glukosewerte auf Grund von Mahlzeiten, Adrenalin oder anderen Einflüssen siginifikant steigen und versuchen, dies mit SMB abzufangen. Dies funktioniert aber auch andersherum: wenn der Glukosewert schnell sinkt, wird der SMB früher gestoppt.

**Deshalb sollte UAM bei SMB auch immer aktiv sein.**

### Hohe temporäre Ziele erhöhen die Sensitivität

Wenn du diese Option aktivierst, dann wird die Insulinempfindlichkeit erhöht, wenn du ein temporäres Ziel über 100 mg/dl bzw. 5,6 mmol/l setzt. Das bedeutet, der Insulinsensibilitäts-Faktor (ISF) wird erhöht während der Kohlenhydrate-Faktor (IC) und die Basalrate gesenkt werden.

### Niedrige temporäre Ziele senken die Sensitivität

If you have this option enabled, the insulin sensitivity will be decreased while having a temporary target lower than 100 mg/dl or 5.6 mmol/l. This means, the ISF will decrease while IC and basal will rise.

### Erweiterte Einstellungen

**Always use short average delta instead of simple data** If you enable this feature, AndroidAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps AndroidAPS to work more steady with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then AndroidAPS can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know, what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.

Default value: 4 (shouldn’t be changed unless you really need to and know, what you are doing)

* * *

(Open-APS-features-advanced-meal-assist-ama)=

## Erweiterter Mahlzeit-Assistent (AMA)

AMA, the short form of "advanced meal assist" is an OpenAPS feature from 2017 (oref0). OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus if you enter carbs reliably.

You can find more information in the [OpenAPS documentation](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

(Open-APS-features-max-u-hr-a-temp-basal-can-be-set-to-openaps-max-basal)=

### Max IE/h, die als temporäre Basalrate gesetzt werden können (OpenAPS “max-basal”)

This safety setting helps AndroidAPS from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. Es wird empfohlen, hier etwas vernünftiges einzugeben. A good recommendation is to take the highest basal rate in your profile and multiply it by 4 and at least 3. For example, if the highest basal rate in your profile is 1.0 U/h you could multiply that by 4 to get a value of 4 U/h and set the 4 as your safety parameter.

You cannot chose any value: For safety reason, there is a 'hard limit', which depends on the patient age. The 'hard limit' for maxIOB is lower in AMA than in SMB. For children, the value is the lowest while for insulin resistant adults, it is the biggest.

The hardcoded parameters in AndroidAPS are:

* Kind: 2
* Jugendlicher: 5
* Erwachsener: 10
* Insulinresistenter Erwachsener: 12
* Schwangere: 25

*Vgl. dazu auch die [Übersicht der fest programmierten Limits](Open-APS-features-overview-of-hard-coded-limits).*

### Maximales Basal-IOB, das OpenAPS abgeben darf \[IE\] (OpenAPS “max-iob”)

This parameter limits the maximum of basal IOB where AndroidAPS still works. If the IOB is higher, it stops giving additional basal insulin until the basal IOB is under the limit.

The default value is 2, but you should be rise this parameter slowly to see how much it affects you and which value fits best. Das ist sehr individuell und hängt stark vom durchschnittlichen Gesamtinsulinbedarf ab (total daily dose = TDD). Zur Sicherheit gibt es ein Limit, das auf dem Patientenalter basiert. The 'hard limit' for maxIOB is lower in AMA than in SMB.

* Kind: 3
* Jugendlicher: 5
* Erwachsener: 7
* Insulinresistenter Erwachsener: 12
* Schwangere: 25

*Vgl. dazu auch die [Übersicht der fest programmierten Limits](Open-APS-features-overview-of-hard-coded-limits).*

### Verwende AMA Autosense

Here, you can chose, if you want to use the [sensitivity detection](../Configuration/Sensitivity-detection-and-COB.md) autosens or not.

### Autosense passt auch temporäre Ziele an

If you have this option enabled, autosens can adjust targets (next to basal and ISF), too. This lets AndroidAPS work more 'aggressive' or not. The actual target might be reached faster with this.

### Erweiterte Einstellungen

**Always use short average delta instead of simple data** If you enable this feature, AndroidAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps AndroidAPS to work more steady with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then AndroidAPS can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know, what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.

Default value: 4 (shouldn’t be changed unless you really need to and know, what you are doing)

**Bolus snooze dia divisor** The feature “bolus snooze” works after a meal bolus. AAPS doesn’t set low temporary basal rates after a meal in the period of the DIA divided by the “bolus snooze”-parameter. The default value is 2. That means with a DIA of 5h, the “bolus snooze” would be 5h : 2 = 2.5h long.

Default value: 2

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
    <td>7,0</td>
    <td>7,0</td>
    <td>7,0</td>
    <td>7,0</td>
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