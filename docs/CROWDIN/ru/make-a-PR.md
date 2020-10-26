# Making your first PR (pull request)

**This description is just for editing the English documentation. All new information must be added in English first. If you want to translate to other languages (thank you), please use [crowdin](https://crowdin.com/project/androidapsdocs).**

For hints how to format text (headline, bold...) and set links please see the ["code syntax"](./make-a-PR#code-syntax) section of this page.

## Общие настройки

For any questions, feedback or new ideas you can contact the documentation team via [gitter](https://gitter.im/AndroidAPSwiki/Lobby). Doing a PR isn't difficult, but we can help you editing the documentation.

At some point it will be suggested that you make a PR. PR is short for pull request, and it is a way of adding or editing information stored in GitHub. It's actually not too hard to do one and it is a great way to contribute. This documentation is here because people like you made PRs. Don't worry about making a mistake or somehow editing the wrong documents. There is always a review process before changes are merged into the "formal" AndroidAPS documentation repository. You can't mess up the originals through any accidents in the PR process. The general process is:

* Make edits and improvements to code or documentation by editing the existing content.
* Double-check that your edits look good to you.
* Make a few notes of what's changed so people may understand the edits.
* Create a pull request, which asks the administrators to use your changes.
* They will do a review and either (1)merge your changes, (2)comment back to you about your changes, or (3)start a new document with your changes.

(Side note: If you are a visual learner, there is a YouTube video [here](https://youtu.be/4b6tsL0_kzg) showing the PR workflow.)

For our example we are going to make an edit to AndroidAPSdocs. This does NOT need to be done in the linux environment on your rig. This can be done on any Windows PC, Mac, etc. (any computer with Internet access).

1. Go to https://github.com/openaps/AndroidAPSdocs and hit Fork in the upper right to make your own copy of the repository.

![Fork repo](./images/PR0.png)

2. Go to http://androidaps.readthedocs.io/en/latest/Getting-Started/Safety-first.html or similar and navigate to the page you want to edit. Click on the black box at bottom left of page with the green word "v: latest" or similar. In the pop up window that appears, click the word "edit" for editing in GitHub. 

![edit doc](./images/PR1.png)

     Or you can click on the "Edit in Github" link in the upper right corner, and then click the pencil icon that appears in the top bar of the page contents to be edited.
    

![RTD io](./images/PR2.png)

3. One or the other of the options in Step 2 will create a new branch in YOUR repository where your edits will be saved. Make your edits to the file.
  
  Be aware that we use different file extensions: .rst (ReStructuredText) and .md (Markdown) and the syntax varies a little bit between the two. Take care to use the correct syntax as [described below](./make-a-PR#code-syntax).

![Edit branch](./images/PR3.png)

4. You have been working in the "<>Edit file" tab. Select the "Preview changes" tab for a fresh look to make sure everything you changed looks like you meant it to (typpos sic.). If you see a needed improvement, go back to the edit tab to make more improvements. 

![preview mode](./images/PR5.png)

5. When you have finished your edits, scroll to the bottom of the page. In the box at the bottom, provide your comments in the text field that reads, "Add an optional extended description...". The default title has the file name. Try to include a sentence explaining the **reason** for the change. Relating the reason helps reviewers understand what you are attempting to do with the PR.

![commit comments](./images/PR4.png)

6. Click the green "Propose file changes" or "Commit changes" button. In the page that appears click "Create Pull Request" and again in the next page click "Create Pull Request".

![create pull request](./images/PR6.png)

7. That completes the opening of a pull request, PR. GitHub assigns the PR a number, located after the title and a hash mark. Return to this page to check for feedback (or, if you have Github notifications emailed to you, you will get emails notifying you of any activity on the PR). The edit will now be in a list of PR's that the team will review and potentially give feedback on before committing to the main documentation for AndroidAPS! If you want to check on the progress of the PR, you can click on the bell logo in the upper right corner of your GitHub account and see all your PRs.

![PR tracking](./images/PR7.png)

PS: Your fork and branch will still be sitting on your own personal GitHub account. After you get a notification that your PR has been merged, you can delete your branch if you are done with it (Step 8's notification area will provide a link to delete the branch once it has been closed or merged). For future edits, if you follow this procedure the edits will always start with an updated version of the AndroidAPSdocs repositories. If you choose to use another method to start a PR request (e.g., editing starting from your forked repo's master branch as the starting point), you will need to ensure your repo is up-to-date by performing a "compare" first and merging in any updates that have happened since you last updated your fork. Since people tend to forget to update their repos, we recommend using the PR process outlined above until you get familiar with performing "compares".

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

#### In files with **.md** ending:

* `[text](../Usage/Test.md)` will set an internal hyperlink one directory up from where you are and then into the subdirectory /Usage. Ending of the target file must be .md or .rst (not .html)
* `[text](./Usage/Test.md)` will set an internal hyperlink from where you are into /Usage. Ending of the target file must be .md or .rst (not .html)
* To set the link to an **anchor** (i.e. a headline) you have to omit the file extension 
  * `[text](../Usage/Test#anchor)` instead of `[text](../Usage/Test.md#anchor)`

#### In files with **.rst** ending:

* `` `Text <../Usage/Test.hmtl>`_ `` will set a hyperlink one directory up from where you are and then into the subdirectory /Usage. Ending of the target file must be .html.
  
  Except you are in a toctree. Then you have to write it like this: `Text <../Usage/Test.md>` with .md or .rst (not .html).

* `Text <./Usage/Test.md>` will set a hyperlink from where you are into /Usage.

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

7. After adding images or making adjustments, you can submit a PR to the master branch of AndroidAPSdocs.