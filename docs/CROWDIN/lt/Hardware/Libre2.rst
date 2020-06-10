Freestyle Libre 2
**************************************************

Freestyle Libre 2 sistema gali automatiškai pranešti apie pavojingus kraujo gliukozės kiekius kraujyje. Libre 2 jutiklis siunčia gliukozės kiekio kraujyje duomenis į imtuvą (skaitytuvą ar išmanųjį telefoną) kiekvieną minutę. Imtuvas įjungia pavojaus signalą, jeigu reikia. With a self-modified LibreLink app and the xDrip+ app, you can continuously receive and display your blood sugar level on your smartphone. 

The sensor can be calibrated to adjust differences between finger prick mesurements and sensor readings.

BG readings can also be done using a BT transmitter like with the Libre1.

1 veiksmas: Sukurkite savo modifikuotą Librelink-App
==================================================

Dėl teisinių priežasčių, taip vadinamas "pataisymas" turi būti atliekamas jūsų paties. Naudokite paieškos sistemas, norėdami rasti atitinkamas nuorodas. There are mainly two variants: The recommended original patched app blocks any internet traffic to avoid tracking. The other variant supports LibreView which may be needed by your doctor.

The patched app has to be installed instead of the original app. The next sensor started with it will transmit the current BG values to the xDrip+ app running on your smartphone via bluetooth.

Important: To avoid possible problems it may help to first install and uninstall the original app on an NFC capable smartphone. NFC turi būti įjungtas. Tai neeikvoja baterijos. Then install the patched app. 

The patched app can be identified by the foreground authorization notification. The foreground authorization service improves the connection stability compared to the original app which do not use this service.

.. image:: ../images/fsl2pic1.jpg
  :alt: LibreLink pranešimų paslauga

Other indications could be the Linux penguin logo three dot menue -> Info or the font of the pachted app. These criterias are optional depending on the app source you choose.

.. image:: ../images/LibreLinkPatchedCheck.png
  :alt: LibreLink pranešimų paslauga

Ensure that NFC is activated, enable the memory and location permission for the patched app, enable automatic time and timezone and set at least one alarm in the patched app. 

Dabar aktyvuokite Libre 2 jutiklį su modifikuota progrmėle, tiesiog skenuodami jutiklį. Ensure to have set all settings done.

Privalomi parametrai norint sėkmingai aktyvuoti jutiklį: 

* NFC įjungtas / BT įjungtas
* memory and location permission enabled 
* location service enabled
* automatinis laiko ir laiko juostos nustatymas
* nustatytas bent vieną aliarmas modifikuotoje programėlėje

Please note that the location service is a central setting. this is not the app permission which has to be set also!

.. image:: ../images/fsl2pic2.jpg
  :alt: LibreLink atminties & vietos teisės
  
.. image:: ../images/fsl2pic3.jpg
  :alt: Android vietos nustatymai
  
.. image:: ../images/fsl2pic4a.jpg
  :alt: automatinis laikas ir laiko juosta
  
.. image:: ../images/fsl2pic4.jpg
  :alt: LibreLink aliarmo nustatymai
  

Jutiklis atsimena įrenginį, kuriuo buvo aktyvuotas. Tik šis prietaisas gali priimti signalus ateityje.

Pirmas ryšio nustatymas su jutikliu yra ypač svarbus. LibreLink programėlė bando užmegzti belaidį ryšį su jutikliu kas 30 sekundžių. Jei trūksta vieno ar kelių privalomų parametrų, jie turi būti koreguojami. Galite tai atlikti bet kuriuo metu. Jutiklis nuolat bando nustatyti ryšį. Net jei tai trunka keletą valandų. Būkite kantrūs ir pabandykite kitus nustatymus prieš nuspręsdami keisti jutiklį.

As long as you see a red exclamation mark ("!") on the upper left corner of the LibreLinks start screen there is no connection or some other setting blocks LibreLink to signal alarms. Please check if the sound is enabled and all sorts of blocking app notifications are disabled. When the exclamation mark is gone, the connection should be established and blood sugar values are sent to the smartphone. Tai turėtų įvykti daugiausiai po 5 minučių.

.. image:: ../images/fsl2pic5.jpg
  :alt: LibreLink nėra ryšio
  
Jei šauktukas lieka arba gaunate klaidos pranešimą, tai gali būti dėl keletos priežasčių:

- Android vietos nustatymo paslauga nėra įgalinta - prašome įjungti tai sistemos nustatymuose
- automatinio laiko ir laiko juostos nėra nustatytos - prašome pakeisti parametrus atitinkamai
- įjunkite aliarmus - bent vienas iš trijų aliarmų turi būti įjungtas LibreLink
- Bluetooth yra išjungtas - įjunkite
- sound is blocked
- app notifications are blocked
- idle screen notifications are blocked 
- you have a faulty Libre 2 sensor from a production LOT number with a 'K' followed by 8 digits. You find this printed on the yellow package. That sensors has to be replace as they dont function on bluetooth.

Gali padėti telefono paleidimas iš naujo, jums gali tekti padaryti tai keletą kartų. Kai tik ryšys yra užmegztas, raudonas šauktukas dingsta ir svarbiausias žingsnis yra atliktas. It may happen that depending on system settings the exclamation mark remain but you still get readings. In both cases you are fine. Jutiklis ir telefonas dabar yra sujungti, kiekvieną minutę kraujo gliukozės reikšmės yra perduodamos.

.. image:: ../images/fsl2pic6.jpg
  :alt: LibreLink ryšys nustatytas
  
In rare case it could help to empty the bluetooth cache and/or reset all network connections via the system menu. This removes all connected bluetooth devices which may help to setup a proper bluetooth connection.

Now the smartphone settings can be changed again if necessary. This is not recommended but you may want to save power. Vietos nustatymo paslaugą galima išjungti, garsas gali būti nutildytas, aliarmai išjungti. Kraujo gliukozės duomenys yra perduodami bet kokiu atveju.

Tačiau aktyvuojant kitą jutiklį, visi parametrai turi būti nustatyti iš naujo!

Remark: The patched app need them in that hour after warmup to enable a connection. For the 14 days operation time they are not needed. 

You can use one or more NFC capable smartphones (not the reader device!) running the original LibreLink app for scanning via NFC. Antras telefonas gali įkelti kraujo gliukozės reikšmes į Abbott debesį (LibreView). LibreView gali generuoti ataskaitas endokrinologui. Yra daug tėvų, kuriems to reikia. Please note the the original patched app does not have any connection to the Internet.

There is a variant of the patched app supporting LibreView. Please be aware that your data are transfered to the cloud then. But your diadoc tool- and reportingchain is fully supported then. With that variant it is also possible to move the alarms to a different device which not has started the sensor. Please google to find the way how this could be done.


2 veiksmas: Įdiekite ir konfigūruokite xDrip+ programėlę
==================================================

Kraujo gliukozės reikšmės išmaniąjame telefone gaunamos per xDrip+ programėlę. 

* Jei dar neįdiegėte, tada atsisiųskite xdrip programą ir įdiekite vieną iš naujausių versijų iš čia <https://github.com/NightscoutFoundation/xDrip/releases>`_.
* xDrip+ pasirinkite "Libre2 (patched App)" kaip duomenų šaltinį
* Jei reikia, įveskite "BgReading:d,xdrip libre_receiver:v" ties Less Common Settings->Extra Logging Settings->Extra tags for logging. Taip bus įrašomi papildomi klaidų pranešimai trikčių šalinimui.
* xDrip eikite į Nustatymus > Programinės įrangos suderinamumas > Vietinis transliavimas ir pasirinkite Įjungta.
* xDrip eikite į Nustatymus > Programinės įrangos suderinamumas > Priimti terapijas ir pasirinkite Išjungta.
- norėdami įgalinti AAPS gauti kraujo gliukozės duomenis (versija 2.5x ir naujesnė), xdrip nustatykite `Settings > Interapp Settings > Identify Receiver "info.nightscout.androidaps" <https://androidaps.readthedocs.io/en/latest/EN/Configuration/xdrip.html#identify-receiver>`_
Jei norite naudotis AndroidAPS kalibracijoms, xDrip+ eikite į Nustatymus> Programinės įrangos suderinamumas> Priimti kalibracijas ir pasirinkite Įjungti.  Taip pat galbūt norėsite peržiūrėti kalibravimo parinktis Nustatymuose > Mažiau įprasti nustatymai > išplėstinės kalibravimo parinktys.

.. image:: ../images/fsl2pic7.jpg
  :alt: xDrip+ LibreLink žurnalas
  
.. image:: ../images/fsl2pic7a.jpg
  :alt: xDrip+ žurnalas
  #
3 žingsnis: aktyvuokite jutiklį
==================================================

xDrip+ aktyvuokite sensorių paspausdami "Start Sensor" ir pasirinkdami "not today". 

In fact this will not physically start any Libre2 sensor or interact with them in any case. Tai tiesiog nurodo xDrip+'ui, kad naujas sensorius siunčia kraujo gliukozės lygius. Jei galite, įveskite dvi reikšmes, gautas iš gliukomačio, pradinei kalibracijai. Dabar kraujo gliukozės reikšmės turėtų būti rodomos xDrip+ kas 5 minutes. Praleistos reikšmės, pvz. nes buvote per toli nuo telefono, negali būti įrašytos atbuline data.

After a sensor change xDrip+ will automatically detect the new sensor and will delete all calibration data. You may check you bloody BG after activation and make a new inital calibration.

Step 4: Configure AndroidAPS (for looping only)
==================================================
* AndroidAPS eikite į Konfigūratorių>KG šaltinis ir pažymėkite xDrip+ 
* Jei AndroidAPS negauna glikemijos duomenų, kai telefonas veikia skrydžio režimu, naudokite funkciją 'Nustatyti gavėją', kaip aprašyta xDrip + nustatymų puslapyje <../Configuration/xdrip.html#identifiziere-empfanger>`_.

Kol kas naudojant Libre 2 kaip KG šaltinį, negalite aktyvuoti 'Įjungti SMB visada' ir 'Įjungti SMB po angliavandenių' per SMB algoritmą. KG reikšmės Libre 2 nėra pakankamai tikslios, norint saugiai naudoti šias funkcijas. Žiūrėkite "Lyginti kraujo gliukozės duomenis <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_, jei norite sužinoti daugiau.

Patirtis ir gedimų šalinimas
==================================================

Ryšys yra neįtikėtinai geras. Išskyrus "Huawei" mobiliojo ryšio telefonus, visi dabartiniai išmanieji telefonai, atrodo, gerai veikia. The reconnect rate in case of connection loss is phenomenal. Ryšys gali nutrūkti, jei mobilusis telefonas yra kišenėje, esančioje priešingoje pusėje nei jutiklis arba, jei esate lauke. Kai aš sode, nešioju telefoną toje pačioje pusėje kur ir jutiklis. Patalpose, kur Bluetooth ryšys sklinda atspindėdamas nuo paviršių, sunkumų neturėtų kilti. Jei jūs turite ryšio problemų, išbandykite kitą telefoną. It may also help to set the sensor with the internal BT antenna pointing down. The slit on the applicator must be pointing down when setting the sensor.

Techniškai, esama kraujo gliukozės reikšmė yra perduodama xDrip+ kiekvieną minutę. Svertinio vidurkio filtras apskaičiuoja išlygintą reikšmę per pastarąsias 25 minutes. Tai privaloma naudojant uždarą ciklą. Kreivės atrodo sklandžiai ir ciklo rezultatai yra puikūs. Neapdorotos reikšmės, kuriomis aktyvuojami aliarmai, šiek tiek šokinėja, tačiau atitinka reikšmes skaitytuve. Be to, neapdorotos reikšmės gali būti rodomos xDrip+ grafike, kad būtų galima sureaguoti laiku į staigius pokyčius. Įjunkite Less Common Settings > Advanced Settings for Libre2 > "show Raw values" ir "show Sensors Infos". Tada neapdorotos reikšmės bus atvaizduojamos papildomai kaip maži balti taškai, o papildoma jutiklio informacija bus matoma sistemos meniu.

The raw values are very helpfull when the blood sugar is moving fast. Even if the dots are more jumpy you would detect the tendence much better as using the smoothed line to make proper therapy decisions.

.. image:: ../images/fsl2pic8.jpg
  :alt: xDrip+ išplėstiniai parametrai Libre 2
  
.. image:: ../images/fsl2pic9.jpg
  :alt: xDrip+ ekranas su neapdorotais duomenimis
  
Jutiklio naudojimo trukmė yra nustatyta 14 dienų. 12 papildomų valandų kaip Libre1 nebėra. xDrip+ rodo papildomą jutiklio informaciją įjungus Avanced Settings for Libre2 > "show Sensors Infos" sistemos meniu, pvz., pradžios laiką. Likęs jutiklio laikas taip pat gali būti matomas modifikuotoje LibreLink programėlėje. Arba pagrindiniame ekrane rodomos likusios dienos arba jutiklio pradžio laiką rasite trijų taškų meniu->Help->Event log ties "New sensor found".

.. image:: ../images/fsl2pic10.jpg
  :alt: Libre 2 pradžios laikas
  
Apskritai, tai yra viena iš mažiausių NGJ sistemų rinkoje. Maža, nereikia siųstuvo ir dažniausiai labai tikslūs duomenys be svyravimų. Po maždaug 12 valandų "apšilimo", kai svyravimai siekia iki 1,6 mmol/l, vėliau svyravimai paprastai mažesni nei 0,5 mmol/l. Geriausi rezultatai būna užpakalinėje žąsto pusėje, kitur - atsargiai! Nėra būtinybės įdurti naują jutiklį dieną prieš "įmirkymui". Tai trukdys vidiniam išlyginimo mechanizmui.

Karts nuo karto pasitaiko blogų jutiklių, rodančių dideliu skirtumu palyginus su kraujo rodikliais. Taip būna. Tokie turėtų būti nedelsiant pakeisti.

Jei jutiklis šiek tiek pasislinko ant odos ar buvo pastumtas, tai gali sąlygoti neteisingus rezultatus. Siūlelis, esantis audinyje, šiek tiek ištraukiamas iš audinio ir tada matuoja skirtingus rezultatus. Greičiausiai pamatysite šokinėjančias reikšmes xDrip+. Arba bus skirtumas su rodikliais iš piršto. Prašome nedelsiant pakeisti jutiklį! Rezultatai dabar yra netikslūs.

Jutiklio keitimas vyksta nepertraukiamai: uždėkite naują jutiklį šiek tiek prieš aktyvavimą. Kai tik xDrip+ nebegaus duomenų iš seno jutiklio, aktyvuokite naują jutiklį su modifikuota programėle. Po vienos valandos naujos reikšmės turėtų automatiškai atsirasti xDrip+'e. 

Jei ne, patikrinkite telefono nustatymus ir darykite taip, kaip su pirmuoju. Neturite laiko apribojimų. Pabandykite rasti teisingus nustatymus. Nėra reikalo iš karto keisti jutiklį, kol nepabandėte skirtingų derinių. Jutikliai yra atkaklūs ir nuolat bando užmegzti ryšį. Neskubėkite. Dažniausiai problemas sukelia netyčia pakeistas koks vienas nustatymas. 

Pavykus, prašome xDrip'e pasirinkti "Sensor stop" ir "Delete calibration only". Tai nurodo xDrip'ui, kad naujas jutiklis siunčia naujus gliukozės kraujyje duomenis ir senos kalibaracijos daugiau netinkamos, todėl turi būti ištrintos. Čia nėra daroma jokios realios sąveikos su Libre2 jutikliu! Jums nereikia aktyvuoti jutiklio xDrip'e.

.. image:: ../images/fsl2pic11.jpg
  :alt: xDrip+ trūksta duomenų, keičiant Libre 2 jutiklį
  
You can calibrate the Libre2 with an offset of -40 - +20 mg/dL (intercept). The slope isnt changable as the Libre2 is much more accurate compared to the Libe1. Please check by fingerpricking early after setting a new sensor. It is know that there can arise big differences to the blood measurements. Norint saugiai jaustis, kalibruokite kas 24-48 valandas. Reikšmės yra tikslios iki pat jutiklio pabaigos ir nešokinėja taip kaip Libre1. Tačiau, jei jutiklis rodo visiškai netiksliai, tai nepasikeis. Tada jutiklis turėtų būti nedelsiant pakeistas.

Libre2 jutikliai turi patikimumo patikrinimus, siekiant nustatyti blogas reikšmes. Kai tik jutiklis pajuda ant rankos ar yra šiek tiek pastumiamas, reikšmės gali pradėti svyruoti. Libre2 jutiklis tada išsijungs saugumo sumetimais. Deja, skenuojant su programėle, atliekami papildomi tikrinimai. Programėlė gali deaktyvuoti jutiklį, net jei su jutikliu viskas yra gerai. Šiuo metu vidinis testas yra per griežtas. Aš visiškai nustojau skenuoti ir nuo tada neturėjau sutrikimų.

Kitose laiko zonose <../Usage/Timezone-traveling.html>`_ yra dvi strategijos ciklui: Arba 

1. nekeisti išmaniojo telefono laiko ir pastumti bazės profilį (telefonas skrydžio režimu) arba 
2. ištrinti pompos istoriją ir pakeisti telefono laiką į vietinį. 

1. būdas yra geras iki tol, kol nereikia keisti Libre2 jutiklio į naują. Jei abejojate, pasirinkite metodą 2., ypač, jei kelionė trunka ilgiau. Jei aktyvuojate naują jutiklį, automatinė laiko juosta turi būti nustatyta, taigi 1. metodas netinka. Prašome patikrinti tai prieš kelionę, kitaip galite greitai turėti problemų.

Be to, modifikuota programėlė gali būti naudojama su Droplet siųstuvu arba (greit pasirodys) nauju OOP xDrip+ algoritmu, norint gauti gliukozės reikšmes. MM2 ir blucon neveikia iki šiol.

Step 5: Using bluetooth transmitter and OOP
==================================================

Bluetooth transmitter can be used with the Libre2. 

Please refer to the miaomiao website to find a description. This will also work with the Bubble devices.

Even if the patched LibreLink app approach is smart there may be some reasons to use a bluetooth tranmitter instead.

  - the BG readings are identical to the reader results
  - the Libre2 sensor can be used 14.5 days as with the Libre1 before 
  - 8 hours Backfilling is fully supported.

Remark: The transmitter can be used in parallel to the LibreLink app.
