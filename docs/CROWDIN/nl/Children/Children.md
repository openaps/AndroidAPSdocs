# Volgen op afstand

```{image} ../images/KidsMonitoring.png
:alt: Kinderen volgen
```

AndroidAPS biedt verschillende opties voor het vanaf afstand volgen van kinderen en kan ook behandelings opdrachten verzenden vanaf afstand. Deze functies kun je natuurlijk ook gebruiken om jouw partner of andere dierbare op afstand te volgen.

## Functies

- Kid's pump is controlled by kid's phone using AndroidAPS.
- Parents can remotely follow seeing all relevant data such as glucose levels, carbs on board, insulin on board etc. using **NSClient app** on their phone. De instellingen in zowel AndroidAPS en in NSClient moeten exact hetzelfde zijn.
- Parents can be alarmed by using **xDrip+ app in follower mode** on their phone.
- Remote control of AndroidAPS using [SMS Commands](../Children/SMS-Commands.md) secured by two-factor authentication.
- Remote control through NSClient app is only recommended if your synchronization is working well (ie. you don’t see unwanted data changes like self modification of TT, TBR etc) see [release notes for Version 2.8.1.1](../Installing-AndroidAPS/Releasenotes.md#important-hints) for further details.

## Hulpmiddelen en apps voor controle op afstand

- [Nightscout](https://nightscout.github.io/) in web browser (mainly data display)
- NSClient app is a stripped down version of AAPS capable of following somebody, making profile switches, setting TTs and entering carbs. There are 2 apps:  [NSClient & NSClient2 to download](https://github.com/nightscout/AndroidAPS/releases/). Het enige verschil is de naam van de app. Op deze manier kun je de app twee keer installeren op dezelfde telefoon, om 2 verschillende personen/nachtscouts te kunnen volgen (bijv. als 2 gezinsleden diabetes hebben).
- Dexcom follow if you are using original Dexcom app (BG values only)
- [xDrip+](../Configuration/xdrip.md) in follower mode (mainly BG values and **alarms**)
- [Sugarmate](https://sugarmate.io/) or [Spike](https://spike-app.com/) on iOS (mainly BG values and **alarms**)

## Belangrijke keuzes vooraf

- Setting the correct [treatment factors](../Getting-Started/FAQ.md#how-to-begin) (basal rate, DIA, ISF...) is difficult for kids, especially when growth hormones are involved.
- De instellingen in zowel AndroidAPS en in NSClient moeten exact hetzelfde zijn.
- Consider time gap between master and follower due to time for up- and download as well as the fact that AAPS master phone will only upload after loop run.
- So take your time to set those correctly and test them in real life with your kid next to you before starting remote monitoring and remote treatment. Schoolvakanties kunnen daar een goed moment voor zijn.
- What is your emergency plan when remote control does not work (i.e. network problems)?
- Remote monitoring and treatment can be really helpful in kinder garden and elementary school. Zorg er dan ook voor dat de docenten en begeleiders kennis hebben van het behandelplan voor je kind. Examples for such care plans can be found in the [files section of AndroidAPS users](https://www.facebook.com/groups/AndroidAPSUsers/files/) on Facebook.
