# AccuChek Combo pagrindinio naudojimo patarimai

## Kaip užtikrinti sklandų veikimą

* Visada **nešiokite išmanujį telefoną su savimi**, naktį palikite jį greta lovos.
* Visada įsitikinkite, kad pompos baterija yra kaip įmanoma pilna. Žiūrėkite pastraipą apie bateriją su patarimais.
* Geriausia**neliesti programėlės ruffy** kol sistema veikia. Jei programėlė bus vėl startuota, ryšys su pompa gali nutrūkti. Vieną kartą prijungus pompą prie ruffy nebereikia jos jungti iš naujo. Net perkrovus telefoną jungtis yra automatiškai atnaujinama. Jei įmanoma, perkelkite programėlę į nenaudojamą ekraną ar į katalogą jūsų telefone, kad per klaidą jos neatidarytumėte.
* Jei netyčia atidarysite ruffy programėlę veikiant uždaram ciklui, geriausia iškart perkrauti išmanųjį telefoną.
* Kai tik įmanoma, valdykite pompą per AndroidAPS programėlę. Siekiant tai užtikrinti, aktyvuokite klaviatūros užrakinimą pompoje **PUMP SETTINGS / KEY LOCK / ON**. Pompos mygtukus reikia naudoti tik tada, kai keičiamos pompos baterijos arba rezervuaras. ![Klaviatūros užraktas](../images/combo/combo-tips-keylock.png)

## Pompa nepasiekiama. Ką daryti?

### Aktyvuoti Pompa Nepasiekiama aliarmą

* AndroidAPS eikite į**Nustatymai / Vietiniai aliarmai** ir aktyvuokite **pompa nepasiekiama aliarmas** ir nustatykite **pompa nepasiekiama limitas [Min]** **31** minutei. 
* Tai duos jums pakankamai laiko, kad aliarmas nenuskambėtų, kai jūs paliekate kambarį palikę telefoną ant stalo, bet informuos jus, jei pompa negali būti pasiekta laiko tarpą, viršijantį laikinos bazės dydžio laikotarpį.

### Atstatyti pompos pasiekiamumą

* Kada AndroidAPS parodo **pompa nepasiekiama** aliarmą, pirmiausia atrakinkite pompos klaviatūrą ir **paspauskite bet kokį mygtuką ant pompos** (pavyzdžiui, mygtuką "į apačią"). Kai tik pompos ekranas užgęsta, paspauskite **ATNAUJINTI** AndroidAPS **Combo ekrane**. Dažniausiai tada ryšys vėl veikia.
* Jei tai nepadeda, perkraukite telefoną. Po perkrovimo AndroidAPS ir ruffy bus iš naujo aktyvuoti ir bus užmegztas naujas ryšys su pompa.
* Testai su skirtingais telefonais parodė, kad kai kurie telefonai dažniau nei kiti iššaukia "pompa nepasiekiama" klaidą. [AAPS Telefonai](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435) sąrašas sėkmingai išbandytų telefonų. 

### Pagrindinės dažnų komunikacijos klaidų priežastys ir pasekmės

* Telefonuose su **maža atmintimi** (arba **agresyvaus energijos taupymo** nustatymais), AndroidAPS dažnai išjungiamas. Apie tai galite spręsti, jei Bolus ir Skaičiuoklės mygtukai pagrindiniame ekrane nėra rodomi atidarius AAPS, nes sistema inicijuojama. Tai gali iššaukti "pompa nepasiekiama aliarmus" startuojant. Combo ekrane **Paskutinis Susijungimas** lauke jūs galite patikrinti, kada AndroidAPS paskutinį kartą komunikavo su pompa. 

![Pompa nepasiekiama](../images/combo/combo-tips-pump-unreachable.png) ![Nėra ryšio su pompa](../images/combo/combo-tips-no-connection-to-pump.png)

* Ši klaida gali greičiau sekinti pompos bateriją, nes bazės profilis yra nuskaitomas iš pompos, kai programėlė startuojama iš naujo.
* Tai taip pat padidina klaidos galimybę, kuri lemia, kad pompa atmeta visus ateinančius prisijungimus kol nepaspaudžiamas mygtukas ant pompos. 

## Neveikia laikinos bazės dydžio atšaukimas

* Kartais AndroidAPS nepavyksta automatiškai atšaukti **LB ATŠAUKTA** įspėjimo. Tada reikia paspausti arba **ATNAUJINTI** AndroidAPS **Combo lange**, arba patvirtinti aliarmą ant pompos.

## Pompos baterijos naudojimas

### Baterijos keitimas

* Po **senka baterija** aliarmo, baterija turėtų būti pakeista kaip įmanoma greičiau, kad energijos užtektų užtikrinti patikimam Bluetooth ryšiui su telefonu, net jei telefonas yra toliau nuo pompos.
* Net ir po aliarmo **senka baterija** baterija gali būti naudojama dar nemažai laiko. Tačiau rekomenduojama visada su savim turėti naują bateriją po nuskambėjusio "senka baterija" aliarmo.
* Norėdami tai padaryti paspauskite ir palaikykite **Uždaras Ciklas** pagrindiniame ekrane ir pasirinkite **Sustabdyti ciklą 1 val.**. 
* Palaukite, kol telefonas susisieks su pompa ir bluetooth ženkliukas išnyks pompos ekrane.

![Bluetooth įjungtas](../images/combo/combo-tips-compo.png)

* Atrakinkite pompos klaviatūrą, sustabdykite pompą, patvirtinkite galimai atšauktą laikiną bazę ir pakeiskite bateriją.
* Tada iš naujo paleiskite pompą, pasirinkite **Atnaujinti** ilgai paspaudus ir palaikius ant **Sustabdyta** pagrindiniame ekrane.
* AndroidAPS iš naujo nustatys reikalingą laikiną bazę, kai gaus naują glikemijos vertę. 

### Baterijų tipai ir galimos trumpo baterijų tarnavimo laiko priežastys

* Kadangi intensyvus Bluetooth ryšys naudoja daug energijos, naudokite tik **aukštos kokybės baterijas** tokias kaip Energizer Ultimate Lithium, "power one'" , siūlomas Accu-Chek, arba, jei renkatės pakraunamas baterijas, naudokite Eneloop baterijas. 

![Energizer](../images/combo/combo-tips-energizer.jpg) ![OnePower](../images/combo/combo-tips-power-one.png)

Tipinis baterijų tarnavimo laikas skirtingoms baterijoms yra toks:

* **Energizer Ultimate Lithium**: nuo 4 iki 7 savaičių
* **Power One Alkaline** (Varta) iš paslaugų paketo: nuo 2 iki 4 savaičių
* **Eneloop rechargable** baterijos (BK-3MCCE): nuo 1 iki 3 savaičių

Jei jūsų baterijos tarnauja daug trumpiau nei nurodyta aukščiau, patikrinkite šias galimas priežastis:

* Paskutinė (2018 kovas) [ruffy programėlės](https://github.com/MilosKozak/ruffy) versija reikšmingai pagerino pompos baterijos tarnavimo laiką. Patikrinkite, ar naudojate šią versiją, jei turite problemų su trumpu baterijų veikimu.
* Yra keli variantai užsukamų Combo pompos baterijų dangtelių, kurie dalinai užtrumpina baterijas ir jas greičiau iškrauna. Dangteliai be šių problemų gali būti atpažįstami iš aukso spalvos metalinių kontaktų.
* Jei pompos laikrodis "neišgyvena" greito baterijos pakeitimo, greičiausiai sugedo kondensatorius, kuris palaiko laikrodžio veikimą trumpai sutrikus energijos tiekimui. Šiuo atveju padės tik pompos pakeitimas Roche, kas nebus problema garantinio aptarnavimo laikotarpiu. 
* Išmanaus telefono įranga ir programos (Android valdomos sistemos ir bluetooth susijungimas) taip pat įtakoja pompos baterijos tarnavimo laiką, net jei konkretūs faktoriai dar ne iki galo žinomi. Jei turite galimybę, išbandykite kitą telefoną ir palyginkite baterijos tarnavimo laiką.

## Laiko persukimas

* Kol kas combo draiveriai nepalaiko automatinio pompos laiko nustatymo.
* Tą naktį, kai persukamas laikas, laikas telefone yra atnaujinamas, bet laikas pompoje lieka nepakeistas. Tai lemia aliarmą dėl skirtingo laiko tarp sistemų 3 val. ryto.
* Jei jūs nenorite būti pažadinti naktį, **išjunkite automatinį laiko persukimą telefone** vakare prieš laiko keitimą ir nustatykite laiką rankiniu būdu kitą rytą.

## Ištęstas bolusas, daugiabangis bolusas

OpenAPS algortimas nepalaiko lygiagretaus ištęsto ar daugiabangio boluso. Bet panašus rezultatas gali būti pasiektas šiais alternatyviais veiksmais:

* Įveskite angliavandenius, bet nebolusuokite jiems. Uždaro ciklo algoritmas reaguos daug agresyviau. Jei reikalinga, naudokite **eAngliavandeniai** (ištęstus angliavandenius).

* Jei jūs bandysite tiesiog naudoti ištęstą ar daugiabangį bolusą tiesiai iš pompos, AndroidAPS nubaus jus išjungdama uždarą ciklą kitoms šešioms valandoms, kad būtų išvengta perteklinio insulino apskaičiavimo ir suleidimo.

![Uždaras ciklas išjungtas po daugiabangio boluso](../images/combo/combo-tips-multiwave-bolus.png)

## Aliarmai leidžiant bolusą

* Jei AndroidAPS nustato, kad identiškas bolusas buvo sėkmingai suleistas tą pačią minutę, nebus leidžiama suleisti identiško skaičiaus insulino vienetų. Jei jūs tikrai norite du kartus suleisti tą pačią insulino dozę viena po kitos, tiesiog palaukite dvi minutes ir tada vėl suleiskite bolusą. Jei pirmas bolusas buvo nutrauktas ar nesuleistas dėl kitų priežasčių, nuo AAPS 2.0 versijos jūs galite nedelsiant patvirtinti bolusą iš naujo.
* Fone veikia saugumo mechanizmas, kuris nuskaito pompos bolusų istoriją prieš patvirtinant naują bolusą, kad būtų teisingai apskaičiuotas aktyvus insulinas organizme (AIO), net jei bolusas buvo suleistas tiesiai iš pompos. Turi būti užkirstas kelias nepastebimiems veiksmams.

![Dvigubas bolusas](../images/combo/combo-tips-doppelbolus.png)

* Šis mechanizmas taip pat atsakingas už antrą klaidos priežastį: Jei naudojant boluso skaičiuoklę kitas bolusas yra leidžiamas su pompa ir dėl to pasikeičia bolusų istorija, bolsuo skaičiuoklės pagrindas yra neteisingas ir bolusas yra atšaukiamas. 

![Atšauktas bolusas](../images/combo/combo-tips-history-changed.png)