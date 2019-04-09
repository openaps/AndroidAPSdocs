# Bijwerken naar een nieuwe versie of branch

## Install git (if you don't have it)

* Elke versie van Git zou moeten werken. Bijvoorbeeld <https://git-scm.com/download/win>. Volg de instructies op die site om Git te installeren.
* Make sure to note down the installation path. You will need it in the next step.
    
    ![Git installation path](../images/Update_GitPath.png)

* Let Studio know where is git.exe located: File - Settings
    
    ![Android Studio - open settings](../images/Update_GitSettings1.png)

* In the next window: Version Control - Git

* Make sure update method "Merge" is selected.
    
    ![Android Studio - GIT path](../images/Update_GitSettings2.png)

## Update your local copy

* Click: VCS->Git->Fetch
    
    ![Android Studio - GIT - Fetch](../images/Update_Fetch.png)

## Selecting branch

* If you want to change branch select another branch from tray: master (latest release) or another version (please see below)
    
    ![](../images/UpdateAAPS1.png)

and then checkout (You can use 'Checkout as New Branch' if 'Checkout' is not available.)

![](../images/UpdateAAPS2.png)

## Updating branch from Github

* Press Ctrl+T, select Merge method and press OK
    
    ![](../images/merge.png)

On the tray you'll see green message about updated project

## Generate APK & upload to phone

Generate signed apk as described in [Building APK (Generate signed APK)](../Installing-AndroidAPS/Building-APK#generate-signed-apk)

![Navigation Generate signed APK](../images/GenerateSignedAPK.PNG)

## Troubleshooting

![phone app note installed](../images/Update_AppNotInstalled.png)

* Make sure you have transferred the “app-full-release.apk” file to your phone.
* If "App not installed" is displayed on your phone follow these steps: 
    1. [Export settings](../Usage/Objectives#export-import-settings) (in AAPS version already installed on your phone)
    2. Uninstall AAPS on your phone.
    3. Enable airplane mode & turn off bluetooth.
    4. Install new version (“app-full-release.apk”)
    5. [Importeer instellingen](../Usage/Objectives#export-import-settings)
    6. Turn bluetooth back on and disable airplane mode