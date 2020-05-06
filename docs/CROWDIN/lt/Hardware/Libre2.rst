Freestyle Libre 2
**************************************************

Freestyle Libre 2 sistema gali automatiškai pranešti apie pavojingus kraujo gliukozės kiekius kraujyje. Libre 2 jutiklis siunčia gliukozės kiekio kraujyje duomenis į imtuvą (skaitytuvą ar išmanųjį telefoną) kiekvieną minutę. Imtuvas įjungia pavojaus signalą, jeigu reikia. Su modifikuota LibreLink programėle, jūs galite nuolat gauti jūsų kraujo gliukozės duomenis išmaniajame telefone. Kadangi signalas siunčiamas Bluetooth ryšiu tiesiai į telefoną, jums nereikės įsigyti Bluetooth adapterio, pvz., Miaomiao ar Blucon. 

1 veiksmas: Sukurkite savo modifikuotą Librelink-App
==================================================

Dėl teisinių priežasčių, taip vadinamas "pataisymas" turi būti atliekamas jūsų paties. Naudokite paieškos sistemas, norėdami rasti atitinkamas nuorodas.

To check whether you correctly patched the LibreLink app, take a look at the font of the patched app. The fonts in the original and patched app differ. Your patching was successful if the font looks like the font on the right:

.. image:: ../images/LibreLinkPatchedCheck.png
  :alt: LibreLink pranešimų paslauga

Modifikuota programa turi būti įdiegta vietoj originalios programos. Kitas jutiklis, aktyvuotas su ja, pradės siųsti belaidžiu ryšiu duomenis į jūsų telefoną.

Svarbu: Pirmiausia įdiekite ir pašalinkite originalią programą NFC turinčiame išmaniąjame telefone. NFC turi būti įjungtas. Tai neeikvoja baterijos. Tada įdiekite modifikuotą programą. Ji gali būti identifikuota autorizacijos pranešimu ekrane. 

.. image:: ../images/fsl2pic1.jpg
  :alt: LibreLink pranešimų paslauga

Tai gerokai pagerina ryšio stabilumą, palyginus su originalia programa. Norint užtikrinti, kad NFC funkcija yra aktyvuota, įjunkite atminties ir vietos leidimus modifikuotoje programoje, automatinį laiko ir laiko juostos atnaujinimą ir nustatykite bent vieną aliarmą. 

Dabar aktyvuokite Libre 2 jutiklį su modifikuota progrmėle, tiesiog skenuodami jutiklį. Sekite instrukcijas. Jutiklis atsimena įrenginį, kuriuo buvo aktyvuotas. Tik šis prietaisas gali priimti signalus ateityje.

Privalomi parametrai norint sėkmingai aktyvuoti jutiklį: 

* NFC įjungtas / BT įjungtas
* atminties leidimas įjungtas 
* vieta įjungta
* automatinis laiko ir laiko juostos nustatymas
* nustatytas bent vieną aliarmas modifikuotoje programėlėje

.. image:: ../images/fsl2pic2.jpg
  :alt: LibreLink atminties & vietos teisės
  
.. image:: ../images/fsl2pic3.jpg
  :alt: Android vietos nustatymai
  
.. image:: ../images/fsl2pic4a.jpg
  :alt: automatinis laikas ir laiko juosta
  
.. image:: ../images/fsl2pic4.jpg
  :alt: LibreLink aliarmo nustatymai
  
Pirmas ryšio nustatymas su jutikliu yra ypač svarbus. LibreLink programėlė bando užmegzti belaidį ryšį su jutikliu kas 30 sekundžių. Jei trūksta vieno ar kelių privalomų parametrų, jie turi būti koreguojami. Galite tai atlikti bet kuriuo metu. Jutiklis nuolat bando nustatyti ryšį. Net jei tai trunka keletą valandų. Būkite kantrūs ir pabandykite kitus nustatymus prieš nuspręsdami keisti jutiklį.

Kol matote raudoną šauktuką ("!") viršutiniame kairiajame kampe LibreLinks pradžios ekrane, vadinasi nėra ryšio. Tik tada, kai šauktukas dingsta, ryšys yra užmegztas ir kraujo gliukozės duomenys yra siunčiami į telefoną. Tai turėtų įvykti daugiausiai po 5 minučių.

.. image:: ../images/fsl2pic5.jpg
  :alt: LibreLink nėra ryšio
  
Jei šauktukas lieka arba gaunate klaidos pranešimą, tai gali būti dėl keletos priežasčių:

- Android vietos nustatymo paslauga nėra įgalinta - prašome įjungti tai sistemos nustatymuose
- automatinio laiko ir laiko juostos nėra nustatytos - prašome pakeisti parametrus atitinkamai
- įjunkite aliarmus - bent vienas iš trijų aliarmų turi būti įjungtas LibreLink
- Bluetooth yra išjungtas - įjunkite

Gali padėti telefono paleidimas iš naujo, jums gali tekti padaryti tai keletą kartų. Kai tik ryšys yra užmegztas, raudonas šauktukas dingsta ir svarbiausias žingsnis yra atliktas. Jutiklis ir telefonas dabar yra sujungti, kiekvieną minutę kraujo gliukozės reikšmės yra perduodamos.

.. image:: ../images/fsl2pic6.jpg
  :alt: LibreLink ryšys nustatytas
  
Dabar išmaniojo telefono parametrai gali būti keičiami dar kartą, jei yra būtina, pvz. jei norite taupyti energiją. Vietos nustatymo paslaugą galima išjungti, garsas gali būti nutildytas, aliarmai išjungti. Kraujo gliukozės duomenys yra perduodami bet kokiu atveju.

Tačiau aktyvuojant kitą jutiklį, visi parametrai turi būti nustatyti iš naujo!

Jūs galite naudoti antrą NFC turintį išmanųjį telefoną su originalia LibreLink programėle, jei norite nuskaitymo per NFC. Skaitytuvas NEGALI būti daugiau naudojamas, jis negali būti sujungtas kartu! Antras telefonas gali įkelti kraujo gliukozės reikšmes į Abbott debesį (LibreView). LibreView gali generuoti ataskaitas endokrinologui. Yra daug tėvų, kuriems to reikia. 

Pastaba: modifikuota programėlė neturi jokio ryšio su internetu.

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

Iš tikrųjų tai neaktyvuos Libre2 jutiklio ar kažkaip kitaip jo nepaveiks. Tai tiesiog nurodo xDrip+'ui, kad naujas sensorius siunčia kraujo gliukozės lygius. Jei galite, įveskite dvi reikšmes, gautas iš gliukomačio, pradinei kalibracijai. Dabar kraujo gliukozės reikšmės turėtų būti rodomos xDrip+ kas 5 minutes. Praleistos reikšmės, pvz. nes buvote per toli nuo telefono, negali būti įrašytos atbuline data.

4 Žingsnis: konfigūruoti AndroidAPS
==================================================
* AndroidAPS eikite į Konfigūratorių>KG šaltinis ir pažymėkite xDrip+ 
* Jei AndroidAPS negauna glikemijos duomenų, kai telefonas veikia skrydžio režimu, naudokite funkciją 'Nustatyti gavėją', kaip aprašyta xDrip + nustatymų puslapyje <../Configuration/xdrip.html#identifiziere-empfanger>`_.

Kol kas naudojant Libre 2 kaip KG šaltinį, negalite aktyvuoti 'Įjungti SMB visada' ir 'Įjungti SMB po angliavandenių' per SMB algoritmą. KG reikšmės Libre 2 nėra pakankamai tikslios, norint saugiai naudoti šias funkcijas. Žiūrėkite "Lyginti kraujo gliukozės duomenis <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_, jei norite sužinoti daugiau.

Patirtis ir gedimų šalinimas
==================================================

Ryšys yra neįtikėtinai geras. Išskyrus "Huawei" mobiliojo ryšio telefonus, visi dabartiniai išmanieji telefonai, atrodo, gerai veikia. Pakartotinis bandymas prisijungti, nutrūkus ryšiui, yra puikus. Ryšys gali nutrūkti, jei mobilusis telefonas yra kišenėje, esančioje priešingoje pusėje nei jutiklis arba, jei esate lauke. Kai aš sode, nešioju telefoną toje pačioje pusėje kur ir jutiklis. Patalpose, kur Bluetooth ryšys sklinda atspindėdamas nuo paviršių, sunkumų neturėtų kilti. Jei jūs turite ryšio problemų, išbandykite kitą telefoną.

Techniškai, esama kraujo gliukozės reikšmė yra perduodama xDrip+ kiekvieną minutę. Svertinio vidurkio filtras apskaičiuoja išlygintą reikšmę per pastarąsias 25 minutes. Tai privaloma naudojant uždarą ciklą. Kreivės atrodo sklandžiai ir ciklo rezultatai yra puikūs. Neapdorotos reikšmės, kuriomis aktyvuojami aliarmai, šiek tiek šokinėja, tačiau atitinka reikšmes skaitytuve. Be to, neapdorotos reikšmės gali būti rodomos xDrip+ grafike, kad būtų galima sureaguoti laiku į staigius pokyčius. Įjunkite Less Common Settings > Advanced Settings for Libre2 > "show Raw values" ir "show Sensors Infos". Tada neapdorotos reikšmės bus atvaizduojamos papildomai kaip maži balti taškai, o papildoma jutiklio informacija bus matoma sistemos meniu.

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
  
Galite kalibruoti Libre2 su plius/minus 1 mmol/l atsvara (intercept), bet ne nuokrypiu (slope).  Norint saugiai jaustis, kalibruokite kas 24-48 valandas. Reikšmės yra tikslios iki pat jutiklio pabaigos ir nešokinėja taip kaip Libre1. Tačiau, jei jutiklis rodo visiškai netiksliai, tai nepasikeis. Tada jutiklis turėtų būti nedelsiant pakeistas.

Libre2 jutikliai turi patikimumo patikrinimus, siekiant nustatyti blogas reikšmes. Kai tik jutiklis pajuda ant rankos ar yra šiek tiek pastumiamas, reikšmės gali pradėti svyruoti. Libre2 jutiklis tada išsijungs saugumo sumetimais. Deja, skenuojant su programėle, atliekami papildomi tikrinimai. Programėlė gali deaktyvuoti jutiklį, net jei su jutikliu viskas yra gerai. Šiuo metu vidinis testas yra per griežtas. Aš visiškai nustojau skenuoti ir nuo tada neturėjau sutrikimų.

Kitose laiko zonose <../Usage/Timezone-traveling.html>`_ yra dvi strategijos ciklui: Arba 

1. nekeisti išmaniojo telefono laiko ir pastumti bazės profilį (telefonas skrydžio režimu) arba 
2. ištrinti pompos istoriją ir pakeisti telefono laiką į vietinį. 

1. būdas yra geras iki tol, kol nereikia keisti Libre2 jutiklio į naują. Jei abejojate, pasirinkite metodą 2., ypač, jei kelionė trunka ilgiau. Jei aktyvuojate naują jutiklį, automatinė laiko juosta turi būti nustatyta, taigi 1. metodas netinka. Prašome patikrinti tai prieš kelionę, kitaip galite greitai turėti problemų.

Be to, modifikuota programėlė gali būti naudojama su Droplet siųstuvu arba (greit pasirodys) nauju OOP xDrip+ algoritmu, norint gauti gliukozės reikšmes. MM2 ir blucon neveikia iki šiol.
