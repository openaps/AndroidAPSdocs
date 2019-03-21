# Aktualizace na novou verzi nebo větev (branch)

## Větev Master

**Instalace gitu (pokud ho ještě nemáte)**

* Měly by fungovat všechny verze gitu. Například <https://git-scm.com/download/win>
* Řekněte Android Studiu, kde je git.exe umístěný: File > Settings > Version Control > Git![](../images/git.png)

**Aktualizace lokální kopie**

* Klikněte na: VCS > Git > Fetch

**Výběr větve**

* Pokud chcete změnit větev, vyberte jinou z dolní lišty: master (poslední vydání) nebo jiná verze (viz níže)

![](../images/branchintray.png)

and then checkout (You can use 'Checkout as New Branch' if 'Checkout' is not available.)

![](../images/checkout.png)

**Aktualizace větve z Githubu**

* Stiskněte Ctrl+T, zvolte metodu Merge a stiskněte OK

![](../images/merge.png)

Na dolní liště uvidíte zelenou zprávu o aktualizovaném projektu

**Nahrání do telefonu**

Generate signed apk as described in [Building APK (Generate signed APK)](Building-APK.html#generate-signed-apk)

## Vývojové větve

**Pozor:** Dev verze AndroidAPS je pouze pro vývojáře a testery, kteří bez problémů pracují s ladicími výpisy, procházejí logy a eventuálně spustí debugger, aby k chybě připravili zprávu, která je užitečná pro vývojáře (ve zkratce: dev je pro lidi, kteří vědí, co dělají, aniž by potřebovali něčí asistenci!). Proto je mnoho nedokončených funkcí zakázaných. K povolení těchto funkcí vstupte do **Vývojářského režimu** založením souboru s názvem `engineering_mode` ve stejné složce, kde se nacházejí log soubory. Povolením vývojářského režimu můžete smyčku zcela narušit.

Nejstabilnější verze AndroidAPS k použití je ta v [Master](https://github.com/MilosKozak/AndroidAPS/tree/master) větvi. Doporučuje se zůstat v Master větvi, než dokončíte cíle a procvičíte se ve smyčce.

Nicméně [Dev](https://github.com/MilosKozak/AndroidAPS/tree/dev) větev je dobré místo, kde se ukazují testované funkce a můžete zde pomoci vyžehlit nějaké chyby a poskytnout zpětnou vazbu, jak nové funkce pracují v praxi. Uživatelé často testují Dev větev na starém telefonu a pumpě, než jsou si jistí stabilitou - jakékoliv použití je na vaše vlastní riziko. When testing any new features, remember that you are choosing to test a still-in-development feature. Do so at your own risk & with due diligence to keep yourself safe.

If you find a bug or think something wrong has happened when using the Dev branch, then view the [issues tab](https://github.com/MilosKozak/AndroidAPS/issues) to check whether anyone else has found it, or add it yourself if not. The more information you can share here the better (don't forget you may need to share your [log files](../Usage/Accessing-logfiles.md). The new features can also be discussed in the [gitter room](https://gitter.im/MilosKozak/AndroidAPS). <br />  
If you would like to be up-to-date on the Dev Branch you can use the same steps as already outlined above. You just need to change to the corresponding "dev"-Branch in Android Studio.