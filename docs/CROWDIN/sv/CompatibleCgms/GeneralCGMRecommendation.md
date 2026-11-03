# Allmänna rekommendationer för CGM

## CGM-hygien

Vilket CGM-system du än använder, om du ska kalibrera med blodprov finns det några mycket tydliga regler som du bör följa, oavsett om du använder DIY-programvara för CGM eller de officiella apparna.

-   Se till att händer och utrustning är rena.
-   Försök att kalibrera när du har en serie punkter med en vågrät pil (15–30 minuter räcker oftast)
-   Undvik att kalibrera när glukosnivån stiger eller sjunker.
-   Gör ”tillräckligt” många kalibreringar – i de officiella apparna blir du ombedd att göra kontroller en eller två gånger per dag. I DIY-system blir du kanske inte ombedd, och du bör vara försiktig med att fortsätta utan kalibreringar.
-   För sensorer som inte behöver eller inte tillåter kalibrering: kontrollera det riktiga blodsockret minst en gång om dagen. AAPS blir bara så säkert som dina sensorvärden är pålitliga.
-   Om det över huvud taget går: kalibrera med några av dina värden i ett lägre intervall (4–5 mmol/l eller 72–90 mg/dl) och några på en något högre nivå (7–9 mmol/l eller 126–160 mg/dl), eftersom det ger ett bättre intervall för kalibreringen av punkt/lutning.

## Sätta sensorn (G6)

När du sätter sensorn rekommenderas att du inte trycker för hårt med införaren, så att du undviker blödning. Sensorns kontakter ska inte komma i kontakt med blod.

När sensorn är satt kan sändaren klickas fast i sensorhållaren. Varning! Klicka först i den fyrkantiga sidan och tryck sedan ned den runda sidan.

(general-cgm-troubleshooting)=
## Felsökning

### Anslutningsproblem

Bluetooth-anslutningen kan störas av andra Bluetooth-enheter i närheten, till exempel blodsockermätare, headset, surfplattor eller köksapparater som mikrovågsugnar eller glaskeramikhällar. I så fall visar xDrip inga BG-värden. När Bluetooth-anslutningen fungerar igen fylls saknade data i (backfill).

### Sensorfel

Om sensorfel kommer tillbaka: försök att sätta sensorn på ett annat ställe på kroppen. Sensorns kontakter ska inte komma i kontakt med blod.

Ett "Sensor Error" (sensorfel) kan ofta rättas till genom att du genast dricker och masserar runt sensorn!

### Hoppiga värden

Du kan försöka ändra inställningarna för brusblockering i xDrip (Settings - Inter-App Settings - Noise Blocking), t.ex. "Block Very High noise and worse". Se även [Utjämning av BG-data](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Negativ sensorålder

![Sensorålder på raden Sensor i den utfällda statuspanelen](../images/main/main_status_row_expanded.png)

Sensorns ålder visas på raden **Sensor** i statuspanelen på huvudskärmen (tryck på pilen för att fälla ut den). En negativ ålder uppstår om det antingen finns en dubbel [Careportal-post](#aaps-screens-careportal) "Sensorinsättning" eller en sensorinsättning med fel datum. Öppna **Behandlingshistorik** (menyn ☰), välj fliken **Careportal** och ta bort den felaktiga posten.
