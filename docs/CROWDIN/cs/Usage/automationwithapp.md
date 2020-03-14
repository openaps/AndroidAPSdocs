# Automatizace pomocí Automate – aplikace třetí strany pro Android

**Tato část vznikla v době před uvedením AndroidAPS verze 2.5. Ta již obsahuje modul [Automatizace v AndroidAPS](./Automation.rst). Pro některé uživatele může být tato kapitola přesto užitečná, měli by ji však používat pouze pokročilí uživatelé.**

Vzhledem k tomu, že AndroidAPS je systém hybridní uzavřené smyčky, uživatel stále musí s aplikací do určité míry interagovat (např. říci smyčce, že se prochází, že se blíží jídlo nebo že leží na gauči...). Časté ruční zásahy uživatele lze automatizovat pomocí externích nástrojů, jako je Automate nebo IFTTT, které mohou rozšířit stávající funkce AndroidAPS.

## Aplikace Automate pro Android

Bezplatná aplikace Automate pro Android™ umožňuje automatizovat různé úkoly na vašem smartphonu. Create your automations with flowcharts, make your device automatically change settings like Bluetooth, Wi-Fi, NFC or perform actions like sending SMS, e-mail, based on your location, the time of day, or any other “event trigger”. Na svém zařízení můžete automatizovat prakticky všechno. Automate dokonce podporuje plug-iny vytvořené pro aplikace Tasker a Locale.

Pomocí tohoto nástroje můžete snadno vytvořit automatizační diagramy pro automatickou léčbu svého diabetu založené na několika podmínkách podle principu 'jestliže nastane toto... a toto... nikoli toto..., pak udělej toto... a toto...'. Existují tisíce možností, které můžete nastavit.

Aktuálně je **nezbytné používat smyčku s Nightscout profilem**, jelikož Automate provádí příkazy přes HTTP-požadavky přímo na vaší stránce nightscout a následně je synchronizuje s aplikací AndroidAPS.

**Offline looping (direct communication between Automate and AndroidAPS app) is not supported yet**, but technologically possible. Možná bude v budoucnu existovat řešení. Pokud jste našli způsob, jak to udělat, přidejte jej prosím do této dokumentace nebo kontaktujte vývojáře.

### Základní požadavky

#### Aplikace Automate

Stáhněte si aplikace Android Automate z Google Play Store nebo z <https://llamalab.com/automate/> a nainstalujte ji na smartphone, na kterém běží AndroidAPS.

In Automate, tap on hamburger menu on the upper left of the screen > Settings > Check 'Run on system startup'. Toto automaticky spustí vaše automatizační diagramy při spuštění systému.

![Automate HTTP požadavek](../images/automate-app2.png)

#### AndroidAPS

In AndroidAPS, tap on 3 dots menu on the upper right screen and go to Preferences > NSClient > Connection settings > Uncheck 'Use WiFi connection only' and 'Only if charging' as the automated treating does only work when AndroidAPS has an actual nightscout connection.

![Nastavení připojení Nightscoutu](../images/automate-aaps1.jpg)

In AndroidAPS, tap on 3 dots menu on the upper right screen and go to Preferences > NSClient > Advanced Settings > Uncheck 'NS upload only (disabled sync)' and 'No upload to NS'.

Be aware of the [security issues](../Installing-AndroidAPS/Nightscout#security-considerations) that might occure and be very careful if you are using an [Insight pump](../Configuration/Accu-Chek-Insight-Pump#settings-in-aaps).

![Nightscout download preferences](../images/automate-aaps2.jpg)

### Příklady automatizačních schémat

#### Příklad 1: Jestliže je zjištěna aktivita (např. chůze nebo běh), nastav vyšší DC. A když aktivita skončí, počkej 20 minut a pak zruš DC

This workflow will listen to the smartphone sensors (pedometer, gravity sensor...) that detect the activity behavior. If there is recent activity like walking, running or riding a bicycle present, then Automate will set a user specified high temporary target for the user specified time. If activity ends, your smartphone will detect this, wait for 20 minutes and then set the target back to normal profile value.

Download the Automate script <https://llamalab.com/automate/community/flows/27808>.

Edit the sling by tapping on the edit pencil > Flowchart

![Automate sling](../images/automate-app3.png)

Customize the workflow according to your wishes as follows:

![Automate sling](../images/automate-app6.png)

1. = Nastavit vysoký DC
2. = Go back to normal target 20 minutes after the end of activity

1 ![Automate sling](../images/automate-app1.png)

2 ![Automate sling](../images/automate-app5.png)

Request URL: Your NS-URL with ending /api/v1/treatments.json (e.g. https://my-cgm.herokuapp.com/api/v1/treatments.json)

Request content:

* targetTop / targetBottom: Hodnota vysokého DC (top a bottom by měly mít stejnou hodnotu)
* duration: Trvání vysokého DC (po tomto čase se obnoví cíl podle profilu, pokud nebude aktivita pokračovat). 
* secret: Váš API SHA1 hash. Toto NENÍ váš api key! Svůj API key můžete převést do formátu SHA1 na adrese <http://www.sha1-online.com/>

Save: Tap on 'Done' and on the hook

Start sling: Tap on Play button

#### Příklad 2: Jestliže je aktivní výstraha xDripu+ na vysokou glykémii, pak nastav nízký TT na... minut.

This workflow will listen to the xDrip+ notification channel. If there is triggered a user specified xDrip+ high BG alert, then Automate will set a user specified low temporary target for the user specified time. After time, another possibly alert will extend the duration of the low TT.

##### xDrip+

First, you must add a BG high alert in xDrip+ as follows:

![xDrip+ alert settings](../images/automate-xdrip1.png)

Alert name: (Pay attention on it!) This name is essential for firing the trigger. It should be unmistakable and not similar to other alert names. Example: '180alarm' should not exist next to '80alarm'.

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

* targetTop / targetBottom: Hodnota nízkého DC (top a bottom by měly mít stejnou hodnotu)
* trvání: Trvání nízkého DC (po tomto čase se obnoví cíl podle profilu). Doporučuje se používat stejnou dobu trvání jako u 'Výchozího potvrzení' u výstrahy xDripu+
* secret: Váš API SHA1 hash. Toto NENÍ váš api key! Svůj API key můžete převést do formátu SHA1 na adrese <http://www.sha1-online.com/>

Save: Tap on 'Done' and on the hook

Start sling: Tap on Play button

#### Příklad 3: Ten přidejte vy!!!

Please add further workflows by uploading .flo file to Automate community (under the keyword 'Nightscout') and describe it here by doing [Pull Request on AndroidAPSdocs repository](../make-a-PR.md).

## If this, then that (IFTTT)

Feel free to add a Howto by PR...