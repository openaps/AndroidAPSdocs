# Profilio keitimas

Paleidę AndroidAPS ir pasirinkę profilį, turėsite atlikti „profilio pakeitimą“, kurio trukmė bus 0 (bus paaiškinta vėliau). Šitaip AAPS pradės sekti jūsų profilio istoriją, ir kiekvienam naujam profilio pakeitimui reikalingas papildomas „Profilio keitimo“ veiksmas, net jei profilį keičiate Nightscout svetainėje. Pakeistas profilis iš karto perkeliamas į AAPS, tačiau jūs vis tiek turite perjungti į tą patį profilį (NS arba AAPS), kad šie pakeitimai įsigaliotų.

AAPS susikuria profilio momentinį vaizdą su pradžios data ir trukme ir naudoja jį nurodytu laikotarpiu. Trukmė "0" reiškia "neribotai". Toks profilis yra aktyvus, kol bus perjungtas naujas profilis.

Atlikite profilio pakeitimą: ilgai paspauskite profilio pavadinimą (žemiau pateiktame paveikslėlyje „Aktualus (Rad)“) ir pasirinkite Profilio keitimas.

![Profilio keitimas](../images/ProfileSwitch_HowTo.png)

Jei pakeičiate profilį su laiko trukme, praėjus nustatytam laikui, profilis bus atstatytas į paskutinį galiojantį profilio pakeitimą

Jei naudojate vietinius AAPS profilius (paprastas, vietinis, CPP), turite paspausti ten esantį mygtuką, kad suaktyvintumėte šiuos pakeitimus (tai sukuria teisingą profilio keitimo įvykį).

Keisdami profilius, galite pasirinkti dvi papildomas parinktis, kurios anksčiau buvo Cirkadinio procento profilio dalis:

## Procentais

* Taikoma ta pati procentinė dalis visiems profilio parametrams. 
* Jei nustatysite 130% (tai reiškia, kad esate 30% labiau rezistentiškas insulinui), valandinė bazė padidės 30%. Tai taip pat atitinkamai sumažina JIF ir IA (šiame pavyzdyje jie padalijami iš 1,3).
  
  ![Profilio pakeitimo procentine dalimi pavyzdys](../images/ProfileSwitchPercentage.png)

* Ši informacija užrašoma į pompą ir bus suprantama kaip nustatytas bazinis profilis.

* Nuo tada ciklo algoritmas (atviras arba uždaras) veiks su pasirinktu procentiniu profiliu. Pavyzdžiui, skirtingoms hormoninio ciklo fazėms galima nustatyti skirtingą procentinį profilį.

## Laiko perstūmimas

![Profilio procentas ir laiko perstūmimas](../images/ProfileSwitchTimeShift2.png)

* Viską perkelia pagal įvestų valandų skaičių. 
* Pavyzdžiui, naktinėse pamainose galite nurodyti, kiek valandų vėliau / anksčiau einate miegoti ar atsikeliate.
* Dažnai klausiama, kuria kryptimi per kurį laiką slinkti profilį. Šis laikas turi būti perkeltas x valandomis. Atkreipkite dėmesį į laiko poslinkio kryptį, kaip aprašyta šiame pavyzdyje: 
  * Dabartinis laikas: 12:00
  * **Teigiamas** laiko perstūmimas 
    * 2:00 **+10 h** -> 12:00
    * Nustatymai, kurie prasideda 02:00 val. bus naudojami vietoje tų nustatymų, kurie paprastai užprogramuojami 12.00 val.
  * **Neigiamas** laiko perstūmimas 
    * 22:00 **-10 h** -> 12:00
    * Nustatymai, kurie prasideda 22:00 val. bus naudojami vietoje tų nustatymų, kurie paprastai užprogramuojami 12.00 val.

![Profilio pakeitimo laiko perstūmimo kryptys](../images/ProfileSwitch_PlusMinus2.png)

Šis profilio fiksavimo mechanizmas leidžia daug tikslesnius praeities skaičiavimus ir taip pat leidžia stebėti profilio pokyčius.

## Profilio klaidų šalinimas

### "Neteisingas profilis" / "Pagrindinis profilis nesutampa su valandomis"

![Bazė nesutampa su valandomis](../images/BasalNotAlignedToHours2.png)

* Šie klaidų pranešimai rodomi, jei nustatėte valandines bazes ar I:A santykius ne pilnoms valandoms, o, pvz.: pusvalandžiams. (Pvz., DanaR ir DanaRS pompos nepalaiko pusvalandžio pakeitimų.)
  
  ![Profilio, nesutampančio su valandomis, pavyzdys](../images/ProfileNotAlignedToHours.png)

* Įsidėmėkite datą ir laiką, nurodytą klaidos pranešime (aukščiau esančioje ekrano kopijoje, 2016 07 26 17:45).

* Eikite į Įrašų skirtuką
* Pasirinkite "Profilio keitimas"
* Slinkite, kol rasite datą ir laiką pagal klaidos pranešimą.
* Spauskite Pašalinti.
* Kartais yra ne vienas klaidingas profilio pakeitimas. Tokiu atveju pašalinkite ir kitus įrašus.
  
  ![Panaikinti profilio keitimą](../images/PSRemove.png)

Kaip alternatyvą, galite ištrinti profilio pakeitimą tiesiogiai mLab, kaip aprašyta toliau.

### „Profilio pakeitimas gautas iš NS, tačiau profilis neegzistuoja lokaliai“

* Nightscout netinkamai sinchronizavo profilį.
* Ištrinkite profilio keitimo įrašą, kaip aprašyta aukščiau

Kaip alternatyvą, galite ištrinti profilio keitimą tiesiogiai mLab:

* Eikite į savo mLab duombazę
* Ieškokite Terapijoje profilio keitimo
* Ištrinkite profilio pakeitimą pagal klaidos pranešime nurodytą datą ir laiką. ![mLab](../images/mLabDeletePS.png)

### "IVT 3 val. yra per trumpa"

* Klaidos pranešimas pasirodo, kai jūsų profilyje nurodyta insulino veikimo trukmė, kurios vertę AndroidAPS laiko neteisinga. 
* Perskaitykite skyrių [Tinkamos IVT pasirinkimas](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/), peržiūrėkite savo profilį ir atlikite [profilio keitimą](../Usage/Profiles), kad jį suaktyvintumėte.