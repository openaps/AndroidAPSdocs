# Oppdatere til AAPS 3.2.0.4

(update-aaps-3204)=

## Bygg selv i stedet for å laste ned

**AAPS-appen (en apk-fil) er ikke tilgjengelig for nedlasting, på grunn av regelverket for medisinsk utstyr. Det er lovlig å bygge appen til eget bruk, men du må ikke gi en kopi til andre!**

Se [FAQ-siden](../UsefulLinks/FAQ.md) for detaljer.

## Krav til datamaskin og programvare for å bygge AAPS 3.2.0.4

* En bestemt versjon av **[Android Studio](https://developer.android.com/studio/)** kan være nødvendig for å bygge APK-filen.

| AAPS-versjon            | Foretrukket<br/>Android Studio-<br/>versjon | Alternativ<br/>Android Studio-<br/>versjon | Gradle | JVM |
| ----------------------- | ------------------------------------------------------- | ------------------------------------------------------ | ------ |:--- |
| [3.2.0.4](#version3204) | Hedgehog (2023.1.1)                                     | til og med Meerkat                                     | 8.2    | 17  |

Den «foretrukne versjonen» leveres med den riktige JVM-versjonen. Den foretrukne versjonen er også den eldste versjonen du kan bruke for å bygge **AAPS**. Du kan **IKKE** bygge med en versjon som er eldre enn den «foretrukne». Hvis du bruker en annen versjon, kan du få problemer knyttet til JVM-versjonen. Se siden [Feilsøking av Android Studio](#incompatible-gradle-jvm) for hjelp til å løse disse problemene. Hvis din nåværende Android Studio-versjon ikke står i tabellen, må du oppdatere den først.

Gradle-versjonen er knyttet til kildekoden, så du får alltid riktig Gradle-versjon når du laster ned / oppdaterer kildekoden. Den er bare nevnt her til informasjon, du trenger ikke gjøre noe med den.

* [32-biters Windows-systemer](#troubleshooting_androidstudio-unable-to-start-daemon-process) støttes ikke av Android Studio. Husk at både **64-biters CPU og 64-biters operativsystem er et absolutt krav.** Hvis systemet ditt IKKE oppfyller dette kravet, må du bytte den aktuelle maskinvaren eller programvaren, eller hele systemet.

<table class="tg">
<tbody>
  <tr>
    <th class="tg-baqh">Operativsystem (bare 64-biters)</th>
    <td class="tg-baqh">Windows 8 eller nyere</td>
    <td class="tg-baqh">Mac OS 10.14 eller nyere</td>
    <td class="tg-baqh">Enhver Linux som støtter Gnome, KDE eller Unity DE;&nbsp;&nbsp;GNU C Library 2.31 eller nyere</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">CPU (bare 64-biters)</th>
    <td class="tg-baqh">x86_64-prosessorarkitektur; 2. generasjon Intel Core eller nyere, eller AMD-prosessor med støtte for en <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-windows" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Windows Hypervisor</span></a></td>
    <td class="tg-baqh">ARM-baserte brikker, eller 2. generasjon Intel Core eller nyere med støtte for <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-mac" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Hypervisor.Framework</span></a></td>
    <td class="tg-baqh">x86_64-prosessorarkitektur; 2. generasjon Intel Core eller nyere, eller AMD-prosessor med støtte for AMD Virtualization (AMD-V) og SSSE3</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">RAM</th>
    <td class="tg-baqh" colspan="3"><p align="center">8 GB eller mer</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Disk</th>
    <td class="tg-baqh" colspan="3"><p align="center">Minst 30 GB ledig plass. SSD anbefales.</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Oppløsning</th>
    <td class="tg-baqh" colspan="3"><p align="center">1280 x 800 minimum<br></td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Internett</th>
    <td class="tg-baqh" colspan="3"><p align="center">Bredbånd</td>
  </tr>
</tbody>
</table>

**Det anbefales sterkt (men er ikke et krav) å bruke SSD (Solid State Disk) i stedet for HDD (harddisk), fordi det tar kortere tid å bygge AAPS APK-filen.**  Du kan likevel bruke en HDD når du bygger **AAPS** APK-filen. Hvis du gjør det, kan byggeprosessen ta lang tid, men når den først har startet, kan du la den kjøre uten tilsyn.

## Hjelp og støtte under byggingen av 3.2.0.4

Hvis du får problemer under byggingen av **AAPS**-appen, finnes det en egen del om [**feilsøking av Android Studio**](https://androidaps.readthedocs.io/en/3.2/GettingHelp/TroubleshootingAndroidStudio.html). Se der først.

Hvis du mener at noe i byggeinstruksjonene er feil, mangler eller er forvirrende, eller du fortsatt sliter, ta kontakt med andre **AAPS**-brukere i gruppen på [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) eller på [Discord](https://discord.gg/4fQUWHZ4Mw). Hvis du vil endre noe selv (oppdatere skjermbilder _osv._), send inn en [pull request (PR)](../SupportingAaps/HowToEditTheDocs.md).

```{note}
Denne siden har eksempelbilder både for det **nye** og det gamle (**klassiske**) brukergrensesnittet i Android Studio.
```

## Oversikt over oppdatering fra 3.2.0.x til 3.2.0.4

```{contents} Steps for updating to 3.2.0.4
:depth: 1
:local: true
```

### Eksporter innstillingene dine

Eksporter innstillingene fra den **AAPS**-versjonen du har på telefonen nå. Du trenger dem kanskje ikke, men det er bedre å være på den sikre siden.

Se siden [Lage og gjenopprette sikkerhetskopier](ExportImportSettings.md) hvis du ikke husker hvordan du gjør dette.

### Oppdater din lokale kopi av AAPS

* Åpne AAPS-prosjektet du har fra før, i Android Studio. Du må kanskje velge prosjektet ditt. (Dobbelt)klikk på AAPS-prosjektet.

![Android Studio – velg prosjekt](../images/update/01_ProjectSelection.png)

<br>

![Android Studio – velg prosjekt](https://androidaps.readthedocs.io/en/3.1/_images/01_ProjectSelection.png)

* I menylinjen i Android Studio velger du Git -> Fetch

![Android Studio-meny – Git – Fetch](../images/update/02_GitFetch.png)

<br>

![Android Studio-meny – Git – Fetch](https://androidaps.readthedocs.io/en/3.1/_images/02_GitFetch.png)

* Du ser en melding nederst til høyre om at Fetch var vellykket.

![Android Studio-meny – Git – Fetch vellykket](../images/update/03_GitFetchSuccessful.png)

<br>

![Android Studio-meny – Git – Fetch vellykket](https://androidaps.readthedocs.io/en/3.1/_images/03_GitFetchSuccessful.png)

* I menylinjen velger du nå Git -> Pull

![Android Studio-meny – Git – Pull](../images/update/04_GitPull.png)

<br>

![Android Studio-meny – Git – Pull](https://androidaps.readthedocs.io/en/3.1/_images/04_GitPull.png)

* La alle valgene stå som de er (origin/master) og velg Pull

![Android Studio – Git – Pull-dialogen](../images/update/05_GitPullOptions.png)

<br>

![Android Studio – Git – Pull-dialogen](https://androidaps.readthedocs.io/en/3.1/_images/05_GitPullOptions.png)

* Vent mens nedlastingen pågår, du ser dette som informasjon i linjen nederst. Når den er ferdig, ser du en melding om at det gikk bra.

  ```{note}
  Hvilke filer som ble oppdatert, kan variere! Dette er ikke et tegn på at noe er galt.
  ```


![Android Studio – Pull vellykket](../images/update/06_GitPullSuccess.png)

<br>

![Android Studio – Pull vellykket](https://androidaps.readthedocs.io/en/3.1/_images/06_GitPullSuccess.png)

* Gradle Sync kjører for å laste ned noen avhengigheter. Vent til den er ferdig.

![Android Studio – Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

<br>

![Android Studio – Gradle Sync](https://androidaps.readthedocs.io/en/3.1/_images/40_BackgroundTasks.png)

### Velg JVM-versjon 17

- Åpne Gradle-visningen ved å klikke på elefanten (1) på høyre side av Android Studio, åpne innstillingene (2) og velg **Gradle Settings** (3):

![Åpne Gradle Settings](../images/studioTroubleshooting/161_GradleSettings.png)

<br>

![Åpne Gradle Settings](../images/studioTroubleshooting/09_GradleSettings.png)

- I feltet **Gradle JDK** (1) kontrollerer du at riktig versjon, **jbr-17**, er valgt. Hvis ikke, klikk på feltet og se om den allerede finnes i listen. Hvis den ikke er i listen (skjermbildet nedenfor viser en datamaskin der bare **jbr-21** er tilgjengelig), velger du **Download JDK...** (2).

![Velg Download JDK](../images/studioTroubleshooting/162_DownloadJDK.png)



- I Version (1) velger du **17**. I Vendor (2) velger du JetBrains Runtime eller hvilken som helst leverandør. Location (3): ikke endre.

![Velg JDK 17](https://androidaps.readthedocs.io/en/3.2/_images/163_JDKSelection.png)

- Lukk dialogen **Settings** med **OK**.

### Velg grenen AAPS 3.2.0.4

- Nederst til venstre velger du Git-symbolet, høyreklikker på 3.2.0.4 og velger Checkout.

![Velg Download JDK](../images/studioTroubleshooting/17_Checkout.png)

<br>

![Velg Download JDK](../images/studioTroubleshooting/17_CheckoutOld.png)

### Synkroniser prosjektet med Gradle

```{admonition} WARNING!
:class: warning
**Oppdater aldri Gradle.** Synkroniser den alltid med prosjektet.
```

Bruk elefantikonet og Sync Project with Gradle Files (eller følg [dette](#gradle-resync)) for det nye brukergrensesnittet.

![Sync Project with Gradle Files](../images/studioTroubleshooting/06_GradleResyncElephant.png)

Eller ([dette](https://androidaps.readthedocs.io/en/3.2/GettingHelp/TroubleshootingAndroidStudio.html#gradle-resync)) for det klassiske brukergrensesnittet.

![Sync Project with Gradle Files](../images/studioTroubleshooting/06_GradleResyncElephantOld.png)

### Bygg den signerte 3.2.0.4 APK-filen

Kildekoden din er nå den gjeldende utgitte versjonen, og alle forutsetninger er kontrollert. Nå er det på tide å bygge den signerte APK-filen som beskrevet i [delen om å bygge en signert APK-fil](#Building-APK-generate-signed-apk).

### Overfør og installer 3.2.0.4 APK-filen

Du må overføre APK-filen til telefonen din for å kunne installere den.

```{note}
Hvis du fullførte bygget med den samme keystore-filen du hadde fra før i Android Studio, trenger du ikke fjerne appen som allerede ligger på telefonen. Når du installerer APK-filen, følger du instruksjonene på skjermen for å installere oppdateringer.
I andre tilfeller, for eksempel hvis du lager en ny keystore-fil i Android Studio for den signerte APK-filen, må du slette den gamle appen før du installerer APK-filen. **Pass på at du eksporterer innstillingene dine!**
```

Se instruksjonene for [overføre og installere AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md)

### Kontroller AAPS-versjon 3.2.0.4 på telefonen

Etter at du har installert den nye APK-filen, kan du kontrollere AAPS-versjonen på telefonen ved å trykke på menyen med tre prikker øverst til høyre og deretter Om. Du skal se den gjeldende versjonen.

