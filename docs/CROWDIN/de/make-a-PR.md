# Wie man den ersten PR (Pull Request) macht

Es kann sein, dass dir irgendwann vorgeschlagen wird, einen PR zu machen. PR, die Abkürzung für Pull-Request, ist eine Möglichkeit wie man Quellcode oder - wie in diesem Fall - Dokumentationen auf GitHub ergänzen oder ändern kann. Es ist eigentlich nicht allzu schwer und eine gute Möglichkeit, einen Beitrag zu leisten. Diese Dokumentation gibt es, weil Leute wie du PRs gemacht haben. Mach dir keine Sorgen einen Fehler zu machen oder irgendwie die falschen Dokumente zu bearbeiten. Es wird immer Korrektur gelesen, bevor Änderungen in die "finale" AndroidAPS Dokumentation integriert werden. Du kannst das Original nicht zerstören, wenn du beim PR etwas falsch machst. Die allgemeine Vorgehensweise ist:

* Mache Änderungen und Verbesserungen am Code oder der Dokumentation, indem du das bestehende Dokument veränderst.
* Vergewissere dich, dass die Änderungen gut aussehen.
* Füge Notizen hinzu, damit andere die Änderungen verstehen können.
* Erstelle einen Pull-Request, durch den die Administratoren aufgefordert werden deine Änderungen zu verwenden.
* Sie werden sich das anschauen und entweder (1) deine Änderungen übernehmen (2) deine Änderungen kommentieren oder (3) ein neues Dokument mit deinen Änderungen erstellen.

(Randbemerkung: Wenn Du ein visueller Lerner bist, gibt es [hier](https://youtu.be/4b6tsL0_kzg) ein YouTube Video, das den PR-Prozess darstellt.)

In unserem Beispiel nehmen wir nun eine Änderung an der OpenAPS-Dokumentation vor. Dies muss nicht in einer Linux-Umgebung durchgeführt werden. Es kann auf jedem Windows-PC, Mac, etc. erfolgen. (jedem Computer mit Internet-Zugang).

1. Gehe zu https://github.com/openaps/AndroidAPSdocs und klicke auf "Fork" oben rechts, um deine eigene Kopie des Repositories (=Quell-Code) zu machen. ![Fork repo](./images/PR0.png)
2. Gehe zu http://androidaps.readthedocs.io/en/latest/Getting-Started/Safety-first.html oder ähnliches und navigiere zu der Seite, die du bearbeiten möchtest. Klicke auf die Black-Box unten links in der Seite mit den grünen Wort "v: newest" oder ähnliches. In dem Fenster das nun erscheint klicke auf das Wort "edit", um es in Github zu editieren.   
    ![edit doc](./images/PR1.png) Oder du klickst auf den "Edit in Github"-Link in der oberen rechten Ecke und klickst dann auf das Bleistift-Symbol das in der oberen Leiste der Seite erscheint, um diese zu editieren. ![RTD io](./images/PR2.png)
3. Beide Optionen in Schritt 2 führen dazu, dass ein neuer Branch in DEINEM kopierten Repository erstellt wird, wo die Änderungen gespeichert werden sollen. Make your edits to the file. ![Edit branch](./images/PR3.png)
4. You have been working in the "<>Edit file" tab. Select the "Preview changes" tab for a fresh look to make sure everything you changed looks like you meant it to (typpos sic.). If you see a needed improvement, go back to the edit tab to make more improvements. ![preview mode](./images/PR5.png)
5. When you have finished your edits, scroll to the bottom of the page. In the box at the bottom, provide your comments in the text field that reads, "Add an optional extended description...". The default title has the file name. Try to include a sentence explaining the **reason** for the change. Relating the reason helps reviewers understand what you are attempting to do with the PR. ![commit comments](./images/PR4.png)
6. Click the green "Propose file changes" or "Commit changes" button. In the page that appears click "Create Pull Request" and again in the next page click "Create Pull Request". ![create pull request](./images/PR6.png)
7. That completes the opening of a pull request, PR. GitHub assigns the PR a number, located after the title and a hash mark. Return to this page to check for feedback (or, if you have Github notifications emailed to you, you will get emails notifying you of any activity on the PR). The edit will now be in a list of PR's that the team will review and potentially give feedback on before committing to the main documentation for openaps! If you want to check on the progress of the PR, you can click on the bell logo in the upper right corner of your GitHub account and see all your PRs. ![PR tracking](./images/PR7.png)

Congrats, you made your first contribution!

PS, your fork and branch will still be sitting on your own personal GitHub account. After you get a notification that your PR has been merged, you can delete your branch if you are done with it (Step 8's notification area will provide a link to delete the branch once it has been closed or merged). For future edits, if you follow this procedure the edits will always start with an updated version of the openaps repositories. If you choose to use another method to start a PR request (e.g., editing starting from your forked repo's master branch as the starting point), you will need to ensure your repo is up-to-date by performing a "compare" first and merging in any updates that have happened since you last updated your fork. Since people tend to forget to update their repos, we recommend using the PR process outlined above until you get familiar with performing "compares".

### Advanced tips for adding multiple images to documentation

If you are planning to make a lot of edits, including adding images to help illustrate parts of the documentation (thank you!), you may want to take the following approach:

* As you go and save screenshots, rename the screenshots to a descriptive name - but try not to use spaces as that confuses Github. Instead, use underscores. I.e. Example_batch_images_upload.png rather than "Example batch images upload.png".

* You can upload images in batches easily by:
    
    1. Navigate to the images folder (https://github.com/openaps/AndroidAPSdocs/tree/master/docs/EN/images - but make sure you are in your fork/copy of the docs Images folder to be able to do this (replace "openaps" in the URL with your github username)).
    
    2. Click in the upper right corner where it says "Upload files"
    
    3. Drag and drop your images into the screen
    
    4. Commit these to your branch
    
    5. Now, you can look for the URL/relative path of each file (example, you can see [this individual image has its own URL and path](https://github.com/openaps/docs/blob/master/docs/EN/images/Example_batch_images_upload.png) and use that to refer to when adding images into a page in the documentation.
    
    6. To see examples of how to add the images, you can look at the "raw" code of a page to see an example from a page that already has the images embedded successfully. The main thing is to have a plain text description, followed by a link with a relative path to the image, like this: `![Example of uploading images in batches](../images/Example_batch_images_upload.png)`
    
    (That code is exactly how the image below is embedded to be displayed.)

![Example of uploading images in batches](./images/Example_batch_images_upload.png)

7. Now, once done adding images/making adjustments, you can submit a PR back to the master copy of the OpenAPS docs.