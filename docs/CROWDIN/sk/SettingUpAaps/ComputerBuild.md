<!-- Android Studio Build, FKA Computer Build. Preserve filenames to avoid breaking URLs. -->

# Zostavenie v Android Studiu

Toto je klasický spôsob, ako zostaviť vašu aplikáciu AAPS.

Aplikáciu môžete zostaviť aj bez počítača, spôsobom [Zostavenie v prehliadači](./BrowserBuild.md).

## Zostavte si ju sami namiesto sťahovania

**Aplikácia AAPS (súbor APK) nie je k dispozícii na stiahnutie z dôvodu predpisov týkajúcich sa zdravotníckych pomôcok. Je legálne zostaviť si aplikáciu pre vlastné použitie, ale nesmiete jej kópiu poskytnúť iným osobám!**

Podrobnosti nájdete na stránke [Najčastejšie otázky používateľov APS](../UsefulLinks/FAQ.md).

---

(Building-APK-recommended-specification-of-computer-for-building-apk-file)=
## Špecifikácie počítača a softvéru na zostavenie AAPS

* Na zostavenie súboru APK môže byť potrebná konkrétna verzia **[Android Studia](https://developer.android.com/studio/)**. Pozrite si tabuľku nižšie:

| Verzia AAPS                                                              | Preferovaná <br/>Android Studio<br/> Verzia | Alternatívna<br/>Android Studio<br/>Verzia | Gradle | JVM |
| ------------------------------------------------------------------------ | ------------------------------------------------------- | ------------------------------------------------------ | ------ |:--- |
| 2.6.2                                                                    | 3.6.1                                                   |                                                        | 5.6.4  | 11  |
| 2.8.2.1                                                                  | 4.1.1                                                   |                                                        | 6.1.1  | 13  |
| [3.1.0.3](https://github.com/nightscout/AndroidAPS/releases/tag/3.1.0.3) | 2020.3.1                                                | otestované až po Quail 4                               | 7.3.3  | 17  |
| [3.2.0.4](#version3204)                                                  | Hedgehog (2023.1.1)                                     | otestované až po Quail 4                               | 8.2    | 17  |
| [3.3.1.3](#version3300)                                                  | Ladybug Feature Drop (2024.2.2)                         | otestované až po Quail 4                               | 8.10   | 21  |
| [3.3.2](#version3300)                                                    | Meerkat (2024.3.1)                                      | otestované až po Quail 4                               | 8.11.1 | 21  |
| [3.3.2.1](#version3321)                                                  | Narwhal (2025.1.2)                                      | otestované až po Quail 4                               | 8.13   | 21  |
| [3.4.2.6](#version3426)                                                  | Panda 2 (2025.3.2)                                      | otestované až po Quail 4                               | 9      | 21  |
| [4.0.0](#version400)                                                     | Rabbit 2 (2026.2.2)                                     | Latest                                                 | 9.8    | 21  |

„Požadovaná verzia“ je dodávaná s príslušnou verziou JVM. Táto verzia je zároveň minimálnou verziou, ktorú možno použiť na zostavenie **AAPS**. **Nebudete** môcť zostavovať na verzii staršej, než je tá „požadovaná“. Ak používate inú verziu, môžete naraziť na problémy súvisiace s verziou JVM. V prípade problému si pozrite stránku [Riešenie problémov v Android Studiu](#troubleshooting_androidstudio-uncommitted-changes), ktorá vám pomôže tieto problémy vyriešiť. Ak vaša aktuálna verzia Android Studia nie je uvedená v tabuľke, musíte ju najprv aktualizovať.

Verzia Gradle je naviazaná na zdrojový kód a pri sťahovaní alebo aktualizácii zdrojového kódu tak vždy získate správnu verziu Gradle. Uvádza sa to tu len pre informáciu a v tejto súvislosti nemusíte nič podniknúť.

* Android Studio nepodporuje [32-bitové systémy Windows](#troubleshooting_androidstudio-unable-to-start-daemon-process). Nezabúdajte, že **64-bitový procesor aj 64-bitový operačný systém sú nevyhnutnou podmienkou**. Ak váš systém túto podmienku nespĺňa, musíte vymeniť príslušný hardvér či softvér alebo celý systém.

<table class="tg">
<tbody>
  <tr>
    <th class="tg-baqh">OS (iba 64-bitový)</th>
    <td class="tg-baqh">Windows 10 or higher</td>
    <td class="tg-baqh">macOS 12 or higher</td>
    <td class="tg-baqh">Any Linux distribution that supports Gnome, KDE, or Unity DE;&nbsp;&nbsp;GNU C Library (glibc) 2.31 or later</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">CPU (iba 64-bitový)</th>
    <td class="tg-baqh">x86_64 CPU from 2017 or newer (Intel 8th generation Core i5, AMD Ryzen, or newer) with <a href="https://developer.android.com/studio/install" target="_blank" rel="noopener noreferrer">virtualization support</a> (Intel VT-x or AMD-V) enabled in the BIOS</td>
    <td class="tg-baqh">Apple Silicon (M1 or newer), or 6th generation Intel Core or newer (support for Intel Macs is being phased out)</td>
    <td class="tg-baqh">x86_64 CPU from 2017 or newer (Intel 8th generation Core i5, AMD Ryzen, or newer) with virtualization support (Intel VT-x or AMD-V) enabled in the BIOS</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">RAM</th>
    <td class="tg-baqh" colspan="3"><p align="center">16GB or more (8GB is the strict minimum for Android Studio alone, 32GB is recommended)</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Disk</th>
    <td class="tg-baqh" colspan="3"><p align="center">At least 32GB free space. Odporúča sa použiť SSD.</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Rozlíšenie</th>
    <td class="tg-baqh" colspan="3"><p align="center">1280 x 800 minimum (1920 x 1080 recommended)<br></td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Internet</th>
    <td class="tg-baqh" colspan="3"><p align="center">Širokopásmové pripojenie</td>
  </tr>
</tbody>
</table>

**Dôrazne sa odporúča (hoci to nie je povinné) použiť SSD namiesto HDD, pretože to skráti čas potrebný na zostavenie súboru APK aplikácie AAPS.** Pri zostavovaní súboru aplikácie **AAPS** však stále môžete používať aj HDD. Ak tak urobíte, proces zostavovania aplikácie môže trvať dlho, no po jeho spustení ho môžete nechať bežať bez dozoru.

## Pomoc a podpora počas procesu zostavovania

Ak budete mať pri zostavovaní aplikácie **AAPS** problémy, existuje na to samostatná sekcia [**Riešenie problémov s Android Studiom**](../GettingHelp/TroubleshootingAndroidStudio.md), najskôr si ju prečítajte.

Ak si myslíte, že niečo v návode na zostavenie je nesprávne, chýba alebo je mätúce, prípadne ak máte stále problémy, obráťte sa na ostatných používateľov **AAPS** v skupinách na [Facebooku](https://www.facebook.com/groups/AndroidAPSUsers) alebo [Discorde](https://discord.gg/4fQUWHZ4Mw). Ak chcete sami niečo zmeniť (aktualizácia snímok obrazovky _a pod._), odošlite prosím žiadosť o [(pull request – PR)](../SupportingAaps/HowToEditTheDocs.md).

## Podrobný návod krok za krokom pre zostavenie aplikácie AAPS

```{admonition} WARNING
:class: warning
Ak ste už AAPS niekedy zostavili, nemusíte znova robiť všetky nasledujúce kroky.
Prejdite priamo na [návod na aktualizáciu](../Maintenance/UpdateToNewVersion.md)!
```

```{contents} The overall steps for building the **AAPS** apk file
:depth: 1
:local: true
```

V tomto návode nájdete _ukážkové_ snímky obrazovky zo zostavenia súboru apk **AAPS**. Keďže **Android Studio** – softvér, ktorým zostavujeme apk **AAPS** – sa pravidelne aktualizuje, tieto snímky obrazovky sa nemusia presne zhodovať s vašou inštaláciou, ale stále by ste podľa nich mali vedieť postupovať.

Since **Android Studio** runs on Windows, Mac OS X and Linux platforms, there might also be minor differences in the steps for the different  platforms.

(install-git-if-you-dont-have-it)=
### Inštalácia Gitu

```{admonition} Why Git? 
:class: dropdown

Git je známy ako „_Versioning Control System_“ (VCS).\
Git je program, ktorý vám umožňuje sledovať zmeny v kóde a spolupracovať s ostatnými. Git použijete na vytvorenie kópie zdrojového kódu **AAPS** z webovej stránky GitHub do vášho lokálneho počítača. Then, you will use Android Studio on your computer to build the **AAPS** application (apk). 
```

(BuildingAaps-steps-for-installing-git)=
#### Postup inštalácie Gitu

1.  Skontrolujte, či už nemáte nainštalovaný **Git**. Overíte to tak, že do vyhľadávania vo Windows napíšete „git“ – ak vidíte **„Git bash“** alebo inú formu Gitu, je už nainštalovaný a môžete prejsť priamo na [inštaláciu Android Studia](#install-android-studio):


![Git_installed](../images/Building-the-App/001_check_git_installed.png)

2. Ak Git nemáte nainštalovaný, stiahnite si a nainštalujte najnovšiu verziu pre váš systém zo sekcie „Download“ (Stiahnuť) [**tu**](https://git-scm.com/downloads). Mala by fungovať akákoľvek novšia verzia Gitu. Vyberte správnu verziu podľa svojho systému: Mac, Windows alebo Linux.

**Poznámka pre používateľov počítačov Mac:** webová stránka Gitu vás navedie aj na inštaláciu ďalšieho programu s názvom „homebrew“, ktorý inštaláciu uľahčí. Ak Git inštalujete cez homebrew, nemusíte meniť žiadne nastavenia.

(Make_a_note_of_Git_path)=

* Keď sa vás počas inštalácie opýta na „select destination location“ (výber cieľového umiestnenia), poznačte si, _kam_ sa Git inštaluje („**cesta inštalácie**“). Budete ju potrebovať v ďalšom kroku. Bude to niečo podobné ako „C:\Program Files\Git\cmd\git.exe“

*  Počas jednotlivých krokov inštalácie Gitu jednoducho prijmite všetky predvolené možnosti.

*  Ak ste si po inštalácii zabudli poznačiť, kam sa Git nainštaloval, nájdete to takto: do vyhľadávania vo Windows napíšte „git“, kliknite pravým tlačidlom na „Git bash“, vyberte „open file location“ (otvoriť umiestnenie súboru) a podržte myš nad ikonou „Git bash“, čím sa zobrazí, kde je nainštalovaný.

* Pred ďalším krokom reštartujte počítač.

(Building-APK-install-android-studio)=
### Inštalácia Android Studia

- **Počas nasledujúcich krokov musíte byť neustále online, pretože Android Studio sťahuje niekoľko aktualizácií**

```{admonition} What is Android Studio?
:class: dropdown
Android Studio je program, ktorý beží na vašom počítači. Umožňuje sťahovať zdrojový kód z internetu (pomocou Gitu) a zostavovať aplikácie pre smartfóny (a inteligentné hodinky). Zostavením novej alebo aktualizovanej aplikácie v Android Studiu na počítači nemôžete „pokaziť“ aktuálnu verziu **AAPS**, ktorá vám možno beží v smartfóne s okruhom. Sú to úplne oddelené procesy. 
```

Jednou z najdôležitejších vecí pri inštalácii Android Studia je **byť trpezliví!** Počas inštalácie a nastavenia Android Studio sťahuje veľa vecí, čo si vyžaduje čas.

```{admonition} Different UI
:class: warning
Important note: Android Studio changed its UI during the last releases. Tento návod ukazuje kroky v *novom používateľskom rozhraní*. Snímky obrazovky sú z verzie „Ladybug“, takže novšie verzie môžu vyzerať trochu inak. Ak stále používate staršie používateľské rozhranie, možno budete chcieť najprv prepnúť Android Studio na nové rozhranie podľa [tohto návodu](#computerbuild-NewUI).
```

Verzia Android Studia je veľmi dôležitá. Ak chcete vybrať správnu verziu Android Studia, pozrite si [pokyny vyššie](#Building-APK-recommended-specification-of-computer-for-building-apk-file).

Stiahnite si [aktuálnu verziu Android Studia](https://developer.android.com/studio) alebo staršiu verziu z [**archívu**](https://developer.android.com/studio/archive) (Archives) a prijmite licenčné podmienky na stiahnutie.

![DownloadAndroidStudio](../images/Building-the-App/010_DownloadLadybug.png)

Po dokončení sťahovania spustite stiahnutú aplikáciu a nainštalujte ju do počítača. Možno budete musieť prijať/potvrdiť niektoré varovania Windows o stiahnutých aplikáciách!

Nainštalujte Android Studio klikaním na „Next“, ako je znázornené na nasledujúcich snímkach obrazovky. **Nemusíte** meniť žiadne nastavenia!

![Welcome_to_Android_Studio_Setup](../images/Building-the-App/011_InstallLadybug.png)

If you want to save hard disk space, you can uncheck Android Virtual Device: it is not used for building **AAPS**.

![Choose_components](../images/Building-the-App/012_InstallLadybug.png)

![Configuration_Settings](../images/Building-the-App/013_InstallLadybug.png)

Teraz kliknite na „Install“:

![Choose_start_Menu_Folder](../images/Building-the-App/014_InstallLadybug.png)

Po dokončení stlačte „Next“

![Installation_Complete](../images/Building-the-App/015_InstallLadybug.png)

V poslednom kroku kliknite na „Finished“ a Android Studio sa prvýkrát spustí.

![Completing_Android_Studio_Setup](../images/Building-the-App/016_InstallLadybug.png)

Zobrazí sa otázka, či chcete pomôcť zlepšiť Android Studio. Vyberte možnosť podľa svojho uváženia, na ďalšie kroky to nemá žiadny vplyv.

![Help_improve_Android_Studio](../images/Building-the-App/020_ImproveAS.png)

Uvítacia obrazovka vás privíta pri inštalácii Android Studia. Stlačte „Next“.

![Vitajte](../images/Building-the-App/022_WelcomeAndroidStudioInstallation.png)

Ako typ inštalácie vyberte „Standard“.

![Install_Type](../images/Building-the-App/023_DefaultInstallation.png)

Nastavenia overte opätovným kliknutím na „Next“.

![Verify_Settings](../images/Building-the-App/024_DefaultInstallation.png)

Teraz musíte prijať licenčné zmluvy. Vľavo sú dve časti (1 + 3), ktoré musíte vybrať jednu po druhej a pri každej vpravo vybrať „Accept“ (2 + 4).

Potom môžete kliknúť na tlačidlo „Finish“ (5).

![License_Agreement](../images/Building-the-App/025_LicenseAgreement.png)

Teraz sa stiahnu a nainštalujú niektoré balíky Androidu. Buďte trpezliví a počkajte.

Po dokončení sa zobrazí nasledujúca obrazovka, kde znova vyberiete „Finish“.

![Downloading_Components](../images/Building-the-App/026_DownloadFinished.png)

Teraz uvidíte uvítaciu obrazovku Android Studia.

![Welcome_to_Android_Studio](../images/Building-the-App/031_WelcomeAndroidStudio.png)


(Building-APK-download-AAPS-code)=
### Stiahnutie kódu AAPS

```{admonition} Why can it take a long time to download the AAPS code?
:class: dropdown

Pri prvom sťahovaní **AAPS** sa Android Studio pripojí cez internet k webovej stránke GitHub a stiahne zdrojový kód **AAPS**. Malo by to trvať približne 1 minútu. 

Android Studio potom použije **Gradle** (vývojový nástroj pre aplikácie pre Android) na identifikáciu ďalších komponentov potrebných na zostavenie týchto položiek vo vašom počítači. 
```

Na uvítacej obrazovke Android Studia skontrolujte, či je vľavo zvýraznená položka „**Projects**“ (1).

Potom vpravo kliknite na „**Clone Repository**“ (2):

![Get_from_VCS](../images/Building-the-App/032_GetVCS.png)

Teraz Android Studiu nastavíme, odkiaľ má kód stiahnuť:

![Get from Version Control](../images/Building-the-App/033_CloneGit.png)

* Vľavo by mala byť (predvolene) vybraná možnosť „Repository URL“ (1).
* Ako systém na správu verzií by mal byť (predvolene) vybraný „Git“ (2).
* Teraz skopírujte túto URL:
    ```
    https://github.com/nightscout/AndroidAPS.git
    ```
    a vložte ju do textového poľa URL (3).

* Skontrolujte, či (predvolený) adresár na uloženie klonovaného kódu vo vašom počítači už neexistuje (4). Môžete ho zmeniť na iný adresár, ale zapamätajte si, kam ste ho uložili!
* Teraz kliknite na tlačidlo „Clone“ (5).

```{admonition} INFORMATION
:class: note
Poznačte si tento adresár. Je to miesto, kde je uložený váš zdrojový kód!
```

Teraz uvidíte obrazovku s informáciou, že sa repozitár klonuje:

![cloning_repository](../images/Building-the-App/034_CloningProgress.png)

V istom momente sa Android Studio zatvorí a znova spustí. Môže sa zobraziť otázka, či projektu dôverujete. Kliknite na „Trust project“:

  ![Trust project](../images/Building-the-App/035_TrustProject.png)


Iba pre používateľov Windows: ak sa váš firewall pýta na povolenie, povoľte prístup:

 ![Povolenie pre java vo firewalle](../images/AndroidStudio361_18.png)

Po úspešnom naklonovaní repozitára Android Studio otvorí naklonovaný projekt.

(computerbuild-NewUI)=
```{admonition} New UI
:class: note
Android Studio nedávno zmenilo svoje používateľské rozhranie. Nové inštalácie Android Studia štandardne používajú nové používateľské rozhranie!

Iba ak vaše Android Studio vyzerá inak, možno budete musieť prepnúť na nové používateľské rozhranie:
Kliknite vľavo hore na hamburgerovú ponuku a potom vyberte **Settings** (alebo **Preferences** na počítačoch Apple).
V časti **Appearance & Behavior** prejdite na **New UI** a zaškrtnite **Enable new UI**. Potom Android Studio reštartujte, aby ste ho mohli začať používať.

Ak možnosť **New UI** nenájdete, nebojte sa: už ho používate!
```


Po otvorení aplikácie Android Studio počkajte (môže to trvať niekoľko minút) a najmä **neaktualizujte** projekt, ako sa navrhuje vo vyskakovacom okne.

Android Studio automaticky spustí „Gradle project sync“ (synchronizáciu projektu Gradle), ktorá potrvá niekoľko minút. Môžete vidieť, že (stále) beží:

![AS_download_dependencies](../images/Building-the-App/036_GradleSyncing.png)

```{admonition} NEVER UPDATE GRADLE!
:class: warning

Android Studio môže odporučiť aktualizáciu systému gradle. **Nikdy neaktualizujte gradle!** To povedie k ťažkostiam.
```

Iba na počítačoch s Windows: môže sa zobraziť upozornenie, že beží Windows Defender. Kliknite na **Automatically** a potvrďte, zostavenie potom pobeží rýchlejšie!

![Windows Defender](../images/Building-the-App/037_WindowsDefender.png)


Synchronizáciu Gradle môžete nechať bežať a už pokračovať ďalšími krokmi.

(Building-APK-set-git-path-in-preferences)=
### Nastavenie cesty ku Gitu v nastaveniach Android Studia

Teraz Android Studiu nastavíme, kde nájde Git, ktorý ste nainštalovali [predtým](#install-git-if-you-dont-have-it).

* Iba pre používateľov Windows: uistite sa, že ste po [inštalácii Gitu](#install-git-if-you-dont-have-it) reštartovali počítač. Ak nie, reštartujte ho teraz a znova otvorte Android Studio

V ľavom hornom rohu **Android Studia** otvorte hamburgerovú ponuku a prejdite na **File** > **Settings** (vo Windows) alebo **Android Studio** > **Preferences** (na Macu). Otvorí sa nasledujúce okno. Kliknutím rozbaľte rozbaľovaciu ponuku **Version Control** (1) a vyberte **Git** (2)

![Version_control_Git](../images/Building-the-App/038_SettingsGit.png)

Kliknutím na tlačidlo „Test“ (1) skontrolujte, či **Android Studio** dokáže automaticky nájsť správnu cestu v poli **Path to Git executable** (cesta k spustiteľnému súboru Git):

![Spustiteľný súbor Git](../images/Building-the-App/039_GitTest.png)


Ak je automatické nastavenie úspešné, vedľa cesty sa zobrazí vaša aktuálna verzia **Gitu**.

   ![Git_version_displayed](../images/Building-the-App/039_GitTestSuccess.png)


Ak sa **git.exe** nenájde automaticky alebo ak kliknutie na „Test“ skončí chybou, môžete buď
* ručne zadajte cestu, ktorú ste uložili [skôr](#BuildingAaps-steps-for-installing-git), alebo
* click on the folder icon (1) and manually navigate to the directory where **git.exe** was installed [earlier](#BuildingAaps-steps-for-installing-git)
* Overte svoje nastavenia pomocou tlačidla **Test**!

  ![Git sa nenašiel](../images/Building-the-App/039_GitTestError.png)

(Building-APK-generate-signed-apk)=
### Zostavenie „podpísaného“ APK AAPS

```{admonition} Why does the AAPS app need to be "signed"?
:class: dropdown

Android vyžaduje, aby bola každá aplikácia _podpísaná_, aby sa zaistilo, že ju bude možné neskôr aktualizovať iba z rovnakého dôveryhodného zdroja, ktorý vydal pôvodnú aplikáciu. Viac informácií o tejto téme nájdete na [tomto odkaze](https://developer.android.com/studio/publish/app-signing.html#generate-key). 

Pre naše účely to znamená len to, že vygenerujeme podpisový súbor, teda „úložisko kľúčov“ (keystore), a použijeme ho pri zostavovaní aplikácie **AAPS**.
```


**Dôležité: Pred pokračovaním sa uistite, že synchronizácia gradle bola úspešne dokončená!**


Kliknutím na hamburgerovú ponuku vľavo hore otvorte panel ponuky. Vyberte možnosť **Build** (1) a potom vyberte možnosť **Generate Signed App Bundle / APK** (2)

![Zostavenie apk](../images/Building-the-App/040_GenerateSignedAPK.png)

Vyberte „APK“ (1) namiesto „Android App Bundle“ a kliknite na „Next“ (2):

![APK namiesto bundle](../images/Building-the-App/041_APK.png)

Na ďalšej obrazovke skontrolujte, či je „Module“ nastavené na „AndroidAPS.app“ (1). Časť pred „.app“ je názov priečinka, do ktorého ste naklonovali kód.

(Building-APK-wearapk)=
```{admonition} INFORMATION!
:class: note
Ak chcete vytvoriť apk pre hodinky, musíte teraz vybrať AndroidAPS.wear!
```
![Create_key_store](../images/Building-the-App/042_CreateNewKey.png)

Kliknite na „Create new...“ (2) a začnite vytvárať úložisko kľúčov.

```{admonition} INFORMATION!
:class: note
Úložisko kľúčov stačí vytvoriť iba raz.
If you have built AAPS before, do NOT create a new keystore but select your existing one and enter its passwords!
```

**_Poznámka:_** Úložisko kľúčov je súbor, v ktorom sú uložené informácie na podpísanie aplikácie. Je zašifrované a informácie sú chránené heslami.

![Vytvorenie úložiska kľúčov](../images/Building-the-App/043_Keystore.png)

* Kliknite na symbol „priečinka“ (1) a vyberte cestu vo svojom počítači pre úložisko kľúčov.

  **Nepoužívajte** adresár, do ktorého ste uložili zdrojový kód, ale taký adresár, ktorý by ste preniesli aj do nového počítača.

```{admonition} WARNING!
:class: warning
Nezabudnite si poznačiť, kde máte uložené úložisko kľúčov. Budete ho potrebovať pri zostavovaní ďalšej aktualizácie AndroidAPS!
```

* Teraz zvoľte jednoduché heslo (a poznačte si ho), zadajte ho do poľa pre heslo (2) a potvrďte ho (2).

  Heslá k úložisku kľúčov a ku kľúču nemusia byť zložité. Ak v budúcnosti stratíte heslo, pozrite si stránku [Preinštalovanie AAPS s novým úložiskom kľúčov](#reinstall-aaps).

```{warning}
**V heslách sa vyhnite špeciálnym znakom.** Pre heslo úložiska kľúčov aj heslo kľúča používajte iba písmená a číslice. Nepoužívajte najmä `$`, spätný apostrof (backtick), `"` ani `\`. Ak neskôr prejdete na [Zostavenie v prehliadači](#aaps-ci-option2) a použijete toto úložisko kľúčov znova, tieto znaky môžu spôsobiť zlyhanie kroku podpisovania, pozrite si [Zostavenie v prehliadači: riešenie problémov](#aaps-ci-password-special-characters).
```

* Predvolený alias (3) vášho kľúča je „key0“, nemeňte ho.

* Teraz potrebujete heslo pre svoj kľúč. Pre jednoduchosť môžete, ak chcete, použiť rovnaké heslo, aké ste vyššie použili pre úložisko kľúčov. Zadajte heslo (4) a potvrďte ho.

```{admonition} WARNING!
:class: warning
Poznamenajte si tieto heslá! Budete ich potrebovať pri zostavovaní ďalšej aktualizácie AAPS!
```

* Platnosť je predvolene 25 rokov, nechajte ju tak.

* Zadajte svoje meno a priezvisko (5). Žiadne ďalšie údaje netreba pridávať, ale môžete (6–7).

* Pokračujte kliknutím na „OK“ (8):


Na stránke **Generate signed App Bundle or APK** sa teraz zobrazí cesta k vášmu úložisku kľúčov. Teraz znova zadajte heslo úložiska kľúčov – Key Store password (1) a heslo kľúča – Key password (2) a zaškrtnite políčko (3) na zapamätanie hesiel, aby ste ich nemuseli zadávať pri ďalšom zostavovaní apk (t. j. pri aktualizácii na novú verziu AAPS). Kliknite na „Next“ (4):

![Zapamätanie hesiel](../images/Building-the-App/044_RememberPwd.png)


Na ďalšej obrazovke vyberte variant zostavenia „fullRelease“ (1) a kliknite na „Create“ (3). Zapamätajte si cieľový priečinok zobrazený v (2), pretože tam neskôr nájdete zostavený súbor apk!

   ![Výber variantu zostavenia](../images/Building-the-App/045_BuildPath.png)

Android Studio teraz zostaví apk **AAPS**. Vpravo dole sa zobrazí „Gradle Build running“ (2). Proces trvá nejaký čas v závislosti od vášho počítača a internetového pripojenia, takže **buďte trpezliví!** Ak chcete sledovať priebeh zostavovania, kliknite na malé kladivko „build“ (1) v spodnej časti Android Studia:

![Gradle beží](../images/Building-the-App/046_BuildRunning.png)

Teraz môžete sledovať priebeh zostavovania:

![Android_Studio_building](../images/Building-the-App/047_BuildDetails.png)

Po dokončení zostavenia Android Studio zobrazí informáciu „BUILD SUCCESSFUL“. Môže sa zobraziť vyskakovacia notifikácia, v ktorej môžete kliknúť na „locate“. Ak to prehliadnete, kliknite na ikonu notifikácií (1), aby sa zobrazili notifikácie (Notifications), a potom na **locate** (2):

![Zostavenie dokončené](../images/Building-the-App/049_ReopenNotification.png)

**_Ak zostavenie nebolo úspešné, pozrite si časť [Riešenie problémov s Android Studiom](../GettingHelp/TroubleshootingAndroidStudio.md)._**

V okne Notifications kliknite na modrý odkaz „locate“:

![Nájdenie zostavenia](../images/Building-the-App/048_BuildFinished.png) Otvorí sa váš správca súborov a ukáže vám súbor apk, ktorý ste práve zostavili.

   ![Umiestnenie súboru apk](../images/Building-the-App/050_LocateAPK.png)

Gratulujeme! Teraz máte zostavený súbor apk **AAPS** a v ďalšej časti dokumentácie ho prenesiete do svojho smartfónu.

```{tip}
Ak by ste chceli v budúcnosti používať inteligentné hodinky Android Wear, toto je najlepší čas na zostavenie súboru AAPS Wear apk, aby ste mali istotu, že bude synchronizovaný s AAPS.
```

Prejdite na ďalšiu časť [Prenos a inštalácia **AAPS**](../SettingUpAaps/TransferringAndInstallingAaps.md).



