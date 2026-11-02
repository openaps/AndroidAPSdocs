# Framtidige (mulige) pumpedrivere

Dette er en liste over noen pumper på markedet, status for støtte i andre loop-systemer og status i AAPS. Til slutt står det litt om hva en pumpe trenger for å være «loop-klar».

    {contents} Innhold
    :depth: 1
    :local: true

## Pumper i integrasjonsfase i AAPS

**Kommer snart:** drivere for disse pumpene er under utvikling og kjører allerede i testbygg.

Omnipod 5 ([Hjemmeside](https://www.omnipod.com/))

![Omnipod 5-driver under utvikling](../images/future-pumps/omnipod5-driver.png)

Tandem: t:Mobi ([Hjemmeside](https://www.tandemdiabetes.com/))

![Tandem t:Mobi-driver under utvikling](../images/future-pumps/tandem-mobi-driver.png)

## Pumper som kan loopes

### Kaleido ([Hjemmeside](https://www.hellokaleido.com/))

**Loopstatus:** Pumpen er en loop-kandidat, men protokollen er ukjent for øyeblikket. Ingen interesse for åpen kildekode fra leverandøren.

**Maskinvarekrav for AAPS:** Ingen. Den ser ut til å ha Bluetooth (BT).

### Tandem: t:slim X3 ([Hjemmeside](https://www.tandemdiabetes.com/about-us/pipeline))

**Loopstatus:** Mulig framtidig loop-kandidat. Håpet er at t:slim X3 vil tillate full styring fra en telefon, noe som ville gjøre AAPS-støtte mulig, men tidsplanen og funksjonene er fortsatt ukjente.

**Maskinvarekrav for AAPS:** Ingen. Den forventes å ha Bluetooth.

**Kommentarer:** Ikke lansert ennå. t:slim X3 ser ut til å bli nedprioritert gang på gang i Tandems planer til fordel for t:Mobi (inkludert en slangeløs versjon) og Sigi (patch-pumpen deres).

### Twiist ([Hjemmeside](https://www.twiist.com/))

**Loopstatus:** Loop-kandidat.

**Maskinvarekrav for AAPS:** Ingen. Den har Bluetooth.

### Willcare insulinpumpe ([Hjemmeside](http://shinmyungmedi.com/en/))

**Loopstatus:** For øyeblikket er den ikke en loop-kandidat, men folk fra selskapet kontaktet oss, og de er interessert i å gjøre pumpen loop-klar (den ser ut til bare å mangle kommandoer for å hente/angi profil).

**Maskinvarekrav for AAPS:** Ingen. Den ser ut til å ha Bluetooth (BT).

**Kommentarer:** Siden selskapet er interessert i integrasjon med AAPS, kan det hende de gjør implementeringen selv.

### Ypsopump ([Hjemmeside](https://www.ypsomed.com/))

**Loopstatus:** Loop-kandidat. Pumpens Bluetooth-protokoll er reversert («reverse-engineered») av fellesskapet, så det er i prinsippet mulig å kommunisere med den.

**Maskinvarekrav for AAPS:** Ingen. Den har Bluetooth.

**Kommentarer:** Ypsopump beskytter Bluetooth-kommunikasjonen sin med kraftig tredjeparts kryptering. Å jobbe med den er teknisk krevende, og det gjør det vanskelig å bygge og vedlikeholde en pålitelig driver. Det finnes ennå ingen produksjonsklar AAPS-driver.

## Pumper som ikke selges lenger (selskaper som ikke lenger er i drift)

### Animas Vibe

### Animas Ping

### Cellnovo

### Accu-Chek Insight

**Kommentarer:** Støtten opphørte i mars 2025.

## Pumper som ikke kan loopes

### Medtronic Bluetooth

**Kommentarer:** Medtronic [trakk seg](https://www.tidepool.org/blog/tidepool-loop-partner-update-ace-pumps).

### Tandem: t:slim X2 ([Hjemmeside](https://www.tandemdiabetes.com/))

**Kommentarer:** Tandems Bluetooth-protokoll er reversert, men på t:slim X2 kan bare boluser gis – basaltilførselen kan ikke styres – så den kan ikke brukes trygt til looping. Dette vil neppe endre seg med mindre Tandem tillater full styring av X2 fra en telefon, og det vil mer sannsynlig komme med t:slim X3 i stedet.

### Accu-Chek Solo

**Kommentarer:** Fellesskapet har ikke lyktes med å kommunisere med Solo-pumpen.

## Krav for at pumper skal kunne loopes

**Forutsetning**

- Pumpen må støtte en form for fjernstyring. (BT, radiofrekvens osv.)
- Protokollen er hacket/dokumentert osv.

**Minimumskrav**

- Angi midlertidig basaldose
- Hent status
- Avbryt midlertidig basaldose

**For oref1 (SMB) eller for å gi bolus:**

- Angi bolus

**Bra å ha**

- Avbryt bolus
- Hent basalprofil (nesten et krav)
- Angi basalprofil (fint å ha)
- Les historikk 

**Annet (ikke påkrevd, men bra å ha)**

- Angi forlenget bolus
- Avbryt forlenget bolus
- Les historikk
- Les TDD

### Støtte for andre pumper

Hvis du har andre pumper du vil se status for, ta kontakt med oss på Discord.