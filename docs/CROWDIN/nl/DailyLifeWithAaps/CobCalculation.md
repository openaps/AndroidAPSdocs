# COB berekening

## Hoe berekent AAPS de COB-waarde?

Als de gebruiker koolhydraten invoert bij een maaltijd of als koolhydraatcorrectie, telt **AAPS** deze op bij de huidige actieve koolhydraten (**COB**). **AAPS** berekent dan de opname van de koolhydraten op basis van de gemeten afwijkingen in de **BG**-waarden van de gebruiker. De snelheid van opname hangt af van de koolhydraatgevoeligheidsfactor (**CSF**). Dit is geen instelling in het **Profiel** van de gebruiker. **AAPS** berekent het uit de instelling van **ISF/I:C**. Het geeft aan met hoeveel mg/dl 1 g koolhydraten de **BG** van de gebruiker verhoogt.

## Koolhydraatgevoeligheidsfactor (Carb Sensitivity Factor)

De formule die **AAPS** gebruikt is:

- absorbed_carbs = deviation * ic / isf.

Het effect van het **Profiel** van de gebruiker:

- _increase_ **IC** - by increasing the carbs absorbed every 5 minutes thus shorten total time of absorption;

- _verhogen_ van de **ISF** - verlaagt de opgenomen koolhydraten per 5 minuten en maakt de totale opnametijd dus langer; en

- _change_ **Profile Percentage** - increase/decrease both values thus has no impact on carbs absorption time.

For example, if the user’s **Profile** **ISF** is 100 and the **I:C** is 5, the user’s Carb Sensitivity Factor would be 20. Voor elke 20 mg/dl dat de **BG** van de gebruiker stijgt, rekent **AAPS** 1 g koolhydraten als opgenomen. Positieve **IOB** heeft ook invloed op de berekening van **COB**. Dus als **AAPS** voorspelt dat de **BG** van de gebruiker door **IOB** 20 mg/dl daalt, maar de BG blijft gelijk, dan rekent **AAPS** ook 1 g koolhydraten als opgenomen.

Koolhydraten worden ook opgenomen volgens de methodes hieronder. Welke methode geldt, hangt af van het gevoeligheidsalgoritme dat in **AAPS** van de gebruiker is gekozen.

## Koolhydraatgevoeligheid - Oref1

Niet-opgenomen koolhydraten worden na de ingestelde tijd afgekapt:

![Oref1](../images/cob_oref0_orange_II.png)

![COB-grafiek met Oref1-afkapping](../images/cob_oref0_orange_I.png)

```{admonition} Older screenshot
:class: note
De schermafbeelding hierboven komt uit een oudere **AAPS**-versie. In **AAPS** 4 zien de grafieken er iets anders uit, maar de **COB**-grafiek geeft dezelfde informatie.
```


## Koolhydraatgevoeligheid - WeightedAverage

De opname wordt zo berekend dat COB = 0 is na de ingestelde tijd:

![AAPS, WeightedAverage](../images/cob_aaps2_orange_II.png)

Als de minimale koolhydraatopname (min_5m_carbimpact) wordt gebruikt in plaats van de waarde die uit de **BG**-afwijkingen is berekend, verschijnt er een oranje stip in de **COB**-grafiek.

(CobCalculation-detection-of-wrong-cob-values)=
## Detectie van verkeerde COB-waarden

**AAPS** will warn the user if they are about to bolus with **COB** from a previous meal if the algorithm detects current **COB** calculation as incorrect. In dat geval geeft het een extra hint op het bevestigingsscherm na gebruik van de bolus wizard.

### Hoe detecteert AAPS verkeerde COB-waarden?

Normaal detecteert __AAPS__ de opname van koolhydraten via **BG**-afwijkingen. Als de gebruiker koolhydraten heeft ingevoerd, maar **AAPS** de verwachte opname niet kan detecteren via **BG**-afwijkingen, dan gebruikt het in plaats daarvan de methode [min_5m_carbimpact](#Preferences-min_5m_carbimpact) om de opname te berekenen (de zogenaamde ‘fallback’). Deze methode berekent alleen de minimale koolhydraatopname zonder rekening te houden met **BG**-afwijkingen. Daardoor kunnen de COB-waarden onjuist zijn.

![Hint bij verkeerde COB-waarde](../images/Calculator_SlowCarbAbsorption.png)

In de schermafbeelding hierboven werd 66% van de tijd de koolhydraatopname berekend met min_5m_carbimpact in plaats van met de waarde die uit de afwijkingen werd gedetecteerd. Dit geeft aan dat de gebruiker misschien minder **COB** had dan het algoritme heeft berekend.

### Hoe om te gaan met deze waarschuwing?

- Overweeg de behandeling te annuleren - druk op ‘Annuleren’ in plaats van OK.
- Bereken je volgende maaltijd opnieuw met de bolus wizard, maar vink **COB** niet aan.
- Als je een correctiebolus nodig hebt, voer die dan handmatig in.
- Be careful not to overdose or stack insulin!


### Waarom detecteert het algoritme COB niet goed?

Mogelijke oorzaken:
- Misschien heeft de gebruiker de koolhydraten bij het invoeren overschat.
- Activiteit / sport na je vorige maaltijd.
- De I:C moet worden aangepast.
- Waarde voor min_5m_carbimpact is verkeerd (aanbevolen is 8 met SMB, 3 met AMA).


## Handmatige correctie van ingevoerde koolhydraten

Als koolhydraten over- of onderschat zijn, kun je dit corrigeren in het scherm **Behandelingen geschiedenis**, zoals [hier](#screens-bolus-carbs) beschreven.


## Koolhydraatcorrectie - een koolhydraatinvoer verwijderen uit Behandelingen


Je kunt het scherm **Behandelingen geschiedenis** gebruiken om een foute koolhydraatinvoer te corrigeren door deze te verwijderen. Misschien heeft de gebruiker de koolhydraten over- of onderschat bij het invoeren:

![Een koolhydraatinvoer verwijderen uit Behandelingen geschiedenis](../images/e123d85d-907e-4545-bf1b-09fee4d42555.png)

1. Controleer de actuele **COB** en **IOB** op het hoofdscherm van **AAPS** en onthoud ze.
2. Open **Behandelingen geschiedenis** (zijmenu → *Behandelingen geschiedenis*), tabblad **Koolhydraten en bolus**. Afhankelijk van de pomp worden de koolhydraten samen met de insuline in één regel getoond, of als aparte invoer (bijv. bij Dana RS).
3. **Druk lang** op de foute koolhydraatinvoer - de lijst gaat naar de **selectiemodus** met een vinkje bij elke regel, en de invoer is aangevinkt (hierboven gemarkeerd met **1**). Vink ook andere invoer aan die je wilt verwijderen.
4. Tik op het pictogram **🗑 Verwijderen** in de bovenbalk (gemarkeerd met **2**) en bevestig - het bevestigingsvenster toont precies wat wordt verwijderd.
5. Controleer of de koolhydraten echt zijn verwijderd door opnieuw naar **COB** op het hoofdscherm van **AAPS** te kijken.
6. Doe hetzelfde voor **IOB** als er maar één regel is met koolhydraten en insuline samen.
7. Als koolhydraten niet worden verwijderd zoals bedoeld en er worden extra koolhydraten toegevoegd zoals in dit deel beschreven, dan wordt de **COB** te hoog. Dit kan ertoe leiden dat **AAPS** te veel insuline geeft.
8. Voer de juiste hoeveelheid koolhydraten in via het venster **Koolhydraten** (**Behandelingen** → **Koolhydraten**) en stel de juiste tijd van de gebeurtenis in.
9. Als er maar één regel was met koolhydraten en insuline samen, moet de gebruiker ook de hoeveelheid insuline opnieuw invoeren. Zorg dat je de juiste tijd van de gebeurtenis instelt en controleer **IOB** op het hoofdscherm na het bevestigen van de nieuwe invoer.

