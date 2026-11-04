# CareLevo

CareLevo yra pompa be vamzdelio (patch), kurią gamina CareMedi. Kiekviena pompa talpina iki 300 V insulino ir nešiojama iki 7 dienų (168 valandų). Su **AAPS** ji palaiko ryšį per telefono Bluetooth, be jokio papildomo įrenginio.

```{admonition} New driver
:class: warning
CareLevo tvarkyklė **AAPS** yra nauja. Prieš aktyvuodami pirmąją pompą, perskaitykite visą šį puslapį ir laikykite pompos naudojimo instrukciją po ranka.
```

Mažiausia dozė, kurią pompa gali suleisti, yra 0,05 V. **Profilyje** valandines bazes nustatykite ne mažesnes nei 0,05 V/val., 0,05 V/val. žingsniais, kitaip insulino kiekis, kurio tikisi **Profilis**, šiek tiek skirsis nuo kiekio, kurį suleidžia pompa. **AAPS** naudoja tas valandines bazes, kurias pompa priėmė.

```{contents} Table of contents
:depth: 1
:local: true
```

## Pompos galimybės su AAPS

* Ryšį su **AAPS** palaiko per telefono vidinį Bluetooth, be papildomo ryšio įrenginio.
* Bolusas 0,05 V žingsniais.
* Valandinė bazė nuo 0,05 V/val. iki 15 V/val. 0,05 V/val. žingsniais, 30 minučių valandinės bazės intervalai.
* Laikinos valandinės bazės nustatomos absoliučia reikšme, iki 12 valandų.
* Ištęstas bolusas iki 8 valandų.
* Vasaros laiko ir laiko juostos pakeitimus reikia tvarkyti rankiniu būdu. Pompa praneša, kai pasikeičia laiko juosta.

## Pompos sąranka

1. Atidarykite **meniu** (☰) viršutiniame kairiajame **AAPS** pagrindinio ekrano kampe ir pasirinkite **Konfigūracija**.
1. Skiltyje Pompa pasirinkite **Carelevo**.
1. Paspauskite mygtuką „Atgal“, kad grįžtumėte į pagrindinį ekraną.

![Carelevo įskiepis, pasirinktas skiltyje Konfigūracija > Pompa](../images/v4/Pumps/carelevo_enabled.png)

## Parametrai

Pompos ekraną atidarykite per **Valdymas → Pompa** (arba **Konfigūracija → Pompa → Atidaryti įskiepį**).

CareLevo nustatymus atidarykite paspaudę piktogramą **Nustatymai** (krumpliaratis) viršutiniame dešiniajame kampe. Galimi trys nustatymai:

![Carelevo tvarkyklės nustatymai](../images/v4/Pumps/carelevo_settings.png)

### Pranešimo apie senkantį insuliną nustatymas

Pompa praneša, kai rezervuare likęs insulino kiekis pasiekia pasirinktą kiekį. Jį galima nustatyti nuo 20 V iki 50 V, 5 V žingsniais. Numatyta reikšmė yra 30 V. Nepriklausomai nuo šio nustatymo, kai lieka mažiau nei 10 V, pompa įjungia kritinį aliarmą ir nustoja leisti insuliną.

### Pranešimo apie pompos naudojimo laiką nustatymas

Pompa praneša, kai ji nešiojama pasirinktą valandų skaičių, kad galėtumėte suplanuoti keitimą. Jį galima nustatyti nuo 24 iki 167 valandų. Numatyta reikšmė yra 116 valandų.

### Pompos informacinis įspėjimas

Kai ši parinktis įjungta, pompa pypteli, kai bolusas, ištęstas bolusas ar laikina bazė prasideda ir kai baigiasi. Numatyta: išjungta.

## Pompos ekranas

![Carelevo pompos ekranas be aktyvios pompos](../images/v4/Pumps/carelevo_pump_screen.png)

Pompos ekrane rodoma **Bluetooth būsena** (Nėra aktyvaus pompos modulio, Atjungta arba Prijungta), pompos **Serijos Nr.**, jos **Aktyvavimo laikas** ir **Galiojimo pabaiga**, dabartinė **Bazė** ir **Laikina bazė**, **Likęs insulino kiekis** (likęs / pripildytas), **Likęs pompos veikimo laikas** ir **Iš viso suleista insulino**.

Mygtukai priklauso nuo pompos būsenos:

* **Aktyvuoti**: pradeda naujos pompos aktyvavimą, žr. toliau.
* **Insulino pildymo vedlys**: rodo dvylika pompos pildymo insulinu žingsnių.
* **Sustabdyti insulino tiekimą** / **Atnaujinti insulino tiekimą**: pristabdo ir vėl pradeda insulino tiekimą, žr. toliau.
* **Pašalinti pompą**: sustabdo dabartinę pompą, kad būtų galima aktyvuoti naują.

## Pompos aktyvavimas

Prieš pradėdami įsitikinkite, kad **AAPS** yra aktyvus **Profilis** ir įjungtas Bluetooth. Įjungtą pompą reikia aktyvuoti per ribotą laiką; jei laikas baigiasi, pompa įjungia aliarmą **Baigėsi pompos uždėjimo laikas** ir jos nebegalima naudoti.

Pompos ekrane paspauskite **Aktyvuoti** ir vykdykite nurodymus. Atšaukti galite bet kada, kol adata dar neįvesta; įvesti duomenys bus panaikinti.

### Insulino pasirinkimas

Patvirtinkite insuliną, kurį naudojate. Pompai reikia greito veikimo U-100 insulino.

### Pompos pripildymas insulinu

Pripildykite pompą 50–300 V insulino, atsižvelgdami į tai, kiek laiko ją nešiosite. Jei reikia pildymo instrukcijų, paspauskite **Insulino pildymo vedlys**. Tada spauskite pripildyto kiekio laukelį ir pasirinkite, kiek insulino pripildėte; **AAPS** pagal tai rodo likusį insulino kiekį.

### Pompos prijungimas

1. Išimkite pompą iš lizdinės pakuotės ir nuimkite adatos dangtelį.
1. Paspauskite pompos įjungimo mygtuką ir palaikykite ilgiau nei vieną sekundę. Po pyptelėjimo spauskite **Ieškoti pompos**.
1. Jei rasta pompa yra tinkama, spauskite **Patvirtinti**. Jei ne, spauskite **Ieškoti iš naujo**.

### Saugos patikra

Kai pompa prijungta, paspauskite **Saugos patikra**. Pompa patikrina save ir užsipildo (prime). Patikrinkite, ar ant adatos galiuko atsirado insulino lašelis. Jei lašelio nematyti, paspauskite **Bandyti dar kartą**. Kai patikra baigta, paspauskite **Toliau**.

### Vieta ir pompos priklijavimas

1. Pasirinkite vietą, kurioje nešiosite pompą.
1. Kruopščiai nuvalykite vietą spiritiniu tamponu.
1. Nuimkite apsauginį popierių ir priklijuokite pompą prie odos taip, kad pažymėtas taškas būtų nukreiptas į viršų.
1. Kai pompa priklijuota, paspauskite **Toliau**.

### Adatos įvedimas

1. Pasukite apsauginį dangtelį rodyklės kryptimi ir nuimkite jį.
1. Paspauskite aplikatoriaus mygtuką iki galo ir palaikykite 10 sekundžių. Kai adata įvedama, pasigirsta pyptelėjimas.
1. Nuimkite aplikatorių ir paspauskite **Patvirtinti adatos įvedimą**.

Jei adatos įvesti nepavyksta, **AAPS** parodo, kiek bandymų liko. Kai bandymų nebelieka, pompa įjungia aliarmą **Adatos įvedimo klaida** ir ją reikia pakeisti.

Insulino tiekimas prasideda, kai tik adatos įvedimas patvirtinamas.

## Boluso pranešimai

Jei pompa atsisako suleisti bolusą, **AAPS** parodo priežastį. Pavyzdžiui, *Tokio boluso suleisti negalima. Galima dozė: 2,8 V* reiškia, kad pompa dabar gali suleisti tik tokį kiekį.

Jei sustabdote bolusą, o pompa sustabdymo nepatvirtina, **AAPS** laukia boluso pabaigos ir įrašo kiekį, kurį praneša pompa. Jei bolusas nebuvo įrašytas (pavyzdžiui, nes buvo sustabdytas jo leidimo metu), **AAPS** prideda jį pagal pompos bendrą kiekį ir paprašo patikrinti AIO, prieš bandant dar kartą.

## Insulino tiekimo sustabdymas ir atnaujinimas

Pompos ekrane paspauskite **Sustabdyti insulino tiekimą** ir pasirinkite, kiek laiko tiekimas turi būti pristabdytas: nuo 30 minučių iki 4 valandų, 30 minučių žingsniais. Tiekimas pats neatsinaujina: kai pristabdymas baigiasi, pompa parodo įspėjimą **Pradėti insulino tiekimą**. Pompos ekrane paspauskite **Atnaujinti insulino tiekimą** arba įspėjime **Pradėti insulino tiekimą** ir patvirtinkite.

## Pompos pašalinimas

Pompos ekrane paspauskite **Pašalinti pompą** ir patvirtinkite. Insulino tiekimas sustoja ir pompos nebegalima naudoti. Nuimkite pompą nuo kūno ir aktyvuokite naują.

Kai pompą sustabdė kritinis aliarmas, aliarme vietoj to rodomas mygtukas **Išjungti pompą**. Jį paspaudus pompa pašalinama taip pat.

(carelevo-alarms-and-notifications)=

## Aliarmai ir pranešimai

Pompa praneša trijų lygių įvykius. Visi jie rodomi kaip **AAPS** pranešimai.

### Kritiniai aliarmai

Insulino tiekimas sustabdytas. Veikite nedelsdami:

* **Senka rezervuaras**: liko mažiau nei 10 V. Išjunkite pompą ir ją pakeiskite.
* **Pompos naudojimo laikas baigėsi**: pompos naudojimo laikas pasibaigė. Išjunkite pompą ir ją pakeiskite.
* **Senka baterija**: pašalinkite pompą ir ją pakeiskite.
* **Per aukšta/per žema temperatūra**: pereikite į tinkamos temperatūros aplinką, nuo 40 ℉ iki 99 ℉ (nuo 4,4 ℃ iki 37,2 ℃).
* **Automatinis išjungimas**: pompa sustojo, nes į automatinio išjungimo įspėjimą nebuvo sureaguota. Paspauskite **Pradėti insulino tiekimą**, kad vėl būtų tiekiama valandinė bazė.
* **Baigėsi pompos uždėjimo laikas**, **Savidiagnostika nepavyko**, **Pompos klaida**, **Užsikimšimas** ir **Adatos įvedimo klaida**: išjunkite pompą ir ją pakeiskite.

### Alerts

Insulino tiekimas tęsiamas, bet reikia jūsų dėmesio:

* **Senka rezervuaras**: rezervuare liko kiekis, nustatytas **Pranešimo apie senkantį insuliną nustatymas**. Pasiruoškite pakeisti pompą.
* **Netrukus baigsis pompos naudojimo laikas** ir **Baigėsi pompos naudojimo laikas**: pakeiskite pompą.
* **Senka baterija**: pasiruoškite pakeisti pompą.
* **Per aukšta / per žema temperatūra**: tiekimas pristabdytas, kol pompos temperatūra vėl bus nuo 40 ℉ iki 99 ℉ (nuo 4,4 ℃ iki 37,2 ℃).
* **Automatinis išjungimas**: spauskite **OK**. Jei įspėjimas ignoruojamas, jis tampa kritiniu aliarmu ir tiekimas sustoja.
* **Pompa nepilnai aktyvuota**: spauskite **OK**, kad užbaigtumėte aktyvavimą.
* **Pradėti insulino tiekimą**: jūsų nustatytas pristabdymas baigėsi. Spauskite **Pradėti insulino tiekimą**, kad tiekimas būtų atnaujintas.
* **Įjungti Bluetooth** ir **BLE neprijungtas**: telefonas negali susisiekti su pompa. Įjunkite Bluetooth arba patikrinkite pompos ryšį.

### Pranešimai

Tik informacija: **Senka rezervuaras**, **Pranešimas apie pompos naudojimo laiką** (praėjo laikas, nustatytas **Pranešimo apie pompos naudojimo laiką nustatymas**), **Pompos patikros pranešimas**, **Laiko juostos pakeitimas** ir **Patikrinkite gliukozės kiekį kraujyje** (praėjus nustatytam laikui po boluso).

Pompa taip pat praneša, kai prasideda arba baigiasi jos pačios sustabdymo esant žemai glikemijai funkcija (**LGS**). **AAPS** šios funkcijos nenaudoja; žemą glikemiją ciklas valdo pats.

## Kur gauti pagalbos

Apie CareLevo tvarkyklės problemas praneškite [AAPS GitHub problemų (issues) puslapyje](https://github.com/nightscout/AndroidAPS/issues) arba AAPS bendruomenės kanaluose, žr. [Kur gauti pagalbos?](../GettingHelp/WhereCanIGetHelp.md).
