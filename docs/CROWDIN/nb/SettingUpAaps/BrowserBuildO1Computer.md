(aaps-ci-option1-computer)=

# Alternativ 1 · Datamaskin – Lag en ny keystore-fil

```{note}
[Alternativ 1](BrowserBuildO1.md) (lag en ny keystore-fil) på en **datamaskin** (Windows / Mac / Linux).
```

## 1. Last ned forberedelsesfilen

:::{include} BrowserBuildDownloadPrep.md
:::

## 2. Start en lokal server og lag keystore-filen

Bruk en datamaskin (støtter Windows/Mac/Linux)

Åpne nettsiden [https://simplewebserver.org/download.html](https://simplewebserver.org/download.html)

Installer Simple Web Server</br> Hvis du bruker Windows eller Mac, kan du installere den fra Microsoft Store eller Mac App Store.</br> Hvis nettleseren spør om den skal åpne butikk-appen, tillat det.</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_store.png)</br>

Eksempel på Mac:

- get → install → open</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server.png)</br></br>

- Klikk Get Started</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step1.png)</br></br>

- Klikk New Server</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step2.png)</br></br>

- Under Folder Path velger du mappen der aaps-ci-preparation.html ligger, og klikker deretter Create Server.</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step3.png)</br></br>

- Når du ser denne skjermen, er serveren startet.</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step4.png)</br></br>

- Ikke lukk Simple Web Server. Bytt til nettleseren din og åpne</br> [http://127.0.0.1:8080/aaps-ci-preparation.html](http://127.0.0.1:8080/aaps-ci-preparation.html)</br></br>

- For de neste stegene, se videoen nedenfor fra 1 minutt og 37 sekunder.

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

**Neste: [Steg 3 – Autoriser Google Drive](BrowserBuildGoogleDrive.md) →**
