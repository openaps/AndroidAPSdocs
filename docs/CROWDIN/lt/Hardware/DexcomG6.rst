Dexcom G6
**************************************************
Pirmiausia pagrindai
==================================================

* Follow general CGM hygiene and setting sensor recommendation `here <../Hardware/GeneralCGMRecommendation.html>`__.
* G6 siųstuvams, pagamintiems nuo 2018 metų rudens/pabaigos, prašome įsitikinkite, kad naudojate vieną naujausių xDrip+ versijų <https://github.com/NightscoutFoundation/xDrip/releases>`_. Šie siųstuvai turi naują programinę įrangą, o vėliausia stabili xDrip+ versija (2019/01/10) su ja neveikia.

Bendrieji patarimai naudojant uždarą ciklą su G6
==================================================

Naudoti G6 yra šiek tiek sudėtingiau, nei atrodė anksčiau. Norint jį naudoti saugiai, yra keletas niuansų, kuriuos reikia žinoti: 

* Jei xDrip ar Spike naudojate natyvinius duomenis su kalibravimo kodu, saugumo sumetimais neturėtumėte leisti pakartotinio paleidimo iš naujo.
* Jei vis dėlto naudojatės pakartotiniu paleidimu, tada jis turėtų būti daromas tokiu metu, kai galima stebėti pokyčius ir prireikus kalibruoti. 
* Jei iš naujo paleisite sensorių, atlikite tai be gamyklinio kalibravimo, kad rezultatai būtų saugūs 11-ą ir 12-ą dieną, arba būkite pasirengę kalibruoti ir stebėti pokyčius.
„Išankstinis įmirkymas“ (sensoriaus įvedimas daug anksčiau nei jo pradžia programoje) G6 su gamykliniu kalibravimu gali sukelti duomenų nukrypimus. Jei sensorių įvedate anksčiau, nei jį startuojate, gali reikėti jį kalibruoti, kad gautumėte geriausius rezultatus.
* Jei neplanuojate sekti visų galimų nukrypimų, geriau grįžti į tradicinį kalibravimo režimą ir naudoti sistemą kaip G5.

To learn more about the details and reasons for these recommendations read the `complete article <https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/>`_ published by Tim Street at `www.diabettech.com <https://www.diabettech.com>`_.

Jei naudojate G6 su xDrip+
==================================================
* Dexcom G6 siųstuvą galima vienu metu sujungti su Dexcom imtuvu (arba alternatyviai su t:slim pompa) ir mobiliojo telefono programa.
* Jei naudojate xDrip+ glikemijos duomenims gauti, pirmiausia pašalinkite Dexcom programą. **Negalite vienu metu prijungti xDrip+ ir Dexcom programos prie vieno siųstuvo!**
* If you need Clarity and want to profit from xDrip+ alarms use the `BYODA <../Hardware/DexcomG6.html#if-using-g6-with-build-your-own-dexcom-app>`_ with local broadcast to xDrip+.
* If not already set up then download `xDrip+ <https://github.com/NightscoutFoundation/xDrip>`_ and follow instructions on `xDrip+ settings page <../Configuration/xdrip.html>`_.
* Konfigūratoriuje (AndroidAPS nustatymai) pasirinkite xDrip.
* Adjust settings in xDrip+ according to `xDrip+ settings page <../Configuration/xdrip.html>`__
* If AAPS does not receive BG values when phone is in airplane mode use 'Identify receiver' as describe on `xDrip+ settings page <../Configuration/xdrip.html>`__.

If using G6 with Build Your Own Dexcom App
==================================================
* As of December 2020 `Build Your Own Dexcom App <https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0>`_ (BYODA) also supports local broadcast to AAPS and/or xDrip+ (not for G5 sensors!)
* This app lets you use your Dexcom G6 with any Android smartphone.
* Uninstall the original Dexcom app or patched Dexcom app if you used one of those previously.
* Įdiekite atsisiųstą apk
* Enter sensor code and transmitter serial no. in patched app.
* In phone settings go to apps > Dexcom G6 > permissions > additional permissions and press 'Access Dexcom app'.
* After short time BYODA should pick-up transmitter signal. (If not you will have to stop sensor and start new one.)

Settings for AndroidAPS
--------------------------------------------------
* Select 'Dexcom App (patched)' in config builder.
* If you don't receive any values select any other data source, then re-select 'Dexcom App (patched)' to trigger the demand for permissions to establish the connection between AAPS and BYODA-broadcast.

Settings for xDrip+
--------------------------------------------------
* Select '640G/Eversense' as data source.
* Command 'start sensor' must be performed in xDrip+ in order to receive values. This will not affect your current sensor controlled by Build Your Own Dexcom App.
   
G6 trikčių šalinimas
==================================================
Dexcom G6 specifinių trikčių šalinimas
--------------------------------------------------
* Siųstuvams su serijos nr. pradedant nuo 80 ar 81 reikia bent paskutinės stabilios 2019 m. gegužės mėn. xDrip+ versijos arba naujesnės.
* Siųstuvams su serijos nr. pradedant 8G, reikia bent 2019 m. liepos 25 d. versijos arba naujesnės.
* xDrip+ ir Dexcom programa negali būti prijungtos prie siųstuvo tuo pačiu metu.
* Palaukite bent 15 min. prieš sustabdant ir vėl paleidžiant jutiklį.
* Negalima nustatyti praeities laiko uždėjus jutiklį. Visada atsakykite į klausimą "Ar šiandien uždėjote jutiklį?" - "Taip, šiandien".
* Neįjunkite "Perkrauti jutiklį", kol nustatote naują jutiklį
* NESTARTUOKITE naujo sensoriaus, kol klasikinės būsenos puslapyje -> G5/G6 būsena -> PhoneServiceState nebus rodoma ši informacija:

  Siųstuvo serijos numeris prasideda 80 arba 81: „Got data hh:mm“ (pvz., "Got data 19:04")
  Siųstuvo serijos numeris prasideda 8G arba 8H: „Got glucose hh:mm“ (pvz., "Got glucose 19:04") arba "Got no raw hh:mm" (pvz., "Got now raw 19:04")

.. image:: ../images/xDrip_Dexcom_PhoneServiceState.png
  :alt: xDrip+ PhoneServiceState

General troubleshooting
--------------------------------------------------
General Troubleshoothing for CGMs can be found `here <./GeneralCGMRecommendation.html#troubleshooting>`__.

Naujas siųstuvas su veikiančiu sensoriumi
--------------------------------------------------
Jei keisite siųstuvą, kai sensorius veikia, galite pabandyti jį nuimti nepažeisdami paties sensoriaus platformos. A video can be found at `https://youtu.be/tx-kTsrkNUM <https://youtu.be/tx-kTsrkNUM>`_.
