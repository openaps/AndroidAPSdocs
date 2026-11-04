# Byte av tidszon och sommartid

När telefonens tidszon ändras räknar **AAPS** om **IOB**, basal och känslighet för den tidigare perioden från början, ungefär 10 sekunder efter ändringen. Medan detta pågår kan det ta en stund innan graferna och värdena på huvudskärmen uppdateras.

(timezone-traveling-with-pumps)=

## Byte av tidszon för Omnipod Dash

* Uppdatera pumpstatus i **Hantera → Pump**
* Välj tillfälligt en annan **profil** och byt sedan tillbaka till din ursprungliga eller önskade **profil**

## Byte av tidszon för DanaR och koreansk DanaR

Det är inga problem att byta tidszon i telefonen, eftersom pumpen inte använder historiken

(timezone-traveling-danarv2-danars)=

## Byte av tidszon för DanaRv2, DanaRS, Dana-i

Dessa pumpar kräver särskild försiktighet, eftersom **AAPS** använder historiken från pumpen, men posterna i pumpen saknar tidszon. **Det betyder att om du byter tidszon i telefonen, läses posterna med en annan tidszon och blir dubblerade.**

Det finns två sätt att undvika detta:

### Alternativ 1: Behåll hemtiden och tidsförskjut profilen

* Stäng av 'Automatiskt datum och tid' i telefonens inställningar (manuellt byte av tidszon).

* Telefonen måste behålla din vanliga tid hemma under hela resan.

* Tidsförskjut din **profil** efter tidsskillnaden mellan hemtiden och tiden på resmålet.
   
   * Tryck på namnet på din **profil** på huvudskärmen för att öppna [profilskärmen](#ProfileSwitch-manage-v4)
   * Välj din **profil** och tryck på **▶ Aktivera**
   * Ställ in '**Tidsförskjutning**' efter ditt resmål och tryck på **Aktivera**.
   
   ![Profilbyte med tidsförskjutning](../images/ProfileSwitchTimeShift2.png)
   
   * t.ex. Wien -> New York: **Profilbyte** +6 timmar
   * t.ex. Wien -> Sydney: **Profilbyte** -8 timmar

### Alternativ 2: Radera pumphistoriken

* Stäng av 'Automatiskt datum och tid' i telefonens inställningar (manuellt byte av tidszon)

När du har gått av planet:

* stäng av pumpen
* byt tidszon i telefonen
* stäng av telefonen, slå på pumpen
* radera historiken i pumpen
* ändra tiden i pumpen
* slå på telefonen
* låt telefonen ansluta till pumpen och finjustera tiden

(timezone-traveling-insight)=

## Byte av tidszon för Insight

Drivrutinen ställer automatiskt pumpens tid efter telefonens tid.

Insight sparar också i historiken när tiden ändrades och från vilken (gammal) tid till vilken (ny) tid. Så kan **AAPS** fastställa rätt tid trots att tiden har ändrats.

Det kan ge felaktigheter i **TDD**-värdena. Men det bör inte vara något problem.

Som Insight-användare behöver du alltså inte oroa dig för byte av tidszon eller ändrad tid. Det finns ett undantag från denna regel: Insight-pumpen har ett litet internt batteri som driver klockan m.m. medan du byter det "riktiga" batteriet. Om batteribytet tar för lång tid tar det interna batteriets energi slut, klockan nollställs och du måste ange tid och datum när du har satt i ett nytt batteri. I så fall hoppar AAPS över alla poster före batteribytet i beräkningarna, eftersom rätt tid inte kan fastställas.

## Byte av tidszon för Accu-Chek Combo

[Combo-drivrutinen](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) ställer automatiskt pumpens tid efter telefonens tid. Combo kan inte spara tidszoner, bara lokal tid, och det är precis den tiden som drivrutinen programmerar in i pumpen. Dessutom sparar drivrutinen tidszonen i de lokala AAPS-inställningarna, så att den kan omvandla pumpens lokala tid till en fullständig tidsstämpel med UTC-förskjutning. Du behöver inte göra något; om tiden i Combo avviker för mycket från telefonens aktuella tid, ställs pumpens tid in automatiskt.

Observera att detta tar en stund, eftersom det bara kan göras i fjärrterminalläget (remote-terminal), som i regel är långsamt. Detta är en begränsning i Combo som inte går att komma runt.

## Byte av tidszon för Medtrum

Drivrutinen ställer automatiskt pumpens tid efter telefonens tid.

Vid byte av tidszon förblir historiken intakt, bara TDD kan påverkas. Om du ändrar tiden i telefonen manuellt kan det orsaka problem med historiken och **IOB**. Om du ändrar tiden manuellt, dubbelkolla **IOB**.

När tidszonen eller tiden ändras stoppas pågående **tillfälliga basaler (TBR)**.

(time-adjustment-daylight-savings-time-dst)=

## SOMMARTID (DST)

Justering av tiden vid sommartid.

Beroende på din pump och CGM kan tidshopp göra att **AAPS** inte fungerar korrekt. För vissa pumpar är det bättre att justera tidszonen medan du är vaken, före tidsomställningen, och inte under natten.

### Automatisk justering vid sommartid för de flesta pumpar

* Men **loopen** inaktiveras i 3 timmar EFTER tidsomställningen (oftast från kl. 01.00) och **AAPS** använder då bakgrundsbasalen som är vald i din **profil**. Detta görs av säkerhetsskäl – **IOB** kan vara för högt på grund av dubblerade bolusar före tidsomställningen.
* Efter tidsomställningen gör du ett **profilbyte** till önskad **profil** för att aktivera **loopen**: tryck på profilnamnet på huvudskärmen och sedan på den runda knappen **▶** (se [Aktivera en profil](#ProfileSwitch-manage-v4)).
* Du får också en avisering på huvudskärmen i **AAPS** före tidsomställningen om att **loopen** har inaktiverats tillfälligt. Detta meddelande visas utan pip, vibration eller annat ljud.

Om du ger bolus med **AAPS:s** kalkylator, använd inte **COB**- och **IOB**-data om du inte är säker på att dessa data är helt korrekta. Var försiktig och använd inte denna funktion under ett par timmar efter tidsomställningen.

### Sommartid för Accu-Chek Insight

* Omställningen till och från sommartid sker automatiskt. Du behöver inte göra något.

### Sommartid för Accu-Chek Combo

* Omställningen till och från sommartid sker automatiskt. Du behöver inte göra något.

### Sommartid för Medtrum

* Omställningen till och från sommartid sker automatiskt. Du behöver inte göra något.

### Sommartid för Omnipod Dash

* Antingen låter du **AAPS** tillfälligt gå över till bakgrundsbasalen efter tidsomställningen, som beskrivs ovan.
* Eller, om du inte vill att **AAPS** tillfälligt ska gå över till bakgrundsbasalen under natten, kan du byta tidszon dagen före tidsomställningen för att undvika störningar under natten. OBSERVERA ATT DETTA ALTERNATIV KAN GÖRA ATT DIN POD LÖPER UT FÖR TIDIGT. HA MED DIG RESERVMATERIAL OM DU VÄLJER FUNKTIONEN NEDAN.

#### Åtgärder före tidsomställningen

1. Stäng AV alla telefoninställningar som automatiskt ställer in telefonens tidszon, så att du kan byta till en önskad tidszon som inte använder sommartid. Hur du gör detta beror på din telefon och Android-version.
   
   * Vissa telefoner har två inställningar: en för automatisk inställning av tiden (som helst ska vara på) och en för automatisk inställning av tidszonen (som du måste stänga AV: **Set automatically** (Ställ in automatiskt) under **Time zone** (Tidszon) på skärmbilden nedan).
   * Tyvärr har vissa Android-versioner bara en knapp som slår på automatisk inställning av både tid och tidszon. Den måste du stänga av tills vidare.

![Screenshot_20260329-110315 (1)](../images/570963727-ca40c1c6-1697-4832-ae10-5cf6a1dc0bce.png)

2. Hitta en tidszon som har samma tid som där du är nu, men som inte använder sommartid.
   
   * En lista över dessa länder finns här: [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * För centraleuropeisk tid (CET) kan det vara "Brazzaville" (Kongo). Byt telefonens tidszon till Kongo.

![Screenshot_20260329-111830](../images/570966323-b7b7f738-f91e-40df-ad79-f404fbfb9ae6.png)

3. Uppdatera pumpen i **AAPS** och byt till önskad **profil**.

4. Kontrollera **IOB** och **COB** i **AAPS**. Om de inte stämmer, inaktivera **Loop** i minst en DIA eller den maximala upptagningstiden för kolhydrater (**Max absorptionstid**), det som är längst.

5. Åtgärder efter tidsomställningen. En bra tidpunkt att byta tillbaka till den lokala tidszonen är när **IOB** är lågt. T.ex. en timme före en måltid, som frukost. Helst ska både **COB** och **IOB** vara nära noll.