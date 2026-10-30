(Extended-Carbs-extended-carbs-ecarbs)=
# Carbohidrați extinși / eCarbs

## What are eCarbs and when are they useful?

Cu o pompă obișnuită, bolusurile extinse reprezintă o modalitate bună de a face față meselor grase sau altor mese absorbite lent care cresc glicemia pe termen mai lung decât al acțiunii insulinei. Cu toate acestea, într-un context de buclă, bolusurile extinse nu au nici un sens (și prezintă dificultăți tehnice); pentru că sunt de fapt o rată bazală fixă și temporară, care contravine modului de funcționare a buclei, care ajustează dinamic rata bazală. For details see [extended bolus](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) below.

Cu toate acestea, încă mai există necesitatea de a face față acestor mese. Which is why AAPS supports so called extended carbs or eCarbs.

eCarbs are carbs that are split up over several hours. Pentru mesele standard cu mai mulți carbohidrați decât grăsimi/proteină, de obicei este suficient să se introducă carbohidrații înainte (și să se reducă valoarea bolusului inițial, dacă este necesar) pentru a preveni administrarea prea rapidă a insulinei.  Dar pentru mesele cu absorbție mai lentă, unde introducerea întregii cantități de carbohidrați de la început duce la un surplus de insulină activă (IOB) din cauza micro-bolusurilor automate (SMB), se pot folosi carbohidrații extinși pentru a simula mai precis modul în care carbohidrații (și orice echivalent de carbohidrați introdus pentru alți macronutrienți) sunt absorbiți și influențează glicemia. Cu această informație, bucla poate administra SMB mai granular pentru a face față acestor carbohidrați, ceea ce poate fi văzut ca un bolus extins dinamic (acest lucru ar trebui să funcționeze și fără SMB, dar este probabil mai puțin eficace).

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
| **Bread** (default) | Bread, savory pastries, yogurt, fruit, potatoes, rice, oatmeal, vegetables                           | 100 %                         | Nimic                                                |
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

**Important notes:** You'll need to try out and see which concrete values work for you of course. You might also carefully adjust the setting *max minutes of basal to limit SMB to* to make the algorithm more or less aggressive. În cazul meselor cu conținut scăzut de carbohidrați, și conținut ridicat lipidic sau proteic poate fi suficient să utilizați doar carbohidrați extinși fără bolusuri manuale (a se vedea postarea de blog de mai sus). Atunci când carbohidrații extinși sunt generați, o notă Careportal este, de asemenea, creată pentru a documenta toate intrările, pentru a facilita iterarea și îmbunătățirea intrărilor.

(extended-bolus-and-why-they-wont-work-in-closed-loop-environment)=
## Extended bolus and why they won't work in closed-loop environment?

După cum s-a menționat mai sus, bolusurile extinse sau multiunde nu funcționează cu adevărat într-un sistem de tip buclă închisă. [See below](#why-extended-boluses-wont-work-in-a-closed-loop-environment) for details

(Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)=
### Bolus extins și comutați la buclă deschisă - doar pompele Dana și Insight

Anumite persoane solicitau oricum opțiunea de a utiliza bolusul extins în AAPS, deoarece doreau să trateze alimentele speciale în felul în care se obișnuiseră.

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
### De ce bolusurile extinse nu vor funcționa într-un sistem buclă închisă

1. Bucla determină că acum 1,55U/h urmează să fie administrat. Dacă aceasta este administrată sub formă de bolus extins sau RBT nu contează pentru algoritm. De fapt, unele pompe folosesc bolusul extins. Ce ar trebui să se întâmple? Most pump drivers then stop the extended bolus -> You didn't even need to start it.

2. Dacă ați avut bolusul extins ca intrare, ce trebuie să se întâmple în model?

   1. Ar trebui ca acesta să fie considerat neutru împreună cu rata bazală (BR) și inclus în bucla? Apoi bucla ar trebui să poată reduce bolusul dacă, de exemplu, glicemia scade prea mult și toată insulina "neutră" este înlăturată?
   2. Ar trebui ca bolusul extins să fie doar adăugat? Deci buclei ar trebui să i se permită pur și simplu să continue? Chiar și cu cea mai severă hipoglicemie? Nu cred că este așa de bine: O hipoglicemie este prevăzută, însă nu trebuie prevenită?

3. IOB pe care bolusul extins îl acumulează se materializează după 5 minute la următoarea rulare. În consecință, bucla ar oferi mai puțină bazală. So not much changes... except that the possibility of hypo avoidance is taken.
