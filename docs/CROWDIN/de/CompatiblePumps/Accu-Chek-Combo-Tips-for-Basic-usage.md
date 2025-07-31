* * *

orphan: true

* * *

# Accu-Chek Combo Tipps zum Einstieg

## Wie man einen reibungslosen Betrieb gewährleistet

* **Hab immer dein Smartphone dabei**, lege es in der Nacht neben dein Bett. Da du während des Schlafens auf der Pumpe liegen könntest, funktioniert eine höhere Position (auf einem Regal oder Brett) am besten.
* Sorge dafür, dass die Batterie der Pumpe immer so voll wie möglich ist. Im Abschnitt Batterie findest du Tipps bezüglich der Batterie.
* Nutze die Pumpe nach Möglichkeit nur über AAPS. Aktiviere daher die Tastensperre an der Pumpe mit **PUMPEN-EINSTELLUNGEN / TASTENSPERRE / EIN**. Es ist lediglich dann notwendig, die Tasten der Pumpe zu benutzen, wenn das Reservoir oder die Batterie ausgewechselt werden müssen. 

![Tastensperre](../images/combo/combo-tips-keylock.png)

## Pumpe nicht erreichbar. Was ist zu tun?

### Alarm für "Pumpe nicht erreichbar" aktivieren

* Navigiere in AAPS zu **Einstellungen / Lokale Alarme**, aktiviere **Alarm, wenn die Pumpe nicht erreichbar ist** und setze **Pumpe ist nicht erreichbar Grenze [Min]** auf **31** Minuten.
* Das gibt dir genug Zeit, dass der Alarm nicht ausgelöst wird, wenn du das Smartphone auf dem Schreibtisch liegen lässt und das Zimmer verlässt, aber informiert dich, wenn die Pumpe für einen Zeitraum nicht erreichbar ist, der die Dauer einer temporären Basalrate übersteigt.

### Erreichbarkeit der Pumpe wiederherstellen

* Wenn AAPS einen **Pumpe nicht erreichbar**-Alarm auslöst, hebe zuerst die Tastensperre auf und **drücke irgendeine Taste an der Pumpe** (z.B. den "Runter" Button). Sobald das Display der Pumpe sich ausgeschaltet hat, drücke **AKTUALISIEREN** auf dem **Reiter 'Combo'** in AAPS. Meistens funktioniert die Verbindung dann wieder.
* Wenn das nicht hilft, starte dein Smartphone neu. Nach dem Neustart wird AAPS ebenfalls neu gestartet und es wird eine neue Verbindung zur Pumpe aufgebaut. Solltest Du den alten Treiber verwenden wird 'ruffy' ebenfalls neu gestartet.

* Die Tests haben gezeigt, dass bestimmte Smartphones den Fehler "Pumpe nicht erreichbar" öfter auslösen als andere. Schaue in der [Liste von getesteten Smartphones](#Phones-list-of-tested-phones) nach erfolgreich getesteten Smartphones.

### Ursachen und Folgen von häufigen Kommunikationsfehlern

* Auf Smartphones mit **wenig Speicher** (oder **aggressiven Enegierspar-**-Einstellungen) wird AAPS oft abgeschaltet. Das kannst du daran erkennen, dass die Buttons Bolus und Rechner auf dem Hauptbildschirm nicht angezeigt werden, wenn AAPS gestartet wird, weil das System sich initialisiert. Das kann "Pumpe nicht erreichbar"-Alarme beim Start auslösen. In dem Feld **Letzte Verbindung** auf dem "Combo"-Reiter kannst Du sehen, wann AAPS das letzte Mal mit der Pumpe kommuniziert hat.

![Pumpe nicht erreichbar](../images/combo/combo-tips-pump-unreachable.png)

![Keine Verbindung zur Pumpe (wie im alten Treiber-Tab angezeigt)](../images/combo/combo-tips-no-connection-to-pump.png)

![Keine Verbindung zur Pumpe (wie im neuen Treiber-Tab angezeigt)](../images/combo/combov2-tips-no-connection-to-pump.png)

* Dieser Fehler kann dafür sorgen, dass die Batterie der Pumpe sich schneller entlädt, da das Basalprofil von der Pumpe eingelesen wird, wenn die App neu gestartet wird.
* Er erhöht außerdem die Wahrscheinlichkeit, dass der Fehler auftritt, der dafür sorgt, dass die Pumpe alle eingehenden Verbindungsanfragen unterbindet, bis eine Taste an der Pumpe gedrückt wird. 

## Abbruch der temporären Basalrate schlägt fehl

* Manchmal kann AAPS einen **TBR ABBRUCH**-Alarm nicht automatisch bestätigen. Dann musst du entweder **AKTUALISIEREN** auf der **Registerkarte "Combo"** in AAPS drücken oder den Alarm an der Pumpe selbst bestätigen.

## Überlegungen zur Pumpenbatterie

### Wechsel der Batterie

* Nach einem **Batterie fast leer**-Alarm sollte die Batterie so bald wie möglich gewechselt werden, damit genug Leistung für eine zuverlässige Bluetooth-Verbindung mit dem Smartphone vorhanden ist, selbst wenn das Smartphone weiter von der Pumpe entfernt ist.
* Selbst nach einem **Batterie fast leer**-Alarm kann die Batterie noch für einen längeren Zeitraum benutzt werden. Trotzdem ist es empfehlenswert immer eine neue Batterie griffbereit zu haben, nachdem der Alarm ausgelöst wurde.
* Bevor Du den Akku wechselst, drücke auf das **Loop** Symbol auf dem Hauptbildschirm und wählen **Loop stoppen für 1 Stunde** aus. 
* Warte darauf, dass AndroidAPS die Kommunikation mit der Pumpe beendet und das Bluetooth Logo auf der Pumpe verschwunden ist.

![Bluetooth aktiviert](../images/combo/combo-tips-compo.png)

* Hebe die Tastensperre auf der Pumpe auf, versetze die Pumpe in den Stop-Modus, bestätige bei Bedarf den Abbruch einer temporären Basalrate und tausche die Batterie aus.
* Nur für den alten Treiber gültig: Sollte die Uhr der Pumpe den Batteriewechsel nicht überlebt haben, setze das Datum und die Uhrzeit auf der Pumpe genau auf das Datum/die Uhrzeit des AAPS-Smartphones. (Der neue Treiber nimmt die Anpassungen automatisch auf der Pumpe vor.)
* Danach versetze die Pumpe wieder in den Start-Modus, wähle **Fortfahren**, indem du auf dem Startbildschirm lange auf **Pausiert** drückst.
* Mit dem Eintreffen des nächsten Glukosewertes, setzt AAPS dann erneut eine benötigte temporäre Basalrate.

(Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)=

### Batterieart und Ursachen für eine kurze Lebensdauer der Batterie

* Häufige Bluetooth-Verbindungen verbrauchten eine Menge Energie, verwende nur **qualitativ hochwertige Batterien** wie Energizer Ultimate Lithium, die "Power One"s auf dem "grossen" Accu-Chek Servicepack oder verwende Eneloop Batterien, wenn Du Dich für einen wiederaufladbaren Akku entscheidest. 

![Energizer](../images/combo/combo-tips-energizer.jpg) ![OnePower](../images/combo/combo-tips-power-one.png)

Die typische Lebensdauer für verschiedene Batterien ist wie folgt:

* **Energizer Ultimate Lithium**: 4 bis 7 Wochen
* **Power One Alkaline** (Varta) aus dem Service-Pack: 2 bis 4 Wochen
* **Eneloop wiederaufladbare** Batterien (BK-3MCCE): 1-3 Wochen

Wenn die Lebensdauer der Batterie wesentlich kürzer ist, als die oben angegebenen Bereiche, überprüfe bitte folgende mögliche Ursachen:

* Es gibt verschiedene Varianten der Batterie Abdeckung bei der Combo Pumpe, die teilweise einen Kurzschluss bei der Batterie verursachen und sie schnell entladen. Die Abdeckungen ohne dieses Problem kann man an den goldenen Metallkontakten erkennen.
* Wenn die Uhr in der Pumpe einen kurzen Batteriewechsel nicht "überlebt", kann es sein, dass der Kondensator kaputt ist, der die Uhr nach einem kurzen Energieverlust weiter laufen lässt. In diesem Fall hilft nur ein Austausch der Pumpe durch Roche, was während der Garantiezeit kein Problem ist. 
* Die Hardware des Smartphones und die Software (Android Betriebssystem und Bluetooth Protokoll) beeinflussen ebenfalls die Lebensdauer der Batterie in der Pumpe, wobei die genauen Faktoren bisher noch nicht bekannt sind. Wenn du die Möglichkeit hast, versuche es mit einem anderen Smartphone und vergleiche die Lebensdauer der Batterie.

## Erweiterter Bolus, Multiwave Bolus

Ein gleichzeitiger erweiterter Bolus und Multiwave Bolus wird nicht vom OpenAPS-Algorithmus unterstützt. Aber ein ähnlicher Effekt kann durch folgende Alternativen erreicht werden:

* Nutze **e-Carbs**, wenn Du Kohlenhydrate direkt oder über den Rechner eingibst indem Du die volle Mahlzeit eingibst und unter 'Dauer' bzw. 'KH-Zeit' die Zeitspanne eingibst, in der die KH voraussichtlich verstoffwechselt werden. Das System wird dann die KH-Menge auf gleichmäßig auf kleinere Mengen aufteilen und diese über die angegebene Zeit verteilen. Das hilft dem Algorithmus beim regelmäßigen Prüfen der Glukosewertänderungen die entsprechende Insulindosis abzugeben. Um eine Art Multi-Wave-Bolus nachzuahmen, kannst Du auch einen kleinen Einzelbolus mit e-carbs (verzögerte Kohlenhydrate) kombinieren. 
* Setze vor dem Essen auf der **Registerkarte AKTIONEN** in AAPS unter Temporäres Ziel ein **Bald essen** Ziel mit einem Zielwert von 80 für ein paar Stunden. Die Dauer sollte dem Intervall entsprechen, das Du für einen verlängerten/verzögerten Bolus verwenden würdest. Dadurch wird Dein Zielwert niedriger als üblich gehalten und somit die (benötigte) Insulinmenge erhöht werden.
* Verwende dann **RECHNER** auf dem Startbildschirm, um die Kohlenhydrate der Mahlzeit einzugeben, aber wende den Wert nicht direkt an, der Dir vom Bolusrechner vorgeschlagen wird. Korrigiere die Insulindosis nach unten, wenn ein Multi-Wave-Bolus abgegeben werden soll. Der Algorithmus muss nun, abhängig von der Mahlzeit, zusätzliche Mikroboli (SMB) abgeben oder eine sehr hohe temporäre Basalrate setzen, um der Steigerung des Glukosewertes entgegenzuwirken. An dieser Stelle sollte mit der Sicherheitsgrenze für die Basalrate (Max IE / h, Maximum basal IOB) sehr vorsichtig experimentiert und falls notwendig temporär geändert werden.

* Wenn Du unbedingt den erweiterten oder Multiwave-Bolus direkt an der Pumpe eingeben willst, wird AAPS Dich damit bestrafen, dass es den Closed Loop für die nächsten 6 Stunden aussetzt, um zu gewährleisten, dass nicht zu viel Insulin berechnet und abgegeben wird.

![Loop nach Multiwave Bolus deaktiviert](../images/combo/combo-tips-multiwave-bolus.png)

## Alarme bei Bolusabgabe

* Wenn AAPS bemerkt, dass ein identischer Bolus erfolgreich in der gleichen Minute abgegeben wurde, wird eine Bolusabgabe mit gleicher Insulinmenge verhindert. Wenn Du tatsächlich die gleiche Bolusmenge kurz hintereinander abgeben möchtest, warte weitere zwei Minuten und gib sie dann ab. Wenn der erste Bolus unterbrochen wurde oder aus anderen Gründen nicht abgegeben wurde, kannst Du den Bolus seit AAPS 2.0 direkt wieder abgeben.
* Hintergrund für dieses Verhalten ist ein Sicherheitsmechanismus, der die Bolus-Historie der Pumpe liest, bevor ein neuer Bolus abgegeben wird, um das Insulin On Board (IOB) auch dann korrekt zu berechnen, wenn direkt an der Pumpe ein Bolus abgegeben wurde. An dieser Stelle müssen nicht zu unterscheidende Einträge verhindert werden.

![Doppelter Bolus](../images/combo/combo-tips-doppelbolus.png)

* Dieser Mechanismus verhindert ebenfalls einen zweiten Fehler: wenn während der Benutzung des Bolus-Rechners ein weitere Bolus direkt an der Pumpe abgegeben wird und sich dadurch die Bolus-Historie ändert, ist die Basis der Bolusberechnung falsch und die Bolusabgabe wird abgebrochen. 

![Abgebrochener Bolus](../images/combo/combo-tips-history-changed.png)