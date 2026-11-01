# Setting up the Reporting Server

For øyeblikket finnes det to rapporteringsservere som kan brukes med **AAPS**:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Rapporteringsservere](../images/Building-the-App/ReportingServer.png)

We recommend using Nightscout.

(SettingUpTheReportingServer-nightscout)=
## Nightscout

Nightscout er en nettapplikasjon som kan logge og vise CGM-dataene og **AAPS**-dataene dine, og som lager rapporter. Det er en kraftig plattform som har vært integrert i **AAPS** i mange år. It enables users and caregivers to track the patient's diabetes data in near real-time (only a few seconds may pass between data reception and data provision if there is a sufficient Internet connection between all components involved). Den bærer også fjernkommandoene som omsorgspersoner sender til **AAPS** fra **AAPSClient** (se [Hovedenhet ↔ klientstyring](#client-master-control)).

Nightscout is provided as open-source software. Anyone can create and operate a Nightscout server, using either free or paid-for services.

Du finner mer informasjon på [nettsiden til Nightscout-prosjektet](http://nightscout.github.io/).

### Option 1 - Set up your Nightscout server yourself

Creating your Nightscout reporting server can require one or more web-based applications that will require maintenance. In order to have a completely free service, you may need to migrate your Nightscout site and data, if and when providers remove the free tier.

En beskrivelse av hvordan du kan sette opp Nightscout, med fordeler og ulemper ved de ulike driftsalternativene og et anslag over kostnadene, finner du [her](https://nightscout.github.io/nightscout/new_user/#free-diy).

### Option 2 - Pay for a hosted Nightscout service

There are also options from different service providers who host Nightscout for you, with a monthly fee. The costs are manageable, and the advantage of a hosted option is that you do not need to be IT-literate, or have any operating infrastructure.


Existing Nightscout users can reconsider where and how their Nightscout server is hosted from time to time, and change to a different option if it becomes more suitable.

Noen leverandører av Nightscout-hosting er listet opp [her](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

### Further configuration of Nightscout

Når du har fått Nightscout-instansen din opp og gå, se [siden om Nightscout-konfigurasjon](../SettingUpAaps/Nightscout.md) for flere ting å tenke på.

(SettingUpTheReportingServer-tidepool)=
## Tidepool

Tidepool har vært tilgjengelig i **AAPS** siden versjon 3.2, som ble gitt ut sent i 2023.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger  
Siden det er en forsinkelse på tre timer fra data kommer inn til de rapporteres når du bruker **AAPS**, egner Tidepool seg ikke til å dele sanntidsinformasjon med omsorgspersoner.  
På den andre siden kan Tidepool være en god løsning for å dele rapporter med pasientens endokrinolog hvis Nightscout ikke er en godkjent løsning.  
```

Tidepool er et prosjekt med [åpen kildekode](https://github.com/tidepool-org). It offers to run an account free of charge on the Tidepool servers.

Mer informasjon om hvordan du setter opp Tidepool med AAPS finner du [her](../SettingUpAaps/Tidepool.md).

```{admonition} **AAPS** has the uploader for Tidepool integrated
:class: note
Du trenger **ikke** bruke opplastingsappen til Tidepool: **AAPS** laster opp blodsukker, behandlinger og basal for deg. Du trenger bare en personlig konto hos Tidepool. Ikke last opp dataene dine med det separate opplastingsverktøyet til Tidepool, siden det fører til doble verdier.  
```

## Next step

Når du har satt opp rapporteringsserveren din, kan du konfigurere **AAPS** på telefonen din med [Oppsettveiviseren](./SetupWizard.md), som også kobler **AAPS** til rapporteringsserveren din.