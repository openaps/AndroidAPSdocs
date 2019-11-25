SMS příkazy
*****
Bezpečnost především
======
* AndroidAPS vám umožňuje kontrolovat telefon vašeho dítěte na dálku prostřednictvím textových zpráv. Pokud povolíte SMS komunikátor, vždy pamatujte na to, že telefon nastavený k vydávání vzdálených příkazů, může být ukraden. Proto vždy chraňte telefon alespoň pomocí kódu PIN.
* Systém AndroidAPS vás rovněž bude informovat textovou zprávou o tom, jestli váš vzdálený příkaz, např. bolus nebo změna profilu, byl proveden. Je proto vhodné nastavit, aby byly potvrzovací zprávy odesílány alespoň na dvě různá telefonní čísla pro případ, že by došlo ke zcizení jednoho z rodičovských telefonů.
* **Pokud jste zadali bolus prostřednictvím SMS příkazů, musíte přes Nightscout (NSClient, webovou stránku...) zadat odpovídající množství sacharidů!** Jestliže to neuděláte, bude IOB kalkulováno oproti nízkému COB. Případný korekční bolus pak nemusí být vydán, protože AAPS předpokládá, že máte příliš mnoho aktivního inzulínu.

Jak to funguje
=====
* Většinu úprav dočasných cílů, se kterými pracuje AAPS apod., můžete provést přes `aplikaci NSclient <../Children/Children.html>`_ na telefonu připojenému k internetu.
* Bolusy přes Nightscout nepošlete. Můžete to ale provést pomocí SMS příkazů.
* Používáte-li ke sledování iPhone, nemůžete použít NSclient. Pak máte k dispozici pouze SMS příkazy.

* Ve vašem Android telefonu přejděte do jeho systémového nastavení, následně do Aplikace > AndroidAPS > Oprávnění a povolte SMS
* In AndroidAPS go to Preferences > SMS Communicator and enter the phone number(s) that you will allow SMS commands to come from (separated by semicolons - i.e. +4412345678;+4412345679) and also enable 'Allow remote commands via SMS'.
* Chcete-li nastavit více než jedno číslo:

  * Zadejte pouze jedno číslo.
  * Make that single number work by sending and confirming a SMS command.
  * Enter additional number(s) separated by semicolon, no space.
  
    .. image:: ../images/SMSCommandsSetupSpace.png
      :alt: SMS Commands Setup


* Z některého z povolených čísel odešlete SMS zprávu na telefon s běžícím AndroidAPS a do zprávy zadejte některý z níže tučně zapsaných příkazů. Telefon vám odpoví, aby potvrdil úspěšné provedení daného příkazu nebo vrátí požadované stavové informace. V případě potřeby potvrďte příkaz odesláním kódu, který poskytne telefon s AndroidAPS.

**Tip: Jestliže budete posílat větší množství SMS, je výhodné mít na obou mobilech SMS paušál.

Příkazy
=====

Při odesílání příkazů nezáleží na velikosti písmen.

Příkazy musí být odeslány v angličtině. Pokud je řetězec odpovědi `přeložen <../translations.html#translate-řetězce-pro-androidaps-app> ` _, bude odpověď ve vašem jazyce.

.. image:: ../images/SMSCommands.png
  :alt: SMS Commands Example

Smyčka
-----
* LOOP STOP/DISABLE
   * Odpověď: Smyčka byla zakázána
* LOOP START/ENABLE
   * Odpověď: Smyčka byla povolena
* LOOP STATUS
   * Odpověď záleží na aktuálním stavu
      * Smyčka je zakázána
      * Smyčka je povolena
      * Pozastavena (10 minut)
* LOOP SUSPEND 20
   * Odpověď: Smyčka pozastavena na 20 minut
* LOOP RESUME
   * Odpověď: Smyčka obnovena

CGM data
-----
* Glykémie
   * Odpověď: poslední BG: 5.6 před 4min Delta: -0,2 mmol, IOB: 0.20U (Bolus: 0.10U Bazál: 0.10U)
* CAL 5.6
   * Odpověď: Pro odeslání kalibrace 5.6 odpovězte pomocí SMS s kódem Rrt
   * Odpověď po přijetí správného potvrzovacího kódu: Kalibrace odeslána (*je-li instalovaný xDrip. V xDrip+ musí být povolen příjem kalibrací**)

Bazál
-----
* BASAL STOP/CANCEL
   * Odpověď: Pro zastavení dočasného bazálu odpovězte pomocí SMS s kódem EmF [Poznámka: Kód EmF je pouze příklad]
* BASAL 0.3
   * Odpověď: Pro spuštění dočasného bazálu 0.3U/h odpovězte pomocí SMS s kódem Swe
* BASAL 0.3 20
   * Odpověď: Pro spuštění dočasného bazálu 0.3U/h na 20 min odpovězte pomocí SMS s kódem Swe
* BASAL 30%
   * Odpověď: Pro spuštění dočasného bazálu 30% odpovězte pomocí SMS s kódem Swe
* BASAL 30% 50
   * Odpověď: Pro spuštění dočasného bazálu 30% na 50 min odpovězte pomocí SMS s kódem Swe

Bolus
-----
Remote bolus not allowed within 15 min -value editable only if 2 phone numbers added- after last bolus command or remote commands! Therefore response depends on time last bolus was given.

* BOLUS 1.2
   * Response A: To deliver bolus 1.2U reply with code Rrt
   * Response B: Remote bolus not available. Zkuste to později.
* BOLUS 0.60 MEAL
   * If you specify the optional parameter MEAL, this sets the Temp Target MEAL (default values are: 90 mg/dL, 5.0 mmol/l for 45 mins).
   * Response A: To deliver meal bolus 0.60U reply with code Rrt
   * Response B: Remote bolus not available. 
* CARBS 5
   * Response: To enter 5g at 12:45 reply with code EmF
* CARBS 5 17:35/5:35PM
   * Response: To enter 5g at 17:35 reply with code EmF
* EXTENDED STOP/CANCEL
   * Odpověď: Pro zastavení prodlouženého bolusu odpovězte pomocí SMS s kódem EmF
* EXTENDED 2 120
   * Odpověď: Pro spuštění prodlouženého bolusu 2 U na 120 min odpovězte pomocí SMS s kódem EmF

Profil
-----
* PROFILE STATUS
   *Odpověď: Profile1
* PROFILE LIST
   * Odpověď : 1.`Profile1` 2.`Profile2`
* PROFILE 1
   * Odpověď: Pro přepnutí profilu na Profile1 100% odpovězte pomocí SMS s kódem Any
* PROFILE 2 30
   * Odpověď: Pro přepnutí profilu na Profile2 30% odpovězte pomocí SMS s kódem Any

Jiné
-----
* TREATMENTS REFRESH
   * Odpověď: Obnovit ošetření z NS
* NSCLIENT RESTART
   * Odpověď: NSCLIENT RESTART 1 příjemce
* PUMP
   * Odpověď: Posl. spojení: 1 min zpět Doč. bazál: 0.00U/h @11:38 5/30min IOB: 0.5U Zás: 34U Baterie: 100
* SMS DISABLE/STOP
   * Response: To disable the SMS Remote Service reply with code Any. Keep in mind that you'll able to reactivate it directly from the AAPS master smartphone only.
* TARGET MEAL/ACTIVITY/HYPO   
   * Response: To set the Temp Target MEAL/ACTIVITY/HYPO reply with code Any
* TARGET STOP/CANCEL   
   * Response: To cancel Temp Target reply with code Any
* HELP
   * Response: BG, LOOP, TREATMENTS, .....
* HELP BOLUS
   * Response: BOLUS 1.2 BOLUS 1.2 MEAL

Poradce při potížích
=====
Po aktualizaci telefonu Galaxy S10 bylo hlášeno, že SMS příkazy přestaly fungovat. Lze to vyřešit vypnutím možnosti „odeslání zprávy jako konverzace“.

.. image:: ../images/SMSdisableChat.png
  :alt: Zakázat odesílání SMS jako konverzace
