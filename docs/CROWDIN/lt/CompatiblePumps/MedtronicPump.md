# Medtronic pompos

Tvarkyklė neveikia su naujesniais modeliais, įskaitant visus modelius, kurių pavadinimas baigiasi raide G (530G, 600 serija [630G, 640G, 670G], 700 serija [770G, 780G] ir kt.).

Suderinami šie modelių ir programinės įrangos deriniai:

- 512/712 (bet kuri programinės įrangos versija)
- 515/715 (bet kuri programinės įrangos versija)
- 522/722 (bet kuri programinės įrangos versija)
- 523/723 (programinė įranga 2.4A arba senesnė)
- 554/754 Europos versija (programinė įranga 2.6A arba senesnė)
- 554/754 Kanados versija (programinė įranga 2.7A arba senesnė)

Kaip patikrinti pompos programinės įrangos versiją, rasite [OpenAPS dokumentacijoje](https://openaps.readthedocs.io/en/latest/docs/Gear%20Up/pump.html#how-to-check-pump-firmware-check-for-absence-of-pc-connect) arba [LoopDocs](https://loopkit.github.io/loopdocs/build/step3/#medtronic-pump-firmware).

    {contents} Turinys
    :depth: 1
    :local: true

## Pompos galimybės su AAPS

* Ryšiui su **AAPS** reikalingas RileyLink suderinamas įrenginys.
* Automatinis vasaros laiko ir laiko juostų keitimo tvarkymas.

## Reikalavimai techninei ir programinei įrangai

- **Telefonas:** Medtronic tvarkyklė turėtų veikti su bet kuriuo Android telefonu, kuris palaiko Bluetooth ryšį. **SVARBU: skirtingų gamintojų telefonuose Bluetooth veikia skirtingai, todėl kiekvienas telefono modelis gali elgtis kitaip. Pavyzdžiui, kai kurie telefonai Bluetooth įjungimą ir išjungimą tvarko skirtingai. Tai gali turėti įtakos naudojimui, kai AAPS turi iš naujo prisijungti prie jūsų Rileylink tipo įrenginio.**
- **RileyLink suderinamas įrenginys:** Android telefonai negali susisiekti su Medtronic pompomis be atskiro įrenginio, kuris perduoda ryšį. Šis įrenginys jungiasi prie jūsų telefono per Bluetooth, o prie pompos – suderinamu radijo ryšiu. Pirmasis toks įrenginys vadinosi Rileylink, tačiau dabar yra ir kitų įrenginių, kurie gali turėti papildomų funkcijų.
    
    - Rileylink galima įsigyti [getrileylink.org](https://getrileylink.org/product/rileylink916)
    - Orangelink galima įsigyti [getrileylink.org](https://getrileylink.org/product/orangelink)
    - Emalink (yra keli modeliai) galima įsigyti [github.com](https://github.com/sks01/EmaLink)
    - Gnarl (reikia papildomo DIY darbo) – informacija [github.com](https://github.com/ecc1/gnarl)

Įvairių RileyLink suderinamų įrenginių palyginimo lentelę rasite [getrileylink.org](https://getrileylink.org/rileylink-compatible-hardware-comparison-chart)

(MedtronicPump-configuration-of-the-pump)=

## Pompos konfigūravimas

Kad AAPS galėtų nuotoliniu būdu siųsti komandas, pompoje reikia sukonfigūruoti šiuos nustatymus. Žingsniai, kaip atlikti kiekvieną pakeitimą Medtronic 715 pompoje, nurodyti skliaustuose prie kiekvieno nustatymo. Tikslūs žingsniai gali skirtis priklausomai nuo pompos tipo ir (arba) programinės įrangos versijos.

- **Įjunkite nuotolinį režimą pompoje** (pompoje paspauskite Act ir eikite į Utilities -> Remote Options, pasirinkite On, o kitame ekrane pasirinkite Add ID ir įveskite bet kokį ID, pvz., 111111). Kad pompa lauktų nuotolinio ryšio, sąraše Remote ID turi būti bent vienas ID.
- **Nustatykite didžiausią valandinę bazę (Max Basal)** (pompoje paspauskite Act, eikite į Basal ir pasirinkite Max Basal Rate) Pavyzdžiui, jei ši reikšmė keturis kartus didesnė už jūsų didžiausią standartinę valandinę bazę, galima nustatyti 400 % laikiną valandinę bazę. Didžiausia pompos leidžiama reikšmė yra 34,9 V/val.
- **Nustatykite didžiausią bolusą (Max Bolus)** (pompoje paspauskite Act, eikite į Bolus ir pasirinkite Max Bolus) Tai didžiausias bolusas, kurį pompa priims. Didžiausia pompos leidžiama reikšmė yra 25.
- **Nustatykite profilį Standard**. (Pompoje paspauskite Act ir eikite į Basal, tada Select Patterns) Pompai reikia tik vieno profilio, nes skirtingus profilius AAPS valdo jūsų telefone. Kitų šablonų (patterns) nereikia.
- **Nustatykite laikinos valandinės bazės tipą** (pompoje paspauskite Act ir eikite į Basal, tada Temp Basal Type). Pasirinkite Absolute (ne Percent).

## Medtronic konfigūravimas telefone / AAPS

- **Nesusiekite RileyLink suderinamo įrenginio per telefono Bluetooth meniu.** Jei susiesite per telefono Bluetooth meniu, AAPS nebematys jūsų RileyLink suderinamo įrenginio, kai vykdysite toliau pateiktas instrukcijas.
- Išjunkite automatinį ekrano pasukimą telefone. Kai kuriuose įrenginiuose automatinis ekrano pasukimas iš naujo paleidžia Bluetooth sesijas, o tai sukeltų problemų jūsų Medtronic pompai. 
- Yra du būdai sukonfigūruoti Medtronic pompą AAPS:

1. Sąrankos vedlio naudojimas pirmą kartą įdiegus AAPS
2. **Konfigūracija** > **Pompa**, pasirinkus **Medtronic**
    
    ![Konfigūracija > Pompa su Medtronic įskiepiu](../images/v4/Configuration/configuration_pump_list_3.png)
    
    Kai jis pasirinktas, **Medtronic** kortelėje rodomi du mygtukai: **Parametrai** ir **Atidaryti įskiepį**:
    
    ![Medtronic įskiepis, pasirinktas skiltyje Konfigūracija > Pompa](../images/v4/Pumps/medtronic_enabled.png)
    
    **Parametrai** atidaro Medtronic tvarkyklės parametrus:
    
    ![Medtronic tvarkyklės parametrai](../images/v4/Pumps/medtronic_settings.png)
    
    **Atidaryti įskiepį** (arba **Valdymas** > **Pompa**) atidaro Medtronic pompos ekraną. Kol pompa nesusieta, jis atrodo taip:
    
    ![Medtronic pompos ekranas prieš susiejimą](../images/v4/Pumps/medtronic_pump_screen.png)

Konfigūruojant Medtronic pompą sąrankos vedliu, gali nepavykti užbaigti sąrankos dėl Bluetooth problemų (pvz., nepavyksta prisijungti prie pompos). Tokiu atveju pasirinkite virtualią pompą, kad užbaigtumėte konfigūravimą, o problemos priežasties toliau ieškokite naudodami 2 būdą.

Nustatydami AAPS darbui su Medtronic pompa, skiltyje **Parametrai** turite nustatyti šiuos elementus (žr. parametrų paveikslėlį aukščiau):

- **Pompos serijos Nr.**: nurodytas pompos galinėje pusėje, prasideda raidėmis SN. Įveskite tik 6 rodomus skaitmenis be raidžių (pvz., 123456).
- **Pompos tipas**: jūsų naudojamos pompos modelis (pvz., 522). 
- **Pompos dažnis**: yra du pasirinkimai, priklausomai nuo to, kur pompa iš pradžių buvo platinama. Jei nesate tikri, kurį variantą rinktis, žr. [DUK](#MedtronicPump-faq): 
    - JAV ir Kanadai naudojamas 916 MHz dažnis
    - pasaulinei versijai (Worldwide) naudojamas 868 MHz dažnis
- **Maks val. bazė pompoje (V/val)**: turi atitikti pompoje nustatytą reikšmę (žr. „Pompos konfigūravimas“ aukščiau). Dar kartą: šį nustatymą reikia pasirinkti atsargiai, nes jis nulems, kiek insulino AAPS gali suleisti per valandinę bazę. Iš esmės tai nustato didžiausią laikiną valandinę bazę. Pavyzdžiui, jei ši reikšmė keturis kartus didesnė už jūsų didžiausią standartinę valandinę bazę, galima nustatyti 400 % laikiną valandinę bazę. Didžiausia pompos leidžiama reikšmė yra 34,9 V/val.
- **Maks bolusas pompoje (V)** (per valandą): turi atitikti pompoje nustatytą reikšmę (žr. „Pompos konfigūravimas“ aukščiau). Šį nustatymą reikia gerai apgalvoti, nes jis nustato, kokio dydžio bolusą AAPS apskritai gali nustatyti.
- **Užlaikymas prieš Boluso suleidimą (s)**: kiek sekundžių praeina nuo boluso paleidimo iki komandos išsiuntimo į pompą. Per šį laiką naudotojas gali atšaukti bolusą, jei boluso komanda išsiųsta per klaidą. Per AAPS prasidėjusio boluso atšaukti neįmanoma. Jau prasidėjusį bolusą galima atšaukti tik rankiniu būdu sustabdžius pompą ir vėl ją paleidus.
- **Medtronic kodavimas**: nustato, kur atliekamas Medtronic kodavimas (aparatinėje ar programinėje įrangoje). Geriau pasirinkti aparatinį kodavimą (t. y. jį atlieka RileyLink suderinamas įrenginys), nes tada siunčiama mažiau duomenų. Programinis kodavimas (t. y. jį atlieka AAPS) gali padėti, jei ryšys dažnai nutrūksta. Šis nustatymas nepaisomas, jei RileyLink įrenginio programinės įrangos versija yra 0.x.
- **Baterijos tipas (pagal galią)**: kad būtų teisingai nustatytas likęs baterijos įkrovos lygis, pasirinkite naudojamos AAA baterijos tipą. Pasirinkus ne paprastą rodinį, AAPS rodys apskaičiuotą likusį baterijos įkrovos procentą ir įtampą voltais. Galimi šie pasirinkimai:
    
    - Not selected (Simple view)
    - Šarminė baterija (išplėstinis rodinys)
    - Lithium (Extended view)
    - NiZn baterija (išplėstinis rodinys)
    - NiMH (Extended view)
- **Atlikti skanavimą**: prieš jungiantis prie RileyLink suderinamų įrenginių įjungia Bluetooth skenavimą. Tai turėtų pagerinti ryšio su įrenginiu patikimumą.

- **Rodyti baterijos įkrovimo lygį, gautą iš OrangeLink/EmaLink/DiaLink**: ši funkcija palaikoma tik naujesniuose įrenginiuose, pvz., EmaLink arba OrangeLink. Reikšmė rodoma Medtronic pompos ekrane kaip **RileyLink baterija**.
- **Nustatyti neutralią laikiną bazę**: pagal numatytuosius nustatymus Medtronic pompos kiekvienos valandos pradžioje pypsi, kai veikia laikina valandinė bazė. Įjungus šį nustatymą, pompa gali rečiau pypsėti: valandos pradžioje laikina valandinė bazė nutraukiama, kad pompa nepypsėtų.

(pairing-your-rileylink-compatible-device)=

### RileyLink suderinamo įrenginio susiejimas

RileyLink suderinamas įrenginys susiejamas Medtronic pompos ekrane, o ne telefono Bluetooth meniu:

- Atidarykite pompos ekraną (**Valdymas** > **Pompa** arba **Atidaryti įskiepį** Medtronic kortelėje skiltyje **Konfigūracija** > **Pompa**).
- Spauskite **Susieti RileyLink**. **AAPS** ieško netoliese esančių RileyLink suderinamų įrenginių.
- Sąraše spauskite savo įrenginį. Kai rodoma **RileyLink sėkmingai susietas**, spauskite **OK**.

## Medtronic pompos ekranas

Norėdami atidaryti Medtronic pompos ekraną, eikite į **Valdymas** > **Pompa**. Pompos ekrane rodoma dabartinė pompos būklė ir kai kurie Medtronic veiksmai (žr. pompos ekrano paveikslėlį aukščiau).

- **RileyLink būklė**: dabartinė ryšio tarp jūsų telefono ir RileyLink suderinamo įrenginio būklė. Čia visada turėtų būti rodoma „Prisijungta“. Bet kuri kita būklė gali reikalauti naudotojo veiksmų. 
- **RileyLink baterija**: dabartinis jūsų EmaLink arba OrangeLink įrenginio baterijos lygis. Rodoma tik tada, kai Medtronic parametruose įjungta **Rodyti baterijos įkrovimo lygį, gautą iš OrangeLink/EmaLink/DiaLink**.
- **Pompos būklė**: dabartinė ryšio su pompa būklė. Kadangi pompa nėra prijungta nuolat, dažniausiai bus rodoma miego piktograma. Galimos ir kitos būklės, pvz., „Pažadinimas“, kai AAPS bando išsiųsti komandą, arba kitos pompos komandos, pvz., „Gauti pompos laiką“, „Nustatyti laikiną bazę“ ir kt.
- **Baterija**: rodo baterijos būklę pagal Medtronic parametruose pasirinktą **Baterijos tipas (pagal galią)** reikšmę.
- **Paskutinis prisijungimas**: prieš kiek laiko buvo paskutinis sėkmingas prisijungimas prie pompos.
- **Paskutinis bolusas**: prieš kiek laiko buvo suleistas paskutinis sėkmingas bolusas.
- **Pagrindinis bazės dydis**: valandinė bazė, kurią pompa šią valandą leidžia pagal jūsų aktyvų profilį.
- **Laikina bazė**: šiuo metu leidžiama laikina valandinė bazė, kuri gali būti ir 0 V/val.
- **Rezervuaras**: kiek insulino yra rezervuare (atnaujinama bent kartą per valandą).
- **Klaidos**: klaidos tekstas, jei yra problema (dažniausiai rodomas, kai klaida yra konfigūracijoje).

Ekrano apačioje yra šie mygtukai:

- **Atnaujinti** skirtas dabartinei pompos būklei atnaujinti. Juo reikėtų naudotis tik tada, jei ryšys buvo nutrūkęs ilgą laiką, nes bus atnaujinami visi duomenys (gaunama istorija, gaunamas / nustatomas laikas, gaunamas profilis, gaunama baterijos būklė ir kt.).
- **Susieti RileyLink**: suranda ir susieja jūsų RileyLink suderinamą įrenginį (žr. [aukščiau](#pairing-your-rileylink-compatible-device)).
- **Pompos istorija**: rodo pompos istoriją (žr. [toliau](#MedtronicPump-pump-history)).
- **RL statistika**: rodo RL statistiką (žr. [toliau](#MedtronicPump-rl-status-rileylink-status)).
- **Pažadinti ir nustatyti** ir **Nustatyti RileyLink iš naujo**: žr. [Veiksmai](#medtronic-actions) toliau.
- **Išvalyti Boluso bloką**: rodomas tik trumpą laiką po boluso, kol **AAPS** laukia, kol pompa baigs jį suleisti. Jį paspaudus, laukimas baigiamas.

(MedtronicPump-pump-history)=

## Pompos istorija

![Pompos istorijos ekranas su filtrų mygtukais](../images/Medtronic03.png)

Pompos istorija gaunama kas 5 minutes ir saugoma telefone. Saugoma tik paskutinių 24 valandų istorija. Tai patogus būdas, jei reikia, pažiūrėti, kaip veikė pompa. Saugomi tik su AAPS susiję įrašai; nesvarbios konfigūravimo funkcijos neįtraukiamos.

Norėdami ją atidaryti, pompos ekrane spauskite **Pompos istorija**. Pagal numatytuosius nustatymus pasirinkta **Visi**. Spauskite vieną iš filtrų mygtukų viršuje (pvz., **Bolusai**, **Bazė** arba **Aliarmai**), kad būtų rodomi tik vieno tipo įrašai.

(MedtronicPump-rl-status-rileylink-status)=

## RL būklė (RileyLink būklė)

![RileyLink būklė – Parametrai](../images/Medtronic04.png) ![RileyLink būklė – Istorija](../images/Medtronic05.png)

RL būklės lange yra du skirtukai:

- **Parametrai**: rodo RileyLink suderinamo įrenginio parametrus: nustatytą adresą, prijungtą įrenginį, ryšio būklę, prisijungimo klaidą ir RileyLink programinės įrangos versijas. Įrenginio tipas visada yra „Pompa Medtronic“, modelis – jūsų modelis, serijos numeris – nustatytas serijos numeris, pompos dažnis rodo, kokį dažnį naudojate, paskutinis naudotas dažnis – paskutinį kartą naudotas dažnis.
- **Istorija**: rodo ryšio istoriją; RileyLink įrašai rodo RileyLink būklės pokyčius, o Medtronic įrašai – kokios komandos buvo išsiųstos į pompą.

(medtronic-actions)=

## Veiksmai

Kai naudojama Medtronic tvarkyklė, pompos ekrane (**Valdymas** > **Pompa**) yra du papildomi veiksmai:

- **Pažadinti ir nustatyti** – jei AAPS ilgą laiką neprisijungė prie pompos (turėtų jungtis kas 5 minutes), galite priverstinai paleisti suderinimą (Tune Up). Bus bandoma susisiekti su jūsų pompa, ieškant visais galimais radijo dažniais, kuriuos naudoja jūsų pompa. Jei prisijungti pavyksta, tas dažnis nustatomas kaip numatytasis. Kol vyksta suderinimas, tai rodoma RileyLink būklėje pompos ekrane. Jei suderinimas nepavyksta (pvz., nes pompa buvo per toli), **AAPS** pats bando dar kartą maždaug kas 10 minučių.
- **Nustatyti RileyLink iš naujo** – jei iš naujo nustatėte (reset) savo RileyLink suderinamą įrenginį, gali tekti naudoti šį veiksmą, kad įrenginys būtų sukonfigūruotas iš naujo (nustatytas dažnis, dažnio tipas, kodavimas).

## Svarbios pastabos

### NS konfigūracijai reikia ypatingo dėmesio

AAPS sinchronizacijai naudoja serijos numerį, todėl serijos numeris matomas NS. Žinant senos Medtronic pompos serijos numerį, pompą galima valdyti nuotoliniu būdu, todėl ypač gerai apsaugokite savo NS svetainę, kad jūsų pompos serijos numeris (SN) nenutekėtų. Žr. https://nightscout.github.io/nightscout/security/

### OpenAPS naudotojai

OpenAPS naudotojai turėtų žinoti, kad AAPS su Medtronic veikia visiškai kitaip nei OpenAPS. Naudojant AAPS, su pompa daugiausia bendraujama per telefoną. Įprastai pompos meniu greičiausiai reikės naudotis tik keičiant rezervuarą. Tai labai skiriasi nuo OpenAPS, kur bent dalis boluso paprastai suleidžiama pompos greitojo boluso mygtukais. Jei bolusas suleidžiamas rankiniu būdu pompoje, gali kilti problemų, kai AAPS tuo pačiu metu bando suleisti kitą bolusą. Yra patikrinimų, kurie tokiais atvejais stengiasi išvengti problemų, tačiau, jei įmanoma, to vis tiek reikėtų vengti.

### Žurnalų rašymas

Jei reikia ieškoti Medtronic pompos veikimo problemų priežasčių, viršutiniame kairiajame ekrano kampe pasirinkite meniu piktogramą, tada pasirinkite „Servisas“ ir „Įrašų nustatymai“. Ieškant Medtronic problemų priežasčių, reikia tikrinti Pump, PumpComm, PumpBTComm.

### Medtronic NGJ

Medtronic NGJ šiuo metu NEPALAIKOMAS.

### Rankinis pompos naudojimas

Venkite rankiniu būdu leisti bolusus ar nustatyti laikinas bazes pompoje. Visos tokios komandos turėtų būti siunčiamos per AAPS. Jei vis dėlto naudojate rankines komandas, tarp jų turi praeiti bent 3 minutės, kad sumažėtų problemų rizika.

### Laiko juostų keitimas ir vasaros laikas (DST) arba keliavimas su Medtronic pompa ir AAPS

AAPS automatiškai aptiks laiko juostos pasikeitimą ir atnaujins pompos laiką, kai jūsų telefonas persijungs į naują laiką.

Keliaujant į rytus prie dabartinio laiko pridedama valandų (pvz. iš GMT+0 į GMT+2), ir tai nesukelia problemų, nes laikas nepersidengia (t. y. ta pati valanda negali būti du kartus). Tačiau keliaujant į vakarus gali kilti problemų, nes iš esmės grįžtate laiku atgal, todėl AIO duomenys gali būti neteisingi.

Kūrėjai žino apie problemas keliaujant į vakarus, ir galimas sprendimas yra kuriamas. Daugiau informacijos rasite https://github.com/andyrozman/RileyLinkAAPS/issues/145 puslapyje. Kol kas žinokite, kad ši problema gali pasitaikyti, ir keisdami laiko juostas viską atidžiai stebėkite.

### Ar GNARL yra visiškai suderinamas RileyLink suderinamas įrenginys?

GNARL kodas visiškai palaiko visas funkcijas, kurias naudoja Medtronic tvarkyklė AAPS, todėl jis yra visiškai suderinamas. Svarbu žinoti, kad tam reikės papildomo darbo: turėsite įsigyti suderinamą aparatinę įrangą ir įkelti į ją GNARL kodą.

**Autoriaus pastaba:** GNARL programinė įranga vis dar eksperimentinė ir mažai išbandyta, todėl jos nereikėtų laikyti tokia pat saugia kaip RileyLink.

(MedtronicPump-faq)=

## FAQ

(MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)=

### Ką daryti, jei nutrūksta ryšys su RileyLink ir (arba) pompa?

Yra keletas būdų, kaip pabandyti išspręsti ryšio problemas.

- Pompos ekrane (**Valdymas** > **Pompa**) spauskite **Pažadinti ir nustatyti**, kaip aprašyta aukščiau.
- Išjunkite telefono Bluetooth, palaukite 10 sekundžių ir vėl jį įjunkite. Tai privers Rileylink įrenginį iš naujo prisijungti prie telefono.
- Iš naujo nustatykite Rileylink įrenginį (reset). Tada pompos ekrane (**Valdymas** > **Pompa**) turite spausti **Nustatyti RileyLink iš naujo**.
- Kiti naudotojai pastebėjo, kad šie žingsniai padeda atkurti ryšį, kai kiti būdai nepadeda: 
    1. Iš naujo paleiskite telefoną
    2. *Kol* telefonas paleidžiamas iš naujo, iš naujo paleiskite Rileylink įrenginį
    3. Atidarykite AAPS ir leiskite ryšiui atsikurti

### Kaip sužinoti, kokį dažnį naudoja mano pompa

![Pompos modelis](../images/Medtronic06.png)

Pompos galinėje pusėje rasite eilutę su modelio numeriu ir specialiu 3 raidžių kodu. Pirmosios dvi raidės nurodo dažnio tipą, o paskutinė – spalvą. Galimos dažnio reikšmės:

- NA – Šiaurės Amerika (dažnio pasirinkime turite pasirinkti „JAV & Kanada (916 MHz)“)
- CA – Kanada (dažnio pasirinkime turite pasirinkti „JAV & Kanada (916 MHz)“)
- WW – pasaulinė versija (dažnio pasirinkime turite pasirinkti „Pasaulinis (868 Mhz)“)

(MedtronicPump-pump-unreachable)=

### Kaip ištaisyti klaidą „Pompa nepasiekiama“

Kai kurios Medtronic pompos po **AAPS** atnaujinimo praneša klaidą „Pompa nepasiekiama“. Norėdami tai ištaisyti, pakeiskite kodavimo tipą:

1. Eikite į **Konfigūracija** > **Pompa** ir **Medtronic** kortelėje spauskite **Parametrai**.
2. Parinkčiai **Medtronic kodavimas** nustatykite **Aparatinis 4b6b kodavimas**.

## Kur gauti pagalbos

Medtronic tvarkyklę bendruomenė kuria **savanoriškai**. Prieš prašydami pagalbos:

1. **Perskaitykite** atitinkamą šios dokumentacijos skyrių ir įsitikinkite, kaip funkcija turi veikti.
2. **Klauskite** *#AAPS* kanale [Discord](https://discord.gg/4fQUWHZ4Mw) arba kitame [bendruomenės kanale](../GettingHelp/WhereCanIGetHelp.md).
3. **Praneškite apie klaidą**: pirmiausia paieškokite tarp [esamų problemų (issues)](https://github.com/nightscout/AndroidAPS/issues); jei jūsiškės nėra, sukurkite [naują problemą (issue)](https://github.com/nightscout/AndroidAPS/issues) ir pridėkite savo [žurnalų failus](../GettingHelp/AccessingLogFiles.md).

Prašydami pagalbos, nurodykite telefono gamintoją ir modelį, Android versiją, **AAPS** versiją ir paprastais žodžiais aprašykite problemą (kas pasikeitė, kada paskutinį kartą veikė).