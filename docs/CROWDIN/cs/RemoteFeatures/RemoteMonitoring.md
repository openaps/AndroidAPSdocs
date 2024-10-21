# Vzdálené monitorování

![Monitorování dětí](../images/KidsMonitoring.png)

AAPS nabízí několik možností pro vzdálené monitorování dětí a také umožňuje odesílání vzdálených příkazů. Samozřejmě můžete také použít vzdálené monitorování, abyste sledovali svého partnera nebo přítele.

## Funkce

- Pumpa dítěte je řízena z telefonu dítěte používajícího AAPS.
- Rodiče mohou vzdáleně sledovat všechny relevantní údaje jako např. hladiny glukózy, aktivní sacharidy aktivní inzulín atd. pomocí **aplikace AAPSClient** na svém telefonu. Nastavení v AAPS i AAPSClientu musí být stejné.
- Rodiče mohou být na svém mobilu varováni alarmy v aplikaci **xDrip v režimu follower**.
- Remote control of AAPS using [SMS Commands](../RemoteFeatures/SMSCommands.md) secured by two-factor authentication.
- Remote control through AAPSClient app is only recommended if your synchronization is working well (ie. you don’t see unwanted data changes like self modification of TT, TBR etc) see [release notes for Version 2.8.1.1](../Maintenance/ReleaseNotes.md#version-2811) for further details.

## Nástroje a aplikace pro vzdálené monitorování

- [Nightscout](https://nightscout.github.io/) v prohlížeči (hlavně zobrazení dat)
- Aplikace AAPSClient je zjednodušená verze AAPS, která umožňuje někoho sledovat, přepínat profily, nastavovat dočas. cíle a zadávat sacharidy. K dispozici ke stažení jsou 2 tyto aplikace:  [AAPSClient & AAPSClient2](https://github.com/nightscout/AndroidAPS/releases/). Jediný rozdíl mezi nimi spočívá v jiném názvu. Slouží k tomu, abyste mohli mít v telefonu dvě různé instance téže aplikace, pokud potřebujete sledovat 2 různé osoby/nightscouty.
- Dexcom follow, pokud používáte originální aplikaci Dexcom (pouze hodnoty glykémie)
- [xDrip+](../CompatibleCgms/xDrip.md) in follower mode (mainly BG values and **alarms**)
- [Sugarmate](https://sugarmate.io/) nebo [Spike](https://spike-app.com/) na iOS (hlavně hodnoty glykémií a **alarmy**)
- Někteří uživatelé používají pro plnohodnotný vzdálený přístup aplikace jako je [TeamViewer](https://www.teamviewer.com/), který je užitečný i pro pokročilé řešení problémů na dálku

## Možnosti chytrých hodinek

Když máte děti, mohou být chytré hodinky velmi užitečným nástrojem pro ovládání AAPS. K dispozici je několik možností:

- Je-li na telefonu rodičů nainstalován AAPSClient, lze na kompatibilní chytré hodinky připojené k rodičovskému telefonu nainstalovat [aplikaci AAPSClient pro WearOS](https://github.com/nightscout/AndroidAPS/releases/). Na hodinkách pak bude zoubrazována aktuální glykémiie, stav smyčky, a bude možné zadávat sacharidy, dočasné cíle a změny profilu. Z aplikace WearOS ale nebude možné posílat bolusy.
- Alternatively, the [AAPS WearOS app](../UsefulLinks/WearOsSmartwatch.md) can be built and installed on a compatible smartwatch, connected to the kid's phone but worn by the parent. Takto lze využít všechny funkce popsané v předchozím případě, ale navíc lze posílat i bolusy. To umožňuje rodičům ovládat vydávání inzulínu bez toho, aby museli dítěti brát mobilní telefon.

## Co je třeba zvážit

- Setting the correct [treatment factors](../UsefulLinks/FAQ.md#how-to-begin) (basal rate, DIA, ISF...) is difficult for kids, especially when growth hormones are involved.
- Nastavení v AAPS i AAPSClientu musí být stejné.
- Vezměte v úvahu časový rozdíl mezi hlavním a sledujícím zařízením způsobený časem potřebným k nahrávání a stahování, a také skutečnost, že hlavní AAPS telefon bude nahrávat pouze po spuštění smyčky.
- Takže si dejte načas a nastavte je správně a otestujte je v reálném životě se svým dítětem vedle sebe ještě předtím, než začnete se vzdáleným monitorováním a řízením na dálku. Ideální dobou pro jejich nastavení a otestování by mohly být školní prázdniny.
- Jaký je váš nouzový plán, když vzdálené ovládání nefunguje (např. síťové problémy)?
- Vzdálené monitorování a řízení může být opravdu užitečné ve školce a na základní škole. Ujistěte se však, že učitelé a pedagogové jsou si vědomi plánu léčby vašich dětí. Příklady takových plánů péče najdete v sekci [soubory uživatelů AAPS](https://www.facebook.com/groups/AndroidAPSUsers/files/) na Facebooku.
- Je velmi důležité neustále udržovat mobilní telefon dítěte v dosahu jejich pumpy a CGM. Zvláště u velmi malých dětí to může být opravdu náročné. Existuje mnoho řešení, oblíbená volba jsou třeba [ledvinky](https://spibelt.com/collections/kids-belts)
