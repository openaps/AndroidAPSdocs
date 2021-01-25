Dexcom G5
**************************************************
Jei naudojate G5 su xDrip+
==================================================
* Jei dar to nepadarėte, atsisiųskite `xDrip <https://github.com/NightscoutFoundation/xDrip>`_ ir vykdykite `Nightscout instrukcijas (G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_.
* In xdrip go to Settings > Inter-app settings > Broadcast Data Locally and select ON.
* In xdrip go to Settings > Inter-app settings > Accept Treatments and select OFF.
Jei norite naudotis AndroidAPS kalibracijoms, xDrip+ eikite į Nustatymus> Programinės įrangos suderinamumas> Priimti kalibracijas ir pasirinkite Įjungti.  Taip pat galbūt norėsite peržiūrėti kalibravimo parinktis Nustatymuose > Mažiau įprasti nustatymai > išplėstinės kalibravimo parinktys.
* Konfigūratoriuje (AndroidAPS nustatymai) pasirinkite xDrip.
Jei AAPS negauna glikemijos duomenų, kai telefonas veikia skrydžio režimu, naudokite funkciją Nustatyti gavėją, [kaip aprašyta xDrip + nustatymų puslapyje] (../Configuration/xdrip.md).

Kai naudojate G5 su modifikuota Dexcom programa
==================================================
* Atsisiųskite programą iš `https://github.com/dexcomapp/dexcomapp <https://github.com/dexcomapp/dexcomapp>`_ ir pasirinkite versiją pagal savo poreikius (mg/dl arba mmol/l, G5).

   * 2.3 aplankas skirtas AndroidAPS 2.3 vartotojams, 2.4 aplankas yra skirtas AAPS 2.5 vartotojams.
   * Atidarykite https://play.google.com/store/search?q=dexcom%20g5 kompiuteryje. Regionas bus matomas URL adrese.
   
   .. image:: ../images/DexcomG5regionURL.PNG
     :alt: Regiono Dexcom G5 URL

* Sustabdykite sensorių ir pašalinkite originalią „Dexcom“ programą, jei to dar nepadarėte.
* Įdiekite atsisiųstą apk
* Startuokite sensorių
* Konfigūratoriuje (AndroidAPS nustatymai) pasirinkite Dexcom App (modifikuota).
* Jei norite naudoti xDrip aliarmus per vietinį transliavimą: xDrip trijų linijų meniu > Nustatymai> Aparatinės įrangos duomenų šaltinis> 640G / EverSense.
