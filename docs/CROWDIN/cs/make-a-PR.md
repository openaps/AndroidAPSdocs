# How to edit the docs

**Tento popis je pouze pro editaci anglické dokumentace. Všechny nové informace musí být přidány nejdřív v angličtině. Pokud chcete přeložit wiki do jiných jazyků (děkujeme), použijte prosím [crowdin](https://crowdin.com/project/androidapsdocs).**

For hints how to format text (headline, bold...) and set links please see the ["code syntax"](make-a-PR-code-syntax) section of this page.

## Obecné

For any questions, feedback or new ideas you can contact the documentation team via [discord](https://discord.gg/4fQUWHZ4Mw). Vytvoření PR není obtížné, ale můžeme vám pomoci editovat dokumentaci.

V určitém okamžiku bude doporučeno, abyste udělali PR. PR je zkratka pro pull request a je to způsob, jak přidat nebo editovat informace uložené v GitHubu. Ve skutečnosti není příliš těžké udělat takový krok a je to skvělý způsob, jak přispět. Tato dokumentace je zde proto, že lidé, jako jste vy, udělali svůj PR. Nebojte se, že uděláte chybu nebo nějak editujete špatné dokumenty. There is always a review process before changes are merged into the "formal" AAPS documentation repository. Nějakou chybou nemůžete originál poškodit. Obecný proces je:

* Edituje a vylepšuje kód nebo dokumentaci editací stávajícího obsahu.
* Zkontrolujte, že vaše úpravy vypadají dobře.
* Udělejte několik poznámek o tom, co je změněno, aby lidé mohli porozumět editacím.
* Vytvořte PR, která žádá správce, aby se tyto změny použily.
* Ten provede přezkum a buď (1) sloučí vaše změny, (2) přidá komentář k vašim změnám, nebo (3) založí nový dokument s vašimi změnami.

(Poznámka: Pokud se učíte spíše vizuálně, existuje YouTube video [zde](https://youtu.be/4b6tsL0_kzg) ukazující, jak PR funguje.)

Například: chystáme se upravit AndroidAPSdocs. To není nutné dělat v linuxovém prostředí. To lze udělat na jakémkoli Windows PC, Mac atd. (libovolném počítači s připojením k internetu).

1. Jděte na https://github.com/openaps/AndroidAPSdocs a kliněte na Fork v horním rohu, abyste si vytvořili vlastní kopii repozitáře.

![Klonování repozitoře](./images/PR0.png)

2. Go to any page and navigate to the page you want to edit. Klikněte na černou oblast dole na stránce se zeleným slovem "v: latest" nebo podobné. In the pop up window that appears, click the word "edit" for editing in GitHub. 

![edit doc](./images/PR1.png)

Or you can click on the "Edit in GitHub" link in the upper right corner, and then click the pencil icon that appears in the top bar of the page contents to be edited.

![RTD io](./images/PR2.png)

3. One or the other of the options in Step 2 will create a new branch in YOUR repository where your edits will be saved. Make your edits to the file.

We are using markdown for the docs pages. The file have got the suffix ".md".The Markdown specification is not fixed and we use at the moment the myst_parser for our markdown files. Take care to use the correct syntax as [described below](make-a-PR-code-syntax).

![Edit branch](./images/PR3.png)

4. Pracujete v záložce "<>Edit file". Vyberte záložku "Preview changes" pro nový náhled, abyste zjistili, že vše, co jste změnili, je to, co jste chtěli. Pokud vidíte, že je potřeba další zlepšení, vraťte se zpět na záložku editace a pokračujte. 

![preview mode](./images/PR5.png)

5. Když jste dokončili své úpravy, přesuňte se do dolní části stránky. V obdélníku dole napište komentář do textového pole "Add an optional extended description...". Výchozí název má jméno souboru. Zkuste přidat větu s vysvětlením **důvodu** změny. Pomůže to při kontrole, o jakou změnu se pokoušíte.

![commit comments](./images/PR4.png)

6. Klikněte na zelené tlačítko "Propose file changes" nebo "Commit changes". Na stránce se pak objeví tlačítko "Create Pull Request" a znovu na další stránce klepněte na tlačítko "Create Pull Request".

![create pull request](./images/PR6.png)

7. Tím dokončíte žádost PR. GitHub přiděluje PR číslo, které se nachází za názvem a hashovou značkou. Return to this page to check for feedback (or, if you have GitHub notifications emailed to you, you will get emails notifying you of any activity on the PR). The edit will now be in a list of PR's that the team will review and potentially give feedback on before committing to the main documentation for AAPS! Pokud chcete zkontrolovat pokrok ve zpracování PR, můžete kliknout na symbol zvonku v horním pravém rohu svého účtu na GitHub a uvidíte všechny své PR.

![PR tracking](./images/PR7.png)

PS: Your fork and branch will still be sitting on your own personal GitHub account. After you get a notification that your PR has been merged, you can delete your branch if you are done with it (Step 8's notification area will provide a link to delete the branch once it has been closed or merged). For future edits, if you follow this procedure the edits will always start with an updated version of the AndroidAPSdocs repositories. If you choose to use another method to start a PR request (e.g., editing starting from your forked repo's master branch as the starting point), you will need to ensure your repo is up-to-date by performing a "compare" first and merging in any updates that have happened since you last updated your fork. Since people tend to forget to update their repos, we recommend using the PR process outlined above until you get familiar with performing "compares".

(make-a-PR-code-syntax)=

## Code syntax

We are using markdown for the docs pages. The files have got the suffix ".md".

Markdown is a very simple text formating language which separates text content from text formating.

The writer only e.g. marks a headline as level 1 headline and the markdown processor generate during processing the necessary HTML code to render the heading in HTML.

The idea behind this is that

* the writer should think about the text and not the formating first,
* the markdown text is open for exchange between different markdown tools instead of e.g. proprietray tools like Mircosoft Windows and
* you can generate several output formats from one markdown file.

Markdown is not a 100% fixed standard and we try to stay as near as possible to the standard to

* stay flexible to change markdown tools as needed or forced in the further innovation of markdown tools and markdown SaaS services and
* enable us to use a transaltion services to translate the english language in a target language like French or German because they can work on markdown but not complex formating codes because they can't separate there content from layout which might be fatal.

### Headlines

* Headline 1: `# headline`
* Headline 2: `## headline`
* Headline 3: `### headline`
* Headline 4: `#### headline`

We try to avoid further leveles of headlines.

### Text format

* bold: `**text**`
* italic: `*text*`

### ordered list

:::

1. first
2. second
3. third :::

4. first

5. second
6. third

### unordered list

:::

* one element
* another element
* and another element :::

* one element

* another element
* and another element

### multi level list

You can insert lists in lists by indenting the next level with 4 more spaces to the right than the one before.

:::

1. first
2. second
3. third 
    1. one element
    2. another element
    3. and another element
4. four
5. five
6. six :::

7. first

8. second
9. third 
    1. one element
    2. another element
    3. and another element
10. four
11. five
12. six

### Images

To include images you use this markdown syntax.

* images: `![alt text](../images/file.png)`

The type of image should be PNG or JPEG.

Images names should confirm to one of following naming rules. In the example I use png as suffix. In case you use JPEG please replace it with jpeg.

* `filename-image-xx.png` where xx is a unique double digit number for the images in this file.
* `filename-image-xx.png` where xx is a meaning full name for the author of the md file.

Images are located in the images folder for the english language and propagated to the other languages automatically by Crowdin. You have nothing to do for this!

We are not translating images at the moment.

(make-a-PR-image-size)= Use a reasonable size for the images which must be readable on PC, tablet and mobiles.

* Screenshots from web pages images should be up to **1050 pixels wide**.
* Diagramms of process flows should be up to **1050 pixels wide**.
* Screenshots from the app should be up to **300 to 400 pixels wide**.

### Links

#### External links

External links are links to external web sites.

* external link: `[alt text](www.url.tld)`

#### Internal links to the start of a md file

Internal links to pages are links to the start of a md file which is hosted on our own server.

* internal link to .md page: `[alt text](../folder/file.md)`

#### Internal links to named inline refernces

Internal links to named inline refernces are links to any point in a md file which is hosted on our own server and where a reference was set to link to.

Add a named reference at the location in the target md file you want to jump to.

`(name-of-my-md-file-this-is-my-fancy-named-reference)=`

The named reference must be unique in the whole AndroidAPSDocs md files and not only the own md file it resides in!

Therefore it is a good practice to start with the filename and then the reference name you select.

Use only lowercase letters and hyphenate words.

Then link this refernce in the text you are writing with the following kind of link.

* Internal links to named inline refernces: `[alt text](name-of-my-md-file-this-is-my-fancy-named-reference)`

### Notes, Warnings, Collapsing Notes

You can add notes and warning boxes to documentation.

Furthermore you can add collapsing notes for detailed information which would users who are not interested in the details quench to read the text at all. Please use these carefully as the documentation should be as easy to read as possible.

#### Notes

:::: :::{admonition} Note :class: note

This is a note. ::: ::::

:::{admonition} Note :class: note

This is a note. :::

#### Warnings

:::: :::{admonition} Warning :class: warning

This is a warning. ::: ::::

:::{admonition} Warning :class: warning

This is a warning. :::

#### Collapsing Notes

:::: :::{admonition} further detailed readings for interested readers :class: dropdown

This admonition has been collapsed, meaning you can add longer form content here, without it taking up too much space on the page. ::: ::::

:::{admonition} further detailed readings for interested readers :class: dropdown

This admonition has been collapsed, meaning you can add longer form content here, without it taking up too much space on the page. :::