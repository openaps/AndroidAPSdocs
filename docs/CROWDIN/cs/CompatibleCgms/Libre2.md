# Freestyle Libre 2 a 2+

Senzor Freestyle Libre 2 je nyní skutečný CGM i s oficiální aplikací. LibreLink ale stále nemůže posílat data do AAPS. Existuje několik způsobů, jak ho s AAPS používat.

## 1. Použití Bluetooth můstku a OOP

Bluetooth vysílače lze používat se senzorem Libre 2 (EU) nebo 2+ (EU) a s aplikací s algoritmem „out of process“ (OOP). Hodnoty glykémie můžete dostávat každých 5 minut stejně jako u [Libre 1](./Libre1.md).

Zkontrolujte, že můstek a aplikace, které chcete použít, jsou kompatibilní s vaším senzorem a s xDrip.

Libre2 OOP (najdete ho [zde](#Libre2_OOP2)) vytváří stejné hodnoty glykémie jako původní čtečka. AAPS s Libre 2 provádí vyhlazování za 10 až 25 minut, aby se zabránilo některým skokům. Viz níže [Vyhlazování hodnot a surové hodnoty](#libre2-value-smoothing-raw-values). OOP vytváří hodnoty každých 5 minut jako průměr za posledních 5 minut. Hodnoty glykémie proto nejsou tak hladké, ale odpovídají původní čtečce a rychleji sledují „skutečné“ hodnoty glykémie. Pokud chcete s OOP používat smyčku, zapněte prosím v xDrip všechna nastavení vyhlazování.

Pro použití Bluetooth vysílače existuje několik dobrých důvodů:

-   Můžete zvolit různé strategie kalibrace OOP2 (1): hodnoty jako ve čtečce pomocí „no calibration“, kalibraci senzoru jako u Libre 1 pomocí „calibrate based on raw“, nebo kalibraci hodnot podobných čtečce pomocí „calibrate based on glucose“.  
  OOP1 nechte vypnutý (2).

    → Nabídka (☰) → Settings → Less common settings → Other misc. options

![Kalibrace OOP2](../images/Libre2_OOP2Calibration.png)

-   Senzor Libre 2 lze používat 14,5 dne stejně jako Libre 1
-   Zpětné doplnění dat za 8 hodin je plně podporováno

Poznámka: Vysílač lze používat souběžně s aplikací LibreLink, aniž by ji rušil.

### Spusťte senzor

- → Nabídka (☰) (1) → Start sensor (2) → Start sensor (3) → odpovězte „Not Today“ (4).

![xDrip – spuštění vysílače Libre a senzoru 3](../images/xDrip_Libre_Transmitter03.png)

Tím se žádný senzor Libre2 fyzicky nespustí a xDrip s ním nijak nekomunikuje. Tím se xDrip jen sděluje, že nový senzor posílá hodnoty glykémie. Pokud je to možné, zadejte pro úvodní kalibraci dvě hodnoty naměřené z krve. Nyní by se hodnoty glykémie měly v xDrip zobrazovat každých 5 minut. Vynechané hodnoty, např. protože jste byli příliš daleko od telefonu, se zpětně nedoplní.

Po výměně senzoru xDrip nový senzor automaticky rozpozná a smaže všechna kalibrační data. Po aktivaci si můžete zkontrolovat glykémii a provést novou úvodní kalibraci.

### Konfigurace AAPS (jen pro smyčku)

-   V **AAPS** otevřete **nabídku** (☰) v levém horním rohu, přejděte do **Konfigurace** > **Zdroj glykémie** a vyberte **xDrip+**

![Konfigurace > Zdroj glykémie s vybraným zdrojem xDrip+ glykémie](../images/v4/Configuration/configuration_bg_source.png)

-   Pokud AAPS nedostává hodnoty glykémie, když je telefon v režimu Letadlo, použijte „Identify receiver“, jak je popsáno na [stránce nastavení xDrip](#xdrip-identify-receiver).

## 2. Použití přímého připojení v xDrip

```{admonition} Libre 2 EU only
:class: warning
xDrip nepodporuje přímé připojení k senzorům Libre 2 pro USA a Austrálii.
Jen modely Libre 2 a 2+ pro **EU**.
```

- Pro nastavení xDrip postupujte podle [tohoto návodu](./Libre2MinimalL00per.md), protože původní dokumentace odkazuje na zastaralou verzi OOP2.
- Postupujte podle návodu na [stránce nastavení xDrip](../CompatibleCgms/xDrip.md).

-   Vyberte xDrip+ v [Konfigurace > Zdroj glykémie](#Config-Builder-bg-source).

(libre2-value-smoothing-raw-values)=

### Vyhlazování hodnot a surové hodnoty

Technicky se aktuální hodnota glykémie posílá do xDrip každou minutu. Filtr váženého průměru ve výchozím nastavení počítá vyhlazenou hodnotu za posledních 25 minut. Toto období můžete změnit v nabídce NFC Scan features.

→ Nabídka (☰) → Settings → NFC Scan features → Smooth libre 3 data when using xxx method

![Rozšířená nastavení xDrip pro Libre 2 a surové hodnoty](../images/xDrip_Libre3_Smooth.png)

Pro smyčku je to povinné. Křivky vypadají hladce a výsledky smyčky jsou výborné. Surové hodnoty, na kterých jsou založeny výstrahy, trochu více kolísají, ale odpovídají hodnotám, které ukazuje i čtečka. Kromě toho lze v grafu xDrip zobrazit surové hodnoty, abyste mohli včas reagovat na rychlé změny. Zapněte prosím Less Common Settings \> Advanced Settings for Libre2 \> „show Raw values“ a „show Sensors Infos“. Surové hodnoty se pak navíc zobrazují jako malé bílé tečky a v systémové nabídce jsou k dispozici další informace o senzoru.

Surové hodnoty jsou velmi užitečné, když se glykémie rychle mění. I když tečky více skáčou, trend poznáte mnohem lépe než z vyhlazené křivky, a můžete tak dělat správná léčebná rozhodnutí.

→ Nabídka (☰) → Settings → Less common settings → Advanced settings for Libre 2

![Rozšířená nastavení xDrip pro Libre 2 a surové hodnoty](../images/Libre2_RawValues.png)



#### Kalibrace

Libre2 můžete kalibrovat **s posunem od -40 mg/dl do +20 mg/dl \[-2,2 mmol/l až +1,1 mmol/l\]** (intercept). Sklon (slope) nelze měnit. Po zavedení nového senzoru prosím kontrolujte hodnoty glukometrem. Pamatujte, že v prvních 12 hodinách po zavedení nemusí být senzor přesný. Protože se hodnoty mohou výrazně lišit od měření z krve, kontrolujte je každých 24 hodin a v případě potřeby kalibrujte. Pokud senzor po několika dnech ukazuje úplně mimo, měl by se vyměnit.

## 3. Použití Diabox

- Nainstalujte [Diabox](https://www.bubblesmartreader.com/_files/ugd/6afd37_f183eabd4fbd44fcac4b1926a79b094f.pdf). V Settings, Integration zapněte Share data with other apps.

![Diabox](../images/Diabox.png)

- Vyberte xDrip+ v [Konfigurace > Zdroj glykémie](#Config-Builder-bg-source).

## 4. Použití Juggluco

Viz [zde](./Juggluco.md).
