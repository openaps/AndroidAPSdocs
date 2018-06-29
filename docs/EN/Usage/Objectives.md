# Understanding the Objectives

AndroidAPS has a series of Objectives that need to be completed to walk you through the features and settings of safe looping.  They ensure you have configured everything detailed in the sections above correctly, and that you understand what your system is doing and why so you can trust it.

If you are upgrading phones then you can export your settings to keep your progress through the objectives; in the three dots in the top right corner select _Export settings_, it will tell you which folder it has saved the file to.  On your new phone copy the file over to that location and then select _Import settings_.  Not only will your progress through the objectives be saved, but also your safety settings such as max bolus etc.  If you do not export and import your settings then you will need to start the objectives from the beginning again.  It is a good idea to back up your settings frequently just in case.
 
* **Objective 1:** Setting up visualization and monitoring, and analysing basals and ratios
  * Select the right blood glucose source for your setup.  See [BG Source](https://github.com/MilosKozak/AndroidAPS/wiki/BG-Source) for more information.
  * Select the right Pump in ConfigBuilder (select Virtual Pump if you are using a pump model with no AndroidAPS driver for open looping) to ensure your pump status can communicate with AndroidAPS.  If using DanaR pump then ensure you have followed [DanaR Insulin Pump](https://github.com/MilosKozak/AndroidAPS/wiki/DanaR-Insulin-Pump) instructions to ensure the link between pump and AndroidAPS.
  * Follow instructions in [Nightscout](https://github.com/MilosKozak/AndroidAPS/wiki/Nightscout) page to ensure Nightscout can receive and display this data.
<br><br>_You may need to wait for the next blood glucose reading to arrive before AndroidAPS will recognise it._
 
* **Objective 2:** Starting on an open loop
  * Select Open Loop either from Preferences, or by pressing and holding the Loop button in top left of the home screen.
  * Work through the [[Preferences]] to set up for you.
  * Manually enact at least 20 of the temporary basal rate suggestions over a period of 7 days; input them to your pump and confirm in AndroidAPS that you have accepted them.  Ensure this data shows in AndroidAPS and Nightscout.
 
* **Objective 3:** Understanding your open loop, including its temp basal recommendations
  * Start to understand the thinking behind the temp basal recommendations by looking at the [determine basal logic](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) and both the forecast line in AndroidAPS homescreen/Nightscout and the summary of outputs from the calculations in your OpenAPS tab.
  <br><br>_You will want to set your target higher than usual until you are confident in the calculations and settings.  The system allows a low target to be a minimum of 4 or maximum of 10, and a high target to be a minimum of 5 and maximum of 15.  A temporary target as a single value can be anywhere in the range of 4 to 15.  The target is the value that calculations are based on, and not the same as where you aim to keep your blood glucose values within.  If your target is very wide (say, 3 or more mmol wide), you will often find because blood glucose is eventually predicted to be somewhere in that wide range not many fluctuating temporary basal rates are suggested. You may want to experiment with adjusting your targets to be a closer together range (say, 1 or less mmol wide), and observe how the behavior of your system changes as a result.  You can view a wider range (green lines) on the graph for the values you aim to keep your blood glucose within by entering different values in Preference > Range for Visualisation._
  <br><br>_Stop here if you are open looping with a virtual pump - do not click Verify at the end of this objective._

* **Objective 4:** Starting to close the loop with Low Glucose Suspend
  * Select Closed Loop either from Preferences, or by pressing and holding the Open Loop button in the top left of the home screen.
  * Set your target range slightly higher than you usually aim for, just to be safe.
  * Watch  how temporary basals are active by viewing the blue basal text on the homescreen or the blue basal render on the homescreen graph.
  * Ensure your settings have supported AndroidAPS to avoid having to treat a low glucose over a period of 5 days.  If you are still having frequent or severe low glucose episodes then consider refining your DIA, basal, ISF and carb ratios.
<br><br>_The system will override your maxIOB settings to zero, which means if blood glucose is dropping it can reduce basal for you, but if blood glucose is rising then it will only increase basal if the IOB is negative (from a previous Low Glucose Suspend), otherwise basal rates will remain the same as your selected profile.  You may temporarily experience spikes following treated hypos without the ability to increase basal on the rebound._
 
* **Objective 5:** Tuning the closed loop, raising max IOB above 0 and gradually lowering BG targets
  * Raise your maxIOB above 0 over a period of 1 day, the default is recommended to be 2 but you should slowly work up to this until you know your settings work for you.
  * Once confident on how much IOB suits your looping patterns then reduce your targets to your desired level.
 
* **Objective 6:** Adjust basals and ratios if needed, and then enable auto-sens
  * You can use [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) as a one off to check your basals remain accurate, or do a traditional basal test.
  * Enable [auto-sens](https://github.com/MilosKozak/AndroidAPS/wiki/Open-APS-features) over a period of 7 days and watch the white line on the homescreen graph show how your sensitivity to insulin may be rising or falling as a result of exercise or hormones etc, and keep an eye in the OpenAPS report tab how AndroidAPS is adjusting the basals and/or targets accordingly.
<br><br>_Don’t forget to record your looping in [this form](http://bit.ly/nowlooping) logging AndroidAPS as your type of DIY loop software, if you have not already done so._
 
* **Objective 7:** Enabling additional features for daytime use, such as advanced meal assist
  * Now you should feel confident with how AndroidAPS works and what settings reflect your diabetes best, then over a period of 14 days you can try additional features that automate even more of the work for you.
