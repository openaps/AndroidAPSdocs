(aaps-ci-option1-android)=

# Option 1 · Android – Generate a new keystore

```{note}
[Option 1](BrowserBuildO1.md) (generate a new keystore) on **Android** – the simplest, recommended choice.
```

## 1. Install File Manager Plus

```{warning}
**This step is essential – do not skip it, and do not use Chrome to open the preparation file.**

You must open `aaps-ci-preparation.html` **from inside File Manager Plus**. File Manager Plus starts a small local web server on your phone so the page can work. If you instead open the `.html` directly in Chrome, the page cannot start its server and the build will fail. This is the most common mistake.
```

:::{include} BrowserBuildFileManagerPlus.md
:::

## 2. Download the preparation file

:::{include} BrowserBuildDownloadPrep.md
:::

## 3. Generate the keystore and create the secret

````{tab-set}

```{tab-item} Wiki
### Open the CI preparation help file

With File Manager+, open the file `aaps-ci-preparation-html` you downloaded above.

Select Downloads.

![](../images/Building-the-App/CI/BrowserBuildStep07.png)

And search for this file, tap it to open it, open it with Chrome, tap Just once.

![](../images/Building-the-App/CI/BrowserBuildStep08.png)

It will open like this.

![](../images/Building-the-App/CI/BrowserBuildStep09.png)

Select Generate JKS. The field below will populate with characters.

![](../images/Building-the-App/CI/BrowserBuildStep09a.png)

Keep this tab open.

### Create a new secret in GitHub

Return to your GitHub browser tab: your own AndroidAPS copy.

1. Top right, tap the `...` button
2. Select Settings in the list

![](../images/Building-the-App/CI/BrowserBuildStep10.png)

Scroll down to Security and select Secrets and variables.

![](../images/Building-the-App/CI/BrowserBuildStep11.png)

Now select Actions

![](../images/Building-the-App/CI/BrowserBuildStep12.png)

Scroll down to Repository secrets and tap New repository secret

![](../images/Building-the-App/CI/BrowserBuildStep13.png)

You will see this dialog (scroll down if it's not visible).

![](../images/Building-the-App/CI/BrowserBuildStep14.png)

Leave the tab opened like this.

Switch to the File Explorer Plus tab.

Tap the top Copy button.

![](../images/Building-the-App/CI/BrowserBuildStep15.png)

Switch back to the GitHub tab.

In the Name field, paste the text you just copied. Use a long touch on the text box to show the paste menu.

![](../images/Building-the-App/CI/BrowserBuildStep16.png)

Switch to the File Explorer Plus tab.

Tap the second Copy button.

![](../images/Building-the-App/CI/BrowserBuildStep17.png)

Switch back to the GitHub tab.

1. In the Secret field, paste the text you just copied. Use a long touch on the text box to show the paste menu.

2. Tap Add secret.

![](../images/Building-the-App/CI/BrowserBuildStep18.png)

Check the secret has been added, scroll down to verify.

![](../images/Building-the-App/CI/BrowserBuildStep19.png)
```

```{tab-item} Video
(aaps-ci-option1-android-video)=
<!--crowdin: exclude-->
<div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
  <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
    <iframe
      src="https://www.dailymotion.com/embed/video/x9rdrpy?autoplay=0&queue-enable=false&loop=1&mute=1"
      loading="lazy"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>
</div>
```

````

----

**Next: [Step 3 – Authorize Google Drive](BrowserBuildGoogleDrive.md) →**
