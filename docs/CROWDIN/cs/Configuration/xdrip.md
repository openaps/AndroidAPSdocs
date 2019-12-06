# xDrip+ nastavení

Pokud ho ještě nemáte nastaven, stáhněte si [xDrip+](https://github.com/NightscoutFoundation/xDrip)

Ujistěte se, že s vysílači pro G6 vyrobenými na podzim 2018 (např. výrobní čísla začínající 80 nebo 81) používáte alespoň verzi [master ze dne 18. 05. 2019](https://jamorham.github.io/#xdrip-plus).

Pokud výrobní číslo vašeho vysílače Dexcom G6 začíná znaky 8G... nebo 8H... použijte jednu z [nejnovějších nightly builds](https://github.com/NightscoutFoundation/xDrip/releases) verzí.

## Základní nastavení pro všechny CGM & FGM systémy

* Ujistěte se, že máte URL nastavenou správně: s **S** na konci http**s**:// (nejen http://)
   
   např. https://API_SECRET@your-app-name.herokuapp.com/api/v1/
   
   -> Hamburger Menu (horní levá část domovské obrazovky) -> Nastavení-> Nahrávání do cloudu -> Nahrávání přes API (REST) > Základní URL

* Zrušte `Automatické kalibrace` Je-li checkbox `Automatic Calibration` zaškrtnut, aktivujte jednou `Download data`, poté odškrtněte checkbox `Automatic Calibration` na znovu deaktivujte `Download data`. Jinak budou ošetření (sacharidy & inzulín) poslána do Nigtscoutu dvakrát.

* Zvolte `Extra Options`

* Zrušte `Upload treatments` a `Back-fill data`.
   
   **Bezpečnostní upozornění: v xDripu musíte deaktivovat volbu "Upload treatments", jinak se v AAPS můžete setkat s duplicitními hodnotami ošetření, a to způsobí špatnou kalkulaci IOB a COB.**

* Dále by měla být deaktivována volba `Alert on failures`. Jinak bude každých 5 minut spuštěn alarm, bude-li připojení přes wifi/mobilní síť málo kvalitní, anebo při problémech se spojením k serveru.
   
   ![xDrip+ Základní nastavení 1](../images/xDrip_Basic1.png)
   
   ![xDrip+ Základní nastavení 2](../images/xDrip_Basic2.png)

* **Komunikace mezi aplikacemi** (Broadcast) Pokud budete používat AndroidAPS a data by měla být přenášena např. do AndroidAPS, měli byste v xDripu aktivovat Lokální odesílání dat.

* Aby byly hodnoty stejné, měli byste aktivovat `Odesílat zobrazovanou glykémii`.

* Pokud jste aktivovali `Přijímat ošetření` a v AndroidAPS i Povolení odesílání, bude xDrip+ přijímat sacharidy, insulín i bazální hodnoty z AndroidAPS, a může tak předpovídat blížící se hypo atd. mnohem přesněji.
   
   ![xDrip+ Základní nastavení 3](../images/xDrip_Basic3.png)

### Identifikovat příjemce

* If you discover problems with local broadcast (AAPS not receiving BG values from xDrip+) go to Settings > Inter-app settings > Identify receiver and enter `info.nightscout.androidaps`.
* Pozor: automatické opravy textu v androidu mají tendenci měnit velikost prvního písmene. Text `info.nightscout.androidaps` **musí být napsaný pouze malými písmeny**. Velká písmena způsobí, že z xDripu nebudou přijímané hodnoty glykémie.
   
   ![xDrip+ Základní nastavení komunikace mezi aplikacemi rozpoznání přijímače](../images/xDrip_InterApp_NS.png)

## xDrip+ a Dexcom G6

* The Dexcom G6 transmitter can simultaneously be connected to the Dexcom receiver (or alternatively the t:slim pump) and one app on your phone.
* When using xDrip+ as receiver uninstall Dexcom app first. **You cannot connect xDrip+ and Dexcom app with the transmitter at the same time!**
* If you need Clarity and want to profit from xDrip+ alarms use the [patched Dexcom app](../Hardware/DexcomG6#if-using-g6-with-patched-dexcom-app) with local broadcast to xDrip+.

### Verze xDripu+ závisí na výrobním čísle vysílače G6.

* Ujistěte se, že s vysílači pro G6 vyrobenými na podzim 2018 (např. výrobní čísla začínající 80 nebo 81) používáte alespoň verzi [master ze dne 18. 05. 2019](https://jamorham.github.io/#xdrip-plus). 
* Pokud výrobní číslo vašeho vysílače Dexcom G6 začíná znaky 8G nebo 8H, vyzkoušejte verzi [nightly build 2019/07/28 nebo novější](https://github.com/NightscoutFoundation/xDrip/releases).

### Dexcom specifická nastavení

* Otevřete G5/G6 Debug Settings -> Hamburger Menu (pravý horní roh domácí obrazovky) -> nastavení -> G5/G6 Debug Settings ![Otevřete nastavení xDrip+](../images/xDrip_Dexcom_SettingsCall.png)

* Zvolte následující nastavení
   
   * `Použít Ob1 collector`
   * `Native Algorithm` (důležité pokud chcete používat SMB)
   * `Podpora G6`
   * `Zvolte OB1 unbonding`
   * `Zvolte OB1 initiate bonding`
* Všechny ostatní volby by měly zůstat vypnuté
* Nastavte varování baterie na 280 (G5/G6 nastavení – dolní část)
   
   ![xDrip+ Možnosti ladění pro G5/G6](../images/xDrip_Dexcom_DebugSettings.png)

### Preemptivní restarty nejsou doporučené

**S vysílači Dexcom začínající na č. začíná znaky 8G nebo 8H nefungují preemptivní restarty, a dokonce mohou senzor úplně zničit!**

Automatické prodloužení senzorů Dexcom (`preemptivní restart`) není doporučeno, protože to může způsobit „skoky“ v hodnotách glykémie 9. den po restartu.

![xDrip+ Skok po preemptivním restartu](../images/xDrip_Dexcom_PreemptiveJump.png)

Použití G6 může být o něco složitější, než se na první pohled zdá. Abyste ho mohli používat bezpečně, je třeba vědět o několika skutečnostech:

* Pokud používáte nativní data s kalibračním algoritmem aplikace xDrip+ nebo Spike, nejbezpečnější postup je zakázat preemptivní restartování senzoru.
* Pokud musíte preemptivní restarty používat, pak se ujistěte, že senzor zavádíte v takovou denní dobu, kdy můžete sledovat změny a v případě potřeby provést kalibraci. 
* Jestliže senzory restartujete, buď použijte tovární kalibraci, aby byly výsledky v den 11 a 12 co nejbezpečnější, nebo buďte připraveni provést kalibrace a sledujte odchylku.
* Nastřelení senzoru G6 předem v kombinaci s tovární kalibrací pravděpodobně povede k odchylkám ve výsledcích měření. Jestliže nastřelujete senzor s předstihem, pak jej pravděpodobně v zájmu co nejlepších výsledků bude nutné zkalibrovat.
* Jestliže nechcete sledovat změny, ke kterým může docházet, možná bude lepší přepnout na režim bez továrních kalibrací a používat systém jako G5.

Chcete-li se dozvědět další informace o podrobnostech a důvodech pro tato doporučení, přečtěte si [kompletní článek](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/), který sepsal Tim Street na adrese [www.diabettech.com](http://www.diabettech.com).

### První připojení vysílače G6

**Pro druhý a další vysílače viz [Prodloužení životnosti vysílače](../Configuration/xdrip#extend-transmitter-life) níže.**

Ujistěte se, že s vysílači pro G6 vyrobenými na podzim 2018 (např. výrobní čísla začínající 80 nebo 81) používáte alespoň verzi [master ze dne 18. 05. 2019](https://jamorham.github.io/#xdrip-plus).

Pokud výrobní číslo vašeho vysílače Dexcom G6 začíná znaky 8G nebo 8H, vyzkoušejte verzi [nightly build 2019/07/28 nebo novější](https://github.com/NightscoutFoundation/xDrip/releases).

* Vypněte originální Dexcom přijímač (pokud ho používáte).
* Dlouze přidržte symbol kapky krve Xdrip+ a vyberte možnost zobrazit `Source Wizard Button`.
* Použijte tlačítko Source Wizard, které zajistí, že budou vybrána výchozí nastavení včetně OB1 a nativního režimu 
   * Průvodce vás provede prvotním nastavením.
   * Pokud ho používáte poprvé, budete potřebovat sériové číslo vysílače.

* Vložte výrobní číslo nového vysílače (je napsané na krabičce od vysílače nebo na spodní straně vysílače). Buďte opatrní, abyste nezaměnili 0 (nulu) a O (velké písmeno o).
   
   ![xDrip+ Výrobní číslo vysílače Dexcom](../images/xDrip_Dexcom_TransmitterSN.png)

* Vložte nový senzor (pouze když ho měníte)

* Nasaďte vysílač na senzor
* * Nespuštějte nový senzor, dokud nejsou zobrazeny následující informace ve Statusu -> G5/G6 status -> PhoneServiceState:
   
   * Sériové číslo vysílače začínající na 80 nebo 81: "Got data hh:mm" (např. "Got data 19:04")
   * Sériové číslo vysílače začínající na 8G nebo 8H: "Got glucose hh:mm" (např. "Got glucose 19:04") nebo "nemá raw hh:mm" Got no raw hh:mm" (např. "Got now raw 19:04")
   
   ![xDrip PhoneServiceState](../images/xDrip_Dexcom_PhoneServiceState.png)

* Spusťte senzor (pouze pokud ho měníte)
   
   -> V dolní části obrazovky se po několika minutách musí zobrazit `Zahřívání zbývá x,x hodin`.

-> Jestliže výrobní číslo vašeho vysílače. nezačíná znaky 8G nebo 8H a ani po několika minutách se nezobrazí žádný časový údaj, zastavte senzor a znovu ho restartujte.

* Klikněte na Restart collector (Stav systému – když neměníte senzor)
* Před prvním načtením dat do xDrip+ nezapínejte originální Dexcom přijímač (pokud ho používáte).
* Dlouhým přidržením symbolu kapky krve xDrip+ zrušíte zobrazování `Source Wizard Button`.
   
   ![xDrip+ Vysílač Dexcom 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Vysílač Dexcom 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Vysílač Dexcom 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Vysílač Dexcom 4](../images/xDrip_Dexcom_Transmitter04.png)

### Stav baterie vysílače

* Stav baterie je zobrazen v system status (Hamburger menu levý horní roh domácí obrazovky)
* Posuňte obrazovku doleva pro zobrazení druhé obrazovky.![xDrip+ První vysílač 4](../images/xDrip_Dexcom_Battery.png)

* Přesné hodnoty, kdy vysílač „umře“ z důvodu vybití baterie, nejsou známy. Následující údaje byly zaslány poté, co vysílač „umřel“:
   
   * První případ: Transmitter days: 151 / Voltage A: 297 / Voltage B: 260 / Resistance: 2391
   * Druhý případ: Transmitter days: 249 / Voltage A: 275 (v okamžiku selhání)

### Prodloužení životnosti vysílače

* Prozatím nelze prodloužit životnost vysílačů, jejichž výrobní číslo začíná znaky 8G nebo 8H.
* V zájmu prevence potíží se spouštěním senzorů je důrazně doporučeno prodlužovat životnost vysílače před 100 dny prvního použití.
* Při operaci prodloužení životnosti vysílače bude přerušena aktuální relace senzoru. Mějte to na paměti a naplánujte prodloužení životnosti vysílače současně s výměnou senzoru. Nebo se připravte na 2 h zahřívání senzoru.
* Přejděte do `engineering mode`: 
   * klepněte na symbol injekční stříkačky v pravém horním roku hlavní obrazovky
   * pak chvíli podržte symbol mikrofonu v dolním pravém rohu
   * a do textového pole napište bez uvozovek „enable engineering mode“ 
   * klikněte na tlačítko „OK“
   * Pokud máte povoleny Google hlasové příkazy, můžete po klepnutí na symbol mikrofonu vyslovit „enable engeneering mode“. 
* Přejděte do „Možnosti ladění pro G5/G6“ a zkontrolujte `OB1 collector`.
* Použijte hlasový příkaz: „hard reset transmitter“
* Hlasový příkaz bude proveden při následujícím odeslání dat do vysílače
* Přejděte na stav systému (hamburger menu -> Stav systému) a sledujte, co se stalo
* Když se na druhé systémové stránce objeví hláška „Phone Service State: Hard Reset maybe failed“, prostě spusťte senzor a zpráva by měla zmizet.
   
   ![xDrip+ Hard Reset možná selhal](../images/xDrip_HardResetMaybeFailed.png)

* Po úspěšném prodloužení vysílače a startu senzoru by se měla hodnota Transmitter days resetovat na 0.

### Výměna vysílače

Ujistěte se, že s vysílači pro G6 vyrobenými na podzim 2018 (např. výrobní čísla začínající 80 nebo 81) používáte alespoň verzi [master ze dne 18. 05. 2019](https://jamorham.github.io/#xdrip-plus).

Pokud výrobní číslo vašeho vysílače Dexcom G6 začíná znaky 8G nebo 8H, použijte jednu z [nejnovějších nightly build](https://github.com/NightscoutFoundation/xDrip/releases) verzí.

* Vypněte originální Dexcom přijímač (pokud ho používáte).
* Stop senzor (pouze když ho měníte)
   
   Ujistěte se, zda je opravdu zastaven:
   
   Na druhé obrazovce „G5/G6 Status“ se zhruba v dolní polovině podívejte na `Queue Items`, mělo by tam být něco jako `(1) Stop Sensor`
   
   Počkejte, až se fronta odešle – obvykle během pár minut. Sensor Status musí být „Stopped“ (viz snímek obrazovky).
   
   -> Pro výměnu vysílače bez zastavení senzoru se podívejte na toto video <https://youtu.be/AAhBVsc6NZo>.
   
   ![xDrip+ Zastavit senzor Dexcom 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Zastavit senzor Dexcom 2](../images/xDrip_Dexcom_StopSensor2.png)

* Vymažte zařízení z xDripu (Stav systému -> Forget device) a ze seznamu BT v nastavení telefonu (Zobrazuje se jako Dexcom??, přičemž ?? jsou poslední dva znaky výrobního čísla vysílače)
   
   ![xDrip+ Zapomenout zařízení](../images/xDrip_Dexcom_ForgetDevice.png)

* Vyjměte vysílač (a také senzor – pokud ho měníte)

* Uložte starý vysílač dostatečně daleko, aby se předešlo jeho opětovnému připojení. Výborné odstínění poskytne (jako dokonalá Faradayova klec) mikrovlnná trouba. Jen ji raději odpojte od napájení, aby se vyloučila možnost náhodného zapnutí.
* Dlouze přidržte symbol kapky krve Xdrip+ a vyberte možnost zobrazit `Source Wizard Button`.
* Použijte tlačítko Source Wizard, které zajistí, že budou vybrána výchozí nastavení včetně OB1 a nativního režimu 
   * Průvodce vás provede prvotním nastavením.
   * Pokud ho vkládáte poprvé, budete potřebovat sériové číslo vysílače.
* Vložte sériové číslo nového vysílače. Buďte opatrní, abyste nezaměnili 0 (nulu) a O (velké písmeno o).
* Vložte nový senzor (pouze když ho měníte).
* Vložte vysílač do senzoru – **ale nestartujte ho ihned!**
* Nový vysílač „Firefly“ (jehož sériové číslo začíná znaky 8G nebo 8H) lze používat pouze v nativním modu.
* U nových „Firefly“ vysílačů (jejichž sériové číslo začíná znaky 8G nebo 8H) nesmí být zapnuté následující volby:
   
   * Preemptivní restart (zakázat!)
   * Restartovat senzor (zakázat!)
   * Vrátit se k xDrip algoritmu (zakázat!)
   
   ![Nastavení pro vysílače Firefly](../images/xDrip_Dexcom_FireflySettings.png)

* Check in Classic Status Page -> G5/G6 status -> PhoneServiceState if one of the following informations is displayed:
   
   * Sériové číslo vysílače začínající na 80 nebo 81: "Got data hh:mm" (např. "Got data 19:04")
   * Sériové číslo vysílače začínající na 8G nebo 8H: "Got glucose hh:mm" (např. "Got glucose 19:04") nebo "nemá raw hh:mm" Got no raw hh:mm" (např. "Got now raw 19:04")
   
   ![xDrip PhoneServiceState](../images/xDrip_Dexcom_PhoneServiceState.png)

* Wait 15 minutes as the transmitter should communicate several times with xDrip before new sensor is started. Battery data will be shown below Firmware information.
   
   ![Firefly transmitter battery data](../images/xDrip_Dexcom_FireflyBattery.png)

* Start sensor and DO NOT BACKDATE! Always select "Yes, today"!

* Restart collector (system status - if not replacing sensor)
* Před prvním načtením dat do xDrip+ nezapínejte originální Dexcom přijímač (pokud ho používáte).
* Dlouhým přidržením symbolu kapky krve xDrip+ zrušíte zobrazování `Source Wizard Button`.
   
   ![xDrip+ Vysílač Dexcom 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Vysílač Dexcom 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Vysílač Dexcom 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Vysílač Dexcom 4](../images/xDrip_Dexcom_Transmitter04.png)

### Nový sensor

* Vypněte originální Dexcom přijímač (pokud ho používáte).
* Je-li to potřeba, vypněte senzor
   
   Ujistěte se, zda je opravdu zastaven:
   
   Na druhé obrazovce „G5/G6 Status“ se zhruba v dolní polovině podívejte na `Queue Items`, mělo by tam být něco jako `(1) Stop Sensor`
   
   Počkejte, až se fronta odešle – obvykle během pár minut.
   
   ![xDrip+ Zastavit senzor Dexcom 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Zastavit senzor Dexcom 2](../images/xDrip_Dexcom_StopSensor2.png)

* Vyčistěte alkoholem kontakty vysílače (na spodní straně) a nechte je oschnout.

* V tomto případě vypněte funkce `Restart Sensor` a `Preemptive restarts` (Hamburger menu -> Nastavení -> Možnosti ladění pro G5/G6). Když tento krok vynecháte a funkce pro restart budou zapnuté, nemusí se nový senzor korektně spustit.
   
   ![xDrip+ Preemptivní restart](../images/xDrip_Dexcom_Restart.png)

* Spuštění senzoru
   
   **For new Firefly transmitters** (serial no. starting with 8G or 8H) **it is mandatory, for all other transmitters it is recommended to wait approx. 15 minutes between stopping and starting the new sensor (until `Sensor Status: Stopped` is shown on second system status screen). DO NOT BACKDATE!**

* Nastavit čas vložení
   
   * Pro použití G5/G6 nativního režimu musíte čekat 2 hodiny na zahřívání senzoru (takže čas zavedení senzoru je právě nyní).
   * Používáte-li algoritmus xDrip+ , můžete nastavit dobu před 2 hodinami a tak se vyhnout zahřívání senzoru. Získaná data ale mohou být velmi nepředvídatelná. Proto se to nedoporučuje.
* Vložte kód senzoru (je na odlepovací fólii obalu senzoru) 
   * Kód senzoru si ponechejte pro pozdější použití (např. nový start senzoru po výměně vysílače)
   * Kód senzoru můžete najít i v [log souborech xDrip+](../Configuration/xdrip#retrieve-sensor-code): klikněte na 3 tečky na hlavní straně a vyberte `Zobrazit logy`.
* Pokud používáte G6 v „nativním módu“, není potřeba žádná kalibrace. Po 2 hodinovém zahřívání senzoru začne xDrip+ zobrazovat nové hodnoty.
* Před prvním načtením dat do xDrip+ nezapínejte originální Dexcom přijímač (pokud ho používáte).
   
   ![xDrip+ Spustit senzor Dexcom 1](../images/xDrip_Dexcom_SensorStart01.png)
   
   ![xDrip+ Spustit senzor Dexcom 2](../images/xDrip_Dexcom_SensorStart02.png)

### Získání kódu senzoru

* Ve verzi master ze dne 2019/05/18 a ve verzích nightly build je kód senzoru zobrazován ve stavu systému (Hamburger menu v levém horním rohu hlavní obrazovky).
* Posuňte obrazovku doleva pro zobrazení druhé obrazovky.
   
   ![xDrip+ Získat kód senzoru Dexcom 2](../images/xDrip_Dexcom_SensorCode2.png)

* Kód senzoru můžete najít také v log souborech xDrip+.

* Klepněte na 3 tečky v pravém horním rohu hlavní obrazovky
* Vyberte `Zobrazit logy` a hledejte kód senzoru
   
   ![xDrip+ Získat kód senzoru Dexcom](../images/xDrip_Dexcom_SensorCode.png)

## Odstraňování potíží s Dexcom G5/G6 a xDrip+

### Problém s připojením k vysílači

* Vysílač musí být zobrazen v bluetooth nastavení ve vašem telefonu.
* Vysílač se musí zobrazovat jako Dexcom??, přičemž ?? kde ?? jsou poslední dva znaky výrobního čísla vysílače. (např. DexcomHY).
* Otevřete nabídku Stav systému v xDrip+ (hamburger menu vlevo nahoře na hlavní obrazovce).
* Ověřte, že je vysílač zobrazen na první stránce se stavem systému ('classic status page').
* Pokud ne: Odstraňte zařízení z nastavení bluetooth svého telefonu a restartujte collector.
* Počkejte přibližně 5 minut, dokud se vysílač Dexcom automaticky znovu nepřipojí.

### Problém se spuštěním nového senzoru

Berte prosím na vědomí, že následující metoda nebude pravděpodobně fungovat, jestliže sériové číslo Vašeho vysílače Dexcom G6 začíná znaky 8G nebo 8H.

* Nativní senzor je označen jako "FAILED: Sensor Failed Start"
* Zastavte senzor
* Restartujte telefon
* Spusťte nový senzor s kódem 0000 (čtyři nuly)
* Počkejte 15 minut
* Zastavte senzor
* Spusťte senzor se skutečným kódem (vytištěným na ochranné nálepce)

V log souborech v xDrip+ ověřte, že xDrip+ začne počítat „Trvání: 1 minuta“ (a tak dále). Pouze v log protokolech v xdrip+ můžete v úvodní fázi zjistit, zda xdrip+ zastavil senzor. Pozdější stav není v dolní části hlavní obrazovky vždy zobrazen správně.

## xDrip+ a Freestyle Libre

### Speciální nastavení Libre

* Otevřete nastavení Bluetooth -> Hamburger menu (levý horní roh hlavní obrazovky) -> Nastavení -> sjeďte dolů -> Méně častá nastavení -> Nastavení BT
   
   ![xDrip+ Libre nastavení bluetooth 1](../images/xDrip_Libre_BTSettings1.png)

* Zvolte následující nastavení
   
   * `Zapnout Bluetooth` 
   * `Použít vyhledávání`
   * `Vždy prohledávat služby`

* Všechny ostatní volby by měly zůstat vypnuté
   
   ![xDrip+ Libre nastavení bluetooth 2](../images/xDrip_Libre_BTSettings2.png)

### Připojte Libre vysílač & spusťte senzor

![xDrip+ Spustit vysílač a senzor Libre 1](../images/xDrip_Libre_Transmitter01.png)

![xDrip+ Spustit vysílač a senzor Libre 2](../images/xDrip_Libre_Transmitter02.png)

![xDrip+ Spustit vysílač a senzor Libre 3](../images/xDrip_Libre_Transmitter03.png)