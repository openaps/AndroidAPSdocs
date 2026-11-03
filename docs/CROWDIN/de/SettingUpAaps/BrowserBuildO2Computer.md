(aaps-ci-option2-computer)=

# Option 2 · Computer – Deinen vorhandenen Keystore hochladen

```{note}
[Option 2](BrowserBuildO2.md) (einen vorhandenen Keystore hochladen) auf einem **Computer** (Windows / Mac / Linux).
```

## 1. Die Vorbereitungsdatei herunterladen

:::{include} BrowserBuildDownloadPrep.md
:::

## 2. Einen lokalen Server starten und den Keystore hochladen

Nutze einen PC/Computer (Windows/Mac/Linux)

<!--crowdin: exclude-->
<div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
  <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
    <iframe
      src="https://geo.dailymotion.com/player/x9rdyc6.html?video=x9rdyc6&loop=true&mute=true"
      loading="lazy"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>
</div>

Simple Web Server installieren<br/><br/> Als Windows- oder Mac-Anwender kannst Du ihn aus dem Microsoft Store oder dem Mac App Store installieren. Fragt Dein Browser, ob die Store-App geöffnet werden soll, erlaube es.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_store.png)<br/><br/>

Beispiel anhand eines Mac:

- get → install → öffnen<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server.png)<br/><br/>

- Klicke auf „Starten“<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step1.png)<br/><br/>

- Klicke auf „New Server“<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step2.png)<br/><br/>

- Trage in Ordnerpfad den Ordner ein, indem sich „aaps-ci-preparation.html“ befindet, und klicke dann auf „Server erstellen“.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step3.png)<br/><br/>

- Wenn dieser Bildschirm zu sehen ist, heißt das, dass der Server gestartet wurde.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step4.png)<br/><br/>

- Schließe Simple Web Server nicht. Bitte wechsel zu Deinem Browser und öffne<br/><br/> [http://127.0.0.1:8080/aaps-ci-preparation.html](http://127.0.0.1:8080/aaps-ci-preparation.html)<br/><br/>

- Schau Dir für die folgenden Schritte das Video unten ab Minute 2:18 an.<br/><br/>
  <!--crowdin: exclude-->
  <div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
    <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
      <iframe
        src="https://geo.dailymotion.com/player/x9rdvt0.html?video=x9rdvt0&startTime=138&loop=true&mute=true"
        loading="lazy"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
        frameborder="0"
        allowfullscreen>
      </iframe>
    </div>
  </div>

----

**Weiter: [Schritt 3 – Google Drive autorisieren](BrowserBuildGoogleDrive.md) →**
