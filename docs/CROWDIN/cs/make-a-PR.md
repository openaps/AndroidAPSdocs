# Udělejte svůj první PR (pull request - žádost o změnu)

**Tento popis je pouze pro editaci anglické dokumentace. All new information must be added in English first. If you want to translate to other languages (thank you), please use [crowdin](https://crowdin.com/project/androidapsdocs).**

For hints how to format text (headline, bold...) and set links please see the ["code syntax"](./make-a-PR#code-syntax) section of this page.

## Obecné

For any questions, feedback or new ideas you can contact the documentation team via [gitter](https://gitter.im/AndroidAPSwiki/Lobby). Vytvoření PR není obtížné, ale můžeme vám pomoci editovat dokumentaci.

V určitém okamžiku bude doporučeno, abyste udělali PR. PR je zkratka pro pull request a je to způsob, jak přidat nebo editovat informace uložené v GitHubu. Ve skutečnosti není příliš těžké udělat takový krok a je to skvělý způsob, jak přispět. Tato dokumentace je zde proto, že lidé, jako jste vy, udělali svůj PR. Nebojte se, že uděláte chybu nebo nějak editujete špatné dokumenty. Před sloučením změn do „formálního“ repositáře dokumentace AndroidAPS je zde vždy proces přezkumu. Nějakou chybou nemůžete originál poškodit. Obecný proces je:

* Edituje a vylepšuje kód nebo dokumentaci editací stávajícího obsahu.
* Zkontrolujte, že vaše úpravy vypadají dobře.
* Udělejte několik poznámek o tom, co je změněno, aby lidé mohli porozumět editacím.
* Vytvořte PR, která žádá správce, aby se tyto změny použily.
* Ten provede přezkum a buď (1) sloučí vaše změny, (2) přidá komentář k vašim změnám, nebo (3) založí nový dokument s vašimi změnami.

(Poznámka: Pokud se učíte spíše vizuálně, existuje YouTube video [zde](https://youtu.be/4b6tsL0_kzg) ukazující, jak PR funguje.)

Například: chystáme se upravit AndroidAPSdocs. To není nutné dělat v linuxovém prostředí. To lze udělat na jakémkoli Windows PC, Mac atd. (libovolném počítači s připojením k internetu).

1. Jděte na https://github.com/openaps/AndroidAPSdocs a kliněte na Fork v horním rohu, abyste si vytvořili vlastní kopii repozitáře.

![Klonování repozitoře](./images/PR0.png)

2. Jděte na http://androidaps.readthedocs.io/en/latest/Getting-Started/Safety-first.html nebo podobné a přejděte na stránku, kterou chcete editovat. Klikněte na černou oblast dole na stránce se zeleným slovem "v: latest" nebo podobné. In the pop up window that appears, click the word "edit" for editing in GitHub. 

![edit doc](./images/PR1.png)

     Or you can click on the "Edit in Github" link in the upper right corner, and then click the pencil icon that appears in the top bar of the page contents to be edited.
    

![RTD io](./images/PR2.png)

3. Libovolnou možností v kroku 2 vytvoříte nový branch ve svém repozitáři, kde budou uloženy vaše změny. Udělejte své úpravy do souboru.
  
  Be aware that we use different file extensions: .rst (ReStructuredText) and .md (Markdown) and the syntax varies a little bit between the two. Take care to use the correct syntax as [described below](./make-a-PR#code-syntax).

![Upravit větev](./images/PR3.png)

4. Pracujete v záložce "<>Edit file". Vyberte záložku "Preview changes" pro nový náhled, abyste zjistili, že vše, co jste změnili, je to, co jste chtěli. Pokud vidíte, že je potřeba další zlepšení, vraťte se zpět na záložku editace a pokračujte. 

![režim náhledu](./images/PR5.png)

5. Když jste dokončili své úpravy, přesuňte se do dolní části stránky. V obdélníku dole napište komentář do textového pole "Add an optional extended description...". Výchozí název má jméno souboru. Zkuste přidat větu s vysvětlením **důvodu** změny. Pomůže to při kontrole, o jakou změnu se pokoušíte.

![potvrdit komentáře](./images/PR4.png)

6. Klikněte na zelené tlačítko "Propose file changes" nebo "Commit changes". Na stránce se pak objeví tlačítko "Create Pull Request" a znovu na další stránce klepněte na tlačítko "Create Pull Request".

![vytvořit žádost o přijetí změn](./images/PR6.png)

7. Tím dokončíte žádost PR. GitHub přiděluje PR číslo, které se nachází za názvem a hashovou značkou. Vraťte se na tuto stránku, abyste zkontrolovali zpětnou vazbu (nebo pokud došla notifikace e-mailem). Žádost o změnu bude nyní na seznamu PR, který bude tým přezkoumávat a případně poskytne zpětnou vazbu před tím, než začlení změnu do hlavní dokumentace pro AndroidAPS! Pokud chcete zkontrolovat pokrok ve zpracování PR, můžete kliknout na symbol zvonku v horním pravém rohu svého účtu na GitHub a uvidíte všechny své PR.

![Sledování PR](./images/PR7.png)

PS: Your fork and branch will still be sitting on your own personal GitHub account. Po oznámení, že Váš PR byl sloučený, můžete odstranit branch, pokud do něj nechcete dělat další změny (V kroku 8 bude odkaz na odstranění branche, jakmile bude PR uzavřen nebo sloučen). Pro budoucí úpravy, pokud budete následovat tento postup, budou změny vždy začínat aktualizovanou verzí repozitáře AndroidAPSdocs. Pokud se rozhodnete použít jinou metodu pro vytvoření PR žádosti (např. editace začínající z vaší kopie repozitáře), budete muset zajistit, aby Váš repozitář byl aktuální, a to nejprve provedením "Compare" a sloučením všech aktualizací, které se udály od doby, kdy jste naposledy aktualizovali svůj repozitář. Protože lidé často zapomínají aktualizovat svůj repozitář, doporučujeme použít pro PR proces popsaný výše, dokud se neseznámíte s detaily fungování "Compare".

## Code syntax

At the moment there are two languages used for docs pages:

* Markdown (.md) - the markup language originally used for docs pages
* reStructuredText (.rst) - the new markup language

We will change all docs pages from Markdown to reStructuredText bit by bit. In the meantime it is important that you use the correct syntax when formatting text or linking. If you are not sure just have a look at format / link codes on existing pages.

### Image size

If using images please use reasonable sizes. Screenshot images should be **250 pixels wide**.

### .md files

#### Text format

* bold: `**text**`
* italic: `*text*`
* Headline 1: `# headline`
* Headline 2: `## headline`
* Headline 3: `### headline`

#### Images

* images: `![alt text](../images/file.png)`

#### Links

* external link: `[alt text](www.url.tld)`
* internal link to .md page: `[alt text](.../folder/file.md)`
* internal link to .rst page: `[alt text](.../folder/file.rst)`
* internal link to headline: `[alt text](.../folder/file#headline)`

### .rst files

#### Text format

* bold: `**text**`
* italic: `*text*`
* Headline 1:
  
  `headline`  
  `*****`

* Headline 2:
  
  `headline`  
  `=====`

* Headline 3:
  
  `headline`  
  `-----`

#### Images

* images:
  
  `.. image:: ../images/modules.png`  
  `:alt: alt text`

#### Links

* external link: `` `alt text <www.url.tld>_` ``
* internal link to .md page: `` `alt text <../folder/file.html>_` ``
* internal link to .rst page: `` `alt text <../folder/file.html>_` ``
* internal link to headline: `` `alt text <../folder/file.html#headline>_` ``

### Internal links

If you want to set an internal link within the AndroidAPS documentation, please only use **relative links**. Only this will make the link work in the other languages (Czech, German...) as well.

#### V souborech končících na **.md**:

* `[text](../Usage/Test.md)` nastaví vnitřní odkaz o adresář nahoru, z místa kde jste, a pak do podadresáře /Usage. Ukončení cílového souboru musí být .md nebo .rst (ne .html)
* `[text](./Usage/Test.md)` nastaví interní hypertextový odkaz z místa, kde se nachází, na /Usage. Ukončení cílového souboru musí být .md nebo .rst (ne .html)
* Chcete-li nastavit odkaz na **ukotvení** (např. na titulek) musíte vynechat příponu souboru 
  * `[text](../Usage/Test#anchor)` místo `[text](../Usage/Test.md#anchor)`

#### V souborech končících na **.rst**:

* `` `Text <../Usage/Test.hmtl>`_ `` nastaví vnitřní odkaz o adresář nahoru, z místa kde jste, a pak do podadresáře /Usage. Koncovka cílového souboru musí být .html.
  
  Kromě toho, když jste v toctree. Pak ho musíte psát takto: `Text <../Usage/Test.md>` s .md nebo rst (not .html).

* `Text <./Usage/Test.md>` nastaví odkaz z místa, kde jste, do podadresáře /Usage.

* To set the link to an **anchor** (i.e. a headline) you have to add the anchor to the link 
  * `[text](../Usage/Test.html#anchor)` instead of `[text](../Usage/Test#anchor)`

## Adding multiple images to documentation

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

7. Po přidání obrázků nebo provedení úprav můžete odeslat PR (Pull request) do hlavní větve AndroidAPSdocs.