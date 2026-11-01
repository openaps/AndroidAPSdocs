(Troubleshooting-NSClient-troubleshooting-nsclient)=

# Feilsøking av NSClient

NSClient er avhengig av stabil kommunikasjon med Nightscout. En ustabil tilkobling gir synkroniseringsfeil og høyt dataforbruk.

Hvis ingen følger deg på Nightscout, kan du velge å sette NSClient på pause for å spare batteri, eller du kan sette opp NSClient slik at den bare kobler til når du er på Wi-Fi og/eller under lading.

* Hvordan oppdage en ustabil tilkobling?

Åpne NSClient-skjermen (**Konfigurasjon** > **Kommunikasjon** > **NSClientV3** > **Åpne plugin**) og følg med på **Status** og loggen. Med websockets slått på bør statusen holde seg på «tilkoblet», med nesten ingen meldinger om gjentilkobling i loggen. Hvis du ser mange gjentilkoblinger, er det et problem.

* Start på nytt

Som et første steg starter du Nightscout på nytt, og deretter telefonen, for å se om problemet er varig.

Hvis Nightscout er hostet på Heroku, kan du starte Nightscout på nytt slik: logg inn på Heroku, klikk på navnet på nightscout-appen din, klikk på menyen «More» og så på «Restart all dynos».

For andre leverandører følger du leverandørens egen veiledning.

* Problemer med telefonen

Android kan sette telefonen din i hvilemodus. Sjekk at du har et unntak for AAPS i telefonens strøminnstillinger, slik at den alltid får kjøre i bakgrunnen.

Sjekk NSClient igjen når du er et sted med sterkt nettverkssignal.

Prøv en annen telefon.

* Nightscout

Hvis siden din er hostet på Azure, har mange opplevd at tilkoblingsproblemene ble bedre etter at de flyttet til Heroku.

En løsning på tilkoblingsproblemer i Azure er å sette HTTP protocol til 2.0 og Websockets til ON under Application settings

* Ingen BS-måling fra Nightscout

Hvis **AAPS** kobler riktig til Nightscout, men BS vises som N/A: åpne **Synkronisering** i [NSClientV3-innstillingene](#Preferences-nsclient) og slå på **Motta BS-data fra NS**. Dette valget er skjult mens klientstyring er på ([herdet modus](#client-master-control-hardened-mode)); sjekk da at **NSClient BS** er valgt i **Konfigurasjon** → **BS-kilde**.

* Hvis du fortsatt får en feil ...

Sjekk størrelsen på databasen din i MongoDB (eller via pluginen for databasestørrelse i nightscout). Hvis du bruker gratisnivået i MongoDB, betyr 496 MB at den er full og må ryddes opp i. [Følg disse instruksjonene fra Nightscout for å sjekke størrelsen på databasen og rydde ut data](https://nightscout.github.io/troubleshoot/troublehoot/#database-full).

Før du rydder data ut av databasen, og hvis du ikke allerede har satt det opp, bør du vurdere å donere AAPS-dataene dine til Open Humans-prosjektet (til forskning). Instruksjonene finner du på [siden om oppsett av Open Humans](../SupportingAaps/OpenHumans.md).