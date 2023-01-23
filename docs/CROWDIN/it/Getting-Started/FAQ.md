# Domande frequenti (FAQ)

Come si aggiunge una FAQ alla lista delle domande: Segui queste [istruzioni](../make-a-PR.md)

# Generale

## Posso semplicemente scaricare il file di installazione (apk) di AndroidAPS?

No. Non c'è un file apk scaricabile per AndroidAPS. Devi [costruirlo](../Installing-AndroidAPS/Building-APK.md) da solo. E per questo c'è un motivo:

AndroidAPS è utilizzato per controllare il tuo microinfusore e per somministrare insulina. In base alle norme vigenti, in Europa tutti i sistemi di classe Ia o IIb sono dispositivi medici che richiedono l'approvazione normativa (un marchio CE) e che necessitano di vari studi e autorizzazioni. Distribuire un dispositivo non regolamentato è illegale. Esistono norme analoghe in altre parti del mondo.

Il regolamento non si limita all'atto della vendita (con il fine di ottenere denaro) ma si applica a qualsiasi modalità di distribuzione (anche se la concessione avviene a titolo gratuito). Costruire un'app medica in prima persona è l'unico modo per non essere influenzato da queste norme.

Ecco perché gli apks non sono disponibili.

## Come iniziare?

Innanzitutto devi avere a disposizione ** componenti hardware adatte per un loop**:

* Un [microinfusore supportato](Pump-Choices.md), 
* Uno [smartphone Android](Phones.md) (Gli smartphone Apple non sono supportati da AAPS- per questo, dai uno sguardo a [iOS Loop](https://loopkit.github.io/loopdocs/)) e 
* Un [sistema di monitoraggio continuo della glicemia](../Configuration/BG-Source.md). 

In secondo luogo, devi **configurare le tue componenti hardware**. Dai uno sguardo all' [esempio di configurazione con il tutorial passo dopo passo](Sample-Setup.md).

Poi, devi **configurare le componenti software**: AndroidAPS e la fonte CGM/FGM.

Infine devi imparare e **capire le caratteristiche fondamentali di OpenAPS per gestire i parametri necessari per il trattamento**. Il profilo basale, il rapporto insulina: cho (IC) e il fattore di sensibilità (ISF) devono essere accuratamente impostati prima di usare un sistema di Loop chiuso. Il sistema di Loop fornisce ogni suggerimento assumendo che le basali da te impostate siano corrette e che ogni picco sia motivato da altri fattori(attività fisica, stress ecc.). Per una questione di sicurezza, gli aggiustamenti che il sistema di Loop può fare hanno delle limitazioni (dai uno sguardo alla sezione variazione massima di basale temporanea nella pagina sulle [caratteristiche fondamentali di OpenAPS](https://openaps.org/reference-design/) ). Impostare (manualmente) basali sbagliate significa sprecare il dosaggio (automatico) di AAPS che cercherà di correggere in continuazione un profilo basale sbagliato. Se, per esempio, noti che il sistema imposta spesso una basale temporanea bassa prima di un pasto, è probabile che sia necessario rivedere il tuo profilo basale. Puoi usare [autotune](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) per analizzare lunghe serie di dati. Questo è uno strumento molto utile in grado di darti suggerimenti su quali variazioni sulle basali e sui tuoi fattori (IC e ISF) sarebbe necessario apportare. Oppure puoi testare se le tue basali sono corrette [alla vecchia maniera](http://integrateddiabetes.com/basal-testing/).

## Quali sono gli aspetti pratici del sistema di loop?

### Proteggi con password

Se non vuoi che la preferenze da te inserite siano facilmente modificabili, puoi impostare una password per proteggere il menù delle preferenze. Per farlo seleziona "password per impostazioni" dal menù delle preferenze e inserisci una password a tua scelta. Quando aprirai nuovamente il menù delle preferenze, ti verrà richiesta la password da te inserita prima di poter procedere con qualsiasi cambiamento. Nel caso in cui volessi successivamente eliminare la password sarà sufficiente andare nuovamente in "password per impostazioni" e cancellare il testo.

### Smartwatch Android Wear

Se desideri utilizzare l'android wear app per erogare boli e per cambiare le impostazioni direttamente dallo smartwatch, è necessario assicurarsi che le notifiche provenienti da AndroidAPS non siano bloccate. La conferma di ogni azione, infatti, avviene tramite notifiche.

### Sconnetti micro

Se sconnetti il microinfusore per fare la doccia/fare il bagno/nuotare/ fare sport ecc. devi far sapere ad AndroidAPS che non vi è erogazione di insulina al fine di mantenere corretto il calcolo di IOB.

* Tieni premuto il pulsante 'Loop Chiuso' (se invece non hai ancora chiuso il loop tieni premuto su 'Loop aperto') in alto nella schermata principale. 
* Seleziona **'Sconnetti micro per XY min'**
* Questo imposterà automaticamente la basale a zero per il periodo di tempo selezionato.
* La durata minimi per cui il microinfusore può essere sconnesso dipende dalla durata minima di basale temporanea che il vostro microinfusore può impostare. Quindi, se si desidera sconnettere il microinfusore per un periodo di tempo più breve di quello minimo, il microinfusore va riconnesso manualmente mediante la procedure descritta in seguito.
* Il pulsante 'Loop Chiuso' (o 'Loop Aperto') a questo punto diventerà rosso, sarà denominato 'Sconnesso (xx m)' e mostrerà i minuti restanti prima che il microinfusore venga considerato da AAPS riconnesso.
* AAPS considererà riconnesso il microinfusore allo scadere del tempo impostato e il loop chiuso ricomincerà a funzionare regolarmente.
    
    ![Sconnetti micro](../images/PumpDisconnect.png)

* Se si desidera riconnettere il microinfusore prima del tempo selezionato, questo può essere riconnesso manualmente.

* Tenere premuto sul pulsante 'Sconnesso (xx m)'.
* Seleziona 'Riconnetti micro'
    
    ![Reconnect pump](../images/PumpReconnect.png)

### Le decisioni del loop non sono basate su un singolo valore rilavato dal CGM

For safety, recommendations made are based on not one CGM reading but the average delta. Therefore, if you miss some readings it may take a while after getting data back before AndroidAPS kicks in looping again.

### Further readings

There are several blogs with good tips to help you understand the practicalities of looping:

* [Fine-tuning Settings](http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM
* [Why DIA matters](http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM
* [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
* [Hormones and autosens](http://seemycgm.com/2017/06/06/hormones-2/) See my CGM

## What emergency equipment is recommended to take with me?

First of all, you have to take the same emergency equipment with you like every other T1D with insulin pump therapy. As looping with AndroidAPS, it is strongly recommended to have the following additional equipment with or near to you:

* Battery pack for the energy of your smartphone, wear and (maybe) BT reader
* Backup in the cloud (Dropbox, Google Drive...) of the apps you use like: your latest AndroidAPS-APK and your key store password, AndroidAPS settings file, xDrip settings file, patched Dexcom app, ...
* Pump batteries

## How to safely attach the CGM/FGM?

You can tape it: There are getting sold pre-perforated 'overpatches' for common CGM systems (ask Google or ebay). Some loopers use the cheaper standard kinesiology tape or rocktape.

You can fix it: There are getting sold upper arm bracelets that fix the CGM/FGM with a rubber band (ask Google or ebay).

# AndroidAPS settings

The following list aims to help you optimize settings. It may be best to start at the top and work to the bottom. Aim to get one setting right before changing another. Work in small steps rather than making large changes at once. You can use [Autotune](https://autotuneweb.azurewebsites.net/) to guide your thinking, although it should not be followed blindly: it may not work well for you or in all circumstances. Note that settings interact with one another - you can have 'wrong' settings that work well together in some circumstances (e.g. if a too-high basal happens to be at the same time as a too-high CR) but do not in others. This means that you need to consider all the settings and check they work together in a variety of circumstances.

## Duration of insulin activity (DIA)

### Description & testing

The length of time that insulin decays to zero.

This is quite often set too short. Most people will want at least 5 hours, potentially 6 or 7.

### Impact

Too short DIA can lead to low BGs. E vice-versa.

If DIA is too short, AAPS thinks too early that your previous bolus is all consumed, and, at still elevated glucose, will give you more. (Actually, it does not wait that long, but predicts what would happen, and keeps adding insulin). This essentially creates ‘insulin stacking’ that AAPS is unaware of.

Example of a too-short DIA is a high BG followed by AAPS over-correcting and giving a low BG.

## Basal rate schedule (U/h)

### Description & testing

The amount of insulin in a given hour time block to maintain BG at a stable level.

Test your basal rates by suspending loop, fasting, waiting for say 5 hours after food, and seeing how BG changes. Repeat a few times.

If BG is dropping, basal rate is too high. And vice-versa.

### Impact

Too high basal rate can lead to low BGs. And vice-versa.

AAPS ‘baselines’ against the default basal rate. If basal rate is too high, a ‘zero temp’ will count as a bigger negative IOB than it should. This will lead to AAPS giving more subsequent corrections than it should to bring IOB ultimately to zero.

So, a basal rate too high will create low BGs both with the default rate, but also some hours hence as AAPS corrects to target.

Conversely a basal rate too low can lead to high BGs, and a failure to bring levels down to target.

## Insulin sensitivity factor (ISF) (mmol/l/U or mg/dl/U)

### Description & testing

The drop in BG expected from dosing 1U of insulin.

Assuming correct basal, you can test this by suspending loop, checking IOB is zero, and taking a few glucose tablets to get to a stable ‘high’ level.

Then take an estimated amount of insulin (as per current 1/ISF) to get to your target BG.

Be careful as this is quite often set too low. Too low means 1 U will drop BG faster than expected.

### Impact

**Lower ISF** (i.e. 40 instead of 50) = more aggressive / stronger leading to a bigger drop in BGs for each unit of insulin. If too low, this can lead to low BGs.

**Higher ISF** (i.e. 45 instead of 35) = less aggressive / weaker leading to a smaller drop in BGs for each unit of insulin. If too high, this can lead to high BGs.

**Example:**

* BG is 190 mg/dl (10,5 mmol) and target is 100 mg/dl (5,6 mmol). 
* So, you want correction of 90 mg/dl (= 190 - 110).
* ISF = 30 -> 90 / 30 = 3 units of insulin
* ISF = 45 -> 90 / 45 = 2 units of insulin

An ISF that is too low (not uncommon) can result in ‘over corrections’, because AAPS thinks it needs more insulin to correct a high BG than it actually does. This can lead to ‘roller coaster’ BGs (esp. when fasting). In this circumstance you need to increase your ISF. This will mean AAPS gives smaller correction doses, and this will avoid over-correcting a high BG resulting in a low BG.

Conversely, an ISF set too high can result in under-corrections, meaning your BG remains above target – particularly noticeable overnight.

## Insulin to carb ratio (IC) (g/U)

### Description & testing

The grams of carbohydrate for each unit of insulin.

Some people also use I:C as abbreviation instead of IC or talk about carb ratio (CR).

Assuming correct basal, you can test by checking IOB is zero and that you are in-range, eating exactly known carbs, and take an estimated amount of insulin based on current insulin to carb ratio. Best is to eat food your normally eat at that time of day and count its carbs precisely.

> **NOTE:**
> 
> In some European countries bread units were used for determination of how much insulin is needed for food. At the beginning 1 bread unit equaled 12g of carbs, later some changed to 10g of carbs.
> 
> In this model the amount of carbs was fixed and the amount of insulin was variable. ("How much insulin is needed to cover one bread unit?")
> 
> When using IC the amount of insulin is fixed and the amount of carbs is variable. ("How many g of carbs can be covered by one unit of insulin?")
> 
> Example:
> 
> Bread unit facor (BU = 12g carbs): 2,4 -> You need 2,4 units of insulin when you eat one bread unit.
> 
> Corresponding IC: 12 / 2,4 = 5,2 -> 5,2g carbs can be covered with one unit of insulin.
> 
> Conversion tables are available online i.e. [here](https://www.mylife-diabetescare.com/files/media/03_Documents/11_Software/FAS/SOF_FAS_App_KI-Verha%CC%88ltnis_MSTR-DE-AT-CH.pdf).

### Impact

**Lower IC** = less food per unit, i.e. you are getting more insulin for a fixed amount of carbs. Can also be called ‘more aggressive’.

**Higher IC** = more food per unit, i.e. you are getting less insulin for a fixed amount of carbs. Can also be called ‘less aggressive’.

If after meal has digested and IOB has returned to zero, your BG remains higher than before food, chances are IC is too large. Conversely if your BG is lower than before food, IC is too small.

# APS algorithm

## Why does it show "dia:3" in the "OPENAPS AMA"-tab even though I have a different DIA in my profile?

![AMA 3h](../images/Screenshot_AMA3h.png)

In AMA, DIA actually doesn't mean the 'duration of insulin acting'. It is a parameter, which used to be connected to the DIA. Now, it means, 'in which time should the correction be finished'. It has nothing to do with the calculation of the IOB. In OpenAPS SMB, there is no need for this parameter anymore.

## Profile

### Why using min. 5h DIA (insulin end time) instead of 2-3h?

Well explained in [this article](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/). Don't forget to `ACTIVATE PROFILE` after changing your DIA.

### What causes the loop to frequently lower my BG to hypoglycemic values without COB?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct, this behavior is typically caused by a too low ISF. A too low ISF looks typically like this:

![ISF too low](../images/isf.jpg)

### What causes high postprandial peaks in closed loop?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct and your BG is falling to your target after carbs are fully absorbed, try to set an 'eating soon' temp target in AndroidAPS some time before the meal or think about an appropriate prebolus time with your endocrinologist. If your BG is too high after the meal and still too high after carbs are fully absorbed, think about decreasing your IC with your endocrinologist. If your BG is too high while COB and too low after carbs are fully absorbed, think about increasing your IC and an appropriate prebolus time with your endocrinologist.

# Other settings

## Nightscout settings

### AndroidAPS NSClient says 'not allowed' and does not upload data. What can I do?

In NSClient check 'Connection settings'. Maybe you actually are not in an allowed WLAN or you have activated 'Only if charging' and your charging cable is not attached.

## CGM settings

### Why does AndroidAPS say 'BG source doesn't support advanced filtering'?

If you do use another CGM/FGM than Dexcom G5 or G6 in xDrip native mode, you'll get this alert in AndroidAPS OpenAPS-tab. See [Smoothing blood glucose data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) for more details.

## Pump

### Where to place the pump?

There are innumerable possibilities to place the pump. It does not matter if you are looping or not.

### Batteries

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

### Changing reservoirs and cannulas

The change of cartridge cannot be done via AndroidAPS but must be carried out as before directly via the pump.

* Long press on "Open Loop"/"Closed Loop" on the Home tab of AndroidAPS and select 'Suspend Loop for 1h'
* Now disconnect the pump and change the reservoir as per pump instructions.
* Once reconnected to the pump continue the loop by long pressing on 'Suspended (X m)'.

The change of a canula however does not use the "prime infusion set" function of the pump, but fills the infusion set and/or canula using a bolus which does not appear in the bolus history. This means it does not interrupt a currently running temporary basal rate. On the Actions (Act) tab, use the PRIME/FILL button to set the amount of insulin needed to fill the infusion set and start the priming. If the amount is not enough, repeat filling. You can set default amount buttons in the Preferences > Other > Fill/Prime standard insulin amounts. See the instruction booklet in your canula box for how many units should be primed depending on needle length and tubing length.

## Wallpaper

You can find the AndroidAPS wallpaper for your phone on the [phones page](../Getting-Started/Phones#phone-background).

## Daily usage

### Hygiene

#### What to do when taking a shower or bath?

You can remove the pump while taking a shower or bath. For this short period of time you'll usually won't need it. But you should tell it to AAPS so that the IOB calculations are right.

See [description above](../Getting-Started/FAQ#disconnect-pump).

### Work

Depending on the kind of your job, maybe you use different treatment factors on workdays. As a looper you should think of a [profile switch](../Usage/Profiles.md) for your estimated working day (e.g. more than 100% for 8h when sitting around or less than 100% when you are active), a high or low temporary target or a [time shift of your profile](../Usage/Profiles#time-shift) when standing up much earlier or later than regular. If you are using [Nightscout profiles](../Configuration/Config-Builder#ns-profile), you can also create a second profile (e.g. 'home' and 'workday') and do a daily profile switch to the profile you actually need.

## Leisure activities

### Sports

You have to rework your old sports habits from pre-loop times. If you simply consume one or more sports carbs as before, the closed loop system will recognize them and correct them accordingly.

So, you would have more carbohydrates on board, but at the same time the loop would counteract and release insulin.

When looping you should try these steps:

* Make a [profile switch](../Usage/Profiles.md) < 100%.
* Set an [activity temp target](../Usage/temptarget#activity-temp-target) above your standard target.
* If you are using SMB make sure ["Enable SMB with high temp targets"](../Usage/Open-APS-features#enable-smb-with-high-temp-targets) and ["Enable SMB always"](../Usage/Open-APS-features#enable-smb-always) are disabled.

Pre- and postprocessing of these settings is important. Make the changes in time before sport and consider the effect of muscle filling.

If you do sports regularly at the same time (i.e. sports class in your gym) you can consider using [automation](../Usage/Automation.md) for profile switch and TT. Location based automation might also be an idea but makes preprocessing more difficult.

The percentage of the profile switch, the value for your activity temp target and best time for the changes are individual. Start on the safe side if you are looking for the right value for you (start with lower percentage and higher TT).

### Sex

You can remove the pump to be 'free', but you should tell it to AAPS so that the IOB calculations are right.

See [description above](../Getting-Started/FAQ#disconnect-pump).

### Drinking alcohol

Drinking alcohol is risky in closed loop mode as the algorithm cannot predict the alcohol influenced BG correctly. You have to check out your own method for treating this using the following functions in AndroidAPS:

* Deactivating closed loop mode and treating the diabetes manually or
* setting high temp targets and deactivating UAM to avoid the loop increasing IOB due to an unattended meal or
* do a profile switch to noticeably less than 100% 

When drinking alcohol, you always have to have an eye on your CGM to manually avoid a hypoglycemia by eating carbs.

### Sleeping

#### How can I loop during the night without mobile and WIFI radiation?

Many users turn the phone into airplane mode at night. If you want the loop to support you when you are sleeping, proceed as follows (this will only work with a local BG-source such as xDrip+ or patched Dexcom app, it will NOT work if you get the BG-readings via Nightscout):

1. Turn on airplane mode in your mobile.
2. Wait until the airplane mode is active.
3. Turn on Bluetooth.

You are not receiving calls now, nor are you connected to the internet. But the loop is still running.

Some people have discovered problems with local broadcast (AAPS not receiving BG values from xDrip+) when phone is in airplane mode. Go to Settings > Inter-app settings > Identify receiver and enter `info.nightscout.androidaps`.

![xDrip+ Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

### Travelling

#### How to deal with time zone changes?

With Dana R and Dana R Korean you don't have to do anything. For other pumps see [time zone travelling](../Usage/Timezone-traveling.md) page for more details.

## Medical topics

### Hospitalization

If you want to share some information about AndroidAPS and DIY looping with your clinicians, you can print out the [guide to AndroidAPS for clinicians](../Resources/clinician-guide-to-AndroidAPS.md).

### Medical appointment with your endocrinologist

#### Reporting

You can either show your Nightscout reports (https://YOUR-NS-SITE.com/report) or check [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).