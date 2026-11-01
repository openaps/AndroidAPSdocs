(aapsclient-app)=
# AAPSClient-appen

**AAPSClient** er tilleggsappen til **AAPS**: en hjelpeapp for en annen telefon — vanligvis en omsorgspersons — som **følger** personen som bruker **AAPS**. Fra **AAPS** versjon 4 kan omsorgspersonen også **styre** loopen på avstand gjennom signerte kommandoer. Begge telefonene kommuniserer gjennom **Nightscout**-siden din; det trengs ingen direkte forbindelse mellom telefonene.

```{admonition} Wording used on this page
:class: note
- **Klient** = en telefon som kjører **AAPSClient**.
- **Hovedenhet** = den vanlige **AAPS**-telefonen som eier pumpen og kjører loopen.
```

```{admonition} iPhone version in development
:class: note
**AAPSClient** kjører i dag på Android-telefoner. En iPhone-versjon av **AAPSClient** er under utvikling og er i tidlig testing. Den er ikke gitt ut ennå: det finnes ingen oppføring i App Store og ingenting å laste ned. Denne siden blir oppdatert når den blir tilgjengelig.
```

```{contents} Table of contents
:depth: 2
:local: true
```

## Hva AAPSClient er (og ikke er)

**AAPSClient** ser ut og oppfører seg som **AAPS**, men den har **ingen egen loop**:

- Den inneholder **ingen APS-algoritme**, ingen **Opplæringsmål** og **ingen pumpedrivere** — den doserer aldri på egen hånd.
- Pluginene som bare hovedappen bruker (**SMS-kommunikasjon**, **Tidepool**, **Open Humans**), er heller ikke med.
- Det den *har*: **NSClientV3**-synkronisering, BS-kilde-pluginene, **xDrip+**-kringkasting og **Wear OS**- / **Garmin**-koblingene — alt som trengs for å følge og for å videresende kommandoer. En **Garmin**-klokke som er koblet til en klient, kan vise dataene, men karbohydrater den sender, blir ikke registrert, og den kan ikke koble pumpen til eller fra: klienten viser en melding, og du registrerer dem i **AAPS** i stedet.

Alt du utløser fra **AAPSClient**, blir kontrollert, begrenset, bekreftet og **utført av hovedenheten** (telefonen med pumpen). Den egne siden [Hovedenhet ↔ klientstyring](ClientMasterControl.md) forklarer hvordan dette fungerer: hvordan du parer de to telefonene, hvordan hovedenheten skriver bekreftelsesteksten du ser, hvordan en bolus som startes på klienten blir gitt, og hva som skjer når hovedenheten er frakoblet.

## Versjoner: AAPSClient, AAPSClient2 og AAPSClient3

Opptil tre klientapper kan installeres side om side på samme følgertelefon, der hver følger en **annen** person: **AAPSClient** (gult ugleikon), **AAPSClient2** (blå ugle) og — nytt i **AAPS** versjon 4 — **AAPSClient3** (grønn ugle). De fungerer helt likt. Bare navnet og fargen er forskjellig (appikon, widget-bakgrunn og statusdelen på startskjermen), slik at du kan skille dem fra hverandre. Hver app pares med sin egen hovedenhet. Se [Om AAPSClient, AAPSClient2 og AAPSClient3](#remotecontrol-aapsclient-versions) for detaljer.

## Skaffe appen

Du får tak i **AAPSClient** på samme måte som **AAPS** — se [Nedlasting og installasjon av AAPSClient](#RemoteControl_aapsclient), og installer den som hovedappen ([Overføre og installere AAPS på smarttelefonen din](../SettingUpAaps/TransferringAndInstallingAaps.md)).

## Første start: en kortere Oppsettveiviser

Ved første start kjører **AAPSClient** den samme **Oppsettveiviseren** som du kjenner fra **AAPS**, men med langt færre steg — det er ingen konfigurasjon av profil, insulin, pumpe, APS eller opplæringsmål på en følger:

1. **Velkommen**, **lisensavtale**, **tillatelser** og **hovedpassord** — identisk med hovedappen, se [Oppsettveiviseren i AAPS](../SettingUpAaps/SetupWizard.md).
2. Klienten spør **ikke** om **enheter** eller **lav/høy verdi**: den henter dem fra hovedtelefonen så snart den er koblet til Nightscout. Du kan se dem senere i **Innstillinger**, der et lite **telefonikon** viser at de er [synkronisert med hovedtelefonen](#client-master-config-prefs). De kan bare redigeres mens hovedenheten kan nås.
3. **Sett opp fra hovedenheten** — på hovedenheten åpner du **Administrer → Autoriserte klienter**, legger til denne telefonen med en **QR-kode** og trykker på **Skann QR-koden** her. Én skanning setter opp Nightscout med et eget token for denne telefonen, og hvis koden også parer, parer den telefonen. Telefonen tar også navnet den ble lagt til med på hovedenheten, som sitt instansnavn (bokstaver med aksenter blir vanlige bokstaver, «Miloš» blir «Milos»). **Etter skanningen er oppsettet ferdig**: veiviseren lukkes, fordi de neste stegene bare ville vise det koden allerede har gjort. Uten en QR-kode hopper du over dette steget. (Bare Android: skanneren er ikke tilgjengelig på iOS ennå.)

   ![Steget Sett opp fra hovedenheten med knappen Skann QR-koden](../images/v4/AapsClient/aapsclient_wizard_from_master.png)

4. **Kommunikasjon** — plugin-listen tilbyr bare det en følger trenger (NSClientV3, xDrip+, Klokke, Eksterne hjelpeapper, Garmin). Hvis du ikke skannet en QR-kode, aktiverer du **NSClientV3** og skriver inn den **samme Nightscout URL** som på hovedtelefonen og et tilgangstoken, med **websockets** slått på — nøyaktig som beskrevet under [Synkronisering](#RemoteControl_aapsclient).

   ![Kommunikasjonssteget på klienten](../images/v4/AapsClient/aapsclient_wizard_communication.png)

5. **Koble til hovedenhet** — dette steget finnes **bare** på klienten. Det kobler denne enheten til hovedenheten over den sikre kommandokanalen, med PIN-koden, og tar navnet telefonen ble lagt til med på hovedenheten, på samme måte som QR-koden. **Etter sammenkoblingen er oppsettet ferdig.** Du kan også hoppe over det og pare når som helst senere fra **Administrer → Koble til hovedenhet**.

   ![Steget Koble til hovedenhet i klientens veiviser](../images/v4/AapsClient/aapsclient_wizard_pair_step.png)

6. **Hvem bruker denne telefonen?** — bare når du ikke sammenkoblet i veiviseren: navnet på personen som bruker denne telefonen. Det skiller denne instansen fra andre i rapporter og synkronisering.

(aapsclient-pairing-with-the-master)=

## Pare med hovedenheten

På **hovedenheten** åpner du **Administrer → Autoriserte klienter** og legger til en klient. Det er to måter å pare på:

- **Med en QR-kode** (den raskeste, hvis telefonen har kamera): skann koden i veiviserens steg «**Sett opp fra hovedenheten**» eller fra **Administrer → Koble til hovedenhet → Skann QR-kode**, og bekreft med «**Bruk**». Den setter også opp Nightscout.
- **Med PIN-koden**: på **klienten** åpner du veiviser-steget ovenfor (eller **Administrer → Koble til hovedenhet**), skriver inn engangs-PIN-koden som vises på hovedenheten, og trykker på «**Koble til**». Klienten viser da hvem den er i ferd med å stole på — bekreft med «**Koble til**»:

![Bekreftelsen på klienten før sammenkoblingen fullføres](../images/v4/AapsClient/aapsclient_pair_confirm.png)

Fra veiviseren avslutter en vellykket sammenkobling oppsettet og åpner startskjermen. På hovedenheten vises klienten som **Aktiv** i listen [Autoriserte klienter](#client_master_master_setup). Etterpå viser **Administrer → Koble til hovedenhet** «*Allerede sammenkoblet*», telefonens rolle og om herdet modus er på:

![Administrer → Koble til hovedenhet på en sammenkoblet klient: Allerede sammenkoblet, Rolle: Omsorgsperson, Herdet modus aktivert](../images/v4/ClientMaster/pair_with_master_client.png) Hele sammenkoblingsprosedyren, sikkerhetsdetaljer og feilsøking finner du på [Hovedenhet ↔ klientstyring](#client_master_client_setup).

Etter sammenkoblingen får klienten et eget Nightscout-token fra hovedenheten (hvis hovedenheten har et admin-token), med bare de rettighetene en klient trenger, og slutter å bruke tokenet du eventuelt har skrevet inn. **AAPSClient** skriver aldri behandlinger eller BS til Nightscout selv: alt den gjør, sendes til hovedenheten, som skriver det. Se [Klientens eget Nightscout-token](#client-master-control-own-token).

Hovedenheten bestemmer hva denne telefonen kan gjøre, med **[rollen](#client-master-control-roles)** dens (Kun lesing, Måltider, Omsorgsperson eller Administrator). **Administrer → Koble til hovedenhet** viser telefonens rolle.

## Startskjermen

Klientens startskjerm speiler loopen den følger:

![AAPSClient-startskjermen](../images/v4/AapsClient/aapsclient_home.png)

- **BS, grafer, IOB/COB og profil** kommer fra Nightscout, slik hovedenheten lastet dem opp.
- **Loop-statusen** som vises, er **hovedenhetens** (en klient har ingen egen loop). Til klienten har mottatt hovedenhetens kjøremodus fra Nightscout, viser kjøremodus-brikken et **spørsmålstegn** (ukjent).
- **Statuskortet** viser reservoaret og batteriet til **pumpen som følges** og batteriet til opplasteren, hentet fra enhetsstatusen i Nightscout — en klient har ingen pumpe, så det finnes ingen lokal pumpestatus og ingen pumpeadministrasjon noe sted i appen.
- Linjen nederst tilbyr **Behandlinger**, **Scener** og **Administrer** når klienten er sammenkoblet (bare **Administrer** før sammenkobling) — det finnes ingen faner for pumpe eller opplæringsmål.

## Behandlinger og handlinger

Alt under **Administrer** fungerer som i hovedappen, med én viktig forskjell: på en klient er handlinger som ville endre behandlingen (bolus, karbohydrater, midlertidige mål, scener …) **skjult til enheten er sammenkoblet**, og når den er sammenkoblet, blir de **videresendt til hovedenheten** for bekreftelse og utføring — se [Bruke fjernstyring](#client-master-control).

Oppføringen **Profil** er unntaket: den vises også på en **ikke sammenkoblet** klient, men åpnes **skrivebeskyttet** — klienten viser profilene den mottar gjennom Nightscout (den trenger dem til sine egne beregninger), uten knapper for å redigere eller aktivere. Når klienten er **sammenkoblet**, synkroniseres profillisten med hovedenheten, og du kan redigere og aktivere profiler fra klienten som enhver annen fjernstyrt handling.

På en **ikke sammenkoblet** klient tilbyr **Administrer** bare **Profil** og **Koble til hovedenhet**:

![Administrer-skjermen på en ikke sammenkoblet klient: bare Profil og Koble til hovedenhet](../images/v4/AapsClient/aapsclient_manage_unpaired.png)

Det røde banneret «*Hovedenheten kan ikke nås. Redigering er deaktivert til forbindelsen er gjenopprettet.*» vises også på en ikke sammenkoblet klient. Dette er som forventet: det finnes ingen hovedenhet å nå ennå. Banneret forsvinner når klienten er sammenkoblet og hovedenheten er tilkoblet.

Når klienten er sammenkoblet, vises behandlingshandlingene:

![Administrer-skjermen på en sammenkoblet klient, med oppføringen Koble til hovedenhet](../images/v4/AapsClient/aapsclient_manage.png)

Det finnes **ingen Pumpe-oppføring** — en klient har ingen pumpe.

Hvis hovedenheten ikke kan nås, vises det samme banneret på en sammenkoblet klient: behandlingshandlingene er nedtonet, og alt du prøver, blir stoppet før det sendes. Klienten oppdager at hovedenheten er frakoblet når du prøver en handling, og aktiverer handlingene igjen når hovedenheten er tilbake på nett.

![Administrer-skjermen på en sammenkoblet klient mens hovedenheten er frakoblet: handlingene er nedtonet under banneret](../images/v4/AapsClient/aapsclient_manage_master_offline.png)

## Innstillinger som synkroniseres med hovedenheten

Den aktive plugin-**konfigurasjonen** og mange **innstillinger** holdes synkronisert mellom hovedenheten og de sammenkoblede klientene; synkroniserte elementer er merket med et lite **telefonikon** og er deaktivert (med banneret «*Hovedenheten kan ikke nås*») mens hovedenheten ikke kan nås. Dette er beskrevet under [Endre konfigurasjon og innstillinger](#client-master-config-prefs).

## AAPSClient på en smartklokke

En Wear OS-klokke kan pares med **klient**-telefonen; handlingene fra klokken videresendes gjennom klienten til hovedenheten. Se [Wear OS-smartklokke](../WearOS/WearOsSmartwatch.md) og [smartklokkealternativene under Fjernstyring av AAPS](#RemoteControl_smartwatches).
