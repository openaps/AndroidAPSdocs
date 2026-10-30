# Aktualizace na AAPS 3.2.0.4

(update-aaps-3204)=

## Sestavte si aplikaci sami, místo stažení

**Aplikace AAPS (soubor apk) není k dispozici ke stažení kvůli předpisům pro zdravotnické prostředky. Sestavit si aplikaci pro vlastní použití je legální, ale nesmíte dávat kopii jiným!**

Podrobnosti najdete na stránce [Nejčastější otázky uživatelů APS](../UsefulLinks/FAQ.md).

## Specifikace počítače a softwaru pro sestavení AAPS 3.2.0.4

* K sestavení APK může být potřeba konkrétní verze **[Android Studia](https://developer.android.com/studio/)**.

| Verze AAPS              | Doporučená<br/>verze<br/>Android Studia | Alternativní<br/>verze<br/>Android Studia | Gradle | JVM |
| ----------------------- | --------------------------------------------------- | ----------------------------------------------------- | ------ |:--- |
| [3.2.0.4](#version3200) | Hedgehog (2023.1.1)                                 | až po Meerkat                                         | 8.2    | 17  |

„Doporučená verze“ obsahuje odpovídající verzi JVM. Doporučená verze je zároveň nejstarší verze, se kterou můžete **AAPS** sestavit. Ve verzi starší než „doporučená“ sestavení **NEPŮJDE**. Pokud použijete jinou verzi, můžete narazit na problémy s verzí JVM. Pomoc s řešením těchto problémů najdete na stránce [Řešení problémů s Android Studiem](#troubleshooting_androidstudio-uncommitted-changes). Pokud vaše současná verze Android Studia v tabulce není, musíte ho nejdříve aktualizovat.

Verze Gradle je svázaná se zdrojovým kódem. Při stažení nebo aktualizaci zdrojového kódu vždy dostanete správnou verzi Gradle. Je zde uvedená jen pro informaci, nemusíte s ní nic dělat.

* [32bitové systémy Windows](#troubleshooting_androidstudio-unable-to-start-daemon-process) Android Studio nepodporuje. Pamatujte, že **64bitový procesor i 64bitový operační systém jsou povinnou podmínkou.** Pokud váš systém tuto podmínku NESPLŇUJE, musíte vyměnit příslušný hardware nebo software, případně celý systém.

<table class="tg">
<tbody>
  <tr>
    <th class="tg-baqh">OS (Only 64 bit)</th>
    <td class="tg-baqh">Windows 8 or higher</td>
    <td class="tg-baqh">Mac OS 10.14 or higher</td>
    <td class="tg-baqh">Any Linux supports Gnome, KDE, or Unity DE;&nbsp;&nbsp;GNU C Library 2.31 or later</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">CPU (Only 64 bit)</th>
    <td class="tg-baqh">x86_64 CPU architecture; 2nd generation Intel Core or newer, or AMD CPU with support for a <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-windows" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Windows Hypervisor</span></a></td>
    <td class="tg-baqh">ARM-based chips, or 2nd generation Intel Core or newer with support for <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-mac" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Hypervisor.Framework</span></a></td>
    <td class="tg-baqh">x86_64 CPU architecture; 2nd generation Intel Core or newer, or AMD processor with support for AMD Virtualization (AMD-V) and SSSE3</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">RAM</th>
    <td class="tg-baqh" colspan="3"><p align="center">8GB or more</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Disk</th>
    <td class="tg-baqh" colspan="3"><p align="center">At least 30GB free space. SSD is recommended.</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Resolution</th>
    <td class="tg-baqh" colspan="3"><p align="center">Minimálně 1280 × 800 <br></td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Internet</th>
    <td class="tg-baqh" colspan="3"><p align="center">Broadband</td>
  </tr>
</tbody>
</table>

**Důrazně doporučujeme (není to povinné) použít SSD (Solid State Disk) místo HDD (Hard Disk Drive), protože sestavení souboru APK AAPS pak zabere méně času.**  Soubor APK **AAPS** můžete sestavit i na HDD. Pokud to uděláte, dokončení procesu sestavení může trvat dlouho, ale jakmile začnete, můžete ho nechat bez dozoru.

## Pomoc a podpora při sestavování verze 3.2.0.4

Pokud při sestavování aplikace **AAPS** narazíte na potíže, existuje samostatná část [**Řešení problémů s Android Studiem**](https://androidaps.readthedocs.io/en/3.2/GettingHelp/TroubleshootingAndroidStudio.html). Nejdříve si prosím přečtěte ji.

Pokud si myslíte, že je v návodu k sestavení něco špatně, chybí nebo je to nejasné, nebo pokud si stále nevíte rady, obraťte se na skupinu uživatelů **AAPS** na [Facebooku](https://www.facebook.com/groups/AndroidAPSUsers) nebo na [Discordu](https://discord.gg/4fQUWHZ4Mw). Pokud chcete něco změnit sami (aktualizovat snímky obrazovky _apod._), pošlete prosím [pull request (PR)](../SupportingAaps/HowToEditTheDocs.md).

```{note}
Tato stránka obsahuje ukázkové obrázky pro nové (**New**) i staré (**Classic**) uživatelské rozhraní Android Studia.
```

## Přehled aktualizace z 3.2.0.x na 3.2.0.4

```{contents} Steps for updating to 3.2.0.4
:depth: 1
:local: true
```

### Exportujte své současné nastavení

Exportujte nastavení ze stávající verze **AAPS** ve svém telefonu. Možná ho nebudete potřebovat, ale opatrnosti není nikdy dost.

Pokud si nepamatujete, jak to udělat, podívejte se na stránku [Export a import nastavení](ExportImportSettings.md).

### Aktualizujte svou místní kopii AAPS

* Otevřete svůj stávající projekt AAPS v Android Studiu. Možná budete muset vybrat svůj projekt. Klikněte (dvakrát) na projekt AAPS.

![Android Studio – výběr projektu](../images/update/01_ProjectSelection.png)

<br>

![Android Studio – výběr projektu](https://androidaps.readthedocs.io/en/3.1/_images/01_ProjectSelection.png)

* V nabídce Android Studia vyberte Git -> Fetch

![Nabídka Android Studia – Git – Fetch](../images/update/02_GitFetch.png)

<br>

![Nabídka Android Studia – Git – Fetch](https://androidaps.readthedocs.io/en/3.1/_images/02_GitFetch.png)

* V pravém dolním rohu uvidíte zprávu, že Fetch proběhl úspěšně.

![Nabídka Android Studia – Git – Fetch úspěšný](../images/update/03_GitFetchSuccessful.png)

<br>

![Nabídka Android Studia – Git – Fetch úspěšný](https://androidaps.readthedocs.io/en/3.1/_images/03_GitFetchSuccessful.png)

* Nyní v nabídce vyberte Git -> Pull

![Nabídka Android Studia – Git – Pull](../images/update/04_GitPull.png)

<br>

![Nabídka Android Studia – Git – Pull](https://androidaps.readthedocs.io/en/3.1/_images/04_GitPull.png)

* Všechny možnosti nechte, jak jsou (origin/master), a vyberte Pull

![Android Studio – Git – dialog Pull](../images/update/05_GitPullOptions.png)

<br>

![Android Studio – Git – dialog Pull](https://androidaps.readthedocs.io/en/3.1/_images/05_GitPullOptions.png)

* Počkejte, než stahování skončí. Průběh uvidíte jako informaci ve spodní liště. Po dokončení uvidíte zprávu o úspěchu.

  ```{note}
  Aktualizované soubory se mohou lišit! Nic to neznamená
  ```


![Android Studio – Pull úspěšný](../images/update/06_GitPullSuccess.png)

<br>

![Android Studio – Pull úspěšný](https://androidaps.readthedocs.io/en/3.1/_images/06_GitPullSuccess.png)

* Spustí se synchronizace Gradle (Gradle Sync), která stáhne některé závislosti. Počkejte, až skončí.

![Android Studio – Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

<br>

![Android Studio – Gradle Sync](https://androidaps.readthedocs.io/en/3.1/_images/40_BackgroundTasks.png)

### Vyberte verzi JVM 17

- Otevřete zobrazení Gradle kliknutím na slona (1) na pravé straně Android Studia, otevřete nastavení (2) a vyberte **Gradle Settings** (3):

![Otevření Gradle Settings](../images/studioTroubleshooting/161_GradleSettings.png)

<br>

![Otevření Gradle Settings](../images/studioTroubleshooting/09_GradleSettings.png)

- V poli **Gradle JDK** (1) zkontrolujte, zda je vybraná odpovídající verze: **jbr-17**. Pokud ne, klikněte na pole a podívejte se, zda už je v seznamu k dispozici. Pokud v seznamu není (snímek obrazovky níže ukazuje počítač, kde je k dispozici jen **jbr-21**), vyberte **Download JDK...** (2).

![Výběr Download JDK](../images/studioTroubleshooting/162_DownloadJDK.png)



- V poli Version (1) vyberte **17**. V poli Vendor (2) vyberte JetBrains Runtime nebo libovolného dodavatele. Location (3): neměňte.

![Výběr JDK 17](https://androidaps.readthedocs.io/en/3.2/_images/163_JDKSelection.png)

- Zavřete dialog **Settings** tlačítkem **OK**.

### Vyberte větev AAPS 3.2.0.4

- Vlevo dole vyberte symbol Git, klikněte pravým tlačítkem na 3.2.0.4 a zvolte Checkout.

![Výběr Download JDK](../images/studioTroubleshooting/17_Checkout.png)

<br>

![Výběr Download JDK](../images/studioTroubleshooting/17_CheckoutOld.png)

### Synchronizujte projekt s Gradle

```{admonition} WARNING!
:class: warning
**Nikdy Gradle neaktualizujte.** Vždy ho jen synchronizujte s projektem.
```

V novém rozhraní použijte ikonu slona a Sync Project with Gradle Files (nebo postupujte podle [tohoto návodu](#gradle-resync)).

![Sync Project with Gradle Files](../images/studioTroubleshooting/06_GradleResyncElephant.png)

Nebo ([tento návod](https://androidaps.readthedocs.io/en/3.2/GettingHelp/TroubleshootingAndroidStudio.html#gradle-resync)) pro klasické rozhraní.

![Sync Project with Gradle Files](../images/studioTroubleshooting/06_GradleResyncElephantOld.png)

### Sestavte podepsané APK 3.2.0.4

Váš zdrojový kód je nyní v aktuální vydané verzi a všechny předpoklady jsou zkontrolované. Nyní je čas sestavit podepsané APK podle popisu v [části o sestavení podepsaného APK](#Building-APK-generate-signed-apk).

### Přeneste a nainstalujte APK 3.2.0.4

APK musíte přenést do telefonu, abyste ho mohli nainstalovat.

```{note}
Pokud jste sestavení dokončili se stejným stávajícím úložištěm klíčů v Android Studiu, nemusíte stávající aplikaci z telefonu odstraňovat. Při instalaci APK postupujte podle výzev k instalaci aktualizace.
V jiných případech, například když jste pro podepsané APK vytvořili v Android Studiu nové úložiště klíčů, musíte starou aplikaci před instalací APK smazat. **Nezapomeňte exportovat nastavení!**
```

Viz návod [Přenos a instalace AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md)

### Kontrola verze AAPS 3.2.0.4 v telefonu

Po instalaci nového APK můžete verzi AAPS v telefonu zkontrolovat tak, že klepnete na nabídku se třemi tečkami vpravo nahoře a potom na O aplikaci. Měli byste vidět aktuální verzi.

