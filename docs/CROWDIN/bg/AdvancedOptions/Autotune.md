# Как да използвате Autotune plugin

Autotune plugin е имплементация на OpenAPS autotune алгоритъма в рамките на AAPS. It analyzes your recent AAPS history to suggest adjustments to your basal rates, ISF and carb ratio.

Autotune Plugin is available in AAPS releases since [3.4](#version3400) but is hidden by default.

(autotune-how-autotune-calculates-adjustments)=
## How Autotune calculates adjustments

Autotune looks back over your recent AAPS history — CGM readings, boluses, carbs and temporary basal rates — and works out where your **Profile** (basal rates, ISF, carb ratio) doesn't quite match what actually happened to your BG.

For each 5-minute data point, it compares your **actual BG change** to the change your Profile predicted, and sorts the resulting deviation into one of three buckets:

* deviations that happened with no carbs on board and no insulin activity (used to tune **basal rates**, hour by hour),
* deviations that happened after a bolus/correction with no carbs (used to tune **ISF**), or
* deviations that happened while carbs were absorbing (used to tune **carb ratio**).

It then looks at the pattern of deviations in each bucket (using percentiles rather than a simple average, so a few noisy data points don't skew the result) and proposes a new value for that hour/parameter.

To keep any single run from overcorrecting, each Autotune run only ever moves a value a fraction of the way towards what the data suggests: up to 10% for ISF and carb ratio, and up to 20% for each basal segment. Overall drift is further capped by the **Max autosens ratio** / **Min autosens ratio** settings (see [Other settings](#autotune-other-settings) below) — the same bounds that limit Autosens. This is why Autotune is meant to be run repeatedly (day after day, or nightly) rather than trusted after a single run: results should converge gradually, and a big jump on one run is a sign to double check your data (missed carbs, a bad sensor day, _etc._) rather than to trust it blindly.

Autotune can be run three ways: manually as a one-off from within the plugin (as described below), automatically every night via an [automation rule](#autotune-run-autotune-with-an-automation-rule), or — outside of AAPS entirely — as a standalone command-line tool against exported data, which is how some community guides describe using it without a phone actively running AAPS.

*For the underlying oref0 algorithm in full mathematical detail, see [OpenAPS's Autotune documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html).*

## Показване на Autotune plugin

Създайте празен файл с име `enable_autotune`, в подпапка `extra` в папката на AAPS на вашия телефон, за да активирате Autotune.

*ЗАБЕЛЕЖКА: Проверете в настройките на AAPS къде се намира AAPS директорията и, че сте поставили файла на правилното място, защото множество хора са хванати с грешно поставен файл.

![Разреши Autotune](../images/Autotune/Autotune_0.png)

Restart **AAPS**. Then open the **menu** (☰), select **Configuration**, then the **General** category, and tick **Autotune**. The card then shows **Settings** and **Open plugin**:

![Autotune ticked in Configuration > General](../images/v4/Configuration/configuration_general_autotune.png)

## Потребителски интерфейс на Autotune

Tap **Open plugin** on the **Autotune** card to open the Autotune screen:

![Autotune screen with the profile, the number of days of data and a warning about the selected profile](../images/Autotune/Autotune_1b.png)

- В падащото меню Profile можете да изберете входния профил, който искате да настроите (по подразбиране е избран текущият ви активен профил)
  - Note: each time you select a new profile, previous results will be removed and the **Number of days of data** will be set to its default value
- Then **Number of days of data** (called **Tune days** in older versions) is to select the number of days used in calculation to tune your profile. Минималната стойност е 1 ден, а максималната – 30 дни. Това число не трябва да е твърде малко, за да се получат правилни, итеративни и плавни резултати (над 7 дни за всяко изчисление)
  - Note: each time you change the **Number of days of data**, previous results will be removed
- Последен старт/Last run е връзка, която възстановява последното ви валидно изчисление. Ако не сте стартирали Autotune през текущия ден, или ако предишните резултати са били премахнати чрез промяна на параметър за изчисление по-горе, можете да възстановите параметрите и резултатите от последното успешно стартиране.
- Warning ви показва например информация за избрания профил (ако имате няколко IC стойности или няколко ISF стойности)
  - Забележка: изчислението на Autotune работи само с една единствена IC стойност и една единствена ISF стойност. Понастоящем не съществува алгоритъм за Autotune, който да настройва циркадни (circadian) IC или циркадни ISF. Ако входният ви профил има няколко стойности, в секцията с предупреждения можете да видите средната стойност, взета предвид при настройката на вашия профил.
- Check Input Profile button open the Profile Viewer to allow you a quick verification of your profile (Units, IC, ISF, basal and target)
  - Забележка: Autotune ще настрои само вашия IC (единична стойност), ISF (единична стойност) и базал (с циркадна вариация). Units and target will remain unchanged in output profile.

- "Run Autotune" will launch Autotune calculation with selected profile and the selected number of days of data
  - Забележка: изчислението на Autotune може да отнеме дълго време. След стартиране можете да превключите към друго (начален екран и др.) и да се върнете по-късно в Autotune plugin, за да видите резултатите

  ![Autotune Стартиране](../images/Autotune/Autotune_2b.png)

- След това по време на изпълнението ще виждате междинни резултати по-долу

  - Забележка: по време на изпълнение настройките са заключени, така че вече не можете да променяте избрания входен профил или броя дни. Ще трябва да изчакате края на текущото изчисление, ако искате да стартирате друго изпълнение с други параметри.

  ![Autotune по време на изпълнение](../images/Autotune/Autotune_3b.png)

- Когато изчислението на Autotune приключи, ще видите резултата (Настроен профил) и четири бутона по-долу.

  ![Autotune Резултат](../images/Autotune/Autotune_4b.png)

- Важно е винаги да сравнявате входния профил (колона "Profile"), изходния профил (колона "Tuned") и процента на вариация за всяка стойност (колона "%").

- а базалните стойности (basal rates) имате също така броя на „липсващите дни" ("missing days"). Имате липсващи дни, когато Autotune няма достатъчно данни, категоризирани като „Базал", за да настрои базалния темп за този период (например след всяко хранене, когато имате усвояване на въглехидрати). Това число трябва да бъде възможно най-ниско, особено когато базалният темп е важен (например през нощта или в края на следобеда)

- Бутонът "Compare profiles" отваря изгледа за сравняване на профили. Входният профил е в синьо, а изходният профил (наречен "Настроен") е в червено.

  - Забележка: в примера по-долу входният профил има циркадна вариация за IC и ISF, но изчисленият изходен профил има единична стойност. Ако за вас е важно да получите циркаден изходен профил, вижте [Циркаден IC или ISF профил](#autotune-circadian-ic-or-isf-profile) по-долу.

  ![Autotune Сравняване на профили](../images/Autotune/Autotune_5.png)

- Ако имате доверие на резултатите (нисък процент на вариация между входния и изходния профил), можете да кликнете върху бутона "Активирай профил" и след това да кликнете OK, за да потвърдите.

  - Activate Tuned profile will automatically create a new profile "Tuned" in your profile list (**Manage → Profile**).
  - If you already have a profile named "Tuned" in **Manage → Profile**, then this profile will be updated with calculated Autotune profile before the activation

  ![Autotune Активирай профил](../images/Autotune/Autotune_6.png)

- Ако смятате, че настроеният профил трябва да бъде коригиран (например ако смятате, че някои вариации са твърде значителни), можете да кликнете на бутона "Копирай в локален профил"

  - A new profile with the prefix "Tuned" and the date and time of the run will be created in **Manage → Profile**

  ![Копиране в основен профил](../images/Autotune/Autotune_7.png)

- You can then edit the Tuned profile: open **Manage** > **Profile**, swipe to the card named "Tuned" with the date and time of the run, and tap the **Edit** (pencil) button

  - the values in the profile will be rounded in the user interface to your pump capabilities

  ![Autotune Обновяване на локален профил](../images/Autotune/Autotune_8.png)

- Ако искате да замените входния си профил с резултата от Autotune, кликнете на бутона "Обнови входящ профил" и потвърдете изскачащия прозорец с OK

  - Забележка: ако кликнете на "Activate profile" след "Update input profile", тогава ще активирате обновения си профил, а не профила по подразбиране "Настроен"

  ![Autotune Обновяване на входящ профил](../images/Autotune/Autotune_9.png)

- Ако сте обновили входния си профил, тогава бутонът "Обнови входен профил" се заменя с бутона "Върни входен профил" (вижте снимката по-долу). You can that way immediately see if your current input profile in **Manage → Profile** already includes the result of last run or not. Имате също така възможността да възстановите входния си профил без резултата от autotune с този бутон

  ![Autotune Обновяване на входящ профил](../images/Autotune/Autotune_10.png)



## Настройки на Autotune

(autotune-plugin-settings)=

### Autotune plugin settings

  ![Autotune settings in AAPS 4](../images/preferences/settings_autotune.png)

```{admonition} Only DEV
:class: note
The **Auto switch profile** feature is only available in Dev/Engineering mode.
```

- **Auto switch profile** (default Off): see [Run Autotune with an automation rule](#autotune-run-autotune-with-an-automation-rule) below. Ако промените тази настройка на включено, входният профил автоматично ще бъде обновен с Настроен профила и той ще бъде активиран.
  - **Внимавайте, трябва да имате доверие и да проверявате в продължение на няколко следващи дни, че след обновяване и активиране на Настроен профил без модификация, той подобрява вашия цикъл**

- **Categorize UAM as basal** (default Off): This setting is for the users using AndroidAPS without any carbs entered (Full UAM). Тя ще предотврати (когато е Off) категоризирането на UAM като базал.
  - Забележка: ако имате поне един час засечено усвояване на въглехидрати през даден ден, тогава всички данни, категоризирани като "UAM", ще бъдат категоризирани като базал, независимо от тази настройка (On или Off)
- **Default tune days** (default 5): You can define the default value with this setting. Each time you select a new profile in the Autotune plugin, the **Number of days of data** will be replaced by this default value
- **Use circadian IC/ISF** (default Off): see [Circadian IC or ISF profile](#autotune-circadian-ic-or-isf-profile) below.

(autotune-other-settings)=
### Other settings

- Utotune също използва Max autosens ratio и Min autosens ratio, за да ограничи вариацията. You can see and adjust these values in [**Settings** > **Absorption settings** > **Advanced Settings**](../SettingUpAaps/Preferences.md) (**Autosens max** and **Autosens min**).

  ![Autosens max and Autosens min in the advanced absorption settings](../images/preferences/settings_absorption_advanced.png)



## Функции за напреднали

(autotune-circadian-ic-or-isf-profile)=

### Циркаден IC или ISF профил

- If you have important variation of IC and/or you ISF in your profile, and you fully trust in your circadian time and variation, then you can enable **Use circadian IC/ISF** (called "Apply average result in circadian IC/ISF" in older versions)

  - Обърнете внимание, че изчислението на Autotune винаги ще се извършва с единична стойност, а циркадната вариация няма да бъде настройвана от Autotune. Тази настройка прилага само средната изчислена вариация за IC и/или ISF върху вашите циркадни стойности

- Вижте на снимката по-долу Настроен профил с Apply average variation изключено (Off, вляво) и включено (On, вдясно)

  ![Autotune екран](../images/Autotune/Autotune_13.png)



### Настройка на конкретни дни от седмицата

- If you tap the **eye** icon on the right of the **Number of days of data** field, you will see the day selection. Можете да зададете кой ден от седмицата трябва да бъде включен в изчислението на Autotune (на снимката по-долу можете да видите пример за „работни дни" с изключени събота и неделя от изчислението на autotune)
  - If the number of days included in Autotune calculation is lower than the **Number of days of data**, then you will see how many days will be included on the right of the days selector (10 days in the example below)
  - This setting gives good results only if the number of remaining days is not to small (for example if you Tune a specific profile for week end days with only Sunday and Saturday selected, you should set **Number of days of data** to at least 21 or 28 to have 6 or 8 days included in Autotune calculation)

  ![Autotune екран](../images/Autotune/Autotune_14b.png)

- During Autotune calculation, you can see the progress of the calculations ("Partial result day 1 / 4 tuned" in the example below, with Saturday and Sunday excluded)

  ![Autotune екран](../images/Autotune/Autotune_15b.png)



(autotune-run-autotune-with-an-automation-rule)=

## Изпълнение на Autotune с правило за автомация

```{admonition} Only DEV
:class: note
The **Auto switch profile** feature is only available in Dev/Engineering mode.
```

Първата стъпка е да зададете правилния тригер за правило за автомация с Autotune:

Забележка: за повече информация как да зададете правило за автомация, вижте [тук](../DailyLifeWithAaps/Automations.md).

- Трябва да изберете условие Повтарящо се време на изпълнение Autotune само веднъж на ден, тъй като autotune е проектиран да се изпълнява ежедневно (при всяко ново изпълнение се измествате с един ден напред и промените в профила бързо трябва да станат минимални)

  ![Autotune екран](../images/Autotune/Autotune_16.png)

- В началото е по-добре да изпълнявате Autotune през деня, за да можете да проверявате резултатите. Ако искате да изпълнявате Autotune през нощта, трябва да изберете в тригера 4 сутринта или по-късно, за да включите текущия ден в следващото изчисление на Autotune.

  ![Autotune екран](../images/Autotune/Autotune_17.png)

- Then you can select the **Autotune profile** action (in the **Loop & insulin** group)

  ![Autotune екран](../images/Autotune/Autotune_18.png)

- You can then adjust the parameters of the action for your run. In a new action, **Select profile to tune** shows the first profile of your local profile list, the **Tune days** field is empty and all days are selected. Choose the profile to tune and enter the number of **Tune days** (1 to 30).

  ![Autotune екран](../images/Autotune/Autotune_19b.png)

- After a few days, if you fully trust Autotune results and percentage of modification is low, you can modify [Autotune settings](#autotune-plugin-settings) "**Auto switch profile**" to enabled to automatically update and activate profile tuned after calculation.

Забележка: ако искате автоматично да настройвате профили за конкретни дни от седмицата (например профил за „почивни дни" и друг за „работни дни"), тогава създайте по едно правило за всеки профил, изберете същите дни в Trigger и в Autotune Action, Tune days трябва да е достатъчно високо, за да сте сигурни, че настройката ще се извърши с поне 6 или 8 дни, и не забравяйте да изберете час след 4 сутринта в условието...

- See below an example of rule that runs every working day (Monday to Friday) at 04:00 and tunes the profile "Normal" with 14 **Tune days**, working days only (so only 10 days are included in the Autotune calculation).

  ![Autotune екран](../images/Autotune/Autotune_20b.png)



## Съвети и трикове

Autotune работи с информацията, съществуваща във вашата база данни, така че ако току-що сте инсталирали AAPS на нов телефон, ще трябва да изчакате няколко дни, преди да можете да стартирате Autotune с достатъчно дни, за да получите релевантни резултати.

Autotune е просто помощно средство, важно е редовно да проверявате дали сте съгласни с изчисления профил. Ако имате някакво съмнение, променете настройките на Autotune (например броя дни) или копирайте резултатите в локален профил и коригирайте профила, преди да го използвате.

Винаги използвайте Autotune ръчно в продължение на няколко дни, за да проверите резултатите, преди да ги приложите. И едва когато напълно се доверявате на резултатите от Autotune и вариацията стане минимална между предишния профил и изчисления профил, тогава започвате да използвате Automation (никога преди това)

- Autotune може да работи много добре за някои потребители, а за други – не, затова **ако не се доверявате на резултата от Autotune, не го използвайте**

It's also important to analyze Autotune results to understand (or try to understand) why Autotune proposes these modifications

- може да имате цялостно увеличение или намаление на силата на профила ви (например увеличение на общия basal, свързано с намаление на стойностите на ISF и IC). това може да е свързано с няколко последователни дни с autosens корекция над 100% (необходима е по-голяма агресивност) или под 100% (по-чувствителни сте)
- Понякога Autotune предлага различен баланс между базалните темпове и IC/ISF (например по-нисък basal и по-агресивни IC/ISF)

Съветваме да не използвате Autotune в следните случаи:

- Не въвеждате всичките си въглехидрати
  - Ако не въвеждате корекция с въглехидрати за хипогликемия, Autotune ще види неочаквано покачване на стойността на вашето BG и ще увеличи базалните ви темпове 4 часа по-рано, което може да е обратното на това, което ви е необходимо, за да избегнете хипо, особено ако е посред нощ. Затова е важно да въвеждате всички въглехидрати, особено корекции за хипо.
- Имате много периоди с открит UAM през деня.
  - Въвели ли сте всичките си въглехидрати и правилно ли сте оценили въглехидратите си?
  - Всички UAM периоди (освен ако не въвеждате никакви въглехидрати през даден ден и categorized UAM as basal е деактивирано), всички ваши UAM периоди ще бъдат категоризирани като basal, това може значително да увеличи вашия basal (много повече от необходимото)

- Усвояването на въглехидратите ви е много бавно: ако повечето от усвояването на вашите въглехидрати се изчислява с параметъра min_5m_carbimpact (можете да видите тези периоди с малка оранжева точка в горната част на кривата на COB), изчислението на COB може да е грешно и да доведе до грешни резултати.
  - Когато спортувате, обикновено сте по-чувствителни и BG не се покачва много, така че по време на или след тренировка е обичайно да виждате някои периоди с бавни въглехидрати. Но ако твърде често имате неочаквано бавно усвояване на въглехидрати, тогава може да имате нужда от корекция на профила (по-висока стойност на IC) или min_5m_carbimpact е малко твърде висок.
- Имате „много лоши дни", например заседнали в хипергликемия няколко часа с огромно количество инсулин, за да можете да слезете в диапазона, или след смяна на сензора имате продължителни периоди с грешни BG стойности. Ако през последните няколко седмици имате само 1 или 2 „лоши дни", можете ръчно да деактивирате тези дни в изчислението на autotune, за да ги изключите от изчислението, и отново **внимателно проверете дали можете да се доверите на резултатите**
- Ако процентът на модификация е твърде голям
  - Можете да опитате да увеличите броя на дните, за да получите по-плавни резултати
