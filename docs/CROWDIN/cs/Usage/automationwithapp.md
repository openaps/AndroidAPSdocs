# Automation with third party Android Automate App

**This article has been written before AndroidAPS version 2.4. There is an [automation plugin in AndroidAPS](./Automation.rst) itself with AndroidAPS version 2.4. For some, this here might be still useful, but should only be used by advanced users.**

As AndroidAPS is a hybrid closed loop system, some user interaction is necessary though (e.g. tell the loop that you are walking, eating soon, lying on the sofa...). Frequent manual user inputs can be automated via external tools like Automate or IFTTT to extend the recent AndroidAPS functionality.

## Aplikace Automate pro Android

The free Android™ application Automate lets you automate various tasks on your smartphone. Create your automations with flowscharts, make your device automatically change settings like Bluetooth, Wi-Fi, NFC or perform actions like sending SMS, e-mail, based on your location, the time of day, or any other “event trigger”. You can automate almost everything on your device, Automate even support plug-ins made for Tasker and Locale.

Using this tool you can easily create workflows to auto-treat your diabetes based on several conditions according to the principle of 'if this... and this... not this..., then do that... and that...'. There are thousands of possibilities you can configure.

Until now it is **necessary to loop via Nightscout Profile**, as Automate executes the commands via HTTP-request directly in your nightscout website that subsequently syncs it to your AndroidAPS app.

**Offline looping (direct communication between Automate and AnroidAPS app) is not supported yet**, but technologically possible. Maybe there will be a solution in future. If you have figured out a way to do this, please add it to this documentation or contact a developer.

### Základní požadavky

#### Aplikace Automate

Download Android Automate in Google Play Store or at <https://llamalab.com/automate/> and install it on your smartphone where AndroidAPS runs.

Go to smartphone system settings > Apps > Automate > Tap on the gear on the upper right of the screen > Check 'Run on system startup'. This will automatically run your workflows on system startup.

![Automate HTTP request](../images/automate-app2.png)

#### AndroidAPS

In AndroidAPS NSClient, tap on the gear at the upper right screen and go to Connection settings > Uncheck 'Use WiFi connection only' and 'Only if charging' as the automated treating does only work when AndroidAPS has an actual nightscout connection.

![Nightscout connection preferences](../images/automate-aaps1.jpg)

In AndroidAPS NSClient, tap on the gear at the upper right screen and go to Advanced Settings > Uncheck 'NS upload only (dosable sync)' and 'No upload to NS'

![Nightscout download preferences](../images/automate-aaps2.jpg)

### Příklady automatizačních schémat

#### Příklad 1: Jestliže je zjištěna aktivita (např. chůze nebo běh), nastav vyšší DC. A když aktivita skončí, počkej 20 minut a pak zruš DC

This workflow will listen to the smartphone sensors (pedometer, gravity sensor...) that detect the activity behavior. If there is recent activity like walking, running or riding a bycicle present, then Automate will set a user specified high temprorary target for the user specified time. If activity ends, your smartphone will detect this, wait for 20 minutes and then set the target back to normal profile value.

Download the Automate script <https://llamalab.com/automate/community/flows/27808>.

Edit the sling by tapping on the edit pencil > Flowchart

![Automate sling](../images/automate-app3.png)

Customize the workflow according to your wishes as follows:

![Automate sling](../images/automate-app6.png)

1. = Nastavit vysoký DC
2. = Přejít zpět na normální cíl 20 minut po skočení aktivity

1 ![Automate sling](../images/automate-app1.png)

2 ![Automate sling](../images/automate-app5.png)

Request URL: Your NS-URL with ending /api/v1/treatments.json (e.g. https://my-cgm.herokuapp.com/api/v1/treatments.json)

Request content:

* targetTop / targetBottom: Hodnota vysokého DC (top a bottom by měly mít stejnou hodnotu)
* trvání: Trvání vysokého DC (po tomto čase se obnoví cíl podle profilu, pokud nebude aktivita pokračovat). 
* secret: Váš API SHA1 hash. Toto NENÍ váš api key! Svůj API key můžete převést do formátu SHA1 na adrese <http://www.sha1-online.com/>

Save: Tap on 'Done' and on the hook

Start sling: Tap on Play button

#### Příklad 2: Jestliže je aktivní výstraha xDripu+ na vysokou glykémii, pak nastav nízký TT na... minut.

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

* targetTop / targetBottom: Hodnota nízkého DC (top a bottom by měly mít stejnou hodnotu)
* trvání: Trvání nízkého DC (po tomto čase se obnoví cíl podle profilu). Doporučuje se používat stejnou dobu trvání jako u 'Výchozího potvrzení' u výstrahy xDripu+
* secret: Váš API SHA1 hash. Toto NENÍ váš api key! Svůj API key můžete převést do formátu SHA1 na adrese <http://www.sha1-online.com/>

Save: Tap on 'Done' and on the hook

Start sling: Tap on Play button

#### Příklad 3: Ten přidejte vy!!!

Please add further workflows by uploading .flo file to Automate community (under the keyword 'Nightscout') and describe it here by doing [Pull Request on AndroidAPSdocs repository](../make-a-PR.md).

## If this, then that (IFTTT)

Feel free to add a Howto by PR...