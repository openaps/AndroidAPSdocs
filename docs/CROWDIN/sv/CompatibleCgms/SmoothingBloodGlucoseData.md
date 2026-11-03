# Utjämning av blodsockerdata

Om **BG**-värdena hoppar eller har mycket brus kan **AAPS** dosera fel mängd insulin, vilket kan ge höga eller låga värden. Om du ser fel eller om värdena från din CGM hoppar är det viktigt att du stänger av loopen tills problemet är löst. Beroende på din CGM kan sådana problem bero på CGM-inställningarna i **AAPS** (se förklaringen längre ned) eller på ett problem med sensorns placering (då kan du behöva byta CGM-sensorn).

## Utjämning av data i AAPS

**AAPS** kan utjämna data i **AAPS** i stället för i CGM-appen. Öppna **menyn** (☰), välj [**Konfiguration**](../SettingUpAaps/ConfigBuilder.md) och sedan **Utjämning**. Det finns fyra alternativ, och bara ett kan vara aktivt åt gången: **Ingen utjämning**, **Exponentiell utjämning**, **Genomsnittlig utjämning** och **Unscented Kalman Filter**.

![Konfiguration > Utjämning](../images/v4/Configuration/configuration_smoothing.png)

### Exponentiell utjämning

Generellt är detta det rekommenderade alternativet att börja med, eftersom det tar bort brus mest effektivt och skriver om det senaste värdet. Se dock tabellen nedan för andra specifika rekommendationer.

### Genomsnittlig utjämning

Det här alternativet fungerar ungefär som den bakåtutjämning som tidigare fanns på vissa CGM-plattformar. Det reagerar snabbare på nya ändringar i BG-värdet och kan därför oftare reagera fel på CGM-data med brus.

### Ingen utjämning

Använd bara detta alternativ om dina CGM-data redan utjämnas ordentligt av din insamlingsapp innan de skickas till **AAPS**.

### Unscented Kalman Filter (UKF)

Detta alternativ använder en statistisk modell för att hela tiden uppskatta ditt verkliga glukosvärde och hur snabbt det ändras utifrån de inkommande värdena (som kan ha brus). Den anpassar sig automatiskt efter hur mycket brus din sensor har just nu. Den upptäcker också plötsliga avvikande värden och tar bort dem. Det är ett mer avancerat alternativ till Exponentiell och Genomsnittlig utjämning. Det är användbart om du vill att utjämningen ska anpassa sig efter sensorns ändrade brusnivå i stället för att använda en fast metod.

(smoothing-xdrip-dexcom-g6)=

## Förslag på utjämning

Du kan också byta utjämningsmetod automatiskt, till exempel beroende på sensorns ålder, med [automationsåtgärden](#automations-automation-action) **Ändra utjämning**.

|               | Exponentiell | Genomsnittlig | Ingen utjämning |
| ------------- |:------------:|:-------------:|:---------------:|
| G5/G6/ONE     |   Vid brus   |               |  Rekommenderas  |
| G7/ONE+/Stelo |   Vid brus   |   Om stabil   |                 |

Libre-sensorer har mycket brus och kan behöva utjämning. När du använder xDrip med direkt anslutning eller datakällan patchad app (som tar emot data från en annan app, även Juggluco) [är data redan utjämnade i appen](#libre2-value-smoothing-raw-values).

| Sensor/datakälla     |    Juggluco    |  xDrip direkt  |  xDrip brygga  | xDrip patchad app |
| -------------------- |:--------------:|:--------------:|:--------------:|:-----------------:|
| Libre 1/14 dagar/Pro | Ej tillämpligt | Ej tillämpligt | Genomsnittlig  |  Ej tillämpligt   |
| Libre 2/2+ (EU)      | Genomsnittlig  |     Ingen      | Genomsnittlig  |       Ingen       |
| Libre 2/2+/3/3+      | Genomsnittlig  | Ej tillämpligt | Ej tillämpligt |       Ingen       |
