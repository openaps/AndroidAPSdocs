# Tipps und Tricks - Combo

## Wie man einen reibungslosen Betrieb gewährleistet

* **Hab immer dein Smartphone dabei**, lege es in der Nacht neben dein Bett.
* Sorge dafür, dass die Batterie der Pumpe immer so voll wie möglich ist. Im Abschnitt Batterie findest du Tipps bezüglich der Batterie.
* Es ist empfehlenswert, **die App ruffy nicht aufzurufen** solange das System läuft. Wenn diese App erneut gestartet wird, kann die Verbindung zur Pumpe verloren gehen. Wenn die Pumpe mit ruffy verbunden ist, gibt es keine Notwendigkeit, die Verbindung erneut herzustellen. Selbst nach einem Neustart des Smartphones wird die Verbindung automatisch wieder hergestellt. Verschiebe die App wenn möglich auf einen unbenutzten Bildschirm oder in ein Verzeichnis auf dem Smartphone, damit du sie nicht aus Versehen aufrufst.
* Wenn du die App unbeabschtigt startest, währen eine Loop läuft, ist es am Besten, das Smartphone neu zu starten.
* Bediene die Pumpe nach Möglichkeit nur über AndroidAPS. Um das zu gewährleisten, ist es sinnvoll, die Tastensperre an der Pumpe mit **PUMPEN-EINSTELLUNGEN / TASTENSPERRE / EIN** zu aktivieren. Es ist lediglich dann notwendig, die Tasten der Pumpe zu benutzen, wenn das Reservoir oder die Batterie ausgewechselt werden müssen. ![Tastensperre](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/keylock.png?raw=true)

## Pumpe nicht erreichbar. Was ist zu tun?

### Alarm für "Pumpe nicht erreichbar" aktivieren

* Navigiere in AndroidAPS zu **Einstellungen / Lokale Alarme**, aktiviere **Alarm, wenn die Pumpe nicht erreichbar ist** und setze **Pumpe ist nicht erreichbar Grenze [Min]** auf **31** Minuten. 
* Das gibt dir genug Zeit, dass der Alarm nicht ausgelöst wird, wenn du das Smartphone auf dem Schreibtisch liegen lässt und das Zimmer verlässt, aber informiert dich, wenn die Pumpe für einen Zeitraum nicht erreichbar ist, der die Dauer einer temporären Basalrate übersteigt.

### Erreichbarkeit der Pumpe wiederherstellen

* Wenn AndroidAPS einen **Pumpe nicht erreichbar**-Alarm auslöst, hebe zuerst die Tastensperre auf und **betätige irgendeine Taste an der Pumpe** (z.B. den "Runter" Button). Sobald das Display der Pumpe sich ausgeschaltet hat, drücke **AKTUALISIEREN** auf der **Registerkarte "Combo"** in AndroidAPS. Meistens funktioniert die Verbindung dann wieder.
* Wenn das nicht hilft, starte dein Smartphone neu. Nach dem Neustart werden AndroidAPS und ruffy reaktiviert und es wird eine neue Verbindung zur Pumpe aufgebaut.
* Die Tests haben gezeigt, dass bestimmte Smartphones den Fehler "Pumpe nicht erreichbar" öfter auslösen als andere. [AAPS Smartphones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435) zeigt die erfolgreich getesteten Smartphones. 

### Ursachen und Folgen von häufigen Kommunikationsfehlern

* Auf Smartphones mit **wenig Speicher** (oder **aggressiven Enegierspar-**-Einstellungen) wird AndroidAPS oft abgeschaltet. Das kannst du daran erkennen, dass die Buttons Bolus und Rechner auf dem Hauptbildschirm nicht angezeigt werden, wenn AAPS gestartet wird, weil das System sich initialisiert. Das kann "Pumpe nicht erreichbar"-Alarme beim Start auslösen. In dem Feld **Letzte Verbindung** auf der Registerkarte "Combo" kannst du sehen, wann AndroidAPS das letzte mal mit der Pumpe kommuniziert hat. 

![Pumpe nicht erreichbar](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/Pump_Unreachable.png) ![Keine Verbindung zur Pumpe](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/No_connection_to_pump.png)

* Dieser Fehler kann dafür sorgen, dass die Batterie der Pumpe sich schneller entlädt, da das Basalprofil von der Pumpe eingelesen wird, wenn die App neu gestartet wird.
* Er erhöht außerdem die Wahrscheinlichkeit, dass der Fehler auftritt, der dafür sorgt, dass die Pumpe alle eingehenden Verbindungsanfragen unterbindet, bis eine Taste an der Pumpe gedrückt wird. 

## Abbruch der temporären Basalrate schlägt fehl

* Von Zeit zu Zeit kann AndroidAPS einen **TBR ABBRUCH**-Alarm nicht automatisch bestätigen. Dann musst du entweder **AKTUALISIEREN** auf der **Registerkarte "Combo"** in AndroidAPS drücken oder den Alarm an der Pumpe selbst bestätigen.

## Überlegungen zur Pumpenbatterie

### Wechsel der Batterie

* Nach einem **Batterie fast leer**-Alarm sollte die Batterie so bald wie möglich gewechselt werden, damit genug Leistung für eine zuverlässige Bluetooth-Verbindung mit dem Smartphone vorhanden ist, selbst wenn das Smartphone weiter von der Pumpe entfernt ist.
* Selbst nach einem **Batterie fast leer**-Alarm kann die Batterie noch für einen längeren Zeitraum benutzt werden. Trotzdem ist es empfehlenswert immer eine neue Batterie griffbereit zu haben, nachdem der Alarm ausgelöst wurde.
* Um die Batterie zu wechseln, klicke lange auf den Button **Closed Loop** links oben auf dem Hauptbildschirm und wähle dort **Pausiere Loop für 1 h**. 
* Warte darauf, dass AndroidAPS die Kommunikation mit der Pumpe beendet und das Bluetooth Logo auf der Pumpe verschwunden ist.

![Bluetooth aktiviert](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/Compo.png?raw=true)

* Hebe die Tastensperre auf der Pumpe auf, versetze die Pumpe in den Stop-Modus, bestätige bei Bedarf den Abbruch einer temporären Basalrate und tausche die Batterie aus.
* Dann versetze die Pumpe wieder in den Start-Modus, wähle **Fortfahren**, indem du auf dem Hauptbildschirm lange auf **Pausiert** drückst.
* AndroidAPS setzt dann erneut eine benötigte temporäre Basalrate mit Eintreffen des nächsten Zuckerwertes. 

### Batterieart und Ursachen für eine kurze Lebensdauer der Batterie

* Häufige Bluetooth-Verbindungen verbrauchten eine Menge Energie, verwende nur **qualitativ hochwertige Batterien** wie Energizer Ultimate Lithium, die "Power One"s auf dem "grossen" Accu-Chek Servicepack oder verwende Eneloop Batterien, wenn du dich für einen wiederaufladbaren Akku entscheidest. 

![Energizer](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/energizer-l91aa---image.jpg?raw=true) ![OnePower](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/PowerOne.png?raw=true)

Ranges for typical life time of the different battery types are as follows:

* **Energizer Ultimate Lithium**: 4 to 7 weeks
* **Power One Alkaline** (Varta) from the servcie pack: 2 to 4 weeks
* **Eneloop rechargable** batteries (BK-3MCCE): 1 to 3 weeks

If your battery life is signifcantly shorter than the ranges given above, please check the following possible causes:

* Die latest version (March 2018) of the [ruffy App](https://github.com/MilosKozak/ruffy) significantly improved pump battery lifetime. Make sure you are on that version if you have issues with a short battery lifetime.
* There are some variants of the screw-on battery cap of the Combo pump, which partially short circuit the batteries and drain them quickly. The caps without this problem can be recognized by the golden metal contacts.
* If the pump clock does not "survive" a short battery change, it is likely that the capacitor is broken which keeps the clock running during a brief power outage. In this case, only a replacement of the pump by Roche will help, which is not a problem during the warranty period. 
* The smart phone hardware and software (Android operating system and bluetooth stack) also impact the battery lifetime of the pump, even though the exact factors are not completely known yet. If you have the opportunity, try another smartphone and compare battery lifetimes.

## Daylight saving time changes

* Currently the combo driver does not support automatic adjustment of the pump's time.
* During the night of a daylight saving time change, the time of the smartphone is updated, but the time of the pump remains unchanged. This leads to an alarm due to deviating times between the systems at 3 am.
* If you do not want to be awakened at night, **deactivate the automatic daylight saving time changeover on the mobile phone** in the evening before the time changeover and adjust the times manually the next morning.

## Extended bolus, multiwave bolus

The OpenAPS algorithm does not support a parallel extended bolus or multiwave bolus. But a similar treatment can be achieved by the following alternatives:

* Before eating, on the **Actions tab** in AndroidAPS set as a temporary **Eating Soon** goal with target glucose 80 for several hours. The duration should be based on the interval you would chosse for an extended bolus. 
* Then use the **CALCULATOR** to enter the full carbs of the meal, but do not directly apply the values ​​suggested by the bolus calculator. If a multiwave-like bolus is to be delivered, input the carbohydrate share as a bolus. Depending on the meal, the algorithm now has to deliver a very high temporary basal rate to counteract the increase in blood sugar. Here, the safety limitation of the basal rate (Max IE / h, Maximum basal IOB) should be very carefully experimented with and, if necessary, temporarily changed. 

![Temporary goal](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/Temporary_Target.png)

* Alternatively, on the Actions tab in AndoidAPS a **profile change** can be made with the duration of the delayed bolus and an increased percentage. There is no need for another profile (eg in Nightscout). The correct percentage can be calculated from the average basal rate over the selected period and the amount of insulin needed. Thus, a desired extended bolus of 4 IU for 4 hours at a basal rate of 0.5 IU / h would require a temporary basal rate of 300% . 

![Temporäre Basalrate](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/Profile_Switch.png)

* IF you are tempted to just use the extended or multiwave bolus directly on the pump, AndroidAPS will penalize you wth disabling the closed loop for the next six hours to ensure that no excess insulin dosage is calculated.

![Disabled loop after multiwave bolus](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/Multiwave_Bolus.png)

## Alarms at bolus delivery

* If AndroidAPS detects that an identical has been successfully delivered at the same minute, bolus delivery will be prevented with identical numer of insulin units. If your really want to bolus the same inuslin twice in short succession, just wait two more minutes and then deliver the bolus again. If the fist bolus has been interruped ot was not delivered for other reasons, you can immediately re-submit the bolus since AAPS 2.0.
* Background is a safety mechanism that reads the pump's bolus history before subm,itting a new bolus to correctly calculate insulin on board (IOB), even when a bolus is delivered directly from the pump. Here indistinguishable entries must be prevented.

![Double bolus](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/f9c56c930dc564c1649cd8e3764e077ffc02c5ef/resources/Doppelbolus.png)

* This mechanism is also responsible for a second cause of the error: If during the use of the bolus calculator another bolus is delivered via the pump and thereby the bolus history changes, the basis of the bolus calculation is wrong and the bolus is aborted. 

![Canceled bolus](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/f9c56c930dc564c1649cd8e3764e077ffc02c5ef/resources/History_changed.png)