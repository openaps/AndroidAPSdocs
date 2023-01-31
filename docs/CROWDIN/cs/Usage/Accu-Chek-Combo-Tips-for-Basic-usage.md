# Accu-Chek Combo Tips for basic usage

## Jak zajistit bezproblémové používaní

* Always **carry the smartphone with you**, leave it next to your bed at night. As your pump may lay behind or under you body while you sleep, a higher position (on a shelf or board) works best.
* Vždy se snažte mít baterii v pumpě plnou jak nejvíce je to možné. Přečtěte si kapitolu baterie, pro tipy jak toho nejlépe dosáhnout.
* **Nespouštějte aplikaci ruffy**, pokud používáte AAPS. Pokud je aplikace spuštěna znova, zpravidla dojde k přerušení komunikace s pumpou. Jakmile je jednou pumpa spojena s ruffy, není potřeba provádět žádné opětovné spojení. A to ani v případě, že byl telefon restartován. Pumpa se připojí automaticky. Je doporučeno přesunout aplikaci ruffy na nepoužívanou obrazovku nebo do složky, kterou nepoužíváte, abyste předešli nechtěnému spuštění.
* Pokud omylem spustíte ruffy při běžící smyčce, nejsnazším řešením pro nápravu situace je restart celého telefonu.
* Kdykoliv je to možné, ovládejte pumpu jen pomocí AndroidAPS. Doporučujeme používat zámek klávesnice pumpy **NASTAVENÍ PUMPY/ ZÁMEK TLAČÍTEK / ZAPNOUT**. Ovládat pumpu přímo je zpravidla potřeba pouze při výměně baterie nebo zásobníku. ![Zámek](../images/combo/combo-tips-keylock.png)

## Pumpa není dostupná. Co s tím?

### Nastavte si alarm při nedostupnosti pumpy

* V AndroidAPS, běžte do **Nastavení / Místní výstrahy** a zapněte **Výstraha při nedostupné pumpě**, nastavte **Limit při nedostupnosti pumpy [Min]** na **31** minutes. 
* This will give you enough time to not trigger the alarm when leaving the room while your phone is left on the desk, but informs you if the pump cannot be reached for a time that exceeds the duration of a temporary basal rate.

### Obnovení komunikace s pumpou

* Když AndroidAPS spustí alarm **pumpa nedostupná**, nejprve pumpu odemkněte **a stiskněte libovolné tlačítko ** (např. tlačítko „dolů“). Jakmile displej pumpy zhasne, stiskněte v AndroidAPS **OBNOVIT** na záložce **Combo**. Toto často pomůže obnovit komunikaci.
* Když toto nepomůže, restartujte telefon. Po restartu telefonu se aplikace AndroidAPS společně s ruffy samy spustí a vytvoří nové spojení s pumpou.
* Bylo zjištěno, že některé telefony jsou více náchylné ke spouštění alarmu „pumpa nedostupná“ než jiné. [AAPS Phones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) lists successfully tested smartphones. 

### Hlavní příčiny a důsledky častých poruch v komunikaci

* Na telefonech, které mají **málo paměti** (nebo nastavenou **agresivní úsporu energie**), může být aplikace AndroidAPS často zastavována. Můžete to poznat podle toho, že není zobrazeno tlačítko Bolus a Kalkulačky. Je to z toho důvodu, že systém teprve nabíhá. Kvůli těmto zastavením může být při startu vyvolán alarm „pumpa nedostupná“. Na záložce Combo, položka **Poslední spojení** můžete ověřit, kdy naposled se aplikace AndroidAPS úspěšně spojila s pumpou. 

![Pumpa nedostupná](../images/combo/combo-tips-pump-unreachable.png) ![Žádné připojení k pumpě](../images/combo/combo-tips-no-connection-to-pump.png)

* Tato chyba může způsobit rychlejší vybíjení baterie, protože při každém startu aplikace je znovu načítán celý bazální profil.
* Také zvyšuje riziko, že pumpa nebude chtít provádět žádné příkazy s AndroidAPS do doby, než bude stisknuto nějaké tlačítko přímo na pumpě (Jak je popsáno výše). 

## Selhání zrušení dočasného bazálu

* Občas se stane, že AndroidAPS se nepodaří zrušit alarm **TBR ZRUŠENO**. Then you have to either press **UPDATE** in the AndroidAPS **Combo tab** or the alarm on the pump will need to be confirmed.

## Záležitosti týkající se baterie

### Výměna baterie

* Když pumpa zahlásí alarm **docházející baterie**, vyměňte baterii co možná nejdříve. Je to důležité proto, aby pumpa měla dost energie pro Bluetooth komunikaci, když telefon bude ve větší vzdálenosti od pumpy.
* I po alarmu **low battery** lze pumpu ještě nějaký čas používat. Nicméně je doporučeno mít sebou vždy náhradní baterii, aby mohla být vyměněna hned.
* Before changing the battery, press on the **Loop** symbol on the main screen and select **Suspend loop for 1h**. 
* Wait for the pump to communicate with the pump and the bluetooth logo on the pump has faded.

![Bluetooth povoleno](../images/combo/combo-tips-compo.png)

* Release the key lock on the pump, put the pump into stop mode, confirm a possibly canceled temporary basal rate, and change the battery quickly.
* If the clock on the pump did not survive the battery chenge, re-set the date and time on the pump to exactly the date/time on your phone running AAPS.
* Then put the pump back in run mode select **Resume** when pressing on the **Suspended Loop** icon on the main screen.
* AndroidAPS will re-set a necessary temporary basal rate with the arrival of the next blood sugar value. 

(battery-type-and-causes-of-short-battery-life)=

### Typy baterií a důvody krátké výdrže

* As intensive Bluetooth communication consumes a lot of energy, only use **high-quality batteries** like Energizer Ultimate Lithium, the "power one"s from the "large" Accu-Chek service pack, or if you are going for a rechargeable battery, use Eneloop batteries. 

![Energizer](../images/combo/combo-tips-energizer.jpg) ![OnePower](../images/combo/combo-tips-power-one.png)

Ranges for typical life time of the different battery types are as follows:

* **Energizer Ultimate Lithium**: 4 až 7 týdnů
* **Power One Alkaline** (Varta) ze servisního balíčku: 2 až 4 týdny
* **Eneloop rechargeable** batteries (BK-3MCCE): 1 to 3 weeks

If your battery life is signifcantly shorter than the ranges given above, please check the following possible causes:

* Versions of the [ruffy App](https://github.com/MilosKozak/ruffy) after vMarch 2018 significantly improved pump battery lifetime. Make sure you are on the newest version if you have issues with a short battery lifetime.
* Některá šroubovací „víčka“ baterie pumpy způsobovala rychlé vybíjení baterie (docházelo ke krátkým zkratům). Víčka, která tento problém nezpůsobují, poznáte podle toho, že jejich kontakty jsou pozlacené.
* Pokud hodiny pumpy „nepřežijí“ krátkou výměnu baterie, je pravděpodobné, že kondenzátor, který udržuje hodiny běžící během krátkého výpadku proudu, je rozbitý. In this case, a replacement of the pump by Roche might help, which is not a problem during the warranty period. 
* Hardware a software telefonu (operační systém Android a bluetooth stack) také ovlivňují životnost baterie pumpy, i když ještě nejsou zcela známy přesné faktory. Máte-li příležitost, vyzkoušejte jiný smartphone a porovnejte baterie.

## Změny letního času

* Ovladač v současné době nepodporuje automatickou změnu času v pumpě.
* Během noci, kdy se mění čas, je čas telefonu aktualizován, ale čas pumpy zůstává beze změny. To vede k alarmu v důsledku rozdílných časů mezi systémy ve 3 ráno.
* If you do not want to be awakened at night, **deactivate the automatic daylight saving time changeover on the mobile phone** in the evening before the time changeover and adjust the times manually the next morning. A good way to deal with daylight saving time changes is to switch to a different time zone located on the same longitude you are located at but closer to the equator, where usually no daylight saving time is observed. Example: For Central Europe on Summer Time (CEST/GMT+2), you could switch to the time zone of Zimbabwe on your phone the night before the switch to winter time and then switch back to Central European Time CET/GMT+1 the next morning while changing the clock on your pump at the same time. The other way aroud, switch to the time zone of Nigeria while on Winter Time CET/GMT+1 and go back to Central European Summer Time (CEST/GMT+2) the morning after the switch to summer time and change the pump time accordingly. Look at https://www.timeanddate.com/time/map/ to find a suitable country.

## Rozložený bolus, kombinovaný bolus

The OpenAPS algorithm does not support a parallel extended bolus or multiwave bolus. But a similar treatment can be achieved by the following alternatives:

* Use **e-Carbs** when entering carbs or using the Calculator by entering the carbs of the full meal and the duration you expect the carbs to arrive as glucose in you blood. The system will then calculate small carbs equally distributed over the whole duration which will cause th algorithm to provide equivalent insulin dosing while still permanently checking the overall rise/decrease of the blood glucose level. For a multiwave bolus approach, you can also combine a smaller immeadiate bolus with e-carbs. 
* Before eating, on the **Actions tab** in AndroidAPS set as a temporary **Eating Soon** goal with target glucose 80 for several hours. The duration should be based on the interval you would chosse for an extended bolus. This will keep your target lower than usual and therefore increase the amout of insulin delivered.
* Then use the **CALCULATOR** to enter the full carbs of the meal, but do not directly apply the values suggested by the bolus calculator. If a multiwave-like bolus is to be delivered, correct the insulin dosage down. Depending on the meal, the algorithm now has to deliver additional SMBs or higher temporary basal rates to counteract the increase in blood sugar. Here, the safety limitation of the basal rate (Max IE / h, Maximum basal IOB) should be very carefully experimented with and, if necessary, temporarily changed.

* If you are tempted to just use the extended or multiwave bolus directly on the pump, AndroidAPS will penalize you with disabling the closed loop for the next six hours to ensure that no excess insulin dosage is calculated.

![Disabled loop after multiwave bolus](../images/combo/combo-tips-multiwave-bolus.png)

## Poplachy při bolusu

* If AndroidAPS detects that an identical bolus has been successfully delivered at the same minute, bolus delivery will be prevented with identical numer of insulin units. If your really want to bolus the same inuslin twice in short succession, just wait two more minutes and then deliver the bolus again. If the fist bolus has been interruped or was not delivered for other reasons, you can immediately re-submit the bolus since AAPS 2.0.
* The alarm is a safety mechanism that reads the pump's bolus history before submitting a new bolus to correctly calculate insulin on board (IOB), even when a bolus is delivered directly from the pump. Musí být zabráněno nerozpoznatelným položkám.

![Double bolus](../images/combo/combo-tips-doppelbolus.png)

* Tento mechanismus je také zodpovědný za druhou příčinu chyby: Pokud během používání bolusové kalkulačky dojde k dodání jiného bolusu přes pumpu a tím ke změně historie, je kalkulace bolusu špatná a bolus se předčasně ukončí. 

![Canceled bolus](../images/combo/combo-tips-history-changed.png)