(Extended-Carbs-extended-carbs-ecarbs)=
# Forlengede karbohydrater / «eKarbo»

## Hva er eKarbo, og når er det nyttig?

Med vanlig pumpebehandling er forlengede boluser en god måte å håndtere fete måltider, eller andre måltider som tas opp sakte, og som øker blodsukkeret lenger enn insulinet virker. Med en loop gir forlengede boluser derimot mindre mening (og de skaper tekniske problemer), fordi de i praksis er en fast, høy midlertidig basal. Det strider mot måten loopen virker på, som er å justere basalen dynamisk. Se [forlenget bolus](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) nedenfor for detaljer.

Behovet for å håndtere slike måltider finnes likevel fortsatt. Derfor støtter AAPS såkalte forlengede karbohydrater, eller eKarbo.

eKarbo er karbohydrater som fordeles over flere timer. For vanlige måltider med mer karbohydrater enn fett/protein er det som regel nok å registrere karbohydratene på forhånd (og redusere den første bolusen om nødvendig) for å unngå at insulinet gis for tidlig.  Men for måltider som tas opp saktere, der full registrering av karbohydratene på forhånd gir for mye IOB fra SMB, kan eKarbo brukes til å simulere mer nøyaktig hvordan karbohydratene (og eventuelle karbohydratekvivalenter du registrerer for andre næringsstoffer) tas opp og påvirker blodsukkeret. Med denne informasjonen kan loopen gi SMB-er mer gradvis for å håndtere disse karbohydratene. Det kan ses på som en dynamisk forlenget bolus (dette bør også virke uten SMB, men er trolig mindre effektivt).

**Merk:** eKarbo er ikke begrenset til fete eller proteinrike måltider: det kan også brukes som hjelp i alle situasjoner der noe får blodsukkeret til å stige, for eksempel andre medisiner som kortikosteroider.

## Slik virker eKarbo

For å registrere eKarbo åpner du dialogen **Karbo** (**Behandlinger** → **Karbo**), skriver inn de totale karbohydratene, setter en **Varighet**, og flytter eventuelt starten med **Karbotid** (*tallene nedenfor er bare eksempler, du må prøve deg frem med egne verdier for å få en god blodsukkerrespons i dine situasjoner*):

![Registrer karbohydrater](../images/eCarbs_Dialog.png)

eKarbo på hovedskjermen: tallet i parentes i **COB**-feltet viser karbohydratene som fortsatt kommer, og **COB**-grafen viser hver fremtidig eKarbo-oppføring som et oransje merke. Hvis du ikke ser noen **COB**-graf, kan du legge til en med **Legg til graf** under grafene (se [AAPS-skjermbilder](../DailyLifeWithAaps/AapsScreens.md)).

![eKarbo i COB-feltet og på COB-grafen](../images/eCarbs_Graph.png)

(AapsScreens-carbs-type)=
## Karbotype i Boluskalkulatoren: brød, kake eller pizza

I [Boluskalkulatoren](#aaps-screens-bolus-wizard) lar tre knapper under **Karbo**-feltet deg velge hvor raskt måltidet tas opp. Velg én før du bekrefter. Avhengig av typen tar **AAPS** en del av karbohydratene du skrev inn som vanlige karbohydrater, og legger til [forlengede karbohydrater («eKarbo»)](#Extended-Carbs-extended-carbs-ecarbs) senere for langsomme, tunge måltider. Trykk på **(i)**-ikonet ved siden av knappene for å se typiske matvarer for den valgte typen og hva den gjør med karbohydratene dine.

| Type                | Typiske matvarer (slik de står i appen)                                                                                                   | Karbohydrater nå, brukt til bolusen | eKarbo som legges til                                  |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------------------------ |
| **Brød** (standard) | Brød, bakverk, yoghurt, frukt, poteter, ris, havregryn, grønnsaker                                                                        | 100 %                               | None                                                   |
| **Kake**            | Dumplings, pasta, asiatisk mat med høyt innhold av karbohydrater og fett, søte bakverk og gjærbakst, frokostblandinger, honning, syltetøy | 90 %                                | 20 %, starter 60 minutter senere, fordelt over 2 timer |
| **Pizza**           | Lasagne, pizza, hamburgere, pommes frites, bakte poteter, chips                                                                           | 80 %                                | 35 %, starter 60 minutter senere, fordelt over 3 timer |

**Eksempel**: du skriver inn 100 g og velger **Pizza**. Bolusen beregnes for 80 g, som registreres nå. 35 g eKarbo starter 1 time senere og fordeles over 3 timer.

Greit å vite:
* Dette er ikke en enkel deling: med **Kake** og **Pizza** blir de registrerte karbohydratene til sammen **mer enn du skrev inn** (110 % og 115 %). Det ekstra ligger bare i eKarbo.
* Bolusen dekker bare karbohydratene som tas nå. **AAPS** gir ikke bolus på forhånd for eKarbo: loopen tar hensyn til dem når de starter, som all annen [eKarbo](#Extended-Carbs-extended-carbs-ecarbs).
* Hvis du setter en **Karbotid**, starter eKarbo 60 minutter etter det tidspunktet.
* Bekreftelsesdialogen viser eKarbo på en egen linje, _for eksempel_ «eKarbo 35g / 3h (+60min)».
* Gram rundes ned til hele tall.
* Prosentene, forsinkelsene og varighetene er faste; de kan ikke endres i innstillingene.
* Valget huskes ikke: kalkulatoren åpner med **Brød** hver gang.

______________________________________________________________________

En måte å håndtere fett og protein med denne funksjonen på er beskrevet her: [https://adriansloop.blogspot.com/2018/04/page-margin-0.html](https://adriansloop.blogspot.com/2018/04/page-margin-0.html)

______________________________________________________________________

## Anbefalt oppsett, eksempel og viktige merknader

Det anbefalte oppsettet er å bruke APS-pluginen OpenAPS SMB, med SMB aktivert og innstillingen *Aktiver SMB med COB* slått på.

Et eksempel for pizza kan være å gi en (delvis) bolus på forhånd via *Boluskalkulator*, og så bruke dialogen *Karbo* til å registrere resten av karbohydratene med en varighet på 4–6 timer, med start etter 1 eller 2 timer.

For en raskere start kan *Boluskalkulator* legge til eKarbo for deg: velg [karbotypen](#AapsScreens-carbs-type) **Kake** eller **Pizza** under **Karbo**-feltet (se ovenfor). Mengdene og tidspunktene er faste, så bruk dialogen *Karbo* i stedet hvis du vil ha andre verdier.

**Viktige merknader:** Du må selvsagt prøve deg frem for å se hvilke konkrete verdier som passer for deg. Du kan også forsiktig justere innstillingen *Maks antall minutter med basal som kan bli SMB* for å gjøre algoritmen mer eller mindre aggressiv. Ved måltider med lite karbohydrater og mye fett/protein kan det være nok å bare bruke eKarbo uten manuelle boluser (se blogginnlegget ovenfor). Når eKarbo opprettes, lages det også en merknad i Helseportal som dokumenterer alt du la inn, slik at det blir lettere å justere og forbedre verdiene senere.

(extended-bolus-and-why-they-wont-work-in-closed-loop-environment)=
## Forlenget bolus, og hvorfor det ikke virker i en lukket loop

Som nevnt ovenfor virker forlengede eller kombinerte boluser («multiwave») egentlig ikke i en lukket loop. [Se nedenfor](#why-extended-boluses-won-t-work-in-a-closed-loop-environment) for detaljer

(Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)=
### Forlenget bolus og bytte til åpen loop – bare Dana- og Insight-pumper

Noen ba likevel om en mulighet til å bruke forlenget bolus i AAPS, fordi de ville håndtere spesielle matvarer slik de er vant til.

Derfor tilbyr **AAPS** forlenget bolus for brukere av Dana- og Insight-pumper: åpne **Administrer** og velg **Forlenget bolus**.

**AAPS** advarer deg først om at den lukkede loopen stoppes mens den forlengede bolusen kjører. Trykk på **OK** for å fortsette:

![Advarsel: forlenget bolus stopper lukket loop](../images/extended_bolus_stops_loop.png)

Skriv inn mengden **Insulin** og **Varighet**, trykk så på bekreft-knappen nederst og **OK**:

![Dialogen Forlenget bolus med 2 E over 60 minutter](../images/extended_bolus_dialog.png)

På Insight-pumpen er forlenget bolus *ikke tilgjengelig* hvis [TBR-emulering](#Accu-Chek-Insight-Pump-settings-in-aaps) brukes.

Mens den forlengede bolusen kjører, kjører loopen i **Åpen Loop**-modus (loop-ikonet på hovedskjermen endres), og lukket loop slås på igjen automatisk når den forlengede bolusen er ferdig:

![Åpen Loop-ikonet på hovedskjermen mens en forlenget bolus kjører](../images/extended_bolus_main_screen.png)

Menyen **Administrer** viser en **Avbryt**-knapp med hastigheten og medgått / total tid (for eksempel **Avbryt 2,00 E/t 1/60'**). Trykk på den for å stoppe den forlengede bolusen før tiden:

![Avbryt-knappen for en forlenget bolus som kjører, i menyen Administrer](../images/extended_bolus_running_manage.png)

(why-extended-boluses-won-t-work-in-a-closed-loop-environment)=
### Hvorfor forlengede boluser ikke virker i en lukket loop

1. Loopen bestemmer at det nå skal gis 1,55 E/t. Om dette gis som forlenget bolus eller TBR, spiller ingen rolle for algoritmen. Faktisk bruker noen av pumpene forlenget bolus til dette. Hva skal da skje? De fleste pumpedriverne stopper da den forlengede bolusen -> Du trengte ikke engang å starte den.

2. Hvis den forlengede bolusen var en inndata, hva skulle da skje i modellen?

   1. Skal den regnes som nøytral sammen med basalen (BR), og loopen kjøre oppå det? Da bør loopen vel også kunne redusere bolusen hvis du for eksempel blir for lav og alt det «nøytrale» insulinet tas bort?
   2. Skal den forlengede bolusen rett og slett legges til? Skal loopen altså bare fortsette som før? Selv ved den verste hypoen? Jeg synes ikke det er så bra: En hypo er forutsett, men den skal ikke forhindres?

3. IOB-en som den forlengede bolusen bygger opp, blir synlig etter 5 minutter, ved neste kjøring. Loopen ville da gi mindre basal. Så det endrer ikke mye … bortsett fra at muligheten til å unngå hypo blir borte.
