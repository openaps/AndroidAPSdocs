(Extended-Carbs-extended-carbs-ecarbs)=
# Vertraagde koolhydraten / "eCarbs"

## What are eCarbs and when are they useful?

Bij reguliere pomptherapie zijn vertraagde bolussen / multiwave bolussen handig voor vette maaltijden (pizza, pasta, pannenkoeken etc) die je bloedglucose lange tijd laten stijgen, langer dan de insuline bij een normale bolus werkzaam zou zijn. In een closed loop is dat echter niet zo zinvol (en geeft het technische problemen) omdat vertraagde/multiwave bolussen door de pomp worden uitgevoerd als een langdurige en vooraf gedefinieerde hoge basaal. Dat conflicteert met de loop, die de basaalstanden juist dynamisch aanpast. For details see [extended bolus](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) below.

En dus moet de loop op een andere manier omgaan met dit soort maaltijden. Which is why AAPS supports so called extended carbs or eCarbs.

eCarbs are carbs that are split up over several hours. Voor standaard maaltijden met meer koolhydraten dan vet/eiwit, is het gebruik van eCarbs niet persé nodig. Daarbij is het voldoende om een deel van de koolhydraten in te voeren via de bolus calculator (daarvoor wordt dan meteen gebolust), en het resterende deel van de koolhydraten in te voeren via de Koolhydraten knop (daarvoor geeft de loop gedurende een langere periode SMB's af, gebaseerd op de BG stijging die hij ziet). Dit voorkomt een al te snelle insulineafgifte en dus een hypo na de maaltijd. <br>  Maar voor langzamer absorberende maaltijden kunnen beter wel eCarbs worden gebruikt. Anders zou (zeker bij gebruik van SMB) de IOB veel te snel oplopen terwijl de maaltijd je BG slechts langzaam laat stijgen, met een hypo als resultaat. Dankzij eCarbs wordt veel beter gesimuleerd hoe de koolhydraten (en evt. ook alle koolhydraat-equivalenten die je invoert voor vetten/eiwitten) worden geabsorbeerd en hoe die invloed hebben op je BG. Met deze informatie kan de loop geleidelijk aan SMB's afgeven om die koolhydraten aan te pakken. Deze methode zou je als een dynamische vorm van een vertraagde/multiwave bolus kunnen zien. (Opmerking: we gaan er hierbij vanuit dat je SMB's gebruikt, dit zou ook moeten werken zonder SMB's, maar is waarschijnlijk minder effectief).

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

**Important notes:** You'll need to try out and see which concrete values work for you of course. You might also carefully adjust the setting *max minutes of basal to limit SMB to* to make the algorithm more or less aggressive. Voor maaltijden met nauwelijks koolhydraten en een hoog vet/eiwitgehalte kan het genoeg zijn om alleen eCarbs te gebruiken en geen bolus (zie de blogpost hierboven). Iedere keer dat je eCarbs invoert, wordt er in jouw Careportal automatisch een opmerking toegevoegd. Hierdoor kun je de eerdere keren gemakkelijk terugvinden, zodat je jouw aanpak kunt evalueren en verbeteren voor de volgende keer. Of gewoon herhalen wat je eerder deed, als dat voor jou goed werkte.

(extended-bolus-and-why-they-wont-work-in-closed-loop-environment)=
## Extended bolus and why they won't work in closed-loop environment?

Zoals hierboven vermeld, werken vertraagde of multiwave bolussen niet echt in een closed loop. [See below](#why-extended-boluses-wont-work-in-a-closed-loop-environment) for details

(Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)=
### Vertraagde bolus en overschakelen naar open loop - alleen voor Dana en Insight pomp

Sommige mensen wilden dolgraag een optie hebben om een vertraagde bolus te kunnen gebruiken in AAPS omdat ze voor bepaalde voedingsmiddelen willen bolussen zoals ze eerder gewend waren.

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
### Waarom vertraagde bolussen niet werken in een closed loop

1. The loop determines that now 1.55U/h is to be delivered. Whether this is delivered as an extended bolus or TBR does not matter to the algorithm. In fact, some of the pumps use the extended bolus. What should happen then? Most pump drivers then stop the extended bolus -> You didn't even need to start it.

2. If you had the extended bolus as input, what should happen in the model?

   1. Should it be considered neutral together with the BR and looped on it? Then the loop should also be able to reduce the bolus if, for example, you get too low and all the "neutral" insulin is taken away?
   2. Should the extended bolus simply be added? So the loop should simply be allowed to continue? Even in the worst hypo? I don't think this is so good: A hypo is foreseen but it must not be prevented?

3. The IOB that the extended bolus builds up materializes after 5 minutes at the next run. Accordingly, the loop would give less basal. So not much changes... except that the possibility of hypo avoidance is taken.
