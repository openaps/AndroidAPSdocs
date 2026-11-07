(client-master-control)=
# Pagrindinio įrenginio ↔ kliento valdymas (pasirašytas nuotolinis valdymas)

Nuo **AAPS** 4 versijos sekėjo telefonas su **AAPSClient** gali daug daugiau nei tik per Nightscout *įrašyti* terapiją: kai jis **susietas** su pagrindiniu telefonu, jis gali siųsti **pasirašytas komandas**, kurias pagrindinis telefonas (**pagrindinis įrenginys**) patikrina, patvirtina ir įvykdo – įskaitant **insulino boluso** suleidimą pagrindinio įrenginio pompa.

Šiame puslapyje paaiškinta, kaip tai veikia, kaip tai nustatyti ir naudoti.

```{contents} Table of contents
:depth: 2
:local: true
```

```{admonition} Wording used on this page
:class: note
- **Pagrindinis įrenginys** = pagrindinis **AAPS** telefonas, prijungtas prie pompos, kuriame veikia ciklas (programėlė `full`).
- **Klientas** = **AAPSClient** telefonas be pompos, kuris seka pagrindinį įrenginį, o dabar jį ir *valdo*.
- Abu telefonai turi būti prijungti prie **tos pačios Nightscout** svetainės. Visas ryšys ir toliau vyksta per Nightscout – tiesioginis ryšys tarp telefonų nereikalingas.
```

---

## KEEP

```{admonition} Coming from AAPS v3?
:class: note
**AAPS** v3 versijoje **AAPSClient** galėjo tik įrašyti nepasirašytus terapijos įrašus į Nightscout ir negalėjo suleisti boluso. Dabar nuotoliniam valdymui reikia vienkartinio [susiejimo](#client_master_master_setup). Taip pat žr. [Kas pasikeitė AAPS v4](#v4changes-remote-control).
```

**AAPS** v4 naudoja atskirą **Client-Control** (kliento valdymo) kanalą. Jis vis dar veikia per jūsų Nightscout svetainę (kolekcijoje `settings`), bet kiekvienas pranešimas **kriptografiškai pasirašomas** slaptu raktu, kurį žino tik du telefonai. Slaptas raktas perduodamas vieną kartą, **susiejimo** metu, ir iškart po to pakeičiamas nauju, todėl jis niekada nekeliauja atviru tekstu.

Pagrindinė taisyklė: **sprendžia pagrindinis įrenginys**:

1. Klientas siunčia *ketinimą* („bolusas 2 V“, „paleisti scenarijų Sportas“, „nustatyti šį laikiną tikslą“…).
2. **Pagrindinis įrenginys** veiksmą perskaičiuoja ir **apriboja** pagal **savo** dabartinius duomenis (profilį, AIO, AAO, dabartinį laikiną tikslą, pompą) ir **pats suformuoja tikslų patvirtinimą**, kurį matys naudotojas.
3. Klientas (arba laikrodis) rodo **pagrindinio įrenginio** patvirtinimo tekstą – jis niekada nekuria savo.
4. Patvirtinus pagrindinis įrenginys veiksmą **įvykdo vieną kartą** ir praneša rezultatą klientui.

Ką tai reiškia jums:

- **Pasirašytos komandos**: komandas gali siųsti tik jūsų susieti klientai (kiekvienas klientas turi savo susiejimo slaptą raktą ir parašą). Senos arba pakartotinai siunčiamos komandos atmetamos.
- **Kiekvienam klientui – vaidmuo**: jūs nusprendžiate, ką gali daryti kiekvienas klientas, nuo *Tik peržiūra* iki *Administratorius* – žr. [Kliento vaidmenys](#client-master-control-roles).
- **Insulino bolusas iš kliento**: pagrindinis įrenginys jį suleidžia savo pompa, o klientas rodo suleidimo eigą.
- **Sprendžia pagrindinis įrenginys**: jis kiekvieną veiksmą apriboja pagal savo apribojimus ir parašo patvirtinimą, rodomą kliente.
- **Terapiją keičia tik susieti klientai**: kol įjungtas kliento valdymas, pagrindinis įrenginys nebepriima terapijos ar pakeitimų, įvestų tiesiai į Nightscout – žr. [Sustiprintos apsaugos režimas](#client-master-control-hardened-mode).
- **Kiekvienas klientas gauna savo Nightscout prieigos raktą** tik su tomis teisėmis, kurių klientui reikia – žr. [Kliento nuosavas Nightscout prieigos raktas](#client-master-control-own-token).
- **Pagrindinis įrenginys nepasiekiamas**: veiksmai blokuojami ir rodomas aiškus pranešimas.
- **Kliento prieigą atšaukti** galima vienu paspaudimu (kiekvienam klientui atskirai), arba pagrindiniame įrenginyje vienu jungikliu sustabdyti visus klientus.

Veiksmai, kuriuos galima paleisti iš kliento: **bolusas**, **angliavandeniai / i-AV**, **laikinas tikslas** (nustatyti ir atšaukti), **profilio keitimas**, **ciklo / veikimo režimo** keitimas, **laikina bazė** (nustatyti ir atšaukti), **ištęstas bolusas** (nustatyti ir atšaukti), **insulino pasirinkimas** ir **[scenarijai](../DailyLifeWithAaps/Scenes.md)**. Dalis **nustatymų** taip pat sinchronizuojama abiem kryptimis tarp pagrindinio įrenginio ir klientų.

---

## Vaidmenys ir būtinos sąlygos

```{admonition} Before you start
:class: important
- **Pagrindiniame įrenginyje** veikia įprasta `full` **AAPS** versija, ir jis prijungtas prie jūsų pompos.
- **Pagrindinis įrenginys** naudoja **NSClientV3** su jūsų Nightscout ir rodo *Prisijungta*. Suteikite jam savo Nightscout **admin prieigos raktą**: su juo pagrindinis įrenginys gali kiekvienam klientui sukurti atskirą prieigos raktą ir parodyti jį klientui kaip QR kodą.
- **Kliente** veikia **[AAPSClient](AapsClient.md)** (arba **AAPSClient2** / **AAPSClient3** kitiems pacientams – žr. [Apie AAPSClient, AAPSClient2 ir AAPSClient3](#remotecontrol-aapsclient-versions)). Jis turi naudoti **tą patį** Nightscout. Jei jį nustatote pagrindinio įrenginio QR kodu, klientas gauna Nightscout adresą ir prieigos raktą iš pagrindinio įrenginio; kitu atveju pirmiausia patys nustatykite jame **NSClientV3**.
- Websockets are **mandatory** for remote control from **AAPSClient**, on both phones. A command is only valid for a few seconds: without websockets it fails instead of arriving late. Kol įjungtas kliento valdymas, **AAPS** laiko websockets įjungtus pagrindiniame įrenginyje ir susietuose klientuose. Your Nightscout host must support websockets.
```

Susiejimas ir sinchronizacija yra du skirtingi dalykai:

- **Sinchronizacija** (duomenys: KG, terapija, profilis) nustatoma kaip anksčiau – žr. [Sinchronizacija](#RemoteControl_aapsclient). Pagrindinio įrenginio QR kodas gali tai padaryti už jus kliente.
- **Susiejimas** (valdymas: čia aprašytas pasirašytų komandų kanalas) yra naujas žingsnis, aprašytas toliau.

---

## Nustatymas

(client_master_master_setup)=
### 1. Pagrindiniame įrenginyje – įjunkite valdymą ir pridėkite klientą

Pagrindiniame įrenginyje atidarykite ekraną **Valdymas** ir pasirinkite **Autorizuoti klientai**.

Įjunkite **Leisti valdyti iš kliento** (pagal numatymą **išjungta**). Tai pagrindinis išjungimo jungiklis: kai jis išjungtas, joks klientas negali siųsti komandų, bet susieti klientai išlieka, todėl vėliau valdymą galite vėl įjungti. Jį įjungus, įsijungia ir [Sustiprintos apsaugos režimas](#client-master-control-hardened-mode), rodomas kaip „*Sustiprintos apsaugos režimas įjungtas*“ su **(i)**, kuris jį paaiškina. [Paprastajame režime](#preferences-simple-mode) kliento valdymas visada įjungtas, todėl jungiklis nerodomas.

![Ekranas Autorizuoti klientai pagrindiniame įrenginyje](../images/v4/ClientMaster/authorized_clients_master.png)

Norėdami pridėti klientą, paspauskite mygtuką **+** (apačioje dešinėje). Lange **Naujas klientas**:

1. Laukelyje **Įrenginio pavadinimas** įveskite pavadinimą, kad atpažintumėte telefoną sąraše.
2. Skiltyje **Kaip nustatytas šis telefonas?** pasirinkite būdą (žr. lentelę žemiau).
3. Pasirinkite jo **[vaidmenį](#client-master-control-roles)**. Niekas nepasirenkama už jus: tinkamas vaidmuo priklauso nuo to, kas naudoja telefoną.

![Langas Naujas klientas pagrindiniame įrenginyje: įrenginio pavadinimas, kaip nustatytas telefonas ir jo vaidmuo](../images/v4/ClientMaster/new_client_master.png)

| Būdas    | Ką gauna naujas telefonas                                                         | Kada naudoti                                                                                                                    |
| -------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **KEEP** | Nightscout adresą, savo Nightscout prieigos raktą ir susiejimą – vienu nuskaitymu | naujas telefonas turi kamerą: greičiausias būdas, nieko nereikia vesti                                                          |
| **KEEP** | Nightscout adresą ir savo Nightscout prieigos raktą, be susiejimo                 | telefonas turi tik **rodyti** duomenis ir niekada nesiųsti komandų                                                              |
| **KEEP** | tik susiejimą; telefono Nightscout nustatymai lieka tokie, kokie yra              | telefonas neturi kameros (arba pagrindinis įrenginys negali kurti prieigos raktų); jis jau turi būti prijungtas prie Nightscout |

Abiem QR kodo būdams reikia **admin prieigos rakto** pagrindinio įrenginio **NSClientV3** nustatymuose, nes pagrindinis įrenginys sukuria kliento prieigos raktą Nightscout. Be jo QR kodo parinktys rodomos, bet jų pasirinkti negalima, o lange paaiškinama kodėl; **PIN** veikia visada.

#### Su QR kodu

Paspauskite **OK**: pagrindinis įrenginys sukuria kliento Nightscout prieigos raktą ir parodo **QR kodą**. Kodas, kuris kartu ir susieja, galioja apie **dvi minutes**; ekrane rodomas atgalinis laikmatis, o kai klientas susiejamas, ekranas užsidaro savaime. Nuskaitykite jį naujame telefone, kaip aprašyta skyriuje [Kliente](#client_master_client_setup).

```{admonition} The QR code is a secret
:class: warning
Kiekvienas, pamatęs QR kodą, gali skaityti jūsų Nightscout, o kodas, kuris susieja, perduoda ir susiejimą. Rodykite jį tik naujam telefonui. Kol kodas rodomas ekrane, **AAPS** neleidžia daryti ekrano kopijų.
```

![Pagrindinio įrenginio QR kodo ekranas su atgaliniu laikmačiu (kodas sulietas)](../images/v4/ClientMaster/qr_code_master.png)

#### Su PIN

Paspauskite **OK**: pagrindinis įrenginys parodo 8 skaitmenų **susiejimo PIN**, padalytą į dvi grupes po keturis skaitmenis (pvz., `1234 5678`). Šis PIN yra **vienkartinis** ir **baigia galioti maždaug po dviejų minučių**. As with the QR code, the master refuses a client name that is already in its list: each client gets its own Nightscout token under its name.

![Pagrindinio įrenginio susiejimo ekranas su vienkartiniu PIN (čia rodomas PIN jau negalioja)](../images/v4/ClientMaster/pairing_pin_master.png)

```{admonition} The pairing PIN is a secret
:class: warning
PIN apsaugo susiejimo slaptą raktą, kuris perduodamas per Nightscout. Pasakykite jį tik tam įrenginiui, kurį susiejate, neskelbkite jo viešai, o jei jo nenaudojate, leiskite jam nustoti galioti. Naują PIN visada galima sugeneruoti dar kartą paspaudus **+**.
```

(client_master_client_setup)=
### 2. Kliente – susiekite su pagrindiniu įrenginiu

#### QR kodo nuskaitymas

Pagrindinio įrenginio QR kodą galite nuskaityti dviejose vietose:

- kliento **Sąrankos vedlyje**, žingsnyje „**Nustatyti iš pagrindinės AAPS programėlės**“, kuris yra prieš Nightscout žingsnį. Tada vienas nuskaitymas nustato Nightscout, o jei kodas susieja, ir susiejimą, todėl sąranka baigta: vedlys užsidaro ir atsidaro pagrindinis ekranas;
- bet kada vėliau per **Valdymas → Susieti su pagrindiniu įrenginiu → Nuskaityti QR kodą**.

Pirmą kartą **AAPSClient** paprašys leidimo naudoti **kamerą**. Jei atsisakysite, ekrane bus parašyta, kad kamera reikalinga. Leidimą galėsite suteikti paspaudę **Bandyti dar kartą** arba vietoj to susieti naudodami PIN.

Nukreipkite kamerą į kodą. Klientas parodo, ką daro kodas – Nightscout adresą ir, jei kodas susieja, pagrindinį įrenginį, su kuriuo bus susieta – ir klausia „**Naudoti šį kodą?**“. Paspauskite **Naudoti**: klientas įjungia **NSClientV3**, pakeičia savo Nightscout adresą ir prieigos raktą kode esančiais ir įjungia websockets. Kodas, kuris susieja, susieja ir telefoną; vos prisijungęs prie Nightscout, telefonas pasisveikina su pagrindiniu įrenginiu.

![Kliento sąrankos vedlio žingsnis Nustatyti iš pagrindinės AAPS programėlės](../images/v4/AapsClient/aapsclient_wizard_from_master.png)

```{admonition} Scanning is available on Android
:class: note
A computer without camera: use the PIN there.
```

#### PIN įvedimas

Kliente atidarykite **Valdymas → Susieti su pagrindiniu įrenginiu** (arba vedlio žingsnį **Susieti su pagrindiniu įrenginiu**, po Nightscout žingsnio), **įveskite 8 skaitmenų PIN**, rodomą pagrindiniame įrenginyje, ir paspauskite **Susieti**. Klientas naudodamas PIN saugiai gauna susiejimo pasiūlymą per Nightscout, tada klausia „**Susieti su šiuo pagrindiniu įrenginiu?**“ ir parodo pagrindinio įrenginio identifikatorių. Paspauskite **Susieti**, kad patvirtintumėte (ekrano kopiją rasite skyriuje [Susiejimas su pagrindiniu įrenginiu](#aapsclient-pairing-with-the-master)).

![Kliento ekranas Susieti su pagrindiniu įrenginiu prieš susiejimą – čia įveskite PIN](../images/v4/ClientMaster/pair_with_master_unpaired.png)

#### Po susiejimo

Susietas klientas siunčia pagrindiniam įrenginiui **Hello** (pasisveikinimą) ir pagrindinio įrenginio sąraše **Autorizuoti klientai** rodomas kaip **Aktyvus** su laiku *„Paskutinį kartą matytas“*. Klientas savo [vaidmenį](#client-master-control-roles) sužino susiejimo metu, todėl iš karto rodo tinkamus mygtukus. Susiejimas Sąrankos vedlyje užbaigia vedlį. To paties žingsnio metu abu telefonai pakeičia susiejimo slaptą raktą nauju, kuris niekada nebuvo perduotas (žr. [Saugumo pastabos](#client-master-control-security)), o PIN kodu nustatytas klientas gauna savo Nightscout prieigos raktą (žr. [Kliento nuosavas Nightscout prieigos raktas](#client-master-control-own-token)). Klientas vienu metu gali būti susietas tik su **vienu** pagrindiniu įrenginiu; norėdami susieti su kitu pagrindiniu įrenginiu, pirmiausia paspauskite **Atsieti**.

![Kliento ekranas Susieti su pagrindiniu įrenginiu (jau susieta)](../images/v4/ClientMaster/pair_with_master_client.png)

### 3. Klientų tvarkymas

Pagrindinio įrenginio ekrane **Autorizuoti klientai** bet kada galite:

- **Pakeisti kliento vaidmenį** keturių mygtukų eilute po jo pavadinimu. Naujas vaidmuo įsigalioja iš karto, iš naujo susieti nereikia.
- **Matyti, kokiu Nightscout prieigos raktu** klientas rašo duomenis: „*Nuosavas Nightscout prieigos raktas*“ – tai, ko reikia. Raudona eilutė „*Naudoja Nightscout prieigos raktą …, kuris suteikia daugiau teisių, nei reikia klientui*“ reiškia, kad klientas vis dar naudoja prieigos raktą su didesnėmis teisėmis, dažniausiai jūsų admin prieigos raktą – žr. [Kliento nuosavas Nightscout prieigos raktas](#client-master-control-own-token).
- **Atšaukti** vieno kliento prieigą – paspauskite šalia jo esančią **šiukšliadėžės** piktogramą. Klientas nebegalės siųsti komandų, kol nebus vėl susietas. Ištrinamas ir jo nuosavas Nightscout prieigos raktas, todėl jis nebegalės ir skaityti jūsų Nightscout.
- **Sustabdyti visą valdymą**, neprarandant susiejimų – išjunkite **Leisti valdyti iš kliento**.

Telefonai, nustatyti naudojant **QR kodas: tik Nightscout**, rodomi po klientais, skiltyje „**Tik Nightscout duomenų skaitymas**“. Kiekvienam iš jų galite vėl parodyti QR kodą (kad vėl nustatytumėte tą patį telefoną) arba ištrinti jo prieigos raktą – taip baigsis jo prieiga prie jūsų Nightscout.

![Autorizuoti klientai su susietu klientu (vaidmens mygtukai, nuosavas Nightscout prieigos raktas) ir telefonu skiltyje Tik Nightscout duomenų skaitymas](../images/v4/ClientMaster/authorized_clients_roles.png)

---

(client-master-control-roles)=
## Kliento vaidmenys

Kiekvienas susietas klientas turi **vaidmenį**. Pagrindinis įrenginys jį tikrina kiekvienai komandai, o klientas rodo tik tai, ką leidžia jo vaidmuo. Naujas vaidmuo įsigalioja iš karto, iš naujo susieti nereikia. Vaidmenys papildo vienas kitą: kiekvienas gali daryti viską, ką gali ankstesnis.

| KEEP     | Klientas gali                                                                                                                                                                                                                                     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **KEEP** | tik rodyti duomenis. Jis lieka susietas, todėl yra paruoštas, kai suteiksite jam aukštesnį vaidmenį.                                                                                                                                              |
| **KEEP** | suleisti bolusą, naudoti boluso patarėją ir Greitąjį vedlį, įvesti angliavandenius ir sustabdyti vykdomą bolusą. Čia įvesti angliavandeniai gali paskatinti ciklą suleisti daugiau insulino.                                                      |
| **KEEP** | daryti viską, ką naudotojas daro **AAPS**: laikini tikslai, profilio ir insulino keitimas, ciklo režimas, laikina bazė, ištęstas bolusas, scenarijai, terapijos įrašai, kalibracijos ir įrašų šalinimas. Jis negali keisti nustatymų ar ruošinių. |
| **KEEP** | daryti viską, įskaitant nustatymus ir ruošinius (Greitasis vedlys, laikino tikslo ruošiniai, scenarijai, profiliai, automatizacija, insulinas).                                                                                                   |

Ekrano **Autorizuoti klientai** viršuje esantis **(i)** rodo tą patį paaiškinimą. Kliente **Valdymas → Susieti su pagrindiniu įrenginiu** rodo telefono vaidmenį.

---

(client-master-control-hardened-mode)=
## KEEP

Kai įjungta **Leisti valdyti iš kliento**, pagrindinis įrenginys veikia **Sustiprintos apsaugos režimu**: jis priima pakeitimus tik iš susietų klientų. Jis **nepriima** terapijos, laikinų tikslų, profilio keitimų, veikimo režimo keitimų ar įrašų šalinimo, jei tai atliekama tiesiai Nightscout, pavyzdžiui, Nightscout svetainėje ar kitose programėlėse.

- Kol įjungtas Sustiprintos apsaugos režimas, duomenų priėmimo iš Nightscout nustatymai (**NSClientV3 → Sinchronizacija**) paslėpti; **AAPS** juos naudoja taip, lyg jie būtų išjungti.
- Pagrindinis įrenginys ir toliau **siunčia** visus savo duomenis į Nightscout, įskaitant KG, ir laiko **websockets** įjungtus.
- Jei pagrindinis įrenginys gauna **KG iš Nightscout**, jis ir toliau KG ima iš ten.
- Norėdami įkelti istoriją į **naują** pagrindinį įrenginį, **NSClientV3** naudokite **Pilna sinchronizacija**: ji perima viską, kas yra Nightscout, įskaitant profilius.
- [SMS komandoms](SMSCommands.md) tai įtakos neturi.

Susietas klientas laikosi pagrindinio įrenginio Sustiprintos apsaugos režimo: jis laiko websockets įjungtus, ir jame paslėpti tie patys Nightscout nustatymai. Nesusietas klientas išlaiko savo nustatymus.

[Paprastasis režimas](#preferences-simple-mode) visada įjungia Sustiprintos apsaugos režimą. Norėdami jį išjungti, išeikite iš Paprastojo režimo ir pagrindiniame įrenginyje išjunkite **Leisti valdyti iš kliento**.

```{admonition} Why hardened mode
:class: note
Viskas, ką siunčia susietas klientas, yra pasirašyta, o pagrindinis įrenginys tai patikrina ir patvirtina. Nightscout svetainėje įvesta terapija – ne: ją galėtų pridėti bet kas, turintis rašymo prieigą prie jūsų Nightscout. Sustiprintos apsaugos režimu tik pasirašytos komandos gali pakeisti tai, ką daro pagrindinis įrenginys.
```

---

(client-master-control-own-token)=
## Kliento nuosavas Nightscout prieigos raktas

Klientui admin prieigos rakto nereikia. Jis tik skaito jūsų Nightscout ir per jį siunčia komandas pagrindiniam įrenginiui; pats jis nieko neįkelia. Todėl pagrindinis įrenginys kiekvienam klientui suteikia atskirą Nightscout prieigos raktą tik su šiomis teisėmis:

- skaityti viską,
- rašyti į kolekciją `settings` – kanalą į pagrindinį įrenginį,
- atidėti (nutildyti) Nightscout aliarmus.

Prieigos raktas priklauso Nightscout vaidmeniui, pavadintam **`aaps-client`**, kurį pagrindinis įrenginys sukuria pirmą kartą, kai jo prireikia. Vaidmenį ir prieigos raktus (pavadintus `aaps-` ir kliento pavadinimu) galite matyti savo Nightscout svetainės **Admin tools** (administravimo įrankiuose). Jei vaidmuo ten pakeičiamas, pagrindinis įrenginys jį atstato kitą kartą, kai kuria prieigos raktą arba kai atidarote **Autorizuoti klientai**.

Kaip klientas gauna savo prieigos raktą:

- **Nustatytas QR kodu**: prieigos raktas yra kode.
- **Susietas PIN kodu** (arba susietas anksčiau, nei atsirado ši funkcija): po susiejimo pagrindinis įrenginys per susietą kanalą užšifruotai siunčia klientui jo nuosavą prieigos raktą. Klientas pirmiausia patikrina, ar su juo pavyksta prisijungti, ir tada jį naudoja vietoj turėto prieigos rakto. Tam pagrindiniame įrenginyje reikia admin prieigos rakto; be jo klientas pasilieka savo prieigos raktą, o jo kortelėje pagrindiniame įrenginyje rodoma raudona eilutė.

**Klientas pasilieka savo prieigos raktą.** Kai pagrindinis įrenginys pamato, kad klientas rašo savo nuosavu prieigos raktu, jis to kliento komandas priima tik su tuo prieigos raktu. Komanda, parašyta kitu prieigos raktu (pavyzdžiui, vėliau kliente įvestu admin prieigos raktu arba kito kliento prieigos raktu), atmetama, nors klientas ir susietas, o klientas rodo „*Pagrindinis telefonas atmetė komandą: šis telefonas į Nightscout siunčia duomenis naudodamas ne jam skirtą prieigos raktą*“. Tai raudonai parašyta ir jo kortelėje pagrindiniame įrenginyje. Klientas vis tiek rodomas kaip prisijungęs, todėl galite matyti, kas negerai. Norėdami tai ištaisyti, pagrindiniame įrenginyje pašalinkite klientą ir pridėkite jį iš naujo.

Pagrindinis įrenginys niekada neištrina ir nekeičia Nightscout prieigos rakto, kurio jis nesukūrė (rakto su kitais vaidmenimis nei `aaps-client`): jie yra jūsų. Kliento nuosavą prieigos raktą jis ištrina, kai pašalinate klientą.

---

## Nuotolinio valdymo naudojimas

### Veiksmo paleidimas iš kliento

Klientą naudokite lygiai taip pat, kaip patį telefoną: atidarykite **Angliavandeniai**, **Insulinas**, **Laikinas tikslas**, **Profilis**, **Scenarijai**, langą **Valdymas** ir kt., ir įveskite reikšmes.

Kai patvirtinate, klientas trumpam parodo **„Jungiamasi prie pagrindinio įrenginio…“**, **pagrindinis įrenginys** apskaičiuoja ir apriboja veiksmą, o tada klientas parodo **paties pagrindinio įrenginio patvirtinimą** – tas pačias eilutes, reikšmes ir spalvas, kurias pagrindinis įrenginys rodytų savo ekrane. Peržiūrėkite jas ir paspauskite **OK**, kad tęstumėte.

![Scenarijaus patvirtinimas, suformuotas pagrindinio įrenginio ir rodomas kliente](../images/v4/ClientMaster/confirmation_master_authored.png)

Tas pats galioja ir paprastam angliavandenių įrašui – patvirtinimui rodomas kiekis yra tas, kurį apskaičiavo pagrindinis įrenginys:

![Angliavandenių patvirtinimas, suformuotas pagrindinio įrenginio](../images/v4/ClientMaster/carbs_confirmation_client.png)

Jums patvirtinus, pagrindinis įrenginys veiksmą įvykdo vieną kartą, o rezultatas parodomas kliente.

### Insulino bolusas iš kliento

Tai pagrindinė nauja v4 galimybė. Kliente pradėtą bolusą **suleidžia pagrindinis įrenginys savo pompa**; pagrindinis įrenginys jį apriboja pagal savo apribojimus, o klientas rodo **suleidimo eigą realiu laiku** (ir aliarmą, jei pompa praneša apie klaidą).

```{admonition} Boluses are always confirmed and capped on the master
:class: note
Klientas niekada pats nesprendžia, kiek insulino suleisti. Pagrindinis įrenginys kiekį perskaičiuoja ir apriboja, jūs patvirtinate pagrindinio įrenginio pateiktą kiekį, ir tik tada jis suleidžiamas.
```

(clientmastercontrol-when-the-master-is-offline)=
### Kai pagrindinis įrenginys nepasiekiamas

Jei pagrindinis įrenginys nepasiekiamas (jo telefonas išjungtas / miega, neprisijungęs prie Nightscout arba neveikia websockets), valdymo veiksmai kliente **blokuojami dar prieš ką nors išsiunčiant**, ir gaunate aiškų pranešimą. Niekas nepritaikoma tik iš dalies.

![Kliento pranešimas, kai pagrindinis įrenginys nepasiekiamas](../images/v4/ClientMaster/master_offline_error.png)

Klientas automatiškai iš naujo tikrina, ar pagrindinis įrenginys pasiekiamas, ir vėl įjungia valdymą, kai šis vėl prisijungia.

(clientmastercontrol-wear-os-on-a-client)=

### Wear OS (laikrodis) kliente

Laikrodis, susietas su **kliento** telefonu, savo veiksmus per klientą perduoda pagrindiniam įrenginiui (laikrodis → klientas → pagrindinis įrenginys). Laikrodis rodo **pagrindinio įrenginio** patvirtinimo eilutes ir tikrąjį rezultatą, kaip ir telefonas. Laikrodžio nustatymas nepasikeitė – žr. [Wear OS](../WearOS/WearOsSmartwatch.md).


<!-- 📷 SCREENSHOT NEEDED (optional): watch confirmation screen relayed from the master,
     and/or the "Contacting master" state on the watch. Requires a paired Wear OS device. -->

---

(client-master-config-prefs)=
## Konfigūracijos ir nustatymų keitimas

Susiejimas ne tik perduoda pavienius veiksmus – jis taip pat palaiko vienodą **konfigūraciją** ir daugelį **nustatymų** pagrindiniame įrenginyje ir jo klientuose.

### Konfigūracija (kurie įskiepiai aktyvūs)

Aktyvūs **įskiepiai** (DKS algoritmas, jautrumas, glodinimas, …) pasirenkami **pagrindiniame įrenginyje** ir **perkeliami** į kiekvieną susietą klientą. Kliente šie pasirinkimai ekrane [Konfigūracija](#configuration_sync_icon) pažymėti maža **telefono piktograma** – pakeiskite juos pagrindiniame įrenginyje, ir klientai automatiškai pasikeis, ir atvirkščiai.

Kliente telefono piktograma rodoma prie *Glodinimas*, *Kalibravimas*, *Jautrumo nustatymas* ir *DKS* (sinchronizuojama iš pagrindinio įrenginio), bet ne prie *Ryšys*:

![Konfigūracijos sąrašas kliente – telefono piktograma žymi kategorijas, sinchronizuojamas su pagrindiniu įrenginiu](../images/v4/ClientMaster/configuration_client.png)

Kiekvieno įrenginio unikalūs ryšio duomenys – svarbiausia, **NSClient Nightscout URL / prieigos raktas** – *nesinchronizuojami*. Kiekvienas telefonas turi savo; kliente jie gaunami iš pagrindinio įrenginio QR kodo arba juos nustatote patys.

### Profiliai

Jūsų **profilių sąrašas** taip pat sinchronizuojamas tarp pagrindinio įrenginio ir susietų klientų. Susietame kliente **Valdymas → Profilis** rodo tuos pačius profilius kaip pagrindinis įrenginys; galite profilį **redaguoti** arba **aktyvuoti**, ir – kaip ir bet kuri kita komanda – pakeitimas siunčiamas į **pagrindinį įrenginį**, pritaikomas ten ir sinchronizuojamas atgal.

Pirmą kartą aktyvuodamas profilį naujai įdiegtame kliente, klientas gali parodyti „*Insulinas dar nepasirinktas*“ ir paprašyti **pasirinkti insuliną**. Pasirinkite insuliną, kuris aktyvus pagrindiniame įrenginyje (jį rodo pagrindinio įrenginio **Valdymas → Insulino nustatymai**).

**Nesusietame** kliente profilio ekranas vis tiek pasiekiamas, bet **tik peržiūrai**: klientas rodo profilius, kuriuos gauna per Nightscout (jų reikia jo paties skaičiavimams), bet redagavimo ar aktyvavimo mygtuko nėra – nėra pagrindinio įrenginio, kuriam siųsti pakeitimą.

### Nustatymai

Dalis **nustatymų** yra **dvikrypčiai**: juos galite keisti **pagrindiniame įrenginyje arba susietame kliente**, o pakeitimas sinchronizuojamas į kitą pusę. Kai tokį nustatymą pakeičiate kliente, jis pasirašytu kanalu siunčiamas pagrindiniam įrenginiui, pritaikomas ten, o galutinė reikšmė siunčiama atgal – todėl kliente visada matote tai, ką išsaugojo pagrindinis įrenginys. Jei tas pats nustatymas beveik tuo pačiu metu pakeičiamas dviejuose įrenginiuose, **galioja naujausias pakeitimas**. Nustatymo su slankikliu nauja reikšmė išsiunčiama, kai atitraukiate pirštą.

Nustatymuose ta pati maža **telefono piktograma** žymi atskirus sinchronizuojamus nustatymus. Pavyzdyje žemiau *Įsisavinimo ribinis laikas* sinchronizuojamas (telefono piktograma), o nustatymai be piktogramos galioja tik tame įrenginyje:

![Įskiepio nustatymai – telefono piktograma žymi sinchronizuojamus nustatymus](../images/v4/ClientMaster/preferences_synced_icon.png)

```{admonition} The master must be online to change synced settings from a client
:class: note
Kadangi išsaugotą reikšmę lemia pagrindinis įrenginys, norint iš kliento keisti pagrindinio įrenginio valdomą konfigūracijos elementą ar dvikryptį nustatymą, pagrindinis įrenginys turi būti **pasiekiamas**. Kai pagrindinis įrenginys nepasiekiamas, šie valdymo elementai kliente išjungiami (žr. [Kai pagrindinis įrenginys nepasiekiamas](#clientmastercontrol-when-the-master-is-offline)).
```

---

(client-master-control-security)=
## Saugumo pastabos

```{admonition} How the channel is protected
:class: tip
- **Susiejimo slaptas raktas**: pagrindinis įrenginys jį vieną kartą perduoda klientui – apsaugotą PIN kodu Nightscout dokumente arba QR kode – ir abu jį saugo užšifruotą.
- **Naujas slaptas raktas iškart po susiejimo**: pirmasis kliento pranešimas po susiejimo pradeda raktų mainus, ir nuo tada abu telefonai naudoja slaptą raktą, kuris niekada nebuvo perduotas. Slaptas raktas, kurį kas nors galėjo matyti (nufotografuotas QR kodas, iš Nightscout perskaitytas PIN pasiūlymas), po to nebetinka. Telefonai, susieti anksčiau, nei atsirado ši funkcija, po atnaujinimo tai padaro vieną kartą.
- **Kiekviena komanda pasirašoma** (HMAC). Pagrindinis įrenginys atmeta viską, kieno parašas neatitinka susieto kliento.
- **Pakartotinis siuntimas neleidžiamas** naudojant kiekvieno kliento didėjantį skaitiklį, o kiekviena komanda **nustoja galioti** po trumpo galiojimo laiko.
- **Mažiausios teisės Nightscout**: kiekvienas klientas turi [savo Nightscout prieigos raktą](#client-master-control-own-token), kuriuo galima tik skaityti ir rašyti į kliento valdymo kanalą. Kai klientas jį panaudoja, pagrindinis įrenginys jo komandas priima tik su tuo prieigos raktu. Pašalinus klientą, prieigos raktas ištrinamas.
- **Tik pasirašyti pakeitimai**: [Sustiprintos apsaugos režimu](#client-master-control-hardened-mode) pagrindinis įrenginys nepaiso terapijos pakeitimų, įvestų tiesiai į Nightscout.
- **Pagrindinis įrenginys pasirašo tai, kuo dalijasi**: nustatymai, klientų sąrašas ir ženklas „pagrindinis įrenginys veikia“, kuriuos pagrindinis įrenginys įrašo į Nightscout savo klientams, turi pagrindinio įrenginio parašą. Klientas juos priima tik tada, kai parašas yra pagrindinio įrenginio, todėl kito kliento prieigos raktas negali jų pakeisti. Klientas sužino pagrindinio įrenginio raktą susiejimo metu, o telefonas, kuris tik skaito Nightscout, – iš QR kodo. Atmestas dokumentas NSClient žurnale rodomas kaip „*✕ SETTINGS … refused*“.
- **Valdote jūs**: suteikite kiekvienam klientui reikiamą [vaidmenį](#client-master-control-roles), atšaukite kliento prieigą vienu paspaudimu arba viską išjunkite per **Leisti valdyti iš kliento**.
```

```{admonition} After restoring a backup
:class: warning
Jei klientas atkuriamas iš atsarginės kopijos, kuri jo komandų skaitiklį grąžina atgal, pagrindinis įrenginys kitas jo komandas atmes kaip pakartotines. Norėdami tai ištaisyti, tiesiog **atsiekite ir susiekite iš naujo**.
```

---

(client-master-control-troubleshooting)=

## Troubleshooting

| Požymis                                                                                                                                     | Ką patikrinti                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Klientas rodo, kad **pagrindinis įrenginys nepasiekiamas**                                                                                  | Pagrindinis telefonas nemiega ir jame veikia **AAPS**; abu telefonai prisijungę **NSClientV3**; abiejuose įjungti **websockets**; ta pati Nightscout svetainė.                                                                                                                                                                                                                 |
| Klientas rodo, kad jis **nesusietas**                                                                                                       | Susiekite iš naujo per **Valdymas → Susieti su pagrindiniu įrenginiu**. Patikrinkite, ar klientas pagrindinio įrenginio sąraše **Autorizuoti klientai** yra **Aktyvus**.                                                                                                                                                                                                       |
| Pagrindinis įrenginys komandą **atmetė**                                                                                                    | Pagrindinis įrenginys iš naujo tikrina komandą pagal savo dabartinę būseną – pvz., pasirinkto profilio nebėra arba nesutampa pompos tipas. Patikrinkite pagrindiniame įrenginyje.                                                                                                                                                                                              |
| Commands **fail** or the master is often **offline**                                                                                        | Websockets are **mandatory** for remote control from **AAPSClient**, on both phones. If the websocket connection keeps dropping, remote control does not work. See [Troubleshooting NSClient](../GettingHelp/TroubleshootingNsClient.md).                                                                                                                                      |
| Susiejimas atšaukiamas su pranešimu *„Nepavyko išsaugoti susiejimo rakto“*                                                                  | Niekas nepakeista. Pradėkite susiejimą iš naujo; jei vis tiek nepavyksta, paleiskite **AAPSClient** iš naujo ir pabandykite dar kartą.                                                                                                                                                                                                                                         |
| Po susiejimo nieko nevyksta                                                                                                                 | Patikrinkite, ar pagrindiniame įrenginyje ĮJUNGTA **Leisti valdyti iš kliento** ir ar pagrindinis įrenginys prijungtas prie Nightscout.                                                                                                                                                                                                                                        |
| Lange **Naujas klientas** negalima pasirinkti QR kodo parinkčių                                                                             | Lange paaiškinama kodėl. *Prieigos raktas nėra administratoriaus prieigos raktas*: suteikite pagrindiniam įrenginiui savo Nightscout admin prieigos raktą arba pridėkite klientą naudodami **PIN**. *Neprijungtas prie Nightscout*: palaukite, kol pagrindinis įrenginys **NSClientV3** parodys *Prisijungta*.                                                                 |
| *„Nightscout jau turi tokio pavadinimo prieigos raktą su kitomis teisėmis“*                                                                 | Vienas iš jūsų Nightscout prieigos raktų vadinasi `aaps-` ir šiuo pavadinimu. Pasirinkite kitą kliento pavadinimą.                                                                                                                                                                                                                                                             |
| *„Tokio pavadinimo klientas jau yra sąraše“*                                                                                                | Pasirinkite kitą pavadinimą arba pirmiausia pašalinkite tą klientą.                                                                                                                                                                                                                                                                                                            |
| Klientas rodo *„Šis kodas iš kitos AAPS versijos“*                                                                                          | Pagrindiniame įrenginyje ir kliente turi veikti **ta pati** **AAPS** versija. Atnaujinkite senesnę.                                                                                                                                                                                                                                                                            |
| Klientas rodo *„Šio kodo galiojimas baigėsi“*                                                                                               | Kodas, kuris susieja, galioja apie dvi minutes. Norėdami gauti naują kodą, pagrindiniame įrenginyje vėl pridėkite klientą.                                                                                                                                                                                                                                                     |
| Klientas rodo *„Šis telefonas jau susietas“*                                                                                                | Pirmiausia jį atsiekite (**Valdymas → Susieti su pagrindiniu įrenginiu → Atsieti**), tada nuskaitykite iš naujo. Kodas **tik Nightscout** veikia ir susietame telefone.                                                                                                                                                                                                        |
| Klientas rodo *„Pagrindinis telefonas atmetė komandą: šis telefonas į Nightscout siunčia duomenis naudodamas ne jam skirtą prieigos raktą“* | Klientas anksčiau naudojo savo Nightscout prieigos raktą, o dabar rašo kitu, pavyzdžiui, po to, kai prieigos raktas buvo įvestas jo Nightscout nustatymuose. Pagrindiniame įrenginyje pašalinkite klientą ir pridėkite jį iš naujo (žr. [Kliento nuosavas Nightscout prieigos raktas](#client-master-control-own-token)).                                                      |
| Kliento NSClient žurnale rodoma *„✕ SETTINGS … refused“*, ir jo nustatymai nebeatitinka pagrindinio įrenginio                               | Kažkas kitas įrašė pagrindinio įrenginio nustatymų dokumentą, arba pagrindinis įrenginys turi naują raktą (pavyzdžiui, ištrynus jo duomenis). Susietas klientas naują raktą perima pats, kai kitą kartą prisijungia prie Nightscout. Telefonui, kuris tik skaito Nightscout, vėl reikia pagrindinio įrenginio QR kodo (**Tik Nightscout duomenų skaitymas → Rodyti QR kodą**). |
| Kliento kortelėje raudonai rodoma *„Naudoja Nightscout prieigos raktą …“*                                                                   | Klientas vis dar rašo prieigos raktu, kuris turi daugiau teisių, nei jam reikia. Pagrindinis įrenginys po susiejimo siunčia jam nuosavą prieigos raktą, bet tik jei pagrindinis įrenginys turi admin prieigos raktą. Patikrinkite pagrindinio įrenginio prieigos raktą arba iš naujo nustatykite klientą QR kodu.                                                              |
| Klientas nebegali skaityti Nightscout                                                                                                       | Jo prieigos raktas ištrintas, pavyzdžiui, todėl, kad klientas buvo pašalintas pagrindiniame įrenginyje. Pridėkite jį iš naujo.                                                                                                                                                                                                                                                 |
| Nightscout svetainėje įvesta terapija netaikoma                                                                                             | Taip turi būti [Sustiprintos apsaugos režimu](#client-master-control-hardened-mode): įveskite ją susietame kliente.                                                                                                                                                                                                                                                            |

Nightscout / sinchronizacijos problemoms pirmiausia žr. [NSClient trikčių šalinimas](../GettingHelp/TroubleshootingNsClient.md).

---


<!-- =====================================================================
     SCREENSHOTS STILL TO ADD:
       1. (optional) Wear OS confirmation relayed from the master
     Already included:
       - authorized_clients_master.png       (master: Allow client control, hardened mode, client card, + button)
       - authorized_clients_roles.png        (master: client card with roles, Read Nightscout only section)
       - new_client_master.png               (master: New client dialog, three ways and role row)
       - qr_code_master.png                  (master: pairing QR code with countdown, code blurred; console screenshot)
       - aapsclient_wizard_from_master.png   (client: Set up from the master wizard step)
       - pair_with_master_unpaired.png       (client: pairing screen, unpaired PIN entry)
       - pairing_pin_master.png              (master: one-time pairing PIN — expired demo PIN)
       - pair_with_master_client.png         (client: pairing screen, paired state)
       - confirmation_master_authored.png    (client: master-authored scene confirmation)
       - carbs_confirmation_client.png       (client: master-authored carbs confirmation)
       - master_offline_error.png            (client: master-offline message)
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
