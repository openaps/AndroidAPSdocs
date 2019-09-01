Freestyle Libre 2
*********************

Freestyle Libre 2 sensors can provide BG values to AndroidAPS every 5 minutes. As they send them directly via bluetooth to your phone, you won't need to buy a bluetooth adapter like MiaoMiao anymore. Until now, using Libre 2 as BG source you cannot activate ‘Enable SMB always’ and ‘Enable SMB after carbs’ within SMB algorithm. The BG values of Libre 2 are not smooth enough to use it safely. Další podrobnosti viz `Vyhlazování glykémií <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md>`_.

Step 1: Build your own patched Librelink-App
==============
* Build your own patched Librelink app following `these instructions <https://github.com/user987654321resu/Libre2-patched-App>`_.
* Install on your phone and start a new sensor with your patched app.

Step 2: Install and configure xDrip+ app
==============
* If not already set up then download xdrip app and install one of the latest nightly builts from `here <https://github.com/NightscoutFoundation/xDrip/releases>`_.
* V xDrip vyberte Nastavení -> Komunikace mezi aplikacemi - > Lokální odesílání dat a vyberte zapnout.
* V xDrip vyberte Nastavení -> Komunikace mezi aplikacemi - > Přijímat ošetření a vyberte vypnout.
* Chcete-li, aby bylo možné přes AndroidAPS kalibrovat senzor, jděte v xDripu do Nastavení > Komunikace mezi aplikacemi > Accept Calibrations a vyberte zapnout.  Můžete také zkontrolovat v xDripu nastavení v částí Nastavení > Méně častá nastavení > Rozšířené kalibrace.
* Na kartě Konfigurace (v AndroidAPS) vyberte xDrip.
* For settings in xDrip+ with screenshots see `xDrip+ settings page <../Configuration/xdrip.md>`__. Je zde část pro základní nastavení xDrip+ a pro nastavení xDrip_ s Freestyle Libre.

Step 3: Configure AndroidAPS
==============
* In AndroidAPS go to Config Builder > BG Source and check 'xDrip+' 
* If AndroidAPS does not receive BG values when phone is in airplane mode, use `Identify receiver` as describe on `xDrip+ settings page <../Configuration/xdrip.md>`_.
