# Bijwerken naar een nieuwe versie of branch

<font color="#FF0000"><b>Important note: As of version 2.3 you have to use git to update. Updating via zip file does not work anymore.</font></b>

## Installeer Git (als je dat nog niet hebt)

* Elke versie van Git zou moeten werken. Bijvoorbeeld <https://git-scm.com/download/win>. Volg de instructies op die site om Git te installeren.
* Onthoud of noteer in welke map Git op jouw computer geïnstalleerd wordt. Dat heb je nodig in de volgende stap.
    
    ![Git installatie pad](../images/Update_GitPath.png)

* Laat Studio weten waar git.exe zich bevindt: File - Settings (Bestand - Instellingen)
    
    ![Android Studio - open instellingen](../images/Update_GitSettings1.png)

* In het volgende venster: Versie Control - Git

* Zorg ervoor dat de update methode "Merge" ("Samenvoegen") is geselecteerd.
    
    ![Android Studio - GIT pad](../images/Update_GitSettings2.png)

## Bijwerken van jouw lokale kopie

* Zorg dat je in het hoofdscherm van Android Studio bent. Klik op VCS > Git > Fetch
    
    ![Android Studio - GIT - Ophalen](../images/Update_Fetch.png)

## Selecteer branch

* Als je de branch wilt wijzigen, selecteer dan een andere branch uit het menu rechtsonder: "master" (de meest actuele, stabiele versie) of een andere versie (zie verderop).
    
    ![](../images/UpdateAAPS1.png)

and then checkout (You can use 'Checkout as New Branch' if 'Checkout' is not available.)

![](../images/UpdateAAPS2.png)

## Bijwerken vd branch vanuit Github

* Druk op Ctrl+T, selecteer Merge method en druk op OK
    
    ![](../images/merge.png)

On the tray you'll see green message about updated project

## Genereer APK & upload naar telefoon

Generate signed apk as described in [Building APK (Generate signed APK)](../Installing-AndroidAPS/Building-APK#generate-signed-apk)

![Navigation Generate signed APK](../images/GenerateSignedAPK.PNG)

You can check the AAPS version on your phone by clicking the three dots menu on the top right and then about.

![AAPS version installed](../images/Update_VersionCheck.png)

## Problemen oplossen

![phone app note installed](../images/Update_AppNotInstalled.png)

* Zorg ervoor dat je het bestand "app-full-release.apk" naar jouw telefoon hebt overgebracht.
* Als "App niet geïnstalleerd" wordt weergegeven op jouw telefoon volg dan deze stappen: 
    1. Ga naar de huidige AndroidAPS app op jouw telefoon en [Exporteer instellingen](../Usage/Objectives#export-import-settings)
    2. Verwijder de AndroidAPS app van jouw telefoon.
    3. Schakel vliegtuigmodus in & schakel bluetooth uit.
    4. Installeer nieuwe versie ("app-full-release.apk”)
    5. [Importeer instellingen](../Usage/Objectives#export-import-settings)
    6. Zet bluetooth weer aan en schakel de vliegtuigmodus uit