# Översikt över komponenterna

**AAPS** är inte bara en (egenbyggd) app. Det är en av flera moduler i ditt slutna loopsystem. Innan du väljer komponenter är det bra att läsa dokumentationen om dem.

![Översikt över komponenterna](../images/modules.png)

```{admonition} IMPORTANT SAFETY NOTICE
:class: important

Grunden för de säkerhetsfunktioner i **AAPS** som beskrivs i den här dokumentationen är säkerhetsfunktionerna i den hårdvara som du bygger ditt system med. För att sluta en loop med automatisk insulindosering är det mycket viktigt att du bara använder en insulinpump och en CGM som är testade, fungerar helt och är godkända av myndigheterna i ditt land. Ändringar i hårdvara eller programvara hos dessa komponenter kan ge oväntad insulindosering och innebär en stor risk för användaren. Om du hittar eller blir erbjuden trasiga, ändrade eller hemgjorda insulinpumpar eller CGM-mottagare, **använd dem inte** för att bygga ett **AAPS**-system.

Det är också lika viktigt att bara använda originalmaterial, till exempel införare, kanyler och insulinbehållare, som tillverkaren har godkänt för din pump eller CGM. Otestat eller ändrat material kan göra CGM-värdena felaktiga och ge fel insulindoser. Insulin är mycket farligt om det doseras fel - lek inte med ditt liv genom att mixtra med ditt material.

Sist men inte minst får du inte ta SGLT-2-hämmare (glifloziner), eftersom de sänker blodsockret på ett sätt som inte går att beräkna. Kombinationen med ett system som sänker basaldoserna för att höja BG är särskilt farlig. På grund av gliflozinet kanske BG inte stiger, och då kan ett farligt tillstånd med brist på insulin uppstå. [Mer information här](#PreparingForAaps-no-sglt-2-inhibitors).
```

## Nödvändiga moduler

### En bra individuell dosering för din diabetesbehandling

Det är inget du skapar eller köper, men det är troligen den mest underskattade 'modulen' — och den är nödvändig. När du låter en algoritm hjälpa dig med din diabetes måste den känna till rätt inställningar, så att den inte gör allvarliga misstag. Även om du fortfarande saknar andra moduler kan du redan nu kontrollera och anpassa din **profil** tillsammans med ditt diabetesteam.

**Profilen** innehåller:

- BR (basaldoser): ger bakgrundsinsulin;
- ISF (insulinkänslighetsfaktor): hur mycket ditt blodsocker sjunker av 1 enhet insulin;
- CR (KH-kvot): hur många gram kolhydrater som täcks av en enhet insulin.

De flesta loopare använder dygnsbaserade BR, ISF och CR, som anpassas efter hur insulinkänsligheten ändras av hormoner under dygnet.

Förutom din **profil** måste du också ställa in ditt **insulin** i **Hantera → Insulininställningar**, också dess DIA (insulinets verkningstid) — se [Insulininställningar](#Config-Builder-insulin-dia).

Mer information om din **profil** finns [på en egen sida](../SettingUpAaps/YourAapsProfile.md).

### Telefon

Se sidan [Telefoner](../Getting-Started/Phones.md).

### Insulinpump

Se sidan [Kompatibla pumpar](../Getting-Started/CompatiblePumps.md).

**Fördelar och nackdelar med några pumpmodeller**

Combo, Insight och de äldre Medtronic-pumparna är stabila pumpar och går att loopa med. Combo har fördelen att det finns många fler typer av infusionsset att välja mellan, eftersom den har en vanlig Luer-Lock-koppling. Och batteriet är ett vanligt batteri som du kan köpa på alla bensinstationer och dygnet runt-butiker. Om du verkligen behöver ett kan du låna det från fjärrkontrollen på hotellrummet ;-).

Men fördelarna med DanaR/RS och Dana-i jämfört med Combo som förstahandsval är:

- Den första parkopplingen är enklare med Dana-i/RS. Men det gör du oftast bara en gång, så det spelar bara roll om du vill testa en ny funktion med olika pumpar.
- Hittills fungerar Combo genom att läsa av pumpens skärm. Oftast fungerar det mycket bra, men det är långsamt. För loopen spelar det inte så stor roll, eftersom allt sker i bakgrunden. Pumpen måste ändå vara ansluten mycket längre tid, så det finns mer tid då BT-anslutningen kan brytas. Det är inte så lätt om du går ifrån telefonen medan du tar bolus och lagar mat.
- Combo vibrerar när en tillfällig basal (TBR) slutar, DanaR vibrerar (eller piper) vid SMB. På natten använder du troligen tillfälliga basaler (TBR) mer än SMB.  Dana-i/RS kan ställas in så att den varken piper eller vibrerar.
- Historiken i Dana-i/RS kan läsas in på några sekunder, med kolhydrater. Det gör det lätt att byta telefon när du är offline och fortsätta loopa så fort det finns några CGM-värden.
- Alla pumpar som **AAPS** kan prata med är vattentäta vid leverans. Bara Dana-pumparna är också "vattentäta enligt garantin", tack vare det tätade batterifacket och systemet för att fylla reservoaren.

### BG Source

Se sidan [Kompatibla CGM-system](../Getting-Started/CompatiblesCgms.md).

### **AAPS**-.apk-fil

Systemets viktigaste komponent. För att kunna installera appen måste du först bygga apk-filen själv. Instruktioner finns [här](../SettingUpAaps/BuildingAaps.md).

### Rapportserver

En rapportserver visar dina glukos- och behandlingsdata och skapar rapporter för detaljerad analys. Just nu finns det två rapportservrar som du kan använda med AAPS: [Nightscout](#SettingUpTheReportingServer-nightscout) och [Tidepool](#SettingUpTheReportingServer-tidepool). Båda kan visa dina diabetesdata över tid och ge statistik om **tid i målområde** (TIR) och andra mått.

Rapportservern är oberoende av de andra modulerna. Om du inte vill använda en rapportserver ska du veta att den inte krävs för att köra **AAPS** på lång sikt. Men du måste ändå ställa in en, eftersom den krävs för att klara [**Mål 1**](#objectives-objective1).

Mer information om hur du ställer in din rapportserver finns [här](../SettingUpAaps/SettingUpTheReportingServer.md).

## Valfria moduler

### Smartklocka

Du kan välja vilken smartklocka som helst med **Wear OS 3** eller senare. Se [Smartklockor och AAPS](../Getting-Started/Watches.md) för mer information.

Användare gör en [lista över testade telefoner och klockor](#Phones-list-of-tested-phones). Det finns olika urtavlor för **AAPS**. Du hittar dem [här](../WearOS/WearOsSmartwatch.md).

### xDrip

Även om du inte behöver appen xDrip som **BG-källa** kan du ändå använda den, till exempel för larm eller för att visa blodsockret på ett annat sätt. Du kan ha så många larm du vill, ange när ett larm ska vara aktivt, välja om det får gå igenom tyst läge och så vidare. Viss information om xDrip finns [här](../CompatibleCgms/xDrip.md). Tänk på att dokumentationen för den här appen inte alltid är uppdaterad, eftersom appen ändras snabbt.

## Vad du kan göra medan du väntar på modulerna

Ibland tar det ett tag att få alla moduler som behövs för att sluta loopen. Men oroa dig inte, det finns mycket du kan göra medan du väntar. Det är **nödvändigt** att kontrollera och (vid behov) anpassa basaldoser (BR), KH-kvot (IC), insulinkänslighetsfaktorer (ISF) och så vidare. Och öppen loop kan vara ett bra sätt att testa systemet och lära känna **AAPS**. I det här läget ger **AAPS** förslag på behandlingar som du kan utföra manuellt.

Du kan fortsätta läsa dokumentationen här, kontakta andra loopare online eller offline, [läsa](../UsefulLinks/BackgroundReading.md) dokumentation eller det som andra loopare skriver (men var försiktig, allt är inte korrekt eller bra för dig att göra likadant).

**Klar?** Om du har alla komponenter till **AAPS** (grattis!) eller åtminstone tillräckligt för att börja med öppen loop, ska du först läsa [beskrivningen av målet](../SettingUpAaps/CompletingTheObjectives.md) före varje nytt mål och sedan ställa in din hårdvara.
