Dexcom G6
**************************************************
Pirmiausia pagrindai
==================================================

* Laikykitės pagrindinių NGJ higienos ir nustatymų rekomendacijų, kurios pateiktos čia: <../Hardware/GeneralCGMRecommendation.html>`_.
* G6 siųstuvams, pagamintiems nuo 2018 metų rudens/pabaigos, prašome įsitikinkite, kad naudojate vieną naujausių xDrip+ versijų <https://github.com/NightscoutFoundation/xDrip/releases>`_. Šie siųstuvai turi naują programinę įrangą, o vėliausia stabili xDrip+ versija (2019/01/10) su ja neveikia.
* If you have the possibility to get a Dexcom receiver from your health insurance it is worth getting it. Even if you do not use it every day you can exclusively refer to what the receiver said when you need to file a complaint. Parallel use is possible as transmitters can send to the receiver, plus to one more device at the same time.

Bendrieji patarimai naudojant uždarą ciklą su G6
==================================================

Naudoti G6 yra šiek tiek sudėtingiau, nei atrodė anksčiau. Norint jį naudoti saugiai, yra keletas niuansų, kuriuos reikia žinoti: 

* If you are using the native data with the calibration code in xDrip+ or Spike, the safest thing to do is not allow preemptive restarts of the sensor.
* Jei vis dėlto naudojatės pakartotiniu paleidimu, tada jis turėtų būti daromas tokiu metu, kai galima stebėti pokyčius ir prireikus kalibruoti. 
* Jei iš naujo paleisite sensorių, atlikite tai be gamyklinio kalibravimo, kad rezultatai būtų saugūs 11-ą ir 12-ą dieną, arba būkite pasirengę kalibruoti ir stebėti pokyčius.
„Išankstinis įmirkymas“ (sensoriaus įvedimas daug anksčiau nei jo pradžia programoje) G6 su gamykliniu kalibravimu gali sukelti duomenų nukrypimus. Jei sensorių įvedate anksčiau, nei jį startuojate, gali reikėti jį kalibruoti, kad gautumėte geriausius rezultatus.
* Jei neplanuojate sekti visų galimų nukrypimų, geriau grįžti į tradicinį kalibravimo režimą ir naudoti sistemą kaip G5.

Norėdami gauti daugiau informacijos ir šių rekomendacijų priežastis, skaitykite Tim Street <http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/>visą straipsnį svetainėje www.diabettech.com<http://www.diabettech.com>`_.

Jei naudojate G6 su xDrip+
==================================================
* Dexcom G6 siųstuvą galima vienu metu sujungti su Dexcom imtuvu (arba alternatyviai su t:slim pompa) ir mobiliojo telefono programa.
* Jei naudojate xDrip+ glikemijos duomenims gauti, pirmiausia pašalinkite Dexcom programą. **Negalite vienu metu prijungti xDrip+ ir Dexcom programos prie vieno siųstuvo!**
* If you need Clarity and want to profit from xDrip+ alarms use the `patched Dexcom app <./Hardware/DexcomG6.html#if-using-g6-with-patched-dexcom-app>`_ with local broadcast to xDrip+.
* If not already set up then download `xdrip <https://github.com/NightscoutFoundation/xDrip>`_ and follow instructions on Nightscout (`G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_).
* Konfigūratoriuje (AndroidAPS nustatymai) pasirinkite xDrip.
* Pritaikykite xDrip+ nustatymus pagal 'xDrip+ nustatymų puslapį <../Configuration/xdrip.html>`_
* Jei AAPS negauna glikemijos duomenų, kai telefonas veikia skrydžio režimu, naudokite funkciją 'Nustatyti gavėją', kaip aprašyta xDrip+ nustatymų puslapyje <../Configuration/xdrip.html>`_.

Kai naudojate G6 su modifikuota Dexcom programa
==================================================
* Atsisiųskite programą iš `https://github.com/dexcomapp/dexcomapp <https://github.com/dexcomapp/dexcomapp>` _ ir pasirinkite versiją pagal savo poreikius (mg/dl arba mmol/l, G6).

   * Folder 2.4 for users of the current version, folder 2.3 is only for the outdated AndroidAPS 2.3.
   * Atidarykite https://play.google.com/store/search?q=dexcom%20g6 savo kompiuteryje. Regionas bus matomas URL adrese.
   
   .. nuotrauka:: ../images/DexcomG6regionURL.PNG
     :alt: Regiono Dexcom G6 URL

* Sustabdykite sensorių ir pašalinkite originalią „Dexcom“ programą, jei to dar nepadarėte.
* Įdiekite atsisiųstą apk
* Startuokite sensorių
* Konfigūratoriuje (AndroidAPS nustatymai) pasirinkite Dexcom App (modifikuota).
* If you want to use xDrip+ alarms via local broadcast: in xDrip+ hamburger menu > settings > hardware data source > 640G /EverSense.
* There is no local broadcast from patched Dexcom app directly to xDrip+. Broadcast has to go through AAPS as described above.

G6 trikčių šalinimas
==================================================
Dexcom G6 specifinių trikčių šalinimas
--------------------------------------------------
* Siųstuvams su serijos nr. starting with 80 or 81 need at least last stable xDrip+ version from May 2019 or a newer nightly build.
* Siųstuvams su serijos nr. pradedant 8G, reikia bent 2019 m. liepos 25 d. versijos arba naujesnės.
* xDrip+ ir Dexcom programa negali būti prijungtos prie siųstuvo tuo pačiu metu.
* Palaukite bent 15 min. prieš sustabdant ir vėl paleidžiant jutiklį.
* Negalima nustatyti praeities laiko uždėjus jutiklį. Visada atsakykite į klausimą "Ar šiandien uždėjote jutiklį?" - "Taip, šiandien".
* Neįjunkite "Perkrauti jutiklį", kol nustatote naują jutiklį
* NESTARTUOKITE naujo sensoriaus, kol klasikinės būsenos puslapyje -> G5/G6 būsena -> PhoneServiceState nebus rodoma ši informacija:

  Siųstuvo serijos numeris prasideda 80 arba 81: „Got data hh:mm“ (pvz., "Got data 19:04")
  Siųstuvo serijos numeris prasideda 8G arba 8H: „Got glucose hh:mm“ (pvz., "Got glucose 19:04") arba "Got no raw hh:mm" (pvz., "Got now raw 19:04")

.. ../images/xDrip_Dexcom_PhoneServiceState.png
  :alt: xDrip+ PhoneServiceState

General troubleshooting
--------------------------------------------------
General Troubleshooting for CGMs can be found `here <./GeneralCGMRecommendation.html#Troubleshooting>`_.

Naujas siųstuvas su veikiančiu sensoriumi
--------------------------------------------------
Jei keisite siųstuvą, kai sensorius veikia, galite pabandyti jį nuimti nepažeisdami paties sensoriaus platformos. Vaizdo įrašą galima rasti adresu `https://youtu.be/AAhBVsc6NZo <https://youtu.be/AAhBVsc6NZo>`_.


