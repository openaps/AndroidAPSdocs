# Algemene CGM aanbevelingen

## CGM-hygiëne

Los van het CGM systeem dat je gebruikt, gelden een aantal hele heldere regels voor het gebruiken van een vingerprik om mee te kalibreren. Die regels gelden zowel bij het gebruik van officiële CGM software van de fabrikant, als bij software uit de doe-het-zelf community.

-   Zorg dat je handen en je materiaal schoon zijn.
-   Probeer te kalibreren als je een reeks punten met een vlakke pijl hebt (15-30 minuten is meestal genoeg)
-   Doe geen kalibraties wanneer je glucosewaardes stijgen of dalen.
-   Kalibreer "voldoende" vaak: officiële apps vragen je één of twee keer per dag om een controle. Bij doe-het-zelf-systemen gebeurt dat misschien niet. Wees dan voorzichtig als je lang doorgaat zonder kalibraties.
-   Bij sensoren die geen kalibratie nodig hebben of geen kalibratie toestaan: controleer minstens één keer per dag je echte bloedsuiker. AAPS is zo veilig als de metingen van je sensor betrouwbaar zijn.
-   If at all possible, calibrate with some of your readings in a lower range (4-5mmol/L or 72-90mg/dL) and some at a slightly higher level (7-9mmol/L or 126-160mg/dL) as this provides a better range for the point/slope calibration.

## Sensor inbrengen (G6)

Bij het inbrengen van de sensor wordt aanbevolen om niet te hard op de inserter te duwen om bloeden te voorkomen. De contacten van de sensor mogen niet in aanraking komen met bloed.

Na het inbrengen van de sensor kun je de zender in de sensorhouder klikken. Let op! Klik eerst de vierkante kant vast en druk daarna de ronde kant aan.

(general-cgm-troubleshooting)=
## Probleemoplossing

### Verbindingsproblemen

De Bluetooth-verbinding kan worden verstoord door andere Bluetooth-apparaten zoals bloedglucose meters, koptelefoons, tablets of keukenapparatuur zoals magnetrons (microgolven) of keramische kookplaten. In dit geval toont xDrip geen BG-waarden. Als de Bluetooth-verbinding hersteld is, worden de ontbrekende gegevens aangevuld (backfill).

### Sensorfouten

Als je last hebt van terugkerende sensor fouten, kies dan een andere plaats op je lichaam om de sensor in te brengen. De contacten van de sensor mogen niet in aanraking komen met bloed.

Vaak kun je een "Sensor Error" (sensorfout) oplossen door meteen te drinken en rond de sensor te masseren!

### 'Springende' waardes

Je kunt proberen de instellingen voor ruisblokkering in xDrip aan te passen (Settings - Inter-App Settings - Noise Blocking), bijvoorbeeld "Block Very High noise and worse". Zie ook [Vloeiend maken van bloedglucosewaarden](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Negatieve sensorleeftijd

![Leeftijd van de sensor op de rij Sensor van het uitgevouwen statuspaneel](../images/main/main_status_row_expanded.png)

De leeftijd van de sensor staat op de rij **Sensor** van het statuspaneel op het hoofdscherm (tik op het pijltje om het uit te vouwen). A negative age occurs if there is either a double "Sensor Insert" [careportal entry](#aaps-screens-careportal) or a sensor insert with wrong date. Open **Behandelingen geschiedenis** (menu ☰), selecteer het tabblad **Careportal** en verwijder de foute invoer.
