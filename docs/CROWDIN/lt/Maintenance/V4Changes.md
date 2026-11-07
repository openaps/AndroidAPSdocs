(v4-changes)=
# Kas pasikeitė AAPS v4

Šiame puslapyje surinkti svarbiausi **veikimo pakeitimai** tarp **AAPS** v3 ir v4 – kas veikia kitaip, kas perkelta į kitą vietą ar pašalinta, – kad esami naudotojai žinotų, ko tikėtis atnaujinus programėlę. Taip pat žr. [versijų pastabas](ReleaseNotes.md) ir [atnaujinimo instrukcijas](UpdateToNewVersion.md).

```{contents} Table of contents
:depth: 2
:local: true
```

---

## NSClient v1 pašalintas

**AAPS** v3 turėjo **du** Nightscout sinchronizavimo įskiepius:

- **NSClient** – senasis klientas (senoji Nightscout REST / socket.io API, dar vadinama *„v1“*), ir
- **NSClientV3** – klientas naujesnei Nightscout **API v3**.

**AAPS** v4 senasis **NSClient (v1)** įskiepis **pašalintas**. Sinchronizavimui su Nightscout liko tik **NSClientV3**.

```{admonition} What you need to do
:class: important
Jei jūs (arba jūsų **AAPSClient** sekėjas) vis dar sinchronizavote su senuoju **NSClient (v1)** įskiepiu, prieš atnaujindami arba po to pereikite prie **NSClientV3**:

- Atidarykite **[Konfigūracija](../SettingUpAaps/ConfigBuilder.md) → Ryšys → NSClientV3**.
- Įveskite savo **Nightscout URL** ir **prieigos raktą** (NSClientV3 naudoja prieigos raktą (access token), *ne* senąjį API slaptažodį (API secret) – žr. [prieigos rakto sukūrimas](https://nightscout.github.io/nightscout/security/#create-a-token)).
- Jūsų Nightscout svetainė turi palaikyti **API v3** (Nightscout 15 arba naujesnė versija).
- Jei naudojate **WebSocket**, įjunkite arba išjunkite juos **abiejuose** įrenginiuose – ir pagrindiniame įrenginyje, ir sekėjo įrenginyje – niekada tik viename.
- Websockets are **mandatory** for remote control from **AAPSClient**, on both phones.
```

Tai keičia tik tai, kaip programėlė bendrauja su Nightscout; jūsų duomenys Nightscout nepasikeičia.

---

## Apatinė navigacija: Terapija, Scenarijai ir Valdymas

**AAPS** v3 programėlėje judėjote per **skirtukų** eilę (Pagrindinis ekranas, Veiksmai, Terapija, …), o kelios funkcijos buvo **įskiepiai**, kuriuos įjungdavote Config Builder (**Veiksmai**, **Automatizacija**, **Maistas**, …).

**AAPS** v4 skirtukų nebėra, kaip ir akies žymimojo langelio Config Builder, kuris rodydavo įskiepį kaip skirtuką. Programėlė atsidaro **pagrindiniame ekrane**, o **apatinė navigacija** atveria tris meniu. **Veiksmai, Automatizacija ir Maistas nebėra įskiepiai** – [Konfigūracijoje](../SettingUpAaps/ConfigBuilder.md) (taip dabar vadinamas Config Builder) nieko įjungti nereikia; jų funkcijos dabar yra šiuose meniu.

(v4changes-treatments)=
### Terapija – įvesti ir suleisti

Meniu **Terapija** skirtas terapijai įrašyti arba suleisti: **Boluso patarėjas**, **Insulinas** (rankinis bolusas), **Angliavandeniai**, **Terapija** (insulinas ir angliavandeniai kartu), **Kalibravimas**, **NGJ** (atidaro jūsų NGJ programėlę, jei ji nustatyta) ir jūsų **[Greitieji vedliai](../DailyLifeWithAaps/QuickWizards.md)**.

![Meniu Terapija](../images/v4/BehavioralChanges/treatments_sheet.png)

**Wear OS laikrodyje** ta pati terapija įvedama laikrodžio **AAPS meniu** (Boluso patarėjas / Skaičiuotuvas, i-AV, Terapija, …):

![Terapijos veiksmai laikrodžio AAPS meniu](../images/v4/BehavioralChanges/treatments_watch.png)

### Scenarijai

Jūsų situacijų ruošiniai – žr. [Scenarijai](../DailyLifeWithAaps/Scenes.md).

(v4changes-manage)=
### Valdymas – tvarkyti ir aktyvuoti

Meniu **Valdymas** skirtas visa kita tvarkyti ir aktyvuoti: **[Profilis](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)**, **Insulino nustatymai** (jūsų insulino konfigūracijos), **[Laikinas tikslas](../DailyLifeWithAaps/TempTargets.md)**, **[Greitojo vedlio](../DailyLifeWithAaps/QuickWizards.md)** ruošiniai, **[Scenarijai](../DailyLifeWithAaps/Scenes.md)**, **Automatizacija**, **Maistas**, **Vietų rotacija**, **Pompa**, **[Autorizuoti klientai](../RemoteFeatures/ClientMasterControl.md)** – ir pompos veiksmai, kurie anksčiau buvo skirtuke *Veiksmai* (**Ištęstas bolusas**, **Atšaukti laikiną bazę**, **Užpildymas**, **Jutiklio įvedimas**, **Baterijos keitimas**).

![Meniu Valdymas](../images/v4/BehavioralChanges/manage_sheet.png)

Visos jūsų esamos automatizacijos taisyklės ir maisto įrašai išsaugomi; pasikeitė tik tai, kaip šias funkcijas pasiekti.

(screens-action-tab)=
#### Kur dingo skirtukas Veiksmai?

**AAPS** 3.x turėjo skirtuką „Veiksmai“. **AAPS** 4 jo funkcijos yra kitose vietose:

* **Profilio keitimas** ir **Profilio procentas**: pagrindiniame ekrane bakstelėkite [profilio pavadinimą](#aaps-screens-profile--target) arba pasirinkite **Valdymas → Profilis**. Žr. [Profilio procento keitimas](#ProfileSwitch-change-percentage).
* **Laikinas tikslas**: pagrindiniame ekrane paspauskite [tikslą](#aaps-screens-profile--target) arba pasirinkite **Valdymas → Laikinas tikslas**.
* **Užpildymas**, **Jutiklio įvedimas**, **Gliukomatis** ir kiti terapijos įrašai: išskleistame [būsenos skydelyje](#aaps-screens-careportal), meniu **Valdymas** arba kaip [QuickLaunch](../DailyLifeWithAaps/QuickLaunch.md) mygtukai.
* **Istorija**, **Statistika** (BPD): **meniu** (☰).

```{admonition} Profile switch and profile percentage
:class: note
**AAPS** v3 ilgai palaikius profilio pavadinimą atsidarydavo profilio keitimo langas (procentas, trukmė, laikinas tikslas „Sportas“). **AAPS** v4 **bakstelėkite** profilio pavadinimą (arba **Valdymas → Profilis**), tada bakstelėkite apvalų mygtuką **▶** apačioje dešinėje – atsidarys tie patys nustatymai. Žr. [Profilio procento keitimas](#ProfileSwitch-change-percentage).
```

---

(v4changes-read-only-management)=
## Nustatymų apsauga dabar užrakina ir valdymo ekranus

**AAPS** v3 [nustatymų apsauga](#Preferences-settings-protection) prašė slaptažodžio tik atidarant nustatymus. Be jo vis tiek galėjote pridėti arba redaguoti profilius skirtuke **Vietinis profilis**.

**AAPS** v4 nustatymų apsauga apima ir redagavimą valdymo ekranuose: **Profilis**, **Insulino nustatymai**, **Laikinas tikslas** ir **Greitasis vedlys**. Jei jūsų nustatymai užrakinti, šie ekranai atsidaro **tik peržiūrai**:

- Galite peržiūrėti įrašus ir juos **▶ Aktyvuoti** arba naudoti.
- Mygtukai **Pridėti / Redaguoti / Klonuoti / Ištrinti** yra **paslėpti**. Tik **✏️ pieštukas** viršutinėje juostoje rodo, kad redagavimą galima atrakinti.

![Profilio ekranas tik peržiūrai – apačioje tik Aktyvuoti, viršutinėje juostoje pieštukas](../images/v4/Profiles/profile_manage_readonly.png)

```{admonition} What you need to do
:class: important
Norėdami pridėti, redaguoti, klonuoti arba ištrinti įrašą, bakstelėkite **✏️ pieštuką** viršutinėje juostoje ir įveskite nustatymų slaptažodį (arba naudokite biometriką). Mygtukai atsiranda.

Jei jums nereikia apsaugoti nustatymų, nustatymų apsaugą galite išjungti skiltyje **Nustatymai → Apsauga**.
```

---

(v4changes-active-insulin)=
## Naudojamo insulino redaguoti negalima

**AAPS** v3 naudojamo insulino IVT galėjote keisti bet kada.

**AAPS** v4 insulinas, pažymėtas **AKTYVUS** skiltyje **Valdymas → Insulino nustatymai**, yra pilkas: jo negalima redaguoti ar ištrinti.

Kai atnaujinate programėlę, **AAPS** išsaugo insuliną ir IVT, kuriuos jau įrašė jūsų v3 profilio keitimai. Jei randa senesnių įrašų, kuriuose insulinas žinomas, bet IVT ne, jiems naudoja numatytąją IVT ir vieną kartą parodo pranešimą, pavyzdžiui, *Senesniuose įrašuose nebuvo nurodyta insulino veikimo trukmė, todėl 9,0 val. trukmė buvo pritaikyta Lyumjev. Patikrinkite insulino nustatymus – jau perkelti įrašai vėliau neatnaujinami.* Pamatę šį pranešimą, patikrinkite insulino nustatymus.

```{admonition} What you need to do
:class: important
Norėdami pakeisti IVT arba piką, pridėkite naują insuliną mygtuku **+**, nustatykite jį, išsaugokite ir **▶ Aktyvuokite**. Žr. [Naudojamo insulino keitimas](#Config-Builder-insulin-change-active).
```

---

(v4changes-remote-control)=
## AAPSClient nuotoliniam valdymui reikia susiejimo

**AAPS** v3 **AAPSClient** valdė **AAPS** įrašydamas terapijos įrašus į Nightscout ir negalėjo suleisti boluso.

**AAPS** v4 klientas ir pagrindinis telefonas vieną kartą **susiejami**, o kiekviena komanda pasirašoma. Pagrindinis telefonas patikrina ir patvirtina kiekvieną komandą, o klientas dabar gali ir suleisti bolusą.

- Kiekvienas klientas turi **[vaidmenį](#client-master-control-roles)**, kuris riboja, ką jis gali daryti.
- Kol kliento valdymas įjungtas, pagrindinis telefonas veikia **[sustiprintos apsaugos režimu](#client-master-control-hardened-mode)**: terapija ir pakeitimai, įvesti tiesiai į Nightscout (svetainėje, kitose programėlėse), nebetaikomi.
- Kiekvienas klientas gauna **[savo Nightscout prieigos raktą](#client-master-control-own-token)** tik su tomis teisėmis, kurių jam reikia.

```{admonition} What you need to do
:class: important
Susiekite kiekvieną **AAPSClient** su pagrindiniu telefonu: žr. [Pagrindinio įrenginio ↔ kliento valdymas](#client-master-control). Jei pagrindiniame telefone yra administratoriaus prieigos raktas, pagrindinis telefonas parodo QR kodą, kuris vienu nuskaitymu nustato ir susieja klientą. Jei anksčiau terapiją įvesdavote Nightscout svetainėje, dabar ją įveskite susietame kliente.
```

---

## Pasikartojantys KG duomenys dabar perjungia ciklą į režimą Stabdymas esant žemai glikemijai

Kai **AAPS** gauna tą patį KG rodmenį du kartus (raudonas įspėjimo ženklelis ant glikemijos šaltinio sparčiojo mygtuko apatinėje juostoje), jis negali patikimai apskaičiuoti tendencijos, todėl nustoja leisti korekcinį insuliną.

**AAPS** v3 tai vykdavo tyliai fone: jūsų ciklas vis dar buvo rodomas kaip **Uždaras ciklas**, nors nebegalėjo koreguoti.

**AAPS** v4 šis pakeitimas matomas. Uždaras ciklas perjungiamas į režimą **Stabdymas esant žemai glikemijai**, o ciklo langas paaiškina priežastį: *„Įjungtas LGS režimas dėl dubliuojamų gliukozės duomenų“*. **AAPS** vis tiek gali sumažinti arba sustabdyti valandinę bazę, kad apsaugotų jus nuo hipoglikemijos.

```{admonition} What you need to do
:class: important
Raskite ir pašalinkite pasikartojančius rodmenis – žr. [KG įspėjamasis ženklas](#aaps-screens-bg-warning-sign).

Kai jų nebelieka, **AAPS** lieka režime **Stabdymas esant žemai glikemijai**. Į **Uždaras ciklas** jis pats negrįžta: ilgai palaikykite ciklo piktogramą ir vėl pasirinkite **Uždaras ciklas**.
```

---

(v4changes-tidepool)=
## Tidepool: duomenys dabar rodomi su įrenginio pavadinimu AAPS

**AAPS** v3 į [Tidepool](../SettingUpAaps/Tidepool.md) įkelti duomenys Tidepool buvo rodomi su kitu įrenginio pavadinimu.

**AAPS** v4 duomenys rodomi su įrenginio pavadinimu **AAPS**. Po atnaujinimo **AAPS** Tidepool pradeda naują duomenų rinkinį. Jūsų senesni duomenys lieka Tidepool su senuoju įrenginio pavadinimu.

```{admonition} What you need to do
:class: important
Dažniausiai nieko daryti nereikia: nauji duomenys tiesiog atsiranda su pavadinimu **AAPS**.

**Nevykdykite** „**Pilna sinchronizacija**“, kol senieji duomenys dar yra Tidepool: tada tie patys duomenys būtų ten du kartus. Jei norite visus duomenis matyti su nauju pavadinimu, pirmiausia [Tidepool ekrane](#tidepool-menu) paspauskite mygtuką „**Išvalyti visus duomenis**“ (jis taip pat ištrina senus **AAPS** įkeltus duomenis), tada vykdykite „**Pilna sinchronizacija**“. Iš naujo įkelti galima tik tuos duomenis, kurie dar saugomi **AAPS** jūsų telefone.
```

---


<!-- =====================================================================
     This page is a growing list of v4 behavioral changes.
     Add new changes as their own "## " section, newest grouping as agreed.
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
