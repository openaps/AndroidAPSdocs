# Opće preporuke za CGM

## Higijena CGM-a

Koji god CGM sustav koristite, ako ćete ga kalibrirati vrijednostima iz krvi, postoje vrlo jasna pravila koja trebate slijediti, bez obzira na to koristite li DIY CGM softver ili službene aplikacije.

-   Pazite da su ruke i pribor čisti.
-   Pokušajte kalibrirati kad imate niz točaka s ravnom strelicom (15–30 minuta obično je dovoljno)
-   Izbjegavajte kalibraciju dok glukoza raste ili pada.
-   Radite „dovoljno“ kalibracija – službene aplikacije tražit će provjeru jednom ili dvaput dnevno. DIY sustavi to možda neće tražiti, pa budite oprezni ako nastavljate bez kalibracija.
-   Kod senzora koji ne trebaju ili ne dopuštaju kalibraciju barem jednom dnevno provjerite stvarni šećer u krvi. AAPS je siguran onoliko koliko su pouzdana očitanja vašeg senzora.
-   If at all possible, calibrate with some of your readings in a lower range (4-5mmol/L or 72-90mg/dL) and some at a slightly higher level (7-9mmol/L or 126-160mg/dL) as this provides a better range for the point/slope calibration.

## Postavljanje senzora (G6)

Pri postavljanju senzora preporučuje se ne pritiskati aplikator prejako, da se izbjegne krvarenje. Kontakti senzora ne smiju doći u dodir s krvlju.

Nakon postavljanja senzora odašiljač se može utaknuti u držač senzora. Oprez! Prvo ga utaknite na kvadratnoj strani, a zatim pritisnite okruglu stranu.

(general-cgm-troubleshooting)=
## Rješavanje problema

### Problemi s vezom

Bluetooth vezu mogu ometati drugi Bluetooth uređaji u blizini, kao što su mjerači glukoze, slušalice, tableti ili kuhinjski uređaji poput mikrovalnih pećnica ili keramičkih ploča za kuhanje. U tom slučaju xDrip ne prikazuje vrijednosti GUK-a. Kad se Bluetooth veza ponovno uspostavi, podaci koji nedostaju se nadopune.

### Greške senzora

Ako se greške senzora ponavljaju, pokušajte postaviti senzor na drugo mjesto na tijelu. Kontakti senzora ne smiju doći u dodir s krvlju.

„Sensor Error“ se često može ispraviti ako odmah popijete nešto i masirate područje oko senzora!

### Nestabilne vrijednosti

Možete pokušati promijeniti postavke blokiranja šuma u xDripu (Settings - Inter-App Settings - Noise Blocking), npr. „Block Very High noise and worse“. Pogledajte i [Zaglađivanje podataka GUK-a](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Negativna starost senzora

![Starost senzora u retku Senzor proširenog panela statusa](../images/main/main_status_row_expanded.png)

Starost senzora prikazuje se u retku **Senzor** panela statusa na glavnom zaslonu (dodirnite strelicu da biste ga proširili). A negative age occurs if there is either a double "Sensor Insert" [careportal entry](#aaps-screens-careportal) or a sensor insert with wrong date. Otvorite **Povijest tretmana** (izbornik ☰), odaberite karticu **Careportal** i izbrišite pogrešan unos.
