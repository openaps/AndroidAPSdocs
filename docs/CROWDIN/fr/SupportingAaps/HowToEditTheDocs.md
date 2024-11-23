# Comment éditer la documentation

**Cette description est juste pour l'édition de la documentation en anglais. Toutes les nouvelles informations doivent être ajoutées d'abord en Anglais. Si vous voulez traduire la documentation dans d'autres langues (merci), utilisez [crowdin](https://crowdin.com/project/androidapsdocs).**

For hints how to format text (headline, bold...) and set links please see the ["code syntax"](#code-syntax) section of this page.

## General

For any questions, feedback or new ideas you can contact the documentation team via [discord](https://discord.gg/4fQUWHZ4Mw).

At some point it will be suggested that you make a pull request (PR), which is how your changes in the documentation are actually put onto the AAPS webpages, which are stored in GitHub. It's actually not too hard to do a PR and it is a great way to contribute. You are reading this documentation right now because people like you made PRs. Don't worry about making a mistake or somehow editing the wrong documents. Your changes are reviewed before they are merged into the "formal" AAPS documentation repository. You can't mess up the originals through any accidents in the process. The general process is:

- Apportez des modifications au code ou à la documentation en modifiant le contenu existant.
- Vérifiez deux fois que vos modifications vous semblent bonnes.
- Prenez quelques notes sur ce qui a changé afin que les personnes puissent comprendre les modifications.
- Créer un Pull Request, qui demande aux administrateurs d'utiliser vos modifications.
- Ils feront une vérification et soit (1) ils fusionneront vos modifications, (2) ils vous feront un retour au sujet de vos modifications, ou (3) ils commenceront un nouveau document avec vos modifications.

(Remarque : Si vous êtes un apprenant visuel, il y a une vidéo YouTube [ici](https://youtu.be/4b6tsL0_kzg) montrant le flux de travail PR.)

Pour notre exemple, nous allons faire une modification à AndroidAPSdocs. This can be done on any Windows PC, Mac, etc. (any computer with Internet access).

1. Go to <https://github.com/openaps/AndroidAPSdocs> and hit Fork in the upper right to make your own copy of the repository.

![Fork repo](../images/PR0.png)

2. Allez sur n'importe quelle page et accédez à la page que vous souhaitez modifier. You can click on the "Edit in GitHub" link in the upper right corner. This is only possible for English pages. 

![éditer un document](../images/PR1.png)

Or click the pencil icon that appears in the top bar of the page contents to be edited. You will need to be already logged into your Github account to do this (if you don't have one, they are straightforward to set up).

![RTD io](../images/PR2.png)

3. L'une ou l'autre des options de l'étape 2 créera une nouvelle branche dans VOTRE repository Github où vos modifications seront enregistrées. Effectuez vos modifications dans le fichier.

Nous utilisons markdown pour les pages de documentation. Le fichier a obtenu le suffixe ".md". La spécification Markdown n'est pas corrigée et nous utilisons pour le moment le myst_parser pour nos fichiers markdown. Take care to use the correct syntax as [described below](#code-syntax).

![Éditer la branche](../images/PR3.png)

4. Vous avez travaillé dans l'onglet "<>Edit file". Sélectionnez l'onglet "Preview changes" pour afficher une prévisualisation de votre page et vérifier que tous vos changements sont comme vous le vouliez. Si vous voyez que c'est perfectible, revenez à l'onglet d'édition pour faire vos améliorations. 

![mode de prévisualisation](../images/PR5.png)

5. Une fois vos modifications terminées, faites défiler jusqu'au bas de la page. Dans la zone du bas, indiquez vos commentaires dans le champ texte qui indique "Add an optional extended description...". Le titre par défaut est le nom de fichier. Essayez d'inclure une phrase expliquant la **raison** du la modification. Indiquer la raison permet d'aider les valideurs à comprendre ce que vous essayez de faire avec le PR.

![commit commentaires](../images/PR4.png)

6. Cliquez sur le bouton vert "Propose file changes" ou "Commit changes". Dans la page qui s'affiche, cliquez sur "Create Pull Request" et de nouveau dans la page suivante, cliquez sur "Create Pull Request".

![créer un pull request](../images/PR6.png)

7. Cela termine l'ouverture d'un Pull Request, PR. GitHub affecte au PR un numéro, situé après le titre et un caratère dièse. Retournez sur cette page pour vérifier si vous avez un retour (ou si vous avez des notifications GitHub envoyées par email, vous recevrez des emails vous indiquant toutes activités sur le PR). La modification sera maintenant dans une liste de PR que l'équipe de documentation va examiner et elle vous fera éventuellement des commentaires avant de l'intégrer dans la documentation principale d'AAPS ! Si vous voulez vérifier l'avancement du PR, vous pouvez cliquer sur le logo de la cloche dans le coin supérieur droit de votre compte GitHub pour voir toutes vos notifications.

![Suivi des PR](../images/PR7.png)

PS : Votre fork et votre branche seront toujours dans votre propre compte GitHub. Après avoir reçu une notification indiquant que votre PR avait été fusionné, vous pouvez supprimer votre branche si vous en avez terminé (la zone de notification de l'étape 8 fournira un lien pour supprimer la branche une fois qu'elle a été fermée ou fusionnée). Pour les modifications ultérieures, si vous suivez cette procédure, les éditions débuteront toujours par une version mise à jour des documents AndroidAPSdocs. Si vous choisissez d'utiliser une autre méthode pour faire une demande de PR (par ex. en partant de la branche master de dossier local comme point de départ), vous devez vous assurer que votre dossier fork est à jour en effectuant une "comparaison" en premier et en fusionnent dans toutes les mises à jour qui ont été faite depuis que vous avez mis à jour votre fork. Comme les gens ont tendance à oublier de mettre à jour leur fork, nous recommandons d'utiliser la procédure décrite ci-dessus pour faire vos PR jusqu'à ce que vous vous familiarisiez avec les exécutions des "comparaisons".

(edit-the-docs-code-syntax)=

## Syntaxe du Code

We are using markdown for the documentation pages. Les fichiers ont le suffixe « .md ».

Markdown est un langage de formatage de texte très simple qui sépare le contenu du texte du format.

The writer only e.g. marks a headline as level 1 headline and the markdown processor generates the necessary HTML code during processing to render the heading in HTML.

L'idée derrière est que

- the writer should think about the text and not the formatting first,
- the markdown text is open for exchange between different markdown tools instead of e.g. proprietary tools like Microsoft Windows and
- vous pouvez générer plusieurs formats de sortie à partir d'un fichier markdown.

Markdown is not a 100% fixed standard and we try to stay as near as possible to the standard, to

- rester flexible pour pouvoir changer d'outils de markdown si nécessaire ou contraints par les innovations des outils markdown et des services de markdown SaaS
- enable us to use translation services to translate the English language in a target language like French or German. They can work on markdown but not complex formatting codes, because they can't separate content from layout, which might be fatal.

### Titres

- Titre 1 : `# titre`
- Titre 2 : `## titre`
- Titre 3 : `### titre`
- Titre 4 : `#### headline`

We try to avoid further levels of headlines.

### Formatage du texte

- **bold**: `**text**`
- *italic*: `*text*`
- ***bold italic***: `***text***`

### Ordered list

    1. first
    1. second
    1. troisième
    

1. premier
2. deuxième
3. troisième

### Unordered list

    - one element
    - another element
    - and another element
    

- un élément
- un autre élément
- et un autre élément

### Multi level list

Vous pouvez insérer des "sous-listes" dans les listes en ajoutant 4 espaces de plus à droite que le niveau précédent.

    1. first
    1. second
    1. third
      1. one element
      1. another element
      1. and another element
    1. four
    1. five
    1. six
    

1. premier
2. deuxième
3. troisième 
    1. un élément
    2. un autre élément
    3. et un autre élément
4. quatre
5. cinq
6. six

### Images

Pour inclure des images, vous utilisez cette syntaxe de markdown.

- images : `![alt text](../images/file.png)`

Le type d'image doit être PNG ou JPEG.

Les noms d'images doivent respecter une des règles de nommage suivantes. Dans l'exemple j'utilise png comme extension. In case you use JPEG please use jpeg as a suffix instead.

- `nom-de-fichier-image-xx.png` où xx est un nombre unique à deux chiffres pour les images dans ce fichier.
- `nom-de-fichier-image-xx.png` où xx est un nom complet pour l'auteur du fichier md.

Les images sont situées dans le dossier images pour la langue anglaise et propagées automatiquement vers les autres langues par Crowdin. Vous n'avez rien à faire pour cela !

We are not translating images at the moment: images should contain the **minimum possible text** to allow accessibility to non-English readers.

(make-a-PR-image-size)= Utilisez une taille raisonnable pour les images qui doivent être lisibles sur PC, tablette et mobiles.

- Les captures d'écran de pages web doivent être au maximum de **1050 pixels de largeur**.
- Diagrams of process flows should be up to **1050 pixels wide**.
- Screenshots from the app should be up to **500 pixels wide**. Do not place them side to side if not necessary.

### Liens

#### Liens externes

Les liens externes sont des liens vers des sites Web externes.

- lien externe : `[alt text](www.url.tld)`

#### Liens internes au début d'un fichier md

Les liens internes vers les pages sont des liens vers le début d'un fichier md hébergé sur notre propre serveur.

- lien interne vers une page .md : `[texte alternatif](../folder/file.md)`

#### Liens internes vers une ligne spécifique d'un fichier

Les liens internes vers une ligne spécifique sont des liens vers n'importe quel point dans un fichier md qui est hébergé sur notre propre serveur et où une référence a été définie pour être liée.

Ajouter une référence nommée à l'emplacement dans le fichier md cible vers lequel vous voulez vous diriger.

`(nom-de-mon-fichier-ceci-est-ma-reference-specifique)=`

La référence nommée doit être unique dans tous les fichiers md de la documentation AndroidAPSDocs et pas seulement dans le fichier md dans lequel elle réside !

C'est donc une bonne pratique de commencer par le nom du fichier, puis le nom de référence que vous avez sélectionné.

Utilisez uniquement des lettres minuscules et séparez les mots par un trait d'union.

Ensuite, liez cette référence dans le texte que vous écrivez avec le type de lien suivant.

- Lien interne vers une référence nommée : `[texte alternatif](nom-de-mon-fichier-ceci-est-ma-reference-specifique)`

### Notes, Avertissements, Réduction des Notes

You can add notes and warning boxes to documentation.

Furthermore you can add collapsing notes for detailed information which would users who are not interested in the details quench to read the text at all. Please use these carefully as the documentation should be as easy to read as possible.

#### Notes

    ```{admonition} Note headline
    :class: note
    This is a note.
    ```
    

```{admonition} Note headline :class: note This is a note.

    <br />#### Warnings
    
    ````
    ```{admonition} Warning
    :class: warning
    This is a warning.
    

    ```{admonition} Warning headline 
    :class: warning
    This is a warning.
    ```
    
    #### Collapsing Notes
    
    

    {admonition} further detailed readings for interested readers
    :class: dropdown
    
    This admonition has been collapsed,
    meaning you can add longer form content here,
    without it taking up too much space on the page.
    

````

```{admonition} further detailed readings for interested readers :class: dropdown This admonition has been collapsed, meaning you can add longer form content here, without it taking up too much space on the page.

```

## Tables

Avoid using tables with long texts as the contents is difficult to set in Markdown, they will usually not fit in a mobile phone screen width, and probably won't display the same after translation.

## Style Guide

### Contents

1. English language writing tips

2. AAPS-specific writing notes

3. Useful references

### ![Image](../images/styleguide01.png) 1\. English language writing tips

#### Use language that is appropriate for the reader

Use plain English wherever possible. This helps non-native readers and also aids translation of AAPS documents into other languages. Write in a conversational way with the user, imagine you are sitting across the desk from the person you are writing for. Remember - most AAPS users do not have programming backgrounds. Diabetes itself also has a lot of jargon and abbreviations. Bear in mind that some people may be recently diagnosed, may not be as experienced as you with diabetes, or may have been given different diabetes training. If you use shorthand or an abbreviation, write it out in full the first time you use it, giving the abbreviation directly after it in brackets, like “super micro bolus (SMB)”. Also, link to the glossary. Technical terms which might not be familiar to the reader can be also be added in brackets.

Instead of: *“What causes high postprandial BG peaks in closed loop?"*

Use: *“What causes a high BG peak **after lunch** (postprandial) in closed loop?"*

##### Use plain words that everyone can understand

Find an A-Z of alternative words to make your writing easier to understand here:

<https://www.plainenglish.co.uk/the-a-z-of-alternative-words.html>

#### Privacy/licensing concerns:

Particularly if you record video or screenshots, make sure not to disclose your private details (API key, passwords). Make sure YouTube content is not openly listed, and needs a link from the documentation to view. Avoid drawing attention to infringed copyrighted materials (BYODA etc).

#### Keep sentences short, get to the point

- Clear writing should have an average sentence length of 15 to 20 words.

- This does not mean making every sentence the same length. Be punchy. Vary your writing by mixing short sentences (like the last one) with longer ones (like this one).

- Stick to one main idea in a sentence, plus perhaps one other related point.

- You may still find yourself writing the odd long sentence, especially when trying to explain a complicated point. But most long sentences can be broken up in some way.

- Remove weak words: “you can”, “there is/are/were”, “in order to”.

- Place keywords near the beginning of titles, sentences and paragraphs.

- Be visual! Wherever possible provide a brief diagram, screenshot or video.

#### Don't be afraid to give instructions

Commands are the fastest way to give instructions, but writers sometimes fear giving commands, writing “you should do this” instead of just “do this”. Perhaps people worry that commands sound too harsh. You can often solve this by putting the word 'please' in front. However, if something must be done, it is best not to say ‘please’ as it gives the reader the option to refuse.

Instead of: *“You should just think of it as a complete statement."*

Use: *“Think of it as a complete statement.”*

#### Mostly use active verbs, rather than passive verbs

Example of an **active verb**:

- *“The pump (subject) delivers (verb) the insulin (object).”*

“delivers” is an active verb here. The sentence says what is doing the delivering before it says what is being delivered.

Example of a **passive verb**:

- *“The insulin (subject) is delivered (verb) by the pump (object)”*

*“delivered”* a passive verb here. The subject and object are switched around, compared to the active verb sentence. We have had to make the sentence longer by introducing “is” and “by the”. Also consider starting with the active verb.

Instead of: *“You can connect your pump with the phone through the AAPS pump menu, and there are a number of pumps available for you to connect with.”*

Use: *“Connect your desired pump to the phone through the AAPS pump menu.”*

Passive verbs can cause problems:

- They can be confusing.

- They often make writing more long-winded.

- They make writing less lively.

##### Good uses of passives

There are times when it might be appropriate to use a passive.

- To make something less hostile - 'this bill has not been paid' (passive) is softer than 'you have not paid this bill' (active).

- To avoid taking the blame - 'a mistake was made' (passive) rather than 'You made a mistake' (active).

- When you don't know who or what the doer is - 'the England team has been picked'.

- If it simply sounds better.

#### Avoid nominalisations

A nominalisation is the name of something that isn't a physical object, such as a process, technique or emotion. Nominalizations are formed from verbs.

For example:

| Verb      | Nominalization |
| --------- | -------------- |
| complete  | completion     |
| introduce | introduction   |
| provide   | provision      |
| fail      | failure        |

They are often used **instead** of the verbs they come from, but they can sound as if nothing is actually happening. Too many of them can make writing very dull and heavy-going.

Instead of: *“The implementation of the method has been done by a team.”*

Use: *“A team has implemented the method.”*

#### Use lists where appropriate

Lists are excellent for splitting information up. There are two main types of list:

- A continuous sentence with several listed points picked out at the beginning, middle or end.

- Separate bullet points with an introductory statement.

In the bulleted list above, each point is a complete sentence so they each start with a capital letter and end with a full stop. Use bullet points rather than numbers or letters, as they draw your attention to each point without giving you extra information to take in.

#### Mythbusting

- You can start a sentence with **and, but, because, so or however**.

- You can split infinitives. So you can say **“to boldly go”**.

- You can end a sentence with a preposition. In fact, it is something **we should stand up for**.

- And **you** can use the same **word** twice in a sentence if **you** can't find a better **word**.

#### Optimizing writing style by purpose

To keep the documentation clear and short, we write different sections of the documentation in different styles.

An “explanation” style is used for the introduction, background and knowledge development sections.

A “How-to-guide” style (with minimal explanation) is used for building, configuring AAPS, and some of the troubleshooting sections.

A tutorial helps the pupil acquire basic competence. The user will **learn by doing**.

![Image](../images/styleguide02.png)

##### ![Image](../images/styleguide03.png) Tutorials (e.g. teaching a kid to beat egg whites)

- narrator directly talks to the reader: In this tutorial **you** will (we) could be used to convey “we are in this together” frame-of-thought in some rare cases

- Future Tense -> to show the final target

- Imperative Tense -> to do the tasks -> Concrete steps - avoid abstract concepts

- Past Tense -> to show accomplished tasks -> Quick and immediate visible results

- Minimum Explanations -> strict necessary to complete the task - **what and why**

- Ignore options/alternatives/…. No ambiguity

- Step Transitions: finish a step with a sentence leading to the next step as a logical progression flow. Example: *You have now installed the Let’s Encrypt client, but before obtaining certificates, you need to make sure that all required ports are open. To do this, you will update your firewall settings in the next step.*

- **Tutorial** Title (Level 1 heading)

- Introduction (no heading)

- Prerequisites (Level 2 heading)

- Steps:

- Step 1 — Doing the First Thing (Level 2 heading)

- Step 2 — Doing the Next Thing (Level 2 heading)

- Step n — Doing the Last Thing (Level 2 heading)

- Conclusion (Level 2 heading)
    
    - **The Language of Tutorials**
        
        *In this tutorial, you will…*
        
        Describe what the learner will accomplish (note - not: “you will learn…”).
        
        *First, do x. Now, do y. Now that you have done y, do z.*
        
        No room for ambiguity or doubt.
        
        *We must always do x before we do y because… (see Explanation for more details).*
        
        Provide minimal explanation of actions in the most basic language possible. Link to more detailed explanation.
        
        *The output should look something like this…*
        
        Give your learner clear expectations.
        
        *Notice that… Remember that…*
        
        Give your learner plenty of clues to help confirm they are on the right track and orient themselves.
        
        *You have built a secure, three-layer hylomorphic stasis engine…*
        
        Describe (and admire, in a mild way) what your learner has accomplished (note - not: “you have learned…”)

##### ![Image](../images/styleguide05.png) How-To Guides (e.g. a recipe)

A how-to guide’s purpose is to help the already-competent user perform a particular task correctly.

- HOW-to

- narrator directly talks to the reader: In this tutorial **you** will

- Future Tense -> to show the final target

- Conditional Imperative Tense -> to get X do y -> Concrete steps - avoid abstract concepts

- Minimum Explanations -> strict necessary to complete the task -> **what and why**

- Ignore options/alternatives/…. No ambiguity, but you can link to the reference entry or explanation entry

- **How-to**: Title (Level 1 heading)

- Introduction paragraph

- Optional Prerequisites (paragraph or Level 2 heading if more than 1)

- Steps:

- Step 1 — Doing the First Thing (Level 2 heading)

- Step 2 — Doing the Next Thing (Level 2 heading)

- Step n — Doing the Last Thing (Level 2 heading)

- Conclusion paragraph
    
    - **The Language of How-To Guides**
        
        *This guide shows you how to…*
        
        Describe clearly the problem or task that the guide shows the user how to solve.
        
        *If you want x, do y. To achieve w, do z.*
        
        Use conditional imperatives.
        
        *Refer to the x reference guide for a full list of options.*
        
        Don’t pollute your practical how-to guide with every possible thing the user might do related to x.

##### ![Image](../images/styleguide07.png) Explanation (e.g. Science behind why egg whites stiffen when you beat them)

An explanation clarifies, deepens and broadens the reader’s understanding of a subject.

- WHY

- Start with **About**

- Provide context, link ALL relevant references

- Discuss options/alternatives

- Don’t instruct or provide reference (link to them)

- State the unknown/moving targets etc…

- **About** Title (Level 1 heading)

- Introduction (no heading)

- Optional Prerequisites (Level 2 heading)

- Subtopic 1 (level 2 heading)

- Conclusion (Level 2 heading)
    
    - **The Language of Explanation**
    
    *The reason for x is because historically, y…*
    
    Explain.
    
    *W is better than z, because…*
    
    Offer judgements and even opinions where appropriate..
    
    *An x in system y is analogous to a w in system z. However…*
    
    Provide context that helps the reader.
    
    *Some users prefer w (because z). This can be a good approach, but…*
    
    Weigh up alternatives.
    
    *An x interacts with a y as follows:…*
    
    Unfold the machinery’s internal secrets, to help understand why something does what it does.

### 2\. AAPS-specific writing/updating notes

#### Author & Editor

For writing/updating the AAPS documentation, consider the process as consisting of two stages. These can be carried out by the same person at different points, or more than one person.

An **author (e.g. you!)** writes/edits a section of the documentation in a concise conversational tone, then passes it to the editor.

The **editor (e.g. a fellow AAPS user, or the person who receives the pull request)** reviews adherence to the style guide, edits the section for clarity and accessibility, removing as many words as possible (especially for tutorial/how-to sections). Reading the text out loud may help.

#### General AAPS points

- For glucose values, state both mg/dl and mmol/l in each occurrence (also consider this for screenshots, if possible).

- For consistency, use “AAPS” rather than “Android APS”.

- Clearly state the version of Android Studio/AAPS you are writing for, or that the screenshots are taken from.

### 3\. Useful References

<https://dev.readthedocs.io/en/latest/style-guide.html>

[Diátaxis (diataxis.fr)](https://diataxis.fr/)

[Technical Writer Style Guide Examples | Technical Writer HQ](https://technicalwriterhq.com/writing/technical-writing/technical-writer-style-guide/)

[DigitalOcean's Technical Writing Guidelines | DigitalOcean](https://www.digitalocean.com/community/tutorials/digitalocean-s-technical-writing-guidelines)

[Top 10 tips for Microsoft style and voice - Microsoft Style Guide | Microsoft Learn](https://learn.microsoft.com/en-us/style-guide/top-10-tips-style-voice?source=recommendations)

<https://www.plainenglish.co.uk/how-to-write-in-plain-english.html>

<https://developers.google.com/style>

<https://www.mongodb.com/docs/meta/style-guide/screenshots/screenshot-guidelines/>