
# Versjonsnotater

```{toctree}
:hidden:

Update2_7.md
Update3_0.md
UpdateAaps3204.md
```

Følg instruksjonene i [oppdateringsveiledningen](UpdateToNewVersion.md) for å oppdatere til en ny versjon. Feilsøkingsdelen på siden med oppdateringsveiledningen tar også for seg de vanligste problemene som oppstår når du oppdaterer **AAPS**.

```{admonition} Upgrading from AAPS v3?
:class: tip
Se [Hva er endret i AAPS v4](V4Changes.md) for de viktigste endringene i oppførsel — funksjoner som er flyttet, har fått nytt navn eller er fjernet.
```

Du får et varsel som dette når en ny oppdatering er tilgjengelig:

![Informasjon om oppdatering](../images/AAPS_LoopDisable90days.png)

Hvis du ikke oppdaterer før utløpsdatoen, bytter **AAPS** til åpen loop.

Se [Sluttdato for AAPS-versjoner](EndOfLife.md) for når hver AAPS-versjon utløper.

**Ikke ignorer varselet.** Nye versjoner av **AAPS** inneholder viktige sikkerhetsrettelser. Derfor må alle som bruker **AAPS**, oppdatere til den nyeste versjonen så snart som mulig. Dette er et forsøk på å gjøre det tryggere for hver enkelt **AAPS**-bruker og for DIY-fellesskapet. Takk for forståelsen.

(maintenance-android-version-aaps-version)=

## Android-versjon og AAPS-versjon

Hvis smarttelefonen din bruker en Android-versjon som er eldre enn Android 12, kan du ikke bruke AAPS v3.4 og nyere, siden den krever minst Android 12.

For at brukere med eldre Android skal kunne bruke eldre versjoner av AAPS, ble det gitt ut nye versjoner som bare endrer versjonskontrollen. Ingen andre forbedringer er med.

Finn Android-versjonen din i tabellen nedenfor og bruk den **AAPS**-versjonen som passer. Koden lastes ned fra <https://github.com/nightscout/AndroidAPS> med grenen som er vist.

| Din Android-versjon | AAPS-versjon du skal bruke | Gren du skal laste ned                                           |
| ------------------- | -------------------------- | ---------------------------------------------------------------- |
| Android 12 og nyere | Nyeste versjon             | [master](https://github.com/nightscout/AndroidAPS) (standard)    |
| Android 11          | **3.3.2.1**                | [3.3.2.1](https://github.com/nightscout/AndroidAPS/tree/3.3.2.1) |
| Android 9, 10       | **3.2.0.4**                | [3.2.0.4](https://github.com/nightscout/AndroidAPS/tree/3.2.0.4) |
| Android 8           | **2.8.2.1**                | [2.8.2.1](https://github.com/nightscout/AndroidAPS/tree/2.8.2.1) |
| Android 7           | **2.6.2**                  | [2.6.2](https://github.com/nightscout/AndroidAPS/tree/2.6.2)     |

## WearOS-versjon

- AAPS krever WearOS 3.0, 3.2 eller 3.5 (Android 11, API-nivå 30) eller nyere. WearOS 2-klokker støttes ikke.

```{tip}
WearOS 5, API-nivå 34 (Android 14) har [begrensninger](#BuildingAapsWearOs-WearOS5).
```

**Versjonsnotater for den nyeste versjonen av hver hovedutgivelse**. For alle andre versjoner, se [utgivelsene på GitHub](https://github.com/nightscout/AndroidAPS/releases).

(latestrelease)=

(version400)=

**Versjon 4.0.0**

Utgivelsesdato: 31-10-2026

**Nye funksjoner**

- Nytt brukergrensesnitt: telefonappen er bygget på nytt i Jetpack Compose @MilosKozak
- [Globalt søk](../DailyLifeWithAaps/GlobalSearch.md) @MilosKozak
- Migrering til Kotlin Multiplatform, klient for Windows, Mac og Linux (datamaskin) og iOS @MilosKozak
- [Scener](../DailyLifeWithAaps/Scenes.md): lagre et sett med handlinger og kjør dem sammen @MilosKozak
- [Hovedenhet ↔ klientstyring](../RemoteFeatures/ClientMasterControl.md): send kommandoer fra en klienttelefon til hovedenheten @MilosKozak
  - [Klientroller](#client-master-control-roles): Kun lesing, Måltider, Omsorgsperson eller Administrator for hver klient @MilosKozak
  - [Herdet modus](#client-master-control-hardened-mode): når klientstyring er på, tar hovedenheten bare imot endringer fra sammenkoblede klienter @MilosKozak
  - Sammenkobling med en QR-kode som også setter opp Nightscout på klienten, eller med en PIN; sammenkoblingsnøkkelen byttes ut rett etter sammenkoblingen @MilosKozak
  - [Eget Nightscout-token](#client-master-control-own-token) for hver klient, med bare de rettighetene en klient trenger @MilosKozak
- Støtte for [insulinkonsentrasjon](../AdvancedOptions/InsulinConcentration.md) (U200, U500) i pumper, kalkulatoren og profiler @Philoul @MilosKozak
- Insulinhåndtering: insulinkatalog, kallenavn, valg i profil og kalkulator @Philoul
- Plugin for kalibrering @MilosKozak
- [Utjevning](../CompatibleCgms/SmoothingBloodGlucoseData.md): Unscented Kalman-filter (UKF) @piecycle
- Nye [automasjonshandlinger](#automations-automation-action): **Endre utjevning** @olorinmaia, og **Kjør**, **Aktiver** eller **Deaktiver scene** @MilosKozak
- [Rotasjon av sted](#Aapsscreens-site-rotation): hold oversikt over og roter infusjonsstedene @Philoul @MilosKozak
- [Autotune](../AdvancedOptions/Autotune.md) er omarbeidet @Philoul
- Nye [widgeter](../DailyLifeWithAaps/Widgets.md) @MilosKozak @t1dude
- Tilgjengelighet: telefonappen virker med en skjermleser – navngitte kontroller, opplest status, beskrivelser av grafene og overskrifter du kan hoppe mellom @MilosKozak
- [Import av innstillinger](../Maintenance/ExportImportSettings.md): kan beholde pumpeinnstillingene @MilosKozak
- Det vedvarende varselet bruker Androids sanntidsoppdateringer (live updates), med støtte for Samsung Now bar og delta @premnirmal
- BS-graf: [trykk og hold](#aaps-screens-graph-press-and-hold) for å se verdiene ved en måling, på alle grafene i oversikten @t1dude @olorinmaia
- Ytelsesforbedringer @MilosKozak
- Automatisk eKarbo i Boluskalkulator @MilosKozak

**Nye enheter**

- **CareLevo**: ny [pumpedriver](../CompatiblePumps/CareLevo.md) @Kisu-Choi @MilosKozak
- **Dana-i2**: støtte @MilosKozak
- **Instara**: ny CGM-kilde @leohunt

**Forbedringer i pumpedrivere**

- Pumpeoversiktsskjermene er bygget på nytt for Insight, Medtronic, Medtrum, Omnipod, Dana, Diaconn og Equil @MilosKozak
- **Omnipod Dash**: Ref-koder i PDM-stil og lesbare feilbeskrivelser, driftkompensasjon alltid på, bedre rapportering av bolustype @nl-ruud
- **Omnipod**: fast sluttdato for Dash & Eros @mcnelson
- **DanaR, RS**: pumpeemulator for testing @MilosKozak
- **Equil**: pumpeemulator for testing @MilosKozak
- Mange rettelser for pumper og loop @MilosKozak og andre

**Wear OS**

- [Klokkeappen](../WearOS/WearOsSmartwatch.md) er bygget på nytt i Compose, nye fliser og komplikasjoner, automatisk installasjon av urskive (Watch Face Push) på Wear OS 6+ @olorinmaia @Philoul
- CustomWatchface tilgjengelig for WearOS 6.0 (GW7, GW8, GW9 ...) med en egen WFF-urskive @Philoul @olorinmaia
- CustomWatchface kan nå ha 5 komplikasjonsplasser som du kan tilpasse (ny funksjon, bare tilgjengelig for eldre klokker) @Philoul
- Ny [WFF-urskive basert på AAPS-komplikasjoner](#wearos-complications-watchface-setup) @olorinmaia
- Korrigeringer i resultatet fra Boluskalkulator og Hurtigknapp @olorinmaia
- Ny BS-graf og Kjøremodus-aktivitet i hovedmenyen @olorinmaia
- Boluskalkulator: side for [måltidstype](#WearOsSmartwatch-wizard-meal-type) som deler opp karbohydratene som kalkulatoren på telefonen, og [karbotid](#WearOsSmartwatch-wizard-carb-time) med påminnelsen *tid for å spise* på klokken @olorinmaia
- [Telefonalarmer på klokken](#WearOsSmartwatch-phone-alarms): klokken viser alarmen og tilbyr Demp og Lyd av i 5 min @olorinmaia

**Bygg**

- CI-arbeidsflyter for bygg fra tagger/grener, tilordning av JDK-versjon @Angus-repo

**Bidragsytere**

@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

Full endringslogg: <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

---

(version3426)=

**Versjon 3.4.2.6**

- Equil: bedre stabilitet @MilosKozak

---

(version3321)=

**Versjon 3.3.2.1**

Utgivelsesdato: 13-08-2025

- Rettet Bluetooth-tilkoblingen til Omnipod på Android 16
- CI-prosess (nettleserbygg)
- Rettet omregning mellom mmol og mg/dl
- Rettet feil tidsvalg i dialoger i noen tidssoner
- Rettet lesing av nøkler i enkelmodus
- Rettet manglende prediksjoner på klokken
- Forbedret ConfigBuilder
- Forbedret full synkronisering i NSCv3

---

(version3300)=

**Versjon 3.3.2.0**

Utgivelsesdato: 27-03-2025

**Slik oppgraderer du**

* [Android Studio-versjonen som heter «Meerkat»](#Building-APK-recommended-specification-of-computer-for-building-apk-file) eller nyere kreves for å bygge denne versjonen. Hvis du allerede har bygget en 3.3.x-versjon, må du oppgradere Android Studio igjen.

(version-enforcement)=

**Fra og med denne versjonen er varslingen og håndhevingen av versjoner forenklet og gjort mildere, og den virker slik:**

*  Ingen utløp når enheten er frakoblet (hvis det ikke er noen tilkobling til internett). Det betyr at det ikke lenger er noen ekstraperioder på 60 og 90 dager.
*  Etter utløp tvinges LGS-modus
*  Du får advarsler/varsler sjeldnere:
   - 28+ dager igjen: hver 7. dag
   - 27–14 dager igjen: hver 3. dag
   - deretter én gang om dagen
   - Varselet lages etter klokken 12, slik at du ikke forstyrres om natten
* Det finnes bare 2 typer varsler
   - Ny versjon tilgjengelig (har ingen effekt på AAPS)
   - Appen utløper på en dato fram i tid (fortsatt ingen effekt på AAPS) / har utløpt (AAPS går over i LGS-modus)

Andre endringer: [versjonsnotatene på GitHub](https://github.com/nightscout/AndroidAPS/releases/tag/3.3.2.0).

---

(version3204)=

**[Versjon 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)**

Utgivelsesdato: 27-02-2024

Denne versjonen er den siste som støtter Android 10. Hvis du ikke kan oppgradere til Android 11, [oppdater AAPS til 3.2.0.4](#update-aaps-3204).

**Endringer**

- Støtte for xDrip G7
- Rettelser for Medtrum
- Rettet ikonet for automasjon
- Rettet fullføring av opplæringsmål 1

---

**Versjon 2.8.2**

Utgivelsesdato: 23-01-2021

[Versjonsnotater](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

---

**Versjon 1.0**

```{admonition} First version of **AAPS**
:class: note

Den første testversjonen kom i 2015, og den første utgivelsen var i 2016.

Den nøyaktige rekkefølgen av disse utgivelsene er ikke tilgjengelig for øyeblikket, men siden spørsmålet har blitt stilt flere ganger, dokumenterer vi det her.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
