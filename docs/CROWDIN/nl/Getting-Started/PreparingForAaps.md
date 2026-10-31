# Voorbereiden om te starten met AAPS

Welkom. Deze documentatie helpt gebruikers die zich voorbereiden om het Android Artificial Pancreas System (**AAPS**) in te stellen en te gaan gebruiken.

## Je weg vinden in de documentatie

Een **inhoudsopgave** en uitleg over de opbouw van de documentatie vind je [hier](../index.md). Je komt daar ook door op het **AAPS**-symbool linksboven in de documentatie te klikken. Daar vind je een overzicht van het doel van de verschillende delen van de documentatie. Je kunt ook de koppen links op deze pagina gebruiken om door de documentatie te bladeren. Tot slot is er een handige zoekfunctie, direct onder het **AAPS**-symbool.

We willen het makkelijk maken om te zien wat **AAPS** wel en niet kan. Het kan teleurstellend zijn als je na veel leeswerk ontdekt dat je geen compatibele insulinepomp of CGM hebt, of dat **AAPS** andere functies heeft dan je hoopte.

Veel details in de documentatie van **AAPS** die over ervaring gaan, worden pas duidelijker als je **AAPS** echt gebruikt. Net zoals het moeilijk is om een sport te leren door alleen de regels te lezen, heb je twee dingen nodig: eerst de basisregels leren om **AAPS** veilig te gebruiken, en daarna leren hoe je die regels het beste toepast als je **AAPS** gaat gebruiken.

(preparing-safety-first)=

## Veiligheid voorop
“Grote kracht brengt grote verantwoordelijkheid met zich mee…”

### Technische veiligheid
**AAPS** heeft veel veiligheidsfuncties. Deze leggen beperkingen op, die stap voor stap worden opgeheven als je een reeks [Doelen](../SettingUpAaps/CompletingTheObjectives.md) afrondt. Daarbij test je bepaalde instellingen en beantwoord je meerkeuzevragen. Functies van **AAPS** worden vrijgegeven zodra je de Doelen met succes afrondt. Zo kan de gebruiker veilig en stap voor stap overgaan van Open loop naar Closed loop, en ondertussen de verschillende functies van **AAPS** leren kennen.

De [Doelen](../SettingUpAaps/CompletingTheObjectives.md) zijn gemaakt om je zo goed mogelijk kennis te laten maken met **AAPS**. Daarbij is rekening gehouden met de typische fouten en algemene trends die de ontwikkelaars van **AAPS** bij nieuwe gebruikers hebben gezien. Er kunnen fouten gebeuren, omdat de beginner nog geen ervaring heeft en te snel wil starten met **AAPS**, of omdat hij belangrijke punten over het hoofd heeft gezien. De [Doelen](../SettingUpAaps/CompletingTheObjectives.md) zijn bedoeld om deze problemen zo klein mogelijk te houden.

### Medische veiligheid
```{admonition} Avoid permanent and painful damage to your eyes and nerves
:class: danger
Wees voorzichtig met een snelle verbetering van de bloedglucoseregeling en een snelle daling van het HbA1c 
```

Een belangrijk punt voor de veiligheid: **een snelle daling van het HbA1c en een betere bloedglucoseregeling kunnen blijvende schade veroorzaken bij mensen die al langere tijd een hoge glucose hebben**. Veel mensen met diabetes weten dit niet, en niet alle zorgverleners wijzen hun patiënten op dit probleem.

Deze schade kan bestaan uit **verlies van zicht en blijvende neuropathie (pijn)**. Je kunt deze schade voorkomen door je gemiddelde glucose langzamer te verlagen. Heb je nu een hoog HbA1c en stap je over op **AAPS** (of een ander gesloten loop-systeem)? Bespreek dit mogelijke risico dan _alsjeblieft_ met je behandelteam voordat je begint. Spreek samen een planning af waarin je veilige glucosestreefwaarden geleidelijk verlaagt. Je kunt in het begin makkelijk hogere glucosestreefwaarden instellen in **AAPS** (nu is de hoogste streefwaarde die je kunt kiezen 11,1 mmol/l, maar je kunt ook bewust een zwak profiel gebruiken als dat nodig is). Daarna verlaag je de streefwaarde in de loop van de maanden.

#### Hoe snel kan ik mijn HbA1c verlagen zonder het risico op blijvende schade?

Een retrospectief [onderzoek](https://pubmed.ncbi.nlm.nih.gov/1464975/) bij 76 patiënten meldde dat het risico op verergering van retinopathie 1,6 keer, 2,4 keer en 3,8 keer zo groot werd als het HbA1c in een periode van 6 maanden respectievelijk 1%, 2% of 3% daalde. Zij stelden voor dat de **"daling van de HbA1c-waarde in elke periode van 6 maanden kleiner moet zijn dan 2% om verergering van retinopathie te voorkomen.... Een te snelle daling bij het begin van de glucoseregeling kan een ernstige of tijdelijke verergering van de retinopathie veroorzaken."**

Let op: Gebruik je andere eenheden voor HbA1c (mmol/mol in plaats van %)? Klik dan [hier](https://www.diabetes.co.uk/hba1c-units-converter.html) voor een HbA1c-rekenhulp.

In een andere retrospectieve [evaluatie](https://academic.oup.com/brain/article/138/1/43/337923) van 954 patiënten zagen onderzoekers het volgende:

**"Bij een daling van het HbA1c met 2–3 procentpunten in 3 maanden was er een absoluut risico van 20% op door behandeling veroorzaakte neuropathie bij diabetes. Bij een daling van het HbA1c met >4 procentpunten in 3 maanden was het absolute risico op door behandeling veroorzaakte neuropathie bij diabetes hoger dan 80%."**

Een [commentaar](https://academic.oup.com/brain/article/138/1/2/340563) op dit onderzoek was het ermee eens dat, om complicaties te voorkomen, **het doel moet zijn om het A1c met <2% in 3 maanden te verlagen.** Andere overzichten over dit onderwerp kun je [hier](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6587545/pdf/DOM-21-454.pdf) en [hier](https://www.mdpi.com/1999-4923/15/7/1791) lezen.

Over het algemeen wordt aangenomen dat mensen met _pas_ vastgestelde diabetes type 1 (die bij de diagnose, voor de start van insulinetherapie, vaak een zeer hoog HbA1c hebben) hun HbA1c direct na de diagnose snel kunnen verlagen zonder deze risico's in dezelfde mate te lopen. Dat komt doordat ze nog niet zo lang een hoge bloedglucose hebben gehad. Toch is het iets wat je met je arts moet bespreken.

(PreparingForAaps-no-sglt-2-inhibitors)=
### Geen SGLT-2-remmers

```{admonition} NO SGLT-2 inhibitors
:class: danger
SGLT-2-remmers, ook gliflozines genoemd, remmen de terugopname van glucose in de nieren. Gliflozines verlagen de bloedsuiker op een manier die niet te berekenen is. Daarom MAG je ze NIET gebruiken als je een gesloten loop-systeem zoals AAPS gebruikt! Er is dan een groot risico op ketoacidose en/of hypoglykemie! De combinatie van dit medicijn met een systeem dat de basaalstanden verlaagt om de BG te verhogen is extra gevaarlijk. 

Kort samengevat:
- **Voorbeeld 1: risico op een hypo**
>Bij de lunch gebruik je **AAPS** voor een bolus voor 45 g glucose. Het probleem is dat de remmers ervoor zorgen dat het lichaam een deel van de koolhydraten afvoert, zonder dat AAPS dit weet. Daardoor heeft je lichaam te veel insuline ten opzichte van de opgenomen koolhydraten, en krijg je een hypoglykemie.

- **Voorbeeld 2: risico op ketoacidose**
>De remmers voeren op de achtergrond een deel van de koolhydraten af, waardoor je BG daalt. **AAPS** geeft de pomp dan automatisch opdracht om minder insuline te geven, ook minder basaal. Na verloop van tijd kan je BG daardoor onder de streefwaarde blijven, tot het lichaam niet genoeg achtergrondinsuline heeft om koolhydraten op te nemen. Dat leidt tot ketoacidose. Normaal ontstaat ketoacidose bij mensen met diabetes type 1 doordat hun pomp faalt. Dat geeft dan alarmen op hun telefoon en is te zien aan een hoge BG-waarde. Het gevaar van gliflozines is echter dat AAPS dan geen alarmen geeft, omdat de pomp blijft werken en de BG mogelijk binnen de streefwaarde blijft.

Bekende merknamen van SGLT-2-remmers zijn onder andere: Invokana, Farxiga, Jardiance, Glyxambi, Synjardy, Steglatro en Xigduo XR.
```


### Belangrijkste principes van loopen met AAPS

Je moet de belangrijkste principes en begrippen van loopen begrijpen voordat je **AAPS** gebruikt. Dat doe je door tijd te nemen om de documentatie van **AAPS** te lezen, en door de Doelen af te ronden. De Doelen geven je een stevige basis om **AAPS** veilig en goed te gebruiken. De hoeveelheid documentatie over **AAPS** lijkt in het begin misschien overweldigend. Heb geduld en vertrouw op het proces - met de juiste aanpak lukt het je!

Hoe snel je vooruitgaat, verschilt per persoon. Houd er rekening mee dat het afronden van alle doelen meestal 6 - 9 weken duurt. Veel mensen beginnen al ruim voordat ze **AAPS** gaan gebruiken met het bouwen, installeren en instellen ervan. Om je hierbij te helpen, heeft het systeem een "virtuele pomp". Die kun je gebruiken bij de eerste doelen. Zo leer je **AAPS** kennen zonder dat je er echt insuline mee toedient. Hieronder staat een uitgebreide planning. Let op: bij doel 7 van **AAPS** loop je al gesloten. De latere doelen voegen extra functies toe, zoals **SMB** en **automatiseringen**. Die zijn handig voor sommige gebruikers, maar niet nodig voor de basisfunctie van **AAPS**.

Succes met **AAPS** vraagt een actieve houding: je moet bereid zijn om over je BG-gegevens na te denken, en flexibel genoeg zijn om **AAPS** aan te passen om je resultaten te verbeteren. Je kunt een sport bijna niet leren door alleen de regels te lezen. Hetzelfde geldt voor **AAPS**.

#### Houd rekening met vertraging en kleine problemen bij het instellen en opstarten

In het begin met **AAPS** kan het lastig zijn om alle onderdelen van de loop goed met elkaar te laten communiceren (en met eventuele volgers), en om je instellingen fijn af te stellen. Sommige problemen kun je pas oplossen als je **AAPS** in het dagelijks leven gebruikt. Er is veel hulp beschikbaar in de Facebook-groep en op Discord. Plan daarom goed en kies "goede" momenten om problemen op te lossen, zoals een rustige ochtend in het weekend (dus niet laat in de avond of als je moe bent, en niet vlak voor een belangrijke afspraak of een reis).

#### Compatibiliteit van de techniek

**AAPS** werkt alleen met bepaalde soorten insulinepompen, CGM's en telefoons. Sommige techniek is niet in alle landen beschikbaar. Lees de delen over [CGM](../Getting-Started/CompatiblesCgms.md), [pomp](../Getting-Started/CompatiblePumps.md) en [telefoon](../Getting-Started/Phones.md), zodat je niet teleurgesteld of gefrustreerd raakt.

#### Tijd om de app te bouwen en om volledig te loopen

Hoeveel tijd het bouwen van de **AAPS**-app kost, hangt af van je ervaring en technische kennis. Voor gebruikers zonder ervaring kan het bouwen van **AAPS** meestal een halve tot een hele dag duren (met hulp van de community). Bij nieuwere versies van **AAPS** gaat het veel sneller, omdat je dan meer ervaring hebt.

Verschillende delen van deze documentatie helpen je bij het bouwen:

- [AAPS bouwen](../SettingUpAaps/BuildingAaps.md) leidt je stap voor stap door het bouwen van de app en het installeren op je telefoon;

- de [FAQ](../UsefulLinks/FAQ.md) beantwoordt veelgestelde vragen en legt de meest voorkomende fouten uit; en

- het overzicht [Probleemoplossing](../GettingHelp/GeneralTroubleshooting.md) bundelt oplossingen voor de meest voorkomende problemen, geordend per onderwerp.

Hoe lang het duurt voordat je gesloten loopt, verschilt per persoon. Een globale planning om volledig te loopen met **AAPS** vind je [hieronder](#preparing-how-long-will-it-take).


#### Keystore & exportbestand van de configuratie-instellingen

Een “keystore” (.jks-bestand) is een bestand dat met een wachtwoord is versleuteld. Het hoort alleen bij jouw eigen kopie van **AAPS**. Je Android-telefoon gebruikt het om ervoor te zorgen dat niemand anders zonder de keystore jouw kopie kan bijwerken. Kort gezegd moet je bij het bouwen van **AAPS**:

1.  Bewaar je keystore-bestand (het .jks-bestand waarmee je app wordt ondertekend) op een veilige plek;

2.  Het wachtwoord van je keystore-bestand noteren.

Hoe je de keystore bewaart, hangt af van je manier van bouwen:

- **Build met Android Studio (computer)**: de keystore wordt tijdens het bouwen gemaakt - zie [Generate signed APK](#Building-APK-generate-signed-apk) voor uitleg over waar je hem opslaat.
- **AAPS Builder**: bewaar het back-upbestand `aaps-keystore.jks` dat de setup-pagina je aanbood toen je je sleutel maakte, samen met het wachtwoord en de alias. Heb je je eigen keystore geüpload? Bewaar dan dat bestand.
- **Browser build met een fork**: gebruik de speciale workflow [Export keystore](#ci-keystore-export) om een kopie naar je Google Drive te downloaden.

Zo kun je steeds precies hetzelfde keystore-bestand gebruiken als er een nieuwe versie van **AAPS** wordt gemaakt. Gemiddeld moet je **AAPS** 2 keer per jaar bijwerken.

Daarnaast kun je met **AAPS** [al je configuratie-instellingen exporteren](../Maintenance/ExportImportSettings.md). Zo kun je je systeem veilig herstellen als je van telefoon wisselt of de app bijwerkt/opnieuw installeert, met zo min mogelijk onderbreking. 

#### Probleemoplossing

Neem gerust contact op met de AAPS-community als je ergens niet zeker van bent - er bestaan geen domme vragen! Alle gebruikers, met elk niveau van ervaring, worden aangemoedigd om vragen te stellen. Omdat er veel gebruikers van **AAPS** zijn, krijg je meestal snel antwoord op je vragen.

##### [vraag het in de AAPS Facebook-groep](https://www.facebook.com/groups/AndroidAPSUsers/)

##### [vraag het in het AAPS Discord-kanaal](https://discord.gg/4fQUWHZ4Mw)





#### [Waar kan ik hulp krijgen](../GettingHelp/WhereCanIGetHelp.md)?

Dit deel geeft nieuwe gebruikers links naar hulpbronnen. Bijvoorbeeld naar de community met zowel nieuwe als ervaren gebruikers, die vragen kunnen verduidelijken en helpen bij de gebruikelijke valkuilen van AAPS.

#### [Deel voor zorgverleners](../UsefulLinks/ClinicianGuideToAaps.md)

Dit is een [deel speciaal voor zorgverleners](../UsefulLinks/ClinicianGuideToAaps.md) die meer willen weten over AAPS en open source kunstmatige alvleesklier-technologie. In de Introductie staat ook uitleg over [hoe je met je behandelteam kunt praten](#introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team).

## Wat gaan we bouwen en installeren?

Dit schema geeft een overzicht van de belangrijkste onderdelen (zowel hardware als software) van het **AAPS**-systeem:

![preparing_overview](../images/preparing_images/AAPS_preparing_overview_01.png)


Naast de drie basisonderdelen van de hardware (telefoon, pomp, glucosesensor) hebben we ook nodig: 1) De **AAPS**-app 2) Een rapportageserver en 3) Een app voor de continue glucosemeter (CGM)

### 1) Een app voor de Android-telefoon: **AAPS**

**AAPS** is een app die werkt op Android-smartphones & -apparaten. Je gaat de **AAPS**-app (een apk-bestand) zelf bouwen met een stap-voor-stap-handleiding: je downloadt de broncode van **AAPS** van GitHub, installeert de nodige programma's (Android Studio, GitHub desktop) op je computer en bouwt je eigen kopie van de **AAPS**-app. Daarna zet je de **AAPS**-app over naar je smartphone (via e-mail, USB-kabel _enz._) en installeer je hem.

### 2) Een rapportageserver: Nightscout (Tidepool*)

Om alle voordelen van **AAPS** te benutten, moet je een Nightscout-server opzetten. Je kunt [dit zelf doen](https://nightscout.github.io/nightscout/new_user/#free-diy), of tegen een kleine vergoeding een [beheerde Nightscout-dienst](https://nightscout.github.io/#nightscout-as-a-service) voor je laten opzetten. Nightscout verzamelt over langere tijd gegevens van **AAPS** en kan uitgebreide rapporten maken die het verband tonen tussen CGM- en insulinepatronen. Verzorgers kunnen Nightscout ook gebruiken om op afstand met de **AAPS**-app te communiceren, om de diabetesbehandeling van hun kind te volgen. Zulke functies op afstand zijn onder andere: realtime volgen van glucose- en insulinewaarden, op afstand een bolus insuline geven (via sms) en maaltijden aankondigen. Je diabetes analyseren door de CGM-gegevens los van de pompgegevens te bekijken, is als autorijden waarbij de bestuurder blind is en de passagier vertelt wat hij ziet. Tidepool is ook beschikbaar als alternatief voor Nightscout.

### 3) App voor de CGM-sensor

Afhankelijk van je glucosesensor/CGM heb je een compatibele app nodig die de glucosewaarden ontvangt en naar **AAPS** stuurt. De verschillende mogelijkheden staan hieronder. Meer informatie vind je in het deel [Compatibele CGM's](../Getting-Started/CompatiblesCgms.md):

![dexcom_options](../images/preparing_images/AAPS_connectivity_Dex_02.png) ![libre_options](../images/preparing_images/AAPSconnectivity_libre.png) ![eversense_options](../images/preparing_images/AAPS_connectivity_eversense.png)

### Onderhoud van het **AAPS**-systeem

Zowel **Nightscout** als **AAPS** moeten ongeveer één keer per jaar worden bijgewerkt, als er verbeterde versies uitkomen. Soms kan de update even wachten, soms wordt hij sterk aangeraden of is hij nodig voor de veiligheid. Over deze updates krijg je bericht in de Facebook-groepen en op de Discord-servers. In de release notes staat duidelijk welke situatie het is. Bij een update hebben waarschijnlijk veel mensen dezelfde vragen als jij, en je krijgt hulp bij het uitvoeren van de updates.

(preparing-how-long-will-it-take)=
## Hoe lang duurt het om alles in te stellen?

Zoals eerder gezegd is het gebruik van **AAPS** meer een “reis” waar je persoonlijk tijd in moet steken. Het is geen eenmalige installatie. Volgens de huidige schattingen duurt het in totaal ongeveer 4 tot 6 maanden om **AAPS** te bouwen, **AAPS** en de **CGM**-software te installeren en in te stellen, en van een open loop naar een hybride gesloten loop met **AAPS** te gaan. Daarom raden we aan om zo snel mogelijk de **AAPS**-app te bouwen en met de eerste doelen te beginnen, ook als je nog een ander systeem voor insulinetoediening gebruikt (je kunt tot doel 5 een virtuele pomp gebruiken).

Bij sommige doelen moet een bepaald aantal dagen voorbijgaan, zodat je zeker weet dat je de nieuwe functies begrijpt. Je kunt deze wachttijd niet overslaan. Deze minimale wachttijden zijn er voor je eigen veiligheid.

Hier is een globale planning:

| Taken                                                       |         Ongeveer tijd          |
| ----------------------------------------------------------- |:------------------------------:|
| De documentatie voor het eerst lezen                        |           1-2 dagen            |
| GitHub instellen voor de browser build                      |            1-4 uur             |
| Een rapportageserver opzetten                               |             1 uur              |
| Een CGM-app installeren (xDrip, BYODA, …)                   |             1 uur              |
| CGM → xDrip → AAPS voor het eerst instellen                 |             1 uur              |
| AAPS → pomp voor het eerst instellen                        |             1 uur              |
| AAPS → Nightscout/Tidepool instellen (alleen rapportage)    |             1 uur              |
| Optioneel: Nightscout ↔ **AAPS** & NSFollowers instellen    |             1 uur              |
| Doel 1: Opzetten van visualisatie en monitoring             |             1 uur              |
| Doel 2: Leer hoe AAPS te gebruiken                          |             2 uur              |
| Doel 3: Bewijs je kennis                                    |          Tot 14 dagen          |
| Doel 4: Starten met de Open Loop modus                      |        Minimaal 7 dagen        |
| Doel 5: De Open Loop begrijpen                              |            7 dagen             |
| Doel 6: Starten met de Closed Loop (Stop bij laag)          |    Minimaal 5, tot 14 dagen    |
| Doel 7: Inregelen van de closed loop                        |  Minimaal 1 dag, tot 7 dagen   |
| Doel 8: Pas het basaal en de ratio's aan, activeer Autosens | Minimaal 7 dagen, tot 14 dagen |
| Doel 9: Super Micro Bolus (SMB) activeren                   |       Minimaal 28 dagen        |
| Doel 10: Automatisering                                     |       Minimaal 28 dagen        |

Ook als **AAPS** volledig werkt, moet je je instellingen regelmatig fijn afstellen om je diabetesbehandeling te verbeteren.

## Vereisten

### Medische overwegingen

Naast de medische waarschuwingen in het [deel over veiligheid](#preparing-safety-first) zijn er ook verschillende instellingen, afhankelijk van welke insuline je in de pomp gebruikt.

#### Keuze van insuline

De berekeningen van **AAPS** gaan uit van een insulineconcentratie van 100 E/ml (de standaard voor pompen). Je stelt je insuline in via **Beheren → Insuline instellingen**: stel de **Piek** en **DIA** in, of gebruik **Laad piekwaarde van** om de standaard piektijd van een van de voorinstellingen in te vullen:

- **Novorapid** (ook voor Humalog en NovoLog)
- **Fiasp**
- **Lyumjev**

Gevorderde gebruikers kunnen zelf elke piektijd (35 tot 120 minuten) invullen, bijvoorbeeld voor een mengsel van insulines. Zie [Insuline instellingen](#Config-Builder-insulin).


### Techniek

Deze documentatie probeert de benodigde technische kennis zo klein mogelijk te houden. Om de **AAPS**-app te bouwen, heb je meerdere mogelijkheden - zie [AAPS bouwen](../SettingUpAaps/BuildingAaps.md) voor een overzicht:

- **Browser build** (aanbevolen): bouw de app direct vanaf je smartphone met GitHub Actions, zonder computer of Android Studio. Met [AAPS Builder](../SettingUpAaps/BrowserBuildAapsBuilder.md) heb je alleen een GitHub-account nodig: je downloadt de app direct van GitHub. Voor de fork-methode heb je ook een Google-account nodig om de app in je Google Drive op te slaan.
- **Build met Android Studio**: bouw de app op je computer met Android Studio. Dit gebruiken vooral ontwikkelaars die de code willen aanpassen.
- **Bouwen via de opdrachtregel**: voor gebruikers die liever lokaal bouwen zonder Android Studio te installeren.

Naast het bouwen van de app moet je ook een rapportageserver opzetten, een aantal apps op je Android-telefoon instellen en kennis opbouwen over het behandelen van diabetes. Dat lukt als je stap voor stap werkt, geduld hebt en hulp vraagt aan de **AAPS**-community. Kun je al je weg vinden op internet en je eigen Gmail-e-mails beheren? Dan is het bouwen van **AAPS** goed te doen. Neem gewoon de tijd.

### Smartphones

#### AAPS en Android-versies

De huidige versie van **AAPS** (4.0) heeft een Android-smartphone nodig met Google **Android 12.0 of hoger**. Wil je een nieuwe telefoon kopen? Dan heeft (vanaf januari 2026) Android 16 de voorkeur.<br/> We raden gebruikers sterk aan om hun build van **AAPS** om veiligheidsredenen up-to-date te houden. Kun je geen apparaat met Android 12.0 of nieuwer gebruiken? Dan zijn er nog oudere versies van **AAPS** beschikbaar die werken met oudere Android-versies, zie: [Release notes](#maintenance-android-version-aaps-version).

#### Keuze van het smartphonemodel
Welk model je precies koopt, hangt af van de functie(s) die je wilt. Op de [pagina Telefoons](../Getting-Started/Phones.md) vind je aanbevelingen en ervaringen van gebruikers met opstellingen die werken.

We raden gebruikers aan om de Android-versie van hun telefoon up-to-date te houden, ook de beveiligingsupdates. Ben je nieuw met **AAPS** of ben je geen technische expert? Dan kun je het bijwerken van je telefoon beter uitstellen tot anderen dat hebben gedaan en op onze forums hebben bevestigd dat het veilig is.

```{admonition} Delaying Samsung phone updates
:class: warning
Samsung staat er helaas om bekend dat het updates op zijn telefoons forceert. Dat kan problemen met de Bluetooth-verbinding geven. Om deze gedwongen updates uit te zetten, moet je de telefoon in de "ontwikkelaarsmodus" zetten:

1. Ga naar **Instellingen** > **Telefooninfo** > **Software-informatie** en tik een paar keer op **Buildnummer** tot je ziet dat de ontwikkelaarsmodus is ingeschakeld.
2. Ga terug naar het hoofdmenu **Instellingen**. Daar zie je nu een nieuw menu-item **Ontwikkelaarsopties**.
3. Open **Ontwikkelaarsopties**, scroll naar **Automatische systeemupdates** en zet dit uit.
```

```{admonition} Google Play Protect potential issue
:class: warning
Er zijn meerdere meldingen dat **AAPS** elke ochtend zonder duidelijke reden door Google Play Protect wordt afgesloten. Als dit gebeurt, moet je naar de opties van Google Play gaan en **Google Play Protect** uitzetten. Niet alle telefoonmodellen of Android-versies hebben hier last van.
```

```{admonition} Android developer verification
:class: note
Vanaf september 2026 voert Google stap voor stap [Android developer verification](#android-developer-verification) in. Dit verandert hoe een zelfgebouwde app op de telefoon wordt geïnstalleerd. Het bouwen van **AAPS** verandert hierdoor niet, en er blijven gratis manieren om te installeren - zie de gelinkte pagina voor details.
```

