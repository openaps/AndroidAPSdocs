# Mogelijk toekomstige insulinepompen

Dit is een lijst van insulinepompen die in omloop zijn, met de status van hun ondersteuning in loopsystemen en de status in AAPS. Op het einde van deze pagina staat algemene info over welke software-mogelijkheden een pomp moet beschikken om überhaupt "loopbaar" te kunnen zijn.

    {contents} Inhoudsopgave
    :depth: 1
    :local: true

## Pompen die in AAPS worden geïntegreerd

**Binnenkort:** drivers voor deze pompen worden ontwikkeld en draaien al in testversies.

Omnipod 5 ([Homepage](https://www.omnipod.com/))

![Driver voor Omnipod 5 in ontwikkeling](../images/future-pumps/omnipod5-driver.png)

Tandem: t:Mobi ([Homepage](https://www.tandemdiabetes.com/))

![Driver voor Tandem t:Mobi in ontwikkeling](../images/future-pumps/tandem-mobi-driver.png)

## Pompen die loopbaar zijn

### Kaleido ([Homepage](https://www.hellokaleido.com/))

**Loopstatus:** De pomp is geschikt om mee te loopen, maar het protocol is op dit moment onbekend. De fabrikant heeft geen interesse in open source.

**Hardware-eisen voor AAPS:** Geen. Het lijkt erop dat hij Bluetooth gebruikt.

### Tandem: t:slim X3 ([Homepage](https://www.tandemdiabetes.com/about-us/pipeline))

**Loopstatus:** Mogelijk in de toekomst geschikt om mee te loopen. De hoop is dat de t:slim X3 volledige bediening vanaf een telefoon toestaat, wat ondersteuning in AAPS mogelijk maakt, maar de planning en de functies zijn nog onbekend.

**Hardware-eisen voor AAPS:** Geen. Naar verwachting heeft hij Bluetooth.

**Opmerking:** Nog niet uitgebracht. De t:slim X3 lijkt op de planning van Tandem steeds lager te komen dan de t:Mobi (ook een versie zonder slang) en Sigi (hun patchpomp).

### Twiist ([Homepage](https://www.twiist.com/))

**Loopstatus:** Geschikt om mee te loopen.

**Hardware-eisen voor AAPS:** Geen. Hij heeft Bluetooth.

### Willcare insulinepomp ([Homepage](http://shinmyungmedi.com/en/))

**Loopstatus:** Op dit moment niet geschikt om mee te loopen, maar hun medewerkers hebben contact met ons opgenomen en ze willen hun pomp loopbaar maken (op dit moment ontbreken volgens mij alleen de commando's om het profiel uit te lezen/in te stellen).

**Hardware-eisen voor AAPS:** Geen. Het lijkt erop dat hij Bluetooth gebruikt.

**Opmerking:** Aangezien het bedrijf is geïnteresseerd in integratie met AAPS, kunnen ze het wellicht zelf implementeren.

### Ypsopump ([Homepage](https://www.ypsomed.com/))

**Loopstatus:** Geschikt om mee te loopen. De community heeft het Bluetooth-protocol van de pomp ontcijferd (reverse-engineered), dus communicatie is in principe mogelijk.

**Hardware-eisen voor AAPS:** Geen. Hij heeft Bluetooth.

**Opmerking:** De Ypsopump beschermt zijn Bluetooth-communicatie met zware versleuteling van een derde partij. Dit is technisch lastig, en daardoor is een betrouwbare driver moeilijk te bouwen en te onderhouden. Er is nog geen AAPS-driver die klaar is voor dagelijks gebruik.

## Pompen die niet meer worden verkocht (fabrikanten zijn gestopt)

### Animas Vibe

### Animas Ping

### Cellnovo

### Accu-Chek Insight

**Opmerking:** Ondersteuning gestopt in maart 2025.

## Pompen die niet loopbaar zijn

### Medtronic Bluetooth

**Opmerking:** Medtronic heeft zich [teruggetrokken](https://www.tidepool.org/blog/tidepool-loop-partner-update-ace-pumps).

### Tandem: t:slim X2 ([Homepage](https://www.tandemdiabetes.com/))

**Opmerking:** Het Bluetooth-protocol van Tandem is ontcijferd, maar op de t:slim X2 kunnen alleen bolussen worden gegeven — de basale toediening kan niet worden bestuurd — dus de pomp kan niet veilig worden gebruikt om mee te loopen. Dit verandert waarschijnlijk niet, tenzij Tandem volledige bediening van de X2 vanaf een telefoon toestaat; dat komt eerder met de t:slim X3.

### Accu-Chek Solo

**Opmerking:** De community is er niet in geslaagd om met de Solo-pomp te communiceren.

## Eisen aan pompen die loopbaar zijn

**Randvoorwaarden**

- Pomp moet op één of andere manier op afstand bedienbaar zijn. (Bluetooth, radiofrequentie, etc)
- Communicatie-protocol is gehackt/gedocumenteerd/etc.

**Minimale vereisten**

- Heeft een mogelijkheid voor het instellen van Tijdelijke Basaalstanden
- De Pompstatus kan worden uitgelezen
- Heeft een mogelijkheid voor het annuleren van Tijdelijke Basaalstanden

**Voor oref1 (SMB) of bolussen:**

- Bolus kunnen instellen

**Fijn om te hebben**

- Annuleer Bolus
- Lees Basaalprofiel uit (is haast een vereiste)
- Stel Basaalprofiel in (leuk om te hebben)
- Lees geschiedenis uit 

**Overige (niet verplicht maar goed om te hebben)**

- Vertraagde bolus instellen
- Vertraagde bolus annuleren
- Lees geschiedenis uit
- TDD uitlezen

### Ondersteuning overige pompen

Als er andere pompen zijn waarvan je wilt weten wat de status is, neem dan contact op via discord.