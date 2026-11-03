# Ställa in rapportservern

Det finns för närvarande två rapportservrar som du kan använda med **AAPS**:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Rapportservrar](../images/Building-the-App/ReportingServer.png)

Vi rekommenderar Nightscout.

(SettingUpTheReportingServer-nightscout)=
## Nightscout

Nightscout är en webbapplikation som kan logga och visa dina CGM-data och **AAPS**-data och skapa rapporter. Det är en kraftfull plattform som har varit integrerad i **AAPS** i många år. Med den kan användare och anhöriga följa personens diabetesdata nästan i realtid (det kan gå bara några sekunder mellan att data tas emot och att de visas, om alla delar har en bra internetanslutning). Den överför också fjärrkommandona som anhöriga skickar till **AAPS** från **AAPSClient** (se [Styrning huvudenhet ↔ klient](#client-master-control)).

Nightscout är programvara med öppen källkod. Vem som helst kan skapa och driva en Nightscout-server med gratis eller betalda tjänster.

Du hittar mer information på [Nightscout-projektets webbplats](http://nightscout.github.io/).

### Alternativ 1 – Ställ in din Nightscout-server själv

För att skapa din rapportserver i Nightscout kan du behöva en eller flera webbapplikationer som måste underhållas. För att få en helt gratis tjänst kan du behöva flytta din Nightscout-webbplats och dina data om leverantörerna tar bort sina gratisnivåer.

En beskrivning av hur du kan sätta upp Nightscout, med för- och nackdelar för de olika driftsalternativen och en uppskattning av kostnaderna, finns [här](https://nightscout.github.io/nightscout/new_user/#free-diy).

### Alternativ 2 – Betala för en Nightscout-tjänst som drivs av någon annan

Det finns också olika tjänsteleverantörer som driver Nightscout åt dig mot en månadsavgift. Kostnaderna är rimliga, och fördelen med en driven tjänst är att du inte behöver kunna IT eller ha någon egen infrastruktur.


Den som redan använder Nightscout kan då och då fundera över var och hur Nightscout-servern drivs, och byta till ett annat alternativ om det passar bättre.

Några värdtjänster för Nightscout finns listade [här](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

### Mer konfiguration av Nightscout

När din Nightscout-instans är igång kan du läsa mer på sidan [Nightscout-konfiguration](../SettingUpAaps/Nightscout.md) om sådant som du också bör tänka på.

(SettingUpTheReportingServer-tidepool)=
## Tidepool

Tidepool har funnits i **AAPS** sedan version 3.2, som släpptes i slutet av 2023.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger
Eftersom det är en fördröjning på tre timmar mellan att data kommer in och att data rapporteras när du använder **AAPS**, passar Tidepool inte för att dela information i realtid med anhöriga.  
Tidepool kan å andra sidan vara en bra lösning för att dela rapporter med personens endokrinolog om Nightscout inte är en godkänd lösning.  
```

Tidepool är ett projekt med [öppen källkod](https://github.com/tidepool-org). Där kan du ha ett konto gratis på Tidepools servrar.

Mer information om hur du ställer in Tidepool med AAPS finns [här](../SettingUpAaps/Tidepool.md).

```{admonition} **AAPS** has the uploader for Tidepool integrated
:class: note
Du behöver **inte** använda uppladdningsappen till Tidepool: **AAPS** laddar upp blodsocker, behandlingar och basal åt dig. Du behöver bara ett personligt konto hos Tidepool. Ladda inte upp dina data med det separata uppladdningsverktyget från Tidepool, eftersom det leder till dubbla värden.  
```

## Nästa steg

När du har ställt in din rapportserver kan du konfigurera **AAPS** på din telefon med [Installationsguiden](./SetupWizard.md), som också kopplar **AAPS** till din rapportserver.