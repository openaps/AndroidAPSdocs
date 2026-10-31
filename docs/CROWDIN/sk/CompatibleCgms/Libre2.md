# Freestyle Libre 2 a 2+

Senzor Freestyle Libre 2 je teraz skutočný CGM aj s oficiálnou aplikáciou. LibreLink však stále nedokáže posielať dáta do AAPS. Existuje niekoľko riešení, ako ho používať s AAPS.

## 1. Použitie Bluetooth mostíka a OOP

Bluetooth vysielače sa dajú používať s Libre 2 (EÚ) alebo 2+ (EÚ) a s aplikáciou s externým algoritmom (out of process algorithm). Hodnoty glykémie môžete dostávať každých 5 minút, rovnako ako pri [Libre 1](./Libre1.md).

Skontrolujte, či sú mostík a aplikácia, ktoré chcete použiť, kompatibilné s vaším senzorom a s xDrip.

Libre2 OOP (nájdete ho [tu](#Libre2_OOP2)) vytvára rovnaké hodnoty glykémie ako pôvodná čítačka. AAPS s Libre 2 vyhladzuje hodnoty za 10 až 25 minút, aby sa zabránilo niektorým skokom. Pozrite nižšie [Vyhladzovanie hodnôt a surové hodnoty](#libre2-value-smoothing-raw-values). OOP vytvára hodnoty každých 5 minút ako priemer posledných 5 minút. Hodnoty glykémie preto nie sú až také hladké, ale zodpovedajú pôvodnej čítačke a rýchlejšie sledujú „skutočné“ hodnoty glykémie. Ak chcete používať okruh s OOP, zapnite v xDrip všetky nastavenia vyhladzovania.

Existuje niekoľko dobrých dôvodov na použitie Bluetooth vysielača:

-   You can choose various OOP2 calibration strategies (1): have the reader values using "no calibration", or calibrate the sensor like a Libre 1 using "calibrate based on raw" or ultimately calibrate the reader-like values with "calibrate based on glucose".  
  Make sure to leave OOP1 disabled (2).

    → Ponuka (☰) → Settings → Less common settings → Other misc. options

![Kalibrácia OOP2](../images/Libre2_OOP2Calibration.png)

-   Senzor Libre 2 sa dá používať 14,5 dňa, rovnako ako Libre 1
-   Plne podporované je spätné doplnenie 8 hodín

Poznámka: Vysielač sa dá používať súčasne s aplikáciou LibreLink a neruší ju.

### Spustite senzor

- → Ponuka (☰) (1) → Start sensor (2) → Start sensor (3) → Odpovedzte „Not Today“ (4).

![xDrip – spustenie vysielača Libre a senzora 3](../images/xDrip_Libre_Transmitter03.png)

Týmto sa fyzicky nespustí žiadny senzor Libre2 ani sa s ním nijako nekomunikuje. Slúži to iba na to, aby xDrip vedel, že nový senzor posiela hodnoty glykémie. If available, enter two blood-measured values for the initial calibration. Teraz by sa hodnoty glykémie mali v xDrip zobrazovať každých 5 minút. Vynechané hodnoty, napr. preto, že ste boli príliš ďaleko od telefónu, sa nebudú spätne dopĺňať.

Po výmene senzora xDrip automaticky rozpozná nový senzor a vymaže všetky kalibračné dáta. You may check your blood glucose after activation and make a new initial calibration.

### Nastavenie AAPS (iba pre používanie okruhu)

-   V **AAPS** otvorte **ponuku** (☰) v ľavom hornom rohu, prejdite na **Konfigurácia** > **Zdroj glykémie** a vyberte **xDrip+**

![Konfigurácia > Zdroj glykémie s vybranou možnosťou xDrip+ glykémia](../images/v4/Configuration/configuration_bg_source.png)

-   Ak AAPS nedostáva hodnoty glykémie, keď je telefón v režime lietadlo, použite „Identify receiver“, ako je popísané na [stránke nastavení xDrip](#xdrip-identify-receiver).

## 2. Použitie priameho pripojenia xDrip

```{admonition} Libre 2 EU only
:class: warning
xDrip nepodporuje priame pripojenie k Libre 2 pre USA a Austráliu.
Iba modely Libre 2 a 2+ pre **EÚ**.
```

- Na nastavenie xDrip postupujte podľa [tohto návodu](./Libre2MinimalL00per.md), pretože pôvodná dokumentácia odkazuje na zastaranú verziu OOP2.
- Postupujte podľa návodu na [stránke nastavení xDrip](../CompatibleCgms/xDrip.md).

-   Vyberte xDrip+ v [Konfigurácia > Zdroj glykémie](#Config-Builder-bg-source).

(libre2-value-smoothing-raw-values)=

### Vyhladzovanie hodnôt a surové hodnoty

Technicky sa aktuálna hodnota glykémie posiela do xDrip každú minútu. Filter váženého priemeru vypočíta vyhladenú hodnotu predvolene za posledných 25 minút. Toto obdobie môžete zmeniť v ponuke NFC Scan features.

→ Ponuka (☰) → Settings → NFC Scan features → Smooth libre 3 data when using xxx method

![Pokročilé nastavenia xDrip pre Libre 2 a surové hodnoty](../images/xDrip_Libre3_Smooth.png)

Pre používanie okruhu je to povinné. Krivky vyzerajú hladko a výsledky okruhu sú veľmi dobré. Surové hodnoty, na ktorých sú založené alarmy, viac kolíšu, ale zodpovedajú hodnotám, ktoré zobrazuje aj čítačka. Okrem toho sa v grafe xDrip môžu zobrazovať surové hodnoty, aby ste mohli včas reagovať na rýchle zmeny. Zapnite Less Common Settings \> Advanced Settings for Libre2 \> „show Raw values“ a „show Sensors Infos“. Potom sa surové hodnoty navyše zobrazujú ako malé biele bodky a v systémovej ponuke sú k dispozícii ďalšie informácie o senzore.

Surové hodnoty sú veľmi užitočné, keď sa glykémia rýchlo mení. Aj keď bodky viac poskakujú, trend z nich rozpoznáte oveľa lepšie ako z vyhladenej čiary, a tak môžete urobiť správne liečebné rozhodnutia.

→ Ponuka (☰) → Settings → Less common settings → Advanced settings for Libre 2

![Pokročilé nastavenia xDrip pre Libre 2 a surové hodnoty](../images/Libre2_RawValues.png)



#### Kalibrácia

Libre2 môžete kalibrovať **s posunom od -40 mg/dl do +20 mg/dl \[-2,2 mmol/l až +1,1 mmol/l\]** (intercept). Sklon sa nedá zmeniť. Po zavedení nového senzora ho prosím skontrolujte meraním z prsta. Myslite na to, že prvých 12 hodín po zavedení nemusí byť presný. Keďže rozdiely oproti meraniam z krvi môžu byť veľké, overujte ho každých 24 hodín a v prípade potreby kalibrujte. Ak senzor po niekoľkých dňoch meria úplne mimo, treba ho vymeniť.

## 3. Použitie Diabox

- Nainštalujte [Diabox](https://www.bubblesmartreader.com/_files/ugd/6afd37_f183eabd4fbd44fcac4b1926a79b094f.pdf). V Settings, Integration zapnite Share data with other apps.

![Diabox](../images/Diabox.png)

- Vyberte xDrip+ v [Konfigurácia > Zdroj glykémie](#Config-Builder-bg-source).

## 4. Použitie Juggluco

Pozrite [tu](./Juggluco.md).
