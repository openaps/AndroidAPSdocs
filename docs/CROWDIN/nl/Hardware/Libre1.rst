Freestyle Libre 1
**************************************************

Om je Libre te gebruiken als een CGM die elke 5 minuten nieuwe BG waarden krijgt, moet je eerst een NFC naar Bluetooth adapter kopen, zoals:

* MiaoMiao (versie 1 of 2) `https://www.miaomiao.cool/ <https://www.miaomiao.cool/>`_
* Blucon Nightrider `https://www.ambrosiasys.com/our-products/blucon/ <https://www.ambrosiasys.com/our-products/blucon/>`_
* Bubble `https://bubbleshop.eu/ <https://bubbleshop.eu/>`_

Bovendien is het mogelijk om een specifieke smartwactch te gebruiken, de Sony Smartwatch 3. Deze heeft een NFC chip die de gegevens rechtstreeks uit jouw Libre kan ontvangen. Deze smartwatch moet dan wel permanent tegen de Libre aan zitten, bijvoorbeeld dmv een armband of tape. Al zijn de hierboven genoemde NFC naar Bluetooth-adapters wel een stuk kleiner en daardoor handiger in gebruik, de meeste mensen kiezen dan ook voor één van die adapters.
* Sony Smartwatch 3 (SWR50) als ontvanger `https://github.com/pimpimmi/LibreAlarm/wiki/ <https://github.com/pimpimmi/LibreAlarm/wiki/>`_

Tot nu toe kun je met Libre 1 als BG bron 'Activeer SMB altijd' en 'Activeer SMB na koolhydraten' in SMB algoritme niet aanzetten. De BG waarden van Libre 1 zijn niet betrouwbaar genoeg om die functies veilig te gebruiken (alle overige SMB functies zijn overigens wél gewoon te gebruiken). Zie `Filteren van glucosewaardes <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_ voor meer details.

Libre met xDrip+
==================================================
* If not already set up then download xDrip+ and follow instructions on `LimiTTEer <https://github.com/JoernL/LimiTTer>`_ or  `Libre Alarm <https://github.com/pimpimmi/LibreAlarm/wiki>`_.
* In xdrip ga naar Settings > Interapp Compatibility > Broadcast Data Locally en selecteer ON. Deze instelling zorgt ervoor dat de xDrip app op jouw telefoon jouw waardes direct naar de AndroidAPS app (ook op jouw telefoon) doorstuurt en je dus geen internetverbinding nodig hebt.
* In xdrip ga naar Instellingen > Interapp Settings > Accept Treatments selecteer OFF.
* Als je AndroidAPS wilt gebruiken om te kalibreren ga dan in xdrip naar Instellingen > Interapp settings > Accept Calibrations en selecteer ON.  Je kunt ook de opties aanpassen aan jouw behoefte in Instellingen > Minder vaak voorkomende instellingen > Advanced Calibration Settings.
* Selecteer xdrip in Configurator (instellingen in AndroidAPS).
* Instellingen in xDrip+ aanpassen volgens `xDrip+ instellingen pagina <../Configuration/xdrip.html>`__. Er is een onderdeel voor de standaard-xDrip+ instellingen en voor Freestyle Libre xDrip+ instellingen.
* Als AAPS geen BG-waarden ontvangt wanneer de telefoon in vliegtuigmodus staat, gebruik dan 'Identify receiver' (Identificeer ontvanger) zoals beschreven op de `xDrip instellingen pagina <../Configuration/xdrip.html>`_.

Libre met Glimp
==================================================
* Je hebt Glimp versie 4.15.57 of nieuwer nodig. Oudere versies worden op dit moment niet ondersteund.
* Als het niet al is ingesteld, download Glimp en volg de instructies van `Nightscout <http://www.nightscout.info/wiki/welcome/nightscout-for-libre>`_.
* Selecteer Glimp in Configurator (instellingen in AndroidAPS).
