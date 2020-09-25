# Accu-Chek Insight pompa

**Ši programinė įranga yra ne paruoštas produktas, o Pasidaryk Pats sprendimo dalis, todėl Jūs turite skaityti, mokytis ir suprasti sistemos veikimą savarankiškai. Tai nėra kažkas, kas kontroliuos Jūsų diabetą už Jus, tačiau jei skirsite tiek laiko, kiek reikia, sistema leis Jums pagerinti diabeto kontrolę ir gyvenimo kokybę. Nepulkite stačia galva, skirkite laiko mokymuisi. Tik Jūs pats atsakote už tai, ką darysite su šia sistema.**

* * *

## *** DĖMESIO: ** Jei iki šiol naudojote „Insight“ pompą su ** SightRemote ** nuotolinio valdymo pultu, ** įdiekite naujausią AAPS versiją ** ir ** pašalinkite SightRemote **.*

## Reikalavimai techninei ir programinei įrangai

* Roche Accu-Chek Combo pompa (bet kuri versija, veikia su visomis)

Pastaba: AAPS visada duomenis įrašys į **pirmąjį pompos bazės profilį**.

* Android telefonas (Iš esmės kiekviena Android versija būtų tinkama Insight, bet žvilgtelėkite į [Moduliai](../Module/module#phone) puslapį, kuri Android versija yra būtina AndroidAPS veikimui.)
* Jūsų telefone įdiegtos AndroidAPS programos

## Sąranka

* Insight pompa turi būti prijungta tik prie vieno įrenginio vienu metu. Jei anksčiau esate prijungę nuotolinio valdymo pultą „Insight“ (matuoklį), jį turite pašalinti iš pompos suporuotų įrenginių sąrašo: Meniu > Nustatymai > Ryšiai > Ištrinti įrenginį
    
    ![Ekrano vaizdas, kaip pašalinti gliukometrą iš Insight pompos](../images/Insight_RemoveMeter.png)

* AndroidAPS programos [ konfigūratoriuje ](../Configuration/Config-Builder) pompos skyriuje pasirinkite Accu-Chek Insight
    
    ![Insight pompos konfigūratoriaus ekrano vaizdas](../images/Insight_ConfigBuilder.png)

* Spustelėkite krumpliaračio piktogramą, kad atidarytumėte Insight nustatymus.

* Nustatymuose ekrano viršuje spustelėkite mygtuką „Prijungti Insight“. Pamatysite netoliese esančių Bluetooth įrenginių sąrašą (žemiau kairėje).
* Insight pompoje eikite į meniu> Nustatymai> Ryšiai> Pridėti įrenginį. Pompos ekrane (apačioje dešinėje) pasirodys pompos serijos numeris.
    
    ![Insight suporavimo ekrano vaizdas 1](../images/Insight_Pairing1.png)

* Telefono Bluetooth įrenginių sąraše spustelėkite pompos serijos numerį. Tada spustelėkite Suporuoti, kad patvirtintumėte veiksmą.
    
    ![Insight suporavimo ekrano vaizdas 2](../images/Insight_Pairing2.png)

* Tiek pompa, tiek telefonas parodys kodą. Įsitikinkite, kad abiejuose įrenginiuose kodai yra vienodi, ir patvirtinkite pompoje ir telefone.
    
    ![Insight suporavimo ekrano vaizdas 3](../images/Insight_Pairing3.png)

* Atlikta! Paplokite sau už tai, kad sėkmingai suporavote pompą su AndroidAPS.
    
    ![Insight suporavimo ekrano vaizdas 4](../images/Insight_Pairing4.png)

* Norėdami įsitikinti, kad viskas tvarkoje, grįžkite į AndroidAPS konfigūratorių ir spustelėkite nustatymų piktogramą šalia „Insight pompa“, eikite į Insight nustatymus, tada spustelėkite „Insight suporavimas“ ir pamatysite informaciją apie pompą:
    
    ![Insight suporavimo informacijos ekrano vaizdas](../images/Insight_PairingInformation.png)

Pastaba: tarp pompos ir telefono nebus nuolatinio ryšio. Ryšys bus užmegztas tik prireikus (t. y. nustatyti laikiną bazę, suleisti bolusą, perskaityti pompos istoriją ir t.t.). Priešingu atveju telefono ir pompos baterijos greitai išseks.

## AAPS nustatymai

Jei duomenis įkeliate į Nightscout ir naudojate Insight pompą., neturėtumėte suaktyvinti **„"Visada naudoti bazės absoliučias reikšmes“**. Į AAPS eiti į Nustatymai> NSClient > Papildomi nustatymai, tada įsitikinkite, kad "Visada naudoti bazės absoliučias reikšmes" yra išjungta. Tai gali sukelti neteisingus laikinos bazės nustatymus Insight pompoje.

Norėdami išspręsti problemą, šiuo metu galite naudoti tik **Tik įkelti į NS (ne sinchronizuoti)**, jei norite naudoti Autotune (automatinį derinimą). AAPS eikite į Nustatymai> NSClient > Papildomi nustatymai ir aktyvuokite "Tik įkelti į NS (ne sinchronizuoti)".

![Insight nustatymų ekrano vaizdas](../images/Insight_settings.png)

AndroidAPS Insight nustatymuose suaktyvinkite šiuos parametrus:

* „Įrašyti rezervuaro keitimus“: Tai automatiškai sukurs insulino rezervuaro pakeitimo įrašą, kai bus paleista "užpildyti kateterio kaniulę" funkcija pompoje.

* „Įrašyti infuzijos rinkinio pakeitimą“: Paleidus pompos funkciją „pradinis infuzijos rinkinio pildymas“, atitinkama pastaba pridedama prie AndroidAPS duomenų bazės.

* „Įrašyti infuzijos rinkinio pakeitimą“: Paleidus pompos funkciją „pradinis infuzijos rinkinio pildymas“, atitinkama pastaba pridedama prie AndroidAPS duomenų bazės. **Pastaba: Kateterio pakeitimas paleidžia Autosens funciją iš naujo.**

* „Įrašyti akumuliatoriaus pakeitimą“: Kai pompoje įdedama nauja baterija, į AndroidAPS duomenų bazę pridedama pastaba.

* „Įrašyti darbo režimo pasikeitimą“: prie AndroidAPS duomenų bazės pridedama pastaba, kai paleidžiate, sustabdote ar pristabdote pompą.

* „Įrašyti perspėjimus“: AndroidAPS duomenų bazėje įrašoma pastaba apie pompos perspėjimus (išskyrus priminimus, bolusus ir laikinos bazės TBR atšaukimą).

* „Įgalinti laikinos bazės TBR emuliaciją“: Insight pompa gali nustatyti tik iki 250% laikinos bazės TBR dydžio. Norėdami išvengti šio apribojimo, dėl laikinos bazės emuliacijos, bus leista pompai suleisti papildomo insulino kaip ištęstą bolusą, jei nustatote daugiau kaip 250% laikinos bazės.
    
    **Pastaba: Rekomenduojama naudoti tik vieną ištęstinį bolusą vienu metu, nes tuo pačiu metu naudojant kelis ištęstinius bolusus gali sukelti klaidas.**

* "Išjungti vibracijas rankiniu boluso atveju": Tai išjungia Insight pompos vibracijas, sueidžiant bolusą rankiniu būdu (arba ištęstą bolusą). Šis nustatymas yra prieinamas tik su naujausia Insight programine įranga (3.x).

* "Išjungti vibracijas automatinio boluso atveju": Tai išjungia Insight pompos vibracijas, suleidžiant bolusą automatiškai (SMB arba laikina bazė su LB emuliacija). Šis nustatymas yra prieinamas tik su naujausia Insight programine įranga (3.x).

* „Atkūrimo trukmė“: tai nustato, ar AndroidAPS laukia naujo bandymo prisijungti po nesėkmingo. Jūs galite pasirinkti nuo 0 iki 20 sekundžių. Jei kyla ryšio problemų, pasirinkite ilgesnį laukimo laiką.   
      
    Pavyzdys min. atkūrimo trukmė = 5 ir max. atkūrimo trukmė = 20   
      
    nėra ryšio -> palaukti **5** sek.   
    kartoti -> nėra ryšio -> palaukti **6** sek.   
    kartoti -> nėra ryšio -> palaukti **7** sek.   
    kartoti -> nėra ryšio -> palaukti **8** sek.   
    ...   
    kartoti -> nėra ryšio -> palaukti **20** sek.   
    kartoti -> nėra ryšio -> palaukti **20** sek.   
    ...

* „Atjungimo atidėjimas“: nusako, kiek laiko (sekundėmis) AndroidAPS lauks, kol atsijungs nuo pompos po veiksmo atlikimo. Numatytoji vertė yra 5 sekundės.

Kol pompa sustabdyta, AAPS rodo laikiną bazės dydį 0%.

AndroidAPS skirtuke Accu-Chek Insight rodoma dabartinė pompos būklė ir du mygtukai:

* Atnaujinti: Atnaujina pompos būklę
* „Įgalinti / išjungti pranešimą apie LB“: Standartiškai Insight pompa siunčia aliarmą apie laikinos bazės LB pabaigą. Mygtukas leidžia įjungti arba išjungti šį perspėjimą nekeičiant programinės įrangos konfigūracijos.
    
    ![Dabartinės Insight būsenos ekrano vaizdas](../images/Insight_Status2.png)

## Pompos nustatymai

Signalus pompoje nustatykite taip:

* Meniu > Nustatymai > Prietaiso nuostatos > Režimo parametrai > Tylus> Signalas > Garsas
* Meniu > Nustatymai > Prietaiso nuostatos > Režimo parametrai > Tylus > Signalas > 0 (nuimti visus stulpelius)
* Meniu> Režimo nustatymai> Signalo režimas> Tylus

Tai pašalins visų įspėjimų apie pompą garsą ir leis AndroidAPS nuspręsti, kuris signalas jums aktualus. Jei AndroidAPS neatpažįsta signalo, padidės jo garsas (pirmiausia pypsėjimas, paskui vibracija).

### Vibracija

Priklausomai nuo pompos programinės įrangos versijos, Insight trumpai vibruos kiekvieną kartą, kai bus suleistas bolusas (pvz., kai AndroidaAPS suleidžia SMB arba laikinos valandinės bazės emuliacija leis ištęstą bolusą).

* Programinė versija 1.x: Jokios vibracijos.
* Programinė versija 2.x: Vibracija negali būti išjungta.
* Programinė versija 3.x: AndroidAPS suleidžia bolusą tyliai. (nuo [versijos 2.6.1.4](../Installing-AndroidAPS/Releasenotes#version-2-6-1-4))

Programinės įrangos versiją galima rasti meniu.

## Baterijos pakeitimas

Insight baterijos veikimo laikas su AAPS yra ne ilgesnis kaip 10–14 dienų, daugiausia 20 dienų. Apie tai pranešę vartotojai naudoja Energizer ličio baterijas.

Insight pompoje yra maža vidinė baterija, palaikanti svarbias funkcijas, tokias kaip laikrodis, kuris ir toliau veikia, kol keičiama pompos baterija. Jei baterijos keitimas užima per daug laiko, šios vidinės akumuliatoriaus įkrova gali pasibaigti, laikrodis bus nustatytas iš naujo ir, įdėjus naujas baterijas, jums bus pasiūlyta įvesti naują laiką ir datą. Jei taip atsitiks, visi AndroidAPS įrašai nebebus įtraukti į skaičiavimus, kol nebus pakeista baterija, nes nebus galima identifikuoti tinkamo laiko.

## Insight specifinės klaidos

### Ištęstas bolusas

Rekomenduojama naudoti tik vieną ištęstinį bolusą vienu metu, nes tuo pačiu metu naudojant kelis ištęstinius bolusus gali sukelti klaidas.

### Baigėsi laikas

Kartais Insight pompa gali nereaguoti jungimo metu. Tokiu atveju AAPS rodomas šis pranešimas: „Suderinimo laikas baigėsi - nustatykite Bluetooth iš naujo“.

![Iš naujo nustatyti Bluetooth Insight](../images/Insight_ResetBT.png)

Tokiu atveju maždaug 10 sekundžių išjunkite pompos ir išmaniojo telefono Bluetooth, tada vėl įjunkite.

## Kelionė per laiko zonas su Insight pompa

Žiūrėkite skyrių [Keliavimas per skirtingas laiko juostas su pompa](../Usage/Timezone-traveling#insight).