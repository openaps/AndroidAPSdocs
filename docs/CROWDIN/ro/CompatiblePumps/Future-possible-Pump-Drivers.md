# Controlere de pompe (posibile) viitoare

Aceasta este o listă a unor pompe care circulă, stadiul suportului pentru ele în oricare dintre sistemele de buclă închisă și apoi stadiul suportului în AAPS. La final există niște informații, ce este necesar pentru ca o pompă să fie capabilă de buclă.

## Pompe care pot fi folosită în buclă

### Kaleido ([Pagina de pornire](https://www.hellokaleido.com/))

**Stare buclă:** Pompa este un candidat la buclă, dar protocolul este necunoscut în acest moment. Niciun interes pentru sursă deschisă din partea vânzătorului.

**Cerință hardware pentru AAPS:** Nici una. Se pare că este activată prin Bluetooth.

### Tandem: t:slim X2 ([Pagina de pornire](https://www.tandemdiabetes.com/))

**Stare buclă:** Încă nu se poate face bucla.

În timp ce, în trecut, compania a decis să nu permită ca pompele sale să fie controlate de dispozitive externe, se pare că ultimii câțiva ani au schimbat radical situația. Compania a decis să își îmbunătățească pompa t:slim X2 pentru a putea fi controlată de la distanță (prin intermediul aplicației t:connect), ceea ce înseamnă că se deschid noi posibilități și că am putea spera să controlăm pompa prin intermediul AAPS pe viitor. Un nou firmware pentru pompă este planificat să fie lansat în curând (anul acesta sau anul viitor, înainte să apară pompa fără fir t:sport). Încă nu există detalii, ce operațiuni vor fi posibile de la t:connect (bolus cu siguranță, orice altceva este necunoscut).

**Cerință hardware pentru AAPS:** Nici una. Se pare că este activată prin Bluetooth.

### Tandem: t:Mobi & t:slim X3 & t:Mobi Tubeless ([Pagina de pornire](https://www.tandemdiabetes.com/about-us/pipeline))

**Stare buclă:** Toate cele 3 pompe vor fi candidate pentru buclă.

În așteptarea lansării t:mobi în Europa (celelalte două nu sunt încă lansate nicăieri). Dezvoltarea suportului AAPS pentru t:mobi a început deja și ar trebui să fie disponibil până la sfârșitul anului 2025 (a se vedea mai multe informații pe Discord).

**Cerință hardware pentru AAPS:** Nici una. Se pare că este activată prin Bluetooth.

### Pompă de insulină Willcare ([Pagina de start](http://shinmyungmedi.com/en/))

**Starea buclei:** Momentan nu este un candidat la buclă, dar am fost contactați de personalul lor și sunt interesați să își extindă pompa pentru a se putea face buclă (în acest moment, cred că lipsesc doar comenzile pentru a obține / seta profilul).

**Cerință hardware pentru AAPS:** Nici una. Se pare că este activată prin Bluetooth.

**Comentarii:** Deoarece firma este interesată de integrarea cu AAPS, ar putea face implementarea chiar ei.

## Pompele nu se mai vând (companiile nu mai funcționează)

### Animas Vibe

### Animas Ping

### Cellnovo

### Accu-Chek Insight

**Comentarii:** Sfârșitul suportului martie 2025.

## Pompe cu care nu se poate face buclă

### Bluetooth Medtronic

**Comentarii:** Medtronic [s-a retras](https://www.tidepool.org/blog/tidepool-loop-partner-update-ace-pumps).

### Accu-Chek Solo

**Comentarii:** Niciun succes al comunității în comunicarea cu pompa Solo.

### Ypsomed Pump

**Comentarii:** Ypso a adăugat o criptare terță foarte puternică.

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