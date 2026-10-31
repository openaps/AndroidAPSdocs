# Filteren van bloed glucose waardes

Als de **BG**-gegevens springerig of onrustig zijn, kan **AAPS** verkeerd insuline doseren. Dit kan leiden tot hoge of lage waarden. Zie je fouten of springerige gegevens van je CGM? Zet dan de loop uit tot het probleem is opgelost. Afhankelijk van je CGM kunnen zulke problemen komen door de CGM-instellingen in **AAPS** (zie verderop), of door een probleem met de plek van de CGM-sensor (dan moet je de sensor misschien vervangen).

## Smoothing data within AAPS

**AAPS** kan de gegevens zelf vloeiend maken in **AAPS**, in plaats van in de CGM-app. Open het **menu** (☰), kies [**Configuratie**](../SettingUpAaps/ConfigBuilder.md) en dan **Vloeiend maken**. Er zijn vier opties en er kan er maar één tegelijk actief zijn: **Niet vloeiend maken**, **Exponentiëel vloeiend maken**, **Gemiddeld vloeiend maken** en **Unscented Kalman Filter**.

![Configuratie > Vloeiend maken](../images/v4/Configuration/configuration_smoothing.png)

### Exponential smoothing

Dit is in het algemeen de aanbevolen optie om mee te beginnen. Deze optie verwijdert ruis het sterkst en past de laatste waarde aan. Zie wel de tabel hieronder voor andere, specifieke aanbevelingen.

### Average smoothing

This option works similar to back smoothing that was previously implemented on certain CGM platforms. It is more reactive to recent changes in BG value and therefore more prone to responding incorrectly to noisy CGM data.

### No Smoothing

Gebruik deze optie alleen als je CGM-gegevens al goed vloeiend gemaakt worden door je ontvanger-app, voordat ze naar **AAPS** gaan.

### Unscented Kalman Filter (UKF)

Deze optie gebruikt een statistisch model. Het schat steeds je echte glucosewaarde en hoe snel die verandert, op basis van de binnenkomende (mogelijk onrustige) metingen. Het past zich vanzelf aan aan hoeveel ruis je sensor op dat moment geeft. Het herkent ook plotselinge uitschieters en negeert die. Het is een meer geavanceerd alternatief voor Exponentiëel en Gemiddeld vloeiend maken. Het is handig als je wilt dat het vloeiend maken zich zelf aanpast aan de wisselende ruis van je sensor, in plaats van een vaste methode te gebruiken.

(smoothing-xdrip-dexcom-g6)=

## Suggestions to use smoothing

Je kunt de methode voor vloeiend maken ook automatisch wijzigen, bijvoorbeeld afhankelijk van de leeftijd van de sensor, met de [Automatisering-actie](#automations-automation-action) **Vloeiend maken wijzigen**.

|               | Exponential |   Average   | No Smoothing |
| ------------- |:-----------:|:-----------:|:------------:|
| G5/G6/ONE     |  If noisy   |             | Recommended  |
| G7/ONE+/Stelo |  If noisy   | Als stabiel |              |

Libre-sensoren geven veel ruis en moeten soms vloeiend gemaakt worden. Bij xDrip direct connection, of bij de gegevensbron patched app (ontvangen van een andere app, ook Juggluco), [wordt het vloeiend maken al in de app gedaan](#libre2-value-smoothing-raw-values).

| Sensor / gegevensbron | Juggluco | xDrip direct | xDrip bridge | xDrip patched app |
| --------------------- |:--------:|:------------:|:------------:|:-----------------:|
| Libre 1/14 days/Pro   |  N.v.t.  |    N.v.t.    |   Average    |      N.v.t.       |
| Libre 2/2+ (EU)       | Average  |     None     |   Average    |       None        |
| Libre 2/2+/3/3+       | Average  |    N.v.t.    |    N.v.t.    |       None        |
