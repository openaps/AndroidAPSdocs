# Každodenní život s pumpou
## Výměny infuzních sad: zásobníky inzulínu a kanyly

Uvedený postup platí pouze pro pumpy připojené kanylou a neplatí pro náplasťové pumpy jako Omnipod, Medtrum Nano, Accu-Check Solo apod. Tento postup je někdy označován jako "výměna setu", kde "celková" znamená výměnu inzulinového zásobníku a kanyly a "částečná" znamená výměnu pouze kanyly.

Physical cartridge/reservoir changes cannot be done via **AAPS** and have to be carried out via the pump directly. These need to be logged in **AAPS** manually, once completed.

### Návod pro výměnu zásobníku pumpy a kanyly

1)  In **AAPS**, disconnect the pump: Long press “Open Loop”/”Closed Loop” icon on the **AAPS** Home Screen and select ‘Disconnect pump - 1 hour”. Ikona pumpy změní barvu na šedou, což naznačuje, že je čerpadlo odpojeno.

2)  Physically change the insulin reservoir: physically disconnect your pump from the body, and change the reservoir/cartridge and cannula as per manufacturer's instructions.

3)  Prime/fill the tubing and cannula: this can be done directly on the pump. Ujistěte se, že odstraníte všechny bublinky v hadičkách.

4)  Attach the new cannula to the body. Jakmile je kanyla nastřelena a jehla odstraněna, připojená kanyla má obsahuje malou vzduchovou mezeru, kterou je třeba také naplnit. To announce this in **AAPS** and prime the site: select the PRIME/FILL button in the **AAPS** actions tab and tick “Pump site change” and/or “Insulin Cartridge Change” as appropriate to record the change. Nyní stiskněte výchozí dávku pro doplnění inzulinové kanyly (obvykle kolem 0,3 U, ale zkontrolujte, zda je tato hodnota správná pro vaši kanylu) a vyberte „OK“. Přečtěte si shrnutí a potvrďte provedení klepnutím na „OK“.

5)  Reconnect the pump in **AAPS**: Press the grey disconnected pump symbol and select ‘Reconnect pump’ to continue looping.

### Užitečné informace týkající se výměny inzulínu/kanyly

●   Logging a pump site change resets Autosens to 100%. It also resets the corresponding cannula/insulin status lights and ages on the **AAPS** Home screen.

●   You can set/adjust the default prime amount in Preferences > Overview > Fill/Prime standard insulin amounts. Podívejte se do příbalového letáku vaší kanyly a ověřte, kolika jednotkamy inzulinu (v závislosti na délce jehly a hadičky) je třeba pro doplnění vaší kanyly.

●   Insulin delivered using the prime function is not taken into account by **AAPS** when calculating insulin on board (IOB), and is marked in the **AAPS** treatments menu as “Prime”.

●   Any insulin bolused from the pump during a pump disconnection will also not be taken into account by **AAPS**. If you happen to bolus directly from the pump while **AAPS** is disconnected, once you reconnect the pump you can announce this insulin (without bolusing it) under the “insulin” tab (see link to below ”to announce delivered insulin without actually bolusing” for more details).

### Problémy s kanylou, místem infuze a/nebo pumpou

If you are confident that you haven’t received any insulin for a period of time, despite **AAPS** recording that you have, and you know exactly when the issue started (_e.g._ you remove the cannula and see that the cannula was kinked during the insertion process) you can correct this in **AAPS**, while being aware that the insulin may in fact have been delivered but may be slow to act for some reason.

```{admonition} Caution - Risk of Hypoglycemia
:class: nebezpečí
Záznam o podání inzulínu smažte z **AAPS** pouze s **EXTRÉMNÍ** opatrností a pro případ, že by inzulín byl skutečně podán, pečlivě sledujte hladinu cukru v krvi v příštích 24 hodinách.
```

To remove boluses and SMBs which you know have not been delivered, open the Treatments tab and conservatively delete the logged bolus information from > carbs and bolus starting from the point the incident happened. This will correct the “insulin on board” (IOB) value which is key for **AAPS**’ calculations, if you now return to the homescreen you will see that the IOB has now reduced. Be aware that you cannot delete basal insulin which **AAPS** calculates to have been delivered, so that will still be taken into account by **AAPS**.

In less obvious cases of insulin delivery problems  _e.g._ leakages, occlusions or tunneling where either you are not sure when the issue started, or think some of the insulin was delivered, you need to be careful. Tyto problémy můžete rozpoznat buď tím, že ucítíte unikající inzulín, uvidíte vlhkou lepivou kapalinu, trpíte vysokou glykémií nebo budete upozorněni alarmem. Jelikož nikdy nebudete vědět kolik inzulínu jste dostali do kůže (což může působit až po chvíli), bude obtížné určit správný objem inzulínu, který je třeba od aktuální hodnoty "Aktivního inzulínu" (IOB) odečíst. Jednou strategií je pozastavení smyčky na dobu 5 hodin (nebo vaši hodnotu doby působnosti inzulínu) poté, co jste vyřešili problém s dodávkou inzulínu a následně můžete smyčku znovu spustit. Tímto zajistíte, že IOB bude správné, až smyčku znovu spustíte.

## Odpojení pumpy při sprchování nebo aktivitě

If you take your pump off for showering, bathing, swimming, contact sports or other activities you must let **AAPS** know that no insulin is being delivered, to keep the IOB correct. The pump can be disconnected using the Loop Status icon on the **AAPS** Home Screen.

Protože během odpojení pumpy nedostáváte žádný inzulín, měli byste se znovu připojit každé dvě hodiny, abyste dohnali chybějící bazál. You can do this by connecting, bolusing the missing basal amounts (_e.g._ of the last two hours) before disconnecting again. Tak můžete předejít závažnému nedostatku inzulínu, který by mohl vést k diabetické ketoacidóze (DKA). If it is inconvenient to reconnect the pump during activity (cannula site is covered by wearing a wetsuit _etc._), consider a pen injection instead. This manual injection can be logged in **AAPS**, and doesn’t have to be logged at the time of injection (just make a note of the time of injection) since you can announce the insulin and backdate the time the insulin was actually given when you reconnect the pump.

## Zadání dodaného inzulínu bez skutečného podání dávky

To announce insulin delivered from the pump either while **AAPS** was disconnected, or from pen injections to **AAPS**: select the “insulin” tab, enter the amount in units and select “do not bolus, record only”. Když vyberete tuto možnost, objeví se záložka "Časový posun". You can ignore this if the injection was given recently, but if the bolus was given some time ago, you can add a minus sign in front of the time (_e.g._ - 30 min) to record the actual time of the bolus. **AAPS** will then take into account the duration of insulin action and calculate the remaining insulin still in the system accordingly.

If you are using **AAPS** as a careiver, you can remotely disconnect (and reconnect) the pump very easily by [SMS command](../RemoteFeatures/SMSCommands.md) using commands such as “pump disconnect 120” and “pump connect 120”. Doba trvání vzdáleného odpojení je od 1 do 120 minut (v tomto příkladu je 120 minut). This is very useful if the **AAPS** handset is inconvenient for you to access, buried in a pump belt on a kid who is running off towards the swimming complex, or being closely guarded (or in use) by a teenager.

## Znovupřipojení pumpy po ukončení aktivity

After a long disconnection (1 - 2 hours) it is fairly common for **AAPS** to calculate that you now have negative IOB. Při opětovném připojení pumpy, v závislosti na preferenci/aktuální hladině glukózy/plánovaném jídle nebo následné činnosti, můžete buď:

a) Just reconnect the pump in **AAPS** (grey-to-green, for closed loop) and leave it up to **AAPS** to start to deliver insulin again

_or_

b) Pokud chcete být agresivnější (například míříte k hyperglykémii), můžete přejít na kalkulačku a podat bolus na nula gramů sacharidů, abyste okamžitě podali vypočtený chybějící inzulín jako bolus.


Kterou strategii upřednostníte je na vašem osobním rozhodnutí a nejlépe se určuje pokusem a omylem.    
