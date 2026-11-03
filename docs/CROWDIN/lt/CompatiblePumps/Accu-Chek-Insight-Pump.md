# Accu-Chek Insight

**Ši programinė įranga yra „pasidaryk pats“ dirbtinės kasos sprendimo dalis, o ne paruoštas produktas, todėl JŪS turite skaityti, mokytis ir suprasti sistemą, taip pat ir tai, kaip ją naudoti. Ji nevaldo jūsų diabeto už jus, tačiau leidžia pagerinti diabeto kontrolę ir gyvenimo kokybę, jei esate pasiruošę tam skirti reikiamą laiką. Neskubėkite, skirkite sau laiko mokytis. Tik jūs vieni atsakote už tai, ką su ja darote.**

```{admonition} Accu-Chek Insight palaipsniui nebenaudojama :class: note

Roche traukiasi iš insulino pompų rinkos ir savo diabeto produktus sutelkia į Accu-Chek SmartGuide NGJ. Ji paskelbė, kad baigia prekybą Accu-Chek Combo ir Accu-Chek Insight pompomis; likusi Accu-Chek Solo mikropompa taip pat palaipsniui nutraukiama (paskutiniai pristatymai Vokietijoje – 2025 m. pabaigoje). Pokyčiai vykdomi pagal regionus, pradedant Vokietija; tikimasi, kad vėliau bus ir kitos Europos rinkos. Insight palaikymas jau nurodytas kaip baigtas (žr. [Nebeparduodamos pompos](./Future-possible-Pump-Drivers.md)). Jei naudojate šią pompą, iš anksto planuokite perėjimą prie palaikomos pompos.

    <br />```{note}
    Kol **AAPS** neturėjo savos Insight tvarkyklės, Insight buvo valdoma per atskirą programėlę [SightRemote](https://github.com/TebbeUbben/SightRemote). SightRemote nebereikia ir ji nebeprižiūrima: jei ją vis dar turite įdiegtą iš tų laikų, pašalinkite ją ir naudokite naujausią **AAPS** versiją.
    

```{contents} Turinys :depth: 1 :local: true

    <br />## Pompos galimybės su AAPS
    
    * Su **AAPS** ryšį palaiko per telefono įtaisytą Bluetooth, be papildomo ryšio įrenginio.
    * Vasaros ir žiemos laikas bei laiko juostos keičiami automatiškai.
    
    ## Aparatinės ir programinės įrangos reikalavimai
    
    * Roche Accu-Chek Insight pompa (tinka bet kuri programinės įrangos versija)
    
    Pastaba: AAPS duomenis visada rašo į **pirmąjį valandinės bazės profilį pompoje**.
    
    * Android telefonas su Android 12 arba naujesne versija (žr. [Telefonai](../Getting-Started/Phones.md))
    * Telefone įdiegta AAPS programėlė
    
    ## Sąranka
    
    * Insight pompa vienu metu turi būti prijungta tik prie vieno įrenginio. Jei anksčiau naudojote Insight nuotolinio valdymo pultą (gliukomatį), turite pašalinti gliukomatį iš pompos susietų įrenginių sąrašo: **Menu** > **Settings** > **Communication** > **Remove device**.
    
       ![Insight gliukomačio pašalinimo ekrano kopija](../images/Insight_RemoveMeter.png)
    
    * Skiltyje [Konfigūracija > Pompa](#Config-Builder-pump) pasirinkite kortelę **Accu-Chek Insight**. Vienu metu gali būti aktyvi tik viena pompa.
    
       ![Konfigūracija > Pompa su Accu-Chek Insight įskiepiu](../images/v4/Configuration/configuration_pump_list_1.png)
    
       Kai jis pasirinktas, kortelėje **Accu-Chek Insight** rodomi du mygtukai – **Parametrai** ir **Atidaryti įskiepį**:
    
       ![Accu-Chek Insight įskiepis, pasirinktas skiltyje Konfigūracija > Pompa](../images/v4/Pumps/accu_chek_insight_enabled.png)
    
       **Parametrai** atveria Accu-Chek Insight tvarkyklės nustatymus (žr. [Nustatymai AAPS](#Accu-Chek-Insight-Pump-settings-in-aaps)).
    
       **Atidaryti įskiepį** (arba **Valdymas → Pompa**) atveria Accu-Chek Insight pompos ekraną. Kol pompa nesusieta, jis atrodo taip:
    
       ![Accu-Chek Insight pompos ekranas prieš susiejimą](../images/v4/Pumps/accu_chek_insight_pump_screen.png)
    
    (accu-chek-insight-pairing)=
    ### Susiejimas
    
    * Pompos ekrane spauskite **Insight susiejimas**. Atsidaro susiejimo vedlys ir ieško netoliese esančių Bluetooth įrenginių (žemiau esančio paveikslėlio viršuje).
    * Insight pompoje eikite į **Menu** > **Settings** > **Communication** > **Add Device**. Pompa parodo šį ekraną (žemiau esančio paveikslėlio apačioje) su pompos serijos numeriu.
    
       ![Insight susiejimo ekrano kopija 1](../images/Insight_Pairing1.png)
    
    * Grįžę prie telefono, Bluetooth įrenginių sąraše spauskite pompos serijos numerį. Jei Android paprašo patvirtinti susiejimą, spauskite **Susieti**.
    
       ![Insight susiejimo ekrano kopija 2](../images/Insight_Pairing2.png)
    
    * Pompa ir telefonas parodo kodą. Patikrinkite, ar abiejuose įrenginiuose kodai vienodi. Patvirtinkite pompoje, o telefone spauskite **Taip**. (Jei kodai nesutampa, spauskite **Ne**.)
    
       ![Insight susiejimo ekrano kopija 3](../images/Insight_Pairing3.png)
    
    * Telefone rodoma **Sėkmingai susieta**. Spauskite **Išeiti**, kad grįžtumėte į pompos ekraną.
    
       ![Insight susiejimo ekrano kopija 4](../images/Insight_Pairing4.png)
    
    * Norėdami patikrinti, ar viskas gerai, pažiūrėkite į pompos ekraną (**Valdymas → Pompa**). Kai pompa susieta, rodoma informacija apie pompą, pavyzdžiui, **Serijos numeris**, **Pagaminimo data**, **Išleistos programinės įrangos versija** ir **Bluetooth adresas**.
    
       ![Insight susiejimo informacijos ekrano kopija](../images/Insight_PairingInformation.png)
    
       ```{admonition} Senesnė ekrano kopija
       :class: note
       Išskyrus pirmojo paveikslėlio viršų, aukščiau esančios susiejimo ekrano kopijos yra iš ankstesnės **AAPS** versijos ir **AAPS** 4 versijoje gali atrodyti kitaip.
       ```
    
    * Norėdami panaikinti susiejimą, pompos ekrane spauskite **Atsieti** ir patvirtinkite **Iš naujo nustatyti susiejimo informaciją?**. Tada vėl atsiranda mygtukas **Insight susiejimas**.
    
    Pastaba: pompa ir telefonas nėra nuolat sujungti. **AAPS** prisijungia tik tada, kai reikia (pavyzdžiui, nustatyti laikiną bazę, suleisti bolusą arba nuskaityti pompos istoriją). Kitaip telefono ir pompos baterijos išsikrautų per greitai.
    
    (Accu-Chek-Insight-Pump-settings-in-aaps)=
    ## Nustatymai AAPS
    
    Nustatymus atidarykite mygtuku **Parametrai** kortelėje **Accu-Chek Insight** skiltyje **Konfigūracija** > **Pompa** arba krumpliaračio piktograma pompos ekrano viršutiniame dešiniajame kampe.
    
    ![Accu-Chek Insight tvarkyklės nustatymai](../images/v4/Pumps/accu_chek_insight_settings.png)
    
    **AAPS** Insight nustatymuose galite įjungti šias parinktis:
    
    * **Įrašyti rezervuaro keitimus**: automatiškai įrašo insulino kasetės keitimą, kai pakeičiate kasetę pompoje.
    
    * **Įrašyti infuzijos vamzdelio pakeitimą**: prideda pastabą į **AAPS** duomenų bazę, kai pompoje paleidžiate vamzdelio užpildymo („tube filling“) programą.
    
    * **Įrašyti infuzijos vietos keitimus**: prideda pastabą į **AAPS** duomenų bazę, kai pompoje paleidžiate kaniulės užpildymo („cannula filling“) programą. **Pastaba: infuzijos vietos keitimas taip pat iš naujo nustato Autosens.**
    
    * **Įrašyti baterijos pakeitimą**: įrašo baterijos keitimą, kai į pompą įdedate naują bateriją.
    
    * **Įrašyti darbo režimo pakeitimus**: prideda pastabą į **AAPS** duomenų bazę kaskart, kai paleidžiate, sustabdote arba pristabdote pompą.
    
    * **Įrašyti įspėjimus**: prideda pastabą į **AAPS** duomenų bazę kaskart, kai pompa parodo įspėjimą (išskyrus priminimus, boluso ir laikinos bazės atšaukimą – jie neįrašomi).
    
    * **Aktyvuoti laikinos bazės emuliaciją**: Insight pompa gali nustatyti laikinas valandines bazes tik iki 250 %. Kad šią ribą būtų galima apeiti, laikinos bazės emuliacija liepia pompai papildomą insuliną suleisti ištęstu bolusu, jei prašoma didesnės nei 250 % laikinos bazės.
    
      **Pastaba: vienu metu naudokite tik vieną ištęstą bolusą. Keli ištęsti bolusai vienu metu gali sukelti klaidų.**
    
    * **Išjungti vibracijas rankinio boluso suleidimo metu**: Insight pompa nevibruoja, kai suleidžia rankinį bolusą (arba ištęstą bolusą). Galima tik su Insight programinės įrangos 3.x versija.
    
    * **Išjungti vibracijas automatinio boluso suleidimo metu**: Insight pompa nevibruoja, kai suleidžia automatinį bolusą (SMB arba laikiną bazę su laikinos bazės emuliacija). Galima tik su Insight programinės įrangos 3.x versija.
    
    * **Min. atkūrimo trukmė [s]** ir **Didž. atkūrimo trukmė [s]**: kiek laiko **AAPS** laukia prieš bandydama dar kartą po nepavykusio bandymo prisijungti. Jūs galite pasirinkti nuo 0 iki 20 sekundžių. Jei turite ryšio problemų, pasirinkite ilgesnį laukimo laiką.
        <br><br>Pavyzdys min. atkūrimo trukmė = 5 ir max. atkūrimo trukmė = 20
        <br><br>nėra ryšio -> laukti <b>5</b> s.
          <br>  bandyti dar kartą -> nėra ryšio -> laukti <b>6</b> s.
          <br>  bandyti dar kartą -> nėra ryšio -> laukti <b>7</b> s.
          <br>  bandyti dar kartą -> nėra ryšio -> laukti <b>8</b> s.
          <br>...
          <br>bandyti dar kartą -> nėra ryšio -> laukti <b>20</b> s.
          <br>bandyti dar kartą -> nėra ryšio -> laukti <b>20</b> s.
          <br>...
    
    * **Atjungimo vėlavimas [s]**: kiek laiko (sekundėmis) **AAPS** laukia prieš atsijungdama nuo pompos, kai veiksmas baigtas. Jūs galite pasirinkti nuo 0 iki 15 sekundžių. Numatyta reikšmė yra 5 sekundės.
    
    Laikotarpiams, kai pompa buvo sustabdyta, **AAPS** įrašo 0 % laikiną bazę.
    
    ### Pompos ekranas
    
    Accu-Chek Insight pompos ekrane (**Valdymas → Pompa**) rodoma dabartinė pompos būsena, pavyzdžiui, **Būklė**, **Paskutinis prisijungimas**, **Darbinis režimas**, **Baterija**, **Rezervuaro lygis**, šiandienos bendros paros dozės (**BPD bolusai**, **BPD bazė**), valandinės bazės ir paskutinis bolusas. Kai pompa susieta, ji turi šiuos mygtukus:
    
    * **Atnaujinti**: atnaujina pompos būseną.
    * **Įjungti pranešimus apie laikinos bazės pabaigą (pompos nustatymai)** / **Išjungti pranešimus apie laikinos bazės pabaigą (pompos nustatymai)**: standartinė Insight pompa įjungia aliarmą, kai laikina bazė baigiasi. Šis mygtukas įjungia arba išjungia šį aliarmą be konfigūravimo programos.
    * **Atsieti**: panaikina susiejimą su pompa (žr. [Susiejimas](#accu-chek-insight-pairing)).
    
    ![Insight būsenos ekrano kopija](../images/Insight_Status2.png)
    
    ```{admonition} Senesnė ekrano kopija
    :class: note
    Aukščiau esanti ekrano kopija yra iš ankstesnės **AAPS** versijos. **AAPS** 4 versijoje pompos ekranas atrodo kitaip ir jame taip pat yra mygtukas **Atsieti**.
    

## Pompos nustatymai

Aliarmus pompoje nustatykite taip:

* Menu > Settings > Device settings > Mode settings > Quiet > Signal > Sound
* Meniu > Nustatymai > Prietaiso nuostatos > Režimo parametrai > Tylus > Garsumas > 0 (nuimti visus stulpelius)
* Menu > Modes > Signal mode > Quiet

Taip bus nutildyti visi pompos aliarmai, o AAPS galės nuspręsti, ar aliarmas jums svarbus. Jei AAPS aliarmo nepatvirtina, jo garsumas didėja (pirmiausia pyptelėjimas, tada vibracija).

(Accu-Chek-Insight-Pump-vibration)=

### Vibracija

Priklausomai nuo pompos programinės įrangos versijos, Insight trumpai suvibruoja kaskart, kai suleidžiamas bolusas (pavyzdžiui, kai AAPS suleidžia SMB arba kai laikinos bazės emuliacija suleidžia ištęstą bolusą).

* Programinė versija 1.x: Jokios vibracijos.
* Programinė versija 2.x: Vibracija negali būti išjungta.
* Programinė versija 3.x: AAPS bolusą suleidžia tyliai.

Firmware version can be found in the menu.

## Baterijos pakeitimas

Naudojant ciklą, Insight baterija veikia nuo 10 iki 14 dienų, daugiausia 20 dienų. Apie tai pranešęs naudotojas naudoja Energizer ličio baterijas.

Insight pompoje yra nedidelė vidinė baterija, kuri palaiko svarbias funkcijas, pavyzdžiui, laikrodį, kol keičiate išimamą bateriją. Jei baterijos keitimas užtrunka per ilgai, ši vidinė baterija gali išsikrauti, laikrodis bus nustatytas iš naujo ir, įdėjus naują bateriją, jūsų bus paprašyta įvesti naują laiką ir datą. Jei taip nutinka, visi AAPS įrašai iki baterijos keitimo nebebus įtraukiami į skaičiavimus, nes neįmanoma tiksliai nustatyti teisingo laiko.

(Accu-Chek-Insight-Pump-insight-specific-errors)=

## Insight specifinės klaidos

### Ištęstas bolusas

Vienu metu naudokite tik vieną ištęstą bolusą, nes keli ištęsti bolusai vienu metu gali sukelti klaidų.

### Baigėsi laikas

Kartais Insight pompa neatsako, kol **AAPS** užmezga ryšį. Tada **AAPS** parodo pranešimą „Ryšio užmezgimui skirtas laikas baigėsi - iš naujo nustatykite bluetooth“.

![Insight: iš naujo nustatyti Bluetooth](../images/Insight_ResetBT.png)

Jei taip nutinka, maždaug 10 sekundžių išjunkite Bluetooth pompoje IR telefone, tada vėl jį įjunkite.

## Kelionė per laiko zonas su Insight pompa

Apie keliones per laiko juostas žr. skyrių [Keliavimas per laiko juostas su pompomis](#timezone-traveling-insight).

## Kur gauti pagalbos

Insight tvarkyklę kuria bendruomenė **savanoriškai**. Prieš prašydami pagalbos:

1. **Perskaitykite** atitinkamą šios dokumentacijos skyrių ir įsitikinkite, kaip funkcija turi veikti.
2. **Klauskite** *#AAPS* kanale [Discord](https://discord.gg/4fQUWHZ4Mw) arba kitame [bendruomenės kanale](../GettingHelp/WhereCanIGetHelp.md).
3. **Praneškite apie klaidą**: pirmiausia paieškokite tarp [esamų problemų (issues)](https://github.com/nightscout/AndroidAPS/issues); jei jūsiškės nėra, sukurkite [naują problemą (issue)](https://github.com/nightscout/AndroidAPS/issues) ir pridėkite savo [žurnalų failus](../GettingHelp/AccessingLogFiles.md).

Prašydami pagalbos, nurodykite telefono gamintoją ir modelį, Android versiją, **AAPS** versiją ir paprastais žodžiais aprašykite problemą (kas pasikeitė, kada paskutinį kartą veikė).