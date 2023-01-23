# How to translate AndroidAPS and the documentation

* Go to <https://translations.androidaps.org> or <https://wikitranslations.androidaps.org> and login using your Github account

* Send a join request to the docs team. To do so click on the flag of the desired language and then the button "Join" on the top right corner of the next page. Please specify language, give some information about you and your AAPS experience and if you want to be a translator or proofreader (only people skilled in translating + advanced AndroidAPS users).

* When we approve you, click the flag ![When we approve you, click the flag](./images/translation_flags2019.png)

## Translate strings for AndroidAPS app

* Click strings.xml
    
    ![Click strings.xml](./images/translations-click-strings.png)

* Translate sentences on left side by adding new translated text or use & edit suggestion
    
    ![Translation app](./images/translations-translate.png)

* Proofreaders have to switch to Proofreading mode
    
    ![Proofreading mode app](./images/translations-proofreading-mode.png)
    
    and approve translated texts
    
    ![approve text](./images/translations-proofreading.png)

When a proofreader approves a translation it will be added to the next version of AndroidAPS. In the beginning it would be good to also go over the existing translations that are not yet approved and check for mistakes or approve them if they are correct.

## Translate docs pages

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

* When an internal link leads only to a certain page (i.e. ../Usage/Profiles.md) no translation is necessary.
* Internal links to a certain headline (i.e. ..//Usage/Profiles#percentage) must be translated as the headline in the other language is different from the English original.
* If you translate a headline you can transform this into the anchor link (part after # - i.e. #percentage) by turning all letters to lower case, transforming special characters to standard characters, replacing spaces by - (minus sign) and skipping punctuation marks.
    
    Here are some examples:
    
    * Was ist ein Closed Loop System mit AndroidAPS? \---> #was-ist-ein-closed-loop-system-mit-androidaps
    * Docs Updates & Änderungen \---> #docs-updates-anderungen
    * AAPS-.apk Datei \---> #aaps-apk-datei

* Check your link if it is working as intended. If it is linking to a new translated headline you may have to wait until next build to be able to check correct link syntax. In this case do not forget to make a reminder in your calendar / todo app.

#### Link translation in Markdown files (.md)

At the moment two [markup languages](./make-a-PR#code-syntax) are used in docs. Whereas files written in reStructuredText syntax (.rst) always show link address in Crowdin, for files in Markdown syntax (.md) you might have to activate HTML tag displaying in order to translate the link address.

If links are displayed like this in Crowdin

![Crowdin - no HTML tag display](./images/CrowdinShowURL1.png)

click on the cogwheel to open settings, select "Show" and click "Save".

![Crowdin - show HTML tag display](./images/CrowdinShowURL2.png)

Links will then be shown in standard HTML format and can be translated considering the rules mentioned [above](./translations#translate-headline-links).

![Crowdin - HTML tag display](./images/CrowdinShowURL3.png)

## Proofreading

* Proofreaders have to switch to Proofreading mode
    
    ![Proofreading mode docs](./images/translation_WikiProofreading.png)
    
    and approve translated texts
    
    ![approve text](./images/translations-proofreading.png)

* When a proofreader approves a translation it will be added to the next docs build. To speed process you can inform docs team about new translations.