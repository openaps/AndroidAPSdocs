# Como traduzir o AndroidAPS e a documentação

* Go to <https://crowdin.com/project/androidaps> or <https://crowdin.com/project/androidapsdocs> and login using your GitHub account

* Envie um pedido de adesão para a equipa de documentação. Para o fazer, clique na bandeira da língua desejada e, em seguida, no botão "Juntar-se" no canto superior direito da próxima página. Por favor, especifique idioma. forneça algumas informações sobre si e a sua experiência com o AAPS e se deseja ser um tradutor ou revisor (apenas pessoas qualificadas em traduzir + usuários avançados da AndroidAPS).

* Quando nós aprovarmos, clique na bandeira![When we approve you, click the flag](./images/translation_flags2019.png)

## Traduzir textos para a app AndroidAPS

* Clique em strings.xml
    
    ![Clique em strings.xml](./images/translations-click-strings.png)

* Traduza frases do lado esquerdo adicionando novo texto traduzido ou use & edição de sugestão
    
    ![Translation app](./images/translations-translate.png)

* Os revisores precisam mudar para o modo de revisão
    
    ![Proofreading mode app](./images/translations-proofreading-mode.png)
    
    e aprovar textos traduzidos
    
    ![approve text](./images/translations-proofreading.png)

Quando um revisor aprova uma tradução, ela será adicionada na próxima versão da AndroidAPS. No início, seria bom também passar em revista as traduções existentes, que ainda não foram aprovadas, e verificar se há erros ou aprová-los se elas estiverem corretas.

## Traduzir Páginas

* Click the name of the docs page you want to translate
    
    ![Click docs page](./images/translation_WikiPage.png)

* Translate sentences by sentence
    
    1 Untranslated text is shown with red background on the left side.
    
    2 You can copy a proposal to the edit field by clicking on the proposal.
    
    3 Edit the proposal or write the translation yourself.
    
    4 Click save
    
    ![Translation docs](./images/translation_WikiTranslate.png)

* A translated page will not be published in docs before the translation is proofread.

### Translate headline links

* When an internal link leads only to a certain page (i.e. ../Usage/Profiles.html) no translation is necessary.
* Internal links to a certain headline (i.e. ..//Usage/Profiles.html#percentage) must be translated as the headline in the other language is different from the English original.
* If you translate a headline you can transform this into the anchor link (part after # - i.e. #percentage) by turning all letters to lower case, transforming special characters to standard characters, replacing spaces by - (minus sign) and skipping punctuation marks.
    
    Here are some examples:
    
    * Was ist ein Closed Loop System mit AndroidAPS? \---> #was-ist-ein-closed-loop-system-mit-androidaps
    * Docs Updates & Änderungen \---> #docs-updates-anderungen
    * AAPS-.apk Datei \---> #aaps-apk-datei

* Check your link if it is working as intended. If it is linking to a new translated headline you may have to wait until next build to be able to check correct link syntax. In this case do not forget to make a reminder in your calendar / todo app.

#### Link translation in Markdown files (.md)

At the moment two [markup languages](./make-a-PR#code-syntax) are used in docs. Whereas files written in reStructuredText syntax (.rst) always show link address in Crowdin, for files in Markdown syntax (.md) you might have to activate HTML tag displaying in order to translate the link address.

* * *

**Make sure not to use space character at within HTML tags at the beginning or the end!**

![Crodwin - HTML tag without space character](./images/Crowdin_HTMLtag.png)

* * *

If links are displayed like this in Crowdin

![Crowdin - no HTML tag display](./images/CrowdinShowURL1.png)

click on the cogwheel to open settings, select "Show" and click "Save".

![Crowdin - show HTML tag display](./images/CrowdinShowURL2.png)

Links will then be shown in standard HTML format and can be translated considering the rules mentioned [above](./translations#translate-headline-links).

![Crowdin - HTML tag display](./images/CrowdinShowURL3.png)

## Proofreading

* Os revisores precisam mudar para o modo de revisão
    
    ![Proofreading mode docs](./images/translation_WikiProofreading.png)
    
    e aprovar textos traduzidos
    
    ![aprovar texto](./images/translations-proofreading.png)

* When a proofreader approves a translation it will be added to the next docs build. To speed process you can inform docs team about new translations.