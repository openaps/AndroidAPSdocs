(browser-build)=

# Bouwen in de browser

AAPS bouwen met GitHub Actions.

**De laagste ondersteunde AAPS-versie is 3.3.2.1.**

## Zelf bouwen, in plaats van downloaden

**De AAPS-app (een apk-bestand) is niet te downloaden, vanwege de regels voor medische hulpmiddelen. Je mag de app legaal bouwen voor eigen gebruik, maar je mag geen kopie aan anderen geven!**

Zie de [FAQ-pagina](../UsefulLinks/FAQ.md) voor meer informatie.

(Building-APK-without-a-computer)=

## Kies hoe je bouwt

Kies de methode die past bij het apparaat waarmee je bouwt:

### Op een Android-telefoon: AAPS Builder (aanbevolen)

Een instelpagina helpt je stap voor stap om je eigen privé build-repository in GitHub te maken. Je hoeft niets te installeren, er is geen voorbereidingsbestand en je start elke build zelf. Je downloadt de app direct vanaf GitHub. Google Drive is optioneel.

Dit werkt ook vanuit een browser op een computer.

**→ [Bouwen met AAPS Builder](BrowserBuildAapsBuilder.md)**

### Op een computer of een iPhone / iPad: fork en voorbereidingsbestand

Je maakt een kopie (fork) van de broncode van AAPS in GitHub, je maakt je keystore met een voorbereidingsbestand, en de gebouwde app wordt in je Google Drive opgeslagen. Volg de vier stappen hieronder.

```{note}
**Bouw je al met een fork?** Werk die dan verder bij zoals beschreven in [Bijwerken met een browser](../Maintenance/UpdateBrowserBuild.md), of stap over op AAPS Builder. Om over te stappen, haal je eerst een kopie van je keystore uit je fork: zie [Overstappen vanaf de vorige manier van bouwen in de browser](#aaps-builder-from-fork).
```

Je moet meerdere tabbladen in je browser gebruiken en steeds van het ene naar het andere gaan. Voorbeeld Chrome:

![fork_aaps](../images/Building-the-App/CI/BrowserBuildTabs.png)

```{note}
Je moet steeds van tabblad naar tabblad gaan: begin met alle tabbladen gesloten, zodat je niet de weg kwijtraakt als je van het ene naar het andere gaat.
```

#### Wat je nodig hebt

- Een **Google-account**, zodat de gebouwde app in je Google Drive kan worden opgeslagen.
- Een **GitHub-account** (gratis) – dit maak je in Stap 1.
- Een **webbrowser** die meerdere tabbladen tegelijk open kan houden (hieronder gaan we uit van Chrome).
- Een klein **hulpprogramma om het voorbereidingsbestand te openen**. Welk programma je nodig hebt, hangt af van het apparaat waarmee je bouwt – je hoeft nu niets te installeren, Stap 2 helpt je daarbij voor jouw apparaat:
  - **Computer (Windows / Mac / Linux):** Simple Web Server.
  - **iPhone / iPad:** geen extra app – je gebruikt de ingebouwde app Bestanden en de browser.

#### De stappen

Bouwen in de browser bestaat uit een reeks keuzes. Volg deze stappen in deze volgorde:

1. **[Je GitHub-fork maken](BrowserBuildFork.md)** – maak je persoonlijke kopie van de broncode van AAPS.
2. **[Je keystore voor ondertekening maken](BrowserBuildKeystore.md)** – de belangrijkste keuze: maak een nieuwe keystore (Optie 1) of upload je bestaande keystore (Optie 2), en volg dan de pagina voor jouw apparaat.
3. **[Google Drive autoriseren](BrowserBuildGoogleDrive.md)** – laat GitHub de gebouwde app in je Google Drive opslaan.
4. **[De APK bouwen](BrowserBuildAPK.md)** – start de GitHub Actions-workflow en kies je versie en variant.

Als je problemen hebt, zie **[Bouwen in de browser: probleemoplossing](../GettingHelp/BrowserBuildTroubleshooting.md)**. Voor optionele handelingen met een fork, zie [je keystore exporteren](#ci-keystore-export) of [een commit cherry-picken](#github-cherry-pick).

----

**Begin met [Stap 1 – Je GitHub-fork maken](BrowserBuildFork.md) →**

```{toctree}
:hidden:

AAPS Builder <BrowserBuildAapsBuilder.md>
Stap 1: Je fork maken <BrowserBuildFork.md>
Stap 2: Je keystore maken <BrowserBuildKeystore.md>
Stap 3: Google Drive autoriseren <BrowserBuildGoogleDrive.md>
Stap 4: De APK bouwen <BrowserBuildAPK.md>
```
