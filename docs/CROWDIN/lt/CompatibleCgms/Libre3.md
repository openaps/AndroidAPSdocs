# **Freestyle Libre 3** ir 3+

Kad Freestyle Libre 3 (FSL3) KG reikšmės patektų į AAPS, reikia specialios sąrankos. Freestyle Libre 3 (FSL3) reikšmes į AAPS galima perduoti dviem būdais.

![FL3](../images/d912c1d3-06d2-4b58-ad7c-025ca1980fae.jpeg)

Toliau aprašyti būdai naudoja atskirą programėlę Juggluco. Šiam būdui naudojama Juggluco: ji iš jutiklio kas 1 minutę gauna neapdorotus duomenis ir perduoda juos į xDrip arba AAPS. Naujus jutiklius galima paleisti Libre 3 programėle arba tiesiai Juggluco programėle. Toliau aprašyta, kaip paleisti jutiklį Juggluco programėle. Jei jutiklis buvo paleistas prisijungus prie Libreview paskyros, kaip imtuvą galima pakaitomis naudoti Juggluco arba Libre 3 programėlę.

Jei jutiklis paleistas Libre 3 programėle, Juggluco taip pat gali perduoti duomenis į LibreView, kad juos matytų gydytojai.

xDrip programėlėje jutiklį galima kalibruoti nuo -40 mg/dL iki +20 mg/dL (nuo -2,2 mmol/l iki +1,1 mmol/l), kad būtų kompensuoti skirtumai tarp gliukomačio ir jutiklio rodmenų.

## 1 būdas: tiesiogiai naudoti 1 minutės rodmenis
**AAPS** pritaikyta 5 minučių rodmenims. Todėl 1 minutės reikšmių apdorojimas kartais turi apribojimų.

Žr. [čia](#juggluco-to-aaps).


## 2 būdas: 1 minutės rodmenis xDrip programėle paversti 5 minučių reikšmėmis
Šiam būdui naudojama Juggluco: ji iš jutiklio kas 1 minutę gauna neapdorotus duomenis ir perduoda juos į xDrip. xDrip juos glodina į 5 minučių intervalo duomenis ir perduoda į AAPS.

### 1 žingsnis: Juggluco sąranka
Atsisiųskite ir įdiekite Juggluco programėlę [iš čia](https://www.juggluco.nl/Juggluco/download.html). Vadovaukitės instrukcijomis [čia](https://www.juggluco.nl/Juggluco/libre3/)

Įsitikinkite, kad gliukozės reikšmės siunčiamos į xDrip: Juggluco nustatymuose galite nustatyti, kad Juggluco siųstų gliukozės reikšmes kitoms programėlėms. Juggluco gali siųsti trijų tipų tokias transliacijas: **Patched Libre broadcast** iš pradžių naudojo pataisyta Librelink programėlė, ir ją galima naudoti gliukozės reikšmėms siųsti į xDrip.

### 2 žingsnis: xDrip sąranka

KG reikšmes gauna telefone įdiegta xDrip programėlė.

- Jei dar neįdiegėte, atsisiųskite [xDrip](https://github.com/NightscoutFoundation/xDrip) ir vykdykite instrukcijas [xDrip nustatymų puslapyje](../CompatibleCgms/xDrip.md).
- xDrip programėlėje kaip duomenų šaltinį pasirinkite „Libre2 (patched app)“.
- Jei reikia, skiltyje Less Common Settings → Extra Logging Settings → Extra tags for logging įveskite "BgReading:d,xdrip libre_receiver:v". Taip bus registruojami papildomi klaidų pranešimai, padedantys šalinti triktis.

![xDrip LibreLink žurnalo įrašai](../images/Libre2_Tags.png)

- Techniškai dabartinė cukraus kiekio kraujyje reikšmė į xDrip perduodama kas minutę. Svertinio vidurkio filtras pagal numatytuosius nustatymus apskaičiuoja glodintą reikšmę per paskutines 25 minutes. Šį laikotarpį galite pakeisti meniu NFC Scan features.

  → Hamburger menu → Settings → NFC Scan features → Smooth libre 3 data when using xxx method

  ![xDrip papildomi Libre 2 nustatymai ir neapdorotos reikšmės](../images/xDrip_Libre3_Smooth.png)



### 3 žingsnis: jutiklio paleidimas xDrip programėlėje

xDrip programėlėje paleiskite jutiklį: „Start Sensor“ ir „not today“. Telefono laikyti prie jutiklio nereikia. Iš tikrųjų „Start Sensor“ fiziškai nepaleidžia jokio Libre 3 jutiklio ir niekaip su juo nesąveikauja. Tai reikalinga tik tam, kad xDrip žinotų, jog naujas jutiklis siunčia gliukozės kraujyje reikšmes. Jei galite, pradinei kalibracijai įveskite dvi kraujo matavimo reikšmes. Dabar KG reikšmės turėtų būti rodomos xDrip programėlėje kas 5 minutes. Praleistos reikšmės (pvz., jei buvote per toli nuo telefono) vėliau nebus užpildytos (backfill).

Jei duomenų vis dar nėra, palaukite bent 15–20 minučių.

Pakeitus jutiklį, xDrip automatiškai aptiks naują jutiklį ir ištrins visus kalibracijos duomenis. Po aktyvavimo galite pasitikrinti gliukozę kraujyje ir atlikti naują pradinę kalibraciją.

### 4 žingsnis: AAPS konfigūravimas

- Žr. [čia](#juggluco-to-xdrip) ir grįžkite.

- Jei **AAPS** negauna KG reikšmių, kai telefonas veikia lėktuvo režimu, naudokite „Identify receiver“
- Išjunkite glodinimą (xDrip jau tai atlieka)

## Vėlesni jutiklio keitimai

1. Atverkite Juggluco ir užsirašykite esamo jutiklio serijos numerį

![Libre serijos numeris](../images/libre3/step_13.jpg)

2. Dabar tiesiog nuskenuokite naująjį jutiklį telefono NFC skaitytuvu. Jei procesas sėkmingai pradėtas, Juggluco parodys pranešimą.
3. Kai būsite pasiruošę išjungti senąjį jutiklį, atverkite Juggluco meniu: spustelėkite bet kurioje tuščioje vietoje viršutiniame kairiajame ekrano kampe.
4. Pasirinkite pasibaigusį jutiklį ir spauskite „Terminate“

![Jutiklio išjungimas](../images/libre3/step_14.jpg)

Pastaba: kai aktyvūs du jutikliai, Juggluco į xDrip siųs naujausią bet kurio jutiklio reikšmę. Jei jutikliai nesukalibruoti taip, kad rodytų panašias KG reikšmes, į xDrip gali patekti šokinėjančios KG reikšmės. Jei išjungsite ne tą jutiklį, galite jį vėl aktyvuoti tiesiog nuskenavę.

## Jutiklio perjungimas tarp Libre 3 ir Juggluco programėlių

Jei jutiklis buvo paleistas prisijungus prie Libreview paskyros, kaip imtuvą galima pakaitomis naudoti Juggluco arba Libre 3 programėlę. Tam reikia atlikti šiuos veiksmus:

1. Įdiekite Libre 3 programėlę iš Google Play parduotuvės
2. Nustatykite Libre 3 programėlę su ta Libreview paskyra, kuria buvo aktyvuotas jutiklis.
3. Android nustatymuose priverstinai sustabdykite Juggluco programėlę.
4. Libre 3 meniu spauskite „Start Sensor“, pasirinkite „Yes“, „Next“ ir nuskenuokite jutiklį.
5. Po kelių minučių KG reikšmės turėtų matytis Libre 3 programėlėje.

Norėdami pereiti iš Libre 3 programėlės į Juggluco, Android nustatymuose priverstinai sustabdykite Libre 3 programėlę ir atlikite 1 ir 2 žingsnius.

(libre3-experiences-and-troubleshooting)=
## Patirtis ir trikčių šalinimas

### Libre3 -> Juggluco ryšio trikčių šalinimas

- Įsitikinkite, kad naudojate naujausią Juggluco programėlės versiją
- Patikrinkite savo nustatymus pagal šį vadovą
- Kartais gali tekti priverstinai sustabdyti Libre 3 programėlę ir Juggluco, o tada jas paleisti iš naujo.
- Išjunkite Bluetooth ir vėl jį įjunkite
- Šiek tiek palaukite arba pabandykite uždaryti Juggluco
- Senesnės Juggluco versijos (žemesnės nei 2.9.6) nesiunčia vėlesnių Libre3 jutiklio duomenų į prijungtus įrenginius (pvz., į Juggluco WearOS laikrodyje). Gali tekti pataisytoje Libre3 programėlėje (Juggluco meniu) spausti „Resend data“.

### Papildoma pagalba

Originalios instrukcijos: [jkaltes svetainė](https://www.juggluco.nl/Juggluco/libre3/)

Papildoma GitHub saugykla: [GitHub nuoroda](https://github.com/maheini/FreeStyle-Libre-3-patch)
