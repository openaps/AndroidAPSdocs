# Vzdálené monitorování

![Monitorování dětí](../images/KidsMonitoring.png)

AAPS nabízí několik možností pro vzdálené monitorování dětí a také umožňuje odesílání vzdálených příkazů. Samozřejmě můžete také použít vzdálené monitorování, abyste sledovali svého partnera nebo přítele.

## Funkce

- Pumpa dítěte je řízena z telefonu dítěte používajícího AAPS.
- Parents can remotely follow seeing all relevant data such as glucose levels, carbs on board, insulin on board etc. using **AAPSClient app** on their phone. Settings must be the same in AAPS and AAPSClient app.
- Rodiče mohou být na svém mobilu varováni alarmy v aplikaci **xDrip v režimu follower**.
- Vzdálené ovládání AAPS pomocí [SMS příkazů](../Children/SMS-Commands.md) je zabezpečeno dvoufaktorovým ověřením.
- Remote control through AAPSClient app is only recommended if your synchronization is working well (ie. you don’t see unwanted data changes like self modification of TT, TBR etc) see [release notes for Version 2.8.1.1](Releasenotes-important-hints-2-8-1-1) for further details.

## Nástroje a aplikace pro vzdálené monitorování

- [Nightscout](https://nightscout.github.io/) v prohlížeči (hlavně zobrazení dat)
- AAPSClient app is a stripped down version of AAPS capable of following somebody, making profile switches, setting TTs and entering carbs. There are 2 apps:  [AAPSClient & AAPSClient2 to download](https://github.com/nightscout/AndroidAPS/releases/). Jediný rozdíl mezi nimi spočívá v jiném názvu. Slouží k tomu, abyste mohli mít v telefonu dvě různé instance téže aplikace, pokud potřebujete sledovat 2 různé osoby/nightscouty.
- Dexcom follow, pokud používáte originální aplikaci Dexcom (pouze hodnoty glykémie)
- [xDrip+](../Configuration/xdrip.md) v režimu follower (hlavně hodnoty BG a **alarmy**)
- [Sugarmate](https://sugarmate.io/) nebo [Spike](https://spike-app.com/) na iOS (hlavně hodnoty glykémií a **alarmy**)
- Někteří uživatelé používají pro plnohodnotný vzdálený přístup aplikace jako je [TeamViewer](https://www.teamviewer.com/), který je užitečný i pro pokročilé řešení problémů na dálku

## Možnosti chytrých hodinek

Když máte děti, mohou být chytré hodinky velmi užitečným nástrojem pro ovládání AAPS. K dispozici je několik možností:

- If AAPSClient is installed on the parents phone, the [AAPSClient WearOS app](https://github.com/nightscout/AndroidAPS/releases/) can be installed on a compatible smartwatch connected to the parent's phone. Na hodinkách pak bude zoubrazována aktuální glykémiie, stav smyčky, a bude možné zadávat sacharidy, dočasné cíle a změny profilu. Z aplikace WearOS ale nebude možné posílat bolusy.
- Alternativně může být [AAPS WearOS aplikace](https://androidaps.readthedocs.io/en/latest/Configuration/Watchfaces.html) sestavena a nainstalována na kompatibilní chytré hodinky připojené k telefonu dítěte, ale nosí je rodič. Takto lze využít všechny funkce popsané v předchozím případě, ale navíc lze posílat i bolusy. To umožňuje rodičům ovládat vydávání inzulínu bez toho, aby museli dítěti brát mobilní telefon.

## Co je třeba zvážit

- Nastavení správných [parametrů léčby](FAQ-how-to-begin) (bazální dávka, DIA, ISF...) je u dětí velmi obtížné, zvláště když se dostanou do věku, kdy léčbu ovlivují růstové hormony.
- Settings must be the same in AAPS and AAPSClient app.
- Vezměte v úvahu časový rozdíl mezi hlavním a sledujícím zařízením způsobený časem potřebným k nahrávání a stahování, a také skutečnost, že hlavní AAPS telefon bude nahrávat pouze po spuštění smyčky.
- Takže si dejte načas a nastavte je správně a otestujte je v reálném životě se svým dítětem vedle sebe ještě předtím, než začnete se vzdáleným monitorováním a řízením na dálku. Ideální dobou pro jejich nastavení a otestování by mohly být školní prázdniny.
- Jaký je váš nouzový plán, když vzdálené ovládání nefunguje (např. síťové problémy)?
- Vzdálené monitorování a řízení může být opravdu užitečné ve školce a na základní škole. Ujistěte se však, že učitelé a pedagogové jsou si vědomi plánu léčby vašich dětí. Příklady takových plánů péče najdete v sekci [soubory uživatelů AAPS](https://www.facebook.com/groups/AndroidAPSUsers/files/) na Facebooku.
- Je velmi důležité neustále udržovat mobilní telefon dítěte v dosahu jejich pumpy a CGM. Zvláště u velmi malých dětí to může být opravdu náročné. Existuje mnoho řešení, oblíbená volba jsou třeba [ledvinky](https://spibelt.com/collections/kids-belts)
