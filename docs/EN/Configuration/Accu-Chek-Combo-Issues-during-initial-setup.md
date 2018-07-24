# Why does pairing with the pump does not work with the app "ruffy"?
There are serveral possible reasons. Try the following steps:
1.  Insert a **fresh or full battery** into the pump. Look at the battery section for details. Make sure that the pump is very close to the smartphone.

![Combo should be next to phone](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/Combo_next_to_Phone.png)

2. Turn off or remove any other bluetooth devices so they will not be able to establish a connection to the phone while pairing is in progress. Any parallel bluetooth communication or prompt to establish connections might disturb the pairing process.

3.  Delete already connected devices in the Bluetooth menu of the pump: **BLUETOOTH SETTINGS / CONNECTION / REMOVE** until 
    **NO DEVICE** is shown.
4.  Delete a pump already connected to the phone via Bluetooth: Under Settings / Bluetooth, remove the paired device 
    "**SpiritCombo**"
5.  Make sure, that AAPS not running in background the loop. Deaktivate Loop in AAPS.
6.  Now start ruffy on the phone. You may press Reset! and remove old Bonding. Then hit Connect!.
7.  In the Bluetooth menu of the pump, go to **ADD DEVICE / ADD CONNECTION**. Press *CONNECT!** 
    * Step 5 and 6 have to be in a short timing.
8.  Now the Pump should show up the BT Name of phone to select for pairing. Here it is importand to whait at least 5s 
    bevore you hit the select button on Pump. Otherwise the Pumpe will not send the Paring request to the Phone proberly.
 
    * If Combo Pump is set to 5s Screentime out, you may test it with 40s (original setting). From experiance the time 
      between pump is showing up in phone until select phone is around 5-10s. In many other cases pairing just times out 
      without successfully Pair. Later you should set it back to 5s, to meet AAPS Combo settings.
    * If the pump does not show the phone as a pairing device at all, your phone's Bluetooth stack is probably not 
      compatible with the pump. Make sure you are running a new **LineageOS ≥ 14.1** or **Android ≥ 8.1 (Oreo)**. If 
      possible, try another smartphone. You can find a list of already successfully used smartphones under [AAPS Phones] 
      (https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). 

9.  At next Pump should show up a 10 digit security code. And Ruffy a screen to enter it. So enter it in Ruffy and you 
    should be ready to go.
10.  Reboot the phone.
11. Now you can restart AAPS loop.
