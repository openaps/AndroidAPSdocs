# 가장 중요한 안전 유의사항

**When you decide to build your own artificial pancreas, it's always important to think about security and safety, and to understand the impact of all your actions**

## 포괄적인 정보

- AndroidAPS is a just a tool to help you manage diabetes, it is not a fully automated system you can install and forget!
- Do not assume that AndroidAPS will never make mistakes. This device is taking control of your insulin delivery: Watch it all the time, understand how it works, and learn how to interpret its actions.
- Remember that, once paired, the phone can instruct the pump to do anything. AndroidAPS 전용으로 폰을 사용하고, 아이가 사용하는 경우에는 AndroidAPS와 필수적인 통신만을 사용합니다. 사용자의 시스템을 방해할 수 있는 트로이 목마, 바이러스 또는 로봇과 같은 악성 소프트웨어를 가져올 수 있는 불필요한 앱이나 게임(!!!)을 설치하지 마십시오.
- Install all security updates provided by your phone manufacturer and Google.
- You might also need to change your diabetes habits as you change your therapy by using a closed loop system. 예를 들어, AndroidAPS가 인슐린 주입을 미리 감소시켜줌에 따라 저혈당 간식이 적게 필요했다고 일부 사용자들은 보고하였습니다.

## SMS 통신기

- AndroidAPS allows you to control a child's phone remotely via text message. SMS 통신기를 활성화 했다면, 원격 명령어를 사용하기 위해 설정된 폰(부모폰)을 도난 맞을 수도 있다는 사실에 항상 유념하셔야 합니다. 따라서 최소한 PIN 코드 이상의 보안으로 폰을 보호하십시오.
- AndroidAPS will also inform you by text message if your remote commands, such as a bolus or a profile change, have been carried out. 수신 폰 중 하나가 도난 당할 경우를 대비하여, 적어도 2개 이상의 다른 폰에 확인 문자 메시지가 전송되도록 설정하는 것을 권장합니다.

## AndroidAPS can also be used by blind people

On Android devices TalkBack is part of the operating system. It is a program for screen orientation via voice output. With TalkBack you can operate your smartphone as well as AndroidAPS blind.

We users create the AndroidAPS app ourselves with Android Studio. Many use Microsoft Windows for this purpose, where there is the Screenreader analogous to TalkBack. Since Android Studio is a Java application, the "Java Access Bridge" component must be enabled in the Control Panel. Otherwise, the screen reader of the PC will not speak in Android Studio.

To do this, please proceed as follows:

- Press WINDOWSTASTE and enter "Control Panel" in the search field, open with Enter. It opens: "All Control Panel Items".
- Press the letter C to get to "Center for Ease of Use", open with Enter.
- Then open "Use computer without a screen" with Enter.
- There, at the bottom, you will find the checkbox "Enable Java Access Bridge", select it.
- Done, just close the window! The screen reader should work now.

```{note}
**IMPORTANT SAFETY NOTICE**

The foundation of AndroidAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. 인슐린 자동 주입 시스템을 사용할 시에는 완벽하게 작동한다고 증명하는 테스트와 FDA 또는 CE 승인을 받은 인슐린 펌프과 CGM만을 사용하는 것이 매우 중요합니다. 이러한 구성요소에 대한 하드웨어 또는 소프트웨어의 변형은 예기치 않은 인슐린 투약을 야기하여 사용자에게 상당한 위험을 초래할 수 있습니다. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AndroidAPS system.

또한, 펌프 또는 CGM을 사용할 때에는 원래 공급되는 물품 즉 제조업자에 의해 승인된 삽입기, 캐뉼러 및 인슐린 용기만을 사용하는 것이 매우 중요합니다. 검증이 되지 않고 변형된 물품을 사용하는 경우에는 CGM의 부정확성과 인슐린의 투약 오류가 발생할 수 있습니다. 인슐린은 남용되면 매우 위험하니 물품들을 해킹하여 사용하는 것과 같이 본인의 목숨을 가지고 노는 행위와 같은 행동들은 삼가해주시기 바랍니다.

마지막으로는  계산할 수 없을 정도로 혈당을 낮추기 때문에 SGLT-2 억제제 (글 리플로 진)을 절대 사용하면 안된다.  혈당을 올리기 위해 기저양(basal rate)을 낮추는 시스템과 병행하는 것은 글 리폴로 진으로 인해 매우 위헙합니다. 오히려 혈당이 오르지 않을 수 있으며 인슐린 부족의 위험한 상태까지 올 수 있습니다.
```
