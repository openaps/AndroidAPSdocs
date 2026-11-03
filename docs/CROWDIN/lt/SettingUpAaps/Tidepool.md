# Tidepool

Tidepool yra trečiosios šalies įrankis. Jis renka KG, insulino ir angliavandenių duomenis (ir pastabas, kurias pridedate prie terapijos įrašų). Juo galima analizuoti šiuos duomenis ir dalintis jais su gydymo komanda. Nuo AAPS 3.2 versijos Tidepool galima naudoti vietoj Nightscout, kad būtų įvykdyta dalis 1 mokymo etapo. Ją taip pat galima naudoti kartu su Nightscout kaip alternatyvią ataskaitų platformą, kuri gerai dera su klinikine aplinka. Tai gali būti tinkamas variantas vaikams, naudojantiems AAPS, kai norima turėti Nightscout nuotolinio stebėjimo ir valdymo galimybes, bet ir ataskaitų platformą, kuri patogesnė jų gydytojų komandai.

Svarbu suprasti, kad Tidepool skirtas tik ataskaitoms. Tai NĖRA realiojo laiko stebėjimo programėlė. Jei jums reikia sekėjų, be pagrindinio AAPS telefono, turite nustatyti ir Nightscout.

Pastaba: Tidepool organizacija išleido iOS Loop produktą į rinką su FDA patvirtinimu. Šis projektas nesusijęs nei su jų duomenų ataskaitų platforma, nei su AAPS.


## 1 žingsnis – Sukurkite Tidepool paskyrą

- Eikite į [tidepool.org](https://www.tidepool.org/)

- Pasirinkite „Personal Sign Up“ (asmeninė registracija) arba „Sign Up“ (registruotis)

- Sukurkite el. pašto adresą ir slaptažodį ir juos užsirašykite

- Pasirinkite „Personal Account“ (asmeninė paskyra) ir spauskite „Continue“ (tęsti)

- Užpildykite paciento informacijos skiltį ir sutikite su naudojimo sąlygomis

- Patvirtinkite savo el. pašto adresą pagal instrukcijas, kurias gausite el. paštu


## 2 žingsnis – Prijunkite AAPS prie Tidepool

- Atidarykite **meniu** (☰) pagrindinio ekrano viršutiniame kairiajame kampe ir pasirinkite „**Konfigūracija**“

- Atidarykite kategoriją „**Ryšys**“ ir įjunkite „**Tidepool**“:

![Įjunkite Tidepool](../images/v4/Tidepool/tidepool_enable.png)

- Po Tidepool spauskite „**Atidaryti įskiepį**“, tada viršutiniame dešiniajame kampe spauskite piktogramą **Prisijungti** (rodyklė, einanti į duris)

- Atsidaro naršyklės langas su Tidepool prisijungimo puslapiu. Prisijunkite su el. pašto adresu ir slaptažodžiu, kuriuos sukūrėte 1 žingsnyje:

![Tidepool prisijungimo puslapis](../images/v4/Tidepool/tidepool_login.png)

- Sėkmingai prisijungus, naršyklė užsidaro, o Tidepool ekrane rodoma būsena „**Prisijungta**“. Žemiau esantis žurnalas rodo duomenų įkėlimus. Jei prisijungti nepavyksta, patikrinkite, ar prisijungimo duomenys teisingi ir ar patvirtinote savo el. pašto adresą Tidepool.

![Tidepool prijungtas](../images/v4/Tidepool/tidepool_status.png)

- Tidepool įskiepio „**Parametrai**“ atidarykite „**Ryšio nustatymai**“. Pagal numatymą „**Naudoti Nightscout ryšio nustatymus**“ yra įjungta, todėl Tidepool duomenis įkelia tomis pačiomis sąlygomis, kurias nustatėte Nightscout. Išjunkite tai, jei Tidepool norite atskirų sąlygų, pavyzdžiui, kad į Tidepool duomenys būtų įkeliami tik per Wi-Fi ir kraunant telefoną, o Nightscout naudotų ir mobiliuosius duomenis.

![Ryšio nustatymai, kai įjungta „Naudoti Nightscout ryšio nustatymus“](../images/v4/Tidepool/tidepool_connection_settings.png) ![Atskiri Tidepool ryšio nustatymai](../images/v4/Tidepool/tidepool_connection_settings_separate.png)

Daugiau informacijos, kaip naudoti duomenis, kai jie įkelti į Tidepool, rasite čia: [https://www.tidepool.org/viewing-your-data](https://www.tidepool.org/viewing-your-data)

(tidepool-menu)=
## Tidepool mygtukai

Tidepool ekrano viršutiniame dešiniajame kampe:

- Piktograma **Prisijungti** arba **Atsijungti** – prisijungti prie Tidepool paskyros arba atsijungti nuo jos. Rodoma tik viena iš jų: **Prisijungti**, kai esate atsijungę, **Atsijungti**, kai esate prisijungę. Prieš jus atjungdama, **AAPS** paprašo patvirtinti.
- Krumpliaračio piktograma – Tidepool nustatymai.

Mygtukai Tidepool ekrano apačioje:

- „**Įkelti dabar**“ – įkelti naujus duomenis iš karto, nelaukiant kito automatinio įkėlimo.
- „**Pilna sinchronizacija**“ – vėl įkelti visus **AAPS** saugomus duomenis.
- „**Išvalyti visus duomenis**“ – ištrinti **visus** duomenis, kuriuos **AAPS** įkėlė į jūsų Tidepool paskyrą. To atšaukti negalima. Naudokite tai tik klaidingiems arba pasikartojantiems duomenims pašalinti, tada paleiskite „**Pilna sinchronizacija**“, kad duomenys būtų įkelti iš naujo.
- „**Išvalyti žurnalą**“ – išvalyti Tidepool ekrane rodomą žurnalą.

![Tidepool ekranas ir jo mygtukai](../images/v4/Tidepool/tidepool_menu.png)

Tidepool sistemoje **AAPS** 4 įkelti duomenys rodomi su įrenginio pavadinimu **AAPS**. Jei Tidepool naudojote su senesne versija, žr. [Kas pasikeitė AAPS v4](#v4changes-tidepool). 
