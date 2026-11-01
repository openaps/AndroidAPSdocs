(browser-build)=

# Nettleserbygg

Bygge AAPS med GitHub Actions.

**Laveste AAPS-versjon som støttes, er 3.3.2.1.**

## Bygg selv i stedet for å laste ned

**AAPS-appen (en apk-fil) er ikke tilgjengelig for nedlasting, på grunn av regelverket for medisinsk utstyr. Det er lovlig å bygge appen til eget bruk, men du må ikke gi en kopi til andre!**

Se [FAQ-siden](../UsefulLinks/FAQ.md) for detaljer.

(Building-APK-without-a-computer)=

## Velg hvordan du vil bygge

Velg metoden som passer enheten du bygger fra:

### På en Android-telefon: AAPS Builder (anbefalt)

En oppsettside leder deg gjennom hvordan du lager ditt eget private repository for bygging i GitHub. Ingenting å installere, ingen forberedelsesfil, og du starter hvert bygg selv. Du laster ned appen direkte fra GitHub. Google Drive er valgfritt.

Dette fungerer også fra en nettleser på en datamaskin.

**→ [Bygg med AAPS Builder](BrowserBuildAapsBuilder.md)**

### På en datamaskin eller en iPhone / iPad: fork og forberedelsesfil

Du lager en kopi (fork) av AAPS-kildekoden i GitHub, lager keystore-filen din med en forberedelsesfil, og den ferdigbygde appen lagres i din Google Drive. Følg de fire stegene nedenfor.

```{note}
**Bygger du allerede med en fork?** Fortsett å oppdatere den som beskrevet i [Oppdatere med en nettleser](../Maintenance/UpdateBrowserBuild.md), eller bytt til AAPS Builder. For å bytte må du først hente en kopi av keystore-filen din fra forken: se [Kommer du fra det forrige nettleserbygget](#aaps-builder-from-fork).
```

Du må bruke flere faner i nettleseren og bytte mellom dem. Eksempel i Chrome:

![fork_aaps](../images/Building-the-App/CI/BrowserBuildTabs.png)

```{note}
Du må hoppe fra fane til fane: start med alle faner lukket, så du ikke mister oversikten når du bytter fra den ene til den andre.
```

#### Dette trenger du

- En **Google-konto**, slik at den ferdigbygde appen kan lagres i din Google Drive.
- En **GitHub-konto** (gratis) – du lager den i steg 1.
- En **nettleser** som kan ha flere faner åpne samtidig (nedenfor går vi ut fra Chrome).
- En liten **hjelper for å kjøre forberedelsesfilen**. Hvilken du trenger, avhenger av enheten du bygger fra – det er ingenting å installere nå, steg 2 leder deg gjennom det for din enhet:
  - **Datamaskin (Windows / Mac / Linux):** Simple Web Server.
  - **iPhone / iPad:** ingen ekstra app – du bruker den innebygde Filer-appen og nettleseren.

#### Stegene

Nettleserbygget er en rekke valg. Følg disse stegene i rekkefølge:

1. **[Lag din GitHub-fork](BrowserBuildFork.md)** – lag din personlige kopi av AAPS-kildekoden.
2. **[Lag keystore-filen for signering](BrowserBuildKeystore.md)** – det viktigste valget: lag en ny keystore-fil (alternativ 1) eller last opp den du har fra før (alternativ 2), og følg deretter siden for din enhet.
3. **[Autoriser Google Drive](BrowserBuildGoogleDrive.md)** – la GitHub lagre den ferdigbygde appen i din Google Drive.
4. **[Bygg APK-filen](BrowserBuildAPK.md)** – kjør GitHub Actions-arbeidsflyten og velg versjon og variant.

Hvis du får problemer, se **[Nettleserbygg: feilsøking](../GettingHelp/BrowserBuildTroubleshooting.md)**. For valgfrie operasjoner med en fork, se [eksportere keystore-filen din](#ci-keystore-export) eller [velge ut en enkelt commit (cherry-pick)](#github-cherry-pick).

----

**Start med [Steg 1 – Lag din GitHub-fork](BrowserBuildFork.md) →**

```{toctree}
:hidden:

AAPS Builder <BrowserBuildAapsBuilder.md>
Steg 1: Lag forken din <BrowserBuildFork.md>
Steg 2: Lag keystore-filen din <BrowserBuildKeystore.md>
Steg 3: Autoriser Google Drive <BrowserBuildGoogleDrive.md>
Steg 4: Bygg APK-filen <BrowserBuildAPK.md>
```
