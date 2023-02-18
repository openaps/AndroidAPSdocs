# AccuChek Combo pagrindinio naudojimo patarimai

## Kaip užtikrinti sklandų veikimą

* Always **carry the smartphone with you**, leave it next to your bed at night. As your pump may lay behind or under you body while you sleep, a higher position (on a shelf or board) works best.
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
* Testai su skirtingais telefonais parodė, kad kai kurie telefonai dažniau nei kiti iššaukia "pompa nepasiekiama" klaidą. [AAPS Phones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) lists successfully tested smartphones. 

### Pagrindinės dažnų komunikacijos klaidų priežastys ir pasekmės

* Telefonuose su **maža atmintimi** (arba **agresyvaus energijos taupymo** nustatymais), AndroidAPS dažnai išjungiamas. Apie tai galite spręsti, jei Bolus ir Skaičiuoklės mygtukai pagrindiniame ekrane nėra rodomi atidarius AAPS, nes sistema inicijuojama. Tai gali iššaukti "pompa nepasiekiama aliarmus" startuojant. Combo ekrane **Paskutinis Susijungimas** lauke jūs galite patikrinti, kada AndroidAPS paskutinį kartą komunikavo su pompa. 

![Pompa nepasiekiama](../images/combo/combo-tips-pump-unreachable.png) ![Nėra ryšio su pompa](../images/combo/combo-tips-no-connection-to-pump.png)

* Ši klaida gali greičiau sekinti pompos bateriją, nes bazės profilis yra nuskaitomas iš pompos, kai programėlė startuojama iš naujo.
* Tai taip pat padidina klaidos galimybę, kuri lemia, kad pompa atmeta visus ateinančius prisijungimus kol nepaspaudžiamas mygtukas ant pompos. 

## Neveikia laikinos bazės dydžio atšaukimas

* Kartais AndroidAPS nepavyksta automatiškai atšaukti **LB ATŠAUKTA** įspėjimo. Then you have to either press **UPDATE** in the AndroidAPS **Combo tab** or the alarm on the pump will need to be confirmed.

## Pompos baterijos naudojimas

### Baterijos keitimas

* Po **senka baterija** aliarmo, baterija turėtų būti pakeista kaip įmanoma greičiau, kad energijos užtektų užtikrinti patikimam Bluetooth ryšiui su telefonu, net jei telefonas yra toliau nuo pompos.
* Net ir po aliarmo **senka baterija** baterija gali būti naudojama dar nemažai laiko. Tačiau rekomenduojama visada su savim turėti naują bateriją po nuskambėjusio "senka baterija" aliarmo.
* Before changing the battery, press on the **Loop** symbol on the main screen and select **Suspend loop for 1h**. 
* Wait for the pump to communicate with the pump and the bluetooth logo on the pump has faded.

![Bluetooth įjungtas](../images/combo/combo-tips-compo.png)

* Release the key lock on the pump, put the pump into stop mode, confirm a possibly canceled temporary basal rate, and change the battery quickly.
* If the clock on the pump did not survive the battery chenge, re-set the date and time on the pump to exactly the date/time on your phone running AAPS.
* Then put the pump back in run mode select **Resume** when pressing on the **Suspended Loop** icon on the main screen.
* AndroidAPS will re-set a necessary temporary basal rate with the arrival of the next blood sugar value. 

(Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)=

### Baterijų tipai ir galimos trumpo baterijų tarnavimo laiko priežastys

* As intensive Bluetooth communication consumes a lot of energy, only use **high-quality batteries** like Energizer Ultimate Lithium, the "power one"s from the "large" Accu-Chek service pack, or if you are going for a rechargeable battery, use Eneloop batteries. 

![Energizer](../images/combo/combo-tips-energizer.jpg) ![OnePower](../images/combo/combo-tips-power-one.png)

Ranges for typical life time of the different battery types are as follows:

* **Energizer Ultimate Lithium**: nuo 4 iki 7 savaičių
* **Power One Alkaline** (Varta) iš paslaugų paketo: nuo 2 iki 4 savaičių
* **Eneloop rechargeable** batteries (BK-3MCCE): 1 to 3 weeks

If your battery life is signifcantly shorter than the ranges given above, please check the following possible causes:

* Versions of the [ruffy App](https://github.com/MilosKozak/ruffy) after vMarch 2018 significantly improved pump battery lifetime. Make sure you are on the newest version if you have issues with a short battery lifetime.
* Yra keli variantai užsukamų Combo pompos baterijų dangtelių, kurie dalinai užtrumpina baterijas ir jas greičiau iškrauna. Dangteliai be šių problemų gali būti atpažįstami iš aukso spalvos metalinių kontaktų.
* Jei pompos laikrodis "neišgyvena" greito baterijos pakeitimo, greičiausiai sugedo kondensatorius, kuris palaiko laikrodžio veikimą trumpai sutrikus energijos tiekimui. In this case, a replacement of the pump by Roche might help, which is not a problem during the warranty period. 
* Išmanaus telefono įranga ir programos (Android valdomos sistemos ir bluetooth susijungimas) taip pat įtakoja pompos baterijos tarnavimo laiką, net jei konkretūs faktoriai dar ne iki galo žinomi. Jei turite galimybę, išbandykite kitą telefoną ir palyginkite baterijos tarnavimo laiką.

## Laiko persukimas

* Kol kas combo draiveriai nepalaiko automatinio pompos laiko nustatymo.
* Tą naktį, kai persukamas laikas, laikas telefone yra atnaujinamas, bet laikas pompoje lieka nepakeistas. Tai lemia aliarmą dėl skirtingo laiko tarp sistemų 3 val. ryto.
* If you do not want to be awakened at night, **deactivate the automatic daylight saving time changeover on the mobile phone** in the evening before the time changeover and adjust the times manually the next morning. A good way to deal with daylight saving time changes is to switch to a different time zone located on the same longitude you are located at but closer to the equator, where usually no daylight saving time is observed. Example: For Central Europe on Summer Time (CEST/GMT+2), you could switch to the time zone of Zimbabwe on your phone the night before the switch to winter time and then switch back to Central European Time CET/GMT+1 the next morning while changing the clock on your pump at the same time. The other way aroud, switch to the time zone of Nigeria while on Winter Time CET/GMT+1 and go back to Central European Summer Time (CEST/GMT+2) the morning after the switch to summer time and change the pump time accordingly. Look at https://www.timeanddate.com/time/map/ to find a suitable country.

## Ištęstas bolusas, daugiabangis bolusas

The OpenAPS algorithm does not support a parallel extended bolus or multiwave bolus. But a similar treatment can be achieved by the following alternatives:

* Use **e-Carbs** when entering carbs or using the Calculator by entering the carbs of the full meal and the duration you expect the carbs to arrive as glucose in you blood. The system will then calculate small carbs equally distributed over the whole duration which will cause th algorithm to provide equivalent insulin dosing while still permanently checking the overall rise/decrease of the blood glucose level. For a multiwave bolus approach, you can also combine a smaller immeadiate bolus with e-carbs. 
* Before eating, on the **Actions tab** in AndroidAPS set as a temporary **Eating Soon** goal with target glucose 80 for several hours. The duration should be based on the interval you would chosse for an extended bolus. This will keep your target lower than usual and therefore increase the amout of insulin delivered.
* Then use the **CALCULATOR** to enter the full carbs of the meal, but do not directly apply the values suggested by the bolus calculator. If a multiwave-like bolus is to be delivered, correct the insulin dosage down. Depending on the meal, the algorithm now has to deliver additional SMBs or higher temporary basal rates to counteract the increase in blood sugar. Here, the safety limitation of the basal rate (Max IE / h, Maximum basal IOB) should be very carefully experimented with and, if necessary, temporarily changed.

* If you are tempted to just use the extended or multiwave bolus directly on the pump, AndroidAPS will penalize you with disabling the closed loop for the next six hours to ensure that no excess insulin dosage is calculated.

![Disabled loop after multiwave bolus](../images/combo/combo-tips-multiwave-bolus.png)

## Aliarmai leidžiant bolusą

* If AndroidAPS detects that an identical bolus has been successfully delivered at the same minute, bolus delivery will be prevented with identical numer of insulin units. If your really want to bolus the same inuslin twice in short succession, just wait two more minutes and then deliver the bolus again. If the fist bolus has been interruped or was not delivered for other reasons, you can immediately re-submit the bolus since AAPS 2.0.
* The alarm is a safety mechanism that reads the pump's bolus history before submitting a new bolus to correctly calculate insulin on board (IOB), even when a bolus is delivered directly from the pump. Turi būti užkirstas kelias nepastebimiems veiksmams.

![Double bolus](../images/combo/combo-tips-doppelbolus.png)

* Šis mechanizmas taip pat atsakingas už antrą klaidos priežastį: Jei naudojant boluso skaičiuoklę kitas bolusas yra leidžiamas su pompa ir dėl to pasikeičia bolusų istorija, bolsuo skaičiuoklės pagrindas yra neteisingas ir bolusas yra atšaukiamas. 

![Canceled bolus](../images/combo/combo-tips-history-changed.png)