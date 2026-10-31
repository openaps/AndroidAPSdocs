# Dexcom G6 a ONE

## Nejdříve základy

-   Obecná doporučení pro hygienu CGM a zavádění senzoru najdete [zde](../CompatibleCgms/GeneralCGMRecommendation.md).

## Obecné rady pro smyčku s G6 a ONE

- Novější vysílače se nazývají Firefly. Senzory nelze restartovat bez odebrání vysílače, který sám resetovat nelze, a navíc negenerují surová data.

- Pokud senzory restartujete, buďte připraveni kalibrovat a sledujte odchylky.

- Nastřelení senzoru G6/ONE s předstihem (pre-soak) při tovární kalibraci pravděpodobně povede k odchylkám v hodnotách. Jestliže nastřelujete senzor s předstihem, pak jej pravděpodobně v zájmu co nejlepších výsledků bude nutné zkalibrovat.

Více si přečtěte v [článku](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/), který publikoval Tim Street na [www.diabettech.com](https://www.diabettech.com).

## Pokud používáte G6 nebo ONE s xDrip

- Pokud ještě nemáte xDrip nastavený, stáhněte si [xDrip](https://github.com/NightscoutFoundation/xDrip) a upravte jeho nastavení podle stránky [Nastavení xDrip](../CompatibleCgms/xDrip.md).
- Vyberte xDrip v [**Konfigurace → Zdroj glykémie**](#Config-Builder-bg-source).
- Vysílače Dexcom G6 a ONE mohou být současně spojeny s přijímačem Dexcom (nebo místo něj s pumpou t:slim) a s jednou aplikací v telefonu.
- Když používáte xDrip jako přijímač, nejdříve odinstalujte aplikaci Dexcom. **Nemůžete mít s vysílačem spojený xDrip a aplikaci Dexcom současně!**
- Pokud potřebujete Clarity a chcete využít alarmy xDrip, použijte [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (jen G6) s místním vysíláním do xDrip.
- xDrip můžete také používat jako doprovodnou aplikaci k oficiální aplikaci Dexcom, ale hodnoty glykémie mohou přicházet se zpožděním.
- xDrip se současnými vysílači vždy používá [nativní algoritmus](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) vysílače; není důvod ho vypínat. [Preventivní restarty](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) fungují jen se starými vysílači (firmware 1.6.5.25 nebo starší), kde jsou potřeba, aby se senzor nezastavil po 10 dnech; novější vysílače (Firefly) je ignorují. Než se o restart pokusíte, přečtěte si [Restart a sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html).
- Vše, co se týká samotného senzoru a vysílače, je popsáno na [stránce xDrip pro Dexcom](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Pokud chcete použít G6 s vlastní vytvořenou upravenou Dexcom aplikací

```{admonition} Old app version
:class: warning
Dexcom BYODA je nyní velmi stará verze aplikace a nelze ji aktualizovat.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) podporuje místní vysílání do AAPS a/nebo xDrip

-   Tato aplikace vám umožní používat vysílač Dexcom G6 s libovolným telefonem s Androidem.
-   Odinstalujte originální aplikaci Dexcom nebo upravenou aplikaci Dexcom, pokud jste některou z nich dříve používali (aktuálně běžící senzor **nezastavujte**)
-   Nainstalujte stažený soubor apk
-   V upravené aplikaci zadejte kód senzoru a sériové číslo vysílače.
-   V nastavení telefonu jděte do Aplikace > Dexcom G6 > Oprávnění > Další oprávnění a stiskněte „Access Dexcom app“.
-   Po krátkém čase by BYODA měla zachytit signál vysílače.

### Nastavení pro AAPS

-   Vyberte **BYODA** v [**Konfigurace → Zdroj glykémie**](#Config-Builder-bg-source).

-   Pokud nedostáváte žádné hodnoty, vyberte jakýkoli jiný zdroj dat a pak znovu vyberte **BYODA**, aby se znovu zobrazila žádost o oprávnění, která propojí AAPS a vysílání z BYODA.

### Nastavení xDrip

-   Jako zdroj dat vyberte '640G/Eversense'.
-   Abyste dostávali hodnoty, musíte v xDrip provést příkaz „start sensor“. Toto neovlivní aktuální senzor ovládaný vaší upravenou Dexcom aplikací.


(DexcomG6-troubleshooting-g6)=
## Řešení problémů s G6 a ONE

### Řešení problémů specifických pro Dexcom G6/ONE

-   Sjeďte dolů k části **Troubleshooting** [zde](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Obecné řešení problémů

Obecné řešení problémů s CGM najdete [zde](#general-cgm-troubleshooting).

### Nový vysílač se spuštěným senzorem

Pokud se stane, že budete měnit vysílač na spuštěném senzoru, pokuste se odejmout vysílač, aniž byste poškodili samotný senzor. Video najdete [zde](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Pokud místo toho zvolíte [toto řešení](https://youtu.be/tx-kTsrkNUM), musíte dávat pozor, abyste proužkem [nepoškodili kontakty senzoru](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html).
