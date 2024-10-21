# SMS příkazy

```{admonition} Documentation
:class: note

This section may contain outdated content. Please also see the page [SMS Commands](../RemoteFeatures/RemoteControl.md#1-sms-commands)).

```

## Bezpečnost především
.
- AAPS umožňuje vládat telefon vašeho dítěte na dálku prostřednictvím textových zpráv. Pokud povolíte SMS komunikátor, vždy pamatujte na to, že telefon nastavený k vydávání vzdálených příkazů, může být ukraden. Proto vždy chraňte telefon alespoň pomocí kódu PIN. Doporučuje se zvolit si silné heslo nebo biometrické údaje.
- Additionally it is recommended to allow a [second phone number](../RemoteFeatures/SMSCommands.md#authorized-phone-numbers) for SMS commands. So you can use second number to [temporary disable](../RemoteFeatures/SMSCommands.md#other) SMS communicator in case your main remote phone gets lost or stolen.
- AAPS vás bude textovou zprávou informovat, že byl poslaný příkaz (bolus, změna profilu apod.) úspěšně vykonán. Je proto vhodné nastavit, aby byly potvrzovací zprávy odesílány alespoň na dvě různá telefonní čísla pro případ, že by došlo ke zcizení jednoho z rodičovských telefonů.
- **Pokud jste zadali bolus prostřednictvím SMS příkazů, musíte přes Nightscout (AAPSClient, webovou stránku...) zadat odpovídající množství sacharidů!** Jestliže to neuděláte, bude IOB kalkulováno oproti nízkému COB. Případný korekční bolus pak nemusí být vydán, protože AAPS předpokládá, že máte příliš mnoho aktivního inzulínu.
- Od AAPS verze 2.7 musí být kvůli zvýšení bezpečnosti při posílání SMS použita autentizační aplikace s časově omezeným jednorázovým heslem.

## Nastavení SMS příkazů

![Nastavení SMS příkazů](../images/SMSCommandsSetup.png)

- Most of the adjustments of temp targets, following AAPS etc. can be done on [AAPSClient app](../RemoteFeatures/RemoteMonitoring.md) on an Android phone with an internet connection.
- Bolusy přes Nightscout nepošlete. Můžete to ale provést pomocí SMS příkazů.
- Používáte-li ke sledování iPhone, nemůžete použít AAPSClient. Pak máte k dispozici pouze SMS příkazy.
- Ve vašem Android telefonu přejděte do jeho systémového nastavení, následně do Aplikace > AndroidAPS > Oprávnění a povolte SMS

### Schválená telefonní čísla

- V AAPS přejděte do **Nastavení > SMS komunikátor** a zadejte telefonní číslo (čísla), ze kterých umožníte přijímat příkazy SMS (čísla oddělená středníkem – např. +6412345678;+6412345679)

- Dejte pozor na to, že „+“ před číslem může nebo nemusí být požadováno na základě vaší polohy. Abyste to zjistili, pošlete vzorový text, který se zobrazí v přijatém formátu na kartě SMS komunikátoru.

- Povolte možnost 'Povolit posílání příkazů přes SMS'.

- Chcete-li nastavit více než jedno číslo:

  - Zadejte pouze jedno číslo.

  - Ujistěte se, že první číslo funguje – zasláním SMS příkazu a jeho potvrzením.

  - Přidejte další číslo(a) oddělené středníkem, bez mezery.

    ![SMS příkazy – nastavení více čísel](../images/SMSCommandsSetupSpace2.png)

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

- Je-li zadání správné, změní se **automaticky** červený text „WRONG PIN“ na zelené „OK“. **Není třeba stisknout žádné tlačítko!**

- Na obou telefonech musí být synchronizovaný čas. Nejlepší způsob je synchronizovat čas automaticky prostřednictvím sítě. Časové rozdíly mohou vést k problémům s ověřováním.

- Chcete-li odebrat všechny autentikátory, stiskněte tlačítko „RESETOVAT AUTENTIKÁTORY“.  (Resetováním autentikátorů způsobíte, že VŠECHNY používané autentikátory budou neplatné. Budete je muset nastavit znovu.)

## Použití SMS příkazů

- Send a SMS to the phone with AAPS running from your approved phone number(s) using any of the [commands](#commands) below.

- Mobil s AAPS odpoví pro potvrzení požadovaného stavu nebo příkazu.

- Pokud je to požadováno, potvrďte příkaz odesláním kódu. Příklad:

  - Váš povinný PIN je 2020
  - TOTP token z autentizační aplikace je 457051
  - Zadejte 4570512020

**Tip**:: Jestliže budete posílat větší množství SMS, je výhodné mít na obou mobilech SMS paušál.

## Příkazy

Commands must be sent in English, the response will be in your local language if the response string is already [translated](../SupportingAaps/Translations#translate-strings-for-aaps-app).

![Příklad SMS příkazů](../images/SMSCommands.png)

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

- LOOP CLOSED \* Odpověď: Aktuální stav smyčky: Smyčka uzavřena

- LOOP LGS \* Odpověď: Aktuální stav smyčky: Pozastavení při nízké glykémii

### CGM data

- BG \* Odpověď: poslední BG: 5.6 před 4min Delta: -0,2 mmol, IOB: 0.20U (Bolus: 0.10U Bazál: 0.10U)
- CAL 5.6 \* Odpověď: Pro odeslání kalibrace 5.6 odpověz kódem z aplikace Authenticator pro User následováno kódem PIN \* Odpověď po obdržení správného kódu: Kalibrace odeslána (**Pokud je nainstalován xDrip. Příjem kalibrací musí být v xDrip+ povolen.**)

### Bazál

- BASAL STOP/CANCEL \* Odpověď: Pro zastavení dočasného bazálu odpověz pomocí SMS s kódem z aplikace Authenticator pro User následováno kódem PIN
- BASAL 0.3 \* Odpověď: Pro spuštění bazálu 0.3U/h odpověz pomocí SMS s kódem z aplikace Authenticator pro User následováno kódem PIN
- BASAL 0.3 20 \* Odpověď: Pro spuštění bazálu 0.3U/h na 20 min odpověz pomocí SMS s kódem z aplikace Authenticator pro User následováno kódem PIN
- BASAL 30% \* Odpověď: Pro spuštění bazálu 30% na 30 minut odpověz pomocí SMS s kódem z aplikace Authenticator pro User následováno kódem PIN
- BASAL 30% 50 \* Odpověď: Pro spuštění bazálu 30% na 50 minut odpověz pomocí SMS s kódem z aplikace Authenticator pro User následováno kódem PIN

### Bolus

Vzdálený bolus není povolen do 15 minut (tato hodnota je upravitelná pouze v případě, že jsou přidána 2 telefonní čísla) po posledním bolusu nebo vzdálených příkazech! Odpověď závisí na době, která uplynula od posledního podání bolusu.

- BOLUS 1.2 \* Odpověď A: Pro vydání bolusu 1,2 U odpověz kódem z aplikace Authenticator pro User následováno kódem PIN \* Odpověď B: Vzdálený bolus není k dispozici. Zkuste to později.
- BOLUS 0.60 MEAL \* Zadáte-li volitelný parametr MEAL, nastaví se dočasný cíl PŘED JÍDLEM (výchozí hodnoty jsou: 90 mg/dL, 5,0 mmol/l na 45 minut). \* Odpověď A: Pro vydání bolusu 0,60 U odpověz kódem z aplikace Authenticator pro User následováno kódem PIN \* Odpověď B: Vzdálený bolus není k dispozici.
- CARBS 5 \* Odpověď: Pro zapsání 5g v 12:45/5:35PM odpověz pomocí SMS s kódem z aplikace Authenticator pro User následováno kódem PIN
- CARBS 5 17:35/5:35PM \* Odpověď: Pro zapsání 5g v 17:35/5:35PM odpověz pomocí SMS s kódem z aplikace Authenticator pro User následováno kódem PIN
- EXTENDED STOP/CANCEL \* Odpověď: Pro zastaveni rozšířeného bolusu odpověz pomocí SMS s kódem z aplikace Authenticator pro User následováno kódem PIN
- EXTENDED 2 120 \* Odpověď: Pro spuštění prodlouženého bolusu 2U na 120 min odpověz pomocí SMS s kódem z aplikace Authenticator pro User následováno kódem PIN

### Profile

- PROFILE STATUS Odpověď: Profile1
- PROFILE LIST \* Odpověď : 1.\`Profile1\` 2.\`Profile2\`
- PROFILE 1 \* Odpověď: Pro přepnutí profilu na Profil1 100% odpověz pomocí SMS s kódem z aplikace Authenticator pro User následováno kódem PIN
- PROFILE 2 30 \* Odpověď: Pro přepnutí profilu na Profil2 30% odpověz pomocí SMS s kódem z aplikace Authenticator pro User následováno kódem PIN


### Jiné

- TREATMENTS REFRESH \* Odpověď: Obnovit ošetření z NS
- NSCLIENT RESTART \* Odpověď: RESTART NSCLIENTA ODESLÁN
- PUMP \* Odpověď: Posl. spojení: před 1 min Doč. bazál: 0.00U/h @11:38 5/30min IOB: 0.5U Zás: 34U Baterie: 100
- PUMP CONNECT \* Odpověď: Pumpa znovu připojena
- PUMP DISCONNECT *30* \* Odpověď: Pro odpojení pumpy na *30* minut odpověz pomocí SMS s kódem z aplikace Authenticator pro User následováno kódem PIN
- SMS DISABLE/STOP \* Odpověď: Pro vypnutí vzdálené SMS služby odpověz pomocí SMS s kódem Any. Mějte na paměti, že ji budete moci opětovně reaktivovat pouze z hlavního smartphonu s AAPS.
- TARGET MEAL/ACTIVITY/HYPO \* Odpověď: Pro nastaveni dočasneho cíle PŘED JÍDLEM/AKTIVITA/HYPO odpověz pomocí SMS s kódem z aplikace Authenticator pro User následováno kódem PIN
- TARGET STOP/CANCEL \* Odpověď: Pro zrušení dočasného bazálu odpověz pomocí SMS s kódem z aplikace Authenticator pro User následováno kódem PIN
- HELP \* Odpověď: BG, LOOP, TREATMENTS, .....
- HELP BOLUS \* Odpoveď: BOLUS 1.2 BOLUS 1.2 MEAL

## Troubleshooting

### Duplicitní SMS

Pokud obdržíte opakovaně stejnou zprávu (např. přepnutí profilu), pravděpodobně jste vytvořili zacyklení s ostatními aplikacemi. Například xDrip+. Pokud je to tak, ujistěte se prosím, že xDrip+ (nebo jakákoliv jiná aplikace) nenahrává ošetření do NS.

Je-li tato jiná aplikace nainstalovaná na více telefonech, deaktivujte upload u všech instancí.

### Nefunkční SMS příkazy na telefonech Samsung

Po aktualizaci telefonu Galaxy S10 bylo hlášeno, že SMS příkazy přestaly fungovat. Lze to vyřešit vypnutím možnosti „odesílat zprávy jako konverzace“.

![Zakázat SMS jako chat zprávu](../images/SMSdisableChat.png)
### Aplikace Zprávy (Google Messages) pro Android

Pokud máte problémy s posíláním nebo přijímáním SMS příkazů v aplikaci Zprávy pro Android (Messages od Googlu), zakažte koncové šifrování jak na telefonu péčovatele, tak na telefonu dítěte.
 - Otevřete příslušnou SMS konverzaci v aplikaci Zprávy
 - Klepněte na tři tečky v pravém horním rohu
 - Vyberte „Podrobnosti“
 - Aktivujte „Posílat pouze SMS a MMS zprávy“
