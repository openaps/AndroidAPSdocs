# Sestavení aplikace AAPS pro hodinky Wear OS

Aplikace **AAPS** pro chytré hodinky s Wear OS (**Wear apk**, `aaps-wear-….apk`) je samostatný instalační soubor, oddělený od aplikace **AAPS** pro telefon. Potřebujete obě: aplikace v telefonu řídí smyčku, aplikace v hodinkách ukazuje její data a může jí posílat příkazy. Aplikace pro hodinky se instaluje z telefonu, viz [Nastavení AAPS na hodinkách s Wear OS](WearOsSmartwatch.md).

Obě aplikace spolu fungují jen tehdy, když k sobě patří:

- **Stejná verze AAPS** v telefonu i v hodinkách.
- **Stejné úložiště klíčů** použité k podpisu obou aplikací.

Nejjednodušší způsob, jak to zajistit, je sestavit obě aplikace **zároveň**, v jednom sestavení. Sestavení v prohlížeči to udělá za vás: každé sestavení vytvoří APK pro telefon i Wear apk najednou. V Android Studiu nebo z příkazové řádky sestavíte Wear apk jako druhý krok hned po APK pro telefon.

```{note}
Už používáte **AAPS** v telefonu, ale nemáte Wear apk ze stejného sestavení? Sestavte znovu obě aplikace se stejným úložištěm klíčů a přeinstalujte i aplikaci v telefonu. Wear apk sestavené o několik měsíců později nebo s jinou verzí Android Studia s aplikací v telefonu nejspíš nebude kompatibilní.
```

## Podporované verze Wear OS

**AAPS** běží na hodinkách s **Wear OS 3.0, 3.2 nebo 3.5** (Android 11, úroveň API 30) **nebo novějším** (Wear OS 4, 5 a 6). Hodinky s Wear OS 2 nejsou podporovány.

```{warning}
Ciferníky AAPS jsou k dispozici pro chytré hodinky s Wear OS s úrovní API 30 až 33 (Wear OS 3.0, 3.2, 3.5 a 4).<br>
Novější verze Wear OS ciferníky AAPS postupně omezují – viz [Změny ciferníků ve Wear OS](#wearos-watchface-changes) a [Omezení Wear OS 5](#BuildingAapsWearOs-WearOS5).
```

(building-aaps-wear-os-method)=

## Získání Wear apk podle vašeho způsobu sestavení

Postupujte podle části pro způsob, kterým [sestavujete AAPS](../SettingUpAaps/BuildingAaps.md).

(building-aaps-wear-os-browser)=

### Sestavení v prohlížeči (doporučeno)

**Nic dalšího není potřeba.** Každé sestavení v prohlížeči vytvoří ze stejného zdrojového kódu a se stejným úložištěm klíčů dva soubory:

- `aaps-….apk`: aplikace pro telefon.
- `aaps-wear-….apk`: aplikace pro hodinky.

Wear apk odpovídá [variantě](#browserbuild-variant), kterou jste pro sestavení vybrali: `fullRelease` dá aplikaci **AAPS Wear**, `aapsclientRelease` aplikaci **AAPSClient Wear**, `pumpcontrolRelease` aplikaci **PumpControl Wear**. Každá aplikace Wear komunikuje jen s odpovídající aplikací v telefonu.

Kde Wear apk najdete:

- **AAPS Builder**: na stránce sestavení sjeďte dolů k části **Artifacts** a stáhněte `aaps-wear-….apk` vedle aplikace pro telefon, jak je ukázáno v [Krok 6 – Nainstalujte aplikaci do telefonu](#aaps-builder-step6). Stáhněte ho do telefonu, na kterém běží **AAPS**, pokud aplikaci pro hodinky instalujete z telefonu (Wear Installer 2 nebo Easy Fire Tools), nebo do počítače, pokud používáte ADB.

  ![Artifacts s aplikacemi pro telefon a hodinky](../images/Building-the-App/CI/AapsBuilder52_Artifacts.png)

- **Fork s Diskem Google**: otevřete svůj Disk Google, složku `AAPS` a pak složku verze, kterou jste sestavili. Obsahuje APK pro telefon i Wear apk, viz [Krok 4 – Sestavte APK](#github-build-apk).

  ![Umístění na Disku Google](../images/update/CI/GitHubActions5.png)

Wear apk si zálohujte spolu s APK pro telefon. S **AAPS Builder** zůstávají soubory na stránce sestavení jen 14 dní.

Další krok: nainstalujte Wear apk do hodinek, viz [Nastavení AAPS na hodinkách s Wear OS](WearOsSmartwatch.md).

(building-aaps-wear-os-android-studio)=

### Android Studio

Wear apk se sestavuje stejně jako APK pro telefon, jako druhé podepsané sestavení. Udělejte to hned po APK pro telefon, se stejnou verzí Android Studia a se stejným úložištěm klíčů.

- Postupujte podle návodu [Sestavení v Android Studiu](../SettingUpAaps/ComputerBuild.md).
- Když se dostanete k [výběru modulu](#Building-APK-wearapk) v části „Sestavení podepsaného APK AAPS“, nezapomeňte vybrat **`AndroidAPS.wear`**.

![Modul Wear](../images/Building-the-App/wear_build1.png)

Vyberte „**fullRelease**“, abyste vytvořili soubor APK **AAPS** pro hodinky (Wear).

![Modul Wear](../images/Building-the-App/wear_build2.png)

Pokud chcete, můžete místo toho vybrat **"pumpcontrolRelease"** z drop-down menu, což vám umožní vzdáleně ovládat pumpu, ale bez možnosti spuštění smyčky.

Další krok: nainstalujte Wear apk do hodinek, viz [Nastavení AAPS na hodinkách s Wear OS](WearOsSmartwatch.md).

(building-aaps-wear-os-troubleshooting)=

#### Řešení problémů se sestavením v Android Studiu

Při sestavování plné aplikace **AAPS** (a vlastně každé podepsané aplikace) vytvoří Android Studio ve stejné složce soubor .json. To pak při pokusu sestavit další podepsanou aplikaci, například aplikaci **AAPS** pro hodinky, způsobí chybu [uncommitted changes](#troubleshooting_androidstudio-uncommitted-changes). Nejrychlejší způsob, jak to vyřešit, je přejít do složky, kde byla sestavena plná aplikace AAPS. Vaše složka je pravděpodobně na adrese:

`C:\Users\Your Name\AndroidStudioProjects\AndroidAPS\app\aapsclient\release.`

Buď odstraňte nebo přesuňte nepotřebný .json soubor z této složky. Potom zkuste znovu vytvořit **AAPS** wear aplikaci. Pokud to nepomůže, podrobnější [návod na řešení problémů](../GettingHelp/TroubleshootingAndroidStudio.md) vám pomůže najít konkrétní soubor, který problém způsobuje; může to být i váš soubor úložiště klíčů.

(building-aaps-wear-os-cli)=

### Příkazová řádka

Postupujte podle stránky [Návod na sestavení z příkazové řádky](../SettingUpAaps/CLIBuild.md) a zopakujte kroky kompilace a podpisu pro modul `wear` se stejným úložištěm klíčů:

```sh
./gradlew :wear:assembleFullRelease
```

Nepodepsané Wear apk se uloží do `wear/build/outputs/apk/full/release/`. Podepište ho pomocí `apksigner` stejně jako APK pro telefon a pak ho nainstalujte do hodinek, viz [Nastavení AAPS na hodinkách s Wear OS](WearOsSmartwatch.md).
