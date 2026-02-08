### Öffne die CI preparation Hilfedatei

Öffne mit dem Dateimanager+ die Datei `aaps-ci-preparation-html`, die Du bereits heruntergeladen hast.

Wähle den Downloads-Ordner aus.

![](../images/Building-the-App/CI/BrowserBuildStep07.png)

Und suche nach der Datei, tippe auf den Namen, um sie zu öffnen, öffne sie mit Chrome, tippe nur einmal darauf.

![](../images/Building-the-App/CI/BrowserBuildStep08.png)

Es wird sich ungefähr so öffnen.

![](../images/Building-the-App/CI/BrowserBuildStep09.png)

Wähle „Generate JKS“. Das Feld unten wird mit Zeichen gefüllt.

![](../images/Building-the-App/CI/BrowserBuildStep09a.png)

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

![](../images/Building-the-App/CI/BrowserBuildStep15.png)

Wechsle zurück auf den GitHub-Tab.

Füge in das Namensfeld den gerade kopierten Text ein. Drücke lange auf die Textbox, um das „Einfügen-Menü“ anzuzeigen.

![](../images/Building-the-App/CI/BrowserBuildStep16.png)

Wechsle auf den Dateimanager+ Tab.

Tippe auf den zweiten Kopieren-Knopf.

![](../images/Building-the-App/CI/BrowserBuildStep17.png)

Wechsle zurück auf den GitHub-Tab.

1. Füge in das Secret-Feld den gerade kopierten Text ein. Drücke lange auf die Textbox, um das „Einfügen-Menü“ anzuzeigen.

2. Tippe auf „Add Secret“.

![](../images/Building-the-App/CI/BrowserBuildStep18.png)

Prüfe, ob das „Secret“ hinzugefügt wurde, und scrolle dazu nach unten.

![](../images/Building-the-App/CI/BrowserBuildStep19.png)
