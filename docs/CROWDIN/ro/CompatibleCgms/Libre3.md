# **Freestyle Libre 3** și 3+

Freestyle Libre 3 (FSL3) necesită o configurare specială pentru a putea primi valorile glicemiei în AAPS. Există două modalități posibile de a obține valorile Freestyle Libre 3 (FSL3) în AAPS.

![FL3](../images/d912c1d3-06d2-4b58-ad7c-025ca1980fae.jpeg)

Metodele de mai jos pentru a realiza acest lucru sunt prin intermediul aplicației separate Juggluco. It uses Juggluco to receive raw, 1-minute interval data from the sensor which is then passed to xDrip or AAPS. Senzorii noi pot fi porniți fie cu aplicația Libre 3, fie direct în Juggluco. Ghidul de mai jos indică procesul de pornire al unui senzor cu aplicația Juggluco. Dacă senzorul a fost pornit cu un cont Libreview conectat, este de asemenea posibilă comutarea între Juggluco și aplicația Libre 3 ca destinatar.

Juggluco poate, de asemenea, să transmită date către LibreView pentru partajarea cu furnizorii de servicii medicale atunci când senzorul este pornit cu aplicația Libre 3.

Within xDrip the sensor can be calibrated in the range of -40 mg/dL to +20 mg/dL (-2.2 mmol/L to +1.1 mmol/L) to compensate for differences between a manual meter reading and the sensor readings.

## Metoda 1: utilizați citiri din minut în minut în mod direct
**AAPS** is tailored for 5-minute readings. Prin urmare, procesarea valorilor din minut în minut are limitări ocazionale.

Vedeți [aici](#juggluco-to-aaps).


## Metoda 2: convertiți citirile de la minut la minut în valori de 5 minute prin xDrip
This method uses Juggluco to receive raw, 1-minute interval data from the sensor which is then passed to xDrip to be smoothed into 5-minute interval data to be passed to AAPS.

### Pasul 1: Configurare Juggluco
Descărcați și instalați aplicația Juggluco de [aici](https://www.juggluco.nl/Juggluco/download.html). Urmați instrucțiunile de [aici](https://www.juggluco.nl/Juggluco/libre3/)

Make sure you send the glucose values to xDrip: In Juggluco's settings you can configure Juggluco to send its glucose value to other apps. Juggluco can send three types of such broadcasts: The **Patched Libre broadcast** was originally used by the patched Librelink app and can be used to send glucose values to xDrip

### Pasul 2: Configurare xDrip

The blood glucose values are received by the xDrip app on the smartphone.

- If not already set up then download [xDrip](https://github.com/NightscoutFoundation/xDrip) and follow the instructions on [xDrip settings page](../CompatibleCgms/xDrip.md).
- In xDrip select "Libre2 (patched app)" as data source.
- Dacă este necesar, introduceți "BgReading:d,xdrip libre_receiver:v" sub Setări mai puțin obișnuite → Setări de logare extra → etichete extra pentru logare. Aceasta va înregistra mesaje de eroare suplimentare pentru depanare.

![xDrip LibreLink logging](../images/Libre2_Tags.png)

- Technically, the current blood sugar value is transmitted to xDrip every minute. Un filtru de medie ponderată calculează o valoare uniformizată pe baza ultimelor 25 de minute, în mod implicit. Puteți schimba perioada din meniul de caracteristici NFC.

  → Meniu Hamburger → Setări → Caracteristici scanare NFC → Uniformizați libre 3 când se utilizează metoda xxx

  ![xDrip advanced settings Libre 2 & raw values](../images/xDrip_Libre3_Smooth.png)



### Pasul 3: Porniți senzorul în xDrip

In xDrip start the sensor with "Start Sensor" and "not today". Nu este necesar să țineți telefonul mobil pe senzor. De fapt, "Start Senzor" nu va porni fizic niciun senzor Libre 3 sau nu va interacționa cu aceștia în vreun caz. This is simply to indicate xDrip that a new sensor is delivering blood sugar levels. Dacă sunt disponibile, introduceți două valori măsurate ale glicemiei capilare pentru calibrarea inițială. Now the blood glucose values should be displayed in xDrip every 5 minutes. Valorile pierdute, spre exemplu pentru că ați fost prea departe de telefon, nu vor fi recuperate înapoi.

Așteptați cel puțin 15-20 minute dacă nu există încă date.

After a sensor change xDrip will automatically detect the new sensor and will delete all calibration data. Puteți să vă verificați glicemia după activare și să faceți o nouă calibrare inițială.

### Step 4: Configure AAPS

- Vedeți [aici](#juggluco-to-xdrip) și reveniți.

- If **AAPS** does not receive BG values when phone is in airplane mode, use "Identify receiver"
- Turn off Smoothing (done in xDrip already)

## Schimbări ulterioare ale senzorilor

1. Deschide Juggluco și notează numărul de serie al senzorului existent

![Număr de serie Libre](../images/libre3/step_13.jpg)

2. Acum pur și simplu scanați noul senzor cu cititorul NFC al telefonului. Juggluco va afișa o notificare în cazul în care procesul a fost inițiat cu succes.
3. Când sunteți gata să dezactivați senzorul vechi, atunci deschideți meniul Juggluco prin apăsare oriunde în spațiul gol din colțul din stânga sus al ecranului.
4. Selectați senzorul expirat și apăsați "Terminare"

![Opriți senzorul](../images/libre3/step_14.jpg)

Note: When two sensors are active Juggluco will send the most recent value from either sensor to xDrip. If the sensors are not calibrated and reading BG similarly, this may result in jumpy BG values being reported to xDrip. Dacă închideți senzorul greșit, îl puteți reactiva prin simpla scanare a senzorului.

## Comutați senzorul între aplicațiile Libre 3 și Juggluco

Dacă senzorul a fost pornit cu un cont Libreview conectat, este de asemenea posibilă comutarea între Juggluco și aplicația Libre 3 ca destinatar. Acest lucru necesită următorii pași:

1. Instalați aplicația Libre 3 din Google Playstore
2. Configurați aplicația Libre 3 cu contul Libreview cu care a fost activat senzorul.
3. Opriți forțat aplicația Juggluco în setările Android.
4. În meniul Libre 3, apăsați pe "Start Senzor", selectați "Da", "Următorul" și scanați senzorul dumneavoastră.
5. După câteva minute, valorile glicemiei trebuie să fie vizibile în aplicația Libre 3.

Pentru a trece de la aplicația Libre 3 la Juggluco, trebuie să opriți forțat aplicația Libre 3 din setările Android și să treceți la Pasul 1 & 2.

(libre3-experiences-and-troubleshooting)=
## Experiențe și depanări

### Depanarea Libre3 -> Conexiune Juggluco

- Asigurați-vă că folosiți o versiune curentă a aplicației Juggluco
- Verificați setările în conformitate cu acest ghid
- Uneori ar trebui să forțați oprirea aplicației Libre 3 și Juggluco și repornirea acesteia.
- Dezactivați Bluetooth și activați-l din nou
- Așteptați ceva timp sau încercați să închideți Juggluco
- Versiunile mai vechi de Juggluco (sub 2.9.6) nu trimit date ulterioare de la senzorul Libre3 la dispozitive conectate (spre exemplu Juggluco pe WearOS). Este posibil să fie nevoie să apăsați pe "Retrimiteți datele" în aplicația Libre3 modificată (meniul Juggluco).

### Asistență suplimentară

Instrucțiuni originale: [jkaltes website](https://www.juggluco.nl/Juggluco/libre3/)

Depozitul suplimentar Github: [Link Github](https://github.com/maheini/FreeStyle-Libre-3-patch)
