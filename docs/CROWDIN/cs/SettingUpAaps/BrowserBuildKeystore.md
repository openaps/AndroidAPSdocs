(aaps-ci-preparation)=

# Sestavení v prohlížeči – Krok 2: Vytvořte si podpisové úložiště klíčů

```{note}
Toto je **krok 2** návodu [Sestavení v prohlížeči](BrowserBuild.md). Nejprve dokončete [Krok 1 – Vytvořte si fork na GitHubu](BrowserBuildFork.md).
```

AAPS must be signed with private keys stored in a **Java KeyStore (JKS)**. Toto je nejdůležitější rozhodnutí celého postupu, protože určuje, zda budete moci AAPS později **aktualizovat** bez přeinstalace.

```{note}
V dalších krocích uložíte soukromé údaje (své úložiště klíčů a později přístup k Disku Google) na GitHub jako **secrety**. Secret je jednoduše zašifrovaná hodnota, kterou může číst jen vaše vlastní sestavení – nikdo jiný ji nevidí, ani lidé, kteří se dívají na váš fork. Díky tomu vaše sestavení zůstává jen vaše.
```

## Zvolte postup pro úložiště klíčů

Přečtěte si obě možnosti a vyberte tu, která odpovídá vaší situaci.

### Možnost 1 – Vytvoření nového úložiště klíčů (noví uživatelé)

Tuto možnost zvolte, pokud platí **cokoli** z tohoto:

- Sestavujete AAPS **poprvé**.
- Nemáte úložiště klíčů z dřívějšího sestavení v Android Studiu (na počítači).
- Zapomněli jste heslo nebo alias svého úložiště klíčů.

```{warning}
Sestavení AAPS s **Možností 1** vytvoří úplně nové úložiště klíčů, takže **nebudete moci aktualizovat své stávající AAPS** bez přeinstalace. Pro přechod na toto nové sestavení musíte exportovat nastavení, odinstalovat staré AAPS, nainstalovat nové a nastavení znovu importovat. Postupujte podle kroků v části [Přeinstalace AAPS s novým úložištěm klíčů](#reinstall-aaps).
```

**→ [Pokračovat Možností 1 – Vytvoření nového úložiště klíčů](BrowserBuildO1.md)**

### Možnost 2 – Nahrání stávajícího úložiště klíčů (stávající / dřívější uživatelé)

Tuto možnost zvolte, pokud **už máte** úložiště klíčů `.jks`, které jste použili při dřívějším sestavení AAPS na počítači v Android Studiu, **a zároveň** znáte jeho heslo a alias (obvykle `key0`).

Díky tomu půjde vaše současná instalace AAPS dál aktualizovat: budoucí aktualizace použijí stejné úložiště klíčů.

**→ [Pokračovat Možností 2 – Nahrání stávajícího úložiště klíčů](BrowserBuildO2.md)**

----

```{note}
Na další stránce vyberete své zařízení (počítač nebo iPhone). Stránka pro každé zařízení vás pak provede stažením a otevřením přípravného souboru správným způsobem pro dané zařízení a vytvořením úložiště klíčů. Sestavená aplikace AAPS se uloží na váš Disk Google.
```

**Další: zvolte [Možnost 1](BrowserBuildO1.md) nebo [Možnost 2](BrowserBuildO2.md) výše a potom postupujte podle stránky pro vaše zařízení.**

----

(ci-keystore-export)=

## Export úložiště klíčů (volitelné)

Pokud chcete exportovat uložené úložiště klíčů, použijte tento postup.

Tento skript exportuje dříve nastavené údaje úložiště klíčů (z Možnosti 1 nebo Možnosti 2) jako ZIP soubor chráněný heslem do složky `/AAPS/KeyStore` na vašem Disku Google.

```{warning}
Než tento způsob exportu použijete, ujistěte se, že máte dokončené nastavení úložiště klíčů i Disku Google.
```

### Kroky:

1. **Přidejte secret s heslem k ZIP:**
   - Ve svém repozitáři otevřete **Settings** → **Secrets and variables** → **Actions**
   - Klikněte na **New repository secret**
   - Do pole **Name** zadejte: `ZIP_PASSWORD`
   - Do pole **Secret** zadejte vlastní heslo pro zašifrování ZIP souboru
   - Pro heslo používejte jen anglická písmena a číslice (žádné speciální symboly)
   - Klikněte na **Add secret**

   ![aaps_ci_zip_password.png](../images/Building-the-App/CI/aaps_ci_zip_password.png)

2. **Spusťte exportní workflow:**
   - Ve svém repozitáři otevřete kartu **Actions**
   - Select **CI Keystore Export**
   - Klikněte na **Run workflow**
   - Exportovaný ZIP soubor s úložištěm klíčů se uloží na váš Disk Google

   ![aaps_ci_keystore_export.png](../images/Building-the-App/CI/aaps_ci_keystore_export.png)

   ![aaps_ci_keystore_export_run.png](../images/Building-the-App/CI/aaps_ci_keystore_export_run.png)

```{toctree}
:hidden:

Možnost 1 – Vytvoření nového úložiště klíčů <BrowserBuildO1.md>
Možnost 2 – Nahrání stávajícího úložiště klíčů <BrowserBuildO2.md>
```
