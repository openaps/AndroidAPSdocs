# Update to a new version or branch

## Master branch

### Install git (if you don't have it)

* Any git version should work. For example <https://git-scm.com/download/win>
* Let Studio know where is git.exe located: File - Settings - Version Control - Git ![](../images/git.png)

### Update your local copy

* Click: VCS->Git->Fetch

### Selecting branch

* If you want to change branch select another branch from tray: master (latest release) or another version (please see below)

![](../images/UpdateAAPS1.png)

and then checkout (You can use 'Checkout as New Branch' if 'Checkout' is not available.)

![](../images/UpdateAAPS2.png)

### Updating branch from Github

* Press Ctrl+T, select Merge method and press OK

![](../images/merge.png)

On the tray you'll see green message about updated project

### Generate APK & upload to phone

Generate signed apk as described in [Building APK (Generate signed APK)](../Installing-AndroidAPS/Building-APK.md)

![Navigation Generate signed APK](../images/GenerateSignedAPK.PNG)