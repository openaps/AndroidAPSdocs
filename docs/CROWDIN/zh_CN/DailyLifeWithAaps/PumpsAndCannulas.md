# 日常生活-泵
## 更换输注套装：胰岛素储药器和输注管路

以下描述的步骤仅适用于管路泵，不适用于类似Omnipod、Medtrum Nano、Accu-Chek Solo等贴片泵。 该步骤有时被称为"更换输注套装"，完整的更换输注套装包括更换胰岛素储药器和输注管路，部分更换输注套装指的是仅更换输注管路。

通过**AAPS**无法进行物理储药器的更换，必须通过泵本身直接进行。 These need to be logged in **AAPS** manually, once completed.

### 更换胰岛素储药器和输注管路的指引

1)  In **AAPS**, disconnect the pump: Long press “Open Loop”/”Closed Loop” icon on the **AAPS** Home Screen and select ‘Disconnect pump - 1 hour”. 泵图标将变为灰色图标，表示泵已断开连接。

2)  Physically change the insulin reservoir: physically disconnect your pump from the body, and change the reservoir/cartridge and cannula as per manufacturer's instructions.

3)  Prime/fill the tubing and cannula: this can be done directly on the pump. 请务必消除管路中的任何气泡。

4)  Attach the new cannula to the body. 一旦插入管路并拔出针头后，连接的套管现在会有一个小的气泡，这个气泡也需要进行排气处理。 To announce this in **AAPS** and prime the site: select the PRIME/FILL button in the **AAPS** actions tab and tick “Pump site change” and/or “Insulin Cartridge Change” as appropriate to record the change. 现在按下默认的胰岛素留置针的充盈剂量（通常约为0.3 U，但请检查该数值是否匹配您的留置针），如果不匹配，请进行修改，然后选择“确定”。 阅读摘要消息，并通过点击“OK”来确认执行留置针充盈。

5)  Reconnect the pump in **AAPS**: Press the grey disconnected pump symbol and select ‘Reconnect pump’ to continue looping.

### 有关胰岛素/管路更换的有用信息

●   Logging a pump site change resets Autosens to 100%. It also resets the corresponding cannula/insulin status lights and ages on the **AAPS** Home screen.

●   You can set/adjust the default prime amount in Preferences > Overview > Fill/Prime standard insulin amounts. 查看您的管路盒中的使用手册，了解应该为您的管路和留置针充盈多少单位（取决于针长和管长）。

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
