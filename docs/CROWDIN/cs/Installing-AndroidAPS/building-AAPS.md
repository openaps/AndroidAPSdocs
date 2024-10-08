# Sestavení AAPS

## Vyrobte si místo stažení

**Aplikace AAPS (soubor apk) není k dispozici ke stažení, a to kvůli předpisům týkajícím se zdravotnických prostředků. Je legální vytvořit aplikaci pro své vlastní použití, ale nesmíte dát kopii ostatním!**

Podrobnosti viz [Oddíl FAQ](../Getting-Started/FAQ.md).

(Building-APK-recommended-specification-of-computer-for-building-apk-file)=

## Specifikace hardware a softwaru pro vytvoření AAPS

- Please use the **[Android Studio version called at least Hedgehog or one more recent like Iguana, Jellyfish, and Koala](https://developer.android.com/studio/)** to build the apk. <u>**Do not use the Ladybug version.**</u> Older versions of Android Studio need to be updated first!
- Na [32-bitových systémech Windows](troubleshooting_androidstudio-unable-to-start-daemon-process) není program Android Studio podporován. Mějte prosím na paměti, že 64bitový CPU a 64bitový OS jsou nutné podmínky. Pokud je váš systém nesplňuje, musíte vyměnit příslušný hardware nebo software nebo celý systém.

<table class="tg">
<thead>
  <tr>
    <th class="tg-baqh">OS (pouze 64bitový)</th>
    <th class="tg-baqh">Windows 8 nebo novější</th>
    <th class="tg-baqh">Mac OS 10.14 nebo novější</th>
    <th class="tg-baqh">Jakýkoli Linux, který podporuje Gnome, KDE nebo Unity DE;&nbsp;&nbsp;GNU C knihovnu 2.31 nebo novější</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-baqh"><p align="center">CPU (pouze 64bitový)</td>
    <td class="tg-baqh">CPU s architekturou x86_64; 2. generace Intel Core nebo novější, nebo AMD CPU s podporou <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-windows" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Windows Hypervisor</span></a></td>
    <td class="tg-baqh">Procesory založené na ARM nebo Intel Core 2. generace nebo novější s podporou <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-mac" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Hypervisor.Framework</span></a></td>
    <td class="tg-baqh">CPU s architekturou x86_64; Intel Core 2. generace nebo novější nebo processor AMD s podporou AMD Virtualization (AMD-V) a SSSE3</td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">RAM</td>
    <td class="tg-baqh" colspan="3"><p align="center">min. 8 GB</td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">Pevný disk</td>
    <td class="tg-baqh" colspan="3"><p align="center">Alespoň 30 GB volného místa. Je doporučeno SSD.</td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">Rozlišení</td>
    <td class="tg-baqh" colspan="3"><p align="center">1280 x 800 Minimum <br></td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">Internet</td>
    <td class="tg-baqh" colspan="3"><p align="center">Širokopásmové připojení</td>
  </tr>
</tbody>
</table>

\*\*Důrazně se doporučuje (není povinné) používat SSD (solid state disk) místo HDD (pevný disk), protože bude trvat méně času, než vytvoříte soubor AAPS. \* Stále můžete použít HDD, když vytváříte soubor apk **AAPS**. Pokud to uděláte, dokončení procesu sestavení může trvat dlouho, ale jakmile začnete, můžete ho nechat bez dozoru.

## Pomoc a podpora během procesu sestavení

Pokud narazíte na potíže v procesu vytváření aplikace **AAPS**, projděte nejdříve oddíl [**Řešení potíží se systémem Android Studio**](../Installing-AndroidAPS/troubleshooting_androidstudio).

Pokud si myslíte, že je v instrukcích k procesu sestavení chyba, něco chybí, přijde vám matoucí, nebo s tím stále zápasíte, kontaktujte prosím ostatní uživatele **AAPS** na [Facebooku](https://www.facebook.com/groups/AndroidAPSUsers) nebo [Discordu](https://discord.gg/4fQUWHZ4Mw). Pokud chcete sami něco změnit (aktualizovat snímek obrazovky apod.), odešlete [pull request (PR)] (../make-a-PR.md).

## Návod k sestavení aplikace AAPS krok za krokem

```{admonition} WARNING
:class: warning
If you have built AAPS before, you don't need to take all the following steps again.
Please jump directly to the [update guide](../Installing-AndroidAPS/Update-to-new-version)!
```

Základní kroky k sestavení apk souboru **AAPS** jsou následující:

4.1 [Instalace Git](Install-Git)

4.2 [Instalace Android Studia](Building-APK-install-android-studio)

4.3 [Stažení kódu AAPS](Building-APK-download-AAPS-code)

4.4 [Nastavení cesty ke Git v předvolbách Android Studia](Building-APK-set-git-path-in-preferences)

4.5 [Sestavení "podepsaného" apk souboru AAPS](Building-APK-generate-signed-apk)

V tomto průvodci najdete _příklady_ snímků obrazovky z vytváření apk souboru **AAPS**. Protože **Android Studio** - software, který používáme k sestavení aplikace **AAPS** - je pravidelně aktualizován, tyto screenshoty nemusí být s vaší instalací totožné, ale přesto by mělo být možné postup následovat.

Jelikož **Android Studio** běží na platformě Windows, Mac OS X i Linux, mohou existovat menší rozdíly v krocích na jednotlivých platformách.

(Install-Git)=

### Instalace gitu (pokud ho ještě nemáte)

```{admonition} Why Git? 
:class: dropdown

Git is known as a “_Versioning Control System_” (VCS).\
Git is a program that allows you to track changes in code and to collaborate with others. You will use Git to make a copy of the **AAPS** source code from the GitHub website to your local computer. Then, you will use Git on your computer to build the **AAPS** application (apk). 
```

#### Postup instalace Gitu

1. Zkontrolujte, že již nemáte **Git** nainstalován. Můžete to udělat zadáním „git“ do vyhledávacího panelu Windows – pokud vidíte \*\*„Git bash“ \*\* nebo jinou aplikaci Gitu, je již nainstalován a můžete jít rovnou na [Instalace Android Studia](Building-APK-install-android-studio).

![Git\_installed](../images/Building-the-App/001_check_git_installed.png)

2. Pokud nemáte nainstalovaný Git, stáhněte a nainstalujte si nejnovější pro váš systém [**zde**](https://git-scm.com/downloads). Jakákoliv nedávná verze Gitu by měla fungovat, vyberte správnou verzi pro váš systém, ať je to Mac, Windows nebo Linux.

**Poznámka pro uživatele Macu:** webová stránka Gitu vás také navede k instalaci programu "homebrew", který pomůže s instalací. Pokud instalujete git přes homebrew, není třeba měnit žádné předvolby.

(Make_a_note_of_Git_path)=

- V průběhu instalace, když budete požádání o "zadání umístění", si poznamenejte **cestu k instalaci Git**, kterou budete potřebovat v dalším kroku. Bude se jednat o cestu jako "C:\Program Files\Git\cmd\git.exe".

- V průběhu instalace Gitu jen přijměte všechny výchozí možnosti.

- Po instalaci, pokud jste si zapomněli poznamenat cestu k instalaci Gitu, najdete program takto: napište "git" do vyhledávacího panelu Windows, klikněte pravým tlačítkem myši na "Git bash", vyberte "open file location" a přejeďte myší na ikonu "Git bash", která pak odhalí, kde je instalována.

- Před dalším krokem restartujte počítač.

(Building-APK-install-android-studio)=

### Instalace Android Studio

- **Musíte zůstat online při provádění dalších kroků, protože Android Studio bude stahovat několik aktualizací**

```{admonition} What is Android Studio?
:class: dropdown
Android Studio is a program which runs on your computer. It allows you to download source code from the internet (using Git) and build smartphone (and smartwatch) apps. You cannot "break" a current, looping version of **AAPS** which you might have running on a smartphone by building a new or updated app on your PC with Android Studio, these are totally separate processes. 
```

Následující snímky obrazovky byly vytvořeny z Android Studia ve verzi **Hedgehog** a měly by být shodné s novějšími verzemi.

Jedna z nejdůležitějších věcí při instalaci aplikace Android Studio: Buďte trpěliví! Během instalace a nastavení aplikace Android Studio se stahuje spousta věcí, což zabere dost času.

**Download a supported version of Android Studio (Hedgehog, Iguana, Jellyfish or Koala - not Ladybug)** from [**here**](https://developer.android.com/studio/archive), locate it in your browser downloads folder, and install it on your computer:

![Stažení Android Studia](../images/Building-the-App/01_InstallAS_Hedgehog.png)

Při prvním spuštění Android Studia budete přivítáni takto:

![Vítejte](../images/Building-the-App/02_Welcome_AS_Hedgehog.png)

Vyberte "Další":

![Vyberte součásti](../images/Building-the-App/03_choose_AS_components.png)

Ponechte zaškrtnutá políčka a klikněte na "Další":

![Vyberte umístění](../images/Building-the-App/04_AS_Install_location.png)

Ponechte instalaci ve výchozím umístění a zvolte "Další":

![Vyberte složku Start menu](../images/Building-the-App/04_AS_Install_location.png)

Při dotazu na výběr složky Start Menu jednoduše vyberte "Install". Nyní budete muset počkat několik minut, než se Android Studio nainstaluje. Až uvidíte, že je instalace dokončena, klikněte na "Další":

![Instalace je dokončena](../images/Building-the-App/06_Installation_Complete.png)

Nyní klikněte na "Dokončit":

![Ukončení instalace](../images/Building-the-App/07_CloseAS_Setup.png)

Android Studio se nyní spustí.

Pokud jste dotázali, zda chcete importovat nastavení, vyberte "Neimportovat nastavení". Nechceme importovat nastavení z předchozích instalací:

![Do not import settings](../images/studioSetup/01_ImportSettings.png)

Rozhodněte, zda chcete sdílet data s Googlem nebo ne (pokud si nejste jisti, vyberte "Don't send").

![Sdílení dat s Google](../images/Building-the-App/08_Googlesharedata.png)

Nyní obdržíte zprávu o chybějící sadě pro vývoj softwaru (Software Development Kit, SDK) (nebojte se, toto bude brzy vyřešeno), zvolte "Další":

![Chybějící SDK](../images/Building-the-App/09_MissingSDK.png)

Software by měl automaticky vybrat potřebné (SDK) a vybrat umístění.

```{admonition} What is an Android SDK?
:class: dropdown

In order to run **AAPS** on the phone the application needs to integrate with Android itself. Android provides “_software development kits_” (SDK) which allow apps like **AAPS** to interface with an Android operating system.
```

Balíček platforem SDK **neodpovídá** verzi, která běží na vašem telefonu, ale k sestavení **AAPS**. **AAPS** verze 3.2 (a novější) je postavené na API úrovně 34, která je v **Hedgehog** verzi **Android Studio** vybrána automaticky. Proto jednoduše klikněte na "Další":

![Nastavení komponentů SDK](../images/Building-the-App/10_SDKComponents_setup.png)

Když jste požádáni o kontrolu nastavení, stačí vybrat "Další":

![Zkontrolujte nastavení](../images/Building-the-App/11_Verify_settings.png)

Po dotazu na licenční smlouvu vyberte "Přijmout" a poté klikněte na "Dokončit":

![Licenční smlouva](../images/Building-the-App/12_Licence_agreement.png)

> **_Poznámka:_** V závislosti na vašem nastavení se mohou licence k přijetí lišit od toho, co je zobrazeno na snímku obrazovky.

Počkejte, dokud Android Studio nestáhne další komponenty. Může to trvat několik minut:

![Stažení komponent](../images/Building-the-App/13_downloading_components.png)

Jakmile je vše staženo, tlačítko "Dokončit" zmodrá a můžete na něj kliknout:

![Dokočeno stažení komponent](../images/Building-the-App/14_finished_downloading_components.png)

Nyní uvidíte uvítací obrazovku "Welcome to Android Studio".

![Vítejte](../images/Building-the-App/15_Welcome_AS.png)

(Building-APK-download-AAPS-code)=

### Stažení zdrojového kódu AAPS

```{admonition} Why can it take a long time to download the AAPS code?
:class: dropdown

The first time **AAPS** is downloaded, Android Studio will connect over the internet to the Github website to download the source code for **AAPS**. This should take about 1 minute. 

Android Studio will then use **Gradle** (a development tool in  Android studio) to identify other components needed to install these items on your computer. 

```

Na úvodní obrazovce Android Studia zkontrolujte, že **Projects**" (1) jsou zvýrazněny na levé straně. Poté klikněte na "**Get from VCS**" (2) vpravo:

![Get\_from\_VCS](../images/Building-the-App/16_Get_from_VCS.png)

- Nyní řekneme Android Studiu, odkud kód získat:

- Zvolte "Adresa URL úložiště" (výchozí) vlevo (1).

- Ve výchozím nastavení by měl být vybrán verzovací systém „Git“ (2).

Nyní zkopírujte tuto adresu URL:

```
https://github.com/nightscout/AndroidAPS.git
```

a vložte ji do textového pole URL (3).

- Zkontrolujte, zda je vhodný (výchozí) adresář pro uložení klonovaného kódu (4).

```{admonition} INFORMATION
:class: information
Make a note of the directory. It is where your sourcecode is stored!
```

- Nyní spusťte klonování kódu kliknutím na tlačítko "Clone" (5).

![Select\_URL](../images/Building-the-App/17_select_URL.png)

Nyní uvidíte obrazovku s informací, že se repozitář klonuje:

![cloning\_repository](../images/Building-the-App/18_cloning_repository.png)

V určitém okamžiku můžete obdržet dotaz, jestli chcete projektu důvěřovat. Klikněte na "Trust project":

![Trust project](../images/Building-the-App/18a_trust_project.png)

Pouze pro uživatele Windows: Pokud firewall požaduje oprávnění, udělte mu je:

![Firewall permission java](../images/AndroidStudio361_18.png)

Po úspěšném dokončení klonování repozitáře otevře Android Studio naklonovaný projekt.

Klepněte na ozubené kolečko vpravo nahoře a vyberte "**Switch to Classic UI...**" pro návrat k zobrazení použitého v této dokumentaci.

Pokud ikonu ozubeného kolečka nevidíte, nedělejte si starosti. Zobrazení Classic UI už máte spuštěné!

![Switch to Classic UI](../images/Building-the-App/OldUI.png)

Restartujte Android Studio, aby se projevily provedené změny.

![Confirm restart of Android Studio](../images/Building-the-App/18b_ConfirmRestartUI.png)

Může se objevit jedno nebo obě následující upozornění o probíhajících procesech. Obě můžete bezpečně zrušit.

![Confirm abort background processes](../images/Building-the-App/18c_AbortBackgroundTasks.png) ![Confirm process AndroidAPS import](../images/Building-the-App/18d_AbortProcessImport.png)

Až Android Studio znovu nastartuje, trpělivě čekejte (může to trvat několik minut) a především **neaktualizujte** projekt, jak je vám navrhováno ve vyskakovacím okně.

![AS\_download\_dependencies](../images/Building-the-App/19_downloading_dependencies.png)

```{admonition} NEVER UPDATE GRADLE!
:class: warning

Android Studio might recommend updating the gradle system. **Never update gradle!** This will lead to difficulties.
```

_Volitelně_ - pokud chcete odstranit vyskakování okna **"project update recommended"**, klikněte na modrý text "More" (1). V dialogovém okně pak vyberte "Don't ask for this project" (2).

![AS\_close\_gradle\_popup](../images/Building-the-App/20_close_popup.png)

Pouze pro uživatele Windows:
Pokud jste od instalace nebo aktualizace Git zatím nerestartovali počítač, vypněte nyní Android Studio. Potom restartujte počítač a Android Studio spusťte znovu.

(Building-APK-set-git-path-in-preferences)=

### Nastavte v předvolbách Android Studio cestu ke gitu

Nyní nastavíme v Android Studiu cestu k nainstalovanému systému [Git](Install-Git).

- Pouze pro uživatele Windows: Ujistěte se, že jste počítač po [instalaci Git](Install-Git) restartovali.
- Otevřete **Android Studio** (můžete ho spustit přes Vyhledávání ve Start menu).
- V levém horním rohu **Android Studia** přejděte na _File-Settings_ (Windows) nebo _Android Studio > Preferences_ (Mac). Dojde k otevření následujícího okna. Rozbalte menu "Version control" (1):

![version\_control](../images/Building-the-App/21_AS_version_control.png)

- Nyní vyberte "**Git**" (2).
- Ujistěte se, že v dolní střední části je jako Update method vybrána možnost "Merge" (3).
- Zkontrolujte, jestli **Android Studio** dokáže automaticky najít správnou cestu k souboru **git.exe** kliknutím na tlačítko "Test" (4):

![Gitpath](../images/Building-the-App/22_Git_path.png)

- Pokud je automatické nastavení v pořádku, vedle cesty bude zobrazena vaše aktuální verze **Git**.

  ![Git\_version\_displayed](../images/Building-the-App/23_Git__path_success.png)

- Pokud zjistíte, že **git.exe** není nalezen automaticky nebo že kliknutím na tlačítko „Test“ dojde k chybě (1), můžete buď zadat ručně cestu, kterou jste si [dříve](Make_a_note_of_Git_path) uložili, nebo kliknout na ikonu složky (2) a ručně vybrat adresář, kde je **git.exe** uložen:

  ![Git not found](../images/studioSetup/13_GitVersionError.png)

- Pokud si nejste jistí, kde je Git instalován, použijte [vyhledávání](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html) ve Windows Exploreru. Detailní instrukce jsou popsány [výše](Make_a_note_of_Git_path).

- Pokud jste cestu ke Gitu zadali ručně, zkontrolujte správnost nastavení tlačítkem "Test", jak je popsáno výše.

Když je vedle cesty zobrazena verze Gitu (viz snímek obrazovky výše), úspěšně jste tuto fázi dokončili a můžete zavřít okno "Settings" v Android Studiu klepnutím na tlačítko "**OK**" (5):

![Git\_path\_OK](../images/Building-the-App/23a_Git_path_OK.png)

(Building-APK-generate-signed-apk)=

### Sestavení "podepsaného" APK aplikace AAPS

```{admonition} Why does the AAPS app need to be "signed"?
:class: dropdown

Android requires each app to be _signed_, to ensure that it can only be updated later from the same trusted source that released the original app. For more information on this topic, follow [this link](https://developer.android.com/studio/publish/app-signing.html#generate-key). For our purposes, this just means that we generate a signing or "keystore" file and use it when we build the **AAPS** app.
```

- V panelu nabídek klikněte na "Build" (1) a vyberte "Generate Signed Bundle/APK (2)

![Build apk](../images/Building-the-App/25_build_apk.png)

- Vyberte variantu „APK“ namísto předvybrané „Android App Bundle“ a klikněte na „Next“:

![APK instead of bundle](../images/Building-the-App/26_generate_APK.png)

- Na další obrazovce zkontrolujte, že "Module" je nastavený na "AAPS.app" (1).

(Building-APK-wearapk)=

```{admonition} INFORMATION!
:class: information
Pokud chcete vytvářet aplikaci pro vaše hodinky, musíte vybrat AAPS.wear!
```

- Kliknutím na "Create new..." (2) začnete vytvářet váš "keystore" soubor (úložiště klíčů).

```{admonition} INFORMATION!
:class: information
You will only need to create the keystore once.
If you have build AAPS before, do NOT create a new keystore but select your existing one!
```

**_Poznámka:_** Keystore je soubor, ve kterém jsou uložené informace pro podepisování aplikací. Tento soubor je zašifrovaný a chráněný heslem.

![Create\_key\_store](../images/Building-the-App/27_new_keystore.png)

- Klikněte na ikonu "adresáře" (1) pro výběr cesty k vašemu kyestore soubru ve vašem počítači:

![Create key store](../images/Building-the-App/28_new_keystore_path.png)

- Klikněte na rozbalovací nabídku (1) a vyberte, kam chcete svůj keystore soubor uložit. V tomto příkladu je soubor uložen ve složce "Moje dokumenty" (2). Neukládejte keystore do stejné složky jako soubory Android Studia (StudioProject). Zadejte jednoduchý název vašeho kyestore souboru (3) a potvrďte ho kliknutím na "OK" (4):

![Create key store](../images/Building-the-App/29_choose_keystore_file.png)

Tím se vrátíte na předchozí obrazovku. Na té bude zobrazena cesta k uložení vašeho keystore souboru.

```{admonition} WARNING!
:class: warning
Make sure to note down for yourself where your keystore is stored. You will need it when you build the next AndroidAPS update!
```

Nyní si vyberte (a poznamenejte) jednoduché heslo, zadejte ho do políčka Password (1) a potvrďte ho v políčku Confirm (2).  Heslo ke keystore souboru a uloženým klíčům nemusí být složité. Pokud v budoucnosti heslo zapomenete, podívejte se na [řešení problému se ztraceným keystore souborem](troubleshooting_androidstudio-lost-keystore).

Výchozí alias (3) pro váš klíč je "key0", ponechte to beze změny.

Teď potřebujete heslo k vašemu klíči. Pro zjednodušení, pokud chcete, můžete použít stejné heslo jako k vašemu keystore souboru. Zadejte heslo (4) a potvrďte ho (5).

```{admonition} WARNING!
:class: warning
Note down these passwords! You will need them when you build the next AAPS update!
```

Platnost (6) je ve výchozím stavu 25 let. Ponechte to tak, jak je.

Zadejte vaše jméno a příjmení (7). Žádné další informace není nutné zadávat.

Pro pokračování klikněte na "OK" (8):

![Select key store path](../images/Building-the-App/30_new_keystore.png)

V okně "Generate signed bundle or APK" teď bude zobrazena cesta k vašemu keystore souboru. Zadejte znovu heslo k vašemu keystore souboru (1) a klíči (2) a zaškrtněte checkbox "Remember passwords" (3), abyste je příště nemuseli zadávat znovu (typicky při sestavování aktualizované verze AAPS). Klikněte na tlačítko "Next" (4):

![Remember passwords](../images/Building-the-App/31_generate_APK.png)

Na další obrazovce vyberte variantu "fullRelease" (1) a klikněte na tlačítko "Create" (2).

![Select build variant](../images/Building-the-App/32_full_release.png)

Android Studio teď sestaví aplikační soubor APK **AAPS**. Ve spodní části obrazovky se ukáže hlášení "Gradle Build Running". Proces bude nějakou dobu trvat, v závislosti na výkonu vašeho počítače a rychlosti připojení na internet, tak buďte **trpělivý!** Pokud chcete sledovat průběh sestavovaání aplikace, klikněte na malou ikonu kladiva s nápisem "Build" v dolní části okna Android Studia:

![Gradle Running](../images/Building-the-App/33_Studio_building1.png)

Nyní můžete sledovat proces sestavování:

![Android\_Studio\_building](../images/Building-the-App/34_Studio_building2.png)

Po dokončení sestavení aplikace zobrazí Android Studio informaci "BUILD SUCCESSFUL". Můžete vidět vyskakovací okno na kterém můžete kliknout na text "locate". Pokud vám unikne, otevřete si seznam oznámení kliknutím na oznámení "locate or analyze the APK" (žlutý rámeček) ve spodní části obrazovky:

![Build finished](../images/Building-the-App/35_Studio__built_success.png)

_Pokud bylo sestavení neúspěšné, podívejte se do sekce [Řešení problémů](../Installing-AndroidAPS/troubleshooting_androidstudio)._

V oznámení klikněte na modrý odkaz "locate":

![Locate build](../images/Building-the-App/35_Studio__built_locate.png)
Otevře se Windows Explorer / souborový manažer. Přejděte do adresáře "full" (1) > "release" (2).

![File location apk](../images/Building-the-App/36_locate_apk.png)

Otevřete adresář "release". Soubor "app-full-release.apk" (1) je APK soubor aplikace **AAPS**, který jste právě vytvořili a který následně přenesete do vašeho telefonu, jak je popsáno v další části dokumentace:

![apk\_file](../images/Building-the-App/37_full_release_apk.png)

Congratulations! Nyní máte vytvořený APK soubor aplikace **AAPS** a můžete se přesunout k následující sekci [Přesun a instalace **AAPS**](Transferring-and-installing-AAPS.md).
