# Opće preporuke za CGM

## Higijena CGM-a

Koji god CGM sustav koristite, ako ćete ga kalibrirati vrijednostima iz krvi, postoje vrlo jasna pravila koja trebate slijediti, bez obzira na to koristite li DIY CGM softver ili službene aplikacije.

-   Pazite da su ruke i pribor čisti.
-   Pokušajte kalibrirati kad imate niz točaka s ravnom strelicom (15–30 minuta obično je dovoljno)
-   Izbjegavajte kalibraciju dok glukoza raste ili pada.
-   Radite „dovoljno“ kalibracija – službene aplikacije tražit će provjeru jednom ili dvaput dnevno. DIY sustavi to možda neće tražiti, pa budite oprezni ako nastavljate bez kalibracija.
-   Kod senzora koji ne trebaju ili ne dopuštaju kalibraciju barem jednom dnevno provjerite stvarni šećer u krvi. AAPS je siguran onoliko koliko su pouzdana očitanja vašeg senzora.
-   Ako je ikako moguće, kalibrirajte s nekim očitanjima u nižem rasponu (4–5 mmol/L ili 72–90 mg/dL) i nekim na malo višoj razini (7–9 mmol/L ili 126–160 mg/dL), jer to daje bolji raspon za kalibraciju točke i nagiba.

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

Starost senzora prikazuje se u retku **Senzor** panela statusa na glavnom zaslonu (dodirnite strelicu da biste ga proširili). Negativna starost nastaje ako postoji dvostruki [unos u Careportal](#aaps-screens-careportal) „Umetanje senzora“ ili umetanje senzora s pogrešnim datumom. Otvorite **Povijest tretmana** (izbornik ☰), odaberite karticu **Careportal** i izbrišite pogrešan unos.
