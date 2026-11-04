# Accu-Chek Insight

**Den här programvaran är en del av en gör-det-själv-lösning för konstgjord bukspottkörtel och är ingen produkt, utan kräver att DU läser, lär dig och förstår systemet, även hur det ska användas. Den sköter inte all din diabetesbehandling åt dig, men den låter dig förbättra din diabetes och din livskvalitet, om du är beredd att lägga ner den tid som behövs. Skynda inte, utan ge dig själv tid att lära dig. Du ensam är ansvarig för vad du gör med den.**

```{admonition} Accu-Chek Insight fasas ut :class: note

Roche lämnar marknaden för insulinpumpar för att fokusera sitt diabetesutbud på CGM:en Accu-Chek SmartGuide. Roche har meddelat att försäljningen av både Accu-Chek Combo och Accu-Chek Insight upphör. Även den sista pumpen, mikropumpen Accu-Chek Solo, avvecklas (sista leveranserna i Tyskland i slutet av 2025). Förändringen införs region för region, med start i Tyskland. Andra europeiska marknader väntas följa efter. Stödet för Insight står redan som avslutat (se [Pumpar som inte längre säljs](./Future-possible-Pump-Drivers.md)). Om du är beroende av den här pumpen, planera i god tid för ett byte till en pump som stöds.

    <br />```{note}
    Innan **AAPS** hade en egen drivrutin för Insight styrdes Insight via den separata appen [SightRemote](https://github.com/TebbeUbben/SightRemote). SightRemote behövs inte längre och underhålls inte. Om du fortfarande har den installerad från den tiden, avinstallera den och använd en aktuell version av **AAPS** i stället.
    

```{contents} Innehåll :depth: 1 :local: true

    <br />## Pumpens funktioner med AAPS
    
    * Kommunicerar med **AAPS** via telefonens inbyggda Bluetooth, utan någon extra kommunikationsenhet.
    * Byte av tidszon och sommartid hanteras automatiskt.
    
    ## Krav på hårdvara och programvara
    
    * En Roche Accu-Chek Insight-pump (all firmware fungerar)
    
    Obs: AAPS skriver alltid data till **den första basalprofilen i pumpen**.
    
    * En Android-telefon med Android 12 eller nyare (se [Telefoner](../Getting-Started/Phones.md))
    * AAPS-appen installerad på telefonen
    
    ## Inställning
    
    * Insight-pumpen ska bara vara ansluten till en enhet åt gången. Om du tidigare har använt fjärrkontrollen till Insight (mätaren), måste du ta bort mätaren från listan över parkopplade enheter i pumpen: **Menu** > **Settings** > **Communication** > **Remove device**.
    
       ![Skärmbild av Remove Meter i Insight](../images/Insight_RemoveMeter.png)
    
    * Välj kortet **Accu-Chek Insight** i [Konfiguration > Pump](#Config-Builder-pump). Bara en pump kan vara aktiv åt gången.
    
       ![Konfiguration > Pump med pluginen Accu-Chek Insight](../images/v4/Configuration/configuration_pump_list_1.png)
    
       När den är vald visar kortet **Accu-Chek Insight** två knappar, **Inställningar** och **Öppna plugin**:
    
       ![Pluginen Accu-Chek Insight vald i Konfiguration > Pump](../images/v4/Pumps/accu_chek_insight_enabled.png)
    
       **Inställningar** öppnar inställningarna för drivrutinen Accu-Chek Insight (se [Inställningar i AAPS](#Accu-Chek-Insight-Pump-settings-in-aaps)).
    
       **Öppna plugin** (eller **Hantera → Pump**) öppnar pumpskärmen för Accu-Chek Insight. Innan en pump har parkopplats ser den ut så här:
    
       ![Pumpskärmen för Accu-Chek Insight före parkoppling](../images/v4/Pumps/accu_chek_insight_pump_screen.png)
    
    (accu-chek-insight-pairing)=
    ### Parkoppling
    
    * Tryck på **Parkoppling av Insight** på pumpskärmen. Guiden för parkoppling öppnas och söker efter Bluetooth-enheter i närheten (överst på bilden nedan).
    * Gå till **Menu** > **Settings** > **Communication** > **Add Device** i Insight-pumpen. Pumpen visar följande skärm (nederst på bilden nedan) med pumpens serienummer.
    
       ![Skärmbild av parkoppling av Insight 1](../images/Insight_Pairing1.png)
    
    * Tillbaka i telefonen: tryck på pumpens serienummer i listan över Bluetooth-enheter. Om Android ber dig bekräfta parkopplingen, tryck på **Parkoppla**.
    
       ![Skärmbild av parkoppling av Insight 2](../images/Insight_Pairing2.png)
    
    * Både pumpen och telefonen visar en kod. Kontrollera att koderna är lika på båda enheterna. Bekräfta på pumpen och tryck på **Ja** i telefonen. (Tryck på **Nej** om koderna inte stämmer.)
    
       ![Skärmbild av parkoppling av Insight 3](../images/Insight_Pairing3.png)
    
    * Telefonen visar **Parkoppling lyckades**. Tryck på **Avsluta** för att gå tillbaka till pumpskärmen.
    
       ![Skärmbild av parkoppling av Insight 4](../images/Insight_Pairing4.png)
    
    * Titta på pumpskärmen (**Hantera → Pump**) för att kontrollera att allt är bra. När pumpen är parkopplad visar skärmen information om pumpen, till exempel **Serienummer**, **Tillverkningsdatum**, **Mjukvaruversion Release** och **Bluetooth-adress**.
    
       ![Skärmbild av information om parkopplingen med Insight](../images/Insight_PairingInformation.png)
    
       ```{admonition} Äldre skärmbild
       :class: note
       Utom den översta delen av den första bilden kommer skärmbilderna av parkopplingen ovan från en äldre version av **AAPS** och kan se annorlunda ut i **AAPS** 4.
       ```
    
    * Om du vill ta bort parkopplingen, tryck på **Ta bort parkoppling** på pumpskärmen och bekräfta **Återställ parkopplingen?**. Knappen **Parkoppling av Insight** visas sedan igen.
    
    Obs: Pumpen och telefonen är inte ständigt anslutna till varandra. **AAPS** ansluter bara när det behövs (till exempel för att ställa in en tillfällig basal, ge en bolus eller läsa pumphistoriken). Annars skulle batterierna i telefonen och pumpen ta slut alldeles för fort.
    
    (Accu-Chek-Insight-Pump-settings-in-aaps)=
    ## Inställningar i AAPS
    
    Öppna inställningarna med **Inställningar** på kortet **Accu-Chek Insight** i **Konfiguration** > **Pump**, eller med kugghjulsikonen uppe till höger på pumpskärmen.
    
    ![Inställningar för drivrutinen Accu-Chek Insight](../images/v4/Pumps/accu_chek_insight_settings.png)
    
    I inställningarna för Insight i **AAPS** kan du slå på följande alternativ:
    
    * **Logga reservoarbyten**: registrerar automatiskt ett byte av insulinreservoar när du byter reservoar i pumpen.
    
    * **Logga slangbyten**: lägger till en anteckning i databasen i **AAPS** när du kör programmet "tube filling" i pumpen.
    
    * **Logga kanylbyten**: lägger till en anteckning i databasen i **AAPS** när du kör programmet "cannula filling" i pumpen. **Obs: Ett kanylbyte återställer också Autosens.**
    
    * **Logga batteribyten**: registrerar ett batteribyte när du sätter i ett nytt batteri i pumpen.
    
    * **Logga när driftsläge ändras**: lägger till en anteckning i databasen i **AAPS** varje gång du startar, stoppar eller pausar pumpen.
    
    * **Logga varningar**: lägger till en anteckning i databasen i **AAPS** varje gång pumpen ger en varning (utom påminnelser samt avbruten bolus och tillfällig basal, som inte registreras).
    
    * **Aktivera emulering av tillfällig basal**: Insight-pumpen kan bara ställa in tillfälliga basaler (TBR) upp till 250 %. För att komma runt den gränsen gör emuleringen att pumpen ger en förlängd bolus för det extra insulinet om en tillfällig basal på mer än 250 % begärs.
    
      **Obs: Använd bara en förlängd bolus åt gången. Flera förlängda bolusar samtidigt kan orsaka fel.**
    
    * **Inaktivera vibration för manuell bolus**: gör att Insight-pumpen inte vibrerar när den ger en manuell bolus (eller förlängd bolus). Finns bara med Insight firmware 3.x.
    
    * **Inaktivera vibration för automatisk bolus**: gör att Insight-pumpen inte vibrerar när den ger en automatisk bolus (SMB eller tillfällig basal med emulering). Finns bara med Insight firmware 3.x.
    
    * **Min paus mellan återanslutningsförsök [s]** och **Max paus mellan återanslutningsförsök [s]**: hur länge **AAPS** väntar innan ett nytt försök efter ett misslyckat anslutningsförsök. Du kan välja från 0 till 20 sekunder. Om du har problem med anslutningen, välj en längre väntetid.
        <br><br>Exempel med min paus mellan försök = 5 och max paus mellan försök = 20
        <br><br>ingen anslutning -> vänta <b>5</b> s.
          <br>  nytt försök -> ingen anslutning -> vänta <b>6</b> s.
          <br>  nytt försök -> ingen anslutning -> vänta <b>7</b> s.
          <br>  nytt försök -> ingen anslutning -> vänta <b>8</b> s.
          <br>...
          <br>nytt försök -> ingen anslutning -> vänta <b>20</b> s.
          <br>nytt försök -> ingen anslutning -> vänta <b>20</b> s.
          <br>...
    
    * **Fördröjning av frånkoppling [s]**: hur länge (i sekunder) **AAPS** väntar innan den kopplar från pumpen när en åtgärd är klar. Du kan välja från 0 till 15 sekunder. Standardvärdet är 5 sekunder.
    
    För perioder när pumpen var stoppad loggar **AAPS** en tillfällig basal på 0 %.
    
    ### Pumpskärmen
    
    Pumpskärmen för Accu-Chek Insight (**Hantera → Pump**) visar pumpens aktuella status, till exempel **Status**, **Senast ansluten**, **Driftläge**, **Batterinivå**, **Reservoarnivå**, dagens totala dygnsdoser (**TDD bolus**, **TDD basal**), basaldoser och den senaste bolusen. När pumpen är parkopplad har den följande knappar:
    
    * **Uppdatera**: uppdaterar pumpens status.
    * **Aktivera aviseringar om avslutade tillfälliga basaler (pumpinställning)** / **Inaktivera aviseringar om avslutade tillfälliga basaler (pumpinställning)**: en vanlig Insight-pump ger ett larm när en tillfällig basal är slut. Den här knappen slår på eller av det larmet utan att du behöver konfigurationsprogrammet.
    * **Ta bort parkoppling**: tar bort parkopplingen med pumpen (se [Parkoppling](#accu-chek-insight-pairing)).
    
    ![Skärmbild av status för Insight](../images/Insight_Status2.png)
    
    ```{admonition} Äldre skärmbild
    :class: note
    Skärmbilden ovan kommer från en äldre version av **AAPS**. I **AAPS** 4 ser pumpskärmen annorlunda ut och har också knappen **Ta bort parkoppling**.
    

## Inställningar i pumpen

Ställ in larmen i pumpen så här:

* Menu > Settings > Device settings > Mode settings > Quiet > Signal > Sound
* Menu > Settings > Device settings > Mode settings > Quiet > Volume > 0 (ta bort alla staplar)
* Menu > Modes > Signal mode > Quiet

Det här tystar alla larm från pumpen, så att AAPS kan avgöra om ett larm är viktigt för dig. Om AAPS inte kvitterar ett larm blir det starkare (först pip, sedan vibration).

(Accu-Chek-Insight-Pump-vibration)=

### Vibration

Beroende på pumpens firmwareversion vibrerar Insight kort varje gång en bolus ges (till exempel när AAPS ger en SMB eller när emulering av tillfällig basal ger en förlängd bolus).

* Firmware 1.x: ingen vibration (så är pumpen byggd).
* Firmware 2.x: vibrationen kan inte stängas av.
* Firmware 3.x: AAPS ger bolus tyst.

Firmwareversionen finns i menyn.

## Byta batteri

Batteriet i Insight räcker 10 till 14 dagar när du loopar, som mest 20 dagar. Användaren som rapporterade detta använder litiumbatterier från Energizer.

Insight-pumpen har ett litet inbyggt batteri som håller igång viktiga funktioner, som klockan, medan du byter det löstagbara batteriet. Om batteribytet tar för lång tid kan det inbyggda batteriet ta slut. Då nollställs klockan och du får ange ny tid och nytt datum när du har satt i ett nytt batteri. Om det händer räknas alla poster i AAPS från före batteribytet inte längre med i beräkningarna, eftersom rätt tid inte kan fastställas.

(Accu-Chek-Insight-Pump-insight-specific-errors)=

## Fel som gäller Insight

### Extended bolus

Använd bara en förlängd bolus åt gången, eftersom flera förlängda bolusar samtidigt kan orsaka fel.

### Timeout

Ibland svarar Insight-pumpen inte medan **AAPS** upprättar anslutningen. **AAPS** visar då aviseringen "Timeout under handskakningen – starta om Bluetooth".

![Insight återställ Bluetooth](../images/Insight_ResetBT.png)

Om det händer, stäng av Bluetooth i pumpen OCH i telefonen i ungefär 10 sekunder och slå sedan på det igen.

## Byta tidszon med Insight-pumpen

Information om resor över tidszoner finns i avsnittet [Resa över tidszoner med pumpar](#timezone-traveling-insight).

## Var du kan få hjälp

Utvecklingen av drivrutinen för Insight görs av communityn på **frivillig** basis. Innan du ber om hjälp:

1. **Läs** det avsnitt i den här dokumentationen som gäller, för att se hur funktionen är tänkt att fungera.
2. **Fråga** i kanalen *#AAPS* på [Discord](https://discord.gg/4fQUWHZ4Mw) eller i någon av de andra [kanalerna i communityn](../GettingHelp/WhereCanIGetHelp.md).
3. **Rapportera en bugg** genom att först söka bland [befintliga ärenden](https://github.com/nightscout/AndroidAPS/issues). Om ditt problem inte finns där, skapa ett [nytt ärende](https://github.com/nightscout/AndroidAPS/issues) och bifoga dina [loggfiler](../GettingHelp/AccessingLogFiles.md).

När du ber om hjälp, ange telefonens märke och modell, Android-version, version av **AAPS** och en enkel och tydlig beskrivning av problemet (vad som ändrades, när det senast fungerade).