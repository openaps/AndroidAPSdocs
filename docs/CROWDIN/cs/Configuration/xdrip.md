# xDrip+ nastavení

Pokud ho ještě nemáte nastaven, stáhněte si [xDrip+](https://github.com/NightscoutFoundation/xDrip)

Ujistěte se, že s vysílači pro G6 vyrobenými na podzim 2018 (např. výrobní čísla začínající 80 nebo 81) používáte alespoň verzi [master ze dne 18. 05. 2019](https://jamorham.github.io/#xdrip-plus).

Pokud výrobní číslo vašeho vysílače Dexcom G6 začíná znaky 8G... vyzkoušejte verzi [nightly build 2019/07/28 nebo novější](https://github.com/NightscoutFoundation/xDrip/releases).

## Základní nastavení pro všechny CGM & FGM systémy

* Ujistěte se, že máte URL nastavenou správně: s **S** na konci http**s**:// (nejen http://)
   
   např. https://API_SECRET@your-app-name.herokuapp.com/api/v1/
   
   -> Hamburger Menu (horní levá část domovské obrazovky) -> Nastavení-> Nahrávání do cloudu -> Nahrávání přes API (REST) > Základní URL

* Zrušte `Automatické kalibrace` Je-li checkbox `Automatic Calibration` zaškrtnut, aktivujte jednou `Download data`, poté odškrtněte checkbox `Automatic Calibration` na znovu deaktivujte `Download data`. Jinak budou ošetření (sacharidy & inzulín) poslána do Nigtscoutu dvakrát.

* Zvolte `Extra Options`
* Zrušte `Upload treatments` a `Back-fill data`
* Dále by měla být deaktivována volba `Alert on failures`. Jinak bude každých 5 minut spuštěn alarm, bude-li připojení přes wifi/mobilní síť málo kvalitní, anebo při problémech se spojením k serveru.
   
   ![xDrip+ Základní nastavení 1](../images/xDrip_Basic1.png)
   
   ![xDrip+ Základní nastavení 2](../images/xDrip_Basic2.png)

* **Komunikace mezi aplikacemi** (Broadcast) Pokud budete používat AndroidAPS a data by měla být přenášena např. do AndroidAPS, měli byste v xDripu aktivovat Lokální odesílání dat.

* Aby byly hodnoty stejné, měli byste aktivovat `Odesílat zobrazovanou glykémii`.
* Pokud jste aktivovali `Přijímat ošetření` a v AndroidAPS i Povolení odesílání, bude xDrip+ přijímat sacharidy, insulín i bazální hodnoty z AndroidAPS, a může tak předpovídat blížící se hypo atd. mnohem přesněji.
   
   ![xDrip+ Základní nastavení 3](../images/xDrip_Basic3.png)

* Objevily se problémy s lokálním odesíláním dat (AAPS nepřijímal nové hodnoty BG z xDrip+) v případě, že byl zapnutý mód letadlo. Jděte do Nastavení > Komunikace mezi zařízeními > Identify reciever, a vložte hodnotu `info.nightscout.androidaps`.
   
   ![xDrip+ Základní nastavení komunikace mezi aplikacemi rozpoznání přijímače](../images/xDrip_InterApp_NS.png)

## xDrip+ a Dexcom G6

### Verze xDripu+ závisí na výrobním čísle vysílače G6.

Ujistěte se, že s vysílači pro G6 vyrobenými na podzim 2018 (např. výrobní čísla začínající 80 nebo 81) používáte alespoň verzi [master ze dne 18. 05. 2019](https://jamorham.github.io/#xdrip-plus).

Pokud výrobní číslo vašeho vysílače Dexcom G6 začíná znaky 8G... vyzkoušejte verzi [nightly build 2019/07/28 nebo novější](https://github.com/NightscoutFoundation/xDrip/releases).

### Speciální nastavení pro Dexcom

* Otevřete G5/G6 Debug Settings -> Hamburger Menu (pravý horní roh domácí obrazovky) -> nastavení -> G5/G6 Debug Settings ![Otevřete nastavení xDrip+](../images/xDrip_Dexcom_SettingsCall.png)

* Zvolte následující nastavení
   
   * `Použít Ob1 collector`
   * `Native Algorithm` (důležité pokud chcete použít SMB)
   * `Podpora G6`
   * `Zvolte OB1 unbonding`
   * `Zvolte OB1 initiate bonding`
* Všechny ostatní volby by měly zůstat vypnuté
* Nastavte varování baterie na 280 (G5/G6 nastavení- dolní část)
   
   ![xDrip+ Možnosti ladění pro G5/G6](../images/xDrip_Dexcom_DebugSettings.png)

### Preemptivní restarty nejsou doporučené

**S vysílači Dexcom začínající na č. 8G nefungují preemptivní restarty a ty mohou senzor i zničit!**

Automatické prodloužení senzorů Dexcom (`preemtivní restart`) není doporučeno, tato volba může způsobit „skoky“ v hodnotách glykémie 9. den po restartu.

![xDrip+ Skok po preemptivním restartu](../images/xDrip_Dexcom_PreemptiveJump.png)

Použití G6 může být o něco složitější, než se na první pohled zdá. Abyste ho mohli používat bezpečně, je třeba vědět o několika skutečnostech:

* Pokud používáte nativní data s kalibračním algoritmem aplikace xDrip+ nebo Spike, nejbezpečnější postup je zakázat preemptivní restartování senzoru.
* Pokud musíte preemptivní restarty používat, pak se ujistěte, že senzor zavádíte v takovou denní dobu, kdy můžete sledovat změny a v případě potřeby provést kalibraci. 
* Jestliže senzory restartujete, udělejte to bez tovární kalibrace, aby byly výsledky 11 a 12 den co nejbezpečnější, nebo buďte připraveni provést kalibrace a sledujte odchylku.
* Nastřelení senzoru G6 předem v kombinaci s tovární kalibrací pravděpodobně povede k odchylkám ve výsledcích měření. Jestliže nastřelujete senzor s předstihem, pak jej pravděpodobně v zájmu co nejlepších výsledků bude nutné zkalibrovat.
* Jestliže nechcete sledovat změny, ke kterým může docházet, možná bude lepší přepnout na režim bez továrních kalibrací a používat systém jako G5.

Chcete-li se dozvědět další informace o podrobnostech a důvodech pro tato doporučení, přečtěte si [kompletní článek](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/), který sepsal Tim Street na adrese [www.diabettech.com](http://www.diabettech.com).

### První připojení vysílače G6

**Pro druhé a další spuštění vysílače viz [Prodloužení životnosti vysílače](../Configuration/xdrip#extend-transmitter-life) níže.**

Ujistěte se, že s vysílači pro G6 vyrobenými na podzim 2018 (např. výrobní čísla začínající 80 nebo 81) používáte alespoň verzi [master ze dne 18. 05. 2019](https://jamorham.github.io/#xdrip-plus).

Pokud výrobní číslo vašeho vysílače Dexcom G6 začíná znaky 8G... vyzkoušejte verzi [nightly build 2019/07/28 nebo novější](https://github.com/NightscoutFoundation/xDrip/releases).

* Vypněte originální Dexcom přijímač (je-li použit).
* Dlouze stiskněte symbol kapky krve Xdrip+ na hlavni obrazovce a povolte tlačítko `Source Wizard Button`.
* Použijte tlačítko Source Wizard, které zajistí, že budou vybrána výchozí nastavení včetně OB1 & nativního režimu 
   * Průvodce vás provede prvotním nastavením.
   * Pokud ho používáte poprvé, budete potřebovat výrobní číslo vysílače.

* Vložte výrobní číslo nového vysílače (je napsané na krabičce od vysílače nebo na spodní straně vysílače). Buďte opatrní, abyste nezaměnili 0 (nulu) a O (velké písmeno o).
   
   ![xDrip+ Výrobní číslo vysílače Dexcom](../images/xDrip_Dexcom_TransmitterSN.png)

* Vložte nový senzor (pouze když ho měníte)

* Nasaďte vysílač na senzor
* **Počkejte 15 minut** před spuštěním senzoru, aby mohl xDrip navázat komunikaci s novým vysílačem
* Spusťte senzor (pouze pokud ho měníte)
   
   -> V dolní části obrazovky se po několika minutách musí zobrazit `Zahřívání zbývá x,x hodin`.

-> Jestliže výrobní číslo vašeho vysílače nezačíná znaky 8G a ani po několika minutách se nezobrazí žádný časový údaj, zastavte senzor a restartujte jej.

* Klikněte na Restart collector (Stav systému - když neměníte senzor)
* Před prvním načtením dat do xDrip+ nezapínejte originální Dexcom přijímač (pokud ho používáte).
* Dlouhým stisknutím symbolu červené kapky krve xDrip+ zrušte zobrazení tlačítka `Source Wizard Button`.
   
   ![xDrip+ Vysílač Dexcom 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Vysílač Dexcom 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Vysílač Dexcom 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Vysílač Dexcom 4](../images/xDrip_Dexcom_Transmitter04.png)

### Stav baterie vysílače

* Stav baterie je zobrazen ve stavu systému (Hamburger menu vlevo nahoře na hlavní obrazovce)
* Jedenkrát potáhněte prstem doleva a přejděte na druhou obrazovku. ![xDrip+ První vysílač 4](../images/xDrip_Dexcom_Battery.png)

* Přesné hodnoty, kdy vysílač "umře" z důvodu vybití baterie, nejsou známy. Po "smrti" vysílače byly na internetu zveřejněny následující hodnoty: Transmitter days: 151 Voltage A: 297 Voltage B: 260 Resistance: 2391

### Prodloužení životnosti vysílače

* Prozatím nelze prodloužit životnost vysílačů, jejichž výrobní číslo začíná znaky 8G.
* V zájmu prevence potíží se spouštěním senzorů je důrazně doporučeno prodlužovat životnost vysílače před 100 dny prvního použití.
* Při operaci prodloužení životnosti vysílače bude přerušena aktuální relace senzoru. Mějte to na paměti a naplánujte prodloužení životnosti vysílače současně s výměnou senzoru. Nebo se připravte na 2 h zahřívání senzoru.
* Přepněte do `engineering mode`: 
   * klepněte na symbol injekční stříkačky v pravém horním rohu hlavní obrazovky
   * pak klepněte na symbol mikrofonu v dolním pravém rohu
   * Do textového pole, které se otevře, napište "enable engineering mode" 
   * klikněte na "Done"
   * Pokud máte povoleny Google hlasové příkazy, můžete po klepnutí na symbol mikrofonu říci "enable engeneering mode". 
* Přejděte do možností ladění G5 a zkontrolujte `OB1 collector`.
* Použijte hlasový příkaz: "hard reset transmitter"
* Hlasový příkaz bude proveden při následujícím načtení dat vysílače
* Přejděte na stav systému (hamburger menu -> Stav systému) a sledujte, co se stalo
* Když se na druhé systémové stránce objeví hláška "Phone Service State: Hard Reset maybe failed", prostě spusťte senzor a zpráva by měla zmizet.
   
   ![xDrip+ Hard Reset možná selhal](../images/xDrip_HardResetMaybeFailed.png)

* Po úspěšném prodloužení vysílače a startu senzoru by se měla hodnota Transmitter days resetovat na 0.

### Výměna vysílače

Ujistěte se, že s vysílači pro G6 vyrobenými na podzim 2018 (např. výrobní čísla začínající 80 nebo 81) používáte alespoň verzi [master ze dne 18. 05. 2019](https://jamorham.github.io/#xdrip-plus).

Pokud výrobní číslo vašeho vysílače Dexcom G6 začíná znaky 8G... vyzkoušejte verzi [nightly build 2019/07/28 nebo novější](https://github.com/NightscoutFoundation/xDrip/releases).

* Vypněte originální Dexcom přijímač (je-li použit).
* Zastavte senzor (pouze když ho měníte)
   
   Ujistěte se, zda se je opravdu zastaven:
   
   Na druhé obrazovce "G5/G6 Status" se zhruba v dolní polovině podívejte na `Queue Items`, a mělo by tam být něco ve smyslu `(1) Stop Sensor`
   
   Počkejte, až se fronta odešle - obvykle během pár minut.
   
   -> Pro výměnu vysílače bez zastavení senzoru se podívejte na toto video <https://youtu.be/AAhBVsc6NZo>.
   
   ![xDrip+ Zastavit senzor Dexcom 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Zastavit senzor Dexcom 2](../images/xDrip_Dexcom_StopSensor2.png)

* Forget device (ve Stav systému)
   
   ![xDrip+ Zapomenout zařízení](../images/xDrip_Dexcom_ForgetDevice.png)

* Vymažte zařízení z BT nastavení telefonu (Zobrazí se jako Dexcom??, přičemž ?? jsou poslední dva znaky výrobního čísla vysílače)

* Vyjměte vysílač (a také senzor, pokud ho měníte)
* Dlouze stiskněte červený symbol kapky krve Xdrip+ na hlavni obrazovce a povolte tlačítko `Source Wizard Button`.
* Použijte tlačítko Source Wizard, které zajistí, že budou vybrána výchozí nastavení včetně OB1 & nativního režimu 
   * Průvodce vás provede prvotním nastavením.
   * Pokud ho používáte poprvé, budete potřebovat výrobní číslo vysílače.
* Vložte výrobní číslo nového vysílače. Buďte opatrní, abyste nezaměnili 0 (nulu) a O (velké písmeno o).
* Vložte nový senzor (pouze když ho měníte).
* Nasaďte vysílač na senzor
* Spusťte senzor (pouze pokud ho měníte)
   
   **Po vypnutí se doporučuje počkat zhruba 15 minut před spuštěním nového senzoru (dokud se na druhé obrazovce Stav systému neobjeví `Sensor Status: Stopped`).**

* Klikněte na Restart collector (Stav systému - když neměníte senzor)

* Před prvním načtením dat do xDrip+ nezapínejte originální Dexcom přijímač (pokud ho používáte).
* Dlouhým stisknutím symbolu červené kapky krve xDrip+ zrušte zobrazení tlačítka `Source Wizard Button`.
   
   ![xDrip+ Vysílač Dexcom 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Vysílač Dexcom 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Vysílač Dexcom 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Vysílač Dexcom 4](../images/xDrip_Dexcom_Transmitter04.png)

### Nový senzor

* Vypněte originální Dexcom přijímač (pokud jej používáte).
* Je-li to potřeba, zastavte senzor
   
   Ujistěte se, zda se je opravdu zastaven:
   
   Na druhé obrazovce "G5/G6 Status" se zhruba v dolní polovině podívejte na `Queue Items`, a mělo by tam být něco ve smyslu `(1) Stop Sensor`
   
   Počkejte, až se fronta odešle - obvykle během pár minut.
   
   ![xDrip+ Zastavit senzor Dexcom 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Zastavit senzor Dexcom 2](../images/xDrip_Dexcom_StopSensor2.png)

* Vyčistěte alkoholem kontakty vysílače (na spodní straně) a nechte je oschnout.

* V tomto případě vypněte funkce `Restart Sensor` a `Preemptive restarts` (Hamburger menu -> Nastavení -> Možnosti ladění pro G5/G6). Když tento krok vynecháte a funkce pro restart budou zapnuté, nemusí se nový senzor korektně spustit.
   
   ![xDrip+ Preemptivní restart](../images/xDrip_Dexcom_Restart.png)

* Spusťte senzor
   
   **Po vypnutí se doporučuje počkat zhruba 15 minut před spuštěním nového senzoru (dokud se na druhé obrazovce Stav systému neobjeví `Sensor Status: Stopped`).**

* Nastavte čas zavedení
   
   * Pro použití G5/G6 nativního režimu musíte čekat 2 hodiny na zahřívání senzoru (takže čas zavedení senzoru je právě nyní).
   * Používáte-li algoritmus xDrip+ , můžete nastavit dobu před 2 hodinami s vyhnout se tak zahřívání senzoru. Získaná data ale mohou být velmi nepřesná. Proto se to nedoporučuje.
* Vložte kód senzoru (je na odlepovací fólii obalu senzoru) 
   * Kód senzoru si ponechejte pro pozdější použití (např. nový start senzoru po výměně vysílače)
   * Kód senzoru můžete najít i v [log souborech xDrip+](../Configuration/xdrip#retrieve-sensor-code): klikněte na 3 tečky na hlavní obrazovce a vyberte `Zobrazit logy`.
* Pokud používáte G6 v "nativním režimu", není potřeba žádná kalibrace. Po 2 hodinovém zahřívání senzoru začne xDrip+ zobrazovat nové hodnoty.
* Před prvním načtením dat do xDrip+ nezapínejte originální Dexcom přijímač (pokud ho používáte).
   
   ![xDrip+ Spustit senzor Dexcom 1](../images/xDrip_Dexcom_SensorStart01.png)
   
   ![xDrip+ Spustit senzor Dexcom 2](../images/xDrip_Dexcom_SensorStart02.png)

### Získání kódu senzoru

* Ve verzi master ze dne 2019/05/18 a ve verzích nightly build je kód senzoru zobrazován ve stavu systému (Hamburger menu v levém horním rohu hlavní obrazovky).
* Jedenkrát potáhněte prstem doleva a přejděte na druhou obrazovku.
   
   ![xDrip+ Získat kód senzoru Dexcom 2](../images/xDrip_Dexcom_SensorCode2.png)

* Kód senzoru můžete najít také v log souborech xDrip+.

* Klepněte na 3 tečky (v pravém horním rohu hlavní obrazovky)
* Vyberte `Zobrazit logy` a hledejte "code"
   
   ![xDrip+ Získat kód senzoru Dexcom](../images/xDrip_Dexcom_SensorCode.png)

## Odstraňování potíží s Dexcom G5/G6 a xDrip+

### Problém s připojením k vysílači

* Vysílač musí být zobrazen v bluetooth nastavení ve vašem telefonu.
* Vysílač se musí zobrazovat jako Dexcom??, přičemž ?? jsou poslední dva znaky výrobního čísla vysílače. (např. DexcomHY).
* Otevřete nabídku Stav systému v xDrip+ (hamburger menu vlevo nahoře na hlavní obrazovce).
* Ověřte, že je vysílač zobrazen na na první stránce se stavem systému ('classic status page').
* Pokud ne: Odstraňte zařízení z nastavení bluetooth svého telefonu a restartujte collector.
* Počkejte přibližně 5 minut, dokud se vysílač Dexcom automaticky znovu nepřipojí.

### Problém se spuštěním nového senzoru

* Nativní senzor je označen jako "FAILED: Sensor Failed Start"
* Zastavte senzor
* Restartujte telefon
* Spusťte nový senzor s kódem 0000 (čtyři nuly)
* Počkejte 15 minut
* Zastavte senzor
* Spusťte senzor se skutečným kódem (vytištěným na ochranné nálepce)

V log souborech v xDrip+ ověřte, že xDrip+ začne počítat "Trvání: 1 minuta" (a tak dále). Pouze v log protokolech v xdrip+ můžete v úvodní fázi zjistit, zda xdrip+ zastavil senzor. Pozdější stav není v dolní části hlavní obrazovky vždy zobrazen správně.

## xDrip+ a Freestyle Libre

### Specifická nastavení pro Libre

* Otevřete nastavení Bluetooth -> Hamburger menu (levý horní roh hlavní obrazovky) -> Nastavení -> sjeďte dolů -> Méně častá nastavení -> Nastavení BT
   
   ![xDrip+ Libre nastavení bluetooth 1](../images/xDrip_Libre_BTSettings1.png)

* Zvolte následující nastavení
   
   * `Zapnout Bluetooth` 
   * `Použít vyhledávání`
   * `Vždy prohledávat služby`

* Všechny ostatní volby by měly zůstat vypnuté
   
   ![xDrip+ Libre nastavení bluetooth 2](../images/xDrip_Libre_BTSettings2.png)

### Připojte vysílač Libre a spusťte senzor

![xDrip+ Spustit vysílač a senzor Libre 1](../images/xDrip_Libre_Transmitter01.png)

![xDrip+ Spustit vysílač a senzor Libre 2](../images/xDrip_Libre_Transmitter02.png)

![xDrip+ Spustit vysílač a senzor Libre 3](../images/xDrip_Libre_Transmitter03.png)