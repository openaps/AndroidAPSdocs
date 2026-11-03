# Il tuo profilo AAPS

Your **AAPS Profile** is a set of four key parameters which define how **AAPS** should deliver insulin in response to your sensor glucose levels. Questi sono i parametri principali su cui si basa **AAPS**. As you progress through the **Objectives**, you will unlock additional modifiable parameters (like SMB settings), but the performance of these features rely on your underlying **Profile** being correct. Il **Profilo** comprende:
* [target glicemici](#profile-glucose-targets),
* [velocità basali](#your-aaps-profile-basal-rates) (BR),
* [fattori di sensibilità insulinica](#your-aaps-profile-insulin-sensitivity-factor) (ISF) e
* [rapporti insulina-carboidrati](#your-aaps-profile-insulin-to-carbs-ratio) (IC o ICR).

```{admonition} Where did DIA go?
:class: note
La **durata d'azione dell'insulina (DIA)** non fa più parte del tuo **Profilo**. It is set per insulin instead — see [Manage → Insulin settings](#Config-Builder-insulin-dia).
```

As part of **AAPS**’ management, users should continually assess and scrutinize the accuracy of their **Profile** settings. It is recommended to take the settings in the order they are presented here. Aim to get one setting right before changing another. Work in small steps rather than making large changes at once. Non dimenticare di attivare il nuovo profilo dopo ogni modifica. Regularly [back up your **Profile**](#YourAapsProfile_Profile-backup) settings by exporting your settings.

Your **Profile** settings interact with one another - you can have 'wrong' settings that work well together in certain circumstances but do not in others. For instance, if a too-high basal happens to be at the same time as a too-high **CR**. This means that you need to consider the settings individually and check they work harmoniously together in a variety of circumstances.

You can use [Autotune](https://autotuneweb.azurewebsites.net/) to guide your thinking, although it should not be followed blindly: it may not work well for you or in all circumstances.

```{admonition} Your diabetes may vary
:class: note
**Profiles** vary significantly from person-to-person.

For basal rates (BR), insulin sensitivity factors (ISF) and insulin-to-carb ratios (IC or ICR), the absolute values and trends in insulin requirements vary significantly from person to person, depending on your biology, gender, age, fitness level etc. as well as shorter term factors like illness and recent exercise. For more guidance on this, the book [“Bright Spots and Landmines”](https://diatribe.org/bright-spots-and-landmines/) by Adam Brown is an excellent book to read.

```

The four last parameters (glucose targets, basal rates, insulin sensitivity factors and insulin-to-carb ratios) can be set to different values, changing hourly if required, over a 24-hour period.

![Cambio orario della basale](../images/MaxDailyBasal2.png)

Screenshots from **AAPS** of an _example_ profile are shown below. Please note, this sample profile below shows a large number of timepoints. Quando inizi con **AAPS**, il tuo profilo sarà probabilmente molto più semplice.

![Esempio di profilo attivo](../images/Profile-Example-Active.png)

(profile-glucose-targets)=
## Target glicemici

### Descrizione

Il tuo **target glicemico** è un valore fondamentale e tutti i calcoli di **AAPS** si basano su di esso. It is different from the target range which you usually aim to keep your blood glucose values in. The target is used in **AAPS** calculations: if **AAPS** predicts that your **BG** will land outside the target range, then it will take action to take you back in said range.

I target possono essere impostati entro questi limiti:

|         | Target _basso_        | Target _alto_           |
| ------- | --------------------- | ----------------------- |
| Minimo  | 4,4 mmol/L o 80 mg/dL | 5 mmol/L o 90 mg/dL     |
| Massimo | 10 mmol/L o 180 mg/dL | 11,1 mmol/L o 200 mg/dL |

### Impatto

If the target in your **Profile** is very wide (say, 3 or more mmol/L [50 mg/dL or more] wide), you will often find little **AAPS** action. This is because **BG** level is predicted to be somewhere in that wide range, and thus temporary basal rate are unlikely to be actioned by **AAPS**.

### Come impostarlo

The **figure below** shows an example of how the target can be set in an **AAPS** profile.

![Target](../images/Profile_Target.png)

**BG** targets are set according to your personal preferences and requirements. For example, if you are concerned about hypos at night, you may set your target slightly higher at 117 mg/dL (6.5 mmol/L) from 9 pm - 7am. Se vuoi essere sicuro di avere abbastanza insulina attiva (IOB) la mattina prima del bolo per la colazione, puoi impostare un target più basso di 81 mg/dL (4,5 mmol/L) dalle 7 alle 8.

When In [Open Loop](#KeyAapsFeatures-OpenLoop), especially when progressing through [the first objectives](../SettingUpAaps/CompletingTheObjectives.md), using a wide range target can be a good option while you are learning how **AAPS** behaves and adjusting your **Profile**.<br/> When In [Closed Loop](#KeyAapsFeatures-ClosedLoop) (starting at **[Objective 6](#objectives-objective6)**), it is recommended to reduce the range until you have a single target for each time of the day (_Low_ target = _High_ target), to make sure that **AAPS** reacts promptly to **BG** fluctuations.

(your-aaps-profile-basal-rates)=

## Velocità basali

### Descrizione

La tua velocità basale di insulina (unità/ora) fornisce l'insulina di fondo, che mantiene stabile la glicemia quando non mangi e non fai attività fisica.

The insulin pump delivers small amounts of rapid acting insulin every few minutes, to keep the liver from releasing too much glucose, and to move glucose into body cells. L'insulina basale di solito è tra il 40 e il 50% della dose totale giornaliera (TDD), a seconda della dieta, e di solito segue un ritmo circadiano, con un picco e una valle del fabbisogno di insulina nelle 24 ore. For more information, chapter 6 of [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) by Gary Scheiner is very useful.

Most type 1 diabetes educators (and people with type 1 diabetes!) agree that you should work on getting your basal rates correct, before attempting to optimize your ISF and ICR.

### Impatto

Velocità basali corrette ti permettono di svegliarti nell'intervallo target e di saltare i pasti, o di mangiare prima o più tardi nella giornata, senza andare alto o basso.

Too high basal rate can lead to low BGs. E viceversa.

**AAPS** ‘baselines’ against the default basal rate. If basal rate is too high, a ‘zero temp’ will count as a bigger negative IOB than it should. This will lead to **AAPS** giving more subsequent corrections than it should to bring IOB ultimately to zero.

So, a basal rate too high will create low **BGs** both with the default rate, but also some hours hence as **AAPS** corrects to target.

Conversely, a basal rate too low can lead to high BGs, and a failure to bring levels down to target.

### Come impostarlo

The **figure below** shows an example of how the basal rates can be set in an **AAPS** profile.

![Velocità basali](../images/Profile_BasalRates.png)

Setting your basal rates right is done by trial and error, and should be done in consultation with your diabetes team.

There are basal testing methods which usually entails observing your basal rates and insulin needs during an <u>intermittent</u> fasting over a 24-hour period. Although you need to test your basal rates for the whole day, it is not recommended to fast during 24h straight. Questo perché il corpo attiva dei meccanismi, come gli ormoni, per compensare. A recommended way is to fast over 3 different days for a period of 8 hours.

The recommended method is to suspend the loop (for safety you can set AAPS to [**LGS**](#KeyAapsFeatures-LGS) to avoid lows, as done for achieving [objective 6](#objectives-objective6)), which will revert to your default background basal rate. Observe how your **BG** changes: if it is dropping, basal rate is too high. And vice versa.<br/> An alternative method (may be more tricky) is to keep the loop running, and seeing how **IOB** changes. If **IOB** is negative, your basal rate is too high. E viceversa. Beware that this method relies on **ISF** to correct **BG**, and thus depends on other variables to be set reasonably well for it to be successful.<br/> Another way of adjusting your basal rates is to watch the loop action during the night, when all COB have decayed. This method is particularly useful for children, when fasting is difficult or insulin needs change often. [Dr Saleh Adi from Tidepool](https://www.youtube.com/watch?v=-fpWnGRhLSo) provides useful ways on how to analyze overnight BG lines in order to optimize your basal rates.

See [here](../GettingHelp/ProfileTuning.md) how to tweak your basal profile, analyzing patterns in closed loop.

When taking action on the result of your basal testing, changes in the **Profile** should be done 1 to 2 hours (depends on your insulin type) before the rise/drop. Repeat the test as necessary until you are comfortable with your **basal rates** settings.

(your-aaps-profile-basal-not-compatible)=
#### Message: "Basal rate is not compatible with the current pump"

Each pump has limits: a lowest and a highest basal rate it can deliver and, for some pumps (for example Dana, Accu-Chek Combo, Medtronic and Diaconn G8), basal rates that can only change on the full hour. **AAPS** controlla il tuo profilo rispetto al micro che usi, **dopo** aver applicato la percentuale che scegli.

If a basal rate is outside these limits, the **Activate** screen shows this message and the **Activate** button stays grey:

![Activate screen with the message "Basal rate is not compatible with the current pump"](../images/v4/Profiles/profile_activate_pump_incompatible.png)

For example, with a basal rate of 0.10 U/h in the night and a profile percentage of 35 %, **AAPS** would have to deliver 0.035 U/h. Questo è meno di quanto può erogare un micro Dana (0,04 U/h).

Per risolvere, puoi:

* choose another percentage: a **higher** one if a basal rate becomes too low, a **lower** one if a basal rate becomes too high, or
* [edit the profile](#your-aaps-profile-create-and-edit-profiles) and change the basal rate.

The profile editor only lets you start basal rates on a full hour. A basal rate starting at e.g. 06:30 can only come from an older profile, for example after you change to a pump that does not support it.

(your-aaps-profile-insulin-sensitivity-factor)=

## Fattore di sensibilità insulinica (ISF)

### Descrizione

Il fattore di sensibilità insulinica (a volte chiamato fattore di correzione) indica di quanto scende la glicemia con 1 unità di insulina.

**In mg/dL units:** If you have an **ISF** of 40, each unit of insulin will reduce your blood glucose by approx. 40 mg/dL (for example, your blood glucose will fall from 140 mg/dL to 100 mg/dL).

**In mmol/L units:** If you have an **ISF** of 1.5, each unit of insulin will reduce your blood glucose by approx. 1.5 mmol/L (for example from 8 mmol/L to 6.5 mmol/L).

From these examples you can see that the _smaller_ the **ISF** value, the less sensitive you are to insulin. So if you reduce your ISF from 40 to 35 (mg/dL) or 1.5 to 1.3 (mmol/L), this is often called strengthening your **ISF**. Conversely, increasing the **ISF** value from 40 to 45 (mg/dL) or 1.5 to 1.8 (mmol/L) is weakening your **ISF**.

### Impatto

Un **ISF più basso / più forte** (ad es. 40 invece di 50) significa che l'insulina abbassa la tua **glicemia** di meno per unità. Questo porta a una correzione più aggressiva / più forte da parte del loop, con **più insulina**. If your **ISF** is too strong (small value), this can lead to low **BG**.

Un **ISF più alto / più debole** (ad es. 45 invece di 35) significa che l'insulina abbassa la tua **glicemia** di più per unità. Questo porta a una correzione meno aggressiva / più debole da parte del loop, con **meno insulina**. If your **ISF** is too weak (large value), this can lead to high **BG**.

**Esempio:**
* La **glicemia** è 190 mg/dL (10,5 mmol/L) e il target è 100 mg/dL (5,6 mmol/L).
* So, you want a correction of `190 - 100 = 90 mg/dL` or `10.5 - 5.6 = 4.9 mmol/L`
* Se `ISF = 30` -> `90 / 30 = 3` oppure `ISF = 1.63` -> `4.9 / 1.63 = 3`: 3 unità di insulina
* Se `ISF = 45` -> `90 / 45 = 2` oppure `ISF = 2.45` -> `4.9 / 2.45 = 2`: 2 unità di insulina

An **ISF** that is too low (and therefore more aggressive, not uncommon) can result in ‘over corrections’, because **AAPS** calculates that the user needs more insulin to correct a high **BG** than actually required. This can lead to ‘roller coaster’ BG levels (esp. when fasting), as shown on the image below. In this circumstance, the **ISF** value should be increased in order to make **AAPS** less aggressive. This will ensure **AAPS** delivers smaller correction doses, and avoid over-correcting a high **BG** resulting in a low **BG**.

![ISF troppo basso](../images/isf.jpg)

Conversely, an **ISF** set too high can result in under-corrections, meaning your **BG** remains above target – particularly noticeable overnight.

### Come impostarlo

See the **figure below** for an example of how ISF values could be set in an **AAPS** profile.

![ISF del profilo](../images/Profile_ISF.png)

Un punto di partenza semplice per stabilire l'ISF di giorno è calcolarlo dalla dose totale giornaliera (TDD) con la regola del 1700 (94). Trovi più dettagli nel capitolo 7 di [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) di Gary Scheiner.

| 1700 (se misuri in mg/dL) o 94 (mmol/L) / TDD = ISF approssimativo.<br/><br/>Esempio: TDD = 40 U<br/>ISF approssimativo (mg/dL) = 1700/40 = 43<br/>ISF approssimativo (mmol/L) = 94/40 = 2,4 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                                                                      |

Assuming your basal levels are correct, you can test this by suspending the loop, checking **IOB** is zero, and taking a few glucose tablets to get to a stable ‘high’ level.

Then take an estimated amount of insulin (as per current 1/ISF) to get to your target BG.

Be careful as this is quite often set too low. Too low means 1 U will drop BG faster than expected.

(your-aaps-profile-insulin-to-carbs-ratio)=

## Rapporto insulina-carboidrati (ICR)

### Descrizione

The **ICR** is a measure of how many grams of carbohydrate are covered by one unit of insulin.

Some people also use **I:C** as an abbreviation instead of **ICR**, or talk about carb ratio : **CR**.

Per esempio, un rapporto insulina-carboidrati di 1 a 10 (1:10) significa che prendi 1 U di insulina ogni 10 grammi di carboidrati mangiati. Un pasto di 25 g di carboidrati richiederebbe 2,5 U di insulina.

Se il tuo **ICR** è più debole (valore più alto), per esempio 1:20, ti servirebbero solo 0,5 U di insulina per coprire 10 g di carboidrati. Un pasto di 25 g di carboidrati richiederebbe 25/20 = 1,25 U di insulina.

It is common to have different **ICR** at different times of day due to hormone levels and physical activity. Many people find they have their lowest/strongest **ICR** around breakfast time because they tend to be more insulin resistant. So, for example, one adult user's **ICR** could be 1:8 for breakfast, 1:10 for lunch and 1:10 for dinner, but these patterns are not universal, and some people are more insulin resistant at dinner time, and require a stronger/smaller **ICR** then.

> **NOTA:**
> 
> In some European countries bread units were used for determination of how much insulin is needed for food. At the beginning 1 bread unit equal to 12g of carbs, later some changed to 10g of carbs.
> 
> In questo modello la quantità di carboidrati era fissa e la quantità di insulina era variabile. ("How much insulin is needed to cover one bread unit?")
> 
> Con l'**ICR** la quantità di insulina è fissa e la quantità di carboidrati è variabile. ("How many g of carbs can be covered by one unit of insulin?")
> 
> Esempio:
> 
> Bread unit factor (BU = 12g carbs): 2,4 U/BU -> You need 2,4 units of insulin when you eat one bread unit.
> 
> Corresponding **ICR**: 12g / 2,4 U = 5,0 g/U -> 5,0g carbs can be covered with one unit of insulin.
> 
> BU factor 2,4 U / 12g   ===>   IC = 12g / 2,4 U = 5,0 g/U
> 
> Le tabelle di conversione si trovano online, ad es. [qui](https://www.mylife-diabetescare.com/files/media/03_Documents/11_Software/FAS/SOF_FAS_App_KI-Verha%CC%88ltnis_MSTR-DE-AT-CH.pdf).

### Impatto

Un **ICR più basso / più forte** significa meno cibo per unità, cioè ricevi più insulina per una quantità fissa di carboidrati. Can also be called ‘more aggressive’. If your IC is too strong, you are getting too much insulin, this can lead to low **BGs**.

Un **ICR più alto / più debole** = più cibo per unità, cioè ricevi meno insulina per una quantità fissa di carboidrati. Can also be called ‘less aggressive’. If your IC is too weak, you are getting less insulin than you need, this can lead to high **BGs**.

### Come impostarlo

The **figure below** shows an example of a user's **ICR** and how it can be set in an **AAPS Profile**. When entering these values, we enter the final part of the ratio, so an insulin-to-carb ratio of 1:3.5 is entered simply as “3.5”.

![ICR del profilo](../images/Profile_ICR.png)

If after a meal has been digested and the **IOB** has returned to zero, your **BG** remains higher than before food, chances are your **ICR** is too weak (_i.e._ the number is too high and should be gradually lowered). Conversely, if your **BG** is lower than before food, **ICR** is too strong (_i.e._ the number is too small and should be gradually increased).

Assuming your basal rates are correct, you can test by checking if **IOB** is zero and that you are in-range, eating exactly known carbs, and take an estimated amount of insulin based on current insulin to carb ratio. Best is to eat food you normally eat at that time of day and count its carbs precisely.

## Domande frequenti sul profilo

```{contents} Common questions related to the Profile
:depth: 1
:local: true
```

### Perché è importante avere il profilo giusto

**Why should I try to get my profile settings right? Can’t the loop just take care of it?**

A hybrid closed loop _can_ attempt to make insulin delivery adjustments to minimize poor glycemic control that results from having incorrect **Profile** values. Può farlo, per esempio, sospendendo l'erogazione di insulina se stai per andare in ipoglicemia. However, you can achieve much better glycemic control if your **Profile** settings are already as close as possible to what your body needs. This is one of the reasons that **AAPS** uses staged objectives to move from open loop pumping towards hybrid closed loop. In addition, there will be times when you need to open the loop (sensor warmups, sensor failure _etc._), sometimes in the middle of the night, and you will want to have your settings right for these situations.

If you are starting with **AAPS** after using a different open or closed-loop pumping system, you will already have a reasonable idea of what values to use for basal rates (**BR**), insulin sensitivity factors (**ISF**) and insulin-to-carb ratios (**ICR**).

If you are moving from injections (MDI) to **AAPS**, then it is a good idea to read up on how to make the transfer from MDI to pump first, and plan and make the move carefully in consultation with your diabetes team. ["Pumping insulin"](https://amzn.eu/d/iaCsFa2) di John Walsh e Ruth Roberts e [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) di Gary Scheiner sono molto utili.

### What causes high postprandial peaks in closed loop?
First of all, check your basal rate and make a no-carb basal rate test. If it is correct and your **BG** is falling to reach your target after carbs are fully absorbed, try to set an 'eating soon' temp target in **AAPS** some time before the meal or think about an appropriate pre-bolus time with your endocrinologist. <br/> If your **BG** is too high after the meal and still too high after carbs are fully absorbed, consider decreasing your **ICR** with your endocrinologist. If your **BG** is too high while **COB** and too low after carbs are fully absorbed, think about increasing your **ICR** and an appropriate pre-bolus time with your endocrinologist.

### I'm stuck high and the loop does not bring me down
I possibili motivi per cui **AAPS** non dà abbastanza insulina sono:
* **ISF** is not strong enough
* Basal rate might not be strong enough
* A security setting might kick in, such as **maxIOB**. Or **SMB** is disabled at this time, depending on your settings.
* Automation has been set up and has overridden **AAPS**.

See also [Tweaking the AAPS Profile](../GettingHelp/ProfileTuning.md).

### I have negative IOB, is this an issue ?
Negative **IOB** means the amount of absolute insulin (basal + bolus) in your body is less than the basal. It will cause **AAPS** to send more insulin as soon as the **BG** starts to rise, because it considers that insulin is missing, which can result in low **BG** later.

Here are some reasons why you may have negative IOB, and what action to take:
* a too strong basal: tweak your **Profile**
* too much bolus at the previous meal: tweak your **Profile** or check if you are bolusing at the right time.
* DIA set too short on your insulin type, resulting in insulin stacking: tweak it in [Manage → Insulin settings](#Config-Builder-insulin-dia)
* physical activity: next time, consider using a lower [Profile percentage](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) during activity to account for increased sensitivity.

## Gestire i tuoi profili

```{contents} Operations that you can perform on your **Profiles** in **AAPS**
:depth: 1
:local: true
```
(your-aaps-profile-create-and-edit-profiles)=
### Creare e modificare i profili

In **AAPS** v4 your profiles live on the **Manage** screen (bottom navigation) → **Profile**, shown as a swipeable card carousel with an action bar (**➕ Add**, **✏️ Edit**, **⧉ Clone**, **🗑️ Delete**, **▶ Activate**). Per gestire e attivare un profilo, vedi [Gestire e attivare i profili](#ProfileSwitch-manage-v4). Coming from **AAPS** v3, where profiles had their own tab? Vedi [Cosa è cambiato in AAPS v4](#v4changes-manage).

Toccando **✏️ Modifica** si apre l'editor. Set the profile **name** and **units**, then fill in the four schedules using the tabs:

- **IC** — rapporto insulina-carboidrati (g/U)
- **ISF** — fattore di sensibilità insulinica
- **BAS** — velocità basali
- **TARG** — intervallo target

![L'editor del profilo — schede IC / ISF / BAS / TARG](../images/setup-wizard/Wizard-Profile-IC.png)

Each schedule is a list of **time blocks**: add a block, set its start time and value, then **Save**.

If you make any changes to your **Profile**, make sure you are editing the correct **Profile**: the card of the profile in use is marked **ACTIVE**, but the card selected on screen may be another one.

(your-aaps-profile-profile-from-scratch-for-a-kid)=
### Creare da zero un profilo per un bambino

L'[Assistente profilo](#aaps-screens-profile-helper) (menu ☰ → **Assistente profilo**) può aiutarti a creare un profilo per un bambino (fino a 18 anni).

**Nota importante:**

**L'Assistente profilo serve ad aiutarti a trovare il profilo iniziale per tuo figlio. Even though it is based on data sets of two different hospitals always discuss with your medical team before using a new profile!**

Profile helper offers data sets from two different hospitals for children to find initial profile for your kid up to 18 years.

![Assistente profilo bambini 1](../images/ProfileHelperKids1.png)

1. Assicurati di essere nella scheda **Profilo 1**.
2. In **Profile type**, make sure you have "Default profile" selected.
3. Adjust Default profile (based on hospital data set) by entering kids age and either TDD Total **or** weight.
4. Passa alla scheda **Profilo 2**.
5. Premi **Tipo profilo** e seleziona "Profilo DPV predefinito".
6. Adjust DPV Default profile (based on another hospital data set) by entering kids age, TDD Total and percentage of basal. Note that the DPV data set provides **basal rates** only, so IC and ISF are shown as zero for this profile.
7. Apri la scheda **Confronto**. Comparison of the two adjusted profiles will be displayed (see screenshot below).
8. If you want to start tweaking your profile based on one of these suggestions, use the **Clone** button at the bottom of the comparison.

![Assistente profilo bambini 2](../images/ProfileHelperKids2.png)

### Cambiare profilo

See [Profile switch & Profile Percentage](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md).

(your-aaps-profile-clone-profile-switch)=
### Clone a Profile switch to a new Profile

![Cambio profilo](../images/TreatmentsView4.png)

La [Cronologia trattamenti](#aaps-screens-treatments) mostra tutti i **Cambi profilo** passati. Nella scheda **Cambio profilo** puoi usare un **Cambio profilo** passato come base per creare un nuovo **Profilo**. In this case, timeshift and percentage will be applied to the new local profile. Use the **Clone** button shown on line **2**.

You can now go to the [Profile screen](#your-aaps-profile-create-and-edit-profiles) (**Manage → Profile**) to edit the newly created Profile.

(YourAapsProfile_Profile-backup)=
### Backup del profilo

Being a core setting of your looping system, your **Profiles** are highly sensitive and something you really don't want to lose.

* I tuoi **Profili** sono salvati nel database di **AAPS**.
* When **NSClientV3** is set up (see [Synchronization](#SetupWizard-synchronization-with-the-reporting-server-and-more)), your **Profiles** are also uploaded to Nightscout automatically.
* Fanno anche parte delle [impostazioni esportate](../Maintenance/ExportImportSettings.md). Quindi assicurati di avere un backup in un posto sicuro.

### Modificare i profili da Nightscout

If enabled, **Profile** changes made directly in Nightscout can be received in **AAPS**. The setting is called "**Receive profile store from NS**" and is part of the **Nightscout data acceptance** options (accepting data from Nightscout is turned off by default, see the [Client control step of the Setup Wizard](../SettingUpAaps/SetupWizard.md)); you can find it quickly with the **search bar** on the main screen. While client control is on, the setting is hidden and **AAPS** takes no profile changes from Nightscout ([hardened mode](#client-master-control-hardened-mode)); edit the profile on a paired client instead, or load it once with **Full sync**.

This can be helpful when about to make major changes to a more extensive **Profile**. They can be entered more easily via the web interface, _e.g._ to manually copy data from a spreadsheet.

Per farlo, però, è importante clonare l'intero **record del database**, che contiene diversi profili, nell'editor di Nightscout (freccia blu nello screenshot qui sotto). The new database records then carries the current date. Dopo il salvataggio, il **Profilo** modificato/nuovo può essere attivato in **AAPS** con un normale [Cambio profilo](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md).

![Clonare i record del database](../images/Nightscout_Profile_Editor.PNG)

(your-aaps-profile-compare-profiles)=
### Confrontare due profili

You can also use the [Profile Helper](#aaps-screens-profile-helper) (menu ☰ → **Profile helper**) to compare two different profiles or profile switches (percentage of one of your profiles used in a [profile switch](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) before).

![Assistente profilo 1](../images/ProfileHelper1.png)

1. Assicurati di essere nella scheda **Profilo 1**.
2. In **Profile type**, select "Available profile" to choose between all stored **Profiles**.
3. Scegli il **Profilo** da cui vuoi partire per il confronto.
4. Passa alla scheda **Profilo 2**.
5. In **Profile type**, select "Profile switch" to choose in the history of all your **Profile Switches**.
6. Scegli il **Cambio profilo** con cui vuoi confrontarlo.
7. Apri la scheda **Confronto**. Comparison of the two profiles will be displayed (see screenshot below).

![Assistente profilo 2](../images/ProfileHelper2.png)
