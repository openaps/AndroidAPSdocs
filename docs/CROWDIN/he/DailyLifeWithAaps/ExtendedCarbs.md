(Extended-Carbs-extended-carbs-ecarbs)=
# פחמימות ממושכות

## מהן פחמימות ממושכות ומתי משתמשים בהן?

בטיפול רגיל במשאבה, בולוסים מושהים הם דרך טובה להתמודד עם ארוחות שומניות או ארוחות אחרות שנספגות לאט ומעלות את רמת הגלוקוז בדם זמן רב יותר מהשפעת האינסולין. עם זאת, בהקשר של לולאה, בולוסים מושהים אינם הגיוניים כל כך (ומציבים קשיים טכניים), מכיוון שהם בעצם מינון בזאלי זמני קבוע גבוה, הנוגד את אופן פעולת הלולאה, שהוא התאמה דינמית של המינון בזאלי. For details see [extended bolus](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) below.

אף על פי כן, נותר הצורך להתמודד עם ארוחות כאלה. Which is why AAPS supports so called extended carbs or eCarbs.

eCarbs are carbs that are split up over several hours. בארוחות סטנדרטיות עם יותר פחמימות מאשר שומן\חלבון, רישום פחמימות מקדים (והפחתת הבולוס הראשוני במידת הצורך) מספיקה בדרך כלל כדי למנוע מתן אינסולין מוקדם מדי.  אבל עבור ארוחות איטיות יותר, בולוס על כל הפחמימות מראש גורם ליותר מדי אינסולין פעיל מ-SMB, ניתן להשתמש בפחמימות ממושכות כדי לדמות בצורה נכונה יותר את ספיגת הפחמימות (או המקבילה לפחמימות שתזינו עבור חלבון או שומן) והשפעתה על רמת הגלוקוז בדם. עם המידע הזה, הלולאה יכולה להזריק בולוסי SMB בהדרגה כדי להתמודד עם אותן פחמימות, אפשר לחשוב על כך כבולוס מושהה דינמי (זה אמור לעבוד גם ללא SMBs, אבל עם פחות יעילות).

**הערה:** פחמימות ממושכות אינן מוגבלות לארוחות כבדות העשירות בשומן או חלבון: ניתן להשתמש בהן גם כדי לעזור בכל מצב שבו יש השפעות שמעלות את רמת הסוכר בדם כמו שימוש בתרופות כגון קורטיקוסטרואידים.

## אופן השימוש בפחמימות ממושכות

To enter eCarbs, open the **Carbs** dialog (**Treatments** → **Carbs**), enter the total carbs, set a **Duration**, and optionally shift the start with **Carb time** (*numbers below are just examples, you will need to try your own values to arrive at satisfactory glucose response for your use-cases*):

![Enter carbs](../images/eCarbs_Dialog.png)

The eCarbs on the main screen: the number in brackets in the **COB** field shows the carbs still to come, and the **COB** graph shows each future eCarbs entry as an orange marker. If you don't see a **COB** graph, add one with **Add graph** below the graphs (see [AAPS screens](../DailyLifeWithAaps/AapsScreens.md)).

![eCarbs in the COB field and on the COB graph](../images/eCarbs_Graph.png)

(AapsScreens-carbs-type)=
## Carbs type in the Bolus wizard: bread, cake or pizza

In the [Bolus wizard](#aaps-screens-bolus-wizard), three buttons below the **Carbs** field let you choose how fast your meal is absorbed. Pick one before you confirm. Depending on the type, **AAPS** takes a part of the carbs you typed as normal carbs, and adds [extended carbs ("eCarbs")](#Extended-Carbs-extended-carbs-ecarbs) later for slow, rich meals. Press the **(i)** icon next to the buttons to see the typical foods for the selected type and what it does to your carbs.

| Type                | Typical foods (as listed in the app)                                                                 | Carbs now, used for the bolus | eCarbs added                                         |
| ------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------- | ---------------------------------------------------- |
| **Bread** (default) | Bread, savory pastries, yogurt, fruit, potatoes, rice, oatmeal, vegetables                           | 100 %                         | None                                                 |
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

דרך לטפל בשומן וחלבון בעזרת תכונה זו מתוארת כאן: [https://adriansloop.blogspot.com/2018/04/page-margin-0.html](https://adriansloop.blogspot.com/2018/04/page-margin-0.html)

______________________________________________________________________

## תצורה מומלצת, תרחיש לדוגמה והערות חשובות

התצורה המומלצת היא להשתמש בתוסף OpenAPS SMB, כאשר בולוסי SMB מופעלים וכאשר האפשרות *הפעלת SMB עם פחמ' פעילות* מופעלת.

A scenario e.g. for a Pizza might be to give a (partial) bolus up front via the *Bolus wizard* and then use the *Carbs* dialog to enter the remaining carbs for a duration of 4-6 hours, starting after 1 or 2 hours.

For a quicker start, the *Bolus wizard* can add eCarbs for you: choose the [carbs type](#AapsScreens-carbs-type) **Cake** or **Pizza** below the **Carbs** field (see above). The amounts and timing are fixed, so use the *Carbs* dialog instead if you want other values.

**הערות חשובות:** חובה לבדוק בעצמכם ולגלות מהם הערכים המתאימים לכם. תוכלו גם להתאים בזהירות את ההגדרה *מקסימום הדקות של בזאלי אליו SMB מוגבל* כדי לגרום לאלגוריתם להיות אגרסיבי יותר או פחות. בארוחות דלות פחמימות שעתירות שומן\חלבון זה עשוי להספיק להשתמש רק בפחמימות ממושכות ללא בולוסים מקדימים ידניים (ראו את הפוסט בבלוג למעלה). כאשר נוצר רישום פחמימות ממושכות, נוצרת גם תיעוד בנייטסקאוט לתיעוד כל התשומות, כדי להקל על איטרציה ושיפור התשומות.

(extended-bolus-and-why-they-wont-work-in-closed-loop-environment)=
## בולוס מושהה ומדוע הוא לא יעבוד במערכת לולאה סגורה?

כפי שהוזכר לעיל בולוסים ממושכים או מרובי גלים לא באמת עובדים בסביבת לולאה סגורה. [See below](#why-extended-boluses-wont-work-in-a-closed-loop-environment) for details

(Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)=
### בולוס מושהה ומעבר ללולאה פתוחה - משאבת Dana ו-Insight בלבד

חלק מהאנשים ביקשו אפשרות להשתמש בבולוס מושהה ב-AAPS בכל זאת מכיוון שהם רצו להתייחס למזונות מיוחדים כפי שהיו רגילים בעבר.

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
### הסיבה לכך שבולוסים מושהים לא יעבדו בלולאה סגורה

1. הלופ קובע שיש לספק עכשיו 1.55 יח'\שעה. לאלגוריתם לא משנה אם המינון הזה יוזרק כבולוס מושהה או כמינון בזאלי זמני. למעשה, חלק מהמשאבות משתמשות בבולוס המושהה. מה צריך לקרות? רוב המשאבות מפסיקות את הבולוס המושהה -> לא היינו צריכים להפעיל אותו.

2. אם הזנו בולוס מושהה מראש, מה צריך לקרות באלגוריתם?

   1. האם זה אמור להיות מחושב כנייטרלי יחד עם המינון הבזאלי בחישוב של הלולאה? ואז הלולאה אמורה להיות מסוגלת גם להפחית את הבולוס אם למשל יורדים מדי וכל האינסולין ה"נייטרלי" נלקח?
   2. האם פשוט להוסיף את הבולוס המושהה? אז פשוט צריך לתת ללופ להמשיך? אפילו בהיפו הכי חריף? זהו אינו פיתרון טוב, יש היפו צפוי אבל אסור למנוע אותו?

3. השפעת האינסולין הפעיל שהמצטבר בגלל הבולוס המושהה מתממשת לאחר 5 דקות במדידה הבאה. בהתאם, הלולאה תיתן פחות בזאלי. כך אין הרבה שינויים, חוץ משנבחרה האפשרות בה יש הימנעות מהיפוגליקמיה.
