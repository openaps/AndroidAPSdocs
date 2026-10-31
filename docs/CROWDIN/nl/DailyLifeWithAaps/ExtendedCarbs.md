(Extended-Carbs-extended-carbs-ecarbs)=
# Vertraagde koolhydraten / "eCarbs"

## Wat zijn eCarbs en wanneer zijn ze handig?

Bij reguliere pomptherapie zijn vertraagde bolussen / multiwave bolussen handig voor vette maaltijden (pizza, pasta, pannenkoeken etc) die je bloedglucose lange tijd laten stijgen, langer dan de insuline bij een normale bolus werkzaam zou zijn. In een gesloten loop is dat echter niet zo zinvol (en geeft het technische problemen) omdat vertraagde/multiwave bolussen door de pomp worden uitgevoerd als een langdurige en vooraf gedefinieerde hoge basaal. Dat conflicteert met de loop, die de basaalstanden juist dynamisch aanpast. Zie [vertraagde bolus](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) hieronder voor details.

Toch moet je zulke maaltijden nog steeds goed kunnen opvangen. Daarom ondersteunt AAPS zogenaamde vertraagde koolhydraten of eCarbs.

eCarbs zijn koolhydraten die over meerdere uren worden verdeeld. Voor standaard maaltijden met meer koolhydraten dan vet/eiwit is het meestal genoeg om de koolhydraten vooraf in te voeren (en zo nodig de eerste bolus kleiner te maken). Zo voorkom je dat de insuline te vroeg wordt gegeven.  Maar voor langzamer absorberende maaltijden kunnen beter wel eCarbs worden gebruikt. Anders zou (zeker bij gebruik van SMB) de IOB veel te snel oplopen terwijl de maaltijd je BG slechts langzaam laat stijgen, met een hypo als resultaat. Dankzij eCarbs wordt veel beter gesimuleerd hoe de koolhydraten (en evt. ook alle koolhydraat-equivalenten die je invoert voor vetten/eiwitten) worden geabsorbeerd en hoe die invloed hebben op je BG. Met deze informatie kan de loop geleidelijk aan SMB's afgeven om die koolhydraten aan te pakken. Deze methode zou je als een dynamische vorm van een vertraagde/multiwave bolus kunnen zien. (Opmerking: we gaan er hierbij vanuit dat je SMB's gebruikt, dit zou ook moeten werken zonder SMB's, maar is waarschijnlijk minder effectief).

**Opmerking:** eCarbs zijn niet alleen voor vette / eiwitrijke maaltijden: je kunt ze ook gebruiken in elke situatie waarin iets je bloedglucose verhoogt, bijv. andere medicijnen zoals corticosteroïden.

## Hoe gebruik je eCarbs

Om eCarbs in te voeren, open je het venster **Koolhydraten** (**Behandelingen** → **Koolhydraten**), voer je het totaal aan koolhydraten in, stel je een **Tijdsduur** in en verschuif je eventueel de start met **Koolhydraattijd** (*de getallen hieronder zijn alleen voorbeelden; je moet zelf uitproberen welke waarden voor jou een goede glucosereactie geven*):

![Koolhydraten invoeren](../images/eCarbs_Dialog.png)

De eCarbs op het hoofdscherm: het getal tussen haakjes in het veld **COB** toont de koolhydraten die nog komen, en de grafiek **COB** toont elke toekomstige eCarbs-invoer als een oranje markering. Zie je geen grafiek **COB**, voeg die dan toe met **Grafiek toevoegen** onder de grafieken (zie [AAPS-schermen](../DailyLifeWithAaps/AapsScreens.md)).

![eCarbs in het COB-veld en op de COB-grafiek](../images/eCarbs_Graph.png)

(AapsScreens-carbs-type)=
## Type maaltijd in de Bolus wizard: brood, cake of pizza

In de [Bolus wizard](#aaps-screens-bolus-wizard) kun je met drie knoppen onder het veld **Koolhydraten** kiezen hoe snel je maaltijd wordt opgenomen. Kies er een voordat je bevestigt. Afhankelijk van het type neemt **AAPS** een deel van de ingevoerde koolhydraten als normale koolhydraten, en voegt het later [vertraagde koolhydraten ("eCarbs")](#Extended-Carbs-extended-carbs-ecarbs) toe voor trage, rijke maaltijden. Druk op het pictogram **(i)** naast de knoppen om de typische voedingsmiddelen voor het gekozen type te zien en wat het met je koolhydraten doet.

| Type                  | Typische voedingsmiddelen (zoals in de app)                                                                                      | Koolhydraten nu, gebruikt voor de bolus | Toegevoegde eCarbs                               |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ------------------------------------------------ |
| **Brood** (standaard) | Brood, hartige deegwaren, yoghurt, fruit, aardappelen, rijst, havermout, groenten                                                | 100%                                    | Geen                                             |
| **Cake**              | Dumplings, pasta, Aziatische gerechten rijk aan koolhydraten en vetten, zoete deegwaren en gistgebak, ontbijtgranen, honing, jam | 90%                                     | 20%, start 60 minuten later, verdeeld over 2 uur |
| **Pizza**             | Lasagne, pizza, hamburgers, friet, gepofte aardappelen, chips                                                                    | 80%                                     | 35%, start 60 minuten later, verdeeld over 3 uur |

**Voorbeeld**: je voert 100 g in en kiest **Pizza**. De bolus wordt berekend voor 80 g, die nu worden vastgelegd. 35 g eCarbs starten 1 uur later en worden verdeeld over 3 uur.

Goed om te weten:
* Dit is geen gewone verdeling: met **Cake** en **Pizza** zijn de vastgelegde koolhydraten samen **meer dan je hebt ingevoerd** (110% en 115%). Het extra deel zit alleen in de eCarbs.
* De bolus dekt alleen de koolhydraten die nu worden genomen. **AAPS** geeft vooraf geen bolus voor de eCarbs: de loop houdt er rekening mee zodra ze starten, net als bij andere [eCarbs](#Extended-Carbs-extended-carbs-ecarbs).
* Als je een **Koolhydraattijd** instelt, starten de eCarbs 60 minuten na die tijd.
* Het bevestigingsvenster toont de eCarbs op een eigen regel, _bijv._ "eCarbs: 35 g / 3 h (+60 min)".
* Grammen worden naar beneden afgerond op hele getallen.
* De percentages, vertragingen en tijdsduren liggen vast; je kunt ze niet wijzigen in de instellingen.
* De keuze wordt niet onthouden: de wizard opent elke keer op **Brood**.

______________________________________________________________________

Een manier om met deze functie vet en eiwit op te vangen staat hier beschreven: [https://adriansloop.blogspot.com/2018/04/page-margin-0.html](https://adriansloop.blogspot.com/2018/04/page-margin-0.html)

______________________________________________________________________

## Aanbevolen instelling, voorbeeld en belangrijke opmerkingen

De aanbevolen instelling is de OpenAPS SMB APS-plugin, met SMB ingeschakeld en ook de instelling *SMB toestaan bij COB* ingeschakeld.

Een voorbeeld voor een pizza: geef vooraf een (gedeeltelijke) bolus via de *Bolus wizard* en voer daarna in het venster *Koolhydraten* de overige koolhydraten in, met een tijdsduur van 4–6 uur, die start na 1 of 2 uur.

Sneller gaat het als de *Bolus wizard* de eCarbs voor je toevoegt: kies het [type maaltijd](#AapsScreens-carbs-type) **Cake** of **Pizza** onder het veld **Koolhydraten** (zie hierboven). De hoeveelheden en tijden liggen vast. Gebruik dus het venster *Koolhydraten* als je andere waarden wilt.

**Belangrijke opmerkingen:** Je moet natuurlijk zelf uitproberen welke waarden voor jou werken. Je kunt ook voorzichtig de instelling *Aantal minuten basale insuline waarop SMB’s worden begrensd* aanpassen om het algoritme meer of minder agressief te maken. Voor maaltijden met nauwelijks koolhydraten en een hoog vet/eiwitgehalte kan het genoeg zijn om alleen eCarbs te gebruiken en geen bolus (zie de blogpost hierboven). Iedere keer dat je eCarbs invoert, wordt er in jouw Careportal automatisch een opmerking toegevoegd. Hierdoor kun je de eerdere keren gemakkelijk terugvinden, zodat je jouw aanpak kunt evalueren en verbeteren voor de volgende keer. Of gewoon herhalen wat je eerder deed, als dat voor jou goed werkte.

(extended-bolus-and-why-they-wont-work-in-closed-loop-environment)=
## Vertraagde bolus: waarom werkt die niet in een gesloten loop?

Zoals hierboven vermeld, werken vertraagde of multiwave bolussen niet echt in een gesloten loop. [Zie hieronder](#why-extended-boluses-won-t-work-in-a-closed-loop-environment) voor details

(Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)=
### Vertraagde bolus en overschakelen naar open loop - alleen voor Dana en Insight pomp

Sommige mensen wilden dolgraag een optie hebben om een vertraagde bolus te kunnen gebruiken in AAPS omdat ze voor bepaalde voedingsmiddelen willen bolussen zoals ze eerder gewend waren.

Daarom biedt **AAPS** een vertraagde bolus voor gebruikers van Dana- en Insight-pompen: open **Beheren** en kies **Vertraagde bolus**.

**AAPS** waarschuwt je eerst dat de gesloten loop wordt gestopt zolang de vertraagde bolus loopt. Tik op **OK** om door te gaan:

![Waarschuwing: vertraagde bolus stopt de gesloten loop](../images/extended_bolus_stops_loop.png)

Voer de hoeveelheid **Insuline** en de **Tijdsduur** in, tik dan op de bevestigingsknop onderaan en op **OK**:

![Venster vertraagde bolus met 2 E over 60 minuten](../images/extended_bolus_dialog.png)

Op de Insight-pomp is de vertraagde bolus *niet beschikbaar* als [TBR-emulatie](#Accu-Chek-Insight-Pump-settings-in-aaps) wordt gebruikt.

Zolang de vertraagde bolus loopt, werkt de loop in de modus **Open loop** (het loop-pictogram op het hoofdscherm verandert). De gesloten loop wordt automatisch weer ingeschakeld als de vertraagde bolus is afgelopen:

![Pictogram Open loop op het hoofdscherm terwijl een vertraagde bolus loopt](../images/extended_bolus_main_screen.png)

Het menu **Beheren** toont een knop **Annuleren** met de stand en de verstreken / totale tijd (bijvoorbeeld **Annuleren 2,00 E/u 1/60'**). Tik erop om de vertraagde bolus eerder te stoppen:

![Knop Annuleren van een lopende vertraagde bolus in het menu Beheren](../images/extended_bolus_running_manage.png)

(why-extended-boluses-won-t-work-in-a-closed-loop-environment)=
### Waarom vertraagde bolussen niet werken in een gesloten loop

1. De loop bepaalt dat er nu 1,55 E/u moet worden gegeven. Of dit als vertraagde bolus of als TBR wordt gegeven, maakt voor het algoritme niet uit. Sommige pompen gebruiken zelfs de vertraagde bolus. Wat moet er dan gebeuren? De meeste pompdrivers stoppen dan de vertraagde bolus -> Je had hem dus niet eens hoeven te starten.

2. Als je de vertraagde bolus als invoer had, wat moet er dan in het model gebeuren?

   1. Moet hij samen met de basaalstand als neutraal worden gezien en moet de loop daarop werken? Dan moet de loop de bolus ook kunnen verlagen als je bijvoorbeeld te laag wordt, en wordt alle "neutrale" insuline weggenomen?
   2. Moet de vertraagde bolus gewoon worden opgeteld? Moet de loop dan gewoon door mogen gaan? Zelfs bij de ergste hypo? Dat lijkt mij niet zo goed: er wordt een hypo voorzien, maar die mag niet worden voorkomen?

3. De IOB die de vertraagde bolus opbouwt, wordt na 5 minuten bij de volgende ronde zichtbaar. Daardoor zou de loop minder basaal geven. Er verandert dus niet veel... behalve dat de mogelijkheid om een hypo te voorkomen verdwijnt.
