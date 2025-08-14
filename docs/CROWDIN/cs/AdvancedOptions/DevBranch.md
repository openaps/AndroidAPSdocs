# Development branch

<font color="#FF0000"><strong>Upozornění:</strong></font>
Vývojová větev slouží výhradně k dalšímu vývoji AAPS. Měli byste ji používat na samostatném telefonu pro účely testování, <font color="#FF0000"><strong>nikoli k provozování smyčky!</strong></font>

Nejstabilnější verze AAPS je verze v [Master větvi](https://github.com/nightscout/AndroidAPS/tree/master). K provozování smyčky je doporučeno zůstat u větvě Master.

Dev verze AAPS je pouze pro vývojáře a testery, kteří bez problémů pracují s ladicími výpisy, procházejí logy a eventuálně spustí debugger, aby k chybě připravili zprávu, která je užitečná pro vývojáře (ve zkratce: dev je pro lidi, kteří vědí, co dělají, aniž by potřebovali něčí asistenci!). Proto je mnoho nedokončených funkcí zakázaných. K povolení těchto funkcí zapněte **Vývojářský režim** vytvořením souboru s názvem `engineering_mode ` v adresáři /AAPS/extra . Povolením vývojářského režimu můžete zcela narušit běh smyčky.

Nicméně Dev větev je dobré místo, kde se ukazují testované funkce a můžete zde pomoci vyřešit nějaké chyby a poskytnout zpětnou vazbu, jak nové funkce pracují v praxi. Uživatelé často testují Dev větev na starém telefonu a pumpě, než jsou si jistí stabilitou - jakékoliv použití je na vaše vlastní riziko. Při testování všech nových funkcí pamatujte na to, že se chystáte zkoušet funkce, které jsou stále ve fázi vývoje. Čiňte tak na vlastní riziko a s náležitou pečlivostí, abyste neohrozili svou bezpečnost.

Pokud najdete chybu nebo si myslíte, že se stalo něco špatného při používání Dev větve, pak se podívejte na záložku [Issues](https://github.com/nightscout/AndroidAPS/issues), abyste prověřili, jestli to už nenahlásil někdo jiný, pokud ne, tak problém rovnou nahlaste. The more information you can share here the better (don't forget you may need to share your [log files](../GettingHelp/AccessingLogFiles.md). O nových funkcích můžete diskutovat také na [Discordu](https://discord.gg/4fQUWHZ4Mw).

Verze pro vývojáře má konečný datum vypršení platnosti. To se zdá nepříjemné při jeho uspokojivém používání, ale má to svůj smysl. Když je rozšířena pouze jedna vývojářská verze, je snažší sledovat nahlášené chyby. Vývojáři nechtějí být v situaci, kdy jsou mezi lidmi 3 různé vývojářské verze, v některých jsou opravené chyby a v jiných nejsou, a lidé stále znovu hlásí již vyřešené chyby.

(github-pr-test)=

## Test items in a pull request (GitHub CI actions deploy)

Available from 3.3.2.1.dev

- Suitable for testers or those helping with testing.

```{eval-rst}
.. raw:: html

    <!--crowdin: exclude-->
    <div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
      <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
        <iframe
          src="https://www.youtube.com/embed/REQ7RqzoUkM"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0"
          allowfullscreen>
        </iframe>
      </div>
    </div>
```

![aaps_ci_pr_ci](../images/Building-the-App/CI/aaps_ci_pr_ci.png)

- PR number: Please enter the PR number that you want to test.

- PR reference types: PR reference types include two options:
    
    - head:
    - Fetches the actual content from the PR author’s branch (i.e., the original commit history without any merge operations).
    - This is equivalent to the original state of the PR branch, as if it were fetched directly from a fork or feature branch.
    
    - merge:
    
    - Fetches the result of GitHub’s pre-simulated merge of the PR into the target branch (e.g., dev).
    - This is a virtual merge commit automatically created by GitHub.
    - This commit only exists when the PR has no conflicts and is mergeable.
    
    - variant:
    
    - Please refer to <variant>
    
    (variant)=
    
    ### variant
    
    - Select the variant you need: 
        - fullRelease: For regular pump usage with full functionality.
        - [aapsclient、aapsclient2](../RemoteFeatures/RemoteControl.md#aapsclient) For caregivers (requires [Nightscout](../SettingUpAaps/Nightscout.md))。
        - pumpcontrol
        - Text ending with “Debug” indicates that the APK will be built in debug mode, which is useful for troubleshooting.