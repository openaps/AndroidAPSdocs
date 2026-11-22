(aaps-ci-option1-computer)=

# Mulighed 1 · Computer – Opret et nyt keystore

```{note}
[Mulighed 1](BrowserBuildO1.md) (opret et nyt keystore) på en **computer** (Windows / Mac / Linux).
```

## 1. Download forberedelsesfilen

:::{include} BrowserBuildDownloadPrep.md
:::

## 2. Start en lokal server, og opret keystoret

Brug en computer (Windows/Mac/Linux understøttes)

Åbn websiden [https://simplewebserver.org/download.html](https://simplewebserver.org/download.html)

Installer Simple Web Server<br/> Hvis du bruger Windows eller Mac, kan du installere den fra Microsoft Store eller Mac App Store.<br/> Hvis din browser spørger, om den skal åbne butiksappen, så tillad det.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_store.png)<br/>

Eksempel på Mac:

- get → install → open<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server.png)<br/><br/>

- Klik på Get Started<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step1.png)<br/><br/>

- Klik på New Server<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step2.png)<br/><br/>

- Vælg i Folder Path den mappe, hvor aaps-ci-preparation.html ligger, og klik derefter på Create Server.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step3.png)<br/><br/>

- Når du ser denne skærm, er serveren startet.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step4.png)<br/><br/>

- Luk ikke Simple Web Server. Skift til din browser, og åbn<br/> [http://127.0.0.1:8080/aaps-ci-preparation.html](http://127.0.0.1:8080/aaps-ci-preparation.html)<br/><br/>

- Se videoen nedenfor fra 1 minut og 37 sekunder for de næste trin.

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

**Næste: [Trin 3 – Giv adgang til Google Drive](BrowserBuildGoogleDrive.md) →**
