# App oder Dokumentation übersetzen

* Gehe zu <https://translations.androidaps.org> oder <https://wikitranslations.androidaps.org> und melde Dich mit Deinem Github Konto an.

* Sende Deinen Beitrittswunsch an das Wiki-Team. Klicke dazu auf die Fahne der gewünschten Sprache und dann auf der nächsten Seite rechts oben auf den Button "Join". Gib die gewünschte(n) Sprach(n) an, ein paar Infos zu Dir und Deiner AAPS Erfahrung und auch ob Du als Übersetzter oder Lektor (nur Personen mit Übersetzungs- und längerer AAPS-Erfahrung ) unterstützen möchtest.

* Wenn wir dich freigeschalten haben, klicke auf die entsprechende Landesflagge.![Sprachenübersicht Crowdin](./images/translation_flags2019.png)

## Texte für die AndroidAPS App übersetzen

* Klicke auf strings.xml
    
    ![Klicke auf strings.xml](./images/translations-click-strings.png)

* Übersetze Sätze auf der linken Seite, indem du übersetzten Text hinzufügst oder verwende & edit suggestion
    
    ![Übersetzen der App](./images/translations-translate.png)

* Lektoren müssen zum Proofreading-Modus wechseln
    
    ![Lektorenmodus App](./images/translations-proofreading-mode.png)
    
    und übersetzte Texte freigeben.
    
    ![Übersetzung freigeben](./images/translations-proofreading.png)

Wenn ein Lektor eine Übersetzung freigibt, wird sie in der nächsten Version von AndroidAPS hinzugefügt. Am Anfang wäre es gut, auch die vorhandenen Übersetzungen, die noch nicht genehmigt sind, durchzuschauen und zu korrigieren oder zu genehmigen, wenn sie korrekt sind.

## Wiki-Seiten übersetzen

* Klicke auf den Namen der Wiki-Seite, die Du übersetzen willst.
    
    ![Wiki-Seite klicken](./images/translation_WikiPage.png)

* Übersetze Satz für Satz:
    
    1 Noch nicht übersetzter Text wird auf der linken Seite mit rotem Hintergrund angezeigt.
    
    2 Du kannst einen Übersetzungsvorschlag in das Bearbeitungsfeld kopieren, indem Du darauf klickst.
    
    3 Passe den Vorschlag ggf. an oder übersetze selbst.
    
    4 Klicke auf 'safe'.
    
    ![Übersetzen des Wiki](./images/translation_WikiTranslate.png)

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

* Lektoren müssen zum Proofreading-Modus wechseln
    
    ![Proofreading mode wiki](./images/translation_WikiProofreading.png)
    
    und übersetzte Texte freigeben.
    
    ![Übersetzung freigeben](./images/translations-proofreading.png)

* When a proofreader approves a translation it will be added to the next wiki build. To speed process you can inform wiki team about new translations.