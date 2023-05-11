# SMS příkazy

## Bezpečnost především

- AAPS allows you to control a child's phone remotely via text message. Pokud povolíte SMS komunikátor, vždy pamatujte na to, že telefon nastavený k vydávání vzdálených příkazů, může být ukraden. Proto vždy chraňte telefon alespoň pomocí kódu PIN. Doporučuje se zvolit si silné heslo nebo biometrické údaje.
- Additionally it is recommended to allow a [second phone number](SMS-Commands-authorized-phone-numbers) for SMS commands. So you can use second number to [temporary disable](SMS-Commands-other) SMS communicator in case your main remote phone gets lost or stolen.
- AAPS will also inform you by text message if your remote commands, such as a bolus or a profile change, have been carried out. Je proto vhodné nastavit, aby byly potvrzovací zprávy odesílány alespoň na dvě různá telefonní čísla pro případ, že by došlo ke zcizení jednoho z rodičovských telefonů.
- **If you bolus through SMS Commands you must enter carbs through Nightscout (NSClient, Website...)!** If you fail to do so IOB would be correct with too low COB potentially leading to not performed correction bolus as AAPS assumes that you have too much active insulin.
- As of AAPS version 2.7 an authenticator app with a time-based one-time password must be used to increase safety when using SMS commands.

## Nastavení SMS příkazů

```{image} ../images/SMSCommandsSetup.png
:alt: Nastavení SMS příkazů
```

- Většinu úprav dočasných cílů, se kterými pracuje AAPS apod., můžete provést přes [aplikaci NSClient](../Children/Children.md) na telefonu s Androidem připojenému k internetu.
- Bolusy přes Nightscout nepošlete. Můžete to ale provést pomocí SMS příkazů.
- Používáte-li ke sledování iPhone, nemůžete použít NSClient. Pak máte k dispozici pouze SMS příkazy.
- Ve vašem Android telefonu přejděte do jeho systémového nastavení, následně do Aplikace > AndroidAPS > Oprávnění a povolte SMS

(SMS-Commands-authorized-phone-numbers)=

### Schválená telefonní čísla

- In AAPS go to **Preferences > SMS Communicator** and enter the phone number(s) that you will allow SMS commands to come from (separated by semicolons - i.e. +6412345678;+6412345679)

- Povolte možnost 'Povolit posílání příkazů přes SMS'.

- Chcete-li nastavit více než jedno číslo:

  - Zadejte pouze jedno číslo.

  - Ujistěte se, že první číslo funguje – zasláním SMS příkazu a jeho potvrzením.

  - Přidejte další číslo(a) oddělené středníkem, bez mezery.

    ```{image} ../images/SMSCommandsSetupSpace2.png
    :alt: SMS příkazy – nastavení více čísel
    ```

### Minut mezi příkazy pro bolus

- Můžete nastavit minimální dobu, která musí uběhnout mezi dvěma po sobě jdoucími příkazy k poslání bolusu přes SMS.
- Z bezpečnostních důvodů musíte k úpravě této hodnoty přidat alespoň dvě autorizovaná telefonní čísla.

### Dodatečný povinný kód PIN na konci tokenu

- Z bezpečnostních důvodů musí být kód odpovědi ukončen kódem PIN.

- Pravidla pro PIN:

  - 3 až 6 číslic
  - nesmí obsahovat stejné číslice (tj. 1111)
  - nesmí obsahovat posloupnost (tj. 1234)

### Nastavení Autentikátoru

- Dvoufaktorové ověření se používá ke zvýšení bezpečnosti.

- Můžete použít libovolnou aplikaci Authenticator, která podporuje tokeny RFC 6238 TOTP. Oblíbené bezplatné aplikace jsou:

  - [Authy](https://authy.com/download/)
  - Google Authenticator - [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) / [iOS](https://apps.apple.com/de/app/google-authenticator/id388497605)
  - [LastPass Authenticator](https://lastpass.com/auth/)
  - [FreeOTP Authenticator](https://freeotp.github.io/)

- Do sledovacího mobilu si nainstalujte vybraný autentikátor a naskenujte v něm QR kod, který se zobrazuje v AAPS.

- Otestujte jednorázové heslo zadáním tokenu zobrazeného ve vaší ověřovací aplikaci a kódu PIN, který jste si nastavili v AAPS. Příklad:

  - Váš povinný PIN je 2020
  - TOTP token z autentizační aplikace je 457051
  - Zadejte 4570512020

- The red text "WRONG PIN" will change **automatically** to a green "OK" if the entry is correct. **There is no button you can press!**

- Na obou telefonech musí být synchronizovaný čas. Nejlepší způsob je synchronizovat čas automaticky prostřednictvím sítě. Časové rozdíly mohou vést k problémům s ověřováním.

- Use button "RESET AUTHENTICATORS" if you want to remove provisioned authenticators.  (Resetováním autentikátorů způsobíte, že VŠECHNY používané autentikátory budou neplatné. Budete je muset nastavit znovu.)

## Použití SMS příkazů

- Send a SMS to the phone with AAPS running from your approved phone number(s) using any of the [commands](SMS-Commands-commands) below.

- Mobil s AAPS odpoví pro potvrzení požadovaného stavu nebo příkazu.

- Pokud je to požadováno, potvrďte příkaz odesláním kódu. Příklad:

  - Váš povinný PIN je 2020
  - TOTP token z autentizační aplikace je 457051
  - Zadejte 4570512020

**Tip**:: Jestliže budete posílat větší množství SMS, je výhodné mít na obou mobilech SMS paušál.

(SMS-Commands-commands)=
## Příkazy

Commands must be sent in English, the response will be in your local language if the response string is already [translated](translations-translate-strings-for-AAPS-app).

```{image} ../images/SMSCommands.png
:alt: příklad SMS příkazu
```

### Smyčka

- LOOP STOP/DISABLE \* Odpověď: Smyčka byla zakázána

- LOOP START/ENABLE \* Odpověď: Smyčka byla povolena

- LOOP STATUS

  - Odpověď záleží na aktuálním stavu

    - Smyčka je zakázána
    - Smyčka je povolena
    - Pozastavena (10 minut)

- LOOP SUSPEND 20 \* Odpověď: Smyčka pozastavena na 20 minut

- LOOP RESUME \* Odpověď: Smyčka obnovena

### CGM data

- BG \* Odpověď: poslední BG: 5.6 před 4min Delta: -0,2 mmol, IOB: 0.20U (Bolus: 0.10U Bazál: 0.10U)
- CAL 5.6 \* Response: To send calibration 5.6 reply with code from Authenticator app for User followed by PIN \* Response after correct code was received: Calibration sent (**If xDrip is installed. Příjem kalibrací musí být v xDrip+ povolen.**)

### Bazál

- BASAL STOP/CANCEL \* Odpověď: Pro zastavení dočasného bazálu odpověz pomocí SMS s kódem z aplikace Authenticator pro User následováno kódem PIN
- BASAL 0.3 \* Odpověď: Pro spuštění bazálu 0.3U/h odpověz pomocí SMS s kódem z aplikace Authenticator pro User následováno kódem PIN
- BASAL 0.3 20 \* Odpověď: Pro spuštění bazálu 0.3U/h na 20 min odpověz pomocí SMS s kódem z aplikace Authenticator pro User následováno kódem PIN
- BASAL 30% \* Odpověď: Pro spuštění bazálu 30% na 30 minut odpověz pomocí SMS s kódem z aplikace Authenticator pro User následováno kódem PIN
- BASAL 30% 50 \* Odpověď: Pro spuštění bazálu 30% na 50 minut odpověz pomocí SMS s kódem z aplikace Authenticator pro User následováno kódem PIN

### Bolus

Vzdálený bolus není povolen do 15 minut (tato hodnota je upravitelná pouze v případě, že jsou přidána 2 telefonní čísla) po posledním bolusu nebo vzdálených příkazech! Odpověď závisí na době, která uplynula od posledního podání bolusu.

- BOLUS 1.2 \* Response A: To deliver bolus 1.2U reply with code from Authenticator app for User followed by PIN \* Response B: Remote bolus not available. Zkuste to později.
- BOLUS 0.60 MEAL \* If you specify the optional parameter MEAL, this sets the Temp Target MEAL (default values are: 90 mg/dL, 5.0 mmol/l for 45 mins). \* Response A: To deliver meal bolus 0.60U reply with code from Authenticator app for User followed by PIN \* Response B: Remote bolus not available.
- CARBS 5 \* Odpověď: Pro zapsání 5g v 12:45/5:35PM odpověz pomocí SMS s kódem z aplikace Authenticator pro User následováno kódem PIN
- CARBS 5 17:35/5:35PM \* Odpověď: Pro zapsání 5g v 17:35/5:35PM odpověz pomocí SMS s kódem z aplikace Authenticator pro User následováno kódem PIN
- EXTENDED STOP/CANCEL \* Odpověď: Pro zastaveni rozšířeného bolusu odpověz pomocí SMS s kódem z aplikace Authenticator pro User následováno kódem PIN
- EXTENDED 2 120 \* Odpověď: Pro spuštění prodlouženého bolusu 2U na 120 min odpověz pomocí SMS s kódem z aplikace Authenticator pro User následováno kódem PIN

### Profil

- PROFILE STATUS Odpověď: Profile1
- PROFILE LIST \* Odpověď : 1.\`Profile1\` 2.\`Profile2\`
- PROFILE 1 \* Odpověď: Pro přepnutí profilu na Profil1 100% odpověz pomocí SMS s kódem z aplikace Authenticator pro User následováno kódem PIN
- PROFILE 2 30 \* Odpověď: Pro přepnutí profilu na Profil2 30% odpověz pomocí SMS s kódem z aplikace Authenticator pro User následováno kódem PIN

(SMS-Commands-other)=

### Jiné

- TREATMENTS REFRESH \* Odpověď: Obnovit ošetření z NS
- NSCLIENT RESTART \* Response: NSCLIENT RESTART 1 receivers
- PUMP \* Response: Last conn: 1 min ago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100
- PUMP CONNECT \* Odpověď: Pumpa znovu připojena
- PUMP DISCONNECT *30* \* Odpověď: Pro odpojení pumpy na *30* minut odpověz pomocí SMS s kódem z aplikace Authenticator pro User následováno kódem PIN
- SMS DISABLE/STOP \* Response: To disable the SMS Remote Service reply with code Any. Mějte na paměti, že ji budete moci opětovně reaktivovat pouze z hlavního smartphonu s AAPS.
- TARGET MEAL/ACTIVITY/HYPO \* Odpověď: Pro nastaveni dočasneho cíle PŘED JÍDLEM/AKTIVITA/HYPO odpověz pomocí SMS s kódem z aplikace Authenticator pro User následováno kódem PIN
- TARGET STOP/CANCEL \* Response: To cancel Temp Target reply with code from Authenticator app for User followed by PIN
- HELP \* Response: BG, LOOP, TREATMENTS, .....
- HELP BOLUS \* Response: BOLUS 1.2 BOLUS 1.2 MEAL

(SMS-Commands-troubleshooting)=
## Řešení problémů

### Duplicitní SMS

If you receive the same message over and over again (i.e. profile switch) you will probably have set up a circle with other apps. Například xDrip+. Pokud je to tak, ujistěte se prosím, že xDrip+ (nebo jakákoliv jiná aplikace) nenahrává ošetření do NS.

Je-li tato jiná aplikace nainstalovaná na více telefonech, deaktivujte upload u všech instancí.

### Nefunkční SMS příkazy na telefonech Samsung

Po aktualizaci telefonu Galaxy S10 bylo hlášeno, že SMS příkazy přestaly fungovat. Lze to vyřešit vypnutím možnosti "odesílat zprávy jako konverzace".

```{image} ../images/SMSdisableChat.png
:alt: Zakázat odesílání SMS jako konverzace
```
### Android Messages App

If you are having issues sending or receiving SMS commands with the Android Messages app disable end-to-end ecryption on both caregiver and child's phones.
 - open the specific SMS conversation in Messages
 - Select the options ellipisis in the top right corner
 - select "Details"
 - Activate "Only send SMS and MMS messages"
