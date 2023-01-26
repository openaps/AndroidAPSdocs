# 원격 모니터링

```{image} ../images/KidsMonitoring.png
:alt: 아이들 모니터링
```

AndroidAPS는 아이들을 모니터링 하기 위한 몇가지 옵션을 제공하고 원격 명령어를 보낼 수 있다. 물론 동료나 친구들에게도 원격 모니터링을 사용할 수 있다.

## 기능

- Kid's pump is controlled by kid's phone using AndroidAPS.
- Parents can remotely follow seeing all relevant data such as glucose levels, carbs on board, insulin on board etc. using **NSClient app** on their phone. Settings must be the same in AndroidAPS and NSClient app.
- Parents can be alarmed by using **xDrip+ app in follower mode** on their phone.
- Remote control of AndroidAPS using [SMS Commands](../Children/SMS-Commands.md) secured by two-factor authentication.
- Remote control through NSClient app is only recommended if your synchronization is working well (ie. you don’t see unwanted data changes like self modification of TT, TBR etc) see [release notes for Version 2.8.1.1](../Installing-AndroidAPS/Releasenotes.md#important-hints) for further details.

## 원격 모니터링을 위한 도구와 앱

- [Nightscout](https://nightscout.github.io/) in web browser (mainly data display)
- NSClient app is a stripped down version of AAPS capable of following somebody, making profile switches, setting TTs and entering carbs. There are 2 apps:  [NSClient & NSClient2 to download](https://github.com/nightscout/AndroidAPS/releases/). The only difference is the app name. This way you can install the app twice on the same phone, to be able to follow 2 different persons/nightscouts with it.
- Dexcom follow if you are using original Dexcom app (BG values only)
- [xDrip+](../Configuration/xdrip.md) in follower mode (mainly BG values and **alarms**)
- [Sugarmate](https://sugarmate.io/) or [Spike](https://spike-app.com/) on iOS (mainly BG values and **alarms**)

## 고려해야 할 사항

- Setting the correct [treatment factors](../Getting-Started/FAQ.md#how-to-begin) (basal rate, DIA, ISF...) is difficult for kids, especially when growth hormones are involved.
- Settings must be the same in AndroidAPS and NSClient app.
- Consider time gap between master and follower due to time for up- and download as well as the fact that AAPS master phone will only upload after loop run.
- So take your time to set those correctly and test them in real life with your kid next to you before starting remote monitoring and remote treatment. 방학은 그것들을 정하기에 좋은 시간이 될 것이다.
- What is your emergency plan when remote control does not work (i.e. network problems)?
- Remote monitoring and treatment can be really helpful in kinder garden and elementary school. 그러나 선생님과 교육자들이 아이의 관리 계획을 인지하고 있는지 확인해야 한다. Examples for such care plans can be found in the [files section of AndroidAPS users](https://www.facebook.com/groups/AndroidAPSUsers/files/) on Facebook.
