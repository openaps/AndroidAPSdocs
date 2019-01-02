# Veelgestelde vragen

Om vragen toe te voegen aan de Veelgestelde Vragen: volg deze [instructies](../make-a-PR.md)

## Algemeen

### Hoe begin ik?

Het grondbeginsel van closed loopen is dat jouw basaalstanden en koolhydraatratio's correct zijn. Alle aanpassingen die de closed loop doet, gaan er vanuit dat jouw basaalstand klopt. Alle pieken en dalen die je ziet zijn dus een gevolg van andere, tijdelijke factoren (beweging, stress etc) die dan worden opgelost met een tijdelijke insulineaanpassing. De aanpassingen die de closed loop kan maken zijn uit veiligheid beperkt (zie maximaal toegestane basaalstand in [OpenAPS Reference Design](https://openaps.org/reference-design/)). Dit betekent dat je de closed loop niet moet inzetten om een fout afgestelde basaalstand te verhelpen. Wanneer je bijvoorbeeld vaak een lage waarde hebt vlak voor een maaltijd, dan moet waarschijnlijk je basaal omlaag. Je kunt [autotune](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) aan de hand van een grote hoeveelheid gegevens, suggesties laten doen voor verbeteringen aan je basaalstanden, ISF en/of koolhydraatratio. Of je kunt je basaalstanden op de [ouderwetse manier](http://integrateddiabetes.com/basal-testing/) testen en instellen.

### Zijn er nog praktische tips?

* Als je niet wilt dat jouw instellingen gemakkelijk worden aangepast, dan kun je het instellingen menu voorzien van een wachtwoord. Ga naar "Wachtwoord voor instellingen" in het instellingen menu en typ een zelfgekozen wachtwoord. De volgende keer dat je het instellingen menu opent, moet je het wachtwoord intypen om verder te kunnen. Wanneer je later geen wachtwoord meer wilt gebruiken, ga dan naar het "Wachtwoord voor instellingen" veld en verwijder de tekst.

* Wanneer je in de toekomst de Android Wear app wilt gebruiken om vanaf een smartwatch te kunnen bolussen of instellingen te wijzigen, dan moet je instellen dat notificaties van AndroidAPS niet geblokkeerd worden. Bevestiging van opdrachten die je op je smartwatch invoert, komen namelijk via een notificatie binnen op je telefoon.

* Als je de pomp wilt afkoppelen voor douchen/sporten etc, houd dan "Open-Loop" / "Closed Loop" tekst op het home-scherm ingedrukt en selecteer "verbreek verbinding ..min/u met pomp" voor hoelang je de pomp wilt afkoppelen. Hiermee zet je de basaal op nul voor de tijdsduur die je hebt gekozen. De minimale tijdsduur die je kunt kiezen komt door de minimale tijdsduur van TBRs die jouw pomp toestaat. Wanneer je een kortere tijd wilt kiezen, of je koppelt je pomp sneller aan dan je had gedacht, dan kun je "Verbinding verbroken (..m)" ingedrukt houden en "Hervatten" kiezen. Op deze manier zal jouw IOB correct berekend worden nadat je je pomp weer hebt aangekoppeld.

* Uit veiligheidsoogpunt zal AAPS aanpassingen doen op basis van een gemiddelde glucosewaarde (average delta), nooit op basis van één enkele waarde. Daarom zal het even duren voordat de loop weer iets doet nadat je even geen glucosewaardes hebt ontvangen.

* Er zijn verschillende blogs met goede tips om jou te helpen om de loop goed in te stellen (in het Engels):
  
  * [Fine-tuning Settings](http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM
  * [Why DIA matters](http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM
  * [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
  * [Hormones and autosens](http://seemycgm.com/2017/06/06/hormones-2/) See my CGM

### Welke spullen moet ik bij me hebben voor noodgevallen?

### Hoe zorg ik dat de CGM/FSL goed blijft vastzitten?

## AndroidAPS instellingen

### APS algoritme

#### Waarom zie ik "dia:3" in de "OPENAPS AMA"-tab ook al heb ik een andere DIA in mijn profiel?

![AMA 3u](../../images/Screenshot_AMA3h.png) In AMA betekent "dia" niet de "Duur van Insuline Actie". Het is een parameter die vroeger wel gelinkt was aan de DIA. Nu betekent het 'binnen welke tijd zou de correctie moeten zijn afgerond'. En heeft het niets meer te maken met de berekening van de IOB. In OpenAPS SMB wordt deze parameter niet meer gebruikt.

### Profiel

#### Waarom minimaal een 5 uur DIA (Duur van Insuline Actie) gebruiken in plaats van 2-3 uur?

Goed uitgelegd in [dit artikel](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/). Vergeet niet om op `ACTIVEER PROFIEL` te klikken na het wijzigen van je DIA.

## Andere instellingen

### Nightscout instellingen

### CGM instellingen

## Pomp

### Waar moet ik mijn pomp dragen?

### Batterijen

Bij loopen kan de pompbatterij sneller leegraken dan bij normaal gebruik, omdat je telefoon veel vaker interactie heeft met de pomp dan een normale gebruiker zou hebben. We raden aan om de batterij al te vervangen als hij nog voor 25% vol is, omdat communicatie tussen telefoon en pomp dan al achteruit kan gaan. Je kunt een batterij-alarm in Nightscout instellen, door de variabele PUMP_WARN_BATT_P in te stellen. Tips om de levensduur van de batterij te verlengen:

* de tijd dat het LCD-scherm van de pomp aan staat, verkorten (in instellingen menu van de pomp)
* de tijd dat de achtergrondverlichting van het beeldscherm aan staat, verkorten (in instellingen menu van de pomp)
* stel meldingen in op geluid in plaats van trillen (in instellingen menu van de pomp)
* gebruik de knoppen van de pomp alleen bij het vullen van de pomp. Bekijk alle andere informatie op je telefoon (batterijduur, reservoir inhoud, geschiedenis etc).
* op sommige telefoons wordt AndroidAPS app vaak afgesloten om de batterij of het RAM geheugen te besparen. Elke keer dat AndroidAPS dan weer opnieuw wordt gestart, maakt je telefoon weer verbinding met de pomp om opnieuw de bolus geschiedenis en huidige basaalstand uit te lezen vanuit het pompgeheugen. Hierdoor raakt de batterij van de pomp leeg. Om te zien of dit gebeurt, ga naar Instellingen > NSClient en schakel 'Log app start naar NS' in. Hiermee zul je iedere keer dat de app herstart, een notificatie terugzien op je AAPS hoofdscherm in de glucosegrafiek, en ook in Nightscout. Wanneer je ziet dat de app vaak opnieuw gestart wordt, dan moet je dit uitzetten. Ga naar je telefooninstellingen, ergens onder energiebeheer/accuoptimalisatie moet je instellen dat de AndroidAPS app in de achtergrond mag blijven draaien en niet automatisch wordt afgesloten.
* maak de contactpunten van de batterij schoon met een alcoholdoekje, om te voorkomen dat er nog vet of olie van het productieproces is achtergebleven.
* bij DanaR/DanaRS pompen wordt er na een batterijwissel een grotere hoeveelheid stroom door de batterij gestuurd. In elke nieuwe batterij zit een inactiveringsfilm die voorkomt dat hij voor ingebruikname langzaam leeg zou lopen. De grotere hoeveelheid stroom zorgt ervoor dat de inactiveringsfilm van de batterij doorbroken wordt. Wanneer een nieuwe batterij geen 100% aangeeft nadat de pomp is opgestart, kun je 2-3 keren de batterij verwijderen en terugdoen in de pomp, of je kunt met een metalen voorwerp beide polen kort (fractie van een seconde) contact laten maken.
* bekijk meer tips over [specifieke soorten batterijen](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md#battery-type-and-causes-of-short-battery-life) voor de Combo-pomp

### Verwisselen van reservoirs en canules

Wisselen van het reservoir kan niet worden gedaan via AndroidAPS maar rechtstreeks via de pomp, zoals beschreven in de handleiding van de pompfabrikant.

* Houd "Open Loop" / "Closed Loop" op het home-scherm van AndroidAPS lang ingedrukt en selecteer 'Verbreek verbinding 1u met pomp'
* Koppel nu de pomp af en verwissel het reservoir volgens de instructies van de pompfabrikant.
* Wanneer je daarmee klaar bent, koppel je de pomp weer aan en houd 'Verbinding verbroken (.. m)' lang ingedrukt. Selecteer 'Hervatten'.

Het 'Ontlucht/vul' scherm van AAPS gebruikt niet de functie van "prime infusie set" van de pomp, maar vult de infusie set en/of canule met behulp van een bolus die niet in de geschiedenis van AAPS verschijnt. Dit betekent dat een lopende tijdelijke basaalstand niet zal worden onderbroken. Selecteer op het Acties (Act) tabblad, de knop ONTLUCHT/VUL en kies de hoeveelheid insuline die nodig is om de infuusset/canule te vullen en druk op OK. Wanneer er nog lucht in de infuusset zit, herhaal de vorige stap. Je kunt standaardhoeveelheden instellen in Instellingen > Andere > Vul standaard hoeveelheid. Hoeveel eenheden nodig zijn staat in het instructieboekje in de doos met infuussets, dit verschilt per type infuusset en is afhankelijk van de lengte van de canule en de lengte van de slang.

## Hygiëne

### Wat te doen tijdens het douchen?

Je kunt de pomp afkoppelen bij het douchen. Voor deze korte tijd kun je meestal wel zonder je pomp. Maar je moet AAPS wel laten weten dat je de pomp loskoppelt, zodat de IOB berekeningen blijven kloppen. Op het home-scherm van AAPS houd "Open loop / Closed loop" lang ingedrukt. Selecteer **"Verbreek verbinding 1u met pomp"**. Nadat je klaar bent met douchen en je de pomp weer hebt aangekoppeld, selecteer je "Hervatten" in hetzelfde scherm.

## Werken

## Vrije tijd

## Sporten

## Sex

## Uitgaan

## Alcohol

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

## Ziekenhuisopname

## Afspraak met je internist of diabetesverpleegkundige