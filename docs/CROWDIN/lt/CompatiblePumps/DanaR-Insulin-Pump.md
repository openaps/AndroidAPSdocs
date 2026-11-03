# DanaR

*Naudokitės šiomis instrukcijomis, jei turite DanaR pompą. Jei vietoj jos turite 2017 m. išleistą DanaRS, žr. [DanaRS insulino pompa](./DanaRS-Insulin-Pump.md).*

## Pump capabilities with AAPS

* Su **AAPS** ryšį palaiko per telefono įtaisytą Bluetooth, be papildomo ryšio įrenginio.
* Keičiant laiko juostą ir pereinant į vasaros ar žiemos laiką nieko daryti nereikia, nes pompa nenaudoja savo istorijos.

## Sąranka

* Pompoje pasirinkite Main Menu > Setting > User Option
* Įjunkite "8. Ištęstas bolusas"

![DanaR pompa](../images/danar1.png)

* Eikite Main Menu > Setting > Discovery
* Telefone eikite į Bluetooth nustatymus, nuskaitykite aptinkamus prietaisus, pasirinkite savo DanaR pompos serijos numerį ir įveskite slaptažodį (sujungimo slaptažodis yra 0000). Jei telefonas neaptinka pompos, paleiskite telefoną iš naujo, išimkite DanaR bateriją, pakeiskite ją nauja ir pakartokite šiuos du žingsnius.

* **AAPS** kairiajame viršutiniame kampe atidarykite **meniu** (☰), eikite į **Konfigūracija** > **Pompa** ir pasirinkite savo DanaR tipą (**DanaR**, **DanaR Korean** arba **DanaRv2**).
  
  ![Konfigūracija > Pompa su DanaR įskiepiais](../images/v4/Configuration/configuration_pump_list_1.png)

* Atidarykite pompos ekraną: DanaR kortelėje spauskite **Atidaryti įskiepį** (arba eikite į **Valdymas** > **Pompa**).

* Spauskite **Susiejimas**. Susiejimo ekrane: 
  * Laukelyje **Pompos slaptažodis** įveskite pompos slaptažodį (numatytasis slaptažodis yra 1234).
  * Skiltyje **Pasirinkite susietą įrenginį** spauskite savo DanaR serijos numerį. Jei sąrašas tuščias, spauskite **Atverti Bluetooth nustatymus** ir pirmiausia susiekite pompą su telefonu (žr. ankstesnį žingsnį). Kai grįšite į **AAPS**, pompa bus sąraše. Jei jos nėra, spauskite atnaujinimo piktogramą.
  * Spauskite **Susiejimas**. **AAPS** prisijungia prie pompos ir patikrina slaptažodį.
* Norėdami pakeisti tvarkyklės nustatymus, **Konfigūracija** > **Pompa** skiltyje DanaR kortelėje spauskite **Parametrai**: 
  * **Boluso greitis** (DanaR ir DanaRv2): pakeiskite numatytąjį boluso greitį (12 s/U, 30 s/U arba 60 s/U).
  * **Naudoti ištęstą bolusą >200%** (DanaR ir DanaR Korean): įjunkite, jei norite, kad **AAPS** leistų didesnę nei 200 % valandinę bazę. Atminkite: tada negalėsite naudoti ciklo su didelėmis laikinomis bazėmis, kol maistui naudojate ištęstus bolusus.
* Pompoje nustatykite valandinės bazės žingsnį 0,01 V/val.
* Pompoje nustatykite boluso žingsnį 0,1 V. **AAPS** nuskaito boluso žingsnį iš pompos ir naudoja jį kiekvienam bolusui.
* Įgalinkite ištęstus bolusus pompoje

## Keliavimas per skirtingas laiko juostas su DanaR pompa

Apie keliones per laiko juostas žr. skyrių [Keliavimas per laiko juostas su pompomis](#timezone-traveling-danarv2-danars).

## Where to get help

DanaR tvarkyklę kuria bendruomenė **savanoriškai**. Prieš prašydami pagalbos:

1. **Perskaitykite** atitinkamą šios dokumentacijos skyrių ir įsitikinkite, kaip funkcija turi veikti.
2. **Klauskite** *#AAPS* kanale [Discord](https://discord.gg/4fQUWHZ4Mw) arba kitame [bendruomenės kanale](../GettingHelp/WhereCanIGetHelp.md).
3. **Praneškite apie klaidą**: pirmiausia paieškokite tarp [esamų problemų (issues)](https://github.com/nightscout/AndroidAPS/issues); jei jūsiškės nėra, sukurkite [naują problemą (issue)](https://github.com/nightscout/AndroidAPS/issues) ir pridėkite savo [žurnalų failus](../GettingHelp/AccessingLogFiles.md).

Prašydami pagalbos, nurodykite telefono gamintoją ir modelį, Android versiją, **AAPS** versiją ir paprastais žodžiais aprašykite problemą (kas pasikeitė, kada paskutinį kartą veikė).