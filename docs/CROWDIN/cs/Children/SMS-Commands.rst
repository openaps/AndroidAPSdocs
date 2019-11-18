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
* V AndroidAPS jděte do Nastavení > SMS komunikátor a zadejte telefonní číslo(a), ze kterých umožníte přijímat SMS příkazy (oddělené středníkem a jedinou mezerou za středníkem – např. +420123456788; +420123456789), a také povolte 'Povolit vzdálené příkazy přes SMS'.
* Chcete-li nastavit více než jedno číslo:

  * Zadejte pouze jedno číslo.
  * Make that single number work by sending and confirming a SMS command.
  * Přidejte další čísla oddělená středníkem a jednou mezerou.
  
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
* BOLUS 1.2
   * Odpověď závisí na době, která uplynula od poslední aplikace bolusu
      * Pro poslání bolusu 1.2 U odpovězte pomocí SMS s kódem Rrt
      * Vzdálený bolus není momentálně povolen. Zkuste to později. (**Vzdálený bolus není povolen, pokud neuplynulo 15 minut od posledního bolus příkazu nebo pokud nejsou vzdálené příkazy povoleny!**)
* EXTENDED STOP/CANCEL
   * Response: To stop extended bolus reply with code EmF
* EXTENDED 2 120
   * Response: To start extended bolus 2U for 120 min reply with code EmF

Profil
-----
* PROFILE STATUS
   * Response: Profile1
* PROFILE LIST
   * Response: 1.`Profile1` 2.`Profile2`
* PROFILE 1
   * Response: To switch profile to Profile1 100% reply with code Any
* PROFILE 2 30
   * Response: To switch profile to Profile2 30% reply with code Any

Jiné
-----
* TREATMENTS REFRESH
   * Response: Refresh treatments from NS
* NSCLIENT RESTART
   * Response: NSCLIENT RESTART 1 receivers
* PUMP
   * Response: Last conn: 1 minago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100

Poradce při potížích
=====
There was a report on SMS commands stopping after an update on Galaxy S10 phone. Could be solved by disabeling 'send as chat message'.

.. image:: ../images/SMSdisableChat.png
  :alt: Disable SMS as chat message
