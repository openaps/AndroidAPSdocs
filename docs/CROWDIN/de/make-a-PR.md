# Wie man den ersten PR (Pull Request) macht

**An dieser Stelle wird nur die Bearbeitung der englischen Dokumentation erläutert. Falls du diese in eine andere Sprache übersetzen willst (Danke dafür!), nutze bitte [crowdin](https://wikitranslations.androidaps.org).**

Hinweise zum Formatieren von Texten (Überschriften, fett...) und zum Setzen von Links findest Du weiter unten auf dieser Seite im Bereich ["Code-Syntax"](./make-a-PR#code-syntax).

## Allgemein

Bei Fragen, Feedback oder neue Ideen kannst Du das Dokumentationsteam per E-Mail (wiki@androidaps.org) kontaktieren. Einen "pull request" zu machen ist nicht schwierig, aber wir können Dir helfen, die Dokumentation zu bearbeiten.

Es kann sein, dass dir irgendwann vorgeschlagen wird, einen PR zu machen. PR, die Abkürzung für Pull-Request, ist eine Möglichkeit wie man Quellcode oder - wie in diesem Fall - Dokumentationen auf GitHub ergänzen oder ändern kann. Es ist eigentlich nicht allzu schwer und eine gute Möglichkeit, einen Beitrag zu leisten. Diese Dokumentation gibt es, weil Leute wie du PRs gemacht haben. Mach dir keine Sorgen einen Fehler zu machen oder irgendwie die falschen Dokumente zu bearbeiten. Es wird immer Korrektur gelesen, bevor Änderungen in die "finale" AndroidAPS Dokumentation integriert werden. Du kannst das Original nicht zerstören, wenn du beim PR etwas falsch machst. Die allgemeine Vorgehensweise ist:

* Mache Änderungen und Verbesserungen am Code oder der Dokumentation, indem du das bestehende Dokument veränderst.
* Vergewissere dich, dass die Änderungen gut aussehen.
* Füge Notizen hinzu, damit andere die Änderungen verstehen können.
* Erstelle einen Pull-Request, durch den die Administratoren aufgefordert werden deine Änderungen zu verwenden.
* Sie werden sich das anschauen und entweder (1) deine Änderungen übernehmen (2) deine Änderungen kommentieren oder (3) ein neues Dokument mit deinen Änderungen erstellen.

(Randbemerkung: Wenn Du ein visueller Lerner bist, gibt es [hier](https://youtu.be/4b6tsL0_kzg) ein YouTube Video, das den PR-Prozess darstellt.)

In unserem Beispiel nehmen wir nun eine Änderung an der AndroidAPS-Dokumentation vor. Dies muss nicht in einer Linux-Umgebung durchgeführt werden. Es kann auf jedem Windows-PC, Mac, etc. erfolgen. (jedem Computer mit Internet-Zugang).

1. Gehe zu https://github.com/openaps/AndroidAPSdocs und klicke auf "Fork" oben rechts, um deine eigene Kopie des Repositories (=Quell-Code) zu machen.

![Fork repo](./images/PR0.png)

2. Gehe zu http://androidaps.readthedocs.io/en/latest/Getting-Started/Safety-first.html oder ähnliches und navigiere zu der Seite, die du bearbeiten möchtest. Klicke auf die Black-Box unten links in der Seite mit dem grünen Wort "v: newest" oder ähnliches. Es öffnet sich ein Pop-Up-Fenster. Klicke in diesem auf "edit", um in GitHub zu bearbeiten. 

![edit doc](./images/PR1.png)

     Oder du klickst auf den “Edit in Github”-Link in der oberen rechten Ecke und klickst dann auf das Bleistift-Symbol, das in der oberen Leiste der Seite erscheint, um diese zu editieren. 
    

![RTD io](./images/PR2.png)

3. Beide Optionen in Schritt 2 führen dazu, dass ein neuer Branch in DEINEM kopierten Repository erstellt wird, wo die Änderungen gespeichert werden sollen. Editiere die Datei.
  
  Beachte, dass wir zwei verschiedene Dateitypen verwenden: .rst (ReStructuredText) und .md (Markdown). Der Syntax zwischen den beiden variiert etwas. Achte auf den richtigen Syntax wie [unten](./make-a-PR#code-syntax) beschrieben.

![Edit branch](./images/PR3.png)

4. Du arbeitest im "<>Edit file" Reiter. Wechsle zum "Preview changes" Reiter, um auf die Vorschau einen Blick zu werfen, damit alles was du geändert hast so aussieht wie du es wolltest (Rechtschreibfehler prüfen). Wenn du etwas entdeckst, das ausgebessert werden muss, wechsle wieder zum edit Reiter, um die Ausbesserungen vorzunehmen. 

![preview mode](./images/PR5.png)

5. Wenn du mit deinen Änderungen fertig bist, scrolle zum Seitenende. In der Box am Seitenende solltest du deine Kommentare im Textfeld namens "Add an optional extended description..." einfügen. Der Standardtitel beinhaltet den Dateinamen. Versuche einen Satz dazu zu schreiben, **warum** du etwas geändert hast. Die Angabe des Grundes hilft den Admins zu verstehen, was du mit deinem PR bezweckst.

![commit comments](./images/PR4.png)

6. Klicke auf den grünen "Propose file changes" (Änderungen vorschlagen) oder "Commit changes" (Änderungen integrieren) Button. Auf der Seite, die dann erscheint, klicke auf "Create Pull Request" und auf der dann erscheinenden Seite klicke auf "Create Pull Request".

![create pull request](./images/PR6.png)

7. Das war der letzte Schritt zur Erstellung eines pull requests, PR. GitHub ordnet dem PR eine Nummer, die du nach dem Titel findest, zu und einen Hashtag. Rufe diese Seite wieder auf, um Feedback zu erhalten (oder du erhältst automatisch E-Mail Benachrichtigungen über Aktivitäten bei deinem PR, wenn du Github entsprechend konfiguriert hast). Die Änderung wird nun in einer Liste von PR's aufgeführt, die das Team überprüfen wird; es wird gegebenenfalls Rückmeldungen dazu geben, bevor die Änderung in die Hauptdokumentation für AndroidAPS einfließt! Wenn du den Fortschritt des PR überprüfen willst, kannst du auf das Logo mit der Glocke in der oberen rechten Ecke deines GitHub-Kontos klicken, wo du dann alle deine PRs siehst.

![PR tracking](./images/PR7.png)

PS: dein Fork und Branch befinden sich nach wie vor auf deinem persönlichen GitHub Konto. Nachdem du die Benachrichtigung erhalten hast, dass dein PR integriert wurde, kannst du deinen Branch löschen, wenn du damit fertig bist (der Benachrichtigungsbereich in Schritt 8 stellt dir einen Link zur Verfügung, um den Branch zu löschen, wenn er geschlossen oder integriert wurde). Künftige Änderungen werden immer mit einer aktuellen Version des AndroidAPS Repositories beginnen, wenn du diese Vorgehensweise verwendest. Wenn du eine andere Methode verwendest, um einen PR zu starten (z.B. du fängst mit einem lokalen Fork des Master Branches an), musst du sicherstellen, dass dein Repository aktuell ist, indem du erst ein "compare" ausführst und damit alle Updates integrierst, die seit dem letzten Update deines Forks stattgefunden haben. Da häufig vergessen wird, die eigenen Repositories auf dem aktuellen Stand zu halten, empfehlen wir, den PR Prozess wie oben beschrieben zu verwenden, bis du dich mit der Ausführung von "compares" vertraut gemacht hast.

## Code-Syntax

At the moment there are two languages used for docs pages:

* Markdown (.md) - the markup language originally used for docs pages
* reStructuredText (.rst) - die neue Markup-Sprache

We will change all docs pages from Markdown to reStructuredText bit by bit. In der Zwischenzeit ist es wichtig, dass Du beim Formatieren von Text oder dem Setzen von Links den richtigen Syntax verwendest. Wenn Du Dir nicht sicher bist, schaue einfach bei existierenden Seiten wie dort formatiert bzw. die Links gesetzt wurden.

### Image size

If using images please use reasonable sizes. Screenshot images should be **250 pixels wide**.

### .md files

#### Textformatierung

* fett: `**Text**`
* kursiv: `*Text*`
* Überschrift 1: `# Überschrift`
* Überschrift 2: `## Überschrift`
* Überschrift 3: `### Überschrift`

#### Bilder

* Bilder: `![Alternativtext](../images/file.png)`

#### Links

* externe Links: `[Linktext](www.url.tld)`
* Interne Links zu .md Seiten: `[Linktext](.../folder/file.md)`
* Interner Link zu .rst Seiten: `[Linktext] (.../folder/file.rst)`
* Interne Links zu Überschriften: `[Linktext](.../folder/file#headline)`

### .rst files

#### Textformatierung

* fett: `**Text**`
* kursiv: `*Text*`
* Überschrift 1:
  
  `Überschrift`  
  `*****`

* Überschrift 2:
  
  `Überschrift`  
  `=====`

* Überschrift 3:
  
  `Überschrift`  
  `-----`

#### Bilder

* Bilder:
  
  `.. image:: ../images/modules.png`  
  `:alt: Alternativtext`

#### Links

* Externe Links: `` Linktext <www.url.tld>_` ``
* Interne Links zu .md Seiten: `` `Linktext <../folder/file.html>_` ``
* Interne Links zu .rst Seiten: `` `Linktext <../folder/file.html>_` ``
* Interne Links zu Überschriften: `` `Linktext <../folder/file.html#headline>_` ``

### Internal links

If you want to set an internal link within the AndroidAPS documentation, please only use **relative links**. Only this will make the link work in the other languages (Czech, German...) as well.

#### Dateien mit der Endung **.md**:

* `[text](../Usage/Test.md)` legt einen Hyperlink fest, der auf ein Verzeichnis oberhalb des aktuellen Verzeichnisses beginnt und dort auf das Verzeichnis /Usage verweist. Die Erweiterung der Zieldatei muss .md oder .rst sein (nicht .html)
* `[text](/Usage/Test.md)` legt einen Hyperlink fest, der aus dem aktuellen Verzeichnis auf das Unterverzeichnis /Usage verweist. Die Erweiterung der Zieldatei muss .md oder .rst sein (nicht .html)
* Um den Link auf einen **Anker** (d.h. eine Überschrift) zu setzen, muss die Dateierweiterung weggelassen werden. 
  * `[text](../Usage/Test#anchor)` statt `[text](../Usage/Test.md#anchor)`

#### Dateien mit der Endung **.rst**:

* `` `Text <../Usage/Test.hmtl>`_ `` legt einen Hyperlink fest, der auf ein Verzeichnis unterhalb des aktuellen Verzeichnisses beginnt und dort auf das Verzeichnis /Usage verweist. Die Endung der Zieldatei muss .html sein.
  
  Außer Du bist in einem Toctree. Dann musst Du wie folgt schreiben: `Text <../Usage/Test.md>` mit .md oder .rst (nicht .html).

* `Text <./Usage/Test.md>` legt einen Hyperlink fest, der aus dem aktuellen Verzeichnis auf das Unterverzeichnis /Usage verweist.

* Um den Link auf einen **Anker** (z.B.. eine Überschrift) zu setzen, muss die der Anker an den Link angehängt werden. 
  * `[Alternativtext](../Usage/Test.html#anchor)` statt `[Alternativtext](../Usage/Test#anchor)`

## Mehrere Bilder zum Wiki hinzufügen

If you are planning to make a lot of edits, including adding images to help illustrate parts of the documentation (thank you!), you may want to take the following approach:

* As you go and save screenshots, rename the screenshots to a descriptive name - but try not to use spaces as that confuses Github. Instead, use underscores. I.e. Example_batch_images_upload.png rather than "Example batch images upload.png". 
* Please use reasonable sizes. Screenshot images should be **250 pixels wide**.
* You can upload images in batches easily by:
  
  1. Navigate to the images folder (https://github.com/openaps/AndroidAPSdocs/tree/master/docs/EN/images - but make sure you are in your fork/copy of the docs Images folder to be able to do this (replace "openaps" in the URL with your github username)).
  
  2. Click in the upper right corner where it says "Upload files"
  
  3. Drag and drop your images into the screen
  
  4. Commit these to your branch
  
  5. Now, you can look for the URL/relative path of each file and use that to refer to when adding images into a page in the documentation.
  
  6. To see examples of how to add the images, you can look at the "raw" code of a page to see an example from a page that already has the images embedded successfully. Make sure you use the [correct code](./make-a-PR#code-syntax) for the page type you are on (.md or .rst). The main thing is to have a plain text description, followed by a link with a relative path to the image, like this:
    
    * For .md pages: `![Example of uploading images in batches](../images/Example_batch_images_upload.png)` (That code is exactly how the image below is embedded to be displayed.)
    * For .rst pages: `.. image:: ../images/Example_batch_images_upload.png`  
      `:alt: Example of uploading images in batches`

![Example of uploading images in batches](./images/Example_batch_images_upload.png)

7. Nachdem du Bilder hinzugefügt oder Veränderungen vorgenommen hast, kannst du einen PR auf das master branch von AndroidAPSdocs machen.