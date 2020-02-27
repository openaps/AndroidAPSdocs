# Keliavimas per skirtingas laiko juostas

## DanaR, Korėjiečių DanaR

Nėra jokių problemų dėl laiko zonos keitimo telefone, nes pompa nenaudoja telefono istorijos

## DanaRv2, DanaRS

Naudojant šias pompas būkite atidūs, nes AndroidAPS naudoja pompos istoriją, kurios įrašai pompoje neturi laiko juostų žymės. **Tai reiškia, kad jeigu Jūs tiesiog pakeisite laiko juostą telefone, duomenys bus nuskaitomi su skirtinga laiko juosta ir dubliuosis.**

Norint išvengti šito, yra du pasirinkimai:

### Pasirinkimas Nr. 1: "Namų" laiko nustatymas ir laiko poslinkio nustatymas profilyje

* Išjunkite "Automatinį laiko ir datos" nustatymą telefone (rankinis laiko zonos pasirinkimas).
* Telefonas turi veikti Jūsų gyvenamosios vietos laiku visos kelionės metu. 
* Pakeiskite laiko poslinkį profilyje, atsižvelgdami į gyvenamosios vietos ir esamos vietos laiko skirtumą. 
   
   * AndroidAPS programoje spauskite (ilgas paspaudimas) ant profilio (viršutinėje eilutėje vidurinis mygtukas)
   * Pasirinkite "Profilio perjungimas"
   * Nustatykite laiko poslinkį pagal Jūsų esamą vietą.
   
   ![Profilio perjungimas su laiko perjungimu](../images/ProfileSwitchTimeShift2.png)
   
   * pvz.: Viena -> Niujorkas: profilio perjungimas +6 valandos
   * pvz.: Viena -> Sidnėjus: profilio perjungimas -8 valandos

### Pasirinkimas Nr. 2: Pompos istorijos ištrynimas

* Išjunkite "Automatinį laiko ir datos" nustatymą telefone (rankinis laiko zonos pasirinkimas)

Tuomet išlipdami iš lėktuvo:

* išjunkite pompą
* pakeiskite laiko juostą telefone
* išjunkite telefoną, įjunkite pompą
* ištrinkite pompos istoriją
* pakeiskite pompos laiką
* įjunkite telefoną
* leiskite telefonui prisijungti prie pompos ir suderinti laiką

## Combo

## Insight

Tvarkyklė automatiškai koreguoja pompos laiką pagal telefoną. 

Insight pompa taip pat užfiksuoja atmintyje, kuriuo metu laikas pasikeitė ir nuo kurio (seno) laiko iki kurio (naujo) laiko. Taigi teisingas laikas AAPS yra nustatomas be laiko keitimo. 

Tai gali įtakoti neatitikimus TDDs (paros suminė dozė). Bet tai neturėtų būti problema. 

Taigi Insight pompos naudotojai neturėtų nerimauti dėl laiko juostų ir laiko keitimo. Yra tik viena išimtis: Insight pompa turi mažą vidinę bateriją, kurios energija skiriama laikui ir pan. kol Jūs keičiate "tikrąją" bateriją. Jeigu baterijos keitimas užtrunka, vidinė baterija išsikrauna, laikrodis nustatomas iš naujo, nes Jūsų bus paprašyta suvesti laiką ir datą vos tik įdėjus naują bateriją. Šiuo atveju visi įrašai iki baterijos keitimo yra praleidžiami AAPS skaičiavimuose, kol nėra nustatytas teisingas laikas.

# Vasaros laiko nustatymas (VL)

Priklausomai nuo pompos ir sensoriaus (NGJ) nustatymų, laiko pasikeitimas gali sukelti problemų. Pvz. su Combo, pompos istorija nuskaitoma dar kartą ir įrašai dubliuojasi. Taigi prašome pakeitimus daryti kol esate atsibudęs ir ne nakties metu.

If you bolus with the calculator please don't use COB and IOB unless you made sure they are absolutely correct - better don't use them for a couple of hours after DST switch.

## Accu-Chek Combo

AndroidAPS will issue an alarm if time between pump and phone differs to much. In case of DST time adjustment this would be in the middle of the night. To prevent this and enjoy your sleep instead follow these steps:

1) Switch off automatic time zone in your phone. 2) Find a time zone that has the target time but doesn't use DST. For Central European Time (CET) this could be "Brazzaville" (Kongo). Change your phone's timezone to Kongo. 3) In AndroidAPS refresh you pump. 4) Check the Treatments tab... If you see duplicate treatments:

* DON'T press "delete future treatments"
* Hit "remove" on all future treatments and duplicate ones. This should invalidate the treatments rather than removing them so they will not be considered for IOB anymore. 5) If the state is unclear - please disable the loop for at least one DIA and Max-Carb-Time - whatever is bigger.

A good time to make this switch would be with low IOB. E.g. an hour before a meal.

## Accu-Chek Insight

* Change to DST is done automatically. No action required.

## Other pumps - new as of AAPS version 2.2

**You have to update AAPS to use this feature!**

* To prevent difficulties the Loop will be deactivated for 3 hours AFTER the DST switch. This is done for safety reasons (IOB too high due to duplicated bolus prior to DST change).
* You will receive a notification on the main screen 24 hours prior to DST change that loop will be disabled temporarily. This message will appear without beep, vibration or anything.