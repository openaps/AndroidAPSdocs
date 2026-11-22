(Troubleshooting-NSClient-troubleshooting-nsclient)=

# Rješavanje problema s NSClientom

NSClient ovisi o stabilnoj komunikaciji s Nightscoutom. Nestabilna veza dovodi do pogrešaka sinkronizacije i velike potrošnje podataka.

Ako vas nitko ne prati na Nightscoutu, možete pauzirati NSClient da biste uštedjeli bateriju ili možete postaviti NSClient tako da se povezuje samo preko Wi-Fi mreže i/ili tijekom punjenja.

* Kako prepoznati nestabilnu vezu?

Open the NSClient screen (**Configuration** > **Communication** > **NSClientV3** > **Open plugin**) and watch the **Status** and the log. With websockets enabled, the status should stay "connected", with almost no reconnection messages in the log. Ako vidite mnogo ponovnih povezivanja, postoji problem.

* Ponovno pokretanje

As a first step, restart Nightscout and then your phone to see if the issue is permanent.

Ako je vaš Nightscout smješten na Herokuu, Nightscout možete ponovno pokrenuti ovako: prijavite se na Heroku, kliknite naziv svoje aplikacije Nightscout, kliknite izbornik 'More', zatim 'Restart all dynos'.

Za druge pružatelje usluge slijedite dokumentaciju svog pružatelja.

* Problemi s telefonom

Android može staviti vaš telefon u stanje mirovanja. Provjerite imate li u postavkama napajanja telefona iznimku za AAPS, tako da AAPS može stalno raditi u pozadini.

Ponovno provjerite NSClient na mjestu s jakim signalom mreže.

Pokušajte s drugim telefonom.

* Nightscout

Ako je vaša stranica smještena na Azureu, mnogi su primijetili da su se problemi s vezom smanjili nakon prelaska na Heroku.

Zaobilazno rješenje za probleme s vezom na Azureu je da u Application settings postavite HTTP protocol na 2.0 i Websockets na ON

    {admonition} Remote control needs websockets
    :class: important
    Websockets are **mandatory** for remote control from **AAPSClient**, on both phones. If the websocket connection keeps dropping, remote control does not work. Data synchronization still works, but more slowly. Your Nightscout host must support websockets.

* Nema očitanja GUK-a iz Nightscouta

If **AAPS** connects to Nightscout correctly but BG displays as N/A: in the [NSClientV3 settings](#Preferences-nsclient), open **Synchronization** and turn on **Receive CGM data from NS**. This option is hidden while client control is on ([hardened mode](#client-master-control-hardened-mode)); in that case check that **NSClient BG** is selected in **Configuration** → **BG Source**.

* Ako i dalje dobivate pogrešku...

Provjerite veličinu svoje baze podataka u MongoDB-u (ili putem dodatka za veličinu baze podataka u Nightscoutu). Ako koristite besplatnu razinu (free tier) MongoDB-a, 496 MB znači da je baza puna i da je treba očistiti. [Follow these Nightscout instructions for checking the size of your database and clearing out data](https://nightscout.github.io/troubleshoot/troubleshoot/#database-full).

Prije brisanja podataka iz baze podataka, ako to još niste postavili, razmislite o doniranju svojih podataka AAPS-a projektu Open Humans (za istraživanje). Upute su na [stranici za konfiguraciju OpenHumansa](../SupportingAaps/OpenHumans.md).