# Jak nastavit telefon Huawei

**Pro které telefony tato stránka platí:** telefony Huawei s **EMUI 12 až EMUI 15**. Všechny jsou založené na Androidu 12, což je minimum pro aktuální verzi **AAPS**. Na telefonu se starší verzí EMUI můžete používat jen [starší verzi AAPS](#maintenance-android-version-aaps-version).

```{admonition} Telefony s HarmonyOS NEXT / HarmonyOS 5 :class: warning

Nové telefony Huawei prodávané v Číně používají HarmonyOS NEXT (HarmonyOS 5 a novější). Tento systém už není Android a **AAPS** na něm nelze spustit. ```

Telefony Huawei velmi agresivně ukončují aplikace, které běží na pozadí. Všechna nastavení níže použijte pro **AAPS** i pro svou aplikaci CGM (například xDrip+ nebo Juggluco). Jinak se smyčka a načítání glykémie mohou při vypnuté obrazovce zastavit.

Názvy nabídek se mohou mezi modely mírně lišit. Pokud nastavení nemůžete najít, napište jeho název do vyhledávacího pole nahoře v **Nastavení**.

Snímky obrazovky níže pocházejí ze starší verze EMUI. Nastavení jsou v EMUI 12 až 15 stejná.

## Ignorovat optimalizaci baterie

1. Otevřete **Nastavení > Aplikace > Aplikace**.
2. Klepněte na nabídku **⋮** v pravém horním rohu a vyberte **Zvláštní přístup > Optimalizace baterie**.
3. Klepněte na šipku nahoře nad seznamem a vyberte **Všechny aplikace**.
4. Vyberte **AAPS** a zvolte **Nepovolit**. Huawei pak aplikace v tomto seznamu už nebude optimalizovat.
5. Totéž udělejte pro svou aplikaci CGM.

![Huawei - ignorovat optimalizaci baterie](../images/Huawei_BatteryOptimization.png)

## Spouštění aplikací: povolit běh na pozadí

1. Otevřete **Nastavení > Baterie > Spouštění aplikací** (nebo **Nastavení > Aplikace > Aplikace >** vyberte aplikaci **> Baterie > Spouštění aplikací**).
2. Najděte **AAPS** a vypněte **Spravovat automaticky**.
3. V okně **Spravovat ručně** zapněte všechny tři možnosti: 
    - **Automatické spouštění**
    - **Sekundární spuštění** (aplikaci mohou spustit jiné aplikace)
    - **Spustit na pozadí**
4. Totéž udělejte pro svou aplikaci CGM.

![Huawei - možnosti baterie](../images/Huawei_BatteryOptions.png)

## Uzamknout AAPS v seznamu posledních aplikací

Uzamčené aplikace se nezavřou, když vymažete seznam posledních aplikací.

1. Otevřete seznam posledních aplikací.
2. Přejeďte prstem dolů po kartě **AAPS**. Na kartě se zobrazí symbol zámku.
3. Totéž udělejte pro svou aplikaci CGM.

![Huawei - uzamknout aplikaci](../images/Huawei_LockApp.png)

## Režim úspory energie

Nechte **Režim úspory energie** a **Ultra úsporu energie** vypnuté (**Nastavení > Baterie**). Tyto režimy ukončují aplikace na pozadí bez ohledu na nastavení výše.

## Pokud se AAPS na pozadí stále zastavuje

Další řešení specifická pro Huawei najdete na [Don't kill my app](https://dontkillmyapp.com/huawei).

## Telefony Honor

Honor je teď samostatná značka a její telefony používají MagicOS místo EMUI. Nastavení běhu na pozadí jsou velmi podobná: v nastavení baterie aplikace najděte **Spouštění aplikací**, vypněte **Spravovat automaticky** a povolte všechny tři možnosti. Potom aplikaci odeberte z optimalizace baterie.