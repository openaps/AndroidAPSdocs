Diaconn G8 Insulinpumpe
************************

Bluetooth-Pairing
===============================

- Klicke auf das Hamburger Menü in der oberen linken Ecke.

   .. image:: ../images/DiaconnG8/DiaconnG8_01.jpg
    :alt: Hamburger Menü

- Klicke auf Konfiguration.
 
   .. image:: ../images/DiaconnG8/DiaconnG8_02.jpg
    :alt: Konfiguration
    
- Nachdem Auswahl der Diaconn G8 Pumpe auf das Einstellungssymbol (Zahnrad) klicken.

   .. image:: ../images/DiaconnG8/DiaconnG8_03.jpg
    :alt: Einstellungen
    
- Wähle 'ausgewählte Pumpe'.

   .. image:: ../images/DiaconnG8/DiaconnG8_04.jpg
    :alt: Pumpe auswählen
 
- Wähle die Modellnummer Deiner Insulinpumpe aus, sobald sie in der Liste erscheint.

   .. image:: ../images/DiaconnG8/DiaconnG8_05.jpg
    :alt: Pump pairing
    
- Es gibt zwei Möglichkeiten, um Deine Modellnummer zu überprüfen:
   
   i. Die letzten 5 Ziffern der Seriennummer auf der Rückseite der Pumpe.
   ii. Drücke den = Button > Information > BLE > letzte 5 Ziffern.
      
      .. image:: ../images/DiaconnG8/DiaconnG8_06.jpg
       :alt: Modellnr. prüfen
       
- Nach Auswahl der Pumpe erscheint ein Fenster, in dem der PIN Code abgefragt wird. Gib die PIN-Nummer ein, die auf Deiner Pumpe angezeigt wird, um die Verbindung abzuschließen.
 
   .. image:: ../images/DiaconnG8/DiaconnG8_07.jpg
    :alt: PIN-Code
    
Pump status check and log synchronization
==========================================

- Once your pump is connected, click on the Bluetooth symbol to check the status and to synchronize logs.

   .. image:: ../images/DiaconnG8/DiaconnG8_08.jpg
    :alt: Bluetooth status
    
Bluetooth Troubleshooting
==========================

**What to do in the case of an unstable Bluetooth connection with the pump.**

Method 1 ) Check the pump again after AAPS application is completed.
--------------------------------------------------------------------- 
- Click on the 3 dots button on the top right.

   .. image:: ../images/DiaconnG8/DiaconnG8_09.jpg
    :alt: Preferences menu
    
- Click on Exit. 

   .. image:: ../images/DiaconnG8/DiaconnG8_10.jpg
    :alt: Exit

Method 2) If the first method doesn’t work, disconnect Bluetooth and then reconnect.
-------------------------------------------------------------------------------------
- Press and hold the Bluetooth button at the top for about 3 seconds. 

   .. image:: ../images/DiaconnG8/DiaconnG8_11.jpg
    :alt: Bluetooth button
 
- Click on the Setting button on the paired Diaconn G8 Insulin pump.

   .. image:: ../images/DiaconnG8/DiaconnG8_12.jpg
    :alt: Settings button
 
- Unpair.

   .. image:: ../images/DiaconnG8/DiaconnG8_13.jpg
    :alt: Unpair
    
- Repeat the Bluetooth pairing process for the pump (see above).

Further Information
====================
Diaconn G8 Insulin pump option setting
--------------------------------------
-	Config manager > pump > Diaconn G8 > Settings
-	DIACONN G8 at the top> 3 dots button on the top right > Diaconn G8 Preferences

.. image:: ../images/DiaconnG8/DiaconnG8_14.jpg
 :alt: Diaconn G8 pump options
    
- If the **Log reservoir change** option is activated, the relevant details are automatically uploaded to the careportal when an “Insulin Change” event occurs.
- If the **Log needle change** option is activated, the relevant details are automatically uploaded to the careportal when a “Site Change” event occurs. 
- If the **Log tube change** option is activated, the relevant details are automatically uploaded to the careportal when a “Tube Change” event occurs.
- If the **Log battery change** option is activated, the relevant details are automatically uploaded to the careportal when a “Battery Change” event occurs, and the PUMP BATTERY CHANGE button in the ACTION tab is deactivated. (Note: To change the battery, please stop all in-progress injection functions before proceeding.)
 
.. image:: ../images/DiaconnG8/DiaconnG8_15.jpg
 :alt: Diaconn G8 actions menu

Extended Bolus function
------------------------
- If you use extended bolus it will disable closed loop.

- See `this page <../Usage/Extended-Carbs.html#why-extended-boluses-won-t-work-in-a-closed-loop-environment>`_ for details why extended bolus does not work in a closed loop environment.

