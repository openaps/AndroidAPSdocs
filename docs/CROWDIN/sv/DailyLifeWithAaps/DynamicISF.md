(Open-APS-features-DynamicISF)=
# Dynamisk ISF (DynISF)

Tidigare, med **AMA** och **SMB**, angavs **ISF** i **Profil** och var fast för varje angiven period under dagen. Men i verkligheten är en persons **ISF** inte så fast. Den varierar med **BG**-nivån: vid högt BG behöver du mer insulin för att sänka ditt **BG** 50 mg/dl / 3 mmol/l än vid ett lägre **BG**. [Autosens](#Open-APS-features-autosens) var den första algoritmen som försökte lösa detta problem genom att justera **ISF** utanför måltiderna.

**Dynamisk ISF** (även kallad **DynISF**) har samma syfte men är mer avancerad, eftersom den kan användas hela tiden. Den rekommenderas bara för erfarna användare som har god kontroll över och god uppföljning av sitt **AAPS**. Läs [Att tänka på när du aktiverar dynamisk ISF](#dyn-isf-things-to-consider-when-activating-dynamicisf) nedan innan du provar.

```{admonition} CAUTION - Automations or Profile Percentage change
:class: warning

**Automatiseringar** ska alltid användas med försiktighet. Det gäller särskilt med **Dynamisk ISF**.

När du använder **Dynamisk ISF** ska du inaktivera alla tillfälliga ändringar av **Profil** som görs av en **Automation**-regel. Annars blir **Dynamisk ISF** för aggressiv med korrigeringsbolusar, och det kan leda till hypoglykemi. Det är just detta som är syftet med **Dynamisk ISF**, så **AAPS** behöver inte få extra instruktioner via Automation för att ge mer insulin vid höga **BG**.

```

För att använda **Dynamisk ISF** behöver databasen i **AAPS** minst 7 dagar av dina data från **AAPS**.

## Vad gör dynamisk ISF?

**Dynamisk ISF** anpassar insulinkänslighetsfaktorn (**ISF**) dynamiskt utifrån din:

- total daglig dos av insulin (**TDD**); och
- aktuella och förutsagda blodsockervärden.

När du använder **Dynamisk ISF** används **ISF**-värdena i **Profil** inte alls längre, utom som reserv om det inte finns tillräckligt med TDD-data i databasen i **AAPS** (*t.ex.* efter en ny installation av appen).

**SMB/AMA** - ett exempel på en **Profil** med statisk **ISF** som användaren har ställt in och som används av **SMB** och **AMA**.

![Statisk ISF](../images/DynamicISF/profile_viewer_isf.png)

**Dynamisk ISF** - ett exempel på en **ISF** som ändras enligt beräkningen i **Dynamisk ISF**.

![Dyn ISF](../images/DynamicISF/DynISF2.png)

Det röda inringade avsnittet visar: `profile ISF` -> `ISF as calculated by DynISF`. <br/> Om du trycker på detta avsnitt visas en dialog med mer information, till exempel den **ISF** som används för kalkylatorn och kolhydratabsorptionen (se [Andra användningar av ISF](#dynisf-other-usages-of-isf) nedan).

Värdet för **DynISF** kan också visas i en graf: tryck på **Lägg till graf** under graferna på huvudskärmen och välj **DISF** (variabel känslighet, VSENS på engelska). Den visas som en vit linje (längst ner i bilden ovan).

## Hur beräknas dynamisk ISF?

**Dynamisk ISF** använder Chris Wilsons modell för att bestämma **ISF** i stället för det fasta **ISF**-värdet som du har ställt in i **Profil**. En utförlig förklaring finns här (på engelska): [Chris Wilson on Insulin Sensitivity (Correction Factor) with Loop and Learn, 2/6/2022](https://www.youtube.com/watch?v=oL49FhOts3c).

Ekvationen för **Dynamisk ISF** är: `ISF = 1800 / ((TDD * DynISF Adjust Factor) * Ln (( current BG / insulin divisor) + 1 ))`

Variablerna i ekvationen förklaras nedan.<br/> Obs: `Ln` betyder naturlig logaritm, en matematisk funktion.

Ekvationen ovan används för att beräkna aktuell **ISF** och i oref1-[prognoserna för **IOB**, **ZT** (tillfällig basal på noll) och **UAM**](#aaps-screens-prediction-lines). Den används också för **COB** och i kalkylatorn (se [Andra användningar av ISF](#dynisf-other-usages-of-isf) nedan).

### TDD (total daglig dos)
TDD använder en kombination av följande värden:
1.  medelvärdet av **TDD** för 7 dagar;
2.  föregående dags **TDD**; och
3.  ett viktat medelvärde av insulinanvändningen de senaste åtta (8) timmarna, uppräknat till 24 timmar.

**TDD** i ekvationen ovan består till en tredjedel av vart och ett av värdena ovan.

### Justeringsfaktor för dynamisk ISF

Den ställs in i dina **Inställningar** och används för att göra **Dynamisk ISF** mer eller mindre aggressiv. Se avsnittet [Inställningar](#dyn-isf-preferences) nedan.

### Insulindivisor
Insulindivisorn beror på när insulinet har sin topp (peak) och är omvänt proportionell mot tiden till toppen. För Lyumjev är värdet 75, för Fiasp 65 och för vanligt snabbverkande insulin 55.

### ISF baserad på förutsagt BG för doseringsbeslut

Dynamisk känslighet beräknas med värdet för **aktuellt BG** och visas som din aktuella ISF i **AAPS**. Men när oref1-algoritmen beräknar doser använder den i stället **framtida ISF**.

Det görs för att inte ge för mycket insulin när **BG** är lågt eller förväntas bli lågt.

**Framtida ISF** använder samma formel som ovan, men kan använda **lägsta förutsagda BG** i stället för **aktuellt BG**. **Lägsta förutsagda BG**, [som det beräknas i oref1](#aaps-screens-how-predictions-become-a-dosing-decision), är det lägsta värde som ditt BG förutsägs nå under hela prognosen.

* Om aktuellt **BG** är över målvärdet<br/> **och** om **BG** är stabilt, inom +/- 3 mg/dl:<br/>används BG i formeln så här: `average(minimum predicted BG, current BG)`.
* Om slutligt **BG** är över målvärdet och blodsockret stiger,<br/> **eller** om slutligt **BG** är över aktuellt **BG**:<br/>används BG i formeln så här: `current BG`.
* Annars:<br/>används BG i formeln så här: `minimum predicted BG`.

Skärmbilden nedan visar situationen ovan på ett enkelt sätt. Orange punkter använder **förutsagt BG**, lila punkter använder **medelvärdet av (förutsagt BG, aktuellt BG)** och blå punkter använder **aktuellt BG**.

![DynISF_BGValue.png](../images/DynamicISF/DynISF_BGValue.png)

(dynisf-other-usages-of-isf)=
## Andra användningar av ISF

### ISF och upptagning av COB

Som beskrivs på sidan [Beräkning av COB](../DailyLifeWithAaps/CobCalculation.md) beräknas upptagningen av COB vanligtvis med denna formel:   
`absorbed_carbs = deviation * ic / isf`  
När du använder **Dynamisk ISF** är den **ISF** som används här medelvärdet av värdena för dynamisk ISF de senaste 24 timmarna.

### ISF i kalkylatorn

När du använder [kalkylatorn](#aaps-screens-bolus-wizard) används **ISF** för att lägga till en korrigering om **BG** är över målvärdet.

När du använder **Dynamisk ISF** är den **ISF** som används här medelvärdet av värdena för dynamisk ISF de senaste 24 timmarna.

(dyn-isf-preferences)=
## Settings

Markera **Använd dynamisk känslighet** i [Inställningar > OpenAPS SMB](#Preferences-openaps-smb-settings) för att aktivera. Nya inställningar blir tillgängliga när funktionen är vald.

![Inställningar för dynamisk ISF](../images/preferences/settings_dynamic_isf.png)

(dyn-isf-adjustment-factor)=
### DynamicISF justeringsfaktor
**Dynamisk ISF** bygger på en enda regel som ska gälla alla. Det betyder att personer med samma **TDD** skulle ha samma känslighet. Eftersom varje person har sin egen känslighet låter **justeringsfaktorn** dig ange om du är mer eller mindre känslig för insulin än en ”standardperson”.

**Justeringsfaktorn** är ett värde mellan 1 % och 300 %. Den fungerar som en multiplikator för värdet **TDD**.

* Om du ökar värdet över 100 % blir **DynISF** mer aggressiv: **ISF**-värdena blir *mindre* (_dvs._ det behövs mer insulin för att sänka **BG** lite)
* Om du sänker värdet under 100 % blir **DynISF** mindre aggressiv: **ISF**-värdena blir större (_dvs._ det behövs mindre insulin för att sänka **BG** lite).

**Justeringsfaktorn** ändras också när du gör ett [**Profilbyte** med procent](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md). En lägre **Procent av profil** sänker **justeringsfaktorn**, och en högre **Procent av profil** höjer den.

Exempel: om din **justeringsfaktor** är 80 % och du gör ett **Profilbyte** till 80 %, blir den slutliga **justeringsfaktorn** `0.8*0.8=0.64`.

Det betyder att du med **DynISF** kan använda **Procent av profil** för att tillfälligt finjustera din känslighet manuellt. Det kan vara bra vid fysisk aktivitet (lägre procent), sjukdom (högre procent) osv.

### LGS-tröskelvärde

**BG**-värde under vilket insulinet pausas (paus vid lågt blodsocker, LGS). Standardvärdet använder standardmodellen för målvärde. Du kan ställa in värdet mellan 60 mg/dl (3,3 mmol/l) och 100 mg/dl (5,5 mmol/l). Värden under 65/3,6 gör att standardmodellen används.

### DynamicISF justera känslighet

Denna inställning (*"Justera känslighetsberäkningar vid användning av DynamicISF"*) ersätter Autosens och använder **TDD** för de senaste 24 h / **TDD** för 7 dagar som grund för att öka och minska basaldosen, på samma sätt som vanlig Autosens. Det beräknade värdet används också för att justera målvärdet, om alternativen för att justera målvärdet efter känslighet är aktiverade. Till skillnad från Autosens justerar detta alternativ inte **ISF**-värdena.

(dyn-isf-things-to-consider-when-activating-dynamicisf)=
## Att tänka på när du aktiverar dynamisk ISF

* **Dynamisk ISF** rekommenderas bara för erfarna användare som har god kontroll över och god uppföljning av sitt **AAPS**. Helst ska du ha uppnått god kontroll med **SMB** innan du går över till **Dynamisk ISF**.
* Som nämnts ovan: stäng av alla [**automatiseringar**](../DailyLifeWithAaps/Automations.md) som aktiverar **Procent av profil** utifrån **BG**, eftersom det blir för aggressivt och kan ge för mycket insulin! Detta är redan en del av algoritmen **Dynamisk ISF**.
* [Procent av profil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) tas med i beräkningen av dynamisk ISF (se [Justeringsfaktor för dynamisk ISF](#dyn-isf-adjustment-factor) ovan). Det är inte bra att använda en annan **Procent av profil** än 100 % under lång tid. Om du ser att din **Profil** har ändrats, skapa en ny **Profil** med de nya värdena i stället för att använda **Profil** med en viss procent.
* **Dynamisk ISF** fungerar kanske inte för alla. Du kan särskilt få oväntade resultat om något av följande gäller dig:
  * Varierande livsstil (oregelbundna mönster för måltider eller fysisk aktivitet)
  * TDD eller känslighet som varierar från dag till dag.
* Det finns ingen exakt guide för hur du ställer in startvärdet för **justeringsfaktorn**. Men som utgångspunkt: om dina värden i **Profil** är rätt, och du är inom målområdet med stabilt **BG**, ska värdet för **DynISF** vara ungefär samma som det du hade i din **Profil** tidigare.<br/>Om **Dynamisk ISF** är för aggressiv, sänk **justeringsfaktorn**, och tvärtom.
* Även om **DynISF** inte alls använder **ISF i profilen** bör du hålla den uppdaterad om du märker att din känslighet skiljer sig mycket från det som är sparat i din **Profil**. Det kan vara bra om du förlorar dina data i **AAPS** (_t.ex._ ny telefon, ny version av **AAPS**…), eftersom **ISF i profilen** då används som reserv de kommande 7 dagarna.