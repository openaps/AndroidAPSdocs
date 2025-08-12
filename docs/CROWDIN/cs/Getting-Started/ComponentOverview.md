# Přehled komponent

**AAPS** is not just a (self-built) application, it is but one of several modules of your closed loop system. Before deciding for components, it would be a good idea to have a look at the component documentation.

![Components overview](../images/modules.png)

```{admonition} IMPORTANT SAFETY NOTICE
:class: important

The foundation of **AAPS** safety features discussed in this documentation is built on the safety features of the hardware used to build your system. For closing an automated insulin dosing loop, it is critically important that you only use an insulin pump and CGM that are tested, fully functioning and approved by the official instances of your country. Hardwarové nebo softwarové úpravy těchto komponent mohou způsobit neočekávané dávkování inzulínu, což může znamenat pro uživatele významné riziko. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, **do not use** these for creating an **AAPS** system.

Kromě toho je stejně důležité používat pouze originální spotřební materiál, jako jsou sety a zásobníky, schválené výrobcem pro použití s vaší pumpou nebo CGM. Použití nevyzkoušeného nebo upraveného spotřebního materiálu může způsobit nepřesnosti a chyby při dodávce inzulínu. Inzulín je velmi nebezpečný, když není dávkovaný správně – prosím, nehazardujte se svým životem tím, že budete upravovat spotřební materiál.

Last but not least, you must not take SGLT-2 inhibitors (gliflozins) as they incalculably lower blood sugar levels. Kombinace se systémem, která snižuje bazální hodnoty ke zvýšení glykémie je zvláště nebezpečná, protože v důsledku gliflozinu tento nárůst glykémie nemusí nastat a může dojít k nebezpečnému stavu nedostatku inzulínu. [More information here](#PreparingForAaps-no-sglt-2-inhibitors).
```

## Nezbytné moduly

### Správný individuální algoritmus dávkování pro léčbu vašeho diabetu

I když to není něco, co by bylo možné vytvořit nebo koupit, je to "modul", který je pravděpodobně nejvíce podceňován, je však nejdůležitější. Když necháte algoritmus zasahovat do léčby vašeho diabetu, musí znát správná nastavení, aby nedělal vážné chyby. Even if you are still missing other modules, you can already verify and adapt your **Profile** in collaboration with your diabetes team.

The **Profile** includes:

- BR (Basal rates): provides background insulin;
- ISF (insulin sensitivity factor): how much your blood glucose level will be reduced by 1 unit of insulin;
- CR (carb ratio): how many grams of carbohydrate are covered by one unit of insulin;
- DIA (duration of insulin action).

Většina uživatelů uzavřené smyčky používá cirkadiánní bazální dávkování, citlivost a sacharidový poměr, které se přizpůsobují hormonální aktivitě inzulinu v průběhu dne.

More information about your **Profile** [on the dedicated page](../SettingUpAaps/YourAapsProfile.md).

### Telefon

See the dedicated page [Phones](../Getting-Started/Phones.md).

### Inzulinová pumpa

See the dedicated page [Compatible Pumps](../Getting-Started/CompatiblePumps.md).

**Advantages and disadvantages of some pump models**

The Combo, the Insight and the older Medtronic are solid pumps, and loopable. The Combo has the advantage of many more infusion set types to choose from as it has a standard Luer-Lock. And the battery is a default one you can buy at any gas station, 24-hour convenience store and if you really need one, you can steal/borrow it from the remote control in the hotel room ;-).

Další informace o konfiguraci Nightscoutu pro použití s AndroidAPS najdete [zde](../Installing-AndroidAPS/Nightscout.md).

- Initial pairing is simpler with the Dana-i/RS. Ale to obvykle děláte pouze jednou, takže to ovlivňuje pouze situace, pokud chcete testovat nové funkce s různými pumpami.
- Combo zatím pracuje s převodem obrazu do strojově čitelné podoby. Obecně to funguje skvěle, ale je to pomalé. Pro smyčku to tolik nevadí, vše pracuje na pozadí. Still there is much more time you need to be connected so more time when the BT connection might break, which isn't so easy if you walk away from your phone whilst bolusing & cooking.
- The Combo vibrates on the end of TBRs, the DanaR vibrates (or beeps) on SMB. At nighttime, you are likely to be using TBRs more than SMB.  The Dana-i/RS is configurable so that it does neither beep nor vibrate.
- Reading the history on the Dana-i/RS in a few seconds with carbs makes it possible to switch phones easily while offline and continue looping as soon as some CGM values are in.
- All pumps **AAPS** can talk with are waterproof on delivery. Pouze pumpy Dana mají také "záruku na vodotěsnost" v důsledku uzavřeného prostoru pro baterii a prostoru pro plnicí zásobník.

### Zdroj glykémií

See the dedicated page [Compatible CGMs](../Getting-Started/CompatiblesCgms.md).

### **AAPS**-.apk file

The main component of the system. In order to install the app, you have to build the apk-file yourself first. Instructions are [here](../SettingUpAaps/BuildingAaps.md).

### Reporting server

A reporting server displays your glucose and treatment data, and creates reports for detailed analysis. There are currently two reporting servers available for use with AAPS : [Nightscout](#SettingUpTheReportingServer-nightscout) and [Tidepool](#SettingUpTheReportingServer-tidepool). They both provide ways to visualize your diabetes data over time, provide statistics about the **time in range** (TIR) and other measures.

The Reporting server is independent of the other modules. If you don’t want to use a reporting server, you should know that it is not mandatory for running **AAPS** in the long term. But you still need to set up one as it will be required to fulfill [**Objective 1**](#objectives-objective1).

Additional information on how to set up your reporting server can be found [here](../SettingUpAaps/SettingUpTheReportingServer.md).

## Volitelné moduly

### Chytré hodinky

You can choose any smartwatch with Android WearOS 2.x up to 4.x. **Beware, WearOS 5.x is not always compatible!**

Users are creating a [list of tested phones and watches](#Phones-list-of-tested-phones). There are different watchfaces for use with **AAPS**, which you can find [here](../WearOS/WearOsSmartwatch.md).

### xDrip+

Even if you don't need to have the xDrip+ App as **BG Source**, you can still use it for _i.e._ alarms or a different blood glucose display. You can have as many alarms as you want, specify the time when the alarm should be active, if it can override silent mode, etc. Some xDrip+ information can be found [here](../CompatibleCgms/xDrip.md). Uvědomte si prosím, že dokumentace k této aplikaci není vždy aktuální, protože vývoj aplikace je poměrně rychlý.

## Co dělat při čekání na moduly

It sometimes takes a while to get all the modules for closing the loop. Ale žádné obavy, je mnoho věcí, které můžete při čekání udělat. It is **necessary** to check and (where appropriate) adapt basal rates (BR), insulin-carbratio (IC), insulin-sensitivity-factors (ISF) etc. And maybe open loop can be a good way to test the system and get familiar with **AAPS**. Using this mode, **AAPS** gives treatment recommendations you can manually execute.

You can keep on reading through the docs here, get in touch with other loopers online or offline, [read](../UsefulLinks/BackgroundReading.md) documentations or what other loopers write (even if you have to be careful, not everything is correct or good for you to reproduce).

**Done?** If you have your **AAPS** components all together (congrats!) or at least enough to start in open loop mode, you should first read through the [Objective description](../SettingUpAaps/CompletingTheObjectives.md) before each new Objective and setup up your hardware.
