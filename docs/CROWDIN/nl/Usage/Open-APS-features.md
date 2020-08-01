# OpenAPS functies

## Gevoeligheidsdetectie (Autosens)

* De Gevoeligheidsdetectie is een algoritme dat kijkt naar de afwijkingen in jouw bloedglucose (positief/negatief/neutraal).
* Op basis van deze afwijkingen, bepaalt het algoritme hoe insulinegevoelig/resistent je bent.
* De oref-implementatie in **OpenAPS** gebruikt een combinatie van 24 en 8 uur aan gegevens. Welk van die twee hegt meest gevoelig is, wordt gebruikt.
* AndroidAPS gebruikt slechts 8 (om UAM mogelijk te maken) of 24 uur, in te stellen door de gebruiker.
* Het plaatsen van een nieuw infuus of het doen van een profielwissel (zonder tijdsduur) zal de Gevoeligheidsdetectie ratio terugzetten naar 0%.
* Gevoeligheidsdetectie past jouw basaal en ISF aan (daarmee bootst het na wat een profielwissel doet).
* Wanneer je gedurende een langere tijd telkens koolhydraten eet, dan zal de Gevoeligheidsdetectie minder goed zijn werk kunnen doen, omdat periodes met COB worden uitgesloten van BG delta berekeningen.

## Super Micro Bolus (SMB)

SMB, de afkorting van 'super micro bolus', is de nieuwste OpenAPS functie (uit 2018) van het Oref1-algoritme. In tegenstelling tot AMA (geavanceerde maaltijdhulp), gebruikt SMB geen tijdelijke basaalstanden, maar vooral **kleine super microbolussen**. In gevallen waar AMA 1,0 Eenheid extra insuline zou geven door middel van een tijdelijke basaalstand, geeft SMB verschillende super microbolussen in kleine stapjes met **5 minuten ertussen**, bijvoorbeeld 0,4 E; 0,3 E; 0,2 E en 0,1 E. Tegelijkertijd wordt (uit veiligheidsredenen) de basaalstand op dat moment naar 0 E/uur gezet om een overdosis te voorkomen, dit heet **'zero-temp'**. Op deze manier kan het systeem je bloedsuikers sneller laten zakken dan met de tijdelijk hogere basaalstand die AMA gebruikt.

Dankzij SMB kun je in principe bij een maaltijd met weinig koolhydraten, alleen de hoeveelheid koolhydraten invoeren en de rest overlaten aan AAPS. Al kan dit wel leiden tot hogere waardes na de maaltijd, omdat je niet kunt pre-bolussen. Of je geeft, eventueel door te pre-bolussen, een **start bolus**, die maar **gedeeltelijk** jouw koolhydraten afdekt (bijv. 2/3 van de geschatte hoeveelheid) en je laat SMB de rest aanvullen.

De SMB-functie heeft een aantal veiligheidsmaatregelen:

1. De kleinste waarde van onderstaande opties is de maximale dosis die een SMB mag geven:
    
    * waarde die hoort bij jouw huidige basaalstand (eventueel aangepast door autosens) voor de instelling "Maximum aantal minuten basaal om de SMB te limiteren tot", bijvoorbeeld de hoeveelheid basale insuline die je de komende 30 minuten zou krijgen, of
    * de helft van de insuline die je op dat moment nodig hebt, of
    * de overgebleven hoeveelheid van jouw maxIOB waarde in de instellingen.

2. Waarschijnlijk zul je vaker lage tijdelijke basaalstanden zien (zogenaamde 'low temps') of tijdelijke basaalstanden van 0 E/uur (zogenaamde 'zero temps'). Dit is zo ontworpen vanwege veiligheidsredenen en heeft bij een correct ingesteld profiel geen negatieve gevolgen. Het is hierdoor zinvoller om naar de IOB grafiek te kijken dan naar de tijdelijke basaalstanden die zijn gegeven.

3. Allerlei berekeningen om het verloop van je glucosewaardes te kunnen voorspellen, bijv. met UAM (onaangekondigde maaltijden, unannounced meals). Zelfs zonder dat jij als gebruiker handmatig je koolhydraten invoert, zal UAM een sterke stijging van jouw glucosewaardes opmerken. Een stijging door maaltijden, adrenaline of andere invloeden. Vervolgens zal het systeem jouw waardes proberen te verlagen met SMB. Andersom werkt dit ook: om veilig te kunnen werken zal het systeem eerder stoppen met het geven van SMB als het merkt dat jouw glucosewaarde plotseling daalt. Daarom moet je UAM altijd ingeschakeld hebben wanneer je SMB gebruikt.

**Je moet [leerdoel 10](../Usage/Objectives#doel-10-activeren-van-extra-functies-overdag-zoals-smb-super-micro-bolus) hebben voltooid om SMB te kunnen gebruiken.**

Zie ook: [OpenAPS documentatie voor oref1 SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) en [Tim's info over SMB](http://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/).

### Maximale E/uur dat OpenAPS kan toedienen (OpenAPS "max-basal")

Deze veiligheidsinstelling bepaalt de maximale tijdelijke basaalstand die je insulinepomp mag geven. Deze waarde zou hetzelfde moeten zijn in je pompinstellingen als in AAPS, en zou op zijn minst 3 x jouw hoogste basaalstand moeten zijn.

Voorbeeld:

De hoogste basaalstand op enig moment van de dag in jouw profiel is 1,00 E/uur. Dan wordt een max-basal waarde van minstens 3 E/uur aanbevolen.

Maar je kunt niet iedere waarde kiezen. AAPS beperkt de waarde tot een 'harde limiet' volgens de leeftijd van de patiënt die je hebt geselecteerd in je Instellingen. De laagste toegestane waarde is voor kinderen en de hoogste voor insuline-resistente volwassenen.

AndroidAPS beperkt de waarde als volgt:

* Kind: 2
* Tiener: 5
* Volwassene: 10
* Insuline-resistente volwassene: 12

### Max totaal IOB dat OpenAPS niet kan overschrijden (OpenAPS "max-iob")

Deze waarde bepaalt tot aan welk max-IOB AAPS mag gaan in closed loop modus. Als de huidige IOB (bijvoorbeeld na een maaltijd bolus) hoger is dan de door jou ingestelde waarde voor max-IOB, stopt het systeem met insuline geven totdat de IOB onder deze waarde zakt.

Wanneer je SMB gebruikt, wordt max-IOB anders berekend dan wannneer je AMA gebruikt. Bij AMA was max-IOB alleen een veiligheidsbeperking voor basale IOB, terwijl bij SMB de max-IOB ook bolus IOB meeneemt. Een goed begin is

    max-IOB = gemiddelde maaltijdbolus + 3x jouw hoogste basaalstand
    

Wees voorzichtig en geduldig en verander de instellingen stap voor stap. Dat is voor iedereen anders en hangt ook af van jouw gemiddelde totale dagdosis (TDD). Om veiligheidsredenen is er ook hier een grens, die afhangt van de leeftijd van de patiënt. De 'harde limiet' voor max-IOB is hoger dan in AMA.

* Kind: 3
* Tiener: 7
* Volwassene: 12
* Insuline-resistente volwassene: 25

Zie ook [OpenAPS documentatie over SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-smb).

### Activeer AMA autosens

Hier kun je kiezen of je [gevoeligheidsdetectie](../Configuration/Sensitivity-detection-and-COB.md) 'autosens' wilt inschakelen of niet.

### Activeer SMB

Hier kun je kiezen of je de SMB functie inschakelt.

### Activeer SMB met Koolhydraten

SMB is ingeschakeld wanneer jouw COB groter is dan nul.

### Gebruik SMB met tijdelijke streefdoelen

SMB is ingeschakeld wanneer er een laag of hoog tijdelijk streefdoel actief is (eet binnenkort, activiteit, hypo, aangepast)

### Gebruik SMB met een hoog tijdelijk streefdoel

SMB is ingeschakeld wanneer er een hoog tijdelijk streefdoel actief is (activiteit, hypo). Deze optie kan andere SMB-instellingen beperken, dat wil zeggen als 'Gebruik SMB met tijdelijke streefdoelen' is ingeschakeld en 'Gebruik SMB met een hoog tijdelijk streefdoel' is uitgeschakeld, dat SMB zal werken met een laag maar niet met een hoog tijdelijk streefdoel. Dat geldt ook voor ingeschakelde SMB met COB: als 'Gebruik SMB met een hoog tijdelijk streefdoel' is uitgeschakeld, dan zal er geen SMB worden gegeven met een hoog tijdelijk streefdoel zelfs als er wel COB zijn.

### Activeer SMB altijd

SMB is altijd ingeschakeld (onafhankelijk van COB, tijdelijke streefdoelen of bolussen). Om veiligheidsredenen is deze optie alleen mogelijk voor BG bronnen met een mooi filtersysteem voor 'ruis' in de BG waardes. Voor nu werkt het enkel met een Dexcom G5 in combinatie met de aangepaste Dexcom App, of met de G5 of G6 in combinatie met 'native algorithm' in xDrip+. Dankzij deze filtering zal de Dexcom zender een BG-waarde met een te grote afwijking, niet sturen en wachten op de volgende waarde in 5 minuten.

Voor andere CGM/FGM zoals Freestyle Libre, is 'Activeer SMB altijd' niet mogelijk. Dit wordt pas mogelijk wanneer xDrip+ een betere ruis-filtering heeft voor die systemen. Je kunt er [hier](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) meer over vinden.

### Activeer SMB na koolhydraten

SMB is ingeschakeld gedurende 6 uur na koolhydraten, zelfs als COB nul is. Om veiligheidsredenen is deze optie alleen mogelijk voor BG bronnen met een mooi filtersysteem voor 'ruis' in de BG waardes. Voor nu werkt het enkel met een Dexcom G5 in combinatie met de aangepaste Dexcom App, of met de G5 of G6 in combinatie met 'native algorithm' in xDrip+. Dankzij deze filtering zal de Dexcom zender een BG-waarde met een te grote afwijking, niet sturen en wachten op de volgende waarde in 5 minuten.

Voor andere CGM/FGM zoals Freestyle Libre, is 'Activeer SMB altijd' niet mogelijk. Dit wordt pas mogelijk wanneer xDrip+ een betere ruis-filtering heeft voor die systemen. Je kunt er [hier](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) meer over vinden.

### Maximum aantal minuten basaal om SMB te limiteren tot

Dit is een belangrijke veiligheidsinstelling. This value determines how much SMB can be given based on the amount of basal insulin in a given time, when it is covered by COBs.

Dit maakt SMB agressiever. In het begin moet je de standaardwaarde van 30 minuten gebruiken. Na enige ervaring kun je de waarde met stappen van 15 minuten verhogen en kijken wat de invloed is van deze veranderingen.

Het is raadzaam om deze waarde niet hoger te zetten dan 90 minuten, omdat dit ervoor kan zorgen dat het algoritme een dalende bloedsuiker niet meer kan bijsturen met een basaal van 0 E/uur ('zero-temp'). Je zou ook alarmen moeten instellen, vooral als je nog nieuwe instellingen aan het testen bent, zodat je wordt gewaarschuwd voordat je in een hypo raakt.

Standaard instelling: 30 min.

### Activeer UAM

Als deze optie is ingeschakeld, herkent het SMB-algoritme onaangekondigde maaltijden (UnAnnounced Meals). Dit is handig, als je het systeem vergeet te vertellen dat je koolhydraten hebt gegeten, of als je de koolhydraten verkeerd hebt ingeschat. Of wanneer je na een maaltijd met veel vet en eiwit een langdurige stijging van je glucosewaardes krijgt. Wanneer je geen koolhydraten hebt ingegeven, kan UAM snelle glucosestijgingen veroorzaakt door koolhydraten, adrenaline, etc. herkennen, en zal het proberen dit te compenseren met SMBs. Dit werkt ook andersom: als je een snelle glucosedaling hebt, dan zal het systeem SMBs eerder stoppen.

**Daarom moet je UAM altijd geactiveerd hebben bij het gebruik van SMB!**

### Hoog tijdelijk streefdoel verhoogt gevoeligheid

Als je deze optie ingeschakeld hebt, zal de insulinegevoeligheid worden verhoogd zolang een tijdelijk streefdoel van boven de 100 mg/dl of 5,6 mmol/l actief is. Dit betekent dat je ISF verhoogd wordt en dat je KH ratio en basaalstand verlaagd worden.

### Laag tijdelijk streefdoel verlaagt gevoeligheid

Als je deze optie ingeschakeld hebt, zal de insulinegevoeligheid worden verlaagd zolang een tijdelijk streefdoel van onder de 100 mg/dl of 5,6 mmol/l actief is. Dit betekent dat je ISF verlaagd wordt en dat je KH ratio en basaalstand verhoogd worden.

### Geavanceerde instellingen

**Gebruik altijd korte gemiddeld verschil ipv gewone verschil** Wanneer je deze functie inschakelt, dan gebruikt AndroidAPS het korte gemiddelde (= gemiddelde vd afgelopen 15 minuten), wat meestal het gemiddelde is van de afgelopen drie waardes. Dit helpt AndroidAPS om stabieler te werken met bloedglucose bronnen met veel ruis, zoals xDrip+ en Libre.

**Maximale dagelijkse veiligheids vermenigvuldigings factor** Dit is een belangrijke veiligheids-limiet. De standaardinstelling (die je waarschijnlijk niet zult hoeven aanpassen) is 3. Dit betekent dat AndroidAPS nooit wordt toegestaan om een tijdelijke basaalstand in te stellen die groter is dan 3 x de huidige basaalstand per uur. Voorbeeld: als jouw hoogste basaalstand op een dag 1,0 E/uur is, en jouw maximale dagelijkse veiligheids vermenigvuldigingsfactor is 3, dan kan AndroidAPS maximaal een tijdelijke basaalstand geven van 3,0 E/uur (= 3 x 1,0 E/uur).

Standaardwaarde: 3 (mag niet worden gewijzigd, tenzij je het echt wilt en weet wat je doet)

**Huidige basaalstand veiligheids vermenigvuldigings factor** Dit is ook een belangrijke veiligheids-limiet. De standaardinstelling (die je waarschijnlijk niet zult hoeven aanpassen) is 4. Dit betekent dat AndroidAPS nooit wordt toegestaan om een tijdelijke basaalstand in te stellen die groter is dan 4 x de huidige basaalstand per uur.

Standaardwaarde: 4 (mag niet worden gewijzigd, tenzij je het echt wilt en weet wat je doet)

* * *

## Geavanceerde maaltijdhulp (AMA)

AMA (Advanced Meal Assist), oftewel "geavanceerde maaltijdhulp" is een OpenAPS functie uit 2017 (oref0). Dankzij AMA kan het systeem na een maaltijdbolus sneller een hogere tijdelijke basaalstand geven, zolang je wel je koolhydraten correct hebt ingevoerd.

**Je moet [leerdoel 9](../Usage/Objectives#doel-9-activeren-van-extra-functies-overdag-zoals-ama-geavanceerde-maaltijdhulp-advanced-meal-assist) hebben voltooid om AMA te kunnen gebruiken.**

Meer informatie vind je in de [documentatie van OpenAPS](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Maximale E/uur dat een tijdelijke basaalstand kan toedienen (OpenAPS "max-basal")

Deze veiligheidsinstelling voorkomt dat AndroidAPS ooit een gevaarlijk hoge basaalstand instelt, en beperkt de tijdelijke basaalstand tot xx E/uur. We raden je aan je verstand te gebruiken bij het invullen van deze waarde. Een goede aanbeveling is om de hoogste basaalstand van jouw profiel te vermenigvuldigen met 4, of ten minste met 3. Bijvoorbeeld, als de hoogste basaalstand in jouw profiel 1,0 E/uur is dan kun je dat vermenigvuldigen met 4. Je krijgt dan een waarde van 4 E/uur, dus stel je "4" in bij deze veiligheidsinstelling.

Je kunt niet elke waarde kiezen: om veiligheidsredenen is er een 'harde limiet', afhankelijk van de leeftijd van de patiënt. De 'harde limiet' voor max-IOB is lager bij AMA dan bij SMB. Voor kinderen is deze waarde het laagste terwijl voor insulineresistentie volwassenen deze waarde het grootste is.

AndroidAPS gebruikt de volgende 'harde limieten':

* Kind: 2
* Tiener: 5
* Volwassene: 10
* Insuline-resistente volwassene: 12

### Max basaal IOB dat OpenAPS kan toedienen \[E\] (OpenAPS "max-iob")

Deze instelling beperkt het maximum van basaal IOB waar AndroidAPS nog steeds werkt. Als de IOB hoger is, wordt er geen extra basale insuline meer gegeven totdat de waarde van basaal IOB weer onder de limiet ligt.

De standaardinstelling is 2, je moet deze waarde in kleine stapjes ophogen om te zien wat de invloed is en welke waarde het beste bij jou past. Dat is voor iedereen anders en hangt ook af van jouw gemiddelde totale dagdosis (TDD). Om veiligheidsredenen is er ook hier een grens, die afhangt van de leeftijd van de patiënt. De 'harde limiet' voor max-IOB is lager bij AMA dan bij SMB.

* Kind: 3
* Tiener: 5
* Volwassene: 7
* Insuline-resistente volwassene: 12

### Activeer AMA autosens

Hier kun je kiezen of je [gevoeligheidsdetectie](../Configuration/Sensitivity-detection-and-COB.md) 'autosens' wilt inschakelen of niet.

### Autosens past de streefwaardes ook aan

Als je deze optie ingeschakeld hebt dan kan autosense ook jouw tijdelijke streefdoelen (naast basaalstanden, ISF en KH ratio), ook aanpassen. Hierdoor grijpt AndroidAPS 'agressiever' in. Jouw streefdoel kan hierdoor wellicht sneller bereikt worden.

### Geavanceerde instellingen

**Gebruik altijd korte gemiddeld verschil ipv gewone verschil** Wanneer je deze functie inschakelt, dan gebruikt AndroidAPS het korte gemiddelde (= gemiddelde vd afgelopen 15 minuten), wat meestal het gemiddelde is van de afgelopen drie waardes. Dit helpt AndroidAPS om stabieler te werken met bloedglucose bronnen met veel ruis, zoals xDrip+ en Libre.

**Maximale dagelijkse veiligheids vermenigvuldigings factor** Dit is een belangrijke veiligheids-limiet. De standaardinstelling (die je waarschijnlijk niet zult hoeven aanpassen) is 3. Dit betekent dat AndroidAPS nooit wordt toegestaan om een tijdelijke basaalstand in te stellen die groter is dan 3 x de huidige basaalstand per uur. Voorbeeld: als jouw hoogste basaalstand op een dag 1,0 E/uur is, en jouw maximale dagelijkse veiligheids vermenigvuldigingsfactor is 3, dan kan AndroidAPS maximaal een tijdelijke basaalstand geven van 3,0 E/uur (= 3 x 1,0 E/uur).

Standaardwaarde: 3 (mag niet worden gewijzigd, tenzij je het echt wilt en weet wat je doet)

**Huidige basaalstand veiligheids vermenigvuldigings factor** Dit is ook een belangrijke veiligheids-limiet. De standaardinstelling (die je waarschijnlijk niet zult hoeven aanpassen) is 4. Dit betekent dat AndroidAPS nooit wordt toegestaan om een tijdelijke basaalstand in te stellen die groter is dan 4 x de huidige basaalstand per uur.

Standaardwaarde: 4 (mag niet worden gewijzigd, tenzij je het echt wilt en weet wat je doet)

**Bolus snooze dia deler** De functie "bolus snooze" werkt na een maaltijd bolus. Na een maaltijd, gedurende de periode voor de DIA gedeeld door de "bolus snooze"-parameter, stelt AAPS geen lage tijdelijke basaalstand in. De standaardwaarde is 2. Dat betekent met een DIA van 5h, dat de "bolus snooze" dus 5uur : 2 = 2,5 uur zal duren.

Standaardwaarde: 2

* * *

## Maaltijd Assistent (MA)

### Maximale E/uur dat een tijdelijke basaalstand kan toedienen (OpenAPS "max-basal")

Deze veiligheidsinstelling voorkomt dat AndroidAPS ooit een gevaarlijk hoge basaalstand instelt, en beperkt de tijdelijke basaalstand tot xx E/uur. We raden je aan je verstand te gebruiken bij het invullen van deze waarde. Een goede aanbeveling is om de hoogste basaalstand van jouw profiel te vermenigvuldigen met 4, of ten minste met 3. Bijvoorbeeld, als de hoogste basaalstand in jouw profiel 1,0 E/uur is dan kun je dat vermenigvuldigen met 4. Je krijgt dan een waarde van 4 E/uur, dus stel je "4" in bij deze veiligheidsinstelling.

Je kunt niet elke waarde kiezen: om veiligheidsredenen is er een 'harde limiet', afhankelijk van de leeftijd van de patiënt. De 'harde limiet' voor max-IOB is lager bij MA dan bij SMB. Voor kinderen is deze waarde het laagste terwijl voor insulineresistentie volwassenen deze waarde het grootste is.

AndroidAPS gebruikt de volgende 'harde limieten':

* Kind: 2
* Tiener: 5
* Volwassene: 10
* Insuline-resistente volwassene: 12

### Max basaal IOB dat OpenAPS kan toedienen \[E\] (OpenAPS "max-iob")

Deze instelling beperkt het maximum van basaal IOB waar AndroidAPS nog steeds werkt. Als de IOB hoger is, wordt er geen extra basale insuline meer gegeven totdat de waarde van basaal IOB weer onder de limiet ligt.

De standaardinstelling is 2, je moet deze waarde in kleine stapjes ophogen om te zien wat de invloed is en welke waarde het beste bij jou past. Dat is voor iedereen anders en hangt ook af van jouw gemiddelde totale dagdosis (TDD). Om veiligheidsredenen is er ook hier een grens, die afhangt van de leeftijd van de patiënt. De 'harde limiet' voor max-IOB is lager bij MA dan bij SMB.

* Kind: 3
* Tiener: 5
* Volwassene: 7
* Insuline-resistente volwassene: 12

### Geavanceerde instellingen

**Gebruik altijd korte gemiddeld verschil ipv gewone verschil** Wanneer je deze functie inschakelt, dan gebruikt AndroidAPS het korte gemiddelde (= gemiddelde vd afgelopen 15 minuten), wat meestal het gemiddelde is van de afgelopen drie waardes. Dit helpt AndroidAPS om stabieler te werken met bloedglucose bronnen met veel ruis, zoals xDrip+ en Libre.

**Bolus snooze dia deler** De functie "bolus snooze" werkt na een maaltijd bolus. Na een maaltijd, gedurende de periode voor de DIA gedeeld door de "bolus snooze"-parameter, stelt AAPS geen lage tijdelijke basaalstand in. Dat betekent met een DIA van 5h, dat de "bolus snooze" dus 5uur : 2 = 2,5 uur zal duren.

Standaardwaarde: 2