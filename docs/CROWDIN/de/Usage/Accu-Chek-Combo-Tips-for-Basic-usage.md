# AkkuChek Combo Tipps zum Einstieg

**HINWEIS:** Ab AAPS Version 3.2, wurde ein [neuer Combo-Treiber](../Configuration/Accu-Chek-Combo-Pump-v2.md) (auch als 'combov2' bezeichnet) hinzugefügt. Der alte Treiber wird auch 'Ruffy-based driver' genannt. Einige Teile dieses Dokuments gelten nur für den alten Treiber. Diese Abschnitte werden entsprechend gekennzeichnet.

## Wie man einen reibungslosen Betrieb gewährleistet

* **Hab immer dein Smartphone dabei**, lege es in der Nacht neben dein Bett. Da du während des Schlafens auf der Pumpe liegen könntest, funktioniert eine höhere Position (auf einem Regal oder Brett) am besten.
* Sorge dafür, dass die Batterie der Pumpe immer so voll wie möglich ist. Im Abschnitt Batterie findest du Tipps bezüglich der Batterie.
* Nur für den alten Treiber gültig: **Die App 'ruffy' sollte nicht aufgerufen werden**, solange das System läuft. Wenn diese App erneut gestartet wird, kann die Verbindung zur Pumpe verloren gehen. Wenn die Pumpe mit ruffy verbunden ist, gibt es keine Notwendigkeit, die Verbindung erneut herzustellen. Selbst nach einem Neustart des Smartphones wird die Verbindung automatisch wieder hergestellt. Verschiebe die App wenn möglich auf einen unbenutzten Bildschirm oder in ein Verzeichnis auf dem Smartphone, damit du sie nicht aus Versehen aufrufst.
* Nur für den alten Treiber gültig: Solltest Du während der Loop läuft, versehentlich die App gestartet haben, hilft es das Smartphone neu zu starten.
* Bediene die Pumpe nach Möglichkeit nur über AndroidAPS. Um das zu gewährleisten, ist es sinnvoll, die Tastensperre an der Pumpe mit **PUMPEN-EINSTELLUNGEN / TASTENSPERRE / EIN** zu aktivieren. Es ist lediglich dann notwendig, die Tasten der Pumpe zu benutzen, wenn das Reservoir oder die Batterie ausgewechselt werden müssen. ![Tastensperre](../images/combo/combo-tips-keylock.png)

## Pumpe nicht erreichbar. Was ist zu tun?

### Alarm für "Pumpe nicht erreichbar" aktivieren

* Navigiere in AndroidAPS zu **Einstellungen / Lokale Alarme**, aktiviere **Alarm, wenn die Pumpe nicht erreichbar ist** und setze **Pumpe ist nicht erreichbar Grenze [Min]** auf **31** Minuten. 
* Das gibt dir genug Zeit, dass der Alarm nicht ausgelöst wird, wenn du das Smartphone auf dem Schreibtisch liegen lässt und das Zimmer verlässt, aber informiert dich, wenn die Pumpe für einen Zeitraum nicht erreichbar ist, der die Dauer einer temporären Basalrate übersteigt.

### Erreichbarkeit der Pumpe wiederherstellen

* Wenn AndroidAPS einen **Pumpe nicht erreichbar**-Alarm auslöst, hebe zuerst die Tastensperre auf und **betätige irgendeine Taste an der Pumpe** (z.B. den "Runter" Button). Sobald das Display der Pumpe sich ausgeschaltet hat, drücke **AKTUALISIEREN** auf dem **Reiter 'Combo'** in AAPS. Meistens funktioniert die Verbindung dann wieder.
* Wenn das nicht hilft, starte dein Smartphone neu. Nach dem Neustart wird AAPS ebenfalls neu gestartet und es wird eine neue Verbindung zur Pumpe aufgebaut. Solltest Du den alten Treiber verwenden wird 'ruffy' ebenfalls neu gestartet.
* Die Tests haben gezeigt, dass bestimmte Smartphones den Fehler "Pumpe nicht erreichbar" öfter auslösen als andere. [AAPS Smartphones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) zeigt die erfolgreich getesteten Smartphones. 

### Ursachen und Folgen von häufigen Kommunikationsfehlern

* Auf Smartphones mit **wenig Speicher** (oder **aggressiven Enegierspar-**-Einstellungen) wird AndroidAPS oft abgeschaltet. Das kannst du daran erkennen, dass die Buttons Bolus und Rechner auf dem Hauptbildschirm nicht angezeigt werden, wenn AAPS gestartet wird, weil das System sich initialisiert. Das kann "Pumpe nicht erreichbar"-Alarme beim Start auslösen. In dem Feld **Letzte Verbindung** auf der Registerkarte "Combo" kannst du sehen, wann AndroidAPS das letzte mal mit der Pumpe kommuniziert hat. 

![Pumpe nicht erreichbar](../images/combo/combo-tips-pump-unreachable.png)

![Keine Verbindung zur Pumpe (wie im alten Treiber-Tab angezeigt)](../images/combo/combo-tips-no-connection-to-pump.png)

![Keine Verbindung zur Pumpe (wie im neuen Treiber-Tab angezeigt)](../images/combo/combov2-tips-no-connection-to-pump.png)

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

![Bluetooth aktiviert](../images/combo/combo-tips-compo.png)

* Hebe die Tastensperre auf der Pumpe auf, versetze die Pumpe in den Stop-Modus, bestätige bei Bedarf den Abbruch einer temporären Basalrate und tausche die Batterie aus.
* Nur für den alten Treiber gültig: Sollte die Uhr der Pumpe den Batteriewechsel nicht überlebt haben, setze das Datum und die Uhrzeit auf der Pumpe genau auf das Datum/die Uhrzeit des AAPS-Smartphones. (Der neue Treiber nimmt die Anpassungen automatisch auf der Pumpe vor.)
* Danach versetze die Pumpe wieder in den Start-Modus, wähle **Fortfahren**, indem du auf dem Startbildschirm lange auf **Pausiert** drückst.
* AndroidAPS setzt dann erneut eine benötigte temporäre Basalrate mit Eintreffen des nächsten Zuckerwertes. 

(Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)=

### Batterieart und Ursachen für eine kurze Lebensdauer der Batterie

* Häufige Bluetooth-Verbindungen verbrauchten eine Menge Energie, verwende nur **qualitativ hochwertige Batterien** wie Energizer Ultimate Lithium, die "Power One"s auf dem "grossen" Accu-Chek Servicepack oder verwende Eneloop Batterien, wenn Du Dich für einen wiederaufladbaren Akku entscheidest. 

![Energizer](../images/combo/combo-tips-energizer.jpg) ![OnePower](../images/combo/combo-tips-power-one.png)

Die typische Lebensdauer für verschiedene Batterien ist wie folgt:

* **Energizer Ultimate Lithium**: 4 bis 7 Wochen
* **Power One Alkaline** (Varta) aus dem Service-Pack: 2 bis 4 Wochen
* **Eneloop wiederaufladbare** Batterien (BK-3MCCE): 1-3 Wochen

Wenn die Lebensdauer der Batterie wesentlich kürzer ist, als die oben angegebenen Bereiche, überprüfe bitte folgende mögliche Ursachen:

* Nur für den alten Treiber gültig: Neuere Versionen (ab März 2018) der [ruffy-App](https://github.com/MilosKozak/ruffy) führen zu einer deutlich längeren Lebensdauer der Batterie. Falls Du Probleme mit der Lebensdauer der Batterie haben solltest, wechsle auf die neueste Version.
* Es gibt verschiedene Varianten der Batterie Abdeckung bei der Combo Pumpe, die teilweise einen Kurzschluss bei der Batterie verursachen und sie schnell entladen. Die Abdeckungen ohne dieses Problem kann man an den goldenen Metallkontakten erkennen.
* Wenn die Uhr in der Pumpe einen kurzen Batteriewechsel nicht "überlebt", kann es sein, dass der Kondensator kaputt ist, der die Uhr nach einem kurzen Energieverlust weiter laufen lässt. In diesem Fall hilft nur ein Austausch der Pumpe durch Roche, was während der Garantiezeit kein Problem ist. 
* Die Hardware des Smartphones und die Software (Android Betriebssystem und Bluetooth Protokoll) beeinflussen ebenfalls die Lebensdauer der Batterie in der Pumpe, wobei die genauen Faktoren bisher noch nicht bekannt sind. Wenn du die Möglichkeit hast, versuche es mit einem anderen Smartphone und vergleiche die Lebensdauer der Batterie.

## Zeitumstellung (Sommer- / Winterzeit)

**HINWEIS**: Der neue Treiber setzt Datum und Uhrzeit automatisch und macht die Anpassungen bei einer Zeitumstellung selbständig. Die folgenden Schritte gelten nur für den alten Treiber.

* Zum aktuellen Zeitpunkt unterstützt der Combo-Treiber keine automatische Anpassung der Zeit in der Pumpe.
* Während der Nacht der Zeitumstellung wird die Zeit des Smartphones aktualisiert, aber die Zeit in der Pumpe bleibt unverändert. Das löst gegen 3 Uhr morgens einen Alarm aus, weil die Zeiten der Systeme ab dann voneinander abweichen.
* Wenn du in der Nacht nicht geweckt werden willst, **deaktiviere die automatische Zeitanpassung auf dem Smartphone** am Abend bevor die Zeitumstellung erfolgt und passe die Zeit am nächsten Morgen manuell an. Ein guter Weg, um mit Zeitumstellungen umzugehen ist, in eine Zeitzone zu wechseln, die sich auf dem gleichen Längengrad befindet, auf dem Du Dich befindest, aber näher am Äquator liegt (in der es keine Sommer-/Winterzeitumstellung gibt). Beispiel: Wenn Du in der Sommerzeit in Mitteleuropa bist (CEST/GMT+2), wechselst Du in der Nacht vor der Umstellung auf Winterzeit die Zeitzone Deines Smartphones in der Nacht vor der Umstellung auf Winterzeit in die Zeitzone Landes Zimbabwe (CAT). Am darauf folgenden Morgen änderst Du die Zeitzone Deines Smartphones auf Mitteleuropäische Zeit (CET/GMT+1). Gleichzeitig änderst Du die Uhreinstellungen Deiner Pumpe auf die Winterzeit-Uhrzeit. Bei der Umstellung von Winter- auf Sommerzeit gehst Du umgekehrt vor. Wechsle vor der Zeitumstellung z.B. in die Zeitzone Nigerias (CET/GMT+1) und gehe zurück auf die Mitteleuropäische Sommerzeit (CEST/GMT+2) am Morgen nach der Zeitumstellung. Passe die Pumpenzeit entsprechend an die dann gültige Sommerzeit an. Unter https://www.timeanddate.com/time/map/ kannst Du ein passendes Land und die Zeitzone auswählen.

## Erweiterter Bolus, Multiwave Bolus

Ein gleichzeitiger erweiterter Bolus und Multiwave Bolus wird nicht vom OpenAPS-Algorithmus unterstützt. Aber ein ähnlicher Effekt kann durch folgende Alternativen erreicht werden:

* Nutze **e-Carbs**, wenn Du Kohlenhydrate direkt oder über den Rechner eingibst indem Du die volle Mahlzeit eingibst und unter 'Dauer' bzw. 'KH-Zeit' die Zeitspanne eingibst, in der die KH voraussichtlich verstoffwechselt werden. Das System wird dann die KH-Menge auf gleichmäßig auf kleinere Mengen aufteilen und diese über die angegebene Zeit verteilen. Das hilft dem Algorithmus beim regelmäßigen Prüfen der Glukosewertänderungen die entsprechende Insulindosis abzugeben. Um eine Art Multi-Wave-Bolus nachzuahmen, kannst Du auch einen kleinen Einzelbolus mit e-carbs kombinieren. 
* Setze vor dem Essen auf der **Registerkarte Aktionen** in AndroidAPS unter Temporäres Ziel ein **Bald essen** Ziel mit einem Zielwert von 80 für ein paar Stunden. Die Dauer sollte dem Intervall entsprechen, das du für einen erweiterten Bolus verwenden würdest. Dadurch wird Dein Zielwert niedriger als üblich gehalten und somit die (benötigte) Insulinmenge erhöht werden.
* Verwende dann **RECHNER** auf dem Startbildschirm, um die Kohlenhydrate der Mahlzeit einzugeben, aber wende den Wert nicht direkt an, der Dir vom Bolusrechner vorgeschlagen wird. Korrigiere die Insulindosis nach unten, wenn ein Multi-Wave-Bolus abgegeben werden soll. Der Algorithmus muss nun, abhängig von der Mahlzeit, zusätzliche Mikroboli (SMB) abgeben oder eine sehr hohe temporäre Basalrate setzen, um der Steigerung des Glukosewertes entgegenzuwirken. An dieser Stelle sollte mit der Sicherheitsgrenze für die Basalrate (Max IE / h, Maximum basal IOB) sehr vorsichtig experimentiert und falls notwendig temporär geändert werden.

* Wenn du unbedingt den erweiterten oder Multiwave Bolus direkt an der Pumpe eingeben willst, wird AndroidAPS dich damit bestrafen, dass es den Closed Loop für die nächsten 6 Stunden aussetzt um zu gewährleisten, dass nicht zu viel Insulin berechnet und abgegeben wird.

![Loop nach Multiwave Bolus deaktiviert](../images/combo/combo-tips-multiwave-bolus.png)

## Alarme bei Bolusabgabe

* Wenn AndroidAPS bemerkt, dass ein identischer Bolus erfolgreich in der gleichen Minute abgegeben wurde, wird die Bolusabgabe mit der gleichen Menge Insulin verhindert. Wenn du dieselbe Bolusmenge unbedingt innerhalb kurzer Zeit erneut abgeben möchtest, warte zwei Minuten und gib ihn dann ab. Wenn die erste Bolusabgabe unterbrochen wurde oder aus anderen Gründen nicht abgegeben wurde, kannst du den Bolus seit AAPS 2.0 direkt wieder abgeben.
* Hintergrund für dieses Verhalten ist ein Sicherheitsmechanismus, der die Bolus-Historie der Pumpe liest, bevor ein neuer Bolus abgegeben wird, um das Insulin On Board (IOB) auch dann korrekt zu berechnen, wenn direkt an der Pumpe ein Bolus abgegeben wurde. An dieser Stelle müssen nicht zu unterscheidende Einträge verhindert werden.

![Doppelter Bolus](../images/combo/combo-tips-doppelbolus.png)

* Dieser Mechanismus verhindert ebenfalls einen zweiten Fehler: wenn während der Benutzung des Bolus-Rechners ein weitere Bolus direkt an der Pumpe abgegeben wird und sich dadurch die Bolus-Historie ändert, ist die Basis der Bolusberechnung falsch und die Bolusabgabe wird abgebrochen. 

![Abgebrochener Bolus](../images/combo/combo-tips-history-changed.png)