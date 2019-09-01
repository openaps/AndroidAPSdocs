# Automatizace

Vzhledem k tomu, že AndroidAPS je systém hybridní uzavřené smyčky, uživatel stále musí s aplikací do určité míry interagovat (např. říci smyčce, že se prochází, že se blíží jídlo nebo že lečí na gauči...). Časté ruční zásahy uživatele lze automatizovat pomocí externích nástrojů, jako je Automate nebo IFTTT, které mohou rozšířit stávající funkce AndroidAPS.

## Aplikace Automate pro Android

Bezplatná aplikace Automate pro Android™ umožňuje automatizovat různé úkoly na vašem smartphonu. Své automatizace můžete vytvořit pomocí diagramů, vaše zařízení může automaticky měnit nastavení jako Bluetooth, Wi-Fi, NFC nebo provádět určité akce, např. odeslat SMS, e-mail na základě polohy, času nebo jakékoli jiné “spouštěcí události”. Na svém zařízení můžete automatizovat prakticky všechno. Automate dokonce podporuje plug-iny vytvořené pro aplikace Tasker a Locale.

Pomocí tohoto nástroje můžete snadno vytvořit automatizační diagramy pro automatickou léčbu svého diabetu založené na několika podmínkách podle principu 'jestliže nastane toto... a toto... nikoli toto..., pak udělej toto... a toto...'. Existují tisíce možností, které můžete nastavit.

Aktuálně je **nezbytné používat smyčku s Nightscout profilem**, jelikož Automate provádí příkazy přes HTTP-požadavky přímo na vaší stránce nightscout a následně je synchronizuje s aplikací AndroidAPS.

**Offline provoz smyčky (přímá komunikace mezi Automate a AnroidAPS) dosud není podporován**, je však technologicky proveditelný. Možná bude v budoucnu existovat řešení. Pokud jste našli způsob, jak to udělat, přidejte jej prosím do této dokumentace nebo kontaktujte vývojáře.

### Základní požadavky

#### Aplikace Automate

Stáhněte si aplikace Android Automate z Google Play Store nebo z <https://llamalab.com/automate/> a nainstalujte ji na smartphone, na kterém běží AndroidAPS.

Přjděte do systémových nastavení smartphonu > Aplikace > Automate > Klepněte na ozubené kolo vpravo nahoře > Vyberte 'Spouštět při startu systému'. Toto automaticky spustí vaše automatizační diagramy při spuštění systému.

![Automate HTTP request](../images/automate-app2.png)

#### AndroidAPS

V NSClientu v AndroidAPS klepněte na ozubené kolo vpravo nahoře a přejděte do Nastavení připojení > Zrušte označení možnosti 'Používat pouze WiFi' a 'Pouze při nabíjení', protože automatizace léčby funguje pouze tehdy, když má AndroidAPS připojení k nightscoutu.

![Nightscout connection preferences](../images/automate-aaps1.jpg)

V NSClientu v AndroidAPS klepněte na ozubené kolo vpravo nahoře a přejděte do Rozšířená nastavení > Zrušte označení možnosti 'Pouze nahrávání do NS (zakázaná synchronizace)' a 'Zakázat nahrávání do NS'

![Nightscout download preferences](../images/automate-aaps2.jpg)

### Příklady automatizačních schémat

#### Example 1: If activity (e.g. walking or running) is detected, then set a high TT. And if activity ends, then wait 20 minutes and then cancel TT

This workflow will listen to the smartphone sensors (pedometer, gravity sensor...) that detect the activity behavior. If there is recent activity like walking, running or riding a bycicle present, then Automate will set a user specified high temprorary target for the user specified time. If activity ends, your smartphone will detect this, wait for 20 minutes and then set the target back to normal profile value.

Download the Automate script <https://llamalab.com/automate/community/flows/27808>.

Edit the sling by tapping on the edit pencil > Flowchart

![Automate sling](../images/automate-app3.png)

Customize the workflow according to your wishes as follows:

![Automate sling](../images/automate-app6.png)

1. = Set high TT
2. = Go back to normal target 20 minutes after the end of acitivity

1 ![Automate sling](../images/automate-app1.png)

2 ![Automate sling](../images/automate-app5.png)

Request URL: Your NS-URL with ending /api/v1/treatments.json (e.g. https://my-cgm.herokuapp.com/api/v1/treatments.json)

Request content:

* targetTop / targetBottom: The high TT value (top and bottom should be the same value)
* duration: The duration of the high TT (after time it will fallback to regular profile target unless activity goes on). 
* secret: Your API SHA1 hash. It is NOT your api key! You can convert your API key to SHA1 format at <http://www.sha1-online.com/>

Save: Tap on 'Done' and on the hook

Start sling: Tap on Play button

#### Example 2: If xDrip+ alerts a BG high alarm, then set a low TT for ... minutes.

This workflow will listen to the xDrip+ notification channel. If there is triggered a user specified xDrip+ high BG alert, then Automate will set a user specified low temprorary target for the user specified time. After time, another possibly alert will extend the duration of the low TT.

##### xDrip+

First, you must add a BG high alert in xDrip+ as follows:

![xDrip+ alert settings](../images/automate-xdrip1.png)

Alert name: (Pay attention on it!) This name is essential for fireing the trigger. It should be unmistakeable and not similar to other alert names. Example: '180alarm' should not exist next to '80alarm'.

Threshold: BG value that should fire the high alert.

Default Snooze: Insert the duration you are planning to set for your low TT here, as the alert will come up again and maybe extend the duration of the low TT.

![xDrip+ alert settings](../images/automate-xdrip2.png)

##### Automate

Secondly, download the Automate script <https://llamalab.com/automate/community/flows/27809>.

Edit the sling by tapping on the edit pencil > Flowchart

![Automate sling](../images/automate-app3.png)

Customize the workflow according to your wishes as follows:

Within the 'Notification posted?' trigger, you have to set the 'TITLE' to the name of your xDrip+ alert that should fire the trigger and add a * variable before and after that name.

![Automate sling](../images/automate-app7.png)

![Automate sling](../images/automate-app4.png)

Request URL: Your NS-URL with ending /api/v1/treatments.json (e.g. https://my-cgm.herokuapp.com/api/v1/treatments.json)

Request content:

* targetTop / targetBottom: The low TT value (top and bottom should be the same value)
* duration: The duration of the low TT (after time it will fallback to regular profile target). It is recommended that you use the same duration as in xDrip+ alert 'Standard snooze'
* secret: Your API SHA1 hash. It is NOT your api key! You can convert your API key to SHA1 format at <http://www.sha1-online.com/>

Save: Tap on 'Done' and on the hook

Start sling: Tap on Play button

#### Example 3: To be added by you!!!

Please add further workflows by uploading .flo file to Automate community (under the keyword 'Nightscout') and describe it here by doing [Pull Request on AndroidAPSdocs repository](../make-a-PR.md).

## If this, then that (IFTTT)

Feel free to add a Howto by PR...