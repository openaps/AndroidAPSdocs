# Wie man Zeichenketten für die AndroidAPS-App oder die Dokumentation übersetzt

* Für die Zeichenketten, die in der App verwendet werden, gehe zu <https://crowdin.com/project/androidaps> und melden Dich mit Deinem GitHub Konto an
* Für die Dokumentation besuche bitte <https://crowdin.com/project/androidapsdocs> und melde Dich mit Deinem GitHub Account an

* Sende Deinen Beitrittswunsch an das Docs-Team. Klicke dazu auf die Fahne der gewünschten Sprache und dann auf der nächsten Seite rechts oben auf den Button "Join". Gib die gewünschte(n) Sprach(n) an, ein paar Infos zu Dir und Deiner AAPS Erfahrung und auch ob Du als Übersetzter oder Lektor (nur Personen mit Übersetzungs- und längerer AAPS-Erfahrung ) unterstützen möchtest.

:::{admonition} Time for Approval :class: note

Die Genehmigung ist ein manueller Schritt. Als gemeinnützige Organisation stellen wir keine SLAs zur Verfügung, aber im Allgemeinen erfolgt die Genehmigung in < 1 Tag. Falls nicht, kontaktiere bitte das Doc Team über Facebook oder Discord. :::

* Wenn wir dich freigeschalten haben, klicke auf die entsprechende Landesflagge.![Wenn wir Dich freigeschaltet haben, klicke bitte auf die entsprechende Landesflagge, um zu starten](./images/translation_flags.png)

## Übersetzung der App

(translate-strings-for-androidaps-app)=

### Texte für die AndroidAPS App übersetzen

* Wenn Du keine bestimmten Zeichenketten übersetzen willst, wähle einfach die Schaltfläche "Alle übersetzen" um zu starten. Es zeigt Dir direkt die Zeichenketten, die übersetzt werden müssen.
    
    ![Klicke auf alle übersetzen](./images/translations-click-translate-all.png)

* Wenn Du eine bestimmte Datei übersetzen möchtest, suche die Datei bitte über den Suchdialog oder die Baumstruktur und klicke auf den Dateinamen, um die Übersetzungsarbeit an den Zeichenketten in dieser Datei zu starten.
    
    ![Klicke auf strings.xml](./images/translations-click-strings.png)

* Übersetze Sätze auf der linken Seite, indem du übersetzten Text hinzufügst oder verwende & edit suggestion
    
    ![Übersetzen der App](./images/translations-translate.png)

### Texte für die AndroidAPS App übersetzen

* Die Proofreader beginnen mit der Auswahl von "Proofreading" beim Start des Home-Bildschirms der Sprache.
    
    ![Lektorenmodus App](./images/translations-proofreading-mode.png)
    
    und geben übersetzte Texte frei.
    
    ![Übersetzung freigeben](./images/translations-proofreading.png)

Wenn ein Lektor eine Übersetzung freigibt, wird sie in der nächsten Version von AndroidAPS hinzugefügt.

(translation-of-the-documentation)=

## Übersetzung der Dokumentation

* Klicke auf den Namen der Docs-Seite, die Du übersetzen willst.

![Seite 'docs' anklicken](./images/translation_WikiPage.png)

* Übersetze Satz für Satz:
    
    1. Der gelbe Text ist der Text, dem Du gerade arbeitest.
    
    2. Der grüne Text ist bereits übersetzt. Du musst dies nicht nochmals tun.
    
    3. Der rote Text ist der verbleibende Text, der übersetzt werden muss.
    
    4. Dies ist der Quelltext, an dem Du gerade arbeitest
    
    5. Dies ist die Übersetzung, die Du gerade vorbereitest. Du kannst den Text von oben kopieren oder einen der folgenden Vorschläge auswählen.
    
    6. Dies sind die Vorschläge für eine Übersetzung. Vor allem kannst Du sehen, wie sehr Crowdin dies als passend bewertet, oder ob es schon als Übersetzung für diesen Text verwendet in der Vergangenheit verwendet wurd und die neue Übersetzung nur durch Textverschiebungen hervorgerufen wurde, aber nicht durch Änderungen der Inhalte.
    
    7. Drücke die Schaltfläche "Speichern", um einen Vorschlag für die Übersetzung zu speichern. Er wird dann zu einem Proofreader zur abschließenden Freigabe gegeben.

![Übersetzung Docs](./images/translation_WikiTranslate.png)

* Eine übersetzte Seite wird nicht in Dokumentation veröffentlicht bevor
    
    1. die Übersetzung durch einen Proofreader freigegeben wurde
    
    2. die Synchronisierung zwischen Crowdin und Github durchgeführt wurde (einmal pro Stunde), wodurch ein PR für Github erstellt wird.
    
    3. der PR in Github genehmigt wurde.

In der Regel braucht das Hotel 1 - 3 Tage, aber ggf. mal etwas länger in Urlaubszeiten.

### Übersetzen der Dokumentation

:::{admonition} Links werden nicht mehr übersetzt, :class: note

Links werden nicht mehr übersetzt. In der Vergangenheit hatten wir hier ein Thema, abermit der Migraton nach Markdown und den myst_parser erzeugen wir im englischen Text explizite Labels , die nicht übersetzt werden.

:::

Wenn Du einen Text mit einem Link übersetzt, bitte sei vorsichtig **nicht** den Link zu entfernen, der durch ein Paar `<0><>` Tags repräsentiert wird oder mit einer anderen Zahl, falls mehrere Links in einem Absatz enthalten sind.

Es ist die Aufgabe des Proofreaders, einen besonderen Blick darauf zu haben!

### Korrekturlesen

* Proofreader müssen zum Proofreading-Modus wechseln
    
    ![Proofreading mode docs](./images/translation_WikiProofreadingmode.png)
    
    und übersetzte Texte freigeben.
    
    ![Übersetzung freigeben](./images/translations-proofreading.png)

* Wenn ein Korrekturleser eine Übersetzung annimmt, wird sie in die nächste Dokumentations-Version hinzugefügt, die in keinem festen Zeitplan erstellt, sondern bei Bedarf etwa einmal pro Woche außer während der Feiertage. Um den Prozess zu beschleunigen, kannst Du das Docs-Team über neue Übersetzungen informieren.