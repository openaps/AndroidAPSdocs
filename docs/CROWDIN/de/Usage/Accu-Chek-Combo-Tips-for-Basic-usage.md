# AkkuChek Combo Tipps zum Einstieg

## Wie man einen reibungslosen Betrieb gewährleistet

* **Hab immer dein Smartphone dabei**, lege es in der Nacht neben dein Bett.
* Sorge dafür, dass die Batterie der Pumpe immer so voll wie möglich ist. Im Abschnitt Batterie findest du Tipps bezüglich der Batterie.
* Es ist empfehlenswert, **die App ruffy nicht aufzurufen** solange das System läuft. Wenn diese App erneut gestartet wird, kann die Verbindung zur Pumpe verloren gehen. Wenn die Pumpe mit ruffy verbunden ist, gibt es keine Notwendigkeit, die Verbindung erneut herzustellen. Selbst nach einem Neustart des Smartphones wird die Verbindung automatisch wieder hergestellt. Verschiebe die App wenn möglich auf einen unbenutzten Bildschirm oder in ein Verzeichnis auf dem Smartphone, damit du sie nicht aus Versehen aufrufst.
* Wenn du die App unbeabschtigt startest, währen eine Loop läuft, ist es am Besten, das Smartphone neu zu starten.
* Bediene die Pumpe nach Möglichkeit nur über AndroidAPS. Um das zu gewährleisten, ist es sinnvoll, die Tastensperre an der Pumpe mit **PUMPEN-EINSTELLUNGEN / TASTENSPERRE / EIN** zu aktivieren. Es ist lediglich dann notwendig, die Tasten der Pumpe zu benutzen, wenn das Reservoir oder die Batterie ausgewechselt werden müssen. ![Tastensperre](../images/combo/combo-tips-keylock.png)

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

![Pumpe nicht erreichbar](../images/combo/combo-tips-pump-unreachable.png) ![Keine Verbindung zur Pumpe](../images/combo/combo-tips-no-connection-to-pump.png)

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

![Bluetooth aktiviert](../images/combo/combo-tips-combo-tips-compo.png)

* Hebe die Tastensperre auf der Pumpe auf, versetze die Pumpe in den Stop-Modus, bestätige bei Bedarf den Abbruch einer temporären Basalrate und tausche die Batterie aus.
* Dann versetze die Pumpe wieder in den Start-Modus, wähle **Fortfahren**, indem du auf dem Hauptbildschirm lange auf **Pausiert** drückst.
* AndroidAPS setzt dann erneut eine benötigte temporäre Basalrate mit Eintreffen des nächsten Zuckerwertes. 

### Batterieart und Ursachen für eine kurze Lebensdauer der Batterie

* Häufige Bluetooth-Verbindungen verbrauchten eine Menge Energie, verwende nur **qualitativ hochwertige Batterien** wie Energizer Ultimate Lithium, die "Power One"s auf dem "grossen" Accu-Chek Servicepack oder verwende Eneloop Batterien, wenn du dich für einen wiederaufladbaren Akku entscheidest. 

![Energizer](../images/combo/combo-tips-energizer.jpg) ![OnePower](../images/combo/combo-tips-power-one.png)

Die typische Lebensdauer für verschiedene Batterien ist wie folgt:

* **Energizer Ultimate Lithium**: 4 bis 7 Wochen
* **Power One Alkaline** (Varta) aus dem Service-Pack: 2 bis 4 Wochen
* **Eneloop wiederaufladbare** Batterien (BK-3MCCE): 1-3 Wochen

Wenn die Lebensdauer der Batterie wesentlich kürzer ist, als die oben angegebenen Bereiche, überprüfe bitte folgende mögliche Ursachen:

* Die neueste Version (März 2018) der [ruffy App](https://github.com/MilosKozak/ruffy) hat die Lebensdauer der Batterien deutlich erhöht. Versichere dich, dass du diese Version verwendest, wenn du Probleme mit kürzerer Lebensdauer der Batterien hast.
* Es gibt verschiedene Varianten der Batterie Abdeckung bei der Combo Pumpe, die teilweise einen Kurzschluss bei der Batterie verursachen und sie schnell entladen. Die Abdeckungen ohne dieses Problem kann man an den goldenen Metallkontakten erkennen.
* Wenn die Uhr in der Pumpe einen kurzen Batteriewechsel nicht "überlebt", kann es sein, dass der Kondensator kaputt ist, der die Uhr nach einem kurzen Energieverlust weiter laufen lässt. In diesem Fall hilft nur ein Austausch der Pumpe durch Roche, was während der Garantiezeit kein Problem ist. 
* Die Hardware des Smartphones und die Software (Android Betriebssystem und Bluetooth Protokoll) beeinflussen ebenfalls die Lebensdauer der Batterie in der Pumpe, wobei die genauen Faktoren bisher noch nicht bekannt sind. Wenn du die Möglichkeit hast, versuche es mit einem anderen Smartphone und vergleiche die Lebensdauer der Batterie.

## Zeitumstellung (Sommer- / Winterzeit)

* Zum aktuellen Zeitpunkt unterstützt der Combo-Treiber keine automatische Anpassung der Zeit in der Pumpe.
* Während der Nacht der Zeitumstellung wird die Zeit des Smartphones aktualisiert, aber die Zeit in der Pumpe bleibt unverändert. Das löst gegen 3 Uhr morgens einen Alarm aus, weil die Zeiten der Systeme ab dann voneinander abweichen.
* Wenn du in der Nacht nicht geweckt werden willst, **deaktiviere die automatische Zeitanpassung auf dem Smartphone** am Abend bevor die Zeitumstellung erfolgt und passe die Zeit am nächsten Morgen manuell an.

## Erweiterter Bolus, Multiwave Bolus

Ein gleichzeitiger erweiterter Bolus und Multiwave Bolus wird nicht vom OpenAPS-Algorithmus unterstützt. Aber ein ähnlicher Effekt kann durch folgende Alternativen erreicht werden:

* Gib die Kohlenhydrate ein ohne dafür einen Bolus abzugeben. Der Loop-Algorithmus wird "aggressiver" reagieren. Verwende **eCarbs** (extended carbs) falls erforderlich.

* Wenn du unbedingt den erweiterten oder Multiwave Bolus direkt an der Pumpe eingeben willst, wird AndroidAPS dich damit bestrafen, dass es den Closed Loop für die nächsten 6 Stunden aussetzt um zu gewährleisten, dass nicht zu viel Insulin berechnet und abgegeben wird.

![Loop nach Multiwave Bolus deaktiviert](../images/combo/combo-tips-multiwave-bolus.png)

## Alarme bei Bolusabgabe

* Wenn AndroidAPS bemerkt, dass ein identischer Bolus erfolgreich in der gleichen Minute abgegeben wurde, wird die Bolusabgabe mit der gleichen Menge Insulin verhindert. Wenn du dieselbe Bolusmenge unbedingt innerhalb kurzer Zeit erneut abgeben möchtest, warte zwei Minuten und gib ihn dann ab. Wenn die erste Bolusabgabe unterbrochen wurde oder aus anderen Gründen nicht abgegeben wurde, kannst du den Bolus seit AAPS 2.0 direkt wieder abgeben.
* Hintergrund für dieses Verhalten ist ein Sicherheitsmechanismus, der die Bolus-Historie der Pumpe liest, bevor ein neuer Bolus abgegeben wird, um das Insulin On Board (IOB) auch dann korrekt zu berechnen, wenn direkt an der Pumpe ein Bolus abgegeben wurde. An dieser Stelle müssen nicht zu unterscheidende Einträge verhindert werden.

![Doppelter Bolus](../images/combo/combo-tips-doppelbolus.png)

* Dieser Mechanismus verhindert ebenfalls einen zweiten Fehler: wenn während der Benutzung des Bolus-Rechners ein weitere Bolus direkt an der Pumpe abgegeben wird und sich dadurch die Bolus-Historie ändert, ist die Basis der Bolusberechnung falsch und die Bolusabgabe wird abgebrochen. 

![Abgebrochener Bolus](../images/combo/combo-tips-history-changed.png)