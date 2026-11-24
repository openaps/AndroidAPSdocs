# Utjevning av blodsukkerdata

Hvis **BS**-dataene er hoppende eller har mye støy, kan **AAPS** dosere insulin feil, noe som kan gi høye eller lave verdier. Hvis du ser feil eller opplever hoppende data med CGM-en din, er det viktig å deaktivere loopen til problemet er løst. Avhengig av hvilken CGM du har, kan slike problemer skyldes CGM-konfigurasjonen i **AAPS** (som forklart lenger ned), eller et problem med sensorstedet (som kan kreve at du bytter CGM-sensoren).

## Utjevning av data i AAPS

**AAPS** gir deg mulighet til å jevne ut dataene i **AAPS** i stedet for i CGM-appen. Åpne **menyen** (☰), velg [**Konfigurasjon**](../SettingUpAaps/ConfigBuilder.md) og deretter **Utjevning**. Det finnes fire valg, og bare ett kan være aktivt om gangen: **Ingen utjevning**, **Eksponentiell utjevning**, **Gjennomsnittlig utjevning** og **Unscented Kalman-filter**.

![Konfigurasjon > Utjevning](../images/v4/Configuration/configuration_smoothing.png)

### Eksponentiell utjevning

Generelt er dette det anbefalte valget å starte med, siden det er mest aggressivt i å fjerne støy og skriver om den nyeste verdien. Se likevel tabellen nedenfor for andre spesifikke anbefalinger.

### Gjennomsnittlig utjevning

Dette valget fungerer omtrent som «back smoothing», som tidligere var innebygd på enkelte CGM-plattformer. Det reagerer raskere på nylige endringer i BS-verdien, og kan derfor lettere reagere feil på CGM-data med støy.

### Ingen utjevning

Bruk dette valget bare hvis CGM-dataene dine allerede blir jevnet ut skikkelig av innsamlingsappen før de sendes til **AAPS**.

### Unscented Kalman-filter (UKF)

Dette valget bruker en statistisk modell som hele tiden anslår den sanne blodsukkerverdien din og hvor fort den endrer seg, ut fra målingene som kommer inn (og som kan ha støy). Den tilpasser seg automatisk til hvor mye støy sensoren din har akkurat nå. Den oppdager og forkaster også plutselige avvikende målinger. Det er et mer avansert alternativ til eksponentiell og gjennomsnittlig utjevning, og er nyttig hvis du vil at utjevningen skal tilpasse seg sensorens skiftende støynivå i stedet for å bruke en fast metode.

(smoothing-xdrip-dexcom-g6)=

## Forslag til bruk av utjevning

Du kan også bytte utjevningsmetode automatisk, for eksempel avhengig av sensoralderen, med [automasjonshandlingen](#automations-automation-action) **Endre utjevning**.

|               | Eksponentiell | Gjennomsnittlig | Ingen utjevning |
| ------------- |:-------------:|:---------------:|:---------------:|
| G5/G6/ONE     | Hvis mye støy |                 |    Anbefalt     |
| G7/ONE+/Stelo | Hvis mye støy |   Hvis stabil   |                 |

Libre-sensorer har mye støy og kan trenge utjevning. Når du bruker direkte tilkobling i xDrip, eller datakilden modifisert app (mottak fra en annen app, inkludert Juggluco), [er utjevningen allerede gjort inne i appen](#libre2-value-smoothing-raw-values).

| Sensor / datakilde   |    Juggluco     | xDrip direkte | xDrip-bro (bridge) | xDrip (modifisert app) |
| -------------------- |:---------------:|:-------------:|:------------------:|:----------------------:|
| Libre 1/14 dager/Pro |  Ikke aktuelt   | Ikke aktuelt  |  Gjennomsnittlig   |      Ikke aktuelt      |
| Libre 2/2+ (EU)      | Gjennomsnittlig |     Ingen     |  Gjennomsnittlig   |         Ingen          |
| Libre 2/2+/3/3+      | Gjennomsnittlig | Ikke aktuelt  |    Ikke aktuelt    |         Ingen          |
