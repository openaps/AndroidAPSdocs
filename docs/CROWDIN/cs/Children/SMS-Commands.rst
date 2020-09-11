SMS příkazy
**************************************************
Bezpečnost především
==================================================
* AndroidAPS vám umožňuje kontrolovat telefon vašeho dítěte na dálku prostřednictvím textových zpráv. Pokud povolíte SMS komunikátor, vždy pamatujte na to, že telefon nastavený k vydávání vzdálených příkazů, může být ukraden. Proto vždy chraňte telefon alespoň pomocí kódu PIN.
* Systém AndroidAPS vás rovněž bude informovat textovou zprávou o tom, jestli váš vzdálený příkaz, např. bolus nebo změna profilu, byl proveden. Je proto vhodné nastavit, aby byly potvrzovací zprávy odesílány alespoň na dvě různá telefonní čísla pro případ, že by došlo ke zcizení jednoho z rodičovských telefonů.
* **Pokud jste zadali bolus prostřednictvím SMS příkazů, musíte přes Nightscout (NSClient, webovou stránku...) zadat odpovídající množství sacharidů!** Jestliže to neuděláte, bude IOB kalkulováno oproti nízkému COB. Případný korekční bolus pak nemusí být vydán, protože AAPS předpokládá, že máte příliš mnoho aktivního inzulínu.

Jak to funguje
==================================================
* Většinu úprav dočasných cílů, se kterými pracuje AAPS apod., můžete provést přes `aplikaci NSclient <../Children/Children.html>`_ na telefonu připojenému k internetu.
* Bolusy přes Nightscout nepošlete. Můžete to ale provést pomocí SMS příkazů.
* Používáte-li ke sledování iPhone, nemůžete použít NSclient. Pak máte k dispozici pouze SMS příkazy.

* Ve vašem Android telefonu přejděte do jeho systémového nastavení, následně do Aplikace > AndroidAPS > Oprávnění a povolte SMS
* V AndroidAPS jděte do Nastavení > SMS komunikátor, a zadejte telefonní číslo(a), ze kterých umožníte přijímat SMS příkazy (oddělené středníkem – např. +420123456788;+420123456789), a také povolte 'Povolit vzdálené příkazy přes SMS'.
* Chcete-li nastavit více než jedno číslo:

  * Zadejte pouze jedno číslo.
  * Ujistěte se, že první číslo funguje - zasláním SMS příkazu a jeho potvrzením.
  * Přidejte další číslo(a) oddělené středníkem, bez mezery.
  
    .. image:: ../images/SMSCommandsSetupSpace.png
      :alt: Nastavení SMS příkazů


* Z některého z povolených čísel odešlete SMS zprávu na telefon s běžícím AndroidAPS a do zprávy zadejte některý z níže tučně zapsaných příkazů. Telefon vám odpoví, aby potvrdil úspěšné provedení daného příkazu nebo vrátí požadované stavové informace. V případě potřeby potvrďte příkaz odesláním kódu, který poskytne telefon s AndroidAPS.

**Tip: Jestliže budete posílat větší množství SMS, je výhodné mít na obou mobilech SMS paušál.

Příkazy
==================================================

Při odesílání příkazů nezáleží na velikosti písmen.

Příkazy musí být odeslány v angličtině. Pokud je řetězec odpovědi `přeložen <../translations.html#translate-řetězce-pro-androidaps-app> ` _, bude odpověď ve vašem jazyce.

.. image:: ../images/SMSCommands.png
  :alt: příklad SMS příkazu

Smyčka
--------------------------------------------------
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
--------------------------------------------------
* BG
   * Odpověď: poslední BG: 5.6 před 4min Delta: -0,2 mmol, IOB: 0.20U (Bolus: 0.10U Bazál: 0.10U)
* CAL 5.6
   * Odpověď: Pro odeslání kalibrace 5.6 odpovězte pomocí SMS s kódem Rrt
   * Odpověď po přijetí správného potvrzovacího kódu: Kalibrace odeslána (*je-li instalovaný xDrip. V xDrip+ musí být povolen příjem kalibrací**)

Bazál
--------------------------------------------------
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
--------------------------------------------------
V případě, že jsou nastavena 2 telefonní čísla, není do 15 minut od poslání předchozího bolusu nebo vzdáleného příkazu povolen další bolus! Odpověď závisí na době, která uplynula od posledního podání bolusu.

* BOLUS 1.2
   * Odpověď A: Pro poslání bolusu 1.2U odpovězte pomocí SMS s kódem Rrt
   * Odpověď B: Vzdálený bolus není k dispozici. Zkuste to později.
* BOLUS 0.60 MEAL
   * Zadáte-li volitelný parametr MEAL, nastaví se dočasný cíl PŘED JÍDLEM (výchozí hodnoty jsou: 90 mg/dL, 5,0 mmol/l na 45 minut).
   * Odpověď A: Pro poslání bolusu na jídlo 0.60U odpovězte pomocí SMS s kódem Rrt
   * Odpověď B: Vzdálený bolus není k dispozici. 
* CARBS 5
   * Odpověď: Chcete-li zadat 5g v 12:45 odpovězte pomocí SMS s kódem EmF
* CARBS 5 17:35/5:35PM
   * Odpověď: Chcete-li zadat 5g v 17:35, odpovězte pomocí SMS s kódem EmF
* EXTENDED STOP/CANCEL
   * Odpověď: Pro zastavení prodlouženého bolusu odpovězte pomocí SMS s kódem EmF
* EXTENDED 2 120
   * Odpověď: Pro spuštění prodlouženého bolusu 2 U na 120 min odpovězte pomocí SMS s kódem EmF

Profil
--------------------------------------------------
* PROFILE STATUS
   *Odpověď: Profile1
* PROFILE LIST
   * Odpověď : 1.`Profile1` 2.`Profile2`
* PROFILE 1
   * Odpověď: Pro přepnutí profilu na Profile1 100% odpovězte pomocí SMS s kódem Any
* PROFILE 2 30
   * Odpověď: Pro přepnutí profilu na Profile2 30% odpovězte pomocí SMS s kódem Any

Jiné
--------------------------------------------------
* TREATMENTS REFRESH
   * Odpověď: Obnovit ošetření z NS
* NSCLIENT RESTART
   * Odpověď: NSCLIENT RESTART 1 příjemce
* PUMP
   * Odpověď: Posl. spojení: 1 min zpět Doč. bazál: 0.00U/h @11:38 5/30min IOB: 0.5U Zás: 34U Baterie: 100
* SMS DISABLE/STOP
   * Odpověď: Pro vypnutí vzdálené SMS služby odpovězte pomocí SMS s kódem Any. Mějte na paměti, že ji budete moci opětovně reaktivovat pouze z hlavního smartphonu s AAPS.
* TARGET MEAL/ACTIVITY/HYPO   
   * Odpověď: Chcete-li nastavit Dočasný cíl JÍDLO/AKTIVITA/HYPO , odpovězte pomocí SMS s kódem Any
TARGET STOP/CANCEL   
   * Odpověď: Pro zrušení dočasného cíle odpovězte pomocí SMS s kódem Any
* HELP
   * Odpověď: BG, LOOP, TREATMENTS, .....
* HELP BOLUS
   * Odpověď: BOLUS 1.2 BOLUS 1.2 MEAL

Poradce při potížích
==================================================
Duplicitní SMS
--------------------------------------------------
Obdržíte-li stejnou zprávu znovu a znovu (např. přepnutí profilu), je pravděpodobné, že se jedná o zacyklení s jinými aplikacemi. Například xDrip+. Pokud je to tak, ujistěte se prosím, že xDrip+ (nebo jakákoliv jiná aplikace) nenahrává ošetření do NS. 

Je-li tato druhá aplikace nainstalovaná na více telefonech, deaktivujte upload u všech instancí.

Nefunkční SMS příkazy na telefonech Samsung
--------------------------------------------------
Po aktualizaci telefonu Galaxy S10 bylo hlášeno, že SMS příkazy přestaly fungovat. Lze to vyřešit vypnutím možnosti „odeslání zprávy jako konverzace“.

.. image:: ../images/SMSdisableChat.png
  :alt: Zakázat odesílání SMS jako konverzace
