# Udělejte svůj první PR (pull request - žádost o změnu)

**Tento popis je pouze pro editaci anglické dokumentace. Pokud chcete přeložit wiki do jiných jazyků (děkujeme), použijte prosím [crowdin](https://wikitranslations.androidaps.org).**

Máte-li jakékoliv dotazy, můžete kontaktovat dokumentační tým prostřednictvím e-mailu (wiki@androidaps.org). Vytvoření PR není obtížné, ale můžeme vám pomoci editovat dokumentaci.

V určitém okamžiku bude doporučeno, abyste udělali PR. PR je zkratka pro pull request a je to způsob, jak přidat nebo editovat informace uložené v GitHubu. Ve skutečnosti není příliš těžké udělat takový krok a je to skvělý způsob, jak přispět. Tato dokumentace je zde proto, že lidé, jako jste vy, udělali svůj PR. Nebojte se dělat chybu nebo nějak editovat špatné dokumenty. Před sloučením změn do "formálního" repositáře dokumentace AndroidAPS je zde vždy proces přezkumu. Nějakou chybou nemůžete originál poškodit. Obecný proces je:

* Edituje a vylepšuje kód nebo dokumentaci editací stávajícího obsahu.
* Zkontrolujte, že vaše úpravy vypadají dobře.
* Udělejte několik poznámek o tom, co je změněno, aby lidé mohli porozumět editacím.
* Vytvořte PR, která žádá správce, aby se tyto změny použily.
* Ten provede přezkum a buď (1) sloučí vaše změny, (2) přidá komentář k vašim změnám, nebo (3) založí nový dokument s vašimi změnami.

(Poznámka: Pokud se učíte spíše vizuálně, existuje YouTube video [zde](https://youtu.be/4b6tsL0_kzg) ukazující, jak PR funguje.)

Například: chystáme se upravit AndroidAPSdocs. To není nutné dělat v linuxovém prostředí. To lze udělat na jakémkoli Windows PC, Mac atd. (libovolném počítači s připojením k internetu).

1. Jděte na https://github.com/openaps/AndroidAPSdocs a kliněte na Fork v horním rohu, abyste si vytvořili vlastní kopii repozitáře. ![Fork repo](./images/PR0.png)
2. Jděte na http://androidaps.readthedocs.io/en/latest/Getting-Started/Safety-first.html nebo podobné a přejděte na stránku, kterou chcete editovat. Klikněte na černou oblast dole na stránce se zeleným slovem "v: latest" nebo podobné. V okně, které vyskočí, stiskněte slovo "edit" pro editaci GutHubu.   
    ![edit doc](./images/PR1.png) Nebo klikněte na "Edit in Github" v pravém horním rohu a pak na ikonu tužky, která se objeví v pravém horním rohu editované stránky. ![RTD io](./images/PR2.png)
3. Libovolnou možností v kroku 2 vytvoříte nový branch ve svém repozitáři, kde budou uloženy vaše změny. Udělejte své úpravy do souboru. ![Edit branch](./images/PR3.png)
4. Pracujete v záložce "<>Edit file". Vyberte záložku "Preview changes" pro nový náhled, abyste zjistili, že vše, co jste změnili, je to, co jste chtěli. Pokud vidíte, že je potřeba další zlepšení, vraťte se zpět na záložku editace a pokračujte. Uvědomte si, že používáme různé rozšíření souborů: .rst (ReStructuredText) a .md (Markdown) a syntax se mezi oběma trochu liší. ![preview mode](./images/PR5.png)
5. Když jste dokončili své úpravy, přesuňte se do dolní části stránky. V obdélníku dole napište komentář do textového pole "Add an optional extended description...". Výchozí název má jméno souboru. Zkuste přidat větu s vysvětlením **důvodu** změny. Pomůže to při kontrole, o jakou změnu se pokoušíte. ![commit comments](./images/PR4.png)
6. Klikněte na zelené tlačítko "Propose file changes" nebo "Commit changes". Na stránce se pak objeví tlačítko "Create Pull Request" a znovu na další stránce klepněte na tlačítko "Create Pull Request". ![create pull request](./images/PR6.png)
7. Tím dokončíte žádost PR. GitHub přiděluje PR číslo, které se nachází za názvem a hashovou značkou. Vraťte se na tuto stránku, abyste zkontrolovali zpětnou vazbu (nebo pokud došla notifikace e-mailem). Žádost o změnu bude nyní na seznamu PR, který bude tým přezkoumávat a případně poskytne zpětnou vazbu před tím, než začlení změnu do hlavní dokumentace pro AndroidAPS! Pokud chcete zkontrolovat pokrok ve zpracování PR, můžete kliknout na symbol zvonku v horním pravém rohu svého účtu na GitHub a uvidíte všechny své PR. ![PR tracking](./images/PR7.png)

Gratulujeme, právě jste podali první žádost o změnu!

PS, your fork and branch will still be sitting on your own personal GitHub account. After you get a notification that your PR has been merged, you can delete your branch if you are done with it (Step 8's notification area will provide a link to delete the branch once it has been closed or merged). For future edits, if you follow this procedure the edits will always start with an updated version of the AndroidAPSdocs repositories. If you choose to use another method to start a PR request (e.g., editing starting from your forked repo's master branch as the starting point), you will need to ensure your repo is up-to-date by performing a "compare" first and merging in any updates that have happened since you last updated your fork. Since people tend to forget to update their repos, we recommend using the PR process outlined above until you get familiar with performing "compares".

### Advanced tips for adding internal links

If you want to set an internal link within the AndroidAPS documentation, please only use **relative links**. Only this will make the link work in the other languages as well.

In files with **.md** ending:

* `[text](../Usage/Test.md)` will set an internal hyperlink one directory up from where you are and then into the subdirectory /Usage. Ending of the target file must be .md or .rst (not .html)
* `[text](./Usage/Test.md)` will set an internal hyperlink from where you are into /Usage. Ending of the target file must be .md or .rst (not .html)

To set the link to an **anchor** (i.e. a headline) you have to omit the file extension

* `[text](../Usage/Test#anchor)` instead of `[text](../Usage/Test.md#anchor)`

In files with **.rst** ending:

* `` `Text <../Usage/Test.hmtl>`_ `` will set a hyperlink one directory up from where you are and then into the subdirectory /Usage. Ending of the target file must be .html. Except you are in a toctree. Then you have to write it like this: `Text <../Usage/Test.md>` with .md or .rst (not .html).
* `Text <./Usage/Test.md>` will set a hyperlink from where you are into /Usage.

### Advanced tips for adding multiple images to documentation

If you are planning to make a lot of edits, including adding images to help illustrate parts of the documentation (thank you!), you may want to take the following approach:

* As you go and save screenshots, rename the screenshots to a descriptive name - but try not to use spaces as that confuses Github. Instead, use underscores. I.e. Example_batch_images_upload.png rather than "Example batch images upload.png".

* You can upload images in batches easily by:
    
    1. Navigate to the images folder (https://github.com/openaps/AndroidAPSdocs/tree/master/docs/EN/images - but make sure you are in your fork/copy of the docs Images folder to be able to do this (replace "openaps" in the URL with your github username)).
    
    2. Click in the upper right corner where it says "Upload files"
    
    3. Drag and drop your images into the screen
    
    4. Commit these to your branch
    
    5. Now, you can look for the URL/relative path of each file and use that to refer to when adding images into a page in the documentation.
    
    6. To see examples of how to add the images, you can look at the "raw" code of a page to see an example from a page that already has the images embedded successfully. The main thing is to have a plain text description, followed by a link with a relative path to the image, like this: `![Example of uploading images in batches](../images/Example_batch_images_upload.png)`
    
    (That code is exactly how the image below is embedded to be displayed.)

![Example of uploading images in batches](./images/Example_batch_images_upload.png)

7. After adding images or making adjustments, you can submit a PR to the master branch of AndroidAPSdocs.