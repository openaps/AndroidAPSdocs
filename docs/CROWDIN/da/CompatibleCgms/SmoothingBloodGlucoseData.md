# Udjævning af blodsukkerdata

Hvis **BS**-data springer eller har meget støj, kan **AAPS** dosere insulin forkert, så du får for højt eller for lavt blodsukker. Hvis du ser fejl eller oplever springende data fra din CGM, er det vigtigt at deaktivere loopet, indtil problemet er løst. Afhængigt af din CGM kan sådanne problemer skyldes CGM-konfigurationen i **AAPS** (som forklaret længere nede) eller et problem med CGM-sensorens placering (så du måske skal udskifte CGM-sensoren).

## Udjævning af data i AAPS

**AAPS** giver mulighed for at udjævne dataene i **AAPS** i stedet for i CGM-appen. Åbn **menuen** (☰), vælg [**Konfiguration**](../SettingUpAaps/ConfigBuilder.md) og derefter **Udjævning**. Der er fire muligheder, og kun én kan være aktiv ad gangen: **Ingen udjævning**, **Eksponentiel udjævning**, **Gennemsnitlig udjævning** og **Unscented Kalman-filter**.

![Konfiguration > Udjævning](../images/v4/Configuration/configuration_smoothing.png)

### Eksponentiel udjævning

Generelt er det den anbefalede mulighed at starte med, da den fjerner mest støj og omskriver den nyeste værdi. Se dog tabellen nedenfor for andre specifikke anbefalinger.

### Gennemsnitlig udjævning

Denne mulighed virker på samme måde som den bagudrettede udjævning, der tidligere fandtes på visse CGM-platforme. Den reagerer hurtigere på nye ændringer i BS-værdien og reagerer derfor lettere forkert på CGM-data med støj.

### Ingen udjævning

Brug kun denne mulighed, hvis dine CGM-data allerede bliver udjævnet korrekt af din indsamlingsapp, før de sendes til **AAPS**.

### Unscented Kalman-filter (UKF)

Denne mulighed bruger en statistisk model til hele tiden at beregne din sande glukoseværdi og dens ændringshastighed ud fra de indkomne målinger (som kan have støj), og den tilpasser sig automatisk til, hvor meget støj din sensor har lige nu. Den finder og afviser også pludselige afvigende målinger. Det er et mere avanceret alternativ til eksponentiel og gennemsnitlig udjævning, som er nyttigt, hvis du vil have, at udjævningen tilpasser sig din sensors skiftende støjniveau i stedet for at bruge en fast metode.

(smoothing-xdrip-dexcom-g6)=

## Forslag til brug af udjævning

Du kan også skifte udjævningsmetode automatisk, f.eks. afhængigt af sensorens alder, med [automatiseringshandlingen](#automations-automation-action) **Skift udjævning**.

|               | Eksponentiel | Gennemsnitlig | Ingen udjævning |
| ------------- |:------------:|:-------------:|:---------------:|
| G5/G6/ONE     |   Ved støj   |               |    Anbefalet    |
| G7/ONE+/Stelo |   Ved støj   |  Hvis stabil  |                 |

Libre-sensorer har støj og kan kræve udjævning. Når du bruger xDrip direkte forbindelse eller datakilden fra den modificerede app (modtager fra en anden app, også Juggluco), [er dataene allerede udjævnet i appen](#libre2-value-smoothing-raw-values).

| Sensor / datakilde  |   Juggluco    | xDrip direkte | xDrip bridge  | xDrip modificeret app |
| ------------------- |:-------------:|:-------------:|:-------------:|:---------------------:|
| Libre 1/14 dage/Pro | Ikke relevant | Ikke relevant | Gennemsnitlig |     Ikke relevant     |
| Libre 2/2+ (EU)     | Gennemsnitlig |     Ingen     | Gennemsnitlig |         Ingen         |
| Libre 2/2+/3/3+     | Gennemsnitlig | Ikke relevant | Ikke relevant |         Ingen         |
