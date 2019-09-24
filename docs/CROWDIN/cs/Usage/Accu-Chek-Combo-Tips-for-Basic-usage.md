# AkkuChek Combo typy pro základní využití

## Jak zajistit bezproblémové používaní

* Vždy noste telefon sebou, v noci ho nechte u postele.
* Vždy se snažte mít baterii v pumpě plnou jak nejvíce je to možné. Přečtěte si kapitolu baterie, pro tipy jak toho nejlépe dosáhnout.
* **Nespouštějte aplikaci ruffy**, pokud používáte AAPS. Pokud je aplikace spuštěna znova, zpravidla dojde k přerušení komunikace s pumpou. Jakmile je jednou pumpa spojena s ruffy, není potřeba provádět žádné opětovné spojení. A to ani v případě, že byl telefon restartován. Pumpa se připojí automaticky. Je doporučeno přesunout aplikaci ruffy na nepoužívanou obrazovku nebo do složky, kterou nepoužíváte, abyste předešli nechtěnému spuštění.
* Pokud omylem spustíte ruffy při běžící smyčce, nejsnazším řešením pro nápravu situace je restart celého telefonu.
* Kdykoliv je to možné, ovládejte pumpu jen pomocí AndroidAPS. Doporučujeme používat zámek klávesnice pumpy **NASTAVENÍ PUMPY/ ZÁMEK TLAČÍTEK / ZAPNOUT**. Ovládat pumpu přímo je zpravidla potřeba pouze při výměně baterie nebo zásobníku. ![Zámek](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/keylock.png?raw=true)

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

![Pumpa nedostupná](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/Pump_Unreachable.png) ![Žádné připojení k pumpě](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/No_connection_to_pump.png)

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

![Bluetooth povoleno](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/Compo.png?raw=true)

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
* Pokud hodiny pumpy „nepřežijí“ krátkou výměnu baterie, je pravděpodobné, že kondenzátor, který udržuje hodiny běžící během krátkého výpadku proudu, je rozbitý. V takovém případě Vám může pomoci pouze výměna pumpy firmou Roche, což během záruční doby není problém. 
* Hardware a software telefonu (operační systém Android a bluetooth stack) také ovlivňují životnost baterie pumpy, i když ještě nejsou zcela známy přesné faktory. Máte-li příležitost, vyzkoušejte jiný smartphone a porovnejte baterie.

## Změny letního času

* Ovladač v současné době nepodporuje automatickou změnu času v pumpě.
* Během noci, kdy se mění čas, je čas telefonu aktualizován, ale čas pumpy zůstává beze změny. To vede k alarmu v důsledku rozdílných časů mezi systémy ve 3 ráno.
* Pokud nechcete být probuzeni, **deaktivujte automatický přechod na letní čas v mobilním telefonu** večer před změnou času a upravte časy ručně ráno.

## Rozšířený bolus, multiwave bolus

Algoritmus OpenAPS nepodporuje paralelní rozšířený bolus nebo multiwave bolus. Podobné léčby však lze dosáhnout touto alternativou:

* Zadání sacharidů, ale ne bolusu pro ně. Algoritmus smyčky bude reagovat více agresivně. V případě potřeby použijte **eSacharidy** (rozložené sacharidy).

* If you are tempted to just use the extended or multiwave bolus directly on the pump, AndroidAPS will penalize you wth disabling the closed loop for the next six hours to ensure that no excess insulin dosage is calculated.

![Disabled loop after multiwave bolus](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/Multiwave_Bolus.png)

## Poplachy při bolusu

* Pokud AndroidAPS zjistí, že identický bolus byl úspěšně dodán ve stejné minutě, může být zabráněno bolusu se stejnou velikostí. Pokud opravdu chcete poslat stejný bolus dvakrát v krátké době po sobě, stačí počkat dvě minuty a pak podat bolus znovu. Jestliže byl první bolus přerušen z jiných důvodů, můžete od AAPS 2.0 podat bolus ihned.
* Na pozadí je bezpečnostní mechanismus, který čte bolusovou historii pumpy před posláním nového bolusu, aby se správně spočítalo IOB, a to i tehdy, je-li bolus podán přímo z pumpy. Musí být zabráněno nerozpoznatelným položkám.

![Dvojitý bolus](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/f9c56c930dc564c1649cd8e3764e077ffc02c5ef/resources/Doppelbolus.png)

* Tento mechanismus je také zodpovědný za druhou příčinu chyby: Pokud během používání bolusové kalkulačky dojde k dodání jiného bolusu přes pumpu a tím ke změně historie, je kalkulace bolusu špatná a bolus se předčasně ukončí. 

![Zrušený bolus](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/f9c56c930dc564c1649cd8e3764e077ffc02c5ef/resources/History_changed.png)