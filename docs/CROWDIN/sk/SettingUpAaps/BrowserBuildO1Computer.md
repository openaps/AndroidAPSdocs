(aaps-ci-option1-computer)=

# Možnosť 1 · Počítač – Vygenerujte nové úložisko kľúčov

```{note}
[Možnosť 1](BrowserBuildO1.md) (vygenerovanie nového úložiska kľúčov) na **počítači** (Windows / Mac / Linux).
```

## 1. Stiahnite si prípravný súbor

:::{include} BrowserBuildDownloadPrep.md
:::

## 2. Spustite lokálny server a vygenerujte úložisko kľúčov

Použite počítač (Windows/Mac/Linux)

Otvorte webovú stránku [https://simplewebserver.org/download.html](https://simplewebserver.org/download.html)

Install Simple Web Server<br/> If you are a Windows or Mac user, you can install it from the Microsoft Store or the Mac App Store.<br/> If your browser asks whether to open the store app, allow it.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_store.png)<br/>

Príklad na Macu:

- get → install → open<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server.png)<br/><br/>

- Kliknite na Get Started<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step1.png)<br/><br/>

- Kliknite na New Server<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step2.png)<br/><br/>

- V poli Folder Path vyberte priečinok, v ktorom je súbor aaps-ci-preparation.html, a potom kliknite na Create Server.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step3.png)<br/><br/>

- Ak vidíte túto obrazovku, server je spustený.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step4.png)<br/><br/>

- Simple Web Server nezatvárajte. Please switch to your browser and open<br/> [http://127.0.0.1:8080/aaps-ci-preparation.html](http://127.0.0.1:8080/aaps-ci-preparation.html)<br/><br/>

- Ďalšie kroky nájdete vo videu nižšie od času 1 minúta 37 sekúnd.

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

**Ďalej: [Krok 3 – Autorizujte Disk Google](BrowserBuildGoogleDrive.md) →**
