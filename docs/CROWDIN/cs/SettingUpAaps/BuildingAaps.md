# Sestavení AAPS

## Sestavte si aplikaci sami, místo stažení

**Aplikace AAPS (soubor apk) není k dispozici ke stažení kvůli předpisům pro zdravotnické prostředky. Sestavit si aplikaci pro vlastní použití je legální, ale nesmíte dávat kopii jiným!**

Podrobnosti najdete na stránce [Nejčastější otázky uživatelů APS](../UsefulLinks/FAQ.md).

---

Aplikaci AAPS lze sestavit třemi způsoby:

### Sestavení v prohlížeči (doporučeno)

Aplikaci můžete sestavit ve svém chytrém telefonu pomocí GitHub Actions. Na telefonu s Androidem vás celým postupem provede stránka nastavení [AAPS Builder](#aaps-builder) a každé sestavení spouštíte sami. Z počítače nebo iPhonu můžete také sestavit aplikaci s forkem a uložit ji na svůj Disk Google.

**[Postupujte podle tohoto návodu.](./BrowserBuild.md)**

----

### Sestavení v Android Studiu

Aplikaci můžete sestavit na počítači pomocí Android Studia. Dříve to byla jediná možnost sestavení, dnes Android Studio používají hlavně vývojáři, kteří chtějí upravovat kód.

**[Postupujte podle tohoto návodu.](./ComputerBuild.md)**

----

### Sestavení z příkazové řádky

Tato možnost je pro ty, kdo chtějí sestavit AAPS lokálně z příkazové řádky bez instalace Android Studia.

**[Postupujte podle tohoto návodu.](./CLIBuild.md)**

----

(building-aaps-troubleshooting)=
## Pokud sestavení selže

Každý způsob sestavení má vlastní část o řešení problémů:

* **AAPS Builder**: [Řešení problémů s AAPS Builder](#aaps-builder-troubleshooting)
* **Sestavení v prohlížeči** z počítače nebo iPhonu: [Řešení problémů se sestavením v prohlížeči](#aaps-ci-troubleshooting)
* **Android Studio**: [Řešení problémů s Android Studiem](../GettingHelp/TroubleshootingAndroidStudio.md)

Ztratili jste úložiště klíčů nebo jeho heslo? Viz [Přeinstalace AAPS s novým úložištěm klíčů](#reinstall-aaps).

Pokud je aplikace sestavená, ale v telefonu se nenainstaluje, viz [Přenos a instalace AAPS](TransferringAndInstallingAaps.md).

Pokud váš problém v seznamu není, viz [Kde mohu získat pomoc](../GettingHelp/WhereCanIGetHelp.md).
