# Comment traduire les textes de l'application AAPS ou de la documentation

* Pour les textes de l'application, allez sur <https://crowdin.com/project/androidaps> et connectez-vous avec votre compte GitHub
* Pour la documentation, allez sur <https://crowdin.com/project/androidapsdocs> et connectez vous à l'aide de votre compte GitHub

* Envoyez une demande d'adhésion à l'équipe Wiki. Pour le faire, cliquez sur le drapeau de la langue souhaitée, puis sur le bouton "Join" dans le coin supérieur droit de la page suivante. Indiquez la langue, donnez quelques informations sur vous et sur votre expérience avec AAPS, et dites si vous voulez être traducteur ou relecteur (seulement pour les personnes qui savent bien traduire et qui sont des utilisateurs avancés d'AAPS).

```{admonition} Délai d'approbation :class: note

L'approbation est une étape manuelle. En tant qu’organisation à but non lucratif, nous ne fournissons pas de SLA, mais en général l’approbation se fera dans la journée. Si ce n'est pas le cas, veuillez contacter l'équipe Doc via Facebook ou Discord.

    <br />* Quand nous vous avons accepté, cliquez sur le drapeau
       ![Quand nous vous avons accepté, cliquez sur le drapeau](../images/translation_flags.png)
    
    ## Traduction de l'application
    
    (translations-translate-strings-for-AAPS-app)=
    ### Traduire les textes de l'application AAPS
    
    * Si vous n'avez pas de préférence pour les textes à traduire, cliquez simplement sur le bouton « Translate All » pour commencer. Cela vous montrera toutes les chaînes de caractères qui ont besoin de traduction.
    
       ![Cliquer sur Translate All](../images/translations-click-translate-all.png)
    
    * Si vous voulez traduire un fichier précis, cherchez le fichier avec la recherche ou dans l'arborescence, puis cliquez sur le nom du fichier pour commencer à traduire les textes de ce fichier.
    
       ![Cliquer sur strings.xml](../images/translations-click-strings.png)
    
    * Traduisez les phrases du côté gauche : écrivez une nouvelle traduction ou utilisez et modifiez une suggestion
    
       ![Traduction de l'application](../images/translations-translate.png)
    
    
    ### Relire les textes de l'application AAPS
    
    * Les relecteurs commencent en choisissant « Proofread » depuis l'écran d'accueil de la langue.
    
       ![Mode relecture de l'application](../images/translations-proofreading-mode.png)
    
    
      et approuvent les textes traduits
    
       ![Approuver le texte](../images/translations-proofreading.png)
    
    Quand un relecteur approuve une traduction, elle sera ajoutée dans la prochaine version d'AAPS.
    
    (translations-translation-of-the-documentation)=
    ## Traduction de la documentation
    
    * Cliquez sur le nom de la page de la documentation que vous voulez traduire
    
    ![Cliquer sur la page de la documentation](../images/translation_WikiPage.png)
    
    
    * Traduisez phrase par phrase
    
        1. Le texte jaune est le texte que vous travaillez actuellement.
    
        1. Le texte vert est déjà traduit. Vous n'avez pas besoin de le refaire.
    
        1. Le texte rouge est le texte qui reste à traduire.
    
        1. Ceci est le texte source sur lequel vous travaillez pour le moment
    
        1. C'est la traduction que vous êtes en train de préparer. Vous pouvez copier le texte au dessus ou sélectionner une des suggestions au dessous.
    
        1. Ce sont les suggestions de traduction. Vous pouvez voir en particulier à quel point Crowdin juge la suggestion adaptée, ou si le texte a déjà été traduit avant et revient seulement parce qu'il a été déplacé, pas modifié.
        1. Appuyez sur le bouton "Save" pour enregistrer une proposition pour la traduction. Elle sera ensuite transmise à un relecteur pour une dernière vérification.
    
    ![Traduction de la documentation](../images/translation_WikiTranslate.png)
    
    * Une page traduite ne sera pas publiée dans la documentation avant que :
    
        1. la traduction est approuvée
    
        1. the sync run between Crowdin and Github finished (once an hour) which creates a PR for GitHub.
    
        1. le PR de Github a été approuvé.
    
    En général, cela nécessite 1 à 3 jours mais peut prendre un peu plus de temps pendant les vacances.
    
    ### Traduction des liens
    
    ```{admonition} Les liens ne sont plus traduits
    :class: note
    
    Les liens ne sont plus traduits. In the past we had a topic here but this is gone as through migration to Markdown and the myst_parser we explicitly create labels in the english text and propagate these labels under the hood to the languages.
    
    

Vous traduisez le texte qui représente le lien. Please be careful **not** to remove the link, which is represented by a pair of `<0></0>` tags (or other numbers, if there are more links in one paragraph).

Les relecteurs doivent y faire particulièrement attention !

### Relecture (Proofreading)

* Les relecteurs doivent passer en mode Proofreading
    
    ![Mode Relecture (Proofreading)](../images/translation_WikiProofreadingmode.png)
    
    et approuver les textes traduits
    
    ![approuver le texte](../images/translations-proofreading.png)

* Quand un relecteur approuve une traduction, elle sera ajoutée dans la prochaine compilation de la documentation. Celle-ci se fait à la demande, sans calendrier fixe, mais environ une fois par semaine, sauf pendant les vacances. Pour accélérer le processus, vous pouvez informer l'équipe doc sur les nouvelles traductions.