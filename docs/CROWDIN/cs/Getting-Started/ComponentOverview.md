# Přehled komponent

AAPS is not just a (self-built) application, it is just one of several modules of your closed loop system. Before deciding for components, it would be a good idea to have a look at the [component setup](index-component-setup), too.

![Components overview](../images/modules.png)

```{note}
**IMPORTANT SAFETY NOTICE**

The foundation of AAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. Je zásadně důležité, abyste používali pouze testované, plně funkční a pro uzavřenou smyčku schválené inzulinové pumpy a CGM. Hardwarové nebo softwarové úpravy těchto komponent mohou způsobit neočekávané dávkování inzulínu, což může znamenat pro uživatele významné riziko. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AAPS system.

Kromě toho je stejně důležité používat pouze originální spotřební materiál, jako jsou sety a zásobníky, schválené výrobcem pro použití s vaší pumpou nebo CGM. Použití nevyzkoušeného nebo upraveného spotřebního materiálu může způsobit nepřesnosti a chyby při dodávce inzulínu. Inzulín je velmi nebezpečný, když není dávkovaný správně – prosím, nehazardujte se svým životem tím, že budete upravovat spotřební materiál.

V neposlední řadě nesmíte užívat SGLT-2 inhibitory (glifloziny), které snižují hadinu cukru v krvi.  Kombinace se systémem, která snižuje bazální hodnoty ke zvýšení glykémie je zvláště nebezpečná, protože v důsledku gliflozinu tento nárůst glykémie nemusí nastat a může dojít k nebezpečnému stavu nedostatku inzulínu.
```

## Nezbytné moduly

### Správný individuální algoritmus dávkování pro léčbu vašeho diabetu

I když to není něco, co by bylo možné vytvořit nebo koupit, je to "modul", který je pravděpodobně nejvíce podceňován, je však nejdůležitější. Když necháte algoritmus zasahovat do léčby vašeho diabetu, musí znát správná nastavení, aby nedělal vážné chyby. I když vám stále chybí další moduly, již nyní můžete ve spolupráci se svým diabetologem ověřit a upravit svůj 'profil'. Většina uživatelů uzavřené smyčky používá cirkadiánní bazální dávkování, citlivost a sacharidový poměr, které se přizpůsobují hormonální aktivitě inzulinu v průběhu dne.

Součástí profilu je

- BR (bazální dávky)
- ISF (citlivost na inzulin) - hodnota, o kolik klesne glykémie po podání jedné jednotky inuzlinu
- CR (sacharidový poměr) je množství sacharidů v gramech na jednu jednotku inzulinu
- DIA (doba působnosti inzulinu).

(module-no-use-of-sglt-2-inhibitors)=
### Nepoužívat inhibitory SGLT-2

Inhibitory SGLT-2, též nazývané glifloziny, inhibují reabsorpci glukózy v ledvinách. As they incalculably lower blood sugar levels, you MUST NOT take them while using a closed loop system like AAPS! Bylo by obrovské riziko ketoacidózy nebo hypoglykémií! Kombinace této léčby se systémem, která snižuje bazální hodnoty ke zvýšení glykémie je zvláště nebezpečná, protože v důsledku gliflozinu tento nárůst glykémie nemusí nastat a může dojít k nebezpečnému stavu nedostatku inzulínu.

(module-phone)=
### Telefon

The current version of AAPS requires an Android smartphone with Google Android 9.0 or above. So if you are thinking about a new phone, Android 9 is recommended at a minimum but optimally choose Android 10 or 12. For older Android versions, older AAPS versions are available see: [Release notes](../Maintenance/ReleaseNotes.md#android-version-and-aaps-version)

Uživatelé vytvořili [seznam otestovaných telefonů a hodinek](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing)

**Ostatní pumpy**, které potenciálně mohou fungovat s AndroidAPS, jsou uvedeny na stránce [Pumpy potenciálně použitelné v budoucnu](../Getting-Started/Future-possible-Pump-Drivers.md).

Any problems with the spreadsheet please send an email to [hardware@androidaps.org](mailto:hardware@androidaps.org), any donations of phone/watch models that still need testing please send an email to [donations@androidaps.org](mailto:hardware@androidaps.org).

### Inzulinová pumpa

AAPS **currently** works with

- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump.md)  (Old driver that uses the additional Ruffy app)
- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) (New driver, available starting with AndroidAPS v.3.2)
- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)
- [DanaR](../CompatiblePumps/DanaR-Insulin-Pump.md)
- [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md)
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md)
- [Diaconn G8 ](../CompatiblePumps/DiaconnG8.md)
- [EOPatch2](../CompatiblePumps/EOPatch2.md)
- [Omnipod Eros](../CompatiblePumps/OmnipodEros.md)  ([additional communication device](#additional-communication-device) needed)
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md)
- [Medtrum Nano](../CompatiblePumps/MedtrumNano.md)
- [Medtrum 300U](../CompatiblePumps/MedtrumNano.md)
- Certain older [Medtronic](../CompatiblePumps/MedtronicPump.md) ([additional communication device](#additional-communication-device) needed)

If no additional communication device  is mentioned the communication betweeen insulin pump and AAPS is based on the integrated bluetooth stack of Android without the need of an additional communication device to translate the communnication protocol.

**Other pumps** that may have the potential to work with AAPS are listed on the [Future (possible) Pumps](../CompatiblePumps/Future-possible-Pump-Drivers.md) page.

(module-additional-communication-device)=
#### Přídavná komunikační zařízení

Pro staré pumpy Medtronic je potřeba přídavné komunikační zařízení (spojené s telefonem), aby dělalo "tlumočníka" překládajícího rádiový signál z pumpy na bluetooth pro komunikaci s telefonem. Nezapomeňte vybrat správné zařízení, které odpovídá vaší pumpě.

- ![OrangeLink](../images/omnipod/OrangeLink.png)  [OrangeLink Website](https://getrileylink.org/product/orangelink)
- ![RileyLink](../images/omnipod/RileyLink.png) [433MHz RileyLink](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  [Emalink Website](https://github.com/sks01/EmaLink) - [Contact Info](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Contact Info](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [LoopLink Website](https://www.getlooplink.org/) - [Contact Info](https://jameswedding.substack.com/) - Untested

**So what's the best pump for looping with AAPS?**

Combo, Insight a starší pumpy Medtronic jsou dobré pumpy, které lze používat se smyčkou. Combo má také výhodu v podobě mnohem většího počtu typů infuzních setů se standardním závitem luer lock. A baterie je obyčejná, kterou můžete koupit na každé benzínce, v obchodě který má otevřeno 24 hodin denně a pokud opravdu jednu potřebujete, můžete ji ukrást/půjčit si ji z ovládání v hotelovém pokoji ;-)

Další informace o konfiguraci Nightscoutu pro použití s AndroidAPS najdete [zde](../Installing-AndroidAPS/Nightscout.md).

- The Dana pumps connect to almost any phone with Android >= 5.1 without the need to flash lineage. If your phone breaks you usually can find easily any phone that works with the Dana pumps as quick replacement... not so easy with the Combo. (To se může v budoucnu změnit, až Android 8.1 bude více oblíbený)
- Initial pairing is simpler with the Dana-i/RS. Ale to obvykle děláte pouze jednou, takže to ovlivňuje pouze situace, pokud chcete testovat nové funkce s různými pumpami.
- Combo zatím pracuje s převodem obrazu do strojově čitelné podoby. Obecně to funguje skvěle, ale je to pomalé. Pro smyčku to tolik nevadí, vše pracuje na pozadí. Stále strávíte ale mnohem více času, kdy musíte být spojeni, takže může dojít k přerušení spojení, což se může snadno stát, pokud odejde od telefonu mezitím, co posíláte bolus.
- The Combo vibrates on the end of TBRs, the DanaR vibrates (or beeps) on SMB. V noci pravděpodobně používate TBRs více než SMB.  The Dana-i/RS is configurable that it does neither beep or vibrate.
- Reading the history on the Dana-i/RS in a few seconds with carbs makes it possible to switch phones easily while offline and continue looping as soon a soon as some CGM values are in.
- All pumps AAPS can talk with are waterproof on delivery. Pouze pumpy Dana mají také "záruku na vodotěsnost" v důsledku uzavřeného prostoru pro baterii a prostoru pro plnicí zásobník.

### Zdroj glykémií

This is just a short overview of all compatible CGMs/FGM with AAPS. For further details, look [here](CompatiblesCgms.md). Rychlý tip: Pokud dokážete zobrazit údaje o glykémii v aplikaci xDrip+ nebo na webu Nightscout, můžete v AAPS jako zdroj glykémie vybrat xDrip+ (nebo Nightscout, máte-li připojení k internetu).

- [Dexcom G7](../CompatibleCgms/DexcomG7.md): Works with xDrip+ or patched app
- [Dexcom G6](../CompatibleCgms/DexcomG6.md): BOYDA is recommended as of version 3.0 (see [release notes](../Maintenance/ReleaseNotes.md#version-300) for details). xDrip+ must be at least version 2022.01.14 or newer
- [Dexcom G5](../CompatibleCgms/DexcomG5.md): It works with xDrip+ app or patched Dexcom app
- [Libre 3](../CompatibleCgms/Libre3.md): It works with xDrip+ (no transmitter needed)
- [Libre 2](../CompatibleCgms/Libre2.md): It works with xDrip+ (no transmitter needed)
- [Libre 1](../CompatibleCgms/Libre1.md): You need a transmitter like Bluecon or MiaoMiao for it (build or buy) and xDrip+ app
- [Eversense](../CompatibleCgms/Eversense.md): It works so far only in combination with ESEL app and a patched Eversense-App (works not with Dana RS and LineageOS, but DanaRS and Android or Combo and Lineage OS work fine)
- [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md): quite complicated with a lot of extra stuff
- [Poctech](../CompatibleCgms/PocTech.md)

### Nightscout

Nightscout is a open source web application that can log and display your CGM data and AAPS data and creates reports. You can find more information on the [website of the Nightscout project](http://nightscout.github.io/). You can create your own [Nightscout website](https://nightscout.github.io/nightscout/new_user/), use the semi-automated Nightscout setup on [zehn.be](https://ns.10be.de/en/index.html) or host it on your own server (this is for IT experts).

Nightscout je nezávislý na ostatních modulech. Budete jej potřebovat ke splnění Cíle 1.

Additional information on how to configure Nightscout for use with AAPS can be found [here](../SettingUpAaps/Nightscout.md).

### Soubor AAPS-.apk

Základní součást systému. Před samotnou instalací aplikace si nejprve budete muset sestavit soubor apk (což je přípona souboru aplikace pro Android). Instructions are  [here](../SettingUpAaps/BuildingAaps.md).

## Volitelné moduly

### Chytré hodinky

Můžete si vybrat chytré hodinky s Android Wear 1.x a novějším. Most loopers wear a Sony Smartwatch 3 (SWR50) as it is the only watch that can get readings from Dexcom G6/G5 when phone is out of range. Some other watches can be patched to work as a standalone receiver as well (see [this documentation](https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5) for more details).

Uživatelé vytvořili [seznam otestovaných telefonů a hodinek](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing). There are different watchfaces for use with AAPS, which you can find [here](../UsefulLinks/WearOsSmartwatch.md).

**Ostatní pumpy**, které potenciálně mohou fungovat s AndroidAPS, jsou uvedeny na stránce [Pumpy potenciálně použitelné v budoucnu](../Getting-Started/Future-possible-Pump-Drivers.md).

Any problems with the spreadsheet please send an email to [hardware@androidaps.org](mailto:hardware@androidaps.org), any donations of phone/watch models that still need testing please send an email to [donations@androidaps.org](mailto:hardware@androidaps.org).

### xDrip+

Even if you don't need to have the xDrip+ App as BG Source, you can still use it for i.e. alarms or a good blood glucose display. Můžete tak mít libovolný počet výstrah, specifikovat časy, kdy budou aktivní, zda mají přebít tichý režim telefonu apod. Some xDrip+ information can be found [here](../CompatibleCgms/xDrip.md). Uvědomte si prosím, že dokumentace k této aplikaci není vždy aktuální, protože vývoj aplikace je poměrně rychlý.

## Co dělat při čekání na moduly

Někdy to zabere nějaký čas, než budete mít všechny moduly potřebné pro uzavření smyčky. Ale žádné obavy, je mnoho věcí, které můžete při čekání udělat. Je NEZBYTNÉ ověřit (a případně upravit) bazální dávky (BR), sacharidový poměr (ICR), citlivost na inzulin (ISF) atd. And maybe open loop can be a good way to test the system and get familiar with AAPS. Using this mode, AAPS gives treatment advices you can manually execute.

You can keep on reading through the docs here, get in touch with other loopers online or offline, [read](../Where-To-Go-For-Help/Background-reading.md) documentations or what other loopers write (even if you have to be careful, not everything is correct or good for you to reproduce).

**Done?** If you have your AAPS components all together (congrats!) or at least enough to start in open loop mode, you should first read through the [Objective description](../SettingUpAaps/CompletingTheObjectives.md) before each new Objective and setup up your [hardware](index-component-setup).
