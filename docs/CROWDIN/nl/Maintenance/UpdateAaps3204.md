# Bijwerken naar AAPS 3.2.0.4

(update-aaps-3204)=

## Zelf bouwen, in plaats van downloaden

**De AAPS-app (een apk-bestand) is niet te downloaden, vanwege de regels voor medische hulpmiddelen. Je mag de app legaal bouwen voor eigen gebruik, maar je mag geen kopie aan anderen geven!**

Zie de [FAQ-pagina](../UsefulLinks/FAQ.md) voor meer informatie.

## Computer en software om AAPS 3.2.0.4 te bouwen

* Om de apk te bouwen kan een bepaalde versie van **[Android Studio](https://developer.android.com/studio/)** nodig zijn.

| AAPS versie             | Aanbevolen<br/>Android Studio<br/>versie | Andere<br/>Android Studio<br/>versie | Gradle | JVM |
| ----------------------- | ---------------------------------------------------- | ------------------------------------------------ | ------ |:--- |
| [3.2.0.4](#version3204) | Hedgehog (2023.1.1)                                  | tot en met Meerkat                               | 8.2    | 17  |

De "aanbevolen versie" heeft al de juiste JVM-versie aan boord. De aanbevolen versie is ook de laagste versie waarmee je **AAPS** kunt bouwen. Met een versie die ouder is dan de "aanbevolen" versie kun je **NIET** bouwen. Met een andere versie kun je problemen krijgen met de JVM-versie. Zie de pagina [Problemen met Android Studio oplossen](#incompatible-gradle-jvm) voor hulp bij deze problemen. Staat je huidige versie van Android Studio niet in de tabel? Werk Android Studio dan eerst bij.

De Gradle-versie hoort bij de broncode. Als je de broncode downloadt of bijwerkt, krijg je altijd de juiste Gradle-versie. Hij staat hier alleen ter informatie. Je hoeft er niets mee te doen.

* [32-bit Windows-systemen](#troubleshooting_androidstudio-unable-to-start-daemon-process) worden niet ondersteund door Android Studio. Let op: **een 64-bit processor en een 64-bit besturingssysteem zijn allebei verplicht.** Voldoet je systeem hier NIET aan, dan moet je de hardware of software in kwestie vervangen, of het hele systeem.

<table class="tg">
<tbody>
  <tr>
    <th class="tg-baqh">OS (Alleen 64 bit)</th>
    <td class="tg-baqh">Windows 8 of hoger</td>
    <td class="tg-baqh">Mac OS 10.14 of hoger</td>
    <td class="tg-baqh">Elke Linux die Gnome, KDE of Unity DE ondersteunt;&nbsp;&nbsp;GNU C Library 2.31 of hoger</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">CPU (Alleen 64 bit)</th>
    <td class="tg-baqh">x86_64 CPU-architectuur; 2e generatie Intel Core of nieuwer, of AMD CPU met ondersteuning voor een <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-windows" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Windows Hypervisor</span></a></td>
    <td class="tg-baqh">ARM-chips, of 2e generatie Intel Core of nieuwer met ondersteuning voor <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-mac" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Hypervisor.Framework</span></a></td>
    <td class="tg-baqh">x86_64 CPU-architectuur; 2e generatie Intel Core of nieuwer, of AMD-processor met ondersteuning voor AMD Virtualization (AMD-V) en SSSE3</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">RAM</th>
    <td class="tg-baqh" colspan="3"><p align="center">8GB of meer</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Schijf</th>
    <td class="tg-baqh" colspan="3"><p align="center">Minstens 30GB vrije ruimte. SSD wordt aanbevolen.</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Schermresolutie</th>
    <td class="tg-baqh" colspan="3"><p align="center">Minimaal 1280 x 800 <br></td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Internet</th>
    <td class="tg-baqh" colspan="3"><p align="center">Breedband</td>
  </tr>
</tbody>
</table>

**We raden sterk aan (niet verplicht) om een SSD (Solid State Disk) te gebruiken in plaats van een HDD (harde schijf), omdat het bouwen van het AAPS apk-bestand dan minder tijd kost.**  Je kunt ook een HDD gebruiken om het **AAPS** apk-bestand te bouwen. Als je dat doet, kan het bouwen lang duren. Maar als het eenmaal gestart is, kun je het zonder toezicht laten lopen.

## Hulp bij het bouwen van 3.2.0.4

Heb je problemen bij het bouwen van de **AAPS** app? Er is een aparte sectie [**Problemen met Android Studio oplossen**](https://androidaps.readthedocs.io/en/3.2/GettingHelp/TroubleshootingAndroidStudio.html). Kijk daar eerst.

Denk je dat iets in de bouwinstructies fout, onvolledig of onduidelijk is, of lukt het je nog steeds niet? Vraag het dan aan andere **AAPS**-gebruikers in de groep op [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) of op [Discord](https://discord.gg/4fQUWHZ4Mw). Wil je zelf iets aanpassen (schermafbeeldingen bijwerken _enz._)? Dien dan een [pull request (PR)](../SupportingAaps/HowToEditTheDocs.md) in.

```{note}
Deze pagina toont voorbeeldafbeeldingen voor zowel de **nieuwe** (New) als de oude (**Classic**) gebruikersinterface van Android Studio.
```

## Overzicht: bijwerken van 3.2.0.x naar 3.2.0.4

```{contents} Steps for updating to 3.2.0.4
:depth: 1
:local: true
```

### Exporteer je huidige instellingen

Exporteer je instellingen uit de **AAPS**-versie die nu op je telefoon staat. Misschien heb je ze niet nodig, maar het is beter om het zeker te doen.

Weet je niet meer hoe dit moet? Kijk dan op de pagina [Back-ups maken en terugzetten](ExportImportSettings.md).

### Werk je lokale kopie van AAPS bij

* Open je bestaande AAPS-project in Android Studio. Misschien moet je je project kiezen. Klik (dubbel) op het AAPS-project.

![Android Studio - project kiezen (Select Project)](../images/update/01_ProjectSelection.png)

<br>

![Android Studio - project kiezen (Select Project)](https://androidaps.readthedocs.io/en/3.1/_images/01_ProjectSelection.png)

* Kies in de menubalk van Android Studio Git -> Fetch

![Android Studio-menu - Git - Fetch](../images/update/02_GitFetch.png)

<br>

![Android Studio-menu - Git - Fetch](https://androidaps.readthedocs.io/en/3.1/_images/02_GitFetch.png)

* Rechtsonder zie je een melding dat Fetch gelukt is.

![Android Studio-menu - Git - Fetch gelukt](../images/update/03_GitFetchSuccessful.png)

<br>

![Android Studio-menu - Git - Fetch gelukt](https://androidaps.readthedocs.io/en/3.1/_images/03_GitFetchSuccessful.png)

* Kies nu in de menubalk Git -> Pull

![Android Studio-menu - Git - Pull](../images/update/04_GitPull.png)

<br>

![Android Studio-menu - Git - Pull](https://androidaps.readthedocs.io/en/3.1/_images/04_GitPull.png)

* Laat alle opties zoals ze zijn (origin/master) en kies Pull

![Android Studio - Git - Pull-venster](../images/update/05_GitPullOptions.png)

<br>

![Android Studio - Git - Pull-venster](https://androidaps.readthedocs.io/en/3.1/_images/05_GitPullOptions.png)

* Wacht tot het downloaden klaar is. Je ziet de voortgang als informatie in de balk onderaan. Als het klaar is, zie je een melding dat het gelukt is.

  ```{note}
  Welke bestanden bijgewerkt zijn, kan verschillen! Dit betekent niet dat er een probleem is.
  ```


![Android Studio - Pull gelukt](../images/update/06_GitPullSuccess.png)

<br>

![Android Studio - Pull gelukt](https://androidaps.readthedocs.io/en/3.1/_images/06_GitPullSuccess.png)

* Gradle Sync gaat nu een aantal dependencies (benodigde onderdelen) downloaden. Wacht tot dit klaar is.

![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

<br>

![Android Studio - Gradle Sync](https://androidaps.readthedocs.io/en/3.1/_images/40_BackgroundTasks.png)

### Kies JVM-versie 17

- Open de Gradle-weergave door rechts in Android Studio op de olifant (1) te klikken, open de instellingen (2) en kies **Gradle Settings** (3):

![Gradle Settings openen](../images/studioTroubleshooting/161_GradleSettings.png)

<br>

![Gradle Settings openen](../images/studioTroubleshooting/09_GradleSettings.png)

- Controleer in het veld **Gradle JDK** (1) of de juiste versie is gekozen: **jbr-17**. Zo niet, klik dan op het veld en kijk of deze versie al in de lijst staat. Staat hij niet in de lijst (de schermafbeelding hieronder toont een computer waarop alleen **jbr-21** beschikbaar is), kies dan **Download JDK...** (2).

![Download JDK kiezen](../images/studioTroubleshooting/162_DownloadJDK.png)



- Kies bij Version (1) **17**. Kies bij Vendor (2) JetBrains Runtime of een andere leverancier. Location (3): niet wijzigen.

![JDK 17 kiezen](https://androidaps.readthedocs.io/en/3.2/_images/163_JDKSelection.png)

- Sluit het venster **Settings** met **OK**.

### Kies de branch AAPS 3.2.0.4

- Klik linksonder op het Git-symbool, klik met de rechtermuisknop op 3.2.0.4 en kies Checkout.

![Download JDK kiezen](../images/studioTroubleshooting/17_Checkout.png)

<br>

![Download JDK kiezen](../images/studioTroubleshooting/17_CheckoutOld.png)

### Synchroniseer het project met Gradle

```{admonition} WARNING!
:class: warning
**Werk Gradle nooit bij.** Synchroniseer het altijd met het project.
```

Gebruik in de nieuwe interface het olifant-icoon en Sync Project with Gradle Files (of volg [deze stappen](#gradle-resync)).

![Sync Project with Gradle Files](../images/studioTroubleshooting/06_GradleResyncElephant.png)

Of volg ([deze stappen](https://androidaps.readthedocs.io/en/3.2/GettingHelp/TroubleshootingAndroidStudio.html#gradle-resync)) voor de klassieke interface.

![Sync Project with Gradle Files](../images/studioTroubleshooting/06_GradleResyncElephantOld.png)

### Bouw de ondertekende 3.2.0.4 APK

Je broncode is nu de huidige uitgebrachte versie, en alle voorwaarden zijn gecontroleerd. Nu kun je de ondertekende apk bouwen zoals beschreven in de sectie [ondertekende apk bouwen](#Building-APK-generate-signed-apk).

### Zet de 3.2.0.4 APK over en installeer hem

Je moet de apk naar je telefoon overzetten om hem te kunnen installeren.

```{note}
Heb je in Android Studio gebouwd met dezelfde bestaande keystore? Dan hoef je de bestaande app op je telefoon niet te verwijderen. Volg bij het installeren van de apk de meldingen om de update te installeren.
In andere gevallen, bijvoorbeeld als je in Android Studio een nieuwe keystore hebt gemaakt voor je ondertekende apk, moet je de oude app verwijderen voordat je de apk installeert. **Exporteer zeker eerst je instellingen!**
```

Zie de instructies voor [AAPS overzetten en installeren](../SettingUpAaps/TransferringAndInstallingAaps.md)

### Controleer op je telefoon of AAPS versie 3.2.0.4 is

Als je de nieuwe apk hebt geïnstalleerd, kun je de AAPS-versie op je telefoon controleren: tik rechtsboven op het menu met de drie puntjes en daarna op Over. Je zou nu de huidige versie moeten zien.

