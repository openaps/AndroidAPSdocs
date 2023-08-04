# Open Humans Uploader

## Doneer je gegevens aan de wetenschap

Je kunt de community verder helpen door jouw gegevens te doneren aan wetenschappelijk onderzoek. Dit helpt onderzoekers om dit project vooruit te helpen, nieuwe wetenschappelijke ideeën te ontwikkelen en de open mind van open source closed loop systemen te verbreden. AndroidAPS is ready to synchronize your data with [Open Humans](https://www.openhumans.org), a platform allowing you to upload, connect, and store your personal data – such as genetics, activity and health data.

Je behoudt de volledige controle over wat er met je gegevens gebeurt en welke projecten je wilt ondersteunen door ze toegang tot je gegevens te geven. Welke gegevens worden gebruikt en op welke manier, is afhankelijk van de projecten waar je je op OpenHumans bij aansluit.

De volgende gegevens worden geüpload naar je Open Humans account:

- Glucose values
- Careportal events (except notes)
- Extended boluses
- Profile switches
- Total daily doses
- Temporary basals
- Temp targets
- Instellingen
- Application version
- Device model
- Screen dimensions

Geheime of persoonlijke informatie zoals je Nightscout URL of API-secret zal niet worden geüpload.

## Instellen

1. Create your account on [Open Humans](https://www.openhumans.org) if not already done. Je kunt je bestaande Google of Facebook account gebruiken als je wilt.
2. Enable the “Open Humans” plugin in [Config Builder](../Configuration/Config-Builder.md).
3. Open de instellingen door op het tandwiel icoontje te tikken. Je kunt uploaden beperken tot momenten wanneer jouw telefoon gebruik maakt van Wi-Fi en/of wordt opgeladen.
4. Open de Open Humans Plugin (via het menu OH-tabblad of hamburger menu) en klik op 'LOGIN'.

```{image} ../images/OHUploader1.png
:alt: Open Humans Configurator
```

5. Lees de informatie over de Open Humans Uploader en de gebruiksvoorwaarden zorgvuldig.
6. Bevestig door het vakje te selecteren en op 'LOGIN' te klikken.
7. De Open Humans website zal worden geopend. Log in met je inloggegevens.
8. Bepaal of je het lidmaatschap van jouw AndroidAPS-upload wilt verbergen in jouw openbare Open Humans-profiel.
9. Klik op de knop 'Authorize project'.

```{image} ../images/OHUploader2.png
:alt: Open Humans Gebruikersvoorwaarden + Login
```

10. Als je teruggaat naar AAPS ziet je een melding dat het aanmelden is gelukt.
11. Laat de Open Humans Uploader plugin en telefoon ingeschakeld om de setup te voltooien.
12. Nadat je op sluiten hebt geklikt, zie je jouw lidmaatschaps-ID. Queue sizes > 0 shows that there is still data to be uploaded.
13. Klik op 'LOGOUT' als je wilt stoppen met het uploaden van gegevens naar Open Humans.
14. Je zult een Android melding zien met informatie over de voortgang van jouw upload.

```{image} ../images/OHUploader3.png
:alt: Open Humans setup afronden
```

15. You can manage your data by logging in to the [Open Humans website](https://www.openhumans.org).

```{image} ../images/OHWeb.png
:alt: Open Humans gegevens beheren
```

## Gegevens delen met onderzoeksprojecten

### [The 'OPEN' project](https://www.open-diabetes.eu/)

Het 'OPEN'-project brengt een internationale en intersectorale groep patiënten, artsen, sociale wetenschappers, computerwetenschappers en patiëntenbelangenorganisaties samen. Ze onderzoeken verschillende aspecten van Doe-het-zelf-Kunstmatige Pancreas-systemen (DIY APS). For more details see their [website](https://www.open-diabetes.eu/).

September 2020 the 'OPEN' project launched a [survey](https://survey.open-diabetes.eu/) including the option to donate data you uploaded to Open Humans. A [tutorial](https://open-diabetes.eu/en/open-survey/survey-tutorials/) how to donate your data to the 'OPEN' project is available on their site and within the survey itself.

### [OpenAPS Data Commons](https://www.openhumans.org/activity/openaps-data-commons/)

Om gegevenssets van de DIYAPS gemeenschap gemakkelijk beschikbaar te maken voor onderzoek is de OpenAPS Data Commons in het leven geroepen. De gegevens kunnen zowel worden gebruikt door traditionele onderzoekers die wetenschappelijke studies uitvoeren, als door groepen of individuen uit de gemeenschap die gegevens willen bekijken als onderdeel van hun eigen onderzoek. De OpenAPS Data Commons maakt gebruikt van het 'Open Humans'-platform. Via dit platform kunnen alle mensen die gebruik maken van DIYAPS (AndroidAPS, Loop of OpenAPS) hun gegevens uploaden en beschikbaar stellen.

Je kunt jouw gegevens naar Open Humans uploaden op één van deze drie manieren:

1. Gebruik de Open Humans uploader functie die is ingebouwd in de AndroidAPS app
2. Gebruik Nightscout Gegevensoverdracht (Data Transfer)
3. Upload jouw gegevensbestanden handmatig naar Open Humans.

Nadat je een account hebt aangemaakt en je gegevens in Open Humans hebt staan, moet je je gegevens ook nog delen met de OpenAPS Data Commons om jouw gegevens beschikbaar te maken voor onderzoek.

## Gebruiksvoorwaarden

This is an open source tool that will copy your data to [Open Humans](https://www.openhumans.org). We behouden geen rechten om je gegevens met derden te delen zonder je uitdrukkelijke toestemming. De gegevens die het project en de app ontvangen worden opgeslagen onder een willekeurig gegenereerde gebruikers-ID en zullen alleen veilig worden verzonden naar een Open Humans-account met jouw toestemming voor dat proces. You can stop uploading and delete your upload data at any time via [www.openhumans.org](https://www.openhumans.org). Houd er rekening mee dat sommige projecten die gegevens ontvangen dit niet ondersteunen.

Also see [Open Humans Terms of Use](https://www.openhumans.org/terms/).

## Gegevensbescherming

Open Humans beschermt jouw privacy door voor elk project een numerieke ID aan jou toe te wijzen. Hierdoor kunnen projecten jou herkennen, maar ze kunnen je niet identificeren. Het Application ID geüpload door AndroidAPS is vergelijkbaar en helpt alleen de gegevens te beheren. Meer informatie vind je hier:

- [Open Humans Data Use Policy](https://www.openhumans.org/data-use/)
- [Open Humans GDPR](https://www.openhumans.org/gdpr/)
