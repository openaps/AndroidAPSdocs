# SMS-commando's

```{contents} Table of contents
:depth: 2
```

De meeste aanpassingen op afstand (tijdelijke streefdoelen, koolhydraten, profielwissels en, als de client gekoppeld is, bolussen) kun je doen met de [**AAPSClient**-app](../RemoteFeatures/RemoteMonitoring.md) op een Android-telefoon met internetverbinding, zie [Master ↔ Client besturing](#client-master-control) (een iPhone-versie van **AAPSClient** is in ontwikkeling, zie [AAPSClient](AapsClient.md)). SMS-commando's blijven een alternatief dat zonder internet werkt. Het is ook de enige mogelijkheid op afstand als je een iPhone als volger gebruikt en nog geen **AAPSClient** hebt.

**SMS-commando's zijn erg handig:**
1. Voor gewone bediening op afstand

2. Als je op afstand insuline wilt bolussen zonder gekoppelde **AAPSClient**

3. In een gebied met slecht internetbereik, waar sms-berichten wel aankomen maar mobiele data/internet beperkt is. Dit is heel handig als je naar afgelegen gebieden gaat (bijv. kamperen, skiën).

4. Als je andere manier van bediening op afstand (**AAPSClient**) tijdelijk niet werkt

## Veiligheid voorop

Als je **SMS Commando's** in **AAPS** inschakelt, bedenk dan dat de telefoon die commando's op afstand mag geven, gestolen kan worden en/of door iemand anders gebruikt kan worden. Vergrendel je telefoon altijd met minstens een pincode. Een sterk wachtwoord en/of biometrische vergrendeling wordt sterk aangeraden. Zorg dat dit anders is dan je APK-hoofdwachtwoord (het wachtwoord dat nodig is om de instellingen van **AAPS** te exporteren).

Daarnaast wordt aangeraden om een [tweede telefoonnummer](#SMSCommands-authorized-phone-numbers) toe te staan voor SMS-commando's. Zo kun je met het tweede nummer de SMS-commando's [uitschakelen](#SMSCommands-other) als je belangrijkste telefoon voor bediening op afstand in verkeerde handen komt.

The default minimum time delay between bolus commands is 15 minutes, counted from the moment the pump accepts a bolus. Om veiligheidsredenen moet je minstens twee geautoriseerde telefoonnummers toevoegen om deze tijd korter te maken. Als je binnen 15 minuten na de vorige bolus opnieuw een bolus op afstand probeert, krijg je het antwoord “Bolus op afstand niet beschikbaar. Probeer het later opnieuw”

AAPS laat je ook per SMS weten of je commando's op afstand, zoals een bolus of een profielwijziging, zijn uitgevoerd. Het wordt aangeraden om ten minste 2 telefoonnummers te koppelen in de SMS communicator instellingen. Mocht één van de gekoppelde telefoons worden gestolen, dan zul je deze bevestigings-SMS'jes evengoed nog op het tweede telefoonnummer binnenkrijgen.

**Als je bolust via SMS-commando's, moet je de koolhydraten apart invoeren (tweede SMS, AAPSClient...)!** Als je dat niet doet, klopt de IOB wel, maar is de COB te laag. Dan geeft **AAPS** mogelijk geen correctiebolus, omdat het denkt dat je te veel actieve insuline hebt.

Voor de gevoelige commando's moet een authenticator-app met een tijdgebonden eenmalig wachtwoord worden gebruikt, voor meer veiligheid.

Als je een telefoon van een verzorger geen SMS-commando's meer wilt laten sturen, gebruik dan de noodknop “[Reset Authenticatie](#sms-commands-authenticator-setup)” in **AAPS** of stuur het SMS-commando “[SMS stop](#SMSCommands-other)”. Door de authenticators te resetten, maak je ALLE telefoons van verzorgers ongeldig. Je moet ze daarna opnieuw instellen.

## Instellen van SMS-commando's

```{contents} The overall process is as follows
:depth: 1
:local: true
```

(sms-commands-authenticator-setup)=
### Authenticatie instellingen

Tweestapsverificatie wordt gebruikt om de veiligheid te verbeteren.

Download (uit de App Store of Google Play) en installeer een authenticator-app op de telefoon van de verzorger. Populaire gratis apps zijn:
  - [Authy](https://authy.com/download/)
  - Google Authenticator - [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) / [iOS](https://apps.apple.com/de/app/google-authenticator/id388497605)
  - [LastPass Authenticator](https://lastpass.com/auth/)
  - [FreeOTP Authenticator](https://freeotp.github.io/)

Deze authenticator-apps maken een tijdgebonden, eenmalig wachtwoord van 6 cijfers, zoals bij mobiel bankieren of online winkelen. Je kunt een andere authenticator-app gebruiken, zolang die RFC 6238 TOTP-tokens ondersteunt. Microsoft Authenticator werkt niet.

### Controleer de instellingen van de telefoon

Ga op je telefoon naar **Apps > AAPS > Machtigingen**. Zorg dat **Sms** en **Telefoon** zijn toegestaan.

![Afbeelding](../images/remote-control-08.png)

```{admonition} "App was denied access to SMS"
:class: tip
Android kan de machtiging **Sms** blokkeren voor apps die niet uit een app store zijn geïnstalleerd, zoals **AAPS**. Als je deze melding ziet wanneer je de machtiging **Sms** geeft, open dan op de telefoon **Instellingen > Apps > AAPS**, tik op het menu **⋮** (rechtsboven) en kies **Allow restricted settings** (beperkte instellingen toestaan). Geef daarna de machtiging **Sms** opnieuw.
```

![App is toegang tot SMS geweigerd](../images/sms_permission_restricted.png)

### Datum en tijd gelijk laten lopen

De tijd op beide telefoons moet gesynchroniseerd zijn. Het beste is om de tijd automatisch via het netwerk te laten instellen. Tijdverschillen kunnen leiden tot problemen met de verificatie.

Controleer op zowel de **AAPS**-telefoon als de telefoon van de verzorger of datum en tijd gelijk lopen. Hoe je dit precies doet, hangt af van je toestel. Misschien moet je verschillende instellingen uitproberen.

Voorbeeld (voor Samsung S23): **Instellingen > Algemeen beheer > Datum en tijd**: zorg dat **Automatische datum en tijd** is aangevinkt.

Sommige opties kunnen grijs zijn, omdat een beheerder via een gezinsaccount nodig is als de telefoon als kinderaccount is ingesteld. Op een iPhone van een verzorger/ouder heet deze instelling voor datum en tijd “Stel automatisch in”. Als je niet zeker weet of de toestellen gelijk lopen, geen zorgen: je kunt de SMS-commando's instellen en daarna problemen oplossen als dit problemen lijkt te geven (vraag zo nodig om hulp).

### AAPS-instellingen

Nu de instellingen van de telefoon zijn gecontroleerd, ga je in de **AAPS**-app zelf naar [**Configuratie** → **Communicatie**](../SettingUpAaps/ConfigBuilder.md) en schakel je de plugin **SMS Commando's** in.

Open de instellingen van **SMS Commando's**.

Schakel **Sta opdrachten via SMS toe** in. De opties **Extra verplichte PIN aan einde van token** en **Authenticatie instellingen** verschijnen pas als dit is ingeschakeld:

![Instellingen van SMS Commando's](../images/sms_communicator_settings.png)

(SMSCommands-authorized-phone-numbers)=
#### Geautoriseerde telefoonnummers

Voer het telefoonnummer (of de telefoonnummers) van de verzorger in. Zet de landcode ervoor en laat de eerste “0” van het telefoonnummer weg, zoals in deze voorbeelden:
* Telefoonnummer VK: +447976304596
* Telefoonnummer VS: +11234567890
* Telefoonnummer FR:  +33612344567
* _enz._

Let op: afhankelijk van waar je woont is de “+” voor het nummer wel of niet nodig. Om dit te bepalen, stuur je een testbericht. Het ontvangen formaat wordt dan getoond op het scherm van de plugin **SMS Commando's** (**Configuratie** → **Communicatie** → **SMS Commando's** → **Plug-in openen**).

Als je meer dan één telefoonnummer wilt toevoegen, scheid ze dan met puntkomma's, **ZONDER spatie tussen de nummers** (dit is heel belangrijk!). Kies **OK**:

![Geautoriseerde telefoonnummers](../images/sms_allowed_numbers.png)

#### Minimale tijd tussen opdrachten

- Je kunt de minimale tijd (in minuten) instellen tussen twee bolussen die via SMS worden gegeven.
- Om veiligheidsredenen moet je ten minste twee geautoriseerde telefoonnummers toevoegen om deze waarde te kunnen veranderen.

#### Extra verplichte PIN aan einde van token

Om veiligheidsredenen moet na de antwoordcode een pincode komen. Kies een pincode die jij (en andere verzorgers) gaan gebruiken aan het einde van de authenticator-code als je het SMS-commando stuurt.

Eisen voor de pincode:

* minstens 6 cijfers
* alleen cijfers

Gebruik voor een veiligere PIN niet vaak hetzelfde cijfer (_bijv._ 111111) of een reeks (_bijv._ 123456).

![Extra verplichte PIN aan einde van token](../images/sms_pin.png)

#### Authenticatie instellingen

* Tik op **Authenticatie instellingen** en volg de stap-voor-stap-instructies op het scherm.
* Open de geïnstalleerde authenticator-app op de _telefoon van de verzorger_, stel een nieuwe verbinding in en
* Scan met de telefoon van de verzorger de QR-code die getoond wordt onder **Scan code om AAPS OTP codes in te stellen**.

![Authenticator instellen met QR-code](../images/sms_authenticator_setup.png)

* Voer onder **Test eenmalig wachtwoord (One Time Password)** bij **Te controleren code** de eenmalige code uit de authenticator-app op de telefoon van de verzorger in, gevolgd door je PIN:

Voorbeeld:
* De token van de authenticator-app is 457051
* Je verplichte pincode is 2401
* Te controleren code: 4570512401

Als de invoer goed is, verandert de rode tekst “FOUTIEVE PIN” vanzelf in een groene “OK”. **Er is geen knop om op te drukken!** Het proces is nu klaar. Er is geen knop “OK” waarop je moet drukken na het invoeren van de code:

![Test eenmalig wachtwoord en Reset Authenticatie](../images/sms_authenticator_test.png)

De SMS-commando's zijn nu ingesteld.

Gebruik de knop **Reset Authenticatie** onderaan het scherm **Authenticatie instellingen** als je ingestelde authenticators wilt verwijderen. (Door de authenticators te resetten maak je ALLE al ingestelde authenticators ongeldig. Je moet ze daarna opnieuw instellen.)

## SMS-commando's gebruiken

### Eerste stappen met SMS-commando's

1)  Controleer of je alles goed hebt ingesteld: test de verbinding door “bg” als SMS te sturen van de telefoon van de verzorger naar de **AAPS**-telefoon. Je krijgt dan een antwoord dat lijkt op het voorbeeld hier:

![Afbeelding](../images/remote-control-06.png)

Als je geen antwoord krijgt, kijk dan in het onderdeel [Probleemoplossing](#SMSCommands-troubleshooting) hieronder.

2)  Probeer nu een SMS-commando dat de authenticator nodig heeft, _bijv._ “target hypo”. De telefoon van de verzorger krijgt een bericht terug met de vraag om het **wachtwoord van zes cijfers** uit de authenticator-app in te voeren, gevolgd door de extra geheime **PIN** die alleen verzorgers/volgers kennen (in totaal twaalf cijfers, als je PIN 6 cijfers heeft).

Als je voor het eerst een SMS-commando stuurt, probeer het dan uit terwijl de **AAPS**-telefoon bij je is, zodat je ziet hoe het werkt:

![Afbeelding](../images/remote-control-16.png)

De telefoon van de verzorger krijgt een SMS terug van **AAPS** die bevestigt of het SMS-commando op afstand goed is uitgevoerd.

Als je commando gelukt is, krijg je een antwoord dat dit bevestigt. Als er een probleem is, krijg je een foutmelding. Zie [Probleemoplossing](#SMSCommands-troubleshooting) hieronder voor veelvoorkomende fouten.

**Tip**: Het kan handig zijn om onbeperkt sms'en in je abonnement te hebben (voor elke gebruikte telefoon) als je veel sms-berichten verstuurt.

### Maaltijdbolussen geven met SMS-commando's

Insuline op afstand bolussen kan via **SMS-commando's** of via een gekoppelde **AAPSClient** (zie [Master ↔ Client besturing](#client-master-control)); het kan niet via de Nightscout-website. Koolhydraten kun je ook via SMS of **AAPSClient** invoeren. Met SMS kun je niet koolhydraten en insuline samen in één SMS-bericht sturen. Deze commando's moet je als volgt apart sturen:

1)  Stuur de insulinebolus (_bijv._ “bolus 2” geeft een bolus van 2 eenheden). Dit via SMS-commando's sturen is hetzelfde als **Behandelingen** → **Insuline** in **AAPS**. 2)  Stuur de koolhydraten (_bijv._ “carbs 20” voert 20 g koolhydraten in). Dit is hetzelfde als **Behandelingen** → **Koolhydraten** in **AAPS**.

Om hypo's te voorkomen is het verstandig om voorzichtig te beginnen en **minder insuline** te bolussen dan nodig volgens je koolhydraatratio, omdat je geen rekening houdt met de huidige glucosewaarde of glucosetrend.

**De volgorde waarin je deze commando's stuurt is belangrijk**. Als je op welke manier dan ook veel koolhydraten invoert en SMB's hebt ingeschakeld, kan **AAPS** direct reageren met een gedeeltelijke bolus insuline. Als je dan _na_ het invoeren van de koolhydraten een insulinebolus probeert te sturen, krijg je misschien een vervelende vertraging en een melding “bolus bezig”. Dan moet je controleren wat er al als SMB is gegeven. Of, als je niet merkt dat er een SMB wordt gegeven en je eigen bolus daarna ook lukt, kan er in totaal te veel insuline voor de maaltijd worden gegeven. Stuur daarom bij maaltijdbolussen op afstand altijd eerst de insulinebolus, _voordat_ je de koolhydraten invoert. Als je wilt, kun je **AAPSClient** combineren met SMS-commando's: koolhydraten die je invoert op een gekoppelde **AAPSClient** hebben geen verificatiecode nodig en gaan dus sneller dan SMS-commando's. Koolhydraten of andere behandelingen die op de Nightscout-website worden ingevoerd, worden **niet** toegepast zolang client besturing aan staat; **AAPS** staat dan in [beveiligde modus](#client-master-control-hardened-mode).

(SMSCommands-commands)=
## Commando's

```{contents} List of command groups
:depth: 1
:local: true
```

Commando's moeten in het Engels worden gestuurd. Het antwoord is in je eigen taal als de tekst van het antwoord al [vertaald](#translations-translate-strings-for-AAPS-app) is. De commando's zijn niet hoofdlettergevoelig: je kunt kleine letters of hoofdletters gebruiken.

![Voorbeeld SMS-commando's](../images/SMSCommands.png)

De **tabellen met SMS-commando's** hieronder tonen alle mogelijke SMS-commando's. Er staan _voorbeeldwaarden_ bij, om het beter te begrijpen. Voor de commando's gelden dezelfde mogelijke waarden (streefdoelen, profielpercentage enz.) als in de **AAPS**-app zelf.

(authentication-or-not)=
### Verificatie of niet?

Sommige SMS-commando's geven direct antwoord, en sommige SMS-commando's vragen om sterke **verificatie** via de authenticator-app. Een eenvoudige vraag zoals “**BG**” (die de huidige glucose opvraagt) is snel te typen, heeft geen verificatie nodig en geeft de statusinformatie van **AAPS** terug zoals hieronder:

![Afbeelding](../images/remote-control-06.png)

Commando's die meer beveiliging nodig hebben, vragen om een code, bijvoorbeeld:

![SMS met verificatie](../images/remote-control-07.png)

De kolom *Verificatie* in de tabellen hieronder geeft aan of zo'n sterke verificatie nodig is voor elk commando.

### CGM-gegevens

| Commando   | Verificatie | Functie & *Antwoord*                                                                                                                                                                                                              |
| ---------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BG         | Nee         | Geeft terug: laatste BG, delta, IOB (bolus en basaal), COB<br/>*Laatste BG: 5,6 4min geleden, Verschil: -0,2 mmol, IOB: 0,20E (Bolus: 0,10E Basaal: 0,10E)*                                                                 |
| CAL 5.6/90 | Ja          | Will calibrate the CGM with a value of 5.6/90<br/>(use the value appropriate to your glucose units)<br/>Works only if properly set-up in **AAPS**.<br/>*Calibration sent. Receiving must be enabled in xDrip+.* |

### Pomp

| Commando             | Verificatie | Functie & *Antwoord*                                                                                 |
| -------------------- | ----------- | ---------------------------------------------------------------------------------------------------- |
| POMP                 | Nee         | LastConn: 1 min ago<br/>Temp: 0.00U/h @11:38 5/30min<br/>IOB: 0.5U Reserv: 34U Batt: 100 |
| PUMP DISCONNECT *30* | Ja          | Om de pomp *30* minuten los te koppelen                                                              |
| PUMP CONNECT         | Ja          | Pomp opnieuw verbonden                                                                               |

### Basaal

| Commando          | Verificatie | Functie & *Antwoord*                            |
| ----------------- | ----------- | ----------------------------------------------- |
| BASAL 0.3         | Ja          | Om een basaal van 0,3E/u te starten voor 30 min |
| BASAL 0.3 20      | Ja          | Om een basaal van 0,3E/u te starten voor 20 min |
| BASAL 30%         | Ja          | Om een basaal van 30% te starten voor 30 min    |
| BASAL 30% 50      | Ja          | Om een basaal van 30% te starten voor 50 min    |
| BASAL STOP/CANCEL | Ja          | Om het tijdelijk basaal te stoppen              |

Sommige pompen accepteren een tijdelijk basaal alleen in procenten, andere alleen in E/u. Als je de andere vorm gebruikt, antwoordt **AAPS** *"Deze pomp accepteert een tijdelijke basale snelheid alleen in procenten, niet in E/u."* (of andersom) en stelt niets in. De duur moet een veelvoud zijn van de stapgrootte voor de duur van tijdelijk basaal van je pomp.


### Loop

| Commando          | Verificatie | Functie & *Antwoord*                                                                                                                                                                                                                                                               |
| ----------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LOOP STATUS       | Nee         | Response depends on actual status:<br/> - *Loop is disabled* if the loop is disabled<br/> - *Loop is enabled* if the loop is closed, open or LGS<br/> - *Pump disconnected* if the pump is disconnected<br/> - *Suspended (10 m)* if the loop is suspended |
| LOOP STOP/DISABLE | Ja          | De pomp gaat terug naar de vooraf ingestelde basaalstand.<br/>*Loop is uitgeschakeld*                                                                                                                                                                                        |
| LOOP SUSPEND 20   | Ja          | *Loop suspended*                                                                                                                                                                                                                                                                   |
| LOOP RESUME       | Ja          | *Loop hervat*                                                                                                                                                                                                                                                                      |
| LOOP CLOSED       | Ja          | *Current running mode: Closed Loop*                                                                                                                                                                                                                                                |
| LOOP LGS          | Ja          | *Current running mode: Low Glucose Suspend*                                                                                                                                                                                                                                        |

### Bolus

Bolus op afstand is niet toegestaan binnen 15 min (deze waarde is alleen aan te passen als 2 telefoonnummers zijn toegevoegd) na het laatste bolus-commando of commando op afstand! In dat geval is het antwoord *Bolus op afstand niet beschikbaar. Probeer het later opnieuw.* Dit antwoord wordt ook gestuurd als de pomp op dat moment een bolus afgeeft.

| Commando             | Verificatie | Functie & *Antwoord*                                                                                                                                                                   |
| -------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BOLUS 1.2            | Ja          |                                                                                                                                                                                        |
| BOLUS 0.60 MEAL      | Ja          | Geeft de opgegeven bolus van 0,60E af<br/>**en** stelt het [tijdelijk streefdoel Eet Binnenkort](#TempTargets-eating-soon-temp-target) in                                        |
| CARBS 5              | Ja          | Om 5 g in te voeren, zonder bolus                                                                                                                                                      |
| CARBS 5 17:35/5:35PM | Ja          | Om 5 g in te voeren om 17:35.<br/>Welk tijdformaat werkt, hangt af<br/> van de tijdinstelling (12u/24u) op de telefoon.                                                    |
| EXTENDED 2 120       | Ja          | Om een vertraagde bolus van 2E te starten voor 120 min.<br/>Alleen voor [compatibele pompen](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only). |
| EXTENDED STOP/CANCEL | Ja          | Om de vertraagde bolus te stoppen                                                                                                                                                      |

### Profiel

| Commando       | Verificatie | Functie & *Antwoord*                                                                                                                                                          |
| -------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PROFILE STATUS | Nee         | Huidig profiel en percentage                                                                                                                                                  |
| PROFILE LIST   | Nee         | De huidige lijst met profielen in **AAPS**, bijv.:<br/>1. Profile1<br/> 2. Profile2                                                                               |
| PROFILE 1      | Ja          | Om te wisselen naar profiel 1 in de lijst.<br/>Gebruik de nummers die **PROFILE LIST** teruggeeft,<br/>niet de namen van de profielen zoals je ze hebt opgeslagen |
| PROFILE 2 30   | Ja          | Om te wisselen naar Profile2 30%                                                                                                                                              |

Het percentage moet tussen 30 en 250% liggen, net als in de app. Een waarde buiten dit bereik wordt geweigerd voordat je om de verificatiecode wordt gevraagd.

### Tijdelijke streefdoelen

| Commando                  | Verificatie | Functie & *Antwoord*                                         |
| ------------------------- | ----------- | ------------------------------------------------------------ |
| TARGET MEAL/ACTIVITY/HYPO | Ja          | Om het tijdelijk streefdoel MEAL/ACTIVITY/HYPO in te stellen |
| TARGET STOP/CANCEL        | Ja          | Om het tijdelijk streefdoel te annuleren                     |


(SMSCommands-other)=
### Andere

| Commando         | Verificatie | Functie & *Antwoord*                                                                                                                                                                                                                                        |
| ---------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RESTART          | Ja          | Start AAPS opnieuw. Handig als je problemen hebt die normaal met een herstart worden opgelost.                                                                                                                                                              |
| SMS DISABLE/STOP | Ja          | Om de SMS Remote Service uit te schakelen, antwoord je met de code.<br/>Let op: je kunt deze daarna alleen weer inschakelen<br/>op de **AAPS** master smartphone zelf.                                                                          |
| HELP             | Nee         | Geeft alle functies die je kunt opvragen:<br/>BG, LOOP, PUMP, BASAL, BOLUS, EXTENDED, CAL, PROFILE, TARGET, SMS, CARBS, HELP, RESTART<br/>Stuur daarna het commando ***HELP ***FUNCTIE****** om<br/>alle opties in dit onderdeel te zien. |
| HELP BOLUS       |             | *BOLUS 1.2<br/>BOLUS 1.2 MEAL*                                                                                                                                                                                                                        |

(SMSCommands-troubleshooting)=
## Probleemoplossing en FAQ

```{contents} List of questions and issues
:depth: 1
:local: true
```

### Wat kunnen we _niet_ doen met SMS-commando's?

1)  **Je kunt geen _tijdelijke_ profielwissel instellen** (bijvoorbeeld "profiel sport" voor 60 minuten), maar je kunt wel blijvend wisselen naar “profiel sport”. Tijdelijke profielwissels kun je in plaats daarvan instellen via **AAPSClient**.

2)  **Je kunt geen automatiseringen annuleren** of **zelf gekozen streefdoelen instellen**, maar er zijn oplossingen die er dichtbij komen: Stel bijvoorbeeld dat het normale streefdoel in het profiel 5,5 is. Je hebt in AAPS een automatisering ingesteld die altijd een hoog streefdoel van 7,0 instelt tussen 14:30 en 15:30 vanwege gymles op school. Een voorwaarde van de automatisering is dat “er geen tijdelijk streefdoel actief is”. Deze week hoor je op het laatste moment dat de gymles niet doorgaat en dat er in plaats daarvan pizza wordt gegeten, maar je kind is al op school met de **AAPS**-telefoon. Als de automatisering het hoge tijdelijke streefdoel van 7,0 start en je annuleert het (op de **AAPS**-telefoon of op afstand), dan wordt nog steeds aan de voorwaarden van de automatisering voldaan en zet **AAPS** een minuut later gewoon weer het hoge streefdoel.

**Als je wel bij de AAPS-telefoon kon**, kon je de automatisering uitvinken/aanpassen. Of, als je dat niet wilt, kon je gewoon een nieuw tijdelijk streefdoel van 5,6 voor 60 min instellen door op het streefdoel op het hoofdscherm te drukken, of via **Beheren** → **Tijdelijk streefdoel**. Dan kan de automatisering het hoge streefdoel van 7,0 niet meer instellen.

**Als je niet bij de AAPS-telefoon kunt**, kun je SMS-commando's gebruiken voor een oplossing die er dichtbij komt: bijvoorbeeld het commando “target meal” om een streefdoel van 5,0 voor 45 min in te stellen (andere standaard streefdoelen zijn 8,0 voor activiteit of hypo, zie de tabel). Met SMS-commando's kun je echter geen _bepaalde_ waarde voor het streefdoel opgeven (bijvoorbeeld 5,6 voor 60 minuten). Daarvoor heb je **AAPSClient** nodig.

### Wat gebeurt er als ik me bedenk over een commando dat ik net heb gestuurd?

**AAPS** voert alleen het laatste commando uit. Als je dus “bolus 1.5” typt en daarna, zonder te verifiëren, een nieuw commando “bolus 1” stuurt, wordt het eerdere commando van 1,5 genegeerd. **AAPS** stuurt de telefoon van de verzorger altijd een antwoord om te bevestigen wat het SMS-commando is, voordat je de verificatiecode moet invoeren. Na de actie volgt ook nog een antwoord.

### Waarom kreeg ik geen antwoord op een SMS-commando?

Dat kan een van deze redenen hebben:

1)  Het bericht is niet op de telefoon aangekomen (netwerkproblemen). 2)  **AAPS** is nog bezig met het verzoek (_bijv._ een bolus, die afhankelijk van je bolussnelheid even kan duren). 3)  De **AAPS**-telefoon heeft geen goede Bluetooth-verbinding met de pomp als het commando binnenkomt, en het commando is mislukt (dit geeft meestal een alarm op de **AAPS**-telefoon).

### Helemaal geen antwoord op SMS-commando's

Probeer op de telefoon van de verzorger en/of de **AAPS**-telefoon deze opties uit te schakelen:
* **Send as chat message** (verzenden als chatbericht) ![Schakel SMS als chatbericht uit](../images/SMSdisableChat.png)
* Als je de app Android Berichten of Google Berichten gebruikt, schakel dan RCS-berichten uit:
  - open het specifieke SMS-gesprek in Berichten
  - Kies het menu met de drie puntjes rechtsboven
  - kies "Details"
  - Zet "Alleen sms- en mms-berichten verzenden" aan ![Schakel RCS als chatbericht uit](../images/SMSdisableRCS.png)

### Fouten bij het uitvoeren van commando's

Er zijn verschillende mogelijke redenen waarom het commando niet lukt:

* De instelling van de SMS-commando's is niet compleet/juist
* Je hebt een commando gestuurd in een verkeerde vorm (zoals “disconnect pump 45” in plaats van “pump disconnect 45”)
* Je hebt een verkeerde of verlopen authenticator-code gebruikt (het is meestal goed om een paar seconden te wachten op een nieuwe code als de huidige bijna verloopt)
* De code+PIN was goed, maar het versturen/aankomen van de SMS was vertraagd, waardoor **AAPS** berekende dat de authenticator-code was verlopen
* De **AAPS**-telefoon is buiten bereik van / heeft geen contact met de pomp
* Het systeem is al bezig met het afgeven van een bolus

Veelvoorkomende fouten staan in de voorbeelden hieronder:

![Afbeelding](../images/remote-control-17.png)

### Hoe kan ik een commando stoppen als het al geverifieerd is?

Dat kan niet. Je kunt een bolus die via SMS is gestuurd wel annuleren op de **AAPS**-telefoon zelf, door hem in de bolus-popup te annuleren, als je snel bent. Veel SMS-commando's (behalve bolussen en koolhydraten invoeren) kun je makkelijk terugdraaien, of je kunt iets doen om ongewenste gevolgen van een fout te beperken.

Ook bij fouten bij bolussen en koolhydraten invoeren kun je nog iets doen. Als je bijvoorbeeld 20 g koolhydraten hebt ingevoerd maar je kind maar 10 g eet, en jij (of een verzorger ter plaatse) de behandeling niet direct op de **AAPS**-telefoon kan verwijderen, kun je een hoog tijdelijk streefdoel of een lager profiel instellen, zodat **AAPS** minder agressief wordt.

### Meerdere SMS

Als je steeds hetzelfde bericht krijgt (_bijv._ een profielwissel), heb je misschien per ongeluk een lus gemaakt met andere apps. Dit kan bijvoorbeeld xDrip zijn. Zorg in dat geval dat xDrip (of een andere app) geen behandelingen naar Nightscout uploadt.

Als de andere app op meerdere telefoons is geïnstalleerd, zorg er dan voor dat uploaden op al die telefoons is uitgeschakeld.

(sms-commands-too-many-messages)=
### Ik krijg veel te veel sms-berichten van SMS-commando's. Kan ik minder berichten krijgen, of ze stoppen?

SMS-commando's kunnen veel automatische berichten geven van de **AAPS**-telefoon naar de telefoon van de verzorger. Je krijgt ook berichten, bijvoorbeeld “Basaal profiel in pomp bijgewerkt”, als je automatiseringen hebt ingesteld in **AAPS**. Het kan handig zijn om onbeperkt sms'en in het abonnement van je **AAPS**-telefoon te hebben (en voor elke gebruikte telefoon van een verzorger) als er veel sms-berichten worden verstuurd. Zet ook sms-meldingen, alarmen of trillen uit op alle telefoons. Je kunt geen SMS-commando's gebruiken zonder deze berichten te krijgen. Daarom wil je misschien een andere manier om direct met je kind te communiceren (als het oud genoeg is), in plaats van SMS. Common alternative communication apps used by **AAPS** caregivers include WhatsApp, LINE, Telegram, and Facebook Messenger.

It is possible to disable the "Basal profile in pump updated" SMS, when the Profile change originated from Nightscout. To do this, create a file named **exactly** `do_not_send_sms_on_profile_change` in the `extra` dir of your AAPS directory.
