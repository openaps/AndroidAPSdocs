(aaps-ci-option1-computer)=

# Option 1 · Ordinateur – Générer un nouveau keystore

```{note}
[Option 1](BrowserBuildO1.md) (générer un nouveau keystore) sur un **ordinateur** (Windows / Mac / Linux).
```

## 1. Télécharger le fichier de préparation

:::{include} BrowserBuildDownloadPrep.md
:::

## 2. Démarrer un serveur local et générer le keystore

Utiliser un ordinateur (Windows/Mac/Linux)

Ouvrez la page web [https://simplewebserver.org/download.html](https://simplewebserver.org/download.html)

Install Simple Web Server<br/> If you are a Windows or Mac user, you can install it from the Microsoft Store or the Mac App Store.<br/> If your browser asks whether to open the store app, allow it.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_store.png)<br/>

Exemple sur Mac :

- get → install → open (obtenir → installer → ouvrir)<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server.png)<br/><br/>

- Cliquez sur Get Started<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step1.png)<br/><br/>

- Cliquez sur New Server<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step2.png)<br/><br/>

- Dans Folder Path, sélectionnez le dossier qui contient aaps-ci-preparation.html, puis cliquez sur Create Server.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step3.png)<br/><br/>

- Si vous voyez cet écran, le serveur est démarré.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step4.png)<br/><br/>

- Ne fermez pas Simple Web Server. Please switch to your browser and open<br/> [http://127.0.0.1:8080/aaps-ci-preparation.html](http://127.0.0.1:8080/aaps-ci-preparation.html)<br/><br/>

- Pour les étapes suivantes, regardez la vidéo ci-dessous à partir de 1 minute 37 secondes.

  <!--crowdin: exclude-->
  <div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
    <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
      <iframe
        src="https://geo.dailymotion.com/player/x9rdrpy.html?video=x9rdrpy&startTime=97&loop=true&mute=true"
        loading="lazy"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
        frameborder="0"
        allowfullscreen>
      </iframe>
    </div>
  </div>

----

**Suite : [Étape 3 – Autoriser Google Drive](BrowserBuildGoogleDrive.md) →**
