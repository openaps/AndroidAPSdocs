## Vývojové větve

<font color="#FF0000"><strong>Upozornění:</strong></font>
Vývojová větev slouží výhradně k dalšímu vývoji AndroidAPS. Měli byste ji používat na samostatném telefonu pro účely testování, <font color="#FF0000"><strong>nikoli k provozování smyčky!</strong></font>

Nejstabilnější verze AndroidAPS k použití je ta v [Master](https://github.com/nightscout/AndroidAPS/tree/master) větvi. K provozování smyčky je doporučeno zůstat u větvě Master.

Dev verze AndroidAPS je pouze pro vývojáře a testery, kteří bez problémů pracují s ladicími výpisy, procházejí logy a eventuálně spustí debugger, aby k chybě připravili zprávu, která je užitečná pro vývojáře (ve zkratce: dev je pro lidi, kteří vědí, co dělají, aniž by potřebovali něčí asistenci!). Proto je mnoho nedokončených funkcí zakázaných. To enable these features enter **Engineering Mode** by creating a file named `engineering__mode` (note the double underscore) in the same directory where you would find the log files. Povolením vývojářského režimu můžete zcela narušit běh smyčky.

Nicméně Dev větev je dobré místo, kde se ukazují testované funkce a můžete zde pomoci vyřešit nějaké chyby a poskytnout zpětnou vazbu, jak nové funkce pracují v praxi. Uživatelé často testují Dev větev na starém telefonu a pumpě, než jsou si jistí stabilitou - jakékoliv použití je na vaše vlastní riziko. Při testování všech nových funkcí pamatujte na to, že se chystáte zkoušet funkce, které jsou stále ve fázi vývoje. Čiňte tak na vlastní riziko a s náležitou pečlivostí, abyste neohrozili svou bezpečnost.

Pokud najdete chybu nebo si myslíte, že se stalo něco špatného při používání Dev větve, pak se podívejte na záložku [Issues](https://github.com/nightscout/AndroidAPS/issues), abyste prověřili, jestli to už nenahlásil někdo jiný, pokud ne, tak problém rovnou nahlaste. Čím více informací sdělíte, tím lépe (nezapomeňte sdílet své [log soubory](../Usage/Accessing-logfiles.md). Nové funkce mohou být také diskutovány v [Gitter](https://gitter.im/MilosKozak/AndroidAPS) místnosti.