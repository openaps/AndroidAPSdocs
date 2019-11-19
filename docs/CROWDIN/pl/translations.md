# Jak przetłumaczyć AndroidAPS i dokumentację

* Przejdź do <https://translations.androidaps.org> lub <https://wikitranslations.androidaps.org> i zaloguj się przy użyciu konta Github

* Send a join request to the Wiki team. To do so click on the flag of the desired language and then the button "Join" on the top right corner of the next page. Please specify language, give some information about you and your AAPS experience and if you want to be a translator or proofreader (only people skilled in translating + advanced AndroidAPS users).

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

Kiedy korektor zatwierdzi tłumaczenie, zostanie ono dodane do następnej wersji AndroidAPS. Na początku dobrze byłoby przejrzeć istniejące tłumaczenia, które nie zostały jeszcze zatwierdzone i sprawdzić błędy lub zatwierdzić je, jeśli są poprawne.

## Translate wiki pages

* Click the name of the wiki page you want to translate
    
    ![Click wiki page](./images/translation_WikiPage.png)

* Translate sentences by sentence
    
    1 Untranslated text is shown with red background on the left side.
    
    2 You can copy a proposal to the edit field by clicking on the proposal.
    
    3 Edit the proposal or write the translation yourself.
    
    4 Click safe
    
    ![Translation wiki](./images/translation_WikiTranslate.png)

* A translated page will not be published in wiki before the translation is proofread.

### Translate headline links

* When an internal link leads only to a certain page (i.e. ../Usage/Profiles.html) no translation is necessary.
* Internal links to a certain headline (i.e. ..//Usage/Profiles.html#percentage) must be translated as the headline in the other language is different from the English original.
* If you create a new headline you can transform this into the anchor link (part after # - i.e. #percentage) by turning all letters to lower case, transforming special characters to standard characters and skipping punctuation marks.
    
    Here are some examples:
    
    * Was ist ein Closed Loop System mit AndroidAPS? \---> #was-ist-ein-closed-loop-system-mit-androidaps
    * Wiki Updates & Änderungen \---> #wiki-updates-anderungen
    * AAPS-.apk Datei \---> #aaps-apk-datei

#### Link translation in Markdown files (.md)

At the moment two [markup languages](./make-a-PR#code-syntax) are used in wiki. Whereas files written in reStructuredText syntax (.rst) always show link address, for files in Markdown syntax (.md) you might have to activate HTML tag displaying in order to translate the link address.

If links are displayed like this in your browser

![Crowdin - no HTML tag display](./images/CrowdinShowURL1.png)

click on the cogwheel to open settings, select "Show" and click "Save".

![Crowdin - show HTML tag display](./images/CrowdinShowURL2.png)

Links will then be shown in standard HTML format and can be translated considering the rules mentioned [above](./translations#translate-headline-links).

![Crowdin - HTML tag display](./images/CrowdinShowURL3.png)

## Proofreading

* Proofreaders have to switch to Proofreading mode
    
    ![Proofreading mode wiki](./images/translation_WikiProofreading.png)
    
    and approve translated texts
    
    ![approve text](./images/translations-proofreading.png)

* When a proofreader approves a translation it will be added to the next wiki build. To speed process you can inform wiki team about new translations.