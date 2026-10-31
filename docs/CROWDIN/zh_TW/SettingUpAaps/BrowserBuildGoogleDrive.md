(aaps-ci-google-drive-auth)=

# Browser build – Step 3: Authorize Google Drive

```{note}
This is **Step 3** of the [Browser build](BrowserBuild.md). First complete [Step 2 – Create your signing keystore](BrowserBuildKeystore.md).
```

```{warning}
No matter which of the prior sets of instructions you followed (Option 1 or Option 2), you MUST add the Google Drive authorization to successfully use the Browser Build.
```

Note: If you already followed this part in the video, you can now skip to [Step 4 – Build the APK](BrowserBuildAPK.md).

```{warning}
If the Google authorization does not start or the preparation page fails, close the preparation page, open `aaps-ci-preparation.html` again the same way as in Step 2, and start this step again. See [troubleshooting](#aaps-ci-preparation-web).
```

Return to the preparation page tab.

Scroll down to the Google Drive Auth section and tap Start Auth.

![](../images/Building-the-App/CI/BrowserBuildStep44.png)

Select your Google account.

![](../images/Building-the-App/CI/BrowserBuildGAUTH1.png)

Scroll down and accept the access. The web page needs it to obtain the Google Drive authentication key.

Tap Continue.

![](../images/Building-the-App/CI/BrowserBuildGAUTH2.png)

The `GDRIVE_OAUTH2` field will populate, tap the top Copy button.

![](../images/Building-the-App/CI/BrowserBuildGAUTH3.png)

切換回 GitHub 頁籤。

Scroll down to Repository secrets and tap New repository secret.

If you followed Option 1 you should see this:

![](../images/Building-the-App/CI/BrowserBuildGAUTH4.png)

If you followed Option 2 there will be more keys:

![](../images/Building-the-App/CI/BrowserBuildGAUTH4b.png)

在名稱欄位中，貼上您剛才複製的文字。在文字框上長按以顯示「貼上」選單。

![](../images/Building-the-App/CI/BrowserBuildGAUTH5.png)

Switch to the preparation page tab.

點擊第二個複製按鈕。

![](../images/Building-the-App/CI/BrowserBuildGAUTH6.png)

切換回 GitHub 頁籤。

1. 在「secret」」欄位中，貼上您剛才複製的文字。在文字框上長按以顯示「貼上」選單。

2. 點擊「Add secret」。

![](../images/Building-the-App/CI/BrowserBuildGAUTH7.png)

You should have either two (option 1) or five (option 2) secrets entries now.

![](../images/Building-the-App/CI/BrowserBuildGAUTH8.png)

GitHub will now be able to store the AAPS apk file in your Google Drive, once built.

----

**Next: [Step 4 – Build the APK](BrowserBuildAPK.md) →**
