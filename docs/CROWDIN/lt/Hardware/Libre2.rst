Freestyle Libre 2
**************************************************

Freestyle Libre 2 sistema gali automatiškai pranešti apie pavojingus kraujo gliukozės kiekius kraujyje. Libre 2 jutiklis siunčia gliukozės kiekio kraujyje duomenis į imtuvą (skaitytuvą ar išmanųjį telefoną) kiekvieną minutę. Imtuvas įjungia pavojaus signalą, jeigu reikia. Su modifikuota LibreLink programėle, jūs galite nuolat gauti jūsų kraujo gliukozės duomenis išmaniajame telefone. Kadangi signalas siunčiamas Bluetooth ryšiu tiesiai į telefoną, jums nereikės įsigyti Bluetooth adapterio, pvz., Miaomiao ar Blucon. 

1 veiksmas: Sukurkite savo modifikuotą Librelink-App
==================================================

Dėl teisinių priežasčių, taip vadinamas "pataisymas" turi būti atliekamas jūsų paties. Naudokite paieškos sistemas, norėdami rasti atitinkamas nuorodas.

Modifikuota programa turi būti įdiegta vietoj originalios programos. Kitas jutiklis, aktyvuotas su ja, pradės siųsti belaidžiu ryšiu duomenis į jūsų telefoną.

Svarbu: Pirmiausia įdiekite ir pašalinkite originalią programą NFC turinčiame išmaniąjame telefone. NFC turi būti įjungtas. Tai neeikvoja baterijos. Tada įdiekite modifikuotą programą. Ji gali būti identifikuota autorizacijos pranešimu ekrane. 

.. nuotrauka:: ../images/fsl2pic1.jpg
  :alt: LibreLink pranešimų paslauga

Tai gerokai pagerina ryšio stabilumą, palyginus su originalia programa. Norint užtikrinti, kad NFC funkcija yra aktyvuota, įjunkite atminties ir vietos leidimus modifikuotoje programoje, automatinį laiko ir laiko juostos atnaujinimą ir nustatykite bent vieną aliarmą. 

Dabar aktyvuokite Libre 2 jutiklį su modifikuota progrmėle, tiesiog skenuodami jutiklį. Sekite instrukcijas. Jutiklis atsimena įrenginį, kuriuo buvo aktyvuotas. Tik šis prietaisas gali priimti signalus ateityje.

Privalomi parametrai norint sėkmingai aktyvuoti jutiklį: 

* NFC įjungtas / BT įjungtas
* atminties leidimas įjungtas 
* vieta įjungta
* automatinis laiko ir laiko juostos nustatymas
* nustatytas bent vieną aliarmas modifikuotoje programėlėje

.. nuotrauka:: ../images/fsl2pic2.jpg
  :alt: LibreLink atminties & vietos teisės
  
.. nuotrauka:: ../images/fsl2pic3.jpg
  :alt: Android vietos nustatymai
  
.. nuotrauka:: ../images/fsl2pic4a.jpg
  :alt: automatinis laikas ir laiko juosta
  
.. nuotrauka:: ../images/fsl2pic4.jpg
  :alt: LibreLink aliarmo nustatymai
  
Pirmas ryšio nustatymas su jutikliu yra ypač svarbus. LibreLink programėlė bando užmegzti belaidį ryšį su jutikliu kas 30 sekundžių. Jei trūksta vieno ar kelių privalomų parametrų, jie turi būti koreguojami. Galite tai atlikti bet kuriuo metu. Jutiklis nuolat bando nustatyti ryšį. Net jei tai trunka keletą valandų. Būkite kantrūs ir pabandykite kitus nustatymus prieš nuspręsdami keisti jutiklį.

Kol matote raudoną šauktuką ("!") viršutiniame kairiajame kampe LibreLinks pradžios ekrane, vadinasi nėra ryšio. Tik tada, kai šauktukas dingsta, ryšys yra užmegztas ir kraujo gliukozės duomenys yra siunčiami į telefoną. Tai turėtų įvykti daugiausiai po 5 minučių.

.. nuotrauka:: ../images/fsl2pic5.jpg
  :alt: LibreLink nėra ryšio
  
Jei šauktukas lieka arba gaunate klaidos pranešimą, tai gali būti dėl keletos priežasčių:

- Android vietos nustatymo paslauga nėra įgalinta - prašome įjungti tai sistemos nustatymuose
- automatinio laiko ir laiko juostos nėra nustatytos - prašome pakeisti parametrus atitinkamai
- įjunkite aliarmus - bent vienas iš trijų aliarmų turi būti įjungtas LibreLink
- Bluetooth yra išjungtas - įjunkite

Gali padėti telefono paleidimas iš naujo, jums gali tekti padaryti tai keletą kartų. Kai tik ryšys yra užmegztas, raudonas šauktukas dingsta ir svarbiausias žingsnis yra atliktas. Jutiklis ir telefonas dabar yra sujungti, kiekvieną minutę kraujo gliukozės reikšmės yra perduodamos.

.. nuotrauka:: ../images/fsl2pic6.jpg
  :alt: LibreLink ryšys nustatytas
  
Dabar išmaniojo telefono parametrai gali būti keičiami dar kartą, jei yra būtina, pvz. jei norite taupyti energiją. Location service can be switched off, volume can be set to zero or alarms can be switched off again. The bloodsugar levels are transferred anyway.

When starting the next sensor, however, all settings must be set again!

You can use a second NFC capable smartphone with the original LibreLink app for scanning via NFC. The Reader can NOT be used any more, it cannot be connected in parallel! The second phone can upload the blood sugar values into the Abbott Cloud (LibreView). LibreView can generate reports for the DiaDoc. There are many parents who absolutely need this. 

Remark: The patched app does not have any connection to the Internet.

Step 2: Install and configure xDrip+ app
==================================================

The blood sugar values are received on the smartphone by the xDrip+ App. 

* If not already set up then download xdrip app and install one of the latest nightly builts from `here <https://github.com/NightscoutFoundation/xDrip/releases>`_.
* In xDrip+ select "Libre2 (patched App)" as data source
* If necessary, enter "BgReading:d,xdrip libre_receiver:v" under Less Common Settings->Extra Logging Settings->Extra tags for logging. This will log additional error messages for trouble shooting.
* xDrip eikite į Nustatymus > Programinės įrangos suderinamumas > Vietinis transliavimas ir pasirinkite Įjungta.
* xDrip eikite į Nustatymus > Programinės įrangos suderinamumas > Priimti terapijas ir pasirinkite Išjungta.
* to enable AAPS to receive blood sugar levels (version 2.5.x and later) from xdrip please set `Settings > Interapp Settings > Identify Receiver "info.nightscout.androidaps" <https://androidaps.readthedocs.io/en/latest/EN/Configuration/xdrip.html#identify-receiver>`_
Jei norite naudotis AndroidAPS kalibracijoms, xDrip+ eikite į Nustatymus> Programinės įrangos suderinamumas> Priimti kalibracijas ir pasirinkite Įjungti.  Taip pat galbūt norėsite peržiūrėti kalibravimo parinktis Nustatymuose > Mažiau įprasti nustatymai > išplėstinės kalibravimo parinktys.

.. image:: ../images/fsl2pic7.jpg
  :alt: xDrip+ LibreLink logging
  
.. image:: ../images/fsl2pic7a.jpg
  :alt: xDrip+ log
  #
Step 3: Start sensor
==================================================

In xDrip+ start the sensor with "Start Sensor" and "not today". 

In fact this will not start any Libre2 sensor or interact with them in any case. This is simply to indicate xDrip+ that a new sensor is delivering blood sugar levels. If available, enter two bloody measured values for the initial calibration. Now the blood glucose values should be displayed in xDrip+ every 5 minutes. Skipped values, e.g. because you were too far away from your phone, will not be backfilled.

Step 4: Configure AndroidAPS
==================================================
* In AndroidAPS go to Config Builder > BG Source and check 'xDrip+' 
* If AndroidAPS does not receive BG values when phone is in airplane mode, use `Identify receiver` as describe on `xDrip+ settings page <../Configuration/xdrip.html#identifiziere-empfanger>`_.

Until now, using Libre 2 as BG source you cannot activate ‘Enable SMB always’ and ‘Enable SMB after carbs’ within SMB algorithm. The BG values of Libre 2 are not smooth enough to use it safely. See `Smoothing blood glucose data <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_ for more details.

Experiences and Troubleshooting
==================================================

The connectivity is extraordinary good. With the exception of Huawei mobile phones, all current smartphones seems to work well. The reconnect in case of connection loss is phenomenal. The connection can break off if the mobile phone is in the pocket opposite the sensor or if you are outdoors. When I am gardening, I use to wear my phone on the sensor side of my body. In rooms, where Bluettooth spreads over refections, no problems should occur. If you have connectivity problems please test another phone.

Technically, the current blood sugar value is transmitted to xDrip+ every minute. A weighted average filter calculates a smoothed value over the last 25 minutes. This is mandatory for looping. The curves look smooth and the loop results are great. The raw values on which the alarms are based jitter a little more, but correspond to the values that the reader also displays. In addition, the raw values can be displayed in the xDrip+ graph in order to be able to react in time to rapid changes. Please switch on Less Common Settings > Advanced Settings for Libre2 > "show Raw values" and "show Sensors Infos". Then the raw values are additionally displayed as small white dots and additional sensor infos are available in the System menu.

.. image:: ../images/fsl2pic8.jpg
  :alt: xDrip+ advanced settings Libre 2
  
.. image:: ../images/fsl2pic9.jpg
  :alt: xDrip+ homescreen with raw data
  
The sensor runtime is fixed to 14 days. The 12 extra hours of Libre1 no longer exist. xDrip+ shows additional sensor information after enabling Avanced Settings for Libre2 > "show Sensors Infos" in the system menu like the starting time. The remaining sensor time can also be seen in the patched LibreLink app. Either in the main screen as remaining days display or as the sensor start time in the three-point menu->Help->Event log under "New sensor found".

.. image:: ../images/fsl2pic10.jpg
  :alt: Libre 2 start time
  
Altogether it is one of the smallest CGM systems on the market. Small, no transmitter necessary and mostly very accurate values without fluctuations. After approx. 12 hours running-in phase with deviations of up to 30 mg/dL the deviations are typical smaller than 10 md/dL. Best results at the rear orbital arm, other setting points with caution! No need to set a new sensor one day ahead for soaking. That would disturbe the internal leveling mechanism.

There seem to be bad sensors from time to time, which are far away from the blood values. It stays that way. These should be immediately replaced.

If the sensor moved a little bit on the skin or is lifted somehow this can cause bad results. The filament which sits in the tissue is a little bit pulled out of the tissue and will measure different results then. Mostly probabaly you will see jumping values in xDrip+. Or the difference to the bloody values change. Please replace the sensor immediately! The results are inaccurate now.

A sensor exchange takes place on-the-fly: Set new sensor shortly before activation. As soon as xDrip+ receives no more data from the old sensor, start the new sensor with the patched app. After one hour new values should appear automatically in xDrip+. 

If not, please check the phone settings and proceed as with the first start. You have no time limit. Try to find the correct seetings. No need to immediately replace the sensor before you tried different combinations. The sensors are robust and try permanently to establish a connection. Please take your time. In most cases you accidentially changed one setting which causes now problems. 

Once successful please select "Sensor Stop" and "Delete calibration only" in xDrip. This indicates for xDrip+ that a new sensor is releasing blood sugar levels and the old calibrations are no longer valid and therefore have to be deleted. No real interaction is done with the Libre2 sensor here! You do not need to start the sensor in xDrip.

.. image:: ../images/fsl2pic11.jpg
  :alt: xDrip+ missing data when changing Libre 2 sensor
  
You can calibrate the Libre2 with an offset of plus/minus 20 mg/dL (intercept), but no slope. To be on the safe side, calibrate every 24 - 48 hours. The values are accurate up to the end of the sensor and do not jitter as with the Libre1. However, if the sensor is completely off, this will not change. The sensor should then be replaced immediately.

The Libre2 sensors contain plausibility checks to detect bad sensor values. As soon as the sensor moves on the arm or is lifted slightly, the values may start to fluctuate. The Libre2 sensor will then shut down for safety reasons. Unfortunately, when scanning with the App, additional checks are made. The app can deactivate the sensor even though the sensor is OK. Currently the internal test are too strict. I have completely stopped scanning and haven't had a failure since then.

In other `time zones <../Usage/Timezone-traveling.html>`_ there are two strategies for looping: Either 

1. leave the smartphone time unchanged and shift the basal profile (smartphone in flight mode) or 
2. delete the pump history and change the smartphone time to local time. 

Method 1. is great as long as you don't have to set a new Libre2 sensor on-site. If in doubt, choose method 2., especially if the trip takes longer. If you set a new sensor, the automatic time zone must be set, so method 1. would be disturbed. Please check before, if you are somewhere else, you can run otherwise fast into problems.

Besides the patched app the new Droplet transmitter or (soon available) the new OOP algorithm of xDrip+ can be used to receive blood sugar values. MM2 and blucon do NOT work so far.
