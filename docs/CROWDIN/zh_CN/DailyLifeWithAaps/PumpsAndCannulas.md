# 日常生活-泵
## 更换输注套装：胰岛素储药器和输注管路

以下描述的步骤仅适用于管路泵，不适用于类似Omnipod、Medtrum Nano、Accu-Chek Solo等贴片泵。 该步骤有时被称为"更换输注套装"，完整的更换输注套装包括更换胰岛素储药器和输注管路，部分更换输注套装指的是仅更换输注管路。

通过**AAPS**无法进行物理储药器的更换，必须通过泵本身直接进行。 一旦完成，这些更换需要在**AAPS**中手动记录。

### 更换胰岛素储药器和输注管路的指引

1)在**AAPS**中断开泵连接：长按**AAPS**主屏幕上的“开环/闭环”图标，并选择“断开泵连接 - 1小时”。 泵图标将变为灰色图标，表示泵已断开连接。

2)  动手实际更换胰岛素储药器：按照制造商的说明，从身体上断开泵的连接，并更换储药器/药筒和输注管路。

3)  灌注/填充管路和留置针：这可以直接在泵上完成。 请务必消除管路中的任何气泡。

4)  将新管路连接到身体上。 一旦插入管路并拔出针头后，连接的套管现在会有一个小的气泡，这个气泡也需要进行排气处理。 为了在**AAPS**中宣布这一点并灌注输注底板，请在**AAPS**操作选项卡中选择“灌注/填充”按钮，并根据需要勾选“输注部位更换”和/或“胰岛素储药器更换”以记录更换。 现在按下默认的胰岛素留置针的充盈剂量（通常约为0.3 U，但请检查该数值是否匹配您的留置针），如果不匹配，请进行修改，然后选择“确定”。 阅读摘要消息，并通过点击“OK”来确认执行留置针充盈。

5)  在**AAPS**中重新连接泵：按下灰色的断开连接的泵符号，并选择“重新连接泵”以继续闭环操作。

### 有关胰岛素/管路更换的有用信息

• 记录输注部位更换会将Autosens重置为100%。 它还会重置**AAPS**主屏幕上对应的输注针/胰岛素状态指示灯和使用时长。

• 您可以在“偏好设置”>“概览”>“填充/灌注标准胰岛素量”中设置/调整默认灌注量。 查看您的管路盒中的使用手册，了解应该为您的管路和留置针充盈多少单位（取决于针长和管长）。

• 使用灌注功能输送的胰岛素在计算体内胰岛素量（IOB）时不会被**AAPS**考虑在内，并在**AAPS**治疗菜单中标记为“灌注”。

• 在泵断开连接期间从泵中进行的任何追加给药也不会被**AAPS**考虑在内。 如果您在**AAPS**断开连接时直接从泵中进行了追加给药，一旦重新连接泵，您可以在“胰岛素”选项卡下（无需再次追加给药）宣布这种胰岛素（详见下方“宣布已输送的胰岛素而不进行实际追加给药”的链接以获取更多详细信息）。

### 留置针、底板、管路和/或泵的问题

如果您确信有一段时间没有接收到胰岛素，尽管**AAPS**记录您已经接收，并且您确切知道问题开始的时间（例如，您取下输注针并发现输注针在插入过程中扭结），您可以在**AAPS**中进行更正，同时意识到胰岛素可能实际上已经被输送，但出于某种原因作用缓慢。

```{admonition} Caution - Risk of Hypoglycemia
:class: danger
只有在极端谨慎的情况下，才应从AAPS中删除胰岛素输送记录，以防胰岛素实际上已经输送，并在接下来的24小时内密切监测血糖。
```

要删除您知道未输送的大剂量胰岛素和SMB，请打开“治疗”选项卡，并从问题发生的时间点开始，保守地删除记录的“碳水化合物和胰岛素大剂量”信息。 这将更正体内胰岛素量（IOB）值，该值是**AAPS**计算的关键。 如果您现在返回到主屏幕，您会看到IOB现在已减少。 请注意，您无法删除AAPS计算已输送的基础胰岛素，因此AAPS仍会将其纳入考虑。

对于不太明显的胰岛素输送问题，_如_漏药、堵管或tunneling（隧道效应？），如果您不确定问题何时开始，或者认为部分胰岛素已经输送，您需要格外小心。 您可能通过“闻”胰岛素的气味、看到湿润的粘合剂、遇到高血糖值或收到警报来检测这些问题。 由于您永远无法知道自己有多少胰岛素进入了皮肤（这些胰岛素可能会在一段时间后开始起作用），因此很难确定需要从当前的“活性胰岛素量”（IOB）值中扣除的正确胰岛素量。 一种策略是在解决胰岛素输送问题后，暂停循环5小时（或您的特定胰岛素作用持续时间），然后再恢复闭环。 这将确保在您重新启动闭环时，IOB是正确的。

## 断开泵进行淋浴或活动

If you take your pump off for showering, bathing, swimming, contact sports or other activities you must let **AAPS** know that no insulin is being delivered, to keep the IOB correct. The pump can be disconnected using the Loop Status icon on the **AAPS** Home Screen.

由于泵断开时您没有接收到任何胰岛素，因此您应该每两小时重新连接一次，以补充缺失的基础胰岛素。 You can do this by connecting, bolusing the missing basal amounts (_e.g._ of the last two hours) before disconnecting again. 这有助于避免胰岛素严重缺乏，从而可能导致糖尿病酮症酸中毒（DKA）。 If it is inconvenient to reconnect the pump during activity (cannula site is covered by wearing a wetsuit _etc._), consider a pen injection instead. This manual injection can be logged in **AAPS**, and doesn’t have to be logged at the time of injection (just make a note of the time of injection) since you can announce the insulin and backdate the time the insulin was actually given when you reconnect the pump.

## 在不实际输送胰岛素的情况下宣布已输送胰岛素

To announce insulin delivered from the pump either while **AAPS** was disconnected, or from pen injections to **AAPS**: select the “insulin” tab, enter the amount in units and select “do not bolus, record only”. 选择此选项后，将出现“时间偏移”选项卡。 You can ignore this if the injection was given recently, but if the bolus was given some time ago, you can add a minus sign in front of the time (_e.g._ - 30 min) to record the actual time of the bolus. **AAPS** will then take into account the duration of insulin action and calculate the remaining insulin still in the system accordingly.

If you are using **AAPS** as a careiver, you can remotely disconnect (and reconnect) the pump very easily by [SMS command](../RemoteFeatures/SMSCommands.md) using commands such as “pump disconnect 120” and “pump connect 120”. 远程断开的持续时间范围为1-120分钟（在此示例中为120分钟）。 This is very useful if the **AAPS** handset is inconvenient for you to access, buried in a pump belt on a kid who is running off towards the swimming complex, or being closely guarded (or in use) by a teenager.

## 活动后重新连接泵

After a long disconnection (1 - 2 hours) it is fairly common for **AAPS** to calculate that you now have negative IOB. 当您重新连接泵时，根据偏好/当前血糖水平/计划的食物或后续活动，您可以：

a) Just reconnect the pump in **AAPS** (grey-to-green, for closed loop) and leave it up to **AAPS** to start to deliver insulin again

_or_

b) 如果您想采取更积极的措施（例如，您正朝着高血糖发展），您可以导航到计算器，并为零碳水化合物输送胰岛素大剂量，以立即以大剂量形式输送计算出的缺失胰岛素。


您偏好的策略高度个性化，最好通过试错来确定。    
