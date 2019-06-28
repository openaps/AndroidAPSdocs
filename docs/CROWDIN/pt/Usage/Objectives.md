# Objectivos

AndroidAPS has a series of Objectives that need to be completed to walk you through the features and settings of safe looping. They ensure you have configured everything detailed in the sections above correctly, and that you understand what your system is doing and why so you can trust it.

If you are **upgrading phones** then you can [export your settings](../Usage/Objectives#export-import-settings) to keep your progress through the objectives. Not only will your progress through the objectives be saved, but also your safety settings such as max bolus etc. If you do not export and import your settings then you will need to start the objectives from the beginning again. It is a good idea to back up your settings frequently just in case. See below for details.  

### Objective 1: Setting up visualization and monitoring, analysing basals and ratios

    * Select the right blood glucose source for your setup.  See [BG Source](../Configuration/BG-Source.md) for more information.
    * Select the right Pump in ConfigBuilder (select Virtual Pump if you are using a pump model with no AndroidAPS driver for looping) to ensure your pump status can communicate with AndroidAPS.  If using DanaR pump then ensure you have followed [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump.md) instructions to ensure the link between pump and AndroidAPS.
    * Follow instructions in [Nightscout](../Installing-AndroidAPS/Nightscout.md) page to ensure Nightscout can receive and display this data.
    

*You may need to wait for the next blood glucose reading to arrive before AndroidAPS will recognise it.*

### Objective 2: Starting on an open loop

    * Select Open Loop either from Preferences, or by pressing and holding the Loop button in top left of the home screen.
    * Work through the [Preferences](../Configuration/Preferences.md) to set up for you.
    * Manually enact at least 20 of the temporary basal rate suggestions over a period of 7 days; input them to your pump and confirm in AndroidAPS that you have accepted them.  Ensure this data shows in AndroidAPS and Nightscout.
    * Enable [temp targets](../Usage/temptarget.md) if necessary. Use hypo temp targets to prevent that the system will correct too strong because of a raising blood glucose after a hypo. 
    

### Objective 3: Understanding your open loop, including its temp basal recommendations

    * Start to understand the thinking behind the temp basal recommendations by looking at the [determine basal logic](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) and both the forecast line in AndroidAPS homescreen/Nightscout and the summary of outputs from the calculations in your OpenAPS tab.
    

*You will want to set your target higher than usual until you are confident in the calculations and settings. The system allows a low target to be a minimum of 4 or maximum of 10, and a high target to be a minimum of 5 and maximum of 15. A temporary target as a single value can be anywhere in the range of 4 to 15. The target is the value that calculations are based on, and not the same as where you aim to keep your blood glucose values within. If your target is very wide (say, 3 or more mmol wide), you will often find because blood glucose is eventually predicted to be somewhere in that wide range not many fluctuating temporary basal rates are suggested. You may want to experiment with adjusting your targets to be a closer together range (say, 1 or less mmol wide), and observe how the behavior of your system changes as a result. You can view a wider range (green lines) on the graph for the values you aim to keep your blood glucose within by entering different values in Preference > Range for Visualisation.*

**Stop here if you are open looping with a virtual pump - do not click Verify at the end of this objective.**

### Objective 4: Starting to close the loop with Low Glucose Suspend

    * Select Closed Loop either from Preferences, or by pressing and holding the Open Loop button in the top left of the home screen.
    * Set your target range slightly higher than you usually aim for, just to be safe.
    * Watch  how temporary basals are active by viewing the blue basal text on the homescreen or the blue basal render on the homescreen graph.
    * Ensure your settings have supported AndroidAPS to avoid having to treat a low glucose over a period of 5 days.  If you are still having frequent or severe low glucose episodes then consider refining your DIA, basal, ISF and carb ratios.
    

*The system will override your maxIOB settings to zero, which means if blood glucose is dropping it can reduce basal for you, but if blood glucose is rising then it will only increase basal if the IOB is negative (from a previous Low Glucose Suspend), otherwise basal rates will remain the same as your selected profile. You may temporarily experience spikes following treated hypos without the ability to increase basal on the rebound.*

### Objective 5: Tuning the closed loop, raising max IOB above 0 and gradually lowering BG targets

    * Raise your 'Maximum total IOB OpenAPS can’t go over' (in OpenAPS called 'max-iob') above 0 over a period of 1 day, the default recommendation is "average mealbolus + 3x max daily basal"(for SMB algorithm) or "3x max daily basal" (for older AMA algorithm) but you should slowly work up to this until you know your settings work for you (max daily basal = the maximum hourly value in any time segment of the day).
    * Once confident on how much IOB suits your looping patterns then reduce your targets to your desired level.
    

### Objective 6: Adjust basals and ratios if needed, and then enable autosens

    * You can use [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) as a one off to check your basals remain accurate, or do a traditional basal test.
    * Enable [autosens](../Usage/Open-APS-features.md) over a period of 7 days and watch the white line on the homescreen graph show how your sensitivity to insulin may be rising or falling as a result of exercise or hormones etc, and keep an eye in the OpenAPS report tab how AndroidAPS is adjusting the basals and/or targets accordingly.
    

*Don’t forget to record your looping in [this form](http://bit.ly/nowlooping) logging AndroidAPS as your type of DIY loop software, if you have not already done so.*

### Objective 7: Enabling additional oref0 features for daytime use, such as advanced meal assist (AMA)

    * Now you should feel confident with how AndroidAPS works and what settings reflect your diabetes best
    * Then over a period of 28 days you can try additional features that automate even more of the work for you such as the <a href="../Usage/Open-APS-features.html#advanced-meal-assist-ama">advanced meal assist</a>
    

### Objective 8: Enabling additional oref1 features for daytime use, such as super micro bolus (SMB)

    * You must read the <a href="../Usage/Open-APS-features.html#super-micro-bolus-smb">SMB chapter in this wiki</a> and [chapter oref1 in openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) to understand how SMB works, especially what's the idea behind zero-temping.
    * Then you ought to <a href="../Usage/Open-APS-features.html#maximum-total-iob-openaps-cant-go-over-openaps-max-iob">rise maxIOB</a> to get SMBs working fine. maxIOB now includes all IOB, not just added basal. That is, if given a bolus of 8 U for a meal and maxIOB is 7 U, no SMBs will be delivered until IOB drops below 7 U. A good start is maxIOB = average mealbolus + 3x max daily basal (max daily basal = the maximum hourly value in any time segment of the day)
    * min_5m_carbimpact default in absorption settings has changed from 3 to 8 going from AMA to SMB. If you are upgrading from AMA to SMB, you have to change it manualy
    

## Export & import settings

* **Export settings** on your old phone
  
  * Hamburger menu (top left corner of screen)
  * Manutenção
  * Exportar definições
  * File location will be shown
    
    ![AAPS export settings](../images/AAPS_ExportSettings.png)

* **Transfer** settings from old to new phone using the file location shown during export

* **Install AndroidAPS** on the new phone.
* **Importar configurações** no seu novo telefone 
  * Hamburger menu (top left corner of screen)
  * Manutenção
  * Importar configurações
* **Note for Dana RS users:** 
  * As pump connection settings are also imported AAPS on your new phone will already "know" the pump and therefore not start a bluetooth scan. Please pair new phone and pump manually.