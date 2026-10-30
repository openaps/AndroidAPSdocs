(browser-build)=

# Sestavení v prohlížeči

Sestavení AAPS pomocí GitHub Actions.

**Minimální podporovaná verze AAPS je 3.3.2.1.**

## Sestavte si aplikaci sami, místo stažení

**Aplikace AAPS (soubor apk) není k dispozici ke stažení kvůli předpisům pro zdravotnické prostředky. Sestavit si aplikaci pro vlastní použití je legální, ale nesmíte dávat kopii jiným!**

Podrobnosti najdete na stránce [Nejčastější otázky uživatelů APS](../UsefulLinks/FAQ.md).

(Building-APK-without-a-computer)=

## Zvolte způsob sestavení

Vyberte způsob podle zařízení, ze kterého sestavujete:

### Na telefonu s Androidem: AAPS Builder (doporučeno)

Stránka nastavení vás provede vytvořením vlastního soukromého repozitáře pro sestavení na GitHubu. Nic se neinstaluje, nepotřebujete přípravný soubor a každé sestavení spouštíte sami. Aplikaci stáhnete přímo z GitHubu. Disk Google není nutný.

Funguje to i z prohlížeče na počítači.

**→ [Sestavení pomocí AAPS Builder](BrowserBuildAapsBuilder.md)**

### Na počítači nebo iPhonu / iPadu: fork a přípravný soubor

Na GitHubu si vytvoříte kopii (fork) zdrojového kódu AAPS, pomocí přípravného souboru vytvoříte úložiště klíčů a sestavená aplikace se uloží na váš Disk Google. Postupujte podle čtyř kroků níže.

```{note}
**Už sestavujete s forkem?** Dál ho aktualizujte podle návodu [Aktualizace v prohlížeči](../Maintenance/UpdateBrowserBuild.md), nebo přejděte na AAPS Builder. Pokud chcete přejít, nejprve si z forku získejte kopii úložiště klíčů: viz [Přechod z předchozího sestavení v prohlížeči](#aaps-builder-from-fork).
```

V prohlížeči budete používat více karet a přepínat mezi nimi. Příklad v Chrome:

![fork_aaps](../images/Building-the-App/CI/BrowserBuildTabs.png)

```{note}
Budete muset přepínat mezi kartami: začněte se všemi kartami zavřenými, abyste se při přepínání neztratili.
```

#### Co budete potřebovat

- **Účet Google**, aby se sestavená aplikace mohla uložit na váš Disk Google.
- **Účet GitHub** (zdarma) – vytvoříte ho v kroku 1.
- **Webový prohlížeč**, který umí mít otevřeno několik karet najednou (níže předpokládáme Chrome).
- Malý **pomocný nástroj pro spuštění přípravného souboru**. Který potřebujete, záleží na zařízení, ze kterého sestavujete – teď nic neinstalujte, krok 2 vás tím provede pro vaše zařízení:
  - **Počítač (Windows / Mac / Linux):** Simple Web Server.
  - **iPhone / iPad:** žádná další aplikace – použijete vestavěnou aplikaci Soubory a prohlížeč.

#### Postup

Sestavení v prohlížeči je řada rozhodnutí. Postupujte podle těchto kroků v uvedeném pořadí:

1. **[Vytvořte si fork na GitHubu](BrowserBuildFork.md)** – vytvořte si osobní kopii zdrojového kódu AAPS.
2. **[Vytvořte si podpisové úložiště klíčů](BrowserBuildKeystore.md)** – hlavní rozhodnutí: vytvořit nové úložiště klíčů (možnost 1), nebo nahrát stávající (možnost 2). Pak postupujte podle stránky pro vaše zařízení.
3. **[Autorizujte Disk Google](BrowserBuildGoogleDrive.md)** – povolte GitHubu ukládat sestavenou aplikaci na váš Disk Google.
4. **[Sestavte APK](BrowserBuildAPK.md)** – spusťte workflow v GitHub Actions a vyberte verzi a variantu.

Pokud narazíte na potíže, viz **[Řešení problémů se sestavením v prohlížeči](../GettingHelp/BrowserBuildTroubleshooting.md)**. Volitelné operace s forkem najdete v částech [export úložiště klíčů](#ci-keystore-export) a [cherry-pick commitu](#github-cherry-pick).

----

**Začněte [krokem 1 – Vytvořte si fork na GitHubu](BrowserBuildFork.md) →**

```{toctree}
:hidden:

AAPS Builder <BrowserBuildAapsBuilder.md>
Krok 1: Vytvořte si fork <BrowserBuildFork.md>
Krok 2: Vytvořte si úložiště klíčů <BrowserBuildKeystore.md>
Krok 3: Autorizujte Disk Google <BrowserBuildGoogleDrive.md>
Krok 4: Sestavte APK <BrowserBuildAPK.md>
```
