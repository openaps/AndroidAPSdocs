# Open Humans Uploader

## Doneer je gegevens aan de wetenschap

Je kunt de community verder helpen door jouw gegevens te doneren aan wetenschappelijk onderzoek. This helps scientists to pay it forward, develop new scientific ideas and make open source closed loop systems better known. AAPS kan je gegevens synchroniseren met [Open Humans](https://www.openhumans.org). Dat is een platform waarop je persoonlijke gegevens kunt uploaden, koppelen en bewaren, zoals genetische gegevens, activiteit en gezondheidsgegevens.

Je behoudt de volledige controle over wat er met je gegevens gebeurt en welke projecten je wilt ondersteunen door ze toegang tot je gegevens te geven. Welke gegevens worden gebruikt en op welke manier, is afhankelijk van de projecten waar je je op OpenHumans bij aansluit.

De volgende gegevens worden geüpload naar je Open Humans account:

- Glucose waarden
- Careportal gebeurtenissen (behalve notities)
- Vertraagde bolus
- Profiel wisselingen
- Totale dagelijkse doses
- Tijdelijke basaalstanden
- Tijdelijke streefdoelen
- Instellingen
- Applicatie versie
- Apparaat model
- Scherm afmetingen

Geheime of persoonlijke informatie zoals je Nightscout URL of API-secret zal niet worden geüpload.

## Instellen

1. Maak een account aan op [Open Humans](https://www.openhumans.org) als je dat nog niet hebt gedaan. Je kunt je bestaande Google of Facebook account gebruiken als je wilt.
2. Schakel de **Open Humans** plugin in via [**Configuratie** > **Communicatie**](../SettingUpAaps/ConfigBuilder.md).

![Open Humans ingeschakeld in Configuratie > Communicatie](../images/OHUploader1.png)

3. Tik op **Instellingen** op de kaart **Open Humans**. Je kunt uploads beperken tot momenten waarop de telefoon wifi gebruikt (**Alleen Wifi**) en/of aan het opladen is (**Alleen tijdens opladen**).

![Open Humans instellingen met Alleen Wifi en Alleen tijdens opladen](../images/OHUploader_settings.png)

4. Tik op **Plug-in openen** op de kaart **Open Humans** en tik daarna op **Instellen**.

![Scherm van de Open Humans plugin met de knop Instellen](../images/OHUploader_setup.png)

5. Tik op het scherm **Welkom bij Open Humans** op **Volgende**. Lees het scherm **Toestemming** goed: daar staan de gebruiksvoorwaarden en welke gegevens wel en niet worden geüpload.
6. Zet **Ik begrijp het en ga akkoord.** aan (1) en tik op **Aanmelden bij Open Humans** (2).

![Schermen Welkom en Toestemming van Open Humans in AAPS](../images/OHUploader2.png)

7. De Open Humans website zal worden geopend. Log in met je inloggegevens.
8. Kies of je je lidmaatschap van AAPS Uploader wilt verbergen in je openbare Open Humans profiel (1).
9. Klik op **Authorize project** (project autoriseren) (2).

![Inloggen en project autoriseren op de Open Humans website](../images/OHUploader_web.png)

```{admonition} Older screenshot
:class: note
De schermafbeeldingen hierboven tonen een oudere versie van de Open Humans website en gebruiken nog de oude projectnaam **AndroidAPS Uploader**. De stappen zijn hetzelfde.
```

10. Terug in **AAPS** vraagt het scherm **Laatste details** of je verder wilt gaan. Tik op **Ga verder**.
11. Wacht tot **We zijn klaar!** verschijnt en tik dan op **Sluiten**. Vanaf nu uploadt je telefoon af en toe gegevens op de achtergrond.
12. Het scherm van de **Open Humans** plugin toont nu je **Projectdeelnemer ID**. Tik op **Nu Uploaden** als je meteen een upload wilt starten.
13. Tik op **Uitloggen** als je wilt stoppen met het uploaden van gegevens naar Open Humans.
14. Je zult een Android melding zien met informatie over de voortgang van jouw upload.

![Open Humans setup afronden](../images/OHUploader3.png)

```{admonition} Older screenshot
:class: note
De schermafbeelding hierboven komt uit een eerdere **AAPS**-versie. In **AAPS** 4 heten de bevestigingsschermen **Laatste details** en **We zijn klaar!**, er is geen wachtrij-grootte, en de knoppen zijn **Nu Uploaden** en **Uitloggen**.
```

15. Je kunt je gegevens beheren door in te loggen op de [Open Humans website](https://www.openhumans.org).

![Open Humans gegevens beheren](../images/OHWeb.png)

## Gegevens delen met onderzoeksprojecten

### [Het 'OPEN'-project](https://www.open-diabetes.eu/)

Het 'OPEN'-project brengt een internationale en intersectorale groep patiënten, artsen, sociale wetenschappers, computerwetenschappers en patiëntenbelangenorganisaties samen. Ze onderzoeken verschillende aspecten van Doe-het-zelf-Kunstmatige Pancreas-systemen (DIY APS). Meer informatie vind je op hun [website](https://www.open-diabetes.eu/).

In September 2020 the 'OPEN' project launched a [survey](https://survey.open-diabetes.eu/) including the option to donate data you uploaded to Open Humans. Een [handleiding](https://open-diabetes.eu/en/open-survey/survey-tutorials/) over hoe je je gegevens doneert aan het 'OPEN'-project staat op hun site en in de enquête zelf.

### [OpenAPS Data Commons](https://www.openhumans.org/activity/openaps-data-commons/)

Om gegevenssets van de DIYAPS gemeenschap gemakkelijk beschikbaar te maken voor onderzoek is de OpenAPS Data Commons in het leven geroepen. De gegevens kunnen zowel worden gebruikt door traditionele onderzoekers die wetenschappelijke studies uitvoeren, als door groepen of individuen uit de gemeenschap die gegevens willen bekijken als onderdeel van hun eigen onderzoek. De OpenAPS Data Commons gebruikt het platform 'Open Humans'. Daarmee kunnen mensen hun gegevens van DIYAPS (waaronder AAPS, Loop en OpenAPS) makkelijk uploaden en delen.

Je kunt jouw gegevens naar Open Humans uploaden op één van deze drie manieren:

1. gebruik de uploadoptie in AAPS om je gegevens in Open Humans te zetten
2. Gebruik Nightscout Gegevensoverdracht (Data Transfer)
3. Upload jouw gegevensbestanden handmatig naar Open Humans.

Nadat je een account hebt aangemaakt en je gegevens in Open Humans hebt staan, moet je je gegevens ook nog delen met de OpenAPS Data Commons om jouw gegevens beschikbaar te maken voor onderzoek.

## Gebruiksvoorwaarden

Dit is een open source tool die je gegevens kopieert naar [Open Humans](https://www.openhumans.org). We behouden geen rechten om je gegevens met derden te delen zonder je uitdrukkelijke toestemming. De gegevens die het project en de app ontvangen worden opgeslagen onder een willekeurig gegenereerde gebruikers-ID en zullen alleen veilig worden verzonden naar een Open Humans-account met jouw toestemming voor dat proces. Je kunt op elk moment stoppen met uploaden en je geüploade gegevens verwijderen via [www.openhumans.org](https://www.openhumans.org). Houd er rekening mee dat sommige projecten die gegevens ontvangen dit niet ondersteunen.

Zie ook de [gebruiksvoorwaarden van Open Humans](https://www.openhumans.org/terms/).

## Gegevensbescherming

Open Humans beschermt jouw privacy door voor elk project een numerieke ID aan jou toe te wijzen. Zo kunnen projecten je herkennen, maar niet identificeren. De applicatie-ID die AAPS uploadt werkt op dezelfde manier en helpt alleen bij het beheren van de gegevens. Meer informatie vind je hier:

- [Open Humans beleid voor gegevensgebruik (Data Use Policy)](https://www.openhumans.org/data-use/)
- [Open Humans AVG (GDPR)](https://www.openhumans.org/gdpr/)
