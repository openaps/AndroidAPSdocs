# 临时目标

## 什么是临时目标，以及在哪里设置和配置它们？

**临时目标**（或简称**TT**）是**AAPS**的一个功能，允许用户为计划中的活动更改其[**BG**（血糖）目标范围](#profile-glucose-targets)。这是通过**AAPS**调整用户的胰岛素使用量来实现的。

一个血糖目标，特别是如果它是短期的（持续时间少于4小时），并不需要是您期望或希望达到的实际血糖水平值，而是一个告诉**AAPS**在保持血糖水平在范围内的同时，更加或更少地积极调节的好方法。

临时目标可以在以下范围内定义：

|     | 临时目标                   |
| --- | ---------------------- |
| 最小值 | 4 mmol/L or 72 mg/dL   |
| 最大值 | 10 mmol/L or 180 mg/dL |

**AAPS** provides three built-in **Temp-Target** presets suitable for exercise (**Activity**), meals (**Eating Soon**) and predicted hypoglycemia (**Hypo**). They live on the **Temp Target** screen (**Manage** → **Temp Target**), which you can also open by simply tapping the **target chip** on the main screen.

用户应对在**AAPS**中选择**临时目标**时能取得的结果有合理的期望。达到期望的**BG**目标的成功程度取决于多种因素，包括：用户**AAPS**设置的可靠性、整体**BG**控制、**IOB**、胰岛素敏感性、胰岛素抵抗、运动期间的体力消耗程度等。

**临时目标**大约需要30分钟或更长时间才能达到期望的**BG**目标。 **AAPS**无法实现立即达到**BG**目标的效果，用户在选择**临时目标**时应考虑到这一点。

The sections below summarize the features of **Temp-Target- Activity**, **Temp-Target- Eating soon**, and **Temp-Target-Hypo**. The values shown are the shipped defaults — you can [adjust each preset](#TempTargets-change-preset-defaults) to your own needs.

### TT - 活动

![临时目标-活动](../images/TempTarget2.png)

**BG Target (default preset, adjustable)**

AAPS will aim to reach 140 mg/dL or 7.8 mmol/L for 1 h 30 min

**用户在选择时可能需要考虑的其他因素**：

根据**BG**水平，**AAPS**将“减少”胰岛素使用量以达到**BG**目标。如果**BG**目标不在范围内（即高于用户**配置文件**中选择的**BG**目标），则**AAPS**可能会保持基础率不变。

在闭环模式下，**SMB**：

- *可能*会被停用（下文进一步讨论）；和/或
- 基础率可能被停用，如果**AAPS**处于负**IOB**或 <0.

用户可能还希望考虑：

- *selecting* this **TT** 1-2 hours before the planned exercise to ensure reduced IOB (the correct timing for this TT will vary person to person); and
- 在计划活动的持续时间内*选择*一个临时配置文件（降低）以确保减少**IOB**；
- *ensuring* **TT** is timed to be *deactivated* shortly before the exercise, because **IOB** is already reduced and some users experience a rapid rise in **BG** post exercise.

### TT - 即将进食

![TT Eating soon](../images/TempTarget1.png)

**BG Target (default preset, adjustable)**

AAPS will aim to reach 90 mg/dL or 5.0 mmol/L for 45 minutes

**用户在选择时可能需要考虑的其他因素**：

在闭环模式下，**SMB**：

- 将保持激活状态；和/或
- 根据用户的**配置文件**设置，基础率也可能被激活。

根据**BG**水平，**AAPS**将在用户**AAPS**设置参数的范围内“增加”胰岛素使用量以达到期望的**BG**目标。

### TT - 低血糖

![TT Hypo](../images/TempTarget3.png)

**BG Target (default preset, adjustable)**

AAPS will aim to reach 160 mg/dL or 8.9 mmol/L for 1 hour

**用户在选择时可能需要考虑的其他因素**：

在闭环模式下，**SMB**：

- *可能*会被停用（下文进一步讨论）；和/或
- 基础率可能被停用，如果**AAPS**处于负**IOB**或 <0.

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

## 我可以在哪里选择临时目标？

The quickest way is to tap the **target chip** on the main screen (it shows your current target range):

![Target chip on the main screen](../images/TempTarget6.png)

This opens the **Temp Target** screen described above — swipe to a preset and tap **▶ Activate**. The same screen is also reachable via **Manage** → **Temp Target**.

(TempTargets-carbs-dialog)= When entering carbs, you don't need to open the **Temp Target** screen at all: the **Carbs dialog** (**Treatments** → **Carbs**) has **Start Hypo TT**, **Start Eating soon TT** and **Start Activity TT** toggles at the top. Switch one on and the corresponding preset is activated together with the carb entry:

![TT toggles in the Carbs dialog](../images/TempTarget5.png)

    {admonition} Automatic Hypo TT
    :class: note
    If you open the **Carbs dialog** while your glucose is below 72 mg/dL (4 mmol/L), **AAPS** pre-selects the **Start Hypo TT** toggle for you (unless a higher temporary target with a longer remaining duration is already running).

(TempTargets-change-preset-defaults)=

## 我如何更改默认的临时目标并用自己的偏好覆盖它？

Each preset's **target** and **duration** are edited directly on the **Temp Target** screen — there is no separate preferences entry for this anymore:

1. Open the **Temp Target** screen (tap the target chip, or **Manage** → **Temp Target**).
2. Swipe to the preset you want to change.
3. Adjust **Temporary target** and/or **Duration** in the editor.
4. Tap the **Save** icon that appears in the top toolbar.

![Editing a preset — Save icon in the toolbar, Revert in the action bar](../images/TempTarget7.png)

While the editor differs from a built-in preset's factory values, a **↺ Revert** button also appears in the action bar — tap it to restore the preset's original target and duration.

## 我如何取消一个正在运行的临时目标？

While a temporary target is running, the target chip on the main screen shows the target and its remaining time. Tap it — on the **Temp Target** screen the running preset is highlighted as **ACTIVE**, and a red **✗ Cancel** button appears at the end of the toolbar at the bottom, just left of the **▶ Activate** button. Tap it and confirm:

![Cancelling a running temp target](../images/TempTarget9.png)

A running temporary target can also be stopped from a **Wear OS watch**, from a paired **client**, or by an **Automation** rule (*Stop temp target*).

(TempTargets-hypo-temp-target)=

## 低血糖临时目标

**临时目标-低血糖**允许**AAPS**通过减少胰岛素摄入量来防止用户经历低血糖。如果用户预测他们的**BG**将会下降：通常，**AAPS**应该能够处理，但这很大程度上取决于用户**AAPS**设置的稳定性。**临时目标-低血糖**使用户能够提前预测低血糖并更新**AAPS**以减少胰岛素。

有时，当食用低血糖治疗的碳水化合物时，用户的**BG**可能会迅速上升，**AAPS**将通过启用**SMB**来纠正快速上升的**BG**。

一些用户希望在**临时目标-低血糖**期间避免给予**SMB**。 This is achieved by deactivating *'Enable SMB with high temp target'* in **Settings** → **OpenAPS SMB** (see further below):

- In (Advanced, objective 9): the user can enable *“High temp target raises sensitivity”* for **Temp-Targets** of 100 mg/dL (5.6 mmol/L) or higher in OpenAPS SMB, **AAPS** will be more sensitive.

- In (Advanced, objective 9): the user can deactivate *“Enable SMB with high temp target”*, so that even if **AAPS** has COB > 0, “Enable SMB with low temp target” or “Enable SMB always” enabled and OpenAPS SMB active, **AAPS** will not give SMBs while high temp targets are active.

Note: if you open the **Carbs dialog** while your blood glucose is less than 72 mg/dL or 4 mmol/L, **AAPS** pre-selects the **Start Hypo TT** toggle automatically.

(TempTargets-activity-temp-target)=

## 临时目标-活动

在运动前和运动期间，用户可能需要一个更高的目标来防止活动期间出现低血糖。

为了简化**临时目标-活动**，用户可以配置默认的**临时目标-活动**，通过减少胰岛素使用量来提高**BG**水平，以减缓**BG**下降并避免低血糖。

New users to **AAPS** may need to experiment and personalize their **Temp-Target Activity** default settings in order to optimize this feature to work best for them. 每个人在运动期间达到稳定BG控制的能力都是不同的。另请参阅[FAQ中的运动部分](#FAQ-sports)。

Some users also prefer to activate a **Profile switch** (being a Profile decrease < 100% to reduce insulin delivery by **AAPS**) before and while **Temp-Target Activity** is on. You can start both in one step: tap the profile name on the main screen, tap the round **▶** button, set a **Percentage** below 100 % and a **Duration**, then switch on **Temporary target / Activity**. See [Change the Profile Percentage](#ProfileSwitch-change-percentage).

Advanced, objective 9: users can enable *'High temp target raises sensitivity'* for **Temp-Targets** of 100 mg/dL (5.6 mmol/L) or higher in OpenAPS **SMB**. A target of 99 mg/dL (5.5 mmol/L) is a normal target, neither high nor low. 那么 **AAPS** 会更加敏感。

Additionally, if *'Enable SMB with high temp target'* is deactivated, **AAPS** will not deliver **SMBs**, even with COB > 0, *'Enable SMB with low temp target'* or *'Enable SMB always'* enabled and OpenAPS **SMB** active.

(TempTargets-eating-soon-temp-target)=

## 临时目标-即将进食

**临时目标-即将进食**可以帮助实现**BG**的温和下降，并确保在进食前有足够的**IOB**。

This can be an important tool for those users who do not pre bolus, however the efficacy of **Temp-Target -Eating soon** will depend on a number of factors including: the user’s settings, if they eat a low carb diet and whether they are using a fast acting insulin (like Fiasp or Lyumjev) in order to eliminate the need to pre bolus. 通常，在用户使用**AAPS**有经验之前，他们应该预期在使用**临时目标-即将进食**时需要提前注射，特别是如果食用高碳水化合物饮食的话。

您可以在文章['How to do “eating soon” mode'](https://diyps.org/2015/03/26/how-to-do-eating-soon-mode-diyps-lessons-learned/)或[此处](https://diyps.org/tag/eating-soon-mode/)了解更多关于“即将进食模式”的信息。

高级，[目标9](#objectives-objective9)：如果您使用OpenAPS SMB并启用了“*低临时目标降低敏感性*”，**AAPS**将稍微更积极地工作。 For this option there is a requirement for **Temp-Target** to be 98 mg/dL (5.4 mmol/L) or lower.

## 我如何在临时目标期间关闭SMB？

To action this open **Settings** → **OpenAPS SMB** and deactivate *'Enable SMB with high temp target'*.

![Enable SMB with high temp target preference](../images/TempTargetSMB.png)

This will ensure **AAPS** will not give **SMBs**, even with COB > 0, *'Enable SMB with low temp target'* or *'Enable SMB always'* enabled and OpenAPS SMB active.