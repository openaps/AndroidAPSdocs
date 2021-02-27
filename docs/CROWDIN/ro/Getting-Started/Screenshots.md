# Ecrane AndroidAPS

## Ecranul de pornire

![Homescreen V2.7](../images/Home2020_Homescreen.png)

Acesta este primul ecran pe care îl veți descoperi când deschideți AndroidAPS și conține majoritatea informațiilor de care veți avea nevoie zi de zi.

### Secțiunea A - Pagini

* Navigaţi între diferitele module AndroidAPS.
* Alternativ, puteţi schimba ecranele glisând în stânga sau în dreapta.
* Paginile afișate pot fi selectate în [config builder](../Configuration/Config-Builder#tab-or-hamburger-menu).

### Secţiunea B - Profil & ţintă

#### Profil curent

![Profile switch remaining duration](../images/Home2020_ProfileSwitch.png)

* Profilul curent este afișat în bara din stânga.
* Apăsați scurt pe bara de profil pentru a vizualiza detaliile profilului
* Apăsați lung pe bara de profil pentru a [schimba între diferite profiluri](../Usage/Profiles#profile-switch).
* Dacă schimbarea profilului a fost făcută cu durată, timpul rămas în minute este afișat între paranteze.

#### Țintă

![Temp target remaining duration](../images/Home2020_TT.png)

* Nivelul ţintă actual al glicemiei este indicat în bara din dreapta.
* Apăsaţi scurt bara ţintă pentru a seta o [ţintă temporară](../Usage/temptarget.md).
* Dacă ținta temporară este setată, bara devine galbenă și timpul rămas în minute este afișat între paranteze.

#### Vizualizarea ajustării dinamice a țintei

![Visualization of dynamic target adjustment](../images/Home2020_DynamicTargetAdjustment.png)

* AAPS poate ajusta dinamic ţinta bazându-se pe sensibilitate dacă folosiţi algoritmul SMB.
* Activaţi fie una, fie ambele din [următoarele opţiuni](../Configuration/Preferences#openaps-smb-settings) 
   * "sensibilitatea ridica ţinta" si/sau 
   * "rezistența la insulină poate coborî ţinta" 
* Dacă AAPS detectează rezistenţă sau sensibilitate, ţinta se va modifica de la ce este setat din profil. 
* Când modifică ţinta glicemiei, fundalul se va schimba în verde.

### Secţiunea C - Glicemie & stare buclă

#### Valoarea actuală a glicemiei

* Ultima citire a glicemiei din CGM este afişată în partea stângă.
* Culoarea valorii glicemiei reflectă starea pentru [intervalul](../Configuration/Preferences#range-for-visualization) stabilit. 
   * verde = în interval
   * roşu = sub interval
   * galben = deasupra intervalului
* Zona gri din mijloc arată minutele de la ultima citire si schimbări de la ultima citire, in ultimele 15 si 40 de minute.

#### Stare buclă

![Stare buclă](../images/Home2020_LoopStatus.png)

* O nouă iconiță arată starea buclei:
   
   * cerc verde = buclă funcționează
   * cerc verde cu linie punctată = [suspendare hipoglicemie (LGS)](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend)
   * cerc roșu = buclă dezactivată (nu funcționează permanent)
   * cerc galben = buclă suspendată (temporar întreruptă, dar insulina bazală va fi administrată) - timpul rămas este afișat sub iconiță
   * cerc gri = pompa deconectată (temporar nu se administrează nici un fel de insulină) - timpul rămas este afișat sub iconiță
   * cerc portocaliu = rulează super bolus - timpul rămas este afișat sub iconiță
   * cerc albastru cu linie punctată = buclă deschisă

* Apăsați scurt sau apăsați lung pe iconiță pentru a deschide Dialog Buclă pentru a schimba modul buclei (Închisă, Suspendare hipoglicemie, Deschisă sau Dezactivată), suspendare / reactivare buclă sau deconectare / reconectare pompă.
   
   * Dacă apăsați scurt pe iconița Buclei, este necesară o validare după selecția în Dialog Buclă
   
   ![Loop status menu](../images/Home2020_Loop_Dialog.png)

### Secţiunea D - IOB, COB, BR și AS

![Section D](../images/Home2020_TBR.png)

* Seringa: insulină la bord (IOB) - cantitatea de insulină activă din interiorul corpului
   
   * Insulina la bord va fi zero dacă rulează doar basala standard şi nu mai există insulină care să fi rămas din bolusurile anterioare. 
   * IOB poate fi negativ dacă s-au înregistrat recent perioade de bazală redusă.
   * Apăsați iconița pentru a vedea împărțirea insulinei între bolus și bazală

* Spic de grâu: [carbohidrați la bord (COB)](../Usage/COB-calculation.rst) - carbohidrați încă neabsorbiți pe care i-ați consumat anterior -> iconița pulsează dacă sunt necesari carbohidrați

* Linie violetă: rata bazală – modificările iconiței reflectă modificările temporare ale ratei bazale (plat la 100%) 
   * Press the icon to see the base basal rate and details of any temp basal (including remaining duration)
* Arrows up & down: indicating actual [autosens](../Usage/Open-APS-features#autosens) status (enabled or disabled) and value is shown below icon

#### Carbs required

![Carbs required](../images/Home2020_CarbsRequired.png)

* Carbs suggestions are given when the reference design detects that it requires carbs.
* This is when the oref algorithm thinks I can't rescue you by 0 (zero) temping and you will need carbs to fix.
* The carb notifications are much more sophisticated than the bolus calculator ones. You might see carbs suggestion whilst bolus calculator does not show missing carbs.
* Carb required notifications can be pushed to Nightscout if wished, in which case an announcement will be shown and broadcast.

### Section E - Status lights

![Section E](../images/Home2020_StatusLights.png)

* Status lights give a visual warning for 
   * Cannula age
   * Insulin age (days reservoir is used)
   * Reservoir level (units)
   * Sensor age
   * Battery age and level (%)
* If threshold warning is exceeded, values will be shown in yellow.
* If threshold critical is exceeded, values will be shown in red.
* Settings can be made in [preferences](../Configuration/Preferences#status-lights).

### Section F - Main graph

![Section F](../images/Home2020_MainGraph.png)

* Graph shows your blood glucose (BG) as read from your glucose monitor (CGM). 
* Notes entered in action tab such as fingerstick calibrations and carbs entries as well as profile switches are shown here. 
* Long press on the graph to change the time scale. You can choose 6, 12, 18 or 24 hours.
* The green area reflects your target range. It can be configured in [preferences](../Configuration/Preferences#range-for-visualization).
* Blue triangles show [SMB](../Usage/Open-APS-features#super-micro-bolus-smb) - if enabled in [preferences](../Configuration/Preferences#openaps-smb-settings).
* Optional information:
   
   * Predicții
   * Basals
   * Activity - insulin activity curve

#### Activate optional information

* Click the triangle on the right side of the main graph to select which information will be displayed in the main graph.
* For the main graph just the three options above the line "\---\---- Graph 1 \---\----" are available.
   
   ![Main graph setting](../images/Home2020_MainGraphSetting.png)

#### Prediction lines

* **Orange** line: [COB](../Usage/COB-calculation.rst) (colour is used generally to represent COB and carbs)
   
   Prediction line shows where your BG (not where COB itself!) will go based on the current pump settings and assuming that the deviations due carb absorption remain constant. This line only appears if there are known COB.

* **Dark blue** line: IOB (colour is used generally to represent IOB and insulin)
   
   Prediction line shows what would happen under the influence of insulin only. For example if you dialled in some insulin and then didn’t eat any carbs.

* **Light blue** line: zero-temp (predicted BG if temporary basal rate at 0% would be set)
   
   Prediction line shows how the IOB trajectory line would change if the pump stopped all insulin delivery (0% TBR).

* **Dark yellow** line: [UAM](../Configuration/Sensitivity-detection-and-COB#sensitivity-oref1) (un-announced meals)
   
   Unannounced meals means that a significant increase in glucose levels due to meals, adrenaline or other influences is detected. Prediction line is similar to the ORANGE COB line but it assumes that the deviations will taper down at a constant rate (by extending the current rate of reduction).

Usually your real glucose curve ends up in the middle of these lines, or close to the one which makes assumptions that closest resemble your situation.

#### Basals

* A **solid blue** line shows the basal delivery of your pump and reflects the actual delivery over time.
* The **dotted blue** line is what the basal rate would be if there were no temporary basal adjustments (TBRs).
* In times standard basal rate is given the area under the curve is shown in dark blue.
* When the basal rate is temporarily adjusted (increased or decreased) the area under the curve is shown in light blue.

#### Activity

* Linia **galbenă subțire** arată activitatea Insulinei. 
* Aceasta se bazează pe scăderea preconizată a concentraţiei plasmatice a insulinei în sistemul dumneavoastră dacă nu au fost prezenţi alţi factori (cum sunt carbohidraţii).

### Secţiunea G - grafice suplimentare

* Puteţi activa până la patru grafice suplimentare sub graficul principal.
* Pentru a deschide setările pentru graficele suplimentare, faceți clic pe triunghiul din partea dreaptă a [graficului principal](../Getting-Started/Screenshots#section-f-main-graph) și derulați în jos.

![Additional graph settings](../images/Home2020_AdditionalGraphSetting.png)

* Pentru a adăuga un grafic suplimentar, bifaţi caseta din partea stângă a numelui său (de ex. \---\---- Graph 1 \---\----).

#### Absolute insulin

* Insulina activă, inclusiv bolusuri **şi bazală**.

#### Insulină la bord

* Arată insulina pe care o aveţi la bord (= insulină activă în corpul dumneavoastră). Include insulina din bolus și bazala temporară (**dar exclude ratele bazale stabilite în profilul dvs.**).
* Acesta ar fi zero dacă nu ar exista [SMB-uri](../Usage/Open-APS-features#super-micro-bolus-smb), nici bolusuri și nici TBR pe durata DIA.
* IOB poate fi negativ dacă nu mai aveți insulină din bolusuri și zero/low temp de o perioadă mai lungă de timp.
* Consumarea insulinei depinde de [DIA şi de profilul de insulină](../Configuration/Config-Builder#local-profile-recommended). 

#### Carbohidrați activi

* Arată carbohidrații pe care îi aveți la bord (= activi, nu sunt încă dezintegrați în corpul dumneavoastră). 
* Consumarea lor depinde de abaterile pe care le detectează algoritmul. 
* Dacă algoritmul detectează o absorbție de carbohidrați mai mare decât cea așteptată, se administrează insulină, iar aceasta creşte cantitatea de IOB (mai mult sau mai puţin, în funcţie de condiţiile dumneavoastră de siguranţă). 

#### Deviații

* Barele **GRI** afișează o deviație cauzată de carbohidrați. 
* Barele **VERZI** afișează că Glicemia este mai mare decât algoritmul se aștepta să fie. Barele verzi sunt folosite pentru a crește rezistenta în [Autosens](../Usage/Open-APS-features#autosens).
* Barele **ROȘII** afișează că Glicemia este mai mică decât algoritmul se aștepta să fie. Barele roșii sunt folosite pentru a crește sensibilitatea în [Autosens](../Usage/Open-APS-features#autosens).
* Barele **GALBENE** afișează o deviație cauzată de UAM.
* Barele **NEGRE** afișează mici abateri care nu sunt luate în considerare pentru sensibilitate

#### Sensibilitate

* Prezintă sensibilitatea pe care a detectat-o [Autosens](../Usage/Open-APS-features#autosens). 
* Sensibilitatea este un calcul al sensibilităţii la insulină ca rezultat al exerciţiilor fizice, hormonilor etc.

#### Activity

* Arată activitatea insulinei, calculată în funcţie de profilul insulinei (nu este derivat din IOB). 
* Valoarea este mai mare pentru insulina în apropierea momentului de vârf.
* Ar însemna să fie negativă atunci când IOB scade. 

#### Deviation slope

* Valoare internă utilizată în algoritm.

### Secţiunea H - Butoane

![Homescreen buttons](../images/Home2020_Buttons.png)

* Butoanele pentru insulină, carbohidrati şi calculator sunt 'întotdeauna active'. 
* Alte Butoane trebuie să fie setate în [preferinţe](../Configuration/Preferences#buttons).

#### Insulină

![Insulin button](../images/Home2020_ButtonInsulin.png)

* To give a certain amount of insulin without using [bolus calculator](#bolus-wizard).
* Prin bifarea căsuței poți să pornești automat [ținta temporară pentru masă în curând](../Configuration/Preferences#default-temp-targets).
* Dacă nu doriţi să bolusaţi prin pompă, dar doriți să înregistraţi cantitatea de insulină (de exemplu insulină administrată cu siringa) bifaţi căsuța corespunzătoare.

#### CH

![Carbs button](../images/Home2020_ButtonCarbs.png)

* Pentru a înregistra carbohidrați fără bolusare.
* Anumite [ținte temporare prestabilite](../Configuration/Preferences#default-temp-targets) pot fi selectate direct prin bifarea unei casuțe.
* Decalaj de timp: Când vei mânca / ai mâncat carbohidrați (în minute).
* Durată: Se vor folosi pentru ["carbohidrați extinși"](../Usage/Extended-Carbs.rst)
* Puteți folosi butoanele pentru a crește rapid cantitatea de carbohidrați.
* Notes will be uploaded to Nightscout - depending on your settings for [NS client](../Configuration/Preferences#nsclient).

#### Calculator

* See Bolus Wizard [section below](#bolus-wizard)

#### Calibrări

* Trimite o calibrare la xDrip+ sau deschide dialogul de calibrare cu Dexcom.
* Trebuie să fie activat în [preferinţe](../Configuration/Preferences#buttons).

#### CGM

* Opens xDrip+.
* Back button returns to AAPS.
* Trebuie să fie activat în [preferinţe](../Configuration/Preferences#buttons).

#### Asistent Rapid

* Easily enter amount of carbs and set calculation basics.
* Details are setup in [preferences](../Configuration/Preferences#quick-wizard).

## Bolus Wizard

![Bolus wizard](../images/Home2020_BolusWizard_v2.png)

When you want to make a meal bolus this is where you will normally make it from.

### Section I

* BG field is normally already populated with the latest reading from your CGM. If you don't have a working CGM then it will be blank. 
* In the CARBS field you add your estimate of the amount of carbs - or equivalent - that you want to bolus for. 
* The CORR field is if you want to modify the end dosage for some reason.
* The CARB TIME field is for pre-bolusing so you can tell the system that there will be a delay before the carbs are to be expected. You can put a negative number in this field if you are bolusing for past carbs.

#### Eating reminder

* For carbs in the future the alarm checkbox can be selected (and is by default when a time in the future is entered) so that you can be reminded at a time in the future of when to eat the carbs you have input into AndroidAPS
   
   ![BolusWizard with Eating Reminder](../images/Home2021_BolusWizard_EatingReminder.png)

### Section J

* SUPER BOLUS is where the basal insulin for the next two hours is added to the immediate bolus and a zero TBR is issued for the following two hours to take back the extra insulin. The option only shows when "Enable [superbolus](../Configuration/Preferences#superbolus) in wizard" is set in the [preferences overview](../Configuration/Preferences#overview).
* The idea is to deliver the insulin sooner and hopefully reduce spikes.
* For details visit [diabetesnet.com](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/).

### Section K

* Shows the calculated bolus. 
* If the amount of insulin on board already exceeds the calculated bolus then it will just display the amount of carbs still required.
* Notes will be uploaded to Nightscout - depending on your settings for [NS client](../Configuration/Preferences#nsclient).

### Section L

* Details of wizard's bolus calculation.
* You can deselect any that you do not want to include but you normally wouldn't want to.
* For safety reasons the **TT box must be ticked manually** if you want the bolus wizard to calculate based on an existing temporary target.

#### Combinations of COB and IOB and what they mean

* For safety reasons IOB boxed cannot be unticked when COB box is ticked as you might run the risk of too much insulin as AAPS is not accounting for what’s already given.
* If you tick COB and IOB unabsorbed carbs that are not already covered with insulin + all insulin that has been delivered as TBR or SMB will be taken into account.
* If you tick IOB without COB, AAPS takes account of already delivered insulin but won’t cover that off against any carbs still to be absorbed. This leads to a 'missing carbs' notice.
* If you bolus for **additional food** shortly after a meal bolus (i.e. additional desert) it can be helpful to **untick all boxes**. This way just the new carbs are being added as the main meal won't necessarily be absorbed so IOB won't match COB accurately shortly after a meal bolus.

#### Wrong COB detection

![Slow carb absorption](../images/Calculator_SlowCarbAbsorbtion.png)

* If you see the warning above after using bolus wizard, AndroidAPS has detected that the calculated COB value maybe wrong. 
* So, if you want to bolus again after a previous meal with COB you should be aware of overdosing! 
* For details see the hints on [COB calculation page](../Usage/COB-calculation#detection-of-wrong-cob-values).

## Action tab

![Actions tab](../images/Home2021_Action.png)

### Actions - section M

* Button [profile switch](../Usage/Profiles#profile-switch) as an alternative to pressing the [current profile](../Getting-Started/Screenshots#section-b-profile-target) on homescreen.
* Button [temporary target](../Usage/temptarget#temp-targets) as an alternative to pressing the [current target](../Getting-Started/Screenshots#section-b-profile-target) on homescreen.
* Button to start or cancel a temporary basal rate. Please note that the button changes from “TEMPBASAL” to “CANCEL x%” when a temporary basal rate is set.
* Even though [extended boluses](../Usage/Extended-Carbs#extended boluses) do not really work in a closed loop environment some people were asking for an option to use extended bolus anyway.
   
   * This option is only available for Dana RS and Insight pumps. 
   * Closed loop will automatically be stopped and switched to open loop mode for the time running extended bolus.
   * Make sure to read the [details](../Usage/Extended-Carbs#extended boluses) before using this option.

### Careportal - section N

* Displays information on
   
   * sensor age & level (battery percentage)
   * insulin age & level (units)
   * canula age
   * pump battery age & level (percentage

* Less information will be shown if [low resolution skin](../Configuration/Preferences#skin) is used.

#### Sensor level (battery)

* Needs xDrip+ nightly build Dec. 10, 2020 or newer.
* Works for CGM with additional transmitter such as MiaoMiao 2. (Technically sensor has to send cat level information to xDrip+.)
* Thresholds can be set in [preferences](../Configuration/Preferences#status-lights).
* If sensor level is the same as phone battery level you xDrip+ version is probably too old and needs an update.
   
   ![Sensor levels equals phone battery level](../images/Home2021_ActionSensorBat.png)

### Careportal - section O

* BG check, prime/fill, sensor insert and pump battery change are the base for the data displayed in [section N](#careportal-section-n).
* Prime/Fill allows you to record pump site and insulin cartridge change.
* Section O reflects the Nightscout careportal. So exercise, announcement and question are special forms of notes.

### Tools - section P

#### History Browser

* Allows you to ride back in AAPS hsitory.

#### TDD

* Total daily dose = bolus + basal per day
* Some doctors use - especially for new pumpers - a basal-bolus-ratio of 50:50. 
* Therefore ratio is calculated as TDD / 2 * TBB (Total base basal = sum of basal rate within 24 hours). 
* Others prefer range of 32% to 37% of TDD for TBB. 
* Like most of these rules-of-thumb it is of limited real validity. Note: Your diabetes may vary!

![Histroy browser + TDD](../images/Home2021_Action_HB_TDD.png)

## Insulin Profile

![Insulin Profile](../images/Screenshot_insulin_profile.png)

* This shows the activity profile of the insulin you have chosen in [config builder](../Configuration/Config-Builder#insulin). 
* The PURPLE line shows how much insulin remains after it has been injected as it decays with time and the BLUE line shows how active it is.
* The important thing to note is that the decay has a long tail. 
* If you have been used to manual pumping you have probably been used to assuming that insulin decays over about 3.5 hours. 
* However, when you are looping the long tail matters as the calculations are far more precise and these small amounts add up when they are subjected to the recursive calculations in the AndroidAPS algorithm.

For a more detailed discussion of the different types of insulin, their activity profiles and why all this matters you can read an article here on [Understanding the New IOB Curves Based on Exponential Activity Curves](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

And you can read an excellent blog article about it here: [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

And even more at: [Exponential Insulin Curves + Fiasp](https://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Stare pompă

![Stare pompă](../images/Screenshot_PumpStatus.png)

* Different information on pump status. Displayed information depends on your pump model.
* See [pumps page](../Hardware/pumps.rst) for details.

## Care Portal

Careportal replicated the functions you will find on your Nightscout screen under the “+” symbol which allows you to add notes to your records.

### Review carb calculation

![Review carb calculation on treatment tab](../images/Screenshots_TreatCalc.png)

* If you have used the [Bolus Wizard](../Getting-Started/Screenshots#bolus-wizard) to calculate insulin dosage you can review this calculation later on treatments tab.
* Just press the green Calc link. (Depending on pump used insulin and carbs can also be shown in one single line in treatments.)

### Carb correction

![Treatment in 1 or 2 lines](../images/Treatment_1or2_lines.png)

Treatment tab can be used to correct faulty carb entries (i.e. you over- or underestimated carbs).

1. Check and remember actual COB and IOB on homescreen.
2. Depending on pump in treatment tab carbs might be shown together with insulin in one line or as a separate entry (i.e. with Dana RS).
3. Remove the entry with the faulty carb amount.
4. Make sure carbs are removed successfully by checking COB on homescreen again.
5. Do the same for IOB if there is just one line in treatment tab including carbs and insulin.
   
   -> If carbs are not removed as intended and you add additional carbs as explained here (6.), COB will be too high and that might lead to too high insulin delivery.

6. Enter correct carb amount through carbs button on homescreen and make sure to set the correct event time.

7. If there is just one line in treatment tab including carbs and insulin you have to add also the amount of insulin. Make sure to set the correct event time and check IOB on homescreen after confirming the new entry.

## Buclă, AMA / SMB

* Aceste pagini prezintă detalii despre calculele algoritmului și de ce AAPS acționează în modul în care funcționează.
* Calculele se fac de fiecare dată când sistemul primește o nouă citire de la CGM.
* Pentru mai multe detalii vedeţi [secțiunea APS din pagina config builder](../Configuration/Config-Builder#aps).

## Profil

![Profil](../images/Screenshots_Profile.png)

* Profilul conţine informaţii despre setările personale ale diabetului:
   
   * DIA (Durata de Acțiune a Insulinei)
   * IC sau I:C: Raportul insulină la carbohidrați
   * ISF: Factorul de sensibilitate la insulină
   * Basal rate
   * Target: Blood glucose level that you want AAPS to be aiming for

* You can either use a [local profile](../Configuration/Config-Builder#local-profile-recommended) that can be edited on your smartphone or a [Nightscout profile](../Configuration/Config-Builder#ns-profile) which must be edited on your NS page and transferred to your phone afterwards. For details see the corresponding sections on the [config builder page](../Configuration/Config-Builder.md).

## Treatment

History of the following treatments:

* Bolus & carbs -> option to [remove entries](../Getting-Started/Screenshots#carb-correction) to correct history
* [Bolus extins](../Usage/Extended-Carbs#extended-bolus)
* Temporary basal rate
* [Temporary target](../Usage/temptarget.md)
* [Schimbare de profil](../Usage/Profiles.md)
* [Careportal](../Usage/CPbefore26#careportal-discontinued) - notes entered through action tab and notes in dialogues

## BG Source - xDrip, Dexcom App (pateched)...

![BG Source tab - here xDrip](../images/Screenshots_BGSource.png)

* Depending on your BG source settings this tab is named differntly.
* Shows history of CGM readings and offers option to remove reading in case of failure (i.e. compression low).

## Client NS

![Client NS](../images/Screenshots_NSClient.png)

* Displays status of the connection with your Nightscout site.
* Settings are made in [preferences](../Configuration/Preferences#nsclient). You can open the corresponding section by clicking the cog wheel on the top right side of the screen.
* For troubleshooting see this [page](../Usage/Troubleshooting-NSClient.md).