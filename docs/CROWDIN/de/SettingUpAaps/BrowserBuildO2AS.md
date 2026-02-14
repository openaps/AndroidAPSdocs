### Kopiere Deinen Android Studio Schlüssel in Dein Google Cloud Laufwerk.

Suche auf Deinem Computer nach der Keystore-Datei, die Du zum Erstellen von AAPS verwendet hast. Du kannst sie an der Dateiendung `.jks` erkennen.

Zieh es in [Dein Google Drive](https://drive.google.com/drive/my-drive), entweder im Browser oder in Deinem verknüpften Google Drive.

![](../images/Building-the-App/CI/BrowserBuildStep20.png)

Öffne den Dateimanager+ und wähle die Cloud aus.

![](../images/Building-the-App/CI/BrowserBuildStep21.png)

Füge einen Cloud-Pfad hinzu.

![](../images/Building-the-App/CI/BrowserBuildStep24.png)

Wähle Google Drive aus.

![](../images/Building-the-App/CI/BrowserBuildStep22.png)

Wähle die E-Mail Deines Google Drive-Kontos. Tippe auf OK.

![](../images/Building-the-App/CI/BrowserBuildStep23.png)

Du solltest die Inhalte Deines Google Cloud-Laufwerk sehen. Gehe jetzt zur App-Startseite zurück.

![](../images/Building-the-App/CI/BrowserBuildStep25.png)

### Öffne die CI preparation Hilfedatei

Öffne die von Dir heruntergeladene Datei `aaps-ci-preparation-html`.

Wähle den Downloads-Ordner aus.

![](../images/Building-the-App/CI/BrowserBuildStep07.png)

Und suche nach der Datei, tippe auf den Namen, um sie zu öffnen, öffne sie mit Chrome, tippe nur einmal darauf.

![](../images/Building-the-App/CI/BrowserBuildStep08.png)

Es wird sich ungefähr so öffnen.

![](../images/Building-the-App/CI/BrowserBuildStep09.png)

Scroll nach unten zur Option 2: Upload existing JKS. Klappe die Oberfläche auf.

![](../images/Building-the-App/CI/BrowserBuildStep26.png)

Wähle „Choose File“.

![](../images/Building-the-App/CI/BrowserBuildStep27.png)

Wähle Deine Keystore-Datei aus Deinen Google Drive-Dateien aus.

![](../images/Building-the-App/CI/BrowserBuildStep28.png)

Das Feld unten wird ausgefüllt.

![](../images/Building-the-App/CI/BrowserBuildStep29.png)

Lass diesen Tab geöffnet.

### Erstelle ein neues Geheimnis (New Secret) in GitHub

Gehe zurück auf den GitHub-Browser-Tab: Deiner eigenen AndroidAPS-Kopie.

1. Oben rechts, tippe auf die `...`-Schaltfläche
2. Wähle aus der Liste die Einstellungen aus

![](../images/Building-the-App/CI/BrowserBuildStep10.png)

Scrolle zum Abschnitt „Security“ nach unten und wähle „Secrets and Variables“ aus.

![](../images/Building-the-App/CI/BrowserBuildStep11.png)

Wähle jetzt „Actions“ aus

![](../images/Building-the-App/CI/BrowserBuildStep12.png)

Scrolle zu den „Repository Secrets“ herunter und tippe auf „New Repository Secret“

![](../images/Building-the-App/CI/BrowserBuildStep13.png)

Du wirst den folgenden Dialog sehen. (Sollte er nicht zu sehen sein, scrolle nach unten).

![](../images/Building-the-App/CI/BrowserBuildStep14.png)

Lass den Tab, so wie hier gezeigt, geöffnet.

Wechsle auf den Dateimanager+ Tab.

Tippen auf die oberste Kopieren-Schaltfläche.

![](../images/Building-the-App/CI/BrowserBuildStep30.png)

Wechsle zurück auf den GitHub-Tab.

Füge in das Namensfeld den gerade kopierten Text ein. Drücke lange auf die Textbox, um das „Einfügen-Menü“ anzuzeigen.

![](../images/Building-the-App/CI/BrowserBuildStep31.png)

Wechsle auf den Dateimanager+ Tab.

Tippe auf den zweiten Kopieren-Knopf.

![](../images/Building-the-App/CI/BrowserBuildStep32.png)

Wechsle zurück auf den GitHub-Tab.

1. Füge in das Secret-Feld den gerade kopierten Text ein. Drücke lange auf die Textbox, um das „Einfügen-Menü“ anzuzeigen.

2. Tippe auf „Add Secret“.

![](../images/Building-the-App/CI/BrowserBuildStep33.png)

Prüfe, ob das „Secret“ hinzugefügt wurde, und scrolle dazu nach unten.

![](../images/Building-the-App/CI/BrowserBuildStep34.png)

Neues Secret hinzufügen: Tippe auf „New Repository Secret“.

![](../images/Building-the-App/CI/BrowserBuildStep35.png)

![](../images/Building-the-App/CI/BrowserBuildStep14.png)



Wechsle auf den Dateimanager+ Tab.

Tippe auf die oberste Kopieren-Schaltfläche, um das `KEYSTORE_PASSWORD` zu kopieren.

Hinweis: Wenn Du sicher bist, kannst Du die Schlüsselnamen direkt in GitHub eingeben und musst sie nicht kopieren/einfügen. Falls Du nicht sicher sein solltest, den Schlüsselnamen richtig einzugeben, mache wie folgt weiter. Beachte bitte, dass am Ende des Schlüsselnamens kein `:` stehen sollte.

![](../images/Building-the-App/CI/BrowserBuildStep36.png)

Wechsle zurück auf den GitHub-Tab.

1.  Füge den neuen Schlüsselnamen ein.
2. Gib Dein Keystore-Passwort in das „Secret“-Feld ein und lasse es nicht leer.
3. Tippe auf „Add Secret“.

![](../images/Building-the-App/CI/BrowserBuildStep37.png)

Prüfe, ob das „Secret“ hinzugefügt wurde, und scrolle dazu nach unten.

![](../images/Building-the-App/CI/BrowserBuildStep38.png)

Tippe auf die „New Repository Secret“-Schaltfläche, die oben gezeigt wird.

![](../images/Building-the-App/CI/BrowserBuildStep14.png)



Wechsle auf den Dateimanager+ Tab.

Tippe auf die Kopieren-Schaltfläche, um den `KEYSTORE_ALIAS` zu kopieren.

![](../images/Building-the-App/CI/BrowserBuildStep39.png)

Wechsle zurück auf den GitHub-Tab.

1.  Füge den neuen Schlüsselnamen ein.
2. Gib Deinen Keystore-Alias (normalerweise ist er `key0`, kleingeschrieben und mit einer Null und nicht dem Buchstaben O) in das „Secret“-Feld ein. Achte darauf, dass die Android-Autokorrektur nichts verändert.
3. Tippe auf „Add Secret“.

![](../images/Building-the-App/CI/BrowserBuildStep40.png)

Prüfe, ob das „Secret“ hinzugefügt wurde, und scrolle dazu nach unten.

![](../images/Building-the-App/CI/BrowserBuildStep41.png)

Tippe auf die „New Repository Secret“-Schaltfläche, die oben gezeigt wird.

![](../images/Building-the-App/CI/BrowserBuildStep14.png)



Wechsle auf den Dateimanager+ Tab.

Tippe auf die Kopieren-Schaltfläche, um das `KEY_PASSWORD` zu kopieren.

![](../images/Building-the-App/CI/BrowserBuildStep42.png)

Wechsle zurück auf den GitHub-Tab.

1.  Füge den neuen Schlüsselnamen ein.
2. Gib Dein Key-Passwort in das „Secret“-Feld ein und lasse es nicht leer. Es ist in der Regel das gleiche wie das Keystore-Passwort.
3. Tippe auf „Add Secret“.

![](../images/Building-the-App/CI/BrowserBuildStep43.png)

Prüfe, ob das „Secret“ hinzugefügt wurde, und scrolle dazu nach unten.
