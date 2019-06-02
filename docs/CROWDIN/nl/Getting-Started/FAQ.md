# Veelgestelde vragen

Om vragen toe te voegen aan de Veelgestelde Vragen: volg deze [instructies](../make-a-PR.md)

## Algemeen

### Can I just download the AndroidAPS installation file?

No. There is no downloadable apk file for AndroidAPS. You have to [build](../Installing-AndroidAPS/Building-APK.md) it yourself. Here's the reason why:

AndroidAPS is used to control your pump and give insulin. Under current regulations, in Europe, all the systems class as IIa or IIb are medical devices that require regulatory approval (a CE mark) and that needs various studies and sign offs. Distributing an unregulated device is illegal. Similar regulations exist in other parts of the world.

This regulation is not restricted to sales (in the meaning of getting money for somthing) but applies to any way of distribution (even giving away for free). Building a medical device for yourself is the only way not being affected by these regulations.

That’s why apks aren’t available.

### How to begin?

First of all, you have to **get loopable hardware components**:

* Een [geschikte insulinepomp](Pump-Choices.md), 
* een [Android smartphone](Phones.md) (Apple iOS wordt niet ondersteund door AndroidAPS - je kunt wel [iOS Loop](https://loopkit.github.io/loopdocs/) gebruiken) en 
* een [glucose sensor](../Configuration/BG-Source.md). 

Secondly, you have to **setup your hardware**. See [example setup with step-by-step tutorial](Sample-Setup.md).

Thirdly, you have to **setup your software components**: AndroidAPS and CGM/FGM source.

Fourthly, you have to learn and **understand the OpenAPS reference design to check your treatment factors**. The founding principle of closed looping is that your basal rate and carb ratio are accurate. All recommendations assume that your basal needs are met and any peaks or troughs you're seeing are a result of other factors which therefore require some one off adjustments (exercise, stress etc). The adjustments the closed loop can make for safety have been limited (see maximum allowed temporary basal rate in [OpenAPS Reference Design](https://openaps.org/reference-design/)), which means that you don't want to waste the allowed dosing on correcting a wrong underlying basal. If for example you are frequently low temping on the approach of a meal then it is likely your basal needs adjusting. You can use [autotune](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) to consider a large pool of data to suggest whether and how basals and/or ISF need to be adjusted, and also whether carb ratio needs to be changed. Or you can test and set your basal the [old fashioned way](http://integrateddiabetes.com/basal-testing/).

### What practicalities of looping do I have?

* Als je niet wilt dat jouw instellingen gemakkelijk worden aangepast, dan kun je het instellingen menu voorzien van een wachtwoord. Ga naar "Wachtwoord voor instellingen" in het instellingen menu en typ een zelfgekozen wachtwoord. De volgende keer dat je het instellingen menu opent, moet je het wachtwoord intypen om verder te kunnen. Wanneer je later geen wachtwoord meer wilt gebruiken, ga dan naar het "Wachtwoord voor instellingen" veld en verwijder de tekst.

* Wanneer je in de toekomst de Android Wear app wilt gebruiken om vanaf een smartwatch te kunnen bolussen of instellingen te wijzigen, dan moet je instellen dat notificaties van AndroidAPS niet geblokkeerd worden. Bevestiging van opdrachten die je op je smartwatch invoert, komen namelijk via een notificatie binnen op je telefoon.

* Als je de pomp wilt afkoppelen voor douchen/sporten etc, houd dan "Open-Loop" / "Closed Loop" tekst op het Overzicht-scherm ingedrukt en selecteer "verbreek verbinding ..min/u met pomp" voor hoelang je de pomp wilt afkoppelen. Hiermee zet je de basaal op nul voor de tijdsduur die je hebt gekozen. De minimale tijdsduur die je kunt kiezen komt door de minimale tijdsduur van TBRs die jouw pomp toestaat. Wanneer je een kortere tijd wilt kiezen, of je koppelt je pomp sneller aan dan je had gedacht, dan kun je "Verbinding verbroken (..m)" ingedrukt houden en "Hervatten" kiezen. Op deze manier zal jouw IOB correct berekend worden nadat je je pomp weer hebt aangekoppeld.

* Uit veiligheidsoogpunt zal AAPS aanpassingen doen op basis van een gemiddelde glucosewaarde ('gemiddeld verschil'), nooit op basis van één enkele waarde. Daarom zal het even duren voordat de loop weer iets doet nadat je even geen glucosewaardes hebt ontvangen.

* Er zijn verschillende blogs met goede tips om jou te helpen om de loop goed in te stellen (in het Engels):
  
  * [Fine-tuning Settings](http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM
  * [Why DIA matters](http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM
  * [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
  * [Hormones and autosens](http://seemycgm.com/2017/06/06/hormones-2/) See my CGM

### What emergency equipment is recommended to take with me?

First of all, you have to take the same emergency equipment with you like every other T1D with insulin pump therapy. As looping with AndroidAPS, it is strongly recommended to have the following additional equipment with or near to you:

* Losse accu (powerbank) zodat je je smartphone, smartwatch en (wellicht) bluetooth reader kunt opladen
* Digitale backup (Dropbox, Google Drive, ...) van de apps die je gebruikt, zoals jouw meest recente AndroidAPS apk-bestand en jouw key store (digitale handtekening), AndroidAPS instellingenbestand, xDrip instellingenbestand, aangepaste Dexcom app, ...
* Batterijen voor je insulinepomp

### How to savely attach the CGM/FGM?

You can tape it: There are getting sold pre-perforated 'overpatches' for common CGM systems (ask google or ebay). Some loopers use the cheaper standard kinesiotape or rocktape.

You can fix it: There are getting sold upper arm braclets that fix the CGM/FGM with a rubber band (ask google or ebay).

## AndroidAPS instellingen

### Impact of settings

This table aims to help you optimise settings. It may be best to start at the top and work to the bottom. Aim to get one setting right before changing another. Work in small steps rather than making large changes at once. You can use [Autotune](https://autotuneweb.azurewebsites.net/) to guide your thinking, although it should not be followed blindly: it may not work well for you or in all circumstances. Note that settings interact with one another - you can have 'wrong' settings that work well together in some circumstances (eg if a too-high basal happens to be at the same time as a too-high CR) but do not in others. This means that you need to consider all the settings and check they work together in a variety of circumstances.

<table>
  <tr>
    <th align="center">
      Setting
    </th>
    
    <th align="center">
      Description & testing
    </th>
    
    <th align="center">
      Impact
    </th>
  </tr>
  
  <tr>
    <td align="center">
      Duration of insulin activity (DIA)
    </td>
    
    <td align="center">
      The length of time that insulin decays to zero.<br /><br />This is quite often set too short. Most people will want at least 5 hours, potentially 6 or 7.
    </td>
    
    <td align="center">
      Too short DIA can lead to low BGs. And vice-versa.<br /><br />If DIA is too short, AAPS thinks too early that your previous bolus is all consumed, and, at still elevated glucose, will give you more. (Actually, it does not wait that long, but predicts what would happen, and keeps adding insulin). This essentially creates ‘insulin stacking’ that AAPS is unaware of.<br /><br />Example of a too-short DIA is a high BG followed by AAPS over-correcting and giving a low BG.
    </td>
  </tr>
  
  <tr>
    <td align="center">
      Basal rate schedule (U/hr)
    </td>
    
    <td align="center">
      The amount of insulin in a given hour time block to maintain BG at a stable level.<br /><br />Test your basal rates by suspending loop, fasting, waiting for say 5 hours after food, and seeing how BG changes. Repeat a few times.<br /><br />If BG is dropping, basal rate is too high. And vice-versa.
    </td>
    
    <td align="center">
      Too high basal rate can lead to low BGs. And vice-versa.<br /><br />AAPS ‘baselines’ against the default basal rate. If basal rate is too high, a ‘zero temp’ will count as a bigger negative IOB than it should. This will lead to AAPS giving more subsequent corrections than it should to bring IOB ultimately to zero.<br /><br />So a basal rate too high will create low BGs both with the default rate, but also some hours hence as AAPS corrects to target.<br /><br />Conversely a basal rate too low can lead to high BGs, and a failure to bring levels down to target.
    </td>
  </tr>
  
  <tr>
    <td align="center">
      Insulin sensitivity factor (ISF) (mmol/l/U or mg/dl/U)
    </td>
    
    <td align="center">
      The drop in BG expected from dosing 1U of insulin.<br /><br />Assuming correct basal, you can test this by suspending loop, checking IOB is zero, and taking a few glucose tablets to get to a stable ‘high’ level.<br /><br />Then take an estimated amount of insulin (as per current 1/ISF) to get to your target BG.<br /><br />This is quite often set too low.
    </td>
    
    <td align="center">
      Lower ISF = a smaller drop in BGs for each unit of insulin (also can be called ‘more severe / aggressive’ or ‘stronger’). If too low, this can lead to low BGs.<br /><br />Higher ISF = a bigger drop in BGs for each unit of insulin (also can be called ‘less severe / aggressive’ or ‘weaker’). If too high, this can lead to high BGs.<br /><br />An ISF that is too low (not uncommon) can result in ‘over corrections’, because AAPS thinks it needs more insulin to correct a high BG than it actually does. This can lead to ‘roller coaster’ BGs (esp when fasting). In this circumstance you need to increase your ISF. This will mean AAPS gives smaller correction doses, and this will avoid over-correcting a high BG resulting in a low BG.<br /><br />Conversely, an ISF set too high can result in under-corrections, meaning your BG remains above target – particularly noticeable overnight.
    </td>
  </tr>
  
  <tr>
    <td align="center">
      Carbohydrate to insulin ratio (CR) (g/U)
    </td>
    
    <td align="center">
      The grams of carbohydrate for each unit of insulin.<br /><br />Assuming correct basal, you can test by checking IOB is zero and that you are in-range, eating exactly known carbs, and take an estimated amount of insulin based on current 1/CR.
    </td>
    
    <td align="center">
      Lower CR = less food per unit, ie you are getting more insulin for a fixed amount of carbs. Can also be called ‘more aggressive’.<br /><br />Higher CR = more food per unit, ie you are getting less insulin for a fixed amount of carbs. Can also be called ‘less aggressive’.<br /><br />If after meal has digested and IOB has returned to zero, your BG remains higher than before food, chances are CR is too large. Conversely if your BG is lower than before food, CR is too small.
    </td>
  </tr>
</table>

### APS algorithm

#### Waarom zie ik "dia:3" in de "OPENAPS AMA"-tab ook al heb ik een andere DIA in mijn profiel?

![AMA 3h](../../images/Screenshot_AMA3h.png) In AMA, dia actually doesn't mean the 'duration of insulin acting'. It is a parameter, which used to connected to the DIA. Now, it means, 'in whích time should the correction be finished'. It has nothing to do with the calculation of the IOB. In OpenAPS SMB, there is no need for this parameter anymore.

### Profiel

#### Waarom minimaal een 5 uur DIA (Duur van Insuline Actie) gebruiken in plaats van 2-3 uur?

Well explained in [this article](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/). Don't forget to `ACTIVATE PROFILE` after changing your DIA.

#### Waarom zorgt de loop ervoor dat mijn bloedsuiker vaak zo ver zakt dat ik een hypo krijg, terwijl mijn COB (koolhydraten aan boord) nul is?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct, this behaviour is typically caused by a too low ISF. A too low ISF looks typically like this:

![ISF too low](../images/isf.jpg)

#### Waarom heb ik hoge glucosepieken na een maaltijd terwijl ik een closed loop gebruik?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct and your BG is falling to your target after carbs are fully absorbed, try to set an 'eating soon' temp target in AndroidAPS some time before the meal or think about an appropriate prebolus time with your endocrinologist. If your BG is too high after the meal and still too high after carbs are fully absorbed, think about decreasing your IC with your endocrinologist. If your BG is too high while COB and too low after carbs are fully absorbed, think about increasing your IC and an appropriate prebolus time with your endocrinologist.

## Overige instellingen

### Nightscout settings

#### AndroidAPS NSClient zegt 'Not allowed' (niet toegestaan) en wil geen gegevens uploaden. Wat kan ik doen?

In NSClient check 'Connection settings'. Maybe you actually are not in an allowed WLAN or you have activated 'Only if charging' and your charging cable is not attached.

### CGM settings

#### Waarom zegt AndroidAPS dat 'de gekozen BG bron geen optimale filtering toepast'?

If you do use another CGM/FGM than Dexcom G5 or G6 in xDrip native mode, you'll get this alert in AndroidAPS openAPS-tab. See [Smoothing blood glucose data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) for more details.

## Pomp

### Where to place the pump?

There are innumerable possibilities to place the pump. It does not matter if you are looping or not. If you rather would have a tubeless insulin pump and have a Dana for looping, check the 30cm catheter with the original belly belt.

### Batteries

Looping can reduce the pump battery faster than normal use because the system interacts through bluetooth far more than a manual user does. It is best to change battery at 25% as communication becomes challenging then. You can set warning alarms for pump battery by using the PUMP_WARN_BATT_P variable in your nightscout site. Tricks to increase battery life include:

* de tijd dat het LCD-scherm van de pomp aan staat, verkorten (in instellingen menu van de pomp)
* de tijd dat de achtergrondverlichting van het beeldscherm aan staat, verkorten (in instellingen menu van de pomp)
* stel meldingen in op geluid in plaats van trillen (in instellingen menu van de pomp)
* gebruik de knoppen van de pomp alleen bij het vullen van de pomp. Bekijk alle andere informatie op je telefoon (batterijduur, reservoir inhoud, geschiedenis etc).
* op sommige telefoons wordt AndroidAPS app vaak afgesloten om de batterij of het RAM geheugen te besparen. Elke keer dat AndroidAPS dan weer opnieuw wordt gestart, maakt je telefoon weer verbinding met de pomp om opnieuw de bolus geschiedenis en huidige basaalstand uit te lezen vanuit het pompgeheugen. Hierdoor raakt de batterij van de pomp leeg. Om te zien of dit gebeurt, ga naar Instellingen > NSClient en schakel 'Log app start naar NS' in. Hiermee zul je iedere keer dat de app herstart, een notificatie terugzien op je AAPS hoofdscherm in de glucosegrafiek, en ook in Nightscout. Wanneer je ziet dat de app vaak opnieuw gestart wordt, dan moet je dit uitzetten. Ga naar je telefooninstellingen, ergens onder energiebeheer/accuoptimalisatie moet je instellen dat de AndroidAPS app in de achtergrond mag blijven draaien en niet automatisch wordt afgesloten.
* maak de contactpunten van de batterij schoon met een alcoholdoekje, om te voorkomen dat er nog vet of olie van het productieproces is achtergebleven.
* bij DanaR/DanaRS pompen wordt er na een batterijwissel een grotere hoeveelheid stroom door de batterij gestuurd. In elke nieuwe batterij zit een inactiveringsfilm die voorkomt dat hij voor ingebruikname langzaam leeg zou lopen. De grotere hoeveelheid stroom zorgt ervoor dat de inactiveringsfilm van de batterij doorbroken wordt. Wanneer een nieuwe batterij geen 100% aangeeft nadat de pomp is opgestart, kun je 2-3 keren de batterij verwijderen en terugdoen in de pomp, of je kunt met een metalen voorwerp beide polen kort (fractie van een seconde) contact laten maken.
* bekijk meer tips over [specifieke soorten batterijen](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage#battery-type-and-causes-of-short-battery-life) voor de Combo-pomp

### Changing reservoirs and canulas

The change of cartridge can not be done via AndroidAPS, but must be carried out as before directly via the pump.

* Houd "Open Loop" / "Closed Loop" op het Overzicht-scherm van AndroidAPS lang ingedrukt en selecteer 'Verbreek verbinding 1u met pomp'
* Koppel nu de pomp af en verwissel het reservoir volgens de instructies van de pompfabrikant.
* Wanneer je daarmee klaar bent, koppel je de pomp weer aan en houd 'Verbinding verbroken (.. m)' lang ingedrukt. Selecteer 'Hervatten'.

The change of a canula however does not use the "prime infusion set" function of the pump, but fills the infusion set and/or canula using a bolus which does not appear in the bolus history. This means it does not interrupt a currently running temporary basal rate. On the Actions (Act) tab, use the PRIME/FILL button to set the amount of insulin needed to fill the infusion set and start the priming. If the amount is not enough, repeat filling. You can set default amount buttons in the Preferences > Other > Fill/Prime standard insulin amounts. See the instruction booklet in your canula box for how many units should be primed depending on needle length and tubing length.

## Hygiëne

### What to do when taking a shower or bath?

You can remove the pump while taking a shower or bath. For this short period of time you'll usually won't need it. But you should tell it to AAPS so that the IOB calculations are right. Push on the light blue field 'Open loop / Closed loop' on top of the homescreen. Select **'Disconnect pump for XY min'** depending on the estimated time. Once you have been reconnected your pump you can select 'Continue' in the same field or just wait until the chosen time of disconnection is over. The loop will continue automatically.

## Werken

Depending on the kind of your job, maybe you use different treatment factors on workdays. As a looper you should think of a profile switch for your estimated working day (e.g. more than 100% for 8h when sitting around or less than 100% when you are active), a high or low temporary target or a time shift of your profile when standing up much earlier or later than regular. If you are using Nightscout profiles, you can also create a second profile (e.g. 'home' and 'workday') and do a daily profile switch to the profile you actually need.

## Vrije tijd

## Sporten

## Sex

You can remove the pump to be 'free', but you should tell it to AAPS so that the IOB calculations are right. Push on the light blue field 'Open loop / Closed loop' on top of the homescreen. Select **'Disconnect pump for XY min'** depending on the estimated time. Once you have been reconnected your pump you can select 'Continue' in the same field or just wait until the chosen time of disconnection is over. The loop will continue automatically.

## Alcohol

Drinking alcohol is risky in closed loop mode as the algorythm cannot predict the alcohol influenced BG correctly. You have to check out your own method for treating this using the following functions in AndroidAPS:

* De closed loop uitschakelen en je diabetes handmatig onder controle houden
* Een hoger tijdelijk streefdoel instellen en onaangekondigde maaltijden (UAM, UnAnnounced Meals) uitschakelen, om te voorkomen dat je extra IOB krijgt toegediend
* een profielwissel, naar beduidend minder dan 100% 

When drinking alcohol you always have to have an eye on your CGM to manually avoid a hypoglycemia by eating carbs.

## Slapen

### How can I loop during the night without mobile and WIFI radiation?

Many users turn the phone into airplane mode at night. If you want the loop to support you when you are sleeping, proceed as follows (this will only work with a local BG-source such as xDrip+ or patched Dexcom app, it will NOT work if you get the BG-readings via nightscout):

1. Zet de telefoon in vliegtuigmodus.
2. Wacht totdat de vliegtuigmodus actief is.
3. Schakel Bluetooth in.

You are not receiving calls now, nor are you connected to the internet. But the loop is still running.

## Reizen

### How to deal with timezone changes?

With DanaR and DanaR Korean you don't have to do anything. For other pumps see [timezone travelling](../Usage/Timezone-traveling.md) page for more details.

## Ziekenhuis

If you want to share some information about AndroidAPS and DIY looping with your clinicians, you can print out the [guide to AndroidAPS for clinicians](../Resources/clinician-guide-to-AndroidAPS.md).

## Afspraak met je internist of diabetesverpleegkundige

### Reporting

You can either show your nightscout reports (https://YOUR-NS-SITE.com/report) or check [Nightscout Reporter](https://nightscout-reporter.zreptil.de/)