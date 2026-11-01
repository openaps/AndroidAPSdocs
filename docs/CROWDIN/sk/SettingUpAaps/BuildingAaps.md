# Zostavenie AAPS

## Zostavte si aplikáciu sami namiesto stiahnutia

**Aplikácia AAPS (súbor APK) nie je k dispozícii na stiahnutie z dôvodu predpisov týkajúcich sa zdravotníckych pomôcok. Zostaviť si aplikáciu pre vlastné použitie je legálne, ale nesmiete jej kópiu dávať iným!**

Podrobnosti nájdete na stránke [Najčastejšie otázky používateľov APS](../UsefulLinks/FAQ.md).

---

Aplikáciu AAPS môžete zostaviť tromi spôsobmi:

### Zostavenie v prehliadači (odporúčané)

You can build the app in a web browser using GitHub Actions. Z telefónu s Androidom vás celým postupom prevedie stránka nastavenia [AAPS Builder](#aaps-builder) a každé zostavenie spúšťate sami. Z počítača alebo z iPhonu môžete zostavovať aj pomocou forku a aplikáciu uložiť na svoj Disk Google.

**[Postupujte podľa týchto pokynov.](./BrowserBuild.md)**

----

### Zostavenie v Android Studiu

Aplikáciu môžete zostaviť v počítači pomocou Android Studia. Kedysi to bol jediný spôsob zostavenia, dnes Android Studio používajú najmä vývojári, ktorí chcú meniť kód.

**[Postupujte podľa týchto pokynov.](./ComputerBuild.md)**

----

### Zostavenie z príkazového riadku

Tento spôsob je určený pre tých, ktorí chcú AAPS zostaviť lokálne z príkazového riadku bez inštalácie Android Studia.

**[Postupujte podľa týchto pokynov.](./CLIBuild.md)**

----

(building-aaps-troubleshooting)=
## Ak zostavenie zlyhá

Každý spôsob zostavenia má vlastnú časť o riešení problémov:

* **AAPS Builder**: [Riešenie problémov s AAPS Builderom](#aaps-builder-troubleshooting)
* **Zostavenie v prehliadači** z počítača alebo z iPhonu: [Zostavenie v prehliadači: riešenie problémov](#aaps-ci-troubleshooting)
* **Android Studio**: [Riešenie problémov s Android Studiom](../GettingHelp/TroubleshootingAndroidStudio.md)

Stratili ste úložisko kľúčov alebo jeho heslo? Pozrite [Preinštalovanie AAPS s novým úložiskom kľúčov](#reinstall-aaps).

Ak je aplikácia zostavená, ale nedá sa nainštalovať do telefónu, pozrite si stránku [Prenos a inštalácia AAPS](TransferringAndInstallingAaps.md).

Ak tu váš problém nie je, pozrite si stránku [Kde získať pomoc](../GettingHelp/WhereCanIGetHelp.md).
