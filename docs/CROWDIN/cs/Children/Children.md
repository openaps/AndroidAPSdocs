# Vzdálené monitorování

```{image} ../images/KidsMonitoring.png
:alt: Monitorování dětí
```

AndroidAPS nabízí několik možností pro vzdálené monitorování dětí a také umožňuje odesílání vzdálených příkazů. Samozřejmě můžete také použít vzdálené monitorování, abyste sledovali svého partnera nebo přítele.

## Funkce

- Pumpa dítěte je řízena z telefonu dítěte používajícího AndroidAPS.
- Parents can remotely follow seeing all relevant data such as glucose levels, carbs on board, insulin on board etc. using **NSClient app** on their phone. Nastavení v AndroidAPS i NSClientu musí být stejné.
- Rodiče mohou být na svém mobilu varováni alarmy v aplikaci **xDrip v režimu follower**.
- Vzdálené ovládání AndroidAPS pomocí [SMS příkazů](../Children/SMS-Commands.md) je zabezpečeno dvoufaktorovým ověřením.
- Remote control through NSClient app is only recommended if your synchronization is working well (ie. you don’t see unwanted data changes like self modification of TT, TBR etc) see [release notes for Version 2.8.1.1](Releasenotes-important-hints-2-8-1-1) for further details.

## Nástroje a aplikace pro vzdálené monitorování

- [Nightscout](https://nightscout.github.io/) v prohlížeči (hlavně zobrazení dat)
- Aplikace NSClient je zjednodušená verze AAPS, která umožňuje někoho sledovat, přepínat profily, nastavovat dočas. cíle a zadávat sacharidy. There are 2 apps:  [NSClient & NSClient2 to download](https://github.com/nightscout/AndroidAPS/releases/). Jediný rozdíl mezi nimi spočívá v jiném názvu. Slouží k tomu, abyste mohli mít v telefonu dvě různé instance téže aplikace, pokud potřebujete sledovat 2 různé osoby/nightscouty.
- Dexcom follow, pokud používáte originální aplikaci Dexcom (pouze hodnoty glykémie)
- [xDrip+](../Configuration/xdrip.md) v režimu follower (hlavně hodnoty BG a **alarmy**)
- [Sugarmate](https://sugarmate.io/) nebo [Spike](https://spike-app.com/) na iOS (hlavně hodnoty glykémií a **alarmy**)

## Co je třeba zvážit

- Setting the correct [treatment factors](FAQ-how-to-begin) (basal rate, DIA, ISF...) is difficult for kids, especially when growth hormones are involved.
- Nastavení v AndroidAPS i NSClientu musí být stejné.
- Vezměte v úvahu časový rozdíl mezi hlavním a sledujícím zařízením způsobený časem potřebným k nahrávání a stahování, a také skutečnost, že hlavní AAPS telefon bude nahrávat pouze po spuštění smyčky.
- Takže si dejte načas a nastavte je správně a otestujte je v reálném životě se svým dítětem vedle sebe ještě předtím, než začnete se vzdáleným monitorováním a řízením na dálku. Ideální dobou pro jejich nastavení a otestování by mohly být školní prázdniny.
- What is your emergency plan when remote control does not work (i.e. network problems)?
- Vzdálené monitorování a řízení může být opravdu užitečné ve školce a na základní škole. Ujistěte se však, že učitelé a pedagogové jsou si vědomi plánu léčby vašich dětí. Examples for such care plans can be found in the [files section of AndroidAPS users](https://www.facebook.com/groups/AndroidAPSUsers/files/) on Facebook.
