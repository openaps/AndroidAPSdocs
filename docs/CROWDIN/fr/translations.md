# Comment traduire des chaînes de caractères pour l'application AAPS ou la documentation

* Pour les chaînes utilisées dans l'application, allez sur <https://crowdin.com/project/androidaps> et connectez-vous à l'aide de votre compte GitHub
* Pour la documentation, allez sur <https://crowdin.com/project/androidapsdocs> et connectez vous à l'aide de votre compte GitHub

* Envoyez une demande d'adhésion à l'équipe Wiki. Pour le faire, cliquez sur le drapeau de la langue souhaitée, puis sur le bouton "Join" dans le coin supérieur droit de la page suivante. Veuillez renseigner la langue, donner quelques informations sur vous et votre expérience AAPS et si vous voulez être un traducteur ou un correcteur (seulement les personnes qualifiées pour traduire + les utilisateurs avancés d'AAPS).

```{admonition} Etape d'Approbation :class: Remarque

L'approbation est une étape manuelle. En tant qu’organisation à but non lucratif, nous ne fournissons pas de SLA, mais en général l’approbation se fera dans la journée. Si ce n'est pas le cas, veuillez contacter l'équipe Doc via Facebook ou Discord.

    <br />* When we approve you, click the flag
       ![When we approve you, click the flag](./images/translation_flags.png)
    
    ## Translation of the app
    
    (translations-translate-strings-for-androidaps-app)=
    ### Translate strings for AndroidAPS app
    
    * If you have no preference for strings you translate just select the "Translate All" button to start. Cela vous montrera toutes les chaînes de caractères qui ont besoin de traduction.
    
       ![Clicquez sur translate all](./images/translations-click-translate-all. ng)
    
    * Si vous voulez traduire un fichier individuel, veuillez rechercher le fichier via la boîte de dialogue de recherche ou dans l'arborescence des fichiers et cliquer sur le nom du fichier pour commencer le travail de traduction sur les chaînes de caractères présentes dans ce fichier.
    
       ![Cliquez sur les chaines de caractères](./images/translations-click-strings. ng)
    
    * Traduire les phrases à gauche en ajoutant un nouveau texte traduit ou en utilisant & en éditant les suggestions 
    
       ![Traduction de l'Application AAPS](. images/translations-translate.png)
    
    
    ### Approuver les traductions pour l'application AAPS
    
    * les "Proofreaders" commencent en sélectionnant "Proofread" à partir de l'écran d'accueil de leur langage.
    
       ![Mode Proofreading](./images/translations-proofreading-mode.png) 
    
      et approuvent les textes traduits 
    
       ![approve text](. images/translations-proofreading.png)
    
    Lorsqu'un correcteur approuve une traduction, elle sera ajoutée à la prochaine version d'AAPS.
    
    (translations-translation-of-the-documentation)=
    ## Translation of the documentation
    
    * Click the name of the docs page you want to translate
    
    ![Click docs page](./images/translation_WikiPage.png)
    
    
    * Translate sentences by sentence
    
        1. Le texte jaune est le texte que vous travaillez actuellement.
    
        1. Le texte vert est déjà traduit. Vous n’avez rien à faire.
    
        1. Le texte rouge est le texte qui reste à traduire.
    
        1. Ceci est le texte source sur lequel vous travaillez pour le moment
    
        1. C'est la traduction que vous êtes en train de préparer. Vous pouvez copier le texte au dessus ou sélectionner une des suggestions au dessous.
    
        1. Voilà la proposition de traduction. Surtout vous pouvez voir le taux de modification calculé par Crowdin ou si c'est quelquechose qui a déjà été traduit, et de voir si c'est juste une reformulation du texte sans changement de contenu.
        1. Appuyez sur le bouton "Save" pour enregistrer une proposition pour la traduction. Il sera ensuite soumis à un correcteur pour la vérification finale.
    
    ![Traduction de la Doc](./images/translation_WikiTranslate.png)
    
    * Une page traduite ne sera pas publiée dans la documentation avant 
    
        1. la traduction est approuvée
    
        1. la synchronisation entre Crowdin et Github s'est terminée (une fois par heure) et génèrera un PR pour Github.
    
        1. le PR de Github a été approuvé.
    
    En général, cela nécessite 1 à 3 jours mais peut prendre un peu plus de temps pendant les vacances.
    
    ### Traduction des liens
    
    ```{admonition} Les liens ne sont plus traduits
    :class: Remarque
    
    Les liens ne sont plus traduits. Dans le passé, nous avions un chapitre particulier ici mais c'est terminé depuis la migraton vers Markdown et le myst_parser nous créons explicitement des étiquettes dans le texte anglais ce qui permet de propager ces étiquettes et les liens vers les autres langues.
    
    

Vous traduisez le texte qui représente le lien. S'il vous plaît vous devez être prudent de ne **pas** supprimer le lien qui est représenté par une paire de balises `<0></0>` ou représentées par une aure nombre s'il y en a plusieurs dans un même paragraphe.

C'est le travail des correcteurs pour avoir un regard spécial sur ça !

### Relecture (Proofreading)

* Les relecteurs doivent passer en mode Proofreading
    
    ![Mode Relecture (Proofreading)](./images/translation_WikiProofreadingmode.png)
    
    et approuver les textes traduits
    
    ![approuver le texte](./images/translations-proofreading.png)

* Lorsqu'un correcteur approuve une traduction, elle sera ajoutée à la prochaine compilation de la doc qui ne se produit pas régulièrement, mais environ une fois par semaine, sauf pendant les vacances. Pour accélérer le processus, vous pouvez informer l'équipe doc sur les nouvelles traductions.