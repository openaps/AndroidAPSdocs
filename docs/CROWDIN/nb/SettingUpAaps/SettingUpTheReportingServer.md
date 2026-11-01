# Sette opp rapporteringsserveren

For øyeblikket finnes det to rapporteringsservere som kan brukes med **AAPS**:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Rapporteringsservere](../images/Building-the-App/ReportingServer.png)

Vi anbefaler å bruke Nightscout.

(SettingUpTheReportingServer-nightscout)=
## Nightscout

Nightscout er en nettapplikasjon som kan logge og vise CGM-dataene og **AAPS**-dataene dine, og som lager rapporter. Det er en kraftig plattform som har vært integrert i **AAPS** i mange år. Den gjør det mulig for brukere og omsorgspersoner å følge pasientens diabetesdata nesten i sanntid (det kan gå bare noen få sekunder fra data mottas til de vises, hvis det er god nok internettforbindelse mellom alle komponentene som er involvert). Den bærer også fjernkommandoene som omsorgspersoner sender til **AAPS** fra **AAPSClient** (se [Hovedenhet ↔ klientstyring](#client-master-control)).

Nightscout er programvare med åpen kildekode. Hvem som helst kan opprette og drifte en Nightscout-server, enten med gratis eller betalte tjenester.

Du finner mer informasjon på [nettsiden til Nightscout-prosjektet](http://nightscout.github.io/).

### Alternativ 1 – Sett opp Nightscout-serveren din selv

Å opprette din egen Nightscout-rapporteringsserver kan kreve én eller flere nettbaserte applikasjoner som må vedlikeholdes. For å ha en helt gratis tjeneste kan det hende du må flytte Nightscout-siden og dataene dine hvis og når leverandørene fjerner gratisnivået.

En beskrivelse av hvordan du kan sette opp Nightscout, med fordeler og ulemper ved de ulike driftsalternativene og et anslag over kostnadene, finner du [her](https://nightscout.github.io/nightscout/new_user/#free-diy).

### Alternativ 2 – Betal for en hostet Nightscout-tjeneste

Det finnes også alternativer fra ulike tjenesteleverandører som hoster Nightscout for deg, mot en månedlig avgift. Kostnadene er overkommelige, og fordelen med en hostet løsning er at du ikke trenger IT-kunnskap eller egen infrastruktur for drift.


Eksisterende Nightscout-brukere kan fra tid til annen vurdere på nytt hvor og hvordan Nightscout-serveren deres hostes, og bytte til et annet alternativ hvis det passer bedre.

Noen leverandører av Nightscout-hosting er listet opp [her](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

### Videre konfigurasjon av Nightscout

Når du har fått Nightscout-instansen din opp og gå, se [siden om Nightscout-konfigurasjon](../SettingUpAaps/Nightscout.md) for flere ting å tenke på.

(SettingUpTheReportingServer-tidepool)=
## Tidepool

Tidepool har vært tilgjengelig i **AAPS** siden versjon 3.2, som ble gitt ut sent i 2023.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger
Siden det er en forsinkelse på tre timer fra data kommer inn til de rapporteres når du bruker **AAPS**, egner Tidepool seg ikke til å dele sanntidsinformasjon med omsorgspersoner.  
På den andre siden kan Tidepool være en god løsning for å dele rapporter med pasientens endokrinolog hvis Nightscout ikke er en godkjent løsning.  
```

Tidepool er et prosjekt med [åpen kildekode](https://github.com/tidepool-org). Du får en gratis konto på Tidepool-serverne.

Mer informasjon om hvordan du setter opp Tidepool med AAPS finner du [her](../SettingUpAaps/Tidepool.md).

```{admonition} **AAPS** has the uploader for Tidepool integrated
:class: note
Du trenger **ikke** bruke opplastingsappen til Tidepool: **AAPS** laster opp blodsukker, behandlinger og basal for deg. Du trenger bare en personlig konto hos Tidepool. Ikke last opp dataene dine med det separate opplastingsverktøyet til Tidepool, siden det fører til doble verdier.  
```

## Neste steg

Når du har satt opp rapporteringsserveren din, kan du konfigurere **AAPS** på telefonen din med [Oppsettveiviseren i AAPS](./SetupWizard.md), som også kobler **AAPS** til rapporteringsserveren din.