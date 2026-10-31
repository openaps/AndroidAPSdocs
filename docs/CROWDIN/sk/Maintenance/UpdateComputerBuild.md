# Aktualizácia v Android Studiu

## Zostavte si aplikáciu sami namiesto stiahnutia

**AAPS** nie je možné stiahnuť kvôli predpisom pre zdravotnícke pomôcky. Zostaviť si aplikáciu pre vlastné použitie je legálne, ale nesmiete jej kópiu dávať iným! Podrobnosti nájdete na stránke [Najčastejšie otázky používateľov APS](../UsefulLinks/FAQ.md).

```{note}
Ak chcete zostaviť **AAPS** na novom počítači: skopírujte záložný súbor úložiska kľúčov do nového počítača. Potom namiesto tohto návodu postupujte podľa [postupu prvého zostavenia **AAPS**](../SettingUpAaps/BuildingAaps.md). Jediný rozdiel je v tom, že namiesto vytvorenia nového úložiska kľúčov môžete vybrať to, ktoré ste skopírovali do nového počítača.
```

## Prehľad aktualizácie na novú verziu AAPS v Android Studiu

```{contents} Steps for updating to a new version of AAPS
:depth: 1
:local: true
```

Ak máte problémy, pozrite si samostatnú stránku [Riešenie problémov s Android Studiom](../GettingHelp/TroubleshootingAndroidStudio.md).

### Exportujte svoje nastavenia

Exportujte nastavenia z existujúcej verzie **AAPS** vo vašom telefóne. Možno ich nebudete potrebovať, ale opatrnosti nikdy nie je dosť.

Ak si nepamätáte, ako na to, pozrite si stránku [Vytváranie a obnova záloh](ExportImportSettings.md).

### Skontrolujte verziu Android Studia

Minimálna požadovaná verzia je uvedená v [návode na zostavenie](#Building-APK-recommended-specification-of-computer-for-building-apk-file). Ak máte staršiu verziu, [najprv aktualizujte Android Studio](#Building-APK-install-android-studio)!

(Update-to-new-version-update-your-local-copy)=
### Aktualizujte svoju lokálnu kópiu

* Otvorte svoj existujúci projekt AAPS v Android Studiu. Možno budete musieť vybrať svoj projekt. (Dvakrát) kliknite na projekt AAPS.

  ![Android Studio – výber projektu](../images/update/01_ProjectSelection.png)

* Na paneli ponuky Android Studia vyberte Git -> Fetch

   ![Ponuka Android Studia – Git – Fetch](../images/update/02_GitFetch.png)

* V pravom dolnom rohu sa zobrazí správa, že Fetch prebehol úspešne.

   ![Ponuka Android Studia – Git – Fetch úspešný](../images/update/03_GitFetchSuccessful.png)

* Teraz na paneli ponuky vyberte Git -> Pull

   ![Ponuka Android Studia – Git – Pull](../images/update/04_GitPull.png)

* Všetky možnosti nechajte tak, ako sú (origin/master), a vyberte Pull

   ![Android Studio – Git – dialóg Pull](../images/update/05_GitPullOptions.png)

* Počkajte, kým prebieha sťahovanie. Uvidíte to ako informáciu na spodnom paneli. Po dokončení sa zobrazí správa o úspechu.

  ```{note}
  Aktualizované súbory sa môžu líšiť! This is not an indication of a problem.
  ```

   ![Android Studio – Pull úspešný](../images/update/06_GitPullSuccess.png)

* Spustí sa Gradle Sync, ktorý stiahne niektoré závislosti. Počkajte, kým sa dokončí.

  ![Android Studio – Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

### Skontrolujte verziu JVM

Táto kontrola je vhodná najmä vtedy, ak ste už na tom istom počítači zostavili predchádzajúcu verziu **AAPS**.

V [návode na zostavenie](#Building-APK-recommended-specification-of-computer-for-building-apk-file) si overte požadovanú verziu JVM pre verziu **AAPS**, ktorú teraz zostavujete. Potom postupujte podľa krokov v časti [Incompatible Gradle JVM](#incompatible-gradle-jvm) (nekompatibilná JVM pre Gradle), aby ste sa uistili, že používate správnu verziu.

(Update-to-new-version-build-the-signed-apk)=
### Zostavte podpísané APK

Váš zdrojový kód je teraz aktuálna vydaná verzia a všetky predpoklady sú skontrolované. Teraz je čas zostaviť podpísaný APK podľa popisu v [časti o zostavení podpísaného APK](#Building-APK-generate-signed-apk).

(Update-to-new-version-transfer-and-install)=

### Preneste a nainštalujte APK
APK musíte preniesť do telefónu, aby ste ho mohli nainštalovať.

```{note}
Ak ste zostavenie dokončili s rovnakým existujúcim úložiskom kľúčov v Android Studiu, nemusíte existujúcu aplikáciu v telefóne odstraňovať. Pri inštalácii APK postupujte podľa pokynov na inštaláciu aktualizácií.
V iných prípadoch, napríklad keď ste si pre podpísaný APK vytvorili v Android Studiu nové úložisko kľúčov, musíte pred inštaláciou APK starú aplikáciu odstrániť. **Nezabudnite exportovať nastavenia!**
```

Pozrite si návod [Prenos a inštalácia AAPS do smartfónu](../SettingUpAaps/TransferringAndInstallingAaps.md). Tam, kde Google vyžaduje [overovanie vývojárov pre Android](#android-developer-verification) (od septembra 2026, v závislosti od krajiny), inštalujte pomocou [ADB](#android-developer-verification-adb) namiesto ťuknutia na súbor APK.

Pokračujte [tu](#Update-to-new-version-check-aaps-version-on-phone).

(update-computer-build-troubleshooting)=

## Riešenie problémov

Ak sa niečo pokazí, nepanikárte.

Zhlboka sa nadýchnite!

Potom si pozrite samostatnú stránku [Riešenie problémov s Android Studiom](../GettingHelp/TroubleshootingAndroidStudio.md), či už váš problém nie je popísaný!

Ak potrebujete ďalšiu pomoc, obráťte sa na ostatných používateľov **AAPS** na [Facebooku](https://www.facebook.com/groups/AndroidAPSUsers) alebo [Discorde](https://discord.gg/4fQUWHZ4Mw).