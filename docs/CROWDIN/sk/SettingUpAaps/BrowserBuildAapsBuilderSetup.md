(aaps-builder-setup)=

# Stránka nastavenia AAPS Builder

Zostavte si vlastnú aplikáciu **AAPS** na GitHube. Žiadne programy na inštaláciu, žiadny terminál. Prvýkrát to trvá asi 10 minút, potom každé zostavenie spúšťate sami.

Každý krok je podrobnejšie vysvetlený so snímkami obrazovky na stránke [Zostavenie v prehliadači pomocou AAPS Builder](#aaps-builder). Nechajte si túto stránku otvorenú na inej karte.

Tlačidlá nižšie otvárajú GitHub na novej karte Chromu. Ak sa chcete vrátiť na túto stránku, ťuknite na tlačidlo kariet vedľa panela s adresou v Chrome (štvorček s číslom) a zvoľte túto stránku.

(aaps-builder-setup-step1)=

## Krok 1 – Vytvorte si súkromný repozitár na zostavenie

Tým si vo svojom účte GitHub vytvoríte vlastnú súkromnú kópiu AAPS Builder: repozitár, v ktorom už je workflow zostavenia. Iba vy vidíte repozitár a aplikácie, ktoré v ňom vzniknú. **Nemusíte** vytvárať fork AndroidAPS: zdrojový kód AAPS sa pri každom zostavení stiahne z oficiálneho repozitára AndroidAPS.

<label class="aapsb-label" for="aapsb-user">Vaše používateľské meno na GitHube</label>
<input class="aapsb-input" type="text" id="aapsb-user" autocomplete="username" spellcheck="false" placeholder="my-github-name" />
<span class="aapsb-msg" id="aapsb-userMsg"></span>

Najprv sa v tomto prehliadači prihláste na github.com (nemáte účet? vytvorte si ho zadarmo). Potom sa vráťte sem. Použite svoje používateľské meno (je uvedené vo vašom profile GitHub), nie e-mail: stránka sa GitHubu spýta, či toto používateľské meno existuje.

<label class="aapsb-label" for="aapsb-repo">Názov vášho repozitára</label>
<input class="aapsb-input" type="text" id="aapsb-repo" spellcheck="false" placeholder="my-aaps" />

Ponechajte navrhnutý názov. Už ste repozitár vytvorili s iným názvom? Zadajte sem presne tento názov.

```{note}
**Už máte repozitár AAPS Builder** (vytvorený staršou verziou tejto stránky)? Nevytvárajte nový: zadajte sem jeho presný názov, tlačidlo nižšie preskočte a raz aktualizujte jeho workflow: pozrite časť **Updating your copy** na konci tohto kroku. Vaše secrety zostanú tak, ako sú.

Ak aj tak chcete nový repozitár, zvoľte názov, ktorý ešte nemáte, napríklad `my-aaps-2`, a v kroku 2 použite to isté úložisko kľúčov.

Nezadávajte názov svojho forku AndroidAPS: fork je verejný a už sa zostavuje vlastným workflow **AAPS CI**.
```

Váš repozitár:<code class="aapsb-repoUrl"></code>

Skôr než použijete tlačidlá nižšie, skontrolujte tento názov: stránka si pamätá názov z vašej poslednej návštevy.

<a class="aapsb-btn" id="aapsb-createRepo" target="_blank" rel="noopener">Create my private repository</a>

Na stránke GitHubu, ktorá sa otvorí, je už všetko vyplnené: šablóna `nightscout/aaps-builder`, váš účet ako vlastník, názov vášho repozitára a **Private**. Nič nemeňte a voľbu **Include all branches** nechajte nezaškrtnutú.

1. Kliknite na zelené tlačidlo **Create repository**.
2. GitHub zobrazí váš nový repozitár s priečinkom `.github` a súborom `README.md`: v ňom je workflow zostavenia. Kvôli kroku 2 sa vráťte na túto stránku.

```{admonition} Your new repository is empty (no files)?
:class: warning

Nebol vytvorený zo šablóny. Vymažte ho (**Settings** → spodná časť stránky → **Delete this repository**) a potom znova ťuknite na **Create my private repository**.
```

```{admonition} Updating your copy (existing AAPS Builder repository)
:class: dropdown

Kroky zostavenia sa aktualizujú za vás: pri každom zostavení váš repozitár spustí verziu, ktorú vydali vývojári AAPS v nightscout/aaps-builder, a vo vašom repozitári sa nič nezmení. Svoj súbor workflow nahradíte iba vtedy, keď to oznámi stránka [Aktualizácie a zmeny dokumentácie](../Maintenance/DocumentationUpdate.md) (napríklad kvôli novému variantu zostavenia), alebo raz, ak bol váš repozitár vytvorený staršou verziou tejto stránky alebo zo starej šablóny. Váš secret `KEYSTORE_SET` zostáva bez zmeny.

1. <a class="aapsb-btn aapsb-secondary" href="https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/build.yml" target="_blank" rel="noopener">Open the newest workflow</a>

   Na počítači kliknite na **ikonu kopírovania** („Copy raw file“) vpravo hore pri súbore. V telefóne namiesto toho otvorte <a href="https://raw.githubusercontent.com/nightscout/aaps-builder/main/.github/workflows/build.yml" target="_blank" rel="noopener">verziu ako čistý text</a>, stlačte a podržte text → **Vybrať všetko** → **Kopírovať**.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openWorkflowFile" target="_blank" rel="noopener">Open my workflow file</a>

   Otvorí súbor `.github/workflows/build.yml` v <code class="aapsb-repoUrl"></code> na úpravu.
3. Nahraďte celý text skopírovaným workflow (v telefóne: stlačte a podržte → **Vybrať všetko** → **Prilepiť**) a potom dvakrát kliknite na **Commit changes…**. Prvý riadok súboru ukazuje jeho verziu.
```

(aaps-builder-setup-step2)=

## Krok 2 – Váš podpisový kľúč

Aplikácia musí byť podpísaná vaším vlastným kľúčom. Vždy používajte ten istý kľúč, inak budete musieť pri aktualizácii AAPS odinštalovať (a prísť o jeho nastavenia). Zvoľte jednu z dvoch kariet.

`````{tab-set}

````{tab-item} I already have a keystore
Napríklad z Android Studia (.jks).

<label class="aapsb-label" for="aapsb-ksFile">Súbor úložiska kľúčov</label>
<input type="file" id="aapsb-ksFile" accept=".jks,.keystore,.p12,.pfx,application/octet-stream">

<label class="aapsb-label" for="aapsb-ksPass">Heslo úložiska kľúčov</label>
<input class="aapsb-input" type="password" id="aapsb-ksPass" autocomplete="off">

<label class="aapsb-label" for="aapsb-ksAlias">Alias kľúča</label>
<select class="aapsb-input" id="aapsb-ksAliasSel" hidden></select>
<input class="aapsb-input" type="text" id="aapsb-ksAlias" autocomplete="off" spellcheck="false" placeholder="key0">

<label class="aapsb-check"><input type="checkbox" id="aapsb-samePass" checked> Heslo kľúča je rovnaké ako heslo úložiska kľúčov</label>

<div id="aapsb-keyPassWrap" hidden>

<label class="aapsb-label" for="aapsb-keyPass">Heslo kľúča</label>
<input class="aapsb-input" type="password" id="aapsb-keyPass" autocomplete="off">

</div>

<button class="aapsb-btn" type="button" id="aapsb-haveGo">Check and continue</button> <span class="aapsb-msg" id="aapsb-haveMsg"></span>
````

````{tab-item} Create a new key
Zostavujete AAPS prvýkrát? Nový kľúč sa vytvorí tu, vo vašom prehliadači. Nič sa nikam neposiela.

<label class="aapsb-label" for="aapsb-newPass">Zvoľte heslo (aspoň 8 znakov, bez písmen s diakritikou)</label>
<input class="aapsb-input" type="password" id="aapsb-newPass" autocomplete="new-password">

<label class="aapsb-label" for="aapsb-newPass2">Zopakujte heslo</label>
<input class="aapsb-input" type="password" id="aapsb-newPass2" autocomplete="new-password">

<button class="aapsb-btn" type="button" id="aapsb-newGo">Create key</button> <span class="aapsb-msg" id="aapsb-newMsg"></span>

<div class="aapsb-box" id="aapsb-backupBox" hidden>

**Uložte si zálohu kľúča!**

Stiahnite súbor. Tieto tri veci uchovávajte spolu na bezpečnom mieste mimo telefónu (napr. vo vlastnom cloudovom úložisku):

- súbor `aaps-keystore.jks`
- vaše heslo
- alias kľúča: **`key0`**

Všetky tri budete potrebovať, ak niekedy budete AAPS zostavovať iným spôsobom, napr. v Android Studiu.

<button class="aapsb-btn" type="button" id="aapsb-downloadKs">Download backup (aaps-keystore.jks)</button>

</div>
````

`````
(aaps-builder-setup-step3)=
## Krok 3 – Odovzdajte kľúč svojmu repozitáru
<span id="aapsb-s3wait">Najprv dokončite krok 2.</span>

<div id="aapsb-s3ready" hidden>
  1. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets" target="_blank" rel="noopener">Open the secrets page</a> Otvorí: <code class="aapsb-repoUrl"></code> Zobrazuje sa „Page not found“ (404)? Najprv skontrolujte, či ste v tomto prehliadači prihlásení na github.com: GitHub ukazuje 404 pri súkromných repozitároch, keď nie ste prihlásení. Inak sa vaše používateľské meno alebo názov repozitára v kroku 1 nezhoduje s vaším repozitárom: skontrolujte ich na github.com a zadajte ich v kroku 1. 2. Ťuknite na „Copy name“ a vložte ho do malého poľa „Name“: `KEYSTORE_SET` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="name">Copy name</button> 3. Ťuknite na „Copy secret“ a vložte dlhý kód do veľkého poľa „Secret“: <code id="aapsb-secretPreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="secret">Copy secret</button> <span class="aapsb-msg" id="aapsb-copyMsg"></span> Secret je veľmi dlhý kód (tisícky znakov), NIE slovo KEYSTORE_SET. Najprv skopírujte a vložte názov, potom dlhý kód. 4. Ťuknite na „Add secret“. Hotovo, toto už nikdy nebudete musieť robiť znova.
</div>
(aaps-builder-setup-step4)=
## Krok 4 – Zostavte aplikáciu

1. <a class="aapsb-btn" id="aapsb-openActions" target="_blank" rel="noopener">Open the build page</a>

   Otvorí: <code class="aapsb-repoUrl"></code>

   Zobrazuje sa „Page not found“ (404)? Najprv skontrolujte, či ste v tomto prehliadači prihlásení na github.com: GitHub ukazuje 404 pri súkromných repozitároch, keď nie ste prihlásení. Inak sa vaše používateľské meno alebo názov repozitára v kroku 1 nezhoduje s vaším repozitárom: skontrolujte ich na github.com a zadajte ich v kroku 1. Namiesto toho sa otvorila aplikácia GitHub? Ťuknite na „RUN WORKFLOW“, skontrolujte verziu a variant a znova ťuknite na „RUN WORKFLOW“. Ak aplikácia stále ukazuje „Nothing to see here“, potiahnite zoznam nadol, aby ste videli svoje zostavenie.
2. Ak sa zobrazí výzva, kliknite na zelené tlačidlo, ktoré povolí workflowy.
Zoznam workflowov obsahuje dve položky: použite „Build AAPS“. „AAPS Builder“ ignorujte: obsahuje kroky zostavenia a nemá tlačidlo „Run workflow“.
3. Kliknite na „Run workflow“ a potom na zelené tlačidlo „Run workflow“. „latest“ zostaví najnovšiu verziu AAPS. ***tip:*** *inú verziu môžete zostaviť tak, že namiesto „latest“ zadáte názov jej [tagu](https://github.com/nightscout/AndroidAPS/tags)*
4. Počkajte asi 15–30 minút. Zelená fajka znamená, že je hotovo.
Chcete e-mail, keď je zostavenie hotové? GitHub vám pošle e-mail, iba keď zostavenie zlyhá. Ak ho chcete dostať aj pri úspechu: na github.com otvorte svoj profilový obrázok → Settings → Notifications → System → Actions a zrušte zaškrtnutie „Only notify for failed workflows“.

```{admonition} No "Build AAPS" / "Run workflow" button?
:class: warning

1. Otvorte svoj repozitár a skontrolujte, či obsahuje priečinok `.github` so súborom `workflows/build.yml`. Ak je repozitár prázdny, nebol vytvorený zo šablóny: vymažte ho (**Settings** → spodná časť stránky → **Delete this repository**) a znova urobte [krok 1](#aaps-builder-setup-step1) pomocou tlačidla.
2. Otvorte kartu Actions. Ak sa tam píše, že workflowy sú vypnuté, kliknite na zelené tlačidlo, ktoré ich povolí. Potom v zozname kliknite na „Build AAPS“.
```

(aaps-builder-setup-step5)=

## Krok 5 – Nainštalujte aplikáciu do telefónu

```{admonition} Before every update: back up your settings!
:class: warning

1. V AAPS: Údržba → Exportovať nastavenia. (Aj tak to robte pravidelne, napr. po zmene profilu alebo raz za mesiac.)
2. Exportovaný súbor skopírujte MIMO telefón, napr. na Disk Google alebo do Dropboxu. Záloha, ktorá je iba v telefóne, sa stratí spolu s telefónom.
3. Uchovávajte tam aj súbory APK a niekoľko starších exportov. Potom sa vždy môžete vrátiť späť.

[Ako exportovať nastavenia](#ExportImportSettings-Settings-Export) · [Časté otázky AAPS: ako usporiadať zálohy](#FAQ-organize-backups)
```

1. Otvorte túto stránku v telefóne, vo webovom prehliadači (Chrome). Ak sa to vyžaduje, prihláste sa na github.com.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openRuns" target="_blank" rel="noopener">Open my builds</a>

   Namiesto toho sa otvorila aplikácia GitHub? Nedokáže sťahovať zostavenia. V aplikácii otvorte najnovšie zostavenie a ťuknite na „Artifacts ↗“ alebo ťuknite na ikonu zdieľania a zvoľte Chrome (alebo „Copy link“ a potom vložte odkaz do panela s adresou v Chrome). Pokračujte v Chrome.

   Zobrazuje sa „Page not found“ (404)? Najprv skontrolujte, či ste v tomto prehliadači prihlásení na github.com: GitHub ukazuje 404 pri súkromných repozitároch, keď nie ste prihlásení. Inak sa vaše používateľské meno alebo názov repozitára v kroku 1 nezhoduje s vaším repozitárom: skontrolujte ich na github.com a zadajte ich v kroku 1.

   Aby sa odkazy GitHubu neotvárali v aplikácii: Android Nastavenia → Aplikácie → GitHub → Otvárať predvolene (Open by default) → vypnite „Otvárať podporované odkazy“ (Open supported links).
3. Ťuknite na najnovšie zostavenie so zelenou fajkou ✅.
4. Posuňte sa nižšie k súhrnu zostavenia a ťuknite na veľký odkaz „📱 Download AAPS …“ (alebo sa posuňte ešte nižšie k „Artifacts“ a ťuknite na aaps-….apk). Posúvajte prstom po texte, nie po diagrame krokov zostavenia.
5. Keď sa sťahovanie dokončí, ťuknite na súbor a zvoľte Inštalovať. Ak sa to vyžaduje, povoľte inštaláciu aplikácií z tohto zdroja.
6. aaps-wear-….apk je pre inteligentné hodinky. Ak ich nepoužívate, preskočte ho.

APK sa v repozitári nezobrazuje v časti „Code“, iba na stránke zostavenia. Uchováva sa 14 dní.

Nová verzia AAPS? Zálohujte si nastavenia a potom ju zostavte podľa [kroku 4](#aaps-builder-setup-step4). Váš repozitár nikdy nič nezostaví sám.

(aaps-builder-setup-step6)=

## Krok 6 – Voliteľné: získajte aplikáciu na Disk Google

Chcete, aby sa APK objavil na vašom Disku Google (uložený navždy)? Pridajte ešte jeden secret, GDRIVE_OAUTH2. Táto stránka ho pre vás získa od Googlu. AAPS potom na vašom Disku Google uvidí a môže meniť iba súbory, ktoré samo vytvorí, nič iné.

1. <a class="aapsb-btn" id="aapsb-googleAuth" target="_blank" rel="noopener">Connect Google Drive</a>

   Google sa otvorí na novej karte. Zvoľte svoj účet Google a povoľte AAPS zobrazovať a meniť jeho vlastné súbory. Ak Google hlási, že aplikácia nie je overená, ťuknite na „Rozšírené“ („Advanced“) a potom na „Prejsť na …“ („Go to …“).
2. Potom nová karta zobrazí chybu, napríklad **„Táto stránka nie je dostupná“** („This site can't be reached“) alebo **„127.0.0.1 refused to connect“**. **Tak to má byť.** Odpoveď Googlu je v adrese tejto karty.

   Ťuknite na panel s adresou tejto karty, označte celú adresu a skopírujte ju. Začína sa na `http://127.0.0.1:47913/`. Do niekoľkých minút sa vráťte na túto stránku: odpoveď platí iba krátky čas.
3. <label class="aapsb-label" for="aapsb-googleUrl">Sem vložte skopírovanú adresu</label> <input class="aapsb-input" type="url" id="aapsb-googleUrl" autocomplete="off" spellcheck="false" placeholder="http://127.0.0.1:47913/aaps-builder?…" /> <button class="aapsb-btn" type="button" id="aapsb-googleGo">Get GDRIVE_OAUTH2</button> <span class="aapsb-msg" id="aapsb-googleMsg"></span>

<div id="aapsb-gdriveReady" hidden>

4. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets2" target="_blank" rel="noopener">Open the secrets page</a>

   Otvorí: <code class="aapsb-repoUrl"></code>

   Zobrazuje sa „Page not found“ (404)? Najprv skontrolujte, či ste v tomto prehliadači prihlásení na github.com: GitHub ukazuje 404 pri súkromných repozitároch, keď nie ste prihlásení. Inak sa vaše používateľské meno alebo názov repozitára v kroku 1 nezhoduje s vaším repozitárom: skontrolujte ich na github.com a zadajte ich v kroku 1.
5. Ťuknite na „Copy name“ a vložte ho do malého poľa „Name“: `GDRIVE_OAUTH2` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="gdrive">Copy name</button>
6. Ťuknite na „Copy secret“ a vložte kód do veľkého poľa „Secret“: <code id="aapsb-gdrivePreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="gdriveValue">Copy secret</button> <span class="aapsb-msg" id="aapsb-gdriveCopyMsg"></span>
7. Ťuknite na „Add secret“.

</div>

```{admonition} Already have a GDRIVE_OAUTH2 value?
:class: dropdown

Funguje aj hodnota z prípravnej stránky AAPS pre druhý spôsob zostavenia v prehliadači: otvorte stránku secretov, pridajte názov `GDRIVE_OAUTH2` a vložte svoju hodnotu. Pozrite [Uloženie zostavení na Disk Google](#aaps-builder-google-drive).
```

Od nasledujúceho zostavenia sa súbory APK ukladajú aj na Disk Google do priečinka AAPS/&lt;version&gt;.

Ak 6 mesiacov nič nezostavíte alebo zmeníte heslo ku Googlu, Google prístup zruší. Zostavenie vám to potom oznámi: zopakujte tento krok.

----

Všetko na tejto stránke beží vo vašom prehliadači. Váš kľúč a heslá sa nikam neposielajú, okrem miesta, kam ich sami vložíte. Na GitHub sa posiela iba vaše používateľské meno na GitHube, aby sa overilo, že existuje. V kroku 6 sa odpoveď Googlu posiela iba Googlu, aby sa získal GDRIVE_OAUTH2. Workflow zostavenia spravujú vývojári AAPS v [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) a vychádza z AAPS Builder (AGPL-3.0).

<div id="aapsb-msgs" hidden>

- <span data-aapsb-msg="copied">Dlhý kód je skopírovaný: vložte ho do veľkého poľa „Secret“ a potom ťuknite na „Add secret“.</span>
- <span data-aapsb-msg="copiedName">Názov je skopírovaný: vložte ho do malého poľa „Name“.</span>
- <span data-aapsb-msg="userOk">✓ Používateľ GitHubu sa našiel.</span>
- <span data-aapsb-msg="userBad">✗ Používateľ GitHubu s týmto menom neexistuje. Použite svoje používateľské meno (je uvedené vo vašom profile GitHub), nie e-mail.</span>
- <span data-aapsb-msg="copiedShort">Skopírované ✓</span>
- <span data-aapsb-msg="needUser">Najprv v kroku 1 zadajte svoje používateľské meno na GitHube.</span>
- <span data-aapsb-msg="errPipe">Heslá a alias nesmú obsahovať znak |</span>
- <span data-aapsb-msg="errNoFile">Vyberte svoj súbor úložiska kľúčov.</span>
- <span data-aapsb-msg="errEmpty">Vyplňte heslo a alias.</span>
- <span data-aapsb-msg="errPass">Nesprávne heslo úložiska kľúčov.</span>
- <span data-aapsb-msg="errKeyPass">Nesprávne heslo kľúča.</span>
- <span data-aapsb-msg="errAlias">Alias sa v úložisku kľúčov nenašiel. Dostupné: {aliases}</span>
- <span data-aapsb-msg="errFormat">Toto nevyzerá ako súbor úložiska kľúčov.</span>
- <span data-aapsb-msg="okHave">Úložisko kľúčov je v poriadku! Pokračujte krokom 3.</span>
- <span data-aapsb-msg="okHaveUnchecked">Úložisko kľúčov je načítané. Heslo sa skontroluje pri zostavení. Pokračujte krokom 3.</span>
- <span data-aapsb-msg="errShort">Heslo musí mať aspoň 8 znakov.</span>
- <span data-aapsb-msg="errAscii">Používajte iba a–z, A–Z, 0–9 a symboly ako ! ? # – bez medzier, bez písmen s diakritikou a bez |</span>
- <span data-aapsb-msg="errMatch">Heslá sa nezhodujú.</span>
- <span data-aapsb-msg="working">Vytvára sa kľúč…</span>
- <span data-aapsb-msg="okNew">Kľúč je vytvorený. Stiahnite si zálohu nižšie a potom pokračujte krokom 3.</span>
- <span data-aapsb-msg="gNoUrl">Najprv vložte celú adresu karty Google.</span>
- <span data-aapsb-msg="gNoCode">V tejto adrese nie je odpoveď od Googlu. Skopírujte celú adresu karty, ktorá zobrazuje chybu. Začína sa na http://127.0.0.1:47913/</span>
- <span data-aapsb-msg="gDenied">Prístup ku Googlu nebol povolený. Ťuknite znova na „Connect Google Drive“ a povoľte prístup.</span>
- <span data-aapsb-msg="gOldUrl">Táto adresa patrí k staršiemu pokusu. Ťuknite znova na „Connect Google Drive“ a použite novú adresu.</span>
- <span data-aapsb-msg="gWorking">Pýtam sa Googlu…</span>
- <span data-aapsb-msg="gFailed">Google odpoveď neprijal ({error}). Odpoveď platí iba niekoľko minút a iba raz: ťuknite znova na „Connect Google Drive“.</span>
- <span data-aapsb-msg="gNoRefresh">Google neposlal dlhodobý prístup. Ťuknite znova na „Connect Google Drive“.</span>
- <span data-aapsb-msg="gOk">GDRIVE_OAUTH2 je pripravený. Pridajte ho nižšie ako secret.</span>
- <span data-aapsb-msg="gCopied">Kód je skopírovaný: vložte ho do veľkého poľa „Secret“ a potom ťuknite na „Add secret“.</span>

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
    ['openWorkflowFile', '/edit/main/' + WORKFLOW_PATH],
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
