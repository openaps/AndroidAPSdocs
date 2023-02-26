# Comment éditer la documentation

**Cette description est juste pour l'édition de la documentation en anglais. Toutes les nouvelles informations doivent être ajoutées d'abord en Anglais. Si vous voulez traduire la documentation dans d'autres langues (merci), utilisez [crowdin](https://crowdin.com/project/androidapsdocs).**

Pour savoir comment formater le texte (titre, gras ...) et définir les liens, reportez-vous à la section ["Syntaxe de code"](make-a-PR-code-syntax) de cette page.

## Généralités

Si vous avez des questions, des commentaires ou de nouvelles idées, vous pouvez contacter l'équipe de documentation via [discord](https://discord.gg/4fQUWHZ4Mw). Faire un PR n'est pas difficile, mais nous pouvons vous aider à éditer la documentation.

À un moment donné, on vous suggère de faire un PR. PR est l'acronyme de Pull Request, et c'est une façon d'ajouter ou de modifier des informations enregistrées dans GitHub. En fait, ce n'est pas si difficile à faire et c'est une excellente façon de contribuer. Cette documentation est ici parce que les gens comme vous ont fait des PRs. Ne craignez pas de vous tromper ou d’éditer les mauvais documents. Il y a toujours un processus de vérification avant que les modifications ne soient fusionnées dans le référentiel "formel" de la documentation AndroidAPS. Vous ne pouvez pas endommager les originaux si vous faites des erreurs lors du processus de PR. Le processus général est :

* Apportez des modifications au code ou à la documentation en modifiant le contenu existant.
* Vérifiez deux fois que vos modifications vous semblent bonnes.
* Prenez quelques notes sur ce qui a changé afin que les personnes puissent comprendre les modifications.
* Créer un Pull Request, qui demande aux administrateurs d'utiliser vos modifications.
* Ils feront une vérification et soit (1) ils fusionneront vos modifications, (2) ils vous feront un retour au sujet de vos modifications, ou (3) ils commenceront un nouveau document avec vos modifications.

(Remarque : Si vous êtes un apprenant visuel, il y a une vidéo YouTube [ici](https://youtu.be/4b6tsL0_kzg) montrant le flux de travail PR.)

Pour notre exemple, nous allons faire une modification à AndroidAPSdocs. Cela ne doit PAS être fait dans l'environnement linux de votre plateforme. Cela peut être fait sur n'importe quel PC Windows, Mac, etc. (n'importe quel ordinateur avec un accès à Internet).

1. Accédez à https://github.com/openaps/AndroidAPSdocs et appuyez sur Fork en haut à droite pour faire votre propre copie du référentiel.

![Fork repo](./images/PR0.png)

2. Allez sur n'importe quelle page et accédez à la page que vous souhaitez modifier. Cliquez sur la boîte noire en bas à gauche de la page avec le mot vert "v: latest" ou similaire. Dans la fenêtre pop up qui apparaît, cliquez sur le mot "edit" pour éditer dans GitHub. 

![éditer un document](./images/PR1.png)

     Ou vous pouvez cliquer sur le lien "Edit in GitHub" dans le coin supérieur droit, puis cliquer sur l'icône en forme de crayon qui apparaît dans la barre supérieure de la page à éditer.
    

![RTD io](./images/PR2.png)

3. L'une ou l'autre des options de l'étape 2 créera une nouvelle branche dans VOTRE repository Github où vos modifications seront enregistrées. Effectuez vos modifications dans le fichier.

Nous utilisons markdown pour les pages de documentation. Le fichier a obtenu le suffixe ".md". La spécification Markdown n'est pas corrigée et nous utilisons pour le moment le myst_parser pour nos fichiers markdown. Prenez soin d'utiliser la bonne syntaxe [décrite ci-dessous](make-a-PR-code-syntax).

![Éditer la branche](./images/PR3.png)

4. Vous avez travaillé dans l'onglet "<>Edit file". Sélectionnez l'onglet "Preview changes" pour afficher une prévisualisation de votre page et vérifier que tous vos changements sont comme vous le vouliez. Si vous voyez que c'est perfectible, revenez à l'onglet d'édition pour faire vos améliorations. 

![mode de prévisualisation](./images/PR5.png)

5. Une fois vos modifications terminées, faites défiler jusqu'au bas de la page. Dans la zone du bas, indiquez vos commentaires dans le champ texte qui indique "Add an optional extended description...". Le titre par défaut est le nom de fichier. Essayez d'inclure une phrase expliquant la **raison** du la modification. Indiquer la raison permet d'aider les valideurs à comprendre ce que vous essayez de faire avec le PR.

![commit commentaires](./images/PR4.png)

6. Cliquez sur le bouton vert "Propose file changes" ou "Commit changes". Dans la page qui s'affiche, cliquez sur "Create Pull Request" et de nouveau dans la page suivante, cliquez sur "Create Pull Request".

![créer un pull request](./images/PR6.png)

7. Cela termine l'ouverture d'un Pull Request, PR. GitHub affecte au PR un numéro, situé après le titre et un caratère dièse. Retournez sur cette page pour vérifier si vous avez un retour (ou si vous avez des notifications GitHub envoyées par email, vous recevrez des emails vous indiquant toutes activités sur le PR). La modification sera maintenant dans une liste de PR que l'équipe de documentation va examiner et elle vous fera éventuellement des commentaires avant de l'intégrer dans la documentation principale d'AndroidAPS ! Si vous voulez vérifier l'avancement du PR, vous pouvez cliquer sur le logo de la cloche dans le coin supérieur droit de votre compte GitHub pour voir toutes vos notifications.

![Suivi des PR](./images/PR7.png)

PS : Votre fork et votre branche seront toujours dans votre propre compte GitHub. Après avoir reçu une notification indiquant que votre PR avait été fusionné, vous pouvez supprimer votre branche si vous en avez terminé (la zone de notification de l'étape 8 fournira un lien pour supprimer la branche une fois qu'elle a été fermée ou fusionnée). Pour les modifications ultérieures, si vous suivez cette procédure, les éditions débuteront toujours par une version mise à jour des documents AndroidAPSdocs. Si vous choisissez d'utiliser une autre méthode pour faire une demande de PR (par ex. en partant de la branche master de dossier local comme point de départ), vous devez vous assurer que votre dossier fork est à jour en effectuant une "comparaison" en premier et en fusionnent dans toutes les mises à jour qui ont été faite depuis que vous avez mis à jour votre fork. Comme les gens ont tendance à oublier de mettre à jour leur fork, nous recommandons d'utiliser la procédure décrite ci-dessus pour faire vos PR jusqu'à ce que vous vous familiarisiez avec les exécutions des "comparaisons".

(make-a-PR-code-syntax)=

## Syntaxe du Code

Nous utilisons markdown pour les pages de documentation. Les fichiers ont le suffixe « .md ».

(make-a-PR-image-size)=

### Taille des images

Si vous utilisez des images, veuillez utiliser des tailles raisonnables. Les images de capture d'écran doivent être au maximum de **1050 pixels de largeur**.

### Formatage du texte

* gras : `**text**`
* italique : `*text*`
* Titre 1 : `# titre`
* Titre 2 : `## titre`
* Titre 3 : `### titre`

### Liste triée

    1. premier
    1. deusième
    1. troisième
    

1. premier
2. deuxième
3. troisième

### Liste non-triée

    - un élément
    - un autre élément
    - et un autre élément
    

* un élément
* un autre élément
* et un autre élément

### liste à plusieurs niveaux

Vous pouvez insérer des "sous-listes" dans les listes en ajoutant 4 espaces de plus à droite que le niveau précédent.

    1. premier
    1. deusième
    1. troisième
      1. un élément
      1. un autre élément
      1. et un autre élément
    1. quatre
    1. cinq
    1. six
    

1. premier
2. deuxième
3. troisième 1. un élément 1. un autre élément 1. et un autre élément
4. quatre
5. cinq
6. six

### Images

* images : `![alt text](../images/file.png)`

### Liens

* lien externe : `[alt text](www.url.tld)`
* lien interne vers une page .md : `[texte alternatif](../folder/file.md)`
* lien interne à un titre : `[texte alt](../dossier/file.md#titre)`

### Liens internes

Si vous voulez définir un lien interne dans la documentation AAPS, n'utilisez que des **liens relatifs**. C'est la seule façon d'avoir un lien qui marche également dans toutes les autres langues (Chèque, Allemand...).

* `[texte](../Usage/Test.md)` va définir un lien hypertexte interne un répertoire au dessus de celui où vous êtes puis dans le sous-répertoire /Usage. La fin du fichier cible doit être .md (pas .html)
* `[texte](./Usage/Test.md)` va définir un lien hypertexte de là où vous êtes dans le sous-répertoire /Usage. La fin du fichier cible doit être .md
* Pour définir le lien vers une **ancre** (par exemple un titre) vous laissez l'extension .md en place ! 
  * `[texte](../Usage/Test.md#ancre)`

### Remarques

    ```{admonition} Remarque
    :class: note
    
    C'est une remarque.
    

    <br />```{admonition} Remarque
    :class: note
    
    C'est une remarque.
    

### Warnings

    ```{admonition} Avertissement
    :class: warning
    
    Ceci est un avertissement.
    

    <br />```{admonition} Avertissement
    :class: warning
    
    Ceci est un avertissement.
    

## Ajout de plusieurs images à la documentation

Si vous prévoyez de faire beaucoup de modifications, y compris d'ajouter des images pour illustrer certaines parties de la documentation (merci !), vous pouvez adopter l'approche suivante :

* Au fur et à mesure que vous enregistrez des captures d'écran, renommez les avec un nom descriptif, mais n'utilisez pas d'espaces car GitHub n'aime pas cela. Utilisez à la place des underscores. Par ex. Exemple_lots_images_upload.png au lieu de "Exemple lots images upload.png". 
* Veuillez utiliser des tailles raisonnables. Les images de capture d'écran doivent être au maximum de **1050 pixels de largeur**.
* Vous pouvez télécharger des images par lots facilement :
  
  1. Naviguez jusqu'au dossier images (https://github.com/openaps/AndroidAPSdocs/tree/master/docs/EN/images - mais vérifiez que vous êtes bien dans votre fork/copie du dossier Images de la documentation pour pouvoir faire ceci (remplacez "openaps" dans l'URL par votre nom d'utilisateur GitHub)).
  
  2. Cliquez dans le coin supérieur droit là ou c'est écrit "Upload files"
  
  3. Glissez et déposez vos images dans la fenêtre
  
  4. Faites un Commit de cela dans votre branche
  
  5. Vous pouvez maintenant rechercher le chemin d'accès URL/relatif de chaque fichier et l'utiliser en référence pour ajouter les images dans une page de la documentation.
  
  6. Pour voir des exemples sur la façon d'ajouter des images, vous pouvez regarder le code "brut" d'une page qui contient déjà des images intégrées avec succès. Assurez-vous d'utiliser le [code correct](./make-a-PR.html#code-syntax) pour la page sur laquelle vous êtes (.md). L'essentiel est d'avoir une description en texte clair, suivie d'un lien avec un chemin relatif vers l'image, comme ceci :
    
    * Pour les pages .md : `![Exemple de téléchargement d'images par lots](../images/Example_batch_images_upload.png)` (Ce code est exactement la façon dont l'image ci-dessous est intégrée pour être affichée.)
    * Pour les pages .rst : `.. image:: ../images/Example_batch_images_upload.png`  
      `:alt: Exemple de téléchargement d'images par lots`

![Exemple de téléchargement d'images par lots](./images/Example_batch_images_upload.png)

7. Après avoir ajouté des images ou effectué des modifications, vous pouvez soumettre un PR à la branche principale d'AndroidAPSdocs.