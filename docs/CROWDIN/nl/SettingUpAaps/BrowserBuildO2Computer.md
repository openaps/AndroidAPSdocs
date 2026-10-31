(aaps-ci-option2-computer)=

# Optie 2 · Computer – Je bestaande keystore uploaden

```{note}
[Optie 2](BrowserBuildO2.md) (een bestaande keystore uploaden) op een **computer** (Windows / Mac / Linux).
```

## 1. Het voorbereidingsbestand downloaden

:::{include} BrowserBuildDownloadPrep.md
:::

## 2. Een lokale server starten en de keystore uploaden

Een computer gebruiken (Windows/Mac/Linux)

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

Installeer Simple Web Server</br></br> Gebruik je Windows of een Mac, dan kun je het installeren via de Microsoft Store of de Mac App Store. Vraagt je browser of de store-app geopend mag worden, sta dit dan toe.</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_store.png)</br></br>

Voorbeeld op een Mac:

- downloaden → installeren → openen</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server.png)</br></br>

- Klik op Get Started</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step1.png)</br></br>

- Klik op New Server</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step2.png)</br></br>

- Kies bij Folder Path de map waarin aaps-ci-preparation.html staat en klik dan op Create Server.</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step3.png)</br></br>

- Als je dit scherm ziet, is de server gestart.</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step4.png)</br></br>

- Sluit Simple Web Server niet af. Ga naar je browser en open</br></br> [http://127.0.0.1:8080/aaps-ci-preparation.html](http://127.0.0.1:8080/aaps-ci-preparation.html)</br></br>

- Bekijk voor de volgende stappen de video hieronder, vanaf 2 minuten en 18 seconden.</br></br>
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

**Volgende: [Stap 3 – Google Drive autoriseren](BrowserBuildGoogleDrive.md) →**
