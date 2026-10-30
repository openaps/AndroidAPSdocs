(Extended-Carbs-extended-carbs-ecarbs)=
# Ištęsti angliavandeniai / "iAV"

## What are eCarbs and when are they useful?

Vykdant įprastą pompos terapiją, ištęstos dozės yra tinkamas būdas susitvarkyti su riebiu ar kitokiu lėtai įsisavinamu maistu, kuris padidina gliukozės kiekį kraujyje ilgiau nei daro insulinas. Tačiau ištęsti bolusai neturi prasmės (ir sukelia techninių sunkumų), nes jie iš esmės reiškia fiksuotą aukštą laikiną valandinę bazę, o tai prieštarauja normaliam uždaro ciklo veikimui - jis dinamiškai sureguliuoja bazinius dažnius. For details see [extended bolus](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) below.

Tačiau vis tiek reikia susitvarkyti su tokiais patiekalais. Which is why AAPS supports so called extended carbs or eCarbs.

eCarbs are carbs that are split up over several hours. Įprastam maistui, kuriame yra daugiau angliavandenių nei riebalų / baltymų, paprastai pakanka iš anksto įvesti angliavandenis (ir, jei reikia, sumažinti pradinį boliusą), kad insulinas nebūtų suleistas per anksti.  Tačiau lėčiau įsisavinamiems patiekalams, kai visų angliavandenių įvedimas reikš per daug aktyvaus insulino, iAV gali būti naudojamas kaip šios situacijos išsprendimas. iAV tiksliau imituoja, kaip angliavandeniai (arba angliavandenių ekvivalentai iš riebalų ir baltymų) yra įsisavinami organizme ir kaip įtakoja glikemijos pokyčius. Turėdamas šią informaciją, uždaras ciklas gali geriau panaudoti SMB šiems angliavandeniams valdyti, o tai gali būti vertinama kaip savotiškas dinamiškas atidėtasis boliusas (tai turėtų veikti be SMB, bet nėra toks pat efektyvus).

**Note:** eCarbs aren't limited to fatty / protein heavy meals: they can be also be used to help in any situation where there are influences that increase the blood sugar, e.g. other medication like corticosteroids.

## Mechanics of using eCarbs

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

A way to handle fat and protein with that feature is described here: [https://adriansloop.blogspot.com/2018/04/page-margin-0.html](https://adriansloop.blogspot.com/2018/04/page-margin-0.html)

______________________________________________________________________

## Recommended setup, example scenario, and important notes

The recommended setup is to use the OpenAPS SMB APS plugin, with SMBs enabled as well as the *Enable SMB with COB* preference being enabled.

A scenario e.g. for a Pizza might be to give a (partial) bolus up front via the *Bolus wizard* and then use the *Carbs* dialog to enter the remaining carbs for a duration of 4-6 hours, starting after 1 or 2 hours.

For a quicker start, the *Bolus wizard* can add eCarbs for you: choose the [carbs type](#AapsScreens-carbs-type) **Cake** or **Pizza** below the **Carbs** field (see above). The amounts and timing are fixed, so use the *Carbs* dialog instead if you want other values.

**Important notes:** You'll need to try out and see which concrete values work for you of course. You might also carefully adjust the setting *max minutes of basal to limit SMB to* to make the algorithm more or less aggressive. Laikantis mitybos, kuriojee mažai angliavandenių, ir daugiau riebalų bei baltymų, gali pakakti įvesti tik iAV be įprasto boluso maistui (plačiau apie tai aukščiau tinklaraščio įraše). Įvedus iAV, Priežiūros portale automatiškai sukuriamas užrašas, kad būtų lengviau patikrinti ir pakoreguoti įrašus.

(extended-bolus-and-why-they-wont-work-in-closed-loop-environment)=
## Extended bolus and why they won't work in closed-loop environment?

Kaip jau minėta aukščiau, ištęstas arba vadinamasis daugiabangis bolusas neveikia su uždaru ciklu. [See below](#why-extended-boluses-wont-work-in-a-closed-loop-environment) for details

(Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)=
### Ištęstinis bolusas ir perjungimas į atvirą ciklą - tik Dana ir Insight pompoms

Kai kurie žmonės vis dar prašė parinkties AAPS naudoti ištęstinius bolusus, nes jie norėjo su specialiu maistu elgtis taip, kaip įpratę.

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
### Kodėl ištęstas bolusas neveiks uždaro ciklo aplinkoje

1. Ciklas nustato, kad turi būti suleista 1.55 vv/h. Algoritmui nesvarbu, ar suleidžiama kaip ištęstas boliusas, ar kaip TBR (laikina valandinė bazė). Tiesą sakant, kai kurios pompos naudoja ištęstus bolusus. Kas tada atsitinka? Most pump drivers then stop the extended bolus -> You didn't even need to start it.

2. Jeigu įvedėte ištęstą bolusą, kas turėtų atsitikti modelyje?

   1. Ar jis turėtų būti laikomas neutraliu dydžiu kartu su nustatyta valandine baze ir ciklas turėtų remtis juo kaip pagrindu? Tada ciklas taip pat turėtų galimybę sumažinti bolusą, pvz., jei glikemija nukrenta per žemai ir visas "neutralus" insulinas įsisavintas?
   2. Ar reikia tiesiog pridėti ištęstą bolusą? Taigi turėtų būti leidžiama toliau uždaram ciklui veikti? Net blogiausios hipoglikemijos atveju? Nemanau, kad tai geras dalykas: kai yra numatoma hipoglikemija, tačiau nėra imamasi jokių priemonių jos išvengti?

3. Į aktyvaus insulino kiekį, kurį kaupia ištęstas bolusas, yra atsižvelgiama po 5 minučių atliekant kitą skaičiavimą. Atitinkamai ciklas sumažintų valandinę bazę. So not much changes... except that the possibility of hypo avoidance is taken.
