(Troubleshooting-NSClient-troubleshooting-nsclient)=

# Problemen met NSClient oplossen

NSClient heeft een stabiele verbinding met Nightscout nodig. Een onstabiele verbinding leidt tot synchronisatiefouten en veel dataverbruik.

Als niemand je volgt via Nightscout, kun je NSClient pauzeren om de batterij te sparen. Je kunt NSClient ook zo instellen dat het alleen verbinding maakt via wifi en/of tijdens het opladen.

* Hoe herken je een onstabiele verbinding?

Open het NSClient-scherm (**Configuratie** > **Communicatie** > **NSClientV3** > **Plug-in openen**) en kijk naar de **Status** en het logboek. Met websockets aan moet de status op "connected" (verbonden) blijven, met bijna geen meldingen over nieuwe verbindingen in het logboek. Als je veel nieuwe verbindingen (reconnects) ziet, dan is er een probleem.

* Herstarten

Herstart als eerste stap Nightscout en daarna je telefoon, om te zien of het probleem blijft.

Als je Nightscout op Heroku draait, kun je Nightscout zo herstarten: log in bij Heroku, klik op de naam van je Nightscout-app, klik op het menu 'More' en dan op 'Restart all dynos'.

Voor andere hosts: volg de handleiding van je host.

* Telefoonproblemen

Android kan je telefoon in een slaapstand zetten. Controleer of AAPS een uitzondering heeft in de energie-instellingen van je telefoon, zodat het altijd op de achtergrond mag draaien.

Controleer NSClient opnieuw op een plek met een sterk netwerksignaal.

Probeer een andere telefoon.

* Nightscout

Als je site op Azure draait: veel mensen merkten dat de verbindingsproblemen minder werden na de overstap naar Heroku.

Een oplossing voor verbindingsproblemen in Azure: zet in de Application settings het HTTP-protocol op 2.0 en Websockets op ON

* Geen BG-waarden van Nightscout

Als **AAPS** goed verbinding maakt met Nightscout, maar BG als N/A wordt getoond: open in de [NSClientV3-instellingen](#Preferences-nsclient) het onderdeel **Synchronisatie** en zet **Ontvang CGM gegevens van NS** aan. Deze optie is verborgen als client-besturing aan staat ([Beveiligde modus](#client-master-control-hardened-mode)). Controleer in dat geval of **NSClient BG** is gekozen bij **Configuratie** → **BG bron**.

* Als je nog steeds een foutmelding krijgt...

Controleer de grootte van je database in MongoDB (of via de database size plugin in Nightscout). Als je de gratis versie (free tier) van MongoDB gebruikt, betekent 496MB dat de database vol is en opgeschoond moet worden. [Volg deze Nightscout-instructies om de grootte van je database te controleren en gegevens te verwijderen](https://nightscout.github.io/troubleshoot/troublehoot/#database-full).

Heb je dit nog niet ingesteld? Overweeg dan om je AAPS-gegevens aan het Open Humans-project te doneren (voor onderzoek), voordat je gegevens uit je database verwijdert. De instructies staan op de pagina [Open Humans Uploader](../SupportingAaps/OpenHumans.md).