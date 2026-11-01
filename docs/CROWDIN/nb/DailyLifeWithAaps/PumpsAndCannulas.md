# Pumper og kanyler

## Changing infusion sets: insulin reservoirs and cannulas

The procedure described below is for tubed pumps only and does not apply to patch pumps like Omnipod, Medtrum Nano, Accu-Chek Solo etc. Dette kalles noen ganger «settbytte», der et «fullt» settbytte omfatter både insulinreservoaret og kanylen, og et «delvis» settbytte bare er bytte av kanylen.

Patch-pumper fyller og primer seg selv i sin egen aktiveringsveiviser, og kanylen deres er allerede i kroppen. **AAPS** tilbyr ingen priming for dem: **Prime/fylling** vises ikke i arket **Administrer** eller i Hurtigstart. Se siden for pumpen din under [Kompatible pumper](../Getting-Started/CompatiblePumps.md).

Fysisk bytte av ampulle/reservoar kan ikke gjøres via **AAPS** og må gjøres direkte på pumpen. Dette må logges manuelt i **AAPS** når det er gjort.

(pumps-cannulas-changing-reservoir-and-cannula)=
### Guide for changing both the pump reservoir and cannula

1. Koble fra pumpen i **AAPS**: trykk på [loop-ikonet](#AapsScreens-loop-status) på hovedskjermen og velg **Koble fra pumpen** i 1 time. Ikonet endres til et grått støpselikon, som viser at pumpen er frakoblet.

2. Physically change the insulin reservoir: physically disconnect your pump from the body, and change the reservoir/cartridge and cannula as per manufacturer's instructions.

3. Prime/fill the tubing and cannula: this can be done directly on the pump. Be sure to eliminate any bubbles in the tubing.

4. Attach the new cannula to the body. Once the cannula is inserted and the needle is removed, the attached cannula now has a small air gap which also needs to be primed. For å registrere dette i **AAPS** og prime stedet: åpne **Prime/fylling** (i det utvidede statuspanelet på hovedskjermen, i arket **Administrer**, eller som en [Hurtigstart](QuickLaunch.md)-knapp) og huk av **Logg bytte av pumpested** og/eller **Logg bytte av insulinampull** etter behov for å registrere byttet. Trykk nå på standardmengden for priming av kanylen (den er vanligvis rundt 0,3 E, men sjekk at verdien er riktig for kanylen din) og velg **OK**. Les oppsummeringsmeldingen, og bekreft primingen ved å trykke på **OK**.

   ![Prime/fylling i Administrer-arket med en slangepumpe](../images/v4/Screens/manage_sheet_tube_pump.png)


5. Koble til pumpen igjen i **AAPS**: trykk på det grå støpselikonet og velg **Koble til pumpen på nytt** for å fortsette loopingen.

### Useful information concerning insulin/cannula changes

* Når du logger et bytte av pumpested, tilbakestilles Autosens til 100 %. Det tilbakestiller også statuslysene og alderen for kanyle/insulin på hovedskjermen i **AAPS**.

* Du kan sette/justere standardmengdene for priming i innstillingene for **Prime/fylling** — skriv «prime» i søkefeltet på hovedskjermen for å åpne dem (se [Innstillinger](../SettingUpAaps/Preferences.md)). See your instruction booklet in your cannula box for how many units (depending on needle length and tubing length) should be primed for your cannula.

* Insulin som leveres med prime-funksjonen, tas ikke med når **AAPS** beregner aktivt insulin (IOB), og merkes som «Prime» i [Behandlingshistorikk](#aaps-screens-treatments).

* Insulin du gir som bolus fra pumpen mens pumpen er frakoblet, blir heller ikke tatt med av **AAPS**. Hvis du gir en bolus direkte fra pumpen mens **AAPS** er frakoblet, kan du registrere dette insulinet (uten å gi det) i dialogen **Insulin** når du har koblet til pumpen igjen (se [Registrere insulin som er gitt, uten å gi en bolus](#pumps-cannulas-announce-insulin) nedenfor).

### Cannula, infusion site, tubing and/or pump issues

Hvis du er sikker på at du ikke har fått insulin i en periode, selv om **AAPS** har registrert at du har fått det, og du vet nøyaktig når problemet startet (_f.eks._ du tar ut kanylen og ser at den ble bøyd da den ble satt inn), kan du rette dette i **AAPS**. Vær likevel klar over at insulinet faktisk kan ha blitt levert, men av en eller annen grunn virker sakte.

```{admonition} Caution - Risk of Hypoglycemia
:class: danger
Only delete insulin delivery from **AAPS** with EXTREME caution, in case insulin _has_ actually been delivered, and monitor BG closely for the next 24 h.
```

For å fjerne boluser og SMB-er som du vet ikke er levert, åpner du **menyen** (☰), velger [Behandlingshistorikk](#aaps-screens-treatments) og sletter forsiktig de loggførte bolusene på fanen **Karbo og bolus**, fra det tidspunktet problemet oppsto. Dette retter verdien for «aktivt insulin» (IOB), som er sentral i beregningene til **AAPS**; hvis du nå går tilbake til hovedskjermen, ser du at IOB har gått ned. Vær oppmerksom på at du ikke kan slette basalinsulin som **AAPS** har beregnet som levert, så det vil fortsatt bli tatt med i beregningene til **AAPS**.

I mindre opplagte tilfeller av problemer med insulintilførselen, _f.eks._ lekkasje, okklusjon eller tunnelering, der du enten ikke er sikker på når problemet startet, eller tror at noe av insulinet ble levert, må du være forsiktig. Du kan oppdage slike problemer ved at du «lukter» insulinet, ser at plasteret er vått, får høye glukoseverdier eller får en alarm. Siden du aldri vet hvor mye insulin som kom inn under huden (og som kanskje begynner å virke etter en stund), er det vanskelig å avgjøre hvor mye insulin som skal trekkes fra den gjeldende verdien for «aktivt insulin» (IOB). One strategy is to pause looping for 5 hours (or your specific duration of insulin action) after you resolved the insulin delivery problem, and resume looping afterwards. This will ensure that IOB is correct once you restart looping.

(pumps-cannulas-disconnecting)=
## Disconnecting the pump for showering or activity

Hvis du tar av pumpen for å dusje, bade, svømme, drive kontaktsport eller andre aktiviteter, må du fortelle **AAPS** at det ikke leveres insulin, slik at IOB holder seg riktig. Pumpen kan kobles fra med [loop-ikonet](#AapsScreens-loop-status) på hovedskjermen: trykk på det og velg **Koble fra pumpen** med den varigheten du trenger. Hvis aktiviteten tar lengre tid enn planlagt, åpner du den samme dialogen igjen og velger en ny varighet under **Koble fra pumpen**: frakoblingen forlenges, og den nye varigheten starter fra nå. Du trenger ikke koble til først.

As you are not getting any insulin while the pump is disconnected, you should reconnect every two hours to catch up for the missing basal. Dette kan du gjøre ved å koble til pumpen, gi en bolus for den manglende basalmengden (_f.eks._ for de siste to timene) og så koble fra igjen. This should help to avoid a severe lack of insulin which could result in diabetic ketoacidosis (DKA). Hvis det er upraktisk å koble til pumpen igjen under aktiviteten (kanylestedet er dekket av en våtdrakt _osv._), kan du vurdere en injeksjon med penn i stedet. Denne manuelle injeksjonen kan logges i **AAPS**, og den trenger ikke logges når du setter den (bare noter tidspunktet), siden du kan registrere insulinet og tilbakedatere tidspunktet det faktisk ble gitt, når du kobler til pumpen igjen.

(pumps-cannulas-announce-insulin)=
## To announce delivered insulin without actually bolusing

For å registrere insulin som er gitt fra pumpen mens **AAPS** var frakoblet, eller med penn: åpne [Insulin-dialogen](#aaps-screens-buttons-insulin) (**Behandlinger** i navigasjonslinjen nederst, eller en Hurtigstart-knapp), skriv inn mengden i enheter og slå på **Bolus vil bare bli loggført**. En rad **Tid** (satt til **Nå**) lar deg så registrere det faktiske tidspunktet for injeksjonen: du kan ignorere den hvis injeksjonen ble gitt nylig. Hvis bolusen ble gitt for en stund siden, bruker du **-** for å flytte tiden bakover (_f.eks._ -30 min), eller åpner raden med pilen for å velge nøyaktig dato og klokkeslett. **AAPS** tar da hensyn til insulinets virketid og beregner hvor mye insulin som fortsatt er igjen i kroppen.

Hvis du bruker **AAPS** som omsorgsperson, kan du enkelt koble fra (og koble til) pumpen på avstand med en [SMS-kommando](../RemoteFeatures/SMSCommands.md), for eksempel «pump disconnect 120» og «pump connect 120». The range of duration for remote disconnect is from 1 - 120 min, (in this example it is 120 minutes). Dette er svært nyttig hvis **AAPS**-telefonen er vanskelig for deg å få tak i, for eksempel fordi den ligger i et pumpebelte på et barn som løper mot svømmehallen, eller blir nøye voktet (eller brukt) av en tenåring.

## Reconnecting the pump after activity

Etter en lang frakobling (1–2 timer) er det ganske vanlig at **AAPS** beregner at du nå har negativ IOB. When you reconnect the pump, depending on preference/current glucose level/planned food or subsequent activity, you can either:

a) Bare koble til pumpen igjen i **AAPS** (fra grå til grønn, for lukket loop) og la **AAPS** begynne å levere insulin igjen

_eller_

b) Hvis du vil være mer aggressiv (for eksempel fordi du er på vei mot hyperglykemi), kan du åpne [Boluskalkulator](#aaps-screens-bolus-wizard) og gi en bolus for null karbohydrater, slik at det beregnede manglende insulinet gis som en bolus med en gang.

Which strategy you prefer is highly personal, and is best determined by trial and error.


(Aapsscreens-site-rotation)=
## Rotasjon av sted

**Administrer → Rotasjon av sted** åpner dialogen Rotasjon av sted i visningsmodus:

- Med de to knappene øverst (kanyleikon og sensorikon) kan du vise bare kanylesteder, bare sensorsteder, eller begge deler
- Alle hendelser for kanylebytte og sensorbytte fra de siste 45 dagene er tilgjengelige.
- Trykk på et område på kroppen, eller på en oppføring i listen nedenfor, for å filtrere listen slik at bare oppføringer i det valgte området vises. Det valgte området markeres med lysegrønn farge.
- Trykk på **blyant**-ikonet ved siden av en oppføring for å åpne redigeringsvisningen og oppdatere sted, pil eller merknad

![Visningsmodus](../images/SiteRotation/ViewMode.png)

- **Tannhjul**-ikonet (øverst til høyre) åpner innstillingene: **Brukerprofil for stedsrotasjon** åpner en dialog der du velger **Mann**, **Kvinne** eller **Barn**, og bryterne **Administrer pumpe-stedsrotasjon** og **Administrer sensor-stedsrotasjon** velger hvilke steder du administrerer.

![Innstillinger](../images/SiteRotation/Settings.png)

![Dialogen Brukerprofil for stedsrotasjon](../images/SiteRotation/Type.png)

*Merk: denne innstillingen bestemmer om dialogen Rotasjon av sted (redigeringsmodus) skal åpnes automatisk eller ikke når en ny oppføring lages fra knappen «Prime/fylling» eller knappen «Sensorbytte»*

- For et stedsbytte gjort direkte på pumpen må du åpne visningsmodus og redigere den nye oppføringen for å velge sted og pil

I redigeringsmodus kan du velge sted, pil og merknad for den valgte oppføringen:

- Oppføringen du redigerer, vises under kroppsbildene, med typeikonet sitt (kanyle eller sensor)
- Forside og bakside vises side om side: trykk på området der du plasserte den
- Når et sted er valgt (markert i grønt), ser du i listen nedenfor alle oppføringer som er gjort på dette stedet de siste 45 dagene

![Redigeringsmodus](../images/SiteRotation/EditMode.png)

- Du kan legge til en valgfri pil ved å trykke på pil-ikonet til høyre for oppføringen: dialogen **Velg pil** lar deg angi et mer nøyaktig sted eller retningen på poden

![Posisjon](../images/SiteRotation/EditModeSub.png)

- Du kan også legge til en **merknad** om det valgte stedet
- Trykk på **lagre**-ikonet (øverst til høyre) for å registrere stedet

Du kan filtrere grafisk på bildet, eller ved å trykke på en hendelse i listen For å fjerne filteret trykker du på bildet utenfor alle steder

![Filtrering](../images/SiteRotation/Filtering.png)
