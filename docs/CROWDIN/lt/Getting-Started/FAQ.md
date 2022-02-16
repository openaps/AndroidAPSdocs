# AAPS dažnai užduodami klausimai

Kaip įtraukti klausimus į DUK: Sekite šias [instrukcijas](../make-a-PR.md)

# Bendrieji

## Ar galiu tiesiog atsisiųsti AndroidAPS įdiegimo failą?

Ne. AndroidAPS nepateikia atsisiunčiamo APK failo. Jūs turite [sukurti](../Installing-AndroidAPS/Building-APK.md) jį patys. Štai priežastis, kodėl:

AndroidAPS yra skirtas pompos valdymui ir insulino suleidimui. Under current regulations in Europe, all systems classed as IIa or IIb are medical devices that require regulatory approval (a CE mark) which needs various studies and sign offs. Nesertifikuotų prietaisų platinimas yra neteisėtas. Panašios taisyklės yra kitose pasaulio šalyse.

This regulation is not restricted just to sales (in the meaning of getting money for something) but applies to any distribution (even giving away for free). Building a medical device for yourself is the only way to use the app within these regulations.

Štai kodėl negalima platinti paruoštų programų apk pavidalu.

## Kaip pradėti?

Pirmiausia turite **paruošti komponentus, kurie veikia su AAPS**:

* A [supported insulin pump](./Pump-Choices.md), 
* [Android išmanusis telefonas](Phones.md) (Apple iOS nepalaiko„AndroidAPS“ - vietoj to pabandykite [iOS Loop](https://loopkit.github.io/loopdocs/)), ir 
* [Nuolatinė gliukozės kiekio kraujyje (KG) stebėjimo sistema](../Configuration/BG-Source.rst). 

Antra, jūs turite **sukonfigūruoti savo įrangą**. Žr. [Diegimo pažingsniui pavyzdį](Sample-Setup.md).

Trečia, turite **konfigūruoti programinės įrangos komponentus**: AndroidAPS ir kraujo gliukozės monitoringo šaltinius.

Ketvirta, jūs turite **išmokti ir suprasti rekomenduojamą OpenAPS struktūrą, kad galėtumėte patikrinti savo terapijos veiksnius**. Pagrindinis uždaro ciklo principas: tiksliai nustatytos valandinės bazės ir insulino - angliavandenių rodikliai. Visose rekomendacijose daroma prielaida, kad pagrindinį poreikį patenkina bazinis insulinas ir kad atsirandantys gliukozės kiekio kraujyje svyravimai atsiranda dėl kitų priežasčių (mankšta, stresas ir kt.), kurias tuo metu reikia koreguoti. Saugumo sumetimais koregavimai, kuriuos AAPS gali atlikti automatiškai, yra riboti (žr. „Maksimalus leistinas laikinas bazinis dažnis“ [OpenAPS struktūra](https://openaps.org/reference-design/)). Tai reiškia, kad neturėtumėte naudoti ciklo neteisingam bazinio greičio profiliui ištaisyti. Pvz., jei prieš valgį dažnai turite žemą glikemiją, tada tikriausiai turite pakoreguoti valandinę bazę. You can use [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) to consider a large pool of data to suggest whether and how basals and/or ISF need to be adjusted, and also whether carb ratio needs to be changed. Or you can test and set your basal the [old fashioned way](https://integrateddiabetes.com/basal-testing/).

## Svarbūs praktiniai aspektai?

### Apsauga slaptažodžiu

Jei nenorite, kad nustatymai būtų lengvai pakeičiami, nustatymų meniu galite apsaugoti slaptažodžiu. Norėdami tai padaryti, nustatymų meniu suaktyvinkite parinktį „Nustatymų slaptažodis“ ir įveskite norimą slaptažodį. Kitą kartą eidami į „Nustatymus“, turėsite įvesti slaptažodį, kad galėtumėte atlikti pakeitimus. Jei vėliau norite išjungti slaptažodį, eikite į „Nustatymų slaptažodį“ ir ištrinkite tekstą iš lauko.

### Android Wear išmanieji laikrodžiai

Jei planuojate naudoti Android Wear programą norėdami suleisti bolusą ar pakeisti nustatymus, turite įsitikinti, kad pranešimai iš AndroidAPS nėra užblokuoti. Veiksmas patvirtinamas pateikiant pranešimą.

### Atjungti pompą

If you take your pump off for showering, bathing, swimming, sports or other activities you must let AndroidAPS know that no insulin is delivered to keep IOB correct.

The pump can be disconnected using the Loop Status icon on the [AndroidAPS Home Screen](./Screenshots.md#loop-status).

### Rekomendacijos grindžiamos daugiau nei viena stebėjimo indikacija

For safety, recommendations made are based on not one CGM reading but the average delta. Therefore, if you miss some readings it may take a while after getting data back before AndroidAPS kicks in looping again.

### Papildoma informacija

There are several blogs with good tips to help you understand the practicalities of looping:

* [Fine-tuning Settings](https://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM
* [Why DIA matters](https://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM
* [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
* [Hormones and autosens](https://seemycgm.com/2017/06/06/hormones-2/) See my CGM

## Kokią atsarginę įrangą rekomenduojama turėti su savimi?

You have to have the same emergency equipment with you like every other T1D with insulin pump therapy. When looping with AndroidAPS it is strongly recommended to have the following additional equipment with or near to you:

* Battery pack and cables to charge your smartphone, watch and (if needed) BT reader or Link device
* Pump batteries
* Current [apk](../Installing-AndroidAPS/Building-APK.md) and [preferences files](../Usage/ExportImportSettings.rst) for AndroidAPS and any other apps you use (e.g. xDrip+, BYO Dexcom) both locally and in the cloud (Dropbox, Google Drive).

## How can I safely and securely attach the CGM/FGM?

You can tape it. There are several pre-perforated 'overpatches' for common CGM systems available (search Google, eBay or Amazon). Some loopers use the cheaper standard kinesiology tape or rocktape.

You can fix it. You can also purchase upper arm bracelets that fix the CGM/FGM with a band (search Google, eBay or Amazon).

# AndroidAPS parametrai

The following list aims to help you optimize settings. It may be best to start at the top and work to the bottom. Aim to get one setting right before changing another. Work in small steps rather than making large changes at once. You can use [Autotune](https://autotuneweb.azurewebsites.net/) to guide your thinking, although it should not be followed blindly: it may not work well for you or in all circumstances. Note that settings interact with one another - you can have 'wrong' settings that work well together in some circumstances (e.g. if a too-high basal happens to be at the same time as a too-high CR) but do not in others. This means that you need to consider all the settings and check they work together in a variety of circumstances.

## Insulino veikimo trukmė (IVT)

### Aprašymas & bandymai

The length of time that insulin decays to zero.

This is quite often set too short. Most people will want at least 5 hours, potentially 6 or 7.

### Įtaka

Too short DIA can lead to low BGs. Ir atvirkščiai.

If DIA is too short, AAPS thinks too early that your previous bolus is all consumed, and, at still elevated glucose, will give you more. (Actually, it does not wait that long, but predicts what would happen, and keeps adding insulin). This essentially creates ‘insulin stacking’ that AAPS is unaware of.

Example of a too-short DIA is a high BG followed by AAPS over-correcting and giving a low BG.

## Valandinė bazė (vv/h)

### Aprašymas & bandymai

The amount of insulin in a given hour time block to maintain BG at a stable level.

Test your basal rates by suspending loop, fasting, waiting for say 5 hours after food, and seeing how BG changes. Repeat a few times.

If BG is dropping, basal rate is too high. Ir atvirkščiai.

### Įtaka

Too high basal rate can lead to low BGs. Ir atvirkščiai.

AAPS ‘baselines’ against the default basal rate. If basal rate is too high, a ‘zero temp’ will count as a bigger negative IOB than it should. This will lead to AAPS giving more subsequent corrections than it should to bring IOB ultimately to zero.

So, a basal rate too high will create low BGs both with the default rate, but also some hours hence as AAPS corrects to target.

Conversely a basal rate too low can lead to high BGs, and a failure to bring levels down to target.

## Jautrumo insulinui faktorius (JIF) (mmol/l/U arba mg/dl/U)

### Aprašymas & bandymai

The drop in BG expected from dosing 1U of insulin.

Assuming correct basal, you can test this by suspending loop, checking IOB is zero, and taking a few glucose tablets to get to a stable ‘high’ level.

Then take an estimated amount of insulin (as per current 1/ISF) to get to your target BG.

Be careful as this is quite often set too low. Too low means 1 U will drop BG faster than expected.

### Įtaka

**Lower ISF** (i.e. 40 instead of 50) meaning insulin drops your BG less per unit. This leads to a more aggressive / stronger correction from the loop with **more insulin**. If the ISF is too low, this can lead to low BGs.

**Higher ISF** (i.e. 45 instead of 35) meaning insulin drops your BG more per unit. This leads to a less aggressive / weaker correction from the loop with **less insulin**. If the ISF is too high, this can lead to high BGs.

**Pavyzdys:**

* BG is 190 mg/dl (10,5 mmol) and target is 100 mg/dl (5,6 mmol). 
* So, you want correction of 90 mg/dl (= 190 - 110).
* ISF = 30 -> 90 / 30 = 3 units of insulin
* ISF = 45 -> 90 / 45 = 2 units of insulin

An ISF that is too low (not uncommon) can result in ‘over corrections’, because AAPS thinks it needs more insulin to correct a high BG than it actually does. This can lead to ‘roller coaster’ BGs (esp. when fasting). In this circumstance you need to increase your ISF. This will mean AAPS gives smaller correction doses, and this will avoid over-correcting a high BG resulting in a low BG.

Conversely, an ISF set too high can result in under-corrections, meaning your BG remains above target – particularly noticeable overnight.

## Insulino angliavandenių santykis (IA) (g/U)

### Aprašymas & bandymai

The grams of carbohydrate for each unit of insulin.

Some people also use I:C as abbreviation instead of IC or talk about carb ratio (CR).

Assuming correct basal, you can test by checking IOB is zero and that you are in-range, eating exactly known carbs, and take an estimated amount of insulin based on current insulin to carb ratio. Best is to eat food your normally eat at that time of day and count its carbs precisely.

> **PASTABA:**
> 
> Kai kuriose Europos šalyse duonos vienetai buvo naudojami nustatant, kiek insulino reikia maistui. At the beginning 1 bread unit equal to 12g of carbs, later some changed to 10g of carbs.
> 
> Pagal šį modelį angliavandenių kiekis buvo nustatomas fiksuotas, insulino kiekis buvo kintamas. ("Kiek insulino reikia padengti vienam duonos vienetui?")
> 
> Naudojant IA rodiklį, insulino kiekis yra fiksuotas, o angliavandenių kiekis yra kintamas. ("Kiek gramų angliavandenių padengia vienas vienetas insulino?")
> 
> Pavyzdys:
> 
> Bread unit factor (BU = 12g carbs): 2,4 U/BU -> You need 2,4 units of insulin when you eat one bread unit.
> 
> Atitinkamai IA: 12 g /2,4 vv = 5,0 g/vv -> 1 vienetas insulino dengia 5,0 g angliavandenių.
> 
> DV (duonos vieneto) koeficientas 2,4 vv / 12g ===> IA = 12g / 2,4 vv = 5,0 g/vv
> 
> Perskaičiavimo lentelės yra prieinamos internete, pvz., [čia](https://www.mylife-diabetescare.com/files/media/03_Documents/11_Software/FAS/SOF_FAS_App_KI-Verha%CC%88ltnis_MSTR-DE-AT-CH.pdf).

### Įtaka

**Lower IC** = less food per unit, i.e. you are getting more insulin for a fixed amount of carbs. Can also be called ‘more aggressive’.

**Higher IC** = more food per unit, i.e. you are getting less insulin for a fixed amount of carbs. Can also be called ‘less aggressive’.

If after meal has digested and IOB has returned to zero, your BG remains higher than before food, chances are IC is too large. Conversely if your BG is lower than before food, IC is too small.

# APS algoritmas

## Kodėl skirtuke „OPENAPS AMA“ IVT insulino trukmė rodoma kaip 3 (dia:3), nors mano profilis turi kitokią reikšmę?

![AMA 3h](../images/Screenshot_AMA3h.png)

In AMA, DIA actually doesn't mean the 'duration of insulin acting'. It is a parameter, which used to be connected to the DIA. Now, it means, 'in which time should the correction be finished'. It has nothing to do with the calculation of the IOB. In OpenAPS SMB, there is no need for this parameter any longer.

## Profilis

### Kodėl verta naudoti minimalią IVT (insulino veikimo trukmė) 5 valandas, o ne 2 ar 3 valandas?

Well explained in [this article](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/). Don't forget to `ACTIVATE PROFILE` after changing your DIA.

### Kas lemia, kad ciklas mažina mano glikemiją iki hipoglikemijos, nors aktyvių angliavandenių AAO nėra?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct, this behavior is typically caused by a too low ISF. A too low ISF looks typically like this:

![ISF too low](../images/isf.jpg)

### Kas lemia aukštą glikemiją po valgio naudojant uždarą ciklą?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct and your BG is falling to your target after carbs are fully absorbed, try to set an 'eating soon' temp target in AndroidAPS some time before the meal or think about an appropriate prebolus time with your endocrinologist. If your BG is too high after the meal and still too high after carbs are fully absorbed, think about decreasing your IC with your endocrinologist. If your BG is too high while COB and too low after carbs are fully absorbed, think about increasing your IC and an appropriate prebolus time with your endocrinologist.

# Kiti nustatymai

## Nightscout parametrai

### AndroidAPS NSClient praneša „neleidžiama“ ir neįkelia jokių duomenų. Ką aš galiu padaryti?

In NSClient check 'Connection settings'. Maybe you actually are not in an allowed WLAN or you have activated 'Only if charging' and your charging cable is not attached.

## CGM parametrai

### Kodėl AndroidAPS sako "KG šaltinis nepalaiko pažangaus filtravimo"?

If you do use another CGM/FGM than Dexcom G5 or G6 in xDrip native mode, you'll get this alert in AndroidAPS OpenAPS-tab. See [Smoothing blood glucose data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) for more details.

## Pompa

### Kur turėčiau dėvėti pompą?

There are innumerable possibilities to place the pump. It does not matter if you are looping or not.

### Baterijos

Looping can reduce the pump battery faster than normal use because the system interacts through bluetooth far more than a manual user does. It is best to change battery at 25% as communication becomes challenging then. You can set warning alarms for pump battery by using the PUMP_WARN_BATT_P variable in your Nightscout site. Tricks to increase battery life include:

* reduce the length of time the LCD stays on (within pump settings menu)
* reduce the length of time the backlight stays on (within pump settings menu)
* select notification settings to a beep rather than vibrate (within pump settings menu)
* only press the buttons on the pump to reload, use AndroidAPS to view all history, battery level and reservoir volume.
* AndroidAPS app may often be closed to save energy or free RAM on some phones. When AndroidAPS is reinitialized at each startup it establishes a Bluetooth connection to the pump, and re-reads the current basal rate and bolus history. This consumes battery. To see if this is happening, go to Preferences > NSClient and enable 'Log app start to NS'. Nightscout will receive an event at every restart of AndroidAPS, which makes it easy to track the issue. To reduce this happening, whitelist AndroidAPS app in the phone battery settings to stop the app power monitor closing it down.
    
    For example, to whitelist on a Samsung phone running Android Pie:
    
    * Go to Settings -> Device Care -> Battery 
    * Scroll until you find AndroidAPS and select it 
    * De-select "Put app to sleep"
    * ALSO go to Settings -> Apps -> (Three circle symbol in the top-right of the screen) select "special access" -> Optimize battery usage
    * Scroll to AndroidAPS and make sure it is de-selected.

* clean battery terminals with alcohol wipe to ensure no manufacturing wax/grease remains.

* for [Dana R/RS pumps](../Configuration/DanaRS-Insulin-Pump.md) the startup procedure draws a high current across the battery to purposefully break the passivation film (prevents loss of energy whilst in storage) but it doesn't always work to break it 100%. Either remove and reinsert battery 2-3 times until it does show 100% on screen, or use battery key to briefly short circuit battery before insertion by applying to both terminals for a split second.
* see also more tips for [particular types of battery](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage#battery-type-and-causes-of-short-battery-life)

### Rezervuaro ir kateterių keitimas

The change of cartridge cannot be done via AndroidAPS but must be carried out as before directly via the pump.

* Long press on "Open Loop"/"Closed Loop" on the Home tab of AndroidAPS and select 'Suspend Loop for 1h'
* Now disconnect the pump and change the reservoir as per pump instructions.
* Also priming and filling tube and cannula can be done directly on the pump. In this case use [PRIME/FILL button](../Usage/CPbefore26#pump) in the actions tab just to record the change.
* Once reconnected to the pump continue the loop by long pressing on 'Suspended (X m)'.

The change of a cannula however does not use the "prime infusion set" function of the pump, but fills the infusion set and/or cannula using a bolus which does not appear in the bolus history. This means it does not interrupt a currently running temporary basal rate. On the Actions (Act) tab, use the [PRIME/FILL button](../Usage/CPbefore26#pump) to set the amount of insulin needed to fill the infusion set and start the priming. If the amount is not enough, repeat filling. You can set default amount buttons in the Preferences > Other > Fill/Prime standard insulin amounts. See the instruction booklet in your cannula box for how many units should be primed depending on needle length and tubing length.

## Fonas

You can find the AndroidAPS wallpaper for your phone on the [phones page](../Getting-Started/Phones#phone-background).

## Kasdienis naudojimas

### Higiena

#### Ką daryti, kai prausiuosi po dušu ar vonioje?

You can remove the pump while taking a shower or bath. For this short period of time you may not need it, but you should tell AAPS that you've disconnected so that the IOB calculations are correct. See [description above](../Getting-Started/FAQ#disconnect-pump).

### Darbas

Depending on your job, you may choose to use different treatment factors on workdays. As a looper you should consider a [profile switch](../Usage/Profiles.md) for your typical working day. For example, you may switch to a profile higher than 100% if you have a less demanding job (e.g. sitting at a desk), or less than 100% if you are active and on your feet all day. You could also consider a high or low temporary target or a [time shift of your profile](../Usage/Profiles#time-shift) when working much earlier or later than regular, of if you work different shifts. You can also create a second profile (e.g. 'home' and 'workday') and do a daily profile switch to the profile you actually need.

## Laisvalaikio veikla

### Sportas

Turite pamiršti savo senus sportavimo įpročius, kuriuos turėjote prieš naudojantis AAPS ir išsiugdyti naujus. Jei tiesiog vartojate angliavandenius sportui, jūsų uždaro ciklo sistema tai atpažins ir atitinkamai suleis korekcijos bolusą.

Tuomet turite daugiau aktyvių angliavandenių, tačiau tuo pačiu ciklas įsikiš ir nurodys pompai suleisti daugiau insulino.

Kai naudojate uždarą ciklą, turėtumėte pabandyti šiuos veiksmus:

* Make a [profile switch](../Usage/Profiles.md) < 100%.
* Set an [activity temp target](../Usage/temptarget#activity-temp-target) above your standard target.
* If you are using SMB make sure ["Enable SMB with high temp targets"](../Usage/Open-APS-features#enable-smb-with-high-temp-targets) and ["Enable SMB always"](../Usage/Open-APS-features#enable-smb-always) are disabled.

Pre- and post-processing of these settings is important. Prieš sportuodami atlikite pakeitimus ir įvertinkite raumenų darbo poveikį.

Jei sportuojate reguliariai tuo pačiu metu (pvz., sportuojate sporto salėje), galite naudoti [Automatizavimą](../Usage/Automation.rst), kad pakeistumėte profilį ir laikinus tikslus. Geografine padėtimi pagrįsta automatizavimas taip pat yra gera idėja, tačiau apsunkina išankstinį apdorojimą.

Profilio pasikeitimo procentas, laikino tikslo dydis esant sportiniam aktyvumui bei pokyčių nustatymo geriausias laikas yra individualūs. Pradėkite nuo saugesnių parinkčių (pavyzdžiui, su mažu profilio procentu ir aukštesniais laikinais tikslais).

### Seksas

You can remove the pump to be 'free', but you should tell AndroidAPS so that the IOB calculations are correct. See [description above](../Getting-Started/FAQ#disconnect-pump).

### Alkoholio vartojimas

Drinking alcohol is risky in closed loop mode as the algorithm cannot predict the alcohol influenced BG correctly. You have to check out your own method for treating this using the following functions in AndroidAPS:

* Deactivating closed loop mode and treating the diabetes manually or
* setting high temp targets and deactivating UAM to avoid the loop increasing IOB due to an unattended meal or
* do a profile switch to noticeably less than 100% 

When drinking alcohol, you always have to have an eye on your CGM to manually avoid a hypoglycemia by eating carbs.

### Miegas

#### Kaip užtikrinti ciklo veikimą naktį, neveikiant mobiliajai ir WIFI spinduliuotei?

Many users turn the phone into airplane mode at night. If you want the loop to support you when you are sleeping, proceed as follows (this will only work with a local BG-source such as xDrip+ or ['Build your own Dexcom App'](../Hardware/DexcomG6#if-using-g6-with-build-your-own-dexcom-app), it will NOT work if you get the BG-readings via Nightscout):

1. Įjunkite lėktuvo režimą mobiliajame telefone.
2. Palaukite, kol lėktuvo režimas bus įjungtas.
3. Įjunkite Bluetooth.

You are not receiving calls now, nor are you connected to the internet. But the loop is still running.

Some people have discovered problems with local broadcast (AAPS not receiving BG values from xDrip+) when phone is in airplane mode. Go to Settings > Inter-app settings > Identify receiver and enter `info.nightscout.androidaps`.

![xDrip+ Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

### Keliavimas

#### Kaip elgtis keičiantis laiko juostai?

With Dana R and Dana R Korean you don't have to do anything. For other pumps see [time zone travelling](../Usage/Timezone-traveling.md) page for more details.

## Medicininiai aspektai

### Hospitalizacija

If you want to share some information about AndroidAPS and DIY looping with your clinicians, you can print out the [guide to AndroidAPS for clinicians](../Resources/clinician-guide-to-AndroidAPS.md).

### Vizitas pas endokrinologą

#### Ataskaitos

You can either show your Nightscout reports (https://YOUR-NS-SITE.com/report) or check [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).