# Dexcom G6 a ONE

## Najprv základy

-   Riaďte sa všeobecnými odporúčaniami pre hygienu CGM a zavádzanie senzora [tu](../CompatibleCgms/GeneralCGMRecommendation.md).

## Všeobecné rady pre používanie okruhu s G6 a ONE

- Novšie vysielače sa volajú Firefly. Senzory sa nedajú reštartovať bez vybratia vysielača, ktorý sám nemožno resetovať, a tieto vysielače ani neposkytujú surové (raw) dáta.

- Ak senzory reštartujete, buďte pripravení kalibrovať a sledujte odchýlky.

- Zavedenie G6/ONE s továrenskou kalibráciou vopred (pre-soak) pravdepodobne povedie ku kolísaniu výsledkov. Ak senzor zavádzate vopred (pre-soak), na dosiahnutie najlepších výsledkov ho pravdepodobne budete musieť kalibrovať.

Viac sa dočítate v [článku](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/), ktorý publikoval Tim Street na [www.diabettech.com](https://www.diabettech.com).

## Ak používate G6 alebo ONE s xDrip

- Ak ho ešte nemáte, stiahnite si [xDrip](https://github.com/NightscoutFoundation/xDrip) a upravte jeho nastavenia podľa stránky [Nastavenia xDrip](../CompatibleCgms/xDrip.md).
- Vyberte xDrip v [**Konfigurácia → Zdroj glykémie**](#Config-Builder-bg-source).
- Vysielače Dexcom G6 a ONE môžu byť súčasne pripojené k prijímaču Dexcom (alebo k pumpe t:slim) a k jednej aplikácii v telefóne.
- Keď používate xDrip ako prijímač, najprv odinštalujte aplikáciu Dexcom. **Nemôžete naraz pripojiť xDrip aj aplikáciu Dexcom k vysielaču!**
- Ak potrebujete Clarity a chcete využívať alarmy xDrip, použite [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (iba G6) s lokálnym vysielaním do xDrip.
- xDrip môžete použiť aj ako sprievodnú aplikáciu (companion) k oficiálnej aplikácii Dexcom, ale hodnoty glykémie môžu prichádzať s oneskorením.
- Pri súčasných vysielačoch xDrip vždy používa [natívny algoritmus](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) vysielača; nie je dôvod ho vypínať. [Preventívne reštarty](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) fungujú iba so starými vysielačmi (firmvér 1.6.5.25 alebo starší), kde sú potrebné, aby sa senzor nezastavil po 10 dňoch; novšie vysielače (Firefly) ich ignorujú. Pred akýmkoľvek reštartom si pozrite [Reštart senzora](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html).
- Všetko, čo sa týka samotného senzora a vysielača, je popísané na [stránke xDrip pre Dexcom](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Ak používate G6 s aplikáciou Build Your Own Dexcom App

```{admonition} Old app version
:class: warning
Dexcom BYODA je teraz veľmi stará verzia aplikácie a nedá sa aktualizovať.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) podporuje lokálne vysielanie do AAPS a/alebo xDrip

-   Táto aplikácia vám umožní používať Dexcom G6 s akýmkoľvek smartfónom s Androidom.
-   Odinštalujte pôvodnú aplikáciu Dexcom alebo upravenú aplikáciu Dexcom, ak ste niektorú z nich predtým používali (aktuálne bežiaci senzor **nezastavujte**)
-   Nainštalujte stiahnutý súbor apk
-   V upravenej aplikácii zadajte kód senzora a sériové číslo vysielača.
-   V nastaveniach telefónu choďte do aplikácie > Dexcom G6 > povolenia > ďalšie povolenia a stlačte 'Access Dexcom app'.
-   Po krátkom čase by BYODA mala zachytiť signál vysielača.

### Nastavenia pre AAPS

-   Vyberte **BYODA** v [**Konfigurácia → Zdroj glykémie**](#Config-Builder-bg-source).

-   Ak nedostávate žiadne hodnoty, vyberte akýkoľvek iný zdroj dát a potom znova vyberte **BYODA**, aby sa znova vyžiadali povolenia na vytvorenie spojenia medzi AAPS a vysielaním BYODA.

### Nastavenia pre xDrip

-   Ako zdroj dát vyberte '640G/Eversense'.
-   Aby ste dostávali hodnoty, musíte v xDrip vykonať príkaz 'start sensor'. Nebude to mať vplyv na váš aktuálny senzor, ktorý ovláda Build Your Own Dexcom App.


(DexcomG6-troubleshooting-g6)=
## Riešenie problémov s G6 a ONE

### Riešenie problémov špecifických pre Dexcom G6/ONE

-   Posuňte sa nadol na časť **Troubleshooting** [tu](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Všeobecné riešenie problémov

Všeobecné riešenie problémov s CGM nájdete [tu](#general-cgm-troubleshooting).

### Nový vysielač s bežiacim senzorom

Ak potrebujete vymeniť vysielač počas bežiacej relácie senzora, môžete skúsiť vysielač vybrať bez poškodenia držiaka senzora. Video nájdete [tu](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Ak sa namiesto toho rozhodnete pre [toto riešenie](https://youtu.be/tx-kTsrkNUM), musíte dávať pozor, aby ste pásikom [nepoškodili kontakty senzora](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html).
