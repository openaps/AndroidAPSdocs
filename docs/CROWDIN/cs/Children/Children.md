# Vzdálené monitorování

```{image} ../images/KidsMonitoring.png
:alt: Monitorování dětí
```

AAPS offer several options for remote monitoring of children and also allows to send remote commands. Of course you can also use remote monitoring to follow your partner or friend.

## Funkce

- Kid's pump is controlled by kid's phone using AAPS.
- Parents can remotely follow seeing all relevant data such as glucose levels, carbs on board, insulin on board etc. using **NSClient app** on their phone. Settings must be the same in AAPS and NSClient app.
- Rodiče mohou být na svém mobilu varováni alarmy v aplikaci **xDrip v režimu follower**.
- Remote control of AAPS using [SMS Commands](../Children/SMS-Commands.md) secured by two-factor authentication.
- Remote control through NSClient app is only recommended if your synchronization is working well (ie. you don’t see unwanted data changes like self modification of TT, TBR etc) see [release notes for Version 2.8.1.1](Releasenotes-important-hints-2-8-1-1) for further details.

## Nástroje a aplikace pro vzdálené monitorování

- [Nightscout](https://nightscout.github.io/) v prohlížeči (hlavně zobrazení dat)
- Aplikace NSClient je zjednodušená verze AAPS, která umožňuje někoho sledovat, přepínat profily, nastavovat dočas. cíle a zadávat sacharidy. There are 2 apps:  [NSClient & NSClient2 to download](https://github.com/nightscout/AndroidAPS/releases/). Jediný rozdíl mezi nimi spočívá v jiném názvu. Slouží k tomu, abyste mohli mít v telefonu dvě různé instance téže aplikace, pokud potřebujete sledovat 2 různé osoby/nightscouty.
- Dexcom follow, pokud používáte originální aplikaci Dexcom (pouze hodnoty glykémie)
- [xDrip+](../Configuration/xdrip.md) v režimu follower (hlavně hodnoty BG a **alarmy**)
- [Sugarmate](https://sugarmate.io/) nebo [Spike](https://spike-app.com/) na iOS (hlavně hodnoty glykémií a **alarmy**)

## Smartwatch options

A smartwatch can be a very useful tool in helping manage AAPS with kids. A couple of different configurations are possible:

- If NSClient is installed on the parents phone, the [NSClient WearOS app](https://github.com/nightscout/AndroidAPS/releases/) can be installed on a compatible smartwatch connected to the parent's phone. This will show current BG, loop status and allow carb entry, temp targets and profile changes. It will NOT allow bolusing from the WearOS app.
- Alternatively, the [AAPS WearOS app](https://androidaps.readthedocs.io/en/latest/Configuration/Watchfaces.html) can be built and installed on a compatible smartwatch, connected to the kid's phone but worn by the parent. This includes all the functions listed above as well as the ability to bolus insulin. This allows the parent to adminster insulin without needing to remove the kid's phone from however it is kept on them.

## Co je třeba zvážit

- Setting the correct [treatment factors](FAQ-how-to-begin) (basal rate, DIA, ISF...) is difficult for kids, especially when growth hormones are involved.
- Settings must be the same in AAPS and NSClient app.
- Vezměte v úvahu časový rozdíl mezi hlavním a sledujícím zařízením způsobený časem potřebným k nahrávání a stahování, a také skutečnost, že hlavní AAPS telefon bude nahrávat pouze po spuštění smyčky.
- Takže si dejte načas a nastavte je správně a otestujte je v reálném životě se svým dítětem vedle sebe ještě předtím, než začnete se vzdáleným monitorováním a řízením na dálku. Ideální dobou pro jejich nastavení a otestování by mohly být školní prázdniny.
- What is your emergency plan when remote control does not work (i.e. network problems)?
- Vzdálené monitorování a řízení může být opravdu užitečné ve školce a na základní škole. Ujistěte se však, že učitelé a pedagogové jsou si vědomi plánu léčby vašich dětí. Examples for such care plans can be found in the [files section of AAPS users](https://www.facebook.com/groups/AndroidAPSUsers/files/) on Facebook.
- It is important to keep the kid's phone in range of their pump and CGM at all times. This can be challenging especially with very small children. Many solutions exist, a popular option is an [SPI Belt](https://spibelt.com/collections/kids-belts)
