SMS-commando's
**************************************************
Safety First
==================================================
* AndroidAPS heeft de optie om de telefoon (van bijvoorbeeld een kind) op afstand te kunnen bedienen via SMS-berichten. Bedenk wel, dat de telefoon die is ingesteld om externe commando's te geven, kan worden gestolen. Beveilig die telefoon dus goed, met op z'n minst een pincode.
* Nadat jouw externe commando (bijv. bolus geven, profiel aanpassen) is uitgevoerd, zal AndroidAPS een bevestigings-SMS sturen. Het wordt aangeraden om ten minste 2 telefoonnummers te koppelen in de SMS communicator instellingen. Mocht één van de gekoppelde telefoons worden gestolen, dan zul je deze bevestigings-SMS'jes evengoed nog op het tweede telefoonnummer binnenkrijgen.
* **Als je bolus via SMS commando's gebruikt, moet je koolhydraten invoeren via Nightscout (NSClient, Website...)!** Als je dit niet doet, dan zou IOB correct zijn met te weinig COB waardoor de correctie bolus mogelijk niet zal worden uitgevoerd, aangezien AAPS ervan uitgaat dat je al te veel actieve insuline hebt.

Hoe het werkt
==================================================
* De meeste aanpassingen zoals tijdelijke streefdoelen, AAPS volgen etc. kunnen gedaan worden via de ` NSclient-app <../Children/Children.html> ` _ op een Android-telefoon met een internetverbinding.
* Bolussen kunnen niet worden gegeven via Nightscout, maar u kunt wel SMS-opdrachten gebruiken.
* Indien u een iPhone als monitor gebruikt en geen NSclient kunt gebruiken, zijn er extra SMS-commando's beschikbaar.

* Ga bij een Android telefoon bij instellingen naar Applicaties > AndroidAPS > Machtigingen en schakel SMS in
* Ga in AndroidAPS naar Configurator > SMS Commando's en voer de telefoonnummer(s) in waar je SMS-commando's van wilt ontvangen (gescheiden door puntkomma's en ZONDER spatie's) - d.w.z. +31612345678;+31612345679) en schakel ook 'Sta SMS commando's toe' in.
* Als je meer dan één nummer wilt gebruiken:

  * Voer slechts één nummer in.
  * Zorg dat dat enkele nummer werkt door het verzenden en het bevestigen van een SMS-commando.
  * Geef extra nummer(s) op, gescheiden door puntkomma, geen spatie.
  
    .. image:: ../images/SMSCommandsSetupSpace.png
      :alt: SMS Commando's Instellen


* Stuur vanaf de zojuist ingevoerde telefoonnummer(s) één van onderstaande SMS commando's in **hoofdletters** naar de telefoon waar AndroidAPS opstaat. De telefoon zal bevestigen dat het commando of de statusverandering succesvol is doorgevoerd. Bevestig zonodig de opdracht, door het verzenden van de code uit de SMS die de AndroidAPS telefoon heeft gesturrd.

**Hint**: Het kan verstandig zijn om een abbonnement met onbeperkte SMS te hebben voor beide telefoons omdat er veel SMS'jes gestuurd zullen worden.

Commando‘s
==================================================

Hoofdletters en kleine letters zijn niet relevant bij het verzenden van commando's.

Opdrachten moeten in het Engels worden verzonden, de respons zal in jouw lokale taal zijn als de responsreeks al is `vertaald <../translations.html#translate-strings-for-androidaps-app>`_.

.. image:: ../images/SMSCommands.png
  :alt: SMS Commando's voorbeeld

Loop
--------------------------------------------------
* LOOP STOP/DISABLE
   * Reactie: Loop is uitgeschakeld (disabled)
* LOOP START/ENABLE
   * Reactie: Loop is ingeschakeld (enabled)
* LOOP STATUS
   * De respons is afhankelijk van de werkelijke status:
      * Loop is uitgeschakeld (disabled)
      * Loop is ingeschakeld (enabled)
      * Gepauzeerd (10 min)
* LOOP SUSPEND 20
   * Reactie: Loop wordt onderbroken gedurende 20 minuten (Loop suspended for 20 minutes)
* LOOP RESUME
   * Reactie: Loop hervat (resumed)

CGM gegevens
--------------------------------------------------
* BG
   * Reactie: Laatste BG: 5.6 4min geleden, Delta: -0,2 mmol, IOB: 0.20U (Bolus: 0.10U Basaal: 0.10U)
* CAL 5.6
   * Reactie: Om een kalibratie van 5,6 mmol/L te verzenden antwoord met de code Rrt
   * Reactie na correcte code ontvangen: Calibration verzonden (**Als xDrip is geïnstalleerd. In de xDrip+ instellingen moet je aangevinkt hebben dat kalibraties van volgers geaccepteerd worden**)

Basaal
--------------------------------------------------
* BASAL STOP/CANCEL
   * Reactie: Om tijdelijke basaal te stoppen antwoord met code EmF [Opmerking: Code EmF is slechts een voorbeeld]
* BASAL 0.3
   * Reactie: Om een tijdelijk basaal van 0,3 E/uur gedurende 30 min te starten antwoord met de code Swe
* BASAL 0.3 20
   * Reactie: Om een tijdelijk basaal van 0,3 E/uur gedurende 20 min te starten antwoord met de code Swe
* BASAL 30%
   * Reactie: Om een tijdelijk basaal van 30% gedurende 30 min te starten antwoord met code Swe
* BASAL 30% 50
   * Reactie: Om een tijdelijk basaal van 30% gedurende 50 min te starten antwoord met code Swe

Bolus
--------------------------------------------------
Bolus op afstand is niet toegestaan binnen 15 min (deze waarde is alleen aan te passenn als 2 telefoonnummers zijn toegevoegd) na laatste bolus opdracht of extern commando! Daarom is de respons afhankelijk van de tijd sinds de laatste bolus werd gegeven.

* BOLUS 1.2
   * Reactie A: Om bolus van 1.2E toe te dienen antwoord met code Rrt
   * Reactie B: Externe bolus niet beschikbaar. Probeer het later opnieuw.
* BOLUS 0.60 MEAL
   * Als je de optionele parameter MEAL opgeeft, dan wordt het tijdelijke streefdoel "eet binnenkort" ingesteld (standaard waarden zijn: 90 mg/dL, 5.0 mmol/l voor 45 min).
   * Reactie A: Om maaltijdbolus van 0.6E toe te dienen antwoord met code Rrt
   * Reactie B: Externe bolus niet beschikbaar. 
* CARBS 5
   * Reactie: Om 5g in te voeren om 12:45, antwoord met code EmF
* CARBS 5 17:35/5:35PM
   * Reactie: Om 5g in te voeren om 17:35, antwoord met code EmF
* EXTENDED STOP/CANCEL
   * Reactie: Om een vertraagde bolus te stoppen antwoord met code EmF
* EXTENDED 2 120
   * Reactie: Om een vertraagde bolus van 2E gedurende 120 min te starten antwoord met code EmF

Profiel
--------------------------------------------------
* PROFILE STATUS
   * Reactie: Profiel1
* PROFILE LIST
   * Reactie: 1.`Profiiel1` 2.`Profiel2`
* PROFILE 1
   * Reactie: Om van profiel te wisselen naar Profile1 100% antwoord met code Any
* PROFILE 2 30
   * Reactie: Om van profiel te wisselen naar Profile2 30% antwoord met code Any

Andere
--------------------------------------------------
* TREATMENTS REFRESH
   * Reactie: Haal behandelingen op van NS
* NSCLIENT RESTART
   * Reactie: NSCLIENT RESTART 1 ontvangers
* PUMP
   * Reactie: Laatste Verbinding: 1 min geleden Temp: 0,00E/uur @11:38 5/30min IOB: 0,5E Reservoir: 34E Batterij: 100
* SMS DISABLE/STOP
   * Reactie: Om de SMS Remote Service uit te schakelen, antwoord met code Any. Houd er rekening mee dat je het gebruik van SMS commando's alleen direct vanaf de AAPS master smartphone kunt heractiveren.
* TARGET MEAL/ACTIVITY/HYPO   
   * Reactie: Om tijdelijk streefdoel MEAL/ACTIVITY/HYPO in te stellen antwoord met code Any
* TARGET STOP/CANCEL   
   * Reactie: Om tijdelijk streefdoel te annuleren antwoord met code Any
* HELP
   * Reactie: BG, LOOP, BEHANDELINGEN, .....
* HELP BOLUS
   * Reactie: BOLUS 1.2 BOLUS 1.2 MAALTIJD

Problemen oplossen
==================================================
Meerdere SMS
--------------------------------------------------
Als je hetzelfde bericht steeds opnieuw ontvangt (d.w.z. profiel wissel) dan heb je waarschijnlijk een cirkel gemaakt met andere apps. Dit kan bijvoorbeeld xDrip+ zijn. Als dat zo is, zorg er dan voor dat xDrip+ (of een andere app) geen behandelingen naar NS uploadt. 

Als de andere app is geïnstalleerd op meerdere telefoons, zorg ervoor dat upload is uitgeschakeld bij al die telefoons.

SMS-commando's doen het niet op mijn Samsung, wat nu?
--------------------------------------------------
Er is een melding gemaakt van SMS-commando's die niet meer werkten na een update op een Galaxy S10 telefoon. Dit kon worden opgelost door 'verzenden als chatbericht' uit te schakelen.

.. image:: ../images/SMSdisableChat.png
  :alt: Uitschakelen SMS als chatbericht
