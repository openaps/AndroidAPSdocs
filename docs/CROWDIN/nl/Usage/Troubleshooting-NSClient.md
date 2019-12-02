# Problemen met NSClient oplossen

NSClient is afhankelijk van een stabiele communicatie met Nightscout. Een onstabiele internetverbinding leidt tot synchronisatie fouten en een hoog dataverbruik.

Als niemand je volgt op Nightscout, kun je NSClient pauzeren om (veel) batterijduur te besparen of je kunt instellen dat je alleen verbinding maakt op wifi en tijdens het opladen.

* Hoe weet je of je een instabiele verbinding hebt?

Ga naar NSClient tab in AAPS en kijk het logboek. Common behavior is to receive PING every ~30s and almost none reconnection messages. Als je veel disconnect event meldingen ziet, is er een probleem. Since AndroidAPS 2.0 when such behavior is detected NSClient is paused for 15 minutes and message "NSClient malfunction" on Overview is displayed.

* Herstarten

Wat je als eerste stap moet proberen is herstarten, zowel Nightscout als je telefoon om te zien of het een blijvend probleem is

* Telefoonproblemen

Android kan je telefoon in de slaapstand zetten. Controleer of je een uitzondering hebt ingesteld voor AndroidAPS in de batterijoptimalisatie-opties om het op de achtergrond te laten uitvoeren. Controleer of de problemen weg zijn terwijl je een goede internetverbinding hebt. Probeer een andere telefoon.

* Nightscout

Voor veel mensen die Azure gebruikten, heeft het geholpen om naar Heroku te verhuizen. Onlangs is een Azure workaround bekend gemaakt: het zou helpen om HTTP protocol in "Application settings" op 2.0 te zetten en "Websockets" op ON

* Als je nog steeds een foutmelding krijgt...

Controleer de grootte van jouw database in mLab. 496MB betekent dat hij vol is en moet worden verkleind. [Volg deze OpenAPS instructies om de grootte van jouw database te controleren](https://openaps.readthedocs.io/en/latest/docs/Troubleshooting/Rig-NS-communications-troubleshooting.html#mlab-maintenance). Als het verkleinen (compacting) niet werkt, overweeg dan om jouw AndroidAPS-gegevens te doneren aan de Data Commons (voor onderzoek) voordat je gegevens gaat verwijderen. Er zijn [instructies in de OpenAPS documentatie](https://openaps.readthedocs.io/en/latest/docs/Give%20Back-Pay%20It%20Forward/data-commons-data-donation.html) voor hoe dit moet.