# Accu-Chek Insight pompa

**Ši programinė įranga yra ne paruoštas produktas, o Pasidaryk Pats sprendimo dalis, todėl Jūs turite skaityti, mokytis ir suprasti sistemos veikimą savarankiškai. Tai nėra kažkas, kas kontroliuos Jūsų diabetą už Jus, tačiau jei skirsite tiek laiko, kiek reikia, sistema leis Jums pagerinti diabeto kontrolę ir gyvenimo kokybę. Nepulkite stačia galva, skirkite laiko mokymuisi. Tik Jūs pats atsakote už tai, ką darysite su šia sistema.**

* * *

## *** DĖMESIO: ** Jei iki šiol naudojote „Insight“ pompą su ** SightRemote ** nuotolinio valdymo pultu, ** įdiekite naujausią AAPS versiją ** ir ** pašalinkite SightRemote **.*

## Reikalavimai techninei ir programinei įrangai

* A Roche Accu-Chek Insight pump (any firmware, they all work)
    
    Note: AAPS will write data always in **first basal rate profile in the pump**.

* Android telefonas (veiks bet kuri versija, bet AndroidAPS veikimui reikia bent Android 5 („Lollipop“).)

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

Pastaba: tarp pompos ir telefono nebus nuolatinio ryšio. A connection will only be established if necessary (i.e. setting temporary basal rate, giving bolus, reading pump history...). Priešingu atveju telefono ir pompos baterijos greitai išseks.

## AAPS nustatymai

You **must not use ‘Always use basal absolute values’** with Insight pump. In AAPS go to Preferences > Nightscout-Client > Advanced Settings and make sure ‘Always use basal absolute values’ is disabled. It would lead to false TBR settings in Insight pump. As a consequence you will not be able to use Autotune but there is no alternative to disable this when using Insight pump.

![Insight nustatymų ekrano vaizdas](../images/Insight_pairing_V2_5.png)

AndroidAPS Insight nustatymuose suaktyvinkite šiuos parametrus:

* "Log reservoir changes": This will automatically record an insulin cartridge change when you run the "fill cannula" program on the pump.
* „Įrašyti infuzijos rinkinio pakeitimą“: Paleidus pompos funkciją „pradinis infuzijos rinkinio pildymas“, atitinkama pastaba pridedama prie AndroidAPS duomenų bazės.
* "Log site change": This adds a note to the AndroidAPS database when you run the "cannula filling" program on the pump. **Note: A site change also resets Autosens.**
* „Įrašyti akumuliatoriaus pakeitimą“: Kai pompoje įdedama nauja baterija, į AndroidAPS duomenų bazę pridedama pastaba.
* „Įrašyti darbo režimo pasikeitimą“: prie AndroidAPS duomenų bazės pridedama pastaba, kai paleidžiate, sustabdote ar pristabdote pompą.
* „Įrašyti perspėjimus“: AndroidAPS duomenų bazėje įrašoma pastaba apie pompos perspėjimus (išskyrus priminimus, bolusus ir laikinos bazės atšaukimą).
* „Įgalinti laikinos bazės emuliaciją“: Insight pompa gali nustatyti tik iki 250% laikinos bazės dydžio. To get round this restriction, TBR emulation will instruct the pump to deliver an extended bolus for the extra insulin if you request a TBR of more than 250%.
    
    **Note: Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.**

* „Atkūrimo trukmė“: tai nustato, kaip ilgai AndroidAPS laukia naujo bandymo prisijungti po nesėkmingo. Jūs galite pasirinkti nuo 0 iki 20 sekundžių. Jei kyla ryšio problemų, pasirinkite ilgesnį laukimo laiką.   
      
    Pavyzdys min. atkūrimo trukmė = 5 ir maks. atkūrimo trukmė = 20   
      
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

AndroidAPS skirtuke „Accu-Chek Insight“ rodoma dabartinė pompos būklė ir du mygtukai:

* Atnaujinti: Atnaujina pompos būklę
* „Įgalinti / išjungti pranešimą apie LB“: Standartiškai Insight pompa siunčia aliarmą apie laikinos bazės LB pabaigą. Mygtukas leidžia įjungti arba išjungti šį perspėjimą nekeičiant programinės įrangos konfigūracijos.
    
    ![Dabartinės Insight būsenos ekrano vaizdas](../images/Insight_Status2.png)

## Pompos nustatymai

Signalus pompoje nustatykite taip:

* Meniu> Nustatymai> Įrenginio nustatymai> Režimo nustatymai> Tylus> Signalas> Garso meniu> Nustatymai> Įrenginio nustatymai> Režimo nustatymai> Tylus> Garsumas> 0 (pašalinti visas juostas)
* Meniu> Režimo nustatymai> Signalo režimas> Tylus

Tai pašalins visų pompos perspėjimų garsą ir leis AndroidAPS nuspręsti, kuris signalas jums aktualus. Jei AndroidAPS neatpažįsta signalo, padidės jo garsas (pirmiausia pypsėjimas, paskui vibracija).

Insight pompos su naujesne programine įranga visada vibruos, kai bus pateiktas bolusas (pvz., kai AndroidAPS siunčia SMB arba LB emuliaciją, nustato ištęstinį bolusą). Vibracija negali būti išjungta. Senesnės pompos šiais atvejais nevibruoja.

## Baterijos pakeitimas

Insight pompoje yra maža vidinė baterija, palaikanti svarbias funkcijas, tokias kaip laikrodis, kuris ir toliau veikia kol keičiama pagrindinė pompos baterija. Jei baterijos keitimas užima per daug laiko, šio vidinio akumuliatoriaus įkrova gali pasibaigti, laikrodis bus nustatytas iš naujo ir, įdėjus naujas baterijas, jums bus pasiūlyta įvesti naują laiką ir datą. Jei taip atsitiks, visi AndroidAPS įrašai nebebus įtraukti į skaičiavimus, kol nebus pakeista baterija, nes nebus galima identifikuoti tinkamo laiko.

## Insight specifinės klaidos

### Ištęstas bolusas

Rekomenduojama naudoti tik vieną ištęstinį bolusą vienu metu, nes tuo pačiu metu naudojant kelis ištęstinius bolusus tai gali sukelti klaidas.

### Baigėsi laikas

Kartais Insight pompa gali nereaguoti sujungimo metu. Tokiu atveju AAPS rodomas šis pranešimas: „Sujungimo laikas baigėsi - nustatykite Bluetooth iš naujo“.

![Iš naujo nustatyti Bluetooth](../images/Insight_ResetBT.png)

Tokiu atveju maždaug 10 sekundžių išjunkite pompos ir išmaniojo telefono Bluetooth, tada vėl atgal įjunkite.

## Kelionė per laiko zonas su Insight pompa

For information on traveling across time zones see section [Timezone traveling with pumps](../Usage/Timezone-traveling#insight).