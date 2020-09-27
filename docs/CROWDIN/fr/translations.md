# Comment traduire l'application et la documentation wiki

* Allez à <https://crowdin.com/project/androidaps> ou <https://crowdin.com/project/androidapsdocs> et connectez-vous à l'aide de votre compte Github

* Envoyez une demande d'adhésion à l'équipe Wiki. Pour le faire, cliquez sur le drapeau de la langue souhaitée, puis sur le bouton "Join" dans le coin supérieur droit de la page suivante. Veuillez renseigner la langue, donner quelques informations sur vous et votre expérience AAPS et si vous voulez être un traducteur ou un correcteur (seulement les personnes qualifiées pour traduire + les utilisateurs avancés d'AndroidAPS).

* Lorsque nous vous approuvons, cliquez sur le drapeau ![Lorsque nous vous approuvons, cliquez sur le drapeau](./images/translation_flags2019.png)

## Traduire les textes de l'application AndroidAPS

* Cliquez sur strings.xml
    
    ![Cliquez sur strings.xml](./images/translations-click-strings.png)

* Traduisez les phrases sur le côté gauche en ajoutant un nouveau texte traduit ou en utilisant la suggestion d'édition
    
    ![Application de traduction](./images/translations-translate.png)

* Les relecteurs doivent passer au mode Proofreading
    
    ![Proofreading mode app](./images/translations-proofreading-mode.png)
    
    et approuver les textes traduits
    
    ![approuver le texte](./images/translations-proofreading.png)

Lorsqu'un correcteur approuve une traduction, elle sera ajoutée à la prochaine version d'AndroidAPS. Au départ, il serait bon de vérifier les traductions existantes qui ne sont pas encore approuvées et de vérifier les erreurs ou de les approuver si elles sont correctes.

## Traduire les pages de documentation

* Cliquez sur le nom de la page que vous voulez traduire
    
    ![Cliquer sur la page de documentation](./images/translation_WikiPage.png)

* Traduisez phrase par phrase
    
    1 Le texte non traduit s'affiche avec un fond rouge sur le côté gauche.
    
    2 Vous pouvez copier une proposition vers la zone d'édition en cliquant sur la proposition.
    
    3 Modifiez la proposition ou écrivez vous-même la traduction.
    
    4 Cliquez sur SAVE
    
    ![Traduction de documents](./images/translation_WikiTranslate.png)

* Une page traduite ne sera pas publiée dans la documentation avant la validation de la traduction (proofread).

### Traduire les liens de titre

* Lorsqu'un lien interne ne mène qu'à une page (par ex. ../Usage/Profiles.html), aucune traduction n'est nécessaire.
* Les liens internes vers un titre spécifique (par ex. ..//Usage/Profiles.html#percentage) doivent être traduits car le titre de l'autre langue est différent de l'original anglais.
* Si vous traduisez un titre, vous pouvez le transformer en lien d'ancrage (partie après # - par ex. #percentage) en transformant toutes les lettres en minuscules, en transformant les caractères spéciaux en caractères standard, en remplaçant les espaces par - (signe moins) et en ignorant les signes de ponctuation.
    
    Voici quelques exemples :
    
    * Qu’est ce qu’un Système de boucle fermée ? \---> #qu-est-ce-qu-un-systeme-de-boucle-fermee
    * Wiki mises à jour & modifications \---> #wiki-mises-a-jour-modifications
    * Fichier AAPS-.apk \---> #fichier-aaps-apk

* Vérifiez si votre lien fonctionne comme prévu. S'il s'agit d'un lien vers un nouveau titre traduit, vous devrez peut-être attendre la prochaine génération de la documentation pour vérifier si la syntaxe du lien est correcte. Dans ce cas n'oubliez pas de faire un rappel dans votre agenda.

#### Traduction des liens dans les fichiers Markdown (.md)

À l'heure actuelle deux [formats de documents](./make-a-PR#code-syntax) sont utilisés dans les docs. Alors que les fichiers écrits avec la syntaxe reStructuredText (.rst) affichent toujours l'adresse de lien dans Crowdin, pour les fichiers écrit avec la syntaxe Markdown (.md), vous devrez peut-être activer l'affichage des balises HTML pour traduire l'adresse du lien.

* * *

**Assurez-vous de ne pas mettre de caractère espace à l'intérieur des balises HTML au début ou à la fin !**

![Crowdin - balise HTML sans caractère d'espace](./images/Crowdin_HTMLtag.png)

* * *

Si les liens sont affichés comme ceci dans Crowdin

![Crowdin - aucune balise HTML affichée](./images/CrowdinShowURL1.png)

cliquez sur la roue crantée pour ouvrir les paramètres, sélectionnez "Show" et cliquez sur "Save".

![Crowdin - afficher les balises HTML](./images/CrowdinShowURL2.png)

Les liens seront alors affichés au format HTML standard et pourront être traduits en tenant compte des règles mentionnées [ci-dessus](./translations#traduire-les-liens-de-titre).

![Crowdin - affichage des balises HTML](./images/CrowdinShowURL3.png)

## Relecture (Proofreading)

* Les relecteurs doivent passer au mode Proofreading
    
    ![Mode Relecture (Proofreading)](./images/translation_WikiProofreading.png)
    
    et approuver les textes traduits
    
    ![approuver le texte](./images/translations-proofreading.png)

* Quand un correcteur approuve une traduction, elle sera ajoutée à la prochaine publication de la documentation. Pour accélérer le processus, vous pouvez informer l'équipe docs sur les nouvelles traductions.