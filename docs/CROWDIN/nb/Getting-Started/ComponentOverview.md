# Oversikt over komponentene

**AAPS** er ikke bare en (selvbygd) app; det er én av flere moduler i det lukkede loop-systemet ditt. Før du bestemmer deg for komponenter, er det lurt å lese dokumentasjonen for komponentene.

![Oversikt over komponentene](../images/modules.png)

```{admonition} IMPORTANT SAFETY NOTICE
:class: important

Grunnlaget for sikkerhetsfunksjonene i **AAPS** som beskrives i denne dokumentasjonen, er sikkerhetsfunksjonene i maskinvaren du bygger systemet ditt med. For å lukke en loop med automatisk insulindosering er det helt avgjørende at du bare bruker en insulinpumpe og en CGM som er testet, fungerer fullt ut og er godkjent av de offisielle myndighetene i landet ditt. Endringer i maskinvare eller programvare på disse komponentene kan gi uventet insulindosering, og det utgjør en betydelig risiko for brukeren. Hvis du finner eller blir tilbudt ødelagte, modifiserte eller hjemmelagde insulinpumper eller CGM-mottakere, **ikke bruk** dem til å lage et **AAPS**-system.

I tillegg er det like viktig å bare bruke originalt forbruksmateriell, som innstikkere, kanyler og insulinbeholdere som produsenten har godkjent for bruk med pumpen eller CGM-en din. Bruk av utestet eller modifisert utstyr kan gi unøyaktige CGM-verdier og feil i insulindoseringen. Insulin er svært farlig ved feil dosering – ikke sett livet på spill ved å tukle med utstyret ditt.

Sist, men ikke minst: du må ikke ta SGLT-2-hemmere (glifloziner), fordi de senker blodsukkeret på en måte som ikke kan beregnes. Kombinasjonen med et system som senker basaldosene for å øke BS, er spesielt farlig, fordi gliflozinet kan gjøre at denne stigningen i BS uteblir, og det kan oppstå en farlig tilstand med insulinmangel. [Mer informasjon her](#PreparingForAaps-no-sglt-2-inhibitors).
```

## Nødvendige moduler

### God individuell doseringsalgoritme for diabetesbehandlingen din

Selv om dette ikke er noe du lager eller kjøper, er det trolig den mest undervurderte «modulen» – men den er helt nødvendig. Når du lar en algoritme hjelpe til med å styre diabetesen din, må den kjenne de riktige innstillingene, slik at den ikke gjør alvorlige feil. Selv om du fortsatt mangler andre moduler, kan du allerede nå kontrollere og tilpasse **Profilen** din sammen med diabetesteamet ditt.

**Profilen** inneholder:

- BR (basaldoser): gir bakgrunnsinsulin;
- ISF (insulinfølsomhetsfaktor): hvor mye blodsukkeret ditt senkes av 1 enhet insulin;
- CR (karbohydratfaktor, IK): hvor mange gram karbohydrater én enhet insulin dekker.

De fleste loopere bruker døgnvarierende basal, ISF og IK, som tar høyde for at hormonene endrer insulinfølsomheten gjennom dagen.

Ved siden av **Profilen** din må du også sette opp **insulinet** ditt i **Administrer → Insulininnstillinger**, inkludert DIA (insulinets virketid) – se [Insulininnstillinger](#Config-Builder-insulin-dia).

Mer informasjon om **Profilen** din finner du [på den egne siden](../SettingUpAaps/YourAapsProfile.md).

### Telefon

Se den egne siden [Telefoner](../Getting-Started/Phones.md).

### Insulinpumpe

Se den egne siden [Kompatible pumper](../Getting-Started/CompatiblePumps.md).

**Fordeler og ulemper med noen pumpemodeller**

Combo, Insight og de eldre Medtronic-pumpene er solide pumper, og de kan loopes. Combo har den fordelen at det finnes mange flere typer infusjonssett å velge mellom, fordi den har standard Luer-Lock. Og batteriet er et vanlig batteri du kan kjøpe på enhver bensinstasjon eller døgnåpen kiosk, og hvis du virkelig trenger ett, kan du stjele/låne det fra fjernkontrollen på hotellrommet ;-).

Fordelene med DanaR/RS og Dana-i sammenlignet med Combo som pumpevalg er likevel:

- Første paring er enklere med Dana-i/RS. Men det gjør du vanligvis bare én gang, så det har bare betydning hvis du vil teste en ny funksjon med ulike pumper.
- Så langt fungerer Combo med skjermlesing (screen parsing). Generelt fungerer det godt, men det er tregt. For looping betyr dette lite, siden alt skjer i bakgrunnen. Likevel må du være tilkoblet mye lenger, så det er mer tid der BT-tilkoblingen kan brytes, og det er ikke så lett hvis du går vekk fra telefonen mens du gir bolus og lager mat.
- Combo vibrerer når en midlertidig basal (TBR) slutter, DanaR vibrerer (eller piper) ved SMB. Om natten bruker du trolig TBR mer enn SMB.  Dana-i/RS kan settes opp slik at den verken piper eller vibrerer.
- At historikken på Dana-i/RS, med karbohydrater, kan leses på få sekunder, gjør det enkelt å bytte telefon mens du er frakoblet og fortsette loopingen så snart noen CGM-verdier er på plass.
- Alle pumpene **AAPS** kan snakke med, er vanntette ved levering. Bare Dana-pumpene er også «vanntette med garanti», på grunn av det forseglede batterirommet og systemet for fylling av reservoaret.

### BS-kilde

Se den egne siden [Kompatible CGM-er](../Getting-Started/CompatiblesCgms.md).

### **AAPS**-.apk-fil

Hovedkomponenten i systemet. For å installere appen må du først bygge apk-filen selv. Instruksjonene finner du [her](../SettingUpAaps/BuildingAaps.md).

### Rapporteringsserver

En rapporteringsserver viser glukose- og behandlingsdataene dine og lager rapporter for detaljert analyse. Det finnes for tiden to rapporteringsservere som kan brukes med AAPS: [Nightscout](#SettingUpTheReportingServer-nightscout) og [Tidepool](#SettingUpTheReportingServer-tidepool). Begge gir deg måter å se diabetesdataene dine over tid, statistikk om **tid i målområdet** (TIR) og andre mål.

Rapporteringsserveren er uavhengig av de andre modulene. Hvis du ikke vil bruke en rapporteringsserver, bør du vite at den ikke er obligatorisk for å kjøre **AAPS** på lang sikt. Men du må likevel sette opp en, fordi den kreves for å fullføre [**Opplæringsmål 1**](#objectives-objective1).

Mer informasjon om hvordan du setter opp rapporteringsserveren din finner du [her](../SettingUpAaps/SettingUpTheReportingServer.md).

## Valgfrie moduler

### Smartklokke

Du kan velge en hvilken som helst smartklokke med **Wear OS 3** eller nyere. Se [Smartklokker](../Getting-Started/Watches.md) for detaljer.

Brukerne lager en [liste over testede telefoner og klokker](#Phones-list-of-tested-phones). Det finnes ulike urskiver for bruk med **AAPS**, som du finner [her](../WearOS/WearOsSmartwatch.md).

### xDrip

Selv om du ikke trenger xDrip-appen som **BS-kilde**, kan du fortsatt bruke den, for eksempel til alarmer eller en annen visning av blodsukkeret. Du kan ha så mange alarmer du vil, angi når en alarm skal være aktiv, velge om den kan overstyre lydløs modus, osv. Litt informasjon om xDrip finner du [her](../CompatibleCgms/xDrip.md). Vær klar over at dokumentasjonen for denne appen ikke alltid er oppdatert, fordi den endrer seg raskt.

## Hva du kan gjøre mens du venter på moduler

Det tar noen ganger en stund å få tak i alle modulene som trengs for å lukke loopen. Men ingen grunn til bekymring, det er mye du kan gjøre mens du venter. Det er **nødvendig** å kontrollere og (om nødvendig) tilpasse basaldoser (BR), karbohydratfaktor (IK), insulinfølsomhetsfaktor (ISF) osv. Og kanskje kan åpen loop være en god måte å teste systemet og bli kjent med **AAPS** på. I denne modusen gir **AAPS** behandlingsforslag som du kan utføre manuelt.

Du kan fortsette å lese dokumentasjonen her, komme i kontakt med andre loopere på nett eller i virkeligheten, [lese](../UsefulLinks/BackgroundReading.md) dokumentasjon eller det andre loopere skriver (men vær forsiktig, ikke alt er riktig eller bra for deg å gjøre etter).

**Ferdig?** Hvis du har alle **AAPS**-komponentene samlet (gratulerer!), eller i det minste nok til å starte i åpen loop, bør du først lese [beskrivelsen av opplæringsmålet](../SettingUpAaps/CompletingTheObjectives.md) før hvert nye opplæringsmål, og sette opp maskinvaren din.
