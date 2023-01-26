# Monitorização remota

```{image} ../images/KidsMonitoring.png
:alt: Monitorizando crianças
```

AndroidAPS oferece várias opções para monitorização remota de crianças e também permite enviar comandos remotos. É claro que também é possível usar a monitorização remota para seguir o seu parceiro ou amigo.

## Funções

- Kid's pump is controlled by kid's phone using AndroidAPS.
- Parents can remotely follow seeing all relevant data such as glucose levels, carbs on board, insulin on board etc. using **NSClient app** on their phone. As configurações devem ser as mesmas na AndroidAPS e no NSClient.
- Parents can be alarmed by using **xDrip+ app in follower mode** on their phone.
- Remote control of AndroidAPS using [SMS Commands](../Children/SMS-Commands.md) secured by two-factor authentication.
- Remote control through NSClient app is only recommended if your synchronization is working well (ie. you don’t see unwanted data changes like self modification of TT, TBR etc) see [release notes for Version 2.8.1.1](../Installing-AndroidAPS/Releasenotes.md#important-hints) for further details.

## Ferramentas e aplicações para monitorização remota

- [Nightscout](https://nightscout.github.io/) in web browser (mainly data display)
- NSClient app is a stripped down version of AAPS capable of following somebody, making profile switches, setting TTs and entering carbs. There are 2 apps:  [NSClient & NSClient2 to download](https://github.com/nightscout/AndroidAPS/releases/). A única diferença é o nome da app. Desta forma pode instalar a app duas vezes no mesmo telefone, para poder seguir 2 pessoas / nightscouts diferentes com elas.
- Dexcom follow if you are using original Dexcom app (BG values only)
- [xDrip+](../Configuration/xdrip.md) in follower mode (mainly BG values and **alarms**)
- [Sugarmate](https://sugarmate.io/) or [Spike](https://spike-app.com/) on iOS (mainly BG values and **alarms**)

## Considerações a ter

- Setting the correct [treatment factors](../Getting-Started/FAQ.md#how-to-begin) (basal rate, DIA, ISF...) is difficult for kids, especially when growth hormones are involved.
- As configurações devem ser as mesmas na AndroidAPS e no NSClient.
- Consider time gap between master and follower due to time for up- and download as well as the fact that AAPS master phone will only upload after loop run.
- So take your time to set those correctly and test them in real life with your kid next to you before starting remote monitoring and remote treatment. As férias escolares podem ser uma boa ocasião para isso.
- What is your emergency plan when remote control does not work (i.e. network problems)?
- Remote monitoring and treatment can be really helpful in kinder garden and elementary school. Mas certifique-se de que os professores e educadores estão a par do plano de tratamento da sua criança. Examples for such care plans can be found in the [files section of AndroidAPS users](https://www.facebook.com/groups/AndroidAPSUsers/files/) on Facebook.
