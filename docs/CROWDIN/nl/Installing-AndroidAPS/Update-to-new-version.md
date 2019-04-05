# Bijwerken naar een nieuwe versie of branch

## Master branch

### Installeer Git (als je dat nog niet hebt)

* Elke versie van Git zou moeten werken. Bijvoorbeeld <https://git-scm.com/download/win>. Volg de instructies op die site om Git te installeren. Onthoud of noteer in welke map Git op jouw computer geïnstalleerd wordt.
* Ga naar Android Studio. Laat Android Studio weten waar op jouw computer het git.exe bestandje staat: File > Settings > Version Control > Git. Klik op de 3 stipjes rechts van het veld "Path to Git executable" en navigeer naar het git.exe bestandje op jouw computer. Klik OK.![](../images/git.png)

### Bijwerken van jouw lokale kopie

* Zorg dat je in het hoofdscherm van Android Studio bent. Klik op VCS > Git > Fetch

### Selecteer branch

* Als je de branch wilt wijzigen, selecteer dan een andere branch uit het menu rechtsonder: "master" (de meest actuele, stabiele versie) of een andere versie (zie verderop).

![](../images/UpdateAAPS1.png)

Kies vervolgens 'Checkout' (je kunt 'Checkout as New Branch' of 'Checkout As...' gebruiken als je hier geen 'Checkout' kunt kiezen).

![](../images/UpdateAAPS2.png)

### Bijwerken vd branch vanuit Github

* Druk op Ctrl+T, selecteer Merge method en druk op OK

![](../images/merge.png)

Onderin beeld zie je een bericht verschijnen over 'updated project' (bijgewerkt projekt) of 'all files are up-to-date' (alle bestanden zijn bijgewerkt).

### Genereer APK & upload naar telefoon

Bouw de ondertekende apk zoals beschreven in [Bouwen van de app (kopje 'Bouwen van de ondertekende APK')](../Installing-AndroidAPS/Building-APK.md). Volg de verdere instructies daar om de app op je telefoon te zetten.

![Navigatie Genereren ondertekende APK](../images/GenerateSignedAPK.PNG)