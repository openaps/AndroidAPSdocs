Freestyle Libre 1
**************************************************

Om je Libre te gebruiken als een CGM die elke 5 minuten nieuwe BG waarden krijgt, moet je eerst een NFC naar Bluetooth adapter kopen, zoals:

* MiaoMiao Reader (version 1 or 2) `https://www.miaomiao.cool/ <https://www.miaomiao.cool/>`_
* Blucon Nightrider `https://www.ambrosiasys.com/our-products/blucon/ <https://www.ambrosiasys.com/our-products/blucon/>`_
* Bubble `https://bubbleshop.eu/ <https://bubbleshop.eu/>`_

Additionally it is possible to use a specific watch, the Sony Smartwatch 3 which has an NFC chip which can be enabled and can be used as a NFC collector. However the custom NFC to Bluetooth adapters listed above offer a less complex solution and would be used by the majority of those wanting to use their Libre 1 as a CGM.
* Sony Smartwatch 3 (SWR50) `https://github.com/pimpimmi/LibreAlarm/wiki/ <https://github.com/pimpimmi/LibreAlarm/wiki/>`_

As it currently stands, if using Libre 1 as BG source you cannot activate ‘Enable SMB always’ and ‘Enable SMB after carbs’ within the SMB algorithm. De BG waarden van Libre 1 zijn niet betrouwbaar genoeg om het veilig te gebruiken. Zie `Filteren van glucosewaardes <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_ voor meer details.

Libre met xDrip+
==================================================
* Als nog niet is ingesteld download dan xdrip en volg de instructies voor: `LimiTTEer <https://github.com/JoernL/LimiTTer>`_,  `Libre Alarm <https://github.com/pimpimmi/LibreAlarm/wiki>`_ of `BlueReader <https://unendlichkeit.net/wordpress/?p=680&lang=en>`_ (`Hardware <https://bluetoolz.de/wordpress/>`_).
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
