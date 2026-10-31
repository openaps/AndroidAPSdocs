(Extended-Carbs-extended-carbs-ecarbs)=
# Yayma karbonhidratlar / "yKarb"

## yKarb nedir ve ne zaman faydalıdır?

Düzenli bir pompa tedavisinde yayma boluslar, kan şekerini insülinin etkisinden daha uzun sürede artıran yağlı veya başka türlü yavaş emilen yemeklerle baş etmenin iyi bir yoludur. Bununla birlikte bir döngü sistemi kullanıyorsanız uzatılmış boluslar o kadar anlamlı değildir (ve teknik zorluklar yaratır), çünkü yayma bolus temelde sabit bir yüksek geçici bazal hızdır, bu da döngü mantığına aykırıdır, çünkü bazal hızı dinamik olarak ayarlanır. For details see [extended bolus](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) below.

Döngü kullansanız da bu tip yemeklerle başetme ihtiyacı hala vardır. Which is why AAPS supports so called extended carbs or eCarbs.

eCarbs are carbs that are split up over several hours. Yağ/protein içerikli olmayan standart öğünler için, karbonhidratları önden girmek (ve gerekirse ilk bolusu azaltmak) genellikle çok erken insülin verilmesini önlemek için yeterlidir.  Ancak, tam karbonhidrat girişinin SMB etkisiyle çok fazla AİNS ile sonuçlandığı daha yavaş emilen yemekler için, yKarb, karbonhidratların (ve diğer makrobesinler için girdiğiniz karbonhidrat eşdeğerlerinin) nasıl emildiğini ve kan şekerini nasıl etkilediğini daha doğru bir şekilde simüle etmek için kullanılabilir. Bu bilgi ile döngü, dinamik yayma bolus olarak görülebilen bu karbonhidratlarla başa çıkmak için SMB'leri daha kademeli olarak yönetebilir (Normalde döngü SMB'ler olmadan da çalışmalıdır, ancak muhtemelen etkisi daha az olacaktır).

**Note:** eCarbs aren't limited to fatty / protein heavy meals: they can also be used to help in any situation where there are influences that increase the blood sugar, e.g. other medication like corticosteroids.

## yKarb kullanmanın mekaniği

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

Aşağıdaki linkte özellikle yağ ve proteini işlemenin bir yolu açıklanmaktadır: [https://adriansloop.blogspot.com/2018/04/page-margin-0.html](https://adriansloop.blogspot.com/2018/04/page-margin-0.html)

______________________________________________________________________

## Önerilen kurulum, örnek senaryo ve önemli notlar

Önerilen kurulum, SMB'ler etkinken ve *AKRB ile SMB'yi Etkinleştir* tercihi etkinken OpenAPS SMB APS eklentisini kullanmaktır.

A scenario e.g. for a Pizza might be to give a (partial) bolus up front via the *Bolus wizard* and then use the *Carbs* dialog to enter the remaining carbs for a duration of 4-6 hours, starting after 1 or 2 hours.

For a quicker start, the *Bolus wizard* can add eCarbs for you: choose the [carbs type](#AapsScreens-carbs-type) **Cake** or **Pizza** below the **Carbs** field (see above). The amounts and timing are fixed, so use the *Carbs* dialog instead if you want other values.

**Önemli notlar:** Elbette sizin için hangi somut değerlerin işe yaradığını denemeniz ve görmeniz gerekecek. Algoritmayı daha fazla veya daha az agresif hale getirmek için *SMB'yi sınırlamak için maksimum bazal dakika* ayarını dikkatli bir şekilde ayarlayabilirsiniz. Düşük karbonhidratlı, yüksek yağlı/proteinli öğünlerde, manuel bolus olmadan yalnızca yKarb kullanmak yeterli olabilir (yukarıdaki blog gönderisine bakın). yKarb oluşturulduğunda, girdileri yinelemeyi ve iyileştirmeyi kolaylaştırmak için tüm girdileri belgelemek için bir Careportal notu da oluşturulur.

(extended-bolus-and-why-they-wont-work-in-closed-loop-environment)=
## Yayma bolus ve neden kapalı döngü ortamında çalışmaz?

Yukarıda belirtildiği gibi, yayma veya çoklu yayma boluslar, kapalı döngü ortamında gerçekten çalışmaz. [See below](#why-extended-boluses-won-t-work-in-a-closed-loop-environment) for details

(Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)=
### Yayma bolus ve açık döngüye geçiş - yalnızca Dana ve Insight pompası

Bazı insanlar, özel gıdaları alıştıkları şekilde tedavi uygulamak istedikleri için, yine de AAPS'de yayma bolus kullanmak istiyorlardı.

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
### Yayma boluslar neden kapalı döngü ortamında çalışmaz?

1. Şimdi döngü 1,55Ü/s teslim edileceğini belirler. Bunun yayma bir bolus olarak mı yoksa GBO olarak mı iletildiği, algoritma için önemli değildir. Aslında, bazı pompalar yayma bolusu kullanır. O zaman ne olmalı? Çoğu pompa sürücüsü daha sonra yayma bolusu durdurur -> Başlatmanıza bile gerek yoktur.

2. Girdi olarak yayma bolus yaptıysanız, modelde ne olması gerekir?

   1. Bazal oran ile birlikte nötr olarak kabul edilmeli ve döngüye devam mı edilmeli? O zaman, örneğin, düşük yaşarsanız ve tüm "nötr" insülin alınırsa, döngü de bolusu azaltabilmelidir?
   2. Yayma bolus basitçe eklenmeli mi? Yani döngünün devam etmesine izin verilmeli mi? En kötü hipoda bile mi? Bunun çok iyi olduğunu düşünmüyorum: Bir hipo öngörülüyor ama önlenmemeli mi?

3. Yayma bolusun oluşturduğu AİNS, algoritmanın bir sonraki çalışmasında yani 5 dakika sonra eklenir. Buna göre, döngü daha az bazal verecektir. Yani fazla bir değişiklik yok... hipodan kaçınma olasılığı dışında.
