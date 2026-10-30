# Recomandări generale CGM

## Igiena CGM

Indiferent de sistemul CGM pe care îl utilizați, dacă doriți să utilizați calibrarea bazată pe glucometru, atunci există unele reguli foarte clare pe care ar trebui să le aplicați, indiferent dacă utilizați sau nu software-ul DIY CGM sau aplicațiile oficiale.

-   Asigurați-vă că mâinile și trusa sunt curate.
-   Încercați să calibrați atunci când aveți o serie de puncte cu o evoluție orizontală (15-30 de minute este de obicei suficient)
-   Evitați calibrarea atunci când nivelurile glicemiei se mișcă în sus sau în jos.
-   Faceți "suficiente" calibrări - în aplicațiile oficiale vi se vor cere una sau două verificări ale glicemiei pe zi. În cazul sistemelor DIY este posibil să nu fiți alertat și ar trebui să fiți prudent când continuați fără calibrări.
-   În cazul senzorilor care nu necesită sau nu permit calibrarea, verificați cel puțin zilnic glicemia reală din sânge. AAPS va fi la fel de sigur pe cât de încredere sunt citirile senzorului dumnevoastră.
-   If it all possible, calibrate with some of your readings in a lower range (4-5mmol/L or 72-90mg/dL) and some at a slightly higher level (7-9mmol/L or 126-160mg/dL) as this provides a better range for the point/slope calibration.

## Inserare senzor (G6)

Atunci când este inserat senzorul, este recomandat să nu se apese prea ferm pe inserator pentru a evita sângerarea. Contactele senzorului nu trebuie să intre în contact cu sângele.

După inserarea senzorului, transmițătorul poate fi apăsat în suportul de pe senzor. Atenție! Mai întâi îl introduceți în partea ascuțită și apoi apăsați pe partea rotundă.

(depanare-generală-cgm)=
## Depanare

### Probleme de conectare

Conexiunea Bluetooth poate fi deranjată de alte dispozitive Bluetooth din apropiere, cum ar fi glucometre, căști, tablete sau dispozitive de bucătărie cum ar fi cuptoarele cu microunde sau plitele electrice. In this case xDrip does not display any BG values. Când conexiunea Bluetooth este restabilită, datele sunt recuperate și completate.

### Erori senzor

Dacă apar erori de senzor repetate, încercați să alegeți un alt loc pe corp pentru a insera senzorul. Contactele senzorului nu trebuie să intre în contact cu sângele.

Adesea o eroare de senzor poate fi corectată prin hidratare imediată și masare ușoară în jurul senzorului!

### Valori săltărețe

You might try to change settings for noise blocking in xDrip (Settings - Inter-App Settings - Noise Blocking) i.e. "Block Very High noise and worse". Vedeți de asemenea [Netezirea datelor de glicemie](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Vârstă negativă a senzorului

![Sensor age on the Sensor row of the expanded status panel](../images/main/main_status_row_expanded.png)

The sensor age is shown on the **Sensor** row of the status panel on the main screen (tap the chevron to expand it). A negative age occurs if there is either a double "CGM Sensor Insert" [careportal entry](#aaps-screens-careportal) or a sensor insert with wrong date. Open **Treatments history** (menu ☰), select the **Careportal** tab and delete the wrong entry.
