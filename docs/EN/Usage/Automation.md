# Automation

As AndroidAPS is a hybrid closed loop system, some user interaction is necessary though (e.g. tell the loop that you are walking, eating soon, lying on the sofa...). Frequent manual user inputs can be automated via external tools like Automate or IFTTT to extend the recent AndroidAPS functionality. 

## Android Automate App
The free Android™ application Automate lets you automate various tasks on your smartphone. Create your automations with flowscharts, make your device automatically change settings like Bluetooth, Wi-Fi, NFC or perform actions like sending SMS, e-mail, based on your location, the time of day, or any other “event trigger”. You can automate almost everything on your device, Automate even support plug-ins made for Tasker and Locale.

Using this tool you can easily create workflows to auto-treat your diabetes based on several conditions according to the principle of 'if this... and this... not this..., then do that... and that...'. 

You can download Android Automate at [https://llamalab.com/automate/](https://llamalab.com/automate/)

### Basic requirements

#### General
Until now it is necessary to loop via Nightscout Profile, as Automate executes the commands via HTTP-request directly in your nightscout website that subsequently syncs it to your AndroidAPS app. **Offline looping (direct communication between Automate and AnroidAPS app) is not supported yet**, but technologically possible. Maybe there will be a solution in future.

#### AndroidAPS


#### xDrip+


### Workflow examples

#### If activity is detected, then set a high TT


## If this, then that (IFTTT)
...
