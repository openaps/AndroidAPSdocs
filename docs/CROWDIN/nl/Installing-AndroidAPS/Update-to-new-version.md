# Bijwerken naar een nieuwe versie of branch

## Master branch

### Install git (if you don't have it)

* Elke versie van Git zou moeten werken. Bijvoorbeeld <https://git-scm.com/download/win>. Volg de instructies op die site om Git te installeren. Onthoud of noteer in welke map Git op jouw computer geïnstalleerd wordt.
* Ga naar Android Studio. Laat Android Studio weten waar op jouw computer het git.exe bestandje staat: File > Settings > Version Control > Git. Klik op de 3 stipjes rechts van het veld "Path to Git executable" en navigeer naar het git.exe bestandje op jouw computer. Klik OK.![](../images/git.png)

### Update your local copy

* Zorg dat je in het hoofdscherm van Android Studio bent. Klik op VCS > Git > Fetch

### Selecting branch

* Als je de branch wilt wijzigen, selecteer dan een andere branch uit het menu rechtsonder: "master" (de meest actuele, stabiele versie) of een andere versie (zie verderop).

![](../images/UpdateAAPS1.png)

and then checkout (You can use 'Checkout as New Branch' if 'Checkout' is not available.)

![](../images/UpdateAAPS2.png)

### Updating branch from Github

* Druk op Ctrl+T, selecteer Merge method en druk op OK

![](../images/merge.png)

On the tray you'll see green message about updated project

### Generate APK & upload to phone

Generate signed apk as described in [Building APK (Generate signed APK)](../Installing-AndroidAPS/Building-APK.md)

![Navigation Generate signed APK](../images/GenerateSignedAPK.PNG)