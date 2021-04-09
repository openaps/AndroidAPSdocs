Freestyle Libre 1
**************************************************

Pentru a folosi senzorul Libre ca un CGM care primeste valori la fiecare 5 minute, mai întâi trebuie sa cumperi un adaptor NFC - Bluetooth precum:

* MiaoMiao Reader (versiunea 1 sau 2) ` https: //www.miaomiao.cool/ <https://www.miaomiao.cool/>` _
* Blucon Nightrider `https://www.ambrosiasys.com/our-products/blucon/ <https://www.ambrosiasys.com/our-products/blucon/>`_
* Bubble ` https: //bubleshops.eu/ <https://bubbleshop.eu/>` _

In plus, este posibil sa poți utiliza un anumit ceas inteligent, Sony Smartwatch 3 care are un cip NFC ce poate fi activat și utilizat ca un colector NFC. Cu toate acestea, adaptoarele personalizate NFC - Bluetooth listate anterior reprezinta o soluție mai putin complexa și sunt utilizare de majoritatea celor care vor sa folosească Libre 1 ca CGM.

* Sony Smartwatch 3 (SWR50) <https://github.com/pimpimmi/LibreAlarm/wiki/>https://github.com/pimpimmi/LibreAlarm/wiki`_

In prezent, daca folosești Libre 1 ca sursa de valori ale glicemiei, nu poți folosi opțiunile "Enable SMB always" si "Enable SMB after carbs" pentru algoritmul SMB. Valorile glicemiei furnizate de Libre 1 nu sunt suficient de bine normalizate pentru a fi folosite în siguranță. See `Smoothing blood glucose data <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_ for more details.

Daca se foloseste aplicatia xDrip+
==================================================
* Dacă nu este deja setat, descarca xDrip + și urmează instrucțiunile de pe ` LimitTTEer <https://github.com/JoernL/LimiTTer>` _ sau ` Libre Alarm <https://github.com/pimpimmi/LibreAlarm/wiki>` _.
* În xDrip mergi la Settings > Interapp Compatibility > Broadcast Data Locally și selecteaza ON.
* În xDrip mergi la Settings > Interapp Compatibility > Accept Treatments și selectează OFF.
* Dacă vrei sa introduci calibrări din AndroidAPS, in xDrip, mergi la Settings > Interapp Compatibility > Accept Calibrations și selectează ON.  S-ar putea să doriți de asemenea să revizuiți opțiunile din Settings > Less Common Settings > Advanced Calibration Settings.
* Alege xDrip în ConfigBuilder (setare din AndroidAPS).
* Pentru setări în xDrip + cu capturi de ecran vezi ' xDrip + settings page <../Configuration/xdrip.html>` __. Există o parte pentru setări de bază în xDrip+ și pentru setări Freestyle Libre xDrip+.
* If AAPS does not receive BG values when phone is in airplane mode, use 'Identify receiver' as describe on `xDrip+ settings page <../Configuration/xdrip.html>`_.

Dacă se folosește aplicația Glimp
==================================================
* Vei avea nevoie de Glimp versiunea 4.15.57 sau mai noua. Versiunile mai vechi nu sunt compatibile.
* If not already set up then download Glimp and follow instructions on `Nightscout <https://nightscout.github.io/uploader/setup/#glimp>`_.
* Selectează Glimp în ConfigBuilder (setare în AndroidAPS).
