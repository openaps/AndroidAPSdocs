# Accu Chek Combo pompa

**Ši programinė įranga yra ne paruoštas produktas, o Pasidaryk Pats sprendimo dalis, todėl Jūs turite skaityti, mokytis ir suprasti sistemos veikimą savarankiškai. Tai nėra kažkas, kas kontroliuos Jūsų diabetą už Jus, tačiau jei skirsite tiek laiko, kiek reikia, sistema leis Jums pagerinti diabeto kontrolę ir gyvenimo kokybę. Nepulkite stačia galva, skirkite laiko mokymuisi. Tik Jūs pats atsakote už tai, ką darysite su šia sistema.**

## Reikalavimai įrangai

* Roche Accu-Chek Combo pompa (bet kuri versija)
* Smartpix arba Realtime kabelis bei 360 Configuration Software programėlė pompos modifikavimui. (Klientui pageidaujant Roche nemokamai išsiunčia Smartpix ir konfigūravimo programėlę.)
* Android telefonas su suderinama programinės įrangos versija: ne mažiau kaip Android 8.1 (Oreo) arba LineageOS 14.1 (anksčiau vadinta CyanogenMod). 
* LineageOS 14.1 turi būti ne ankstesnės nei 2017 m. birželio versijos, nes tik tuo metu buvo padaryti reikalingi pakeitimai Combo pompos susiejimui. 
* Telefonų sąrašas peteikiamas dokumente [AAPS telefonai](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435).
* Atkreipkite dėmesį, kad šis sąrašas remiasi tik asmenine vartotojų patirtimi ir gali būti nepilnas. Jūs taip pat galite prisidėti pranešdami apie savo patirtį (pagrindinis šio projekto principas - neatlygintinas asmeninis įnašas).
* Atminkite, kad nors Android 8.1 leidžia jungtis prie Combo pompos, vis tiek kyla sunkumų naudojant AAPS su Android 8.1.
* Informacija pažengusiems vartotojams: galima susieti "nulaužtos OS" telefoną ir perkelti jį į kitą telefoną, kurio OS taip pat turi būti "nulaužtas", kad būtų galima naudoti su Ruffy / AAPS. Čia aprašoma, kaip susieti pompą su Android, senesniu nei 8.1 versija, bet tai nėra visiškai ištestuota: https://github.com/gregorybel/combo-pairing/blob/master/README.md

## Apribojimai

* Ištęstinis bolusas ir dvibangis bolusas negalimi (žr. [Ištęsti angliavandeniai](../Usage/Extended-Carbs.rst)).
* Galimas tik vienas bazės profilis.
* Daugiau nei 1 bazinio profilio nustatymas, ištęsto ar daugiabangio boluso suleidimas iš pompos trukdo laikinų bazių nustatymui (TBR) ir išjungia ciklą 6 valandoms, todėl ciklas negali saugiai veikti tokiomis sąlygomis.
* Šiuo metu nėra galimybės pompoje nustatyti datos ir laiko, todėl [žiemos/vasaros laiko pokyčius](../Usage/Timezone-traveling.html#accu-chek-combo) turite atlikti rankiniu būdu (galite išjungti telefono automatinį laiko nustatymą iš vakaro, ir nustatyti jį ryte, kad išvengtumėte aliarmų nakties metu).
* Šiuo metu yra palaikomi baziniai greičiai nuo 0.05 iki 10 vv/h. Tai taip pat taikoma koreguojant profilį, pvz., kai padidinama 200%, didžiausia bazė negali viršyti 5 vv/h, nes ji padvigubės. Analogiškai, kai reikia sumažinti iki 50%, mažiausias bazinis greitis turi būti bent 0.10 vv/h.
* Jei Ciklas reikalauja atšaukti veikiančią laikiną bazę (TBR), vietoje 100% Combo nustatys 90% arba 110% 15-ai minučių. Taip nustatyta, nes laikinos bazės atšaukimas įjungia pompos aliarmą, kuris sukelia intensyvų vibravimą.
* Retkarčiais (kartą per keletą dienų) AAPS gali nepasisekti automatiškai išjungti LAIKINOS BAZĖS ATŠAUKIMAS aliarmo, dėl to reikalingi vartotojo veiksmai (paspaudžiant ATNAUJINTI mygtuką AAPS, kad įspėjimas būtų perduotas AAPS, arba patvirtinant aliarmą pompoje).
* Bluetooth ryšio stabilumas priklauso nuo telefono modelio, kai ryšys su pompa tampa negalimas, įjungiamas perspėjimas "Pompa nepasiekiama". 
* Jei ši klaida atsiranda, įsitikinkite, kad Bluetooth yrayra įjungtas, paspauskite mygtuką Atnaujinti, esantį skirtuke „Combo“, kad pamatytumėte, ar tai įvyko dėl atsitiktinio trikdžio.Jei vis tiek nėra ryšio, iš naujo paleiskite telefoną, paprastai tai išsprendžia problemą. 
* Jei paleidimas iš naujo nepadeda, turi būti paspaustas pompos mygtukas, kuris iš naujo atkuria pompos Bluetooth. Tada pompa vėl atnaujins ryšį su telefonu. 
* Šiuo metu kitų sprendimų ryšio problemoms nėra. Taigi, jei dažnai matote tas klaidas, jūsų vienintelė galimybė yra įsigyti kitą telefoną, kuris, kaip tvirtina kiti vartotojai, gerai veikia su AndroidAPS ir Combo (žr. Aukščiau).
* Boluso suleidimas tiesiai iš pompos gali būti ne iš karto matomas programoje (tikrinama kaskart, kai AAPS prisijungia prie pompos) ir gali blogiausiu atveju užtrukti iki 20 min. 
* Tokie bolusai visada tikrinami prieš nustatant aukštą laikiną bazę arba bolusuojant per AAPS, taigi AAPS gali atsisakyti nustatyti laikiną bazę ar suleisti bolusą, nes jis galėjo būti apskaičiuotas pagal neteisingas prielaidas. (-> neleiskite boluso tiesiogiai per pompą! Žr. skyrių [Naudojimas](#usage))
* Nenustatinėkite laikinų bazių pompoje, nes jas kontroliuoja Ciklas. Aptikti naują laikiną bazę pompoje gali užtrukti iki 20 minučių, ir jos efektas bus skaičiuojamas tik nuo aptikimo momento, todėl gali nutikti, kad 20 min trukmės laikina bazė neatsispindės AIO. 

## Sąranka

* Konfigūruokite pompą naudodami "360° Pump Configuration Software" programą. 
* Jei jos neturite, susisiekite su Accu-Check atstovybe. Dažniausiai registruoti vartotojai turi galimybę gauti "360° Pump Configuration Software" ir SmartPix IR kabelį (Realtime prietaisas irgi tinka, jei tokį turite).
* **Privalomi nustatymai** (pažymėti žaliai ekrano nuotraukose):
    
    * Nustatykite meniu konfigūraciją "Standart", tada matysite tik tuos meniu pasirinkimus ir funkcijas, kurios yra palaikomos, o nepalaikomos bus paslėptos (ištęstas/daugiabangis bolusas, keletas bazės profilių). Jos nedera su saugumo reikalavimais, todėl sukelia Ciklo funkcionalumo sutrikimus, jei yra naudojamos.
    * Patikrinkite, kad *Insulin Pump Options* laukelyje *Quick Info Text* būtų įrašyta QUICK INFO (be kabučių). Būtinai nustatykite pompoje anglų kalbą.
    * Nustatykite 500% laikiną bazę TBR *Maximum Adjustment*
    * Išjunkite *Signal End of Temporary Basal Rate*
    * TBR *Duration increment* nustatykite 15 min
    * Įjunkite Bluetooth

* **Rekomenduojami nustatymai** (pažymėti mėlynai ekrano nuotraukose)
    
    * Nustatykite pageidaujamą senkančio rezervuaro perspėjimą
    * Kad išvengtumėt programos klaidų, nustatykite maksimalų boluso kiekį, atsižvelgdami į savo terapijos ypatumus
    * Taip pat nustatykite maksimalią laikinos bazės trukmę kaip saugiklį. Leiskite bent 3 val., nes jei prireiks atjungti pompą 3 valandoms, bus nustatyta 0% bazė toms 3 val.
    * Įjunkite mygtukų užraktą pompoje, kuris apsaugos nuo bolusų leidimo tiesiogiai iš pompos, ypač jei pompą naudojate seniai ir greitasis bolusų leidimas yra tapęs įpročiu.
    * Nustatykite display timeout 5.5, o menu timeout - 5 s. Tai leis AAPS greičiau atsistatyti įvykus klaidai ir sumažins vibracijų, kurios susijusios su klaidomis, skaičių

![Vartotojo meniu nustatymų ekrano nuotrauka](../images/combo/combo-menu-settings.png)

![Laikinos bazės nustatymų ekrano nuotrauka](../images/combo/combo-tbr-settings.png)

![Bolusų nustatymų ekrano nuotrauka](../images/combo/combo-bolus-settings.png)

![Rezervuaro nustatymų ekrano nuotrauka](../images/combo/combo-insulin-settings.png)

* Įdiegite AndroidAPS, kaip aprašyta [AndroidAPS wiki](../Installing-AndroidAPS/Building-APK.html).
* Įsitikinkite, kad viską perskaitėte ir suprantate, kaip sukonfigūruoti AndroidAPS.
* Šiame AAPS nustatymų etape pasirinkite **MDI** o ne Combo pompą, kad įskiepis netrukdytų Ruffy programai susijungimo procese.
* Iš github per git klonuokite [ruffy](https://github.com/MilosKozak/ruffy).
* Įdiekite Ruffy, ir naudokite ją pompos suporavimui.
    
    * Jei nepavyksta po kelių bandymų, įjunkite `pairing` atšaką, suporuokite pompą ir tada grįžkite į pradinę atšaką.
    * Atkreipkite dėmesį, kad suporavimo procesas yra labai kaprizingas (bet atliekamas tik vieną kartą) ir gali tekti atlikti keletą bandymų; laiku reaguokite į nurodymus ir, jei reikia, pakartokite bandymą, prieš tai pašalinę pompos įrenginį iš telefono Bluetooth įrenginių sąrašo. 
    * Kitas būdas yra bandyti eiti į Bluetooth meniu telefone po to, kai poravimo procesas paleistas (tada telefono Bluetooth aptinkamas tol, kol rodomas pats meniu) ir vėl perjungti atgal į Ruffy, kai pompa parodo autorizavimo kodą ir suporavimas patvirtintas pompoje.
    * Jei nepasiseka suporuoti pompos (sakykime, po 10 bandymų), pabandykite palaukti iki 10 sek. prieš patvirtinant pompos suporavimą (kai telefono pavadinimas matomas pompos ekrane). 
    * Kadangi nustatėte, kad meniu išsijungia po 5s, turite šią reikšmę vėl padidinti. Kai kurie vartotojai pranešė, kad jiems šis "triukas" padėjo. 
    * Jei niekas nepadeda, pabandykite pereiti į kitą kambarį, nes galbūt veikia kokie nors vietiniai radijo trikdžiai. Mažiausiai vienam vartotojui tai akimirksniu išsprendė suporavimo problemą.

* Kai AAPS naudoja Ruffy, Ruffy aplikacija negali būti atidaroma. Geriausia tiesiog perkrauti telefoną po suporavimo ir leisti pačiai AAPS įjungti Ruffy fone.

* Jei pompa visiškai nauja, jūs turite suleisti **bent vieną bolusą tiesiogiai iš pompos**, kad sukurtumėte pirmą įrašą pompos istorijoje.
* Prieš nustatant AAPS Combo pompos įskiepį, įsitikinkite, kad profilis nustatytas teisingai ir aktyvuotas (!), o bazės profilis yra toks, kokio reikia, nes AAPS įrašys šį profilį pompoje.
* Tada aktyvuokite [Combo įskiepį](../Configuration/Config-Builder.html#pump). 
* Paspauskite *Atnaujinti* mygtuką Combo skirtuke, kad inicijuotumėte pompą.
* Norėdami patikrinti savo nustatymus, su **atjungta** nuo kūno pompa, AAPS nustatykite laikiną bazę 500% 15-ai min. ir suleiskite bolusą (į orą).
* Pompos istorijoje turi atsirasti įrašai apie laikiną bazę ir bolusą. AAPS taip pat turi rodyti aktyvią laikiną bazę ir suleistą bolusą.

## Kodėl pompos suporavimas naudojant Ruffy programėlę nepavyksta?

Gali būti keletas priežasčių. Pabandykite šiuos žingsnius:

1. Įdėkite naują **arba pilnai įkrautą bateriją** į pompą. Pažvelkite į baterijos skyrių dėl papildomos informacijos. Įsitikinkite, kad pompa yra labai arti telefono.

![Combo turi būti šalia telefono](../images/Combo_next_to_Phone.png)

2. Išjunkite ar išneškite bet kuriuos kitus aktyvius Bluetooth įrenginius, nes jie gali trikdyti ryšį suporavimo metu. Bet kurie lygiaverčiai Bluetooth ryšiai ar užklausos susijungti gali sutrikdyti suporavimo procesą.
3. Ištrinkite jau sujungtus prietaisus pompos Bluetooth meniu: **BLUETOOTH SETTINGS / CONNECTION / REMOVE** kol atsiras **NO DEVICE**.
4. Telefone ištrinkite jau per Bluetooth suporuotą pompą: Parametrai / Bluetooth, pašalinkite "**SpiritCombo**"
5. Įsitikinkite, kad AAPS nepaleido Ciklo foniniame režime. Deaktyvuokite Ciklą AAPS programoje.
6. Dabar įjunkite Ruffy telefone. Paspauskite mygtuką ATNAUJINTI! ir pašalinkite seną suporavimą. Tada paspauskite Prisijungti!.
7. Pompos "Bluetooth" meniu, eikite į **ADD DEVICE / ADD CONNECTION**. Paspauskite *CONNECT!**
    
    * 6 ir 7 žingsniai turi būti atliekami per trumpą laiką.

8. Dabar pompoje turi pasirodyti telefono pavadinimas, kurį reikia pasirinkti suporavimui. Svarbu palaukti bent 5 sek prieš paspaudžiant pasirinkimo mygtuką pompoje. Kitu atveju, pompa nenusiųs korektiškos suporavimo užklausos į telefoną.

* Jei Combo pompoje yra nustatytas ekrano rodymo laikas 5 sek, galite bandyti pakeisti jį į 40 sek (originalus nustatymas). Pastebėta, kad laikas tarp pompoje parodyto telefono pavadinimo iki telefono pasirinkimo yra apie 5-10 sek. Dažniausiai, viršijus šį laiką, suporavimas nepavyksta. 
* Vėliau galite vėl grąžinti 5 sek ekrano laiką, kad atitiktų AAPS Combo nustatymus.
* Jei pompa visai nerodo telefono, gali būti, kad telefono Bluetooth nėra suderinamas su pompa. Įsitikinkite, kad naudojate naują **LineageOS ≥ 14.1** arba **Android ≥ 8.1 (Oreo)**. Jei turite, bandykite kitą išmanųjį telefoną. Čia galite rasti jau sėkmingai naudotų išmaniųjų telefonų sąrašą [AAPS Phones (https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). 

9. Toliau pompa parodys iki 10 ženklų saugos kodą. Ir Ruffy programos ekraną, kad jį įvestumėte. Įveskite kodą į Ruffy, ir viskas bus tvarkoje.
10. Perkraukite telefoną.
11. Dabar galite perkrauti AAPS Ciklą.

## Naudojimas

* Turėkite minty, kad tai nėra gatavas produktas, ypač pradžioje vartotojas turi stebėti ir suprasti sistemą, jos ribas ir galimas klaidas. 
* Griežtai rekomenduojama NENAUDOTI šios sistemos, jei naudojantis asmuo negali pilnai suprasti sistemos.
* Skaitykite OpenAPS dokumentaciją https://openaps.org, kad suprastumėte ciklo algoritmą, kuris yra AndroidAPS pagrindas.
* Skaitykite [AAPS dokumentaciją](..index.html), kad sužinotumėte apie AndroidAPS ir ją suprastumėte.
* Ši integracija naudoja tą patį funkcionalumą, kaip ir pultelis - gliukometras, pridėtas komplekte prie pompos.
* Gliukometras leidžia dubliuoti pompos ekraną ir perduoda mygtukų paspaudimų komandas į pompą. 
* Ruffy programėlė taip pat atlieka komandų perdavimą ir užtikrina ryšį su pompa. 
* `Scripter` komponentai nuskaito ekraną ir automatizuoja bolusų, laikinų bazių ir t. t. įvedimą, taip pat užtikrina, kad komandos bus vykdomos teisingai.
* AAPS sąveikauja su skriptu, kad pritaikytų ciklo komandas ir suleistų bolusus.
* Ši sąveika turi tam tikrų apribojimų: ji veikia lėtai (bet pakankamai tam tikslui, kuriam ji naudojama), o laikinos bazės nustatymas ar boluso suleidimas sukelia pompos vibravimus.
* Combo integracija su AndroidAPS yra suprojektuota su prielaida, kad visi duomenys įvedami TIK per AndroidAPS. AAPS aptinka bolusus, įvestus tiesiai per pompą, tačiau tai gali užtrukti iki 20 min. 
* Informacijos apie suleistus bolusus perskaitymas pompoje yra saugumo priemonė, ir nėra skirta dažnam naudojimui (ciklas reikalauja duomenų apie suvartotus angliavandenius, kurių negalima įvesti pompoje, todėl tai dar viena priežastis, kodėl **visi duomenų įvedimai turi būti atliekami tik per AndroidAPS**). 
* Nenustatykite ir neatšaukite laikinos bazės pačioje pompoje. Ciklas perima laikinų bazių valdymą ir kitaip negali patikimai veikti, nes negali aptikti vartotojo pačioje pompoje nustatyto laikinos bazės starto laiko.
* AAPS algoritmas startuodamas nuskaito ir atnaujina pirmą bazės profilį pompoje.
* Bazė neturėtų būti keičiama pačioje pompoje, tačiau bet kokiu atveju, dėl saugumo tokie pakeitimai bus aptikti ir pakoreguoti (nederėtų pasikliauti vien šiais saugikliais, jie skirti nenumatytų pokyčių pompoje aptikimui).
* Rekomenduojama įjungti pompos mygtukų užraktą, kad išvengtumėte atsitiktinio boluso suleidimo ar kt. veiksmų, ypač kai pompa buvo naudojama anksčiau, ir "greito boluso" funkcija buvo dažnai naudojama.
* Taip pat, su mygtukų užraktu apsisaugosite nuo atsitiktinio paspaudimo, kuris gali sutrikdyti aktyvų domenų perdavimo ryšį tarp AAPS ir pompos.
* Kai pompoje parodomas pranešimas BOLUSAS ATŠAUKTAS arba LB ATŠAUKTA tuo metu kai leidžiamas bolusas ar nustatoma laikina bazė, tai reiškia, kad nutrūko ryšys tarp telefono ir pompos - taip kartais atsitinka. AAPS bandys prisijungti pakartotinai ir patvirtinti pranešimą, tada pakartoti paskutinį veiksmą (dėl saugumo, **boluso leidimas nėra pakartojimas**). 
* Taigi, šio pranešimo galima nepaisyti, nes AAPS patvirtina jį automatiškai, paprastai per 30 sekundžių (atšaukti jį lengva, tačiau tai lems tai, kad šiuo metu vykdomas veiksmas bus pristabdytas, kol užges pompos ekranas ir kol jūsų įrenginys vėl neprisijungs prie pompos). 
* Jei pompos perspėjimas tęsiasi ir automatinis patvirtinimas neįvyksta, vartotojas turi patvirtinti aliarmą rankiniu būdu.
* Kai boluso metu suveikia pranešimas apie senkantį rezervuarą ar senkančią bateriją, jie automatiškai patvirtinami ir AAPS rodomi kaip pranešimas. 
* Jei jie suveikia, kai nėra aktyvaus ryšio su pompa, spustelėję mygtuką ATNAUJINTI, esantį skirtuke „Combo“, patvirtinsite aliarmą, o AAPS rodys įrašą apie jį.
* Kai AAPS nesugeba patvirtinti LAIKINA BAZĖ ATŠAUKTA aliarmo dėl kokios nors priežasties, spustelėję mygtuką ATNAUJINTI Combo skirtuke atkursite ryšį, patvirtinsite aliarmo gavimą ir suformuosite įrašą AAPS. Tai padaryti saugu, nes tokie perspėjimai nepiktybiniai - atitinkama laikina bazė bus nustatyta kitame algoritmo cikle.
* Visi kiti pompos aliarmai, pavyzdžiui, "State: E4: Occlusion" (užsikimšimas), bus rodomi kaip pranešimas pagrindiniame ekrane ir Combo skirtuke.
* Bet kokia sistemos klaida sukuria skubų pranešimą. 
* AAPS niekada pati nepatvirtina rimtų įspėjimų apie klaidą gavimo, bet leidžia pompai pypsėti bei vibruoti, kad vartotojas galėtų savarankiškai patikrinti, ar yra kritinė situacija, kuriai reikia jo veiksmų.
* Po sėkmingo susiejimo programėlė Ruffy negali būti atidaroma (AAPS ją paleidžia fone kaip reikia).
* Jei AAPS nustoja veikti (dėl aptiktos sistemos klaidos), kai telefonas su AAPS ir pompa keičiasi duomenimis (naudodamas Ruffy), gali reikėti priverstinai stabdyti Ruffy programą. Paleidus AAPS programą, ji pati paleis Ruffy iš naujo.
* Telefono paleidimas iš naujo yra paprastas būdas priverstinai uždaryti visas veikiančias programėles.
* Ryšio tarp AAPS ir pompos metu nespauskite jokių pompos mygtukų (tuo metu pompos ekrane rodomas Bluetooth logotipas).