(medtrum-nano-300u)=
# Medtrum Nano 200U / 300U

Тези инструкции са за конфигуриране на инсулиновата помпа Medtrum.

```{contents} Table of contents
:depth: 1
:local: true
```

## Възможности на помпата при употреба с AAPS
* Поддържана е цялата функционалност на цикъла (SMB, TBR и т.н.)
* Автоматично обработване на DST (лятно часово време) и смяна на часова зона
* Удължен болус (extended bolus) не се поддържа от драйвера на AAPS

## Hardware and software requirements
* **Съвместими помпена база (pumpbase) и резервоарни пачове (reservoir patches) на Medtrum**
    - В момента се поддържат:
        - Medtrum TouchCare Nano 200U with pumpbase refs: **MD0201** and **MD8201**.
        - Medtrum TouchCare 300U с помпена база с референция: **MD8301**.
        - Ако имате неподдържан модел и сте готови да дарите хардуер или да помогнете с тестването, моля, свържете се с нас чрез discord [тук](https://discordapp.com/channels/629952586895851530/1076120802476441641).
* **AAPS built and installed** using the [Build APK](../SettingUpAaps/BuildingAaps.md) instructions.
* **Съвместим Android телефон** поддръжка на BLE Bluetooth връзка
    - Вижте [Release Notes](../Maintenance/ReleaseNotes.md) на AAPS

## Before you begin

**НА ПЪРВО МЯСТО БЕЗОПАСНОСТ** Не предприемайте този процес в среда, в която не можете да се справите с грешка (задължителни са резервни пачове, инсулин и устройства за управление на помпата).

**PDM и приложението Medtrum няма да работят с пач, активиран от AAPS.** Преди може да сте използвали своя PDM или приложението Medtrum, за да изпращате команди към помпата си. От съображения за сигурност можете да използвате активирания пач само с устройството или приложението, което е било използвано за неговото активиране.

*Това НЕ означава, че трябва да изхвърлите своя PDM. Препоръчително е да го съхранявате на сигурно място като резервен вариант за спешен случай, например ако изгубите телефона си или AAPS не работи правилно.*

**Помпата ви няма да спре да доставя инсулин, когато не е свързана с AAPS.** Стандартните базални темпове са програмирани на помпата, както са дефинирани в текущо активния профил. Докато AAPS е активен, той ще изпраща команди за временен базал, които се изпълняват максимум 120 минути. Ако по някаква причина помпата не получи нови команди (например заради загубена комуникация поради разстояние между помпата и телефона), помпата ще се върне към стандартния базален темп, програмиран на помпата, след като приключи временният базал.

**The AAPS Profile does not support a 30 minute basal rate time frame** If you are new to AAPS and are setting up your basal rate profile for the first time, please be aware that basal rates starting on a half-hour basis are not supported, and you will need to adjust your basal rate profile to start on the hour. Например, ако имате базален темп от 1.1 единици, който започва в 09:30 и има продължителност 2 часа, завършваща в 11:30, това няма да работи. Ще трябва да промените този базален темп от 1.1 единици на времеви диапазон 9:00-11:00 или 10:00-12:00. Въпреки че самият хардуер на помпата Medtrum поддържа 30-минутни интервали за базалния темп, AAPS в момента не може да ги вземе предвид в своите алгоритми.

**Базални темпове от 0U/h в профила НЕ се поддържат в AAPS.** Въпреки че помпата Medtrum поддържа нулев базален темп, AAPS използва кратни на профилния базален темп, за да определя автоматизираното лечение, и следователно не може да функционира с нулев базален темп. The minimum profile basal rate is 0.05 U/h.

Временен нулев базален темп може да се постигне чрез функцията "Disconnect pump" или чрез комбинация от Disable Loop/Temp Basal Rate или Suspend Loop/Temp Basal Rate.

## Setup

```{caution}
When you activate a patch with **AAPS**, you **MUST** turn off every other device that can talk to the Medtrum pump base, for example an active PDM or the Medtrum app.
```

### Стъпка 1: Изберете помпа Medtrum

#### Опция 1: Нови инсталации

If you are installing **AAPS** for the first time, the **Setup Wizard** guides you through the setup. Select **Medtrum** when you reach the **Pump** step.

If in doubt, you can also select **Virtual Pump** and select **Medtrum** later, after setting up **AAPS** (see option 2).

![Setup Wizard pump step](../images/setup-wizard/Wizard-Pump.png)

#### Option 2: The Configuration screen

On an existing installation you can select the **Medtrum** pump in [Configuration > Pump](#Config-Builder-pump):

Open the top-left **menu** (☰), tap **Configuration** > **Pump**, and select the **Medtrum** card. Only one pump can be active at a time.

![Configuration > Pump with the Medtrum plugin](../images/v4/Configuration/configuration_pump_list_4.png)

Once it is selected, the **Medtrum** card shows two buttons, **Settings** and **Open plugin**:

![The Medtrum plugin selected in Configuration > Pump](../images/v4/Pumps/medtrum_enabled.png)

**Open plugin** (or **Manage → Pump**) opens the Medtrum pump screen. You use it to change patches and to see the pump status. Before a patch is activated it looks like this:

![Medtrum pump screen before pairing](../images/v4/Pumps/medtrum_pump_screen.png)

(medtrum-step-2)=
### Стъпка 2: Промяна на настройките на Medtrum

Tap **Settings** on the **Medtrum** card in **Configuration** > **Pump**. You can also tap the gear icon in the top-right corner of the Medtrum pump screen. This opens the **Medtrum pump settings**:

![Medtrum driver settings](../images/v4/Pumps/medtrum_settings.png)

```{note}
There is no **Serial Number** setting any more. **AAPS** finds your pump base with a Bluetooth scan the first time you activate a patch (see [Step 3](#medtrum-activate-patch)), and remembers its serial number. To use a different pump base, see [Unpair](#medtrum-unpair).
```

#### Alarm Settings

***По подразбиране: Beep (звуков сигнал).***

This setting changes the way that the pump alerts you when there is a warning or error.

- **Beep**: the patch beeps on alarms and warnings.
- **Silent**: the patch does not alert you on alarms and warnings.

Note: In silent mode **AAPS** still sounds the alarm, depending on your phone's volume settings. If you do not respond to the alarm, the patch eventually beeps.

#### Нотификация при предупреждение от помпата

***По подразбиране: Активирано.***

This setting changes the way **AAPS** shows notifications for non-critical pump warnings. When enabled, a notification is shown on the phone when a pump warning occurs, including:
- Ниска батерия
- Low reservoir (20 units)
- Patch expires soon

We recommend leaving this enabled when the pump alarms are set to **Silent**. In either case these warnings are also shown on the Medtrum pump screen under [Active alarms](#medtrum-active-alarms).

(medtrum-patch-expiration)=
#### Изтичане на срока на пача

***По подразбиране: Активирано.***

Тази настройка променя поведението на пача. When enabled, the patch expires after 3 days and gives an audible warning if you have sound enabled. After 3 days and 8 hours the patch stops working.

If this setting is disabled, the patch does not warn you before it stops. With recent pump base firmware, a patch runs for 5 days at most.

#### Pump expiry warning [hours]

***По подразбиране: 72 часа.***

This setting changes the time of the expiration warning. When [Patch Expiration](#medtrum-patch-expiration) is enabled, **AAPS** shows a notification this many hours after activation.

#### Hourly Maximum Insulin [Units]

***По подразбиране: 25U.***

Тази настройка променя максималното количество инсулин, което може да бъде доставено за един час. If this limit is exceeded, the patch suspends and gives an alarm. You can reset the alarm with the **Reset alarms** button on the pump screen, see [Reset alarms](#nano-reset-alarms).

Задайте разумна стойност според нуждите ви от инсулин.

#### Daily Maximum Insulin [Units]

***По подразбиране: 80U.***

Тази настройка променя максималното количество инсулин, което може да бъде доставено за един ден. If this limit is exceeded, the patch suspends and gives an alarm. You can reset the alarm with the **Reset alarms** button on the pump screen, see [Reset alarms](#nano-reset-alarms).

Задайте разумна стойност според нуждите ви от инсулин.

#### Scan on connection error

***По подразбиране: Изключено.***

Намира се в **Advanced Settings**.

Only enable this if you have connection problems. When enabled, the driver scans for the pump again before trying to reconnect to it. Make sure the Location permission for **AAPS** is set to "Allow all the time".

### Step 2b: AAPS alert settings

These settings are not part of the Medtrum driver. Open them from the **Settings** (gear) icon in the top-right corner of the main screen. See [Settings](../SettingUpAaps/Preferences.md) for more.

#### BT Watchdog

Open **Settings** > **Pump**:

![Settings > Pump](../images/preferences/settings_pump.png)

**BT Watchdog** switches off the phone's Bluetooth for one second if **AAPS** cannot connect to the pump. This may help on some phones where Bluetooth freezes.

Enable this setting if you often have connection problems with your pump.

#### Local alerts

Open **Settings** > **Local alerts**:

![Settings > Local alerts](../images/preferences/settings_local_alerts.png)

##### Предупреждение, ако помпата е недостъпна

***По подразбиране: Активирано.***

This setting is forced on when the Medtrum driver is enabled. It alerts you when the pump is unreachable. This can happen when the pump is out of range, or when it is not responding because of a faulty patch or pump base, for example when water leaks between the pump base and the patch.

От съображения за безопасност тази настройка не може да бъде деактивирана.

##### Pump unreachable threshold

***По подразбиране: 30 мин.***

This setting changes how long **AAPS** waits before alerting you that the pump is unreachable.

You can change this setting when using the Medtrum pump, but we recommend keeping it at 30 minutes for safety reasons.

(medtrum-activate-patch)=
### Стъпка 3: Активиране на пач

**Преди да продължите:**
- Have your Medtrum pump base and a new reservoir patch ready.
- Turn off other devices that can talk to the Medtrum pump (PDM and Medtrum app).
- Ideally, make sure **AAPS** is set up and a [profile is activated](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md). If no profile is active, the activation starts with a **Profile required** step where you choose the profile to activate.

#### Start the activation

Open the [Medtrum pump screen](#nano-overview) (**Manage → Pump**) and tap **Change Patch**. If you have set up [settings protection](#Preferences-protection), you must enter your password or PIN first.

If a patch is already active, you are asked to deactivate it first, see [Deactivate patch](#nano-deactivate-patch).

The activation is a step-by-step wizard. Следвайте стъпките, за да напълните и активирате нов пач. Tap **Cancel** at any step to stop.

```{important}
Only put the patch on your body and insert the cannula when the wizard tells you to (after priming is complete).
```

The first steps you see depend on your setup:

1. **Profile required**: only if no profile is active. Select the profile to apply, then continue.
2. **Find Pump**: only the first time, or after you used [Unpair](#medtrum-unpair). Connect the pump base to a fresh patch to power it on. **AAPS** scans for nearby Medtrum pump bases (their names start with `MT`). Tap yours in the list. **AAPS** saves its serial number, then goes straight to filling the patch.

   ![Find Pump step scanning for a Medtrum pump base](../images/medtrum/activation/FindPump.png)

3. **Activate Patch**: only when **AAPS** already knows your pump base. The screen says "No active patch. Press **Next** to begin the activation process." Make sure the pump base is **not** connected to the patch yet, then tap **Next**.

![Старт на Активиране](../images/medtrum/activation/StartActivation.png)

#### Connect and fill the patch

![Напълнете пача](../images/medtrum/activation/FillPatch.png)

Connect the pump base to the patch, remove the residual air and fill the patch with insulin. A minimum of 70 units is needed for activation. The screen shows the reservoir level. Do not attach the patch to your body yet.

When the patch is detected and filled, the **Next** button appears. Tap it.

#### Select insulin

This step only appears if you have more than one insulin set up in **AAPS**. Select the insulin you are filling the patch with. **AAPS** applies a profile switch with this insulin after activation.

#### Подготовка (Prime) на пача

![Полу натиснат](../images/medtrum/activation/HalfPress.png)

Do **not** remove the safety lock. Half-press the needle button on the patch, then tap **Next** to start priming.

![Прогрес на пълнене](../images/medtrum/activation/PrimeProgress.png)

Wait for priming to complete.

![Пълнене завършено](../images/medtrum/activation/PrimeComplete.png)

When priming is complete, tap **Next** to continue.

#### Site Rotation

This step only appears if you manage pump sites with [Site Rotation](#Aapsscreens-site-rotation) (setting **Manage pump site rotation**). Choose where you place the patch on your body, or skip this step.

#### Залепете пач

![Залепете пач](../images/medtrum/activation/AttachPatch.png)

Clean the skin and remove the stickers. Remove the safety lock, attach the patch to your body, and press the needle button to insert the cannula.

Tap **Next** to activate the patch.

#### Активиране на пач

![Активиране на пач](../images/medtrum/activation/ActivatePatch.png)

**AAPS** activates the pump and sets the initial basal rate. Please wait. When activation is complete, the following screen appears:

![Активирането завършено](../images/medtrum/activation/ActivationComplete.png)

```{admonition} Older screenshot
:class: note
Apart from **Find Pump**, the activation screenshots above are from an earlier **AAPS** version and may look different in **AAPS** 4.
```

It shows how many units are left in the patch. Tap **OK** to return to the pump screen.

```{tip}
After a new activation, [export your settings](../Maintenance/ExportImportSettings.md). This lets you recover this patch session later, for example on a new phone.
```

(nano-deactivate-patch)=

### Деактивиране на пач

To deactivate the active patch, open the [Medtrum pump screen](#nano-overview) (**Manage → Pump**) and tap **Change Patch**.

![Деактивиране на пач](../images/medtrum/activation/DeactivatePatch.png)

You are asked to confirm that you want to deactivate the current patch. **This cannot be undone.** Tap **Next** to deactivate, or **Cancel** to return to the pump screen.

![Процес по Деактивиране](../images/medtrum/activation/DeactivateProgress.png)

If **AAPS** cannot deactivate the patch (for example because the pump base has already been removed from the patch), tap **Discard** to forget the current patch session. You can then activate a new patch.

![Деактивирането приключено](../images/medtrum/activation/DeactivateComplete.png)

When deactivation is complete, retract the needle and remove the patch from your body. Remove the pump base and dispose of the used patch. Tap **OK** to return to the pump screen, or **Next** to start activating a new patch.

(nano-resume-interrupted-activation)=

### Възобновяване на прекъснато активиране

If a patch activation is interrupted, for example because the phone battery runs out, you can resume it. Open the [Medtrum pump screen](#nano-overview) (**Manage → Pump**) and tap **Change Patch**.

![Възобновяване на прекъснато активиране](../images/medtrum/activation/ActivationInProgress.png)

Tap **Next** to resume the activation. Tap **Discard** to reset the activation status, so you can activate a new patch.

![Прочитане на статуса на активация](../images/medtrum/activation/ReadingActivationStatus.png)

```{admonition} Older screenshot
:class: note
The screenshots in **Deactivate patch** and **Resume interrupted activation** are from an earlier **AAPS** version and may look different in **AAPS** 4.
```

The driver reads the activation status from the pump. If this works, the wizard continues at the step where it stopped.

(nano-overview)=

## Pump screen

The Medtrum pump screen (**Manage → Pump**) shows the current status of the Medtrum patch. It also has buttons to change the patch, reset alarms and refresh the status. A banner at the top shows important states, for example **Patch not activated** or **Pump is suspended**.

![Medtrum pump screen with an active patch](../images/v4/Pumps/medtrum_pump_screen_active.png)

The screen can show these rows. Some rows only appear when they have a value.

- **Last connection**: how long ago **AAPS** last connected to the pump.
- **Last bolus**: the last bolus that was delivered.
- **Battery**: the current battery voltage of the patch.
- **Reservoir**: the current reservoir level.
- **Serial number**: the serial number of your pump base.
- **Pump state**: the current state of the pump. For example **Active** (the patch is activated and running normally) or **Stopped** (the patch is not activated).
- **Base basal rate**: the basal rate from your profile that is running now.
- **Temp basal**: the temporary basal rate, if one is running.
- **Active bolus**: the bolus that is being delivered right now.
- **Active alarms**: see [below](#medtrum-active-alarms).
- **Pump type**: the model of your pump base.
- **FW version**: the firmware version of the pump base.
- **Patch no**: the sequence number of the activated patch. It goes up by one every time you activate a new patch.
- **Activation**: the date and time the patch was activated, and how long ago that was.
- **Patch expires**: the date and time when the patch expires. Shows **Not enabled** if [Patch Expiration](#medtrum-patch-expiration) is off.

(medtrum-active-alarms)=
### Active alarms

This row shows any alarms that are active right now, for example a low reservoir or an expiring patch.

### Refresh

This button refreshes the status of the patch. It is only available when a patch is active and **AAPS** is not connected to the pump at that moment.

### Change Patch

This button starts the wizard to change the patch. Вижте [Активиране на пач](#medtrum-activate-patch) за повече информация.

(medtrum-unpair)=
### Unpair

This button only appears when **AAPS** knows a pump base. It clears the stored pump base serial number and disconnects. The next time you activate a patch, **AAPS** scans for a pump base again (the **Find Pump** step). Use this if you switch to a different pump base. Only do this when no patch is active.

(nano-reset-alarms)=

### Нулиране на аларми

The **Reset alarms** button only appears on the pump screen when the patch has suspended itself, for example after a maximum daily insulin alarm. Tap it to reset the alarms and resume insulin delivery.

![Нулиране на аларми](../images/medtrum/ResetAlarms.png)

```{admonition} Older screenshot
:class: note
The screenshot above is from an earlier **AAPS** version. In **AAPS** 4 the pump screen looks different, but the **Reset alarms** button works the same way.
```

## Смяна на телефон, експортиране/импортиране на настройки

When you switch to a new phone, do the following:
* [Export settings](../Maintenance/ExportImportSettings.md) on your old phone.
* Transfer the settings file from the old phone to the new phone, and import it into **AAPS**. Tick **Also replace pump settings** on the import screen, otherwise the patch session is not transferred to the new phone.

The imported settings file must be from the patch session you are using now, otherwise the patch will not connect (see [Tubeless pumps](#ExportImportSettings-tubeless-pumps)).

After a settings import, the driver syncs the history with the pump. This can take a while, depending on the age of the settings file. The progress ("Syncing records, ... left") is shown on the main screen:

![Прогрес по синхронизация](../images/medtrum/SyncProgress.png)

(medtrum-nano-troubleshooting)=

## Отстраняване на проблеми

### Проблеми с връзката

If you have connection timeouts or other connection problems:
- In the Android app settings for **AAPS**, set the Location permission to "Allow all the time".
- Try enabling **Scan on connection error** (Medtrum settings > **Advanced Settings**) and **BT Watchdog** (**Settings** > **Pump**), see [Step 2](#medtrum-step-2).

### Проблеми с Bluetooth
За известни проблеми с Bluetooth връзките, прекъсвания на помпата/пачовете, или проблеми с активирането и връзката вижте [Отстраняване на проблеми с Bluetooth](../GettingHelp/BluetoothTroubleshooting.md)

### Прекъснато активиране

If the activation is interrupted, for example by an empty phone battery or a phone crash, you can resume it. Tap **Change Patch** on the pump screen and follow the steps in [Resume interrupted activation](#nano-resume-interrupted-activation).

### Предотвратяване на грешки в пача

Пачът може да даде различни грешки. За да предотвратите чести грешки:
- Уверете се, че пача е правилно поставен в помпената база и не се виждат празнини.
- При пълнене на пача не прилагайте прекомерна сила върху буталото (plunger). Не се опитвайте да напълните пача над максимума, приложим за вашия модел.

## Къде да получите помощ

Цялата разработка на драйвера за Medtrum се извършва от общността на **доброволни начала**; молим ви да имате предвид този факт и да използвате следните насоки, преди да поискате съдействие:

-  **Ниво 0:** Прочетете съответния раздел от тази документация, за да сте сигурни, че разбирате как трябва да работи функционалността, с която изпитвате затруднения.
-  **Ниво 1:** Ако все още срещате проблеми, които не можете да разрешите с помощта на този документ, моля, отидете в канала *#Medtrum* в **Discord**, като използвате [тази покана](https://discord.gg/4fQUWHZ4Mw).
-  **Ниво 2:** Претърсете съществуващите issues, за да видите дали проблемът ви вече е докладван в <0>Issues</0>; ако съществува, моля, потвърдете/коментирайте/добавете информация за проблема си. Ако не, моля, създайте [нов issue](https://github.com/nightscout/AndroidAPS/issues) и приложете [вашите лог файлове](../GettingHelp/AccessingLogFiles.md).
-  **Бъдете търпеливи – повечето от членовете на нашата общност са добронамерени доброволци, а решаването на проблеми често изисква време и търпение както от потребителите, така и от разработчиците.**