(github-fork)=

# Zostavenie v prehliadači – Krok 1: Vytvorte si fork na GitHube

```{note}
Toto je **krok 1** návodu [Zostavenie v prehliadači](BrowserBuild.md).
```

Svoj osobný kľúč Android Java a údaje k Disku Google budete musieť tajne uložiť na GitHube (ako na to, vysvetlíme neskôr).

Keďže to nie je možné urobiť vo verejnom repozitári AndroidAPS, musíte si vytvoriť vlastnú kópiu zdrojového kódu (tzv. fork).

## Účet na GitHube

Ak ho ešte nemáte, musíte si [vytvoriť účet na GitHube](https://github.com/signup).  
Zaregistrovať sa môžete pomocou e-mailu alebo pomocou účtu Google. Postupujte podľa krokov registrácie a overenia.

Keď máte účet, [prihláste sa do GitHubu](https://github.com/login).

## Vytvorte fork AndroidAPS

Otvorte oficiálny repozitár AndroidAPS pomocou [tohto odkazu](https://github.com/nightscout/AndroidAPS).

Ťuknite na ikonu fork. Týmto sa vytvorí kópia vo vašom vlastnom účte.

![fork_aaps](../images/Building-the-App/CI/ForkAAPS.png)

Na ďalšej obrazovke sa posuňte nadol a ťuknite na **Create Fork**.

![fork_aaps_confirm](../images/Building-the-App/CI/ForkAAPS2.png)

*Poznámka: ak budete chcieť zostavovať vývojárske verzie alebo vlastné úpravy, môžete **zrušiť označenie** „Copy the master branch only“.*

![fork_aaps_main](../images/Building-the-App/CI/ForkAAPS3.png)

```{note}
Nemôžete vytvoriť fork a vidíte toto?</br></br>
**`No available destinations to fork this repository.`**</br></br>
![Fork už existuje](../images/Building-the-App/CI/ForkAAPS3b.png)</br></br>
Znamená to, že už máte existujúci fork AndroidAPS.</br>
Uistite sa, že je aktuálny, a pokračujte prípravnými krokmi.
```

```{warning}
**Nikdy neodstraňujte svoj fork bez toho, aby ste si zálohovali svoje secrets!**
```

GitHub teraz zobrazuje vašu vlastnú kópiu AndroidAPS. Nechajte túto kartu v prehliadači otvorenú.

![forked_aaps](../images/Building-the-App/CI/ForkAAPS4.png)

----

**Ďalej: [Krok 2 – Vytvorte si podpisové úložisko kľúčov](BrowserBuildKeystore.md) →**
