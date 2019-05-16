# Veelgestelde vragen

Om vragen toe te voegen aan de Veelgestelde Vragen: volg deze [instructies](../make-a-PR.md)

## Algemeen

### Kan ik de AndroidAPS app gewoon downloaden?

Nee. Er is geen downloadbaar apk bestand voor AndroidAPS. Je moet het zelf [bouwen](../Installing-AndroidAPS/Building-APK.md). Omdat:

AndroidAPS wordt gebruikt om je pomp te bedienen en insuline te geven. Volgens de huidige regelgeving vallen dit soort systemen onder klasse Ia of IIb voor medische hulpmiddelen. Dat betekent dat die een wettelijke goedkeuring (CE-markering) vereisen, waarvoor verschillende studies en verificaties nodig zijn. Het verspreiden van een ongereguleerd medisch hulpmiddel is illegaal. In andere delen van de wereld bestaat vergelijkbare regelgeving.

Deze regelgeving beperkt zich niet tot verkoop (in de zin dat er geld voor wordt gevraagd), maar is van toepassing op elke vorm van distributie (zelfs gratis weggeven). Het bouwen van een medisch apparaat voor jouzelf is de enige manier om niet onder deze regelgeving te vallen.

Dat is waarom een kant-en-klare app niet beschikbaar is.

### Hoe begin ik?

Ten eerste, moet je alle **fysieke onderdelen van een closed loop** verzamelen:

* Een [geschikte insulinepomp](Pump-Choices.md), 
* een [Android smartphone](Phones.md) (Apple iOS wordt niet ondersteund door AndroidAPS - je kunt wel [iOS Loop](https://loopkit.github.io/loopdocs/) gebruiken) en 
* een [glucose sensor](../Configuration/BG-Source.md). 

Ten tweede, moet je de **fysieke onderdelen instellen**. Zie het [gebruiksvoorbeeld](Sample-Setup.md) met stap voor stap instructies.

Ten derde, moet je alle **software bouwen en instellen**: AndroidAPS en CGM/FGM bron.

Ten vierde moet je leren en **begrijpen hoe het algoritme is ontworpen om jouw behandelingsfactoren** correct in te kunnen stellen. Het grondbeginsel van closed loopen is dat jouw basaalstanden en koolhydraatratio's correct zijn. Alle aanpassingen die de closed loop doet, gaan er vanuit dat jouw basaalstand klopt. Alle pieken en dalen die je ziet zijn dus een gevolg van andere, tijdelijke factoren (beweging, stress etc) die dan worden opgelost met een tijdelijke insulineaanpassing. De aanpassingen die de closed loop kan maken zijn uit veiligheid beperkt (zie maximaal toegestane basaalstand in [OpenAPS Reference Design](https://openaps.org/reference-design/)). Dit betekent dat je de closed loop niet moet inzetten om een fout afgestelde basaalstand te verhelpen. Wanneer je bijvoorbeeld vaak een lage waarde hebt vlak voor een maaltijd, dan moet waarschijnlijk je basaal omlaag. Je kunt [autotune](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) aan de hand van een grote hoeveelheid gegevens, suggesties laten doen voor verbeteringen aan je basaalstanden, ISF en/of koolhydraatratio. Of je kunt je basaalstanden op de [ouderwetse manier](http://integrateddiabetes.com/basal-testing/) testen en instellen.

### Zijn er nog praktische tips?

* Als je niet wilt dat jouw instellingen gemakkelijk worden aangepast, dan kun je het instellingen menu voorzien van een wachtwoord. Ga naar "Wachtwoord voor instellingen" in het instellingen menu en typ een zelfgekozen wachtwoord. De volgende keer dat je het instellingen menu opent, moet je het wachtwoord intypen om verder te kunnen. Wanneer je later geen wachtwoord meer wilt gebruiken, ga dan naar het "Wachtwoord voor instellingen" veld en verwijder de tekst.

* Wanneer je in de toekomst de Android Wear app wilt gebruiken om vanaf een smartwatch te kunnen bolussen of instellingen te wijzigen, dan moet je instellen dat notificaties van AndroidAPS niet geblokkeerd worden. Bevestiging van opdrachten die je op je smartwatch invoert, komen namelijk via een notificatie binnen op je telefoon.

* Als je de pomp wilt afkoppelen voor douchen/sporten etc, houd dan "Open-Loop" / "Closed Loop" tekst op het Overzicht-scherm ingedrukt en selecteer "verbreek verbinding ..min/u met pomp" voor hoelang je de pomp wilt afkoppelen. Hiermee zet je de basaal op nul voor de tijdsduur die je hebt gekozen. De minimale tijdsduur die je kunt kiezen komt door de minimale tijdsduur van TBRs die jouw pomp toestaat. Wanneer je een kortere tijd wilt kiezen, of je koppelt je pomp sneller aan dan je had gedacht, dan kun je "Verbinding verbroken (..m)" ingedrukt houden en "Hervatten" kiezen. Op deze manier zal jouw IOB correct berekend worden nadat je je pomp weer hebt aangekoppeld.

* Uit veiligheidsoogpunt zal AAPS aanpassingen doen op basis van een gemiddelde glucosewaarde ('gemiddeld verschil'), nooit op basis van één enkele waarde. Daarom zal het even duren voordat de loop weer iets doet nadat je even geen glucosewaardes hebt ontvangen.

* Er zijn verschillende blogs met goede tips om jou te helpen om de loop goed in te stellen (in het Engels):
  
  * [Fine-tuning Settings](http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM
  * [Why DIA matters](http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM
  * [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
  * [Hormones and autosens](http://seemycgm.com/2017/06/06/hormones-2/) See my CGM

### Welke spullen moet ik bij me hebben voor noodgevallen?

Allereerst, je moet dezelfde spullen bij je hebben als iedere andere persoon die een insulinepomp gebruikt. Als aanvulling daarop, wordt voor mensen die loopen met AndroidAPS aanbevolen om de volgende extra dingen bij je of binnen handbereik te hebben:

* Losse accu (powerbank) zodat je je smartphone, smartwatch en (wellicht) bluetooth reader kunt opladen
* Digitale backup (Dropbox, Google Drive, ...) van de apps die je gebruikt, zoals jouw meest recente AndroidAPS apk-bestand en jouw key store (digitale handtekening), AndroidAPS instellingenbestand, xDrip instellingenbestand, aangepaste Dexcom app, ...
* Batterijen voor je insulinepomp

### Hoe zorg ik dat de CGM/FSL goed blijft vastzitten?

Je kunt hem vastplakken: door je huid van te voren in te smeren met speciale lijm (zoals Skintac). Ook zijn er op maat gemaakte 'fixeerpleisters' voor veelgebruikte CGM-systemen verkrijgbaar. Die plak je over de originele sensor/pleister heen. Vraag jouw diabetesverpleegkundige, hulpmiddelenleverancier of op een online forum/facebook. Of gebruik google. Je kunt ze ook zelf op maat knippen van kinesiotape of een eilandpleister.

Er bestaan ook speciale bandjes voor om je bovenarm die de CGM/FGM op zijn plek houden. Die zijn online verkrijgbaar (even googelen).

## AndroidAPS instellingen

### Invloed van instellingen

Deze tabel is bedoeld om te helpen met het optimaliseren van jouw instellingen. De beste volgorde is deze van boven naar beneden te doorlopen. Focus je eerst op één instelling en zorg dat die correct is, voordat je de volgende gaat optimaliseren. Werk in kleine stapjes in plaats van meteen grote veranderingen te maken. En bekijk een verandering gedurende meerdere dagen; geen dag is hetzelfde met diabetes! Je kunt [Autotune gebruiken](https://autotuneweb.azurewebsites.net/) om aanwijzingen voor verbeteringen te krijgen, hoewel je het niet blindelings moet volgen: het werkt misschien niet goed voor jou of in alle omstandigheden. Merk op dat alle instellingen met elkaar samenhangen - je kunt 'verkeerde' instellingen hebben die in sommige omstandigheden goed samenwerken (bijvoorbeeld als een te hoge basaal toevallig samenvalt met een te hoge CR) maar niet in andere omstandigheden. Dit betekent dat je met alle instellingen rekening moet houden bij veranderingen, en ze zo afstemmen dat ze voor jou goed werken in verschillende omstandigheden.

<table class="tg">
  <tr>
    <th class="tg-0pky">Setting</th>
    <th class="tg-0pky">Description &amp; testing</th>
    <th class="tg-0pky">Impact</th>
  </tr>
  <tr>
    <td class="tg-0pky">Duration of insulin activity (DIA)</td>
    <td class="tg-0pky">The length of time that insulin decays to zero.<br><br>This is quite often set too short. Most people will want at least 5 hours, potentially 6 or 7.</td>
    <td class="tg-0pky">Too short DIA can lead to low BGs. And vice-versa.<br><br>If DIA is too short, AAPS thinks too early that your previous bolus is all consumed, and, at still elevated glucose, will give you more. (Actually, it does not wait that long, but predicts what would happen, and keeps adding insulin). This essentially creates ‘insulin stacking’ that AAPS is unaware of.<br><br>Example of a too-short DIA is a high BG followed by AAPS over-correcting and giving a low BG.</td>
  </tr>
  <tr>
    <td class="tg-0pky">Basal rate schedule (U/hr)</td>
    <td class="tg-0pky">The amount of insulin in a given hour time block to maintain BG at a stable level.<br><br>Test your basal rates by suspending loop, fasting, waiting for say 5 hours after food, and seeing how BG changes. Repeat a few times.<br><br>If BG is dropping, basal rate is too high. And vice-versa.</td>
    <td class="tg-0pky">Too high basal rate can lead to low BGs. And vice-versa.<br><br>AAPS ‘baselines’ against the default basal rate. If basal rate is too high, a ‘zero temp’ will count as a bigger negative IOB than it should. This will lead to AAPS giving more subsequent corrections than it should to bring IOB ultimately to zero.<br><br>So a basal rate too high will create low BGs both with the default rate, but also some hours hence as AAPS corrects to target.<br><br>Conversely a basal rate too low can lead to high BGs, and a failure to bring levels down to target.</td>
  </tr>
  <tr>
    <td class="tg-0pky">Insulin sensitivity factor (ISF) (mmol/l/U or mg/dl/U)</td>
    <td class="tg-0pky">The drop in BG expected from dosing 1U of insulin.<br><br>Assuming correct basal, you can test this by suspending loop, checking IOB is zero, and taking a few glucose tablets to get to a stable ‘high’ level.<br><br>Then take an estimated amount of insulin (as per current 1/ISF) to get to your target BG.<br><br>This is quite often set too low.</td>
    <td class="tg-0pky">Lower ISF = a smaller drop in BGs for each unit of insulin (also can be called ‘more severe / aggressive’ or ‘stronger’). If too low, this can lead to low BGs.<br><br>Higher ISF = a bigger drop in BGs for each unit of insulin (also can be called ‘less severe / aggressive’ or ‘weaker’). If too high, this can lead to high BGs.<br><br>An ISF that is too low (not uncommon) can result in ‘over corrections’, because AAPS thinks it needs more insulin to correct a high BG than it actually does. This can lead to ‘roller coaster’ BGs (esp when fasting). In this circumstance you need to increase your ISF. This will mean AAPS gives smaller correction doses, and this will avoid over-correcting a high BG resulting in a low BG.<br><br>Conversely, an ISF set too high can result in under-corrections, meaning your BG remains above target – particularly noticeable overnight.</td>
  </tr>
  <tr>
    <td class="tg-0pky">Carbohydrate to insulin ratio (CR) (g/U)</td>
    <td class="tg-0pky">The grams of carbohydrate for each unit of insulin.<br><br>Assuming correct basal, you can test by checking IOB is zero and that you are in-range, eating exactly known carbs, and take an estimated amount of insulin based on current 1/CR.</td>
    <td class="tg-0pky">Lower CR = less food per unit, ie you are getting more insulin for a fixed amount of carbs. Can also be called ‘more aggressive’.<br><br>Higher CR = more food per unit, ie you are getting less insulin for a fixed amount of carbs. Can also be called ‘less aggressive’.<br><br>If after meal has digested and IOB has returned to zero, your BG remains higher than before food, chances are CR is too large. Conversely if your BG is lower than before food, CR is too small.</td>
  </tr>
</table>

### APS algoritme

#### Waarom zie ik "dia:3" in de "OPENAPS AMA"-tab ook al heb ik een andere DIA in mijn profiel?

![AMA 3u](../../images/Screenshot_AMA3h.png) In AMA betekent "dia" niet de "Duur van Insuline Actie". Het is een parameter die vroeger wel gelinkt was aan de DIA. Nu betekent het 'binnen welke tijd zou de correctie moeten zijn afgerond'. En heeft het niets meer te maken met de berekening van de IOB. In OpenAPS SMB wordt deze parameter niet meer gebruikt.

### Profiel

#### Waarom minimaal een 5 uur DIA (Duur van Insuline Actie) gebruiken in plaats van 2-3 uur?

Goed uitgelegd in [dit artikel](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/). Vergeet niet om op `ACTIVEER PROFIEL` te klikken na het wijzigen van je DIA.

#### Waarom zorgt de loop ervoor dat mijn bloedsuiker vaak zo ver zakt dat ik een hypo krijg, terwijl mijn COB (koolhydraten aan boord) nul is?

Controleer als eerste of jouw basaalinstellingen correct zijn, en test je basaalstanden door met een stabiele bloedglucose een tijdlang niets te eten. Pas je basaalstanden aan indien nodig. Nadat je zeker bent dat je basaalstanden goed zijn ingesteld, kun je naar je ISF kijken. Het kan ook zijn dat die waarde te laag is. Een typisch voorbeeld van een te lage ISF ziet er zo uit:

![ISF te laag](../images/isf.jpg)

#### Waarom heb ik hoge glucosepieken na een maaltijd terwijl ik een closed loop gebruik?

Controleer als eerste of jouw basaalinstellingen correct zijn, en test je basaalstanden door met een stabiele bloedglucose een tijdlang niets te eten. Pas je basaalstanden aan indien nodig. Nadat je zeker bent dat je basaalstanden goed zijn ingesteld, én je ziet dat jouw glucosewaarde wel weer zakt naar je streefdoel wanneer alle koolhydraten zijn geabsorbeerd dan kun je proberen om enige tijd voorafgaand aan je maaltijd een 'Eet binnenkort' tijdelijk laag streefdoel in te stellen. Of overleg met je behandelaars of je een bepaalde hoeveelheid tijd tussen bolus en maaltijd kunt nemen (pre-bolussen). Wanneer je bloedglucose te hoog is na de maaltijd, en hoog blijft nadat al je koolhydraten zijn geabsorbeerd, dan kun je vragen aan je behandelaars of je jouw KH ratio kunt verlagen. Wanneer je bloedglucose te hoog is terwijl je nog COB hebt, en je te laag uitkomt nadat alle koolhydraten geabsorbeerd zijn, dan kun je vragen aan je behandelaars of je jouw KH ratio kunt verhogen én een bepaalde hoeveelheid tijd te nemen tussen bolus en maaltijd.

## Overige instellingen

### Nightscout instellingen

#### AndroidAPS NSClient zegt 'Not allowed' (niet toegestaan) en wil geen gegevens uploaden. Wat kan ik doen?

Controleer 'Verbindingsinstellingen' in NSClient. Misschien heb je geen wifi verbinding of je hebt 'Enkel tijdens opladen' geactiveerd en jouw oplaadkabel is niet aangesloten.

### CGM instellingen

#### Waarom zegt AndroidAPS dat 'de gekozen BG bron geen optimale filtering toepast'?

Als je een andere CGM/FGM dan Dexcom G5 en G6 in xDrip Native-modus gebruikt, dan krijg je deze waarschuwing in de AndroidAPS OpenAPS-tab. Zie [Filteren van glucosewaardes](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) voor meer informatie.

## Pomp

### Waar moet ik mijn pomp dragen?

Er zijn talloze mogelijkheden om de pomp te dragen. Het maakt niet uit of je loop gebruikt of niet. Als je eigenlijk liever een slangloze pomp zou willen hebben, maar je hebt voor een Dana gekozen om te kunnen loopen, dan kun je ook kiezen voor een infuusset van 30cm en die gebruiken met de bijgeleverde buikband.

### Batterijen

Bij loopen kan de pompbatterij sneller leegraken dan bij normaal gebruik, omdat je telefoon veel vaker interactie heeft met de pomp dan een normale gebruiker zou hebben. We raden aan om de batterij al te vervangen als hij nog voor 25% vol is, omdat communicatie tussen telefoon en pomp dan al achteruit kan gaan. Je kunt een batterij-alarm in Nightscout instellen, door de variabele PUMP_WARN_BATT_P in te stellen. Tips om de levensduur van de batterij te verlengen:

* de tijd dat het LCD-scherm van de pomp aan staat, verkorten (in instellingen menu van de pomp)
* de tijd dat de achtergrondverlichting van het beeldscherm aan staat, verkorten (in instellingen menu van de pomp)
* stel meldingen in op geluid in plaats van trillen (in instellingen menu van de pomp)
* gebruik de knoppen van de pomp alleen bij het vullen van de pomp. Bekijk alle andere informatie op je telefoon (batterijduur, reservoir inhoud, geschiedenis etc).
* op sommige telefoons wordt AndroidAPS app vaak afgesloten om de batterij of het RAM geheugen te besparen. Elke keer dat AndroidAPS dan weer opnieuw wordt gestart, maakt je telefoon weer verbinding met de pomp om opnieuw de bolus geschiedenis en huidige basaalstand uit te lezen vanuit het pompgeheugen. Hierdoor raakt de batterij van de pomp leeg. Om te zien of dit gebeurt, ga naar Instellingen > NSClient en schakel 'Log app start naar NS' in. Hiermee zul je iedere keer dat de app herstart, een notificatie terugzien op je AAPS hoofdscherm in de glucosegrafiek, en ook in Nightscout. Wanneer je ziet dat de app vaak opnieuw gestart wordt, dan moet je dit uitzetten. Ga naar je telefooninstellingen, ergens onder energiebeheer/accuoptimalisatie moet je instellen dat de AndroidAPS app in de achtergrond mag blijven draaien en niet automatisch wordt afgesloten.
* maak de contactpunten van de batterij schoon met een alcoholdoekje, om te voorkomen dat er nog vet of olie van het productieproces is achtergebleven.
* bij DanaR/DanaRS pompen wordt er na een batterijwissel een grotere hoeveelheid stroom door de batterij gestuurd. In elke nieuwe batterij zit een inactiveringsfilm die voorkomt dat hij voor ingebruikname langzaam leeg zou lopen. De grotere hoeveelheid stroom zorgt ervoor dat de inactiveringsfilm van de batterij doorbroken wordt. Wanneer een nieuwe batterij geen 100% aangeeft nadat de pomp is opgestart, kun je 2-3 keren de batterij verwijderen en terugdoen in de pomp, of je kunt met een metalen voorwerp beide polen kort (fractie van een seconde) contact laten maken.
* bekijk meer tips over [specifieke soorten batterijen](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage#battery-type-and-causes-of-short-battery-life) voor de Combo-pomp

### Verwisselen van reservoirs en canules

Wisselen van het reservoir kan niet worden gedaan via AndroidAPS maar rechtstreeks via de pomp, zoals beschreven in de handleiding van de pompfabrikant.

* Houd "Open Loop" / "Closed Loop" op het Overzicht-scherm van AndroidAPS lang ingedrukt en selecteer 'Verbreek verbinding 1u met pomp'
* Koppel nu de pomp af en verwissel het reservoir volgens de instructies van de pompfabrikant.
* Wanneer je daarmee klaar bent, koppel je de pomp weer aan en houd 'Verbinding verbroken (.. m)' lang ingedrukt. Selecteer 'Hervatten'.

Het 'Ontlucht/vul' scherm van AAPS gebruikt niet de functie van "prime infusie set" van de pomp, maar vult de infusie set en/of canule met behulp van een bolus die niet in de geschiedenis van AAPS verschijnt. Dit betekent dat een lopende tijdelijke basaalstand niet zal worden onderbroken. Selecteer op het Acties (Act) tabblad, de knop ONTLUCHT/VUL en kies de hoeveelheid insuline die nodig is om de infuusset/canule te vullen en druk op OK. Wanneer er nog lucht in de infuusset zit, herhaal de vorige stap. Je kunt standaardhoeveelheden instellen in Instellingen > Andere > Vul standaard hoeveelheid. Hoeveel eenheden nodig zijn staat in het instructieboekje in de doos met infuussets, dit verschilt per type infuusset en is afhankelijk van de lengte van de canule en de lengte van de slang.

## Hygiëne

### Wat te doen tijdens het douchen?

Je kunt de pomp afkoppelen bij het douchen. Voor deze korte tijd kun je meestal wel zonder je pomp. Maar je moet AAPS wel laten weten dat je de pomp loskoppelt, zodat de IOB berekeningen blijven kloppen. Op het Overzicht-scherm van AAPS houd "Open loop / Closed loop" lang ingedrukt. Selecteer **'Verbreek verbinding ...min/u met pomp'** afhankelijk van jouw behoefte. Nadat je je pomp weer hebt aangesloten, dan kun je in datzelfde menu op 'Hervatten' drukken. Of wachten totdat de door jou gekozen tijd is verstreken, de loop zal dan automatisch weer worden hervat.

## Werken

Afhankelijk van het soort werk dat je doet, kun je verschillende instellingen kiezen (basaalstanden, ISF, KH factor) op werkdagen. Als AndroidAPS gebruiker kun je kiezen om een profielwissel te doen voor de duur van jouw werkdag (bijv. meer dan 100% gedurende 8 uur bij zittend werk, of juist minder dan 100% wanneer je fysiek actief werk doet). Je kunt ook kiezen voor een hoger of lager tijdelijk streefdoel, of voor een tijdverschuiving van jouw profiel wanneer je eerder of later dan normaal opstaat. Wanneer je Nightscout profielen gebruikt, kun je ook een specifiek profiel (bijv. 'thuis' of 'werkdag') aanmaken, en dagelijks het profiel activeren dat je op dat moment nodig hebt.

## Vrije tijd

## Sporten

## Sex

Je kunt de pomp loskoppelen voor wat 'vrijheid', maar je moet AAPS wel vertellen dat je dat doet. Zodat jouw IOB juist wordt berekend. Op het Overzicht-scherm van AAPS houd "Open loop / Closed loop" lang ingedrukt. Selecteer **'Verbreek verbinding ...min/u met pomp'** afhankelijk van jouw behoefte. Nadat je je pomp weer hebt aangesloten, dan kun je in datzelfde menu op 'Hervatten' drukken. Of wachten totdat de door jou gekozen tijd is verstreken, de loop zal dan automatisch weer worden hervat.

## Alcohol

Alcohol drinken in de closed loop modus heeft als risico dat het algoritme niet goed kan voorspellen welke invloed de alcohol heeft op jouw bloedglucose. Je zult voor jezelf een manier moeten vinden om hiermee om te gaan. AndroidAPS heeft verschillende functies die je hierbij kunt gebruiken:

* De closed loop uitschakelen en je diabetes handmatig onder controle houden
* Een hoger tijdelijk streefdoel instellen en onaangekondigde maaltijden (UAM, UnAnnounced Meals) uitschakelen, om te voorkomen dat je extra IOB krijgt toegediend
* een profielwissel, naar beduidend minder dan 100% 

Bij het drinken van alcohol moet je altijd je CGM in de gaten houden, om op tijd wat koolydraten te nemen en zo een hypo te kunnen voorkomen.

## Slapen

### Hoe kan ik 's nachts closed loopen zonder mobiele of WIFI straling?

Veel gebruikers zetten 's nachts hun telefoon in vliegtuigmodus. Wanneer je wilt dat de loop werkt in vliegtuigmodus, volg dan deze stappen (dit werkt alleen als je een locale BG-bron hebt zoals xDrip+ of de gepatchte Dexcom app, het werkt NIET wanneer jouw BG-waardes via Nightscout binnenkomen):

1. Zet de telefoon in vliegtuigmodus.
2. Wacht totdat de vliegtuigmodus actief is.
3. Schakel Bluetooth in.

Je kunt nu niet bellen of gebeld worden, en je bent ook niet verbonden met internet. Maar de closed loop werkt nog wel.

## Reizen

### Hoe kan ik wisselen van tijdzone?

Met DanaR en DanaR Koreaans hoef je niets te doen. Zie voor andere pompen de [wisselen van tijdzone](../Usage/Timezone-traveling.md) pagina voor meer details.

## Ziekenhuis

Wanneer je jouw behandelaar informatie wilt geven over AndroidAPS en doe-het-zelf loopen, dan kun je de [Informatie voor zorgprofessionals](../Resources/clinician-guide-to-AndroidAPS.md) uitprinten.

## Afspraak met je internist of diabetesverpleegkundige

### Rapporten

Je kunt rapporten op jouw nightscout site (https://YOUR-NS-SITE.com/report) laten weergeven of gebruik [Nightscout Reporter](https://nightscout-reporter.zreptil.de/)