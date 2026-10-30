# Pumps and cannulas

## 更换输注套装：胰岛素储药器和输注管路

以下描述的步骤仅适用于管路泵，不适用于类似Omnipod、Medtrum Nano、Accu-Chek Solo等贴片泵。 This procedure is sometimes referred to as a "set change", with a "full" set change including the insulin reservoir and cannula, and a "partial" set change referring to a change of cannula only.

Patch pumps fill and prime themselves in their own activation wizard, and their cannula is already in the body. **AAPS** does not offer a prime for them: **Prime/Fill** is not shown in the **Manage** sheet or in QuickLaunch. See the page of your pump in [Compatible pumps](../Getting-Started/CompatiblePumps.md).

通过**AAPS**无法进行物理储药器的更换，必须通过泵本身直接进行。一旦完成，这些更换需要在**AAPS**中手动记录。

(pumps-cannulas-changing-reservoir-and-cannula)=
### 更换胰岛素储药器和输注管路的指引

1. In **AAPS**, disconnect the pump: press the [loop icon](#AapsScreens-loop-status) on the main screen and select **Disconnect pump** for 1 hour. The icon changes to a grey plug icon, indicating that the pump is disconnected.

2. 进行更换胰岛素储药器的实际操作：手动把胰岛素泵取下，根据生产商的操作指引更换胰岛素储药器和输注管路

3. 排气/给管路充盈胰岛素：这步请在泵上操作完成请务必消除管路中的任何气泡。

4. 把新的留置针打入身体并和新的管路进行连接一旦插入管路并拔出针头后，连接的套管现在会有一个小的气泡，这个气泡也需要进行排气处理。 To announce this in **AAPS** and prime the site: open **Prime/Fill** (in the expanded status panel on the main screen, in the **Manage** sheet, or as a [QuickLaunch](QuickLaunch.md) button) and tick **Pump site change** and/or **Insulin cartridge change** as appropriate to record the change. Now press the default insulin cannula prime amount (it is usually around 0.3 U, but check this value is correct for your cannula) and select **OK**. Read the summary message, and confirm to execute the priming by tapping **OK**.

   ![Prime/Fill in the Manage sheet with a tube pump](../images/v4/Screens/manage_sheet_tube_pump.png)


5. Reconnect the pump in **AAPS**: press the grey plug icon and select **Reconnect pump** to continue looping.

### 有关胰岛素/管路更换的有用信息

* Logging a pump site change resets Autosens to 100%. It also resets the corresponding cannula/insulin status lights and ages on the **AAPS** main screen.

* You can set/adjust the default prime amounts in the **Prime/Fill** settings — type "prime" in the main screen search bar to open them (see [Preferences](../SettingUpAaps/Preferences.md)). 查看您的管路盒中的使用手册，了解应该为您的管路和留置针充盈多少单位（取决于针长和管长）。

* Insulin delivered using the prime function is not taken into account by **AAPS** when calculating insulin on board (IOB), and is marked in the [Treatments history](#aaps-screens-treatments) as "Prime".

* Any insulin bolused from the pump during a pump disconnection will also not be taken into account by **AAPS**. If you happen to bolus directly from the pump while **AAPS** is disconnected, once you reconnect the pump you can announce this insulin (without bolusing it) in the **Insulin** dialog (see [To announce delivered insulin without actually bolusing](#pumps-cannulas-announce-insulin) below).

### 留置针、底板、管路和/或泵的问题

If you are confident that you haven't received any insulin for a period of time, despite **AAPS** recording that you have, and you know exactly when the issue started (_e.g._ you remove the cannula and see that the cannula was kinked during the insertion process) you can correct this in **AAPS**, while being aware that the insulin may in fact have been delivered but may be slow to act for some reason.

```{admonition} Caution - Risk of Hypoglycemia
:class: danger
只有在极端谨慎的情况下，才应从AAPS中删除胰岛素输送记录，以防胰岛素实际上已经输送，并在接下来的24小时内密切监测血糖。
```

To remove boluses and SMBs which you know have not been delivered, open the **menu** (☰), select [Treatments history](#aaps-screens-treatments) and, on the **Carbs and bolus** tab, conservatively delete the logged boluses starting from the point the incident happened. This will correct the "insulin on board" (IOB) value which is key for **AAPS**' calculations; if you now return to the main screen you will see that the IOB has reduced. 请注意，您无法删除AAPS计算已输送的基础胰岛素，因此AAPS仍会将其纳入考虑。

In less obvious cases of insulin delivery problems _e.g._ leakages, occlusions or tunneling where either you are not sure when the issue started, or think some of the insulin was delivered, you need to be careful. You may detect these issues either by "smelling" the insulin, seeing a wet adhesive, encountering high glucose values or by getting an alarm. As you will never know how much insulin you got into your skin (which might be starting to work after a while) it will be hard to determine the correct amount of insulin which needs to be deducted from the current "insulin on board" (IOB) value. 一种策略是在解决胰岛素输送问题后，暂停循环5小时（或您的特定胰岛素作用持续时间），然后再恢复闭环。这将确保在您重新启动闭环时，IOB是正确的。

(pumps-cannulas-disconnecting)=
## 断开泵进行淋浴或活动

如果您为了淋浴、洗澡、游泳、接触性运动或其他活动而取下泵，您必须让**AAPS**知道没有输送胰岛素，以保持IOB的正确性。 The pump can be disconnected using the [loop icon](#AapsScreens-loop-status) on the main screen: press it and select **Disconnect pump** with the duration you need. If the activity takes longer than planned, open the same dialog again and pick a new duration under **Disconnect pump**: the disconnection is extended and the new duration starts from now. You do not need to reconnect first.

由于泵断开时您没有接收到任何胰岛素，因此您应该每两小时重新连接一次，以补充缺失的基础胰岛素。您可以通过连接、输送缺失的基础胰岛素量（例如，过去两小时的量），然后再断开连接来实现这一点。这有助于避免胰岛素严重缺乏，从而可能导致糖尿病酮症酸中毒（DKA）。如果活动期间重新连接泵不方便（例如，输注针部位被潜水衣覆盖等），可以考虑使用笔式注射器进行注射。 This manual injection can be logged in **AAPS**, and doesn't have to be logged at the time of injection (just make a note of the time of injection) since you can announce the insulin and backdate the time the insulin was actually given when you reconnect the pump.

(pumps-cannulas-announce-insulin)=
## 在不实际输送胰岛素的情况下宣布已输送胰岛素

To announce insulin delivered from the pump either while **AAPS** was disconnected, or from pen injections: open the [Insulin dialog](#aaps-screens-buttons-insulin) (**Treatments** in the bottom navigation, or a QuickLaunch button), enter the amount in units and enable **Bolus will be recorded only**. A **Time** row (set to **Now**) then lets you record the actual time of the injection: you can ignore it if the injection was given recently. If the bolus was given some time ago, use **-** to move the time back (_e.g._ -30 min), or open the row with the chevron to pick the exact date and time. 然后，**AAPS**将考虑胰岛素作用持续时间，并相应地计算系统中剩余的胰岛素量。

If you are using **AAPS** as a caregiver, you can remotely disconnect (and reconnect) the pump very easily by [SMS command](../RemoteFeatures/SMSCommands.md) using commands such as "pump disconnect 120" and "pump connect 120". 远程断开的持续时间范围为1-120分钟（在此示例中为120分钟）。如果**AAPS**手机对您来说不方便访问（例如，被埋在正在跑向游泳综合体的孩子的泵带中，或被青少年紧密守护或正在使用），这将非常有用。

## 活动后重新连接泵

长时间断开连接（1-2小时）后，**AAPS**计算出您现在IOB为负值是很常见的。当您重新连接泵时，根据偏好/当前血糖水平/计划的食物或后续活动，您可以：

a) 只需在**AAPS**中重新连接泵（灰色变为绿色，表示闭环），并让**AAPS**重新开始输送胰岛素

_或_

b) If you want to be more aggressive (for example, you are heading for hyperglycemia), you can open the [Bolus wizard](#aaps-screens-bolus-wizard) and bolus for zero carbs, to immediately deliver the calculated missing insulin as a bolus.

您偏好的策略高度个性化，最好通过试错来确定。


(Aapsscreens-site-rotation)=
## Site Rotation

**Manage → Site Rotation** opens the Site Rotation Dialog in View mode:

- With the two buttons at the top (cannula icon and sensor icon), you can show Cannula sites only, Sensor sites only, or both
- All Cannula change and Sensor change event since the past 45 days are available.
- Click on a Site area, or in one entry in the list below to filter the list with only entries in selected area. The selected area will be highlighted in light green color.
- Tap the **pencil** icon next to an entry to open the Edit view and update its Site location, Arrow or Note

![View Mode](../images/SiteRotation/ViewMode.png)

- The **cog** icon (upper right) opens the settings: **User profile for site rotation** opens a dialog where you choose **Man**, **Woman** or **Child**, and the **Manage pump site rotation** and **Manage CGM site rotation** switches select which sites you manage.

![设置](../images/SiteRotation/Settings.png)

![User profile for site rotation dialog](../images/SiteRotation/Type.png)

*Note: this setting will be used to automatically open or not Site Rotation Dialog (Edit mode) when a new entry is done from "Prime/Fill button" or "CGM Sensor Insert button"*

- For Site change done directly from Pump, you have to open the View Mode and Edit the new entry to select Location and Arrow

Edit Mode allows you to select Location, Arrow, and Note associated to selected Entry:

- The entry being edited is shown below the body images, with its type icon (cannula or sensor)
- Front and back views are shown side by side: tap the area where you placed it
- Once a Site selected (highlighted in green), you will see in the list below the list of all entries done in the pas 45 days in this site

![Edit Mode](../images/SiteRotation/EditMode.png)

- You can add an optional arrow by tapping the arrow icon at the right of the entry: the **Select Arrow** dialog lets you specify a sub-location or the pod orientation

![Position](../images/SiteRotation/EditModeSub.png)

- You can also add a **Note** about the selected site
- Tap the **save** icon (upper right) to record the site

Filtering can be done graphically on the image, or clicking a therapy event in the list To remove filtering, just click on the image outside any sites

![Filtering](../images/SiteRotation/Filtering.png)
