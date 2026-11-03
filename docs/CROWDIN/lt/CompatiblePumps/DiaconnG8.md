# Diaconn G8

```{contents} Table of contents
:depth: 1
:local: true
```

## Pompos galimybės su AAPS

* Ryšį su **AAPS** palaiko per telefono vidinį Bluetooth, be papildomo ryšio įrenginio.
* Vasaros laiko ir laiko juostos pakeitimus reikia tvarkyti rankiniu būdu.

## Insulino pompos susiejimas per Bluetooth

- Spauskite **meniu** (☰) viršutiniame kairiajame kampe.

![Meniu su punktu „Konfigūracija“](../images/v4/Configuration/configuration_menu.png)

- Spauskite **Konfigūracija** > **Pompa** ir pasirinkite **Diaconn G8**.

![Konfigūracija > Pompa su Diaconn G8 įskiepiu](../images/v4/Configuration/configuration_pump_list_3.png)

Kai jis pasirinktas, **Diaconn G8** kortelėje rodomi du mygtukai: **Parametrai** ir **Atidaryti įskiepį**:

![Diaconn G8 įskiepis, pasirinktas skiltyje Konfigūracija > Pompa](../images/v4/Pumps/diaconn_g8_enabled.png)

**Parametrai** atidaro Diaconn G8 tvarkyklės nustatymus (žr. [Diaconn G8 insulino pompos parinkčių nustatymas](#diaconn-g8-insulin-pump-option-setting) toliau).

**Atidaryti įskiepį** (arba **Valdymas** > **Pompa**) atidaro Diaconn G8 pompos ekraną. Kol pompa nesusieta, jis atrodo taip:

![Diaconn G8 pompos ekranas prieš susiejimą](../images/v4/Pumps/diaconn_g8_pump_screen.png)

![image](../images/DiaconnG8/DiaconnG8_04.jpg)

```{admonition} Older screenshot
:class: note
Aukščiau esanti ekrano kopija yra iš ankstesnės **AAPS** versijos. **AAPS** 4 versijoje susiejimas pradedamas mygtuku **Susieti** pompos ekrane; nustatymo **Pasirinkta pompa** nebėra.
```

- Pompos ekrane spauskite **Susieti**. Atsidaro ekranas **Diaconn pompos sąsaja**, ir **AAPS** ieško netoliese esančių pompų.
- Kai sąraše atsiras jūsų insulino pompos modelio numeris, spauskite jį (pavyzdžiui, **DIACONN-65010**).

![Ekranas „Diaconn pompos sąsaja“ ieško pompų](../images/DiaconnG8/DiaconnG8_05.png)

- Pompos modelio numerį galite patikrinti dviem būdais:

1. Paskutiniai 5 serijos numerio (SN) skaitmenys pompos galinėje pusėje.
2. Spauskite mygtuką O > Information > BLE > paskutiniai 5 skaitmenys.

![image](../images/DiaconnG8/DiaconnG8_06.jpg)

- Pasirinkus pompą, atsiranda langas, kuriame prašoma PIN kodo. Įveskite pompos ekrane rodomą PIN kodą, kad užbaigtumėte prisijungimą.

 ![image](../images/DiaconnG8/DiaconnG8_07.jpg)

- Kai rodoma **Sėkmingai susieta!**, spauskite **OK** ir grįšite į pompos ekraną.

## Pompos būsenos tikrinimas ir žurnalų sinchronizavimas

- Kai pompa prijungta, atidarykite pompos ekraną (**Valdymas** > **Pompa**). Jame rodoma pompos būsena (baterija, rezervuaras, paskutinis ryšys, paskutinis bolusas, valandinė bazė ir kt.).
- Spauskite **Atnaujinti**, kad prisijungtumėte prie pompos, atnaujintumėte būseną ir sinchronizuotumėte žurnalus.
- Spauskite **Pompos istorija**, kad pamatytumėte iš pompos nuskaitytą istoriją.

![image](../images/DiaconnG8/DiaconnG8_08.jpg)

```{admonition} Older screenshot
:class: note
Aukščiau esanti ekrano kopija yra iš ankstesnės **AAPS** versijos. **AAPS** 4 versijoje pompos būsena rodoma pompos ekrane (**Valdymas** > **Pompa**) ir sinchronizuojama mygtuku **Atnaujinti**.
```

(diaconn-g8-bluetooth-troubleshooting)=

## Bluetooth trikčių šalinimas

**Ką daryti, jei Bluetooth ryšys su pompa nestabilus.**

### 1 būdas) Paleiskite AAPS iš naujo ir vėl patikrinkite pompą

- Spauskite **meniu** (☰) viršutiniame kairiajame kampe.
- Spauskite **Išeiti** meniu apačioje.

![Meniu su punktu „Išeiti“ apačioje](../images/v4/Configuration/configuration_menu.png)

- Vėl paleiskite **AAPS** ir patikrinkite ryšį su pompa.

### 2 būdas) Jei pirmas būdas nepadeda, atjunkite Bluetooth ryšį ir prisijunkite iš naujo.

- Paspauskite ir apie 3 sekundes palaikykite viršuje esantį Bluetooth mygtuką.

![image](../images/DiaconnG8/DiaconnG8_11.jpg)

- Spauskite nustatymų mygtuką prie susietos Diaconn G8 insulino pompos.

![image](../images/DiaconnG8/DiaconnG8_12.jpg)

- Atsieti.

![image](../images/DiaconnG8/DiaconnG8_13.jpg)

- **AAPS** atidarykite pompos ekraną (**Valdymas** > **Pompa**), spauskite **Atsieti** ir patvirtinkite **Iš naujo nustatyti susiejimo informaciją?**.
- Pakartokite pompos susiejimą per Bluetooth (žr. aukščiau).

## Papildoma informacija

(diaconn-g8-insulin-pump-option-setting)=

### Diaconn G8 insulino pompos parinkčių nustatymas

- **Konfigūracija** > **Pompa** > **Diaconn G8** > **Parametrai**
- Arba pompos ekrane (**Valdymas** > **Pompa**) spauskite nustatymų piktogramą (krumpliaratį) viršutiniame dešiniajame kampe.

![Diaconn G8 tvarkyklės nustatymai](../images/v4/Pumps/diaconn_g8_settings.png)

- **Boluso greitis** nustato, kaip greitai pompa suleidžia bolusą.
- Jei įjungta parinktis **Įrašyti rezervuaro keitimą**, įvykus įvykiui „Insulino keitimas“ susijusi informacija automatiškai įkeliama į terapijos įrašus (Careportal).
- Jei įjungta parinktis **Įrašyti kaniulės keitimą**, įvykus įvykiui „Infuzijos vietos keitimas“ susijusi informacija automatiškai įkeliama į terapijos įrašus (Careportal).
- Jei įjungta parinktis **Įrašyti infuzijos vamzdelio pakeitimą**, įvykus įvykiui „Vamzdelio keitimas“ susijusi informacija automatiškai pridedama kaip pastaba.
- Jei įjungta parinktis **Įrašyti baterijos pakeitimą**, įvykus įvykiui „Baterijos keitimas“ susijusi informacija automatiškai įkeliama į terapijos įrašus (Careportal). Baterijos keitimą taip pat galite įrašyti patys: **Valdymas** > **Baterijos keitimas**. (Pastaba: prieš keisdami bateriją sustabdykite visas vykdomas insulino leidimo funkcijas.)
- **Diaconn Cloud Sync** siunčia pompos žurnalus į Diaconn Cloud.

![Diaconn G8 veiksmų meniu](../images/DiaconnG8/DiaconnG8_15.jpg)

```{admonition} Older screenshot
:class: note
Aukščiau esanti ekrano kopija yra iš ankstesnės **AAPS** versijos. **AAPS** 4 versijoje baterijos keitimas įrašomas per **Valdymas** > **Baterijos keitimas**; skirtuko **Veiksmai** nebėra.
```

### Ištęsto boluso funkcija

- Jei naudosite ištęstą bolusą, uždaras ciklas bus išjungtas.
- Žr. [šį puslapį](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment), kodėl ištęstas bolusas neveikia uždaro ciklo aplinkoje.

## Kur gauti pagalbos

Diaconn G8 tvarkyklę kuria bendruomenė **savanoriškai**. Prieš prašydami pagalbos:

1. **Perskaitykite** atitinkamą šios dokumentacijos skyrių ir įsitikinkite, kaip funkcija turi veikti.
2. **Klauskite** kanale *#AAPS* [Discord](https://discord.gg/4fQUWHZ4Mw) serveryje arba kitame [bendruomenės kanale](../GettingHelp/WhereCanIGetHelp.md).
3. **Praneškite apie klaidą**: paieškokite tarp [esamų problemų (issues)](https://github.com/nightscout/AndroidAPS/issues); jei jūsų problemos ten nėra, sukurkite [naują problemą (issue)](https://github.com/nightscout/AndroidAPS/issues) ir pridėkite [žurnalų failus](../GettingHelp/AccessingLogFiles.md).

Prašydami pagalbos nurodykite telefono gamintoją ir modelį, Android versiją, **AAPS** versiją ir paprastai, angliškai aprašykite problemą (kas pasikeitė, kada paskutinį kartą veikė).
