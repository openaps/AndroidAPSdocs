# Doelen

AndroidAPS heeft een reeks leerdoelen die je moet doorlopen, zodat je alle opties en instellingen leert kennen om veilig te kunnen loopen.  De leerdoelen zorgen ervoor dat je alles goed hebt ingesteld, en dat je snapt wat het systeem doet en waarom. Zodat je erop kunt vertrouwen dat het de juiste keuzes maakt.

Als je een **andere telefoon gaat gebruiken**, dan kun je jouw [instellingen exporteren](../Usage/ExportImportSettings.md) om je voortgang door de doelstellingen te behouden. Ook jouw veiligheidsinstellingen zoals max. bolus etc. worden hierbij opgeslagen.  Wanneer je je instellingen niet exporteert en importeert op je nieuwe telefoon, dan zul je weer helemaal opnieuw moeten beginnen met de leerdoelen.  Het is een goed idee om regelmatig een [back-up te maken van jouw instellingen](../Usage/ExportImportSettings.html) voor het geval dat er iets met jouw telefoon gebeurt.

Als je wilt teruggaan in de doelen, zie de [uitleg hieronder](../Usage/Objectives#teruggaan-in-doelen).

## Doel 1: Instellen van visualisatie en monitoring en analyseren van basaal en ratio's

- Selecteer de bloedglucose bron die jij gebruikt.  Zie [BG Source](../Configuration/BG-Source.md) voor meer informatie.
- Selecteer de juiste pomp in Configurator (Selecteer 'virtuele pomp' als je een pomp gebruikt waar geen AndroidAPS driver voor bestaat) om ervoor te zorgen dat jouw pomp kan communiceren met AndroidAPS.
- Als je de DanaR pomp gebruikt, volg dan de [DanaR](../Configuration/DanaR-Insulin-Pump.md) instructies om de pomp te koppelen aan AndroidAPS.
- Volg de instructies van de [Nightscout](../Installing-AndroidAPS/Nightscout.md) pagina om ervoor te zorgen dat Nightscout gegevens kan ontvangen en weergeven.
- Opmerking: URL in NSClient moet worden ingevuld **ZONDER /api/v1/** aan het einde - zie [NSClient-instellingen in Instellingen](../Configuration/Preferences#nsclient).

*Het kan zijn dat je even moet wachten tot de volgende bloedglucose-waarde binnenkomt voordat AndroidAPS de wijzigingen opmerkt.*

## Doel 2: Leer hoe AndroidAPS te gebruiken

- Voer verschillende acties uit in AndroidAPS zoals beschreven in dit doel.

- Klik op de oranje tekst "Nog niet voltooid" om toegang te krijgen tot de opdrachten.

- Er staan links naar deze wiki om je op weg te helpen in het geval je de specifieke actie nog niet kent.

  ```{image} ../images/Objective2_V2_5.png
  :alt: Screenshot doel 2
  ```

## Doel 3: Bewijs jouw kennis

- Zorg dat je slaagt voor de multiple-choice test van jouw AndroidAPS kennis.

- Klik op de oranje tekst "Nog niet voltooid" om toegang te krijgen tot de pagina met de vraag en antwoordopties.

  ```{image} ../images/Objective3_V2_5.png
  :alt: Screenshot doel 3
  ```

- Er staan links naar deze wiki om je op weg te helpen als je het antwoord niet meteen weet.

- De vragen voor doelstelling 3 voor AAPS versie 2.8 zijn volledig herschreven door gebruikers van wie Engels de moedertaal is, en vervolgens vertaald naar o.a. het Nederlands. Dit om te voorkomen dat je een vraag niet begrijpt door onduidelijke bewoordingen. De vernieuwde vragen gaan grotendeels over dezelfde inhoud, en er zijn een paar nieuwe vragen toegevoegd.

- Voor mensen die de vragen uit Doel 3 in een vorige versie hadden afgerond, is Doel 3 weer op 'nog niet voltooid' komen te staan omdat deze nieuwe vragen nog beantwoord moeten worden.

- Voor hen geldt dat zij niet aan een nieuw Doel kunnen beginnen totdat ze de nieuwe vragen ook beantwoord hebben. Voor mensen die in een vorige versie alle Doelen al hadden afgerond, geldt dat zij ruim de tijd hebben om deze nieuwe vragen te beantwoorden. Er worden bij hen geen AAPS-functies gedeactiveerd nu deze vragen nog openstaan. Het is wel verstandig om er binnenkort mee aan de slag te gaan; wanneer een volgende versie uitkomt, die wellicht nieuwe functies (en bijbehorende nieuwe Doelen) heeft, dan zou je niet aan een nieuw Doel kunnen beginnen totdat je alle vragen hebt beantwoord.

## Doel 4: Beginnen met een open loop

- Selecteer Open-Loop vanuit het Instellingen-menu of door de Open Loop / Closed Loop -knop linksbovenin het Overzicht-scherm ingedrukt te houden.
- Werk door de [Instellingen](../Configuration/Preferences.md) heen om de loop in te stellen.
- Voer minstens 20 tijdelijke basaalstanden in over een periode van 7 dagen; voer ze in op jouw pomp en bevestig in AndroidAPS dat je ze hebt geaccepteerd.  Controleer dat deze gegevens zichtbaar zijn in AndroidAPS en Nightscout.
- Stel [tijdelijke streefdoelen](../Usage/temptarget.md) in indien nodig. Gebruik bijvoorbeeld een tijdelijk hypo streefdoel om te voorkomen dat het systeem te sterk corrigeert voor een stijgende bloedsuiker na een hypo.

### Verminder het aantal meldingen

- Je kunt het aantal suggesties voor tijdelijke basalen dat je krijgt tijdens de Open Loop modus, verminderen. Doe dit bijvoorbeeld door bredere streefdoelen in te stellen, zoals 90-150 mg/dl of 5,0-8,5 mmol/l.

- Voor 's nachts zou je de bovengrens van je streefdoel flink kunnen verhogen (of de Open Loop zelfs helemaal kunnen deactiveren) voor een ongestoorde nachtrust.

- Daarnaast kun je in de Instellingen een groter getal invullen bij "Minimale verzoek voor aanpassing\[%\]".

  ```{image} ../images/OpenLoop_MinimalRequestChange2.png
  :alt: Open Loop Minimale verzoek voor aanpassing
  ```

- En uiteraard kun je ervoor kiezen om niet elke 5 minuten alle suggesties daadwerkelijk uit te voeren...

## Doel 5: De Open Loop begrijpen, inclusief de voorgestelde tijdelijke basaalstanden

- Leer de reden achter een suggestie voor tijdelijke basaalstand kennen. Kijk naar de [determine basal logic](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) en naar de [voorspelling in de glucosegrafiek van het AndroidAPS Overzichts-scherm](../Getting-Started/Screenshots#voorspellingslijnen) of Nightscout, en naar de berekening in je OpenAPS tab.

Je wilt beginnen met een streefdoel dat hoger is dan normaal, totdat je vertrouwen in de berekeningen en de instellingen hebt gekregen.  Het systeem staat toe

- een laag streefdoel tot minimaal 4 mmol/l (72 mg/dl) of maximaal 10 mmol/l (180 mg/dl)
- een hoog streefdoel tot minimaal 5 mmol/l (90 mg/dl) of maximaal 15 mmol/l (225 mg/dl)
- een enkele waarde als tijdelijk streefdoel tussen 4 mmol/l en 15 mmol/l (72 mg/dl tot 225 mg/dl)

Het streefdoel is de waarde waar de berekeningen op zijn gebaseerd, en is niet hetzelfde als waar je jouw bloedglucose waarden binnen wilt houden.  Als je een erg brede range als streefdoel instelt, bijvoorbeeld een verschil van 3 mmol/l of meer (50 mg/dl of meer), dan zul je zien dat AAPS niet vaak in actie komt. Dit komt omdat de voorspelde bloedglucose meestal binnen dat brede bereik zal liggen en het systeem dus niet vaak een andere tijdelijk basaal voorstelt.

Je kunt experimenteren met je lage en hoge streefdoel en een nauwer bereik instellen, bijvoorbeeld 1 of minder mmol/l (20 mg/dl of minder) verschil, en observeren hoe het systeem daardoor zijn gedrag aanpast. De meesten vullen uiteindelijk hetzelfde getal in bij hoge en lage streefdoel, daarmee bereik je de strakste glucosegrafieken.

Deze tijdelijke streefdoelen zijn iets anders dan het 'groene gebied' dat je in je grafiek ziet. Je kunt waarden voor het groene gebied invoeren via 3 stipjes in rechterbovenhoek > 'Instellingen \<../Configuration/Preferences.md>\`\_\_ > Bereik voor Visualisatie.

```{image} ../images/sign_stop.png
:alt: Stop-teken
```

### Stop hier als je een virtuele pomp gebruikt en in Open Loop wilt blijven - klik NIET op Verificatie aan het einde van dit doel.

```{image} ../images/blank.png
:alt: blanco
```

## Doel 6: Starten in Closed Loop met bescherming tegen lage BG

```{image} ../images/sign_warning.png
:alt: Waarschuwings-teken
```

### Closed loop will not correct high BG values in objective 6 as it is limited to low glucose suspend. High BG values have to be corrected manually by you!

- Prerequisite: You need a good profile (basal, ISF, IC) already working in AndroidAPS to start with Loop in Low Glucose Suspend mode. Otherwise you can run in a hypo which you have to manually correct. This will help you a lot to avoid having to treat a low glucose over a period of 5 days. **If you are still having frequent or severe low glucose episodes then consider refining your DIA, basal, ISF and carb ratios and do NOT start objective 6 at this time.**
- You don't have to change your settings now. During objective 6, the maxIOB setting is internally set to zero automatically. **This override will be reversed when moving to objective 7.**
- The system will override your maxIOB settings to zero, which means if blood glucose is dropping it can reduce basal for you. If blood glucose is rising then it will only increase basal if the basal IOB is negative from a previous Low Glucose Suspend. Otherwise basal rates will remain the same as your selected profile. **That means that you have to manually handle high values with insulin corrections.**
- If your basal IOB is negative (see screenshot below) a TBR > 100% can be issued also in objective 6.

```{image} ../images/Objective6_negIOB.png
:alt: Voorbeeld negatieve IOB
```

- Set your target range slightly higher than you usually aim for, just to be safe and have a bit more scurity buffer.
- Enable 'Low Glucose Suspend' mode either by by pressing and holding the Loop icon at the top right corner of the home screen and selecting the Loop - LGS mode icon.
- Watch how temporary basals are active by viewing the blue basal text on the homescreen or the blue basal render on the homescreen graph.
- Het kan gebeuren dat je (bijv. na een hypo) een piek krijgt in je glucosewaarde, omdat jouw IOB op dat moment groter is dan nul, en het systeem dus geen tijdelijk basaal > 100% kan instellen. Gedurende dit doel zul je af en toe handmatig moeten ingrijpen om hoge bloedsuikers naar beneden te krijgen.

## Objective 7: Tuning the closed loop, raising maxIOB above 0 and gradually lowering BG targets

- Select 'Closed Loop' either from [Preferences](../Configuration/Preferences.md) or by pressing and holding the Loop icon at the top right corner of the home screen, over a period of 1 day.

- Raise your 'Maximum total IOB OpenAPS can’t go over' (in OpenAPS called 'max-iob') above 0. The default recommendation is "average mealbolus + 3x max daily basal" (for the SMB algorithm) or "3x max daily basal" (for the older AMA algorithm) but you should slowly work up to this until you know your settings work for you (max daily basal = the maximum hourly value in any time segment of the day).

  Deze aanbeveling moet als uitgangspunt worden beschouwd. If you set to the 3x and you are seeing moves that push you too hard and fast then lower that number. If you are very resistant, raise it very little at a time.

  ```{image} ../images/MaxDailyBasal2.png
  :alt: max dagelijkse basaal
  ```

- Once confident on how much IOB suits your looping patterns, then reduce your targets to your desired level.

## Doel 8: Pas basaalstanden en de ratio's aan indien nodig, activeer hierna de Autosens optie

- Je kunt [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) gebruiken om eenmalig te laten berekenen of jouw basaalstanden goed zijn ingesteld, of een traditionele basaaltest doen. Zie ook de "Veelgestelde vragen" sectie van deze wiki.
- Schakel [Autosens](../Usage/Open-APS-features.md) in gedurende een periode van 7 dagen en bekijk de witte lijn in de grafiek op het Overzichts-scherm. Die lijn geeft weer hoe jouw gevoeligheid voor insuline kan verhogen of verminderen als gevolg van beweging, hormonen etc. Bekijk ook af en toe de OpenAPS tab om te zien hoe AndroidAPS je basaalstanden en/of BG streefdoelen aanpast adhv jouw gevoeligheid op dat moment. en houd op de OpenAPS tab in de gaten hoe AndroidAPS de basaalstanden en/of streefdoelen dienovereenkomstig aanpast.

*Vergeet niet om jezelf als nieuwe looper aan te melden via 'dit formulier \<https://bit.ly/nowlooping>'\_ en AndroidAPS als jouw type loop-software te kiezen, als je dat nog niet gedaan hebt.*

## Objective 9: Enabling additional oref1 features for daytime use, such as super micro bolus (SMB)

Je moet het [SMB hoofdstuk in deze wiki](../Usage/Open-APS-features#super-micro-bolus-smb) en het [hoofdstuk oref1 in openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) lezen om te begrijpen hoe SMB werkt, met name het idee achter de tijdelijke basaalstanden van nul (zero-temp).
\* Daarna kun je [maxIOB verhogen](../Usage/Open-APS-features#maximum-total-iob-openaps-cant-go-over-openaps-max-iob) zodat SMB goed kan functioneren. maxIOB bevat nu alle IOB, niet alleen de toegediende basale insuline. Als je een bolus van 8E geeft voor een maaltijd en jouw maxIOB is 7E, dan zullen er geen SMBs worden afgegeven totdat IOB onder de 7E komt. Een goede start is maxIOB = gemiddelde maalbolus + 3x max dagelijkse basaal (max dagelijkse basaal = de hoogste waarde van jouw basaal (in eenheden per uur). Zie [Doel 7](../Usage/Objectives#objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets) voor een afbeelding
Wanneer je van AMA naar SMB wisselt, dan moet je jouw instelling voor min_5m_carbimpact in de Opname instellingen veranderen van 3 naar 8. Je moet dit handmatig doen wanneer je van AMA naar SMB wisselt.

## Objective 10: Automation

- You have to start objective 10 to be able to use [Automation](../Usage/Automation.md).
- Zorg ervoor dat je alle doelen hebt voltooid, inclusief het [examen](../Usage/Objectives#doel-3-bewijs-jouw-kennis).
- Het behalen van eerdere doelen zal geen effect hebben op andere doelen die je al hebt behaald. Je behoudt alle reeds afgeronde doelen!

## Teruggaan in doelen

Als je om welke reden dan ook terug wilt gaan in de leerdoelen druk dan op "voltooiing wissen".

```{image} ../images/Objective_ClearFinished.png
:alt: Teruggaan in doelen
```

## Objectives in Android APS before version 3.0

One objective was removed when Android APS 3.0 was released.  Users of Android APS version 2.8.2.1 who are on older Android software (i.e. earlier than version 9) will be using an older set of objectives which can be found [here](../Usage/Objectives_old.md).
