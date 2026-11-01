# Zostavenie aplikácie AAPS pre Wear OS

Aplikácia **AAPS** pre inteligentné hodinky s Wear OS (**Wear apk**, `aaps-wear-….apk`) je samostatný inštalačný súbor, oddelený od aplikácie **AAPS** pre telefón. Potrebujete obe: aplikácia v telefóne riadi okruh, aplikácia v hodinkách zobrazuje jeho dáta a môže mu posielať príkazy. Aplikácia pre hodinky sa inštaluje z telefónu, pozrite [Nastavenie AAPS na hodinkách s Wear OS](WearOsSmartwatch.md).

Obe aplikácie spolu fungujú iba vtedy, keď k sebe pasujú:

- **Rovnaká verzia AAPS** v telefóne aj v hodinkách.
- **Rovnaké úložisko kľúčov** použité na podpísanie oboch aplikácií.

Najjednoduchšie to zaručíte tak, že obe aplikácie zostavíte **naraz**, v rovnakom zostavení. Zostavenie v prehliadači to urobí za vás: každé zostavenie vytvorí apk pre telefón aj Wear apk spolu. V Android Studiu alebo z príkazového riadku zostavíte Wear apk ako druhý krok hneď po apk pre telefón.

```{note}
Už používate **AAPS** v telefóne, ale nemáte Wear apk z rovnakého zostavenia? Zostavte obe aplikácie znova s rovnakým úložiskom kľúčov a preinštalujte aj aplikáciu v telefóne. Wear apk zostavený o niekoľko mesiacov neskôr alebo v inej verzii Android Studia pravdepodobne nebude s aplikáciou v telefóne kompatibilný.
```

## Podporované verzie Wear OS

**AAPS** funguje na hodinkách s **Wear OS 3.0, 3.2 alebo 3.5** (Android 11, úroveň API 30) **alebo novším** (Wear OS 4, 5 a 6). Hodinky s Wear OS 2 nie sú podporované.

```{warning}
Ciferníky AAPS sú dostupné pre inteligentné hodinky s Wear OS s úrovňou API 30 až 33 (Wear OS 3.0, 3.2, 3.5 a 4).<br>
Novšie verzie Wear OS ciferníky AAPS postupne pokazia – pozrite [Zmeny ciferníkov vo Wear OS](#wearos-watchface-changes) a [obmedzenia Wear OS 5](#BuildingAapsWearOs-WearOS5).
```

(building-aaps-wear-os-method)=

## Ako získať Wear apk podľa spôsobu zostavenia

Postupujte podľa časti pre spôsob, ktorým [zostavujete AAPS](../SettingUpAaps/BuildingAaps.md).

(building-aaps-wear-os-browser)=

### Zostavenie v prehliadači (odporúčané)

**Nemusíte robiť nič navyše.** Každé zostavenie v prehliadači vytvorí dva súbory z rovnakého zdrojového kódu a s rovnakým úložiskom kľúčov:

- `aaps-….apk`: aplikácia pre telefón.
- `aaps-wear-….apk`: aplikácia pre hodinky.

Wear apk zodpovedá [variantu](#browserbuild-variant), ktorý ste pre zostavenie vybrali: `fullRelease` dá aplikáciu **AAPS Wear**, `aapsclientRelease` aplikáciu **AAPSClient Wear** a `pumpcontrolRelease` aplikáciu **PumpControl Wear**. Každá aplikácia Wear komunikuje iba so svojou zodpovedajúcou aplikáciou v telefóne.

Kde nájdete Wear apk:

- **AAPS Builder**: on the build page, scroll down to **Artifacts** and download `aaps-wear-….apk` next to the phone app, as shown in [Step 5 – Install the app on your phone](#aaps-builder-step5). Stiahnite ho do telefónu s **AAPS**, ak aplikáciu do hodiniek inštalujete z telefónu (Wear Installer 2 alebo Easy Fire Tools), alebo do počítača, ak používate ADB.

  ![Artifacts s aplikáciou pre telefón a pre hodinky](../images/Building-the-App/CI/AapsBuilder52_Artifacts.png)

- **Fork s Diskom Google**: otvorte svoj Disk Google, priečinok `AAPS` a potom priečinok verzie, ktorú ste zostavili. Obsahuje apk pre telefón aj Wear apk, pozrite [Krok 4 – Zostavte APK](#github-build-apk).

  ![Umiestnenie na Disku Google](../images/update/CI/GitHubActions5.png)

Wear apk si uchovávajte v zálohách spolu s apk pre telefón. Pri **AAPS Builder** zostávajú súbory na stránke zostavenia iba 14 dní.

Ďalej: nainštalujte Wear apk do hodiniek, pozrite [Nastavenie AAPS na hodinkách s Wear OS](WearOsSmartwatch.md).

(building-aaps-wear-os-android-studio)=

### Android Studio

Wear apk sa zostavuje rovnako ako apk pre telefón, ako druhé podpísané zostavenie. Urobte to hneď po apk pre telefón, v rovnakej verzii Android Studia a s rovnakým úložiskom kľúčov.

- Postupujte podľa návodu [Zostavenie v Android Studiu](../SettingUpAaps/ComputerBuild.md).
- Keď sa v časti „Zostavte podpísané apk AAPS“ dostanete k [výberu modulu](#Building-APK-wearapk), vyberte **`AndroidAPS.wear`**.

![Modul Wear](../images/Building-the-App/wear_build1.png)

Vyberte „**fullRelease**“, aby sa vytvoril súbor apk **AAPS** Wear.

![Modul Wear](../images/Building-the-App/wear_build2.png)

Ak chcete, môžete v rozbaľovacej ponuke namiesto toho zostaviť **„pumpcontrolRelease“**, ktorý vám umožní iba vzdialene ovládať pumpu, ale bez okruhu.

Ďalej: nainštalujte Wear apk do hodiniek, pozrite [Nastavenie AAPS na hodinkách s Wear OS](WearOsSmartwatch.md).

(building-aaps-wear-os-troubleshooting)=

#### Riešenie problémov so zostavením v Android Studiu

Pri zostavovaní plnej aplikácie **AAPS** (a v skutočnosti akejkoľvek podpísanej aplikácie) Android Studio vytvorí v rovnakom priečinku súbor .json. To potom spôsobí chyby s [necommitnutými zmenami](#troubleshooting_androidstudio-uncommitted-changes), keď sa pokúsite zostaviť ďalšiu podpísanú aplikáciu, napríklad aplikáciu **AAPS** Wear. Najrýchlejšie to vyriešite tak, že prejdete do priečinka, v ktorom bola zostavená plná aplikácia AAPS. Váš priečinok je pravdepodobne niečo ako:

`C:\Users\Your Name\AndroidStudioProjects\AndroidAPS\app\aapsclient\release.`

Nepotrebný súbor .json buď odstráňte, alebo ho presuňte z priečinka. Potom skúste aplikáciu **AAPS** Wear zostaviť znova. Ak to nepomôže, podrobnejší [návod na riešenie problémov](../GettingHelp/TroubleshootingAndroidStudio.md) vám pomôže nájsť konkrétny súbor, ktorý problém spôsobuje. Môže to byť aj váš súbor úložiska kľúčov.

(building-aaps-wear-os-cli)=

### Príkazový riadok

Postupujte podľa časti [Návod na zostavenie z príkazového riadku](../SettingUpAaps/CLIBuild.md) a zopakujte kroky kompilácie a podpísania pre modul `wear` s rovnakým úložiskom kľúčov:

```sh
./gradlew :wear:assembleFullRelease
```

Nepodpísaný Wear apk sa uloží do `wear/build/outputs/apk/full/release/`. Podpíšte ho pomocou `apksigner` presne ako apk pre telefón a potom ho nainštalujte do hodiniek, pozrite [Nastavenie AAPS na hodinkách s Wear OS](WearOsSmartwatch.md).
