# Daily Life - Pumps
## Changing infusion sets: insulin reservoirs and cannulas

The procedure described below is for tubed pumps only and does not apply to patch pumps like Omnipod, Medtrum Nano, Accu-Chek Solo etc. This procedure is sometimes referred to as a “set change”, with a “full” set change including the insulin reservoir and cannula, and a “partial” set change referring to a change of cannula only.

Physical cartridge/reservoir changes cannot be done via **AAPS** and have to be carried out via the pump directly. These need to be logged in **AAPS** manually, once completed.

### Guide for changing both the pump reservoir and cannula

1)  In **AAPS**, disconnect the pump: Long press “Open Loop”/”Closed Loop” icon on the **AAPS** Home Screen and select ‘Disconnect pump - 1 hour”. The pump icon will change to a grey icon, indicating that the pump is disconnected.

2)  Physically change the insulin reservoir: physically disconnect your pump from the body, and change the reservoir/cartridge and cannula as per manufacturer's instructions.

3)  Prime/fill the tubing and cannula: this can be done directly on the pump. Be sure to eliminate any bubbles in the tubing.

4)  Attach the new cannula to the body. Once the cannula is inserted and the needle is removed, the attached cannula now has a small air gap which also needs to be primed. To announce this in **AAPS** and prime the site: select the PRIME/FILL button in the **AAPS** actions tab and tick “Pump site change” and/or “Insulin Cartridge Change” as appropriate to record the change. Now press the default insulin cannula prime amount (it is usually around 0.3 U, but check this value is correct for your cannula) and select “OK”. Read the summary message, and confirm to execute the priming by tapping “OK”.

5)  Reconnect the pump in **AAPS**: Press the grey disconnected pump symbol and select ‘Reconnect pump’ to continue looping.

### Useful information concerning insulin/cannula changes

●   Logging a pump site change resets Autosens to 100%. It also resets the corresponding cannula/insulin status lights and ages on the **AAPS** Home screen.

●   You can set/adjust the default prime amount in Preferences > Overview > Fill/Prime standard insulin amounts. See your instruction booklet in your cannula box for how many units (depending on needle length and tubing length) should be primed for your cannula.

●   Insulin delivered using the prime function is not taken into account by **AAPS** when calculating insulin on board (IOB), and is marked in the **AAPS** treatments menu as “Prime”.

●   Any insulin bolused from the pump during a pump disconnection will also not be taken into account by **AAPS**. If you happen to bolus directly from the pump while **AAPS** is disconnected, once you reconnect the pump you can announce this insulin (without bolusing it) under the “insulin” tab (see link to below ”to announce delivered insulin without actually bolusing” for more details).

### Cannula, infusion site, tubing and/or pump issues

If you are confident that you haven’t received any insulin for a period of time, despite **AAPS** recording that you have, and you know exactly when the issue started (_e.g._ you remove the cannula and see that the cannula was kinked during the insertion process) you can correct this in **AAPS**, while being aware that the insulin may in fact have been delivered but may be slow to act for some reason.

```{admonition} Caution - Risk of Hypoglycemia
:class: danger
Only delete insulin delivery from **AAPS** with EXTREME caution, in case insulin _has_ actually been delivered, and monitor BG closely for the next 24 h.
```

To remove boluses and SMBs which you know have not been delivered, open the Treatments tab and conservatively delete the logged bolus information from > carbs and bolus starting from the point the incident happened. This will correct the “insulin on board” (IOB) value which is key for **AAPS**’ calculations, if you now return to the homescreen you will see that the IOB has now reduced. Be aware that you cannot delete basal insulin which **AAPS** calculates to have been delivered, so that will still be taken into account by **AAPS**.

In less obvious cases of insulin delivery problems  _e.g._ leakages, occlusions or tunneling where either you are not sure when the issue started, or think some of the insulin was delivered, you need to be careful. You may detect these issues either by “smelling” the insulin, seeing a wet adhesive, encountering high glucose values or by getting an alarm. As you will never know how much insulin you got into your skin (which might be starting to work after a while) it will be hard to determine the correct amount of insulin which needs be deducted from the current “insulin on board” (IOB) value. One strategy is to pause looping for 5 hours (or your specific duration of insulin action) after you resolved the insulin delivery problem, and resume looping afterwards. This will ensure that IOB is correct once you restart looping.

## Disconnecting the pump for showering or activity

If you take your pump off for showering, bathing, swimming, contact sports or other activities you must let **AAPS** know that no insulin is being delivered, to keep the IOB correct. The pump can be disconnected using the Loop Status icon on the **AAPS** Home Screen.

As you are not getting any insulin while the pump is disconnected, you should reconnect every two hours to catch up for the missing basal. You can do this by connecting, bolusing the missing basal amounts (_e.g._ of the last two hours) before disconnecting again. This should help to avoid a severe lack of insulin which could result in diabetic ketoacidosis (DKA). If it is inconvenient to reconnect the pump during activity (cannula site is covered by wearing a wetsuit _etc._), consider a pen injection instead. This manual injection can be logged in **AAPS**, and doesn’t have to be logged at the time of injection (just make a note of the time of injection) since you can announce the insulin and backdate the time the insulin was actually given when you reconnect the pump.

## To announce delivered insulin without actually bolusing

To announce insulin delivered from the pump either while **AAPS** was disconnected, or from pen injections to **AAPS**: select the “insulin” tab, enter the amount in units and select “do not bolus, record only”. When you select this option, a “time offset” tab will appear. You can ignore this if the injection was given recently, but if the bolus was given some time ago, you can add a minus sign in front of the time (_e.g._ - 30 min) to record the actual time of the bolus. **AAPS** will then take into account the duration of insulin action and calculate the remaining insulin still in the system accordingly.

If you are using **AAPS** as a careiver, you can remotely disconnect (and reconnect) the pump very easily by [SMS command](../RemoteFeatures/SMSCommands.md) using commands such as “pump disconnect 120” and “pump connect 120”. The range of duration for remote disconnect is from 1 - 120 min, (in this example it is 120 minutes). This is very useful if the **AAPS** handset is inconvenient for you to access, buried in a pump belt on a kid who is running off towards the swimming complex, or being closely guarded (or in use) by a teenager.

## Reconnecting the pump after activity

After a long disconnection (1 - 2 hours) it is fairly common for **AAPS** to calculate that you now have negative IOB. When you reconnect the pump, depending on preference/current glucose level/planned food or subsequent activity, you can either:

a) Just reconnect the pump in **AAPS** (grey-to-green, for closed loop) and leave it up to **AAPS** to start to deliver insulin again

_or_

b) If you want to be more aggressive (for example, you are heading for hyperglycemia), you can navigate to the calculator and bolus for zero carbs, to immediately deliver the calculated missing insulin as a bolus.


Which strategy you prefer is highly personal, and is best determined by trial and error.    
