(aaps-ci-option2-computer)=

# Možnost 2 · Počítač – Nahrání stávajícího úložiště klíčů

```{note}
[Možnost 2](BrowserBuildO2.md) (nahrání stávajícího úložiště klíčů) na **počítači** (Windows / Mac / Linux).
```

## 1. Stáhněte si přípravný soubor

:::{include} BrowserBuildDownloadPrep.md
:::

## 2. Spusťte místní server a nahrajte úložiště klíčů

Použijte počítač (podporuje Windows/Mac/Linux)

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

Install Simple Web Server<br/><br/> If you are a Windows or Mac user, you can install it from the Microsoft Store or the Mac App Store. Pokud se prohlížeč zeptá, zda otevřít aplikaci obchodu, povolte to.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_store.png)<br/><br/>

Příklad na Macu:

- get → install → open (získat → instalovat → otevřít)<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server.png)<br/><br/>

- Klikněte na Get Started<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step1.png)<br/><br/>

- Klikněte na New Server<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step2.png)<br/><br/>

- V poli Folder Path vyberte složku, ve které je soubor aaps-ci-preparation.html, a pak klikněte na Create Server.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step3.png)<br/><br/>

- Pokud vidíte tuto obrazovku, server byl spuštěn.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step4.png)<br/><br/>

- Nezavírejte Simple Web Server. Please switch to your browser and open<br/><br/> [http://127.0.0.1:8080/aaps-ci-preparation.html](http://127.0.0.1:8080/aaps-ci-preparation.html)<br/><br/>

- For the subsequent steps, please refer to the video below, starting from 2 minutes 18 seconds.<br/><br/>
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

**Další: [Krok 3 – Autorizujte Disk Google](BrowserBuildGoogleDrive.md) →**
