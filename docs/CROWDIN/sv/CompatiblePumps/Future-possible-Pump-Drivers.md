# Framtida (möjliga) pumpdrivrutiner

Det här är en lista över några pumpar som finns på marknaden, hur de stöds i andra loop-system och hur de stöds i AAPS. I slutet finns information om vad en pump behöver för att kunna användas med loop (”loopbar”).

    {contents} Innehåll
    :depth: 1
    :local: true

## Pumpar som håller på att integreras i AAPS

**Kommer snart:** drivrutiner för de här pumparna utvecklas och körs redan i testversioner.

Omnipod 5 ([Webbplats](https://www.omnipod.com/))

![Drivrutin för Omnipod 5 under utveckling](../images/future-pumps/omnipod5-driver.png)

Tandem: t:Mobi ([Webbplats](https://www.tandemdiabetes.com/))

![Drivrutin för Tandem t:Mobi under utveckling](../images/future-pumps/tandem-mobi-driver.png)

## Pumpar som är loopbara

### Kaleido ([Webbplats](https://www.hellokaleido.com/))

**Loopstatus:** Pumpen är en kandidat för loop, men protokollet är okänt för närvarande. Tillverkaren är inte intresserad av öppen källkod.

**Hårdvara som krävs för AAPS:** Ingen. Den verkar ha Bluetooth.

### Tandem: t:slim X3 ([Webbplats](https://www.tandemdiabetes.com/about-us/pipeline))

**Loopstatus:** Möjlig framtida kandidat för loop. Förhoppningen är att t:slim X3 ska kunna styras helt från en telefon, vilket skulle göra stöd i AAPS möjligt, men tidsplan och funktioner är ännu okända.

**Hårdvara som krävs för AAPS:** Ingen. Den förväntas ha Bluetooth.

**Kommentarer:** Ännu inte släppt. t:slim X3 verkar gång på gång få lägre prioritet i Tandems planer, till förmån för t:Mobi (även en slanglös version) och Sigi (deras pod-pump).

### Twiist ([Webbplats](https://www.twiist.com/))

**Loopstatus:** Kandidat för loop.

**Hårdvara som krävs för AAPS:** Ingen. Den har Bluetooth.

### Willcare Insulin pump ([Webbplats](http://shinmyungmedi.com/en/))

**Loopstatus:** Just nu är den inte en kandidat för loop, men deras personal har kontaktat oss och de är intresserade av att göra pumpen loopbar (det verkar bara saknas kommandon för att hämta och ställa in profil).

**Hårdvara som krävs för AAPS:** Ingen. Den verkar ha Bluetooth.

**Kommentarer:** Eftersom företaget är intresserat av integration med AAPS kan de kanske göra implementationen själva.

### Ypsopump ([Webbplats](https://www.ypsomed.com/))

**Loopstatus:** Kandidat för loop. Pumpens Bluetooth-protokoll har bakåtkompilerats (reverse engineering) av communityn, så det är i princip möjligt att kommunicera med den.

**Hårdvara som krävs för AAPS:** Ingen. Den har Bluetooth.

**Kommentarer:** Ypsopump skyddar sin Bluetooth-kommunikation med stark kryptering från tredje part. Det är tekniskt krävande att arbeta med den, vilket gör det svårt att bygga och underhålla en pålitlig drivrutin. Det finns ännu ingen AAPS-drivrutin som är klar för vardagsbruk.

## Pumpar som inte säljs längre (företagen finns inte längre)

### Animas Vibe

### Animas Ping

### Cellnovo

### Accu-Chek Insight

**Kommentarer:** Supporten upphörde i mars 2025.

## Pumpar som inte är loopbara

### Medtronic Bluetooth

**Kommentarer:** Medtronic [drog sig ur](https://www.tidepool.org/blog/tidepool-loop-partner-update-ace-pumps).

### Tandem: t:slim X2 ([Webbplats](https://www.tandemdiabetes.com/))

**Kommentarer:** Tandems Bluetooth-protokoll har bakåtkompilerats (reverse engineering), men med t:slim X2 kan bara bolusar ges – basalen kan inte styras – så den kan inte användas säkert för loop. Det kommer troligen inte att ändras om inte Tandem tillåter full styrning av X2 från en telefon, vilket hellre väntas komma med t:slim X3.

### Accu-Chek Solo

**Kommentarer:** Communityn har inte lyckats kommunicera med pumpen Solo.

## Krav för att en pump ska vara loopbar

**Förutsättning**

- Pumpen måste ha stöd för någon form av fjärrstyrning. (BT, radiofrekvens m.m.)
- Protokollet är knäckt/dokumenterat eller liknande.

**Minimikrav**

- Ställa in tillfällig basaldos
- Hämta status
- Avbryta tillfällig basaldos

**För oref1 (SMB) eller för att ge bolus:**

- Ge bolus

**Bra att ha**

- Avbryta bolus
- Hämta basalprofil (nästan ett krav)
- Ställa in basalprofil (bra att ha)
- Läsa historik 

**Övrigt (krävs inte men bra att ha)**

- Ställa in förlängd bolus
- Avbryta förlängd bolus
- Läsa historik
- Läsa TDD

### Stöd för andra pumpar

Om det finns andra pumpar som du vill veta status för, kontakta oss på Discord.