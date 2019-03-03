# Screenshots

## Overzicht-scherm

![Overzicht-scherm](../images/Screenshot_Home_screen_V2_1.png)

Dit is het eerste scherm dat je ziet wanneer je AndroidAPS opent en je vindt er de meeste dingen die je dagelijks nodig hebt.

**Sectie A:** Hiermee kun je navigeren tussen de verschillende AndroidAPS modules, door naar links of rechts te vegen.

**Sectie B:** Hier zie je de status van de loop, die je hier ook kunt veranderen (de closed loop deactiveren, onderbreken etc). Je huidige profiel is zichtbaar en jouw streefdoel. Je kunt hier ook een (tijdelijke) profielswitch en tijdelijk streefdoel instellen. Aanpassingen maak je door een veld lang ingedrukt te houden. Houd bijvoorbeeld de donkerblauwe knop rechtsboven met streefdoel ("5.5" in screenshot) lang ingedrukt om een tijdelijk streefdoel in te stellen.

**Sectie C:** Hier zie je de laatste glucosewaarde van jouw CGM, en hoe lang geleden deze gemeten was. Ook de verandering in de afgelopen 15 en 40 minuten, jouw actuele basaalstand - inclusief eventuele tijdelijke basaalstand (TBR, temporary basal rate), de nog werkzame insuline (IOB, insulin on board) en hoeveelheid koolhydraten (COB, carbs on board).

The optional [status lights](../Configuration/Preferences.md) (CAN | INS | RES | SEN | BAT) give a visual warning for low reservoir and battery level as well as overdue site change.

The insulin on board figure would be zero if just your standard basal was running and there was no insulin remaining from previous boluses. The figures in brackets show how much consists of insulin remaining from previous boluses and how much is a basal variation due to previous TBRs programmed by AAPS. This second component may be negative if there have recently been periods of reduced basal.

**Section D:** Click the arrow on the right side of the screen in section D to select which information is displayed on the charts below.

**Section E:** Is the graph showing your blood glucose (BG) as read from your glucose monitor (CGM) it also shows Nightscout notifications such as fingerstick calibrations, and carbs entries. Long press on the graph to change the time scale. You can choose 6, 8, 12, 18 or 24 hours.

The extended lines show the predicted BG calculations and trends - if you have it selected.

    * Oranje lijn: COB (kleur wordt over het algemeen gebruikt voor COB en koolhydraten)
    * Donkerblauwe lijn: IOB (kleur wordt over het algemeen gebruikt voor IOB en insuline)
    * Lichtblauwe lijn: zero-temp
    * Donkergele lijn: UAM
    

These lines show you the different predictions based on current carb absorption (COB); insulin only (IOB); showing how long it will take BG to level off at/above target if deviations suddenly cease and we run a zero temp until then (zero-temp) and unannounced meal/effect detection where carbs are detected but have not been entered into the system by the user (UAM).

The solid blue line shows the basal delivery of your pump. The dotted blue line is what the basal rate would be if there were no temporary basal adjustments (TBRs) and the solid blue line is the actual delivery over time.

**Section F:** is also configurable using the options in section D. In this example we are showing the IoB (Insulin on Board) - if there were no TBRs and no remaining boluses this would be zero, the sensitivity, and the deviation. GREY bars show a deviation due to carbs, GREEN that BG is higher than the algorithm expected it to be and RED that it is lower than the algorithm expected.

**Section G:** enables you to administer a bolus (normally you would use the Calculator button to do this) and to add a fingerstick CGM calibration.

## Boluscalcuator

![Boluscalculator](../images/Screenshot_Bolus_calculator.png)

When you want to make a meal bolus this is where you will normally make it from.

**Section A:** contains is where you input the information about the bolus that you want. The BG field is normally already populated with the latest reading from your CGM. If you don't have a working CGM then it will be blank. In the CARBS field you add your estimate of the amount of carbs - or equivalent - that you want to bolus for. The CORR field is if you want to modify the end dosage for some reason, and the CARB TIME field is for pre-bolusing so you can tell the system that there will be a delay before the carbs are to be expected and the bolus will be delayed. You can put a negative number in this field if you are bolusing for past carbs.

SUPER BOLUS is where the basal insulin for the next two hours is added to the immediate bolus and a zero TBR is issued for the following two hours to take back the extra insulin. The idea is to deliver the insulin sooner and hopefully reduce spikes.

**Section B:** shows the calculated bolus. If the amount of insulin on board already exceeds the calculated bolus then it will just display the amount of carbs still required.

**Section C:** shows the various elements that have been used to calculate the bolus. You can deselect any that you do not want to include but you normally wouldn't want to.

<b>Combinations of COB and IOB and what they mean</b>

<ul>
    <li>Wanneer je COB en IOB hebt aangevinkt, dan worden meegenomen: koolhydraten die nog niet zijn opgenomen en waarvoor nog geen insuline is genomen + alle insuline die eerder is afgegeven (dit zijn zowel tijdelijke basaalstanden als SMB).</li>
    <li>Wanneer je COB aanvinkt en IOB niet, dan loop je het risico om teveel insuline te krijgen omdat AAPS geen rekening houdt met de hoeveelheid insuline die eerder is afgegeven. </li>
    <li>Wanneer je IOB aanvinkt en COB niet, dan loop je het risico om te weinig insuline te krijgen. Want AAPS houdt wel rekening met insuline die eerder is afgegeven maar niet met koolhydraten die nog moeten worden opgenomen. Dan kun je een melding "Te weinig ... g" krijgen (ontbrekende koolhydraten).
</ul>

If you bolus for additional food shortly after a meal bolus (i.e. additional desert) it can be helpful to untick all boxes. This way just the new carbs are being added as the main meal won't necessarily be absorbed so IOB won't match COB accurately shortly after a meal bolus.

## Insuline curve

![Insuline curve](../images/Screenshot_insulin_profile.png)

This shows the activity profile of the insulin you have chosen. The PURPLE line shows how much insulin remains after it has been injected as it decays with time and the BLUE line shows how active it is.

You will normally be using one of the Oref profiles - and the important thing to note is that the decay has a long tail. If you have been used to manual pumping you have probably been used to assuming that insulin decays over about 3.5 hours. However, when you are looping the long tail matters as the calculations are far more precise and these small amounts add up when they are subjected to the recursive calculations in the AndroidAPS algorithm.

For a more detailed discussion of the different types of insulin, their activity profiles and why all this matters you can read an article here on [Understanding the New IOB Curves Based on Exponential Activity Curves](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

And you can read an excellent blog article about it here: [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

And more at: [Exponential Insulin Curves + Fiasp](http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Pompstatus

![Pompstatus](../images/Screenshot_pump_Combo.png)

Here we see the status of the insulin pump - in this case an Accu-Chek Combo. The information displayed is self explanatory. A long press on the HISTORY button will read the data from your pump history, including your basal profile. But remember only one basal profile is supported on the Combo pump.

## Care Portal

![Care Portal](../images/Screenshot_care_portal.png)

This replicates the functions you will find on your Nightscout screen under the "+" symbol which allows you to add notes to your records. Functions such as recording when you change a pump site, or insulin cartridge should be self explanatory. BUT this section does not issue any commands to your pump. So if you add a bolus using this screen it simply makes a note of this on your Nightscout record, the pump won't be instructed to deliver a bolus.

## Loop, MA, AMA, SMB

You don't normally need to worry about these, they show the results of the OpenAPS algorithm which runs each time the system gets a fresh reading from the CGM. These are discussed elsewhere.

## Profiel

![Profiel](../images/Screenshot_profile.png)

AndroidAPS can run using a number of different profile configuratons. Typically - as shown here - the Nightscout profile has been downloaded via the built in Nighscout client and is displayed here in read-only form. If you wanted to make any changes you would do this from your Nightscout user interface and then do a "Switch Profile" on your AndroidAPS rig to refresh the download. Data such as the basal profile would then be automatically copied over to your pump.

**DIA:** stands for Duration of Insulin Action and it is discussed above in the section on insulin profiles.

**IC:** is Insulin to Carb ratio. This profile has a number of different values set for different times of day.

**ISF:** is Insulin Sensitivity Factor - the amount by which one unit of insulin will reduce your blood glucose assuming that nothing else changes.

**Basal:** is the basal profile programmed into your pump.

**Target:** is the blood glucose level that you want the rig to be aiming for all the time. You can set different levels for differenttimes of day if you wish, and you can even set an upper and lower range so that the rig will only start to make changes when the predicted blood glucose value falls outside, but if you do that then the rig will respond more slowly and you are unlikely to achieve such stable blood sugars.

## Behandelingen, xDrip, NSClient

These are simply logs of treatments (boluses and carbs), xDrip messages and messages sent to Nightscout via the built-in Nightscout client. You don't normally need to worry about any of these unless there is a problem.

## Configurator

![Configurator](../images/Screenshot_config_builder.png)

This is where you will set up the configuraton of your AndroidAPS rig. This screenshot shows a pretty typical rig using a Combo pump, a Dexcom G5 CGM sensor being managed via xDrip+ and running with NovoRapid insulin on an Oref profile and connected to a Nightscout cloud based server.

The tick box on the right determines if that particular module will be displayed in the top menu bar (see section A at Homescreen) and the small gear wheel symbol allows access to the setting for that module, if there are any.

## Instellingen en voorkeuren

At the top right of the navigation bar you will find three small vertical dots. Pressing on these takes you to the app's preferences and settings, and enables you to export your settings if ever you need to transfer to a different rig. These are discussed elsewhere in the wiki.