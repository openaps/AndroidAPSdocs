(aapsclient-app)=
# Aplikacija AAPSClient

**AAPSClient** je pomoćna aplikacija **AAPS-a**: prateća aplikacija za drugi telefon – obično telefon njegovatelja – koja **prati** osobu koja koristi **AAPS**. Od verzije 4 **AAPS-a** njegovatelj može i **daljinski upravljati** petljom putem potpisanih naredbi. Oba telefona komuniciraju preko vaše stranice **Nightscout**; izravna veza između telefona nije potrebna.

```{admonition} Wording used on this page
:class: note
- **Klijent** = telefon na kojem radi **AAPSClient**.
- **Glavni uređaj** = glavni telefon s **AAPS-om** koji upravlja pumpom i pokreće petlju.
```

```{admonition} Which devices can run AAPSClient?
:class: note
Od verzije 4 **AAPS-a** **AAPSClient** radi na Android telefonima i tabletima, na satovima s Wear OS-om i na računalima (Windows, Mac i Linux). Za iPhone ne postoji gotova datoteka za preuzimanje: aplikaciju izrađujete sami. Pogledajte [tablicu preuzimanja po uređajima](#aapsclient-platforms).
```

```{contents} Table of contents
:depth: 2
:local: true
```

## Što AAPSClient jest (a što nije)

**AAPSClient** izgleda i radi slično kao **AAPS**, ali **nema vlastitu petlju**:

- Ne sadrži **APS algoritam**, nema **Ciljeve** i **nema upravljačke programe pumpi** – nikada sam ne dozira inzulin.
- Ni dodaci koje koristi samo glavna aplikacija (**SMS Communicator**, **Tidepool**, **Open Humans**) nisu uključeni.
- Što *jest* uključeno: sinkronizacija **NSClientV3**, dodaci za izvor GUK-a, slanje podataka u **xDrip+** te konektori za **Wear OS** / **Garmin** – sve što je potrebno za praćenje i prosljeđivanje naredbi. Sat **Garmin** spojen na klijent može prikazivati podatke, ali ugljikohidrati koje pošalje ne unose se i ne može spojiti ni odspojiti pumpu: klijent prikazuje poruku, a vi ih umjesto toga unesete u **AAPS**.

Sve što pokrenete iz **AAPSClienta** provjerava, ograničava, potvrđuje i **izvršava glavni uređaj** (telefon s pumpom). Zasebna stranica [Upravljanje glavni uređaj ↔ klijent](ClientMasterControl.md) objašnjava kako to radi: kako upariti dva telefona, kako glavni uređaj piše tekst potvrde koji vidite, kako se isporučuje bolus pokrenut na klijentu i što se događa kada glavni uređaj nije na mreži.

## Verzije: AAPSClient, AAPSClient2 i AAPSClient3

Na isti telefon pratitelja mogu se jedna uz drugu instalirati do tri klijentske aplikacije, a svaka prati **drugu** osobu: **AAPSClient** (ikona žute sove), **AAPSClient2** (plava sova) i – novo u verziji 4 **AAPS-a** – **AAPSClient3** (zelena sova). Funkcionalno su jednake. Razlikuju se samo naziv i boja (ikona aplikacije, pozadina widgeta i odjeljak statusa na početnom zaslonu), tako da ih možete razlikovati. Svaka je aplikacija uparena sa svojim glavnim uređajem. Pojedinosti potražite u odjeljku [O AAPSClientu, AAPSClientu2 i AAPSClientu3](#remotecontrol-aapsclient-versions).

(aapsclient-platforms)=
## Preuzimanje aplikacije

Sve gotove datoteke nalaze se na popisu *Assets* najnovijeg izdanja na [GitHubu](https://github.com/nightscout/AndroidAPS/releases/) (kliknite *Assets* na dnu izdanja da ga proširite). U tablici *x.y.z* označava broj verzije. Odaberite datoteku koja odgovara vašem uređaju:

| Device                       | Datoteka za preuzimanje             | Napomene                                                                                                                                                                                                                          |
| ---------------------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Android telefon ili tablet   | `app-aapsclient-release_x.y.z.apk`  | Instalirajte je kao glavnu aplikaciju: pogledajte [Preuzimanje i instalacija AAPSClienta](#RemoteControl_aapsclient) i [Prijenos i instalacija AAPS-a na vaš pametni telefon](../SettingUpAaps/TransferringAndInstallingAaps.md). |
| Sat s Wear OS-om             | `wear-aapsclient-release_x.y.z.apk` | Ide uz aplikaciju AAPSClient na telefonu. Pogledajte [Postavljanje AAPS-a na vaš Wear OS sat](../WearOS/WearOsSmartwatch.md).                                                                                                     |
| Računalo sa sustavom Windows | `AAPSClient-x.y.z.msi`              | Otvorite datoteku za instalaciju.                                                                                                                                                                                                 |
| Mac                          | `AAPSClient-x.y.z.dmg`              | Pogledajte napomenu o macOS-u ispod tablice.                                                                                                                                                                                      |
| Linux (Debian, Ubuntu)       | `aapsclient_x.y.z_amd64.deb`        | Instalirajte je pomoću svog upravitelja paketa.                                                                                                                                                                                   |
| iPhone                       | nema                                | Ne postoji verzija u App Storeu ni datoteka za preuzimanje. Aplikaciju izrađujete sami, pogledajte [AAPSClient na iPhoneu](#aapsclient-iphone).                                                                                   |

**Pratite dvije osobe?** Svaka gore navedena datoteka postoji i kao *aapsclient2* / *AAPSClient2*. To je druga klijentska aplikacija koja se instalira pored prve, tako da jedan uređaj može pratiti dvije osobe (pogledajte [O AAPSClientu, AAPSClientu2 i AAPSClientu3](#remotecontrol-aapsclient-versions)). **AAPSClient3** nije među datotekama izdanja: izradite ga sami ([varijante izrade](#browserbuild-variant)).

**Datoteke koje treba zanemariti:** datoteke *pumpcontrol* (`app-pumpcontrol-release_…`, `wear-pumpcontrol-release_…`) nisu klijent. Ne preuzimajte ih.

**Mac: prvo pokretanje.** Apple nije ovjerio (notarizirao) aplikaciju, pa je macOS blokira kada je prvi put otvorite. Kliknite *Gotovo* (Done), zatim otvorite *Postavke sustava → Privatnost i sigurnost* (System Settings → Privacy & Security), pomaknite se prema dolje i kliknite *Svejedno otvori* (Open Anyway).

**Računalo: kako se povezati.** Računalo nema kameru, pa se QR kod ne može skenirati. Postavite **Nightscout** u klijentu, zatim na glavnom uređaju dodajte klijenta s **PIN-om** i upišite 8-znamenkasti PIN u klijent (**Upari s glavnim uređajem**). Pogledajte [Uparivanje s glavnim uređajem](#aapsclient-pairing-with-the-master).

**Ista verzija posvuda.** Na glavnom uređaju i na svim njegovim klijentima mora raditi ista verzija **AAPS-a**. Kada ažurirate glavni uređaj, ažurirajte i klijente.

(aapsclient-iphone)=
### AAPSClient na iPhoneu

**AAPSClient** ne postoji u App Storeu i nema gotove datoteke za preuzimanje, pa aplikaciju izrađujete sami:

- Trebate Mac s **Xcodeom** i Apple račun za razvojne programere.
- Projekt je mapa `ios` u [repozitoriju AndroidAPS na GitHubu](https://github.com/nightscout/AndroidAPS/tree/master/ios).
- Izrada za pravi iPhone potpisuje se vašim vlastitim Apple razvojnim timom. Izradi za iPhone simulator on nije potreban.
- Još ne postoji vodič korak po korak. Ova će se stranica ažurirati kada bude dostupan.

Verzija za iPhone uparuje se s glavnim uređajem kao i ostale. Za razliku od verzija za računalo, iPhone može kamerom skenirati QR kod glavnog uređaja.

## Prvo pokretanje: kraći čarobnjak za postavljanje

Pri prvom pokretanju **AAPSClient** pokreće isti **Čarobnjak za postavljanje** koji poznajete iz **AAPS-a**, ali s mnogo manje koraka – na uređaju pratitelja nema postavljanja profila, inzulina, pumpe, APS-a ni ciljeva:

1. **Dobrodošli**, **licencni ugovor**, **dopuštenja** i **glavna lozinka** – isto kao u glavnoj aplikaciji, pogledajte [Čarobnjak za postavljanje AAPS-a](../SettingUpAaps/SetupWizard.md).
2. Klijent **ne** traži **jedinice** ni **donju/gornju granicu**: preuzima ih s glavnog telefona čim se spoji na Nightscout. Kasnije ih možete vidjeti u **Postavkama**, gdje mala **ikona telefona** pokazuje da su [sinkronizirane s glavnim telefonom](#client-master-config-prefs). Mogu se uređivati samo dok je glavni uređaj dostupan.
3. **Postavljanje s glavnog uređaja** – na glavnom uređaju otvorite **Upravljanje → Ovlašteni klijenti**, dodajte ovaj telefon s **QR kodom** i ovdje dodirnite **Skeniraj QR kod**. Jedno skeniranje postavlja Nightscout s vlastitim tokenom ovog telefona i, ako kod služi za uparivanje, ujedno uparuje telefon. Telefon kao naziv svoje instance preuzima i ime s kojim je dodan na glavnom uređaju (slova s dijakritičkim znakovima postaju obična slova, „Miloš“ postaje „Milos“). **Nakon skeniranja postavljanje je završeno**: čarobnjak se zatvara, jer bi sljedeći koraci samo prikazali ono što je kod već napravio. Bez QR koda preskočite ovaj korak. (Ne na računalu: ono nema kameru, pogledajte [Preuzimanje aplikacije](#aapsclient-platforms).)

   ![Korak Postavljanje s glavnog uređaja s gumbom Skeniraj QR kod](../images/v4/AapsClient/aapsclient_wizard_from_master.png)

4. **Komunikacija** – popis dodataka nudi samo ono što treba pratitelju (NSClientV3, xDrip+, Wear, Vanjske prateće aplikacije, Garmin). Ako niste skenirali QR kod, omogućite **NSClientV3** i unesite **isti Nightscout URL** kao na glavnom telefonu te pristupni token, s omogućenim **websocketima** – točno kako je opisano u odjeljku [Sinkronizacija](#RemoteControl_aapsclient). Websocketi su **obavezni** za daljinsko upravljanje iz **AAPSClienta**, na oba telefona.

   ![Korak Komunikacija na klijentu](../images/v4/AapsClient/aapsclient_wizard_communication.png)

5. **Upari s glavnim uređajem** – ovaj korak postoji **samo** na klijentu. On povezuje ovaj uređaj s glavnim uređajem preko sigurnog kanala za naredbe, s PIN-om, i preuzima ime s kojim je telefon dodan na glavnom uređaju, kao i QR kod. **Nakon uparivanja postavljanje je završeno.** Možete ga i preskočiti i upariti bilo kada kasnije putem **Upravljanje → Upari s glavnim uređajem**.

   ![Korak Upari s glavnim uređajem u čarobnjaku klijenta](../images/v4/AapsClient/aapsclient_wizard_pair_step.png)

6. **Tko koristi ovaj telefon?** – samo ako niste uparili u čarobnjaku: ime osobe koja koristi ovaj telefon. Po njemu se ova instanca razlikuje u izvješćima i sinkronizaciji.

(aapsclient-pairing-with-the-master)=

## Uparivanje s glavnim uređajem

Na **glavnom uređaju** otvorite **Upravljanje → Ovlašteni klijenti** i dodajte klijenta. Postoje dva načina uparivanja:

- **S QR kodom** (najbrže, ako telefon ima kameru): skenirajte kod u koraku čarobnjaka „**Postavljanje s glavnog uređaja**“ ili putem **Upravljanje → Upari s glavnim uređajem → Skeniraj QR kod** i potvrdite s „**Koristi**“. Time se postavlja i Nightscout.
- **S PIN-om**: na **klijentu** otvorite gore opisani korak čarobnjaka (ili **Upravljanje → Upari s glavnim uređajem**), upišite jednokratni PIN prikazan na glavnom uređaju i pritisnite „**Upari**“. Klijent zatim pokazuje kojem će uređaju vjerovati – potvrdite s „**Upari**“:

![Potvrda na klijentu prije završetka uparivanja](../images/v4/AapsClient/aapsclient_pair_confirm.png)

Ako uparivanje uspije iz čarobnjaka, postavljanje se završava i otvara se početni zaslon. Na glavnom uređaju klijent se prikazuje kao **Aktivan** na popisu [Ovlašteni klijenti](#client_master_master_setup). Nakon toga **Upravljanje → Upari s glavnim uređajem** prikazuje „*Već upareno*“, ulogu telefona i je li uključen zaštićeni način rada:

![Upravljanje → Upari s glavnim uređajem na uparenom klijentu: Već upareno, Uloga: Njegovatelj, zaštićeni način rada uključen](../images/v4/ClientMaster/pair_with_master_client.png) Cijeli postupak uparivanja, sigurnosni detalji i rješavanje problema nalaze se na stranici [Upravljanje glavni uređaj ↔ klijent](#client_master_client_setup).

Nakon uparivanja klijent od glavnog uređaja dobiva vlastiti Nightscout token (ako glavni uređaj ima administratorski token), samo s pravima koja klijentu trebaju, i prestaje koristiti token koji ste možda unijeli. **AAPSClient** nikada sam ne zapisuje tretmane ni GUK u Nightscout: sve što radi šalje se glavnom uređaju, koji to zapisuje. Pogledajte [Vlastiti Nightscout token klijenta](#client-master-control-own-token).

Glavni uređaj određuje što ovaj telefon smije raditi putem njegove **[uloge](#client-master-control-roles)** (Samo čitanje, Obroci, Njegovatelj ili Admin). **Upravljanje → Upari s glavnim uređajem** prikazuje ulogu telefona.

## Početni zaslon

Početni zaslon klijenta prikazuje istu petlju koju prati:

![Početni zaslon AAPSClienta](../images/v4/AapsClient/aapsclient_home.png)

- **GUK, grafovi, aktivni inzulin / aktivni ugljikohidrati i profil** dolaze iz Nightscouta, točno onako kako ih je glavni uređaj prenio.
- Prikazani **status petlje** je status **glavnog uređaja** (klijent nema vlastitu petlju). Dok klijent ne primi način rada glavnog uređaja iz Nightscouta, oznaka načina rada prikazuje **upitnik** (nepoznato).
- **Kartica statusa** prikazuje spremnik i bateriju **praćene pumpe** i bateriju uređaja koji prenosi podatke, preuzete iz statusa uređaja u Nightscoutu – klijent nema pumpu, pa nigdje u aplikaciji nema lokalnog statusa pumpe ni upravljanja pumpom.
- Donja traka nudi **Tretmani**, **Scene** i **Upravljanje** kada je klijent uparen (prije uparivanja samo **Upravljanje**) – nema kartica za pumpu ni ciljeve.

## Tretmani i radnje

Sve pod **Upravljanje** radi kao u glavnoj aplikaciji, uz jednu važnu razliku: na klijentu su radnje koje bi promijenile terapiju (bolus, ugljikohidrati, privremeni ciljevi, scene…) **skrivene dok uređaj nije uparen**, a nakon uparivanja **prosljeđuju se glavnom uređaju** na potvrdu i izvršenje – pogledajte [Korištenje daljinskog upravljanja](#client-master-control).

Iznimka je stavka **Profil**: prikazuje se i na **neuparenom** klijentu, ali se otvara **samo za pregled** – klijent prikazuje profile koje prima putem Nightscouta (trebaju mu za vlastite izračune), bez gumba za uređivanje ili aktiviranje. Kada je klijent **uparen**, popis profila sinkronizira se s glavnim uređajem i profile možete uređivati i aktivirati s klijenta kao i svaku drugu daljinsku radnju.

Na **neuparenom** klijentu **Upravljanje** nudi samo **Profil** i **Upari s glavnim uređajem**:

![Zaslon Upravljanje na neuparenom klijentu: samo Profil i Upari s glavnim uređajem](../images/v4/AapsClient/aapsclient_manage_unpaired.png)

Crveni natpis „*Glavni uređaj nije dostupan. Uređivanje je onemogućeno dok se veza ponovno ne uspostavi.*“ pojavljuje se i na neuparenom klijentu. To je očekivano: još nema glavnog uređaja do kojeg se može doći. Natpis nestaje kada je klijent uparen i glavni uređaj na mreži.

Kada je klijent uparen, pojavljuju se radnje terapije:

![Zaslon Upravljanje na uparenom klijentu, uključujući stavku Upari s glavnim uređajem](../images/v4/AapsClient/aapsclient_manage.png)

**Nema stavke Pumpa** – klijent nema pumpu.

Ako glavni uređaj nije dostupan, isti se natpis pojavljuje i na uparenom klijentu: radnje terapije su zasivljene, a sve što pokušate blokira se prije slanja. Klijent primijeti da glavni uređaj nije na mreži kada pokušate neku radnju i ponovno omogućuje radnje kada se glavni uređaj vrati na mrežu.

![Zaslon Upravljanje na uparenom klijentu dok glavni uređaj nije na mreži: radnje su zasivljene ispod natpisa](../images/v4/AapsClient/aapsclient_manage_master_offline.png)

## Postavke sinkronizirane s glavnim uređajem

Aktivna **konfiguracija** dodataka i mnoge **postavke** usklađuju se između glavnog uređaja i njegovih uparenih klijenata; sinkronizirane stavke označene su malom **ikonom telefona** i onemogućene su (uz natpis „*Glavni uređaj nije dostupan*“) dok glavni uređaj nije dostupan. To je opisano u odjeljku [Promjena konfiguracije i postavki](#client-master-config-prefs).

## AAPSClient na pametnom satu

Sat s Wear OS-om može se upariti s telefonom **klijenta**; njegove se radnje preko klijenta prosljeđuju glavnom uređaju. Pogledajte [Postavljanje AAPS-a na vaš Wear OS sat](../WearOS/WearOsSmartwatch.md) i [opcije pametnog sata u odjeljku Daljinsko upravljanje](#RemoteControl_smartwatches).
