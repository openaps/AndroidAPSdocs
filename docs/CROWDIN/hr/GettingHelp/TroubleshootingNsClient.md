(Troubleshooting-NSClient-troubleshooting-nsclient)=

# Rješavanje problema s NSClientom

NSClient ovisi o stabilnoj komunikaciji s Nightscoutom. Nestabilna veza dovodi do pogrešaka sinkronizacije i velike potrošnje podataka.

Ako vas nitko ne prati na Nightscoutu, možete pauzirati NSClient da biste uštedjeli bateriju ili možete postaviti NSClient tako da se povezuje samo preko Wi-Fi mreže i/ili tijekom punjenja.

* Kako prepoznati nestabilnu vezu?

Otvorite zaslon NSClienta (**Konfiguracija** > **Komunikacija** > **NSClientV3** > **Otvori dodatak**) i pratite **Status** i dnevnik. Kad su WebSockets omogućeni, status bi trebao ostati „connected“, gotovo bez poruka o ponovnom povezivanju u dnevniku. Ako vidite mnogo ponovnih povezivanja, postoji problem.

* Ponovno pokretanje

Kao prvi korak ponovno pokrenite Nightscout, a zatim svoj telefon, da vidite je li problem trajan.

Ako je vaš Nightscout smješten na Herokuu, Nightscout možete ponovno pokrenuti ovako: prijavite se na Heroku, kliknite naziv svoje aplikacije Nightscout, kliknite izbornik 'More', zatim 'Restart all dynos'.

Za druge pružatelje usluge slijedite dokumentaciju svog pružatelja.

* Problemi s telefonom

Android može staviti vaš telefon u stanje mirovanja. Provjerite imate li u postavkama napajanja telefona iznimku za AAPS, tako da AAPS može stalno raditi u pozadini.

Ponovno provjerite NSClient na mjestu s jakim signalom mreže.

Pokušajte s drugim telefonom.

* Nightscout

Ako je vaša stranica smještena na Azureu, mnogi su primijetili da su se problemi s vezom smanjili nakon prelaska na Heroku.

Zaobilazno rješenje za probleme s vezom na Azureu je da u Application settings postavite HTTP protocol na 2.0 i Websockets na ON

    {admonition} Daljinsko upravljanje treba WebSockets
    :class: important
    WebSockets su **obavezni** za daljinsko upravljanje iz **AAPSClienta**, na oba telefona. Ako se WebSocket veza stalno prekida, daljinsko upravljanje ne radi. Sinkronizacija podataka i dalje radi, ali sporije. Vaš Nightscout poslužitelj mora podržavati WebSockets.

* Nema očitanja GUK-a iz Nightscouta

Ako se **AAPS** ispravno povezuje s Nightscoutom, ali se GUK prikazuje kao N/A: u [postavkama NSClientV3](#Preferences-nsclient) otvorite **Sinkronizacija** i uključite **Primaj CGM podatke iz NS-a**. Ta je opcija skrivena dok je uključeno upravljanje s klijenta ([zaštićeni način rada](#client-master-control-hardened-mode)); u tom slučaju provjerite je li **NSClient GUK** odabran u **Konfiguracija** → **Izvor GUK-a**.

* Ako i dalje dobivate pogrešku...

Provjerite veličinu svoje baze podataka u MongoDB-u (ili putem dodatka za veličinu baze podataka u Nightscoutu). Ako koristite besplatnu razinu (free tier) MongoDB-a, 496 MB znači da je baza puna i da je treba očistiti. [Slijedite ove upute Nightscouta za provjeru veličine baze podataka i brisanje podataka](https://nightscout.github.io/troubleshoot/troubleshoot/#database-full).

Prije brisanja podataka iz baze podataka, ako to još niste postavili, razmislite o doniranju svojih podataka AAPS-a projektu Open Humans (za istraživanje). Upute su na [stranici za konfiguraciju OpenHumansa](../SupportingAaps/OpenHumans.md).