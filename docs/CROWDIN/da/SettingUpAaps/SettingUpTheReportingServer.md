# Opsætning af rapporteringsserveren

Der er i dag to rapporteringsservere, som kan bruges med **AAPS**:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Rapporteringsservere](../images/Building-the-App/ReportingServer.png)

Vi anbefaler at bruge Nightscout.

(SettingUpTheReportingServer-nightscout)=
## Nightscout

Nightscout er en webapplikation, som kan gemme og vise dine CGM-data og **AAPS**-data og lave rapporter. Det er en stærk platform, som har været integreret i **AAPS** i mange år. Den gør det muligt for brugere og omsorgspersoner at følge patientens diabetesdata næsten i realtid (der går kun få sekunder, fra data modtages, til de vises, hvis der er en god nok internetforbindelse mellem alle de dele, der er med). Den overfører også de fjernkommandoer, som omsorgspersoner sender til **AAPS** fra **AAPSClient** (se [Styring mellem hovedenhed ↔ klient](#client-master-control)).

Nightscout er open source-software. Alle kan oprette og drive en Nightscout-server med gratis eller betalte tjenester.

Du kan finde flere oplysninger på [Nightscout-projektets websted](http://nightscout.github.io/).

### Mulighed 1 - Sæt selv din Nightscout-server op

Når du opretter din Nightscout-rapporteringsserver, kan det kræve en eller flere webbaserede applikationer, som skal vedligeholdes. For at have en helt gratis tjeneste kan du blive nødt til at flytte dit Nightscout-websted og dine data, hvis udbyderne fjerner deres gratis tilbud.

Du kan finde en beskrivelse af, hvordan du sætter Nightscout op, med fordele og ulemper ved de forskellige måder at drive den på og et skøn over prisen, [her](https://nightscout.github.io/nightscout/new_user/#free-diy).

### Mulighed 2 - Betal for en hostet Nightscout-tjeneste

Der er også forskellige udbydere, som hoster Nightscout for dig mod et månedligt gebyr. Prisen er overkommelig, og fordelen ved en hostet løsning er, at du ikke behøver at kunne noget om IT eller have din egen infrastruktur.


Nuværende Nightscout-brugere kan en gang imellem overveje, hvor og hvordan deres Nightscout-server bliver hostet, og skifte til en anden løsning, hvis den passer bedre.

Nogle hostede Nightscout-tjenester er listet [her](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

### Yderligere konfiguration af Nightscout

Når din Nightscout-instans er sat op og kører, så se siden [Nightscout](../SettingUpAaps/Nightscout.md) for flere ting, du skal overveje.

(SettingUpTheReportingServer-tidepool)=
## Tidepool

Tidepool har været tilgængelig i **AAPS** siden version 3.2, som kom i slutningen af 2023.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger
Da der er en forsinkelse på tre timer, fra data kommer ind, til de bliver vist, når du bruger **AAPS**, er Tidepool ikke egnet til at dele oplysninger i realtid med omsorgspersoner.  
Til gengæld kan Tidepool være en god løsning til at dele rapporter med patientens diabeteslæge, hvis Nightscout ikke bliver accepteret.  
```

Tidepool er et [open source](https://github.com/tidepool-org)-projekt. Du kan få en gratis konto på Tidepools servere.

Flere oplysninger om opsætning af Tidepool med AAPS finder du [her](../SettingUpAaps/Tidepool.md).

```{admonition} **AAPS** has the uploader for Tidepool integrated
:class: note
Du behøver **ikke** at bruge uploader-appen til Tidepool: **AAPS** uploader blodsukker, behandlinger og basal for dig. Du skal kun have en personlig konto hos Tidepool. Upload ikke dine data med Tidepools separate uploader-værktøj, da det vil give dobbelte værdier.  
```

## Næste trin

Når du har sat din rapporteringsserver op, kan du konfigurere **AAPS** på din telefon med [AAPS-opsætningsguiden](./SetupWizard.md), som også forbinder **AAPS** med din rapporteringsserver.