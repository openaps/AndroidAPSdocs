# Wie man Textabschnitte für die AAPS-App oder die Dokumentation übersetzt

* Für die Texte der App gehe zu <https://crowdin.com/project/androidaps> und melde Dich mit Deinem GitHub-Konto an
* Für die Dokumentation besuche bitte <https://crowdin.com/project/androidapsdocs> und melde Dich mit Deinem GitHub Account an

* Sende Deinen Beitrittswunsch an das Docs-Team. Klicke dazu auf die Fahne der gewünschten Sprache und dann auf der nächsten Seite rechts oben auf den Button "Join". Gib die gewünschte(n) Sprach(n) an, ein paar Infos zu Dir und Deiner AAPS Erfahrung und auch, ob Du als Übersetzer oder Lektor (nur Personen mit Übersetzungs- und längerer AAPS-Erfahrung) unterstützen möchtest.

```{admonition} Zeit für die Freigabe :class: note

Die Genehmigung ist ein manueller Schritt. Als gemeinnützige Organisation stellen wir keine SLAs zur Verfügung, aber im Allgemeinen erfolgt die Genehmigung in < 1 Tag. Falls nicht, kontaktiere bitte das Doc Team über Facebook oder Discord.

    <br />* Wenn wir Dich aufnehmen, klicke auf die Flagge
       ![Wenn wir Dich aufnehmen, klicke auf die Flagge](../images/translation_flags.png)
    
    ## Übersetzung der App
    
    (translations-translate-strings-for-AAPS-app)=
    ### Zeichenketten für die AAPS-App übersetzen
    
    * Wenn Du keine von Dir speziell ausgewählten Zeichenketten übersetzen willst, wähle einfach die Schaltfläche „Translate All“, um zu starten. Es zeigt Dir direkt die Zeichenketten, die übersetzt werden müssen.
    
       ![Click translate all](../images/translations-click-translate-all.png)
    
    * Wenn Du eine einzelne Datei übersetzen möchtest, suche bitte die Datei über den Suchdialog oder die Baumstruktur und klicke auf den Dateinamen, um die Übersetzungsarbeit an den Zeichenketten in dieser Datei zu starten.
    
       ![Click strings.xml](./images/translations-click-strings.png)
    
    * Übersetze Sätze auf der linken Seite durch die Eingabe einer eigenen neuen Übersetzung oder bearbeite einen Übersetzungsvorschlag 
    
       ![Translation app](../images/translations-translate.png)
    
    
    ### Strings (Zeichenketten) der AAPS-App korrekturlesen
    
    * Korrekturlesende starten das Korrekturlesen, indem sie auf dem Startschirm des Projekts „Proofread“ aufrufen.
    
       ![Proofreading mode app](../images/translations-proofreading-mode.png) 
    
    
      und genehmige übersetzte Texte 
    
       ![approve text](../images/translations-proofreading.png)
    
    Wenn ein Korrekturlesender eine Übersetzung genehmigt, wird diese zur nächsten AAPS-Version hinzugefügt.
    
    (translations-translation-of-the-documentation)=
    ## Übersetzung der Dokumentation
    
    * Klicke zum Start der Übersetzung auf den Namen der Seite der Dokumentation, die Du übersetzen willst
    
    ![Click docs page](../images/translation_WikiPage.png)
    
    
    * Übersetze Satz für Satz
    
        1. Der gelbe Text ist der Text, an dem Du gerade arbeitest.
    
        1. Der grüne Text ist bereits übersetzt. Du musst dies nicht nochmals tun.
    
        1. Der rote Text ist der verbleibende Text, der übersetzt werden muss.
    
        1. Dies ist der Quelltext, an dem Du gerade arbeitest. Dies ist die Übersetzung, die Du gerade vorbereitest. Du kannst den Text von oben kopieren oder einen der folgenden Vorschläge auswählen.
    
        1. Das sind die Vorschläge für eine Übersetzung. Vor allem siehst Du, wie gut Crowdin den Vorschlag als passend bewertet oder ob der Text früher schon übersetzt war und nur wieder auftaucht, weil er verschoben und nicht geändert wurde.
        1. Drücke die Schaltfläche "Speichern", um einen Vorschlag für die Übersetzung zu speichern. Danach geht sie zur abschließenden Prüfung an einen Korrekturleser.
    
    ![Translation docs](../images/translation_WikiTranslate.png)
    
    * Eine übersetzte Seite wird nicht veröffentlicht, bevor 
    
        1. für die Übersetzung ein Proofread (Korrekturlesen) durchgeführt wurde
    
        1. die Synchronisierung zwischen Crowdin und Github durchgeführt wurde (einmal pro Stunde), wodurch ein PR für GitHub erstellt wird.
    
        1. der PR in Github genehmigt wurde.
    
    In der Regel erfolgt die Freigabe innerhalb von 1 - 3 Tage, kann aber in Urlaubszeiten auch einmal etwas länger dauern.
    
    ### Übersetzen von Links
    
    ```{admonition} Links werden nicht mehr übersetzt
    :class: note
    
    Links werden nicht mehr übersetzt. Früher gab es hier ein eigenes Thema. Das ist weggefallen, weil wir durch die Umstellung auf Markdown und den myst_parser im englischen Text ausdrücklich Labels anlegen und diese im Hintergrund an die Sprachen weitergeben.
    
    

Wenn Du einen Text mit einem Link übersetzt, Achte bitte darauf, den Link **nicht** zu entfernen. Er wird durch ein Paar `<0></0>`-Tags dargestellt (oder andere Zahlen, wenn ein Absatz mehrere Links enthält).

Es ist die Aufgabe des Proofreaders, einen besonderen Blick darauf zu haben!

### Korrekturlesen

* Proofreader müssen zum Proofreading-Modus wechseln
    
    ![Proofreading mode docs](../images/translation_WikiProofreadingmode.png)
    
    und geben übersetzte Texte frei.
    
    ![Übersetzung freigeben](../images/translations-proofreading.png)

* Wenn ein Korrekturleser eine Übersetzung annimmt, wird sie in die nächste Dokumentations-Version hinzugefügt, die in keinem festen Zeitplan erstellt, sondern bei Bedarf etwa einmal pro Woche außer während der Feiertage erstellt wird. Um den Prozess zu beschleunigen, kannst Du das Docs-Team über neue Übersetzungen informieren.