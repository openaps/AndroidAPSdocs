## Vývojové větve

<font color="#FF0000"><strong>Upozornění:</strong></font>
Vývojová větev slouží výhradně k dalšímu vývoji AndroidAPS. Měli byste ji používat na samostatném telefonu pro účely testování, <font color="#FF0000"><strong>nikoli k provozování smyčky!</strong></font>

The most stable version of AndroidAPS to use is that in the [Master branch](https://github.com/nightscout/AndroidAPS/tree/master). K provozování smyčky je doporučeno zůstat u větvě Master.

Dev verze AndroidAPS je pouze pro vývojáře a testery, kteří bez problémů pracují s ladicími výpisy, procházejí logy a eventuálně spustí debugger, aby k chybě připravili zprávu, která je užitečná pro vývojáře (ve zkratce: dev je pro lidi, kteří vědí, co dělají, aniž by potřebovali něčí asistenci!). Proto je mnoho nedokončených funkcí zakázaných. K povolení těchto funkcí vstupte do **Vývojářského režimu** vytvořením souboru s názvem `engineering_mode` ve stejné složce, kde se nacházejí log soubory. Povolením vývojářského režimu můžete zcela narušit běh smyčky.

Nicméně Dev větev je dobré místo, kde se ukazují testované funkce a můžete zde pomoci vyřešit nějaké chyby a poskytnout zpětnou vazbu, jak nové funkce pracují v praxi. Uživatelé často testují Dev větev na starém telefonu a pumpě, než jsou si jistí stabilitou - jakékoliv použití je na vaše vlastní riziko. Při testování všech nových funkcí pamatujte na to, že se chystáte zkoušet funkce, které jsou stále ve fázi vývoje. Čiňte tak na vlastní riziko a s náležitou pečlivostí, abyste neohrozili svou bezpečnost.

If you find a bug or think something wrong has happened when using the Dev branch, then view the [issues tab](https://github.com/nightscout/AndroidAPS/issues) to check whether anyone else has found it, or add it yourself if not. Čím více informací sdělíte, tím lépe (nezapomeňte sdílet své [log soubory](../Usage/Accessing-logfiles.md). Nové funkce mohou být také diskutovány v [Gitter](https://gitter.im/MilosKozak/AndroidAPS) místnosti.