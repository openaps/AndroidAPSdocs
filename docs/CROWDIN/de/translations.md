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
    
    4 Klicke auf 'save'.
    
    ![Übersetzen des Wiki](./images/translation_WikiTranslate.png)

* Eine übersetzte Seite wird nicht im Wiki veröffentlicht, bevor die Übersetzung korrekturgelesen wurde.

### Links zu Überschriften übersetzen

* Wenn ein interner Link nur auf eine bestimmte Seite (z.B. ../Usage/Profiles.html) verweist, muss er nicht übersetzt werden.
* Interne Links zu einer Überschrift (z.B. ..//Usage/Profiles.html#percentage) müssen hingegeben übersetzt werden, da der Text der Überschrift in der Übersetzung meist vom englischen Original abweicht.
* Wenn Du eine Überschrift übersetzt, kannst Du daraus den Anker-Teil des Links (der Teil hinter # - z.B. #percentage) in dem Du alle Buchstaben klein schreibst, sprachenspezifische Zeichen (z.B. ä, ö, ü) in Standardzeichen umwandelst (z.B. a, o, u), Leerzeichen durch ein Minuszeichen ersetzt und alle Satzzeichen weglässt.
    
    Hier einige Beispiele:
    
    * Was ist ein Closed Loop System mit AndroidAPS? \---> #was-ist-ein-closed-loop-system-mit-androidaps
    * Wiki Updates & Änderungen \---> #wiki-updates-anderungen
    * AAPS-.apk Datei \---> #aaps-apk-datei

#### Link-Übersetzung in Markdown-Dateien (.md)

Momentan werden im Wiki zwei [Markup Sprachen](./make-a-PR#code-syntax) verwendet. Während bei Seiten, die mit reStructuredText Syntax (.rst) geschrieben wurden, die Linkadressen in Crowdin immer angezeigt werden, muss dies für Seiten mit Markdown Syntax (.md) ggf. erst aktiviert werden.

Wenn bei Dir Links so in Crowdin angezeigt werden:

![Crowdin - keine Anzeige der Linkadressen](./images/CrowdinShowURL1.png)

Klicke auf das Zahnrad, um die Einstellungen zu öffnen, wähle "Show" aus und klicke dann auf "Save".

![Crowdin - Anzeige der Linkadressen einschalten](./images/CrowdinShowURL2.png)

Links werden dann im Standard-HTML-Format angezeigt und können wie [oben](./translations#translate-headline-links) beschrieben übersetzt werden.

![Crowdin - Anzeige der Linkadressen](./images/CrowdinShowURL3.png)

## Proofreading

* Lektoren müssen zum Proofreading-Modus wechseln
    
    ![Proofreading mode wiki](./images/translation_WikiProofreading.png)
    
    und übersetzte Texte freigeben.
    
    ![Übersetzung freigeben](./images/translations-proofreading.png)

* Wenn ein Lektor eine Übersetzung freigibt, wird sie in das nächste 'Wiki Build' aufgenommen. Um den Prozess zu beschleunigen, kannst Du das Wiki-Team über neue Übersetzungen informieren.