(aaps-ci-option2)=

# Možnost 2 – Nahrání stávajícího úložiště klíčů

```{note}
Toto je součást [kroku 2 – Vytvořte si podpisové úložiště klíčů](BrowserBuildKeystore.md) v rámci [sestavení v prohlížeči](BrowserBuild.md). Ujistěte se, že jste si přečetli [rozhodnutí mezi možností 1 a možností 2](#aaps-ci-preparation) a stáhli přípravný soubor.
```

Možnost 2 znovu použije soubor JKS, který jste už vytvořili při dřívějším sestavení AAPS na počítači v Android Studiu. Je vhodná pro uživatele, kteří už soubor JKS mají a znají jeho heslo a alias.

Pro `KEYSTORE_PASSWORD`, `KEY_ALIAS` a `KEY_PASSWORD` zadejte na GitHubu své skutečné heslo a alias – ty z Android Studia, níže najdete, kde jste je použili.

```{warning}
**Hesla se speciálními znaky.** Zadejte hesla přesně tak, jak jsou. Nepřidávejte zpětné lomítko ani jiný escape znak: workflow sestavení zachová každý znak beze změny a přidané zpětné lomítko se stane součástí hesla.

Pokud sestavení i tak selže v kroku podepisování a vaše heslo obsahuje `$`, zpětný apostrof (backtick), `"` nebo `\`, je soubor workflow ve vašem forku zastaralý. [Synchronizujte svůj fork](#Update-to-new-version-update-your-repo) s nejnovější větví dev a spusťte sestavení znovu. Viz [Řešení problémů se sestavením v prohlížeči](#aaps-ci-password-special-characters).
```

```{admonition} KEY + PASSWORDS
:class: dropdown

![Zapamatování hesel](../images/Building-the-App/044_RememberPwd.png)
```

## Vyberte své zařízení

```{tip}
Sestavujete z **telefonu s Androidem**? Použijte místo toho [AAPS Builder](BrowserBuildAapsBuilder.md): nepotřebuje přípravný soubor.
```

Postupujte podle stránky pro zařízení, ze kterého sestavujete:

- **[Počítač](BrowserBuildO2Computer.md)** – Windows, Mac nebo Linux.

```{tip}
Zařízení můžete kdykoli změnit – stačí otevřít odpovídající stránku.
```

```{toctree}
:hidden:

Počítač <BrowserBuildO2Computer.md>
```
