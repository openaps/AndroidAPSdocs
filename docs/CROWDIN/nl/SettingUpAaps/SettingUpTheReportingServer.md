# De rapportageserver instellen

Er zijn op dit moment twee rapportageservers die je met **AAPS** kunt gebruiken:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Rapportageservers](../images/Building-the-App/ReportingServer.png)

We raden aan om Nightscout te gebruiken.

(SettingUpTheReportingServer-nightscout)=
## Nightscout

Nightscout is een webapplicatie die je CGM-gegevens en **AAPS**-gegevens kan opslaan en tonen, en die rapporten maakt. Het is een krachtig platform dat al vele jaren in **AAPS** is ingebouwd. Gebruikers en verzorgers kunnen hiermee de diabetesgegevens van de patiënt bijna in realtime volgen (tussen het ontvangen en het tonen van de gegevens zitten maar een paar seconden, als alle onderdelen een goede internetverbinding hebben). De server brengt ook de opdrachten op afstand over die verzorgers vanuit **AAPSClient** naar **AAPS** sturen (zie [Master ↔ Client besturing](#client-master-control)).

Nightscout is open-source software. Iedereen kan een Nightscout-server maken en beheren, met gratis of betaalde diensten.

Meer informatie vind je op de [website van het Nightscout-project](http://nightscout.github.io/).

### Optie 1 - Zelf je Nightscout-server opzetten

Voor het maken van je Nightscout-rapportageserver heb je soms een of meer webapplicaties nodig die onderhoud vragen. Wil je een volledig gratis dienst, dan moet je je Nightscout-site en gegevens misschien verhuizen als aanbieders hun gratis versie stoppen.

[Hier](https://nightscout.github.io/nightscout/new_user/#free-diy) vind je een beschrijving van hoe je Nightscout kunt opzetten, met de voor- en nadelen van de verschillende manieren om het te draaien, en een schatting van de kosten.

### Optie 2 - Betalen voor een gehoste Nightscout-dienst

Er zijn ook aanbieders die Nightscout voor je hosten, tegen een maandelijks bedrag. De kosten zijn te overzien. Het voordeel van een gehoste optie is dat je geen IT-kennis of eigen infrastructuur nodig hebt.


Bestaande Nightscout-gebruikers kunnen af en toe opnieuw bekijken waar en hoe hun Nightscout-server wordt gehost, en overstappen naar een andere optie als die beter past.

Een aantal diensten die Nightscout voor je hosten, staan [hier](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

### Nightscout verder configureren

Als je Nightscout-site werkt, kijk dan op de [configuratiepagina van Nightscout](../SettingUpAaps/Nightscout.md) voor meer aandachtspunten.

(SettingUpTheReportingServer-tidepool)=
## Tidepool

Tidepool is beschikbaar in **AAPS** sinds versie 3.2, die eind 2023 is uitgebracht.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger
As there is a delay of three hours between data income and data reporting when using **AAPS**, Tidepool is not suitable for sharing real-time information with caregivers.  
Tidepool kan daarentegen een goede oplossing zijn om rapporten te delen met de endocrinoloog van een patiënt, als Nightscout daar niet geaccepteerd wordt.  
```

Tidepool is een [open source](https://github.com/tidepool-org)-project. Je kunt er gratis een account gebruiken op de servers van Tidepool.

Meer informatie over het instellen van Tidepool met AAPS vind je [hier](../SettingUpAaps/Tidepool.md).

```{admonition} **AAPS** has the uploader for Tidepool integrated
:class: note
Je hoeft de uploader-app van Tidepool **niet** te gebruiken: **AAPS** uploadt bloedglucose, behandelingen en basaal voor je. Je hebt alleen een persoonlijk account bij Tidepool nodig. Upload je gegevens niet met de aparte Tidepool-uploader, want dan krijg je dubbele waarden.  
```

## Volgende stap

Als je je rapportageserver hebt ingesteld, kun je **AAPS** op je telefoon configureren met de [Setup Wizard](./SetupWizard.md). Die koppelt **AAPS** ook aan je rapportageserver.