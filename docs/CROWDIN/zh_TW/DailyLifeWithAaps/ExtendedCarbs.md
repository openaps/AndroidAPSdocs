(Extended-Carbs-extended-carbs-ecarbs)=
# 延長碳水化合物 / "eCarbs"

## 什麼是 eCarbs？什麼時候使用 eCarbs 有效？

在一般幫浦療法中，延長注射（延長胰島素注射）是應對高脂肪或慢速吸收餐食的好方法，這些餐食會讓血糖在胰島素效果結束後仍然上升。然而，在循環系統中，延長注射並不那麼適用（且技術上有困難），因為他基本上是一個固定的高臨時基礎率，而循環系統的工作原理是動態調整基礎率。有關詳細資訊，請參見以下[延長注射](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment)。

然而，處理這類餐食的需求仍然存在。 Which is why AAPS supports so called extended carbs or eCarbs.

eCarbs are carbs that are split up over several hours. 對於高碳水化合物的標準餐食，提前輸入碳水化合物（如果需要，可以減少初始注射量）通常足以避免過早的胰島素注射。但是對於吸收較慢的餐食，如果完全提前輸入碳水化合物會導致來自 SMB 的 IOB 過多，eCarbs 可以更準確地模擬碳水化合物（以及你為其他營養素輸入的任何碳水化合物等效物）的吸收，並影響血糖。有了這些資訊，循環系統可以更逐步地管理 SMB 來處理這些碳水化合物，這可以被視為一種動態的延長注射（即使沒有 SMB 也應該有效，但可能不如有 SMB 時效果好）。

**注意：** eCarbs 不僅限於高脂肪/高蛋白餐食：他們也可以幫助應對任何會提高血糖的情況，例如服用其他藥物（如類固醇）。

## 使用 eCarbs 的操作方式

To enter eCarbs, open the **Carbs** dialog (**Treatments** → **Carbs**), enter the total carbs, set a **Duration**, and optionally shift the start with **Carb time** (*numbers below are just examples, you will need to try your own values to arrive at satisfactory glucose response for your use-cases*):

![輸入碳水化合物](../images/eCarbs_Dialog.png)

The eCarbs on the main screen: the number in brackets in the **COB** field shows the carbs still to come, and the **COB** graph shows each future eCarbs entry as an orange marker. If you don't see a **COB** graph, add one with **Add graph** below the graphs (see [AAPS screens](../DailyLifeWithAaps/AapsScreens.md)).

![eCarbs in the COB field and on the COB graph](../images/eCarbs_Graph.png)

(AapsScreens-carbs-type)=
## Carbs type in the Bolus wizard: bread, cake or pizza

In the [Bolus wizard](#aaps-screens-bolus-wizard), three buttons below the **Carbs** field let you choose how fast your meal is absorbed. Pick one before you confirm. Depending on the type, **AAPS** takes a part of the carbs you typed as normal carbs, and adds [extended carbs ("eCarbs")](#Extended-Carbs-extended-carbs-ecarbs) later for slow, rich meals. Press the **(i)** icon next to the buttons to see the typical foods for the selected type and what it does to your carbs.

| Type                | Typical foods (as listed in the app)                                                                 | Carbs now, used for the bolus | eCarbs added                                         |
| ------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------- | ---------------------------------------------------- |
| **Bread** (default) | Bread, savory pastries, yogurt, fruit, potatoes, rice, oatmeal, vegetables                           | 100 %                         | 無平滑處理                                                |
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

此功能用於處理脂肪和蛋白質的方法描述在此處：[https://adriansloop.blogspot.com/2018/04/page-margin-0.html](https://adriansloop.blogspot.com/2018/04/page-margin-0.html)

______________________________________________________________________

## 推薦設置、範例場景及重要注意事項

推薦設置是使用 OpenAPS SMB APS 外掛，啟用 SMB 並啟用 *COB 啟用 SMB* 偏好設定。

A scenario e.g. for a Pizza might be to give a (partial) bolus up front via the *Bolus wizard* and then use the *Carbs* dialog to enter the remaining carbs for a duration of 4-6 hours, starting after 1 or 2 hours.

For a quicker start, the *Bolus wizard* can add eCarbs for you: choose the [carbs type](#AapsScreens-carbs-type) **Cake** or **Pizza** below the **Carbs** field (see above). The amounts and timing are fixed, so use the *Carbs* dialog instead if you want other values.

**重要注意事項：**當然，你需要嘗試看看哪些具體數值對你有效。你還可以仔細調整*限制 SMB 的最大基礎率分鐘數*設置，以使演算法更積極或較不積極。對於低碳水化合物、高脂肪/高蛋白餐食，可能僅使用 eCarbs 就足夠，不需要手動注射（詳情請參閱上述的部落格文章）。當生成 eCarbs 時，系統也會在 Careportal 中生成一個筆記來紀錄所有輸入，這樣可以更容易地進行調整和改進。

(extended-bolus-and-why-they-wont-work-in-closed-loop-environment)=
## 延長注射及其為何在閉環系統中無法運作？

如上所述，延長或多波段注射在閉環系統中並不真正有效。[請參閱下方詳情](#why-extended-boluses-wont-work-in-a-closed-loop-environment)

(Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)=
### 延長注射與切換至開放循環 - 僅限 Dana 與 Insight 幫浦

一些人希望 AAPS 能提供延長注射選項，因為他們希望以自己習慣的方式處理特殊食物。

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

(why-extended-boluses-won-t-work-in-a-closed-loop-environment)=
### 為什麼延長注射在閉環系統中無法運作

1. 循環系統決定現在應注射 1.55U/h。無論這是透過延長注射還是 TBR 提供，對於演算法來說沒有區別。實際上，有些幫浦使用延長注射。那麼接下來該怎麼辦？大多數幫浦驅動程式會停止延長注射——> 你甚至不需要開始他。

2. 如果你已經輸入了延長注射，模型應該如何處理？

   1. 他應該與基礎率一起被視為中立並在上面循環嗎？然後，循環應該能夠減少注射量，如果，例如，你的血糖過低並且所有「中立」的胰島素都被移除了嗎？
   2. 延長注射應該被直接加入嗎？所以應該允許循環繼續運作嗎？即使是在最嚴重的低血糖情況下？我覺得這不太好：預見到了低血糖，但不應該加以預防嗎？

3. 延長注射所累積的活性胰島素會在5分鐘後的下一次運作時出現。因此，循環將會提供較少的基礎率。所以變化不大...除了避免低血糖的可能性被取消了。
