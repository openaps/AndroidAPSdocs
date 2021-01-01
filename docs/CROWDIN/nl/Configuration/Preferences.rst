Instellingen
***********************************************************
* Open de instellingen door te klikken op de 3 stipjes in de rechterbovenhoek van het Overzicht scherm.

  .. image:: ../images/Pref2020_Open.png
    :alt: Open instellingen

* Je kunt direct naar voorkeuren springen voor een bepaald tabblad (bijv. pomp tabblad) door dit tabblad te openen en op Plugin voorkeuren te klikken.

  .. image:: ../images/Pref2020_OpenPlugin.png
    :alt: Open plugin instellingen
    
* Submenu's kun je openen door te klikken op de driehoek onder de sub-menu titel.

  .. image:: ../images/Pref2020_Submenu.png
    :alt: Open submenu

Algemeen
===========================================================

**Eenheden**

* Stel eenheden in op mmol/l of mg/dl, afhankelijk van wat je gewend bent.

**Taal**

* Nieuwe optie om de standaard ingestelde taal van jouw telefoon te gebruiken (aanbevolen). 
* Mocht je AAPS in een andere taal willen hebben dan de standaardtaal van jouw telefoon, kun je hier elke taal kiezen die je maar wil.
* Let op: Als je een andere taal kiest dan de standaardtaal van jouw telefoon, dan zie je soms een mix van talen. Dit komt door een Android probleem, waarbij het overschrijven van de standaard taalinstelling soms niet werkt, helaas is daar geen oplossing voor.

  .. image:: ../images/Pref2020_General.png
    :alt: Instellingen > Algemeen

**Naam patiënt**

* Handig als je onderscheid moet maken tussen meerdere setups (er zijn bijvoorbeeld twee kinderen met diabetes in jouw gezin).

Beveiliging
-----------------------------------------------------------
Masterwachtwoord
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Noodzakelijk om instellingen te kunnen `exporteren <../Usage/ExportImportSettings.html>`_ als ze zijn versleuteld. (Geldt vanaf AAPS versie 2.7).

   ** Biometrische beveiliging werkt niet op OnePlus-telefoons. Dit is een bekend probleem van OnePlus. **

* Open de Instellingen door te klikken op de 3 stipjes in de rechterbovenhoek van het Overzicht scherm
* Klik op de driehoek onder "Algemeen"
* Klik op "Masterwachtwoord"
* Voer het wachtwoord in, bevestig het wachtwoord en klik op ok.

  .. image:: ../images/MasterPW.png
    :alt: Masterwachtwoord instellen
  
Instellingenbeveiliging
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Bescherm jouw instellingen met een wachtwoord of met de biometrische verificatie van jouw telefoon (bijv. `een kind gebruikt AAPS <../Children/Children.html>`_).
* Er moet een aangepast wachtwoord worden gebruikt als je het masterwachtwoord alleen wilt gebruiken voor het beveiligen van `geëxporteerde instellingen <../Usage/ExportImportSettings.html>`_.
* Als je een aangepast wachtwoord gebruikt, klik op de regel "Instellingen wachtwoord" om het wachtwoord in te stellen zoals `boven <../Configuration/Preferences.html#masterwachtwoord>`_beschreven.

  .. image:: ../images/Pref2020_Protection.png
    :alt: Beveiliging

App beveiliging
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Als de app is beveiligd moet je het wachtwoord invoeren of de biometrische verificatie van de telefoon gebruiken om AAPS te openen.
* De app zal onmiddellijk worden afgesloten als er een verkeerd wachtwoord is ingevoerd-maar nog steeds op de achtergrond worden uitgevoerd als de app al succesvol geopend was.

Bolus beveiliging
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Bolus beveiliging kan nuttig zijn als AAPS wordt gebruikt door een klein kind en u `bolus via SMS <../Children/SMS-Commands.html>`_gebruikt.
* In het voorbeeld hieronder zie je dat de app vraagt om biometrische verificatie. Mocht de biometrische verificatie niet werken, klikt dan in de ruimte boven het witte venster en voer het masterwachtwoord in.

  .. image:: ../images/Pref2020_PW.png
    :alt: Vraag biometrische verificatie

Skin
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Je kunt kiezen uit drie soorten skins:

  .. image:: ../images/Pref2020_Skin.png
    :alt: Selecteer skin

* Dit verschilt, afhankelijk van de oriëntatie van de telefoon

Staande stand
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
* **Klassiek weergave thema** en **Knoppen worden altijd weergegeven aan de onderkant van het scherm** zijn identiek
* **Groot scherm** geeft alle grafieken groter weer dan bij andere skins

Liggende stand
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
* Wanneer je voor **Klassiek weergave thema** en **Groot scherm**, moet je naar beneden scrollen om de knoppen onder aan het scherm te zien
* **Groot scherm** geeft alle grafieken groter weer dan bij andere skins

  .. image:: ../images/Screenshots_Skins.png
    :alt: Skins afhankelijk van de oriëntatie van de telefoon

Overzicht
===========================================================

* In deze sectie kun je instellen hoe het Overzicht scherm eruit ziet.

  .. image:: ../images/Pref2020_OverviewII.png
    :alt: Instellingen > Overzicht

Laat scherm aan
-----------------------------------------------------------
* Handig wanneer je een presentatie geeft. 
* Het verbruikt wel veel energie, dus het is verstandig om je telefoon hierbij aan een lader te hebben.

Knoppen
-----------------------------------------------------------
* Kies welke knoppen zichtbaar zijn onderaan jouw Overzicht-scherm.
* Je vind hier ook enkele keuzeopties voor het dialoogvenster dat je gaat zien na het indrukken van zo'n knop.

  .. image:: ../images/Pref2020_OV_Buttons.png
    :alt: Instellingen > Knoppen

Vaste maaltijd
-----------------------------------------------------------
* Via Vaste maaltijd instellingen kun je een knop toevoegen aan het Overzicht-scherm voor een snack of maaltijd die je vaker eet. Je kunt instellen hoeveel koolhydraten de maaltijd bevat, en instellen hoe AAPS de bolus moet berekenen.
* Je kunt maar één Vaste maaltijdknop tegelijkertijd op het Overzicht scherm laten weergeven. In de instellingen stel je in gedurende welk tijdsvak een bepaalde maaltijdknop wordt weergegeven.
* Als je op op jouw Overzicht scherm op de Vaste maaltijdknop hebt gedrukt, dan zal AAPS een bolus voorstellen voor de koolhydraten uit die maaltijd. AAPS gebruikt hiervoor jouw actieve profiel instellingen (hij neemt hierbij jouw bloedglucose of insuline aan boord mee in zijn berekeinging, als je dat zo hebt ingesteld). 
* Je moet het voorstel bevestigen voordat de insuline wordt afgeleverd.

  .. image:: ../images/Pref2020_OV_QuickWizard.png
    :alt: Instellingen > Vaste maaltijdknop
  
Standaard tijdelijke streefdoelen
-----------------------------------------------------------
* Dmv `Tijdelijk streefdoel (Temp Target, TT) <../Usage/temptarget.html#tijdelijk-streefdoel>`_ kun je vaste waardes instellen om jouw bloedglucose streefdoel gedurende een zelfgekozen tijdsduur te wijzigen.
* Je kunt zelf instellen welke BG waarde en welke tijdsduur AAPS gebruikt bij de verschillende standaard tijdelijke streefdoelen: activiteit, eet binnenkort en hypo.
* Om een bepaald tijdelijk streefoel te activeren heb je drie opties: houd het streefdoel in de rechterbovenhoek van jouw Overzicht scherm lang ingedrukt, of gebruik de knop op het Activiteit tabblad, of zet een vinkje via de oranje "Koolhydraten" knop aan de onderkant. Alledrie hebben hetzelfde resultaat.

  .. image:: ../images/Pref2020_OV_DefaultTT.png
    :alt: Instellingen > Standaard tijdelijke streefdoelen
  
Ontlucht/Vul standaard insuline hoeveelheden
-----------------------------------------------------------
* Als je jouw infuusslang of kanule via AAPS wilt vullen dan kan dat via de knop op de `Acties tab <../Usage/CPbefore26.html#pomp>`_.
* Je kunt zelf kiezen welke standaardhoeveelheden AAPS laat zien in het dialoogvenster dat ontlucht/vul knop zit.

Bereik voor visualisatie
-----------------------------------------------------------
* Bepaal tussen welke waardes de BG grafiek op het Overzicht scherm het voor jou 'groene gebied' weergeeft. NB: dit bepaalt alleen het uiterlijk van jouw grafiek, verwar deze waardes niet met het BG streefdoel uit jouw profiel!

  .. image:: ../images/Pref2020_OV_Range2.png
    :alt: Instellingen > Bereik voor visualisatie

Afgekorte tab titels
-----------------------------------------------------------
* Hiermee passen er meer tabbladen naast elkaar op je scherm. 
* Bijvoorbeeld het 'CONFIGURATOR' tabblad wordt 'CONF', 'ACTIES' wordt 'ACT' etc.

  .. image:: ../images/Pref2020_OV_Tabs.png
    :alt: Instellingen > Tabbladen

Toon notities veld in behandeling dialoogvensters
-----------------------------------------------------------
* Hiermee krijg je de optie om notities toe te voegen wanneer je een behandeling invoert via één van de dialoogvensters (bolus calculator, koolhydraten, insuline, ...) 

  .. image:: ../images/Pref2020_OV_Notes.png
    :alt: Instellingen > Notities in behandeldialogen
  
Statusindicatoren
-----------------------------------------------------------
* Statusindicatoren geven een visuele waarschuwing voor 
      
   * Infuus leeftijd
   * Insuline leeftijd (aantal dagen dat reservoir wordt gebruikt)
   * Reservoir niveau (eenheden)
   Sensor Leeftijd
   * Batterij leeftijd
   * Batterij niveau (%)

* Als de drempelwaarde voor waarschuwing wordt overschreden, worden de waarden in geel weergegeven.
* Als de drempelwaarde voor alarm wordt overschreden, worden de waarden in rood weergegeven.
* In versies ouder dan AAPS 2.7 moest je de instellingen voor statusindicatoren nog aanpassen in Nightscout, nu kan dit direct hier in AAPS.

  .. image:: ../images/Pref2020_OV_StatusLights2.png
    :alt: Istellingen > Statusindicatoren

Geavanceerde instellingen (Overzicht)
-----------------------------------------------------------
Voer dit deel van het boluscalculator resultaat uit
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Met deze instelling laat je slechts een deel toedienen van de uitkomst van de boluscalculator. 
* Alleen het ingestelde percentage (moet tussen 10 en 100 liggen) van de berekende bolus wordt afgeleverd wanneer de boluscalculator wordt gebruikt. 
* Het percentage zie je terug in de boluscalculator.

Superbolus
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Geeft de superbolus optie weer in de boluswizard.
* Dmv `Superbolus <https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/>`_ kun je wat insuline "naar voren halen" van de basaal die je de komende twee uur zou hebben gekregen. Dit om (maaltijd)pieken te voorkomen.

Behandelingen veiligheid
===========================================================
Leeftijd Patiënt
-----------------------------------------------------------
* Veiligheidslimieten worden ingesteld op basis van de leeftijd die je in deze instelling selecteert. 
* Als je tegen de beperkingen van zo'n zogenaamde 'harde limiet' (zoals max bolus) aanloopt, dan is het tijd om te kiezen voor de daaropvolgende categorie. 
* Het is een slecht idee om hogere categorie te kiezen dan past bij jouw echte leeftijd/resistentie, omdat het kan leiden tot een overdosis als je de verkeerde waarde in het insulin-dialoogvenster intypt (bijv. als je de komma verkeerd zet). 
* Als je wilt weten wat de precieze getallen zijn voor deze veiligheidslimieten, ga dan naar `deze pagina <../Usage/Open-APS-features.html>`_ en scroll naar het algoritme dat jij gebruikt.

Max toegestane bolus [E]
-----------------------------------------------------------
Dit is de maximale hoeveelheid bolus insuline die AAPS mag leveren. 
* Deze instelling is een veiligheidslimiet om te voorkomen dat er per ongeluk een enorme bolus wordt afgegeven door een misrekening of typfout van de gebruiker. 
* Het wordt aangeraden om deze in te stellen op de maximale hoeveelheid bolus insuline die je ooit voor een maaltijd of correctie nodig zult hebben. 
* Deze beperking wordt ook toegepast op de resultaten van de Boluscalculator.

Max toegestane koolhydraten [g]
-----------------------------------------------------------
* Dit is de maximale hoeveelheid koolhydraten waarvoor de Boluscalculator insuline mag geven.
* Deze instelling is een veiligheidslimiet om te voorkomen dat er per ongeluk een enorme bolus wordt afgegeven door een misrekening of typfout van de gebruiker. 
* Het wordt aangeraden om deze in te stellen op de maximale hoeveelheid koolhydraten die je ooit zult eten bij een maaltijd.

Loop
===========================================================
APS Mode
-----------------------------------------------------------
* Schakelt tussen open loop, gesloten loop en 'stop bij laag'
* **Open loop** betekent dat AAPS indien nodig suggesties doet voor hogere/lagere basaalstanden. Dit wordt weergegeven als melding, jij als gebruiker moet iets doen om deze suggestie ook daadwerkelijk op je pomp uit te voeren.  
* **Closed loop (gesloten loop) betekent dat hogere/lagere basaalstanden (en SMBs, als je dat aan hebt staan) automatisch naar je pomp worden verzonden zonder bevestiging of invoer van jou.  
* **Stop bij laag** betekent dat AAPS wél lagere basaalstanden instelt als je BG teveel zakt, maar als je BG teveel stijgt, zal hij geen hogere basaalstand instellen (tenzij IOB<0).

Minimale verzoek voor aanpassing [%]
-----------------------------------------------------------
* Bij het gebruik van open loop ontvangt je meldingen telkens wanneer AAPS een suggestie doet om de basaalstand aan te passen. 
* Om het aantal meldingen te verminderen, kun je een breder bereik voor BG gebruiken of een hier hoger percentage van het minimale verzoek voor aanpassing instellen.
* Hiermee stel je de minimale relatieve TBR aanpassing in waarbij AAPS een suggestie doet.

Advanced Meal Assist (AMA) of Super Micro Bolus (SMB)
===========================================================
Afhankelijk van jouw instellingen in de `Configurator <../Configuration/Config-Builder.html>`_ kun je kiezen tussen twee algoritmes:

* `Advanced Meal Assist (OpenAPS AMA) <../Usage/Open-APS-features.html#geavanceerde-maaltijdhulp-ama>`_ (Geavanceerde maaltijdhulp) - status van het algoritme in 2017
* ` Super Micro Bolus (OpenAPS SMB) <../Usage/Open-APS-features.html#super-micro-bolus-smb>`_ - meest recente algoritme voor ervaren gebruikers

OpenAPS AMA instellingen
-----------------------------------------------------------
Dankzij de geavanceerde maaltijdhulp (Advanced Meal Assist, AMA) kan het systeem na een maaltijdbolus sneller een hogere tijdelijke basaalstand geven, zolang je wel je koolhydraten correct hebt ingevoerd. 
* Zie ook de `OpenAPS documentatie <http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html>`_.

Maximaal instelbaar basaal E/u
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Deze instelling is een veiligheidslimiet om te voorkomen dat AAPS ooit een gevaarlijk hoge basaalstand kan instellen. 
* Dit getal wordt weergegeven in eenheden per uur (E/uur). 
* We raden je aan je verstand te gebruiken bij het invullen van deze waarde. Een goede aanbeveling is om de hoogste basaalstand in je profiel te nemen en die te **vermenigvuldigen met 4**. 
* Als de hoogste basaalstand in je profiel bijvoorbeeld 0,5 E/uur is, dan moet je dat vermenigvuldigen met 4 om een waarde van 2 E/uur te krijgen.
* Zie ook de `gedetailleerde functiebeschrijving <../Usage/Open-APS-features.html#maximale-e-uur-dat-een-tijdelijke-basaalstand-kan-toedienen-openaps-max-basal>`_.

Max totaal IOB dat OpenAPS niet kan overschrijden [E]
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Hoeveelheid extra basale insuline (in eenheden) tot waaraan OpenAPS de hoeveelheid insuline in jouw lichaam mag laten oplopen, bovenop je normale basale insuline. 
* Zodra deze waarde is bereikt, zal AAPS stoppen met het geven van extra basale insuline totdat jouw basale Insulin On Board (IOB, insuline aan boord) naar binnen dit bereik is teruggelopen. 
* Deze waarde **laat bolus IOB buiten beschouwing**, alleen basale insuline wordt meegerekend.
* Het berekenen en sturen op deze waarde gebeurt onafhankelijk van jouw normale basale insuline. Alleen de extra basale insuline die werd afgegeven bovenop je normale basaalstand, wordt meenomen.

Wanneer je begint met loopen, wordt tijdens een van de leerdoelen een tijd lang Max Basal IOB beperkt naar 0, zodat je gewend raakt aan het systeem. Dit zorgt ervoor dat AAPS helemaal geen extra basale insuline kan geven. Terwijl AAPS wel je basale insuline naar beneden kan bijstellen, of zelfs helemaal uitschakelen om een hypo te helpen voorkomen. Dit is een belangrijke stap omdat:

* Je de tijd krijgt om veilig gebruik te maken van het AAPS-systeem en rustig kunt observeren hoe het werkt.
Je nu de kans hebt om jouw basaalprofiel en insuline gevoeligheidsfactor (ISF, Insulin Sensitivity Factor) perfect te maken.
* Je kunt zien hoe AAPS jouw basale insuline naar beneden bijstelt om hypo's te voorkomen.

Pas na een tijd mag je het systeem toestaan om extra basale insuline te geven door de Max Basal IOB waarde te verhogen. Als eerste start wordt aangeraden om de hoogste basaalstand in je profiel te nemen en die te **vermenigvuldigen met 3**. Als de hoogste basaalstand in je profiel bijvoorbeeld 0,5 E/uur is, dan moet je dat vermenigvuldigen met 3 om een waarde van 1.5 E/uur te krijgen.

* Je kunt voorzichtig beginnen met deze waarde en deze langzaam verhogen. 
* Dit zijn alleen richtlijnen; ieder mens is anders. Je kunt onderweg merken dat jij zelf minder of meer nodig hebt dan wat hier wordt aanbevolen, begin altijd voorzichtig en pas langzaam aan.

**Opmerking: om veiligheidsredenen geldt er voor Max Basal IOB een 'harde limiet' (voor volwassenen is die 7E). Zie ook de pagina over "OpenAPS functies" elders in deze wiki.**

Gevoeligheidsdetectie (Autosens)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* `Autosens <../Usage/Open-APS-features.html#autosens>`_ kijkt naar bloedglucoseafwijkingen (positieve/negative/neutrale).
* Op basis van deze afwijkingen kijkt AAPS of je gevoeliger (of, juist ongevoeliger) bent voor insuline, en zal vervolgens jouw basaalstanden en ISF aanpassen.
* Als je "Autosens past ook het streefdoel aan" selecteert, zal het algoritme ook je BG streefdoel wijzigen.

Geavanceerde instellingen (OpenAPS AMA)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Normaal gesproken hoef je deze instellingen niet te wijzigen!
* Als je ze toch wilt veranderen, zorg er dan voor dat je de details in de `OpenAPS docs <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#>`_ leest en begrijpt wat je doet.

OpenAPS SMB instellingen
-----------------------------------------------------------
* In contrast to AMA, `SMB <../Usage/Open-APS-features.html#super-micro-bolus-smb>`_ does not use temporary basal rates to control glucose levels, but mainly small super micro boluses.
* You must have started `objective 10 <../Usage/Objectives.html#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb>`_ to use SMB.
* The first three settings are explained `above <./Configuration/Preferences.html#max-u-h-a-temp-basal-can-be-set-to>`_.
* Details on the different enable options are described in `OpenAPS feature section <../Usage/Open-APS-features.html#enable-smb>`_.
* *How frequently SMBs will be given in min* is a restriction for SMB to be delivered only every 4 min by default. This value prevents the system from issuing SMB too often (for example in case of a temp target being set). You should not change this setting unless you know exactly about consequences. 
* If 'Sensitivity raises target' or 'Resistance lowers target' is enabled `Autosens <../Usage/Open-APS-features.html#autosens>`_ will modify your glucose target according to your blood glucose deviations.
* If target is modified it will be displayed with a green background on your home screen.

  .. image:: ../images/Home2020_DynamicTargetAdjustment.png
    :alt: Target modified by autosens
  
Carb required notification
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* This feature is only available if SMB algorithm is selected.
* Eating of additional carbs will be suggested when the reference design detects that it requires carbs.
* In this case you will receive a notification which can be snoozed for 5, 15 or 30 minutes.
* Additionally the required carbs will be displayed in the COB section on your home screen.
* A threshold can  be defined - minimum amount of carbs needed to trigger notification. 
* Carb required notifications can be pushed to Nightscout if wished, in which case an announcement will be shown and broadcast.

  .. image:: ../images/Pref2020_CarbsRequired.png
    :alt: Display carbs required on home screen
  
Advanced settings (OpenAPS SMB)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Normaal gesproken hoef je deze instellingen niet te wijzigen!
* Als je ze toch wilt veranderen, zorg er dan voor dat je de details in de `OpenAPS docs <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#>`_ leest en begrijpt wat je doet.

Opname instellingen
===========================================================

  .. image:: ../images/Pref2020_Absorption.png
    :alt: Absorption settings

min_5m_carbimpact
-----------------------------------------------------------
* The algorithm uses BGI (blood glucose impact) to determine when carbs are absorbed. 
* The value is only used during gaps in CGM readings or when physical activity “uses up” all the blood glucose rise that would otherwise cause AAPS to decay COB. 
* At times when carb absorption can’t be dynamically worked out based on your bloods reactions it inserts a default decay to your carbs. Het is in feite een vangnet.
* To put it simply: The algorithm "knows" how your BGs *should* behave when affected by the current dose of insulin etc. 
* Whenever there is a positive deviation from the expected behaviour, some carbs are absorbed/decayed. Big change=many carbs etc. 
* The min_5m_carbimpact does define the default carb absorption impact per 5 minutes. For more details see `OpenAPS docs <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html?highlight=carbimpact#min-5m-carbimpact>`_.
* Standard value for AMA is 5, for SMB it's 8.
* The COB graph on the home screen indicates when min_5m_impact is being used by putting an orange circle at the top.

  .. image:: ../images/Pref2020_min_5m_carbimpact.png
    :alt: COB graph
  
Maximum meal absorption time
-----------------------------------------------------------
* Als je vaak maaltijden met een hoog vet- of eiwitgehalte eet, moet je de opnametijd verhogen.

Advanced settings - autosens ratio
-----------------------------------------------------------
* Define min. and max. `autosens <../Usage/Open-APS-features.html#autosens>`_ ratio.
* Normally standard values (max. 1.2 and min. 0.7) should not be changed.

Pomp instellingen
===========================================================
The options here will vary depending on which pump driver you have selected in `Config Builder <../Configuration/Config-Builder.html#pump>`_.  Koppel en stel je pomp in volgens de instructies van jouw pomp:

* `DanaR Insulin Pump <../Configuration/DanaR-Insulin-Pump.html>`_ 
* `DanaRS Insulin Pump <../Configuration/DanaRS-Insulin-Pump.html>`_
* `Accu Chek Combo Pump <../Configuration/Accu-Chek-Combo-Pump.html>`_
* `Accu Chek Insight Pump <../Configuration/Accu-Chek-Insight-Pump.html>`_ 
* `Medtronic Pump <../Configuration/MedtronicPump.html>`_

Als je AndroidAPS gebruikt in 'open loop' modus, zorg er dan voor dat je Virtuele Pomp hebt geselecteerd in de Configurator.

NSClient
===========================================================

  .. image:: ../images/Pref2020_NSClient.png
    :alt: NSClient

* Set your *Nightscout URL* (i.e. https://yourwebsitename.herokuapp.com) and the *API secret* (a 12 character password recorded in your Heroku variables).
* This enables data to be read and written between both the Nightscout website and AndroidAPS.  
* Als je vastzit in Doel 1, controleer dan goed of je hier geen typfouten hebt gemaakt.
* **Make sure that the URL is WITHOUT /api/v1/ at the end.**
* *Log app start to NS* will record a note in your Nightscout careportal entries every time the app is started.  The app should not be needing to start more than once a day; more frequently than this suggests a problem (i.e. battery optimization not disabled for AAPS). 
* If activated changes in `local profile <../Configuration/Config-Builder.html#local-profile-recommended>`_ are uploaded to your Nightscout site.

Verbindings instellingen
-----------------------------------------------------------

  .. image:: ../images/ConfBuild_ConnectionSettings.png
    :alt: NSClient connection settings  
  
* Restrict Nightscout upload to Wi-Fi only or even to certain Wi-Fi SSIDs.
* If you want to use only a specific WiFi network you can enter its WiFi SSID. 
* Multiple SSIDs can be separated by semicolon. 
* Om alle SSIDs te verwijderen vul je een spatie in in dit veld.

Alarm opties
-----------------------------------------------------------
* Alarm options allows you to select which default Nightscout alarms to use through the app.  
* For the alarms to sound you need to set the Urgent High, High, Low and Urgent Low alarm values in your `Heroku variables <http://www.nightscout.info/wiki/welcome/website-features#customalarms>`_. 
* They will only work whilst you have a connection to Nightscout and are intended for parent/carers. 
* If you have the CGM source on your phone (i.e. xDrip+ or Dexcom patched app) then use those alarms instead.

Geavanceerde instellingen (NSClient)
-----------------------------------------------------------

  .. image:: ../images/Pref2020_NSClientAdv.png
    :alt: NS Client advanced settings

* Most options in advanced settings are self-explanatory.
* *Enable local broadcasts* will share your data to other apps on the phone such as xDrip+. 

  * Dexcom patched app does not broadcast directly to xDrip+. 
  * You need to `go through AAPS <../Configuration/Config-Builder.html#bg-source>`_ and enable local broadcast in AAPS to use xDrip+ alarms.
  
* *Always use basal absolute values* must be activated if you want to use Autotune properly. See `OpenAPS documentation <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/understanding-autotune.html>`_ for more details on Autotune.

SMS Communicator
===========================================================
* Options will only be displayed if SMS communicator is selected in `Config Builder <../Configuration/Config-Builder.html#sms-communicator>`_.
* This setting allows remote control of the app by texting instructions to the patient's phone which the app will follow such as suspending loop, or bolusing.  
* Further information is described in `SMS Commands <../Children/SMS-Commands.html>`_.
* Additional safety is obtained through use of an authenticator app and additional PIN at token end.

Automatisering
===========================================================
Select which location service shall be used:

* Gebruik passieve locatie: AAPS neemt alleen locaties als andere apps erom vragen
* Use network location: Location of your Wi-Fi
* Gebruik GPS-locatie (Let op! Dit kan veel batterijverbruik geven!)

Lokaal gegenereerde waarschuwingen
===========================================================

  .. image:: ../images/Pref2020_LocalAlerts.png
    :alt: Local alerts

* Settings should be self-explanatory.

Data choices
===========================================================

  .. image:: ../images/Pref2020_DataChoice.png
    :alt: Data choices

* You can help develop AAPS further by sending crash reports to the developers.

Maintenance settings
===========================================================

  .. image:: ../images/Pref2020_Maintenance.png
    :alt: Maintenance settings

* Standard recipient of logs is logs@androidaps.org.
* If you select *Encrypt exported settings* these are encrypted with your `master password <../Configuration/Preferences.html#master-password>`_. In this case master password has to be entered each time settings are exported or imported.

Open Humans
===========================================================
* You can help the community by donating your data to research projects! Details are described on the `Open Humans page <../Configuration/OpenHumans.html>`_.
* In Preferences you can define when data shall be uploaded

   * only if connected to WiFi
   * only if charging
