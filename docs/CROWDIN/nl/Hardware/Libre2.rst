Freestyle Libre 2
**************************************************

De Freestyle Libre 2 kan alarmen geven bij hoge of lage glucosewaardes. De Libre2 sensor stuurt elke minuut de huidige glucosewaarde naar een ontvanger (dit kan de Libre ontvanger zijn of een smartphone). De ontvanger geeft een alarm indien nodig. Met een zelf aangepaste LibreLink app en de xDrip+ app kun je jouw glucosewaardes continu ontvangen en weergeven op een smartphone. 

De sensor kan worden gekalibreerd dmv een verschuiving van -40 mg/dl tot +20 mg/dl (-2,2 mmol/l tot +1,1 mmol/l) om te corrigeren voor verschillen tussen vingerpietmetingen en sensorwaardes.

BG waardes kunnen ook worden uitgelezen dmv een Bluetooth apparaatje (Miaomiao, Bubble etc) zoals met de Libre1.

Belangrijke opmerking: Onderstaande werkt niet met de Amerikaanse versie van de Freestyle 2 sensor! De Amerikaanse versie zal alleen verbinding maken met een ontvanger, niet met een telefoon.

Stap 1: Bouw je eigen gepatchte LibreLink-App
==================================================

Om juridische redenen moet je het zogenaamde patchen (aanpassen) van de app zelf doen. Gebruik een zoekmachine om links naar de instructies te vinden. Er zijn twee veelvoorkomende varianten van deze instructies: De ene variant levert een gepatchte app op die elk internet verkeer blokkeert om tracking te voorkomen (deze wordt aangeraden om te gebruiken). De andere variant ondersteunt LibreView, om gegevens te delen met jouw arts (deze stuurt jouw gegevens door over het internet, wordt niet aangeraden om te gebruiken).

De gepatchte app moet je installeren in plaats van de originele Libre app. De eerstvolgende sensor die met de gepatchte app wordt gestart, zal jouw BG-waarden via Bluetooth doorgeven aan de xDrip+ app die ook op jouw telefoon draait.

Belangrijk: Om problemen te voorkomen kan het helpen om eerst de originele app te installeren en weer te verwijderen. Gebruik uiteraard een smartphone die geschikt is voor NFC. NFC moet aan staan.   Installeer daarna pas de gepatchte app. 

De gepatchte app kun je herkennen aan een melding over toestemming om als voorgrond service actief te zijn. Doordat de gepatchte app toestemming heeft om op de voorgrond te draaien, zal de verbinding stabieler zijn dan bij de originele app, die dit niet heeft.

.. image:: ../images/Libre2_ForegroundServiceNotification.png
  :alt: LibreLink Voorgrond Service

Je zou een gepatchte app ook kunnen herkennen aan het Linux penguin logo in het menu in de rechterbovenhoek: klik op de drie stippen-> Info. Of aan het lettertype van de gepatchte app. Deze criteria zijn optioneel, afhankelijk van de door jou gevolgde instructies voor het patchen van de app.

.. image:: ../images/LibreLinkPatchedCheck.png
  :alt: LibreLink Lettertype Check

Zorg ervoor dat NFC geactiveerd is, de geheugen- en locatiemachtiging zijn ingeschakeld voor de gepatchte app, automatische tijd en tijdzone zijn ingeschakeld en ten minste één alarm in de gepatchte app is ingesteld. 

Start nu de Libre2 sensor met de gepatchte app door simpelweg de sensor te scannen. Zorg ervoor dat je alle instellingen als volgt hebt ingesteld.

Verplichte instellingen voor een succesvolle sensor start: 

* NFC ingeschakeld en Bluetooth ingeschakeld
* geheugen- en locatiemachtiging ingeschakeld 
* locatieservice ingeschakeld
* automatische tijd en tijdzone ingesteld
* stel ten minste één alarm in de gepatchte app in

Houd er rekening mee dat de locatieservice een telefooninstelling is. Dit is niet de app locatie toestemming; de app moet je daarnaast ook nog locatie toestemming verlenen!

.. image:: ../images/Libre2_AppPermissionsAndLocation.png
  :alt: LibreLink toestemmingen geheugen & locatie
  
  
.. image:: ../images/Libre2_DateTimeAlarms.png
  :alt: automatische tijd en tijdzone + alarminstellingen  

De sensor onthoudt het apparaat waarmee hij gestart is. Alleen dit apparaat kan in de toekomst alarmen ontvangen.

De eerste verbinding die je maakt met de sensor is van cruciaal belang. De LibreLink app probeert elke 30 seconden een draadloze verbinding met de sensor tot stand te brengen. Als een of meer verplichte instellingen ontbreken, moeten ze worden aangepast. Je hebt geen tijdslimiet om dat te doen. De sensor probeert constant de verbinding tot stand te brengen. Zelfs al duurt het een paar uur. Probeer dus geduldig verschillende instellingen uit, of vraag om hulp, voordat je ook maar denkt aan opgeven en een nieuwe sensor schieten.

Zolang je een rood uitroepteken ziet ("!") in de linkerbovenhoek van het LibreLink start scherm is er geen verbinding, of er is een instelling die de LibreLink app blokkeert om alarmen te kunnen geven. Controleer of het geluid is ingeschakeld en alle soorten meldingen voor het blokkeren van de app zijn uitgeschakeld. Als het uitroepteken weg is, zou de verbinding tot stand moeten komen en dan zullen er glucosewaarden naar de smartphone worden gestuurd. Dat zou na maximaal 5 minuten moeten gebeuren.

.. image:: ../images/Libre2_ExclamationMark.png
  :alt: LibreLink geen verbinding
  
Als het uitroepteken blijft bestaan of als je een foutmelding krijgt, kan dit verschillende redenen hebben:

- Android locatieservice staat uit - schakel deze in bij de telefooninstellingen
- Automatische tijd en tijdzone niet ingesteld - verander de tijd instellingen én tijdzone instellingen naar "Automatisch"
- Activeer alarmen - tenminste één van de drie alarmen moet geactiveerd zijn in LibreLink
- Bluetooth is uitgeschakeld - schakel het in
- Geluid wordt geblokkeerd
- App-meldingen worden geblokkeerd
- Inactieve scherm notificaties worden geblokkeerd 
- Je hebt een defecte Libre 2 sensor, van een productie LOT-nummer met 'K' gevolgd door 8 cijfers. Je vindt dit lotnummer op de gele verpakking. Deze sensoren moeten worden vervangen omdat de Bluetooth niet functioneert.

Het opnieuw starten van de telefoon kan helpen, het kan nodig zijn om dit meerdere keren te doen. Zodra de verbinding tot stand is gebracht, verdwijnt het rode uitroepteken en heb je de belangrijkste horde overwonnen. Het kan gebeuren dat, afhankelijk van de systeeminstellingen, het uitroepteken blijft staan maar je krijgt nog wel waardes door. In beide gevallen is dat prima. Sensor en telefoon zijn nu verbonden, elke minuut wordt een bloedsuikerwaarde doorgegeven.

.. image:: ../images/Libre2_Connected.png
  :alt: LibreLink verbinding gemaakt
  
In zeldzame gevallen kan het helpen om de bluetooth cache leeg te maken en/of alle netwerkverbindingen te resetten via het telefoonmenu. Dit verwijdert alle gekoppelde bluetooth-apparaten, dit kan helpen bij het opzetten van een goede bluetooth-verbinding. Je kunt dit met een gerust hart doen, want als de sensor eenmaal gestart is, wordt hij onthouden door de gepatchte LibreLink app. Je hoeft hier niet extra's voor te doen. Wacht simpelweg tot de gepatchte app verbinding heeft gemaakt met de sensor.

Na een succesvolle verbinding kun je de telefooninstellingen indien nodig veranderen. Dit wordt afgeraden, maar je bespaart er wel energie mee. Je kunt eventueel de locatieservice uitschakelen, volume op nul zetten en alarmen uitschakelen. De bloedsuikerwaardes worden sowieso doorgegeven.

Bij het starten van de volgende sensor moet je wél alle instellingen opnieuw goed zetten!

Opmerking: De gepatchte app heeft de verplichte instellingen nodig gedurende het uur na het opwarmen om een verbinding mogelijk te maken. Voor de rest van de 14 dagen looptijd zijn ze niet nodig. In de meeste gevallen als je problemen hebt met het starten van een sensor is de locatieservice uitgeschakeld. Voor Android moet locatie aan staan, om een goede bluetooth(!) verbinding te maken. Dat klinkt misschien wat onlogisch maar dat is hoe Android in elkaar zit. Een gedetailleerde uitleg gaan we hier niet geven, dat staat in de Android-documentatie van Google zelf.

Tijdens de 14 dagen kun je gebruik maken van één of meer NFC geschikte smartphones (niet de Libre ontvanger!) met de originele LibreLink app voor het scannen via NFC. Er is geen tijdsbeperking om daarmee te beginnen. Je kunt bijvoorbeeld op dag 5 een parallelle telefoon gebruiken. De parallelle telefoon(s) kunnen de glucosewaardes uploaden naar de Abbott Cloud (LibreView). LibreView kan rapporten genereren voor jouw diabetesteam. Er zijn mensen die dit absoluut nodig hebben (voor de verzekering of welke gekke regels dan ook). Maar als je zonder kunt, gebruik dan gewoon Nightscout voor rapporten. 

Houd er rekening mee dat de originele gepatchte app **geen verbinding heeft met het internet** om tracking te voorkomen.

Er is echter een variant van de gepatchte app die LibreView ondersteunt, deze app heeft wel internettoegang. Houd er rekening mee dat je gegevens dan naar de cloud worden gestuurd. Je kunt dan gebruik maken van alle rapportages die de originele app heeft. Met die variant is het ook mogelijk om de alarmen van een lopende sensor te verplaatsen naar een ander apparaat dat de sensor niet heeft gestart. Google in diabetes gerelateerde Duitse forums hoe dit kan worden gedaan.


Stap 2: Installeer en configureer xDrip+ app
==================================================

De glucosewaarden komen op de smartphone binnen op de xDrip+ app. 

* Als je dit nog niet al had gedaan, download dan de app en installeer een van de nieuwste 'nightly builds' vanaf `deze locatie <https://github.com/NightscoutFoundation/xDrip/releases>`_.
* In xDrip+ selecteer "Libre2 (patched App)" als gegevensbron
* Indien nodig typ dan "BgReading:d,xdrip libre_receiver:v" onder Less Common Settings->Extra Logging Settings->Extra tags for logging (in het Nederlands: Minder Algemene Instellingen-> Extra logboekinstellingen-> Extra tags voor loggen). Dit logt extra foutmeldingen voor het oplossen van problemen, de meesten van ons zullen dit niet nodig hebben.
* In xdrip ga naar Settings > Interapp Compatibility > Broadcast Data Locally en selecteer ON. Deze instelling zorgt ervoor dat de xDrip app op jouw telefoon jouw waardes direct naar de AndroidAPS app (ook op jouw telefoon) doorstuurt en je dus geen internetverbinding nodig hebt.
* In xdrip ga naar Instellingen > Interapp Settings > Accept Treatments selecteer OFF.
* Om te zorgen dat AAPS de glucosewaardes ontvangt van xDrip+ moet je onder Settings > Interapp Settings > Identify Receiver '"info.nightscout.androidaps" < ../Configuration/xdrip.html#identificeer-ontvanger-identify-receiver>`_ invullen.
* Als je AndroidAPS wilt gebruiken om te kalibreren ga dan in xdrip naar Instellingen > Interapp settings > Accept Calibrations en selecteer ON.  Je kunt ook de opties aanpassen aan jouw behoefte in Instellingen > Minder vaak voorkomende instellingen > Advanced Calibration Settings.

.. image:: ../images/Libre2_Tags.png
  :alt: xDrip+ LibreLink logging

Stap 3: Start sensor
==================================================

In xDrip + start je de sensor met "Start Sensor" en "not today". 

Dit zorgt ervoor dat de Libre2 sensor niet opnieuw een "start" commando oid zal ontvangen. Dit is gewoon om aan te geven aan xDrip+ dat een nieuwe sensor de glucosewaardes aanlevert. Indien beschikbaar, voer twee glucosewaardes in (gemeten met vingerprik, met stabiele bloedsuiker, handjes gewassen etc) voor de initiële kalibratie. De bloedglucose waarden moeten nu elke 5 minuten in xDrip+ binnenkomen. Gemiste waarden, bijv. omdat je te ver weg van je telefoon was, zullen niet achteraf worden aangevuld. Eens gemist, blijft gemist.

Na een sensorwissel zal xDrip+ automatisch de nieuwe sensor detecteren en alle kalibratiegegevens verwijderen. Je kunt je bloedglucose meten dmv vingerprik na activering en een nieuwe kalibratie invoeren (zie hiervoor).

Stap 4: AndroidAPS configureren (alleen voor loopen)
==================================================
* In AndroidAPS ga naar Configurator > BG Bron en vink 'xDrip+' aan. 
* Als AAPS geen BG-waarden ontvangt wanneer de telefoon in vliegtuigmodus staat, gebruik dan 'Identify receiver' (Identificeer ontvanger) zoals beschreven op de `xDrip+ instellingen pagina <../Configuration/xdrip.html#identificeer-ontvanger-identify-receiver>`_.

Tot nu toe kun je met Libre 2 als BG bron 'Activeer SMB altijd' en 'Activeer SMB na koolhydraten' in het SMB algoritme niet aanzetten. De BG waarden van Libre 2 zijn niet betrouwbaar genoeg om die functies veilig te gebruiken (alle overige SMB functies zijn overigens wél gewoon te gebruiken). Zie `Filteren van glucosewaardes <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_ voor meer details.

Problemen oplossen en andere tips
==================================================

Verbinding
--------------------------------------------------
De verbindig is buitengewoon goed. Met uitzondering van Huawei mobiele telefoons, lijken alle huidige smartphones goed te werken. De snelheid waarmee de telefoon weer verbinding maakt in geval van verbindingsverlies is fenomenaal. De verbinding kan worden verbroken als de mobiele telefoon in een tegenoverliggende (broek)zak tov de sensor zit, of als je buiten bent. Als ik aan het tuinieren ben, draag ik mijn telefoon aan de zelfde kant van mijn lichaam als waar de sensor zit. Binnenshuis, waar Bluetooth kan weerkaatsen, zou je hiermee geen problemen moeten krijgen. Als je problemen hebt met de verbinding, test dan een andere telefoon. Het kan ook helpen om bij het plaatsen van de sensor te zorgen dat de interne Bluetooth-antenne naar beneden wijst. De spleet op de applicator moet dan naar beneden wijzen bij het plaatsen van de sensor.

Waardes vloeiend maken & ruwe gegevens
--------------------------------------------------
Technisch gezien wordt de huidige glucosewaarde elke minuut doorgegeven aan xDrip+. Een gewogen gemiddelde filter berekent een vloeiende waarde over de laatste 25 minuten. Dit is verplicht om te loopen. De grafieken zien er vloeiend uit en de loop-resultaten zijn goed. De ruwe gegevens waarop de alarmen gebaseerd zijn schommelen iets meer, maar komen overeen met de waardes die de Libre ontvanger ook weergeeft. Als aanvulling kunnen de ruwe gegevens worden weergegeven in de xDrip+ grafiek om op snelle veranderingen in de tijd te kunnen reageren. Ga naar de Less Common Settings > Advanced Settings for Libre2, en schakel daar "Show Raw values" en "show Sensors Infos" in. De ruwe waarden worden weergegeven als kleine witte stippen in de grafiek, en extra sensorinformatie is beschikbaar in het systeemmenu.

De ruwe waarden zijn zeer nuttig wanneer de glucosewaarde snel verandert. Zelfs als de witte stippen wat heen-en-weer lijken te springen, dan zou je een stijgende/dalende trend veel beter kunnen ontdekken dan wanneer je alleen naar de vloeiende lijn kijkt om beslissingen te maken.

.. image:: ../images/Libre2_RawValues.png
  :alt: xDrip+ geavanceerde instellingen Libre 2 & ruwe gegevens

Sensor looptijd
--------------------------------------------------
De sensor looptijd is gesteld op 14 dagen. De 12 uur extra van Libre1 bestaat niet meer. xDrip+ toont extra sensorinformatie nadat je Advanced Settings for Libre2 > "show Sensors Infos" hebt ingeschakeld in het systeemmenu, zoals de starttijd. De resterende sensortijd kun je ook zien in de gepatchte LibreLink app. In het hoofdscherm worden ze weergegeven als resterende dagen, of in het menu onder de drie puntjes in de rechterbovenhoek worden ze weergegeven als de sensor start tijd via -> Help-> Event log bij "New sensor found".

.. image:: ../images/Libre2_Starttime.png
  :alt: Libre 2 begintijd

Sensor vervangen
--------------------------------------------------
De sensor schiet je in op het moment dat het tijd is om hem te vervangen, doe dit kort voordat je hem activeert. Zodra xDrip + geen gegevens meer ontvangt van de oude sensor, start je de nieuwe sensor met de gepatchte app. Na één uur wachttijd zullen er nieuwe waardes binnenkomen in xDrip+. 

Zo niet, loop dan de telefooninstellingen / instellingen in de gepatchte app eens na (zie de opsomming eerder op deze pagina) en kijk of de verbinding tot stand komt. Er is geen tijdsbeperking voor het maken van de verbinding. Je hebt alle tijd om het lijstje met instellingen nog een tweede (of derde) keer na te lopen. Probeer rustig verschillende combinaties uit en trek niet meteen je sensor eraf als het niet lukt. De sensor probeert continu om een verbinding tot stand te brengen,  dus maak je geen zorgen als het niet in één (of meerdere) pogingen lukt. Waarschijnlijk had je onbedoeld een instelling veranderd, die je nu moet zien te vinden en weer goed moet zetten. 

Nadat je de sensor succesvol aan de gepatchte app hebt verbonden, ga je naar xDrip+ en selecteer "Sensor Stop" en "Alleen kalibratie verwijderen". Hiermee laat je aan xDrip+ weten dat er een nieuwe sensor glucosewaardes gaat doorgeven. xDrip+ weet nu dat de oude kalibraties niet meer geldig zijn en zal ze verwijderen. Tijdens deze stap worden alleen de kalibraties 'schoongeveegd' in xDrip+, er vindt geen enkele communicatie plaats tussen de Libre2 sensor en xDrip+. Het is niet nodig om de sensor te starten in xDrip+.

.. image:: ../images/Libre2_GapNewSensor.png
  :alt: xDrip+ missing data when changing Libre 2 sensor

Kalibratie
--------------------------------------------------
Je kan de Libre2 kalibreren dmv een verschuiving van -40 mg/dl tot +20 mg/dL [-2,2 mmol/l tot +1,1 mmol/l]. Alleen de plaats waar de kalibratiegrafiek de y-as raakt (de intercept) verandert hiermee. De helling is niet variabel, omdat de Libre2 veel nauwkeuriger is in vergelijking met de Libe1. Controleer kort na het in gebruik nemen van een nieuwe sensor of hij nauwkeurig is dmv een vingerprik (bij stabiele bloedsuiker, handjes gewassen etc). Het is bekend dat er grote verschillen kunnen zijn tussen de sensorwaardes en een vingerprik. Kalibreer voor de zekerheid elke 24 tot 48 uur. De waarden zijn accuraat totaan het einde van de sensorlooptijd en zijn niet zo 'springerig' als de Libre1. Maar, als de sensor er compleet naast zit wanneer je met de vingerprik controleert, dan functioneert hij niet meer. Dit zal zich niet meer herstellen; je moet zo'n sensor dan ook meteen vervangen.

Plausibiliteitscheck
--------------------------------------------------
Een Libre2 sensor heeft een ingebouwde check die kijkt hoe geloofwaardig de waarde is die hij meet. Die check is een veiligheidsmechanisme, om te voorkomen dat hij onbetrouwbare sensorwaardes zou weergeven. Zodra de sensor op de arm beweegt of een beetje wordt opgetild, kunnen de waardes gaan fluctueren. De Libre2-sensor zal dan geen waardes meer doorgeven. En als je op zo'n moment zou scannen met de app, dan vinden er nog wat extra veiligheidschecks plaats en kan het gebeuren dat de app de sensor deactiveert (ookal is de sensor verder prima). Deze veiligheidschecks zijn helaas erg strak afgesteld, waardoor een sensor er helemaal mee stopt als je hem scant vlak nadat hij een beetje heeft bewogen op je arm. Als je dit wilt voorkomen, scan de sensor dan vooral niet met de app!

Wisselen van tijdzone
--------------------------------------------------
Wanneer je reist tussen verschillende `tijdzones <../Usage/Timezone-traveling.html>`_ zijn er twee strategieën die je kunt volgen: 

  

1. laat de tijd in je telefoon ongewijzigd (telefoon in vliegtuigmodus) en doe een Profielwissel met tijdsverschuiving of 
2. verwijder de pompgeschiedenis en verander de tijd van je telefoon naar de lokale tijd. 

Methode 1. werkt prima, mits je geen nieuwe Libre2 sensor hoeft te plaatsen tijdens je verblijf in de andere tijdzone. Bij twijfel, kies je voor methode 2, vooral als de reis langer duurt. Wanneer je een nieuwe sensor plaatst moet jouw telefoon op automatische tijdzone zijn ingesteld, dus methode 1. is dan geen optie. Bepaal dus van tevoren welke methode voor jouw reis het beste is, anders kun je in problemen komen.

Ervaringen
--------------------------------------------------
Van alle beschikbare glucosesensoren is de Libre2 een van de kleinste. Het is een alles-in-1 sensor, zonder losse zender en hij geeft meestal zeer nauwkeurige waardes zonder schommelingen. Tijdens de eerste 12 uur heb je te maken met afwijkingen van maximaal 30 mg/dl (1,7 mmol/l), daarna zijn de afwijkingen meestal maximaal 10 mg/dl (0,6 mmol/l). Vaak geeft hij de beste resultaten op de achterkant van de bovenarm, andere plekken kun je proberen maar hou de betrouwbaarheid dan in de gaten. Het lijkt bij de Libre2 niet nodig te zijn om een nieuwe sensor een dag eerder al te plaatsen (soms doen mensen dat voor meer betrouwbare waardes op de eerste dag). Eerder plaatsen lijkt het interne stabiliserings-algoritme te verstoren.

Er lijken af en toe slechte sensoren te zijn, die heel afwijkende metingen geven tov een vingerprik. Dan functioneert de sensor niet goed en dit herstelt zich niet meer. Vervang zo'n sensor onmiddelijk.

Als de sensor een beetje beweegt of wordt opgetild van de huid dan kan dit slechte waardes opleveren. Wanneer het sensorfilament door zo'n beweging permanent een beetje uit het weefsel is geraakt, meet hij afwijkende waardes. Meestal zie je dan dat jouw glucosegrafiek een sprong maakt in xDrip+. Of je meet een flink verschil tov een vingerprik. Vervang de sensor dan onmiddellijk! Hij geeft onjuiste waardes weer.

Libre2 met Bluetooth apparaatje en OOP
==================================================

Als je de Libre2 gebruikt met een van de laatste xDrip+ 'nightly build' versies en met de Libre2 OOP app, dan kun je ook een Bluetooth apparaatje (zoals Miaomiao, Bubble) gebruiken. Kijk op de Miaomiao website voor meer informatie. Dit werkt ook met een Bubble en in de toekomst met andere Bluetooth apparaatjes. De Blucon zou moeten werken, maar is nog niet getest

De Bluetooth apparaatjes die met Libre1 werken, kunnen niet zonder meer worden gebruikt met Libre2 OOP. Je hebt een firmware-upgrade op je huidige apparaatje, of een heel nieuw apparaatje nodig om ze te laten functioneren. MM1 met de nieuwste firmware is (op moment van schrijven) helaas nog niet bruikbaar. Er wordt gewerkt aan een oplossing.

De Libre2 OOP geeft exact dezelfde BG waardes als je zou krijgen wanneer je scant met de Libre reader of wanneer je scant met de originele LibreLink app. AAPS met Libre2 gebruikt een 25 minuten gewogen gemiddelde om sprongen in de binnenkomende glucosewaardes te vermijden. OOP genereert elke 5 minuten een waarde, met het gemiddelde van de laatste 5 minuten. Daarom leveren de waardes van OOP een minder vloeiende grafiek op, maar de waardes komen wel exact overeen met de waardes van de Libre reader, en de waardes zullen sneller een verandering in de "echte" BG waarde volgen. Als je met OOP probeert te loopen, zet dan alle functies voor ruisonderdrukking / het krijgen van een vloeiendere lijn (smoothing) aan in xDrip+.

De Droplet-zender werkt ook met Libre2 maar heeft daarvoor een continue internetverbinding nodig. Raadpleeg Facebook of een zoekmachine voor meer details over de Droplet. De MM2 met de Tomato app lijkt ook een internetservice te gebruiken. Voor deze twee specifieke Bluetooth apparaatjes moet je dus een betrouwbare internetverbinding hebben om je BG continu te kunnen uitlezen.

De gepatchte LibreLink app is meestal de handigste optie, toch kunnen er redenen zijn om een Bluetooth apparaatje te gebruiken:

* De BG waardes zijn identiek aan de waardes van de Libre reader / officiële Libre app.
* De Libre2 sensor kan 14,5 dagen gebruikt worden, net als de Libre1. 
* Als je buiten bereik van je telefoon bent geweest, worden gemiste waardes van max 8 uur geleden alsnog aangevuld (backfill).
* Je ontvangt BG waardes gedurende de opstarttijd van de sensor (duurt 1 uur).

Opmerking: een Bluetooth apparaatje kan naast de gepatchte LibreLink-app worden gebruikt. Het verstoort de werking van de app niet.

Opmerking #2: het OOP-algoritme kan nog niet worden gekalibreerd. Daar zal in de toekomst verandering in komen.
