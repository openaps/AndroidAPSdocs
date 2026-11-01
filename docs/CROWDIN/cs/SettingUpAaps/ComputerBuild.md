<!-- Android Studio Build, FKA Computer Build. Preserve filenames to avoid breaking URLs. -->

# Sestavení v Android Studiu

Toto je tradiční způsob, jak sestavit aplikaci AAPS.

Aplikaci můžete sestavit i bez počítače pomocí [Sestavení v prohlížeči](./BrowserBuild.md).

## Sestavte si aplikaci sami, místo stažení

**Aplikace AAPS (soubor apk) není k dispozici ke stažení kvůli předpisům pro zdravotnické prostředky. Sestavit si aplikaci pro vlastní použití je legální, ale nesmíte dávat kopii jiným!**

Podrobnosti najdete na stránce [Nejčastější otázky uživatelů APS](../UsefulLinks/FAQ.md).

---

(Building-APK-recommended-specification-of-computer-for-building-apk-file)=
## Specifikace hardware a softwaru pro vytvoření AAPS

* K sestavení APK může být potřeba konkrétní verze **[Android Studia](https://developer.android.com/studio/)**. Viz tabulka níže:

| Verze AAPS              | Doporučená<br/>verze<br/>Android Studia | Alternativní<br/>verze<br/>Android Studia | Gradle | JVM |
| ----------------------- | --------------------------------------------------- | ----------------------------------------------------- | ------ |:--- |
| 2.6.2                   | 3.6.1                                               |                                                       | 5.6.4  | 11  |
| 2.8.2.1                 | 4.1.1                                               |                                                       | 6.1.1  | 13  |
| [3.1.0.3](#version3100) | 2020.3.1                                            | testováno až po Quail 4                               | 7.3.3  | 17  |
| [3.2.0.4](#version3204) | Hedgehog (2023.1.1)                                 | testováno až po Quail 4                               | 8.2    | 17  |
| [3.3.1.3](#version3300) | Ladybug Feature Drop (2024.2.2)                     | testováno až po Quail 4                               | 8.10   | 21  |
| [3.3.2](#version3300)   | Meerkat (2024.3.1)                                  | testováno až po Quail 4                               | 8.11.1 | 21  |
| [3.3.2.1](#version3321) | Narwhal (2025.1.2)                                  | testováno až po Quail 4                               | 8.13   | 21  |
| [3.4.2.6](#version3426) | Panda 2 (2025.3.2)                                  | testováno až po Quail 4                               | 9      | 21  |
| [4.0.0](#version400)    | Rabbit 2 (2026.2.2)                                 | Latest                                                | 9.8    | 21  |

„Doporučená verze“ obsahuje odpovídající verzi JVM. Doporučená verze je zároveň nejstarší verze, se kterou můžete **AAPS** sestavit. Ve verzi starší než „doporučená“ sestavení **NEPŮJDE**. Pokud použijete jinou verzi, můžete narazit na problémy s verzí JVM. Pomoc s řešením těchto problémů najdete na stránce [Řešení problémů s Android Studiem](#troubleshooting_androidstudio-uncommitted-changes). Pokud vaše současná verze Android Studia v tabulce není, musíte ho nejdříve aktualizovat.

Verze Gradle je svázaná se zdrojovým kódem. Při stažení nebo aktualizaci zdrojového kódu vždy dostanete správnou verzi Gradle. Je zde uvedená jen pro informaci, nemusíte s ní nic dělat.

* [32bitové systémy Windows](#troubleshooting_androidstudio-unable-to-start-daemon-process) Android Studio nepodporuje. Pamatujte, že **64bitový procesor i 64bitový operační systém jsou povinnou podmínkou.** Pokud váš systém tuto podmínku NESPLŇUJE, musíte vyměnit příslušný hardware nebo software, případně celý systém.

<table class="tg">
<tbody>
  <tr>
    <th class="tg-baqh">OS (pouze 64bitový)</th>
    <td class="tg-baqh">Windows 10 or higher</td>
    <td class="tg-baqh">macOS 12 or higher</td>
    <td class="tg-baqh">Any Linux distribution that supports Gnome, KDE, or Unity DE;&nbsp;&nbsp;GNU C Library (glibc) 2.31 or later</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">CPU (pouze 64bitový)</th>
    <td class="tg-baqh">x86_64 CPU from 2017 or newer (Intel 8th generation Core i5, AMD Ryzen, or newer) with <a href="https://developer.android.com/studio/install" target="_blank" rel="noopener noreferrer">virtualization support</a> (Intel VT-x or AMD-V) enabled in the BIOS</td>
    <td class="tg-baqh">Apple Silicon (M1 or newer), or 6th generation Intel Core or newer (support for Intel Macs is being phased out)</td>
    <td class="tg-baqh">x86_64 CPU from 2017 or newer (Intel 8th generation Core i5, AMD Ryzen, or newer) with virtualization support (Intel VT-x or AMD-V) enabled in the BIOS</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">RAM</th>
    <td class="tg-baqh" colspan="3"><p align="center">16GB or more (8GB is the strict minimum for Android Studio alone, 32GB is recommended)</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Pevný disk</th>
    <td class="tg-baqh" colspan="3"><p align="center">At least 32GB free space. Je doporučeno SSD.</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Rozlišení</th>
    <td class="tg-baqh" colspan="3"><p align="center">1280 x 800 minimum (1920 x 1080 recommended)<br></td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Internet</th>
    <td class="tg-baqh" colspan="3"><p align="center">Širokopásmové připojení</td>
  </tr>
</tbody>
</table>

**Důrazně doporučujeme (není to povinné) použít SSD (Solid State Disk) místo HDD (Hard Disk Drive), protože sestavení souboru APK AAPS pak zabere méně času.**  Soubor APK **AAPS** můžete sestavit i na HDD. Pokud to uděláte, dokončení procesu sestavení může trvat dlouho, ale jakmile začnete, můžete ho nechat bez dozoru.

## Pomoc a podpora během procesu sestavení

Pokud při sestavování aplikace **AAPS** narazíte na potíže, existuje samostatná část [**Řešení problémů s Android Studiem**](../GettingHelp/TroubleshootingAndroidStudio.md), podívejte se nejprve do ní.

Pokud si myslíte, že je v návodu k sestavení něco špatně, chybí nebo je to nejasné, nebo pokud si stále nevíte rady, obraťte se na skupinu uživatelů **AAPS** na [Facebooku](https://www.facebook.com/groups/AndroidAPSUsers) nebo na [Discordu](https://discord.gg/4fQUWHZ4Mw). Pokud chcete něco změnit sami (aktualizovat snímky obrazovky _apod._), pošlete prosím [pull request (PR)](../SupportingAaps/HowToEditTheDocs.md).

## Návod k sestavení aplikace AAPS krok za krokem

```{admonition} WARNING
:class: warning
Pokud jste AAPS už dříve sestavovali, nemusíte znovu provádět všechny následující kroky.
Přejděte rovnou na [návod k aktualizaci](../Maintenance/UpdateToNewVersion.md)!
```

```{contents} The overall steps for building the **AAPS** apk file
:depth: 1
:local: true
```

V tomto návodu najdete _ukázkové_ snímky obrazovky ze sestavení souboru apk **AAPS**. Protože se **Android Studio** – program, kterým apk **AAPS** sestavujeme – pravidelně aktualizuje, nemusí být tyto snímky obrazovky úplně stejné jako ve vaší instalaci, ale i tak by mělo být možné se jimi řídit.

Since **Android Studio** runs on Windows, Mac OS X and Linux platforms, there might also be minor differences in the steps for the different  platforms.

(install-git-if-you-dont-have-it)=
### Instalace Gitu

```{admonition} Why Git? 
:class: dropdown

Git je známý jako „_systém pro správu verzí_“ (Versioning Control System, VCS).\
Git je program, který umožňuje sledovat změny v kódu a spolupracovat s ostatními. Pomocí Gitu si zkopírujete zdrojový kód **AAPS** z webu GitHub do svého počítače. Then, you will use Android Studio on your computer to build the **AAPS** application (apk). 
```

(BuildingAaps-steps-for-installing-git)=
#### Postup instalace Gitu

1.  Zkontrolujte, zda už nemáte **Git** nainstalovaný. You can do this by typing “git” in the Windows search bar – if you see **“Git bash”** or some other form of Git, it is already installed and you can go straight to [installing Android Studio](#Building-APK-install-android-studio):


![Git_installed](../images/Building-the-App/001_check_git_installed.png)

2. If you don’t have Git installed, download and install the latest version for your system from the "Download" section [**here**](https://git-scm.com/downloads). Jakákoliv nedávná verze Gitu by měla fungovat, vyberte správnou verzi pro váš systém, ať je to Mac, Windows nebo Linux.

**Poznámka pro uživatele Macu:** webová stránka Gitu vás také navede k instalaci dalšího programu s názvem „homebrew“, který s instalací pomůže. Pokud instalujete git přes homebrew, není třeba měnit žádné předvolby.

(Make_a_note_of_Git_path)=

* Když se vás instalace zeptá na „select destination location“ (výběr cílového umístění), poznamenejte si, _kam_ se Git instaluje („**instalační cestu**“). Budete ji potřebovat v dalším kroku. Bude se jednat o cestu jako "C:\Program Files\Git\cmd\git.exe".

*  V průběhu instalace Gitu jen přijměte všechny výchozí možnosti.

*  Po instalaci, pokud jste si zapomněli poznamenat cestu k instalaci Gitu, najdete program takto: napište "git" do vyhledávacího panelu Windows, klikněte pravým tlačítkem myši na "Git bash", vyberte "open file location" a přejeďte myší na ikonu "Git bash", která pak odhalí, kde je instalována.

* Před dalším krokem restartujte počítač.

(Building-APK-install-android-studio)=
### Instalace Android Studio

- **Musíte zůstat online při provádění dalších kroků, protože Android Studio bude stahovat několik aktualizací**

```{admonition} What is Android Studio?
:class: dropdown
Android Studio je program, který běží na vašem počítači. Umožňuje vám stáhnout zdrojový kód z internetu (pomocí Gitu) a vytvářet aplikace pro chytré telefony (a hodinky). Sestavením nové nebo aktualizované aplikace v Android Studiu na vašem PC nemůžete „rozbít“ současnou verzi **AAPS**, se kterou na chytrém telefonu provozujete smyčku – jsou to zcela oddělené procesy. 
```

Při instalaci Android Studia je jednou z nejdůležitějších věcí **trpělivost!** Během instalace a nastavení Android Studio stahuje spoustu věcí, což chvíli trvá.

```{admonition} Different UI
:class: warning
Important note: Android Studio changed its UI during the last releases. Tento návod ukazuje kroky v *novém rozhraní*. Snímky obrazovky byly pořízeny ve verzi „Ladybug“, takže novější verze mohou vypadat trochu jinak. Pokud stále používáte starší rozhraní, možná budete chtít nejprve přepnout Android Studio na nové rozhraní podle [těchto pokynů](#computerbuild-NewUI).
```

Verze Android Studia je velmi důležitá. Správnou verzi Android Studia vyberte podle [pokynů výše](#Building-APK-recommended-specification-of-computer-for-building-apk-file).

Stáhněte si [aktuální verzi Android Studia](https://developer.android.com/studio) nebo starší verzi z [**archivu**](https://developer.android.com/studio/archive) a přijměte licenční podmínky ke stažení.

![DownloadAndroidStudio](../images/Building-the-App/010_DownloadLadybug.png)

Po dokončení stahování spusťte staženou aplikaci a nainstalujte ji do počítače. Možná budete muset přijmout nebo potvrdit některá varování Windows ke staženým aplikacím!

Nainstalujte Android Studio klikáním na „Next“, jak ukazují následující snímky obrazovky. **Nemusíte** měnit žádná nastavení!

![Welcome_to_Android_Studio_Setup](../images/Building-the-App/011_InstallLadybug.png)

If you want to save hard disk space, you can uncheck Android Virtual Device: it is not used for building **AAPS**.

![Choose_components](../images/Building-the-App/012_InstallLadybug.png)

![Configuration_Settings](../images/Building-the-App/013_InstallLadybug.png)

Nyní klikněte na „Install“:

![Choose_start_Menu_Folder](../images/Building-the-App/014_InstallLadybug.png)

Po dokončení stiskněte „Next“

![Installation_Complete](../images/Building-the-App/015_InstallLadybug.png)

In the last step, click on "Finish" to start Android Studio for the first time.

![Completing_Android_Studio_Setup](../images/Building-the-App/016_InstallLadybug.png)

Budete dotázáni, zda chcete pomoci zlepšovat Android Studio. Vyberte možnost podle svého uvážení, na další kroky to nemá žádný vliv.

![Help_improve_Android_Studio](../images/Building-the-App/020_ImproveAS.png)

Úvodní obrazovka vás vítá v instalaci Android Studia. Stiskněte „Next“.

![Vítejte](../images/Building-the-App/022_WelcomeAndroidStudioInstallation.png)

Jako typ instalace vyberte „Standard“.

![Install_Type](../images/Building-the-App/023_DefaultInstallation.png)

Nastavení potvrďte dalším kliknutím na „Next“.

![Verify_Settings](../images/Building-the-App/024_DefaultInstallation.png)

Nyní musíte přijmout licenční smlouvy. Vlevo jsou dvě sekce (1 + 3). Vyberte je jednu po druhé a u každé vpravo zvolte „Accept“ (2 + 4).

Pak můžete kliknout na tlačítko „Finish“ (5).

![License_Agreement](../images/Building-the-App/025_LicenseAgreement.png)

Nyní se stáhnou a nainstalují některé balíčky Androidu. Buďte trpěliví a počkejte.

Po dokončení uvidíte následující obrazovku, kde znovu vyberete „Finish“.

![Downloading_Components](../images/Building-the-App/026_DownloadFinished.png)

Nyní uvidíte uvítací obrazovku Android Studia.

![Welcome_to_Android_Studio](../images/Building-the-App/031_WelcomeAndroidStudio.png)


(Building-APK-download-AAPS-code)=
### Stažení zdrojového kódu AAPS

```{admonition} Why can it take a long time to download the AAPS code?
:class: dropdown

Při prvním stažení **AAPS** se Android Studio připojí přes internet k webu GitHub a stáhne zdrojový kód **AAPS**. To by mělo trvat asi 1 minutu. 

Android Studio pak pomocí **Gradle** (vývojový nástroj pro aplikace Android) zjistí, jaké další komponenty jsou ve vašem počítači potřeba k sestavení. 
```

Na úvodní obrazovce Android Studia (Welcome) zkontrolujte, že je vlevo zvýrazněno „**Projects**“ (1).

Pak vpravo klikněte na „**Clone Repository**“ (2):

![Get_from_VCS](../images/Building-the-App/032_GetVCS.png)

Nyní řekneme Android Studiu, odkud kód získat:

![Get from Version Control](../images/Building-the-App/033_CloneGit.png)

* Zvolte "Adresa URL úložiště" (výchozí) vlevo (1).
* Ve výchozím nastavení by měl být vybrán verzovací systém „Git“ (2).
* Nyní zkopírujte tuto adresu URL:
    ```
    https://github.com/nightscout/AndroidAPS.git
    ```
    a vložte ji do textového pole URL (3).

* Zkontrolujte, že (výchozí) složka pro uložení klonovaného kódu ve vašem počítači ještě neexistuje (4). Můžete ho změnit na jinou složku, ale zapamatujte si, kam jste ho uložili!
* Nyní spusťte klonování kódu kliknutím na tlačítko "Clone" (5).

```{admonition} INFORMATION
:class: note
Poznamenejte si tuto složku. Tam se bude nacházet váš zdrojový kód!
```

Nyní uvidíte obrazovku s informací, že se repozitář klonuje:

![cloning_repository](../images/Building-the-App/034_CloningProgress.png)

V určitém okamžiku se Android Studio zavře a znovu spustí. Můžete být dotázáni, zda chcete projektu důvěřovat. Klikněte na "Trust project":

  ![Trust project](../images/Building-the-App/035_TrustProject.png)


Pouze pro uživatele Windows: Pokud firewall požaduje oprávnění, udělte mu je:

 ![Oprávnění firewallu pro Javu](../images/AndroidStudio361_18.png)

Po úspěšném dokončení klonování repozitáře otevře Android Studio naklonovaný projekt.

(computerbuild-NewUI)=
```{admonition} New UI
:class: note
Android Studio nedávno změnilo své uživatelské rozhraní. Nové instalace Android Studia používají nové uživatelské rozhraní automaticky!

Jen pokud vaše Android Studio vypadá jinak, možná budete muset přepnout na nové rozhraní:
Klikněte vlevo nahoře na hamburger menu a vyberte **Settings** (nebo **Preferences** na počítačích Apple).
V **Appearance & Behavior** přejděte na **New UI** a zaškrtněte **Enable new UI**. Potom Android Studio restartujte a začněte ho používat.

Pokud volbu **New UI** nenajdete, nevadí: nové rozhraní už používáte!
```


Až se Android Studio otevře, trpělivě počkejte (může to trvat několik minut) a hlavně projekt **neaktualizujte**, i když to navrhuje vyskakovací okno.

Android Studio automaticky spustí „Gradle project sync“, který bude trvat několik minut. Můžete vidět, že (stále) běží:

![AS_download_dependencies](../images/Building-the-App/036_GradleSyncing.png)

```{admonition} NEVER UPDATE GRADLE!
:class: warning

Android Studio může doporučit aktualizaci systému gradle. **Nikdy neaktualizujte gradle!** Povede to k potížím.
```

Jen na počítačích s Windows: může se zobrazit oznámení, že běží Windows Defender. Klikněte na **Automatically** a potvrďte, sestavení pak poběží rychleji!

![Windows Defender](../images/Building-the-App/037_WindowsDefender.png)


Synchronizaci gradle můžete nechat běžet a už pokračovat dalšími kroky.

(Building-APK-set-git-path-in-preferences)=
### Nastavení cesty ke Gitu v předvolbách Android Studia

Teď Android Studiu řekneme, kde najde Git, který jste nainstalovali [dříve](#install-git-if-you-dont-have-it).

* Jen pro uživatele Windows: ujistěte se, že jste po [instalaci Gitu](#install-git-if-you-dont-have-it) restartovali počítač. Pokud ne, restartujte nyní počítač a znovu otevřete Android Studio

V levém horním rohu **Android Studia** otevřete hamburger menu a přejděte na **File** > **Settings** (ve Windows) nebo **Android Studio** > **Preferences** (na Macu). Otevře se následující okno. Klikněte na rozbalovací nabídku **Version Control** (1) a vyberte **Git** (2)

![Version_control_Git](../images/Building-the-App/038_SettingsGit.png)

Check if **Android Studio** can automatically locate the correct **Path to Git executable** by clicking the button "Test" (1):

![Spustitelný soubor Git](../images/Building-the-App/039_GitTest.png)


Pokud automatické nastavení uspěje, zobrazí se vedle cesty vaše aktuální verze **Gitu**.

   ![Git_version_displayed](../images/Building-the-App/039_GitTestSuccess.png)


Pokud zjistíte, že **git.exe** se automaticky nenašel, nebo že kliknutí na „Test“ skončí chybou, můžete buď
* ručně zadat cestu, kterou jste si [dříve](#BuildingAaps-steps-for-installing-git) poznamenali, nebo
* click on the folder icon (1) and manually navigate to the directory where **git.exe** was installed [earlier](#BuildingAaps-steps-for-installing-git)
* Ověřte své nastavení tlačítkem **Test**!

  ![Git nenalezen](../images/Building-the-App/039_GitTestError.png)

(Building-APK-generate-signed-apk)=
### Sestavení "podepsaného" APK aplikace AAPS

```{admonition} Why does the AAPS app need to be "signed"?
:class: dropdown

Android vyžaduje, aby každá aplikace byla _podepsaná_. Tím se zajistí, že ji později půjde aktualizovat jen ze stejného důvěryhodného zdroje, který vydal původní aplikaci. Další informace o tomto tématu najdete na [tomto odkazu](https://developer.android.com/studio/publish/app-signing.html#generate-key). 

Pro naše účely to jen znamená, že vytvoříme podpisový soubor neboli soubor „úložiště klíčů“ (keystore) a použijeme ho při sestavení aplikace **AAPS**.
```


**Důležité: než budete pokračovat, ujistěte se, že synchronizace gradle (gradle sync) úspěšně skončila!**


Kliknutím na hamburger menu vlevo nahoře otevřete panel nabídek. Vyberte **Build** (1) a pak **Generate Signed App Bundle / APK** (2)

![Sestavení apk](../images/Building-the-App/040_GenerateSignedAPK.png)

Vyberte „APK“ (1) místo „Android App Bundle“ a klikněte na „Next“ (2):

![APK namísto možnosti bundle](../images/Building-the-App/041_APK.png)

Na další obrazovce zkontrolujte, že „Module“ je nastaveno na „AndroidAPS.app“ (1). Část před „.app“ je název složky, do které jste kód naklonovali.

(Building-APK-wearapk)=
```{admonition} INFORMATION!
:class: note
Pokud chcete vytvořit apk pro hodinky, musíte teď vybrat AndroidAPS.wear!
```
![Create_key_store](../images/Building-the-App/042_CreateNewKey.png)

Kliknutím na "Create new..." (2) začnete vytvářet své úložiště klíčů.

```{admonition} INFORMATION!
:class: note
Úložiště klíčů stačí vytvořit jen jednou.
If you have built AAPS before, do NOT create a new keystore but select your existing one and enter its passwords!
```

**_Poznámka:_** Úložiště klíčů je soubor, ve kterém jsou uloženy informace pro podepsání aplikace. Tento soubor je zašifrovaný a chráněný heslem.

![Vytvořit úložiště klíčů](../images/Building-the-App/043_Keystore.png)

* Kliknutím na symbol „složky“ (1) vyberte v počítači cestu pro své úložiště klíčů.

  **Nepoužívejte** složku, kde máte uložený zdrojový kód, ale nějakou složku, kterou byste přenesli i do nového počítače.

```{admonition} WARNING!
:class: warning
Poznamenejte si, kde je vaše úložiště klíčů uložené. You will need it when you build the next AAPS update!
```

* Nyní zvolte jednoduché heslo (a poznamenejte si ho), zadejte ho do pole pro heslo (2) a potvrďte ho (2).

  Hesla k úložišti klíčů a ke klíči nemusí být složitá. Pokud v budoucnu ztratíte heslo, podívejte se na [Přeinstalace AAPS s novým úložištěm klíčů](#reinstall-aaps).

```{warning}
**Nepoužívejte v heslech speciální znaky.** Pro hesla k úložišti klíčů i ke klíči používejte jen písmena a číslice. Hlavně nepoužívejte `$`, zpětný apostrof (backtick), `"` ani `\`. Pokud později přejdete na [Sestavení v prohlížeči](#aaps-ci-option2) a použijete toto úložiště klíčů znovu, mohou tyto znaky způsobit selhání kroku podepisování, viz [Sestavení v prohlížeči: řešení problémů](#aaps-ci-password-special-characters).
```

* Výchozí alias (3) pro váš klíč je "key0", ponechte to beze změny.

* Teď potřebujete heslo k vašemu klíči. Pro zjednodušení můžete, pokud chcete, použít stejné heslo, jaké jste výše použili pro úložiště klíčů. Zadejte heslo (4) a potvrďte ho.

```{admonition} WARNING!
:class: warning
Tato hesla si poznamenejte! Budete je potřebovat, až budete sestavovat další aktualizaci AAPS!
```

* Platnost je ve výchozím nastavení 25 let, nechte ji tak.

* Zadejte své jméno a příjmení (5). Žádné další údaje není nutné vyplňovat, ale můžete (6–7).

* Pro pokračování klikněte na "OK" (8):


Na stránce **Generate signed App Bundle or APK** se teď zobrazí cesta k vašemu úložišti klíčů. Nyní znovu zadejte heslo k úložišti klíčů (1) a heslo ke klíči (2) a zaškrtněte políčko (3) pro zapamatování hesel, abyste je nemuseli zadávat při příštím sestavení apk (tj. při aktualizaci na novou verzi AAPS). Klikněte na tlačítko "Next" (4):

![Zapamatování hesel](../images/Building-the-App/044_RememberPwd.png)


Na další obrazovce vyberte variantu sestavení „fullRelease“ (1) a klikněte na „Create“ (3). Zapamatujte si cílovou složku zobrazenou u (2), protože tam později najdete sestavený soubor apk!

   ![Výběr varianty sestavení](../images/Building-the-App/045_BuildPath.png)

Android Studio teď sestaví apk **AAPS**. Vpravo dole se zobrazí „Gradle Build running“ (2). Proces nějakou dobu trvá podle vašeho počítače a internetového připojení, takže **buďte trpěliví!** Pokud chcete sledovat průběh sestavení, klikněte dole v Android Studiu na malé kladívko „build“ (1):

![Gradle běží](../images/Building-the-App/046_BuildRunning.png)

Nyní můžete sledovat proces sestavování:

![Android_Studio_building](../images/Building-the-App/047_BuildDetails.png)

Po dokončení sestavení aplikace zobrazí Android Studio informaci "BUILD SUCCESSFUL". Můžete vidět vyskakovací okno na kterém můžete kliknout na text "locate". Pokud vám to unikne, klikněte na ikonu oznámení (1), aby se zobrazila oznámení, a pak na **locate** (2):

![Sestavení dokončeno](../images/Building-the-App/049_ReopenNotification.png)

**_Pokud sestavení neuspělo, podívejte se do části [Řešení problémů s Android Studiem](../GettingHelp/TroubleshootingAndroidStudio.md)._**

V oznámení klikněte na modrý odkaz "locate":

![Nalezení sestavení](../images/Building-the-App/048_BuildFinished.png) Otevře se správce souborů a ukáže vám soubor apk, který jste právě sestavili.

   ![Umístění souboru apk](../images/Building-the-App/050_LocateAPK.png)

Gratulujeme! Teď máte soubor apk **AAPS** sestavený. V další části dokumentace ho přenesete do svého chytrého telefonu.

```{tip}
Pokud si myslíte, že byste v budoucnu mohli chtít používat chytré hodinky s Android Wear, je teď nejlepší chvíle sestavit apk AAPS Wear, abyste měli jistotu, že bude sladěné s vaším apk AAPS.
```

Pokračujte další fází: [Přenos a instalace **AAPS**](../SettingUpAaps/TransferringAndInstallingAaps.md).



