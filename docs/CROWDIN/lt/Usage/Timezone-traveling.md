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
* Probably not an option if using [patched LibreLink app](../Hardware/Libre2#time-zone-travelling) as automatic time zone must be set to start a new Libre 2 sensor.

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

AndroidAPS duos signalą, jeigu pompos ir telefono laikas skirsis per daug. VL persukimo atveju, tai vyks nakties metu. Kad išvengti to ir mėgautis miegu, atlikite šiuos veiksmus:

1) Išjunkite automatinį laiko nustatymą telefone. 2) Raskite planuojamo laiko juostą, kuri nenaudoja VL persukimo. Pagal Vidurio Europos laiką (GMT) tai galėtų būti Zimbabvė. Telefone pakeiskite laiko juostą į Zimbabvę. 3) AndroidAPS atnaujinkite pompos duomenis. 4) Patikrinkite "Terapijos" skirtuką ir... Jeigu matote susidubliavusios įrašus:

* Nespauskite "Ištrinti" būsimus terapijos duomenis
* Spauskite "Anuliuoti" visus būsimus ir dubliuojamus terapijos įrašus. Šie terapijos duomenys turėtų būti anuliuojami, ne ištrinami, kad toliau neįtakotų AIO duomenų. 5) Jeigu vis tik įrašų būklė yra neaiški, sustabdykite ciklą bent visai insulino veikimo trukmei arba angliavandenių įsisavinimo laikui - pagal tai, kuris ilgesnis.

Geriausias laikas šiam perjungimui yra tada, kai yra žemas AIO. Pvz., valanda prieš valgį.

## Accu-Chek Insight

* VL persukimas vyksta automatiškai. Nereikia imtis jokių veiksmų. 

## Other pumps - new as of AAPS version 2.2

**Turite atnaujinti AAPS, kad galėtumėte naudotis šiomis funkcijomis!**

* Siekiant išvengti sunkumų, ciklas bus išjungtas 3 valandas po VL persukimo. Tai daroma dėl Jūsų saugumo - AIO yra per didelis dėl susidubliavusių duomenų, lyginant su duomenimis prieš VL persukimą.
* 24 valandos prieš VL persukimą, Jūs gausite pranešimą ekrane, kad ciklas bus laikinai sustabdytas. Šis pranešimas bus rodomas be garso signalo, vibracijos ar pan.