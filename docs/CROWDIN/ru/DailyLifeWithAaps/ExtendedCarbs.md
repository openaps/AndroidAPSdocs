(Extended-Carbs-extended-carbs-ecarbs)=
# Пролонгированные (расширенные) углеводы / "eCarbs"

## Что такое eCarbs и когда они полезны?

При обычной помповой терапии пролонгированные болюcы-хороший способ справиться с жирной или медленно усваиваемой пищей, которая увеличивает уровень глюкозы в крови дольше, чем работает инсулин. Однако в контексте алгоритма ИПЖ пролонгированные болюсы не имеют большого смысла (и создают технические трудности), поскольку они представляют собой по сути, фиксированную высокую временную базальную скорость, которая идет вразрез с тем, как работает цикл ИПЖ, который должен динамически корректировать базальную скорость. Подробнее см [пролонгированный болюс](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) ниже.

Однако необходимость работать с такой едой все же существует. Which is why AAPS supports so called extended carbs or eCarbs.

eCarbs are carbs that are split up over several hours. Для стандартного питания с бОльшим содержанием углеводов, чем жира/белка, введение углеводов заранее (и при необходимости уменьшение начального болюса), как правило, достаточно для предотвращения преждевременной подачи инсулина.  Но для медленно поглощающейся еды, при которой предварительное введение углеводов приводит к слишком большой величине активного инсулина IOB из-за микроболюсов SMB, eCarbs могут применяться для более точного моделирования того, как усваиваются углеводы и влияют на уровень глюкозы в крови. С помощью этой информации алгоритм может управлять микроболюсами SMB которые выступают как пролонгированный болюс на такие углеводы ( должно работать и без SMB, но, возможно, менее эффективно).

**Note:** eCarbs aren't limited to fatty / protein heavy meals: they can also be used to help in any situation where there are influences that increase the blood sugar, e.g. other medication like corticosteroids.

## Механизмы использования eCarbs

To enter eCarbs, open the **Carbs** dialog (**Treatments** → **Carbs**), enter the total carbs, set a **Duration**, and optionally shift the start with **Carb time** (*numbers below are just examples, you will need to try your own values to arrive at satisfactory glucose response for your use-cases*):

![Ввод углеводов](../images/eCarbs_Dialog.png)

The eCarbs on the main screen: the number in brackets in the **COB** field shows the carbs still to come, and the **COB** graph shows each future eCarbs entry as an orange marker. If you don't see a **COB** graph, add one with **Add graph** below the graphs (see [AAPS screens](../DailyLifeWithAaps/AapsScreens.md)).

![eCarbs in the COB field and on the COB graph](../images/eCarbs_Graph.png)

(AapsScreens-carbs-type)=
## Carbs type in the Bolus wizard: bread, cake or pizza

In the [Bolus wizard](#aaps-screens-bolus-wizard), three buttons below the **Carbs** field let you choose how fast your meal is absorbed. Pick one before you confirm. Depending on the type, **AAPS** takes a part of the carbs you typed as normal carbs, and adds [extended carbs ("eCarbs")](#Extended-Carbs-extended-carbs-ecarbs) later for slow, rich meals. Press the **(i)** icon next to the buttons to see the typical foods for the selected type and what it does to your carbs.

| Type                | Typical foods (examples from the app)                                                                | Carbs now, used for the bolus | eCarbs added                                         |
| ------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------- | ---------------------------------------------------- |
| **Bread** (default) | Bread, savory pastries, yogurt, fruit, potatoes, rice, oatmeal, vegetables                           | 100 %                         | Отсутствует                                          |
| **Cake**            | Dumplings, pasta, Asian dishes rich in carbs and fats, sweet and yeast pastries, cereals, honey, jam | 90 %                          | 20 %, starting 60 minutes later, spread over 2 hours |
| **Pizza**           | Lasagna, pizza, hamburgers, fries, baked potatoes, chips                                             | 80 %                          | 35 %, starting 60 minutes later, spread over 3 hours |

**Example**: you type 100 g and choose **Pizza**. The bolus is calculated for 80 g, recorded now. 35 g of eCarbs start 1 hour later and are spread over 3 hours.

Good to know:
* This is not a simple split: with **Cake** and **Pizza**, the carbs recorded add up to **more than you typed** (110 % and 115 %). The extra is only in the eCarbs.
* The bolus only covers the carbs taken now. **AAPS** does not bolus up front for the eCarbs: the loop takes them into account once they start, like any other [eCarbs](#Extended-Carbs-extended-carbs-ecarbs).
* If you set a **Carb time**, the eCarbs start 60 minutes after that time.
* The confirmation dialog shows the eCarbs on their own line, _e.g._ "eCarbs 35g / 3h (+60min)".
* Grams are rounded down to whole numbers.
* The percentages, delays and durations are fixed; they can't be changed in the settings.
* The choice is not remembered: the wizard opens on **Bread** every time.

______________________________________________________________________

Способ компенсации жиров и белков при помощи этой функции описан здесь: [https://adriansloop.blogspot.com/2018/04/page-margin-0.html](https://adriansloop.blogspot.com/2018/04/page-margin-0.html)

______________________________________________________________________

## Рекомендуемая настройка, пример сценария и важные заметки

Рекомендуется использовать модуль OpenAPS SMB APS, с поддержкой SMB, а также включенным параметром *разрешить микроболюсы SMB при активных углеводах COB*.

A scenario e.g. for a Pizza might be to give a (partial) bolus up front via the *Bolus wizard* and then use the *Carbs* dialog to enter the remaining carbs for a duration of 4-6 hours, starting after 1 or 2 hours.

For a quicker start, the *Bolus wizard* can add eCarbs for you: choose the [carbs type](#AapsScreens-carbs-type) **Cake** or **Pizza** below the **Carbs** field (see above). The amounts and timing are fixed, so use the *Carbs* dialog instead if you want other values.

**Важное замечание:** Нужно попробовать и посмотреть, какие конкретные значения подходят именно вам, конечно. Можно также подстроить параметр *max minutes of basal для ограничения SMB*, тем самым делая алгоритм более (менее) агрессивным. При низком содержании углеводов, высоким содержании жиров и белков, eCarbs может быть достаточен, чтобы обойтись без дополнительного контроля болюсов (см. пост блога выше). При создании eCarbs в портале терапии создается также запись для документирования, упрощающая итерацию и ввод данных.

(extended-bolus-and-why-they-wont-work-in-closed-loop-environment)=
## Extended boluses and why they don't work in a closed-loop environment

Как упоминалось выше, пролонгированные или многоволновые болизы не работают в замкнутом цикле. [See below](#why-extended-boluses-won-t-work-in-a-closed-loop-environment) for details

(Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)=
### Пролонгированный болюс и переключение на незамкнутый цикл - только для помп Dana и Insight

Некоторые пользователи просили предусмотреть пролонгированные болюсы в ААПС, так как хотели бы компенсировать специфические продукты питания привычным для себя образом.

That's why **AAPS** offers an extended bolus for users of Dana and Insight pumps: open **Manage** and select **Extended Bolus**.

**AAPS** first warns you that the closed loop will be stopped while the extended bolus runs. Tap **OK** to continue:

![Warning: extended bolus stops closed loop mode](../images/extended_bolus_stops_loop.png)

Enter the **Insulin** amount and the **Duration**, then tap the confirm button at the bottom and **OK**:

![Extended bolus dialog with 2 U over 60 minutes](../images/extended_bolus_dialog.png)

On the Insight pump, the extended bolus is *not available* if [TBR emulation](#Accu-Chek-Insight-Pump-settings-in-aaps) is used.

While the extended bolus is running, the loop runs in **Open Loop** mode (the loop icon on the main screen changes), and closed loop is switched on again automatically when the extended bolus ends:

![Open Loop icon on the main screen while an extended bolus is running](../images/extended_bolus_main_screen.png)

The **Manage** menu shows a **Cancel** button with the rate and the elapsed / total time (for example **Cancel 2.00 U/h 1/60'**). Tap it to stop the extended bolus early:

![Cancel button of a running extended bolus in the Manage menu](../images/extended_bolus_running_manage.png)

(почемуextended-boluses-won-t-work-in-a-closed-loop-environment)=
### Почему пролонгированные болюсы не будут работать в среде замкнутого цикла

1. Цикл определяет, что скорость базала должна быть 1.55 ед/ч. Для алгоритма неважно, подается при этом пролонгированный болюс или обычный временный базал TBR. На самом деле, на некоторых помпах возможен пролонгированный болюс. Что должно произойти в этом случае? Большинство драйверов помп останавливает пролонгированный болюс-> Можно было даже не пытаться его запустить.

2. Если в качестве входных данных задан пролонгированный болюс, что должно произойти?

   1. Будет ли алгоритм считать базу нейтральной и работать невзирая на нее? Должен ли он также уметь уменьшать болюс, например, при низкой ГК, когда "нейтральный" инсулин уже израсходован?
   2. Следует ли просто добавить пролонгированный болюс? То есть, алгоритму петли нужно просто позволить продолжить? Даже при жесточайшей гипо? Не думаю, что это правильно: предвидится гипогликемия, но не предотвращается?

3. Активный инсулин IOB, который создается пролонгированным болюсом, материализуется через 5 минут при следующем прохождении. Соответственно, цикл снизил бы базал. Поэтому не многое меняется... кроме того, что предпринимается попытка избежать гипо.
