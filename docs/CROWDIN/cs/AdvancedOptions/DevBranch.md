# Development branch

<font color="#FF0000"><strong>Upozornění:</strong></font>
Vývojová větev slouží výhradně k dalšímu vývoji AAPS. Měli byste ji používat na samostatném telefonu pro účely testování, <font color="#FF0000"><strong>nikoli k provozování smyčky!</strong></font>

Nejstabilnější verze AAPS je verze v [Master větvi](https://github.com/nightscout/AndroidAPS/tree/master). K provozování smyčky je doporučeno zůstat u větvě Master.

Dev verze AAPS je pouze pro vývojáře a testery, kteří bez problémů pracují s ladicími výpisy, procházejí logy a eventuálně spustí debugger, aby k chybě připravili zprávu, která je užitečná pro vývojáře (ve zkratce: dev je pro lidi, kteří vědí, co dělají, aniž by potřebovali něčí asistenci!). Proto je mnoho nedokončených funkcí zakázaných. K povolení těchto funkcí zapněte **Vývojářský režim** vytvořením souboru s názvem `engineering_mode ` v adresáři /AAPS/extra . Povolením vývojářského režimu můžete zcela narušit běh smyčky.

Nicméně Dev větev je dobré místo, kde se ukazují testované funkce a můžete zde pomoci vyřešit nějaké chyby a poskytnout zpětnou vazbu, jak nové funkce pracují v praxi. Uživatelé často testují Dev větev na starém telefonu a pumpě, než jsou si jistí stabilitou - jakékoliv použití je na vaše vlastní riziko. Při testování všech nových funkcí pamatujte na to, že se chystáte zkoušet funkce, které jsou stále ve fázi vývoje. Čiňte tak na vlastní riziko a s náležitou pečlivostí, abyste neohrozili svou bezpečnost.

Pokud najdete chybu nebo si myslíte, že se stalo něco špatného při používání Dev větve, pak se podívejte na záložku [Issues](https://github.com/nightscout/AndroidAPS/issues), abyste prověřili, jestli to už nenahlásil někdo jiný, pokud ne, tak problém rovnou nahlaste. The more information you can share here the better (don't forget you may need to share your [log files](../GettingHelp/AccessingLogFiles.md). O nových funkcích můžete diskutovat také na [Discordu](https://discord.gg/4fQUWHZ4Mw).

Verze pro vývojáře má konečný datum vypršení platnosti. To se zdá nepříjemné při jeho uspokojivém používání, ale má to svůj smysl. Když je rozšířena pouze jedna vývojářská verze, je snažší sledovat nahlášené chyby. Vývojáři nechtějí být v situaci, kdy jsou mezi lidmi 3 různé vývojářské verze, v některých jsou opravené chyby a v jiných nejsou, a lidé stále znovu hlásí již vyřešené chyby.