# Přenos a instalace AAPS na váš telefon

V předchozí části, [Sestavení **AAPS**](../SettingUpAaps/BuildingAaps.md), jste na počítači sestavili aplikaci **AAPS** (je to soubor .apk).

Dalším krokem je **přenést** soubor APK aplikace **AAPS** (a také další aplikace, které můžete potřebovat, např. BYODA, xDrip nebo jinou aplikaci pro příjem dat z CGM) do vašeho telefonu s Androidem a pak aplikaci (aplikace) **nainstalovat**. Po instalaci **AAPS** do telefonu můžete pokračovat [**nastavením smyčky AAPS**](../SettingUpAaps/SetupWizard.md).

Tato stránka také vysvětluje [ověřování vývojářů Androidu](#android-developer-verification), změnu, kterou Google zavádí od září 2026 a která se týká instalace vlastnoručně sestavených aplikací, a [bezplatné způsoby instalace](#android-developer-verification-free-methods), které budou fungovat i po této změně.

```{contents} Table of contents
:depth: 1
:local: true
```

## Instalace AAPS klepnutím na soubor APK

Dnes **AAPS** nainstalujete tak, že soubor APK přenesete do telefonu a otevřete ho (klepnete na něj). Soubor APK aplikace **AAPS** můžete z počítače do chytrého telefonu přenést několika způsoby. Zde popíšeme dva různé způsoby:

* Možnost 1 - Přenos pomocí Google drive (Gdrive)
* Možnost 2 - Přenos pomocí USB kabelu

Vezměte prosím na vědomí, že přenos e-mailem může způsobit potíže, a není doporučován.

```{admonition} Android developer verification
:class: warning
Google zavádí [ověřování vývojářů Androidu](#android-developer-verification) od září 2026 (nejprve v Brazílii, Indonésii, Singapuru a Thajsku; po celém světě v roce 2027). Tam, kde už platí, je instalace APK klepnutím na soubor – jak ji popisují obě možnosti níže – zablokována. V takovém případě použijte jeden z [bezplatných způsobů instalace](#android-developer-verification-free-methods) níže na této stránce.
```

### Možnost 1. Přenos pomoví Google drive (Gdrive)

Ve webovém prohlížeči otevřete [Google.com](https://www.google.com/) a přihlaste se ke svému účtu Google.

V Google menu v pravém horním rohu vyberte aplikaci Drive.

![Spuštění aplikace Disk Google](../images/GoogleDriveInWebbrowser.png)

Klikněte vlevo nahoře na **New** (Nový) (nebo klikněte pravým tlačítkem do prázdného místa pod soubory a složkami) a vyberte **File upload** (Nahrát soubor).

![Nahrání souboru apk do aplikace Disk Google](../images/GoogleDriveUploadFile.png)

Váš APK soubor by teď měl být nahrán ve vašem Google Drive.

#### Use the Google Drive app to execute the apk file for installation

Vezměte si váš telefon a spusťte aplikaci Google Drive. Jedná se předinstalovanou aplikaci a najdete ji na stejném místě, kde se nachází všechny vaše Google aplikace nebo pomocí vyhledávání.

![spusťte aplikaci Disk Google](../images/GoogleDriveMobileAPPLaunch.png)

Spusťte instalaci apk klepnutím na název souboru v aplikaci Disk Google v mobilu.

![spusťte instalaci apk](../images/GoogleDriveMobileUploadedAPK.png)

Pokud se zobrazí bezpečnostní upozornění, že instalace aplikací z Disku Google teď není povolena, klepněte na „Nastavení“ a povolte ji jen na tuto krátkou chvíli. Potom ji znovu zakažte, protože nechat ji trvale povolenou je bezpečnostní riziko.

![Bezpečnostní upozornění Disku Google](../images/GoogleDriveMobileMissingSecuritySetting.png)

![Bezpečnostní upozornění Disku Google](../images/GoogleDriveMobileSettingSecuritySetting.png)

Po dokončení instalace je tento krok hotový.

Měli byste vidět ikonu **AAPS** a aplikaci byste měli být schopni otevřít.

```{warning}
**DŮLEŽITÉ BEZPEČNOSTNÍ UPOZORNĚNÍ**
Nezapomněli jste znovu zakázat instalaci z Disku Google?
```

Pokračujte [nastavením smyčky AAPS](../SettingUpAaps/SetupWizard.md).

### Možnost 2. Přenos pomocí USB kabelu

Druhý způsob, jak přenést soubor apk aplikace AAPS, je pomocí [USB kabelu](https://support.google.com/android/answer/9064445?hl=en).

Přenos souboru z jeho umístění ve vašem počítači do adresáře "Stažené soubory" ve vašem telefonu.

Ve vašem telefonu budete muset povolit instalaci aplikací z neznámých zdrojů. Návod, jak to udělat, najdete na internetu (_např._ [zde](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) nebo [zde](https://www.androidcentral.com/unknown-sources)).

Až soubor přetažením přenesete, otevřete v telefonu složku „Stažené soubory“ (Downloads) a klepněte na soubor apk aplikace AAPS:

![Soubor apk ve složce Stažené soubory](../images/install/install_01_downloads_apk.png)

Napoprvé vám Android oznámí, že telefon nesmí instalovat neznámé aplikace z tohoto zdroje. Klepněte na „**Nastavení**“:

![Bezpečnostní upozornění pro neznámé aplikace](../images/install/install_02_unknown_apps_notice.png)

Zapněte „**Povolit z tohoto zdroje**“ a pak se vraťte zpět:

![Zapnuté Povolit z tohoto zdroje](../images/install/install_04_unknown_apps_allowed.png)

Znovu klepněte na soubor apk a zvolte „**Instalovat**“:

![Výzva k instalaci](../images/install/install_05_install_prompt.png)

Po dokončení instalace klepněte na „**Otevřít**“, abyste spustili **AAPS**, nebo na „**Hotovo**“, pokud ji chcete otevřít později:

![Aplikace nainstalována](../images/install/install_07_app_installed.png)

```{warning}
**DŮLEŽITÉ BEZPEČNOSTNÍ UPOZORNĚNÍ**
Po instalaci nezapomeňte „Povolit z tohoto zdroje“ znovu vypnout, protože nechat ho trvale zapnuté je bezpečnostní riziko.
```

Pokračujte [nastavením smyčky AAPS](../SettingUpAaps/SetupWizard.md).

(transferring-installing-play-protect-warning)=
## Varování Google Play Protect

Při instalaci **AAPS** vás Google Play Protect může varovat, že aplikace není bezpečná, byla vytvořena pro starší verzi Androidu a neobsahuje nejnovější ochranu soukromí.

![Varování Google Play Protect](../images/troubleshooting/InstallGPP.png)

U aplikace, kterou jste si sami sestavili, je to očekávané. Klepněte na **Další podrobnosti** a pak na **Přesto nainstalovat**.

Pokud je instalace **zablokována** se zprávou o neověřeném vývojáři (nejen varování), podívejte se níže na [ověřování vývojářů Androidu](#android-developer-verification).

(android-developer-verification)=

## Ověřování vývojářů Androidu

Google zavádí **ověřování vývojářů Androidu**: na většině telefonů s Androidem se aplikace nainstaluje jen tehdy, když ji u Googlu zaregistroval ověřený vývojář. To platí i pro aplikace instalované ze souboru APK („sideloading“) – a právě tak instalujete aplikaci **AAPS**, kterou jste si sami sestavili.

### Co se mění

Když instalujete **AAPS** do telefonu se službami Google („certifikované“ zařízení s Androidem – prakticky každý telefon prodávaný s Obchodem Play), Android zkontroluje, zda aplikace pochází od vývojáře registrovaného u Googlu. Pokud ne, běžná instalace klepnutím na soubor APK je zablokována.

**Kontrola proběhne při instalaci nebo aktualizaci aplikace.** Neodstraní aplikace, které jsou už nainstalované a běží.

Google to zavádí postupně:

| Kdy           | Co se stane                                                                                                                                               |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| srpen 2026    | Bezplatné vývojářské účty pro „omezenou distribuci“ jsou otevřené po celém světě a do telefonů se začíná dostávat „pokročilý postup“ (advanced flow)      |
| 30. září 2026 | Ověřování se vyžaduje v **Brazílii, Indonésii, Singapuru a Thajsku**, a to pro aplikace instalované z Google Play a několika dalších obchodů s aplikacemi |
| 2027          | Vyžadování se rozšíří na **zbytek světa** a na **všechny instalace**, včetně souborů APK                                                                  |

Podrobnosti zveřejňuje Google na stránkách [Android developer verification](https://developer.android.com/developer-verification), včetně [častých dotazů](https://developer.android.com/developer-verification/guides/faq). Google může data a podrobnosti ještě změnit; tato stránka bude aktualizována podle toho, jak bude zavádění pokračovat.

### Týká se to mě?

- **Sestavení AAPS se to vůbec netýká.** [Sestavení v prohlížeči](#browser-build), [sestavení v Android Studiu](ComputerBuild.md) i [sestavení z příkazové řádky](CLIBuild.md) fungují úplně stejně jako dřív a vaše úložiště klíčů se nemění.
- **Vaše současná AAPS poběží dál.** Ověření se kontroluje jen při instalaci nebo aktualizaci aplikace.
- **Pokud žijete v Brazílii, Indonésii, Singapuru nebo Thajsku:** od 30. září 2026 se ověřování vyžaduje u aplikací instalovaných z Google Play a několika dalších obchodů s aplikacemi. Google uvádí, že přímá instalace souboru APK do tohoto prvního kroku nespadá, takže **AAPS** by se měla stále instalovat jako obvykle. Přesto si už teď připravte jeden z [bezplatných způsobů instalace](#android-developer-verification-free-methods) níže, aby vás nepřekvapilo, kdyby se to změnilo.
- **Pokud žijete jinde:** do roku 2027 se pro vás nic nemění a nedělat zatím nic je rozumná volba. Přesto si nastavte jeden z [bezplatných způsobů instalace](#android-developer-verification-free-methods) níže, dokud vše funguje: zjistit blokaci v den, kdy je aktualizace odmítnuta, a mít před sebou 24hodinové čekání [pokročilého postupu](#android-developer-verification-advanced-flow), je ta nejhorší chvíle.
- **Staré telefony:** ověřování platí pro telefony s Androidem 7 nebo novějším, tedy pro každý telefon, na kterém lze **AAPS** provozovat.

(android-developer-verification-free-methods)=

## Bezplatné způsoby instalace AAPS

Abyste mohli **AAPS** dál používat, **nemusíte** Googlu nic platit. Existuje několik bezplatných způsobů; vyberte ten, který odpovídá vaší situaci.

```{admonition} Which method should I use?
:class: tip
- Máte **počítač** (bez ohledu na to, jak jste **AAPS** sestavili): použijte [ADB](#android-developer-verification-adb), nebo, pokud se chcete vyhnout příkazové řádce, [webový instalátor](#android-developer-verification-web). Oba způsoby jsou z ověřování vyjmuté, nemají žádná omezení a nepotřebují účet Google.
- **Nemáte vůbec počítač**: použijte v telefonu [pokročilý postup](#android-developer-verification-advanced-flow).
- Chcete se raději u Googlu zaregistrovat, aby běžná instalace „klepnutím na APK“ fungovala dál: existuje [bezplatný účet pro omezenou distribuci](#android-developer-verification-limited-account), ale s **AAPS** zatím není vyzkoušený.
```

(android-developer-verification-adb)=

### Možnost 1: Instalace pomocí ADB (je potřeba počítač)

ADB (Android Debug Bridge) je oficiální nástroj Googlu pro instalaci aplikací z počítače do telefonu přes USB kabel. Google potvrdil, že **aplikace nainstalované pomocí ADB nevyžadují ověření** – žádná čekací doba, žádný limit zařízení a žádná registrace.

Jednorázová příprava:

1. V telefonu zapněte skryté možnosti vývojáře: přejděte do **Nastavení** > **O telefonu** (na některých telefonech **Informace o softwaru**) a sedmkrát klepněte na **Číslo sestavení**, dokud telefon nepotvrdí, že jste vývojář.
1. Vraťte se do hlavního **Nastavení**, otevřete novou položku **Možnosti vývojáře** a zapněte **Ladění USB**.
1. V počítači zajistěte, aby bylo ADB k dispozici:
   - Pokud používáte **Android Studio**, ADB se nainstalovalo spolu s ním.
   - Jinak si stáhněte bezplatné [SDK Platform Tools](https://developer.android.com/tools/releases/platform-tools) od Googlu a rozbalte složku. Nic se neinstaluje; ADB je program `adb` uvnitř této složky.

Instalace (a později aktualizace) **AAPS**:

1. Připojte telefon k počítači USB kabelem. Soubor APK není nutné nejprve přenášet do telefonu: ADB ho pošle přímo z počítače.
1. V telefonu potvrďte výzvu **Povolit ladění USB?** (jen napoprvé).
1. V počítači otevřete terminál (příkazový řádek) ve složce, kde je ADB a soubor APK aplikace **AAPS**, a spusťte:

   ```
   adb install -r app-full-release.apk
   ```

   Nahraďte `app-full-release.apk` skutečným názvem vašeho souboru APK. Volba `-r` aktualizuje již nainstalovanou **AAPS** a zachová všechna její data a nastavení.

1. Počkejte, až se zobrazí `Success`. **AAPS** je teď ve vašem telefonu nainstalovaná.

Stejný příkaz se používá pro každou další aktualizaci. [Stránky o Wear OS](../WearOS/WearOsSmartwatch.md) už používají ADB stejným způsobem k instalaci aplikace do hodinek.

Pokud nechcete používat kabel: na Androidu 11 a novějším umí totéž přes Wi-Fi **bezdrátové ladění** (také v **Možnostech vývojáře**), po jednorázovém spárování pomocí kódu zobrazeného na telefonu.

(android-developer-verification-web)=

### Možnost 2: Instalace z webové stránky (počítač, bez příkazové řádky)

Pokud příkazová řádka není nic pro vás, webová stránka umí přímo z prohlížeče přesně to samé co ADB. Protože s telefonem komunikuje stejným mechanismem jako ADB, má **stejnou výjimku z ověřování** – ale nic se nestahuje, nerozbaluje se žádná složka a nepíše se žádný příkaz.

Je to nejjednodušší cesta, pokud jste použili [sestavení v prohlížeči](#browser-build) a nikdy jste neotevřeli příkazovou řádku.

1. V telefonu zapněte **Ladění USB** (kroky 1 a 2 [metody ADB](#android-developer-verification-adb) výše – jednorázové nastavení).
1. V prohlížeči otevřete **[webový instalátor AAPS](#web-installer)**.
1. Připojte telefon USB kabelem a postupujte podle pokynů na stránce: připojte telefon, vyberte soubor APK a nainstalujte.

Tři věci, které byste měli vědět:

- Funguje jen v prohlížečích **Chrome, Edge nebo Opera**. Firefox a Safari s USB zařízeními komunikovat neumí.
- Připojení ADB k telefonu může v jednu chvíli používat jen jeden program, proto před připojením **zavřete Android Studio** (nebo cokoli jiného, co používá ADB).
- Webová stránka připojená tímto způsobem získá plnou kontrolu nad vaším telefonem. **Používejte jen adresu uvedenou výše** z dokumentace **AAPS** – nikdy ne stránku instalátoru nalezenou přes vyhledávač. Webový instalátor **AAPS** běží celý ve vašem prohlížeči: váš soubor APK se nikam nenahrává.

```{admonition} No computer? A second phone works too
:class: tip
Webový instalátor funguje i z **Chromu na jiném telefonu s Androidem** s kabelem USB-C na USB-C – rodič tak může nainstalovat **AAPS** do telefonu dítěte, i když doma není počítač.
```

(android-developer-verification-advanced-flow)=

### Možnost 3: „Pokročilý postup“ v telefonu (bez počítače)

Pro zkušené uživatele, kteří rozumí rizikům instalace neověřených aplikací, nabízí Google zadní vrátka nazvaná **pokročilý postup** (advanced flow). Google ho začal do telefonů zavádět v srpnu 2026, ještě před začátkem vyžadování ověřování, takže si ho můžete nastavit už teď. Je to jednorázové nastavení přímo v telefonu, jehož dokončení **trvá 24 hodin**:

1. Zapněte skryté možnosti vývojáře (viz krok 1 metody ADB výše) a pak otevřete **Nastavení** > **Možnosti vývojáře** > **Aplikace od neověřených vývojářů**.
1. Zapněte **Povolit aplikace od neověřených vývojářů**. Telefon si vyžádá zámek obrazovky, aby ověřil, že jste to vy.
1. Telefon se zeptá, zda vás někdo žádá o zapnutí tohoto nastavení, a vysvětlí, že banky, úřady ani policie by vás o to nikdy nežádaly. Přečtěte si varování a potvrďte, že na vás nikdo netlačí ani vás nenavádí (je to ochrana proti podvodníkům).
1. **Restartujte telefon.** Tím začne jednorázová **24hodinová čekací doba**.
1. Po 24 hodinách se vraťte do **Nastavení** > **Možnosti vývojáře** > **Aplikace od neověřených vývojářů** a dokončete nastavení.
1. Zvolte, zda chcete neověřené aplikace povolit na **7 dní**, nebo **natrvalo**. Pro **AAPS** zvolte **natrvalo**, jinak bude vaše další aktualizace po uplynutí 7 dní zablokována.

Po tomto nastavení funguje instalace i aktualizace APK aplikace **AAPS** jako dnes, jen s jedním varováním navíc, že aplikace pochází od neověřeného vývojáře – klepněte na **Přesto nainstalovat**.

Dobré vědět:

- **Možnosti vývojáře** můžete potom zase vypnout: pokročilý postup zůstane zapnutý. Google také aplikacím (např. bankovním aplikacím) nedává žádnou možnost zjistit, že je pokročilý postup zapnutý.
- Pokud pokročilý postup vypnete, instalace **i aktualizace** **AAPS** budou znovu zablokované (vaše nainstalovaná **AAPS** poběží dál). Na opětovné zapnutí máte 10 minut; potom začne 24hodinová čekací doba znovu.
- Změna času v telefonu čekací dobu nezkrátí a ADB ji nedokáže přeskočit.
- Google uvádí, že vaše volba se přenáší s vaším účtem Google i na další zařízení, takže nový telefon by neměl znamenat další 24hodinové čekání.
- Pokud v možnostech vývojáře nemůžete najít **Aplikace od neověřených vývojářů**, váš telefon tuto funkci ještě nedostal. Dodává ji systémová komponenta **Android Developer Verifier**, kterou Google postupně zavádí přes Obchod Play. Můžete to urychlit tím, že v Obchodě Play otevřete **Android Developer Verifier**.

```{note}
Google to popisuje jako první verzi a obrazovky i kroky může ještě změnit; tato část bude doplněna o snímky obrazovky, jakmile bude k dispozici konečná verze.
```

(android-developer-verification-limited-account)=

### Možnost 4: Registrace u Googlu (bezplatný účet pro omezenou distribuci)

Google nabízí **bezplatný** typ vývojářského účtu pro nadšence a osobní použití, nazvaný **účet pro omezenou distribuci** (limited distribution account), otevřený všem od srpna 2026:

- **Žádný občanský průkaz** a **žádný poplatek** (na rozdíl od placeného vývojářského účtu, který pro osobní používání **AAPS** není potřeba). Potřebujete ale účet Google s dvoufázovým ověřením, platební profil Google s vaším úředním jménem a adresou a kontaktní e-mailovou adresu.
- Název balíčku své aplikace zaregistrujete v konzoli Android Developer Console od Googlu a autorizujete telefony, do kterých ji lze nainstalovat, až **20 zařízení**, a to propojením telefonu s konzolí pomocí QR kódu nebo odkazu.
- Po registraci na autorizovaných telefonech znovu funguje běžná instalace (klepnutím na soubor APK), bez ADB a bez pokročilého postupu.
- Účet pro omezenou distribuci lze později převést na plný účet, ale ne naopak.

```{warning}
Google nevysvětlil, jak funguje registrace, když stejnou open-source aplikaci sestavuje mnoho lidí: každá vlastnoručně sestavená **AAPS** používá stejný název balíčku (`info.nightscout.androidaps`) s jiným podpisovým klíčem a časté dotazy Googlu uvádějí, že název balíčku, který už používají jiní, nelze jednoduše získat a vyžaduje další kontrolu. Výsledek takové kontroly není známý a placený vývojářský účet (25 $ a občanský průkaz) zde nepomůže: zaplacení odstraní jen limit 20 zařízení, ne kontrolu názvu balíčku.

Proto zatím nelze napsat podrobný návod krok za krokem. Tato část bude doplněna, jakmile bude registrace s **AAPS** vyzkoušena. Do té doby jsou spolehlivou alternativou ADB, webový instalátor a pokročilý postup popsané výše.
```

## Co se nemění

- Vlastní sestavení **AAPS** kterýmkoli ze tří [způsobů sestavení](BuildingAaps.md).
- Váš účet GitHub, váš sestavovací repozitář (AAPS Builder) nebo fork a vaše úložiště klíčů.
- Vaše nainstalovaná aplikace **AAPS**, vaše nastavení a vaše [cíle](CompletingTheObjectives.md).
- Telefony bez služeb Google a obecně [instalace pomocí ADB](#android-developer-verification-adb).

## Kde získat pomoc

1. **Přečtěte si** [časté dotazy Googlu k ověřování vývojářů](https://developer.android.com/developer-verification/guides/faq), pokud máte otázky k samotnému ověřování.
2. Pokud je instalace zablokována, **zeptejte se** na kanálu *#AAPS* na [Discordu](https://discord.gg/4fQUWHZ4Mw) nebo v jiném z [komunitních kanálů](../GettingHelp/WhereCanIGetHelp.md).
3. Když žádáte o pomoc, uveďte výrobce a model telefonu, verzi Androidu, vaši zemi a přesnou zprávu, která se zobrazí, když instalace selže.

```{toctree}
:hidden:

Webový instalátor AAPS <WebInstaller.md>
```
