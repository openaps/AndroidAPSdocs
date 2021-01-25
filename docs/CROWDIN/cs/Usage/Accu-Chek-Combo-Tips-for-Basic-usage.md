# Accu-Chek Combo Tips for basic usage

## Jak zajistit bezproblémové používaní

* Vždy noste telefon sebou, v noci ho nechte u postele.
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
* Bylo zjištěno, že některé telefony jsou více náchylné ke spouštění alarmu „pumpa nedostupná“ než jiné. [AAPS Phones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435) Seznam vyzkoušených telefonů. 

### Hlavní příčiny a důsledky častých poruch v komunikaci

* Na telefonech, které mají **málo paměti** (nebo nastavenou **agresivní úsporu energie**), může být aplikace AndroidAPS často zastavována. Můžete to poznat podle toho, že není zobrazeno tlačítko Bolus a Kalkulačky. Je to z toho důvodu, že systém teprve nabíhá. Kvůli těmto zastavením může být při startu vyvolán alarm „pumpa nedostupná“. Na záložce Combo, položka **Poslední spojení** můžete ověřit, kdy naposled se aplikace AndroidAPS úspěšně spojila s pumpou. 

![Pumpa nedostupná](../images/combo/combo-tips-pump-unreachable.png) ![Žádné připojení k pumpě](../images/combo/combo-tips-no-connection-to-pump.png)

* Tato chyba může způsobit rychlejší vybíjení baterie, protože při každém startu aplikace je znovu načítán celý bazální profil.
* Také zvyšuje riziko, že pumpa nebude chtít provádět žádné příkazy s AndroidAPS do doby, než bude stisknuto nějaké tlačítko přímo na pumpě (Jak je popsáno výše). 

## Selhání zrušení dočasného bazálu

* Občas se stane, že AndroidAPS se nepodaří zrušit alarm **TBR ZRUŠENO**. Pak je nutno stisknout buď **OBNOVIT** na záložce **Combo** v AndroidAPS, nebo potvrdit alarm přímo na pumpě.

## Záležitosti týkající se baterie

### Výměna baterie

* Když pumpa zahlásí alarm **docházející baterie**, vyměňte baterii co možná nejdříve. Je to důležité proto, aby pumpa měla dost energie pro Bluetooth komunikaci, když telefon bude ve větší vzdálenosti od pumpy.
* I po alarmu **low battery** lze pumpu ještě nějaký čas používat. Nicméně je doporučeno mít sebou vždy náhradní baterii, aby mohla být vyměněna hned.
* Chcete-li vyměnit baterii, dlouze přidržte **Uzavřená smyčka** na hlavní obrazovce a zvolte **Pozastavit smyčku na 1 h**. 
* Wait for the pump to communicate with the phone and the Bluetooth logo on the pump has faded.

![Bluetooth povoleno](../images/combo/combo-tips-combo-tips-compo.png)

* Odemkněte pumpu, přepněte pumpu do režimu STOP, potvrďte případný alarm konce dočasné bazální dávky a vyměňte baterii.
* Then put the pump back in run mode select **Resume** when long-pressing on **Suspended** on the main screen.
* AndroidAPS nastaví všechny potřebné dočasné bazály, jakmile obdrží další glykemii. 

### Typy baterií a důvody krátké výdrže

* Intezivní komunikace prostřednictvím bluetooth spotřebovává velké množství energie, používejte pouze **velmi kvalitní baterie**, jako jsou Energizer Ultimate Lithium nebo baterie ze velkého servisního balíčku Accu-Chek Combo. Pokud se rozhodnete používat dobíjecí NiMH baterie, používejte baterie Eneloop. 

![Energizer](../images/combo/combo-tips-energizer.jpg) ![OnePower](../images/combo/combo-tips-power-one.png)

Typická doba výdrže baterie dle typu:

* **Energizer Ultimate Lithium**: 4 až 7 týdnů
* **Power One Alkaline** (Varta) ze servisního balíčku: 2 až 4 týdny
* **Eneloop NiMH** (BK-3MCCE): 1 až 3 týdny

If your battery life is significantly shorter than the ranges given above, please check the following possible causes:

* The latest version (March 2018) of the [ruffy App](https://github.com/MilosKozak/ruffy) significantly improved pump battery lifetime. Používejte tuto verzi, pokud máte problémy s výdrží baterie.
* Některá šroubovací „víčka“ baterie pumpy způsobovala rychlé vybíjení baterie (docházelo ke krátkým zkratům). Víčka, která tento problém nezpůsobují, poznáte podle toho, že jejich kontakty jsou pozlacené.
* Pokud hodiny pumpy „nepřežijí“ krátkou výměnu baterie, je pravděpodobné, že kondenzátor, který udržuje hodiny běžící během krátkého výpadku proudu, je rozbitý. V takovém případě Vám může pomoci pouze výměna pumpy firmou Roche, což během záruční doby není problém. 
* Hardware a software telefonu (operační systém Android a bluetooth stack) také ovlivňují životnost baterie pumpy, i když ještě nejsou zcela známy přesné faktory. Máte-li příležitost, vyzkoušejte jiný smartphone a porovnejte baterie.

## Změny letního času

* Ovladač v současné době nepodporuje automatickou změnu času v pumpě.
* Během noci, kdy se mění čas, je čas telefonu aktualizován, ale čas pumpy zůstává beze změny. To vede k alarmu v důsledku rozdílných časů mezi systémy ve 3 ráno.
* Pokud nechcete být probuzeni, **deaktivujte automatický přechod na letní čas v mobilním telefonu** večer před změnou času a upravte časy ručně ráno.

## Rozložený bolus, kombinovaný bolus

Algoritmus OpenAPS nepodporuje paralelní rozložený bolus nebo kombinovaný bolus. Podobné léčby však lze dosáhnout touto alternativou:

* Zadání sacharidů, ale ne bolusu pro ně. The loop algorithm will react more aggressively. V případě potřeby použijte **eCarbs** (rozložené sacharidy).

* If you are tempted to just use the extended or multiwave bolus directly on the pump, AndroidAPS will penalize you with disabling the closed loop for the next six hours to ensure that no excess insulin dosage is calculated.

![Zakázaná smyčka po kombinovaném bolusu](../images/combo/combo-tips-multiwave-bolus.png)

## Poplachy při bolusu

* If AndroidAPS detects that an identical bolus has been successfully delivered at the same minute, bolus delivery will be prevented with identical number of insulin units. If you really want to bolus the same insulin twice in short succession, just wait two more minutes and then deliver the bolus again. If the first bolus has been interrupted or was not delivered for other reasons, you can immediately re-submit the bolus since AAPS 2.0.
* Na pozadí je bezpečnostní mechanismus, který čte bolusovou historii pumpy před posláním nového bolusu, aby se správně spočítalo IOB, a to i tehdy, je-li bolus podán přímo z pumpy. Musí být zabráněno nerozpoznatelným položkám.

![Dvojitý bolus](../images/combo/combo-tips-doppelbolus.png)

* Tento mechanismus je také zodpovědný za druhou příčinu chyby: Pokud během používání bolusové kalkulačky dojde k dodání jiného bolusu přes pumpu a tím ke změně historie, je kalkulace bolusu špatná a bolus se předčasně ukončí. 

![Zrušený bolus](../images/combo/combo-tips-history-changed.png)