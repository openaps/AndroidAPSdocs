Open Humans Uploader
****************************************
Doneer je gegevens aan de wetenschap
========================================
Je kunt de community helpen door je gegevens te doneren aan onderzoeksprojecten! Dit helpt onderzoekers om dit project vooruit te helpen, nieuwe wetenschappelijke ideeën te ontwikkelen en de open mind van open source closed loop systemen te verbreden.
AndroidAPS is voorbereid om jouw data te synchroniseren met `Open Humans <https://www.openhumans.org>`_, een platform waar je je gezondheidsgegevens kunt uploaden, verbinden en opslaan - en kunt delen. 

Je behoudt de volledige controle over wat er met je gegevens gebeurt en welke projecten je wilt ondersteunen door ze toegang tot je gegevens te geven. Welke gegevens worden gebruikt en op welke manier, is afhankelijk van de projecten waar je je op OpenHumans bij aansluit.

De volgende gegevens worden geüpload naar je Open Humans account: 

* Glucose waarden
* Careportal gebeurtenissen (behalve notities)
* Vertraagde bolus
* Profiel wissel
* Totale dagelijkse doses
* Tijdelijke basaalstanden
* Tijdelijke streefdoelen
* Instellingen
Versienummer
* Apparaat model 
* Scherm afmetingen

Geheime of persoonlijke informatie zoals je Nightscout URL of API-secret zal niet worden geüpload.

Pomp koppelen
========================================
1. Maak jouw eigen account aan op `Open Humans <https://www.openhumans.org>`_ als je dat nog niet hebt. Je kunt je bestaande Google of Facebook account gebruiken als je wilt.
2. Activeer de "Open Humans"-plugin in de `Configurator <../Configuration/Config-Builder.html>`_.
3. Open de instellingen door op het tandwiel icoontje te tikken. Je kunt uploaden beperken tot momenten wanneer jouw telefoon gebruik maakt van Wi-Fi en/of wordt opgeladen. 
4. Open de Open Humans Plugin (via het menu OH-tabblad of hamburger menu) en klik op 'LOGIN'.

.. image:: ../images/OHUploader1.png
  :alt: Open Humans Configurator
    
5. Lees de informatie over de Open Humans Uploader en de gebruiksvoorwaarden zorgvuldig. 
6. Bevestig door het vakje te selecteren en op 'LOGIN' te klikken.
7. De Open Humans website zal worden geopend. Log in met je inloggegevens.
8. Bepaal of je het lidmaatschap van jouw AndroidAPS-upload wilt verbergen in jouw openbare Open Humans-profiel.
9. Klik op de knop 'Authorize project'.

.. image:: ../images/OHUploader2.png
  :alt: Open Humans Gebruikersvoorwaarden + Login

10. Als je teruggaat naar AAPS ziet je een melding dat het aanmelden is gelukt.
11. Laat de Open Humans Uploader plugin en telefoon ingeschakeld om de setup te voltooien.
12. Nadat je op sluiten hebt geklikt, zie je jouw lidmaatschaps-ID. Wachtrijgrootte > 0 geeft aan dat er nog steeds gegevens moeten worden geüpload.
13. Klik op 'LOGOUT' als je wilt stoppen met het uploaden van gegevens naar Open Humans.
14. Je zult een Android melding zien met informatie over de voortgang van jouw upload.

.. image:: ../images/OHUploader3.png
  :alt: Open Humans setup afronden

15. Je kunt jouw gegevens beheren door je aan te melden bij de `Open Humans website <https://www.openhumans.org>`_.

.. image:: ../images/OHWeb.png
  :alt: Open Humans gegevens beheren
     
Gegevens delen
========================================
`Het 'OPEN' project <https://www.open-diabetes.eu/>`_
---------------------------------------------------------------------------------------  
Het 'OPEN'-project brengt een internationale en intersectorale groep patiënten, artsen, sociale wetenschappers, computerwetenschappers en patiëntenbelangenorganisaties samen. Ze onderzoeken verschillende aspecten van Doe-het-zelf-Kunstmatige Pancreas-systemen (DIY APS). Zie hun `website <https://www.open-diabetes.eu/>`_ voor meer informatie.

In september 2020 lanceerde het 'OPEN'-project een `enquête <https://survey.open-diabetes.eu/>`_ met de optie om gegevens te doneren die je hebt geüpload naar Open Humans. `Instructies <https://open-diabetes.eu/en/open-survey/survey-tutorials/>`_ hoe je jouw gegevens aan het 'OPEN'-project kunt doneren, vind je op hun website en binnen de enquête zelf.


`OpenAPS Data Commons <https://www.openhumans.org/activity/openaps-data-commons/>`_
---------------------------------------------------------------------------------------  
The OpenAPS Data Commons was created to enable a simple way to share data sets from the DIYAPS community for research. The data is shared both with traditional researchers who will create traditional research studies, and with groups or individuals from the community who want to review data as part of their own research projects. The OpenAPS Data Commons uses the 'Open Humans' platform to enable people to easily upload and share their data from DIYAPS including AndroidAPS, Loop, and OpenAPS. 

You can get your data into Open Humans via one of three ways: 

1. use the AndroidAPS uploader option to get your data into Open Humans
2. use the Nightscout Data Transfer to get your data into Open Humans
3. manually upload data files into Open Humans. 

Once you've created an account and gotten your data flowing into Open Humans, make sure to also join the OpenAPS Data Commons in order to donate your data for research if you choose.

Gebruiksvoorwaarden
========================================
This is an open source tool that will copy your data to `Open Humans <https://www.openhumans.org>`_. We retain no rights to share your data with third parties without your explicit authorization. The data the project and app receive are identified via a random user ID and will only be securely transmitted to an Open Humans account with your authorization of that process.
You can stop uploading and delete your upload data at any time via `www.openhumans.org <https://www.openhumans.org>`_. Beware that some projects that receive data may not support this.

Also see `Open Humans Terms of Use <https://www.openhumans.org/terms/>`_.

Data Privacy
========================================
Open Humans takes care of protecting your privacy by assigning a numerical ID to you for each project. This allows projects to recognize but no identify you. The Application ID uploaded by AndroidAPS is similar and only helps administrate the data. More information can be found here:

* `Open Humans Data Use Policy <https://www.openhumans.org/data-use/>`_
* `Open Humans GDPR <https://www.openhumans.org/gdpr/>`_


