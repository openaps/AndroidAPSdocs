# Comment traduire l'application et la documentation wiki

* Allez à <https://translations.androidaps.org> ou <https://wikitranslations.androidaps.org> et connectez-vous à l'aide de votre compte Github

* Envoyez une demande d'adhésion à l'équipe Wiki. Pour le faire, cliquez sur le drapeau de la langue souhaitée, puis sur le bouton "Join" dans le coin supérieur droit de la page suivante. Veuillez renseigner la langue, donner quelques informations sur vous et votre expérience AAPS et si vous voulez être un traducteur ou un correcteur (seulement les personnes qualifiées pour traduire + les utilisateurs avancés d'AndroidAPS).

* Lorsque nous vous approuvons, cliquez sur le drapeau ![Lorsque nous vous approuvons, cliquez sur le drapeau](./images/translation_flags2019.png)

## Traduire les textes de l'application AndroidAPS

* Cliquez sur strings.xml
    
    ![Cliquez sur strings.xml](./images/translations-click-strings.png)

* Traduisez les phrases sur le côté gauche en ajoutant un nouveau texte traduit ou en utilisant la suggestion d'édition
    
    ![Traduction app](./images/translations-translate.png)

* Les relecteurs doivent passer au mode Proofreading
    
    ![Proofreading mode app](./images/translations-proofreading-mode.png)
    
    et approuver les textes traduits
    
    ![approuver le texte](./images/translations-proofreading.png)

Lorsqu'un correcteur approuve une traduction, elle sera ajoutée à la prochaine version d'AndroidAPS. Au départ, il serait bon de vérifier les traductions existantes qui ne sont pas encore approuvées et de vérifier les erreurs ou de les approuver si elles sont correctes.

## Traduire les pages wiki

* Cliquez sur le nom de la page wiki que vous voulez traduire
    
    ![Cliquez sur la page wiki](./images/translation_WikiPage.png)

* Traduisez phrase par phrase
    
    1 Le texte non traduit s'affiche avec un fond rouge sur le côté gauche.
    
    2 Vous pouvez copier une proposition vers la zone d'édition en cliquant sur la proposition.
    
    3 Modifiez la proposition ou écrivez vous-même la traduction.
    
    4 Click save
    
    ![Traduction wiki](./images/translation_WikiTranslate.png)

* A translated page will not be published in wiki before the translation is proofread.

### Translate headline links

* When an internal link leads only to a certain page (i.e. ../Usage/Profiles.html) no translation is necessary.
* Internal links to a certain headline (i.e. ..//Usage/Profiles.html#percentage) must be translated as the headline in the other language is different from the English original.
* If you translate a headline you can transform this into the anchor link (part after # - i.e. #percentage) by turning all letters to lower case, transforming special characters to standard characters, replacing spaces by - (minus sign) and skipping punctuation marks.
    
    Here are some examples:
    
    * Was ist ein Closed Loop System mit AndroidAPS? \---> #was-ist-ein-closed-loop-system-mit-androidaps
    * Wiki Updates & Änderungen \---> #wiki-updates-anderungen
    * AAPS-.apk Datei \---> #aaps-apk-datei

* Check your link if it is working as intended. If it is linking to a new translated headline you may have to wait until next build to be able to check correct link syntax. In this case do not forget to make a reminder in your calendar / todo app.

#### Link translation in Markdown files (.md)

At the moment two [markup languages](./make-a-PR#code-syntax) are used in wiki. Whereas files written in reStructuredText syntax (.rst) always show link address in Crowdin, for files in Markdown syntax (.md) you might have to activate HTML tag displaying in order to translate the link address.

If links are displayed like this in Crowdin

![Crowdin - no HTML tag display](./images/CrowdinShowURL1.png)

click on the cogwheel to open settings, select "Show" and click "Save".

![Crowdin - show HTML tag display](./images/CrowdinShowURL2.png)

Links will then be shown in standard HTML format and can be translated considering the rules mentioned [above](./translations#translate-headline-links).

![Crowdin - HTML tag display](./images/CrowdinShowURL3.png)

## Proofreading

* Les relecteurs doivent passer au mode Proofreading
    
    ![Proofreading mode wiki](./images/translation_WikiProofreading.png)
    
    et approuver les textes traduits
    
    ![approuver le texte](./images/translations-proofreading.png)

* When a proofreader approves a translation it will be added to the next wiki build. To speed process you can inform wiki team about new translations.