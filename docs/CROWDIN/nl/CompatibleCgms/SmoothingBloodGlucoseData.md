# Vloeiend maken van bloedglucosewaarden

Als de **BG**-gegevens springerig of onrustig zijn, kan **AAPS** verkeerd insuline doseren. Dit kan leiden tot hoge of lage waarden. Zie je fouten of springerige gegevens van je CGM? Zet dan de loop uit tot het probleem is opgelost. Afhankelijk van je CGM kunnen zulke problemen komen door de CGM-instellingen in **AAPS** (zie verderop), of door een probleem met de plek van de CGM-sensor (dan moet je de sensor misschien vervangen).

## Gegevens vloeiend maken in AAPS

**AAPS** kan de gegevens zelf vloeiend maken in **AAPS**, in plaats van in de CGM-app. Open het **menu** (☰), kies [**Configuratie**](../SettingUpAaps/ConfigBuilder.md) en dan **Vloeiend maken**. Er zijn vier opties en er kan er maar één tegelijk actief zijn: **Niet vloeiend maken**, **Exponentieel vloeiend maken**, **Gemiddeld vloeiend maken** en **Unscented Kalman Filter**.

![Configuratie > Vloeiend maken](../images/v4/Configuration/configuration_smoothing.png)

### Exponentieel vloeiend maken

Dit is in het algemeen de aanbevolen optie om mee te beginnen. Deze optie verwijdert ruis het sterkst en past de laatste waarde aan. Zie wel de tabel hieronder voor andere, specifieke aanbevelingen.

### Gemiddeld vloeiend maken

Deze optie werkt ongeveer zoals de 'back smoothing' die eerder op sommige CGM-platforms gebruikt werd. Deze optie reageert sneller op recente veranderingen in de BG-waarde en reageert daardoor eerder verkeerd op CGM-gegevens met ruis.

### Niet vloeiend maken

Gebruik deze optie alleen als je CGM-gegevens al goed vloeiend gemaakt worden door je ontvanger-app, voordat ze naar **AAPS** gaan.

### Unscented Kalman Filter (UKF)

Deze optie gebruikt een statistisch model. Het schat steeds je echte glucosewaarde en hoe snel die verandert, op basis van de binnenkomende (mogelijk onrustige) metingen. Het past zich vanzelf aan aan hoeveel ruis je sensor op dat moment geeft. Het herkent ook plotselinge uitschieters en negeert die. Het is een meer geavanceerd alternatief voor Exponentieel en Gemiddeld vloeiend maken. Het is handig als je wilt dat het vloeiend maken zich zelf aanpast aan de wisselende ruis van je sensor, in plaats van een vaste methode te gebruiken.

(smoothing-xdrip-dexcom-g6)=

## Suggesties voor vloeiend maken

Je kunt de methode voor vloeiend maken ook automatisch wijzigen, bijvoorbeeld afhankelijk van de leeftijd van de sensor, met de [Automatisering-actie](#automations-automation-action) **Vloeiend maken wijzigen**.

|               | Exponentieel |  Gemiddeld  | Niet vloeiend maken |
| ------------- |:------------:|:-----------:|:-------------------:|
| G5/G6/ONE     |   Bij ruis   |             |     Aanbevolen      |
| G7/ONE+/Stelo |   Bij ruis   | Als stabiel |                     |

Libre-sensoren geven veel ruis en moeten soms vloeiend gemaakt worden. Bij xDrip direct connection, of bij de gegevensbron patched app (ontvangen van een andere app, ook Juggluco), [wordt het vloeiend maken al in de app gedaan](#libre2-value-smoothing-raw-values).

| Sensor / gegevensbron | Juggluco  | xDrip direct | xDrip bridge | xDrip patched app |
| --------------------- |:---------:|:------------:|:------------:|:-----------------:|
| Libre 1/14 days/Pro   |  N.v.t.   |    N.v.t.    |  Gemiddeld   |      N.v.t.       |
| Libre 2/2+ (EU)       | Gemiddeld |     Geen     |  Gemiddeld   |       Geen        |
| Libre 2/2+/3/3+       | Gemiddeld |    N.v.t.    |    N.v.t.    |       Geen        |
