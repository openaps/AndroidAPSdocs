# Am Wiki mitschreiben

Um das Wiki zu bearbeiten, Beiträge zu ändern oder zu ergänzen, ist ein sogenannter Pull Request, kurz PR, notwendig. Dies ist soviel wie ein Änderungsvorschlag, der von den Entwicklern übernommen (oder auch abgelehnt) werden kann.

(Notiz: [hier](https://youtu.be/4b6tsL0_kzg) gibt es bereits ein YouTube-Video auf Englisch, bei dem Schritt für Schritt erklärt wird, wie ein PR funktioniert.

Für die Bearbeitung ist lediglich Internet und ein Github-Account notwendig. Du kannst nach folgenden Schritten vorgehen: 

1. Gehe zu https://github.com/openaps/AndroidAPSdocs und klicke auf 'Fork' um dir deine eigene Kopie des Wikis in deinem Github-Account zu erstellen.
![Fork repo](../../images/PR0.png)
2. Gehe zu http://androidaps.readthedocs.io/en/latest/DE/index.html, bzw. zu der Seite, die du bearbeiten willst. Klicke in das schwarze Feld links unten auf der Seite mit dem grünen Wort "v: latest". Dann wird sich ein Fenster öffnen. Klicke auf "edit".
![edit doc](../../images/PR1.png)
Alternativ kannst du auch rechts oben auf "Edit in Github" klicken. Daraufhin öffnet sich eine Seite. Klicke dort auf das 'Stift-Symbol'. 
![RTD io](../../images/PR2.png)
3. In beiden Fällen wirst du damit einen eigenen "Branch" in deinem eigenen Verzeichnis in deinem Github-Account erstellen. Dort kannst du die Datei bearbeiten und sichern.
![Edit branch](../../images/PR3.png)
4. Um zu überprüfen, wie später deine Änderungen im Wiki aussehen, kannst du auf "Preview changes" gehen. Wenn du noch weitere Änderungen vornehmen willst, da du z.B. Rechtschreibfehler entdeckt hast, gehe zu "<>Edit file".
![preview mode](../../images/PR5.png)
5. Nachdem du fertig bist mit den Änderungen im Wiki, scrolle ganz nach unten. In dem Feld "update make-a-PR.md", kannst du deinen Änderungen einen Titel geben, ansonsten werden die Änderungen nach dem Dateinamem benannt. In das Feld darunter kannst du noch Kommentare, Begründungen, etc. hineinschreiben. Das ist sehr hilfreich, damit die Entwickler und andere, die an diesem Wiki arbeiten, deine Beweggründe für die Änderungen verstehen können.
![commit comments](../../images/PR4.png)
6. Klicke auf den grünen "Propose file changes" oder "Commit changes" Button. In der Seite, die sich öffnet, klicke auf "Create Pull Request" und wiederhole den Schritt auf der nächsten Seite.
![create pull request](../../images/PR6.png)
7. Damit hast du einen PR erstellt. Du solltest deinen Pull Request nachverfolgen, um zu sehen, ob es Feedback gibt und/oder ob dein Vorschlag angenommen wurde. Falls bei dir Github-Benachrichtungen eingeschalten sind, wirst du auch per Email oder über das 'Glocken-Symbol' in deinem Github-Account über Feedback und Fortschritt informiert. 
![PR tracking](../../images/PR7.png)

Glückwunsch, damit hast du deinen ersten Beitrag zum Wiki geleistet!

P.S. Deine Kopie ("fork") und dein "Branch" sind immer noch in deinem GitHub-Account vorhanden. Nachdem du die Benachrichtigung erhalten hast, dass dein PR ge"merged", also angenommen, wurde, kannst du den Branch wieder löschen ("delete"), falls du damit fertig bist.

For future edits, if you follow this procedure the edits will always start with an updated version of the openaps repositories.If you choose to use another method to start a PR request (e.g., editing starting from your forked repo's master branch as the starting point), you will need to ensure your repo is up-to-date by performing a "compare" first and merging in any updates that have happened since you last updated your fork.  Since people tend to forget to update their repos, we recommend using the PR process outlined above until you get familiar with performing "compares".

### Tipps zum Einfügen von Bildern in die Dokumentation

Für den Fall, dass du einige Änderungen in dem Wiki vornimmst, das Einfügen von Bildern/Screenshots eingeschlossen, ist es sinnvoll, nach folgenden Schritten zu gehen:

* Wenn du einen Screenshot machst, benenne ihn bitte nach einem passenden Namen. Verwende dabei am besten keine Leerzeichen, sondern z.B. lieber Unterstriche '_', z.B. Example_batch_images_upload.png" statt "Example batch images upload.png". 

* Du kannst die Bilder auf folgende Art und Weise hochladen:
 
 1. Gehe zu dem Ordner, in dem die Bilder enthalten sind (https://github.com/openaps/AndroidAPSdocs/tree/master/docs/images) - ersetze "openaps" mit deinem Benutzername von Github und "master" mit deinem Branch (z.B. https://github.com/MarieT1D/AndroidAPSdocs/tree/patch-1/docs/images). Für den Fall, dass du noch keinen eigenen Branch hast, in dem du die Änderungen vornimmst, solltest du erst einen mithilfe der Schritte von oben erstellen.
 
 2. Klicke rechts in die Ecke auf "Upload files".
  ![upload file](../../images/PR-uploadfile.png)
 
 3. Ziehe dein Bild in das Feld und lasse es dort los.
 
 4. Klicke auf "Commit".
 
 5. Nun siehst du die URL/relativen Pfad deiner Datei. Benutze diese, um das Bild auf der Seite einzufügen. 
 
 6. Um zu sehen, wie Bilder genau eingefügt werden, kannst du auch einfach den Code von anderen Seiten der Dokumentation ansehen, die bereits Bilder haben. Wichtig dabei ist es, eine kurze Textbeschreibung, gefolgt von einem **relativen** Pfad. Den Dateipfad machst du relativ, in dem du z.B. "https://github.com/MarieT1D/AndroidAPSdocs/blob/patch-4/docs/images/PR-uploadfile.png" zu "../../images/PR-uploadfile.png" änderst. So könnte das dann auch aussehen `![Upload file](../../images/PR-uploadfile.png)`
 
 So wird das Bild dann im Wiki aussehen:
 
![Example of uploading images in batches](../../images/Example_batch_images_upload.png)

 7. Nachdem du die Bilder in deinem Branch eingefügt hast, kannst du einen PR zurück zum 'Master-Branch' des AndroidAPS Wikis machen.

