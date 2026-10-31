# CareLevo

De CareLevo is een patchpomp zonder slang, gemaakt door CareMedi. Elke patch bevat maximaal 300 E insuline en wordt maximaal 7 dagen (168 uur) gedragen. De pomp communiceert met **AAPS** via de Bluetooth van je telefoon, zonder extra apparaat.

```{admonition} New driver
:class: warning
De CareLevo driver is nieuw in **AAPS**. Lees deze hele pagina voordat je je eerste patch activeert, en houd de gebruiksaanwijzing van de pomp zelf bij de hand.
```

De kleinste dosis die de patch kan toedienen is 0,05 E. Stel je basaalstanden in het **Profiel** in op minimaal 0,05 E/u, in stappen van 0,05 E/u. Anders verschillen de insuline die het **Profiel** verwacht en de insuline die de patch toedient een beetje. **AAPS** gebruikt de basaalstanden die de patch heeft geaccepteerd.

```{contents} Table of contents
:depth: 1
:local: true
```

## Mogelijkheden van de pomp met AAPS

* Communiceert met **AAPS** via de eigen Bluetooth van je telefoon, zonder extra communicatieapparaat.
* Bolus in stappen van 0,05 E.
* Basaalstanden van 0,05 E/u tot 15 E/u in stappen van 0,05 E/u, met basaalblokken van 30 minuten.
* Tijdelijke basaalstanden ingesteld als absolute waarde, tot 12 uur.
* Vertraagde bolus tot 8 uur.
* Zomertijd en wisselingen van tijdzone moet je zelf afhandelen. De patch geeft een melding als de tijdzone verandert.

## Pomp instellen

1. Open het **menu** (☰) linksboven op het hoofdscherm van **AAPS** en kies **Configuratie**.
1. Selecteer **Carelevo** in de sectie Pomp.
1. Druk op de terugtoets om terug te gaan naar het hoofdscherm.

![De Carelevo plugin geselecteerd in Configuratie > Pomp](../images/v4/Pumps/carelevo_enabled.png)

## Instellingen

Open het pompscherm met **Beheren → Pomp** (of **Configuratie → Pomp → Plug-in openen**).

Open de CareLevo instellingen door rechtsboven op het icoon **Instellingen** (tandwiel) te drukken. Er zijn drie instellingen:

![Instellingen van de Carelevo driver](../images/v4/Pumps/carelevo_settings.png)

### Melding laag insulineniveau

De patch geeft een melding als de resterende insuline in het reservoir de gekozen hoeveelheid bereikt. Je kunt dit instellen van 20 E tot 50 E, in stappen van 5 E. De standaardwaarde is 30 E. Los van deze instelling geeft de patch een kritiek alarm en stopt hij met insuline toedienen als er minder dan 10 E over is.

### Instelling melding gebruiksduur patch

De patch geeft een melding als hij het gekozen aantal uren gedragen is, zodat je het vervangen kunt plannen. Je kunt dit instellen van 24 tot 167 uur. De standaardwaarde is 116 uur.

### Patch infoalarm

Als dit aan staat, piept de patch als een bolus, vertraagde bolus of tijdelijk basaal start en als die eindigt. Standaard staat dit uit.

## Het pompscherm

![Carelevo pompscherm zonder actieve patch](../images/v4/Pumps/carelevo_pump_screen.png)

Het pompscherm toont de **Bluetooth status** (Geen actieve patch, Verbinding verbroken of Verbonden), het **Serienr.** van de patch, de **Activeringstijd** en **Vervaldatum**, de huidige **Basaalstand** en **Tijdelijke basaalstand**, de **Resterende insuline** (resterend / gevuld), de **Resterende patchtijd** en de **Totaal toegediende insuline**.

Welke knoppen er zijn, hangt af van de status van de patch:

* **Activeer patch**: start de activering van een nieuwe patch, zie hieronder.
* **Uitleg insuline**: toont de twaalf stappen om een patch met insuline te vullen.
* **Toediening onderbreken** / **Toediening hervatten**: pauzeert de insulinetoediening en start die weer, zie hieronder.
* **Patch weggooien**: stopt de huidige patch, zodat je een nieuwe kunt activeren.

## Een patch activeren

Zorg voordat je begint dat er een **Profiel** actief is in **AAPS** en dat Bluetooth aan staat. Na het aanzetten moet de patch binnen een beperkte tijd geactiveerd worden. Als de tijd om is, geeft de patch het alarm **Tijd voor aanbrengen patch verstreken** en kun je hem niet meer gebruiken.

Druk op **Activeer patch** op het pompscherm en volg de stappen. Je kunt op elk moment annuleren voordat de naald is ingebracht. Wat je hebt ingevoerd, wordt dan niet bewaard.

### Selecteer de insuline

Bevestig de insuline die je gebruikt. De patch heeft snelwerkende U-100 insuline nodig.

### Vul de patch met insuline

Vul de patch met 50 tot 300 E. Houd rekening met hoe lang je hem gaat dragen. Druk op **Uitleg insuline** als je de vulinstructies nodig hebt. Tik daarna op de vulhoeveelheid en selecteer de hoeveelheid die je hebt gevuld. **AAPS** gebruikt die om de resterende insuline te tonen.

### Verbind de patch

1. Haal de patch uit de blisterverpakking en verwijder de naalddop.
1. Druk langer dan één seconde op de aan/uit-knop van de patch. Tik na de piep op **Patch zoeken**.
1. Als de gevonden patch de juiste is, tik dan op **Bevestigen**. Tik op **Opnieuw zoeken** als dat niet zo is.

### Veiligheidscontrole

Druk op **Veiligheidscontrole** zodra de patch verbonden is. De patch test zichzelf en vult zich (primen). Controleer of er een druppel insuline op de punt van de naald zit. Als je geen druppel ziet, druk dan op **Opnieuw**. Druk op **Volgende** als de controle klaar is.

### Plek kiezen en patch aanbrengen

1. Selecteer de plek waar je de patch gaat dragen.
1. Maak de plek goed schoon met een alcoholdoekje.
1. Verwijder de beschermtape en plak de patch op je huid met de gemarkeerde stip naar boven.
1. Druk op **Volgende** als de patch vastzit.

### Breng de naald in

1. Draai de veiligheidsdop in de richting van de pijl en verwijder hem.
1. Druk de drukknop van de applicator helemaal in en houd hem 10 seconden ingedrukt. Je hoort een piep als de naald is ingebracht.
1. Verwijder de applicator en druk op **Inbrengen bevestigen**.

Als het inbrengen mislukt, vertelt **AAPS** je hoeveel pogingen er nog over zijn. Als er geen poging meer over is, geeft de patch het alarm **Fout bij inbrengen naald** en moet je hem vervangen.

De insulinetoediening start zodra het inbrengen is bevestigd.

## Bolusmeldingen

Als de patch een bolus weigert, vertelt **AAPS** je waarom. Bijvoorbeeld *Bolus kan niet worden geleverd. Beschikbare bolus: 2,8 E* betekent dat de patch nu alleen die hoeveelheid kan toedienen.

Als je een bolus stopt en de patch de stop niet bevestigt, wacht **AAPS** tot de bolus klaar is en slaat de hoeveelheid op die de patch meldt. Als een bolus niet is opgeslagen (bijvoorbeeld omdat hij tijdens het toedienen is gestopt), voegt **AAPS** hem toe op basis van het totaal van de patch en vraagt je om IOB te controleren voordat je het opnieuw probeert.

## Insulinetoediening onderbreken en hervatten

Druk op **Toediening onderbreken** op het pompscherm en selecteer hoe lang de toediening moet pauzeren: van 30 minuten tot 4 uur, in stappen van 30 minuten. De toediening start niet vanzelf weer: als de pauze voorbij is, geeft de patch de melding **Insuline starten**. Druk op **Toediening hervatten** op het pompscherm, of op **Insuline starten** in de melding, en bevestig.

## Een patch weggooien

Druk op **Patch weggooien** op het pompscherm en bevestig. De insulinetoediening stopt en de patch kan niet meer gebruikt worden. Haal de patch van je lichaam en activeer een nieuwe.

Als een kritiek alarm de patch heeft gestopt, biedt het alarm in plaats daarvan **Patch deactiveren** aan. Als je daarop drukt, wordt de patch op dezelfde manier weggegooid.

(carelevo-alarms-and-notifications)=

## Alarmen en meldingen

De patch meldt gebeurtenissen op drie niveaus. Ze worden allemaal als **AAPS** meldingen getoond.

### Kritieke alarmen

De insulinetoediening is gestopt. Doe nu iets:

* **Insuline bijna op**: er is minder dan 10 E over. Deactiveer de patch en vervang hem.
* **Patch verlopen**: de patch is aan het einde van zijn gebruiksduur. Deactiveer de patch en vervang hem.
* **Batterij bijna leeg**: gooi de patch weg en vervang hem.
* **Hoge/lage temperatuur**: ga naar een plek met een geschikte temperatuur, tussen 40 ℉ en 99 ℉ (5 ℃ en 37 ℃).
* **Automatisch uit**: de patch is gestopt omdat de melding Automatisch uit is genegeerd. Druk op **Insuline starten** om de basale toediening opnieuw te starten.
* **Tijd voor aanbrengen patch verstreken**, **Zelfdiagnose mislukt**, **Patchfout**, **Verstopping** en **Fout bij inbrengen naald**: deactiveer de patch en vervang hem.

### Waarschuwingen

De insulinetoediening gaat door, maar iets vraagt je aandacht:

* **Insuline bijna op**: het reservoir heeft de hoeveelheid bereikt die is ingesteld in **Melding laag insulineniveau**. Bereid je voor op het vervangen van de patch.
* **Patch verloopt binnenkort** en **Gebruiksduur patch verlopen**: vervang de patch.
* **Batterij bijna leeg**: bereid je voor op het vervangen van de patch.
* **Hoge/lage temperatuur**: de toediening is gepauzeerd tot de patch weer tussen 40 ℉ en 99 ℉ is.
* **Automatisch uit**: tik op **OK**. Als je de melding negeert, wordt het een kritiek alarm en stopt de toediening.
* **Activering patch niet voltooid**: tik op **OK** om de activering te voltooien.
* **Insuline starten**: de pauze die je hebt ingesteld is voorbij. Tik op **Insuline starten** om de toediening te hervatten.
* **Bluetooth aanzetten** en **BLE niet verbonden**: de telefoon kan de patch niet bereiken. Zet Bluetooth aan of controleer de verbinding met de patch.

### Mededelingen

Alleen ter informatie: **Insuline bijna op**, **Melding gebruikstijd patch** (de tijd die is ingesteld in **Instelling melding gebruiksduur patch** is voorbij), **Melding patch controleren**, **Tijdzone gewijzigd** en **Bloedglucose controleren** (een ingestelde tijd na een bolus).

De patch meldt ook wanneer zijn eigen functie voor onderbreken bij lage glucose (**LGS**) start of stopt. **AAPS** gebruikt deze functie niet; de loop regelt lage glucose zelf.

## Waar je hulp kunt krijgen

Meld problemen met de CareLevo driver op de [AAPS GitHub issues-pagina](https://github.com/nightscout/AndroidAPS/issues) of in de AAPS community kanalen, zie [Waar kan ik hulp krijgen](../GettingHelp/WhereCanIGetHelp.md).
