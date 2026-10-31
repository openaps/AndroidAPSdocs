(aaps-builder)=

# Sestavení v prohlížeči s AAPS Builder

```{note}
Toto je doporučený způsob, jak sestavit AAPS z **telefonu s Androidem**. Funguje také v libovolném prohlížeči na počítači. Další způsoby sestavení z počítače nebo z iPhonu najdete v přehledu [Sestavení v prohlížeči](BrowserBuild.md).
```

```{contents} In this page
:backlinks: entry
:depth: 2
```

**AAPS Builder** za vás sestaví aplikaci AAPS na GitHubu, bezplatném webu pro ukládání kódu. Do telefonu nic neinstalujete a neotevíráte žádný přípravný soubor.

A setup page walks you through it. Poprvé to trvá asi 10 minut:

1. Create your own **private copy** of AAPS Builder in your GitHub account: the setup page opens GitHub with everything filled in, you only confirm. The build workflow, the file that tells GitHub how to build AAPS, is already in it.
2. Create or upload your **signing key** (the keystore).
3. Give the key to your repository as a GitHub **secret**.
4. **Build** the app. One build takes 15 to 30 minutes.
5. **Download and install** the app on your phone.

**Nemusíte** vytvářet fork AndroidAPS: zdrojový kód AAPS se při každém sestavení stáhne z oficiálního repozitáře AndroidAPS. **Nepotřebujete** ani Disk Google: aplikaci stáhnete přímo z GitHubu.

```{admonition} Where the code comes from
:class: note

The build workflow is maintained by the AAPS developers in the [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) repository, and your repository is a copy of it. The [workflow](https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/build.yml) in your copy is short: it runs the [build steps](https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/aaps-builder.yml) kept in that repository, so improvements reach you without any change to your repository. You can read both files. Při sestavení workflow stahuje jen oficiální zdrojový kód AAPS a vlastní sestavovací nástroje GitHubu. Vaše úložiště klíčů nikdy neopustí váš prohlížeč a váš soukromý repozitář.
```

(aaps-builder-before-you-start)=

## Než začnete

Budete potřebovat:

- **Účet na GitHubu** (zdarma). Pokud ho nemáte, nejprve si ho vytvořte na [github.com](https://github.com/signup).
- **Webový prohlížeč**: Chrome v telefonu nebo jakýkoli prohlížeč na počítači. Než začnete, přihlaste se v tomto prohlížeči na github.com.
- **Máte v telefonu aplikaci GitHub?** Můžete si ji ponechat. Některá tlačítka stránky nastavení pak místo Chromu otevřou tuto aplikaci. Building works in the app, but the app **cannot download** the finished AAPS: [step 5](#aaps-builder-step5) shows how to switch to Chrome for the download.
- Své **stávající úložiště klíčů** (soubor `.jks`), jeho heslo a alias, pokud jste AAPS již dříve sestavili a chcete ho aktualizovat bez přeinstalace.

```{warning}
**Váš repozitář pro sestavení musí zůstat soukromý.** Vše, co sestavení vytvoří, vidí každý, kdo vidí repozitář. Stránka nastavení vám vytvoří soukromý repozitář. Never change it to public, and don't **fork** AAPS Builder instead: a fork is always public.

Soukromý repozitář dostává každý měsíc 2000 minut GitHub Actions zdarma, což stačí na několik sestavení.
```

```{warning}
**Nový klíč, nebo stávající klíč: na tom závisí, zda budete moci AAPS aktualizovat.**

- **AAPS už v telefonu máte a máte i úložiště klíčů, se kterým byl sestaven**: na stránce nastavení zvolte **I already have a keystore** a nahrajte ho. Vaše příští sestavení pak AAPS aktualizuje bez přeinstalace. Sestavovali jste AAPS dřívějším způsobem sestavení v prohlížeči (vlastní fork)? Vaše úložiště klíčů je ve vašem forku: [nejprve si z něj získejte kopii](#aaps-builder-from-fork).
- **Sestavujete AAPS poprvé, nebo jste ztratili úložiště klíčů či jeho heslo**: zvolte **Create a new key**. Aplikace podepsaná novým klíčem **nemůže aktualizovat** AAPS podepsané jiným klíčem. Musíte exportovat nastavení, zkopírovat soubor mimo telefon, odinstalovat staré AAPS, nainstalovat nové a potom nastavení importovat: viz [Přeinstalace AAPS s novým úložištěm klíčů](#reinstall-aaps).

Potom vždy používejte stále stejný klíč. Když vytváříte nový klíč, stáhněte zálohu, kterou stránka nabízí, a uložte ji spolu s heslem a aliasem (`key0`) na bezpečné místo mimo telefon.
```

(aaps-builder-from-fork)=

## Přechod z dřívějšího sestavení v prohlížeči (fork)

Tuto část přeskočte, pokud jste nikdy nesestavovali AAPS dřívějším způsobem sestavení v prohlížeči (vlastní kopie neboli fork AndroidAPS na GitHubu, s přípravným souborem a Diskem Google).

Vaše úložiště klíčů je uložené jako secrety ve vašem forku. GitHub už secret nikdy znovu neukáže, takže ho nemůžete zkopírovat do nového repozitáře. Get a copy of your keystore first, then use it in [step 2](#aaps-builder-step2) with **I already have a keystore**.

```{warning}
Nevolte **Create a new key**. AAPS sestavené s novým klíčem nemůže aktualizovat AAPS ve vašem telefonu.
```

Která situace je ta vaše?

- **Použili jste Možnost 2** (nahráli jste vlastní úložiště klíčů z Android Studia) a stále máte soubor `.jks`, jeho hesla a alias: zde nemusíte nic dělat. Use that file in step 2.
- **Použili jste Možnost 1** (klíč vytvořil přípravný soubor), nebo už soubor úložiště klíčů nemáte: exportujte ho ze svého forku podle postupu níže.

Export úložiště klíčů z vašeho forku:

1. Ve svém forku otevřete **Settings** → **Secrets and variables** → **Actions** a přidejte secret s názvem `ZIP_PASSWORD`. Zvolte heslo jen z anglických písmen a číslic. Chrání soubor, který se chystáte vytvořit.
2. Otevřete kartu **Actions** svého forku, klepněte na **CI Keystore Export** a potom na **Run workflow**. Více podrobností: [Export úložiště klíčů](#ci-keystore-export).
3. Když má běh zelenou fajfku, otevřete svůj Disk Google: soubor `keystore.zip` je ve složce **AAPS** → **KeyStore**. Pokud běh selže v kroku Disku Google, vypršel přístup vašeho forku k Disku Google: viz [Vypršel obnovovací token Google](#aaps-ci-google-token-expired).
4. Stáhněte `keystore.zip` a otevřete ho pomocí svého `ZIP_PASSWORD`: na počítači, nebo v telefonu ve správci souborů, který umí otevírat ZIP soubory chráněné heslem. Obsahuje:
   - `keystore.jks`: vaše úložiště klíčů,
   - `keyStoreInfo.txt`: vaše `KEYSTORE_PASSWORD`, `KEY_PASSWORD` a `ALIAS` (obvykle `key0`).
5. Zkopírujte `keystore.jks` do telefonu (nebo na Disk Google, abyste ho mohli vybrat odtud).

In [step 2](#aaps-builder-step2) of the setup page:

1. Klepněte na **I already have a keystore**.
2. V poli **Keystore file** vyberte `keystore.jks`.
3. Do pole **Keystore password** zadejte `KEYSTORE_PASSWORD` ze souboru `keyStoreInfo.txt`.
4. V poli **Key alias** vyberte nebo zadejte `ALIAS` ze souboru `keyStoreInfo.txt`.
5. Pokud se `KEY_PASSWORD` liší od `KEYSTORE_PASSWORD`, zrušte zaškrtnutí **Key password is the same as the keystore password** a zadejte `KEY_PASSWORD`.

Soubor `keystore.zip` a jeho `ZIP_PASSWORD` uchovávejte na bezpečném místě mimo telefon: je to záloha vašeho klíče.

To also save the builds of AAPS Builder in Google Drive, do [step 6](#aaps-builder-google-drive): the setup page gets a new `GDRIVE_OAUTH2` for you. Svůj fork si můžete ponechat, dokud nebudete mít v telefonu nainstalované AAPS sestavené pomocí AAPS Builder.

## Otevřete stránku nastavení

**→ [Otevřít stránku nastavení AAPS Builder](#aaps-builder-setup)**

The setup page is part of this documentation, in your language. Keep this page open in another tab as well: the sections below explain each step of the setup page in more detail, with screenshots.

Stránka nastavení otevírá každou stránku GitHubu na nové kartě Chromu. Pro návrat na stránku nastavení klepněte na tlačítko karet vedle adresního řádku Chromu (čtverec s číslem) a zvolte stránku nastavení AAPS Builder.

Stránka nastavení běží celá ve vašem prohlížeči: váš klíč a hesla se nikam neposílají, kromě GitHub secretu, do kterého je sami vložíte. GitHubu se posílá jen vaše uživatelské jméno, aby se ověřilo, že existuje. Pamatuje si vaše uživatelské jméno na GitHubu a název repozitáře, takže se k ní můžete kdykoli vrátit a znovu otevřít stránku secretů nebo svá sestavení.

![Stránka nastavení AAPS Builder](../images/Building-the-App/CI/AapsBuilder30_Step1.png)

(aaps-builder-step1)=

## Krok 1 – Vytvořte si soukromý repozitář pro sestavení

This step creates your own private copy of AAPS Builder in your GitHub account, with the build workflow already in it. Jen vy vidíte jeho obsah a aplikace, které v něm vzniknou.

1. Ujistěte se, že jste v tomto prohlížeči přihlášeni na github.com.

2. Do pole **Your GitHub username** zadejte své uživatelské jméno na GitHubu, ne e-mail. Stránka ho ověří u GitHubu: **✓ GitHub user found** znamená, že je správné.

3. V poli **Name of your repository** ponechte navržený název `my-aaps`. Pokud jste už repozitář vytvořili s jiným názvem, zadejte přesně tento název.

   ```{note}
   **Already have an AAPS Builder repository** (made with an earlier version of the setup page)? Don't create a new one: type its exact name, skip **Create my private repository**, and update its workflow once as explained in [Updating AAPS](#aaps-builder-updates). Your secrets stay as they are. If you want a new repository anyway, choose a name you don't have yet, for example `my-aaps-2`, and use the same keystore in step 2.

   Don't type the name of your fork of AndroidAPS: a fork is public, and it already builds with its own **AAPS CI** workflow.
   ```

   ![Vyplněný krok 1 stránky nastavení](../images/Building-the-App/CI/AapsBuilder31_Step1Filled.png)

4. Zkontrolujte řádek **Your repository:** – ukazuje `github.com/<your username>/my-aaps`. The setup page remembers the name from your last visit: check it every time before you use its buttons.

5. Klepněte na **Create my private repository**.

   ![The repository line and the Create my private repository button](../images/Building-the-App/CI/AapsBuilder33_Step1Button.png)

6. GitHub opens **Create a new repository** in a new tab. Everything is already filled in: under **Start with a template**, the template `nightscout/aaps-builder` with **Include all branches** off, and under **General**, your account as **Owner** and the name you chose.

   ![Stránka GitHubu Create a new repository](../images/Building-the-App/CI/AapsBuilder32_GitHubNewRepo.png)

   Don't change anything.

7. Scroll down: under **Configuration**, **Choose visibility** is already **Private**. Tap the green **Create repository** button.

   ![Visibility Private and the Create repository button](../images/Building-the-App/CI/AapsBuilder34_GitHubCreate.png)

   GitHub shows your new repository: it contains a folder `.github` (with the build workflow) and a file `README.md`. **Vraťte se na kartu se stránkou nastavení** kvůli kroku 2: klepněte na tlačítko karet vedle adresního řádku Chromu a zvolte stránku nastavení.

```{warning}
**Your new repository is empty**, with no files? It was not created from the template, and it cannot build. Delete it (**Settings** → bottom of the page → **Delete this repository**), then tap **Create my private repository** on the setup page again.
```

(aaps-builder-step2)=

## Step 2 – Your signing key

Aplikace musí být podepsaná vaším vlastním klíčem. Zvolte jednu ze dvou karet. Nejprve si přečtěte [upozornění k novému nebo stávajícímu klíči](#aaps-builder-before-you-start).

![Setup page step 2: the two key options](../images/Building-the-App/CI/AapsBuilder40_Step3.png)

### I already have a keystore

1. Klepněte na **I already have a keystore**.
2. V poli **Keystore file** vyberte svůj soubor `.jks` (nebo `.keystore`, `.p12`, `.pfx`). Pokud jste v telefonu, nejprve si soubor zkopírujte do telefonu nebo na Disk Google.
3. Do pole **Keystore password** zadejte heslo úložiště klíčů.
4. V poli **Key alias** vyberte svůj alias ze seznamu, nebo ho zadejte, pokud seznam není. U úložišť klíčů vytvořených v Android Studiu je to obvykle `key0`.
5. Pokud se heslo klíče liší od hesla úložiště klíčů, zrušte zaškrtnutí **Key password is the same as the keystore password** a zadejte heslo klíče.
6. Klepněte na **Check and continue**.

Stránka zkontroluje heslo a alias přímo ve vašem zařízení. **Keystore OK! Continue with step 3.** means everything is right. Pokud stránka napíše, že heslo bude zkontrolováno až při sestavení, přesto pokračujte: sestavení vám řekne, pokud je něco špatně.

### Create a new key

1. Klepněte na **Create a new key**.

2. Zvolte heslo a zadejte ho dvakrát. Pravidla: alespoň 8 znaků, jen písmena a–z a A–Z, číslice 0–9 a symboly jako `! ? #`. Žádné mezery, žádná písmena s diakritikou a žádný znak `|`.

3. Klepněte na **Create key**. Než se objeví **Key created**, trvá to několik sekund.

   ![Formulář nového klíče s heslem zadaným dvakrát](../images/Building-the-App/CI/AapsBuilder41_NewKey.png)

4. Klepněte na **Download backup (aaps-keystore.jks)**. Pokud se Chrome zeptá **Stáhnout soubor znovu?**, je už v telefonu starší záloha se stejným názvem: klepněte na **Stáhnout znovu**. Chrome pak uloží nový klíč jako `aaps-keystore (1).jks`: to je soubor, který patří k tomuto klíči. Uchovejte ho a nepleťte si ho se starším souborem.

   Tyto tři věci uchovávejte pohromadě na bezpečném místě mimo telefon (například ve vlastním cloudovém úložišti):

   - soubor `aaps-keystore.jks`,
   - vaše heslo,
   - alias klíče: **`key0`**.

   Všechny tři budete potřebovat, pokud budete někdy sestavovat AAPS jiným způsobem, například v Android Studiu. Klíče vytvořené dřívější verzí stránky nastavení mají alias `aaps`.

   ![Vytvořený klíč a pole se zálohou](../images/Building-the-App/CI/AapsBuilder42_KeyCreated.png)

(aaps-builder-step3)=

## Step 3 – Give the key to your repository

Step 3 unlocks when step 2 is done. Váš klíč, jeho hesla a alias se zabalí do jedné hodnoty, secretu `KEYSTORE_SET`.

1. Klepněte na **Open the secrets page**.

![Setup page step 3](../images/Building-the-App/CI/AapsBuilder43_Step4.png)

2. GitHub otevře stránku **New secret** vašeho repozitáře. V telefonu je pod nabídkou nastavení: posuňte se dolů.

![Formulář GitHubu New secret](../images/Building-the-App/CI/AapsBuilder11_NewSecret.png)

3. Přepněte na kartu se stránkou nastavení a klepněte na **Copy name**. Přepněte zpět na kartu GitHubu a vložte ho do malého pole **Name**. Název je `KEYSTORE_SET`.

4. Přepněte na kartu se stránkou nastavení a klepněte na **Copy secret**. Přepněte zpět na kartu GitHubu a vložte ho do velkého pole **Secret** (v telefonu dlouhým stiskem). Secret je velmi dlouhý kód o tisících znaků: stránka nastavení ukazuje jeho první znaky vedle tlačítka. Nevkládejte tam slovo `KEYSTORE_SET`.

5. Klepněte na **Add secret**. `KEYSTORE_SET` se nyní zobrazí v části **Repository secrets**.

![Seznam Repository secrets s KEYSTORE_SET](../images/Building-the-App/CI/AapsBuilder13_SecretList.png)

Tento krok stačí udělat jen jednou.

```{tip}
GitHub ukazuje **Page not found** (404)? Nejprve zkontrolujte, že jste v tomto prohlížeči přihlášeni na github.com: GitHub ukazuje 404 u soukromých repozitářů, když nejste přihlášeni. Jinak uživatelské jméno nebo název repozitáře v kroku 1 neodpovídá vašemu repozitáři. Zkontrolujte název na github.com, opravte ho v kroku 1 a klepněte na tlačítko znovu.
```

(aaps-builder-step4)=

## Step 4 – Build the app

1. Na stránce nastavení klepněte na **Open the build page**. GitHub otevře stránku **Build AAPS** vašeho repozitáře.

   ![Stránka GitHubu Build AAPS s tlačítkem Run workflow](../images/Building-the-App/CI/AapsBuilder15_BuildPage.png)

   Pokud se místo toho otevře **aplikace GitHub**: klepněte na **RUN WORKFLOW**, zkontrolujte verzi a variantu a znovu klepněte na **RUN WORKFLOW**. Aplikace může stále ukazovat **Nothing to see here**: stáhněte seznam dolů, aby se obnovil, a uvidíte své sestavení. Potom pokračujte krokem 4 níže.

2. Pokud se GitHub zeptá, klepněte na zelené tlačítko pro povolení workflow.
3. Klepněte na **Run workflow**. Otevře se malý formulář:
   - **Version**: keep `latest` to build the newest AAPS release, or type a release number such as `4.0.0`.
   - **Variant**: pro běžné použití s pumpou ponechte `fullRelease`. Ostatní varianty jsou vysvětleny v části [varianty sestavení](#browserbuild-variant). `aapsclient3Release` sestaví **AAPSClient3**, dostupný od verze **AAPS** 4.0 (viz [O AAPSClient, AAPSClient2 a AAPSClient3](#remotecontrol-aapsclient-versions)).
   - Klepněte na zelené tlačítko **Run workflow**.

   ![Formulář Run workflow s hodnotami latest a fullRelease](../images/Building-the-App/CI/AapsBuilder16_RunWorkflow.png)

4. Sestavení se spustí a ukazuje **In progress** se dvěma částmi: **AAPS / Check** a potom **AAPS / Build AAPS**.

   ![Probíhající sestavení](../images/Building-the-App/CI/AapsBuilder45_BuildRunning.png)

5. Počkejte 15 až 30 minut. Zelená fajfka znamená, že je sestavení hotové. Červený křížek znamená, že selhalo: otevřete sestavení, přečtěte si zprávu a pak se podívejte do části [řešení problémů](#aaps-builder-troubleshooting).

   ![Dokončené sestavení se zelenou fajfkou](../images/Building-the-App/CI/AapsBuilder22_BuildDone.png)

   ```{tip}
   **E-mail po dokončení sestavení:** GitHub vám pošle e-mail jen tehdy, když sestavení selže. Pokud chcete e-mail dostat i po úspěšném sestavení: na github.com otevřete svůj profilový obrázek → **Settings** → **Notifications** → **System** → **Actions** a zrušte zaškrtnutí **Only notify for failed workflows**.
   ```

Pokud tam není tlačítko **Build AAPS** ani **Run workflow**:

- Open your repository and check that it has a folder `.github` with the file `workflows/build.yml`. If the repository is empty, it was not created from the template: delete it (**Settings** → bottom of the page → **Delete this repository**) and do [step 1](#aaps-builder-step1) again with the button.
- Otevřete kartu **Actions**. Pokud je tam napsáno, že workflow jsou vypnutá, klepněte na zelené tlačítko pro jejich povolení a potom v seznamu klepněte na **Build AAPS**.

(aaps-builder-step5)=

## Step 5 – Install the app on your phone

```{warning}
**Před každou aktualizací** v AAPS [exportujte nastavení](#ExportImportSettings-Automating-Settings-Export) a soubor zkopírujte **mimo telefon** (Disk Google, Dropbox…). Uchovávejte tam i několik starších exportů a soubory APK, abyste se mohli vždy vrátit zpět.
```

1. V telefonu otevřete stránku nastavení v **Chromu**. Pokud budete vyzváni, přihlaste se na github.com.
2. Klepněte na **Open my builds** a potom na nejnovější sestavení se zelenou fajfkou.

   ```{admonition} The GitHub app opened instead of Chrome?
   :class: note

   Aplikace GitHub neumí stahovat sestavení. V aplikaci otevřete nejnovější sestavení a klepněte na **Artifacts ↗**, nebo klepněte nahoře na ikonu sdílení a zvolte **Chrome** (nebo **Kopírovat odkaz** a odkaz vložte do adresního řádku Chromu). Sestavení se otevře v Chromu: tam pokračujte dalším krokem.

   Aby se odkazy GitHubu neotevíraly v aplikaci: v Androidu **Nastavení** → **Aplikace** → **GitHub** → **Otevírat ve výchozím nastavení** → vypněte **Otevírat podporované odkazy**.
   ```

   ![Dokončené sestavení: stav Success a 2 artifacts](../images/Building-the-App/CI/AapsBuilder50_RunSummary.png)

3. Posuňte se dolů k souhrnu sestavení a klepněte na odkaz **Download AAPS**.

   ![Souhrn sestavení s odkazem Download AAPS](../images/Building-the-App/CI/AapsBuilder51_DownloadLink.png)

   ```{tip}
   Posouvejte prstem po textu, ne po diagramu kroků sestavení: jinak se místo stránky posune diagram.
   ```

   Můžete se také posunout níže k části **Artifacts** a klepnout na ikonu stažení vedle `aaps-….apk`.

   ![Artifacts s aplikacemi pro telefon a hodinky](../images/Building-the-App/CI/AapsBuilder52_Artifacts.png)

4. Když je stahování hotové, otevřete nabídku Chromu **⋮** → **Stažené soubory**, klepněte na `aaps-….apk` a zvolte **Instalovat**. Pokud budete vyzváni, povolte instalaci aplikací z tohoto zdroje.

   ![Stažené soubory v Chromu s APK aplikace AAPS](../images/Building-the-App/CI/AapsBuilder29_Downloads.png)

`aaps-wear-….apk` je aplikace pro chytré hodinky. Pokud hodinky nepoužíváte, tento soubor vynechte.

Aplikace zůstává na stránce sestavení **14 dní**. V repozitáři se nezobrazuje v části **Code**. Zkopírujte ji na bezpečné místo mimo telefon, spolu s exporty nastavení.

Další způsoby instalace aplikace najdete na stránce [Přenos a instalace AAPS](TransferringAndInstallingAaps.md).

```{note}
Od září 2026 může [ověřování vývojářů pro Android](#android-developer-verification) od Googlu podle vaší země blokovat instalaci APK klepnutím na soubor. Bezplatná řešení jsou vysvětlena na té stránce.
```

(aaps-builder-google-drive)=

## Step 6 (optional) – Also save the app in Google Drive

Každé sestavení si můžete nechat ukládat také na svůj Disk Google, do složky `AAPS/<version>`. Je to volitelné: aplikace je vždy dostupná na stránce sestavení.

Potřebujete k tomu ještě jeden secret, `GDRIVE_OAUTH2`. Step 6 of the setup page gets it from Google for you, on a phone or a computer. **AAPS** can then only see and change the files it creates in your Google Drive, nothing else.

1. On the setup page, tap **Connect Google Drive**. Google opens in a new tab.
2. Choose your Google account and allow access. If Google says the app is not verified, tap **Advanced**, then **Go to …**.
3. The new tab then shows an error such as **This site can't be reached** or **127.0.0.1 refused to connect**. **This is expected:** Google's answer is in the address of that tab. Tap the address bar, select the whole address (it starts with `http://127.0.0.1:47913/`) and copy it.
4. Go back to the setup page tab within a few minutes: Google's answer is only valid for a short time, and only once. Paste the address into **Paste the copied address here** and tap **Get GDRIVE_OAUTH2**. The page shows **GDRIVE_OAUTH2 is ready**.
5. Klepněte na **Open the secrets page**. Klepněte na **Copy name** a vložte ho do malého pole **Name** (název je `GDRIVE_OAUTH2`). Tap **Copy secret**, paste it into the big **Secret** box and tap **Add secret**.

Od příštího sestavení se soubory APK ukládají také na Disk Google.

Already have a `GDRIVE_OAUTH2` value from the preparation file of the other browser build methods? It works too: add it as the `GDRIVE_OAUTH2` secret.

Google přístup zruší, pokud 6 měsíců nic nesestavíte nebo pokud změníte heslo ke Googlu. Sestavení vám to pak oznámí: zopakujte tyto kroky. Viz [Vypršel obnovovací token Google](#aaps-ci-google-token-expired).

(aaps-builder-updates)=

## Aktualizace AAPS

Váš repozitář nikdy nic nesestaví sám: vy rozhodujete, kdy sestavit, jakou verzi a jakou variantu. Když vyjde nová verze AAPS:

1. [Back up your settings](#aaps-builder-step5) as explained in step 5.
2. Build the new version as in [step 4](#aaps-builder-step4). Ponechte `latest`, nebo zadejte číslo verze.
3. Download and install it as in [step 5](#aaps-builder-step5).

**Updates of the build steps** reach you by themselves: at every build, your repository runs the build steps released by the AAPS developers in nightscout/aaps-builder. Nothing changes in your repository, and there is no automatic build.

**Updates of your workflow file** are rare: only when the **Run workflow** form changes, for example for a new build variant, or once if your repository was made with an earlier version of the setup page (an empty repository with a short workflow file) or from the old template. The [Docs updates & changes](../Maintenance/DocumentationUpdate.md) page says so. Your `KEYSTORE_SET` secret stays as it is. On the setup page, open **Updating your copy** at the end of step 1:

1. Tap **Open the newest workflow**. On a computer, click the **copy icon** ("Copy raw file") at the top right of the file. On a phone, open the **plain-text version** instead, press and hold the text, then **Select all** and **Copy**.
2. Tap **Open my workflow file**.
3. Replace the whole text with the copied workflow (long press on a phone: **Select all**, then **Paste**).
4. Tap **Commit changes…**, then **Commit changes**.

The first line of the file shows its version.

(aaps-builder-troubleshooting)=

## Řešení problémů

To see why a build failed, [read the build log](#aaps-ci-read-the-logs): the step names are different, but you find the error the same way. You can also [update a secret](#aaps-ci-update-secret) and [run the build again](#aaps-ci-rerun) the same way.

- **No "Build AAPS" or "Run workflow" button, or the repository is empty**: the repository was not created from the template. Delete it (**Settings** → bottom of the page → **Delete this repository**) and do [step 1](#aaps-builder-step1) again with the **Create my private repository** button.
- **Sestavení se zastaví se zprávou „This repository is PUBLIC“**: ve svém repozitáři otevřete **Settings** → **General** → **Danger Zone** → **Change visibility** → **Private** a potom sestavte znovu.
- **"Secret KEYSTORE_SET is missing"**: do step 3 of the setup page.
- **„The secret is too short“**, **„The secret is not a valid code“** nebo **„The secret does not contain a keystore“**: do secretu byl vložen špatný text, často samotné slovo `KEYSTORE_SET` nebo jen část kódu. In your repository, open **Settings** → **Secrets and variables** → **Actions**, edit `KEYSTORE_SET` and paste the long code from **Copy secret** again (redo step 2 of the setup page first if you closed it).
- **"Keystore, password or alias is wrong"**: check your keystore's password and alias, then redo steps 2 and 3 of the setup page.
- **„Version … does not exist“**: zadaná verze není vydaná verze AAPS. Použijte `latest`, nebo zkontrolujte číslo verze.
- **"Variant … is not supported"**: your workflow file is an older version. Replace it as explained in [Updating AAPS](#aaps-builder-updates).
- **„Page not found“ (404), když stránka nastavení otevře GitHub**: přihlaste se na github.com ve stejném prohlížeči (GitHub ukazuje 404 u soukromých repozitářů, když nejste přihlášeni). Pokud jste přihlášeni, uživatelské jméno nebo název repozitáře v kroku 1 stránky nastavení neodpovídá vašemu repozitáři. Zadejte přesné názvy.
- **„No GitHub user with this name“** v kroku 1: zadejte své uživatelské jméno na GitHubu tak, jak je uvedeno ve vašem profilu GitHub, ne e-mail.
- **Chybí odkaz Download, nebo se otevřela aplikace GitHub**: aplikace GitHub neumí stahovat sestavení. Open the build in Chrome as explained in [step 5](#aaps-builder-step5). Aby se odkazy GitHubu neotevíraly v aplikaci: v Androidu **Nastavení** → **Aplikace** → **GitHub** → **Otevírat ve výchozím nastavení** → vypněte **Otevírat podporované odkazy**.
- **"Google Drive access has expired or was revoked"**: redo [step 6](#aaps-builder-google-drive) and update the `GDRIVE_OAUTH2` secret.

For other GitHub and Google Drive issues, see [Browser build troubleshooting](../GettingHelp/BrowserBuildTroubleshooting.md).

```{toctree}
:hidden:

AAPS Builder setup page <BrowserBuildAapsBuilderSetup.md>
```
