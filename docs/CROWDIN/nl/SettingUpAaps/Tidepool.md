# Tidepool

Tidepool is een externe tool die gegevens over BG, insuline en koolhydraten verzamelt (en de notities die je aan je behandelingen toevoegt). Je kunt deze gegevens analyseren en delen met je zorgteam. Sinds AAPS versie 3.2 kan het worden gebruikt als alternatief voor Nightscout om aan een deel van Doel 1 te voldoen. Je kunt het ook samen met Nightscout gebruiken als extra rapportageplatform dat goed aansluit bij de klinische zorg. Dit kan de gewenste optie zijn voor kinderen die AAPS gebruiken en de functies van Nightscout voor volgen en bedienen op afstand willen, maar ook een rapportageplatform willen waar hun diabetesteam beter mee overweg kan.

Het is belangrijk om te begrijpen dat Tidepool alleen dient voor rapportage. Het is GEEN app om in realtime te volgen. Als je volgers nodig hebt naast de AAPS-telefoon, moet je ook Nightscout instellen.

Let op: de organisatie Tidepool heeft het product Loop voor iOS met FDA-goedkeuring op de markt gebracht. Dit project heeft niets te maken met hun platform voor gegevensrapportage of met AAPS.


## Stap 1 - Maak een Tidepool-account aan

- Ga naar [tidepool.org](https://www.tidepool.org/)

- Kies “Personal Sign Up” of “Sign Up”

- Kies een e-mailadres en wachtwoord en schrijf ze op

- Kies “Personal Account” en klik op “Continue”

- Vul het deel met patiëntgegevens in en accepteer de gebruiksvoorwaarden

- Bevestig je e-mailadres met de instructies die je per e-mail krijgt


## Stap 2 - Verbind AAPS met Tidepool

- Open het **menu** (☰) linksboven in het hoofdscherm en kies "**Configuratie**"

- Open de categorie "**Communicatie**" en zet "**Tidepool**" aan:

![Tidepool aanzetten](../images/v4/Tidepool/tidepool_enable.png)

- Tik op "**Plug-in openen**" onder Tidepool en tik daarna rechtsboven op het pictogram **Aanmelden** (een pijl die een deur in gaat)

- Er opent een browservenster met de aanmeldpagina van Tidepool. Meld je aan met het e-mailadres en wachtwoord die je hierboven in stap 1 hebt aangemaakt:

![Aanmeldpagina van Tidepool](../images/v4/Tidepool/tidepool_login.png)

- Na een geslaagde aanmelding sluit de browser en toont het Tidepool-scherm de status "**Verbonden**"; het logboek eronder toont de uploads van gegevens. Lukt het aanmelden niet, controleer dan of je gegevens juist zijn en of je je e-mailadres bij Tidepool hebt bevestigd.

![Tidepool verbonden](../images/v4/Tidepool/tidepool_status.png)

- Open in de "**Instellingen**" van de Tidepool-plugin "**Verbindings instellingen**". Standaard staat "**Gebruik Nightscout-verbindingsinstellingen**" aan. Tidepool uploadt dan onder dezelfde voorwaarden die je voor Nightscout hebt ingesteld. Zet het uit als je aparte voorwaarden voor Tidepool wilt, bijvoorbeeld om alleen via wifi en tijdens het opladen naar Tidepool te uploaden, terwijl Nightscout ook mobiele data gebruikt.

![Verbindingsinstellingen met Gebruik Nightscout-verbindingsinstellingen aan](../images/v4/Tidepool/tidepool_connection_settings.png) ![Aparte verbindingsinstellingen voor Tidepool](../images/v4/Tidepool/tidepool_connection_settings_separate.png)

Meer hulp bij het gebruik van je gegevens nadat ze naar Tidepool zijn geüpload vind je op: [https://www.tidepool.org/viewing-your-data](https://www.tidepool.org/viewing-your-data)

(tidepool-menu)=
## De knoppen van Tidepool

Rechtsboven in het Tidepool-scherm:

- Het pictogram **Aanmelden** of **Uitloggen** — verbinden met of loskoppelen van je Tidepool-account. Er wordt er maar één getoond: **Aanmelden** als je bent afgemeld, **Uitloggen** als je bent aangemeld. **AAPS** vraagt je om te bevestigen voordat je wordt uitgelogd.
- Het tandwielpictogram — de Tidepool-instellingen.

De knoppen onderaan het Tidepool-scherm:

- "**Nu Uploaden**" — upload nieuwe gegevens meteen in plaats van te wachten op de volgende automatische upload.
- "**Volledige synchronisatie**" — upload alle gegevens die in **AAPS** zijn opgeslagen opnieuw.
- "**Verwijder alle gegevens**" — verwijder **alle** gegevens die **AAPS** naar je Tidepool-account heeft geüpload. Dit kan niet ongedaan worden gemaakt. Gebruik dit alleen om foute of dubbele gegevens te verwijderen. Start daarna "**Volledige synchronisatie**" om je gegevens opnieuw te uploaden.
- "**Logboek wissen**" — maak het logboek op het Tidepool-scherm leeg.

![Het Tidepool-scherm en de knoppen](../images/v4/Tidepool/tidepool_menu.png)

In Tidepool worden de gegevens die **AAPS** 4 uploadt getoond onder de apparaatnaam **AAPS**. Zie [Wat is er veranderd in AAPS v4](#v4changes-tidepool) als je Tidepool met een oudere versie gebruikte. 
