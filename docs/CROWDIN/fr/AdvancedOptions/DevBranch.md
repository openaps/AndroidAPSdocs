# Branche de développement

```{warning}
La branche dev sert uniquement à la suite du développement d'AAPS. Elle doit être utilisée sur un téléphone séparé, pour des tests, <font color="#FF0000">**pas pour une vraie boucle !**</font>
```

La version la plus stable d'AAPS est celle de la [branche Master](https://github.com/nightscout/AndroidAPS/tree/master). Pour une boucle réellement utilisée, il est conseillé de rester sur la branche Master.

La version dev d'AAPS est uniquement pour les développeurs et les testeurs à l'aise avec les stacktraces, la lecture des fichiers log et peut-être l'utilisation du débogueur, pour produire des rapports de bugs utiles aux développeurs (en bref : des personnes qui savent ce qu'elles font sans aide !). Par conséquent, de nombreuses fonctionnalités inachevées sont désactivées. Pour activer ces fonctionnalités, passez en **mode Ingénierie** en créant un fichier nommé `engineering_mode` dans le dossier /AAPS/extra . Activer le mode Ingénierie peut complètement casser la boucle.

Cependant, la branche Dev est un bon endroit pour voir quelles fonctionnalités sont en test, pour aider à corriger les bugs et pour donner votre avis sur le fonctionnement des nouvelles fonctionnalités en pratique. Souvent, les gens testent la branche Dev sur un ancien téléphone et une ancienne pompe, jusqu'à ce qu'ils soient sûrs qu'elle est stable. Toute utilisation est à vos propres risques. Quand vous testez de nouvelles fonctionnalités, n'oubliez pas que vous choisissez de tester une fonctionnalité encore en développement. Faites-le à vos propres risques & avec toute la prudence nécessaire pour rester en sécurité.

Si vous trouvez un bug ou pensez qu'un problème est arrivé avec la branche Dev, regardez l'[onglet issues](https://github.com/nightscout/AndroidAPS/issues) pour voir si quelqu'un d'autre l'a déjà trouvé, ou ajoutez-le vous-même sinon. Plus vous donnez d'informations, mieux c'est (n'oubliez pas que vous devrez peut-être partager vos [fichiers log](../GettingHelp/AccessingLogFiles.md)). Les nouvelles fonctionnalités peuvent aussi être discutées sur [Discord](https://discord.gg/4fQUWHZ4Mw).

Une version de dev a une date d'expiration. Cela semble gênant quand on en est satisfait, mais cela a un but. Quand une seule version dev circule, il est plus facile de suivre les bugs signalés. Les développeurs ne veulent pas se retrouver avec trois versions de dev en circulation, avec des bugs corrigés dans certaines et pas dans d'autres, et des gens qui continuent à signaler des bugs déjà corrigés.

(branch-ci-test)=

## Tester une branche précise (branch-ci)

Pour compiler une branche de test, choisissez branch-ci : cela vous permet de choisir une branche précise pour créer l'APK. Vous pouvez utiliser cette méthode quand vous devez tester la branche dev.

![aaps_ci_branch_ci1](../images/Building-the-App/CI/aaps_ci_branch_ci1.png)

![aaps_ci_branch_ci2](../images/Building-the-App/CI/aaps_ci_branch_ci2.png)

(github-pr-test)=

## Tester le contenu d'une pull request (déploiement par les actions CI de GitHub)

Disponible depuis la version 3.3.2.1.dev

- Adapté aux testeurs ou aux personnes qui aident aux tests.

```{eval-rst}
.. raw:: html

    <!--crowdin: exclude-->
    <div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
      <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
        <iframe
          src="https://geo.dailymotion.com/player/x9rdx1q.html?video=x9rdx1q&loop=true&mute=true"
          loading="lazy"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0"
          allowfullscreen>
        </iframe>
      </div>
    </div>
```

![aaps_ci_pr_ci](../images/Building-the-App/CI/aaps_ci_pr_ci.png)

- Target repository : le dépôt qui contient la PR, au format propriétaire/dépôt (owner/repo). Gardez la valeur par défaut **nightscout/AndroidAPS**, sauf si on vous a dit d'utiliser un autre dépôt (seuls les développeurs doivent le faire).

- PR number : entrez le numéro de la PR que vous voulez tester.

- PR reference types : il y a deux types de référence de PR :
    
    - head :
    - Récupère le contenu réel de la branche de l'auteur de la PR (c'est-à-dire l'historique original des commits, sans aucune fusion).
    - Cela correspond à l'état d'origine de la branche de la PR, comme si elle était récupérée directement depuis un fork ou une branche de fonctionnalité.
    
    - merge :
    
    - Récupère le résultat de la fusion de la PR dans la branche cible (par ex. dev), simulée à l'avance par GitHub.
    - C'est un commit de fusion virtuel, créé automatiquement par GitHub.
    - Ce commit existe seulement si la PR n'a pas de conflits et peut être fusionnée.
    
    - variant :
    
    - Voir [variante](#browserbuild-variant)