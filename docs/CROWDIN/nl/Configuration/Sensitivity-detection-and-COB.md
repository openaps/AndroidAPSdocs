# Gevoeligheids detectie (Autosens)

## Gevoeligheids-algoritme

Op dit moment zijn er 4 algoritmes voor gevoeligheidsdetectie:

* Gevoeligheid Oref0
* Gevoeligheid AAPS
* Gemiddelde gevoeligheid
* Gevoeligheid Oref1

### Gevoeligheid Oref0

De gevoeligheid wordt berekend op basis van gegevens van de afgelopen 24 uur en koolhydraten (indien niet geabsorbeerd) worden hiervan afgehaald, na de duur die is opgegeven in je Instellingen. Het algoritme is vergelijkbaar met OpenAPS Oref0, zoals beschreven in [de OpenAPS Oref0 documentatie](https://openaps.readthedocs.io/en/2017-05-21/docs/walkthrough/phase-4/advanced-features.html).

### Gevoeligheid AAPS

De gevoeligheid wordt op dezelfde manier berekend als Oref0, maar hier kun je zelf kiezen hoeveel uren het algoritme terugkijkt. De minimale koolhydraten absorptie wordt berekend op basis van jouw max koolhydraten absorptie tijd uit je Instellingen.

### Gemiddelde gevoeligheid

De gevoeligheid wordt berekend als een gewogen gemiddelde van alle afwijkingen. You can specify time to the past. Newer deviations have higher weight. Minimal carbs absorption is calculated from max carbs absorption time from preferences. This algorithm is fastest in following sensitivity changes.

### Gevoeligheid Oref1

Deze moet je kiezen wanneer je SMB met UAM gebruikt. De gevoeligheid wordt berekend op basis van gegevens van de afgelopen 8 uur, of van de laatste infuuswissel als die minder dan 8 uur geleden is. Koolhydraten (indien niet geabsorbeerd) worden afgekapt (dwz, op nul gezet) na de tijd die je hebt opgegeven in je Instellingen. Het Oref1 algoritme ondersteunt als enige UAM (onaangekondigde maaltijden, unannounced meals). Dit betekent dat alle periodes waarbij UAM zijn gedetecteerd, niet worden meegenomen in de berekening. Vandaar dat je voor dit gevoeligheids-algoritme moet kiezen als je SMB met UAM gebruikt! Voor meer informatie lees de [OpenAPS Oref1 documentatie](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

## Gelijktijdige koolhydraten

Er zit een aanzienlijk verschil tussen AAPS en Gewogen gemiddelde versus Oref0 en Oref1. De Oref gevoeligheids-algoritmes werken met de aanname dat er slechts één maaltijd tegelijkertijd wordt opgenomen in je lichaam. Dit betekent dat een tweede maaltijd pas opgenomen begint te worden nadat de eerste maaltijd volledig is opgenomen. Bij AAPS en Gewogen gemiddelde begint de opname meteen wanneer je een maaltijd invoert. Dit betekent dat, als er meer dan één maaltijd aan boord is dat de minimale koolhydraten absorptie wordt aangepast aan de grootte van de maaltijd en de max absorptie tijd. De minimale absorptie zal daarom hoger zijn in vergelijking met de Oref gevoeligheids-algoritmes.