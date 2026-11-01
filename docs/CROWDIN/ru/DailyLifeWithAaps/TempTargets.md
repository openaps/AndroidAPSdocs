# Временные цели

## Что такое временные цели, где их можно задать и сконфигурировать?

**Временная Цель** (или сокращенно **ВЦ**) - это функция ** AAPS**, которая позволяет изменять [**целевой диапазон ГК** ](#profile-glucose-targets)в зависимости от вида активности в течение дня (приём пищи, физ нагрузка). Это достигается за счет того, что **AAPS** вносит корректировки в расходование инсулина пользователем.

Цель гликемии, особенно если она краткосрочна (менее 4 часов), не должна быть *конкретным значением*, которого вы добиваетесь. Скорее, это способ заставить алгоритм **AAPS** быть более или менее агрессивным, при этом сохраняя уровни ГК в целевом диапазоне.

Временные цели можно задать в таких границах:

|          | Временная цель         |
| -------- | ---------------------- |
| Минимум  | 4 mmol/L or 72 mg/dL   |
| Максимум | 10 mmol/L or 180 mg/dL |

**AAPS** provides three built-in **Temp-Target** presets suitable for exercise (**Activity**), meals (**Eating Soon**) and predicted hypoglycemia (**Hypo**). They live on the **Temp Target** screen (**Manage** → **Temp Target**), which you can also open by simply tapping the **target chip** on the main screen.

Пользователи должны иметь реалистичные ожидания при выборе **Временной цели** в **AAPS**. Успех достижения желаемого целевого показателя **ГК** будет зависеть от множества факторов: точности настроек **AAPS**, общего контроля уровня **ГК**, **количества активного инсулиноа IOB**, параметра чувствительности к инсулину, резистентности к инсулину, интенсивности нагрузок и т. д.

Для достижения желаемого значения **ГК** может потребоваться около 30 минут или больше с момента активации **Временной Цели**. **AAPS** не в состоянии достичь целевой **ГК** немедленно, и пользователи должны помнить об этом при использовании **Врем-Цели**.

The sections below summarize the features of **Temp-Target Activity**, **Temp-Target Eating soon** and **Temp-Target Hypo**. The values shown are the shipped defaults — you can [adjust each preset](#TempTargets-change-preset-defaults) to your own needs.

### ВЦ - Нагрузка

![ВЦ Нагрузка](../images/TempTarget2.png)

**BG Target (default preset, adjustable)**

AAPS will aim to reach 140 mg/dL or 7.8 mmol/L for 1 h 30 min

**Другие соображения, которые пользователи могут инкорпорировать при выборее**:

В зависимости от уровня **ГК**, **AAPS**"понижает" расход инсулина для достижения целевой **ГК**. Если целевая **ГК** не находится в нужном диапазоне (напр. выше целевого значения **ГК** **Профиля**), тогда **AAPS** может не отключать базу.

В замкнутом цикле микроболюсы **SMB**:

- *могут* быть отключены (обсуждается в дальнейшем); и/или
- алгоритм **AAPS** может активировать подачу базала при наличии отрицательного активного инсулина **IOB** или <0.

Пользователи, возможно, также захотят:

- *выбрать* эту **ВЦ** за 1-2 часа до планируемой нагрузки, чтобы обеспечить уменьшение активного инсулина IOB (правильное время для этой ВЦ индивидуально); и
- *выбрать* временный Профиль (пониженный) на время запланированного мероприятия для обеспечения понижения активного инсулина **IOB**;
- *ensuring* **TT** is timed to be *deactivated* shortly before the exercise, because **IOB** is already reduced and some users experience a rapid rise in **BG** post exercise.

### ВЦ - Ожидаемый прием пищи

![TT Eating soon](../images/TempTarget1.png)

**BG Target (default preset, adjustable)**

AAPS will aim to reach 90 mg/dL or 5.0 mmol/L for 45 minutes

**Другие соображения, которые пользователи могут инкорпорировать при выборее**:

В замкнутом цикле микроболюсы **SMB**:

- останется активированным; и/или
- базал также может быть активирован в зависимости от настроек профиля **пользователя**.

В зависимости от уровня **ГК**, **AAPS** "увеличит" потребление инсулина в соответствии с параметрами, заданными пользователем для достижения желаемого уровня **ГК**.

### ВЦ - Гипо

![TT Hypo](../images/TempTarget3.png)

**BG Target (default preset, adjustable)**

AAPS will aim to reach 160 mg/dL or 8.9 mmol/L for 1 hour

**Другие соображения, которые пользователи могут инкорпорировать при выборее**:

В замкнутом цикле микроболюсы **SMB**:

- *могут* быть отключены (обсуждается в дальнейшем); и/или
- алгоритм **AAPS** может активировать подачу базала при наличии отрицательного активного инсулина **IOB** или <0.

(TempTargets-manage-v4)=

## Setting and managing temporary targets (Manage → Temp Target)

In **AAPS** v4 you manage your TT **presets** and start a temporary target from the **Manage** screen (bottom navigation) → **Temp Target** (*“Manage and set temporary targets”*).

![The Temp Target screen — preset carousel, editor and action bar](../images/v4/TempTarget/tt_management.png)

The screen has three parts:

1. **Preset carousel** (top) — swipe through your TT presets. Each card shows the preset's **name**, **target** and **duration**; the currently running TT is highlighted.
2. **Editor** (middle) — the **Temporary target** and **Duration** that will actually be applied, plus an **Activation** date/time.
3. **Action bar** (bottom) — **➕ add**, **‘️ delete** and the **▶ activate** button.

Selecting a preset card loads its **target** and **duration** into the editor.

```{admonition} Built-in vs custom presets :class: note The built-in presets — **Eating Soon**, **Activity** and **Hypo** — always exist and **cannot be deleted** (you can change their values and save, though). Any presets you create yourself are **custom** and can be edited or deleted freely.

    <br />### Activating a temporary target
    
    Swipe to the preset you want (its values load into the editor), optionally adjust the **target**/**duration** in the editor, then tap **▶ Activate**. A confirmation shows the exact target, duration and reason before anything starts:
    
    ![Activation confirmation](../images/TempTarget8.png)
    
    After you confirm, the temporary target starts immediately (or at the chosen **Activation** time) and runs for the set **duration**.
    
    ```{admonition} Editing the numbers is a one-off — it does not change the preset
    :class: important
    The **target** and **duration** in the editor are the values **Activate** will use *right now*. If you change them, that change is **temporary**: it applies only to this activation and **does not modify the saved preset**. This lets you "tweak and activate" a one-off TT (for example activate *Activity* at a slightly different target today) without permanently altering the preset.
    

### Saving changes to a preset

If you *do* want to keep an edited value, **Save** it: when the editor differs from the selected preset, a **Save** icon appears in the top toolbar. Tapping it stores the current **target** and **duration** (and name, for custom presets) back into the selected preset. For the built-in presets, a **Revert to defaults** button (↺) also appears in the action bar: it brings back the preset's default values.

![Temp Target screen with the Save icon and the Revert to defaults button](../images/v4/TempTarget/tt_preset_save_revert.png)

So the rule of thumb is:

- **Activate** → use the numbers **once** (preset unchanged).
- **Save** → make the numbers the preset's **new defaults**.

To put a built-in preset back the way it shipped, select it and tap the **↺ Revert** button — it appears in the action bar only for a **built-in** preset whose values currently differ from its factory defaults, and it restores that preset's original **target** and **duration**.

### Adding and removing presets

- **➕ Add** — create a **new custom preset** from the current editor values. The new card appears in the carousel.
- **‘️ Delete** — remove the selected **custom** preset. Built-in presets (*Eating Soon*, *Activity*, *Hypo*) cannot be deleted.

Once you have at least two **custom** presets, you can also change their order in the carousel: tap the **Reorder** icon (⇅) in the top bar, step the centred card with the **◀ / ▶ move buttons**, then confirm with **✓**. The built-in presets keep their places — only custom presets can be moved. (The controls look the same as [reordering profiles](ProfileSwitch-ProfilePercentage.md).)

Your presets are part of the synced configuration, so they are shared across your master and paired clients.

### Other ways to set a temporary target

A temporary target can also be set without opening this screen:

- with the **TT toggles in the Carbs dialog** — see [below](#TempTargets-carbs-dialog),
- with a **preset button on the [QuickLaunch toolbar](QuickLaunch.md)** — the *Temp Target Presets* category in *Configure QuickLaunch* offers a one-tap button for each of your presets,
- from a **Wear OS watch** (the **Temp Target** menu item / tile),
- from a paired **client** — see [Master ↔ Client control](../RemoteFeatures/ClientMasterControl.md),
- as part of a **[scene](Scenes.md)** (the *Temporary target* action), or
- from an **Automation** rule (*Start temp target* / *Stop temp target*).

* * *

(TempTargets-where-can-i-select-a-temp-target)=

## Как выбрать временную цель?

The quickest way is to tap the **target chip** on the main screen (it shows your current target range):

![Target chip on the main screen](../images/TempTarget6.png)

This opens the **Temp Target** screen described above — swipe to a preset and tap **▶ Activate**. The same screen is also reachable via **Manage** → **Temp Target**.

(TempTargets-carbs-dialog)= When entering carbs, you don't need to open the **Temp Target** screen at all: the **Carbs dialog** (**Treatments** → **Carbs**) has **Start Hypo TT**, **Start Eating soon TT** and **Start Activity TT** toggles at the top. Switch one on and the corresponding preset is activated together with the carb entry:

![TT toggles in the Carbs dialog](../images/TempTarget5.png)

    {admonition} Automatic Hypo TT
    :class: note
    If you open the **Carbs dialog** while your glucose is below 72 mg/dL (4 mmol/L), **AAPS** pre-selects the **Start Hypo TT** toggle for you (unless a higher temporary target with a longer remaining duration is already running).

(TempTargets-change-preset-defaults)=

## Как изменить временную цель по умолчанию и переопределить её своими собственными значениями?

Each preset's **target** and **duration** are edited directly on the **Temp Target** screen — there is no separate preferences entry for this anymore:

1. Open the **Temp Target** screen (tap the target chip, or **Manage** → **Temp Target**).
2. Swipe to the preset you want to change.
3. Adjust **Temporary target** and/or **Duration** in the editor.
4. Tap the **Save** icon that appears in the top toolbar.

![Editing a preset — Save icon in the toolbar, Revert in the action bar](../images/TempTarget7.png)

While the editor differs from a built-in preset's factory values, a **↺ Revert** button also appears in the action bar — tap it to restore the preset's original target and duration.

## Как отменить Врем-Цель?

While a temporary target is running, the target chip on the main screen shows the target and its remaining time. Tap it — on the **Temp Target** screen the running preset is highlighted as **ACTIVE**, and a red **✗ Cancel** button appears at the end of the toolbar at the bottom, just left of the **▶ Activate** button. Tap it and confirm:

![Cancelling a running temp target](../images/TempTarget9.png)

A running temporary target can also be stopped from a **Wear OS watch**, from a paired **client**, or by an **Automation** rule (*Stop temp target*).

(TempTargets-hypo-temp-target)=

## Временная цель Гипо 

**Временная-Цель Гипо** позволяет **AAPS** предотвратить снижение уровня сахара в крови пользователя за счет снижения потребления инсулина. Если пользователь прогнозирует, что его **ГК** снизится: обычно система **AAPS** должна самостоятельно справится с этим, но многое будет зависеть от правильности настроек пользователя **AAPS**. **Временная-Цель Гипо** позволяет **AAPS** снизить подачу инсулина до прогнозируемого минимума.

Иногда, при потреблении углеводов на купирование гипогликемии, может быстро повыситься **ГК** пользователя, и **AAPS** скорректирует быстрорастущую **ГК**, включив **СМБ**.

Некоторые пользователи не хотят включать подачу **СМБ** во время работы **Временной Цели Гипо**. This is achieved by deactivating *'Enable SMB with high temp target'* in **Settings** → **OpenAPS SMB** (see further below):

- Advanced, objective 9: the user can enable *“High temp target raises sensitivity”* for **Temp-Targets** of 100 mg/dL (5.6 mmol/L) or higher in OpenAPS SMB, **AAPS** will be more sensitive.

- Advanced, objective 9: the user can deactivate *“Enable SMB with high temp target”*, so that even if **AAPS** has COB > 0, “Enable SMB with low temp target” or “Enable SMB always” enabled and OpenAPS SMB active, **AAPS** will not give SMBs while high temp targets are active.

Note: if you open the **Carbs dialog** while your blood glucose is less than 72 mg/dL or 4 mmol/L, **AAPS** pre-selects the **Start Hypo TT** toggle automatically.

(TempTargets-activity-temp-target) =

## Временная цель Нагрузка

До и во время фиических нагрузок пользователю может потребоваться более высокая цель, чтобы предотвратить гипогликемию во время тренировки.

Чтобы упростить управление временной целью **Нагрузка**, пользователь может настроить цель по умолчанию **Временная Цель Нагрузка** для повышения уровня **ГК** за счет снижения использования инсулина, чтобы замедлить падение **ГК** и избежать гипогликемии.

New users to **AAPS** may need to experiment and personalize their **Temp-Target Activity** default settings in order to optimize this feature to work best for them. Все люди разные, когда речь идет о достижении стабильного контроля уровня глюкозы во время тренировки. См. также [Раздел Спорт](#FAQ-sports) в Часто задаваемых вопросах.

Some users also prefer to activate a **Profile switch** (being a Profile decrease < 100% to reduce insulin delivery by **AAPS**) before and while **Temp-Target Activity** is on. You can start both in one step: tap the profile name on the main screen, tap the round **▶** button, set a **Percentage** below 100 % and a **Duration**, then switch on **Temporary target / Activity**. See [Change the Profile Percentage](#ProfileSwitch-change-percentage).

Advanced, objective 9: users can enable *'High temp target raises sensitivity'* for **Temp-Targets** of 100 mg/dL (5.6 mmol/L) or higher in OpenAPS **SMB**. A target of 99 mg/dL (5.5 mmol/L) is a normal target, neither high nor low. В этом случае **AAPS** будет более чувствительным.

Additionally, if *'Enable SMB with high temp target'* is deactivated, **AAPS** will not deliver **SMBs**, even with COB > 0, *'Enable SMB with low temp target'* or *'Enable SMB always'* enabled and OpenAPS **SMB** active.

(TempTargets-eating-soon-temp-target)=

## Временная цель Ожидаемый прием пищи

**Temp-Target Eating soon** can help accomplish a gentle drive down of **BG** and ensure there is ample **IOB** before eating.

This can be an important tool for those users who do not pre bolus, however the efficacy of **Temp-Target Eating soon** will depend on a number of factors including: the user’s settings, if they eat a low carb diet and whether they are using a fast acting insulin (like Fiasp or Lyumjev) in order to eliminate the need to pre bolus. Ordinarily, until users are experienced in **AAPS** they should expect to pre bolus when using **Temp-Target Eating soon** and this is particularly so, if eating a high carb diet.

Подробнее о режиме «Ожидаемый прием пищи» можно прочитать в статье [Как пользоваться режимом «Ожидаемый прием пищи»](https://diyps.org/2015/03/26/how-to-do-eating-soon-mode-diyps-lessons-learned. /) или [здесь](https://diyps.org/tag/eating-soon-mode/).

В настройках OpenAps SMB, дополнительно, [по достижении цели 9](#objectives-objective9) если включен режим *'Низкая ВЦ снижает чувствительность'*, **AAPS** работает немного более агрессивно. For this option there is a requirement for **Temp-Target** to be 98 mg/dL (5.4 mmol/L) or lower.

## Как отключить СМБ во время активной Временной-Цели?

To action this open **Settings** → **OpenAPS SMB** and deactivate *'Enable SMB with high temp target'*.

![Enable SMB with high temp target preference](../images/TempTargetSMB.png)

This will ensure **AAPS** will not give **SMBs**, even with COB > 0, *'Enable SMB with low temp target'* or *'Enable SMB always'* enabled and OpenAPS SMB active.