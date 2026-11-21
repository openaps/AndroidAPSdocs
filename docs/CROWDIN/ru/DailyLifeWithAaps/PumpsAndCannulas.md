# Pumps and cannulas

## Замена инфузионных наборов: резервуары для инсулина и катетеры

Описанная ниже процедура подходит только для помп с трубкой и не относится к патч-помпам, таким как Omnipod, Medtrum Nano, Accu-Chek Solo и т. д. This procedure is sometimes referred to as a "set change", with a "full" set change including the insulin reservoir and cannula, and a "partial" set change referring to a change of cannula only.

Patch pumps fill and prime themselves in their own activation wizard, and their cannula is already in the body. **AAPS** does not offer a prime for them: **Prime/Fill** is not shown in the **Manage** sheet or in QuickLaunch. See the page of your pump in [Compatible pumps](../Getting-Started/CompatiblePumps.md).

Физическую замену картриджа/резервуара нельзя выполнить через **AAPS**, ее нужно делать прямо на помпе. После замены ее нужно вручную записать в **AAPS**.

(pumps-cannulas-changing-reservoir-and-cannula)=
### Как заменить резервуар помпы и катетер

1. In **AAPS**, disconnect the pump: press the [loop icon](#AapsScreens-loop-status) on the main screen and select **Disconnect pump** for 1 hour. The icon changes to a grey plug icon, indicating that the pump is disconnected.

2. Physically change the insulin reservoir: physically disconnect your pump from the body, and change the reservoir/cartridge and cannula as per manufacturer's instructions.

3. Prime/fill the tubing and cannula: this can be done directly on the pump. Обязательно удалите все пузырьки воздуха из трубки.

4. Attach the new cannula to the body. После того как катетер введен и игла удалена, в подсоединенном катетере остается небольшой воздушный зазор, который тоже нужно заполнить. To announce this in **AAPS** and prime the site: open **Prime/Fill** (in the expanded status panel on the main screen, in the **Manage** sheet, or as a [QuickLaunch](QuickLaunch.md) button) and tick **Record pump site change** and/or **Record insulin cartridge change** as appropriate to record the change. Now press the default insulin cannula prime amount (it is usually around 0.3 U, but check this value is correct for your cannula) and select **OK**. Read the summary message, and confirm to execute the priming by tapping **OK**.

   ![Prime/Fill in the Manage sheet with a tube pump](../images/v4/Screens/manage_sheet_tube_pump.png)


5. Reconnect the pump in **AAPS**: press the grey plug icon and select **Reconnect pump** to continue looping.

### Полезная информация о замене инсулина/катетера

* Logging a pump site change resets Autosens to 100%. It also resets the corresponding cannula/insulin status lights and ages on the **AAPS** main screen.

* You can set/adjust the default prime amounts in the **Prime/Fill** settings — type "prime" in the main screen search bar to open them (see [Preferences](../SettingUpAaps/Preferences.md)). Сколько единиц нужно для заполнения вашего катетера (зависит от длины иглы и длины трубки), смотрите в инструкции в коробке с катетерами.

* Insulin delivered using the prime function is not taken into account by **AAPS** when calculating insulin on board (IOB), and is marked in the [Treatments history](#aaps-screens-treatments) as "Prime".

* Any insulin bolused from the pump during a pump disconnection will also not be taken into account by **AAPS**. If you happen to bolus directly from the pump while **AAPS** is disconnected, once you reconnect the pump you can announce this insulin (without bolusing it) in the **Insulin** dialog (see [To announce delivered insulin without actually bolusing](#pumps-cannulas-announce-insulin) below).

### Проблемы с катетером, местом инфузии, трубкой и/или помпой

If you are confident that you haven't received any insulin for a period of time, despite **AAPS** recording that you have, and you know exactly when the issue started (_e.g._ you remove the cannula and see that the cannula was kinked during the insertion process) you can correct this in **AAPS**, while being aware that the insulin may in fact have been delivered but may be slow to act for some reason.

```{admonition} Caution - Risk of Hypoglycemia
:class: danger
Удаляйте подачу инсулина из **AAPS** ТОЛЬКО с ОСОБОЙ осторожностью, на случай если инсулин _все же_ был подан, и внимательно следите за ГК в следующие 24 ч.
```

To remove boluses and SMBs which you know have not been delivered, open the **menu** (☰), select [Treatments history](#aaps-screens-treatments) and, on the **Carbs and bolus** tab, conservatively delete the logged boluses starting from the point the incident happened. This will correct the "insulin on board" (IOB) value which is key for **AAPS**' calculations; if you now return to the main screen you will see that the IOB has reduced. Учтите, что нельзя удалить базальный инсулин, который по расчету **AAPS** был подан, поэтому **AAPS** все равно будет его учитывать.

In less obvious cases of insulin delivery problems _e.g._ leakages, occlusions or tunneling where either you are not sure when the issue started, or think some of the insulin was delivered, you need to be careful. You may detect these issues either by "smelling" the insulin, seeing a wet adhesive, encountering high glucose values or by getting an alarm. As you will never know how much insulin you got into your skin (which might be starting to work after a while) it will be hard to determine the correct amount of insulin which needs to be deducted from the current "insulin on board" (IOB) value. Один из вариантов — приостановить цикл на 5 часов (или на ваше время действия инсулина) после того, как вы устранили проблему с подачей инсулина, а затем возобновить цикл. Так IOB будет правильным, когда вы снова запустите цикл.

(pumps-cannulas-disconnecting)=
## Отключение помпы для душа или физической активности

Если вы снимаете помпу, чтобы принять душ, ванну, поплавать, заняться контактным спортом или другой активностью, вы должны сообщить **AAPS**, что инсулин не подается, чтобы IOB оставался правильным. The pump can be disconnected using the [loop icon](#AapsScreens-loop-status) on the main screen: press it and select **Disconnect pump** with the duration you need. If the activity takes longer than planned, open the same dialog again and pick a new duration under **Disconnect pump**: the disconnection is extended and the new duration starts from now. You do not need to reconnect first.

Пока помпа отключена, вы не получаете инсулин, поэтому подключайте ее каждые два часа, чтобы восполнить пропущенный базал. Для этого подключите помпу, введите болюсом пропущенное количество базала (_например,_ за последние два часа) и затем снова отключите ее. Это поможет избежать сильного недостатка инсулина, который может привести к диабетическому кетоацидозу (ДКА). Если подключать помпу во время активности неудобно (место катетера закрыто гидрокостюмом _и т. д._), подумайте об уколе шприц-ручкой. This manual injection can be logged in **AAPS**, and doesn't have to be logged at the time of injection (just make a note of the time of injection) since you can announce the insulin and backdate the time the insulin was actually given when you reconnect the pump.

(pumps-cannulas-announce-insulin)=
## Как записать введенный инсулин без подачи болюса

To announce insulin delivered from the pump either while **AAPS** was disconnected, or from pen injections: open the [Insulin dialog](#aaps-screens-buttons-insulin) (**Treatments** in the bottom navigation, or a QuickLaunch button), enter the amount in units and enable **Bolus will be recorded only (not delivered by pump)**. A **Time** row (set to **Now**) then lets you record the actual time of the injection: you can ignore it if the injection was given recently. If the bolus was given some time ago, use **-** to move the time back (_e.g._ -30 min), or open the row with the chevron to pick the exact date and time. Затем **AAPS** учтет время действия инсулина и рассчитает, сколько инсулина еще осталось в организме.

If you are using **AAPS** as a caregiver, you can remotely disconnect (and reconnect) the pump very easily by [SMS command](../RemoteFeatures/SMSCommands.md) using commands such as "pump disconnect 120" and "pump connect 120". Длительность удаленного отключения — от 1 до 120 мин (в этом примере 120 минут). Это очень удобно, если телефон с **AAPS** трудно достать: например, он спрятан в поясе для помпы у ребенка, который бежит к бассейну, или его бдительно охраняет (или использует) подросток.

## Подключение помпы после активности

После долгого отключения (1–2 часа) **AAPS** довольно часто рассчитывает, что у вас теперь отрицательный IOB. Когда вы снова подключаете помпу, в зависимости от ваших предпочтений, текущего уровня глюкозы, планируемой еды или следующей активности вы можете:

a) Просто подключить помпу снова в **AAPS** (серый значок становится зеленым при замкнутом цикле) и оставить **AAPS** снова начать подачу инсулина

_or_

b) If you want to be more aggressive (for example, you are heading for hyperglycemia), you can open the [Bolus wizard](#aaps-screens-bolus-wizard) and bolus for zero carbs, to immediately deliver the calculated missing insulin as a bolus.

Какой вариант лучше, очень индивидуально, и лучше всего это определить методом проб и ошибок.


(Aapsscreens-site-rotation)=
## Смена мест установки

**Manage → Site Rotation** opens the Site Rotation Dialog in View mode:

- With the two buttons at the top (cannula icon and sensor icon), you can show Cannula sites only, Sensor sites only, or both
- All Cannula change and Sensor change events from the past 45 days are available.
- Click on a Site area, or in one entry in the list below to filter the list with only entries in selected area. The selected area will be highlighted in light green color.
- Tap the **pencil** icon next to an entry to open the Edit view and update its Site location, Arrow or Note

![View Mode](../images/SiteRotation/ViewMode.png)

- The **cog** icon (upper right) opens the settings: **User profile for site rotation** opens a dialog where you choose **Man**, **Woman** or **Child**, and the **Manage pump site rotation** and **Manage CGM site rotation** switches select which sites you manage.

![Настройки](../images/SiteRotation/Settings.png)

![User profile for site rotation dialog](../images/SiteRotation/Type.png)

*Note: this setting decides whether the Site Rotation dialog (Edit mode) opens automatically when a new entry is made with the "Prime/Fill" button or the "Sensor Insert" button.*

- For Site change done directly from Pump, you have to open the View Mode and Edit the new entry to select Location and Arrow

Edit Mode allows you to select Location, Arrow, and Note associated to selected Entry:

- The entry being edited is shown below the body images, with its type icon (cannula or sensor)
- Front and back views are shown side by side: tap the area where you placed it
- Once a site is selected (highlighted in green), the list below shows all entries made in this site in the past 45 days.

![Edit Mode](../images/SiteRotation/EditMode.png)

- You can add an optional arrow by tapping the arrow icon at the right of the entry: the **Select Arrow** dialog lets you specify a sub-location or the pod orientation

![Position](../images/SiteRotation/EditModeSub.png)

- You can also add a **Note** about the selected site
- Tap the **save** icon (upper right) to record the site

Filtering can be done graphically on the image, or clicking a therapy event in the list To remove filtering, just click on the image outside any sites

![Filtering](../images/SiteRotation/Filtering.png)
