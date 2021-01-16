# Gevoeligheids detectie (Autosens)

## Gevoeligheids-algoritme

Op dit moment zijn er 3 algoritmes voor gevoeligheidsdetectie:

* Gevoeligheid AAPS
* Gemiddelde gevoeligheid
* Gevoeligheid Oref1

### Gevoeligheid AAPS

De gevoeligheid wordt op dezelfde manier berekend als Oref1, maar hier kun je zelf kiezen hoeveel uren het algoritme terugkijkt. De minimale koolhydraten absorptie wordt berekend op basis van jouw max koolhydraten absorptie tijd uit je Instellingen.

### Gemiddelde gevoeligheid

De gevoeligheid wordt berekend als een gewogen gemiddelde van alle afwijkingen. Je kunt instellen hoelang wordt teruggekeken. Nieuwere afwijkingen tellen zwaarder mee. De minimale koolhydraten absorptie wordt berekend op basis van jouw max koolhydraten absorptie tijd uit je Instellingen. Dit algoritme is snelste in het volgen van wijzigingen aan jouw gevoeligheid.

### Gevoeligheid Oref1

Deze moet je kiezen wanneer je SMB met UAM gebruikt. De gevoeligheid wordt berekend op basis van gegevens van de afgelopen 8 uur, of van de laatste infuuswissel als die minder dan 8 uur geleden is. Koolhydraten (indien niet geabsorbeerd) worden afgekapt (dwz, op nul gezet) na de tijd die je hebt opgegeven in je Instellingen. Het Oref1 algoritme ondersteunt als enige UAM (onaangekondigde maaltijden, unannounced meals). Dit betekent dat alle periodes waarbij UAM zijn gedetecteerd, niet worden meegenomen in de berekening. Vandaar dat je voor dit gevoeligheids-algoritme moet kiezen als je SMB met UAM gebruikt! Voor meer informatie lees de [OpenAPS Oref1 documentatie](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html).

## Gelijktijdige koolhydraten

Er zit een aanzienlijk verschil tussen AAPS, Gemiddelde gevoeligheid en Oref1. Het Oref gevoeligheids-algoritme werkt met de aanname dat er slechts één maaltijd tegelijkertijd wordt opgenomen in je lichaam. Dit betekent dat een tweede maaltijd pas opgenomen begint te worden nadat de eerste maaltijd volledig is opgenomen. Bij AAPS en Gemiddelde gevoeligheid begint de opname meteen wanneer je een maaltijd invoert. Dit betekent dat, als er meer dan één maaltijd aan boord is dat de minimale koolhydraten absorptie wordt aangepast aan de grootte van de maaltijd en de max absorptie tijd. De minimale absorptie zal daarom hoger zijn in vergelijking met het Oref1 gevoeligheids-algoritme.