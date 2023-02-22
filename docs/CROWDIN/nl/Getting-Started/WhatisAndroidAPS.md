# Wat is een closed loop systeem met AndroidAPS?

AndroidAPS is een app die wordt gebruikt als 'kunstmatige alvleesklier' systeem (Artificial Pancreas System of kortweg APS in het Engels). Deze app draait op een Android smartphone   en heeft hetzelfde doel als een menselijke alvleesklier: de bloedglucosewaardes automatisch binnen gezonde grenzen houden.

AndroidAPS kan dit nooit zo perfect als een echte alvleesklier, maar kan het leven met type 1 diabetes wel makkelijker maken. Door apparaten die commercieel beschikbaar zijn, te koppelen aan software die simpel en veilig is. Deze apparaten zijn een glucosesensor (Continue Glucose Monitor, CGM) en een insulinepomp. De app communiceert met de glucosesensor en insulinepomp via bluetooth. AndroidAPS gebruikt een algoritme (een set rekenregels) dat al eerder is ontwikkeld voor een ander 'kunstmatige alvleesklier' systeem: OpenAPS. Wereldwijd heeft OpenAPS duizenden gebruikers en al die mensen samen hebben inmiddels miljoenen uren ervaring met dat systeem.

Opmerking: AndroidAPS wordt in geen enkel land door regelgevers voor medische hulpmiddelen gereguleerd. Wie AndroidAPS gebruikt, voert eigenlijk een medisch experiment uit op zichzelf. Het bouwen en instellen van het systeem vereist doorzettingsvermogen en technische kennis. Je hoeft deze technische kennis aan het begin nog niet te hebben, je zult die gaandeweg krijgen. Alle informatie die je nodig hebt kun je online vinden: hier in de wiki, op andere websites of van mensen de jou zijn voorgegaan -- je kunt ze vinden in Facebook groepen en andere online platforms. Veel mensen hebben AndroidAPS succesvol gebouwd en gebruiken het nu volledig veilig, maar het is essentieel dat elke gebruiker:

- Builds the system themselves so that they thoroughly understand how it works
- Adjusts its individual dosage algorithm with his or her diabetes team to work nearly perfect
- Maintains and monitors the system to ensure it is working properly

```{note}
**Disclaimer and Warning**

- All information, thought, and code described here is intended for informational and educational purposes only. Nightscout probeert zich op geen enkele wijze te houden aan gegevensbewaking van medische gegevens. Gebruik van Nightscout en AndroidAPS is op eigen risico, en gebruik de informatie of code niet om behandelbeslissingen te nemen.
- Use of code from github.com is without warranty or formal support of any kind. Verdere details zijn te vinden in de licentie, die te vinden is in de Repository op github.
- All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Hun gebruik is voor informatieve doeleinden en impliceert op geen enkele wijze een samenwerking met of goedkeuring van hen.

Please note - this project has no association with and is not endorsed by: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) or [Medtronic](https://www.medtronic.com/).
```

Als je klaar bent voor deze uitdaging, lees dan verder.

## Belangrijkste uitgangspunten van AndroidAPS:

- An app with safety built in. To read about the safety features of the algorithms, known as oref0 and oref1, click here (<https://openaps.org/reference-design/>)
- An all-in-one app for managing type 1 diabetes with an artificial pancreas and Nightscout
- An app to which users can easily add or remove modules as needed
- An app with different versions for specific locations and languages.
- An app which can be used in open- and closed-loop mode
- An app that is totally transparent: users can input parameters, see results, and make the final decision
- An app which is independent of particular pump drivers and contains a "virtual pump" so users can safely experiment before using it on themselves
- An app closely integrated with Nightscout
- An app in which the user is in control of safety constraints

## Hoe te beginnen

Natuurlijk is alles wat hier beschreven staat belangrijk, maar de grote hoeveelheid nieuwe informatie kan in het begin behoorlijk verwarrend zijn. A good orientation is given by the [Module Overview](../Module/module.md) and the [Objectives](../Usage/Objectives.html).
