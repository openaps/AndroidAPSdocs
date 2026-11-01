(client-master-control)=
# Master ↔ Client besturing (ondertekende besturing op afstand)

Vanaf **AAPS** versie 4 kan een volgtelefoon met **AAPSClient** veel meer dan alleen behandelingen via Nightscout *aankondigen*: zodra hij **gekoppeld** is met de AAPS-telefoon, kan hij **ondertekende commando's** sturen. De AAPS-telefoon (de **master**) controleert, bevestigt en voert ze uit — ook het geven van een **insulinebolus** met de pomp van de master.

Deze pagina legt uit hoe het werkt, hoe je het instelt en hoe je het gebruikt.

```{contents} Table of contents
:depth: 2
:local: true
```

```{admonition} Wording used on this page
:class: note
- **Master** = de telefoon met **AAPS** die de pomp heeft en de loop draait (de `full` app).
- **Client** = een **AAPSClient**-telefoon zonder pomp die de master volgt en hem nu ook *bestuurt*.
- Beide telefoons moeten met **dezelfde Nightscout**-site verbonden zijn. Alle communicatie gaat nog steeds via Nightscout — er is geen directe verbinding tussen de telefoons nodig.
```

---

## Hoe het werkt

```{admonition} Coming from AAPS v3?
:class: note
In **AAPS** v3 kon **AAPSClient** alleen niet-ondertekende careportal-behandelingen naar Nightscout schrijven, en kon hij geen bolus geven. Besturing op afstand vraagt nu om een eenmalige [koppeling](#client_master_master_setup). Zie ook [Wat is er veranderd in AAPS v4](#v4changes-remote-control).
```

**AAPS** v4 gebruikt een eigen **Client-Control**-kanaal. Het loopt nog steeds via je Nightscout-site (in de `settings`-collectie), maar elk bericht is **cryptografisch ondertekend** met een geheime sleutel die alleen de twee telefoons kennen. De geheime sleutel wordt één keer doorgegeven, tijdens het **koppelen**, en direct daarna vervangen door een nieuwe. Zo gaat hij nooit als leesbare tekst over het netwerk.

Het basisprincipe is **de master beslist**:

1. De client stuurt een *verzoek* (“bolus 2 E”, “start de scène Sport”, “stel dit tijdelijk streefdoel in”…).
2. De **master** rekent de actie opnieuw uit en **begrenst** die met zijn **eigen** actuele gegevens (profiel, IOB, COB, huidig tijdelijk streefdoel, pomp). Daarna **maakt hij de exacte bevestiging** die de gebruiker te zien krijgt.
3. De client (of het horloge) toont de bevestigingstekst van de **master** — hij maakt nooit een eigen tekst.
4. Na de bevestiging **voert de master de actie één keer uit** en meldt het resultaat terug aan de client.

Wat dit voor jou betekent:

- **Ondertekende commando's**: alleen clients die je gekoppeld hebt, kunnen commando's sturen (geheime koppelingssleutel en handtekening per client). Oude of herhaalde commando's worden geweigerd.
- **Een rol voor elke client**: je bepaalt wat elke client mag doen, van *Alleen lezen* tot *Beheerder* — zie [Rollen van clients](#client-master-control-roles).
- **Insulinebolus vanaf een client**: de master geeft de bolus met zijn pomp, en de client toont de voortgang van de toediening.
- **De master beslist**: hij begrenst elke actie met zijn eigen limieten en schrijft de bevestiging die op de client wordt getoond.
- **Alleen gekoppelde clients wijzigen de therapie**: zolang client besturing aan staat, neemt de master geen behandelingen of wijzigingen meer over die direct in Nightscout zijn ingevoerd — zie [Beveiligde modus](#client-master-control-hardened-mode).
- **Elke client krijgt een eigen Nightscout-token** met alleen de rechten die een client nodig heeft — zie [Het eigen Nightscout-token van de client](#client-master-control-own-token).
- **Master offline**: acties worden geblokkeerd met een duidelijke melding.
- **Een client intrekken** kost één tik (per client), of gebruik de schakelaar op de master om alle clients te stoppen.

Acties die je vanaf een client kunt starten: **bolus**, **koolhydraten / eCarbs**, **tijdelijk streefdoel** (instellen & annuleren), **profielwissel**, wijziging van **loop / bedrijfsmodus**, **tijdelijk basaal** (instellen & annuleren), **vertraagde bolus** (instellen & annuleren), **insulinekeuze** en **[scènes](../DailyLifeWithAaps/Scenes.md)**. Een deel van de **instellingen** wordt ook in beide richtingen gelijk gehouden tussen master en clients.

---

## Rollen en voorwaarden

```{admonition} Before you start
:class: important
- De **master** draait de normale `full` versie van **AAPS** en is verbonden met je pomp.
- De **master** gebruikt **NSClientV3** met je Nightscout en toont *verbonden*. Geef hem een **beheerderstoken** (admin token) van je Nightscout: daarmee kan de master voor elke client een eigen token maken en dit aan de client tonen als QR-code.
- De **client** draait **[AAPSClient](AapsClient.md)** (of **AAPSClient2** / **AAPSClient3** voor meer patiënten — zie [Over AAPSClient, AAPSClient2 en AAPSClient3](#remotecontrol-aapsclient-versions)). Hij moet **dezelfde** Nightscout gebruiken. Als je hem instelt met de QR-code van de master, krijgt de client zijn Nightscout-adres en token van de master; stel anders eerst zelf **NSClientV3** op de client in.
- **Websockets** zijn nodig op beide telefoons: commando's bereiken de master alleen via de websocket-verbinding. Zolang client besturing aan staat, houdt **AAPS** websockets aan, op de master en op gekoppelde clients.
```

Koppelen en synchroniseren zijn twee verschillende dingen:

- **Synchronisatie** (gegevens: BG, behandelingen, profiel) stel je in zoals eerder — zie [Synchronisatie](#RemoteControl_aapsclient). De QR-code van de master kan dit voor je doen op de client.
- **Koppelen** (besturing: het ondertekende commandokanaal dat hier wordt beschreven) is de nieuwe stap hieronder.

---

## Instellen

(client_master_master_setup)=
### 1. Op de master — besturing aanzetten en een client toevoegen

Open op de master het scherm **Beheren** en kies **Geautoriseerde clients**.

Zet **Client controle toestaan** aan (standaard staat dit **uit**). Dit is de hoofdschakelaar: als hij uit staat, kan geen enkele client commando's sturen, maar je gekoppelde clients blijven bewaard, zodat je hem later weer aan kunt zetten. Als je hem aanzet, gaat ook de [Beveiligde modus](#client-master-control-hardened-mode) aan. Dit wordt getoond als "*Beveiligde modus ingeschakeld*" met een **(i)** die het uitlegt. In de [Eenvoudige modus](#preferences-simple-mode) staat client besturing altijd aan, daarom wordt de schakelaar niet getoond.

![Scherm Geautoriseerde clients op de master](../images/v4/ClientMaster/authorized_clients_master.png)

Tik op de knop **+** (rechtsonder) om een client toe te voegen. In het venster **Nieuwe client**:

1. Vul een **apparaatnaam** in, zodat je de client in de lijst herkent.
2. Kies **hoe de telefoon wordt ingesteld** (zie de tabel hieronder).
3. Kies de **[rol](#client-master-control-roles)**. Er wordt niets voor je gekozen: de juiste rol hangt af van wie de telefoon gebruikt.

![Venster Nieuwe client op de master: apparaatnaam, hoe de telefoon wordt ingesteld en de rol](../images/v4/ClientMaster/new_client_master.png)

| Manier                              | Wat de nieuwe telefoon krijgt                                                  | Gebruik dit als                                                                                               |
| ----------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| **QR-code: Nightscout en koppelen** | het Nightscout-adres, een eigen Nightscout-token en de koppeling, met één scan | de nieuwe telefoon een camera heeft: de snelste manier, je hoeft niets te typen                               |
| **QR-code: alleen Nightscout**      | het Nightscout-adres en een eigen Nightscout-token, geen koppeling             | de telefoon alleen gegevens moet **tonen** en nooit commando's mag sturen                                     |
| **PIN**                             | alleen de koppeling; de telefoon houdt zijn huidige Nightscout-instellingen    | de telefoon geen camera heeft (of de master geen tokens kan maken); hij moet al met Nightscout verbonden zijn |

De twee manieren met een QR-code hebben een **beheerderstoken** nodig in de **NSClientV3**-instellingen van de master, omdat de master het token van de client in Nightscout aanmaakt. Zonder zo'n token worden de QR-code-opties wel getoond, maar je kunt ze niet kiezen, en het venster zegt waarom; de **PIN** werkt altijd.

#### Met een QR-code

Tik op **OK**: de master maakt het Nightscout-token van de client en toont een **QR-code**. Een code die ook koppelt, werkt ongeveer **twee minuten**; het scherm telt af en sluit vanzelf als de client gekoppeld is. Scan de code op de nieuwe telefoon zoals beschreven in [Op de client](#client_master_client_setup).

```{admonition} The QR code is a secret
:class: warning
Iedereen die de QR-code ziet, kan je Nightscout lezen, en een code die koppelt bevat ook de koppeling. Toon de code alleen aan de nieuwe telefoon. **AAPS** blokkeert schermafbeeldingen zolang de code op het scherm staat.
```

![Het QR-code-scherm van de master met de aftelling (code onscherp gemaakt)](../images/v4/ClientMaster/qr_code_master.png)

#### Met een PIN

Tik op **OK**: de master toont een **koppel-PIN** van 8 cijfers, in twee groepen van vier (bijvoorbeeld `1234 5678`). Deze PIN is **eenmalig** en **verloopt na ongeveer twee minuten**. As with the QR code, the master refuses a client name that is already in its list: each client gets its own Nightscout token under its name.

![Koppelscherm op de master met de eenmalige PIN (de PIN op deze afbeelding is verlopen)](../images/v4/ClientMaster/pairing_pin_master.png)

```{admonition} The pairing PIN is a secret
:class: warning
De PIN beschermt de geheime koppelingssleutel die via Nightscout wordt uitgewisseld. Deel hem alleen met het apparaat dat je koppelt, plaats hem niet openbaar, en laat hem verlopen als je hem niet gebruikt. Je kunt altijd een nieuwe PIN maken door opnieuw op **+** te tikken.
```

(client_master_client_setup)=
### 2. Op de client — koppelen met de master

#### De QR-code scannen

Je kunt de QR-code van de master op twee plekken scannen:

- in de **Setup Wizard** van de client, bij de stap "**Instellen vanaf de master**", die vóór de Nightscout-stap komt. Eén scan stelt dan Nightscout in en, met een code die koppelt, ook de koppeling. Daarmee is het instellen klaar: de wizard sluit en het startscherm opent;
- later op elk moment via **Beheren → Koppel met master → Scan de QR-code**.

De eerste keer vraagt **AAPSClient** toestemming voor de **camera**. Als je dat weigert, zegt het scherm dat de camera nodig is. Je kunt de toestemming dan geven met **Probeer het opnieuw**, of in plaats daarvan koppelen met de PIN.

Richt de camera op de code. De client toont wat de code doet — het Nightscout-adres en, bij een code die koppelt, de master waarmee hij koppelt — en vraagt "**Deze code gebruiken?**". Tik op **Gebruik**: de client zet **NSClientV3** aan, vervangt zijn Nightscout-adres en token door die uit de code en zet websockets aan. Een code die koppelt, koppelt ook de telefoon; hij meldt zich bij de master zodra hij met Nightscout verbonden is.

![De wizardstap Instellen vanaf de master op de client](../images/v4/AapsClient/aapsclient_wizard_from_master.png)

```{admonition} Scanning is available on Android
:class: note
De scanner is nog niet beschikbaar op iOS, en een desktop heeft geen camera: gebruik daar de PIN.
```

#### De PIN invoeren

Open op de client **Beheren → Koppel met master** (of de wizardstap **Koppel met master**, na de Nightscout-stap), **voer de PIN van 8 cijfers in** die op de master staat en tik op **Koppel**. De client gebruikt de PIN om het koppelaanbod veilig via Nightscout op te halen. Daarna vraagt hij "**Koppel met deze master?**" en toont hij de identificatie van de master. Tik op **Koppel** om te bevestigen (zie [Koppelen met de master](#aapsclient-pairing-with-the-master) voor een schermafbeelding).

![Scherm Koppel met master op de client vóór het koppelen — voer hier de PIN in](../images/v4/ClientMaster/pair_with_master_unpaired.png)

#### Na het koppelen

Zodra een client gekoppeld is, stuurt hij een **Hello** (groet) naar de master. Hij verschijnt dan in de lijst **Geautoriseerde clients** van de master als **Actief**, met een tijd *“laatst gezien”*. De client kent zijn [rol](#client-master-control-roles) uit de koppeling, dus hij toont meteen de juiste knoppen. Een koppeling die in de Setup Wizard is gemaakt, rondt de wizard af. In dezelfde stap vervangen de twee telefoons de geheime koppelingssleutel door een nieuwe die nooit over het netwerk is gegaan (zie [Opmerkingen over beveiliging](#client-master-control-security)), en een client die met de PIN is ingesteld krijgt een eigen Nightscout-token (zie [Het eigen Nightscout-token van de client](#client-master-control-own-token)). Een client kan met **één** master tegelijk gekoppeld zijn; om met een andere master te koppelen, kies je eerst **Ontkoppelen**.

![Scherm Koppel met master op de client (al gekoppeld)](../images/v4/ClientMaster/pair_with_master_client.png)

### 3. Clients beheren

In het scherm **Geautoriseerde clients** van de master kun je op elk moment:

- **De rol wijzigen** van een client met de rij van vier knoppen onder de naam. De nieuwe rol werkt meteen, zonder opnieuw te koppelen.
- **Zien met welk Nightscout-token** een client schrijft: "*Eigen Nightscout token*" is wat je wilt. Een rode regel "*Gebruikt het Nightscout token …, dat meer rechten heeft dan een client nodig heeft*" betekent dat de client nog een token met meer rechten gebruikt, meestal je beheerderstoken — zie [Het eigen Nightscout-token van de client](#client-master-control-own-token).
- Een enkele client **intrekken** — tik op het **prullenbak**-pictogram ernaast. De client kan geen commando's meer sturen tot hij opnieuw gekoppeld is. Zijn eigen Nightscout-token wordt ook verwijderd, dus hij kan je Nightscout ook niet meer lezen.
- **Alle besturing stoppen** zonder de koppelingen te verliezen — zet **Client controle toestaan** uit.

Telefoons die zijn ingesteld met **QR-code: alleen Nightscout** staan onder de clients, bij "**Nightscout alleen lezen**". Voor elk van deze telefoons kun je de QR-code opnieuw tonen (om dezelfde telefoon opnieuw in te stellen) of het token verwijderen. Dan heeft de telefoon geen toegang meer tot je Nightscout.

![Geautoriseerde clients met een gekoppelde client (rolknoppen, eigen Nightscout-token) en een telefoon onder Nightscout alleen lezen](../images/v4/ClientMaster/authorized_clients_roles.png)

---

(client-master-control-roles)=
## Rollen van clients

Elke gekoppelde client heeft een **rol**. De master controleert die bij elk commando, en de client toont alleen wat zijn rol toestaat. Een nieuwe rol werkt meteen, zonder opnieuw te koppelen. De rollen bouwen op elkaar voort: elke rol kan alles wat de rol ervoor kan.

| Rol              | De client mag                                                                                                                                                                                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Alleen lezen** | alleen gegevens tonen. Hij blijft gekoppeld, dus hij is klaar als je hem een hogere rol geeft.                                                                                                                                                                                     |
| **Maaltijden**   | een bolus geven, de bolus wizard en QuickWizard gebruiken, koolhydraten invoeren en een lopende bolus stoppen. Koolhydraten die je hier invoert, kunnen ervoor zorgen dat de loop meer insuline geeft.                                                                             |
| **Zorgverlener** | alles doen wat een gebruiker in **AAPS** doet: tijdelijke streefdoelen, profiel- en insulinewissels, loopmodus, tijdelijk basaal, vertraagde bolus, scènes, careportal-gebeurtenissen, kalibraties en records verwijderen. Hij kan geen instellingen of voorinstellingen wijzigen. |
| **Beheerder**    | alles doen, ook instellingen en voorinstellingen (QuickWizard, voorinstellingen voor tijdelijke streefdoelen, scènes, profielen, automatisering, insuline).                                                                                                                        |

De **(i)** bovenaan het scherm **Geautoriseerde clients** toont dezelfde uitleg. Op de client toont **Beheren → Koppel met master** de eigen rol van de telefoon.

---

(client-master-control-hardened-mode)=
## Beveiligde modus

Als **Client controle toestaan** aan staat, is de master in de **beveiligde modus**: hij neemt alleen wijzigingen over van gekoppelde clients. Hij neemt **geen** behandelingen, tijdelijke streefdoelen, profielwijzigingen, wijzigingen van de bedrijfsmodus of verwijderingen over die direct in Nightscout zijn gemaakt, bijvoorbeeld op de Nightscout-website of in andere apps.

- De instellingen voor het overnemen van gegevens uit Nightscout (**NSClientV3 → Synchronisatie**) zijn verborgen zolang de beveiligde modus aan staat; **AAPS** behandelt ze alsof ze uit staan.
- De master **uploadt** nog steeds al zijn gegevens naar Nightscout, BG inbegrepen, en houdt **websockets** aan.
- Als de master zijn **BG uit Nightscout** haalt, neemt hij BG daar nog steeds van over.
- Om de geschiedenis op een **nieuwe** master te laden, gebruik je **Volledige synchronisatie** in **NSClientV3**: dit neemt alles over wat in Nightscout staat, profielen inbegrepen.
- [SMS-commando's](SMSCommands.md) worden niet beïnvloed.

Een gekoppelde client volgt de beveiligde modus van de master: hij houdt websockets aan, en dezelfde Nightscout-instellingen zijn op de client verborgen. Een niet-gekoppelde client houdt zijn eigen instellingen.

De [Eenvoudige modus](#preferences-simple-mode) zet de beveiligde modus altijd aan. Om hem uit te zetten, verlaat je de Eenvoudige modus en zet je **Client controle toestaan** op de master uit.

```{admonition} Why hardened mode
:class: note
Alles wat een gekoppelde client stuurt, wordt ondertekend, gecontroleerd en bevestigd door de master. Een behandeling die op de Nightscout-website is ingevoerd, niet: iedereen met schrijfrechten op je Nightscout kan die toevoegen. In de beveiligde modus kunnen alleen ondertekende commando's veranderen wat de master doet.
```

---

(client-master-control-own-token)=
## Het eigen Nightscout-token van de client

Een client heeft geen beheerderstoken nodig. Hij leest alleen je Nightscout en stuurt zijn commando's via Nightscout naar de master; zelf uploadt hij niets. Daarom geeft de master elke client een eigen Nightscout-token, met alleen deze rechten:

- alles lezen,
- schrijven naar de `settings`-collectie, het kanaal naar de master,
- Nightscout-alarmen sluimeren.

Het token hoort bij een Nightscout-rol met de naam **`aaps-client`**. De master maakt die rol aan de eerste keer dat hij hem nodig heeft. Je kunt de rol en de tokens (met de naam `aaps-` en de naam van de client) zien in de **Admin tools** (beheertools) van je Nightscout-site. Als de rol daar wordt gewijzigd, zet de master hem terug de volgende keer dat hij een token maakt of dat je **Geautoriseerde clients** opent.

Hoe een client zijn token krijgt:

- **Ingesteld met een QR-code**: het token zit in de code.
- **Gekoppeld met de PIN** (of gekoppeld voordat dit bestond): na het koppelen stuurt de master de client zijn eigen token via het gekoppelde kanaal, versleuteld. De client controleert eerst of inloggen ermee werkt, en gebruikt het daarna in plaats van het token dat hij had. Hiervoor heeft de master een beheerderstoken nodig; zonder dat token houdt de client zijn token, en zijn kaart op de master toont de rode regel.

**Een client houdt zijn eigen token.** Zodra de master heeft gezien dat een client met zijn eigen token schrijft, neemt hij de commando's van die client alleen nog met dat token aan. Een commando dat met een ander token is geschreven (bijvoorbeeld een beheerderstoken dat later in de client is ingevoerd, of het token van een andere client) wordt geweigerd, ook al is de client gekoppeld. De client zegt dan "*Het master apparaat heeft dit geweigerd: deze client schrijft met een ander token naar Nightscout dan zijn eigen token*". Zijn kaart op de master meldt dit in het rood. De client wordt nog steeds als online getoond, zodat je kunt zien wat er mis is. Om dit op te lossen, verwijder je de client op de master en voeg je hem opnieuw toe.

De master verwijdert of wijzigt nooit een Nightscout-token dat hij niet zelf heeft gemaakt (een token met andere rollen dan `aaps-client`): die zijn van jou. Hij verwijdert het eigen token van een client wanneer je de client verwijdert.

---

## Besturing op afstand gebruiken

### Een actie starten vanaf de client

Gebruik de client precies zoals je de telefoon zelf zou gebruiken: open **Koolhydraten**, **Insuline**, **Tijdelijk streefdoel**, **Profiel**, **Scènes**, het menu **Beheren**, enz., en vul de waarden in.

Als je bevestigt, toont de client kort **“Maakt verbinding met master…”**. De **master** rekent de actie uit en begrenst die, en daarna toont de client de **eigen bevestiging van de master** — precies de regels, waarden en kleuren die de master op zijn eigen scherm zou tonen. Controleer ze en tik op **OK** om door te gaan.

![Een bevestiging van een scène, gemaakt door de master en getoond op de client](../images/v4/ClientMaster/confirmation_master_authored.png)

Hetzelfde geldt voor een gewone invoer van koolhydraten — de hoeveelheid die ter bevestiging wordt getoond, is de hoeveelheid die de master heeft berekend:

![Bevestiging van koolhydraten, gemaakt door de master](../images/v4/ClientMaster/carbs_confirmation_client.png)

Nadat je hebt bevestigd, voert de master de actie één keer uit en het resultaat wordt op de client getoond.

### Insulinebolus vanaf een client

Dit is de belangrijkste nieuwe mogelijkheid in v4. Een bolus die op een client is gestart, wordt **door de master met zijn pomp gegeven**. De master begrenst hem met zijn eigen limieten, en de client toont de **voortgang van de toediening** zolang die loopt (en een alarm als de pomp een fout meldt).

```{admonition} Boluses are always confirmed and capped on the master
:class: note
Een client bepaalt nooit zelf de hoeveelheid die wordt gegeven. De master rekent die opnieuw uit en begrenst hem, jij bevestigt de hoeveelheid die de master heeft gemaakt, en pas daarna wordt die gegeven.
```

(clientmastercontrol-when-the-master-is-offline)=
### Als de master offline is

Als de master niet bereikbaar is (de telefoon staat uit of slaapt, is niet met Nightscout verbonden, of websockets werken niet), worden besturingsacties op de client **geblokkeerd voordat er iets wordt verstuurd**, en krijg je een duidelijke melding. Er wordt niets half uitgevoerd.

![Melding op de client als de master offline is](../images/v4/ClientMaster/master_offline_error.png)

De client controleert de bereikbaarheid automatisch opnieuw en zet de besturing weer aan zodra de master weer online is.

(clientmastercontrol-wear-os-on-a-client)=

### Wear OS (horloge) op een client

Een horloge dat aan een **client**-telefoon is gekoppeld, stuurt zijn acties via de client door naar de master (horloge → client → master). Het horloge toont de bevestigingsregels van de **master** en het echte resultaat, net als de telefoon. Het horloge instellen is niet veranderd — zie [Wear OS](../WearOS/WearOsSmartwatch.md).


<!-- 📷 SCREENSHOT NEEDED (optional): watch confirmation screen relayed from the master,
     and/or the "Contacting master" state on the watch. Requires a paired Wear OS device. -->

---

(client-master-config-prefs)=
## Configuratie en instellingen wijzigen

Koppelen doet meer dan losse acties doorsturen — het houdt ook de **configuratie** en veel **instellingen** gelijk tussen de master en zijn clients.

### Configuratie (welke plugins actief zijn)

De actieve **plugins** (APS-algoritme, gevoeligheid, vloeiend maken, …) worden op de **master** gekozen en naar elke gekoppelde client **gespiegeld**. Op een client zijn deze keuzes gemarkeerd met een klein **telefoonpictogram** in het scherm [Configuratie](#configuration_sync_icon) — wijzig ze op de master en de clients volgen automatisch, en andersom.

Op een client staat het telefoonpictogram bij *Vloeiend maken*, *Kalibratie*, *Gevoeligheid detectie* en *APS* (gesynchroniseerd vanaf de master), maar niet bij *Communicatie*:

![Configuratielijst op een client — het telefoonpictogram markeert de categorieën die met de master worden gesynchroniseerd](../images/v4/ClientMaster/configuration_client.png)

Verbindingsgegevens die per apparaat verschillen — vooral de **NSClient Nightscout-URL / toegangstoken** — worden *niet* gesynchroniseerd. Elke telefoon heeft zijn eigen gegevens; op een client komen ze uit de QR-code van de master, of je stelt ze zelf in.

### Profielen

Je **profiellijst** wordt ook gelijk gehouden tussen de master en zijn gekoppelde clients. Op een gekoppelde client toont **Beheren → Profiel** dezelfde profielen als de master. Je kunt een profiel **bewerken** of **activeren**, en — net als elk ander commando — wordt de wijziging naar de **master** gestuurd, daar toegepast en teruggesynchroniseerd.

De eerste keer dat je een profiel activeert op een nieuw geïnstalleerde client, kan de client "*Er wordt nog geen insuline gebruikt*" tonen en je vragen om **de insuline te kiezen**. Kies de insuline die op de master actief is (**Beheren → Insuline instellingen** op de master toont die).

Op een client die **niet gekoppeld** is, is het scherm Profiel nog steeds beschikbaar, maar **alleen om te bekijken**: de client toont de profielen die hij via Nightscout ontvangt (hij heeft ze nodig voor zijn eigen berekeningen), maar er is geen knop om te bewerken of te activeren — er is geen master om de wijziging naar te sturen.

### Instellingen

Een deel van de **instellingen** werkt **in beide richtingen**: je kunt ze wijzigen op de **master of op een gekoppelde client**, en de wijziging wordt naar de andere kant gesynchroniseerd. Als je zo'n instelling op een client wijzigt, wordt die via het ondertekende kanaal naar de master gestuurd en daar toegepast. Daarna wordt de geldende waarde teruggestuurd — wat je op de client ziet, is dus altijd wat de master heeft opgeslagen. Als dezelfde instelling bijna tegelijk op twee apparaten wordt gewijzigd, **wint de laatste wijziging**. Bij een instelling met een schuifregelaar wordt de nieuwe waarde verstuurd als je je vinger optilt.

In de instellingen markeert hetzelfde kleine **telefoonpictogram** de afzonderlijke instellingen die worden gesynchroniseerd. In het voorbeeld hieronder wordt *Afkapmoment koolhydraatabsorptie* gesynchroniseerd (telefoonpictogram), terwijl instellingen zonder pictogram alleen voor dit apparaat gelden:

![De instellingen van een plugin — het telefoonpictogram markeert de gesynchroniseerde instellingen](../images/v4/ClientMaster/preferences_synced_icon.png)

```{admonition} The master must be online to change synced settings from a client
:class: note
Omdat de master de opgeslagen waarde bepaalt, moet de master **bereikbaar** zijn als je vanaf een client een configuratie-item wijzigt dat door de master wordt bestuurd, of een instelling die in beide richtingen werkt. Als de master offline is, zijn die bedieningselementen op de client uitgeschakeld (zie [Als de master offline is](#clientmastercontrol-when-the-master-is-offline)).
```

---

(client-master-control-security)=
## Opmerkingen over beveiliging

```{admonition} How the channel is protected
:class: tip
- **Geheime koppelingssleutel**: de master geeft die één keer aan de client — beschermd door de PIN in een Nightscout-document, of in de QR-code — en beide bewaren hem versleuteld.
- **Een nieuwe geheime sleutel direct na het koppelen**: het eerste bericht van de client na het koppelen start een sleuteluitwisseling, en vanaf dat moment gebruiken beide telefoons een geheime sleutel die nooit over het netwerk is gegaan. Een geheime sleutel die iemand misschien heeft gezien (een gefotografeerde QR-code, een PIN-aanbod dat uit Nightscout is gelezen), heeft daarna geen nut meer. Telefoons die gekoppeld zijn voordat dit bestond, doen hetzelfde één keer na de update.
- **Elk commando is ondertekend** (HMAC). De master weigert alles waarvan de handtekening niet past bij een gekoppelde client.
- **Herhalen wordt voorkomen** met een teller per client die alleen oploopt, en elk commando **verloopt** na een korte geldigheidsduur.
- **Zo min mogelijk rechten in Nightscout**: elke client heeft een [eigen Nightscout-token](#client-master-control-own-token), dat alleen kan lezen en schrijven naar het client-control-kanaal. Zodra de client het heeft gebruikt, neemt de master zijn commando's alleen nog met dat token aan. Als je de client verwijdert, wordt het token verwijderd.
- **Alleen ondertekende wijzigingen**: in de [beveiligde modus](#client-master-control-hardened-mode) negeert de master therapiewijzigingen die direct in Nightscout zijn ingevoerd.
- **De master ondertekent wat hij deelt**: de instellingen, de lijst met clients en het teken "master is actief" dat de master in Nightscout zet voor zijn clients, dragen de handtekening van de master. Een client neemt ze alleen over als de handtekening van de master is, dus het token van een andere client kan ze niet wijzigen. De client leert de sleutel van de master bij het koppelen, of uit de QR-code voor een telefoon die Nightscout alleen leest. Een geweigerd document staat in het NSClient-log als "*✕ SETTINGS … refused*".
- **Jij houdt de controle**: geef elke client de [rol](#client-master-control-roles) die hij nodig heeft, trek een client in met één tik, of zet alles uit met **Client controle toestaan**.
```

```{admonition} After restoring a backup
:class: warning
Als een client wordt hersteld uit een back-up die zijn commandoteller terugzet, weigert de master de volgende commando's als herhalingen. **Ontkoppel en koppel opnieuw** om dit op te lossen.
```

---

(client-master-control-troubleshooting)=

## Probleemoplossing

| Symptoom                                                                                                                                  | Wat je moet controleren                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| De client zegt dat de **master offline is**                                                                                               | De telefoon van de master is wakker en draait **AAPS**; beide telefoons zijn verbonden in **NSClientV3**; **websockets** staan aan op beide; dezelfde Nightscout-site.                                                                                                                                                                                                                                          |
| De client zegt dat hij **niet gekoppeld** is                                                                                              | Koppel opnieuw via **Beheren → Koppel met master**. Controleer of de client **Actief** is in de lijst **Geautoriseerde clients** van de master.                                                                                                                                                                                                                                                                 |
| Commando **geweigerd** door de master                                                                                                     | De master controleert opnieuw met zijn huidige toestand — bijvoorbeeld: het gekozen profiel bestaat niet meer, of het pomptype past niet. Controleer het op de master.                                                                                                                                                                                                                                          |
| Commando's werken, maar zijn **traag**                                                                                                    | Zet **websockets** aan op beide telefoons (anders vallen de apps terug op langzamer periodiek ophalen).                                                                                                                                                                                                                                                                                                         |
| Koppelen wordt geannuleerd met *"De koppelingssleutel kon niet worden opgeslagen"*                                                        | Er is niets gewijzigd. Start het koppelen opnieuw; als het blijft mislukken, start **AAPSClient** opnieuw en probeer het nog een keer.                                                                                                                                                                                                                                                                          |
| Er gebeurt niets na het koppelen                                                                                                          | Controleer of **Client controle toestaan** AAN staat op de master, en of de master met Nightscout verbonden is.                                                                                                                                                                                                                                                                                                 |
| De QR-code-opties kunnen niet worden gekozen in het venster **Nieuwe client**                                                             | Het venster zegt waarom. *Geen beheerderstoken*: geef de master een beheerderstoken van je Nightscout, of voeg de client toe met de **PIN**. *Niet verbonden*: wacht tot de master *verbonden* toont in **NSClientV3**.                                                                                                                                                                                         |
| *"Nightscout heeft al een token met deze naam en andere rechten"*                                                                         | Een van je eigen Nightscout-tokens heet `aaps-` plus deze naam. Kies een andere naam voor de client.                                                                                                                                                                                                                                                                                                            |
| *"Een client met deze naam bestaat al"*                                                                                                   | Kies een andere naam, of verwijder eerst die client.                                                                                                                                                                                                                                                                                                                                                            |
| De client zegt *"Deze code komt uit een andere AAPS versie"*                                                                              | Master en client moeten **dezelfde** versie van **AAPS** draaien. Werk de oudste bij.                                                                                                                                                                                                                                                                                                                           |
| De client zegt *"Deze code is verlopen"*                                                                                                  | Een code die koppelt, werkt ongeveer twee minuten. Voeg de client opnieuw toe op de master om een nieuwe code te krijgen.                                                                                                                                                                                                                                                                                       |
| De client zegt *"Deze telefoon is al gekoppeld"*                                                                                          | Ontkoppel hem eerst (**Beheren → Koppel met master → Ontkoppelen**) en scan dan opnieuw. Een code **alleen Nightscout** werkt ook op een gekoppelde telefoon.                                                                                                                                                                                                                                                   |
| De client zegt *"Het master apparaat heeft dit geweigerd: deze client schrijft met een ander token naar Nightscout dan zijn eigen token"* | De client gebruikte eerder zijn eigen Nightscout-token en schrijft nu met een ander token, bijvoorbeeld nadat er een token in zijn Nightscout-instellingen is ingevoerd. Verwijder de client op de master en voeg hem opnieuw toe (zie [Het eigen Nightscout-token van de client](#client-master-control-own-token)).                                                                                           |
| Het NSClient-log op de client toont *"✕ SETTINGS … refused"* en de instellingen volgen de master niet meer                                | Iemand anders heeft het instellingendocument van de master geschreven, of de master heeft een nieuwe sleutel (bijvoorbeeld nadat zijn gegevens zijn gewist). Een gekoppelde client neemt een nieuwe sleutel vanzelf over de volgende keer dat hij met Nightscout verbindt. Een telefoon die Nightscout alleen leest, heeft de QR-code van de master opnieuw nodig (**Nightscout alleen lezen → Toon QR-code**). |
| De kaart van de client toont *"Gebruikt het Nightscout token …"* in het rood                                                              | De client schrijft nog met een token dat meer rechten heeft dan hij nodig heeft. De master stuurt hem na het koppelen zijn eigen token, maar alleen als de master een beheerderstoken heeft. Controleer het token van de master, of stel de client opnieuw in met een QR-code.                                                                                                                                  |
| Een client kan Nightscout niet meer lezen                                                                                                 | Zijn token is verwijderd, bijvoorbeeld omdat de client op de master is verwijderd. Voeg hem opnieuw toe.                                                                                                                                                                                                                                                                                                        |
| Behandelingen die op de Nightscout-website zijn ingevoerd, worden niet toegepast                                                          | Dit is normaal in de [beveiligde modus](#client-master-control-hardened-mode): voer ze in plaats daarvan in op een gekoppelde client.                                                                                                                                                                                                                                                                           |

Voor problemen met Nightscout / synchronisatie, zie eerst [Problemen met NSClient oplossen](../GettingHelp/TroubleshootingNsClient.md).

---


<!-- =====================================================================
     SCREENSHOTS STILL TO ADD:
       1. (optional) Wear OS confirmation relayed from the master
     Already included:
       - authorized_clients_master.png       (master: Allow client control, hardened mode, client card, + button)
       - authorized_clients_roles.png        (master: client card with roles, Read Nightscout only section)
       - new_client_master.png               (master: New client dialog, three ways and role row)
       - qr_code_master.png                  (master: pairing QR code with countdown, code blurred; console screenshot)
       - aapsclient_wizard_from_master.png   (client: Set up from the master wizard step)
       - pair_with_master_unpaired.png       (client: pairing screen, unpaired PIN entry)
       - pairing_pin_master.png              (master: one-time pairing PIN — expired demo PIN)
       - pair_with_master_client.png         (client: pairing screen, paired state)
       - confirmation_master_authored.png    (client: master-authored scene confirmation)
       - carbs_confirmation_client.png       (client: master-authored carbs confirmation)
       - master_offline_error.png            (client: master-offline message)
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
