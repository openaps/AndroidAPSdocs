# Controlere de pompe (posibile) viitoare

Aceasta este o listă a unor pompe care circulă, stadiul suportului pentru ele în oricare dintre sistemele de buclă închisă și apoi stadiul suportului în AAPS. La final există niște informații, ce este necesar pentru ca o pompă să fie capabilă de buclă.

    {contents} Table of contents
    :depth: 1
    :local: true

## Pumps in AAPS integration phase

**Coming soon:** drivers for these pumps are in development and already running in test builds.

Omnipod 5 ([Homepage](https://www.omnipod.com/))

![Omnipod 5 driver in development](../images/future-pumps/omnipod5-driver.png)

Tandem: t:Mobi ([Homepage](https://www.tandemdiabetes.com/))

![Tandem t:Mobi driver in development](../images/future-pumps/tandem-mobi-driver.png)

## Pompe care pot fi folosită în buclă

### Kaleido ([Pagina de pornire](https://www.hellokaleido.com/))

**Stare buclă:** Pompa este un candidat la buclă, dar protocolul este necunoscut în acest moment. Niciun interes pentru sursă deschisă din partea vânzătorului.

**Cerință hardware pentru AAPS:** Nici una. Se pare că este activată prin Bluetooth.

### Tandem: t:slim X3 ([Homepage](https://www.tandemdiabetes.com/about-us/pipeline))

**Loop status:** Possible future Loop candidate. The hope is that t:slim X3 will allow full control from a phone, which would enable AAPS support, but the timeline and features are still unknown.

**Cerință hardware pentru AAPS:** Nici una. It is expected to be Bluetooth enabled.

**Comments:** Not yet released. t:slim X3 appears to be repeatedly deprioritized on Tandem's roadmap in favour of t:Mobi (including a tubeless version) and Sigi (their patch pump).

### Twiist ([Homepage](https://www.twiist.com/))

**Loop status:** Loop candidate.

**Cerință hardware pentru AAPS:** Nici una. It is Bluetooth enabled.

### Pompă de insulină Willcare ([Pagina de start](http://shinmyungmedi.com/en/))

**Starea buclei:** Momentan nu este un candidat la buclă, dar am fost contactați de personalul lor și sunt interesați să își extindă pompa pentru a se putea face buclă (în acest moment, cred că lipsesc doar comenzile pentru a obține / seta profilul).

**Cerință hardware pentru AAPS:** Nici una. Se pare că este activată prin Bluetooth.

**Comentarii:** Deoarece firma este interesată de integrarea cu AAPS, ar putea face implementarea chiar ei.

### Ypsopump ([Homepage](https://www.ypsomed.com/))

**Loop status:** Loop candidate. The pump's Bluetooth protocol has been reverse-engineered by the community, so communicating with it is possible in principle.

**Cerință hardware pentru AAPS:** Nici una. It is Bluetooth enabled.

**Comments:** The Ypsopump protects its Bluetooth communication with heavy third-party encryption. Working with it is technically demanding, which makes building and maintaining a reliable driver hard. There is no production-ready AAPS driver yet.

## Pompele nu se mai vând (companiile nu mai funcționează)

### Animas Vibe

### Animas Ping

### Cellnovo

### Accu-Chek Insight

**Comentarii:** Sfârșitul suportului martie 2025.

## Pompe cu care nu se poate face buclă

### Bluetooth Medtronic

**Comentarii:** Medtronic [s-a retras](https://www.tidepool.org/blog/tidepool-loop-partner-update-ace-pumps).

### Tandem: t:slim X2 ([Pagina de pornire](https://www.tandemdiabetes.com/))

**Comments:** The Tandem Bluetooth protocol has been reverse-engineered, but on the t:slim X2 only boluses can be delivered — basal delivery cannot be controlled — so it cannot be used safely for looping. This is unlikely to change unless Tandem allows full control of the X2 from a phone, which would more probably arrive with the t:slim X3 instead.

### Accu-Chek Solo

**Comentarii:** Niciun succes al comunității în comunicarea cu pompa Solo.

## Cerințe pentru pompele cu care se poate face Buclă

**Cerințe preliminare**

- Pompa trebuie să accepte un fel de control la distanță. (BT, radio frecvență etc.)
- Protocolul este descifrat/documentat/șamd

**Cerință minimă**

- Setează Rata Bazală Temporară
- Preia Starea
- Anulează Rata Bazală Temporară

**Pentru oref1(SMB) sau Bolus:**

- Setează bolusul

**Bine de avut**

- Anulează Bolus
- Preia Profilul Bazalei (aproape obligatoriu)
- Setare Profil Bazală (bine de avut)
- Citește Istoric 

**Altele (nu sunt necesare, dar bune de avut)**

- Setați bolus extins
- Renunță la bolusul extins
- Citește Istoric
- Citiți DTZ (Doză Totală Zilnică)

### Suport pentru alte pompe

Dacă aveți și alte pompe a căror starea doriți să o aflați, vă rugăm să ne contactați pe Discord.