# For Clinicians – A General Introduction and Guide to AAPS

This page is intended for clinicians who have expressed interest in open source artificial pancreas technology such as AAPS, or for patients who want to share such information with their clinicians.

This guide has some high-level information about DIY closed looping and specifically how AAPS works. For more details on all of these topics, please view the [comprehensive AAPS documentation online](../index.md). Als u vragen hebt, dan kunt u uw patiënt benaderen, of stel uw vraag aan één van de gebruikersgroepen. Als u niet actief bent op sociale media (bijv. [Twitter](https://twitter.com/kozakmilos) of Facebook), schroom dan niet om een email te sturen naar de ontwikkelaars: developers@AndroidAPS.org Verder kunt u [op deze website](https://openaps.org/outcomes/) een aantal van de laatste studies vinden & gegevens over de resultaten van closed loopen.

## The steps for building a DIY Closed Loop:

To start using AAPS, the following steps should be taken:

* Find a [compatible pump](../Getting-Started/CompatiblePumps.md), a [compatible Android device](../Getting-Started/Phones.md), and a [compatible CGM source](../Getting-Started/CompatiblesCgms.md).
* [Download the AAPS source code and build the software](../SettingUpAaps/BuildingAaps.md).
* [Configure the software to talk to their diabetes devices and specify settings and safety preferences](../SettingUpAaps/SetupWizard.md).

## How A DIY Closed Loop Works

Mensen met diabetes die geen closed loop gebruiken, zullen informatie uit hun pomp en CGM gebruiken om te besluiten wat ze moeten doen, en vervolgens de bijbehorende actie ondernemen.

Het systeem doet eigenlijk hetzelfde: het verzamelt gegevens van de pomp, CGM, en waar dan ook informatie wordt ingevoerd (zoals Nightscout, een website waar gegevens 'in de cloud' worden opgeslagen). Deze informatie wordt gebruikt om berekeningen te doen en te bepalen hoeveel meer of juist minder insuline nodig is (ten opzichte van de normale basaalstanden). Het systeem gebruikt tijdelijke basaalstanden om de benodigde aanpassingen te maken, zodat de bloedglucosewaardes binnen de streefwaardes worden gehouden of gebracht.

If the device running AAPS breaks or goes out of range of the pump, once the latest temporary basal rate ends, the pump falls back to being a standard pump with the preprogrammed basals rates runnning.

## How data is gathered:

With AAPS, an Android device runs a special app to do the math, the device communicates using Bluetooth with a supported pump. AAPS can communicate with other devices and to the cloud via wifi or mobile data to gather additional information, and to report to the patient, caregivers, and loved ones about what it’s doing and why.

De Android telefoon moet zowel met de pomp als de CGM verbonden zijn:

* om commando's naar de pomp te sturen, en ook om de pompgeschiedenis uit te lezen - om te weten hoeveel insuline is toegediend
* om gegevens te ontvangen van de CGM (rechtstreeks of via de cloud) - om te zien wat de bloedglucosewaardes doen

Wanneer deze gegevens zijn binnengekomen in de AndroidAPS app, zal het algoritme zijn berekeningen doen. De beslissingen die het algoritme neemt zijn gebaseerd op de instellingen van de gebruiker (insuline gevoeligheidsfactor, koolhydraat ratio, werkingsduur van insuline, bloedglucose streefdoel, etc.). 

De app krijgt ook informatie binnen vanaf de pomp, vanuit Nightscout en invoer van de gebruiker: over bolussen, gegeten koolhydraten en tijdelijke basaal aanpassingen. Die informatie wordt ook gebruikt om de benodigde hoeveelheid insuline te berekenen.

## How does it know what to do?

Het algoritme gebruikt dezelfde 'diabeteswiskunde' die mensen met diabetes bij traditionele therapie zelf zouden doen - maar dan veel vaker op een dag. Het algoritme berekent met alle verzamelde informatie een voorspelling van de bloedglucosewaardes voor de komende uren, waarbij hij verschillende scenario's gebruikt. Vervolgens berekent hij welke aanpassing er nodig is om de glucosewaardes binnen de streefwaardes te brengen of te houden. Dan stuurt hij commando's naar de pomp om die aanpassingen te maken. Het algoritme leest de gegevens weer uit, en doet dit hele proces dan steeds opnieuw.

Aangezien de bloedglucosewaardes de belangrijkste input zijn in dit proces, is het cruciaal dat de CGM betrouwbare gegevens levert. Voor de veiligheid zal het algoritme ook nooit een beslissing nemen op basis van één enkele waarde.

AAPS is designed to transparently track all input data it gathers, the resulting recommendation, and any action taken. Zodat je het antwoord op de vraag: “Waarom doet het algoritme dit?” op elk moment kunt vinden door de logs te bekijken.

## Examples of AAPS algorithm decision making:

AAPS uses the same core algorithm and feature set as OpenAPS. Het algoritme maakt voorspellingen voor meerdere scenario's (zoals hierboven beschreven). Deze worden in Nightscout weergegeven als paarse lijnen in de toekomst. AAPS uses different colors to separate these [prediction lines](#aaps-screens-prediction-lines). In de logs is terug te vinden welke voorspelling en welk tijdsbestek heeft geleid tot een actie van het algoritme.

### Here are examples of the purple prediction lines, and how they might differ:

![Paarse voorspellingslijn voorbeelden](../images/Prediction_lines.jpg)

### Here are examples of different time frames that influence the needed adjustments to insulin delivery:

### Scenario 1 - Zero Temp for safety

In dit voorbeeld stijgt de bloedglucose op de korte termijn, maar er wordt een lage bloedglucose voorspeld voor de lange termijn. Er wordt voorspeld dat de glucosewaarde onder het streefdoel ('BG target') zal uitkomen *en* onder de veiligheidsdrempel ('threshold'). For safety to prevent the low, AAPS will issue a zero temp (temporary basal rate at 0%), until the eventualBG (in any time frame) is above threshold.

![Doserings scenario 1](../images/Dosing_scenario_1.jpg)

### Scenario 2 - Zero temp for safety

In dit voorbeeld wordt voorspeld dat de bloedglucose op korte termijn zal dalen, maar uiteindelijk boven het streefdoel zal liggen. However, because the near-term low is actually below the safety threshold, AAPS will issue a zero temp, until there is no longer any point of the prediction line that is below threshold.

![Doserings scenario 2](../images/Dosing_scenario_2.jpg)

### Scenario 3 - More insulin needed

In dit voorbeeld wordt op korte termijn een daling van de bloedglucose voorspeld waarbij hij onder het streefdoel komt. De voorspelling is dat de bloedglucose echter niet onder de veiligheidsdrempel komt. De uiteindelijke glucosewaarde ligt boven het streefdoel. Therefore, AAPS will restrain from adding any insulin that would contribute to a near-term low (by adding insulin that would make the prediction go below threshold). Vervolgens zal hij met het verstrijken van de tijd, kijken of het al veilig is om extra insuline te geven zodat de bloedglucose op de lange termijn lager (en dus dichter bij het streefdoel) uitkomt. *Afhankelijk van de gebruikersinstellingen en van de hoeveelheid en het tijdstip waarop extra insuline nodig is, wordt de insuline toegediend dmv een tijdelijke basaalstand of SMB's (super micro bolussen).*

![Doserings scenario 3](../images/Dosing_scenario_3.jpg)

### Scenario 4 - Low temping for safety

In this example, AAPS sees that BG is spiking well above target. Tegelijkertijd wordt er voorspeld dat er al voldoende insuline in het lichaam aanwezig is om de bloedglucose te laten zakken. De voorspellingslijn geeft aan dat de glucosewaarde uiteindelijk zelfs onder het streefdoel zal uitkomen. Therefore, AAPS will not provide extra insulin so it will not contribute to a longer-timeframe low. Er zal waarschijnlijk een lage tijdelijke basaalstand worden ingesteld (ook al is de bloedglucose op dit moment hoog).

![Doserings scenario 4](../images/Dosing_scenario_4.jpg)

## Optimizing settings and making changes

As a clinician who may not have experience with AAPS or DIY closed loops, you may find it challenging to help your patient optimize their settings or make changes to improve their outcomes. Gelukkig zijn er meerdere tools en [handleidingen](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/optimize-your-settings.html) online te vinden die patiënten helpen om kleine, stapsgewijze aanpassingen te maken aan hun instellingen en zo hun uitkomsten te optimaliseren.

Voor patiënten is het belangrijk om één verandering tegelijk te maken, en gedurende 2-3 dagen het effect ervan te bekijken voordat een er andere instelling wordt aangepast (tenzij het natuurlijk overduidelijk is dat de verandering een verslechtering is, in dat geval verander je de instelling weer terug). Een hele menselijke neiging is om aan alle knoppen tegelijk te willen draaien, maar wie dat doet kan eindigen met verdere sub-optimale instellingen, en dan is het soms lastig om de eerdere goede instellingen weer terug te vinden.

Eén van de krachtigste hulpmiddelen bij het aanpassen van instellingen is een geautomatiseerd rekeninstrument voor bepaalde parameters: basaalstanden, insuline gevoeligheidsfactor en koolhydraat ratio. Dit heet "[Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html)". Het is ontworpen om handmatig te worden uitgevoerd, en de resultaten ervan kunnen een leidraad zijn bij het aanpassen van de instellingen. Autotune wordt vaak gedraaid (en bekeken) voordat iemands instellingen worden aangepast. With AAPS, Autotune will be run as a "one-off", although there are ongoing efforts to incorporate it directly into AAPS as well. As these parameters are a prerequisite both for standard pump insulin delivery and for closed loop insulin delivery, discussion of the autotune results and adustment of these parameters would be the natural link to the clinician.

Patiënten die een doe-het-zelf closed loop gaan gebruiken (na jaren van traditionele pen- of pomptherapie), zijn vaak nog geneigd om uit gewoonte te handelen. For example, if BG is predicted to go low and AAPS reduces insulin on the way down, only a small amount of carbs (e.g. 3-4g carbs) may be needed to bring BG up from 70 mg/dl (3.9 mmol). Iemand zou in zo'n geval kunnen kiezen om een stuk meer koolhydraten te eten (bijvoorbeeld de regel van 15 gram bij een hypo), met als resultaat een snellere piek doordat er relatief veel koolhydraten worden gegeten terwijl er op dat moment weinig insuline in het lichaam is. Het durven terugbrengen van de hoeveelheid koolhydraten (gedragsverandering) levert in dit geval betere waardes op.

## OpenAPS

**Deze tekst is een annpassing van [The clinician's guide to OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/clinician-guide-to-OpenAPS.html) (De OpenAPS gids voor zorgprofessionals).** OpenAPS is een systeem dat draait op een klein programmeerbaar minicomputertje (ook bekend als "rig"). AAPS uses many of the techniques implemented in OpenAPS, and shares much of the logic and algorithms, which is why this guide is very similar to the original guide. Much of the information about OpenAPS can be easily adapted to AAPS, with the main difference being the hardware platform where each piece of software is run.

## Summary

This is meant to be a high-level overview of how AAPS works. For more details, ask your patient, reach out to the community, or read the full AAPS documentation available online.

Aanvullende aanbevolen informatie:

* The [full AAPS documentation](../index.md)
* Het [OpenAPS Reference Design](https://OpenAPS.org/reference-design/), hierin wordt uitgelegd hoe OpenAPS is ontworpen rondom veiligheid
* De [volledige OpenAPS documentatie](https://openaps.readthedocs.io/en/latest/index.html) 
  * Meer [details over OpenAPS berekeningen](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#understanding-the-determine-basal-logic)