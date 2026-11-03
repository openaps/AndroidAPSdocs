# Granska dina data

## Historikläsaren i AAPS

**AAPS** sparar all din historik (**BG**, behandlingar, basal, målvärden, **Profilbyte**, …) i en lokal databas på telefonen. Databasen ingår inte i [exporten av inställningar](../Maintenance/ExportImportSettings.md). Du kan granska den i **AAPS** med **Historikläsare** och skärmen **Statistik** som beskrivs nedan. För granskning och rapporter över längre tid kan du ladda upp dina data till [Nightscout](../SettingUpAaps/Nightscout.md) eller [Tidepool](../SettingUpAaps/Tidepool.md).

Historiken i **AAPS** kan granskas i **Historikläsare**: öppna **menyn** (☰) och välj **Historikläsare**.

![Historikläsare](../images/v4/Screens/history_browser.png)

- Tryck på **datumkortet** för att välja den dag du vill granska.
- Graferna öppnas utzoomade och visar **hela den valda dagen**. Nyp med två fingrar för att zooma in på en del av dagen.
- Använd pilarna **<** och **>** för att gå en dag bakåt eller framåt, och **Nu** för att gå tillbaka till i dag.
- Graferna visar samma data som graferna på huvudskärmen (BG, behandlingar, basal, IOB, COB, aktivitet, avvikelser ...).

(reviewing-statistics)=
## Statistik i AAPS

**AAPS** ger grundläggande statistik för uppföljning.

De flesta värden bygger på [rekommendationerna](https://diabetesjournals.org/care/article/46/Supplement_1/S97/148053/6-Glycemic-Targets-Standards-of-Care-in-Diabetes) från ADA 2023.

Öppna dem genom att öppna **menyn** (☰) och välja **Statistik**.

![Menyn med Statistik](../images/Maintenance/statistics.png)

Skärmen **Statistik** har fyra flikar: **Insulin**, **Tid i målområde**, **Glukos** och **Cykel**. Tryck på en flik, eller svep åt vänster eller höger för att byta flik.

(reviewing-tdd)=
### Fliken Insulin: Total daglig dos

Kortet **Total daglig dos** visar en rad per dag för de senaste dagarna (upp till en vecka) som **AAPS** har insulindata för, sedan deras **Medel** och sist **Idag** hittills. Direkt efter att du har installerat **AAPS** visas bara **Idag**. Kolumnerna är:

- **Basal**: bara basal.
- **Bolus**: summan av bolusbehandlingar och SMB:er.
- **TDD totalt**: total daglig insulindos (**TDD**), summan av bolus- och basalinsulin som gavs under dagen.
- **Kolhydrater**: angivna kolhydrater och eCarbs.

Avsnittet **TDD** beräknas när du öppnar sidan, och beräkningen tar några sekunder. Tryck på **Räkna om** för att beräkna det igen.

![Statistik: fliken Insulin med total daglig dos](../images/Maintenance/statistics2.png)

**TDD** är ditt bolus- plus basalinsulin per dag. Vissa läkare använder – särskilt för nya pumpanvändare – en fördelning mellan basal och bolus på 50:50: den totala basen för basal (**TBB**, summan av dina basaldoser under 24 timmar) bör då vara ungefär hälften av TDD. Andra föredrar en TBB på 32 % till 37 % av TDD.

Som de flesta tumregler har detta begränsad verklig giltighet. Din diabetes kan skilja sig från andras!

### Fliken Tid i målområde

Tid i målområde (**TIR**): 70-180 mg/dl eller 3,9-10 mmol/l.

Information om **TIR** finns för 7 och 30 dagar, beroende på hur mycket data som finns i databasen i **AAPS**.

Statistik för tid i snävt målområde (TITR) 70-140 mg/dl eller 3,9-7,8 mmol/l finns nedan (skärmen visar detta intervall som 70-141).

**Diskutera målen med din diabetesläkare**

Din diabetes kan skilja sig från andras. Diskutera alla föreslagna mål med din diabetesläkare eller ditt vårdteam. Om du använder statistiken i AAPS rätt kan den vara ett bra verktyg för att följa trender i __BG__ och se hur det går.

![Statistik](../images/Maintenance/statistics3.png)

Längre ner visar kortet **Dexcom TIR** detaljerad statistik för **TIR** under 14 dagar.

**SD**: standardavvikelse, ett [mått](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3125941/) på hur mycket BG varierar (högst = sämst).

HbA1c: en uppskattning av det glykerade hemoglobinet, baserad på medelvärdet av CGM-mätningarna. Detta är ett riktvärde som kanske inte stämmer med HbA1c från blodprov.

![Statistik](../images/Maintenance/statistics4.png)

(reviewing-statistics-agp)=
### Fliken Glukos: ambulatorisk glukosprofil (AGP)

**Ambulatorisk glukosprofil** (**AGP**) visar hur ditt glukos brukar röra sig under dagen. Välj period med knapparna högst upp: **Idag**, **24h**, **7d**, **30d** eller **90d**.

- **Diagrammet**: ett dygn från midnatt till midnatt. Linjen är **Medianvärde** (hälften av dina värden vid den timmen var lägre, hälften var högre). Runt linjen visar ett band den mittersta hälften av dina värden (**25–75%**) och ett bredare band de flesta av dem (**10–90%**). Ett smalt band betyder att ditt glukos är ungefär detsamma från dag till dag vid den timmen. Streckade linjer visar din **LÅG-markering**, 140 mg/dl (7,8 mmol/l) och din **HÖG-markering**.
- **Glykemisk översikt**: tiden inom ditt målområde, inom det snäva målområdet (70–140 mg/dl eller 3,9–7,8 mmol/l), över ditt målområde och under det, sedan ditt **Medelvärde** och **Medianvärde** för glukos. Ditt målområde är **LÅG-markering** och **HÖG-markering** som ställs in i [Gränsvärden för visualisering](#Preferences-range-for-visualization).
- **eA1c** och **GMI**: två uppskattningar av HbA1c som beräknas från dina CGM-värden. Precis som HbA1c ovan stämmer de kanske inte med HbA1c från dina blodprov.
- **SD** (standardavvikelse) och **CV** (variationskoefficient): hur mycket ditt glukos varierar. Ett lägre värde betyder jämnare glukos.
- **Dagar**: hur många dagar med CGM-data som användes.

![Statistik: fliken Glukos med AGP-diagrammet](../images/Maintenance/statistics_agp.png) ![Statistik: Glykemisk översikt och glukosmått](../images/Maintenance/statistics_agp2.png)

Under AGP ritar kortet **Glukospentagon (CGP)** fem mått på ditt glukos under de senaste 14 dagarna som en femhörning. En mindre femhörning betyder bättre glukoskontroll.

![Statistik: Glukospentagon](../images/Maintenance/statistics_cgp.png)

### Fliken Cykel: Cykliskt TDD-mönster

**Cykliskt TDD-mönster** lägger dina dagliga insulinsummor ovanpå varandra i cykler på 28 dagar, så att du lättare ser mönster som återkommer. Varje cykel ritas som en linje (**Individuella cykler**), tillsammans med deras medelvärde.

- **Rå TDD** / **Filtrerad TDD**: välj total daglig dos som den gavs, eller TDD minus insulinet för kolhydrater.
- **Cykeloffset**: flyttar starten på cykeln (0 till 27 dagar).

Det behövs minst 56 dagar med data (2 cykler). Med mindre data visar kortet **Inte tillräckligt med data (behöver minst 56 dagar för 2 cykler)**. Mönstret beräknas bara när du öppnar fliken **Cykel**, eftersom det läser data för 168 dagar.

(aaps-screens-treatments)=
## Behandlingshistorik

Öppna **menyn** (☰) i det övre vänstra hörnet av huvudskärmen och välj **Behandlingshistorik**. I den här vyn kan du se och ändra historiken för följande behandlingar, var och en på sin egen flik (svep raden med flikar för att se alla):

* Kolhydrater och bolus
* [Extended bolus](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
* Tillfällig basal
* [Tillfälligt målvärde](../DailyLifeWithAaps/TempTargets.md)
* [Profilbyte](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
* Careportal: anteckningar och Careportal-poster
* Körläge: historik över loopstatus
* Angivet av användare: andra anteckningar som inte skickas till Nightscout

I slutet av varje rad visar små ikoner varifrån data kommer eller vart de har skickats:
* Ikonen **Nightscout** (Nightscouts logotyp): data kommer från eller har sparats i Nightscout
* Ikonen **Pump**: data kommer från pumphistoriken (pumpen har behandlat dem)
* Ikonen **Papperskorg**: posten har raderats (den visas bara när du visar raderade poster med ikonen **öga** uppe till höger)

(screens-bolus-carbs)=
### Kolhydrater och bolus

![Kolhydrater och bolus](../images/TreatmentsView1.png)

På den här fliken ser du loggen över bolusar och kolhydrater. Varje bolus (rad **1**) visar kvarvarande IOB för bolusen bredvid insulinmängden. Bolusen kan komma från:
* Måltid (angiven manuellt med knapparna Insulin, Snabbknapp eller Kalkylator)
* SMB, när du använder SMB-funktionen

Kolhydratposterna (rad **2**) visas med sin mängd i gram.

Om du har använt [Kalkylator](#aaps-screens-bolus-wizard) för att beräkna insulindosen kan du trycka på texten ”Calc” på bolusraden för att se hur bolusen beräknades.

Beroende på vilken pump du använder kan insulin och kolhydrater visas på en enda rad, eller på flera rader: en för beräkningen, en för kolhydraterna och en för själva bolusen.

Behandlingshistoriken kan användas för att rätta felaktiga kolhydratposter (_t.ex._ om du har över- eller underskattat kolhydraterna). Observera att det inte går att redigera en befintlig post. Gör så här i stället:

1. Kontrollera och kom ihåg aktuell COB och IOB på huvudskärmen.
2. Beroende på pumpen kan kolhydrater visas på samma rad som insulinet eller som en egen post (t.ex. med Dana RS).
3. Ta bort posten med fel mängd kolhydrater: tryck på papperskorgsikonen, välj raderna som ska tas bort och tryck sedan på papperskorgsikonen igen för att slutföra.
4. Kontrollera att kolhydraterna verkligen har tagits bort genom att titta på COB på huvudskärmen igen.
5. Gör samma sak för IOB om det bara finns en rad med både kolhydrater och insulin.

   → Om kolhydraterna inte tas bort som du tänkt, och du lägger till nya kolhydrater enligt beskrivningen här (6.), blir COB för högt och det kan leda till för mycket insulin.

6. Ange rätt mängd kolhydrater igen (**Behandlingar → Kolhydrater** i den nedre navigeringen, eller en knapp **Kolhydrater** i [Snabbstart](#quicklaunch)) och se till att ange rätt tid för händelsen.
7. Om det bara finns en rad med både kolhydrater och insulin måste du också lägga till insulinmängden. Se till att ange rätt tid för händelsen och kontrollera IOB på huvudskärmen när du har bekräftat den nya posten.

### Tillfällig basal

![Tillfällig basal](../images/TreatmentsView2.png)

De **tillfälliga basaler** som loopen har satt visas här. När en post fortfarande påverkar IOB visas informationen bredvid dosen (rad **1**). Det kan vara:
* Positiv IOB om den tillfälliga basalen var högre än den som är inställd i profilen
* Negativ IOB för en tillfällig basal på noll (som på rad **1**) eller om den tillfälliga basalen var lägre än den som är inställd i profilen

Att radera posterna påverkar bara dina rapporter i Nightscout och förvränger troligen din verkliga IOB – det rekommenderas inte.

Till vänster på en rad betyder ett rött S ”Suspend” (pausad): det händer när basal inte ges just nu. Det är normalt till exempel medan du byter pod.

### Tillfälligt målvärde

![Tillfälligt målvärde](../images/TreatmentsView3.png)

Här ser du historiken över tillfälliga målvärden.

### Profilbyte

![Profilbyte](../images/TreatmentsView4.png)

Här ser du historiken över profilbyten. Du kan se flera poster varje gång du byter profil: rad **1**, som sparas både i NS och i pumphistoriken, motsvarar själva bytet. Rad **2**, som sparas i Nightscout men inte i pumphistoriken, motsvarar användarens begäran om ett profilbyte.

Att radera posterna påverkar bara dina rapporter i Nightscout och ändrar aldrig den aktuella profilen.

Du kan använda knappen **Klona** på rad **2** för att göra en kopia av ett **Profilbyte**. Se [Din AAPS-profil > Hantera dina profiler](#your-aaps-profile-clone-profile-switch) för mer information.

### Careportal

![Careportal](../images/TreatmentsView5.png)

Den här fliken visar alla anteckningar och Careportal-poster som har sparats i Nightscout.

(AapsScreens-running-mode)= (aaps-screens-running-mode)=
### Körläge

![Körläge](../images/TreatmentsView6.png)

Den här fliken visar historiken över ändringar av [loopstatus](#AapsScreens-loop-status): öppen, sluten, LGS, pausad, frånkopplad.

### Angivet av användare

![Angivet av användare](../images/screens/treatments_user_entry.png)

Den här fliken listar åtgärder som har gjorts i **AAPS** av användaren eller av en **Automation** (byte av loopläge, profilbyten, behandlingar, export av inställningar ...). De här posterna skickas inte till Nightscout.

------

## Vad är skillnaden mellan Nightscout och Tidepool?

Nightscout kan lagra data från **AAPS** åt dig och har många [rapportverktyg](https://nightscout.github.io/nightscout/reports/).

Tidepool låter dig däremot [granska dina data](https://www.tidepool.org/viewing-your-data) och gör det [enkelt att dela dem med ditt diabetesteam](https://www.tidepool.org/providers/how-it-works#tidepool-data-platform).