# Profiel wissel & Profiel percentage

Dit deel legt uit wat een **Profiel wissel** en een **Profiel percentage** zijn. Hoe je een **Profiel** maakt, lees je in [Je AAPS-profiel](#your-aaps-profile-create-and-edit-profiles).

Als je net begint met **AAPS**, moet je een **Profiel** maken, begrijpen hoe je een **Profiel wissel** uitvoert en leren wat het effect is van een **Profiel percentage** in **AAPS**. De functies **Profiel wissel** en **Profiel percentage** kunnen vooral nuttig zijn bij:

- de menstruatiecyclus - een aanpassing in procenten binnen een **Profiel** kan worden ingesteld in **Automatisering**, zodat **AAPS** zich kan aanpassen aan de verschillende fases van de hormooncyclus en de verwachte insulineresistentie.

- Sport - een aanpassing in procenten binnen een **Profiel** kan voor sport worden ingesteld in **Automatisering**, zodat er minder basaal wordt gegeven.

- Nachtdienst of ploegendienst - voor wie in ploegen werkt, kan een tijdverschuiving in het **Profiel** worden ingesteld. Je verandert het aantal uren in het **Profiel** naar hoeveel later/eerder de gebruiker gaat slapen of wakker wordt.

Waarom een **Profiel percentage** gebruiken in plaats van een tijdelijke aanpassing van het basaal? Om effectiever te zijn, past een **Profiel percentage** een evenredige verlaging of verhoging toe op: basaal, ISF en I:C. Zo berekent **AAPS** een evenwichtige aanpak bij het geven van de insuline van de gebruiker. Een lager basaal in het **Profiel** van de gebruiker in **AAPS** helpt weinig als het algoritme dezelfde verhoudingen voor ISF en I:C blijft gebruiken.

(ProfileSwitch-change-percentage)=

## Het profiel percentage wijzigen vanaf het hoofdscherm

Je hebt minstens één opgeslagen **Profiel** nodig. Een **Profiel percentage** wordt altijd toegepast met een **Profiel wissel**: je activeert een **Profiel** opnieuw, deze keer met een percentage.

```{admonition} Kom je van AAPS 3? :class: note Lang drukken op de profielnaam opent het venster voor de profiel wissel niet meer. **Tik** op de profielnaam en tik dan op de ronde knop **▶** rechtsonder: die opent dezelfde instellingen (percentage, tijdsduur, tijdelijk streefdoel Activiteit).

    <br />1. Tik op het hoofdscherm **op de profielnaam** (naast het sterpictogram). Het [Profiel-scherm](#ProfileSwitch-manage-v4) opent op de kaart van het actieve **Profiel**, gemarkeerd met **ACTIEF**.
    
       ![Tik op de profielnaam op het hoofdscherm om het Profiel-scherm te openen](../images/ProfileSwitch2.png)
    
    2. Wil je hetzelfde **Profiel** houden, laat dan de kaart **ACTIEF** geselecteerd. Wil je tegelijk van **Profiel** wisselen, veeg dan naar een andere kaart.
    3. Tik op de ronde knop **▶** (**Activeer**) rechtsonder. Het scherm **Activeer** opent.
    4. Stel het **Percentage** in met **−** / **+** (stappen van 5%), of typ het in (30 tot 250%). Het veld begint altijd op **100%**: het toont niet het percentage dat nu actief is. Vul bijvoorbeeld **80** in voor 20% minder insuline, of **120** voor 20% meer.
    5. Stel de **Tijdsduur** in minuten in:
       * **0** houdt het nieuwe percentage aan tot je een nieuwe **Profiel wissel** doet;
       * elke andere waarde stopt de wissel na die tijd, en **AAPS** gaat terug naar het **Profiel** dat daarvoor actief was.
    
       ![Het scherm Activeer ingesteld op 80% voor 60 minuten](../images/v4/Profiles/profile_activate_percentage.png)
    
    6. Tik op **▶ Activeer** onderaan het scherm. Controleer de samenvatting in het venster **Profiel wissel** en tik op **OK**.
    
       ![Het bevestigingsvenster — profiel, percentage en tijdsduur](../images/v4/Profiles/profile_activate_confirm.png)
    
    Terug op het hoofdscherm toont de profielnaam het percentage en de resterende tijd, bijvoorbeeld *Normal (80%) (59')*. De naam wordt geel zolang een wissel met een tijdsduur loopt. Een ster markeert de wissel in de glucosegrafiek. Zie [het hoofdscherm](#aaps-screens-profile--target).
    
    ![Het hoofdscherm terwijl een profiel wissel van 80% loopt](../images/v4/Profiles/profile_switch_running.png)
    
    Om voor het einde **terug te gaan naar 100%**, herhaal je de stappen en laat je **Percentage** op 100 en **Tijdsduur** op 0.
    
    ```{admonition} Percentages met één tik
    :class: tip
    Gebruik je vaak hetzelfde percentage (sport, ziekte), voeg dan een [Profiel-snelkoppeling](#profile-shortcuts) toe aan de QuickLaunch-balk, of maak een [scène](Scenes.md). Beide passen met één tik een profiel toe met een vooraf ingesteld percentage en tijdsduur.
    

(ProfileSwitch-manage-v4)=

## Profielen beheren en activeren (Beheren → Profiel)

In **AAPS** v4 beheer en activeer je profielen vanuit het scherm **Beheren** (onderste navigatie) → **Profiel** (*“Profielen beheren en activeren”*).

Het Profiel-scherm toont je profielen als een **carrousel van kaarten waar je doorheen kunt vegen**. De kaart van het actieve profiel is gemarkeerd met **ACTIEF** en toont de totale basaal per dag (bijv. *∑ 30,15 E*). Below the selected card you see that profile's details — the **Insulin** type, and the **IC**, **ISF**, **basal** and **target** schedules with graphs.

When a temporary switch is running, the **ACTIVE** card shows its percentage and time shift with the time left, for example *110% +2 h · 2 h 40 min*, above a progress bar. Both are refreshed every 30 seconds. The details below then have two columns: the values of the profile in blue, and the values in use with the percentage in red.

![Het Profiel-scherm — profielcarrousel, details en actiebalk](../images/v4/Profiles/profile_manage.png)

De knoppen onderaan werken op het **geselecteerde** profiel: **➕ Toevoegen**, **✏️ Bewerk**, **⧉ Dupliceren** en **‘️ Verwijderen**, en de ronde knop **▶ Activeer** rechts. Hoe je de vier schema's in de editor invult (KH-ratio / ISF / BAS / DOEL), lees je in [Profielen maken en bewerken](#your-aaps-profile-create-and-edit-profiles).

**⧉ Dupliceren** gebruikt het pictogram met twee vierkantjes dat vaak voor *kopiëren* wordt gebruikt, maar er is niets om te plakken: het maakt de kopie in één stap. Bevestig *Profiel "Normal" kopiëren?* en een nieuw profiel met de naam *Normal kopie* wordt aan het einde van de carrousel toegevoegd en geselecteerd, klaar voor **✏️ Bewerk** (waar je het ook een andere naam kunt geven). Dit is niet hetzelfde als het klonen van een eerdere **Profiel wissel** uit de Behandelingen geschiedenis. Dat maakt een nieuw profiel *met het percentage en de tijdverschuiving al toegepast*. Zie [Een profiel wissel bewaren voor later](#ProfileSwitch-keep-for-later).

(ProfileSwitch-read-only-mode)= **Alleen de knop ▶ Activeer?** Je instellingen zijn beveiligd, dus het scherm opent als alleen-lezen. Tik op het **✏️ potlood** in de bovenste balk en voer je wachtwoord voor de instellingen in. Zie [Instellingen beveiliging vergrendelt nu ook de beheerschermen](#v4changes-read-only-management).

### Profielen herschikken

Heb je meer dan één profiel, dan kun je de volgorde in de carrousel kiezen: tik op het pictogram **Herschikken** (⇅, twee pijlen omhoog en omlaag) in de bovenste balk. De pagina-indicator wordt vervangen door **◀ / ▶ verplaatsknoppen** met een weergave *positie / totaal* — zet de middelste kaart eerder of later, en bevestig met **✓** (of annuleer met **✕**). De nieuwe volgorde wordt één keer opgeslagen, als je bevestigt.

![Herschikmodus — verplaatsknoppen en positie](../images/v4/Profiles/profile_reorder.png)

### Een profiel activeren

Kies een profiel en tik op **▶ Activeer**. In het scherm **Activeer** bepaal je hoe de **Profiel wissel** wordt toegepast:

![Het scherm Activeer — percentage, tijdsduur, tijdverschuiving, tijd](../images/v4/Profiles/profile_activate.png)

- **Percentage** (30–250%, begint elke keer op 100%) — schaalt het hele profiel. 100% gebruikt het zoals het is; 70% verlaagt bijvoorbeeld het basaal en de berekende insulinedosis (zowel maaltijdbolussen als correcties) met 30%. Het verandert je glucosestreefwaarden en de opname van koolhydraten niet. Zie [Profiel percentage](#profile-percentage) voor het volledige effect.
- **Tijdsduur** (0–10080 minuten, dat is tot 7 dagen) — hoe lang de wissel duurt. **0 = onbeperkt** (tot je opnieuw wisselt); bij een waarde boven 0 gaat AAPS aan het einde terug naar het vorige profiel.
- **Tijdelijk streefdoel / Activiteit** — verschijnt alleen als je een **Tijdsduur** en een **Percentage** onder 100% instelt. Zet het aan om ook een [tijdelijk streefdoel Activiteit](#TempTargets-activity-temp-target) te starten voor dezelfde tijdsduur, zoals je voor het sporten zou doen.
- **Tijd verschuiving** — toont *0h*; tik op **Wijzigen** om het schema tot 23 uur vooruit of terug te zetten (handig bij ploegendienst of reizen). Zie [Tijdverschuiving](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile).
- **Hergebruik** — verschijnt als de actieve wissel een ander percentage dan 100% of een tijdverschuiving heeft, bijvoorbeeld **Hergebruik 80% 0h**. Tik erop om hetzelfde percentage en dezelfde tijdverschuiving in te vullen, bijvoorbeeld om een wissel te verlengen die bijna afloopt.
    
    ![De knop Hergebruik terwijl een wissel van 80% loopt](../images/v4/Profiles/profile_activate_reuse.png)

- **Tijd** — standaard *Nu*. Je kunt een andere tijd kiezen, tot 24 uur voor of na nu. Een wissel in de toekomst start op dat tijdstip; een tijdelijk streefdoel Activiteit dat je erbij instelt, start dan ook op dat tijdstip.
    
    ![De tijd van een profiel wissel kiezen](../images/v4/Profiles/profile_activate_time_picker.png)

- **Notities** — alleen zichtbaar als [Notities weergeven in dialogen](#Preferences-show-notes-field-in-treatments-dialogs) aan staat.

Als de basaalstanden bij het gekozen percentage niet passen bij je pomp, verschijnt bovenaan een waarschuwing en blijft **▶ Activeer** uitgeschakeld: kies een ander percentage.

Tik op **▶ Activeer** en dan op **OK** in het bevestigingsvenster. Het actieve profiel heeft dan het label **ACTIEF** op zijn kaart.

```{admonition} Je pomp kan de basaalstanden afronden :class: note Elke pomp kan basaalstanden alleen in zijn eigen stappen geven (bijvoorbeeld 0,05 E/u), dus rondt hij de standen van je **Profiel** af. **AAPS** gebruikt dan het basaal dat de pomp echt geeft, zodat IOB en TDD juist blijven. Als de pomp per dag iets meer of minder insuline geeft dan je **Profiel**, vertelt de melding *"Basaal profiel in de pomp is bijgewerkt"* hoeveel, bijvoorbeeld *"het geeft 10,00 E per dag in plaats van 10,12 E"*.

Als de pomp een basaal meldt dat ver afwijkt van je **Profiel**, houdt **AAPS** het basaal van het **Profiel** aan en vraagt je om de basaalstanden in de pomp te controleren.

    <br />```{admonition} Met percentage en tijdverschuiving doe je veel met één profiel
    :class: note
    Maak niet veel bijna gelijke profielen, maar houd één basisprofiel en pas het toe met een ander **percentage** of een andere **tijdverschuiving** voor situaties die vaker voorkomen (ziekte, sport, reizen). Dit is precies wat [scènes](Scenes.md) automatisch doen.
    

Een profiel wissel kan niet alleen vanuit dit scherm. Dezelfde wissel kan ook gestart worden vanaf een **Wear OS-horloge**, een gekoppelde **client** (zie [Master ↔ Client besturing](../RemoteFeatures/ClientMasterControl.md)), een **[scène](Scenes.md)**, of een regel in **Automatisering**.

## Profiel percentage

Het is belangrijk dat een gebruiker de belangrijkste kenmerken van een **Profiel percentage** begrijpt. Als je een **Profiel wissel** doet met een hoger of lager percentage, worden de instellingen in het **Profiel** van de gebruiker met hetzelfde percentage verhoogd of verlaagd.

Bijvoorbeeld: een **Profiel wissel** naar 130% (dit betekent dat de gebruiker 30% insulineresistenter is) laat **AAPS**:

- de basaalstand met 30% **verhogen**; 
- de **ISF** **verlagen**: door te delen door 1,3;
- de **I:C** **verlagen** door te delen door 1,3.

Let op: een lagere **ISF** of **I:C** betekent een sterkere verhouding en dus meer insuline. Nieuwe gebruikers van **AAPS** vergeten dit gemakkelijk.

Na de keuze past **AAPS** de standaard basaalstand aan, en **AAPS** (open of gesloten) blijft werken bovenop het gekozen percentage van het **Profiel**.

Het effect van een **Profiel** percentage staat in de tabel hieronder:

| Profiel wissel  
Percentage |    Effect     |     I:C  
g/E     | voorbeeld  
15g |          ISF  
mmol/l/E  
mg/dl/E          | E om te dalen  
2mmol/l  
40mg/dl |
|:---------------------------:|:-------------:|:-----------------:|:---------------:|:------------------------------------------:|:---------------------------------:|
|             90%             |    Zwakker    | 5/0,9  
=**5,55** |      2,7 E      | 2,2/0,9  
=**2,4**  
  
40/0,9  
=**44,4** |               0,8 E               |
|          **100%**           | **Standaard** |       **5**       |     **3 E**     |                **2,2  
40**                |             **0,9** E             |
|            130%             |    Sterker    | 5/1,3  
=**3,85** |      3,9 E      | 2,2/1,3  
=**1,7**  
  
40/1,3  
=**30,8** |               1,2 E               |

(ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile)=

## Tijdverschuiving van het circadiaanse percentage profiel

Een ‘tijdverschuiving’ in het **Profiel** van de gebruiker verschuift de instellingen van het **Profiel** over de klok van de dag (‘circadiaan’) met het ingevoerde aantal uren. Dit kan handig zijn voor:

- **wie 's nachts of in ploegen werkt**: verander bij nachtdiensten het aantal uren in het **Profiel** naar hoeveel later/eerder de gebruiker gaat slapen of wakker wordt; 
- **gebruikers die tijdens het reizen van tijdzone wisselen**; of
- **kinderen met type 1**: die een vaste bedtijd hebben en bij wie de insulineresistentie al in hun **Profiel** is verwerkt. Als het kind om welke reden dan ook later naar bed gaat, kan de verzorger een ‘tijdverschuiving’ toepassen op het **Profiel** van het kind. Zo reageert **AAPS** op de insulineresistentie op het tijdstip dat de gebruiker wil.

Het gaat er altijd om van welk uur de instellingen van het **Profiel** de instellingen van het huidige tijdstip moeten vervangen. Deze tijd moet x uur worden verschoven. Let dus goed op de richting, zoals beschreven in het volgende voorbeeld:

- Huidige tijd: 12:00
- **Positieve** tijdverschuiving 
    - 2:00 **+10 h** -> 12:00
    - De instellingen van 2:00 worden gebruikt in plaats van de instellingen die normaal om 12:00 gelden, door de positieve tijdverschuiving.
- **Negatieve** tijdverschuiving 
    - 22:00 **-10 h** -> 12:00
    - De instellingen van 22:00 (10 uur 's avonds) worden gebruikt in plaats van de instellingen die normaal om 12:00 gelden, door de negatieve tijdverschuiving.

![Richting van de tijdverschuiving bij een profiel wissel](../images/ProfileSwitch_PlusMinus2.png)

Door zo momentopnamen van het **Profiel** te maken, kan het verleden veel nauwkeuriger worden berekend en kun je wijzigingen in het **Profiel** volgen.

(ProfileSwitch-keep-for-later)=

## Een profiel wissel bewaren voor later

Als je een profiel wissel met percentage en/of tijdverschuiving hebt gedaan, kun je dit tijdelijke profiel kopiëren naar een nieuw profiel.

Open hiervoor het menu (☰) → **Behandelingen** en ga naar het tabblad **Profiel wissel**, zie [Een Profiel wissel klonen naar een nieuw Profiel](#your-aaps-profile-clone-profile-switch).