# Development branch

<font color="#FF0000"><strong>Attention:</strong></font>
Dev branch is for the further development of AAPS only. Elle doit être utilisée sur un téléphone séparé pour faire des tests <font color="#FF0000"><strong>mais pas pour la boucle réellement utilisée !</strong></font>

The most stable version of AAPS to use is that in the [Master branch](https://github.com/nightscout/AndroidAPS/tree/master). Il est conseillé de rester sur la branche Master pour une boucle réellement utilisée.

The dev version of AAPS is only for developers and testers comfortable dealing with stacktraces, looking through log files and maybe firing up the debugger to produce bug reports that are helpful to the developers (in short: people that know what they are doing without being assisted!). Par conséquent, de nombreuses fonctionnalités inachevées sont désactivées. Pour activer ces fonctionnalités, activez le **Mode Ingénierie** en créant un fichier nommé `engineering_mode` dans le répertoire /AAPS/extra. Activer le mode d'ingénierie pourrait complètement casser la boucle.

Cependant, la branche Dev est un bon endroit pour voir quelles fonctionnalités sont testées et pour aider à éliminer les bogues et donner des commentaires sur le fonctionnement pratique des nouvelles fonctionnalités. Souvent, les gens testent la branche Dev sur un vieux téléphone et une pompe jusqu'à ce qu'ils soient confiants sur sa stabilité - toute utilisation de celle-ci est à vos propres risques. Lors de l'essai de nouvelles fonctionnalités, n'oubliez pas que vous choisissez de tester une fonctionnalité de développement toujours en cours. Faites le à vos propres risques & avec la diligence voulue pour vous garder en sécurité.

Si vous trouvez un bug ou pensez que quelque chose d'anormal s'est produit lors de l'utilisation de la branche Dev, alors consultez l'onglet [problèmes](https://github.com/nightscout/AndroidAPS/issues) pour vérifier si quelqu'un d'autre a reporté le même problème, ou ajoutez-le vous-même si ce n'est pas le cas. The more information you can share here the better (don't forget you may need to share your [log files](../GettingHelp/AccessingLogFiles.md). Les nouvelles fonctionnalités peuvent également être discutées dans [discord](https://discord.gg/4fQUWHZ4Mw).

Une version de dev a une date d'expiration. Cela semble gênant lorsqu'on son utilisation est satisfaisante, mais cela a un but : Lorsqu'une seule version de développement est en cours d'utilisation, il est plus facile de traquer les bugs que les gens signalent. Les développeurs ne veulent pas se retrouver dans une situation où il y a trois versions de dev dans la nature où les bogues sont corrigés dans certaines et pas dans d'autres, et les gens continuent de remonter des problèmes corrigés.

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