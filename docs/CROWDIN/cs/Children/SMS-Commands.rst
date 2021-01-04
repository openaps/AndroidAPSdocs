SMS příkazy
**************************************************
Bezpečnost především
==================================================
* AndroidAPS vám umožňuje kontrolovat telefon vašeho dítěte na dálku prostřednictvím textových zpráv. Pokud povolíte SMS komunikátor, vždy pamatujte na to, že telefon nastavený k vydávání vzdálených příkazů, může být ukraden. Proto vždy chraňte telefon alespoň pomocí kódu PIN. Doporučuje se zvolit si silné heslo nebo biometrické údaje.
* Navíc se pro SMS příkazy doporučuje povolit `druhé telefonní číslo <#autorized-phone-numbers>`_. Pokud dojde ke ztrátě nebo ukradení mobilu, můžete z druhého čísla `dočasně vypnout <#other>`_ SMS komunikátor.
* Systém AndroidAPS vás rovněž bude informovat textovou zprávou o tom, jestli váš vzdálený příkaz, např. bolus nebo změna profilu, byl proveden. Je proto vhodné nastavit, aby byly potvrzovací zprávy odesílány alespoň na dvě různá telefonní čísla pro případ, že by došlo ke zcizení jednoho z rodičovských telefonů.
* **Pokud jste zadali bolus prostřednictvím SMS příkazů, musíte přes Nightscout (NSClient, webovou stránku...) zadat odpovídající množství sacharidů!** Jestliže to neuděláte, bude IOB kalkulováno oproti nízkému COB. Případný korekční bolus pak nemusí být vydán, protože AAPS předpokládá, že máte příliš mnoho aktivního inzulínu.
* Od AndroidAPS verze 2.7 musí být kvůli zvýšení bezpečnosti při posílání SMS použita autentizační aplikace s časově omezeným jednorázovým heslem.

Nastavení SMS příkazů
==================================================

.. image:: ../images/SMSCommandsSetup.png
  :alt: Nastavení SMS příkazů
      
* Většinu úprav dočasných cílů, se kterými pracuje AAPS apod., můžete provést přes `aplikaci NSClient <../Children/Children.html>`_ na telefonu s Androidem připojenému k internetu.
* Bolusy přes Nightscout nepošlete. Můžete to ale provést pomocí SMS příkazů.
* Používáte-li ke sledování iPhone, nemůžete použít NSClient. Pak máte k dispozici pouze SMS příkazy.

* Ve vašem Android telefonu přejděte do jeho systémového nastavení, následně do Aplikace > AndroidAPS > Oprávnění a povolte SMS

Schválená telefonní čísla
-------------------------------------------------
* V AndroidAPS přejděte do **Nastavení > SMS komunikátor** a zadejte telefonní číslo(a), ze kterých umožníte přijímat SMS příkazy (oddělené středníkem – např. +6412345678;+6412345679) 
* Povolte možnost 'Povolit posílání příkazů přes SMS'.
* Chcete-li nastavit více než jedno číslo:

  * Zadejte pouze jedno číslo.
  * Ujistěte se, že první číslo funguje - zasláním SMS příkazu a jeho potvrzením.
  * Přidejte další číslo(a) oddělené středníkem, bez mezery.
  
    .. image:: ../images/SMSCommandsSetupSpace2.png
      :alt: SMS příkazy - nastavení více čísel

Minut mezi příkazy pro bolus
-------------------------------------------------
* Můžete nastavit minimální dobu, která musí uběhnout mezi dvěma po sobě jdoucími příkazy k poslání bolusu přes SMS.
* Z bezpečnostních důvodů musíte k úpravě této hodnoty přidat alespoň dvě autorizovaná telefonní čísla.

Dodatečný povinný kód PIN na konci tokenu
-------------------------------------------------
* Z bezpečnostních důvodů musí být kód odpovědi ukončen kódem PIN.
* Pravidla pro PIN:

   * 3 až 6 číslic
   * nesmí obsahovat stejné číslice (tj. 1111)
   * nesmí obsahovat posloupnost (tj. 1234)

Nastavení Autentikátoru
-------------------------------------------------
* Dvoufaktorové ověření se používá ke zvýšení bezpečnosti.
* Můžete použít libovolnou aplikaci Authenticator, která podporuje tokeny RFC 6238 TOTP. Oblíbené bezplatné aplikace jsou:

   * ` Authy <https://authy.com/download/>` _
   * Google Authenticator - `Android <https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2>`_ / `iOS <https://apps.apple.com/de/app/google-authenticator/id388497605>`_
   * `LastPass Authenticator <https://lastpass.com/auth/>`_
   * `FreeOTP Authenticator <https://freeotp.github.io/>`_

* Do sledovacího mobilu si nainstalujte vybraný autentikátor a naskenujte v něm QR kod, který se zobrazuje v AAPS.
* Otestujte jednorázové heslo zadáním tokenu zobrazeného ve vaší ověřovací aplikaci a kódu PIN, který jste si nastavili v AAPS. Příklad:

   * Váš povinný PIN je 2020
   * TOTP token z autentizační aplikace je 457051
   * Zadejte 4570512020
   
* Je-li zadání správné, změní se **automaticky** červený text "WRONG PIN" na zelené "OK". **Není třeba stisknout žádné tlačítko!**
* Na obou telefonech musí být synchronizovaný čas. Nejlepší způsob je synchronizovat čas automaticky prostřednictvím sítě. Časové rozdíly mohou vést k problémům s ověřováním.
* Chcete-li odebrat všechny autentikátory, stiskněte tlačítko "RESETOVAT AUTENTIKÁTORY".  (resetování autentikátorů způsobíte, že VŠECHNY používané autentikátory budou neplatné. Budete je muset nastavit znovu)

Použití SMS příkazů
==================================================
* Pošlete SMS na telefon s běžícím AndroidAPS ze schváleného telefonního čísla pomocí některého z `příkazů <../Children/SMS-Commands.html#commands>`_ níže. 
* Mobil s AAPS odpoví pro potvrzení požadovaného stavu nebo příkazu. 
* Pokud je to požadováno, potvrďte příkaz odesláním kódu. Příklad:

   * Váš povinný PIN je 2020
   * TOTP token z autentizační aplikace je 457051
   * Zadejte 4570512020

**Tip: Jestliže budete posílat větší množství SMS, je výhodné mít na obou mobilech SMS paušál.

Příkazy
==================================================
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
   * Response: To send calibration 5.6 reply with code from Authenticator app for User followed by PIN
   * Odpověď po přijetí správného potvrzovacího kódu: Kalibrace odeslána (*je-li instalovaný xDrip. V xDrip+ musí být povolen příjem kalibrací**)

Bazál
--------------------------------------------------
* BASAL STOP/CANCEL
   * Response: To stop temp basal reply with code from Authenticator app for User followed by PIN
* BASAL 0.3
   * Response: To start basal 0.3U/h for 30 min reply with code from Authenticator app for User followed by PIN
* BASAL 0.3 20
   * Response: To start basal 0.3U/h for 20 min reply with code from Authenticator app for User followed by PIN
* BASAL 30%
   * Response: To start basal 30% for 30 min reply with code from Authenticator app for User followed by PIN
* BASAL 30% 50
   * Response: To start basal 30% for 50 min reply with code from Authenticator app for User followed by PIN

Bolus
--------------------------------------------------
Remote bolus is not allowed within 15 min (this value is editable only if 2 phone numbers added) after last bolus command or remote commands! Therefore the response depends on the time that the last bolus was given.

* BOLUS 1.2
   * Response A: To deliver bolus 1.2U reply with code from Authenticator app for User followed by PIN
   * Odpověď B: Vzdálený bolus není k dispozici. Zkuste to později.
* BOLUS 0.60 MEAL
   * Zadáte-li volitelný parametr MEAL, nastaví se dočasný cíl PŘED JÍDLEM (výchozí hodnoty jsou: 90 mg/dL, 5,0 mmol/l na 45 minut).
   * Response A: To deliver meal bolus 0.60U reply with code from Authenticator app for User followed by PIN
   * Odpověď B: Vzdálený bolus není k dispozici. 
* CARBS 5
   * Response: To enter 5g at 12:45 reply with code from Authenticator app for User followed by PIN
* CARBS 5 17:35/5:35PM
   * Response: To enter 5g at 17:35 reply with code from Authenticator app for User followed by PIN
* EXTENDED STOP/CANCEL
   * Response: To stop extended bolus reply with code from Authenticator app for User followed by PIN
* EXTENDED 2 120
   * Response: To start extended bolus 2U for 120 min reply with code from Authenticator app for User followed by PIN

Profil
--------------------------------------------------
* PROFILE STATUS
   *Odpověď: Profile1
* PROFILE LIST
   * Odpověď : 1.`Profile1` 2.`Profile2`
* PROFILE 1
   * Response: To switch profile to Profile1 100% reply with code from Authenticator app for User followed by PIN
* PROFILE 2 30
   * Response: To switch profile to Profile2 30% reply with code from Authenticator app for User followed by PIN

Jiné
--------------------------------------------------
* TREATMENTS REFRESH
   * Odpověď: Obnovit ošetření z NS
* NSCLIENT RESTART
   * Odpověď: NSCLIENT RESTART 1 příjemce
* PUMP
   * Response: Last conn: 1 min ago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100
* PUMP CONNECT
   * Response: Pump reconnected
* PUMP DISCONNECT *30*
   * Response: To disconnect pump for *30* minutes reply with code from Authenticator app for User followed by PIN
* SMS DISABLE/STOP
   * Odpověď: Pro vypnutí vzdálené SMS služby odpovězte pomocí SMS s kódem Any. Mějte na paměti, že ji budete moci opětovně reaktivovat pouze z hlavního smartphonu s AAPS.
* TARGET MEAL/ACTIVITY/HYPO   
   * Response: To set the Temp Target MEAL/ACTIVITY/HYPO reply with code from Authenticator app for User followed by PIN
TARGET STOP/CANCEL   
   * Response: To cancel Temp Target reply with code from Authenticator app for User followed by PIN
* HELP
   * Odpověď: BG, LOOP, TREATMENTS, .....
* HELP BOLUS
   * Odpověď: BOLUS 1.2 BOLUS 1.2 MEAL

Poradce při potížích
==================================================
Duplicitní SMS
--------------------------------------------------
Obdržíte-li stejnou zprávu znovu a znovu (např. přepnutí profilu), je pravděpodobné, že se jedná o zacyklení s jinými aplikacemi. Například xDrip+. If so, please make sure that xDrip+ (or any other app) does not upload treatments to NS. 

If the other app is installed on multiple phones make sure to deactivate upload on all of them.

Nefunkční SMS příkazy na telefonech Samsung
--------------------------------------------------
Po aktualizaci telefonu Galaxy S10 bylo hlášeno, že SMS příkazy přestaly fungovat. Could be solved by disabling 'send as chat message'.

.. image:: ../images/SMSdisableChat.png
  :alt: Zakázat odesílání SMS jako konverzace
