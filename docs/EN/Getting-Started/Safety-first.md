# Safety first

**When you decide to build your own artificial pancreas, it's always important to think about security and safety, and to understand the impact of all your actions**

## General

- AndroidAPS is a just a tool to help you manage diabetes, it is not a fully automated system you can install and forget!
- Do not assume that AndroidAPS will never make mistakes. This device is taking control of your insulin delivery: Watch it all the time, understand how it works, and learn how to interpret its actions.
- Remember that, once paired, the phone can instruct the pump to do anything. Only use this phone for AndroidAPS and, if being used by a child, essential communications. Do not install unnecessary apps or games (!!!) which could introduce malware such as trojans, viruses, or bots that could interfere with your system.
- Install all security updates provided by your phone manufacturer and Google.
- You might also need to change your diabetes habits as you change your therapy by using a closed loop system. I.e. some people report, they need less hypo treatments as AndroidAPS has already reduced insulin.

## SMS Communicator

- AndroidAPS allows you to control a child's phone remotely via text message. If you enable this SMS Communicator, always remember that the phone set up to give remote commands could be stolen. So always protect it at least by a PIN code.
- AndroidAPS will also inform you by text message if your remote commands, such as a bolus or a profile change, have been carried out. It is advisable to set this up so that confirmation texts are sent to at least two different phone numbers in case one of the receiving phones is stolen.

:::{note}
**IMPORTANT SAFETY NOTICE**

The foundation of AndroidAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. It is critically important that you only use a tested, fully functioning FDA or CE approved insulin pump and CGM for closing an automated insulin dosing loop. Hardware or software modifications to these components can cause unexpected insulin dosing, causing significant risk to the user. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AndroidAPS system.

Additionally, it is equally important to only use original supplies such as inserters, cannulas and insulin containers approved by the manufacturer for use with your pump or CGM. Using untested or modified supplies can cause CGM inaccuracy and insulin dosing errors. Insulin is highly dangerous when misdosed - please do not play with your life by hacking with your supplies.

Last not least, you must not take SGLT-2 inhibitors (gliflozins) as they incalculably lower blood sugar levels.  The combination with a system that lowers basal rates in order to increase BG is especially dangerous as due to the gliflozin this rise in BG might not happen and a dangerous state of lack of insulin can happen.
:::
