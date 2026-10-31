(aaps-ci-preparation)=

# Bouwen in de browser – Stap 2: Je keystore voor ondertekening maken

```{note}
Dit is **Stap 2** van [Bouwen in de browser](BrowserBuild.md). Rond eerst [Stap 1 – Je GitHub-fork maken](BrowserBuildFork.md) af.
```

AndroidAPS moet ondertekend worden met privésleutels die in een **Java KeyStore (JKS)** staan. Dit is de belangrijkste keuze van het hele proces. Ze bepaalt of je AAPS later kunt **bijwerken** zonder opnieuw te installeren.

```{note}
In de volgende stappen sla je privégegevens (je keystore, en later je toegang tot Google Drive) in GitHub op als **secrets** (geheimen). Een secret is gewoon een versleutelde waarde die alleen je eigen build kan lezen – niemand anders kan hem zien, ook niet wie je fork bekijkt. Zo blijft je build van jou.
```

## Kies je keystore-aanpak

Lees beide opties en kies de optie die bij jouw situatie past.

### Optie 1 – Een nieuwe keystore maken (nieuwe gebruikers)

Kies deze optie als **een** van deze punten klopt:

- Je bouwt AAPS voor de **eerste keer**.
- Je hebt geen keystore van een eerdere build met Android Studio (op een computer).
- Je bent het wachtwoord of de alias van je keystore vergeten.

```{warning}
AAPS bouwen met **Optie 1** maakt een gloednieuwe keystore. Daarom **kun je je bestaande AAPS hiermee niet bijwerken** zonder opnieuw te installeren. Om naar deze nieuwe build over te stappen, moet je je instellingen exporteren, de oude AAPS verwijderen, de nieuwe installeren en je instellingen weer importeren. Volg de stappen in [AAPS opnieuw installeren met een nieuwe keystore](#reinstall-aaps).
```

**→ [Ga verder met Optie 1 – Een nieuwe keystore maken](BrowserBuildO1.md)**

### Optie 2 – Je bestaande keystore uploaden (bestaande / eerdere gebruikers)

Kies deze optie als je de `.jks`-keystore **al hebt** die je gebruikte voor een eerdere build van AAPS op een computer met Android Studio, **en** je het wachtwoord en de alias kent (meestal `key0`).

Zo kun je je huidige AAPS-installatie blijven bijwerken: toekomstige updates gebruiken dezelfde keystore.

**→ [Ga verder met Optie 2 – Je bestaande keystore uploaden](BrowserBuildO2.md)**

----

```{note}
Op de volgende pagina kies je je apparaat (computer of iPhone). Elke apparaatpagina helpt je daarna stap voor stap om het voorbereidingsbestand op de juiste manier voor dat apparaat te downloaden en te openen, en om je keystore te maken. De gebouwde AAPS-app wordt in je Google Drive opgeslagen.
```

**Volgende: kies hierboven [Optie 1](BrowserBuildO1.md) of [Optie 2](BrowserBuildO2.md) en volg dan de pagina voor jouw apparaat.**

----

(ci-keystore-export)=

## Je keystore exporteren (optioneel)

Gebruik deze methode als je je opgeslagen keystore wilt exporteren.

Dit script exporteert de keystore-gegevens die je eerder hebt ingesteld (met Optie 1 of Optie 2) als ZIP-bestand met wachtwoord naar de map `/AAPS/KeyStore` in je Google Drive.

```{warning}
Zorg dat je keystore en je instellingen voor Google Drive klaar zijn voordat je deze exportmethode gebruikt.
```

### Stappen:

1. **Secret voor het ZIP-wachtwoord toevoegen:**
   - Ga in je repository naar **Settings** → **Secrets and variables** → **Actions**
   - Klik op **New repository secret**
   - Vul in het veld **Name** in: `ZIP_PASSWORD`
   - Vul in het veld **Secret** je eigen wachtwoord voor de ZIP-versleuteling in
   - Gebruik voor het wachtwoord alleen Engelse letters en cijfers (geen speciale tekens)
   - Klik op **Add secret**

   ![aaps_ci_zip_password.png](../images/Building-the-App/CI/aaps_ci_zip_password.png)

2. **De exportworkflow starten:**
   - Ga in je repository naar het tabblad **Actions**
   - Kies **CI KeyStore Export**
   - Klik op **Run workflow**
   - Het geëxporteerde ZIP-bestand met de keystore wordt in je Google Drive opgeslagen

   ![aaps_ci_keystore_export.png](../images/Building-the-App/CI/aaps_ci_keystore_export.png)

   ![aaps_ci_keystore_export_run.png](../images/Building-the-App/CI/aaps_ci_keystore_export_run.png)

```{toctree}
:hidden:

Optie 1 – Een nieuwe keystore maken <BrowserBuildO1.md>
Optie 2 – Je bestaande keystore uploaden <BrowserBuildO2.md>
```
