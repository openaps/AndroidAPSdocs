# Pumper og kanyler

## Bytte infusjonssett: insulinreservoar og kanyle

Fremgangsmåten nedenfor gjelder bare slangepumper, og gjelder ikke patch-pumper som Omnipod, Medtrum Nano, Accu-Chek Solo osv. Dette kalles noen ganger «settbytte», der et «fullt» settbytte omfatter både insulinreservoaret og kanylen, og et «delvis» settbytte bare er bytte av kanylen.

Patch-pumper fyller og primer seg selv i sin egen aktiveringsveiviser, og kanylen deres er allerede i kroppen. **AAPS** tilbyr ingen priming for dem: **Prime/fylling** vises ikke i arket **Administrer** eller i Hurtigstart. Se siden for pumpen din under [Kompatible pumper](../Getting-Started/CompatiblePumps.md).

Fysisk bytte av ampulle/reservoar kan ikke gjøres via **AAPS** og må gjøres direkte på pumpen. Dette må logges manuelt i **AAPS** når det er gjort.

(pumps-cannulas-changing-reservoir-and-cannula)=
### Veiledning for bytte av både reservoar og kanyle

1. Koble fra pumpen i **AAPS**: trykk på [loop-ikonet](#AapsScreens-loop-status) på hovedskjermen og velg **Koble fra pumpen** i 1 time. Ikonet endres til et grått støpselikon, som viser at pumpen er frakoblet.

2. Bytt insulinreservoaret fysisk: koble pumpen fra kroppen, og bytt reservoar/ampulle og kanyle slik produsenten beskriver.

3. Prime/fyll slangen og kanylen: dette kan gjøres direkte på pumpen. Pass på å fjerne alle luftbobler i slangen.

4. Fest den nye kanylen på kroppen. Når kanylen er satt inn og nålen er tatt ut, har den festede kanylen et lite luftrom som også må primes. For å registrere dette i **AAPS** og prime stedet: åpne **Prime/fylling** (i det utvidede statuspanelet på hovedskjermen, i arket **Administrer**, eller som en [Hurtigstart](QuickLaunch.md)-knapp) og huk av **Logg bytte av pumpested** og/eller **Logg bytte av insulinampull** etter behov for å registrere byttet. Trykk nå på standardmengden for priming av kanylen (den er vanligvis rundt 0,3 E, men sjekk at verdien er riktig for kanylen din) og velg **OK**. Les oppsummeringsmeldingen, og bekreft primingen ved å trykke på **OK**.

   ![Prime/fylling i Administrer-arket med en slangepumpe](../images/v4/Screens/manage_sheet_tube_pump.png)


5. Koble til pumpen igjen i **AAPS**: trykk på det grå støpselikonet og velg **Koble til pumpen på nytt** for å fortsette loopingen.

### Nyttig informasjon om bytte av insulin/kanyle

* Når du logger et bytte av pumpested, tilbakestilles Autosens til 100 %. Det tilbakestiller også statuslysene og alderen for kanyle/insulin på hovedskjermen i **AAPS**.

* Du kan sette/justere standardmengdene for priming i innstillingene for **Prime/fylling** — skriv «prime» i søkefeltet på hovedskjermen for å åpne dem (se [Innstillinger](../SettingUpAaps/Preferences.md)). Se bruksanvisningen i kanyleesken for hvor mange enheter (avhengig av nålelengde og slangelengde) som skal primes for kanylen din.

* Insulin som leveres med prime-funksjonen, tas ikke med når **AAPS** beregner aktivt insulin (IOB), og merkes som «Prime» i [Behandlingshistorikk](#aaps-screens-treatments).

* Insulin du gir som bolus fra pumpen mens pumpen er frakoblet, blir heller ikke tatt med av **AAPS**. Hvis du gir en bolus direkte fra pumpen mens **AAPS** er frakoblet, kan du registrere dette insulinet (uten å gi det) i dialogen **Insulin** når du har koblet til pumpen igjen (se [Registrere insulin som er gitt, uten å gi en bolus](#pumps-cannulas-announce-insulin) nedenfor).

### Problemer med kanyle, infusjonssted, slange og/eller pumpe

Hvis du er sikker på at du ikke har fått insulin i en periode, selv om **AAPS** har registrert at du har fått det, og du vet nøyaktig når problemet startet (_f.eks._ du tar ut kanylen og ser at den ble bøyd da den ble satt inn), kan du rette dette i **AAPS**. Vær likevel klar over at insulinet faktisk kan ha blitt levert, men av en eller annen grunn virker sakte.

```{admonition} Caution - Risk of Hypoglycemia
:class: danger
Slett insulinlevering fra **AAPS** bare med EKSTREM forsiktighet, i tilfelle insulinet faktisk _har_ blitt levert, og følg BS nøye de neste 24 timene.
```

For å fjerne boluser og SMB-er som du vet ikke er levert, åpner du **menyen** (☰), velger [Behandlingshistorikk](#aaps-screens-treatments) og sletter forsiktig de loggførte bolusene på fanen **Karbo og bolus**, fra det tidspunktet problemet oppsto. Dette retter verdien for «aktivt insulin» (IOB), som er sentral i beregningene til **AAPS**; hvis du nå går tilbake til hovedskjermen, ser du at IOB har gått ned. Vær oppmerksom på at du ikke kan slette basalinsulin som **AAPS** har beregnet som levert, så det vil fortsatt bli tatt med i beregningene til **AAPS**.

I mindre opplagte tilfeller av problemer med insulintilførselen, _f.eks._ lekkasje, okklusjon eller tunnelering, der du enten ikke er sikker på når problemet startet, eller tror at noe av insulinet ble levert, må du være forsiktig. Du kan oppdage slike problemer ved at du «lukter» insulinet, ser at plasteret er vått, får høye glukoseverdier eller får en alarm. Siden du aldri vet hvor mye insulin som kom inn under huden (og som kanskje begynner å virke etter en stund), er det vanskelig å avgjøre hvor mye insulin som skal trekkes fra den gjeldende verdien for «aktivt insulin» (IOB). En strategi er å sette loopingen på pause i 5 timer (eller insulinets virkningstid (DIA) som du bruker) etter at du har løst problemet med insulinleveringen, og så gjenoppta loopingen etterpå. Dette sikrer at IOB er riktig når du starter loopingen igjen.

(pumps-cannulas-disconnecting)=
## Koble fra pumpen ved dusjing eller aktivitet

Hvis du tar av pumpen for å dusje, bade, svømme, drive kontaktsport eller andre aktiviteter, må du fortelle **AAPS** at det ikke leveres insulin, slik at IOB holder seg riktig. Pumpen kan kobles fra med [loop-ikonet](#AapsScreens-loop-status) på hovedskjermen: trykk på det og velg **Koble fra pumpen** med den varigheten du trenger. Hvis aktiviteten tar lengre tid enn planlagt, åpner du den samme dialogen igjen og velger en ny varighet under **Koble fra pumpen**: frakoblingen forlenges, og den nye varigheten starter fra nå. Du trenger ikke koble til først.

Siden du ikke får insulin mens pumpen er frakoblet, bør du koble til igjen hver andre time for å ta igjen den manglende basalen. Dette kan du gjøre ved å koble til pumpen, gi en bolus for den manglende basalmengden (_f.eks._ for de siste to timene) og så koble fra igjen. Dette bør hjelpe deg å unngå en alvorlig insulinmangel som kan føre til diabetisk ketoacidose (DKA). Hvis det er upraktisk å koble til pumpen igjen under aktiviteten (kanylestedet er dekket av en våtdrakt _osv._), kan du vurdere en injeksjon med penn i stedet. Denne manuelle injeksjonen kan logges i **AAPS**, og den trenger ikke logges når du setter den (bare noter tidspunktet), siden du kan registrere insulinet og tilbakedatere tidspunktet det faktisk ble gitt, når du kobler til pumpen igjen.

(pumps-cannulas-announce-insulin)=
## Registrere levert insulin uten å faktisk gi en bolus

For å registrere insulin som er gitt fra pumpen mens **AAPS** var frakoblet, eller med penn: åpne [Insulin-dialogen](#aaps-screens-buttons-insulin) (**Behandlinger** i navigasjonslinjen nederst, eller en Hurtigstart-knapp), skriv inn mengden i enheter og slå på **Bolus vil bare bli loggført**. En rad **Tid** (satt til **Nå**) lar deg så registrere det faktiske tidspunktet for injeksjonen: du kan ignorere den hvis injeksjonen ble gitt nylig. Hvis bolusen ble gitt for en stund siden, bruker du **-** for å flytte tiden bakover (_f.eks._ -30 min), eller åpner raden med pilen for å velge nøyaktig dato og klokkeslett. **AAPS** tar da hensyn til insulinets virkningstid og beregner hvor mye insulin som fortsatt er igjen i kroppen.

Hvis du bruker **AAPS** som omsorgsperson, kan du enkelt koble fra (og koble til) pumpen på avstand med en [SMS-kommando](../RemoteFeatures/SMSCommands.md), for eksempel «pump disconnect 120» og «pump connect 120». Varigheten for fjernstyrt frakobling kan være fra 1 til 120 min (i dette eksempelet er det 120 minutter). Dette er svært nyttig hvis **AAPS**-telefonen er vanskelig for deg å få tak i, for eksempel fordi den ligger i et pumpebelte på et barn som løper mot svømmehallen, eller blir nøye voktet (eller brukt) av en tenåring.

## Koble til pumpen igjen etter aktivitet

Etter en lang frakobling (1–2 timer) er det ganske vanlig at **AAPS** beregner at du nå har negativ IOB. Når du kobler til pumpen igjen, kan du, avhengig av hva du foretrekker, nåværende blodsukker, planlagt mat eller aktivitet etterpå, gjøre ett av følgende:

a) Bare koble til pumpen igjen i **AAPS** (fra grå til grønn, for lukket loop) og la **AAPS** begynne å levere insulin igjen

_eller_

b) Hvis du vil være mer aggressiv (for eksempel fordi du er på vei mot hyperglykemi), kan du åpne [Boluskalkulator](#aaps-screens-bolus-wizard) og gi en bolus for null karbohydrater, slik at det beregnede manglende insulinet gis som en bolus med en gang.

Hvilken strategi du foretrekker, er svært personlig, og du finner den best ved å prøve deg fram.


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
