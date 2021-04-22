Freestyle Libre 2
**************************************************

De Freestyle Libre 2 kan alarmen geven bij hoge of lage glucosewaardes. De Libre2 sensor stuurt elke minuut de huidige glucosewaarde naar een ontvanger (dit kan de Libre ontvanger zijn of een smartphone). De ontvanger geeft een alarm indien nodig. Met een zelf aangepaste LibreLink app en de xDrip+ app kun je jouw glucosewaardes continu ontvangen en weergeven op een smartphone. 

De sensor kan worden gekalibreerd in een bereik van -40 mg/dl tot +20 mg/dl (-2,2 mmol/l tot +1,1 mmol/l) om te corrigeren voor verschillen tussen vingerpietmetingen en sensorwaardes.

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
* to enable AAPS to receive blood sugar levels (version 2.5.x and later) from xDrip+ please set `Settings > Interapp Settings > Identify Receiver "info.nightscout.androidaps" <../Configuration/xdrip.html#identify-receiver>`_
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
A sensor exchange takes place on-the-fly: Set new sensor shortly before activation. As soon as xDrip+ receives no more data from the old sensor, start the new sensor with the patched app. After one hour new values should appear automatically in xDrip+. 

If not, please check the phone settings and proceed as with the first start. You have no time limit. Try to find the correct settings. No need to immediately replace the sensor before you tried different combinations. The sensors are robust and try permanently to establish a connection. Please take your time. In most cases you accidentally changed one setting which causes now problems. 

Once successful please select "Sensor Stop" and "Delete calibration only" in xDrip. This indicates for xDrip+ that a new sensor is releasing blood sugar levels and the old calibrations are no longer valid and therefore have to be deleted. No real interaction is done with the Libre2 sensor here! You do not need to start the sensor in xDrip+.

.. image:: ../images/Libre2_GapNewSensor.png
  :alt: xDrip+ missing data when changing Libre 2 sensor

Kalibratie
--------------------------------------------------
You can calibrate the Libre2 with an offset of -40 mg/dl to +20 mg/dL [-2,2 mmol/l to +1,1 mmol/l] (intercept). The slope isn't changeable as the Libre2 is much more accurate compared to the Libe1. Please check by fingerpricking early after setting a new sensor. It is known that there can arise big differences to the blood measurements. To be on the safe side, calibrate every 24 - 48 hours. The values are accurate up to the end of the sensor and do not jitter as with the Libre1. However, if the sensor is completely off, this will not change. The sensor should then be replaced immediately.

Plausibility checks
--------------------------------------------------
The Libre2 sensors contain plausibility checks to detect bad sensor values. As soon as the sensor moves on the arm or is lifted slightly, the values may start to fluctuate. The Libre2 sensor will then shut down for safety reasons. Unfortunately, when scanning with the App, additional checks are made. The app can deactivate the sensor even though the sensor is OK. Currently the internal test is too strict. I have completely stopped scanning and haven't had a failure since then.

Time zone travelling
--------------------------------------------------
In other `time zones <../Usage/Timezone-traveling.html>`_ there are two strategies for looping: 

Either 

1. leave the smartphone time unchanged and shift the basal profile (smartphone in flight mode) or 
2. delete the pump history and change the smartphone time to local time. 

Method 1. is great as long as you don't have to set a new Libre2 sensor on-site. If in doubt, choose method 2., especially if the trip takes longer. If you set a new sensor, the automatic time zone must be set, so method 1. would be disturbed. Please check before, if you are somewhere else, you can run otherwise fast into problems.

Experiences
--------------------------------------------------
Altogether it is one of the smallest CGM systems on the market. Small, no transmitter necessary and mostly very accurate values without fluctuations. After approx. 12 hours running-in phase with deviations of up to 30 mg/dl (1,7 mmol/l)the deviations are typical smaller than 10 mg/dl (0,6 mmol/l). Best results at the rear orbital arm, other setting points with caution! No need to set a new sensor one day ahead for soaking. That would disturb the internal leveling mechanism.

There seem to be bad sensors from time to time, which are far away from the blood values. It stays that way. These should be immediately replaced.

If the sensor moved a little bit on the skin or is lifted somehow this can cause bad results. The filament which sits in the tissue is a little bit pulled out of the tissue and will measure different results then. Mostly probably you will see jumping values in xDrip+. Or the difference to the bloody values change. Please replace the sensor immediately! The results are inaccurate now.

Using bluetooth transmitter and OOP
==================================================

Bluetooth transmitter can be used with the Libre2 with the latest xDrip+ nightlys and the Libre2 OOP app. You can receive blood sugar readings every 5 minutes as well as with the Libre1. Please refer to the miaomiao website to find a description. This will also work with the Bubble device and in the future with other transmitter devices. The blucon should work but has not been tested yet.

Old Libre1 transmitter devices cannot be used with the Libre2 OOP. They need to be replaced with a newer version or have a firmware upgrade for proper operation. MM1 with newest firmware is unfortunately not working yet - searching for root cause is currently ongoing.

The Libre2 OOP is creating the same BG readings as with the original reader or the LibreLink app via NFC scan. AAPS with Libre2 do a 25 minutes smoothing to avoid certain jumps. OOP generates readings every 5 minutes with the average of the last 5 minutes. Therefore the BG readings are not that smooth but match the original reader device and faster follow the "real" BG readings. If you try to loop with OOP please enable all smoothing settings in xDrip+.

The Droplet transmitter is working with Libre2 also but uses an internet service instead. Please refer to FB or a search engine to get further information. The MM2 with the tomato app also seems to use an internet service. For both devices you have to take care to have a proper internet connection to get your BG readings.

Even if the patched LibreLink app approach is smart there may be some reasons to use a bluetooth transmitter:

* the BG readings are identical to the reader results
* the Libre2 sensor can be used 14.5 days as with the Libre1 before 
* 8 hours Backfilling is fully supported.
* get BG readings during the one hour startup time of a new sensor

Remark: The transmitter can be used in parallel to the LibreLink app. It doesn't disturb the patched LibreLink app operation.

Remark #2: The OOP algorithm cannot be calibrated yet. This will be changed in the future.
