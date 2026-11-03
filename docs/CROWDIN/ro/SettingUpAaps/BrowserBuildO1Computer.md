(aaps-ci-option1-computer)=

# Opțiunea 1 · Computer – Generați un keystore nou

```{note}
[Opțiunea 1](BrowserBuildO1.md) (generați un keystore nou) pe un **computer** (Windows / Mac / Linux).
```

## 1. Descărcați fișierul de pregătire

:::{include} BrowserBuildDownloadPrep.md
:::

## 2. Porniți un server local și generați keystore-ul

Folosiți un computer (Windows/Mac/Linux)

Deschideți pagina web [https://simplewebserver.org/download.html](https://simplewebserver.org/download.html)

Instalați Simple Web Server<br/> Dacă folosiți Windows sau Mac, îl puteți instala din Microsoft Store sau din Mac App Store.<br/> Dacă browserul vă întreabă dacă să deschidă aplicația magazinului, permiteți acest lucru.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_store.png)<br/>

Exemplu pe Mac:

- get → install → open<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server.png)<br/><br/>

- Click Get Started<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step1.png)<br/><br/>

- Click New Server<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step2.png)<br/><br/>

- In Folder Path, select the folder where aaps-ci-preparation.html is located, and then click Create Server.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step3.png)<br/><br/>

- Seeing this screen means the server has been started.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step4.png)<br/><br/>

- Nu închideți Simple Web Server. Treceți la browser și deschideți<br/> [http://127.0.0.1:8080/aaps-ci-preparation.html](http://127.0.0.1:8080/aaps-ci-preparation.html)<br/><br/>

- Pentru pașii următori, urmăriți videoclipul de mai jos, începând de la minutul 1:37.

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

**Next: [Step 3 – Authorize Google Drive](BrowserBuildGoogleDrive.md) →**
