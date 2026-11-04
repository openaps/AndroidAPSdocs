# Finjustera AAPS-profilen

```{admonition} This is NOT a medical advice
:class: warning
Samarbeta med ditt vårdteam för stöd och råd om hur du hanterar din diabetes.</br>
Använd den här guiden först när du har [ställt in din **profil** korrekt](https://androidaps.readthedocs.io/en/latest/SettingUpAaps/YourAapsProfile.md) och följt alla mål i **AAPS**.
```

Den här guiden förklarar logiken bakom resultaten från OpenAPS-algoritmen med en viss __profil__. Den visar också vilka värden i **AAPS** som kan justeras när du ser vissa situationer eller mönster. Förslagen om basaltestning nedan kan skilja sig från det som ditt vårdteam rekommenderar.

Att använda **sluten loop** kan göra basaltestning enklare och kan minska risken för hypo betydligt om basalen i din __profil__ är för stark.

## Ändra profilens inställningar: så går du till väga

1. Se till att du har läst och förstår de rekommenderade inställningarna och råden för __AAPS__ nedan. Om du inte följer dessa råd kan justeringen bli svår, och det blir mindre troligt att du får en välinställd __profil__
2. Observera och jämför noga, **under flera dagar**, vad som händer med ditt __BG__ och din __IOB__.
3. Håll utkik efter mönster i **AAPS** som händer vid ungefär samma tid (nästan) varje dag.
4. Det är viktigt att göra detta under flera dagar. Resultaten blir ofta dåliga om du använder data från en enda dag för att bestämma hur __profilen__ ska justeras.
5. När du har sett ett mönster som upprepas, t.ex. en topp i __BG__ eller ett negativt __IOB__-värde kl. 13, först då ska du börja göra små ändringar i din __profil__.
6. Det är viktigt att bara ändra en sak i taget. T.ex. öka din basal med 10 % runt kl. 13.
7. Efter varje ändring är det viktigt att följa effekten på ditt __BG__ och din __IOB__ under de närmaste dagarna.
8. Upprepa detta: observera, bestäm, justera igen om det behövs

Stressa inte, ta det långsamt!

## Rekommenderade inställningar och råd när du justerar basalen

- Gör alla tester med [sluten loop aktiverad](#AapsScreens-loop-status).
- **Stäng <u>AV</u> alla [automatiseringar](../DailyLifeWithAaps/Automations.md)**
- **Stäng <u>AV</u> [DynISF](#Open-APS-features-DynamicISF), [AutoISF](#Open-APS-features-auto-isf), [AutoSens](#Open-APS-features-autosens)** så att de inte försöker anpassa din profil.
- Gör inga manuella åtgärder (manuell bolus, tillfälliga målvärden osv.) medan du testar: låt systemet bara använda inställningarna i **profilen**.
- För de [extra graferna](#AapsScreens-section-g-additional-graphs): i graf 1, använd Aktivt insulin (IOB), Aktiva KH (COB) (och Känslighetsändring). I graf 2, använd Avvikelser och Blodglukospåverkan. När du ber om råd, ta alltid med dessa i dina skärmbilder.
- COB=0[*](#profiletuning-cob-zero)

Andra saker som helst bör undvikas, eftersom de påverkar data och kan leda till felaktiga slutsatser:
- Ingen fysisk aktivitet.
- Ingen stress.
- Ingen sjukdom.
- Inget extremt väder, som mycket höga eller låga temperaturer.
- Inga misslyckade pump- eller CGM-sessioner.
- Inga oannonserade kolhydrater.

Observera också:
- Om din [basalprofil](#your-aaps-profile-basal-rates) är rätt, och du är på målvärdet med COB=0[*](#profiletuning-cob-zero) och IOB=0, stannar du hela tiden på målvärdet oavsett din **ISF** (**ISF** används bara när du ligger över ditt **BG**-målvärde).
- Du behöver kontrollera den aktuella **IOB**, men också **IOB**-grafen, för att se hur **IOB** har ändrats under de senaste timmarna.

(profiletuning-cob-zero)=

***COB = 0**

Det betyder att måltiden är smält och att det inte finns fler kolhydrater kvar i kroppen.

**AAPS** kan visa [COB=0 trots att du fortfarande har aktiva kolhydrater](../DailyLifeWithAaps/CobCalculation.md).

## Definitioner för [profilen](../SettingUpAaps/YourAapsProfile.md)

En för **stark profil** betyder någon kombination av följande:

- Värdet för [ISF](#your-aaps-profile-insulin-sensitivity-factor) är för litet.
- Värdet för [basal](#your-aaps-profile-basal-rates) är för stort.
- Värdet för [KH-kvot](#your-aaps-profile-insulin-to-carbs-ratio) är för litet.

## Observationer av IOB

*Obs: du kan också använda IOB-grafen i Loopalyzer i Nightscout-rapporterna för att se IOB över flera dagar.*

Om du ser följande mönster efter några dagar, överväg följande ändringar:

### Positiv IOB

- Basalen i **profilen** kanske inte är tillräckligt stark (det kan också bero på saker som oannonserad mat, sjukdom, dåligt upptag vid kanylstället osv.)

![Positiv IOB](../images/troubleshooting/profiletuning/PositiveInsulin.png)

### Negativ IOB

- Standardbasalen är för stark.
- Kan vara effekten av tidigare träning/fysisk aktivitet.

![Negativ IOB](../images/troubleshooting/profiletuning/NegativeInsulin.png)

- Föregående måltid: för mycket bolus (vilket ledde till en mycket lång tillfällig basal på noll)

![Negativ IOB](../images/troubleshooting/profiletuning/NegativeInsulin2.png)

## Observationer av BG-målvärdet

### Fastnar högt

- __ISF__-värdet är högt och inte tillräckligt starkt (beräknat insulin är för svagt)

![Fastnar högt](../images/troubleshooting/profiletuning/StuckHigh.png)

- Basalen i __profilen__ kanske inte är tillräckligt stark (**SMB:er** har inte tillräckligt med "basallager" att använda)
- En säkerhetsgräns ([MaxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over)?) kan ha slagit till och begränsar insulintillförseln. Kontrollera på pluginskärmen för **APS** (**Konfiguration → APS → Öppna plugin**); se [SMB](#Open-APS-features-super-micro-bolus-smb).
- Tekniskt problem: upptag vid kanylstället, infusionsset, ...

### Fastnar lågt

- __ISF__ är för stark och värdet behöver höjas
- Basalen i __profilen__ är för stark (om IOB också är negativ)

### Berg-och-dalbana (upp och ner)

- **ISF** för stark? Se din [AAPS-profil](#your-aaps-profile-insulin-sensitivity-factor)

![Berg-och-dalbana](../images/troubleshooting/profiletuning/StrongISF.png)

## Observationer av BG efter måltider

### Snabb ökning och BG blir högt

- Maten innehåller snabba kolhydrater (som fruktjuice).
- Överväg att ta en förbolus, eller att ta förbolusen lite tidigare.
- Bolusen (KH-kvot eller injicerad %) är inte tillräckligt stark.

![Stiger högt](../images/troubleshooting/profiletuning/FastRise.png)

### Snabb ökning och sedan blir BG lågt

- Överväg att ta en förbolus. Din **profil** kan vara för aggressiv (överkorrigering av ökningen)
- Bolusen är för stark.



## [Så beräknar du din KH-kvot (I:C)](#your-aaps-profile-insulin-to-carbs-ratio)

1. Först behöver du rätt inställningar för standardbasal i din **profil**.
2. Börja på målvärdet, helst utan negativ IOB.
3. Anteckna det totala insulinet som har getts i **Hantera → Pump** (eller i pumphistoriken) och kalla det startinsulin. Mät en känd mängd kolhydrater mycket noga, och anteckna starttiden och start-IOB. Ange sedan kolhydrater och bolus i **AAPS** med kalkylatorn (med den KH-kvot som är inställd nu). Glöm inte att äta kolhydraterna ;)
4. Efter några timmar, när COB=0[*](#profiletuning-cob-zero) och du är tillbaka på målvärdet, anteckna sluttiden och slut-IOB. Kontrollera det totala insulinet som har getts på samma sätt som tidigare och kalla det slutinsulin. *OBS: Tidsperioden är INTE viktig, så länge den är längre än din matsmältning*
5. Ta skillnaden mellan start- och slutinsulin, och dra ifrån/lägg till skillnaden slut-IOB - start-IOB. Dra sedan ifrån basalinsulinet som beräknas från inställningarna i din **profil**.
6. Om __BG__ är på målvärdet har du nu det totala insulinet som använts för att ”smälta” kolhydraterna. Beräkna din **KH-kvot**.

### Förklaringar till beräkningen av KH-kvoten

- Med en **profil** som har rätt standardbasal ska du, under vilken tidsperiod som helst, stanna på målvärdet och ha en IOB nära 0. Du får bara basalen från din **profil**.
- Du lägger till kolhydrater och bolus till detta. Vänta tills kroppen har smält alla kolhydrater och du är tillbaka på ditt **BG**-målvärde. Din insulinanvändning blir summan av din basal + insulinet som behövs för kolhydraterna. Du beräknar insulinet som har använts för basalen (med hjälp av din **profil**), och resten är insulinet som har använts för att smälta kolhydraterna.
- Om tidsperioden är för kort finns det kolhydrater kvar som inte har smälts, och då blir ditt "insulin som behövs för kolhydraterna" fel.
- Om tidsperioden är för lång händer inget dåligt. Alla kolhydrater används, och du får mer basal. I slutet drar du ifrån basalen från det totala insulinet som har använts, så den längre tidsperioden (med mer basal) påverkar inte resultatet.

Ursprungligen skriven av @Robby (Discord) med tips och tricks för att finjustera din **AAPS-profil**. Granskad och redigerad av communityn (tack!).
