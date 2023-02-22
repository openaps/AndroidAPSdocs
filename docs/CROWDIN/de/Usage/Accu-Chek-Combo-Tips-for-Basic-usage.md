# AkkuChek Combo Tipps zum Einstieg

**NOTE:** Starting with AAPS version 3.2, a [new Combo driver](../Configuration/Accu-Chek-Combo-Pump-v2.md) (referred to as "combov2" sometimes) has been added. The old driver is also referred to as the "Ruffy-based driver". Some parts of this document only apply to the old driver. These will be annotated accordingly.

## Wie man einen reibungslosen Betrieb gewährleistet

* **Hab immer dein Smartphone dabei**, lege es in der Nacht neben dein Bett. Da du während des Schlafens auf der Pumpe liegen könntest, funktioniert eine höhere Position (auf einem Regal oder Brett) am besten.
* Sorge dafür, dass die Batterie der Pumpe immer so voll wie möglich ist. Im Abschnitt Batterie findest du Tipps bezüglich der Batterie.
* (Only applies to the old driver) It is best to **not touch the app ruffy** while the system is running. Wenn diese App erneut gestartet wird, kann die Verbindung zur Pumpe verloren gehen. Wenn die Pumpe mit ruffy verbunden ist, gibt es keine Notwendigkeit, die Verbindung erneut herzustellen. Selbst nach einem Neustart des Smartphones wird die Verbindung automatisch wieder hergestellt. Verschiebe die App wenn möglich auf einen unbenutzten Bildschirm oder in ein Verzeichnis auf dem Smartphone, damit du sie nicht aus Versehen aufrufst.
* (Only applies to the old driver) If you unintentionally open the app ruffy during looping, it's best to restart the smartphone right away.
* Bediene die Pumpe nach Möglichkeit nur über AndroidAPS. Um das zu gewährleisten, ist es sinnvoll, die Tastensperre an der Pumpe mit **PUMPEN-EINSTELLUNGEN / TASTENSPERRE / EIN** zu aktivieren. Es ist lediglich dann notwendig, die Tasten der Pumpe zu benutzen, wenn das Reservoir oder die Batterie ausgewechselt werden müssen. ![Tastensperre](../images/combo/combo-tips-keylock.png)

## Pumpe nicht erreichbar. Was ist zu tun?

### Alarm für "Pumpe nicht erreichbar" aktivieren

* Navigiere in AndroidAPS zu **Einstellungen / Lokale Alarme**, aktiviere **Alarm, wenn die Pumpe nicht erreichbar ist** und setze **Pumpe ist nicht erreichbar Grenze [Min]** auf **31** Minuten. 
* Das gibt dir genug Zeit, dass der Alarm nicht ausgelöst wird, wenn du das Smartphone auf dem Schreibtisch liegen lässt und das Zimmer verlässt, aber informiert dich, wenn die Pumpe für einen Zeitraum nicht erreichbar ist, der die Dauer einer temporären Basalrate übersteigt.

### Erreichbarkeit der Pumpe wiederherstellen

* Wenn AndroidAPS einen **Pumpe nicht erreichbar**-Alarm auslöst, hebe zuerst die Tastensperre auf und **betätige irgendeine Taste an der Pumpe** (z.B. den "Runter" Button). As soon as the pump display has turned off, press **Refresh** on the **Combo Tab** in AndroidAPS. Meistens funktioniert die Verbindung dann wieder.
* Wenn das nicht hilft, starte dein Smartphone neu. After the restart, AndroidAPS will be reactivated and a new connection will be established with the pump. If you are using the old driver, ruffy will be reactivated as well.
* Die Tests haben gezeigt, dass bestimmte Smartphones den Fehler "Pumpe nicht erreichbar" öfter auslösen als andere. [AAPS Smartphones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) zeigt die erfolgreich getesteten Smartphones. 

### Ursachen und Folgen von häufigen Kommunikationsfehlern

* Auf Smartphones mit **wenig Speicher** (oder **aggressiven Enegierspar-**-Einstellungen) wird AndroidAPS oft abgeschaltet. Das kannst du daran erkennen, dass die Buttons Bolus und Rechner auf dem Hauptbildschirm nicht angezeigt werden, wenn AAPS gestartet wird, weil das System sich initialisiert. Das kann "Pumpe nicht erreichbar"-Alarme beim Start auslösen. In dem Feld **Letzte Verbindung** auf der Registerkarte "Combo" kannst du sehen, wann AndroidAPS das letzte mal mit der Pumpe kommuniziert hat. 

![Pump unreachable](../images/combo/combo-tips-pump-unreachable.png) ![No connection to pump (as shown in the old driver's tab)](../images/combo/combo-tips-no-connection-to-pump.png) ![No connection to pump (as shown in the new driver's tab)](../images/combo/combov2-tips-no-connection-to-pump.png)

* Dieser Fehler kann dafür sorgen, dass die Batterie der Pumpe sich schneller entlädt, da das Basalprofil von der Pumpe eingelesen wird, wenn die App neu gestartet wird.
* Er erhöht außerdem die Wahrscheinlichkeit, dass der Fehler auftritt, der dafür sorgt, dass die Pumpe alle eingehenden Verbindungsanfragen unterbindet, bis eine Taste an der Pumpe gedrückt wird. 

## Abbruch der temporären Basalrate schlägt fehl

* Von Zeit zu Zeit kann AndroidAPS einen **TBR ABBRUCH**-Alarm nicht automatisch bestätigen. Dann musst du entweder **AKTUALISIEREN** auf der **Registerkarte "Combo"** in AndroidAPS drücken oder den Alarm an der Pumpe selbst bestätigen.

## Überlegungen zur Pumpenbatterie

### Wechsel der Batterie

* Nach einem **Batterie fast leer**-Alarm sollte die Batterie so bald wie möglich gewechselt werden, damit genug Leistung für eine zuverlässige Bluetooth-Verbindung mit dem Smartphone vorhanden ist, selbst wenn das Smartphone weiter von der Pumpe entfernt ist.
* Selbst nach einem **Batterie fast leer**-Alarm kann die Batterie noch für einen längeren Zeitraum benutzt werden. Trotzdem ist es empfehlenswert immer eine neue Batterie griffbereit zu haben, nachdem der Alarm ausgelöst wurde.
* Bevor Du den Akku wechselst, drücke auf das **Loop** Symbol auf dem Hauptbildschirm und wählen **Loop stoppen für 1 Stunde** aus. 
* Warte darauf, dass AndroidAPS die Kommunikation mit der Pumpe beendet und das Bluetooth Logo auf der Pumpe verschwunden ist.

![Bluetooth enabled](../images/combo/combo-tips-compo.png)

* Release the key lock on the pump, put the pump into stop mode, confirm a possibly canceled temporary basal rate, and change the battery quickly.
* When using the old driver, if the clock on the pump did not survive the battery chenge, re-set the date and time on the pump to exactly the date/time on your phone running AAPS. (The new driver automatically updates the pump's date and time.)
* Then put the pump back in run mode select **Resume** when pressing on the **Suspended Loop** icon on the main screen.
* AndroidAPS setzt dann erneut eine benötigte temporäre Basalrate mit Eintreffen des nächsten Zuckerwertes. 

(Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)=

### Batterieart und Ursachen für eine kurze Lebensdauer der Batterie

* As intensive Bluetooth communication consumes a lot of energy, only use **high-quality batteries** like Energizer Ultimate Lithium, the "power one"s from the "large" Accu-Chek service pack, or if you are going for a rechargeable battery, use Eneloop batteries. 

![Energizer](../images/combo/combo-tips-energizer.jpg) ![OnePower](../images/combo/combo-tips-power-one.png)

Ranges for typical life time of the different battery types are as follows:

* **Energizer Ultimate Lithium**: 4 bis 7 Wochen
* **Power One Alkaline** (Varta) aus dem Service-Pack: 2 bis 4 Wochen
* **Eneloop wiederaufladbare** Batterien (BK-3MCCE): 1-3 Wochen

If your battery life is significantly shorter than the ranges given above, please check the following possible causes:

* (Only applies to the old driver) Versions of the [ruffy App](https://github.com/MilosKozak/ruffy) after vMarch 2018 significantly improved pump battery lifetime. Make sure you are on the newest version if you have issues with a short battery lifetime.
* Es gibt verschiedene Varianten der Batterie Abdeckung bei der Combo Pumpe, die teilweise einen Kurzschluss bei der Batterie verursachen und sie schnell entladen. Die Abdeckungen ohne dieses Problem kann man an den goldenen Metallkontakten erkennen.
* Wenn die Uhr in der Pumpe einen kurzen Batteriewechsel nicht "überlebt", kann es sein, dass der Kondensator kaputt ist, der die Uhr nach einem kurzen Energieverlust weiter laufen lässt. In this case, a replacement of the pump by Roche might help, which is not a problem during the warranty period. 
* Die Hardware des Smartphones und die Software (Android Betriebssystem und Bluetooth Protokoll) beeinflussen ebenfalls die Lebensdauer der Batterie in der Pumpe, wobei die genauen Faktoren bisher noch nicht bekannt sind. Wenn du die Möglichkeit hast, versuche es mit einem anderen Smartphone und vergleiche die Lebensdauer der Batterie.

## Zeitumstellung (Sommer- / Winterzeit)

**NOTE**: The new driver automatically sets date and time and handles daylight saving time changes on its own. The steps below all only apply to the old driver.

* Zum aktuellen Zeitpunkt unterstützt der Combo-Treiber keine automatische Anpassung der Zeit in der Pumpe.
* Während der Nacht der Zeitumstellung wird die Zeit des Smartphones aktualisiert, aber die Zeit in der Pumpe bleibt unverändert. Das löst gegen 3 Uhr morgens einen Alarm aus, weil die Zeiten der Systeme ab dann voneinander abweichen.
* Wenn du in der Nacht nicht geweckt werden willst, **deaktiviere die automatische Zeitanpassung auf dem Smartphone** am Abend bevor die Zeitumstellung erfolgt und passe die Zeit am nächsten Morgen manuell an. A good way to deal with daylight saving time changes is to switch to a different time zone located on the same longitude you are located at but closer to the equator, where usually no daylight saving time is observed. Example: For Central Europe on Summer Time (CEST/GMT+2), you could switch to the time zone of Zimbabwe on your phone the night before the switch to winter time and then switch back to Central European Time CET/GMT+1 the next morning while changing the clock on your pump at the same time. The other way aroud, switch to the time zone of Nigeria while on Winter Time CET/GMT+1 and go back to Central European Summer Time (CEST/GMT+2) the morning after the switch to summer time and change the pump time accordingly. Look at https://www.timeanddate.com/time/map/ to find a suitable country.

## Erweiterter Bolus, Multiwave Bolus

The OpenAPS algorithm does not support a parallel extended bolus or multiwave bolus. But a similar treatment can be achieved by the following alternatives:

* Use **e-Carbs** when entering carbs or using the Calculator by entering the carbs of the full meal and the duration you expect the carbs to arrive as glucose in you blood. The system will then calculate small carbs equally distributed over the whole duration which will cause th algorithm to provide equivalent insulin dosing while still permanently checking the overall rise/decrease of the blood glucose level. For a multiwave bolus approach, you can also combine a smaller immeadiate bolus with e-carbs. 
* Setze vor dem Essen auf der **Registerkarte Aktionen** in AndroidAPS unter Temporäres Ziel ein **Bald essen** Ziel mit einem Zielwert von 80 für ein paar Stunden. Die Dauer sollte dem Intervall entsprechen, das du für einen erweiterten Bolus verwenden würdest. This will keep your target lower than usual and therefore increase the amout of insulin delivered.
* Then use the **CALCULATOR** to enter the full carbs of the meal, but do not directly apply the values suggested by the bolus calculator. If a multiwave-like bolus is to be delivered, correct the insulin dosage down. Depending on the meal, the algorithm now has to deliver additional SMBs or higher temporary basal rates to counteract the increase in blood sugar. An dieser Stelle sollte mit der Sicherheitsgrenze für die Basalrate (Max IE / h, Maximum basal IOB) sehr vorsichtig experimentiert und falls notwendig temporär geändert werden.

* Wenn du unbedingt den erweiterten oder Multiwave Bolus direkt an der Pumpe eingeben willst, wird AndroidAPS dich damit bestrafen, dass es den Closed Loop für die nächsten 6 Stunden aussetzt um zu gewährleisten, dass nicht zu viel Insulin berechnet und abgegeben wird.

![Disabled loop after multiwave bolus](../images/combo/combo-tips-multiwave-bolus.png)

## Alarme bei Bolusabgabe

* Wenn AndroidAPS bemerkt, dass ein identischer Bolus erfolgreich in der gleichen Minute abgegeben wurde, wird die Bolusabgabe mit der gleichen Menge Insulin verhindert. Wenn du dieselbe Bolusmenge unbedingt innerhalb kurzer Zeit erneut abgeben möchtest, warte zwei Minuten und gib ihn dann ab. If the fist bolus has been interruped or was not delivered for other reasons, you can immediately re-submit the bolus since AAPS 2.0.
* The alarm is a safety mechanism that reads the pump's bolus history before submitting a new bolus to correctly calculate insulin on board (IOB), even when a bolus is delivered directly from the pump. An dieser Stelle müssen nicht zu unterscheidende Einträge verhindert werden.

![Double bolus](../images/combo/combo-tips-doppelbolus.png)

* Dieser Mechanismus verhindert ebenfalls einen zweiten Fehler: wenn während der Benutzung des Bolus-Rechners ein weitere Bolus direkt an der Pumpe abgegeben wird und sich dadurch die Bolus-Historie ändert, ist die Basis der Bolusberechnung falsch und die Bolusabgabe wird abgebrochen. 

![Canceled bolus](../images/combo/combo-tips-history-changed.png)