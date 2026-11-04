(aaps-builder-setup)=

# AAPS Builder sąrankos puslapis

Sukurkite savo **AAPS** programėlę GitHub. Nereikia diegti jokių programų, nereikia terminalo. Pirmą kartą tai užtrunka apie 10 minučių, vėliau kiekvieną kūrimą paleidžiate patys.

Kiekvienas žingsnis išsamiau, su ekrano nuotraukomis, paaiškintas puslapyje [Kūrimas naršyklėje su AAPS Builder](#aaps-builder). Tą puslapį laikykite atidarytą kitame skirtuke.

Žemiau esantys mygtukai atidaro GitHub naujame Chrome skirtuke. Norėdami grįžti į šį puslapį, spauskite skirtukų mygtuką šalia Chrome adreso juostos (kvadratas su skaičiumi) ir pasirinkite šį puslapį.

(aaps-builder-setup-step1)=

## 1 žingsnis – Sukurkite savo privačią kūrimo saugyklą

Taip jūsų GitHub paskyroje sukuriama jūsų privati AAPS Builder kopija: saugykla, kurioje jau yra kūrimo darbo eiga. Ją ir jos sukurtas programėles matote tik jūs. AndroidAPS fork kurti **nereikia**: AAPS šaltinio kodas kiekvieno kūrimo metu atsisiunčiamas iš oficialios AndroidAPS saugyklos.

<label class="aapsb-label" for="aapsb-user">Your GitHub username</label>
<input class="aapsb-input" type="text" id="aapsb-user" autocomplete="username" spellcheck="false" placeholder="my-github-name" />
<span class="aapsb-msg" id="aapsb-userMsg"></span>

Pirmiausia šioje naršyklėje prisijunkite prie github.com (neturite paskyros? susikurkite ją nemokamai). Tada grįžkite čia. Naudokite savo naudotojo vardą (jis rodomas jūsų GitHub profilyje), o ne el. pašto adresą: puslapis klausia GitHub, ar toks naudotojo vardas yra.

<label class="aapsb-label" for="aapsb-repo">Name of your repository</label>
<input class="aapsb-input" type="text" id="aapsb-repo" spellcheck="false" placeholder="my-aaps" />

Palikite pasiūlytą pavadinimą. Saugyklą jau sukūrėte kitu pavadinimu? Čia įveskite tiksliai tą pavadinimą.

```{note}
**Jau turite AAPS Builder saugyklą** (sukurtą su ankstesne šio puslapio versija)? Naujos nekurkite: čia įveskite tikslų jos pavadinimą, praleiskite žemiau esantį mygtuką ir vieną kartą atnaujinkite jos darbo eigą: žr. **Updating your copy** šio žingsnio pabaigoje. Jūsų slaptosios reikšmės lieka tokios pat.

Jei vis tiek norite naujos saugyklos, pasirinkite pavadinimą, kurio dar neturite, pavyzdžiui, `my-aaps-2`, ir 2 žingsnyje naudokite tą pačią raktų saugyklą.

Neįveskite savo AndroidAPS fork pavadinimo: fork yra viešas, ir jis jau kuriamas su savo darbo eiga **AAPS CI**.
```

Your repository: <code class="aapsb-repoUrl"></code>

Patikrinkite šį pavadinimą prieš naudodami žemiau esančius mygtukus: puslapis įsimena pavadinimą iš jūsų paskutinio apsilankymo.

<a class="aapsb-btn" id="aapsb-createRepo" target="_blank" rel="noopener">Create my private repository</a>

Atsidariusiame GitHub puslapyje viskas jau užpildyta: šablonas `nightscout/aaps-builder`, jūsų paskyra kaip savininkas (owner), jūsų saugyklos pavadinimas ir **Private**. Nieko nekeiskite ir palikite **Include all branches** nepažymėtą.

1. Spauskite žalią mygtuką **Create repository**.
2. GitHub parodo jūsų naują saugyklą su aplanku `.github` ir failu `README.md`: juose yra kūrimo darbo eiga. Grįžkite į šį puslapį 2 žingsniui.

```{admonition} Your new repository is empty (no files)?
:class: warning

Ji sukurta ne iš šablono. Ištrinkite ją (**Settings** → puslapio apačia → **Delete this repository**), tada vėl spauskite **Create my private repository**.
```

```{admonition} GitHub says "my-aaps already exists in this account"?
:class: tip

You already have your repository: close the GitHub tab and go on with this page. If your key is already in it, continue with [step 4](#aaps-builder-setup-step4). See [troubleshooting](#aaps-builder-ts-repo-exists).
```

```{admonition} Updating your copy (existing AAPS Builder repository)
:class: dropdown

Kūrimo žingsniai atnaujinami už jus: kiekvieno kūrimo metu jūsų saugykla paleidžia versiją, kurią AAPS kūrėjai išleido saugykloje nightscout/aaps-builder, o jūsų saugykloje niekas nesikeičia. Savo darbo eigos failą keičiate tik tada, kai tai paskelbiama puslapyje [Dokumentacijos atnaujinimai ir pakeitimai](../Maintenance/DocumentationUpdate.md) (pavyzdžiui, dėl naujo kūrimo varianto), arba vieną kartą, jei jūsų saugykla buvo sukurta su ankstesne šio puslapio versija arba iš seno šablono. Jūsų slaptoji reikšmė `KEYSTORE_SET` lieka tokia pati.

1. <a class="aapsb-btn aapsb-secondary" href="https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/build.yml" target="_blank" rel="noopener">Open the newest workflow</a>

   Kompiuteryje spauskite **kopijavimo piktogramą** („Copy raw file“) failo viršuje dešinėje. Telefone vietoj to atidarykite <a href="https://raw.githubusercontent.com/nightscout/aaps-builder/main/.github/workflows/build.yml" target="_blank" rel="noopener">paprasto teksto versiją</a>, palaikykite paspaudę tekstą → **Select all** → **Copy**.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openWorkflowFile" target="_blank" rel="noopener">Open my workflow file</a>

   Opens `.github/workflows/build.yml` in <code class="aapsb-repoUrl"></code>. Tap the **⋯** menu at the top right of the file, then **Edit file… In place** (on a computer, click the pencil).
3. Pakeiskite visą tekstą nukopijuota darbo eiga (telefone: palaikykite paspaudę → **Select all** → **Paste**), tada du kartus spauskite **Commit changes…**. Pirmoje failo eilutėje rodoma jo versija.
```

(aaps-builder-setup-step2)=

## 2 žingsnis – Jūsų pasirašymo raktas

Programėlė turi būti pasirašyta jūsų nuosavu raktu. Visada naudokite tą patį raktą, kitaip norėdami atnaujinti turėsite pašalinti AAPS (ir prarasite jos nustatymus). Pasirinkite vieną iš dviejų skirtukų.

`````{tab-set}

````{tab-item} I already have a keystore
Pavyzdžiui, iš Android Studio (.jks).

<label class="aapsb-label" for="aapsb-ksFile">Keystore file</label>
<input type="file" id="aapsb-ksFile" accept=".jks,.keystore,.p12,.pfx,application/octet-stream">

<label class="aapsb-label" for="aapsb-ksPass">Keystore password</label>
<input class="aapsb-input" type="password" id="aapsb-ksPass" autocomplete="off">

<label class="aapsb-label" for="aapsb-ksAlias">Key alias</label>
<select class="aapsb-input" id="aapsb-ksAliasSel" hidden></select>
<input class="aapsb-input" type="text" id="aapsb-ksAlias" autocomplete="off" spellcheck="false" placeholder="key0">

<label class="aapsb-check"><input type="checkbox" id="aapsb-samePass" checked> Key password is the same as the keystore password</label>

<div id="aapsb-keyPassWrap" hidden>

<label class="aapsb-label" for="aapsb-keyPass">Key password</label>
<input class="aapsb-input" type="password" id="aapsb-keyPass" autocomplete="off">

</div>

<button class="aapsb-btn" type="button" id="aapsb-haveGo">Check and continue</button> <span class="aapsb-msg" id="aapsb-haveMsg"></span>
````

````{tab-item} Create a new key
Pirmą kartą kuriate AAPS? Naujas raktas sukuriamas čia, jūsų naršyklėje. Niekas niekur nesiunčiama.

<label class="aapsb-label" for="aapsb-newPass">Sugalvokite slaptažodį (bent 8 simboliai, be raidžių su diakritiniais ženklais)</label>
<input class="aapsb-input" type="password" id="aapsb-newPass" autocomplete="new-password">

<label class="aapsb-label" for="aapsb-newPass2">Pakartokite slaptažodį</label>
<input class="aapsb-input" type="password" id="aapsb-newPass2" autocomplete="new-password">

<button class="aapsb-btn" type="button" id="aapsb-newGo">Create key</button> <span class="aapsb-msg" id="aapsb-newMsg"></span>

<div class="aapsb-box" id="aapsb-backupBox" hidden>

**Išsaugokite rakto atsarginę kopiją!**

Atsisiųskite failą. Šiuos tris dalykus laikykite kartu, saugioje vietoje ne telefone (pvz., savo debesies saugykloje):

- failą `aaps-keystore.jks`
- savo slaptažodį
- rakto pseudonimą (alias): **`key0`**

Visų trijų jums prireiks, jei kada nors kursite AAPS kitu būdu, pvz., su Android Studio.

<button class="aapsb-btn" type="button" id="aapsb-downloadKs">Download backup (aaps-keystore.jks)</button>

</div>
````

`````
(aaps-builder-setup-step3)=
## 3 žingsnis – Perduokite raktą savo saugyklai
<span id="aapsb-s3wait">Pirmiausia užbaikite 2 žingsnį.</span>

<div id="aapsb-s3ready" hidden>
  1. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets" target="_blank" rel="noopener">Open the secrets page</a> Atidaro: <code class="aapsb-repoUrl"></code> Rodoma „Page not found“ (404)? Pirmiausia patikrinkite, ar šioje naršyklėje esate prisijungę prie github.com: kai nesate prisijungę, GitHub privačioms saugykloms rodo 404. Kitu atveju jūsų naudotojo vardas arba saugyklos pavadinimas 1 žingsnyje nesutampa su jūsų saugykla: patikrinkite juos github.com ir įveskite 1 žingsnyje. 2. Spauskite „Copy name“, tada įklijuokite jį į mažą lauką „Name“: `KEYSTORE_SET` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="name">Copy name</button> 3. Spauskite „Copy secret“, tada įklijuokite ilgą kodą į didelį lauką „Secret“: <code id="aapsb-secretPreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="secret">Copy secret</button> <span class="aapsb-msg" id="aapsb-copyMsg"></span> Slaptoji reikšmė (secret) yra labai ilgas kodas (tūkstančiai simbolių), O NE žodis KEYSTORE_SET. Pirmiausia nukopijuokite ir įklijuokite pavadinimą, tada ilgą kodą. 4. Spauskite „Add secret“. Baigta, to daryti daugiau niekada nereikės.
</div>
(aaps-builder-setup-step4)=
## 4 žingsnis – Sukurkite programėlę

1. <a class="aapsb-btn" id="aapsb-openActions" target="_blank" rel="noopener">Open the build page</a>

   Atidaro: <code class="aapsb-repoUrl"></code>

   Rodoma „Page not found“ (404)? Pirmiausia patikrinkite, ar šioje naršyklėje esate prisijungę prie github.com: kai nesate prisijungę, GitHub privačioms saugykloms rodo 404. Kitu atveju jūsų naudotojo vardas arba saugyklos pavadinimas 1 žingsnyje nesutampa su jūsų saugykla: patikrinkite juos github.com ir įveskite 1 žingsnyje. Vietoj to atsidarė GitHub programėlė? Spauskite „RUN WORKFLOW“, patikrinkite versiją ir variantą, tada vėl spauskite „RUN WORKFLOW“. Jei programėlėje vis dar rodoma „Nothing to see here“, patraukite sąrašą žemyn, kad pamatytumėte savo kūrimą.
2. If asked, click the green button to enable workflows.
The list of workflows shows two entries: use "Build AAPS". Ignore "AAPS Builder": it holds the build steps and has no "Run workflow" button.
3. Spauskite „Run workflow“, tada žalią mygtuką „Run workflow“. „latest“ sukuria naujausią AAPS versiją. ***patarimas:*** *galite sukurti kitą versiją, vietoj „latest“ įvesdami jos [žymos (tag)](https://github.com/nightscout/AndroidAPS/tags) pavadinimą*
4. Palaukite apie 15–30 minučių. Žalia varnelė reiškia, kad kūrimas baigtas.
Norite gauti el. laišką, kai kūrimas baigsis? GitHub siunčia el. laišką tik tada, kai kūrimas nepavyksta. Kad laišką gautumėte ir tada, kai kūrimas pavyksta: github.com atidarykite savo profilio nuotrauką → Settings → Notifications → System → Actions ir nuimkite žymę „Only notify for failed workflows“.

```{admonition} No "Build AAPS" / "Run workflow" button?
:class: warning

1. Atidarykite savo saugyklą ir patikrinkite, ar joje yra aplankas `.github` su failu `workflows/build.yml`. Jei saugykla tuščia, ji sukurta ne iš šablono: ištrinkite ją (**Settings** → puslapio apačia → **Delete this repository**) ir vėl atlikite [1 žingsnį](#aaps-builder-setup-step1) su mygtuku.
2. The file is there, but GitHub shows "This workflow does not exist": see [troubleshooting](#aaps-builder-ts-workflow-not-found).
3. Atidarykite skirtuką Actions. Jei rašoma, kad darbo eigos išjungtos, spauskite žalią mygtuką, kad jas įjungtumėte. Tada sąraše spauskite „Build AAPS“.
```

(aaps-builder-setup-step5)=

## 5 žingsnis – Įdiekite telefone

```{admonition} Before every update: back up your settings!
:class: warning

1. AAPS programėlėje: Servisas → Eksportuoti nustatymus. (Tai bet kuriuo atveju darykite reguliariai, pvz., po profilio pakeitimo arba kartą per mėnesį.)
2. Eksportuotą failą nukopijuokite IŠ telefono, pvz., į Google Drive arba Dropbox. Atsarginė kopija, kuri yra tik telefone, prarandama kartu su telefonu.
3. Ten laikykite ir APK failus bei kelis senesnius eksportus. Tada visada galėsite grįžti atgal.

[Kaip eksportuoti nustatymus](#ExportImportSettings-Settings-Export) · [AAPS DUK: kaip tvarkyti atsargines kopijas](#FAQ-organize-backups)
```

1. Atidarykite šį puslapį savo telefone, interneto naršyklėje (Chrome). Jei paprašoma, prisijunkite prie github.com.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openRuns" target="_blank" rel="noopener">Open my builds</a>

   Vietoj to atsidarė GitHub programėlė? Ji negali atsisiųsti kūrimų. Programėlėje atidarykite naujausią kūrimą ir spauskite „Artifacts ↗“ arba spauskite bendrinimo piktogramą ir pasirinkite Chrome (arba „Copy link“, tada įklijuokite nuorodą į Chrome adreso juostą). Tęskite Chrome naršyklėje.

   Rodoma „Page not found“ (404)? Pirmiausia patikrinkite, ar šioje naršyklėje esate prisijungę prie github.com: kai nesate prisijungę, GitHub privačioms saugykloms rodo 404. Kitu atveju jūsų naudotojo vardas arba saugyklos pavadinimas 1 žingsnyje nesutampa su jūsų saugykla: patikrinkite juos github.com ir įveskite 1 žingsnyje.

   Kad GitHub nuorodos nebebūtų atidaromos programėlėje: Android Settings → Apps → GitHub → Open by default → išjunkite „Open supported links“.
3. Spauskite naujausią kūrimą su žalia varnele ✅.
4. Slinkite žemyn iki kūrimo santraukos ir spauskite didelę nuorodą „📱 Download AAPS …“ (arba slinkite dar žemiau iki „Artifacts“ ir spauskite aaps-….apk). Slinkite pirštu ant teksto, ne ant kūrimo žingsnių diagramos.
5. Kai atsisiuntimas baigsis, spauskite failą ir pasirinkite Install. Jei paprašoma, leiskite diegti programėles iš šio šaltinio.
6. aaps-wear-….apk skirtas išmaniajam laikrodžiui. Jei laikrodžio nenaudojate, jo nesiųskite.

APK nerodomas jūsų saugyklos skiltyje „Code“, tik kūrimo puslapyje. Jis saugomas 14 dienų.

Nauja AAPS versija? Pasidarykite atsarginę nustatymų kopiją, tada sukurkite naują versiją pagal [4 žingsnį](#aaps-builder-setup-step4). Jūsų saugykla niekada nieko nesukuria pati.

(aaps-builder-setup-step6)=

## 6 žingsnis – Nebūtina: gaukite programėlę Google Drive

Norite, kad APK atsirastų jūsų Google Drive (saugomas visam laikui)? Pridėkite dar vieną slaptąją reikšmę – GDRIVE_OAUTH2. Šis puslapis gauna ją iš Google už jus. Tada AAPS galės matyti ir keisti tik tuos failus, kuriuos pati sukuria jūsų Google Drive, ir nieko daugiau.

1. <a class="aapsb-btn" id="aapsb-googleAuth" target="_blank" rel="noopener">Connect Google Drive</a>

   Google atsidaro naujame skirtuke. Pasirinkite savo Google paskyrą ir leiskite AAPS matyti ir keisti jos pačios failus. Jei Google rašo, kad programėlė nepatvirtinta, spauskite „Advanced“, tada „Go to …“.
2. Tada naujame skirtuke rodoma klaida, pvz., **„This site can't be reached“** arba **„127.0.0.1 refused to connect“**. **Taip ir turi būti.** Google atsakymas yra to skirtuko adrese.

   Tap the address bar of that tab, then the copy icon next to the address (on a computer: select the whole address and copy it). Jis prasideda `http://127.0.0.1:47913/`. Grįžkite į šį puslapį per kelias minutes: atsakymas galioja tik trumpai.
3. <label class="aapsb-label" for="aapsb-googleUrl">Paste the copied address here</label> <input class="aapsb-input" type="url" id="aapsb-googleUrl" autocomplete="off" spellcheck="false" placeholder="http://127.0.0.1:47913/aaps-builder?…" /> <button class="aapsb-btn" type="button" id="aapsb-googleGo">Get GDRIVE_OAUTH2</button> <span class="aapsb-msg" id="aapsb-googleMsg"></span>

<div id="aapsb-gdriveReady" hidden>

4. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets2" target="_blank" rel="noopener">Open the secrets page</a>

   Atidaro: <code class="aapsb-repoUrl"></code>

   Rodoma „Page not found“ (404)? Pirmiausia patikrinkite, ar šioje naršyklėje esate prisijungę prie github.com: kai nesate prisijungę, GitHub privačioms saugykloms rodo 404. Kitu atveju jūsų naudotojo vardas arba saugyklos pavadinimas 1 žingsnyje nesutampa su jūsų saugykla: patikrinkite juos github.com ir įveskite 1 žingsnyje.
5. Spauskite „Copy name“, tada įklijuokite jį į mažą lauką „Name“: `GDRIVE_OAUTH2` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="gdrive">Copy name</button>
6. Spauskite „Copy secret“, tada įklijuokite kodą į didelį lauką „Secret“: <code id="aapsb-gdrivePreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="gdriveValue">Copy secret</button> <span class="aapsb-msg" id="aapsb-gdriveCopyMsg"></span>
7. Spauskite „Add secret“.

</div>

```{admonition} Already have a GDRIVE_OAUTH2 value?
:class: dropdown

Tinka ir reikšmė iš kito kūrimo naršyklėje būdo AAPS paruošimo puslapio: atidarykite slaptųjų reikšmių puslapį, pridėkite pavadinimą `GDRIVE_OAUTH2` ir įklijuokite savo reikšmę. Žr. [Kūrimų išsaugojimas Google Drive](#aaps-builder-google-drive).
```

Kito kūrimo metu APK failai taip pat išsaugomi Google Drive aplanke AAPS/&lt;version&gt;.

Jei 6 mėnesius nieko nekuriate arba pakeičiate Google slaptažodį, Google nutraukia prieigą. Tada kūrimas apie tai praneša: pakartokite šį žingsnį.

----

Viskas šiame puslapyje veikia jūsų naršyklėje. Jūsų raktas ir slaptažodžiai niekur nesiunčiami, išskyrus ten, kur juos įklijuojate patys. GitHub siunčiamas tik jūsų GitHub naudotojo vardas, kad būtų patikrinta, ar jis yra. 6 žingsnyje Google atsakymas siunčiamas tik į Google, kad būtų gauta GDRIVE_OAUTH2. Kūrimo darbo eigą prižiūri AAPS kūrėjai saugykloje [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder); ji paremta AAPS Builder (AGPL-3.0).

<div id="aapsb-msgs" hidden>

- <span data-aapsb-msg="copied">Ilgas kodas nukopijuotas: įklijuokite jį į didelį lauką „Secret“, tada spauskite „Add secret“.</span>
- <span data-aapsb-msg="copiedName">Pavadinimas nukopijuotas: įklijuokite jį į mažą lauką „Name“.</span>
- <span data-aapsb-msg="userOk">✓ GitHub user found.</span>
- <span data-aapsb-msg="userBad">✗ No GitHub user with this name. Naudokite savo naudotojo vardą (jis rodomas jūsų GitHub profilyje), o ne el. pašto adresą.</span>
- <span data-aapsb-msg="copiedShort">Nukopijuota ✓</span>
- <span data-aapsb-msg="needUser">Pirmiausia 1 žingsnyje įveskite savo GitHub naudotojo vardą.</span>
- <span data-aapsb-msg="errPipe">Slaptažodžiuose ir pseudonime negali būti simbolio |</span>
- <span data-aapsb-msg="errNoFile">Pasirinkite savo raktų saugyklos failą.</span>
- <span data-aapsb-msg="errEmpty">Įveskite slaptažodį ir pseudonimą.</span>
- <span data-aapsb-msg="errPass">Neteisingas raktų saugyklos slaptažodis.</span>
- <span data-aapsb-msg="errKeyPass">Neteisingas rakto slaptažodis.</span>
- <span data-aapsb-msg="errAlias">Raktų saugykloje toks pseudonimas nerastas. Galimi: {aliases}</span>
- <span data-aapsb-msg="errFormat">Tai nepanašu į raktų saugyklos failą.</span>
- <span data-aapsb-msg="okHave">Keystore OK! Tęskite 3 žingsniu.</span>
- <span data-aapsb-msg="okHaveUnchecked">Raktų saugykla nuskaityta. Slaptažodis bus patikrintas kūrimo metu. Tęskite 3 žingsniu.</span>
- <span data-aapsb-msg="errShort">Slaptažodis turi būti bent 8 simbolių.</span>
- <span data-aapsb-msg="errAscii">Naudokite tik a–z, A–Z, 0–9 ir simbolius, pvz., ! ? # – be tarpų, be raidžių su diakritiniais ženklais ir be |</span>
- <span data-aapsb-msg="errMatch">Slaptažodžiai nesutampa.</span>
- <span data-aapsb-msg="working">Kuriamas raktas…</span>
- <span data-aapsb-msg="okNew">Key created. Žemiau atsisiųskite atsarginę kopiją, tada tęskite 3 žingsniu.</span>
- <span data-aapsb-msg="gNoUrl">Pirmiausia įklijuokite visą Google skirtuko adresą.</span>
- <span data-aapsb-msg="gNoCode">Šiame adrese nėra Google atsakymo. Nukopijuokite visą skirtuko, kuriame rodoma klaida, adresą; jis prasideda http://127.0.0.1:47913/</span>
- <span data-aapsb-msg="gDenied">Prieiga prie Google nebuvo leista. Vėl spauskite „Connect Google Drive“ ir leiskite prieigą.</span>
- <span data-aapsb-msg="gOldUrl">Šis adresas priklauso ankstesniam bandymui. Vėl spauskite „Connect Google Drive“ ir naudokite naują adresą.</span>
- <span data-aapsb-msg="gWorking">Kreipiamasi į Google…</span>
- <span data-aapsb-msg="gFailed">Google to nepriėmė ({error}). Atsakymas galioja tik kelias minutes ir tik vieną kartą: vėl spauskite „Connect Google Drive“.</span>
- <span data-aapsb-msg="gNoRefresh">Google neatsiuntė ilgalaikės prieigos. Vėl spauskite „Connect Google Drive“.</span>
- <span data-aapsb-msg="gOk">GDRIVE_OAUTH2 is ready. Žemiau pridėkite jį kaip slaptąją reikšmę (secret).</span>
- <span data-aapsb-msg="gCopied">Kodas nukopijuotas: įklijuokite jį į didelį lauką „Secret“, tada spauskite „Add secret“.</span>

</div>

<style>
  .rst-content .aapsb-label { display: block; font-weight: 700; margin: 14px 0 4px; }
  .rst-content .aapsb-input { display: block; width: 100%; max-width: 480px; padding: 8px 10px; font: inherit; border: 1px solid #ccc; border-radius: 4px; }
  .rst-content .aapsb-check { display: flex; gap: 8px; align-items: center; margin-top: 10px; }
  .rst-content .aapsb-btn, .rst-content a.aapsb-btn:visited {
    display: inline-block; margin: 4px 0; padding: 8px 16px; border-radius: 4px; border: 1px solid #2980b9; cursor: pointer;
    background: #2980b9; color: #fff; font: inherit; font-weight: 700; text-decoration: none;
  }
  .rst-content .aapsb-btn:hover { background: #1f6391; color: #fff; }
  .rst-content .aapsb-btn.aapsb-secondary, .rst-content a.aapsb-btn.aapsb-secondary:visited { background: transparent; color: #2980b9; }
  .rst-content .aapsb-btn.aapsb-secondary:hover { background: #e7f2fa; }
  .rst-content .aapsb-btn:disabled { opacity: .45; cursor: not-allowed; }
  .rst-content .aapsb-msg { display: inline-block; margin-left: 6px; }
  .rst-content .aapsb-msg.ok { color: #1a7f37; } .rst-content .aapsb-msg.err { color: #cf222e; } .rst-content .aapsb-msg.warn { color: #9a6700; }
  .rst-content .aapsb-box { background: #e7f2fa; border-radius: 4px; padding: 12px 14px; margin: 12px 0; }
  .rst-content section.aapsb-done > h2::after { content: " ✓"; color: #1a7f37; }
  .rst-content [hidden] { display: none !important; }
</style>

<script src="../_static/aaps-builder/aaps-builder.forge.min.js"></script>
<script>
// AAPS Builder setup page logic. Walks the user through creating a private copy of the
// github.com/nightscout/aaps-builder template (the build workflow is in it) and creating the
// KEYSTORE_SET secret. The repository then builds AAPS from the official source,
// github.com/nightscout/AndroidAPS, with GitHub Actions.
//
// The keystore and passwords never leave this browser. The only requests are asking GitHub's
// public API whether the typed username exists (only the name is sent) and, in the optional
// Google Drive step, sending Google's one-time answer to Google's token endpoint. The page's
// Content-Security-Policy (set in docs/shared.conf.py) allows only the AAPS documentation site
// itself, https://api.github.com and https://oauth2.googleapis.com/token.
//
// Based on AAPS Builder by the AAPS Builder authors (github.com/dio99/aaps-builder), GNU Affero
// General Public License v3.0 (AGPL-3.0). Modified for the AAPS documentation: texts in the page
// so they can be translated, workflow maintained in github.com/nightscout/aaps-builder.
// Vendor library: _static/aaps-builder/aaps-builder.forge.min.js = node-forge 1.3.1
// (BSD-3-Clause or GPL-2.0), https://github.com/digitalbazaar/forge, the unmodified
// dist/forge.min.js of the npm package node-forge@1.3.1.
(() => {
  const TEMPLATE = { owner: 'nightscout', name: 'aaps-builder' };
  const REPO_NAME = 'my-aaps';
  const WORKFLOW_PATH = '.github/workflows/build.yml';       // where the template puts it

  const $ = id => document.getElementById('aapsb-' + id);
  // The texts are in the page (hidden list above), so they are translated with it.
  const M = {};
  document.querySelectorAll('[data-aapsb-msg]').forEach(el => { M[el.dataset.aapsbMsg] = el.textContent.trim(); });
  const t = (key, vars = {}) => M[key].replace(/\{(\w+)\}/g, (all, k) => k in vars ? vars[k] : all);
  const store = {
    get: k => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch {} }
  };
  const done = step => { const el = document.getElementById('aaps-builder-setup-step' + step); if (el) el.closest('section').classList.add('aapsb-done'); };

  // ---------- step 1: links ----------
  const userInput = $('user');
  userInput.value = store.get('ghUser') || '';
  const user = () => userInput.value.trim().replace(/^@/, '');
  const repoInput = $('repo');
  repoInput.value = store.get('ghRepo') || REPO_NAME;
  const repo = () => repoInput.value.trim() || REPO_NAME;

  const LINKS = [
    ['openWorkflowFile', '/blob/HEAD/' + WORKFLOW_PATH],
    ['openSecrets', '/settings/secrets/actions/new'],
    ['openSecrets2', '/settings/secrets/actions/new'],
    ['openActions', '/actions/workflows/build.yml'],
    ['openRuns', '/actions/workflows/build.yml']
  ];

  function updateLinks() {
    const u = user();
    store.set('ghUser', u);
    store.set('ghRepo', repo());
    // GitHub's own "Use this template" page, with its documented prefill parameters: the copy is
    // private and contains the build workflow. owner=@me is the signed-in user.
    const p = new URLSearchParams({ template_owner: TEMPLATE.owner, template_name: TEMPLATE.name,
                                    owner: '@me', name: repo(), visibility: 'private' });
    $('createRepo').href = 'https://github.com/new?' + p;
    document.querySelectorAll('.aapsb-repoUrl').forEach(el => { el.textContent = `github.com/${u || '…'}/${repo()}`; });
    const base = `https://github.com/${encodeURIComponent(u)}/${encodeURIComponent(repo())}`;
    for (const [id, path] of LINKS) $(id).href = u ? base + path : '#aaps-builder-setup-step1';
  }
  userInput.addEventListener('input', updateLinks);
  // Check that the username exists (GitHub's public API, sends only the name)
  let userTimer;
  async function checkUser() {
    const u = user();
    if (!u) { $('userMsg').textContent = ''; return; }
    try {
      const r = await fetch(`https://api.github.com/users/${encodeURIComponent(u)}`);
      if (u !== user()) return;
      if (r.status === 200) msg('userMsg', t('userOk'), 'ok');
      else if (r.status === 404) msg('userMsg', t('userBad'), 'err');
      else $('userMsg').textContent = '';
    } catch { $('userMsg').textContent = ''; }
  }
  userInput.addEventListener('input', () => { clearTimeout(userTimer); userTimer = setTimeout(checkUser, 600); });
  repoInput.addEventListener('input', updateLinks);
  for (const [id] of LINKS) {
    $(id).addEventListener('click', e => { if (!user()) { e.preventDefault(); userInput.focus(); alert(t('needUser')); } });
  }
  $('createRepo').addEventListener('click', () => done(1));

  // ---------- helpers ----------
  const utf8 = s => new TextEncoder().encode(s);
  function bytesToB64(bytes) {
    let s = '';
    for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return btoa(s);
  }
  const binStrToBytes = s => Uint8Array.from(s, c => c.charCodeAt(0));
  const sha1 = async (...parts) => {
    const all = new Uint8Array(parts.reduce((n, p) => n + p.length, 0));
    let o = 0; for (const p of parts) { all.set(p, o); o += p.length; }
    return new Uint8Array(await crypto.subtle.digest('SHA-1', all));
  };
  const eq = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
  // JKS uses the password as UTF-16BE bytes
  const utf16be = s => { const b = new Uint8Array(s.length * 2); for (let i = 0; i < s.length; i++) { b[2*i] = s.charCodeAt(i) >> 8; b[2*i+1] = s.charCodeAt(i) & 255; } return b; };

  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); }
    catch {
      const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta);
      ta.select(); document.execCommand('copy'); ta.remove();
    }
  }
  function msg(id, text, cls) { const el = $(id); el.className = 'aapsb-msg ' + cls; el.textContent = text; }

  let secretValue = null;
  function setSecret(ksBytes, storePass, alias, keyPass) {
    const raw = [bytesToB64(ksBytes), storePass, alias, keyPass].join('|');
    secretValue = bytesToB64(utf8(raw));
    $('secretPreview').textContent = secretValue.slice(0, 16) + '…';
    done(2);
    $('s3wait').hidden = true;
    $('s3ready').hidden = false;
  }

  // ---------- step 2a: existing keystore ----------
  function parseJks(bytes) {
    const v = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    if (v.getUint32(0) !== 0xFEEDFEED) return null;
    let o = 12; const n = v.getUint32(8); const entries = [];
    const readUtf = () => { const len = v.getUint16(o); o += 2; const s = new TextDecoder().decode(bytes.subarray(o, o + len)); o += len; return s; };
    const skipCert = () => { if (v.getUint32(4) === 2) readUtf(); const len = v.getUint32(o); o += 4 + len; };
    for (let i = 0; i < n; i++) {
      const tag = v.getUint32(o); o += 4;
      const alias = readUtf(); o += 8;
      if (tag === 1) {
        const len = v.getUint32(o); o += 4;
        const key = bytes.subarray(o, o + len); o += len;
        const chain = v.getUint32(o); o += 4;
        for (let c = 0; c < chain; c++) skipCert();
        entries.push({ alias, key });
      } else { skipCert(); }
    }
    return { entries, body: bytes.subarray(0, o), digest: bytes.subarray(o, o + 20) };
  }

  // Sun JKS KeyProtector: verify key password without fully decrypting
  async function jksKeyPassOk(encKeyInfo, pass) {
    // EncryptedPrivateKeyInfo: SEQ { AlgId, OCTET STRING data }
    const asn = forge.asn1.fromDer(forge.util.createBuffer(String.fromCharCode.apply(null, encKeyInfo)));
    const data = binStrToBytes(asn.value[1].value);
    const salt = data.subarray(0, 20), enc = data.subarray(20, data.length - 20), check = data.subarray(data.length - 20);
    const pw = utf16be(pass);
    const plain = new Uint8Array(enc.length);
    let d = salt;
    for (let off = 0; off < enc.length; off += 20) {
      d = await sha1(pw, d);
      for (let j = 0; j < 20 && off + j < enc.length; j++) plain[off + j] = enc[off + j] ^ d[j];
    }
    return eq(await sha1(pw, plain), check);
  }

  let haveBytes = null, haveKind = null, haveJks = null;
  $('ksFile').addEventListener('change', async () => {
    const f = $('ksFile').files[0]; $('haveMsg').textContent = '';
    if (!f) return;
    haveBytes = new Uint8Array(await f.arrayBuffer());
    haveJks = null; haveKind = null;
    try { haveJks = parseJks(haveBytes); } catch { haveJks = null; }
    if (haveJks) {
      haveKind = 'jks';
      const sel = $('ksAliasSel');
      sel.innerHTML = '';
      haveJks.entries.forEach(e => sel.add(new Option(e.alias, e.alias)));
      if (haveJks.entries.length > 0) {
        sel.hidden = false; $('ksAlias').hidden = true; $('ksAlias').value = haveJks.entries[0].alias;
        sel.onchange = () => { $('ksAlias').value = sel.value; };
      }
    } else if (haveBytes[0] === 0x30) {
      haveKind = 'p12';
      $('ksAliasSel').hidden = true; $('ksAlias').hidden = false;
    } else {
      msg('haveMsg', t('errFormat'), 'err');
    }
  });
  $('samePass').addEventListener('change', () => { $('keyPassWrap').hidden = $('samePass').checked; });

  $('haveGo').addEventListener('click', async () => {
    const pass = $('ksPass').value, alias = $('ksAlias').value.trim();
    const keyPass = $('samePass').checked ? pass : $('keyPass').value;
    if (!haveBytes) return msg('haveMsg', t('errNoFile'), 'err');
    if (!haveKind) return msg('haveMsg', t('errFormat'), 'err');
    if (!pass || !alias || !keyPass) return msg('haveMsg', t('errEmpty'), 'err');
    if ([pass, alias, keyPass].some(s => s.includes('|'))) return msg('haveMsg', t('errPipe'), 'err');

    try {
      if (haveKind === 'jks') {
        const d = await sha1(utf16be(pass), utf8('Mighty Aphrodite'), haveJks.body);
        if (!eq(d, haveJks.digest)) return msg('haveMsg', t('errPass'), 'err');
        const entry = haveJks.entries.find(e => e.alias.toLowerCase() === alias.toLowerCase());
        if (!entry) return msg('haveMsg', t('errAlias', { aliases: haveJks.entries.map(e => e.alias).join(', ') }), 'err');
        if (!(await jksKeyPassOk(entry.key, keyPass))) return msg('haveMsg', t('errKeyPass'), 'err');
        setSecret(haveBytes, pass, entry.alias, keyPass);
        return msg('haveMsg', t('okHave'), 'ok');
      }
      // PKCS12
      let p12;
      try {
        const asn = forge.asn1.fromDer(forge.util.createBuffer(String.fromCharCode.apply(null, haveBytes)));
        p12 = forge.pkcs12.pkcs12FromAsn1(asn, pass);
      } catch (e) {
        if (/password|MAC/i.test(String(e && e.message))) return msg('haveMsg', t('errPass'), 'err');
        // Could not parse locally; let the build validate it
        setSecret(haveBytes, pass, alias, keyPass);
        return msg('haveMsg', t('okHaveUnchecked'), 'warn');
      }
      const names = [...new Set(p12.safeContents.flatMap(sc => sc.safeBags.flatMap(b => (b.attributes.friendlyName || []))))];
      if (names.length && !names.some(n => n.toLowerCase() === alias.toLowerCase())) {
        return msg('haveMsg', t('errAlias', { aliases: names.join(', ') }), 'err');
      }
      setSecret(haveBytes, pass, alias, keyPass);
      msg('haveMsg', t('okHave'), 'ok');
    } catch (e) {
      console.error(e);
      setSecret(haveBytes, pass, alias, keyPass);
      msg('haveMsg', t('okHaveUnchecked'), 'warn');
    }
  });

  // ---------- step 2b: new keystore ----------
  // Use the browser's cryptographic RNG for everything forge needs (salts, IVs, serial)
  forge.random.getBytesSync = n => String.fromCharCode.apply(null, crypto.getRandomValues(new Uint8Array(n)));
  forge.random.getBytes = (n, cb) => cb ? cb(null, forge.random.getBytesSync(n)) : forge.random.getBytesSync(n);
  let newKsBytes = null;
  $('newGo').addEventListener('click', async () => {
    const p1 = $('newPass').value, p2 = $('newPass2').value;
    if (p1.length < 8) return msg('newMsg', t('errShort'), 'err');
    if (p1 !== p2) return msg('newMsg', t('errMatch'), 'err');
    if (!/^[\x21-\x7e]+$/.test(p1) || p1.includes('|')) return msg('newMsg', t('errAscii'), 'err');
    $('newGo').disabled = true;
    msg('newMsg', t('working'), '');
    try {
      const kp = await crypto.subtle.generateKey(
        { name: 'RSASSA-PKCS1-v1_5', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' },
        true, ['sign', 'verify']);
      const pkcs8 = new Uint8Array(await crypto.subtle.exportKey('pkcs8', kp.privateKey));
      const key = forge.pki.privateKeyFromAsn1(forge.asn1.fromDer(forge.util.createBuffer(String.fromCharCode.apply(null, pkcs8))));
      const cert = forge.pki.createCertificate();
      cert.publicKey = forge.pki.setRsaPublicKey(key.n, key.e);
      cert.serialNumber = '01' + forge.util.bytesToHex(forge.random.getBytesSync(8));
      cert.validity.notBefore = new Date();
      cert.validity.notAfter = new Date(); cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 50);
      const subject = [{ name: 'commonName', value: 'AAPS' }];
      cert.setSubject(subject); cert.setIssuer(subject);
      cert.sign(key, forge.md.sha256.create());
      const asn = forge.pkcs12.toPkcs12Asn1(key, [cert], p1, { algorithm: '3des', friendlyName: 'key0', generateLocalKeyId: true });
      newKsBytes = binStrToBytes(forge.asn1.toDer(asn).getBytes());
      setSecret(newKsBytes, p1, 'key0', p1);
      $('backupBox').hidden = false;
      msg('newMsg', t('okNew'), 'ok');
    } catch (e) {
      console.error(e);
      msg('newMsg', String(e), 'err');
      $('newGo').disabled = false;
    }
  });
  $('downloadKs').addEventListener('click', () => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([newKsBytes], { type: 'application/octet-stream' }));
    a.download = 'aaps-keystore.jks';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });

  // ---------- step 6: Google Drive access (GDRIVE_OAUTH2) ----------
  // The same Google OAuth client, scope and PKCE flow as the AAPS preparation page
  // (github.com/nightscout/aaps-ci-preparation), so the build workflow reads the value the same
  // way: base64(client_id|refresh_token). Google sends the browser to a loopback address where
  // nothing listens: the tab shows an error, but its address holds the answer. The user copies that
  // address here, and this page sends the code to Google's token endpoint, and nowhere else.
  // The PKCE verifier stays in this tab, so the code is useless to anything else that sees it.
  const GOOGLE_CLIENT_ID = '705061051276-5ssikkg2ag39l7hj9t63saq549n3s2n5.apps.googleusercontent.com';
  const GOOGLE_REDIRECT = 'http://127.0.0.1:47913/aaps-builder';
  const session = {
    get: k => { try { return sessionStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { sessionStorage.setItem(k, v); } catch {} }
  };
  const randomHex = n => [...crypto.getRandomValues(new Uint8Array(n))].map(b => b.toString(16).padStart(2, '0')).join('');
  const b64url = bytes => bytesToB64(bytes).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

  // The link is ready before the tap, so the browser opens it as a normal link and does not
  // block it as a pop-up.
  async function setGoogleLink(verifier, state) {
    const challenge = b64url(new Uint8Array(await crypto.subtle.digest('SHA-256', utf8(verifier))));
    const p = new URLSearchParams({
      client_id: GOOGLE_CLIENT_ID, redirect_uri: GOOGLE_REDIRECT, response_type: 'code',
      scope: 'https://www.googleapis.com/auth/drive.file', access_type: 'offline',
      // consent: Google sends a refresh token only when the user is asked, also after an earlier grant
      prompt: 'consent', code_challenge_method: 'S256', code_challenge: challenge, state
    });
    $('googleAuth').href = 'https://accounts.google.com/o/oauth2/v2/auth?' + p;
  }
  // A new attempt: new verifier and state
  function newGoogleAttempt() {
    const verifier = randomHex(32), state = randomHex(16);
    session.set('gVerifier', verifier);
    session.set('gState', state);
    return setGoogleLink(verifier, state);
  }
  // Keep the attempt of this tab if the page is reloaded while the user is in the Google tab
  if (session.get('gVerifier') && session.get('gState')) setGoogleLink(session.get('gVerifier'), session.get('gState'));
  else newGoogleAttempt();

  let gdriveValue = null;
  $('googleGo').addEventListener('click', async () => {
    const text = $('googleUrl').value.trim();
    if (!text) return msg('googleMsg', t('gNoUrl'), 'err');
    let params;
    try { params = new URL(text).searchParams; } catch { return msg('googleMsg', t('gNoCode'), 'err'); }
    if (params.get('error')) return msg('googleMsg', t('gDenied'), 'err');
    const code = params.get('code');
    if (!code) return msg('googleMsg', t('gNoCode'), 'err');
    if (params.get('state') !== session.get('gState')) return msg('googleMsg', t('gOldUrl'), 'err');
    $('googleGo').disabled = true;
    msg('googleMsg', t('gWorking'), '');
    try {
      const r = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: GOOGLE_CLIENT_ID, code, code_verifier: session.get('gVerifier'),
          grant_type: 'authorization_code', redirect_uri: GOOGLE_REDIRECT
        })
      });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) {
        msg('googleMsg', t('gFailed', { error: data.error || r.status }), 'err');
        await newGoogleAttempt();
        return;
      }
      if (!data.refresh_token) { msg('googleMsg', t('gNoRefresh'), 'err'); await newGoogleAttempt(); return; }
      gdriveValue = bytesToB64(utf8(GOOGLE_CLIENT_ID + '|' + data.refresh_token));
      $('gdrivePreview').textContent = gdriveValue.slice(0, 16) + '…';
      $('gdriveReady').hidden = false;
      $('googleUrl').value = '';
      msg('googleMsg', t('gOk'), 'ok');
      done(6);
      await newGoogleAttempt();      // the code is used up; a new tap starts a new attempt
    } catch (e) {
      console.error(e);
      msg('googleMsg', t('gFailed', { error: String(e) }), 'err');
    } finally {
      $('googleGo').disabled = false;
    }
  });

  // ---------- step 3 / 6: copy secret names and values ----------
  document.querySelectorAll('[data-aapsb-copy]').forEach(b => b.addEventListener('click', async () => {
    const kind = b.dataset.aapsbCopy;
    const values = { name: 'KEYSTORE_SET', gdrive: 'GDRIVE_OAUTH2', secret: secretValue, gdriveValue };
    await copyText(values[kind]);
    if (kind === 'secret') msg('copyMsg', t('copied'), 'ok');
    if (kind === 'name') msg('copyMsg', t('copiedName'), 'ok');
    if (kind === 'gdriveValue') msg('gdriveCopyMsg', t('gCopied'), 'ok');
    const label = b.textContent;
    b.textContent = t('copiedShort');
    setTimeout(() => { b.textContent = label; }, 2000);
  }));

  updateLinks();
  checkUser();
})();
</script>
