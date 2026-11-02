# SMS příkazy

```{contents} Table of contents
:depth: 2
```

Většinu vzdálených úprav (dočasné cíle, sacharidy, přepnutí profilu a po spárování klienta i bolusy) můžete provést v [aplikaci **AAPSClient**](../RemoteFeatures/RemoteMonitoring.md) na telefonu s Androidem s připojením k internetu, viz [Ovládání master ↔ klient](#client-master-control) (verze **AAPSClient** pro iPhone se vyvíjí, viz [AAPSClient](AapsClient.md)). SMS příkazy zůstávají alternativou, která funguje bez internetu, a jedinou možností vzdáleného ovládání, pokud jako sledující používáte iPhone a **AAPSClient** zatím nemáte.

**SMS příkazy jsou opravdu užitečné:**
1. Pro běžné vzdálené ovládání

2. Pokud chcete podávat bolus inzulínu na dálku bez spárovaného **AAPSClient**

3. V místech se slabým signálem, kde textové zprávy projdou, ale mobilní data a internet jsou omezené. To je velmi užitečné při cestách do odlehlých oblastí (např. kempování, lyžování).

4. Pokud váš jiný způsob vzdáleného ovládání (**AAPSClient**) dočasně nefunguje

## Bezpečnost především

Když v **AAPS** povolíte **SMS komunikátor**, vezměte do úvahy, že telefon, který má povoleno posílat příkazy, může být ukraden nebo použit jinou osobou. Vždy zamykejte svůj telefon alespoň pomocí PINu. Velmi doporučujeme silné heslo a/nebo biometrický zámek. Dbejte, aby se lišilo od hlavního hesla APK (heslo, které je potřeba pro export nastavení **AAPS**).

Dále doporučujeme povolit pro SMS příkazy [druhé telefonní číslo](#SMSCommands-authorized-phone-numbers). Pak můžete z druhého čísla SMS komunikátor [zakázat](#SMSCommands-other), pokud by byl váš hlavní telefon pro vzdálené ovládání zneužit.

The default minimum time delay between bolus commands is 15 minutes, counted from the moment the pump accepts a bolus. Z bezpečnostních důvodů musíte přidat alespoň dvě autorizovaná telefonní čísla ke zkrácení tohoto limitu. Pokud se pokusíte o další vzdálený bolus do 15 minut od předchozího bolusu, dostanete odpověď „Vzdálený bolus není k dispozici. Zkuste to později.“

AAPS vás bude textovou zprávou informovat, že byl poslaný příkaz (bolus, změna profilu apod.) úspěšně vykonán. Je proto vhodné nastavit, aby byly potvrzovací zprávy odesílány alespoň na dvě různá telefonní čísla pro případ, že by došlo ke zcizení jednoho z rodičovských telefonů.

**If you bolus through SMS Commands, you must enter carbs separately (second SMS, AAPSClient...)!** If you fail to do so, the IOB would be correct with too low COB, potentially leading to not performed correction bolus as **AAPS** assumes that you have too much active insulin.

Pro citlivé příkazy je kvůli vyšší bezpečnosti nutné použít autentizační aplikaci s časově omezeným jednorázovým heslem.

Pokud chcete telefonu pečovatele odebrat možnost posílat SMS příkazy, použijte v **AAPS** nouzové tlačítko „[Resetovat Authenticatory](#sms-commands-authenticator-setup)“ nebo pošlete SMS příkaz „[SMS stop](#SMSCommands-other)“. Resetováním autentizačních aplikací zneplatníte VŠECHNY telefony pečovatelů. Budete je muset nastavit znovu.

## Nastavení SMS příkazů

```{contents} The overall process is as follows
:depth: 1
:local: true
```

(sms-commands-authenticator-setup)=
### Nastavení Authenticatoru

Dvoufaktorové ověření se používá ke zvýšení bezpečnosti.

Na telefon pečovatele stáhněte (z App Store nebo Google Play) a nainstalujte autentizační aplikaci. Oblíbené bezplatné aplikace jsou:
  - [Authy](https://authy.com/download/)
  - Google Authenticator - [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) / [iOS](https://apps.apple.com/de/app/google-authenticator/id388497605)
  - [LastPass Authenticator](https://lastpass.com/auth/)
  - [FreeOTP Authenticator](https://freeotp.github.io/)

Tyto autentizační aplikace vytvářejí časově omezené jednorázové šestimístné heslo, podobně jako při mobilním bankovnictví nebo nakupování. Můžete použít libovolnou autentizační aplikaci, která podporuje tokeny RFC 6238 TOTP. Microsoft Authenticator nefunguje.

### Kontrola nastavení telefonu

V telefonu přejděte do **Aplikace > AAPS > Oprávnění**. Ujistěte se, že **SMS** a **Telefon** jsou povoleny.

![obrázek](../images/remote-control-08.png)

```{admonition} "App was denied access to SMS"
:class: tip
Android může blokovat oprávnění **SMS** pro aplikace, které nebyly nainstalovány z obchodu s aplikacemi, jako je **AAPS**. Pokud tuto zprávu uvidíte při udělování oprávnění **SMS**, otevřete v telefonu **Nastavení > Aplikace > AAPS**, klepněte na nabídku **⋮** (vpravo nahoře) a vyberte **Povolit omezená nastavení**. Potom oprávnění **SMS** udělte znovu.
```

![Aplikace nemá povolen přístup k SMS](../images/sms_permission_restricted.png)

### Synchronizace data a času

Na obou telefonech musí být synchronizovaný čas. Nejlepší způsob je synchronizovat čas automaticky prostřednictvím sítě. Časové rozdíly mohou vést k problémům s ověřováním.

Na telefonu s **AAPS** i na telefonu pečovatele zkontrolujte, že datum a čas jsou synchronizované. Přesný postup závisí na vašem zařízení, možná budete muset vyzkoušet různá nastavení.

Příklad (pro Samsung S23): **Nastavení > Obecná správa > Datum a čas**: ujistěte se, že je zapnuto **Automatické datum a čas**.

Některé možnosti mohou být neaktivní z důvodu potřeby oprávnění správce přes rodinný účet, pokud byl telefon nastaven jako dětský. Na iPhonu pečovatele/rodiče se toto nastavení data a času jmenuje „Nastavit automaticky“. Pokud si nejste jistí, zda jsou telefony synchronizované, nebojte se. SMS příkazy můžete nastavit a problém řešit až potom, pokud se zdá, že způsobuje potíže (v případě potřeby požádejte o pomoc).

### Nastavení AAPS

Teď, když je nastavení telefonu zkontrolované, přejděte v samotné aplikaci **AAPS** do [**Konfigurace** → **Komunikace**](../SettingUpAaps/ConfigBuilder.md) a povolte plugin **SMS komunikátor**.

Otevřete nastavení **SMS komunikátoru**.

Zapněte **Povolit vzdálené příkazy přes SMS**. Možnosti **Další povinný PIN na konci tokenu** a **Nastavení Authenticatoru** se zobrazí, až když je tato volba zapnutá:

![Nastavení SMS komunikátoru](../images/sms_communicator_settings.png)

(SMSCommands-authorized-phone-numbers)=
#### Povolená telefonní čísla

Zadejte telefonní číslo (nebo čísla) pečovatele. Zadejte předvolbu země a vynechte první „0“ telefonního čísla, jak ukazují tyto příklady:
* Telefonní číslo ve Velké Británii: +447976304596
* Telefonní číslo v USA: +11234567890
* Telefonní číslo ve Francii:  +33612344567
* _atp._

Pamatujte, že znak „+“ před číslem může, ale nemusí být potřeba, podle toho, kde se nacházíte. Abyste to zjistili, pošlete zkušební zprávu. Na obrazovce pluginu **SMS komunikátor** (**Konfigurace** → **Komunikace** → **SMS komunikátor** → **Otevřít plugin**) se zobrazí, v jakém formátu číslo přišlo.

Pokud chcete přidat více telefonních čísel, oddělte je středníky, **BEZ mezery mezi čísly** (to je velmi důležité!). Vyberte **OK**:

![Povolená telefonní čísla](../images/sms_allowed_numbers.png)

#### Minimální vzdálenost vzdáleného bolusu

- Můžete nastavit minimální prodlevu (v minutách) mezi dvěma bolusy zadanými přes SMS.
- Z bezpečnostních důvodů musíte k úpravě této hodnoty přidat alespoň dvě autorizovaná telefonní čísla.

#### Další povinný PIN na konci tokenu

Z bezpečnostních důvodů musí za kódem v odpovědi následovat PIN. Zvolte PIN, který vy (a všichni ostatní pečovatelé) budete zadávat na konec kódu z autentizační aplikace při odesílání SMS příkazu.

Požadavky na PIN jsou:

* at least 6 digits
* digits only

For a safer PIN, do not use the same digit many times (_e.g._ 111111) or a sequence (_e.g._ 123456).

![Další povinný PIN na konci tokenu](../images/sms_pin.png)

#### Nastavení Authenticatoru

* Klepněte na **Nastavení Authenticatoru** a postupujte podle pokynů na obrazovce.
* Na _telefonu pečovatele_ otevřete nainstalovanou autentizační aplikaci, nastavte nové připojení a
* Telefonem pečovatele naskenujte QR kód zobrazený pod **Naskenujte kód pro nastavení AAPS OTP kódů**.

![Authenticator setup with QR code](../images/sms_authenticator_setup.png)

* V části **Otestujte jednorázové heslo** zadejte do pole **Kód k ověření** jednorázový kód z autentizační aplikace v telefonu pečovatele a za ním váš PIN:

Example:
* Jednorázové heslo z autentizační aplikace je 457051
* Váš povinný PIN je 2401
* Kód k ověření: 4570512401

If the entry is correct, the red text “WRONG PIN” will change automatically to a green “OK”. **There is no button you can press!** The process is now complete, there is no “OK” button you need to press after entering the code:

![Test One-Time-Password and Reset Authenticators](../images/sms_authenticator_test.png)

You should now be set up with SMS commands.

Use the **Reset Authenticators** button at the bottom of the **Authenticator setup** screen if you want to remove provisioned authenticators. (By resetting authenticator you make ALL already provisioned authenticators invalid. You will need to set them up again.)

## Používání SMS příkazů

### První kroky při užívání SMS příkazů

1)  To check you have set everything up correctly, test the connection by typing “bg” as an SMS message from the caregiver phone to the **AAPS** phone. You should get a response similar to that shown here:

![obrázek](../images/remote-control-06.png)

If you don't receive any response, check the [Troubleshooting](#SMSCommands-troubleshooting) section below.

2)  Now try an SMS command that requires the authenticator, _e.g._ “target hypo”. The caregiver’s phone will receive a text back, prompting you to enter the **six-digit authenticator password** from the authenticator app, followed by the additional secret **PIN** known only by caregivers/followers (a string of twelve digits in total, assuming your PIN has 6 digits).

When you try sending an SMS command for the first time, try it in the presence of the **AAPS** phone, to see how it works:

![obrázek](../images/remote-control-16.png)

The caregiver’s phone will receive an SMS in reply from **AAPS** to confirm if the remote SMS command has been carried out successfully.

If your command is successful, you will receive a reply to confirm this. If there is a problem you will receive an error message. See [Troubleshooting](#SMSCommands-troubleshooting) below for common errors.

**Hint**: It can be useful to have unlimited SMS on your phone plan (for each phone used) if a lot of SMS will be sent.

### Posílání bolusů k jídlu prostřednictvím SMS příkazů

Remote bolusing of insulin can be done via **SMS Commands** or through a paired **AAPSClient** (see [Master ↔ Client control](#client-master-control)); it cannot be done through the Nightscout website. Carbs can be announced through SMS or **AAPSClient** as well. With SMS, it is not possible to send both carbs and insulin commands in one single SMS message. These commands must be sent separately as follows:

1)  Send the insulin bolus (_e.g._“bolus 2” will command a bolus of 2 units) through SMS commands is equivalent to **Treatments** → **Insulin** in **AAPS**. 2)  Send the carbs (_e.g._ “carbs 20” will announce 20g of carbs). This is equivalent to **Treatments** → **Carbs** in **AAPS**.

To avoid hypos, it is a good idea to start conservatively, by bolusing **less insulin** than would be needed according to your carb ratio, because you are not taking into account the current glucose level or glucose trend.

**The order in which you send these commands is important**. If you announce a large amount of carbs by any route, and have SMBs enabled, **AAPS** may immediately respond by giving a partial bolus of insulin. So, if you then try to send an insulin bolus _after_ announcing the carbs, you may have a frustrating delay and a “bolus in progress” message, and you then need to check what has been given as an SMB. Or, if you do not realise an SMB is being delivered, and your own subsequent bolus is also successful, too much insulin may be delivered for the meal overall. Therefore, if bolusing for meals remotely, always send the insulin bolus _before_ the carb announcement. If you prefer, you can combine **AAPSClient** with SMS commands: carbs entered on a paired **AAPSClient** need no authentication code and are therefore quicker than SMS commands. Carbs or other treatments entered on the Nightscout website are **not** applied while client control is on; **AAPS** is then in [hardened mode](#client-master-control-hardened-mode).

(SMSCommands-commands)=
## Příkazy

```{contents} List of command groups
:depth: 1
:local: true
```

Commands must be sent in English, the response will be in your local language if the response string is already [translated](#translations-translate-strings-for-AAPS-app). The commands are not case-sensitive, you can use lower or upper case.

![SMS Commands Example](../images/SMSCommands.png)

The **SMS Commands Tables** below show all the possible SMS commands. _Example values_ are given, to aid understanding. The commands have the same range of possible values (targets, percent profile etc.) which are allowable in the **AAPS** app itself.

(authentication-or-not)=
### Autentizace ano nebo ne?

Some SMS commands give an immediate response, and some SMS commands require strong **authentication** through the Authenticator app. A simple enquiry like “**BG**” (which requests an update on current glucose) is quick to type, doesn't need authenticating, and returns the **AAPS** status information shown below:

![obrázek](../images/remote-control-06.png)

Commands which need more security require a code to be entered, for example:

![SMS authenticated](../images/remote-control-07.png)

The *Auth* column in the tables below, indicates whether such a strong authentication is required for each command.

### CGM data

| Příkaz     | Ověření | Funkce a *odpověď*                                                                                                                                                                                                                |
| ---------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BG         | Ne      | Vrátí: poslední glykémii, rozdíl (delta), IOB (bolus a bazál), COB<br/>*Poslední gly: 5,6 před 4 min, Delta: -0,2 mmol, IOB: 0,20U (Bolus: 0,10U Bazál: 0,10U)*                                                             |
| CAL 5.6/90 | Ano     | Will calibrate the CGM with a value of 5.6/90<br/>(use the value appropriate to your glucose units)<br/>Works only if properly set-up in **AAPS**.<br/>*Calibration sent. Receiving must be enabled in xDrip+.* |

### Pumpa

| Příkaz               | Ověření | Funkce a *odpověď*                                                                                   |
| -------------------- | ------- | ---------------------------------------------------------------------------------------------------- |
| PUMPA                | Ne      | LastConn: 1 min ago<br/>Temp: 0.00U/h @11:38 5/30min<br/>IOB: 0.5U Reserv: 34U Batt: 100 |
| PUMP DISCONNECT *30* | Ano     | Odpojí pumpu na *30* minut                                                                           |
| PUMP CONNECT         | Ano     | Pumpa znovu připojena                                                                                |

### Bazál

| Příkaz            | Ověření | Funkce a *odpověď*             |
| ----------------- | ------- | ------------------------------ |
| BASAL 0.3         | Ano     | Spustí bazál 0,3 U/h na 30 min |
| BASAL 0.3 20      | Ano     | Spustí bazál 0,3 U/h na 20 min |
| BASAL 30%         | Ano     | Spustí bazál 30 % na 30 min    |
| BASAL 30% 50      | Ano     | Spustí bazál 30 % na 50 min    |
| BASAL STOP/CANCEL | Ano     | Zastaví dočasný bazál          |

Some pumps take a temp basal only in percent, others only in U/h. If you use the other form, **AAPS** answers *"This pump takes a temp basal only in percent, not in U/h."* (or the reverse) and sets nothing. The duration must be a multiple of your pump's temp basal duration step.


### Smyčka

| Příkaz            | Ověření | Funkce a *odpověď*                                                                                                                                                                                                                                                                 |
| ----------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LOOP STATUS       | Ne      | Response depends on actual status:<br/> - *Loop is disabled* if the loop is disabled<br/> - *Loop is enabled* if the loop is closed, open or LGS<br/> - *Pump disconnected* if the pump is disconnected<br/> - *Suspended (10 m)* if the loop is suspended |
| LOOP STOP/DISABLE | Ano     | Pumpa se vrátí k předem naprogramované bazální dávce.<br/>*Smyčka byla zakázána*                                                                                                                                                                                             |
| LOOP SUSPEND 20   | Ano     | *Loop suspended*                                                                                                                                                                                                                                                                   |
| LOOP RESUME       | Ano     | *Smyčka obnovena*                                                                                                                                                                                                                                                                  |
| LOOP CLOSED       | Ano     | *Current running mode: Closed Loop*                                                                                                                                                                                                                                                |
| LOOP LGS          | Ano     | *Current running mode: Low Glucose Suspend*                                                                                                                                                                                                                                        |

### Bolus

Remote bolus is not allowed within 15 min (this value is editable only if 2 phone numbers added) after last bolus command or remote commands! In this case, the response would be *Remote bolus not available. Try again later.* This response is also sent when the pump is currently delivering a bolus.

| Příkaz               | Ověření | Funkce a *odpověď*                                                                                                                                                  |
| -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BOLUS 1.2            | Ano     |                                                                                                                                                                     |
| BOLUS 0.60 MEAL      | Ano     | Podá zadaný bolus 0,60 U<br/>**a** nastaví [dočasný cíl Před jídlem](#TempTargets-eating-soon-temp-target)                                                    |
| CARBS 5              | Ano     | Zadá 5 g sacharidů bez bolusu                                                                                                                                       |
| CARBS 5 17:35/5:35PM | Ano     | Zadá 5 g v 17:35.<br/>Přijatelný formát času závisí<br/> na nastavení času (12 h/24 h) v telefonu.                                                      |
| EXTENDED 2 120       | Ano     | Spustí prodloužený bolus 2 U na 120 min.<br/>Jen pro [kompatibilní pumpy](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only). |
| EXTENDED STOP/CANCEL | Ano     | Zastaví prodloužený bolus                                                                                                                                           |

### Profil

| Příkaz         | Ověření | Funkce a *odpověď*                                                                                                                                          |
| -------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PROFILE STATUS | Ne      | Aktuální profil a procento                                                                                                                                  |
| PROFILE LIST   | Ne      | Aktuální seznam profilů v **AAPS**, např.:<br/>1. Profile1<br/> 2. Profile2                                                                     |
| PROFILE 1      | Ano     | Přepne profil na profil 1 v seznamu.<br/>Použijte čísla, která vrátí příkaz **PROFILE LIST**,<br/>ne názvy profilů, pod kterými jste je uložili |
| PROFILE 2 30   | Ano     | Přepne profil na Profile2 30 %                                                                                                                              |

The percentage must be between 30 and 250 %, as in the app. A value outside this range is refused before you are asked for the authentication code.

### Dočasné cíle

| Příkaz                    | Ověření | Funkce a *odpověď*                                                         |
| ------------------------- | ------- | -------------------------------------------------------------------------- |
| TARGET MEAL/ACTIVITY/HYPO | Ano     | Nastaví dočasný cíl MEAL/ACTIVITY/HYPO (Před jídlem/Aktivita/Hypoglykémie) |
| TARGET STOP/CANCEL        | Ano     | Zruší dočasný cíl                                                          |


(SMSCommands-other)=
### Jiné

| Příkaz           | Ověření | Funkce a *odpověď*                                                                                                                                                                                                                                                        |
| ---------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RESTART          | Ano     | Restartuje AAPS. Hodí se při potížích, které se obvykle vyřeší restartem.                                                                                                                                                                                                 |
| SMS DISABLE/STOP | Ano     | To disable the SMS Remote Service, reply with the code.<br/>Keep in mind that you'll be able to reactivate it directly<br/>from the **AAPS** master smartphone only.                                                                                          |
| HELP             | Ne      | Vrátí všechny funkce, na které se lze dotázat:<br/>BG, LOOP, PUMP, BASAL, BOLUS, EXTENDED, CAL, PROFILE, TARGET, SMS, CARBS, HELP, RESTART<br/>Pošlete další příkaz ***HELP ***FUNCTION******, který vypíše<br/>všechny možnosti dostupné v této části. |
| HELP BOLUS       |         | *BOLUS 1.2<br/>BOLUS 1.2 MEAL*                                                                                                                                                                                                                                      |

(SMSCommands-troubleshooting)=
## Řešení problémů a časté dotazy

```{contents} List of questions and issues
:depth: 1
:local: true
```

### Co _nejde_ udělat pomocí SMS příkazů?

1)  **You cannot set a _temporary_ profile switch** (so for example, setting "profile exercise" for 60 minutes), although you can permanently switch to “profile exercise”. Temporary profile switches can instead be set through **AAPSClient**.

2)  **You cannot cancel automations** or **set user-defined targets** but there are approximate solutions: As an example, imagine the normal profile target is 5.5. You have set an automation in AAPS, to always set a high target of 7.0 between 2.30pm and 3.30pm because of a sports class in school, and a condition of the automation is that “no temp target exists”. This week, you have been told at short notice that the sports class is cancelled, and is being replaced by a pizza-eating session, but your kid is already at school with the **AAPS** phone. If the high temporary target of 7.0 is started by the automation, and you cancel it (on the **AAPS** phone, or remotely) the conditions for the automation are still met and **AAPS** will simply set the high target again, a minute later.

**If you did have access to the AAPS phone**, you could uncheck/modify the automation, or, if you don’t want to do that, you could simply set a new temp target of 5.6 for 60 min by pressing on the target on the main screen, or via **Manage** → **Temp Target**. This would prevent the automation from setting the high target of 7.0.

**If you don’t have access to the AAPS phone** SMS commands can be used for an approximate fix: for example, by using the command “target meal” to set a target of 5.0 for 45 mins (other default targets are 8.0 for activity or hypo, see Table). However, with SMS commands you cannot specify a _specific_ value target value (of 5.6 for 60 minutes, for example), you would need to use **AAPSClient** to do this.

### Co se stane, když si příkaz, který jsem právě poslal(a), rozmyslím?

**AAPS** will only deliver on the most recent command. So, if you type “bolus 1.5”, and then, without authenticating, you send a new command “bolus 1”, it will ignore the earlier 1.5 command. **AAPS** will always send the caregiver's phone a response to confirm what the SMS command is before you are prompted to enter the authentication code, as well as a response following the action.

### Proč jsem nedostal(a) odpověď na SMS příkaz?

It could be for one of these reasons:

1)  The message has not got through to the phone (network issues). 2)  **AAPS** is still in the process of processing the request (_e.g._ a bolus, which can take some time to deliver depending on your bolus rate). 3)  The **AAPS** phone does not have a good Bluetooth connection to the pump when the command is received, and the command has failed (this usually creates an alarm on the **AAPS** phone).

### Žádná odpověď na SMS příkazy

On the caregiver phone and/or **AAPS** phone, try disabling the following options :
* **Odesílat jako chatovou zprávu** (Send as chat message) ![Zakázat SMS jako chat zprávu](../images/SMSdisableChat.png)
* Pokud používáte aplikaci Android Messages nebo Google Zprávy, vypněte zprávy RCS:
  - Otevřete příslušnou SMS konverzaci v aplikaci Zprávy
  - Vyberte nabídku možností (tři tečky) v pravém horním rohu
  - Vyberte „Podrobnosti“
  - Zapněte „Odesílat pouze zprávy SMS a MMS“ (Only send SMS and MMS messages) ![Vypnutí RCS jako chatové zprávy](../images/SMSdisableRCS.png)

### Chyby při provádění příkazů

There are several possible reasons the command may not be successful:

* Nastavení SMS příkazů není dokončené nebo správné
* Poslali jste příkaz ve špatném formátu (např. „disconnect pump 45“ místo „pump disconnect 45“)
* Použili jste nesprávný kód z autentizační aplikace nebo kód s prošlou platností (obvykle je dobré počkat pár sekund na nový kód, pokud platnost aktuálního brzy vyprší)
* Kód + PIN byly správné, ale odeslání/doručení SMS se zpozdilo, a proto **AAPS** vyhodnotil, že platnost kódu z autentizační aplikace vypršela
* Telefon s **AAPS** je mimo dosah pumpy nebo s ní nemá spojení
* Systém už právě podává bolus

Common errors are shown in the examples below:

![obrázek](../images/remote-control-17.png)

### Jak mohu zastavit příkaz, který už byl ověřen?

You can't. However, you can cancel a bolus sent by SMS on the **AAPS** phone itself, by simply cancelling it on the bolusing popup, if you are quick. Many SMS commands (apart from bolusing and carb announcements) can be easily reversed, or actions taken to mitigate unintended effects if a mistake is made.

For errors in bolusing and carb announcements, you can still take action. For example, if you have announced 20g carbs but your child only eats 10g and you (or an onhand caregiver) is unable to delete the treatment in the **AAPS** phone directly, you could set a high temporary target, or set a reduced profile, to encourage **AAPS** to be less aggressive.

### Duplicitní SMS

If you receive the same message repeatedly (_e.g._ a profile switch) you may have accidentally set up a looping condition with other apps. This could be xDrip, for example. If so, please ensure that xDrip (or any other app) does not upload treatments to NightScout.

If the other app is installed on multiple phones make sure to deactivate upload on all of them.

(sms-commands-too-many-messages)=
### Dostávám od SMS příkazů příliš mnoho textových zpráv. Mohu snížit jejich frekvenci nebo je zastavit?

Using SMS commands may generate a lot of automated messages from the **AAPS** phone to the caregiver’s phone. You will also receive messages, for example “basal profile in pump updated” if you have automations set up in **AAPS**. It can be useful to have unlimited SMS allowance on your **AAPS** phone plan (and for each caregiver phone used) if a lot of SMS will be sent, and to deactivate SMS notifications, alarms or vibrations on all phones. It is not possible to use SMS commands and not receive these updates. Because of this, you may want an alternative way to communicate directly with your child (if they are old enough), instead of SMS. Common alternative communication apps used by **AAPS** caregivers include WhatsApp, LINE, Telegram, and Facebook Messenger.

It is possible to disable the "Basal profile in pump updated" SMS, when the Profile change originated from Nightscout. To do this, create a file named **exactly** `do_not_send_sms_on_profile_change` in the `extra` dir of your AAPS directory.
