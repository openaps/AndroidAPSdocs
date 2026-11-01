(v4-changes)=
# Hva er endret i AAPS v4

Denne siden samler de viktigste **endringene i oppførsel** mellom **AAPS** v3 og v4 — ting som virker annerledes, er flyttet eller er fjernet — slik at du som allerede bruker AAPS, vet hva du kan vente deg når du oppdaterer. Se også [Versjonsnotater](ReleaseNotes.md) og [oppdateringsveiledningen](UpdateToNewVersion.md).

```{contents} Table of contents
:depth: 2
:local: true
```

---

## NSClient v1 er fjernet

**AAPS** v3 hadde **to** plugins for synkronisering med Nightscout:

- **NSClient** — den gamle klienten (det gamle REST-/socket.io-API-et i Nightscout, også kalt *«v1»*), og
- **NSClientV3** — klienten for det nyere **API v3** i Nightscout.

I **AAPS** v4 er den gamle pluginen **NSClient (v1)** **fjernet**. Bare **NSClientV3** er igjen for synkronisering med Nightscout.

```{admonition} What you need to do
:class: important
Hvis du (eller **AAPSClient**-følgeren din) fortsatt synkroniserte med den gamle pluginen **NSClient (v1)**, bytt til **NSClientV3** før/etter oppdateringen:

- Åpne **[Konfigurasjon](../SettingUpAaps/ConfigBuilder.md) → Kommunikasjon → NSClientV3**.
- Skriv inn **Nightscout-URL-en** din og et **tilgangstoken** (NSClientV3 bruker et tilgangstoken, *ikke* den gamle API-nøkkelen — se [lage et token](https://nightscout.github.io/nightscout/security/#create-a-token)).
- Nightscout-siden din må støtte **API v3** (Nightscout 15 eller nyere).
- Hvis du bruker **websockets**, slå dem på eller av på **både** hovedenheten og følgeren — aldri bare på én av dem.
```

Dette påvirker bare hvordan appen snakker med Nightscout; dataene dine på Nightscout er uendret.

---

## Navigasjonslinjen nederst: Behandlinger, Scener og Administrer

I **AAPS** v3 beveget du deg rundt i appen med en rad med **faner** (Oversikt, Handlinger, Behandlinger, …), og flere funksjoner var **plugins** som du slo på i Config Builder (**Handlinger**, **Automasjon**, **Mat**, …).

I **AAPS** v4 er fanene borte, og det samme er øye-avkrysningsboksen i Config Builder som viste en plugin som en fane. Hovedskjermen er **oversikten**, og en **navigasjonslinje nederst** gir deg tre ark. **Handlinger, Automasjon og Mat er ikke lenger plugins** — det er ingenting å slå på i [Konfigurasjon](../SettingUpAaps/ConfigBuilder.md) (det nye navnet på Config Builder); funksjonene deres ligger nå i disse arkene.

(v4changes-treatments)=
### Behandlinger — registrer og gi

Arket **Behandlinger** er stedet der du registrerer eller gir en behandling: **Boluskalkulator**, **Insulin** (manuell bolus), **Karbo**, **Behandling** (insulin + karbohydrater sammen), **Kalibrering**, **CGM** (åpner CGM-appen din, når en er satt opp) og **[hurtigknappene](../DailyLifeWithAaps/QuickWizards.md)** dine.

![Arket Behandlinger nederst på skjermen](../images/v4/BehavioralChanges/treatments_sheet.png)

På en **Wear OS-klokke** registreres de samme behandlingene fra klokkens **AAPS-meny** (Boluskalkulator / Kalkulator, eKarbo, Behandling, …):

![Behandlingshandlingene i klokkens AAPS-meny](../images/v4/BehavioralChanges/treatments_watch.png)

### Scener

Dine forhåndsinnstilte situasjoner — se [Scener](../DailyLifeWithAaps/Scenes.md).

(v4changes-manage)=
### Administrer — administrer og aktiver

**Administrer**-arket er stedet der du administrerer og aktiverer alt annet: **[Profil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)**, **Insulininnstillinger** (insulinoppsettene dine), **[Midlertidig mål](../DailyLifeWithAaps/TempTargets.md)**, forhåndsinnstilte **[Hurtigknapper](../DailyLifeWithAaps/QuickWizards.md)**, **[Scener](../DailyLifeWithAaps/Scenes.md)**, **Automasjon**, **Mat**, **Rotasjon av sted**, **Pumpe**, **[Autoriserte klienter](../RemoteFeatures/ClientMasterControl.md)** — pluss pumpehandlingene som før lå på fanen *Handlinger* (**Forlenget bolus**, **avbryt midlertidig basal**, **Prime/fylling**, **Sensorbytte**, **Bytte pumpebatteri**).

![Administrer-arket nederst på skjermen](../images/v4/BehavioralChanges/manage_sheet.png)

Alle automasjonsreglene og matoppføringene du har fra før, beholdes; det er bare måten du når disse funksjonene på som er endret.

(screens-action-tab)=
#### Hvor ble det av Handlinger-fanen?

**AAPS** 3.x hadde en fane «Handlinger». I **AAPS** 4 ligger funksjonene dens andre steder:

* **Profilbytte** og **profilprosent**: trykk på [profilnavnet](#aaps-screens-profile--target) på hovedskjermen, eller **Administrer → Profil**. Se [Endre profilprosenten](#ProfileSwitch-change-percentage).
* **Midlertidig mål**: trykk på [målet](#aaps-screens-profile--target) på hovedskjermen, eller **Administrer → Midlertidig mål**.
* **Prime/fylling**, **Sensorbytte**, **BS-kontroll** og de andre helseportal-oppføringene: i det utvidede [statuspanelet](#aaps-screens-careportal), i **Administrer**, eller som [Hurtigstart](../DailyLifeWithAaps/QuickLaunch.md)-knapper.
* **Historikkleser**, **Statistikk** (TDD): i **menyen** (☰).

```{admonition} Profile switch and profile percentage
:class: note
I **AAPS** v3 åpnet et langt trykk på profilnavnet dialogen for profilbytte (prosent, varighet, midlertidig mål for aktivitet). I **AAPS** v4 **trykker** du på profilnavnet (eller **Administrer → Profil**) og deretter på den runde **▶**-knappen nederst til høyre for å åpne de samme innstillingene. Se [Endre profilprosenten](#ProfileSwitch-change-percentage).
```

---

(v4changes-read-only-management)=
## Sikkerhet for innstillinger låser nå også administrasjonsskjermene

I **AAPS** v3 spurte [Sikkerhet for innstillinger](#Preferences-settings-protection) om passordet ditt bare når du åpnet innstillingene. Du kunne fortsatt legge til eller redigere profiler i fanen **Lokal profil** uten passord.

I **AAPS** v4 dekker Sikkerhet for innstillinger også redigering på administrasjonsskjermene: **Profil**, **Insulininnstillinger**, **Midlertidig mål** og **Hurtigknapp**. Hvis innstillingene dine er låst, åpnes disse skjermene **skrivebeskyttet**:

- Du kan bla i oppføringene og trykke **▶ Aktiver** eller bruke dem.
- Knappene **Legg til / Rediger / Dupliser / Slett** er **skjult**. Bare **✏️-blyanten** i den øverste linjen viser at du kan låse opp redigering.

![Den skrivebeskyttede profilskjermen — bare Aktiver nederst, blyant i den øverste linjen](../images/v4/Profiles/profile_manage_readonly.png)

```{admonition} What you need to do
:class: important
For å legge til, redigere, duplisere eller slette en oppføring, trykk på **✏️-blyanten** i den øverste linjen og skriv inn passordet for innstillingene (eller bruk biometri). Da vises knappene.

Hvis du ikke trenger å beskytte innstillingene dine, kan du slå av Sikkerhet for innstillinger i **Innstillinger → Beskyttelse**.
```

---

(v4changes-active-insulin)=
## Insulinet som er i bruk, kan ikke redigeres

I **AAPS** v3 kunne du når som helst endre DIA for insulinet du brukte.

I **AAPS** v4 er insulinet som er merket **AKTIV** i **Administrer → Insulininnstillinger**, nedtonet: du kan ikke redigere eller slette det.

Når du oppgraderer, beholder **AAPS** insulinet og DIA-verdien som profilbyttene dine fra v3 allerede har lagret. Hvis den finner eldre registreringer der insulinet er kjent, men ikke DIA, bruker den en standard DIA for dem og viser en melding én gang, for eksempel *Eldre oppføringer manglet varighet for insulin, så 9,0 timer ble brukt for Lyumjev. Kontroller insulininnstillingene – oppføringer som allerede er migrert, blir ikke oppdatert i ettertid.* Kontroller insulininnstillingene dine når du ser den.

```{admonition} What you need to do
:class: important
For å endre DIA eller topp, legg til et nytt insulin med **+**, juster det, lagre det og trykk **▶ Aktiver**. Se [Bytte insulinet som er i bruk](#Config-Builder-insulin-change-active).
```

---

(v4changes-remote-control)=
## Fjernstyring fra AAPSClient krever sammenkobling

I **AAPS** v3 styrte **AAPSClient** **AAPS** ved å skrive helseportal-behandlinger til Nightscout, og kunne ikke gi en bolus.

I **AAPS** v4 blir klienten og hovedtelefonen **sammenkoblet** én gang, og hver kommando signeres. Hovedtelefonen kontrollerer og bekrefter hver kommando, og en klient kan nå også gi en bolus.

- Hver klient har en **[rolle](#client-master-control-roles)** som begrenser hva den får lov til å gjøre.
- Mens klientstyring er på, er hovedtelefonen i **[herdet modus](#client-master-control-hardened-mode)**: behandlinger og endringer som skrives rett inn i Nightscout (nettsiden, andre apper) tas ikke lenger i bruk.
- Hver klient får et **[eget Nightscout-token](#client-master-control-own-token)** med bare de rettighetene den trenger.

```{admonition} What you need to do
:class: important
Par hver **AAPSClient** med hovedtelefonen: se [Hovedenhet ↔ klientstyring](#client-master-control). Med et admin-token på hovedtelefonen viser hovedtelefonen en QR-kode som setter opp og parer klienten med én skanning. Hvis du før registrerte behandlinger på Nightscout-nettsiden, registrer dem på en sammenkoblet klient i stedet.
```

---

## Doble BS-data setter nå loopen i Stopp ved lavt BS

Når **AAPS** mottar den samme BS-målingen to ganger (en rød varselboble på BS-kilde-snarveien i linjen nederst), kan den ikke beregne trenden din pålitelig, og den slutter derfor å gi korreksjonsinsulin.

I **AAPS** v3 skjedde dette stille i bakgrunnen: loopen din ble fortsatt vist som **Lukket loop**, selv om den ikke lenger kunne korrigere.

I **AAPS** v4 er endringen synlig. En lukket loop settes i modusen **Stopp ved lavt BS**, og loop-dialogen forteller deg hvorfor: *«LGS-modus på grunn av doble verdier fra BS-kilden»*. **AAPS** kan fortsatt redusere eller stoppe basalen din for å beskytte deg mot lave verdier.

```{admonition} What you need to do
:class: important
Finn og fjern de doble målingene — se [BS-varselsymbol](#aaps-screens-bg-warning-sign).

Når de er borte, blir **AAPS** stående i **Stopp ved lavt BS**. Den går ikke tilbake til **Lukket loop** av seg selv: trykk og hold på loop-ikonet og velg **Lukket loop** på nytt.
```

---

(v4changes-tidepool)=
## Tidepool: dataene vises nå under enhetsnavnet AAPS

I **AAPS** v3 ble dataene som ble lastet opp til [Tidepool](../SettingUpAaps/Tidepool.md), vist i Tidepool under et annet enhetsnavn.

I **AAPS** v4 vises dataene under enhetsnavnet **AAPS**. Etter oppdateringen starter **AAPS** et nytt datasett i Tidepool. De eldre dataene dine blir liggende i Tidepool under det gamle enhetsnavnet.

```{admonition} What you need to do
:class: important
Vanligvis ingenting: nye data vises rett og slett under **AAPS**.

Kjør **ikke** «**Full synkronisering**» mens de gamle dataene fortsatt ligger i Tidepool: da ville de samme dataene ligge der to ganger. Hvis du vil ha alle dataene dine under det nye navnet, bruk først knappen «**Slett alle data**» på [Tidepool-skjermen](#tidepool-menu) (den sletter også de gamle dataene som **AAPS** har lastet opp), og kjør deretter «**Full synkronisering**». Bare dataene som fortsatt er lagret i **AAPS** på telefonen din, kan lastes opp på nytt.
```

---


<!-- =====================================================================
     This page is a growing list of v4 behavioral changes.
     Add new changes as their own "## " section, newest grouping as agreed.
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
