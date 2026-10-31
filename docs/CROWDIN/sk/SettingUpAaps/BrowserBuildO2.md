(aaps-ci-option2)=

# Možnosť 2 – Nahrajte existujúce úložisko kľúčov

```{note}
Táto stránka je súčasťou časti [Krok 2 – Vytvorte si podpisové úložisko kľúčov](BrowserBuildKeystore.md) návodu [Zostavenie v prehliadači](BrowserBuild.md). Uistite sa, že ste si prečítali [rozhodnutie medzi možnosťou 1 a možnosťou 2](#aaps-ci-preparation) a stiahli prípravný súbor.
```

Možnosť 2 znova použije súbor JKS, ktorý ste už vytvorili pri predchádzajúcom zostavení AAPS v počítači v Android Studiu. Je vhodná pre používateľov, ktorí už majú súbor JKS a poznajú jeho heslo a alias.

Pre `KEYSTORE_PASSWORD`, `KEY_ALIAS` a `KEY_PASSWORD` zadajte na GitHube svoje skutočné heslo a alias – tie z Android Studia; kde ste ich použili, nájdete nižšie.

```{warning}
**Heslá so špeciálnymi znakmi.** Heslá zadajte presne tak, ako sú. Nepridávajte spätnú lomku ani žiadny iný únikový znak: workflow zostavenia zachová každý znak a pridaná spätná lomka sa stane súčasťou hesla.

Ak zostavenie stále zlyhá v kroku podpisovania a vaše heslo obsahuje `$`, spätný apostrof (backtick), `"` alebo `\`, súbor workflow vo vašom forku je zastaraný. [Synchronizujte svoj fork](#Update-to-new-version-update-your-repo) s najnovšou vetvou dev a zostavenie spustite znova. Pozrite si stránku [Zostavenie v prehliadači: riešenie problémov](#aaps-ci-password-special-characters).
```

```{admonition} KEY + PASSWORDS
:class: dropdown

![Zapamätanie hesiel](../images/Building-the-App/044_RememberPwd.png)
```

## Vyberte svoje zariadenie

```{tip}
Zostavujete z **telefónu s Androidom**? Použite radšej [AAPS Builder](BrowserBuildAapsBuilder.md): nepotrebuje prípravný súbor.
```

Postupujte podľa stránky pre zariadenie, z ktorého zostavujete:

- **[Počítač](BrowserBuildO2Computer.md)** – Windows, Mac alebo Linux.

```{tip}
Zariadenie môžete kedykoľvek zmeniť – stačí otvoriť príslušnú stránku.
```

```{toctree}
:hidden:

Počítač <BrowserBuildO2Computer.md>
```
