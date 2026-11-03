(Sensitivity-detection-and-COB-sensitivity-detection)=

# Jautrumo nustatymas

## Sensitivity algorithm

**AAPS** šiuo metu siūlo 3 jautrumo nustatymo modelius:

* Jautrumo nustatymo algoritmas AAPS
* Jautrumas pagal svertinį vidurkį
* Jautrumo nustatymo algoritmas Oref1

### Jautrumo nustatymo algoritmas AAPS

Jautrumas apskaičiuojamas taip pat kaip Oref1, tačiau galite nurodyti, kokį laikotarpį atgal vertinti. Mažiausias angliavandenių įsisavinimas apskaičiuojamas pagal nustatymuose nurodytą ilgiausią angliavandenių įsisavinimo trukmę.

### Jautrumas pagal svertinį vidurkį

Jautrumas apskaičiuojamas kaip svertinis nuokrypių vidurkis. Galite nurodyti, kokį laikotarpį atgal vertinti. Naujesni nuokrypiai turi didesnį svorį. Mažiausias angliavandenių įsisavinimas apskaičiuojamas pagal nustatymuose nurodytą ilgiausią angliavandenių įsisavinimo trukmę. Šis algoritmas greičiausiai seka jautrumo pokyčius.

(SensitivityDetectionAndCob-sensitivity-oref1)=

### Jautrumo nustatymo algoritmas Oref1

Jautrumas apskaičiuojamas pagal paskutinių 8 valandų duomenis arba nuo paskutinio infuzijos vietos keitimo, jei jis buvo prieš mažiau nei 8 valandas. Angliavandeniai (jei neįsisavinti) atmetami praėjus nustatymuose nurodytam laikui. Tik Oref1 algoritmas palaiko nedeklaruoto maisto (NDM) aptikimą. Tai reiškia, kad laikotarpiai, kai aptiktas NDM, neįtraukiami į jautrumo skaičiavimą. Todėl, jei naudojate SMB su NDM, turite pasirinkti Oref1 algoritmą, kad viskas veiktų tinkamai. Daugiau informacijos apie NDM rasite skyriuje [Super Micro Bolus (SMB)](#Open-APS-features-super-micro-bolus-smb).

Rekomenduojama rinktis Oref1: tik jis gali aptikti NDM ir veikti su [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb), naujesniu algoritmu.

## Vienu metu gaunami angliavandeniai

Kai keli valgiai persidengia, yra didelis skirtumas tarp algoritmų Sensitivity AAPS ir WeightedAverage, iš vienos pusės, ir Oref1, iš kitos pusės.

* Oref1 tikisi, kad vienu metu įsisavinamas tik vienas valgis: antrasis valgis pradedamas įsisavinti tik tada, kai pirmasis visiškai įsisavintas.
* Sensitivity AAPS ir WeightedAverage pradeda įsisavinimą iš karto, kai įvedate angliavandenius. Jei organizme yra daugiau nei vienas valgis, mažiausias angliavandenių įsisavinimas prisitaiko pagal valgio dydį ir ilgiausią įsisavinimo trukmę. Todėl mažiausias įsisavinimas bus didesnis nei naudojant Oref1.