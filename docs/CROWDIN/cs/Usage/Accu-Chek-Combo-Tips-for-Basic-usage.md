# AkkuChek Combo typy pro základní využití

## Jak zajistit bezproblémové používaní

* Vždy noste telefon sebou, v noci ho nechte u postele.
* Vždy se snažte mít baterii v pumpě plnou jak nejvíce je to možné. Přečtěte si kapitolu baterie, pro tipy jak toho nejlépe dosáhnout.
* **Nespouštějte aplikaci ruffy**, pokud používáte AAPS. Pokud je aplikace spuštěna znova, zpravidla dojde k přerušení komunikace s pumpou. Jakmile je jednou pumpa spojena s ruffy, není potřeba provádět žádné opětovné spojení. A to ani v případě, že byl telefon restartován. Pumpa se připojí automaticky. Je doporučeno přesunout aplikaci ruffy na nepoužívanou obrazovku nebo do složky, kterou nepoužíváte, abyste předešli nechtěnému spuštění.
* Pokud omylem spustíte ruffy při běžící smyčce, nejsnazším řešením pro nápravu situace je restart celého telefonu.
* Kdykoliv je to možné, ovládejte pumpu jen pomocí AndroidAPS. Doporučujeme používat zámek klávesnice pumpy **NASTAVENÍ PUMPY/ ZÁMEK TLAČÍTEK / ZAPNOUT**. Ovládat pumpu přímo je zpravidla potřeba pouze při výměně baterie nebo zásobníku. ![Keylock](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/keylock.png?raw=true)

## Pumpa není dostupná. Co s tím?

### Nastavte si alarm při nedostupnosti pumpy

* V AndroidAPS, běžte do **Nastavení / Místní výstrahy** a zapněte **Výstraha při nedostupné pumpě**, nastavte **Limit při nedostupnosti pumpy [Min]** na **31** minutes. 
* Toto nastavení dává dostatek času, aby se alarm nespustil hned, když odběhnete z místnosti, ve které necháte telefon. Ale je dostatečně krátký, když je pumpa nedostupná po době, která překročí běžný čas dočasného bazálu.

### Obnovení komunikace s pumpou

* Když AndroidAPS spustí alarm **pumpa nedostupná**, nejprve pumpu odemkněte **a stiskněte libovolné tlačítko ** (např. tlačítko „dolů“). Jakmile displej pumpy zhasne, stiskněte v AndroidAPS **OBNOVIT** na záložce **Combo**. Toto často pomůže obnovit komunikaci.
* Když toto nepomůže, restartujte telefon. Po restartu telefonu se aplikace AndroidAPS společně s ruffy samy spustí a vytvoří nové spojení s pumpou.
* Bylo zjištěno, že některé telefony jsou více náchylné ke spouštění alarmu „pumpa nedostupná“ než jiné. [AAPS Phones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435) Seznam vyzkoušených telefonů. 

### Hlavní příčiny a důsledky častých poruch v komunikaci

* Na telefonech, které mají **málo paměti** (nebo nastavenou **agresivní úsporu energie**), může být aplikace AndroidAPS často zastavována. Můžete to poznat podle toho, že není zobrazeno tlačítko Bolus a Kalkulačky. Je to z toho důvodu, že systém teprve nabíhá. Kvůli těmto zastavením může být při startu vyvolán alarm „pumpa nedostupná“. Na záložce Combo, položka **Poslední spojení** můžete ověřit, kdy naposled se aplikace AndroidAPS úspěšně spojila s pumpou. 

![Pump unreachable](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/Pump_Unreachable.png) ![No connection to pump](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/No_connection_to_pump.png)

* Tato chyba může způsobit rychlejší vybíjení baterie, protože při každém startu aplikace je znovu načítán celý bazální profil.
* Také zvyšuje riziko, že pumpa nebude chtít provádět žádné příkazy s AndroidAPS do doby, než bude stisknuto nějaké tlačítko přímo na pumpě (Jak je popsáno výše). 

## Selhání zrušení dočasného bazálu

* Občas se stane, že AndroidAPS se nepodaří zrušit alarm **DBD ZRUŠENA**. Pak je nutno stisknout buď **OBNOVIT** na záložce **Combo** v AndroidAPS, nebo potvrdit alarm přímo na pumpě.

## Záležitosti týkající se baterie

### Výměna baterie

* Když pumpa zahlásí alarm **docházející baterie**, vyměňte baterii co možná nejdříve. Je to důležité proto, aby pumpa měla dost energie pro Bluetooth komunikaci, když telefon bude ve větší vzdálenosti od pumpy.
* I po alarmu **low battery** lze pumpu ještě nějaký čas používat. Nicméně je doporučeno mít sebou vždy náhradní baterii, aby mohla být vyměněna hned.
* Chcete-li vyměnit baterii, dlouze přidržte **Uzavřená smyčka** na hlavní obrazovce a zvolte **Pozastavit smyčku na 1 h**. 
* Počkejte po dobu, co AndroidAPS komunikuje s pumpou. Poznáte to podle loga bluetooth na obrazovce pumpy.

![Bluetooth enabled](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/Compo.png?raw=true)

* Odemkněte pumpu, přepněte pumpu do režimu STOP, potvrďte případný alarm konce dočasné bazální dávky a vyměňte baterii.
* Zvolte typ baterie, podle druhu použité baterie. Potom opět spusťte pumpu. Na základní obrazovce AndroidAPS dlouze přidržte **Pozastaveno** a zvolte **Uvolnit**.
* AndroidAPS nastaví všechny potřebné dočasné bazály, jakmile obdrží další glykemii. 

### Typy baterií a důvody krátké výdrže

* Intezivní komunikace prostřednictvím bluetooth spotřebovává velké množství energie, používejte pouze **velmi kvalitní baterie**, jako jsou Energizer Ultimate Lithium nebo baterie ze velkého servisního balíčku Accu-Chek Combo. Pokud se rozhodnete používat dobíjecí NiMH baterie, používejte baterie Eneloop. 

![Energizer](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/energizer-l91aa---image.jpg?raw=true) ![OnePower](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/PowerOne.png?raw=true)

Typická doba výdrže baterie dle typu:

* **Energizer Ultimate Lithium**: 4 až 7 týdnů
* **Power One Alkaline** (Varta) ze servisního balíčku: 2 až 4 týdny
* **Eneloop NiMH** (BK-3MCCE): 1 až 3 týdny

Jestliže vaše baterie vydrží výrazně méně, než je uvedeno výše, zkontrolujte níže uvedené důvody:

* Poslední verze (březen 2018) aplikace [Ruffy](https://github.com/MilosKozak/ruffy) výrazně zlepšila výdrž baterie pumpy. Používejte tuto verzi, pokud máte problémy s výdrží baterie.
* Některá šroubovací „víčka“ baterie pumpy způsobovala rychlé vybíjení baterie (docházelo ke krátkým zkratům). Víčka, která tento problém nezpůsobují, poznáte podle toho, že jejich kontakty jsou pozlacené.
* If the pump clock does not "survive" a short battery change, it is likely that the capacitor is broken which keeps the clock running during a brief power outage. In this case, only a replacement of the pump by Roche will help, which is not a problem during the warranty period. 
* The smart phone hardware and software (Android operating system and bluetooth stack) also impact the battery lifetime of the pump, even though the exact factors are not completely known yet. If you have the opportunity, try another smartphone and compare battery lifetimes.

## Daylight saving time changes

* Currently the combo driver does not support automatic adjustment of the pump's time.
* During the night of a daylight saving time change, the time of the smartphone is updated, but the time of the pump remains unchanged. This leads to an alarm due to deviating times between the systems at 3 am.
* If you do not want to be awakened at night, **deactivate the automatic daylight saving time changeover on the mobile phone** in the evening before the time changeover and adjust the times manually the next morning.

## Extended bolus, multiwave bolus

The OpenAPS algorithm does not support a parallel extended bolus or multiwave bolus. But a similar treatment can be achieved by the following alternative:

* Input the carbs but do not bolus for it. The loop algorithm will react more agressively. If needed, use **eCarbs** (extended carbs).

* If you are tempted to just use the extended or multiwave bolus directly on the pump, AndroidAPS will penalize you wth disabling the closed loop for the next six hours to ensure that no excess insulin dosage is calculated.

![Disabled loop after multiwave bolus](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/Multiwave_Bolus.png)

## Alarms at bolus delivery

* If AndroidAPS detects that an identical has been successfully delivered at the same minute, bolus delivery will be prevented with identical numer of insulin units. If your really want to bolus the same inuslin twice in short succession, just wait two more minutes and then deliver the bolus again. If the fist bolus has been interruped ot was not delivered for other reasons, you can immediately re-submit the bolus since AAPS 2.0.
* Background is a safety mechanism that reads the pump's bolus history before subm,itting a new bolus to correctly calculate insulin on board (IOB), even when a bolus is delivered directly from the pump. Here indistinguishable entries must be prevented.

![Double bolus](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/f9c56c930dc564c1649cd8e3764e077ffc02c5ef/resources/Doppelbolus.png)

* This mechanism is also responsible for a second cause of the error: If during the use of the bolus calculator another bolus is delivered via the pump and thereby the bolus history changes, the basis of the bolus calculation is wrong and the bolus is aborted. 

![Canceled bolus](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/f9c56c930dc564c1649cd8e3764e077ffc02c5ef/resources/History_changed.png)