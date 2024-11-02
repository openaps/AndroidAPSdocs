# Alltägliche Dinge - Insulinpumpen
## Wechseln des Infusions-Sets: Reservoire und Kanülen

Das unten beschriebene Verfahren gilt nur für Schlauchpumpen und ist nicht ohne weiteres auf Patchpumpen wie den Omnipod, die Medtrum Nano, die Accu-Chek Solo usw. anwendbar. Dieses Verfahren wird manchmal als "Set-Wechsel" bezeichnet, wobei ein "vollständiger" Set-Wechsel das Insulinreservoir und die Kanüle umfasst und ein "teilweiser" Set-Wechsel sich auf einen Wechsel der Kanüle bezieht.

Physical cartridge/reservoir changes cannot be done via **AAPS** and have to be carried out via the pump directly. These need to be logged in **AAPS** manually, once completed.

### Anleitung zum Wechseln sowohl des Reservoirs als auch der Kanüle

1)  In **AAPS**, disconnect the pump: Long press “Open Loop”/”Closed Loop” icon on the **AAPS** Home Screen and select ‘Disconnect pump - 1 hour”. Das Pumpensymbol wird dann, als Zeichen dafür, dass die Pumpe getrennt wurde, grau dargestellt.

2)  Physically change the insulin reservoir: physically disconnect your pump from the body, and change the reservoir/cartridge and cannula as per manufacturer's instructions.

3)  Prime/fill the tubing and cannula: this can be done directly on the pump. Achte darauf, dass keine Blasen mehr im Schlauch sind.

4)  Attach the new cannula to the body. Sobald die Kanüle gesetzt ist und die Setznadel entfernt wurde, hat die neue Kanüle noch etwas Luft in der Kanülennadel, die auch entlüftet werden muss. To announce this in **AAPS** and prime the site: select the PRIME/FILL button in the **AAPS** actions tab and tick “Pump site change” and/or “Insulin Cartridge Change” as appropriate to record the change. Stelle jetzt die Füllmenge, die zu Deiner Kanüle passt ein (normalerweise etwa 0,3 IE) und wähle „OK“ aus. Lies die Zusammenfassung und bestätige das Ausführen des Füllens durch Tippen auf „OK“.

5)  Reconnect the pump in **AAPS**: Press the grey disconnected pump symbol and select ‘Reconnect pump’ to continue looping.

### Nützliche Informationen zu Insulin/Kanülenwechsel

●   Logging a pump site change resets Autosens to 100%. It also resets the corresponding cannula/insulin status lights and ages on the **AAPS** Home screen.

●   You can set/adjust the default prime amount in Preferences > Overview > Fill/Prime standard insulin amounts. Schau bitte im Beipackzettel Deines Katheters nach, wie viele Einheiten (je nach Nadel- und Schlauchlänge) für Deinen Katheter zur Befüllung verwendet werden sollten.

●   Insulin delivered using the prime function is not taken into account by **AAPS** when calculating insulin on board (IOB), and is marked in the **AAPS** treatments menu as “Prime”.

●   Any insulin bolused from the pump during a pump disconnection will also not be taken into account by **AAPS**. If you happen to bolus directly from the pump while **AAPS** is disconnected, once you reconnect the pump you can announce this insulin (without bolusing it) under the “insulin” tab (see link to below ”to announce delivered insulin without actually bolusing” for more details).

### Probleme mir Kanüle, Infusionsstelle, Schlauch und/oder Pumpe

If you are confident that you haven’t received any insulin for a period of time, despite **AAPS** recording that you have, and you know exactly when the issue started (_e.g._ you remove the cannula and see that the cannula was kinked during the insertion process) you can correct this in **AAPS**, while being aware that the insulin may in fact have been delivered but may be slow to act for some reason.

```{admonition} Caution - Risk of Hypoglycemia
:class: danger
Lösche Boluseinträge in **AAPS** nur mit ÄUSSERSTER Vorsicht. Für den Fall, dass Insulin _tatsächlich abgegeben_ wurde, achte in den kommenden 24h genau auf Deine Glukosewerte.
```

To remove boluses and SMBs which you know have not been delivered, open the Treatments tab and conservatively delete the logged bolus information from > carbs and bolus starting from the point the incident happened. This will correct the “insulin on board” (IOB) value which is key for **AAPS**’ calculations, if you now return to the homescreen you will see that the IOB has now reduced. Be aware that you cannot delete basal insulin which **AAPS** calculates to have been delivered, so that will still be taken into account by **AAPS**.

In less obvious cases of insulin delivery problems  _e.g._ leakages, occlusions or tunneling where either you are not sure when the issue started, or think some of the insulin was delivered, you need to be careful. Entweder erkennst Du das Problem durch "Riechen“ des Insulins, ein feuchtes Katheter-Pflaster, hohe Glukosewerte oder durch einen Alarm. Da Du nie wissen wirst, wie viel Insulin (das nach einer Weile zu wirken beginnen könnte) genau unter Deine Haut gelangt ist, wird es schwer sein, die richtige Menge an Insulin zu bestimmen, die vom aktuellen "Insulin on Board" (IOB)-Wert abgezogen werden muss. Eine mögliche Strategie ist, nachdem Du das Problem mit der Insulinabgabe gelöst hast, das Loopen für 5 Stunden (bzw. für die Wirkdauer Deines genutzten Insulins) zu unterbrechen und erst danach das Loopen wieder aufzunehmen. Damit wird sichergestellt, dass der IOB-Wert beim erneuten Loop-Start korrekt ist.

## Die Pumpe zum Duschen oder für Aktivitäten trennen

If you take your pump off for showering, bathing, swimming, contact sports or other activities you must let **AAPS** know that no insulin is being delivered, to keep the IOB correct. The pump can be disconnected using the Loop Status icon on the **AAPS** Home Screen.

Da Du während der Pumpen-Trennung kein Insulin erhältst, solltest Du alle zwei Stunden wieder verbinden, um das fehlende Basalinsulin nachzuholen. You can do this by connecting, bolusing the missing basal amounts (_e.g._ of the last two hours) before disconnecting again. Dies sollte helfen, einen schweren Insulinmangel zu vermeiden, der zu diabetischer Ketoazidose (DKA) führen könnte. If it is inconvenient to reconnect the pump during activity (cannula site is covered by wearing a wetsuit _etc._), consider a pen injection instead. This manual injection can be logged in **AAPS**, and doesn’t have to be logged at the time of injection (just make a note of the time of injection) since you can announce the insulin and backdate the time the insulin was actually given when you reconnect the pump.

## Abgegebenes Insulin ankündigen, ohne es tatsächlich zu bolen

To announce insulin delivered from the pump either while **AAPS** was disconnected, or from pen injections to **AAPS**: select the “insulin” tab, enter the amount in units and select “do not bolus, record only”. Wenn Du diese Option wählst, erscheint ein „Zeitversatz“-Tab. You can ignore this if the injection was given recently, but if the bolus was given some time ago, you can add a minus sign in front of the time (_e.g._ - 30 min) to record the actual time of the bolus. **AAPS** will then take into account the duration of insulin action and calculate the remaining insulin still in the system accordingly.

If you are using **AAPS** as a careiver, you can remotely disconnect (and reconnect) the pump very easily by [SMS command](../RemoteFeatures/SMSCommands.md) using commands such as “pump disconnect 120” and “pump connect 120”. Der Zeitraum für eine Remote-Trennung der Pumpe beträgt 1 - 120 Min. (in diesem Beispiel sind es 120 Minuten). This is very useful if the **AAPS** handset is inconvenient for you to access, buried in a pump belt on a kid who is running off towards the swimming complex, or being closely guarded (or in use) by a teenager.

## Die Pumpe nach einer Aktivität wieder verbinden

After a long disconnection (1 - 2 hours) it is fairly common for **AAPS** to calculate that you now have negative IOB. Wenn Du die Pumpe dann wieder verbindest, kannst Du je nach Vorliebe/aktuellem Glukosespiegel/geplanter Mahlzeit oder kommender Aktivität entweder:

a) Just reconnect the pump in **AAPS** (grey-to-green, for closed loop) and leave it up to **AAPS** to start to deliver insulin again

_or_

b) Wenn Du aggressiver vorgehen möchtest (zum Beispiel, weil Du auf eine Hyperglykämie zusteuerst), kannst Du zum Taschenrechner navigieren und für Null Kohlenhydrate bolen, um das berechnete fehlende Insulin sofort als Bolus abzugeben.


Welche Strategie Du wählen solltest, ist höchst individuell und am besten durch Ausprobieren herauszufinden.    
