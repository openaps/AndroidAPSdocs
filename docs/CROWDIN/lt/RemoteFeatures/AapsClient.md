(aapsclient-app)=
# Programėlė AAPSClient

**AAPSClient** yra papildoma **AAPS** programėlė: susieta programėlė antram telefonui – dažniausiai prižiūrinčio asmens, – kuri **seka** **AAPS** naudojantį asmenį. Nuo **AAPS** 4 versijos prižiūrintis asmuo taip pat gali nuotoliniu būdu **valdyti** ciklą pasirašytomis komandomis. Abu telefonai bendrauja per jūsų **Nightscout** svetainę; tiesioginis ryšys tarp telefonų nereikalingas.

```{admonition} Wording used on this page
:class: note
- **Klientas** = telefonas, kuriame veikia **AAPSClient**.
- **Pagrindinis įrenginys** = pagrindinis **AAPS** telefonas, kuris valdo pompą ir vykdo ciklą.
```

```{admonition} Which devices can run AAPSClient?
:class: note
From **AAPS** version 4, **AAPSClient** runs on Android phones and tablets, on Wear OS watches and on computers (Windows, Mac and Linux). On an iPhone there is no ready-made download: you build the app yourself. See the [table of downloads by device](#aapsclient-platforms).
```

```{contents} Table of contents
:depth: 2
:local: true
```

## Kas yra AAPSClient (ir kas ne)

**AAPSClient** atrodo ir veikia kaip **AAPS**, bet **neturi savo ciklo**:

- Joje **nėra APS algoritmo**, nėra **mokymo etapų** ir **nėra pompų tvarkyklių** – ji niekada pati nesuleidžia insulino.
- Įskiepių, kuriuos naudoja tik pagrindinė programėlė (**SMS komandos**, **Tidepool**, **Open Humans**), joje taip pat nėra.
- Kas joje *yra*: **NSClientV3** sinchronizacija, glikemijos šaltinių įskiepiai, duomenų transliavimas į **xDrip+** ir **Wear OS** / **Garmin** jungtys – viskas, ko reikia sekimui ir komandoms perduoti. Prie kliento prijungtas **Garmin** laikrodis gali rodyti duomenis, bet jo siunčiami angliavandeniai neįvedami ir jis negali prijungti ar atjungti pompos: klientas parodo pranešimą, o juos reikia įvesti **AAPS**.

Viską, ką paleidžiate iš **AAPSClient**, patikrina, apriboja, patvirtina ir **įvykdo pagrindinis įrenginys** (telefonas su pompa). Atskirame puslapyje [Pagrindinio įrenginio ↔ kliento valdymas](ClientMasterControl.md) paaiškinta, kaip tai veikia: kaip susieti du telefonus, kaip pagrindinis įrenginys parašo matomą patvirtinimo tekstą, kaip suleidžiamas kliente pradėtas bolusas ir kas nutinka, kai pagrindinis įrenginys neprisijungęs.

## Versijos: AAPSClient, AAPSClient2 ir AAPSClient3

Tame pačiame sekėjo telefone greta galima įdiegti iki trijų klientų programėlių, kurių kiekviena seka **kitą** asmenį: **AAPSClient** (geltonos pelėdos piktograma), **AAPSClient2** (mėlyna pelėda) ir – nauja **AAPS** 4 versijoje – **AAPSClient3** (žalia pelėda). Jų funkcijos vienodos. Skiriasi tik pavadinimas ir spalva (programėlės piktograma, valdiklio fonas ir būsenos skiltis pagrindiniame ekrane), kad jas galėtumėte atskirti. Kiekviena programėlė susieta su savo pagrindiniu įrenginiu. Daugiau informacijos rasite skyriuje [Apie AAPSClient, AAPSClient2 ir AAPSClient3](#remotecontrol-aapsclient-versions).

(aapsclient-platforms)=
## Kaip gauti programėlę

All the ready-made files are in the *Assets* list of the latest release on [GitHub](https://github.com/nightscout/AndroidAPS/releases/) (click *Assets* at the bottom of the release to expand it). In the table, *x.y.z* stands for the version number. Choose the file that matches your device:

| Įrenginys               | File to download                    | Notes                                                                                                                                                                                        |
| ----------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Android phone or tablet | `app-aapsclient-release_x.y.z.apk`  | Install it like the main app: see [Download and installation of AAPSClient](#RemoteControl_aapsclient) and [Transferring and installing](../SettingUpAaps/TransferringAndInstallingAaps.md). |
| Wear OS watch           | `wear-aapsclient-release_x.y.z.apk` | Goes with the AAPSClient app on the phone. See [Wear OS smartwatch](../WearOS/WearOsSmartwatch.md).                                                                                          |
| Windows computer        | `AAPSClient-x.y.z.msi`              | Open the file to install.                                                                                                                                                                    |
| Mac                     | `AAPSClient-x.y.z.dmg`              | See the note on macOS below the table.                                                                                                                                                       |
| Linux (Debian, Ubuntu)  | `aapsclient_x.y.z_amd64.deb`        | Install it with your package manager.                                                                                                                                                        |
| iPhone                  | none                                | There is no App Store version and no download. You build the app yourself, see [AAPSClient on an iPhone](#aapsclient-iphone).                                                                |

**Following two people?** Each file above also exists as *aapsclient2* / *AAPSClient2*. It is a second client app that installs next to the first one, so one device can follow two people (see [About AAPSClient, AAPSClient2 and AAPSClient3](#remotecontrol-aapsclient-versions)). **AAPSClient3** is not in the release assets: build it yourself ([build variants](#browserbuild-variant)).

**Files to ignore:** the *pumpcontrol* files (`app-pumpcontrol-release_…`, `wear-pumpcontrol-release_…`) are not a client. Leave them out.

**Mac: the first start.** The app is not notarized by Apple, so macOS blocks it the first time you open it. Click *Done*, then open *System Settings → Privacy & Security*, scroll down and click *Open Anyway*.

**Computer: how to connect.** A computer has no camera, so the QR code cannot be scanned. Set up **Nightscout** in the client, then on the master add the client with a **PIN** and type the 8-digit PIN in the client (**Pair with master**). See [Pairing with the master](#aapsclient-pairing-with-the-master).

**Same version everywhere.** The master and all its clients must run the same **AAPS** version. When you update the master, update the clients too.

(aapsclient-iphone)=
### AAPSClient on an iPhone

There is no **AAPSClient** in the App Store and no ready-made file to download, so you build the app yourself:

- You need a Mac with **Xcode** and an Apple developer account.
- The project is the `ios` folder of the [AndroidAPS repository on GitHub](https://github.com/nightscout/AndroidAPS/tree/master/ios).
- A build for a real iPhone is signed with your own Apple developer team. A build for the iPhone simulator does not need one.
- There is no step-by-step guide yet. This page will be updated when there is one.

The iPhone version pairs with the master like the others. Unlike the computer versions, the iPhone can scan the master's QR code with its camera.

## Pirmas paleidimas: trumpesnis sąrankos vedlys

Pirmą kartą paleista **AAPSClient** vykdo tą patį **Sąrankos vedlį**, kurį žinote iš **AAPS**, tik su daug mažiau žingsnių – sekėjo įrenginyje nereikia nustatyti profilio, insulino, pompos, APS ar mokymo etapų:

1. **Sveiki**, **Licencinė sutartis su naudotoju**, **Leidimai** ir **Pagrindinis slaptažodis** – taip pat kaip pagrindinėje programėlėje, žr. [AAPS sąrankos vedlys](../SettingUpAaps/SetupWizard.md).
2. Klientas **neklausia** **vienetų** ar **žemosios / aukštosios ribos**: jis jas paima iš pagrindinio telefono, kai tik prisijungia prie Nightscout. Vėliau juos galite matyti skiltyje **Nustatymai**, kur maža **telefono piktograma** rodo, kad jie [sinchronizuojami su pagrindiniu telefonu](#client-master-config-prefs). Juos redaguoti galima tik tada, kai pagrindinis įrenginys pasiekiamas.
3. **Nustatyti iš pagrindinio įrenginio** – pagrindiniame įrenginyje atidarykite **Valdymas → Autorizuoti klientai**, pridėkite šį telefoną su **QR kodu** ir čia bakstelėkite **Nuskaityti QR kodą**. Vienas nuskaitymas nustato Nightscout su paties šio telefono prieigos raktu, o jei kodas skirtas susiejimui, taip pat susieja telefoną. Telefonas taip pat perima pavadinimą, kuriuo buvo pridėtas pagrindiniame įrenginyje, kaip savo egzemplioriaus pavadinimą (raidės su diakritiniais ženklais tampa paprastomis raidėmis, „Miloš“ tampa „Milos“). **Po nuskaitymo sąranka baigta**: vedlys užsidaro, nes tolesni žingsniai tik parodytų, ką padarė kodas. Jei QR kodo neturite, praleiskite šį žingsnį. (Not on a computer: it has no camera, see [Getting the app](#aapsclient-platforms).)

   ![Žingsnis Nustatyti iš pagrindinio įrenginio su mygtuku Nuskaityti QR kodą](../images/v4/AapsClient/aapsclient_wizard_from_master.png)

4. **Ryšys** – įskiepių sąraše yra tik tai, ko reikia sekėjui (NSClientV3, xDrip+, Wear, Išorinės susietos programėlės, Garmin). Jei QR kodo nenuskaitėte, įjunkite **NSClientV3** ir įveskite **tą patį Nightscout URL** kaip pagrindiniame telefone bei prieigos raktą, įjungę **WebSocket** – tiksliai taip, kaip aprašyta skyriuje [Sinchronizacija](#RemoteControl_aapsclient). Websockets are **mandatory** for remote control from **AAPSClient**, on both phones.

   ![Žingsnis Ryšys kliento įrenginyje](../images/v4/AapsClient/aapsclient_wizard_communication.png)

5. **Susieti su pagrindiniu įrenginiu** – šis žingsnis yra **tik** kliento įrenginyje. Jis saugiu komandų kanalu su PIN kodu prijungia šį įrenginį prie pagrindinio įrenginio ir, kaip QR kodas, perima pavadinimą, kuriuo telefonas buvo pridėtas pagrindiniame įrenginyje. **Po susiejimo sąranka baigta.** Šį žingsnį taip pat galite praleisti ir susieti bet kada vėliau per **Valdymas → Susieti su pagrindiniu įrenginiu**.

   ![Žingsnis Susieti su pagrindiniu įrenginiu kliento vedlyje](../images/v4/AapsClient/aapsclient_wizard_pair_step.png)

6. **Kas naudoja šį telefoną?** – tik jei vedlyje nesusiejote: asmens, kuris naudoja šį telefoną, vardas. Pagal jį šis egzempliorius atskiriamas ataskaitose ir sinchronizacijoje.

(aapsclient-pairing-with-the-master)=

## Susiejimas su pagrindiniu įrenginiu

**Pagrindiniame įrenginyje** atidarykite **Valdymas → Autorizuoti klientai** ir pridėkite klientą. Susieti galima dviem būdais:

- **QR kodu** (greičiausias būdas, jei telefonas turi kamerą): nuskaitykite kodą vedlio žingsnyje „**Nustatyti iš pagrindinio įrenginio**“ arba per **Valdymas → Susieti su pagrindiniu įrenginiu → Nuskaityti QR kodą** ir patvirtinkite mygtuku „**Naudoti**“. Taip taip pat nustatomas Nightscout.
- **PIN kodu**: **kliento įrenginyje** atidarykite aukščiau aprašytą vedlio žingsnį (arba **Valdymas → Susieti su pagrindiniu įrenginiu**), įveskite vienkartinį PIN kodą, rodomą pagrindiniame įrenginyje, ir paspauskite „**Susieti**“. Tada klientas parodo, kuo jis ketina pasitikėti – patvirtinkite mygtuku „**Susieti**“:

![Patvirtinimas kliento įrenginyje prieš baigiant susiejimą](../images/v4/AapsClient/aapsclient_pair_confirm.png)

Jei susiejama vedlyje, sėkmingas susiejimas baigia sąranką ir atidaro pagrindinį ekraną. Pagrindiniame įrenginyje klientas rodomas kaip **Aktyvus** sąraše [Autorizuoti klientai](#client_master_master_setup). Vėliau **Valdymas → Susieti su pagrindiniu įrenginiu** rodo „*Jau susieta*“, telefono vaidmenį ir ar įjungtas sustiprintos apsaugos režimas:

![Valdymas → Susieti su pagrindiniu įrenginiu susietame kliente: Jau susieta, Vaidmuo: Prižiūrintis asmuo, Sustiprintos apsaugos režimas įjungtas](../images/v4/ClientMaster/pair_with_master_client.png) Visa susiejimo procedūra, saugumo informacija ir trikčių šalinimas aprašyti puslapyje [Pagrindinio įrenginio ↔ kliento valdymas](#client_master_client_setup).

Po susiejimo klientas iš pagrindinio įrenginio gauna savo Nightscout prieigos raktą (jei pagrindinis įrenginys turi administratoriaus prieigos raktą) tik su tomis teisėmis, kurių reikia klientui, ir nustoja naudoti prieigos raktą, kurį galbūt buvote įvedę. **AAPSClient** pati niekada nerašo terapijos ar KG į Nightscout: viskas, ką ji daro, siunčiama pagrindiniam įrenginiui, kuris tai ir įrašo. Žr. [Kliento nuosavas Nightscout prieigos raktas](#client-master-control-own-token).

Pagrindinis įrenginys nusprendžia, ką šis telefonas gali daryti, pagal jo **[vaidmenį](#client-master-control-roles)** (Tik peržiūra, Maistas, Prižiūrintis asmuo arba Administratorius). **Valdymas → Susieti su pagrindiniu įrenginiu** rodo telefono vaidmenį.

## Pagrindinis ekranas

Kliento pagrindinis ekranas atspindi sekamą ciklą:

![AAPSClient pagrindinis ekranas](../images/v4/AapsClient/aapsclient_home.png)

- **KG, grafikai, AIO / AAO ir profilis** gaunami iš Nightscout – tokie, kokius įkėlė pagrindinis įrenginys.
- Rodoma **ciklo būsena** yra **pagrindinio įrenginio** (klientas neturi savo ciklo). Kol klientas negavo pagrindinio įrenginio veikimo režimo iš Nightscout, veikimo režimo ženklelyje rodomas **klaustukas** (nežinoma).
- **Būsenos kortelėje** rodomas **sekamos pompos** rezervuaras ir baterija bei įkėlimo įrenginio baterija, paimti iš Nightscout įrenginio būsenos – klientas neturi pompos, todėl programėlėje niekur nėra vietinės pompos būsenos ir pompos valdymo.
- Apatinėje juostoje yra **Terapija**, **Scenarijai** ir **Valdymas**, kai klientas susietas (prieš susiejimą – tik **Valdymas**), – pompos ar mokymo etapų skirtukų nėra.

## Terapija ir veiksmai

Viskas meniu **Valdymas** veikia kaip pagrindinėje programėlėje, su vienu svarbiu skirtumu: kliento įrenginyje veiksmai, kurie keistų gydymą (bolusas, angliavandeniai, laikini tikslai, scenarijai…), yra **paslėpti, kol įrenginys nesusietas**, o susiejus jie **perduodami pagrindiniam įrenginiui** patvirtinti ir įvykdyti – žr. [Nuotolinio valdymo naudojimas](#client-master-control).

Išimtis yra įrašas **Profilis**: jis rodomas net **nesusietame** kliente, bet atsidaro **tik peržiūrai** – klientas rodo profilius, kuriuos gauna per Nightscout (jų reikia jo paties skaičiavimams), be redagavimo ar aktyvavimo mygtukų. Kai klientas **susietas**, profilių sąrašas sinchronizuojamas su pagrindiniu įrenginiu, ir profilius galite redaguoti bei aktyvuoti iš kliento kaip bet kurį kitą nuotolinį veiksmą.

**Nesusietame** kliente meniu **Valdymas** yra tik **Profilis** ir **Susieti su pagrindiniu įrenginiu**:

![Ekranas Valdymas nesusietame kliente: tik Profilis ir Susieti su pagrindiniu įrenginiu](../images/v4/AapsClient/aapsclient_manage_unpaired.png)

Raudona juosta „*Pagrindinis įrenginys nepasiekiamas. Kol ryšys neatkurtas, redaguoti negalima.*“ rodoma ir nesusietame kliente. Taip ir turi būti: dar nėra pagrindinio įrenginio, kurį būtų galima pasiekti. Juosta dingsta, kai klientas susietas, o pagrindinis įrenginys prisijungęs.

Kai klientas susietas, atsiranda gydymo veiksmai:

![Ekranas Valdymas susietame kliente, įskaitant įrašą Susieti su pagrindiniu įrenginiu](../images/v4/AapsClient/aapsclient_manage.png)

**Įrašo Pompa nėra** – klientas neturi pompos.

Jei pagrindinis įrenginys nepasiekiamas, ta pati juosta rodoma ir susietame kliente: gydymo veiksmai yra pilki, o viskas, ką bandote atlikti, užblokuojama prieš išsiunčiant. Klientas pastebi, kad pagrindinis įrenginys neprisijungęs, kai bandote atlikti veiksmą, ir vėl įjungia veiksmus, kai pagrindinis įrenginys vėl prisijungia.

![Ekranas Valdymas susietame kliente, kai pagrindinis įrenginys neprisijungęs: veiksmai po juosta pilki](../images/v4/AapsClient/aapsclient_manage_master_offline.png)

## Nustatymai, sinchronizuojami su pagrindiniu įrenginiu

Aktyvių įskiepių **konfigūracija** ir daugelis **nustatymų** sinchronizuojami tarp pagrindinio įrenginio ir su juo susietų klientų; sinchronizuojami elementai pažymėti maža **telefono piktograma** ir yra išjungti (su juosta „*Pagrindinis įrenginys nepasiekiamas*“), kol pagrindinis įrenginys nepasiekiamas. Tai aprašyta skyriuje [Konfigūracijos ir nustatymų keitimas](#client-master-config-prefs).

## AAPSClient išmaniajame laikrodyje

Wear OS laikrodį galima susieti su **kliento** telefonu; jo veiksmai per klientą perduodami pagrindiniam įrenginiui. Žr. [Wear OS](../WearOS/WearOsSmartwatch.md) ir [išmaniųjų laikrodžių galimybes skyriuje AAPS nuotolinis valdymas](#RemoteControl_smartwatches).
