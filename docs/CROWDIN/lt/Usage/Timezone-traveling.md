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
* Tikriausiai tai nėra aktualu, jei naudojate [modifikuotą Libre Link programą](../Hardware/Libre2#time-zone-travelling). Ten reikia nustatyti automatinį laiko juostos keitimą, kad būtų galima paleisti naują Libre 2 jutiklį.

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

## Insight

Tvarkyklė automatiškai koreguoja pompos laiką pagal telefoną. 

Insight pompa taip pat užfiksuoja atmintyje, kuriuo metu laikas pasikeitė ir nuo kurio (seno) laiko iki kurio (naujo) laiko. Taigi teisingas laikas AAPS yra nustatomas be laiko keitimo. 

Tai gali įtakoti neatitikimus TDDs (paros suminė dozė). Bet tai neturėtų būti problema. 

Taigi Insight pompos naudotojai neturėtų nerimauti dėl laiko juostų ir laiko keitimo. Yra tik viena išimtis: Insight pompa turi mažą vidinę bateriją, kurios energija skiriama laikui ir pan. kol Jūs keičiate "tikrąją" bateriją. Jeigu baterijos keitimas užtrunka, vidinė baterija išsikrauna, laikrodis nustatomas iš naujo, nes Jūsų bus paprašyta suvesti laiką ir datą vos tik įdėjus naują bateriją. Šiuo atveju visi įrašai iki baterijos keitimo yra praleidžiami AAPS skaičiavimuose, kol nėra nustatytas teisingas laikas.

# Vasaros laiko nustatymas (VL)

Priklausomai nuo pompos ir sensoriaus (NGJ) nustatymų, laiko pasikeitimas gali sukelti problemų. Pvz. su Combo, pompos istorija nuskaitoma dar kartą ir įrašai dubliuojasi. Taigi prašome pakeitimus daryti kol esate atsibudęs ir ne nakties metu.

Jeigu leidžiate bolusą naudodamiesi skaičiuokle, nenaudokite AAO ir AIO kol būsite įsitikinę, kad jie yra teisingi - geriausia būtų nenaudoti jų bent keletą valandų po VL persukimo.

## Accu-Chek Combo

AndroidAPS duos signalą, jeigu pompos ir telefono laikas skirsis per daug. VL persukimo atveju, tai vyks nakties metu. To prevent this and enjoy your sleep instead follow these steps so that you can force the time change at a time convient to yourself:

### Actions to take before the clock change

1. Switch OFF any setting that automatically sets the timezone, so you can force the time change when you want to. How you can do this will depend on your smartphone and Android version.
   
   * Some have two settings, one for automatic setting of the time (which ideally should remain on) and one for automatic setting of the timezone (which you must turn OFF).
   * Unfortunately some Android versions have a single switch to enable automatic setting of both the time and the timezone. You’ll have to turn this off for now.

2. Find a time zone that has the same time as your current location but doesn't use DST.
   
   * A list of these countries is available [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * For Central European Time (CET) this could be "Brazzaville" (Kongo). Change your phone's timezone to Kongo.

3. In AndroidAPS refresh your pump.

4. Check the Treatments tab... If you see duplicate any treatments:
   
   * DON'T press "delete treatments in the future"
   * Hit "remove" on all future treatments and duplicate ones. This should invalidate the treatments rather than removing them so they will not be considered for IOB anymore.

5. If the situation on how much IOB/COB is unclear - for safety please disable the loop for at least one DIA and Max-Carb-Time - whatever is bigger.*

### Actions to take after the clock change

A good time to make this switch would be with low IOB. E.g. an hour before a meal such as breakfast, (any recent boluses in the pump history will have been small SMB corrections. Your COB and IOB should both be close to zero.)

1. Change the Android timezone back to your current location and re-enable automatic timezone.
2. AndroidAPS will soon start alerting you that the Combo’s clock doesn’t match. So update the pump’s clock manually via the pump’s screen and buttons.
3. On the AndroidAPS “Combo” screen, press Refresh.
4. Then go to the Treatments screen, and look for any events in the future. There shouldn’t be many.
   
   * DON'T press "delete treatments in the future"
   * Hit "remove" on all future treatments and duplicate ones. This should invalidate the treatments rather than removing them so they will not be considered for IOB anymore.

5. If the situation on how much IOB/COB is unclear - for safety please disable the loop for at least one DIA and Max-Carb-Time - whatever is bigger.*

6. Continue as normal.

## Accu-Chek Insight

* Change to DST is done automatically. No action required.

## Other pumps

* This feature is available since AndroidAPS version 2.2.
* To prevent difficulties the Loop will be deactivated for 3 hours AFTER the DST switch. This is done for safety reasons (IOB too high due to duplicated bolus prior to DST change).
* You will receive a notification on the main screen prior to DST change that loop will be disabled temporarily. This message will appear without beep, vibration or anything.