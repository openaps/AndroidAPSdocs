# Remote monitoring

```{image} ../images/KidsMonitoring.png
:alt: Monitoring children
```

AAPS offer several options for remote monitoring of children and also allows to send remote commands. Of course you can also use remote monitoring to follow your partner or friend.

## Functions

- Kid's pump is controlled by kid's phone using AAPS.
- Parents can remotely follow seeing all relevant data such as glucose levels, carbs on board, insulin on board etc. using **NSClient app** on their phone. Settings must be the same in AAPS and NSClient app.
- Parents can be alarmed by using **xDrip+ app in follower mode** on their phone.
- Remote control of AAPS using [SMS Commands](../Children/SMS-Commands.md) secured by two-factor authentication.
- Remote control through NSClient app is only recommended if your synchronization is working well (ie. you don’t see unwanted data changes like self modification of TT, TBR etc) see [release notes for Version 2.8.1.1](Releasenotes-important-hints-2-8-1-1) for further details.

## Tools and apps for remote monitoring

- [Nightscout](https://nightscout.github.io/) in web browser (mainly data display)
- NSClient app is a stripped down version of AAPS capable of following somebody, making profile switches, setting TTs and entering carbs. There are 2 apps:  [NSClient & NSClient2 to download](https://github.com/nightscout/AndroidAPS/releases/). The only difference is the app name. This way you can install the app twice on the same phone, to be able to follow 2 different persons/nightscouts with it.
- Dexcom follow if you are using original Dexcom app (BG values only)
- [xDrip+](../Configuration/xdrip.md) in follower mode (mainly BG values and **alarms**)
- [Sugarmate](https://sugarmate.io/) or [Spike](https://spike-app.com/) on iOS (mainly BG values and **alarms**)

## Things to consider

- Setting the correct [treatment factors](FAQ-how-to-begin) (basal rate, DIA, ISF...) is difficult for kids, especially when growth hormones are involved.
- Settings must be the same in AAPS and NSClient app.
- Consider time gap between master and follower due to time for up- and download as well as the fact that AAPS master phone will only upload after loop run.
- So take your time to set those correctly and test them in real life with your kid next to you before starting remote monitoring and remote treatment. School holidays might be a good time for that.
- What is your emergency plan when remote control does not work (i.e. network problems)?
- Remote monitoring and treatment can be really helpful in kinder garden and elementary school. But make sure the teachers and educators are aware of your kid's treatment plan. Examples for such care plans can be found in the [files section of AAPS users](https://www.facebook.com/groups/AndroidAPSUsers/files/) on Facebook.
- It is important to keep the kid's phone in range of their pump and CGM at all times. This can be challenging especially with very small children. Many solutions exist, a popular option is an [SPI Belt](https://spibelt.com/collections/kids-belts)
