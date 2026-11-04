# Pumpar och kanyler

## Byta infusionsset: insulinreservoarer och kanyler

Stegen nedan gäller bara pumpar med slang och inte pod-pumpar som Omnipod, Medtrum Nano, Accu-Chek Solo osv. Detta kallas ibland för ett ”setbyte”. Ett ”fullständigt” setbyte omfattar både insulinreservoaren och kanylen, och ett ”partiellt” setbyte betyder att bara kanylen byts.

Pod-pumpar fyller och förfyller sig själva i sin egen aktiveringsguide, och deras kanyl sitter redan i kroppen. **AAPS** erbjuder ingen förfyllning för dem: **Förfyllning** visas inte i panelen **Hantera** eller i Snabbstart. Se sidan om din pump under [Kompatibla pumpar](../Getting-Started/CompatiblePumps.md).

Du kan inte byta reservoar/ampull i **AAPS**. Det måste du göra direkt på pumpen. När bytet är klart måste du logga det manuellt i **AAPS**.

(pumps-cannulas-changing-reservoir-and-cannula)=
### Guide för att byta både pumpens reservoar och kanylen

1. Koppla från pumpen i **AAPS**: tryck på [loopikonen](#AapsScreens-loop-status) på huvudskärmen och välj **Koppla från pumpen** i 1 timme. Ikonen ändras till en grå kontaktikon, som visar att pumpen är frånkopplad.

2. Byt insulinreservoaren fysiskt: koppla loss pumpen från kroppen och byt reservoaren/ampullen och kanylen enligt tillverkarens instruktioner.

3. Förfyll slangen och kanylen: det kan du göra direkt på pumpen. Se till att få bort alla luftbubblor i slangen.

4. Sätt fast den nya kanylen på kroppen. När kanylen är insatt och nålen borttagen finns det en liten luftficka i kanylen, som också måste förfyllas. Så registrerar du detta i **AAPS** och förfyller kanylen: öppna **Förfyllning** (i den utfällda statuspanelen på huvudskärmen, i panelen **Hantera** eller som en knapp i [Snabbstart](QuickLaunch.md)) och kryssa i **Logga byte av kanyl** och/eller **Logga byte av insulinreservoar** efter behov för att registrera bytet. Tryck nu på standardmängden för förfyllning av kanylen (den är oftast runt 0,3 U, men kontrollera att värdet stämmer för din kanyl) och välj **OK**. Läs sammanfattningen och bekräfta förfyllningen genom att trycka på **OK**.

   ![Förfyllning i panelen Hantera med en slangpump](../images/v4/Screens/manage_sheet_tube_pump.png)


5. Anslut pumpen igen i **AAPS**: tryck på den grå kontaktikonen och välj **Återanslut pump** för att fortsätta loopa.

### Bra att veta om byte av insulin och kanyl

* När du loggar ett kanylbyte återställs Autosens till 100 %. Det återställer också statuslamporna och åldrarna för kanyl/insulin på huvudskärmen i **AAPS**.

* Du kan ställa in/ändra standardmängderna för förfyllning i inställningarna för **Förfyllning**. Skriv ”prime” i sökfältet på huvudskärmen för att öppna dem (se [Inställningar](../SettingUpAaps/Preferences.md)). Läs i bruksanvisningen i kanylförpackningen hur många enheter som ska användas för att förfylla din kanyl (det beror på nålens och slangens längd).

* Insulin som levereras med förfyllningsfunktionen räknas inte med av **AAPS** när aktivt insulin (IOB) beräknas, och det markeras som ”Förfyllning” i [Behandlingshistorik](#aaps-screens-treatments).

* Insulin som ges som bolus från pumpen medan pumpen är frånkopplad räknas inte heller med av **AAPS**. Om du råkar ge en bolus direkt från pumpen medan **AAPS** är frånkopplad kan du, när du har anslutit pumpen igen, registrera detta insulin (utan att ge det som bolus) i dialogrutan **Insulin** (se [Registrera levererat insulin utan att ge bolus](#pumps-cannulas-announce-insulin) nedan).

### Problem med kanyl, infusionsställe, slang och/eller pump

Om du är säker på att du inte har fått något insulin under en viss tid, trots att **AAPS** har registrerat att du har fått det, och du vet exakt när problemet började (_t.ex._ du tar bort kanylen och ser att den blev böjd när den sattes in), kan du rätta detta i **AAPS**. Var samtidigt medveten om att insulinet faktiskt kan ha levererats men av någon anledning verkar långsamt.

```{admonition} Caution - Risk of Hypoglycemia
:class: danger
Ta bara bort insulinleveranser från **AAPS** med YTTERSTA försiktighet, ifall insulinet _faktiskt_ har levererats, och håll noga koll på ditt BG under de kommande 24 timmarna.
```

Om du vill ta bort bolusar och SMB:er som du vet inte har levererats öppnar du **menyn** (☰), väljer [Behandlingshistorik](#aaps-screens-treatments) och raderar försiktigt, på fliken **Kolhydrater och bolus**, de loggade bolusarna från den tidpunkt då problemet uppstod. Det rättar värdet för ”aktivt insulin” (IOB), som är centralt för beräkningarna i **AAPS**. Om du nu går tillbaka till huvudskärmen ser du att IOB har minskat. Tänk på att du inte kan radera basalinsulin som **AAPS** räknar med har levererats. Det insulinet tas alltså ändå med i beräkningen av **AAPS**.

Var försiktig i mindre tydliga fall av problem med insulinleveransen, _t.ex._ läckage, ocklusion eller att insulinet läcker ut längs kanylen, där du antingen inte vet när problemet började eller tror att en del av insulinet har levererats. Du kan upptäcka sådana problem genom att du känner lukten av insulin, ser att plåstret är vått, får höga glukosvärden eller får ett larm. Eftersom du aldrig vet hur mycket insulin som har hamnat i huden (och som kanske börjar verka efter en stund) är det svårt att avgöra hur mycket insulin som ska dras av från det aktuella värdet för ”aktivt insulin” (IOB). Ett sätt är att pausa loopen i 5 timmar (eller under ditt insulins verkningstid) efter att du har löst problemet med insulinleveransen, och sedan starta loopen igen. Då blir IOB rätt när du startar loopen igen.

(pumps-cannulas-disconnecting)=
## Koppla från pumpen för dusch eller aktivitet

Om du tar av pumpen för att duscha, bada, simma, utöva kontaktsport eller annan aktivitet måste du tala om för **AAPS** att inget insulin levereras, så att IOB blir rätt. Du kan koppla från pumpen med [loopikonen](#AapsScreens-loop-status) på huvudskärmen: tryck på den och välj **Koppla från pumpen** med den tid du behöver. Om aktiviteten tar längre tid än planerat öppnar du samma dialogruta igen och väljer en ny tid under **Koppla från pumpen**: frånkopplingen förlängs och den nya tiden räknas från nu. Du behöver inte ansluta pumpen först.

Eftersom du inte får något insulin medan pumpen är frånkopplad bör du koppla in den igen varannan timme för att ta igen den basal du har missat. Du kan göra det genom att ansluta pumpen och ge de missade basalmängderna som bolus (_t.ex._ för de senaste två timmarna) innan du kopplar från igen. Det hjälper dig att undvika en allvarlig insulinbrist, som kan leda till diabetesketoacidos (DKA). Om det är opraktiskt att ansluta pumpen igen under aktiviteten (kanylplatsen är täckt av en våtdräkt _osv._), kan du i stället överväga en injektion med penna. Den här manuella injektionen kan loggas i **AAPS**. Du behöver inte logga den när du tar injektionen (anteckna bara tiden), eftersom du kan registrera insulinet och ange den verkliga tiden i efterhand när du ansluter pumpen igen.

(pumps-cannulas-announce-insulin)=
## För att registrera insulin som har getts utan att faktiskt ge en bolus

Så registrerar du insulin som levererats från pumpen medan **AAPS** var frånkopplad, eller insulin från injektioner med penna: öppna [dialogrutan Insulin](#aaps-screens-buttons-insulin) (**Behandlingar** i den nedre navigeringen, eller en knapp i Snabbstart), ange mängden i enheter och aktivera **Bolus kommer bara att loggas (inte levereras av pumpen)**. Då visas raden **Tid** (inställd på **Nu**), där du kan ange den verkliga tiden för injektionen. Du kan strunta i den om injektionen gavs nyligen. Om bolusen gavs för en tid sedan kan du använda **-** för att flytta tiden bakåt (_t.ex._ -30 min), eller öppna raden med vinkelpilen och välja exakt datum och tid. **AAPS** tar då hänsyn till insulinets verkningstid och räknar ut hur mycket insulin som fortfarande finns kvar i kroppen.

Om du använder **AAPS** som vårdgivare kan du mycket enkelt koppla från (och ansluta) pumpen på distans med [SMS-kommandon](../RemoteFeatures/SMSCommands.md), till exempel ”pump disconnect 120” och ”pump connect 120”. Tiden för frånkoppling på distans kan vara 1–120 min (i det här exemplet 120 minuter). Det är mycket praktiskt om **AAPS**-telefonen är svår för dig att komma åt, till exempel nedstoppad i ett pumpbälte på ett barn som springer mot simhallen, eller noga bevakad (eller använd) av en tonåring.

## Återansluta pumpen efter aktivitet

Efter en lång frånkoppling (1–2 timmar) är det ganska vanligt att **AAPS** räknar ut att du nu har negativ IOB. När du återansluter pumpen kan du, beroende på vad du föredrar, ditt aktuella glukosvärde, planerad mat eller kommande aktivitet, antingen:

a) Anslut bara pumpen igen i **AAPS** (grå till grön, för sluten loop) och låt **AAPS** själv börja leverera insulin igen

_eller_

b) Om du vill vara mer aggressiv (till exempel om du är på väg mot ett högt blodsocker) kan du öppna [Kalkylator](#aaps-screens-bolus-wizard) och ge en bolus för noll kolhydrater, så att det beräknade insulinet som saknas levereras direkt som bolus.

Vilket sätt du föredrar är mycket personligt, och du hittar det bäst genom att prova dig fram.


(Aapsscreens-site-rotation)=
## Platsrotation

**Hantera → Platsrotation** öppnar dialogrutan Platsrotation i visningsläge:

- Med de två knapparna högst upp (kanylikonen och sensorikonen) kan du visa bara kanylplatser, bara sensorplatser eller båda
- Alla händelser för kanylbyte och sensorbyte från de senaste 45 dagarna är tillgängliga.
- Tryck på ett område eller på en post i listan nedanför för att bara visa poster i det valda området. Det valda området markeras med ljusgrön färg.
- Tryck på ikonen **penna** bredvid en post för att öppna redigeringsvyn och ändra plats, pil eller anteckning

![Visningsläge](../images/SiteRotation/ViewMode.png)

- Ikonen med **kugghjulet** (uppe till höger) öppnar inställningarna: **Användarprofil för platsrotation** öppnar en dialogruta där du väljer **Man**, **Kvinna** eller **Barn**, och med reglagen **Hantera pumpplatsrotation** och **Hantera CGM-sensorplatsrotation** väljer du vilka platser du hanterar.

![Settings](../images/SiteRotation/Settings.png)

![Dialogrutan Användarprofil för platsrotation](../images/SiteRotation/Type.png)

*Obs! Den här inställningen avgör om dialogrutan Platsrotation (redigeringsläge) öppnas automatiskt när en ny post skapas med knappen ”Förfyllning” eller knappen ”Sensorinsättning”.*

- Om du har bytt kanyl direkt på pumpen måste du öppna visningsläget och redigera den nya posten för att välja plats och pil

I redigeringsläget kan du välja plats, pil och anteckning för den valda posten:

- Posten som redigeras visas under kroppsbilderna, med ikonen för sin typ (kanyl eller sensor)
- Kroppen visas framifrån och bakifrån bredvid varandra: tryck på det område där du satte den
- När en plats har valts (markerad i grönt) visar listan nedanför alla poster på den platsen från de senaste 45 dagarna.

![Redigeringsläge](../images/SiteRotation/EditMode.png)

- Du kan lägga till en pil om du vill genom att trycka på pilikonen till höger om posten: i dialogrutan **Välj pil** kan du ange en mer exakt plats eller hur podden är vänd

![Placering](../images/SiteRotation/EditModeSub.png)

- Du kan också lägga till en **Anteckning** om den valda platsen
- Tryck på ikonen **spara** (uppe till höger) för att registrera platsen

Du kan filtrera grafiskt på bilden eller genom att trycka på en behandlingshändelse i listan Tryck utanför alla platser på bilden för att ta bort filtret

![Filtrering](../images/SiteRotation/Filtering.png)
