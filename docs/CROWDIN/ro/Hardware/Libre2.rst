Freestyle Libre 2
**************************************************

Sistemul Freestyle Libre 2 poate raporta automat valorile periculoase ale glicemiei din sânge. Senzorul Libre2 trimite valoarea glicemiei la un receptor (cititor sau smartphone) în fiecare minut. Receptorul declanșează o alarmă dacă este necesar. Cu o versiune modificata a aplicației LibreLink si xDrip+, poți primi valori ale glicemiei in mod continuu pe smartphone. 

Senzorul poate fi calibrat pe intervalul de la -40mg/dl pana la +20 mg/dl (-2,2 mmol/l pana la +1,1 mmol/l) pentru a corecta diferențele dintre glucometru si citirile senzorului.

Valorile glicemiei pot fi de asemenea preluate și cu un transmițător Bluetooth ca în cazul senzorilor Libre 1.

Nota importanta: Acest setup nu se funcționează cu versiunea americana a senzorului Freestyle 2! Versiunea americană se va conecta doar la un cititor, nu la un telefon.

Pasul 1: Construiește propria ta aplicație LibreLink Patch
==================================================

Din motive juridice, procedura numita patching trebuie să fie făcută de tine. Utilizează motoarele de căutare pentru a găsi link-urile corespunzătoare. Exista doua variante: Aplicația Patch-ul originala recomandata blochează orice fel de conexiune la internet pentru a evita urmărirea. Cealaltă varianta este compatibila cu LibreView, capabilitate care ar putea fi cerut de medicul tău.

Aplicația patch-uita va trebui instalata în locul aplicației originale. Următorul senzor pornit cu aceasta aplicație va trimite valorile glicemiei prin Bluetooth către aplicația xDrip+ instalata pe telefonul tău.

Important: Pentru a evita eventualele probleme, ar putea ajuta ca mai întâi sa se instaleze și dezinstaleze aplicația originala pe un smartphone cu antena NFC. Antena NFC trebuie să fie activata. Asta nu consuma mai mult din baterie. Apoi instalează aplicația patch-uita. 

Aplicația patch-uita poate fi identificata de o notificare de autorizare în prim plan. Serviciul de autorizare din prim-plan îmbunătățește stabilitatea conexiunii în comparație cu aplicația originala care nu folosește acest serviciu.

.. image:: ../images/Libre2_ForegroundServiceNotification.png
  :alt: Serviciu de prim-plan LibreLink

Alti indicatori ar putea fi logo-ul pinguin Linux al meniului de 3 puncte -> Info sau font-ul aplicației patched. Aceste criterii sunt opționale în funcție de sursa aplicației.

.. image:: ../images/LibreLinkPatchedCheck.png
  :alt: Verificare Font LibreLink

Asigura-te că antena NFC este activată, activează memoria și permisiunea de locație pentru aplicația patched, activează detectarea automata a orei și fusului orar și setează cel putin o alarmă în aplicația patched. 

Acum pornește senzorul Libre 2 scanându-l cu aplicația patched. Asigura-te ca ai făcut toate setările.

Setări obligatorii pentru pornirea cu succes a senzorului: 

* Antena NFC activata/Bluetooth activat
* permisiunile de memorie și locație activate 
* serviciu de locație activat
* detecția automată a timpului și a fusului orar activata
* setează cel putin o alarmă în aplicația patched

Te rugăm să reții că serviciul de localizare este o setare centrală. Aceasta nu este permisiunea de locație a aplicației care trebuie să fie setată de asemenea!

.. image:: ../images/Libre2_AppPermissionsAndLocation.png
  :alt: LibreLink permisiuni memorie & locaţie
  
  
.. image:: ../images/Libre2_DateTimeAlarms.png
  :alt: detecția automată a timpului și a fusului orar + alarme  

Senzorul îşi aminteşte dispozitivul care l-a pornit. Doar acel diapozitiv poate primi alarme în viitor.

Prima setare de conexiune la senzor este critică. Aplicația LibreLink încearcă să stabilească o conexiune wireless la senzor la fiecare 30 de secunde. Dacă una sau mai multe setări obligatorii lipsesc, acestea trebuie să fie ajustate. Nu ai o limită de timp pentru a face asta. Senzorul încearcă în mod constant să seteze conexiunea. Chiar dacă au trecut câteva ore. Fii răbdător și încearcă diferite setări înainte de a te gândi la schimbarea senzorului.

Atâta timp cât vezi un semn de exclamare roşu ("!") în colțul din stânga sus al ecranului de pornire LibreLink nu există nici o conexiune sau alte setări blochează LibreLink în a primi alarme. Te rugăm să verifici dacă sunetul este activat și alte notificări ale aplicației de blocare sunt dezactivate. Atunci când semnul de exclamare nu mai apare, conexiunea ar trebui sa fie stabilită și valorile glicemiei sunt trimise la smartphone. Acest lucru ar trebui să se întâmple după maxim 5 minute.

.. image:: ../images/Libre2_DateTimeAlarms.png
  :alt: LibreLink fără conexiune
  
Dacă semnul de exclamare rămâne sau primești un mesaj de eroare, exista mai multe posibile cauze:

- Permisiunea pentru serviciul de localizare Android nu este activata - te rog sa o activezi în setările de sistem
- detecția automata de timp si fus orar nu a fost activata - te rugam sa schimbi setarea in mod corespunzător
- activează alarmele - cel putin una dintre cele trei alarme trebuie activată în LibreLink
- Bluetooth este oprit - te rugăm să îl activezi
- sunetul este blocat
- notificările aplicaţiei sunt blocate
-notificările de ecran inactive sunt blocate 
- ai un senzor Libre 2 defect dintr-un lot cu număr de producție începând cu "K", urmat de 8 cifre. Găsești acest număr tipărit pe ambalajul galben. Acești senzori trebuie să fie înlocuiți deoarece nu funcționează modulul Bluetooth.

Repornirea telefonului poate ajuta, este posibil să trebuiască să o faci de mai multe ori. Imediat după stabilirea conexiunii, dispare semnul exclamării rosu și se finalizează pasul cel mai important. Se poate întâmpla ca în funcție de setările de sistem, semnul de exclamare să rămână, dar telefonul sa primească valori. În ambele cazuri, este în regulă. Senzorul și telefonul sunt acum conectate, în fiecare minut se transmite o valoare a glicemiei din sânge.

.. image:: ../images/Libre2_Connected.png
  :alt: Conexiune LibreLink stabilită
  
În cazuri rare, ar putea ajuta sa cureți cache-ul serviciului Bluetooth și/sau sa resetezi toate conexiunile telefonului folosind meniul de sistem. Aceasta acțiune elimina toate conexiunile Bluetooth pre-existente, lucru care te-ar putea ajuta sa setezi o conexiune bluetooth corespunzătoare. Această procedură este salvată pentru ca senzorul pornit este memorat de către aplicația patch-uita LibreLink. Nu mai trebuie făcut nimic in plus de acum încolo. Pur și simplu așteaptă ca aplicația patch-uita să se conecteze la senzor.

După o conexiune reușita, setările telefonului pot fi modificate dacă este necesar. Acest lucru nu este recomandat, dar poate dorești sa economisești din bateria telefonului. Serviciul de localizare poate fi oprit, volumul poate fi setat la zero sau alarmele pot fi oprite din nou. Valorile glicemiei sunt transferate oricum.

Totuși, la pornirea următorului senzor, toate setările trebuie făcute din nou!

Observație: Setările obligatorii cerute de aplicația patch-uita trebuie făcute in ora de încălzire a senzorului pentru a activa o conexiune cu acesta. Pentru timpul de funcționare de 14 zile nu sunt necesare. În majoritatea cazurilor când ai probleme cu pornirea unui senzor, serviciul de localizare este oprit. Pentru Android, este necesar pentru o bună funcționare a Bluetooth-ului (!) pentru a vă conecta. Te rugăm să consulți documentația Android a Google.

During the 14 days you can use in parallel one or more NFC capable smartphones (not the reader device!) running the original LibreLink app for scanning via NFC. There is no time limitation to start that. You could use a parallel phone for example on day 5 or so. The parallel phones(s) could upload the blood sugar values into the Abbott Cloud (LibreView). LibreView can generate reports for your diabetes team. There are many parents who absolutely need this. 

Please note that the original patched app **does not have any connection to the internet** to avoid tracking.

However there is a variant of the patched app supporting LibreView with enabled internet access. Please be aware that your data is transferred to the cloud then. But your diadoc tool- and reporting chain is fully supported then. With that variant it is also possible to move the alarms of a running sensor to a different device which not has started the sensor. Please google in diabetes related German forums how this could be done.


Step 2: Install and configure xDrip+ app
==================================================

The blood sugar values are received on the smartphone by the xDrip+ App. 

* If not already set up then download xDrip+ app and install one of the latest nightly builds from `here <https://github.com/NightscoutFoundation/xDrip/releases>`_.
* In xDrip+ select "Libre2 (patched App)" as data source
* If necessary, enter "BgReading:d,xdrip libre_receiver:v" under Less Common Settings->Extra Logging Settings->Extra tags for logging. This will log additional error messages for trouble shooting.
* În xDrip mergi la Settings > Interapp Compatibility > Broadcast Data Locally și selecteaza ON.
* În xDrip mergi la Settings > Interapp Compatibility > Accept Treatments și selectează OFF.
* to enable AAPS to receive blood sugar levels (version 2.5.x and later) from xDrip+ please set `Settings > Interapp Settings > Identify Receiver "info.nightscout.androidaps" <../Configuration/xdrip.html#identify-receiver>`_
* Dacă vrei sa introduci calibrări din AndroidAPS, in xDrip, mergi la Settings > Interapp Compatibility > Accept Calibrations și selectează ON.  S-ar putea să doriți de asemenea să revizuiți opțiunile din Settings > Less Common Settings > Advanced Calibration Settings.

.. image:: ../images/Libre2_Tags.png
  :alt: xDrip+ LibreLink logging

Step 3: Start sensor
==================================================

In xDrip+ start the sensor with "Start Sensor" and "not today". 

In fact this will not physically start any Libre2 sensor or interact with them in any case. This is simply to indicate xDrip+ that a new sensor is delivering blood sugar levels. If available, enter two bloody measured values for the initial calibration. Now the blood glucose values should be displayed in xDrip+ every 5 minutes. Skipped values, e.g. because you were too far away from your phone, will not be backfilled.

After a sensor change xDrip+ will automatically detect the new sensor and will delete all calibration data. You may check you bloody BG after activation and make a new initial calibration.

Step 4: Configure AndroidAPS (for looping only)
==================================================
* In AndroidAPS go to Config Builder > BG Source and check 'xDrip+' 
* If AndroidAPS does not receive BG values when phone is in airplane mode, use 'Identify receiver' as describe on `xDrip+ settings page <../Configuration/xdrip.html#identify-receiver>`_.

Until now, using Libre 2 as BG source you cannot activate ‘Enable SMB always’ and ‘Enable SMB after carbs’ within SMB algorithm. Valorile glicemiei furnizate de Libre 2 nu sunt suficient de bine normalizate pentru a fi folosite în siguranță. See `Smoothing blood glucose data <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_ for more details.

Experiences and Troubleshooting
==================================================

Connectivity
--------------------------------------------------
The connectivity is extraordinarily good. With the exception of Huawei mobile phones, all current smartphones seem to work well. The reconnect rate in case of connection loss is phenomenal. The connection can break off if the mobile phone is in the pocket opposite the sensor or if you are outdoors. When I am gardening, I use to wear my phone on the sensor side of my body. In rooms, where Bluetooth spreads over reflections, no problems should occur. If you have connectivity problems please test another phone. It may also help to set the sensor with the internal BT antenna pointing down. The slit on the applicator must be pointing down when setting the sensor.

Value smoothing & raw values
--------------------------------------------------
Technically, the current blood sugar value is transmitted to xDrip+ every minute. A weighted average filter calculates a smoothed value over the last 25 minutes. This is mandatory for looping. The curves look smooth and the loop results are great. The raw values on which the alarms are based jitter a little more, but correspond to the values that the reader also displays. In addition, the raw values can be displayed in the xDrip+ graph in order to be able to react in time to rapid changes. Please switch on Less Common Settings > Advanced Settings for Libre2 > "show Raw values" and "show Sensors Infos". Then the raw values are additionally displayed as small white dots and additional sensor info is available in the system menu.

The raw values are very helpful when the blood sugar is moving fast. Even if the dots are jumpier you would detect the tendency much better as using the smoothed line to make proper therapy decisions.

.. image:: ../images/Libre2_RawValues.png
  :alt: xDrip+ advanced settings Libre 2 & raw values

Sensor runtime
--------------------------------------------------
The sensor runtime is fixed to 14 days. The 12 extra hours of Libre1 no longer exist. xDrip+ shows additional sensor information after enabling Advanced Settings for Libre2 > "show Sensors Infos" in the system menu like the starting time. The remaining sensor time can also be seen in the patched LibreLink app. Either in the main screen as remaining days display or as the sensor start time in the three-point menu->Help->Event log under "New sensor found".

.. image:: ../images/Libre2_Starttime.png
  :alt: Libre 2 start time

New sensor
--------------------------------------------------
A sensor exchange takes place on-the-fly: Set new sensor shortly before activation. As soon as xDrip+ receives no more data from the old sensor, start the new sensor with the patched app. After one hour new values should appear automatically in xDrip+. 

If not, please check the phone settings and proceed as with the first start. You have no time limit. Try to find the correct settings. No need to immediately replace the sensor before you tried different combinations. The sensors are robust and try permanently to establish a connection. Please take your time. In most cases you accidentally changed one setting which causes now problems. 

Once successful please select "Sensor Stop" and "Delete calibration only" in xDrip. This indicates for xDrip+ that a new sensor is releasing blood sugar levels and the old calibrations are no longer valid and therefore have to be deleted. No real interaction is done with the Libre2 sensor here! You do not need to start the sensor in xDrip+.

.. image:: ../images/Libre2_GapNewSensor.png
  :alt: xDrip+ missing data when changing Libre 2 sensor

Calibrare
--------------------------------------------------
You can calibrate the Libre2 with an offset of -40 mg/dl to +20 mg/dL [-2,2 mmol/l to +1,1 mmol/l] (intercept). The slope isn't changeable as the Libre2 is much more accurate compared to the Libe1. Please check by fingerpricking early after setting a new sensor. It is known that there can arise big differences to the blood measurements. To be on the safe side, calibrate every 24 - 48 hours. The values are accurate up to the end of the sensor and do not jitter as with the Libre1. However, if the sensor is completely off, this will not change. The sensor should then be replaced immediately.

Plausibility checks
--------------------------------------------------
The Libre2 sensors contain plausibility checks to detect bad sensor values. As soon as the sensor moves on the arm or is lifted slightly, the values may start to fluctuate. The Libre2 sensor will then shut down for safety reasons. Unfortunately, when scanning with the App, additional checks are made. The app can deactivate the sensor even though the sensor is OK. Currently the internal test is too strict. I have completely stopped scanning and haven't had a failure since then.

Time zone travelling
--------------------------------------------------
In other `time zones <../Usage/Timezone-traveling.html>`_ there are two strategies for looping: 

Either 

1. leave the smartphone time unchanged and shift the basal profile (smartphone in flight mode) or 
2. delete the pump history and change the smartphone time to local time. 

Method 1. is great as long as you don't have to set a new Libre2 sensor on-site. If in doubt, choose method 2., especially if the trip takes longer. If you set a new sensor, the automatic time zone must be set, so method 1. would be disturbed. Please check before, if you are somewhere else, you can run otherwise fast into problems.

Experiences
--------------------------------------------------
Altogether it is one of the smallest CGM systems on the market. Small, no transmitter necessary and mostly very accurate values without fluctuations. After approx. 12 hours running-in phase with deviations of up to 30 mg/dl (1,7 mmol/l)the deviations are typical smaller than 10 mg/dl (0,6 mmol/l). Best results at the rear orbital arm, other setting points with caution! No need to set a new sensor one day ahead for soaking. That would disturb the internal levelling mechanism.

There seem to be bad sensors from time to time, which are far away from the blood values. It stays that way. These should be immediately replaced.

If the sensor moved a little bit on the skin or is lifted somehow this can cause bad results. The filament which sits in the tissue is a little bit pulled out of the tissue and will measure different results then. Mostly probably you will see jumping values in xDrip+. Or the difference to the bloody values change. Please replace the sensor immediately! The results are inaccurate now.

Using bluetooth transmitter and OOP
==================================================

Bluetooth transmitter can be used with the Libre2 with the latest xDrip+ nightlys and the Libre2 OOP app. You can receive blood sugar readings every 5 minutes as well as with the Libre1. Please refer to the miaomiao website to find a description. This will also work with the Bubble device and in the future with other transmitter devices. The blucon should work but has not been tested yet.

Old Libre1 transmitter devices cannot be used with the Libre2 OOP. They need to be replaced with a newer version or have a firmware upgrade for proper operation. MM1 with newest firmware is unfortunately not working yet - searching for root cause is currently ongoing.

The Libre2 OOP is creating the same BG readings as with the original reader or the LibreLink app via NFC scan. AAPS with Libre2 do a 25 minutes smoothing to avoid certain jumps. OOP generates readings every 5 minutes with the average of the last 5 minutes. Therefore the BG readings are not that smooth but match the original reader device and faster follow the "real" BG readings. If you try to loop with OOP please enable all smoothing settings in xDrip+.

The Droplet transmitter is working with Libre2 also but uses an internet service instead. Please refer to FB or a search engine to get further information. The MM2 with the tomato app also seems to use an internet service. For both devices you have to take care to have a proper internet connection to get your BG readings.

Even if the patched LibreLink app approach is smart there may be some reasons to use a bluetooth transmitter:

* the BG readings are identical to the reader results
* the Libre2 sensor can be used 14.5 days as with the Libre1 before 
* 8 hours Backfilling is fully supported.
* get BG readings during the one hour startup time of a new sensor

Remark: The transmitter can be used in parallel to the LibreLink app. It doesn't disturb the patched LibreLink app operation.

Remark #2: The OOP algorithm cannot be calibrated yet. This will be changed in the future.
