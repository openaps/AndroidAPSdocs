(aaps-ci-option1-computer)=

# Opzione 1 · Computer – Genera un nuovo keystore

```{note}
[Opzione 1](BrowserBuildO1.md) (genera un nuovo keystore) su un **computer** (Windows / Mac / Linux).
```

## 1. Scarica il file di preparazione

:::{include} BrowserBuildDownloadPrep.md
:::

## 2. Avvia un server locale e genera il keystore

Usa un computer (Windows, Mac o Linux)

Apri la pagina web [https://simplewebserver.org/download.html](https://simplewebserver.org/download.html)

Installa Simple Web Server<br/> Se usi Windows o Mac, puoi installarlo da Microsoft Store o da Mac App Store.<br/> Se il browser ti chiede se aprire l'app dello store, consenti.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_store.png)<br/>

Esempio su Mac:

- get → install → open<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server.png)<br/><br/>

- Click Get Started<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step1.png)<br/><br/>

- Click New Server<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step2.png)<br/><br/>

- In Folder Path, select the folder where aaps-ci-preparation.html is located, and then click Create Server.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step3.png)<br/><br/>

- Seeing this screen means the server has been started.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step4.png)<br/><br/>

- Non chiudere Simple Web Server. Passa al browser e apri<br/> [http://127.0.0.1:8080/aaps-ci-preparation.html](http://127.0.0.1:8080/aaps-ci-preparation.html)<br/><br/>

- For the subsequent steps, please refer to the video below, starting from 1 minute 37 seconds.

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

**Avanti: [Passo 3 – Autorizza Google Drive](BrowserBuildGoogleDrive.md) →**
