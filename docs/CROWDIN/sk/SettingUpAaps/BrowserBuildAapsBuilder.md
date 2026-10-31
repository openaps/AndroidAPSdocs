(aaps-builder)=

# Zostavenie v prehliadači pomocou AAPS Builder

```{note}
Toto je odporúčaný spôsob, ako zostaviť AAPS z **telefónu s Androidom**. Funguje aj z prehliadača na akomkoľvek počítači. Ďalšie spôsoby zostavenia z počítača alebo z iPhonu nájdete v prehľade [Zostavenie v prehliadači](BrowserBuild.md).
```

```{contents} In this page
:backlinks: entry
:depth: 2
```

**AAPS Builder** za vás zostaví aplikáciu AAPS na GitHube, bezplatnej webovej stránke na ukladanie kódu. Do telefónu nemusíte nič inštalovať a nemusíte otvárať žiadny prípravný súbor.

A setup page walks you through it. Prvýkrát to trvá asi 10 minút:

1. Create your own **private copy** of AAPS Builder in your GitHub account: the setup page opens GitHub with everything filled in, you only confirm. The build workflow, the file that tells GitHub how to build AAPS, is already in it.
2. Create or upload your **signing key** (the keystore).
3. Give the key to your repository as a GitHub **secret**.
4. **Build** the app. One build takes 15 to 30 minutes.
5. **Download and install** the app on your phone.

**Nemusíte** vytvárať fork AndroidAPS: zdrojový kód AAPS sa pri každom zostavení stiahne z oficiálneho repozitára AndroidAPS. **Nepotrebujete** ani Disk Google: aplikáciu si stiahnete priamo z GitHubu.

```{admonition} Where the code comes from
:class: note

The build workflow is maintained by the AAPS developers in the [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) repository, and your repository is a copy of it. The [workflow](https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/build.yml) in your copy is short: it runs the [build steps](https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/aaps-builder.yml) kept in that repository, so improvements reach you without any change to your repository. You can read both files. Pri zostavovaní workflow sťahuje iba oficiálny zdrojový kód AAPS a vlastné nástroje GitHubu na zostavenie. Vaše úložisko kľúčov nikdy neopustí váš prehliadač a váš súkromný repozitár.
```

(aaps-builder-before-you-start)=

## Skôr než začnete

Budete potrebovať:

- **Účet GitHub** (bezplatný). Ak ho nemáte, najprv si ho vytvorte na [github.com](https://github.com/signup).
- **Webový prehliadač**: Chrome v telefóne alebo akýkoľvek prehliadač v počítači. Skôr než začnete, prihláste sa v tomto prehliadači na github.com.
- **Máte v telefóne aplikáciu GitHub?** Môžete si ju nechať. Niektoré tlačidlá stránky nastavenia potom namiesto Chromu otvoria túto aplikáciu. Building works in the app, but the app **cannot download** the finished AAPS: [step 5](#aaps-builder-step5) shows how to switch to Chrome for the download.
- Vaše **existujúce úložisko kľúčov** (súbor `.jks`), jeho heslo a jeho alias, ak ste už AAPS zostavili a chcete ho aktualizovať bez preinštalovania.

```{warning}
**Váš repozitár na zostavenie musí zostať súkromný.** Všetko, čo zostavenie vytvorí, vidí každý, kto vidí repozitár. Stránka nastavenia vám vytvorí súkromný repozitár. Never change it to public, and don't **fork** AAPS Builder instead: a fork is always public.

Súkromný repozitár dostane každý mesiac 2000 bezplatných minút GitHub Actions, čo stačí na niekoľko zostavení.
```

```{warning}
**Nový kľúč alebo existujúci kľúč: od toho závisí, či môžete AAPS aktualizovať.**

- **AAPS už máte v telefóne a je zostavený s úložiskom kľúčov, ktoré stále máte**: na stránke nastavenia zvoľte **I already have a keystore** (Už mám úložisko kľúčov) a nahrajte ho. Vaše ďalšie zostavenie potom aktualizuje existujúci AAPS. Zostavili ste AAPS predchádzajúcim spôsobom zostavenia v prehliadači (vlastný fork)? Vaše úložisko kľúčov je vo vašom forku: [najprv si z neho vytvorte kópiu](#aaps-builder-from-fork).
- **AAPS zostavujete prvýkrát alebo ste stratili úložisko kľúčov či jeho heslo**: zvoľte **Create a new key** (Vytvoriť nový kľúč). Aplikácia podpísaná novým kľúčom **nemôže aktualizovať** AAPS podpísaný iným kľúčom. Musíte exportovať nastavenia, skopírovať súbor mimo telefón, odinštalovať starý AAPS, nainštalovať nový a potom importovať nastavenia: pozrite [Preinštalovanie AAPS s novým úložiskom kľúčov](#reinstall-aaps).

Potom vždy používajte ten istý kľúč. Keď vytvoríte nový kľúč, stiahnite zálohu, ktorú stránka ponúkne, a uložte ju spolu s heslom a aliasom (`key0`) na bezpečné miesto mimo telefónu.
```

(aaps-builder-from-fork)=

## Prechod z predchádzajúceho zostavenia v prehliadači (fork)

Túto časť preskočte, ak ste nikdy nezostavovali AAPS predchádzajúcim spôsobom zostavenia v prehliadači (vlastná kópia AndroidAPS na GitHube, teda fork, s prípravným súborom a Diskom Google).

Vaše úložisko kľúčov je vo vašom forku uložené ako secrety. GitHub secret už nikdy znova neukáže, preto ho nemôžete skopírovať do nového repozitára. Get a copy of your keystore first, then use it in [step 2](#aaps-builder-step2) with **I already have a keystore**.

```{warning}
Nevyberajte **Create a new key**. AAPS zostavený s novým kľúčom nemôže aktualizovať AAPS vo vašom telefóne.
```

Ktorý prípad je váš?

- **Použili ste Možnosť 2** (nahrali ste vlastné úložisko kľúčov z Android Studia) a stále máte súbor `.jks`, jeho heslá a jeho alias: tu nemusíte nič robiť. Use that file in step 2.
- **Použili ste Možnosť 1** (kľúč vytvoril prípravný súbor) alebo už súbor úložiska kľúčov nemáte: exportujte ho zo svojho forku podľa postupu nižšie.

Export úložiska kľúčov z forku:

1. Vo svojom forku otvorte **Settings** → **Secrets and variables** → **Actions** a pridajte secret s názvom `ZIP_PASSWORD`. Zvoľte heslo iba z anglických písmen a číslic. Chráni súbor, ktorý idete vytvoriť.
2. Otvorte kartu **Actions** svojho forku, ťuknite na **CI Keystore Export** a potom na **Run workflow**. Viac podrobností: [Export úložiska kľúčov](#ci-keystore-export).
3. Keď má beh zelenú fajku, otvorte svoj Disk Google: súbor `keystore.zip` je v priečinku **AAPS** → **KeyStore**. Ak beh zlyhá v kroku Disku Google, prístup vášho forku k Disku Google vypršal: pozrite [Platnosť obnovovacieho tokenu Google vypršala](#aaps-ci-google-token-expired).
4. Stiahnite `keystore.zip` a otvorte ho heslom `ZIP_PASSWORD`: v počítači alebo v telefóne pomocou správcu súborov, ktorý vie otvoriť ZIP súbory chránené heslom. Obsahuje:
   - `keystore.jks`: vaše úložisko kľúčov,
   - `keyStoreInfo.txt`: vaše `KEYSTORE_PASSWORD`, `KEY_PASSWORD` a `ALIAS` (zvyčajne `key0`).
5. Skopírujte `keystore.jks` do telefónu (alebo na Disk Google, aby ste ho mohli vybrať odtiaľ).

In [step 2](#aaps-builder-step2) of the setup page:

1. Ťuknite na **I already have a keystore**.
2. V poli **Keystore file** zvoľte `keystore.jks`.
3. Do poľa **Keystore password** zadajte `KEYSTORE_PASSWORD` zo súboru `keyStoreInfo.txt`.
4. V poli **Key alias** vyberte alebo zadajte `ALIAS` zo súboru `keyStoreInfo.txt`.
5. Ak sa `KEY_PASSWORD` líši od `KEYSTORE_PASSWORD`, zrušte zaškrtnutie **Key password is the same as the keystore password** a zadajte `KEY_PASSWORD`.

Súbor `keystore.zip` a jeho `ZIP_PASSWORD` uchovávajte na bezpečnom mieste mimo telefónu: je to záloha vášho kľúča.

To also save the builds of AAPS Builder in Google Drive, do [step 6](#aaps-builder-google-drive): the setup page gets a new `GDRIVE_OAUTH2` for you. Svoj fork si môžete ponechať, kým nebudete mať v telefóne nainštalovaný AAPS zostavený pomocou AAPS Builder.

## Otvorte stránku nastavenia

**→ [Otvoriť stránku nastavenia AAPS Builder](#aaps-builder-setup)**

The setup page is part of this documentation, in your language. Keep this page open in another tab as well: the sections below explain each step of the setup page in more detail, with screenshots.

Stránka nastavenia otvára každú stránku GitHubu na novej karte Chromu. Ak sa chcete vrátiť na stránku nastavenia, ťuknite na tlačidlo kariet vedľa panela s adresou v Chrome (štvorček s číslom) a zvoľte stránku nastavenia AAPS Builder.

Stránka nastavenia beží celá vo vašom prehliadači: váš kľúč a heslá sa nikam neposielajú, okrem GitHub secretu, do ktorého ich sami vložíte. Na GitHub sa posiela iba vaše používateľské meno na GitHube, aby sa overilo, že existuje. Pamätá si vaše používateľské meno na GitHube a názov repozitára, takže sa k nej môžete kedykoľvek vrátiť a znova otvoriť stránku so secretmi alebo svoje zostavenia.

![Stránka nastavenia AAPS Builder](../images/Building-the-App/CI/AapsBuilder30_Step1.png)

(aaps-builder-step1)=

## Krok 1 – Vytvorte si súkromný repozitár na zostavenie

This step creates your own private copy of AAPS Builder in your GitHub account, with the build workflow already in it. Iba vy vidíte repozitár a aplikácie, ktoré v ňom vzniknú.

1. Uistite sa, že ste v tomto prehliadači prihlásení na github.com.

2. Do poľa **Your GitHub username** zadajte svoje používateľské meno na GitHube, nie e-mail. Stránka ho overí na GitHube: **✓ GitHub user found** znamená, že je správne.

3. V poli **Name of your repository** ponechajte navrhnutý názov `my-aaps`. Ak ste už repozitár vytvorili s iným názvom, zadajte presne tento názov.

   ```{note}
   **Already have an AAPS Builder repository** (made with an earlier version of the setup page)? Don't create a new one: type its exact name, skip **Create my private repository**, and update its workflow once as explained in [Updating AAPS](#aaps-builder-updates). Your secrets stay as they are. If you want a new repository anyway, choose a name you don't have yet, for example `my-aaps-2`, and use the same keystore in step 2.

   Don't type the name of your fork of AndroidAPS: a fork is public, and it already builds with its own **AAPS CI** workflow.
   ```

   ![Vyplnený krok 1 stránky nastavenia](../images/Building-the-App/CI/AapsBuilder31_Step1Filled.png)

4. Skontrolujte riadok **Your repository:** ukazuje `github.com/<your username>/my-aaps`. The setup page remembers the name from your last visit: check it every time before you use its buttons.

5. Ťuknite na **Create my private repository**.

   ![The repository line and the Create my private repository button](../images/Building-the-App/CI/AapsBuilder33_Step1Button.png)

6. GitHub opens **Create a new repository** in a new tab. Everything is already filled in: under **Start with a template**, the template `nightscout/aaps-builder` with **Include all branches** off, and under **General**, your account as **Owner** and the name you chose.

   ![Stránka GitHubu Create a new repository](../images/Building-the-App/CI/AapsBuilder32_GitHubNewRepo.png)

   Don't change anything.

7. Scroll down: under **Configuration**, **Choose visibility** is already **Private**. Tap the green **Create repository** button.

   ![Visibility Private and the Create repository button](../images/Building-the-App/CI/AapsBuilder34_GitHubCreate.png)

   GitHub shows your new repository: it contains a folder `.github` (with the build workflow) and a file `README.md`. **Vráťte sa na kartu so stránkou nastavenia** kvôli kroku 2: ťuknite na tlačidlo kariet vedľa panela s adresou v Chrome a zvoľte stránku nastavenia.

```{warning}
**Your new repository is empty**, with no files? It was not created from the template, and it cannot build. Delete it (**Settings** → bottom of the page → **Delete this repository**), then tap **Create my private repository** on the setup page again.
```

(aaps-builder-step2)=

## Step 2 – Your signing key

Aplikácia musí byť podpísaná vaším vlastným kľúčom. Zvoľte jednu z dvoch kariet. Najprv si prečítajte [upozornenie o novom alebo existujúcom kľúči](#aaps-builder-before-you-start).

![Setup page step 2: the two key options](../images/Building-the-App/CI/AapsBuilder40_Step3.png)

### I already have a keystore

1. Ťuknite na **I already have a keystore**.
2. V poli **Keystore file** zvoľte svoj súbor `.jks` (alebo `.keystore`, `.p12`, `.pfx`). Ak pracujete v telefóne, najprv doň skopírujte súbor alebo ho nahrajte na Disk Google.
3. Do poľa **Keystore password** zadajte heslo úložiska kľúčov.
4. V poli **Key alias** vyberte svoj alias zo zoznamu alebo ho zadajte, ak zoznam nie je. Pri úložiskách kľúčov vytvorených v Android Studiu je to zvyčajne `key0`.
5. Ak sa heslo kľúča líši od hesla úložiska kľúčov, zrušte zaškrtnutie **Key password is the same as the keystore password** a zadajte heslo kľúča.
6. Ťuknite na **Check and continue**.

Stránka skontroluje heslo a alias priamo vo vašom zariadení. **Keystore OK! Continue with step 3.** means everything is right. Ak stránka hlási, že heslo sa skontroluje pri zostavení, aj tak pokračujte: zostavenie vám povie, ak je niečo zle.

### Create a new key

1. Ťuknite na **Create a new key**.

2. Zvoľte heslo a zadajte ho dvakrát. Pravidlá: aspoň 8 znakov, iba písmená a–z a A–Z, číslice 0–9 a symboly ako `! ? #`. Žiadne medzery, žiadne písmená s diakritikou a žiadny znak `|`.

3. Ťuknite na **Create key**. Trvá niekoľko sekúnd, kým sa zobrazí **Key created**.

   ![Formulár nového kľúča s heslom zadaným dvakrát](../images/Building-the-App/CI/AapsBuilder41_NewKey.png)

4. Ťuknite na **Download backup (aaps-keystore.jks)**. Ak sa Chrome spýta **Stiahnuť súbor znova?**, v telefóne už je staršia záloha s rovnakým názvom: ťuknite na **Stiahnuť znova**. Chrome potom uloží nový kľúč ako `aaps-keystore (1).jks`: to je súbor, ktorý patrí k tomuto kľúču. Uchovajte si ho a nezameňte ho so starším súborom.

   Tieto tri veci uchovávajte spolu na bezpečnom mieste mimo telefónu (napríklad vo vlastnom cloudovom úložisku):

   - súbor `aaps-keystore.jks`,
   - vaše heslo,
   - alias kľúča: **`key0`**.

   Všetky tri budete potrebovať, ak niekedy budete AAPS zostavovať iným spôsobom, napríklad v Android Studiu. Kľúče vytvorené staršou verziou stránky nastavenia majú alias `aaps`.

   ![Vytvorený kľúč a pole so zálohou](../images/Building-the-App/CI/AapsBuilder42_KeyCreated.png)

(aaps-builder-step3)=

## Step 3 – Give the key to your repository

Step 3 unlocks when step 2 is done. Váš kľúč, jeho heslá a jeho alias sa zbalia do jednej hodnoty, secretu `KEYSTORE_SET`.

1. Ťuknite na **Open the secrets page**.

![Setup page step 3](../images/Building-the-App/CI/AapsBuilder43_Step4.png)

2. GitHub otvorí stránku **New secret** vášho repozitára. V telefóne je pod ponukou nastavení: posuňte sa nižšie.

![Formulár GitHubu New secret](../images/Building-the-App/CI/AapsBuilder11_NewSecret.png)

3. Prepnite na kartu so stránkou nastavenia a ťuknite na **Copy name**. Prepnite späť na kartu GitHubu a vložte ho do malého poľa **Name**. Názov je `KEYSTORE_SET`.

4. Prepnite na kartu so stránkou nastavenia a ťuknite na **Copy secret**. Prepnite späť na kartu GitHubu a vložte ho do veľkého poľa **Secret** (v telefóne dlho podržte prst). Secret je veľmi dlhý kód s tisíckami znakov: stránka nastavenia ukazuje jeho prvé znaky vedľa tlačidla. Nevkladajte tam slovo `KEYSTORE_SET`.

5. Ťuknite na **Add secret**. `KEYSTORE_SET` sa teraz zobrazuje v časti **Repository secrets**.

![Zoznam Repository secrets s KEYSTORE_SET](../images/Building-the-App/CI/AapsBuilder13_SecretList.png)

Toto stačí urobiť iba raz.

```{tip}
GitHub ukazuje **Page not found** (404)? Najprv skontrolujte, či ste v tomto prehliadači prihlásení na github.com: GitHub ukazuje 404 pri súkromných repozitároch, keď nie ste prihlásení. Inak sa používateľské meno alebo názov repozitára v kroku 1 nezhoduje s vaším repozitárom. Skontrolujte názov na github.com, opravte ho v kroku 1 a znova ťuknite na tlačidlo.
```

(aaps-builder-step4)=

## Step 4 – Build the app

1. Na stránke nastavenia ťuknite na **Open the build page**. GitHub otvorí stránku **Build AAPS** vášho repozitára.

   ![Stránka GitHubu Build AAPS s tlačidlom Run workflow](../images/Building-the-App/CI/AapsBuilder15_BuildPage.png)

   Ak sa namiesto toho otvorí **aplikácia GitHub**: ťuknite na **RUN WORKFLOW**, skontrolujte verziu a variant a znova ťuknite na **RUN WORKFLOW**. Aplikácia môže stále ukazovať **Nothing to see here**: potiahnite zoznam nadol, aby sa obnovil a ukázal vaše zostavenie. Potom pokračujte krokom 4 nižšie.

2. Ak sa to GitHub spýta, ťuknite na zelené tlačidlo, ktoré povolí workflowy.
3. Ťuknite na **Run workflow**. Otvorí sa malý formulár:
   - **Version**: keep `latest` to build the newest AAPS release, or type a release number such as `4.0.0`.
   - **Variant**: na bežné používanie s pumpou ponechajte `fullRelease`. Ostatné varianty sú vysvetlené v časti [varianty zostavenia](#browserbuild-variant). `aapsclient3Release` zostaví **AAPSClient3**, ktorý je dostupný od verzie **AAPS** 4.0 (pozrite [O AAPSClient, AAPSClient2 a AAPSClient3](#remotecontrol-aapsclient-versions)).
   - Ťuknite na zelené tlačidlo **Run workflow**.

   ![Formulár Run workflow s hodnotami latest a fullRelease](../images/Building-the-App/CI/AapsBuilder16_RunWorkflow.png)

4. Zostavenie sa spustí a ukazuje **In progress** s dvoma časťami: najprv **AAPS / Check**, potom **AAPS / Build AAPS**.

   ![Prebiehajúce zostavenie](../images/Building-the-App/CI/AapsBuilder45_BuildRunning.png)

5. Počkajte 15 až 30 minút. Zelená fajka znamená, že zostavenie je hotové. Červený krížik znamená, že zlyhalo: otvorte zostavenie, prečítajte si správu a potom pozrite [riešenie problémov](#aaps-builder-troubleshooting).

   ![Dokončené zostavenie so zelenou fajkou](../images/Building-the-App/CI/AapsBuilder22_BuildDone.png)

   ```{tip}
   **E-mail po dokončení zostavenia:** GitHub vám pošle e-mail, iba keď zostavenie zlyhá. Ak chcete dostať e-mail aj pri úspechu: na github.com otvorte svoj profilový obrázok → **Settings** → **Notifications** → **System** → **Actions** a zrušte zaškrtnutie **Only notify for failed workflows**.
   ```

Ak tam nie je tlačidlo **Build AAPS** ani **Run workflow**:

- Open your repository and check that it has a folder `.github` with the file `workflows/build.yml`. If the repository is empty, it was not created from the template: delete it (**Settings** → bottom of the page → **Delete this repository**) and do [step 1](#aaps-builder-step1) again with the button.
- Otvorte kartu **Actions**. Ak sa tam píše, že workflowy sú vypnuté, ťuknite na zelené tlačidlo, ktoré ich povolí, a potom v zozname ťuknite na **Build AAPS**.

(aaps-builder-step5)=

## Step 5 – Install the app on your phone

```{warning}
**Pred každou aktualizáciou** [exportujte svoje nastavenia](#ExportImportSettings-Automating-Settings-Export) v AAPS a súbor skopírujte **mimo telefón** (Disk Google, Dropbox…). Uchovávajte tam aj niekoľko starších exportov a súbory APK, aby ste sa vždy mohli vrátiť späť.
```

1. V telefóne otvorte stránku nastavenia v **Chrome**. Ak sa to vyžaduje, prihláste sa na github.com.
2. Ťuknite na **Open my builds** a potom na najnovšie zostavenie so zelenou fajkou.

   ```{admonition} The GitHub app opened instead of Chrome?
   :class: note

   Aplikácia GitHub nedokáže sťahovať zostavenia. V aplikácii otvorte najnovšie zostavenie a potom ťuknite na **Artifacts ↗** alebo ťuknite hore na ikonu zdieľania a zvoľte **Chrome** (alebo **Copy link** a potom vložte odkaz do panela s adresou v Chrome). Zostavenie sa otvorí v Chrome: pokračujte tam ďalším krokom.

   Aby sa odkazy GitHubu neotvárali v aplikácii: Android **Nastavenia** → **Aplikácie** → **GitHub** → **Otvárať predvolene** (Open by default) → vypnite **Otvárať podporované odkazy** (Open supported links).
   ```

   ![Dokončené zostavenie: stav Success a 2 artifacts](../images/Building-the-App/CI/AapsBuilder50_RunSummary.png)

3. Posuňte sa nižšie k súhrnu zostavenia a ťuknite na odkaz **Download AAPS**.

   ![Súhrn zostavenia s odkazom Download AAPS](../images/Building-the-App/CI/AapsBuilder51_DownloadLink.png)

   ```{tip}
   Posúvajte prstom po texte, nie po diagrame krokov zostavenia: inak sa namiesto stránky posúva diagram.
   ```

   Môžete sa tiež posunúť ešte nižšie k časti **Artifacts** a ťuknúť na ikonu sťahovania vedľa `aaps-….apk`.

   ![Artifacts s aplikáciou pre telefón a pre hodinky](../images/Building-the-App/CI/AapsBuilder52_Artifacts.png)

4. Keď sa sťahovanie dokončí, otvorte ponuku Chrome **⋮** → **Stiahnuté súbory**, ťuknite na `aaps-….apk` a zvoľte **Inštalovať**. Ak sa to vyžaduje, povoľte inštaláciu aplikácií z tohto zdroja.

   ![Stiahnuté súbory v Chrome s APK súborom AAPS](../images/Building-the-App/CI/AapsBuilder29_Downloads.png)

`aaps-wear-….apk` je aplikácia pre inteligentné hodinky. Ak ich nepoužívate, preskočte ju.

Aplikácia zostáva na stránke zostavenia **14 dní**. V repozitári sa nezobrazuje v časti **Code**. Skopírujte ju na bezpečné miesto mimo telefónu, spolu s exportmi nastavení.

Ďalšie spôsoby inštalácie aplikácie nájdete na stránke [Prenos a inštalácia AAPS do smartfónu](TransferringAndInstallingAaps.md).

```{note}
Od septembra 2026 môže [overovanie vývojárov pre Android](#android-developer-verification) od Googlu v závislosti od vašej krajiny zablokovať inštaláciu APK ťuknutím na súbor. Bezplatné riešenia sú vysvetlené na tej stránke.
```

(aaps-builder-google-drive)=

## Step 6 (optional) – Also save the app in Google Drive

Každé zostavenie si môžete nechať uložiť aj na svoj Disk Google, do priečinka `AAPS/<version>`. Je to voliteľné: aplikácia je vždy dostupná na stránke zostavenia.

Potrebuje to ešte jeden secret, `GDRIVE_OAUTH2`. Step 6 of the setup page gets it from Google for you, on a phone or a computer. **AAPS** can then only see and change the files it creates in your Google Drive, nothing else.

1. On the setup page, tap **Connect Google Drive**. Google opens in a new tab.
2. Choose your Google account and allow access. If Google says the app is not verified, tap **Advanced**, then **Go to …**.
3. The new tab then shows an error such as **This site can't be reached** or **127.0.0.1 refused to connect**. **This is expected:** Google's answer is in the address of that tab. Tap the address bar, select the whole address (it starts with `http://127.0.0.1:47913/`) and copy it.
4. Go back to the setup page tab within a few minutes: Google's answer is only valid for a short time, and only once. Paste the address into **Paste the copied address here** and tap **Get GDRIVE_OAUTH2**. The page shows **GDRIVE_OAUTH2 is ready**.
5. Ťuknite na **Open the secrets page**. Ťuknite na **Copy name** a vložte ho do malého poľa **Name** (názov je `GDRIVE_OAUTH2`). Tap **Copy secret**, paste it into the big **Secret** box and tap **Add secret**.

Od nasledujúceho zostavenia sa súbory APK ukladajú aj na Disk Google.

Already have a `GDRIVE_OAUTH2` value from the preparation file of the other browser build methods? It works too: add it as the `GDRIVE_OAUTH2` secret.

Google prístup zruší, ak 6 mesiacov nič nezostavíte alebo ak zmeníte heslo ku Googlu. Zostavenie vám to potom oznámi: zopakujte tieto kroky. Pozrite [Platnosť obnovovacieho tokenu Google vypršala](#aaps-ci-google-token-expired).

(aaps-builder-updates)=

## Aktualizácia AAPS

Váš repozitár nikdy nič nezostaví sám: vy rozhodujete, kedy zostaviť, ktorú verziu a ktorý variant. Keď vyjde nová verzia AAPS:

1. [Back up your settings](#aaps-builder-step5) as explained in step 5.
2. Build the new version as in [step 4](#aaps-builder-step4). Ponechajte `latest` alebo zadajte číslo vydania.
3. Download and install it as in [step 5](#aaps-builder-step5).

**Updates of the build steps** reach you by themselves: at every build, your repository runs the build steps released by the AAPS developers in nightscout/aaps-builder. Nothing changes in your repository, and there is no automatic build.

**Updates of your workflow file** are rare: only when the **Run workflow** form changes, for example for a new build variant, or once if your repository was made with an earlier version of the setup page (an empty repository with a short workflow file) or from the old template. The [Docs updates & changes](../Maintenance/DocumentationUpdate.md) page says so. Your `KEYSTORE_SET` secret stays as it is. On the setup page, open **Updating your copy** at the end of step 1:

1. Tap **Open the newest workflow**. On a computer, click the **copy icon** ("Copy raw file") at the top right of the file. On a phone, open the **plain-text version** instead, press and hold the text, then **Select all** and **Copy**.
2. Tap **Open my workflow file**.
3. Replace the whole text with the copied workflow (long press on a phone: **Select all**, then **Paste**).
4. Tap **Commit changes…**, then **Commit changes**.

The first line of the file shows its version.

(aaps-builder-troubleshooting)=

## Riešenie problémov

To see why a build failed, [read the build log](#aaps-ci-read-the-logs): the step names are different, but you find the error the same way. You can also [update a secret](#aaps-ci-update-secret) and [run the build again](#aaps-ci-rerun) the same way.

- **No "Build AAPS" or "Run workflow" button, or the repository is empty**: the repository was not created from the template. Delete it (**Settings** → bottom of the page → **Delete this repository**) and do [step 1](#aaps-builder-step1) again with the **Create my private repository** button.
- **Zostavenie sa zastaví s hlásením „This repository is PUBLIC“**: vo svojom repozitári otvorte **Settings** → **General** → **Danger Zone** → **Change visibility** → **Private** a potom zostavte znova.
- **"Secret KEYSTORE_SET is missing"**: do step 3 of the setup page.
- **„The secret is too short“**, **„The secret is not a valid code“** alebo **„The secret does not contain a keystore“**: do secretu sa vložil nesprávny text, často samotné slovo `KEYSTORE_SET` alebo iba časť kódu. In your repository, open **Settings** → **Secrets and variables** → **Actions**, edit `KEYSTORE_SET` and paste the long code from **Copy secret** again (redo step 2 of the setup page first if you closed it).
- **"Keystore, password or alias is wrong"**: check your keystore's password and alias, then redo steps 2 and 3 of the setup page.
- **„Version … does not exist“**: verzia, ktorú ste zadali, nie je vydanie AAPS. Použite `latest` alebo skontrolujte číslo vydania.
- **"Variant … is not supported"**: your workflow file is an older version. Replace it as explained in [Updating AAPS](#aaps-builder-updates).
- **„Page not found“ (404), keď stránka nastavenia otvorí GitHub**: prihláste sa na github.com v tom istom prehliadači (GitHub ukazuje 404 pri súkromných repozitároch, keď nie ste prihlásení). Ak ste prihlásení, používateľské meno alebo názov repozitára v kroku 1 stránky nastavenia sa nezhoduje s vaším repozitárom. Zadajte presné názvy.
- **„No GitHub user with this name“** v kroku 1: zadajte svoje používateľské meno na GitHube tak, ako je uvedené vo vašom profile GitHub, nie e-mail.
- **Chýba odkaz Download alebo sa otvorila aplikácia GitHub**: aplikácia GitHub nedokáže sťahovať zostavenia. Open the build in Chrome as explained in [step 5](#aaps-builder-step5). Aby sa odkazy GitHubu neotvárali v aplikácii: Android **Nastavenia** → **Aplikácie** → **GitHub** → **Otvárať predvolene** (Open by default) → vypnite **Otvárať podporované odkazy** (Open supported links).
- **"Google Drive access has expired or was revoked"**: redo [step 6](#aaps-builder-google-drive) and update the `GDRIVE_OAUTH2` secret.

For other GitHub and Google Drive issues, see [Browser build troubleshooting](../GettingHelp/BrowserBuildTroubleshooting.md).

```{toctree}
:hidden:

AAPS Builder setup page <BrowserBuildAapsBuilderSetup.md>
```
