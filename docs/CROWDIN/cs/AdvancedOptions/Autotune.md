# How to use Autotune plugin (dev only)

Documentation about Autotune algorithm can be found in [OpenAPS documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html).

Autotune plugin is an implementation of OpenAPS autotune algorithm within AAPS.

**Currently Autotune Plugin is only available in [dev branch](../AdvancedOptions/DevBranch.md) and with Engineering mode.**

![Autotune plugin](../images/Autotune/Autotune_1.png)

## Autotune user interface

![Autotune default screen](../images/Autotune/Autotune_1b.png)

- You can select in the Profile dropdown menu the input profile you want to tune (by default your current active profile is selected)
  - Note: each time you select a new profile, previous results will be removed and Tune days parameter will be set to default value
- Then Tune days is to select the number of days used in calculation to tune your profile. The minimum value is 1 day and the maximum value 30 days. This number should not be too small to get correct iterative and smooth results (above 7 days for each calculation)
  - Note: each time you change Tune days parameter, previous results will be removed
- Last Run is a link that recover your latest valid calculation. If you didn't launch Autotune on current day, or if previous results was removed with a modification of calculation parameter above, then you can recover parameters and results of the latest successful run.
- Warning show you for example some information about selected profile (if you have several IC values or several ISF values)
  - Note: Autotune calculation works with only a single IC and a single ISF value. There is currently no existing Autotune algorithm to tune a circadian IC or circadian ISF. If your input profile  has several values, you can see in warning section the average value taken into account to tune your profile.
- Check Input Profile button open the Profile Viewer to allow you a quick verification of your profile (Units, DIA, IC, ISF, basal and target)
  - Note: Autotune will only tune your IC (single value), ISF (single value) and basal (with circadian variation). Units, DIA and target will remain unchanged in output profile.

- "Run Autotune" will launch Autotune calculation with selected profile and the number of Tune days
  - Note: Autotune calculation can take a long time. Once launched, you can switch to another view (home, ...) and come back later in Autotune plugin to see results

![Autotune Run start](../images/Autotune/Autotune_2b.png)

- Then during the run you will see intermediate results below

  - Note: During run, settings are locked, so you cannot change anymore selected input profile or the number of day. You will have to wait the end of current calculation if you want to launch another run with other parameters.

  ![Autotune during run](../images/Autotune/Autotune_3b.png)

- When Autotune calculation is finished, you will see the result (Tuned profile) and four buttons below.

![Autotune Result](../images/Autotune/Autotune_4b.png)

- It's important to always compare input profile (column "Profile"), output profile (column "Tuned") and the percentage of variation for each value (Column "%").

- For basal rates, you also have the number of "missing days". You have missing days when Autotune don't have enough data categorized as "Basal" to tune basal rate for this period (for example after each meal when you have carbs absorption). This number should be as low as possible especially when basal is important (for example during the night or at the end of the afternoon)

- The "Compare profiles" button open the profile comparator view. Input profile is in blue, and output profile (named "Tuned") is in red.

  - Note: in the example below input profile has circadian variation for IC and ISF, but output calculated profile has a single value. If it's important for you to get a circadian output profile see [Circadian IC or ISF profile](#autotune-circadian-ic-or-isf-profile) below.

  ![Autotune Compare profiles](../images/Autotune/Autotune_5.png)

- If you trust results (low percentage of variation between input profile and output profile), you can click on "Activate profile" button and then click on OK to validated.

  - Activate Tuned profile will automatically create a new profile "Tuned" in your Local profile plugin.
  - If you already have a profile named "Tuned" in your local profile plugin, then this profile will be updated with calculated Autotune profile before the activation

  ![Autotune Activate profile](../images/Autotune/Autotune_6.png)

- If you think Tuned profile must be adjusted (for example if you think some variation are too important), then you can click on "Copy to local profile" button

  - A new profile with the prefix "Tuned" and the date and time of the run will be created in local profile plugin

![Autotune Copy to local profile](../images/Autotune/Autotune_7.png)

- You can then select local profile to edit the Tuned profile (it will be selected by default when you open Local profile plugin)

  - the values in local profile will but rounded in the user interface to your pump capabilities

  ![Autotune local profile update](../images/Autotune/Autotune_8.png)

- If you want to replace your input profile with Autotune result, click on "Update input profile" button and validate the Popup with OK

  - Note: if you click on "Activate profile" after "Update input profile", then you will activate your updated profile and not the default "Tuned" profile?

  ![Autotune Update input profile](../images/Autotune/Autotune_9.png)

- If you have updated your input profile, then the "Update input profile" button is replaced by "Revert input profile" button (see screenshot below). You can that way immediately see if your current input profile in Local profile plugin already include the result of last run or not. You also have the possibility to recover you input profile without autotune result with this button

  ![Autotune Update input profile](../images/Autotune/Autotune_10.png)



## Nastavení Autotune

(autotune-plugin-settings)=

### Autotune plugin settings

![Autotune default screen](../images/Autotune/Autotune_11.png)

- Automation Switch Profile (default Off): see [Run Autotune with an automation rule](#autotune-run-autotune-with-an-automation-rule) below. If you change this setting to On, the input profile will automatically be updated by the Tuned profile, and it will be activated.
  - **Be Careful, you must trust and verify during several following days, that after an update and activation of Tuned profile without modification, it improves your loop**

- Categorize UAM as basal (default On): This setting is for the users using AndroidAPS without any carbs entered (Full UAM). It will prevent (when Off) to categorize UAM as basal.
  - Note: if you have at least one hour of Carbs absorption detected during one day, then all data categorized as "UAM" will be categorized as basal, whatever this setting (On or Off)
- Number of days of data (default 5): You can define default value with this setting. Each time your select a new profile in Autotune plugin, Tune days parameter will be replaced by this default value
- Apply average result in circadian IC/ISF (default Off): see [Circadian IC or ISF profile](#autotune-circadian-ic-or-isf-profile) below.

### Other settings

- Autotune also uses Max autosens ratio and Min autosens ratio to limit variation. You can see and adjust these values in Config Builder > Sensitivity detection plugin > Settings > Advanced Settings

  ![Autotune default screen](../images/Autotune/Autotune_12.png)



## Advanced feature

(autotune-circadian-ic-or-isf-profile)=

### Circadian IC or ISF profile

- If you have important variation of IC and/or you ISF in your profile, and you fully trust in your circadian time and variation, then you can set "Apply average result in circadian IC/ISF"

  - Note that Autotune calculation will always be done with a single value, and circadian variation will not be tuned by Autotune. This setting only apply average variation calculated for IC and/or ISF on your circadian values

- See on screenshot below Tuned profile with Apply average variation Off (on the left) and On (on the right)

  ![Autotune default screen](../images/Autotune/Autotune_13.png)



### Tune specific days of the week

- If you click on the checkbox with the eye on the right of "Rune days" parameter, you will see the day selection. You can specify which day of the week should be included in Autotune calculation (in screenshot below you can see an example for "working days" with Saturday and Sunday removed from autotune calculation)
  - If the number of day included in Autotune calculation is lower than the number of Tune days, then you will see how many days will be included on the right of Tune days selector (10 days in the example below)
  - This setting gives good results only if the number of remaining days is not to small (for example if you Tune a specific profile for week end days with only Sunday and Saturday selected, you should select a minimum of 21 or 28 Tune days to have 6 or 8 days included in Autotune calculation)

![Autotune default screen](../images/Autotune/Autotune_14b.png)

- During Autotune calculation, you can see the progress of the calculations ("Partial result day 3 / 10 tuned" on example below)

  ![Autotune default screen](../images/Autotune/Autotune_15b.png)



(autotune-run-autotune-with-an-automation-rule)=

## Run Autotune with an automation rule

First step is to define correct trigger for an automation rule with Autotune:

Note: for more information on how to set an automation rule, see [here](../DailyLifeWithAaps/Automations.md).

- You should select Recurring time trigger: only run Autotune once per day, and autotune is designed to be run daily (each new run you shift one day later and quickly profile modification should be tiny)

  ![Autotune default screen](../images/Autotune/Autotune_16.png)

- It's better at the beginning to run Autotune during the day to be able to check results. If you want to run Autotune during the night, you have to select in the trigger 4AM or later to include current day in next Autotune Calculation.

  ![Autotune default screen](../images/Autotune/Autotune_17.png)

- Then you can select "Run Autotune" Action in the list

  ![Autotune default screen](../images/Autotune/Autotune_18.png)

- You can then select Autotune Action to adjust parameters for your run. Default parameters are "Active Profile", default Tune days value defined in Autotune Plugin preferences, and All days are selected.

  ![Autotune default screen](../images/Autotune/Autotune_19b.png)

- After a few days, if you fully trust Autotune results and percentage of modification is low, you can modify [Autotune settings](#autotune-plugin-settings) "Automation Switch Profile" to enabled to automatically update and activate profile tuned after calculation.

Note: if you want to automatically tune profiles for specific days of the week (for example a profile for "Weekend days" and another one for "Working days"), then create one rule for each profile, select the same days in Trigger and in Autotune Action, Tune days must be high enough to be sure tuning will be done with at least 6 or 8 days, and don't forget to select time after 4AM in trigger...

- See below an example of rule to tune "my profile" on all "Working days" with 14 Tune days selected (so only 10 days included in autotune calculation).

![Autotune default screen](../images/Autotune/Autotune_20b.png)



## Tips and trick's

Autotune works with information existing in your database, so if you just installed AAPS on a new phone, you will have to wait several days before being able to launch Autotune with enough days to get relevant results.

Autotune is just an help, it's important to regularly check if you agree with calculated profile. If you have any doubt, change Autotune settings (for example the number of days) or copy results in local profile and adjust profile before using it.

Always use Autotune several days manually to check results before applying them. And it's only when you fully trust Autotune results, and when variation becomes tiny between previous profile and calculated profile than you start to use Automation (Never before)

- Autotune can work very well for some users and not for others, so **If you don't trust Autotune result, don't use it**

It's also important to analyse Autotune results to understand (or try to understand) why Autotune propose these modifications

- you can have a whole increase or decrease of the strength of your profile (for example increase of total basal associated to decrease of ISF and IC values). it could be associated to several following days with autosens correction above 100% (more aggressivity required) or below 100% (you are more sensitive)
- Sometimes Autotune propose a different balance between basal rates and IC/ISF (for ex lower basal and more aggressive IC/ISF)

We advise to not use Autotune in the following cases:

- You don't enter all your carbs
  - If you don't enter carbs correction for an hypoglycemia, Autotune will see an unexpected increase of your BG value and will increase your basal rates the 4 hours earlier, it could be the opposite of what you need to avoid hypo, especially if it's in the middle of the night. That's why it's important to enter all carbs especially correction for hypo.
- You have a lot of period with UAM detected during the day.
  - Do you have entered all your carbs and correctly estimated your Carbs ?
  - All UAM periods (except if you enter no carbs during a day and categorized UAM as basal is disabled), all your UAM periods will be categorized as basal, this can increase a lot your basal (much more than necessary)

- Your carbs absorption is very slow: if most of your carbs absorption are calculated with min_5m_carbimpact parameter (you can see these periods with a little orange dot in the top of COB curve), the calculation of COB could be wrong and leads to wrong results.
  - When you practice sport, you are generally more sensitive and your BG doesn't rise a lot, so during or after an exercise, it's usual to see some periods with slow carbs. But if you have too often unexpected slow carb absorption, then you may need a profile adjustment (higher value of IC) or a min_5m_carbimpact a bit too high.
- You have a "very bad days", for example stuck several hours in hyperglycemia with a huge amount of insulin to be able to go down within the range, or after a sensor change you got long periods of wrong BG values. If during the pas weeks you only have one or 2 "bad days", you can disable manually these days in autotune calculation to exclude them from calculation, and again **check carefully if you can trust the results**
- If the percentage of modification is too important
  - You can try to increase the number of days to get smoother results