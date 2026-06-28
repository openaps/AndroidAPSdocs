(aaps-ci-option2-android)=

# Option 2 · Android – Upload your existing keystore

```{note}
[Option 2](BrowserBuildO2.md) (upload an existing keystore) on **Android** – the recommended choice.
```

## 1. Install File Manager Plus

```{warning}
**This step is essential – do not skip it, and do not use Chrome to open the preparation file.**

You must open `aaps-ci-preparation.html` **from inside File Manager Plus**. File Manager Plus starts a small local web server on your phone so the page can work, and it is also used to reach your keystore on Google Drive. If you instead open the `.html` directly in Chrome, the page cannot start its server and the build will fail. This is the most common mistake.
```

:::{include} BrowserBuildFileManagerPlus.md
:::

## 2. Download the preparation file

:::{include} BrowserBuildDownloadPrep.md
:::

## 3. Upload the keystore and create the secrets

````{tab-set}

```{tab-item} Wiki
### Copy your Android Studio key in your Google Cloud drive.

On your computer, search for the keystore file you used to build AAPS. It is named with the extension `.jks`.

Drag it into [your Google Drive](https://drive.google.com/drive/my-drive), either inside the browser or your mapped Google Drive.

![](../images/Building-the-App/CI/BrowserBuildStep20.png)

Open File Manager Plus and select Cloud.

![](../images/Building-the-App/CI/BrowserBuildStep21.png)

Add a Cloud location.

![](../images/Building-the-App/CI/BrowserBuildStep24.png)

Choose Google Drive.

![](../images/Building-the-App/CI/BrowserBuildStep22.png)

Select your Google Drive account email. Tap OK.

![](../images/Building-the-App/CI/BrowserBuildStep23.png)

Your Google Cloud drive should display its contents. Now return to the app home page.

![](../images/Building-the-App/CI/BrowserBuildStep25.png)

### Open the CI preparation help file

Open the file `aaps-ci-preparation-html` you downloaded above.

Select Downloads.

![](../images/Building-the-App/CI/BrowserBuildStep07.png)

And search for this file, tap it to open it, open it with Chrome, tap Just once.

![](../images/Building-the-App/CI/BrowserBuildStep08.png)

It will open like this.

![](../images/Building-the-App/CI/BrowserBuildStep09.png)

Scroll down to Option 2: Upload Existing JKS. Expand the interface.

![](../images/Building-the-App/CI/BrowserBuildStep26.png)

Select Choose File.

![](../images/Building-the-App/CI/BrowserBuildStep27.png)

Pick your KeyStore file from your Google Drive files.

![](../images/Building-the-App/CI/BrowserBuildStep28.png)

The field below will populate.

![](../images/Building-the-App/CI/BrowserBuildStep29.png)

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

![](../images/Building-the-App/CI/BrowserBuildStep30.png)

Switch back to the GitHub tab.

In the Name field, paste the text you just copied. Use a long touch on the text box to show the paste menu.

![](../images/Building-the-App/CI/BrowserBuildStep31.png)

Switch to the File Explorer Plus tab.

Tap the second Copy button.

![](../images/Building-the-App/CI/BrowserBuildStep32.png)

Switch back to the GitHub tab.

1. In the Secret field, paste the text you just copied. Use a long touch on the text box to show the paste menu.

2. Tap Add secret.

![](../images/Building-the-App/CI/BrowserBuildStep33.png)

Check the secret has been added, scroll down to verify.

![](../images/Building-the-App/CI/BrowserBuildStep34.png)

Add a new secret: tap the New repository secret button.

![](../images/Building-the-App/CI/BrowserBuildStep35.png)

![](../images/Building-the-App/CI/BrowserBuildStep14.png)



Switch to the File Explorer Plus tab.

Tap the top Copy button to copy `KEYSTORE_PASSWORD`.

Note: if you're comfortable with typing the key names directly in GitHub you don't need to Copy/Paste. If you're not sure you will type exactly the same key name, continue like this. Note that you shouldn't leave `:` at the end of the key name.

![](../images/Building-the-App/CI/BrowserBuildStep36.png)

Switch back to the GitHub tab.

1.  Paste the new key name.
2. In the Secret entry, put your KeyStore password (don't leave it empty).
3. Tap Add secret.

![](../images/Building-the-App/CI/BrowserBuildStep37.png)

Check the secret has been added, scroll down to verify.

![](../images/Building-the-App/CI/BrowserBuildStep38.png)

Tap the New repository secret button shown above.

![](../images/Building-the-App/CI/BrowserBuildStep14.png)



Switch to the File Explorer Plus tab.

Tap the top Copy button to copy `KEYSTORE_ALIAS`.

![](../images/Building-the-App/CI/BrowserBuildStep39.png)

Switch back to the GitHub tab.

1.  Paste the new key name.
2. In the Secret entry, put your KeyStore Alias (usually it's `key0`, lowercase with the number zero, not the letter O). Don't let Android autocorrect it.
3. Tap Add secret.

![](../images/Building-the-App/CI/BrowserBuildStep40.png)

Check the secret has been added, scroll down to verify.

![](../images/Building-the-App/CI/BrowserBuildStep41.png)

Tap the New repository secret button shown above.

![](../images/Building-the-App/CI/BrowserBuildStep14.png)



Switch to the File Explorer Plus tab.

Tap the top Copy button to copy `KEY_PASSWORD`.

![](../images/Building-the-App/CI/BrowserBuildStep42.png)

Switch back to the GitHub tab.

1.  Paste the new key name.
2. In the Secret entry, put your Key password (don't leave it empty). It is usually the same than your KeyStore password.
3. Tap Add secret.

![](../images/Building-the-App/CI/BrowserBuildStep43.png)

Check the secret has been added, scroll down to verify.
```

```{tab-item} Video
(aaps-ci-option2-android-video)=
<!--crowdin: exclude-->
<div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
  <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
    <iframe
      src="https://www.dailymotion.com/embed/video/x9rdvt0?autoplay=0&queue-enable=false&loop=1&mute=1"
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
