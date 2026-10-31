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

Celým postupem vás provede stránka nastavení na tomto webu. Poprvé to trvá asi 10 minut:

1. Vytvořte ve svém účtu na GitHubu prázdný **soukromý** repozitář: stránka nastavení otevře GitHub se vším vyplněným, vy jen potvrdíte.
2. Přidáte **sestavovací workflow**, tedy soubor, který GitHubu říká, jak AAPS sestavit.
3. Vytvoříte nebo nahrajete svůj **podpisový klíč** (úložiště klíčů).
4. Předáte klíč svému repozitáři jako GitHub **secret**.
5. **Sestavíte** aplikaci. Jedno sestavení trvá 15 až 30 minut.
6. **Stáhnete a nainstalujete** aplikaci do telefonu.

**Nemusíte** vytvářet fork AndroidAPS: zdrojový kód AAPS se při každém sestavení stáhne z oficiálního repozitáře AndroidAPS. **Nepotřebujete** ani Disk Google: aplikaci stáhnete přímo z GitHubu.

```{admonition} Where the code comes from
:class: note

Stránka nastavení i sestavovací workflow jsou součástí této dokumentace: udržují se a kontrolují spolu s ní. <a href="../_static/aaps-builder/aaps-builder-build.yml">Workflow</a>, které přidáte do svého repozitáře, je krátké: spouští [kroky sestavení](https://github.com/openaps/AndroidAPSdocs/blob/dev/.github/workflows/aaps-builder.yml) uložené v repozitáři dokumentace, pevně nastavené na jednu zkontrolovanou verzi. Obojí si můžete před použitím přečíst. Při sestavení workflow stahuje jen oficiální zdrojový kód AAPS a vlastní sestavovací nástroje GitHubu. Vaše úložiště klíčů nikdy neopustí váš prohlížeč a váš soukromý repozitář.
```

(aaps-builder-before-you-start)=

## Než začnete

Budete potřebovat:

- **Účet na GitHubu** (zdarma). Pokud ho nemáte, nejprve si ho vytvořte na [github.com](https://github.com/signup).
- **Webový prohlížeč**: Chrome v telefonu nebo jakýkoli prohlížeč na počítači. Než začnete, přihlaste se v tomto prohlížeči na github.com.
- **Máte v telefonu aplikaci GitHub?** Můžete si ji ponechat. Některá tlačítka stránky nastavení pak místo Chromu otevřou tuto aplikaci. Sestavovat v aplikaci lze, ale aplikace **neumí stáhnout** hotové AAPS: [krok 6](#aaps-builder-step6) ukazuje, jak pro stažení přejít do Chromu.
- Své **stávající úložiště klíčů** (soubor `.jks`), jeho heslo a alias, pokud jste AAPS již dříve sestavili a chcete ho aktualizovat bez přeinstalace.

```{warning}
**Váš repozitář pro sestavení musí zůstat soukromý.** Vše, co sestavení vytvoří, vidí každý, kdo vidí repozitář. Stránka nastavení vám vytvoří soukromý repozitář. Nikdy ho nepřepínejte na veřejný.

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

Vaše úložiště klíčů je uložené jako secrety ve vašem forku. GitHub už secret nikdy znovu neukáže, takže ho nemůžete zkopírovat do nového repozitáře. Nejprve si získejte kopii úložiště klíčů a potom ji použijte v [kroku 3](#aaps-builder-step3) s volbou **I already have a keystore**.

```{warning}
Nevolte **Create a new key**. AAPS sestavené s novým klíčem nemůže aktualizovat AAPS ve vašem telefonu.
```

Která situace je ta vaše?

- **Použili jste Možnost 2** (nahráli jste vlastní úložiště klíčů z Android Studia) a stále máte soubor `.jks`, jeho hesla a alias: zde nemusíte nic dělat. Tento soubor použijte v kroku 3.
- **Použili jste Možnost 1** (klíč vytvořil přípravný soubor), nebo už soubor úložiště klíčů nemáte: exportujte ho ze svého forku podle postupu níže.

Export úložiště klíčů z vašeho forku:

1. Ve svém forku otevřete **Settings** → **Secrets and variables** → **Actions** a přidejte secret s názvem `ZIP_PASSWORD`. Zvolte heslo jen z anglických písmen a číslic. Chrání soubor, který se chystáte vytvořit.
2. Otevřete kartu **Actions** svého forku, klepněte na **CI Keystore Export** a potom na **Run workflow**. Více podrobností: [Export úložiště klíčů](#ci-keystore-export).
3. Když má běh zelenou fajfku, otevřete svůj Disk Google: soubor `keystore.zip` je ve složce **AAPS** → **KeyStore**. Pokud běh selže v kroku Disku Google, vypršel přístup vašeho forku k Disku Google: viz [Vypršel obnovovací token Google](#aaps-ci-google-token-expired).
4. Stáhněte `keystore.zip` a otevřete ho pomocí svého `ZIP_PASSWORD`: na počítači, nebo v telefonu ve správci souborů, který umí otevírat ZIP soubory chráněné heslem. Obsahuje:
   - `keystore.jks`: vaše úložiště klíčů,
   - `keyStoreInfo.txt`: vaše `KEYSTORE_PASSWORD`, `KEY_PASSWORD` a `ALIAS` (obvykle `key0`).
5. Zkopírujte `keystore.jks` do telefonu (nebo na Disk Google, abyste ho mohli vybrat odtud).

V [kroku 3](#aaps-builder-step3) stránky nastavení:

1. Klepněte na **I already have a keystore**.
2. V poli **Keystore file** vyberte `keystore.jks`.
3. Do pole **Keystore password** zadejte `KEYSTORE_PASSWORD` ze souboru `keyStoreInfo.txt`.
4. V poli **Key alias** vyberte nebo zadejte `ALIAS` ze souboru `keyStoreInfo.txt`.
5. Pokud se `KEY_PASSWORD` liší od `KEYSTORE_PASSWORD`, zrušte zaškrtnutí **Key password is the same as the keystore password** a zadejte `KEY_PASSWORD`.

Soubor `keystore.zip` a jeho `ZIP_PASSWORD` uchovávejte na bezpečném místě mimo telefon: je to záloha vašeho klíče.

Ani přístup vašeho forku k Disku Google nelze zkopírovat. Pokud chcete sestavení z AAPS Builder ukládat také na Disk Google, udělejte [krok 7](#aaps-builder-google-drive). Svůj fork si můžete ponechat, dokud nebudete mít v telefonu nainstalované AAPS sestavené pomocí AAPS Builder.

## Otevřete stránku nastavení

**→ [Otevřít stránku nastavení AAPS Builder](#aaps-builder-setup)**

Nechte tuto stránku dokumentace otevřenou: dlouze stiskněte odkaz výše a zvolte **Otevřít na nové kartě**. Kroky níže podrobněji vysvětlují jednotlivé části stránky nastavení.

Stránka nastavení otevírá každou stránku GitHubu na nové kartě Chromu. Pro návrat na stránku nastavení klepněte na tlačítko karet vedle adresního řádku Chromu (čtverec s číslem) a zvolte stránku nastavení AAPS Builder.

Stránka nastavení běží celá ve vašem prohlížeči: váš klíč a hesla se nikam neposílají, kromě GitHub secretu, do kterého je sami vložíte. GitHubu se posílá jen vaše uživatelské jméno, aby se ověřilo, že existuje. Pamatuje si vaše uživatelské jméno na GitHubu a název repozitáře, takže se k ní můžete kdykoli vrátit a znovu otevřít stránku secretů nebo svá sestavení.

![Stránka nastavení AAPS Builder](../images/Building-the-App/CI/AapsBuilder30_Step1.png)

(aaps-builder-step1)=

## Krok 1 – Vytvořte si soukromý repozitář pro sestavení

V tomto kroku se ve vašem účtu na GitHubu vytvoří prázdný soukromý repozitář. Jen vy vidíte jeho obsah a aplikace, které v něm vzniknou.

1. Ujistěte se, že jste v tomto prohlížeči přihlášeni na github.com.

2. Do pole **Your GitHub username** zadejte své uživatelské jméno na GitHubu, ne e-mail. Stránka ho ověří u GitHubu: **✓ GitHub user found** znamená, že je správné.

3. V poli **Name of your repository** ponechte navržený název `my-aaps`. Pokud jste už repozitář vytvořili s jiným názvem, zadejte přesně tento název.

   ```{tip}
   **Už jste si sami vytvořili prázdný soukromý repozitář?** Zadejte sem jeho přesný název, neklepejte na **Create my private repository** a přejděte na [krok 2](#aaps-builder-step2).
   ```

4. Zkontrolujte řádek **Your repository:** – ukazuje `github.com/<your username>/my-aaps`.

5. Klepněte na **Create my private repository**.

   ![Vyplněný krok 1 stránky nastavení](../images/Building-the-App/CI/AapsBuilder31_Step1Filled.png)

6. Na nové kartě se otevře GitHub s vaším účtem jako **Owner** a se zvoleným názvem.

   ![Stránka GitHubu Create a new repository](../images/Building-the-App/CI/AapsBuilder32_GitHubNewRepo.png)

   Posuňte se dolů: **Private**, **No template** a **Add README: Off** jsou již vybrané. Nic neměňte a nepřidávejte README ani jiné soubory.

7. Posuňte se dolů a klepněte na zelené tlačítko **Create repository**.

   ![Tlačítko Create repository](../images/Building-the-App/CI/AapsBuilder34_GitHubCreate.png)

   GitHub zobrazí váš nový prázdný repozitář. **Vraťte se na kartu se stránkou nastavení** kvůli kroku 2: klepněte na tlačítko karet vedle adresního řádku Chromu a zvolte stránku nastavení.

(aaps-builder-step2)=

## Krok 2 – Přidejte sestavovací workflow

Sestavovací workflow je krátký textový soubor, který GitHubu říká, jak AAPS sestavit. Stránka nastavení ho do vašeho repozitáře přidá jen jednou: vy to pouze potvrdíte.

1. Zkontrolujte, že stránka ukazuje **Workflow version … is ready**, a potom klepněte na **Add the workflow to my repository**.

   ![Krok 2 stránky nastavení](../images/Building-the-App/CI/AapsBuilder35_Step2.png)

2. GitHub otevře ve vašem repozitáři nový soubor, který už má název `.github/workflows/build.yml` a je už vyplněný. Zkontrolujte název souboru nahoře: musí být přesně `.github/workflows/build.yml`. Text neměňte.

3. Klepněte na **Commit changes…**

   ![Workflow vyplněné stránkou nastavení](../images/Building-the-App/CI/AapsBuilder37_NewFilePasted.png)

4. a potom znovu na **Commit changes** v okně, které se otevře.

   ![Okno Commit changes](../images/Building-the-App/CI/AapsBuilder38_CommitDialog.png)

   GitHub zobrazí nový soubor `build.yml` ve složce `.github/workflows` vašeho repozitáře.

   ![Soubor workflow ve vašem repozitáři](../images/Building-the-App/CI/AapsBuilder39_WorkflowAdded.png)

```{warning}
Když je otevřený editor souboru, nemačkejte na telefonu tlačítko **Zpět** a nestahujte stránku dolů: GitHub stránku znovu načte a text zmizí. Pokud se to stane, klepněte v modrém pruhu na **Restore**, nebo se vraťte na stránku nastavení a klepněte na tlačítko znovu.
```

Pokud je textové pole prázdné, klepněte dole v kroku 2 na stránce nastavení na **Updating the workflow, or the text area is empty?**: klepněte na **Copy workflow** a vložte ho do textového pole (v telefonu dlouhým stiskem).

```{warning}
Používejte jen workflow z této stránky nastavení. Nekopírujte sestavovací workflow z jiného webu ani repozitáře: workflow běží vedle vašeho podpisového klíče.
```

(aaps-builder-step3)=

## Krok 3 – Váš podpisový klíč

Aplikace musí být podepsaná vaším vlastním klíčem. Zvolte jednu ze dvou karet. Nejprve si přečtěte [upozornění k novému nebo stávajícímu klíči](#aaps-builder-before-you-start).

![Krok 3 stránky nastavení: dvě možnosti klíče](../images/Building-the-App/CI/AapsBuilder40_Step3.png)

### I already have a keystore

1. Klepněte na **I already have a keystore**.
2. V poli **Keystore file** vyberte svůj soubor `.jks` (nebo `.keystore`, `.p12`, `.pfx`). Pokud jste v telefonu, nejprve si soubor zkopírujte do telefonu nebo na Disk Google.
3. Do pole **Keystore password** zadejte heslo úložiště klíčů.
4. V poli **Key alias** vyberte svůj alias ze seznamu, nebo ho zadejte, pokud seznam není. U úložišť klíčů vytvořených v Android Studiu je to obvykle `key0`.
5. Pokud se heslo klíče liší od hesla úložiště klíčů, zrušte zaškrtnutí **Key password is the same as the keystore password** a zadejte heslo klíče.
6. Klepněte na **Check and continue**.

Stránka zkontroluje heslo a alias přímo ve vašem zařízení. **Keystore OK! Continue with step 4.** znamená, že je vše v pořádku. Pokud stránka napíše, že heslo bude zkontrolováno až při sestavení, přesto pokračujte: sestavení vám řekne, pokud je něco špatně.

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

(aaps-builder-step4)=

## Krok 4 – Předejte klíč svému repozitáři

Krok 4 se odemkne po dokončení kroku 3. Váš klíč, jeho hesla a alias se zabalí do jedné hodnoty, secretu `KEYSTORE_SET`.

1. Klepněte na **Open the secrets page**.

![Krok 4 stránky nastavení](../images/Building-the-App/CI/AapsBuilder43_Step4.png)

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

(aaps-builder-step5)=

## Krok 5 – Sestavte aplikaci

1. Na stránce nastavení klepněte na **Open the build page**. GitHub otevře stránku **Build AAPS** vašeho repozitáře.

   ![Stránka GitHubu Build AAPS s tlačítkem Run workflow](../images/Building-the-App/CI/AapsBuilder15_BuildPage.png)

   Pokud se místo toho otevře **aplikace GitHub**: klepněte na **RUN WORKFLOW**, zkontrolujte verzi a variantu a znovu klepněte na **RUN WORKFLOW**. Aplikace může stále ukazovat **Nothing to see here**: stáhněte seznam dolů, aby se obnovil, a uvidíte své sestavení. Potom pokračujte krokem 4 níže.

2. Pokud se GitHub zeptá, klepněte na zelené tlačítko pro povolení workflow.
3. Klepněte na **Run workflow**. Otevře se malý formulář:
   - **Version**: ponechte `latest` pro sestavení nejnovější verze AAPS, nebo zadejte číslo verze, například `3.3.2.1`.
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

- Otevřete svůj repozitář a zkontrolujte, že v něm je soubor `.github/workflows/build.yml`. Pokud chybí nebo má jiný název, udělejte znovu [krok 2](#aaps-builder-step2).
- Otevřete kartu **Actions**. Pokud je tam napsáno, že workflow jsou vypnutá, klepněte na zelené tlačítko pro jejich povolení a potom v seznamu klepněte na **Build AAPS**.

(aaps-builder-step6)=

## Krok 6 – Nainstalujte aplikaci do telefonu

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

## Krok 7 (volitelný) – Ukládání aplikace také na Disk Google

Každé sestavení si můžete nechat ukládat také na svůj Disk Google, do složky `AAPS/<version>`. Je to volitelné: aplikace je vždy dostupná na stránce sestavení.

Potřebujete k tomu ještě jeden secret, `GDRIVE_OAUTH2`. Jeho hodnotu získáte pomocí přípravného souboru, který používají ostatní způsoby sestavení v prohlížeči:

1. Na **počítači** stáhněte přípravný soubor a otevřete ho podle popisu v [Možnost 1 – Počítač](BrowserBuildO1Computer.md). Část s úložištěm klíčů přeskočte: klíč už máte.
2. Postupujte podle [Krok 3 – Autorizace Disku Google](#aaps-ci-google-drive-auth) a získejte hodnotu `GDRIVE_OAUTH2`.
3. Na stránce nastavení otevře krok 7 vaši stránku secretů.

   ![Krok 7 stránky nastavení](../images/Building-the-App/CI/AapsBuilder48_Step7.png)

   Klepněte na **Copy name** a vložte ho do malého pole **Name** (název je `GDRIVE_OAUTH2`). Vložte svou hodnotu `GDRIVE_OAUTH2` do velkého pole **Secret** a klepněte na **Add secret**.

Od příštího sestavení se soubory APK ukládají také na Disk Google.

Google přístup zruší, pokud 6 měsíců nic nesestavíte nebo pokud změníte heslo ke Googlu. Sestavení vám to pak oznámí: zopakujte tyto kroky. Viz [Vypršel obnovovací token Google](#aaps-ci-google-token-expired).

(aaps-builder-updates)=

## Aktualizace AAPS

Váš repozitář nikdy nic nesestaví sám: vy rozhodujete, kdy sestavit, jakou verzi a jakou variantu. Když vyjde nová verze AAPS:

1. [Zálohujte nastavení](#aaps-builder-step6) podle kroku 6.
2. Sestavte novou verzi podle [kroku 5](#aaps-builder-step5). Ponechte `latest`, nebo zadejte číslo verze.
3. Stáhněte a nainstalujte ji podle [kroku 6](#aaps-builder-step6).

**Aktualizace sestavovacího workflow:** váš repozitář nikdy sám nestahuje nové workflow a kroky sestavení, které spouští, jsou pevně nastavené na jednu zkontrolovanou verzi. Když se workflow změní, uvede to stránka [Aktualizace a změny dokumentace](../Maintenance/DocumentationUpdate.md). Pro aktualizaci otevřete krok 2 stránky nastavení a klepněte na **Updating the workflow, or the text area is empty?**:

1. Klepněte na **Copy workflow** a potom na **Open my workflow file**.
2. Nahraďte celý text zkopírovaným workflow (v telefonu dlouhým stiskem: **Vybrat vše** a potom **Vložit**).
3. Klepněte na **Commit changes…** a potom na **Commit changes**.

Na prvním řádku souboru je jeho verze.

(aaps-builder-troubleshooting)=

## Řešení problémů

Pokud chcete zjistit, proč sestavení selhalo, [přečtěte si protokol sestavení](#aaps-ci-read-the-logs): kroky mají jiné názvy, ale chybu najdete stejným způsobem. Stejným způsobem můžete také [aktualizovat secret](#aaps-ci-update-secret) a [spustit sestavení znovu](#aaps-ci-rerun).

- **Sestavení se zastaví se zprávou „This repository is PUBLIC“**: ve svém repozitáři otevřete **Settings** → **General** → **Danger Zone** → **Change visibility** → **Private** a potom sestavte znovu.
- **„Secret KEYSTORE_SET is missing“**: udělejte krok 4 na stránce nastavení.
- **„The secret is too short“**, **„The secret is not a valid code“** nebo **„The secret does not contain a keystore“**: do secretu byl vložen špatný text, často samotné slovo `KEYSTORE_SET` nebo jen část kódu. Ve svém repozitáři otevřete **Settings** → **Secrets and variables** → **Actions**, upravte `KEYSTORE_SET` a znovu vložte dlouhý kód z **Copy secret** (pokud jste stránku nastavení zavřeli, nejprve zopakujte krok 3).
- **„Keystore, password or alias is wrong“**: zkontrolujte heslo a alias svého úložiště klíčů a potom zopakujte kroky 3 a 4 na stránce nastavení.
- **„Version … does not exist“**: zadaná verze není vydaná verze AAPS. Použijte `latest`, nebo zkontrolujte číslo verze.
- **„Page not found“ (404), když stránka nastavení otevře GitHub**: přihlaste se na github.com ve stejném prohlížeči (GitHub ukazuje 404 u soukromých repozitářů, když nejste přihlášeni). Pokud jste přihlášeni, uživatelské jméno nebo název repozitáře v kroku 1 stránky nastavení neodpovídá vašemu repozitáři. Zadejte přesné názvy.
- **„No GitHub user with this name“** v kroku 1: zadejte své uživatelské jméno na GitHubu tak, jak je uvedeno ve vašem profilu GitHub, ne e-mail.
- **Chybí odkaz Download, nebo se otevřela aplikace GitHub**: aplikace GitHub neumí stahovat sestavení. Otevřete sestavení v Chromu podle popisu v [kroku 6](#aaps-builder-step6). Aby se odkazy GitHubu neotevíraly v aplikaci: v Androidu **Nastavení** → **Aplikace** → **GitHub** → **Otevírat ve výchozím nastavení** → vypněte **Otevírat podporované odkazy**.
- **„Could not read the workflow file“** na stránce nastavení: znovu načtěte stránku a klepněte na tlačítko znovu. Stránka nastavení musí být otevřená z tohoto webu dokumentace.
- **GitHub hlásí, že soubor už existuje**, když potvrzujete workflow: váš repozitář už nějaké workflow má. Místo toho ho aktualizujte podle popisu v části [Aktualizace AAPS](#aaps-builder-updates).
- **„Google Drive access has expired or was revoked“**: zopakujte [krok 7](#aaps-builder-google-drive) a aktualizujte secret `GDRIVE_OAUTH2`.

Další problémy s GitHubem a Diskem Google najdete na stránce [Sestavení v prohlížeči: řešení problémů](../GettingHelp/BrowserBuildTroubleshooting.md).

```{toctree}
:hidden:

Stránka nastavení AAPS Builder <BrowserBuildAapsBuilderSetup.md>
```
