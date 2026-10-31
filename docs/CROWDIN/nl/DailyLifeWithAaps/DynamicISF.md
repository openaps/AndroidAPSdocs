(Open-APS-features-DynamicISF)=
# Dynamische ISF (DynISF)

Tot nu toe werd de **ISF** bij **AMA** en **SMB** in het **Profiel** ingesteld en was die vast voor elke ingestelde periode van de dag. Maar in werkelijkheid is de **ISF** van een persoon niet zo vast en hangt die af van de **BG**: bij een hoge BG heeft de gebruiker meer insuline nodig om de **BG** 50 mg/dl / 3 mmol/l te laten dalen dan bij een lagere **BG**. [Autosens](#Open-APS-features-autosens) was het eerste algoritme dat dit probleem probeerde op te lossen, door de **ISF** buiten de maaltijden aan te passen.

**Dynamische ISF** (ook **DynISF** genoemd) heeft hetzelfde doel, maar is geavanceerder omdat het altijd kan worden gebruikt. Het wordt alleen aangeraden voor ervaren gebruikers die de bediening en het volgen van hun **AAPS** goed beheersen. Lees eerst [Waar je op moet letten als je Dynamische ISF inschakelt](#dyn-isf-things-to-consider-when-activating-dynamicisf) hieronder voordat je het uitprobeert.

```{admonition} CAUTION - Automations or Profile Percentage change
:class: warning

Gebruik **Automatisering** altijd voorzichtig. Dit geldt vooral bij **Dynamische ISF**.

Als je **Dynamische ISF** gebruikt, schakel dan elke tijdelijke **Profiel**-wijziging in een **Automatisering**-regel uit. Anders wordt **Dynamische ISF** te agressief met correctiebolussen en kan een hypo ontstaan. Juist dit is het doel van **Dynamische ISF**. Het is dus niet nodig om **AAPS** via Automatisering extra insuline te laten geven bij een hoge **BG**.

```

Om **Dynamische ISF** te gebruiken, heeft de database van **AAPS** minstens 7 dagen aan **AAPS**-gegevens van de gebruiker nodig.

## Wat doet Dynamische ISF?

**Dynamische ISF** past de insulinegevoeligheidsfactor (**ISF**) steeds aan op basis van de volgende gegevens van de gebruiker:

- de totale dagelijkse dosis insuline (**TDD**); en
- de huidige en voorspelde bloedglucosewaarden.

Als je **Dynamische ISF** gebruikt, worden de **ISF**-waarden uit het **Profiel** helemaal niet meer gebruikt, behalve als reserve wanneer er niet genoeg TDD-gegevens in de database van **AAPS** zijn (*bijv.* na een nieuwe installatie van de app).

**SMB/AMA** - een voorbeeld van een **Profiel** met een vaste **ISF**, zoals ingesteld door de gebruiker en gebruikt door **SMB** en **AMA**.

![Statische ISF](../images/DynamicISF/profile_viewer_isf.png)

**Dynamische ISF** - een voorbeeld van een **ISF** die verandert, zoals bepaald door **Dynamische ISF**.

![Dyn ISF](../images/DynamicISF/DynISF2.png)

Het rood omcirkelde deel toont: `profile ISF` -> `ISF as calculated by DynISF`. <br/> Als je op dit deel tikt, opent een venster met meer informatie, zoals de **ISF** die wordt gebruikt voor de calculator en de opname van koolhydraten (zie [Ander gebruik van ISF](#dynisf-other-usages-of-isf) hieronder).

De **DynISF**-waarde kan ook in een grafiek worden getoond: tik op **Grafiek toevoegen** onder de grafieken op het hoofdscherm en kies **VSENS** (variabele gevoeligheid). Die wordt getoond als een witte lijn (onderaan de afbeelding hierboven).

## Hoe wordt Dynamische ISF berekend?

**Dynamische ISF** gebruikt het model van Chris Wilson om de **ISF** te bepalen, in plaats van de vaste **ISF**-waarde die de gebruiker in het **Profiel** heeft ingesteld. Een uitgebreide uitleg vind je hier: [Chris Wilson on Insulin Sensitivity (Correction Factor) with Loop and Learn, 2/6/2022](https://www.youtube.com/watch?v=oL49FhOts3c) (Engels).

De gebruikte formule voor **Dynamische ISF** is: `ISF = 1800 / ((TDD * DynISF Adjust Factor) * Ln (( current BG / insulin divisor) + 1 ))`

De variabelen in deze formule worden hieronder uitgelegd.<br/> Let op: `Ln` staat voor de natuurlijke logaritme, een wiskundige functie.

De formule hierboven wordt gebruikt om de huidige **ISF** te berekenen, en in de oref1-[voorspellingen voor **IOB**, **ZT** (zero-temping) en **UAM**](#aaps-screens-prediction-lines). Ze wordt ook gebruikt voor **COB** en in de bolus wizard (zie [Ander gebruik van ISF](#dynisf-other-usages-of-isf) hieronder).

### TDD (totale dagelijkse dosis)
De TDD gebruikt een combinatie van de volgende waarden:
1.  gemiddelde **TDD** van 7 dagen;
2.  de **TDD** van de vorige dag; en
3.  een gewogen gemiddelde van het insulinegebruik van de laatste acht (8) uur, omgerekend naar 24 uur.

De **TDD** in de formule hierboven bestaat voor een derde uit elk van de waarden hierboven.

### Aanpassingsfactor Dynamische ISF

Dit wordt ingesteld in de **Instellingen** van de gebruiker en wordt gebruikt om **Dynamische ISF** meer of minder agressief te maken. Zie het deel [Instellingen](#dyn-isf-preferences) hieronder.

### Insulinedeler (insulin divisor)
De insulinedeler (insulin divisor) hangt af van de piek van de gebruikte insuline en is omgekeerd evenredig met de piektijd. Voor Lyumjev is deze waarde 75, voor Fiasp 65 en voor gewone snelwerkende insuline 55.

### ISF op basis van voorspelde BG voor doseerbeslissingen

Dynamische gevoeligheid wordt berekend met de **huidige BG**-waarde en in **AAPS** getoond als je huidige ISF. Maar bij het berekenen van doses berekent en gebruikt het oref1-algoritme in plaats daarvan de **toekomstige ISF** (Future ISF).

Dit voorkomt dat er te veel insuline wordt gegeven als de **BG** laag is of naar verwachting laag wordt.

**Toekomstige ISF** gebruikt dezelfde formule als hierboven, maar kan de **minimaal voorspelde BG** gebruiken in plaats van de **huidige BG**. **Minimaal voorspelde BG**, [zoals berekend in oref1](#aaps-screens-how-predictions-become-a-dosing-decision), is de laagste waarde die je BG volgens de voorspellingen bereikt in de hele voorspelde periode.

* Als de huidige **BG** boven de streefwaarde ligt <br/> **en** de **BG** stabiel is, binnen +/- 3 mg/dl:<br/>dan wordt de BG zo in de formule gebruikt: `average(minimum predicted BG, current BG)`.
* Als de uiteindelijke **BG** boven de streefwaarde ligt en de glucose stijgt,<br/>  
  **of** de uiteindelijke **BG** hoger is dan de huidige **BG**:<br/>dan wordt de BG zo in de formule gebruikt: `current BG`.
* In alle andere gevallen:<br/>wordt de BG zo in de formule gebruikt: `minimum predicted BG`.

Voor een eenvoudige uitleg, zie de schermafbeelding hieronder. Die laat de situatie hierboven zien. Oranje stippen gebruiken de **voorspelde BG**, paarse stippen gebruiken het **gemiddelde (voorspelde BG, huidige BG)** en blauwe stippen gebruiken de **huidige BG**.

![DynISF_BGValue.png](../images/DynamicISF/DynISF_BGValue.png)

(dynisf-other-usages-of-isf)=
## Ander gebruik van ISF

### ISF en opname van COB

Zoals beschreven op de pagina [COB berekening](../DailyLifeWithAaps/CobCalculation.md), wordt de opname van COB meestal berekend met deze formule:   
`absorbed_carbs = deviation * ic / isf`  
Als je **Dynamische ISF** gebruikt, is de **ISF** hier het gemiddelde van de Dynamische ISF-waarden van de afgelopen 24 uur.

### ISF in de Bolus wizard

Als je de [Bolus wizard](#aaps-screens-bolus-wizard) gebruikt, wordt de **ISF** gebruikt om een correctie toe te voegen als de **BG** boven de streefwaarde ligt.

Als je **Dynamische ISF** gebruikt, is de **ISF** hier het gemiddelde van de Dynamische ISF-waarden van de afgelopen 24 uur.

(dyn-isf-preferences)=
## Instellingen

Vink **Gebruik dynamische gevoeligheid** aan in [Instellingen > OpenAPS SMB](#Preferences-openaps-smb-settings) om het in te schakelen. Nieuwe instellingen worden beschikbaar zodra dit is gekozen.

![Instellingen voor Dynamische ISF](../images/preferences/settings_dynamic_isf.png)

(dyn-isf-adjustment-factor)=
### Aanpassingsfactor Dynamische ISF
**Dynamische ISF** werkt met één regel die voor iedereen zou moeten gelden. Dat betekent dat mensen met dezelfde **TDD** dezelfde gevoeligheid zouden hebben. Omdat elke gebruiker een eigen gevoeligheid heeft, kan de gebruiker met de **Aanpassingsfactor** instellen of die meer of minder gevoelig is voor insuline dan de "standaard" persoon.

De **Aanpassingsfactor** is een waarde tussen 1% en 300%. Deze wordt vermenigvuldigd met de **TDD**-waarde.

* Als je deze waarde boven 100% zet, wordt **DynISF** agressiever: de **ISF**-waarden worden *kleiner* (_d.w.z._ er is meer insuline nodig om de **BG** een klein beetje te laten dalen)
* Als je deze waarde onder 100% zet, wordt **DynISF** minder agressief: de **ISF**-waarden worden groter (_d.w.z._ er is minder insuline nodig om de **BG** een klein beetje te laten dalen).

De **Aanpassingsfactor** verandert ook als je een [**Profiel wissel** met percentage](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) uitvoert. Een lager **Profiel percentage** verlaagt de **Aanpassingsfactor**, en een hoger **Profiel percentage** verhoogt deze.

Voorbeeld: als je **Aanpassingsfactor** 80% is en je voert een **Profiel wissel** naar 80% uit, dan wordt de **Aanpassingsfactor** `0.8*0.8=0.64`.

Als je **DynISF** gebruikt, kun je dus met het **Profiel percentage** je gevoeligheid tijdelijk zelf fijn afstellen. Dit kan handig zijn bij lichamelijke activiteit (lager percentage), ziekte (hoger percentage), enz.

### LGS drempelwaarde

**BG**-waarde waaronder de insuline wordt stopgezet (low glucose suspend). De standaardwaarde gebruikt het standaard streefwaardemodel. Je kunt deze waarde instellen tussen 60 mg/dl (3,3 mmol/l) en 100 mg/dl (5,5 mmol/l). Waarden onder 65/3,6 zorgen ervoor dat het standaardmodel wordt gebruikt.

### DynamicISF pas gevoeligheid aan

Deze instelling (*"Pas gevoeligheid berekeningen aan bij gebruik van DynamicISF."*) vervangt Autosens. Ze gebruikt de verhouding **TDD** van de laatste 24 uur / **TDD** van 7 dagen als basis om de basaalstand te verhogen of te verlagen, op dezelfde manier als de gewone Autosens. Deze berekende waarde wordt ook gebruikt om de streefwaarde aan te passen, als de opties om de streefwaarde aan te passen aan de gevoeligheid zijn ingeschakeld. Anders dan Autosens past deze optie de **ISF**-waarden niet aan.

(dyn-isf-things-to-consider-when-activating-dynamicisf)=
## Waar je op moet letten als je Dynamische ISF inschakelt

* **Dynamische ISF** wordt alleen aangeraden voor ervaren gebruikers die de bediening en het volgen van hun **AAPS** goed beheersen. Gebruikers moeten bij voorkeur al goede controle hebben met **SMB** voordat ze overstappen op **Dynamische ISF**.
* Zoals hierboven gezegd: schakel alle [**Automatiseringen**](../DailyLifeWithAaps/Automations.md) uit die een **Profiel percentage** instellen op basis van **BG**, omdat dit te agressief is en te veel insuline kan geven! Dit zit al in het algoritme van **Dynamische ISF**.
* Het [Profiel percentage](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) wordt meegenomen in de berekening van Dynamische ISF (zie [Aanpassingsfactor Dynamische ISF](#dyn-isf-adjustment-factor) hierboven). Het is geen goed idee om lange tijd een **Profiel percentage** anders dan 100% te gebruiken. Als je merkt dat je **Profiel** is veranderd, maak dan een nieuw **Profiel** met je aangepaste waarden, in plaats van het **Profiel** met een bepaald percentage te gebruiken.
* **Dynamische ISF** werkt misschien niet voor iedereen. Je kunt vooral onverwachte resultaten zien als een van deze situaties voor jou geldt:
  * Wisselende leefstijl (onregelmatig eten of onregelmatige lichamelijke activiteit)
  * TDD of gevoeligheid die per dag sterk verschilt.
* Er is geen precieze handleiding voor de beginwaarde van de **Aanpassingsfactor**. Als startpunt geldt wel: als je **Profiel**-waarden goed zijn en je binnen bereik bent met een stabiele **BG**, dan moet de **DynISF**-waarde ongeveer gelijk zijn aan de waarde die eerder in je **Profiel** stond.<br/>Als je ziet dat **Dynamische ISF** te agressief is, verlaag dan de **Aanpassingsfactor**, en andersom.
* Ook al gebruikt **DynISF** de **Profiel-ISF** helemaal niet: als je merkt dat je gevoeligheid sterk verschilt van wat eerder in je **Profiel** stond, is het verstandig om het profiel bij te werken. Dit kan handig zijn als je je **AAPS**-gegevens kwijtraakt (_bijv._ nieuwe telefoon, nieuwe **AAPS**-versie…), omdat je **Profiel-ISF** dan de volgende 7 dagen als reserve wordt gebruikt.