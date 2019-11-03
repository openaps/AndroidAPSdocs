# Veelgestelde vragen

Om vragen toe te voegen aan de Veelgestelde Vragen: volg deze [instructies](../make-a-PR.md)

# Algemeen

## Kan ik de AndroidAPS app gewoon downloaden?

Nee. Er is geen downloadbaar apk bestand voor AndroidAPS. Je moet het zelf [bouwen](../Installing-AndroidAPS/Building-APK.md). Omdat:

AndroidAPS wordt gebruikt om je pomp te bedienen en insuline te geven. Volgens de huidige Europese regelgeving vallen dit soort systemen onder klasse IIa of IIb voor medische hulpmiddelen. Dat betekent dat die een wettelijke goedkeuring (CE-markering) vereisen, waarvoor verschillende studies en verificaties nodig zijn. Het verspreiden van een ongereguleerd medisch hulpmiddel is illegaal. In andere delen van de wereld bestaat vergelijkbare regelgeving.

Deze regelgeving beperkt zich niet tot verkoop (in de zin dat er geld voor wordt gevraagd), maar is van toepassing op elke vorm van distributie (zelfs gratis weggeven). Het bouwen van een medisch apparaat voor jouzelf is de enige manier om niet onder deze regelgeving te vallen.

Dat is waarom een kant-en-klare app niet verspreid mag worden.

## Hoe begin ik?

Ten eerste, moet je alle **fysieke onderdelen van een closed loop** verzamelen:

* Een [geschikte insulinepomp](Pump-Choices.md), 
* een [Android smartphone](Phones.md) (Apple iOS wordt niet ondersteund door AndroidAPS - je kunt wel [iOS Loop](https://loopkit.github.io/loopdocs/) gebruiken) en 
* een [glucose sensor](../Configuration/BG-Source.rst). 

Ten tweede, moet je de **fysieke onderdelen instellen**. Zie het [gebruiksvoorbeeld](Sample-Setup.md) met stap voor stap instructies.

Ten derde, moet je alle **software bouwen en instellen**: AndroidAPS en CGM/FGM bron.

Ten vierde moet je leren en **begrijpen hoe het algoritme is ontworpen om jouw behandelingsfactoren** correct in te kunnen stellen. Het grondbeginsel van closed loopen is dat jouw basaalstanden en koolhydraatratio's correct zijn. Alle aanpassingen die de closed loop doet, gaan er vanuit dat jouw basaalstand klopt. Alle pieken en dalen die je ziet zijn dus een gevolg van andere, tijdelijke factoren (beweging, stress etc) die dan worden opgelost met een tijdelijke insulineaanpassing. De aanpassingen die de closed loop kan maken zijn uit veiligheid beperkt (zie maximaal toegestane basaalstand in [OpenAPS Reference Design](https://openaps.org/reference-design/)). Dit betekent dat je de closed loop niet moet inzetten om een fout afgestelde basaalstand te verhelpen. Wanneer je bijvoorbeeld vaak een lage waarde hebt vlak voor een maaltijd, dan moet waarschijnlijk je basaal omlaag. Je kunt [autotune](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) aan de hand van een grote hoeveelheid gegevens, suggesties laten doen voor verbeteringen aan je basaalstanden, ISF en/of koolhydraatratio. Of je kunt je basaalstanden op de [ouderwetse manier](http://integrateddiabetes.com/basal-testing/) testen en instellen.

## Zijn er nog praktische tips?

### Wachtwoordbeveiliging

Als je niet wilt dat jouw instellingen gemakkelijk worden aangepast, dan kun je het instellingen menu voorzien van een wachtwoord. Ga naar "Wachtwoord voor instellingen" in het instellingen menu en typ een zelfgekozen wachtwoord. De volgende keer dat je het instellingen menu opent, moet je het wachtwoord intypen om verder te kunnen. Wanneer je later geen wachtwoord meer wilt gebruiken, ga dan naar het "Wachtwoord voor instellingen" veld en verwijder de tekst.

### Android Wear Smartwatches

Wanneer je in de toekomst de Android Wear app wilt gebruiken om vanaf een smartwatch te kunnen bolussen of instellingen te wijzigen, dan moet je instellen dat notificaties van AndroidAPS niet geblokkeerd worden. Bevestiging van opdrachten die je op je smartwatch invoert, komen namelijk via een notificatie binnen op je telefoon.

### Pomp afkoppelen

Als je je pomp afkoppelt voor douchen/in bad gaan/zwemmen/sport etc. dan moet je dit aan AndroidAPS laten weten, zodat jouw IOB waarde blijft kloppen met de werkelijkheid.

* Houd de knop 'Closed Loop' linksbovenaan het Overzicht scherm lang ingedrukt (NB: wanneer je nog niet in closed loop modus zit, zal hier 'Open Loop' staan). 
* Selecteer **"Verbreek verbinding XXmin/u met pomp"**
* Hiermee zet je de basaal op nul voor de tijdsduur die je hebt gekozen.
* De minimale lengte van de tijd voor een onderbreking is afhankelijk van de minimale lengte van TBRs die op jouw pomp kan worden ingesteld. Dus, als je wilt loskoppelen voor een kortere periode, dan kies je voor de kortst beschikbare periode voor jouw pomp. Vervolgens koppel de pomp handmatig terug aan zoals hieronder beschreven.
* De knop 'Closed Loop' (of 'Open Loop') zal rood worden en de tekst 'Verbinding verbroken(xx m)' wordt weergegeven.
* AAPS zal de pomp automatisch opnieuw verbinden nadat de aangegeven tijd is verstreken en de closed loop zal opnieuw beginnen te werken.
    
    ![Pomp afkoppelen](../images/PumpDisconnect.png)

* Als je jouw pomp weer wilt aankoppelen voordat de aangegeven tijd is verstreken, kun je de verbinding handmatig herstellen.

* Houd de rode knop 'Verbinding verbroken (xx m)' lang ingedrukt.
* Selecteer 'Opnieuw verbinden met pomp'
    
    ![Reconnect pump](../images/PumpReconnect.png)

### Aanbevelingen niet alleen gebaseerd op één enkele CGM-waarde

Uit veiligheidsoogpunt zal AAPS aanpassingen doen op basis van een gemiddelde glucosewaarde ('gemiddeld verschil'), nooit op basis van één enkele waarde. Daarom zal het even duren voordat de loop weer iets doet nadat je even geen glucosewaardes hebt ontvangen.

### Leestips

Er zijn verschillende blogs met goede tips om jou te helpen om de loop goed in te stellen (in het Engels):

* [Fine-tuning Settings](http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM
* [Why DIA matters](http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM
* [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
* [Hormones and autosens](http://seemycgm.com/2017/06/06/hormones-2/) See my CGM

## Welke spullen moet ik bij me hebben voor noodgevallen?

Allereerst, je moet dezelfde spullen bij je hebben als iedere andere persoon die een insulinepomp gebruikt. Als aanvulling daarop, wordt voor mensen die loopen met AndroidAPS aanbevolen om de volgende extra dingen bij je of binnen handbereik te hebben:

* Battery pack for the energy of your smartphone, wear and (maybe) BT reader
* Digitale backup (Dropbox, Google Drive, ...) van de apps die je gebruikt, zoals jouw meest recente AndroidAPS apk-bestand en jouw key store (digitale handtekening), AndroidAPS instellingenbestand, xDrip instellingenbestand, aangepaste Dexcom app, ...
* Batterijen voor je insulinepomp

## Hoe zorg ik dat de CGM/FSL goed blijft vastzitten?

Je kunt hem vastplakken: er zijn op maat gemaakte 'fixeerpleisters' voor veelgebruikte CGM-systemen verkrijgbaar. Vraag jouw diabetesverpleegkundige, hulpmiddelenleverancier of op een online forum/facebook. Of gebruik google. Je kunt ze ook zelf op maat knippen van kinesiotape of een eilandpleister.

Er bestaan ook speciale bandjes voor om je bovenarm die de CGM/FGM op zijn plek houden. Die zijn online verkrijgbaar (even googelen).

# AndroidAPS instellingen

Deze opsomming is bedoeld om je te helpen met het optimaliseren van jouw instellingen. Je kunt deze het beste van boven naar beneden doorlopen. Focus je eerst op één instelling en zorg dat die correct is, voordat je de volgende gaat optimaliseren. Werk in kleine stapjes in plaats van meteen grote veranderingen te maken. En bekijk een verandering gedurende meerdere dagen; geen dag is hetzelfde met diabetes! Je kunt [Autotune gebruiken](https://autotuneweb.azurewebsites.net/) om aanwijzingen voor verbeteringen te krijgen, hoewel je het niet blindelings moet volgen: het werkt misschien niet goed voor jou of in alle omstandigheden. Wees je bewust dat alle instellingen met elkaar samenhangen - je kunt 'verkeerde' instellingen hebben die in sommige omstandigheden goed samenwerken (bijvoorbeeld als een te hoge basaal toevallig samenvalt met een te hoge KH ratio) maar niet in andere omstandigheden. Dit betekent dat je met alle instellingen rekening moet houden bij veranderingen, en ze zo afstemmen dat ze voor jou goed werken in verschillende omstandigheden.

## Duur van insuline activiteit (DIA)

### Beschrijving & testen

De tijd die het duurt totdat de concentratie insuline is afgenomen naar nul.

Dit wordt door veel mensen te kort ingesteld. Dit zou je op ten minste 5 uur moeten zetten, mogelijk 6 of 7. Let op: AndroidAPS stelt automatisch 5 in, wanneer je een kleiner getal kiest!

### Invloed op BG

Te korte DIA kan zorgen voor te lage BGs. En omgekeerd.

Een te lange DIA kan zorgen voor te hoge BGs. Als DIA te kort is, denkt AAPS te vroeg dat je eerdere bolus helemaal is uitgewerkt, en, bij hoog blijvende glucosewaardes, zal hij je meer insuline gaan geven. (Eigenlijk wacht AAPS niet zo lang, maar voorspelt wat er zou gebeuren en blijft hij insuline toevoegen). Dit zorgt voor “insuline-stapeling” waarvan AAPS zich niet bewust is.

Voorbeeld van een te korte DIA is een hoge BG gevolgd door een overcorrectie en daarmee een te lage BG.

## Basaalstanden (E/uur)

### Beschrijving & testen

De hoeveelheid insuline die nodig is om jouw BG stabiel te houden.

Test jouw basaalstanden door te 'open loopen' en te vasten. Start met jouw basaaltest 5 uur na je laatste voedsel+bolus, en bekijk vanaf dat moment hoe jouw BG verandert. Je hoeft geen hele dag te vasten, maar doe het per dagdeel. Kies normale, gemiddelde dagen qua beweging, stress etc. Herhaal een paar keer.

Als BG daalt, is je basaalstand te hoog. En omgekeerd.

### Invloed op BG

Te hoge basaal kan leiden tot lage BGs. En omgekeerd.

AAPS houdt jouw ingestelde basaalstanden aan als 'nullijn'. Hij is altijd geneigd om jouw IOB uiteindelijk naar nul te brengen. Als je basaal te hoog is, zal hij een 'zero temp' (basaalstand van 0) als een te sterke negatieve IOB meetellen. Als reactie op die negatieve IOB zal AAPS meer correcties geven dan hij zou moeten doen, vanwege de neiging om jouw IOB naar nul te willen brengen.

Dus een te hoge basaal zal lage BGs creëren: zowel door de ingestelde standaardbasaal die je krijgt, als door de correctie-insuline die AAPS geeft om het streefdoel te bereiken.

Omgekeerd kan een te lage basaal leiden tot hoge BGs en zal het AAPS niet lukken om je omlaag te brengen naar het streefdoel.

## Insuline gevoeligheids factor (Insulin Sensitivity Factor, ISF) (mmol/l/E of mg/dl/E)

### Beschrijving & testen

Hoeveel jouw BG zou moeten dalen na het nemen van 1E insuline.

Zorg dat je eerst jouw basaal goed hebt ingesteld, daarna kun je ISF testen door AAPS op 'open loop' te zetten bij een vlakke BG, terwijl IOB nul is en je geen voedsel in je maag hebt. Neem dan een paar glucose tabletten zodat je BG op een plateau van een hogere waarde komt. (NB: Kies tijdens deze test BG waardes rond jouw normale gebied, bijvoorbeeld een start BG van 5mmol/l of 90mg/dl en breng hem omhoog naar 9mmol/l of 160 mg/dl).

Neem vervolgens een hoeveelheid insuline (op basis van jouw huidige ISF) om naar jouw streefBG te komen. Wanneer de BG enkele uren later gestabiliseerd is, weet je of jouw ISF klopt.

De ISF is bij veel mensen te laag ingesteld. 'Te laag' betekent dat 1E insuline jouw BG te veel zal laten zakken.

### Invloed op BG

**Lagere ISF** = een kleinere daling van BGs voor elke eenheid insuline (wordt ook wel ‘heftiger / agressiever’ of ‘sterker’ genoemd). Een te lage ISF zal leiden tot lage BGs.

**Hogere ISF** = een grotere daling in BGs voor elke eenheid insuline (wordt ook wel ‘minder sterk / minder agressief’ of ‘zwakker’ genoemd). Een te hoge ISF kan leiden tot hoge BGs.

**Voorbeeld:**

* BG is 190 mg/dl (10,5 mmol/l) en het streefdoel is 100 mg/dl (5,6 mmol/l). 
* Dus, je wilt correctie van 90 mg/dl (= 190-110).
* ISF = 30 -> 90/30 = 3 eenheden insuline
* ISF = 45 -> 90/45 = 2 eenheden insuline

Een ISF die te laag is (niet ongebruikelijk) kan leiden tot ‘overcorrecties’, omdat AAPS denkt dat meer insuline nodig is om een hoge BG te corrigeren dan dat hij feitelijk nodig heeft. Dit kan leiden tot een "golfbeweging / achtbaan" in je glucosegrafiek (vooral tijdens vasten). In deze omstandigheden moet je je ISF verhogen. Dit betekent dat AAPS kleinere correctie doses zal geven, en dit voorkomt dat een hoge BG wordt overgecorrigeerd met daarna een lage BG.

Omgekeerd kan een ISF die te hoog is, leiden tot ondercorrectie, wat betekent dat jouw BG boven het streefdoel blijft – met name zichtbaar gedurende de nacht.

## Koolhydraat ratio (KH) (g/E)

### Beschrijving & testen

Hoeveel gram koolhydraten jij kunt eten voor 1E insuline.

Je zult ook wel de Engelse afkortingen I:C ratio (Insulin to Carb ratio) of CR (Carb Ratio) tegenkomen.

Zorg dat je eerst jouw basaal + ISF goed hebt ingesteld, daarna kun je CR testen door AAPS op 'open loop' te zetten, op een moment dat IOB nul is en je geen voedsel in je maag hebt. Neem dan een maaltijd waarvan je de koolhydraten precies weet, en injecteer een hoeveelheid insuline op basis van je huidige KH ratio. Wanneer de BG enkele uren later gestabiliseerd is, weet je of jouw KH ratio klopt. Je kunt bij deze test het beste kiezen voor voedsel dat je normaal gesproken ook zou eten rond dat tijdstip. En zorg dat je het aantal koolhydraten exact weet (pak weegschaal + koolhydratentabel erbij).

### Invloed op BG

Lagere KH ratio = minder voedsel per eenheid. Oftewel je gebruikt meer insuline voor dezefde hoeveelheid koolhydraten. Kan ook ‘agressiever’ worden genoemd.

**Higher IC** = more food per unit, i.e. you are getting less insulin for a fixed amount of carbs. Can also be called ‘less aggressive’.

If after meal has digested and IOB has returned to zero, your BG remains higher than before food, chances are IC is too large. Conversely if your BG is lower than before food, IC is too small.

If you have been using "bread unit" factors so far (How much insulin is needed to cover one bread unit?) you can find conversion tables online i.e. [here](https://www.mylife-diabetescare.com/files/media/03_Documents/11_Software/FAS/SOF_FAS_App_KI-Verha%CC%88ltnis_MSTR-DE-AT-CH.pdf).

# APS algoritme

## Waarom zie ik "dia:3" in de "OPENAPS AMA"-tab ook al heb ik een andere DIA in mijn profiel?

![AMA 3u](../images/Screenshot_AMA3h.png)

In AMA betekent "dia" niet de "Duur van Insuline Actie". It is a parameter, which used to be connected to the DIA. Now, it means, 'in which time should the correction be finished'. En heeft het niets meer te maken met de berekening van de IOB. In OpenAPS SMB wordt deze parameter niet meer gebruikt.

## Profiel

### Waarom minimaal een 5 uur DIA (Duur van Insuline Actie) gebruiken in plaats van 2-3 uur?

Goed uitgelegd in [dit artikel](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/). Vergeet niet om op `ACTIVEER PROFIEL` te klikken na het wijzigen van je DIA.

### Waarom zorgt de loop ervoor dat mijn bloedsuiker vaak zo ver zakt dat ik een hypo krijg, terwijl mijn COB (koolhydraten aan boord) nul is?

Controleer als eerste of jouw basaalinstellingen correct zijn, en test je basaalstanden door met een stabiele bloedglucose een tijdlang niets te eten. Pas je basaalstanden aan indien nodig. If it is correct, this behavior is typically caused by a too low ISF. Een typisch voorbeeld van een te lage ISF ziet er zo uit:

![ISF te laag](../images/isf.jpg)

### What causes high postprandial peaks in closed loop?

Controleer als eerste of jouw basaalinstellingen correct zijn, en test je basaalstanden door met een stabiele bloedglucose een tijdlang niets te eten. Pas je basaalstanden aan indien nodig. Nadat je zeker bent dat je basaalstanden goed zijn ingesteld, én je ziet dat jouw glucosewaarde wel weer zakt naar je streefdoel wanneer alle koolhydraten zijn geabsorbeerd dan kun je proberen om enige tijd voorafgaand aan je maaltijd een 'Eet binnenkort' tijdelijk laag streefdoel in te stellen. Of overleg met je behandelaars of je een bepaalde hoeveelheid tijd tussen bolus en maaltijd kunt nemen (pre-bolussen). Wanneer je bloedglucose te hoog is na de maaltijd, en hoog blijft nadat al je koolhydraten zijn geabsorbeerd, dan kun je vragen aan je behandelaars of je jouw KH ratio kunt verlagen. Wanneer je bloedglucose te hoog is terwijl je nog COB hebt, en je te laag uitkomt nadat alle koolhydraten geabsorbeerd zijn, dan kun je vragen aan je behandelaars of je jouw KH ratio kunt verhogen én een bepaalde hoeveelheid tijd te nemen tussen bolus en maaltijd.

# Overige instellingen

## Nightscout instellingen

### AndroidAPS NSClient zegt 'Not allowed' (niet toegestaan) en wil geen gegevens uploaden. Wat kan ik doen?

Controleer 'Verbindingsinstellingen' in NSClient. Misschien heb je geen wifi verbinding of je hebt 'Enkel tijdens opladen' geactiveerd en jouw oplaadkabel is niet aangesloten.

## CGM instellingen

### Waarom zegt AndroidAPS dat 'de gekozen BG bron geen optimale filtering toepast'?

If you do use another CGM/FGM than Dexcom G5 or G6 in xDrip native mode, you'll get this alert in AndroidAPS OpenAPS-tab. Zie [Filteren van glucosewaardes](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) voor meer informatie.

## Pomp

### Waar moet ik mijn pomp dragen?

Er zijn talloze mogelijkheden om de pomp te dragen. Het maakt niet uit of je loop gebruikt of niet. Als je eigenlijk liever een slangloze pomp zou willen hebben, maar je hebt voor een Dana gekozen om te kunnen loopen, dan kun je ook kiezen voor een infuusset van 30cm en die gebruiken met de bijgeleverde buikband.

### Batterijen

Bij loopen kan de pompbatterij sneller leegraken dan bij normaal gebruik, omdat je telefoon veel vaker interactie heeft met de pomp dan een normale gebruiker zou hebben. We raden aan om de batterij al te vervangen als hij nog voor 25% vol is, omdat communicatie tussen telefoon en pomp dan al achteruit kan gaan. You can set warning alarms for pump battery by using the PUMP_WARN_BATT_P variable in your Nightscout site. Tips om de levensduur van de batterij te verlengen:

* de tijd dat het LCD-scherm van de pomp aan staat, verkorten (in instellingen menu van de pomp)
* de tijd dat de achtergrondverlichting van het beeldscherm aan staat, verkorten (in instellingen menu van de pomp)
* stel meldingen in op geluid in plaats van trillen (in instellingen menu van de pomp)
* gebruik de knoppen van de pomp alleen bij het vullen van de pomp. Bekijk alle andere informatie op je telefoon (batterijduur, reservoir inhoud, geschiedenis etc).
* op sommige telefoons wordt AndroidAPS app vaak afgesloten om de batterij of het RAM geheugen te besparen. Elke keer dat AndroidAPS dan weer opnieuw wordt gestart, maakt je telefoon weer verbinding met de pomp om opnieuw de bolus geschiedenis en huidige basaalstand uit te lezen vanuit het pompgeheugen. Hierdoor raakt de batterij van de pomp leeg. Om te zien of dit gebeurt, ga naar Instellingen > NSClient en schakel 'Log app start naar NS' in. Hiermee zul je iedere keer dat de app herstart, een notificatie terugzien op je AAPS hoofdscherm in de glucosegrafiek, en ook in Nightscout. Wanneer je ziet dat de app vaak opnieuw gestart wordt, dan moet je dit uitzetten. Ga naar je telefooninstellingen, ergens onder energiebeheer/accuoptimalisatie moet je instellen dat de AndroidAPS app in de achtergrond mag blijven draaien en niet automatisch wordt afgesloten.
* maak de contactpunten van de batterij schoon met een alcoholdoekje, om te voorkomen dat er nog vet of olie van het productieproces is achtergebleven.
* for Dana R/RS pumps the startup procedure draws a high current across the battery to purposefully break the passivation film (prevents loss of energy whilst in storage) but it doesn't always work to break it 100%. Wanneer een nieuwe batterij geen 100% aangeeft nadat de pomp is opgestart, kun je 2-3 keren de batterij verwijderen en terugdoen in de pomp, of je kunt met een metalen voorwerp beide polen kort (fractie van een seconde) contact laten maken.
* bekijk meer tips over [specifieke soorten batterijen](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage#battery-type-and-causes-of-short-battery-life) voor de Combo-pomp

### Changing reservoirs and cannulas

The change of cartridge cannot be done via AndroidAPS, but must be carried out as before directly via the pump.

* Long press on "Open Loop"/"Closed Loop" on the Home tab of AndroidAPS and select 'Suspend Loop for 1h'
* Koppel nu de pomp af en verwissel het reservoir volgens de instructies van de pompfabrikant.
* Wanneer je daarmee klaar bent, koppel je de pomp weer aan en houd 'Verbinding verbroken (.. m)' lang ingedrukt. Selecteer 'Hervatten'.

Het 'Ontlucht/vul' scherm van AAPS gebruikt niet de functie van "prime infusie set" van de pomp, maar vult de infusie set en/of canule met behulp van een bolus die niet in de geschiedenis van AAPS verschijnt. Dit betekent dat een lopende tijdelijke basaalstand niet zal worden onderbroken. Selecteer op het Acties (Act) tabblad, de knop ONTLUCHT/VUL en kies de hoeveelheid insuline die nodig is om de infuusset/canule te vullen en druk op OK. Wanneer er nog lucht in de infuusset zit, herhaal de vorige stap. Je kunt standaardhoeveelheden instellen in Instellingen > Andere > Vul standaard hoeveelheid. Hoeveel eenheden nodig zijn staat in het instructieboekje in de doos met infuussets, dit verschilt per type infuusset en is afhankelijk van de lengte van de canule en de lengte van de slang.

## Wallpaper

You can find the AndroidAPS wallpaper for your phone on the [phones page](../Getting-Started/Phones#phone-background).

## Daily usage

### Hygiëne

#### Wat te doen tijdens het douchen?

Je kunt de pomp afkoppelen bij het douchen. Voor deze korte tijd kun je meestal wel zonder je pomp. Maar je moet AAPS wel laten weten dat je de pomp loskoppelt, zodat de IOB berekeningen blijven kloppen.

See [description above](../Getting-Started/FAQ#disconnect-pump).

### Work

Afhankelijk van het soort werk dat je doet, kun je verschillende instellingen kiezen (basaalstanden, ISF, KH factor) op werkdagen. As a looper you should think of a [profile switch](../Usage/Profiles.md) for your estimated working day (e.g. more than 100% for 8h when sitting around or less than 100% when you are active), a high or low temporary target or a [time shift of your profile](../Usage/Profiles#time-shift) when standing up much earlier or later than regular. If you are using [Nightscout profiles](../Configuration/Config-Builder#ns-profile), you can also create a second profile (e.g. 'home' and 'workday') and do a daily profile switch to the profile you actually need.

## Leisure activities

### Sporten

### Sex

Je kunt de pomp loskoppelen voor wat 'vrijheid', maar je moet AAPS wel vertellen dat je dat doet. Zodat jouw IOB juist wordt berekend.

See [description above](../Getting-Started/FAQ#disconnect-pump).

### Alcohol

Drinking alcohol is risky in closed loop mode as the algorithm cannot predict the alcohol influenced BG correctly. Je zult voor jezelf een manier moeten vinden om hiermee om te gaan. AndroidAPS heeft verschillende functies die je hierbij kunt gebruiken:

* De closed loop uitschakelen en je diabetes handmatig onder controle houden
* Een hoger tijdelijk streefdoel instellen en onaangekondigde maaltijden (UAM, UnAnnounced Meals) uitschakelen, om te voorkomen dat je extra IOB krijgt toegediend
* een profielwissel, naar beduidend minder dan 100% 

When drinking alcohol, you always have to have an eye on your CGM to manually avoid a hypoglycemia by eating carbs.

### Slapen

#### Hoe kan ik 's nachts closed loopen zonder mobiele of WIFI straling?

Veel gebruikers zetten 's nachts hun telefoon in vliegtuigmodus. If you want the loop to support you when you are sleeping, proceed as follows (this will only work with a local BG-source such as xDrip+ or patched Dexcom app, it will NOT work if you get the BG-readings via Nightscout):

1. Zet de telefoon in vliegtuigmodus.
2. Wacht totdat de vliegtuigmodus actief is.
3. Schakel Bluetooth in.

Je kunt nu niet bellen of gebeld worden, en je bent ook niet verbonden met internet. Maar de closed loop werkt nog wel.

Some people have discovered problems with local broadcast (AAPS not receiving BG values from xDrip+) when phone is in airplane mode. Go to Settings > Inter-app settings > Identify receiver and enter `info.nightscout.androidaps`.

![xDrip+ Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

### Reizen

#### How to deal with time zone changes?

With Dana R and Dana R Korean you don't have to do anything. For other pumps see [time zone travelling](../Usage/Timezone-traveling.md) page for more details.

## Medical topics

### Ziekenhuis

Wanneer je jouw behandelaar informatie wilt geven over AndroidAPS en doe-het-zelf loopen, dan kun je de [Informatie voor zorgverleners/behandelaars](../Resources/clinician-guide-to-AndroidAPS.md) uitprinten.

### Afspraak met je internist of diabetesverpleegkundige

#### Rapporten

You can either show your Nightscout reports (https://YOUR-NS-SITE.com/report) or check [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).