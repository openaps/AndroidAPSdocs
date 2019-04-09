# Update auf eine neue Version oder branch

## Installiere git (falls du es noch nicht hast)

* Jede git Version sollte funktionieren. Beispiel: <https://git-scm.com/download/win>
* Notiere Dir den Installationspfad. Du brauchst diesen im nächsten Schritt.
    
    ![Git Installationspfad](../images/Update_GitPath.png)

* In Android Studio musst Du den Pfad zu git.exe hinterlegen: File - Settings
    
    ![Android Studio - Einstellungen öffnen](../images/Update_GitSettings1.png)

* Im nächsten Fenster: Version Control - Git

* Stelle sicher, dass die update method "Merge" ausgewählt ist.
    
    ![Android Studio - GIT Pfad](../images/Update_GitSettings2.png)

## Führe ein Update deiner lokalen Version durch

* Klicke: VCS->Git->Fetch
    
    ![Android Studio - GIT - Fetch](../images/Update_Fetch.png)

## Branch auswählen

* Falls du “branch” wechseln willst, wähle eine andere “branch” vom Reiter: master (aktuellste, getestete Version), oder andere (siehe weiter unten).
    
    ![](../images/UpdateAAPS1.png)

und anschließend "checkout". Verwende 'Checkout as New Branch' falls 'Checkout' nicht angezeigt wird.

![](../images/UpdateAAPS2.png)

## Branch-Update von Github

* Drücke Strg+T, wähle Merge method und drücke OK
    
    ![](../images/merge.png)

Auf dem Reiter siehst du eine grüne Nachricht “updated project”.

## APK erstellen & auf das Smartphone laden

Erstelle die signierte APK wie unter [AndroidAPS installieren - App erstellen (Generate signed APK)](../Installing-AndroidAPS/Building-APK#generate-signed-apk) beschrieben.

![Navigation signierte APK erstellen](../images/GenerateSignedAPK.PNG)

You can check the AAPS version on your phone by clicking the three dots menu on the top right and then about.

![AAPS version installed](../images/Update_VersionCheck.png)

## Problemlösungen

![phone app note installed](../images/Update_AppNotInstalled.png)

* Stelle sicher, dass Du die “app-full-release.apk” auf Dein Smartphone übertragen hast.
* Falls "App not installed" auf dem Smartphone angezeigt wird, gehe wie folgt vor: 
    1. [Exportiere die Einstellungen](../Usage/Objectives#export-import-settings) (in der AAPS Version, die bereits auf Deinem Smartphone installiert ist)
    2. Deintalliere AAPS auf Deinem Smartphone.
    3. Aktiviere den Flugmodus & schalte Bluetooth aus.
    4. Installiere die neue Version ("app-full-release.apk").
    5. [Importiere die Einstellungen](../Usage/Objectives#export-import-settings)
    6. Aktiviere Bluetooth wieder und schalte den Flugmodus aus.