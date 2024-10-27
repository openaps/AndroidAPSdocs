# Alltägliche Dinge - Insulinpumpen

## Wechseln des Infusions-Sets: Reservoire und Kanülen

Das unten beschriebene Verfahren gilt nur für Schlauchpumpen und ist nicht ohne weiteres auf Patchpumpen wie den Omnipod, die Medtrum Nano, die Accu-Chek Solo usw. anwendbar. Dieses Verfahren wird manchmal als "Set-Wechsel" bezeichnet, wobei ein "vollständiger" Set-Wechsel das Insulinreservoir und die Kanüle umfasst und ein "teilweiser" Set-Wechsel sich auf einen Wechsel der Kanüle bezieht.

Der physische Catridge-/Reservoirwechsel kann nicht über **AAPS** durchgeführt werden und muss direkt über die Pumpe erfolgen. Der erfolgte Wechseln muss in **AAPS** manuell eingetragen werden.

### Anleitung zum Wechseln sowohl des Reservoirs als auch der Kanüle

1. Trenne in **AAPS** die Pumpe: Drücke und halte das “Open Loop”/”Closed Loop”-Symbol auf der **AAPS** ÜBERSICHT und wähle dann "Pumpe trennen - 1 STD.”. Das Pumpensymbol wird dann, als Zeichen dafür, dass die Pumpe getrennt wurde, grau dargestellt.

2. Wechsel das Insulinreservoir nun physisch: Koppel die Pumpe vom Körper ab und wechsel das Reservoir/Catridge und die Kanüle wie es die Anweisungen des Herstellers vorsehen.

3. Schlauch und Kanüle entlüften/füllen: Dies kann direkt an der Pumpe erfolgen. Achte darauf, dass keine Blasen mehr im Schlauch sind.

4. Setze die neue Kanüle. Sobald die Kanüle gesetzt ist und die Setznadel entfernt wurde, hat die neue Kanüle noch etwas Luft in der Kanülennadel, die auch entlüftet werden muss. Um dies in **AAPS** anzukündigen und die Stelle vorzubereiten: Wähle die NADELWECHSEL/FÜLLEN-Schaltfläche im Reiter **AAPS**-AKTIONEN aus und aktiviere "Pumpenkatheter-Wechsel" und/oder "Ampullen-Wechsel" entsprechend zur Dokumentation des Wechsels. Stelle jetzt die Füllmenge, die zu Deiner Kanüle passt ein (normalerweise etwa 0,3 IE) und wähle „OK“ aus. Lies die Zusammenfassung und bestätige das Ausführen des Füllens durch Tippen auf „OK“.

5. Pumpe in **AAPS** wieder verbinden: Drücke auf das graue Symbol für die getrennte Pumpe und wähle 'Pumpe erneut verbinden', um das Loopen fortzusetzen.

### Nützliche Informationen zu Insulin/Kanülenwechsel

●	Das Protokollieren eines Kanülenwechsels setzt Autosens auf 100% zurück. Es werden dabei auch die entsprechenden Kanülen/Insulin-Statusleuchten und -Alter auf dem **AAPS**-Startbildschirm zurückgesetzt.

●	Du kannst die Standard-Füllmenge in den Einstellungen > Übersicht > Füll-/Vorfüll-Standardmengen festlegen/anpassen. Schau bitte im Beipackzettel Deines Katheters nach, wie viele Einheiten (je nach Nadel- und Schlauchlänge) für Deinen Katheter zur Befüllung verwendet werden sollten.

●	Insulin, das mit der Füll-Funktion gegeben wird, wird von **AAPS** bei der Berechnung des noch aktiven Insulins (IOB) nicht berücksichtigt und im **AAPS**-Behandlungsmenü als "Prime" gekennzeichnet.

Boli, die während die Pumpe getrennt ist, abgegeben werden, werden in **AAPS** nicht berücksichtigt. Wenn Du, während **AAPS** getrennt ist, direkt über die Pumpe gebolt hast, kannst Du nach dem erneuten Verbinden, diese Insulinmenge unter dem Register "Insulin" ankündigen (ohne es zu bolen) (siehe Link unten "Abgegebenes Insulin ankündigen, ohne es tatsächlich zu bolen" für weitere Details).

### Probleme mir Kanüle, Infusionsstelle, Schlauch und/oder Pumpe

Wenn Du sicher bist, dass Du für eine bestimmte Zeit kein Insulin bekommen hast, obwohl **AAPS** anzeigt, dass es abgegeben wurde, und Du ganz genau weißt, wann das Problem aufgetreten ist (_z.B._ beim Entfernen der Kanüle sihst Du eine abgeknickte Nadel)), kannst Du das in **AAPS** korrigieren. Dir muss alllerdings klar sein, dass das Insulin möglicherweise doch abgegeben wurde, und aus irgendeinemem Grund verzögert wirken könnte.

```{admonition} Caution - Risk of Hypoglycemia
:class: danger
Lösche Boluseinträge in **AAPS** nur mit ÄUSSERSTER Vorsicht. Für den Fall, dass Insulin _tatsächlich abgegeben_ wurde, achte in den kommenden 24h genau auf Deine Glukosewerte.
```

Um Bolus und SMBs zu löschen, von denen Du genau weißt, dass sie nicht abgegeben wurden, öffne den BEHANDLUNGEN-Tab und lösche mit Vorsichtig protokollierten Bolus-Informationen > Kohlenhydrate und Bolus ab dem Zeitpunkt, an dem der Vorfall passiert ist. Dies wird den für die Berechnungen von **AAPS** entscheidenden Wert "Insulin on Board" (IOB) korrigieren. Wenn Du auf die ÜBERSICHT zurückkehrst, wirst Du sehen, dass der IOB-Wert kleiner geworden ist. Bitte beachte, dass Du das von **AAPS** berechnete Basalinsulin nicht löschen kannst und es daher weiterhin von **AAPS** berücksichtigt wird.

In weniger offensichtlichen Problemen bei der Insulinabgabe _z.B._ Undichtigkeiten, Verstopfungen oder Tunneling, bei denen Du entweder nicht sicher bist, wann das Problem aufgetreten ist, oder Du glaubst, dass nur ein Teil des Insulins abgegeben wurde, musst Du vorsichtig sein. Entweder erkennst Du das Problem durch "Riechen“ des Insulins, ein feuchtes Katheter-Pflaster, hohe Glukosewerte oder durch einen Alarm. Da Du nie wissen wirst, wie viel Insulin (das nach einer Weile zu wirken beginnen könnte) genau unter Deine Haut gelangt ist, wird es schwer sein, die richtige Menge an Insulin zu bestimmen, die vom aktuellen "Insulin on Board" (IOB)-Wert abgezogen werden muss. Eine mögliche Strategie ist, nachdem Du das Problem mit der Insulinabgabe gelöst hast, das Loopen für 5 Stunden (bzw. für die Wirkdauer Deines genutzten Insulins) zu unterbrechen und erst danach das Loopen wieder aufzunehmen. Damit wird sichergestellt, dass der IOB-Wert beim erneuten Loop-Start korrekt ist.

## Die Pumpe zum Duschen oder für Aktivitäten trennen

Wenn Du Deine Pumpe zum Duschen, Baden und Schwimmen, Kontaktsport oder anderen Aktivitäten abnimmst, musst Du **AAPS** wissen lassen, dass kein Insulin geliefert wird. Nur so kann die IOB-Berechnung korrekt erfolgen. Die Pumpe kann mit dem Loop-Status-Symbol auf dem **AAPS**-Startbildschirm getrennt werden.

Da Du während der Pumpen-Trennung kein Insulin erhältst, solltest Du alle zwei Stunden wieder verbinden, um das fehlende Basalinsulin nachzuholen. Das kannst Du machen, indem Du Dich verbindest, die fehlenden Basalmengen (z.B. der letzten zwei Stunden) bolst, bevor Du Dich dann wieder trennst. Dies sollte helfen, einen schweren Insulinmangel zu vermeiden, der zu diabetischer Ketoazidose (DKA) führen könnte. Wenn es während der Aktivität unpraktisch ist, die Pumpe wieder anzuschließen (Kanüle ist durch das Tragen eines Neoprenanzugs abgedeckt usw.), dann kann eine Pen-Injektion auch eine Möglichkeit sein. Diese manuelle Injektion kann in **AAPS** protokolliert werden, und muss nicht zum Zeitpunkt der Injektion eingegeben werden (notiere Dir einfach den Zeitpunkt der Injektion). Das geht, da Du beim Wiederankoppeln das Insulin nur ankündigst, und der Boluszeitpunkt "rückdatiert" werden kann.

## Abgegebenes Insulin ankündigen, ohne es tatsächlich zu bolen

Um Insulin, das während **AAPS** von der getrennt war oder Pen-Injektionen in **AAPS** einzutragen: Wähle den Reiter „Insulin“, gib die Menge in den Einheiten ein und wähle „Bolus nur erfassen“. Wenn Du diese Option wählst, erscheint ein „Zeitversatz“-Tab. Wenn die Injektion vor kurzem gegeben wurde, kannst Du das ignorieren. Ist der Bolus allerdings schon etwas her, kannst ein Minuszeichen vor der Zeit setzen (_z.B._ - 30 min), um die richtige Boluszeit zu erfassen. **AAPS** wird dann die Dauer der Insulinwirkung berücksichtigen und das verbleibende Insulin im System entsprechend berechnen.

Wenn Du **AAPS** als betreuende Person verwendest, kannst Du die Pumpe durch [SMS-Befehl](sms-Befehle) mit Hilfe von Befehlen wie „pump disconnect 120“ und „pump connect 120“ remote trennen (und wieder verbinden). Der Zeitraum für eine Remote-Trennung der Pumpe beträgt 1 - 120 Min. (in diesem Beispiel sind es 120 Minuten). Das ist eine sehr nützliche Funktion, wenn Du das **AAPS**-Smartphone nicht in Reichweite hast, weil es z. B. in einem Pumpengürtel Deines Kindes, das auf dem Weg ins Schwimmbad, vergraben ist oder mit Argus-Augen von einem Teenager bewacht oder etwas benutzt wird.

## Die Pumpe nach einer Aktivität wieder verbinden

Nach einer langen Unterbrechung (1 - 2 Stunden) ist es ziemlich häufig, dass **AAPS** einen negativen IOB errechnet und anzeigt. Wenn Du die Pumpe dann wieder verbindest, kannst Du je nach Vorliebe/aktuellem Glukosespiegel/geplanter Mahlzeit oder kommender Aktivität entweder:

a) Einfach die Pumpe in **AAPS** wieder verbinden (grau nach grün, für Closed Loop) und es **AAPS** überlassen das Insulin zu liefern

_oder_

b) Wenn Du aggressiver vorgehen möchtest (zum Beispiel, weil Du auf eine Hyperglykämie zusteuerst), kannst Du zum Taschenrechner navigieren und für Null Kohlenhydrate bolen, um das berechnete fehlende Insulin sofort als Bolus abzugeben.

Welche Strategie Du wählen solltest, ist höchst individuell und am besten durch Ausprobieren herauszufinden.
