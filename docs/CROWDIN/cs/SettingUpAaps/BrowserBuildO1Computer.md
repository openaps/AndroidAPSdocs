(aaps-ci-option1-computer)=

# Možnost 1 · Počítač – Vytvoření nového úložiště klíčů

```{note}
[Možnost 1](BrowserBuildO1.md) (vytvoření nového úložiště klíčů) na **počítači** (Windows / Mac / Linux).
```

## 1. Stáhněte si přípravný soubor

:::{include} BrowserBuildDownloadPrep.md
:::

## 2. Spusťte místní server a vytvořte úložiště klíčů

Použijte počítač (podporuje Windows/Mac/Linux)

Otevřete webovou stránku [https://simplewebserver.org/download.html](https://simplewebserver.org/download.html)

Install Simple Web Server<br/> If you are a Windows or Mac user, you can install it from the Microsoft Store or the Mac App Store.<br/> If your browser asks whether to open the store app, allow it.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_store.png)<br/>

Příklad na Macu:

- get → install → open (získat → instalovat → otevřít)<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server.png)<br/><br/>

- Klikněte na Get Started<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step1.png)<br/><br/>

- Klikněte na New Server<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step2.png)<br/><br/>

- V poli Folder Path vyberte složku, ve které je soubor aaps-ci-preparation.html, a pak klikněte na Create Server.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step3.png)<br/><br/>

- Pokud vidíte tuto obrazovku, server byl spuštěn.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step4.png)<br/><br/>

- Nezavírejte Simple Web Server. Please switch to your browser and open<br/> [http://127.0.0.1:8080/aaps-ci-preparation.html](http://127.0.0.1:8080/aaps-ci-preparation.html)<br/><br/>

- Další kroky najdete ve videu níže, od času 1 minuta 37 sekund.

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

**Další: [Krok 3 – Autorizujte Disk Google](BrowserBuildGoogleDrive.md) →**
