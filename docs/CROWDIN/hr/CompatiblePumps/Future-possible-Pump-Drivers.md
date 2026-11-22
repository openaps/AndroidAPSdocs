# Budući (mogući) upravljački programi pumpi

Ovo je popis nekih pumpi na tržištu, status njihove podrške u drugim sustavima petlje i njihov status u AAPS-u. Na kraju su informacije o tome što pumpa treba da bi bila „pogodna za petlju“.

    {contents} Sadržaj
    :depth: 1
    :local: true

## Pumpe u fazi integracije u AAPS

**Uskoro:** upravljački programi za ove pumpe su u razvoju i već rade u testnim izradama.

Omnipod 5 ([početna stranica](https://www.omnipod.com/))

![Upravljački program za Omnipod 5 u razvoju](../images/future-pumps/omnipod5-driver.png)

See [Omnipod 5](../CompatiblePumps/Omnipod5.md) for how the driver in development works.

Tandem: t:Mobi ([početna stranica](https://www.tandemdiabetes.com/))

![Upravljački program za Tandem t:Mobi u razvoju](../images/future-pumps/tandem-mobi-driver.png)

## Pumpe koje se mogu koristiti s petljom

### Kaleido ([početna stranica](https://www.hellokaleido.com/))

**Status za petlju:** Pumpa je kandidat za petlju, ali protokol je za sada nepoznat. Proizvođač nije zainteresiran za otvoreni kod.

**Hardver potreban za AAPS:** nema. Čini se da ima Bluetooth.

### Tandem: t:slim X3 ([početna stranica](https://www.tandemdiabetes.com/about-us/pipeline))

**Status za petlju:** Mogući budući kandidat za petlju. Nada je da će t:slim X3 omogućiti potpuno upravljanje s telefona, što bi omogućilo podršku u AAPS-u, ali vremenski okvir i značajke još nisu poznati.

**Hardver potreban za AAPS:** nema. Očekuje se da će imati Bluetooth.

**Komentari:** Još nije izašla. Čini se da t:slim X3 u Tandemovim planovima stalno dobiva manju važnost u korist pumpe t:Mobi (uključujući verziju bez cijevi) i pumpe Sigi (njihove pumpe bez katetera).

### Twiist ([početna stranica](https://www.twiist.com/))

**Status za petlju:** Kandidat za petlju.

**Hardver potreban za AAPS:** nema. Ima Bluetooth.

### Inzulinska pumpa Willcare ([početna stranica](http://shinmyungmedi.com/en/))

**Status za petlju:** Trenutno nije kandidat za petlju, ali njihovo osoblje nam se javilo i zainteresirani su da pumpu prilagode za petlju (čini se da joj nedostaju samo naredbe za dohvaćanje/postavljanje profila).

**Hardver potreban za AAPS:** nema. Čini se da ima Bluetooth.

**Komentari:** Budući da je tvrtka zainteresirana za integraciju s AAPS-om, možda će sama napraviti implementaciju.

### Ypsopump ([početna stranica](https://www.ypsomed.com/))

**Status za petlju:** Kandidat za petlju. Zajednica je obrnutim inženjeringom otkrila Bluetooth protokol pumpe, pa je komunikacija s njom u načelu moguća.

**Hardver potreban za AAPS:** nema. Ima Bluetooth.

**Komentari:** Ypsopump štiti svoju Bluetooth komunikaciju jakim šifriranjem treće strane. Rad s tim šifriranjem tehnički je zahtjevan, pa je teško izraditi i održavati pouzdan upravljački program. Još ne postoji upravljački program za AAPS spreman za svakodnevnu upotrebu.

## Pumpe koje se više ne prodaju (tvrtke više ne posluju)

### Animas Vibe

### Animas Ping

### Cellnovo

### Accu-Chek Insight

**Komentari:** Kraj podrške u ožujku 2025.

## Pumpe koje se ne mogu koristiti s petljom

### Medtronic Bluetooth

**Komentari:** Medtronic je [odustao](https://www.tidepool.org/blog/tidepool-loop-partner-update-ace-pumps).

### Tandem: t:slim X2 ([početna stranica](https://www.tandemdiabetes.com/))

**Komentari:** Tandemov Bluetooth protokol otkriven je obrnutim inženjeringom, ali na t:slim X2 mogu se davati samo bolusi — isporukom bazala ne može se upravljati — pa se pumpa ne može sigurno koristiti s petljom. To se vjerojatno neće promijeniti osim ako Tandem ne dopusti potpuno upravljanje pumpom X2 s telefona, a to će vjerojatnije doći s t:slim X3.

### Accu-Chek Solo

**Komentari:** Zajednica nije uspjela komunicirati s pumpom Solo.

## Što pumpa treba da bi se mogla koristiti s petljom

**Preduvjet**

- Pumpa mora podržavati neku vrstu daljinskog upravljanja. (BT, radiofrekvencija itd.)
- Protokol je razbijen/dokumentiran/itd.

**Minimalni zahtjevi**

- Postavi privremenu bazalnu stopu
- Dohvati status
- Otkaži privremenu bazalnu stopu

**Za oref1 (SMB) ili davanje bolusa:**

- Postavi bolus

**Dobro je imati**

- Otkaži bolus
- Dohvati bazalni profil (gotovo obavezno)
- Postavi bazalni profil (dobro je imati)
- Čitaj povijest 

**Ostalo (nije obavezno, ali je dobro imati)**

- Postavi produženi bolus
- Otkaži produženi bolus
- Čitaj povijest
- Čitaj TDD

### Podrška za ostale pumpe

Ako želite znati status neke druge pumpe, javite nam se na Discordu.