(browser-build)=

# Zostavenie v prehliadači

Zostavenie AAPS pomocou GitHub Actions.

**Minimálna podporovaná verzia AAPS je 3.3.2.1.**

## Zostavte si aplikáciu sami namiesto stiahnutia

**Aplikácia AAPS (súbor APK) nie je k dispozícii na stiahnutie z dôvodu predpisov týkajúcich sa zdravotníckych pomôcok. Zostaviť si aplikáciu pre vlastné použitie je legálne, ale nesmiete jej kópiu dávať iným!**

Podrobnosti nájdete na stránke [Najčastejšie otázky používateľov APS](../UsefulLinks/FAQ.md).

(Building-APK-without-a-computer)=

## Vyberte spôsob zostavenia

Vyberte spôsob podľa zariadenia, z ktorého zostavujete:

### Na telefóne s Androidom: AAPS Builder (odporúčané)

Stránka nastavenia vás prevedie vytvorením vlastného súkromného repozitára na zostavovanie na GitHube. Nič neinštalujete, nepotrebujete prípravný súbor a každé zostavenie spúšťate sami. Aplikáciu stiahnete priamo z GitHubu. Disk Google je voliteľný.

Funguje to aj z prehliadača v počítači.

**→ [Zostavenie v prehliadači pomocou AAPS Builder](BrowserBuildAapsBuilder.md)**

### Na počítači alebo na iPhone / iPade: fork a prípravný súbor

Na GitHube si vytvoríte kópiu (fork) zdrojového kódu AAPS, pomocou prípravného súboru vytvoríte úložisko kľúčov a zostavená aplikácia sa uloží na váš Disk Google. Postupujte podľa štyroch krokov nižšie.

```{note}
**Už zostavujete pomocou forku?** Ďalej ho aktualizujte podľa návodu [Aktualizácia v prehliadači](../Maintenance/UpdateBrowserBuild.md) alebo prejdite na AAPS Builder. Ak chcete prejsť, najprv si zo svojho forku získajte kópiu úložiska kľúčov: pozrite si časť [Prechod z predchádzajúceho zostavenia v prehliadači](#aaps-builder-from-fork).
```

V prehliadači budete musieť používať viacero kariet a prepínať medzi nimi. Príklad v Chrome:

![fork_aaps](../images/Building-the-App/CI/BrowserBuildTabs.png)

```{note}
Budete musieť prepínať medzi kartami: na začiatku majte všetky karty zatvorené, aby ste sa pri prepínaní nestratili.
```

#### Čo budete potrebovať

- **Účet Google**, aby sa zostavená aplikácia mohla uložiť na váš Disk Google.
- **Účet na GitHube** (zadarmo) – vytvoríte si ho v kroku 1.
- **Webový prehliadač**, v ktorom môžete mať otvorených naraz viac kariet (nižšie predpokladáme Chrome).
- Malý **pomocný nástroj na spustenie prípravného súboru**. Ktorý potrebujete, závisí od zariadenia, z ktorého zostavujete – teraz nič neinštalujte, krok 2 vás pre vaše zariadenie prevedie celým postupom:
  - **Počítač (Windows / Mac / Linux):** Simple Web Server.
  - **iPhone / iPad:** žiadna ďalšia aplikácia – použijete vstavanú aplikáciu Súbory a prehliadač.

#### Kroky

Zostavenie v prehliadači je séria rozhodnutí. Postupujte podľa týchto krokov v uvedenom poradí:

1. **[Vytvorte si fork na GitHube](BrowserBuildFork.md)** – vytvoríte si vlastnú kópiu zdrojového kódu AAPS.
2. **[Vytvorte si podpisové úložisko kľúčov](BrowserBuildKeystore.md)** – kľúčové rozhodnutie: vygenerujete nové úložisko kľúčov (možnosť 1) alebo nahráte existujúce (možnosť 2) a potom postupujete podľa stránky pre vaše zariadenie.
3. **[Autorizujte Disk Google](BrowserBuildGoogleDrive.md)** – povolíte GitHubu ukladať zostavenú aplikáciu na váš Disk Google.
4. **[Zostavte APK](BrowserBuildAPK.md)** – spustíte workflow v GitHub Actions a vyberiete verziu a variant.

Ak narazíte na problémy, pozrite si stránku **[Zostavenie v prehliadači: riešenie problémov](../GettingHelp/BrowserBuildTroubleshooting.md)**. Voliteľné operácie s forkom nájdete v častiach [Export úložiska kľúčov](#ci-keystore-export) a [Cherry-pick commitu](#github-cherry-pick).

----

**Začnite [krokom 1 – Vytvorte si fork na GitHube](BrowserBuildFork.md) →**

```{toctree}
:hidden:

AAPS Builder <BrowserBuildAapsBuilder.md>
Krok 1: Vytvorte si fork <BrowserBuildFork.md>
Krok 2: Vytvorte si úložisko kľúčov <BrowserBuildKeystore.md>
Krok 3: Autorizujte Disk Google <BrowserBuildGoogleDrive.md>
Krok 4: Zostavte APK <BrowserBuildAPK.md>
```
