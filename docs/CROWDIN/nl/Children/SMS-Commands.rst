SMS-commando's
**************************************************
Safety First
==================================================
* AndroidAPS heeft de optie om de telefoon (van bijvoorbeeld een kind) op afstand te kunnen bedienen via SMS-berichten. Bedenk wel, dat de telefoon die is ingesteld om externe commando's te geven, kan worden gestolen. Beveilig die telefoon dus goed, met op z'n minst een pincode. Een sterk wachtwoord of biometrische beveiliging is natuurlijk beter, en raden we aan.
* Daarnaast is het aan te raden om een `tweede telefoonnummer toe te voegen <#geautoriseerde-telefoonnummers>`_ voor SMS-opdrachten. Zodat je het tweede nummer kunt gebruiken om de SMS-commando's `tijdelijk uit te schakelen <#andere>`_ voor het geval dat de primaire telefoon verloren of gestolen raakt.
* Nadat jouw externe commando (bijv. bolus geven, profiel aanpassen) is uitgevoerd, zal AndroidAPS een bevestigings-SMS sturen. Het wordt aangeraden om ten minste 2 telefoonnummers te koppelen in de SMS communicator instellingen. Mocht één van de gekoppelde telefoons worden gestolen, dan zul je deze bevestigings-SMS'jes evengoed nog op het tweede telefoonnummer binnenkrijgen.
* **Als je bolus via SMS commando's gebruikt, moet je koolhydraten invoeren via Nightscout (NSClient, Website...)!** Als je dit niet doet, dan zou IOB correct zijn met te weinig COB waardoor de correctie bolus mogelijk niet zal worden uitgevoerd, aangezien AAPS ervan uitgaat dat je al te veel actieve insuline hebt.
* Vanaf AndroidAPS versie 2.7 moet een authenticator app met een op tijd gebaseerd eenmalig wachtwoord worden gebruikt, dit voor een verbeterde veiligheid bij het gebruik van SMS-commando's.

Instellen van SMS-commando's
==================================================

.. image:: ../images/SMSCommandsSetup.png
  :alt: SMS Commando's Instellen
      
* De meeste aanpassingen zoals tijdelijke streefdoelen, AAPS volgen etc. kunnen gedaan worden via de `NSclient-app <../Children/Children.html>`_ op een Android-telefoon met een internetverbinding.
* Bolussen kunnen niet worden gegeven via Nightscout, hiervoor kun je wel SMS-opdrachten gebruiken.
* Wanneer je als volger een iPhone gebruikt en dus geen NSClient app op je telefoon kunt zetten, dan kun je ter vervanging van veel NSClient functies, SMS-commando's gebruiken.

* Ga bij een Android telefoon bij instellingen naar Applicaties > AndroidAPS > Machtigingen en schakel SMS in

Geautoriseerde telefoonnummers
-------------------------------------------------
* Ga in AndroidAPS naar Configurator > SMS Commando's en voer de telefoonnummer(s) in waar je SMS-commando's van wilt ontvangen (gescheiden door puntkomma's en ZONDER spatie's) - d.w.z. +612345678;+612345679) 
* Zet 'Sta SMS commando's toe' aan.
* Als je meer dan één nummer wilt gebruiken:

  * Voer slechts één nummer in.
  * Zorg dat dat enkele nummer werkt door het verzenden en het bevestigen van een SMS-commando.
  * Geef extra nummer(s) op, gescheiden door puntkomma, geen spatie.
  
    .. image:: ../images/SMSCommandsSetupSpace2.png
      :alt: SMS-commando's instellen van meerdere nummers

Minuten tussen bolus opdrachten
-------------------------------------------------
* Je kunt de minimale vertraging definiëren tussen twee bolussen afgegeven via SMS.
* Om veiligheidsredenen moet je ten minste twee geautoriseerde telefoonnummers toevoegen om deze waarde te kunnen veranderen.

Extra verplichte PIN aan einde van token
-------------------------------------------------
* Om veiligheidsredenen moet de antwoordcode worden gevolgd door een PIN code.
* PIN code regels:

   * 3 tot 6 cijfers
   * niet dezelfde cijfers (d.w.z. 1111)
   * niet op een rij (d.w.z. 1234)

Authentificatie instellingen
-------------------------------------------------
* Tweestapsverificatie wordt gebruikt om de veiligheid te verbeteren.
* Je kunt elke Authenticator-app gebruiken die RFC 6238 TOTP-tokens ondersteunt. Populaire gratis apps zijn:

   * `Authy <https://authy.com/download/>`_
   * Google Authenticator - `Android <https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2>`_ / `iOS <https://apps.apple.com/de/app/google-authenticator/id388497605>`_
   * `LastPass Authenticator <https://lastpass.com/auth/>`_
   * `FreeOTP Authenticator <https://freeotp.github.io/>`_

* Installeer de door jou gekozen authenticator app op jouw volger telefoon en scan de QR-code in AAPS.
* Test het eenmalige wachtwoord door de token in te voeren die getoond wordt in de authenticator app en de pincode die je zojuist hebt ingesteld in AAPS. Voorbeeld:

   * Je verplichte PIN code is 2020
   * TOTP-token van de authenticatie-app is 457051
   * Voer 4570512020 in
   
* De rode tekst "WRONG PIN" zal **automatisch** veranderen in een groene "OK" als de invoer juist is. **Er is geen knop waarop je kunt drukken!**
* De tijd op beide telefoons moet gesynchroniseerd zijn. De beste manier hiervoor is om te kiezen voor automatische tijdsingstellingen ingesteld vanuit het netwerk. Tijdverschillen kunnen leiden tot authentificatieproblemen.
* Gebruik de knop "HERSTEL AUTHENTICATORS" als je eerder aangemaakte authenticatoren wilt verwijderen.  (Bij het verwijderen van de authenticator maak je ALLE reeds geconfigureerde authenticators ongeldig. Je moet ze daarna opnieuw instellen)

SMS-commando's gebruiken
==================================================
* Stuur een SMS naar de telefoon met AndroidAPS die draait vanaf je goedgekeurde telefoonnummer(s) met behulp van een van de `commando's<../Children/SMS-Commands.html#commandos>`_ hieronder. 
* De AAPS telefoon zal bevestigen dat de opgevraagde opdracht is uitgevoerd of dat de status succesvol is aangevraagd. 
* Bevestig de opdracht door de code indien nodig te verzenden. Voorbeeld:

   * Je verplichte PIN code is 2020
   * TOTP-token van de authenticatie-app is 457051
   * Voer 4570512020 in

**Hint**: Het kan verstandig zijn om een abbonnement met onbeperkte SMS te hebben voor beide telefoons omdat er veel SMS'jes gestuurd zullen worden.

Commando‘s
==================================================
Opdrachten moeten in het Engels worden verzonden, de respons zal in jouw lokale taal zijn als de antwoordzin al is `vertaald <../translations.html#translate-strings-for-androidaps-app>`_.

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
      * Onderbroken (10 min)
* LOOP SUSPEND 20
   * Reactie: Loop wordt onderbroken gedurende 20 minuten (Loop suspended for 20 minutes)
* LOOP RESUME
   * Reactie: Loop hervat (resumed)

CGM gegevens
--------------------------------------------------
* BG
   * Laatste BG: 5,6 4min geleden, Verschil:-0,2 mmol, IOB: 0,20E (Bolus: 0,10E Basaal: 0,10E)
* CAL 5.6
   * Reactie: Om calibratie 5.6 te verzenden antwoord met de code van Authenticator app voor gebruiker gevolgd door PIN
   * Reactie na correcte code ontvangen: Calibration verzonden (**Als xDrip is geïnstalleerd. In de xDrip+ instellingen moet je aangevinkt hebben dat kalibraties van volgers geaccepteerd worden**)

Basaal
--------------------------------------------------
* BASAL STOP/CANCEL
   * Reactie: Om het tijdelijke basaal te stoppen antwoord met de code van Authenticator app voor gebruiker gevolgd door PIN
* BASAL 0.3
   * Reactie: Om een basaal van 0.3E/u gedurende 30 min te starten antwoord met code van Authenticator app voor gebruiker gevolgd door PIN
* BASAL 0.3 20
   * Reactie: Om een basaal van 0.3E/u gedurende 20 min te starten antwoord met code van Authenticator app voor gebruiker gevolgd door PIN
* BASAL 30%
   * Reactie: Om een basaal van 30% gedurende 30 min te starten antwoord met code van Authenticator app voor gebruiker gevolgd door PIN
* BASAL 30% 50
   * Reactie: Om een basaal van 30% gedurende 50 min te starten antwoord met code van Authenticator app voor gebruiker gevolgd door PIN

Bolus
--------------------------------------------------
Bolus op afstand is niet toegestaan binnen 15 min (deze waarde is alleen aan te passenn als 2 telefoonnummers zijn toegevoegd) na laatste bolus opdracht of extern commando! Daarom is de respons afhankelijk van de tijd sinds de laatste bolus werd gegeven.

* BOLUS 1.2
   * Reactie A: Om een bolus van 1.2E te geven antwoord met code van Authenticator app voor gebruiker gevolgd door PIN
   * Reactie B: Externe bolus niet beschikbaar. Probeer het later opnieuw.
* BOLUS 0.60 MEAL
   * Als je de optionele parameter MEAL opgeeft, dan wordt het tijdelijke streefdoel "eet binnenkort" ingesteld (standaard waarden zijn: 90 mg/dL, 5.0 mmol/l voor 45 min).
   * Reactie A: Om een maaltijd bolus van 0.60E te geven antwoord met code van Authenticator app voor gebruiker gevolgd door PIN
   * Reactie B: Externe bolus niet beschikbaar. 
* CARBS 5
   * Reactie: Om 5g in te voeren om 12:45 antwoord met code van Authenticator app voor gebruiker gevolgd door PIN
* CARBS 5 17:35/5:35PM
   * Reactie: Om 5g in te voeren om 17:35 antwoord met code van Authenticator app voor gebruiker gevolgd door PIN
* EXTENDED STOP/CANCEL
   * Reactie: Om de vertraagde bolus te stoppen antwoord met de code van de Authenticator app voor de gebruiker gevolgd door PIN
* EXTENDED 2 120
   * Reactie: Om vertraagde bolus 2E gedurende 120 min te starten antwoord met code van Authenticator app voor gebruiker gevolgd door PIN

Profiel
--------------------------------------------------
* PROFILE STATUS
   * Reactie: Profiel1
* PROFILE LIST
   * Reactie: 1.`Profiiel1` 2.`Profiel2`
* PROFILE 1
   * Reactie: Om naar profiel Profile1 100% te wisselen antwoord met code van Authenticator app voor gebruiker gevolgd door PIN
* PROFILE 2 30
   * Reactie: Om naar profiel Profile2 30% te wisselen antwoord met code van Authenticator app voor gebruiker gevolgd door PIN

Andere
--------------------------------------------------
* TREATMENTS REFRESH
   * Reactie: Haal behandelingen op van NS
* NSCLIENT RESTART
   * Reactie: NSCLIENT RESTART 1 ontvangers
* PUMP
   * Reactie: Laatste Verbinding: 1 min geleden Temp: 0,00E/uur @11:38 5/30min IOB: 0,5E Reservoir: 34E Batterij: 100
* PUMP CONNECT
   * Reactie: Pomp opnieuw verbonden
* PUMP DISCONNECT *30*
   * Reactie: Om de pomp te ontkoppelen gedurende *30* minuten antwoord met code van Authenticator app voor gebruiker gevolgd door PIN
* SMS DISABLE/STOP
   * Reactie: Om de SMS Remote Service uit te schakelen, antwoord met code Any. Houd er rekening mee dat je het gebruik van SMS commando's alleen direct vanaf de AAPS master smartphone kunt heractiveren.
* TARGET MEAL/ACTIVITY/HYPO   
   * Reactie: Om tijdelijk streefdoel MEAL/ACTIVITY/HYPO in te stellen antwoord in met code van Authenticator app voor gebruiker gevolgd door PIN
* TARGET STOP/CANCEL   
   * Reactie: Om tijdelijk streefdoel te annuleren antwoord met code van Authenticator app voor gebruiker gevolgd door PIN
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
