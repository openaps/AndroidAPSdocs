# Automation with third party Android Automate App

**This article has been written before AndroidAPS version 2.5. There is an [automation plugin in AndroidAPS](./Automation.rst) itself with AndroidAPS version 2.5. For some, this here might be still useful, but should only be used by advanced users.**

Aangezien AndroidAPS een hybride closed loop systeem is, is gebruikersinteractie soms noodzakelijk (bijv. de loop vertellen dat je gaat wandelen, dat je binnenkort eet, je op de bank ligt...). Allerlei handmatige invoer die je frequent doet, zou je kunnen automatiseren. Dit gaat via externe tools zoals Automate of IFTTT, als aanvulling op de AndroidAPS-functies.

## Android Automate App

De gratis Android™ app Automate kan allerlei taken op jouw smartphone automatiseren. Create your automations with flowcharts, make your device automatically change settings like Bluetooth, Wi-Fi, NFC or perform actions like sending SMS, e-mail, based on your location, the time of day, or any other “event trigger”. Automate heeft ook plug-ins gemaakt, zodat hij kan samenwerken met andere apps zoals Tasker en Locale.

Met behulp van deze tool kun je workflows aanmaken voor automatische behandel-acties voor jouw diabetes. Dat doe je op basis van meerdere voorwaarden volgens het principe 'als dit... en dit... niet dit..., doe dan dat... en dat...'. Er zijn duizenden mogelijkheden die je op deze manier kunt samenstellen.

Tot nu toe is het **nodig om te loopen via een Nightscout profiel**, omdat Automate alle acties uitvoert via een HTTP-verzoek dat rechtstreeks naar jouw Nightscout website gaat. De info in jouw Nightscout website wordt vervolgens gesynchroniseerd met jouw AndroidAPS app.

**Offline looping (direct communication between Automate and AndroidAPS app) is not supported yet**, but technologically possible. Misschien zal er in de toekomst een oplossing komen. Als je een manier hebt gevonden om dit te doen, voeg het dan toe aan deze documentatie of neem contact op met een ontwikkelaar.

### Wat heb je nodig:

#### Automate app

Download Android automatiseren in de Google Play Store of op <https://llamalab.com/automate/> en installeer het op de smartphone waar AndroidAPS op staat.

In Automate, tap on hamburger menu on the upper left of the screen > Settings > Check 'Run on system startup'. Dit zal automatisch jouw workflows uitvoeren bij het opstarten van het systeem.

![Automate HTTP verzoek](../images/automate-app2.png)

#### AndroidAPS

In AndroidAPS, tap on 3 dots menu on the upper right screen and go to Preferences > NSClient > Connection settings > Uncheck 'Use WiFi connection only' and 'Only if charging' as the automated treating does only work when AndroidAPS has an actual nightscout connection.

![Nightscout verbindingsinstellingen](../images/automate-aaps1.jpg)

In AndroidAPS, tap on 3 dots menu on the upper right screen and go to Preferences > NSClient > Advanced Settings > Uncheck 'NS upload only (disabled sync)' and 'No upload to NS'.

Be aware of the [security issues](../Installing-AndroidAPS/Nightscout#security-considerations) that might occure and be very careful if you are using an [Insight pump](../Configuration/Accu-Chek-Insight-Pump#settings-in-aaps).

![Nightscout download preferences](../images/automate-aaps2.jpg)

### Voorbeelden van workflows

#### Voorbeeld 1: Als activiteit (bijv. wandelen of hardlopen) wordt gedetecteerd, stel dan een hoog tijdelijk streefdoel (Temporary Target, TT) in. En als de activiteit eindigt, wacht dan 20 minuten en annuleer het TT.

This workflow will listen to the smartphone sensors (pedometer, gravity sensor...) that detect the activity behavior. If there is recent activity like walking, running or riding a bicycle present, then Automate will set a user specified high temporary target for the user specified time. If activity ends, your smartphone will detect this, wait for 20 minutes and then set the target back to normal profile value.

Download the Automate script <https://llamalab.com/automate/community/flows/27808>.

Edit the sling by tapping on the edit pencil > Flowchart

![Automate sling](../images/automate-app3.png)

Customize the workflow according to your wishes as follows:

![Automate sling](../images/automate-app6.png)

1. = Stel hoog tijdelijk streefdoel in (Temp Target, TT)
2. = Go back to normal target 20 minutes after the end of activity

1 ![Automate sling](../images/automate-app1.png)

2 ![Automate sling](../images/automate-app5.png)

Request URL: Your NS-URL with ending /api/v1/treatments.json (e.g. https://my-cgm.herokuapp.com/api/v1/treatments.json)

Request content:

* targetTop / targetBottom: de waarde waarop jij het tijdelijke hoge streefdoel wilt zetten. Bij targetTop (bovengrens) en targetBottom (ondergrens) moet je hetzelfde getal invullen.
* duration: De duur van het tijdelijk hoge streefdoel (nadat deze tijd is verstreken, zal het streefdoel weer terugvallen op het reguliere profiel tenzij de activiteit doorgaat). 
* secret: Jouw API SHA1 hash. Dit is NIET jouw api sleutel! Je kunt jouw API-sleutel converteren naar SHA1 formaat op <http://www.sha1-online.com/>

Save: Tap on 'Done' and on the hook

Start sling: Tap on Play button

#### Voorbeeld 2: Als xDrip+ een hoog BG alarm geeft, stel dan een laag tijdelijk streefdoel (Temporary Target, TT) in gedurende... minuten.

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

* targetTop / targetBottom: de waarde waarop jij het tijdelijke hoge streefdoel wilt zetten. Bij targetTop (bovengrens) en targetBottom (ondergrens) moet je hetzelfde getal invullen.
* duration: De duur van het tijdelijk hoge streefdoel (nadat deze tijd is verstreken, zal het streefdoel weer terugvallen op het reguliere profiel). Het wordt aanbevolen om dezelfde duur te gebruiken als je zonet hebt ingevuld bij 'Standaard snooze' van jouw xDrip+ alarm.
* secret: Jouw API SHA1 hash. Dit is NIET jouw api sleutel! Je kunt jouw API-sleutel converteren naar SHA1 formaat op <http://www.sha1-online.com/>

Save: Tap on 'Done' and on the hook

Start sling: Tap on Play button

#### Voorbeeld 3: Die mag je zelf maken én hier toevoegen!!!

Please add further workflows by uploading .flo file to Automate community (under the keyword 'Nightscout') and describe it here by doing [Pull Request on AndroidAPSdocs repository](../make-a-PR.md).

## If This, Then That (IFTTT) oftwel Als Dit, Dan Dat

Feel free to add a Howto by PR...