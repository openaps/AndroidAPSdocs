# Comment éditer la documentation

**Cette description est juste pour l'édition de la documentation en anglais. Toutes les nouvelles informations doivent être ajoutées d'abord en Anglais. Si vous voulez traduire la documentation dans d'autres langues (merci), utilisez [crowdin](https://crowdin.com/project/androidapsdocs).**

For hints how to format text (headline, bold...) and set links please see the ["code syntax"](#code-syntax) section of this page.

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

3. One or the other of the options in Step 2 will create a new branch in YOUR repository where your edits will be saved. Make your edits to the file.

We are using markdown for the docs pages. The file have got the suffix ".md".The Markdown specification is not fixed and we use at the moment the myst_parser for our markdown files. Take care to use the correct syntax as [described below](make-a-PR-code-syntax).

![Edit branch](./images/PR3.png)

4. Vous avez travaillé dans l'onglet "<>Edit file". Sélectionnez l'onglet "Preview changes" pour afficher une prévisualisation de votre page et vérifier que tous vos changements sont comme vous le vouliez. Si vous voyez que c'est perfectible, revenez à l'onglet d'édition pour faire vos améliorations. 

![preview mode](./images/PR5.png)

5. Une fois vos modifications terminées, faites défiler jusqu'au bas de la page. Dans la zone du bas, indiquez vos commentaires dans le champ texte qui indique "Add an optional extended description...". Le titre par défaut est le nom de fichier. Essayez d'inclure une phrase expliquant la **raison** du la modification. Indiquer la raison permet d'aider les valideurs à comprendre ce que vous essayez de faire avec le PR.

![commit comments](./images/PR4.png)

6. Cliquez sur le bouton vert "Propose file changes" ou "Commit changes". Dans la page qui s'affiche, cliquez sur "Create Pull Request" et de nouveau dans la page suivante, cliquez sur "Create Pull Request".

![create pull request](./images/PR6.png)

7. Cela termine l'ouverture d'un Pull Request, PR. GitHub affecte au PR un numéro, situé après le titre et un caratère dièse. Retournez sur cette page pour vérifier si vous avez un retour (ou si vous avez des notifications GitHub envoyées par email, vous recevrez des emails vous indiquant toutes activités sur le PR). La modification sera maintenant dans une liste de PR que l'équipe de documentation va examiner et elle vous fera éventuellement des commentaires avant de l'intégrer dans la documentation principale d'AndroidAPS ! Si vous voulez vérifier l'avancement du PR, vous pouvez cliquer sur le logo de la cloche dans le coin supérieur droit de votre compte GitHub pour voir toutes vos notifications.

![PR tracking](./images/PR7.png)

PS: Your fork and branch will still be sitting on your own personal GitHub account. After you get a notification that your PR has been merged, you can delete your branch if you are done with it (Step 8's notification area will provide a link to delete the branch once it has been closed or merged). For future edits, if you follow this procedure the edits will always start with an updated version of the AndroidAPSdocs repositories. If you choose to use another method to start a PR request (e.g., editing starting from your forked repo's master branch as the starting point), you will need to ensure your repo is up-to-date by performing a "compare" first and merging in any updates that have happened since you last updated your fork. Since people tend to forget to update their repos, we recommend using the PR process outlined above until you get familiar with performing "compares".

(make-a-PR-code-syntax)=

## Syntaxe du Code

We are using markdown for the docs pages. The files have got the suffix ".md".

(make-a-PR-image-size)=

### Taille des images

If using images please use reasonable sizes. Screenshot images should be up to **1050 pixels wide**.

### Text format

* bold: `**text**`
* italic: `*text*`
* Headline 1: `# headline`
* Headline 2: `## headline`
* Headline 3: `### headline`

### ordered list

    1. first
    1. second
    1. third
    

1. first
2. second
3. third

### unordered list

    - one element
    - another element
    - and another element
    

* one element
* another element
* and another element

### multi level list

You can insert lists in lists by indenting the next level with 4 more spaces to the right than the one before.

    1. first
    1. second
    1. third
      1. one element
      1. another element
      1. and another element
    1. four
    1. five
    1. six
    

1. first
2. second
3. third 1. one element 1. another element 1. and another element
4. four
5. five
6. six

### Images

* images : `![alt text](../images/file.png)`

### Links

* lien externe : `[alt text](www.url.tld)`
* lien interne vers une page .md : `[texte alternatif](../folder/file.md)`
* internal link to headline: `[alt text](../folder/file.html#headline)`

### Internal links

If you want to set an internal link within the AndroidAPS documentation, please only use **relative links**. Only this will make the link work in the other languages (Czech, German...) as well.

* `[text](../Usage/Test.md)` will set an internal hyperlink one directory up from where you are and then into the subdirectory /Usage. Ending of the target file must be .md or .rst (not .html)
* `[text](./Usage/Test.md)` will set an internal hyperlink from where you are into /Usage. Ending of the target file must be .md
* To set the link to an **anchor** (i.e. a headline) you let the file extension .md in place! 
  * `[text](../Usage/Test.md#anchor)`

### Notes

    ```{admonition} Friendly Note
    :class: note
    
    This is a note.
    

    <br />```{admonition} Friendly Note
    :class: note
    
    This is a note.
    

### Warnings

    ```{admonition} Strong Warning
    :class: warning
    
    This is a warning.
    

    <br />```{admonition} Strong Warning
    :class: warning
    
    This is a warning.
    

## Adding multiple images to the documentation

If you are planning to make a lot of edits, including adding images to help illustrate parts of the documentation (thank you!), you may want to take the following approach:

* As you go and save screenshots, rename the screenshots to a descriptive name - but try not to use spaces as that confuses GitHub. Instead, use underscores. I.e. Example_batch_images_upload.png rather than "Example batch images upload.png". 
* Please use reasonable sizes. Screenshot images should be up to **1050 pixels wide**.
* You can upload images in batches easily by:
  
  1. Navigate to the images folder (https://github.com/openaps/AndroidAPSdocs/tree/master/docs/EN/images - but make sure you are in your fork/copy of the docs Images folder to be able to do this (replace "openaps" in the URL with your GitHub username)).
  
  2. Click in the upper right corner where it says "Upload files"
  
  3. Drag and drop your images into the screen
  
  4. Commit these to your branch
  
  5. Now, you can look for the URL/relative path of each file and use that to refer to when adding images into a page in the documentation.
  
  6. To see examples of how to add the images, you can look at the "raw" code of a page to see an example from a page that already has the images embedded successfully. Make sure you use the [correct code](./make-a-PR.html#code-syntax) for the page type you are on (.md or .rst). The main thing is to have a plain text description, followed by a link with a relative path to the image, like this:
    
    * For .md pages: `![Example of uploading images in batches](../images/Example_batch_images_upload.png)` (That code is exactly how the image below is embedded to be displayed.)
    * For .rst pages: `.. image:: ../images/Example_batch_images_upload.png`  
      `:alt: Example of uploading images in batches`

![Example of uploading images in batches](./images/Example_batch_images_upload.png)

7. After adding images or making adjustments, you can submit a PR to the master branch of AndroidAPSdocs.