Freestyle Libre 1
**************************************************

Norint naudoti jūsų Libre kaip NGJ, kuris gauna GK rodiklius kas 5 minutes, pirmiausia reiktų įsigyti vieną iš NFC į Bluetooth adapterių:

* MiaoMiao-skaitytuvas (versija 1 ar 2) `https://www.miaomiao.cool/ <https://www.miaomiao.cool/>`_
* Blucon Nightrider `https://www.ambrosiasys.com/our-products/blucon <https://www.ambrosiasys.com/our-products/blucon/>`_
* Bubble `https://bubbleshop.eu/ <https://bubbleshop.eu/>`_

Be to, galima naudoti specialų laikrodį Sony Smartwatch 3, kuris turi NFC lustą, kurį galima suaktyvinti ir kuris gali būti naudojamas kaip NFC skaitytuvas. Tačiau pirmiau minėti NFC Bluetooth siųstuvams siūlo ne tokį sudėtingą sprendimą ir juo naudosis dauguma norinčių naudoti Libre 1 kaip nuolatinį gliukozės jutiklį.
* Sony Smartwatch 3 (SWR50) `https://github.com/pimpimmi/LibreAlarm/wiki/ <https://github.com/pimpimmi/LibreAlarm/wiki/>`_

Kol kas naudodami Libre 1 kaip KG šaltinį, negalite aktyvuoti 'Įjungti SMB visada' ir 'Įjungti SMB po angliavandenių' per SMB algoritmą. Libre 1 nėra pakankamai tikslus, kad būtų saugu naudoti šias funkcijas. Žiūrėkite "Lyginti kraujo gliukozės duomenis <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_, jei norite sužinoti daugiau.

Jei naudojate xDrip+
==================================================
* Jei dar neįdiegėte, atsisiųskite xDrip+ ir vadovaukitės instrukcijomis `LimiTTEer <https://github.com/JoernL/LimiTTer>`_, `Libre Alarm <https://github.com/pimpimmi/LibreAlarm/wiki>`_.
* xDrip+ eikite į Settings > Interapp Compatibility > Broadcast Data Locally ir pasirinkite On.
* xDrip+ eikite į Settings > Interapp Compatibility > Accept Treatments ir pasirinkite Off.
*Jei norite naudotis AndroidAPS kalibracijoms, xDrip+ eikite į Settings > Interapp Compatibility > Accept Calibrations ir pasirinkite On.  Taip pat galbūt norėsite peržiūrėti kalibravimo parinktis Nustatymuose > Mažiau įprasti nustatymai > išplėstinės kalibravimo parinktys.
* Konfigūratoriuje (AndroidAPS nustatymai) pasirinkite xDrip.
* xDrip+ nustatymus su ekranvaizdžiais žiūrėkite 'xDrip+ nustatymų puslapyje <../Configuration/xdrip.html>`__. Tai yra dalis bazinių xDrip+ nustatymų bei xDrip+ nustatymų Freestyle Libre.
* Jei AAPS negauna glikemijos duomenų, kai telefonas veikia skrydžio režimu, naudokite funkciją 'Nustatyti gavėją', kaip aprašyta xDrip + nustatymų puslapyje <../Configuration/xdrip.html>`_.

Jei naudojate Glimp
==================================================
* Jums reikės Glimp versijos 4.15.57 arba naujesnės. Senesnės versijos nepalaikomos.
* Jei dar neįdiegėte, atsisiųskite Glimp ir vadovaukitės instrukcijomis `Nightscout <http://www.nightscout.info/wiki/welcome/nightscout-for-libre>`_.
* Konfigūratoriuje (AndroidAPS nustatymai) pasirinkite Glimp.
