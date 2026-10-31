# Overzicht van de onderdelen

**AAPS** is niet alleen een (zelfgebouwde) app; het is een van de onderdelen van je gesloten-loopsysteem. Voordat je onderdelen kiest, is het een goed idee om eerst de documentatie over de onderdelen te bekijken.

![Overzicht van de onderdelen](../images/modules.png)

```{admonition} IMPORTANT SAFETY NOTICE
:class: important

De veiligheidsfuncties van **AAPS** die in deze documentatie worden besproken, zijn gebaseerd op de veiligheidsfuncties van de hardware waarmee je je systeem bouwt. Voor het sluiten van een loop met automatische insulinedosering is het heel belangrijk dat je alleen een insulinepomp en CGM gebruikt die getest zijn, volledig werken en goedgekeurd zijn door de officiële instanties van je land. Hardware of software wijzigingen aan deze componenten kunnen voor onverwachte uitkomsten zorgen (denk aan het ongewenst afgeven van insuline), waardoor de gebruiker een aanzienlijk risico loopt. Als je kapotte, aangepaste of zelfgemaakte insulinepompen of CGM-ontvangers vindt of aangeboden krijgt, **gebruik deze dan niet** om een **AAPS**-systeem te maken.

Daarnaast is het belangrijk om alleen originele verbruiksartikelen te gebruiken, zoals infuussets, inschiethulpen en reservoirs die door de fabrikant zijn goedgekeurd voor gebruik met jouw pomp of CGM. Door het gebruik van niet-originele, niet-geteste verbruiksmaterialen kunnen CGM metingen onnauwkeurig worden en/of fouten optreden in de insulinedosering. Insuline is zeer gevaarlijk wanneer het verkeerd wordt gedoseerd - speel alstublieft niet met je leven door jouw hulpmiddelen aan te passen.

Tot slot een belangrijk punt: je mag géén SGLT-2-remmers (gliflozinen) gebruiken, omdat deze de bloedsuiker op een onberekenbare manier verlagen. Deze medicatie in combinatie met een systeem dat de basale insuline verlaagt om BG te verhogen is bijzonder gevaarlijk, omdat deze stijging in BG mogelijk niet zal gebeuren en daardoor een gevaarlijk gebrek aan insuline kan ontstaan. [Meer informatie hier](#PreparingForAaps-no-sglt-2-inhibitors).
```

## Benodigde onderdelen

### Goede persoonlijke doseringsinstellingen voor je diabetesbehandeling

Je hoeft dit niet te maken of te kopen, maar het is waarschijnlijk het meest onderschatte 'onderdeel' — en het is wel essentieel. Als je een algoritme laat helpen bij je diabetes, moet het de juiste instellingen kennen. Anders kan het ernstige fouten maken. Ook als je nog andere onderdelen mist, kun je je **Profiel** al samen met je diabetesteam controleren en aanpassen.

Het **Profiel** bevat:

- BR (basaalstanden): geeft insuline op de achtergrond;
- ISF (insulinegevoeligheidsfactor): hoeveel je bloedglucose daalt door 1 eenheid insuline;
- CR (koolhydraatratio): hoeveel gram koolhydraten door één eenheid insuline worden gedekt.

De meeste loopers maken gebruik van basaalstanden, ISF en KH ratios die zijn aangepast aan een variërende insulinegevoeligheid gedurende de dag (zgn. circadiaans ritme).

Naast je **Profiel** moet je ook je **insuline** instellen in **Beheren → Insuline instellingen**, ook de DIA (werkingsduur van insuline) — zie [Insuline instellingen](#Config-Builder-insulin-dia).

Meer informatie over je **Profiel** staat [op de aparte pagina](../SettingUpAaps/YourAapsProfile.md).

### Telefoon

Zie de aparte pagina [Telefoons](../Getting-Started/Phones.md).

### Insulinepomp

Zie de aparte pagina [Compatibele pompen](../Getting-Started/CompatiblePumps.md).

**Voor- en nadelen van sommige pompmodellen**

De Combo, de Insight en de oudere Medtronic pompen zijn solide pompen, en loopbaar. De Combo heeft het voordeel dat je uit veel meer soorten infuussets kunt kiezen, omdat hij een standaard Luer-Lock-aansluiting heeft. En de batterij is een standaard batterij die je bij ieder tankstation of supermarkt kunt kopen. Mocht het echt nodig zijn, kun je hem altijd nog stelen/lenen uit de afstandsbediening in een hotelkamer ;-).

De voordelen van de DanaR/RS en Dana-i versus de Combo als de gekozen pomp daarentegen zijn:

- De initiële koppeling is eenvoudiger met de Dana-i/RS. Maar dit doe je meestal maar één keer. Het maakt dus alleen uit als je een nieuwe functie met verschillende pompen wilt testen.
- Tot nu toe werkt de Combo door 'screen parsing': doorsturen wat er op het scherm staat. In het algemeen werkt dit prima, maar het is traag. Bij het loopen merk je dit vaak niet eens omdat alles op de achtergrond werkt. Toch moet je veel langer verbonden zijn, dus er is ook meer tijd waarin de Bluetooth-verbinding kan wegvallen. Dat is lastig als je bij het bolussen & koken van je telefoon wegloopt.
- De Combo trilt aan het einde van een TBR, de DanaR trilt (of piept) bij een SMB. 's Nachts gebruik je waarschijnlijk meer TBR's dan SMB's.  De Dana-i/RS kun je zo instellen dat de pomp niet piept of trilt.
- De Dana-i/RS leest de geschiedenis (met koolhydraten) in een paar seconden uit. Daardoor kun je makkelijk offline van telefoon wisselen en verder loopen zodra er een paar CGM-waarden binnen zijn.
- Alle pompen waarmee **AAPS** kan communiceren, zijn bij levering waterdicht. Alleen de Dana-pompen zijn ook "waterdicht volgens de garantie", door het afgesloten batterijvak en het afgesloten systeem voor het vullen van het reservoir.

### BG bron

Zie de aparte pagina [Compatibele CGM's](../Getting-Started/CompatiblesCgms.md).

### **AAPS**-.apk-bestand

Het belangrijkste onderdeel van het systeem. Om de app te installeren, moet je eerst zelf het apk-bestand bouwen. De instructies staan [hier](../SettingUpAaps/BuildingAaps.md).

### Rapportageserver

Een rapportageserver toont je glucose- en behandelgegevens en maakt rapporten voor een gedetailleerde analyse. Er zijn nu twee rapportageservers die je met AAPS kunt gebruiken: [Nightscout](#SettingUpTheReportingServer-nightscout) en [Tidepool](#SettingUpTheReportingServer-tidepool). Met beide kun je je diabetesgegevens over een langere tijd bekijken, en ze geven statistieken over de **tijd binnen bereik** (TIR) en andere waarden.

De rapportageserver staat los van de andere onderdelen. Als je geen rapportageserver wilt gebruiken: op de lange termijn is die niet verplicht om **AAPS** te gebruiken. Maar je moet er toch een instellen, omdat dit nodig is voor [**Doel 1**](#objectives-objective1).

Meer informatie over het instellen van je rapportageserver vind je [hier](../SettingUpAaps/SettingUpTheReportingServer.md).

## Optionele onderdelen

### Smartwatch

Je kunt elke smartwatch kiezen met **Wear OS 3** of nieuwer. Zie [Smartwatches en AAPS](../Getting-Started/Watches.md) voor meer informatie.

Gebruikers maken een [lijst van geteste telefoons en horloges](#Phones-list-of-tested-phones). Er zijn verschillende watchfaces voor **AAPS**. Je vindt ze [hier](../WearOS/WearOsSmartwatch.md).

### xDrip

Ook als je de xDrip-app niet als **BG bron** nodig hebt, kun je hem toch gebruiken, bijvoorbeeld voor alarmen of een andere weergave van je bloedglucose. Je kunt zoveel alarmen instellen als je wilt, kiezen wanneer een alarm actief moet zijn, kiezen of het de stille modus mag negeren, enz. Wat informatie over xDrip vind je [hier](../CompatibleCgms/xDrip.md). Let op: de documentatie van deze app is niet altijd actueel, omdat de app snel verandert.

## Wat te doen tijdens het wachten op onderdelen

Het duurt soms even voordat je alle onderdelen hebt om de loop te sluiten. Maar geen zorgen, er zijn een heleboel dingen die je kunt doen tijdens het wachten. Het is **nodig** om je basaalstanden (BR), koolhydraatratio (IC), insulinegevoeligheidsfactoren (ISF) enz. te controleren en (waar nodig) aan te passen. En misschien is de open loop een goede manier om het systeem te testen en **AAPS** te leren kennen. In deze modus geeft **AAPS** behandeladviezen die je zelf met de hand uitvoert.

Je kunt hier verder lezen in de documentatie, online of offline contact zoeken met andere loopers, documentatie [lezen](../UsefulLinks/BackgroundReading.md) of lezen wat andere loopers schrijven (wees wel voorzichtig: niet alles klopt of is goed voor jou om na te doen).

**Klaar?** Als je alle onderdelen voor **AAPS** hebt (gefeliciteerd!), of in elk geval genoeg om in open loop te starten, lees dan eerst de [beschrijving van de doelen](../SettingUpAaps/CompletingTheObjectives.md) voor elk nieuw doel, en stel je hardware in.
