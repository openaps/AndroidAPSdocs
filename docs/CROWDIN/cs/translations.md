# Jak překládat AndroidAPS a dokumentaci

* Go to <https://crowdin.com/project/androidaps> or <https://crowdin.com/project/androidapsdocs> and login using your Github account

* Send a join request to the docs team. Klikněte na vlajku požadovaného jazyka a poté na tlačítko "Join" vpravo nahoře na následující stránce. Specifikujte prosím svůj jazyk, uveďte nějaké informace o sobě a svých zkušenostech s AAPS a zda chcete být překladatel nebo korektor (pouze osoby se zkušeností s překlady + pokročilí uživatelé AndroidAPS).

* Jakmile vás schválíme, klikněte na vlajku ![Jakmile vás schválíme, klikněte na vlajku](./images/translation_flags2019.png)

## Překlad stringů pro aplikaci AndroidAPS

* Klikněte na strings.xml
    
    ![Klikněte na strings.xml](./images/translations-click-strings.png)

* Překládejte věty v levé části přidáváním nového přeloženého textu nebo použijte navrhovaný překlad a upravte ho
    
    ![Překlad aplikace](./images/translations-translate.png)

* Korektoři se musí přepnout do režimu Proofreading
    
    ![Režim korektur překladů aplikace](./images/translations-proofreading-mode.png)
    
    a schválit přeložené texty
    
    ![schválit text](./images/translations-proofreading.png)

Když korektor schválí překlad, tak bude přidaný do příští verze AndroidAPS. Na úvod by také bylo dobré projít existující překlady, které ještě nebyly schválené, a ověřit v nich chyby nebo je schválit, pokud byly správné.

## Translate docs pages

* Click the name of the docs page you want to translate
    
    ![Click docs page](./images/translation_WikiPage.png)

* Překládejte větu za větou
    
    1 Nepřeložené texty jsou zobrazeny vlevo a mají červené podbarvení.
    
    2 Kliknutím na návrh překladu můžete tento návrh zkopírovat a dále jej upravit.
    
    3 Upravte návrh překladu nebo vepište svůj překlad.
    
    4 Klikněte na tlačítko Save
    
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

* Korektoři se musí přepnout do režimu Proofreading
    
    ![Proofreading mode docs](./images/translation_WikiProofreading.png)
    
    a schválit přeložené texty
    
    ![schválit text](./images/translations-proofreading.png)

* When a proofreader approves a translation it will be added to the next docs build. To speed process you can inform docs team about new translations.