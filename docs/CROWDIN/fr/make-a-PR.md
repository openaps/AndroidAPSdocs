# Faire votre première PR (pull request)

À un moment donné, on vous proposera de faire une RP. PR est l'abréviation de pull request, et c'est un moyen d'ajouter ou de modifier des éléments stockés dans GitHub. En fait, il n'est pas difficile de le faire et c'est une excellente façon de contribuer. Cette documentation existe parce que des gens comme vous ont fait des pull requests. Ne vous inquiétez pas de faire une erreur ou de modifier les mauvais documents. Il y a toujours un processus de révision avant que les modifications ne soient fusionnées dans le dépôt officiel AndroidAPS. Vous ne pouvez pas abîmer les fichiers originaux à cause d'une erreur dans le processus de pull request. Le déroulement est le suivant :

* Éditer et améliorer le code ou la documentation en modifiant le contenu existant.
* Vérifiez que vos modifications semblent correctes.
* Prenez quelques notes de ce qui a changé pour que les gens puissent comprendre les modifications.
* Créez une pull request, ce qui demandera aux administrateurs de considérer vos modifications.
* Ils feront une révision et soit (1) fusionneront vos changements, (2) commenteront vos changements, ou (3) commenceront un nouveau document avec vos changements.

(Remarque : Si vous êtes une personne visuelle, il y a une vidéo YouTube [ici](https://youtu.be/4b6tsL0_kzg) montrant le workflow des PR.)

Dans cet exemple, nous allons faire une modification sur AndroidAPSdocs. Ceci n'a PAS besoin d'être fait dans l'environnement linux sur votre rig. Ceci peut être fait sur n'importe quel PC Windows, Mac, etc. (tout ordinateur avec accès Internet).

1. Allez sur https://github.com/openaps/AndroidAPSdocs et cliquez sur Fork en haut à droite pour faire votre propre copie du repository. ![Fork repo](./images/PR0.png)
2. Allez sur http://androidaps.readthedocs.io/en/latest/Getting-Started/Safety-first.html (ou similaire) et naviguez jusqu'à la page que vous souhaitez modifier. Cliquez sur la boîte noire en bas à gauche de la page avec le mot vert "v: latest" (ou similaire). Dans la fenêtre qui apparaît, cliquez sur le mot "Edit" pour l'éditer dans GitHub.  
    ![edit doc](./images/PR1.png) Ou vous pouvez cliquer sur le lien "Edit in Github" dans le coin supérieur droit, puis cliquer sur l'icône du crayon qui apparaît dans la barre supérieure du contenu de la page à éditer. ![RTD io](./images/PR2.png)
3. l'une ou l'autre des options de l'étape 2 créera une nouvelle branche dans VOTRE repository où vos modifications seront enregistrées. Effectuez vos modifications dans ce fichier. ![Edit branche](./images/PR3.png)
4. Vous avez travaillé dans l'onglet "<>Edit file". Sélectionnez l'onglet " Preview changes " pour un aperçu afin de vous assurer que tout ce que vous avez modifié ressemble bien à ce que vous vouliez (typpos etc.). Si vous remarquez quelque chose à corriger, revenez à l'onglet Edit pour y apporter d'autres améliorations. ![preview mode](./images/PR5.png)
5. Lorsque vous avez terminé vos modifications, faites défiler jusqu'au bas de la page. Dans la case au bas de la page, inscrivez vos commentaires dans le champ de texte "Add an optional extended description...". Le titre par défaut est le nom du fichier. Essayez de mettre une phrase expliquant la **raison** du changement. Expliquer la raison aide les reviewers à comprendre ce que vous tentez de faire avec cette PR. ![commit comments](./images/PR4.png)
6. Cliquez sur le bouton vert " Propose file changes " ou " Commit changes ". Dans la page qui s'affiche, cliquez sur "Create Pull Request" et cliquez à nouveau sur "Create Pull Request" dans la page suivante. ![create pull request](./images/PR6.png)
7. Voilà qui termine la création d'une pull request, PR. GitHub attribue un numéro à la PR, situé après le titre et une hash mark. Revenez sur cette page pour vérifier les réactions (ou, si vous recevez des notifications Github par email, vous recevrez des emails vous informant de toute activité sur la PR). La modification sera placée dans une liste de PR que l'équipe examinera et sur laquelle elle pourra éventuellement donner son avis avant de mettre en ligne la documentation d'AndroidAPS ! Si vous souhaitez suivre l'état de votre PR, vous pouvez cliquer sur le logo de la cloche dans le coin supérieur droit de votre compte GitHub et voir toutes vos PRs. ![PR tracking](./images/PR7.png)


Félicitations, vous avez fait votre première contribution !

PS, votre fork et votre branche seront toujours sur votre compte GitHub personnel. Après avoir reçu un avis de fusion de votre RP, vous pouvez supprimer votre branche si vous avez terminé (l'étape 8 vous fournira un lien pour supprimer la branche une fois qu'elle aura été fermée ou fusionnée). Pour les éditions futures, si vous suivez cette procédure, vous devrez toujours commencer par mettre à jour votre version du repository AndroidAPSdocs. Si vous choisissez d'utiliser une autre méthode pour lancer une demande RP (par exemple, éditer à partir de la branche maître de votre repo forké comme point de départ), vous devrez d'abord effectuer une "comparaison" et intégrer les mises à jour qui ont eu lieu depuis votre dernier changement de fork. Comme les gens ont tendance à oublier de mettre à jour leurs repo, nous vous recommandons d'utiliser le processus de PR décrit ci-dessus jusqu'à ce que vous soyez familiarisé avec les "comparaisons".

#### Conseils avancés pour ajouter plusieurs images à la documentation

Si vous prévoyez de faire beaucoup de modifications, y compris l'ajout d'images pour illustrer certaines parties de la documentation (merci !), vous voudrez peut-être opter pour la méthode suivante:

* Au fur et à mesure que vous sauvegardez les captures d'écran, renommez-les avec un nom descriptif - mais essayez de ne pas utiliser d'espaces car cela gênerait Github. Utilisez plutôt des underscores. C'est-à-dire Example_batch_images_upload.png plutôt que "Example batch images upload.png".

* Vous pouvez facilement télécharger plusieurs images en :
    
   1. Naviguant jusqu'au dossier images (https://github.com/openaps/AndroidAPSdocs/tree/master/docs/EN/images - mais assurez-vous d'être dans votre fork/copie du dossier docs Images pour pouvoir le faire (remplacez "openaps" dans l'URL par votre pseudo github)).
    
   2. Cliquez dans le coin supérieur droit indiquant "Upload files".
    
   3. Glissez-déposez vos images à l'écran
    
   4. Livrez-les (commit) dans votre branche.
    
   5. Maintenant, vous pouvez utiliser l'URL/chemin relatif de chaque image dans votre documentation. (Note: les chemins relatifs sont des URL commenceant par "./")
   
   6. Pour voir des exemples d'ajout d'images, vous pouvez regarder le code "brut" d'une page pour voir un exemple d'une page à laquelle des images sont déjà intégrées avec succès. L'essentiel est d'avoir une description en texte clair, suivie d'un lien avec un chemin relatif vers l'image, comme ceci : `![Example d'upload de plusieurs images](./images/Example_batch_images_upload.png)`
   
    (Ce code est exactement la façon dont l'image ci-dessous est incorporée pour être affichée.)

![Example d'upload de plusieurs images](./images/Example_batch_images_upload.png)

   7. Après avoir ajouté des images ou fait des ajustements, vous pouvez soumettre une PR à la branche principale d'AndroidAPSdocs.
