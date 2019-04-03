# Update auf eine neue Version oder branch

## Master branch

### Installiere git (falls du es noch nicht hast)

* Jede git Version sollte funktionieren. Beispiel: <https://git-scm.com/download/win>
* Wähle den Ordner, in dem sich git.exe befinde: File - Settings - Version Control - Git ![](../images/git.png)

### Führe ein Update deiner lokalen Version durch

* Klicke: VCS->Git->Fetch

### Wähle branch

* Falls du “branch” wechseln willst, wähle eine andere “branch” vom Reiter: master (aktuellste, getestete Version), oder andere (siehe weiter unten).

![](../images/UpdateAAPS1.png)

und anschließend "checkout". Verwende 'Checkout as New Branch' falls 'Checkout' nicht angezeigt wird.

![](../images/UpdateAAPS2.png)

### Branch-Update von Github

* Drücke Strg+T, wähle Merge method und drücke OK

![](../images/merge.png)

Auf dem Reiter siehst du eine grüne Nachricht “updated project”.

### APK erstellen & auf das Smartphone laden

Erstelle die signierte APK wie unter [AndroidAPS installieren - App erstellen (Generate signed APK)](../Installing-AndroidAPS/Building-APK.md) beschrieben.

![Navigation signierte APK erstellen](../images/GenerateSignedAPK.PNG)